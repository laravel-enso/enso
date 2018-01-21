const Resource = () => import('../../../pages/system/permissions/Resource.vue');

export default {
    name: 'system.resourcePermissions.create',
    path: 'resource',
    component: Resource,
    meta: {
        breadcrumb: 'resource',
        title: 'Create Resource',
    },
};
