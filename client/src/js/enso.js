import Vue from 'vue';

import '@core/modules';

import { sync } from 'vuex-router-sync';
import Root from '@enso-ui/ui/src/bulma/Root.vue';
import App from '@enso-ui/ui/src/core/bulma';
import router from './router';
import store from './store';

import './app';

import '../sass/enso.scss';

const routes = App.buildRoutes(require.context('./routes', false, /.*\.js$/));

router.addRoutes(routes);

sync(store, router);

Vue.config.productionTip = false;

const vm = new Vue({
    router,
    store,
    ...Root,
}).$mount('#app');

App.boot(vm);
