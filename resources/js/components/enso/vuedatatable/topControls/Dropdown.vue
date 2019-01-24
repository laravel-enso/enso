<template>
    <div class="dropdown is-active"
        v-click-outside="hide">
        <div class="dropdown-trigger"
            @click="visible = !visible"
            v-click-outside="attemptHide">
            <button class="button">
                <slot name="label"/>
                <span class="icon is-small angle"
                        :aria-hidden="!visible">
                    <fa icon="angle-down"/>
                </span>
            </button>
        </div>
        <transition appear
            enter-active-class="fadeIn"
            leave-active-class="fadeOut">
            <div class="animated dropdown-menu menu-list"
                v-if="visible"
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
import { library } from '@fortawesome/fontawesome-svg-core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

library.add(faAngleDown);

export default {
    name: 'Dropdown',

    directives: {
        clickOutside: vClickOutside.directive,
    },

    props: {
        height: {
            type: Number,
            default: 16,
        },
        hidesManually: {
            type: Boolean,
            default: false,
        },
        width: {
            type: Number,
            default: 4.5,
        },
    },

    data: () => ({
        visible: false,
    }),

    computed: {
        heightStyle() {
            return {
                'max-height': `${this.height}em`,
            };
        },
        widthStyle() {
            return {
                'min-width': `${this.width}em`,
            };
        },
    },

    methods: {
        hide() {
            this.visible = false;
        },
        attemptHide() {
            if (!this.hidesManually) {
                this.hide();
            }
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
