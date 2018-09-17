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
import Touch from './layouts/Touch.vue';
import ProgressBar from './structure/progressBar/ProgressBar.vue';

export default {
    name: 'App',

    components: {
        Auth, Home, Default, Touch, ProgressBar,
    },

    computed: {
        ...mapState(['meta']),
        ...mapState('menus', ['implicit']),
        ...mapGetters('layout', { layout: 'current' }),
        ...mapGetters('preferences', { mode: 'layout' }),
    },

    watch: {
        mode() {
            if (this.mode === 'touch') {
                this.$router.push({ name: 'touch' });
                return;
            }

            if (this.$route.name === 'touch') {
                this.$router.push({ name: this.implicit.link });
            }
        },
    },

    created() {
        this.setInitialTheme();
    },

    methods: {
        ...mapActions('layout', ['setInitialTheme']),
    },
};

</script>
