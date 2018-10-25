export const state = {
    list: [],
};

export const mutations = {
    set: (state, menuList) => (state.list = menuList),
    toggle: (state, menu) => (menu.expanded = !menu.expanded),
    expand: (state, menu) => (menu.expanded = true),
};
