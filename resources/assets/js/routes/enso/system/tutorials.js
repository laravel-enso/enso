import { Index } from './tutorials/index';
import { Create } from './tutorials/create';
import { Edit } from './tutorials/edit';

export const Tutorials = {
    path: 'tutorials',
    component: require('../../../pages/enso/layout/Router.vue'),
    meta: {
        breadcrumb: 'tutorials',
        route: 'system.tutorials.index',
    },
    children: [ Index, Create, Edit ]
};