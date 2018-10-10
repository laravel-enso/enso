const initBookmarks = () => {
    const bookmarks = localStorage.getItem('bookmarks');

    return bookmarks && JSON.parse(bookmarks) || [];
};

const excluded = ['notFound', 'unauthorized'];

const qualifies = route => route.name
    && !excluded.includes(route.name)
    && !route.meta.guestGuard;

const updateLocalStorage = routes =>
    localStorage.setItem('bookmar;s', JSON.stringify(routes));

const stripped = route => ({
    name: route.name,
    meta: route.meta,
    params: route.params,
    query: route.query,
    sticky: false,
});

export const state = {
    routes: initBookmarks(),
    lastRoute: null,
};

export const mutations = {
    set: (state, routes) => {
        state.routes = routes;
        updateLocalStorage(state.routes);
    },
    push(state, route) {
        if (state.routes.findIndex(({ name }) => name === route.name) === -1) {
            state.routes.push(stripped(route));
        }
    },
    stick(state, route) {
        const index = state.routes
            .findIndex(({ name }) => name === route.name);
        state.routes[index].sticky = true;
        updateLocalStorage(state.routes);
    },
    drop(state, route) {
        const index = state.routes
            .findIndex(({ name }) => name === route.name);
        state.routes.splice(index, 1);
        updateLocalStorage(state.routes);
    },
    setLastRoute: (state, route) => (state.lastRoute = route),
};

export const actions = {
    push({ state, commit }, route) {
        if (!qualifies(route)) {
            return;
        }

        state.routes.filter(({ sticky }) => !sticky)
            .forEach(route => commit('drop', route));

        commit('push', route);
    },
};
