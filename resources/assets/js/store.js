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
            ? route('core.avatars.show', state.user.avatarId || 'null')
            : '#'),
        routes: state => state.routes,
    },

    mutations: {
        setUser: (state, user) => { state.user = user; },
        setImpersonating: (state, impersonating) => { state.impersonating = impersonating; },
        setUserAvatar: (state, avatarId) => { state.user.avatarId = avatarId; },
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
        initialise({ commit }) {
            commit('initialise', false);

            axios.get('/api/core').then(({ data }) => {
                commit('setUser', data.user);
                commit('preferences/set', data.preferences);
                commit('setImpersonating', data.impersonating);
                commit('menus/set', data.menus);
                commit('menus/setImplicit', data.implicitMenu);
                commit('localisation/setLanguages', data.languages);
                commit('localisation/setI18n', data.i18n);
                commit('layout/setThemes', data.themes);
                commit('layout/menu/update', data.preferences.global.expandedMenu);
                commit('setMeta', data.meta);
                commit('setCsrfToken', data.meta.csrfToken);
                commit('setRoutes', data.routes);
                router.addRoutes([{ path: '/', redirect: { name: data.implicitMenu.link } }]);

                if (data.ravenKey) {
                    Raven.config(data.meta.ravenKey)
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
