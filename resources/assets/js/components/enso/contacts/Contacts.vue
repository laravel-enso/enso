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
                <contact v-for="(contact, index) in filteredContacts"
                    class="column is-half-tablet is-one-third-widescreen"
                    :key="index"
                    :contact="contact"
                    @delete="destroy($event)"
                    @edit="edit($event)"
                    :index="index"
                    :type="type"
                    :id="id">
                </contact>
            </div>
            <contact-form :show="showForm"
                v-if="showForm"
                :contact="emptyContact()"
                :type="type"
                :id="id"
                @closed="showForm=false"
                @store="add($event);showForm=false">
            </contact-form>
        </div>
    </card>

</template>

<script>

    import Card from '../bulma/Card.vue';
    import Contact from './Contact.vue';
    import ContactForm from './ContactForm.vue';
    import { mapGetters } from 'vuex';

    export default {
        name: 'Contacts',

        components: { Card, Contact, ContactForm },

        props: {
            id: {
                type: Number,
                required: true
            },
            type: {
                type: String,
                required: true
            },
            theme: {
                type: String,
                default: 'primary'
            },
            solid: {
                type: Boolean,
                default: false,
            },
            open: {
                type: Boolean,
                default: false
            },
            title: {
                type: String,
                default: null
            }
        },

        computed: {
            ...mapGetters('locale', ['__']),
            filteredContacts() {
                return this.query
                    ? this.contacts.filter(contact => {
                        return contact.first_name.toLowerCase().indexOf(this.query.toLowerCase()) > -1
                            || contact.last_name.toLowerCase().indexOf(this.query.toLowerCase()) > -1;
                    })
                    : this.contacts;
            },
        },

        data() {
            return {
                loading: false,
                query: '',
                contacts: [],
                showForm: false
            }
        },

        methods: {
            get() {
                this.loading = true;

                axios.get(route('core.contacts.list', { id: this.id, type: this.type }, false)).then(response => {
                    this.contacts = response.data;
                    this.loading = false;
                }).catch(error => {
                    this.loading = false;
                    this.handleError(error);
                });
            },
            emptyContact() {
                return {
                    first_name: "",
                    last_name: "",
                    email: "",
                    phone: "",
                    obs: ""
                };
            },
            create() {
                if (this.$refs.card.collapsed) {
                    this.$refs.card.toggle();
                }

                this.showForm=true;
            },
            add(contact) {
                this.contacts.push(contact);
            },
            destroy(index) {
                this.contacts.splice(index,1);
            }
        },

        mounted() {
            this.get();
        }
    }

</script>

<style>

    .contacts-wrapper {
        max-height: 415px;
        overflow-y: auto;
    }
</style>