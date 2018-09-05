const PermissionGroupCreate = () => import('../../../pages/system/permissionGroups/Create.vue');

export default {
    name: 'system.permissionGroups.create',
    path: 'create',
    component: PermissionGroupCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Permission Group',
    },
};
