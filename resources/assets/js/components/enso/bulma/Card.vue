<template>

    <div class="card">
        <header class="card-header"
            v-if="header">
            <p class="card-header-title">
                <span class="icon is-small has-margin-right-small"
                    v-if="icon">
                    <i :class="icon"></i>
                </span>
                <span class="is-clickable"
                    @click="toggle()"
                    v-if="collapsible">
                    {{ title }}
                </span>
                <span v-else>{{ title }}</span>
            </p>
            <div class="has-vertically-centered-content"
                v-if="search">
                <p class="control has-icons-left">
                <input type="search"
                    class="input is-small"
                    v-model="query"
                    @input="$emit('query-update', query)">
                <span class="icon is-small is-left">
                    <i class="fa fa-search"></i>
                </span>
                </p>
            </div>
            <slot v-for="i in controls"
                :name="'control-' + i">
            </slot>
            <a class="card-header-icon"
                v-if="badge !== null">
                <span class="tag is-primary">
                    {{ badge }}
                </span>
            </a>
            <a class="card-header-icon"
                v-if="refresh">
                <span class="icon is-small"
                    @click="$emit('refresh')">
                    <i class="fa fa-refresh"></i>
                </span>
            </a>
            <a class="card-header-icon"
                v-if="collapsible">
                <span class="icon angle"
                    :aria-hidden="collapsed"
                    @click="toggle()">
                    <i class="fa fa-angle-down"></i>
                </span>
            </a>
            <span class="card-header-icon"
                v-if="removable"
                @click="destroy()">
                <a class="delete is-small"></a>
            </span>
        </header>

        <div class="card-content" v-show="!collapsed">
            <slot></slot>
        </div>

        <footer class="card-footer" v-if="footer && !collapsed">
            <p v-for="i in footerItems"
                class="card-footer-item"
                :key="i">
                <slot :name="'footer-item-' + i"></slot>
            </p>
        </footer>
        <overlay size="medium" v-if="overlay"></overlay>
    </div>

</template>

<script>

import Overlay from './Overlay.vue';

export default {
    name: 'Card',

    components: { Overlay },

    props: {
        open: {
            type: Boolean,
            default: true,
        },
        header: {
            type: Boolean,
            default: true,
        },
        footer: {
            type: Boolean,
            default: false,
        },
        footerItems: {
            type: Number,
            default: 0,
        },
        icon: {
            type: String,
            default: null,
        },
        title: {
            type: String,
            default: null,
        },
        search: {
            type: Boolean,
            default: false,
        },
        badge: {
            type: Number,
            default: null,
        },
        refresh: {
            type: Boolean,
            default: false,
        },
        collapsible: {
            type: Boolean,
            default: true,
        },
        removable: {
            type: Boolean,
            default: false,
        },
        overlay: {
            type: Boolean,
            default: false,
        },
        controls: {
            type: Number,
            default: 0,
        },
        bodyStyle: {
            type: Object,
            default() {
                return {};
            },
        },
    },

    computed: {
        searchInput() {
            return this.search
                ? this.$el.querySelector('input[type=search]')
                : null;
        },
    },

    data() {
        return {
            query: null,
            collapsed: !this.open,
        };
    },

    methods: {
        toggle() {
            this.$emit('toggle');
            this.collapsed = !this.collapsed;

            return this.collapsed
                ? this.$emit('collapse')
                : this.$emit('expand');
        },
        expand() {
            this.collapsed = false;
            this.$emit('expand');
        },
        collapse() {
            this.collapsed = true;
            this.$emit('collapse');
        },
        focus() {
            this.searchInput.focus();
        },
        clearQuery() {
            this.query = null;
        },
        destroy() {
            this.$emit('remove');
            this.$el.parentNode.removeChild(this.$el);
            this.$destroy();
        },
    },
};

</script>

<style>

    .icon.angle[aria-hidden="true"] {
        transform: rotate(180deg);
    }

    .icon.angle {
        transition: transform .300s ease;
    }

    .card-content {
        padding: 0;
    }

</style>
