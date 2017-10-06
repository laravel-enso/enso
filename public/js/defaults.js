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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWY3Mzg5MGRkYTFlYmFlMzIwNTMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9kZWZhdWx0cy5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3ZlbmRvci9sYXJhdmVsLWVuc28vbW9kdWxlcy9ib290c3RyYXBTZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92ZW5kb3IvbGFyYXZlbC1lbnNvL21vZHVsZXMvZGF0YVRhYmxlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvdmVuZG9yL2xhcmF2ZWwtZW5zby9tb2R1bGVzL3RvYXN0ci5qcyJdLCJuYW1lcyI6WyJtb21lbnQiLCJsb2NhbGUiLCJTdG9yZSIsInVzZXIiLCJwcmVmZXJlbmNlcyIsImdsb2JhbCIsImxhbmciLCJDaGFydCIsImRlZmF1bHRzIiwiYW5pbWF0aW9uRHVyYXRpb24iLCJsZWdlbmQiLCJkaXNwbGF5IiwibGFiZWxzIiwiYm94V2lkdGgiLCJmdWxsV2lkdGgiLCJ0b2FzdHIiLCJvcHRpb25zIiwicmVxdWlyZSIsIndpbmRvdyIsImJvb3RzdHJhcFNlbGVjdCIsIiQiLCJmbiIsInNlbGVjdHBpY2tlciIsIk5Qcm9ncmVzcyIsImNvbmZpZ3VyZSIsInRlbXBsYXRlIiwiYXhpb3MiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiaGVhZGVycyIsIkxhcmF2ZWwiLCJjc3JmVG9rZW4iLCJzdGFydCIsInJlc3BvbnNlIiwiZG9uZSIsImVycm9yIiwiUHJvbWlzZSIsInJlamVjdCIsIm1vZHVsZSIsImV4cG9ydHMiLCJub25lU2VsZWN0ZWRUZXh0Iiwibm9uZVJlc3VsdHNUZXh0IiwiY291bnRTZWxlY3RlZFRleHQiLCJudW1TZWxlY3RlZCIsIm51bVRvdGFsIiwibWF4T3B0aW9uc1RleHQiLCJudW1BbGwiLCJudW1Hcm91cCIsInNlbGVjdEFsbFRleHQiLCJkZXNlbGVjdEFsbFRleHQiLCJtdWx0aXBsZVNlcGFyYXRvciIsImV4dGVuZCIsImRhdGFUYWJsZSIsImRvbSIsInN0YXRlU2F2ZSIsImR0U3RhdGVTYXZlIiwibGVuZ3RoTWVudSIsImF1dG9XaWR0aCIsInBhZ2luZ1R5cGUiLCJmaWx0ZXIiLCJzdGF0ZUR1cmF0aW9uIiwib3JkZXIiLCJjb2xSZW9yZGVyIiwicmVzcG9uc2l2ZSIsInNlcnZlclNpZGUiLCJBcGkiLCJyZWdpc3RlciIsImZsYXR0ZW4iLCJyZWR1Y2UiLCJhIiwiYiIsInJlcGxhY2UiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REFBLE9BQU9DLE1BQVAsQ0FBY0MsTUFBTUMsSUFBTixDQUFXQyxXQUFYLENBQXVCQyxNQUF2QixDQUE4QkMsSUFBNUM7O0FBRUFDLE1BQU1DLFFBQU4sQ0FBZUgsTUFBZixDQUFzQkksaUJBQXRCLEdBQTBDLEdBQTFDO0FBQ0FGLE1BQU1DLFFBQU4sQ0FBZUgsTUFBZixDQUFzQkssTUFBdEIsQ0FBNkJDLE9BQTdCLEdBQXVDLElBQXZDO0FBQ0FKLE1BQU1DLFFBQU4sQ0FBZUgsTUFBZixDQUFzQkssTUFBdEIsQ0FBNkJFLE1BQTdCLENBQW9DQyxRQUFwQyxHQUErQyxFQUEvQztBQUNBTixNQUFNQyxRQUFOLENBQWVI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YSxHQUFmLENBQW1CQyxRQUFuQixDQUE0QixPQUE1QixFQUFxQyxZQUFXO0FBQzVDLFdBQU8sS0FBS0MsT0FBTCxHQUFlQyxNQUFmLENBQXNCLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ3hDLFlBQUksT0FBT0QsQ0FBUCxLQUFhLFFBQWpCLEVBQTJCO0FBQ3ZCQSxnQkFBSUEsRUFBRUUsT0FBRixDQUFVLFVBQVYsRUFBc0IsRUFBdEIsSUFBNEIsQ0FBaEM7QUFDSDs7QUFFRCxZQUFJLE9BQU9ELENBQVAsS0FBYSxRQUFqQixFQUEyQjtBQUN2QkEsZ0JBQUlBLEVBQUVDLE9BQUYsQ0FBVSxVQUFWLEVBQXNCLEVBQXRCLElBQTRCLENBQWhDO0FBQ0g7O0FBRUQsZUFBT0YsSUFBSUMsQ0FBWDtBQUNILEtBVk0sRUFVSixDQVZJLENBQVA7QUFXSCxDQVpELEU7Ozs7Ozs7QUNkQWhDLE9BQU9DLE9BQVAsR0FBaUIsWUFBVztBQUN4QixXQUFPO0FBQ0gsdUJBQWUsSUFEWjtBQUVILGlCQUFTLEtBRk47QUFHSCx1QkFBZSxLQUhaO0FBSUgsdUJBQWUsS0FKWjtBQUtILHlCQUFpQixpQkFMZDtBQU1ILDZCQUFxQixLQU5sQjtBQU9ILG1CQUFXLElBUFI7QUFRSCx3QkFBZ0IsR0FSYjtBQVNILHdCQUFnQixJQVRiO0FBVUgsbUJBQVcsSUFWUjtBQVdILDJCQUFtQixJQVhoQjtBQVlILHNCQUFjLE9BWlg7QUFhSCxzQkFBYyxRQWJYO0FBY0gsc0JBQWMsUUFkWDtBQWVILHNCQUFjO0FBZlgsS0FBUDtBQWlCSCxDQWxCRCxDIiwiZmlsZSI6Ii9qcy9kZWZhdWx0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDlmNzM4OTBkZGExZWJhZTMyMDUzIiwibW9tZW50LmxvY2FsZShTdG9yZS51c2VyLnByZWZlcmVuY2VzLmdsb2JhbC5sYW5nKTtcblxuQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmFuaW1hdGlvbkR1cmF0aW9uID0gNjAwO1xuQ2hhcnQuZGVmYXVsdHMuZ2xvYmFsLmxlZ2VuZC5kaXNwbGF5ID0gdHJ1ZTtcbkNoYXJ0LmRlZmF1bHRzLmdsb2JhbC5sZWdlbmQubGFiZWxzLmJveFdpZHRoID0gMTU7XG5DaGFydC5kZWZhdWx0cy5nbG9iYWwubGVnZW5kLmZ1bGxXaWR0aCA9IGZhbHNlO1xuXG50b2FzdHIub3B0aW9ucyA9IHJlcXVpcmUoJy4vdmVuZG9yL2xhcmF2ZWwtZW5zby9tb2R1bGVzL3RvYXN0cicpO1xuXG5yZXF1aXJlKCcuL3ZlbmRvci9sYXJhdmVsLWVuc28vbW9kdWxlcy9kYXRhVGFibGUnKTtcblxud2luZG93LmJvb3RzdHJhcFNlbGVjdCA9IHJlcXVpcmUoJy4vdmVuZG9yL2xhcmF2ZWwtZW5zby9tb2R1bGVzL2Jvb3RzdHJhcFNlbGVjdCcpO1xuXG4kLmZuLnNlbGVjdHBpY2tlci5kZWZhdWx0cyA9IGJvb3RzdHJhcFNlbGVjdCgpW1N0b3JlLnVzZXIucHJlZmVyZW5jZXMuZ2xvYmFsLmxhbmddIHx8IGJvb3RzdHJhcFNlbGVjdCgpWydlbiddO1xuXG5OUHJvZ3Jlc3MuY29uZmlndXJlKHtcbiAgdGVtcGxhdGU6ICc8ZGl2IGNsYXNzPVwiYmFyXCIgcm9sZT1cImJhclwiPjxkaXYgY2xhc3M9XCJwZWdcIj48L2Rpdj48L2Rpdj4nXG59KTtcblxuLyoqXG4gKiBXZSdsbCByZWdpc3RlciBhIEhUVFAgaW50ZXJjZXB0b3IgdG8gYXR0YWNoIHRoZSBcIkNTUkZcIiBoZWFkZXIgdG8gZWFjaCBvZlxuICogdGhlIG91dGdvaW5nIHJlcXVlc3RzIGlzc3VlZCBieSB0aGlzIGFwcGxpY2F0aW9uLiBUaGUgQ1NSRiBtaWRkbGV3YXJlXG4gKiBpbmNsdWRlZCB3aXRoIExhcmF2ZWwgd2lsbCBhdXRvbWF0aWNhbGx5IHZlcmlmeSB0aGUgaGVhZGVyJ3MgdmFsdWUuXG4gKi9cblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlcXVlc3QudXNlKChjb25maWcpID0+IHtcbiAgICBjb25maWcuaGVhZGVyc1snWC1DU1JGLVRPS0VOJ10gPSBMYXJhdmVsLmNzcmZUb2tlbjtcbiAgICBOUHJvZ3Jlc3Muc3RhcnQoKTtcblxuICAgIHJldHVybiBjb25maWc7XG59KTtcblxuYXhpb3MuaW50ZXJjZXB0b3JzLnJlc3BvbnNlLnVzZSgocmVzcG9uc2UpID0+IHtcbiAgICBOUHJvZ3Jlc3MuZG9uZSgpO1xuXG4gICAgcmV0dXJuIHJlc3BvbnNlO1xufSwgKGVycm9yKSA9PiB7XG4gICAgTlByb2dyZXNzLmRvbmUoKTtcblxuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnJvcik7XG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2RlZmF1bHRzLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAnZW4nOiB7XG4gICAgICAgICAgICBub25lU2VsZWN0ZWRUZXh0OiAnTm90aGluZyBzZWxlY3RlZCcsXG4gICAgICAgICAgICBub25lUmVzdWx0c1RleHQ6ICdObyByZXN1bHRzIG1hdGNoIHswfScsXG4gICAgICAgICAgICBjb3VudFNlbGVjdGVkVGV4dDogZnVuY3Rpb24obnVtU2VsZWN0ZWQsIG51bVRvdGFsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChudW1TZWxlY3RlZCA9PT0gMSkgPyBcInswfSBpdGVtIHNlbGVjdGVkIGZyb20gezF9IHRvdGFsIGl0ZW1zXCIgOiBcInswfSBpdGVtcyBzZWxlY3RlZCBmcm9tIHsxfSB0b3RhbCBpdGVtc1wiO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1heE9wdGlvbnNUZXh0OiBmdW5jdGlvbihudW1BbGwsIG51bUdyb3VwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgKG51bUFsbCA9PT0gMSkgPyAnTGltaXQgcmVhY2hlZCAoe259IGl0ZW0gbWF4KScgOiAnTGltaXQgcmVhY2hlZCAoe259IGl0ZW1zIG1heCknLCAobnVtR3JvdXAgPT09IDEpID8gJ0dyb3VwIGxpbWl0IHJlYWNoZWQgKHtufSBpdGVtIG1heCknIDogJ0dyb3VwIGxpbWl0IHJlYWNoZWQgKHtufSBpdGVtcyBtYXgpJ1xuICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VsZWN0QWxsVGV4dDogJ1NlbGVjdCBBbGwnLFxuICAgICAgICAgICAgZGVzZWxlY3RBbGxUZXh0OiAnRGVzZWxlY3QgQWxsJyxcbiAgICAgICAgICAgIG11bHRpcGxlU2VwYXJhdG9yOiAnLCAnXG4gICAgICAgIH0sXG4gICAgICAgICdybyc6IHtcbiAgICAgICAgICAgIG5vbmVTZWxlY3RlZFRleHQ6ICdOdSBhIGZvc3Qgc2VsZWN0YXQgbmltaWMnLFxuICAgICAgICAgICAgbm9uZVJlc3VsdHNUZXh0OiAnTnUgZXhpc3RhIG5pY2l1biByZXp1bHRhdCB7MH0nLFxuICAgICAgICAgICAgY291bnRTZWxlY3RlZFRleHQ6ICd7MH0gZGluIHsxfSBzZWxlY3RhdChlKScsXG4gICAgICAgICAgICBtYXhPcHRpb25zVGV4dDogWydMaW1pdGEgYSBmb3N0IGF0aW5zYSAoe259IHt2YXJ9IG1heCknLCAnTGltaXRhIGRlIGdydXAgYSBmb3N0IGF0aW5zYSAoe259IHt2YXJ9IG1heCknLCBbJ2l0ZW1lJywgJ2l0ZW0nXV0sXG4gICAgICAgICAgICBtdWx0aXBsZVNlcGFyYXRvcjogJywgJyxcbiAgICAgICAgICAgIHNlbGVjdEFsbFRleHQ6ICdTZWxlY3RlYXphIHRvdCcsXG4gICAgICAgICAgICBkZXNlbGVjdEFsbFRleHQ6ICdEZXNlbGVjdGVhemEgdG90J1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92ZW5kb3IvbGFyYXZlbC1lbnNvL21vZHVsZXMvYm9vdHN0cmFwU2VsZWN0LmpzIiwiJC5leHRlbmQodHJ1ZSwgJC5mbi5kYXRhVGFibGUuZGVmYXVsdHMsIHtcbiAgICBkb206ICdCcmZ0aXAnLFxuICAgIHN0YXRlU2F2ZTogU3RvcmUudXNlci5wcmVmZXJlbmNlcy5nbG9iYWwuZHRTdGF0ZVNhdmUsXG4gICAgbGVuZ3RoTWVudTogWzEwLCAxNSwgMjAsIDI1LCAzMF0sXG4gICAgYXV0b1dpZHRoOiBmYWxzZSxcbiAgICBwYWdpbmdUeXBlOiBcImZ1bGxfbnVtYmVyc1wiLFxuICAgIGZpbHRlcjogdHJ1ZSxcbiAgICBzdGF0ZUR1cmF0aW9uOiA2MCAqIDYwICogMjQgKiA5MCxcbiAgICBvcmRlcjogW10sXG4gICAgY29sUmVvcmRlcjogdHJ1ZSxcbiAgICByZXNwb25zaXZlOiB0cnVlLFxuICAgIHNlcnZlclNpZGU6IHRydWUsXG59KTtcblxuJC5mbi5kYXRhVGFibGUuQXBpLnJlZ2lzdGVyKCdzdW0oKScsIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmZsYXR0ZW4oKS5yZWR1Y2UoZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBpZiAodHlwZW9mIGEgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBhID0gYS5yZXBsYWNlKC9bXlxcZC4tXS9nLCAnJykgKiAxO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHR5cGVvZiBiID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgYiA9IGIucmVwbGFjZSgvW15cXGQuLV0vZywgJycpICogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhICsgYjtcbiAgICB9LCAwKTtcbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvdmVuZG9yL2xhcmF2ZWwtZW5zby9tb2R1bGVzL2RhdGFUYWJsZS5qcyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgXCJjbG9zZUJ1dHRvblwiOiB0cnVlLFxuICAgICAgICBcImRlYnVnXCI6IGZhbHNlLFxuICAgICAgICBcIm5ld2VzdE9uVG9wXCI6IGZhbHNlLFxuICAgICAgICBcInByb2dyZXNzQmFyXCI6IGZhbHNlLFxuICAgICAgICBcInBvc2l0aW9uQ2xhc3NcIjogXCJ0b2FzdC10b3AtcmlnaHRcIixcbiAgICAgICAgXCJwcmV2ZW50RHVwbGljYXRlc1wiOiBmYWxzZSxcbiAgICAgICAgXCJvbmNsaWNrXCI6IG51bGwsXG4gICAgICAgIFwic2hvd0R1cmF0aW9uXCI6IDMwMCxcbiAgICAgICAgXCJoaWRlRHVyYXRpb25cIjogMTAwMCxcbiAgICAgICAgXCJ0aW1lT3V0XCI6IDUwMDAsXG4gICAgICAgIFwiZXh0ZW5kZWRUaW1lT3V0XCI6IDEwMDAsXG4gICAgICAgIFwic2hvd0Vhc2luZ1wiOiBcInN3aW5nXCIsXG4gICAgICAgIFwiaGlkZUVhc2luZ1wiOiBcImxpbmVhclwiLFxuICAgICAgICBcInNob3dNZXRob2RcIjogXCJmYWRlSW5cIixcbiAgICAgICAgXCJoaWRlTWV0aG9kXCI6IFwiZmFkZU91dFwiXG4gICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy92ZW5kb3IvbGFyYXZlbC1lbnNvL21vZHVsZXMvdG9hc3RyLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==