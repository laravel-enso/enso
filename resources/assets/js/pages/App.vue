<template>

    <div id="app">
        <transition enter-active-class="fadeIn"
            leave-active-class="fadeOut">
            <component :is="component"
                class="animated">
            </component>
        </transition>
    </div>

</template>

<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import Auth from './layout/Auth.vue';
import Home from './layout/Home.vue';
import AppMain from './layout/AppMain.vue';

export default {
    name: 'App',

    components: { Auth, Home, AppMain },

    data() {
        return {
            showHome: true,
        };
    },

    computed: {
        ...mapState(['meta']),
        ...mapState('auth', ['isAuth', 'lastRoute']),
        ...mapGetters('locale', ['__']),
        component() {
            if (!this.isAuth) {
                return 'auth';
            }

            if (this.showHome) {
                return 'home';
            }

            return 'app-main';
        },
    },

    watch: {
        isAuth(authenticated) {
            if (!authenticated) {
                this.showHome = true;
                this.$router.push({ path: '/' });
                return;
            }

            this.initialise();
        },
    },

    created() {
        if (this.isAuth) {
            this.initialise();
        }

        this.setDocumentTitleUpdator();
        this.addEnterAppListener();
    },

    methods: {
        ...mapActions(['initialise']),
        ...mapMutations('auth', ['setLastRoute']),
        setDocumentTitleUpdator() {
            this.$router.afterEach((to) => {
                document.title = this.documentTitle(to.meta.title);
            });
        },
        documentTitle(value) {
            const title = this.meta.extendedDocumentTitle
                ? `${value} | ${this.meta.appName}`
                : value;

            return this.__(title);
        },
        addEnterAppListener() {
            this.$bus.$on('enter-app', () => {
                this.showHome = false;

                if (this.lastRoute) {
                    this.$router.push({ name: this.lastRoute.name, params: this.lastRoute.params });
                    this.setLastRoute(null);
                }
            });
        },
    },
};

</script>
