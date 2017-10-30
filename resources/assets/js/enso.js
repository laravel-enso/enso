import './bootstrap'
import './app'
import Vue from 'vue'
import router from './router'
import store from './store'
import App from './pages/enso/App.vue'
import { sync } from 'vuex-router-sync'

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  ...App
})
