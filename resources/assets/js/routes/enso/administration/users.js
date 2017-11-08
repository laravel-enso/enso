import { Index } from './users/index';
import { Create } from './users/create';
import { Edit } from './users/edit';
import { Show } from './users/show';
import RouterView from '../../../pages/enso/layout/Router.vue';

export const Users = {
    path: 'users',
    component: RouterView,
    meta: {
        breadcrumb: 'users',
        route: 'administration.users.index',
    },
    children: [Index, Create, Edit, Show],
};
