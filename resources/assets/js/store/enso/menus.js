export const menus = {
	namespaced: true,

    state: {
        list: [],
        implicit: null
    },

    mutations: {
        set: (state, menus) => state.list = menus,
        setImplicit: (state, implicit) => state.implicit = implicit,
        toggle: (state, menu) => menu.expanded = !menu.expanded
    }
};