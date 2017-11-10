<template>
    <div>
        <card footer
            :header="false"
            :footer-items="2">
            <div class="media has-padding-medium">
                <div class="media-content">
                    <p class="title is-5">
                        {{ contact.first_name }} {{ contact.last_name }}
                        <span class="tag is-pulled-right"
                            :class="contact.is_active ? 'is-success' : 'is-danger'">
                            <i class="fa fa-check"
                                v-if="contact.is_active">
                            </i>
                            <i class="fa fa-times" v-else></i>
                        </span>
                    </p>
                    <p>
                        <span class="icon is-small">
                            <i class="fa fa-envelope"></i>
                        </span>
                        {{ contact.email }}
                    </p>
                    <p>
                        <span class="icon is-small">
                            <i class="fa fa-phone"></i>
                        </span>
                        {{ contact.phone }}
                    </p>
                    <p>
                        <span class="icon is-small">
                            <i class="fa fa-sticky-note "></i>
                        </span>
                        {{ contact.obs }}
                    </p>
                </div>
            </div>
            <a slot="footer-item-1"
                 @click="showForm=true">
                {{ __('edit') }}
            </a>
            <a slot="footer-item-2"
                 @click="showModal=true">
                {{ __('delete') }}
            </a>
        </card>
        <contact-form :show="showForm"
            v-if="showForm"
            :contact="Object.assign({}, contact)"
            :type="type"
            :id="id"
            @update="Object.assign(contact, $event);showForm=false"
            @closed="showForm=false">
        </contact-form>
        <modal :show="showModal"
            @cancel-action="showModal=false"
            @commit-action="destroy()">
        </modal>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import ContactForm from './ContactForm.vue';
import Card from '../bulma/Card.vue';
import Modal from '../bulma/Modal.vue';

export default {
    name: 'Contact',

    components: { Card, ContactForm, Modal },

    props: {
        contact: {
            type: Object,
            required: true,
        },
        id: {
            type: Number,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
    },

    data() {
        return {
            showForm: false,
            showModal: false,
        };
    },

    methods: {
        destroy() { // fixme move in parent
            this.showModal = false;
            this.$parent.$parent.loading = true;

            axios.delete(route('core.contacts.destroy', this.contact.id, false)).then(() => {
                this.$emit('delete', this.index);
                this.$parent.$parent.loading = false;
            }).catch((error) => {
                this.$parent.$parent.loading = false;
                this.handleError(error);
            });
        },
    },
};

</script>
