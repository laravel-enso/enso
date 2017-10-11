import { Index } from './owners/index';
import { Create } from './owners/create';
import { Edit } from './owners/edit';

export const Owners = {
    path: 'owners/',
    component: require('../../../pages/enso/layout/Router.vue'),
    meta: {
        breadcrumb: 'owners',
        route: 'administration.owners.index',
    },
    children: [ Index , Create, Edit ]
};