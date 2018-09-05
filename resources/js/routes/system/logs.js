import routeImporter from '../../modules/importers/routeImporter';

const routes = routeImporter(require.context('./logs', false, /.*\.js$/));
const RouterView = () => import('../../core/Router.vue');

export default {
    path: 'logs',
    component: RouterView,
    meta: {
        breadcrumb: 'logs',
        route: 'system.logs.index',
    },
    children: routes,
};
