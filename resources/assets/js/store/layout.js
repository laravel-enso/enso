import storeImporter from '../modules/importers/storeImporter';

export const modules = storeImporter(require.context('./layout', false, /.*\.js$/));

export const state = {
    themes: [],
    lightsOff: false,
    isMobile: false,
    isTablet: false,
    isTouch: false,
};

export const getters = {
    theme: (state, getters, rootState) => (rootState.user.preferences ?
        rootState.user.preferences.global.theme
        : null),
};

export const mutations = {
    setThemes: (state, themes) => { state.themes = themes; },
    setThemeParams() {
        const height = document.querySelector('.app-navbar').clientHeight;
        const menuAside = document.querySelector('.menu.aside');
        const settingsAside = document.querySelector('.settings.aside');
        const mainContent = document.querySelector('section.main-content');

        menuAside.style.top = `${height}px`;
        settingsAside.style.top = `${height}px`;
        mainContent.style['margin-top'] = `${height}px`;
    },
    toggleLights(state) {
        state.lightsOff = !state.lightsOff;
    },
    setIsMobile: (state, isMobile) => { state.isMobile = isMobile; },
    setIsTablet: (state, isTablet) => { state.isTablet = isTablet; },
    setIsTouch: (state, isTouch) => { state.isTouch = isTouch; },
};

export const actions = {
    setTheme({ state, getters }) {
        document.getElementById('theme').setAttribute('href', state.themes[getters.theme]);
    },
    switchTheme({ commit, dispatch }, theme) {
        commit('setTheme', theme, { root: true });
        commit('toggleLights');
        setTimeout(() => dispatch('setTheme'), 300);
        setTimeout(() => commit('toggleLights'), 500);
        setTimeout(() => commit('setThemeParams'), 501);
    },
};
