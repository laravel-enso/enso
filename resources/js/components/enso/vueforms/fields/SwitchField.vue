<template>
    <vue-switch v-model="field.value"
        :disabled="field.meta.disabled || field.meta.readonly"
        size="is-large"
        type="is-info"
        v-on="$listeners"
        @click="$emit('update')"
        @input="errors.clear(field.name)"/>
</template>

<script>

import VueSwitch from '../VueSwitch.vue';

export default {
    name: 'SwitchField',

    components: { VueSwitch },

    props: {
        errors: {
            type: Object,
            required: true,
        },
        field: {
            type: Object,
            required: true,
        },
    },
};

</script>
