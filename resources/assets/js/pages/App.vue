<template>

    <div id="app">
        <transition enter-active-class="fadeIn"
            leave-active-class="fadeOut">
            <component :is="component"
                class="animated"
                @enter-app="showHome = false"
                @login="showHome = true; setState()">
            </component>
        </transition>
    </div>

</template>

<script>

import { mapState, mapGetters, mapActions } from 'vuex';
import Auth from './layout/Auth.vue';
import Home from './layout/Home.vue';
import AppMain from './layout/AppMain.vue';

export default {
    name: 'App',

    components: { Auth, Home, AppMain },

    computed: {
        ...mapGetters('auth', ['isAuth']),
        ...mapState(['appIsLoaded']),
        component() {
            if (!this.isAuth) {
                return 'auth';
            }

            if (this.showHome) {
                return 'home';
            }

            if (this.appIsLoaded) {
                return 'app-main';
            }

            return null;
        },
    },

    data() {
        return {
            showHome: false,
        };
    },

    beforeMount() {
        if (this.isAuth) {
            this.setState();
        }
    },

    methods: {
        ...mapActions(['setState']),
    },
};

</script>
