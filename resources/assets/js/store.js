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
        avatarLink: state => (state.appIsLoaded
            ? route('core.avatars.show', (state.user.avatarId || 'null'), false).toString()
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
        setState({ commit, dispatch, getters }) {
            axios.get('/api/core').then(({ data }) => {
                const { state } = data;
                commit('setUser', state.user);
                commit('setImpersonating', state.impersonating);
                commit('menus/set', state.menus);
                commit('menus/setImplicit', state.implicitMenu);
                commit('locale/setLanguages', state.languages);
                commit('locale/setI18n', state.i18n);
                dispatch('locale/setLocale', state.user.preferences.global.lang);
                commit('layout/setThemes', state.themes);
                commit('setMeta', state.meta);
                dispatch('layout/setTheme');
                window.Laravel = {
                    csrfToken: state.csrfToken,
                };
                axios.defaults.headers.common['X-CSRF-TOKEN'] = state.csrfToken;
                commit('setRoutes', state.routes);
                router.addRoutes([{ path: '/', redirect: { name: state.implicitMenu.link } }]);

                if (state.ravenKey) {
                    Raven.config(state.ravenKey)
                        .addPlugin(RavenVue, Vue)
                        .install();
                }

                const documentTilePrefix = state.meta.extendedDocumentTitle
                    ? `${state.meta.appName} | `
                    : '';
                const __ = getters['locale/__'];

                router.beforeEach((to, from, next) => {
                    if (to.meta.title !== from.meta.title) {
                        document.title = documentTilePrefix + __(to.meta.title);
                    }

                    next();
                });

                commit('setLoadedState');
            }).catch((error) => {
                if (error.response.status === 401) {
                    dispatch('auth/logout', false);
                }
            });
        },
    },
});
