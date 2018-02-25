const OwnerCreate = () => import('../../../pages/administration/owners/Create.vue');

export default {
    name: 'administration.owners.create',
    path: 'create',
    component: OwnerCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Owner',
    },
};
