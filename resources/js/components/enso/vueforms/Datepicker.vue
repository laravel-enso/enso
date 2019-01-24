<template>
    <div class="control has-icons-left has-icons-right">
        <input :class="[
                'input',
                { 'is-danger': isDanger },
                { 'is-warning': isWarning }
            ]" type="text"
            :placeholder="placeholder"
            :name="name"
            :value="value"
            :disabled="disabled">
        <span class="icon is-small is-left">
            <fa icon="clock"
                v-if="timeOnly"/>
            <fa icon="calendar-alt"
                v-else/>
        </span>
        <span class="icon is-small is-right clear-button"
            @click="picker.clear()"
            v-if="value && !disabled && !isDanger && !isWarning">
            <a class="delete is-small"/>
        </span>
        <span :class="[
                'icon is-small is-right',
                { 'has-text-danger': isDanger },
                { 'has-text-warning': isWarning }
            ]" v-if="isDanger || isWarning">
            <fa icon="exclamation-triangle"/>
        </span>
    </div>
</template>

<script>

import Flatpickr from 'flatpickr';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faClock, faCalendarAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import i18n from './flatpickrLocale';

library.add(faClock, faCalendarAlt, faExclamationTriangle);

export default {
    name: 'Datepicker',

    props: {
        value: {
            type: null,
            required: true,
            default: null,
            validate(value) {
                return value === null || typeof value === 'string'
                        || value instanceof Date || value instanceof Array;
            },
        },
        name: {
            type: String,
            default: null,
        },
        time: {
            type: Boolean,
            default: false,
        },
        timeOnly: {
            type: Boolean,
            default: false,
        },
        placeholder: {
            type: String,
            default: 'Select Date',
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        weekNumbers: {
            type: Boolean,
            default: false,
        },
        format: {
            type: String,
            default: 'd-m-Y',
        },
        locale: {
            type: String,
            default: 'en',
            validator: val => Object.keys(i18n).includes(val),
        },
        isDanger: {
            type: Boolean,
            default: false,
        },
        isWarning: {
            type: Boolean,
            default: false,
        },
        min: {
            type: String,
            default: null,
        },
        max: {
            type: String,
            default: null,
        },
    },

    data: () => ({
        picker: null,
    }),

    computed: {
        config() {
            const self = this;

            return {
                weekNumbers: this.weekNumbers,
                defaultDate: this.value,
                dateFormat: this.format,
                allowInput: false,
                clickOpens: true,
                minDate: this.min,
                maxDate: this.max,
                noCalendar: this.timeOnly,
                enableTime: this.time || this.timeOnly,
                onChange(selectedDates, dateStr) {
                    self.$emit('input', dateStr);
                },
            };
        },
    },

    watch: {
        value(newValue) {
            this.picker.setDate(newValue);
        },
        locale(locale) {
            this.destroy();
            Flatpickr.localize(i18n[locale]);
            this.init();
        },
        min() {
            this.reset();
        },
        max() {
            this.reset();
        },
    },

    created() {
        Flatpickr.localize(i18n[this.locale]);
    },

    mounted() {
        this.init();
    },

    beforeDestroy() {
        this.destroy();
    },

    methods: {
        init() {
            this.picker = new Flatpickr(this.$el.querySelector('input'), this.config);
        },
        destroy() {
            this.picker.destroy();
        },
        reset() {
            this.destroy();
            this.init();
        },
    },
};

</script>

<style lang="scss" scoped>

    .control.has-icons-right .icon.clear-button {
        pointer-events: all;
    }

</style>
