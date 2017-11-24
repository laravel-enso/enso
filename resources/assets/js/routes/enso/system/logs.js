import Index from './logs/index';
import Show from './logs/show';
import RouterView from '../../../pages/enso/layout/Router.vue';

export default {
    path: 'logs',
    component: RouterView,
    meta: {
        breadcrumb: 'logs',
        route: 'system.logs.index',
    },
    children: [Index, Show],
};
