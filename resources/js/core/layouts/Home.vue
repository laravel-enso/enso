<template>

    <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
            <div class="container has-text-centered">
                <overlay v-if="loading"
                    :opacity="false"
                    color="#dbdbdb"
                    size="large"/>
                <div v-if="!loading && showQuote">
                    <div class="title is-1 inspiring animated fadeInDown">
                        {{ meta.quote }}
                    </div>
                    <button class="animated fadeInRightBig button is-outlined"
                        @click="hideHome()">
                        {{ __('Enter the application') }}
                    </button>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
import Overlay from '../../components/enso/bulma/Overlay.vue';

export default {
    name: 'Home',

    components: { Overlay },

    data() {
        return {
            loading: true,
        };
    },

    computed: {
        ...mapState(['meta']),
        ...mapState(['isInitialised', 'showQuote']),
        ...mapState('auth', ['isAuth']),
        ...mapState('bookmarks', ['lastRoute']),
        ...mapGetters('localisation', ['documentTitle']),
    },

    watch: {
        isInitialised() {
            if (this.isInitialised) {
                this.enterApp();
            }
        },
    },

    created() {
        this.initialise();
    },

    methods: {
        ...mapMutations('layout', ['hideHome']),
        ...mapMutations('bookmarks', ['setLastRoute']),
        ...mapActions(['initialise']),
        ...mapActions('layout', ['setTheme']),
        enterApp() {
            this.route();
            this.loading = false;

            if (!this.showQuote) {
                document.title = this.documentTitle(this.$route.meta.title);
                this.hideHome();
            }
        },
        route() {
            if (this.lastRoute) {
                this.$router.push({
                    name: this.lastRoute.name,
                    params: this.lastRoute.params,
                    query: this.lastRoute.query,
                });
                this.setLastRoute(null);
                return;
            }

            if (this.$route.meta.guestGuard) {
                this.$router.push({ path: '/' });
            }
        },
    },
};

</script>

<style>

    .title.inspiring {
        font-weight: 200;
    }

</style>
