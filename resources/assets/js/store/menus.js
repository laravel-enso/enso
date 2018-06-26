export const state = {
    list: [],
    implicit: null,
};

export const mutations = {
    set: (state, menuList) => { state.list = menuList; },
    setImplicit: (state, implicit) => { state.implicit = implicit; },
    toggle: (state, menu) => { menu.expanded = !menu.expanded; },
    expand: (state, menu) => { menu.expanded = true; },
};
