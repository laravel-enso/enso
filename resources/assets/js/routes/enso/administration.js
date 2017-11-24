import { Owners } from './administration/owners';
import { Users } from './administration/users';
import Contacts from './administration/contacts';
import RouterView from '../../pages/enso/layout/Router.vue';

export const Administration = {
    path: '/administration',
    component: RouterView,
    meta: {
        breadcrumb: 'administration',
    },
    children: [Owners, Users, Contacts],
};
