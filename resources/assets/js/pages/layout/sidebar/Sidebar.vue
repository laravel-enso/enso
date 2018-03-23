<template>

    <vue-aside class="menu">
        <p class="menu-label has-text-centered">
            {{ __("Menu") }}
        </p>
        <menus class="menu-list"
            :menus="menus">
        </menus>
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
        ...mapState('layout', ['navbar']),
    },

    beforeMount() {
        this.expandMenu(this.menus);
    },

    methods: {
        ...mapMutations('menus', ['toggle']),
        expandMenu(menus) {
            const self = this;

            menus.forEach((menu) => {
                if (self.hasSelectedChild(menu)) {
                    self.toggle(menu);
                    self.expandMenu(menu.children);
                }
            });
        },
        hasSelectedChild(menu) {
            const self = this;
            let active = false;

            menu.children.forEach((child) => {
                if (active) return;

                active = self.isActive(child);

                if (active) return;

                active = self.hasSelectedChild(child);
            });

            return active;
        },
        isActive(menu) {
            return this.$route.matched.map(route => route.name).includes(menu.link) ||
                (this.$route.matched.length > 1
                    && this.$route.matched.map(route =>
                        route.path)[this.$route.matched.length - 2] === `/${menu.link.split('.').slice(0, -1).join('/')}`
                );
        },
    },
};

</script>
