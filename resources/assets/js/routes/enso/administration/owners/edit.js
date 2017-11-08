import OwnerEdit from '../../../../pages/enso/administration/owners/Edit.vue';

export const Edit = {
    name: 'administration.owners.edit',
    path: ':id/edit',
    component: OwnerEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Owner',
    },
};
