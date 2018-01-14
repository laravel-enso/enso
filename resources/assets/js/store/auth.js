import router from '../router';

export const state = {
    auth: localStorage.getItem('auth') === 'true',
    lastRoute: null,
};

export const mutations = {
    setAuth(state, value) { state.auth = value; },
    setLastRoute(state, value) { state.lastRoute = value; },
};

export const getters = {
    isAuth: state => state.auth,
    lastRoute: state => state.lastRoute,
};

export const actions = {
    login({ commit }) {
        commit('setAuth', true);
        localStorage.setItem('auth', true);
    },
    logout({ commit }) {
        delete axios.defaults.headers.common['X-CSRF-TOKEN'];
        commit('setAuth', false);
        localStorage.removeItem('auth');
        commit('setMeta', {}, { root: true });
        router.push({ name: 'login' });
    },
};
