import routeImporter from '../modules/importers/routeImporter';

const routes = routeImporter(require.context('./system', false, /.*\.js$/));
const RouterView = () => import('../core/Router.vue');

export default {
    path: '/system',
    component: RouterView,
    meta: {
        breadcrumb: 'system',
    },
    children: routes,
};
