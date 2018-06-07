<template>

    <card :icon="icon"
        refresh
        scrollable
        :search="contacts.length > 1"
        :title="title || __('Contacts')"
        :overlay="loading"
        @refresh="get()"
        :collapsed="!open || isEmpty"
        ref="card"
        @query-update="query = $event"
        @expand="isEmpty
            ? $refs.card.collapse()
            : null"
        :badge="count"
        :controls="1">
        <card-control slot="control-1"
            @click="create()">
            <span class="icon is-small">
                <fa icon="plus-square"/>
            </span>
        </card-control>
        <div class="has-padding-medium wrapper">
            <div class="columns is-multiline">
                <contact-form
                    v-if="form"
                    :id="id"
                    :type="type"
                    :form="form"
                    @close="form = null"
                    @destroy="get(); form=false"
                    @submit="get();form=false"/>

                <div class="column is-half-widescreen is-one-third-fullhd"
                    v-for="(contact, index) in filteredContacts"
                    :key="index">
                    <contact
                        :contact="contact"
                        @edit="edit(contact)"
                        @delete="destroy(contact, index)"
                        :index="index"
                        :type="type"
                        :id="id"/>
                </div>
            </div>
        </div>
    </card>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faAddressCard, faPlusSquare } from '@fortawesome/fontawesome-free-solid/shakable.es';
import Card from '../bulma/Card.vue';
import CardControl from '../bulma/CardControl.vue';
import Contact from './Contact.vue';
import ContactForm from './ContactForm.vue';

fontawesome.library.add(faAddressCard, faPlusSquare);

export default {
    name: 'Contacts',

    components: {
        Card, CardControl, Contact, ContactForm,
    },

    props: {
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        open: {
            type: Boolean,
            default: false,
        },
        title: {
            type: String,
            default: null,
        },
    },

    data() {
        return {
            loading: false,
            query: '',
            contacts: [],
            form: null,
        };
    },

    computed: {
        filteredContacts() {
            return this.query
                ? this.contacts.filter(contact => contact.first_name.toLowerCase()
                    .indexOf(this.query.toLowerCase()) > -1
                    || contact.last_name.toLowerCase().indexOf(this.query.toLowerCase()) > -1)
                : this.contacts;
        },
        count() {
            return this.contacts.length;
        },
        isEmpty() {
            return this.count === 0;
        },
        icon() {
            return faAddressCard;
        },
    },

    created() {
        this.get();
    },

    methods: {
        get() {
            this.loading = true;

            axios.get(route('core.contacts.index'), {
                params: { contactable_id: this.id, contactable_type: this.type },
            }).then(({ data }) => {
                this.contacts = data;
                this.loading = false;
                this.$refs.card.resize();
            }).catch(error => this.handleError(error));
        },
        destroy(contact, index) {
            this.loading = true;

            axios.delete(route('core.contacts.destroy', contact.id))
                .then(() => {
                    this.contacts.splice(index, 1);
                    this.loading = false;
                }).catch(error => this.handleError(error));
        },
        create() {
            this.loading = true;

            if (!this.$refs.card.expanded) {
                this.$refs.card.toggle();
            }

            const params = { contactable_id: this.id, contactable_type: this.type };

            axios.get(route('core.contacts.create', params))
                .then(({ data }) => {
                    this.loading = false;
                    this.form = data.form;
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
    },
};

</script>

<style scoped>

    .wrapper {
        max-height: 415px;
        overflow-y: auto;
    }
</style>
