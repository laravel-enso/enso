import Vue from 'vue';
import Router from 'vue-router';
import routeImporter from '@core-modules/importers/routeImporter';
import routeMerger from '@core-modules/importers/routeMerger';
import before from '@core-middleware/before';

Vue.use(Router);

const routes = routeImporter(require.context('@core-routes', false, /.*\.js$/));
const localRoutes = routeImporter(require.context('./routes', false, /.*\.js$/));

routeMerger(localRoutes, routes);

const router = new Router({
    mode: 'history',
    routes,
});

router.beforeEach(before);

export default router;
