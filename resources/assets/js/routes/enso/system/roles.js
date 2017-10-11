import { Index } from './roles/index';
import { Create } from './roles/create';
import { Edit } from './roles/edit';
import { Configure } from './roles/configure';

export const Roles = {
    path: 'roles',
    component: require('../../../pages/enso/layout/Router.vue'),
    meta: {
        breadcrumb: 'roles',
        route: 'system.roles.index',
    },
    children: [ Index, Edit, Create, Configure ]
};