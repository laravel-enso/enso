<template>
    <card fixed>
        <div class="template has-padding-medium">
            <p class="title is-5">
                {{ contact.first_name }} {{ contact.last_name }}
                <span class="tag is-success is-pulled-right"
                    :class="contact.is_active ? 'is-success' : 'is-danger'">
                    <fa :icon="contact.is_active ? 'check' : 'times'"></fa>
                </span>
            </p>
            <p>
                <span class="icon is-small"
                    v-if="contact.email">
                    <fa icon="envelope"></fa>
                </span>
                {{ contact.email }}
            </p>
            <p>
                <span class="icon is-small"
                    v-if="contact.phone">
                    <fa icon="phone"></fa>
                </span>
                {{ contact.phone }}
            </p>
            <p>
                <span class="icon is-small"
                    v-if="contact.obs">
                    <fa icon="sticky-note"></fa>
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
                    <a>{{ __('delete') }}</a>
                </popover>
            </card-footer-item>
        </card-footer>
    </card>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faCheck, faTimes, faEnvelope, faPhone, faStickyNote }
    from '@fortawesome/fontawesome-free-solid/shakable.es';
import ContactForm from './ContactForm.vue';
import Card from '../bulma/Card.vue';
import CardFooter from '../bulma/CardFooter.vue';
import CardFooterItem from '../bulma/CardFooterItem.vue';
import Popover from '../bulma/Popover.vue';

fontawesome.library.add([
    faCheck, faTimes, faEnvelope, faPhone, faStickyNote,
]);

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
};

</script>

<style scoped>

    .template {
        height: 9em;
    }

</style>

