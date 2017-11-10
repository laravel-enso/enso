import RoleEdit from '../../../../pages/enso/system/roles/Edit.vue';

export const Edit = {
    name: 'system.roles.edit',
    path: ':id/edit',
    component: RoleEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Role',
    },
};
