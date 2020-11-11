import Vue from 'vue';
import { sync } from 'vuex-router-sync';
import Root from '@enso-ui/ui/src/bulma/Root.vue';
import App from '@enso-ui/ui/src/core/app';
import router from '@enso-ui/ui/src/core/services/router';
import store from '@enso-ui/ui/src/core/services/store';
import '@enso-ui/ui/src/modules';
import './app';
import '../sass/enso.scss';
import './localState';

Vue.config.productionTip = false;

sync(store, router);

const vm = new Vue({
    router,
    store,
    ...Root,
}).$mount('#app');

App.boot(vm);
