import router from '../../router';

export const auth = {
    namespaced: true,

    state: {
        auth: localStorage.hasOwnProperty('auth') && localStorage.getItem('auth'),
    },

    mutations: {
        setAuth: (state, value) => { state.auth = value; },
    },

    getters: {
        isAuth: state => state.auth,
    },

    actions: {
        login({ commit }) {
            commit('setAuth', true);
            localStorage.setItem('auth', true);
        },
        logout({ commit }) {
            delete axios.defaults.headers.common['X-CSRF-TOKEN'];
            commit('setAuth', false);
            localStorage.removeItem('auth');
            commit('setMeta', {}, { root: true });
            router.replace({ name: 'login' });
        },
    },
};
