<template>

    <div id="app">
        <nprogress ref="nprogress"/>
        <transition enter-active-class="fadeIn"
            leave-active-class="fadeOut">
            <component :is="layout"
                class="animated"/>
        </transition>
    </div>

</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import Auth from './layouts/Auth.vue';
import Home from './layouts/Home.vue';
import Default from './layouts/Default.vue';
import Nprogress from '../components/enso/nprogress/Nprogress.vue';
import axiosNprogress from '../modules/enso/plugins/axiosNprogress';

export default {
    name: 'App',

    components: {
        Auth, Home, Default, Nprogress,
    },

    computed: {
        ...mapGetters({
            layout: 'layout/current',
        }),
        ...mapState(['meta']),
    },

    created() {
        this.setInitialTheme();
    },

    mounted() {
        this.$nprogress = this.$refs.nprogress;
        axiosNprogress(this.$nprogress);
    },

    methods: {
        ...mapActions('layout', ['setInitialTheme']),
    },
};

</script>
