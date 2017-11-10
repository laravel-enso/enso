import { Index } from './permissions/index';
import { Create } from './permissions/create';
import { Edit } from './permissions/edit';
import RouterView from '../../../pages/enso/layout/Router.vue';

export const Permissions = {
    path: 'permissions',
    component: RouterView,
    meta: {
        breadcrumb: 'permissions',
        route: 'system.permissions.index',
    },
    children: [Index, Edit, Create],
};
