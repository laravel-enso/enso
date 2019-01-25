<template>
    <vue-form :i18n="__"
        :locale="locale"
        :params="params"
        :path="path"
        v-on="$listeners"
        @loaded="ready = true; $emit('loaded')"
        ref="form">
        <template v-for="field in customFields"
            :slot="field.name"
            slot-scope="{ errors }">
            <slot :name="field.name"
                :field="field"
                :i18n="__"
                :locale="locale"
                :errors="errors"/>
        </template>
        <slot name="actions" slot="actions"/>
    </vue-form>
</template>

<script>

import VueForm from './VueForm.vue';

export default {
    name: 'EnsoForm',

    components: { VueForm },

    props: {
        locale: {
            type: String,
            default() {
                return this.$store.state.preferences.global.lang;
            },
        },
        params: {
            type: Object,
            default: null,
        },
        path: {
            type: String,
            default() {
                return route(this.$route.name, this.$route.params, false);
            },
        },
    },

    data: () => ({
        ready: false,
    }),

    computed: {
        data() {
            return this.ready
                ? this.$refs.form.data
                : null;
        },
        customFields() {
            return this.ready
                ? this.$refs.form.customFields
                : [];
        },
        errors() {
            return this.ready
                ? this.$refs.form.errors
                : [];
        },
    },

    methods: {
        formData() {
            return this.ready
                ? this.$refs.form.formData()
                : null;
        },
        field(field) {
            return this.ready
                ? this.$refs.form.field(field)
                : null;
        },
        param(param) {
            return this.ready
                ? this.$refs.form.param(param)
                : null;
        },
        routeParam(param) {
            return this.ready
                ? this.$refs.form.routeParam(param)
                : null;
        },
        fetch() {
            this.$refs.form.fetch();
        },
    },

};

</script>
