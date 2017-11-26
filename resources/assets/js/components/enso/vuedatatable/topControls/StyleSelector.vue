<template>

    <div class="dropdown is-right"
        v-click-outside="hide"
        :class="{ 'is-active': show }">
        <div class="dropdown-trigger"
            @click="show=!show">
            <button class="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu">
                <span class="icon is-small">
                    <i class="fa fa-table"></i>
                </span>
                <span class="icon angle is-small"
                        :aria-hidden="show">
                    <i class="fa fa-angle-up"></i>
                </span>
            </button>
        </div>
        <div class="dropdown-menu style-list animated"
                role="menu"
            :class="{ 'fadeIn': show, 'fadeOut': !show }"
            v-if="show">
            <div class="dropdown-content has-text-centered">
                <a v-for="(style, key) in template.styles"
                    :key="key"
                    class="dropdown-item"
                    :class="{ 'is-active': has(style) }"
                    @click="toggle(style)">
                    {{ key }}
                </a>
            </div>
        </div>
    </div>

</template>

<script>

import vClickOutside from 'v-click-outside';

export default {
    name: 'StyleSelector',

    directives: {
        clickOutside: vClickOutside.directive,
    },

    props: {
        template: {
            type: Object,
            required: true,
        },
    },

    computed: {
        styles() {
            return this.template.style.split(' ');
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
        has(style) {
            return this.styles.includes(style);
        },
        toggle(style) {
            this.template.style = this.has(style)
                ? this.styles.filter(value => value !== style).join(' ')
                : `${this.template.style} ${style}`;
        },
    },
};

</script>

<style>

    .dropdown-menu.style-list,
    .dropdown-menu.style-list > .dropdown-content
     {
        min-width: unset;
        max-width: 150px;
    }

    .dropdown-menu.style-list > .dropdown-content {
        max-height: 200px;
        overflow-y: auto;
    }

    .dropdown-menu.style-list > .dropdown-content > a.dropdown-item {
        padding: .375rem 1rem;
    }

    .icon.angle[aria-hidden="true"] {
        transform: rotate(180deg);
    }

    .icon.angle {
        transition: transform .300s ease;
    }

</style>
