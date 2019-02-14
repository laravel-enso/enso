export const state = {
    global: {},
    local: {},
};

const setPreferences = (payload) => {
    axios.patch(route('core.preferences.setPreferences'), payload)
        .catch(error => this.handleError(error));
};

const updateGlobal = () => {
    setPreferences({ global: state.global });
};

const updateLocal = (payload) => {
    setPreferences({ route: payload.route, value: payload.value });
};

export const getters = {
    global: state => state.global,
    local: state => route => state.local[route],
    lang: state => state.global.lang,
    theme: state => state.global.theme,
    expandedMenu: state => state.global.expandedMenu,
    toastrPosition: state => state.global.toastrPosition,
    bookmarks: state => state.global.bookmarks,
    isRTL: state => state.global.isRTL,
    rtlClass: state => state.global.rtlClass,
    rtlCss: state => (state.global.isRTL ? '-rtl' : ''),
};

export const mutations = {
    set: (state, preferences) => {
        state.global = preferences.global;
        state.local = preferences.local;
    },
    global: (state, payload) => (state.global = payload),
    lang: (state, lang) => (state.global.lang = lang),
    theme: (state, theme) => (state.global.theme = theme),
    toastrPosition: (state, position) => (state.global.toastrPosition = position),
    expandedMenu: (state, expandedMenu) => (state.global.expandedMenu = expandedMenu),
    bookmarks: (state, bookmarks) => (state.global.bookmarks = bookmarks),
    local: (state, payload) => (state.local[payload.route] = payload.value),
    isRTL: (state, isRTL) => (state.global.isRTL = isRTL),
    rtlClass: (state, rtlClass) => (state.global.rtlClass = rtlClass),
    rtlCss: (state, rtlCss) => (state.global.rtlCss = rtlCss),
};

export const actions = {
    setGlobal: ({ commit }, payload) => {
        commit('global', payload);
        updateGlobal();
    },
    setLocal: ({ commit }, payload) => {
        commit('local', payload);
        updateLocal(payload);
    },
    setLang: ({ commit, dispatch, getters }, lang) => {
        commit('lang', lang);
        localStorage.setItem('locale', lang);

        const rtlLangs = ['ar', 'arc', 'dv', 'fa', 'ha', 'he', 'khw', 'ks', 'ku', 'ps', 'ur', 'yi'];

        if (rtlLangs.includes(lang)) {
            dispatch('setIsRTL', true);
            dispatch('setRtlClass', true);
            dispatch('setRtlCss', true);
        } else {
            dispatch('setIsRTL', false);
            dispatch('setRtlClass', false);
            dispatch('setRtlCss', false);
        }

        const { theme } = getters;
        dispatch('setTheme', theme);

        updateGlobal();
    },
    setTheme: ({ commit, dispatch, getters }, theme) => {
        if (theme.replace('-rtl', '') + getters.rtlCss === getters.theme) {
            return;
        }

        commit('theme', theme.replace('-rtl', '') + getters.rtlCss);

        dispatch('layout/switchTheme', null, { root: true })
            .then(() => updateGlobal());
    },
    setToastrPosition: ({ commit }, position) => {
        commit('toastrPosition', position);
        updateGlobal();
    },
    setBookmarksState: ({ commit }, bookmarks) => {
        commit('bookmarks', bookmarks);
        updateGlobal();
    },
    setMenuState: ({ commit }, state) => {
        commit('expandedMenu', state);
        commit('layout/menu/update', state, { root: true });
        updateGlobal();
    },
    setIsRTL: ({ commit }, isRTL) => {
        commit('isRTL', isRTL);
    },
    setRtlClass: ({ commit }, isRTL) => (
        isRTL ? commit('rtlClass', 'right') : commit('rtlClass', 'left')
    ),
    setRtlCss: ({ commit }, isRTL) => (
        isRTL ? commit('rtlCss', '-rtl') : commit('rtlCss', '')
    ),
};
