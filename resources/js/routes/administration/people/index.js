const PeopleIndex = () => import('../../../pages/administration/people/Index.vue');

export default {
    name: 'administration.people.index',
    path: '',
    component: PeopleIndex,
    meta: {
        breadcrumb: 'index',
        title: 'People',
    },
};
