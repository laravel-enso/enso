import Vue from 'vue';
import VTooltip from 'vue-directive-tooltip';
import vClickOutside from 'v-click-outside';

window.Vue = Vue;
const bus = new Vue({ name: 'Bus' });
Vue.prototype.$bus = bus;
Vue.use(VTooltip);
Vue.use(vClickOutside);

window.jQuery = require('jquery');

window.$ = window.jQuery;

require('datatables.net');
require('datatables.net-select');
require('datatables.net-colreorder');
require('datatables.net-responsive');
require('datatables.net-buttons');
require('datatables.net-buttons/js/buttons.colVis.js');
require('datatables.net-buttons/js/buttons.html5.js');

require('at.js');
require('jquery.caret');
require('at.js/dist/css/jquery.atwho.min.css');

window._ = require('lodash');
window.moment = require('moment');
window.toastr = require('toastr');
require('toastr/build/toastr.min.css');

window.axios = require('axios');

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

require('./modules/enso/plugins/route');
require('./modules/enso/mixins');
require('./modules/enso/filters');
require('./modules/enso/directives');
require('./modules/enso/prototypes');
