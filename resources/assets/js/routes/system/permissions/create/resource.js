const ResourceCreate = () => import('../../../../pages/system/permissions/create/Resource.vue');

export default {
    name: 'system.permissions.createResource',
    path: 'resource',
    component: ResourceCreate,
    meta: {
        breadcrumb: 'resource',
        notAnimated: true,
        title: 'Create Resource',
    },
};
