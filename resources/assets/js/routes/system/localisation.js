import routeImporter from '../../modules/importers/routeImporter';

const routes = routeImporter(require.context('./localisation', false, /.*\.js$/));
const RouterView = () => import('../../core/Router.vue');

export default {
    path: 'localisation',
    component: RouterView,
    meta: {
        breadcrumb: 'localisation',
        route: 'system.localisation.index',
    },
    children: routes,
};
