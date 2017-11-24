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
                    <i class="fa fa-align-justify"></i>
                </span>
                <span class="icon angle is-small"
                        :aria-hidden="show">
                    <i class="fa fa-angle-up"></i>
                </span>
            </button>
        </div>
        <div class="dropdown-menu alignment-list animated"
                role="menu"
            :class="{ 'fadeIn': show, 'fadeOut': !show }"
            v-if="show">
            <div class="dropdown-content has-text-centered">
                <a v-for="(value, key) in template.aligns"
                    :key="key"
                    class="dropdown-item"
                    :class="{ 'is-active': template.align === value }"
                    @click="template.align = value;show=false">
                    <span class="icon is-small">
                        <i :class="icons[key]"></i>
                    </span>
                </a>
            </div>
        </div>
    </div>

</template>

<script>

import vClickOutside from 'v-click-outside';

export default {
    name: 'Alignment',

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
            icons: {
                center: 'fa fa-align-center',
                left: 'fa fa-align-left',
                right: 'fa fa-align-right',
            },
        };
    },

    methods: {
        hide() {
            this.show = false;
        },
        updateColumnVisibility(column) {
            column.meta.visible = !column.meta.visible;
            this.$emit('update-column-visibility');
        },
    },
};

</script>

<style>

    .dropdown-menu.alignment-list,
    .dropdown-menu.alignment-list > .dropdown-content
     {
        min-width: unset;
        width: 64px;
    }

    .dropdown-menu.alignment-list > .dropdown-content {
        max-height: 300px;
        overflow-y: auto;
    }

    .dropdown-menu.alignment-list > .dropdown-content > a.dropdown-item {
        padding: .375rem 1rem;
    }

    .icon.angle[aria-hidden="true"] {
        transform: rotate(180deg);
    }

    .icon.angle {
        transition: transform .300s ease;
    }

</style>
