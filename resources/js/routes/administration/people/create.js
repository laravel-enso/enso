const PersonCreate = () => import('../../../pages/administration/people/Create.vue');

export default {
    name: 'administration.people.create',
    path: 'create',
    component: PersonCreate,
    meta: {
        breadcrumb: 'create',
        title: 'Create Person',
    },
};
