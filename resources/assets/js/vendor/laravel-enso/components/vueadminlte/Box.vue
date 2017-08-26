<template>

    <div class="box"
        :class="boxClass"
        :id="'box-' + _uid">
        <div class="box-header"
            :class="headerClass">
            <i :class="icon"
                v-if="icon">
            </i>
            <h3 class="box-title"
                v-if="title">
                {{ title }}
            </h3>
            <div class="box-tools pull-right">
                <span
                    v-if="search">
                    <input type="text"
                        size="15"
                        :id="'search-input-' + _uid"
                        class="search margin-right-xs"
                        v-model="query"
                        @input="$emit('query-update', query)">
                    <a class="input-button"
                        @click="query=null"
                        v-if="query">
                        <i class="fa fa-times"></i>
                    </a>
                    <a class="input-button"
                        @click="searchInput.focus()">
                        <i class="fa fa-search"></i>
                    </a>
                </span>
                <slot name="btn-box-tool"></slot>
                <span class="badge bg-orange"
                    v-if="badge !== null">
                    {{ badge }}
                </span>
                <button class="btn btn-box-tool btn-sm"
                    v-if="refresh"
                    @click="$emit('refresh')">
                    <i class="fa fa-refresh"></i>
                </button>
                <button class="btn btn-box-tool btn-sm"
                    v-if="collapsible"
                    @click="toggle()">
                    <i class="fa fa-minus"
                        v-if="!collapsed">
                    </i>
                    <i class="fa fa-plus"
                        v-if="collapsed">
                    </i>
                </button>
                <button class="btn btn-box-tool btn-sm"
                    data-widget="remove"
                    v-if="removable"
                    @click="$emit('remove')">
                    <i class="fa fa-times"></i>
                </button>
            </div>
        </div>
        <div class="box-body"
            :style="bodyStyle"
            :id="'box-body-' + _uid">
            <slot></slot>
        </div>
        <div class="box-footer"
            v-if="footer">
            <slot name="footer"></slot>
        </div>
        <overlay v-if="overlay"></overlay>
    </div>

</template>

<script>

    import Overlay from './Overlay.vue';

    export default {
        components: { Overlay },

        props: {
            theme: {
                type: String,
            },
            border: {
                type: Boolean,
                default: false
            },
            solid: {
                type: Boolean,
                default: false
            },
            open: {
                type: Boolean,
                default: true
            },
            footer: {
                type: Boolean,
                default: false
            },
            icon: {
                type: String,
                default: null
            },
            title: {
                type: String,
                default: null
            },
            search: {
                type: Boolean,
                default: false
            },
            badge: {
                type: Number,
                default: null
            },
            refresh: {
                type: Boolean,
                default: false
            },
            collapsible: {
                type: Boolean,
                default: false
            },
            removable: {
                type: Boolean,
                default: false
            },
            overlay: {
                type: Boolean,
                default: false
            },
            bodyStyle: {
                type: Object,
                default() {
                    return {}
                }
            }
        },

        computed: {
            boxBody() {
                return $('#box-body-' + this._uid);
            },
            searchInput() {
                return $('#search-input-' + this._uid);
            },
            boxClass() {
                return 'box-' + this.theme + (this.solid ? ' box-solid' : '')
                    + (this.open ? '': ' collapsed-box');
            },
            headerClass() {
                return this.border ? 'with-border' : '';
            },
        },

        data() {
            return {
                query: null,
                collapsed: !this.open,
                inTransition: false,
            };
        },

        methods: {
            toggle() {
                if (this.inTransition) {
                    return false;
                }

                this.$emit('toggle');
                this.inTransition = true;

                return this.collapsed ? this.boxBody.slideDown(500, () => {
                    this.collapsed = false;
                    this.$emit('expanded');
                    this.inTransition = false;
                }) : this.boxBody.slideUp(500, () => {
                    this.collapsed = true;
                    this.$emit('collapsed');
                    this.inTransition = false;
                });
            }
        }
    };

</script>

<style>

    input.search {
        color: #3c3a3a;
        vertical-align: middle;
    }

    a.input-button {
        cursor: pointer;
    }

</style>