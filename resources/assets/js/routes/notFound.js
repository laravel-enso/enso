const NotFound = () => import('../pages/NotFound.vue');

export default {
    name: 'notFound',
    path: '/404',
    alias: '*',
    component: NotFound,
};
