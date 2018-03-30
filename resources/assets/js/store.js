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
        isInitialised: false,
        showQuote: false,
        user: {},
        impersonating: null,
        meta: {},
        routes: {},
    },

    getters: {
        avatarLink: state => (state.isInitialised
            ? route('core.avatars.show', (state.user.avatarId || 'null'), false).toString()
            : '#'),
        routes: state => state.routes,
    },

    mutations: {
        setUser: (state, user) => { state.user = user; },
        setImpersonating: (state, impersonating) => { state.impersonating = impersonating; },
        setUserAvatar: (state, avatarId) => { state.user.avatarId = avatarId; },
        setTheme: (state, theme) => { state.user.preferences.global.theme = theme; },
        setMenuState: (state, menuState) => {
            state.user.preferences.global.expandedMenu = menuState;
        },
        setLocale: (state, selectedLocale) => {
            state.user.preferences.global.lang = selectedLocale;
        },
        setMeta: (state, meta) => { state.meta = meta; },
        initialise: (state, value) => { state.isInitialised = value; },
        setShowQuote: (state, value) => { state.showQuote = value; },
        setRoutes: (state, routes) => { state.routes = routes; },
        setCsrfToken: (state, token) => {
            state.meta.csrfToken = token;
            axios.defaults.headers.common['X-CSRF-TOKEN'] = token;
            window.Laravel = {
                csrfToken: token,
            };
        },
    },

    actions: {
        initialise({ commit, dispatch }) {
            commit('initialise', false);

            axios.get('/api/core').then(({ data }) => {
                const { state } = data;
                commit('setUser', state.user);
                commit('setImpersonating', state.impersonating);
                commit('menus/set', state.menus);
                commit('menus/setImplicit', state.implicitMenu);
                commit('locale/setLanguages', state.languages);
                commit('locale/setI18n', state.i18n);
                commit('layout/navbar/update', state.user.preferences.global.expandedMenu);
                dispatch('locale/setLocale', state.user.preferences.global.lang);
                commit('layout/setThemes', state.themes);
                commit('setMeta', state.meta);
                dispatch('layout/setTheme');
                commit('setCsrfToken', state.meta.csrfToken);
                commit('setRoutes', state.routes);
                router.addRoutes([{ path: '/', redirect: { name: state.implicitMenu.link } }]);

                if (state.ravenKey) {
                    Raven.config(state.meta.ravenKey)
                        .addPlugin(RavenVue, Vue)
                        .install();
                }

                commit('initialise', true);
            }).catch((error) => {
                if (error.response.status === 401) {
                    commit('auth/logout');
                }
            });
        },
    },
});
