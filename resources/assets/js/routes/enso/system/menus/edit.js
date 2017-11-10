import MenuEdit from '../../../../pages/enso/system/menus/Edit.vue';

export const Edit = {
    name: 'system.menus.edit',
    path: ':id/edit',
    component: MenuEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Menu',
    },
};
