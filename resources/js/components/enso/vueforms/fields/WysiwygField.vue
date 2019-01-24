<template>
    <wysiwyg v-model="field.value"
        :readonly="field.meta.readonly"
        :has-error="errors.has(field.name)"
        v-on="$listeners"
        @input="errors.clear(field.name)"/>
</template>

<script>

import Wysiwyg from '../Wysiwyg.vue';

export default {
    name: 'WysiwygField',

    components: { Wysiwyg },

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
