<template>
    <div class="columns is-multiline is-centered">
        <div class="column is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen"
            v-if="back">
            <a class="box raises-on-hover has-text-centered has-padding-large"
                @click="toggle(lastExpanded)">
                <p class="icon">
                    <fa icon="arrow-left"
                        size="lg"/>
                </p>
                <p class="subtitle is-4 has-margin-left-small is-marginless">
                    {{ __('Back') }}
                </p>
            </a>
        </div>
        <div class="column is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen"
            v-for="(menu, index) in renderMenus"
            :key="index">
            <touch-menu-item :menu="menu"/>
        </div>
    </div>
</template>

<script>

import { mapState, mapMutations } from 'vuex';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import TouchMenuItem from './TouchMenuItem.vue';

import './icons';

library.add(faArrowLeft);

export default {
    name: 'TouchMenus',

    components: { TouchMenuItem },

    computed: {
        ...mapState('menus', { menus: 'list' }),
        renderMenus() {
            return this.lastExpanded
                ? this.lastExpanded.children
                : this.menus;
        },
        lastExpanded() {
            return this.findExpanded(this.menus);
        },
        back() {
            return this.renderMenus.some(({ parent_id }) => parent_id);
        },
    },

    methods: {
        ...mapMutations('menus', ['toggle']),
        findExpanded(menus) {
            const menu = menus.find(({ expanded }) => expanded);

            if (!menu) {
                return null;
            }

            return this.findExpanded(menu.children) || menu;
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
