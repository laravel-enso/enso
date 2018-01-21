import Vue from 'vue';
import axios from 'axios';
import lodash from 'lodash';
import moment from 'moment';
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';

import './modules/enso/';

import router from './router';
import store from './store';
import App from './pages/App.vue';

import './app';

require('./fontawesome/js/fontawesome-all');

const bus = new Vue({ name: 'Bus' });

Vue.prototype.$bus = bus;

window._ = lodash;
window.moment = moment;
window.toastr = toastr;
window.axios = axios;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

new Vue({
    router,
    store,
    ...App,
}).$mount('#app');
