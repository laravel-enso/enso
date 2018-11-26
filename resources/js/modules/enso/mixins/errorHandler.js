import Vue from 'vue';

Vue.mixin({
    methods: {
        handleError(error) {
            if (Object.prototype.hasOwnProperty.call(this, 'loading')) {
                this.loading = false;
            }

            const { status, data } = error.response;

            if ([401, 419].includes(status) && this.$store.state.auth.isAuth) {
                this.$store.commit('bookmarks/setLastRoute', this.$route);
                this.$store.commit('initialise', false);
                this.$store.commit('auth/logout');
                this.$router.push({ name: 'login' });
                return;
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
