<template>
    <card :header="false"
        footer
        :footer-items="2">
        <div class="contact-template has-padding-medium">
            <p class="title is-5">
                {{ contact.first_name }} {{ contact.last_name }}
                <span class="tag is-pulled-right"
                        :class="contact.is_active ? 'is-success' : 'is-danger'">
                    <i class="fas fa-check"
                        v-if="contact.is_active">
                    </i>
                    <i class="fas fa-times" v-else></i>
                </span>
            </p>
            <p>
                <span class="icon is-small"
                    v-if="contact.email">
                    <i class="fas fa-envelope"></i>
                </span>
                {{ contact.email }}
            </p>
            <p>
                <span class="icon is-small"
                    v-if="contact.phone">
                    <i class="fas fa-phone"></i>
                </span>
                {{ contact.phone }}
            </p>
            <p>
                <span class="icon is-small"
                    v-if="contact.obs">
                    <i class="fas fa-sticky-note "></i>
                </span>
                {{ contact.obs }}
            </p>
        </div>

        <a slot="footer-item-1"
            @click="$emit('edit')">
            {{ __('edit') }}
        </a>
        <popover slot="footer-item-2" @confirm="$emit('delete')">
            <a>{{__('delete')}}</a>
        </popover>
    </card>

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
        contact: {
            type: Object,
            required: true,
        },
    },

    computed: {
        ...mapGetters('locale', ['__']),
    },
};

</script>

<style scoped>

    .contact-template {
        height: 9em;
    }

</style>

