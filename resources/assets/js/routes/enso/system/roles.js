import Index from './roles/index';
import Create from './roles/create';
import Edit from './roles/edit';
import Configure from './roles/configure';
import RouterView from '../../../pages/enso/layout/Router.vue';

export default {
    path: 'roles',
    component: RouterView,
    meta: {
        breadcrumb: 'roles',
        route: 'system.roles.index',
    },
    children: [Index, Edit, Create, Configure],
};
