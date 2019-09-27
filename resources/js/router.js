import Vue from 'vue';
import Router from 'vue-router';
import routeImporter from '@core/modules/importers/routeImporter';
import RouteMerger from '@core/modules/importers/RouteMerger';
import before from '@core/middleware/before';
import routes from '@core/bulma/routes';

Vue.use(Router);

(new RouteMerger(routes))
    .add(routeImporter(require.context('./routes', false, /.*\.js$/)));

const router = new Router({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 };
    },
});

router.beforeEach(before);

export default router;
