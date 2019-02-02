export const state = {
    i18n: {},
    languages: [],
    keyCollector: false,
    missingKeys: [],
};

export const getters = {
    isInitialised: state => Object.keys(state.i18n).length > 0,
    __: (state, getters, rootState) => (key) => {
        const { lang } = rootState.preferences.global;
        return state.i18n[lang]
            ? state.i18n[lang][key]
            : key;
    },
    documentTitle:
        (state, getters, rootState) => title => (rootState.meta.extendedDocumentTitle
            ? `${getters.__(title)} | ${rootState.meta.appName}`
            : getters.__(title)),
};

export const mutations = {
    setI18n: (state, i18n) => (state.i18n = i18n),
    setLanguages: (state, languages) => (state.languages = languages),
    addKey: (state, key) => {
        Object.keys(state.i18n).forEach((lang) => {
            state.i18n[lang][key] = '';
        });
    },
    setKeyCollector: (state, status) => {
        if (status === false) {
            state.missingKeys = [];
        }

        state.keyCollector = status;
    },
    clearMissingKeys: state => (state.missingKeys = []),
    addMissingKey: (state, key) => {
        if (!state.missingKeys.includes(key)) {
            state.missingKeys.push(key);
        }
    },
};
