import LocalisationEdit from '../../../../pages/enso/system/localisation/Edit.vue';

export const Edit = {
    name: 'system.localisation.edit',
    path: ':id/edit',
    component: LocalisationEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Language',
    },
};
