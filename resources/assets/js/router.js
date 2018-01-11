import Vue from 'vue';
import Router from 'vue-router';
import store from './store';
import routeImporter from './modules/importers/routeImporter';

Vue.use(Router);

const routes = routeImporter(require.context('./routes', false, /.*\.js$/));

const router = new Router({
    mode: 'history',
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.title !== from.meta.title) {
        document.title = to.meta.title;
    }

    if (!to.meta.guestGuard && !store.getters['auth/isAuth']) {
        next({ name: 'login' });
    }

    next();
});

export default router;
