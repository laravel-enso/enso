const DashboardIndex = () => import('../pages/dashboard/Index.vue');

export default {
    name: 'dashboard.index',
    path: '/dashboard',
    component: DashboardIndex,
    meta: {
        breadcrumb: 'dashboard',
        title: 'Dashboard',
    },
};
