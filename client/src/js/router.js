import Vue from 'vue';
import Router from 'vue-router';
import before from '@core/middleware/before';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    routes: [],
    scrollBehavior(to, from, savedPosition) {
        return savedPosition || { x: 0, y: 0 };
    },
});

router.beforeEach(before);

export default router;
