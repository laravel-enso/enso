<template>
    <card fixed>
        <div class="template has-padding-medium">
            <p class="title is-5">
                {{ contact.name }}
                <span class="tag is-success is-pulled-right"
                    :class="contact.isActive ? 'is-success' : 'is-danger'">
                    <fa :icon="contact.isActive ? 'check' : 'times'"/>
                </span>
            </p>
            <p class="subtitle is-5">
                {{ contact.position }}
            </p>
            <p>
                <span class="icon is-small"
                    v-if="contact.email">
                    <fa icon="envelope"/>
                </span>
                {{ contact.email }}
            </p>
            <p>
                <span class="icon is-small"
                    v-if="contact.phone">
                    <fa icon="phone"/>
                </span>
                {{ contact.phone }}
                <span class="icon has-text-info is-pulled-right"
                    v-tooltip="contact.obs"
                    v-if="contact.obs">
                    <fa icon="info-circle" size="lg"/>
                </span>
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
                    <a>{{ __('delete') }}</a>
                </popover>
            </card-footer-item>
        </card-footer>
    </card>

</template>

<script>

import { VTooltip } from 'v-tooltip';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes, faEnvelope, faPhone, faInfoCircle }
    from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm.vue';
import Card from '../bulma/Card.vue';
import CardFooter from '../bulma/CardFooter.vue';
import CardFooterItem from '../bulma/CardFooterItem.vue';
import Popover from '../bulma/Popover.vue';

library.add([
    faCheck, faTimes, faEnvelope, faPhone, faInfoCircle,
]);

export default {
    name: 'Contact',

    directives: { tooltip: VTooltip },

    components: {
        Card, CardFooter, CardFooterItem, ContactForm, Popover,
    },

    props: {
        contact: {
            type: Object,
            required: true,
        },
    },
};

</script>

<style scoped>

    .template {
        height: 9em;
    }

</style>

