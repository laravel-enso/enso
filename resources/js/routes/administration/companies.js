import routeImporter from '../../modules/importers/routeImporter';

const routes = routeImporter(require.context('./companies', false, /.*\.js$/));
const RouterView = () => import('../../core/Router.vue');

export default {
    path: 'companies',
    component: RouterView,
    meta: {
        breadcrumb: 'companies',
        route: 'administration.companies.index',
    },
    children: routes,
};
