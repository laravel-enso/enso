import { Index } from './permissionGroups/index';
import { Create } from './permissionGroups/create';
import { Edit } from './permissionGroups/edit';

export const PermissionGroups = {
    path: 'permissionGroups',
    component: require('../../../pages/enso/layout/Router.vue'),
    meta: {
        breadcrumb: 'permissionGroups',
        route: 'system.permissionGroups.index',
    },
    children: [ Index, Edit, Create ]
};