import routeImporter from '../../modules/importers/routeImporter';

const routes = routeImporter(require.context('./permissions', false, /.*\.js$/));
const RouterView = () => import('../../core/Router.vue');


export default {
    path: 'permissions',
    component: RouterView,
    meta: {
        breadcrumb: 'permissions',
        route: 'system.permissions.index',
    },
    children: routes,
};
