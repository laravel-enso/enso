<template>

    <div class="navbar-item has-dropdown"
        v-click-outside="hide"
        :class="{ 'is-active': show }">
        <a class="navbar-link"
            @click="show=!show">
            <span class="icon is-small">
                <i class="fas fa-bell">
                </i>
            </span>
            <sup class="has-text-danger notification-count">{{ unreadCount || null }}</sup>
            <overlay v-if="loading"></overlay>
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
                            {{ notification.data.body }}
                        </p>
                        <p>
                            <small class="has-text-info">{{ notification.created_at | timeFromNow }}</small>
                        </p>
                    </div>
                </a>
            </div>
            <hr class="navbar-divider"
                v-if="notifications.length">
            <nav class="level navbar-item" v-if="notifications.length">
                <div class="level-left">
                    <div class="level-item">
                        <a class="button is-small is-success"
                            @click="markAllAsRead">
                            <span>{{ __("Mark all read") }}</span>
                            <span class="icon is-small">
                                <i class="fas fa-check"></i>
                            </span>
                        </a>
                    </div>
                </div>
                <div class="level-right">
                    <div class="level-item">
                        <a class="button is-small is-warning has-margin-left-small"
                            @click="clearAll">
                            <span>{{ __("Clear all") }}</span>
                            <span class="icon is-small">
                                <i class="fas fa-trash-alt"></i>
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

import { debounce } from 'lodash';
import { mapGetters, mapState } from 'vuex';
import vClickOutside from 'v-click-outside';
import Pusher from 'pusher-js';
import Echo from 'laravel-echo';
import Overlay from '../../../components/enso/bulma/Overlay.vue';

export default {
    name: 'Notifications',

    directives: {
        clickOutside: vClickOutside.directive,
    },

    components: { Overlay },

    computed: {
        ...mapGetters('locale', ['__']),
        ...mapState(['user', 'meta']),
    },

    data() {
        return {
            limit: 200,
            notifications: [],
            unreadCount: 0,
            totalCount: 0,
            needsUpdate: true,
            offset: 0,
            loading: false,
            Echo: null,
            show: false,
        };
    },

    created() {
        this.getData = debounce(this.getData, 500);
        this.init();
        this.getCount();
        this.listen();
    },

    watch: {
        show: {
            handler() {
                if (this.show) {
                    this.getData();
                }
            },
        },
    },

    methods: {
        hide() {
            this.show = false;
        },
        getCount() {
            axios.get(route('core.notifications.getCount', [], false)).then(({ data }) => {
                this.unreadCount = data;
            }).catch(error => this.handleError(error));
        },
        getData() {
            if (!this.needsUpdate || this.loading) {
                return;
            }

            this.loading = true;

            axios.get(route('core.notifications.getList', [this.offset, this.limit], false)).then(({ data }) => {
                this.notifications = this.offset ? this.notifications.concat(data) : data;
                this.offset = this.notifications.length;
                this.needsUpdate = false;
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        markAsRead(notification) {
            axios.patch(route('core.notifications.markAsRead', notification.id, false).toString()).then(({ data }) => {
                this.unreadCount = this.unreadCount > 0
                    ? --this.unreadCount
                    : this.unreadCount; // fixme

                notification.read_at = data.read_at;
                this.$router.push({ path: notification.data.path });
            }).catch(error => this.handleError(error));
        },
        markAllAsRead() {
            axios.patch(route('core.notifications.markAllAsRead', [], false)).then(() => {
                this.notifications.forEach((notification) => {
                    notification.read_at = notification.read_at || moment().format('Y-MM-DD H:mm:s');
                });

                this.unreadCount = 0;
            }).catch(error => this.handleError(error));
        },
        clearAll() {
            axios.patch(route('core.notifications.clearAll', [], false)).then(() => {
                this.notifications = [];
                this.unreadCount = 0;
            }).catch(error => this.handleError(error));
        },
        init() {
            this.Echo = new Echo({
                broadcaster: 'pusher',
                key: this.meta.pusher,
                cluster: this.meta.pusherCluster,
                namespace: 'App.Events',
            });
        },
        listen() {
            const self = this;
            this.Echo.private(`App.User.${this.user.id}`).notification(() => {
                self.unreadCount++;
                self.needsUpdate = true;
                self.offset = 0;
                toastr.info(this.__('You just got a notification...'));
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
    },
};

</script>

<style>

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

</style>
