<template>

    <div v-if="data">
        <form-header :data="data"
            :i18n="i18n"/>
        <form class="is-marginless"
            @submit.prevent="$refs.actions.submit()">
            <enso-tabs class="form-tabs"
                @selected="$emit('tab-selected', $event)"
                v-if="tabbed">
                <span slot="label"
                    slot-scope="{ tab }"
                    :class="{'badge is-badge-danger is-badge-small': errorCount(tab)}"
                    :data-badge="errorCount(tab)">
                    {{ i18n(tab) }}
                </span>
                <tab :id="i18n(tab)"
                    :key="tab"
                    keep-alive
                    v-for="tab in tabs">
                    <form-section :section="section"
                        :i18n="i18n"
                        :locale="locale"
                        :errors="errors"
                        :divider-title-placement="data.dividerTitlePlacement"
                        :key="index"
                        v-for="(section, index) in sections(tab)"
                        v-if="hasFields(section)">
                        <template :slot="field.name"
                            v-for="field in customFields">
                            <slot :name="field.name"
                                :errors="errors"
                                :field="field"
                                :i18n="i18n"
                                :locale="locale"
                                v-if="field.meta.custom"/>
                        </template>
                    </form-section>
                </tab>
            </enso-tabs>
            <form-section :section="section"
                :i18n="i18n"
                :locale="locale"
                :errors="errors"
                :divider-title-placement="data.dividerTitlePlacement"
                :key="index"
                v-for="(section, index) in data.sections"
                v-if="!tabbed && hasFields(section)">
                <template :slot="field.name"
                    v-for="field in customFields">
                    <slot :name="field.name"
                        :errors="errors"
                        :field="field"
                        :i18n="i18n"
                        :locale="locale"
                        v-if="field.meta.custom"/>
                </template>
            </form-section>
            <form-actions class="has-margin-top-large"
                :data="data"
                :form-data="formData"
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
import FormActions from './parts/FormActions.vue';
import Errors from './classes/Errors';
import FormSection from './parts/FormSection.vue';
import EnsoTabs from '../bulma/EnsoTabs.vue';
import Tab from '../bulma/Tab.vue';

export default {
    name: 'VueForm',

    components: {
        FormHeader, FormActions, EnsoTabs, Tab, FormSection,
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
        tabbed() {
            return this.data && this.data.tabs;
        },
        tabs() {
            return this.data && this.data.tabs
                ? this.data.sections
                    .reduce((tabs, { tab }) => {
                        if (!tabs.includes(tab)) {
                            tabs.push(tab);
                        }

                        return tabs;
                    }, [])
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
        flatten() {
            return this.data.sections
                .reduce((fields, section) =>
                    fields.concat(section.fields), []);
        },
        sections(tab) {
            return this.data.sections.filter(section => section.tab === tab);
        },
        errorCount(tab) {
            return this.sections(tab).reduce((fields, section) => {
                fields.push(...section.fields);
                return fields;
            }, []).filter(({ name }) => this.errors.has(name)).length;
        },
        formData() {
            return this.data.sections
                .reduce((fields, section) => fields
                    .concat(section.fields), [])
                .reduce((object, field) => {
                    object[field.name] = field.value;
                    return object;
                }, { _params: this.params });
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

<style lang="scss">

    .form-tabs {
        position: relative;
        z-index: 1;
    }

</style>
