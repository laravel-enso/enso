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

                return this.$router.push({ name: 'login' });
            }

            if ([403, 409, 429, 555].includes(status)) {
                return toastr.error(data.message);
            }

            throw error;
        },
    },
});
