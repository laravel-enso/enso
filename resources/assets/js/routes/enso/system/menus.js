import { Index } from './menus/index';
import { Create } from './menus/create';
import { Edit } from './menus/edit';

export const Menus = {
    path: 'menus',
    component: require('../../../pages/enso/layout/Router.vue'),
    meta: {
        breadcrumb: 'menus',
        route: 'system.menus.index',
    },
    children: [ Index, Edit, Create ]
};