<template>

    <div class="overlay is-overlay"
        :class="{ 'is-opaque': !transparent }">
        <div class="overlay-loader"
            :style="overlayColor"
            :class="loaderSize"/>
    </div>

</template>

<script>

export default {
    name: 'Overlay',

    props: {
        color: {
            type: String,
            default: '#f44336',
        },
        size: {
            type: String,
            default: 'small',
            validator(value) {
                return ['small', 'medium', 'large'].includes(value);
            },
        },
        transparent: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            overlayColor: {
                border: `2px solid ${this.color}`,
                'border-right-color': 'transparent',
                'border-top-color': 'transparent',
            },
        };
    },

    computed: {
        loaderSize() {
            return `is-${this.size}`;
        },
    },
};

</script>

<style lang="scss" scoped>

    .is-opaque {
        background: rgba(255, 255, 255, 0.4);
    }

    .overlay.is-overlay {
        display: flex;

        .overlay-loader {
            margin: auto;
            -webkit-animation: spinAround 500ms infinite linear;
            animation: spinAround 500ms infinite linear;
            border-radius: 50%;
            content: "";

            &.is-small {
                height: 1em;
                width: 1em;
            }

            &.is-medium {
                width: 2em;
                height: 2em;
            }

            &.is-large {
                width: 3em;
                height: 3em;
            }
        }
    }

</style>
