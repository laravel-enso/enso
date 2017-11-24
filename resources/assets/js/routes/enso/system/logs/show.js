import LogShow from '../../../../pages/enso/system/logs/Show.vue';

export default {
    name: 'system.logs.show',
    path: ':id',
    component: LogShow,
    meta: {
        breadcrumb: 'show',
        title: 'Show Log',
    },
};
