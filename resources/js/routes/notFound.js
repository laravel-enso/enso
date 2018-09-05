const NotFound = () => import('../core/NotFound.vue');

export default {
    name: 'notFound',
    path: '/404',
    alias: '*',
    component: NotFound,
    meta: {
        title: '404',
    },
};
