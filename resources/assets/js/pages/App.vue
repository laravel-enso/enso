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

import { mapState, mapGetters, mapMutations } from 'vuex';
import Auth from './layout/Auth.vue';
import Home from './layout/Home.vue';
import AppMain from './layout/AppMain.vue';

export default {
    name: 'App',

    components: { Auth, Home, AppMain },

    data() {
        return {
            enterApp: false,
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

            if (!this.enterApp) {
                return 'home';
            }

            return 'app-main';
        },
    },

    watch: {
        isAuth(authenticated) {
            if (!authenticated) {
                this.enterApp = false;
            }
        },
    },

    created() {
        this.$router.afterEach((to) => {
            document.title = this.component === 'home'
                ? this.documentTitle('Home')
                : this.documentTitle(to.meta.title);
        });

        this.$bus.$on('enter-app', () => {
            this.enterApp = true;

            if (this.lastRoute) {
                this.$router.push({ name: this.lastRoute.name, params: this.lastRoute.params });
                this.setLastRoute(null);
            }
        });
    },

    methods: {
        ...mapMutations('auth', ['setLastRoute']),
        documentTitle(value) {
            const title = this.meta.extendedDocumentTitle
                ? `value | ${this.meta.appName}`
                : value;

            return this.__(title);
        },
    },
};

</script>
