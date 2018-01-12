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
                 @click="handleEdit">
                {{ __('edit') }}
            </a>
            <popover slot="footer-item-2"
                     placement="bottom-end"
                     @confirm="destroy"
                     @show="dialog = true"
                     @hide="dialog = controls = false">

                <a  @click="dialog=true">
                    {{__('delete')}}
                </a>
            </popover>
        </card>
    </div>

</template>

<script>

import { mapGetters } from 'vuex';
import ContactForm from './ContactForm.vue';
import Card from '../bulma/Card.vue';
import Popover from '../bulma/Popover.vue';

export default {
    name: 'Contact',

    components: { Card, ContactForm, Popover },

    props: {
        index: {
            type: Number,
            required: true,
        },
        contact: {
            type: Object,
            required: true,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
    },

    data() {
        return {
        };
    },

    methods: {
        handleEdit() {
            this.$emit('do-edit');
        },
        destroy() {
            this.$emit('do-delete', { index: this.index, id: this.contact.id });
        },
    },
};

</script>
