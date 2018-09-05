const DataImportIndex = () => import('../pages/dataimport/Index.vue');

export default {
    name: 'import.index',
    path: '/import',
    component: DataImportIndex,
    meta: {
        breadcrumb: 'data import',
        title: 'Data Import',
    },
};
