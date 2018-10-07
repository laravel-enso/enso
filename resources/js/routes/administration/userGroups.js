import routeImporter from '../../modules/importers/routeImporter';

const routes = routeImporter(require.context('./userGroups', false, /.*\.js$/));
const RouterView = () => import('../../core/Router.vue');

export default {
    path: 'userGroups/',
    component: RouterView,
    meta: {
        breadcrumb: 'userGroups',
        route: 'administration.userGroups.index',
    },
    children: routes,
};
