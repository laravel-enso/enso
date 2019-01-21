import router from '../../../router';

const routeNameMatches = ({ route }) => router.app.$route.matched
    .map(matchedRoute => matchedRoute.name)
    .includes(route);

const routePathMatches = ({ route }) => router.app.$route.matched.length > 1
    && router.app.$route.matched
        .map(matchedRoute => matchedRoute.path)[router.app.$route.matched.length - 2]
    === `/${route.split('.').slice(0, -1).join('/')}`;

const isActive = menu => menu.route !== null
    && (routeNameMatches(menu) || routePathMatches(menu));

const hasActiveChild = menu => menu.has_children
    && menu.children.some(child =>
        isActive(child) || hasActiveChild(child));

const updateActiveMenu = (menus, commit) => {
    menus.filter(menu => !hasActiveChild(menu) && menu.expanded)
        .forEach((menu) => {
            commit('collapse', menu);
        });

    const menu = menus.find(menu => hasActiveChild(menu));

    if (menu) {
        commit('expand', menu);
        updateActiveMenu(menu.children, commit);
    }
};

export { isActive, updateActiveMenu };
