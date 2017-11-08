import { Index } from './owners/index';
import { Create } from './owners/create';
import { Edit } from './owners/edit';
import RouterView from '../../../pages/enso/layout/Router.vue';

export const Owners = {
    path: 'owners/',
    component: RouterView,
    meta: {
        breadcrumb: 'owners',
        route: 'administration.owners.index',
    },
    children: [Index, Create, Edit],
};
