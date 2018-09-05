import Vue from 'vue';

const bus = new Vue({ name: 'Bus' });
Vue.prototype.$bus = bus;
