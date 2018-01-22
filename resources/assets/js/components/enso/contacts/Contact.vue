<template>
    <card fixed>
        <div class="template has-padding-medium">
            <p class="title is-5">
                {{ contact.first_name }} {{ contact.last_name }}
                <span class="tag is-success is-pulled-right"
                    v-if="contact.is_active">
                    <i class="fas fa-check"></i>
                </span>
                <span class="tag is-danger is-pulled-right"
                    v-else>
                    <i class="fas fa-times"></i>
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

        <card-footer slot="footer">
            <card-footer-item>
                <a @click="$emit('edit')">
                    {{ __('edit') }}
                </a>
            </card-footer-item>
            <card-footer-item>
                <popover @confirm="$emit('delete')">
                    <a>{{__('delete')}}</a>
                </popover>
            </card-footer-item>
        </card-footer>
    </card>

</template>

<script>

import { mapGetters } from 'vuex';
import ContactForm from './ContactForm.vue';
import Card from '../bulma/Card.vue';
import CardFooter from '../bulma/CardFooter.vue';
import CardFooterItem from '../bulma/CardFooterItem.vue';
import Popover from '../bulma/Popover.vue';

export default {
    name: 'Contact',

    components: {
        Card, CardFooter, CardFooterItem, ContactForm, Popover,
    },

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

    .template {
        height: 9em;
    }

</style>

