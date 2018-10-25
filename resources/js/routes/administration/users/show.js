const UserShow = () => import('../../../pages/administration/users/Show.vue');

export default {
    name: 'administration.users.show',
    path: ':user',
    component: UserShow,
    meta: {
        breadcrumb: 'show',
        title: 'User Profile',
    },
};
