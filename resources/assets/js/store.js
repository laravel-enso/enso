import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import router from './router';
import { locale } from './store/enso/locale';
import { menus } from './store/enso/menus';
import { layout } from './store/enso/layout';
import { auth } from './store/enso/auth';

export default new Vuex.Store({
    strict: true,

    modules: {
        locale, menus, layout, auth,
    },

    state: {
        user: {},
        impersonating: null,
        meta: {},
        appIsLoaded: false,
        routes: {},
    },

    getters: {
        avatarLink: state => (state.appIsLoaded ?
            route('core.avatars.show', (state.user.avatarId || 'null'), false).toString() : '#'),
    },

    mutations: {
        setUser: (state, user) => { state.user = user; },
        setImpersonating: (state, impersonating) => { state.impersonating = impersonating; },
        setUserAvatar: (state, avatarId) => { state.user.avatarId = avatarId; },
        setTheme: (state, theme) => { state.user.preferences.global.theme = theme; },
        setLocale: (state, selectedLocale) => {
            state.user.preferences.global.lang = selectedLocale;
        },
        setMeta: (state, meta) => { state.meta = meta; },
        setLoadedState: (state) => { state.appIsLoaded = true; },
        setRoutes: (state, routes) => { state.routes = routes; },
    },

    actions: {
        setState({ commit, dispatch }) {
            axios.get('/api/core/init').then(({ data }) => {
                commit('setUser', data.user);
                commit('setImpersonating', data.impersonating);
                commit('menus/set', data.menus);
                commit('menus/setImplicit', data.implicitMenu);
                commit('locale/setLanguages', data.languages);
                commit('locale/setI18n', data.i18n);
                dispatch('locale/setLocale', data.user.preferences.global.lang);
                commit('layout/setThemes', data.themes);
                commit('setMeta', data.meta);
                dispatch('layout/setTheme');
                window.Laravel = {
                    csrfToken: data.csrfToken,
                };
                axios.defaults.headers.common['X-CSRF-TOKEN'] = data.csrfToken;
                commit('setRoutes', data.routes);
                router.addRoutes([{ path: '/', redirect: { name: data.implicitMenu.link } }]);
                commit('setLoadedState');
            }).catch((error) => {
                if (error.response.status === 401) {
                    dispatch('auth/logout', false);
                }
            });
        },
    },
});
