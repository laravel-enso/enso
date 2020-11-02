import Vue from 'vue';

import '@core/modules';

import { sync } from 'vuex-router-sync';
import App from '@enso-ui/ui/bulma';
// eslint-disable-next-line import/no-extraneous-dependencies,import/extensions
import tasksInitializer from '@enso-ui/tasks/src/index.js';
import store from './store';
import router from './router';
import './app';

import '../sass/enso.scss';

sync(store, router);

Vue.config.productionTip = false;

const root = new Vue({
    router,
    store,
    ...App,
}).$mount('#app');

tasksInitializer(root);
