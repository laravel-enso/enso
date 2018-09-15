<template>
    <div class="box raises-on-hover">
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

