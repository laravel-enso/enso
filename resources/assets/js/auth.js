window.$ = window.jQuery = require('jquery');

let particles = require('./vendor/laravel-enso/modules/particles');
window.toastrDefaults = require('./vendor/laravel-enso/modules/toastr');

$(() => {

	particlesJS('particles-js', particles);
});