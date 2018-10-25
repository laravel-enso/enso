const LocalisationEdit = () => import('../../../pages/system/localisation/Edit.vue');

export default {
    name: 'system.localisation.edit',
    path: ':localisation/edit',
    component: LocalisationEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Language',
    },
};
