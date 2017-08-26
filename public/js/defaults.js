/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/assets/js/defaults.js":
/***/ (function(module, exports, __webpack_require__) {

moment.locale(Store.user.preferences.global.lang);

Chart.defaults.global.animationDuration = 600;
Chart.defaults.global.legend.display = true;
Chart.defaults.global.legend.labels.boxWidth = 15;
Chart.defaults.global.legend.fullWidth = false;

toastr.options = __webpack_require__("./resources/assets/js/vendor/laravel-enso/modules/toastr.js");

__webpack_require__("./resources/assets/js/vendor/laravel-enso/modules/dataTable.js");

window.bootstrapSelect = __webpack_require__("./resources/assets/js/vendor/laravel-enso/modules/bootstrapSelect.js");

$.fn.selectpicker.defaults = bootstrapSelect()[Store.user.preferences.global.lang] || bootstrapSelect()['en'];

NProgress.configure({
    template: '<div class="bar" role="bar"><div class="peg"></div></div>'
});

/**
 * We'll register a HTTP interceptor to attach the "CSRF" header to each of
 * the outgoing requests issued by this application. The CSRF middleware
 * included with Laravel will automatically verify the header's value.
 */

axios.interceptors.request.use(function (config) {
    config.headers['X-CSRF-TOKEN'] = Laravel.csrfToken;
    NProgress.start();

    return config;
});

axios.interceptors.response.use(function (response) {
    NProgress.done();

    return response;
}, function (error) {
    NProgress.done();

    return Promise.reject(error);
});

/***/ }),

/***/ "./resources/assets/js/vendor/laravel-enso/modules/bootstrapSelect.js":
/***/ (function(module, exports) {

module.exports = function () {
    return {
        'en': {
            noneSelectedText: 'Nothing selected',
            noneResultsText: 'No results match {0}',
            countSelectedText: function countSelectedText(numSelected, numTotal) {
                return numSelected === 1 ? "{0} item selected from {1} total items" : "{0} items selected from {1} total items";
            },
            maxOptionsText: function maxOptionsText(numAll, numGroup) {
                return [numAll === 1 ? 'Limit reached ({n} item max)' : 'Limit reached ({n} items max)', numGroup === 1 ? 'Group limit reached ({n} item max)' : 'Group limit reached ({n} items max)'];
            },
            selectAllText: 'Select All',
            deselectAllText: 'Deselect All',
            multipleSeparator: ', '
        },
        'ro': {
            noneSelectedText: 'Nu a fost selectat nimic',
            noneResultsText: 'Nu exista niciun rezultat {0}',
            countSelectedText: '{0} din {1} selectat(e)',
            maxOptionsText: ['Limita a fost atinsa ({n} {var} max)', 'Limita de grup a fost atinsa ({n} {var} max)', ['iteme', 'item']],
            multipleSeparator: ', ',
            selectAllText: 'Selecteaza tot',
            deselectAllText: 'Deselecteaza tot'
        }
    };
};

/***/ }),

/***/ "./resources/assets/js/vendor/laravel-enso/modules/dataTable.js":
/***/ (function(module, exports) {

$.extend(true, $.fn.dataTable.defaults, {
    dom: 'Brftip',
    stateSave: Store.user.preferences.global.dtStateSave,
    lengthMenu: [10, 15, 20, 25, 30],
    autoWidth: false,
    pagingType: "full_numbers",
    filter: true,
    stateDuration: 60 * 60 * 24 * 90,
    order: [],
    colReorder: true,
    responsive: true,
    serverSide: true
});

$.fn.dataTable.Api.register('sum()', function () {
    return this.flatten().reduce(function (a, b) {
        if (typeof a === 'string') {
            a = a.replace(/[^\d.-]/g, '') * 1;
        }

        if (typeof b === 'string') {
            b = b.replace(/[^\d.-]/g, '') * 1;
        }

        return a + b;
    }, 0);
});

/***/ }),

/***/ "./resources/assets/js/vendor/laravel-enso/modules/toastr.js":
/***/ (function(module, exports) {

module.exports = function () {
    return {
        "closeButton": true,
        "debug": false,
        "newestOnTop": false,
        "progressBar": false,
        "positionClass": "toast-top-right",
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": 300,
        "hideDuration": 1000,
        "timeOut": 5000,
        "extendedTimeOut": 1000,
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    };
};

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./resources/assets/js/defaults.js");


/***/ })

/******/ });