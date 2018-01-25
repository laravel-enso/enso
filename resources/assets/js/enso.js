import Vue from 'vue';
import axios from 'axios';
import moment from 'moment';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/vue-fontawesome';
import { faListAlt } from '@fortawesome/fontawesome-free-solid/shakable.es';
import { faGithub } from '@fortawesome/fontawesome-free-brands/shakable.es';

import './modules/enso/';

import router from './router';
import store from './store';
import App from './pages/App.vue';
import Toastr from './components/enso/bulma/toastr';

import './app';

fontawesome.library.add(faListAlt, faGithub);

Vue.component('fa', FontAwesomeIcon);
Vue.use(Toastr, {
    i18n: store.getters['locale/__'],
    position: 'right',
    duration: 3000,
    closeButton: true,
});

const bus = new Vue({ name: 'Bus' });
Vue.prototype.$bus = bus;

window.moment = moment;
window.axios = axios;
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

new Vue({
    router,
    store,
    ...App,
}).$mount('#app');
