const ActivityLogIndex = () => import('../pages/activityLog/Index.vue');

export default {
    name: 'core.activityLogs.index',
    path: 'activityLog',
    component: ActivityLogIndex,
    meta: {
        breadcrumb: 'index',
        title: 'Activity Log',
    },
};
