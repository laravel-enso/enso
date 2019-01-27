<template>
    <div class="wrapper">
        <div v-if="controls"
             class="controls">
            <button v-if="canAccess('administration.companies.people.create')"
                    class="button"
                    @click="create()">
                <span v-if="!isMobile">
                    {{ __('Associate Person') }}
                </span>
                <span class="icon">
                    <fa icon="plus"/>
                </span>
            </button>
            <button class="button has-margin-left-small"
                    @click="fetch()">
                <span v-if="!isMobile">
                    {{ __('Reload') }}
                </span>
                <span class="icon">
                    <fa icon="sync"/>
                </span>
            </button>
            <p class="control has-icons-left has-icons-right has-margin-left-large">
                <input v-model="internalQuery"
                       class="input is-rounded"
                       type="text"
                       :placeholder="__('Filter')">
                <span class="icon is-small is-left">
                    <fa icon="search"/>
                </span>
                <span v-if="internalQuery"
                      class="icon is-small is-right clear-button"
                      @click="internalQuery = ''">
                    <a class="delete is-small"/>
                </span>
            </p>
        </div>
        <div class="columns is-multiline"
             :class="{'has-margin-top-large': controls}">
            <div v-for="(person, index) in filteredPeople"
                 :key="index"
                 class="column is-half-tablet is-one-third-widescreen">
                <person :id="id"
                     :person="person"
                     :index="index"
                     @edit="edit(person)"
                     @delete="destroy(person, index)"/>
            </div>
            <person-form v-if="path"
                ref="form"
                :path="path"
                @close="path = null"
                @destroy="fetch()"
                @edit-person="navigateToPerson"
                @submit="fetch(); path = null"
                @loaded="$refs.form.field('company_id').value = id"/>
        </div>
        <modal :show="!!deletedPerson"
            @close="deletedPerson = null">
            <div class="box">
                <h5 class="subtitle is-5">
                    {{ __("Do you want to delete the person's associated person?") }}
                </h5>
                <hr>
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <button class="button is-outlined"
                                @click="deletedPerson = null">
                                {{ __('Cancel') }}
                            </button>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <button class="button is-danger has-margin-left-small"
                                @click="destroyPerson">
                                {{ __('Yes') }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faSync, faSearch } from '@fortawesome/free-solid-svg-icons';
import { mapState } from 'vuex';
import Person from './Person.vue';
import PersonForm from './PersonForm.vue';
import Modal from '../bulma/Modal.vue';

library.add(faPlus, faSync, faSearch);

export default {
    name: 'People',

    components: { Person, PersonForm, Modal },

    props: {
        id: {
            type: Number,
            required: true,
        },
        query: {
            type: String,
            default: '',
        },
        controls: {
            type: Boolean,
            default: false,
        },
    },

    data: () => ({
        loading: false,
        people: [],
        path: null,
        internalQuery: '',
        deletedPerson: null,
    }),

    computed: {
        ...mapState('layout', ['isMobile']),
        filteredPeople() {
            const query = this.internalQuery.toLowerCase();

            return query
                ? this.people.filter(({ name, position }) => name.toLowerCase().indexOf(query) > -1
                        || position.toLowerCase().indexOf(query) > -1)
                : this.people;
        },
        count() {
            return this.filteredPeople.length;
        },
    },

    watch: {
        query() {
            this.internalQuery = this.query;
        },
    },

    created() {
        this.fetch();
    },

    methods: {
        fetch() {
            this.loading = true;

            axios.get(route(
                'administration.companies.people.index', { company: this.id },
            )).then(({ data }) => {
                this.people = data;
                this.$emit('update');
                this.loading = false;
            }).catch(error => this.handleError(error));
        },
        create() {
            this.path = route(
                'administration.companies.people.create', { company: this.id },
            );
        },
        edit(person) {
            this.path = route(
                'administration.companies.people.edit', { person: person.id },
            );
        },
        destroy(person, index) {
            this.loading = true;

            axios.delete(route(
                'administration.companies.people.destroy', { person: person.id },
            )).then(() => {
                const deletedPerson = this.people.splice(index, 1).pop();

                if (this.canAccess('administration.people.destroy')) {
                    this.deletedPerson = deletedPerson;
                }

                this.$emit('update');
                this.loading = false;
            }).catch(error => this.handleError(error));
        },
        destroyPerson() {
            this.loading = true;

            axios.delete(
                route('administration.people.destroy',
                    { person: this.deletedPerson.id }),
            ).then(() => {
                this.deletedPerson = null;
                this.loading = false;
            }).catch(error => this.handleError(error));
        },
        navigateToPerson($event) {
            this.path = null;

            this.$nextTick(() => {
                this.$router.push({
                    name: 'administration.people.edit',
                    params: { person: $event },
                });
            });
        },
    },
};

</script>

<style lang="scss" scoped>

    .controls {
        display: flex;
        justify-content: center;
    }

</style>
