import routeImporter from '../../modules/importers/routeImporter';

const routes = routeImporter(require.context('./roles', false, /.*\.js$/));
const RouterView = () => import('../../pages/layout/Router.vue');


export default {
    path: 'roles',
    component: RouterView,
    meta: {
        breadcrumb: 'roles',
        route: 'system.roles.index',
    },
    children: routes,
};
