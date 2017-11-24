export default {
    namespaced: true,

    state: {
        isVisible: false,
    },

    mutations: {
        toggle: (state) => {
            state.isVisible = !state.isVisible;
        },
    },
};
