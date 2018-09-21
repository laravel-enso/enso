export const state = {
    routes: [],
    lastRoute: null,
};

export const mutations = {
    push(state, route) {
        if (state.routes.findIndex(({ name }) => name === route.name) === -1) {
            state.routes.push(route);
        }
    },
    drop(state, route) {
        if (state.routes.length > 1) {
            const index = state.routes
                .findIndex(({ name }) => name === route.name);
            state.routes.splice(index, 1);
        }
    },
    setLastRoute: (state, route) => (state.lastRoute = route),
};
