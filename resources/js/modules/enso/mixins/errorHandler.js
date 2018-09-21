import Vue from 'vue';

Vue.mixin({
    methods: {
        handleError(error) {
            if (this.hasOwnProperty('loading')) {
                this.loading = false;
            }

            const { status, data } = error.response;

            if (status === 401) {
                if (this.$store.state.auth.isAuth) {
                    this.$store.commit('history/setLastRoute', this.$route);
                    this.$store.commit('initialise', false);
                    this.$store.commit('auth/logout');
                    this.$router.push({ name: 'login' });
                    return;
                }
            }

            if ([403, 409, 429, 555].includes(status)) {
                this.$toastr.error(data.message);
                return;
            }

            if (status === 404) {
                this.$router.push({ name: 'notFound' });
                return;
            }

            if (status === 503) {
                window.location.reload();
            }

            throw error;
        },
    },
});
