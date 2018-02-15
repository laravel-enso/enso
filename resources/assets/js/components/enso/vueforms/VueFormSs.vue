<template>

    <vue-form :data="data"
        v-if="data"
        ref="form">
        <template v-for="field in customFields"
            :slot="field.name"
            slot-scope="{ field, errors }">
            <slot :name="field.name"
                :field="field"
                :errors="errors">
            </slot>
        </template>
    </vue-form>

</template>

<script>

import VueForm from '../../../components/enso/vueforms/VueForm.vue';

export default {
    name: 'VueFormSs',

    components: { VueForm },

    props: {
        params: {
            type: Array,
            required: true,
        },
    },

    data() {
        return {
            data: null,
        };
    },

    computed: {
        customFields() {
            return this.data
                ? this.data.fields.filter(field => field.meta.custom)
                : null;
        },
    },

    created() {
        axios.get(route(...this.params)).then(({ data }) => {
            this.data = data.form;
            this.$emit('loaded');
        }).catch(error => this.handleError(error));
    },

};
</script>
