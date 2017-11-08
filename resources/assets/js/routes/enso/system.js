import { PermissionGroups } from './system/permissionGroups';
import { Permissions } from './system/permissions';
import { Menus } from './system/menus';
import { Roles } from './system/roles';
import { Logs } from './system/logs';
import { Localisation } from './system/localisation';
import { Tutorials } from './system/tutorials';
import RouterView from '../../pages/enso/layout/Router.vue';

export const System = {
    path: '/system',
    component: RouterView,
    meta: {
        breadcrumb: 'system',
    },
    children: [PermissionGroups, Permissions, Menus, Roles, Logs, Localisation, Tutorials],
};
