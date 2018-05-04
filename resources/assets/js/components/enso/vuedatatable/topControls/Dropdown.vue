<template>

    <div class="dropdown is-active"
        v-click-outside="hide">
        <div class="dropdown-trigger"
            @click="show=!show">
            <button class="button">
                <slot name="label"/>
                <span class="icon is-small angle"
                        :aria-hidden="!show">
                    <fa icon="angle-down"/>
                </span>
            </button>
        </div>
        <transition appear
            enter-active-class="fadeIn"
            leave-active-class="fadeOut">
            <div class="animated dropdown-menu menu-list"
                v-if="show"
                :style="widthStyle">
                <div class="dropdown-content has-text-centered"
                    :style="[widthStyle, heightStyle]">
                    <slot/>
                </div>
            </div>
        </transition>
    </div>

</template>

<script>

import vClickOutside from 'v-click-outside';
import fontawesome from '@fortawesome/fontawesome';
import { faAngleDown } from '@fortawesome/fontawesome-free-solid/shakable.es';

fontawesome.library.add(faAngleDown);

export default {
    name: 'Dropdown',

    directives: {
        clickOutside: vClickOutside.directive,
    },

    props: {
        width: {
            type: Number,
            default: 64,
        },
        height: {
            type: Number,
            default: 200,
        },
    },

    data() {
        return {
            show: false,
        };
    },

    computed: {
        widthStyle() {
            return {
                'min-width': `${this.width}px`,
            };
        },
        heightStyle() {
            return {
                'max-height': `${this.height}px`,
            };
        },
    },

    methods: {
        hide() {
            this.show = false;
        },
    },
};

</script>

<style lang="scss" scoped>

    .dropdown-content {
        overflow-y: auto;
    }

    .icon.angle {
        transition: transform .300s ease;

        &[aria-hidden="true"] {
            transform: rotate(180deg);
        }
    }

</style>
