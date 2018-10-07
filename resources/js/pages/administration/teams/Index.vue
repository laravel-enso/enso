<template>

    <div>
        <div v-if="initialised">
            <button class="button is-success has-margin-bottom-large"
                @click="team=factory()"
                :disabled="team">
                <span class="icon is-small">
                    <fa icon="plus"/>
                </span>
                <span>
                    {{ __('New team') }}
                </span>
            </button>
            <div class="control has-icons-left has-icons-right is-pulled-right"
                v-if="teams.length > 3">
                <input class="team-search input"
                    type="text"
                    :placeholder="__('Filter teams')"
                    v-model="query">
                <span class="icon is-small is-left">
                    <fa icon="search"/>
                </span>
                <span class="icon is-small is-right clear-button"
                    v-if="query"
                    @click="query = null">
                    <a class="delete is-small"/>
                </span>
            </div>
        </div>
        <h4 class="title is-4 has-text-centered"
            v-if="!initialised && loading">
            {{ __('Loading') }}
            <span class="icon is-small has-margin-left-medium">
                <fa icon="spinner"
                    size="xs"
                    spin/>
            </span>
        </h4>
        <div class="columns is-multiline" v-else>
            <div class="column is-one-third-widescreen is-half-tablet"
                v-if="team">
                <team :team="team"
                    @cancel="team = null"
                    @create="teams.unshift($event); team = null"/>
            </div>
            <div class="column is-one-third-widescreen is-half-tablet"
                v-for="(team, index) in filteredTeams"
                :key="index">
                <team :team="team"
                    @destroy="teams.splice(index, 1)"/>
            </div>
            <div class="column"
                v-if="teams.length === 0">
                <h3 class="subtitle is-3 has-text-centered">
                    {{ __('No teams were created yet') }}
                </h3>
            </div>
        </div>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faSearch, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Team from '../../../components/enso/teams/Team.vue';

library.add(faPlus, faSearch, faSpinner);

export default {
    components: { Team },

    data() {
        return {
            loading: false,
            initialised: false,
            teams: [],
            team: null,
            query: null,
        };
    },

    computed: {
        filteredTeams() {
            return this.query
                ? this.teams.filter(({ edit, name }) =>
                    edit || name.toLowerCase()
                        .indexOf(this.query.toLowerCase()) > -1)
                : this.teams;
        },
    },

    created() {
        this.get();
    },

    methods: {
        get() {
            this.loading = true;

            axios.get(route('administration.teams.index'))
                .then(({ data }) => {
                    this.teams = data;
                    this.loading = false;
                    this.initialised = true;
                })
                .catch(error => this.handleError(error));
        },
        factory() {
            return {
                id: null,
                name: null,
                userIds: [],
                users: [],
                edit: true,
            };
        },
    },
};

</script>

<style lang="scss" scoped>

    .control.has-icons-right {
        .icon.clear-button {
            pointer-events: all;
        }

        input.team-search {
            width: 150px;
        }
    }

</style>
