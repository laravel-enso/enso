const TutorialEdit = () => import('../../../pages/system/tutorials/Edit.vue');

export default {
    name: 'system.tutorials.edit',
    path: ':tutorial/edit',
    component: TutorialEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Tutorial',
    },
};
