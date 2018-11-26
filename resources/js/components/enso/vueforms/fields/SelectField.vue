<template>

    <vue-select v-model="field.value"
        :disabled="field.meta.disabled"
        :readonly="field.meta.readonly"
        :has-error="errors.has(field.name)"
        :i18n="i18n"
        :translated="field.meta.translated"
        :label="field.meta.label || 'name'"
        :multiple="field.meta.multiple"
        :options="field.meta.options"
        :source="field.meta.source"
        :placeholder="i18n(field.meta.placeholder)"
        :custom-params="customParams"
        :params="params"
        :pivot-params="pivotParams"
        :track-by="field.meta.trackBy || 'id'"
        v-on="$listeners"
        @fetch="field.meta.options = $event"
        @input="errors.clear(field.name)"/>

</template>

<script>

import VueSelect from '../../select/VueSelect.vue';

export default {
    name: 'SelectField',

    components: { VueSelect },

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
        customParams: {
            type: Object,
            default: () => ({}),
        },
        params: {
            type: Object,
            default: () => ({}),
        },
        pivotParams: {
            type: Object,
            default: () => ({}),
        },
    },
};

</script>
