import { Index } from './permissions/index';
import { Create } from './permissions/create';
import { Edit } from './permissions/edit';

export const Permissions = {
    path: 'permissions',
    component: require('../../../pages/enso/layout/Router.vue'),
    meta: {
        breadcrumb: 'permissions',
        route: 'system.permissions.index',
    },
    children: [ Index, Edit, Create ]
};