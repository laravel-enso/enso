<template>

    <div class="wrapper">
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
        <div class="columns is-reversed-mobile"
            v-if="initialised">
            <div class="column is-two-thirds">
                <timeline class="raises-on-hover"
                    :feed="feed"
                    :loading="loading"
                    @load-more="fetch()"/>
            </div>
            <div class="column is-one-third">
                <button class="button is-fullwidth"
                    :class="{ 'is-loading': loading }"
                    @click="reload()">
                    <span>
                        {{ __('Reload') }}
                    </span>
                    <span class="icon">
                        <fa icon="sync-alt"/>
                    </span>
                </button>
                <date-filter class="box raises-on-hover has-margin-top-large"
                    :locale="locale"
                    @update="filters.interval = $event"/>
                <div class="box has-padding-medium raises-on-hover has-background-light">
                    <p class="has-text-centered">
                        <strong>{{ __('What') }}</strong>
                    </p>
                    <vue-select-filter multiple
                        source="system.roles.options"
                        :placeholder="__('Roles')"
                        v-model="filters.roleIds"/>
                    <vue-select-filter multiple
                        source="administration.users.options"
                        label="person.name"
                        :placeholder="__('Authors')"
                        v-model="filters.userIds"/>
                    <vue-select-filter multiple
                        :options="actions"
                        :placeholder="__('Events')"
                        v-model="filters.events"/>
                </div>
            </div>
        </div>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import Timeline from './../../components/enso/activityLog/Timeline.vue';
import Overlay from './../../components/enso/bulma/Overlay.vue';
import DateFilter from './../../components/enso/bulma/DateFilter.vue';
import VueSelectFilter from './../../components/enso/select/VueSelectFilter.vue';

library.add(faSpinner);

export default {
    components: {
        Overlay,
        Timeline,
        DateFilter,
        VueSelectFilter,
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
                userIds: [],
                roleIds: [],
                interval: {
                    min: null,
                    max: null,
                },
                events: [],
            },
        };
    },

    computed: {
        ...mapGetters('preferences', { locale: 'lang' }),
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
            axios
                .get(route('core.activityLogs.index'), {
                    params: { offset: this.offset, filters: this.filters },
                    cancelToken: this.axiosRequest.token,
                })
                .then(({ data }) => {
                    this.initialised = true;
                    const length = this.length(data);

                    if (this.offset === 0) {
                        this.feed = data;
                    } else {
                        this.merge(data);
                    }

                    this.offset += length;
                    this.loading = false;
                })
                .catch((error) => {
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
