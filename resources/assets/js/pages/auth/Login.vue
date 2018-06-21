<template>

    <auth-form is-login
        @success="init"
        action="Login"
        route="login"/>

</template>

<script>

import { mapMutations, mapState } from 'vuex';
import AuthForm from './AuthForm.vue';

export default {
    name: 'Login',

    components: { AuthForm },

    computed: {
        ...mapState(['meta']),
    },

    methods: {
        ...mapMutations('auth', ['login']),
        ...mapMutations('layout', ['showHome']),
        ...mapMutations(['setShowQuote', 'setCsrfToken']),
        init(data) {
            this.setShowQuote(this.meta.showQuote);
            this.setCsrfToken(data.csrfToken);
            setTimeout(() => {
                this.login();
                this.showHome();
            }, 200);
        },
    },
};

</script>
