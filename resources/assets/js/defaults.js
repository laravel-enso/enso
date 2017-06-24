moment.locale(Store.user.preferences.global.lang);

Chart.defaults.global.animationDuration = 600;
Chart.defaults.global.legend.display = true;
Chart.defaults.global.legend.labels.boxWidth = 15;
Chart.defaults.global.legend.fullWidth = false;

toastr.options = require('./vendor/laravel-enso/modules/toastr');

require('./vendor/laravel-enso/modules/dataTable');

window.bootstrapSelect = require('./vendor/laravel-enso/modules/bootstrapSelect');

$.fn.selectpicker.defaults = bootstrapSelect()[Store.user.preferences.global.lang] || bootstrapSelect()['en'];

NProgress.configure({
  template: '<div class="bar" role="bar"><div class="peg"></div></div>'
});

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

axios.interceptors.request.use((config) => {
    config.headers['X-CSRF-TOKEN'] = Laravel.csrfToken;
    NProgress.start();

    return config;
});

axios.interceptors.response.use((response) => {
    NProgress.done();

    return response;
}, (error) => {
    NProgress.done();

    return Promise.reject(error);
});