<template>

    <label class="vue-switch" :class="[size, type, { 'checked': value }]">
        <input
        ref="input"
        type="checkbox"
        class="checkbox"
        v-model="checked"
        @change="$emit('input', checked)"
        :disabled="disabled"
        :readonly="readonly"
        :required="required"
        :checked="value">
    </label>

</template>

<script>

const sizes = ['is-small', 'is-medium', 'is-large'];
const types = ['is-primary', 'is-warning', 'is-danger', 'is-success', 'is-info'];

export default {

    props: {
        disabled: {
            type: Boolean,
            default: false,
        },
        readonly: {
            type: Boolean,
            default: false,
        },
        required: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: null,
            validator: value => types.includes(value),
        },
        size: {
            type: String,
            default: null,
            validator: value => sizes.includes(value),
        },
        value: {
            type: Boolean,
            required: true,
        },
    },

    watch: {
        value(value) {
            this.checked = value;
        },
    },

    data() {
        return {
            checked: this.value,
        };
    },
};

</script>

<style lang="scss">

@import '~bulma/sass/utilities/initial-variables';
@import '~bulma/sass/utilities/derived-variables.sass';

.field {
    .vue-switch {
        margin-top: 6px;
        margin-bottom: 6px;
    }
}

.vue-switch {
    --height: $size-normal;

    input {
        opacity: 0;
    }

    position: relative;
    border-radius: var(--height);
    width: calc(1.625 * var(--height));
    height: var(--height);
    background-color: $border;
    border: 1px solid $border;
    cursor: pointer;
    display: inline-flex;
    vertical-align: middle;
    align-items: center;
    justify-content: center;

    &:before,
    &:after {
        content: ' ';
        position: absolute;
        top: 0;
        left: 0;
        height: calc(var(--height) - 2px);
        border-radius: var(--height);
        transition: 0.25s;
    }

    &:before {
        width: calc(1.625 * var(--height) - 2px);
        background-color: $grey-lighter;
    }

    &:after {
        width: calc(var(--height) - 2px);
        background-color: #fff;
        box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);
    }

    &.checked {
        border-color: $text;
        background-color: $text;
        &:before {
            transform: scale(0);
        }
        &:after {
            transform: translateX(calc(0.625 * var(--height)));
        }
    }

    @each $name, $pair in $colors {
        $color: nth($pair, 1);
        &.is-#{$name} {
            &.checked {
                border-color: $color;
                background-color: $color;
            }
        }
    }

    &.is-small {
        --height: $size-small;
    }
    &.is-medium {
        --height: $size-medium;
    }
    &.is-large {
        --height: $size-large;
    }
}
</style>
