<template>
    <ul class="menu-list">
        <li v-for="(menu, index) in menus"
            :key="index">
            <router-link v-if="!menu.children.length"
                :to="{ name: menu.link }"
                :class="{ 'is-active': isActive(menu) }">
                <span class="icon is-small" style="display: inline-block">
                    <fa :icon="menu.icon"/>
                </span>
                <transition enter-active-class="zoomIn"
                    leave-active-class="zoomOut">
                    <span class="animated has-margin-left-small menu-hiding-label"
                        v-if="navbar.isExpanded">
                        {{ __(menu.name) }}
                    </span>
                </transition>
                <div class="dropdown-content">
                    <div class="dropdown-item"
                        v-if="!navbar.isExpanded">
                        {{ menu.name }}
                    </div>
                </div>
            </router-link>

            <a @click="toggle(menu)"
                v-if="menu.children.length">
                <span class="icon is-small" style="display: inline-block">
                    <fa :icon="menu.icon"/>
                </span>
                <transition enter-active-class="zoomIn"
                    leave-active-class="zoomOut">
                    <span class="animated has-margin-left-small menu-hiding-label"
                        v-if="navbar.isExpanded">
                        {{ __(menu.name) }}
                    </span>
                </transition>
                <span class="icon is-small angle is-pulled-right"
                    :aria-expanded="menu.expanded">
                    <fa icon="angle-up"/>
                </span>
                <div class="dropdown-content">
                    <div class="dropdown-item"
                        v-if="!navbar.isExpanded">
                        {{ menu.name }}
                    </div>
                </div>
            </a>

            <menus :menus="menu.children"
                @shrink="shrink"
                @extend="extend"
                :collapsed="!menu.expanded"
                @select="$emit('select', $event)"
                v-if="menu.children.length"/>

        </li>
    </ul>

</template>

<script>

import { mapMutations, mapState } from 'vuex';
import './icons';

export default {
    name: 'Menus',

    props: {
        menus: {
            type: Array,
            required: true,
        },
        collapsed: {
            type: Boolean,
            default: false,
        },
    },

    computed: {
        ...mapState('layout', ['navbar']),
    },

    watch: {
        collapsed() {
            if (this.collapsed) {
                const height = this.$el.scrollHeight;

                if (!this.$el.style.height) {
                    this.$el.style.height = `${height}px`;
                }

                setTimeout(() => { this.$el.style.height = 0; }, 1);
                this.$emit('shrink', height);
                return;
            }

            this.$el.style.height = `${this.$el.scrollHeight}px`;
            this.$emit('extend', this.$el.scrollHeight);
        },
    },

    mounted() {
        if (this.collapsed) {
            this.$el.style.height = 0;
        }
    },

    methods: {
        ...mapMutations('menus', ['toggle']),
        isActive(menu) {
            return this.$route.matched.map(route => route.name)
                .includes(menu.link) ||
                    (this.$route.matched.length > 1
                        && this.$route.matched
                            .map(route => route.path)[this.$route.matched.length - 2]
                                === `/${menu.link.split('.').slice(0, -1).join('/')}`
                    );
        },
        shrink(height) {
            this.$el.style.height = `${parseInt(this.$el.style.height, 10) - height}px`;
            return this.$emit('shrink', height);
        },
        extend(height) {
            this.$el.style.height = `${height + parseInt(this.$el.style.height, 10)}px`;
            return this.$emit('extend', height);
        },
    },
};

</script>

<style lang="scss" scoped>

    .menu-list {
        transition: height .400s ease;
        display: block;
        overflow-y: hidden;
        overflow-x: hidden;

        a {
            display: flex;
        }

        .menu-hiding-label {
             white-space: nowrap;
        }

        .dropdown-content {
            display: none;
            white-space: nowrap;
            padding-bottom: 0;
            padding-top: 0;
            margin-top: -9px;
            position: fixed;
            left: 55px
        }

        a:hover > div.dropdown-content {
            display: block;
        }

        li > ul {
            margin: 0 0 0 .5rem;
            padding-left: 0;
        }

        .icon.angle {
            margin-left: auto;
        }
    }

</style>
