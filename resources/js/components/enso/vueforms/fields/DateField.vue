<template>
    <datepicker v-model="field.value"
        :disabled="field.meta.disabled"
        :format="field.meta.format"
        :is-danger="errors.has(field.name)"
        :locale="locale"
        :placeholder="i18n(field.meta.placeholder)"
        :time="field.meta.time"
        :time-only="timeOnly"
        v-on="$listeners"
        @input="errors.clear(field.name)"
        @keydown="$emit('update');"/>
</template>

<script>

import Datepicker from '../Datepicker.vue';

export default {
    name: 'DateField',

    components: { Datepicker },

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
        locale: {
            type: String,
            required: true,
        },
        timeOnly: {
            type: Boolean,
            default: false,
        },
    },
};

</script>
