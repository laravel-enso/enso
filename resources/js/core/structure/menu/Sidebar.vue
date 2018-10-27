<template>

    <vue-aside class="menu">
        <p class="menu-label has-text-centered">
            {{ __("Menu") }}
        </p>
        <menus :menus="menus"
            :is-active="isActive"/>
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
            return menu.has_children && menu.children.some(child =>
                this.isActive(child) || this.hasActiveChild(child));
        },
        isActive(menu) {
            return menu.route !== null && (
                this.routeNameMatches(menu)
                    || this.routePathMatches(menu)
            );
        },
        routeNameMatches({ route }) {
            return this.$route.matched
                .map(matchedRoute => matchedRoute.name)
                .includes(route);
        },
        routePathMatches({ route }) {
            return this.$route.matched.length > 1
                    && this.$route.matched
                        .map(matchedRoute => matchedRoute.path)[this.$route.matched.length - 2]
                            === `/${route.split('.').slice(0, -1).join('/')}`;
        },
    },
};

</script>

<style lang="scss">

    .aside.menu {
        overflow-y: auto;
    }

</style>

