<template>
    <transition enter-active-class="fadeIn"
        leave-active-class="fadeOut">
        <div v-show="lightsOn"
            class="app-main">
            <navbar class="animated slideInDown"/>
            <transition enter-active-class="slideInLeft"
                leave-active-class="slideOutLeft">
                <sidebar v-if="menu.isVisible" :class="[
                        'animated',
                        { 'is-collapsed' : !menu.isExpanded },
                    ]"/>
            </transition>
            <section :class="[
                    'main-content',
                    menu.isExpanded ? 'is-expanded' : 'is-collapsed' ]
                ">
                <bookmarks v-show="bookmarks" :class="[
                        'animated',
                        bookmarks ? 'slideInDown' : 'fadeOut'
                    ]"/>
                <div class="wrapper page-content">
                    <page-header :title="$route.meta.title"/>
                    <router v-if="isInitialised"/>
                </div>
            </section>
            <settings :class="[
                    'animated',
                    settingsBar.isVisible ? 'slideInRight': 'slideOutRight'
                ]"/>
            <app-footer class="animated fadeIn"/>
        </div>
    </transition>
</template>

<script>

import {
    mapState, mapGetters, mapMutations, mapActions,
} from 'vuex';
import Navbar from '../structure/navbar/Navbar.vue';
import Sidebar from '../structure/menu/Sidebar.vue';
import Settings from '../structure/settings/Settings.vue';
import AppFooter from '../structure/AppFooter.vue';
import Router from '../Router.vue';
import Bookmarks from '../structure/Bookmarks.vue';
import PageHeader from '../structure/PageHeader.vue';

export default {
    name: 'Default',

    components: {
        Navbar, Sidebar, Settings, AppFooter, Router, Bookmarks, PageHeader,
    },

    computed: {
        ...mapState(['meta', 'isInitialised']),
        ...mapState('layout', ['lightsOff', 'isTablet', 'isMobile', 'menu', 'settingsBar']),
        ...mapGetters('preferences', ['bookmarks']),
        lightsOn() {
            return !this.lightsOff;
        },
    },

    watch: {
        isTablet: {
            handler() {
                return this.isTablet
                    ? this.hideMenu()
                    : this.showMenu();
            },
        },
    },

    created() {
        this.$root.$on('start-impersonating', $event => this.startImpersonating($event));
        this.$root.$on('stop-impersonating', () => this.stopImpersonating());
    },

    beforeMount() {
        this.addTouchBreakpointsListeners();
    },

    mounted() {
        setTimeout(() => {
            this.updateLayout();
        }, 501);
    },

    methods: {
        ...mapMutations('layout', ['updateLayout', 'setIsTablet', 'setIsMobile', 'setIsTouch']),
        ...mapMutations('layout/menu', { showMenu: 'show', hideMenu: 'hide' }),
        ...mapActions(['initialise']),
        addTouchBreakpointsListeners() {
            const { body } = document;
            const TabletMaxWidth = 1023;
            const MobileMaxWidth = 768;

            const handler = () => {
                if (!document.hidden) {
                    const rect = body.getBoundingClientRect();
                    this.setIsTablet(rect.width <= TabletMaxWidth);
                    this.setIsMobile(rect.width <= MobileMaxWidth);
                    this.setIsTouch(
                        rect.width <= TabletMaxWidth || rect.width <= MobileMaxWidth,
                    );
                }
            };

            document.addEventListener('visibilitychange', handler);
            window.addEventListener('DOMContentLoaded', handler);
            window.addEventListener('resize', handler);

            handler();
        },
        startImpersonating(id) {
            axios.get(route('core.impersonate.start', id))
                .then((response) => {
                    this.$toastr.warning(response.data.message);
                    this.initialise();
                }).catch(error => this.handleError(error));
        },
        stopImpersonating() {
            axios.get(route('core.impersonate.stop'))
                .then((response) => {
                    this.$toastr.info(response.data.message);
                    this.initialise();
                }).catch(error => this.handleError(error));
        },
        stopTransition() {
            setTimeout(() => (this.bookmarkTransition = false), 50);
        },
    },
};

</script>

<style lang="scss">

    .app-main {
        display: flex;
        min-height: 100vh;
        flex-direction: column;
        opacity: 1;
        transition: opacity .3s ease;
    }

    .main-content {
        position: relative;
        flex: 1;
        z-index: 1;
        margin-top: 50px;
        transition: margin .5s;

        &.is-expanded {
            margin-left: 180px;
        }

        &.is-collapsed {
            margin-left: 56px;
        }
    }

    @media screen and (max-width: 1023px) {
        .main-content {
            &.is-expanded, &.is-collapsed {
                margin-left: 0;
            }
        }
    }

    .wrapper.page-content {
        padding: 1.2em;
    }

</style>
