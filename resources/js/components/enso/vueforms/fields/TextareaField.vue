<template>
    <div class="control has-icons-right">
        <textarea :class="[
                'textarea',
                { 'is-danger': errors.has(field.name) },
                { 'fixed': !field.meta.resize }
            ]"
            :disabled="field.meta.disabled"
            v-model="field.value"
            :placeholder="i18n(field.meta.placeholder)"
            :rows="field.meta.rows"
            v-on="$listeners"
            @input="errors.clear(field.name)"/>
        <error-icon v-if="errors.has(field.name)"/>
    </div>

</template>

<script>

import ErrorIcon from '../parts/ErrorIcon.vue';

export default {
    name: 'TextareaField',

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

<style lang="scss" scoped>

    .fixed {
        resize: none;
    }

</style>
