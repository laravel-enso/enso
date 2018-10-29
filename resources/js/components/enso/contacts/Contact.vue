<template>
    <div class="box has-background-light raises-on-hover">
        <p class="title is-5">
            {{ contact.name }}
        </p>
        <p class="subtitle is-6">
            {{ contact.position }}
        </p>
        <p class="has-text-weight-light is-7">
            {{ contact.email }} {{ contact.phone }}
        </p>
        <div class="has-text-centered has-margin-top-medium">
            <div class="details">
                <button class="button is-naked"
                    @click="$emit('edit')">
                    <span class="icon">
                        <fa icon="pencil-alt"/>
                    </span>
                </button>
                <popover placement="top"
                    @confirm="$emit('delete')">
                    <button class="button is-naked">
                        <span class="icon">
                            <fa icon="trash-alt"/>
                        </span>
                    </button>
                </popover>
            </div>
        </div>
    </div>

</template>

<script>

import { VTooltip } from 'v-tooltip';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCheck, faTimes, faEnvelope, faPhone, faInfoCircle, faPencilAlt, faTrashAlt }
    from '@fortawesome/free-solid-svg-icons';
import ContactForm from './ContactForm.vue';
import Popover from '../bulma/Popover.vue';

library.add([
    faCheck, faTimes, faEnvelope, faPhone, faInfoCircle, faPencilAlt, faTrashAlt,
]);

export default {
    name: 'Contact',

    directives: { tooltip: VTooltip },

    components: { ContactForm, Popover },

    props: {
        contact: {
            type: Object,
            required: true,
        },
    },
};

</script>

<style scoped>

    .details {
        display: flex;
        justify-content: center;
    }

</style>

