<template>

    <div class="dropdown"
        v-click-outside="hide"
        :class="{ 'is-active': show }">
        <div class="dropdown-trigger"
            @click="show=!show">
            <button class="button"
                aria-haspopup="true"
                aria-controls="dropdown-menu">
                <span class="icon is-small">
                    <i class="fa fa-eye"></i>
                </span>
                <span class="icon angle is-small"
                        :aria-hidden="show">
                    <i class="fa fa-angle-up"></i>
                </span>
            </button>
        </div>
        <div class="dropdown-menu column-visibility-list animated"
                role="menu"
            :class="{ 'fadeIn': show, 'fadeOut': !show }"
            v-if="show">
            <div class="dropdown-content has-text-centered">
                <a v-for="(column, index) in template.columns"
                    :key="index"
                    class="dropdown-item"
                    :class="{ 'is-active': column.meta.visible }"
                    @click="column.meta.visible = !column.meta.visible;">
                    {{ column.label }}
                </a>
            </div>
        </div>
    </div>

</template>

<script>

import vClickOutside from 'v-click-outside';

export default {
    name: 'ColumnVisibility',

    directives: {
        clickOutside: vClickOutside.directive,
    },

    props: {
        template: {
            type: Object,
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

    .dropdown-menu.column-visibility-list,
    .dropdown-menu.column-visibility-list > .dropdown-content
     {
        min-width: unset;
        max-width: 150px;
    }

    .dropdown-menu.column-visibility-list > .dropdown-content {
        max-height: 200px;
        overflow-y: auto;
    }

    .dropdown-menu.column-visibility-list > .dropdown-content > a.dropdown-item {
        padding: .375rem 1rem;
    }

    .icon.angle[aria-hidden="true"] {
        transform: rotate(180deg);
    }

    .icon.angle {
        transition: transform .300s ease;
    }

</style>
