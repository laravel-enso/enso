import { isActive, updateActiveMenu } from '../modules/enso/plugins/menuManager';

export const state = {
    list: [],
};

export const getters = {
    isActive: () => menu => isActive(menu),
};

export const mutations = {
    set: (state, menuList) => (state.list = menuList),
    toggle: (state, menu) => (menu.expanded = !menu.expanded),
    expand: (state, menu) => (menu.expanded = true),
    collapse: (state, menu) => (menu.expanded = false),
};

export const actions = {
    updateMenuState: ({ state, commit }) => {
        updateActiveMenu(state.list, commit);
    },
};
