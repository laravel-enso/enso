<template>

    <div>
        <div class="has-text-centered"
            v-if="!initialised && loading">
            <h4 class="title is-4 has-text-centered">
                {{ __('Loading') }}
                <span class="icon is-small has-margin-left-medium">
                    <fa icon="spinner"
                        size="xs"
                        spin/>
                </span>
            </h4>
        </div>
        <div class="columns is-centered"
            v-if="notifications.length">
            <div class="column is-half-desktop">
                <div class="level is-mobile">
                    <div class="level-left">
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
                    <div class="level-right">
                        <div class="level-item is-marginless">
                            <a class="button is-small is-warning has-margin-left-small"
                                @click="clearAll">
                                <span>{{ __("Clear all") }}</span>
                                <span class="icon is-small">
                                    <fa icon="trash-alt"/>
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <ul>
                    <li v-for="(notification, index) in notifications"
                        :key="index">
                        <div class="box is-radiusless has-padding-medium has-margin-bottom-small"
                            :class="{'is-bold': !notification.read_at}">
                            <fa :icon="notification.data.icon"
                                v-if="notification.data.icon"/>
                            <span :class="[
                                    'is-clickable', {
                                        'has-text-info':
                                            notification.data.path
                                            && notification.data.path !== '#'
                                    }
                                ]"
                                @click="markAsRead(notification)">
                                {{ notification.data.body }}
                            </span>
                            <span class="is-pulled-right">
                                {{ timeFromNow(notification.created_at) }}
                                <a class="delete has-margin-left-medium"
                                    @click="clear(notification, index)"/>
                            </span>
                            <span class="is-clearfix"/>
                        </div>
                    </li>
                </ul>
                <div class="has-text-centered has-margin-top-large">
                    <button :class="['button animated fadeIn', {'is-loading': loading}]"
                        @click="getData">
                        {{ __('Load more') }}
                    </button>
                </div>
            </div>
        </div>
        <h4 class="title is-5 has-text-centered"
            v-else-if="initialised && !notifications.length">
            {{ __("You don't have any notifications") }}
        </h4>
    </div>

</template>

<script>

import debounce from 'lodash/debounce';
import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faCheck, faTrashAlt, faSpinner } from '@fortawesome/free-solid-svg-icons';
import format from '../../modules/enso/plugins/date-fns/format';
import formatDistance from '../../modules/enso/plugins/date-fns/formatDistance';

library.add(faBell, faCheck, faTrashAlt, faSpinner);

export default {

    data() {
        return {
            initialised: false,
            limit: 200,
            notifications: [],
            offset: 0,
            loading: false,
        };
    },

    computed: {
        ...mapState(['user', 'meta']),
        ...mapState('layout', ['isTouch']),
    },

    created() {
        this.getData = debounce(this.getData, 500);
        this.getData();
    },

    methods: {
        getData() {
            if (this.loading) {
                return;
            }

            this.loading = true;

            axios.get(route(
                'core.notifications.getList',
                [this.offset, this.limit],
            )).then(({ data }) => {
                this.initialised = true;
                this.notifications = this.offset ? this.notifications.concat(data) : data;
                this.offset = this.notifications.length;
                this.loading = false;
            }).catch(error => this.handleError(error));
        },
        markAsRead(notification) {
            axios.patch(route('core.notifications.markAsRead', notification.id))
                .then(({ data }) => {
                    notification.read_at = data.read_at;
                    this.$bus.$emit('notification-read', notification);
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

            this.$bus.$emit('read-all-notifications');
        },
        clearAll() {
            axios.patch(route('core.notifications.clearAll')).then(() => {
                this.notifications = [];
                this.$bus.$emit('clear-all-notifications');
            }).catch(error => this.handleError(error));
        },
        clear(notification, index) {
            axios.delete(route('core.notifications.clear', notification.id)).then(() => {
                this.notifications.splice(index, 1);
                this.$bus.$emit('clear-notification', notification);
            }).catch(error => this.handleError(error));
        },
        timeFromNow(date) {
            return formatDistance(date);
        },
    },
};

</script>
