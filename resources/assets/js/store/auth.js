export const state = {
    isAuth: localStorage.getItem('isAuth') === 'true',
    lastRoute: null,
};

export const mutations = {
    login() {
        state.isAuth = true;
        localStorage.setItem('isAuth', true);
    },
    logout() {
        state.isAuth = false;
        localStorage.setItem('isAuth', false);
    },
    setLastRoute: (state, route) => { state.lastRoute = route; },
};
