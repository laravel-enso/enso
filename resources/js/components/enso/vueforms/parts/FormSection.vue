<template>
    <div class="columns is-multiline has-margin-bottom-large">
        <div class="column is-12"
            v-if="section.divider">
            <divider :title="i18n(section.title)"
                :placement="dividerTitlePlacement"/>
        </div>
        <div v-for="field in visibleFields"
            :class="[
                'column',
                section.columns !== 'custom'
                    ? columnSize(section.columns)
                    : `is-${field.column}`
            ]" :key="field.name">
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
</template>

<script>

import FormField from './FormField.vue';
import Divider from './Divider.vue';

export default {
    name: 'FormSection',

    components: { FormField, Divider },

    props: {
        section: {
            type: Object,
            required: true,
        },
        errors: {
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
        dividerTitlePlacement: {
            type: String,
            default: null,
        },
    },

    computed: {
        visibleFields() {
            return this.section.fields.filter(field => !field.meta.hidden);
        },
    },

    methods: {
        columnSize(columns) {
            return `is-${parseInt(12 / columns, 10)}`;
        },
    },
};

</script>
