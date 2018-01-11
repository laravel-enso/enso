import Vue from 'vue';
import Vuex from 'vuex';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import router from './router';
import storeImporter from './modules/importers/storeImporter';

Vue.use(Vuex);

const modules = storeImporter(require.context('./store', false, /.*\.js$/));

export default new Vuex.Store({
    strict: true,

    modules,

    state: {
        user: {},
        impersonating: null,
        meta: {},
        appIsLoaded: false,
        routes: {},
    },

    getters: {
        avatarLink: state => (state.appIsLoaded ?
            route('core.avatars.show', (state.user.avatarId || 'null'), false).toString()
            : '#'),
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

                if (data.ravenKey) {
                    Raven.config(data.ravenKey)
                        .addPlugin(RavenVue, Vue)
                        .install();
                }

                commit('setLoadedState');
            }).catch((error) => {
                if (error.response.status === 401) {
                    dispatch('auth/logout', false);
                }
            });
        },
    },
});
