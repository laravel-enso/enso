export default {
    namespaced: true,

    state: {
        isVisible: true,
    },

    mutations: {
        expand: (state) => {
            state.isVisible = true;
        },
        collapse: (state) => {
            state.isVisible = false;
        },
        toggle: (state) => {
            state.isVisible = !state.isVisible;
        },
    },
};
