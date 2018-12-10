<template>

    <vue-form :i18n="__"
        :locale="locale"
        :params="params"
        :path="path"
        @loaded="ready = true; $emit('loaded')"
        v-on="$listeners"
        ref="form">
        <template v-for="field in customFields"
            :slot="field.name"
            slot-scope="{ field, errors }">
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

import VueForm from '../../../components/enso/vueforms/VueForm.vue';

export default {
    name: 'VueFormSs',

    components: { VueForm },

    props: {
        path: {
            type: String,
            default() {
                return route(this.$route.name, this.$route.params, false);
            },
        },
        params: {
            type: Object,
            default: null,
        },
        locale: {
            type: String,
            default() {
                return this.$store.state.preferences.global.lang;
            },
        },
    },

    data: () => ({
        ready: false,
    }),

    computed: {
        customFields() {
            return this.ready
                ? this.$refs.form.data.sections
                    .reduce((fields, section) => fields
                        .concat(section.fields.filter(field => field.meta.custom)), [])
                : [];
        },
    },

    methods: {
        field(field) {
            return this.ready && this.$refs.form.field(field);
        },
        param(param) {
            return this.ready && this.$refs.form.param(param);
        },
        routeParam(param) {
            return this.ready && this.$refs.form.routeParam(param);
        },
    },

};
</script>
