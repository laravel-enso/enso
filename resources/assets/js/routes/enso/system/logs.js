import { Index } from './logs/index';
import { Show } from './logs/show';

export const Logs = {
    path: 'logs',
    component: require('../../../pages/enso/layout/Router.vue'),
    meta: {
        breadcrumb: 'logs',
        route: 'system.logs.index',
    },
    children: [ Index, Show ]
};