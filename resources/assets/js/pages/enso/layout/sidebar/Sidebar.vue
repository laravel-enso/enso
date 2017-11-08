<template>

    <vue-aside class="menu aside">
        <p class="menu-label has-text-centered">
            {{ __("Main Menu") }}
        </p>
        <menus class="menu-list"
            :menus="menus">
        </menus>
    </vue-aside>

</template>

<script>

import { mapGetters, mapState, mapMutations } from 'vuex';
import VueAside from '../VueAside.vue';
import Menus from './Menus.vue';

export default {
    name: 'Sidebar',

    components: { VueAside, Menus },

    computed: {
        ...mapGetters('locale', ['__']),
        ...mapState('menus', { menus: 'list' }),
    },

    beforeMount() {
        this.expandMenu(this.menus);
    },

    methods: {
        ...mapMutations('menus', ['toggle']),
        expandMenu(menus) {
            const self = this;

            menus.forEach((menu) => {
                if (menu.children.length && self.hasSelectedChild(menu)) {
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

                if (child.children.length) {
                    active = self.hasSelectedChild(child);
                }
            });

            return active;
        },
        isActive(menu) {
            return this.$route.matched.pluck('name').includes(menu.link) ||
                (this.$route.matched.length > 1
                    && this.$route.matched.pluck('path')[this.$route.matched.length - 2] ===
                    `/${menu.link.split('.').slice(0, -1).join('/')}`
                );
        },
    },
};

</script>

<style>

    .aside.menu {
        left: 0;
    }

</style>
