import Vue from 'vue';

import './modules/enso/';

import router from './router';
import store from './store';
import App from './core/App.vue';

import './app';

new Vue({
    router,
    store,
    ...App,
}).$mount('#app');
