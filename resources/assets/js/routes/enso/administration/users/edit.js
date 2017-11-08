import UserEdit from '../../../../pages/enso/administration/users/Edit.vue';

export const Edit = {
    name: 'administration.users.edit',
    path: ':id/edit',
    component: UserEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit User',
    },
};
