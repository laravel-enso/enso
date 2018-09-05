export const state = {
    isAuth: localStorage.getItem('isAuth') === 'true',
    lastRoute: null,
};

export const mutations = {
    login(state) {
        state.isAuth = true;
        localStorage.setItem('isAuth', true);
    },
    logout(state) {
        state.isAuth = false;
        localStorage.setItem('isAuth', false);
    },
    setLastRoute: (state, route) => (state.lastRoute = route),
};
