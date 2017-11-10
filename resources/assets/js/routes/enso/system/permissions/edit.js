import PermissionEdit from '../../../../pages/enso/system/permissions/Edit.vue';

export const Edit = {
    name: 'system.permissions.edit',
    path: ':id/edit',
    component: PermissionEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Permission',
    },
};
