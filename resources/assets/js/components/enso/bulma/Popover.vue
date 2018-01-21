<template>

    <v-popover :open="open"
        :trigger="trigger"
        :placement="placement"
        ref="dialog"
        @show="$emit('show')"
        @hide="$emit('hide')">
        <slot></slot>
        <template slot="popover">
            <button class="button is-small is-success has-margin-right-medium"
                @click="$refs.dialog.hide();$emit('confirm')">
                <span class="icon is-small">
                    <i class="fas fa-check"></i>
                </span>
            </button>
            <button class="button is-small is-danger"
                @click="$refs.dialog.hide();$emit('cancel')">
                <span class="icon is-small">
                    <i class="fas fa-times"></i>
                </span>
            </button>
        </template>
    </v-popover>

</template>

<script>

import { VPopover } from 'v-tooltip';

const positions = [
    'top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start',
    'bottom-end', 'left', 'left-start', 'left-end',
];

const triggers = ['hover', 'click', 'focus', 'manual'];

export default {
    name: 'Popover',

    components: { VPopover },

    props: {
        placement: {
            type: String,
            default: 'bottom',
            validator(value) {
                return positions.includes(value);
            },
        },
        trigger: {
            type: String,
            default: 'click',
            validator(value) {
                return value.split(' ').filter(val => !triggers.includes(val)).length === 0;
            },
        },
        open: {
            type: Boolean,
            default: false,
        },
    },


};

</script>
