<template>

    <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <router v-if="$route.meta.guestGuard"></router>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

import { mapState, mapMutations } from 'vuex';
import Router from '../layout/Router.vue';

export default {
    name: 'Auth',

    components: { Router },

    computed: {
        ...mapState(['meta']),
        ...mapState('auth', ['lastRoute']),
    },

    created() {
        axios.get('/api/getMeta').then(({ data }) => {
            const { meta, i18n } = data;
            this.setMeta(meta);
            this.setI18n(i18n);
            const lang = Object.keys(i18n).shift();
            this.setUser({ preferences: { global: { lang } } });
        }).catch(error => this.handleError(error));
    },

    methods: {
        ...mapMutations(['setMeta']),
        ...mapMutations('locale', ['setI18n']),
        ...mapMutations(['setUser']),
    },
};

</script>

<style>

    .column.login {
         max-width: 400px;
    }

    figure.logo {
        display: inline-block;
    }

</style>
