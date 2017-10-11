import { PermissionGroups } from './system/permissionGroups';
import { Permissions } from './system/permissions';
import { Menus } from './system/menus';
import { Roles } from './system/roles';
import { Logs } from './system/logs';
import { Localisation } from './system/localisation';
import { Tutorials } from './system/tutorials';

export const System = {
    path: '/system',
    component: require('../../pages/enso/layout/Router.vue'),
    meta: {
        breadcrumb: 'system',
    },
    children: [ PermissionGroups, Permissions, Menus, Roles, Logs, Localisation, Tutorials ]
};