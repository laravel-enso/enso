Vue.mixin({
    methods: {
        handleError(error) {
            let { status, data } = error.response;

            if (data.status === 401) {
                if (this.$store.getters['auth/isAuth']) {
                    this.$store.dispatch('auth/logout');
                }

                return this.$router.push({ name: 'login' });
            }

            if ([403, 409, 455].includes(status)) {
                return toastr.error(data.message);
            }

            throw error;
        }
    }
});