window.Laravel = {
    "csrfToken": document.head.querySelector("[name=csrf-token]").content
};

const bus = new Vue();
Vue.prototype.$bus = bus;

window.initBootstrapSelect = require('./vendor/laravel-enso/modules/initBootstrapSelect');
require('animate.css');

import VTooltip from 'v-tooltip';
Vue.use(VTooltip);

Vue.filter('numberFormat', value => {
    value += '';

    let x = value.split('.'),
        x1 = x[0],
        x2 = x.length > 1 ? '.' + x[1] : '',
        rgx = /(\d+)(\d{3})/;

    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }

    return x1 + x2;
});

Vue.filter('timeFromNow', value => {
    return moment(value).fromNow();
});

Vue.directive('select-on-focus', {
    inserted: function(el) {
        el.addEventListener('focus', function(el) {
            this.select();
        });
    }
});

Vue.directive('focus', {
    inserted: function(el) {
        el.focus();
    }
});

Vue.mixin({
    methods: {
        reportEnsoException(error) {
            if (error.response && error.response.data.message) {
                toastr.error(error.response.data.message);
            }
            throw error;
        }
    }
});

Array.prototype.unique = function() {
    return this.filter((value, index, self) => {
        return self.indexOf(value) === index;
    });
};

Array.prototype.pluck = function(value) {
    return this.map(object => {
        return object[value];
    });
};

Array.prototype.insert = function(index, item) {
    this.splice(index, 0, item);
};

String.prototype.capitalizeFirst = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

Vue.component('notifications', require('./vendor/laravel-enso/components/vueadminlte/Notifications.vue'));
Vue.component('userMenu', require('./vendor/laravel-enso/components/vueadminlte/UserMenu.vue'));
Vue.component('sidebar', require('./vendor/laravel-enso/components/vueadminlte/sidebar/Sidebar.vue'));
Vue.component('sidebarSettings', require('./vendor/laravel-enso/components/vueadminlte/sidebar/Settings.vue'));
Vue.component('languageSelector', require('./vendor/laravel-enso/components/vueadminlte/sidebar/LanguageSelector.vue'));
Vue.component('tutorial', require('./vendor/laravel-enso/components/vueadminlte/sidebar/Tutorial.vue'));
Vue.component('settingSwitch', require('./vendor/laravel-enso/components/vueadminlte/sidebar/Switch.vue'));
Vue.component('themeSelector', require('./vendor/laravel-enso/components/vueadminlte/sidebar/ThemeSelector.vue'));
Vue.component('box', require('./vendor/laravel-enso/components/vueadminlte/Box.vue'));
Vue.component('smallBox', require('./vendor/laravel-enso/components/vueadminlte/SmallBox.vue'));
Vue.component('infoBox', require('./vendor/laravel-enso/components/vueadminlte/InfoBox.vue'));
Vue.component('boxWidget', require('./vendor/laravel-enso/components/vueadminlte/BoxWidget.vue'));
Vue.component('userWidget', require('./vendor/laravel-enso/components/vueadminlte/UserWidget.vue'));
Vue.component('page', require('./vendor/laravel-enso/components/vueadminlte/Page.vue'));
Vue.component('breadcrumbs', require('./vendor/laravel-enso/components/vueadminlte/Breadcrumbs.vue'));
Vue.component('tabs', require('./vendor/laravel-enso/components/vueadminlte/Tabs.vue'));

Vue.component('modal', require('./vendor/laravel-enso/components/enso/Modal.vue'));
Vue.component('vueFilter', require('./vendor/laravel-enso/components/enso/VueFilter.vue'));
Vue.component('dashboard', require('./vendor/laravel-enso/components/enso/Dashboard.vue'));
Vue.component('typeahead', require('./vendor/laravel-enso/components/enso/Typeahead.vue'));
Vue.component('datepicker', require('./vendor/laravel-enso/components/enso/Datepicker.vue'));
Vue.component('paginate', require('./vendor/laravel-enso/components/enso/Paginate.vue'));

Vue.component('chart', require('./vendor/laravel-enso/components/charts/Chart.vue'));

Vue.component('dataTable', require('./vendor/laravel-enso/components/datatable/DataTable.vue'));

Vue.component('vueSelect', require('./vendor/laravel-enso/components/select/VueSelect.vue'));
Vue.component('vueSelectLegacy', require('./vendor/laravel-enso/components/select/VueSelectLegacy.vue'));

Vue.component('roleConfigurator', require('./vendor/laravel-enso/components/rolemanager/RoleConfigurator.vue'));
Vue.component('checkboxManager', require('./vendor/laravel-enso/components/rolemanager/CheckboxManager.vue'));

Vue.component('reorderableMenu', require('./vendor/laravel-enso/components/menumanager/ReorderableMenu.vue'));

Vue.component('fileUploader', require('./vendor/laravel-enso/components/filemanager/FileUploader.vue'));

Vue.component('vueForm', require('./vendor/laravel-enso/components/vueforms/VueForm.vue'));

Vue.component('draggable', require('vuedraggable'));

Vue.component('contactForm', require('./vendor/laravel-enso/components/contacts/ContactForm.vue'));
Vue.component('contact', require('./vendor/laravel-enso/components/contacts/Contact.vue'));
Vue.component('contacts', require('./vendor/laravel-enso/components/contacts/Contacts.vue'));