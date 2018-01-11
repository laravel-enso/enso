export const state = {
    isVisible: true,
};

export const mutations = {
    expand: (state) => {
        state.isVisible = true;
    },
    collapse: (state) => {
        state.isVisible = false;
    },
    toggle: (state) => {
        state.isVisible = !state.isVisible;
    },
};
