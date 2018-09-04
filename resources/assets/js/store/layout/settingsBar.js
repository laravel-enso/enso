export const state = {
    isVisible: false,
};

export const mutations = {
    toggle: state => (state.isVisible = !state.isVisible),
};
