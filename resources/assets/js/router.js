import Vue from 'vue';
import Router from 'vue-router';
import routeImporter from './modules/importers/routeImporter';
import before from './middleware/before';
import after from './middleware/after';

Vue.use(Router);

const routes = routeImporter(require.context('./routes', false, /.*\.js$/));

const router = new Router({
    mode: 'history',
    routes,
});

router.beforeEach(before);
router.afterEach(after);

export default router;
