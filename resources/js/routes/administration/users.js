import routeImporter from '../../modules/importers/routeImporter';

const routes = routeImporter(require.context('./users', false, /.*\.js$/));
const RouterView = () => import('../../core/Router.vue');

export default {
    path: 'users',
    component: RouterView,
    meta: {
        breadcrumb: 'users',
        route: 'administration.users.index',
    },
    children: routes,
};
