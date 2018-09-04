<template>

    <div :class="[
            'navbar-item notifications',
            { 'has-dropdown': !isTouch },
            { 'is-active': show }
        ]"
        v-click-outside="hide">
        <span v-if="isTouch" class="is-clickable"
             @click="$router.push({'name': 'core.notifications.index'})">
            <span class="icon">
                <fa icon="bell"/>
            </span>
            <sup class="has-text-danger notification-count">{{ unreadCount || null }}</sup>
            <overlay v-if="loading"/>
        </span>
        <a :class="['navbar-link', { 'rotate': show }]"
            @click="show = !show"
            v-else>
            <span class="icon">
                <fa icon="bell"/>
            </span>
            <sup class="has-text-danger notification-count">{{ unreadCount || null }}</sup>
            <overlay v-if="loading"/>
        </a>
        <div class="navbar-dropdown is-right"
            v-if="show">
            <div class="notification-list"
                @scroll="computeScrollPosition($event)">
                <a class="navbar-item"
                    @click="markAsRead(notification)"
                    v-for="(notification, index) in notifications"
                    :key="index">
                    <div class="navbar-content">
                        <p class="is-notification" :class="{ 'is-bold': !notification.read_at }">
                            <fa :icon="notification.data.icon"
                                v-if="notification.data.icon"/>
                            {{ notification.data.body }}
                        </p>
                        <p>
                            <small class="has-text-info">
                                {{ timeFromNow(notification.created_at) }}
                            </small>
                        </p>
                    </div>
                </a>
            </div>
            <hr class="navbar-divider"
                v-if="notifications.length">
            <nav class="level navbar-item" v-if="notifications.length">
                <div class="level-left">
                    <div class="level-item">
                        <a class="button is-small is-info has-margin-left-small"
                            @click="
                                show = false;
                                $router.push({'name': 'core.notifications.index'})
                            ">
                            <span>{{ __("See all") }}</span>
                            <span class="icon is-small">
                                <fa icon="eye"/>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <a class="button is-small is-success"
                            @click="markAllAsRead">
                            <span>{{ __("Mark all as read") }}</span>
                            <span class="icon is-small">
                                <fa icon="check"/>
                            </span>
                        </a>
                    </div>
                </div>
            </nav>
            <a v-else class="navbar-item">
                <span v-if="unreadCount || loading">{{ __("Loading...") }}</span>
                <span v-else-if="!unreadCount">{{ __("You don't have any notifications") }}</span>
            </a>
        </div>
    </div>

</template>

<script>

import debounce from 'lodash/debounce';
import { mapState } from 'vuex';
import vClickOutside from 'v-click-outside';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import Favico from 'favico.js';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faCheck, faEye, faCogs, faQuestion } from '@fortawesome/free-solid-svg-icons';
import Overlay from '../../../components/enso/bulma/Overlay.vue';
import format from '../../../modules/enso/plugins/date-fns/format';
import formatDistance from '../../../modules/enso/plugins/date-fns/formatDistance';

import './icons';

library.add(faBell, faCheck, faEye, faCogs, faQuestion);

export default {
    name: 'Notifications',

    directives: {
        clickOutside: vClickOutside.directive,
    },

    components: { Overlay },

    data() {
        return {
            favico: new Favico({
                animation: 'popFade',
            }),
            limit: 200,
            notifications: [],
            unreadCount: 0,
            totalCount: 0,
            needsUpdate: true,
            offset: 0,
            loading: false,
            Echo: null,
            show: false,
            desktopNotifications: false,
        };
    },

    computed: {
        ...mapState(['user', 'meta']),
        ...mapState('layout', ['isTouch']),
    },

    watch: {
        unreadCount(val) {
            this.favico.badge(val);
        },
        show() {
            if (this.show) {
                this.getData();
            }
        },
    },

    created() {
        this.getData = debounce(this.getData, 500);
        this.initLaravelEcho();
        this.initDesktopNotification();
        this.getCount();
        this.listen();
        this.addBusListeners();
    },

    methods: {
        hide() {
            this.show = false;
        },
        getCount() {
            axios.get(route('core.notifications.getCount'))
                .then(({ data }) => {
                    this.unreadCount = data;
                }).catch(error => this.handleError(error));
        },
        getData() {
            if (!this.needsUpdate || this.loading) {
                return;
            }

            this.loading = true;

            axios.get(route(
                'core.notifications.getList',
                [this.offset, this.limit],
            )).then(({ data }) => {
                this.notifications = this.offset ? this.notifications.concat(data) : data;
                this.offset = this.notifications.length;
                this.needsUpdate = false;
                this.loading = false;
            }).catch(error => this.handleError(error));
        },
        markAsRead(notification) {
            axios.patch(route('core.notifications.markAsRead', notification.id))
                .then(({ data }) => {
                    this.unreadCount = Math.max(--this.unreadCount, 0);
                    notification.read_at = data.read_at;

                    if (notification.data.path && notification.data.path !== '#') {
                        this.$router.push({ path: notification.data.path });
                    }
                }).catch(error => this.handleError(error));
        },
        markAllAsRead() {
            axios.patch(route('core.notifications.markAllAsRead'))
                .then(() => {
                    this.readAll();
                }).catch(error => this.handleError(error));
        },
        readAll() {
            this.notifications.forEach((notification) => {
                notification.read_at = notification.read_at || format(new Date(), 'Y-MM-DD H:mm:s');
            });

            this.unreadCount = 0;
        },
        clearAll() {
            axios.patch(route('core.notifications.clearAll')).then(() => {
                this.notifications = [];
                this.unreadCount = 0;
            }).catch(error => this.handleError(error));
        },
        initLaravelEcho() {
            this.Echo = new Echo({
                broadcaster: 'pusher',
                key: this.meta.pusher,
                cluster: this.meta.pusherCluster,
                namespace: 'App.Events',
            });
        },
        initDesktopNotification() {
            if (!('Notification' in window) || Notification.permission === 'denied') {
                return;
            }

            if (Notification.permission !== 'granted') {
                Notification.requestPermission((permission) => {
                    if (!('permission' in Notification)) {
                        Notification.permission = permission;
                    }

                    this.desktopNotifications = permission === 'granted';
                });
                return;
            }

            this.desktopNotifications = Notification.permission === 'granted';
        },
        listen() {
            const self = this;
            this.Echo.private(`App.User.${this.user.id}`)
                .notification(({
                    level, body, title,
                }) => {
                    self.unreadCount++;
                    self.needsUpdate = true;
                    self.offset = 0;

                    if (!document.hidden) {
                        this.$toastr[level](body, title);
                        return;
                    }

                    if (this.desktopNotifications) {
                        const notification = new Notification(title, {
                            body,
                        });

                        notification.onclick = () => {
                            window.focus();
                        };

                        window.navigator.vibrate(500);
                    }
                });
        },
        computeScrollPosition(event) {
            const a = event.target.scrollTop;
            const b = event.target.scrollHeight - event.target.clientHeight;

            if (a / b > 0.7) {
                this.needsUpdate = true;
                this.getData();
            }
        },
        timeFromNow(date) {
            return formatDistance(date);
        },
        addBusListeners() {
            this.$bus.$on('notification-read', (notification) => {
                this.unreadCount = Math.max(--this.unreadCount, 0);
                const existing = this.notifications.find(({ id }) => id === notification.id);

                if (existing) {
                    existing.read_at = notification.read_at;
                }
            });

            this.$bus.$on('read-all-notifications', () => this.readAll());

            this.$bus.$on('clear-notification', (notification) => {
                const index = this.notifications.findIndex(({ id }) => id === notification.id);

                if (!notification.read_at) {
                    this.unreadCount = Math.max(--this.unreadCount, 0);
                }

                if (index >= 0) {
                    this.notifications.splice(index, 1);
                }
            });

            this.$bus.$on('clear-all-notifications', () => {
                this.notifications = [];
                this.unreadCount = 0;
            });
        },
    },
};

</script>

<style lang="scss" scoped>

    sup.notification-count {
        font-size: 0.75em;
        margin-top: -10px;
    }

    div.notification-list {
        width: 300px;
        overflow-x: hidden;
        max-height: 400px;
        overflow-y: auto;
    }

    p.is-notification {
        white-space: normal;
        width: 268px;
        overflow-x: hidden;
    }

    .navbar-link {
        &:after {
            transform: rotate(135deg);
            transition: transform .300s ease;
        }

        &.rotate:after {
            transform: rotate(-45deg);
        }
    }

</style>
