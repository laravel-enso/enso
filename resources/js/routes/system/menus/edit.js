const MenuEdit = () => import('../../../pages/system/menus/Edit.vue');

export default {
    name: 'system.menus.edit',
    path: ':id/edit',
    component: MenuEdit,
    meta: {
        breadcrumb: 'edit',
        title: 'Edit Menu',
    },
};
