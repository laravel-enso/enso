import { Index } from './localisation/index';
import { Create } from './localisation/create';
import { Edit } from './localisation/edit';
import { EditTexts } from './localisation/editTexts';
import RouterView from '../../../pages/enso/layout/Router.vue';

export const Localisation = {
    path: 'localisation',
    component: RouterView,
    meta: {
        breadcrumb: 'localisation',
        route: 'system.localisation.index',
    },
    children: [Index, Create, Edit, EditTexts],
};
