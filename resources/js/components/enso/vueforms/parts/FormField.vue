<template>
    <div class="field">
        <field-label :field="field"
            :i18n="i18n"/>
        <slot :name="field.name"
            v-if="field.meta.custom"/>
        <component :is="fieldType"
            :errors="errors"
            :field="field"
            :i18n="i18n"
            :locale="locale"
            v-else/>
        <p class="help is-danger"
            v-if="errors.has(field.name)">
            {{ errors.get(field.name) }}
        </p>
    </div>
</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faExclamationTriangle, faInfoCircle }
    from '@fortawesome/free-solid-svg-icons';
import FieldLabel from './FieldLabel.vue';
import SwitchField from '../fields/SwitchField.vue';
import InputField from '../fields/InputField.vue';
import MoneyField from '../fields/MoneyField.vue';
import DateField from '../fields/DateField.vue';
import SelectField from '../fields/SelectField.vue';
import TextareaField from '../fields/TextareaField.vue';
import WysiwygField from '../fields/WysiwygField.vue';

library.add(faExclamationTriangle, faInfoCircle);

export default {
    name: 'FormField',

    components: {
        FieldLabel,
        SwitchField,
        InputField,
        MoneyField,
        SelectField,
        DateField,
        TextareaField,
        WysiwygField,
    },

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
        locale: {
            type: String,
            required: true,
        },
    },

    computed: {
        fieldType() {
            switch (this.field.meta.type) {
            case 'input':
                switch (this.field.meta.content) {
                case 'text': case 'number': case 'email': case 'password':
                    return 'input-field';
                case 'checkbox':
                    return 'switch-field';
                case 'money':
                    return 'money-field';
                default:
                    throw new Error(`Misconfigured field "${this.field.name}"`);
                }
            case 'select':
                return 'select-field';
            case 'textarea':
                return 'textarea-field';
            case 'datepicker':
                return 'date-field';
            case 'timepicker':
                return 'time-field';
            case 'wysiwyg':
                return 'wysiwyg-field';
            default:
                throw new Error(`Misconfigured field "${this.field.name}"`);
            }
        },
    },
};
</script>
