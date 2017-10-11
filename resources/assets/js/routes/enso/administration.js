import { Owners } from './administration/owners';
import { Users } from './administration/users';
import { Contacts } from './administration/contacts';

export const Administration = {
    path: '/administration',
    component: require('../../pages/enso/layout/Router.vue'),
    meta: {
        breadcrumb: 'administration',
    },
    children: [ Owners, Users, Contacts ]
};