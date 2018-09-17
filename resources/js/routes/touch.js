const TouchMenus = () => import('../core/structure/menu/TouchMenus.vue');

export default {
    name: 'touch',
    path: '/home',
    component: TouchMenus,
    meta: {
        breadcrumb: 'home',
        title: 'Home',
    },
};
