import routeImporter from '../../modules/importers/routeImporter';

const routes = routeImporter(require.context('./owners', false, /.*\.js$/));
const RouterView = () => import('../../core/Router.vue');

export default {
    path: 'owners/',
    component: RouterView,
    meta: {
        breadcrumb: 'owners',
        route: 'administration.owners.index',
    },
    children: routes,
};
