import OwnerCreate from '../../../../pages/enso/administration/owners/Create.vue';

export const Create = {
    name: 'administration.owners.create',
    path: 'create',
    component: OwnerCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Owner',
        notAnimated: true,
    },
};
