const initHistory = () => {
    const history = localStorage.getItem('historyTabs');

    return history && JSON.parse(history) || [];
};

export const state = {
    routes: initHistory(),
    lastRoute: null,
};

const updateLocalStorage = routes =>
    localStorage.setItem('historyTabs', JSON.stringify(routes));

const stripped = route => ({
    name: route.name,
    meta: route.meta,
    params: route.params,
    query: route.query,
});

export const mutations = {
    set: (state, routes) => {
        state.routes = routes;
        updateLocalStorage(state.routes);
    },
    push(state, route) {
        if (state.routes.findIndex(({ name }) => name === route.name) === -1) {
            state.routes.push(stripped(route));
            updateLocalStorage(state.routes);
        }
    },
    drop(state, route) {
        if (state.routes.length > 1) {
            const index = state.routes
                .findIndex(({ name }) => name === route.name);

            state.routes.splice(index, 1);
            updateLocalStorage(state.routes);
        }
    },
    setLastRoute: (state, route) => (state.lastRoute = route),
};
