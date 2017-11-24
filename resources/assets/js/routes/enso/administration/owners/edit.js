import OwnerEdit from '../../../../pages/enso/administration/owners/Edit.vue';

export default {
    name: 'administration.owners.edit',
    path: ':id/edit',
    component: OwnerEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Owner',
    },
};
