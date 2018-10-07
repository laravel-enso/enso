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
                                @click="updateAll">
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
                                @click="destroyAll">
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
                                @click="update(notification)">
                                {{ notification.data.body }}
                            </span>
                            <span class="is-pulled-right">
                                {{ timeFromNow(notification.created_at) }}
                                <a class="delete has-margin-left-medium"
                                    @click="destroy(notification, index)"/>
                            </span>
                            <span class="is-destroyfix"/>
                        </div>
                    </li>
                </ul>
                <div class="has-text-centered has-margin-top-large">
                    <button :class="['button animated fadeIn', {'is-loading': loading}]"
                        @click="fetch">
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
                this.initialised = true;
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
            axios.post(route('core.notifications.destroy', notification.id)).then(() => {
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
