<template>
    <div :class="['control', { 'has-icons-right': errors.has(field.name) }]">
        <money :class="['input', { 'is-danger': errors.has(field.name) }]"
            v-model="field.value"
            :decimal="field.meta.decimal"
            :disabled="field.meta.disabled"
            :negative="field.meta.negative"
            :placeholder="i18n(field.meta.placeholder)"
            :precision="field.meta.precision"
            :positive="field.meta.positive"
            :readonly="field.meta.readonly"
            :symbol="field.meta.symbol"
            :thousand="field.meta.thousand"
            :zero="field.meta.zero"
            v-on="$listeners"
            @input="errors.clear(field.name)"
            @keydown="$emit('update');"/>
            <error-icon v-if="errors.has(field.name)"/>
    </div>
</template>

<script>

import Money from '../Money.vue';
import ErrorIcon from '../parts/ErrorIcon.vue';

export default {
    name: 'MoneyField',

    components: { Money, ErrorIcon },

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
    },
};

</script>
