export const state = {
    isExpanded: true,
    isVisible: true,
};

export const mutations = {
    show: state => (state.isVisible = true),
    hide: state => (state.isVisible = false),
    expand: state => (state.isExpanded = true),
    collapse: state => (state.isExpanded = false),
    update: (state, status) => (state.isExpanded = status),
    toggle: (state, isTouch) => {
        if (isTouch) {
            state.isExpanded = true;
            state.isVisible = !state.isVisible;
            return;
        }

        state.isVisible = true;
        state.isExpanded = !state.isExpanded;
    },
};
