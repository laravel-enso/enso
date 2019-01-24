<template>
    <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <router v-if="ready"/>
            </div>
        </div>
    </section>
</template>

<script>

import { mapState, mapGetters, mapMutations } from 'vuex';
import Router from '../Router.vue';

export default {
    name: 'Auth',

    components: { Router },

    data: () => ({
        ready: false,
    }),

    computed: {
        ...mapState(['meta']),
        ...mapGetters('localisation', ['documentTitle']),
    },

    created() {
        this.init();
    },

    methods: {
        ...mapMutations(['setMeta', 'setRoutes']),
        ...mapMutations('localisation', ['setI18n']),
        ...mapMutations('preferences', ['lang']),
        init() {
            axios.get('/api/meta', {
                params: { locale: localStorage.getItem('locale') },
            }).then(({ data }) => {
                const { meta, i18n, routes } = data;
                const lang = Object.keys(i18n).shift();
                this.lang(lang);
                this.setI18n(i18n);
                document.title = this.documentTitle(this.$route.meta.title);
                this.setMeta(meta);
                this.setRoutes(routes);
                this.ready = true;
            }).catch(error => this.handleError(error));
        },
    },
};

</script>
