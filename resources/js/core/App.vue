<template>

    <div id="app">
        <progress-bar ref="progressBar"/>
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
import ProgressBar from './structure/progressBar/ProgressBar.vue';

export default {
    name: 'App',

    components: {
        Auth, Home, Default, ProgressBar,
    },

    computed: {
        ...mapState(['meta']),
        ...mapGetters('layout', { layout: 'current' }),
    },

    created() {
        this.setInitialTheme();
    },

    methods: {
        ...mapActions('layout', ['setInitialTheme']),
    },
};

</script>
