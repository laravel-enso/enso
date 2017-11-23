<template>

    <div class="dropdown"
        v-click-outside="hide"
        :class="{ 'is-active': show }">
        <div class="dropdown-trigger"
            @click="show=!show">
            <button class="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu">
                <span>{{ length }}</span>
                <span class="icon angle is-small"
                        :aria-hidden="show">
                    <i class="fa fa-angle-up"></i>
                </span>
            </button>
        </div>
        <div class="dropdown-menu length-list animated"
            role="menu"
            :class="{ 'fadeIn': show, 'fadeOut': !show }"
            v-if="show">
            <div class="dropdown-content has-text-centered">
                <a v-for="(value, index) in template.lengthMenu"
                    :key="index"
                    class="dropdown-item"
                    :class="{ 'is-active': value === length }"
                    @click="$emit('update-length', value);show=false">
                    {{ value }}
                </a>
            </div>
        </div>
    </div>

</template>

<script>

import vClickOutside from 'v-click-outside';

export default {
    name: 'LengthMenu',

    directives: {
        clickOutside: vClickOutside.directive,
    },

    props: {
        template: {
            type: Object,
            required: true,
        },
        length: {
            type: Number,
            required: true,
        },
    },

    data() {
        return {
            show: false,
        };
    },

    methods: {
        hide() {
            this.show = false;
        },
    },
};

</script>

<style>

    .dropdown-menu.length-list,
    .dropdown-menu.length-list > .dropdown-content {
        min-width: unset;
        width: 64px;
    }

    .dropdown-menu.length-list > .dropdown-content {
        width: 64px;
        max-height: 200px;
        overflow-y: auto;
    }

    .dropdown-menu.length-list > .dropdown-content > a.dropdown-item {
        padding: .375rem 1rem;
    }

    .icon.angle[aria-hidden="true"] {
        transform: rotate(180deg);
    }

    .icon.angle {
        transition: transform .300s ease;
    }

</style>
