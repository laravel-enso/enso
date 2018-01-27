<template>

    <div class="app-main"
        :class="{ 'lights-off': lightsOff }">
        <nprogress></nprogress>
        <navbar class="animated slideInDown"
            :env-is-local="meta.env === 'local'">
        </navbar>
        <sidebar class="animated"
            :class="{ 'slideInLeft': navbar.isVisible, 'slideOutLeft': !navbar.isVisible }">
        </sidebar>
        <section class="main-content">
            <div class="container is-fluid page-content is-marginless">
                <page-header :title="$route.meta.title"></page-header>
                <router></router>
            </div>
        </section>
        <settings class="animated"
            :class="settingsBar.isVisible ? 'slideInRight': 'slideOutRight'">
        </settings>
        <app-footer class="animated slideInUp">
        </app-footer>
    </div>

</template>

<script>

import { mapState, mapMutations, mapActions } from 'vuex';
import Nprogress from '../../components/enso/nprogress/Nprogress.vue';
import Navbar from './navbar/Navbar.vue';
import Sidebar from './sidebar/Sidebar.vue';
import Settings from './settings/Settings.vue';
import AppFooter from './AppFooter.vue';
import Router from './Router.vue';
import PageHeader from './PageHeader.vue';

export default {
    name: 'AppMain',

    components: {
        Nprogress, Navbar, Sidebar, Settings, AppFooter, Router, PageHeader,
    },

    computed: {
        ...mapState(['meta']),
        ...mapState('layout', ['lightsOff', 'isTablet', 'isMobile', 'navbar', 'settingsBar']),
    },

    watch: {
        isTablet: {
            handler() {
                return this.isTablet
                    ? this.$store.commit('layout/navbar/collapse')
                    : this.$store.commit('layout/navbar/expand');
            },
        },
    },

    created() {
        this.$bus.$on('start-impersonating', $event => this.startImpersonating($event));
        this.$bus.$on('stop-impersonating', () => this.stopImpersonating());
    },

    beforeMount() {
        this.addTabletBreakpointListener();
    },

    methods: {
        ...mapMutations('layout', ['setThemeParams', 'setIsTablet', 'setIsMobile', 'setIsTouch']),
        ...mapActions(['setState']),
        addTabletBreakpointListener() {
            const { body } = document;
            const TabletMaxWidth = 1023;
            const MobileMaxWidth = 768;

            const handler = () => {
                if (!document.hidden) {
                    const rect = body.getBoundingClientRect();
                    this.setIsTablet(rect.width <= TabletMaxWidth);
                    this.setIsMobile(rect.width <= MobileMaxWidth);
                    this.setIsTouch(rect.width <= TabletMaxWidth || rect.width <= MobileMaxWidth);
                }
            };

            document.addEventListener('visibilitychange', handler);
            window.addEventListener('DOMContentLoaded', handler);
            window.addEventListener('resize', handler);

            handler();
        },
        startImpersonating(id) {
            axios.get(route('core.impersonate.start', id, false)).then((response) => {
                this.$toastr.warning(response.data.message);
                this.setState();
            }).catch(error => this.handleError(error));
        },
        stopImpersonating() {
            axios.get(route('core.impersonate.stop', [], false)).then((response) => {
                this.$toastr.info(response.data.message);
                this.setState();
            }).catch(error => this.handleError(error));
        },
    },

    mounted() {
        setTimeout(() => this.setThemeParams(), 501);
    },
};

</script>

<style lang="scss">

    .app-main {
        &.lights-off {
            opacity: 0;
        }

        opacity: 1;
        transition: opacity .1s ease;
    }

    .main-content {
        position: relative;
        z-index: 1;
        margin-top: 50px;
        margin-left: 180px;
        transition: margin .5s;
    }

    @media screen and (max-width: 1023px) {
        .main-content {
            margin-left: 0;
        }
    }

    div.container.page-content {
        padding: 20px;
    }

</style>
