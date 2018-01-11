import Permission from './create/permission';
import Resource from './create/resource';

const PermissionsCreate = () => import('../../../pages/system/permissions/Create.vue');

export default {
    path: '',
    component: PermissionsCreate,
    meta: {
        breadcrumb: 'create',
    },
    children: [Permission, Resource],
};
