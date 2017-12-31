import Vue from 'vue';

Vue.mixin({
    methods: {
        handleError(error) {
            const { status, data } = error.response;

            if (status === 401) {
                if (this.$store.getters['auth/isAuth']) {
                    this.$store.commit('auth/setLastRoute', this.$route.name);
                    this.$store.dispatch('auth/logout');
                }

                this.$router.push({ name: 'login' });

                return;
            }

            if ([403, 409, 429, 455].includes(status)) {
                toastr.error(data.message);

                return;
            }

            throw error;
        },
    },
});
