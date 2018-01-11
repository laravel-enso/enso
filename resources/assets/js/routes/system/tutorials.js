import routeImporter from '../../modules/importers/routeImporter';

const routes = routeImporter(require.context('./tutorials', false, /.*\.js$/));
const RouterView = () => import('../../pages/layout/Router.vue');

export default {
    path: 'tutorials',
    component: RouterView,
    meta: {
        breadcrumb: 'tutorials',
        route: 'system.tutorials.index',
    },
    children: routes,
};
