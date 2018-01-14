<template>

    <section class="hero login is-fullheight is-primary is-bold">
        <div class="hero-body">
            <div class="container">
                <div class="columns is-mobile is-centered">
                    <router
                        :app-name="appName"
                        @login="$emit('login')">
                    </router>
                </div>
            </div>
        </div>
    </section>

</template>

<script>

import Router from '../layout/Router.vue';

export default {
    name: 'Auth',

    components: { Router },

    data() {
        return {
            appName: '',
        };
    },

    created() {
        axios.get('/api/getAppName').then(({ data }) => {
            this.appName = data;
        }).catch(error => this.handleError(error));
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
