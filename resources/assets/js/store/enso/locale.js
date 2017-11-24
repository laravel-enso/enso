export default {
    namespaced: true,

    state: {
        i18n: {},
        languages: [],
    },

    mutations: {
        setI18n: (state, i18n) => { state.i18n = i18n; },
        setLanguages: (state, languages) => { state.languages = languages; },
    },

    getters: {
        __: (state, getters, rootState) => (key) => {
            const { lang } = rootState.user.preferences.global;
            return state.i18n[lang] ? (state.i18n[lang][key] || key) : key;
        },
        current: (state, getters, rootState) => (rootState.user.preferences ?
            rootState.user.preferences.global.lang
            : null),
    },

    actions: {
        setLocale({ commit }, selectedLocale) {
            commit('setLocale', selectedLocale, { root: true });
            moment.locale(selectedLocale);
        },
    },
};
