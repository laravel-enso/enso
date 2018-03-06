<template>

    <section class="hero is-fullheight is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-centered">
                    <router></router>
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
            this.setMeta(data);
        }).catch(error => this.handleError(error));
    },

    methods: {
        ...mapMutations(['setMeta']),
    },
};

</script>

<style>

    .box.login {
         max-width: 400px;
    }

    figure.logo {
        display: inline-block;
    }

</style>
