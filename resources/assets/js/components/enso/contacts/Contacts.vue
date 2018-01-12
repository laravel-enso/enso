<template>

    <card icon="fa fa-address-card-o"
        refresh search
        :title="title || __('Contacts')"
        :overlay="loading"
        @refresh="get()"
        :open="open"
        ref="card"
        @query-update="query = $event"
        :badge="contacts.length"
        :controls="1">
        <a slot="control-1" class="card-header-icon">
            <span class="icon is-small"
                @click="create()">
                <i class="fa fa-plus-square"></i>
            </span>
        </a>
        <div class="has-padding-medium contacts-wrapper">
            <div class="columns is-multiline">
                <contact-form
                        v-if="showForm"
                        :action="action"
                        :contactId="editingContactId"
                        :type="type"
                        :id="id"
                        @form-close="showForm=false"
                        @destroy="get(); showForm=false"
                        @submit="get();showForm=false">
                </contact-form>

                <contact v-for="(contact, index) in filteredContacts"
                    class="column is-half-tablet is-one-third-widescreen"
                    :key="index"
                    :contact="contact"
                     @do-edit="handleEdit(contact)"
                     @do-delete="destroy"
                    :index="index"
                    :type="type"
                    :id="id">
                </contact>
            </div>
        </div>
    </card>

</template>

<script>

import { mapGetters } from 'vuex';
import Card from '../bulma/Card.vue';
import Contact from './Contact.vue';
import ContactForm from './ContactForm.vue';

export default {
    name: 'Contacts',

    components: { Card, Contact, ContactForm },

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

    computed: {
        ...mapGetters('locale', ['__']),
        filteredContacts() {
            return this.query
                ? this.contacts.filter(contact => contact.first_name.toLowerCase()
                    .indexOf(this.query.toLowerCase()) > -1
                    || contact.last_name.toLowerCase().indexOf(this.query.toLowerCase()) > -1)
                : this.contacts;
        },
    },

    data() {
        return {
            loading: false,
            query: '',
            contacts: [],
            showForm: false,
            action: null,
            editingContactId: null,
        };
    },

    methods: {
        get() {
            this.loading = true;

            axios.get(route('core.contacts.list', { id: this.id, type: this.type }, false)).then((response) => {
                this.contacts = response.data;
                this.loading = false;
            }).catch((error) => {
                this.loading = false;
                this.handleError(error);
            });
        },
        create() {
            if (this.$refs.card.collapsed) {
                this.$refs.card.toggle();
            }

            this.action = 'create';
            this.showForm = true;
        },
        add(contact) {
            this.contacts.push(contact);
        },
        destroy(payload) {
            axios.delete(route('core.contacts.destroy', payload.id, false)).then(() => {
                this.$parent.loading = false;
                this.contacts.splice(payload.index, 1);
            }).catch((error) => {
                this.$parent.loading = false;
                this.handleError(error);
            });
        },
        handleEdit(contact) {
            this.action = 'edit';
            this.editingContactId = contact.id;
            this.showForm = true;
        },
    },

    mounted() {
        this.get();
    },
};

</script>

<style>

    .contacts-wrapper {
        max-height: 415px;
        overflow-y: auto;
    }
</style>
