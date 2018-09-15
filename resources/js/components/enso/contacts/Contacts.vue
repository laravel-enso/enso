<template>
    <div class="has-padding-medium wrapper">
        <div class="controls"
            v-if="controls">
            <button class="button"
                @click="create()">
                <span v-if="!isMobile">
                    {{ __('Create Contact') }}
                </span>
                <span class="icon">
                    <fa icon="plus"/>
                </span>
            </button>
            <button class="button has-margin-left-small"
                @click="get()">
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
                    @edit="edit(contact)"
                    @delete="destroy(contact, index)"
                    :index="index"
                    :type="type"
                    :id="id"/>
            </div>
            <contact-form
                v-if="form"
                :id="id"
                :type="type"
                :form="form"
                @close="form = null"
                @destroy="get(); form=false"
                @submit="get();form=false"/>
        </div>
    </div>

</template>

<script>

import { mapState } from 'vuex';
import Contact from './Contact.vue';
import ContactForm from './ContactForm.vue';

export default {
    name: 'Contacts',

    components: { Contact, ContactForm },

    props: {
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
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

    data() {
        return {
            loading: false,
            contacts: [],
            form: null,
            internalQuery: '',
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
                contactable_id: this.id,
                contactable_type: this.type,
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
        this.get();
    },

    methods: {
        get() {
            this.loading = true;

            axios.get(route('core.contacts.index'), {
                params: this.params,
            }).then(({ data }) => {
                this.contacts = data;
                this.loading = false;
                this.$emit('update');
            }).catch(error => this.handleError(error));
        },
        create() {
            this.loading = true;

            axios.get(route('core.contacts.create', this.params))
                .then(({ data }) => {
                    this.loading = false;
                    this.form = data.form;
                    this.$emit('update');
                }).catch(error => this.handleError(error));
        },
        edit(contact) {
            this.loading = true;

            axios.get(route('core.contacts.edit', contact.id))
                .then(({ data }) => {
                    this.loading = false;
                    this.form = data.form;
                }).catch(error => this.handleError(error));
        },
        destroy(contact, index) {
            this.loading = true;

            axios.delete(route('core.contacts.destroy', contact.id))
                .then(() => {
                    this.contacts.splice(index, 1);
                    this.loading = false;
                    this.$emit('update');
                }).catch(error => this.handleError(error));
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
