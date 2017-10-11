import { Index } from './users/index';
import { Create } from './users/create';
import { Edit } from './users/edit';
import { Show } from './users/show';

export const Users = {
    path: 'users',
    component: require('../../../pages/enso/layout/Router.vue'),
    meta: {
        breadcrumb: 'users',
        route: 'administration.users.index',
    },
    children: [ Index , Create, Edit, Show ]
}