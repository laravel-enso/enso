export default {
    namespaced: true,

    state: {
        list: [],
        implicit: null,
    },

    mutations: {
        set: (state, menuList) => { state.list = menuList; },
        setImplicit: (state, implicit) => { state.implicit = implicit; },
        toggle: (state, menu) => { menu.expanded = !menu.expanded; },
    },
};
