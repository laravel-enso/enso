const UsersIndex = () => import('../../../pages/administration/users/Index.vue');

export default {
    name: 'administration.users.index',
    path: '',
    component: UsersIndex,
    meta: {
        breadcrumb: 'index',
        title: 'Users',
    },
};
