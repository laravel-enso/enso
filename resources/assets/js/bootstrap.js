import Vue from 'vue'
import VTooltip from 'vue-directive-tooltip'
import vClickOutside from 'v-click-outside'
import axios from 'axios'
import moment from 'moment'
import _ from 'lodash'

window.$ = window.jQuery = require('jquery')
require('datatables.net')
require('datatables.net-select')
require('datatables.net-colreorder')
require('datatables.net-responsive')
require('datatables.net-buttons')
require('datatables.net-buttons/js/buttons.colVis.js')
require('datatables.net-buttons/js/buttons.html5.js')

window.Vue = Vue

const bus = new Vue({ name: 'Bus' })
Vue.prototype.$bus = bus

Vue.use(VTooltip)
Vue.use(vClickOutside)

require('at.js')
require('jquery.caret')
require('at.js/dist/css/jquery.atwho.min.css')

window._ = _
window.moment = moment
window.toastr = require('toastr')
require('toastr/build/toastr.min.css') // import 'toastr/build/toastr.min.css'

window.axios = axios
axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

require('./modules/enso/plugins/route')
require('./modules/enso/mixins')
require('./modules/enso/filters')
require('./modules/enso/directives')
require('./modules/enso/prototypes')
