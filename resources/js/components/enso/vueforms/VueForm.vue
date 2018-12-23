<template>

    <div v-if="data">
        <form-header :data="data"
            :i18n="i18n"/>
        <form class="is-marginless"
            @submit.prevent="$refs.actions.submit()">
            <div class="columns is-multiline"
                v-for="(section, index) in data.sections"
                :key="index"
                v-if="hasFields(section)">
                <div class="column is-12"
                    v-if="section.divider">
                    <divider :title="i18n(section.title)"
                        :placement="data.dividerTitlePlacement"/>
                </div>
                <div v-for="field in section.fields"
                    :class="[
                        'column',
                        section.columns !== 'custom'
                            ? columnSize(section.columns)
                            : `is-${field.column}`
                    ]" :key="field.name"
                    v-if="!field.meta.hidden">
                    <form-field :errors="errors"
                        :field="field"
                        :i18n="i18n"
                        :locale="locale"
                        v-on="$listeners">
                        <template :slot="field.name"
                            v-if="field.meta.custom">
                            <slot :name="field.name"
                                :errors="errors"
                                :field="field"
                                :i18n="i18n"
                                :locale="locale"
                                v-if="field.meta.custom"/>
                        </template>
                    </form-field>
                </div>
            </div>
            <form-actions :data="data"
                :errors="errors"
                :i18n="i18n"
                :params="params"
                v-on="$listeners"
                @focus-error="focusError"
                ref="actions">
                <template slot="actions">
                    <slot name="actions"/>
                </template>
            </form-actions>
        </form>

    </div>

</template>

<script>

import FormHeader from './parts/FormHeader.vue';
import FormField from './parts/FormField.vue';
import Divider from './parts/Divider.vue';
import FormActions from './parts/FormActions.vue';
import Errors from './classes/Errors';


export default {
    name: 'VueForm',

    components: {
        FormHeader, FormField, Divider, FormActions,
    },

    props: {
        i18n: {
            type: Function,
            default: key => key,
        },
        locale: {
            type: String,
            default: 'en',
        },
        params: {
            type: Object,
            default: null,
        },
        path: {
            type: String,
            required: true,
        },
    },

    data: () => ({
        data: null,
        errors: new Errors(),
    }),

    computed: {
        customFields() {
            return this.data
                ? this.data.sections
                    .reduce((fields, section) => fields
                        .concat(section.fields.filter(field => field.meta.custom)), [])
                : [];
        },
    },

    created() {
        this.fetch();
    },

    methods: {
        fetch() {
            axios.get(this.path, { params: this.params })
                .then(({ data }) => {
                    this.data = data.form;
                    this.$emit('loaded');
                }).catch(error => this.handleError(error));
        },
        columnSize(columns) {
            return `is-${parseInt(12 / columns, 10)}`;
        },
        flatten() {
            return this.data.sections
                .reduce((fields, section) =>
                    fields.concat(section.fields), []);
        },
        field(field) {
            return this.flatten()
                .find(item => item.name === field);
        },
        param(param) {
            return this.data.params[param];
        },
        routeParam(param) {
            return this.data.routeParams[param];
        },
        hasFields(section) {
            return !!section.fields
                .find(field => !field.meta.hidden);
        },
        focusError() {
            this.$el.querySelector('.help.is-danger')
                .scrollIntoView({ behavior: 'smooth' });
        },
    },
};

</script>
