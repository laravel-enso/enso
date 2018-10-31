<template>
    <div :class="['control', { 'has-icons-right': errors.has(field.name) }]">
        <input :class="['input', { 'is-danger': errors.has(field.name) }]"
            v-model="field.value"
            :disabled="field.meta.disabled"
            :max="field.meta.max"
            :min="field.meta.min"
            :placeholder="i18n(field.meta.placeholder)"
            :readonly="field.meta.readonly"
            :step="field.meta.step"
            :type="field.meta.content"
            v-on="$listeners"
            @input="errors.clear(field.name)"
            @keydown="$emit('update');">
        <error-icon v-if="errors.has(field.name)"/>
    </div>

</template>

<script>

import ErrorIcon from '../parts/ErrorIcon.vue';

export default {
    name: 'InputField',

    components: { ErrorIcon },

    props: {
        errors: {
            type: Object,
            required: true,
        },
        field: {
            type: Object,
            required: true,
        },
        i18n: {
            type: Function,
            required: true,
        },
    },
};

</script>
