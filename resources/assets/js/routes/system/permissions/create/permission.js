const PermissionCreate = () => import('../../../../pages/system/permissions/create/Permission.vue');

export default {
    name: 'system.permissions.create',
    path: 'create',
    component: PermissionCreate,
    meta: {
        breadcrumb: 'permission',
        notAnimated: true,
        title: 'Create Permission',
    },
};
