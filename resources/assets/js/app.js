
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

require('./enso');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

// Vue.component('example', require('./components/Example.vue'));

// const app = new Vue({
//     el: '#app'
// });

Vue.component('comments', require('./vendor/laravel-enso/components/comments/Comments.vue'));
Vue.component('comment', require('./vendor/laravel-enso/components/comments/Comment.vue'));
Vue.component('inputor', require('./vendor/laravel-enso/components/comments/Inputor.vue'));
Vue.component('documents', require('./vendor/laravel-enso/components/documents/Documents.vue'));
Vue.component('document', require('./vendor/laravel-enso/components/documents/Document.vue'));
Vue.component('contacts', require('./vendor/laravel-enso/components/contacts/Contacts.vue'));
Vue.component('contactForm', require('./vendor/laravel-enso/components/contacts/ContactForm.vue'));
Vue.component('contact', require('./vendor/laravel-enso/components/contacts/Contact.vue'));

// if you are using sentry, uncomment this block and fill in your public DSN below
// as well as in sentry.blade.php

/*
import Raven from 'raven-js';
import RavenVue from 'raven-js/plugins/vue';

Raven
    .config('your-sentry-dsn-here')
    .addPlugin(RavenVue, Vue)
    .install();
*/
