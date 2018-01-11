<template>
    <ul class="collapsible-menu">
        <li v-for="menu in menus">
            <router-link v-if="!menu.children.length"
                :to="{ name: menu.link }"
                :class="{ 'is-active': isActive(menu) }">
                <span class="icon is-small">
                    <i :class="menu.icon"></i>
                </span>
                {{ __(menu.name) }}
            </router-link>

            <a v-if="menu.children.length"
                @click="toggle(menu)"
                :aria-expanded="menu.expanded">
                <span class="icon is-small">
                    <i :class="menu.icon"></i>
                </span>
                {{ menu.name }}
                <span class="icon is-small angle is-pulled-right">
                    <i class="fa fa-angle-left"></i>
                </span>
            </a>

            <menus :menus="menu.children"
                v-if="menu.children.length"
                @shrink="shrink"
                @extend="extend"
                :collapsed="!menu.expanded"
                @select="$emit('select', $event)">
            </menus>

        </li>
    </ul>

</template>

<script>

import { mapGetters, mapMutations } from 'vuex';

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
        ...mapGetters('locale', ['__']),
    },

    watch: {
        collapsed() {
            if (this.collapsed) {
                const height = this.$el.scrollHeight;
                this.$el.style.height = 0;
                this.$emit('shrink', height);
                return;
            }

            this.$el.style.height = `${this.$el.scrollHeight}px`;
            this.$emit('extend', this.$el.scrollHeight);
        },
    },

    methods: {
        ...mapMutations('menus', ['toggle']),
        isActive(menu) {
            return this.$route.matched.map(route => route.name).includes(menu.link) ||
                    (this.$route.matched.length > 1
                        && this.$route.matched.map(route => route.path)[this.$route.matched.length - 2] ===
                        `/${menu.link.split('.').slice(0, -1).join('/')}`
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

    mounted() {
        if (this.collapsed) {
            this.$el.style.height = 0;
        }
    },
};

</script>

<style>

    .menu-list li > ul {
        margin: 0 0 0 8px;
        padding-left: 0;
    }

    .menu-list a {
        padding: 0.5em 0.5em;
    }

    .main-menu .icon.angle {
        right: 5px;
        transition: transform .300s ease;
    }

    .menu-list a[aria-expanded="true"] .icon.angle {
        transform: rotate(-90deg);
    }

    .collapsible-menu {
        transition: height .400s ease;
        display: block;
        overflow-y: hidden;
    }

</style>
