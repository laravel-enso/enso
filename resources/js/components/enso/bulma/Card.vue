<template>

    <div class="card">
        <header class="card-header has-background-light"
            v-if="header">
            <p class="card-header-title">
                <span class="icon is-small has-margin-right-small"
                    v-if="icon">
                    <fa :icon="icon"/>
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
                        <fa icon="search"/>
                    </span>
                </p>
            </div>
            <slot v-for="i in controls"
                :name="'control-' + i"/>
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
                    <fa icon="sync"/>
                </span>
            </card-control>
            <card-control
                v-if="!fixed"
                @click="toggle()">
                <span class="icon angle"
                    :aria-hidden="!expanded">
                    <fa icon="angle-down"/>
                </span>
            </card-control>
            <card-control
                v-if="removable"
                @click="destroy()">
                <a class="delete is-small"/>
            </card-control>
        </header>

        <div class="card-content is-paddingless"
            :style="contentStyle">
            <slot/>
        </div>

        <slot name="footer"/>

        <overlay size="medium" v-if="overlay"/>
    </div>

</template>

<script>

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faSync, faAngleDown }
    from '@fortawesome/free-solid-svg-icons';
import CardControl from './CardControl.vue';
import Overlay from './Overlay.vue';

library.add(faSearch, faSync, faAngleDown);

export default {
    name: 'Card',

    components: { CardControl, Overlay },

    props: {
        nested: {
            type: Boolean,
            default: false,
        },
        collapsed: {
            type: Boolean,
            default: false,
        },
        icon: {
            type: [Object, Array, String],
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
        scrollable: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            query: null,
            expanded: !this.collapsed,
        };
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
        content() {
            return this.$el.querySelector('.card-content');
        },
        maxHeight() {
            return this.collapsed
                ? { 'max-height': 0 }
                : {};
        },
        overflowY() {
            return this.scrollable || !this.expanded
                ? { 'overflow-y': 'hidden' }
                : {};
        },
        contentStyle() {
            return Object.assign({}, this.maxHeight, this.overflowY);
        },
    },

    methods: {
        toggle() {
            this.$emit('toggle');

            if (this.expanded) {
                this.collapse();
                return;
            }

            this.expand();
        },
        expand() {
            if (this.nested) {
                this.$emit('extend', this.content.scrollHeight);
            }

            this.$emit('expand');
            this.content.style['max-height'] = `${this.content.scrollHeight}px`;
            setTimeout(() => { this.expanded = true; }, 400);
        },
        collapse() {
            if (!this.content.style['max-height']) {
                this.content.style['max-height'] = `${this.content.scrollHeight}px`;
            }

            if (this.nested) {
                this.$emit('shrink', this.content.scrollHeight);
            }

            this.$emit('collapse');
            setTimeout(() => { this.content.style['max-height'] = 0; }, 1);
            this.expanded = false;
        },
        resize() {
            if (!this.expanded) {
                return;
            }

            const currentHeight = parseInt(this.content.style['max-height'], 10);

            this.$nextTick(() => {
                if (this.nested) {
                    this.$emit('extend', this.content.scrollHeight - currentHeight);
                }

                this.content.style['max-height'] = `${this.content.scrollHeight}px`;
            });
        },
        shrink(height) {
            this.content.style['max-height'] = `${parseInt(this.content.style['max-height'], 10) - height}px`;
            return this.$emit('shrink', height);
        },
        extend(height) {
            this.content.style['max-height'] = `${parseInt(this.content.style['max-height'], 10) + height}px`;
            return this.$emit('extend', height);
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

<style lang="scss" scoped>

    .card {
        position: relative;

        &.is-rounded {
            border-radius: 0.5em;

            .card-header {
                border-radius: 0.5em;
            }
        }

        .card-header {

            .card-header-title {
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .icon.angle[aria-hidden="true"] {
                transform: rotate(180deg);
            }

            .icon.angle {
                transition: transform .300s ease;
            }
        }

        .card-content {
            transition: max-height .400s ease;
        }
    }

</style>
