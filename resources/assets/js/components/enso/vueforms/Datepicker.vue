<template>

    <div class="flatpickr">
        <div class="control has-icons-right">
            <input type="text"
                :placeholder="placeholder"
                :id="'date-input-' + _uid"
                :name="name"
                :value="value"
                class="input control"
                :disabled="disabled">
            <span class="icon is-small is-right">
                <fa icon="clock"
                    v-if="timeOnly">
                </fa>
                <fa icon="calendar-alt" v-else></fa>
            </span>
        </div>
    </div>

</template>

<script>

import Flatpickr from 'flatpickr';
import fontawesome from '@fortawesome/fontawesome';
import { faClock, faCalendarAlt } from '@fortawesome/fontawesome-free-solid/shakable.es';

fontawesome.library.add(faClock, faCalendarAlt);

// const FlatpickrL10ns = {
//     ro: require('flatpickr/dist/l10n/ro.js').ro,
// };
// Flatpickr.localize(FlatpickrL10ns[Store.user.preferences.global.lang]); //fixme

export default {
    props: {
        value: {
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
            default: 'Select Date', // fixme
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        format: {
            type: String,
            default: 'd-m-Y',
        },
        inputClass: {
            type: String,
            default: 'form-control',
        },
    },

    data() {
        return {
            picker: null,
        };
    },

    computed: {
        config(self = this) {
            return {
                weekNumbers: false,
                defaultDate: this.value,
                dateFormat: this.format,
                allowInput: false,
                clickOpens: true,
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
    },

    mounted() {
        this.picker = new Flatpickr(this.$el.querySelector('input'), this.config);
    },

    beforeDestroy() {
        this.picker.destroy();
    },
};

</script>

<style src="flatpickr/dist/themes/material_green.css"></style>

<style>

    a.input-button {
        cursor: pointer;
    }

</style>
