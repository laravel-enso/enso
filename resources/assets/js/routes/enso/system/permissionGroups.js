import { Index } from './permissionGroups/index';
import { Create } from './permissionGroups/create';
import { Edit } from './permissionGroups/edit';
import RouterView from '../../../pages/enso/layout/Router.vue';

export const PermissionGroups = {
    path: 'permissionGroups',
    component: RouterView,
    meta: {
        breadcrumb: 'permissionGroups',
        route: 'system.permissionGroups.index',
    },
    children: [Index, Edit, Create],
};
