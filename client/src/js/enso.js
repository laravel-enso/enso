import Vue from 'vue';

import '@core/modules';

import App from '@enso-ui/ui/bulma';
import router from './router';
import store from './store';

import './app';

import('../sass/enso.scss');

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    ...App,
}).$mount('#app');
