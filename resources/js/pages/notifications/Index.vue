<template>

    <div>
        <div class="columns is-centered">
            <div class="column is-half-desktop">
                <div class="level is-mobile">
                    <div class="level-item"
                        v-if="notifications.length">
                        <a class="button is-success is-outlined"
                            @click="updateAll">
                            <span>{{ __("Mark all read") }}</span>
                            <span class="icon is-small">
                                <fa icon="check"/>
                            </span>
                        </a>
                    </div>
                    <div class="level-item">
                        <a :class="['button animated fadeIn', {'is-loading': loading}]"
                            @click="fetch">
                            <span>{{ __('Reload') }}</span>
                            <span class="icon is-small">
                                <fa icon="sync"/>
                            </span>
                        </a>
                    </div>
                    <div class="level-item is-marginless"
                        v-if="notifications.length">
                        <a class="button is-warning is-outlined has-margin-left-small"
                            @click="destroyAll">
                            <span>{{ __("Clear all") }}</span>
                            <span class="icon is-small">
                                <fa icon="trash-alt"/>
                            </span>
                        </a>
                    </div>
                </div>
                <transition-group tag="ul"
                    enter-active-class="fadeIn"
                    leave-active-class="fadeOut">
                    <li class="animated"
                        v-for="(notification, index) in notifications"
                        :key="index">
                        <div class="box has-background-light has-padding-medium has-margin-bottom-small"
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
                                @click="update(notification)">
                                {{ notification.data.body }}
                            </span>
                            <span class="is-pulled-right">
                                {{ timeFromNow(notification.created_at) }}
                                <a class="delete has-margin-left-medium is-medium"
                                    @click="destroy(notification, index)"/>
                            </span>
                            <span class="is-clearfix"/>
                        </div>
                    </li>
                </transition-group>
                <h4 class="title is-5 has-text-centered"
                    v-if="!loading && !notifications.length">
                    {{ __("You don't have any notifications") }}
                </h4>
            </div>
        </div>
    </div>

</template>

<script>

import debounce from 'lodash/debounce';
import { mapState } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBell, faCheck, faTrashAlt, faSpinner, faSync } from '@fortawesome/free-solid-svg-icons';
import format from '../../modules/enso/plugins/date-fns/format';
import formatDistance from '../../modules/enso/plugins/date-fns/formatDistance';

library.add(faBell, faCheck, faTrashAlt, faSpinner, faSync);

export default {

    data() {
        return {
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
        this.fetch = debounce(this.fetch, 500);
        this.fetch();
    },

    methods: {
        fetch() {
            if (this.loading) {
                return;
            }

            this.loading = true;

            axios.get(route('core.notifications.index'),
                { params: { offset: this.offset, limit: this.limit }},
            ).then(({ data }) => {
                this.notifications = this.offset ? this.notifications.concat(data) : data;
                this.offset = this.notifications.length;
                this.loading = false;
            }).catch(error => this.handleError(error));
        },
        update(notification) {
            axios.patch(route('core.notifications.update', notification.id))
                .then(({ data }) => {
                    notification.read_at = data.read_at;
                    this.$root.$emit('read-notification', notification);
                    if (notification.data.path && notification.data.path !== '#') {
                        this.$router.push({ path: notification.data.path });
                    }
                }).catch(error => this.handleError(error));
        },
        updateAll() {
            axios.post(route('core.notifications.updateAll'))
                .then(() => this.readAll())
                .catch(error => this.handleError(error));
        },
        readAll() {
            this.notifications.forEach((notification) => {
                notification.read_at = notification.read_at || format(new Date(), 'Y-MM-DD H:mm:s');
            });

            this.unreadCount = 0;

            this.$root.$emit('read-all-notifications');
        },
        destroyAll() {
            axios.post(route('core.notifications.destroyAll')).then(() => {
                this.notifications = [];
                this.$root.$emit('destroy-all-notifications');
            }).catch(error => this.handleError(error));
        },
        destroy(notification, index) {
            axios.delete(route('core.notifications.destroy', notification.id)).then(() => {
                this.notifications.splice(index, 1);
                this.$root.$emit('destroy-notification', notification);
            }).catch(error => this.handleError(error));
        },
        timeFromNow(date) {
            return formatDistance(date);
        },
    },
};

</script>
