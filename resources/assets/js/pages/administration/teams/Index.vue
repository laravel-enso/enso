<template>

    <div>
        <div>
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
            <div class="control has-icons-right is-pulled-right"
                v-if="teams.length > 3">
                <input class="team-search input"
                    type="text"
                    :placeholder="__('Filter teams')"
                    v-model="query">
                <span class="icon is-small is-right clear-button"
                    v-if="query"
                    @click="query = null">
                    <a class="delete is-small"/>
                </span>
            </div>
        </div>
        <div class="columns is-multiline">
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

import fontawesome from '@fortawesome/fontawesome';
import { faPlus } from '@fortawesome/fontawesome-free-solid/shakable.es';
import Team from '../../../components/enso/teams/Team.vue';

fontawesome.library.add([faPlus]);

export default {
    components: { Team },

    data() {
        return {
            teams: [],
            team: null,
            query: null,
        };
    },

    computed: {
        filteredTeams() {
            return this.query
                ? this.teams.filter(({ name }) =>
                    name.indexOf(this.query) > -1)
                : this.teams;
        },
    },

    created() {
        this.get();
    },

    methods: {
        get() {
            axios.get(route('administration.teams.index'))
                .then(({ data }) => (this.teams = data))
                .catch(error => this.handleError(error));
        },
        factory() {
            return {
                id: null,
                name: null,
                userList: [],
                users: [],
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

        input.teams-search {
            width: 180px;
        }
    }

</style>
