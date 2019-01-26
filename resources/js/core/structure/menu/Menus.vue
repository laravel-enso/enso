<template>
    <ul class="menu-list">
        <li v-for="(menu, index) in menus"
            :key="index">
            <menu-item :class="{ 'is-active': isActive(menu) }"
                :menu="menu"/>
            <menus v-if="menu.has_children"
                :menus="menu.children"
                :collapsed="!menu.expanded"
                @shrink="shrink"
                @extend="extend"/>
        </li>
    </ul>
</template>

<script>

import { mapGetters } from 'vuex';
import MenuItem from './MenuItem.vue';

import './icons';

export default {
    name: 'Menus',

    components: { MenuItem },

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
        ...mapGetters('menus', ['isActive']),
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
        shrink(height) {
            this.$el.style.height = `${parseInt(this.$el.style.height, 10) - height}px`;
            this.$emit('shrink', height);
        },
        extend(height) {
            this.$el.style.height = `${height + parseInt(this.$el.style.height, 10)}px`;
            this.$emit('extend', height);
        },
    },
};

</script>

<style lang="scss" scoped>

    .menu-list {
        transition: height .333s ease;
        display: block;
        overflow-y: hidden;
        overflow-x: hidden;

        li > ul {
            margin: 0 0 0 .5rem;
            padding-left: 0;
        }
    }

</style>
