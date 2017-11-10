import { Index } from './tutorials/index';
import { Create } from './tutorials/create';
import { Edit } from './tutorials/edit';
import RouterView from '../../../pages/enso/layout/Router.vue';

export const Tutorials = {
    path: 'tutorials',
    component: RouterView,
    meta: {
        breadcrumb: 'tutorials',
        route: 'system.tutorials.index',
    },
    children: [Index, Create, Edit],
};
