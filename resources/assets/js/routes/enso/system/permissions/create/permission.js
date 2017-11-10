import PermissionCreate from '../../../../../pages/enso/system/permissions/create/Permission.vue';

export const Permission = {
    name: 'system.permissions.create',
    path: 'create',
    component: PermissionCreate,
    meta: {
        breadcrumb: 'permission',
        notAnimated: true,
        title: 'Create Permission',
    },
};
