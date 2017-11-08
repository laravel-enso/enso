import { navbar } from './layout/navbar';
import { settingsBar } from './layout/settingsBar';

export const layout = {
    namespaced: true,

    modules: { navbar, settingsBar },

    state: {
        themes: [],
        lightsOff: false,
        isMobile: false,
        isTablet: false,
    },

    getters: {
        theme: (state, getters, rootState) => rootState.user.preferences ?
            rootState.user.preferences.global.theme : null,
    },

    mutations: {
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
    },

    actions: {
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
    },
};
