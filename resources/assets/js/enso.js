import Vue from 'vue';
import './bootstrap';
import './app';

import { sync } from 'vuex-router-sync';
import router from './router';
import store from './store';
import App from './pages/enso/App.vue';

sync(store, router);

new Vue({
    el: '#app',
    router,
    store,
    ...App,
});
