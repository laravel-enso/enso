import ResourceCreate from '../../../../../pages/enso/system/permissions/create/Resource.vue';

export const Resource = {
    name: 'system.permissions.createResource',
    path: 'resource',
    component: ResourceCreate,
    meta: {
        breadcrumb: 'resource',
        notAnimated: true,
        title: 'Create Resource',
    },
};
