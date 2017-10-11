import { Index } from './localisation/index';
import { Create } from './localisation/create';
import { Edit } from './localisation/edit';
import { EditTexts } from './localisation/editTexts';

export const Localisation = {
    path: 'localisation',
    component: require('../../../pages/enso/layout/Router.vue'),
    meta: {
        breadcrumb: 'localisation',
        route: 'system.localisation.index',
    },
    children: [ Index, Create, Edit, EditTexts ]
};