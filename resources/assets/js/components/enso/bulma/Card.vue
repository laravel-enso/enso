<template>

    <div class="card">
        <header class="card-header"
            v-if="header">
            <p class="card-header-title">
                <span class="icon is-small has-margin-right-small"
                    v-if="icon">
                    <fa :icon="icon"></fa>
                </span>
                <span class="is-clickable"
                    @click="toggle()"
                    v-if="!fixed && title">
                    {{ title }}
                </span>
                <span v-else-if="title">{{ title }}</span>
            </p>
            <div class="has-vertically-centered-content"
                v-if="search">
                <p class="control has-icons-left">
                    <input type="search"
                        class="input is-small"
                        v-model="query"
                        @input="$emit('query-update', query)">
                    <span class="icon is-small is-left">
                        <fa icon="search"></fa>
                    </span>
                </p>
            </div>
            <slot v-for="i in controls"
                :name="'control-' + i">
            </slot>
            <card-control
                v-if="badge !== null">
                <span class="tag is-link">
                    {{ badge }}
                </span>
            </card-control>
            <card-control
                v-if="refresh"
                @click="$emit('refresh')">
                <span class="icon is-small">
                    <fa icon="sync"></fa>
                </span>
            </card-control>
            <card-control
                v-if="!fixed"
                @click="toggle()">
                <span class="icon angle"
                    :aria-hidden="!expanded">
                    <fa icon="angle-down"></fa>
                </span>
            </card-control>
            <card-control
                v-if="removable"
                @click="destroy()">
                <a class="delete is-small"></a>
            </card-control>
        </header>

        <div class="card-content is-paddingless" v-show="expanded">
            <slot></slot>
        </div>

        <slot name="footer"></slot>

        <overlay size="medium" v-if="overlay"></overlay>
    </div>

</template>

<script>

import fontawesome from '@fortawesome/fontawesome';
import { faSearch, faSync, faAngleDown } from '@fortawesome/fontawesome-free-solid';
import CardControl from './CardControl.vue';
import Overlay from './Overlay.vue';

fontawesome.library.add(faSearch, faSync, faAngleDown);

export default {
    name: 'Card',

    components: { CardControl, Overlay },

    props: {
        collapsed: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: Object,
            default() {
                return null;
            },
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
        fixed: {
            type: Boolean,
            default: false,
        },
        removable: {
            type: Boolean,
            default: false,
        },
        controls: {
            type: Number,
            default: 0,
        },
        overlay: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        searchInput() {
            return this.search
                ? this.$el.querySelector('input[type=search]')
                : null;
        },
        header() {
            return this.icon || this.title || this.search
                || this.badge || this.refresh || !this.fixed
                || this.removable || this.controls;
        },
    },

    data() {
        return {
            query: null,
            expanded: !this.collapsed,
        };
    },

    methods: {
        toggle() {
            this.$emit('toggle');
            this.expanded = !this.expanded;

            return this.collapsed
                ? this.$emit('collapse')
                : this.$emit('expand');
        },
        expand() {
            this.expanded = true;
            this.$emit('expand');
        },
        collapse() {
            this.expanded = false;
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

<style scoped>

    .icon.angle[aria-hidden="true"] {
        transform: rotate(180deg);
    }

    .icon.angle {
        transition: transform .300s ease;
    }

</style>
