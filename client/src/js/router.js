import Vue from 'vue';
import Router from 'vue-router';
import routeImporter from '@core/modules/importers/routeImporter';
import before from '@core/middleware/before';
import App from '@enso-ui/ui/src/core/app';

Vue.use(Router);

const { routes } = App.getRoutes('bulma')
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
