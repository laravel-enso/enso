import storeImporter from '../modules/importers/storeImporter';

export const modules = storeImporter(require.context('./layout', false, /.*\.js$/));

export const state = {
    themes: [],
    lightsOff: false,
    isMobile: false,
    isTablet: false,
};

export const getters = {
    theme: (state, getters, rootState) => (rootState.user.preferences ?
        rootState.user.preferences.global.theme
        : null),
};

export const mutations = {
    setThemes: (state, themes) => { state.themes = themes; },
    setThemeParams() {
        const height = document.getElementById('app-navbar').clientHeight;
        const menuAside = document.querySelector('.menu.aside');
        const settingsAside = document.querySelector('.settings.aside');
        const mainContent = document.querySelector('section.main-content');
        const pageContent = document.querySelector('.container.page-content');
        const footer = document.querySelector('.footer.footer');

        menuAside.style.top = `${height}px`;
        settingsAside.style.top = `${height}px`;
        mainContent.style['padding-top'] = `${height}px`;
        pageContent.style['min-height'] = `${window.innerHeight - height - footer.clientHeight}px`;
    },
    toggleLights(state) {
        state.lightsOff = !state.lightsOff;
    },
    setIsMobile: (state, isMobile) => { state.isMobile = isMobile; },
    setIsTablet: (state, isTablet) => { state.isTablet = isTablet; },
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
