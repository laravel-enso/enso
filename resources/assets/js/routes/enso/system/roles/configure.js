import RoleConfigure from '../../../../pages/enso/system/roles/Configure.vue';

export const Configure = {
    name: 'system.roles.configure',
    path: ':role/configure',
    component: RoleConfigure,
    meta: {
        breadcrumb: 'configure',
        title: 'Configure Role',
    },
};
