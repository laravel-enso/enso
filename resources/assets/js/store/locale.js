export const state = {
    i18n: {},
    languages: [],
};

export const mutations = {
    setI18n: (state, i18n) => { state.i18n = i18n; },
    setLanguages: (state, languages) => { state.languages = languages; },
};

export const getters = {
    __: (state, getters, rootState) => (key) => {
        const { lang } = rootState.user.preferences.global;
        return state.i18n[lang] ? (state.i18n[lang][key] || key) : key;
    },
    current: (state, getters, rootState) => (rootState.user.preferences ?
        rootState.user.preferences.global.lang
        : null),
};

export const actions = {
    setLocale({ commit }, selectedLocale) {
        commit('setLocale', selectedLocale, { root: true });
    },
};
