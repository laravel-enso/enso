<template>

    <div class="columns is-centered is-multiline">
        <div class="column" v-if="!initialised && loading">
            <h4 class="title is-4 has-text-centered">
                {{ __('Loading') }}
                <span class="icon is-small has-margin-left-medium">
                    <fa icon="spinner"
                        size="xs"
                        spin/>
                </span>
            </h4>
        </div>
        <div class="column is-full"
            v-if="initialised">
            <div class="columns">
                <div class="column is-two-fifths">
                    <date-interval-filter :min="filters.intervals.min"
                        @update-min="filters.intervals.min = $event"
                        :max="filters.intervals.max"
                        @update-max="filters.intervals.max = $event"/>
                </div>
                <div class="column is-one-fifth-desktop">
                    <vue-select-filter multiple
                        source="system.roles.selectOptions"
                        :placeholder="__('Roles')"
                        v-model="filters.role_ids"/>
                </div>
                <div class="column is-one-fifth-desktop">
                    <vue-select-filter multiple
                        source="administration.users.selectOptions"
                        label="fullName"
                        :placeholder="__('Authors')"
                        v-model="filters.user_ids"/>
                </div>
                <div class="column is-one-fifth-desktop">
                    <vue-select-filter multiple
                        :options="actions"
                        :placeholder="__('Events')"
                        v-model="filters.events"/>
                </div>
            </div>
        </div>
        <div class="column is-two-thirds"
            v-if="initialised">
            <timeline :feed="feed"
                :loading="loading"
                @load-more="fetch()"
                @refresh="reload()"/>
        </div>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Timeline from './../../components/enso/activityLog/Timeline.vue';
import Overlay from './../../components/enso/bulma/Overlay.vue';
import DateIntervalFilter from './../../components/enso/bulma/DateIntervalFilter.vue';
import VueSelectFilter from './../../components/enso/select/VueSelectFilter.vue';

library.add(faSpinner);

export default {
    components: {
        Overlay, Timeline, DateIntervalFilter, VueSelectFilter,
    },

    data() {
        return {
            initialised: false,
            loading: false,
            axiosRequest: null,
            feed: [],
            offset: 0,
            actions: [
                { name: 'Created', id: 1 },
                { name: 'Updated', id: 2 },
                { name: 'Deleted', id: 3 },
                { name: 'Custom', id: 4 },
            ],
            filters: {
                user_ids: [],
                role_ids: [],
                intervals: {
                    min: null,
                    max: null,
                },
                events: [],
            },
        };
    },

    watch: {
        filters: {
            handler() {
                this.reload();
            },
            deep: true,
        },
    },

    created() {
        this.fetch();
    },

    methods: {
        fetch() {
            this.loading = true;

            if (this.axiosRequest) {
                this.axiosRequest.cancel();
            }

            this.axiosRequest = axios.CancelToken.source();
            axios.get(route('core.activityLogs.index'), {
                params: { offset: this.offset, filters: this.filters },
                cancelToken: this.axiosRequest.token,
            }).then(({ data }) => {
                this.initialised = true;
                const length = this.length(data);

                if (this.offset === 0) {
                    this.feed = data;
                } else {
                    this.merge(data);
                }

                this.offset += length;
                this.loading = false;
            }).catch((error) => {
                if (axios.isCancel(error)) {
                    this.axiosRequest = null;
                    return;
                }

                this.handleError(error);
            });
        },
        reload() {
            this.offset = 0;
            this.fetch();
        },
        length(feed) {
            return feed.reduce((total, { list }) => (total += list.length), 0);
        },
        merge(feed) {
            if (!feed.length) {
                return;
            }

            if (this.feed[this.feed.length - 1].date === feed[0].date) {
                this.feed[this.feed.length - 1].list.push(...feed.shift().list);
            }

            this.feed.push(...feed);
        },
    },
};

</script>

<style lang="scss">
</style>
