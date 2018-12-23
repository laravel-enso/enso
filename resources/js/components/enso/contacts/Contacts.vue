<template>
    <div class="wrapper">
        <div class="controls"
             v-if="controls">
            <button class="button"
                    @click="create()">
                <span v-if="!isMobile">
                    {{ __('New Contact') }}
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
                <input class="input is-rounded"
                       type="text"
                       v-model="internalQuery"
                       :placeholder="__('Filter')">
                <span class="icon is-small is-left">
                    <fa icon="search"/>
                </span>
                <span class="icon is-small is-right clear-button"
                      v-if="internalQuery"
                      @click="internalQuery = ''">
                    <a class="delete is-small"/>
                </span>
            </p>
        </div>
        <div class="columns is-multiline"
             :class="{'has-margin-top-large': controls}">
            <div class="column is-half-tablet is-one-third-widescreen"
                 v-for="(contact, index) in filteredContacts"
                 :key="index">
                <contact :contact="contact"
                     :id="id"
                     :index="index"
                     @edit="edit(contact)"
                     @delete="destroy(contact, index)"/>
            </div>
            <contact-form :path="path"
                @close="path = null"
                @destroy="fetch()"
                @submit="fetch(); path = null"
                @loaded="$refs.form.field(`${routeKey}_id`).value = id"
                ref="form"
                v-if="path"/>
        </div>
        <modal :show="!!deletedContact"
            @close="deletedContact = null">
            <div class="box">
                <h5 class="subtitle is-5">
                    {{ __("Do you want to delete the contact's associated person?") }}
                </h5>
                <hr>
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <button class="button is-outlined"
                                @click="deletedContact = null">
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
import Contact from './Contact.vue';
import ContactForm from './ContactForm.vue';
import Modal from '../bulma/Modal.vue';

library.add(faPlus, faSync, faSearch);

export default {
    name: 'Contacts',

    components: { Contact, ContactForm, Modal },

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
        routeKey: {
            type: String,
            required: true,
        },
        routePrefix: {
            type: String,
            required: true,
        },
    },

    data() {
        return {
            loading: false,
            contacts: [],
            path: null,
            internalQuery: '',
            deletedContact: null,
        };
    },

    computed: {
        ...mapState('layout', ['isMobile']),
        filteredContacts() {
            const query = this.internalQuery.toLowerCase();

            return query
                ? this.contacts.filter(({ name, position }) =>
                    name.toLowerCase().indexOf(query) > -1
                        || position.toLowerCase().indexOf(query) > -1)
                : this.contacts;
        },
        count() {
            return this.filteredContacts.length;
        },
        params() {
            return {
                [this.routeKey]: this.id,
            };
        },
    },

    watch: {
        count() {
            this.$emit('update');
        },
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

            axios.get(route(this.route('index'), this.params))
                .then(({ data }) => {
                    this.contacts = data;
                    this.loading = false;
                    this.$emit('update');
                }).catch(error => this.handleError(error));
        },
        create() {
            this.path = route(this.route('create'), this.params);
        },
        edit(contact) {
            this.path = route(this.route('edit'), { contact: contact.id });
        },
        destroy(contact, index) {
            this.loading = true;

            axios.delete(route(this.route('destroy'), { contact: contact.id }))
                .then(() => {
                    this.deletedContact = this.contacts.splice(index, 1).pop();
                    this.loading = false;
                }).catch(error => this.handleError(error));
        },
        destroyPerson() {
            this.loading = true;

            axios.delete(route('administration.people.destroy', { person: this.deletedContact.person_id }))
                .then(() => {
                    this.deletedContact = null;
                    this.loading = false;
                }).catch(error => this.handleError(error));
        },
        route(suffix) {
            return `${this.routePrefix}.${suffix}`;
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
