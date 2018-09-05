const Unauthorized = () => import('../core/Unauthorized.vue');

export default {
    name: 'unauthorized',
    path: '/403',
    component: Unauthorized,
    meta: {
        title: 'Unauthorized',
    },
};
