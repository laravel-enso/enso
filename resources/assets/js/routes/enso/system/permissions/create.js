import { Permission } from './create/permission';
import { Resource } from './create/resource';
import PermissionsCreate from '../../../../pages/enso/system/permissions/Create.vue';

export const Create = {
    path: '',
    component: PermissionsCreate,
    meta: {
        breadcrumb: 'create',
    },
    children: [Permission, Resource],
};
