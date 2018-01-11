const PermissionEdit = () => import('../../../pages/system/permissions/Edit.vue');

export default {
    name: 'system.permissions.edit',
    path: ':id/edit',
    component: PermissionEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Permission',
    },
};
