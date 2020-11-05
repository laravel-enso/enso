import Vue from 'vue';

import '@core/modules';

import { sync } from 'vuex-router-sync';
import Root from '@enso-ui/ui/src/bulma/Root.vue';
import App from '@enso-ui/ui/src/core/app';
import store from './store';
import router from './router';

import './app';

import '../sass/enso.scss';

sync(store, router);

Vue.config.productionTip = false;

const vm = new Vue({
    router,
    store,
    ...Root,
}).$mount('#app');

App.boot(vm, 'bulma');
