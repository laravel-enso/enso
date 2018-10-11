<template>

    <vue-aside class="menu">
        <p class="menu-label has-text-centered">
            {{ __("Menu") }}
        </p>
        <div class="menu-wrapper">
            <menus :menus="menus"
                :is-active="isActive"/>
        </div>
    </vue-aside>

</template>

<script>

import { mapState, mapMutations } from 'vuex';
import Menus from './Menus.vue';
import VueAside from '../VueAside.vue';

export default {
    name: 'Sidebar',

    components: { Menus, VueAside },

    computed: {
        ...mapState('menus', { menus: 'list' }),
    },

    beforeMount() {
        this.checkActiveChildren(this.menus);
    },

    methods: {
        ...mapMutations('menus', ['expand']),
        checkActiveChildren(menus) {
            const menu = menus.find(menu => this.hasActiveChild(menu));

            if (menu) {
                this.expand(menu);
                this.checkActiveChildren(menu.children);
            }
        },
        hasActiveChild(menu) {
            return menu.children.some(child =>
                this.isActive(child) || this.hasActiveChild(child));
        },
        isActive(menu) {
            return menu.link !== null && (
                this.routeNameMatches(menu)
                    || this.routePathMatches(menu)
            );
        },
        routeNameMatches({ link }) {
            return this.$route.matched
                .map(route => route.name)
                .includes(link);
        },
        routePathMatches({ link }) {
            return this.$route.matched.length > 1
                    && this.$route.matched
                        .map(route => route.path)[this.$route.matched.length - 2]
                            === `/${link.split('.').slice(0, -1).join('/')}`;
        },
    },
};

</script>

<style lang="scss">

    .menu {
        -ms-overflow-style: none;

        .menu-wrapper {
            max-height: calc(100vh - 110px);
            overflow-y: auto;
        }

        .menu-wrapper::-webkit-scrollbar {
            display: none;
        }
    }

</style>

