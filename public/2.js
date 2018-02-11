webpackJsonp([2],{

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(38)

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),

/***/ 1290:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1291)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1293)
/* template */
var __vue_template__ = __webpack_require__(1294)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/components/enso/fileuploader/FileUploader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45987a88", Component.options)
  } else {
    hotAPI.reload("data-v-45987a88", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1291:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1292);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("8bc5a264", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45987a88\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FileUploader.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45987a88\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FileUploader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1292:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nform.file-upload {\n    display: inline-table;\n}\nbutton.file-upload {\n    background: transparent;\n}\n.file-input.hidden {\n    display: none;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/fileuploader/resources/assets/js/components/enso/fileuploader/FileUploader.vue"],"names":[],"mappings":";AAqHA;IACA,sBAAA;CACA;AAEA;IACA,wBAAA;CACA;AAEA;IACA,cAAA;CACA","file":"FileUploader.vue","sourcesContent":["<template>\n\n    <form class=\"file-upload is-marginless\"\n        @submit.prevent>\n        <div class=\"file\">\n            <label class=\"file-label\">\n                <input :multiple=\"multiple\"\n                    class=\"file-input hidden\"\n                    type=\"file\"\n                    ref=\"input\"\n                    @change=\"upload\">\n                    <slot name=\"upload-button\"\n                        :open-file-browser=\"openFileBrowser\"\n                        @click=\"openFileBrowser\">\n                        <a class=\"icon is-small\">\n                            <fa icon=\"upload\"></fa>\n                        </a>\n                    </slot>\n            </label>\n        </div>\n    </form>\n\n</template>\n\n<script>\n\nimport fontawesome from '@fortawesome/fontawesome';\nimport { faUpload } from '@fortawesome/fontawesome-free-solid/shakable.es';\n\nfontawesome.library.add(faUpload);\n\nexport default {\n    props: {\n        multiple: {\n            type: Boolean,\n            default: false,\n        },\n        url: {\n            type: String,\n            required: true,\n        },\n        fileSizeLimit: {\n            type: Number,\n            default: 8388608,\n            validator: value => value <= 8388608,\n        },\n        params: {\n            type: Object,\n            default: null,\n        },\n    },\n\n    data() {\n        return {\n            input: null,\n            formData: new FormData(),\n        };\n    },\n\n    methods: {\n        openFileBrowser() {\n            this.$refs.input.click();\n        },\n        upload() {\n            this.$emit('upload-start');\n            this.setFormData();\n\n            axios.post(this.url, this.formData).then((response) => {\n                this.reset();\n                this.$emit('upload-successful', response.data);\n            }).catch((error) => {\n                this.reset();\n                this.$emit('upload-error');\n                this.handleError(error);\n            });\n        },\n        setFormData() {\n            const { files } = this.$refs.input;\n            this.addFiles(files);\n            this.addParams();\n        },\n        addFiles(files) {\n            for (let i = 0; i < files.length; i++) {\n                if (this.sizeCheckPasses(files[i])) {\n                    this.formData.append(`file_${i}`, files[i]);\n                }\n            }\n        },\n        addParams() {\n            if (this.params) {\n                Object.entries(this.params).forEach(([key, param]) => {\n                    const value = typeof param === 'object'\n                        ? JSON.stringify(param)\n                        : param;\n\n                    this.formData.append(key, value);\n                });\n            }\n        },\n        sizeCheckPasses(file) {\n            if (file.size > this.fileSizeLimit) {\n                this.$toastr.warning(`File size Limit of ${this.fileSizeLimit} Kb excedeed by ${file.name}`);\n                return false;\n            }\n\n            return true;\n        },\n        reset() {\n            this.$el.reset();\n            this.formData = new FormData();\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    form.file-upload {\n        display: inline-table;\n    }\n\n    button.file-upload {\n        background: transparent;\n    }\n\n    .file-input.hidden {\n        display: none;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1293:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(8);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_23" /* faUpload */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        url: {
            type: String,
            required: true
        },
        fileSizeLimit: {
            type: Number,
            default: 8388608,
            validator: function validator(value) {
                return value <= 8388608;
            }
        },
        params: {
            type: Object,
            default: null
        }
    },

    data: function data() {
        return {
            input: null,
            formData: new FormData()
        };
    },


    methods: {
        openFileBrowser: function openFileBrowser() {
            this.$refs.input.click();
        },
        upload: function upload() {
            var _this = this;

            this.$emit('upload-start');
            this.setFormData();

            axios.post(this.url, this.formData).then(function (response) {
                _this.reset();
                _this.$emit('upload-successful', response.data);
            }).catch(function (error) {
                _this.reset();
                _this.$emit('upload-error');
                _this.handleError(error);
            });
        },
        setFormData: function setFormData() {
            var files = this.$refs.input.files;

            this.addFiles(files);
            this.addParams();
        },
        addFiles: function addFiles(files) {
            for (var i = 0; i < files.length; i++) {
                if (this.sizeCheckPasses(files[i])) {
                    this.formData.append('file_' + i, files[i]);
                }
            }
        },
        addParams: function addParams() {
            var _this2 = this;

            if (this.params) {
                Object.entries(this.params).forEach(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        param = _ref2[1];

                    var value = (typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object' ? JSON.stringify(param) : param;

                    _this2.formData.append(key, value);
                });
            }
        },
        sizeCheckPasses: function sizeCheckPasses(file) {
            if (file.size > this.fileSizeLimit) {
                this.$toastr.warning('File size Limit of ' + this.fileSizeLimit + ' Kb excedeed by ' + file.name);
                return false;
            }

            return true;
        },
        reset: function reset() {
            this.$el.reset();
            this.formData = new FormData();
        }
    }
});

/***/ }),

/***/ 1294:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "file-upload is-marginless",
      on: {
        submit: function($event) {
          $event.preventDefault()
        }
      }
    },
    [
      _c("div", { staticClass: "file" }, [
        _c(
          "label",
          { staticClass: "file-label" },
          [
            _c("input", {
              ref: "input",
              staticClass: "file-input hidden",
              attrs: { multiple: _vm.multiple, type: "file" },
              on: { change: _vm.upload }
            }),
            _vm._v(" "),
            _vm._t(
              "upload-button",
              [
                _c(
                  "a",
                  { staticClass: "icon is-small" },
                  [_c("fa", { attrs: { icon: "upload" } })],
                  1
                )
              ],
              { openFileBrowser: _vm.openFileBrowser }
            )
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-45987a88", module.exports)
  }
}

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var startOfISOWeek = __webpack_require__(14)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * var result = getISOYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()

  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var startOfNextYear = startOfISOWeek(fourthOfJanuaryOfNextYear)

  var fourthOfJanuaryOfThisYear = new Date(0)
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4)
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0)
  var startOfThisYear = startOfISOWeek(fourthOfJanuaryOfThisYear)

  if (date.getTime() >= startOfNextYear.getTime()) {
    return year + 1
  } else if (date.getTime() >= startOfThisYear.getTime()) {
    return year
  } else {
    return year - 1
  }
}

module.exports = getISOYear


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(33)

/**
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * var result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek (dirtyDate) {
  return startOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = startOfISOWeek


/***/ }),

/***/ 1493:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1494);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7780d369", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18a3cb48\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18a3cb48\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1494:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.has-lateral-borders {\n    border-left: 1px solid rgba(0,0,0,0.2);\n    border-right: 1px solid rgba(0,0,0,0.2);\n}\n.stat-value {\n    font-size: 3em;\n    padding-top: 12px;\n}\n.stat-key {\n    font-size: 1.4em;\n    font-weight: 200;\n    padding-bottom: 8px;\n}\n.level.user-controls {\n    margin-bottom: 0;\n}\n.timeline-content {\n    -webkit-transition:all 1s ease;\n    transition:all 1s ease;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/pages/administration/users/resources/assets/js/pages/administration/users/Show.vue"],"names":[],"mappings":";AAgXA;IACA,uCAAA;IACA,wCAAA;CACA;AAEA;IACA,eAAA;IACA,kBAAA;CACA;AAEA;IACA,iBAAA;IACA,iBAAA;IACA,oBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,+BAAA;IAAA,uBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n\n    <div v-if=\"initialised\">\n        <div class=\"box profile-heading\">\n            <div class=\"columns is-multiline\">\n                <div class=\"column is-half-desktop\">\n                    <div class=\"columns is-mobile\">\n                        <div class=\"column is-narrow\">\n                            <div class=\"image is-128x128\">\n                                <img :src=\"avatarLink\">\n                            </div>\n                        </div>\n                        <div class=\"column\">\n                            <div class=\"level\">\n                                <div class=\"level-item has-padding-top-small\">\n                                    <div>\n                                        <p class=\"title is-3\">{{ profileUser.fullName }}</p>\n                                        <p>{{ __('role') }}: {{ profileUser.role.name }}</p>\n                                        <p>{{ __('since') }}: {{ profileUser.created_at | timeFromNow }}</p>\n                                        <p class=\"has-margin-top-small\">\n                                            <div class=\"level user-controls\"\n                                                v-if=\"isSelfVisiting\">\n                                                <div class=\"level-left\">\n                                                    <button class=\"button is-small is-warning\"\n                                                        v-if=\"avatarId\"\n                                                        @click=\"deleteAvatar\">\n                                                        <span class=\"icon\">\n                                                            <fa icon=\"trash-alt\"></fa>\n                                                        </span>\n                                                        <span>\n                                                            {{ __('Avatar') }}\n                                                        </span>\n                                                    </button>\n                                                    <file-uploader v-if=\"!avatarId\"\n                                                        @upload-successful=\"$store.commit('setUserAvatar', $event.id)\"\n                                                        :url=\"uploadAvatarLink\">\n                                                        <template slot=\"upload-button\"\n                                                            slot-scope=\"props\">\n                                                            <button  class=\"button is-small is-info\"\n                                                                @click=\"props.openFileBrowser\">\n                                                                <span class=\"icon\">\n                                                                    <fa icon=\"upload\"></fa>\n                                                                </span>\n                                                                <span>\n                                                                    {{ __('Avatar') }}\n                                                                </span>\n                                                            </button>\n                                                        </template>\n                                                    </file-uploader>\n                                                </div>\n                                                <div class=\"level-right\">\n                                                    <button class=\"button is-small is-danger\"\n                                                        @click=\"logout()\">\n                                                        <span class=\"icon\">\n                                                            <fa icon=\"sign-out-alt\"></fa>\n                                                        </span>\n                                                        <span>\n                                                            {{ __('Log Out') }}\n                                                        </span>\n                                                    </button>\n                                                </div>\n                                            </div>\n                                            <div v-else>\n                                                <button class=\"button is-small is-warning\"\n                                                    @click=\"$bus.$emit('start-impersonating', profileUser.id)\"\n                                                    v-if=\"!$store.state.impersonating\">\n                                                    {{ __('Impersonate') }}\n                                                </button>\n                                            </div>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"column is-half-desktop\">\n                    <div class=\"columns is-mobile\">\n                        <div class=\"column has-text-centered\">\n                          <p class=\"stat-value\">{{ profileUser.loginCount }}</p>\n                          <p class=\"stat-key\">{{ __('logins') }}</p>\n                        </div>\n                        <div class=\"column has-text-centered has-lateral-borders\">\n                          <p class=\"stat-value\">{{ profileUser.actionLogCount }}</p>\n                          <p class=\"stat-key\">{{ __('actions') }}</p>\n                        </div>\n                        <div class=\"column has-text-centered\">\n                          <p class=\"stat-value\">{{ profileUser.rating }}</p>\n                          <p class=\"stat-key\">{{ __('rating') }}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"columns is-centered\">\n            <div class=\"column is-two-thirds-tablet\">\n                <div class=\"box\">\n                    <nav class=\"pagination is-small has-margin-bottom-large\">\n                        <a class=\"pagination-previous\"\n                            @click=\"getPage(profileUser.timeline.current_page - 1)\"\n                            :disabled=\"profileUser.timeline.prev_page_url===null\">\n                            {{ __('Previous') }}\n                        </a>\n                        <a class=\"pagination-next\"\n                            @click=\"getPage(profileUser.timeline.current_page + 1)\"\n                            :disabled=\"profileUser.timeline.next_page_url===null\">\n                            {{ __('Next') }}\n                        </a>\n                        <ul class=\"pagination-list\" v-if=\"isShort\">\n                            <li v-for=\"i in profileUser.timeline.last_page\"\n                                :key=\"i\">\n                                <a class=\"pagination-link\"\n                                    :class=\"{ 'is-current': profileUser.timeline.current_page === i}\"\n                                    @click=\"getPage(i)\">\n                                    {{ i }}\n                                </a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination-list\" v-if=\"isAtStart && !isShort\">\n                            <li v-for=\"i in 3\"\n                                :key=\"i\">\n                                <a class=\"pagination-link\"\n                                    :class=\"{ 'is-current': profileUser.timeline.current_page === i}\"\n                                    @click=\"getPage(i)\">\n                                    {{ i }}\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.last_page)\">\n                                    {{ profileUser.timeline.last_page }}\n                                </a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination-list\" v-if=\"hasMiddle && !isShort\">\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(1)\">\n                                    1\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.current_page - 1)\">\n                                    {{ profileUser.timeline.current_page - 1 }}\n                                </a>\n                            </li>\n                            <li>\n                                <a class=\"pagination-link is-current\">\n                                    {{ profileUser.timeline.current_page }}\n                                </a>\n                            </li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.current_page + 1)\">\n                                    {{ profileUser.timeline.current_page + 1 }}\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.last_page)\">\n                                    {{ profileUser.timeline.last_page }}\n                                </a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination-list\" v-if=\"isAtEnd && !isShort\">\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(1)\">\n                                    1\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li v-for=\"i in 3\"\n                                :key=\"i\">\n                                <a class=\"pagination-link\"\n                                    :class=\"{ 'is-current': profileUser.timeline.current_page === profileUser.timeline.last_page - 3 + i}\"\n                                    @click=\"getPage(profileUser.timeline.last_page - 3 + i)\">\n                                    {{ profileUser.timeline.last_page - 3 + i }}\n                                </a>\n                            </li>\n                        </ul>\n                    </nav>\n                    <ul class=\"timeline has-padding-large\">\n                        <div v-for=\"(actions, day) in timeline\"\n                            class=\"timeline-content\"\n                            :key=\"day\">\n                            <li class=\"timeline-header\">\n                                <span class=\"tag is-medium is-primary\">{{ __(day) }}</span>\n                            </li>\n                            <!-- <li class=\"timeline-item\">\n                                <div class=\"timeline-marker\"></div>\n                                <div class=\"timeline-content\">\n                                    <p class=\"heading\">January 2016</p>\n                                    <p>Timeline content - Can include any HTML element</p>\n                                </div>\n                            </li> -->\n                            <li class=\"timeline-item\"\n                                v-for=\"(action, index) in actions\"\n                                :key=\"index\">\n                                <div class=\"timeline-marker is-icon\"\n                                    :class=\"getClass(action.route)\">\n                                    <fa :icon=\"getIcon(action.route)\" size=\"xs\"></fa>\n                                </div>\n                                <div class=\"timeline-content\">\n                                    <p class=\"heading\">{{ getHRDate(action.created_at) }} {{ getHRTime(action.created_at) }}</p>\n                                    <p>{{ action.permission.description }}</p>\n                                </div>\n                            </li>\n                        </div>\n                        <li class=\"timeline-header\"\n                            v-if=\"profileUser.timeline.current_page === profileUser.timeline.last_page\">\n                            <span class=\"tag is-medium is-primary\">{{ __('End') }}</span>\n                        </li>\n                        <li class=\"timeline-item\"\n                            v-else>\n                            <div class=\"timeline-marker is-icon\">\n                                <fa icon=\"ellipsis-h\" size=\"xs\"></fa>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport { mapGetters, mapState } from 'vuex';\nimport { format } from 'date-fns';\nimport fontawesome from '@fortawesome/fontawesome';\nimport {\n    faTrashAlt, faUpload, faSignOutAlt, faEllipsisH,\n    faEye, faPlus, faPencilAlt,\n} from '@fortawesome/fontawesome-free-solid/shakable.es';\nimport FileUploader from '../../../components/enso/fileuploader/FileUploader.vue';\n\nfontawesome.library.add([\n    faTrashAlt, faUpload, faSignOutAlt, faEllipsisH,\n    faEye, faPlus, faPencilAlt,\n]);\n\nexport default {\n    components: { FileUploader },\n\n    computed: {\n        ...mapGetters('locale', {\n            __: '__',\n            locale: 'current',\n        }),\n        ...mapState(['user', 'meta']),\n        uploadAvatarLink() {\n            return route('core.avatars.store', [], false);\n        },\n        isSelfVisiting() {\n            return this.user.id === this.profileUser.id;\n        },\n        avatarId() {\n            if (this.isSelfVisiting) {\n                return this.user.avatarId;\n            }\n\n            return this.profileUser.avatar ? this.profileUser.avatar.id : null;\n        },\n        avatarLink() {\n            return route('core.avatars.show', (this.avatarId || 'null'), false);\n        },\n        timeline() {\n            const actions = this.profileUser.timeline.data;\n\n            return actions.map(action => action.created_at).reduce((days, record) => {\n                days.push(this.getDay(record));\n                return days;\n            }, []).filter((value, index, days) => days.indexOf(value) === index)\n                .reduce((timeline, day) => {\n                    timeline[day] = actions\n                        .filter(record => this.getDay(record.created_at) === day);\n                    return timeline;\n                }, {});\n        },\n        isShort() {\n            return this.profileUser.timeline.last_page <= 5;\n        },\n        isAtStart() {\n            return this.profileUser.timeline.current_page <= 2;\n        },\n        isAtEnd() {\n            return this.profileUser.timeline.last_page\n                - this.profileUser.timeline.current_page <= 2;\n        },\n        hasMiddle() {\n            return !this.isAtStart && !this.isAtEnd;\n        },\n        paginationUrl() {\n            return `${route('administration.users.show', [this.profileUser.id], false)}?page=`;\n        },\n    },\n\n    data() {\n        return {\n            initialised: false,\n            profileUser: {},\n        };\n    },\n\n    watch: {\n        locale: {\n            handler() {\n                this.getPage(this.profileUser.timeline.current_page);\n            },\n        },\n    },\n\n    methods: {\n        deleteAvatar() {\n            axios.delete(route('core.avatars.destroy', this.user.avatarId, false)).then(() => {\n                this.$store.commit('setUserAvatar', null);\n            }).catch(error => this.handleError(error));\n        },\n        logout() {\n            axios.post(route('logout', [], false).toString()).then(() => {\n                this.$store.dispatch('auth/logout');\n            }).catch(error => this.handleError(error));\n        },\n        getDay(timestamp) {\n            return format(timestamp, 'dddd');\n        },\n        getHRDate(timestamp) {\n            return format(timestamp, this.meta.dateFormat);\n        },\n        getHRTime(timestamp) {\n            return format(timestamp, 'H:mm');\n        },\n        getIcon(action) {\n            if (action.indexOf('index') > 0) return faEye;\n            if (action.indexOf('create') > 0) return faPlus;\n            if (action.indexOf('edit') > 0) return faPencilAlt;\n            return faTrashAlt;\n        },\n        getClass(action) {\n            if (action.indexOf('index') > 0) return 'has-text-success';\n            if (action.indexOf('create') > 0) return 'has-text-warning';\n            if (action.indexOf('edit') > 0) return 'has-text-warning';\n            return 'has-text-danger';\n        },\n        getPage(page) {\n            axios.get(this.paginationUrl + page).then(({ data }) => {\n                this.profileUser = data.user;\n            }).catch(error => this.handleError(error));\n        },\n    },\n\n    mounted() {\n        axios.get(route(this.$route.name, this.$route.params.id, false)).then((response) => {\n            this.profileUser = response.data.user;\n            this.initialised = true;\n        }).catch(error => this.handleError(error));\n    },\n};\n\n</script>\n\n<style>\n\n    .has-lateral-borders {\n        border-left: 1px solid rgba(0,0,0,0.2);\n        border-right: 1px solid rgba(0,0,0,0.2);\n    }\n\n    .stat-value {\n        font-size: 3em;\n        padding-top: 12px;\n    }\n\n    .stat-key {\n        font-size: 1.4em;\n        font-weight: 200;\n        padding-bottom: 8px;\n    }\n\n    .level.user-controls {\n        margin-bottom: 0;\n    }\n\n    .timeline-content {\n        transition:all 1s ease;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1495:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_enso_fileuploader_FileUploader_vue__ = __webpack_require__(1290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_enso_fileuploader_FileUploader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_enso_fileuploader_FileUploader_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//








__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome__["default"].library.add([__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__["_20" /* faTrashAlt */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__["_23" /* faUpload */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__["_8" /* faSignOutAlt */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__["I" /* faEllipsisH */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__["M" /* faEye */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__["_3" /* faPlus */], __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__["_1" /* faPencilAlt */]]);

/* harmony default export */ __webpack_exports__["default"] = ({
    components: { FileUploader: __WEBPACK_IMPORTED_MODULE_4__components_enso_fileuploader_FileUploader_vue___default.a },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', {
        __: '__',
        locale: 'current'
    }), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["e" /* mapState */])(['user', 'meta']), {
        uploadAvatarLink: function uploadAvatarLink() {
            return route('core.avatars.store', [], false);
        },
        isSelfVisiting: function isSelfVisiting() {
            return this.user.id === this.profileUser.id;
        },
        avatarId: function avatarId() {
            if (this.isSelfVisiting) {
                return this.user.avatarId;
            }

            return this.profileUser.avatar ? this.profileUser.avatar.id : null;
        },
        avatarLink: function avatarLink() {
            return route('core.avatars.show', this.avatarId || 'null', false);
        },
        timeline: function timeline() {
            var _this = this;

            var actions = this.profileUser.timeline.data;

            return actions.map(function (action) {
                return action.created_at;
            }).reduce(function (days, record) {
                days.push(_this.getDay(record));
                return days;
            }, []).filter(function (value, index, days) {
                return days.indexOf(value) === index;
            }).reduce(function (timeline, day) {
                timeline[day] = actions.filter(function (record) {
                    return _this.getDay(record.created_at) === day;
                });
                return timeline;
            }, {});
        },
        isShort: function isShort() {
            return this.profileUser.timeline.last_page <= 5;
        },
        isAtStart: function isAtStart() {
            return this.profileUser.timeline.current_page <= 2;
        },
        isAtEnd: function isAtEnd() {
            return this.profileUser.timeline.last_page - this.profileUser.timeline.current_page <= 2;
        },
        hasMiddle: function hasMiddle() {
            return !this.isAtStart && !this.isAtEnd;
        },
        paginationUrl: function paginationUrl() {
            return route('administration.users.show', [this.profileUser.id], false) + '?page=';
        }
    }),

    data: function data() {
        return {
            initialised: false,
            profileUser: {}
        };
    },


    watch: {
        locale: {
            handler: function handler() {
                this.getPage(this.profileUser.timeline.current_page);
            }
        }
    },

    methods: {
        deleteAvatar: function deleteAvatar() {
            var _this2 = this;

            axios.delete(route('core.avatars.destroy', this.user.avatarId, false)).then(function () {
                _this2.$store.commit('setUserAvatar', null);
            }).catch(function (error) {
                return _this2.handleError(error);
            });
        },
        logout: function logout() {
            var _this3 = this;

            axios.post(route('logout', [], false).toString()).then(function () {
                _this3.$store.dispatch('auth/logout');
            }).catch(function (error) {
                return _this3.handleError(error);
            });
        },
        getDay: function getDay(timestamp) {
            return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["format"])(timestamp, 'dddd');
        },
        getHRDate: function getHRDate(timestamp) {
            return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["format"])(timestamp, this.meta.dateFormat);
        },
        getHRTime: function getHRTime(timestamp) {
            return Object(__WEBPACK_IMPORTED_MODULE_1_date_fns__["format"])(timestamp, 'H:mm');
        },
        getIcon: function getIcon(action) {
            if (action.indexOf('index') > 0) return __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__["M" /* faEye */];
            if (action.indexOf('create') > 0) return __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__["_3" /* faPlus */];
            if (action.indexOf('edit') > 0) return __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__["_1" /* faPencilAlt */];
            return __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__["_20" /* faTrashAlt */];
        },
        getClass: function getClass(action) {
            if (action.indexOf('index') > 0) return 'has-text-success';
            if (action.indexOf('create') > 0) return 'has-text-warning';
            if (action.indexOf('edit') > 0) return 'has-text-warning';
            return 'has-text-danger';
        },
        getPage: function getPage(page) {
            var _this4 = this;

            axios.get(this.paginationUrl + page).then(function (_ref) {
                var data = _ref.data;

                _this4.profileUser = data.user;
            }).catch(function (error) {
                return _this4.handleError(error);
            });
        }
    },

    mounted: function mounted() {
        var _this5 = this;

        axios.get(route(this.$route.name, this.$route.params.id, false)).then(function (response) {
            _this5.profileUser = response.data.user;
            _this5.initialised = true;
        }).catch(function (error) {
            return _this5.handleError(error);
        });
    }
});

/***/ }),

/***/ 1496:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.initialised
    ? _c("div", [
        _c("div", { staticClass: "box profile-heading" }, [
          _c("div", { staticClass: "columns is-multiline" }, [
            _c("div", { staticClass: "column is-half-desktop" }, [
              _c("div", { staticClass: "columns is-mobile" }, [
                _c("div", { staticClass: "column is-narrow" }, [
                  _c("div", { staticClass: "image is-128x128" }, [
                    _c("img", { attrs: { src: _vm.avatarLink } })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "column" }, [
                  _c("div", { staticClass: "level" }, [
                    _c(
                      "div",
                      { staticClass: "level-item has-padding-top-small" },
                      [
                        _c("div", [
                          _c("p", { staticClass: "title is-3" }, [
                            _vm._v(_vm._s(_vm.profileUser.fullName))
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.__("role")) +
                                ": " +
                                _vm._s(_vm.profileUser.role.name)
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.__("since")) +
                                ": " +
                                _vm._s(
                                  _vm._f("timeFromNow")(
                                    _vm.profileUser.created_at
                                  )
                                )
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "has-margin-top-small" }),
                          _vm.isSelfVisiting
                            ? _c(
                                "div",
                                { staticClass: "level user-controls" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "level-left" },
                                    [
                                      _vm.avatarId
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "button is-small is-warning",
                                              on: { click: _vm.deleteAvatar }
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "icon" },
                                                [
                                                  _c("fa", {
                                                    attrs: { icon: "trash-alt" }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("span", [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(_vm.__("Avatar")) +
                                                    "\n                                                    "
                                                )
                                              ])
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !_vm.avatarId
                                        ? _c("file-uploader", {
                                            attrs: {
                                              url: _vm.uploadAvatarLink
                                            },
                                            on: {
                                              "upload-successful": function(
                                                $event
                                              ) {
                                                _vm.$store.commit(
                                                  "setUserAvatar",
                                                  $event.id
                                                )
                                              }
                                            },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "upload-button",
                                                fn: function(props) {
                                                  return [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "button is-small is-info",
                                                        on: {
                                                          click:
                                                            props.openFileBrowser
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "icon"
                                                          },
                                                          [
                                                            _c("fa", {
                                                              attrs: {
                                                                icon: "upload"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c("span", [
                                                          _vm._v(
                                                            "\n                                                                " +
                                                              _vm._s(
                                                                _vm.__("Avatar")
                                                              ) +
                                                              "\n                                                            "
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  ]
                                                }
                                              }
                                            ])
                                          })
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "level-right" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "button is-small is-danger",
                                        on: {
                                          click: function($event) {
                                            _vm.logout()
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "icon" },
                                          [
                                            _c("fa", {
                                              attrs: { icon: "sign-out-alt" }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                                                        " +
                                              _vm._s(_vm.__("Log Out")) +
                                              "\n                                                    "
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                ]
                              )
                            : _c("div", [
                                !_vm.$store.state.impersonating
                                  ? _c(
                                      "button",
                                      {
                                        staticClass:
                                          "button is-small is-warning",
                                        on: {
                                          click: function($event) {
                                            _vm.$bus.$emit(
                                              "start-impersonating",
                                              _vm.profileUser.id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(_vm.__("Impersonate")) +
                                            "\n                                            "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                          _vm._v(" "),
                          _c("p")
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column is-half-desktop" }, [
              _c("div", { staticClass: "columns is-mobile" }, [
                _c("div", { staticClass: "column has-text-centered" }, [
                  _c("p", { staticClass: "stat-value" }, [
                    _vm._v(_vm._s(_vm.profileUser.loginCount))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "stat-key" }, [
                    _vm._v(_vm._s(_vm.__("logins")))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "column has-text-centered has-lateral-borders"
                  },
                  [
                    _c("p", { staticClass: "stat-value" }, [
                      _vm._v(_vm._s(_vm.profileUser.actionLogCount))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "stat-key" }, [
                      _vm._v(_vm._s(_vm.__("actions")))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "column has-text-centered" }, [
                  _c("p", { staticClass: "stat-value" }, [
                    _vm._v(_vm._s(_vm.profileUser.rating))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "stat-key" }, [
                    _vm._v(_vm._s(_vm.__("rating")))
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "columns is-centered" }, [
          _c("div", { staticClass: "column is-two-thirds-tablet" }, [
            _c("div", { staticClass: "box" }, [
              _c(
                "nav",
                { staticClass: "pagination is-small has-margin-bottom-large" },
                [
                  _c(
                    "a",
                    {
                      staticClass: "pagination-previous",
                      attrs: {
                        disabled:
                          _vm.profileUser.timeline.prev_page_url === null
                      },
                      on: {
                        click: function($event) {
                          _vm.getPage(_vm.profileUser.timeline.current_page - 1)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.__("Previous")) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "pagination-next",
                      attrs: {
                        disabled:
                          _vm.profileUser.timeline.next_page_url === null
                      },
                      on: {
                        click: function($event) {
                          _vm.getPage(_vm.profileUser.timeline.current_page + 1)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.__("Next")) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm.isShort
                    ? _c(
                        "ul",
                        { staticClass: "pagination-list" },
                        _vm._l(_vm.profileUser.timeline.last_page, function(i) {
                          return _c("li", { key: i }, [
                            _c(
                              "a",
                              {
                                staticClass: "pagination-link",
                                class: {
                                  "is-current":
                                    _vm.profileUser.timeline.current_page === i
                                },
                                on: {
                                  click: function($event) {
                                    _vm.getPage(i)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(i) +
                                    "\n                            "
                                )
                              ]
                            )
                          ])
                        })
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isAtStart && !_vm.isShort
                    ? _c(
                        "ul",
                        { staticClass: "pagination-list" },
                        [
                          _vm._l(3, function(i) {
                            return _c("li", { key: i }, [
                              _c(
                                "a",
                                {
                                  staticClass: "pagination-link",
                                  class: {
                                    "is-current":
                                      _vm.profileUser.timeline.current_page ===
                                      i
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.getPage(i)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(i) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ])
                          }),
                          _vm._v(" "),
                          _vm._m(0),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "pagination-link",
                                on: {
                                  click: function($event) {
                                    _vm.getPage(
                                      _vm.profileUser.timeline.last_page
                                    )
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.profileUser.timeline.last_page) +
                                    "\n                            "
                                )
                              ]
                            )
                          ])
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.hasMiddle && !_vm.isShort
                    ? _c("ul", { staticClass: "pagination-list" }, [
                        _c("li", [
                          _c(
                            "a",
                            {
                              staticClass: "pagination-link",
                              on: {
                                click: function($event) {
                                  _vm.getPage(1)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                1\n                            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(1),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              staticClass: "pagination-link",
                              on: {
                                click: function($event) {
                                  _vm.getPage(
                                    _vm.profileUser.timeline.current_page - 1
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.profileUser.timeline.current_page - 1
                                  ) +
                                  "\n                            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            { staticClass: "pagination-link is-current" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.profileUser.timeline.current_page
                                  ) +
                                  "\n                            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              staticClass: "pagination-link",
                              on: {
                                click: function($event) {
                                  _vm.getPage(
                                    _vm.profileUser.timeline.current_page + 1
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.profileUser.timeline.current_page + 1
                                  ) +
                                  "\n                            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(2),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              staticClass: "pagination-link",
                              on: {
                                click: function($event) {
                                  _vm.getPage(
                                    _vm.profileUser.timeline.last_page
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.profileUser.timeline.last_page) +
                                  "\n                            "
                              )
                            ]
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isAtEnd && !_vm.isShort
                    ? _c(
                        "ul",
                        { staticClass: "pagination-list" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "pagination-link",
                                on: {
                                  click: function($event) {
                                    _vm.getPage(1)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                1\n                            "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _vm._l(3, function(i) {
                            return _c("li", { key: i }, [
                              _c(
                                "a",
                                {
                                  staticClass: "pagination-link",
                                  class: {
                                    "is-current":
                                      _vm.profileUser.timeline.current_page ===
                                      _vm.profileUser.timeline.last_page - 3 + i
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.getPage(
                                        _vm.profileUser.timeline.last_page -
                                          3 +
                                          i
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm.profileUser.timeline.last_page -
                                          3 +
                                          i
                                      ) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ])
                          })
                        ],
                        2
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "timeline has-padding-large" },
                [
                  _vm._l(_vm.timeline, function(actions, day) {
                    return _c(
                      "div",
                      { key: day, staticClass: "timeline-content" },
                      [
                        _c("li", { staticClass: "timeline-header" }, [
                          _c(
                            "span",
                            { staticClass: "tag is-medium is-primary" },
                            [_vm._v(_vm._s(_vm.__(day)))]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._l(actions, function(action, index) {
                          return _c(
                            "li",
                            { key: index, staticClass: "timeline-item" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "timeline-marker is-icon",
                                  class: _vm.getClass(action.route)
                                },
                                [
                                  _c("fa", {
                                    attrs: {
                                      icon: _vm.getIcon(action.route),
                                      size: "xs"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "timeline-content" }, [
                                _c("p", { staticClass: "heading" }, [
                                  _vm._v(
                                    _vm._s(_vm.getHRDate(action.created_at)) +
                                      " " +
                                      _vm._s(_vm.getHRTime(action.created_at))
                                  )
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(_vm._s(action.permission.description))
                                ])
                              ])
                            ]
                          )
                        })
                      ],
                      2
                    )
                  }),
                  _vm._v(" "),
                  _vm.profileUser.timeline.current_page ===
                  _vm.profileUser.timeline.last_page
                    ? _c("li", { staticClass: "timeline-header" }, [
                        _c(
                          "span",
                          { staticClass: "tag is-medium is-primary" },
                          [_vm._v(_vm._s(_vm.__("End")))]
                        )
                      ])
                    : _c("li", { staticClass: "timeline-item" }, [
                        _c(
                          "div",
                          { staticClass: "timeline-marker is-icon" },
                          [
                            _c("fa", {
                              attrs: { icon: "ellipsis-h", size: "xs" }
                            })
                          ],
                          1
                        )
                      ])
                ],
                2
              )
            ])
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-18a3cb48", module.exports)
  }
}

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * var result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfDay


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(20)

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Add the specified number of hours to the given date.
 *
 * @description
 * Add the specified number of hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be added
 * @returns {Date} the new date with the hours added
 *
 * @example
 * // Add 2 hours to 10 July 2014 23:00:00:
 * var result = addHours(new Date(2014, 6, 10, 23, 0), 2)
 * //=> Fri Jul 11 2014 01:00:00
 */
function addHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_HOUR)
}

module.exports = addHours


/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(13)
var setISOYear = __webpack_require__(160)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Add the specified number of ISO week-numbering years to the given date.
 *
 * @description
 * Add the specified number of ISO week-numbering years to the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be added
 * @returns {Date} the new date with the ISO week-numbering years added
 *
 * @example
 * // Add 5 ISO week-numbering years to 2 July 2010:
 * var result = addISOYears(new Date(2010, 6, 2), 5)
 * //=> Fri Jun 26 2015 00:00:00
 */
function addISOYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return setISOYear(dirtyDate, getISOYear(dirtyDate) + amount)
}

module.exports = addISOYears


/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var startOfISOYear = __webpack_require__(21)
var differenceInCalendarDays = __webpack_require__(34)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Set the ISO week-numbering year to the given date.
 *
 * @description
 * Set the ISO week-numbering year to the given date,
 * saving the week number and the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoYear - the ISO week-numbering year of the new date
 * @returns {Date} the new date with the ISO week-numbering year setted
 *
 * @example
 * // Set ISO week-numbering year 2007 to 29 December 2008:
 * var result = setISOYear(new Date(2008, 11, 29), 2007)
 * //=> Mon Jan 01 2007 00:00:00
 */
function setISOYear (dirtyDate, dirtyISOYear) {
  var date = parse(dirtyDate)
  var isoYear = Number(dirtyISOYear)
  var diff = differenceInCalendarDays(date, startOfISOYear(date))
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(isoYear, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  date = startOfISOYear(fourthOfJanuary)
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = setISOYear


/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(20)

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Add the specified number of minutes to the given date.
 *
 * @description
 * Add the specified number of minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be added
 * @returns {Date} the new date with the minutes added
 *
 * @example
 * // Add 30 minutes to 10 July 2014 12:00:00:
 * var result = addMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 12:30:00
 */
function addMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * MILLISECONDS_IN_MINUTE)
}

module.exports = addMinutes


/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__(35)

/**
 * @category Quarter Helpers
 * @summary Add the specified number of year quarters to the given date.
 *
 * @description
 * Add the specified number of year quarters to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be added
 * @returns {Date} the new date with the quarters added
 *
 * @example
 * // Add 1 quarter to 1 September 2014:
 * var result = addQuarters(new Date(2014, 8, 1), 1)
 * //=> Mon Dec 01 2014 00:00:00
 */
function addQuarters (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var months = amount * 3
  return addMonths(dirtyDate, months)
}

module.exports = addQuarters


/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(20)

/**
 * @category Second Helpers
 * @summary Add the specified number of seconds to the given date.
 *
 * @description
 * Add the specified number of seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be added
 * @returns {Date} the new date with the seconds added
 *
 * @example
 * // Add 30 seconds to 10 July 2014 12:45:00:
 * var result = addSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:45:30
 */
function addSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, amount * 1000)
}

module.exports = addSeconds


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__(35)

/**
 * @category Year Helpers
 * @summary Add the specified number of years to the given date.
 *
 * @description
 * Add the specified number of years to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be added
 * @returns {Date} the new date with the years added
 *
 * @example
 * // Add 5 years to 1 September 2014:
 * var result = addYears(new Date(2014, 8, 1), 5)
 * //=> Sun Sep 01 2019 00:00:00
 */
function addYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, amount * 12)
}

module.exports = addYears


/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(13)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of calendar ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of calendar ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO week-numbering years
 *
 * @example
 * // How many calendar ISO week-numbering years are 1 January 2010 and 1 January 2012?
 * var result = differenceInCalendarISOYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 2
 */
function differenceInCalendarISOYears (dirtyDateLeft, dirtyDateRight) {
  return getISOYear(dirtyDateLeft) - getISOYear(dirtyDateRight)
}

module.exports = differenceInCalendarISOYears


/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Month Helpers
 * @summary Get the number of calendar months between the given dates.
 *
 * @description
 * Get the number of calendar months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar months
 *
 * @example
 * // How many calendar months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInCalendarMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 8
 */
function differenceInCalendarMonths (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
  var monthDiff = dateLeft.getMonth() - dateRight.getMonth()

  return yearDiff * 12 + monthDiff
}

module.exports = differenceInCalendarMonths


/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Quarter Helpers
 * @summary Get the year quarter of the given date.
 *
 * @description
 * Get the year quarter of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the quarter
 *
 * @example
 * // Which quarter is 2 July 2014?
 * var result = getQuarter(new Date(2014, 6, 2))
 * //=> 3
 */
function getQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var quarter = Math.floor(date.getMonth() / 3) + 1
  return quarter
}

module.exports = getQuarter


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Year Helpers
 * @summary Get the number of calendar years between the given dates.
 *
 * @description
 * Get the number of calendar years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar years
 *
 * @example
 * // How many calendar years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInCalendarYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInCalendarYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  return dateLeft.getFullYear() - dateRight.getFullYear()
}

module.exports = differenceInCalendarYears


/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var differenceInCalendarDays = __webpack_require__(34)
var compareAsc = __webpack_require__(22)

/**
 * @category Day Helpers
 * @summary Get the number of full days between the given dates.
 *
 * @description
 * Get the number of full days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full days
 *
 * @example
 * // How many full days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 365
 */
function differenceInDays (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarDays(dateLeft, dateRight))
  dateLeft.setDate(dateLeft.getDate() - sign * difference)

  // Math.abs(diff in full days - diff in calendar days) === 1 if last calendar day is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastDayNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastDayNotFull)
}

module.exports = differenceInDays


/***/ }),

/***/ 170:
/***/ (function(module, exports, __webpack_require__) {

var addISOYears = __webpack_require__(159)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Subtract the specified number of ISO week-numbering years from the given date.
 *
 * @description
 * Subtract the specified number of ISO week-numbering years from the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of ISO week-numbering years to be subtracted
 * @returns {Date} the new date with the ISO week-numbering years subtracted
 *
 * @example
 * // Subtract 5 ISO week-numbering years from 1 September 2014:
 * var result = subISOYears(new Date(2014, 8, 1), 5)
 * //=> Mon Aug 31 2009 00:00:00
 */
function subISOYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addISOYears(dirtyDate, -amount)
}

module.exports = subISOYears


/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

var compareDesc = __webpack_require__(41)
var parse = __webpack_require__(0)
var differenceInSeconds = __webpack_require__(43)
var differenceInMonths = __webpack_require__(42)
var enLocale = __webpack_require__(44)

var MINUTES_IN_DAY = 1440
var MINUTES_IN_ALMOST_TWO_DAYS = 2520
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_TWO_MONTHS = 86400

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words.
 *
 * | Distance between dates                                            | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance between dates | Result               |
 * |------------------------|----------------------|
 * | 0 secs ... 5 secs      | less than 5 seconds  |
 * | 5 secs ... 10 secs     | less than 10 seconds |
 * | 10 secs ... 20 secs    | less than 20 seconds |
 * | 20 secs ... 40 secs    | half a minute        |
 * | 40 secs ... 60 secs    | less than a minute   |
 * | 60 secs ... 90 secs    | 1 minute             |
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the other date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWords(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 1)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00, including seconds?
 * var result = distanceInWords(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = distanceInWords(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'about 1 year ago'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWords(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWords (dirtyDateToCompare, dirtyDate, dirtyOptions) {
  var options = dirtyOptions || {}

  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)

  var locale = options.locale
  var localize = enLocale.distanceInWords.localize
  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
    localize = locale.distanceInWords.localize
  }

  var localizeOptions = {
    addSuffix: Boolean(options.addSuffix),
    comparison: comparison
  }

  var dateLeft, dateRight
  if (comparison > 0) {
    dateLeft = parse(dirtyDateToCompare)
    dateRight = parse(dirtyDate)
  } else {
    dateLeft = parse(dirtyDate)
    dateRight = parse(dirtyDateToCompare)
  }

  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
  var minutes = Math.round(seconds / 60) - offset
  var months

  // 0 up to 2 mins
  if (minutes < 2) {
    if (options.includeSeconds) {
      if (seconds < 5) {
        return localize('lessThanXSeconds', 5, localizeOptions)
      } else if (seconds < 10) {
        return localize('lessThanXSeconds', 10, localizeOptions)
      } else if (seconds < 20) {
        return localize('lessThanXSeconds', 20, localizeOptions)
      } else if (seconds < 40) {
        return localize('halfAMinute', null, localizeOptions)
      } else if (seconds < 60) {
        return localize('lessThanXMinutes', 1, localizeOptions)
      } else {
        return localize('xMinutes', 1, localizeOptions)
      }
    } else {
      if (minutes === 0) {
        return localize('lessThanXMinutes', 1, localizeOptions)
      } else {
        return localize('xMinutes', minutes, localizeOptions)
      }
    }

  // 2 mins up to 0.75 hrs
  } else if (minutes < 45) {
    return localize('xMinutes', minutes, localizeOptions)

  // 0.75 hrs up to 1.5 hrs
  } else if (minutes < 90) {
    return localize('aboutXHours', 1, localizeOptions)

  // 1.5 hrs up to 24 hrs
  } else if (minutes < MINUTES_IN_DAY) {
    var hours = Math.round(minutes / 60)
    return localize('aboutXHours', hours, localizeOptions)

  // 1 day up to 1.75 days
  } else if (minutes < MINUTES_IN_ALMOST_TWO_DAYS) {
    return localize('xDays', 1, localizeOptions)

  // 1.75 days up to 30 days
  } else if (minutes < MINUTES_IN_MONTH) {
    var days = Math.round(minutes / MINUTES_IN_DAY)
    return localize('xDays', days, localizeOptions)

  // 1 month up to 2 months
  } else if (minutes < MINUTES_IN_TWO_MONTHS) {
    months = Math.round(minutes / MINUTES_IN_MONTH)
    return localize('aboutXMonths', months, localizeOptions)
  }

  months = differenceInMonths(dateRight, dateLeft)

  // 2 months up to 12 months
  if (months < 12) {
    var nearestMonth = Math.round(minutes / MINUTES_IN_MONTH)
    return localize('xMonths', nearestMonth, localizeOptions)

  // 1 year up to max Date
  } else {
    var monthsSinceStartOfYear = months % 12
    var years = Math.floor(months / 12)

    // N years up to 1 years 3 months
    if (monthsSinceStartOfYear < 3) {
      return localize('aboutXYears', years, localizeOptions)

    // N years 3 months up to N years 9 months
    } else if (monthsSinceStartOfYear < 9) {
      return localize('overXYears', years, localizeOptions)

    // N years 9 months up to N year 12 months
    } else {
      return localize('almostXYears', years + 1, localizeOptions)
    }
  }
}

module.exports = distanceInWords


/***/ }),

/***/ 172:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Week Helpers
 * @summary Return the end of a week for the given date.
 *
 * @description
 * Return the end of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the end of a week
 *
 * @example
 * // The end of a week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 23:59:59.999
 *
 * @example
 * // If the week starts on Monday, the end of the week for 2 September 2014 11:55:00:
 * var result = endOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setDate(date.getDate() + diff)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfWeek


/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Month Helpers
 * @summary Return the end of a month for the given date.
 *
 * @description
 * Return the end of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a month
 *
 * @example
 * // The end of a month for 2 September 2014 11:55:00:
 * var result = endOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfMonth


/***/ }),

/***/ 174:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var startOfYear = __webpack_require__(175)
var differenceInCalendarDays = __webpack_require__(34)

/**
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * var result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = differenceInCalendarDays(date, startOfYear(date))
  var dayOfYear = diff + 1
  return dayOfYear
}

module.exports = getDayOfYear


/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * var result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear (dirtyDate) {
  var cleanDate = parse(dirtyDate)
  var date = new Date(0)
  date.setFullYear(cleanDate.getFullYear(), 0, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYear


/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(38)

/**
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @param {Date} date - the date to check
 * @returns {Boolean} the date is valid
 * @throws {TypeError} argument must be an instance of Date
 *
 * @example
 * // For the valid date:
 * var result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the invalid date:
 * var result = isValid(new Date(''))
 * //=> false
 */
function isValid (dirtyDate) {
  if (isDate(dirtyDate)) {
    return !isNaN(dirtyDate)
  } else {
    throw new TypeError(toString.call(dirtyDate) + ' is not an instance of Date')
  }
}

module.exports = isValid


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Year Helpers
 * @summary Is the given date in the leap year?
 *
 * @description
 * Is the given date in the leap year?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the leap year
 *
 * @example
 * // Is 1 September 2012 in the leap year?
 * var result = isLeapYear(new Date(2012, 8, 1))
 * //=> true
 */
function isLeapYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year % 400 === 0 || year % 4 === 0 && year % 100 !== 0
}

module.exports = isLeapYear


/***/ }),

/***/ 178:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Weekday Helpers
 * @summary Get the day of the ISO week of the given date.
 *
 * @description
 * Get the day of the ISO week of the given date,
 * which is 7 for Sunday, 1 for Monday etc.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of ISO week
 *
 * @example
 * // Which day of the ISO week is 26 February 2012?
 * var result = getISODay(new Date(2012, 1, 26))
 * //=> 7
 */
function getISODay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()

  if (day === 0) {
    day = 7
  }

  return day
}

module.exports = getISODay


/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

var startOfHour = __webpack_require__(180)

/**
 * @category Hour Helpers
 * @summary Are the given dates in the same hour?
 *
 * @description
 * Are the given dates in the same hour?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same hour
 *
 * @example
 * // Are 4 September 2014 06:00:00 and 4 September 06:30:00 in the same hour?
 * var result = isSameHour(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 6, 30)
 * )
 * //=> true
 */
function isSameHour (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfHour = startOfHour(dirtyDateLeft)
  var dateRightStartOfHour = startOfHour(dirtyDateRight)

  return dateLeftStartOfHour.getTime() === dateRightStartOfHour.getTime()
}

module.exports = isSameHour


/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Hour Helpers
 * @summary Return the start of an hour for the given date.
 *
 * @description
 * Return the start of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an hour
 *
 * @example
 * // The start of an hour for 2 September 2014 11:55:00:
 * var result = startOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:00:00
 */
function startOfHour (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMinutes(0, 0, 0)
  return date
}

module.exports = startOfHour


/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

var isSameWeek = __webpack_require__(47)

/**
 * @category ISO Week Helpers
 * @summary Are the given dates in the same ISO week?
 *
 * @description
 * Are the given dates in the same ISO week?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week
 *
 * @example
 * // Are 1 September 2014 and 7 September 2014 in the same ISO week?
 * var result = isSameISOWeek(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 8, 7)
 * )
 * //=> true
 */
function isSameISOWeek (dirtyDateLeft, dirtyDateRight) {
  return isSameWeek(dirtyDateLeft, dirtyDateRight, {weekStartsOn: 1})
}

module.exports = isSameISOWeek


/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

var startOfISOYear = __webpack_require__(21)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Are the given dates in the same ISO week-numbering year?
 *
 * @description
 * Are the given dates in the same ISO week-numbering year?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same ISO week-numbering year
 *
 * @example
 * // Are 29 December 2003 and 2 January 2005 in the same ISO week-numbering year?
 * var result = isSameISOYear(
 *   new Date(2003, 11, 29),
 *   new Date(2005, 0, 2)
 * )
 * //=> true
 */
function isSameISOYear (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfYear = startOfISOYear(dirtyDateLeft)
  var dateRightStartOfYear = startOfISOYear(dirtyDateRight)

  return dateLeftStartOfYear.getTime() === dateRightStartOfYear.getTime()
}

module.exports = isSameISOYear


/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

var startOfMinute = __webpack_require__(184)

/**
 * @category Minute Helpers
 * @summary Are the given dates in the same minute?
 *
 * @description
 * Are the given dates in the same minute?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same minute
 *
 * @example
 * // Are 4 September 2014 06:30:00 and 4 September 2014 06:30:15
 * // in the same minute?
 * var result = isSameMinute(
 *   new Date(2014, 8, 4, 6, 30),
 *   new Date(2014, 8, 4, 6, 30, 15)
 * )
 * //=> true
 */
function isSameMinute (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfMinute = startOfMinute(dirtyDateLeft)
  var dateRightStartOfMinute = startOfMinute(dirtyDateRight)

  return dateLeftStartOfMinute.getTime() === dateRightStartOfMinute.getTime()
}

module.exports = isSameMinute


/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Minute Helpers
 * @summary Return the start of a minute for the given date.
 *
 * @description
 * Return the start of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a minute
 *
 * @example
 * // The start of a minute for 1 December 2014 22:15:45.400:
 * var result = startOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:00
 */
function startOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(0, 0)
  return date
}

module.exports = startOfMinute


/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Month Helpers
 * @summary Are the given dates in the same month?
 *
 * @description
 * Are the given dates in the same month?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same month
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same month?
 * var result = isSameMonth(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameMonth (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear() &&
    dateLeft.getMonth() === dateRight.getMonth()
}

module.exports = isSameMonth


/***/ }),

/***/ 186:
/***/ (function(module, exports, __webpack_require__) {

var startOfQuarter = __webpack_require__(187)

/**
 * @category Quarter Helpers
 * @summary Are the given dates in the same year quarter?
 *
 * @description
 * Are the given dates in the same year quarter?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same quarter
 *
 * @example
 * // Are 1 January 2014 and 8 March 2014 in the same quarter?
 * var result = isSameQuarter(
 *   new Date(2014, 0, 1),
 *   new Date(2014, 2, 8)
 * )
 * //=> true
 */
function isSameQuarter (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfQuarter = startOfQuarter(dirtyDateLeft)
  var dateRightStartOfQuarter = startOfQuarter(dirtyDateRight)

  return dateLeftStartOfQuarter.getTime() === dateRightStartOfQuarter.getTime()
}

module.exports = isSameQuarter


/***/ }),

/***/ 187:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Quarter Helpers
 * @summary Return the start of a year quarter for the given date.
 *
 * @description
 * Return the start of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a quarter
 *
 * @example
 * // The start of a quarter for 2 September 2014 11:55:00:
 * var result = startOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Jul 01 2014 00:00:00
 */
function startOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3
  date.setMonth(month, 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfQuarter


/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

var startOfSecond = __webpack_require__(189)

/**
 * @category Second Helpers
 * @summary Are the given dates in the same second?
 *
 * @description
 * Are the given dates in the same second?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same second
 *
 * @example
 * // Are 4 September 2014 06:30:15.000 and 4 September 2014 06:30.15.500
 * // in the same second?
 * var result = isSameSecond(
 *   new Date(2014, 8, 4, 6, 30, 15),
 *   new Date(2014, 8, 4, 6, 30, 15, 500)
 * )
 * //=> true
 */
function isSameSecond (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfSecond = startOfSecond(dirtyDateLeft)
  var dateRightStartOfSecond = startOfSecond(dirtyDateRight)

  return dateLeftStartOfSecond.getTime() === dateRightStartOfSecond.getTime()
}

module.exports = isSameSecond


/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Second Helpers
 * @summary Return the start of a second for the given date.
 *
 * @description
 * Return the start of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a second
 *
 * @example
 * // The start of a second for 1 December 2014 22:15:45.400:
 * var result = startOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.000
 */
function startOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(0)
  return date
}

module.exports = startOfSecond


/***/ }),

/***/ 19:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added
 * @returns {Date} the new date with the days added
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * var result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  date.setDate(date.getDate() + amount)
  return date
}

module.exports = addDays


/***/ }),

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Year Helpers
 * @summary Are the given dates in the same year?
 *
 * @description
 * Are the given dates in the same year?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same year
 *
 * @example
 * // Are 2 September 2014 and 25 September 2014 in the same year?
 * var result = isSameYear(
 *   new Date(2014, 8, 2),
 *   new Date(2014, 8, 25)
 * )
 * //=> true
 */
function isSameYear (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getFullYear() === dateRight.getFullYear()
}

module.exports = isSameYear


/***/ }),

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Week Helpers
 * @summary Return the last day of a week for the given date.
 *
 * @description
 * Return the last day of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the last day of a week
 *
 * @example
 * // The last day of a week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sat Sep 06 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the last day of the week for 2 September 2014 11:55:00:
 * var result = lastDayOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn)

  date.setHours(0, 0, 0, 0)
  date.setDate(date.getDate() + diff)
  return date
}

module.exports = lastDayOfWeek


/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var getDaysInMonth = __webpack_require__(39)

/**
 * @category Month Helpers
 * @summary Set the month to the given date.
 *
 * @description
 * Set the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} month - the month of the new date
 * @returns {Date} the new date with the month setted
 *
 * @example
 * // Set February to 1 September 2014:
 * var result = setMonth(new Date(2014, 8, 1), 1)
 * //=> Sat Feb 01 2014 00:00:00
 */
function setMonth (dirtyDate, dirtyMonth) {
  var date = parse(dirtyDate)
  var month = Number(dirtyMonth)
  var year = date.getFullYear()
  var day = date.getDate()

  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(year, month, 15)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(month, Math.min(day, daysInMonth))
  return date
}

module.exports = setMonth


/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

module.exports = {
  addDays: __webpack_require__(19),
  addHours: __webpack_require__(158),
  addISOYears: __webpack_require__(159),
  addMilliseconds: __webpack_require__(20),
  addMinutes: __webpack_require__(161),
  addMonths: __webpack_require__(35),
  addQuarters: __webpack_require__(162),
  addSeconds: __webpack_require__(163),
  addWeeks: __webpack_require__(40),
  addYears: __webpack_require__(164),
  areRangesOverlapping: __webpack_require__(293),
  closestIndexTo: __webpack_require__(294),
  closestTo: __webpack_require__(295),
  compareAsc: __webpack_require__(22),
  compareDesc: __webpack_require__(41),
  differenceInCalendarDays: __webpack_require__(34),
  differenceInCalendarISOWeeks: __webpack_require__(296),
  differenceInCalendarISOYears: __webpack_require__(165),
  differenceInCalendarMonths: __webpack_require__(166),
  differenceInCalendarQuarters: __webpack_require__(297),
  differenceInCalendarWeeks: __webpack_require__(298),
  differenceInCalendarYears: __webpack_require__(168),
  differenceInDays: __webpack_require__(169),
  differenceInHours: __webpack_require__(299),
  differenceInISOYears: __webpack_require__(300),
  differenceInMilliseconds: __webpack_require__(36),
  differenceInMinutes: __webpack_require__(301),
  differenceInMonths: __webpack_require__(42),
  differenceInQuarters: __webpack_require__(302),
  differenceInSeconds: __webpack_require__(43),
  differenceInWeeks: __webpack_require__(303),
  differenceInYears: __webpack_require__(304),
  distanceInWords: __webpack_require__(171),
  distanceInWordsStrict: __webpack_require__(308),
  distanceInWordsToNow: __webpack_require__(309),
  eachDay: __webpack_require__(310),
  endOfDay: __webpack_require__(45),
  endOfHour: __webpack_require__(311),
  endOfISOWeek: __webpack_require__(312),
  endOfISOYear: __webpack_require__(313),
  endOfMinute: __webpack_require__(314),
  endOfMonth: __webpack_require__(173),
  endOfQuarter: __webpack_require__(315),
  endOfSecond: __webpack_require__(316),
  endOfToday: __webpack_require__(317),
  endOfTomorrow: __webpack_require__(318),
  endOfWeek: __webpack_require__(172),
  endOfYear: __webpack_require__(319),
  endOfYesterday: __webpack_require__(320),
  format: __webpack_require__(321),
  getDate: __webpack_require__(322),
  getDay: __webpack_require__(323),
  getDayOfYear: __webpack_require__(174),
  getDaysInMonth: __webpack_require__(39),
  getDaysInYear: __webpack_require__(324),
  getHours: __webpack_require__(325),
  getISODay: __webpack_require__(178),
  getISOWeek: __webpack_require__(46),
  getISOWeeksInYear: __webpack_require__(326),
  getISOYear: __webpack_require__(13),
  getMilliseconds: __webpack_require__(327),
  getMinutes: __webpack_require__(328),
  getMonth: __webpack_require__(329),
  getOverlappingDaysInRanges: __webpack_require__(330),
  getQuarter: __webpack_require__(167),
  getSeconds: __webpack_require__(331),
  getTime: __webpack_require__(332),
  getYear: __webpack_require__(333),
  isAfter: __webpack_require__(334),
  isBefore: __webpack_require__(335),
  isDate: __webpack_require__(38),
  isEqual: __webpack_require__(336),
  isFirstDayOfMonth: __webpack_require__(337),
  isFriday: __webpack_require__(338),
  isFuture: __webpack_require__(339),
  isLastDayOfMonth: __webpack_require__(340),
  isLeapYear: __webpack_require__(177),
  isMonday: __webpack_require__(341),
  isPast: __webpack_require__(342),
  isSameDay: __webpack_require__(343),
  isSameHour: __webpack_require__(179),
  isSameISOWeek: __webpack_require__(181),
  isSameISOYear: __webpack_require__(182),
  isSameMinute: __webpack_require__(183),
  isSameMonth: __webpack_require__(185),
  isSameQuarter: __webpack_require__(186),
  isSameSecond: __webpack_require__(188),
  isSameWeek: __webpack_require__(47),
  isSameYear: __webpack_require__(190),
  isSaturday: __webpack_require__(344),
  isSunday: __webpack_require__(345),
  isThisHour: __webpack_require__(346),
  isThisISOWeek: __webpack_require__(347),
  isThisISOYear: __webpack_require__(348),
  isThisMinute: __webpack_require__(349),
  isThisMonth: __webpack_require__(350),
  isThisQuarter: __webpack_require__(351),
  isThisSecond: __webpack_require__(352),
  isThisWeek: __webpack_require__(353),
  isThisYear: __webpack_require__(354),
  isThursday: __webpack_require__(355),
  isToday: __webpack_require__(356),
  isTomorrow: __webpack_require__(357),
  isTuesday: __webpack_require__(358),
  isValid: __webpack_require__(176),
  isWednesday: __webpack_require__(359),
  isWeekend: __webpack_require__(360),
  isWithinRange: __webpack_require__(361),
  isYesterday: __webpack_require__(362),
  lastDayOfISOWeek: __webpack_require__(363),
  lastDayOfISOYear: __webpack_require__(364),
  lastDayOfMonth: __webpack_require__(365),
  lastDayOfQuarter: __webpack_require__(366),
  lastDayOfWeek: __webpack_require__(191),
  lastDayOfYear: __webpack_require__(367),
  max: __webpack_require__(368),
  min: __webpack_require__(369),
  parse: __webpack_require__(0),
  setDate: __webpack_require__(370),
  setDay: __webpack_require__(371),
  setDayOfYear: __webpack_require__(372),
  setHours: __webpack_require__(373),
  setISODay: __webpack_require__(374),
  setISOWeek: __webpack_require__(375),
  setISOYear: __webpack_require__(160),
  setMilliseconds: __webpack_require__(376),
  setMinutes: __webpack_require__(377),
  setMonth: __webpack_require__(192),
  setQuarter: __webpack_require__(378),
  setSeconds: __webpack_require__(379),
  setYear: __webpack_require__(380),
  startOfDay: __webpack_require__(15),
  startOfHour: __webpack_require__(180),
  startOfISOWeek: __webpack_require__(14),
  startOfISOYear: __webpack_require__(21),
  startOfMinute: __webpack_require__(184),
  startOfMonth: __webpack_require__(381),
  startOfQuarter: __webpack_require__(187),
  startOfSecond: __webpack_require__(189),
  startOfToday: __webpack_require__(382),
  startOfTomorrow: __webpack_require__(383),
  startOfWeek: __webpack_require__(33),
  startOfYear: __webpack_require__(175),
  startOfYesterday: __webpack_require__(384),
  subDays: __webpack_require__(385),
  subHours: __webpack_require__(386),
  subISOYears: __webpack_require__(170),
  subMilliseconds: __webpack_require__(387),
  subMinutes: __webpack_require__(388),
  subMonths: __webpack_require__(389),
  subQuarters: __webpack_require__(390),
  subSeconds: __webpack_require__(391),
  subWeeks: __webpack_require__(392),
  subYears: __webpack_require__(393)
}


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Millisecond Helpers
 * @summary Add the specified number of milliseconds to the given date.
 *
 * @description
 * Add the specified number of milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be added
 * @returns {Date} the new date with the milliseconds added
 *
 * @example
 * // Add 750 milliseconds to 10 July 2014 12:45:30.000:
 * var result = addMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:30.750
 */
function addMilliseconds (dirtyDate, dirtyAmount) {
  var timestamp = parse(dirtyDate).getTime()
  var amount = Number(dirtyAmount)
  return new Date(timestamp + amount)
}

module.exports = addMilliseconds


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(13)
var startOfISOWeek = __webpack_require__(14)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of an ISO year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * var result = startOfISOYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  return date
}

module.exports = startOfISOYear


/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * var result = compareAsc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft < timeRight) {
    return -1
  } else if (timeLeft > timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareAsc


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Range Helpers
 * @summary Is the given date range overlapping with another date range?
 *
 * @description
 * Is the given date range overlapping with another date range?
 *
 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
 * @returns {Boolean} whether the date ranges are overlapping
 * @throws {Error} startDate of a date range cannot be after its endDate
 *
 * @example
 * // For overlapping date ranges:
 * areRangesOverlapping(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
 * )
 * //=> true
 *
 * @example
 * // For non-overlapping date ranges:
 * areRangesOverlapping(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
 * )
 * //=> false
 */
function areRangesOverlapping (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()

  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  return initialStartTime < comparedEndTime && comparedStartTime < initialEndTime
}

module.exports = areRangesOverlapping


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Return an index of the closest date from the array comparing to the given date.
 *
 * @description
 * Return an index of the closest date from the array comparing to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @returns {Number} an index of the date closest to the given date
 * @throws {TypeError} the second argument must be an instance of Array
 *
 * @example
 * // Which date is closer to 6 September 2015?
 * var dateToCompare = new Date(2015, 8, 6)
 * var datesArray = [
 *   new Date(2015, 0, 1),
 *   new Date(2016, 0, 1),
 *   new Date(2017, 0, 1)
 * ]
 * var result = closestIndexTo(dateToCompare, datesArray)
 * //=> 1
 */
function closestIndexTo (dirtyDateToCompare, dirtyDatesArray) {
  if (!(dirtyDatesArray instanceof Array)) {
    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
  }

  var dateToCompare = parse(dirtyDateToCompare)
  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate, index) {
    var currentDate = parse(dirtyDate)
    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = index
      minDistance = distance
    }
  })

  return result
}

module.exports = closestIndexTo


/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date[]|String[]|Number[]} datesArray - the array to search
 * @returns {Date} the date from the array closest to the given date
 * @throws {TypeError} the second argument must be an instance of Array
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * var dateToCompare = new Date(2015, 8, 6)
 * var result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
function closestTo (dirtyDateToCompare, dirtyDatesArray) {
  if (!(dirtyDatesArray instanceof Array)) {
    throw new TypeError(toString.call(dirtyDatesArray) + ' is not an instance of Array')
  }

  var dateToCompare = parse(dirtyDateToCompare)
  var timeToCompare = dateToCompare.getTime()

  var result
  var minDistance

  dirtyDatesArray.forEach(function (dirtyDate) {
    var currentDate = parse(dirtyDate)
    var distance = Math.abs(timeToCompare - currentDate.getTime())
    if (result === undefined || distance < minDistance) {
      result = currentDate
      minDistance = distance
    }
  })

  return result
}

module.exports = closestTo


/***/ }),

/***/ 296:
/***/ (function(module, exports, __webpack_require__) {

var startOfISOWeek = __webpack_require__(14)

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the number of calendar ISO weeks between the given dates.
 *
 * @description
 * Get the number of calendar ISO weeks between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar ISO weeks
 *
 * @example
 * // How many calendar ISO weeks are between 6 July 2014 and 21 July 2014?
 * var result = differenceInCalendarISOWeeks(
 *   new Date(2014, 6, 21),
 *   new Date(2014, 6, 6)
 * )
 * //=> 3
 */
function differenceInCalendarISOWeeks (dirtyDateLeft, dirtyDateRight) {
  var startOfISOWeekLeft = startOfISOWeek(dirtyDateLeft)
  var startOfISOWeekRight = startOfISOWeek(dirtyDateRight)

  var timestampLeft = startOfISOWeekLeft.getTime() -
    startOfISOWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfISOWeekRight.getTime() -
    startOfISOWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}

module.exports = differenceInCalendarISOWeeks


/***/ }),

/***/ 297:
/***/ (function(module, exports, __webpack_require__) {

var getQuarter = __webpack_require__(167)
var parse = __webpack_require__(0)

/**
 * @category Quarter Helpers
 * @summary Get the number of calendar quarters between the given dates.
 *
 * @description
 * Get the number of calendar quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar quarters
 *
 * @example
 * // How many calendar quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInCalendarQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 3
 */
function differenceInCalendarQuarters (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var yearDiff = dateLeft.getFullYear() - dateRight.getFullYear()
  var quarterDiff = getQuarter(dateLeft) - getQuarter(dateRight)

  return yearDiff * 4 + quarterDiff
}

module.exports = differenceInCalendarQuarters


/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(33)

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category Week Helpers
 * @summary Get the number of calendar weeks between the given dates.
 *
 * @description
 * Get the number of calendar weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Number} the number of calendar weeks
 *
 * @example
 * // How many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 3
 *
 * @example
 * // If the week starts on Monday,
 * // how many calendar weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInCalendarWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5),
 *   {weekStartsOn: 1}
 * )
 * //=> 2
 */
function differenceInCalendarWeeks (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var startOfWeekLeft = startOfWeek(dirtyDateLeft, dirtyOptions)
  var startOfWeekRight = startOfWeek(dirtyDateRight, dirtyOptions)

  var timestampLeft = startOfWeekLeft.getTime() -
    startOfWeekLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfWeekRight.getTime() -
    startOfWeekRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_WEEK)
}

module.exports = differenceInCalendarWeeks


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(36)

var MILLISECONDS_IN_HOUR = 3600000

/**
 * @category Hour Helpers
 * @summary Get the number of hours between the given dates.
 *
 * @description
 * Get the number of hours between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of hours
 *
 * @example
 * // How many hours are between 2 July 2014 06:50:00 and 2 July 2014 19:00:00?
 * var result = differenceInHours(
 *   new Date(2014, 6, 2, 19, 0),
 *   new Date(2014, 6, 2, 6, 50)
 * )
 * //=> 12
 */
function differenceInHours (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_HOUR
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInHours


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var differenceInCalendarISOYears = __webpack_require__(165)
var compareAsc = __webpack_require__(22)
var subISOYears = __webpack_require__(170)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of full ISO week-numbering years between the given dates.
 *
 * @description
 * Get the number of full ISO week-numbering years between the given dates.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full ISO week-numbering years
 *
 * @example
 * // How many full ISO week-numbering years are between 1 January 2010 and 1 January 2012?
 * var result = differenceInISOYears(
 *   new Date(2012, 0, 1),
 *   new Date(2010, 0, 1)
 * )
 * //=> 1
 */
function differenceInISOYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarISOYears(dateLeft, dateRight))
  dateLeft = subISOYears(dateLeft, sign * difference)

  // Math.abs(diff in full ISO years - diff in calendar ISO years) === 1
  // if last calendar ISO year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastISOYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastISOYearNotFull)
}

module.exports = differenceInISOYears


/***/ }),

/***/ 301:
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(36)

var MILLISECONDS_IN_MINUTE = 60000

/**
 * @category Minute Helpers
 * @summary Get the number of minutes between the given dates.
 *
 * @description
 * Get the number of minutes between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of minutes
 *
 * @example
 * // How many minutes are between 2 July 2014 12:07:59 and 2 July 2014 12:20:00?
 * var result = differenceInMinutes(
 *   new Date(2014, 6, 2, 12, 20, 0),
 *   new Date(2014, 6, 2, 12, 7, 59)
 * )
 * //=> 12
 */
function differenceInMinutes (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / MILLISECONDS_IN_MINUTE
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInMinutes


/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

var differenceInMonths = __webpack_require__(42)

/**
 * @category Quarter Helpers
 * @summary Get the number of full quarters between the given dates.
 *
 * @description
 * Get the number of full quarters between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full quarters
 *
 * @example
 * // How many full quarters are between 31 December 2013 and 2 July 2014?
 * var result = differenceInQuarters(
 *   new Date(2014, 6, 2),
 *   new Date(2013, 11, 31)
 * )
 * //=> 2
 */
function differenceInQuarters (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMonths(dirtyDateLeft, dirtyDateRight) / 3
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInQuarters


/***/ }),

/***/ 303:
/***/ (function(module, exports, __webpack_require__) {

var differenceInDays = __webpack_require__(169)

/**
 * @category Week Helpers
 * @summary Get the number of full weeks between the given dates.
 *
 * @description
 * Get the number of full weeks between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full weeks
 *
 * @example
 * // How many full weeks are between 5 July 2014 and 20 July 2014?
 * var result = differenceInWeeks(
 *   new Date(2014, 6, 20),
 *   new Date(2014, 6, 5)
 * )
 * //=> 2
 */
function differenceInWeeks (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInDays(dirtyDateLeft, dirtyDateRight) / 7
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInWeeks


/***/ }),

/***/ 304:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var differenceInCalendarYears = __webpack_require__(168)
var compareAsc = __webpack_require__(22)

/**
 * @category Year Helpers
 * @summary Get the number of full years between the given dates.
 *
 * @description
 * Get the number of full years between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full years
 *
 * @example
 * // How many full years are between 31 December 2013 and 11 February 2015?
 * var result = differenceInYears(
 *   new Date(2015, 1, 11),
 *   new Date(2013, 11, 31)
 * )
 * //=> 1
 */
function differenceInYears (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarYears(dateLeft, dateRight))
  dateLeft.setFullYear(dateLeft.getFullYear() - sign * difference)

  // Math.abs(diff in full years - diff in calendar years) === 1 if last calendar year is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastYearNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastYearNotFull)
}

module.exports = differenceInYears


/***/ }),

/***/ 305:
/***/ (function(module, exports) {

function buildDistanceInWordsLocale () {
  var distanceInWordsLocale = {
    lessThanXSeconds: {
      one: 'less than a second',
      other: 'less than {{count}} seconds'
    },

    xSeconds: {
      one: '1 second',
      other: '{{count}} seconds'
    },

    halfAMinute: 'half a minute',

    lessThanXMinutes: {
      one: 'less than a minute',
      other: 'less than {{count}} minutes'
    },

    xMinutes: {
      one: '1 minute',
      other: '{{count}} minutes'
    },

    aboutXHours: {
      one: 'about 1 hour',
      other: 'about {{count}} hours'
    },

    xHours: {
      one: '1 hour',
      other: '{{count}} hours'
    },

    xDays: {
      one: '1 day',
      other: '{{count}} days'
    },

    aboutXMonths: {
      one: 'about 1 month',
      other: 'about {{count}} months'
    },

    xMonths: {
      one: '1 month',
      other: '{{count}} months'
    },

    aboutXYears: {
      one: 'about 1 year',
      other: 'about {{count}} years'
    },

    xYears: {
      one: '1 year',
      other: '{{count}} years'
    },

    overXYears: {
      one: 'over 1 year',
      other: 'over {{count}} years'
    },

    almostXYears: {
      one: 'almost 1 year',
      other: 'almost {{count}} years'
    }
  }

  function localize (token, count, options) {
    options = options || {}

    var result
    if (typeof distanceInWordsLocale[token] === 'string') {
      result = distanceInWordsLocale[token]
    } else if (count === 1) {
      result = distanceInWordsLocale[token].one
    } else {
      result = distanceInWordsLocale[token].other.replace('{{count}}', count)
    }

    if (options.addSuffix) {
      if (options.comparison > 0) {
        return 'in ' + result
      } else {
        return result + ' ago'
      }
    }

    return result
  }

  return {
    localize: localize
  }
}

module.exports = buildDistanceInWordsLocale


/***/ }),

/***/ 306:
/***/ (function(module, exports, __webpack_require__) {

var buildFormattingTokensRegExp = __webpack_require__(307)

function buildFormatLocale () {
  // Note: in English, the names of days of the week and months are capitalized.
  // If you are making a new locale based on this one, check if the same is true for the language you're working on.
  // Generally, formatted dates should look like they are in the middle of a sentence,
  // e.g. in Spanish language the weekdays and months should be in the lowercase.
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + 'st'
      case 2:
        return number + 'nd'
      case 3:
        return number + 'rd'
    }
  }
  return number + 'th'
}

module.exports = buildFormatLocale


/***/ }),

/***/ 307:
/***/ (function(module, exports) {

var commonFormatterKeys = [
  'M', 'MM', 'Q', 'D', 'DD', 'DDD', 'DDDD', 'd',
  'E', 'W', 'WW', 'YY', 'YYYY', 'GG', 'GGGG',
  'H', 'HH', 'h', 'hh', 'm', 'mm',
  's', 'ss', 'S', 'SS', 'SSS',
  'Z', 'ZZ', 'X', 'x'
]

function buildFormattingTokensRegExp (formatters) {
  var formatterKeys = []
  for (var key in formatters) {
    if (formatters.hasOwnProperty(key)) {
      formatterKeys.push(key)
    }
  }

  var formattingTokens = commonFormatterKeys
    .concat(formatterKeys)
    .sort()
    .reverse()
  var formattingTokensRegExp = new RegExp(
    '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
  )

  return formattingTokensRegExp
}

module.exports = buildFormattingTokensRegExp


/***/ }),

/***/ 308:
/***/ (function(module, exports, __webpack_require__) {

var compareDesc = __webpack_require__(41)
var parse = __webpack_require__(0)
var differenceInSeconds = __webpack_require__(43)
var enLocale = __webpack_require__(44)

var MINUTES_IN_DAY = 1440
var MINUTES_IN_MONTH = 43200
var MINUTES_IN_YEAR = 525600

/**
 * @category Common Helpers
 * @summary Return the distance between the given dates in words.
 *
 * @description
 * Return the distance between the given dates in words, using strict units.
 * This is like `distanceInWords`, but does not use helpers like 'almost', 'over',
 * 'less than' and the like.
 *
 * | Distance between dates | Result              |
 * |------------------------|---------------------|
 * | 0 ... 59 secs          | [0..59] seconds     |
 * | 1 ... 59 mins          | [1..59] minutes     |
 * | 1 ... 23 hrs           | [1..23] hours       |
 * | 1 ... 29 days          | [1..29] days        |
 * | 1 ... 11 months        | [1..11] months      |
 * | 1 ... N years          | [1..N]  years       |
 *
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @param {Date|String|Number} date - the other date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.addSuffix=false] - result indicates if the second date is earlier or later than the first
 * @param {'s'|'m'|'h'|'d'|'M'|'Y'} [options.unit] - if specified, will force a unit
 * @param {'floor'|'ceil'|'round'} [options.partialMethod='floor'] - which way to round partial units
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // What is the distance between 2 July 2014 and 1 January 2015?
 * var result = distanceInWordsStrict(
 *   new Date(2014, 6, 2),
 *   new Date(2015, 0, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // What is the distance between 1 January 2015 00:00:15
 * // and 1 January 2015 00:00:00?
 * var result = distanceInWordsStrict(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   new Date(2015, 0, 1, 0, 0, 0),
 * )
 * //=> '15 seconds'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, with a suffix?
 * var result = distanceInWordsStrict(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> '1 year ago'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 1 January 2015, in minutes?
 * var result = distanceInWordsStrict(
 *   new Date(2016, 0, 1),
 *   new Date(2015, 0, 1),
 *   {unit: 'm'}
 * )
 * //=> '525600 minutes'
 *
 * @example
 * // What is the distance from 1 January 2016
 * // to 28 January 2015, in months, rounded up?
 * var result = distanceInWordsStrict(
 *   new Date(2015, 0, 28),
 *   new Date(2015, 0, 1),
 *   {unit: 'M', partialMethod: 'ceil'}
 * )
 * //=> '1 month'
 *
 * @example
 * // What is the distance between 1 August 2016 and 1 January 2015 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWordsStrict(
 *   new Date(2016, 7, 1),
 *   new Date(2015, 0, 1),
 *   {locale: eoLocale}
 * )
 * //=> '1 jaro'
 */
function distanceInWordsStrict (dirtyDateToCompare, dirtyDate, dirtyOptions) {
  var options = dirtyOptions || {}

  var comparison = compareDesc(dirtyDateToCompare, dirtyDate)

  var locale = options.locale
  var localize = enLocale.distanceInWords.localize
  if (locale && locale.distanceInWords && locale.distanceInWords.localize) {
    localize = locale.distanceInWords.localize
  }

  var localizeOptions = {
    addSuffix: Boolean(options.addSuffix),
    comparison: comparison
  }

  var dateLeft, dateRight
  if (comparison > 0) {
    dateLeft = parse(dirtyDateToCompare)
    dateRight = parse(dirtyDate)
  } else {
    dateLeft = parse(dirtyDate)
    dateRight = parse(dirtyDateToCompare)
  }

  var unit
  var mathPartial = Math[options.partialMethod ? String(options.partialMethod) : 'floor']
  var seconds = differenceInSeconds(dateRight, dateLeft)
  var offset = dateRight.getTimezoneOffset() - dateLeft.getTimezoneOffset()
  var minutes = mathPartial(seconds / 60) - offset
  var hours, days, months, years

  if (options.unit) {
    unit = String(options.unit)
  } else {
    if (minutes < 1) {
      unit = 's'
    } else if (minutes < 60) {
      unit = 'm'
    } else if (minutes < MINUTES_IN_DAY) {
      unit = 'h'
    } else if (minutes < MINUTES_IN_MONTH) {
      unit = 'd'
    } else if (minutes < MINUTES_IN_YEAR) {
      unit = 'M'
    } else {
      unit = 'Y'
    }
  }

  // 0 up to 60 seconds
  if (unit === 's') {
    return localize('xSeconds', seconds, localizeOptions)

  // 1 up to 60 mins
  } else if (unit === 'm') {
    return localize('xMinutes', minutes, localizeOptions)

  // 1 up to 24 hours
  } else if (unit === 'h') {
    hours = mathPartial(minutes / 60)
    return localize('xHours', hours, localizeOptions)

  // 1 up to 30 days
  } else if (unit === 'd') {
    days = mathPartial(minutes / MINUTES_IN_DAY)
    return localize('xDays', days, localizeOptions)

  // 1 up to 12 months
  } else if (unit === 'M') {
    months = mathPartial(minutes / MINUTES_IN_MONTH)
    return localize('xMonths', months, localizeOptions)

  // 1 year up to max Date
  } else if (unit === 'Y') {
    years = mathPartial(minutes / MINUTES_IN_YEAR)
    return localize('xYears', years, localizeOptions)
  }

  throw new Error('Unknown unit: ' + unit)
}

module.exports = distanceInWordsStrict


/***/ }),

/***/ 309:
/***/ (function(module, exports, __webpack_require__) {

var distanceInWords = __webpack_require__(171)

/**
 * @category Common Helpers
 * @summary Return the distance between the given date and now in words.
 *
 * @description
 * Return the distance between the given date and now in words.
 *
 * | Distance to now                                                   | Result              |
 * |-------------------------------------------------------------------|---------------------|
 * | 0 ... 30 secs                                                     | less than a minute  |
 * | 30 secs ... 1 min 30 secs                                         | 1 minute            |
 * | 1 min 30 secs ... 44 mins 30 secs                                 | [2..44] minutes     |
 * | 44 mins ... 30 secs ... 89 mins 30 secs                           | about 1 hour        |
 * | 89 mins 30 secs ... 23 hrs 59 mins 30 secs                        | about [2..24] hours |
 * | 23 hrs 59 mins 30 secs ... 41 hrs 59 mins 30 secs                 | 1 day               |
 * | 41 hrs 59 mins 30 secs ... 29 days 23 hrs 59 mins 30 secs         | [2..30] days        |
 * | 29 days 23 hrs 59 mins 30 secs ... 44 days 23 hrs 59 mins 30 secs | about 1 month       |
 * | 44 days 23 hrs 59 mins 30 secs ... 59 days 23 hrs 59 mins 30 secs | about 2 months      |
 * | 59 days 23 hrs 59 mins 30 secs ... 1 yr                           | [2..12] months      |
 * | 1 yr ... 1 yr 3 months                                            | about 1 year        |
 * | 1 yr 3 months ... 1 yr 9 month s                                  | over 1 year         |
 * | 1 yr 9 months ... 2 yrs                                           | almost 2 years      |
 * | N yrs ... N yrs 3 months                                          | about N years       |
 * | N yrs 3 months ... N yrs 9 months                                 | over N years        |
 * | N yrs 9 months ... N+1 yrs                                        | almost N+1 years    |
 *
 * With `options.includeSeconds == true`:
 * | Distance to now     | Result               |
 * |---------------------|----------------------|
 * | 0 secs ... 5 secs   | less than 5 seconds  |
 * | 5 secs ... 10 secs  | less than 10 seconds |
 * | 10 secs ... 20 secs | less than 20 seconds |
 * | 20 secs ... 40 secs | half a minute        |
 * | 40 secs ... 60 secs | less than a minute   |
 * | 60 secs ... 90 secs | 1 minute             |
 *
 * @param {Date|String|Number} date - the given date
 * @param {Object} [options] - the object with options
 * @param {Boolean} [options.includeSeconds=false] - distances less than a minute are more detailed
 * @param {Boolean} [options.addSuffix=false] - result specifies if the second date is earlier or later than the first
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the distance in words
 *
 * @example
 * // If today is 1 January 2015, what is the distance to 2 July 2014?
 * var result = distanceInWordsToNow(
 *   new Date(2014, 6, 2)
 * )
 * //=> '6 months'
 *
 * @example
 * // If now is 1 January 2015 00:00:00,
 * // what is the distance to 1 January 2015 00:00:15, including seconds?
 * var result = distanceInWordsToNow(
 *   new Date(2015, 0, 1, 0, 0, 15),
 *   {includeSeconds: true}
 * )
 * //=> 'less than 20 seconds'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 January 2016, with a suffix?
 * var result = distanceInWordsToNow(
 *   new Date(2016, 0, 1),
 *   {addSuffix: true}
 * )
 * //=> 'in about 1 year'
 *
 * @example
 * // If today is 1 January 2015,
 * // what is the distance to 1 August 2016 in Esperanto?
 * var eoLocale = require('date-fns/locale/eo')
 * var result = distanceInWordsToNow(
 *   new Date(2016, 7, 1),
 *   {locale: eoLocale}
 * )
 * //=> 'pli ol 1 jaro'
 */
function distanceInWordsToNow (dirtyDate, dirtyOptions) {
  return distanceInWords(Date.now(), dirtyDate, dirtyOptions)
}

module.exports = distanceInWordsToNow


/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Day Helpers
 * @summary Return the array of dates within the specified range.
 *
 * @description
 * Return the array of dates within the specified range.
 *
 * @param {Date|String|Number} startDate - the first date
 * @param {Date|String|Number} endDate - the last date
 * @param {Number} [step=1] - the step between each day
 * @returns {Date[]} the array with starts of days from the day of startDate to the day of endDate
 * @throws {Error} startDate cannot be after endDate
 *
 * @example
 * // Each day between 6 October 2014 and 10 October 2014:
 * var result = eachDay(
 *   new Date(2014, 9, 6),
 *   new Date(2014, 9, 10)
 * )
 * //=> [
 * //   Mon Oct 06 2014 00:00:00,
 * //   Tue Oct 07 2014 00:00:00,
 * //   Wed Oct 08 2014 00:00:00,
 * //   Thu Oct 09 2014 00:00:00,
 * //   Fri Oct 10 2014 00:00:00
 * // ]
 */
function eachDay (dirtyStartDate, dirtyEndDate, dirtyStep) {
  var startDate = parse(dirtyStartDate)
  var endDate = parse(dirtyEndDate)
  var step = dirtyStep !== undefined ? dirtyStep : 1

  var endTime = endDate.getTime()

  if (startDate.getTime() > endTime) {
    throw new Error('The first date cannot be after the second date')
  }

  var dates = []

  var currentDate = startDate
  currentDate.setHours(0, 0, 0, 0)

  while (currentDate.getTime() <= endTime) {
    dates.push(parse(currentDate))
    currentDate.setDate(currentDate.getDate() + step)
  }

  return dates
}

module.exports = eachDay


/***/ }),

/***/ 311:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Hour Helpers
 * @summary Return the end of an hour for the given date.
 *
 * @description
 * Return the end of an hour for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an hour
 *
 * @example
 * // The end of an hour for 2 September 2014 11:55:00:
 * var result = endOfHour(new Date(2014, 8, 2, 11, 55))
 * //=> Tue Sep 02 2014 11:59:59.999
 */
function endOfHour (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMinutes(59, 59, 999)
  return date
}

module.exports = endOfHour


/***/ }),

/***/ 312:
/***/ (function(module, exports, __webpack_require__) {

var endOfWeek = __webpack_require__(172)

/**
 * @category ISO Week Helpers
 * @summary Return the end of an ISO week for the given date.
 *
 * @description
 * Return the end of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week
 *
 * @example
 * // The end of an ISO week for 2 September 2014 11:55:00:
 * var result = endOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 23:59:59.999
 */
function endOfISOWeek (dirtyDate) {
  return endOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = endOfISOWeek


/***/ }),

/***/ 313:
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(13)
var startOfISOWeek = __webpack_require__(14)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the end of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the end of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 *
 * @example
 * // The end of an ISO week-numbering year for 2 July 2005:
 * var result = endOfISOYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 23:59:59.999
 */
function endOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuaryOfNextYear = new Date(0)
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4)
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuaryOfNextYear)
  date.setMilliseconds(date.getMilliseconds() - 1)
  return date
}

module.exports = endOfISOYear


/***/ }),

/***/ 314:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Minute Helpers
 * @summary Return the end of a minute for the given date.
 *
 * @description
 * Return the end of a minute for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a minute
 *
 * @example
 * // The end of a minute for 1 December 2014 22:15:45.400:
 * var result = endOfMinute(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:59.999
 */
function endOfMinute (dirtyDate) {
  var date = parse(dirtyDate)
  date.setSeconds(59, 999)
  return date
}

module.exports = endOfMinute


/***/ }),

/***/ 315:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Quarter Helpers
 * @summary Return the end of a year quarter for the given date.
 *
 * @description
 * Return the end of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a quarter
 *
 * @example
 * // The end of a quarter for 2 September 2014 11:55:00:
 * var result = endOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 23:59:59.999
 */
function endOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setMonth(month, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfQuarter


/***/ }),

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Second Helpers
 * @summary Return the end of a second for the given date.
 *
 * @description
 * Return the end of a second for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a second
 *
 * @example
 * // The end of a second for 1 December 2014 22:15:45.400:
 * var result = endOfSecond(new Date(2014, 11, 1, 22, 15, 45, 400))
 * //=> Mon Dec 01 2014 22:15:45.999
 */
function endOfSecond (dirtyDate) {
  var date = parse(dirtyDate)
  date.setMilliseconds(999)
  return date
}

module.exports = endOfSecond


/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

var endOfDay = __webpack_require__(45)

/**
 * @category Day Helpers
 * @summary Return the end of today.
 *
 * @description
 * Return the end of today.
 *
 * @returns {Date} the end of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfToday()
 * //=> Mon Oct 6 2014 23:59:59.999
 */
function endOfToday () {
  return endOfDay(new Date())
}

module.exports = endOfToday


/***/ }),

/***/ 318:
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the end of tomorrow.
 *
 * @description
 * Return the end of tomorrow.
 *
 * @returns {Date} the end of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfTomorrow()
 * //=> Tue Oct 7 2014 23:59:59.999
 */
function endOfTomorrow () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day + 1)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfTomorrow


/***/ }),

/***/ 319:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Year Helpers
 * @summary Return the end of a year for the given date.
 *
 * @description
 * Return the end of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a year
 *
 * @example
 * // The end of a year for 2 September 2014 11:55:00:
 * var result = endOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 23:59:59.999
 */
function endOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setFullYear(year + 1, 0, 0)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfYear


/***/ }),

/***/ 320:
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the end of yesterday.
 *
 * @description
 * Return the end of yesterday.
 *
 * @returns {Date} the end of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * var result = endOfYesterday()
 * //=> Sun Oct 5 2014 23:59:59.999
 */
function endOfYesterday () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day - 1)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfYesterday


/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

var getDayOfYear = __webpack_require__(174)
var getISOWeek = __webpack_require__(46)
var getISOYear = __webpack_require__(13)
var parse = __webpack_require__(0)
var isValid = __webpack_require__(176)
var enLocale = __webpack_require__(44)

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * The characters wrapped in square brackets are escaped.
 *
 * The result may vary by locale.
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @param {Object} [options] - the object with options
 * @param {Object} [options.locale=enLocale] - the locale object
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * var eoLocale = require('date-fns/locale/eo')
 * var result = format(
 *   new Date(2014, 6, 2),
 *   'Do [de] MMMM YYYY',
 *   {locale: eoLocale}
 * )
 * //=> '2-a de julio 2014'
 */
function format (dirtyDate, dirtyFormatStr, dirtyOptions) {
  var formatStr = dirtyFormatStr ? String(dirtyFormatStr) : 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  var options = dirtyOptions || {}

  var locale = options.locale
  var localeFormatters = enLocale.format.formatters
  var formattingTokensRegExp = enLocale.format.formattingTokensRegExp
  if (locale && locale.format && locale.format.formatters) {
    localeFormatters = locale.format.formatters

    if (locale.format.formattingTokensRegExp) {
      formattingTokensRegExp = locale.format.formattingTokensRegExp
    }
  }

  var date = parse(dirtyDate)

  if (!isValid(date)) {
    return 'Invalid Date'
  }

  var formatFn = buildFormatFn(formatStr, localeFormatters, formattingTokensRegExp)

  return formatFn(date)
}

var formatters = {
  // Month: 1, 2, ..., 12
  'M': function (date) {
    return date.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function (date) {
    return addLeadingZeros(date.getMonth() + 1, 2)
  },

  // Quarter: 1, 2, 3, 4
  'Q': function (date) {
    return Math.ceil((date.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function (date) {
    return date.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function (date) {
    return addLeadingZeros(date.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function (date) {
    return getDayOfYear(date)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function (date) {
    return addLeadingZeros(getDayOfYear(date), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function (date) {
    return date.getDay()
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function (date) {
    return date.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function (date) {
    return getISOWeek(date)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function (date) {
    return addLeadingZeros(getISOWeek(date), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function (date) {
    return addLeadingZeros(date.getFullYear(), 4)
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function (date) {
    return String(getISOYear(date)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function (date) {
    return getISOYear(date)
  },

  // Hour: 0, 1, ... 23
  'H': function (date) {
    return date.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function (date) {
    return addLeadingZeros(date.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function (date) {
    var hours = date.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function (date) {
    return addLeadingZeros(formatters['h'](date), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function (date) {
    return date.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function (date) {
    return addLeadingZeros(date.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function (date) {
    return date.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function (date) {
    return addLeadingZeros(date.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function (date) {
    return Math.floor(date.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function (date) {
    return addLeadingZeros(Math.floor(date.getMilliseconds() / 10), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function (date) {
    return addLeadingZeros(date.getMilliseconds(), 3)
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function (date) {
    return formatTimezone(date.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function (date) {
    return formatTimezone(date.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function (date) {
    return Math.floor(date.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function (date) {
    return date.getTime()
  }
}

function buildFormatFn (formatStr, localeFormatters, formattingTokensRegExp) {
  var array = formatStr.match(formattingTokensRegExp)
  var length = array.length

  var i
  var formatter
  for (i = 0; i < length; i++) {
    formatter = localeFormatters[array[i]] || formatters[array[i]]
    if (formatter) {
      array[i] = formatter
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (date) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i](date, formatters)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

function addLeadingZeros (number, targetLength) {
  var output = Math.abs(number).toString()
  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

module.exports = format


/***/ }),

/***/ 322:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Day Helpers
 * @summary Get the day of the month of the given date.
 *
 * @description
 * Get the day of the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of month
 *
 * @example
 * // Which day of the month is 29 February 2012?
 * var result = getDate(new Date(2012, 1, 29))
 * //=> 29
 */
function getDate (dirtyDate) {
  var date = parse(dirtyDate)
  var dayOfMonth = date.getDate()
  return dayOfMonth
}

module.exports = getDate


/***/ }),

/***/ 323:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Weekday Helpers
 * @summary Get the day of the week of the given date.
 *
 * @description
 * Get the day of the week of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the day of week
 *
 * @example
 * // Which day of the week is 29 February 2012?
 * var result = getDay(new Date(2012, 1, 29))
 * //=> 3
 */
function getDay (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day
}

module.exports = getDay


/***/ }),

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

var isLeapYear = __webpack_require__(177)

/**
 * @category Year Helpers
 * @summary Get the number of days in a year of the given date.
 *
 * @description
 * Get the number of days in a year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a year
 *
 * @example
 * // How many days are in 2012?
 * var result = getDaysInYear(new Date(2012, 0, 1))
 * //=> 366
 */
function getDaysInYear (dirtyDate) {
  return isLeapYear(dirtyDate) ? 366 : 365
}

module.exports = getDaysInYear


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Hour Helpers
 * @summary Get the hours of the given date.
 *
 * @description
 * Get the hours of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the hours
 *
 * @example
 * // Get the hours of 29 February 2012 11:45:00:
 * var result = getHours(new Date(2012, 1, 29, 11, 45))
 * //=> 11
 */
function getHours (dirtyDate) {
  var date = parse(dirtyDate)
  var hours = date.getHours()
  return hours
}

module.exports = getHours


/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

var startOfISOYear = __webpack_require__(21)
var addWeeks = __webpack_require__(40)

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * @description
 * Get the number of weeks in an ISO week-numbering year of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of ISO weeks in a year
 *
 * @example
 * // How many weeks are in ISO week-numbering year 2015?
 * var result = getISOWeeksInYear(new Date(2015, 1, 11))
 * //=> 53
 */
function getISOWeeksInYear (dirtyDate) {
  var thisYear = startOfISOYear(dirtyDate)
  var nextYear = startOfISOYear(addWeeks(thisYear, 60))
  var diff = nextYear.valueOf() - thisYear.valueOf()
  // Round the number of weeks to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK)
}

module.exports = getISOWeeksInYear


/***/ }),

/***/ 327:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Millisecond Helpers
 * @summary Get the milliseconds of the given date.
 *
 * @description
 * Get the milliseconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the milliseconds
 *
 * @example
 * // Get the milliseconds of 29 February 2012 11:45:05.123:
 * var result = getMilliseconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 123
 */
function getMilliseconds (dirtyDate) {
  var date = parse(dirtyDate)
  var milliseconds = date.getMilliseconds()
  return milliseconds
}

module.exports = getMilliseconds


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Minute Helpers
 * @summary Get the minutes of the given date.
 *
 * @description
 * Get the minutes of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the minutes
 *
 * @example
 * // Get the minutes of 29 February 2012 11:45:05:
 * var result = getMinutes(new Date(2012, 1, 29, 11, 45, 5))
 * //=> 45
 */
function getMinutes (dirtyDate) {
  var date = parse(dirtyDate)
  var minutes = date.getMinutes()
  return minutes
}

module.exports = getMinutes


/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Month Helpers
 * @summary Get the month of the given date.
 *
 * @description
 * Get the month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the month
 *
 * @example
 * // Which month is 29 February 2012?
 * var result = getMonth(new Date(2012, 1, 29))
 * //=> 1
 */
function getMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  return month
}

module.exports = getMonth


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * var result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), {weekStartsOn: 1})
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek (dirtyDate, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0

  var date = parse(dirtyDate)
  var day = date.getDay()
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn

  date.setDate(date.getDate() - diff)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfWeek


/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

var MILLISECONDS_IN_DAY = 24 * 60 * 60 * 1000

/**
 * @category Range Helpers
 * @summary Get the number of days that overlap in two date ranges
 *
 * @description
 * Get the number of days that overlap in two date ranges
 *
 * @param {Date|String|Number} initialRangeStartDate - the start of the initial range
 * @param {Date|String|Number} initialRangeEndDate - the end of the initial range
 * @param {Date|String|Number} comparedRangeStartDate - the start of the range to compare it with
 * @param {Date|String|Number} comparedRangeEndDate - the end of the range to compare it with
 * @returns {Number} the number of days that overlap in two date ranges
 * @throws {Error} startDate of a date range cannot be after its endDate
 *
 * @example
 * // For overlapping date ranges adds 1 for each started overlapping day:
 * getOverlappingDaysInRanges(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 17), new Date(2014, 0, 21)
 * )
 * //=> 3
 *
 * @example
 * // For non-overlapping date ranges returns 0:
 * getOverlappingDaysInRanges(
 *   new Date(2014, 0, 10), new Date(2014, 0, 20), new Date(2014, 0, 21), new Date(2014, 0, 22)
 * )
 * //=> 0
 */
function getOverlappingDaysInRanges (dirtyInitialRangeStartDate, dirtyInitialRangeEndDate, dirtyComparedRangeStartDate, dirtyComparedRangeEndDate) {
  var initialStartTime = parse(dirtyInitialRangeStartDate).getTime()
  var initialEndTime = parse(dirtyInitialRangeEndDate).getTime()
  var comparedStartTime = parse(dirtyComparedRangeStartDate).getTime()
  var comparedEndTime = parse(dirtyComparedRangeEndDate).getTime()

  if (initialStartTime > initialEndTime || comparedStartTime > comparedEndTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  var isOverlapping = initialStartTime < comparedEndTime && comparedStartTime < initialEndTime

  if (!isOverlapping) {
    return 0
  }

  var overlapStartDate = comparedStartTime < initialStartTime
    ? initialStartTime
    : comparedStartTime

  var overlapEndDate = comparedEndTime > initialEndTime
    ? initialEndTime
    : comparedEndTime

  var differenceInMs = overlapEndDate - overlapStartDate

  return Math.ceil(differenceInMs / MILLISECONDS_IN_DAY)
}

module.exports = getOverlappingDaysInRanges


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Second Helpers
 * @summary Get the seconds of the given date.
 *
 * @description
 * Get the seconds of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the seconds
 *
 * @example
 * // Get the seconds of 29 February 2012 11:45:05.123:
 * var result = getSeconds(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 5
 */
function getSeconds (dirtyDate) {
  var date = parse(dirtyDate)
  var seconds = date.getSeconds()
  return seconds
}

module.exports = getSeconds


/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Timestamp Helpers
 * @summary Get the milliseconds timestamp of the given date.
 *
 * @description
 * Get the milliseconds timestamp of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the timestamp
 *
 * @example
 * // Get the timestamp of 29 February 2012 11:45:05.123:
 * var result = getTime(new Date(2012, 1, 29, 11, 45, 5, 123))
 * //=> 1330515905123
 */
function getTime (dirtyDate) {
  var date = parse(dirtyDate)
  var timestamp = date.getTime()
  return timestamp
}

module.exports = getTime


/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Year Helpers
 * @summary Get the year of the given date.
 *
 * @description
 * Get the year of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the year
 *
 * @example
 * // Which year is 2 July 2014?
 * var result = getYear(new Date(2014, 6, 2))
 * //=> 2014
 */
function getYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  return year
}

module.exports = getYear


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() > dateToCompare.getTime()
}

module.exports = isAfter


/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Is the first date before the second one?
 *
 * @description
 * Is the first date before the second one?
 *
 * @param {Date|String|Number} date - the date that should be before the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is before the second date
 *
 * @example
 * // Is 10 July 1989 before 11 February 1987?
 * var result = isBefore(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> false
 */
function isBefore (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() < dateToCompare.getTime()
}

module.exports = isBefore


/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Are the given dates equal?
 *
 * @description
 * Are the given dates equal?
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Boolean} the dates are equal
 *
 * @example
 * // Are 2 July 2014 06:30:45.000 and 2 July 2014 06:30:45.500 equal?
 * var result = isEqual(
 *   new Date(2014, 6, 2, 6, 30, 45, 0)
 *   new Date(2014, 6, 2, 6, 30, 45, 500)
 * )
 * //=> false
 */
function isEqual (dirtyLeftDate, dirtyRightDate) {
  var dateLeft = parse(dirtyLeftDate)
  var dateRight = parse(dirtyRightDate)
  return dateLeft.getTime() === dateRight.getTime()
}

module.exports = isEqual


/***/ }),

/***/ 337:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Month Helpers
 * @summary Is the given date the first day of a month?
 *
 * @description
 * Is the given date the first day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the first day of a month
 *
 * @example
 * // Is 1 September 2014 the first day of a month?
 * var result = isFirstDayOfMonth(new Date(2014, 8, 1))
 * //=> true
 */
function isFirstDayOfMonth (dirtyDate) {
  return parse(dirtyDate).getDate() === 1
}

module.exports = isFirstDayOfMonth


/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Weekday Helpers
 * @summary Is the given date Friday?
 *
 * @description
 * Is the given date Friday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Friday
 *
 * @example
 * // Is 26 September 2014 Friday?
 * var result = isFriday(new Date(2014, 8, 26))
 * //=> true
 */
function isFriday (dirtyDate) {
  return parse(dirtyDate).getDay() === 5
}

module.exports = isFriday


/***/ }),

/***/ 339:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Is the given date in the future?
 *
 * @description
 * Is the given date in the future?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * var result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */
function isFuture (dirtyDate) {
  return parse(dirtyDate).getTime() > new Date().getTime()
}

module.exports = isFuture


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(15)

var MILLISECONDS_IN_MINUTE = 60000
var MILLISECONDS_IN_DAY = 86400000

/**
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * var result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 */
function differenceInCalendarDays (dirtyDateLeft, dirtyDateRight) {
  var startOfDayLeft = startOfDay(dirtyDateLeft)
  var startOfDayRight = startOfDay(dirtyDateRight)

  var timestampLeft = startOfDayLeft.getTime() -
    startOfDayLeft.getTimezoneOffset() * MILLISECONDS_IN_MINUTE
  var timestampRight = startOfDayRight.getTime() -
    startOfDayRight.getTimezoneOffset() * MILLISECONDS_IN_MINUTE

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a day is not constant
  // (e.g. it's different in the day of the daylight saving time clock shift)
  return Math.round((timestampLeft - timestampRight) / MILLISECONDS_IN_DAY)
}

module.exports = differenceInCalendarDays


/***/ }),

/***/ 340:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var endOfDay = __webpack_require__(45)
var endOfMonth = __webpack_require__(173)

/**
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */
function isLastDayOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  return endOfDay(date).getTime() === endOfMonth(date).getTime()
}

module.exports = isLastDayOfMonth


/***/ }),

/***/ 341:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Weekday Helpers
 * @summary Is the given date Monday?
 *
 * @description
 * Is the given date Monday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Monday
 *
 * @example
 * // Is 22 September 2014 Monday?
 * var result = isMonday(new Date(2014, 8, 22))
 * //=> true
 */
function isMonday (dirtyDate) {
  return parse(dirtyDate).getDay() === 1
}

module.exports = isMonday


/***/ }),

/***/ 342:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Is the given date in the past?
 *
 * @description
 * Is the given date in the past?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the past
 *
 * @example
 * // If today is 6 October 2014, is 2 July 2014 in the past?
 * var result = isPast(new Date(2014, 6, 2))
 * //=> true
 */
function isPast (dirtyDate) {
  return parse(dirtyDate).getTime() < new Date().getTime()
}

module.exports = isPast


/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(15)

/**
 * @category Day Helpers
 * @summary Are the given dates in the same day?
 *
 * @description
 * Are the given dates in the same day?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * var result = isSameDay(
 *   new Date(2014, 8, 4, 6, 0),
 *   new Date(2014, 8, 4, 18, 0)
 * )
 * //=> true
 */
function isSameDay (dirtyDateLeft, dirtyDateRight) {
  var dateLeftStartOfDay = startOfDay(dirtyDateLeft)
  var dateRightStartOfDay = startOfDay(dirtyDateRight)

  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime()
}

module.exports = isSameDay


/***/ }),

/***/ 344:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Weekday Helpers
 * @summary Is the given date Saturday?
 *
 * @description
 * Is the given date Saturday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Saturday
 *
 * @example
 * // Is 27 September 2014 Saturday?
 * var result = isSaturday(new Date(2014, 8, 27))
 * //=> true
 */
function isSaturday (dirtyDate) {
  return parse(dirtyDate).getDay() === 6
}

module.exports = isSaturday


/***/ }),

/***/ 345:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Weekday Helpers
 * @summary Is the given date Sunday?
 *
 * @description
 * Is the given date Sunday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Sunday
 *
 * @example
 * // Is 21 September 2014 Sunday?
 * var result = isSunday(new Date(2014, 8, 21))
 * //=> true
 */
function isSunday (dirtyDate) {
  return parse(dirtyDate).getDay() === 0
}

module.exports = isSunday


/***/ }),

/***/ 346:
/***/ (function(module, exports, __webpack_require__) {

var isSameHour = __webpack_require__(179)

/**
 * @category Hour Helpers
 * @summary Is the given date in the same hour as the current date?
 *
 * @description
 * Is the given date in the same hour as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this hour
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:00:00 in this hour?
 * var result = isThisHour(new Date(2014, 8, 25, 18))
 * //=> true
 */
function isThisHour (dirtyDate) {
  return isSameHour(new Date(), dirtyDate)
}

module.exports = isThisHour


/***/ }),

/***/ 347:
/***/ (function(module, exports, __webpack_require__) {

var isSameISOWeek = __webpack_require__(181)

/**
 * @category ISO Week Helpers
 * @summary Is the given date in the same ISO week as the current date?
 *
 * @description
 * Is the given date in the same ISO week as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week
 *
 * @example
 * // If today is 25 September 2014, is 22 September 2014 in this ISO week?
 * var result = isThisISOWeek(new Date(2014, 8, 22))
 * //=> true
 */
function isThisISOWeek (dirtyDate) {
  return isSameISOWeek(new Date(), dirtyDate)
}

module.exports = isThisISOWeek


/***/ }),

/***/ 348:
/***/ (function(module, exports, __webpack_require__) {

var isSameISOYear = __webpack_require__(182)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Is the given date in the same ISO week-numbering year as the current date?
 *
 * @description
 * Is the given date in the same ISO week-numbering year as the current date?
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this ISO week-numbering year
 *
 * @example
 * // If today is 25 September 2014,
 * // is 30 December 2013 in this ISO week-numbering year?
 * var result = isThisISOYear(new Date(2013, 11, 30))
 * //=> true
 */
function isThisISOYear (dirtyDate) {
  return isSameISOYear(new Date(), dirtyDate)
}

module.exports = isThisISOYear


/***/ }),

/***/ 349:
/***/ (function(module, exports, __webpack_require__) {

var isSameMinute = __webpack_require__(183)

/**
 * @category Minute Helpers
 * @summary Is the given date in the same minute as the current date?
 *
 * @description
 * Is the given date in the same minute as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this minute
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:00 in this minute?
 * var result = isThisMinute(new Date(2014, 8, 25, 18, 30))
 * //=> true
 */
function isThisMinute (dirtyDate) {
  return isSameMinute(new Date(), dirtyDate)
}

module.exports = isThisMinute


/***/ }),

/***/ 35:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var getDaysInMonth = __webpack_require__(39)

/**
 * @category Month Helpers
 * @summary Add the specified number of months to the given date.
 *
 * @description
 * Add the specified number of months to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be added
 * @returns {Date} the new date with the months added
 *
 * @example
 * // Add 5 months to 1 September 2014:
 * var result = addMonths(new Date(2014, 8, 1), 5)
 * //=> Sun Feb 01 2015 00:00:00
 */
function addMonths (dirtyDate, dirtyAmount) {
  var date = parse(dirtyDate)
  var amount = Number(dirtyAmount)
  var desiredMonth = date.getMonth() + amount
  var dateWithDesiredMonth = new Date(0)
  dateWithDesiredMonth.setFullYear(date.getFullYear(), desiredMonth, 1)
  dateWithDesiredMonth.setHours(0, 0, 0, 0)
  var daysInMonth = getDaysInMonth(dateWithDesiredMonth)
  // Set the last day of the new month
  // if the original date was the last day of the longer month
  date.setMonth(desiredMonth, Math.min(daysInMonth, date.getDate()))
  return date
}

module.exports = addMonths


/***/ }),

/***/ 350:
/***/ (function(module, exports, __webpack_require__) {

var isSameMonth = __webpack_require__(185)

/**
 * @category Month Helpers
 * @summary Is the given date in the same month as the current date?
 *
 * @description
 * Is the given date in the same month as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this month
 *
 * @example
 * // If today is 25 September 2014, is 15 September 2014 in this month?
 * var result = isThisMonth(new Date(2014, 8, 15))
 * //=> true
 */
function isThisMonth (dirtyDate) {
  return isSameMonth(new Date(), dirtyDate)
}

module.exports = isThisMonth


/***/ }),

/***/ 351:
/***/ (function(module, exports, __webpack_require__) {

var isSameQuarter = __webpack_require__(186)

/**
 * @category Quarter Helpers
 * @summary Is the given date in the same quarter as the current date?
 *
 * @description
 * Is the given date in the same quarter as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this quarter
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this quarter?
 * var result = isThisQuarter(new Date(2014, 6, 2))
 * //=> true
 */
function isThisQuarter (dirtyDate) {
  return isSameQuarter(new Date(), dirtyDate)
}

module.exports = isThisQuarter


/***/ }),

/***/ 352:
/***/ (function(module, exports, __webpack_require__) {

var isSameSecond = __webpack_require__(188)

/**
 * @category Second Helpers
 * @summary Is the given date in the same second as the current date?
 *
 * @description
 * Is the given date in the same second as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this second
 *
 * @example
 * // If now is 25 September 2014 18:30:15.500,
 * // is 25 September 2014 18:30:15.000 in this second?
 * var result = isThisSecond(new Date(2014, 8, 25, 18, 30, 15))
 * //=> true
 */
function isThisSecond (dirtyDate) {
  return isSameSecond(new Date(), dirtyDate)
}

module.exports = isThisSecond


/***/ }),

/***/ 353:
/***/ (function(module, exports, __webpack_require__) {

var isSameWeek = __webpack_require__(47)

/**
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * var result = isThisWeek(new Date(2014, 8, 21), {weekStartsOn: 1})
 * //=> false
 */
function isThisWeek (dirtyDate, dirtyOptions) {
  return isSameWeek(new Date(), dirtyDate, dirtyOptions)
}

module.exports = isThisWeek


/***/ }),

/***/ 354:
/***/ (function(module, exports, __webpack_require__) {

var isSameYear = __webpack_require__(190)

/**
 * @category Year Helpers
 * @summary Is the given date in the same year as the current date?
 *
 * @description
 * Is the given date in the same year as the current date?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in this year
 *
 * @example
 * // If today is 25 September 2014, is 2 July 2014 in this year?
 * var result = isThisYear(new Date(2014, 6, 2))
 * //=> true
 */
function isThisYear (dirtyDate) {
  return isSameYear(new Date(), dirtyDate)
}

module.exports = isThisYear


/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Weekday Helpers
 * @summary Is the given date Thursday?
 *
 * @description
 * Is the given date Thursday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Thursday
 *
 * @example
 * // Is 25 September 2014 Thursday?
 * var result = isThursday(new Date(2014, 8, 25))
 * //=> true
 */
function isThursday (dirtyDate) {
  return parse(dirtyDate).getDay() === 4
}

module.exports = isThursday


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(15)

/**
 * @category Day Helpers
 * @summary Is the given date today?
 *
 * @description
 * Is the given date today?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is today
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * var result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday (dirtyDate) {
  return startOfDay(dirtyDate).getTime() === startOfDay(new Date()).getTime()
}

module.exports = isToday


/***/ }),

/***/ 357:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(15)

/**
 * @category Day Helpers
 * @summary Is the given date tomorrow?
 *
 * @description
 * Is the given date tomorrow?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is tomorrow
 *
 * @example
 * // If today is 6 October 2014, is 7 October 14:00:00 tomorrow?
 * var result = isTomorrow(new Date(2014, 9, 7, 14, 0))
 * //=> true
 */
function isTomorrow (dirtyDate) {
  var tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  return startOfDay(dirtyDate).getTime() === startOfDay(tomorrow).getTime()
}

module.exports = isTomorrow


/***/ }),

/***/ 358:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Weekday Helpers
 * @summary Is the given date Tuesday?
 *
 * @description
 * Is the given date Tuesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Tuesday
 *
 * @example
 * // Is 23 September 2014 Tuesday?
 * var result = isTuesday(new Date(2014, 8, 23))
 * //=> true
 */
function isTuesday (dirtyDate) {
  return parse(dirtyDate).getDay() === 2
}

module.exports = isTuesday


/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Weekday Helpers
 * @summary Is the given date Wednesday?
 *
 * @description
 * Is the given date Wednesday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is Wednesday
 *
 * @example
 * // Is 24 September 2014 Wednesday?
 * var result = isWednesday(new Date(2014, 8, 24))
 * //=> true
 */
function isWednesday (dirtyDate) {
  return parse(dirtyDate).getDay() === 3
}

module.exports = isWednesday


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Millisecond Helpers
 * @summary Get the number of milliseconds between the given dates.
 *
 * @description
 * Get the number of milliseconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of milliseconds
 *
 * @example
 * // How many milliseconds are between
 * // 2 July 2014 12:30:20.600 and 2 July 2014 12:30:21.700?
 * var result = differenceInMilliseconds(
 *   new Date(2014, 6, 2, 12, 30, 21, 700),
 *   new Date(2014, 6, 2, 12, 30, 20, 600)
 * )
 * //=> 1100
 */
function differenceInMilliseconds (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)
  return dateLeft.getTime() - dateRight.getTime()
}

module.exports = differenceInMilliseconds


/***/ }),

/***/ 360:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Weekday Helpers
 * @summary Does the given date fall on a weekend?
 *
 * @description
 * Does the given date fall on a weekend?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date falls on a weekend
 *
 * @example
 * // Does 5 October 2014 fall on a weekend?
 * var result = isWeekend(new Date(2014, 9, 5))
 * //=> true
 */
function isWeekend (dirtyDate) {
  var date = parse(dirtyDate)
  var day = date.getDay()
  return day === 0 || day === 6
}

module.exports = isWeekend


/***/ }),

/***/ 361:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Range Helpers
 * @summary Is the given date within the range?
 *
 * @description
 * Is the given date within the range?
 *
 * @param {Date|String|Number} date - the date to check
 * @param {Date|String|Number} startDate - the start of range
 * @param {Date|String|Number} endDate - the end of range
 * @returns {Boolean} the date is within the range
 * @throws {Error} startDate cannot be after endDate
 *
 * @example
 * // For the date within the range:
 * isWithinRange(
 *   new Date(2014, 0, 3), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> true
 *
 * @example
 * // For the date outside of the range:
 * isWithinRange(
 *   new Date(2014, 0, 10), new Date(2014, 0, 1), new Date(2014, 0, 7)
 * )
 * //=> false
 */
function isWithinRange (dirtyDate, dirtyStartDate, dirtyEndDate) {
  var time = parse(dirtyDate).getTime()
  var startTime = parse(dirtyStartDate).getTime()
  var endTime = parse(dirtyEndDate).getTime()

  if (startTime > endTime) {
    throw new Error('The start of the range cannot be after the end of the range')
  }

  return time >= startTime && time <= endTime
}

module.exports = isWithinRange


/***/ }),

/***/ 362:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(15)

/**
 * @category Day Helpers
 * @summary Is the given date yesterday?
 *
 * @description
 * Is the given date yesterday?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is yesterday
 *
 * @example
 * // If today is 6 October 2014, is 5 October 14:00:00 yesterday?
 * var result = isYesterday(new Date(2014, 9, 5, 14, 0))
 * //=> true
 */
function isYesterday (dirtyDate) {
  var yesterday = new Date()
  yesterday.setDate(yesterday.getDate() - 1)
  return startOfDay(dirtyDate).getTime() === startOfDay(yesterday).getTime()
}

module.exports = isYesterday


/***/ }),

/***/ 363:
/***/ (function(module, exports, __webpack_require__) {

var lastDayOfWeek = __webpack_require__(191)

/**
 * @category ISO Week Helpers
 * @summary Return the last day of an ISO week for the given date.
 *
 * @description
 * Return the last day of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of an ISO week
 *
 * @example
 * // The last day of an ISO week for 2 September 2014 11:55:00:
 * var result = lastDayOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Sep 07 2014 00:00:00
 */
function lastDayOfISOWeek (dirtyDate) {
  return lastDayOfWeek(dirtyDate, {weekStartsOn: 1})
}

module.exports = lastDayOfISOWeek


/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

var getISOYear = __webpack_require__(13)
var startOfISOWeek = __webpack_require__(14)

/**
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the last day of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the last day of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of an ISO week-numbering year
 *
 * @example
 * // The last day of an ISO week-numbering year for 2 July 2005:
 * var result = lastDayOfISOYear(new Date(2005, 6, 2))
 * //=> Sun Jan 01 2006 00:00:00
 */
function lastDayOfISOYear (dirtyDate) {
  var year = getISOYear(dirtyDate)
  var fourthOfJanuary = new Date(0)
  fourthOfJanuary.setFullYear(year + 1, 0, 4)
  fourthOfJanuary.setHours(0, 0, 0, 0)
  var date = startOfISOWeek(fourthOfJanuary)
  date.setDate(date.getDate() - 1)
  return date
}

module.exports = lastDayOfISOYear


/***/ }),

/***/ 365:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Month Helpers
 * @summary Return the last day of a month for the given date.
 *
 * @description
 * Return the last day of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a month
 *
 * @example
 * // The last day of a month for 2 September 2014 11:55:00:
 * var result = lastDayOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var month = date.getMonth()
  date.setFullYear(date.getFullYear(), month + 1, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfMonth


/***/ }),

/***/ 366:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Quarter Helpers
 * @summary Return the last day of a year quarter for the given date.
 *
 * @description
 * Return the last day of a year quarter for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a quarter
 *
 * @example
 * // The last day of a quarter for 2 September 2014 11:55:00:
 * var result = lastDayOfQuarter(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 30 2014 00:00:00
 */
function lastDayOfQuarter (dirtyDate) {
  var date = parse(dirtyDate)
  var currentMonth = date.getMonth()
  var month = currentMonth - currentMonth % 3 + 3
  date.setMonth(month, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfQuarter


/***/ }),

/***/ 367:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Year Helpers
 * @summary Return the last day of a year for the given date.
 *
 * @description
 * Return the last day of a year for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the last day of a year
 *
 * @example
 * // The last day of a year for 2 September 2014 11:55:00:
 * var result = lastDayOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Dec 31 2014 00:00:00
 */
function lastDayOfYear (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  date.setFullYear(year + 1, 0, 0)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = lastDayOfYear


/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Return the latest of the given dates.
 *
 * @description
 * Return the latest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the latest of the dates
 *
 * @example
 * // Which of these dates is the latest?
 * var result = max(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Sun Jul 02 1995 00:00:00
 */
function max () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var latestTimestamp = Math.max.apply(null, dates)
  return new Date(latestTimestamp)
}

module.exports = max


/***/ }),

/***/ 369:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Return the earliest of the given dates.
 *
 * @description
 * Return the earliest of the given dates.
 *
 * @param {...(Date|String|Number)} dates - the dates to compare
 * @returns {Date} the earliest of the dates
 *
 * @example
 * // Which of these dates is the earliest?
 * var result = min(
 *   new Date(1989, 6, 10),
 *   new Date(1987, 1, 11),
 *   new Date(1995, 6, 2),
 *   new Date(1990, 0, 1)
 * )
 * //=> Wed Feb 11 1987 00:00:00
 */
function min () {
  var dirtyDates = Array.prototype.slice.call(arguments)
  var dates = dirtyDates.map(function (dirtyDate) {
    return parse(dirtyDate)
  })
  var earliestTimestamp = Math.min.apply(null, dates)
  return new Date(earliestTimestamp)
}

module.exports = min


/***/ }),

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Day Helpers
 * @summary Set the day of the month to the given date.
 *
 * @description
 * Set the day of the month to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfMonth - the day of the month of the new date
 * @returns {Date} the new date with the day of the month setted
 *
 * @example
 * // Set the 30th day of the month to 1 September 2014:
 * var result = setDate(new Date(2014, 8, 1), 30)
 * //=> Tue Sep 30 2014 00:00:00
 */
function setDate (dirtyDate, dirtyDayOfMonth) {
  var date = parse(dirtyDate)
  var dayOfMonth = Number(dirtyDayOfMonth)
  date.setDate(dayOfMonth)
  return date
}

module.exports = setDate


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var addDays = __webpack_require__(19)

/**
 * @category Weekday Helpers
 * @summary Set the day of the week to the given date.
 *
 * @description
 * Set the day of the week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the week of the new date
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the new date with the day of the week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0)
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If week starts with Monday, set Sunday to 1 September 2014:
 * var result = setDay(new Date(2014, 8, 1), 0, {weekStartsOn: 1})
 * //=> Sun Sep 07 2014 00:00:00
 */
function setDay (dirtyDate, dirtyDay, dirtyOptions) {
  var weekStartsOn = dirtyOptions ? (Number(dirtyOptions.weekStartsOn) || 0) : 0
  var date = parse(dirtyDate)
  var day = Number(dirtyDay)
  var currentDay = date.getDay()

  var remainder = day % 7
  var dayIndex = (remainder + 7) % 7

  var diff = (dayIndex < weekStartsOn ? 7 : 0) + day - currentDay
  return addDays(date, diff)
}

module.exports = setDay


/***/ }),

/***/ 372:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Day Helpers
 * @summary Set the day of the year to the given date.
 *
 * @description
 * Set the day of the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} dayOfYear - the day of the year of the new date
 * @returns {Date} the new date with the day of the year setted
 *
 * @example
 * // Set the 2nd day of the year to 2 July 2014:
 * var result = setDayOfYear(new Date(2014, 6, 2), 2)
 * //=> Thu Jan 02 2014 00:00:00
 */
function setDayOfYear (dirtyDate, dirtyDayOfYear) {
  var date = parse(dirtyDate)
  var dayOfYear = Number(dirtyDayOfYear)
  date.setMonth(0)
  date.setDate(dayOfYear)
  return date
}

module.exports = setDayOfYear


/***/ }),

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Hour Helpers
 * @summary Set the hours to the given date.
 *
 * @description
 * Set the hours to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} hours - the hours of the new date
 * @returns {Date} the new date with the hours setted
 *
 * @example
 * // Set 4 hours to 1 September 2014 11:30:00:
 * var result = setHours(new Date(2014, 8, 1, 11, 30), 4)
 * //=> Mon Sep 01 2014 04:30:00
 */
function setHours (dirtyDate, dirtyHours) {
  var date = parse(dirtyDate)
  var hours = Number(dirtyHours)
  date.setHours(hours)
  return date
}

module.exports = setHours


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var addDays = __webpack_require__(19)
var getISODay = __webpack_require__(178)

/**
 * @category Weekday Helpers
 * @summary Set the day of the ISO week to the given date.
 *
 * @description
 * Set the day of the ISO week to the given date.
 * ISO week starts with Monday.
 * 7 is the index of Sunday, 1 is the index of Monday etc.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} day - the day of the ISO week of the new date
 * @returns {Date} the new date with the day of the ISO week setted
 *
 * @example
 * // Set Sunday to 1 September 2014:
 * var result = setISODay(new Date(2014, 8, 1), 7)
 * //=> Sun Sep 07 2014 00:00:00
 */
function setISODay (dirtyDate, dirtyDay) {
  var date = parse(dirtyDate)
  var day = Number(dirtyDay)
  var currentDay = getISODay(date)
  var diff = day - currentDay
  return addDays(date, diff)
}

module.exports = setISODay


/***/ }),

/***/ 375:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var getISOWeek = __webpack_require__(46)

/**
 * @category ISO Week Helpers
 * @summary Set the ISO week to the given date.
 *
 * @description
 * Set the ISO week to the given date, saving the weekday number.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} isoWeek - the ISO week of the new date
 * @returns {Date} the new date with the ISO week setted
 *
 * @example
 * // Set the 53rd ISO week to 7 August 2004:
 * var result = setISOWeek(new Date(2004, 7, 7), 53)
 * //=> Sat Jan 01 2005 00:00:00
 */
function setISOWeek (dirtyDate, dirtyISOWeek) {
  var date = parse(dirtyDate)
  var isoWeek = Number(dirtyISOWeek)
  var diff = getISOWeek(date) - isoWeek
  date.setDate(date.getDate() - diff * 7)
  return date
}

module.exports = setISOWeek


/***/ }),

/***/ 376:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Millisecond Helpers
 * @summary Set the milliseconds to the given date.
 *
 * @description
 * Set the milliseconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} milliseconds - the milliseconds of the new date
 * @returns {Date} the new date with the milliseconds setted
 *
 * @example
 * // Set 300 milliseconds to 1 September 2014 11:30:40.500:
 * var result = setMilliseconds(new Date(2014, 8, 1, 11, 30, 40, 500), 300)
 * //=> Mon Sep 01 2014 11:30:40.300
 */
function setMilliseconds (dirtyDate, dirtyMilliseconds) {
  var date = parse(dirtyDate)
  var milliseconds = Number(dirtyMilliseconds)
  date.setMilliseconds(milliseconds)
  return date
}

module.exports = setMilliseconds


/***/ }),

/***/ 377:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Minute Helpers
 * @summary Set the minutes to the given date.
 *
 * @description
 * Set the minutes to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} minutes - the minutes of the new date
 * @returns {Date} the new date with the minutes setted
 *
 * @example
 * // Set 45 minutes to 1 September 2014 11:30:40:
 * var result = setMinutes(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:45:40
 */
function setMinutes (dirtyDate, dirtyMinutes) {
  var date = parse(dirtyDate)
  var minutes = Number(dirtyMinutes)
  date.setMinutes(minutes)
  return date
}

module.exports = setMinutes


/***/ }),

/***/ 378:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var setMonth = __webpack_require__(192)

/**
 * @category Quarter Helpers
 * @summary Set the year quarter to the given date.
 *
 * @description
 * Set the year quarter to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} quarter - the quarter of the new date
 * @returns {Date} the new date with the quarter setted
 *
 * @example
 * // Set the 2nd quarter to 2 July 2014:
 * var result = setQuarter(new Date(2014, 6, 2), 2)
 * //=> Wed Apr 02 2014 00:00:00
 */
function setQuarter (dirtyDate, dirtyQuarter) {
  var date = parse(dirtyDate)
  var quarter = Number(dirtyQuarter)
  var oldQuarter = Math.floor(date.getMonth() / 3) + 1
  var diff = quarter - oldQuarter
  return setMonth(date, date.getMonth() + diff * 3)
}

module.exports = setQuarter


/***/ }),

/***/ 379:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Second Helpers
 * @summary Set the seconds to the given date.
 *
 * @description
 * Set the seconds to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} seconds - the seconds of the new date
 * @returns {Date} the new date with the seconds setted
 *
 * @example
 * // Set 45 seconds to 1 September 2014 11:30:40:
 * var result = setSeconds(new Date(2014, 8, 1, 11, 30, 40), 45)
 * //=> Mon Sep 01 2014 11:30:45
 */
function setSeconds (dirtyDate, dirtySeconds) {
  var date = parse(dirtyDate)
  var seconds = Number(dirtySeconds)
  date.setSeconds(seconds)
  return date
}

module.exports = setSeconds


/***/ }),

/***/ 38:
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),

/***/ 380:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Year Helpers
 * @summary Set the year to the given date.
 *
 * @description
 * Set the year to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} year - the year of the new date
 * @returns {Date} the new date with the year setted
 *
 * @example
 * // Set year 2013 to 1 September 2014:
 * var result = setYear(new Date(2014, 8, 1), 2013)
 * //=> Sun Sep 01 2013 00:00:00
 */
function setYear (dirtyDate, dirtyYear) {
  var date = parse(dirtyDate)
  var year = Number(dirtyYear)
  date.setFullYear(year)
  return date
}

module.exports = setYear


/***/ }),

/***/ 381:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Month Helpers
 * @summary Return the start of a month for the given date.
 *
 * @description
 * Return the start of a month for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the start of a month
 *
 * @example
 * // The start of a month for 2 September 2014 11:55:00:
 * var result = startOfMonth(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfMonth (dirtyDate) {
  var date = parse(dirtyDate)
  date.setDate(1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfMonth


/***/ }),

/***/ 382:
/***/ (function(module, exports, __webpack_require__) {

var startOfDay = __webpack_require__(15)

/**
 * @category Day Helpers
 * @summary Return the start of today.
 *
 * @description
 * Return the start of today.
 *
 * @returns {Date} the start of today
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfToday()
 * //=> Mon Oct 6 2014 00:00:00
 */
function startOfToday () {
  return startOfDay(new Date())
}

module.exports = startOfToday


/***/ }),

/***/ 383:
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the start of tomorrow.
 *
 * @description
 * Return the start of tomorrow.
 *
 * @returns {Date} the start of tomorrow
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfTomorrow()
 * //=> Tue Oct 7 2014 00:00:00
 */
function startOfTomorrow () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day + 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfTomorrow


/***/ }),

/***/ 384:
/***/ (function(module, exports) {

/**
 * @category Day Helpers
 * @summary Return the start of yesterday.
 *
 * @description
 * Return the start of yesterday.
 *
 * @returns {Date} the start of yesterday
 *
 * @example
 * // If today is 6 October 2014:
 * var result = startOfYesterday()
 * //=> Sun Oct 5 2014 00:00:00
 */
function startOfYesterday () {
  var now = new Date()
  var year = now.getFullYear()
  var month = now.getMonth()
  var day = now.getDate()

  var date = new Date(0)
  date.setFullYear(year, month, day - 1)
  date.setHours(0, 0, 0, 0)
  return date
}

module.exports = startOfYesterday


/***/ }),

/***/ 385:
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__(19)

/**
 * @category Day Helpers
 * @summary Subtract the specified number of days from the given date.
 *
 * @description
 * Subtract the specified number of days from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be subtracted
 * @returns {Date} the new date with the days subtracted
 *
 * @example
 * // Subtract 10 days from 1 September 2014:
 * var result = subDays(new Date(2014, 8, 1), 10)
 * //=> Fri Aug 22 2014 00:00:00
 */
function subDays (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addDays(dirtyDate, -amount)
}

module.exports = subDays


/***/ }),

/***/ 386:
/***/ (function(module, exports, __webpack_require__) {

var addHours = __webpack_require__(158)

/**
 * @category Hour Helpers
 * @summary Subtract the specified number of hours from the given date.
 *
 * @description
 * Subtract the specified number of hours from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of hours to be subtracted
 * @returns {Date} the new date with the hours subtracted
 *
 * @example
 * // Subtract 2 hours from 11 July 2014 01:00:00:
 * var result = subHours(new Date(2014, 6, 11, 1, 0), 2)
 * //=> Thu Jul 10 2014 23:00:00
 */
function subHours (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addHours(dirtyDate, -amount)
}

module.exports = subHours


/***/ }),

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

var addMilliseconds = __webpack_require__(20)

/**
 * @category Millisecond Helpers
 * @summary Subtract the specified number of milliseconds from the given date.
 *
 * @description
 * Subtract the specified number of milliseconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of milliseconds to be subtracted
 * @returns {Date} the new date with the milliseconds subtracted
 *
 * @example
 * // Subtract 750 milliseconds from 10 July 2014 12:45:30.000:
 * var result = subMilliseconds(new Date(2014, 6, 10, 12, 45, 30, 0), 750)
 * //=> Thu Jul 10 2014 12:45:29.250
 */
function subMilliseconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMilliseconds(dirtyDate, -amount)
}

module.exports = subMilliseconds


/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var addMinutes = __webpack_require__(161)

/**
 * @category Minute Helpers
 * @summary Subtract the specified number of minutes from the given date.
 *
 * @description
 * Subtract the specified number of minutes from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of minutes to be subtracted
 * @returns {Date} the new date with the mintues subtracted
 *
 * @example
 * // Subtract 30 minutes from 10 July 2014 12:00:00:
 * var result = subMinutes(new Date(2014, 6, 10, 12, 0), 30)
 * //=> Thu Jul 10 2014 11:30:00
 */
function subMinutes (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMinutes(dirtyDate, -amount)
}

module.exports = subMinutes


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

var addMonths = __webpack_require__(35)

/**
 * @category Month Helpers
 * @summary Subtract the specified number of months from the given date.
 *
 * @description
 * Subtract the specified number of months from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of months to be subtracted
 * @returns {Date} the new date with the months subtracted
 *
 * @example
 * // Subtract 5 months from 1 February 2015:
 * var result = subMonths(new Date(2015, 1, 1), 5)
 * //=> Mon Sep 01 2014 00:00:00
 */
function subMonths (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addMonths(dirtyDate, -amount)
}

module.exports = subMonths


/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Month Helpers
 * @summary Get the number of days in a month of the given date.
 *
 * @description
 * Get the number of days in a month of the given date.
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the number of days in a month
 *
 * @example
 * // How many days are in February 2000?
 * var result = getDaysInMonth(new Date(2000, 1))
 * //=> 29
 */
function getDaysInMonth (dirtyDate) {
  var date = parse(dirtyDate)
  var year = date.getFullYear()
  var monthIndex = date.getMonth()
  var lastDayOfMonth = new Date(0)
  lastDayOfMonth.setFullYear(year, monthIndex + 1, 0)
  lastDayOfMonth.setHours(0, 0, 0, 0)
  return lastDayOfMonth.getDate()
}

module.exports = getDaysInMonth


/***/ }),

/***/ 390:
/***/ (function(module, exports, __webpack_require__) {

var addQuarters = __webpack_require__(162)

/**
 * @category Quarter Helpers
 * @summary Subtract the specified number of year quarters from the given date.
 *
 * @description
 * Subtract the specified number of year quarters from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of quarters to be subtracted
 * @returns {Date} the new date with the quarters subtracted
 *
 * @example
 * // Subtract 3 quarters from 1 September 2014:
 * var result = subQuarters(new Date(2014, 8, 1), 3)
 * //=> Sun Dec 01 2013 00:00:00
 */
function subQuarters (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addQuarters(dirtyDate, -amount)
}

module.exports = subQuarters


/***/ }),

/***/ 391:
/***/ (function(module, exports, __webpack_require__) {

var addSeconds = __webpack_require__(163)

/**
 * @category Second Helpers
 * @summary Subtract the specified number of seconds from the given date.
 *
 * @description
 * Subtract the specified number of seconds from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of seconds to be subtracted
 * @returns {Date} the new date with the seconds subtracted
 *
 * @example
 * // Subtract 30 seconds from 10 July 2014 12:45:00:
 * var result = subSeconds(new Date(2014, 6, 10, 12, 45, 0), 30)
 * //=> Thu Jul 10 2014 12:44:30
 */
function subSeconds (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addSeconds(dirtyDate, -amount)
}

module.exports = subSeconds


/***/ }),

/***/ 392:
/***/ (function(module, exports, __webpack_require__) {

var addWeeks = __webpack_require__(40)

/**
 * @category Week Helpers
 * @summary Subtract the specified number of weeks from the given date.
 *
 * @description
 * Subtract the specified number of weeks from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be subtracted
 * @returns {Date} the new date with the weeks subtracted
 *
 * @example
 * // Subtract 4 weeks from 1 September 2014:
 * var result = subWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Aug 04 2014 00:00:00
 */
function subWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addWeeks(dirtyDate, -amount)
}

module.exports = subWeeks


/***/ }),

/***/ 393:
/***/ (function(module, exports, __webpack_require__) {

var addYears = __webpack_require__(164)

/**
 * @category Year Helpers
 * @summary Subtract the specified number of years from the given date.
 *
 * @description
 * Subtract the specified number of years from the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of years to be subtracted
 * @returns {Date} the new date with the years subtracted
 *
 * @example
 * // Subtract 5 years from 1 September 2014:
 * var result = subYears(new Date(2014, 8, 1), 5)
 * //=> Tue Sep 01 2009 00:00:00
 */
function subYears (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  return addYears(dirtyDate, -amount)
}

module.exports = subYears


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

var addDays = __webpack_require__(19)

/**
 * @category Week Helpers
 * @summary Add the specified number of weeks to the given date.
 *
 * @description
 * Add the specified number of week to the given date.
 *
 * @param {Date|String|Number} date - the date to be changed
 * @param {Number} amount - the amount of weeks to be added
 * @returns {Date} the new date with the weeks added
 *
 * @example
 * // Add 4 weeks to 1 September 2014:
 * var result = addWeeks(new Date(2014, 8, 1), 4)
 * //=> Mon Sep 29 2014 00:00:00
 */
function addWeeks (dirtyDate, dirtyAmount) {
  var amount = Number(dirtyAmount)
  var days = amount * 7
  return addDays(dirtyDate, days)
}

module.exports = addWeeks


/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Common Helpers
 * @summary Compare the two dates reverse chronologically and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return -1 if the first date is after the second,
 * 1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|String|Number} dateLeft - the first date to compare
 * @param {Date|String|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989 reverse chronologically:
 * var result = compareDesc(
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * )
 * //=> 1
 *
 * @example
 * // Sort the array of dates in reverse chronological order:
 * var result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareDesc)
 * //=> [
 * //   Sun Jul 02 1995 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Wed Feb 11 1987 00:00:00
 * // ]
 */
function compareDesc (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var timeLeft = dateLeft.getTime()
  var dateRight = parse(dirtyDateRight)
  var timeRight = dateRight.getTime()

  if (timeLeft > timeRight) {
    return -1
  } else if (timeLeft < timeRight) {
    return 1
  } else {
    return 0
  }
}

module.exports = compareDesc


/***/ }),

/***/ 42:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var differenceInCalendarMonths = __webpack_require__(166)
var compareAsc = __webpack_require__(22)

/**
 * @category Month Helpers
 * @summary Get the number of full months between the given dates.
 *
 * @description
 * Get the number of full months between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of full months
 *
 * @example
 * // How many full months are between 31 January 2014 and 1 September 2014?
 * var result = differenceInMonths(
 *   new Date(2014, 8, 1),
 *   new Date(2014, 0, 31)
 * )
 * //=> 7
 */
function differenceInMonths (dirtyDateLeft, dirtyDateRight) {
  var dateLeft = parse(dirtyDateLeft)
  var dateRight = parse(dirtyDateRight)

  var sign = compareAsc(dateLeft, dateRight)
  var difference = Math.abs(differenceInCalendarMonths(dateLeft, dateRight))
  dateLeft.setMonth(dateLeft.getMonth() - sign * difference)

  // Math.abs(diff in full months - diff in calendar months) === 1 if last calendar month is not full
  // If so, result must be decreased by 1 in absolute value
  var isLastMonthNotFull = compareAsc(dateLeft, dateRight) === -sign
  return sign * (difference - isLastMonthNotFull)
}

module.exports = differenceInMonths


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var differenceInMilliseconds = __webpack_require__(36)

/**
 * @category Second Helpers
 * @summary Get the number of seconds between the given dates.
 *
 * @description
 * Get the number of seconds between the given dates.
 *
 * @param {Date|String|Number} dateLeft - the later date
 * @param {Date|String|Number} dateRight - the earlier date
 * @returns {Number} the number of seconds
 *
 * @example
 * // How many seconds are between
 * // 2 July 2014 12:30:07.999 and 2 July 2014 12:30:20.000?
 * var result = differenceInSeconds(
 *   new Date(2014, 6, 2, 12, 30, 20, 0),
 *   new Date(2014, 6, 2, 12, 30, 7, 999)
 * )
 * //=> 12
 */
function differenceInSeconds (dirtyDateLeft, dirtyDateRight) {
  var diff = differenceInMilliseconds(dirtyDateLeft, dirtyDateRight) / 1000
  return diff > 0 ? Math.floor(diff) : Math.ceil(diff)
}

module.exports = differenceInSeconds


/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

var buildDistanceInWordsLocale = __webpack_require__(305)
var buildFormatLocale = __webpack_require__(306)

/**
 * @category Locales
 * @summary English locale.
 */
module.exports = {
  distanceInWords: buildDistanceInWordsLocale(),
  format: buildFormatLocale()
}


/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)

/**
 * @category Day Helpers
 * @summary Return the end of a day for the given date.
 *
 * @description
 * Return the end of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|String|Number} date - the original date
 * @returns {Date} the end of a day
 *
 * @example
 * // The end of a day for 2 September 2014 11:55:00:
 * var result = endOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 23:59:59.999
 */
function endOfDay (dirtyDate) {
  var date = parse(dirtyDate)
  date.setHours(23, 59, 59, 999)
  return date
}

module.exports = endOfDay


/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(0)
var startOfISOWeek = __webpack_require__(14)
var startOfISOYear = __webpack_require__(21)

var MILLISECONDS_IN_WEEK = 604800000

/**
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @param {Date|String|Number} date - the given date
 * @returns {Number} the ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * var result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek (dirtyDate) {
  var date = parse(dirtyDate)
  var diff = startOfISOWeek(date).getTime() - startOfISOYear(date).getTime()

  // Round the number of days to the nearest integer
  // because the number of milliseconds in a week is not constant
  // (e.g. it's different in the week of the daylight saving time clock shift)
  return Math.round(diff / MILLISECONDS_IN_WEEK) + 1
}

module.exports = getISOWeek


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

var startOfWeek = __webpack_require__(33)

/**
 * @category Week Helpers
 * @summary Are the given dates in the same week?
 *
 * @description
 * Are the given dates in the same week?
 *
 * @param {Date|String|Number} dateLeft - the first date to check
 * @param {Date|String|Number} dateRight - the second date to check
 * @param {Object} [options] - the object with options
 * @param {Number} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4)
 * )
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * var result = isSameWeek(
 *   new Date(2014, 7, 31),
 *   new Date(2014, 8, 4),
 *   {weekStartsOn: 1}
 * )
 * //=> false
 */
function isSameWeek (dirtyDateLeft, dirtyDateRight, dirtyOptions) {
  var dateLeftStartOfWeek = startOfWeek(dirtyDateLeft, dirtyOptions)
  var dateRightStartOfWeek = startOfWeek(dirtyDateRight, dirtyOptions)

  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime()
}

module.exports = isSameWeek


/***/ }),

/***/ 598:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1493)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1495)
/* template */
var __vue_template__ = __webpack_require__(1496)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/assets/js/pages/administration/users/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18a3cb48", Component.options)
  } else {
    hotAPI.reload("data-v-18a3cb48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvcGFyc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWU/OTQzNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvRmlsZVVwbG9hZGVyLnZ1ZT8yZDM0Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvRmlsZVVwbG9hZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvRmlsZVVwbG9hZGVyLnZ1ZT8xZDMwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRfaXNvX3llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0X29mX2lzb193ZWVrL2luZGV4LmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWU/NGI4YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlP2RiZjQiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9TaG93LnZ1ZT84NjI3Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydF9vZl9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZF9ob3Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkX2lzb195ZWFycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0X2lzb195ZWFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGRfbWludXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkX3F1YXJ0ZXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGRfc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkX3llYXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX2lzb195ZWFycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9tb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldF9xdWFydGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX3llYXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlX2luX2RheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N1Yl9pc29feWVhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Rpc3RhbmNlX2luX3dvcmRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lbmRfb2Zfd2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZW5kX29mX21vbnRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRfZGF5X29mX3llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0X29mX3llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3ZhbGlkL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19sZWFwX3llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldF9pc29fZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19zYW1lX2hvdXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0X29mX2hvdXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3NhbWVfaXNvX3dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3NhbWVfaXNvX3llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3NhbWVfbWludXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydF9vZl9taW51dGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3NhbWVfbW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3NhbWVfcXVhcnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRfb2ZfcXVhcnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfc2FtZV9zZWNvbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0X29mX3NlY29uZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkX2RheXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3NhbWVfeWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbGFzdF9kYXlfb2Zfd2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0X21vbnRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkX21pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRfb2ZfaXNvX3llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbXBhcmVfYXNjL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hcmVfcmFuZ2VzX292ZXJsYXBwaW5nL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jbG9zZXN0X2luZGV4X3RvL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9jbG9zZXN0X3RvL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX2lzb193ZWVrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9xdWFydGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl93ZWVrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9ob3Vycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9pc29feWVhcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fbWludXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9xdWFydGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl93ZWVrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl95ZWFycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuL2J1aWxkX2Rpc3RhbmNlX2luX3dvcmRzX2xvY2FsZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuL2J1aWxkX2Zvcm1hdF9sb2NhbGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9fbGliL2J1aWxkX2Zvcm1hdHRpbmdfdG9rZW5zX3JlZ19leHAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Rpc3RhbmNlX2luX3dvcmRzX3N0cmljdC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlzdGFuY2VfaW5fd29yZHNfdG9fbm93L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lYWNoX2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZW5kX29mX2hvdXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZF9vZl9pc29fd2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZW5kX29mX2lzb195ZWFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lbmRfb2ZfbWludXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lbmRfb2ZfcXVhcnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZW5kX29mX3NlY29uZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZW5kX29mX3RvZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lbmRfb2ZfdG9tb3Jyb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZF9vZl95ZWFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lbmRfb2ZfeWVzdGVyZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldF9kYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRfZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRfZGF5c19pbl95ZWFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRfaG91cnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldF9pc29fd2Vla3NfaW5feWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X21pbGxpc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X21pbnV0ZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldF9tb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRfb2Zfd2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X292ZXJsYXBwaW5nX2RheXNfaW5fcmFuZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRfc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X3RpbWUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldF95ZWFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19hZnRlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfYmVmb3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19lcXVhbC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfZmlyc3RfZGF5X29mX21vbnRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19mcmlkYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX2Z1dHVyZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9kYXlzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19sYXN0X2RheV9vZl9tb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfbW9uZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19wYXN0L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19zYW1lX2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfc2F0dXJkYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3N1bmRheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfdGhpc19ob3VyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc190aGlzX2lzb193ZWVrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc190aGlzX2lzb195ZWFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc190aGlzX21pbnV0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkX21vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfdGhpc19tb250aC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfdGhpc19xdWFydGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc190aGlzX3NlY29uZC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfdGhpc193ZWVrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc190aGlzX3llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3RodXJzZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc190b2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfdG9tb3Jyb3cvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3R1ZXNkYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3dlZG5lc2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9taWxsaXNlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3dlZWtlbmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3dpdGhpbl9yYW5nZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfeWVzdGVyZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sYXN0X2RheV9vZl9pc29fd2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbGFzdF9kYXlfb2ZfaXNvX3llYXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xhc3RfZGF5X29mX21vbnRoL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sYXN0X2RheV9vZl9xdWFydGVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sYXN0X2RheV9vZl95ZWFyL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9tYXgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL21pbi9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0X2RhdGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldF9kYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldF9kYXlfb2ZfeWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0X2hvdXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRfaXNvX2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0X2lzb193ZWVrL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRfbWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRfbWludXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0X3F1YXJ0ZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldF9zZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19kYXRlL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRfeWVhci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRfb2ZfbW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0X29mX3RvZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydF9vZl90b21vcnJvdy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRfb2ZfeWVzdGVyZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdWJfZGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3ViX2hvdXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdWJfbWlsbGlzZWNvbmRzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdWJfbWludXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3ViX21vbnRocy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X2RheXNfaW5fbW9udGgvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N1Yl9xdWFydGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3ViX3NlY29uZHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N1Yl93ZWVrcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3ViX3llYXJzL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGRfd2Vla3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2NvbXBhcmVfZGVzYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9tb250aHMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fc2Vjb25kcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lbmRfb2ZfZGF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRfaXNvX3dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3NhbWVfd2Vlay9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSx5QkFBeUIsRUFBRTtBQUMzQjtBQUNBLFlBQVksRUFBRTtBQUNkLFlBQVksRUFBRTtBQUNkLFlBQVksRUFBRTtBQUNkOztBQUVBLDJCQUEyQixFQUFFO0FBQzdCO0FBQ0EsWUFBWSxFQUFFO0FBQ2QsWUFBWSxFQUFFO0FBQ2QsWUFBWSxFQUFFO0FBQ2Q7O0FBRUE7QUFDQSwwQkFBMEIsRUFBRTtBQUM1Qiw0QkFBNEIsRUFBRTtBQUM5Qiw2QkFBNkIsRUFBRSxPQUFPLEVBQUU7QUFDeEMsNkJBQTZCLEVBQUU7QUFDL0IsOEJBQThCLEVBQUUsT0FBTyxFQUFFOztBQUV6QztBQUNBLHlCQUF5QixFQUFFO0FBQzNCLDJCQUEyQixFQUFFLE9BQU8sRUFBRTtBQUN0Qyw2QkFBNkIsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFOztBQUVqRDtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUMsRUFBRTtBQUN6Qyx5Q0FBeUMsRUFBRSxPQUFPLEVBQUU7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLE9BQU87QUFDbEIsV0FBVyxVQUFVO0FBQ3JCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0Msb0JBQW9CO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMvVEE7QUFDQTtBQUNBO0FBQ0EsMEJBQXlNO0FBQ3pNO0FBQ0E7QUFDQTtBQUNBLDZDQUFpVjtBQUNqVjtBQUNBLCtDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztB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ckNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDM0pBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3hCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMvQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDbERBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxRQUFRO0FBQ3JCLFlBQVksTUFBTTtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOzs7Ozs7OztBQzNDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcseUJBQXlCO0FBQ3BDLGFBQWEsT0FBTztBQUNwQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBOztBQUVBOzs7Ozs7OztBQ2hEQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcseUJBQXlCO0FBQ3BDLGFBQWEsS0FBSztBQUNsQixZQUFZLFVBQVU7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDOUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3pDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDaENBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDbkRBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQzVCQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDekNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQzVCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMxQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSzs7QUFFTDs7QUFFQTtBQUNBO0FBQ0EsMEJBQTBCLE9BQU87QUFDakMsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0Esc0JBQXNCLE9BQU87QUFDN0IsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EscUJBQXFCLE9BQU87QUFDNUIsS0FBSzs7QUFFTDtBQUNBO0FBQ0EsdUJBQXVCLE9BQU87QUFDOUI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTCw2REFBNkQsT0FBTztBQUNwRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDbEdBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtB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O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQzNCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDeEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQzFCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYSxZQUFZO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLG1CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3ZVQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3ZCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3ZCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDdkJBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNoQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN2QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN2QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN2QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4REFBOEQsZ0JBQWdCO0FBQzlFO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixhQUFhLE9BQU87QUFDcEIsWUFBWSxNQUFNO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDN0RBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDdkJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDdkJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDdkJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDeEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDeEJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDM0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3JCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3hCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDckJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLG1CQUFtQjtBQUM5QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDNUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNyQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixhQUFhLFFBQVE7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3JCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWEsUUFBUTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN0QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN2QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Ozs7Ozs7OztBQ3hCQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2hDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQzFCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDM0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDMUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3QkFBd0I7QUFDbkMsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyx3QkFBd0I7QUFDbkMsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDL0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDekJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCxnQkFBZ0I7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDdkNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUMxQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDOUJBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUM3QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN6QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN6QkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDM0JBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxFQUFFO0FBQ2IsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNuQkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN6QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDekJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDMUJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN2QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3ZCQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsT0FBTztBQUNsQixhQUFhLEtBQUs7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7O0FDdkJBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsV0FBVyxPQUFPO0FBQ2xCLGFBQWEsS0FBSztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN2QkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLG1CQUFtQjtBQUM5QixXQUFXLE9BQU87QUFDbEIsYUFBYSxLQUFLO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3ZCQTs7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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxtQkFBbUI7QUFDOUIsYUFBYSxPQUFPO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7OztBQ2pDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsbUJBQW1CO0FBQzlCLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEIsYUFBYSxRQUFRO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0EsMEJBQXlNO0FBQ3pNO0FBQ0E7QUFDQTtBQUNBLDZDQUFpVjtBQUNqVjtBQUNBLCtDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBpc0RhdGUgPSByZXF1aXJlKCcuLi9pc19kYXRlL2luZGV4LmpzJylcblxudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMFxudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMFxudmFyIERFRkFVTFRfQURESVRJT05BTF9ESUdJVFMgPSAyXG5cbnZhciBwYXJzZVRva2VuRGF0ZVRpbWVEZWxpbWV0ZXIgPSAvW1QgXS9cbnZhciBwYXJzZVRva2VuUGxhaW5UaW1lID0gLzovXG5cbi8vIHllYXIgdG9rZW5zXG52YXIgcGFyc2VUb2tlbllZID0gL14oXFxkezJ9KSQvXG52YXIgcGFyc2VUb2tlbnNZWVkgPSBbXG4gIC9eKFsrLV1cXGR7Mn0pJC8sIC8vIDAgYWRkaXRpb25hbCBkaWdpdHNcbiAgL14oWystXVxcZHszfSkkLywgLy8gMSBhZGRpdGlvbmFsIGRpZ2l0XG4gIC9eKFsrLV1cXGR7NH0pJC8gLy8gMiBhZGRpdGlvbmFsIGRpZ2l0c1xuXVxuXG52YXIgcGFyc2VUb2tlbllZWVkgPSAvXihcXGR7NH0pL1xudmFyIHBhcnNlVG9rZW5zWVlZWVkgPSBbXG4gIC9eKFsrLV1cXGR7NH0pLywgLy8gMCBhZGRpdGlvbmFsIGRpZ2l0c1xuICAvXihbKy1dXFxkezV9KS8sIC8vIDEgYWRkaXRpb25hbCBkaWdpdFxuICAvXihbKy1dXFxkezZ9KS8gLy8gMiBhZGRpdGlvbmFsIGRpZ2l0c1xuXVxuXG4vLyBkYXRlIHRva2Vuc1xudmFyIHBhcnNlVG9rZW5NTSA9IC9eLShcXGR7Mn0pJC9cbnZhciBwYXJzZVRva2VuREREID0gL14tPyhcXGR7M30pJC9cbnZhciBwYXJzZVRva2VuTU1ERCA9IC9eLT8oXFxkezJ9KS0/KFxcZHsyfSkkL1xudmFyIHBhcnNlVG9rZW5Xd3cgPSAvXi0/VyhcXGR7Mn0pJC9cbnZhciBwYXJzZVRva2VuV3d3RCA9IC9eLT9XKFxcZHsyfSktPyhcXGR7MX0pJC9cblxuLy8gdGltZSB0b2tlbnNcbnZhciBwYXJzZVRva2VuSEggPSAvXihcXGR7Mn0oWy4sXVxcZCopPykkL1xudmFyIHBhcnNlVG9rZW5ISE1NID0gL14oXFxkezJ9KTo/KFxcZHsyfShbLixdXFxkKik/KSQvXG52YXIgcGFyc2VUb2tlbkhITU1TUyA9IC9eKFxcZHsyfSk6PyhcXGR7Mn0pOj8oXFxkezJ9KFsuLF1cXGQqKT8pJC9cblxuLy8gdGltZXpvbmUgdG9rZW5zXG52YXIgcGFyc2VUb2tlblRpbWV6b25lID0gLyhbWistXS4qKSQvXG52YXIgcGFyc2VUb2tlblRpbWV6b25lWiA9IC9eKFopJC9cbnZhciBwYXJzZVRva2VuVGltZXpvbmVISCA9IC9eKFsrLV0pKFxcZHsyfSkkL1xudmFyIHBhcnNlVG9rZW5UaW1lem9uZUhITU0gPSAvXihbKy1dKShcXGR7Mn0pOj8oXFxkezJ9KSQvXG5cbi8qKlxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb252ZXJ0IHRoZSBnaXZlbiBhcmd1bWVudCB0byBhbiBpbnN0YW5jZSBvZiBEYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYW4gaW5zdGFuY2Ugb2YgRGF0ZSwgdGhlIGZ1bmN0aW9uIHJldHVybnMgaXRzIGNsb25lLlxuICpcbiAqIElmIHRoZSBhcmd1bWVudCBpcyBhIG51bWJlciwgaXQgaXMgdHJlYXRlZCBhcyBhIHRpbWVzdGFtcC5cbiAqXG4gKiBJZiBhbiBhcmd1bWVudCBpcyBhIHN0cmluZywgdGhlIGZ1bmN0aW9uIHRyaWVzIHRvIHBhcnNlIGl0LlxuICogRnVuY3Rpb24gYWNjZXB0cyBjb21wbGV0ZSBJU08gODYwMSBmb3JtYXRzIGFzIHdlbGwgYXMgcGFydGlhbCBpbXBsZW1lbnRhdGlvbnMuXG4gKiBJU08gODYwMTogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fODYwMVxuICpcbiAqIElmIGFsbCBhYm92ZSBmYWlscywgdGhlIGZ1bmN0aW9uIHBhc3NlcyB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gRGF0ZSBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0gezAgfCAxIHwgMn0gW29wdGlvbnMuYWRkaXRpb25hbERpZ2l0cz0yXSAtIHRoZSBhZGRpdGlvbmFsIG51bWJlciBvZiBkaWdpdHMgaW4gdGhlIGV4dGVuZGVkIHllYXIgZm9ybWF0XG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHBhcnNlZCBkYXRlIGluIHRoZSBsb2NhbCB0aW1lIHpvbmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCBzdHJpbmcgJzIwMTQtMDItMTFUMTE6MzA6MzAnIHRvIGRhdGU6XG4gKiB2YXIgcmVzdWx0ID0gcGFyc2UoJzIwMTQtMDItMTFUMTE6MzA6MzAnKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gUGFyc2Ugc3RyaW5nICcrMDIwMTQxMDEnLFxuICogLy8gaWYgdGhlIGFkZGl0aW9uYWwgbnVtYmVyIG9mIGRpZ2l0cyBpbiB0aGUgZXh0ZW5kZWQgeWVhciBmb3JtYXQgaXMgMTpcbiAqIHZhciByZXN1bHQgPSBwYXJzZSgnKzAyMDE0MTAxJywge2FkZGl0aW9uYWxEaWdpdHM6IDF9KVxuICogLy89PiBGcmkgQXByIDExIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gcGFyc2UgKGFyZ3VtZW50LCBkaXJ0eU9wdGlvbnMpIHtcbiAgaWYgKGlzRGF0ZShhcmd1bWVudCkpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKVxuICB9IGVsc2UgaWYgKHR5cGVvZiBhcmd1bWVudCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpXG4gIH1cblxuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fVxuICB2YXIgYWRkaXRpb25hbERpZ2l0cyA9IG9wdGlvbnMuYWRkaXRpb25hbERpZ2l0c1xuICBpZiAoYWRkaXRpb25hbERpZ2l0cyA9PSBudWxsKSB7XG4gICAgYWRkaXRpb25hbERpZ2l0cyA9IERFRkFVTFRfQURESVRJT05BTF9ESUdJVFNcbiAgfSBlbHNlIHtcbiAgICBhZGRpdGlvbmFsRGlnaXRzID0gTnVtYmVyKGFkZGl0aW9uYWxEaWdpdHMpXG4gIH1cblxuICB2YXIgZGF0ZVN0cmluZ3MgPSBzcGxpdERhdGVTdHJpbmcoYXJndW1lbnQpXG5cbiAgdmFyIHBhcnNlWWVhclJlc3VsdCA9IHBhcnNlWWVhcihkYXRlU3RyaW5ncy5kYXRlLCBhZGRpdGlvbmFsRGlnaXRzKVxuICB2YXIgeWVhciA9IHBhcnNlWWVhclJlc3VsdC55ZWFyXG4gIHZhciByZXN0RGF0ZVN0cmluZyA9IHBhcnNlWWVhclJlc3VsdC5yZXN0RGF0ZVN0cmluZ1xuXG4gIHZhciBkYXRlID0gcGFyc2VEYXRlKHJlc3REYXRlU3RyaW5nLCB5ZWFyKVxuXG4gIGlmIChkYXRlKSB7XG4gICAgdmFyIHRpbWVzdGFtcCA9IGRhdGUuZ2V0VGltZSgpXG4gICAgdmFyIHRpbWUgPSAwXG4gICAgdmFyIG9mZnNldFxuXG4gICAgaWYgKGRhdGVTdHJpbmdzLnRpbWUpIHtcbiAgICAgIHRpbWUgPSBwYXJzZVRpbWUoZGF0ZVN0cmluZ3MudGltZSlcbiAgICB9XG5cbiAgICBpZiAoZGF0ZVN0cmluZ3MudGltZXpvbmUpIHtcbiAgICAgIG9mZnNldCA9IHBhcnNlVGltZXpvbmUoZGF0ZVN0cmluZ3MudGltZXpvbmUpXG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGdldCBvZmZzZXQgYWNjdXJhdGUgdG8gaG91ciBpbiB0aW1lem9uZXMgdGhhdCBjaGFuZ2Ugb2Zmc2V0XG4gICAgICBvZmZzZXQgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lKS5nZXRUaW1lem9uZU9mZnNldCgpXG4gICAgICBvZmZzZXQgPSBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSkuZ2V0VGltZXpvbmVPZmZzZXQoKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGF0ZSh0aW1lc3RhbXAgKyB0aW1lICsgb2Zmc2V0ICogTUlMTElTRUNPTkRTX0lOX01JTlVURSlcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpXG4gIH1cbn1cblxuZnVuY3Rpb24gc3BsaXREYXRlU3RyaW5nIChkYXRlU3RyaW5nKSB7XG4gIHZhciBkYXRlU3RyaW5ncyA9IHt9XG4gIHZhciBhcnJheSA9IGRhdGVTdHJpbmcuc3BsaXQocGFyc2VUb2tlbkRhdGVUaW1lRGVsaW1ldGVyKVxuICB2YXIgdGltZVN0cmluZ1xuXG4gIGlmIChwYXJzZVRva2VuUGxhaW5UaW1lLnRlc3QoYXJyYXlbMF0pKSB7XG4gICAgZGF0ZVN0cmluZ3MuZGF0ZSA9IG51bGxcbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMF1cbiAgfSBlbHNlIHtcbiAgICBkYXRlU3RyaW5ncy5kYXRlID0gYXJyYXlbMF1cbiAgICB0aW1lU3RyaW5nID0gYXJyYXlbMV1cbiAgfVxuXG4gIGlmICh0aW1lU3RyaW5nKSB7XG4gICAgdmFyIHRva2VuID0gcGFyc2VUb2tlblRpbWV6b25lLmV4ZWModGltZVN0cmluZylcbiAgICBpZiAodG9rZW4pIHtcbiAgICAgIGRhdGVTdHJpbmdzLnRpbWUgPSB0aW1lU3RyaW5nLnJlcGxhY2UodG9rZW5bMV0sICcnKVxuICAgICAgZGF0ZVN0cmluZ3MudGltZXpvbmUgPSB0b2tlblsxXVxuICAgIH0gZWxzZSB7XG4gICAgICBkYXRlU3RyaW5ncy50aW1lID0gdGltZVN0cmluZ1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkYXRlU3RyaW5nc1xufVxuXG5mdW5jdGlvbiBwYXJzZVllYXIgKGRhdGVTdHJpbmcsIGFkZGl0aW9uYWxEaWdpdHMpIHtcbiAgdmFyIHBhcnNlVG9rZW5ZWVkgPSBwYXJzZVRva2Vuc1lZWVthZGRpdGlvbmFsRGlnaXRzXVxuICB2YXIgcGFyc2VUb2tlbllZWVlZID0gcGFyc2VUb2tlbnNZWVlZWVthZGRpdGlvbmFsRGlnaXRzXVxuXG4gIHZhciB0b2tlblxuXG4gIC8vIFlZWVkgb3IgwrFZWVlZWVxuICB0b2tlbiA9IHBhcnNlVG9rZW5ZWVlZLmV4ZWMoZGF0ZVN0cmluZykgfHwgcGFyc2VUb2tlbllZWVlZLmV4ZWMoZGF0ZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgdmFyIHllYXJTdHJpbmcgPSB0b2tlblsxXVxuICAgIHJldHVybiB7XG4gICAgICB5ZWFyOiBwYXJzZUludCh5ZWFyU3RyaW5nLCAxMCksXG4gICAgICByZXN0RGF0ZVN0cmluZzogZGF0ZVN0cmluZy5zbGljZSh5ZWFyU3RyaW5nLmxlbmd0aClcbiAgICB9XG4gIH1cblxuICAvLyBZWSBvciDCsVlZWVxuICB0b2tlbiA9IHBhcnNlVG9rZW5ZWS5leGVjKGRhdGVTdHJpbmcpIHx8IHBhcnNlVG9rZW5ZWVkuZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICB2YXIgY2VudHVyeVN0cmluZyA9IHRva2VuWzFdXG4gICAgcmV0dXJuIHtcbiAgICAgIHllYXI6IHBhcnNlSW50KGNlbnR1cnlTdHJpbmcsIDEwKSAqIDEwMCxcbiAgICAgIHJlc3REYXRlU3RyaW5nOiBkYXRlU3RyaW5nLnNsaWNlKGNlbnR1cnlTdHJpbmcubGVuZ3RoKVxuICAgIH1cbiAgfVxuXG4gIC8vIEludmFsaWQgSVNPLWZvcm1hdHRlZCB5ZWFyXG4gIHJldHVybiB7XG4gICAgeWVhcjogbnVsbFxuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlRGF0ZSAoZGF0ZVN0cmluZywgeWVhcikge1xuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgeWVhclxuICBpZiAoeWVhciA9PT0gbnVsbCkge1xuICAgIHJldHVybiBudWxsXG4gIH1cblxuICB2YXIgdG9rZW5cbiAgdmFyIGRhdGVcbiAgdmFyIG1vbnRoXG4gIHZhciB3ZWVrXG5cbiAgLy8gWVlZWVxuICBpZiAoZGF0ZVN0cmluZy5sZW5ndGggPT09IDApIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIpXG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIC8vIFlZWVktTU1cbiAgdG9rZW4gPSBwYXJzZVRva2VuTU0uZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICBtb250aCA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgZGF0ZS5zZXRVVENGdWxsWWVhcih5ZWFyLCBtb250aClcbiAgICByZXR1cm4gZGF0ZVxuICB9XG5cbiAgLy8gWVlZWS1EREQgb3IgWVlZWURERFxuICB0b2tlbiA9IHBhcnNlVG9rZW5EREQuZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICB2YXIgZGF5T2ZZZWFyID0gcGFyc2VJbnQodG9rZW5bMV0sIDEwKVxuICAgIGRhdGUuc2V0VVRDRnVsbFllYXIoeWVhciwgMCwgZGF5T2ZZZWFyKVxuICAgIHJldHVybiBkYXRlXG4gIH1cblxuICAvLyBZWVlZLU1NLUREIG9yIFlZWVlNTUREXG4gIHRva2VuID0gcGFyc2VUb2tlbk1NREQuZXhlYyhkYXRlU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBkYXRlID0gbmV3IERhdGUoMClcbiAgICBtb250aCA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgdmFyIGRheSA9IHBhcnNlSW50KHRva2VuWzJdLCAxMClcbiAgICBkYXRlLnNldFVUQ0Z1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXkpXG4gICAgcmV0dXJuIGRhdGVcbiAgfVxuXG4gIC8vIFlZWVktV3d3IG9yIFlZWVlXd3dcbiAgdG9rZW4gPSBwYXJzZVRva2VuV3d3LmV4ZWMoZGF0ZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgd2VlayA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgcmV0dXJuIGRheU9mSVNPWWVhcih5ZWFyLCB3ZWVrKVxuICB9XG5cbiAgLy8gWVlZWS1Xd3ctRCBvciBZWVlZV3d3RFxuICB0b2tlbiA9IHBhcnNlVG9rZW5Xd3dELmV4ZWMoZGF0ZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgd2VlayA9IHBhcnNlSW50KHRva2VuWzFdLCAxMCkgLSAxXG4gICAgdmFyIGRheU9mV2VlayA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgLSAxXG4gICAgcmV0dXJuIGRheU9mSVNPWWVhcih5ZWFyLCB3ZWVrLCBkYXlPZldlZWspXG4gIH1cblxuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgZGF0ZVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWUgKHRpbWVTdHJpbmcpIHtcbiAgdmFyIHRva2VuXG4gIHZhciBob3Vyc1xuICB2YXIgbWludXRlc1xuXG4gIC8vIGhoXG4gIHRva2VuID0gcGFyc2VUb2tlbkhILmV4ZWModGltZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUZsb2F0KHRva2VuWzFdLnJlcGxhY2UoJywnLCAnLicpKVxuICAgIHJldHVybiAoaG91cnMgJSAyNCkgKiBNSUxMSVNFQ09ORFNfSU5fSE9VUlxuICB9XG5cbiAgLy8gaGg6bW0gb3IgaGhtbVxuICB0b2tlbiA9IHBhcnNlVG9rZW5ISE1NLmV4ZWModGltZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUludCh0b2tlblsxXSwgMTApXG4gICAgbWludXRlcyA9IHBhcnNlRmxvYXQodG9rZW5bMl0ucmVwbGFjZSgnLCcsICcuJykpXG4gICAgcmV0dXJuIChob3VycyAlIDI0KSAqIE1JTExJU0VDT05EU19JTl9IT1VSICtcbiAgICAgIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gIH1cblxuICAvLyBoaDptbTpzcyBvciBoaG1tc3NcbiAgdG9rZW4gPSBwYXJzZVRva2VuSEhNTVNTLmV4ZWModGltZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgaG91cnMgPSBwYXJzZUludCh0b2tlblsxXSwgMTApXG4gICAgbWludXRlcyA9IHBhcnNlSW50KHRva2VuWzJdLCAxMClcbiAgICB2YXIgc2Vjb25kcyA9IHBhcnNlRmxvYXQodG9rZW5bM10ucmVwbGFjZSgnLCcsICcuJykpXG4gICAgcmV0dXJuIChob3VycyAlIDI0KSAqIE1JTExJU0VDT05EU19JTl9IT1VSICtcbiAgICAgIG1pbnV0ZXMgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFICtcbiAgICAgIHNlY29uZHMgKiAxMDAwXG4gIH1cblxuICAvLyBJbnZhbGlkIElTTy1mb3JtYXR0ZWQgdGltZVxuICByZXR1cm4gbnVsbFxufVxuXG5mdW5jdGlvbiBwYXJzZVRpbWV6b25lICh0aW1lem9uZVN0cmluZykge1xuICB2YXIgdG9rZW5cbiAgdmFyIGFic29sdXRlT2Zmc2V0XG5cbiAgLy8gWlxuICB0b2tlbiA9IHBhcnNlVG9rZW5UaW1lem9uZVouZXhlYyh0aW1lem9uZVN0cmluZylcbiAgaWYgKHRva2VuKSB7XG4gICAgcmV0dXJuIDBcbiAgfVxuXG4gIC8vIMKxaGhcbiAgdG9rZW4gPSBwYXJzZVRva2VuVGltZXpvbmVISC5leGVjKHRpbWV6b25lU3RyaW5nKVxuICBpZiAodG9rZW4pIHtcbiAgICBhYnNvbHV0ZU9mZnNldCA9IHBhcnNlSW50KHRva2VuWzJdLCAxMCkgKiA2MFxuICAgIHJldHVybiAodG9rZW5bMV0gPT09ICcrJykgPyAtYWJzb2x1dGVPZmZzZXQgOiBhYnNvbHV0ZU9mZnNldFxuICB9XG5cbiAgLy8gwrFoaDptbSBvciDCsWhobW1cbiAgdG9rZW4gPSBwYXJzZVRva2VuVGltZXpvbmVISE1NLmV4ZWModGltZXpvbmVTdHJpbmcpXG4gIGlmICh0b2tlbikge1xuICAgIGFic29sdXRlT2Zmc2V0ID0gcGFyc2VJbnQodG9rZW5bMl0sIDEwKSAqIDYwICsgcGFyc2VJbnQodG9rZW5bM10sIDEwKVxuICAgIHJldHVybiAodG9rZW5bMV0gPT09ICcrJykgPyAtYWJzb2x1dGVPZmZzZXQgOiBhYnNvbHV0ZU9mZnNldFxuICB9XG5cbiAgcmV0dXJuIDBcbn1cblxuZnVuY3Rpb24gZGF5T2ZJU09ZZWFyIChpc29ZZWFyLCB3ZWVrLCBkYXkpIHtcbiAgd2VlayA9IHdlZWsgfHwgMFxuICBkYXkgPSBkYXkgfHwgMFxuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApXG4gIGRhdGUuc2V0VVRDRnVsbFllYXIoaXNvWWVhciwgMCwgNClcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeURheSA9IGRhdGUuZ2V0VVRDRGF5KCkgfHwgN1xuICB2YXIgZGlmZiA9IHdlZWsgKiA3ICsgZGF5ICsgMSAtIGZvdXJ0aE9mSmFudWFyeURheVxuICBkYXRlLnNldFVUQ0RhdGUoZGF0ZS5nZXRVVENEYXRlKCkgKyBkaWZmKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHBhcnNlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9wYXJzZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ1OTg3YTg4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ZpbGVVcGxvYWRlci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0ZpbGVVcGxvYWRlci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ1OTg3YTg4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRmlsZVVwbG9hZGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDU5ODdhODhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NTk4N2E4OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDEyOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMgNCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NTk4N2E4OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9GaWxlVXBsb2FkZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI4YmM1YTI2NFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NTk4N2E4OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9GaWxlVXBsb2FkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ1OTg3YTg4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ZpbGVVcGxvYWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNDU5ODdhODhcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDQiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZm9ybS5maWxlLXVwbG9hZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXG59XFxuYnV0dG9uLmZpbGUtdXBsb2FkIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5maWxlLWlucHV0LmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvRmlsZVVwbG9hZGVyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBcUhBO0lBQ0Esc0JBQUE7Q0FDQTtBQUVBO0lBQ0Esd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJGaWxlVXBsb2FkZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPGZvcm0gY2xhc3M9XFxcImZpbGUtdXBsb2FkIGlzLW1hcmdpbmxlc3NcXFwiXFxuICAgICAgICBAc3VibWl0LnByZXZlbnQ+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxlXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZpbGUtbGFiZWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgOm11bHRpcGxlPVxcXCJtdWx0aXBsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmaWxlLWlucHV0IGhpZGRlblxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcImZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICByZWY9XFxcImlucHV0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwidXBsb2FkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcInVwbG9hZC1idXR0b25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOm9wZW4tZmlsZS1icm93c2VyPVxcXCJvcGVuRmlsZUJyb3dzZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvcGVuRmlsZUJyb3dzZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XFxcInVwbG9hZFxcXCI+PC9mYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Zvcm0+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xcbmltcG9ydCB7IGZhVXBsb2FkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xcblxcbmZvbnRhd2Vzb21lLmxpYnJhcnkuYWRkKGZhVXBsb2FkKTtcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIHByb3BzOiB7XFxuICAgICAgICBtdWx0aXBsZToge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgdXJsOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZpbGVTaXplTGltaXQ6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgZGVmYXVsdDogODM4ODYwOCxcXG4gICAgICAgICAgICB2YWxpZGF0b3I6IHZhbHVlID0+IHZhbHVlIDw9IDgzODg2MDgsXFxuICAgICAgICB9LFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBpbnB1dDogbnVsbCxcXG4gICAgICAgICAgICBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCksXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBvcGVuRmlsZUJyb3dzZXIoKSB7XFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5pbnB1dC5jbGljaygpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHVwbG9hZCgpIHtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWQtc3RhcnQnKTtcXG4gICAgICAgICAgICB0aGlzLnNldEZvcm1EYXRhKCk7XFxuXFxuICAgICAgICAgICAgYXhpb3MucG9zdCh0aGlzLnVybCwgdGhpcy5mb3JtRGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWQtc3VjY2Vzc2Z1bCcsIHJlc3BvbnNlLmRhdGEpO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwbG9hZC1lcnJvcicpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRGb3JtRGF0YSgpIHtcXG4gICAgICAgICAgICBjb25zdCB7IGZpbGVzIH0gPSB0aGlzLiRyZWZzLmlucHV0O1xcbiAgICAgICAgICAgIHRoaXMuYWRkRmlsZXMoZmlsZXMpO1xcbiAgICAgICAgICAgIHRoaXMuYWRkUGFyYW1zKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgYWRkRmlsZXMoZmlsZXMpIHtcXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNpemVDaGVja1Bhc3NlcyhmaWxlc1tpXSkpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybURhdGEuYXBwZW5kKGBmaWxlXyR7aX1gLCBmaWxlc1tpXSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgYWRkUGFyYW1zKCkge1xcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcykge1xcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnBhcmFtcykuZm9yRWFjaCgoW2tleSwgcGFyYW1dKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBwYXJhbSA9PT0gJ29iamVjdCdcXG4gICAgICAgICAgICAgICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHBhcmFtKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyYW07XFxuXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHNpemVDaGVja1Bhc3NlcyhmaWxlKSB7XFxuICAgICAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IHRoaXMuZmlsZVNpemVMaW1pdCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLiR0b2FzdHIud2FybmluZyhgRmlsZSBzaXplIExpbWl0IG9mICR7dGhpcy5maWxlU2l6ZUxpbWl0fSBLYiBleGNlZGVlZCBieSAke2ZpbGUubmFtZX1gKTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgICAgIH0sXFxuICAgICAgICByZXNldCgpIHtcXG4gICAgICAgICAgICB0aGlzLiRlbC5yZXNldCgpO1xcbiAgICAgICAgICAgIHRoaXMuZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIGZvcm0uZmlsZS11cGxvYWQge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbi5maWxlLXVwbG9hZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAuZmlsZS1pbnB1dC5oaWRkZW4ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTQ1OTg3YTg4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvRmlsZVVwbG9hZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTI5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyA0IiwiPHRlbXBsYXRlPlxuXG4gICAgPGZvcm0gY2xhc3M9XCJmaWxlLXVwbG9hZCBpcy1tYXJnaW5sZXNzXCJcbiAgICAgICAgQHN1Ym1pdC5wcmV2ZW50PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZmlsZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCA6bXVsdGlwbGU9XCJtdWx0aXBsZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmlsZS1pbnB1dCBoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInVwbG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwidXBsb2FkLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6b3Blbi1maWxlLWJyb3dzZXI9XCJvcGVuRmlsZUJyb3dzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib3BlbkZpbGVCcm93c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInVwbG9hZFwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZm9ybT5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVVwbG9hZCB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXNvbGlkL3NoYWthYmxlLmVzJztcblxuZm9udGF3ZXNvbWUubGlicmFyeS5hZGQoZmFVcGxvYWQpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgbXVsdGlwbGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZmlsZVNpemVMaW1pdDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogODM4ODYwOCxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogdmFsdWUgPT4gdmFsdWUgPD0gODM4ODYwOCxcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXQ6IG51bGwsXG4gICAgICAgICAgICBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCksXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb3BlbkZpbGVCcm93c2VyKCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5pbnB1dC5jbGljaygpO1xuICAgICAgICB9LFxuICAgICAgICB1cGxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWQtc3RhcnQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9ybURhdGEoKTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdCh0aGlzLnVybCwgdGhpcy5mb3JtRGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBsb2FkLXN1Y2Nlc3NmdWwnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWQtZXJyb3InKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRGb3JtRGF0YSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZmlsZXMgfSA9IHRoaXMuJHJlZnMuaW5wdXQ7XG4gICAgICAgICAgICB0aGlzLmFkZEZpbGVzKGZpbGVzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUGFyYW1zKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEZpbGVzKGZpbGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2l6ZUNoZWNrUGFzc2VzKGZpbGVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhLmFwcGVuZChgZmlsZV8ke2l9YCwgZmlsZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWRkUGFyYW1zKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wYXJhbXMpLmZvckVhY2goKFtrZXksIHBhcmFtXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBwYXJhbSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocGFyYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhcmFtO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzaXplQ2hlY2tQYXNzZXMoZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IHRoaXMuZmlsZVNpemVMaW1pdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0ci53YXJuaW5nKGBGaWxlIHNpemUgTGltaXQgb2YgJHt0aGlzLmZpbGVTaXplTGltaXR9IEtiIGV4Y2VkZWVkIGJ5ICR7ZmlsZS5uYW1lfWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy4kZWwucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIGZvcm0uZmlsZS11cGxvYWQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgfVxuXG4gICAgYnV0dG9uLmZpbGUtdXBsb2FkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLmZpbGUtaW5wdXQuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtdXBsb2FkIGlzLW1hcmdpbmxlc3NcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLWxhYmVsXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgcmVmOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtaW5wdXQgaGlkZGVuXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG11bHRpcGxlOiBfdm0ubXVsdGlwbGUsIHR5cGU6IFwiZmlsZVwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnVwbG9hZCB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX3QoXG4gICAgICAgICAgICAgIFwidXBsb2FkLWJ1dHRvblwiLFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwidXBsb2FkXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICB7IG9wZW5GaWxlQnJvd3NlcjogX3ZtLm9wZW5GaWxlQnJvd3NlciB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIF0pXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ1OTg3YTg4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NTk4N2E4OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDQiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG52YXIgc3RhcnRPZklTT1dlZWsgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9pc29fd2Vlay9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBJU08td2VlayBudW1iZXJpbmcgeWVhciBpcyAyIEphbnVhcnkgMjAwNT9cbiAqIHZhciByZXN1bHQgPSBnZXRJU09ZZWFyKG5ldyBEYXRlKDIwMDUsIDAsIDIpKVxuICogLy89PiAyMDA0XG4gKi9cbmZ1bmN0aW9uIGdldElTT1llYXIgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcblxuICB2YXIgZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhciA9IG5ldyBEYXRlKDApXG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0RnVsbFllYXIoeWVhciArIDEsIDAsIDQpXG4gIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgdmFyIHN0YXJ0T2ZOZXh0WWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIpXG5cbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIgPSBuZXcgRGF0ZSgwKVxuICBmb3VydGhPZkphbnVhcnlPZlRoaXNZZWFyLnNldEZ1bGxZZWFyKHllYXIsIDAsIDQpXG4gIGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgdmFyIHN0YXJ0T2ZUaGlzWWVhciA9IHN0YXJ0T2ZJU09XZWVrKGZvdXJ0aE9mSmFudWFyeU9mVGhpc1llYXIpXG5cbiAgaWYgKGRhdGUuZ2V0VGltZSgpID49IHN0YXJ0T2ZOZXh0WWVhci5nZXRUaW1lKCkpIHtcbiAgICByZXR1cm4geWVhciArIDFcbiAgfSBlbHNlIGlmIChkYXRlLmdldFRpbWUoKSA+PSBzdGFydE9mVGhpc1llYXIuZ2V0VGltZSgpKSB7XG4gICAgcmV0dXJuIHllYXJcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geWVhciAtIDFcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldElTT1llYXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldF9pc29feWVhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHN0YXJ0T2ZXZWVrID0gcmVxdWlyZSgnLi4vc3RhcnRfb2Zfd2Vlay9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIHZhciByZXN1bHQgPSBzdGFydE9mSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3RhcnRPZklTT1dlZWsgKGRpcnR5RGF0ZSkge1xuICByZXR1cm4gc3RhcnRPZldlZWsoZGlydHlEYXRlLCB7d2Vla1N0YXJ0c09uOiAxfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydE9mSVNPV2Vla1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRfb2ZfaXNvX3dlZWsvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xOGEzY2I0OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNzc4MGQzNjlcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMThhM2NiNDhcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMThhM2NiNDhcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMThhM2NiNDhcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE0OTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5oYXMtbGF0ZXJhbC1ib3JkZXJzIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcXG59XFxuLnN0YXQtdmFsdWUge1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgcGFkZGluZy10b3A6IDEycHg7XFxufVxcbi5zdGF0LWtleSB7XFxuICAgIGZvbnQtc2l6ZTogMS40ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcbi5sZXZlbC51c2VyLWNvbnRyb2xzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLnRpbWVsaW5lLWNvbnRlbnQge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIDFzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246YWxsIDFzIGVhc2U7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9TaG93LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBZ1hBO0lBQ0EsdUNBQUE7SUFDQSx3Q0FBQTtDQUNBO0FBRUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0NBQ0E7QUFFQTtJQUNBLGlCQUFBO0NBQ0E7QUFFQTtJQUNBLCtCQUFBO0lBQUEsdUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiU2hvdy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IHYtaWY9XFxcImluaXRpYWxpc2VkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJveCBwcm9maWxlLWhlYWRpbmdcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbnMgaXMtbXVsdGlsaW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGlzLWhhbGYtZGVza3RvcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIGlzLW1vYmlsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGlzLW5hcnJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImltYWdlIGlzLTEyOHgxMjhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJhdmF0YXJMaW5rXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtaXRlbSBoYXMtcGFkZGluZy10b3Atc21hbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZSBpcy0zXFxcIj57eyBwcm9maWxlVXNlci5mdWxsTmFtZSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgX18oJ3JvbGUnKSB9fToge3sgcHJvZmlsZVVzZXIucm9sZS5uYW1lIH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBfXygnc2luY2UnKSB9fToge3sgcHJvZmlsZVVzZXIuY3JlYXRlZF9hdCB8IHRpbWVGcm9tTm93IH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiaGFzLW1hcmdpbi10b3Atc21hbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwgdXNlci1jb250cm9sc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJpc1NlbGZWaXNpdGluZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1zbWFsbCBpcy13YXJuaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiYXZhdGFySWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImRlbGV0ZUF2YXRhclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XFxcInRyYXNoLWFsdFxcXCI+PC9mYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKCdBdmF0YXInKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpbGUtdXBsb2FkZXIgdi1pZj1cXFwiIWF2YXRhcklkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwbG9hZC1zdWNjZXNzZnVsPVxcXCIkc3RvcmUuY29tbWl0KCdzZXRVc2VyQXZhdGFyJywgJGV2ZW50LmlkKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp1cmw9XFxcInVwbG9hZEF2YXRhckxpbmtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XFxcInVwbG9hZC1idXR0b25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC1zY29wZT1cXFwicHJvcHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzPVxcXCJidXR0b24gaXMtc21hbGwgaXMtaW5mb1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJwcm9wcy5vcGVuRmlsZUJyb3dzZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cXFwidXBsb2FkXFxcIj48L2ZhPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0F2YXRhcicpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlsZS11cGxvYWRlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1zbWFsbCBpcy1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImxvZ291dCgpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cXFwic2lnbi1vdXQtYWx0XFxcIj48L2ZhPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0xvZyBPdXQnKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLXNtYWxsIGlzLXdhcm5pbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGJ1cy4kZW1pdCgnc3RhcnQtaW1wZXJzb25hdGluZycsIHByb2ZpbGVVc2VyLmlkKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiISRzdG9yZS5zdGF0ZS5pbXBlcnNvbmF0aW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0ltcGVyc29uYXRlJykgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBpcy1oYWxmLWRlc2t0b3BcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1ucyBpcy1tb2JpbGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwic3RhdC12YWx1ZVxcXCI+e3sgcHJvZmlsZVVzZXIubG9naW5Db3VudCB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJzdGF0LWtleVxcXCI+e3sgX18oJ2xvZ2lucycpIH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZCBoYXMtbGF0ZXJhbC1ib3JkZXJzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJzdGF0LXZhbHVlXFxcIj57eyBwcm9maWxlVXNlci5hY3Rpb25Mb2dDb3VudCB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJzdGF0LWtleVxcXCI+e3sgX18oJ2FjdGlvbnMnKSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YXQtdmFsdWVcXFwiPnt7IHByb2ZpbGVVc2VyLnJhdGluZyB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJzdGF0LWtleVxcXCI+e3sgX18oJ3JhdGluZycpIH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIGlzLWNlbnRlcmVkXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW4gaXMtdHdvLXRoaXJkcy10YWJsZXRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cXFwicGFnaW5hdGlvbiBpcy1zbWFsbCBoYXMtbWFyZ2luLWJvdHRvbS1sYXJnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tcHJldmlvdXNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgLSAxKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJwcm9maWxlVXNlci50aW1lbGluZS5wcmV2X3BhZ2VfdXJsPT09bnVsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKCdQcmV2aW91cycpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW5leHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgKyAxKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJwcm9maWxlVXNlci50aW1lbGluZS5uZXh0X3BhZ2VfdXJsPT09bnVsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKCdOZXh0JykgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpc3RcXFwiIHYtaWY9XFxcImlzU2hvcnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcImkgaW4gcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtY3VycmVudCc6IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gaX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKGkpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlzdFxcXCIgdi1pZj1cXFwiaXNBdFN0YXJ0ICYmICFpc1Nob3J0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCJpIGluIDNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1jdXJyZW50JzogcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PSBpfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UoaSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGkgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWVsbGlwc2lzXFxcIj4maGVsbGlwOzwvc3Bhbj48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwicGFnaW5hdGlvbi1saXN0XFxcIiB2LWlmPVxcXCJoYXNNaWRkbGUgJiYgIWlzU2hvcnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZSgxKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XFxcInBhZ2luYXRpb24tZWxsaXBzaXNcXFwiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDEpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgLSAxIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmsgaXMtY3VycmVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSArIDEpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgKyAxIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwicGFnaW5hdGlvbi1lbGxpcHNpc1xcXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlzdFxcXCIgdi1pZj1cXFwiaXNBdEVuZCAmJiAhaXNTaG9ydFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKDEpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwicGFnaW5hdGlvbi1lbGxpcHNpc1xcXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCJpIGluIDNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1jdXJyZW50JzogcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PSBwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgLSAzICsgaX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtIDMgKyBpKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIC0gMyArIGkgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInRpbWVsaW5lIGhhcy1wYWRkaW5nLWxhcmdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVxcXCIoYWN0aW9ucywgZGF5KSBpbiB0aW1lbGluZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRpbWVsaW5lLWNvbnRlbnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImRheVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwidGltZWxpbmUtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWcgaXMtbWVkaXVtIGlzLXByaW1hcnlcXFwiPnt7IF9fKGRheSkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGxpIGNsYXNzPVxcXCJ0aW1lbGluZS1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWVsaW5lLW1hcmtlclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lbGluZS1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiaGVhZGluZ1xcXCI+SmFudWFyeSAyMDE2PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRpbWVsaW5lIGNvbnRlbnQgLSBDYW4gaW5jbHVkZSBhbnkgSFRNTCBlbGVtZW50PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInRpbWVsaW5lLWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKGFjdGlvbiwgaW5kZXgpIGluIGFjdGlvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lbGluZS1tYXJrZXIgaXMtaWNvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcImdldENsYXNzKGFjdGlvbi5yb3V0ZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cXFwiZ2V0SWNvbihhY3Rpb24ucm91dGUpXFxcIiBzaXplPVxcXCJ4c1xcXCI+PC9mYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZWxpbmUtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImhlYWRpbmdcXFwiPnt7IGdldEhSRGF0ZShhY3Rpb24uY3JlYXRlZF9hdCkgfX0ge3sgZ2V0SFJUaW1lKGFjdGlvbi5jcmVhdGVkX2F0KSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBhY3Rpb24ucGVybWlzc2lvbi5kZXNjcmlwdGlvbiB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwidGltZWxpbmUtaGVhZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWcgaXMtbWVkaXVtIGlzLXByaW1hcnlcXFwiPnt7IF9fKCdFbmQnKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwidGltZWxpbmUtaXRlbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lbGluZS1tYXJrZXIgaXMtaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cXFwiZWxsaXBzaXMtaFxcXCIgc2l6ZT1cXFwieHNcXFwiPjwvZmE+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tICdkYXRlLWZucyc7XFxuaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZSc7XFxuaW1wb3J0IHtcXG4gICAgZmFUcmFzaEFsdCwgZmFVcGxvYWQsIGZhU2lnbk91dEFsdCwgZmFFbGxpcHNpc0gsXFxuICAgIGZhRXllLCBmYVBsdXMsIGZhUGVuY2lsQWx0LFxcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xcbmltcG9ydCBGaWxlVXBsb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlJztcXG5cXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChbXFxuICAgIGZhVHJhc2hBbHQsIGZhVXBsb2FkLCBmYVNpZ25PdXRBbHQsIGZhRWxsaXBzaXNILFxcbiAgICBmYUV5ZSwgZmFQbHVzLCBmYVBlbmNpbEFsdCxcXG5dKTtcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIGNvbXBvbmVudHM6IHsgRmlsZVVwbG9hZGVyIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdsb2NhbGUnLCB7XFxuICAgICAgICAgICAgX186ICdfXycsXFxuICAgICAgICAgICAgbG9jYWxlOiAnY3VycmVudCcsXFxuICAgICAgICB9KSxcXG4gICAgICAgIC4uLm1hcFN0YXRlKFsndXNlcicsICdtZXRhJ10pLFxcbiAgICAgICAgdXBsb2FkQXZhdGFyTGluaygpIHtcXG4gICAgICAgICAgICByZXR1cm4gcm91dGUoJ2NvcmUuYXZhdGFycy5zdG9yZScsIFtdLCBmYWxzZSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgaXNTZWxmVmlzaXRpbmcoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlci5pZCA9PT0gdGhpcy5wcm9maWxlVXNlci5pZDtcXG4gICAgICAgIH0sXFxuICAgICAgICBhdmF0YXJJZCgpIHtcXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NlbGZWaXNpdGluZykge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyLmF2YXRhcklkO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlVXNlci5hdmF0YXIgPyB0aGlzLnByb2ZpbGVVc2VyLmF2YXRhci5pZCA6IG51bGw7XFxuICAgICAgICB9LFxcbiAgICAgICAgYXZhdGFyTGluaygpIHtcXG4gICAgICAgICAgICByZXR1cm4gcm91dGUoJ2NvcmUuYXZhdGFycy5zaG93JywgKHRoaXMuYXZhdGFySWQgfHwgJ251bGwnKSwgZmFsc2UpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHRpbWVsaW5lKCkge1xcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmRhdGE7XFxuXFxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMubWFwKGFjdGlvbiA9PiBhY3Rpb24uY3JlYXRlZF9hdCkucmVkdWNlKChkYXlzLCByZWNvcmQpID0+IHtcXG4gICAgICAgICAgICAgICAgZGF5cy5wdXNoKHRoaXMuZ2V0RGF5KHJlY29yZCkpO1xcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF5cztcXG4gICAgICAgICAgICB9LCBbXSkuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIGRheXMpID0+IGRheXMuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4KVxcbiAgICAgICAgICAgICAgICAucmVkdWNlKCh0aW1lbGluZSwgZGF5KSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aW1lbGluZVtkYXldID0gYWN0aW9uc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocmVjb3JkID0+IHRoaXMuZ2V0RGF5KHJlY29yZC5jcmVhdGVkX2F0KSA9PT0gZGF5KTtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbGluZTtcXG4gICAgICAgICAgICAgICAgfSwge30pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGlzU2hvcnQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIDw9IDU7XFxuICAgICAgICB9LFxcbiAgICAgICAgaXNBdFN0YXJ0KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA8PSAyO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGlzQXRFbmQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXFxuICAgICAgICAgICAgICAgIC0gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPD0gMjtcXG4gICAgICAgIH0sXFxuICAgICAgICBoYXNNaWRkbGUoKSB7XFxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzQXRTdGFydCAmJiAhdGhpcy5pc0F0RW5kO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHBhZ2luYXRpb25VcmwoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIGAke3JvdXRlKCdhZG1pbmlzdHJhdGlvbi51c2Vycy5zaG93JywgW3RoaXMucHJvZmlsZVVzZXIuaWRdLCBmYWxzZSl9P3BhZ2U9YDtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcXG4gICAgICAgICAgICBwcm9maWxlVXNlcjoge30sXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICB3YXRjaDoge1xcbiAgICAgICAgbG9jYWxlOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgZGVsZXRlQXZhdGFyKCkge1xcbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShyb3V0ZSgnY29yZS5hdmF0YXJzLmRlc3Ryb3knLCB0aGlzLnVzZXIuYXZhdGFySWQsIGZhbHNlKSkudGhlbigoKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0VXNlckF2YXRhcicsIG51bGwpO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBsb2dvdXQoKSB7XFxuICAgICAgICAgICAgYXhpb3MucG9zdChyb3V0ZSgnbG9nb3V0JywgW10sIGZhbHNlKS50b1N0cmluZygpKS50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvbG9nb3V0Jyk7XFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGdldERheSh0aW1lc3RhbXApIHtcXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0KHRpbWVzdGFtcCwgJ2RkZGQnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRIUkRhdGUodGltZXN0YW1wKSB7XFxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdCh0aW1lc3RhbXAsIHRoaXMubWV0YS5kYXRlRm9ybWF0KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRIUlRpbWUodGltZXN0YW1wKSB7XFxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdCh0aW1lc3RhbXAsICdIOm1tJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0SWNvbihhY3Rpb24pIHtcXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2luZGV4JykgPiAwKSByZXR1cm4gZmFFeWU7XFxuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbmRleE9mKCdjcmVhdGUnKSA+IDApIHJldHVybiBmYVBsdXM7XFxuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbmRleE9mKCdlZGl0JykgPiAwKSByZXR1cm4gZmFQZW5jaWxBbHQ7XFxuICAgICAgICAgICAgcmV0dXJuIGZhVHJhc2hBbHQ7XFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0Q2xhc3MoYWN0aW9uKSB7XFxuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbmRleE9mKCdpbmRleCcpID4gMCkgcmV0dXJuICdoYXMtdGV4dC1zdWNjZXNzJztcXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2NyZWF0ZScpID4gMCkgcmV0dXJuICdoYXMtdGV4dC13YXJuaW5nJztcXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2VkaXQnKSA+IDApIHJldHVybiAnaGFzLXRleHQtd2FybmluZyc7XFxuICAgICAgICAgICAgcmV0dXJuICdoYXMtdGV4dC1kYW5nZXInO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGdldFBhZ2UocGFnZSkge1xcbiAgICAgICAgICAgIGF4aW9zLmdldCh0aGlzLnBhZ2luYXRpb25VcmwgKyBwYWdlKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVVc2VyID0gZGF0YS51c2VyO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICBheGlvcy5nZXQocm91dGUodGhpcy4kcm91dGUubmFtZSwgdGhpcy4kcm91dGUucGFyYW1zLmlkLCBmYWxzZSkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgdGhpcy5wcm9maWxlVXNlciA9IHJlc3BvbnNlLmRhdGEudXNlcjtcXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgLmhhcy1sYXRlcmFsLWJvcmRlcnMge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIH1cXG5cXG4gICAgLnN0YXQtdmFsdWUge1xcbiAgICAgICAgZm9udC1zaXplOiAzZW07XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcXG4gICAgfVxcblxcbiAgICAuc3RhdC1rZXkge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICB9XFxuXFxuICAgIC5sZXZlbC51c2VyLWNvbnRyb2xzIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLnRpbWVsaW5lLWNvbnRlbnQge1xcbiAgICAgICAgdHJhbnNpdGlvbjphbGwgMXMgZWFzZTtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTE4YTNjYjQ4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgdi1pZj1cImluaXRpYWxpc2VkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3ggcHJvZmlsZS1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLWhhbGYtZGVza3RvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtbmFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlIGlzLTEyOHgxMjhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiYXZhdGFyTGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1pdGVtIGhhcy1wYWRkaW5nLXRvcC1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTNcIj57eyBwcm9maWxlVXNlci5mdWxsTmFtZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBfXygncm9sZScpIH19OiB7eyBwcm9maWxlVXNlci5yb2xlLm5hbWUgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgX18oJ3NpbmNlJykgfX06IHt7IHByb2ZpbGVVc2VyLmNyZWF0ZWRfYXQgfCB0aW1lRnJvbU5vdyB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhhcy1tYXJnaW4tdG9wLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbCB1c2VyLWNvbnRyb2xzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpc1NlbGZWaXNpdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXNtYWxsIGlzLXdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiYXZhdGFySWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZWxldGVBdmF0YXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInRyYXNoLWFsdFwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnQXZhdGFyJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWxlLXVwbG9hZGVyIHYtaWY9XCIhYXZhdGFySWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBsb2FkLXN1Y2Nlc3NmdWw9XCIkc3RvcmUuY29tbWl0KCdzZXRVc2VyQXZhdGFyJywgJGV2ZW50LmlkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp1cmw9XCJ1cGxvYWRBdmF0YXJMaW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwidXBsb2FkLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gIGNsYXNzPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInByb3BzLm9wZW5GaWxlQnJvd3NlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInVwbG9hZFwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnQXZhdGFyJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpbGUtdXBsb2FkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtc21hbGwgaXMtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwibG9nb3V0KClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInNpZ24tb3V0LWFsdFwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnTG9nIE91dCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXNtYWxsIGlzLXdhcm5pbmdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRidXMuJGVtaXQoJ3N0YXJ0LWltcGVyc29uYXRpbmcnLCBwcm9maWxlVXNlci5pZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhJHN0b3JlLnN0YXRlLmltcGVyc29uYXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnSW1wZXJzb25hdGUnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLWhhbGYtZGVza3RvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGF0LXZhbHVlXCI+e3sgcHJvZmlsZVVzZXIubG9naW5Db3VudCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGF0LWtleVwiPnt7IF9fKCdsb2dpbnMnKSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZCBoYXMtbGF0ZXJhbC1ib3JkZXJzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhdC12YWx1ZVwiPnt7IHByb2ZpbGVVc2VyLmFjdGlvbkxvZ0NvdW50IH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YXQta2V5XCI+e3sgX18oJ2FjdGlvbnMnKSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YXQtdmFsdWVcIj57eyBwcm9maWxlVXNlci5yYXRpbmcgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhdC1rZXlcIj57eyBfXygncmF0aW5nJykgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWNlbnRlcmVkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLXR3by10aGlyZHMtdGFibGV0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVwicGFnaW5hdGlvbiBpcy1zbWFsbCBoYXMtbWFyZ2luLWJvdHRvbS1sYXJnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLXByZXZpb3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJwcm9maWxlVXNlci50aW1lbGluZS5wcmV2X3BhZ2VfdXJsPT09bnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKCdQcmV2aW91cycpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgKyAxKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwicHJvZmlsZVVzZXIudGltZWxpbmUubmV4dF9wYWdlX3VybD09PW51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnTmV4dCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIiB2LWlmPVwiaXNTaG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImkgaW4gcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtY3VycmVudCc6IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gaX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIiB2LWlmPVwiaXNBdFN0YXJ0ICYmICFpc1Nob3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiaSBpbiAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtY3VycmVudCc6IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gaX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWVsbGlwc2lzXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb24tbGlzdFwiIHYtaWY9XCJoYXNNaWRkbGUgJiYgIWlzU2hvcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UoMSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1lbGxpcHNpc1wiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgLSAxIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmsgaXMtY3VycmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgKyAxKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWVsbGlwc2lzXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb24tbGlzdFwiIHYtaWY9XCJpc0F0RW5kICYmICFpc1Nob3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tZWxsaXBzaXNcIj4maGVsbGlwOzwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImkgaW4gM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWN1cnJlbnQnOiBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtIDMgKyBpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtIDMgKyBpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIC0gMyArIGkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidGltZWxpbmUgaGFzLXBhZGRpbmctbGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoYWN0aW9ucywgZGF5KSBpbiB0aW1lbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0aW1lbGluZS1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGltZWxpbmUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIGlzLW1lZGl1bSBpcy1wcmltYXJ5XCI+e3sgX18oZGF5KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGxpIGNsYXNzPVwidGltZWxpbmUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtbWFya2VyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlYWRpbmdcIj5KYW51YXJ5IDIwMTY8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaW1lbGluZSBjb250ZW50IC0gQ2FuIGluY2x1ZGUgYW55IEhUTUwgZWxlbWVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGltZWxpbmUtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGFjdGlvbiwgaW5kZXgpIGluIGFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLW1hcmtlciBpcy1pY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImdldENsYXNzKGFjdGlvbi5yb3V0ZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cImdldEljb24oYWN0aW9uLnJvdXRlKVwiIHNpemU9XCJ4c1wiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWFkaW5nXCI+e3sgZ2V0SFJEYXRlKGFjdGlvbi5jcmVhdGVkX2F0KSB9fSB7eyBnZXRIUlRpbWUoYWN0aW9uLmNyZWF0ZWRfYXQpIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgYWN0aW9uLnBlcm1pc3Npb24uZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpbWVsaW5lLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgaXMtbWVkaXVtIGlzLXByaW1hcnlcIj57eyBfXygnRW5kJykgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGltZWxpbmUtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1tYXJrZXIgaXMtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cImVsbGlwc2lzLWhcIiBzaXplPVwieHNcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gJ2RhdGUtZm5zJztcbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHtcbiAgICBmYVRyYXNoQWx0LCBmYVVwbG9hZCwgZmFTaWduT3V0QWx0LCBmYUVsbGlwc2lzSCxcbiAgICBmYUV5ZSwgZmFQbHVzLCBmYVBlbmNpbEFsdCxcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xuaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWUnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChbXG4gICAgZmFUcmFzaEFsdCwgZmFVcGxvYWQsIGZhU2lnbk91dEFsdCwgZmFFbGxpcHNpc0gsXG4gICAgZmFFeWUsIGZhUGx1cywgZmFQZW5jaWxBbHQsXG5dKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHsgRmlsZVVwbG9hZGVyIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdsb2NhbGUnLCB7XG4gICAgICAgICAgICBfXzogJ19fJyxcbiAgICAgICAgICAgIGxvY2FsZTogJ2N1cnJlbnQnLFxuICAgICAgICB9KSxcbiAgICAgICAgLi4ubWFwU3RhdGUoWyd1c2VyJywgJ21ldGEnXSksXG4gICAgICAgIHVwbG9hZEF2YXRhckxpbmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGUoJ2NvcmUuYXZhdGFycy5zdG9yZScsIFtdLCBmYWxzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU2VsZlZpc2l0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlci5pZCA9PT0gdGhpcy5wcm9maWxlVXNlci5pZDtcbiAgICAgICAgfSxcbiAgICAgICAgYXZhdGFySWQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1NlbGZWaXNpdGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXIuYXZhdGFySWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVVc2VyLmF2YXRhciA/IHRoaXMucHJvZmlsZVVzZXIuYXZhdGFyLmlkIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgYXZhdGFyTGluaygpIHtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZSgnY29yZS5hdmF0YXJzLnNob3cnLCAodGhpcy5hdmF0YXJJZCB8fCAnbnVsbCcpLCBmYWxzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVsaW5lKCkge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUuZGF0YTtcblxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMubWFwKGFjdGlvbiA9PiBhY3Rpb24uY3JlYXRlZF9hdCkucmVkdWNlKChkYXlzLCByZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICBkYXlzLnB1c2godGhpcy5nZXREYXkocmVjb3JkKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgICAgICAgICB9LCBbXSkuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIGRheXMpID0+IGRheXMuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4KVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHRpbWVsaW5lLCBkYXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVbZGF5XSA9IGFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocmVjb3JkID0+IHRoaXMuZ2V0RGF5KHJlY29yZC5jcmVhdGVkX2F0KSA9PT0gZGF5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsaW5lO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNTaG9ydCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSA8PSA1O1xuICAgICAgICB9LFxuICAgICAgICBpc0F0U3RhcnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPD0gMjtcbiAgICAgICAgfSxcbiAgICAgICAgaXNBdEVuZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgIC0gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPD0gMjtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzTWlkZGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzQXRTdGFydCAmJiAhdGhpcy5pc0F0RW5kO1xuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uVXJsKCkge1xuICAgICAgICAgICAgcmV0dXJuIGAke3JvdXRlKCdhZG1pbmlzdHJhdGlvbi51c2Vycy5zaG93JywgW3RoaXMucHJvZmlsZVVzZXIuaWRdLCBmYWxzZSl9P3BhZ2U9YDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2ZpbGVVc2VyOiB7fSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgbG9jYWxlOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSh0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGRlbGV0ZUF2YXRhcigpIHtcbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShyb3V0ZSgnY29yZS5hdmF0YXJzLmRlc3Ryb3knLCB0aGlzLnVzZXIuYXZhdGFySWQsIGZhbHNlKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRVc2VyQXZhdGFyJywgbnVsbCk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvZ291dCgpIHtcbiAgICAgICAgICAgIGF4aW9zLnBvc3Qocm91dGUoJ2xvZ291dCcsIFtdLCBmYWxzZSkudG9TdHJpbmcoKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvbG9nb3V0Jyk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldERheSh0aW1lc3RhbXApIHtcbiAgICAgICAgICAgIHJldHVybiBmb3JtYXQodGltZXN0YW1wLCAnZGRkZCcpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRIUkRhdGUodGltZXN0YW1wKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0KHRpbWVzdGFtcCwgdGhpcy5tZXRhLmRhdGVGb3JtYXQpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRIUlRpbWUodGltZXN0YW1wKSB7XG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0KHRpbWVzdGFtcCwgJ0g6bW0nKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SWNvbihhY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaW5kZXhPZignaW5kZXgnKSA+IDApIHJldHVybiBmYUV5ZTtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaW5kZXhPZignY3JlYXRlJykgPiAwKSByZXR1cm4gZmFQbHVzO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbmRleE9mKCdlZGl0JykgPiAwKSByZXR1cm4gZmFQZW5jaWxBbHQ7XG4gICAgICAgICAgICByZXR1cm4gZmFUcmFzaEFsdDtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2xhc3MoYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2luZGV4JykgPiAwKSByZXR1cm4gJ2hhcy10ZXh0LXN1Y2Nlc3MnO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbmRleE9mKCdjcmVhdGUnKSA+IDApIHJldHVybiAnaGFzLXRleHQtd2FybmluZyc7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2VkaXQnKSA+IDApIHJldHVybiAnaGFzLXRleHQtd2FybmluZyc7XG4gICAgICAgICAgICByZXR1cm4gJ2hhcy10ZXh0LWRhbmdlcic7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFBhZ2UocGFnZSkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHRoaXMucGFnaW5hdGlvblVybCArIHBhZ2UpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlVXNlciA9IGRhdGEudXNlcjtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KHJvdXRlKHRoaXMuJHJvdXRlLm5hbWUsIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCwgZmFsc2UpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9maWxlVXNlciA9IHJlc3BvbnNlLmRhdGEudXNlcjtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAuaGFzLWxhdGVyYWwtYm9yZGVycyB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG4gICAgfVxuXG4gICAgLnN0YXQtdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgLnN0YXQta2V5IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAubGV2ZWwudXNlci1jb250cm9scyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lLWNvbnRlbnQge1xuICAgICAgICB0cmFuc2l0aW9uOmFsbCAxcyBlYXNlO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaW5pdGlhbGlzZWRcbiAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3ggcHJvZmlsZS1oZWFkaW5nXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBpcy1oYWxmLWRlc2t0b3BcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tb2JpbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtbmFycm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZSBpcy0xMjh4MTI4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmF2YXRhckxpbmsgfSB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWl0ZW0gaGFzLXBhZGRpbmctdG9wLXNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHJvZmlsZVVzZXIuZnVsbE5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9fKFwicm9sZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByb2ZpbGVVc2VyLnJvbGUubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJzaW5jZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9mKFwidGltZUZyb21Ob3dcIikoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIuY3JlYXRlZF9hdFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImhhcy1tYXJnaW4tdG9wLXNtYWxsXCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc1NlbGZWaXNpdGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwgdXNlci1jb250cm9sc1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYXZhdGFySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbiBpcy1zbWFsbCBpcy13YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS5kZWxldGVBdmF0YXIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwidHJhc2gtYWx0XCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9fKFwiQXZhdGFyXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIV92bS5hdmF0YXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJmaWxlLXVwbG9hZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IF92bS51cGxvYWRBdmF0YXJMaW5rXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ1cGxvYWQtc3VjY2Vzc2Z1bFwiOiBmdW5jdGlvbihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzdG9yZS5jb21taXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic2V0VXNlckF2YXRhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleTogXCJ1cGxvYWQtYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGlzLXNtYWxsIGlzLWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLm9wZW5GaWxlQnJvd3NlclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFwidXBsb2FkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX18oXCJBdmF0YXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGlzLXNtYWxsIGlzLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2dvdXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInNpZ24tb3V0LWFsdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIkxvZyBPdXRcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uJHN0b3JlLnN0YXRlLmltcGVyc29uYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbiBpcy1zbWFsbCBpcy13YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRidXMuJGVtaXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFydC1pbXBlcnNvbmF0aW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIkltcGVyc29uYXRlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBpcy1oYWxmLWRlc2t0b3BcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tb2JpbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LXZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcm9maWxlVXNlci5sb2dpbkNvdW50KSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQta2V5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fXyhcImxvZ2luc1wiKSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWQgaGFzLWxhdGVyYWwtYm9yZGVyc1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LXZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnByb2ZpbGVVc2VyLmFjdGlvbkxvZ0NvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQta2V5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9fKFwiYWN0aW9uc1wiKSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC12YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHJvZmlsZVVzZXIucmF0aW5nKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQta2V5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fXyhcInJhdGluZ1wiKSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtY2VudGVyZWRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtdHdvLXRoaXJkcy10YWJsZXRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJuYXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24gaXMtc21hbGwgaGFzLW1hcmdpbi1ib3R0b20tbGFyZ2VcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tcHJldmlvdXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5wcmV2X3BhZ2VfdXJsID09PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGFnZShfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIlByZXZpb3VzXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLW5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5uZXh0X3BhZ2VfdXJsID09PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGFnZShfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIk5leHRcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pc1Nob3J0XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSwgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IGtleTogaSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1jdXJyZW50XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PSBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXNBdFN0YXJ0ICYmICFfdm0uaXNTaG9ydFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woMywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsga2V5OiBpIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWN1cnJlbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmhhc01pZGRsZSAmJiAhX3ZtLmlzU2hvcnRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGluayBpcy1jdXJyZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pc0F0RW5kICYmICFfdm0uaXNTaG9ydFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGFnZSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbCgzLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IGkgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtY3VycmVudFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIC0gMyArIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aW1lbGluZSBoYXMtcGFkZGluZy1sYXJnZVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50aW1lbGluZSwgZnVuY3Rpb24oYWN0aW9ucywgZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBkYXksIHN0YXRpY0NsYXNzOiBcInRpbWVsaW5lLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJ0aW1lbGluZS1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFnIGlzLW1lZGl1bSBpcy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uX18oZGF5KSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woYWN0aW9ucywgZnVuY3Rpb24oYWN0aW9uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0aW1lbGluZS1tYXJrZXIgaXMtaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZ2V0Q2xhc3MoYWN0aW9uLnJvdXRlKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBfdm0uZ2V0SWNvbihhY3Rpb24ucm91dGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBcInhzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldEhSRGF0ZShhY3Rpb24uY3JlYXRlZF9hdCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldEhSVGltZShhY3Rpb24uY3JlYXRlZF9hdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGFjdGlvbi5wZXJtaXNzaW9uLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PVxuICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJ0aW1lbGluZS1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFnIGlzLW1lZGl1bSBpcy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLl9fKFwiRW5kXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtaXRlbVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpbWVsaW5lLW1hcmtlciBpcy1pY29uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJlbGxpcHNpcy1oXCIsIHNpemU6IFwieHNcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgOiBfdm0uX2UoKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWVsbGlwc2lzXCIgfSwgW192bS5fdihcIuKAplwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWVsbGlwc2lzXCIgfSwgW192bS5fdihcIuKAplwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWVsbGlwc2lzXCIgfSwgW192bS5fdihcIuKAplwiKV0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWVsbGlwc2lzXCIgfSwgW192bS5fdihcIuKAplwiKV0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMThhM2NiNDhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTE4YTNjYjQ4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIGRheSBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIHZhciByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mRGF5IChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydE9mRGF5XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydF9vZl9kYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBhZGRNaWxsaXNlY29uZHMgPSByZXF1aXJlKCcuLi9hZGRfbWlsbGlzZWNvbmRzL2luZGV4LmpzJylcblxudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMFxuXG4vKipcbiAqIEBjYXRlZ29yeSBIb3VyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBob3VycyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBob3VycyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIGhvdXJzIHRvIGJlIGFkZGVkXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGhvdXJzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAyIGhvdXJzIHRvIDEwIEp1bHkgMjAxNCAyMzowMDowMDpcbiAqIHZhciByZXN1bHQgPSBhZGRIb3VycyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMjMsIDApLCAyKVxuICogLy89PiBGcmkgSnVsIDExIDIwMTQgMDE6MDA6MDBcbiAqL1xuZnVuY3Rpb24gYWRkSG91cnMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudClcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGFtb3VudCAqIE1JTExJU0VDT05EU19JTl9IT1VSKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZEhvdXJzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGRfaG91cnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgZ2V0SVNPWWVhciA9IHJlcXVpcmUoJy4uL2dldF9pc29feWVhci9pbmRleC5qcycpXG52YXIgc2V0SVNPWWVhciA9IHJlcXVpcmUoJy4uL3NldF9pc29feWVhci9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyB0byBiZSBhZGRlZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIHRvIDIgSnVseSAyMDEwOlxuICogdmFyIHJlc3VsdCA9IGFkZElTT1llYXJzKG5ldyBEYXRlKDIwMTAsIDYsIDIpLCA1KVxuICogLy89PiBGcmkgSnVuIDI2IDIwMTUgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gYWRkSVNPWWVhcnMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudClcbiAgcmV0dXJuIHNldElTT1llYXIoZGlydHlEYXRlLCBnZXRJU09ZZWFyKGRpcnR5RGF0ZSkgKyBhbW91bnQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkSVNPWWVhcnNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZF9pc29feWVhcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG52YXIgc3RhcnRPZklTT1llYXIgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9pc29feWVhci9pbmRleC5qcycpXG52YXIgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzID0gcmVxdWlyZSgnLi4vZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9kYXlzL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgU2V0IHRoZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhciB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNldCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgdG8gdGhlIGdpdmVuIGRhdGUsXG4gKiBzYXZpbmcgdGhlIHdlZWsgbnVtYmVyIGFuZCB0aGUgd2Vla2RheSBudW1iZXIuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGlzb1llYXIgLSB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgb2YgdGhlIG5ldyBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIHNldHRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgMjAwNyB0byAyOSBEZWNlbWJlciAyMDA4OlxuICogdmFyIHJlc3VsdCA9IHNldElTT1llYXIobmV3IERhdGUoMjAwOCwgMTEsIDI5KSwgMjAwNylcbiAqIC8vPT4gTW9uIEphbiAwMSAyMDA3IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHNldElTT1llYXIgKGRpcnR5RGF0ZSwgZGlydHlJU09ZZWFyKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgaXNvWWVhciA9IE51bWJlcihkaXJ0eUlTT1llYXIpXG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKGRhdGUsIHN0YXJ0T2ZJU09ZZWFyKGRhdGUpKVxuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMClcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKGlzb1llYXIsIDAsIDQpXG4gIGZvdXJ0aE9mSmFudWFyeS5zZXRIb3VycygwLCAwLCAwLCAwKVxuICBkYXRlID0gc3RhcnRPZklTT1llYXIoZm91cnRoT2ZKYW51YXJ5KVxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBkaWZmKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldElTT1llYXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldF9pc29feWVhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBhZGRNaWxsaXNlY29uZHMgPSByZXF1aXJlKCcuLi9hZGRfbWlsbGlzZWNvbmRzL2luZGV4LmpzJylcblxudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMFxuXG4vKipcbiAqIEBjYXRlZ29yeSBNaW51dGUgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbnV0ZXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbWludXRlcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbnV0ZXMgdG8gYmUgYWRkZWRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWludXRlcyBhZGRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMzAgbWludXRlcyB0byAxMCBKdWx5IDIwMTQgMTI6MDA6MDA6XG4gKiB2YXIgcmVzdWx0ID0gYWRkTWludXRlcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDApLCAzMClcbiAqIC8vPT4gVGh1IEp1bCAxMCAyMDE0IDEyOjMwOjAwXG4gKi9cbmZ1bmN0aW9uIGFkZE1pbnV0ZXMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudClcbiAgcmV0dXJuIGFkZE1pbGxpc2Vjb25kcyhkaXJ0eURhdGUsIGFtb3VudCAqIE1JTExJU0VDT05EU19JTl9NSU5VVEUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkTWludXRlc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkX21pbnV0ZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgYWRkTW9udGhzID0gcmVxdWlyZSgnLi4vYWRkX21vbnRocy9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFF1YXJ0ZXIgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHllYXIgcXVhcnRlcnMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgeWVhciBxdWFydGVycyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIHF1YXJ0ZXJzIHRvIGJlIGFkZGVkXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIHF1YXJ0ZXJzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCAxIHF1YXJ0ZXIgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIHZhciByZXN1bHQgPSBhZGRRdWFydGVycyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMSlcbiAqIC8vPT4gTW9uIERlYyAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIGFkZFF1YXJ0ZXJzIChkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHZhciBhbW91bnQgPSBOdW1iZXIoZGlydHlBbW91bnQpXG4gIHZhciBtb250aHMgPSBhbW91bnQgKiAzXG4gIHJldHVybiBhZGRNb250aHMoZGlydHlEYXRlLCBtb250aHMpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYWRkUXVhcnRlcnNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZF9xdWFydGVycy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBhZGRNaWxsaXNlY29uZHMgPSByZXF1aXJlKCcuLi9hZGRfbWlsbGlzZWNvbmRzL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBzZWNvbmRzIHRvIGJlIGFkZGVkXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIHNlY29uZHMgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDMwIHNlY29uZHMgdG8gMTAgSnVseSAyMDE0IDEyOjQ1OjAwOlxuICogdmFyIHJlc3VsdCA9IGFkZFNlY29uZHMobmV3IERhdGUoMjAxNCwgNiwgMTAsIDEyLCA0NSwgMCksIDMwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzBcbiAqL1xuZnVuY3Rpb24gYWRkU2Vjb25kcyAoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICB2YXIgYW1vdW50ID0gTnVtYmVyKGRpcnR5QW1vdW50KVxuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgYW1vdW50ICogMTAwMClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRTZWNvbmRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGRfc2Vjb25kcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBhZGRNb250aHMgPSByZXF1aXJlKCcuLi9hZGRfbW9udGhzL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgeWVhcnMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgeWVhcnMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiB5ZWFycyB0byBiZSBhZGRlZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSB5ZWFycyBhZGRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNSB5ZWFycyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IGFkZFllYXJzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxuICogLy89PiBTdW4gU2VwIDAxIDIwMTkgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gYWRkWWVhcnMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudClcbiAgcmV0dXJuIGFkZE1vbnRocyhkaXJ0eURhdGUsIGFtb3VudCAqIDEyKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFkZFllYXJzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGRfeWVhcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgZ2V0SVNPWWVhciA9IHJlcXVpcmUoJy4uL2dldF9pc29feWVhci9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgYXJlIDEgSmFudWFyeSAyMDEwIGFuZCAxIEphbnVhcnkgMjAxMj9cbiAqIHZhciByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1llYXJzKFxuICogICBuZXcgRGF0ZSgyMDEyLCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxMCwgMCwgMSlcbiAqIClcbiAqIC8vPT4gMlxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1llYXJzIChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXR1cm4gZ2V0SVNPWWVhcihkaXJ0eURhdGVMZWZ0KSAtIGdldElTT1llYXIoZGlydHlEYXRlUmlnaHQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJJU09ZZWFyc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9pc29feWVhcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgbW9udGhzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIG1vbnRocyBhcmUgYmV0d2VlbiAzMSBKYW51YXJ5IDIwMTQgYW5kIDEgU2VwdGVtYmVyIDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAzMSlcbiAqIClcbiAqIC8vPT4gOFxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRocyAoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgdmFyIGRhdGVMZWZ0ID0gcGFyc2UoZGlydHlEYXRlTGVmdClcbiAgdmFyIGRhdGVSaWdodCA9IHBhcnNlKGRpcnR5RGF0ZVJpZ2h0KVxuXG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKVxuICB2YXIgbW9udGhEaWZmID0gZGF0ZUxlZnQuZ2V0TW9udGgoKSAtIGRhdGVSaWdodC5nZXRNb250aCgpXG5cbiAgcmV0dXJuIHllYXJEaWZmICogMTIgKyBtb250aERpZmZcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmZXJlbmNlSW5DYWxlbmRhck1vbnRoc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9tb250aHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFF1YXJ0ZXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSB5ZWFyIHF1YXJ0ZXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIHllYXIgcXVhcnRlciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcXVhcnRlclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBxdWFydGVyIGlzIDIgSnVseSAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGdldFF1YXJ0ZXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDNcbiAqL1xuZnVuY3Rpb24gZ2V0UXVhcnRlciAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgcXVhcnRlciA9IE1hdGguZmxvb3IoZGF0ZS5nZXRNb250aCgpIC8gMykgKyAxXG4gIHJldHVybiBxdWFydGVyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0UXVhcnRlclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X3F1YXJ0ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgeWVhcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgeWVhcnNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgeWVhcnMgYXJlIGJldHdlZW4gMzEgRGVjZW1iZXIgMjAxMyBhbmQgMTEgRmVicnVhcnkgMjAxNT9cbiAqIHZhciByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzKFxuICogICBuZXcgRGF0ZSgyMDE1LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDIwMTMsIDExLCAzMSlcbiAqIClcbiAqIC8vPT4gMlxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzIChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGF0ZUxlZnQgPSBwYXJzZShkaXJ0eURhdGVMZWZ0KVxuICB2YXIgZGF0ZVJpZ2h0ID0gcGFyc2UoZGlydHlEYXRlUmlnaHQpXG5cbiAgcmV0dXJuIGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyWWVhcnNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfeWVhcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG52YXIgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzID0gcmVxdWlyZSgnLi4vZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9kYXlzL2luZGV4LmpzJylcbnZhciBjb21wYXJlQXNjID0gcmVxdWlyZSgnLi4vY29tcGFyZV9hc2MvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBmdWxsIGRheXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluRGF5cyhcbiAqICAgbmV3IERhdGUoMjAxMiwgNiwgMiwgMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTEsIDYsIDIsIDIzLCAwKVxuICogKVxuICogLy89PiAzNjVcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluRGF5cyAoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgdmFyIGRhdGVMZWZ0ID0gcGFyc2UoZGlydHlEYXRlTGVmdClcbiAgdmFyIGRhdGVSaWdodCA9IHBhcnNlKGRpcnR5RGF0ZVJpZ2h0KVxuXG4gIHZhciBzaWduID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KVxuICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyRGF5cyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSlcbiAgZGF0ZUxlZnQuc2V0RGF0ZShkYXRlTGVmdC5nZXREYXRlKCkgLSBzaWduICogZGlmZmVyZW5jZSlcblxuICAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgZGF5cyAtIGRpZmYgaW4gY2FsZW5kYXIgZGF5cykgPT09IDEgaWYgbGFzdCBjYWxlbmRhciBkYXkgaXMgbm90IGZ1bGxcbiAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG4gIHZhciBpc0xhc3REYXlOb3RGdWxsID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ25cbiAgcmV0dXJuIHNpZ24gKiAoZGlmZmVyZW5jZSAtIGlzTGFzdERheU5vdEZ1bGwpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGlmZmVyZW5jZUluRGF5c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9kYXlzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGFkZElTT1llYXJzID0gcmVxdWlyZSgnLi4vYWRkX2lzb195ZWFycy9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIHRvIGJlIHN1YnRyYWN0ZWRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIHN1YnRyYWN0ZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNSBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgZnJvbSAxIFNlcHRlbWJlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IHN1YklTT1llYXJzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxuICogLy89PiBNb24gQXVnIDMxIDIwMDkgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3ViSVNPWWVhcnMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudClcbiAgcmV0dXJuIGFkZElTT1llYXJzKGRpcnR5RGF0ZSwgLWFtb3VudClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdWJJU09ZZWFyc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3ViX2lzb195ZWFycy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBjb21wYXJlRGVzYyA9IHJlcXVpcmUoJy4uL2NvbXBhcmVfZGVzYy9pbmRleC5qcycpXG52YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG52YXIgZGlmZmVyZW5jZUluU2Vjb25kcyA9IHJlcXVpcmUoJy4uL2RpZmZlcmVuY2VfaW5fc2Vjb25kcy9pbmRleC5qcycpXG52YXIgZGlmZmVyZW5jZUluTW9udGhzID0gcmVxdWlyZSgnLi4vZGlmZmVyZW5jZV9pbl9tb250aHMvaW5kZXguanMnKVxudmFyIGVuTG9jYWxlID0gcmVxdWlyZSgnLi4vbG9jYWxlL2VuL2luZGV4LmpzJylcblxudmFyIE1JTlVURVNfSU5fREFZID0gMTQ0MFxudmFyIE1JTlVURVNfSU5fQUxNT1NUX1RXT19EQVlTID0gMjUyMFxudmFyIE1JTlVURVNfSU5fTU9OVEggPSA0MzIwMFxudmFyIE1JTlVURVNfSU5fVFdPX01PTlRIUyA9IDg2NDAwXG5cbi8qKlxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcyBpbiB3b3Jkcy5cbiAqXG4gKiB8IERpc3RhbmNlIGJldHdlZW4gZGF0ZXMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgLi4uIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbGVzcyB0aGFuIGEgbWludXRlICB8XG4gKiB8IDMwIHNlY3MgLi4uIDEgbWluIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgMSBtaW51dGUgICAgICAgICAgICB8XG4gKiB8IDEgbWluIDMwIHNlY3MgLi4uIDQ0IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjQ0XSBtaW51dGVzICAgICB8XG4gKiB8IDQ0IG1pbnMgLi4uIDMwIHNlY3MgLi4uIDg5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSBob3VyICAgICAgICB8XG4gKiB8IDg5IG1pbnMgMzAgc2VjcyAuLi4gMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgWzIuLjI0XSBob3VycyB8XG4gKiB8IDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgIHwgMSBkYXkgICAgICAgICAgICAgICB8XG4gKiB8IDQxIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAgICAgICAgIHwgWzIuLjMwXSBkYXlzICAgICAgICB8XG4gKiB8IDI5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNDQgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMSBtb250aCAgICAgICB8XG4gKiB8IDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gNTkgZGF5cyAyMyBocnMgNTkgbWlucyAzMCBzZWNzIHwgYWJvdXQgMiBtb250aHMgICAgICB8XG4gKiB8IDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyAuLi4gMSB5ciAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgWzIuLjEyXSBtb250aHMgICAgICB8XG4gKiB8IDEgeXIgLi4uIDEgeXIgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgMSB5ZWFyICAgICAgICB8XG4gKiB8IDEgeXIgMyBtb250aHMgLi4uIDEgeXIgOSBtb250aCBzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciAxIHllYXIgICAgICAgICB8XG4gKiB8IDEgeXIgOSBtb250aHMgLi4uIDIgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IDIgeWVhcnMgICAgICB8XG4gKiB8IE4geXJzIC4uLiBOIHlycyAzIG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWJvdXQgTiB5ZWFycyAgICAgICB8XG4gKiB8IE4geXJzIDMgbW9udGhzIC4uLiBOIHlycyA5IG1vbnRocyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgb3ZlciBOIHllYXJzICAgICAgICB8XG4gKiB8IE4geXJzIDkgbW9udGhzIC4uLiBOKzEgeXJzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWxtb3N0IE4rMSB5ZWFycyAgICB8XG4gKlxuICogV2l0aCBgb3B0aW9ucy5pbmNsdWRlU2Vjb25kcyA9PSB0cnVlYDpcbiAqIHwgRGlzdGFuY2UgYmV0d2VlbiBkYXRlcyB8IFJlc3VsdCAgICAgICAgICAgICAgIHxcbiAqIHwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCBzZWNzIC4uLiA1IHNlY3MgICAgICB8IGxlc3MgdGhhbiA1IHNlY29uZHMgIHxcbiAqIHwgNSBzZWNzIC4uLiAxMCBzZWNzICAgICB8IGxlc3MgdGhhbiAxMCBzZWNvbmRzIHxcbiAqIHwgMTAgc2VjcyAuLi4gMjAgc2VjcyAgICB8IGxlc3MgdGhhbiAyMCBzZWNvbmRzIHxcbiAqIHwgMjAgc2VjcyAuLi4gNDAgc2VjcyAgICB8IGhhbGYgYSBtaW51dGUgICAgICAgIHxcbiAqIHwgNDAgc2VjcyAuLi4gNjAgc2VjcyAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgIHxcbiAqIHwgNjAgc2VjcyAuLi4gOTAgc2VjcyAgICB8IDEgbWludXRlICAgICAgICAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3RoZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBpbmRpY2F0ZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5sb2NhbGU9ZW5Mb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDIgSnVseSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNT9cbiAqIHZhciByZXN1bHQgPSBkaXN0YW5jZUluV29yZHMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxKVxuICogKVxuICogLy89PiAnNiBtb250aHMnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTVcbiAqIC8vIGFuZCAxIEphbnVhcnkgMjAxNSAwMDowMDowMCwgaW5jbHVkaW5nIHNlY29uZHM/XG4gKiB2YXIgcmVzdWx0ID0gZGlzdGFuY2VJbldvcmRzKFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogICB7aW5jbHVkZVNlY29uZHM6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdsZXNzIHRoYW4gMjAgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIHdpdGggYSBzdWZmaXg/XG4gKiB2YXIgcmVzdWx0ID0gZGlzdGFuY2VJbldvcmRzKFxuICogICBuZXcgRGF0ZSgyMDE2LCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSksXG4gKiAgIHthZGRTdWZmaXg6IHRydWV9XG4gKiApXG4gKiAvLz0+ICdhYm91dCAxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgQXVndXN0IDIwMTYgYW5kIDEgSmFudWFyeSAyMDE1IGluIEVzcGVyYW50bz9cbiAqIHZhciBlb0xvY2FsZSA9IHJlcXVpcmUoJ2RhdGUtZm5zL2xvY2FsZS9lbycpXG4gKiB2YXIgcmVzdWx0ID0gZGlzdGFuY2VJbldvcmRzKFxuICogICBuZXcgRGF0ZSgyMDE2LCA3LCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSksXG4gKiAgIHtsb2NhbGU6IGVvTG9jYWxlfVxuICogKVxuICogLy89PiAncGxpIG9sIDEgamFybydcbiAqL1xuZnVuY3Rpb24gZGlzdGFuY2VJbldvcmRzIChkaXJ0eURhdGVUb0NvbXBhcmUsIGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKSB7XG4gIHZhciBvcHRpb25zID0gZGlydHlPcHRpb25zIHx8IHt9XG5cbiAgdmFyIGNvbXBhcmlzb24gPSBjb21wYXJlRGVzYyhkaXJ0eURhdGVUb0NvbXBhcmUsIGRpcnR5RGF0ZSlcblxuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGVcbiAgdmFyIGxvY2FsaXplID0gZW5Mb2NhbGUuZGlzdGFuY2VJbldvcmRzLmxvY2FsaXplXG4gIGlmIChsb2NhbGUgJiYgbG9jYWxlLmRpc3RhbmNlSW5Xb3JkcyAmJiBsb2NhbGUuZGlzdGFuY2VJbldvcmRzLmxvY2FsaXplKSB7XG4gICAgbG9jYWxpemUgPSBsb2NhbGUuZGlzdGFuY2VJbldvcmRzLmxvY2FsaXplXG4gIH1cblxuICB2YXIgbG9jYWxpemVPcHRpb25zID0ge1xuICAgIGFkZFN1ZmZpeDogQm9vbGVhbihvcHRpb25zLmFkZFN1ZmZpeCksXG4gICAgY29tcGFyaXNvbjogY29tcGFyaXNvblxuICB9XG5cbiAgdmFyIGRhdGVMZWZ0LCBkYXRlUmlnaHRcbiAgaWYgKGNvbXBhcmlzb24gPiAwKSB7XG4gICAgZGF0ZUxlZnQgPSBwYXJzZShkaXJ0eURhdGVUb0NvbXBhcmUpXG4gICAgZGF0ZVJpZ2h0ID0gcGFyc2UoZGlydHlEYXRlKVxuICB9IGVsc2Uge1xuICAgIGRhdGVMZWZ0ID0gcGFyc2UoZGlydHlEYXRlKVxuICAgIGRhdGVSaWdodCA9IHBhcnNlKGRpcnR5RGF0ZVRvQ29tcGFyZSlcbiAgfVxuXG4gIHZhciBzZWNvbmRzID0gZGlmZmVyZW5jZUluU2Vjb25kcyhkYXRlUmlnaHQsIGRhdGVMZWZ0KVxuICB2YXIgb2Zmc2V0ID0gZGF0ZVJpZ2h0LmdldFRpbWV6b25lT2Zmc2V0KCkgLSBkYXRlTGVmdC5nZXRUaW1lem9uZU9mZnNldCgpXG4gIHZhciBtaW51dGVzID0gTWF0aC5yb3VuZChzZWNvbmRzIC8gNjApIC0gb2Zmc2V0XG4gIHZhciBtb250aHNcblxuICAvLyAwIHVwIHRvIDIgbWluc1xuICBpZiAobWludXRlcyA8IDIpIHtcbiAgICBpZiAob3B0aW9ucy5pbmNsdWRlU2Vjb25kcykge1xuICAgICAgaWYgKHNlY29uZHMgPCA1KSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZSgnbGVzc1RoYW5YU2Vjb25kcycsIDUsIGxvY2FsaXplT3B0aW9ucylcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDEwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZSgnbGVzc1RoYW5YU2Vjb25kcycsIDEwLCBsb2NhbGl6ZU9wdGlvbnMpXG4gICAgICB9IGVsc2UgaWYgKHNlY29uZHMgPCAyMCkge1xuICAgICAgICByZXR1cm4gbG9jYWxpemUoJ2xlc3NUaGFuWFNlY29uZHMnLCAyMCwgbG9jYWxpemVPcHRpb25zKVxuICAgICAgfSBlbHNlIGlmIChzZWNvbmRzIDwgNDApIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplKCdoYWxmQU1pbnV0ZScsIG51bGwsIGxvY2FsaXplT3B0aW9ucylcbiAgICAgIH0gZWxzZSBpZiAoc2Vjb25kcyA8IDYwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZSgneE1pbnV0ZXMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChtaW51dGVzID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZSgnbGVzc1RoYW5YTWludXRlcycsIDEsIGxvY2FsaXplT3B0aW9ucylcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBsb2NhbGl6ZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpXG4gICAgICB9XG4gICAgfVxuXG4gIC8vIDIgbWlucyB1cCB0byAwLjc1IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA0NSkge1xuICAgIHJldHVybiBsb2NhbGl6ZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpXG5cbiAgLy8gMC43NSBocnMgdXAgdG8gMS41IGhyc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA5MCkge1xuICAgIHJldHVybiBsb2NhbGl6ZSgnYWJvdXRYSG91cnMnLCAxLCBsb2NhbGl6ZU9wdGlvbnMpXG5cbiAgLy8gMS41IGhycyB1cCB0byAyNCBocnNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9EQVkpIHtcbiAgICB2YXIgaG91cnMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyA2MClcbiAgICByZXR1cm4gbG9jYWxpemUoJ2Fib3V0WEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucylcblxuICAvLyAxIGRheSB1cCB0byAxLjc1IGRheXNcbiAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9BTE1PU1RfVFdPX0RBWVMpIHtcbiAgICByZXR1cm4gbG9jYWxpemUoJ3hEYXlzJywgMSwgbG9jYWxpemVPcHRpb25zKVxuXG4gIC8vIDEuNzUgZGF5cyB1cCB0byAzMCBkYXlzXG4gIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fTU9OVEgpIHtcbiAgICB2YXIgZGF5cyA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fREFZKVxuICAgIHJldHVybiBsb2NhbGl6ZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpXG5cbiAgLy8gMSBtb250aCB1cCB0byAyIG1vbnRoc1xuICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCBNSU5VVEVTX0lOX1RXT19NT05USFMpIHtcbiAgICBtb250aHMgPSBNYXRoLnJvdW5kKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX01PTlRIKVxuICAgIHJldHVybiBsb2NhbGl6ZSgnYWJvdXRYTW9udGhzJywgbW9udGhzLCBsb2NhbGl6ZU9wdGlvbnMpXG4gIH1cblxuICBtb250aHMgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGF0ZVJpZ2h0LCBkYXRlTGVmdClcblxuICAvLyAyIG1vbnRocyB1cCB0byAxMiBtb250aHNcbiAgaWYgKG1vbnRocyA8IDEyKSB7XG4gICAgdmFyIG5lYXJlc3RNb250aCA9IE1hdGgucm91bmQobWludXRlcyAvIE1JTlVURVNfSU5fTU9OVEgpXG4gICAgcmV0dXJuIGxvY2FsaXplKCd4TW9udGhzJywgbmVhcmVzdE1vbnRoLCBsb2NhbGl6ZU9wdGlvbnMpXG5cbiAgLy8gMSB5ZWFyIHVwIHRvIG1heCBEYXRlXG4gIH0gZWxzZSB7XG4gICAgdmFyIG1vbnRoc1NpbmNlU3RhcnRPZlllYXIgPSBtb250aHMgJSAxMlxuICAgIHZhciB5ZWFycyA9IE1hdGguZmxvb3IobW9udGhzIC8gMTIpXG5cbiAgICAvLyBOIHllYXJzIHVwIHRvIDEgeWVhcnMgMyBtb250aHNcbiAgICBpZiAobW9udGhzU2luY2VTdGFydE9mWWVhciA8IDMpIHtcbiAgICAgIHJldHVybiBsb2NhbGl6ZSgnYWJvdXRYWWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKVxuXG4gICAgLy8gTiB5ZWFycyAzIG1vbnRocyB1cCB0byBOIHllYXJzIDkgbW9udGhzXG4gICAgfSBlbHNlIGlmIChtb250aHNTaW5jZVN0YXJ0T2ZZZWFyIDwgOSkge1xuICAgICAgcmV0dXJuIGxvY2FsaXplKCdvdmVyWFllYXJzJywgeWVhcnMsIGxvY2FsaXplT3B0aW9ucylcblxuICAgIC8vIE4geWVhcnMgOSBtb250aHMgdXAgdG8gTiB5ZWFyIDEyIG1vbnRoc1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxpemUoJ2FsbW9zdFhZZWFycycsIHllYXJzICsgMSwgbG9jYWxpemVPcHRpb25zKVxuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpc3RhbmNlSW5Xb3Jkc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlzdGFuY2VfaW5fd29yZHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogdmFyIHJlc3VsdCA9IGVuZE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTYXQgU2VwIDA2IDIwMTQgMjM6NTk6NTkuOTk5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRoZSB3ZWVrIHN0YXJ0cyBvbiBNb25kYXksIHRoZSBlbmQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gZW5kT2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCksIHt3ZWVrU3RhcnRzT246IDF9KVxuICogLy89PiBTdW4gU2VwIDA3IDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmZ1bmN0aW9uIGVuZE9mV2VlayAoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IGRpcnR5T3B0aW9ucyA/IChOdW1iZXIoZGlydHlPcHRpb25zLndlZWtTdGFydHNPbikgfHwgMCkgOiAwXG5cbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpXG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IC03IDogMCkgKyA2IC0gKGRheSAtIHdlZWtTdGFydHNPbilcblxuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgKyBkaWZmKVxuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSlcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmRPZldlZWtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZF9vZl93ZWVrL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIG1vbnRoXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIHZhciByZXN1bHQgPSBlbmRPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZnVuY3Rpb24gZW5kT2ZNb250aCAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgbW9udGggPSBkYXRlLmdldE1vbnRoKClcbiAgZGF0ZS5zZXRGdWxsWWVhcihkYXRlLmdldEZ1bGxZZWFyKCksIG1vbnRoICsgMSwgMClcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kT2ZNb250aFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZW5kX29mX21vbnRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxudmFyIHN0YXJ0T2ZZZWFyID0gcmVxdWlyZSgnLi4vc3RhcnRfb2ZfeWVhci9pbmRleC5qcycpXG52YXIgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzID0gcmVxdWlyZSgnLi4vZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9kYXlzL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIGRheSBvZiB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgeWVhciBpcyAyIEp1bHkgMjAxND9cbiAqIHZhciByZXN1bHQgPSBnZXREYXlPZlllYXIobmV3IERhdGUoMjAxNCwgNiwgMikpXG4gKiAvLz0+IDE4M1xuICovXG5mdW5jdGlvbiBnZXREYXlPZlllYXIgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMoZGF0ZSwgc3RhcnRPZlllYXIoZGF0ZSkpXG4gIHZhciBkYXlPZlllYXIgPSBkaWZmICsgMVxuICByZXR1cm4gZGF5T2ZZZWFyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0RGF5T2ZZZWFyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRfZGF5X29mX3llYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB5ZWFyIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogdmFyIHJlc3VsdCA9IHN0YXJ0T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgSmFuIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3RhcnRPZlllYXIgKGRpcnR5RGF0ZSkge1xuICB2YXIgY2xlYW5EYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApXG4gIGRhdGUuc2V0RnVsbFllYXIoY2xlYW5EYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydE9mWWVhclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRfb2ZfeWVhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBpc0RhdGUgPSByZXF1aXJlKCcuLi9pc19kYXRlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHZhbGlkP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJucyBmYWxzZSBpZiBhcmd1bWVudCBpcyBJbnZhbGlkIERhdGUgYW5kIHRydWUgb3RoZXJ3aXNlLlxuICogSW52YWxpZCBEYXRlIGlzIGEgRGF0ZSwgd2hvc2UgdGltZSB2YWx1ZSBpcyBOYU4uXG4gKlxuICogVGltZSB2YWx1ZSBvZiBEYXRlOiBodHRwOi8vZXM1LmdpdGh1Yi5pby8jeDE1LjkuMS4xXG4gKlxuICogQHBhcmFtIHtEYXRlfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB2YWxpZFxuICogQHRocm93cyB7VHlwZUVycm9yfSBhcmd1bWVudCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIERhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRm9yIHRoZSB2YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoMjAxNCwgMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciB0aGUgaW52YWxpZCBkYXRlOlxuICogdmFyIHJlc3VsdCA9IGlzVmFsaWQobmV3IERhdGUoJycpKVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1ZhbGlkIChkaXJ0eURhdGUpIHtcbiAgaWYgKGlzRGF0ZShkaXJ0eURhdGUpKSB7XG4gICAgcmV0dXJuICFpc05hTihkaXJ0eURhdGUpXG4gIH0gZWxzZSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcih0b1N0cmluZy5jYWxsKGRpcnR5RGF0ZSkgKyAnIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBEYXRlJylcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVmFsaWRcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3ZhbGlkL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBsZWFwIHllYXI/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgbGVhcCB5ZWFyP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGUgbGVhcCB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEgU2VwdGVtYmVyIDIwMTIgaW4gdGhlIGxlYXAgeWVhcj9cbiAqIHZhciByZXN1bHQgPSBpc0xlYXBZZWFyKG5ldyBEYXRlKDIwMTIsIDgsIDEpKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzTGVhcFllYXIgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgcmV0dXJuIHllYXIgJSA0MDAgPT09IDAgfHwgeWVhciAlIDQgPT09IDAgJiYgeWVhciAlIDEwMCAhPT0gMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzTGVhcFllYXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX2xlYXBfeWVhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUsXG4gKiB3aGljaCBpcyA3IGZvciBTdW5kYXksIDEgZm9yIE1vbmRheSBldGMuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBkYXkgb2YgSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF5IG9mIHRoZSBJU08gd2VlayBpcyAyNiBGZWJydWFyeSAyMDEyP1xuICogdmFyIHJlc3VsdCA9IGdldElTT0RheShuZXcgRGF0ZSgyMDEyLCAxLCAyNikpXG4gKiAvLz0+IDdcbiAqL1xuZnVuY3Rpb24gZ2V0SVNPRGF5IChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpXG5cbiAgaWYgKGRheSA9PT0gMCkge1xuICAgIGRheSA9IDdcbiAgfVxuXG4gIHJldHVybiBkYXlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRJU09EYXlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldF9pc29fZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHN0YXJ0T2ZIb3VyID0gcmVxdWlyZSgnLi4vc3RhcnRfb2ZfaG91ci9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IEhvdXIgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBob3VyP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBob3VyP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBob3VyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAyMDE0IDA2OjAwOjAwIGFuZCA0IFNlcHRlbWJlciAwNjozMDowMCBpbiB0aGUgc2FtZSBob3VyP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZUhvdXIoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAzMClcbiAqIClcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1NhbWVIb3VyIChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mSG91ciA9IHN0YXJ0T2ZIb3VyKGRpcnR5RGF0ZUxlZnQpXG4gIHZhciBkYXRlUmlnaHRTdGFydE9mSG91ciA9IHN0YXJ0T2ZIb3VyKGRpcnR5RGF0ZVJpZ2h0KVxuXG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZIb3VyLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkhvdXIuZ2V0VGltZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYW1lSG91clxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfc2FtZV9ob3VyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBIb3VyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYW4gaG91ciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIGhvdXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGFuIGhvdXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGFuIGhvdXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZkhvdXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1KSlcbiAqIC8vPT4gVHVlIFNlcCAwMiAyMDE0IDExOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZIb3VyIChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIGRhdGUuc2V0TWludXRlcygwLCAwLCAwKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0T2ZIb3VyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydF9vZl9ob3VyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxODBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGlzU2FtZVdlZWsgPSByZXF1aXJlKCcuLi9pc19zYW1lX3dlZWsvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIElTTyB3ZWVrP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBJU08gd2Vlaz9cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIElTTyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAxIFNlcHRlbWJlciAyMDE0IGFuZCA3IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIElTTyB3ZWVrP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZUlTT1dlZWsoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCA3KVxuICogKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzU2FtZUlTT1dlZWsgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCB7d2Vla1N0YXJ0c09uOiAxfSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1NhbWVJU09XZWVrXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19zYW1lX2lzb193ZWVrL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxODFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHN0YXJ0T2ZJU09ZZWFyID0gcmVxdWlyZSgnLi4vc3RhcnRfb2ZfaXNvX3llYXIvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhcj9cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSAyOSBEZWNlbWJlciAyMDAzIGFuZCAyIEphbnVhcnkgMjAwNSBpbiB0aGUgc2FtZSBJU08gd2Vlay1udW1iZXJpbmcgeWVhcj9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVJU09ZZWFyKFxuICogICBuZXcgRGF0ZSgyMDAzLCAxMSwgMjkpLFxuICogICBuZXcgRGF0ZSgyMDA1LCAwLCAyKVxuICogKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzU2FtZUlTT1llYXIgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZZZWFyID0gc3RhcnRPZklTT1llYXIoZGlydHlEYXRlTGVmdClcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZZZWFyID0gc3RhcnRPZklTT1llYXIoZGlydHlEYXRlUmlnaHQpXG5cbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZlllYXIuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mWWVhci5nZXRUaW1lKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1NhbWVJU09ZZWFyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19zYW1lX2lzb195ZWFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxODJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHN0YXJ0T2ZNaW51dGUgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9taW51dGUvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNaW51dGUgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtaW51dGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIG1pbnV0ZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgbWludXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciAyMDE0IDA2OjMwOjAwIGFuZCA0IFNlcHRlbWJlciAyMDE0IDA2OjMwOjE1XG4gKiAvLyBpbiB0aGUgc2FtZSBtaW51dGU/XG4gKiB2YXIgcmVzdWx0ID0gaXNTYW1lTWludXRlKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAzMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDMwLCAxNSlcbiAqIClcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1NhbWVNaW51dGUgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZNaW51dGUgPSBzdGFydE9mTWludXRlKGRpcnR5RGF0ZUxlZnQpXG4gIHZhciBkYXRlUmlnaHRTdGFydE9mTWludXRlID0gc3RhcnRPZk1pbnV0ZShkaXJ0eURhdGVSaWdodClcblxuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mTWludXRlLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZk1pbnV0ZS5nZXRUaW1lKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1NhbWVNaW51dGVcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3NhbWVfbWludXRlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxODNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNaW51dGUgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIG1pbnV0ZSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgbWludXRlIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiBhIG1pbnV0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBtaW51dGUgZm9yIDEgRGVjZW1iZXIgMjAxNCAyMjoxNTo0NS40MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZk1pbnV0ZShuZXcgRGF0ZSgyMDE0LCAxMSwgMSwgMjIsIDE1LCA0NSwgNDAwKSlcbiAqIC8vPT4gTW9uIERlYyAwMSAyMDE0IDIyOjE1OjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZNaW51dGUgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgZGF0ZS5zZXRTZWNvbmRzKDAsIDApXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRPZk1pbnV0ZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRfb2ZfbWludXRlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxODRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIG1vbnRoP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBtb250aD9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDIgU2VwdGVtYmVyIDIwMTQgYW5kIDI1IFNlcHRlbWJlciAyMDE0IGluIHRoZSBzYW1lIG1vbnRoP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZU1vbnRoKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAyKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMjUpXG4gKiApXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNTYW1lTW9udGggKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBkYXRlTGVmdCA9IHBhcnNlKGRpcnR5RGF0ZUxlZnQpXG4gIHZhciBkYXRlUmlnaHQgPSBwYXJzZShkaXJ0eURhdGVSaWdodClcbiAgcmV0dXJuIGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgPT09IGRhdGVSaWdodC5nZXRGdWxsWWVhcigpICYmXG4gICAgZGF0ZUxlZnQuZ2V0TW9udGgoKSA9PT0gZGF0ZVJpZ2h0LmdldE1vbnRoKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1NhbWVNb250aFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfc2FtZV9tb250aC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBzdGFydE9mUXVhcnRlciA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX3F1YXJ0ZXIvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBRdWFydGVyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgeWVhciBxdWFydGVyP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSB5ZWFyIHF1YXJ0ZXI/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIHF1YXJ0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCA4IE1hcmNoIDIwMTQgaW4gdGhlIHNhbWUgcXVhcnRlcj9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVRdWFydGVyKFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgMiwgOClcbiAqIClcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1NhbWVRdWFydGVyIChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mUXVhcnRlciA9IHN0YXJ0T2ZRdWFydGVyKGRpcnR5RGF0ZUxlZnQpXG4gIHZhciBkYXRlUmlnaHRTdGFydE9mUXVhcnRlciA9IHN0YXJ0T2ZRdWFydGVyKGRpcnR5RGF0ZVJpZ2h0KVxuXG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZRdWFydGVyLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZlF1YXJ0ZXIuZ2V0VGltZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYW1lUXVhcnRlclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfc2FtZV9xdWFydGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxODZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBRdWFydGVyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB5ZWFyIHF1YXJ0ZXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHllYXIgcXVhcnRlciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBxdWFydGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhIHF1YXJ0ZXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZlF1YXJ0ZXIobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIEp1bCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZRdWFydGVyIChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBjdXJyZW50TW9udGggPSBkYXRlLmdldE1vbnRoKClcbiAgdmFyIG1vbnRoID0gY3VycmVudE1vbnRoIC0gY3VycmVudE1vbnRoICUgM1xuICBkYXRlLnNldE1vbnRoKG1vbnRoLCAxKVxuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRPZlF1YXJ0ZXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0X29mX3F1YXJ0ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgc3RhcnRPZlNlY29uZCA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX3NlY29uZC9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHNlY29uZD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgc2Vjb25kP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIHNlY29uZCBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBpbiB0aGUgc2FtZSBzZWNvbmRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDQgU2VwdGVtYmVyIDIwMTQgMDY6MzA6MTUuMDAwIGFuZCA0IFNlcHRlbWJlciAyMDE0IDA2OjMwLjE1LjUwMFxuICogLy8gaW4gdGhlIHNhbWUgc2Vjb25kP1xuICogdmFyIHJlc3VsdCA9IGlzU2FtZVNlY29uZChcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMzAsIDE1KSxcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgNCwgNiwgMzAsIDE1LCA1MDApXG4gKiApXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNTYW1lU2Vjb25kIChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mU2Vjb25kID0gc3RhcnRPZlNlY29uZChkaXJ0eURhdGVMZWZ0KVxuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZlNlY29uZCA9IHN0YXJ0T2ZTZWNvbmQoZGlydHlEYXRlUmlnaHQpXG5cbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZlNlY29uZC5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZTZWNvbmQuZ2V0VGltZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYW1lU2Vjb25kXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19zYW1lX3NlY29uZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSBzZWNvbmQgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiBhIHNlY29uZCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBzZWNvbmRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgc2Vjb25kIGZvciAxIERlY2VtYmVyIDIwMTQgMjI6MTU6NDUuNDAwOlxuICogdmFyIHJlc3VsdCA9IHN0YXJ0T2ZTZWNvbmQobmV3IERhdGUoMjAxNCwgMTEsIDEsIDIyLCAxNSwgNDUsIDQwMCkpXG4gKiAvLz0+IE1vbiBEZWMgMDEgMjAxNCAyMjoxNTo0NS4wMDBcbiAqL1xuZnVuY3Rpb24gc3RhcnRPZlNlY29uZCAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICBkYXRlLnNldE1pbGxpc2Vjb25kcygwKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0T2ZTZWNvbmRcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0X29mX3NlY29uZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIGFkZGVkXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDEwIGRheXMgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIHZhciByZXN1bHQgPSBhZGREYXlzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxMClcbiAqIC8vPT4gVGh1IFNlcCAxMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIGFkZERheXMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBhbW91bnQgPSBOdW1iZXIoZGlydHlBbW91bnQpXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudClcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGREYXlzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hZGRfZGF5cy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgeWVhcj9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgeWVhcj9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBTZXB0ZW1iZXIgMjAxNCBhbmQgMjUgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgeWVhcj9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVZZWFyKFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCAyKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMjUpXG4gKiApXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNTYW1lWWVhciAoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgdmFyIGRhdGVMZWZ0ID0gcGFyc2UoZGlydHlEYXRlTGVmdClcbiAgdmFyIGRhdGVSaWdodCA9IHBhcnNlKGRpcnR5RGF0ZVJpZ2h0KVxuICByZXR1cm4gZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZVJpZ2h0LmdldEZ1bGxZZWFyKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1NhbWVZZWFyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19zYW1lX3llYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDE5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBsYXN0IGRheSBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBsYXN0IGRheSBvZiBhIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbGFzdCBkYXkgb2YgYSB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBsYXN0IGRheSBvZiBhIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gbGFzdERheU9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBTYXQgU2VwIDA2IDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdGhlIHdlZWsgc3RhcnRzIG9uIE1vbmRheSwgdGhlIGxhc3QgZGF5IG9mIHRoZSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogdmFyIHJlc3VsdCA9IGxhc3REYXlPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwge3dlZWtTdGFydHNPbjogMX0pXG4gKiAvLz0+IFN1biBTZXAgMDcgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBsYXN0RGF5T2ZXZWVrIChkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgd2Vla1N0YXJ0c09uID0gZGlydHlPcHRpb25zID8gKE51bWJlcihkaXJ0eU9wdGlvbnMud2Vla1N0YXJ0c09uKSB8fCAwKSA6IDBcblxuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIGRheSA9IGRhdGUuZ2V0RGF5KClcbiAgdmFyIGRpZmYgPSAoZGF5IDwgd2Vla1N0YXJ0c09uID8gLTcgOiAwKSArIDYgLSAoZGF5IC0gd2Vla1N0YXJ0c09uKVxuXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGlmZilcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXN0RGF5T2ZXZWVrXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sYXN0X2RheV9vZl93ZWVrL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAxOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxudmFyIGdldERheXNJbk1vbnRoID0gcmVxdWlyZSgnLi4vZ2V0X2RheXNfaW5fbW9udGgvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIG1vbnRoIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBtb250aCB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBtb250aCAtIHRoZSBtb250aCBvZiB0aGUgbmV3IGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbW9udGggc2V0dGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCBGZWJydWFyeSB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IHNldE1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAxKVxuICogLy89PiBTYXQgRmViIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc2V0TW9udGggKGRpcnR5RGF0ZSwgZGlydHlNb250aCkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIG1vbnRoID0gTnVtYmVyKGRpcnR5TW9udGgpXG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gIHZhciBkYXkgPSBkYXRlLmdldERhdGUoKVxuXG4gIHZhciBkYXRlV2l0aERlc2lyZWRNb250aCA9IG5ldyBEYXRlKDApXG4gIGRhdGVXaXRoRGVzaXJlZE1vbnRoLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCAxNSlcbiAgZGF0ZVdpdGhEZXNpcmVkTW9udGguc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgdmFyIGRheXNJbk1vbnRoID0gZ2V0RGF5c0luTW9udGgoZGF0ZVdpdGhEZXNpcmVkTW9udGgpXG4gIC8vIFNldCB0aGUgbGFzdCBkYXkgb2YgdGhlIG5ldyBtb250aFxuICAvLyBpZiB0aGUgb3JpZ2luYWwgZGF0ZSB3YXMgdGhlIGxhc3QgZGF5IG9mIHRoZSBsb25nZXIgbW9udGhcbiAgZGF0ZS5zZXRNb250aChtb250aCwgTWF0aC5taW4oZGF5LCBkYXlzSW5Nb250aCkpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0TW9udGhcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldF9tb250aC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBhZGREYXlzOiByZXF1aXJlKCcuL2FkZF9kYXlzL2luZGV4LmpzJyksXG4gIGFkZEhvdXJzOiByZXF1aXJlKCcuL2FkZF9ob3Vycy9pbmRleC5qcycpLFxuICBhZGRJU09ZZWFyczogcmVxdWlyZSgnLi9hZGRfaXNvX3llYXJzL2luZGV4LmpzJyksXG4gIGFkZE1pbGxpc2Vjb25kczogcmVxdWlyZSgnLi9hZGRfbWlsbGlzZWNvbmRzL2luZGV4LmpzJyksXG4gIGFkZE1pbnV0ZXM6IHJlcXVpcmUoJy4vYWRkX21pbnV0ZXMvaW5kZXguanMnKSxcbiAgYWRkTW9udGhzOiByZXF1aXJlKCcuL2FkZF9tb250aHMvaW5kZXguanMnKSxcbiAgYWRkUXVhcnRlcnM6IHJlcXVpcmUoJy4vYWRkX3F1YXJ0ZXJzL2luZGV4LmpzJyksXG4gIGFkZFNlY29uZHM6IHJlcXVpcmUoJy4vYWRkX3NlY29uZHMvaW5kZXguanMnKSxcbiAgYWRkV2Vla3M6IHJlcXVpcmUoJy4vYWRkX3dlZWtzL2luZGV4LmpzJyksXG4gIGFkZFllYXJzOiByZXF1aXJlKCcuL2FkZF95ZWFycy9pbmRleC5qcycpLFxuICBhcmVSYW5nZXNPdmVybGFwcGluZzogcmVxdWlyZSgnLi9hcmVfcmFuZ2VzX292ZXJsYXBwaW5nL2luZGV4LmpzJyksXG4gIGNsb3Nlc3RJbmRleFRvOiByZXF1aXJlKCcuL2Nsb3Nlc3RfaW5kZXhfdG8vaW5kZXguanMnKSxcbiAgY2xvc2VzdFRvOiByZXF1aXJlKCcuL2Nsb3Nlc3RfdG8vaW5kZXguanMnKSxcbiAgY29tcGFyZUFzYzogcmVxdWlyZSgnLi9jb21wYXJlX2FzYy9pbmRleC5qcycpLFxuICBjb21wYXJlRGVzYzogcmVxdWlyZSgnLi9jb21wYXJlX2Rlc2MvaW5kZXguanMnKSxcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzOiByZXF1aXJlKCcuL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfZGF5cy9pbmRleC5qcycpLFxuICBkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtzOiByZXF1aXJlKCcuL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfaXNvX3dlZWtzL2luZGV4LmpzJyksXG4gIGRpZmZlcmVuY2VJbkNhbGVuZGFySVNPWWVhcnM6IHJlcXVpcmUoJy4vZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9pc29feWVhcnMvaW5kZXguanMnKSxcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHM6IHJlcXVpcmUoJy4vZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9tb250aHMvaW5kZXguanMnKSxcbiAgZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVyczogcmVxdWlyZSgnLi9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX3F1YXJ0ZXJzL2luZGV4LmpzJyksXG4gIGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3M6IHJlcXVpcmUoJy4vZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl93ZWVrcy9pbmRleC5qcycpLFxuICBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzOiByZXF1aXJlKCcuL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfeWVhcnMvaW5kZXguanMnKSxcbiAgZGlmZmVyZW5jZUluRGF5czogcmVxdWlyZSgnLi9kaWZmZXJlbmNlX2luX2RheXMvaW5kZXguanMnKSxcbiAgZGlmZmVyZW5jZUluSG91cnM6IHJlcXVpcmUoJy4vZGlmZmVyZW5jZV9pbl9ob3Vycy9pbmRleC5qcycpLFxuICBkaWZmZXJlbmNlSW5JU09ZZWFyczogcmVxdWlyZSgnLi9kaWZmZXJlbmNlX2luX2lzb195ZWFycy9pbmRleC5qcycpLFxuICBkaWZmZXJlbmNlSW5NaWxsaXNlY29uZHM6IHJlcXVpcmUoJy4vZGlmZmVyZW5jZV9pbl9taWxsaXNlY29uZHMvaW5kZXguanMnKSxcbiAgZGlmZmVyZW5jZUluTWludXRlczogcmVxdWlyZSgnLi9kaWZmZXJlbmNlX2luX21pbnV0ZXMvaW5kZXguanMnKSxcbiAgZGlmZmVyZW5jZUluTW9udGhzOiByZXF1aXJlKCcuL2RpZmZlcmVuY2VfaW5fbW9udGhzL2luZGV4LmpzJyksXG4gIGRpZmZlcmVuY2VJblF1YXJ0ZXJzOiByZXF1aXJlKCcuL2RpZmZlcmVuY2VfaW5fcXVhcnRlcnMvaW5kZXguanMnKSxcbiAgZGlmZmVyZW5jZUluU2Vjb25kczogcmVxdWlyZSgnLi9kaWZmZXJlbmNlX2luX3NlY29uZHMvaW5kZXguanMnKSxcbiAgZGlmZmVyZW5jZUluV2Vla3M6IHJlcXVpcmUoJy4vZGlmZmVyZW5jZV9pbl93ZWVrcy9pbmRleC5qcycpLFxuICBkaWZmZXJlbmNlSW5ZZWFyczogcmVxdWlyZSgnLi9kaWZmZXJlbmNlX2luX3llYXJzL2luZGV4LmpzJyksXG4gIGRpc3RhbmNlSW5Xb3JkczogcmVxdWlyZSgnLi9kaXN0YW5jZV9pbl93b3Jkcy9pbmRleC5qcycpLFxuICBkaXN0YW5jZUluV29yZHNTdHJpY3Q6IHJlcXVpcmUoJy4vZGlzdGFuY2VfaW5fd29yZHNfc3RyaWN0L2luZGV4LmpzJyksXG4gIGRpc3RhbmNlSW5Xb3Jkc1RvTm93OiByZXF1aXJlKCcuL2Rpc3RhbmNlX2luX3dvcmRzX3RvX25vdy9pbmRleC5qcycpLFxuICBlYWNoRGF5OiByZXF1aXJlKCcuL2VhY2hfZGF5L2luZGV4LmpzJyksXG4gIGVuZE9mRGF5OiByZXF1aXJlKCcuL2VuZF9vZl9kYXkvaW5kZXguanMnKSxcbiAgZW5kT2ZIb3VyOiByZXF1aXJlKCcuL2VuZF9vZl9ob3VyL2luZGV4LmpzJyksXG4gIGVuZE9mSVNPV2VlazogcmVxdWlyZSgnLi9lbmRfb2ZfaXNvX3dlZWsvaW5kZXguanMnKSxcbiAgZW5kT2ZJU09ZZWFyOiByZXF1aXJlKCcuL2VuZF9vZl9pc29feWVhci9pbmRleC5qcycpLFxuICBlbmRPZk1pbnV0ZTogcmVxdWlyZSgnLi9lbmRfb2ZfbWludXRlL2luZGV4LmpzJyksXG4gIGVuZE9mTW9udGg6IHJlcXVpcmUoJy4vZW5kX29mX21vbnRoL2luZGV4LmpzJyksXG4gIGVuZE9mUXVhcnRlcjogcmVxdWlyZSgnLi9lbmRfb2ZfcXVhcnRlci9pbmRleC5qcycpLFxuICBlbmRPZlNlY29uZDogcmVxdWlyZSgnLi9lbmRfb2Zfc2Vjb25kL2luZGV4LmpzJyksXG4gIGVuZE9mVG9kYXk6IHJlcXVpcmUoJy4vZW5kX29mX3RvZGF5L2luZGV4LmpzJyksXG4gIGVuZE9mVG9tb3Jyb3c6IHJlcXVpcmUoJy4vZW5kX29mX3RvbW9ycm93L2luZGV4LmpzJyksXG4gIGVuZE9mV2VlazogcmVxdWlyZSgnLi9lbmRfb2Zfd2Vlay9pbmRleC5qcycpLFxuICBlbmRPZlllYXI6IHJlcXVpcmUoJy4vZW5kX29mX3llYXIvaW5kZXguanMnKSxcbiAgZW5kT2ZZZXN0ZXJkYXk6IHJlcXVpcmUoJy4vZW5kX29mX3llc3RlcmRheS9pbmRleC5qcycpLFxuICBmb3JtYXQ6IHJlcXVpcmUoJy4vZm9ybWF0L2luZGV4LmpzJyksXG4gIGdldERhdGU6IHJlcXVpcmUoJy4vZ2V0X2RhdGUvaW5kZXguanMnKSxcbiAgZ2V0RGF5OiByZXF1aXJlKCcuL2dldF9kYXkvaW5kZXguanMnKSxcbiAgZ2V0RGF5T2ZZZWFyOiByZXF1aXJlKCcuL2dldF9kYXlfb2ZfeWVhci9pbmRleC5qcycpLFxuICBnZXREYXlzSW5Nb250aDogcmVxdWlyZSgnLi9nZXRfZGF5c19pbl9tb250aC9pbmRleC5qcycpLFxuICBnZXREYXlzSW5ZZWFyOiByZXF1aXJlKCcuL2dldF9kYXlzX2luX3llYXIvaW5kZXguanMnKSxcbiAgZ2V0SG91cnM6IHJlcXVpcmUoJy4vZ2V0X2hvdXJzL2luZGV4LmpzJyksXG4gIGdldElTT0RheTogcmVxdWlyZSgnLi9nZXRfaXNvX2RheS9pbmRleC5qcycpLFxuICBnZXRJU09XZWVrOiByZXF1aXJlKCcuL2dldF9pc29fd2Vlay9pbmRleC5qcycpLFxuICBnZXRJU09XZWVrc0luWWVhcjogcmVxdWlyZSgnLi9nZXRfaXNvX3dlZWtzX2luX3llYXIvaW5kZXguanMnKSxcbiAgZ2V0SVNPWWVhcjogcmVxdWlyZSgnLi9nZXRfaXNvX3llYXIvaW5kZXguanMnKSxcbiAgZ2V0TWlsbGlzZWNvbmRzOiByZXF1aXJlKCcuL2dldF9taWxsaXNlY29uZHMvaW5kZXguanMnKSxcbiAgZ2V0TWludXRlczogcmVxdWlyZSgnLi9nZXRfbWludXRlcy9pbmRleC5qcycpLFxuICBnZXRNb250aDogcmVxdWlyZSgnLi9nZXRfbW9udGgvaW5kZXguanMnKSxcbiAgZ2V0T3ZlcmxhcHBpbmdEYXlzSW5SYW5nZXM6IHJlcXVpcmUoJy4vZ2V0X292ZXJsYXBwaW5nX2RheXNfaW5fcmFuZ2VzL2luZGV4LmpzJyksXG4gIGdldFF1YXJ0ZXI6IHJlcXVpcmUoJy4vZ2V0X3F1YXJ0ZXIvaW5kZXguanMnKSxcbiAgZ2V0U2Vjb25kczogcmVxdWlyZSgnLi9nZXRfc2Vjb25kcy9pbmRleC5qcycpLFxuICBnZXRUaW1lOiByZXF1aXJlKCcuL2dldF90aW1lL2luZGV4LmpzJyksXG4gIGdldFllYXI6IHJlcXVpcmUoJy4vZ2V0X3llYXIvaW5kZXguanMnKSxcbiAgaXNBZnRlcjogcmVxdWlyZSgnLi9pc19hZnRlci9pbmRleC5qcycpLFxuICBpc0JlZm9yZTogcmVxdWlyZSgnLi9pc19iZWZvcmUvaW5kZXguanMnKSxcbiAgaXNEYXRlOiByZXF1aXJlKCcuL2lzX2RhdGUvaW5kZXguanMnKSxcbiAgaXNFcXVhbDogcmVxdWlyZSgnLi9pc19lcXVhbC9pbmRleC5qcycpLFxuICBpc0ZpcnN0RGF5T2ZNb250aDogcmVxdWlyZSgnLi9pc19maXJzdF9kYXlfb2ZfbW9udGgvaW5kZXguanMnKSxcbiAgaXNGcmlkYXk6IHJlcXVpcmUoJy4vaXNfZnJpZGF5L2luZGV4LmpzJyksXG4gIGlzRnV0dXJlOiByZXF1aXJlKCcuL2lzX2Z1dHVyZS9pbmRleC5qcycpLFxuICBpc0xhc3REYXlPZk1vbnRoOiByZXF1aXJlKCcuL2lzX2xhc3RfZGF5X29mX21vbnRoL2luZGV4LmpzJyksXG4gIGlzTGVhcFllYXI6IHJlcXVpcmUoJy4vaXNfbGVhcF95ZWFyL2luZGV4LmpzJyksXG4gIGlzTW9uZGF5OiByZXF1aXJlKCcuL2lzX21vbmRheS9pbmRleC5qcycpLFxuICBpc1Bhc3Q6IHJlcXVpcmUoJy4vaXNfcGFzdC9pbmRleC5qcycpLFxuICBpc1NhbWVEYXk6IHJlcXVpcmUoJy4vaXNfc2FtZV9kYXkvaW5kZXguanMnKSxcbiAgaXNTYW1lSG91cjogcmVxdWlyZSgnLi9pc19zYW1lX2hvdXIvaW5kZXguanMnKSxcbiAgaXNTYW1lSVNPV2VlazogcmVxdWlyZSgnLi9pc19zYW1lX2lzb193ZWVrL2luZGV4LmpzJyksXG4gIGlzU2FtZUlTT1llYXI6IHJlcXVpcmUoJy4vaXNfc2FtZV9pc29feWVhci9pbmRleC5qcycpLFxuICBpc1NhbWVNaW51dGU6IHJlcXVpcmUoJy4vaXNfc2FtZV9taW51dGUvaW5kZXguanMnKSxcbiAgaXNTYW1lTW9udGg6IHJlcXVpcmUoJy4vaXNfc2FtZV9tb250aC9pbmRleC5qcycpLFxuICBpc1NhbWVRdWFydGVyOiByZXF1aXJlKCcuL2lzX3NhbWVfcXVhcnRlci9pbmRleC5qcycpLFxuICBpc1NhbWVTZWNvbmQ6IHJlcXVpcmUoJy4vaXNfc2FtZV9zZWNvbmQvaW5kZXguanMnKSxcbiAgaXNTYW1lV2VlazogcmVxdWlyZSgnLi9pc19zYW1lX3dlZWsvaW5kZXguanMnKSxcbiAgaXNTYW1lWWVhcjogcmVxdWlyZSgnLi9pc19zYW1lX3llYXIvaW5kZXguanMnKSxcbiAgaXNTYXR1cmRheTogcmVxdWlyZSgnLi9pc19zYXR1cmRheS9pbmRleC5qcycpLFxuICBpc1N1bmRheTogcmVxdWlyZSgnLi9pc19zdW5kYXkvaW5kZXguanMnKSxcbiAgaXNUaGlzSG91cjogcmVxdWlyZSgnLi9pc190aGlzX2hvdXIvaW5kZXguanMnKSxcbiAgaXNUaGlzSVNPV2VlazogcmVxdWlyZSgnLi9pc190aGlzX2lzb193ZWVrL2luZGV4LmpzJyksXG4gIGlzVGhpc0lTT1llYXI6IHJlcXVpcmUoJy4vaXNfdGhpc19pc29feWVhci9pbmRleC5qcycpLFxuICBpc1RoaXNNaW51dGU6IHJlcXVpcmUoJy4vaXNfdGhpc19taW51dGUvaW5kZXguanMnKSxcbiAgaXNUaGlzTW9udGg6IHJlcXVpcmUoJy4vaXNfdGhpc19tb250aC9pbmRleC5qcycpLFxuICBpc1RoaXNRdWFydGVyOiByZXF1aXJlKCcuL2lzX3RoaXNfcXVhcnRlci9pbmRleC5qcycpLFxuICBpc1RoaXNTZWNvbmQ6IHJlcXVpcmUoJy4vaXNfdGhpc19zZWNvbmQvaW5kZXguanMnKSxcbiAgaXNUaGlzV2VlazogcmVxdWlyZSgnLi9pc190aGlzX3dlZWsvaW5kZXguanMnKSxcbiAgaXNUaGlzWWVhcjogcmVxdWlyZSgnLi9pc190aGlzX3llYXIvaW5kZXguanMnKSxcbiAgaXNUaHVyc2RheTogcmVxdWlyZSgnLi9pc190aHVyc2RheS9pbmRleC5qcycpLFxuICBpc1RvZGF5OiByZXF1aXJlKCcuL2lzX3RvZGF5L2luZGV4LmpzJyksXG4gIGlzVG9tb3Jyb3c6IHJlcXVpcmUoJy4vaXNfdG9tb3Jyb3cvaW5kZXguanMnKSxcbiAgaXNUdWVzZGF5OiByZXF1aXJlKCcuL2lzX3R1ZXNkYXkvaW5kZXguanMnKSxcbiAgaXNWYWxpZDogcmVxdWlyZSgnLi9pc192YWxpZC9pbmRleC5qcycpLFxuICBpc1dlZG5lc2RheTogcmVxdWlyZSgnLi9pc193ZWRuZXNkYXkvaW5kZXguanMnKSxcbiAgaXNXZWVrZW5kOiByZXF1aXJlKCcuL2lzX3dlZWtlbmQvaW5kZXguanMnKSxcbiAgaXNXaXRoaW5SYW5nZTogcmVxdWlyZSgnLi9pc193aXRoaW5fcmFuZ2UvaW5kZXguanMnKSxcbiAgaXNZZXN0ZXJkYXk6IHJlcXVpcmUoJy4vaXNfeWVzdGVyZGF5L2luZGV4LmpzJyksXG4gIGxhc3REYXlPZklTT1dlZWs6IHJlcXVpcmUoJy4vbGFzdF9kYXlfb2ZfaXNvX3dlZWsvaW5kZXguanMnKSxcbiAgbGFzdERheU9mSVNPWWVhcjogcmVxdWlyZSgnLi9sYXN0X2RheV9vZl9pc29feWVhci9pbmRleC5qcycpLFxuICBsYXN0RGF5T2ZNb250aDogcmVxdWlyZSgnLi9sYXN0X2RheV9vZl9tb250aC9pbmRleC5qcycpLFxuICBsYXN0RGF5T2ZRdWFydGVyOiByZXF1aXJlKCcuL2xhc3RfZGF5X29mX3F1YXJ0ZXIvaW5kZXguanMnKSxcbiAgbGFzdERheU9mV2VlazogcmVxdWlyZSgnLi9sYXN0X2RheV9vZl93ZWVrL2luZGV4LmpzJyksXG4gIGxhc3REYXlPZlllYXI6IHJlcXVpcmUoJy4vbGFzdF9kYXlfb2ZfeWVhci9pbmRleC5qcycpLFxuICBtYXg6IHJlcXVpcmUoJy4vbWF4L2luZGV4LmpzJyksXG4gIG1pbjogcmVxdWlyZSgnLi9taW4vaW5kZXguanMnKSxcbiAgcGFyc2U6IHJlcXVpcmUoJy4vcGFyc2UvaW5kZXguanMnKSxcbiAgc2V0RGF0ZTogcmVxdWlyZSgnLi9zZXRfZGF0ZS9pbmRleC5qcycpLFxuICBzZXREYXk6IHJlcXVpcmUoJy4vc2V0X2RheS9pbmRleC5qcycpLFxuICBzZXREYXlPZlllYXI6IHJlcXVpcmUoJy4vc2V0X2RheV9vZl95ZWFyL2luZGV4LmpzJyksXG4gIHNldEhvdXJzOiByZXF1aXJlKCcuL3NldF9ob3Vycy9pbmRleC5qcycpLFxuICBzZXRJU09EYXk6IHJlcXVpcmUoJy4vc2V0X2lzb19kYXkvaW5kZXguanMnKSxcbiAgc2V0SVNPV2VlazogcmVxdWlyZSgnLi9zZXRfaXNvX3dlZWsvaW5kZXguanMnKSxcbiAgc2V0SVNPWWVhcjogcmVxdWlyZSgnLi9zZXRfaXNvX3llYXIvaW5kZXguanMnKSxcbiAgc2V0TWlsbGlzZWNvbmRzOiByZXF1aXJlKCcuL3NldF9taWxsaXNlY29uZHMvaW5kZXguanMnKSxcbiAgc2V0TWludXRlczogcmVxdWlyZSgnLi9zZXRfbWludXRlcy9pbmRleC5qcycpLFxuICBzZXRNb250aDogcmVxdWlyZSgnLi9zZXRfbW9udGgvaW5kZXguanMnKSxcbiAgc2V0UXVhcnRlcjogcmVxdWlyZSgnLi9zZXRfcXVhcnRlci9pbmRleC5qcycpLFxuICBzZXRTZWNvbmRzOiByZXF1aXJlKCcuL3NldF9zZWNvbmRzL2luZGV4LmpzJyksXG4gIHNldFllYXI6IHJlcXVpcmUoJy4vc2V0X3llYXIvaW5kZXguanMnKSxcbiAgc3RhcnRPZkRheTogcmVxdWlyZSgnLi9zdGFydF9vZl9kYXkvaW5kZXguanMnKSxcbiAgc3RhcnRPZkhvdXI6IHJlcXVpcmUoJy4vc3RhcnRfb2ZfaG91ci9pbmRleC5qcycpLFxuICBzdGFydE9mSVNPV2VlazogcmVxdWlyZSgnLi9zdGFydF9vZl9pc29fd2Vlay9pbmRleC5qcycpLFxuICBzdGFydE9mSVNPWWVhcjogcmVxdWlyZSgnLi9zdGFydF9vZl9pc29feWVhci9pbmRleC5qcycpLFxuICBzdGFydE9mTWludXRlOiByZXF1aXJlKCcuL3N0YXJ0X29mX21pbnV0ZS9pbmRleC5qcycpLFxuICBzdGFydE9mTW9udGg6IHJlcXVpcmUoJy4vc3RhcnRfb2ZfbW9udGgvaW5kZXguanMnKSxcbiAgc3RhcnRPZlF1YXJ0ZXI6IHJlcXVpcmUoJy4vc3RhcnRfb2ZfcXVhcnRlci9pbmRleC5qcycpLFxuICBzdGFydE9mU2Vjb25kOiByZXF1aXJlKCcuL3N0YXJ0X29mX3NlY29uZC9pbmRleC5qcycpLFxuICBzdGFydE9mVG9kYXk6IHJlcXVpcmUoJy4vc3RhcnRfb2ZfdG9kYXkvaW5kZXguanMnKSxcbiAgc3RhcnRPZlRvbW9ycm93OiByZXF1aXJlKCcuL3N0YXJ0X29mX3RvbW9ycm93L2luZGV4LmpzJyksXG4gIHN0YXJ0T2ZXZWVrOiByZXF1aXJlKCcuL3N0YXJ0X29mX3dlZWsvaW5kZXguanMnKSxcbiAgc3RhcnRPZlllYXI6IHJlcXVpcmUoJy4vc3RhcnRfb2ZfeWVhci9pbmRleC5qcycpLFxuICBzdGFydE9mWWVzdGVyZGF5OiByZXF1aXJlKCcuL3N0YXJ0X29mX3llc3RlcmRheS9pbmRleC5qcycpLFxuICBzdWJEYXlzOiByZXF1aXJlKCcuL3N1Yl9kYXlzL2luZGV4LmpzJyksXG4gIHN1YkhvdXJzOiByZXF1aXJlKCcuL3N1Yl9ob3Vycy9pbmRleC5qcycpLFxuICBzdWJJU09ZZWFyczogcmVxdWlyZSgnLi9zdWJfaXNvX3llYXJzL2luZGV4LmpzJyksXG4gIHN1Yk1pbGxpc2Vjb25kczogcmVxdWlyZSgnLi9zdWJfbWlsbGlzZWNvbmRzL2luZGV4LmpzJyksXG4gIHN1Yk1pbnV0ZXM6IHJlcXVpcmUoJy4vc3ViX21pbnV0ZXMvaW5kZXguanMnKSxcbiAgc3ViTW9udGhzOiByZXF1aXJlKCcuL3N1Yl9tb250aHMvaW5kZXguanMnKSxcbiAgc3ViUXVhcnRlcnM6IHJlcXVpcmUoJy4vc3ViX3F1YXJ0ZXJzL2luZGV4LmpzJyksXG4gIHN1YlNlY29uZHM6IHJlcXVpcmUoJy4vc3ViX3NlY29uZHMvaW5kZXguanMnKSxcbiAgc3ViV2Vla3M6IHJlcXVpcmUoJy4vc3ViX3dlZWtzL2luZGV4LmpzJyksXG4gIHN1YlllYXJzOiByZXF1aXJlKCcuL3N1Yl95ZWFycy9pbmRleC5qcycpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTWlsbGlzZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFkZCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtaWxsaXNlY29uZHMgdG8gYmUgYWRkZWRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIGFkZGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFkZCA3NTAgbWlsbGlzZWNvbmRzIHRvIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiB2YXIgcmVzdWx0ID0gYWRkTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MzAuNzUwXG4gKi9cbmZ1bmN0aW9uIGFkZE1pbGxpc2Vjb25kcyAoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICB2YXIgdGltZXN0YW1wID0gcGFyc2UoZGlydHlEYXRlKS5nZXRUaW1lKClcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudClcbiAgcmV0dXJuIG5ldyBEYXRlKHRpbWVzdGFtcCArIGFtb3VudClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRNaWxsaXNlY29uZHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZF9taWxsaXNlY29uZHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBnZXRJU09ZZWFyID0gcmVxdWlyZSgnLi4vZ2V0X2lzb195ZWFyL2luZGV4LmpzJylcbnZhciBzdGFydE9mSVNPV2VlayA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX2lzb193ZWVrL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIHN0YXJ0IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGFuIElTTyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBzdGFydCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZklTT1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IE1vbiBKYW4gMDMgMjAwNSAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mSVNPWWVhciAoZGlydHlEYXRlKSB7XG4gIHZhciB5ZWFyID0gZ2V0SVNPWWVhcihkaXJ0eURhdGUpXG4gIHZhciBmb3VydGhPZkphbnVhcnkgPSBuZXcgRGF0ZSgwKVxuICBmb3VydGhPZkphbnVhcnkuc2V0RnVsbFllYXIoeWVhciwgMCwgNClcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEhvdXJzKDAsIDAsIDAsIDApXG4gIHZhciBkYXRlID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5KVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0T2ZJU09ZZWFyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydF9vZl9pc29feWVhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEsIDAgb3IgMS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbXBhcmUgdGhlIHR3byBkYXRlcyBhbmQgcmV0dXJuIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIC0xIGlmIHRoZSBmaXJzdCBkYXRlIGlzIGJlZm9yZSB0aGUgc2Vjb25kIG9yIDAgaWYgZGF0ZXMgYXJlIGVxdWFsLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIHZhciByZXN1bHQgPSBjb21wYXJlQXNjKFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogKVxuICogLy89PiAtMVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTb3J0IHRoZSBhcnJheSBvZiBkYXRlczpcbiAqIHZhciByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVBc2MpXG4gKiAvLz0+IFtcbiAqIC8vICAgV2VkIEZlYiAxMSAxOTg3IDAwOjAwOjAwLFxuICogLy8gICBNb24gSnVsIDEwIDE5ODkgMDA6MDA6MDAsXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMFxuICogLy8gXVxuICovXG5mdW5jdGlvbiBjb21wYXJlQXNjIChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGF0ZUxlZnQgPSBwYXJzZShkaXJ0eURhdGVMZWZ0KVxuICB2YXIgdGltZUxlZnQgPSBkYXRlTGVmdC5nZXRUaW1lKClcbiAgdmFyIGRhdGVSaWdodCA9IHBhcnNlKGRpcnR5RGF0ZVJpZ2h0KVxuICB2YXIgdGltZVJpZ2h0ID0gZGF0ZVJpZ2h0LmdldFRpbWUoKVxuXG4gIGlmICh0aW1lTGVmdCA8IHRpbWVSaWdodCkge1xuICAgIHJldHVybiAtMVxuICB9IGVsc2UgaWYgKHRpbWVMZWZ0ID4gdGltZVJpZ2h0KSB7XG4gICAgcmV0dXJuIDFcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMFxuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY29tcGFyZUFzY1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29tcGFyZV9hc2MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgUmFuZ2UgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgcmFuZ2Ugb3ZlcmxhcHBpbmcgd2l0aCBhbm90aGVyIGRhdGUgcmFuZ2U/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSByYW5nZSBvdmVybGFwcGluZyB3aXRoIGFub3RoZXIgZGF0ZSByYW5nZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gaW5pdGlhbFJhbmdlU3RhcnREYXRlIC0gdGhlIHN0YXJ0IG9mIHRoZSBpbml0aWFsIHJhbmdlXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gaW5pdGlhbFJhbmdlRW5kRGF0ZSAtIHRoZSBlbmQgb2YgdGhlIGluaXRpYWwgcmFuZ2VcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBjb21wYXJlZFJhbmdlU3RhcnREYXRlIC0gdGhlIHN0YXJ0IG9mIHRoZSByYW5nZSB0byBjb21wYXJlIGl0IHdpdGhcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBjb21wYXJlZFJhbmdlRW5kRGF0ZSAtIHRoZSBlbmQgb2YgdGhlIHJhbmdlIHRvIGNvbXBhcmUgaXQgd2l0aFxuICogQHJldHVybnMge0Jvb2xlYW59IHdoZXRoZXIgdGhlIGRhdGUgcmFuZ2VzIGFyZSBvdmVybGFwcGluZ1xuICogQHRocm93cyB7RXJyb3J9IHN0YXJ0RGF0ZSBvZiBhIGRhdGUgcmFuZ2UgY2Fubm90IGJlIGFmdGVyIGl0cyBlbmREYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBvdmVybGFwcGluZyBkYXRlIHJhbmdlczpcbiAqIGFyZVJhbmdlc092ZXJsYXBwaW5nKFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAxMCksIG5ldyBEYXRlKDIwMTQsIDAsIDIwKSwgbmV3IERhdGUoMjAxNCwgMCwgMTcpLCBuZXcgRGF0ZSgyMDE0LCAwLCAyMSlcbiAqIClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igbm9uLW92ZXJsYXBwaW5nIGRhdGUgcmFuZ2VzOlxuICogYXJlUmFuZ2VzT3ZlcmxhcHBpbmcoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwgbmV3IERhdGUoMjAxNCwgMCwgMjApLCBuZXcgRGF0ZSgyMDE0LCAwLCAyMSksIG5ldyBEYXRlKDIwMTQsIDAsIDIyKVxuICogKVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBhcmVSYW5nZXNPdmVybGFwcGluZyAoZGlydHlJbml0aWFsUmFuZ2VTdGFydERhdGUsIGRpcnR5SW5pdGlhbFJhbmdlRW5kRGF0ZSwgZGlydHlDb21wYXJlZFJhbmdlU3RhcnREYXRlLCBkaXJ0eUNvbXBhcmVkUmFuZ2VFbmREYXRlKSB7XG4gIHZhciBpbml0aWFsU3RhcnRUaW1lID0gcGFyc2UoZGlydHlJbml0aWFsUmFuZ2VTdGFydERhdGUpLmdldFRpbWUoKVxuICB2YXIgaW5pdGlhbEVuZFRpbWUgPSBwYXJzZShkaXJ0eUluaXRpYWxSYW5nZUVuZERhdGUpLmdldFRpbWUoKVxuICB2YXIgY29tcGFyZWRTdGFydFRpbWUgPSBwYXJzZShkaXJ0eUNvbXBhcmVkUmFuZ2VTdGFydERhdGUpLmdldFRpbWUoKVxuICB2YXIgY29tcGFyZWRFbmRUaW1lID0gcGFyc2UoZGlydHlDb21wYXJlZFJhbmdlRW5kRGF0ZSkuZ2V0VGltZSgpXG5cbiAgaWYgKGluaXRpYWxTdGFydFRpbWUgPiBpbml0aWFsRW5kVGltZSB8fCBjb21wYXJlZFN0YXJ0VGltZSA+IGNvbXBhcmVkRW5kVGltZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignVGhlIHN0YXJ0IG9mIHRoZSByYW5nZSBjYW5ub3QgYmUgYWZ0ZXIgdGhlIGVuZCBvZiB0aGUgcmFuZ2UnKVxuICB9XG5cbiAgcmV0dXJuIGluaXRpYWxTdGFydFRpbWUgPCBjb21wYXJlZEVuZFRpbWUgJiYgY29tcGFyZWRTdGFydFRpbWUgPCBpbml0aWFsRW5kVGltZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFyZVJhbmdlc092ZXJsYXBwaW5nXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9hcmVfcmFuZ2VzX292ZXJsYXBwaW5nL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIGFuIGluZGV4IG9mIHRoZSBjbG9zZXN0IGRhdGUgZnJvbSB0aGUgYXJyYXkgY29tcGFyaW5nIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIGFuIGluZGV4IG9mIHRoZSBjbG9zZXN0IGRhdGUgZnJvbSB0aGUgYXJyYXkgY29tcGFyaW5nIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlVG9Db21wYXJlIC0gdGhlIGRhdGUgdG8gY29tcGFyZSB3aXRoXG4gKiBAcGFyYW0ge0RhdGVbXXxTdHJpbmdbXXxOdW1iZXJbXX0gZGF0ZXNBcnJheSAtIHRoZSBhcnJheSB0byBzZWFyY2hcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IGFuIGluZGV4IG9mIHRoZSBkYXRlIGNsb3Nlc3QgdG8gdGhlIGdpdmVuIGRhdGVcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gdGhlIHNlY29uZCBhcmd1bWVudCBtdXN0IGJlIGFuIGluc3RhbmNlIG9mIEFycmF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRhdGUgaXMgY2xvc2VyIHRvIDYgU2VwdGVtYmVyIDIwMTU/XG4gKiB2YXIgZGF0ZVRvQ29tcGFyZSA9IG5ldyBEYXRlKDIwMTUsIDgsIDYpXG4gKiB2YXIgZGF0ZXNBcnJheSA9IFtcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE3LCAwLCAxKVxuICogXVxuICogdmFyIHJlc3VsdCA9IGNsb3Nlc3RJbmRleFRvKGRhdGVUb0NvbXBhcmUsIGRhdGVzQXJyYXkpXG4gKiAvLz0+IDFcbiAqL1xuZnVuY3Rpb24gY2xvc2VzdEluZGV4VG8gKGRpcnR5RGF0ZVRvQ29tcGFyZSwgZGlydHlEYXRlc0FycmF5KSB7XG4gIGlmICghKGRpcnR5RGF0ZXNBcnJheSBpbnN0YW5jZW9mIEFycmF5KSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IodG9TdHJpbmcuY2FsbChkaXJ0eURhdGVzQXJyYXkpICsgJyBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgQXJyYXknKVxuICB9XG5cbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSBwYXJzZShkaXJ0eURhdGVUb0NvbXBhcmUpXG4gIHZhciB0aW1lVG9Db21wYXJlID0gZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKClcblxuICB2YXIgcmVzdWx0XG4gIHZhciBtaW5EaXN0YW5jZVxuXG4gIGRpcnR5RGF0ZXNBcnJheS5mb3JFYWNoKGZ1bmN0aW9uIChkaXJ0eURhdGUsIGluZGV4KSB7XG4gICAgdmFyIGN1cnJlbnREYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRpbWVUb0NvbXBhcmUgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpXG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkIHx8IGRpc3RhbmNlIDwgbWluRGlzdGFuY2UpIHtcbiAgICAgIHJlc3VsdCA9IGluZGV4XG4gICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0SW5kZXhUb1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY2xvc2VzdF9pbmRleF90by9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiBhIGRhdGUgZnJvbSB0aGUgYXJyYXkgY2xvc2VzdCB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiBhIGRhdGUgZnJvbSB0aGUgYXJyYXkgY2xvc2VzdCB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtEYXRlW118U3RyaW5nW118TnVtYmVyW119IGRhdGVzQXJyYXkgLSB0aGUgYXJyYXkgdG8gc2VhcmNoXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGRhdGUgZnJvbSB0aGUgYXJyYXkgY2xvc2VzdCB0byB0aGUgZ2l2ZW4gZGF0ZVxuICogQHRocm93cyB7VHlwZUVycm9yfSB0aGUgc2Vjb25kIGFyZ3VtZW50IG11c3QgYmUgYW4gaW5zdGFuY2Ugb2YgQXJyYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggZGF0ZSBpcyBjbG9zZXIgdG8gNiBTZXB0ZW1iZXIgMjAxNTogMSBKYW51YXJ5IDIwMDAgb3IgMSBKYW51YXJ5IDIwMzA/XG4gKiB2YXIgZGF0ZVRvQ29tcGFyZSA9IG5ldyBEYXRlKDIwMTUsIDgsIDYpXG4gKiB2YXIgcmVzdWx0ID0gY2xvc2VzdFRvKGRhdGVUb0NvbXBhcmUsIFtcbiAqICAgbmV3IERhdGUoMjAwMCwgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMzAsIDAsIDEpXG4gKiBdKVxuICogLy89PiBUdWUgSmFuIDAxIDIwMzAgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gY2xvc2VzdFRvIChkaXJ0eURhdGVUb0NvbXBhcmUsIGRpcnR5RGF0ZXNBcnJheSkge1xuICBpZiAoIShkaXJ0eURhdGVzQXJyYXkgaW5zdGFuY2VvZiBBcnJheSkpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHRvU3RyaW5nLmNhbGwoZGlydHlEYXRlc0FycmF5KSArICcgaXMgbm90IGFuIGluc3RhbmNlIG9mIEFycmF5JylcbiAgfVxuXG4gIHZhciBkYXRlVG9Db21wYXJlID0gcGFyc2UoZGlydHlEYXRlVG9Db21wYXJlKVxuICB2YXIgdGltZVRvQ29tcGFyZSA9IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpXG5cbiAgdmFyIHJlc3VsdFxuICB2YXIgbWluRGlzdGFuY2VcblxuICBkaXJ0eURhdGVzQXJyYXkuZm9yRWFjaChmdW5jdGlvbiAoZGlydHlEYXRlKSB7XG4gICAgdmFyIGN1cnJlbnREYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICAgIHZhciBkaXN0YW5jZSA9IE1hdGguYWJzKHRpbWVUb0NvbXBhcmUgLSBjdXJyZW50RGF0ZS5nZXRUaW1lKCkpXG4gICAgaWYgKHJlc3VsdCA9PT0gdW5kZWZpbmVkIHx8IGRpc3RhbmNlIDwgbWluRGlzdGFuY2UpIHtcbiAgICAgIHJlc3VsdCA9IGN1cnJlbnREYXRlXG4gICAgICBtaW5EaXN0YW5jZSA9IGRpc3RhbmNlXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiByZXN1bHRcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjbG9zZXN0VG9cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2Nsb3Nlc3RfdG8vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgc3RhcnRPZklTT1dlZWsgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9pc29fd2Vlay9pbmRleC5qcycpXG5cbnZhciBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFID0gNjAwMDBcbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMFxuXG4vKipcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBJU08gd2Vla3MgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBJU08gd2Vla3MgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBsYXRlciBkYXRlXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZVJpZ2h0IC0gdGhlIGVhcmxpZXIgZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciBJU08gd2Vla3NcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgY2FsZW5kYXIgSVNPIHdlZWtzIGFyZSBiZXR3ZWVuIDYgSnVseSAyMDE0IGFuZCAyMSBKdWx5IDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJJU09XZWVrcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMjEpLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCA2KVxuICogKVxuICogLy89PiAzXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFySVNPV2Vla3MgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBzdGFydE9mSVNPV2Vla0xlZnQgPSBzdGFydE9mSVNPV2VlayhkaXJ0eURhdGVMZWZ0KVxuICB2YXIgc3RhcnRPZklTT1dlZWtSaWdodCA9IHN0YXJ0T2ZJU09XZWVrKGRpcnR5RGF0ZVJpZ2h0KVxuXG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZklTT1dlZWtMZWZ0LmdldFRpbWUoKSAtXG4gICAgc3RhcnRPZklTT1dlZWtMZWZ0LmdldFRpbWV6b25lT2Zmc2V0KCkgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZJU09XZWVrUmlnaHQuZ2V0VGltZSgpIC1cbiAgICBzdGFydE9mSVNPV2Vla1JpZ2h0LmdldFRpbWV6b25lT2Zmc2V0KCkgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1dlZWtzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX2lzb193ZWVrcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBnZXRRdWFydGVyID0gcmVxdWlyZSgnLi4vZ2V0X3F1YXJ0ZXIvaW5kZXguanMnKVxudmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBRdWFydGVyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHF1YXJ0ZXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgcXVhcnRlcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGNhbGVuZGFyIHF1YXJ0ZXJzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGNhbGVuZGFyIHF1YXJ0ZXJzIGFyZSBiZXR3ZWVuIDMxIERlY2VtYmVyIDIwMTMgYW5kIDIgSnVseSAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgyMDEzLCAxMSwgMzEpXG4gKiApXG4gKiAvLz0+IDNcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluQ2FsZW5kYXJRdWFydGVycyAoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgdmFyIGRhdGVMZWZ0ID0gcGFyc2UoZGlydHlEYXRlTGVmdClcbiAgdmFyIGRhdGVSaWdodCA9IHBhcnNlKGRpcnR5RGF0ZVJpZ2h0KVxuXG4gIHZhciB5ZWFyRGlmZiA9IGRhdGVMZWZ0LmdldEZ1bGxZZWFyKCkgLSBkYXRlUmlnaHQuZ2V0RnVsbFllYXIoKVxuICB2YXIgcXVhcnRlckRpZmYgPSBnZXRRdWFydGVyKGRhdGVMZWZ0KSAtIGdldFF1YXJ0ZXIoZGF0ZVJpZ2h0KVxuXG4gIHJldHVybiB5ZWFyRGlmZiAqIDQgKyBxdWFydGVyRGlmZlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fY2FsZW5kYXJfcXVhcnRlcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDI5N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgc3RhcnRPZldlZWsgPSByZXF1aXJlKCcuLi9zdGFydF9vZl93ZWVrL2luZGV4LmpzJylcblxudmFyIE1JTExJU0VDT05EU19JTl9NSU5VVEUgPSA2MDAwMFxudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwXG5cbi8qKlxuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgd2Vla3MgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBjYWxlbmRhciB3ZWVrc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciB3ZWVrcyBhcmUgYmV0d2VlbiA1IEp1bHkgMjAxNCBhbmQgMjAgSnVseSAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgNSlcbiAqIClcbiAqIC8vPT4gM1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LFxuICogLy8gaG93IG1hbnkgY2FsZW5kYXIgd2Vla3MgYXJlIGJldHdlZW4gNSBKdWx5IDIwMTQgYW5kIDIwIEp1bHkgMjAxND9cbiAqIHZhciByZXN1bHQgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDUpLFxuICogICB7d2Vla1N0YXJ0c09uOiAxfVxuICogKVxuICogLy89PiAyXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJbkNhbGVuZGFyV2Vla3MgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0LCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIHN0YXJ0T2ZXZWVrTGVmdCA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZUxlZnQsIGRpcnR5T3B0aW9ucylcbiAgdmFyIHN0YXJ0T2ZXZWVrUmlnaHQgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKVxuXG4gIHZhciB0aW1lc3RhbXBMZWZ0ID0gc3RhcnRPZldlZWtMZWZ0LmdldFRpbWUoKSAtXG4gICAgc3RhcnRPZldlZWtMZWZ0LmdldFRpbWV6b25lT2Zmc2V0KCkgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZXZWVrUmlnaHQuZ2V0VGltZSgpIC1cbiAgICBzdGFydE9mV2Vla1JpZ2h0LmdldFRpbWV6b25lT2Zmc2V0KCkgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG5cbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiBkYXlzIHRvIHRoZSBuZWFyZXN0IGludGVnZXJcbiAgLy8gYmVjYXVzZSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBpbiBhIHdlZWsgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSB3ZWVrIG9mIHRoZSBkYXlsaWdodCBzYXZpbmcgdGltZSBjbG9jayBzaGlmdClcbiAgcmV0dXJuIE1hdGgucm91bmQoKHRpbWVzdGFtcExlZnQgLSB0aW1lc3RhbXBSaWdodCkgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmZXJlbmNlSW5DYWxlbmRhcldlZWtzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX3dlZWtzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyOThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyA9IHJlcXVpcmUoJy4uL2RpZmZlcmVuY2VfaW5fbWlsbGlzZWNvbmRzL2luZGV4LmpzJylcblxudmFyIE1JTExJU0VDT05EU19JTl9IT1VSID0gMzYwMDAwMFxuXG4vKipcbiAqIEBjYXRlZ29yeSBIb3VyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbnVtYmVyIG9mIGhvdXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgaG91cnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGhvdXJzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGhvdXJzIGFyZSBiZXR3ZWVuIDIgSnVseSAyMDE0IDA2OjUwOjAwIGFuZCAyIEp1bHkgMjAxNCAxOTowMDowMD9cbiAqIHZhciByZXN1bHQgPSBkaWZmZXJlbmNlSW5Ib3VycyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTksIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCA1MClcbiAqIClcbiAqIC8vPT4gMTJcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluSG91cnMgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9IT1VSXG4gIHJldHVybiBkaWZmID4gMCA/IE1hdGguZmxvb3IoZGlmZikgOiBNYXRoLmNlaWwoZGlmZilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmZXJlbmNlSW5Ib3Vyc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9ob3Vycy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMjk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcbnZhciBkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1llYXJzID0gcmVxdWlyZSgnLi4vZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl9pc29feWVhcnMvaW5kZXguanMnKVxudmFyIGNvbXBhcmVBc2MgPSByZXF1aXJlKCcuLi9jb21wYXJlX2FzYy9pbmRleC5qcycpXG52YXIgc3ViSVNPWWVhcnMgPSByZXF1aXJlKCcuLi9zdWJfaXNvX3llYXJzL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBJU08gd2Vlay1udW1iZXJpbmcgeWVhcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGZ1bGwgSVNPIHdlZWstbnVtYmVyaW5nIHllYXJzIGFyZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDEwIGFuZCAxIEphbnVhcnkgMjAxMj9cbiAqIHZhciByZXN1bHQgPSBkaWZmZXJlbmNlSW5JU09ZZWFycyhcbiAqICAgbmV3IERhdGUoMjAxMiwgMCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTAsIDAsIDEpXG4gKiApXG4gKiAvLz0+IDFcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluSVNPWWVhcnMgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBkYXRlTGVmdCA9IHBhcnNlKGRpcnR5RGF0ZUxlZnQpXG4gIHZhciBkYXRlUmlnaHQgPSBwYXJzZShkaXJ0eURhdGVSaWdodClcblxuICB2YXIgc2lnbiA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodClcbiAgdmFyIGRpZmZlcmVuY2UgPSBNYXRoLmFicyhkaWZmZXJlbmNlSW5DYWxlbmRhcklTT1llYXJzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKVxuICBkYXRlTGVmdCA9IHN1YklTT1llYXJzKGRhdGVMZWZ0LCBzaWduICogZGlmZmVyZW5jZSlcblxuICAvLyBNYXRoLmFicyhkaWZmIGluIGZ1bGwgSVNPIHllYXJzIC0gZGlmZiBpbiBjYWxlbmRhciBJU08geWVhcnMpID09PSAxXG4gIC8vIGlmIGxhc3QgY2FsZW5kYXIgSVNPIHllYXIgaXMgbm90IGZ1bGxcbiAgLy8gSWYgc28sIHJlc3VsdCBtdXN0IGJlIGRlY3JlYXNlZCBieSAxIGluIGFic29sdXRlIHZhbHVlXG4gIHZhciBpc0xhc3RJU09ZZWFyTm90RnVsbCA9IGNvbXBhcmVBc2MoZGF0ZUxlZnQsIGRhdGVSaWdodCkgPT09IC1zaWduXG4gIHJldHVybiBzaWduICogKGRpZmZlcmVuY2UgLSBpc0xhc3RJU09ZZWFyTm90RnVsbClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmZXJlbmNlSW5JU09ZZWFyc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9pc29feWVhcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzID0gcmVxdWlyZSgnLi4vZGlmZmVyZW5jZV9pbl9taWxsaXNlY29uZHMvaW5kZXguanMnKVxuXG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDYwMDAwXG5cbi8qKlxuICogQGNhdGVnb3J5IE1pbnV0ZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaW51dGVzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgbWludXRlcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgbWludXRlc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaW51dGVzIGFyZSBiZXR3ZWVuIDIgSnVseSAyMDE0IDEyOjA3OjU5IGFuZCAyIEp1bHkgMjAxNCAxMjoyMDowMD9cbiAqIHZhciByZXN1bHQgPSBkaWZmZXJlbmNlSW5NaW51dGVzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgMjAsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCAxMiwgNywgNTkpXG4gKiApXG4gKiAvLz0+IDEyXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbnV0ZXMgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9NSU5VVEVcbiAgcmV0dXJuIGRpZmYgPiAwID8gTWF0aC5mbG9vcihkaWZmKSA6IE1hdGguY2VpbChkaWZmKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZlcmVuY2VJbk1pbnV0ZXNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fbWludXRlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBkaWZmZXJlbmNlSW5Nb250aHMgPSByZXF1aXJlKCcuLi9kaWZmZXJlbmNlX2luX21vbnRocy9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFF1YXJ0ZXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBxdWFydGVycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgcXVhcnRlcnMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgcXVhcnRlcnNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBxdWFydGVycyBhcmUgYmV0d2VlbiAzMSBEZWNlbWJlciAyMDEzIGFuZCAyIEp1bHkgMjAxND9cbiAqIHZhciByZXN1bHQgPSBkaWZmZXJlbmNlSW5RdWFydGVycyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDIwMTMsIDExLCAzMSlcbiAqIClcbiAqIC8vPT4gMlxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlSW5RdWFydGVycyAoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgdmFyIGRpZmYgPSBkaWZmZXJlbmNlSW5Nb250aHMoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIC8gM1xuICByZXR1cm4gZGlmZiA+IDAgPyBNYXRoLmZsb29yKGRpZmYpIDogTWF0aC5jZWlsKGRpZmYpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGlmZmVyZW5jZUluUXVhcnRlcnNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fcXVhcnRlcnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgZGlmZmVyZW5jZUluRGF5cyA9IHJlcXVpcmUoJy4uL2RpZmZlcmVuY2VfaW5fZGF5cy9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCB3ZWVrcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIGZ1bGwgd2Vla3MgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGZ1bGwgd2Vla3NcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCB3ZWVrcyBhcmUgYmV0d2VlbiA1IEp1bHkgMjAxNCBhbmQgMjAgSnVseSAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJbldlZWtzKFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDUpXG4gKiApXG4gKiAvLz0+IDJcbiAqL1xuZnVuY3Rpb24gZGlmZmVyZW5jZUluV2Vla3MgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBkaWZmID0gZGlmZmVyZW5jZUluRGF5cyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkgLyA3XG4gIHJldHVybiBkaWZmID4gMCA/IE1hdGguZmxvb3IoZGlmZikgOiBNYXRoLmNlaWwoZGlmZilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmZXJlbmNlSW5XZWVrc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl93ZWVrcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcbnZhciBkaWZmZXJlbmNlSW5DYWxlbmRhclllYXJzID0gcmVxdWlyZSgnLi4vZGlmZmVyZW5jZV9pbl9jYWxlbmRhcl95ZWFycy9pbmRleC5qcycpXG52YXIgY29tcGFyZUFzYyA9IHJlcXVpcmUoJy4uL2NvbXBhcmVfYXNjL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBmdWxsIHllYXJzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgZnVsbCB5ZWFycyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgZnVsbCB5ZWFyc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBmdWxsIHllYXJzIGFyZSBiZXR3ZWVuIDMxIERlY2VtYmVyIDIwMTMgYW5kIDExIEZlYnJ1YXJ5IDIwMTU/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluWWVhcnMoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMjAxMywgMTEsIDMxKVxuICogKVxuICogLy89PiAxXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJblllYXJzIChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGF0ZUxlZnQgPSBwYXJzZShkaXJ0eURhdGVMZWZ0KVxuICB2YXIgZGF0ZVJpZ2h0ID0gcGFyc2UoZGlydHlEYXRlUmlnaHQpXG5cbiAgdmFyIHNpZ24gPSBjb21wYXJlQXNjKGRhdGVMZWZ0LCBkYXRlUmlnaHQpXG4gIHZhciBkaWZmZXJlbmNlID0gTWF0aC5hYnMoZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSlcbiAgZGF0ZUxlZnQuc2V0RnVsbFllYXIoZGF0ZUxlZnQuZ2V0RnVsbFllYXIoKSAtIHNpZ24gKiBkaWZmZXJlbmNlKVxuXG4gIC8vIE1hdGguYWJzKGRpZmYgaW4gZnVsbCB5ZWFycyAtIGRpZmYgaW4gY2FsZW5kYXIgeWVhcnMpID09PSAxIGlmIGxhc3QgY2FsZW5kYXIgeWVhciBpcyBub3QgZnVsbFxuICAvLyBJZiBzbywgcmVzdWx0IG11c3QgYmUgZGVjcmVhc2VkIGJ5IDEgaW4gYWJzb2x1dGUgdmFsdWVcbiAgdmFyIGlzTGFzdFllYXJOb3RGdWxsID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ25cbiAgcmV0dXJuIHNpZ24gKiAoZGlmZmVyZW5jZSAtIGlzTGFzdFllYXJOb3RGdWxsKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZlcmVuY2VJblllYXJzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlX2luX3llYXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwiZnVuY3Rpb24gYnVpbGREaXN0YW5jZUluV29yZHNMb2NhbGUgKCkge1xuICB2YXIgZGlzdGFuY2VJbldvcmRzTG9jYWxlID0ge1xuICAgIGxlc3NUaGFuWFNlY29uZHM6IHtcbiAgICAgIG9uZTogJ2xlc3MgdGhhbiBhIHNlY29uZCcsXG4gICAgICBvdGhlcjogJ2xlc3MgdGhhbiB7e2NvdW50fX0gc2Vjb25kcydcbiAgICB9LFxuXG4gICAgeFNlY29uZHM6IHtcbiAgICAgIG9uZTogJzEgc2Vjb25kJyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IHNlY29uZHMnXG4gICAgfSxcblxuICAgIGhhbGZBTWludXRlOiAnaGFsZiBhIG1pbnV0ZScsXG5cbiAgICBsZXNzVGhhblhNaW51dGVzOiB7XG4gICAgICBvbmU6ICdsZXNzIHRoYW4gYSBtaW51dGUnLFxuICAgICAgb3RoZXI6ICdsZXNzIHRoYW4ge3tjb3VudH19IG1pbnV0ZXMnXG4gICAgfSxcblxuICAgIHhNaW51dGVzOiB7XG4gICAgICBvbmU6ICcxIG1pbnV0ZScsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBtaW51dGVzJ1xuICAgIH0sXG5cbiAgICBhYm91dFhIb3Vyczoge1xuICAgICAgb25lOiAnYWJvdXQgMSBob3VyJyxcbiAgICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IGhvdXJzJ1xuICAgIH0sXG5cbiAgICB4SG91cnM6IHtcbiAgICAgIG9uZTogJzEgaG91cicsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSBob3VycydcbiAgICB9LFxuXG4gICAgeERheXM6IHtcbiAgICAgIG9uZTogJzEgZGF5JyxcbiAgICAgIG90aGVyOiAne3tjb3VudH19IGRheXMnXG4gICAgfSxcblxuICAgIGFib3V0WE1vbnRoczoge1xuICAgICAgb25lOiAnYWJvdXQgMSBtb250aCcsXG4gICAgICBvdGhlcjogJ2Fib3V0IHt7Y291bnR9fSBtb250aHMnXG4gICAgfSxcblxuICAgIHhNb250aHM6IHtcbiAgICAgIG9uZTogJzEgbW9udGgnLFxuICAgICAgb3RoZXI6ICd7e2NvdW50fX0gbW9udGhzJ1xuICAgIH0sXG5cbiAgICBhYm91dFhZZWFyczoge1xuICAgICAgb25lOiAnYWJvdXQgMSB5ZWFyJyxcbiAgICAgIG90aGVyOiAnYWJvdXQge3tjb3VudH19IHllYXJzJ1xuICAgIH0sXG5cbiAgICB4WWVhcnM6IHtcbiAgICAgIG9uZTogJzEgeWVhcicsXG4gICAgICBvdGhlcjogJ3t7Y291bnR9fSB5ZWFycydcbiAgICB9LFxuXG4gICAgb3ZlclhZZWFyczoge1xuICAgICAgb25lOiAnb3ZlciAxIHllYXInLFxuICAgICAgb3RoZXI6ICdvdmVyIHt7Y291bnR9fSB5ZWFycydcbiAgICB9LFxuXG4gICAgYWxtb3N0WFllYXJzOiB7XG4gICAgICBvbmU6ICdhbG1vc3QgMSB5ZWFyJyxcbiAgICAgIG90aGVyOiAnYWxtb3N0IHt7Y291bnR9fSB5ZWFycydcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiBsb2NhbGl6ZSAodG9rZW4sIGNvdW50LCBvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cblxuICAgIHZhciByZXN1bHRcbiAgICBpZiAodHlwZW9mIGRpc3RhbmNlSW5Xb3Jkc0xvY2FsZVt0b2tlbl0gPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXN1bHQgPSBkaXN0YW5jZUluV29yZHNMb2NhbGVbdG9rZW5dXG4gICAgfSBlbHNlIGlmIChjb3VudCA9PT0gMSkge1xuICAgICAgcmVzdWx0ID0gZGlzdGFuY2VJbldvcmRzTG9jYWxlW3Rva2VuXS5vbmVcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gZGlzdGFuY2VJbldvcmRzTG9jYWxlW3Rva2VuXS5vdGhlci5yZXBsYWNlKCd7e2NvdW50fX0nLCBjb3VudClcbiAgICB9XG5cbiAgICBpZiAob3B0aW9ucy5hZGRTdWZmaXgpIHtcbiAgICAgIGlmIChvcHRpb25zLmNvbXBhcmlzb24gPiAwKSB7XG4gICAgICAgIHJldHVybiAnaW4gJyArIHJlc3VsdFxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdCArICcgYWdvJ1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHRcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbG9jYWxpemU6IGxvY2FsaXplXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBidWlsZERpc3RhbmNlSW5Xb3Jkc0xvY2FsZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbG9jYWxlL2VuL2J1aWxkX2Rpc3RhbmNlX2luX3dvcmRzX2xvY2FsZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBidWlsZEZvcm1hdHRpbmdUb2tlbnNSZWdFeHAgPSByZXF1aXJlKCcuLi8uLi9fbGliL2J1aWxkX2Zvcm1hdHRpbmdfdG9rZW5zX3JlZ19leHAvaW5kZXguanMnKVxuXG5mdW5jdGlvbiBidWlsZEZvcm1hdExvY2FsZSAoKSB7XG4gIC8vIE5vdGU6IGluIEVuZ2xpc2gsIHRoZSBuYW1lcyBvZiBkYXlzIG9mIHRoZSB3ZWVrIGFuZCBtb250aHMgYXJlIGNhcGl0YWxpemVkLlxuICAvLyBJZiB5b3UgYXJlIG1ha2luZyBhIG5ldyBsb2NhbGUgYmFzZWQgb24gdGhpcyBvbmUsIGNoZWNrIGlmIHRoZSBzYW1lIGlzIHRydWUgZm9yIHRoZSBsYW5ndWFnZSB5b3UncmUgd29ya2luZyBvbi5cbiAgLy8gR2VuZXJhbGx5LCBmb3JtYXR0ZWQgZGF0ZXMgc2hvdWxkIGxvb2sgbGlrZSB0aGV5IGFyZSBpbiB0aGUgbWlkZGxlIG9mIGEgc2VudGVuY2UsXG4gIC8vIGUuZy4gaW4gU3BhbmlzaCBsYW5ndWFnZSB0aGUgd2Vla2RheXMgYW5kIG1vbnRocyBzaG91bGQgYmUgaW4gdGhlIGxvd2VyY2FzZS5cbiAgdmFyIG1vbnRoczNjaGFyID0gWydKYW4nLCAnRmViJywgJ01hcicsICdBcHInLCAnTWF5JywgJ0p1bicsICdKdWwnLCAnQXVnJywgJ1NlcCcsICdPY3QnLCAnTm92JywgJ0RlYyddXG4gIHZhciBtb250aHNGdWxsID0gWydKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ11cbiAgdmFyIHdlZWtkYXlzMmNoYXIgPSBbJ1N1JywgJ01vJywgJ1R1JywgJ1dlJywgJ1RoJywgJ0ZyJywgJ1NhJ11cbiAgdmFyIHdlZWtkYXlzM2NoYXIgPSBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddXG4gIHZhciB3ZWVrZGF5c0Z1bGwgPSBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J11cbiAgdmFyIG1lcmlkaWVtVXBwZXJjYXNlID0gWydBTScsICdQTSddXG4gIHZhciBtZXJpZGllbUxvd2VyY2FzZSA9IFsnYW0nLCAncG0nXVxuICB2YXIgbWVyaWRpZW1GdWxsID0gWydhLm0uJywgJ3AubS4nXVxuXG4gIHZhciBmb3JtYXR0ZXJzID0ge1xuICAgIC8vIE1vbnRoOiBKYW4sIEZlYiwgLi4uLCBEZWNcbiAgICAnTU1NJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHMzY2hhcltkYXRlLmdldE1vbnRoKCldXG4gICAgfSxcblxuICAgIC8vIE1vbnRoOiBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlclxuICAgICdNTU1NJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgIHJldHVybiBtb250aHNGdWxsW2RhdGUuZ2V0TW9udGgoKV1cbiAgICB9LFxuXG4gICAgLy8gRGF5IG9mIHdlZWs6IFN1LCBNbywgLi4uLCBTYVxuICAgICdkZCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICByZXR1cm4gd2Vla2RheXMyY2hhcltkYXRlLmdldERheSgpXVxuICAgIH0sXG5cbiAgICAvLyBEYXkgb2Ygd2VlazogU3VuLCBNb24sIC4uLiwgU2F0XG4gICAgJ2RkZCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICByZXR1cm4gd2Vla2RheXMzY2hhcltkYXRlLmdldERheSgpXVxuICAgIH0sXG5cbiAgICAvLyBEYXkgb2Ygd2VlazogU3VuZGF5LCBNb25kYXksIC4uLiwgU2F0dXJkYXlcbiAgICAnZGRkZCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgICByZXR1cm4gd2Vla2RheXNGdWxsW2RhdGUuZ2V0RGF5KCldXG4gICAgfSxcblxuICAgIC8vIEFNLCBQTVxuICAgICdBJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgIHJldHVybiAoZGF0ZS5nZXRIb3VycygpIC8gMTIpID49IDEgPyBtZXJpZGllbVVwcGVyY2FzZVsxXSA6IG1lcmlkaWVtVXBwZXJjYXNlWzBdXG4gICAgfSxcblxuICAgIC8vIGFtLCBwbVxuICAgICdhJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICAgIHJldHVybiAoZGF0ZS5nZXRIb3VycygpIC8gMTIpID49IDEgPyBtZXJpZGllbUxvd2VyY2FzZVsxXSA6IG1lcmlkaWVtTG93ZXJjYXNlWzBdXG4gICAgfSxcblxuICAgIC8vIGEubS4sIHAubS5cbiAgICAnYWEnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgICAgcmV0dXJuIChkYXRlLmdldEhvdXJzKCkgLyAxMikgPj0gMSA/IG1lcmlkaWVtRnVsbFsxXSA6IG1lcmlkaWVtRnVsbFswXVxuICAgIH1cbiAgfVxuXG4gIC8vIEdlbmVyYXRlIG9yZGluYWwgdmVyc2lvbiBvZiBmb3JtYXR0ZXJzOiBNIC0+IE1vLCBEIC0+IERvLCBldGMuXG4gIHZhciBvcmRpbmFsRm9ybWF0dGVycyA9IFsnTScsICdEJywgJ0RERCcsICdkJywgJ1EnLCAnVyddXG4gIG9yZGluYWxGb3JtYXR0ZXJzLmZvckVhY2goZnVuY3Rpb24gKGZvcm1hdHRlclRva2VuKSB7XG4gICAgZm9ybWF0dGVyc1tmb3JtYXR0ZXJUb2tlbiArICdvJ10gPSBmdW5jdGlvbiAoZGF0ZSwgZm9ybWF0dGVycykge1xuICAgICAgcmV0dXJuIG9yZGluYWwoZm9ybWF0dGVyc1tmb3JtYXR0ZXJUb2tlbl0oZGF0ZSkpXG4gICAgfVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgZm9ybWF0dGVyczogZm9ybWF0dGVycyxcbiAgICBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwOiBidWlsZEZvcm1hdHRpbmdUb2tlbnNSZWdFeHAoZm9ybWF0dGVycylcbiAgfVxufVxuXG5mdW5jdGlvbiBvcmRpbmFsIChudW1iZXIpIHtcbiAgdmFyIHJlbTEwMCA9IG51bWJlciAlIDEwMFxuICBpZiAocmVtMTAwID4gMjAgfHwgcmVtMTAwIDwgMTApIHtcbiAgICBzd2l0Y2ggKHJlbTEwMCAlIDEwKSB7XG4gICAgICBjYXNlIDE6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnc3QnXG4gICAgICBjYXNlIDI6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAnbmQnXG4gICAgICBjYXNlIDM6XG4gICAgICAgIHJldHVybiBudW1iZXIgKyAncmQnXG4gICAgfVxuICB9XG4gIHJldHVybiBudW1iZXIgKyAndGgnXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGRGb3JtYXRMb2NhbGVcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi9idWlsZF9mb3JtYXRfbG9jYWxlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGNvbW1vbkZvcm1hdHRlcktleXMgPSBbXG4gICdNJywgJ01NJywgJ1EnLCAnRCcsICdERCcsICdEREQnLCAnRERERCcsICdkJyxcbiAgJ0UnLCAnVycsICdXVycsICdZWScsICdZWVlZJywgJ0dHJywgJ0dHR0cnLFxuICAnSCcsICdISCcsICdoJywgJ2hoJywgJ20nLCAnbW0nLFxuICAncycsICdzcycsICdTJywgJ1NTJywgJ1NTUycsXG4gICdaJywgJ1paJywgJ1gnLCAneCdcbl1cblxuZnVuY3Rpb24gYnVpbGRGb3JtYXR0aW5nVG9rZW5zUmVnRXhwIChmb3JtYXR0ZXJzKSB7XG4gIHZhciBmb3JtYXR0ZXJLZXlzID0gW11cbiAgZm9yICh2YXIga2V5IGluIGZvcm1hdHRlcnMpIHtcbiAgICBpZiAoZm9ybWF0dGVycy5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICBmb3JtYXR0ZXJLZXlzLnB1c2goa2V5KVxuICAgIH1cbiAgfVxuXG4gIHZhciBmb3JtYXR0aW5nVG9rZW5zID0gY29tbW9uRm9ybWF0dGVyS2V5c1xuICAgIC5jb25jYXQoZm9ybWF0dGVyS2V5cylcbiAgICAuc29ydCgpXG4gICAgLnJldmVyc2UoKVxuICB2YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IG5ldyBSZWdFeHAoXG4gICAgJyhcXFxcW1teXFxcXFtdKlxcXFxdKXwoXFxcXFxcXFwpPycgKyAnKCcgKyBmb3JtYXR0aW5nVG9rZW5zLmpvaW4oJ3wnKSArICd8LiknLCAnZydcbiAgKVxuXG4gIHJldHVybiBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwXG59XG5cbm1vZHVsZS5leHBvcnRzID0gYnVpbGRGb3JtYXR0aW5nVG9rZW5zUmVnRXhwXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sb2NhbGUvX2xpYi9idWlsZF9mb3JtYXR0aW5nX3Rva2Vuc19yZWdfZXhwL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGNvbXBhcmVEZXNjID0gcmVxdWlyZSgnLi4vY29tcGFyZV9kZXNjL2luZGV4LmpzJylcbnZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcbnZhciBkaWZmZXJlbmNlSW5TZWNvbmRzID0gcmVxdWlyZSgnLi4vZGlmZmVyZW5jZV9pbl9zZWNvbmRzL2luZGV4LmpzJylcbnZhciBlbkxvY2FsZSA9IHJlcXVpcmUoJy4uL2xvY2FsZS9lbi9pbmRleC5qcycpXG5cbnZhciBNSU5VVEVTX0lOX0RBWSA9IDE0NDBcbnZhciBNSU5VVEVTX0lOX01PTlRIID0gNDMyMDBcbnZhciBNSU5VVEVTX0lOX1lFQVIgPSA1MjU2MDBcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMgaW4gd29yZHMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzIGluIHdvcmRzLCB1c2luZyBzdHJpY3QgdW5pdHMuXG4gKiBUaGlzIGlzIGxpa2UgYGRpc3RhbmNlSW5Xb3Jkc2AsIGJ1dCBkb2VzIG5vdCB1c2UgaGVscGVycyBsaWtlICdhbG1vc3QnLCAnb3ZlcicsXG4gKiAnbGVzcyB0aGFuJyBhbmQgdGhlIGxpa2UuXG4gKlxuICogfCBEaXN0YW5jZSBiZXR3ZWVuIGRhdGVzIHwgUmVzdWx0ICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIHwgMCAuLi4gNTkgc2VjcyAgICAgICAgICB8IFswLi41OV0gc2Vjb25kcyAgICAgfFxuICogfCAxIC4uLiA1OSBtaW5zICAgICAgICAgIHwgWzEuLjU5XSBtaW51dGVzICAgICB8XG4gKiB8IDEgLi4uIDIzIGhycyAgICAgICAgICAgfCBbMS4uMjNdIGhvdXJzICAgICAgIHxcbiAqIHwgMSAuLi4gMjkgZGF5cyAgICAgICAgICB8IFsxLi4yOV0gZGF5cyAgICAgICAgfFxuICogfCAxIC4uLiAxMSBtb250aHMgICAgICAgIHwgWzEuLjExXSBtb250aHMgICAgICB8XG4gKiB8IDEgLi4uIE4geWVhcnMgICAgICAgICAgfCBbMS4uTl0gIHllYXJzICAgICAgIHxcbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZVRvQ29tcGFyZSAtIHRoZSBkYXRlIHRvIGNvbXBhcmUgd2l0aFxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3RoZXIgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmFkZFN1ZmZpeD1mYWxzZV0gLSByZXN1bHQgaW5kaWNhdGVzIGlmIHRoZSBzZWNvbmQgZGF0ZSBpcyBlYXJsaWVyIG9yIGxhdGVyIHRoYW4gdGhlIGZpcnN0XG4gKiBAcGFyYW0geydzJ3wnbSd8J2gnfCdkJ3wnTSd8J1knfSBbb3B0aW9ucy51bml0XSAtIGlmIHNwZWNpZmllZCwgd2lsbCBmb3JjZSBhIHVuaXRcbiAqIEBwYXJhbSB7J2Zsb29yJ3wnY2VpbCd8J3JvdW5kJ30gW29wdGlvbnMucGFydGlhbE1ldGhvZD0nZmxvb3InXSAtIHdoaWNoIHdheSB0byByb3VuZCBwYXJ0aWFsIHVuaXRzXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMubG9jYWxlPWVuTG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0XG4gKiBAcmV0dXJucyB7U3RyaW5nfSB0aGUgZGlzdGFuY2UgaW4gd29yZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgYmV0d2VlbiAyIEp1bHkgMjAxNCBhbmQgMSBKYW51YXJ5IDIwMTU/XG4gKiB2YXIgcmVzdWx0ID0gZGlzdGFuY2VJbldvcmRzU3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMilcbiAqIClcbiAqIC8vPT4gJzYgbW9udGhzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIDEgSmFudWFyeSAyMDE1IDAwOjAwOjE1XG4gKiAvLyBhbmQgMSBKYW51YXJ5IDIwMTUgMDA6MDA6MDA/XG4gKiB2YXIgcmVzdWx0ID0gZGlzdGFuY2VJbldvcmRzU3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDEsIDAsIDAsIDApLFxuICogKVxuICogLy89PiAnMTUgc2Vjb25kcydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hhdCBpcyB0aGUgZGlzdGFuY2UgZnJvbSAxIEphbnVhcnkgMjAxNlxuICogLy8gdG8gMSBKYW51YXJ5IDIwMTUsIHdpdGggYSBzdWZmaXg/XG4gKiB2YXIgcmVzdWx0ID0gZGlzdGFuY2VJbldvcmRzU3RyaWN0KFxuICogICBuZXcgRGF0ZSgyMDE2LCAwLCAxKSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSksXG4gKiAgIHthZGRTdWZmaXg6IHRydWV9XG4gKiApXG4gKiAvLz0+ICcxIHllYXIgYWdvJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAxIEphbnVhcnkgMjAxNSwgaW4gbWludXRlcz9cbiAqIHZhciByZXN1bHQgPSBkaXN0YW5jZUluV29yZHNTdHJpY3QoXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDAsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxKSxcbiAqICAge3VuaXQ6ICdtJ31cbiAqIClcbiAqIC8vPT4gJzUyNTYwMCBtaW51dGVzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGF0IGlzIHRoZSBkaXN0YW5jZSBmcm9tIDEgSmFudWFyeSAyMDE2XG4gKiAvLyB0byAyOCBKYW51YXJ5IDIwMTUsIGluIG1vbnRocywgcm91bmRlZCB1cD9cbiAqIHZhciByZXN1bHQgPSBkaXN0YW5jZUluV29yZHNTdHJpY3QoXG4gKiAgIG5ldyBEYXRlKDIwMTUsIDAsIDI4KSxcbiAqICAgbmV3IERhdGUoMjAxNSwgMCwgMSksXG4gKiAgIHt1bml0OiAnTScsIHBhcnRpYWxNZXRob2Q6ICdjZWlsJ31cbiAqIClcbiAqIC8vPT4gJzEgbW9udGgnXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoYXQgaXMgdGhlIGRpc3RhbmNlIGJldHdlZW4gMSBBdWd1c3QgMjAxNiBhbmQgMSBKYW51YXJ5IDIwMTUgaW4gRXNwZXJhbnRvP1xuICogdmFyIGVvTG9jYWxlID0gcmVxdWlyZSgnZGF0ZS1mbnMvbG9jYWxlL2VvJylcbiAqIHZhciByZXN1bHQgPSBkaXN0YW5jZUluV29yZHNTdHJpY3QoXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDcsIDEpLFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxKSxcbiAqICAge2xvY2FsZTogZW9Mb2NhbGV9XG4gKiApXG4gKiAvLz0+ICcxIGphcm8nXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlSW5Xb3Jkc1N0cmljdCAoZGlydHlEYXRlVG9Db21wYXJlLCBkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgb3B0aW9ucyA9IGRpcnR5T3B0aW9ucyB8fCB7fVxuXG4gIHZhciBjb21wYXJpc29uID0gY29tcGFyZURlc2MoZGlydHlEYXRlVG9Db21wYXJlLCBkaXJ0eURhdGUpXG5cbiAgdmFyIGxvY2FsZSA9IG9wdGlvbnMubG9jYWxlXG4gIHZhciBsb2NhbGl6ZSA9IGVuTG9jYWxlLmRpc3RhbmNlSW5Xb3Jkcy5sb2NhbGl6ZVxuICBpZiAobG9jYWxlICYmIGxvY2FsZS5kaXN0YW5jZUluV29yZHMgJiYgbG9jYWxlLmRpc3RhbmNlSW5Xb3Jkcy5sb2NhbGl6ZSkge1xuICAgIGxvY2FsaXplID0gbG9jYWxlLmRpc3RhbmNlSW5Xb3Jkcy5sb2NhbGl6ZVxuICB9XG5cbiAgdmFyIGxvY2FsaXplT3B0aW9ucyA9IHtcbiAgICBhZGRTdWZmaXg6IEJvb2xlYW4ob3B0aW9ucy5hZGRTdWZmaXgpLFxuICAgIGNvbXBhcmlzb246IGNvbXBhcmlzb25cbiAgfVxuXG4gIHZhciBkYXRlTGVmdCwgZGF0ZVJpZ2h0XG4gIGlmIChjb21wYXJpc29uID4gMCkge1xuICAgIGRhdGVMZWZ0ID0gcGFyc2UoZGlydHlEYXRlVG9Db21wYXJlKVxuICAgIGRhdGVSaWdodCA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgfSBlbHNlIHtcbiAgICBkYXRlTGVmdCA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgICBkYXRlUmlnaHQgPSBwYXJzZShkaXJ0eURhdGVUb0NvbXBhcmUpXG4gIH1cblxuICB2YXIgdW5pdFxuICB2YXIgbWF0aFBhcnRpYWwgPSBNYXRoW29wdGlvbnMucGFydGlhbE1ldGhvZCA/IFN0cmluZyhvcHRpb25zLnBhcnRpYWxNZXRob2QpIDogJ2Zsb29yJ11cbiAgdmFyIHNlY29uZHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzKGRhdGVSaWdodCwgZGF0ZUxlZnQpXG4gIHZhciBvZmZzZXQgPSBkYXRlUmlnaHQuZ2V0VGltZXpvbmVPZmZzZXQoKSAtIGRhdGVMZWZ0LmdldFRpbWV6b25lT2Zmc2V0KClcbiAgdmFyIG1pbnV0ZXMgPSBtYXRoUGFydGlhbChzZWNvbmRzIC8gNjApIC0gb2Zmc2V0XG4gIHZhciBob3VycywgZGF5cywgbW9udGhzLCB5ZWFyc1xuXG4gIGlmIChvcHRpb25zLnVuaXQpIHtcbiAgICB1bml0ID0gU3RyaW5nKG9wdGlvbnMudW5pdClcbiAgfSBlbHNlIHtcbiAgICBpZiAobWludXRlcyA8IDEpIHtcbiAgICAgIHVuaXQgPSAncydcbiAgICB9IGVsc2UgaWYgKG1pbnV0ZXMgPCA2MCkge1xuICAgICAgdW5pdCA9ICdtJ1xuICAgIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fREFZKSB7XG4gICAgICB1bml0ID0gJ2gnXG4gICAgfSBlbHNlIGlmIChtaW51dGVzIDwgTUlOVVRFU19JTl9NT05USCkge1xuICAgICAgdW5pdCA9ICdkJ1xuICAgIH0gZWxzZSBpZiAobWludXRlcyA8IE1JTlVURVNfSU5fWUVBUikge1xuICAgICAgdW5pdCA9ICdNJ1xuICAgIH0gZWxzZSB7XG4gICAgICB1bml0ID0gJ1knXG4gICAgfVxuICB9XG5cbiAgLy8gMCB1cCB0byA2MCBzZWNvbmRzXG4gIGlmICh1bml0ID09PSAncycpIHtcbiAgICByZXR1cm4gbG9jYWxpemUoJ3hTZWNvbmRzJywgc2Vjb25kcywgbG9jYWxpemVPcHRpb25zKVxuXG4gIC8vIDEgdXAgdG8gNjAgbWluc1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdtJykge1xuICAgIHJldHVybiBsb2NhbGl6ZSgneE1pbnV0ZXMnLCBtaW51dGVzLCBsb2NhbGl6ZU9wdGlvbnMpXG5cbiAgLy8gMSB1cCB0byAyNCBob3Vyc1xuICB9IGVsc2UgaWYgKHVuaXQgPT09ICdoJykge1xuICAgIGhvdXJzID0gbWF0aFBhcnRpYWwobWludXRlcyAvIDYwKVxuICAgIHJldHVybiBsb2NhbGl6ZSgneEhvdXJzJywgaG91cnMsIGxvY2FsaXplT3B0aW9ucylcblxuICAvLyAxIHVwIHRvIDMwIGRheXNcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnZCcpIHtcbiAgICBkYXlzID0gbWF0aFBhcnRpYWwobWludXRlcyAvIE1JTlVURVNfSU5fREFZKVxuICAgIHJldHVybiBsb2NhbGl6ZSgneERheXMnLCBkYXlzLCBsb2NhbGl6ZU9wdGlvbnMpXG5cbiAgLy8gMSB1cCB0byAxMiBtb250aHNcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnTScpIHtcbiAgICBtb250aHMgPSBtYXRoUGFydGlhbChtaW51dGVzIC8gTUlOVVRFU19JTl9NT05USClcbiAgICByZXR1cm4gbG9jYWxpemUoJ3hNb250aHMnLCBtb250aHMsIGxvY2FsaXplT3B0aW9ucylcblxuICAvLyAxIHllYXIgdXAgdG8gbWF4IERhdGVcbiAgfSBlbHNlIGlmICh1bml0ID09PSAnWScpIHtcbiAgICB5ZWFycyA9IG1hdGhQYXJ0aWFsKG1pbnV0ZXMgLyBNSU5VVEVTX0lOX1lFQVIpXG4gICAgcmV0dXJuIGxvY2FsaXplKCd4WWVhcnMnLCB5ZWFycywgbG9jYWxpemVPcHRpb25zKVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKCdVbmtub3duIHVuaXQ6ICcgKyB1bml0KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpc3RhbmNlSW5Xb3Jkc1N0cmljdFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlzdGFuY2VfaW5fd29yZHNfc3RyaWN0L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGRpc3RhbmNlSW5Xb3JkcyA9IHJlcXVpcmUoJy4uL2Rpc3RhbmNlX2luX3dvcmRzL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZSBhbmQgbm93IGluIHdvcmRzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlIGFuZCBub3cgaW4gd29yZHMuXG4gKlxuICogfCBEaXN0YW5jZSB0byBub3cgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFJlc3VsdCAgICAgICAgICAgICAgfFxuICogfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tfFxuICogfCAwIC4uLiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGxlc3MgdGhhbiBhIG1pbnV0ZSAgfFxuICogfCAzMCBzZWNzIC4uLiAxIG1pbiAzMCBzZWNzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IDEgbWludXRlICAgICAgICAgICAgfFxuICogfCAxIG1pbiAzMCBzZWNzIC4uLiA0NCBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi40NF0gbWludXRlcyAgICAgfFxuICogfCA0NCBtaW5zIC4uLiAzMCBzZWNzIC4uLiA4OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgaG91ciAgICAgICAgfFxuICogfCA4OSBtaW5zIDMwIHNlY3MgLi4uIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IFsyLi4yNF0gaG91cnMgfFxuICogfCAyMyBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiA0MSBocnMgNTkgbWlucyAzMCBzZWNzICAgICAgICAgICAgICAgICB8IDEgZGF5ICAgICAgICAgICAgICAgfFxuICogfCA0MSBocnMgNTkgbWlucyAzMCBzZWNzIC4uLiAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgICAgICAgICB8IFsyLi4zMF0gZGF5cyAgICAgICAgfFxuICogfCAyOSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDQ0IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDEgbW9udGggICAgICAgfFxuICogfCA0NCBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDU5IGRheXMgMjMgaHJzIDU5IG1pbnMgMzAgc2VjcyB8IGFib3V0IDIgbW9udGhzICAgICAgfFxuICogfCA1OSBkYXlzIDIzIGhycyA1OSBtaW5zIDMwIHNlY3MgLi4uIDEgeXIgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFsyLi4xMl0gbW9udGhzICAgICAgfFxuICogfCAxIHlyIC4uLiAxIHlyIDMgbW9udGhzICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IDEgeWVhciAgICAgICAgfFxuICogfCAxIHlyIDMgbW9udGhzIC4uLiAxIHlyIDkgbW9udGggcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgMSB5ZWFyICAgICAgICAgfFxuICogfCAxIHlyIDkgbW9udGhzIC4uLiAyIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCAyIHllYXJzICAgICAgfFxuICogfCBOIHlycyAuLi4gTiB5cnMgMyBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFib3V0IE4geWVhcnMgICAgICAgfFxuICogfCBOIHlycyAzIG1vbnRocyAuLi4gTiB5cnMgOSBtb250aHMgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG92ZXIgTiB5ZWFycyAgICAgICAgfFxuICogfCBOIHlycyA5IG1vbnRocyAuLi4gTisxIHlycyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGFsbW9zdCBOKzEgeWVhcnMgICAgfFxuICpcbiAqIFdpdGggYG9wdGlvbnMuaW5jbHVkZVNlY29uZHMgPT0gdHJ1ZWA6XG4gKiB8IERpc3RhbmNlIHRvIG5vdyAgICAgfCBSZXN1bHQgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IDAgc2VjcyAuLi4gNSBzZWNzICAgfCBsZXNzIHRoYW4gNSBzZWNvbmRzICB8XG4gKiB8IDUgc2VjcyAuLi4gMTAgc2VjcyAgfCBsZXNzIHRoYW4gMTAgc2Vjb25kcyB8XG4gKiB8IDEwIHNlY3MgLi4uIDIwIHNlY3MgfCBsZXNzIHRoYW4gMjAgc2Vjb25kcyB8XG4gKiB8IDIwIHNlY3MgLi4uIDQwIHNlY3MgfCBoYWxmIGEgbWludXRlICAgICAgICB8XG4gKiB8IDQwIHNlY3MgLi4uIDYwIHNlY3MgfCBsZXNzIHRoYW4gYSBtaW51dGUgICB8XG4gKiB8IDYwIHNlY3MgLi4uIDkwIHNlY3MgfCAxIG1pbnV0ZSAgICAgICAgICAgICB8XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0Jvb2xlYW59IFtvcHRpb25zLmluY2x1ZGVTZWNvbmRzPWZhbHNlXSAtIGRpc3RhbmNlcyBsZXNzIHRoYW4gYSBtaW51dGUgYXJlIG1vcmUgZGV0YWlsZWRcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gW29wdGlvbnMuYWRkU3VmZml4PWZhbHNlXSAtIHJlc3VsdCBzcGVjaWZpZXMgaWYgdGhlIHNlY29uZCBkYXRlIGlzIGVhcmxpZXIgb3IgbGF0ZXIgdGhhbiB0aGUgZmlyc3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5sb2NhbGU9ZW5Mb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3RcbiAqIEByZXR1cm5zIHtTdHJpbmd9IHRoZSBkaXN0YW5jZSBpbiB3b3Jkc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSwgd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMiBKdWx5IDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZGlzdGFuY2VJbldvcmRzVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpXG4gKiApXG4gKiAvLz0+ICc2IG1vbnRocydcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgbm93IGlzIDEgSmFudWFyeSAyMDE1IDAwOjAwOjAwLFxuICogLy8gd2hhdCBpcyB0aGUgZGlzdGFuY2UgdG8gMSBKYW51YXJ5IDIwMTUgMDA6MDA6MTUsIGluY2x1ZGluZyBzZWNvbmRzP1xuICogdmFyIHJlc3VsdCA9IGRpc3RhbmNlSW5Xb3Jkc1RvTm93KFxuICogICBuZXcgRGF0ZSgyMDE1LCAwLCAxLCAwLCAwLCAxNSksXG4gKiAgIHtpbmNsdWRlU2Vjb25kczogdHJ1ZX1cbiAqIClcbiAqIC8vPT4gJ2xlc3MgdGhhbiAyMCBzZWNvbmRzJ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAxIEphbnVhcnkgMjAxNSxcbiAqIC8vIHdoYXQgaXMgdGhlIGRpc3RhbmNlIHRvIDEgSmFudWFyeSAyMDE2LCB3aXRoIGEgc3VmZml4P1xuICogdmFyIHJlc3VsdCA9IGRpc3RhbmNlSW5Xb3Jkc1RvTm93KFxuICogICBuZXcgRGF0ZSgyMDE2LCAwLCAxKSxcbiAqICAge2FkZFN1ZmZpeDogdHJ1ZX1cbiAqIClcbiAqIC8vPT4gJ2luIGFib3V0IDEgeWVhcidcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMSBKYW51YXJ5IDIwMTUsXG4gKiAvLyB3aGF0IGlzIHRoZSBkaXN0YW5jZSB0byAxIEF1Z3VzdCAyMDE2IGluIEVzcGVyYW50bz9cbiAqIHZhciBlb0xvY2FsZSA9IHJlcXVpcmUoJ2RhdGUtZm5zL2xvY2FsZS9lbycpXG4gKiB2YXIgcmVzdWx0ID0gZGlzdGFuY2VJbldvcmRzVG9Ob3coXG4gKiAgIG5ldyBEYXRlKDIwMTYsIDcsIDEpLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJ3BsaSBvbCAxIGphcm8nXG4gKi9cbmZ1bmN0aW9uIGRpc3RhbmNlSW5Xb3Jkc1RvTm93IChkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXR1cm4gZGlzdGFuY2VJbldvcmRzKERhdGUubm93KCksIGRpcnR5RGF0ZSwgZGlydHlPcHRpb25zKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpc3RhbmNlSW5Xb3Jkc1RvTm93XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaXN0YW5jZV9pbl93b3Jkc190b19ub3cvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGFycmF5IG9mIGRhdGVzIHdpdGhpbiB0aGUgc3BlY2lmaWVkIHJhbmdlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBhcnJheSBvZiBkYXRlcyB3aXRoaW4gdGhlIHNwZWNpZmllZCByYW5nZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gc3RhcnREYXRlIC0gdGhlIGZpcnN0IGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBlbmREYXRlIC0gdGhlIGxhc3QgZGF0ZVxuICogQHBhcmFtIHtOdW1iZXJ9IFtzdGVwPTFdIC0gdGhlIHN0ZXAgYmV0d2VlbiBlYWNoIGRheVxuICogQHJldHVybnMge0RhdGVbXX0gdGhlIGFycmF5IHdpdGggc3RhcnRzIG9mIGRheXMgZnJvbSB0aGUgZGF5IG9mIHN0YXJ0RGF0ZSB0byB0aGUgZGF5IG9mIGVuZERhdGVcbiAqIEB0aHJvd3Mge0Vycm9yfSBzdGFydERhdGUgY2Fubm90IGJlIGFmdGVyIGVuZERhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gRWFjaCBkYXkgYmV0d2VlbiA2IE9jdG9iZXIgMjAxNCBhbmQgMTAgT2N0b2JlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IGVhY2hEYXkoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDksIDYpLFxuICogICBuZXcgRGF0ZSgyMDE0LCA5LCAxMClcbiAqIClcbiAqIC8vPT4gW1xuICogLy8gICBNb24gT2N0IDA2IDIwMTQgMDA6MDA6MDAsXG4gKiAvLyAgIFR1ZSBPY3QgMDcgMjAxNCAwMDowMDowMCxcbiAqIC8vICAgV2VkIE9jdCAwOCAyMDE0IDAwOjAwOjAwLFxuICogLy8gICBUaHUgT2N0IDA5IDIwMTQgMDA6MDA6MDAsXG4gKiAvLyAgIEZyaSBPY3QgMTAgMjAxNCAwMDowMDowMFxuICogLy8gXVxuICovXG5mdW5jdGlvbiBlYWNoRGF5IChkaXJ0eVN0YXJ0RGF0ZSwgZGlydHlFbmREYXRlLCBkaXJ0eVN0ZXApIHtcbiAgdmFyIHN0YXJ0RGF0ZSA9IHBhcnNlKGRpcnR5U3RhcnREYXRlKVxuICB2YXIgZW5kRGF0ZSA9IHBhcnNlKGRpcnR5RW5kRGF0ZSlcbiAgdmFyIHN0ZXAgPSBkaXJ0eVN0ZXAgIT09IHVuZGVmaW5lZCA/IGRpcnR5U3RlcCA6IDFcblxuICB2YXIgZW5kVGltZSA9IGVuZERhdGUuZ2V0VGltZSgpXG5cbiAgaWYgKHN0YXJ0RGF0ZS5nZXRUaW1lKCkgPiBlbmRUaW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgZmlyc3QgZGF0ZSBjYW5ub3QgYmUgYWZ0ZXIgdGhlIHNlY29uZCBkYXRlJylcbiAgfVxuXG4gIHZhciBkYXRlcyA9IFtdXG5cbiAgdmFyIGN1cnJlbnREYXRlID0gc3RhcnREYXRlXG4gIGN1cnJlbnREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXG5cbiAgd2hpbGUgKGN1cnJlbnREYXRlLmdldFRpbWUoKSA8PSBlbmRUaW1lKSB7XG4gICAgZGF0ZXMucHVzaChwYXJzZShjdXJyZW50RGF0ZSkpXG4gICAgY3VycmVudERhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgKyBzdGVwKVxuICB9XG5cbiAgcmV0dXJuIGRhdGVzXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZWFjaERheVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZWFjaF9kYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IEhvdXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYW4gaG91ciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhbiBob3VyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYW4gaG91clxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGFuIGhvdXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gZW5kT2ZIb3VyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAxMTo1OTo1OS45OTlcbiAqL1xuZnVuY3Rpb24gZW5kT2ZIb3VyIChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIGRhdGUuc2V0TWludXRlcyg1OSwgNTksIDk5OSlcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmRPZkhvdXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZF9vZl9ob3VyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGVuZE9mV2VlayA9IHJlcXVpcmUoJy4uL2VuZF9vZl93ZWVrL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYW4gSVNPIHdlZWsgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYW4gSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhbiBJU08gd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIHZhciByZXN1bHQgPSBlbmRPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIFNlcCAwNyAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5mdW5jdGlvbiBlbmRPZklTT1dlZWsgKGRpcnR5RGF0ZSkge1xuICByZXR1cm4gZW5kT2ZXZWVrKGRpcnR5RGF0ZSwge3dlZWtTdGFydHNPbjogMX0pXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kT2ZJU09XZWVrXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lbmRfb2ZfaXNvX3dlZWsvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgZ2V0SVNPWWVhciA9IHJlcXVpcmUoJy4uL2dldF9pc29feWVhci9pbmRleC5qcycpXG52YXIgc3RhcnRPZklTT1dlZWsgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9pc29fd2Vlay9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IElTTyBXZWVrLU51bWJlcmluZyBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyLFxuICogd2hpY2ggYWx3YXlzIHN0YXJ0cyAzIGRheXMgYmVmb3JlIHRoZSB5ZWFyJ3MgZmlyc3QgVGh1cnNkYXkuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhclxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciAyIEp1bHkgMjAwNTpcbiAqIHZhciByZXN1bHQgPSBlbmRPZklTT1llYXIobmV3IERhdGUoMjAwNSwgNiwgMikpXG4gKiAvLz0+IFN1biBKYW4gMDEgMjAwNiAyMzo1OTo1OS45OTlcbiAqL1xuZnVuY3Rpb24gZW5kT2ZJU09ZZWFyIChkaXJ0eURhdGUpIHtcbiAgdmFyIHllYXIgPSBnZXRJU09ZZWFyKGRpcnR5RGF0ZSlcbiAgdmFyIGZvdXJ0aE9mSmFudWFyeU9mTmV4dFllYXIgPSBuZXcgRGF0ZSgwKVxuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCA0KVxuICBmb3VydGhPZkphbnVhcnlPZk5leHRZZWFyLnNldEhvdXJzKDAsIDAsIDAsIDApXG4gIHZhciBkYXRlID0gc3RhcnRPZklTT1dlZWsoZm91cnRoT2ZKYW51YXJ5T2ZOZXh0WWVhcilcbiAgZGF0ZS5zZXRNaWxsaXNlY29uZHMoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAtIDEpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kT2ZJU09ZZWFyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lbmRfb2ZfaXNvX3llYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IE1pbnV0ZSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGVuZCBvZiBhIG1pbnV0ZSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIG1pbnV0ZSBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGEgbWludXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBlbmQgb2YgYSBtaW51dGUgZm9yIDEgRGVjZW1iZXIgMjAxNCAyMjoxNTo0NS40MDA6XG4gKiB2YXIgcmVzdWx0ID0gZW5kT2ZNaW51dGUobmV3IERhdGUoMjAxNCwgMTEsIDEsIDIyLCAxNSwgNDUsIDQwMCkpXG4gKiAvLz0+IE1vbiBEZWMgMDEgMjAxNCAyMjoxNTo1OS45OTlcbiAqL1xuZnVuY3Rpb24gZW5kT2ZNaW51dGUgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgZGF0ZS5zZXRTZWNvbmRzKDU5LCA5OTkpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kT2ZNaW51dGVcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZF9vZl9taW51dGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFF1YXJ0ZXIgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSB5ZWFyIHF1YXJ0ZXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSB5ZWFyIHF1YXJ0ZXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIHF1YXJ0ZXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIHF1YXJ0ZXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gZW5kT2ZRdWFydGVyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMzAgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZnVuY3Rpb24gZW5kT2ZRdWFydGVyIChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBjdXJyZW50TW9udGggPSBkYXRlLmdldE1vbnRoKClcbiAgdmFyIG1vbnRoID0gY3VycmVudE1vbnRoIC0gY3VycmVudE1vbnRoICUgMyArIDNcbiAgZGF0ZS5zZXRNb250aChtb250aCwgMClcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kT2ZRdWFydGVyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lbmRfb2ZfcXVhcnRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgU2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgc2Vjb25kIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIGEgc2Vjb25kIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgYSBzZWNvbmRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIHNlY29uZCBmb3IgMSBEZWNlbWJlciAyMDE0IDIyOjE1OjQ1LjQwMDpcbiAqIHZhciByZXN1bHQgPSBlbmRPZlNlY29uZChuZXcgRGF0ZSgyMDE0LCAxMSwgMSwgMjIsIDE1LCA0NSwgNDAwKSlcbiAqIC8vPT4gTW9uIERlYyAwMSAyMDE0IDIyOjE1OjQ1Ljk5OVxuICovXG5mdW5jdGlvbiBlbmRPZlNlY29uZCAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICBkYXRlLnNldE1pbGxpc2Vjb25kcyg5OTkpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kT2ZTZWNvbmRcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZF9vZl9zZWNvbmQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgZW5kT2ZEYXkgPSByZXF1aXJlKCcuLi9lbmRfb2ZfZGF5L2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIHRvZGF5LlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgdG9kYXkuXG4gKlxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gZW5kT2ZUb2RheSgpXG4gKiAvLz0+IE1vbiBPY3QgNiAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5mdW5jdGlvbiBlbmRPZlRvZGF5ICgpIHtcbiAgcmV0dXJuIGVuZE9mRGF5KG5ldyBEYXRlKCkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kT2ZUb2RheVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZW5kX29mX3RvZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwiLyoqXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIHRvbW9ycm93LlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgdG9tb3Jyb3cuXG4gKlxuICogQHJldHVybnMge0RhdGV9IHRoZSBlbmQgb2YgdG9tb3Jyb3dcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gZW5kT2ZUb21vcnJvdygpXG4gKiAvLz0+IFR1ZSBPY3QgNyAyMDE0IDIzOjU5OjU5Ljk5OVxuICovXG5mdW5jdGlvbiBlbmRPZlRvbW9ycm93ICgpIHtcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKClcbiAgdmFyIHllYXIgPSBub3cuZ2V0RnVsbFllYXIoKVxuICB2YXIgbW9udGggPSBub3cuZ2V0TW9udGgoKVxuICB2YXIgZGF5ID0gbm93LmdldERhdGUoKVxuXG4gIHZhciBkYXRlID0gbmV3IERhdGUoMClcbiAgZGF0ZS5zZXRGdWxsWWVhcih5ZWFyLCBtb250aCwgZGF5ICsgMSlcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kT2ZUb21vcnJvd1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZW5kX29mX3RvbW9ycm93L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIGEgeWVhciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVuZCBvZiBhIHllYXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGVuZCBvZiBhIHllYXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gZW5kT2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgRGVjIDMxIDIwMTQgMjM6NTk6NTkuOTk5XG4gKi9cbmZ1bmN0aW9uIGVuZE9mWWVhciAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICBkYXRlLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCAwKVxuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSlcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmRPZlllYXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZF9vZl95ZWFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwiLyoqXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgZW5kIG9mIHllc3RlcmRheS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgZW5kIG9mIHllc3RlcmRheS5cbiAqXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiB5ZXN0ZXJkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gZW5kT2ZZZXN0ZXJkYXkoKVxuICogLy89PiBTdW4gT2N0IDUgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZnVuY3Rpb24gZW5kT2ZZZXN0ZXJkYXkgKCkge1xuICB2YXIgbm93ID0gbmV3IERhdGUoKVxuICB2YXIgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpXG4gIHZhciBtb250aCA9IG5vdy5nZXRNb250aCgpXG4gIHZhciBkYXkgPSBub3cuZ2V0RGF0ZSgpXG5cbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKVxuICBkYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXkgLSAxKVxuICBkYXRlLnNldEhvdXJzKDIzLCA1OSwgNTksIDk5OSlcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBlbmRPZlllc3RlcmRheVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZW5kX29mX3llc3RlcmRheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBnZXREYXlPZlllYXIgPSByZXF1aXJlKCcuLi9nZXRfZGF5X29mX3llYXIvaW5kZXguanMnKVxudmFyIGdldElTT1dlZWsgPSByZXF1aXJlKCcuLi9nZXRfaXNvX3dlZWsvaW5kZXguanMnKVxudmFyIGdldElTT1llYXIgPSByZXF1aXJlKCcuLi9nZXRfaXNvX3llYXIvaW5kZXguanMnKVxudmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxudmFyIGlzVmFsaWQgPSByZXF1aXJlKCcuLi9pc192YWxpZC9pbmRleC5qcycpXG52YXIgZW5Mb2NhbGUgPSByZXF1aXJlKCcuLi9sb2NhbGUvZW4vaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgRm9ybWF0IHRoZSBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBmb3JtYXR0ZWQgZGF0ZSBzdHJpbmcgaW4gdGhlIGdpdmVuIGZvcm1hdC5cbiAqXG4gKiBBY2NlcHRlZCB0b2tlbnM6XG4gKiB8IFVuaXQgICAgICAgICAgICAgICAgICAgIHwgVG9rZW4gfCBSZXN1bHQgZXhhbXBsZXMgICAgICAgICAgICAgICAgICB8XG4gKiB8LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18XG4gKiB8IE1vbnRoICAgICAgICAgICAgICAgICAgIHwgTSAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTW8gICAgfCAxc3QsIDJuZCwgLi4uLCAxMnRoICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU0gICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NICAgfCBKYW4sIEZlYiwgLi4uLCBEZWMgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgTU1NTSAgfCBKYW51YXJ5LCBGZWJydWFyeSwgLi4uLCBEZWNlbWJlciB8XG4gKiB8IFF1YXJ0ZXIgICAgICAgICAgICAgICAgIHwgUSAgICAgfCAxLCAyLCAzLCA0ICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgUW8gICAgfCAxc3QsIDJuZCwgM3JkLCA0dGggICAgICAgICAgICAgICB8XG4gKiB8IERheSBvZiBtb250aCAgICAgICAgICAgIHwgRCAgICAgfCAxLCAyLCAuLi4sIDMxICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgRG8gICAgfCAxc3QsIDJuZCwgLi4uLCAzMXN0ICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgREQgICAgfCAwMSwgMDIsIC4uLiwgMzEgICAgICAgICAgICAgICAgICB8XG4gKiB8IERheSBvZiB5ZWFyICAgICAgICAgICAgIHwgREREICAgfCAxLCAyLCAuLi4sIDM2NiAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgREREbyAgfCAxc3QsIDJuZCwgLi4uLCAzNjZ0aCAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgRERERCAgfCAwMDEsIDAwMiwgLi4uLCAzNjYgICAgICAgICAgICAgICB8XG4gKiB8IERheSBvZiB3ZWVrICAgICAgICAgICAgIHwgZCAgICAgfCAwLCAxLCAuLi4sIDYgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgZG8gICAgfCAwdGgsIDFzdCwgLi4uLCA2dGggICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGQgICAgfCBTdSwgTW8sIC4uLiwgU2EgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGRkICAgfCBTdW4sIE1vbiwgLi4uLCBTYXQgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgZGRkZCAgfCBTdW5kYXksIE1vbmRheSwgLi4uLCBTYXR1cmRheSAgICB8XG4gKiB8IERheSBvZiBJU08gd2VlayAgICAgICAgIHwgRSAgICAgfCAxLCAyLCAuLi4sIDcgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IElTTyB3ZWVrICAgICAgICAgICAgICAgIHwgVyAgICAgfCAxLCAyLCAuLi4sIDUzICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgV28gICAgfCAxc3QsIDJuZCwgLi4uLCA1M3JkICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgV1cgICAgfCAwMSwgMDIsIC4uLiwgNTMgICAgICAgICAgICAgICAgICB8XG4gKiB8IFllYXIgICAgICAgICAgICAgICAgICAgIHwgWVkgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgWVlZWSAgfCAxOTAwLCAxOTAxLCAuLi4sIDIwOTkgICAgICAgICAgICB8XG4gKiB8IElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIHwgR0cgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgR0dHRyAgfCAxOTAwLCAxOTAxLCAuLi4sIDIwOTkgICAgICAgICAgICB8XG4gKiB8IEFNL1BNICAgICAgICAgICAgICAgICAgIHwgQSAgICAgfCBBTSwgUE0gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgYSAgICAgfCBhbSwgcG0gICAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgYWEgICAgfCBhLm0uLCBwLm0uICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IEhvdXIgICAgICAgICAgICAgICAgICAgIHwgSCAgICAgfCAwLCAxLCAuLi4gMjMgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgSEggICAgfCAwMCwgMDEsIC4uLiAyMyAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgaCAgICAgfCAxLCAyLCAuLi4sIDEyICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgaGggICAgfCAwMSwgMDIsIC4uLiwgMTIgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbnV0ZSAgICAgICAgICAgICAgICAgIHwgbSAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgbW0gICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICB8XG4gKiB8IFNlY29uZCAgICAgICAgICAgICAgICAgIHwgcyAgICAgfCAwLCAxLCAuLi4sIDU5ICAgICAgICAgICAgICAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgc3MgICAgfCAwMCwgMDEsIC4uLiwgNTkgICAgICAgICAgICAgICAgICB8XG4gKiB8IDEvMTAgb2Ygc2Vjb25kICAgICAgICAgIHwgUyAgICAgfCAwLCAxLCAuLi4sIDkgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IDEvMTAwIG9mIHNlY29uZCAgICAgICAgIHwgU1MgICAgfCAwMCwgMDEsIC4uLiwgOTkgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbGxpc2Vjb25kICAgICAgICAgICAgIHwgU1NTICAgfCAwMDAsIDAwMSwgLi4uLCA5OTkgICAgICAgICAgICAgICB8XG4gKiB8IFRpbWV6b25lICAgICAgICAgICAgICAgIHwgWiAgICAgfCAtMDE6MDAsICswMDowMCwgLi4uICsxMjowMCAgICAgICB8XG4gKiB8ICAgICAgICAgICAgICAgICAgICAgICAgIHwgWlogICAgfCAtMDEwMCwgKzAwMDAsIC4uLiwgKzEyMDAgICAgICAgICB8XG4gKiB8IFNlY29uZHMgdGltZXN0YW1wICAgICAgIHwgWCAgICAgfCA1MTI5Njk1MjAgICAgICAgICAgICAgICAgICAgICAgICB8XG4gKiB8IE1pbGxpc2Vjb25kcyB0aW1lc3RhbXAgIHwgeCAgICAgfCA1MTI5Njk1MjA5MDAgICAgICAgICAgICAgICAgICAgICB8XG4gKlxuICogVGhlIGNoYXJhY3RlcnMgd3JhcHBlZCBpbiBzcXVhcmUgYnJhY2tldHMgYXJlIGVzY2FwZWQuXG4gKlxuICogVGhlIHJlc3VsdCBtYXkgdmFyeSBieSBsb2NhbGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtTdHJpbmd9IFtmb3JtYXQ9J1lZWVktTU0tRERUSEg6bW06c3MuU1NTWiddIC0gdGhlIHN0cmluZyBvZiB0b2tlbnNcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmxvY2FsZT1lbkxvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdFxuICogQHJldHVybnMge1N0cmluZ30gdGhlIGZvcm1hdHRlZCBkYXRlIHN0cmluZ1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMTEgRmVicnVhcnkgMjAxNCBpbiBtaWRkbGUtZW5kaWFuIGZvcm1hdDpcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDEsIDExKSxcbiAqICAgJ01NL0REL1lZWVknXG4gKiApXG4gKiAvLz0+ICcwMi8xMS8yMDE0J1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBSZXByZXNlbnQgMiBKdWx5IDIwMTQgaW4gRXNwZXJhbnRvOlxuICogdmFyIGVvTG9jYWxlID0gcmVxdWlyZSgnZGF0ZS1mbnMvbG9jYWxlL2VvJylcbiAqIHZhciByZXN1bHQgPSBmb3JtYXQoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIpLFxuICogICAnRG8gW2RlXSBNTU1NIFlZWVknLFxuICogICB7bG9jYWxlOiBlb0xvY2FsZX1cbiAqIClcbiAqIC8vPT4gJzItYSBkZSBqdWxpbyAyMDE0J1xuICovXG5mdW5jdGlvbiBmb3JtYXQgKGRpcnR5RGF0ZSwgZGlydHlGb3JtYXRTdHIsIGRpcnR5T3B0aW9ucykge1xuICB2YXIgZm9ybWF0U3RyID0gZGlydHlGb3JtYXRTdHIgPyBTdHJpbmcoZGlydHlGb3JtYXRTdHIpIDogJ1lZWVktTU0tRERUSEg6bW06c3MuU1NTWidcbiAgdmFyIG9wdGlvbnMgPSBkaXJ0eU9wdGlvbnMgfHwge31cblxuICB2YXIgbG9jYWxlID0gb3B0aW9ucy5sb2NhbGVcbiAgdmFyIGxvY2FsZUZvcm1hdHRlcnMgPSBlbkxvY2FsZS5mb3JtYXQuZm9ybWF0dGVyc1xuICB2YXIgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCA9IGVuTG9jYWxlLmZvcm1hdC5mb3JtYXR0aW5nVG9rZW5zUmVnRXhwXG4gIGlmIChsb2NhbGUgJiYgbG9jYWxlLmZvcm1hdCAmJiBsb2NhbGUuZm9ybWF0LmZvcm1hdHRlcnMpIHtcbiAgICBsb2NhbGVGb3JtYXR0ZXJzID0gbG9jYWxlLmZvcm1hdC5mb3JtYXR0ZXJzXG5cbiAgICBpZiAobG9jYWxlLmZvcm1hdC5mb3JtYXR0aW5nVG9rZW5zUmVnRXhwKSB7XG4gICAgICBmb3JtYXR0aW5nVG9rZW5zUmVnRXhwID0gbG9jYWxlLmZvcm1hdC5mb3JtYXR0aW5nVG9rZW5zUmVnRXhwXG4gICAgfVxuICB9XG5cbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG5cbiAgaWYgKCFpc1ZhbGlkKGRhdGUpKSB7XG4gICAgcmV0dXJuICdJbnZhbGlkIERhdGUnXG4gIH1cblxuICB2YXIgZm9ybWF0Rm4gPSBidWlsZEZvcm1hdEZuKGZvcm1hdFN0ciwgbG9jYWxlRm9ybWF0dGVycywgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcblxuICByZXR1cm4gZm9ybWF0Rm4oZGF0ZSlcbn1cblxudmFyIGZvcm1hdHRlcnMgPSB7XG4gIC8vIE1vbnRoOiAxLCAyLCAuLi4sIDEyXG4gICdNJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZS5nZXRNb250aCgpICsgMVxuICB9LFxuXG4gIC8vIE1vbnRoOiAwMSwgMDIsIC4uLiwgMTJcbiAgJ01NJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0TW9udGgoKSArIDEsIDIpXG4gIH0sXG5cbiAgLy8gUXVhcnRlcjogMSwgMiwgMywgNFxuICAnUSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbCgoZGF0ZS5nZXRNb250aCgpICsgMSkgLyAzKVxuICB9LFxuXG4gIC8vIERheSBvZiBtb250aDogMSwgMiwgLi4uLCAzMVxuICAnRCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIG1vbnRoOiAwMSwgMDIsIC4uLiwgMzFcbiAgJ0REJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0RGF0ZSgpLCAyKVxuICB9LFxuXG4gIC8vIERheSBvZiB5ZWFyOiAxLCAyLCAuLi4sIDM2NlxuICAnREREJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0RGF5T2ZZZWFyKGRhdGUpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHllYXI6IDAwMSwgMDAyLCAuLi4sIDM2NlxuICAnRERERCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhnZXREYXlPZlllYXIoZGF0ZSksIDMpXG4gIH0sXG5cbiAgLy8gRGF5IG9mIHdlZWs6IDAsIDEsIC4uLiwgNlxuICAnZCc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF5KClcbiAgfSxcblxuICAvLyBEYXkgb2YgSVNPIHdlZWs6IDEsIDIsIC4uLiwgN1xuICAnRSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0RGF5KCkgfHwgN1xuICB9LFxuXG4gIC8vIElTTyB3ZWVrOiAxLCAyLCAuLi4sIDUzXG4gICdXJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZ2V0SVNPV2VlayhkYXRlKVxuICB9LFxuXG4gIC8vIElTTyB3ZWVrOiAwMSwgMDIsIC4uLiwgNTNcbiAgJ1dXJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGdldElTT1dlZWsoZGF0ZSksIDIpXG4gIH0sXG5cbiAgLy8gWWVhcjogMDAsIDAxLCAuLi4sIDk5XG4gICdZWSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEZ1bGxZZWFyKCksIDQpLnN1YnN0cigyKVxuICB9LFxuXG4gIC8vIFllYXI6IDE5MDAsIDE5MDEsIC4uLiwgMjA5OVxuICAnWVlZWSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGFkZExlYWRpbmdaZXJvcyhkYXRlLmdldEZ1bGxZZWFyKCksIDQpXG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IDAwLCAwMSwgLi4uLCA5OVxuICAnR0cnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBTdHJpbmcoZ2V0SVNPWWVhcihkYXRlKSkuc3Vic3RyKDIpXG4gIH0sXG5cbiAgLy8gSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IDE5MDAsIDE5MDEsIC4uLiwgMjA5OVxuICAnR0dHRyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGdldElTT1llYXIoZGF0ZSlcbiAgfSxcblxuICAvLyBIb3VyOiAwLCAxLCAuLi4gMjNcbiAgJ0gnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldEhvdXJzKClcbiAgfSxcblxuICAvLyBIb3VyOiAwMCwgMDEsIC4uLiwgMjNcbiAgJ0hIJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0SG91cnMoKSwgMilcbiAgfSxcblxuICAvLyBIb3VyOiAxLCAyLCAuLi4sIDEyXG4gICdoJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICB2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKClcbiAgICBpZiAoaG91cnMgPT09IDApIHtcbiAgICAgIHJldHVybiAxMlxuICAgIH0gZWxzZSBpZiAoaG91cnMgPiAxMikge1xuICAgICAgcmV0dXJuIGhvdXJzICUgMTJcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGhvdXJzXG4gICAgfVxuICB9LFxuXG4gIC8vIEhvdXI6IDAxLCAwMiwgLi4uLCAxMlxuICAnaGgnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZm9ybWF0dGVyc1snaCddKGRhdGUpLCAyKVxuICB9LFxuXG4gIC8vIE1pbnV0ZTogMCwgMSwgLi4uLCA1OVxuICAnbSc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0TWludXRlcygpXG4gIH0sXG5cbiAgLy8gTWludXRlOiAwMCwgMDEsIC4uLiwgNTlcbiAgJ21tJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0TWludXRlcygpLCAyKVxuICB9LFxuXG4gIC8vIFNlY29uZDogMCwgMSwgLi4uLCA1OVxuICAncyc6IGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUuZ2V0U2Vjb25kcygpXG4gIH0sXG5cbiAgLy8gU2Vjb25kOiAwMCwgMDEsIC4uLiwgNTlcbiAgJ3NzJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKGRhdGUuZ2V0U2Vjb25kcygpLCAyKVxuICB9LFxuXG4gIC8vIDEvMTAgb2Ygc2Vjb25kOiAwLCAxLCAuLi4sIDlcbiAgJ1MnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGRhdGUuZ2V0TWlsbGlzZWNvbmRzKCkgLyAxMDApXG4gIH0sXG5cbiAgLy8gMS8xMDAgb2Ygc2Vjb25kOiAwMCwgMDEsIC4uLiwgOTlcbiAgJ1NTJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gYWRkTGVhZGluZ1plcm9zKE1hdGguZmxvb3IoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSAvIDEwKSwgMilcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZDogMDAwLCAwMDEsIC4uLiwgOTk5XG4gICdTU1MnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBhZGRMZWFkaW5nWmVyb3MoZGF0ZS5nZXRNaWxsaXNlY29uZHMoKSwgMylcbiAgfSxcblxuICAvLyBUaW1lem9uZTogLTAxOjAwLCArMDA6MDAsIC4uLiArMTI6MDBcbiAgJ1onOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBmb3JtYXRUaW1lem9uZShkYXRlLmdldFRpbWV6b25lT2Zmc2V0KCksICc6JylcbiAgfSxcblxuICAvLyBUaW1lem9uZTogLTAxMDAsICswMDAwLCAuLi4gKzEyMDBcbiAgJ1paJzogZnVuY3Rpb24gKGRhdGUpIHtcbiAgICByZXR1cm4gZm9ybWF0VGltZXpvbmUoZGF0ZS5nZXRUaW1lem9uZU9mZnNldCgpKVxuICB9LFxuXG4gIC8vIFNlY29uZHMgdGltZXN0YW1wOiA1MTI5Njk1MjBcbiAgJ1gnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGRhdGUuZ2V0VGltZSgpIC8gMTAwMClcbiAgfSxcblxuICAvLyBNaWxsaXNlY29uZHMgdGltZXN0YW1wOiA1MTI5Njk1MjA5MDBcbiAgJ3gnOiBmdW5jdGlvbiAoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlLmdldFRpbWUoKVxuICB9XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRm9ybWF0Rm4gKGZvcm1hdFN0ciwgbG9jYWxlRm9ybWF0dGVycywgZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cCkge1xuICB2YXIgYXJyYXkgPSBmb3JtYXRTdHIubWF0Y2goZm9ybWF0dGluZ1Rva2Vuc1JlZ0V4cClcbiAgdmFyIGxlbmd0aCA9IGFycmF5Lmxlbmd0aFxuXG4gIHZhciBpXG4gIHZhciBmb3JtYXR0ZXJcbiAgZm9yIChpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgZm9ybWF0dGVyID0gbG9jYWxlRm9ybWF0dGVyc1thcnJheVtpXV0gfHwgZm9ybWF0dGVyc1thcnJheVtpXV1cbiAgICBpZiAoZm9ybWF0dGVyKSB7XG4gICAgICBhcnJheVtpXSA9IGZvcm1hdHRlclxuICAgIH0gZWxzZSB7XG4gICAgICBhcnJheVtpXSA9IHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMoYXJyYXlbaV0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChkYXRlKSB7XG4gICAgdmFyIG91dHB1dCA9ICcnXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgaWYgKGFycmF5W2ldIGluc3RhbmNlb2YgRnVuY3Rpb24pIHtcbiAgICAgICAgb3V0cHV0ICs9IGFycmF5W2ldKGRhdGUsIGZvcm1hdHRlcnMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXRwdXQgKz0gYXJyYXlbaV1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG91dHB1dFxuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZvcm1hdHRpbmdUb2tlbnMgKGlucHV0KSB7XG4gIGlmIChpbnB1dC5tYXRjaCgvXFxbW1xcc1xcU10vKSkge1xuICAgIHJldHVybiBpbnB1dC5yZXBsYWNlKC9eXFxbfF0kL2csICcnKVxuICB9XG4gIHJldHVybiBpbnB1dC5yZXBsYWNlKC9cXFxcL2csICcnKVxufVxuXG5mdW5jdGlvbiBmb3JtYXRUaW1lem9uZSAob2Zmc2V0LCBkZWxpbWV0ZXIpIHtcbiAgZGVsaW1ldGVyID0gZGVsaW1ldGVyIHx8ICcnXG4gIHZhciBzaWduID0gb2Zmc2V0ID4gMCA/ICctJyA6ICcrJ1xuICB2YXIgYWJzT2Zmc2V0ID0gTWF0aC5hYnMob2Zmc2V0KVxuICB2YXIgaG91cnMgPSBNYXRoLmZsb29yKGFic09mZnNldCAvIDYwKVxuICB2YXIgbWludXRlcyA9IGFic09mZnNldCAlIDYwXG4gIHJldHVybiBzaWduICsgYWRkTGVhZGluZ1plcm9zKGhvdXJzLCAyKSArIGRlbGltZXRlciArIGFkZExlYWRpbmdaZXJvcyhtaW51dGVzLCAyKVxufVxuXG5mdW5jdGlvbiBhZGRMZWFkaW5nWmVyb3MgKG51bWJlciwgdGFyZ2V0TGVuZ3RoKSB7XG4gIHZhciBvdXRwdXQgPSBNYXRoLmFicyhudW1iZXIpLnRvU3RyaW5nKClcbiAgd2hpbGUgKG91dHB1dC5sZW5ndGggPCB0YXJnZXRMZW5ndGgpIHtcbiAgICBvdXRwdXQgPSAnMCcgKyBvdXRwdXRcbiAgfVxuICByZXR1cm4gb3V0cHV0XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZm9ybWF0XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9mb3JtYXQvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIGRheSBvZiB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIGRheSBvZiBtb250aFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBkYXkgb2YgdGhlIG1vbnRoIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiB2YXIgcmVzdWx0ID0gZ2V0RGF0ZShuZXcgRGF0ZSgyMDEyLCAxLCAyOSkpXG4gKiAvLz0+IDI5XG4gKi9cbmZ1bmN0aW9uIGdldERhdGUgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIGRheU9mTW9udGggPSBkYXRlLmdldERhdGUoKVxuICByZXR1cm4gZGF5T2ZNb250aFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldERhdGVcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldF9kYXRlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIGRheSBvZiB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIGRheSBvZiB0aGUgd2VlayBpcyAyOSBGZWJydWFyeSAyMDEyP1xuICogdmFyIHJlc3VsdCA9IGdldERheShuZXcgRGF0ZSgyMDEyLCAxLCAyOSkpXG4gKiAvLz0+IDNcbiAqL1xuZnVuY3Rpb24gZ2V0RGF5IChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpXG4gIHJldHVybiBkYXlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXREYXlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldF9kYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgaXNMZWFwWWVhciA9IHJlcXVpcmUoJy4uL2lzX2xlYXBfeWVhci9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZGF5cyBpbiBhIHllYXIgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIGRheXMgaW4gYSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEhvdyBtYW55IGRheXMgYXJlIGluIDIwMTI/XG4gKiB2YXIgcmVzdWx0ID0gZ2V0RGF5c0luWWVhcihuZXcgRGF0ZSgyMDEyLCAwLCAxKSlcbiAqIC8vPT4gMzY2XG4gKi9cbmZ1bmN0aW9uIGdldERheXNJblllYXIgKGRpcnR5RGF0ZSkge1xuICByZXR1cm4gaXNMZWFwWWVhcihkaXJ0eURhdGUpID8gMzY2IDogMzY1XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0RGF5c0luWWVhclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X2RheXNfaW5feWVhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgSG91ciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIGhvdXJzIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBob3VycyBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgaG91cnNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gR2V0IHRoZSBob3VycyBvZiAyOSBGZWJydWFyeSAyMDEyIDExOjQ1OjAwOlxuICogdmFyIHJlc3VsdCA9IGdldEhvdXJzKG5ldyBEYXRlKDIwMTIsIDEsIDI5LCAxMSwgNDUpKVxuICogLy89PiAxMVxuICovXG5mdW5jdGlvbiBnZXRIb3VycyAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgaG91cnMgPSBkYXRlLmdldEhvdXJzKClcbiAgcmV0dXJuIGhvdXJzXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0SG91cnNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2dldF9ob3Vycy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBzdGFydE9mSVNPWWVhciA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX2lzb195ZWFyL2luZGV4LmpzJylcbnZhciBhZGRXZWVrcyA9IHJlcXVpcmUoJy4uL2FkZF93ZWVrcy9pbmRleC5qcycpXG5cbnZhciBNSUxMSVNFQ09ORFNfSU5fV0VFSyA9IDYwNDgwMDAwMFxuXG4vKipcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiB3ZWVrcyBpbiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHdlZWtzIGluIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIElTTyB3ZWVrcyBpbiBhIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgd2Vla3MgYXJlIGluIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIDIwMTU/XG4gKiB2YXIgcmVzdWx0ID0gZ2V0SVNPV2Vla3NJblllYXIobmV3IERhdGUoMjAxNSwgMSwgMTEpKVxuICogLy89PiA1M1xuICovXG5mdW5jdGlvbiBnZXRJU09XZWVrc0luWWVhciAoZGlydHlEYXRlKSB7XG4gIHZhciB0aGlzWWVhciA9IHN0YXJ0T2ZJU09ZZWFyKGRpcnR5RGF0ZSlcbiAgdmFyIG5leHRZZWFyID0gc3RhcnRPZklTT1llYXIoYWRkV2Vla3ModGhpc1llYXIsIDYwKSlcbiAgdmFyIGRpZmYgPSBuZXh0WWVhci52YWx1ZU9mKCkgLSB0aGlzWWVhci52YWx1ZU9mKClcbiAgLy8gUm91bmQgdGhlIG51bWJlciBvZiB3ZWVrcyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRJU09XZWVrc0luWWVhclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X2lzb193ZWVrc19pbl95ZWFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMjZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG1pbGxpc2Vjb25kcyBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbWlsbGlzZWNvbmRzIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBtaWxsaXNlY29uZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gR2V0IHRoZSBtaWxsaXNlY29uZHMgb2YgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowNS4xMjM6XG4gKiB2YXIgcmVzdWx0ID0gZ2V0TWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTIsIDEsIDI5LCAxMSwgNDUsIDUsIDEyMykpXG4gKiAvLz0+IDEyM1xuICovXG5mdW5jdGlvbiBnZXRNaWxsaXNlY29uZHMgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIG1pbGxpc2Vjb25kcyA9IGRhdGUuZ2V0TWlsbGlzZWNvbmRzKClcbiAgcmV0dXJuIG1pbGxpc2Vjb25kc1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE1pbGxpc2Vjb25kc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X21pbGxpc2Vjb25kcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbWludXRlcyBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbWludXRlcyBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbWludXRlc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBHZXQgdGhlIG1pbnV0ZXMgb2YgMjkgRmVicnVhcnkgMjAxMiAxMTo0NTowNTpcbiAqIHZhciByZXN1bHQgPSBnZXRNaW51dGVzKG5ldyBEYXRlKDIwMTIsIDEsIDI5LCAxMSwgNDUsIDUpKVxuICogLy89PiA0NVxuICovXG5mdW5jdGlvbiBnZXRNaW51dGVzIChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBtaW51dGVzID0gZGF0ZS5nZXRNaW51dGVzKClcbiAgcmV0dXJuIG1pbnV0ZXNcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNaW51dGVzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRfbWludXRlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBtb250aCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG1vbnRoXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIG1vbnRoIGlzIDI5IEZlYnJ1YXJ5IDIwMTI/XG4gKiB2YXIgcmVzdWx0ID0gZ2V0TW9udGgobmV3IERhdGUoMjAxMiwgMSwgMjkpKVxuICogLy89PiAxXG4gKi9cbmZ1bmN0aW9uIGdldE1vbnRoIChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKVxuICByZXR1cm4gbW9udGhcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRNb250aFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X21vbnRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIGEgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogdmFyIHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZldlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSwge3dlZWtTdGFydHNPbjogMX0pXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdGFydE9mV2VlayAoZGlydHlEYXRlLCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IGRpcnR5T3B0aW9ucyA/IChOdW1iZXIoZGlydHlPcHRpb25zLndlZWtTdGFydHNPbikgfHwgMCkgOiAwXG5cbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpXG4gIHZhciBkaWZmID0gKGRheSA8IHdlZWtTdGFydHNPbiA/IDcgOiAwKSArIGRheSAtIHdlZWtTdGFydHNPblxuXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydE9mV2Vla1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRfb2Zfd2Vlay9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDI0ICogNjAgKiA2MCAqIDEwMDBcblxuLyoqXG4gKiBAY2F0ZWdvcnkgUmFuZ2UgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZGF5cyB0aGF0IG92ZXJsYXAgaW4gdHdvIGRhdGUgcmFuZ2VzXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBkYXlzIHRoYXQgb3ZlcmxhcCBpbiB0d28gZGF0ZSByYW5nZXNcbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gaW5pdGlhbFJhbmdlU3RhcnREYXRlIC0gdGhlIHN0YXJ0IG9mIHRoZSBpbml0aWFsIHJhbmdlXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gaW5pdGlhbFJhbmdlRW5kRGF0ZSAtIHRoZSBlbmQgb2YgdGhlIGluaXRpYWwgcmFuZ2VcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBjb21wYXJlZFJhbmdlU3RhcnREYXRlIC0gdGhlIHN0YXJ0IG9mIHRoZSByYW5nZSB0byBjb21wYXJlIGl0IHdpdGhcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBjb21wYXJlZFJhbmdlRW5kRGF0ZSAtIHRoZSBlbmQgb2YgdGhlIHJhbmdlIHRvIGNvbXBhcmUgaXQgd2l0aFxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBkYXlzIHRoYXQgb3ZlcmxhcCBpbiB0d28gZGF0ZSByYW5nZXNcbiAqIEB0aHJvd3Mge0Vycm9yfSBzdGFydERhdGUgb2YgYSBkYXRlIHJhbmdlIGNhbm5vdCBiZSBhZnRlciBpdHMgZW5kRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3Igb3ZlcmxhcHBpbmcgZGF0ZSByYW5nZXMgYWRkcyAxIGZvciBlYWNoIHN0YXJ0ZWQgb3ZlcmxhcHBpbmcgZGF5OlxuICogZ2V0T3ZlcmxhcHBpbmdEYXlzSW5SYW5nZXMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwgbmV3IERhdGUoMjAxNCwgMCwgMjApLCBuZXcgRGF0ZSgyMDE0LCAwLCAxNyksIG5ldyBEYXRlKDIwMTQsIDAsIDIxKVxuICogKVxuICogLy89PiAzXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEZvciBub24tb3ZlcmxhcHBpbmcgZGF0ZSByYW5nZXMgcmV0dXJucyAwOlxuICogZ2V0T3ZlcmxhcHBpbmdEYXlzSW5SYW5nZXMoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDEwKSwgbmV3IERhdGUoMjAxNCwgMCwgMjApLCBuZXcgRGF0ZSgyMDE0LCAwLCAyMSksIG5ldyBEYXRlKDIwMTQsIDAsIDIyKVxuICogKVxuICogLy89PiAwXG4gKi9cbmZ1bmN0aW9uIGdldE92ZXJsYXBwaW5nRGF5c0luUmFuZ2VzIChkaXJ0eUluaXRpYWxSYW5nZVN0YXJ0RGF0ZSwgZGlydHlJbml0aWFsUmFuZ2VFbmREYXRlLCBkaXJ0eUNvbXBhcmVkUmFuZ2VTdGFydERhdGUsIGRpcnR5Q29tcGFyZWRSYW5nZUVuZERhdGUpIHtcbiAgdmFyIGluaXRpYWxTdGFydFRpbWUgPSBwYXJzZShkaXJ0eUluaXRpYWxSYW5nZVN0YXJ0RGF0ZSkuZ2V0VGltZSgpXG4gIHZhciBpbml0aWFsRW5kVGltZSA9IHBhcnNlKGRpcnR5SW5pdGlhbFJhbmdlRW5kRGF0ZSkuZ2V0VGltZSgpXG4gIHZhciBjb21wYXJlZFN0YXJ0VGltZSA9IHBhcnNlKGRpcnR5Q29tcGFyZWRSYW5nZVN0YXJ0RGF0ZSkuZ2V0VGltZSgpXG4gIHZhciBjb21wYXJlZEVuZFRpbWUgPSBwYXJzZShkaXJ0eUNvbXBhcmVkUmFuZ2VFbmREYXRlKS5nZXRUaW1lKClcblxuICBpZiAoaW5pdGlhbFN0YXJ0VGltZSA+IGluaXRpYWxFbmRUaW1lIHx8IGNvbXBhcmVkU3RhcnRUaW1lID4gY29tcGFyZWRFbmRUaW1lKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgc3RhcnQgb2YgdGhlIHJhbmdlIGNhbm5vdCBiZSBhZnRlciB0aGUgZW5kIG9mIHRoZSByYW5nZScpXG4gIH1cblxuICB2YXIgaXNPdmVybGFwcGluZyA9IGluaXRpYWxTdGFydFRpbWUgPCBjb21wYXJlZEVuZFRpbWUgJiYgY29tcGFyZWRTdGFydFRpbWUgPCBpbml0aWFsRW5kVGltZVxuXG4gIGlmICghaXNPdmVybGFwcGluZykge1xuICAgIHJldHVybiAwXG4gIH1cblxuICB2YXIgb3ZlcmxhcFN0YXJ0RGF0ZSA9IGNvbXBhcmVkU3RhcnRUaW1lIDwgaW5pdGlhbFN0YXJ0VGltZVxuICAgID8gaW5pdGlhbFN0YXJ0VGltZVxuICAgIDogY29tcGFyZWRTdGFydFRpbWVcblxuICB2YXIgb3ZlcmxhcEVuZERhdGUgPSBjb21wYXJlZEVuZFRpbWUgPiBpbml0aWFsRW5kVGltZVxuICAgID8gaW5pdGlhbEVuZFRpbWVcbiAgICA6IGNvbXBhcmVkRW5kVGltZVxuXG4gIHZhciBkaWZmZXJlbmNlSW5NcyA9IG92ZXJsYXBFbmREYXRlIC0gb3ZlcmxhcFN0YXJ0RGF0ZVxuXG4gIHJldHVybiBNYXRoLmNlaWwoZGlmZmVyZW5jZUluTXMgLyBNSUxMSVNFQ09ORFNfSU5fREFZKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGdldE92ZXJsYXBwaW5nRGF5c0luUmFuZ2VzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRfb3ZlcmxhcHBpbmdfZGF5c19pbl9yYW5nZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIHNlY29uZHMgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIHNlY29uZHMgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHNlY29uZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gR2V0IHRoZSBzZWNvbmRzIG9mIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDUuMTIzOlxuICogdmFyIHJlc3VsdCA9IGdldFNlY29uZHMobmV3IERhdGUoMjAxMiwgMSwgMjksIDExLCA0NSwgNSwgMTIzKSlcbiAqIC8vPT4gNVxuICovXG5mdW5jdGlvbiBnZXRTZWNvbmRzIChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBzZWNvbmRzID0gZGF0ZS5nZXRTZWNvbmRzKClcbiAgcmV0dXJuIHNlY29uZHNcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRTZWNvbmRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9nZXRfc2Vjb25kcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgVGltZXN0YW1wIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgbWlsbGlzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbWlsbGlzZWNvbmRzIHRpbWVzdGFtcCBvZiB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgdGltZXN0YW1wXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEdldCB0aGUgdGltZXN0YW1wIG9mIDI5IEZlYnJ1YXJ5IDIwMTIgMTE6NDU6MDUuMTIzOlxuICogdmFyIHJlc3VsdCA9IGdldFRpbWUobmV3IERhdGUoMjAxMiwgMSwgMjksIDExLCA0NSwgNSwgMTIzKSlcbiAqIC8vPT4gMTMzMDUxNTkwNTEyM1xuICovXG5mdW5jdGlvbiBnZXRUaW1lIChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUoKVxuICByZXR1cm4gdGltZXN0YW1wXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0VGltZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X3RpbWUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSB5ZWFyIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGdpdmVuIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFdoaWNoIHllYXIgaXMgMiBKdWx5IDIwMTQ/XG4gKiB2YXIgcmVzdWx0ID0gZ2V0WWVhcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gMjAxNFxuICovXG5mdW5jdGlvbiBnZXRZZWFyIChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciB5ZWFyID0gZGF0ZS5nZXRGdWxsWWVhcigpXG4gIHJldHVybiB5ZWFyXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0WWVhclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X3llYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMzM1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBhZnRlciB0aGUgc2Vjb25kIG9uZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBmaXJzdCBkYXRlIGFmdGVyIHRoZSBzZWNvbmQgb25lP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdGhhdCBzaG91bGQgYmUgYWZ0ZXIgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kIGRhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgMTAgSnVseSAxOTg5IGFmdGVyIDExIEZlYnJ1YXJ5IDE5ODc/XG4gKiB2YXIgcmVzdWx0ID0gaXNBZnRlcihuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc0FmdGVyIChkaXJ0eURhdGUsIGRpcnR5RGF0ZVRvQ29tcGFyZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIGRhdGVUb0NvbXBhcmUgPSBwYXJzZShkaXJ0eURhdGVUb0NvbXBhcmUpXG4gIHJldHVybiBkYXRlLmdldFRpbWUoKSA+IGRhdGVUb0NvbXBhcmUuZ2V0VGltZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNBZnRlclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfYWZ0ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZmlyc3QgZGF0ZSBiZWZvcmUgdGhlIHNlY29uZCBvbmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0aGF0IHNob3VsZCBiZSBiZWZvcmUgdGhlIG90aGVyIG9uZSB0byByZXR1cm4gdHJ1ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVUb0NvbXBhcmUgLSB0aGUgZGF0ZSB0byBjb21wYXJlIHdpdGhcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZmlyc3QgZGF0ZSBpcyBiZWZvcmUgdGhlIHNlY29uZCBkYXRlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEwIEp1bHkgMTk4OSBiZWZvcmUgMTEgRmVicnVhcnkgMTk4Nz9cbiAqIHZhciByZXN1bHQgPSBpc0JlZm9yZShuZXcgRGF0ZSgxOTg5LCA2LCAxMCksIG5ldyBEYXRlKDE5ODcsIDEsIDExKSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNCZWZvcmUgKGRpcnR5RGF0ZSwgZGlydHlEYXRlVG9Db21wYXJlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF0ZVRvQ29tcGFyZSA9IHBhcnNlKGRpcnR5RGF0ZVRvQ29tcGFyZSlcbiAgcmV0dXJuIGRhdGUuZ2V0VGltZSgpIDwgZGF0ZVRvQ29tcGFyZS5nZXRUaW1lKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0JlZm9yZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfYmVmb3JlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMzVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBlcXVhbD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgZXF1YWw/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGVzIGFyZSBlcXVhbFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMiBKdWx5IDIwMTQgMDY6MzA6NDUuMDAwIGFuZCAyIEp1bHkgMjAxNCAwNjozMDo0NS41MDAgZXF1YWw/XG4gKiB2YXIgcmVzdWx0ID0gaXNFcXVhbChcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgNiwgMzAsIDQ1LCAwKVxuICogICBuZXcgRGF0ZSgyMDE0LCA2LCAyLCA2LCAzMCwgNDUsIDUwMClcbiAqIClcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZnVuY3Rpb24gaXNFcXVhbCAoZGlydHlMZWZ0RGF0ZSwgZGlydHlSaWdodERhdGUpIHtcbiAgdmFyIGRhdGVMZWZ0ID0gcGFyc2UoZGlydHlMZWZ0RGF0ZSlcbiAgdmFyIGRhdGVSaWdodCA9IHBhcnNlKGRpcnR5UmlnaHREYXRlKVxuICByZXR1cm4gZGF0ZUxlZnQuZ2V0VGltZSgpID09PSBkYXRlUmlnaHQuZ2V0VGltZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNFcXVhbFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfZXF1YWwvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDMzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRoZSBmaXJzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRoZSBmaXJzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdGhlIGZpcnN0IGRheSBvZiBhIG1vbnRoXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDEgU2VwdGVtYmVyIDIwMTQgdGhlIGZpcnN0IGRheSBvZiBhIG1vbnRoP1xuICogdmFyIHJlc3VsdCA9IGlzRmlyc3REYXlPZk1vbnRoKG5ldyBEYXRlKDIwMTQsIDgsIDEpKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzRmlyc3REYXlPZk1vbnRoIChkaXJ0eURhdGUpIHtcbiAgcmV0dXJuIHBhcnNlKGRpcnR5RGF0ZSkuZ2V0RGF0ZSgpID09PSAxXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNGaXJzdERheU9mTW9udGhcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX2ZpcnN0X2RheV9vZl9tb250aC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBGcmlkYXk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBGcmlkYXk/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIEZyaWRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyNiBTZXB0ZW1iZXIgMjAxNCBGcmlkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNGcmlkYXkobmV3IERhdGUoMjAxNCwgOCwgMjYpKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzRnJpZGF5IChkaXJ0eURhdGUpIHtcbiAgcmV0dXJuIHBhcnNlKGRpcnR5RGF0ZSkuZ2V0RGF5KCkgPT09IDVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0ZyaWRheVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfZnJpZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIGZ1dHVyZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBmdXR1cmU/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoZSBmdXR1cmVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDMxIERlY2VtYmVyIDIwMTQgaW4gdGhlIGZ1dHVyZT9cbiAqIHZhciByZXN1bHQgPSBpc0Z1dHVyZShuZXcgRGF0ZSgyMDE0LCAxMSwgMzEpKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzRnV0dXJlIChkaXJ0eURhdGUpIHtcbiAgcmV0dXJuIHBhcnNlKGRpcnR5RGF0ZSkuZ2V0VGltZSgpID4gbmV3IERhdGUoKS5nZXRUaW1lKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0Z1dHVyZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfZnV0dXJlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHN0YXJ0T2ZEYXkgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9kYXkvaW5kZXguanMnKVxuXG52YXIgTUlMTElTRUNPTkRTX0lOX01JTlVURSA9IDYwMDAwXG52YXIgTUlMTElTRUNPTkRTX0lOX0RBWSA9IDg2NDAwMDAwXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBjYWxlbmRhciBkYXlzIGJldHdlZW4gdGhlIGdpdmVuIGRhdGVzLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogR2V0IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5cyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgY2FsZW5kYXIgZGF5c1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBjYWxlbmRhciBkYXlzIGFyZSBiZXR3ZWVuXG4gKiAvLyAyIEp1bHkgMjAxMSAyMzowMDowMCBhbmQgMiBKdWx5IDIwMTIgMDA6MDA6MDA/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzKFxuICogICBuZXcgRGF0ZSgyMDEyLCA2LCAyLCAwLCAwKSxcbiAqICAgbmV3IERhdGUoMjAxMSwgNiwgMiwgMjMsIDApXG4gKiApXG4gKiAvLz0+IDM2NlxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBzdGFydE9mRGF5TGVmdCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlTGVmdClcbiAgdmFyIHN0YXJ0T2ZEYXlSaWdodCA9IHN0YXJ0T2ZEYXkoZGlydHlEYXRlUmlnaHQpXG5cbiAgdmFyIHRpbWVzdGFtcExlZnQgPSBzdGFydE9mRGF5TGVmdC5nZXRUaW1lKCkgLVxuICAgIHN0YXJ0T2ZEYXlMZWZ0LmdldFRpbWV6b25lT2Zmc2V0KCkgKiBNSUxMSVNFQ09ORFNfSU5fTUlOVVRFXG4gIHZhciB0aW1lc3RhbXBSaWdodCA9IHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lKCkgLVxuICAgIHN0YXJ0T2ZEYXlSaWdodC5nZXRUaW1lem9uZU9mZnNldCgpICogTUlMTElTRUNPTkRTX0lOX01JTlVURVxuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSBkYXkgaXMgbm90IGNvbnN0YW50XG4gIC8vIChlLmcuIGl0J3MgZGlmZmVyZW50IGluIHRoZSBkYXkgb2YgdGhlIGRheWxpZ2h0IHNhdmluZyB0aW1lIGNsb2NrIHNoaWZ0KVxuICByZXR1cm4gTWF0aC5yb3VuZCgodGltZXN0YW1wTGVmdCAtIHRpbWVzdGFtcFJpZ2h0KSAvIE1JTExJU0VDT05EU19JTl9EQVkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZGlmZmVyZW5jZUluQ2FsZW5kYXJEYXlzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX2RheXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcbnZhciBlbmRPZkRheSA9IHJlcXVpcmUoJy4uL2VuZF9vZl9kYXkvaW5kZXguanMnKVxudmFyIGVuZE9mTW9udGggPSByZXF1aXJlKCcuLi9lbmRfb2ZfbW9udGgvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0aGUgbGFzdCBkYXkgb2YgYSBtb250aD9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0aGUgbGFzdCBkYXkgb2YgYSBtb250aFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyOCBGZWJydWFyeSAyMDE0IHRoZSBsYXN0IGRheSBvZiBhIG1vbnRoP1xuICogdmFyIHJlc3VsdCA9IGlzTGFzdERheU9mTW9udGgobmV3IERhdGUoMjAxNCwgMSwgMjgpKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzTGFzdERheU9mTW9udGggKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgcmV0dXJuIGVuZE9mRGF5KGRhdGUpLmdldFRpbWUoKSA9PT0gZW5kT2ZNb250aChkYXRlKS5nZXRUaW1lKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0xhc3REYXlPZk1vbnRoXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19sYXN0X2RheV9vZl9tb250aC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBNb25kYXk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBNb25kYXk/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIE1vbmRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyMiBTZXB0ZW1iZXIgMjAxNCBNb25kYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNNb25kYXkobmV3IERhdGUoMjAxNCwgOCwgMjIpKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzTW9uZGF5IChkaXJ0eURhdGUpIHtcbiAgcmV0dXJuIHBhcnNlKGRpcnR5RGF0ZSkuZ2V0RGF5KCkgPT09IDFcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc01vbmRheVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfbW9uZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNDFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHBhc3Q/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgcGFzdD9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhlIHBhc3RcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoZSBwYXN0P1xuICogdmFyIHJlc3VsdCA9IGlzUGFzdChuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1Bhc3QgKGRpcnR5RGF0ZSkge1xuICByZXR1cm4gcGFyc2UoZGlydHlEYXRlKS5nZXRUaW1lKCkgPCBuZXcgRGF0ZSgpLmdldFRpbWUoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzUGFzdFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfcGFzdC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzQyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBzdGFydE9mRGF5ID0gcmVxdWlyZSgnLi4vc3RhcnRfb2ZfZGF5L2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgZGF5P1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXk/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVEYXkoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDQsIDYsIDApLFxuICogICBuZXcgRGF0ZSgyMDE0LCA4LCA0LCAxOCwgMClcbiAqIClcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1NhbWVEYXkgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZUxlZnQpXG4gIHZhciBkYXRlUmlnaHRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVSaWdodClcblxuICByZXR1cm4gZGF0ZUxlZnRTdGFydE9mRGF5LmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZkRheS5nZXRUaW1lKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1NhbWVEYXlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3NhbWVfZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIFNhdHVyZGF5P1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgU2F0dXJkYXk/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIFNhdHVyZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI3IFNlcHRlbWJlciAyMDE0IFNhdHVyZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzU2F0dXJkYXkobmV3IERhdGUoMjAxNCwgOCwgMjcpKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzU2F0dXJkYXkgKGRpcnR5RGF0ZSkge1xuICByZXR1cm4gcGFyc2UoZGlydHlEYXRlKS5nZXREYXkoKSA9PT0gNlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU2F0dXJkYXlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3NhdHVyZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIFN1bmRheT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIFN1bmRheT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgU3VuZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDIxIFNlcHRlbWJlciAyMDE0IFN1bmRheT9cbiAqIHZhciByZXN1bHQgPSBpc1N1bmRheShuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNTdW5kYXkgKGRpcnR5RGF0ZSkge1xuICByZXR1cm4gcGFyc2UoZGlydHlEYXRlKS5nZXREYXkoKSA9PT0gMFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzU3VuZGF5XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc19zdW5kYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgaXNTYW1lSG91ciA9IHJlcXVpcmUoJy4uL2lzX3NhbWVfaG91ci9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IEhvdXIgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgaG91ciBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgaG91ciBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIGhvdXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgbm93IGlzIDI1IFNlcHRlbWJlciAyMDE0IDE4OjMwOjE1LjUwMCxcbiAqIC8vIGlzIDI1IFNlcHRlbWJlciAyMDE0IDE4OjAwOjAwIGluIHRoaXMgaG91cj9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNIb3VyKG5ldyBEYXRlKDIwMTQsIDgsIDI1LCAxOCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNUaGlzSG91ciAoZGlydHlEYXRlKSB7XG4gIHJldHVybiBpc1NhbWVIb3VyKG5ldyBEYXRlKCksIGRpcnR5RGF0ZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1RoaXNIb3VyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc190aGlzX2hvdXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgaXNTYW1lSVNPV2VlayA9IHJlcXVpcmUoJy4uL2lzX3NhbWVfaXNvX3dlZWsvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBJU08gd2VlayBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgSVNPIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIGluIHRoaXMgSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIyIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgSVNPIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzSVNPV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMikpXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNUaGlzSVNPV2VlayAoZGlydHlEYXRlKSB7XG4gIHJldHVybiBpc1NhbWVJU09XZWVrKG5ldyBEYXRlKCksIGRpcnR5RGF0ZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1RoaXNJU09XZWVrXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc190aGlzX2lzb193ZWVrL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGlzU2FtZUlTT1llYXIgPSByZXF1aXJlKCcuLi9pc19zYW1lX2lzb195ZWFyL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWstTnVtYmVyaW5nIFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgSVNPIHdlZWstbnVtYmVyaW5nIHllYXIgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LFxuICogLy8gaXMgMzAgRGVjZW1iZXIgMjAxMyBpbiB0aGlzIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc0lTT1llYXIobmV3IERhdGUoMjAxMywgMTEsIDMwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1RoaXNJU09ZZWFyIChkaXJ0eURhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZUlTT1llYXIobmV3IERhdGUoKSwgZGlydHlEYXRlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVGhpc0lTT1llYXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3RoaXNfaXNvX3llYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgaXNTYW1lTWludXRlID0gcmVxdWlyZSgnLi4vaXNfc2FtZV9taW51dGUvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNaW51dGUgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgbWludXRlIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtaW51dGUgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyBtaW51dGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgbm93IGlzIDI1IFNlcHRlbWJlciAyMDE0IDE4OjMwOjE1LjUwMCxcbiAqIC8vIGlzIDI1IFNlcHRlbWJlciAyMDE0IDE4OjMwOjAwIGluIHRoaXMgbWludXRlP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc01pbnV0ZShuZXcgRGF0ZSgyMDE0LCA4LCAyNSwgMTgsIDMwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1RoaXNNaW51dGUgKGRpcnR5RGF0ZSkge1xuICByZXR1cm4gaXNTYW1lTWludXRlKG5ldyBEYXRlKCksIGRpcnR5RGF0ZSlcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1RoaXNNaW51dGVcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3RoaXNfbWludXRlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNDlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxudmFyIGdldERheXNJbk1vbnRoID0gcmVxdWlyZSgnLi4vZ2V0X2RheXNfaW5fbW9udGgvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1vbnRocyB0byBiZSBhZGRlZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgYWRkZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQWRkIDUgbW9udGhzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gYWRkTW9udGhzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxuICogLy89PiBTdW4gRmViIDAxIDIwMTUgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gYWRkTW9udGhzIChkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgYW1vdW50ID0gTnVtYmVyKGRpcnR5QW1vdW50KVxuICB2YXIgZGVzaXJlZE1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgYW1vdW50XG4gIHZhciBkYXRlV2l0aERlc2lyZWRNb250aCA9IG5ldyBEYXRlKDApXG4gIGRhdGVXaXRoRGVzaXJlZE1vbnRoLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGVzaXJlZE1vbnRoLCAxKVxuICBkYXRlV2l0aERlc2lyZWRNb250aC5zZXRIb3VycygwLCAwLCAwLCAwKVxuICB2YXIgZGF5c0luTW9udGggPSBnZXREYXlzSW5Nb250aChkYXRlV2l0aERlc2lyZWRNb250aClcbiAgLy8gU2V0IHRoZSBsYXN0IGRheSBvZiB0aGUgbmV3IG1vbnRoXG4gIC8vIGlmIHRoZSBvcmlnaW5hbCBkYXRlIHdhcyB0aGUgbGFzdCBkYXkgb2YgdGhlIGxvbmdlciBtb250aFxuICBkYXRlLnNldE1vbnRoKGRlc2lyZWRNb250aCwgTWF0aC5taW4oZGF5c0luTW9udGgsIGRhdGUuZ2V0RGF0ZSgpKSlcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRNb250aHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2FkZF9tb250aHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBpc1NhbWVNb250aCA9IHJlcXVpcmUoJy4uL2lzX3NhbWVfbW9udGgvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBtb250aCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgbW9udGggYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyBtb250aFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyAyNSBTZXB0ZW1iZXIgMjAxNCwgaXMgMTUgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyBtb250aD9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNNb250aChuZXcgRGF0ZSgyMDE0LCA4LCAxNSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNUaGlzTW9udGggKGRpcnR5RGF0ZSkge1xuICByZXR1cm4gaXNTYW1lTW9udGgobmV3IERhdGUoKSwgZGlydHlEYXRlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVGhpc01vbnRoXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc190aGlzX21vbnRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGlzU2FtZVF1YXJ0ZXIgPSByZXF1aXJlKCcuLi9pc19zYW1lX3F1YXJ0ZXIvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBRdWFydGVyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHF1YXJ0ZXIgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHF1YXJ0ZXIgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyBxdWFydGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyIEp1bHkgMjAxNCBpbiB0aGlzIHF1YXJ0ZXI/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzUXVhcnRlcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1RoaXNRdWFydGVyIChkaXJ0eURhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZVF1YXJ0ZXIobmV3IERhdGUoKSwgZGlydHlEYXRlKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVGhpc1F1YXJ0ZXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3RoaXNfcXVhcnRlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBpc1NhbWVTZWNvbmQgPSByZXF1aXJlKCcuLi9pc19zYW1lX3NlY29uZC9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSBzZWNvbmQgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHNlY29uZCBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHNlY29uZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiBub3cgaXMgMjUgU2VwdGVtYmVyIDIwMTQgMTg6MzA6MTUuNTAwLFxuICogLy8gaXMgMjUgU2VwdGVtYmVyIDIwMTQgMTg6MzA6MTUuMDAwIGluIHRoaXMgc2Vjb25kP1xuICogdmFyIHJlc3VsdCA9IGlzVGhpc1NlY29uZChuZXcgRGF0ZSgyMDE0LCA4LCAyNSwgMTgsIDMwLCAxNSkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNUaGlzU2Vjb25kIChkaXJ0eURhdGUpIHtcbiAgcmV0dXJuIGlzU2FtZVNlY29uZChuZXcgRGF0ZSgpLCBkaXJ0eURhdGUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUaGlzU2Vjb25kXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc190aGlzX3NlY29uZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBpc1NhbWVXZWVrID0gcmVxdWlyZSgnLi4vaXNfc2FtZV93ZWVrL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge051bWJlcn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0LCBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSkpXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQgYW5kIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5XG4gKiAvLyBpcyAyMSBTZXB0ZW1iZXIgMjAxNCBpbiB0aGlzIHdlZWs/XG4gKiB2YXIgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHt3ZWVrU3RhcnRzT246IDF9KVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1RoaXNXZWVrIChkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucykge1xuICByZXR1cm4gaXNTYW1lV2VlayhuZXcgRGF0ZSgpLCBkaXJ0eURhdGUsIGRpcnR5T3B0aW9ucylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1RoaXNXZWVrXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc190aGlzX3dlZWsvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgaXNTYW1lWWVhciA9IHJlcXVpcmUoJy4uL2lzX3NhbWVfeWVhci9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFllYXIgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgeWVhciBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgaW4gdGhlIHNhbWUgeWVhciBhcyB0aGUgY3VycmVudCBkYXRlP1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBpbiB0aGlzIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIgSnVseSAyMDE0IGluIHRoaXMgeWVhcj9cbiAqIHZhciByZXN1bHQgPSBpc1RoaXNZZWFyKG5ldyBEYXRlKDIwMTQsIDYsIDIpKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzVGhpc1llYXIgKGRpcnR5RGF0ZSkge1xuICByZXR1cm4gaXNTYW1lWWVhcihuZXcgRGF0ZSgpLCBkaXJ0eURhdGUpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUaGlzWWVhclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfdGhpc195ZWFyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIFRodXJzZGF5P1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogSXMgdGhlIGdpdmVuIGRhdGUgVGh1cnNkYXk/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIFRodXJzZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDI1IFNlcHRlbWJlciAyMDE0IFRodXJzZGF5P1xuICogdmFyIHJlc3VsdCA9IGlzVGh1cnNkYXkobmV3IERhdGUoMjAxNCwgOCwgMjUpKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzVGh1cnNkYXkgKGRpcnR5RGF0ZSkge1xuICByZXR1cm4gcGFyc2UoZGlydHlEYXRlKS5nZXREYXkoKSA9PT0gNFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVGh1cnNkYXlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3RodXJzZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHN0YXJ0T2ZEYXkgPSByZXF1aXJlKCcuLi9zdGFydF9vZl9kYXkvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgdG9kYXk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b2RheT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgdG9kYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQsIGlzIDYgT2N0b2JlciAxNDowMDowMCB0b2RheT9cbiAqIHZhciByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1RvZGF5IChkaXJ0eURhdGUpIHtcbiAgcmV0dXJuIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKS5nZXRUaW1lKCkgPT09IHN0YXJ0T2ZEYXkobmV3IERhdGUoKSkuZ2V0VGltZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNUb2RheVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfdG9kYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgc3RhcnRPZkRheSA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX2RheS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB0b21vcnJvdz9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvbW9ycm93P1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b21vcnJvd1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNyBPY3RvYmVyIDE0OjAwOjAwIHRvbW9ycm93P1xuICogdmFyIHJlc3VsdCA9IGlzVG9tb3Jyb3cobmV3IERhdGUoMjAxNCwgOSwgNywgMTQsIDApKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzVG9tb3Jyb3cgKGRpcnR5RGF0ZSkge1xuICB2YXIgdG9tb3Jyb3cgPSBuZXcgRGF0ZSgpXG4gIHRvbW9ycm93LnNldERhdGUodG9tb3Jyb3cuZ2V0RGF0ZSgpICsgMSlcbiAgcmV0dXJuIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKS5nZXRUaW1lKCkgPT09IHN0YXJ0T2ZEYXkodG9tb3Jyb3cpLmdldFRpbWUoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVG9tb3Jyb3dcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX3RvbW9ycm93L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBXZWVrZGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIFR1ZXNkYXk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBUdWVzZGF5P1xuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyBUdWVzZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElzIDIzIFNlcHRlbWJlciAyMDE0IFR1ZXNkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNUdWVzZGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIzKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpc1R1ZXNkYXkgKGRpcnR5RGF0ZSkge1xuICByZXR1cm4gcGFyc2UoZGlydHlEYXRlKS5nZXREYXkoKSA9PT0gMlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzVHVlc2RheVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfdHVlc2RheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSBXZWRuZXNkYXk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBXZWRuZXNkYXk/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIFdlZG5lc2RheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJcyAyNCBTZXB0ZW1iZXIgMjAxNCBXZWRuZXNkYXk/XG4gKiB2YXIgcmVzdWx0ID0gaXNXZWRuZXNkYXkobmV3IERhdGUoMjAxNCwgOCwgMjQpKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzV2VkbmVzZGF5IChkaXJ0eURhdGUpIHtcbiAgcmV0dXJuIHBhcnNlKGRpcnR5RGF0ZSkuZ2V0RGF5KCkgPT09IDNcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1dlZG5lc2RheVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfd2VkbmVzZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBIb3cgbWFueSBtaWxsaXNlY29uZHMgYXJlIGJldHdlZW5cbiAqIC8vIDIgSnVseSAyMDE0IDEyOjMwOjIwLjYwMCBhbmQgMiBKdWx5IDIwMTQgMTI6MzA6MjEuNzAwP1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMSwgNzAwKSxcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgNjAwKVxuICogKVxuICogLy89PiAxMTAwXG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyAoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgdmFyIGRhdGVMZWZ0ID0gcGFyc2UoZGlydHlEYXRlTGVmdClcbiAgdmFyIGRhdGVSaWdodCA9IHBhcnNlKGRpcnR5RGF0ZVJpZ2h0KVxuICByZXR1cm4gZGF0ZUxlZnQuZ2V0VGltZSgpIC0gZGF0ZVJpZ2h0LmdldFRpbWUoKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZGlmZmVyZW5jZV9pbl9taWxsaXNlY29uZHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBEb2VzIHRoZSBnaXZlbiBkYXRlIGZhbGwgb24gYSB3ZWVrZW5kP1xuICpcbiAqIEBkZXNjcmlwdGlvblxuICogRG9lcyB0aGUgZ2l2ZW4gZGF0ZSBmYWxsIG9uIGEgd2Vla2VuZD9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgZmFsbHMgb24gYSB3ZWVrZW5kXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIERvZXMgNSBPY3RvYmVyIDIwMTQgZmFsbCBvbiBhIHdlZWtlbmQ/XG4gKiB2YXIgcmVzdWx0ID0gaXNXZWVrZW5kKG5ldyBEYXRlKDIwMTQsIDksIDUpKVxuICogLy89PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlzV2Vla2VuZCAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF5ID0gZGF0ZS5nZXREYXkoKVxuICByZXR1cm4gZGF5ID09PSAwIHx8IGRheSA9PT0gNlxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlzV2Vla2VuZFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfd2Vla2VuZC9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgUmFuZ2UgSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGRhdGUgd2l0aGluIHRoZSByYW5nZT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHdpdGhpbiB0aGUgcmFuZ2U/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IHN0YXJ0RGF0ZSAtIHRoZSBzdGFydCBvZiByYW5nZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGVuZERhdGUgLSB0aGUgZW5kIG9mIHJhbmdlXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgd2l0aGluIHRoZSByYW5nZVxuICogQHRocm93cyB7RXJyb3J9IHN0YXJ0RGF0ZSBjYW5ub3QgYmUgYWZ0ZXIgZW5kRGF0ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgd2l0aGluIHRoZSByYW5nZTpcbiAqIGlzV2l0aGluUmFuZ2UoXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMpLCBuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNCwgMCwgNylcbiAqIClcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBGb3IgdGhlIGRhdGUgb3V0c2lkZSBvZiB0aGUgcmFuZ2U6XG4gKiBpc1dpdGhpblJhbmdlKFxuICogICBuZXcgRGF0ZSgyMDE0LCAwLCAxMCksIG5ldyBEYXRlKDIwMTQsIDAsIDEpLCBuZXcgRGF0ZSgyMDE0LCAwLCA3KVxuICogKVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1dpdGhpblJhbmdlIChkaXJ0eURhdGUsIGRpcnR5U3RhcnREYXRlLCBkaXJ0eUVuZERhdGUpIHtcbiAgdmFyIHRpbWUgPSBwYXJzZShkaXJ0eURhdGUpLmdldFRpbWUoKVxuICB2YXIgc3RhcnRUaW1lID0gcGFyc2UoZGlydHlTdGFydERhdGUpLmdldFRpbWUoKVxuICB2YXIgZW5kVGltZSA9IHBhcnNlKGRpcnR5RW5kRGF0ZSkuZ2V0VGltZSgpXG5cbiAgaWYgKHN0YXJ0VGltZSA+IGVuZFRpbWUpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSBzdGFydCBvZiB0aGUgcmFuZ2UgY2Fubm90IGJlIGFmdGVyIHRoZSBlbmQgb2YgdGhlIHJhbmdlJylcbiAgfVxuXG4gIHJldHVybiB0aW1lID49IHN0YXJ0VGltZSAmJiB0aW1lIDw9IGVuZFRpbWVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1dpdGhpblJhbmdlXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9pc193aXRoaW5fcmFuZ2UvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgc3RhcnRPZkRheSA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX2RheS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBJcyB0aGUgZ2l2ZW4gZGF0ZSB5ZXN0ZXJkYXk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSB5ZXN0ZXJkYXk/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlIGlzIHllc3RlcmRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0b2RheSBpcyA2IE9jdG9iZXIgMjAxNCwgaXMgNSBPY3RvYmVyIDE0OjAwOjAwIHllc3RlcmRheT9cbiAqIHZhciByZXN1bHQgPSBpc1llc3RlcmRheShuZXcgRGF0ZSgyMDE0LCA5LCA1LCAxNCwgMCkpXG4gKiAvLz0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaXNZZXN0ZXJkYXkgKGRpcnR5RGF0ZSkge1xuICB2YXIgeWVzdGVyZGF5ID0gbmV3IERhdGUoKVxuICB5ZXN0ZXJkYXkuc2V0RGF0ZSh5ZXN0ZXJkYXkuZ2V0RGF0ZSgpIC0gMSlcbiAgcmV0dXJuIHN0YXJ0T2ZEYXkoZGlydHlEYXRlKS5nZXRUaW1lKCkgPT09IHN0YXJ0T2ZEYXkoeWVzdGVyZGF5KS5nZXRUaW1lKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc1llc3RlcmRheVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfeWVzdGVyZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGxhc3REYXlPZldlZWsgPSByZXF1aXJlKCcuLi9sYXN0X2RheV9vZl93ZWVrL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgSVNPIFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBsYXN0IGRheSBvZiBhbiBJU08gd2VlayBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGxhc3QgZGF5IG9mIGFuIElTTyB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbGFzdCBkYXkgb2YgYW4gSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGxhc3QgZGF5IG9mIGFuIElTTyB3ZWVrIGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogdmFyIHJlc3VsdCA9IGxhc3REYXlPZklTT1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gU3VuIFNlcCAwNyAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIGxhc3REYXlPZklTT1dlZWsgKGRpcnR5RGF0ZSkge1xuICByZXR1cm4gbGFzdERheU9mV2VlayhkaXJ0eURhdGUsIHt3ZWVrU3RhcnRzT246IDF9KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGxhc3REYXlPZklTT1dlZWtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xhc3RfZGF5X29mX2lzb193ZWVrL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGdldElTT1llYXIgPSByZXF1aXJlKCcuLi9nZXRfaXNvX3llYXIvaW5kZXguanMnKVxudmFyIHN0YXJ0T2ZJU09XZWVrID0gcmVxdWlyZSgnLi4vc3RhcnRfb2ZfaXNvX3dlZWsvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBJU08gV2Vlay1OdW1iZXJpbmcgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIGxhc3QgZGF5IG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgbGFzdCBkYXkgb2YgYW4gSVNPIHdlZWstbnVtYmVyaW5nIHllYXIsXG4gKiB3aGljaCBhbHdheXMgc3RhcnRzIDMgZGF5cyBiZWZvcmUgdGhlIHllYXIncyBmaXJzdCBUaHVyc2RheS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogSVNPIHdlZWstbnVtYmVyaW5nIHllYXI6IGh0dHA6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvSVNPX3dlZWtfZGF0ZVxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgZW5kIG9mIGFuIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBsYXN0IGRheSBvZiBhbiBJU08gd2Vlay1udW1iZXJpbmcgeWVhciBmb3IgMiBKdWx5IDIwMDU6XG4gKiB2YXIgcmVzdWx0ID0gbGFzdERheU9mSVNPWWVhcihuZXcgRGF0ZSgyMDA1LCA2LCAyKSlcbiAqIC8vPT4gU3VuIEphbiAwMSAyMDA2IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIGxhc3REYXlPZklTT1llYXIgKGRpcnR5RGF0ZSkge1xuICB2YXIgeWVhciA9IGdldElTT1llYXIoZGlydHlEYXRlKVxuICB2YXIgZm91cnRoT2ZKYW51YXJ5ID0gbmV3IERhdGUoMClcbiAgZm91cnRoT2ZKYW51YXJ5LnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCA0KVxuICBmb3VydGhPZkphbnVhcnkuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgdmFyIGRhdGUgPSBzdGFydE9mSVNPV2Vlayhmb3VydGhPZkphbnVhcnkpXG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIDEpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFzdERheU9mSVNPWWVhclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbGFzdF9kYXlfb2ZfaXNvX3llYXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgbGFzdCBkYXkgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGxhc3QgZGF5IG9mIGEgbW9udGggZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGxhc3QgZGF5IG9mIGEgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGxhc3QgZGF5IG9mIGEgbW9udGggZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gbGFzdERheU9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gVHVlIFNlcCAzMCAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIGxhc3REYXlPZk1vbnRoIChkaXJ0eURhdGUpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBtb250aCA9IGRhdGUuZ2V0TW9udGgoKVxuICBkYXRlLnNldEZ1bGxZZWFyKGRhdGUuZ2V0RnVsbFllYXIoKSwgbW9udGggKyAxLCAwKVxuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFzdERheU9mTW9udGhcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xhc3RfZGF5X29mX21vbnRoL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBRdWFydGVyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgbGFzdCBkYXkgb2YgYSB5ZWFyIHF1YXJ0ZXIgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBsYXN0IGRheSBvZiBhIHllYXIgcXVhcnRlciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbGFzdCBkYXkgb2YgYSBxdWFydGVyXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFRoZSBsYXN0IGRheSBvZiBhIHF1YXJ0ZXIgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gbGFzdERheU9mUXVhcnRlcihuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gbGFzdERheU9mUXVhcnRlciAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgY3VycmVudE1vbnRoID0gZGF0ZS5nZXRNb250aCgpXG4gIHZhciBtb250aCA9IGN1cnJlbnRNb250aCAtIGN1cnJlbnRNb250aCAlIDMgKyAzXG4gIGRhdGUuc2V0TW9udGgobW9udGgsIDApXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBsYXN0RGF5T2ZRdWFydGVyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9sYXN0X2RheV9vZl9xdWFydGVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgbGFzdCBkYXkgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgbGFzdCBkYXkgb2YgYSB5ZWFyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgb3JpZ2luYWwgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBsYXN0IGRheSBvZiBhIHllYXJcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIGxhc3QgZGF5IG9mIGEgeWVhciBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIHZhciByZXN1bHQgPSBsYXN0RGF5T2ZZZWFyKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMDApKVxuICogLy89PiBXZWQgRGVjIDMxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gbGFzdERheU9mWWVhciAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKVxuICBkYXRlLnNldEZ1bGxZZWFyKHllYXIgKyAxLCAwLCAwKVxuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbGFzdERheU9mWWVhclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbGFzdF9kYXlfb2ZfeWVhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgQ29tbW9uIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgbGF0ZXN0IG9mIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgbGF0ZXN0IG9mIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0gey4uLihEYXRlfFN0cmluZ3xOdW1iZXIpfSBkYXRlcyAtIHRoZSBkYXRlcyB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGxhdGVzdCBvZiB0aGUgZGF0ZXNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggb2YgdGhlc2UgZGF0ZXMgaXMgdGhlIGxhdGVzdD9cbiAqIHZhciByZXN1bHQgPSBtYXgoXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk5MCwgMCwgMSlcbiAqIClcbiAqIC8vPT4gU3VuIEp1bCAwMiAxOTk1IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIG1heCAoKSB7XG4gIHZhciBkaXJ0eURhdGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICB2YXIgZGF0ZXMgPSBkaXJ0eURhdGVzLm1hcChmdW5jdGlvbiAoZGlydHlEYXRlKSB7XG4gICAgcmV0dXJuIHBhcnNlKGRpcnR5RGF0ZSlcbiAgfSlcbiAgdmFyIGxhdGVzdFRpbWVzdGFtcCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIGRhdGVzKVxuICByZXR1cm4gbmV3IERhdGUobGF0ZXN0VGltZXN0YW1wKVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG1heFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvbWF4L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlYXJsaWVzdCBvZiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBSZXR1cm4gdGhlIGVhcmxpZXN0IG9mIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0gey4uLihEYXRlfFN0cmluZ3xOdW1iZXIpfSBkYXRlcyAtIHRoZSBkYXRlcyB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVhcmxpZXN0IG9mIHRoZSBkYXRlc1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBXaGljaCBvZiB0aGVzZSBkYXRlcyBpcyB0aGUgZWFybGllc3Q/XG4gKiB2YXIgcmVzdWx0ID0gbWluKFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMCksXG4gKiAgIG5ldyBEYXRlKDE5ODcsIDEsIDExKSxcbiAqICAgbmV3IERhdGUoMTk5NSwgNiwgMiksXG4gKiAgIG5ldyBEYXRlKDE5OTAsIDAsIDEpXG4gKiApXG4gKiAvLz0+IFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMFxuICovXG5mdW5jdGlvbiBtaW4gKCkge1xuICB2YXIgZGlydHlEYXRlcyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgdmFyIGRhdGVzID0gZGlydHlEYXRlcy5tYXAoZnVuY3Rpb24gKGRpcnR5RGF0ZSkge1xuICAgIHJldHVybiBwYXJzZShkaXJ0eURhdGUpXG4gIH0pXG4gIHZhciBlYXJsaWVzdFRpbWVzdGFtcCA9IE1hdGgubWluLmFwcGx5KG51bGwsIGRhdGVzKVxuICByZXR1cm4gbmV3IERhdGUoZWFybGllc3RUaW1lc3RhbXApXG59XG5cbm1vZHVsZS5leHBvcnRzID0gbWluXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9taW4vaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIGRheSBvZiB0aGUgbW9udGggdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXQgdGhlIGRheSBvZiB0aGUgbW9udGggdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gZGF5T2ZNb250aCAtIHRoZSBkYXkgb2YgdGhlIG1vbnRoIG9mIHRoZSBuZXcgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXkgb2YgdGhlIG1vbnRoIHNldHRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgdGhlIDMwdGggZGF5IG9mIHRoZSBtb250aCB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IHNldERhdGUobmV3IERhdGUoMjAxNCwgOCwgMSksIDMwKVxuICogLy89PiBUdWUgU2VwIDMwIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc2V0RGF0ZSAoZGlydHlEYXRlLCBkaXJ0eURheU9mTW9udGgpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBkYXlPZk1vbnRoID0gTnVtYmVyKGRpcnR5RGF5T2ZNb250aClcbiAgZGF0ZS5zZXREYXRlKGRheU9mTW9udGgpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0RGF0ZVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0X2RhdGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG52YXIgYWRkRGF5cyA9IHJlcXVpcmUoJy4uL2FkZF9kYXlzL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgV2Vla2RheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIGRheSBvZiB0aGUgd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNldCB0aGUgZGF5IG9mIHRoZSB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGRheSAtIHRoZSBkYXkgb2YgdGhlIHdlZWsgb2YgdGhlIG5ldyBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gdGhlIG9iamVjdCB3aXRoIG9wdGlvbnNcbiAqIEBwYXJhbSB7TnVtYmVyfSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5IG9mIHRoZSB3ZWVrIHNldHRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgU3VuZGF5IHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gc2V0RGF5KG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAwKVxuICogLy89PiBTdW4gQXVnIDMxIDIwMTQgMDA6MDA6MDBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksIHNldCBTdW5kYXkgdG8gMSBTZXB0ZW1iZXIgMjAxNDpcbiAqIHZhciByZXN1bHQgPSBzZXREYXkobmV3IERhdGUoMjAxNCwgOCwgMSksIDAsIHt3ZWVrU3RhcnRzT246IDF9KVxuICogLy89PiBTdW4gU2VwIDA3IDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc2V0RGF5IChkaXJ0eURhdGUsIGRpcnR5RGF5LCBkaXJ0eU9wdGlvbnMpIHtcbiAgdmFyIHdlZWtTdGFydHNPbiA9IGRpcnR5T3B0aW9ucyA/IChOdW1iZXIoZGlydHlPcHRpb25zLndlZWtTdGFydHNPbikgfHwgMCkgOiAwXG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF5ID0gTnVtYmVyKGRpcnR5RGF5KVxuICB2YXIgY3VycmVudERheSA9IGRhdGUuZ2V0RGF5KClcblxuICB2YXIgcmVtYWluZGVyID0gZGF5ICUgN1xuICB2YXIgZGF5SW5kZXggPSAocmVtYWluZGVyICsgNykgJSA3XG5cbiAgdmFyIGRpZmYgPSAoZGF5SW5kZXggPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSBjdXJyZW50RGF5XG4gIHJldHVybiBhZGREYXlzKGRhdGUsIGRpZmYpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0RGF5XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRfZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgU2V0IHRoZSBkYXkgb2YgdGhlIHllYXIgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXQgdGhlIGRheSBvZiB0aGUgeWVhciB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBkYXlPZlllYXIgLSB0aGUgZGF5IG9mIHRoZSB5ZWFyIG9mIHRoZSBuZXcgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXkgb2YgdGhlIHllYXIgc2V0dGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCB0aGUgMm5kIGRheSBvZiB0aGUgeWVhciB0byAyIEp1bHkgMjAxNDpcbiAqIHZhciByZXN1bHQgPSBzZXREYXlPZlllYXIobmV3IERhdGUoMjAxNCwgNiwgMiksIDIpXG4gKiAvLz0+IFRodSBKYW4gMDIgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzZXREYXlPZlllYXIgKGRpcnR5RGF0ZSwgZGlydHlEYXlPZlllYXIpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBkYXlPZlllYXIgPSBOdW1iZXIoZGlydHlEYXlPZlllYXIpXG4gIGRhdGUuc2V0TW9udGgoMClcbiAgZGF0ZS5zZXREYXRlKGRheU9mWWVhcilcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXREYXlPZlllYXJcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldF9kYXlfb2ZfeWVhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgSG91ciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIGhvdXJzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBob3VycyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBob3VycyAtIHRoZSBob3VycyBvZiB0aGUgbmV3IGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgaG91cnMgc2V0dGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCA0IGhvdXJzIHRvIDEgU2VwdGVtYmVyIDIwMTQgMTE6MzA6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc2V0SG91cnMobmV3IERhdGUoMjAxNCwgOCwgMSwgMTEsIDMwKSwgNClcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDA0OjMwOjAwXG4gKi9cbmZ1bmN0aW9uIHNldEhvdXJzIChkaXJ0eURhdGUsIGRpcnR5SG91cnMpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBob3VycyA9IE51bWJlcihkaXJ0eUhvdXJzKVxuICBkYXRlLnNldEhvdXJzKGhvdXJzKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEhvdXJzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRfaG91cnMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG52YXIgYWRkRGF5cyA9IHJlcXVpcmUoJy4uL2FkZF9kYXlzL2luZGV4LmpzJylcbnZhciBnZXRJU09EYXkgPSByZXF1aXJlKCcuLi9nZXRfaXNvX2RheS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFdlZWtkYXkgSGVscGVyc1xuICogQHN1bW1hcnkgU2V0IHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICogSVNPIHdlZWsgc3RhcnRzIHdpdGggTW9uZGF5LlxuICogNyBpcyB0aGUgaW5kZXggb2YgU3VuZGF5LCAxIGlzIHRoZSBpbmRleCBvZiBNb25kYXkgZXRjLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGRheSAtIHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIG9mIHRoZSBuZXcgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBkYXkgb2YgdGhlIElTTyB3ZWVrIHNldHRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgU3VuZGF5IHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gc2V0SVNPRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA3KVxuICogLy89PiBTdW4gU2VwIDA3IDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc2V0SVNPRGF5IChkaXJ0eURhdGUsIGRpcnR5RGF5KSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGF5ID0gTnVtYmVyKGRpcnR5RGF5KVxuICB2YXIgY3VycmVudERheSA9IGdldElTT0RheShkYXRlKVxuICB2YXIgZGlmZiA9IGRheSAtIGN1cnJlbnREYXlcbiAgcmV0dXJuIGFkZERheXMoZGF0ZSwgZGlmZilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRJU09EYXlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3NldF9pc29fZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzNzRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxudmFyIGdldElTT1dlZWsgPSByZXF1aXJlKCcuLi9nZXRfaXNvX3dlZWsvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBJU08gV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIElTTyB3ZWVrIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBJU08gd2VlayB0byB0aGUgZ2l2ZW4gZGF0ZSwgc2F2aW5nIHRoZSB3ZWVrZGF5IG51bWJlci5cbiAqXG4gKiBJU08gd2Vlay1udW1iZXJpbmcgeWVhcjogaHR0cDovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9JU09fd2Vla19kYXRlXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gaXNvV2VlayAtIHRoZSBJU08gd2VlayBvZiB0aGUgbmV3IGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgSVNPIHdlZWsgc2V0dGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCB0aGUgNTNyZCBJU08gd2VlayB0byA3IEF1Z3VzdCAyMDA0OlxuICogdmFyIHJlc3VsdCA9IHNldElTT1dlZWsobmV3IERhdGUoMjAwNCwgNywgNyksIDUzKVxuICogLy89PiBTYXQgSmFuIDAxIDIwMDUgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc2V0SVNPV2VlayAoZGlydHlEYXRlLCBkaXJ0eUlTT1dlZWspIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBpc29XZWVrID0gTnVtYmVyKGRpcnR5SVNPV2VlaylcbiAgdmFyIGRpZmYgPSBnZXRJU09XZWVrKGRhdGUpIC0gaXNvV2Vla1xuICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSBkaWZmICogNylcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRJU09XZWVrXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRfaXNvX3dlZWsvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IE1pbGxpc2Vjb25kIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFNldCB0aGUgbWlsbGlzZWNvbmRzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU2V0IHRoZSBtaWxsaXNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gbWlsbGlzZWNvbmRzIC0gdGhlIG1pbGxpc2Vjb25kcyBvZiB0aGUgbmV3IGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHNldHRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgMzAwIG1pbGxpc2Vjb25kcyB0byAxIFNlcHRlbWJlciAyMDE0IDExOjMwOjQwLjUwMDpcbiAqIHZhciByZXN1bHQgPSBzZXRNaWxsaXNlY29uZHMobmV3IERhdGUoMjAxNCwgOCwgMSwgMTEsIDMwLCA0MCwgNTAwKSwgMzAwKVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMTE6MzA6NDAuMzAwXG4gKi9cbmZ1bmN0aW9uIHNldE1pbGxpc2Vjb25kcyAoZGlydHlEYXRlLCBkaXJ0eU1pbGxpc2Vjb25kcykge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIG1pbGxpc2Vjb25kcyA9IE51bWJlcihkaXJ0eU1pbGxpc2Vjb25kcylcbiAgZGF0ZS5zZXRNaWxsaXNlY29uZHMobWlsbGlzZWNvbmRzKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldE1pbGxpc2Vjb25kc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0X21pbGxpc2Vjb25kcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFNldCB0aGUgbWludXRlcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFNldCB0aGUgbWludXRlcyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBtaW51dGVzIC0gdGhlIG1pbnV0ZXMgb2YgdGhlIG5ldyBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIG1pbnV0ZXMgc2V0dGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCA0NSBtaW51dGVzIHRvIDEgU2VwdGVtYmVyIDIwMTQgMTE6MzA6NDA6XG4gKiB2YXIgcmVzdWx0ID0gc2V0TWludXRlcyhuZXcgRGF0ZSgyMDE0LCA4LCAxLCAxMSwgMzAsIDQwKSwgNDUpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAxMTo0NTo0MFxuICovXG5mdW5jdGlvbiBzZXRNaW51dGVzIChkaXJ0eURhdGUsIGRpcnR5TWludXRlcykge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIG1pbnV0ZXMgPSBOdW1iZXIoZGlydHlNaW51dGVzKVxuICBkYXRlLnNldE1pbnV0ZXMobWludXRlcylcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRNaW51dGVzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRfbWludXRlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcbnZhciBzZXRNb250aCA9IHJlcXVpcmUoJy4uL3NldF9tb250aC9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFF1YXJ0ZXIgSGVscGVyc1xuICogQHN1bW1hcnkgU2V0IHRoZSB5ZWFyIHF1YXJ0ZXIgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXQgdGhlIHllYXIgcXVhcnRlciB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBxdWFydGVyIC0gdGhlIHF1YXJ0ZXIgb2YgdGhlIG5ldyBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIHF1YXJ0ZXIgc2V0dGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNldCB0aGUgMm5kIHF1YXJ0ZXIgdG8gMiBKdWx5IDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gc2V0UXVhcnRlcihuZXcgRGF0ZSgyMDE0LCA2LCAyKSwgMilcbiAqIC8vPT4gV2VkIEFwciAwMiAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHNldFF1YXJ0ZXIgKGRpcnR5RGF0ZSwgZGlydHlRdWFydGVyKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgcXVhcnRlciA9IE51bWJlcihkaXJ0eVF1YXJ0ZXIpXG4gIHZhciBvbGRRdWFydGVyID0gTWF0aC5mbG9vcihkYXRlLmdldE1vbnRoKCkgLyAzKSArIDFcbiAgdmFyIGRpZmYgPSBxdWFydGVyIC0gb2xkUXVhcnRlclxuICByZXR1cm4gc2V0TW9udGgoZGF0ZSwgZGF0ZS5nZXRNb250aCgpICsgZGlmZiAqIDMpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0UXVhcnRlclxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0X3F1YXJ0ZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXQgdGhlIHNlY29uZHMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gc2Vjb25kcyAtIHRoZSBzZWNvbmRzIG9mIHRoZSBuZXcgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBzZWNvbmRzIHNldHRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgNDUgc2Vjb25kcyB0byAxIFNlcHRlbWJlciAyMDE0IDExOjMwOjQwOlxuICogdmFyIHJlc3VsdCA9IHNldFNlY29uZHMobmV3IERhdGUoMjAxNCwgOCwgMSwgMTEsIDMwLCA0MCksIDQ1KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMTE6MzA6NDVcbiAqL1xuZnVuY3Rpb24gc2V0U2Vjb25kcyAoZGlydHlEYXRlLCBkaXJ0eVNlY29uZHMpIHtcbiAgdmFyIGRhdGUgPSBwYXJzZShkaXJ0eURhdGUpXG4gIHZhciBzZWNvbmRzID0gTnVtYmVyKGRpcnR5U2Vjb25kcylcbiAgZGF0ZS5zZXRTZWNvbmRzKHNlY29uZHMpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0U2Vjb25kc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc2V0X3NlY29uZHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCIvKipcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgSXMgdGhlIGdpdmVuIGFyZ3VtZW50IGFuIGluc3RhbmNlIG9mIERhdGU/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gYXJndW1lbnQgYW4gaW5zdGFuY2Ugb2YgRGF0ZT9cbiAqXG4gKiBAcGFyYW0geyp9IGFyZ3VtZW50IC0gdGhlIGFyZ3VtZW50IHRvIGNoZWNrXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGdpdmVuIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSXMgJ21heW9ubmFpc2UnIGEgRGF0ZT9cbiAqIHZhciByZXN1bHQgPSBpc0RhdGUoJ21heW9ubmFpc2UnKVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc0RhdGUgKGFyZ3VtZW50KSB7XG4gIHJldHVybiBhcmd1bWVudCBpbnN0YW5jZW9mIERhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpc0RhdGVcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2lzX2RhdGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgWWVhciBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTZXQgdGhlIHllYXIgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTZXQgdGhlIHllYXIgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0geWVhciAtIHRoZSB5ZWFyIG9mIHRoZSBuZXcgZGF0ZVxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSB5ZWFyIHNldHRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTZXQgeWVhciAyMDEzIHRvIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gc2V0WWVhcihuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMjAxMylcbiAqIC8vPT4gU3VuIFNlcCAwMSAyMDEzIDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHNldFllYXIgKGRpcnR5RGF0ZSwgZGlydHlZZWFyKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgeWVhciA9IE51bWJlcihkaXJ0eVllYXIpXG4gIGRhdGUuc2V0RnVsbFllYXIoeWVhcilcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRZZWFyXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zZXRfeWVhci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBzdGFydCBvZiBhIG1vbnRoIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBtb250aCBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gKiBUaGUgcmVzdWx0IHdpbGwgYmUgaW4gdGhlIGxvY2FsIHRpbWV6b25lLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBtb250aFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBtb250aCBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIHZhciByZXN1bHQgPSBzdGFydE9mTW9udGgobmV3IERhdGUoMjAxNCwgOCwgMiwgMTEsIDU1LCAwKSlcbiAqIC8vPT4gTW9uIFNlcCAwMSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZNb250aCAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICBkYXRlLnNldERhdGUoMSlcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKVxuICByZXR1cm4gZGF0ZVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0YXJ0T2ZNb250aFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRfb2ZfbW9udGgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgc3RhcnRPZkRheSA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX2RheS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIHRvZGF5LlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiB0b2RheS5cbiAqXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIHRvZGF5XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IHN0YXJ0T2ZUb2RheSgpXG4gKiAvLz0+IE1vbiBPY3QgNiAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZUb2RheSAoKSB7XG4gIHJldHVybiBzdGFydE9mRGF5KG5ldyBEYXRlKCkpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRPZlRvZGF5XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdGFydF9vZl90b2RheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsIi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIHRvbW9ycm93LlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiB0b21vcnJvdy5cbiAqXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIHN0YXJ0IG9mIHRvbW9ycm93XG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IHN0YXJ0T2ZUb21vcnJvdygpXG4gKiAvLz0+IFR1ZSBPY3QgNyAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZUb21vcnJvdyAoKSB7XG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpXG4gIHZhciB5ZWFyID0gbm93LmdldEZ1bGxZZWFyKClcbiAgdmFyIG1vbnRoID0gbm93LmdldE1vbnRoKClcbiAgdmFyIGRheSA9IG5vdy5nZXREYXRlKClcblxuICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDApXG4gIGRhdGUuc2V0RnVsbFllYXIoeWVhciwgbW9udGgsIGRheSArIDEpXG4gIGRhdGUuc2V0SG91cnMoMCwgMCwgMCwgMClcbiAgcmV0dXJuIGRhdGVcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdGFydE9mVG9tb3Jyb3dcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N0YXJ0X29mX3RvbW9ycm93L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzODNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwiLyoqXG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgeWVzdGVyZGF5LlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBzdGFydCBvZiB5ZXN0ZXJkYXkuXG4gKlxuICogQHJldHVybnMge0RhdGV9IHRoZSBzdGFydCBvZiB5ZXN0ZXJkYXlcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgNiBPY3RvYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gc3RhcnRPZlllc3RlcmRheSgpXG4gKiAvLz0+IFN1biBPY3QgNSAyMDE0IDAwOjAwOjAwXG4gKi9cbmZ1bmN0aW9uIHN0YXJ0T2ZZZXN0ZXJkYXkgKCkge1xuICB2YXIgbm93ID0gbmV3IERhdGUoKVxuICB2YXIgeWVhciA9IG5vdy5nZXRGdWxsWWVhcigpXG4gIHZhciBtb250aCA9IG5vdy5nZXRNb250aCgpXG4gIHZhciBkYXkgPSBub3cuZ2V0RGF0ZSgpXG5cbiAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwKVxuICBkYXRlLnNldEZ1bGxZZWFyKHllYXIsIG1vbnRoLCBkYXkgLSAxKVxuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3RhcnRPZlllc3RlcmRheVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3RhcnRfb2ZfeWVzdGVyZGF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzODRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGFkZERheXMgPSByZXF1aXJlKCcuLi9hZGRfZGF5cy9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBkYXlzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBkYXlzIHRvIGJlIHN1YnRyYWN0ZWRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgZGF5cyBzdWJ0cmFjdGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDEwIGRheXMgZnJvbSAxIFNlcHRlbWJlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IHN1YkRheXMobmV3IERhdGUoMjAxNCwgOCwgMSksIDEwKVxuICogLy89PiBGcmkgQXVnIDIyIDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3ViRGF5cyAoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICB2YXIgYW1vdW50ID0gTnVtYmVyKGRpcnR5QW1vdW50KVxuICByZXR1cm4gYWRkRGF5cyhkaXJ0eURhdGUsIC1hbW91bnQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3ViRGF5c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3ViX2RheXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgYWRkSG91cnMgPSByZXF1aXJlKCcuLi9hZGRfaG91cnMvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBIb3VyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGhvdXJzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBob3VycyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgaG91cnMgdG8gYmUgc3VidHJhY3RlZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBob3VycyBzdWJ0cmFjdGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDIgaG91cnMgZnJvbSAxMSBKdWx5IDIwMTQgMDE6MDA6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3ViSG91cnMobmV3IERhdGUoMjAxNCwgNiwgMTEsIDEsIDApLCAyKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMjM6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3ViSG91cnMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudClcbiAgcmV0dXJuIGFkZEhvdXJzKGRpcnR5RGF0ZSwgLWFtb3VudClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdWJIb3Vyc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3ViX2hvdXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzODZcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGFkZE1pbGxpc2Vjb25kcyA9IHJlcXVpcmUoJy4uL2FkZF9taWxsaXNlY29uZHMvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNaWxsaXNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBtaWxsaXNlY29uZHMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgbWlsbGlzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgbWlsbGlzZWNvbmRzIHN1YnRyYWN0ZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNzUwIG1pbGxpc2Vjb25kcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjo0NTozMC4wMDA6XG4gKiB2YXIgcmVzdWx0ID0gc3ViTWlsbGlzZWNvbmRzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgNDUsIDMwLCAwKSwgNzUwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTI6NDU6MjkuMjUwXG4gKi9cbmZ1bmN0aW9uIHN1Yk1pbGxpc2Vjb25kcyAoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICB2YXIgYW1vdW50ID0gTnVtYmVyKGRpcnR5QW1vdW50KVxuICByZXR1cm4gYWRkTWlsbGlzZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdWJNaWxsaXNlY29uZHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL3N1Yl9taWxsaXNlY29uZHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgYWRkTWludXRlcyA9IHJlcXVpcmUoJy4uL2FkZF9taW51dGVzL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTWludXRlIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbnV0ZXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1pbnV0ZXMgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBkYXRlIHRvIGJlIGNoYW5nZWRcbiAqIEBwYXJhbSB7TnVtYmVyfSBhbW91bnQgLSB0aGUgYW1vdW50IG9mIG1pbnV0ZXMgdG8gYmUgc3VidHJhY3RlZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtaW50dWVzIHN1YnRyYWN0ZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgMzAgbWludXRlcyBmcm9tIDEwIEp1bHkgMjAxNCAxMjowMDowMDpcbiAqIHZhciByZXN1bHQgPSBzdWJNaW51dGVzKG5ldyBEYXRlKDIwMTQsIDYsIDEwLCAxMiwgMCksIDMwKVxuICogLy89PiBUaHUgSnVsIDEwIDIwMTQgMTE6MzA6MDBcbiAqL1xuZnVuY3Rpb24gc3ViTWludXRlcyAoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICB2YXIgYW1vdW50ID0gTnVtYmVyKGRpcnR5QW1vdW50KVxuICByZXR1cm4gYWRkTWludXRlcyhkaXJ0eURhdGUsIC1hbW91bnQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3ViTWludXRlc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3ViX21pbnV0ZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgYWRkTW9udGhzID0gcmVxdWlyZSgnLi4vYWRkX21vbnRocy9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IE1vbnRoIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIG1vbnRocyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgbW9udGhzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBtb250aHMgdG8gYmUgc3VidHJhY3RlZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBtb250aHMgc3VidHJhY3RlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBTdWJ0cmFjdCA1IG1vbnRocyBmcm9tIDEgRmVicnVhcnkgMjAxNTpcbiAqIHZhciByZXN1bHQgPSBzdWJNb250aHMobmV3IERhdGUoMjAxNSwgMSwgMSksIDUpXG4gKiAvLz0+IE1vbiBTZXAgMDEgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdWJNb250aHMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudClcbiAgcmV0dXJuIGFkZE1vbnRocyhkaXJ0eURhdGUsIC1hbW91bnQpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3ViTW9udGhzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdWJfbW9udGhzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzODlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBNb250aCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBHZXQgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGggb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZ2l2ZW4gZGF0ZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIG51bWJlciBvZiBkYXlzIGluIGEgbW9udGhcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZGF5cyBhcmUgaW4gRmVicnVhcnkgMjAwMD9cbiAqIHZhciByZXN1bHQgPSBnZXREYXlzSW5Nb250aChuZXcgRGF0ZSgyMDAwLCAxKSlcbiAqIC8vPT4gMjlcbiAqL1xuZnVuY3Rpb24gZ2V0RGF5c0luTW9udGggKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgdmFyIHllYXIgPSBkYXRlLmdldEZ1bGxZZWFyKClcbiAgdmFyIG1vbnRoSW5kZXggPSBkYXRlLmdldE1vbnRoKClcbiAgdmFyIGxhc3REYXlPZk1vbnRoID0gbmV3IERhdGUoMClcbiAgbGFzdERheU9mTW9udGguc2V0RnVsbFllYXIoeWVhciwgbW9udGhJbmRleCArIDEsIDApXG4gIGxhc3REYXlPZk1vbnRoLnNldEhvdXJzKDAsIDAsIDAsIDApXG4gIHJldHVybiBsYXN0RGF5T2ZNb250aC5nZXREYXRlKClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXREYXlzSW5Nb250aFxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X2RheXNfaW5fbW9udGgvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM5XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBhZGRRdWFydGVycyA9IHJlcXVpcmUoJy4uL2FkZF9xdWFydGVycy9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFF1YXJ0ZXIgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgeWVhciBxdWFydGVycyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgeWVhciBxdWFydGVycyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgcXVhcnRlcnMgdG8gYmUgc3VidHJhY3RlZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSBxdWFydGVycyBzdWJ0cmFjdGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDMgcXVhcnRlcnMgZnJvbSAxIFNlcHRlbWJlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IHN1YlF1YXJ0ZXJzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCAzKVxuICogLy89PiBTdW4gRGVjIDAxIDIwMTMgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3ViUXVhcnRlcnMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudClcbiAgcmV0dXJuIGFkZFF1YXJ0ZXJzKGRpcnR5RGF0ZSwgLWFtb3VudClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdWJRdWFydGVyc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3ViX3F1YXJ0ZXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGFkZFNlY29uZHMgPSByZXF1aXJlKCcuLi9hZGRfc2Vjb25kcy9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFNlY29uZCBIZWxwZXJzXG4gKiBAc3VtbWFyeSBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiBzZWNvbmRzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiBzZWNvbmRzIHRvIGJlIHN1YnRyYWN0ZWRcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgbmV3IGRhdGUgd2l0aCB0aGUgc2Vjb25kcyBzdWJ0cmFjdGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDMwIHNlY29uZHMgZnJvbSAxMCBKdWx5IDIwMTQgMTI6NDU6MDA6XG4gKiB2YXIgcmVzdWx0ID0gc3ViU2Vjb25kcyhuZXcgRGF0ZSgyMDE0LCA2LCAxMCwgMTIsIDQ1LCAwKSwgMzApXG4gKiAvLz0+IFRodSBKdWwgMTAgMjAxNCAxMjo0NDozMFxuICovXG5mdW5jdGlvbiBzdWJTZWNvbmRzIChkaXJ0eURhdGUsIGRpcnR5QW1vdW50KSB7XG4gIHZhciBhbW91bnQgPSBOdW1iZXIoZGlydHlBbW91bnQpXG4gIHJldHVybiBhZGRTZWNvbmRzKGRpcnR5RGF0ZSwgLWFtb3VudClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdWJTZWNvbmRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdWJfc2Vjb25kcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMzkxXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBhZGRXZWVrcyA9IHJlcXVpcmUoJy4uL2FkZF93ZWVrcy9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgU3VidHJhY3QgdGhlIHNwZWNpZmllZCBudW1iZXIgb2Ygd2Vla3MgZnJvbSB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHdlZWtzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiB3ZWVrcyB0byBiZSBzdWJ0cmFjdGVkXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIHdlZWtzIHN1YnRyYWN0ZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gU3VidHJhY3QgNCB3ZWVrcyBmcm9tIDEgU2VwdGVtYmVyIDIwMTQ6XG4gKiB2YXIgcmVzdWx0ID0gc3ViV2Vla3MobmV3IERhdGUoMjAxNCwgOCwgMSksIDQpXG4gKiAvLz0+IE1vbiBBdWcgMDQgMjAxNCAwMDowMDowMFxuICovXG5mdW5jdGlvbiBzdWJXZWVrcyAoZGlydHlEYXRlLCBkaXJ0eUFtb3VudCkge1xuICB2YXIgYW1vdW50ID0gTnVtYmVyKGRpcnR5QW1vdW50KVxuICByZXR1cm4gYWRkV2Vla3MoZGlydHlEYXRlLCAtYW1vdW50KVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN1YldlZWtzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9zdWJfd2Vla3MvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDM5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgYWRkWWVhcnMgPSByZXF1aXJlKCcuLi9hZGRfeWVhcnMvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBZZWFyIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFN1YnRyYWN0IHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHllYXJzIGZyb20gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBTdWJ0cmFjdCB0aGUgc3BlY2lmaWVkIG51bWJlciBvZiB5ZWFycyBmcm9tIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgeWVhcnMgdG8gYmUgc3VidHJhY3RlZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSB5ZWFycyBzdWJ0cmFjdGVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFN1YnRyYWN0IDUgeWVhcnMgZnJvbSAxIFNlcHRlbWJlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IHN1YlllYXJzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA1KVxuICogLy89PiBUdWUgU2VwIDAxIDIwMDkgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gc3ViWWVhcnMgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudClcbiAgcmV0dXJuIGFkZFllYXJzKGRpcnR5RGF0ZSwgLWFtb3VudClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdWJZZWFyc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvc3ViX3llYXJzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIGFkZERheXMgPSByZXF1aXJlKCcuLi9hZGRfZGF5cy9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IFdlZWsgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHdlZWtzIHRvIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIHdlZWsgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBiZSBjaGFuZ2VkXG4gKiBAcGFyYW0ge051bWJlcn0gYW1vdW50IC0gdGhlIGFtb3VudCBvZiB3ZWVrcyB0byBiZSBhZGRlZFxuICogQHJldHVybnMge0RhdGV9IHRoZSBuZXcgZGF0ZSB3aXRoIHRoZSB3ZWVrcyBhZGRlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgNCB3ZWVrcyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogdmFyIHJlc3VsdCA9IGFkZFdlZWtzKG5ldyBEYXRlKDIwMTQsIDgsIDEpLCA0KVxuICogLy89PiBNb24gU2VwIDI5IDIwMTQgMDA6MDA6MDBcbiAqL1xuZnVuY3Rpb24gYWRkV2Vla3MgKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgdmFyIGFtb3VudCA9IE51bWJlcihkaXJ0eUFtb3VudClcbiAgdmFyIGRheXMgPSBhbW91bnQgKiA3XG4gIHJldHVybiBhZGREYXlzKGRpcnR5RGF0ZSwgZGF5cylcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhZGRXZWVrc1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvYWRkX3dlZWtzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgcmV2ZXJzZSBjaHJvbm9sb2dpY2FsbHkgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYWZ0ZXIgdGhlIHNlY29uZCxcbiAqIDEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY29tcGFyZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBzZWNvbmQgZGF0ZSB0byBjb21wYXJlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgcmVzdWx0IG9mIHRoZSBjb21wYXJpc29uXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIENvbXBhcmUgMTEgRmVicnVhcnkgMTk4NyBhbmQgMTAgSnVseSAxOTg5IHJldmVyc2UgY2hyb25vbG9naWNhbGx5OlxuICogdmFyIHJlc3VsdCA9IGNvbXBhcmVEZXNjKFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogKVxuICogLy89PiAxXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzIGluIHJldmVyc2UgY2hyb25vbG9naWNhbCBvcmRlcjpcbiAqIHZhciByZXN1bHQgPSBbXG4gKiAgIG5ldyBEYXRlKDE5OTUsIDYsIDIpLFxuICogICBuZXcgRGF0ZSgxOTg3LCAxLCAxMSksXG4gKiAgIG5ldyBEYXRlKDE5ODksIDYsIDEwKVxuICogXS5zb3J0KGNvbXBhcmVEZXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFN1biBKdWwgMDIgMTk5NSAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBXZWQgRmViIDExIDE5ODcgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZnVuY3Rpb24gY29tcGFyZURlc2MgKGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHZhciBkYXRlTGVmdCA9IHBhcnNlKGRpcnR5RGF0ZUxlZnQpXG4gIHZhciB0aW1lTGVmdCA9IGRhdGVMZWZ0LmdldFRpbWUoKVxuICB2YXIgZGF0ZVJpZ2h0ID0gcGFyc2UoZGlydHlEYXRlUmlnaHQpXG4gIHZhciB0aW1lUmlnaHQgPSBkYXRlUmlnaHQuZ2V0VGltZSgpXG5cbiAgaWYgKHRpbWVMZWZ0ID4gdGltZVJpZ2h0KSB7XG4gICAgcmV0dXJuIC0xXG4gIH0gZWxzZSBpZiAodGltZUxlZnQgPCB0aW1lUmlnaHQpIHtcbiAgICByZXR1cm4gMVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAwXG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjb21wYXJlRGVzY1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvY29tcGFyZV9kZXNjL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgcGFyc2UgPSByZXF1aXJlKCcuLi9wYXJzZS9pbmRleC5qcycpXG52YXIgZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMgPSByZXF1aXJlKCcuLi9kaWZmZXJlbmNlX2luX2NhbGVuZGFyX21vbnRocy9pbmRleC5qcycpXG52YXIgY29tcGFyZUFzYyA9IHJlcXVpcmUoJy4uL2NvbXBhcmVfYXNjL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgTW9udGggSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIG51bWJlciBvZiBmdWxsIG1vbnRocyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgbGF0ZXIgZGF0ZVxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVSaWdodCAtIHRoZSBlYXJsaWVyIGRhdGVcbiAqIEByZXR1cm5zIHtOdW1iZXJ9IHRoZSBudW1iZXIgb2YgZnVsbCBtb250aHNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgZnVsbCBtb250aHMgYXJlIGJldHdlZW4gMzEgSmFudWFyeSAyMDE0IGFuZCAxIFNlcHRlbWJlciAyMDE0P1xuICogdmFyIHJlc3VsdCA9IGRpZmZlcmVuY2VJbk1vbnRocyhcbiAqICAgbmV3IERhdGUoMjAxNCwgOCwgMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDAsIDMxKVxuICogKVxuICogLy89PiA3XG4gKi9cbmZ1bmN0aW9uIGRpZmZlcmVuY2VJbk1vbnRocyAoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQpIHtcbiAgdmFyIGRhdGVMZWZ0ID0gcGFyc2UoZGlydHlEYXRlTGVmdClcbiAgdmFyIGRhdGVSaWdodCA9IHBhcnNlKGRpcnR5RGF0ZVJpZ2h0KVxuXG4gIHZhciBzaWduID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KVxuICB2YXIgZGlmZmVyZW5jZSA9IE1hdGguYWJzKGRpZmZlcmVuY2VJbkNhbGVuZGFyTW9udGhzKGRhdGVMZWZ0LCBkYXRlUmlnaHQpKVxuICBkYXRlTGVmdC5zZXRNb250aChkYXRlTGVmdC5nZXRNb250aCgpIC0gc2lnbiAqIGRpZmZlcmVuY2UpXG5cbiAgLy8gTWF0aC5hYnMoZGlmZiBpbiBmdWxsIG1vbnRocyAtIGRpZmYgaW4gY2FsZW5kYXIgbW9udGhzKSA9PT0gMSBpZiBsYXN0IGNhbGVuZGFyIG1vbnRoIGlzIG5vdCBmdWxsXG4gIC8vIElmIHNvLCByZXN1bHQgbXVzdCBiZSBkZWNyZWFzZWQgYnkgMSBpbiBhYnNvbHV0ZSB2YWx1ZVxuICB2YXIgaXNMYXN0TW9udGhOb3RGdWxsID0gY29tcGFyZUFzYyhkYXRlTGVmdCwgZGF0ZVJpZ2h0KSA9PT0gLXNpZ25cbiAgcmV0dXJuIHNpZ24gKiAoZGlmZmVyZW5jZSAtIGlzTGFzdE1vbnRoTm90RnVsbClcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmZXJlbmNlSW5Nb250aHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2RpZmZlcmVuY2VfaW5fbW9udGhzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgZGlmZmVyZW5jZUluTWlsbGlzZWNvbmRzID0gcmVxdWlyZSgnLi4vZGlmZmVyZW5jZV9pbl9taWxsaXNlY29uZHMvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBTZWNvbmQgSGVscGVyc1xuICogQHN1bW1hcnkgR2V0IHRoZSBudW1iZXIgb2Ygc2Vjb25kcyBiZXR3ZWVuIHRoZSBnaXZlbiBkYXRlcy5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEdldCB0aGUgbnVtYmVyIG9mIHNlY29uZHMgYmV0d2VlbiB0aGUgZ2l2ZW4gZGF0ZXMuXG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGxhdGVyIGRhdGVcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgZWFybGllciBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgbnVtYmVyIG9mIHNlY29uZHNcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSG93IG1hbnkgc2Vjb25kcyBhcmUgYmV0d2VlblxuICogLy8gMiBKdWx5IDIwMTQgMTI6MzA6MDcuOTk5IGFuZCAyIEp1bHkgMjAxNCAxMjozMDoyMC4wMDA/XG4gKiB2YXIgcmVzdWx0ID0gZGlmZmVyZW5jZUluU2Vjb25kcyhcbiAqICAgbmV3IERhdGUoMjAxNCwgNiwgMiwgMTIsIDMwLCAyMCwgMCksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDYsIDIsIDEyLCAzMCwgNywgOTk5KVxuICogKVxuICogLy89PiAxMlxuICovXG5mdW5jdGlvbiBkaWZmZXJlbmNlSW5TZWNvbmRzIChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICB2YXIgZGlmZiA9IGRpZmZlcmVuY2VJbk1pbGxpc2Vjb25kcyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkgLyAxMDAwXG4gIHJldHVybiBkaWZmID4gMCA/IE1hdGguZmxvb3IoZGlmZikgOiBNYXRoLmNlaWwoZGlmZilcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkaWZmZXJlbmNlSW5TZWNvbmRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9kYXRlLWZucy9kaWZmZXJlbmNlX2luX3NlY29uZHMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBidWlsZERpc3RhbmNlSW5Xb3Jkc0xvY2FsZSA9IHJlcXVpcmUoJy4vYnVpbGRfZGlzdGFuY2VfaW5fd29yZHNfbG9jYWxlL2luZGV4LmpzJylcbnZhciBidWlsZEZvcm1hdExvY2FsZSA9IHJlcXVpcmUoJy4vYnVpbGRfZm9ybWF0X2xvY2FsZS9pbmRleC5qcycpXG5cbi8qKlxuICogQGNhdGVnb3J5IExvY2FsZXNcbiAqIEBzdW1tYXJ5IEVuZ2xpc2ggbG9jYWxlLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZGlzdGFuY2VJbldvcmRzOiBidWlsZERpc3RhbmNlSW5Xb3Jkc0xvY2FsZSgpLFxuICBmb3JtYXQ6IGJ1aWxkRm9ybWF0TG9jYWxlKClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2xvY2FsZS9lbi9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDM4IiwidmFyIHBhcnNlID0gcmVxdWlyZSgnLi4vcGFyc2UvaW5kZXguanMnKVxuXG4vKipcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogUmV0dXJuIHRoZSBlbmQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcmV0dXJucyB7RGF0ZX0gdGhlIGVuZCBvZiBhIGRheVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgZW5kIG9mIGEgZGF5IGZvciAyIFNlcHRlbWJlciAyMDE0IDExOjU1OjAwOlxuICogdmFyIHJlc3VsdCA9IGVuZE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAyMzo1OTo1OS45OTlcbiAqL1xuZnVuY3Rpb24gZW5kT2ZEYXkgKGRpcnR5RGF0ZSkge1xuICB2YXIgZGF0ZSA9IHBhcnNlKGRpcnR5RGF0ZSlcbiAgZGF0ZS5zZXRIb3VycygyMywgNTksIDU5LCA5OTkpXG4gIHJldHVybiBkYXRlXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZW5kT2ZEYXlcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VuZF9vZl9kYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzOCIsInZhciBwYXJzZSA9IHJlcXVpcmUoJy4uL3BhcnNlL2luZGV4LmpzJylcbnZhciBzdGFydE9mSVNPV2VlayA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX2lzb193ZWVrL2luZGV4LmpzJylcbnZhciBzdGFydE9mSVNPWWVhciA9IHJlcXVpcmUoJy4uL3N0YXJ0X29mX2lzb195ZWFyL2luZGV4LmpzJylcblxudmFyIE1JTExJU0VDT05EU19JTl9XRUVLID0gNjA0ODAwMDAwXG5cbi8qKlxuICogQGNhdGVnb3J5IElTTyBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEdldCB0aGUgSVNPIHdlZWsgb2YgdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBHZXQgdGhlIElTTyB3ZWVrIG9mIHRoZSBnaXZlbiBkYXRlLlxuICpcbiAqIElTTyB3ZWVrLW51bWJlcmluZyB5ZWFyOiBodHRwOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lTT193ZWVrX2RhdGVcbiAqXG4gKiBAcGFyYW0ge0RhdGV8U3RyaW5nfE51bWJlcn0gZGF0ZSAtIHRoZSBnaXZlbiBkYXRlXG4gKiBAcmV0dXJucyB7TnVtYmVyfSB0aGUgSVNPIHdlZWtcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gV2hpY2ggd2VlayBvZiB0aGUgSVNPLXdlZWsgbnVtYmVyaW5nIHllYXIgaXMgMiBKYW51YXJ5IDIwMDU/XG4gKiB2YXIgcmVzdWx0ID0gZ2V0SVNPV2VlayhuZXcgRGF0ZSgyMDA1LCAwLCAyKSlcbiAqIC8vPT4gNTNcbiAqL1xuZnVuY3Rpb24gZ2V0SVNPV2VlayAoZGlydHlEYXRlKSB7XG4gIHZhciBkYXRlID0gcGFyc2UoZGlydHlEYXRlKVxuICB2YXIgZGlmZiA9IHN0YXJ0T2ZJU09XZWVrKGRhdGUpLmdldFRpbWUoKSAtIHN0YXJ0T2ZJU09ZZWFyKGRhdGUpLmdldFRpbWUoKVxuXG4gIC8vIFJvdW5kIHRoZSBudW1iZXIgb2YgZGF5cyB0byB0aGUgbmVhcmVzdCBpbnRlZ2VyXG4gIC8vIGJlY2F1c2UgdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgaW4gYSB3ZWVrIGlzIG5vdCBjb25zdGFudFxuICAvLyAoZS5nLiBpdCdzIGRpZmZlcmVudCBpbiB0aGUgd2VlayBvZiB0aGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgY2xvY2sgc2hpZnQpXG4gIHJldHVybiBNYXRoLnJvdW5kKGRpZmYgLyBNSUxMSVNFQ09ORFNfSU5fV0VFSykgKyAxXG59XG5cbm1vZHVsZS5leHBvcnRzID0gZ2V0SVNPV2Vla1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZ2V0X2lzb193ZWVrL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgc3RhcnRPZldlZWsgPSByZXF1aXJlKCcuLi9zdGFydF9vZl93ZWVrL2luZGV4LmpzJylcblxuLyoqXG4gKiBAY2F0ZWdvcnkgV2VlayBIZWxwZXJzXG4gKiBAc3VtbWFyeSBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWs/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIHdlZWs/XG4gKlxuICogQHBhcmFtIHtEYXRlfFN0cmluZ3xOdW1iZXJ9IGRhdGVMZWZ0IC0gdGhlIGZpcnN0IGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7RGF0ZXxTdHJpbmd8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSB0aGUgb2JqZWN0IHdpdGggb3B0aW9uc1xuICogQHBhcmFtIHtOdW1iZXJ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2Vla1xuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKFxuICogICBuZXcgRGF0ZSgyMDE0LCA3LCAzMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDQpXG4gKiApXG4gKiAvLz0+IHRydWVcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgd2VlayBzdGFydHMgd2l0aCBNb25kYXksXG4gKiAvLyBhcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIHZhciByZXN1bHQgPSBpc1NhbWVXZWVrKFxuICogICBuZXcgRGF0ZSgyMDE0LCA3LCAzMSksXG4gKiAgIG5ldyBEYXRlKDIwMTQsIDgsIDQpLFxuICogICB7d2Vla1N0YXJ0c09uOiAxfVxuICogKVxuICogLy89PiBmYWxzZVxuICovXG5mdW5jdGlvbiBpc1NhbWVXZWVrIChkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKSB7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlPcHRpb25zKVxuICB2YXIgZGF0ZVJpZ2h0U3RhcnRPZldlZWsgPSBzdGFydE9mV2VlayhkaXJ0eURhdGVSaWdodCwgZGlydHlPcHRpb25zKVxuXG4gIHJldHVybiBkYXRlTGVmdFN0YXJ0T2ZXZWVrLmdldFRpbWUoKSA9PT0gZGF0ZVJpZ2h0U3RhcnRPZldlZWsuZ2V0VGltZSgpXG59XG5cbm1vZHVsZS5leHBvcnRzID0gaXNTYW1lV2Vla1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvaXNfc2FtZV93ZWVrL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDIgMzgiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTE4YTNjYjQ4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMThhM2NiNDhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9TaG93LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xOGEzY2I0OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE4YTNjYjQ4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSA1OThcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==