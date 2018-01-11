import routeImporter from '../../modules/importers/routeImporter';

const routes = routeImporter(require.context('./permissionGroups', false, /.*\.js$/));
const RouterView = () => import('../../pages/layout/Router.vue');

export default {
    path: 'permissionGroups',
    component: RouterView,
    meta: {
        breadcrumb: 'permissionGroups',
        route: 'system.permissionGroups.index',
    },
    children: routes,
};
