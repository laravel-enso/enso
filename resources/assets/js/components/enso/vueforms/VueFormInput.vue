<template>

    <span>
        <div class="control"
            :class="{ 'has-icons-right': hasError }"
            v-if="field.meta.content === 'text'">
            <input class="input"
                :class="{ 'is-danger': hasError }"
                :readonly="field.meta.readonly"
                @keydown="$emit('update')"
                v-model="field.value"
                type="text"
                :disabled="field.meta.disabled">
            <span class="icon is-small is-right has-text-danger"
                v-if="hasError">
                <fa icon="exclamation-triangle"></fa>
            </span>
        </div>
        <div class="control"
            :class="{ 'has-icons-right': hasError }"
            v-if="field.meta.content === 'email'">
            <input class="input"
                :class="{ 'is-danger': hasError }"
                :readonly="field.meta.readonly"
                @keydown="$emit('update')"
                v-model="field.value"
                type="email"
                :disabled="field.meta.disabled">
            <span class="icon is-small is-right has-text-danger"
                v-if="hasError">
                <fa icon="exclamation-triangle"></fa>
            </span>
        </div>
        <div class="control"
            :class="{ 'has-icons-right': hasError }"
            v-if="field.meta.content === 'number'">
            <input class="input"
                :class="{ 'is-danger': hasError }"
                :readonly="field.meta.readonly"
                @keydown="$emit('update')"
                v-model="field.value"
                type="number"
                :step="field.meta.step"
                :min="field.meta.min"
                :max="field.meta.max"
                :disabled="field.meta.disabled">
            <span class="icon is-small is-right has-text-danger"
                v-if="hasError">
                <fa icon="exclamation-triangle"></fa>
            </span>
        </div>
        <span v-if="field.meta.content === 'checkbox'">
            <vue-switch v-model="field.value"
                size="is-large"
                type="is-success"
                :disabled="field.meta.disabled || field.meta.readonly"
                @click="$emit('update')">
            </vue-switch>
        </span>
    </span>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faExclamationTriangle } from '@fortawesome/fontawesome-free-solid/shakable.es';
import VueSwitch from './VueSwitch.vue';

fontawesome.library.add(faExclamationTriangle);

export default {
    components: { VueSwitch },

    props: {
        field: {
            type: Object,
            required: true,
        },
        hasError: {
            type: Boolean,
            default: false,
        },
    },
};

</script>
