<template>
    <vue-aside class="menu">
        <p class="menu-label has-text-centered">
            {{ __("Menu") }}
        </p>
        <menus :menus="menus"/>
    </vue-aside>
</template>

<script>

import { mapState, mapActions } from 'vuex';
import Menus from './Menus.vue';
import VueAside from '../VueAside.vue';

export default {
    name: 'Sidebar',

    components: { Menus, VueAside },

    computed: {
        ...mapState('menus', { menus: 'list' }),
    },

    beforeMount() {
        this.updateMenuState();
    },

    methods: {
        ...mapActions('menus', ['updateMenuState']),
    },
};

</script>

<style lang="scss">

    .aside.menu {
        overflow-y: auto;
    }

</style>
