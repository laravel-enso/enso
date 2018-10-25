const RoleEdit = () => import('../../../pages/system/roles/Edit.vue');

export default {
    name: 'system.roles.edit',
    path: ':role/edit',
    component: RoleEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Role',
    },
};
