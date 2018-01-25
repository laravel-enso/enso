webpackJsonp([10],{

/***/ 1071:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1431)
/* template */
var __vue_template__ = __webpack_require__(1432)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/pages/administration/users/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3fc6a497", Component.options)
  } else {
    hotAPI.reload("data-v-3fc6a497", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1153)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1155)
/* template */
var __vue_template__ = __webpack_require__(1156)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-313ea473"
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/topControls/Dropdown.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-313ea473", Component.options)
  } else {
    hotAPI.reload("data-v-313ea473", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1140:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

/**
 * Loops through the collection and calls the callback for each element. if the callback returns truthy, the loop is broken and returns the same value.
 * @public
 * @param {*} collection The collection to loop through. Needs to have a length property set and have indices set from 0 to length - 1.
 * @param {function} callback The callback to be called for each element. The element will be given as a parameter to the callback. If this callback returns truthy, the loop is broken and the same value is returned.
 * @returns {*} The value that a callback has returned (if truthy). Otherwise nothing.
 */
utils.forEach = function(collection, callback) {
    for(var i = 0; i < collection.length; i++) {
        var result = callback(collection[i]);
        if(result) {
            return result;
        }
    }
};


/***/ }),

/***/ 1141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var detector = module.exports = {};

detector.isIE = function(version) {
    function isAnyIeVersion() {
        var agent = navigator.userAgent.toLowerCase();
        return agent.indexOf("msie") !== -1 || agent.indexOf("trident") !== -1 || agent.indexOf(" edge/") !== -1;
    }

    if(!isAnyIeVersion()) {
        return false;
    }

    if(!version) {
        return true;
    }

    //Shamelessly stolen from https://gist.github.com/padolsey/527683
    var ieVersion = (function(){
        var undef,
            v = 3,
            div = document.createElement("div"),
            all = div.getElementsByTagName("i");

        do {
            div.innerHTML = "<!--[if gt IE " + (++v) + "]><i></i><![endif]-->";
        }
        while (all[0]);

        return v > 4 ? v : undef;
    }());

    return version === ieVersion;
};

detector.isLegacyOpera = function() {
    return !!window.opera;
};


/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1144)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1146)
/* template */
var __vue_template__ = __webpack_require__(1216)
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/VueTable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1e541934", Component.options)
  } else {
    hotAPI.reload("data-v-1e541934", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1145);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("96ec5944", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e541934\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueTable.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1e541934\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.table.vue-data-table {\n    margin-bottom: 0;\n}\n.table-responsive {\n    position: relative;\n    display: block;\n    width: 100%;\n    min-height: .01%;\n    overflow-x: auto;\n}\n.table-responsive table {\n    font-size: 15px;\n}\ndiv.table-bottom-controls {\n    margin-top: .5rem;\n}\ndiv.no-records-found {\n    margin-top: 20px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/VueTable.vue"],"names":[],"mappings":";AA2XA;IACA,iBAAA;CACA;AAEA;IACA,mBAAA;IACA,eAAA;IACA,YAAA;IACA,iBAAA;IACA,iBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,kBAAA;CACA;AAEA;IACA,iBAAA;CACA","file":"VueTable.vue","sourcesContent":["<template>\n\n    <div class=\"box\"\n        v-if=\"initialised\">\n        <top-controls :template=\"template\"\n            class=\"has-padding-small has-padding-bottom-large\"\n            :i18n=\"i18n\"\n            :length=\"length\"\n            @update-length=\"length=$event\"\n            @export-data=\"exportData\"\n            @reload=\"getData()\"\n            @reset=\"resetPreferences\"\n            v-model=\"search\">\n        </top-controls>\n        <div class=\"table-responsive\"\n            v-responsive>\n            <table class=\"table is-fullwidth vue-data-table\"\n                :class=\"template.style\"\n                id=\"id\">\n                <table-header :template=\"template\"\n                    :i18n=\"i18n\"\n                    @sort-update=\"getData\">\n                </table-header>\n                <table-body :template=\"template\"\n                    v-on=\"$listeners\"\n                    :body=\"body\"\n                    :start=\"start\"\n                    :i18n=\"i18n\"\n                    :custom-render=\"customRender\"\n                    :expanded=\"expanded\"\n                    @ajax=\"ajax\"\n                    v-if=\"hasContent\">\n                </table-body>\n                <table-footer v-if=\"template.total && hasContent\"\n                    :template=\"template\"\n                    :body=\"body\"\n                    :i18n=\"i18n\">\n                </table-footer>\n            </table>\n            <overlay v-if=\"loading\"></overlay>\n        </div>\n        <div class=\"columns table-bottom-controls\"\n            v-if=\"hasContent\">\n            <div class=\"column\">\n                <records-info :body=\"body\"\n                    :i18n=\"i18n\"\n                    :start=\"start\"\n                    :length=\"length\">\n                </records-info>\n            </div>\n            <div class=\"column is-narrow has-text-right\">\n                <pagination :start=\"start\"\n                    :length=\"length\"\n                    :records=\"body.filtered\"\n                    :i18n=\"i18n\"\n                    @jump-to=\"start = $event;getData()\">\n                </pagination>\n            </div>\n        </div>\n        <div v-if=\"body && !body.count\"\n            class=\"has-text-centered no-records-found\">\n            {{ i18n('No records were found.') }}\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport { debounce } from 'lodash';\nimport TopControls from './TopControls.vue';\nimport TableHeader from './TableHeader.vue';\nimport TableBody from './TableBody.vue';\nimport TableFooter from './TableFooter.vue';\nimport RecordsInfo from './RecordsInfo.vue';\nimport Pagination from './Pagination.vue';\nimport Overlay from './Overlay.vue';\nimport vResponsive from './responsive/vResponsive';\n\nexport default {\n    name: 'VueTable',\n\n    components: {\n        TopControls, TableHeader, TableBody, TableFooter, RecordsInfo, Overlay, Pagination,\n    },\n\n    directives: {\n        responsive: vResponsive,\n    },\n\n    props: {\n        id: {\n            type: String,\n            required: true,\n        },\n        path: {\n            type: String,\n            required: true,\n        },\n        filters: {\n            type: Object,\n            default: null,\n        },\n        params: {\n            type: Object,\n            default: null,\n        },\n        intervals: {\n            type: Object,\n            default: null,\n        },\n        customRender: {\n            type: Function,\n            default: (row, column) => {\n                this.$toastr.warning(`'Custom render function is missing for column: ${column.name}'`);\n                return row[column.name];\n            },\n        },\n        i18n: {\n            type: Function,\n            default: value => value,\n        },\n    },\n\n    computed: {\n        preferencesKey() {\n            return `VueTable_${this.id}_preferences`;\n        },\n        preferences() {\n            if (!this.initialised) {\n                return null;\n            }\n\n            return {\n                global: {\n                    length: this.length,\n                    search: this.search,\n                    start: this.start,\n                },\n                template: {\n                    sort: this.template.sort,\n                    style: this.template.style,\n                    align: this.template.align,\n                },\n                columns: this.template.columns.reduce((collector, column) => {\n                    collector.push({\n                        sort: column.meta.sort,\n                        visible: column.meta.visible,\n                    });\n\n                    return collector;\n                }, []),\n            };\n        },\n        hasContent() {\n            return this.body && this.body.count;\n        },\n    },\n\n    data() {\n        return {\n            loading: false,\n            initialised: false,\n            template: null,\n            search: '',\n            start: null,\n            body: null,\n            length: null,\n            expanded: [],\n        };\n    },\n\n    watch: {\n        search: {\n            handler() {\n                this.filterUpdate();\n            },\n        },\n        filters: {\n            handler() {\n                this.filterUpdate();\n            },\n            deep: true,\n        },\n        params: {\n            handler() {\n                this.filterUpdate();\n            },\n            deep: true,\n        },\n        intervals: {\n            handler() {\n                this.filterUpdate();\n            },\n            deep: true,\n        },\n        length: {\n            handler() {\n                this.filterUpdate();\n            },\n        },\n        preferences: {\n            handler() {\n                if (this.hasContent) {\n                    this.savePreferences();\n                }\n            },\n            deep: true,\n        },\n    },\n\n    created() {\n        this.getData = debounce(this.getData, 100);\n        this.init();\n    },\n\n    methods: {\n        init() {\n            axios.get(this.path).then(({ data }) => {\n                this.template = data.template;\n                this.start = 0;\n                [this.length] = this.template.lengthMenu;\n                this.setPreferences();\n                this.getData();\n            }).catch((error) => {\n                const { status, data } = error.response;\n\n                if (status === 555) {\n                    this.$toastr.error(data.message);\n                }\n\n                this.handleError(error);\n            });\n        },\n        setPreferences() {\n            this.setDefaultPreferences();\n\n            if (localStorage.getItem(this.preferencesKey) !== null) {\n                this.setUserPreferences();\n            }\n\n            this.$nextTick(() => {\n                this.initialised = true;\n            });\n        },\n        setDefaultPreferences() {\n            this.template.columns.forEach(({ meta }) => {\n                this.$set(meta, 'sort', null);\n                this.$set(meta, 'hidden', false);\n            });\n\n            this.$set(this.template, 'sort', false);\n        },\n        setUserPreferences() {\n            const prefs = JSON.parse(localStorage.getItem(this.preferencesKey));\n\n            Object.keys(prefs.global).forEach((key) => {\n                this.$set(this, key, prefs.global[key]);\n            });\n\n            Object.keys(prefs.template).forEach((key) => {\n                this.$set(this.template, key, prefs.template[key]);\n            });\n\n            prefs.columns.forEach((column, index) => {\n                Object.keys(column).forEach((key) => {\n                    this.$set(this.template.columns[index].meta, key, column[key]);\n                });\n            });\n        },\n        savePreferences() {\n            localStorage.setItem(this.preferencesKey, JSON.stringify(this.preferences));\n        },\n        resetPreferences() {\n            localStorage.removeItem(this.preferencesKey);\n            this.search = '';\n            this.init();\n        },\n        getData() {\n            this.loading = true;\n            this.expanded = [];\n\n            axios.get(this.template.readPath, { params: this.readRequest() }).then(({ data }) => {\n                this.body = data;\n                this.loading = false;\n            }).catch((error) => {\n                this.handleError(error);\n                this.loading = false;\n            });\n        },\n        readRequest() {\n            return {\n                columns: this.requestColumns(),\n                meta: {\n                    start: this.start,\n                    length: this.length,\n                    sort: this.template.sort,\n                    total: this.template.total,\n                    enum: this.template.enum,\n                    date: this.template.date,\n                    actions: this.template.actions,\n                },\n                search: this.search,\n                appends: this.template.appends,\n                filters: this.filters,\n                intervals: this.intervals,\n                params: this.params,\n            };\n        },\n        requestColumns() {\n            return this.template.columns.reduce((columns, column) => {\n                columns.push({\n                    name: column.name,\n                    data: column.data,\n                    meta: {\n                        searchable: column.meta.searchable,\n                        sortable: column.meta.sortable,\n                        sort: column.meta.sort,\n                        total: column.meta.total,\n                        date: column.meta.date,\n                    },\n                    enum: column.enum,\n                });\n\n                return columns;\n            }, []);\n        },\n        exportData(path) {\n            axios.get(path, { params: this.exportRequest() }).then(({ data }) => {\n                this.$toastr.success(data.message);\n            }).catch((error) => {\n                const { status, data } = error.response;\n\n                if (status === 555) {\n                    this.$toastr.error(data.message);\n                }\n\n                this.handleError(error);\n            });\n        },\n        exportRequest() {\n            return {\n                name: this.template.name,\n                columns: this.template.columns,\n                meta: {\n                    start: 0,\n                    length: this.body.count,\n                    sort: this.template.sort,\n                    enum: this.template.enum,\n                    date: this.template.date,\n                    total: false,\n                },\n                search: this.search,\n                appends: this.template.appends,\n                filters: this.filters,\n                intervals: this.intervals,\n                params: this.params,\n            };\n        },\n        ajax(method, path) {\n            axios[method.toLowerCase()](path).then(({ data }) => {\n                this.$toastr.success(data.message);\n                this.getData();\n            }).catch(error => this.handleError(error));\n        },\n        filterUpdate() {\n            if (!this.initialised) {\n                return;\n            }\n\n            this.start = 0;\n            this.getData();\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .table.vue-data-table {\n        margin-bottom: 0;\n    }\n\n    .table-responsive {\n        position: relative;\n        display: block;\n        width: 100%;\n        min-height: .01%;\n        overflow-x: auto;\n    }\n\n    .table-responsive table {\n        font-size: 15px;\n    }\n\n    div.table-bottom-controls {\n        margin-top: .5rem;\n    }\n\n    div.no-records-found {\n        margin-top: 20px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TopControls_vue__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__TopControls_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__TopControls_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TableHeader_vue__ = __webpack_require__(1168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TableHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TableHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TableBody_vue__ = __webpack_require__(1173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TableBody_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TableBody_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TableFooter_vue__ = __webpack_require__(1183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TableFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TableFooter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RecordsInfo_vue__ = __webpack_require__(1188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__RecordsInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__RecordsInfo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pagination_vue__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__Pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Overlay_vue__ = __webpack_require__(1198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Overlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Overlay_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__responsive_vResponsive__ = __webpack_require__(1203);
var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _this = this;

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












/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VueTable',

    components: {
        TopControls: __WEBPACK_IMPORTED_MODULE_1__TopControls_vue___default.a, TableHeader: __WEBPACK_IMPORTED_MODULE_2__TableHeader_vue___default.a, TableBody: __WEBPACK_IMPORTED_MODULE_3__TableBody_vue___default.a, TableFooter: __WEBPACK_IMPORTED_MODULE_4__TableFooter_vue___default.a, RecordsInfo: __WEBPACK_IMPORTED_MODULE_5__RecordsInfo_vue___default.a, Overlay: __WEBPACK_IMPORTED_MODULE_7__Overlay_vue___default.a, Pagination: __WEBPACK_IMPORTED_MODULE_6__Pagination_vue___default.a
    },

    directives: {
        responsive: __WEBPACK_IMPORTED_MODULE_8__responsive_vResponsive__["a" /* default */]
    },

    props: {
        id: {
            type: String,
            required: true
        },
        path: {
            type: String,
            required: true
        },
        filters: {
            type: Object,
            default: null
        },
        params: {
            type: Object,
            default: null
        },
        intervals: {
            type: Object,
            default: null
        },
        customRender: {
            type: Function,
            default: function _default(row, column) {
                _this.$toastr.warning('\'Custom render function is missing for column: ' + column.name + '\'');
                return row[column.name];
            }
        },
        i18n: {
            type: Function,
            default: function _default(value) {
                return value;
            }
        }
    },

    computed: {
        preferencesKey: function preferencesKey() {
            return 'VueTable_' + this.id + '_preferences';
        },
        preferences: function preferences() {
            if (!this.initialised) {
                return null;
            }

            return {
                global: {
                    length: this.length,
                    search: this.search,
                    start: this.start
                },
                template: {
                    sort: this.template.sort,
                    style: this.template.style,
                    align: this.template.align
                },
                columns: this.template.columns.reduce(function (collector, column) {
                    collector.push({
                        sort: column.meta.sort,
                        visible: column.meta.visible
                    });

                    return collector;
                }, [])
            };
        },
        hasContent: function hasContent() {
            return this.body && this.body.count;
        }
    },

    data: function data() {
        return {
            loading: false,
            initialised: false,
            template: null,
            search: '',
            start: null,
            body: null,
            length: null,
            expanded: []
        };
    },


    watch: {
        search: {
            handler: function handler() {
                this.filterUpdate();
            }
        },
        filters: {
            handler: function handler() {
                this.filterUpdate();
            },

            deep: true
        },
        params: {
            handler: function handler() {
                this.filterUpdate();
            },

            deep: true
        },
        intervals: {
            handler: function handler() {
                this.filterUpdate();
            },

            deep: true
        },
        length: {
            handler: function handler() {
                this.filterUpdate();
            }
        },
        preferences: {
            handler: function handler() {
                if (this.hasContent) {
                    this.savePreferences();
                }
            },

            deep: true
        }
    },

    created: function created() {
        this.getData = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["debounce"])(this.getData, 100);
        this.init();
    },


    methods: {
        init: function init() {
            var _this2 = this;

            axios.get(this.path).then(function (_ref) {
                var data = _ref.data;

                _this2.template = data.template;
                _this2.start = 0;

                var _template$lengthMenu = _slicedToArray(_this2.template.lengthMenu, 1);

                _this2.length = _template$lengthMenu[0];

                _this2.setPreferences();
                _this2.getData();
            }).catch(function (error) {
                var _error$response = error.response,
                    status = _error$response.status,
                    data = _error$response.data;


                if (status === 555) {
                    _this2.$toastr.error(data.message);
                }

                _this2.handleError(error);
            });
        },
        setPreferences: function setPreferences() {
            var _this3 = this;

            this.setDefaultPreferences();

            if (localStorage.getItem(this.preferencesKey) !== null) {
                this.setUserPreferences();
            }

            this.$nextTick(function () {
                _this3.initialised = true;
            });
        },
        setDefaultPreferences: function setDefaultPreferences() {
            var _this4 = this;

            this.template.columns.forEach(function (_ref2) {
                var meta = _ref2.meta;

                _this4.$set(meta, 'sort', null);
                _this4.$set(meta, 'hidden', false);
            });

            this.$set(this.template, 'sort', false);
        },
        setUserPreferences: function setUserPreferences() {
            var _this5 = this;

            var prefs = JSON.parse(localStorage.getItem(this.preferencesKey));

            Object.keys(prefs.global).forEach(function (key) {
                _this5.$set(_this5, key, prefs.global[key]);
            });

            Object.keys(prefs.template).forEach(function (key) {
                _this5.$set(_this5.template, key, prefs.template[key]);
            });

            prefs.columns.forEach(function (column, index) {
                Object.keys(column).forEach(function (key) {
                    _this5.$set(_this5.template.columns[index].meta, key, column[key]);
                });
            });
        },
        savePreferences: function savePreferences() {
            localStorage.setItem(this.preferencesKey, JSON.stringify(this.preferences));
        },
        resetPreferences: function resetPreferences() {
            localStorage.removeItem(this.preferencesKey);
            this.search = '';
            this.init();
        },
        getData: function getData() {
            var _this6 = this;

            this.loading = true;
            this.expanded = [];

            axios.get(this.template.readPath, { params: this.readRequest() }).then(function (_ref3) {
                var data = _ref3.data;

                _this6.body = data;
                _this6.loading = false;
            }).catch(function (error) {
                _this6.handleError(error);
                _this6.loading = false;
            });
        },
        readRequest: function readRequest() {
            return {
                columns: this.requestColumns(),
                meta: {
                    start: this.start,
                    length: this.length,
                    sort: this.template.sort,
                    total: this.template.total,
                    enum: this.template.enum,
                    date: this.template.date,
                    actions: this.template.actions
                },
                search: this.search,
                appends: this.template.appends,
                filters: this.filters,
                intervals: this.intervals,
                params: this.params
            };
        },
        requestColumns: function requestColumns() {
            return this.template.columns.reduce(function (columns, column) {
                columns.push({
                    name: column.name,
                    data: column.data,
                    meta: {
                        searchable: column.meta.searchable,
                        sortable: column.meta.sortable,
                        sort: column.meta.sort,
                        total: column.meta.total,
                        date: column.meta.date
                    },
                    enum: column.enum
                });

                return columns;
            }, []);
        },
        exportData: function exportData(path) {
            var _this7 = this;

            axios.get(path, { params: this.exportRequest() }).then(function (_ref4) {
                var data = _ref4.data;

                _this7.$toastr.success(data.message);
            }).catch(function (error) {
                var _error$response2 = error.response,
                    status = _error$response2.status,
                    data = _error$response2.data;


                if (status === 555) {
                    _this7.$toastr.error(data.message);
                }

                _this7.handleError(error);
            });
        },
        exportRequest: function exportRequest() {
            return {
                name: this.template.name,
                columns: this.template.columns,
                meta: {
                    start: 0,
                    length: this.body.count,
                    sort: this.template.sort,
                    enum: this.template.enum,
                    date: this.template.date,
                    total: false
                },
                search: this.search,
                appends: this.template.appends,
                filters: this.filters,
                intervals: this.intervals,
                params: this.params
            };
        },
        ajax: function ajax(method, path) {
            var _this8 = this;

            axios[method.toLowerCase()](path).then(function (_ref5) {
                var data = _ref5.data;

                _this8.$toastr.success(data.message);
                _this8.getData();
            }).catch(function (error) {
                return _this8.handleError(error);
            });
        },
        filterUpdate: function filterUpdate() {
            if (!this.initialised) {
                return;
            }

            this.start = 0;
            this.getData();
        }
    }
});

/***/ }),

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1148)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1150)
/* template */
var __vue_template__ = __webpack_require__(1167)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-255b68c6"
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/TopControls.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-255b68c6", Component.options)
  } else {
    hotAPI.reload("data-v-255b68c6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1149);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("bceead80", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-255b68c6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TopControls.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-255b68c6\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TopControls.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.title .icon[data-v-255b68c6] {\n  vertical-align: text-bottom;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/TopControls.vue"],"names":[],"mappings":";AAAA;EACE,4BAA4B;CAAE","file":"TopControls.vue","sourcesContent":[".title .icon {\n  vertical-align: text-bottom; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topControls_LengthMenu_vue__ = __webpack_require__(1151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topControls_LengthMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__topControls_LengthMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topControls_ColumnVisibility_vue__ = __webpack_require__(1158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topControls_ColumnVisibility_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__topControls_ColumnVisibility_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topControls_Alignment_vue__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topControls_Alignment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__topControls_Alignment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topControls_StyleSelector_vue__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topControls_StyleSelector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__topControls_StyleSelector_vue__);
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









__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_8" /* faSync */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_14" /* faUndo */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_1" /* faSearch */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'TopControls',

    components: {
        LengthMenu: __WEBPACK_IMPORTED_MODULE_2__topControls_LengthMenu_vue___default.a, ColumnVisibility: __WEBPACK_IMPORTED_MODULE_3__topControls_ColumnVisibility_vue___default.a, Alignment: __WEBPACK_IMPORTED_MODULE_4__topControls_Alignment_vue___default.a, StyleSelector: __WEBPACK_IMPORTED_MODULE_5__topControls_StyleSelector_vue___default.a
    },

    props: {
        template: {
            type: Object,
            required: true
        },
        length: {
            type: Number,
            required: true
        },
        i18n: {
            type: Function,
            required: true
        },
        value: {
            type: String,
            required: true
        }
    },

    data: function data() {
        return {
            lengthMenu: false,
            columnVisibility: false
        };
    },


    methods: {
        doAction: function doAction(button) {
            this.$emit(button.event);

            if (button.action === 'export') {
                this.$emit('export-data', button.path);
                return;
            }

            if (button.action === 'router') {
                this.$router.push({ name: button.route });
            }
        }
    }
});

/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1152)
/* template */
var __vue_template__ = __webpack_require__(1157)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/topControls/LengthMenu.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-47690d47", Component.options)
  } else {
    hotAPI.reload("data-v-47690d47", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__);
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




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'LengthMenu',

    components: { Dropdown: __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue___default.a },

    props: {
        template: {
            type: Object,
            required: true
        },
        length: {
            type: Number,
            required: true
        }
    }
});

/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1154);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("207679ae", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-313ea473\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dropdown.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-313ea473\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Dropdown.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1154:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.dropdown-menu[data-v-313ea473] {\n  min-width: unset;\n}\n.dropdown-menu .dropdown-content[data-v-313ea473] {\n    min-width: unset;\n    overflow-y: auto;\n}\n.dropdown-menu .dropdown-content a.dropdown-item[data-v-313ea473] {\n      padding: .375rem 1rem;\n}\n.icon.angle[data-v-313ea473] {\n  -webkit-transition: -webkit-transform .300s ease;\n  transition: -webkit-transform .300s ease;\n  transition: transform .300s ease;\n  transition: transform .300s ease, -webkit-transform .300s ease;\n}\n.icon.angle[aria-hidden=\"true\"][data-v-313ea473] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/topControls/Dropdown.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;CAAE;AACnB;IACE,iBAAiB;IACjB,iBAAiB;CAAE;AACnB;MACE,sBAAsB;CAAE;AAE9B;EACE,iDAAiC;EAAjC,yCAAiC;EAAjC,iCAAiC;EAAjC,+DAAiC;CAAE;AACnC;IACE,kCAA0B;YAA1B,0BAA0B;CAAE","file":"Dropdown.vue","sourcesContent":[".dropdown-menu {\n  min-width: unset; }\n  .dropdown-menu .dropdown-content {\n    min-width: unset;\n    overflow-y: auto; }\n    .dropdown-menu .dropdown-content a.dropdown-item {\n      padding: .375rem 1rem; }\n\n.icon.angle {\n  transition: transform .300s ease; }\n  .icon.angle[aria-hidden=\"true\"] {\n    transform: rotate(180deg); }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_v_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(11);
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






__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["h" /* faAngleDown */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Dropdown',

    directives: {
        clickOutside: __WEBPACK_IMPORTED_MODULE_0_v_click_outside___default.a.directive
    },

    props: {
        width: {
            type: Number,
            default: 64
        },
        height: {
            type: Number,
            default: 200
        }
    },

    computed: {
        widthStyle: function widthStyle() {
            return {
                'min-width': this.width + 'px'
            };
        },
        heightStyle: function heightStyle() {
            return {
                'max-height': this.height + 'px'
            };
        }
    },

    data: function data() {
        return {
            show: false
        };
    },


    methods: {
        hide: function hide() {
            this.show = false;
        }
    }
});

/***/ }),

/***/ 1156:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "click-outside",
          rawName: "v-click-outside",
          value: _vm.hide,
          expression: "hide"
        }
      ],
      staticClass: "dropdown",
      class: { "is-active": _vm.show }
    },
    [
      _c(
        "div",
        {
          staticClass: "dropdown-trigger",
          on: {
            click: function($event) {
              _vm.show = !_vm.show
            }
          }
        },
        [
          _c(
            "button",
            {
              staticClass: "button",
              attrs: {
                "aria-haspopup": "true",
                "aria-controls": "dropdown-menu"
              }
            },
            [
              _vm._t("label"),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "icon is-small angle",
                  attrs: { "aria-hidden": !_vm.show }
                },
                [_c("fa", { attrs: { icon: "angle-down" } })],
                1
              )
            ],
            2
          )
        ]
      ),
      _vm._v(" "),
      _vm.show
        ? _c(
            "div",
            {
              staticClass: "dropdown-menu animated",
              class: { fadeIn: _vm.show, fadeOut: !_vm.show },
              style: _vm.widthStyle,
              attrs: { role: "menu" }
            },
            [
              _c(
                "div",
                {
                  staticClass: "dropdown-content has-text-centered",
                  style: [_vm.widthStyle, _vm.heightStyle]
                },
                [_vm._t("default")],
                2
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-313ea473", module.exports)
  }
}

/***/ }),

/***/ 1157:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "dropdown",
    [
      _c("span", { attrs: { slot: "label" }, slot: "label" }, [
        _vm._v("\n        " + _vm._s(_vm.length) + "\n    ")
      ]),
      _vm._v(" "),
      _vm._l(_vm.template.lengthMenu, function(value, index) {
        return _c(
          "a",
          {
            key: index,
            staticClass: "dropdown-item",
            class: { "is-active": value === _vm.length },
            on: {
              click: function($event) {
                _vm.$emit("update-length", value)
              }
            }
          },
          [_vm._v("\n        " + _vm._s(value) + "\n    ")]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-47690d47", module.exports)
  }
}

/***/ }),

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1159)
/* template */
var __vue_template__ = __webpack_require__(1160)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/topControls/ColumnVisibility.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d3481ea", Component.options)
  } else {
    hotAPI.reload("data-v-4d3481ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dropdown_vue__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Dropdown_vue__);
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






__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["H" /* faEye */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ColumnVisibility',

    components: { Dropdown: __WEBPACK_IMPORTED_MODULE_2__Dropdown_vue___default.a },

    props: {
        template: {
            type: Object,
            required: true
        }
    }
});

/***/ }),

/***/ 1160:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "dropdown",
    [
      _c(
        "span",
        {
          staticClass: "icon is-small",
          attrs: { slot: "label" },
          slot: "label"
        },
        [_c("fa", { attrs: { icon: "eye" } })],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.template.columns, function(column, index) {
        return _c(
          "a",
          {
            key: index,
            staticClass: "dropdown-item",
            class: { "is-active": column.meta.visible },
            on: {
              click: function($event) {
                column.meta.visible = !column.meta.visible
                _vm.$emit("update-visibility")
              }
            }
          },
          [_vm._v("\n        " + _vm._s(column.label) + "\n    ")]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d3481ea", module.exports)
  }
}

/***/ }),

/***/ 1161:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1162)
/* template */
var __vue_template__ = __webpack_require__(1163)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/topControls/Alignment.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-2f6555f1", Component.options)
  } else {
    hotAPI.reload("data-v-2f6555f1", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dropdown_vue__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Dropdown_vue__);
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






__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["d" /* faAlignJustify */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["c" /* faAlignCenter */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["e" /* faAlignLeft */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["f" /* faAlignRight */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Alignment',

    components: { Dropdown: __WEBPACK_IMPORTED_MODULE_2__Dropdown_vue___default.a },

    props: {
        template: {
            type: Object,
            required: true
        }
    },

    data: function data() {
        return {
            icons: {
                center: __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["c" /* faAlignCenter */],
                left: __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["e" /* faAlignLeft */],
                right: __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["f" /* faAlignRight */]
            }
        };
    },


    methods: {
        updateColumnVisibility: function updateColumnVisibility(column) {
            column.meta.visible = !column.meta.visible;
            this.$emit('update-column-visibility');
        }
    }
});

/***/ }),

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "dropdown",
    [
      _c(
        "span",
        {
          staticClass: "icon is-small",
          attrs: { slot: "label" },
          slot: "label"
        },
        [_c("fa", { attrs: { icon: "align-justify" } })],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.template.aligns, function(value, key) {
        return _c(
          "a",
          {
            key: key,
            staticClass: "dropdown-item",
            class: { "is-active": _vm.template.align === value },
            on: {
              click: function($event) {
                _vm.template.align = value
              }
            }
          },
          [
            _c(
              "span",
              { staticClass: "icon is-small" },
              [_c("fa", { attrs: { icon: _vm.icons[key] } })],
              1
            )
          ]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f6555f1", module.exports)
  }
}

/***/ }),

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1165)
/* template */
var __vue_template__ = __webpack_require__(1166)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/topControls/StyleSelector.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8aab6184", Component.options)
  } else {
    hotAPI.reload("data-v-8aab6184", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dropdown_vue__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dropdown_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Dropdown_vue__);
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






__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_9" /* faTable */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'StyleSelector',

    components: { Dropdown: __WEBPACK_IMPORTED_MODULE_2__Dropdown_vue___default.a },

    props: {
        template: {
            type: Object,
            required: true
        }
    },

    computed: {
        styles: function styles() {
            return this.template.style.split(' ');
        }
    },

    methods: {
        has: function has(style) {
            return this.styles.includes(style);
        },
        toggle: function toggle(style) {
            this.template.style = this.has(style) ? this.styles.filter(function (value) {
                return value !== style;
            }).join(' ') : this.template.style + ' ' + style;
        }
    }
});

/***/ }),

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "dropdown",
    { staticClass: "is-right" },
    [
      _c(
        "span",
        {
          staticClass: "icon is-small",
          attrs: { slot: "label" },
          slot: "label"
        },
        [_c("fa", { attrs: { icon: "table" } })],
        1
      ),
      _vm._v(" "),
      _vm._l(_vm.template.styles, function(style, key) {
        return _c(
          "a",
          {
            key: key,
            staticClass: "dropdown-item",
            class: { "is-active": _vm.has(style) },
            on: {
              click: function($event) {
                _vm.toggle(style)
              }
            }
          },
          [_vm._v("\n        " + _vm._s(key) + "\n    ")]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8aab6184", module.exports)
  }
}

/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { staticClass: "columns is-multiline" }, [
      _c(
        "div",
        { staticClass: "column has-padding-small is-half is-hidden-mobile" },
        [
          _c("h5", { staticClass: "title is-5" }, [
            _c(
              "span",
              { staticClass: "icon" },
              [_c("fa", { attrs: { icon: _vm.template.icon } })],
              1
            ),
            _vm._v(
              "\n                " +
                _vm._s(_vm.i18n(_vm.template.name)) +
                "\n            "
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "column has-padding-small is-half has-text-right-tablet has-text-centered-mobile"
        },
        _vm._l(_vm.template.buttons.global, function(button) {
          return _c(
            "button",
            {
              key: button.label,
              staticClass: "button has-margin-left-small",
              class: button.class,
              attrs: { href: button.action === "href" ? button.path : null },
              on: {
                click: function($event) {
                  _vm.doAction(button)
                }
              }
            },
            [
              _c("span", [_vm._v(_vm._s(_vm.i18n(button.label)))]),
              _vm._v(" "),
              _c(
                "span",
                { staticClass: "icon is-small" },
                [_c("fa", { attrs: { icon: button.icon } })],
                1
              )
            ]
          )
        })
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "column has-padding-small is-two-thirds-desktop has-text-centered-mobile"
        },
        [
          _c(
            "length-menu",
            _vm._g(
              { attrs: { template: _vm.template, length: _vm.length } },
              _vm.$listeners
            )
          ),
          _vm._v(" "),
          _c(
            "column-visibility",
            _vm._g({ attrs: { template: _vm.template } }, _vm.$listeners)
          ),
          _vm._v(" "),
          _c("style-selector", { attrs: { template: _vm.template } }),
          _vm._v(" "),
          _c("alignment", { attrs: { template: _vm.template } }),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button",
              on: {
                click: function($event) {
                  _vm.$emit("reload")
                }
              }
            },
            [
              _c(
                "span",
                { staticClass: "icon is-small" },
                [_c("fa", { attrs: { icon: "sync" } })],
                1
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "button",
            {
              staticClass: "button",
              on: {
                click: function($event) {
                  _vm.$emit("reset")
                }
              }
            },
            [
              _c(
                "span",
                { staticClass: "icon is-small" },
                [_c("fa", { attrs: { icon: "undo" } })],
                1
              )
            ]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "column has-padding-small is-one-third-desktop has-text-right"
        },
        [
          _c("p", { staticClass: "control has-icons-left" }, [
            _c("input", {
              staticClass: "input table-search-input has-text-centered",
              attrs: { type: "search", placeholder: _vm.i18n("Search") },
              domProps: { value: _vm.value },
              on: {
                input: function($event) {
                  _vm.$emit("input", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "icon is-small is-left" },
              [_c("fa", { attrs: { icon: "search" } })],
              1
            )
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-255b68c6", module.exports)
  }
}

/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1169)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1171)
/* template */
var __vue_template__ = __webpack_require__(1172)
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/TableHeader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-706cd726", Component.options)
  } else {
    hotAPI.reload("data-v-706cd726", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1169:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1170);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("d0bbf05e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-706cd726\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableHeader.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-706cd726\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableHeader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nth.vue-table-header {\n  white-space: nowrap;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.table-header-controls .sorter {\n  cursor: pointer;\n  opacity: 0.5;\n}\n.table-header-controls .sorter:hover {\n    opacity: 1;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/TableHeader.vue"],"names":[],"mappings":";AAAA;EACE,oBAAoB;EACpB,2BAAsB;MAAtB,sBAAsB;CAAE;AAE1B;EACE,gBAAgB;EAChB,aAAa;CAAE;AACf;IACE,WAAW;CAAE","file":"TableHeader.vue","sourcesContent":["th.vue-table-header {\n  white-space: nowrap;\n  align-content: center; }\n\n.table-header-controls .sorter {\n  cursor: pointer;\n  opacity: 0.5; }\n  .table-header-controls .sorter:hover {\n    opacity: 1; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(11);
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





__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_4" /* faSort */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_6" /* faSortUp */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_5" /* faSortDown */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Header',

    props: {
        template: {
            type: Object,
            required: true
        },
        i18n: {
            type: Function,
            required: true
        }
    },

    methods: {
        sortIcon: function sortIcon(sort) {
            if (!sort) return __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_4" /* faSort */];

            return sort === 'ASC' ? __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_6" /* faSortUp */] : __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_5" /* faSortDown */];
        },
        toggleSort: function toggleSort(event, _ref) {
            var meta = _ref.meta;
            var sort = meta.sort;


            if (!event.shiftKey) {
                this.clearSort();
            }

            meta.sort = sort === 'ASC' ? 'DESC' : 'ASC';
            this.template.sort = true;
            this.$emit('sort-update');
        },
        clearColumnSort: function clearColumnSort(_ref2) {
            var meta = _ref2.meta;

            meta.sort = null;

            if (!this.template.columns.find(function (column) {
                return column.meta.sort !== null;
            })) {
                this.template.sort = false;
            }

            this.$emit('sort-update');
        },
        clearSort: function clearSort() {
            this.template.columns.forEach(function (_ref3) {
                var meta = _ref3.meta;

                meta.sort = null;
            });
        }
    }
});

/***/ }),

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("thead", [
    _c(
      "tr",
      { class: _vm.template.style },
      [
        _vm.template.crtNo
          ? _c("th", { class: _vm.template.align }, [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.i18n(_vm.template.labels.crtNo)) +
                  "\n        "
              )
            ])
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.template.columns, function(column) {
          return column.meta.visible && !column.meta.hidden
            ? _c(
                "th",
                {
                  key: column.label,
                  staticClass: "vue-table-header",
                  class: _vm.template.align
                },
                [
                  _c("span", [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.i18n(column.label)) +
                        "\n                "
                    ),
                    _c("span", { staticClass: "table-header-controls" }, [
                      column.meta.sortable
                        ? _c(
                            "span",
                            {
                              staticClass: "sorter",
                              on: {
                                click: function($event) {
                                  _vm.toggleSort($event, column)
                                }
                              }
                            },
                            [
                              _c(
                                "span",
                                { staticClass: "icon is-small" },
                                [
                                  _c("fa", {
                                    attrs: {
                                      icon: _vm.sortIcon(column.meta.sort),
                                      size: "xs"
                                    }
                                  })
                                ],
                                1
                              )
                            ]
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      column.meta.sort
                        ? _c("a", {
                            staticClass: "delete is-small",
                            on: {
                              click: function($event) {
                                _vm.clearColumnSort(column)
                              }
                            }
                          })
                        : _vm._e()
                    ])
                  ])
                ]
              )
            : _vm._e()
        }),
        _vm._v(" "),
        _vm.template.actions
          ? _c("th", { class: _vm.template.align }, [
              _vm._v(
                "\n            " +
                  _vm._s(_vm.i18n(_vm.template.labels.actions)) +
                  "\n        "
              )
            ])
          : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-706cd726", module.exports)
  }
}

/***/ }),

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1174)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1176)
/* template */
var __vue_template__ = __webpack_require__(1182)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-5dbfa9fc"
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/TableBody.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5dbfa9fc", Component.options)
  } else {
    hotAPI.reload("data-v-5dbfa9fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("a6056d04", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5dbfa9fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableBody.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5dbfa9fc\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableBody.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1175:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\ndiv.table-crt-no[data-v-5dbfa9fc] {\n  white-space: nowrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\ndiv.table-crt-no .crt-no-label[data-v-5dbfa9fc] {\n    margin: auto;\n}\ndiv.table-crt-no .hidden-controls[data-v-5dbfa9fc] {\n    cursor: pointer;\n    margin-left: auto;\n    margin-top: 0.1em;\n}\ntd.table-actions[data-v-5dbfa9fc] {\n  padding: .35em .5em;\n}\ntd.table-actions span.table-action-buttons[data-v-5dbfa9fc] {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\ntd.table-actions .button.is-small.is-table-button[data-v-5dbfa9fc] {\n    height: 1.6em;\n    width: 1.6em;\n    font-size: .9em;\n}\nli.child-row[data-v-5dbfa9fc]:not(:last-child) {\n  border-bottom: 1px solid #efefef;\n}\nli.child-row[data-v-5dbfa9fc] {\n  padding: 0.5em 0;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/TableBody.vue"],"names":[],"mappings":";AAAA;EACE,oBAAoB;EACpB,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAAE;AAChB;IACE,aAAa;CAAE;AACjB;IACE,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;CAAE;AAExB;EACE,oBAAoB;CAAE;AACtB;IACE,4BAAqB;IAArB,4BAAqB;IAArB,qBAAqB;CAAE;AACzB;IACE,cAAc;IACd,aAAa;IACb,gBAAgB;CAAE;AAEtB;EACE,iCAAiC;CAAE;AAErC;EACE,iBAAiB;CAAE","file":"TableBody.vue","sourcesContent":["div.table-crt-no {\n  white-space: nowrap;\n  display: flex; }\n  div.table-crt-no .crt-no-label {\n    margin: auto; }\n  div.table-crt-no .hidden-controls {\n    cursor: pointer;\n    margin-left: auto;\n    margin-top: 0.1em; }\n\ntd.table-actions {\n  padding: .35em .5em; }\n  td.table-actions span.table-action-buttons {\n    display: inline-flex; }\n  td.table-actions .button.is-small.is-table-button {\n    height: 1.6em;\n    width: 1.6em;\n    font-size: .9em; }\n\nli.child-row:not(:last-child) {\n  border-bottom: 1px solid #efefef; }\n\nli.child-row {\n  padding: 0.5em 0; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Modal_vue__);
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






__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["U" /* faMinusSquare */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["Z" /* faPlusSquare */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'TableBody',

    components: { Modal: __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default.a },

    props: {
        template: {
            type: Object,
            required: true
        },
        body: {
            type: Object,
            required: true
        },
        i18n: {
            type: Function,
            required: true
        },
        customRender: {
            type: Function,
            required: true
        },
        start: {
            type: Number,
            required: true
        },
        expanded: {
            type: Array,
            required: true
        }
    },

    computed: {
        hiddenColumns: function hiddenColumns() {
            return this.template.columns.filter(function (column) {
                return column.meta.hidden && column.meta.visible;
            });
        },
        hiddenCount: function hiddenCount() {
            return this.hiddenColumns.length;
        },
        hiddenColSpan: function hiddenColSpan() {
            return this.template.columns.length - this.hiddenColumns.length + (this.template.actions ? 2 : 1);
        }
    },

    data: function data() {
        return {
            modal: false,
            row: null,
            button: null
        };
    },


    watch: {
        hiddenCount: {
            handler: function handler(newVal) {
                if (!newVal) {
                    this.removeChilds();
                }
            }
        }
    },

    methods: {
        getPath: function getPath(button, dtRowId) {
            return button.path.replace('dtRowId', dtRowId);
        },
        showModal: function showModal(button, row) {
            this.row = row;
            this.button = button;
            this.modal = true;
        },
        closeModal: function closeModal() {
            this.modal = false;
            this.row = null;
            this.button = null;
        },
        doAction: function doAction(button, row) {
            if (this.modal) {
                this.modal = false;
            }

            if (button.event) {
                this.$emit(button.event, row);
            }

            if (button.action === 'ajax') {
                this.$emit('ajax', button.method, this.getPath(button, row.dtRowId));
                return;
            }

            if (button.action === 'router') {
                this.$router.push({ name: button.route, params: this.getRouteParams(button, row) });
            }
        },
        getRouteParams: function getRouteParams(button, row) {
            var params = {
                id: row.dtRowId
            };

            if (button.params) {
                return Object.assign(params, button.params);
            }

            return params;
        },
        getIndex: function getIndex(row) {
            var _this = this;

            return this.body.data.filter(function (r) {
                return !_this.isChild(r);
            }).findIndex(function (r) {
                return r.dtRowId === row.dtRowId;
            }) + this.start + 1;
        },
        isExpanded: function isExpanded(row) {
            return this.expanded.includes(row.dtRowId);
        },
        isChild: function isChild(row) {
            return Array.isArray(row);
        },
        toggleExpand: function toggleExpand(row, index) {
            if (!this.isExpanded(row)) {
                this.expanded.push(row.dtRowId);
                this.addChildRow(row, index);
                return;
            }

            var idx = this.expanded.findIndex(function (id) {
                return id === row.dtRowId;
            });
            this.expanded.splice(idx, 1);
            this.body.data.splice(index + 1, 1);
        },
        addChildRow: function addChildRow(row, index) {
            var newRow = this.hiddenColumns.reduce(function (collector, column) {
                collector.push({ label: column.label, value: row[column.name] });
                return collector;
            }, []);

            this.body.data.splice(index + 1, 0, newRow);
        },
        removeChilds: function removeChilds() {
            var _this2 = this;

            var indexes = [];

            this.body.data.forEach(function (row, index) {
                if (_this2.isChild(row)) {
                    indexes.push(index);
                }
            });

            indexes.sort(function (a, b) {
                return a < b;
            }).forEach(function (index) {
                return _this2.body.data.splice(index, 1);
            });

            this.expanded.splice(0);
        }
    }
});

/***/ }),

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1178)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1180)
/* template */
var __vue_template__ = __webpack_require__(1181)
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/Modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-446c799f", Component.options)
  } else {
    hotAPI.reload("data-v-446c799f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1179);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("ff5e213e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-446c799f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-446c799f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.modal.is-active {\n    z-index: 10;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/Modal.vue"],"names":[],"mappings":";AAwDA;IACA,YAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n\n    <transition enter-active-class=\"animated fadeIn\"\n        leave-active-class=\"animated fadeOut\">\n        <div :class=\"['modal', { 'is-active': show }]\">\n            <div class=\"modal-background\"></div>\n            <div class=\"modal-content\">\n                <div class=\"box\">\n                    <h5 class=\"subtitle is-5\">\n                        {{ i18n(message || \"Are you sure that you want to perform this action?\") }}\n                    </h5>\n                    <hr>\n                    <div class=\"level\">\n                        <div class=\"level-left\"></div>\n                        <div class=\"level-right\">\n                            <div class=\"level-item\">\n                                <button class=\"button is-success\"\n                                    @click=\"$emit('cancel')\">\n                                    {{ i18n(\"Cancel\") }}\n                                </button>\n                                <button class=\"button is-danger has-margin-left-small\"\n                                    @click=\"$emit('commit')\">\n                                    {{ i18n(\"Yes\") }}\n                                </button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </transition>\n\n</template>\n\n<script>\n\nexport default {\n    props: {\n        show: {\n            type: Boolean,\n            required: true,\n        },\n        message: {\n            type: String,\n            default: null,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .modal.is-active {\n        z-index: 10;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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


/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        show: {
            type: Boolean,
            required: true
        },
        message: {
            type: String,
            default: null
        },
        i18n: {
            type: Function,
            required: true
        }
    }
});

/***/ }),

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "transition",
    {
      attrs: {
        "enter-active-class": "animated fadeIn",
        "leave-active-class": "animated fadeOut"
      }
    },
    [
      _c("div", { class: ["modal", { "is-active": _vm.show }] }, [
        _c("div", { staticClass: "modal-background" }),
        _vm._v(" "),
        _c("div", { staticClass: "modal-content" }, [
          _c("div", { staticClass: "box" }, [
            _c("h5", { staticClass: "subtitle is-5" }, [
              _vm._v(
                "\n                    " +
                  _vm._s(
                    _vm.i18n(
                      _vm.message ||
                        "Are you sure that you want to perform this action?"
                    )
                  ) +
                  "\n                "
              )
            ]),
            _vm._v(" "),
            _c("hr"),
            _vm._v(" "),
            _c("div", { staticClass: "level" }, [
              _c("div", { staticClass: "level-left" }),
              _vm._v(" "),
              _c("div", { staticClass: "level-right" }, [
                _c("div", { staticClass: "level-item" }, [
                  _c(
                    "button",
                    {
                      staticClass: "button is-success",
                      on: {
                        click: function($event) {
                          _vm.$emit("cancel")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.i18n("Cancel")) +
                          "\n                            "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "button",
                    {
                      staticClass: "button is-danger has-margin-left-small",
                      on: {
                        click: function($event) {
                          _vm.$emit("commit")
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                                " +
                          _vm._s(_vm.i18n("Yes")) +
                          "\n                            "
                      )
                    ]
                  )
                ])
              ])
            ])
          ])
        ])
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
    require("vue-hot-reload-api")      .rerender("data-v-446c799f", module.exports)
  }
}

/***/ }),

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "tbody",
    [
      _vm._l(_vm.body.data, function(row, index) {
        return _c(
          "tr",
          { key: index },
          [
            _vm.template.crtNo && !_vm.isChild(row)
              ? _c("td", { class: _vm.template.align }, [
                  _c("div", { staticClass: "table-crt-no" }, [
                    _c("span", { staticClass: "crt-no-label" }, [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.getIndex(row)) +
                          "\n                "
                      )
                    ]),
                    _vm._v(" "),
                    _vm.hiddenCount
                      ? _c(
                          "span",
                          {
                            staticClass: "hidden-controls",
                            on: {
                              click: function($event) {
                                _vm.toggleExpand(row, index)
                              }
                            }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "icon is-small" },
                              [
                                _c("fa", {
                                  attrs: {
                                    icon: _vm.isExpanded(row)
                                      ? "minus-square"
                                      : "plus-square"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      : _vm._e()
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.template.columns, function(column, index) {
              return column.meta.visible &&
                !column.meta.hidden &&
                !_vm.isChild(row)
                ? _c("td", { key: index, class: _vm.template.align }, [
                    column.meta.boolean
                      ? _c(
                          "span",
                          {
                            staticClass: "tag is-table-tag",
                            class: row[column.name] ? "is-success" : "is-danger"
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "icon is-small" },
                              [
                                _c("fa", {
                                  attrs: {
                                    icon: row[column.name] ? "check" : "times"
                                  }
                                })
                              ],
                              1
                            )
                          ]
                        )
                      : column.meta.render
                        ? _c("span", {
                            domProps: {
                              innerHTML: _vm._s(_vm.customRender(row, column))
                            }
                          })
                        : column.meta.translation
                          ? _c("span", [
                              _vm._v(_vm._s(_vm.i18n(row[column.name])))
                            ])
                          : _c("span", [_vm._v(_vm._s(row[column.name]))])
                  ])
                : _vm._e()
            }),
            _vm._v(" "),
            _vm.template.actions && !_vm.isChild(row)
              ? _c(
                  "td",
                  { staticClass: "table-actions", class: _vm.template.align },
                  [
                    _c(
                      "span",
                      { staticClass: "table-action-buttons" },
                      _vm._l(_vm.template.buttons.row, function(button, index) {
                        return _c(
                          "a",
                          {
                            key: index,
                            staticClass:
                              "button is-small is-table-button has-margin-left-small",
                            class: button.class,
                            attrs: {
                              href:
                                button.action === "href"
                                  ? _vm.getPath(button, row.dtRowId)
                                  : null
                            },
                            on: {
                              click: function($event) {
                                button.confirmation
                                  ? _vm.showModal(button, row)
                                  : _vm.doAction(button, row)
                              }
                            }
                          },
                          [
                            _c(
                              "span",
                              { staticClass: "icon is-small" },
                              [_c("fa", { attrs: { icon: button.icon } })],
                              1
                            )
                          ]
                        )
                      })
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isChild(row)
              ? _c(
                  "td",
                  {
                    class: _vm.template.align,
                    attrs: { colspan: _vm.hiddenColSpan }
                  },
                  [
                    _c(
                      "ul",
                      _vm._l(row, function(column) {
                        return _c(
                          "li",
                          { key: column.label, staticClass: "child-row" },
                          [
                            _c("b", [_vm._v(_vm._s(column.label))]),
                            _vm._v(
                              ": " + _vm._s(column.value) + "\n                "
                            )
                          ]
                        )
                      })
                    )
                  ]
                )
              : _vm._e()
          ],
          2
        )
      }),
      _vm._v(" "),
      _vm.modal
        ? _c("modal", {
            attrs: {
              show: _vm.modal,
              i18n: _vm.i18n,
              message: _vm.button.message
            },
            on: {
              cancel: function($event) {
                _vm.closeModal()
              },
              commit: function($event) {
                _vm.doAction(_vm.button, _vm.row)
              }
            }
          })
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5dbfa9fc", module.exports)
  }
}

/***/ }),

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1184)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1186)
/* template */
var __vue_template__ = __webpack_require__(1187)
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/TableFooter.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b2d19f0a", Component.options)
  } else {
    hotAPI.reload("data-v-b2d19f0a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1185);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("414a3a78", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b2d19f0a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableFooter.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-b2d19f0a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableFooter.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1185:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"TableFooter.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'TableFooter',

    props: {
        template: {
            type: Object,
            required: true
        },
        body: {
            type: Object,
            required: true
        },
        i18n: {
            type: Function,
            required: true
        }
    },

    methods: {
        numberFormat: function numberFormat(value) {
            var x = value.toString().split('.');
            var x1 = x[0];
            var x2 = x.length > 1 ? '.' + x[1] : '';
            var rgx = /(\d+)(\d{3})/;

            while (rgx.test(x1)) {
                x1 = x1.replace(rgx, '$1,$2');
            }

            return x1 + x2;
        }
    }
});

/***/ }),

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("tfoot", [
    _c(
      "tr",
      [
        _c("td"),
        _vm._v(" "),
        _vm.template.columns[0].meta.visible &&
        !_vm.template.columns[0].meta.hidden
          ? _c(
              "td",
              { staticClass: "has-text-centered has-text-weight-bold" },
              [
                _vm._v(
                  "\n            " + _vm._s(_vm.i18n("Total")) + "\n        "
                )
              ]
            )
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.template.columns.length - 1, function(i) {
          return _vm.template.columns[i].meta.visible &&
            !_vm.template.columns[i].meta.hidden
            ? _c(
                "td",
                {
                  key: i,
                  staticClass: "has-text-centered has-text-weight-bold"
                },
                [
                  _vm.template.columns[i].meta.total
                    ? _c("span", [
                        _vm._v(
                          "\n                " +
                            _vm._s(
                              _vm.numberFormat(
                                _vm.body.total[_vm.template.columns[i].name]
                              )
                            ) +
                            "\n            "
                        )
                      ])
                    : _vm._e()
                ]
              )
            : _vm._e()
        }),
        _vm._v(" "),
        _vm.template.actions ? _c("td") : _vm._e()
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b2d19f0a", module.exports)
  }
}

/***/ }),

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1189)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1191)
/* template */
var __vue_template__ = __webpack_require__(1192)
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/RecordsInfo.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-59f21002", Component.options)
  } else {
    hotAPI.reload("data-v-59f21002", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1189:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1190);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3e55b7da", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59f21002\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RecordsInfo.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-59f21002\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./RecordsInfo.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1190:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.table-entries-info {\n    font-size: 15px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/RecordsInfo.vue"],"names":[],"mappings":";AAyCA;IACA,gBAAA;CACA","file":"RecordsInfo.vue","sourcesContent":["<template>\n\n    <span class=\"table-entries-info\">\n        {{ `${i18n('From')} ${start + 1} ${i18n('to')} ${(start + length) <= body.filtered ? start + length : body.filtered} \\\n        ${i18n('of')} ${body.filtered} ${i18n('entries')}` }}\n        <span v-if=\"body.filtered !== body.count\">\n            {{ `(${i18n('filtered')} ${i18n('from')} ${body.count} \\\n            ${i18n('total')} ${i18n('records')})` }}\n        </span>\n    </span>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'RecordsInfo',\n\n    props: {\n        start: {\n            type: Number,\n            required: true,\n        },\n        length: {\n            type: Number,\n            required: true,\n        },\n        body: {\n            type: Object,\n            required: true,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .table-entries-info {\n        font-size: 15px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'RecordsInfo',

    props: {
        start: {
            type: Number,
            required: true
        },
        length: {
            type: Number,
            required: true
        },
        body: {
            type: Object,
            required: true
        },
        i18n: {
            type: Function,
            required: true
        }
    }
});

/***/ }),

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", { staticClass: "table-entries-info" }, [
    _vm._v(
      "\n    " +
        _vm._s(
          _vm.i18n("From") +
            " " +
            (_vm.start + 1) +
            " " +
            _vm.i18n("to") +
            " " +
            (_vm.start + _vm.length <= _vm.body.filtered
              ? _vm.start + _vm.length
              : _vm.body.filtered) +
            "     " +
            _vm.i18n("of") +
            " " +
            _vm.body.filtered +
            " " +
            _vm.i18n("entries")
        ) +
        "\n    "
    ),
    _vm.body.filtered !== _vm.body.count
      ? _c("span", [
          _vm._v(
            "\n        " +
              _vm._s(
                "(" +
                  _vm.i18n("filtered") +
                  " " +
                  _vm.i18n("from") +
                  " " +
                  _vm.body.count +
                  "         " +
                  _vm.i18n("total") +
                  " " +
                  _vm.i18n("records") +
                  ")"
              ) +
              "\n    "
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-59f21002", module.exports)
  }
}

/***/ }),

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1194)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1196)
/* template */
var __vue_template__ = __webpack_require__(1197)
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/Pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7f5f4ad0", Component.options)
  } else {
    hotAPI.reload("data-v-7f5f4ad0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1194:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("b1e72fa2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f5f4ad0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7f5f4ad0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Pagination.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1195:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nnav.table-navigation {\n    max-width: 425px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/Pagination.vue"],"names":[],"mappings":";AA+HA;IACA,iBAAA;CACA","file":"Pagination.vue","sourcesContent":["<template>\n\n    <nav class=\"table-pagination pagination is-small\"\n        role=\"navigation\"\n        aria-label=\"pagination\">\n        <a class=\"pagination-previous\"\n            :disabled=\"page === 1\"\n            @click=\"jumpTo(page - 1)\">\n            {{ i18n('Previous') }}\n        </a>\n        <a class=\"pagination-next\"\n            :disabled=\"page === pages\"\n            @click=\"jumpTo(page + 1)\">\n            {{ i18n('Next') }}\n        </a>\n        <ul class=\"pagination-list\">\n            <li>\n                <a class=\"pagination-link\"\n                    :class=\"{ 'is-current': page === 1 }\"\n                    @click=\"jumpTo(1)\">\n                    1\n                </a>\n            </li>\n            <li v-if=\"pages > 5 && !atStart\">\n                <span class=\"pagination-ellipsis\">\n                    &hellip;\n                </span>\n            </li>\n            <li v-for=\"i in middlePages\"\n                :key=\"i\">\n                <a class=\"pagination-link\"\n                    :class=\"{ 'is-current': page === i }\"\n                    @click=\"jumpTo(i)\">\n                    {{ i }}\n                </a>\n            </li>\n            <li v-if=\"pages > 5 && !atEnd\">\n                <span class=\"pagination-ellipsis\">\n                    &hellip;\n                </span>\n            </li>\n            <li v-if=\"pages > 1\">\n                <a class=\"pagination-link\"\n                    :class=\"{ 'is-current': page === pages }\"\n                    @click=\"jumpTo(pages)\">\n                    {{ pages }}\n                </a>\n            </li>\n        </ul>\n    </nav>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'Pagination',\n\n    props: {\n        records: {\n            type: Number,\n            required: true,\n        },\n        start: {\n            type: Number,\n            required: true,\n        },\n        length: {\n            type: Number,\n            required: true,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n\n    computed: {\n        page() {\n            return (this.start / this.length) + 1;\n        },\n        pages() {\n            return Math.ceil(this.records / this.length);\n        },\n        atStart() {\n            return this.page < 4;\n        },\n        atEnd() {\n            return this.pages - this.page < 3;\n        },\n        middlePages() {\n            const pages = [];\n\n            if (this.atStart) {\n                const max = Math.min(this.pages - 1, 4);\n                for (let i = 2; i <= max; i++) {\n                    pages.push(i);\n                }\n\n                return pages;\n            }\n\n            if (this.atEnd) {\n                pages.push(this.pages - 3, this.pages - 2, this.pages - 1);\n                return pages;\n            }\n\n            pages.push(this.page - 1, this.page, this.page + 1);\n\n            return pages;\n        },\n    },\n\n    methods: {\n        jumpTo(page) {\n            if (page === this.page || page < 1 || page > this.pages) {\n                return;\n            }\n\n            this.$emit('jump-to', (page - 1) * this.length);\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    nav.table-navigation {\n        max-width: 425px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Pagination',

    props: {
        records: {
            type: Number,
            required: true
        },
        start: {
            type: Number,
            required: true
        },
        length: {
            type: Number,
            required: true
        },
        i18n: {
            type: Function,
            required: true
        }
    },

    computed: {
        page: function page() {
            return this.start / this.length + 1;
        },
        pages: function pages() {
            return Math.ceil(this.records / this.length);
        },
        atStart: function atStart() {
            return this.page < 4;
        },
        atEnd: function atEnd() {
            return this.pages - this.page < 3;
        },
        middlePages: function middlePages() {
            var pages = [];

            if (this.atStart) {
                var max = Math.min(this.pages - 1, 4);
                for (var i = 2; i <= max; i++) {
                    pages.push(i);
                }

                return pages;
            }

            if (this.atEnd) {
                pages.push(this.pages - 3, this.pages - 2, this.pages - 1);
                return pages;
            }

            pages.push(this.page - 1, this.page, this.page + 1);

            return pages;
        }
    },

    methods: {
        jumpTo: function jumpTo(page) {
            if (page === this.page || page < 1 || page > this.pages) {
                return;
            }

            this.$emit('jump-to', (page - 1) * this.length);
        }
    }
});

/***/ }),

/***/ 1197:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "nav",
    {
      staticClass: "table-pagination pagination is-small",
      attrs: { role: "navigation", "aria-label": "pagination" }
    },
    [
      _c(
        "a",
        {
          staticClass: "pagination-previous",
          attrs: { disabled: _vm.page === 1 },
          on: {
            click: function($event) {
              _vm.jumpTo(_vm.page - 1)
            }
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.i18n("Previous")) + "\n    ")]
      ),
      _vm._v(" "),
      _c(
        "a",
        {
          staticClass: "pagination-next",
          attrs: { disabled: _vm.page === _vm.pages },
          on: {
            click: function($event) {
              _vm.jumpTo(_vm.page + 1)
            }
          }
        },
        [_vm._v("\n        " + _vm._s(_vm.i18n("Next")) + "\n    ")]
      ),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "pagination-list" },
        [
          _c("li", [
            _c(
              "a",
              {
                staticClass: "pagination-link",
                class: { "is-current": _vm.page === 1 },
                on: {
                  click: function($event) {
                    _vm.jumpTo(1)
                  }
                }
              },
              [_vm._v("\n                1\n            ")]
            )
          ]),
          _vm._v(" "),
          _vm.pages > 5 && !_vm.atStart
            ? _c("li", [
                _c("span", { staticClass: "pagination-ellipsis" }, [
                  _vm._v("\n                …\n            ")
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm._l(_vm.middlePages, function(i) {
            return _c("li", { key: i }, [
              _c(
                "a",
                {
                  staticClass: "pagination-link",
                  class: { "is-current": _vm.page === i },
                  on: {
                    click: function($event) {
                      _vm.jumpTo(i)
                    }
                  }
                },
                [_vm._v("\n                " + _vm._s(i) + "\n            ")]
              )
            ])
          }),
          _vm._v(" "),
          _vm.pages > 5 && !_vm.atEnd
            ? _c("li", [
                _c("span", { staticClass: "pagination-ellipsis" }, [
                  _vm._v("\n                …\n            ")
                ])
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.pages > 1
            ? _c("li", [
                _c(
                  "a",
                  {
                    staticClass: "pagination-link",
                    class: { "is-current": _vm.page === _vm.pages },
                    on: {
                      click: function($event) {
                        _vm.jumpTo(_vm.pages)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                " +
                        _vm._s(_vm.pages) +
                        "\n            "
                    )
                  ]
                )
              ])
            : _vm._e()
        ],
        2
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7f5f4ad0", module.exports)
  }
}

/***/ }),

/***/ 1198:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1199)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1201)
/* template */
var __vue_template__ = __webpack_require__(1202)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f76c297c"
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
Component.options.__file = "resources/assets/js/components/enso/vuedatatable/Overlay.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f76c297c", Component.options)
  } else {
    hotAPI.reload("data-v-f76c297c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1200);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("21347c94", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f76c297c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Overlay.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f76c297c\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Overlay.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1200:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.overlay[data-v-f76c297c] {\n    background: rgba(255, 255, 255, 0.4);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.overlay-loader[data-v-f76c297c] {\n    margin: auto;\n    -webkit-animation: spinAround 500ms infinite linear;\n    animation: spinAround 500ms infinite linear;\n    border-radius: 50%;\n    content: \"\";\n    width: 2em;\n    height: 2em;\n    border: 2px solid#f44336;\n    border-right-color: transparent;\n    border-top-color: transparent;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/Overlay.vue"],"names":[],"mappings":";AAiBA;IACA,qCAAA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;CACA;AAEA;IACA,aAAA;IACA,oDAAA;IACA,4CAAA;IACA,mBAAA;IACA,YAAA;IACA,WAAA;IACA,YAAA;IACA,yBAAA;IACA,gCAAA;IACA,8BAAA;CACA","file":"Overlay.vue","sourcesContent":["<template>\n\n    <div class=\"overlay is-overlay\">\n        <div class=\"overlay-loader\"></div>\n    </div>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'Overlay',\n};\n\n</script>\n\n<style scoped>\n\n    .overlay {\n        background: rgba(255, 255, 255, 0.4);\n        display: flex;\n    }\n\n    .overlay-loader {\n        margin: auto;\n        -webkit-animation: spinAround 500ms infinite linear;\n        animation: spinAround 500ms infinite linear;\n        border-radius: 50%;\n        content: \"\";\n        width: 2em;\n        height: 2em;\n        border: 2px solid#f44336;\n        border-right-color: transparent;\n        border-top-color: transparent;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Overlay'
});

/***/ }),

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "overlay is-overlay" }, [
      _c("div", { staticClass: "overlay-loader" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f76c297c", module.exports)
  }
}

/***/ }),

/***/ 1203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_resize_detector__ = __webpack_require__(1204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_resize_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_resize_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResponsiveTable__ = __webpack_require__(1215);



/* harmony default export */ __webpack_exports__["a"] = ({
    inserted: function inserted(el, binding, _ref) {
        var context = _ref.context;

        var table = new __WEBPACK_IMPORTED_MODULE_1__ResponsiveTable__["a" /* default */](el, context);
        var erd = __WEBPACK_IMPORTED_MODULE_0_element_resize_detector___default()({ strategy: 'scroll' });

        table.resize();

        erd.listenTo(el, function () {
            table.resize();
        });
    }
});

/***/ }),

/***/ 1204:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach                 = __webpack_require__(1140).forEach;
var elementUtilsMaker       = __webpack_require__(1205);
var listenerHandlerMaker    = __webpack_require__(1206);
var idGeneratorMaker        = __webpack_require__(1207);
var idHandlerMaker          = __webpack_require__(1208);
var reporterMaker           = __webpack_require__(1209);
var browserDetector         = __webpack_require__(1141);
var batchProcessorMaker     = __webpack_require__(1210);
var stateHandler            = __webpack_require__(1212);

//Detection strategies.
var objectStrategyMaker     = __webpack_require__(1213);
var scrollStrategyMaker     = __webpack_require__(1214);

function isCollection(obj) {
    return Array.isArray(obj) || obj.length !== undefined;
}

function toArray(collection) {
    if (!Array.isArray(collection)) {
        var array = [];
        forEach(collection, function (obj) {
            array.push(obj);
        });
        return array;
    } else {
        return collection;
    }
}

function isElement(obj) {
    return obj && obj.nodeType === 1;
}

/**
 * @typedef idHandler
 * @type {object}
 * @property {function} get Gets the resize detector id of the element.
 * @property {function} set Generate and sets the resize detector id of the element.
 */

/**
 * @typedef Options
 * @type {object}
 * @property {boolean} callOnAdd    Determines if listeners should be called when they are getting added.
                                    Default is true. If true, the listener is guaranteed to be called when it has been added.
                                    If false, the listener will not be guarenteed to be called when it has been added (does not prevent it from being called).
 * @property {idHandler} idHandler  A custom id handler that is responsible for generating, setting and retrieving id's for elements.
                                    If not provided, a default id handler will be used.
 * @property {reporter} reporter    A custom reporter that handles reporting logs, warnings and errors.
                                    If not provided, a default id handler will be used.
                                    If set to false, then nothing will be reported.
 * @property {boolean} debug        If set to true, the the system will report debug messages as default for the listenTo method.
 */

/**
 * Creates an element resize detector instance.
 * @public
 * @param {Options?} options Optional global options object that will decide how this instance will work.
 */
module.exports = function(options) {
    options = options || {};

    //idHandler is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var idHandler;

    if (options.idHandler) {
        // To maintain compatability with idHandler.get(element, readonly), make sure to wrap the given idHandler
        // so that readonly flag always is true when it's used here. This may be removed next major version bump.
        idHandler = {
            get: function (element) { return options.idHandler.get(element, true); },
            set: options.idHandler.set
        };
    } else {
        var idGenerator = idGeneratorMaker();
        var defaultIdHandler = idHandlerMaker({
            idGenerator: idGenerator,
            stateHandler: stateHandler
        });
        idHandler = defaultIdHandler;
    }

    //reporter is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var reporter = options.reporter;

    if(!reporter) {
        //If options.reporter is false, then the reporter should be quiet.
        var quiet = reporter === false;
        reporter = reporterMaker(quiet);
    }

    //batchProcessor is currently not an option to the listenTo function, so it should not be added to globalOptions.
    var batchProcessor = getOption(options, "batchProcessor", batchProcessorMaker({ reporter: reporter }));

    //Options to be used as default for the listenTo function.
    var globalOptions = {};
    globalOptions.callOnAdd     = !!getOption(options, "callOnAdd", true);
    globalOptions.debug         = !!getOption(options, "debug", false);

    var eventListenerHandler    = listenerHandlerMaker(idHandler);
    var elementUtils            = elementUtilsMaker({
        stateHandler: stateHandler
    });

    //The detection strategy to be used.
    var detectionStrategy;
    var desiredStrategy = getOption(options, "strategy", "object");
    var strategyOptions = {
        reporter: reporter,
        batchProcessor: batchProcessor,
        stateHandler: stateHandler,
        idHandler: idHandler
    };

    if(desiredStrategy === "scroll") {
        if (browserDetector.isLegacyOpera()) {
            reporter.warn("Scroll strategy is not supported on legacy Opera. Changing to object strategy.");
            desiredStrategy = "object";
        } else if (browserDetector.isIE(9)) {
            reporter.warn("Scroll strategy is not supported on IE9. Changing to object strategy.");
            desiredStrategy = "object";
        }
    }

    if(desiredStrategy === "scroll") {
        detectionStrategy = scrollStrategyMaker(strategyOptions);
    } else if(desiredStrategy === "object") {
        detectionStrategy = objectStrategyMaker(strategyOptions);
    } else {
        throw new Error("Invalid strategy name: " + desiredStrategy);
    }

    //Calls can be made to listenTo with elements that are still being installed.
    //Also, same elements can occur in the elements list in the listenTo function.
    //With this map, the ready callbacks can be synchronized between the calls
    //so that the ready callback can always be called when an element is ready - even if
    //it wasn't installed from the function itself.
    var onReadyCallbacks = {};

    /**
     * Makes the given elements resize-detectable and starts listening to resize events on the elements. Calls the event callback for each event for each element.
     * @public
     * @param {Options?} options Optional options object. These options will override the global options. Some options may not be overriden, such as idHandler.
     * @param {element[]|element} elements The given array of elements to detect resize events of. Single element is also valid.
     * @param {function} listener The callback to be executed for each resize event for each element.
     */
    function listenTo(options, elements, listener) {
        function onResizeCallback(element) {
            var listeners = eventListenerHandler.get(element);
            forEach(listeners, function callListenerProxy(listener) {
                listener(element);
            });
        }

        function addListener(callOnAdd, element, listener) {
            eventListenerHandler.add(element, listener);

            if(callOnAdd) {
                listener(element);
            }
        }

        //Options object may be omitted.
        if(!listener) {
            listener = elements;
            elements = options;
            options = {};
        }

        if(!elements) {
            throw new Error("At least one element required.");
        }

        if(!listener) {
            throw new Error("Listener required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        var elementsReady = 0;

        var callOnAdd = getOption(options, "callOnAdd", globalOptions.callOnAdd);
        var onReadyCallback = getOption(options, "onReady", function noop() {});
        var debug = getOption(options, "debug", globalOptions.debug);

        forEach(elements, function attachListenerToElement(element) {
            if (!stateHandler.getState(element)) {
                stateHandler.initState(element);
                idHandler.set(element);
            }

            var id = idHandler.get(element);

            debug && reporter.log("Attaching listener to element", id, element);

            if(!elementUtils.isDetectable(element)) {
                debug && reporter.log(id, "Not detectable.");
                if(elementUtils.isBusy(element)) {
                    debug && reporter.log(id, "System busy making it detectable");

                    //The element is being prepared to be detectable. Do not make it detectable.
                    //Just add the listener, because the element will soon be detectable.
                    addListener(callOnAdd, element, listener);
                    onReadyCallbacks[id] = onReadyCallbacks[id] || [];
                    onReadyCallbacks[id].push(function onReady() {
                        elementsReady++;

                        if(elementsReady === elements.length) {
                            onReadyCallback();
                        }
                    });
                    return;
                }

                debug && reporter.log(id, "Making detectable...");
                //The element is not prepared to be detectable, so do prepare it and add a listener to it.
                elementUtils.markBusy(element, true);
                return detectionStrategy.makeDetectable({ debug: debug }, element, function onElementDetectable(element) {
                    debug && reporter.log(id, "onElementDetectable");

                    if (stateHandler.getState(element)) {
                        elementUtils.markAsDetectable(element);
                        elementUtils.markBusy(element, false);
                        detectionStrategy.addListener(element, onResizeCallback);
                        addListener(callOnAdd, element, listener);

                        // Since the element size might have changed since the call to "listenTo", we need to check for this change,
                        // so that a resize event may be emitted.
                        // Having the startSize object is optional (since it does not make sense in some cases such as unrendered elements), so check for its existance before.
                        // Also, check the state existance before since the element may have been uninstalled in the installation process.
                        var state = stateHandler.getState(element);
                        if (state && state.startSize) {
                            var width = element.offsetWidth;
                            var height = element.offsetHeight;
                            if (state.startSize.width !== width || state.startSize.height !== height) {
                                onResizeCallback(element);
                            }
                        }

                        if(onReadyCallbacks[id]) {
                            forEach(onReadyCallbacks[id], function(callback) {
                                callback();
                            });
                        }
                    } else {
                        // The element has been unisntalled before being detectable.
                        debug && reporter.log(id, "Element uninstalled before being detectable.");
                    }

                    delete onReadyCallbacks[id];

                    elementsReady++;
                    if(elementsReady === elements.length) {
                        onReadyCallback();
                    }
                });
            }

            debug && reporter.log(id, "Already detecable, adding listener.");

            //The element has been prepared to be detectable and is ready to be listened to.
            addListener(callOnAdd, element, listener);
            elementsReady++;
        });

        if(elementsReady === elements.length) {
            onReadyCallback();
        }
    }

    function uninstall(elements) {
        if(!elements) {
            return reporter.error("At least one element is required.");
        }

        if (isElement(elements)) {
            // A single element has been passed in.
            elements = [elements];
        } else if (isCollection(elements)) {
            // Convert collection to array for plugins.
            // TODO: May want to check so that all the elements in the collection are valid elements.
            elements = toArray(elements);
        } else {
            return reporter.error("Invalid arguments. Must be a DOM element or a collection of DOM elements.");
        }

        forEach(elements, function (element) {
            eventListenerHandler.removeAllListeners(element);
            detectionStrategy.uninstall(element);
            stateHandler.cleanState(element);
        });
    }

    return {
        listenTo: listenTo,
        removeListener: eventListenerHandler.removeListener,
        removeAllListeners: eventListenerHandler.removeAllListeners,
        uninstall: uninstall
    };
};

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ 1205:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var getState = options.stateHandler.getState;

    /**
     * Tells if the element has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is detectable or not.
     */
    function isDetectable(element) {
        var state = getState(element);
        return state && !!state.isDetectable;
    }

    /**
     * Marks the element that it has been made detectable and ready to be listened for resize events.
     * @public
     * @param {element} The element to mark.
     */
    function markAsDetectable(element) {
        getState(element).isDetectable = true;
    }

    /**
     * Tells if the element is busy or not.
     * @public
     * @param {element} The element to check.
     * @returns {boolean} True or false depending on if the element is busy or not.
     */
    function isBusy(element) {
        return !!getState(element).busy;
    }

    /**
     * Marks the object is busy and should not be made detectable.
     * @public
     * @param {element} element The element to mark.
     * @param {boolean} busy If the element is busy or not.
     */
    function markBusy(element, busy) {
        getState(element).busy = !!busy;
    }

    return {
        isDetectable: isDetectable,
        markAsDetectable: markAsDetectable,
        isBusy: isBusy,
        markBusy: markBusy
    };
};


/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(idHandler) {
    var eventListeners = {};

    /**
     * Gets all listeners for the given element.
     * @public
     * @param {element} element The element to get all listeners for.
     * @returns All listeners for the given element.
     */
    function getListeners(element) {
        var id = idHandler.get(element);

        if (id === undefined) {
            return [];
        }

        return eventListeners[id] || [];
    }

    /**
     * Stores the given listener for the given element. Will not actually add the listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The callback that the element has added.
     */
    function addListener(element, listener) {
        var id = idHandler.get(element);

        if(!eventListeners[id]) {
            eventListeners[id] = [];
        }

        eventListeners[id].push(listener);
    }

    function removeListener(element, listener) {
        var listeners = getListeners(element);
        for (var i = 0, len = listeners.length; i < len; ++i) {
            if (listeners[i] === listener) {
              listeners.splice(i, 1);
              break;
            }
        }
    }

    function removeAllListeners(element) {
      var listeners = getListeners(element);
      if (!listeners) { return; }
      listeners.length = 0;
    }

    return {
        get: getListeners,
        add: addListener,
        removeListener: removeListener,
        removeAllListeners: removeAllListeners
    };
};


/***/ }),

/***/ 1207:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function() {
    var idCount = 1;

    /**
     * Generates a new unique id in the context.
     * @public
     * @returns {number} A unique id in the context.
     */
    function generate() {
        return idCount++;
    }

    return {
        generate: generate
    };
};


/***/ }),

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function(options) {
    var idGenerator     = options.idGenerator;
    var getState        = options.stateHandler.getState;

    /**
     * Gets the resize detector id of the element.
     * @public
     * @param {element} element The target element to get the id of.
     * @returns {string|number|null} The id of the element. Null if it has no id.
     */
    function getId(element) {
        var state = getState(element);

        if (state && state.id !== undefined) {
            return state.id;
        }

        return null;
    }

    /**
     * Sets the resize detector id of the element. Requires the element to have a resize detector state initialized.
     * @public
     * @param {element} element The target element to set the id of.
     * @returns {string|number|null} The id of the element.
     */
    function setId(element) {
        var state = getState(element);

        if (!state) {
            throw new Error("setId required the element to have a resize detection state.");
        }

        var id = idGenerator.generate();

        state.id = id;

        return id;
    }

    return {
        get: getId,
        set: setId
    };
};


/***/ }),

/***/ 1209:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/* global console: false */

/**
 * Reporter that handles the reporting of logs, warnings and errors.
 * @public
 * @param {boolean} quiet Tells if the reporter should be quiet or not.
 */
module.exports = function(quiet) {
    function noop() {
        //Does nothing.
    }

    var reporter = {
        log: noop,
        warn: noop,
        error: noop
    };

    if(!quiet && window.console) {
        var attachFunction = function(reporter, name) {
            //The proxy is needed to be able to call the method with the console context,
            //since we cannot use bind.
            reporter[name] = function reporterProxy() {
                var f = console[name];
                if (f.apply) { //IE9 does not support console.log.apply :)
                    f.apply(console, arguments);
                } else {
                    for (var i = 0; i < arguments.length; i++) {
                        f(arguments[i]);
                    }
                }
            };
        };

        attachFunction(reporter, "log");
        attachFunction(reporter, "warn");
        attachFunction(reporter, "error");
    }

    return reporter;
};

/***/ }),

/***/ 1210:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1211);

module.exports = function batchProcessorMaker(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var asyncProcess    = utils.getOption(options, "async", true);
    var autoProcess     = utils.getOption(options, "auto", true);

    if(autoProcess && !asyncProcess) {
        reporter && reporter.warn("Invalid options combination. auto=true and async=false is invalid. Setting async=true.");
        asyncProcess = true;
    }

    var batch = Batch();
    var asyncFrameHandler;
    var isProcessing = false;

    function addFunction(level, fn) {
        if(!isProcessing && autoProcess && asyncProcess && batch.size() === 0) {
            // Since this is async, it is guaranteed to be executed after that the fn is added to the batch.
            // This needs to be done before, since we're checking the size of the batch to be 0.
            processBatchAsync();
        }

        batch.add(level, fn);
    }

    function processBatch() {
        // Save the current batch, and create a new batch so that incoming functions are not added into the currently processing batch.
        // Continue processing until the top-level batch is empty (functions may be added to the new batch while processing, and so on).
        isProcessing = true;
        while (batch.size()) {
            var processingBatch = batch;
            batch = Batch();
            processingBatch.process();
        }
        isProcessing = false;
    }

    function forceProcessBatch(localAsyncProcess) {
        if (isProcessing) {
            return;
        }

        if(localAsyncProcess === undefined) {
            localAsyncProcess = asyncProcess;
        }

        if(asyncFrameHandler) {
            cancelFrame(asyncFrameHandler);
            asyncFrameHandler = null;
        }

        if(localAsyncProcess) {
            processBatchAsync();
        } else {
            processBatch();
        }
    }

    function processBatchAsync() {
        asyncFrameHandler = requestFrame(processBatch);
    }

    function clearBatch() {
        batch           = {};
        batchSize       = 0;
        topLevel        = 0;
        bottomLevel     = 0;
    }

    function cancelFrame(listener) {
        // var cancel = window.cancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.clearTimeout;
        var cancel = clearTimeout;
        return cancel(listener);
    }

    function requestFrame(callback) {
        // var raf = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(fn) { return window.setTimeout(fn, 20); };
        var raf = function(fn) { return setTimeout(fn, 0); };
        return raf(callback);
    }

    return {
        add: addFunction,
        force: forceProcessBatch
    };
};

function Batch() {
    var batch       = {};
    var size        = 0;
    var topLevel    = 0;
    var bottomLevel = 0;

    function add(level, fn) {
        if(!fn) {
            fn = level;
            level = 0;
        }

        if(level > topLevel) {
            topLevel = level;
        } else if(level < bottomLevel) {
            bottomLevel = level;
        }

        if(!batch[level]) {
            batch[level] = [];
        }

        batch[level].push(fn);
        size++;
    }

    function process() {
        for(var level = bottomLevel; level <= topLevel; level++) {
            var fns = batch[level];

            for(var i = 0; i < fns.length; i++) {
                var fn = fns[i];
                fn();
            }
        }
    }

    function getSize() {
        return size;
    }

    return {
        add: add,
        process: process,
        size: getSize
    };
}


/***/ }),

/***/ 1211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = module.exports = {};

utils.getOption = getOption;

function getOption(options, name, defaultValue) {
    var value = options[name];

    if((value === undefined || value === null) && defaultValue !== undefined) {
        return defaultValue;
    }

    return value;
}


/***/ }),

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var prop = "_erd";

function initState(element) {
    element[prop] = {};
    return getState(element);
}

function getState(element) {
    return element[prop];
}

function cleanState(element) {
    delete element[prop];
}

module.exports = {
    initState: initState,
    getState: getState,
    cleanState: cleanState
};


/***/ }),

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */



var browserDetector = __webpack_require__(1141);

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;

    if(!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        if(!getObject(element)) {
            throw new Error("Element is not detectable by this strategy.");
        }

        function listenerProxy() {
            listener(element);
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support object, but supports the resize event directly on elements.
            getState(element).object = {
                proxy: listenerProxy
            };
            element.attachEvent("onresize", listenerProxy);
        } else {
            var object = getObject(element);
            object.contentDocument.defaultView.addEventListener("resize", listenerProxy);
        }
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};
        var debug = options.debug;

        function injectObject(element, callback) {
            var OBJECT_STYLE = "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; padding: 0; margin: 0; opacity: 0; z-index: -1000; pointer-events: none;";

            //The target element needs to be positioned (everything except static) so the absolute positioned object will be positioned relative to the target element.

            // Position altering may be performed directly or on object load, depending on if style resolution is possible directly or not.
            var positionCheckPerformed = false;

            // The element may not yet be attached to the DOM, and therefore the style object may be empty in some browsers.
            // Since the style object is a reference, it will be updated as soon as the element is attached to the DOM.
            var style = window.getComputedStyle(element);
            var width = element.offsetWidth;
            var height = element.offsetHeight;

            getState(element).startSize = {
                width: width,
                height: height
            };

            function mutateDom() {
                function alterPositionStyles() {
                    if(style.position === "static") {
                        element.style.position = "relative";

                        var removeRelativeStyles = function(reporter, element, style, property) {
                            function getNumericalValue(value) {
                                return value.replace(/[^-\d\.]/g, "");
                            }

                            var value = style[property];

                            if(value !== "auto" && getNumericalValue(value) !== "0") {
                                reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                                element.style[property] = 0;
                            }
                        };

                        //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                        //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                        removeRelativeStyles(reporter, element, style, "top");
                        removeRelativeStyles(reporter, element, style, "right");
                        removeRelativeStyles(reporter, element, style, "bottom");
                        removeRelativeStyles(reporter, element, style, "left");
                    }
                }

                function onObjectLoad() {
                    // The object has been loaded, which means that the element now is guaranteed to be attached to the DOM.
                    if (!positionCheckPerformed) {
                        alterPositionStyles();
                    }

                    /*jshint validthis: true */

                    function getDocument(element, callback) {
                        //Opera 12 seem to call the object.onload before the actual document has been created.
                        //So if it is not present, poll it with an timeout until it is present.
                        //TODO: Could maybe be handled better with object.onreadystatechange or similar.
                        if(!element.contentDocument) {
                            setTimeout(function checkForObjectDocument() {
                                getDocument(element, callback);
                            }, 100);

                            return;
                        }

                        callback(element.contentDocument);
                    }

                    //Mutating the object element here seems to fire another load event.
                    //Mutating the inner document of the object element is fine though.
                    var objectElement = this;

                    //Create the style element to be added to the object.
                    getDocument(objectElement, function onObjectDocumentReady(objectDocument) {
                        //Notify that the element is ready to be listened to.
                        callback(element);
                    });
                }

                // The element may be detached from the DOM, and some browsers does not support style resolving of detached elements.
                // The alterPositionStyles needs to be delayed until we know the element has been attached to the DOM (which we are sure of when the onObjectLoad has been fired), if style resolution is not possible.
                if (style.position !== "") {
                    alterPositionStyles(style);
                    positionCheckPerformed = true;
                }

                //Add an object element as a child to the target element that will be listened to for resize events.
                var object = document.createElement("object");
                object.style.cssText = OBJECT_STYLE;
                object.tabIndex = -1;
                object.type = "text/html";
                object.onload = onObjectLoad;

                //Safari: This must occur before adding the object to the DOM.
                //IE: Does not like that this happens before, even if it is also added after.
                if(!browserDetector.isIE()) {
                    object.data = "about:blank";
                }

                element.appendChild(object);
                getState(element).object = object;

                //IE: This must occur after adding the object to the DOM.
                if(browserDetector.isIE()) {
                    object.data = "about:blank";
                }
            }

            if(batchProcessor) {
                batchProcessor.add(mutateDom);
            } else {
                mutateDom();
            }
        }

        if(browserDetector.isIE(8)) {
            //IE 8 does not support objects properly. Luckily they do support the resize event.
            //So do not inject the object and notify that the element is already ready to be listened to.
            //The event handler for the resize event is attached in the utils.addListener instead.
            callback(element);
        } else {
            injectObject(element, callback);
        }
    }

    /**
     * Returns the child object of the target element.
     * @private
     * @param {element} element The target element.
     * @returns The object element of the target.
     */
    function getObject(element) {
        return getState(element).object;
    }

    function uninstall(element) {
        if(browserDetector.isIE(8)) {
            element.detachEvent("onresize", getState(element).object.proxy);
        } else {
            element.removeChild(getObject(element));
        }
        delete getState(element).object;
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};


/***/ }),

/***/ 1214:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */



var forEach = __webpack_require__(1140).forEach;

module.exports = function(options) {
    options             = options || {};
    var reporter        = options.reporter;
    var batchProcessor  = options.batchProcessor;
    var getState        = options.stateHandler.getState;
    var hasState        = options.stateHandler.hasState;
    var idHandler       = options.idHandler;

    if (!batchProcessor) {
        throw new Error("Missing required dependency: batchProcessor");
    }

    if (!reporter) {
        throw new Error("Missing required dependency: reporter.");
    }

    //TODO: Could this perhaps be done at installation time?
    var scrollbarSizes = getScrollbarSizes();

    // Inject the scrollbar styling that prevents them from appearing sometimes in Chrome.
    // The injected container needs to have a class, so that it may be styled with CSS (pseudo elements).
    var styleId = "erd_scroll_detection_scrollbar_style";
    var detectionContainerClass = "erd_scroll_detection_container";
    injectScrollStyle(styleId, detectionContainerClass);

    function getScrollbarSizes() {
        var width = 500;
        var height = 500;

        var child = document.createElement("div");
        child.style.cssText = "position: absolute; width: " + width*2 + "px; height: " + height*2 + "px; visibility: hidden; margin: 0; padding: 0;";

        var container = document.createElement("div");
        container.style.cssText = "position: absolute; width: " + width + "px; height: " + height + "px; overflow: scroll; visibility: none; top: " + -width*3 + "px; left: " + -height*3 + "px; visibility: hidden; margin: 0; padding: 0;";

        container.appendChild(child);

        document.body.insertBefore(container, document.body.firstChild);

        var widthSize = width - container.clientWidth;
        var heightSize = height - container.clientHeight;

        document.body.removeChild(container);

        return {
            width: widthSize,
            height: heightSize
        };
    }

    function injectScrollStyle(styleId, containerClass) {
        function injectStyle(style, method) {
            method = method || function (element) {
                document.head.appendChild(element);
            };

            var styleElement = document.createElement("style");
            styleElement.innerHTML = style;
            styleElement.id = styleId;
            method(styleElement);
            return styleElement;
        }

        if (!document.getElementById(styleId)) {
            var containerAnimationClass = containerClass + "_animation";
            var containerAnimationActiveClass = containerClass + "_animation_active";
            var style = "/* Created by the element-resize-detector library. */\n";
            style += "." + containerClass + " > div::-webkit-scrollbar { display: none; }\n\n";
            style += "." + containerAnimationActiveClass + " { -webkit-animation-duration: 0.1s; animation-duration: 0.1s; -webkit-animation-name: " + containerAnimationClass + "; animation-name: " + containerAnimationClass + "; }\n";
            style += "@-webkit-keyframes " + containerAnimationClass +  " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }\n";
            style += "@keyframes " + containerAnimationClass +          " { 0% { opacity: 1; } 50% { opacity: 0; } 100% { opacity: 1; } }";
            injectStyle(style);
        }
    }

    function addAnimationClass(element) {
        element.className += " " + detectionContainerClass + "_animation_active";
    }

    function addEvent(el, name, cb) {
        if (el.addEventListener) {
            el.addEventListener(name, cb);
        } else if(el.attachEvent) {
            el.attachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to add event listeners.");
        }
    }

    function removeEvent(el, name, cb) {
        if (el.removeEventListener) {
            el.removeEventListener(name, cb);
        } else if(el.detachEvent) {
            el.detachEvent("on" + name, cb);
        } else {
            return reporter.error("[scroll] Don't know how to remove event listeners.");
        }
    }

    function getExpandElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[0];
    }

    function getShrinkElement(element) {
        return getState(element).container.childNodes[0].childNodes[0].childNodes[1];
    }

    /**
     * Adds a resize event listener to the element.
     * @public
     * @param {element} element The element that should have the listener added.
     * @param {function} listener The listener callback to be called for each resize event of the element. The element will be given as a parameter to the listener callback.
     */
    function addListener(element, listener) {
        var listeners = getState(element).listeners;

        if (!listeners.push) {
            throw new Error("Cannot add listener to an element that is not detectable.");
        }

        getState(element).listeners.push(listener);
    }

    /**
     * Makes an element detectable and ready to be listened for resize events. Will call the callback when the element is ready to be listened for resize changes.
     * @private
     * @param {object} options Optional options object.
     * @param {element} element The element to make detectable
     * @param {function} callback The callback to be called when the element is ready to be listened for resize changes. Will be called with the element as first parameter.
     */
    function makeDetectable(options, element, callback) {
        if (!callback) {
            callback = element;
            element = options;
            options = null;
        }

        options = options || {};

        function debug() {
            if (options.debug) {
                var args = Array.prototype.slice.call(arguments);
                args.unshift(idHandler.get(element), "Scroll: ");
                if (reporter.log.apply) {
                    reporter.log.apply(null, args);
                } else {
                    for (var i = 0; i < args.length; i++) {
                        reporter.log(args[i]);
                    }
                }
            }
        }

        function isDetached(element) {
            function isInDocument(element) {
                return element === element.ownerDocument.body || element.ownerDocument.body.contains(element);
            }

            if (!isInDocument(element)) {
                return true;
            }

            // FireFox returns null style in hidden iframes. See https://github.com/wnr/element-resize-detector/issues/68 and https://bugzilla.mozilla.org/show_bug.cgi?id=795520
            if (getComputedStyle(element) === null) {
                return true;
            }

            return false;
        }

        function isUnrendered(element) {
            // Check the absolute positioned container since the top level container is display: inline.
            var container = getState(element).container.childNodes[0];
            var style = getComputedStyle(container);
            return !style.width || style.width.indexOf("px") === -1; //Can only compute pixel value when rendered.
        }

        function getStyle() {
            // Some browsers only force layouts when actually reading the style properties of the style object, so make sure that they are all read here,
            // so that the user of the function can be sure that it will perform the layout here, instead of later (important for batching).
            var elementStyle            = getComputedStyle(element);
            var style                   = {};
            style.position              = elementStyle.position;
            style.width                 = element.offsetWidth;
            style.height                = element.offsetHeight;
            style.top                   = elementStyle.top;
            style.right                 = elementStyle.right;
            style.bottom                = elementStyle.bottom;
            style.left                  = elementStyle.left;
            style.widthCSS              = elementStyle.width;
            style.heightCSS             = elementStyle.height;
            return style;
        }

        function storeStartSize() {
            var style = getStyle();
            getState(element).startSize = {
                width: style.width,
                height: style.height
            };
            debug("Element start size", getState(element).startSize);
        }

        function initListeners() {
            getState(element).listeners = [];
        }

        function storeStyle() {
            debug("storeStyle invoked.");
            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getStyle();
            getState(element).style = style;
        }

        function storeCurrentSize(element, width, height) {
            getState(element).lastWidth = width;
            getState(element).lastHeight  = height;
        }

        function getExpandChildElement(element) {
            return getExpandElement(element).childNodes[0];
        }

        function getWidthOffset() {
            return 2 * scrollbarSizes.width + 1;
        }

        function getHeightOffset() {
            return 2 * scrollbarSizes.height + 1;
        }

        function getExpandWidth(width) {
            return width + 10 + getWidthOffset();
        }

        function getExpandHeight(height) {
            return height + 10 + getHeightOffset();
        }

        function getShrinkWidth(width) {
            return width * 2 + getWidthOffset();
        }

        function getShrinkHeight(height) {
            return height * 2 + getHeightOffset();
        }

        function positionScrollbars(element, width, height) {
            var expand          = getExpandElement(element);
            var shrink          = getShrinkElement(element);
            var expandWidth     = getExpandWidth(width);
            var expandHeight    = getExpandHeight(height);
            var shrinkWidth     = getShrinkWidth(width);
            var shrinkHeight    = getShrinkHeight(height);
            expand.scrollLeft   = expandWidth;
            expand.scrollTop    = expandHeight;
            shrink.scrollLeft   = shrinkWidth;
            shrink.scrollTop    = shrinkHeight;
        }

        function injectContainerElement() {
            var container = getState(element).container;

            if (!container) {
                container                   = document.createElement("div");
                container.className         = detectionContainerClass;
                container.style.cssText     = "visibility: hidden; display: inline; width: 0px; height: 0px; z-index: -1; overflow: hidden; margin: 0; padding: 0;";
                getState(element).container = container;
                addAnimationClass(container);
                element.appendChild(container);

                var onAnimationStart = function () {
                    getState(element).onRendered && getState(element).onRendered();
                };

                addEvent(container, "animationstart", onAnimationStart);

                // Store the event handler here so that they may be removed when uninstall is called.
                // See uninstall function for an explanation why it is needed.
                getState(element).onAnimationStart = onAnimationStart;
            }

            return container;
        }

        function injectScrollElements() {
            function alterPositionStyles() {
                var style = getState(element).style;

                if(style.position === "static") {
                    element.style.position = "relative";

                    var removeRelativeStyles = function(reporter, element, style, property) {
                        function getNumericalValue(value) {
                            return value.replace(/[^-\d\.]/g, "");
                        }

                        var value = style[property];

                        if(value !== "auto" && getNumericalValue(value) !== "0") {
                            reporter.warn("An element that is positioned static has style." + property + "=" + value + " which is ignored due to the static positioning. The element will need to be positioned relative, so the style." + property + " will be set to 0. Element: ", element);
                            element.style[property] = 0;
                        }
                    };

                    //Check so that there are no accidental styles that will make the element styled differently now that is is relative.
                    //If there are any, set them to 0 (this should be okay with the user since the style properties did nothing before [since the element was positioned static] anyway).
                    removeRelativeStyles(reporter, element, style, "top");
                    removeRelativeStyles(reporter, element, style, "right");
                    removeRelativeStyles(reporter, element, style, "bottom");
                    removeRelativeStyles(reporter, element, style, "left");
                }
            }

            function getLeftTopBottomRightCssText(left, top, bottom, right) {
                left = (!left ? "0" : (left + "px"));
                top = (!top ? "0" : (top + "px"));
                bottom = (!bottom ? "0" : (bottom + "px"));
                right = (!right ? "0" : (right + "px"));

                return "left: " + left + "; top: " + top + "; right: " + right + "; bottom: " + bottom + ";";
            }

            debug("Injecting elements");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            alterPositionStyles();

            var rootContainer = getState(element).container;

            if (!rootContainer) {
                rootContainer = injectContainerElement();
            }

            // Due to this WebKit bug https://bugs.webkit.org/show_bug.cgi?id=80808 (currently fixed in Blink, but still present in WebKit browsers such as Safari),
            // we need to inject two containers, one that is width/height 100% and another that is left/top -1px so that the final container always is 1x1 pixels bigger than
            // the targeted element.
            // When the bug is resolved, "containerContainer" may be removed.

            // The outer container can occasionally be less wide than the targeted when inside inline elements element in WebKit (see https://bugs.webkit.org/show_bug.cgi?id=152980).
            // This should be no problem since the inner container either way makes sure the injected scroll elements are at least 1x1 px.

            var scrollbarWidth          = scrollbarSizes.width;
            var scrollbarHeight         = scrollbarSizes.height;
            var containerContainerStyle = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; width: 100%; height: 100%; left: 0px; top: 0px;";
            var containerStyle          = "position: absolute; flex: none; overflow: hidden; z-index: -1; visibility: hidden; " + getLeftTopBottomRightCssText(-(1 + scrollbarWidth), -(1 + scrollbarHeight), -scrollbarHeight, -scrollbarWidth);
            var expandStyle             = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;";
            var shrinkStyle             = "position: absolute; flex: none; overflow: scroll; z-index: -1; visibility: hidden; width: 100%; height: 100%;";
            var expandChildStyle        = "position: absolute; left: 0; top: 0;";
            var shrinkChildStyle        = "position: absolute; width: 200%; height: 200%;";

            var containerContainer      = document.createElement("div");
            var container               = document.createElement("div");
            var expand                  = document.createElement("div");
            var expandChild             = document.createElement("div");
            var shrink                  = document.createElement("div");
            var shrinkChild             = document.createElement("div");

            // Some browsers choke on the resize system being rtl, so force it to ltr. https://github.com/wnr/element-resize-detector/issues/56
            // However, dir should not be set on the top level container as it alters the dimensions of the target element in some browsers.
            containerContainer.dir              = "ltr";

            containerContainer.style.cssText    = containerContainerStyle;
            containerContainer.className        = detectionContainerClass;
            container.className                 = detectionContainerClass;
            container.style.cssText             = containerStyle;
            expand.style.cssText                = expandStyle;
            expandChild.style.cssText           = expandChildStyle;
            shrink.style.cssText                = shrinkStyle;
            shrinkChild.style.cssText           = shrinkChildStyle;

            expand.appendChild(expandChild);
            shrink.appendChild(shrinkChild);
            container.appendChild(expand);
            container.appendChild(shrink);
            containerContainer.appendChild(container);
            rootContainer.appendChild(containerContainer);

            function onExpandScroll() {
                getState(element).onExpand && getState(element).onExpand();
            }

            function onShrinkScroll() {
                getState(element).onShrink && getState(element).onShrink();
            }

            addEvent(expand, "scroll", onExpandScroll);
            addEvent(shrink, "scroll", onShrinkScroll);

            // Store the event handlers here so that they may be removed when uninstall is called.
            // See uninstall function for an explanation why it is needed.
            getState(element).onExpandScroll = onExpandScroll;
            getState(element).onShrinkScroll = onShrinkScroll;
        }

        function registerListenersAndPositionElements() {
            function updateChildSizes(element, width, height) {
                var expandChild             = getExpandChildElement(element);
                var expandWidth             = getExpandWidth(width);
                var expandHeight            = getExpandHeight(height);
                expandChild.style.width     = expandWidth + "px";
                expandChild.style.height    = expandHeight + "px";
            }

            function updateDetectorElements(done) {
                var width           = element.offsetWidth;
                var height          = element.offsetHeight;

                debug("Storing current size", width, height);

                // Store the size of the element sync here, so that multiple scroll events may be ignored in the event listeners.
                // Otherwise the if-check in handleScroll is useless.
                storeCurrentSize(element, width, height);

                // Since we delay the processing of the batch, there is a risk that uninstall has been called before the batch gets to execute.
                // Since there is no way to cancel the fn executions, we need to add an uninstall guard to all fns of the batch.

                batchProcessor.add(0, function performUpdateChildSizes() {
                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    if (options.debug) {
                        var w = element.offsetWidth;
                        var h = element.offsetHeight;

                        if (w !== width || h !== height) {
                            reporter.warn(idHandler.get(element), "Scroll: Size changed before updating detector elements.");
                        }
                    }

                    updateChildSizes(element, width, height);
                });

                batchProcessor.add(1, function updateScrollbars() {
                    if (!getState(element)) {
                        debug("Aborting because element has been uninstalled");
                        return;
                    }

                    if (!areElementsInjected()) {
                        debug("Aborting because element container has not been initialized");
                        return;
                    }

                    positionScrollbars(element, width, height);
                });

                if (done) {
                    batchProcessor.add(2, function () {
                        if (!getState(element)) {
                            debug("Aborting because element has been uninstalled");
                            return;
                        }

                        if (!areElementsInjected()) {
                          debug("Aborting because element container has not been initialized");
                          return;
                        }

                        done();
                    });
                }
            }

            function areElementsInjected() {
                return !!getState(element).container;
            }

            function notifyListenersIfNeeded() {
                function isFirstNotify() {
                    return getState(element).lastNotifiedWidth === undefined;
                }

                debug("notifyListenersIfNeeded invoked");

                var state = getState(element);

                // Don't notify the if the current size is the start size, and this is the first notification.
                if (isFirstNotify() && state.lastWidth === state.startSize.width && state.lastHeight === state.startSize.height) {
                    return debug("Not notifying: Size is the same as the start size, and there has been no notification yet.");
                }

                // Don't notify if the size already has been notified.
                if (state.lastWidth === state.lastNotifiedWidth && state.lastHeight === state.lastNotifiedHeight) {
                    return debug("Not notifying: Size already notified");
                }


                debug("Current size not notified, notifying...");
                state.lastNotifiedWidth = state.lastWidth;
                state.lastNotifiedHeight = state.lastHeight;
                forEach(getState(element).listeners, function (listener) {
                    listener(element);
                });
            }

            function handleRender() {
                debug("startanimation triggered.");

                if (isUnrendered(element)) {
                    debug("Ignoring since element is still unrendered...");
                    return;
                }

                debug("Element rendered.");
                var expand = getExpandElement(element);
                var shrink = getShrinkElement(element);
                if (expand.scrollLeft === 0 || expand.scrollTop === 0 || shrink.scrollLeft === 0 || shrink.scrollTop === 0) {
                    debug("Scrollbars out of sync. Updating detector elements...");
                    updateDetectorElements(notifyListenersIfNeeded);
                }
            }

            function handleScroll() {
                debug("Scroll detected.");

                if (isUnrendered(element)) {
                    // Element is still unrendered. Skip this scroll event.
                    debug("Scroll event fired while unrendered. Ignoring...");
                    return;
                }

                var width = element.offsetWidth;
                var height = element.offsetHeight;

                if (width !== getState(element).lastWidth || height !== getState(element).lastHeight) {
                    debug("Element size changed.");
                    updateDetectorElements(notifyListenersIfNeeded);
                } else {
                    debug("Element size has not changed (" + width + "x" + height + ").");
                }
            }

            debug("registerListenersAndPositionElements invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            getState(element).onRendered = handleRender;
            getState(element).onExpand = handleScroll;
            getState(element).onShrink = handleScroll;

            var style = getState(element).style;
            updateChildSizes(element, style.width, style.height);
        }

        function finalizeDomMutation() {
            debug("finalizeDomMutation invoked.");

            if (!getState(element)) {
                debug("Aborting because element has been uninstalled");
                return;
            }

            var style = getState(element).style;
            storeCurrentSize(element, style.width, style.height);
            positionScrollbars(element, style.width, style.height);
        }

        function ready() {
            callback(element);
        }

        function install() {
            debug("Installing...");
            initListeners();
            storeStartSize();

            batchProcessor.add(0, storeStyle);
            batchProcessor.add(1, injectScrollElements);
            batchProcessor.add(2, registerListenersAndPositionElements);
            batchProcessor.add(3, finalizeDomMutation);
            batchProcessor.add(4, ready);
        }

        debug("Making detectable...");

        if (isDetached(element)) {
            debug("Element is detached");

            injectContainerElement();

            debug("Waiting until element is attached...");

            getState(element).onRendered = function () {
                debug("Element is now attached");
                install();
            };
        } else {
            install();
        }
    }

    function uninstall(element) {
        var state = getState(element);

        if (!state) {
            // Uninstall has been called on a non-erd element.
            return;
        }

        // Uninstall may have been called in the following scenarios:
        // (1) Right between the sync code and async batch (here state.busy = true, but nothing have been registered or injected).
        // (2) In the ready callback of the last level of the batch by another element (here, state.busy = true, but all the stuff has been injected).
        // (3) After the installation process (here, state.busy = false and all the stuff has been injected).
        // So to be on the safe side, let's check for each thing before removing.

        // We need to remove the event listeners, because otherwise the event might fire on an uninstall element which results in an error when trying to get the state of the element.
        state.onExpandScroll && removeEvent(getExpandElement(element), "scroll", state.onExpandScroll);
        state.onShrinkScroll && removeEvent(getShrinkElement(element), "scroll", state.onShrinkScroll);
        state.onAnimationStart && removeEvent(state.container, "animationstart", state.onAnimationStart);

        state.container && element.removeChild(state.container);
    }

    return {
        makeDetectable: makeDetectable,
        addListener: addListener,
        uninstall: uninstall
    };
};


/***/ }),

/***/ 1215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ResponsiveTable = function () {
    function ResponsiveTable(el, context) {
        _classCallCheck(this, ResponsiveTable);

        this.el = el;
        this.context = context;
        this.hiding = false;
        this.width = null;
        this.height = null;
    }

    _createClass(ResponsiveTable, [{
        key: "updateSize",
        value: function updateSize() {
            this.width = this.el.clientWidth;
            this.height = this.el.clientHeight;
        }
    }, {
        key: "shouldntResize",
        value: function shouldntResize() {
            return this.width === this.el.clientWidth && this.height !== this.el.clientHeight;
        }
    }, {
        key: "shouldHide",
        value: function shouldHide() {
            return this.el.clientWidth < this.el.scrollWidth;
        }
    }, {
        key: "shouldUnhide",
        value: function shouldUnhide() {
            return this.el.clientWidth === this.el.scrollWidth && !this.hiding;
        }
    }, {
        key: "hideColumns",
        value: function hideColumns() {
            var columns = this.context.template.columns.filter(function (column) {
                return column.meta.visible && !column.meta.hidden;
            });

            if (!columns.length) {
                return;
            }

            this.hiding = true;
            columns[columns.length - 1].meta.hidden = true;

            this.retryFit();
        }
    }, {
        key: "showColumn",
        value: function showColumn() {
            var columns = this.context.template.columns.filter(function (column) {
                return column.meta.hidden;
            });

            if (!columns.length) {
                return;
            }

            columns[0].meta.hidden = false;

            this.retryFit();
        }
    }, {
        key: "resize",
        value: function resize() {
            if (this.shouldntResize()) {
                return;
            }

            this.fit();
        }
    }, {
        key: "retryFit",
        value: function retryFit() {
            var _this = this;

            this.context.$nextTick(function () {
                _this.fit();
            });
        }
    }, {
        key: "fit",
        value: function fit() {
            if (this.shouldHide()) {
                this.hideColumns();
                return;
            }

            if (this.hiding) {
                this.hiding = false;
                return;
            }

            if (this.shouldUnhide()) {
                this.showColumn();
            }
        }
    }]);

    return ResponsiveTable;
}();

/* harmony default export */ __webpack_exports__["a"] = (ResponsiveTable);

/***/ }),

/***/ 1216:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.initialised
    ? _c(
        "div",
        { staticClass: "box" },
        [
          _c("top-controls", {
            staticClass: "has-padding-small has-padding-bottom-large",
            attrs: {
              template: _vm.template,
              i18n: _vm.i18n,
              length: _vm.length
            },
            on: {
              "update-length": function($event) {
                _vm.length = $event
              },
              "export-data": _vm.exportData,
              reload: function($event) {
                _vm.getData()
              },
              reset: _vm.resetPreferences
            },
            model: {
              value: _vm.search,
              callback: function($$v) {
                _vm.search = $$v
              },
              expression: "search"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              directives: [{ name: "responsive", rawName: "v-responsive" }],
              staticClass: "table-responsive"
            },
            [
              _c(
                "table",
                {
                  staticClass: "table is-fullwidth vue-data-table",
                  class: _vm.template.style,
                  attrs: { id: "id" }
                },
                [
                  _c("table-header", {
                    attrs: { template: _vm.template, i18n: _vm.i18n },
                    on: { "sort-update": _vm.getData }
                  }),
                  _vm._v(" "),
                  _vm.hasContent
                    ? _c(
                        "table-body",
                        _vm._g(
                          {
                            attrs: {
                              template: _vm.template,
                              body: _vm.body,
                              start: _vm.start,
                              i18n: _vm.i18n,
                              "custom-render": _vm.customRender,
                              expanded: _vm.expanded
                            },
                            on: { ajax: _vm.ajax }
                          },
                          _vm.$listeners
                        )
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.template.total && _vm.hasContent
                    ? _c("table-footer", {
                        attrs: {
                          template: _vm.template,
                          body: _vm.body,
                          i18n: _vm.i18n
                        }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _vm.loading ? _c("overlay") : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _vm.hasContent
            ? _c("div", { staticClass: "columns table-bottom-controls" }, [
                _c(
                  "div",
                  { staticClass: "column" },
                  [
                    _c("records-info", {
                      attrs: {
                        body: _vm.body,
                        i18n: _vm.i18n,
                        start: _vm.start,
                        length: _vm.length
                      }
                    })
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "column is-narrow has-text-right" },
                  [
                    _c("pagination", {
                      attrs: {
                        start: _vm.start,
                        length: _vm.length,
                        records: _vm.body.filtered,
                        i18n: _vm.i18n
                      },
                      on: {
                        "jump-to": function($event) {
                          _vm.start = $event
                          _vm.getData()
                        }
                      }
                    })
                  ],
                  1
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.body && !_vm.body.count
            ? _c("div", { staticClass: "has-text-centered no-records-found" }, [
                _vm._v(
                  "\n        " +
                    _vm._s(_vm.i18n("No records were found.")) +
                    "\n    "
                )
              ])
            : _vm._e()
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-1e541934", module.exports)
  }
}

/***/ }),

/***/ 1431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_vuedatatable_VueTable_vue__ = __webpack_require__(1143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_vuedatatable_VueTable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_enso_vuedatatable_VueTable_vue__);
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





/* harmony default export */ __webpack_exports__["default"] = ({
    components: { VueTable: __WEBPACK_IMPORTED_MODULE_1__components_enso_vuedatatable_VueTable_vue___default.a },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__'])),

    data: function data() {
        return {
            path: route('administration.users.initTable', [], false)
        };
    }
});

/***/ }),

/***/ 1432:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vue-table", {
    attrs: { path: _vm.path, i18n: _vm.__, id: "users" }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3fc6a497", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvRHJvcGRvd24udnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvY29sbGVjdGlvbi11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2Jyb3dzZXItZGV0ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlPzE5MTUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZT83Y2FhIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZT8yMjU4Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWU/YTIxZiIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvTGVuZ3RoTWVudS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9MZW5ndGhNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvRHJvcGRvd24udnVlP2RjNGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0Ryb3Bkb3duLnZ1ZT9hNTEwIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9Ecm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0Ryb3Bkb3duLnZ1ZT8xNmE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9MZW5ndGhNZW51LnZ1ZT8zYjljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0NvbHVtblZpc2liaWxpdHkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZT8xOTNmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9BbGlnbm1lbnQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZT9lZmEyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL1N0eWxlU2VsZWN0b3IudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZT85Nzg3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWU/OWJjNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWU/ZGI2NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlP2E2ODciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZT80NmI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlPzkxMTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWU/MzZkMSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlPzg3YmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZT83MDE2Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWU/MGQ0ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZT80NzBkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZT83MmI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWU/MzFjNyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlPzEyYzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlPzAzZjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZT9jYWVjIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWU/OWY1NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlP2FmN2EiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlP2I1NDciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWU/MGM1ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlPzFkZmUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlPzJlNzkiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWU/ODQxNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvcmVzcG9uc2l2ZS92UmVzcG9uc2l2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvZWxlbWVudC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2xpc3RlbmVyLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9pZC1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9pZC1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvcmVwb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhdGNoLXByb2Nlc3Nvci9zcmMvYmF0Y2gtcHJvY2Vzc29yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYXRjaC1wcm9jZXNzb3Ivc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvc3RhdGUtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2RldGVjdGlvbi1zdHJhdGVneS9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9kZXRlY3Rpb24tc3RyYXRlZ3kvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNwb25zaXZlL1Jlc3BvbnNpdmVUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlP2Y5MTMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvSW5kZXgudnVlPzI4NmIiXSwibmFtZXMiOlsiaW5zZXJ0ZWQiLCJlbCIsImJpbmRpbmciLCJjb250ZXh0IiwidGFibGUiLCJlcmQiLCJyZXNpemVEZXRlY3RvciIsInN0cmF0ZWd5IiwicmVzaXplIiwibGlzdGVuVG8iLCJSZXNwb25zaXZlVGFibGUiLCJoaWRpbmciLCJ3aWR0aCIsImhlaWdodCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsV2lkdGgiLCJjb2x1bW5zIiwidGVtcGxhdGUiLCJmaWx0ZXIiLCJjb2x1bW4iLCJtZXRhIiwidmlzaWJsZSIsImhpZGRlbiIsImxlbmd0aCIsInJldHJ5Rml0Iiwic2hvdWxkbnRSZXNpemUiLCJmaXQiLCIkbmV4dFRpY2siLCJzaG91bGRIaWRlIiwiaGlkZUNvbHVtbnMiLCJzaG91bGRVbmhpZGUiLCJzaG93Q29sdW1uIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDZDQUFpVjtBQUNqVjtBQUNBLCtDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztB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QTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUNBOztBQUVBO2tCQUdBOztBQUNBLHVHQUdBOzswQkFDQTs7OERBR0E7QUFGQTtBQUdBO0FBWEEsRzs7Ozs7OztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1osR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIxMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbmRleC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTNmYzZhNDk3XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvSW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTNmYzZhNDk3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtM2ZjNmE0OTdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvSW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMTAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTMxM2VhNDczXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRHJvcGRvd24udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ecm9wZG93bi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTMxM2VhNDczXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Ecm9wZG93bi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTMxM2VhNDczXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Ecm9wZG93bi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzEzZWE0NzNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zMTNlYTQ3M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0Ryb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vKipcbiAqIExvb3BzIHRocm91Z2ggdGhlIGNvbGxlY3Rpb24gYW5kIGNhbGxzIHRoZSBjYWxsYmFjayBmb3IgZWFjaCBlbGVtZW50LiBpZiB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnV0aHksIHRoZSBsb29wIGlzIGJyb2tlbiBhbmQgcmV0dXJucyB0aGUgc2FtZSB2YWx1ZS5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBsb29wIHRocm91Z2guIE5lZWRzIHRvIGhhdmUgYSBsZW5ndGggcHJvcGVydHkgc2V0IGFuZCBoYXZlIGluZGljZXMgc2V0IGZyb20gMCB0byBsZW5ndGggLSAxLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50LiBUaGUgZWxlbWVudCB3aWxsIGJlIGdpdmVuIGFzIGEgcGFyYW1ldGVyIHRvIHRoZSBjYWxsYmFjay4gSWYgdGhpcyBjYWxsYmFjayByZXR1cm5zIHRydXRoeSwgdGhlIGxvb3AgaXMgYnJva2VuIGFuZCB0aGUgc2FtZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgdmFsdWUgdGhhdCBhIGNhbGxiYWNrIGhhcyByZXR1cm5lZCAoaWYgdHJ1dGh5KS4gT3RoZXJ3aXNlIG5vdGhpbmcuXG4gKi9cbnV0aWxzLmZvckVhY2ggPSBmdW5jdGlvbihjb2xsZWN0aW9uLCBjYWxsYmFjaykge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjayhjb2xsZWN0aW9uW2ldKTtcbiAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9jb2xsZWN0aW9uLXV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTQwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkZXRlY3RvciA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbmRldGVjdG9yLmlzSUUgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgZnVuY3Rpb24gaXNBbnlJZVZlcnNpb24oKSB7XG4gICAgICAgIHZhciBhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGFnZW50LmluZGV4T2YoXCJtc2llXCIpICE9PSAtMSB8fCBhZ2VudC5pbmRleE9mKFwidHJpZGVudFwiKSAhPT0gLTEgfHwgYWdlbnQuaW5kZXhPZihcIiBlZGdlL1wiKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgaWYoIWlzQW55SWVWZXJzaW9uKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCF2ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vU2hhbWVsZXNzbHkgc3RvbGVuIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGFkb2xzZXkvNTI3NjgzXG4gICAgdmFyIGllVmVyc2lvbiA9IChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdW5kZWYsXG4gICAgICAgICAgICB2ID0gMyxcbiAgICAgICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgICAgICBhbGwgPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpXCIpO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBcIjwhLS1baWYgZ3QgSUUgXCIgKyAoKyt2KSArIFwiXT48aT48L2k+PCFbZW5kaWZdLS0+XCI7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGFsbFswXSk7XG5cbiAgICAgICAgcmV0dXJuIHYgPiA0ID8gdiA6IHVuZGVmO1xuICAgIH0oKSk7XG5cbiAgICByZXR1cm4gdmVyc2lvbiA9PT0gaWVWZXJzaW9uO1xufTtcblxuZGV0ZWN0b3IuaXNMZWdhY3lPcGVyYSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXdpbmRvdy5vcGVyYTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvYnJvd3Nlci1kZXRlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWU1NDE5MzRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlVGFibGUudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWVUYWJsZS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTFlNTQxOTM0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVnVlVGFibGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFlNTQxOTM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWU1NDE5MzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDExNDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWU1NDE5MzRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlVGFibGUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI5NmVjNTk0NFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZTU0MTkzNFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVUYWJsZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWU1NDE5MzRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlVGFibGUudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFlNTQxOTM0XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQ0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWJsZS52dWUtZGF0YS10YWJsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi50YWJsZS1yZXNwb25zaXZlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IC4wMSU7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxufVxcbi50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5kaXYudGFibGUtYm90dG9tLWNvbnRyb2xzIHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcbmRpdi5uby1yZWNvcmRzLWZvdW5kIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJYQTtJQUNBLGlCQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTtJQUNBLGtCQUFBO0NBQ0E7QUFFQTtJQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlZ1ZVRhYmxlLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImJveFxcXCJcXG4gICAgICAgIHYtaWY9XFxcImluaXRpYWxpc2VkXFxcIj5cXG4gICAgICAgIDx0b3AtY29udHJvbHMgOnRlbXBsYXRlPVxcXCJ0ZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiaGFzLXBhZGRpbmctc21hbGwgaGFzLXBhZGRpbmctYm90dG9tLWxhcmdlXFxcIlxcbiAgICAgICAgICAgIDppMThuPVxcXCJpMThuXFxcIlxcbiAgICAgICAgICAgIDpsZW5ndGg9XFxcImxlbmd0aFxcXCJcXG4gICAgICAgICAgICBAdXBkYXRlLWxlbmd0aD1cXFwibGVuZ3RoPSRldmVudFxcXCJcXG4gICAgICAgICAgICBAZXhwb3J0LWRhdGE9XFxcImV4cG9ydERhdGFcXFwiXFxuICAgICAgICAgICAgQHJlbG9hZD1cXFwiZ2V0RGF0YSgpXFxcIlxcbiAgICAgICAgICAgIEByZXNldD1cXFwicmVzZXRQcmVmZXJlbmNlc1xcXCJcXG4gICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2hcXFwiPlxcbiAgICAgICAgPC90b3AtY29udHJvbHM+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIlxcbiAgICAgICAgICAgIHYtcmVzcG9uc2l2ZT5cXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIGlzLWZ1bGx3aWR0aCB2dWUtZGF0YS10YWJsZVxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ0ZW1wbGF0ZS5zdHlsZVxcXCJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImlkXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRhYmxlLWhlYWRlciA6dGVtcGxhdGU9XFxcInRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XFxcImkxOG5cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAc29ydC11cGRhdGU9XFxcImdldERhdGFcXFwiPlxcbiAgICAgICAgICAgICAgICA8L3RhYmxlLWhlYWRlcj5cXG4gICAgICAgICAgICAgICAgPHRhYmxlLWJvZHkgOnRlbXBsYXRlPVxcXCJ0ZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtb249XFxcIiRsaXN0ZW5lcnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Ym9keT1cXFwiYm9keVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpzdGFydD1cXFwic3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cXFwiaTE4blxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjdXN0b20tcmVuZGVyPVxcXCJjdXN0b21SZW5kZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6ZXhwYW5kZWQ9XFxcImV4cGFuZGVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGFqYXg9XFxcImFqYXhcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJoYXNDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPC90YWJsZS1ib2R5PlxcbiAgICAgICAgICAgICAgICA8dGFibGUtZm9vdGVyIHYtaWY9XFxcInRlbXBsYXRlLnRvdGFsICYmIGhhc0NvbnRlbnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6dGVtcGxhdGU9XFxcInRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmJvZHk9XFxcImJvZHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cXFwiaTE4blxcXCI+XFxuICAgICAgICAgICAgICAgIDwvdGFibGUtZm9vdGVyPlxcbiAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgPG92ZXJsYXkgdi1pZj1cXFwibG9hZGluZ1xcXCI+PC9vdmVybGF5PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIHRhYmxlLWJvdHRvbS1jb250cm9sc1xcXCJcXG4gICAgICAgICAgICB2LWlmPVxcXCJoYXNDb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5cXFwiPlxcbiAgICAgICAgICAgICAgICA8cmVjb3Jkcy1pbmZvIDpib2R5PVxcXCJib2R5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XFxcImkxOG5cXFwiXFxuICAgICAgICAgICAgICAgICAgICA6c3RhcnQ9XFxcInN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cXFwibGVuZ3RoXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9yZWNvcmRzLWluZm8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGlzLW5hcnJvdyBoYXMtdGV4dC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgIDxwYWdpbmF0aW9uIDpzdGFydD1cXFwic3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6bGVuZ3RoPVxcXCJsZW5ndGhcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6cmVjb3Jkcz1cXFwiYm9keS5maWx0ZXJlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDppMThuPVxcXCJpMThuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGp1bXAtdG89XFxcInN0YXJ0ID0gJGV2ZW50O2dldERhdGEoKVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvcGFnaW5hdGlvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiB2LWlmPVxcXCJib2R5ICYmICFib2R5LmNvdW50XFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJoYXMtdGV4dC1jZW50ZXJlZCBuby1yZWNvcmRzLWZvdW5kXFxcIj5cXG4gICAgICAgICAgICB7eyBpMThuKCdObyByZWNvcmRzIHdlcmUgZm91bmQuJykgfX1cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xcbmltcG9ydCBUb3BDb250cm9scyBmcm9tICcuL1RvcENvbnRyb2xzLnZ1ZSc7XFxuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vVGFibGVIZWFkZXIudnVlJztcXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vVGFibGVCb2R5LnZ1ZSc7XFxuaW1wb3J0IFRhYmxlRm9vdGVyIGZyb20gJy4vVGFibGVGb290ZXIudnVlJztcXG5pbXBvcnQgUmVjb3Jkc0luZm8gZnJvbSAnLi9SZWNvcmRzSW5mby52dWUnO1xcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbi52dWUnO1xcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheS52dWUnO1xcbmltcG9ydCB2UmVzcG9uc2l2ZSBmcm9tICcuL3Jlc3BvbnNpdmUvdlJlc3BvbnNpdmUnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ1Z1ZVRhYmxlJyxcXG5cXG4gICAgY29tcG9uZW50czoge1xcbiAgICAgICAgVG9wQ29udHJvbHMsIFRhYmxlSGVhZGVyLCBUYWJsZUJvZHksIFRhYmxlRm9vdGVyLCBSZWNvcmRzSW5mbywgT3ZlcmxheSwgUGFnaW5hdGlvbixcXG4gICAgfSxcXG5cXG4gICAgZGlyZWN0aXZlczoge1xcbiAgICAgICAgcmVzcG9uc2l2ZTogdlJlc3BvbnNpdmUsXFxuICAgIH0sXFxuXFxuICAgIHByb3BzOiB7XFxuICAgICAgICBpZDoge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBwYXRoOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZpbHRlcnM6IHtcXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICBpbnRlcnZhbHM6IHtcXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICBjdXN0b21SZW5kZXI6IHtcXG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICBkZWZhdWx0OiAocm93LCBjb2x1bW4pID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kdG9hc3RyLndhcm5pbmcoYCdDdXN0b20gcmVuZGVyIGZ1bmN0aW9uIGlzIG1pc3NpbmcgZm9yIGNvbHVtbjogJHtjb2x1bW4ubmFtZX0nYCk7XFxuICAgICAgICAgICAgICAgIHJldHVybiByb3dbY29sdW1uLm5hbWVdO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAgaTE4bjoge1xcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHZhbHVlID0+IHZhbHVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIHByZWZlcmVuY2VzS2V5KCkge1xcbiAgICAgICAgICAgIHJldHVybiBgVnVlVGFibGVfJHt0aGlzLmlkfV9wcmVmZXJlbmNlc2A7XFxuICAgICAgICB9LFxcbiAgICAgICAgcHJlZmVyZW5jZXMoKSB7XFxuICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBnbG9iYWw6IHtcXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5sZW5ndGgsXFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLnRlbXBsYXRlLnNvcnQsXFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogdGhpcy50ZW1wbGF0ZS5zdHlsZSxcXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiB0aGlzLnRlbXBsYXRlLmFsaWduLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLnRlbXBsYXRlLmNvbHVtbnMucmVkdWNlKChjb2xsZWN0b3IsIGNvbHVtbikgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdG9yLnB1c2goe1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6IGNvbHVtbi5tZXRhLnNvcnQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogY29sdW1uLm1ldGEudmlzaWJsZSxcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3RvcjtcXG4gICAgICAgICAgICAgICAgfSwgW10pLFxcbiAgICAgICAgICAgIH07XFxuICAgICAgICB9LFxcbiAgICAgICAgaGFzQ29udGVudCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2R5ICYmIHRoaXMuYm9keS5jb3VudDtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxcbiAgICAgICAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcXG4gICAgICAgICAgICB0ZW1wbGF0ZTogbnVsbCxcXG4gICAgICAgICAgICBzZWFyY2g6ICcnLFxcbiAgICAgICAgICAgIHN0YXJ0OiBudWxsLFxcbiAgICAgICAgICAgIGJvZHk6IG51bGwsXFxuICAgICAgICAgICAgbGVuZ3RoOiBudWxsLFxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBbXSxcXG4gICAgICAgIH07XFxuICAgIH0sXFxuXFxuICAgIHdhdGNoOiB7XFxuICAgICAgICBzZWFyY2g6IHtcXG4gICAgICAgICAgICBoYW5kbGVyKCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZSgpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAgZmlsdGVyczoge1xcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGludGVydmFsczoge1xcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGxlbmd0aDoge1xcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICBwcmVmZXJlbmNlczoge1xcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NvbnRlbnQpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVByZWZlcmVuY2VzKCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBjcmVhdGVkKCkge1xcbiAgICAgICAgdGhpcy5nZXREYXRhID0gZGVib3VuY2UodGhpcy5nZXREYXRhLCAxMDApO1xcbiAgICAgICAgdGhpcy5pbml0KCk7XFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGluaXQoKSB7XFxuICAgICAgICAgICAgYXhpb3MuZ2V0KHRoaXMucGF0aCkudGhlbigoeyBkYXRhIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRhdGEudGVtcGxhdGU7XFxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQgPSAwO1xcbiAgICAgICAgICAgICAgICBbdGhpcy5sZW5ndGhdID0gdGhpcy50ZW1wbGF0ZS5sZW5ndGhNZW51O1xcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByZWZlcmVuY2VzKCk7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XFxuXFxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDU1NSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdG9hc3RyLmVycm9yKGRhdGEubWVzc2FnZSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0UHJlZmVyZW5jZXMoKSB7XFxuICAgICAgICAgICAgdGhpcy5zZXREZWZhdWx0UHJlZmVyZW5jZXMoKTtcXG5cXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSkgIT09IG51bGwpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRVc2VyUHJlZmVyZW5jZXMoKTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXREZWZhdWx0UHJlZmVyZW5jZXMoKSB7XFxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLmZvckVhY2goKHsgbWV0YSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHNldChtZXRhLCAnc29ydCcsIG51bGwpO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQobWV0YSwgJ2hpZGRlbicsIGZhbHNlKTtcXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy50ZW1wbGF0ZSwgJ3NvcnQnLCBmYWxzZSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0VXNlclByZWZlcmVuY2VzKCkge1xcbiAgICAgICAgICAgIGNvbnN0IHByZWZzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnByZWZlcmVuY2VzS2V5KSk7XFxuXFxuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJlZnMuZ2xvYmFsKS5mb3JFYWNoKChrZXkpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsIGtleSwgcHJlZnMuZ2xvYmFsW2tleV0pO1xcbiAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZWZzLnRlbXBsYXRlKS5mb3JFYWNoKChrZXkpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudGVtcGxhdGUsIGtleSwgcHJlZnMudGVtcGxhdGVba2V5XSk7XFxuICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgcHJlZnMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XFxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbHVtbikuZm9yRWFjaCgoa2V5KSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy50ZW1wbGF0ZS5jb2x1bW5zW2luZGV4XS5tZXRhLCBrZXksIGNvbHVtbltrZXldKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2F2ZVByZWZlcmVuY2VzKCkge1xcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMucHJlZmVyZW5jZXNLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMucHJlZmVyZW5jZXMpKTtcXG4gICAgICAgIH0sXFxuICAgICAgICByZXNldFByZWZlcmVuY2VzKCkge1xcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMucHJlZmVyZW5jZXNLZXkpO1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJyc7XFxuICAgICAgICAgICAgdGhpcy5pbml0KCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0RGF0YSgpIHtcXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSBbXTtcXG5cXG4gICAgICAgICAgICBheGlvcy5nZXQodGhpcy50ZW1wbGF0ZS5yZWFkUGF0aCwgeyBwYXJhbXM6IHRoaXMucmVhZFJlcXVlc3QoKSB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkgPSBkYXRhO1xcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHJlYWRSZXF1ZXN0KCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMucmVxdWVzdENvbHVtbnMoKSxcXG4gICAgICAgICAgICAgICAgbWV0YToge1xcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMubGVuZ3RoLFxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy50ZW1wbGF0ZS5zb3J0LFxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHRoaXMudGVtcGxhdGUudG90YWwsXFxuICAgICAgICAgICAgICAgICAgICBlbnVtOiB0aGlzLnRlbXBsYXRlLmVudW0sXFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB0aGlzLnRlbXBsYXRlLmRhdGUsXFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiB0aGlzLnRlbXBsYXRlLmFjdGlvbnMsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXFxuICAgICAgICAgICAgICAgIGFwcGVuZHM6IHRoaXMudGVtcGxhdGUuYXBwZW5kcyxcXG4gICAgICAgICAgICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLFxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbHM6IHRoaXMuaW50ZXJ2YWxzLFxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLFxcbiAgICAgICAgICAgIH07XFxuICAgICAgICB9LFxcbiAgICAgICAgcmVxdWVzdENvbHVtbnMoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGUuY29sdW1ucy5yZWR1Y2UoKGNvbHVtbnMsIGNvbHVtbikgPT4ge1xcbiAgICAgICAgICAgICAgICBjb2x1bW5zLnB1c2goe1xcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjb2x1bW4uZGF0YSxcXG4gICAgICAgICAgICAgICAgICAgIG1ldGE6IHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiBjb2x1bW4ubWV0YS5zZWFyY2hhYmxlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBjb2x1bW4ubWV0YS5zb3J0YWJsZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiBjb2x1bW4ubWV0YS5zb3J0LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBjb2x1bW4ubWV0YS50b3RhbCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBjb2x1bW4ubWV0YS5kYXRlLFxcbiAgICAgICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgICAgIGVudW06IGNvbHVtbi5lbnVtLFxcbiAgICAgICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XFxuICAgICAgICAgICAgfSwgW10pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGV4cG9ydERhdGEocGF0aCkge1xcbiAgICAgICAgICAgIGF4aW9zLmdldChwYXRoLCB7IHBhcmFtczogdGhpcy5leHBvcnRSZXF1ZXN0KCkgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kdG9hc3RyLnN1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IGVycm9yLnJlc3BvbnNlO1xcblxcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA1NTUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0ci5lcnJvcihkYXRhLm1lc3NhZ2UpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGV4cG9ydFJlcXVlc3QoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy50ZW1wbGF0ZS5uYW1lLFxcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLnRlbXBsYXRlLmNvbHVtbnMsXFxuICAgICAgICAgICAgICAgIG1ldGE6IHtcXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLmJvZHkuY291bnQsXFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLnRlbXBsYXRlLnNvcnQsXFxuICAgICAgICAgICAgICAgICAgICBlbnVtOiB0aGlzLnRlbXBsYXRlLmVudW0sXFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB0aGlzLnRlbXBsYXRlLmRhdGUsXFxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogZmFsc2UsXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXFxuICAgICAgICAgICAgICAgIGFwcGVuZHM6IHRoaXMudGVtcGxhdGUuYXBwZW5kcyxcXG4gICAgICAgICAgICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLFxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbHM6IHRoaXMuaW50ZXJ2YWxzLFxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLFxcbiAgICAgICAgICAgIH07XFxuICAgICAgICB9LFxcbiAgICAgICAgYWpheChtZXRob2QsIHBhdGgpIHtcXG4gICAgICAgICAgICBheGlvc1ttZXRob2QudG9Mb3dlckNhc2UoKV0ocGF0aCkudGhlbigoeyBkYXRhIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kdG9hc3RyLnN1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGZpbHRlclVwZGF0ZSgpIHtcXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gMDtcXG4gICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIC50YWJsZS52dWUtZGF0YS10YWJsZSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxuICAgICAgICBtaW4taGVpZ2h0OiAuMDElO1xcbiAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgfVxcblxcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB0YWJsZSB7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIH1cXG5cXG4gICAgZGl2LnRhYmxlLWJvdHRvbS1jb250cm9scyB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcXG4gICAgfVxcblxcbiAgICBkaXYubm8tcmVjb3Jkcy1mb3VuZCB7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMWU1NDE5MzRcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDExNDVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiYm94XCJcbiAgICAgICAgdi1pZj1cImluaXRpYWxpc2VkXCI+XG4gICAgICAgIDx0b3AtY29udHJvbHMgOnRlbXBsYXRlPVwidGVtcGxhdGVcIlxuICAgICAgICAgICAgY2xhc3M9XCJoYXMtcGFkZGluZy1zbWFsbCBoYXMtcGFkZGluZy1ib3R0b20tbGFyZ2VcIlxuICAgICAgICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgICAgICAgIDpsZW5ndGg9XCJsZW5ndGhcIlxuICAgICAgICAgICAgQHVwZGF0ZS1sZW5ndGg9XCJsZW5ndGg9JGV2ZW50XCJcbiAgICAgICAgICAgIEBleHBvcnQtZGF0YT1cImV4cG9ydERhdGFcIlxuICAgICAgICAgICAgQHJlbG9hZD1cImdldERhdGEoKVwiXG4gICAgICAgICAgICBAcmVzZXQ9XCJyZXNldFByZWZlcmVuY2VzXCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJzZWFyY2hcIj5cbiAgICAgICAgPC90b3AtY29udHJvbHM+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1yZXNwb25zaXZlXCJcbiAgICAgICAgICAgIHYtcmVzcG9uc2l2ZT5cbiAgICAgICAgICAgIDx0YWJsZSBjbGFzcz1cInRhYmxlIGlzLWZ1bGx3aWR0aCB2dWUtZGF0YS10YWJsZVwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwidGVtcGxhdGUuc3R5bGVcIlxuICAgICAgICAgICAgICAgIGlkPVwiaWRcIj5cbiAgICAgICAgICAgICAgICA8dGFibGUtaGVhZGVyIDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgICAgICAgICAgICAgICAgQHNvcnQtdXBkYXRlPVwiZ2V0RGF0YVwiPlxuICAgICAgICAgICAgICAgIDwvdGFibGUtaGVhZGVyPlxuICAgICAgICAgICAgICAgIDx0YWJsZS1ib2R5IDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgdi1vbj1cIiRsaXN0ZW5lcnNcIlxuICAgICAgICAgICAgICAgICAgICA6Ym9keT1cImJvZHlcIlxuICAgICAgICAgICAgICAgICAgICA6c3RhcnQ9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIDppMThuPVwiaTE4blwiXG4gICAgICAgICAgICAgICAgICAgIDpjdXN0b20tcmVuZGVyPVwiY3VzdG9tUmVuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgOmV4cGFuZGVkPVwiZXhwYW5kZWRcIlxuICAgICAgICAgICAgICAgICAgICBAYWpheD1cImFqYXhcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaGFzQ29udGVudFwiPlxuICAgICAgICAgICAgICAgIDwvdGFibGUtYm9keT5cbiAgICAgICAgICAgICAgICA8dGFibGUtZm9vdGVyIHYtaWY9XCJ0ZW1wbGF0ZS50b3RhbCAmJiBoYXNDb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgOnRlbXBsYXRlPVwidGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICA6Ym9keT1cImJvZHlcIlxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cImkxOG5cIj5cbiAgICAgICAgICAgICAgICA8L3RhYmxlLWZvb3Rlcj5cbiAgICAgICAgICAgIDwvdGFibGU+XG4gICAgICAgICAgICA8b3ZlcmxheSB2LWlmPVwibG9hZGluZ1wiPjwvb3ZlcmxheT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIHRhYmxlLWJvdHRvbS1jb250cm9sc1wiXG4gICAgICAgICAgICB2LWlmPVwiaGFzQ29udGVudFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgIDxyZWNvcmRzLWluZm8gOmJvZHk9XCJib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgICAgICAgICAgICAgICAgOnN0YXJ0PVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICA6bGVuZ3RoPVwibGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgPC9yZWNvcmRzLWluZm8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtbmFycm93IGhhcy10ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHBhZ2luYXRpb24gOnN0YXJ0PVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICA6bGVuZ3RoPVwibGVuZ3RoXCJcbiAgICAgICAgICAgICAgICAgICAgOnJlY29yZHM9XCJib2R5LmZpbHRlcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgICAgICAgICAgICAgICAgQGp1bXAtdG89XCJzdGFydCA9ICRldmVudDtnZXREYXRhKClcIj5cbiAgICAgICAgICAgICAgICA8L3BhZ2luYXRpb24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgdi1pZj1cImJvZHkgJiYgIWJvZHkuY291bnRcIlxuICAgICAgICAgICAgY2xhc3M9XCJoYXMtdGV4dC1jZW50ZXJlZCBuby1yZWNvcmRzLWZvdW5kXCI+XG4gICAgICAgICAgICB7eyBpMThuKCdObyByZWNvcmRzIHdlcmUgZm91bmQuJykgfX1cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBUb3BDb250cm9scyBmcm9tICcuL1RvcENvbnRyb2xzLnZ1ZSc7XG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi9UYWJsZUhlYWRlci52dWUnO1xuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL1RhYmxlQm9keS52dWUnO1xuaW1wb3J0IFRhYmxlRm9vdGVyIGZyb20gJy4vVGFibGVGb290ZXIudnVlJztcbmltcG9ydCBSZWNvcmRzSW5mbyBmcm9tICcuL1JlY29yZHNJbmZvLnZ1ZSc7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL1BhZ2luYXRpb24udnVlJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheS52dWUnO1xuaW1wb3J0IHZSZXNwb25zaXZlIGZyb20gJy4vcmVzcG9uc2l2ZS92UmVzcG9uc2l2ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnVnVlVGFibGUnLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBUb3BDb250cm9scywgVGFibGVIZWFkZXIsIFRhYmxlQm9keSwgVGFibGVGb290ZXIsIFJlY29yZHNJbmZvLCBPdmVybGF5LCBQYWdpbmF0aW9uLFxuICAgIH0sXG5cbiAgICBkaXJlY3RpdmVzOiB7XG4gICAgICAgIHJlc3BvbnNpdmU6IHZSZXNwb25zaXZlLFxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICBpZDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBhdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIGludGVydmFsczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgY3VzdG9tUmVuZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IChyb3csIGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0ci53YXJuaW5nKGAnQ3VzdG9tIHJlbmRlciBmdW5jdGlvbiBpcyBtaXNzaW5nIGZvciBjb2x1bW46ICR7Y29sdW1uLm5hbWV9J2ApO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3dbY29sdW1uLm5hbWVdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBkZWZhdWx0OiB2YWx1ZSA9PiB2YWx1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgcHJlZmVyZW5jZXNLZXkoKSB7XG4gICAgICAgICAgICByZXR1cm4gYFZ1ZVRhYmxlXyR7dGhpcy5pZH1fcHJlZmVyZW5jZXNgO1xuICAgICAgICB9LFxuICAgICAgICBwcmVmZXJlbmNlcygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pbml0aWFsaXNlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGdsb2JhbDoge1xuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5zdGFydCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRoaXMudGVtcGxhdGUuc29ydCxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHRoaXMudGVtcGxhdGUuc3R5bGUsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduOiB0aGlzLnRlbXBsYXRlLmFsaWduLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29sdW1uczogdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLnJlZHVjZSgoY29sbGVjdG9yLCBjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29sbGVjdG9yLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogY29sdW1uLm1ldGEuc29ydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGNvbHVtbi5tZXRhLnZpc2libGUsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xsZWN0b3I7XG4gICAgICAgICAgICAgICAgfSwgW10pLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzQ29udGVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvZHkgJiYgdGhpcy5ib2R5LmNvdW50O1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBpbml0aWFsaXNlZDogZmFsc2UsXG4gICAgICAgICAgICB0ZW1wbGF0ZTogbnVsbCxcbiAgICAgICAgICAgIHNlYXJjaDogJycsXG4gICAgICAgICAgICBzdGFydDogbnVsbCxcbiAgICAgICAgICAgIGJvZHk6IG51bGwsXG4gICAgICAgICAgICBsZW5ndGg6IG51bGwsXG4gICAgICAgICAgICBleHBhbmRlZDogW10sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGludGVydmFsczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZSgpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmVyZW5jZXM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ29udGVudCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmdldERhdGEgPSBkZWJvdW5jZSh0aGlzLmdldERhdGEsIDEwMCk7XG4gICAgICAgIHRoaXMuaW5pdCgpO1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGluaXQoKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQodGhpcy5wYXRoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBkYXRhLnRlbXBsYXRlO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQgPSAwO1xuICAgICAgICAgICAgICAgIFt0aGlzLmxlbmd0aF0gPSB0aGlzLnRlbXBsYXRlLmxlbmd0aE1lbnU7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcmVmZXJlbmNlcygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IGVycm9yLnJlc3BvbnNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNTU1KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0ci5lcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFByZWZlcmVuY2VzKCkge1xuICAgICAgICAgICAgdGhpcy5zZXREZWZhdWx0UHJlZmVyZW5jZXMoKTtcblxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucHJlZmVyZW5jZXNLZXkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRVc2VyUHJlZmVyZW5jZXMoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldERlZmF1bHRQcmVmZXJlbmNlcygpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUuY29sdW1ucy5mb3JFYWNoKCh7IG1ldGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldChtZXRhLCAnc29ydCcsIG51bGwpO1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldChtZXRhLCAnaGlkZGVuJywgZmFsc2UpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnRlbXBsYXRlLCAnc29ydCcsIGZhbHNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0VXNlclByZWZlcmVuY2VzKCkge1xuICAgICAgICAgICAgY29uc3QgcHJlZnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucHJlZmVyZW5jZXNLZXkpKTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJlZnMuZ2xvYmFsKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywga2V5LCBwcmVmcy5nbG9iYWxba2V5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJlZnMudGVtcGxhdGUpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnRlbXBsYXRlLCBrZXksIHByZWZzLnRlbXBsYXRlW2tleV0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHByZWZzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGNvbHVtbikuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnRlbXBsYXRlLmNvbHVtbnNbaW5kZXhdLm1ldGEsIGtleSwgY29sdW1uW2tleV0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNhdmVQcmVmZXJlbmNlcygpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMucHJlZmVyZW5jZXNLZXksIEpTT04uc3RyaW5naWZ5KHRoaXMucHJlZmVyZW5jZXMpKTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVzZXRQcmVmZXJlbmNlcygpIHtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHRoaXMucHJlZmVyZW5jZXNLZXkpO1xuICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSAnJztcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xuICAgICAgICB9LFxuICAgICAgICBnZXREYXRhKCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSBbXTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KHRoaXMudGVtcGxhdGUucmVhZFBhdGgsIHsgcGFyYW1zOiB0aGlzLnJlYWRSZXF1ZXN0KCkgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkgPSBkYXRhO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVhZFJlcXVlc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMucmVxdWVzdENvbHVtbnMoKSxcbiAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLnRlbXBsYXRlLnNvcnQsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiB0aGlzLnRlbXBsYXRlLnRvdGFsLFxuICAgICAgICAgICAgICAgICAgICBlbnVtOiB0aGlzLnRlbXBsYXRlLmVudW0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMudGVtcGxhdGUuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogdGhpcy50ZW1wbGF0ZS5hY3Rpb25zLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICAgICAgICBhcHBlbmRzOiB0aGlzLnRlbXBsYXRlLmFwcGVuZHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLFxuICAgICAgICAgICAgICAgIGludGVydmFsczogdGhpcy5pbnRlcnZhbHMsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVlc3RDb2x1bW5zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGUuY29sdW1ucy5yZWR1Y2UoKGNvbHVtbnMsIGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGNvbHVtbi5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiBjb2x1bW4uZGF0YSxcbiAgICAgICAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogY29sdW1uLm1ldGEuc2VhcmNoYWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRhYmxlOiBjb2x1bW4ubWV0YS5zb3J0YWJsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6IGNvbHVtbi5tZXRhLnNvcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogY29sdW1uLm1ldGEudG90YWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiBjb2x1bW4ubWV0YS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlbnVtOiBjb2x1bW4uZW51bSxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICB9LFxuICAgICAgICBleHBvcnREYXRhKHBhdGgpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldChwYXRoLCB7IHBhcmFtczogdGhpcy5leHBvcnRSZXF1ZXN0KCkgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiR0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IGVycm9yLnJlc3BvbnNlO1xuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNTU1KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHRvYXN0ci5lcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV4cG9ydFJlcXVlc3QoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudGVtcGxhdGUubmFtZSxcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLnRlbXBsYXRlLmNvbHVtbnMsXG4gICAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLmJvZHkuY291bnQsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRoaXMudGVtcGxhdGUuc29ydCxcbiAgICAgICAgICAgICAgICAgICAgZW51bTogdGhpcy50ZW1wbGF0ZS5lbnVtLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB0aGlzLnRlbXBsYXRlLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgICAgICAgYXBwZW5kczogdGhpcy50ZW1wbGF0ZS5hcHBlbmRzLFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IHRoaXMuZmlsdGVycyxcbiAgICAgICAgICAgICAgICBpbnRlcnZhbHM6IHRoaXMuaW50ZXJ2YWxzLFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5wYXJhbXMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBhamF4KG1ldGhvZCwgcGF0aCkge1xuICAgICAgICAgICAgYXhpb3NbbWV0aG9kLnRvTG93ZXJDYXNlKCldKHBhdGgpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kdG9hc3RyLnN1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyVXBkYXRlKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnN0YXJ0ID0gMDtcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgLnRhYmxlLnZ1ZS1kYXRhLXRhYmxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtaW4taGVpZ2h0OiAuMDElO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIH1cblxuICAgIC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgIGRpdi50YWJsZS1ib3R0b20tY29udHJvbHMge1xuICAgICAgICBtYXJnaW4tdG9wOiAuNXJlbTtcbiAgICB9XG5cbiAgICBkaXYubm8tcmVjb3Jkcy1mb3VuZCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTI1NWI2OGM2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVG9wQ29udHJvbHMudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ub3BDb250cm9scy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTI1NWI2OGM2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Ub3BDb250cm9scy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTI1NWI2OGM2XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjU1YjY4YzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yNTViNjhjNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yNTViNjhjNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RvcENvbnRyb2xzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYmNlZWFkODBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjU1YjY4YzZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ub3BDb250cm9scy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjU1YjY4YzZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ub3BDb250cm9scy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMjU1YjY4YzZcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVG9wQ29udHJvbHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50aXRsZSAuaWNvbltkYXRhLXYtMjU1YjY4YzZdIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSw0QkFBNEI7Q0FBRVwiLFwiZmlsZVwiOlwiVG9wQ29udHJvbHMudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi50aXRsZSAuaWNvbiB7XFxuICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMjU1YjY4YzZcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVG9wQ29udHJvbHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbXVsdGlsaW5lXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGhhcy1wYWRkaW5nLXNtYWxsIGlzLWhhbGYgaXMtaGlkZGVuLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRpdGxlIGlzLTVcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgOmljb249XCJ0ZW1wbGF0ZS5pY29uXCI+PC9mYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyBpMThuKHRlbXBsYXRlLm5hbWUpIH19XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy1oYWxmIGhhcy10ZXh0LXJpZ2h0LXRhYmxldCBoYXMtdGV4dC1jZW50ZXJlZC1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiYnV0dG9uIGluIHRlbXBsYXRlLmJ1dHRvbnMuZ2xvYmFsXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYnV0dG9uLmNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImJ1dHRvbi5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIDpocmVmPVwiYnV0dG9uLmFjdGlvbiA9PT0gJ2hyZWYnID8gYnV0dG9uLnBhdGggOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZG9BY3Rpb24oYnV0dG9uKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBpMThuKGJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhIDppY29uPVwiYnV0dG9uLmljb25cIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaGFzLXBhZGRpbmctc21hbGwgaXMtdHdvLXRoaXJkcy1kZXNrdG9wIGhhcy10ZXh0LWNlbnRlcmVkLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgIDxsZW5ndGgtbWVudSA6dGVtcGxhdGU9XCJ0ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICB2LW9uPVwiJGxpc3RlbmVyc1wiPlxuICAgICAgICAgICAgICAgIDwvbGVuZ3RoLW1lbnU+XG4gICAgICAgICAgICAgICAgPGNvbHVtbi12aXNpYmlsaXR5IDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgdi1vbj1cIiRsaXN0ZW5lcnNcIj5cbiAgICAgICAgICAgICAgICA8L2NvbHVtbi12aXNpYmlsaXR5PlxuICAgICAgICAgICAgICAgIDxzdHlsZS1zZWxlY3RvciA6dGVtcGxhdGU9XCJ0ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDwvc3R5bGUtc2VsZWN0b3I+XG4gICAgICAgICAgICAgICAgPGFsaWdubWVudCA6dGVtcGxhdGU9XCJ0ZW1wbGF0ZVwiPlxuICAgICAgICAgICAgICAgIDwvYWxpZ25tZW50PlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgncmVsb2FkJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInN5bmNcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdyZXNldCcpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJ1bmRvXCI+PC9mYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGhhcy1wYWRkaW5nLXNtYWxsIGlzLW9uZS10aGlyZC1kZXNrdG9wIGhhcy10ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IHRhYmxlLXNlYXJjaC1pbnB1dCBoYXMtdGV4dC1jZW50ZXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsICRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cImkxOG4oJ1NlYXJjaCcpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInNlYXJjaFwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFTeW5jLCBmYVVuZG8sIGZhU2VhcmNoIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xuaW1wb3J0IExlbmd0aE1lbnUgZnJvbSAnLi90b3BDb250cm9scy9MZW5ndGhNZW51LnZ1ZSc7XG5pbXBvcnQgQ29sdW1uVmlzaWJpbGl0eSBmcm9tICcuL3RvcENvbnRyb2xzL0NvbHVtblZpc2liaWxpdHkudnVlJztcbmltcG9ydCBBbGlnbm1lbnQgZnJvbSAnLi90b3BDb250cm9scy9BbGlnbm1lbnQudnVlJztcbmltcG9ydCBTdHlsZVNlbGVjdG9yIGZyb20gJy4vdG9wQ29udHJvbHMvU3R5bGVTZWxlY3Rvci52dWUnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYVN5bmMsIGZhVW5kbywgZmFTZWFyY2gpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1RvcENvbnRyb2xzJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTGVuZ3RoTWVudSwgQ29sdW1uVmlzaWJpbGl0eSwgQWxpZ25tZW50LCBTdHlsZVNlbGVjdG9yLFxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IGZhbHNlLFxuICAgICAgICAgICAgY29sdW1uVmlzaWJpbGl0eTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZG9BY3Rpb24oYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KGJ1dHRvbi5ldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChidXR0b24uYWN0aW9uID09PSAnZXhwb3J0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2V4cG9ydC1kYXRhJywgYnV0dG9uLnBhdGgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5hY3Rpb24gPT09ICdyb3V0ZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiBidXR0b24ucm91dGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cbiAgICAudGl0bGUge1xuICAgICAgICAuaWNvbiB7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdGV4dC1ib3R0b207XG4gICAgICAgIH1cbiAgICB9XG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vTGVuZ3RoTWVudS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ3NjkwZDQ3XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTGVuZ3RoTWVudS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ3NjkwZDQ3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDc2OTBkNDdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9MZW5ndGhNZW51LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkcm9wZG93bj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImxhYmVsXCI+XG4gICAgICAgICAgICB7eyBsZW5ndGggfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YSB2LWZvcj1cIih2YWx1ZSwgaW5kZXgpIGluIHRlbXBsYXRlLmxlbmd0aE1lbnVcIlxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogdmFsdWUgPT09IGxlbmd0aCB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCd1cGRhdGUtbGVuZ3RoJywgdmFsdWUpXCI+XG4gICAgICAgICAgICB7eyB2YWx1ZSB9fVxuICAgICAgICA8L2E+XG4gICAgPC9kcm9wZG93bj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24udnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdMZW5ndGhNZW51JyxcblxuICAgIGNvbXBvbmVudHM6IHsgRHJvcGRvd24gfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTMxM2VhNDczXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRHJvcGRvd24udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIyMDc2NzlhZVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zMTNlYTQ3M1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Ryb3Bkb3duLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zMTNlYTQ3M1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Ryb3Bkb3duLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0zMTNlYTQ3M1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Ecm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRyb3Bkb3duLW1lbnVbZGF0YS12LTMxM2VhNDczXSB7XFxuICBtaW4td2lkdGg6IHVuc2V0O1xcbn1cXG4uZHJvcGRvd24tbWVudSAuZHJvcGRvd24tY29udGVudFtkYXRhLXYtMzEzZWE0NzNdIHtcXG4gICAgbWluLXdpZHRoOiB1bnNldDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWNvbnRlbnQgYS5kcm9wZG93bi1pdGVtW2RhdGEtdi0zMTNlYTQ3M10ge1xcbiAgICAgIHBhZGRpbmc6IC4zNzVyZW0gMXJlbTtcXG59XFxuLmljb24uYW5nbGVbZGF0YS12LTMxM2VhNDczXSB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG59XFxuLmljb24uYW5nbGVbYXJpYS1oaWRkZW49XFxcInRydWVcXFwiXVtkYXRhLXYtMzEzZWE0NzNdIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Ecm9wZG93bi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0UsaUJBQWlCO0NBQUU7QUFDbkI7SUFDRSxpQkFBaUI7SUFDakIsaUJBQWlCO0NBQUU7QUFDbkI7TUFDRSxzQkFBc0I7Q0FBRTtBQUU5QjtFQUNFLGlEQUFpQztFQUFqQyx5Q0FBaUM7RUFBakMsaUNBQWlDO0VBQWpDLCtEQUFpQztDQUFFO0FBQ25DO0lBQ0Usa0NBQTBCO1lBQTFCLDBCQUEwQjtDQUFFXCIsXCJmaWxlXCI6XCJEcm9wZG93bi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmRyb3Bkb3duLW1lbnUge1xcbiAgbWluLXdpZHRoOiB1bnNldDsgfVxcbiAgLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvOyB9XFxuICAgIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1jb250ZW50IGEuZHJvcGRvd24taXRlbSB7XFxuICAgICAgcGFkZGluZzogLjM3NXJlbSAxcmVtOyB9XFxuXFxuLmljb24uYW5nbGUge1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2U7IH1cXG4gIC5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpOyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTMxM2VhNDczXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0Ryb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiXG4gICAgICAgIHYtY2xpY2stb3V0c2lkZT1cImhpZGVcIlxuICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBzaG93IH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLXRyaWdnZXJcIlxuICAgICAgICAgICAgQGNsaWNrPVwic2hvdz0hc2hvd1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImxhYmVsXCI+PC9zbG90PlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1oaWRkZW49XCIhc2hvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cImFuZ2xlLWRvd25cIj48L2ZhPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgYW5pbWF0ZWRcIlxuICAgICAgICAgICAgcm9sZT1cIm1lbnVcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnZmFkZUluJzogc2hvdywgJ2ZhZGVPdXQnOiAhc2hvdyB9XCJcbiAgICAgICAgICAgIHYtaWY9XCJzaG93XCJcbiAgICAgICAgICAgIDpzdHlsZT1cIndpZHRoU3R5bGVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgICAgICAgICAgICAgICA6c3R5bGU9XCJbd2lkdGhTdHlsZSwgaGVpZ2h0U3R5bGVdXCI+XG4gICAgICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgdkNsaWNrT3V0c2lkZSBmcm9tICd2LWNsaWNrLW91dHNpZGUnO1xuaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUFuZ2xlRG93biB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXNvbGlkL3NoYWthYmxlLmVzJztcblxuZm9udGF3ZXNvbWUubGlicmFyeS5hZGQoZmFBbmdsZURvd24pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0Ryb3Bkb3duJyxcblxuICAgIGRpcmVjdGl2ZXM6IHtcbiAgICAgICAgY2xpY2tPdXRzaWRlOiB2Q2xpY2tPdXRzaWRlLmRpcmVjdGl2ZSxcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDY0LFxuICAgICAgICB9LFxuICAgICAgICBoZWlnaHQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDIwMCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgd2lkdGhTdHlsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgJ21pbi13aWR0aCc6IGAke3RoaXMud2lkdGh9cHhgLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgaGVpZ2h0U3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdtYXgtaGVpZ2h0JzogYCR7dGhpcy5oZWlnaHR9cHhgLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhpZGUoKSB7XG4gICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblxuICAgIC5kcm9wZG93bi1tZW51IHtcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcblxuICAgICAgICAuZHJvcGRvd24tY29udGVudCB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcblxuICAgICAgICAgICAgYS5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuMzc1cmVtIDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaWNvbi5hbmdsZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xuXG4gICAgICAgICZbYXJpYS1oaWRkZW49XCJ0cnVlXCJdIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgIH1cbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvRHJvcGRvd24udnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiY2xpY2stb3V0c2lkZVwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1jbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5oaWRlLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiaGlkZVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93blwiLFxuICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogX3ZtLnNob3cgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi10cmlnZ2VyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3cgPSAhX3ZtLnNob3dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJkcm9wZG93bi1tZW51XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl90KFwibGFiZWxcIiksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgYW5nbGVcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogIV92bS5zaG93IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJhbmdsZS1kb3duXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uc2hvd1xuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tbWVudSBhbmltYXRlZFwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBmYWRlSW46IF92bS5zaG93LCBmYWRlT3V0OiAhX3ZtLnNob3cgfSxcbiAgICAgICAgICAgICAgc3R5bGU6IF92bS53aWR0aFN0eWxlLFxuICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcIm1lbnVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcIixcbiAgICAgICAgICAgICAgICAgIHN0eWxlOiBbX3ZtLndpZHRoU3R5bGUsIF92bS5oZWlnaHRTdHlsZV1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMzEzZWE0NzNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTMxM2VhNDczXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRyb3Bkb3duXCIsXG4gICAgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sIHNsb3Q6IFwibGFiZWxcIiB9LCBbXG4gICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmxlbmd0aCkgKyBcIlxcbiAgICBcIilcbiAgICAgIF0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0udGVtcGxhdGUubGVuZ3RoTWVudSwgZnVuY3Rpb24odmFsdWUsIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogdmFsdWUgPT09IF92bS5sZW5ndGggfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJ1cGRhdGUtbGVuZ3RoXCIsIHZhbHVlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyh2YWx1ZSkgKyBcIlxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNDc2OTBkNDdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ3NjkwZDQ3XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbHVtblZpc2liaWxpdHkudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDM0ODFlYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvbHVtblZpc2liaWxpdHkudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00ZDM0ODFlYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRkMzQ4MWVhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQ29sdW1uVmlzaWJpbGl0eS52dWVcbi8vIG1vZHVsZSBpZCA9IDExNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZHJvcGRvd24+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiXG4gICAgICAgICAgICBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgIDxmYSBpY29uPVwiZXllXCI+PC9mYT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YSB2LWZvcj1cIihjb2x1bW4sIGluZGV4KSBpbiB0ZW1wbGF0ZS5jb2x1bW5zXCJcbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogY29sdW1uLm1ldGEudmlzaWJsZSB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cImNvbHVtbi5tZXRhLnZpc2libGUgPSAhY29sdW1uLm1ldGEudmlzaWJsZTskZW1pdCgndXBkYXRlLXZpc2liaWxpdHknKVwiPlxuICAgICAgICAgICAge3sgY29sdW1uLmxhYmVsIH19XG4gICAgICAgIDwvYT5cbiAgICA8L2Ryb3Bkb3duPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhRXllIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24udnVlJztcblxuZm9udGF3ZXNvbWUubGlicmFyeS5hZGQoZmFFeWUpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0NvbHVtblZpc2liaWxpdHknLFxuXG4gICAgY29tcG9uZW50czogeyBEcm9wZG93biB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQ29sdW1uVmlzaWJpbGl0eS52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZHJvcGRvd25cIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIsXG4gICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgc2xvdDogXCJsYWJlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJleWVcIiB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLmNvbHVtbnMsIGZ1bmN0aW9uKGNvbHVtbiwgaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBjb2x1bW4ubWV0YS52aXNpYmxlIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgY29sdW1uLm1ldGEudmlzaWJsZSA9ICFjb2x1bW4ubWV0YS52aXNpYmxlXG4gICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidXBkYXRlLXZpc2liaWxpdHlcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoY29sdW1uLmxhYmVsKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00ZDM0ODFlYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNGQzNDgxZWFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQ29sdW1uVmlzaWJpbGl0eS52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQWxpZ25tZW50LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmY2NTU1ZjFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BbGlnbm1lbnQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9BbGlnbm1lbnQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTJmNjU1NWYxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMmY2NTU1ZjFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9BbGlnbm1lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTYxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRyb3Bkb3duPlxuICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIlxuICAgICAgICAgICAgY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICA8ZmEgaWNvbj1cImFsaWduLWp1c3RpZnlcIj48L2ZhPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxhIHYtZm9yPVwiKHZhbHVlLCBrZXkpIGluIHRlbXBsYXRlLmFsaWduc1wiXG4gICAgICAgICAgICA6a2V5PVwia2V5XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiB0ZW1wbGF0ZS5hbGlnbiA9PT0gdmFsdWUgfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJ0ZW1wbGF0ZS5hbGlnbiA9IHZhbHVlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICA8ZmEgOmljb249XCJpY29uc1trZXldXCI+PC9mYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9hPlxuICAgIDwvZHJvcGRvd24+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFBbGlnbkp1c3RpZnksIGZhQWxpZ25DZW50ZXIsIGZhQWxpZ25MZWZ0LCBmYUFsaWduUmlnaHQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1zb2xpZC9zaGFrYWJsZS5lcyc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bi52dWUnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYUFsaWduSnVzdGlmeSwgZmFBbGlnbkNlbnRlciwgZmFBbGlnbkxlZnQsIGZhQWxpZ25SaWdodCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQWxpZ25tZW50JyxcblxuICAgIGNvbXBvbmVudHM6IHsgRHJvcGRvd24gfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiBmYUFsaWduQ2VudGVyLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGZhQWxpZ25MZWZ0LFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBmYUFsaWduUmlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUNvbHVtblZpc2liaWxpdHkoY29sdW1uKSB7XG4gICAgICAgICAgICBjb2x1bW4ubWV0YS52aXNpYmxlID0gIWNvbHVtbi5tZXRhLnZpc2libGU7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUtY29sdW1uLXZpc2liaWxpdHknKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0FsaWdubWVudC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZHJvcGRvd25cIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIsXG4gICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgc2xvdDogXCJsYWJlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJhbGlnbi1qdXN0aWZ5XCIgfSB9KV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5hbGlnbnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogX3ZtLnRlbXBsYXRlLmFsaWduID09PSB2YWx1ZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS50ZW1wbGF0ZS5hbGlnbiA9IHZhbHVlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBfdm0uaWNvbnNba2V5XSB9IH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yZjY1NTVmMVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMmY2NTU1ZjFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9TdHlsZVNlbGVjdG9yLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOGFhYjYxODRcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9TdHlsZVNlbGVjdG9yLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvU3R5bGVTZWxlY3Rvci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOGFhYjYxODRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi04YWFiNjE4NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL1N0eWxlU2VsZWN0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRyb3Bkb3duIGNsYXNzPVwiaXMtcmlnaHRcIj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImxhYmVsXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgPGZhIGljb249XCJ0YWJsZVwiPjwvZmE+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGEgdi1mb3I9XCIoc3R5bGUsIGtleSkgaW4gdGVtcGxhdGUuc3R5bGVzXCJcbiAgICAgICAgICAgIDprZXk9XCJrZXlcIlxuICAgICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGhhcyhzdHlsZSkgfVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGUoc3R5bGUpXCI+XG4gICAgICAgICAgICB7eyBrZXkgfX1cbiAgICAgICAgPC9hPlxuICAgIDwvZHJvcGRvd24+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFUYWJsZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXNvbGlkL3NoYWthYmxlLmVzJztcbmltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duLnZ1ZSc7XG5cbmZvbnRhd2Vzb21lLmxpYnJhcnkuYWRkKGZhVGFibGUpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1N0eWxlU2VsZWN0b3InLFxuXG4gICAgY29tcG9uZW50czogeyBEcm9wZG93biB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzdHlsZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5zdHlsZS5zcGxpdCgnICcpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhhcyhzdHlsZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc3R5bGVzLmluY2x1ZGVzKHN0eWxlKTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlKHN0eWxlKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLnN0eWxlID0gdGhpcy5oYXMoc3R5bGUpXG4gICAgICAgICAgICAgICAgPyB0aGlzLnN0eWxlcy5maWx0ZXIodmFsdWUgPT4gdmFsdWUgIT09IHN0eWxlKS5qb2luKCcgJylcbiAgICAgICAgICAgICAgICA6IGAke3RoaXMudGVtcGxhdGUuc3R5bGV9ICR7c3R5bGV9YDtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL1N0eWxlU2VsZWN0b3IudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRyb3Bkb3duXCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJpcy1yaWdodFwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LFxuICAgICAgICAgIHNsb3Q6IFwibGFiZWxcIlxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwidGFibGVcIiB9IH0pXSxcbiAgICAgICAgMVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLnN0eWxlcywgZnVuY3Rpb24oc3R5bGUsIGtleSkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBfdm0uaGFzKHN0eWxlKSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS50b2dnbGUoc3R5bGUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKGtleSkgKyBcIlxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtOGFhYjYxODRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LThhYWI2MTg0XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL1N0eWxlU2VsZWN0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW11bHRpbGluZVwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy1oYWxmIGlzLWhpZGRlbi1tb2JpbGVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sXG4gICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogX3ZtLnRlbXBsYXRlLmljb24gfSB9KV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICksXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmkxOG4oX3ZtLnRlbXBsYXRlLm5hbWUpKSArXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiY29sdW1uIGhhcy1wYWRkaW5nLXNtYWxsIGlzLWhhbGYgaGFzLXRleHQtcmlnaHQtdGFibGV0IGhhcy10ZXh0LWNlbnRlcmVkLW1vYmlsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIF92bS5fbChfdm0udGVtcGxhdGUuYnV0dG9ucy5nbG9iYWwsIGZ1bmN0aW9uKGJ1dHRvbikge1xuICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGtleTogYnV0dG9uLmxhYmVsLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaGFzLW1hcmdpbi1sZWZ0LXNtYWxsXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiBidXR0b24uY2xhc3MsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IGJ1dHRvbi5hY3Rpb24gPT09IFwiaHJlZlwiID8gYnV0dG9uLnBhdGggOiBudWxsIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLmRvQWN0aW9uKGJ1dHRvbilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uaTE4bihidXR0b24ubGFiZWwpKSldKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IGJ1dHRvbi5pY29uIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiY29sdW1uIGhhcy1wYWRkaW5nLXNtYWxsIGlzLXR3by10aGlyZHMtZGVza3RvcCBoYXMtdGV4dC1jZW50ZXJlZC1tb2JpbGVcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxlbmd0aC1tZW51XCIsXG4gICAgICAgICAgICBfdm0uX2coXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgdGVtcGxhdGU6IF92bS50ZW1wbGF0ZSwgbGVuZ3RoOiBfdm0ubGVuZ3RoIH0gfSxcbiAgICAgICAgICAgICAgX3ZtLiRsaXN0ZW5lcnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImNvbHVtbi12aXNpYmlsaXR5XCIsXG4gICAgICAgICAgICBfdm0uX2coeyBhdHRyczogeyB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlIH0gfSwgX3ZtLiRsaXN0ZW5lcnMpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3R5bGUtc2VsZWN0b3JcIiwgeyBhdHRyczogeyB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFsaWdubWVudFwiLCB7IGF0dHJzOiB7IHRlbXBsYXRlOiBfdm0udGVtcGxhdGUgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwicmVsb2FkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJzeW5jXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwicmVzZXRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcInVuZG9cIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiY29sdW1uIGhhcy1wYWRkaW5nLXNtYWxsIGlzLW9uZS10aGlyZC1kZXNrdG9wIGhhcy10ZXh0LXJpZ2h0XCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgdGFibGUtc2VhcmNoLWlucHV0IGhhcy10ZXh0LWNlbnRlcmVkXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic2VhcmNoXCIsIHBsYWNlaG9sZGVyOiBfdm0uaTE4bihcIlNlYXJjaFwiKSB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZhbHVlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiaW5wdXRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIiB9LFxuICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwic2VhcmNoXCIgfSB9KV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMjU1YjY4YzZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTI1NWI2OGM2XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVG9wQ29udHJvbHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MDZjZDcyNlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUhlYWRlci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1RhYmxlSGVhZGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzA2Y2Q3MjZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UYWJsZUhlYWRlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzA2Y2Q3MjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03MDZjZDcyNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MDZjZDcyNlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImQwYmJmMDVlXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTcwNmNkNzI2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlSGVhZGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MDZjZDcyNlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUhlYWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzA2Y2Q3MjZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG50aC52dWUtdGFibGUtaGVhZGVyIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICAtbXMtZmxleC1saW5lLXBhY2s6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50YWJsZS1oZWFkZXItY29udHJvbHMgLnNvcnRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjU7XFxufVxcbi50YWJsZS1oZWFkZXItY29udHJvbHMgLnNvcnRlcjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLDJCQUFzQjtNQUF0QixzQkFBc0I7Q0FBRTtBQUUxQjtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0NBQUU7QUFDZjtJQUNFLFdBQVc7Q0FBRVwiLFwiZmlsZVwiOlwiVGFibGVIZWFkZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcInRoLnZ1ZS10YWJsZS1oZWFkZXIge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjsgfVxcblxcbi50YWJsZS1oZWFkZXItY29udHJvbHMgLnNvcnRlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvcGFjaXR5OiAwLjU7IH1cXG4gIC50YWJsZS1oZWFkZXItY29udHJvbHMgLnNvcnRlcjpob3ZlciB7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzA2Y2Q3MjZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDx0aGVhZD5cbiAgICAgICAgPHRyIDpjbGFzcz1cInRlbXBsYXRlLnN0eWxlXCI+XG4gICAgICAgICAgICA8dGggOmNsYXNzPVwidGVtcGxhdGUuYWxpZ25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJ0ZW1wbGF0ZS5jcnROb1wiPlxuICAgICAgICAgICAgICAgIHt7IGkxOG4odGVtcGxhdGUubGFiZWxzLmNydE5vKSB9fVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aCBjbGFzcz1cInZ1ZS10YWJsZS1oZWFkZXJcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInRlbXBsYXRlLmFsaWduXCJcbiAgICAgICAgICAgICAgICB2LWZvcj1cImNvbHVtbiBpbiB0ZW1wbGF0ZS5jb2x1bW5zXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiY29sdW1uLmxhYmVsXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiY29sdW1uLm1ldGEudmlzaWJsZSAmJiAhY29sdW1uLm1ldGEuaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7IGkxOG4oY29sdW1uLmxhYmVsKSB9fVxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhYmxlLWhlYWRlci1jb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzb3J0ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZVNvcnQoJGV2ZW50LCBjb2x1bW4pXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiY29sdW1uLm1ldGEuc29ydGFibGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIDppY29uPVwic29ydEljb24oY29sdW1uLm1ldGEuc29ydClcIiBzaXplPVwieHNcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZGVsZXRlIGlzLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiY29sdW1uLm1ldGEuc29ydFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiY2xlYXJDb2x1bW5Tb3J0KGNvbHVtbilcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggOmNsYXNzPVwidGVtcGxhdGUuYWxpZ25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJ0ZW1wbGF0ZS5hY3Rpb25zXCI+XG4gICAgICAgICAgICAgICAge3sgaTE4bih0ZW1wbGF0ZS5sYWJlbHMuYWN0aW9ucykgfX1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgIDwvdHI+XG4gICAgPC90aGVhZD5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVNvcnQsIGZhU29ydFVwLCBmYVNvcnREb3duIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYVNvcnQsIGZhU29ydFVwLCBmYVNvcnREb3duKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdIZWFkZXInLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNvcnRJY29uKHNvcnQpIHtcbiAgICAgICAgICAgIGlmICghc29ydCkgcmV0dXJuIGZhU29ydDtcblxuICAgICAgICAgICAgcmV0dXJuIHNvcnQgPT09ICdBU0MnXG4gICAgICAgICAgICAgICAgPyBmYVNvcnRVcFxuICAgICAgICAgICAgICAgIDogZmFTb3J0RG93bjtcbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlU29ydChldmVudCwgeyBtZXRhIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc29ydCB9ID0gbWV0YTtcblxuICAgICAgICAgICAgaWYgKCFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTb3J0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1ldGEuc29ydCA9IHNvcnQgPT09ICdBU0MnID8gJ0RFU0MnIDogJ0FTQyc7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLnNvcnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc29ydC11cGRhdGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJDb2x1bW5Tb3J0KHsgbWV0YSB9KSB7XG4gICAgICAgICAgICBtZXRhLnNvcnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMudGVtcGxhdGUuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4ubWV0YS5zb3J0ICE9PSBudWxsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGUuc29ydCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzb3J0LXVwZGF0ZScpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclNvcnQoKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLmNvbHVtbnMuZm9yRWFjaCgoeyBtZXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICBtZXRhLnNvcnQgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblxuICAgIHRoLnZ1ZS10YWJsZS1oZWFkZXIge1xuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudGFibGUtaGVhZGVyLWNvbnRyb2xzIHtcbiAgICAgICAgLnNvcnRlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgX2MoXG4gICAgICBcInRyXCIsXG4gICAgICB7IGNsYXNzOiBfdm0udGVtcGxhdGUuc3R5bGUgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLnRlbXBsYXRlLmNydE5vXG4gICAgICAgICAgPyBfYyhcInRoXCIsIHsgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaTE4bihfdm0udGVtcGxhdGUubGFiZWxzLmNydE5vKSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5jb2x1bW5zLCBmdW5jdGlvbihjb2x1bW4pIHtcbiAgICAgICAgICByZXR1cm4gY29sdW1uLm1ldGEudmlzaWJsZSAmJiAhY29sdW1uLm1ldGEuaGlkZGVuXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGNvbHVtbi5sYWJlbCxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZ1ZS10YWJsZS1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0udGVtcGxhdGUuYWxpZ25cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmkxOG4oY29sdW1uLmxhYmVsKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtaGVhZGVyLWNvbnRyb2xzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5tZXRhLnNvcnRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvcnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVTb3J0KCRldmVudCwgY29sdW1uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IF92bS5zb3J0SWNvbihjb2x1bW4ubWV0YS5zb3J0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJ4c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5tZXRhLnNvcnRcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkZWxldGUgaXMtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uY2xlYXJDb2x1bW5Tb3J0KGNvbHVtbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnRlbXBsYXRlLmFjdGlvbnNcbiAgICAgICAgICA/IF9jKFwidGhcIiwgeyBjbGFzczogX3ZtLnRlbXBsYXRlLmFsaWduIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pMThuKF92bS50ZW1wbGF0ZS5sYWJlbHMuYWN0aW9ucykpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03MDZjZDcyNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzA2Y2Q3MjZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZGJmYTlmY1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlQm9keS52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1RhYmxlQm9keS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVkYmZhOWZjXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UYWJsZUJvZHkudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi01ZGJmYTlmY1wiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZGJmYTlmY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVkYmZhOWZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZGJmYTlmY1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlQm9keS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImE2MDU2ZDA0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVkYmZhOWZjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVCb2R5LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZGJmYTlmY1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlQm9keS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWRiZmE5ZmNcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5kaXYudGFibGUtY3J0LW5vW2RhdGEtdi01ZGJmYTlmY10ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5kaXYudGFibGUtY3J0LW5vIC5jcnQtbm8tbGFiZWxbZGF0YS12LTVkYmZhOWZjXSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuZGl2LnRhYmxlLWNydC1ubyAuaGlkZGVuLWNvbnRyb2xzW2RhdGEtdi01ZGJmYTlmY10ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAwLjFlbTtcXG59XFxudGQudGFibGUtYWN0aW9uc1tkYXRhLXYtNWRiZmE5ZmNdIHtcXG4gIHBhZGRpbmc6IC4zNWVtIC41ZW07XFxufVxcbnRkLnRhYmxlLWFjdGlvbnMgc3Bhbi50YWJsZS1hY3Rpb24tYnV0dG9uc1tkYXRhLXYtNWRiZmE5ZmNdIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG50ZC50YWJsZS1hY3Rpb25zIC5idXR0b24uaXMtc21hbGwuaXMtdGFibGUtYnV0dG9uW2RhdGEtdi01ZGJmYTlmY10ge1xcbiAgICBoZWlnaHQ6IDEuNmVtO1xcbiAgICB3aWR0aDogMS42ZW07XFxuICAgIGZvbnQtc2l6ZTogLjllbTtcXG59XFxubGkuY2hpbGQtcm93W2RhdGEtdi01ZGJmYTlmY106bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcXG59XFxubGkuY2hpbGQtcm93W2RhdGEtdi01ZGJmYTlmY10ge1xcbiAgcGFkZGluZzogMC41ZW0gMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFjO0VBQWQscUJBQWM7RUFBZCxjQUFjO0NBQUU7QUFDaEI7SUFDRSxhQUFhO0NBQUU7QUFDakI7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUFFO0FBRXhCO0VBQ0Usb0JBQW9CO0NBQUU7QUFDdEI7SUFDRSw0QkFBcUI7SUFBckIsNEJBQXFCO0lBQXJCLHFCQUFxQjtDQUFFO0FBQ3pCO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7Q0FBRTtBQUV0QjtFQUNFLGlDQUFpQztDQUFFO0FBRXJDO0VBQ0UsaUJBQWlCO0NBQUVcIixcImZpbGVcIjpcIlRhYmxlQm9keS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGl2LnRhYmxlLWNydC1ubyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZGlzcGxheTogZmxleDsgfVxcbiAgZGl2LnRhYmxlLWNydC1ubyAuY3J0LW5vLWxhYmVsIHtcXG4gICAgbWFyZ2luOiBhdXRvOyB9XFxuICBkaXYudGFibGUtY3J0LW5vIC5oaWRkZW4tY29udHJvbHMge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAwLjFlbTsgfVxcblxcbnRkLnRhYmxlLWFjdGlvbnMge1xcbiAgcGFkZGluZzogLjM1ZW0gLjVlbTsgfVxcbiAgdGQudGFibGUtYWN0aW9ucyBzcGFuLnRhYmxlLWFjdGlvbi1idXR0b25zIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG4gIHRkLnRhYmxlLWFjdGlvbnMgLmJ1dHRvbi5pcy1zbWFsbC5pcy10YWJsZS1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDEuNmVtO1xcbiAgICB3aWR0aDogMS42ZW07XFxuICAgIGZvbnQtc2l6ZTogLjllbTsgfVxcblxcbmxpLmNoaWxkLXJvdzpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmOyB9XFxuXFxubGkuY2hpbGQtcm93IHtcXG4gIHBhZGRpbmc6IDAuNWVtIDA7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWRiZmE5ZmNcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDx0Ym9keT5cbiAgICAgICAgPHRyIHYtZm9yPVwiKHJvdywgaW5kZXgpIGluIGJvZHkuZGF0YVwiXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgIDx0ZCA6Y2xhc3M9XCJ0ZW1wbGF0ZS5hbGlnblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInRlbXBsYXRlLmNydE5vICYmICFpc0NoaWxkKHJvdylcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtY3J0LW5vXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3J0LW5vLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRJbmRleChyb3cpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRkZW4tY29udHJvbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImhpZGRlbkNvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZUV4cGFuZChyb3csIGluZGV4KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIDppY29uPVwiaXNFeHBhbmRlZChyb3cpID8gJ21pbnVzLXNxdWFyZScgOiAncGx1cy1zcXVhcmUnXCI+PC9mYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCA6Y2xhc3M9XCJ0ZW1wbGF0ZS5hbGlnblwiXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIoY29sdW1uLCBpbmRleCkgaW4gdGVtcGxhdGUuY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiY29sdW1uLm1ldGEudmlzaWJsZSAmJiAhY29sdW1uLm1ldGEuaGlkZGVuICYmICFpc0NoaWxkKHJvdylcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiY29sdW1uLm1ldGEuYm9vbGVhblwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFnIGlzLXRhYmxlLXRhZ1wiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInJvd1tjb2x1bW4ubmFtZV0gPyAnaXMtc3VjY2VzcycgOiAnaXMtZGFuZ2VyJ1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cInJvd1tjb2x1bW4ubmFtZV0gPyAnY2hlY2snIDogJ3RpbWVzJ1wiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVwiY29sdW1uLm1ldGEucmVuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdi1odG1sPVwiY3VzdG9tUmVuZGVyKHJvdywgY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XCJjb2x1bW4ubWV0YS50cmFuc2xhdGlvblwiPnt7IGkxOG4ocm93W2NvbHVtbi5uYW1lXSkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPnt7IHJvd1tjb2x1bW4ubmFtZV0gfX08L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGFibGUtYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwidGVtcGxhdGUuYWxpZ25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJ0ZW1wbGF0ZS5hY3Rpb25zICYmICFpc0NoaWxkKHJvdylcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhYmxlLWFjdGlvbi1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHYtZm9yPVwiKGJ1dHRvbiwgaW5kZXgpIGluIHRlbXBsYXRlLmJ1dHRvbnMucm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBpcy1zbWFsbCBpcy10YWJsZS1idXR0b24gaGFzLW1hcmdpbi1sZWZ0LXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImJ1dHRvbi5jbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cImJ1dHRvbi5hY3Rpb24gPT09ICdocmVmJyA/IGdldFBhdGgoYnV0dG9uLCByb3cuZHRSb3dJZCkgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImJ1dHRvbi5jb25maXJtYXRpb24gPyBzaG93TW9kYWwoYnV0dG9uLCByb3cpIDogZG9BY3Rpb24oYnV0dG9uLCByb3cpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgOmljb249XCJidXR0b24uaWNvblwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIDpjb2xzcGFuPVwiaGlkZGVuQ29sU3BhblwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwidGVtcGxhdGUuYWxpZ25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJpc0NoaWxkKHJvdylcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cImNoaWxkLXJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cImNvbHVtbiBpbiByb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImNvbHVtbi5sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGI+e3sgY29sdW1uLmxhYmVsIH19PC9iPjoge3sgY29sdW1uLnZhbHVlIH19XG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgICAgIDxtb2RhbCB2LWlmPVwibW9kYWxcIlxuICAgICAgICAgICAgOnNob3c9XCJtb2RhbFwiXG4gICAgICAgICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgICAgICAgOm1lc3NhZ2U9XCJidXR0b24ubWVzc2FnZVwiXG4gICAgICAgICAgICBAY2FuY2VsPVwiY2xvc2VNb2RhbCgpXCJcbiAgICAgICAgICAgIEBjb21taXQ9XCJkb0FjdGlvbihidXR0b24sIHJvdylcIj5cbiAgICAgICAgPC9tb2RhbD5cbiAgICA8L3Rib2R5PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhTWludXNTcXVhcmUsIGZhUGx1c1NxdWFyZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXNvbGlkL3NoYWthYmxlLmVzJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsLnZ1ZSc7XG5cbmZvbnRhd2Vzb21lLmxpYnJhcnkuYWRkKGZhTWludXNTcXVhcmUsIGZhUGx1c1NxdWFyZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnVGFibGVCb2R5JyxcblxuICAgIGNvbXBvbmVudHM6IHsgTW9kYWwgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbVJlbmRlcjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBleHBhbmRlZDoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaGlkZGVuQ29sdW1ucygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlLmNvbHVtbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubWV0YS5oaWRkZW4gJiYgY29sdW1uLm1ldGEudmlzaWJsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGRlbkNvdW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlkZGVuQ29sdW1ucy5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGRlbkNvbFNwYW4oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLmxlbmd0aCAtIHRoaXMuaGlkZGVuQ29sdW1ucy5sZW5ndGhcbiAgICAgICAgICAgICAgICArICh0aGlzLnRlbXBsYXRlLmFjdGlvbnMgPyAyIDogMSk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2RhbDogZmFsc2UsXG4gICAgICAgICAgICByb3c6IG51bGwsXG4gICAgICAgICAgICBidXR0b246IG51bGwsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIGhpZGRlbkNvdW50OiB7XG4gICAgICAgICAgICBoYW5kbGVyKG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGlmICghbmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGRzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRQYXRoKGJ1dHRvbiwgZHRSb3dJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbi5wYXRoLnJlcGxhY2UoJ2R0Um93SWQnLCBkdFJvd0lkKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd01vZGFsKGJ1dHRvbiwgcm93KSB7XG4gICAgICAgICAgICB0aGlzLnJvdyA9IHJvdztcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uID0gYnV0dG9uO1xuICAgICAgICAgICAgdGhpcy5tb2RhbCA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJvdyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbiA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGRvQWN0aW9uKGJ1dHRvbiwgcm93KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5ldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoYnV0dG9uLmV2ZW50LCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmFjdGlvbiA9PT0gJ2FqYXgnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWpheCcsIGJ1dHRvbi5tZXRob2QsIHRoaXMuZ2V0UGF0aChidXR0b24sIHJvdy5kdFJvd0lkKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmFjdGlvbiA9PT0gJ3JvdXRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IGJ1dHRvbi5yb3V0ZSwgcGFyYW1zOiB0aGlzLmdldFJvdXRlUGFyYW1zKGJ1dHRvbiwgcm93KSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Um91dGVQYXJhbXMoYnV0dG9uLCByb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBpZDogcm93LmR0Um93SWQsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoYnV0dG9uLnBhcmFtcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHBhcmFtcywgYnV0dG9uLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEluZGV4KHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keS5kYXRhLmZpbHRlcihyID0+ICF0aGlzLmlzQ2hpbGQocikpXG4gICAgICAgICAgICAgICAgLmZpbmRJbmRleChyID0+IHIuZHRSb3dJZCA9PT0gcm93LmR0Um93SWQpICsgdGhpcy5zdGFydCArIDE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzRXhwYW5kZWQocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHBhbmRlZC5pbmNsdWRlcyhyb3cuZHRSb3dJZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzQ2hpbGQocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyb3cpO1xuICAgICAgICB9LFxuICAgICAgICB0b2dnbGVFeHBhbmQocm93LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQocm93KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQucHVzaChyb3cuZHRSb3dJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZFJvdyhyb3csIGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuZXhwYW5kZWQuZmluZEluZGV4KGlkID0+IGlkID09PSByb3cuZHRSb3dJZCk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgdGhpcy5ib2R5LmRhdGEuc3BsaWNlKGluZGV4ICsgMSwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZENoaWxkUm93KHJvdywgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9IHRoaXMuaGlkZGVuQ29sdW1ucy5yZWR1Y2UoKGNvbGxlY3RvciwgY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sbGVjdG9yLnB1c2goeyBsYWJlbDogY29sdW1uLmxhYmVsLCB2YWx1ZTogcm93W2NvbHVtbi5uYW1lXSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sbGVjdG9yO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICB0aGlzLmJvZHkuZGF0YS5zcGxpY2UoaW5kZXggKyAxLCAwLCBuZXdSb3cpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVDaGlsZHMoKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleGVzID0gW107XG5cbiAgICAgICAgICAgIHRoaXMuYm9keS5kYXRhLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NoaWxkKHJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW5kZXhlcy5zb3J0KChhLCBiKSA9PiBhIDwgYikuZm9yRWFjaChpbmRleCA9PiB0aGlzLmJvZHkuZGF0YS5zcGxpY2UoaW5kZXgsIDEpKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZC5zcGxpY2UoMCk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cbiAgICBkaXYudGFibGUtY3J0LW5vIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5jcnQtbm8tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhpZGRlbi1jb250cm9scyB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMWVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGQudGFibGUtYWN0aW9ucyB7XG4gICAgICAgIHBhZGRpbmc6IC4zNWVtIC41ZW07XG5cbiAgICAgICAgc3Bhbi50YWJsZS1hY3Rpb24tYnV0dG9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24uaXMtc21hbGwuaXMtdGFibGUtYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMS42ZW07XG4gICAgICAgICAgICB3aWR0aDogMS42ZW07XG4gICAgICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaS5jaGlsZC1yb3c6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xuICAgIH1cblxuICAgIGxpLmNoaWxkLXJvdyB7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NDZjNzk5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDQ2Yzc5OWZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDQ2Yzc5OWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NDZjNzk5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NDZjNzk5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImZmNWUyMTNlXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ0NmM3OTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NDZjNzk5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNDQ2Yzc5OWZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1vZGFsLmlzLWFjdGl2ZSB7XFxuICAgIHotaW5kZXg6IDEwO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBd0RBO0lBQ0EsWUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJNb2RhbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XFxcImFuaW1hdGVkIGZhZGVJblxcXCJcXG4gICAgICAgIGxlYXZlLWFjdGl2ZS1jbGFzcz1cXFwiYW5pbWF0ZWQgZmFkZU91dFxcXCI+XFxuICAgICAgICA8ZGl2IDpjbGFzcz1cXFwiWydtb2RhbCcsIHsgJ2lzLWFjdGl2ZSc6IHNob3cgfV1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJzdWJ0aXRsZSBpcy01XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBpMThuKG1lc3NhZ2UgfHwgXFxcIkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24/XFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvaDU+XFxuICAgICAgICAgICAgICAgICAgICA8aHI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtbGVmdFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1zdWNjZXNzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ2NhbmNlbCcpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpMThuKFxcXCJDYW5jZWxcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtZGFuZ2VyIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRlbWl0KCdjb21taXQnKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaTE4bihcXFwiWWVzXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3RyYW5zaXRpb24+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHNob3c6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG1lc3NhZ2U6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICBpMThuOiB7XFxuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAubW9kYWwuaXMtYWN0aXZlIHtcXG4gICAgICAgIHotaW5kZXg6IDEwO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNDQ2Yzc5OWZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XCJhbmltYXRlZCBmYWRlSW5cIlxuICAgICAgICBsZWF2ZS1hY3RpdmUtY2xhc3M9XCJhbmltYXRlZCBmYWRlT3V0XCI+XG4gICAgICAgIDxkaXYgOmNsYXNzPVwiWydtb2RhbCcsIHsgJ2lzLWFjdGl2ZSc6IHNob3cgfV1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1iYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtY29udGVudFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwic3VidGl0bGUgaXMtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgaTE4bihtZXNzYWdlIHx8IFwiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gcGVyZm9ybSB0aGlzIGFjdGlvbj9cIikgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ2NhbmNlbCcpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpMThuKFwiQ2FuY2VsXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ2NvbW1pdCcpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpMThuKFwiWWVzXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIC5tb2RhbC5pcy1hY3RpdmUge1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBmYWRlSW5cIixcbiAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBmYWRlT3V0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgY2xhc3M6IFtcIm1vZGFsXCIsIHsgXCJpcy1hY3RpdmVcIjogX3ZtLnNob3cgfV0gfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWJhY2tncm91bmRcIiB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jb250ZW50XCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiYm94XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcInN1YnRpdGxlIGlzLTVcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICBfdm0uaTE4bihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0ubWVzc2FnZSB8fFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBwZXJmb3JtIHRoaXMgYWN0aW9uP1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWxlZnRcIiB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY2FuY2VsXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pMThuKFwiQ2FuY2VsXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjb21taXRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmkxOG4oXCJZZXNcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNDQ2Yzc5OWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ0NmM3OTlmXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0Ym9keVwiLFxuICAgIFtcbiAgICAgIF92bS5fbChfdm0uYm9keS5kYXRhLCBmdW5jdGlvbihyb3csIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgeyBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLnRlbXBsYXRlLmNydE5vICYmICFfdm0uaXNDaGlsZChyb3cpXG4gICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IGNsYXNzOiBfdm0udGVtcGxhdGUuYWxpZ24gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1jcnQtbm9cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNydC1uby1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldEluZGV4KHJvdykpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaGlkZGVuQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhpZGRlbi1jb250cm9sc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVFeHBhbmQocm93LCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IF92bS5pc0V4cGFuZGVkKHJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1pbnVzLXNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJwbHVzLXNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5jb2x1bW5zLCBmdW5jdGlvbihjb2x1bW4sIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW4ubWV0YS52aXNpYmxlICYmXG4gICAgICAgICAgICAgICAgIWNvbHVtbi5tZXRhLmhpZGRlbiAmJlxuICAgICAgICAgICAgICAgICFfdm0uaXNDaGlsZChyb3cpXG4gICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsga2V5OiBpbmRleCwgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5tZXRhLmJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhZyBpcy10YWJsZS10YWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogcm93W2NvbHVtbi5uYW1lXSA/IFwiaXMtc3VjY2Vzc1wiIDogXCJpcy1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiByb3dbY29sdW1uLm5hbWVdID8gXCJjaGVja1wiIDogXCJ0aW1lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IGNvbHVtbi5tZXRhLnJlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0uY3VzdG9tUmVuZGVyKHJvdywgY29sdW1uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvbHVtbi5tZXRhLnRyYW5zbGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmkxOG4ocm93W2NvbHVtbi5uYW1lXSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHJvd1tjb2x1bW4ubmFtZV0pKV0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS50ZW1wbGF0ZS5hY3Rpb25zICYmICFfdm0uaXNDaGlsZChyb3cpXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWFjdGlvbnNcIiwgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWFjdGlvbi1idXR0b25zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLmJ1dHRvbnMucm93LCBmdW5jdGlvbihidXR0b24sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGlzLXNtYWxsIGlzLXRhYmxlLWJ1dHRvbiBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogYnV0dG9uLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWN0aW9uID09PSBcImhyZWZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLmdldFBhdGgoYnV0dG9uLCByb3cuZHRSb3dJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jb25maXJtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5zaG93TW9kYWwoYnV0dG9uLCByb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uZG9BY3Rpb24oYnV0dG9uLCByb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IGJ1dHRvbi5pY29uIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmlzQ2hpbGQocm93KVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnRlbXBsYXRlLmFsaWduLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBfdm0uaGlkZGVuQ29sU3BhbiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHJvdywgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGNvbHVtbi5sYWJlbCwgc3RhdGljQ2xhc3M6IFwiY2hpbGQtcm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhjb2x1bW4ubGFiZWwpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArIF92bS5fcyhjb2x1bW4udmFsdWUpICsgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5tb2RhbFxuICAgICAgICA/IF9jKFwibW9kYWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc2hvdzogX3ZtLm1vZGFsLFxuICAgICAgICAgICAgICBpMThuOiBfdm0uaTE4bixcbiAgICAgICAgICAgICAgbWVzc2FnZTogX3ZtLmJ1dHRvbi5tZXNzYWdlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2FuY2VsOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uY2xvc2VNb2RhbCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGNvbW1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmRvQWN0aW9uKF92bS5idXR0b24sIF92bS5yb3cpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNWRiZmE5ZmNcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTVkYmZhOWZjXCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjJkMTlmMGFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVGb290ZXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9UYWJsZUZvb3Rlci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWIyZDE5ZjBhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVGFibGVGb290ZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWIyZDE5ZjBhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYjJkMTlmMGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExODNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjJkMTlmMGFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVGb290ZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0MTRhM2E3OFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iMmQxOWYwYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUZvb3Rlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjJkMTlmMGFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVGb290ZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWIyZDE5ZjBhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJUYWJsZUZvb3Rlci52dWVcIixcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1iMmQxOWYwYVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDx0Zm9vdD5cbiAgICAgICAgPHRyPlxuICAgICAgICAgICAgPHRkPjwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJoYXMtdGV4dC1jZW50ZXJlZCBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInRlbXBsYXRlLmNvbHVtbnNbMF0ubWV0YS52aXNpYmxlICYmICF0ZW1wbGF0ZS5jb2x1bW5zWzBdLm1ldGEuaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAge3sgaTE4bihcIlRvdGFsXCIpIH19XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiaGFzLXRleHQtY2VudGVyZWQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgIHYtZm9yPVwiaSBpbiB0ZW1wbGF0ZS5jb2x1bW5zLmxlbmd0aCAtIDFcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJpXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwidGVtcGxhdGUuY29sdW1uc1tpXS5tZXRhLnZpc2libGUgJiYgIXRlbXBsYXRlLmNvbHVtbnNbaV0ubWV0YS5oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwidGVtcGxhdGUuY29sdW1uc1tpXS5tZXRhLnRvdGFsXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IG51bWJlckZvcm1hdChib2R5LnRvdGFsW3RlbXBsYXRlLmNvbHVtbnNbaV0ubmFtZV0pIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCB2LWlmPVwidGVtcGxhdGUuYWN0aW9uc1wiPjwvdGQ+XG4gICAgICAgIDwvdHI+XG4gICAgPC90Zm9vdD5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdUYWJsZUZvb3RlcicsXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG51bWJlckZvcm1hdCh2YWx1ZSkge1xuICAgICAgICAgICAgY29uc3QgeCA9IHZhbHVlLnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGxldCB4MSA9IHhbMF07XG4gICAgICAgICAgICBjb25zdCB4MiA9IHgubGVuZ3RoID4gMSA/IGAuJHt4WzFdfWAgOiAnJztcbiAgICAgICAgICAgIGNvbnN0IHJneCA9IC8oXFxkKykoXFxkezN9KS87XG5cbiAgICAgICAgICAgIHdoaWxlIChyZ3gudGVzdCh4MSkpIHtcbiAgICAgICAgICAgICAgICB4MSA9IHgxLnJlcGxhY2Uocmd4LCAnJDEsJDInKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHgxICsgeDI7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0Zm9vdFwiLCBbXG4gICAgX2MoXG4gICAgICBcInRyXCIsXG4gICAgICBbXG4gICAgICAgIF9jKFwidGRcIiksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS50ZW1wbGF0ZS5jb2x1bW5zWzBdLm1ldGEudmlzaWJsZSAmJlxuICAgICAgICAhX3ZtLnRlbXBsYXRlLmNvbHVtbnNbMF0ubWV0YS5oaWRkZW5cbiAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGFzLXRleHQtY2VudGVyZWQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uaTE4bihcIlRvdGFsXCIpKSArIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0udGVtcGxhdGUuY29sdW1ucy5sZW5ndGggLSAxLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgcmV0dXJuIF92bS50ZW1wbGF0ZS5jb2x1bW5zW2ldLm1ldGEudmlzaWJsZSAmJlxuICAgICAgICAgICAgIV92bS50ZW1wbGF0ZS5jb2x1bW5zW2ldLm1ldGEuaGlkZGVuXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGksXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoYXMtdGV4dC1jZW50ZXJlZCBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0udGVtcGxhdGUuY29sdW1uc1tpXS5tZXRhLnRvdGFsXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5udW1iZXJGb3JtYXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5ib2R5LnRvdGFsW192bS50ZW1wbGF0ZS5jb2x1bW5zW2ldLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS50ZW1wbGF0ZS5hY3Rpb25zID8gX2MoXCJ0ZFwiKSA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtYjJkMTlmMGFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWIyZDE5ZjBhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTlmMjEwMDJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVjb3Jkc0luZm8udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9SZWNvcmRzSW5mby52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTU5ZjIxMDAyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUmVjb3Jkc0luZm8udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTU5ZjIxMDAyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNTlmMjEwMDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWVcbi8vIG1vZHVsZSBpZCA9IDExODhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTlmMjEwMDJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVjb3Jkc0luZm8udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzZTU1YjdkYVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01OWYyMTAwMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZWNvcmRzSW5mby52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTlmMjEwMDJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVjb3Jkc0luZm8udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTU5ZjIxMDAyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWJsZS1lbnRyaWVzLWluZm8ge1xcbiAgICBmb250LXNpemU6IDE1cHg7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF5Q0E7SUFDQSxnQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJSZWNvcmRzSW5mby52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8c3BhbiBjbGFzcz1cXFwidGFibGUtZW50cmllcy1pbmZvXFxcIj5cXG4gICAgICAgIHt7IGAke2kxOG4oJ0Zyb20nKX0gJHtzdGFydCArIDF9ICR7aTE4bigndG8nKX0gJHsoc3RhcnQgKyBsZW5ndGgpIDw9IGJvZHkuZmlsdGVyZWQgPyBzdGFydCArIGxlbmd0aCA6IGJvZHkuZmlsdGVyZWR9IFxcXFxcXG4gICAgICAgICR7aTE4bignb2YnKX0gJHtib2R5LmZpbHRlcmVkfSAke2kxOG4oJ2VudHJpZXMnKX1gIH19XFxuICAgICAgICA8c3BhbiB2LWlmPVxcXCJib2R5LmZpbHRlcmVkICE9PSBib2R5LmNvdW50XFxcIj5cXG4gICAgICAgICAgICB7eyBgKCR7aTE4bignZmlsdGVyZWQnKX0gJHtpMThuKCdmcm9tJyl9ICR7Ym9keS5jb3VudH0gXFxcXFxcbiAgICAgICAgICAgICR7aTE4bigndG90YWwnKX0gJHtpMThuKCdyZWNvcmRzJyl9KWAgfX1cXG4gICAgICAgIDwvc3Bhbj5cXG4gICAgPC9zcGFuPlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdSZWNvcmRzSW5mbycsXFxuXFxuICAgIHByb3BzOiB7XFxuICAgICAgICBzdGFydDoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBsZW5ndGg6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgYm9keToge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBpMThuOiB7XFxuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAudGFibGUtZW50cmllcy1pbmZvIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTU5ZjIxMDAyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPHNwYW4gY2xhc3M9XCJ0YWJsZS1lbnRyaWVzLWluZm9cIj5cbiAgICAgICAge3sgYCR7aTE4bignRnJvbScpfSAke3N0YXJ0ICsgMX0gJHtpMThuKCd0bycpfSAkeyhzdGFydCArIGxlbmd0aCkgPD0gYm9keS5maWx0ZXJlZCA/IHN0YXJ0ICsgbGVuZ3RoIDogYm9keS5maWx0ZXJlZH0gXFxcbiAgICAgICAgJHtpMThuKCdvZicpfSAke2JvZHkuZmlsdGVyZWR9ICR7aTE4bignZW50cmllcycpfWAgfX1cbiAgICAgICAgPHNwYW4gdi1pZj1cImJvZHkuZmlsdGVyZWQgIT09IGJvZHkuY291bnRcIj5cbiAgICAgICAgICAgIHt7IGAoJHtpMThuKCdmaWx0ZXJlZCcpfSAke2kxOG4oJ2Zyb20nKX0gJHtib2R5LmNvdW50fSBcXFxuICAgICAgICAgICAgJHtpMThuKCd0b3RhbCcpfSAke2kxOG4oJ3JlY29yZHMnKX0pYCB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgPC9zcGFuPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1JlY29yZHNJbmZvJyxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAudGFibGUtZW50cmllcy1pbmZvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1lbnRyaWVzLWluZm9cIiB9LCBbXG4gICAgX3ZtLl92KFxuICAgICAgXCJcXG4gICAgXCIgK1xuICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgX3ZtLmkxOG4oXCJGcm9tXCIpICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIChfdm0uc3RhcnQgKyAxKSArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICBfdm0uaTE4bihcInRvXCIpICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIChfdm0uc3RhcnQgKyBfdm0ubGVuZ3RoIDw9IF92bS5ib2R5LmZpbHRlcmVkXG4gICAgICAgICAgICAgID8gX3ZtLnN0YXJ0ICsgX3ZtLmxlbmd0aFxuICAgICAgICAgICAgICA6IF92bS5ib2R5LmZpbHRlcmVkKSArXG4gICAgICAgICAgICBcIiAgICAgXCIgK1xuICAgICAgICAgICAgX3ZtLmkxOG4oXCJvZlwiKSArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICBfdm0uYm9keS5maWx0ZXJlZCArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICBfdm0uaTE4bihcImVudHJpZXNcIilcbiAgICAgICAgKSArXG4gICAgICAgIFwiXFxuICAgIFwiXG4gICAgKSxcbiAgICBfdm0uYm9keS5maWx0ZXJlZCAhPT0gX3ZtLmJvZHkuY291bnRcbiAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICBcIlxcbiAgICAgICAgXCIgK1xuICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgXCIoXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLmkxOG4oXCJmaWx0ZXJlZFwiKSArXG4gICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uaTE4bihcImZyb21cIikgK1xuICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLmJvZHkuY291bnQgK1xuICAgICAgICAgICAgICAgICAgXCIgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uaTE4bihcInRvdGFsXCIpICtcbiAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5pMThuKFwicmVjb3Jkc1wiKSArXG4gICAgICAgICAgICAgICAgICBcIilcIlxuICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgXCJcXG4gICAgXCJcbiAgICAgICAgICApXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTU5ZjIxMDAyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01OWYyMTAwMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWVcbi8vIG1vZHVsZSBpZCA9IDExOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdmNWY0YWQwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BhZ2luYXRpb24udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2Y1ZjRhZDBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdmNWY0YWQwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2Y1ZjRhZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZjVmNGFkMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYjFlNzJmYTJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2Y1ZjRhZDBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGFnaW5hdGlvbi52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2Y1ZjRhZDBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGFnaW5hdGlvbi52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2Y1ZjRhZDBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5uYXYudGFibGUtbmF2aWdhdGlvbiB7XFxuICAgIG1heC13aWR0aDogNDI1cHg7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStIQTtJQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlBhZ2luYXRpb24udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPG5hdiBjbGFzcz1cXFwidGFibGUtcGFnaW5hdGlvbiBwYWdpbmF0aW9uIGlzLXNtYWxsXFxcIlxcbiAgICAgICAgcm9sZT1cXFwibmF2aWdhdGlvblxcXCJcXG4gICAgICAgIGFyaWEtbGFiZWw9XFxcInBhZ2luYXRpb25cXFwiPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tcHJldmlvdXNcXFwiXFxuICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJwYWdlID09PSAxXFxcIlxcbiAgICAgICAgICAgIEBjbGljaz1cXFwianVtcFRvKHBhZ2UgLSAxKVxcXCI+XFxuICAgICAgICAgICAge3sgaTE4bignUHJldmlvdXMnKSB9fVxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbmV4dFxcXCJcXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcInBhZ2UgPT09IHBhZ2VzXFxcIlxcbiAgICAgICAgICAgIEBjbGljaz1cXFwianVtcFRvKHBhZ2UgKyAxKVxcXCI+XFxuICAgICAgICAgICAge3sgaTE4bignTmV4dCcpIH19XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8dWwgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlzdFxcXCI+XFxuICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1jdXJyZW50JzogcGFnZSA9PT0gMSB9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJqdW1wVG8oMSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgdi1pZj1cXFwicGFnZXMgPiA1ICYmICFhdFN0YXJ0XFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInBhZ2luYXRpb24tZWxsaXBzaXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgJmhlbGxpcDtcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCJpIGluIG1pZGRsZVBhZ2VzXFxcIlxcbiAgICAgICAgICAgICAgICA6a2V5PVxcXCJpXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtY3VycmVudCc6IHBhZ2UgPT09IGkgfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwianVtcFRvKGkpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7IGkgfX1cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIHYtaWY9XFxcInBhZ2VzID4gNSAmJiAhYXRFbmRcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicGFnaW5hdGlvbi1lbGxpcHNpc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAmaGVsbGlwO1xcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgdi1pZj1cXFwicGFnZXMgPiAxXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtY3VycmVudCc6IHBhZ2UgPT09IHBhZ2VzIH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImp1bXBUbyhwYWdlcylcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3sgcGFnZXMgfX1cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICA8L3VsPlxcbiAgICA8L25hdj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnUGFnaW5hdGlvbicsXFxuXFxuICAgIHByb3BzOiB7XFxuICAgICAgICByZWNvcmRzOiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHN0YXJ0OiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGxlbmd0aDoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBpMThuOiB7XFxuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgcGFnZSgpIHtcXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuc3RhcnQgLyB0aGlzLmxlbmd0aCkgKyAxO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHBhZ2VzKCkge1xcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5yZWNvcmRzIC8gdGhpcy5sZW5ndGgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGF0U3RhcnQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA8IDQ7XFxuICAgICAgICB9LFxcbiAgICAgICAgYXRFbmQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZXMgLSB0aGlzLnBhZ2UgPCAzO1xcbiAgICAgICAgfSxcXG4gICAgICAgIG1pZGRsZVBhZ2VzKCkge1xcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VzID0gW107XFxuXFxuICAgICAgICAgICAgaWYgKHRoaXMuYXRTdGFydCkge1xcbiAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1pbih0aGlzLnBhZ2VzIC0gMSwgNCk7XFxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG1heDsgaSsrKSB7XFxuICAgICAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKGkpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHJldHVybiBwYWdlcztcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaWYgKHRoaXMuYXRFbmQpIHtcXG4gICAgICAgICAgICAgICAgcGFnZXMucHVzaCh0aGlzLnBhZ2VzIC0gMywgdGhpcy5wYWdlcyAtIDIsIHRoaXMucGFnZXMgLSAxKTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2VzO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBwYWdlcy5wdXNoKHRoaXMucGFnZSAtIDEsIHRoaXMucGFnZSwgdGhpcy5wYWdlICsgMSk7XFxuXFxuICAgICAgICAgICAgcmV0dXJuIHBhZ2VzO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAganVtcFRvKHBhZ2UpIHtcXG4gICAgICAgICAgICBpZiAocGFnZSA9PT0gdGhpcy5wYWdlIHx8IHBhZ2UgPCAxIHx8IHBhZ2UgPiB0aGlzLnBhZ2VzKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnanVtcC10bycsIChwYWdlIC0gMSkgKiB0aGlzLmxlbmd0aCk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICBuYXYudGFibGUtbmF2aWdhdGlvbiB7XFxuICAgICAgICBtYXgtd2lkdGg6IDQyNXB4O1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2Y1ZjRhZDBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxuYXYgY2xhc3M9XCJ0YWJsZS1wYWdpbmF0aW9uIHBhZ2luYXRpb24gaXMtc21hbGxcIlxuICAgICAgICByb2xlPVwibmF2aWdhdGlvblwiXG4gICAgICAgIGFyaWEtbGFiZWw9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1wcmV2aW91c1wiXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCJwYWdlID09PSAxXCJcbiAgICAgICAgICAgIEBjbGljaz1cImp1bXBUbyhwYWdlIC0gMSlcIj5cbiAgICAgICAgICAgIHt7IGkxOG4oJ1ByZXZpb3VzJykgfX1cbiAgICAgICAgPC9hPlxuICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbmV4dFwiXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCJwYWdlID09PSBwYWdlc1wiXG4gICAgICAgICAgICBAY2xpY2s9XCJqdW1wVG8ocGFnZSArIDEpXCI+XG4gICAgICAgICAgICB7eyBpMThuKCdOZXh0JykgfX1cbiAgICAgICAgPC9hPlxuICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIj5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWN1cnJlbnQnOiBwYWdlID09PSAxIH1cIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJqdW1wVG8oMSlcIj5cbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgdi1pZj1cInBhZ2VzID4gNSAmJiAhYXRTdGFydFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1lbGxpcHNpc1wiPlxuICAgICAgICAgICAgICAgICAgICAmaGVsbGlwO1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgdi1mb3I9XCJpIGluIG1pZGRsZVBhZ2VzXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiaVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtY3VycmVudCc6IHBhZ2UgPT09IGkgfVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImp1bXBUbyhpKVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBpIH19XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSB2LWlmPVwicGFnZXMgPiA1ICYmICFhdEVuZFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1lbGxpcHNpc1wiPlxuICAgICAgICAgICAgICAgICAgICAmaGVsbGlwO1xuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgdi1pZj1cInBhZ2VzID4gMVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtY3VycmVudCc6IHBhZ2UgPT09IHBhZ2VzIH1cIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJqdW1wVG8ocGFnZXMpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHBhZ2VzIH19XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgPC91bD5cbiAgICA8L25hdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdQYWdpbmF0aW9uJyxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHJlY29yZHM6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBzdGFydDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHBhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuc3RhcnQgLyB0aGlzLmxlbmd0aCkgKyAxO1xuICAgICAgICB9LFxuICAgICAgICBwYWdlcygpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5yZWNvcmRzIC8gdGhpcy5sZW5ndGgpO1xuICAgICAgICB9LFxuICAgICAgICBhdFN0YXJ0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZSA8IDQ7XG4gICAgICAgIH0sXG4gICAgICAgIGF0RW5kKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucGFnZXMgLSB0aGlzLnBhZ2UgPCAzO1xuICAgICAgICB9LFxuICAgICAgICBtaWRkbGVQYWdlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhZ2VzID0gW107XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmF0U3RhcnQpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXggPSBNYXRoLm1pbih0aGlzLnBhZ2VzIC0gMSwgNCk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gbWF4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMucHVzaChpKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcGFnZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmF0RW5kKSB7XG4gICAgICAgICAgICAgICAgcGFnZXMucHVzaCh0aGlzLnBhZ2VzIC0gMywgdGhpcy5wYWdlcyAtIDIsIHRoaXMucGFnZXMgLSAxKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFnZXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhZ2VzLnB1c2godGhpcy5wYWdlIC0gMSwgdGhpcy5wYWdlLCB0aGlzLnBhZ2UgKyAxKTtcblxuICAgICAgICAgICAgcmV0dXJuIHBhZ2VzO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGp1bXBUbyhwYWdlKSB7XG4gICAgICAgICAgICBpZiAocGFnZSA9PT0gdGhpcy5wYWdlIHx8IHBhZ2UgPCAxIHx8IHBhZ2UgPiB0aGlzLnBhZ2VzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdqdW1wLXRvJywgKHBhZ2UgLSAxKSAqIHRoaXMubGVuZ3RoKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIG5hdi50YWJsZS1uYXZpZ2F0aW9uIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MjVweDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcIm5hdlwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlLXBhZ2luYXRpb24gcGFnaW5hdGlvbiBpcy1zbWFsbFwiLFxuICAgICAgYXR0cnM6IHsgcm9sZTogXCJuYXZpZ2F0aW9uXCIsIFwiYXJpYS1sYWJlbFwiOiBcInBhZ2luYXRpb25cIiB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLXByZXZpb3VzXCIsXG4gICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5wYWdlID09PSAxIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmp1bXBUbyhfdm0ucGFnZSAtIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uaTE4bihcIlByZXZpb3VzXCIpKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1uZXh0XCIsXG4gICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5wYWdlID09PSBfdm0ucGFnZXMgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uanVtcFRvKF92bS5wYWdlICsgMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5pMThuKFwiTmV4dFwiKSkgKyBcIlxcbiAgICBcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInVsXCIsXG4gICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saXN0XCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1jdXJyZW50XCI6IF92bS5wYWdlID09PSAxIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmp1bXBUbygxKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnBhZ2VzID4gNSAmJiAhX3ZtLmF0U3RhcnRcbiAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1lbGxpcHNpc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDigKZcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5fbChfdm0ubWlkZGxlUGFnZXMsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsga2V5OiBpIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWN1cnJlbnRcIjogX3ZtLnBhZ2UgPT09IGkgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uanVtcFRvKGkpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3MoaSkgKyBcIlxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5wYWdlcyA+IDUgJiYgIV92bS5hdEVuZFxuICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWVsbGlwc2lzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOKAplxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnBhZ2VzID4gMVxuICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1jdXJyZW50XCI6IF92bS5wYWdlID09PSBfdm0ucGFnZXMgfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uanVtcFRvKF92bS5wYWdlcylcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnBhZ2VzKSArXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2Y1ZjRhZDBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdmNWY0YWQwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNzZjMjk3Y1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL092ZXJsYXkudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9PdmVybGF5LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjc2YzI5N2NcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL092ZXJsYXkudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi1mNzZjMjk3Y1wiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZjc2YzI5N2NcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1mNzZjMjk3Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY3NmMyOTdjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vT3ZlcmxheS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjIxMzQ3Yzk0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY3NmMyOTdjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vT3ZlcmxheS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjc2YzI5N2NcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9PdmVybGF5LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1mNzZjMjk3Y1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWVcbi8vIG1vZHVsZSBpZCA9IDExOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm92ZXJsYXlbZGF0YS12LWY3NmMyOTdjXSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4ub3ZlcmxheS1sb2FkZXJbZGF0YS12LWY3NmMyOTdjXSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Bcm91bmQgNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBhbmltYXRpb246IHNwaW5Bcm91bmQgNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICB3aWR0aDogMmVtO1xcbiAgICBoZWlnaHQ6IDJlbTtcXG4gICAgYm9yZGVyOiAycHggc29saWQjZjQ0MzM2O1xcbiAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICBib3JkZXItdG9wLWNvbG9yOiB0cmFuc3BhcmVudDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBaUJBO0lBQ0EscUNBQUE7SUFDQSxxQkFBQTtJQUFBLHFCQUFBO0lBQUEsY0FBQTtDQUNBO0FBRUE7SUFDQSxhQUFBO0lBQ0Esb0RBQUE7SUFDQSw0Q0FBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSxZQUFBO0lBQ0EseUJBQUE7SUFDQSxnQ0FBQTtJQUNBLDhCQUFBO0NBQ0FcIixcImZpbGVcIjpcIk92ZXJsYXkudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwib3ZlcmxheSBpcy1vdmVybGF5XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm92ZXJsYXktbG9hZGVyXFxcIj48L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ092ZXJsYXknLFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNjb3BlZD5cXG5cXG4gICAgLm92ZXJsYXkge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAub3ZlcmxheS1sb2FkZXIge1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Bcm91bmQgNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluQXJvdW5kIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgd2lkdGg6IDJlbTtcXG4gICAgICAgIGhlaWdodDogMmVtO1xcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQjZjQ0MzM2O1xcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZjc2YzI5N2NcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cIm92ZXJsYXkgaXMtb3ZlcmxheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwib3ZlcmxheS1sb2FkZXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdPdmVybGF5Jyxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuXG4gICAgLm92ZXJsYXkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLm92ZXJsYXktbG9hZGVyIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbkFyb3VuZCA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIGFuaW1hdGlvbjogc3BpbkFyb3VuZCA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkI2Y0NDMzNjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLXRvcC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLl9tKDApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm92ZXJsYXkgaXMtb3ZlcmxheVwiIH0sIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwib3ZlcmxheS1sb2FkZXJcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWY3NmMyOTdjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mNzZjMjk3Y1wiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiaW1wb3J0IHJlc2l6ZURldGVjdG9yIGZyb20gJ2VsZW1lbnQtcmVzaXplLWRldGVjdG9yJztcbmltcG9ydCBSZXNwb25zaXZlVGFibGUgZnJvbSAnLi9SZXNwb25zaXZlVGFibGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgaW5zZXJ0ZWQ6IChlbCwgYmluZGluZywgeyBjb250ZXh0IH0pID0+IHtcbiAgICAgICAgY29uc3QgdGFibGUgPSBuZXcgUmVzcG9uc2l2ZVRhYmxlKGVsLCBjb250ZXh0KTtcbiAgICAgICAgY29uc3QgZXJkID0gcmVzaXplRGV0ZWN0b3IoeyBzdHJhdGVneTogJ3Njcm9sbCcgfSk7XG5cbiAgICAgICAgdGFibGUucmVzaXplKCk7XG5cbiAgICAgICAgZXJkLmxpc3RlblRvKGVsLCAoKSA9PiB7XG4gICAgICAgICAgICB0YWJsZS5yZXNpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvcmVzcG9uc2l2ZS92UmVzcG9uc2l2ZS5qcyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZm9yRWFjaCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKFwiLi9jb2xsZWN0aW9uLXV0aWxzXCIpLmZvckVhY2g7XG52YXIgZWxlbWVudFV0aWxzTWFrZXIgICAgICAgPSByZXF1aXJlKFwiLi9lbGVtZW50LXV0aWxzXCIpO1xudmFyIGxpc3RlbmVySGFuZGxlck1ha2VyICAgID0gcmVxdWlyZShcIi4vbGlzdGVuZXItaGFuZGxlclwiKTtcbnZhciBpZEdlbmVyYXRvck1ha2VyICAgICAgICA9IHJlcXVpcmUoXCIuL2lkLWdlbmVyYXRvclwiKTtcbnZhciBpZEhhbmRsZXJNYWtlciAgICAgICAgICA9IHJlcXVpcmUoXCIuL2lkLWhhbmRsZXJcIik7XG52YXIgcmVwb3J0ZXJNYWtlciAgICAgICAgICAgPSByZXF1aXJlKFwiLi9yZXBvcnRlclwiKTtcbnZhciBicm93c2VyRGV0ZWN0b3IgICAgICAgICA9IHJlcXVpcmUoXCIuL2Jyb3dzZXItZGV0ZWN0b3JcIik7XG52YXIgYmF0Y2hQcm9jZXNzb3JNYWtlciAgICAgPSByZXF1aXJlKFwiYmF0Y2gtcHJvY2Vzc29yXCIpO1xudmFyIHN0YXRlSGFuZGxlciAgICAgICAgICAgID0gcmVxdWlyZShcIi4vc3RhdGUtaGFuZGxlclwiKTtcblxuLy9EZXRlY3Rpb24gc3RyYXRlZ2llcy5cbnZhciBvYmplY3RTdHJhdGVneU1ha2VyICAgICA9IHJlcXVpcmUoXCIuL2RldGVjdGlvbi1zdHJhdGVneS9vYmplY3QuanNcIik7XG52YXIgc2Nyb2xsU3RyYXRlZ3lNYWtlciAgICAgPSByZXF1aXJlKFwiLi9kZXRlY3Rpb24tc3RyYXRlZ3kvc2Nyb2xsLmpzXCIpO1xuXG5mdW5jdGlvbiBpc0NvbGxlY3Rpb24ob2JqKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob2JqKSB8fCBvYmoubGVuZ3RoICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkoY29sbGVjdGlvbikge1xuICAgIGlmICghQXJyYXkuaXNBcnJheShjb2xsZWN0aW9uKSkge1xuICAgICAgICB2YXIgYXJyYXkgPSBbXTtcbiAgICAgICAgZm9yRWFjaChjb2xsZWN0aW9uLCBmdW5jdGlvbiAob2JqKSB7XG4gICAgICAgICAgICBhcnJheS5wdXNoKG9iaik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gYXJyYXk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbGxlY3Rpb247XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpc0VsZW1lbnQob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmoubm9kZVR5cGUgPT09IDE7XG59XG5cbi8qKlxuICogQHR5cGVkZWYgaWRIYW5kbGVyXG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gZ2V0IEdldHMgdGhlIHJlc2l6ZSBkZXRlY3RvciBpZCBvZiB0aGUgZWxlbWVudC5cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IHNldCBHZW5lcmF0ZSBhbmQgc2V0cyB0aGUgcmVzaXplIGRldGVjdG9yIGlkIG9mIHRoZSBlbGVtZW50LlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgT3B0aW9uc1xuICogQHR5cGUge29iamVjdH1cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gY2FsbE9uQWRkICAgIERldGVybWluZXMgaWYgbGlzdGVuZXJzIHNob3VsZCBiZSBjYWxsZWQgd2hlbiB0aGV5IGFyZSBnZXR0aW5nIGFkZGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRGVmYXVsdCBpcyB0cnVlLiBJZiB0cnVlLCB0aGUgbGlzdGVuZXIgaXMgZ3VhcmFudGVlZCB0byBiZSBjYWxsZWQgd2hlbiBpdCBoYXMgYmVlbiBhZGRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIGZhbHNlLCB0aGUgbGlzdGVuZXIgd2lsbCBub3QgYmUgZ3VhcmVudGVlZCB0byBiZSBjYWxsZWQgd2hlbiBpdCBoYXMgYmVlbiBhZGRlZCAoZG9lcyBub3QgcHJldmVudCBpdCBmcm9tIGJlaW5nIGNhbGxlZCkuXG4gKiBAcHJvcGVydHkge2lkSGFuZGxlcn0gaWRIYW5kbGVyICBBIGN1c3RvbSBpZCBoYW5kbGVyIHRoYXQgaXMgcmVzcG9uc2libGUgZm9yIGdlbmVyYXRpbmcsIHNldHRpbmcgYW5kIHJldHJpZXZpbmcgaWQncyBmb3IgZWxlbWVudHMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBub3QgcHJvdmlkZWQsIGEgZGVmYXVsdCBpZCBoYW5kbGVyIHdpbGwgYmUgdXNlZC5cbiAqIEBwcm9wZXJ0eSB7cmVwb3J0ZXJ9IHJlcG9ydGVyICAgIEEgY3VzdG9tIHJlcG9ydGVyIHRoYXQgaGFuZGxlcyByZXBvcnRpbmcgbG9ncywgd2FybmluZ3MgYW5kIGVycm9ycy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIG5vdCBwcm92aWRlZCwgYSBkZWZhdWx0IGlkIGhhbmRsZXIgd2lsbCBiZSB1c2VkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgc2V0IHRvIGZhbHNlLCB0aGVuIG5vdGhpbmcgd2lsbCBiZSByZXBvcnRlZC5cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gZGVidWcgICAgICAgIElmIHNldCB0byB0cnVlLCB0aGUgdGhlIHN5c3RlbSB3aWxsIHJlcG9ydCBkZWJ1ZyBtZXNzYWdlcyBhcyBkZWZhdWx0IGZvciB0aGUgbGlzdGVuVG8gbWV0aG9kLlxuICovXG5cbi8qKlxuICogQ3JlYXRlcyBhbiBlbGVtZW50IHJlc2l6ZSBkZXRlY3RvciBpbnN0YW5jZS5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSB7T3B0aW9ucz99IG9wdGlvbnMgT3B0aW9uYWwgZ2xvYmFsIG9wdGlvbnMgb2JqZWN0IHRoYXQgd2lsbCBkZWNpZGUgaG93IHRoaXMgaW5zdGFuY2Ugd2lsbCB3b3JrLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgIC8vaWRIYW5kbGVyIGlzIGN1cnJlbnRseSBub3QgYW4gb3B0aW9uIHRvIHRoZSBsaXN0ZW5UbyBmdW5jdGlvbiwgc28gaXQgc2hvdWxkIG5vdCBiZSBhZGRlZCB0byBnbG9iYWxPcHRpb25zLlxuICAgIHZhciBpZEhhbmRsZXI7XG5cbiAgICBpZiAob3B0aW9ucy5pZEhhbmRsZXIpIHtcbiAgICAgICAgLy8gVG8gbWFpbnRhaW4gY29tcGF0YWJpbGl0eSB3aXRoIGlkSGFuZGxlci5nZXQoZWxlbWVudCwgcmVhZG9ubHkpLCBtYWtlIHN1cmUgdG8gd3JhcCB0aGUgZ2l2ZW4gaWRIYW5kbGVyXG4gICAgICAgIC8vIHNvIHRoYXQgcmVhZG9ubHkgZmxhZyBhbHdheXMgaXMgdHJ1ZSB3aGVuIGl0J3MgdXNlZCBoZXJlLiBUaGlzIG1heSBiZSByZW1vdmVkIG5leHQgbWFqb3IgdmVyc2lvbiBidW1wLlxuICAgICAgICBpZEhhbmRsZXIgPSB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uIChlbGVtZW50KSB7IHJldHVybiBvcHRpb25zLmlkSGFuZGxlci5nZXQoZWxlbWVudCwgdHJ1ZSk7IH0sXG4gICAgICAgICAgICBzZXQ6IG9wdGlvbnMuaWRIYW5kbGVyLnNldFxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpZEdlbmVyYXRvciA9IGlkR2VuZXJhdG9yTWFrZXIoKTtcbiAgICAgICAgdmFyIGRlZmF1bHRJZEhhbmRsZXIgPSBpZEhhbmRsZXJNYWtlcih7XG4gICAgICAgICAgICBpZEdlbmVyYXRvcjogaWRHZW5lcmF0b3IsXG4gICAgICAgICAgICBzdGF0ZUhhbmRsZXI6IHN0YXRlSGFuZGxlclxuICAgICAgICB9KTtcbiAgICAgICAgaWRIYW5kbGVyID0gZGVmYXVsdElkSGFuZGxlcjtcbiAgICB9XG5cbiAgICAvL3JlcG9ydGVyIGlzIGN1cnJlbnRseSBub3QgYW4gb3B0aW9uIHRvIHRoZSBsaXN0ZW5UbyBmdW5jdGlvbiwgc28gaXQgc2hvdWxkIG5vdCBiZSBhZGRlZCB0byBnbG9iYWxPcHRpb25zLlxuICAgIHZhciByZXBvcnRlciA9IG9wdGlvbnMucmVwb3J0ZXI7XG5cbiAgICBpZighcmVwb3J0ZXIpIHtcbiAgICAgICAgLy9JZiBvcHRpb25zLnJlcG9ydGVyIGlzIGZhbHNlLCB0aGVuIHRoZSByZXBvcnRlciBzaG91bGQgYmUgcXVpZXQuXG4gICAgICAgIHZhciBxdWlldCA9IHJlcG9ydGVyID09PSBmYWxzZTtcbiAgICAgICAgcmVwb3J0ZXIgPSByZXBvcnRlck1ha2VyKHF1aWV0KTtcbiAgICB9XG5cbiAgICAvL2JhdGNoUHJvY2Vzc29yIGlzIGN1cnJlbnRseSBub3QgYW4gb3B0aW9uIHRvIHRoZSBsaXN0ZW5UbyBmdW5jdGlvbiwgc28gaXQgc2hvdWxkIG5vdCBiZSBhZGRlZCB0byBnbG9iYWxPcHRpb25zLlxuICAgIHZhciBiYXRjaFByb2Nlc3NvciA9IGdldE9wdGlvbihvcHRpb25zLCBcImJhdGNoUHJvY2Vzc29yXCIsIGJhdGNoUHJvY2Vzc29yTWFrZXIoeyByZXBvcnRlcjogcmVwb3J0ZXIgfSkpO1xuXG4gICAgLy9PcHRpb25zIHRvIGJlIHVzZWQgYXMgZGVmYXVsdCBmb3IgdGhlIGxpc3RlblRvIGZ1bmN0aW9uLlxuICAgIHZhciBnbG9iYWxPcHRpb25zID0ge307XG4gICAgZ2xvYmFsT3B0aW9ucy5jYWxsT25BZGQgICAgID0gISFnZXRPcHRpb24ob3B0aW9ucywgXCJjYWxsT25BZGRcIiwgdHJ1ZSk7XG4gICAgZ2xvYmFsT3B0aW9ucy5kZWJ1ZyAgICAgICAgID0gISFnZXRPcHRpb24ob3B0aW9ucywgXCJkZWJ1Z1wiLCBmYWxzZSk7XG5cbiAgICB2YXIgZXZlbnRMaXN0ZW5lckhhbmRsZXIgICAgPSBsaXN0ZW5lckhhbmRsZXJNYWtlcihpZEhhbmRsZXIpO1xuICAgIHZhciBlbGVtZW50VXRpbHMgICAgICAgICAgICA9IGVsZW1lbnRVdGlsc01ha2VyKHtcbiAgICAgICAgc3RhdGVIYW5kbGVyOiBzdGF0ZUhhbmRsZXJcbiAgICB9KTtcblxuICAgIC8vVGhlIGRldGVjdGlvbiBzdHJhdGVneSB0byBiZSB1c2VkLlxuICAgIHZhciBkZXRlY3Rpb25TdHJhdGVneTtcbiAgICB2YXIgZGVzaXJlZFN0cmF0ZWd5ID0gZ2V0T3B0aW9uKG9wdGlvbnMsIFwic3RyYXRlZ3lcIiwgXCJvYmplY3RcIik7XG4gICAgdmFyIHN0cmF0ZWd5T3B0aW9ucyA9IHtcbiAgICAgICAgcmVwb3J0ZXI6IHJlcG9ydGVyLFxuICAgICAgICBiYXRjaFByb2Nlc3NvcjogYmF0Y2hQcm9jZXNzb3IsXG4gICAgICAgIHN0YXRlSGFuZGxlcjogc3RhdGVIYW5kbGVyLFxuICAgICAgICBpZEhhbmRsZXI6IGlkSGFuZGxlclxuICAgIH07XG5cbiAgICBpZihkZXNpcmVkU3RyYXRlZ3kgPT09IFwic2Nyb2xsXCIpIHtcbiAgICAgICAgaWYgKGJyb3dzZXJEZXRlY3Rvci5pc0xlZ2FjeU9wZXJhKCkpIHtcbiAgICAgICAgICAgIHJlcG9ydGVyLndhcm4oXCJTY3JvbGwgc3RyYXRlZ3kgaXMgbm90IHN1cHBvcnRlZCBvbiBsZWdhY3kgT3BlcmEuIENoYW5naW5nIHRvIG9iamVjdCBzdHJhdGVneS5cIik7XG4gICAgICAgICAgICBkZXNpcmVkU3RyYXRlZ3kgPSBcIm9iamVjdFwiO1xuICAgICAgICB9IGVsc2UgaWYgKGJyb3dzZXJEZXRlY3Rvci5pc0lFKDkpKSB7XG4gICAgICAgICAgICByZXBvcnRlci53YXJuKFwiU2Nyb2xsIHN0cmF0ZWd5IGlzIG5vdCBzdXBwb3J0ZWQgb24gSUU5LiBDaGFuZ2luZyB0byBvYmplY3Qgc3RyYXRlZ3kuXCIpO1xuICAgICAgICAgICAgZGVzaXJlZFN0cmF0ZWd5ID0gXCJvYmplY3RcIjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGlmKGRlc2lyZWRTdHJhdGVneSA9PT0gXCJzY3JvbGxcIikge1xuICAgICAgICBkZXRlY3Rpb25TdHJhdGVneSA9IHNjcm9sbFN0cmF0ZWd5TWFrZXIoc3RyYXRlZ3lPcHRpb25zKTtcbiAgICB9IGVsc2UgaWYoZGVzaXJlZFN0cmF0ZWd5ID09PSBcIm9iamVjdFwiKSB7XG4gICAgICAgIGRldGVjdGlvblN0cmF0ZWd5ID0gb2JqZWN0U3RyYXRlZ3lNYWtlcihzdHJhdGVneU9wdGlvbnMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgc3RyYXRlZ3kgbmFtZTogXCIgKyBkZXNpcmVkU3RyYXRlZ3kpO1xuICAgIH1cblxuICAgIC8vQ2FsbHMgY2FuIGJlIG1hZGUgdG8gbGlzdGVuVG8gd2l0aCBlbGVtZW50cyB0aGF0IGFyZSBzdGlsbCBiZWluZyBpbnN0YWxsZWQuXG4gICAgLy9BbHNvLCBzYW1lIGVsZW1lbnRzIGNhbiBvY2N1ciBpbiB0aGUgZWxlbWVudHMgbGlzdCBpbiB0aGUgbGlzdGVuVG8gZnVuY3Rpb24uXG4gICAgLy9XaXRoIHRoaXMgbWFwLCB0aGUgcmVhZHkgY2FsbGJhY2tzIGNhbiBiZSBzeW5jaHJvbml6ZWQgYmV0d2VlbiB0aGUgY2FsbHNcbiAgICAvL3NvIHRoYXQgdGhlIHJlYWR5IGNhbGxiYWNrIGNhbiBhbHdheXMgYmUgY2FsbGVkIHdoZW4gYW4gZWxlbWVudCBpcyByZWFkeSAtIGV2ZW4gaWZcbiAgICAvL2l0IHdhc24ndCBpbnN0YWxsZWQgZnJvbSB0aGUgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHZhciBvblJlYWR5Q2FsbGJhY2tzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyB0aGUgZ2l2ZW4gZWxlbWVudHMgcmVzaXplLWRldGVjdGFibGUgYW5kIHN0YXJ0cyBsaXN0ZW5pbmcgdG8gcmVzaXplIGV2ZW50cyBvbiB0aGUgZWxlbWVudHMuIENhbGxzIHRoZSBldmVudCBjYWxsYmFjayBmb3IgZWFjaCBldmVudCBmb3IgZWFjaCBlbGVtZW50LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge09wdGlvbnM/fSBvcHRpb25zIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0LiBUaGVzZSBvcHRpb25zIHdpbGwgb3ZlcnJpZGUgdGhlIGdsb2JhbCBvcHRpb25zLiBTb21lIG9wdGlvbnMgbWF5IG5vdCBiZSBvdmVycmlkZW4sIHN1Y2ggYXMgaWRIYW5kbGVyLlxuICAgICAqIEBwYXJhbSB7ZWxlbWVudFtdfGVsZW1lbnR9IGVsZW1lbnRzIFRoZSBnaXZlbiBhcnJheSBvZiBlbGVtZW50cyB0byBkZXRlY3QgcmVzaXplIGV2ZW50cyBvZi4gU2luZ2xlIGVsZW1lbnQgaXMgYWxzbyB2YWxpZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBUaGUgY2FsbGJhY2sgdG8gYmUgZXhlY3V0ZWQgZm9yIGVhY2ggcmVzaXplIGV2ZW50IGZvciBlYWNoIGVsZW1lbnQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbGlzdGVuVG8ob3B0aW9ucywgZWxlbWVudHMsIGxpc3RlbmVyKSB7XG4gICAgICAgIGZ1bmN0aW9uIG9uUmVzaXplQ2FsbGJhY2soZWxlbWVudCkge1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVycyA9IGV2ZW50TGlzdGVuZXJIYW5kbGVyLmdldChlbGVtZW50KTtcbiAgICAgICAgICAgIGZvckVhY2gobGlzdGVuZXJzLCBmdW5jdGlvbiBjYWxsTGlzdGVuZXJQcm94eShsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcihjYWxsT25BZGQsIGVsZW1lbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgICAgICBldmVudExpc3RlbmVySGFuZGxlci5hZGQoZWxlbWVudCwgbGlzdGVuZXIpO1xuXG4gICAgICAgICAgICBpZihjYWxsT25BZGQpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vT3B0aW9ucyBvYmplY3QgbWF5IGJlIG9taXR0ZWQuXG4gICAgICAgIGlmKCFsaXN0ZW5lcikge1xuICAgICAgICAgICAgbGlzdGVuZXIgPSBlbGVtZW50cztcbiAgICAgICAgICAgIGVsZW1lbnRzID0gb3B0aW9ucztcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFlbGVtZW50cykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQXQgbGVhc3Qgb25lIGVsZW1lbnQgcmVxdWlyZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWxpc3RlbmVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMaXN0ZW5lciByZXF1aXJlZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbGVtZW50KGVsZW1lbnRzKSkge1xuICAgICAgICAgICAgLy8gQSBzaW5nbGUgZWxlbWVudCBoYXMgYmVlbiBwYXNzZWQgaW4uXG4gICAgICAgICAgICBlbGVtZW50cyA9IFtlbGVtZW50c107XG4gICAgICAgIH0gZWxzZSBpZiAoaXNDb2xsZWN0aW9uKGVsZW1lbnRzKSkge1xuICAgICAgICAgICAgLy8gQ29udmVydCBjb2xsZWN0aW9uIHRvIGFycmF5IGZvciBwbHVnaW5zLlxuICAgICAgICAgICAgLy8gVE9ETzogTWF5IHdhbnQgdG8gY2hlY2sgc28gdGhhdCBhbGwgdGhlIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uIGFyZSB2YWxpZCBlbGVtZW50cy5cbiAgICAgICAgICAgIGVsZW1lbnRzID0gdG9BcnJheShlbGVtZW50cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb3J0ZXIuZXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50cy4gTXVzdCBiZSBhIERPTSBlbGVtZW50IG9yIGEgY29sbGVjdGlvbiBvZiBET00gZWxlbWVudHMuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVsZW1lbnRzUmVhZHkgPSAwO1xuXG4gICAgICAgIHZhciBjYWxsT25BZGQgPSBnZXRPcHRpb24ob3B0aW9ucywgXCJjYWxsT25BZGRcIiwgZ2xvYmFsT3B0aW9ucy5jYWxsT25BZGQpO1xuICAgICAgICB2YXIgb25SZWFkeUNhbGxiYWNrID0gZ2V0T3B0aW9uKG9wdGlvbnMsIFwib25SZWFkeVwiLCBmdW5jdGlvbiBub29wKCkge30pO1xuICAgICAgICB2YXIgZGVidWcgPSBnZXRPcHRpb24ob3B0aW9ucywgXCJkZWJ1Z1wiLCBnbG9iYWxPcHRpb25zLmRlYnVnKTtcblxuICAgICAgICBmb3JFYWNoKGVsZW1lbnRzLCBmdW5jdGlvbiBhdHRhY2hMaXN0ZW5lclRvRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoIXN0YXRlSGFuZGxlci5nZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHN0YXRlSGFuZGxlci5pbml0U3RhdGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWRIYW5kbGVyLnNldChlbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGlkID0gaWRIYW5kbGVyLmdldChlbGVtZW50KTtcblxuICAgICAgICAgICAgZGVidWcgJiYgcmVwb3J0ZXIubG9nKFwiQXR0YWNoaW5nIGxpc3RlbmVyIHRvIGVsZW1lbnRcIiwgaWQsIGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBpZighZWxlbWVudFV0aWxzLmlzRGV0ZWN0YWJsZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGRlYnVnICYmIHJlcG9ydGVyLmxvZyhpZCwgXCJOb3QgZGV0ZWN0YWJsZS5cIik7XG4gICAgICAgICAgICAgICAgaWYoZWxlbWVudFV0aWxzLmlzQnVzeShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1ZyAmJiByZXBvcnRlci5sb2coaWQsIFwiU3lzdGVtIGJ1c3kgbWFraW5nIGl0IGRldGVjdGFibGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9UaGUgZWxlbWVudCBpcyBiZWluZyBwcmVwYXJlZCB0byBiZSBkZXRlY3RhYmxlLiBEbyBub3QgbWFrZSBpdCBkZXRlY3RhYmxlLlxuICAgICAgICAgICAgICAgICAgICAvL0p1c3QgYWRkIHRoZSBsaXN0ZW5lciwgYmVjYXVzZSB0aGUgZWxlbWVudCB3aWxsIHNvb24gYmUgZGV0ZWN0YWJsZS5cbiAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIoY2FsbE9uQWRkLCBlbGVtZW50LCBsaXN0ZW5lcik7XG4gICAgICAgICAgICAgICAgICAgIG9uUmVhZHlDYWxsYmFja3NbaWRdID0gb25SZWFkeUNhbGxiYWNrc1tpZF0gfHwgW107XG4gICAgICAgICAgICAgICAgICAgIG9uUmVhZHlDYWxsYmFja3NbaWRdLnB1c2goZnVuY3Rpb24gb25SZWFkeSgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzUmVhZHkrKztcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudHNSZWFkeSA9PT0gZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZWFkeUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVidWcgJiYgcmVwb3J0ZXIubG9nKGlkLCBcIk1ha2luZyBkZXRlY3RhYmxlLi4uXCIpO1xuICAgICAgICAgICAgICAgIC8vVGhlIGVsZW1lbnQgaXMgbm90IHByZXBhcmVkIHRvIGJlIGRldGVjdGFibGUsIHNvIGRvIHByZXBhcmUgaXQgYW5kIGFkZCBhIGxpc3RlbmVyIHRvIGl0LlxuICAgICAgICAgICAgICAgIGVsZW1lbnRVdGlscy5tYXJrQnVzeShlbGVtZW50LCB0cnVlKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGV0ZWN0aW9uU3RyYXRlZ3kubWFrZURldGVjdGFibGUoeyBkZWJ1ZzogZGVidWcgfSwgZWxlbWVudCwgZnVuY3Rpb24gb25FbGVtZW50RGV0ZWN0YWJsZShlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnICYmIHJlcG9ydGVyLmxvZyhpZCwgXCJvbkVsZW1lbnREZXRlY3RhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZUhhbmRsZXIuZ2V0U3RhdGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRVdGlscy5tYXJrQXNEZXRlY3RhYmxlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFV0aWxzLm1hcmtCdXN5KGVsZW1lbnQsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRldGVjdGlvblN0cmF0ZWd5LmFkZExpc3RlbmVyKGVsZW1lbnQsIG9uUmVzaXplQ2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgYWRkTGlzdGVuZXIoY2FsbE9uQWRkLCBlbGVtZW50LCBsaXN0ZW5lcik7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBlbGVtZW50IHNpemUgbWlnaHQgaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZSBjYWxsIHRvIFwibGlzdGVuVG9cIiwgd2UgbmVlZCB0byBjaGVjayBmb3IgdGhpcyBjaGFuZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzbyB0aGF0IGEgcmVzaXplIGV2ZW50IG1heSBiZSBlbWl0dGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSGF2aW5nIHRoZSBzdGFydFNpemUgb2JqZWN0IGlzIG9wdGlvbmFsIChzaW5jZSBpdCBkb2VzIG5vdCBtYWtlIHNlbnNlIGluIHNvbWUgY2FzZXMgc3VjaCBhcyB1bnJlbmRlcmVkIGVsZW1lbnRzKSwgc28gY2hlY2sgZm9yIGl0cyBleGlzdGFuY2UgYmVmb3JlLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQWxzbywgY2hlY2sgdGhlIHN0YXRlIGV4aXN0YW5jZSBiZWZvcmUgc2luY2UgdGhlIGVsZW1lbnQgbWF5IGhhdmUgYmVlbiB1bmluc3RhbGxlZCBpbiB0aGUgaW5zdGFsbGF0aW9uIHByb2Nlc3MuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBzdGF0ZUhhbmRsZXIuZ2V0U3RhdGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUuc3RhcnRTaXplKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlLnN0YXJ0U2l6ZS53aWR0aCAhPT0gd2lkdGggfHwgc3RhdGUuc3RhcnRTaXplLmhlaWdodCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVzaXplQ2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvblJlYWR5Q2FsbGJhY2tzW2lkXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvckVhY2gob25SZWFkeUNhbGxiYWNrc1tpZF0sIGZ1bmN0aW9uKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBoYXMgYmVlbiB1bmlzbnRhbGxlZCBiZWZvcmUgYmVpbmcgZGV0ZWN0YWJsZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnICYmIHJlcG9ydGVyLmxvZyhpZCwgXCJFbGVtZW50IHVuaW5zdGFsbGVkIGJlZm9yZSBiZWluZyBkZXRlY3RhYmxlLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBvblJlYWR5Q2FsbGJhY2tzW2lkXTtcblxuICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1JlYWR5Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnRzUmVhZHkgPT09IGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb25SZWFkeUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVidWcgJiYgcmVwb3J0ZXIubG9nKGlkLCBcIkFscmVhZHkgZGV0ZWNhYmxlLCBhZGRpbmcgbGlzdGVuZXIuXCIpO1xuXG4gICAgICAgICAgICAvL1RoZSBlbGVtZW50IGhhcyBiZWVuIHByZXBhcmVkIHRvIGJlIGRldGVjdGFibGUgYW5kIGlzIHJlYWR5IHRvIGJlIGxpc3RlbmVkIHRvLlxuICAgICAgICAgICAgYWRkTGlzdGVuZXIoY2FsbE9uQWRkLCBlbGVtZW50LCBsaXN0ZW5lcik7XG4gICAgICAgICAgICBlbGVtZW50c1JlYWR5Kys7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmKGVsZW1lbnRzUmVhZHkgPT09IGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgb25SZWFkeUNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmluc3RhbGwoZWxlbWVudHMpIHtcbiAgICAgICAgaWYoIWVsZW1lbnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb3J0ZXIuZXJyb3IoXCJBdCBsZWFzdCBvbmUgZWxlbWVudCBpcyByZXF1aXJlZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaXNFbGVtZW50KGVsZW1lbnRzKSkge1xuICAgICAgICAgICAgLy8gQSBzaW5nbGUgZWxlbWVudCBoYXMgYmVlbiBwYXNzZWQgaW4uXG4gICAgICAgICAgICBlbGVtZW50cyA9IFtlbGVtZW50c107XG4gICAgICAgIH0gZWxzZSBpZiAoaXNDb2xsZWN0aW9uKGVsZW1lbnRzKSkge1xuICAgICAgICAgICAgLy8gQ29udmVydCBjb2xsZWN0aW9uIHRvIGFycmF5IGZvciBwbHVnaW5zLlxuICAgICAgICAgICAgLy8gVE9ETzogTWF5IHdhbnQgdG8gY2hlY2sgc28gdGhhdCBhbGwgdGhlIGVsZW1lbnRzIGluIHRoZSBjb2xsZWN0aW9uIGFyZSB2YWxpZCBlbGVtZW50cy5cbiAgICAgICAgICAgIGVsZW1lbnRzID0gdG9BcnJheShlbGVtZW50cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb3J0ZXIuZXJyb3IoXCJJbnZhbGlkIGFyZ3VtZW50cy4gTXVzdCBiZSBhIERPTSBlbGVtZW50IG9yIGEgY29sbGVjdGlvbiBvZiBET00gZWxlbWVudHMuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yRWFjaChlbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJIYW5kbGVyLnJlbW92ZUFsbExpc3RlbmVycyhlbGVtZW50KTtcbiAgICAgICAgICAgIGRldGVjdGlvblN0cmF0ZWd5LnVuaW5zdGFsbChlbGVtZW50KTtcbiAgICAgICAgICAgIHN0YXRlSGFuZGxlci5jbGVhblN0YXRlKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBsaXN0ZW5UbzogbGlzdGVuVG8sXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyOiBldmVudExpc3RlbmVySGFuZGxlci5yZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgcmVtb3ZlQWxsTGlzdGVuZXJzOiBldmVudExpc3RlbmVySGFuZGxlci5yZW1vdmVBbGxMaXN0ZW5lcnMsXG4gICAgICAgIHVuaW5zdGFsbDogdW5pbnN0YWxsXG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldE9wdGlvbihvcHRpb25zLCBuYW1lLCBkZWZhdWx0VmFsdWUpIHtcbiAgICB2YXIgdmFsdWUgPSBvcHRpb25zW25hbWVdO1xuXG4gICAgaWYoKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpICYmIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBnZXRTdGF0ZSA9IG9wdGlvbnMuc3RhdGVIYW5kbGVyLmdldFN0YXRlO1xuXG4gICAgLyoqXG4gICAgICogVGVsbHMgaWYgdGhlIGVsZW1lbnQgaGFzIGJlZW4gbWFkZSBkZXRlY3RhYmxlIGFuZCByZWFkeSB0byBiZSBsaXN0ZW5lZCBmb3IgcmVzaXplIGV2ZW50cy5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBUaGUgZWxlbWVudCB0byBjaGVjay5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBvciBmYWxzZSBkZXBlbmRpbmcgb24gaWYgdGhlIGVsZW1lbnQgaXMgZGV0ZWN0YWJsZSBvciBub3QuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNEZXRlY3RhYmxlKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBzdGF0ZSAmJiAhIXN0YXRlLmlzRGV0ZWN0YWJsZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXJrcyB0aGUgZWxlbWVudCB0aGF0IGl0IGhhcyBiZWVuIG1hZGUgZGV0ZWN0YWJsZSBhbmQgcmVhZHkgdG8gYmUgbGlzdGVuZWQgZm9yIHJlc2l6ZSBldmVudHMuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gVGhlIGVsZW1lbnQgdG8gbWFyay5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtYXJrQXNEZXRlY3RhYmxlKGVsZW1lbnQpIHtcbiAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkuaXNEZXRlY3RhYmxlID0gdHJ1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUZWxscyBpZiB0aGUgZWxlbWVudCBpcyBidXN5IG9yIG5vdC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBUaGUgZWxlbWVudCB0byBjaGVjay5cbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn0gVHJ1ZSBvciBmYWxzZSBkZXBlbmRpbmcgb24gaWYgdGhlIGVsZW1lbnQgaXMgYnVzeSBvciBub3QuXG4gICAgICovXG4gICAgZnVuY3Rpb24gaXNCdXN5KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0U3RhdGUoZWxlbWVudCkuYnVzeTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYXJrcyB0aGUgb2JqZWN0IGlzIGJ1c3kgYW5kIHNob3VsZCBub3QgYmUgbWFkZSBkZXRlY3RhYmxlLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gbWFyay5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGJ1c3kgSWYgdGhlIGVsZW1lbnQgaXMgYnVzeSBvciBub3QuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWFya0J1c3koZWxlbWVudCwgYnVzeSkge1xuICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5idXN5ID0gISFidXN5O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGlzRGV0ZWN0YWJsZTogaXNEZXRlY3RhYmxlLFxuICAgICAgICBtYXJrQXNEZXRlY3RhYmxlOiBtYXJrQXNEZXRlY3RhYmxlLFxuICAgICAgICBpc0J1c3k6IGlzQnVzeSxcbiAgICAgICAgbWFya0J1c3k6IG1hcmtCdXN5XG4gICAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvZWxlbWVudC11dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlkSGFuZGxlcikge1xuICAgIHZhciBldmVudExpc3RlbmVycyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyBhbGwgbGlzdGVuZXJzIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIGdldCBhbGwgbGlzdGVuZXJzIGZvci5cbiAgICAgKiBAcmV0dXJucyBBbGwgbGlzdGVuZXJzIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRMaXN0ZW5lcnMoZWxlbWVudCkge1xuICAgICAgICB2YXIgaWQgPSBpZEhhbmRsZXIuZ2V0KGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChpZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZXZlbnRMaXN0ZW5lcnNbaWRdIHx8IFtdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFN0b3JlcyB0aGUgZ2l2ZW4gbGlzdGVuZXIgZm9yIHRoZSBnaXZlbiBlbGVtZW50LiBXaWxsIG5vdCBhY3R1YWxseSBhZGQgdGhlIGxpc3RlbmVyIHRvIHRoZSBlbGVtZW50LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgaGF2ZSB0aGUgbGlzdGVuZXIgYWRkZWQuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGNhbGxiYWNrIHRoYXQgdGhlIGVsZW1lbnQgaGFzIGFkZGVkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKGVsZW1lbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBpZCA9IGlkSGFuZGxlci5nZXQoZWxlbWVudCk7XG5cbiAgICAgICAgaWYoIWV2ZW50TGlzdGVuZXJzW2lkXSkge1xuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lcnNbaWRdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBldmVudExpc3RlbmVyc1tpZF0ucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIoZWxlbWVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IGdldExpc3RlbmVycyhlbGVtZW50KTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxpc3RlbmVycy5sZW5ndGg7IGkgPCBsZW47ICsraSkge1xuICAgICAgICAgICAgaWYgKGxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgbGlzdGVuZXJzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnMoZWxlbWVudCkge1xuICAgICAgdmFyIGxpc3RlbmVycyA9IGdldExpc3RlbmVycyhlbGVtZW50KTtcbiAgICAgIGlmICghbGlzdGVuZXJzKSB7IHJldHVybjsgfVxuICAgICAgbGlzdGVuZXJzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiBnZXRMaXN0ZW5lcnMsXG4gICAgICAgIGFkZDogYWRkTGlzdGVuZXIsXG4gICAgICAgIHJlbW92ZUxpc3RlbmVyOiByZW1vdmVMaXN0ZW5lcixcbiAgICAgICAgcmVtb3ZlQWxsTGlzdGVuZXJzOiByZW1vdmVBbGxMaXN0ZW5lcnNcbiAgICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9saXN0ZW5lci1oYW5kbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkQ291bnQgPSAxO1xuXG4gICAgLyoqXG4gICAgICogR2VuZXJhdGVzIGEgbmV3IHVuaXF1ZSBpZCBpbiB0aGUgY29udGV4dC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHJldHVybnMge251bWJlcn0gQSB1bmlxdWUgaWQgaW4gdGhlIGNvbnRleHQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2VuZXJhdGUoKSB7XG4gICAgICAgIHJldHVybiBpZENvdW50Kys7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2VuZXJhdGU6IGdlbmVyYXRlXG4gICAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvaWQtZ2VuZXJhdG9yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIHZhciBpZEdlbmVyYXRvciAgICAgPSBvcHRpb25zLmlkR2VuZXJhdG9yO1xuICAgIHZhciBnZXRTdGF0ZSAgICAgICAgPSBvcHRpb25zLnN0YXRlSGFuZGxlci5nZXRTdGF0ZTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIHJlc2l6ZSBkZXRlY3RvciBpZCBvZiB0aGUgZWxlbWVudC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSB0YXJnZXQgZWxlbWVudCB0byBnZXQgdGhlIGlkIG9mLlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVtYmVyfG51bGx9IFRoZSBpZCBvZiB0aGUgZWxlbWVudC4gTnVsbCBpZiBpdCBoYXMgbm8gaWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0SWQoZWxlbWVudCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZShlbGVtZW50KTtcblxuICAgICAgICBpZiAoc3RhdGUgJiYgc3RhdGUuaWQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIHN0YXRlLmlkO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcmVzaXplIGRldGVjdG9yIGlkIG9mIHRoZSBlbGVtZW50LiBSZXF1aXJlcyB0aGUgZWxlbWVudCB0byBoYXZlIGEgcmVzaXplIGRldGVjdG9yIHN0YXRlIGluaXRpYWxpemVkLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIHRhcmdldCBlbGVtZW50IHRvIHNldCB0aGUgaWQgb2YuXG4gICAgICogQHJldHVybnMge3N0cmluZ3xudW1iZXJ8bnVsbH0gVGhlIGlkIG9mIHRoZSBlbGVtZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIHNldElkKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKCFzdGF0ZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwic2V0SWQgcmVxdWlyZWQgdGhlIGVsZW1lbnQgdG8gaGF2ZSBhIHJlc2l6ZSBkZXRlY3Rpb24gc3RhdGUuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGlkID0gaWRHZW5lcmF0b3IuZ2VuZXJhdGUoKTtcblxuICAgICAgICBzdGF0ZS5pZCA9IGlkO1xuXG4gICAgICAgIHJldHVybiBpZDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6IGdldElkLFxuICAgICAgICBzZXQ6IHNldElkXG4gICAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvaWQtaGFuZGxlci5qc1xuLy8gbW9kdWxlIGlkID0gMTIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBnbG9iYWwgY29uc29sZTogZmFsc2UgKi9cblxuLyoqXG4gKiBSZXBvcnRlciB0aGF0IGhhbmRsZXMgdGhlIHJlcG9ydGluZyBvZiBsb2dzLCB3YXJuaW5ncyBhbmQgZXJyb3JzLlxuICogQHB1YmxpY1xuICogQHBhcmFtIHtib29sZWFufSBxdWlldCBUZWxscyBpZiB0aGUgcmVwb3J0ZXIgc2hvdWxkIGJlIHF1aWV0IG9yIG5vdC5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihxdWlldCkge1xuICAgIGZ1bmN0aW9uIG5vb3AoKSB7XG4gICAgICAgIC8vRG9lcyBub3RoaW5nLlxuICAgIH1cblxuICAgIHZhciByZXBvcnRlciA9IHtcbiAgICAgICAgbG9nOiBub29wLFxuICAgICAgICB3YXJuOiBub29wLFxuICAgICAgICBlcnJvcjogbm9vcFxuICAgIH07XG5cbiAgICBpZighcXVpZXQgJiYgd2luZG93LmNvbnNvbGUpIHtcbiAgICAgICAgdmFyIGF0dGFjaEZ1bmN0aW9uID0gZnVuY3Rpb24ocmVwb3J0ZXIsIG5hbWUpIHtcbiAgICAgICAgICAgIC8vVGhlIHByb3h5IGlzIG5lZWRlZCB0byBiZSBhYmxlIHRvIGNhbGwgdGhlIG1ldGhvZCB3aXRoIHRoZSBjb25zb2xlIGNvbnRleHQsXG4gICAgICAgICAgICAvL3NpbmNlIHdlIGNhbm5vdCB1c2UgYmluZC5cbiAgICAgICAgICAgIHJlcG9ydGVyW25hbWVdID0gZnVuY3Rpb24gcmVwb3J0ZXJQcm94eSgpIHtcbiAgICAgICAgICAgICAgICB2YXIgZiA9IGNvbnNvbGVbbmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKGYuYXBwbHkpIHsgLy9JRTkgZG9lcyBub3Qgc3VwcG9ydCBjb25zb2xlLmxvZy5hcHBseSA6KVxuICAgICAgICAgICAgICAgICAgICBmLmFwcGx5KGNvbnNvbGUsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYoYXJndW1lbnRzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgYXR0YWNoRnVuY3Rpb24ocmVwb3J0ZXIsIFwibG9nXCIpO1xuICAgICAgICBhdHRhY2hGdW5jdGlvbihyZXBvcnRlciwgXCJ3YXJuXCIpO1xuICAgICAgICBhdHRhY2hGdW5jdGlvbihyZXBvcnRlciwgXCJlcnJvclwiKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVwb3J0ZXI7XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9yZXBvcnRlci5qc1xuLy8gbW9kdWxlIGlkID0gMTIwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSByZXF1aXJlKFwiLi91dGlsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBiYXRjaFByb2Nlc3Nvck1ha2VyKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zICAgICAgICAgICAgID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcmVwb3J0ZXIgICAgICAgID0gb3B0aW9ucy5yZXBvcnRlcjtcbiAgICB2YXIgYXN5bmNQcm9jZXNzICAgID0gdXRpbHMuZ2V0T3B0aW9uKG9wdGlvbnMsIFwiYXN5bmNcIiwgdHJ1ZSk7XG4gICAgdmFyIGF1dG9Qcm9jZXNzICAgICA9IHV0aWxzLmdldE9wdGlvbihvcHRpb25zLCBcImF1dG9cIiwgdHJ1ZSk7XG5cbiAgICBpZihhdXRvUHJvY2VzcyAmJiAhYXN5bmNQcm9jZXNzKSB7XG4gICAgICAgIHJlcG9ydGVyICYmIHJlcG9ydGVyLndhcm4oXCJJbnZhbGlkIG9wdGlvbnMgY29tYmluYXRpb24uIGF1dG89dHJ1ZSBhbmQgYXN5bmM9ZmFsc2UgaXMgaW52YWxpZC4gU2V0dGluZyBhc3luYz10cnVlLlwiKTtcbiAgICAgICAgYXN5bmNQcm9jZXNzID0gdHJ1ZTtcbiAgICB9XG5cbiAgICB2YXIgYmF0Y2ggPSBCYXRjaCgpO1xuICAgIHZhciBhc3luY0ZyYW1lSGFuZGxlcjtcbiAgICB2YXIgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG5cbiAgICBmdW5jdGlvbiBhZGRGdW5jdGlvbihsZXZlbCwgZm4pIHtcbiAgICAgICAgaWYoIWlzUHJvY2Vzc2luZyAmJiBhdXRvUHJvY2VzcyAmJiBhc3luY1Byb2Nlc3MgJiYgYmF0Y2guc2l6ZSgpID09PSAwKSB7XG4gICAgICAgICAgICAvLyBTaW5jZSB0aGlzIGlzIGFzeW5jLCBpdCBpcyBndWFyYW50ZWVkIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIHRoYXQgdGhlIGZuIGlzIGFkZGVkIHRvIHRoZSBiYXRjaC5cbiAgICAgICAgICAgIC8vIFRoaXMgbmVlZHMgdG8gYmUgZG9uZSBiZWZvcmUsIHNpbmNlIHdlJ3JlIGNoZWNraW5nIHRoZSBzaXplIG9mIHRoZSBiYXRjaCB0byBiZSAwLlxuICAgICAgICAgICAgcHJvY2Vzc0JhdGNoQXN5bmMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhdGNoLmFkZChsZXZlbCwgZm4pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NCYXRjaCgpIHtcbiAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudCBiYXRjaCwgYW5kIGNyZWF0ZSBhIG5ldyBiYXRjaCBzbyB0aGF0IGluY29taW5nIGZ1bmN0aW9ucyBhcmUgbm90IGFkZGVkIGludG8gdGhlIGN1cnJlbnRseSBwcm9jZXNzaW5nIGJhdGNoLlxuICAgICAgICAvLyBDb250aW51ZSBwcm9jZXNzaW5nIHVudGlsIHRoZSB0b3AtbGV2ZWwgYmF0Y2ggaXMgZW1wdHkgKGZ1bmN0aW9ucyBtYXkgYmUgYWRkZWQgdG8gdGhlIG5ldyBiYXRjaCB3aGlsZSBwcm9jZXNzaW5nLCBhbmQgc28gb24pLlxuICAgICAgICBpc1Byb2Nlc3NpbmcgPSB0cnVlO1xuICAgICAgICB3aGlsZSAoYmF0Y2guc2l6ZSgpKSB7XG4gICAgICAgICAgICB2YXIgcHJvY2Vzc2luZ0JhdGNoID0gYmF0Y2g7XG4gICAgICAgICAgICBiYXRjaCA9IEJhdGNoKCk7XG4gICAgICAgICAgICBwcm9jZXNzaW5nQmF0Y2gucHJvY2VzcygpO1xuICAgICAgICB9XG4gICAgICAgIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGZvcmNlUHJvY2Vzc0JhdGNoKGxvY2FsQXN5bmNQcm9jZXNzKSB7XG4gICAgICAgIGlmIChpc1Byb2Nlc3NpbmcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGxvY2FsQXN5bmNQcm9jZXNzID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGxvY2FsQXN5bmNQcm9jZXNzID0gYXN5bmNQcm9jZXNzO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoYXN5bmNGcmFtZUhhbmRsZXIpIHtcbiAgICAgICAgICAgIGNhbmNlbEZyYW1lKGFzeW5jRnJhbWVIYW5kbGVyKTtcbiAgICAgICAgICAgIGFzeW5jRnJhbWVIYW5kbGVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGxvY2FsQXN5bmNQcm9jZXNzKSB7XG4gICAgICAgICAgICBwcm9jZXNzQmF0Y2hBc3luYygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcHJvY2Vzc0JhdGNoKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQmF0Y2hBc3luYygpIHtcbiAgICAgICAgYXN5bmNGcmFtZUhhbmRsZXIgPSByZXF1ZXN0RnJhbWUocHJvY2Vzc0JhdGNoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjbGVhckJhdGNoKCkge1xuICAgICAgICBiYXRjaCAgICAgICAgICAgPSB7fTtcbiAgICAgICAgYmF0Y2hTaXplICAgICAgID0gMDtcbiAgICAgICAgdG9wTGV2ZWwgICAgICAgID0gMDtcbiAgICAgICAgYm90dG9tTGV2ZWwgICAgID0gMDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBjYW5jZWxGcmFtZShsaXN0ZW5lcikge1xuICAgICAgICAvLyB2YXIgY2FuY2VsID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LmNsZWFyVGltZW91dDtcbiAgICAgICAgdmFyIGNhbmNlbCA9IGNsZWFyVGltZW91dDtcbiAgICAgICAgcmV0dXJuIGNhbmNlbChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVxdWVzdEZyYW1lKGNhbGxiYWNrKSB7XG4gICAgICAgIC8vIHZhciByYWYgPSB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCBmdW5jdGlvbihmbikgeyByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoZm4sIDIwKTsgfTtcbiAgICAgICAgdmFyIHJhZiA9IGZ1bmN0aW9uKGZuKSB7IHJldHVybiBzZXRUaW1lb3V0KGZuLCAwKTsgfTtcbiAgICAgICAgcmV0dXJuIHJhZihjYWxsYmFjayk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkOiBhZGRGdW5jdGlvbixcbiAgICAgICAgZm9yY2U6IGZvcmNlUHJvY2Vzc0JhdGNoXG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIEJhdGNoKCkge1xuICAgIHZhciBiYXRjaCAgICAgICA9IHt9O1xuICAgIHZhciBzaXplICAgICAgICA9IDA7XG4gICAgdmFyIHRvcExldmVsICAgID0gMDtcbiAgICB2YXIgYm90dG9tTGV2ZWwgPSAwO1xuXG4gICAgZnVuY3Rpb24gYWRkKGxldmVsLCBmbikge1xuICAgICAgICBpZighZm4pIHtcbiAgICAgICAgICAgIGZuID0gbGV2ZWw7XG4gICAgICAgICAgICBsZXZlbCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZihsZXZlbCA+IHRvcExldmVsKSB7XG4gICAgICAgICAgICB0b3BMZXZlbCA9IGxldmVsO1xuICAgICAgICB9IGVsc2UgaWYobGV2ZWwgPCBib3R0b21MZXZlbCkge1xuICAgICAgICAgICAgYm90dG9tTGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFiYXRjaFtsZXZlbF0pIHtcbiAgICAgICAgICAgIGJhdGNoW2xldmVsXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgYmF0Y2hbbGV2ZWxdLnB1c2goZm4pO1xuICAgICAgICBzaXplKys7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2VzcygpIHtcbiAgICAgICAgZm9yKHZhciBsZXZlbCA9IGJvdHRvbUxldmVsOyBsZXZlbCA8PSB0b3BMZXZlbDsgbGV2ZWwrKykge1xuICAgICAgICAgICAgdmFyIGZucyA9IGJhdGNoW2xldmVsXTtcblxuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IGZucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBmbiA9IGZuc1tpXTtcbiAgICAgICAgICAgICAgICBmbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHNpemU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgYWRkOiBhZGQsXG4gICAgICAgIHByb2Nlc3M6IHByb2Nlc3MsXG4gICAgICAgIHNpemU6IGdldFNpemVcbiAgICB9O1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmF0Y2gtcHJvY2Vzc29yL3NyYy9iYXRjaC1wcm9jZXNzb3IuanNcbi8vIG1vZHVsZSBpZCA9IDEyMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxudXRpbHMuZ2V0T3B0aW9uID0gZ2V0T3B0aW9uO1xuXG5mdW5jdGlvbiBnZXRPcHRpb24ob3B0aW9ucywgbmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgdmFyIHZhbHVlID0gb3B0aW9uc1tuYW1lXTtcblxuICAgIGlmKCh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSAmJiBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhdGNoLXByb2Nlc3Nvci9zcmMvdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDEyMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHByb3AgPSBcIl9lcmRcIjtcblxuZnVuY3Rpb24gaW5pdFN0YXRlKGVsZW1lbnQpIHtcbiAgICBlbGVtZW50W3Byb3BdID0ge307XG4gICAgcmV0dXJuIGdldFN0YXRlKGVsZW1lbnQpO1xufVxuXG5mdW5jdGlvbiBnZXRTdGF0ZShlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnRbcHJvcF07XG59XG5cbmZ1bmN0aW9uIGNsZWFuU3RhdGUoZWxlbWVudCkge1xuICAgIGRlbGV0ZSBlbGVtZW50W3Byb3BdO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBpbml0U3RhdGU6IGluaXRTdGF0ZSxcbiAgICBnZXRTdGF0ZTogZ2V0U3RhdGUsXG4gICAgY2xlYW5TdGF0ZTogY2xlYW5TdGF0ZVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9zdGF0ZS1oYW5kbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiLyoqXG4gKiBSZXNpemUgZGV0ZWN0aW9uIHN0cmF0ZWd5IHRoYXQgaW5qZWN0cyBvYmplY3RzIHRvIGVsZW1lbnRzIGluIG9yZGVyIHRvIGRldGVjdCByZXNpemUgZXZlbnRzLlxuICogSGVhdmlseSBpbnNwaXJlZCBieTogaHR0cDovL3d3dy5iYWNrYWxsZXljb2Rlci5jb20vMjAxMy8wMy8xOC9jcm9zcy1icm93c2VyLWV2ZW50LWJhc2VkLWVsZW1lbnQtcmVzaXplLWRldGVjdGlvbi9cbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGJyb3dzZXJEZXRlY3RvciA9IHJlcXVpcmUoXCIuLi9icm93c2VyLWRldGVjdG9yXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zICAgICAgICAgICAgID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcmVwb3J0ZXIgICAgICAgID0gb3B0aW9ucy5yZXBvcnRlcjtcbiAgICB2YXIgYmF0Y2hQcm9jZXNzb3IgID0gb3B0aW9ucy5iYXRjaFByb2Nlc3NvcjtcbiAgICB2YXIgZ2V0U3RhdGUgICAgICAgID0gb3B0aW9ucy5zdGF0ZUhhbmRsZXIuZ2V0U3RhdGU7XG5cbiAgICBpZighcmVwb3J0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyByZXF1aXJlZCBkZXBlbmRlbmN5OiByZXBvcnRlci5cIik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHJlc2l6ZSBldmVudCBsaXN0ZW5lciB0byB0aGUgZWxlbWVudC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGhhdmUgdGhlIGxpc3RlbmVyIGFkZGVkLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciBjYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggcmVzaXplIGV2ZW50IG9mIHRoZSBlbGVtZW50LiBUaGUgZWxlbWVudCB3aWxsIGJlIGdpdmVuIGFzIGEgcGFyYW1ldGVyIHRvIHRoZSBsaXN0ZW5lciBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcihlbGVtZW50LCBsaXN0ZW5lcikge1xuICAgICAgICBpZighZ2V0T2JqZWN0KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbGVtZW50IGlzIG5vdCBkZXRlY3RhYmxlIGJ5IHRoaXMgc3RyYXRlZ3kuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gbGlzdGVuZXJQcm94eSgpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoYnJvd3NlckRldGVjdG9yLmlzSUUoOCkpIHtcbiAgICAgICAgICAgIC8vSUUgOCBkb2VzIG5vdCBzdXBwb3J0IG9iamVjdCwgYnV0IHN1cHBvcnRzIHRoZSByZXNpemUgZXZlbnQgZGlyZWN0bHkgb24gZWxlbWVudHMuXG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vYmplY3QgPSB7XG4gICAgICAgICAgICAgICAgcHJveHk6IGxpc3RlbmVyUHJveHlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBlbGVtZW50LmF0dGFjaEV2ZW50KFwib25yZXNpemVcIiwgbGlzdGVuZXJQcm94eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb2JqZWN0ID0gZ2V0T2JqZWN0KGVsZW1lbnQpO1xuICAgICAgICAgICAgb2JqZWN0LmNvbnRlbnREb2N1bWVudC5kZWZhdWx0Vmlldy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGxpc3RlbmVyUHJveHkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgYW4gZWxlbWVudCBkZXRlY3RhYmxlIGFuZCByZWFkeSB0byBiZSBsaXN0ZW5lZCBmb3IgcmVzaXplIGV2ZW50cy4gV2lsbCBjYWxsIHRoZSBjYWxsYmFjayB3aGVuIHRoZSBlbGVtZW50IGlzIHJlYWR5IHRvIGJlIGxpc3RlbmVkIGZvciByZXNpemUgY2hhbmdlcy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBtYWtlIGRldGVjdGFibGVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVhZHkgdG8gYmUgbGlzdGVuZWQgZm9yIHJlc2l6ZSBjaGFuZ2VzLiBXaWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBlbGVtZW50IGFzIGZpcnN0IHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtYWtlRGV0ZWN0YWJsZShvcHRpb25zLCBlbGVtZW50LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBlbGVtZW50ID0gb3B0aW9ucztcbiAgICAgICAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gICAgICAgIHZhciBkZWJ1ZyA9IG9wdGlvbnMuZGVidWc7XG5cbiAgICAgICAgZnVuY3Rpb24gaW5qZWN0T2JqZWN0KGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgT0JKRUNUX1NUWUxFID0gXCJkaXNwbGF5OiBibG9jazsgcG9zaXRpb246IGFic29sdXRlOyB0b3A6IDA7IGxlZnQ6IDA7IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGJvcmRlcjogbm9uZTsgcGFkZGluZzogMDsgbWFyZ2luOiAwOyBvcGFjaXR5OiAwOyB6LWluZGV4OiAtMTAwMDsgcG9pbnRlci1ldmVudHM6IG5vbmU7XCI7XG5cbiAgICAgICAgICAgIC8vVGhlIHRhcmdldCBlbGVtZW50IG5lZWRzIHRvIGJlIHBvc2l0aW9uZWQgKGV2ZXJ5dGhpbmcgZXhjZXB0IHN0YXRpYykgc28gdGhlIGFic29sdXRlIHBvc2l0aW9uZWQgb2JqZWN0IHdpbGwgYmUgcG9zaXRpb25lZCByZWxhdGl2ZSB0byB0aGUgdGFyZ2V0IGVsZW1lbnQuXG5cbiAgICAgICAgICAgIC8vIFBvc2l0aW9uIGFsdGVyaW5nIG1heSBiZSBwZXJmb3JtZWQgZGlyZWN0bHkgb3Igb24gb2JqZWN0IGxvYWQsIGRlcGVuZGluZyBvbiBpZiBzdHlsZSByZXNvbHV0aW9uIGlzIHBvc3NpYmxlIGRpcmVjdGx5IG9yIG5vdC5cbiAgICAgICAgICAgIHZhciBwb3NpdGlvbkNoZWNrUGVyZm9ybWVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBub3QgeWV0IGJlIGF0dGFjaGVkIHRvIHRoZSBET00sIGFuZCB0aGVyZWZvcmUgdGhlIHN0eWxlIG9iamVjdCBtYXkgYmUgZW1wdHkgaW4gc29tZSBicm93c2Vycy5cbiAgICAgICAgICAgIC8vIFNpbmNlIHRoZSBzdHlsZSBvYmplY3QgaXMgYSByZWZlcmVuY2UsIGl0IHdpbGwgYmUgdXBkYXRlZCBhcyBzb29uIGFzIHRoZSBlbGVtZW50IGlzIGF0dGFjaGVkIHRvIHRoZSBET00uXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICAgICAgICAgIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLnN0YXJ0U2l6ZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogd2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG11dGF0ZURvbSgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBhbHRlclBvc2l0aW9uU3R5bGVzKCkge1xuICAgICAgICAgICAgICAgICAgICBpZihzdHlsZS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZVJlbGF0aXZlU3R5bGVzID0gZnVuY3Rpb24ocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldE51bWVyaWNhbFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bXi1cXGRcXC5dL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BlcnR5XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlICE9PSBcImF1dG9cIiAmJiBnZXROdW1lcmljYWxWYWx1ZSh2YWx1ZSkgIT09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydGVyLndhcm4oXCJBbiBlbGVtZW50IHRoYXQgaXMgcG9zaXRpb25lZCBzdGF0aWMgaGFzIHN0eWxlLlwiICsgcHJvcGVydHkgKyBcIj1cIiArIHZhbHVlICsgXCIgd2hpY2ggaXMgaWdub3JlZCBkdWUgdG8gdGhlIHN0YXRpYyBwb3NpdGlvbmluZy4gVGhlIGVsZW1lbnQgd2lsbCBuZWVkIHRvIGJlIHBvc2l0aW9uZWQgcmVsYXRpdmUsIHNvIHRoZSBzdHlsZS5cIiArIHByb3BlcnR5ICsgXCIgd2lsbCBiZSBzZXQgdG8gMC4gRWxlbWVudDogXCIsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBzbyB0aGF0IHRoZXJlIGFyZSBubyBhY2NpZGVudGFsIHN0eWxlcyB0aGF0IHdpbGwgbWFrZSB0aGUgZWxlbWVudCBzdHlsZWQgZGlmZmVyZW50bHkgbm93IHRoYXQgaXMgaXMgcmVsYXRpdmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0lmIHRoZXJlIGFyZSBhbnksIHNldCB0aGVtIHRvIDAgKHRoaXMgc2hvdWxkIGJlIG9rYXkgd2l0aCB0aGUgdXNlciBzaW5jZSB0aGUgc3R5bGUgcHJvcGVydGllcyBkaWQgbm90aGluZyBiZWZvcmUgW3NpbmNlIHRoZSBlbGVtZW50IHdhcyBwb3NpdGlvbmVkIHN0YXRpY10gYW55d2F5KS5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlbGF0aXZlU3R5bGVzKHJlcG9ydGVyLCBlbGVtZW50LCBzdHlsZSwgXCJ0b3BcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVSZWxhdGl2ZVN0eWxlcyhyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVSZWxhdGl2ZVN0eWxlcyhyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIFwiYm90dG9tXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVsYXRpdmVTdHlsZXMocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBcImxlZnRcIik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBvbk9iamVjdExvYWQoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIFRoZSBvYmplY3QgaGFzIGJlZW4gbG9hZGVkLCB3aGljaCBtZWFucyB0aGF0IHRoZSBlbGVtZW50IG5vdyBpcyBndWFyYW50ZWVkIHRvIGJlIGF0dGFjaGVkIHRvIHRoZSBET00uXG4gICAgICAgICAgICAgICAgICAgIGlmICghcG9zaXRpb25DaGVja1BlcmZvcm1lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYWx0ZXJQb3NpdGlvblN0eWxlcygpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLypqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG5cbiAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0RG9jdW1lbnQoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vT3BlcmEgMTIgc2VlbSB0byBjYWxsIHRoZSBvYmplY3Qub25sb2FkIGJlZm9yZSB0aGUgYWN0dWFsIGRvY3VtZW50IGhhcyBiZWVuIGNyZWF0ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1NvIGlmIGl0IGlzIG5vdCBwcmVzZW50LCBwb2xsIGl0IHdpdGggYW4gdGltZW91dCB1bnRpbCBpdCBpcyBwcmVzZW50LlxuICAgICAgICAgICAgICAgICAgICAgICAgLy9UT0RPOiBDb3VsZCBtYXliZSBiZSBoYW5kbGVkIGJldHRlciB3aXRoIG9iamVjdC5vbnJlYWR5c3RhdGVjaGFuZ2Ugb3Igc2ltaWxhci5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKCFlbGVtZW50LmNvbnRlbnREb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gY2hlY2tGb3JPYmplY3REb2N1bWVudCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0RG9jdW1lbnQoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQuY29udGVudERvY3VtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8vTXV0YXRpbmcgdGhlIG9iamVjdCBlbGVtZW50IGhlcmUgc2VlbXMgdG8gZmlyZSBhbm90aGVyIGxvYWQgZXZlbnQuXG4gICAgICAgICAgICAgICAgICAgIC8vTXV0YXRpbmcgdGhlIGlubmVyIGRvY3VtZW50IG9mIHRoZSBvYmplY3QgZWxlbWVudCBpcyBmaW5lIHRob3VnaC5cbiAgICAgICAgICAgICAgICAgICAgdmFyIG9iamVjdEVsZW1lbnQgPSB0aGlzO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vQ3JlYXRlIHRoZSBzdHlsZSBlbGVtZW50IHRvIGJlIGFkZGVkIHRvIHRoZSBvYmplY3QuXG4gICAgICAgICAgICAgICAgICAgIGdldERvY3VtZW50KG9iamVjdEVsZW1lbnQsIGZ1bmN0aW9uIG9uT2JqZWN0RG9jdW1lbnRSZWFkeShvYmplY3REb2N1bWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9Ob3RpZnkgdGhhdCB0aGUgZWxlbWVudCBpcyByZWFkeSB0byBiZSBsaXN0ZW5lZCB0by5cbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBtYXkgYmUgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLCBhbmQgc29tZSBicm93c2VycyBkb2VzIG5vdCBzdXBwb3J0IHN0eWxlIHJlc29sdmluZyBvZiBkZXRhY2hlZCBlbGVtZW50cy5cbiAgICAgICAgICAgICAgICAvLyBUaGUgYWx0ZXJQb3NpdGlvblN0eWxlcyBuZWVkcyB0byBiZSBkZWxheWVkIHVudGlsIHdlIGtub3cgdGhlIGVsZW1lbnQgaGFzIGJlZW4gYXR0YWNoZWQgdG8gdGhlIERPTSAod2hpY2ggd2UgYXJlIHN1cmUgb2Ygd2hlbiB0aGUgb25PYmplY3RMb2FkIGhhcyBiZWVuIGZpcmVkKSwgaWYgc3R5bGUgcmVzb2x1dGlvbiBpcyBub3QgcG9zc2libGUuXG4gICAgICAgICAgICAgICAgaWYgKHN0eWxlLnBvc2l0aW9uICE9PSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGFsdGVyUG9zaXRpb25TdHlsZXMoc3R5bGUpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbkNoZWNrUGVyZm9ybWVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvL0FkZCBhbiBvYmplY3QgZWxlbWVudCBhcyBhIGNoaWxkIHRvIHRoZSB0YXJnZXQgZWxlbWVudCB0aGF0IHdpbGwgYmUgbGlzdGVuZWQgdG8gZm9yIHJlc2l6ZSBldmVudHMuXG4gICAgICAgICAgICAgICAgdmFyIG9iamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvYmplY3RcIik7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnN0eWxlLmNzc1RleHQgPSBPQkpFQ1RfU1RZTEU7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnRhYkluZGV4ID0gLTE7XG4gICAgICAgICAgICAgICAgb2JqZWN0LnR5cGUgPSBcInRleHQvaHRtbFwiO1xuICAgICAgICAgICAgICAgIG9iamVjdC5vbmxvYWQgPSBvbk9iamVjdExvYWQ7XG5cbiAgICAgICAgICAgICAgICAvL1NhZmFyaTogVGhpcyBtdXN0IG9jY3VyIGJlZm9yZSBhZGRpbmcgdGhlIG9iamVjdCB0byB0aGUgRE9NLlxuICAgICAgICAgICAgICAgIC8vSUU6IERvZXMgbm90IGxpa2UgdGhhdCB0aGlzIGhhcHBlbnMgYmVmb3JlLCBldmVuIGlmIGl0IGlzIGFsc28gYWRkZWQgYWZ0ZXIuXG4gICAgICAgICAgICAgICAgaWYoIWJyb3dzZXJEZXRlY3Rvci5pc0lFKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmRhdGEgPSBcImFib3V0OmJsYW5rXCI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChvYmplY3QpO1xuICAgICAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLm9iamVjdCA9IG9iamVjdDtcblxuICAgICAgICAgICAgICAgIC8vSUU6IFRoaXMgbXVzdCBvY2N1ciBhZnRlciBhZGRpbmcgdGhlIG9iamVjdCB0byB0aGUgRE9NLlxuICAgICAgICAgICAgICAgIGlmKGJyb3dzZXJEZXRlY3Rvci5pc0lFKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0LmRhdGEgPSBcImFib3V0OmJsYW5rXCI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihiYXRjaFByb2Nlc3Nvcikge1xuICAgICAgICAgICAgICAgIGJhdGNoUHJvY2Vzc29yLmFkZChtdXRhdGVEb20pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtdXRhdGVEb20oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGJyb3dzZXJEZXRlY3Rvci5pc0lFKDgpKSB7XG4gICAgICAgICAgICAvL0lFIDggZG9lcyBub3Qgc3VwcG9ydCBvYmplY3RzIHByb3Blcmx5LiBMdWNraWx5IHRoZXkgZG8gc3VwcG9ydCB0aGUgcmVzaXplIGV2ZW50LlxuICAgICAgICAgICAgLy9TbyBkbyBub3QgaW5qZWN0IHRoZSBvYmplY3QgYW5kIG5vdGlmeSB0aGF0IHRoZSBlbGVtZW50IGlzIGFscmVhZHkgcmVhZHkgdG8gYmUgbGlzdGVuZWQgdG8uXG4gICAgICAgICAgICAvL1RoZSBldmVudCBoYW5kbGVyIGZvciB0aGUgcmVzaXplIGV2ZW50IGlzIGF0dGFjaGVkIGluIHRoZSB1dGlscy5hZGRMaXN0ZW5lciBpbnN0ZWFkLlxuICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbmplY3RPYmplY3QoZWxlbWVudCwgY2FsbGJhY2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY2hpbGQgb2JqZWN0IG9mIHRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAgICogQHJldHVybnMgVGhlIG9iamVjdCBlbGVtZW50IG9mIHRoZSB0YXJnZXQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0T2JqZWN0KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGdldFN0YXRlKGVsZW1lbnQpLm9iamVjdDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmluc3RhbGwoZWxlbWVudCkge1xuICAgICAgICBpZihicm93c2VyRGV0ZWN0b3IuaXNJRSg4KSkge1xuICAgICAgICAgICAgZWxlbWVudC5kZXRhY2hFdmVudChcIm9ucmVzaXplXCIsIGdldFN0YXRlKGVsZW1lbnQpLm9iamVjdC5wcm94eSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUNoaWxkKGdldE9iamVjdChlbGVtZW50KSk7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIGdldFN0YXRlKGVsZW1lbnQpLm9iamVjdDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBtYWtlRGV0ZWN0YWJsZTogbWFrZURldGVjdGFibGUsXG4gICAgICAgIGFkZExpc3RlbmVyOiBhZGRMaXN0ZW5lcixcbiAgICAgICAgdW5pbnN0YWxsOiB1bmluc3RhbGxcbiAgICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9kZXRlY3Rpb24tc3RyYXRlZ3kvb2JqZWN0LmpzXG4vLyBtb2R1bGUgaWQgPSAxMjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiLyoqXG4gKiBSZXNpemUgZGV0ZWN0aW9uIHN0cmF0ZWd5IHRoYXQgaW5qZWN0cyBkaXZzIHRvIGVsZW1lbnRzIGluIG9yZGVyIHRvIGRldGVjdCByZXNpemUgZXZlbnRzIG9uIHNjcm9sbCBldmVudHMuXG4gKiBIZWF2aWx5IGluc3BpcmVkIGJ5OiBodHRwczovL2dpdGh1Yi5jb20vbWFyY2ovY3NzLWVsZW1lbnQtcXVlcmllcy9ibG9iL21hc3Rlci9zcmMvUmVzaXplU2Vuc29yLmpzXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBmb3JFYWNoID0gcmVxdWlyZShcIi4uL2NvbGxlY3Rpb24tdXRpbHNcIikuZm9yRWFjaDtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyAgICAgICAgICAgICA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHJlcG9ydGVyICAgICAgICA9IG9wdGlvbnMucmVwb3J0ZXI7XG4gICAgdmFyIGJhdGNoUHJvY2Vzc29yICA9IG9wdGlvbnMuYmF0Y2hQcm9jZXNzb3I7XG4gICAgdmFyIGdldFN0YXRlICAgICAgICA9IG9wdGlvbnMuc3RhdGVIYW5kbGVyLmdldFN0YXRlO1xuICAgIHZhciBoYXNTdGF0ZSAgICAgICAgPSBvcHRpb25zLnN0YXRlSGFuZGxlci5oYXNTdGF0ZTtcbiAgICB2YXIgaWRIYW5kbGVyICAgICAgID0gb3B0aW9ucy5pZEhhbmRsZXI7XG5cbiAgICBpZiAoIWJhdGNoUHJvY2Vzc29yKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgcmVxdWlyZWQgZGVwZW5kZW5jeTogYmF0Y2hQcm9jZXNzb3JcIik7XG4gICAgfVxuXG4gICAgaWYgKCFyZXBvcnRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHJlcXVpcmVkIGRlcGVuZGVuY3k6IHJlcG9ydGVyLlwiKTtcbiAgICB9XG5cbiAgICAvL1RPRE86IENvdWxkIHRoaXMgcGVyaGFwcyBiZSBkb25lIGF0IGluc3RhbGxhdGlvbiB0aW1lP1xuICAgIHZhciBzY3JvbGxiYXJTaXplcyA9IGdldFNjcm9sbGJhclNpemVzKCk7XG5cbiAgICAvLyBJbmplY3QgdGhlIHNjcm9sbGJhciBzdHlsaW5nIHRoYXQgcHJldmVudHMgdGhlbSBmcm9tIGFwcGVhcmluZyBzb21ldGltZXMgaW4gQ2hyb21lLlxuICAgIC8vIFRoZSBpbmplY3RlZCBjb250YWluZXIgbmVlZHMgdG8gaGF2ZSBhIGNsYXNzLCBzbyB0aGF0IGl0IG1heSBiZSBzdHlsZWQgd2l0aCBDU1MgKHBzZXVkbyBlbGVtZW50cykuXG4gICAgdmFyIHN0eWxlSWQgPSBcImVyZF9zY3JvbGxfZGV0ZWN0aW9uX3Njcm9sbGJhcl9zdHlsZVwiO1xuICAgIHZhciBkZXRlY3Rpb25Db250YWluZXJDbGFzcyA9IFwiZXJkX3Njcm9sbF9kZXRlY3Rpb25fY29udGFpbmVyXCI7XG4gICAgaW5qZWN0U2Nyb2xsU3R5bGUoc3R5bGVJZCwgZGV0ZWN0aW9uQ29udGFpbmVyQ2xhc3MpO1xuXG4gICAgZnVuY3Rpb24gZ2V0U2Nyb2xsYmFyU2l6ZXMoKSB7XG4gICAgICAgIHZhciB3aWR0aCA9IDUwMDtcbiAgICAgICAgdmFyIGhlaWdodCA9IDUwMDtcblxuICAgICAgICB2YXIgY2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjaGlsZC5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiBcIiArIHdpZHRoKjIgKyBcInB4OyBoZWlnaHQ6IFwiICsgaGVpZ2h0KjIgKyBcInB4OyB2aXNpYmlsaXR5OiBoaWRkZW47IG1hcmdpbjogMDsgcGFkZGluZzogMDtcIjtcblxuICAgICAgICB2YXIgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IFwiICsgd2lkdGggKyBcInB4OyBoZWlnaHQ6IFwiICsgaGVpZ2h0ICsgXCJweDsgb3ZlcmZsb3c6IHNjcm9sbDsgdmlzaWJpbGl0eTogbm9uZTsgdG9wOiBcIiArIC13aWR0aCozICsgXCJweDsgbGVmdDogXCIgKyAtaGVpZ2h0KjMgKyBcInB4OyB2aXNpYmlsaXR5OiBoaWRkZW47IG1hcmdpbjogMDsgcGFkZGluZzogMDtcIjtcblxuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2hpbGQpO1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGNvbnRhaW5lciwgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKTtcblxuICAgICAgICB2YXIgd2lkdGhTaXplID0gd2lkdGggLSBjb250YWluZXIuY2xpZW50V2lkdGg7XG4gICAgICAgIHZhciBoZWlnaHRTaXplID0gaGVpZ2h0IC0gY29udGFpbmVyLmNsaWVudEhlaWdodDtcblxuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHdpZHRoOiB3aWR0aFNpemUsXG4gICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFNpemVcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbmplY3RTY3JvbGxTdHlsZShzdHlsZUlkLCBjb250YWluZXJDbGFzcykge1xuICAgICAgICBmdW5jdGlvbiBpbmplY3RTdHlsZShzdHlsZSwgbWV0aG9kKSB7XG4gICAgICAgICAgICBtZXRob2QgPSBtZXRob2QgfHwgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICAgICAgICAgIHN0eWxlRWxlbWVudC5pbm5lckhUTUwgPSBzdHlsZTtcbiAgICAgICAgICAgIHN0eWxlRWxlbWVudC5pZCA9IHN0eWxlSWQ7XG4gICAgICAgICAgICBtZXRob2Qoc3R5bGVFbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZUVsZW1lbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHN0eWxlSWQpKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyQW5pbWF0aW9uQ2xhc3MgPSBjb250YWluZXJDbGFzcyArIFwiX2FuaW1hdGlvblwiO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lckFuaW1hdGlvbkFjdGl2ZUNsYXNzID0gY29udGFpbmVyQ2xhc3MgKyBcIl9hbmltYXRpb25fYWN0aXZlXCI7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBcIi8qIENyZWF0ZWQgYnkgdGhlIGVsZW1lbnQtcmVzaXplLWRldGVjdG9yIGxpYnJhcnkuICovXFxuXCI7XG4gICAgICAgICAgICBzdHlsZSArPSBcIi5cIiArIGNvbnRhaW5lckNsYXNzICsgXCIgPiBkaXY6Oi13ZWJraXQtc2Nyb2xsYmFyIHsgZGlzcGxheTogbm9uZTsgfVxcblxcblwiO1xuICAgICAgICAgICAgc3R5bGUgKz0gXCIuXCIgKyBjb250YWluZXJBbmltYXRpb25BY3RpdmVDbGFzcyArIFwiIHsgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDAuMXM7IGFuaW1hdGlvbi1kdXJhdGlvbjogMC4xczsgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogXCIgKyBjb250YWluZXJBbmltYXRpb25DbGFzcyArIFwiOyBhbmltYXRpb24tbmFtZTogXCIgKyBjb250YWluZXJBbmltYXRpb25DbGFzcyArIFwiOyB9XFxuXCI7XG4gICAgICAgICAgICBzdHlsZSArPSBcIkAtd2Via2l0LWtleWZyYW1lcyBcIiArIGNvbnRhaW5lckFuaW1hdGlvbkNsYXNzICsgIFwiIHsgMCUgeyBvcGFjaXR5OiAxOyB9IDUwJSB7IG9wYWNpdHk6IDA7IH0gMTAwJSB7IG9wYWNpdHk6IDE7IH0gfVxcblwiO1xuICAgICAgICAgICAgc3R5bGUgKz0gXCJAa2V5ZnJhbWVzIFwiICsgY29udGFpbmVyQW5pbWF0aW9uQ2xhc3MgKyAgICAgICAgICBcIiB7IDAlIHsgb3BhY2l0eTogMTsgfSA1MCUgeyBvcGFjaXR5OiAwOyB9IDEwMCUgeyBvcGFjaXR5OiAxOyB9IH1cIjtcbiAgICAgICAgICAgIGluamVjdFN0eWxlKHN0eWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEFuaW1hdGlvbkNsYXNzKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc05hbWUgKz0gXCIgXCIgKyBkZXRlY3Rpb25Db250YWluZXJDbGFzcyArIFwiX2FuaW1hdGlvbl9hY3RpdmVcIjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRFdmVudChlbCwgbmFtZSwgY2IpIHtcbiAgICAgICAgaWYgKGVsLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgY2IpO1xuICAgICAgICB9IGVsc2UgaWYoZWwuYXR0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGVsLmF0dGFjaEV2ZW50KFwib25cIiArIG5hbWUsIGNiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXBvcnRlci5lcnJvcihcIltzY3JvbGxdIERvbid0IGtub3cgaG93IHRvIGFkZCBldmVudCBsaXN0ZW5lcnMuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlRXZlbnQoZWwsIG5hbWUsIGNiKSB7XG4gICAgICAgIGlmIChlbC5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIGNiKTtcbiAgICAgICAgfSBlbHNlIGlmKGVsLmRldGFjaEV2ZW50KSB7XG4gICAgICAgICAgICBlbC5kZXRhY2hFdmVudChcIm9uXCIgKyBuYW1lLCBjYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb3J0ZXIuZXJyb3IoXCJbc2Nyb2xsXSBEb24ndCBrbm93IGhvdyB0byByZW1vdmUgZXZlbnQgbGlzdGVuZXJzLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEV4cGFuZEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZ2V0U3RhdGUoZWxlbWVudCkuY29udGFpbmVyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNocmlua0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZ2V0U3RhdGUoZWxlbWVudCkuY29udGFpbmVyLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzFdO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSByZXNpemUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBoYXZlIHRoZSBsaXN0ZW5lciBhZGRlZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIHJlc2l6ZSBldmVudCBvZiB0aGUgZWxlbWVudC4gVGhlIGVsZW1lbnQgd2lsbCBiZSBnaXZlbiBhcyBhIHBhcmFtZXRlciB0byB0aGUgbGlzdGVuZXIgY2FsbGJhY2suXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoZWxlbWVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGxpc3RlbmVycyA9IGdldFN0YXRlKGVsZW1lbnQpLmxpc3RlbmVycztcblxuICAgICAgICBpZiAoIWxpc3RlbmVycy5wdXNoKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgYWRkIGxpc3RlbmVyIHRvIGFuIGVsZW1lbnQgdGhhdCBpcyBub3QgZGV0ZWN0YWJsZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5saXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFrZXMgYW4gZWxlbWVudCBkZXRlY3RhYmxlIGFuZCByZWFkeSB0byBiZSBsaXN0ZW5lZCBmb3IgcmVzaXplIGV2ZW50cy4gV2lsbCBjYWxsIHRoZSBjYWxsYmFjayB3aGVuIHRoZSBlbGVtZW50IGlzIHJlYWR5IHRvIGJlIGxpc3RlbmVkIGZvciByZXNpemUgY2hhbmdlcy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvcHRpb25zIE9wdGlvbmFsIG9wdGlvbnMgb2JqZWN0LlxuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBtYWtlIGRldGVjdGFibGVcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFjayBUaGUgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVhZHkgdG8gYmUgbGlzdGVuZWQgZm9yIHJlc2l6ZSBjaGFuZ2VzLiBXaWxsIGJlIGNhbGxlZCB3aXRoIHRoZSBlbGVtZW50IGFzIGZpcnN0IHBhcmFtZXRlci5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtYWtlRGV0ZWN0YWJsZShvcHRpb25zLCBlbGVtZW50LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIWNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGVsZW1lbnQ7XG4gICAgICAgICAgICBlbGVtZW50ID0gb3B0aW9ucztcbiAgICAgICAgICAgIG9wdGlvbnMgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgICAgICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgICAgICAgIHZhciBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBhcmdzLnVuc2hpZnQoaWRIYW5kbGVyLmdldChlbGVtZW50KSwgXCJTY3JvbGw6IFwiKTtcbiAgICAgICAgICAgICAgICBpZiAocmVwb3J0ZXIubG9nLmFwcGx5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcG9ydGVyLmxvZy5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydGVyLmxvZyhhcmdzW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzRGV0YWNoZWQoZWxlbWVudCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gaXNJbkRvY3VtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZWxlbWVudCA9PT0gZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHkgfHwgZWxlbWVudC5vd25lckRvY3VtZW50LmJvZHkuY29udGFpbnMoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghaXNJbkRvY3VtZW50KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZpcmVGb3ggcmV0dXJucyBudWxsIHN0eWxlIGluIGhpZGRlbiBpZnJhbWVzLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3duci9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9pc3N1ZXMvNjggYW5kIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTc5NTUyMFxuICAgICAgICAgICAgaWYgKGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNVbnJlbmRlcmVkKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIC8vIENoZWNrIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbmVkIGNvbnRhaW5lciBzaW5jZSB0aGUgdG9wIGxldmVsIGNvbnRhaW5lciBpcyBkaXNwbGF5OiBpbmxpbmUuXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZ2V0U3RhdGUoZWxlbWVudCkuY29udGFpbmVyLmNoaWxkTm9kZXNbMF07XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGNvbnRhaW5lcik7XG4gICAgICAgICAgICByZXR1cm4gIXN0eWxlLndpZHRoIHx8IHN0eWxlLndpZHRoLmluZGV4T2YoXCJweFwiKSA9PT0gLTE7IC8vQ2FuIG9ubHkgY29tcHV0ZSBwaXhlbCB2YWx1ZSB3aGVuIHJlbmRlcmVkLlxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0U3R5bGUoKSB7XG4gICAgICAgICAgICAvLyBTb21lIGJyb3dzZXJzIG9ubHkgZm9yY2UgbGF5b3V0cyB3aGVuIGFjdHVhbGx5IHJlYWRpbmcgdGhlIHN0eWxlIHByb3BlcnRpZXMgb2YgdGhlIHN0eWxlIG9iamVjdCwgc28gbWFrZSBzdXJlIHRoYXQgdGhleSBhcmUgYWxsIHJlYWQgaGVyZSxcbiAgICAgICAgICAgIC8vIHNvIHRoYXQgdGhlIHVzZXIgb2YgdGhlIGZ1bmN0aW9uIGNhbiBiZSBzdXJlIHRoYXQgaXQgd2lsbCBwZXJmb3JtIHRoZSBsYXlvdXQgaGVyZSwgaW5zdGVhZCBvZiBsYXRlciAoaW1wb3J0YW50IGZvciBiYXRjaGluZykuXG4gICAgICAgICAgICB2YXIgZWxlbWVudFN0eWxlICAgICAgICAgICAgPSBnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHN0eWxlICAgICAgICAgICAgICAgICAgID0ge307XG4gICAgICAgICAgICBzdHlsZS5wb3NpdGlvbiAgICAgICAgICAgICAgPSBlbGVtZW50U3R5bGUucG9zaXRpb247XG4gICAgICAgICAgICBzdHlsZS53aWR0aCAgICAgICAgICAgICAgICAgPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgc3R5bGUuaGVpZ2h0ICAgICAgICAgICAgICAgID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG4gICAgICAgICAgICBzdHlsZS50b3AgICAgICAgICAgICAgICAgICAgPSBlbGVtZW50U3R5bGUudG9wO1xuICAgICAgICAgICAgc3R5bGUucmlnaHQgICAgICAgICAgICAgICAgID0gZWxlbWVudFN0eWxlLnJpZ2h0O1xuICAgICAgICAgICAgc3R5bGUuYm90dG9tICAgICAgICAgICAgICAgID0gZWxlbWVudFN0eWxlLmJvdHRvbTtcbiAgICAgICAgICAgIHN0eWxlLmxlZnQgICAgICAgICAgICAgICAgICA9IGVsZW1lbnRTdHlsZS5sZWZ0O1xuICAgICAgICAgICAgc3R5bGUud2lkdGhDU1MgICAgICAgICAgICAgID0gZWxlbWVudFN0eWxlLndpZHRoO1xuICAgICAgICAgICAgc3R5bGUuaGVpZ2h0Q1NTICAgICAgICAgICAgID0gZWxlbWVudFN0eWxlLmhlaWdodDtcbiAgICAgICAgICAgIHJldHVybiBzdHlsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0b3JlU3RhcnRTaXplKCkge1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLnN0YXJ0U2l6ZSA9IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogc3R5bGUud2lkdGgsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBzdHlsZS5oZWlnaHRcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBkZWJ1ZyhcIkVsZW1lbnQgc3RhcnQgc2l6ZVwiLCBnZXRTdGF0ZShlbGVtZW50KS5zdGFydFNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdExpc3RlbmVycygpIHtcbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLmxpc3RlbmVycyA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RvcmVTdHlsZSgpIHtcbiAgICAgICAgICAgIGRlYnVnKFwic3RvcmVTdHlsZSBpbnZva2VkLlwiKTtcbiAgICAgICAgICAgIGlmICghZ2V0U3RhdGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBoYXMgYmVlbiB1bmluc3RhbGxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGdldFN0eWxlKCk7XG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5zdHlsZSA9IHN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RvcmVDdXJyZW50U2l6ZShlbGVtZW50LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5sYXN0V2lkdGggPSB3aWR0aDtcbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLmxhc3RIZWlnaHQgID0gaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RXhwYW5kQ2hpbGRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRFeHBhbmRFbGVtZW50KGVsZW1lbnQpLmNoaWxkTm9kZXNbMF07XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRXaWR0aE9mZnNldCgpIHtcbiAgICAgICAgICAgIHJldHVybiAyICogc2Nyb2xsYmFyU2l6ZXMud2lkdGggKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0SGVpZ2h0T2Zmc2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIDIgKiBzY3JvbGxiYXJTaXplcy5oZWlnaHQgKyAxO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RXhwYW5kV2lkdGgod2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB3aWR0aCArIDEwICsgZ2V0V2lkdGhPZmZzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEV4cGFuZEhlaWdodChoZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBoZWlnaHQgKyAxMCArIGdldEhlaWdodE9mZnNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0U2hyaW5rV2lkdGgod2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybiB3aWR0aCAqIDIgKyBnZXRXaWR0aE9mZnNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0U2hyaW5rSGVpZ2h0KGhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIGhlaWdodCAqIDIgKyBnZXRIZWlnaHRPZmZzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHBvc2l0aW9uU2Nyb2xsYmFycyhlbGVtZW50LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICB2YXIgZXhwYW5kICAgICAgICAgID0gZ2V0RXhwYW5kRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIHZhciBzaHJpbmsgICAgICAgICAgPSBnZXRTaHJpbmtFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIGV4cGFuZFdpZHRoICAgICA9IGdldEV4cGFuZFdpZHRoKHdpZHRoKTtcbiAgICAgICAgICAgIHZhciBleHBhbmRIZWlnaHQgICAgPSBnZXRFeHBhbmRIZWlnaHQoaGVpZ2h0KTtcbiAgICAgICAgICAgIHZhciBzaHJpbmtXaWR0aCAgICAgPSBnZXRTaHJpbmtXaWR0aCh3aWR0aCk7XG4gICAgICAgICAgICB2YXIgc2hyaW5rSGVpZ2h0ICAgID0gZ2V0U2hyaW5rSGVpZ2h0KGhlaWdodCk7XG4gICAgICAgICAgICBleHBhbmQuc2Nyb2xsTGVmdCAgID0gZXhwYW5kV2lkdGg7XG4gICAgICAgICAgICBleHBhbmQuc2Nyb2xsVG9wICAgID0gZXhwYW5kSGVpZ2h0O1xuICAgICAgICAgICAgc2hyaW5rLnNjcm9sbExlZnQgICA9IHNocmlua1dpZHRoO1xuICAgICAgICAgICAgc2hyaW5rLnNjcm9sbFRvcCAgICA9IHNocmlua0hlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluamVjdENvbnRhaW5lckVsZW1lbnQoKSB7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyID0gZ2V0U3RhdGUoZWxlbWVudCkuY29udGFpbmVyO1xuXG4gICAgICAgICAgICBpZiAoIWNvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lciAgICAgICAgICAgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSAgICAgICAgID0gZGV0ZWN0aW9uQ29udGFpbmVyQ2xhc3M7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgICAgID0gXCJ2aXNpYmlsaXR5OiBoaWRkZW47IGRpc3BsYXk6IGlubGluZTsgd2lkdGg6IDBweDsgaGVpZ2h0OiAwcHg7IHotaW5kZXg6IC0xOyBvdmVyZmxvdzogaGlkZGVuOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XCI7XG4gICAgICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkuY29udGFpbmVyID0gY29udGFpbmVyO1xuICAgICAgICAgICAgICAgIGFkZEFuaW1hdGlvbkNsYXNzKGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIG9uQW5pbWF0aW9uU3RhcnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLm9uUmVuZGVyZWQgJiYgZ2V0U3RhdGUoZWxlbWVudCkub25SZW5kZXJlZCgpO1xuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBhZGRFdmVudChjb250YWluZXIsIFwiYW5pbWF0aW9uc3RhcnRcIiwgb25BbmltYXRpb25TdGFydCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgZXZlbnQgaGFuZGxlciBoZXJlIHNvIHRoYXQgdGhleSBtYXkgYmUgcmVtb3ZlZCB3aGVuIHVuaW5zdGFsbCBpcyBjYWxsZWQuXG4gICAgICAgICAgICAgICAgLy8gU2VlIHVuaW5zdGFsbCBmdW5jdGlvbiBmb3IgYW4gZXhwbGFuYXRpb24gd2h5IGl0IGlzIG5lZWRlZC5cbiAgICAgICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vbkFuaW1hdGlvblN0YXJ0ID0gb25BbmltYXRpb25TdGFydDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbnRhaW5lcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluamVjdFNjcm9sbEVsZW1lbnRzKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gYWx0ZXJQb3NpdGlvblN0eWxlcygpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBnZXRTdGF0ZShlbGVtZW50KS5zdHlsZTtcblxuICAgICAgICAgICAgICAgIGlmKHN0eWxlLnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlbW92ZVJlbGF0aXZlU3R5bGVzID0gZnVuY3Rpb24ocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBwcm9wZXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TnVtZXJpY2FsVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW14tXFxkXFwuXS9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcGVydHldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSAhPT0gXCJhdXRvXCIgJiYgZ2V0TnVtZXJpY2FsVmFsdWUodmFsdWUpICE9PSBcIjBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydGVyLndhcm4oXCJBbiBlbGVtZW50IHRoYXQgaXMgcG9zaXRpb25lZCBzdGF0aWMgaGFzIHN0eWxlLlwiICsgcHJvcGVydHkgKyBcIj1cIiArIHZhbHVlICsgXCIgd2hpY2ggaXMgaWdub3JlZCBkdWUgdG8gdGhlIHN0YXRpYyBwb3NpdGlvbmluZy4gVGhlIGVsZW1lbnQgd2lsbCBuZWVkIHRvIGJlIHBvc2l0aW9uZWQgcmVsYXRpdmUsIHNvIHRoZSBzdHlsZS5cIiArIHByb3BlcnR5ICsgXCIgd2lsbCBiZSBzZXQgdG8gMC4gRWxlbWVudDogXCIsIGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIHNvIHRoYXQgdGhlcmUgYXJlIG5vIGFjY2lkZW50YWwgc3R5bGVzIHRoYXQgd2lsbCBtYWtlIHRoZSBlbGVtZW50IHN0eWxlZCBkaWZmZXJlbnRseSBub3cgdGhhdCBpcyBpcyByZWxhdGl2ZS5cbiAgICAgICAgICAgICAgICAgICAgLy9JZiB0aGVyZSBhcmUgYW55LCBzZXQgdGhlbSB0byAwICh0aGlzIHNob3VsZCBiZSBva2F5IHdpdGggdGhlIHVzZXIgc2luY2UgdGhlIHN0eWxlIHByb3BlcnRpZXMgZGlkIG5vdGhpbmcgYmVmb3JlIFtzaW5jZSB0aGUgZWxlbWVudCB3YXMgcG9zaXRpb25lZCBzdGF0aWNdIGFueXdheSkuXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlbGF0aXZlU3R5bGVzKHJlcG9ydGVyLCBlbGVtZW50LCBzdHlsZSwgXCJ0b3BcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlbGF0aXZlU3R5bGVzKHJlcG9ydGVyLCBlbGVtZW50LCBzdHlsZSwgXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVsYXRpdmVTdHlsZXMocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBcImJvdHRvbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVsYXRpdmVTdHlsZXMocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBcImxlZnRcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRMZWZ0VG9wQm90dG9tUmlnaHRDc3NUZXh0KGxlZnQsIHRvcCwgYm90dG9tLCByaWdodCkge1xuICAgICAgICAgICAgICAgIGxlZnQgPSAoIWxlZnQgPyBcIjBcIiA6IChsZWZ0ICsgXCJweFwiKSk7XG4gICAgICAgICAgICAgICAgdG9wID0gKCF0b3AgPyBcIjBcIiA6ICh0b3AgKyBcInB4XCIpKTtcbiAgICAgICAgICAgICAgICBib3R0b20gPSAoIWJvdHRvbSA/IFwiMFwiIDogKGJvdHRvbSArIFwicHhcIikpO1xuICAgICAgICAgICAgICAgIHJpZ2h0ID0gKCFyaWdodCA/IFwiMFwiIDogKHJpZ2h0ICsgXCJweFwiKSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsZWZ0OiBcIiArIGxlZnQgKyBcIjsgdG9wOiBcIiArIHRvcCArIFwiOyByaWdodDogXCIgKyByaWdodCArIFwiOyBib3R0b206IFwiICsgYm90dG9tICsgXCI7XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlYnVnKFwiSW5qZWN0aW5nIGVsZW1lbnRzXCIpO1xuXG4gICAgICAgICAgICBpZiAoIWdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgaGFzIGJlZW4gdW5pbnN0YWxsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhbHRlclBvc2l0aW9uU3R5bGVzKCk7XG5cbiAgICAgICAgICAgIHZhciByb290Q29udGFpbmVyID0gZ2V0U3RhdGUoZWxlbWVudCkuY29udGFpbmVyO1xuXG4gICAgICAgICAgICBpZiAoIXJvb3RDb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICByb290Q29udGFpbmVyID0gaW5qZWN0Q29udGFpbmVyRWxlbWVudCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBEdWUgdG8gdGhpcyBXZWJLaXQgYnVnIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD04MDgwOCAoY3VycmVudGx5IGZpeGVkIGluIEJsaW5rLCBidXQgc3RpbGwgcHJlc2VudCBpbiBXZWJLaXQgYnJvd3NlcnMgc3VjaCBhcyBTYWZhcmkpLFxuICAgICAgICAgICAgLy8gd2UgbmVlZCB0byBpbmplY3QgdHdvIGNvbnRhaW5lcnMsIG9uZSB0aGF0IGlzIHdpZHRoL2hlaWdodCAxMDAlIGFuZCBhbm90aGVyIHRoYXQgaXMgbGVmdC90b3AgLTFweCBzbyB0aGF0IHRoZSBmaW5hbCBjb250YWluZXIgYWx3YXlzIGlzIDF4MSBwaXhlbHMgYmlnZ2VyIHRoYW5cbiAgICAgICAgICAgIC8vIHRoZSB0YXJnZXRlZCBlbGVtZW50LlxuICAgICAgICAgICAgLy8gV2hlbiB0aGUgYnVnIGlzIHJlc29sdmVkLCBcImNvbnRhaW5lckNvbnRhaW5lclwiIG1heSBiZSByZW1vdmVkLlxuXG4gICAgICAgICAgICAvLyBUaGUgb3V0ZXIgY29udGFpbmVyIGNhbiBvY2Nhc2lvbmFsbHkgYmUgbGVzcyB3aWRlIHRoYW4gdGhlIHRhcmdldGVkIHdoZW4gaW5zaWRlIGlubGluZSBlbGVtZW50cyBlbGVtZW50IGluIFdlYktpdCAoc2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTI5ODApLlxuICAgICAgICAgICAgLy8gVGhpcyBzaG91bGQgYmUgbm8gcHJvYmxlbSBzaW5jZSB0aGUgaW5uZXIgY29udGFpbmVyIGVpdGhlciB3YXkgbWFrZXMgc3VyZSB0aGUgaW5qZWN0ZWQgc2Nyb2xsIGVsZW1lbnRzIGFyZSBhdCBsZWFzdCAxeDEgcHguXG5cbiAgICAgICAgICAgIHZhciBzY3JvbGxiYXJXaWR0aCAgICAgICAgICA9IHNjcm9sbGJhclNpemVzLndpZHRoO1xuICAgICAgICAgICAgdmFyIHNjcm9sbGJhckhlaWdodCAgICAgICAgID0gc2Nyb2xsYmFyU2l6ZXMuaGVpZ2h0O1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lckNvbnRhaW5lclN0eWxlID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IGZsZXg6IG5vbmU7IG92ZXJmbG93OiBoaWRkZW47IHotaW5kZXg6IC0xOyB2aXNpYmlsaXR5OiBoaWRkZW47IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7IGxlZnQ6IDBweDsgdG9wOiAwcHg7XCI7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyU3R5bGUgICAgICAgICAgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgZmxleDogbm9uZTsgb3ZlcmZsb3c6IGhpZGRlbjsgei1pbmRleDogLTE7IHZpc2liaWxpdHk6IGhpZGRlbjsgXCIgKyBnZXRMZWZ0VG9wQm90dG9tUmlnaHRDc3NUZXh0KC0oMSArIHNjcm9sbGJhcldpZHRoKSwgLSgxICsgc2Nyb2xsYmFySGVpZ2h0KSwgLXNjcm9sbGJhckhlaWdodCwgLXNjcm9sbGJhcldpZHRoKTtcbiAgICAgICAgICAgIHZhciBleHBhbmRTdHlsZSAgICAgICAgICAgICA9IFwicG9zaXRpb246IGFic29sdXRlOyBmbGV4OiBub25lOyBvdmVyZmxvdzogc2Nyb2xsOyB6LWluZGV4OiAtMTsgdmlzaWJpbGl0eTogaGlkZGVuOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1wiO1xuICAgICAgICAgICAgdmFyIHNocmlua1N0eWxlICAgICAgICAgICAgID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IGZsZXg6IG5vbmU7IG92ZXJmbG93OiBzY3JvbGw7IHotaW5kZXg6IC0xOyB2aXNpYmlsaXR5OiBoaWRkZW47IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XCI7XG4gICAgICAgICAgICB2YXIgZXhwYW5kQ2hpbGRTdHlsZSAgICAgICAgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgbGVmdDogMDsgdG9wOiAwO1wiO1xuICAgICAgICAgICAgdmFyIHNocmlua0NoaWxkU3R5bGUgICAgICAgID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiAyMDAlOyBoZWlnaHQ6IDIwMCU7XCI7XG5cbiAgICAgICAgICAgIHZhciBjb250YWluZXJDb250YWluZXIgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyICAgICAgICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIGV4cGFuZCAgICAgICAgICAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBleHBhbmRDaGlsZCAgICAgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgc2hyaW5rICAgICAgICAgICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIHNocmlua0NoaWxkICAgICAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcblxuICAgICAgICAgICAgLy8gU29tZSBicm93c2VycyBjaG9rZSBvbiB0aGUgcmVzaXplIHN5c3RlbSBiZWluZyBydGwsIHNvIGZvcmNlIGl0IHRvIGx0ci4gaHR0cHM6Ly9naXRodWIuY29tL3duci9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9pc3N1ZXMvNTZcbiAgICAgICAgICAgIC8vIEhvd2V2ZXIsIGRpciBzaG91bGQgbm90IGJlIHNldCBvbiB0aGUgdG9wIGxldmVsIGNvbnRhaW5lciBhcyBpdCBhbHRlcnMgdGhlIGRpbWVuc2lvbnMgb2YgdGhlIHRhcmdldCBlbGVtZW50IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgICAgICAgICBjb250YWluZXJDb250YWluZXIuZGlyICAgICAgICAgICAgICA9IFwibHRyXCI7XG5cbiAgICAgICAgICAgIGNvbnRhaW5lckNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ICAgID0gY29udGFpbmVyQ29udGFpbmVyU3R5bGU7XG4gICAgICAgICAgICBjb250YWluZXJDb250YWluZXIuY2xhc3NOYW1lICAgICAgICA9IGRldGVjdGlvbkNvbnRhaW5lckNsYXNzO1xuICAgICAgICAgICAgY29udGFpbmVyLmNsYXNzTmFtZSAgICAgICAgICAgICAgICAgPSBkZXRlY3Rpb25Db250YWluZXJDbGFzcztcbiAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ICAgICAgICAgICAgID0gY29udGFpbmVyU3R5bGU7XG4gICAgICAgICAgICBleHBhbmQuc3R5bGUuY3NzVGV4dCAgICAgICAgICAgICAgICA9IGV4cGFuZFN0eWxlO1xuICAgICAgICAgICAgZXhwYW5kQ2hpbGQuc3R5bGUuY3NzVGV4dCAgICAgICAgICAgPSBleHBhbmRDaGlsZFN0eWxlO1xuICAgICAgICAgICAgc2hyaW5rLnN0eWxlLmNzc1RleHQgICAgICAgICAgICAgICAgPSBzaHJpbmtTdHlsZTtcbiAgICAgICAgICAgIHNocmlua0NoaWxkLnN0eWxlLmNzc1RleHQgICAgICAgICAgID0gc2hyaW5rQ2hpbGRTdHlsZTtcblxuICAgICAgICAgICAgZXhwYW5kLmFwcGVuZENoaWxkKGV4cGFuZENoaWxkKTtcbiAgICAgICAgICAgIHNocmluay5hcHBlbmRDaGlsZChzaHJpbmtDaGlsZCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZXhwYW5kKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzaHJpbmspO1xuICAgICAgICAgICAgY29udGFpbmVyQ29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG4gICAgICAgICAgICByb290Q29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhaW5lckNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uRXhwYW5kU2Nyb2xsKCkge1xuICAgICAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLm9uRXhwYW5kICYmIGdldFN0YXRlKGVsZW1lbnQpLm9uRXhwYW5kKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG9uU2hyaW5rU2Nyb2xsKCkge1xuICAgICAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLm9uU2hyaW5rICYmIGdldFN0YXRlKGVsZW1lbnQpLm9uU2hyaW5rKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkZEV2ZW50KGV4cGFuZCwgXCJzY3JvbGxcIiwgb25FeHBhbmRTY3JvbGwpO1xuICAgICAgICAgICAgYWRkRXZlbnQoc2hyaW5rLCBcInNjcm9sbFwiLCBvblNocmlua1Njcm9sbCk7XG5cbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBldmVudCBoYW5kbGVycyBoZXJlIHNvIHRoYXQgdGhleSBtYXkgYmUgcmVtb3ZlZCB3aGVuIHVuaW5zdGFsbCBpcyBjYWxsZWQuXG4gICAgICAgICAgICAvLyBTZWUgdW5pbnN0YWxsIGZ1bmN0aW9uIGZvciBhbiBleHBsYW5hdGlvbiB3aHkgaXQgaXMgbmVlZGVkLlxuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25FeHBhbmRTY3JvbGwgPSBvbkV4cGFuZFNjcm9sbDtcbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLm9uU2hyaW5rU2Nyb2xsID0gb25TaHJpbmtTY3JvbGw7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZWdpc3Rlckxpc3RlbmVyc0FuZFBvc2l0aW9uRWxlbWVudHMoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVDaGlsZFNpemVzKGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXhwYW5kQ2hpbGQgICAgICAgICAgICAgPSBnZXRFeHBhbmRDaGlsZEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdmFyIGV4cGFuZFdpZHRoICAgICAgICAgICAgID0gZ2V0RXhwYW5kV2lkdGgod2lkdGgpO1xuICAgICAgICAgICAgICAgIHZhciBleHBhbmRIZWlnaHQgICAgICAgICAgICA9IGdldEV4cGFuZEhlaWdodChoZWlnaHQpO1xuICAgICAgICAgICAgICAgIGV4cGFuZENoaWxkLnN0eWxlLndpZHRoICAgICA9IGV4cGFuZFdpZHRoICsgXCJweFwiO1xuICAgICAgICAgICAgICAgIGV4cGFuZENoaWxkLnN0eWxlLmhlaWdodCAgICA9IGV4cGFuZEhlaWdodCArIFwicHhcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlRGV0ZWN0b3JFbGVtZW50cyhkb25lKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoICAgICAgICAgICA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCAgICAgICAgICA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgZGVidWcoXCJTdG9yaW5nIGN1cnJlbnQgc2l6ZVwiLCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBzaXplIG9mIHRoZSBlbGVtZW50IHN5bmMgaGVyZSwgc28gdGhhdCBtdWx0aXBsZSBzY3JvbGwgZXZlbnRzIG1heSBiZSBpZ25vcmVkIGluIHRoZSBldmVudCBsaXN0ZW5lcnMuXG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHRoZSBpZi1jaGVjayBpbiBoYW5kbGVTY3JvbGwgaXMgdXNlbGVzcy5cbiAgICAgICAgICAgICAgICBzdG9yZUN1cnJlbnRTaXplKGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgLy8gU2luY2Ugd2UgZGVsYXkgdGhlIHByb2Nlc3Npbmcgb2YgdGhlIGJhdGNoLCB0aGVyZSBpcyBhIHJpc2sgdGhhdCB1bmluc3RhbGwgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSB0aGUgYmF0Y2ggZ2V0cyB0byBleGVjdXRlLlxuICAgICAgICAgICAgICAgIC8vIFNpbmNlIHRoZXJlIGlzIG5vIHdheSB0byBjYW5jZWwgdGhlIGZuIGV4ZWN1dGlvbnMsIHdlIG5lZWQgdG8gYWRkIGFuIHVuaW5zdGFsbCBndWFyZCB0byBhbGwgZm5zIG9mIHRoZSBiYXRjaC5cblxuICAgICAgICAgICAgICAgIGJhdGNoUHJvY2Vzc29yLmFkZCgwLCBmdW5jdGlvbiBwZXJmb3JtVXBkYXRlQ2hpbGRTaXplcygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgaGFzIGJlZW4gdW5pbnN0YWxsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFyZUVsZW1lbnRzSW5qZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgY29udGFpbmVyIGhhcyBub3QgYmVlbiBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdyA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodyAhPT0gd2lkdGggfHwgaCAhPT0gaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0ZXIud2FybihpZEhhbmRsZXIuZ2V0KGVsZW1lbnQpLCBcIlNjcm9sbDogU2l6ZSBjaGFuZ2VkIGJlZm9yZSB1cGRhdGluZyBkZXRlY3RvciBlbGVtZW50cy5cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVDaGlsZFNpemVzKGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKDEsIGZ1bmN0aW9uIHVwZGF0ZVNjcm9sbGJhcnMoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2V0U3RhdGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGhhcyBiZWVuIHVuaW5zdGFsbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhcmVFbGVtZW50c0luamVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGNvbnRhaW5lciBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvblNjcm9sbGJhcnMoZWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGhhcyBiZWVuIHVuaW5zdGFsbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhcmVFbGVtZW50c0luamVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgY29udGFpbmVyIGhhcyBub3QgYmVlbiBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBkb25lKCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gYXJlRWxlbWVudHNJbmplY3RlZCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gISFnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG5vdGlmeUxpc3RlbmVyc0lmTmVlZGVkKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGlzRmlyc3ROb3RpZnkoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXRTdGF0ZShlbGVtZW50KS5sYXN0Tm90aWZpZWRXaWR0aCA9PT0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlYnVnKFwibm90aWZ5TGlzdGVuZXJzSWZOZWVkZWQgaW52b2tlZFwiKTtcblxuICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKGVsZW1lbnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3Qgbm90aWZ5IHRoZSBpZiB0aGUgY3VycmVudCBzaXplIGlzIHRoZSBzdGFydCBzaXplLCBhbmQgdGhpcyBpcyB0aGUgZmlyc3Qgbm90aWZpY2F0aW9uLlxuICAgICAgICAgICAgICAgIGlmIChpc0ZpcnN0Tm90aWZ5KCkgJiYgc3RhdGUubGFzdFdpZHRoID09PSBzdGF0ZS5zdGFydFNpemUud2lkdGggJiYgc3RhdGUubGFzdEhlaWdodCA9PT0gc3RhdGUuc3RhcnRTaXplLmhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVidWcoXCJOb3Qgbm90aWZ5aW5nOiBTaXplIGlzIHRoZSBzYW1lIGFzIHRoZSBzdGFydCBzaXplLCBhbmQgdGhlcmUgaGFzIGJlZW4gbm8gbm90aWZpY2F0aW9uIHlldC5cIik7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gRG9uJ3Qgbm90aWZ5IGlmIHRoZSBzaXplIGFscmVhZHkgaGFzIGJlZW4gbm90aWZpZWQuXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLmxhc3RXaWR0aCA9PT0gc3RhdGUubGFzdE5vdGlmaWVkV2lkdGggJiYgc3RhdGUubGFzdEhlaWdodCA9PT0gc3RhdGUubGFzdE5vdGlmaWVkSGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWJ1ZyhcIk5vdCBub3RpZnlpbmc6IFNpemUgYWxyZWFkeSBub3RpZmllZFwiKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgIGRlYnVnKFwiQ3VycmVudCBzaXplIG5vdCBub3RpZmllZCwgbm90aWZ5aW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgIHN0YXRlLmxhc3ROb3RpZmllZFdpZHRoID0gc3RhdGUubGFzdFdpZHRoO1xuICAgICAgICAgICAgICAgIHN0YXRlLmxhc3ROb3RpZmllZEhlaWdodCA9IHN0YXRlLmxhc3RIZWlnaHQ7XG4gICAgICAgICAgICAgICAgZm9yRWFjaChnZXRTdGF0ZShlbGVtZW50KS5saXN0ZW5lcnMsIGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlUmVuZGVyKCkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwic3RhcnRhbmltYXRpb24gdHJpZ2dlcmVkLlwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1VucmVuZGVyZWQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJJZ25vcmluZyBzaW5jZSBlbGVtZW50IGlzIHN0aWxsIHVucmVuZGVyZWQuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWJ1ZyhcIkVsZW1lbnQgcmVuZGVyZWQuXCIpO1xuICAgICAgICAgICAgICAgIHZhciBleHBhbmQgPSBnZXRFeHBhbmRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHZhciBzaHJpbmsgPSBnZXRTaHJpbmtFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlmIChleHBhbmQuc2Nyb2xsTGVmdCA9PT0gMCB8fCBleHBhbmQuc2Nyb2xsVG9wID09PSAwIHx8IHNocmluay5zY3JvbGxMZWZ0ID09PSAwIHx8IHNocmluay5zY3JvbGxUb3AgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJTY3JvbGxiYXJzIG91dCBvZiBzeW5jLiBVcGRhdGluZyBkZXRlY3RvciBlbGVtZW50cy4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRGV0ZWN0b3JFbGVtZW50cyhub3RpZnlMaXN0ZW5lcnNJZk5lZWRlZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVTY3JvbGwoKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJTY3JvbGwgZGV0ZWN0ZWQuXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzVW5yZW5kZXJlZChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyBFbGVtZW50IGlzIHN0aWxsIHVucmVuZGVyZWQuIFNraXAgdGhpcyBzY3JvbGwgZXZlbnQuXG4gICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiU2Nyb2xsIGV2ZW50IGZpcmVkIHdoaWxlIHVucmVuZGVyZWQuIElnbm9yaW5nLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBpZiAod2lkdGggIT09IGdldFN0YXRlKGVsZW1lbnQpLmxhc3RXaWR0aCB8fCBoZWlnaHQgIT09IGdldFN0YXRlKGVsZW1lbnQpLmxhc3RIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJFbGVtZW50IHNpemUgY2hhbmdlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURldGVjdG9yRWxlbWVudHMobm90aWZ5TGlzdGVuZXJzSWZOZWVkZWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiRWxlbWVudCBzaXplIGhhcyBub3QgY2hhbmdlZCAoXCIgKyB3aWR0aCArIFwieFwiICsgaGVpZ2h0ICsgXCIpLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlYnVnKFwicmVnaXN0ZXJMaXN0ZW5lcnNBbmRQb3NpdGlvbkVsZW1lbnRzIGludm9rZWQuXCIpO1xuXG4gICAgICAgICAgICBpZiAoIWdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgaGFzIGJlZW4gdW5pbnN0YWxsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vblJlbmRlcmVkID0gaGFuZGxlUmVuZGVyO1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25FeHBhbmQgPSBoYW5kbGVTY3JvbGw7XG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vblNocmluayA9IGhhbmRsZVNjcm9sbDtcblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gZ2V0U3RhdGUoZWxlbWVudCkuc3R5bGU7XG4gICAgICAgICAgICB1cGRhdGVDaGlsZFNpemVzKGVsZW1lbnQsIHN0eWxlLndpZHRoLCBzdHlsZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmluYWxpemVEb21NdXRhdGlvbigpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZmluYWxpemVEb21NdXRhdGlvbiBpbnZva2VkLlwiKTtcblxuICAgICAgICAgICAgaWYgKCFnZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGhhcyBiZWVuIHVuaW5zdGFsbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gZ2V0U3RhdGUoZWxlbWVudCkuc3R5bGU7XG4gICAgICAgICAgICBzdG9yZUN1cnJlbnRTaXplKGVsZW1lbnQsIHN0eWxlLndpZHRoLCBzdHlsZS5oZWlnaHQpO1xuICAgICAgICAgICAgcG9zaXRpb25TY3JvbGxiYXJzKGVsZW1lbnQsIHN0eWxlLndpZHRoLCBzdHlsZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVhZHkoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluc3RhbGwoKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIkluc3RhbGxpbmcuLi5cIik7XG4gICAgICAgICAgICBpbml0TGlzdGVuZXJzKCk7XG4gICAgICAgICAgICBzdG9yZVN0YXJ0U2l6ZSgpO1xuXG4gICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMCwgc3RvcmVTdHlsZSk7XG4gICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMSwgaW5qZWN0U2Nyb2xsRWxlbWVudHMpO1xuICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKDIsIHJlZ2lzdGVyTGlzdGVuZXJzQW5kUG9zaXRpb25FbGVtZW50cyk7XG4gICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMywgZmluYWxpemVEb21NdXRhdGlvbik7XG4gICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoNCwgcmVhZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVidWcoXCJNYWtpbmcgZGV0ZWN0YWJsZS4uLlwiKTtcblxuICAgICAgICBpZiAoaXNEZXRhY2hlZChlbGVtZW50KSkge1xuICAgICAgICAgICAgZGVidWcoXCJFbGVtZW50IGlzIGRldGFjaGVkXCIpO1xuXG4gICAgICAgICAgICBpbmplY3RDb250YWluZXJFbGVtZW50KCk7XG5cbiAgICAgICAgICAgIGRlYnVnKFwiV2FpdGluZyB1bnRpbCBlbGVtZW50IGlzIGF0dGFjaGVkLi4uXCIpO1xuXG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vblJlbmRlcmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiRWxlbWVudCBpcyBub3cgYXR0YWNoZWRcIik7XG4gICAgICAgICAgICAgICAgaW5zdGFsbCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuaW5zdGFsbChlbGVtZW50KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIFVuaW5zdGFsbCBoYXMgYmVlbiBjYWxsZWQgb24gYSBub24tZXJkIGVsZW1lbnQuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVbmluc3RhbGwgbWF5IGhhdmUgYmVlbiBjYWxsZWQgaW4gdGhlIGZvbGxvd2luZyBzY2VuYXJpb3M6XG4gICAgICAgIC8vICgxKSBSaWdodCBiZXR3ZWVuIHRoZSBzeW5jIGNvZGUgYW5kIGFzeW5jIGJhdGNoIChoZXJlIHN0YXRlLmJ1c3kgPSB0cnVlLCBidXQgbm90aGluZyBoYXZlIGJlZW4gcmVnaXN0ZXJlZCBvciBpbmplY3RlZCkuXG4gICAgICAgIC8vICgyKSBJbiB0aGUgcmVhZHkgY2FsbGJhY2sgb2YgdGhlIGxhc3QgbGV2ZWwgb2YgdGhlIGJhdGNoIGJ5IGFub3RoZXIgZWxlbWVudCAoaGVyZSwgc3RhdGUuYnVzeSA9IHRydWUsIGJ1dCBhbGwgdGhlIHN0dWZmIGhhcyBiZWVuIGluamVjdGVkKS5cbiAgICAgICAgLy8gKDMpIEFmdGVyIHRoZSBpbnN0YWxsYXRpb24gcHJvY2VzcyAoaGVyZSwgc3RhdGUuYnVzeSA9IGZhbHNlIGFuZCBhbGwgdGhlIHN0dWZmIGhhcyBiZWVuIGluamVjdGVkKS5cbiAgICAgICAgLy8gU28gdG8gYmUgb24gdGhlIHNhZmUgc2lkZSwgbGV0J3MgY2hlY2sgZm9yIGVhY2ggdGhpbmcgYmVmb3JlIHJlbW92aW5nLlxuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lcnMsIGJlY2F1c2Ugb3RoZXJ3aXNlIHRoZSBldmVudCBtaWdodCBmaXJlIG9uIGFuIHVuaW5zdGFsbCBlbGVtZW50IHdoaWNoIHJlc3VsdHMgaW4gYW4gZXJyb3Igd2hlbiB0cnlpbmcgdG8gZ2V0IHRoZSBzdGF0ZSBvZiB0aGUgZWxlbWVudC5cbiAgICAgICAgc3RhdGUub25FeHBhbmRTY3JvbGwgJiYgcmVtb3ZlRXZlbnQoZ2V0RXhwYW5kRWxlbWVudChlbGVtZW50KSwgXCJzY3JvbGxcIiwgc3RhdGUub25FeHBhbmRTY3JvbGwpO1xuICAgICAgICBzdGF0ZS5vblNocmlua1Njcm9sbCAmJiByZW1vdmVFdmVudChnZXRTaHJpbmtFbGVtZW50KGVsZW1lbnQpLCBcInNjcm9sbFwiLCBzdGF0ZS5vblNocmlua1Njcm9sbCk7XG4gICAgICAgIHN0YXRlLm9uQW5pbWF0aW9uU3RhcnQgJiYgcmVtb3ZlRXZlbnQoc3RhdGUuY29udGFpbmVyLCBcImFuaW1hdGlvbnN0YXJ0XCIsIHN0YXRlLm9uQW5pbWF0aW9uU3RhcnQpO1xuXG4gICAgICAgIHN0YXRlLmNvbnRhaW5lciAmJiBlbGVtZW50LnJlbW92ZUNoaWxkKHN0YXRlLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZURldGVjdGFibGU6IG1ha2VEZXRlY3RhYmxlLFxuICAgICAgICBhZGRMaXN0ZW5lcjogYWRkTGlzdGVuZXIsXG4gICAgICAgIHVuaW5zdGFsbDogdW5pbnN0YWxsXG4gICAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvZGV0ZWN0aW9uLXN0cmF0ZWd5L3Njcm9sbC5qc1xuLy8gbW9kdWxlIGlkID0gMTIxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsImNsYXNzIFJlc3BvbnNpdmVUYWJsZSB7XG4gICAgY29uc3RydWN0b3IoZWwsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmhpZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIH1cblxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmVsLmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWwuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIHNob3VsZG50UmVzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aWR0aCA9PT0gdGhpcy5lbC5jbGllbnRXaWR0aCAmJiB0aGlzLmhlaWdodCAhPT0gdGhpcy5lbC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuXG4gICAgc2hvdWxkSGlkZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwuY2xpZW50V2lkdGggPCB0aGlzLmVsLnNjcm9sbFdpZHRoO1xuICAgIH1cblxuICAgIHNob3VsZFVuaGlkZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwuY2xpZW50V2lkdGggPT09IHRoaXMuZWwuc2Nyb2xsV2lkdGggJiYgIXRoaXMuaGlkaW5nO1xuICAgIH1cblxuICAgIGhpZGVDb2x1bW5zKCkge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5jb250ZXh0LnRlbXBsYXRlLmNvbHVtbnNcbiAgICAgICAgICAgIC5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5tZXRhLnZpc2libGUgJiYgIWNvbHVtbi5tZXRhLmhpZGRlbik7XG5cbiAgICAgICAgaWYgKCFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaWRpbmcgPSB0cnVlO1xuICAgICAgICBjb2x1bW5zW2NvbHVtbnMubGVuZ3RoIC0gMV0ubWV0YS5oaWRkZW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMucmV0cnlGaXQoKTtcbiAgICB9XG5cbiAgICBzaG93Q29sdW1uKCkge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5jb250ZXh0LnRlbXBsYXRlLmNvbHVtbnNcbiAgICAgICAgICAgIC5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5tZXRhLmhpZGRlbik7XG5cbiAgICAgICAgaWYgKCFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sdW1uc1swXS5tZXRhLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucmV0cnlGaXQoKTtcbiAgICB9XG5cbiAgICByZXNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZG50UmVzaXplKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZml0KCk7XG4gICAgfVxuXG4gICAgcmV0cnlGaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZml0KCkge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRIaWRlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUNvbHVtbnMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhpZGluZykge1xuICAgICAgICAgICAgdGhpcy5oaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVuaGlkZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb2x1bW4oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2l2ZVRhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc3BvbnNpdmUvUmVzcG9uc2l2ZVRhYmxlLmpzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaW5pdGlhbGlzZWRcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJveFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInRvcC1jb250cm9sc1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoYXMtcGFkZGluZy1zbWFsbCBoYXMtcGFkZGluZy1ib3R0b20tbGFyZ2VcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlOiBfdm0udGVtcGxhdGUsXG4gICAgICAgICAgICAgIGkxOG46IF92bS5pMThuLFxuICAgICAgICAgICAgICBsZW5ndGg6IF92bS5sZW5ndGhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcInVwZGF0ZS1sZW5ndGhcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmxlbmd0aCA9ICRldmVudFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImV4cG9ydC1kYXRhXCI6IF92bS5leHBvcnREYXRhLFxuICAgICAgICAgICAgICByZWxvYWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5nZXREYXRhKClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmVzZXQ6IF92bS5yZXNldFByZWZlcmVuY2VzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW3sgbmFtZTogXCJyZXNwb25zaXZlXCIsIHJhd05hbWU6IFwidi1yZXNwb25zaXZlXCIgfV0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlLXJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlIGlzLWZ1bGx3aWR0aCB2dWUtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS50ZW1wbGF0ZS5zdHlsZSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImlkXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZS1oZWFkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlLCBpMThuOiBfdm0uaTE4biB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBcInNvcnQtdXBkYXRlXCI6IF92bS5nZXREYXRhIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5oYXNDb250ZW50XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogX3ZtLmJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogX3ZtLnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLmkxOG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1c3RvbS1yZW5kZXJcIjogX3ZtLmN1c3RvbVJlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBfdm0uZXhwYW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGFqYXg6IF92bS5hamF4IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnRlbXBsYXRlLnRvdGFsICYmIF92bS5oYXNDb250ZW50XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0YWJsZS1mb290ZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IF92bS50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogX3ZtLmJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5pMThuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubG9hZGluZyA/IF9jKFwib3ZlcmxheVwiKSA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uaGFzQ29udGVudFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgdGFibGUtYm90dG9tLWNvbnRyb2xzXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJyZWNvcmRzLWluZm9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBfdm0uYm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5pMThuLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IF92bS5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogX3ZtLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW5hcnJvdyBoYXMtdGV4dC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBfdm0uc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IF92bS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiBfdm0uYm9keS5maWx0ZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5pMThuXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJqdW1wLXRvXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3RhcnQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldERhdGEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5ib2R5ICYmICFfdm0uYm9keS5jb3VudFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhcy10ZXh0LWNlbnRlcmVkIG5vLXJlY29yZHMtZm91bmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pMThuKFwiTm8gcmVjb3JkcyB3ZXJlIGZvdW5kLlwiKSkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMWU1NDE5MzRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFlNTQxOTM0XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDx2dWUtdGFibGUgOnBhdGg9XCJwYXRoXCJcbiAgICAgICAgOmkxOG49XCJfX1wiXG4gICAgICAgIGlkPVwidXNlcnNcIj5cbiAgICA8L3Z1ZS10YWJsZT5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IFZ1ZVRhYmxlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHsgVnVlVGFibGUgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXRoOiByb3V0ZSgnYWRtaW5pc3RyYXRpb24udXNlcnMuaW5pdFRhYmxlJywgW10sIGZhbHNlKSxcbiAgICAgICAgfTtcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9JbmRleC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidnVlLXRhYmxlXCIsIHtcbiAgICBhdHRyczogeyBwYXRoOiBfdm0ucGF0aCwgaTE4bjogX3ZtLl9fLCBpZDogXCJ1c2Vyc1wiIH1cbiAgfSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtM2ZjNmE0OTdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTNmYzZhNDk3XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9JbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDE0MzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxMCJdLCJzb3VyY2VSb290IjoiIn0=