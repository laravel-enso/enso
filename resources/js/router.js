import Vue from 'vue';
import Router from 'vue-router';
import routeImporter from '@core-modules/importers/routeImporter';
import before from '@core-middleware/before';

Vue.use(Router);

const coreRoutes = routeImporter(require.context('@core-routes', false, /.*\.js$/));

const routes = []; // your local routes

const router = new Router({
    mode: 'history',
    routes: [...coreRoutes, ...routes],
});

router.beforeEach(before);

export default router;
