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

import { mapState, mapMutations } from 'vuex';
import Router from '../Router.vue';

export default {
    name: 'Auth',

    components: { Router },

    data() {
        return {
            ready: false,
        };
    },

    computed: {
        ...mapState(['meta']),
    },

    created() {
        this.init();
    },

    methods: {
        ...mapMutations(['setMeta', 'setRoutes']),
        ...mapMutations('localisation', ['setI18n']),
        ...mapMutations('preferences', ['lang']),
        init() {
            const locale = localStorage.getItem('locale');

            axios.get('/api/meta', { params: { locale } })
                .then(({ data }) => {
                    const { meta, i18n, routes } = data;
                    this.setMeta(meta);
                    this.setI18n(i18n);
                    this.setRoutes(routes);
                    const lang = Object.keys(i18n).shift();
                    this.lang(lang);
                    this.ready = true;
                }).catch(error => this.handleError(error));
        },
    },
};

</script>
