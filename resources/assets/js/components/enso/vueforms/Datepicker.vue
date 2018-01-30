<template>

    <div class="control has-icons-left has-icons-right">
        <input class="input control"
            type="text"
            :placeholder="placeholder"
            :name="name"
            :value="value"
            :disabled="disabled">
        <span class="icon is-small is-left">
            <fa icon="clock"
                v-if="timeOnly">
            </fa>
            <fa icon="calendar-alt" v-else></fa>
        </span>
        <span class="clear"
            v-if="value"
            @click="picker.clear()">
        </span>
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

<style lang="scss" scoped>

    .clear {
        &:before {
            transform: rotate(45deg);
        }

        &:after {
            transform: rotate(-45deg);
        }

        position: absolute;
        top: 7px;
        right: 10px;
        height: 22px;
        width: 22px;
        display: block;
        cursor: pointer;
        z-index: 1;
    }

    .clear:after, .clear:before {
        content: "";
        display: block;
        position: absolute;
        width: 1px;
        height: 16px;
        background: #aaa;
        top: 3px;
        right: 10px;
    }

</style>
