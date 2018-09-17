import Vue from 'vue';
import Vuex from 'vuex';
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';
import router from './router';
import storeImporter from './modules/importers/storeImporter';
import localState from './localState';

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
        requests: [],
    },

    getters: {
        avatarLink: state => (state.isInitialised
            ? route('core.avatars.show', state.user.avatar.id)
            : '#'),
        routes: state => Object.keys(state.routes),
        requests: state => state.requests.length,
        requestIndex: state => ({ url, method }) => state.requests
            .findIndex(request =>
                method === request.method && url === request.url),
    },

    mutations: {
        addRequest: (state, { method, url }) => state.requests.push({ method, url }),
        removeRequest: (state, index) => {
            state.requests.splice(index, 1);
        },
        setUser: (state, user) => (state.user = user),
        setImpersonating: (state, impersonating) => (state.impersonating = impersonating),
        setUserAvatar: (state, avatarId) => (state.user.avatar.id = avatarId),
        setMeta: (state, meta) => (state.meta = meta),
        initialise: (state, value) => (state.isInitialised = value),
        setShowQuote: (state, value) => (state.showQuote = value),
        setRoutes: (state, routes) => (state.routes = { ...routes, ...{ touch: null } }),
        setDefaultRoute: (state, route) => {
            router.addRoutes([{
                path: '/',
                redirect: { name: route },
            }]);
        },
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
                commit('setDefaultRoute', data.implicitMenu.link);

                if (data.ravenKey) {
                    Raven.config(data.meta.ravenKey)
                        .addPlugin(RavenVue, Vue)
                        .install();
                }

                dispatch('layout/setTheme')
                    .then(() => {
                        if (data.local) {
                            dispatch('setLocalState', data.local);
                        }
                        setTimeout(() => commit('initialise', true), 200);
                    });
            }).catch((error) => {
                if (error.response.status === 401) {
                    commit('auth/logout');
                    router.push({ name: 'login' });
                }
            });
        },
        setLocalState(context, state) {
            localState(context, state);
        },
    },
});
