import Vue from 'vue';

import '@core/modules';

import App from '@enso-ui/ui/bulma';
import { sync } from 'vuex-router-sync';
import store from './store';
import router from './router';

import './app';

import '../sass/enso.scss';

sync(store, router);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    ...App,
}).$mount('#app');
