<template>

    <div>
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
        data: {
            type: Object,
            required: true,
        },
        i18n: {
            type: Function,
            default(key) {
                return Object.keys(this.$options.methods).includes('__')
                    ? this.__(key)
                    : key;
            },
        },
        params: {
            type: Object,
            default: null,
        },
        locale: {
            type: String,
            default: 'en',
        },
    },

    data() {
        return {
            errors: new Errors(),
        };
    },

    methods: {
        columnSize(columns) {
            return `is-${parseInt(12 / columns, 10)}`;
        },
        flatten() {
            return this.data.sections
                .reduce((fields, section) => fields.concat(section.fields), []);
        },
        field(field) {
            return this.flatten()
                .find(item => item.name === field);
        },
        hasFields(section) {
            return section.fields.find(field => !field.meta.hidden) !== undefined;
        },
        focusError() {
            this.$el.querySelector('.help.is-danger')
                .scrollIntoView({ behavior: 'smooth' });
        },
    },
};

</script>
