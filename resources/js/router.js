import Vue from 'vue';
import Router from 'vue-router';
import routeImporter from '@core-modules/importers/routeImporter';
import RouteMerger from '@core-modules/importers/RouteMerger';
import before from '@core-middleware/before';

Vue.use(Router);

const routes = routeImporter(require.context('@core-routes', false, /.*\.js$/));

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
