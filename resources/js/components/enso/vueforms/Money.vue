<template>

        <span v-if="label"
            ref="label">
            {{ money }}
        </span>
        <input v-model="money"
            :disabled="disabled"
            :readonly="readonly"
            :placeholder="placeholder"
            type="tel"
            @blur="update"
            @focus="money = value"
            ref="money"
            v-else>

</template>

<script>
import accounting from 'accounting-js';

export default {
    name: 'Money',

    props: {
        value: {
            type: [Number, String],
            default: null,
        },
        label: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: null,
        },
        symbol: {
            type: String,
            default: '$',
        },
        decimal: {
            type: String,
            default: '.',
            validator: val => ['.', ','].includes(val),
        },
        thousand: {
            type: String,
            default: ',',
            validator: val => [' ', '.', ','].includes(val),
        },
        precision: {
            type: Number,
            default: 2,
            validator: val => val >= 0,
        },
        positive: {
            type: String,
            default: '%s %v',
        },
        negative: {
            type: String,
            default: '%s (%v)',
        },
        zero: {
            type: String,
            default: '%s --',
        },
    },

    data() {
        return {
            money: null,
            isNumeric: false,
        };
    },

    watch: {
        value: 'format',
    },

    created() {
        this.isNumeric = typeof this.value === 'number';
        this.format();
    },

    methods: {
        format() {
            this.money = accounting.formatMoney(this.value, {
                symbol: this.symbol,
                precision: this.precision,
                thousand: this.thousand,
                decimal: this.decimal,
                format: {
                    pos: this.positive,
                    neg: this.negative,
                    zero: this.zero,
                },
            });
        },
        update(event) {
            let value = event.target.value.split(this.decimal).join('.');

            value = this.isNumeric
                ? this.round(value)
                : this.round(value).toFixed(this.precision);

            this.$emit('input', value);
            this.format();
        },
        round(value) {
            const factor = 10 ** this.precision;
            return Math.round(value * factor) / factor;
        },
    },
};

</script>
