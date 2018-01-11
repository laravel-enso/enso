import routeImporter from '../../modules/importers/routeImporter';

const routes = routeImporter(require.context('./menus', false, /.*\.js$/));
const RouterView = () => import('../../pages/layout/Router.vue');

export default {
    path: 'menus',
    component: RouterView,
    meta: {
        breadcrumb: 'menus',
        route: 'system.menus.index',
    },
    children: routes,
};
