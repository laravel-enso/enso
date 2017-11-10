import { Index } from './menus/index';
import { Create } from './menus/create';
import { Edit } from './menus/edit';
import RouterView from '../../../pages/enso/layout/Router.vue';

export const Menus = {
    path: 'menus',
    component: RouterView,
    meta: {
        breadcrumb: 'menus',
        route: 'system.menus.index',
    },
    children: [Index, Edit, Create],
};
