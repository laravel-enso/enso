import Vue from 'vue';

import '@core/modules';

import { sync } from 'vuex-router-sync';
import AppComponent from '@enso-ui/ui/bulma';
import App from '@enso-ui/ui/src/bulma/app';
import store from './store';
import router from './router';
import '@enso-ui/ui/src/bulma/boot';
import './app';

import '../sass/enso.scss';

sync(store, router);

Vue.config.productionTip = false;

const vm = new Vue({
    router,
    store,
    ...AppComponent,
}).$mount('#app');

App.init(vm);
