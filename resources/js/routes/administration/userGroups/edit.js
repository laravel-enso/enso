const UserGroupEdit = () => import('../../../pages/administration/userGroups/Edit.vue');

export default {
    name: 'administration.userGroups.edit',
    path: ':id/edit',
    component: UserGroupEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit User Group',
    },
};
