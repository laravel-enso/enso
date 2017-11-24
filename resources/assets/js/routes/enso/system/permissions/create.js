import Permission from './create/permission';
import Resource from './create/resource';
import PermissionsCreate from '../../../../pages/enso/system/permissions/Create.vue';

export default {
    path: '',
    component: PermissionsCreate,
    meta: {
        breadcrumb: 'create',
    },
    children: [Permission, Resource],
};
