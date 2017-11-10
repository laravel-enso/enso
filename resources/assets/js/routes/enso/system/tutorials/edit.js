import TutorialEdit from '../../../../pages/enso/system/tutorials/Edit.vue';

export const Edit = {
    name: 'system.tutorials.edit',
    path: ':id/edit',
    component: TutorialEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Tutorial',
    },
};
