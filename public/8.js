webpackJsonp([8],{

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1516)
/* template */
var __vue_template__ = __webpack_require__(1517)
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
Component.options.__file = "resources/assets/js/pages/system/menus/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4426bb54", Component.options)
  } else {
    hotAPI.reload("data-v-4426bb54", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1126:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1162)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1164)
/* template */
var __vue_template__ = __webpack_require__(1170)
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

/***/ 1127:
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

/***/ 1128:
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

/***/ 1130:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1131)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1133)
/* template */
var __vue_template__ = __webpack_require__(1204)
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

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1132);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("96ec5944", content, false);
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

/***/ 1132:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.table.vue-data-table {\n    margin-bottom: 0;\n}\n.table-responsive {\n    position: relative;\n    display: block;\n    width: 100%;\n    min-height: .01%;\n    overflow-x: auto;\n}\n.table-responsive table {\n    font-size: 15px;\n}\ndiv.table-bottom-controls {\n    margin-top: .5rem;\n}\ndiv.no-records-found {\n    margin-top: 20px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/VueTable.vue"],"names":[],"mappings":";AA2XA;IACA,iBAAA;CACA;AAEA;IACA,mBAAA;IACA,eAAA;IACA,YAAA;IACA,iBAAA;IACA,iBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,kBAAA;CACA;AAEA;IACA,iBAAA;CACA","file":"VueTable.vue","sourcesContent":["<template>\n\n    <div class=\"box\"\n        v-if=\"initialised\">\n        <top-controls :template=\"template\"\n            class=\"has-padding-small has-padding-bottom-large\"\n            :i18n=\"i18n\"\n            :length=\"length\"\n            @update-length=\"length=$event\"\n            @export-data=\"exportData\"\n            @reload=\"getData()\"\n            @reset=\"resetPreferences\"\n            v-model=\"search\">\n        </top-controls>\n        <div class=\"table-responsive\"\n            v-responsive>\n            <table class=\"table is-fullwidth vue-data-table\"\n                :class=\"template.style\"\n                id=\"id\">\n                <table-header :template=\"template\"\n                    :i18n=\"i18n\"\n                    @sort-update=\"getData\">\n                </table-header>\n                <table-body :template=\"template\"\n                    v-on=\"$listeners\"\n                    :body=\"body\"\n                    :start=\"start\"\n                    :i18n=\"i18n\"\n                    :custom-render=\"customRender\"\n                    :expanded=\"expanded\"\n                    @ajax=\"ajax\"\n                    v-if=\"hasContent\">\n                </table-body>\n                <table-footer v-if=\"template.total && hasContent\"\n                    :template=\"template\"\n                    :body=\"body\"\n                    :i18n=\"i18n\">\n                </table-footer>\n            </table>\n            <overlay v-if=\"loading\"></overlay>\n        </div>\n        <div class=\"columns table-bottom-controls\"\n            v-if=\"hasContent\">\n            <div class=\"column\">\n                <records-info :body=\"body\"\n                    :i18n=\"i18n\"\n                    :start=\"start\"\n                    :length=\"length\">\n                </records-info>\n            </div>\n            <div class=\"column is-narrow has-text-right\">\n                <pagination :start=\"start\"\n                    :length=\"length\"\n                    :records=\"body.filtered\"\n                    :i18n=\"i18n\"\n                    @jump-to=\"start = $event;getData()\">\n                </pagination>\n            </div>\n        </div>\n        <div v-if=\"body && !body.count\"\n            class=\"has-text-centered no-records-found\">\n            {{ i18n('No records were found.') }}\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport toastr from 'toastr';\nimport { debounce } from 'lodash';\nimport TopControls from './TopControls.vue';\nimport TableHeader from './TableHeader.vue';\nimport TableBody from './TableBody.vue';\nimport TableFooter from './TableFooter.vue';\nimport RecordsInfo from './RecordsInfo.vue';\nimport Pagination from './Pagination.vue';\nimport Overlay from './Overlay.vue';\nimport vResponsive from './responsive/vResponsive';\n\nexport default {\n    name: 'VueTable',\n\n    components: {\n        TopControls, TableHeader, TableBody, TableFooter, RecordsInfo, Overlay, Pagination,\n    },\n\n    directives: {\n        responsive: vResponsive,\n    },\n\n    props: {\n        id: {\n            type: String,\n            required: true,\n        },\n        path: {\n            type: String,\n            required: true,\n        },\n        filters: {\n            type: Object,\n            default: null,\n        },\n        params: {\n            type: Object,\n            default: null,\n        },\n        intervals: {\n            type: Object,\n            default: null,\n        },\n        customRender: {\n            type: Function,\n            default: (row, column) => {\n                toastr.warning(`'Custom render function is missing for column: ${column.name}'`);\n                return row[column.name];\n            },\n        },\n        i18n: {\n            type: Function,\n            default: value => value,\n        },\n    },\n\n    computed: {\n        preferencesKey() {\n            return `VueTable_${this.id}_preferences`;\n        },\n        preferences() {\n            if (!this.initialised) {\n                return null;\n            }\n\n            return {\n                global: {\n                    length: this.length,\n                    search: this.search,\n                    start: this.start,\n                },\n                template: {\n                    sort: this.template.sort,\n                    style: this.template.style,\n                    align: this.template.align,\n                },\n                columns: this.template.columns.reduce((collector, column) => {\n                    collector.push({\n                        sort: column.meta.sort,\n                        visible: column.meta.visible,\n                    });\n\n                    return collector;\n                }, []),\n            };\n        },\n        hasContent() {\n            return this.body && this.body.count;\n        },\n    },\n\n    data() {\n        return {\n            loading: false,\n            initialised: false,\n            template: null,\n            search: '',\n            start: null,\n            body: null,\n            length: null,\n            expanded: [],\n        };\n    },\n\n    watch: {\n        search: {\n            handler() {\n                this.filterUpdate();\n            },\n        },\n        filters: {\n            handler() {\n                this.filterUpdate();\n            },\n            deep: true,\n        },\n        params: {\n            handler() {\n                this.filterUpdate();\n            },\n            deep: true,\n        },\n        intervals: {\n            handler() {\n                this.filterUpdate();\n            },\n            deep: true,\n        },\n        length: {\n            handler() {\n                this.filterUpdate();\n            },\n        },\n        preferences: {\n            handler() {\n                if (this.hasContent) {\n                    this.savePreferences();\n                }\n            },\n            deep: true,\n        },\n    },\n\n    created() {\n        this.getData = debounce(this.getData, 100);\n        this.init();\n    },\n\n    methods: {\n        init() {\n            axios.get(this.path).then(({ data }) => {\n                this.template = data.template;\n                this.start = 0;\n                [this.length] = this.template.lengthMenu;\n                this.setPreferences();\n                this.getData();\n            }).catch((error) => {\n                const { status, data } = error.response;\n\n                if (status === 555) {\n                    toastr.error(data.message);\n                }\n\n                this.handleError(error);\n            });\n        },\n        setPreferences() {\n            this.setDefaultPreferences();\n\n            if (localStorage.getItem(this.preferencesKey) !== null) {\n                this.setUserPreferences();\n            }\n\n            this.$nextTick(() => {\n                this.initialised = true;\n            });\n        },\n        setDefaultPreferences() {\n            this.template.columns.forEach(({ meta }) => {\n                this.$set(meta, 'sort', null);\n                this.$set(meta, 'hidden', false);\n            });\n\n            this.$set(this.template, 'sort', false);\n        },\n        setUserPreferences() {\n            const prefs = JSON.parse(localStorage.getItem(this.preferencesKey));\n\n            Object.keys(prefs.global).forEach((key) => {\n                this.$set(this, key, prefs.global[key]);\n            });\n\n            Object.keys(prefs.template).forEach((key) => {\n                this.$set(this.template, key, prefs.template[key]);\n            });\n\n            prefs.columns.forEach((column, index) => {\n                Object.keys(column).forEach((key) => {\n                    this.$set(this.template.columns[index].meta, key, column[key]);\n                });\n            });\n        },\n        savePreferences() {\n            localStorage.setItem(this.preferencesKey, JSON.stringify(this.preferences));\n        },\n        resetPreferences() {\n            localStorage.removeItem(this.preferencesKey);\n            this.search = '';\n            this.init();\n        },\n        getData() {\n            this.loading = true;\n            this.expanded = [];\n\n            axios.get(this.template.readPath, { params: this.readRequest() }).then(({ data }) => {\n                this.body = data;\n                this.loading = false;\n            }).catch((error) => {\n                this.handleError(error);\n                this.loading = false;\n            });\n        },\n        readRequest() {\n            return {\n                columns: this.requestColumns(),\n                meta: {\n                    start: this.start,\n                    length: this.length,\n                    sort: this.template.sort,\n                    total: this.template.total,\n                    enum: this.template.enum,\n                    date: this.template.date,\n                },\n                search: this.search,\n                appends: this.template.appends,\n                filters: this.filters,\n                intervals: this.intervals,\n                params: this.params,\n            };\n        },\n        requestColumns() {\n            return this.template.columns.reduce((columns, column) => {\n                columns.push({\n                    name: column.name,\n                    data: column.data,\n                    meta: {\n                        searchable: column.meta.searchable,\n                        sortable: column.meta.sortable,\n                        sort: column.meta.sort,\n                        total: column.meta.total,\n                        date: column.meta.date,\n                    },\n                    enum: column.enum,\n                });\n\n                return columns;\n            }, []);\n        },\n        exportData(path) {\n            axios.get(path, { params: this.exportRequest() }).then(({ data }) => {\n                toastr.success(data.message);\n            }).catch((error) => {\n                const { status, data } = error.response;\n\n                if (status === 555) {\n                    toastr.error(data.message);\n                }\n\n                this.handleError(error);\n            });\n        },\n        exportRequest() {\n            return {\n                name: this.template.name,\n                columns: this.template.columns,\n                meta: {\n                    start: 0,\n                    length: this.body.count,\n                    sort: this.template.sort,\n                    enum: this.template.enum,\n                    date: this.template.date,\n                    total: false,\n                },\n                search: this.search,\n                appends: this.template.appends,\n                filters: this.filters,\n                intervals: this.intervals,\n                params: this.params,\n            };\n        },\n        ajax(method, path) {\n            axios[method.toLowerCase()](path).then(({ data }) => {\n                toastr.success(data.message);\n                this.getData();\n            }).catch(error => this.handleError(error));\n        },\n        filterUpdate() {\n            if (!this.initialised) {\n                return;\n            }\n\n            this.start = 0;\n            this.getData();\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .table.vue-data-table {\n        margin-bottom: 0;\n    }\n\n    .table-responsive {\n        position: relative;\n        display: block;\n        width: 100%;\n        min-height: .01%;\n        overflow-x: auto;\n    }\n\n    .table-responsive table {\n        font-size: 15px;\n    }\n\n    div.table-bottom-controls {\n        margin-top: .5rem;\n    }\n\n    div.no-records-found {\n        margin-top: 20px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_toastr__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TopControls_vue__ = __webpack_require__(1134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TopControls_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TopControls_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TableHeader_vue__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TableHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TableHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TableBody_vue__ = __webpack_require__(1126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TableBody_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TableBody_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TableFooter_vue__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TableFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__TableFooter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RecordsInfo_vue__ = __webpack_require__(1176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RecordsInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__RecordsInfo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Pagination_vue__ = __webpack_require__(1181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Overlay_vue__ = __webpack_require__(1186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Overlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Overlay_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__responsive_vResponsive__ = __webpack_require__(1191);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        TopControls: __WEBPACK_IMPORTED_MODULE_2__TopControls_vue___default.a, TableHeader: __WEBPACK_IMPORTED_MODULE_3__TableHeader_vue___default.a, TableBody: __WEBPACK_IMPORTED_MODULE_4__TableBody_vue___default.a, TableFooter: __WEBPACK_IMPORTED_MODULE_5__TableFooter_vue___default.a, RecordsInfo: __WEBPACK_IMPORTED_MODULE_6__RecordsInfo_vue___default.a, Overlay: __WEBPACK_IMPORTED_MODULE_8__Overlay_vue___default.a, Pagination: __WEBPACK_IMPORTED_MODULE_7__Pagination_vue___default.a
    },

    directives: {
        responsive: __WEBPACK_IMPORTED_MODULE_9__responsive_vResponsive__["a" /* default */]
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
                __WEBPACK_IMPORTED_MODULE_0_toastr___default.a.warning('\'Custom render function is missing for column: ' + column.name + '\'');
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
        this.getData = Object(__WEBPACK_IMPORTED_MODULE_1_lodash__["debounce"])(this.getData, 100);
        this.init();
    },


    methods: {
        init: function init() {
            var _this = this;

            axios.get(this.path).then(function (_ref) {
                var data = _ref.data;

                _this.template = data.template;
                _this.start = 0;

                var _template$lengthMenu = _slicedToArray(_this.template.lengthMenu, 1);

                _this.length = _template$lengthMenu[0];

                _this.setPreferences();
                _this.getData();
            }).catch(function (error) {
                var _error$response = error.response,
                    status = _error$response.status,
                    data = _error$response.data;


                if (status === 555) {
                    __WEBPACK_IMPORTED_MODULE_0_toastr___default.a.error(data.message);
                }

                _this.handleError(error);
            });
        },
        setPreferences: function setPreferences() {
            var _this2 = this;

            this.setDefaultPreferences();

            if (localStorage.getItem(this.preferencesKey) !== null) {
                this.setUserPreferences();
            }

            this.$nextTick(function () {
                _this2.initialised = true;
            });
        },
        setDefaultPreferences: function setDefaultPreferences() {
            var _this3 = this;

            this.template.columns.forEach(function (_ref2) {
                var meta = _ref2.meta;

                _this3.$set(meta, 'sort', null);
                _this3.$set(meta, 'hidden', false);
            });

            this.$set(this.template, 'sort', false);
        },
        setUserPreferences: function setUserPreferences() {
            var _this4 = this;

            var prefs = JSON.parse(localStorage.getItem(this.preferencesKey));

            Object.keys(prefs.global).forEach(function (key) {
                _this4.$set(_this4, key, prefs.global[key]);
            });

            Object.keys(prefs.template).forEach(function (key) {
                _this4.$set(_this4.template, key, prefs.template[key]);
            });

            prefs.columns.forEach(function (column, index) {
                Object.keys(column).forEach(function (key) {
                    _this4.$set(_this4.template.columns[index].meta, key, column[key]);
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
            var _this5 = this;

            this.loading = true;
            this.expanded = [];

            axios.get(this.template.readPath, { params: this.readRequest() }).then(function (_ref3) {
                var data = _ref3.data;

                _this5.body = data;
                _this5.loading = false;
            }).catch(function (error) {
                _this5.handleError(error);
                _this5.loading = false;
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
                    date: this.template.date
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
            var _this6 = this;

            axios.get(path, { params: this.exportRequest() }).then(function (_ref4) {
                var data = _ref4.data;

                __WEBPACK_IMPORTED_MODULE_0_toastr___default.a.success(data.message);
            }).catch(function (error) {
                var _error$response2 = error.response,
                    status = _error$response2.status,
                    data = _error$response2.data;


                if (status === 555) {
                    __WEBPACK_IMPORTED_MODULE_0_toastr___default.a.error(data.message);
                }

                _this6.handleError(error);
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
            var _this7 = this;

            axios[method.toLowerCase()](path).then(function (_ref5) {
                var data = _ref5.data;

                __WEBPACK_IMPORTED_MODULE_0_toastr___default.a.success(data.message);
                _this7.getData();
            }).catch(function (error) {
                return _this7.handleError(error);
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

/***/ 1134:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1135)
/* template */
var __vue_template__ = __webpack_require__(1156)
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

/***/ 1135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topControls_LengthMenu_vue__ = __webpack_require__(1136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topControls_LengthMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__topControls_LengthMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topControls_ColumnVisibility_vue__ = __webpack_require__(1141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topControls_ColumnVisibility_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__topControls_ColumnVisibility_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topControls_Alignment_vue__ = __webpack_require__(1146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topControls_Alignment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__topControls_Alignment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topControls_StyleSelector_vue__ = __webpack_require__(1151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topControls_StyleSelector_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__topControls_StyleSelector_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'TopControls',

    components: {
        LengthMenu: __WEBPACK_IMPORTED_MODULE_0__topControls_LengthMenu_vue___default.a, ColumnVisibility: __WEBPACK_IMPORTED_MODULE_1__topControls_ColumnVisibility_vue___default.a, Alignment: __WEBPACK_IMPORTED_MODULE_2__topControls_Alignment_vue___default.a, StyleSelector: __WEBPACK_IMPORTED_MODULE_3__topControls_StyleSelector_vue___default.a
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

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1137)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1139)
/* template */
var __vue_template__ = __webpack_require__(1140)
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

/***/ 1137:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1138);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("49f6cc01", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47690d47\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LengthMenu.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-47690d47\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./LengthMenu.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1138:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.dropdown-menu.length-list,\n.dropdown-menu.length-list > .dropdown-content {\n    min-width: unset;\n    width: 64px;\n}\n.dropdown-menu.length-list > .dropdown-content {\n    width: 64px;\n    max-height: 200px;\n    overflow-y: auto;\n}\n.dropdown-menu.length-list > .dropdown-content > a.dropdown-item {\n    padding: .375rem 1rem;\n}\n.icon.angle[aria-hidden=\"true\"] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.icon.angle {\n    -webkit-transition: -webkit-transform .300s ease;\n    transition: -webkit-transform .300s ease;\n    transition: transform .300s ease;\n    transition: transform .300s ease, -webkit-transform .300s ease;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/topControls/resources/assets/js/components/enso/vuedatatable/topControls/LengthMenu.vue"],"names":[],"mappings":";AAyEA;;IAEA,iBAAA;IACA,YAAA;CACA;AAEA;IACA,YAAA;IACA,kBAAA;IACA,iBAAA;CACA;AAEA;IACA,sBAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,iDAAA;IAAA,yCAAA;IAAA,iCAAA;IAAA,+DAAA;CACA","file":"LengthMenu.vue","sourcesContent":["<template>\n\n    <div class=\"dropdown\"\n        v-click-outside=\"hide\"\n        :class=\"{ 'is-active': show }\">\n        <div class=\"dropdown-trigger\"\n            @click=\"show=!show\">\n            <button class=\"button\"\n                aria-haspopup=\"true\"\n                aria-controls=\"dropdown-menu\">\n                <span>{{ length }}</span>\n                <span class=\"icon angle is-small\"\n                        :aria-hidden=\"show\">\n                    <i class=\"fa fa-angle-up\"></i>\n                </span>\n            </button>\n        </div>\n        <div class=\"dropdown-menu length-list animated\"\n            role=\"menu\"\n            :class=\"{ 'fadeIn': show, 'fadeOut': !show }\"\n            v-if=\"show\">\n            <div class=\"dropdown-content has-text-centered\">\n                    <a v-for=\"(value, index) in template.lengthMenu\"\n                    :key=\"index\"\n                        class=\"dropdown-item\"\n                    :class=\"{ 'is-active': value === length }\"\n                    @click=\"$emit('update-length', value);show=false\">\n                    {{ value }}\n                </a>\n            </div>\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport vClickOutside from 'v-click-outside';\n\nexport default {\n    name: 'LengthMenu',\n\n    directives: {\n        clickOutside: vClickOutside.directive,\n    },\n\n    props: {\n        template: {\n            type: Object,\n            required: true,\n        },\n        length: {\n            type: Number,\n            required: true,\n        },\n    },\n\n    data() {\n        return {\n            show: false,\n        };\n    },\n\n    methods: {\n        hide() {\n            this.show = false;\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .dropdown-menu.length-list,\n    .dropdown-menu.length-list > .dropdown-content {\n        min-width: unset;\n        width: 64px;\n    }\n\n    .dropdown-menu.length-list > .dropdown-content {\n        width: 64px;\n        max-height: 200px;\n        overflow-y: auto;\n    }\n\n    .dropdown-menu.length-list > .dropdown-content > a.dropdown-item {\n        padding: .375rem 1rem;\n    }\n\n    .icon.angle[aria-hidden=\"true\"] {\n        transform: rotate(180deg);\n    }\n\n    .icon.angle {\n        transition: transform .300s ease;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_v_click_outside__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    directives: {
        clickOutside: __WEBPACK_IMPORTED_MODULE_0_v_click_outside___default.a.directive
    },

    props: {
        template: {
            type: Object,
            required: true
        },
        length: {
            type: Number,
            required: true
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

/***/ 1140:
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
              _c("span", [_vm._v(_vm._s(_vm.length))]),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "icon angle is-small",
                  attrs: { "aria-hidden": _vm.show }
                },
                [_c("i", { staticClass: "fa fa-angle-up" })]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.show
        ? _c(
            "div",
            {
              staticClass: "dropdown-menu length-list animated",
              class: { fadeIn: _vm.show, fadeOut: !_vm.show },
              attrs: { role: "menu" }
            },
            [
              _c(
                "div",
                { staticClass: "dropdown-content has-text-centered" },
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
                          _vm.show = false
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                " + _vm._s(value) + "\n            "
                      )
                    ]
                  )
                })
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
    require("vue-hot-reload-api")      .rerender("data-v-47690d47", module.exports)
  }
}

/***/ }),

/***/ 1141:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1142)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1144)
/* template */
var __vue_template__ = __webpack_require__(1145)
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

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1143);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("c2bfe1b2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d3481ea\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ColumnVisibility.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d3481ea\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./ColumnVisibility.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.dropdown-menu.column-visibility-list,\n.dropdown-menu.column-visibility-list > .dropdown-content\n {\n    min-width: unset;\n    max-width: 150px;\n}\n.dropdown-menu.column-visibility-list > .dropdown-content {\n    max-height: 300px;\n    overflow-y: auto;\n}\n.dropdown-menu.column-visibility-list > .dropdown-content > a.dropdown-item {\n    padding: .375rem 1rem;\n}\n.icon.angle[aria-hidden=\"true\"] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.icon.angle {\n    -webkit-transition: -webkit-transform .300s ease;\n    transition: -webkit-transform .300s ease;\n    transition: transform .300s ease;\n    transition: transform .300s ease, -webkit-transform .300s ease;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/topControls/resources/assets/js/components/enso/vuedatatable/topControls/ColumnVisibility.vue"],"names":[],"mappings":";AAuEA;;;IAGA,iBAAA;IACA,iBAAA;CACA;AAEA;IACA,kBAAA;IACA,iBAAA;CACA;AAEA;IACA,sBAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,iDAAA;IAAA,yCAAA;IAAA,iCAAA;IAAA,+DAAA;CACA","file":"ColumnVisibility.vue","sourcesContent":["<template>\n\n    <div class=\"dropdown\"\n        v-click-outside=\"hide\"\n        :class=\"{ 'is-active': show }\">\n        <div class=\"dropdown-trigger\"\n            @click=\"show=!show\">\n            <button class=\"button\"\n                aria-haspopup=\"true\"\n                aria-controls=\"dropdown-menu\">\n                <span class=\"icon is-small\">\n                    <i class=\"fa fa-eye\"></i>\n                </span>\n                <span class=\"icon angle is-small\"\n                        :aria-hidden=\"show\">\n                    <i class=\"fa fa-angle-up\"></i>\n                </span>\n            </button>\n        </div>\n        <div class=\"dropdown-menu column-visibility-list animated\"\n                role=\"menu\"\n            :class=\"{ 'fadeIn': show, 'fadeOut': !show }\"\n            v-if=\"show\">\n            <div class=\"dropdown-content has-text-centered\">\n                <a v-for=\"(column, index) in template.columns\"\n                    :key=\"index\"\n                    class=\"dropdown-item\"\n                    :class=\"{ 'is-active': column.meta.visible }\"\n                    @click=\"column.meta.visible = !column.meta.visible;$emit('update-visibility')\">\n                    {{ column.label }}\n                </a>\n            </div>\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport vClickOutside from 'v-click-outside';\n\nexport default {\n    name: 'ColumnVisibility',\n\n    directives: {\n        clickOutside: vClickOutside.directive,\n    },\n\n    props: {\n        template: {\n            type: Object,\n            required: true,\n        },\n    },\n\n    data() {\n        return {\n            show: false,\n        };\n    },\n\n    methods: {\n        hide() {\n            this.show = false;\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .dropdown-menu.column-visibility-list,\n    .dropdown-menu.column-visibility-list > .dropdown-content\n     {\n        min-width: unset;\n        max-width: 150px;\n    }\n\n    .dropdown-menu.column-visibility-list > .dropdown-content {\n        max-height: 300px;\n        overflow-y: auto;\n    }\n\n    .dropdown-menu.column-visibility-list > .dropdown-content > a.dropdown-item {\n        padding: .375rem 1rem;\n    }\n\n    .icon.angle[aria-hidden=\"true\"] {\n        transform: rotate(180deg);\n    }\n\n    .icon.angle {\n        transition: transform .300s ease;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_v_click_outside__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'ColumnVisibility',

    directives: {
        clickOutside: __WEBPACK_IMPORTED_MODULE_0_v_click_outside___default.a.directive
    },

    props: {
        template: {
            type: Object,
            required: true
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

/***/ 1145:
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
              _vm._m(0),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "icon angle is-small",
                  attrs: { "aria-hidden": _vm.show }
                },
                [_c("i", { staticClass: "fa fa-angle-up" })]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.show
        ? _c(
            "div",
            {
              staticClass: "dropdown-menu column-visibility-list animated",
              class: { fadeIn: _vm.show, fadeOut: !_vm.show },
              attrs: { role: "menu" }
            },
            [
              _c(
                "div",
                { staticClass: "dropdown-content has-text-centered" },
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
                    [
                      _vm._v(
                        "\n                " +
                          _vm._s(column.label) +
                          "\n            "
                      )
                    ]
                  )
                })
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-eye" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d3481ea", module.exports)
  }
}

/***/ }),

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1147)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1149)
/* template */
var __vue_template__ = __webpack_require__(1150)
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

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1148);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("50cb26ec", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f6555f1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alignment.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2f6555f1\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Alignment.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.dropdown-menu.alignment-list,\n.dropdown-menu.alignment-list > .dropdown-content\n {\n    min-width: unset;\n    width: 64px;\n}\n.dropdown-menu.alignment-list > .dropdown-content {\n    max-height: 300px;\n    overflow-y: auto;\n}\n.dropdown-menu.alignment-list > .dropdown-content > a.dropdown-item {\n    padding: .375rem 1rem;\n}\n.icon.angle[aria-hidden=\"true\"] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.icon.angle {\n    -webkit-transition: -webkit-transform .300s ease;\n    transition: -webkit-transform .300s ease;\n    transition: transform .300s ease;\n    transition: transform .300s ease, -webkit-transform .300s ease;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/topControls/resources/assets/js/components/enso/vuedatatable/topControls/Alignment.vue"],"names":[],"mappings":";AAkFA;;;IAGA,iBAAA;IACA,YAAA;CACA;AAEA;IACA,kBAAA;IACA,iBAAA;CACA;AAEA;IACA,sBAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,iDAAA;IAAA,yCAAA;IAAA,iCAAA;IAAA,+DAAA;CACA","file":"Alignment.vue","sourcesContent":["<template>\n\n    <div class=\"dropdown\"\n        v-click-outside=\"hide\"\n        :class=\"{ 'is-active': show }\">\n        <div class=\"dropdown-trigger\"\n            @click=\"show=!show\">\n            <button class=\"button\"\n                aria-haspopup=\"true\"\n                aria-controls=\"dropdown-menu\">\n                <span class=\"icon is-small\">\n                    <i class=\"fa fa-align-justify\"></i>\n                </span>\n                <span class=\"icon angle is-small\"\n                        :aria-hidden=\"show\">\n                    <i class=\"fa fa-angle-up\"></i>\n                </span>\n            </button>\n        </div>\n        <div class=\"dropdown-menu alignment-list animated\"\n                role=\"menu\"\n            :class=\"{ 'fadeIn': show, 'fadeOut': !show }\"\n            v-if=\"show\">\n            <div class=\"dropdown-content has-text-centered\">\n                <a v-for=\"(value, key) in template.aligns\"\n                    :key=\"key\"\n                    class=\"dropdown-item\"\n                    :class=\"{ 'is-active': template.align === value }\"\n                    @click=\"template.align = value;show=false\">\n                    <span class=\"icon is-small\">\n                        <i :class=\"icons[key]\"></i>\n                    </span>\n                </a>\n            </div>\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport vClickOutside from 'v-click-outside';\n\nexport default {\n    name: 'Alignment',\n\n    directives: {\n        clickOutside: vClickOutside.directive,\n    },\n\n    props: {\n        template: {\n            type: Object,\n            required: true,\n        },\n    },\n\n    data() {\n        return {\n            show: false,\n            icons: {\n                center: 'fa fa-align-center',\n                left: 'fa fa-align-left',\n                right: 'fa fa-align-right',\n            },\n        };\n    },\n\n    methods: {\n        hide() {\n            this.show = false;\n        },\n        updateColumnVisibility(column) {\n            column.meta.visible = !column.meta.visible;\n            this.$emit('update-column-visibility');\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .dropdown-menu.alignment-list,\n    .dropdown-menu.alignment-list > .dropdown-content\n     {\n        min-width: unset;\n        width: 64px;\n    }\n\n    .dropdown-menu.alignment-list > .dropdown-content {\n        max-height: 300px;\n        overflow-y: auto;\n    }\n\n    .dropdown-menu.alignment-list > .dropdown-content > a.dropdown-item {\n        padding: .375rem 1rem;\n    }\n\n    .icon.angle[aria-hidden=\"true\"] {\n        transform: rotate(180deg);\n    }\n\n    .icon.angle {\n        transition: transform .300s ease;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_v_click_outside__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'Alignment',

    directives: {
        clickOutside: __WEBPACK_IMPORTED_MODULE_0_v_click_outside___default.a.directive
    },

    props: {
        template: {
            type: Object,
            required: true
        }
    },

    data: function data() {
        return {
            show: false,
            icons: {
                center: 'fa fa-align-center',
                left: 'fa fa-align-left',
                right: 'fa fa-align-right'
            }
        };
    },


    methods: {
        hide: function hide() {
            this.show = false;
        },
        updateColumnVisibility: function updateColumnVisibility(column) {
            column.meta.visible = !column.meta.visible;
            this.$emit('update-column-visibility');
        }
    }
});

/***/ }),

/***/ 1150:
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
              _vm._m(0),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "icon angle is-small",
                  attrs: { "aria-hidden": _vm.show }
                },
                [_c("i", { staticClass: "fa fa-angle-up" })]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.show
        ? _c(
            "div",
            {
              staticClass: "dropdown-menu alignment-list animated",
              class: { fadeIn: _vm.show, fadeOut: !_vm.show },
              attrs: { role: "menu" }
            },
            [
              _c(
                "div",
                { staticClass: "dropdown-content has-text-centered" },
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
                          _vm.show = false
                        }
                      }
                    },
                    [
                      _c("span", { staticClass: "icon is-small" }, [
                        _c("i", { class: _vm.icons[key] })
                      ])
                    ]
                  )
                })
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-align-justify" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-2f6555f1", module.exports)
  }
}

/***/ }),

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1152)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1154)
/* template */
var __vue_template__ = __webpack_require__(1155)
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

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1153);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("30e7ee5a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8aab6184\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StyleSelector.vue", function() {
     var newContent = require("!!../../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-8aab6184\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./StyleSelector.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1153:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.dropdown-menu.style-list,\n.dropdown-menu.style-list > .dropdown-content\n {\n    min-width: unset;\n    max-width: 150px;\n}\n.dropdown-menu.style-list > .dropdown-content {\n    max-height: 200px;\n    overflow-y: auto;\n}\n.dropdown-menu.style-list > .dropdown-content > a.dropdown-item {\n    padding: .375rem 1rem;\n}\n.icon.angle[aria-hidden=\"true\"] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.icon.angle {\n    -webkit-transition: -webkit-transform .300s ease;\n    transition: -webkit-transform .300s ease;\n    transition: transform .300s ease;\n    transition: transform .300s ease, -webkit-transform .300s ease;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/topControls/resources/assets/js/components/enso/vuedatatable/topControls/StyleSelector.vue"],"names":[],"mappings":";AAqFA;;;IAGA,iBAAA;IACA,iBAAA;CACA;AAEA;IACA,kBAAA;IACA,iBAAA;CACA;AAEA;IACA,sBAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,iDAAA;IAAA,yCAAA;IAAA,iCAAA;IAAA,+DAAA;CACA","file":"StyleSelector.vue","sourcesContent":["<template>\n\n    <div class=\"dropdown is-right\"\n        v-click-outside=\"hide\"\n        :class=\"{ 'is-active': show }\">\n        <div class=\"dropdown-trigger\"\n            @click=\"show=!show\">\n            <button class=\"button\"\n                aria-haspopup=\"true\"\n                aria-controls=\"dropdown-menu\">\n                <span class=\"icon is-small\">\n                    <i class=\"fa fa-table\"></i>\n                </span>\n                <span class=\"icon angle is-small\"\n                        :aria-hidden=\"show\">\n                    <i class=\"fa fa-angle-up\"></i>\n                </span>\n            </button>\n        </div>\n        <div class=\"dropdown-menu style-list animated\"\n                role=\"menu\"\n            :class=\"{ 'fadeIn': show, 'fadeOut': !show }\"\n            v-if=\"show\">\n            <div class=\"dropdown-content has-text-centered\">\n                <a v-for=\"(style, key) in template.styles\"\n                    :key=\"key\"\n                    class=\"dropdown-item\"\n                    :class=\"{ 'is-active': has(style) }\"\n                    @click=\"toggle(style)\">\n                    {{ key }}\n                </a>\n            </div>\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport vClickOutside from 'v-click-outside';\n\nexport default {\n    name: 'StyleSelector',\n\n    directives: {\n        clickOutside: vClickOutside.directive,\n    },\n\n    props: {\n        template: {\n            type: Object,\n            required: true,\n        },\n    },\n\n    computed: {\n        styles() {\n            return this.template.style.split(' ');\n        },\n    },\n\n    data() {\n        return {\n            show: false,\n        };\n    },\n\n    methods: {\n        hide() {\n            this.show = false;\n        },\n        has(style) {\n            return this.styles.includes(style);\n        },\n        toggle(style) {\n            this.template.style = this.has(style)\n                ? this.styles.filter(value => value !== style).join(' ')\n                : `${this.template.style} ${style}`;\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .dropdown-menu.style-list,\n    .dropdown-menu.style-list > .dropdown-content\n     {\n        min-width: unset;\n        max-width: 150px;\n    }\n\n    .dropdown-menu.style-list > .dropdown-content {\n        max-height: 200px;\n        overflow-y: auto;\n    }\n\n    .dropdown-menu.style-list > .dropdown-content > a.dropdown-item {\n        padding: .375rem 1rem;\n    }\n\n    .icon.angle[aria-hidden=\"true\"] {\n        transform: rotate(180deg);\n    }\n\n    .icon.angle {\n        transition: transform .300s ease;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_v_click_outside__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'StyleSelector',

    directives: {
        clickOutside: __WEBPACK_IMPORTED_MODULE_0_v_click_outside___default.a.directive
    },

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

    data: function data() {
        return {
            show: false
        };
    },


    methods: {
        hide: function hide() {
            this.show = false;
        },
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

/***/ 1155:
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
      staticClass: "dropdown is-right",
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
              _vm._m(0),
              _vm._v(" "),
              _c(
                "span",
                {
                  staticClass: "icon angle is-small",
                  attrs: { "aria-hidden": _vm.show }
                },
                [_c("i", { staticClass: "fa fa-angle-up" })]
              )
            ]
          )
        ]
      ),
      _vm._v(" "),
      _vm.show
        ? _c(
            "div",
            {
              staticClass: "dropdown-menu style-list animated",
              class: { fadeIn: _vm.show, fadeOut: !_vm.show },
              attrs: { role: "menu" }
            },
            [
              _c(
                "div",
                { staticClass: "dropdown-content has-text-centered" },
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
                    [
                      _vm._v(
                        "\n                " + _vm._s(key) + "\n            "
                      )
                    ]
                  )
                })
              )
            ]
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-table" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-8aab6184", module.exports)
  }
}

/***/ }),

/***/ 1156:
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
            _c("span", { staticClass: "icon" }, [
              _c("i", { class: _vm.template.icon })
            ]),
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
              _c("span", { staticClass: "icon is-small" }, [
                _c("i", { class: button.icon })
              ])
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
            [_vm._m(0)]
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
            [_vm._m(1)]
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
            _vm._m(2)
          ])
        ]
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-refresh" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-undo" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left" }, [
      _c("i", { staticClass: "fa fa-search" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-255b68c6", module.exports)
  }
}

/***/ }),

/***/ 1157:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1158)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1160)
/* template */
var __vue_template__ = __webpack_require__(1161)
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

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1159);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("05ab47d4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-706cd726\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableHeader.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-706cd726\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableHeader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nth.vue-table-header {\n    white-space:nowrap;\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\n.table-header-controls .fa-sort,\n.table-header-controls .fa-times {\n    font-weigth: 100;\n    opacity: 0.4;\n}\n.table-header-controls .fa-times:hover {\n    opacity: 1;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/TableHeader.vue"],"names":[],"mappings":";AAuFA;IACA,mBAAA;IACA,2BAAA;QAAA,sBAAA;CACA;AAEA;;IAEA,iBAAA;IACA,aAAA;CACA;AAEA;IACA,WAAA;CACA","file":"TableHeader.vue","sourcesContent":["<template>\n\n    <thead>\n        <tr :class=\"template.style\">\n            <th :class=\"template.align\"\n                v-if=\"template.crtNo\">\n                {{ i18n(template.labels.crtNo) }}\n            </th>\n            <th class=\"vue-table-header\"\n                :class=\"template.align\"\n                v-for=\"column in template.columns\"\n                :key=\"column.label\"\n                v-if=\"column.meta.visible && !column.meta.hidden\">\n                <span>\n                    {{ i18n(column.label) }}\n                    <span class=\"table-header-controls\">\n                        <span class=\"icon is-small\"\n                            @click=\"toggleSort($event, column)\"\n                            v-if=\"column.meta.sortable\">\n                            <i v-if=\"!column.meta.sort\" class=\"fa fa-sort\"></i>\n                            <i v-else-if=\"column.meta.sort === 'ASC'\" class=\"fa fa-sort-asc\"></i>\n                            <i v-else class=\"fa fa-sort-desc\"></i>\n                        </span>\n                        <a class=\"delete is-small\"\n                            v-if=\"column.meta.sort\"\n                            @click=\"clearColumnSort(column)\">\n                        </a>\n                    </span>\n                </span>\n            </th>\n            <th :class=\"template.align\"\n                v-if=\"template.actions\">\n                {{ i18n(template.labels.actions) }}\n            </th>\n        </tr>\n    </thead>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'Header',\n\n    props: {\n        template: {\n            type: Object,\n            required: true,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n\n    methods: {\n        toggleSort(event, { meta }) {\n            const { sort } = meta;\n\n            if (!event.shiftKey) {\n                this.clearSort();\n            }\n\n            meta.sort = sort === 'ASC' ? 'DESC' : 'ASC';\n            this.template.sort = true;\n            this.$emit('sort-update');\n        },\n        clearColumnSort({ meta }) {\n            meta.sort = null;\n\n            if (!this.template.columns.find(column => column.meta.sort !== null)) {\n                this.template.sort = false;\n            }\n\n            this.$emit('sort-update');\n        },\n        clearSort() {\n            this.template.columns.forEach(({ meta }) => {\n                meta.sort = null;\n            });\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    th.vue-table-header {\n        white-space:nowrap;\n        align-content: center;\n    }\n\n    .table-header-controls .fa-sort,\n    .table-header-controls .fa-times {\n        font-weigth: 100;\n        opacity: 0.4;\n    }\n\n    .table-header-controls .fa-times:hover {\n        opacity: 1;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1160:
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

/***/ 1161:
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
                              staticClass: "icon is-small",
                              on: {
                                click: function($event) {
                                  _vm.toggleSort($event, column)
                                }
                              }
                            },
                            [
                              !column.meta.sort
                                ? _c("i", { staticClass: "fa fa-sort" })
                                : column.meta.sort === "ASC"
                                  ? _c("i", { staticClass: "fa fa-sort-asc" })
                                  : _c("i", { staticClass: "fa fa-sort-desc" })
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

/***/ 1162:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1163);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3390614a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5dbfa9fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableBody.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5dbfa9fc\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./TableBody.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\ntd.table-crt-no {\n    white-space:nowrap;\n    -ms-flex-line-pack: center;\n        align-content: center;\n}\n.table-crt-no .fa-plus-square,\n.table-crt-no .fa-minus-square {\n    cursor: pointer;\n}\ntd.table-actions {\n    padding: .35em .5em;\n}\nspan.table-action-buttons {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\n.button.is-small.is-table-button {\n    height: 1.6em;\n    width: 1.6em;\n    font-size: .9em;\n}\n.tag.is-table-tag {\n    font-size: 0.8rem;\n    font-weight: bold;\n    height: 1.4em;\n    padding: 7px;\n}\nli.child-row:not(:last-child) {\n    border-bottom: 1px solid #efefef;\n}\nli.child-row {\n    padding: 0.5em 0;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/TableBody.vue"],"names":[],"mappings":";AAwOA;IACA,mBAAA;IACA,2BAAA;QAAA,sBAAA;CACA;AAEA;;IAEA,gBAAA;CACA;AAEA;IACA,oBAAA;CACA;AAEA;IACA,4BAAA;IAAA,4BAAA;IAAA,qBAAA;CACA;AAEA;IACA,cAAA;IACA,aAAA;IACA,gBAAA;CACA;AAEA;IACA,kBAAA;IACA,kBAAA;IACA,cAAA;IACA,aAAA;CACA;AAEA;IACA,iCAAA;CACA;AAEA;IACA,iBAAA;CACA","file":"TableBody.vue","sourcesContent":["<template>\n\n    <tbody>\n        <tr v-for=\"(row, index) in body.data\"\n            :key=\"index\">\n            <td class=\"table-crt-no\"\n                :class=\"template.align\"\n                v-if=\"template.crtNo && !isChild(row)\">\n                {{ getIndex(row) }}\n                <span class=\"icon is-small\"\n                    v-if=\"hiddenCount\"\n                    @click=\"toggleExpand(row, index)\">\n                    <i class=\"fa fa-minus-square\"\n                        v-if=\"isExpanded(row)\">\n                    </i>\n                    <i class=\"fa fa-plus-square\"\n                        v-else>\n                    </i>\n                </span>\n            </td>\n            <td :class=\"template.align\"\n                v-for=\"(column, index) in template.columns\"\n                :key=\"index\"\n                v-if=\"column.meta.visible && !column.meta.hidden && !isChild(row)\">\n                <span v-if=\"column.meta.boolean\"\n                    v-html=\"row[column.name] ? template.boolean[1] : template.boolean[0]\">\n                </span>\n                <span v-else-if=\"column.meta.render\"\n                    v-html=\"customRender(row, column)\">\n                </span>\n                <span v-else-if=\"column.meta.translation\">{{ i18n(row[column.name]) }}</span>\n                <span v-else>{{ row[column.name] }}</span>\n            </td>\n            <td class=\"table-actions\"\n                :class=\"template.align\"\n                v-if=\"template.actions && !isChild(row)\">\n                <span class=\"table-action-buttons\">\n                    <a v-for=\"(button, index) in template.buttons.row\"\n                        :key=\"index\"\n                        class=\"button is-small is-table-button has-margin-left-small\"\n                        :class=\"button.class\"\n                        :href=\"button.action === 'href' ? getPath(button, row.dtRowId) : null\"\n                        @click=\"button.confirmation ? showModal(button, row) : doAction(button, row)\">\n                        <span class=\"icon is-small\">\n                            <i :class=\"button.icon\"></i>\n                        </span>\n                    </a>\n                </span>\n            </td>\n            <td :colspan=\"hiddenColSpan\"\n                :class=\"template.align\"\n                v-if=\"isChild(row)\">\n                <ul>\n                    <li class=\"child-row\"\n                        v-for=\"column in row\"\n                        :key=\"column.label\">\n                        <b>{{ column.label }}</b>: {{ column.value }}\n                    </li>\n                </ul>\n            </td>\n        </tr>\n        <modal v-if=\"modal\"\n            :show=\"modal\"\n            :i18n=\"i18n\"\n            :message=\"button.message\"\n            @cancel-action=\"closeModal()\"\n            @commit-action=\"doAction(button, row)\">\n        </modal>\n    </tbody>\n\n</template>\n\n<script>\n\nimport TableBody from './TableBody.vue';\nimport Modal from './Modal.vue';\n\nexport default {\n    name: 'TableBody',\n\n    components: { TableBody, Modal },\n\n    props: {\n        template: {\n            type: Object,\n            required: true,\n        },\n        body: {\n            type: Object,\n            required: true,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n        customRender: {\n            type: Function,\n            required: true,\n        },\n        start: {\n            type: Number,\n            required: true,\n        },\n        expanded: {\n            type: Array,\n            required: true,\n        },\n    },\n\n    computed: {\n        hiddenColumns() {\n            return this.template.columns\n                .filter(column => column.meta.hidden && column.meta.visible);\n        },\n        hiddenCount() {\n            return this.hiddenColumns.length;\n        },\n        hiddenColSpan() {\n            return this.template.columns.length - this.hiddenColumns.length\n                + (this.template.actions ? 2 : 1);\n        },\n    },\n\n    data() {\n        return {\n            modal: false,\n            row: null,\n            button: null,\n        };\n    },\n\n    watch: {\n        hiddenCount: {\n            handler(newVal) {\n                if (!newVal) {\n                    this.removeChilds();\n                }\n            },\n        },\n    },\n\n    methods: {\n        getPath(button, dtRowId) {\n            return button.path.replace('dtRowId', dtRowId);\n        },\n        showModal(button, row) {\n            this.row = row;\n            this.button = button;\n            this.modal = true;\n        },\n        closeModal() {\n            this.modal = false;\n            this.row = null;\n            this.button = null;\n        },\n        doAction(button, row) {\n            if (this.modal) {\n                this.modal = false;\n            }\n\n            if (button.event) {\n                this.$emit(button.event, row);\n            }\n\n            if (button.action === 'ajax') {\n                this.$emit('ajax', button.method, this.getPath(button, row.dtRowId));\n                return;\n            }\n\n            if (button.action === 'router') {\n                this.$router.push({ name: button.route, params: this.getRouteParams(button, row) });\n            }\n        },\n        getRouteParams(button, row) {\n            const params = {\n                id: row.dtRowId,\n            };\n\n            if (button.params) {\n                return Object.assign(params, button.params);\n            }\n\n            return params;\n        },\n        getIndex(row) {\n            return this.body.data.filter(r => !this.isChild(r))\n                .findIndex(r => r.dtRowId === row.dtRowId) + this.start + 1;\n        },\n        isExpanded(row) {\n            return this.expanded.includes(row.dtRowId);\n        },\n        isChild(row) {\n            return Array.isArray(row);\n        },\n        toggleExpand(row, index) {\n            if (!this.isExpanded(row)) {\n                this.expanded.push(row.dtRowId);\n                this.addChildRow(row, index);\n                return;\n            }\n\n            const idx = this.expanded.findIndex(id => id === row.dtRowId);\n            this.expanded.splice(idx, 1);\n            this.body.data.splice(index + 1, 1);\n        },\n        addChildRow(row, index) {\n            const newRow = this.hiddenColumns.reduce((collector, column) => {\n                collector.push({ label: column.label, value: row[column.name] });\n                return collector;\n            }, []);\n\n            this.body.data.splice(index + 1, 0, newRow);\n        },\n        removeChilds() {\n            const indexes = [];\n\n            this.body.data.forEach((row, index) => {\n                if (this.isChild(row)) {\n                    indexes.push(index);\n                }\n            });\n\n            indexes.sort((a, b) => a < b).forEach(index => this.body.data.splice(index, 1));\n\n            this.expanded.splice(0);\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    td.table-crt-no {\n        white-space:nowrap;\n        align-content: center;\n    }\n\n    .table-crt-no .fa-plus-square,\n    .table-crt-no .fa-minus-square {\n        cursor: pointer;\n    }\n\n    td.table-actions {\n        padding: .35em .5em;\n    }\n\n    span.table-action-buttons {\n        display: inline-flex;\n    }\n\n    .button.is-small.is-table-button {\n        height: 1.6em;\n        width: 1.6em;\n        font-size: .9em;\n    }\n\n    .tag.is-table-tag {\n        font-size: 0.8rem;\n        font-weight: bold;\n        height: 1.4em;\n        padding: 7px;\n    }\n\n    li.child-row:not(:last-child) {\n        border-bottom: 1px solid #efefef;\n    }\n\n    li.child-row {\n        padding: 0.5em 0;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TableBody_vue__ = __webpack_require__(1126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TableBody_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TableBody_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal_vue__ = __webpack_require__(1165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Modal_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'TableBody',

    components: { TableBody: __WEBPACK_IMPORTED_MODULE_0__TableBody_vue___default.a, Modal: __WEBPACK_IMPORTED_MODULE_1__Modal_vue___default.a },

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

/***/ 1165:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1166)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1168)
/* template */
var __vue_template__ = __webpack_require__(1169)
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

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1167);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("ff5e213e", content, false);
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

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.modal.is-active {\n    z-index: 1100;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/Modal.vue"],"names":[],"mappings":";AA8DA;IACA,cAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n\n    <transition enter-active-class=\"animated fadeIn\"\n        leave-active-class=\"animated fadeOut\">\n        <div class=\"modal\"\n            :class=\"{ 'is-active': show }\"\n            v-if=\"show\">\n            <div class=\"modal-background\"></div>\n            <div class=\"table-modal modal-content\">\n                <div class=\"box\">\n                    <slot name=\"content\">\n                        <h5 class=\"subtitle is-5\">\n                            {{ i18n(message || \"Are you sure that you want to perform this action?\") }}\n                        </h5>\n                    </slot>\n                    <hr>\n                    <div class=\"level\">\n                        <div class=\"level-left\"></div>\n                        <div class=\"level-right\">\n                            <div class=\"level-item\">\n                                <slot name=\"controls\">\n                                    <button class=\"button is-success\"\n                                          @click=\"$emit('cancel-action')\">\n                                          {{ i18n(\"Cancel\") }}\n                                      </button>\n                                      <button class=\"button is-danger has-margin-left-small\"\n                                        @click=\"$emit('commit-action')\">\n                                        {{ i18n(\"Yes\") }}\n                                    </button>\n                                </slot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </transition>\n\n</template>\n\n<script>\n\nexport default {\n    props: {\n        show: {\n            type: Boolean,\n            required: true,\n        },\n        message: {\n            type: String,\n            default: null,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .modal.is-active {\n        z-index: 1100;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1168:
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

/***/ 1169:
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
      _vm.show
        ? _c(
            "div",
            { staticClass: "modal", class: { "is-active": _vm.show } },
            [
              _c("div", { staticClass: "modal-background" }),
              _vm._v(" "),
              _c("div", { staticClass: "table-modal modal-content" }, [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._t("content", [
                      _c("h5", { staticClass: "subtitle is-5" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(
                              _vm.i18n(
                                _vm.message ||
                                  "Are you sure that you want to perform this action?"
                              )
                            ) +
                            "\n                    "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c("hr"),
                    _vm._v(" "),
                    _c("div", { staticClass: "level" }, [
                      _c("div", { staticClass: "level-left" }),
                      _vm._v(" "),
                      _c("div", { staticClass: "level-right" }, [
                        _c(
                          "div",
                          { staticClass: "level-item" },
                          [
                            _vm._t("controls", [
                              _c(
                                "button",
                                {
                                  staticClass: "button is-success",
                                  on: {
                                    click: function($event) {
                                      _vm.$emit("cancel-action")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                      " +
                                      _vm._s(_vm.i18n("Cancel")) +
                                      "\n                                  "
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass:
                                    "button is-danger has-margin-left-small",
                                  on: {
                                    click: function($event) {
                                      _vm.$emit("commit-action")
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(_vm.i18n("Yes")) +
                                      "\n                                "
                                  )
                                ]
                              )
                            ])
                          ],
                          2
                        )
                      ])
                    ])
                  ],
                  2
                )
              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-446c799f", module.exports)
  }
}

/***/ }),

/***/ 1170:
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
              ? _c(
                  "td",
                  { staticClass: "table-crt-no", class: _vm.template.align },
                  [
                    _vm._v(
                      "\n            " +
                        _vm._s(_vm.getIndex(row)) +
                        "\n            "
                    ),
                    _vm.hiddenCount
                      ? _c(
                          "span",
                          {
                            staticClass: "icon is-small",
                            on: {
                              click: function($event) {
                                _vm.toggleExpand(row, index)
                              }
                            }
                          },
                          [
                            _vm.isExpanded(row)
                              ? _c("i", { staticClass: "fa fa-minus-square" })
                              : _c("i", { staticClass: "fa fa-plus-square" })
                          ]
                        )
                      : _vm._e()
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm._l(_vm.template.columns, function(column, index) {
              return column.meta.visible &&
                !column.meta.hidden &&
                !_vm.isChild(row)
                ? _c("td", { key: index, class: _vm.template.align }, [
                    column.meta.boolean
                      ? _c("span", {
                          domProps: {
                            innerHTML: _vm._s(
                              row[column.name]
                                ? _vm.template.boolean[1]
                                : _vm.template.boolean[0]
                            )
                          }
                        })
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
                            _c("span", { staticClass: "icon is-small" }, [
                              _c("i", { class: button.icon })
                            ])
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
              "cancel-action": function($event) {
                _vm.closeModal()
              },
              "commit-action": function($event) {
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

/***/ 1171:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1172)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1174)
/* template */
var __vue_template__ = __webpack_require__(1175)
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

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1173);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("414a3a78", content, false);
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

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"TableFooter.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1174:
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

/***/ 1175:
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

/***/ 1176:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1177)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1179)
/* template */
var __vue_template__ = __webpack_require__(1180)
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

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1178);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3e55b7da", content, false);
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

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.table-entries-info {\n    font-size: 15px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/RecordsInfo.vue"],"names":[],"mappings":";AAyCA;IACA,gBAAA;CACA","file":"RecordsInfo.vue","sourcesContent":["<template>\n\n    <span class=\"table-entries-info\">\n        {{ `${i18n('From')} ${start + 1} ${i18n('to')} ${(start + length) <= body.filtered ? start + length : body.filtered} \\\n        ${i18n('of')} ${body.filtered} ${i18n('entries')}` }}\n        <span v-if=\"body.filtered !== body.count\">\n            {{ `(${i18n('filtered')} ${i18n('from')} ${body.count} \\\n            ${i18n('total')} ${i18n('records')})` }}\n        </span>\n    </span>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'RecordsInfo',\n\n    props: {\n        start: {\n            type: Number,\n            required: true,\n        },\n        length: {\n            type: Number,\n            required: true,\n        },\n        body: {\n            type: Object,\n            required: true,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .table-entries-info {\n        font-size: 15px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1179:
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

/***/ 1180:
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

/***/ 1181:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1182)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1184)
/* template */
var __vue_template__ = __webpack_require__(1185)
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

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1183);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("b1e72fa2", content, false);
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

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nnav.table-navigation {\n    max-width: 425px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/Pagination.vue"],"names":[],"mappings":";AA+HA;IACA,iBAAA;CACA","file":"Pagination.vue","sourcesContent":["<template>\n\n    <nav class=\"table-pagination pagination is-small\"\n        role=\"navigation\"\n        aria-label=\"pagination\">\n        <a class=\"pagination-previous\"\n            :disabled=\"page === 1\"\n            @click=\"jumpTo(page - 1)\">\n            {{ i18n('Previous') }}\n        </a>\n        <a class=\"pagination-next\"\n            :disabled=\"page === pages\"\n            @click=\"jumpTo(page + 1)\">\n            {{ i18n('Next') }}\n        </a>\n        <ul class=\"pagination-list\">\n            <li>\n                <a class=\"pagination-link\"\n                    :class=\"{ 'is-current': page === 1 }\"\n                    @click=\"jumpTo(1)\">\n                    1\n                </a>\n            </li>\n            <li v-if=\"pages > 5 && !atStart\">\n                <span class=\"pagination-ellipsis\">\n                    &hellip;\n                </span>\n            </li>\n            <li v-for=\"i in middlePages\"\n                :key=\"i\">\n                <a class=\"pagination-link\"\n                    :class=\"{ 'is-current': page === i }\"\n                    @click=\"jumpTo(i)\">\n                    {{ i }}\n                </a>\n            </li>\n            <li v-if=\"pages > 5 && !atEnd\">\n                <span class=\"pagination-ellipsis\">\n                    &hellip;\n                </span>\n            </li>\n            <li v-if=\"pages > 1\">\n                <a class=\"pagination-link\"\n                    :class=\"{ 'is-current': page === pages }\"\n                    @click=\"jumpTo(pages)\">\n                    {{ pages }}\n                </a>\n            </li>\n        </ul>\n    </nav>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'Pagination',\n\n    props: {\n        records: {\n            type: Number,\n            required: true,\n        },\n        start: {\n            type: Number,\n            required: true,\n        },\n        length: {\n            type: Number,\n            required: true,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n\n    computed: {\n        page() {\n            return (this.start / this.length) + 1;\n        },\n        pages() {\n            return Math.ceil(this.records / this.length);\n        },\n        atStart() {\n            return this.page < 4;\n        },\n        atEnd() {\n            return this.pages - this.page < 3;\n        },\n        middlePages() {\n            const pages = [];\n\n            if (this.atStart) {\n                const max = Math.min(this.pages - 1, 4);\n                for (let i = 2; i <= max; i++) {\n                    pages.push(i);\n                }\n\n                return pages;\n            }\n\n            if (this.atEnd) {\n                pages.push(this.pages - 3, this.pages - 2, this.pages - 1);\n                return pages;\n            }\n\n            pages.push(this.page - 1, this.page, this.page + 1);\n\n            return pages;\n        },\n    },\n\n    methods: {\n        jumpTo(page) {\n            if (page === this.page || page < 1 || page > this.pages) {\n                return;\n            }\n\n            this.$emit('jump-to', (page - 1) * this.length);\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    nav.table-navigation {\n        max-width: 425px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1184:
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

/***/ 1185:
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

/***/ 1186:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1187)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1189)
/* template */
var __vue_template__ = __webpack_require__(1190)
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

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("77398b93", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f76c297c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Overlay.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f76c297c\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Overlay.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.vdt-overlay {\n    background: rgba(255, 255, 255, 0.4);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.vdt-overlay-loader {\n    margin: auto;\n    -webkit-animation: spinAround 500ms infinite linear;\n    animation: spinAround 500ms infinite linear;\n    border-radius: 290486px;\n    content: \"\";\n    display: block;\n    position: relative;\n    width: 2em;\n    height: 2em;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/Overlay.vue"],"names":[],"mappings":";AA6BA;IACA,qCAAA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;CACA;AAEA;IACA,aAAA;IACA,oDAAA;IACA,4CAAA;IACA,wBAAA;IACA,YAAA;IACA,eAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;CACA","file":"Overlay.vue","sourcesContent":["<template>\n\n    <div class=\"vdt-overlay is-overlay\">\n        <div class=\"vdt-overlay-loader\"\n            :style=\"overlay\">\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'Overlay',\n\n    computed: {\n        overlay() {\n            return {\n                border: '2px solid #00d1b2',\n                'border-right-color': 'transparent',\n                'border-top-color': 'transparent',\n            };\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .vdt-overlay {\n        background: rgba(255, 255, 255, 0.4);\n        display: flex;\n    }\n\n    .vdt-overlay-loader {\n        margin: auto;\n        -webkit-animation: spinAround 500ms infinite linear;\n        animation: spinAround 500ms infinite linear;\n        border-radius: 290486px;\n        content: \"\";\n        display: block;\n        position: relative;\n        width: 2em;\n        height: 2em;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1189:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Overlay',

    computed: {
        overlay: function overlay() {
            return {
                border: '2px solid #00d1b2',
                'border-right-color': 'transparent',
                'border-top-color': 'transparent'
            };
        }
    }
});

/***/ }),

/***/ 1190:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "vdt-overlay is-overlay" }, [
    _c("div", { staticClass: "vdt-overlay-loader", style: _vm.overlay })
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-f76c297c", module.exports)
  }
}

/***/ }),

/***/ 1191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_resize_detector__ = __webpack_require__(1192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_resize_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_resize_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResponsiveTable__ = __webpack_require__(1203);



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

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach                 = __webpack_require__(1127).forEach;
var elementUtilsMaker       = __webpack_require__(1193);
var listenerHandlerMaker    = __webpack_require__(1194);
var idGeneratorMaker        = __webpack_require__(1195);
var idHandlerMaker          = __webpack_require__(1196);
var reporterMaker           = __webpack_require__(1197);
var browserDetector         = __webpack_require__(1128);
var batchProcessorMaker     = __webpack_require__(1198);
var stateHandler            = __webpack_require__(1200);

//Detection strategies.
var objectStrategyMaker     = __webpack_require__(1201);
var scrollStrategyMaker     = __webpack_require__(1202);

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

/***/ 1193:
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

/***/ 1194:
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

/***/ 1195:
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

/***/ 1196:
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

/***/ 1197:
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

/***/ 1198:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1199);

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

/***/ 1199:
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

/***/ 1200:
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

/***/ 1201:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */



var browserDetector = __webpack_require__(1128);

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

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */



var forEach = __webpack_require__(1127).forEach;

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

                if (width !== element.lastWidth || height !== element.lastHeight) {
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

/***/ 1203:
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

/***/ 1204:
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

/***/ 1516:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_vuedatatable_VueTable_vue__ = __webpack_require__(1130);
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
//





/* harmony default export */ __webpack_exports__["default"] = ({
    components: { VueTable: __WEBPACK_IMPORTED_MODULE_1__components_enso_vuedatatable_VueTable_vue___default.a },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__'])),

    data: function data() {
        return {
            path: route('system.menus.initTable', [], false)
        };
    },


    methods: {
        customRender: function customRender(row, column) {
            switch (column.name) {
                case 'icon':
                    return '<i class="' + row[column.name] + '"></i>';
                default:
                    toastr.warning('render for column ' + column.name + ' is not defined.');
                    return row[column.name];
            }
        }
    }
});

/***/ }),

/***/ 1517:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vue-table", {
    attrs: {
      path: _vm.path,
      i18n: _vm.__,
      "custom-render": _vm.customRender,
      id: "menus"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4426bb54", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9tZW51cy9JbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9jb2xsZWN0aW9uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvYnJvd3Nlci1kZXRlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWU/MTkxNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlPzdjYWEiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvTGVuZ3RoTWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlPzJkMDQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlPzI2OTciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9MZW5ndGhNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvTGVuZ3RoTWVudS52dWU/M2I5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQ29sdW1uVmlzaWJpbGl0eS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0NvbHVtblZpc2liaWxpdHkudnVlPzkxMzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0NvbHVtblZpc2liaWxpdHkudnVlPzZlZTQiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQ29sdW1uVmlzaWJpbGl0eS52dWU/MTkzZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZT81ZmI1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9BbGlnbm1lbnQudnVlPzJlMWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9BbGlnbm1lbnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9BbGlnbm1lbnQudnVlP2VmYTIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL1N0eWxlU2VsZWN0b3IudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZT8zNTNlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZT8yYjM3Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvU3R5bGVTZWxlY3Rvci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL1N0eWxlU2VsZWN0b3IudnVlPzk3ODciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZT9lNTFkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZT8yN2IwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWU/ODEwZiIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlPzQ2YjQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWU/YTYyYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZT8zMmVkIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWU/ODdiZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlPzcwMTYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZT8wZDRlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlP2U4MzQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlPzcyYjciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZT8zMWM3Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWU/MTJjMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWU/MDNmMSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlP2NhZWMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZT85ZjU3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWU/YWY3YSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWU/YjU0NyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZT8wYzVkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWU/MGM3NSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWU/NDZhZiIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZT83ODgwIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNwb25zaXZlL3ZSZXNwb25zaXZlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9lbGVtZW50LXV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvbGlzdGVuZXItaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2lkLWdlbmVyYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2lkLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9yZXBvcnRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmF0Y2gtcHJvY2Vzc29yL3NyYy9iYXRjaC1wcm9jZXNzb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhdGNoLXByb2Nlc3Nvci9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9zdGF0ZS1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvZGV0ZWN0aW9uLXN0cmF0ZWd5L29iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2RldGVjdGlvbi1zdHJhdGVneS9zY3JvbGwuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc3BvbnNpdmUvUmVzcG9uc2l2ZVRhYmxlLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWU/ZjkxMyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vbWVudXMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL21lbnVzL0luZGV4LnZ1ZT83ODMyIl0sIm5hbWVzIjpbImluc2VydGVkIiwiZWwiLCJiaW5kaW5nIiwiY29udGV4dCIsInRhYmxlIiwiZXJkIiwicmVzaXplRGV0ZWN0b3IiLCJzdHJhdGVneSIsInJlc2l6ZSIsImxpc3RlblRvIiwiUmVzcG9uc2l2ZVRhYmxlIiwiaGlkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInNjcm9sbFdpZHRoIiwiY29sdW1ucyIsInRlbXBsYXRlIiwiZmlsdGVyIiwiY29sdW1uIiwibWV0YSIsInZpc2libGUiLCJoaWRkZW4iLCJsZW5ndGgiLCJyZXRyeUZpdCIsInNob3VsZG50UmVzaXplIiwiZml0IiwiJG5leHRUaWNrIiwic2hvdWxkSGlkZSIsImhpZGVDb2x1bW5zIiwic2hvdWxkVW5oaWRlIiwic2hvd0NvbHVtbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7QUFDQSwrQ0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFD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Y2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00NDI2YmI1NFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9tZW51cy9JbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDQyNmJiNTRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NDI2YmI1NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vbWVudXMvSW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDczXG4vLyBtb2R1bGUgY2h1bmtzID0gOCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWRiZmE5ZmNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVCb2R5LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGFibGVCb2R5LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWRiZmE5ZmNcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UYWJsZUJvZHkudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01ZGJmYTlmY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTVkYmZhOWZjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEyNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG4vKipcbiAqIExvb3BzIHRocm91Z2ggdGhlIGNvbGxlY3Rpb24gYW5kIGNhbGxzIHRoZSBjYWxsYmFjayBmb3IgZWFjaCBlbGVtZW50LiBpZiB0aGUgY2FsbGJhY2sgcmV0dXJucyB0cnV0aHksIHRoZSBsb29wIGlzIGJyb2tlbiBhbmQgcmV0dXJucyB0aGUgc2FtZSB2YWx1ZS5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSB7Kn0gY29sbGVjdGlvbiBUaGUgY29sbGVjdGlvbiB0byBsb29wIHRocm91Z2guIE5lZWRzIHRvIGhhdmUgYSBsZW5ndGggcHJvcGVydHkgc2V0IGFuZCBoYXZlIGluZGljZXMgc2V0IGZyb20gMCB0byBsZW5ndGggLSAxLlxuICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCBlbGVtZW50LiBUaGUgZWxlbWVudCB3aWxsIGJlIGdpdmVuIGFzIGEgcGFyYW1ldGVyIHRvIHRoZSBjYWxsYmFjay4gSWYgdGhpcyBjYWxsYmFjayByZXR1cm5zIHRydXRoeSwgdGhlIGxvb3AgaXMgYnJva2VuIGFuZCB0aGUgc2FtZSB2YWx1ZSBpcyByZXR1cm5lZC5cbiAqIEByZXR1cm5zIHsqfSBUaGUgdmFsdWUgdGhhdCBhIGNhbGxiYWNrIGhhcyByZXR1cm5lZCAoaWYgdHJ1dGh5KS4gT3RoZXJ3aXNlIG5vdGhpbmcuXG4gKi9cbnV0aWxzLmZvckVhY2ggPSBmdW5jdGlvbihjb2xsZWN0aW9uLCBjYWxsYmFjaykge1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBjb2xsZWN0aW9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBjYWxsYmFjayhjb2xsZWN0aW9uW2ldKTtcbiAgICAgICAgaWYocmVzdWx0KSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9XG4gICAgfVxufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9jb2xsZWN0aW9uLXV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkZXRlY3RvciA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbmRldGVjdG9yLmlzSUUgPSBmdW5jdGlvbih2ZXJzaW9uKSB7XG4gICAgZnVuY3Rpb24gaXNBbnlJZVZlcnNpb24oKSB7XG4gICAgICAgIHZhciBhZ2VudCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgcmV0dXJuIGFnZW50LmluZGV4T2YoXCJtc2llXCIpICE9PSAtMSB8fCBhZ2VudC5pbmRleE9mKFwidHJpZGVudFwiKSAhPT0gLTEgfHwgYWdlbnQuaW5kZXhPZihcIiBlZGdlL1wiKSAhPT0gLTE7XG4gICAgfVxuXG4gICAgaWYoIWlzQW55SWVWZXJzaW9uKCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGlmKCF2ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIC8vU2hhbWVsZXNzbHkgc3RvbGVuIGZyb20gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vcGFkb2xzZXkvNTI3NjgzXG4gICAgdmFyIGllVmVyc2lvbiA9IChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdW5kZWYsXG4gICAgICAgICAgICB2ID0gMyxcbiAgICAgICAgICAgIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksXG4gICAgICAgICAgICBhbGwgPSBkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJpXCIpO1xuXG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGRpdi5pbm5lckhUTUwgPSBcIjwhLS1baWYgZ3QgSUUgXCIgKyAoKyt2KSArIFwiXT48aT48L2k+PCFbZW5kaWZdLS0+XCI7XG4gICAgICAgIH1cbiAgICAgICAgd2hpbGUgKGFsbFswXSk7XG5cbiAgICAgICAgcmV0dXJuIHYgPiA0ID8gdiA6IHVuZGVmO1xuICAgIH0oKSk7XG5cbiAgICByZXR1cm4gdmVyc2lvbiA9PT0gaWVWZXJzaW9uO1xufTtcblxuZGV0ZWN0b3IuaXNMZWdhY3lPcGVyYSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhIXdpbmRvdy5vcGVyYTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvYnJvd3Nlci1kZXRlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWU1NDE5MzRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlVGFibGUudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWVUYWJsZS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTFlNTQxOTM0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVnVlVGFibGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFlNTQxOTM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWU1NDE5MzRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDExMzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWU1NDE5MzRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlVGFibGUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI5NmVjNTk0NFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xZTU0MTkzNFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVUYWJsZS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWU1NDE5MzRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlVGFibGUudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFlNTQxOTM0XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTMxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50YWJsZS52dWUtZGF0YS10YWJsZSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi50YWJsZS1yZXNwb25zaXZlIHtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IC4wMSU7XFxuICAgIG92ZXJmbG93LXg6IGF1dG87XFxufVxcbi50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5kaXYudGFibGUtYm90dG9tLWNvbnRyb2xzIHtcXG4gICAgbWFyZ2luLXRvcDogLjVyZW07XFxufVxcbmRpdi5uby1yZWNvcmRzLWZvdW5kIHtcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTJYQTtJQUNBLGlCQUFBO0NBQ0E7QUFFQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0NBQ0E7QUFFQTtJQUNBLGdCQUFBO0NBQ0E7QUFFQTtJQUNBLGtCQUFBO0NBQ0E7QUFFQTtJQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlZ1ZVRhYmxlLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImJveFxcXCJcXG4gICAgICAgIHYtaWY9XFxcImluaXRpYWxpc2VkXFxcIj5cXG4gICAgICAgIDx0b3AtY29udHJvbHMgOnRlbXBsYXRlPVxcXCJ0ZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiaGFzLXBhZGRpbmctc21hbGwgaGFzLXBhZGRpbmctYm90dG9tLWxhcmdlXFxcIlxcbiAgICAgICAgICAgIDppMThuPVxcXCJpMThuXFxcIlxcbiAgICAgICAgICAgIDpsZW5ndGg9XFxcImxlbmd0aFxcXCJcXG4gICAgICAgICAgICBAdXBkYXRlLWxlbmd0aD1cXFwibGVuZ3RoPSRldmVudFxcXCJcXG4gICAgICAgICAgICBAZXhwb3J0LWRhdGE9XFxcImV4cG9ydERhdGFcXFwiXFxuICAgICAgICAgICAgQHJlbG9hZD1cXFwiZ2V0RGF0YSgpXFxcIlxcbiAgICAgICAgICAgIEByZXNldD1cXFwicmVzZXRQcmVmZXJlbmNlc1xcXCJcXG4gICAgICAgICAgICB2LW1vZGVsPVxcXCJzZWFyY2hcXFwiPlxcbiAgICAgICAgPC90b3AtY29udHJvbHM+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1yZXNwb25zaXZlXFxcIlxcbiAgICAgICAgICAgIHYtcmVzcG9uc2l2ZT5cXG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XFxcInRhYmxlIGlzLWZ1bGx3aWR0aCB2dWUtZGF0YS10YWJsZVxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ0ZW1wbGF0ZS5zdHlsZVxcXCJcXG4gICAgICAgICAgICAgICAgaWQ9XFxcImlkXFxcIj5cXG4gICAgICAgICAgICAgICAgPHRhYmxlLWhlYWRlciA6dGVtcGxhdGU9XFxcInRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XFxcImkxOG5cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAc29ydC11cGRhdGU9XFxcImdldERhdGFcXFwiPlxcbiAgICAgICAgICAgICAgICA8L3RhYmxlLWhlYWRlcj5cXG4gICAgICAgICAgICAgICAgPHRhYmxlLWJvZHkgOnRlbXBsYXRlPVxcXCJ0ZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtb249XFxcIiRsaXN0ZW5lcnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Ym9keT1cXFwiYm9keVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpzdGFydD1cXFwic3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cXFwiaTE4blxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjdXN0b20tcmVuZGVyPVxcXCJjdXN0b21SZW5kZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6ZXhwYW5kZWQ9XFxcImV4cGFuZGVkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGFqYXg9XFxcImFqYXhcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJoYXNDb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPC90YWJsZS1ib2R5PlxcbiAgICAgICAgICAgICAgICA8dGFibGUtZm9vdGVyIHYtaWY9XFxcInRlbXBsYXRlLnRvdGFsICYmIGhhc0NvbnRlbnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6dGVtcGxhdGU9XFxcInRlbXBsYXRlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmJvZHk9XFxcImJvZHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cXFwiaTE4blxcXCI+XFxuICAgICAgICAgICAgICAgIDwvdGFibGUtZm9vdGVyPlxcbiAgICAgICAgICAgIDwvdGFibGU+XFxuICAgICAgICAgICAgPG92ZXJsYXkgdi1pZj1cXFwibG9hZGluZ1xcXCI+PC9vdmVybGF5PlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIHRhYmxlLWJvdHRvbS1jb250cm9sc1xcXCJcXG4gICAgICAgICAgICB2LWlmPVxcXCJoYXNDb250ZW50XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5cXFwiPlxcbiAgICAgICAgICAgICAgICA8cmVjb3Jkcy1pbmZvIDpib2R5PVxcXCJib2R5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XFxcImkxOG5cXFwiXFxuICAgICAgICAgICAgICAgICAgICA6c3RhcnQ9XFxcInN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cXFwibGVuZ3RoXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9yZWNvcmRzLWluZm8+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGlzLW5hcnJvdyBoYXMtdGV4dC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgIDxwYWdpbmF0aW9uIDpzdGFydD1cXFwic3RhcnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6bGVuZ3RoPVxcXCJsZW5ndGhcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6cmVjb3Jkcz1cXFwiYm9keS5maWx0ZXJlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDppMThuPVxcXCJpMThuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGp1bXAtdG89XFxcInN0YXJ0ID0gJGV2ZW50O2dldERhdGEoKVxcXCI+XFxuICAgICAgICAgICAgICAgIDwvcGFnaW5hdGlvbj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiB2LWlmPVxcXCJib2R5ICYmICFib2R5LmNvdW50XFxcIlxcbiAgICAgICAgICAgIGNsYXNzPVxcXCJoYXMtdGV4dC1jZW50ZXJlZCBuby1yZWNvcmRzLWZvdW5kXFxcIj5cXG4gICAgICAgICAgICB7eyBpMThuKCdObyByZWNvcmRzIHdlcmUgZm91bmQuJykgfX1cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IHRvYXN0ciBmcm9tICd0b2FzdHInO1xcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcXG5pbXBvcnQgVG9wQ29udHJvbHMgZnJvbSAnLi9Ub3BDb250cm9scy52dWUnO1xcbmltcG9ydCBUYWJsZUhlYWRlciBmcm9tICcuL1RhYmxlSGVhZGVyLnZ1ZSc7XFxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL1RhYmxlQm9keS52dWUnO1xcbmltcG9ydCBUYWJsZUZvb3RlciBmcm9tICcuL1RhYmxlRm9vdGVyLnZ1ZSc7XFxuaW1wb3J0IFJlY29yZHNJbmZvIGZyb20gJy4vUmVjb3Jkc0luZm8udnVlJztcXG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tICcuL1BhZ2luYXRpb24udnVlJztcXG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL092ZXJsYXkudnVlJztcXG5pbXBvcnQgdlJlc3BvbnNpdmUgZnJvbSAnLi9yZXNwb25zaXZlL3ZSZXNwb25zaXZlJztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdWdWVUYWJsZScsXFxuXFxuICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgIFRvcENvbnRyb2xzLCBUYWJsZUhlYWRlciwgVGFibGVCb2R5LCBUYWJsZUZvb3RlciwgUmVjb3Jkc0luZm8sIE92ZXJsYXksIFBhZ2luYXRpb24sXFxuICAgIH0sXFxuXFxuICAgIGRpcmVjdGl2ZXM6IHtcXG4gICAgICAgIHJlc3BvbnNpdmU6IHZSZXNwb25zaXZlLFxcbiAgICB9LFxcblxcbiAgICBwcm9wczoge1xcbiAgICAgICAgaWQ6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgcGF0aDoge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmaWx0ZXJzOiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICAgICAgaW50ZXJ2YWxzOiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICAgICAgY3VzdG9tUmVuZGVyOiB7XFxuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgZGVmYXVsdDogKHJvdywgY29sdW1uKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGAnQ3VzdG9tIHJlbmRlciBmdW5jdGlvbiBpcyBtaXNzaW5nIGZvciBjb2x1bW46ICR7Y29sdW1uLm5hbWV9J2ApO1xcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93W2NvbHVtbi5uYW1lXTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIGkxOG46IHtcXG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICBkZWZhdWx0OiB2YWx1ZSA9PiB2YWx1ZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICBwcmVmZXJlbmNlc0tleSgpIHtcXG4gICAgICAgICAgICByZXR1cm4gYFZ1ZVRhYmxlXyR7dGhpcy5pZH1fcHJlZmVyZW5jZXNgO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHByZWZlcmVuY2VzKCkge1xcbiAgICAgICAgICAgIGlmICghdGhpcy5pbml0aWFsaXNlZCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgZ2xvYmFsOiB7XFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMubGVuZ3RoLFxcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy50ZW1wbGF0ZS5zb3J0LFxcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU6IHRoaXMudGVtcGxhdGUuc3R5bGUsXFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogdGhpcy50ZW1wbGF0ZS5hbGlnbixcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgY29sdW1uczogdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLnJlZHVjZSgoY29sbGVjdG9yLCBjb2x1bW4pID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiBjb2x1bW4ubWV0YS5zb3J0LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGNvbHVtbi5tZXRhLnZpc2libGUsXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjb2xsZWN0b3I7XFxuICAgICAgICAgICAgICAgIH0sIFtdKSxcXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgfSxcXG4gICAgICAgIGhhc0NvbnRlbnQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keSAmJiB0aGlzLmJvZHkuY291bnQ7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcXG4gICAgICAgICAgICBpbml0aWFsaXNlZDogZmFsc2UsXFxuICAgICAgICAgICAgdGVtcGxhdGU6IG51bGwsXFxuICAgICAgICAgICAgc2VhcmNoOiAnJyxcXG4gICAgICAgICAgICBzdGFydDogbnVsbCxcXG4gICAgICAgICAgICBib2R5OiBudWxsLFxcbiAgICAgICAgICAgIGxlbmd0aDogbnVsbCxcXG4gICAgICAgICAgICBleHBhbmRlZDogW10sXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICB3YXRjaDoge1xcbiAgICAgICAgc2VhcmNoOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZpbHRlcnM6IHtcXG4gICAgICAgICAgICBoYW5kbGVyKCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZSgpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICBoYW5kbGVyKCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZSgpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBpbnRlcnZhbHM6IHtcXG4gICAgICAgICAgICBoYW5kbGVyKCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZSgpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBsZW5ndGg6IHtcXG4gICAgICAgICAgICBoYW5kbGVyKCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclVwZGF0ZSgpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAgcHJlZmVyZW5jZXM6IHtcXG4gICAgICAgICAgICBoYW5kbGVyKCkge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDb250ZW50KSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNhdmVQcmVmZXJlbmNlcygpO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgY3JlYXRlZCgpIHtcXG4gICAgICAgIHRoaXMuZ2V0RGF0YSA9IGRlYm91bmNlKHRoaXMuZ2V0RGF0YSwgMTAwKTtcXG4gICAgICAgIHRoaXMuaW5pdCgpO1xcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBpbml0KCkge1xcbiAgICAgICAgICAgIGF4aW9zLmdldCh0aGlzLnBhdGgpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGUgPSBkYXRhLnRlbXBsYXRlO1xcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0ID0gMDtcXG4gICAgICAgICAgICAgICAgW3RoaXMubGVuZ3RoXSA9IHRoaXMudGVtcGxhdGUubGVuZ3RoTWVudTtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcmVmZXJlbmNlcygpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IGVycm9yLnJlc3BvbnNlO1xcblxcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA1NTUpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0ci5lcnJvcihkYXRhLm1lc3NhZ2UpO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNldFByZWZlcmVuY2VzKCkge1xcbiAgICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdFByZWZlcmVuY2VzKCk7XFxuXFxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucHJlZmVyZW5jZXNLZXkpICE9PSBudWxsKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VXNlclByZWZlcmVuY2VzKCk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0RGVmYXVsdFByZWZlcmVuY2VzKCkge1xcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUuY29sdW1ucy5mb3JFYWNoKCh7IG1ldGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQobWV0YSwgJ3NvcnQnLCBudWxsKTtcXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KG1ldGEsICdoaWRkZW4nLCBmYWxzZSk7XFxuICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudGVtcGxhdGUsICdzb3J0JywgZmFsc2UpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNldFVzZXJQcmVmZXJlbmNlcygpIHtcXG4gICAgICAgICAgICBjb25zdCBwcmVmcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSkpO1xcblxcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZWZzLmdsb2JhbCkuZm9yRWFjaCgoa2V5KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCBrZXksIHByZWZzLmdsb2JhbFtrZXldKTtcXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcmVmcy50ZW1wbGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnRlbXBsYXRlLCBrZXksIHByZWZzLnRlbXBsYXRlW2tleV0pO1xcbiAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgIHByZWZzLmNvbHVtbnMuZm9yRWFjaCgoY29sdW1uLCBpbmRleCkgPT4ge1xcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb2x1bW4pLmZvckVhY2goKGtleSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudGVtcGxhdGUuY29sdW1uc1tpbmRleF0ubWV0YSwga2V5LCBjb2x1bW5ba2V5XSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNhdmVQcmVmZXJlbmNlcygpIHtcXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnByZWZlcmVuY2VzS2V5LCBKU09OLnN0cmluZ2lmeSh0aGlzLnByZWZlcmVuY2VzKSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgcmVzZXRQcmVmZXJlbmNlcygpIHtcXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLnByZWZlcmVuY2VzS2V5KTtcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnO1xcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGdldERhdGEoKSB7XFxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcXG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkID0gW107XFxuXFxuICAgICAgICAgICAgYXhpb3MuZ2V0KHRoaXMudGVtcGxhdGUucmVhZFBhdGgsIHsgcGFyYW1zOiB0aGlzLnJlYWRSZXF1ZXN0KCkgfSkudGhlbigoeyBkYXRhIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5ID0gZGF0YTtcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICByZWFkUmVxdWVzdCgpIHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLnJlcXVlc3RDb2x1bW5zKCksXFxuICAgICAgICAgICAgICAgIG1ldGE6IHtcXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLmxlbmd0aCxcXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRoaXMudGVtcGxhdGUuc29ydCxcXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiB0aGlzLnRlbXBsYXRlLnRvdGFsLFxcbiAgICAgICAgICAgICAgICAgICAgZW51bTogdGhpcy50ZW1wbGF0ZS5lbnVtLFxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGhpcy50ZW1wbGF0ZS5kYXRlLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxcbiAgICAgICAgICAgICAgICBhcHBlbmRzOiB0aGlzLnRlbXBsYXRlLmFwcGVuZHMsXFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IHRoaXMuZmlsdGVycyxcXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxzOiB0aGlzLmludGVydmFscyxcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcyxcXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgfSxcXG4gICAgICAgIHJlcXVlc3RDb2x1bW5zKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlLmNvbHVtbnMucmVkdWNlKChjb2x1bW5zLCBjb2x1bW4pID0+IHtcXG4gICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGNvbHVtbi5uYW1lLFxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogY29sdW1uLmRhdGEsXFxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc2VhcmNoYWJsZTogY29sdW1uLm1ldGEuc2VhcmNoYWJsZSxcXG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0YWJsZTogY29sdW1uLm1ldGEuc29ydGFibGUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogY29sdW1uLm1ldGEuc29ydCxcXG4gICAgICAgICAgICAgICAgICAgICAgICB0b3RhbDogY29sdW1uLm1ldGEudG90YWwsXFxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogY29sdW1uLm1ldGEuZGF0ZSxcXG4gICAgICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgICAgICBlbnVtOiBjb2x1bW4uZW51bSxcXG4gICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgICAgIHJldHVybiBjb2x1bW5zO1xcbiAgICAgICAgICAgIH0sIFtdKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBleHBvcnREYXRhKHBhdGgpIHtcXG4gICAgICAgICAgICBheGlvcy5nZXQocGF0aCwgeyBwYXJhbXM6IHRoaXMuZXhwb3J0UmVxdWVzdCgpIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSBlcnJvci5yZXNwb25zZTtcXG5cXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNTU1KSB7XFxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoZGF0YS5tZXNzYWdlKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBleHBvcnRSZXF1ZXN0KCkge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMudGVtcGxhdGUubmFtZSxcXG4gICAgICAgICAgICAgICAgY29sdW1uczogdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLFxcbiAgICAgICAgICAgICAgICBtZXRhOiB7XFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogMCxcXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5ib2R5LmNvdW50LFxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy50ZW1wbGF0ZS5zb3J0LFxcbiAgICAgICAgICAgICAgICAgICAgZW51bTogdGhpcy50ZW1wbGF0ZS5lbnVtLFxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGhpcy50ZW1wbGF0ZS5kYXRlLFxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGZhbHNlLFxcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxcbiAgICAgICAgICAgICAgICBhcHBlbmRzOiB0aGlzLnRlbXBsYXRlLmFwcGVuZHMsXFxuICAgICAgICAgICAgICAgIGZpbHRlcnM6IHRoaXMuZmlsdGVycyxcXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxzOiB0aGlzLmludGVydmFscyxcXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcyxcXG4gICAgICAgICAgICB9O1xcbiAgICAgICAgfSxcXG4gICAgICAgIGFqYXgobWV0aG9kLCBwYXRoKSB7XFxuICAgICAgICAgICAgYXhpb3NbbWV0aG9kLnRvTG93ZXJDYXNlKCldKHBhdGgpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBmaWx0ZXJVcGRhdGUoKSB7XFxuICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgdGhpcy5zdGFydCA9IDA7XFxuICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAudGFibGUudnVlLWRhdGEtdGFibGUge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAudGFibGUtcmVzcG9uc2l2ZSB7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgICAgbWluLWhlaWdodDogLjAxJTtcXG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUge1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuICAgIGRpdi50YWJsZS1ib3R0b20tY29udHJvbHMge1xcbiAgICAgICAgbWFyZ2luLXRvcDogLjVyZW07XFxuICAgIH1cXG5cXG4gICAgZGl2Lm5vLXJlY29yZHMtZm91bmQge1xcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFlNTQxOTM0XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTMyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImJveFwiXG4gICAgICAgIHYtaWY9XCJpbml0aWFsaXNlZFwiPlxuICAgICAgICA8dG9wLWNvbnRyb2xzIDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaGFzLXBhZGRpbmctc21hbGwgaGFzLXBhZGRpbmctYm90dG9tLWxhcmdlXCJcbiAgICAgICAgICAgIDppMThuPVwiaTE4blwiXG4gICAgICAgICAgICA6bGVuZ3RoPVwibGVuZ3RoXCJcbiAgICAgICAgICAgIEB1cGRhdGUtbGVuZ3RoPVwibGVuZ3RoPSRldmVudFwiXG4gICAgICAgICAgICBAZXhwb3J0LWRhdGE9XCJleHBvcnREYXRhXCJcbiAgICAgICAgICAgIEByZWxvYWQ9XCJnZXREYXRhKClcIlxuICAgICAgICAgICAgQHJlc2V0PVwicmVzZXRQcmVmZXJlbmNlc1wiXG4gICAgICAgICAgICB2LW1vZGVsPVwic2VhcmNoXCI+XG4gICAgICAgIDwvdG9wLWNvbnRyb2xzPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtcmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICB2LXJlc3BvbnNpdmU+XG4gICAgICAgICAgICA8dGFibGUgY2xhc3M9XCJ0YWJsZSBpcy1mdWxsd2lkdGggdnVlLWRhdGEtdGFibGVcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInRlbXBsYXRlLnN0eWxlXCJcbiAgICAgICAgICAgICAgICBpZD1cImlkXCI+XG4gICAgICAgICAgICAgICAgPHRhYmxlLWhlYWRlciA6dGVtcGxhdGU9XCJ0ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDppMThuPVwiaTE4blwiXG4gICAgICAgICAgICAgICAgICAgIEBzb3J0LXVwZGF0ZT1cImdldERhdGFcIj5cbiAgICAgICAgICAgICAgICA8L3RhYmxlLWhlYWRlcj5cbiAgICAgICAgICAgICAgICA8dGFibGUtYm9keSA6dGVtcGxhdGU9XCJ0ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIHYtb249XCIkbGlzdGVuZXJzXCJcbiAgICAgICAgICAgICAgICAgICAgOmJvZHk9XCJib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgOnN0YXJ0PVwic3RhcnRcIlxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgICAgICAgICAgICAgICA6Y3VzdG9tLXJlbmRlcj1cImN1c3RvbVJlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgIDpleHBhbmRlZD1cImV4cGFuZGVkXCJcbiAgICAgICAgICAgICAgICAgICAgQGFqYXg9XCJhamF4XCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImhhc0NvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8L3RhYmxlLWJvZHk+XG4gICAgICAgICAgICAgICAgPHRhYmxlLWZvb3RlciB2LWlmPVwidGVtcGxhdGUudG90YWwgJiYgaGFzQ29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOmJvZHk9XCJib2R5XCJcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XCJpMThuXCI+XG4gICAgICAgICAgICAgICAgPC90YWJsZS1mb290ZXI+XG4gICAgICAgICAgICA8L3RhYmxlPlxuICAgICAgICAgICAgPG92ZXJsYXkgdi1pZj1cImxvYWRpbmdcIj48L292ZXJsYXk+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyB0YWJsZS1ib3R0b20tY29udHJvbHNcIlxuICAgICAgICAgICAgdi1pZj1cImhhc0NvbnRlbnRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5cIj5cbiAgICAgICAgICAgICAgICA8cmVjb3Jkcy1pbmZvIDpib2R5PVwiYm9keVwiXG4gICAgICAgICAgICAgICAgICAgIDppMThuPVwiaTE4blwiXG4gICAgICAgICAgICAgICAgICAgIDpzdGFydD1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cImxlbmd0aFwiPlxuICAgICAgICAgICAgICAgIDwvcmVjb3Jkcy1pbmZvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLW5hcnJvdyBoYXMtdGV4dC1yaWdodFwiPlxuICAgICAgICAgICAgICAgIDxwYWdpbmF0aW9uIDpzdGFydD1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cImxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgIDpyZWNvcmRzPVwiYm9keS5maWx0ZXJlZFwiXG4gICAgICAgICAgICAgICAgICAgIDppMThuPVwiaTE4blwiXG4gICAgICAgICAgICAgICAgICAgIEBqdW1wLXRvPVwic3RhcnQgPSAkZXZlbnQ7Z2V0RGF0YSgpXCI+XG4gICAgICAgICAgICAgICAgPC9wYWdpbmF0aW9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IHYtaWY9XCJib2R5ICYmICFib2R5LmNvdW50XCJcbiAgICAgICAgICAgIGNsYXNzPVwiaGFzLXRleHQtY2VudGVyZWQgbm8tcmVjb3Jkcy1mb3VuZFwiPlxuICAgICAgICAgICAge3sgaTE4bignTm8gcmVjb3JkcyB3ZXJlIGZvdW5kLicpIH19XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgdG9hc3RyIGZyb20gJ3RvYXN0cic7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgVG9wQ29udHJvbHMgZnJvbSAnLi9Ub3BDb250cm9scy52dWUnO1xuaW1wb3J0IFRhYmxlSGVhZGVyIGZyb20gJy4vVGFibGVIZWFkZXIudnVlJztcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnLi9UYWJsZUJvZHkudnVlJztcbmltcG9ydCBUYWJsZUZvb3RlciBmcm9tICcuL1RhYmxlRm9vdGVyLnZ1ZSc7XG5pbXBvcnQgUmVjb3Jkc0luZm8gZnJvbSAnLi9SZWNvcmRzSW5mby52dWUnO1xuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9QYWdpbmF0aW9uLnZ1ZSc7XG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL092ZXJsYXkudnVlJztcbmltcG9ydCB2UmVzcG9uc2l2ZSBmcm9tICcuL3Jlc3BvbnNpdmUvdlJlc3BvbnNpdmUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1Z1ZVRhYmxlJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgVG9wQ29udHJvbHMsIFRhYmxlSGVhZGVyLCBUYWJsZUJvZHksIFRhYmxlRm9vdGVyLCBSZWNvcmRzSW5mbywgT3ZlcmxheSwgUGFnaW5hdGlvbixcbiAgICB9LFxuXG4gICAgZGlyZWN0aXZlczoge1xuICAgICAgICByZXNwb25zaXZlOiB2UmVzcG9uc2l2ZSxcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgaWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZmlsdGVyczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBpbnRlcnZhbHM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbVJlbmRlcjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICBkZWZhdWx0OiAocm93LCBjb2x1bW4pID0+IHtcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhgJ0N1c3RvbSByZW5kZXIgZnVuY3Rpb24gaXMgbWlzc2luZyBmb3IgY29sdW1uOiAke2NvbHVtbi5uYW1lfSdgKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcm93W2NvbHVtbi5uYW1lXTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgZGVmYXVsdDogdmFsdWUgPT4gdmFsdWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHByZWZlcmVuY2VzS2V5KCkge1xuICAgICAgICAgICAgcmV0dXJuIGBWdWVUYWJsZV8ke3RoaXMuaWR9X3ByZWZlcmVuY2VzYDtcbiAgICAgICAgfSxcbiAgICAgICAgcHJlZmVyZW5jZXMoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBnbG9iYWw6IHtcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLnRlbXBsYXRlLnNvcnQsXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLnRlbXBsYXRlLnN0eWxlLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbjogdGhpcy50ZW1wbGF0ZS5hbGlnbixcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMudGVtcGxhdGUuY29sdW1ucy5yZWR1Y2UoKGNvbGxlY3RvciwgY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6IGNvbHVtbi5tZXRhLnNvcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBjb2x1bW4ubWV0YS52aXNpYmxlLFxuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sbGVjdG9yO1xuICAgICAgICAgICAgICAgIH0sIFtdKSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGhhc0NvbnRlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ib2R5ICYmIHRoaXMuYm9keS5jb3VudDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxuICAgICAgICAgICAgaW5pdGlhbGlzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgdGVtcGxhdGU6IG51bGwsXG4gICAgICAgICAgICBzZWFyY2g6ICcnLFxuICAgICAgICAgICAgc3RhcnQ6IG51bGwsXG4gICAgICAgICAgICBib2R5OiBudWxsLFxuICAgICAgICAgICAgbGVuZ3RoOiBudWxsLFxuICAgICAgICAgICAgZXhwYW5kZWQ6IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBpbnRlcnZhbHM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsZW5ndGg6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHByZWZlcmVuY2VzOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhc0NvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZXMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXREYXRhID0gZGVib3VuY2UodGhpcy5nZXREYXRhLCAxMDApO1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBpbml0KCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHRoaXMucGF0aCkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gZGF0YS50ZW1wbGF0ZTtcbiAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0ID0gMDtcbiAgICAgICAgICAgICAgICBbdGhpcy5sZW5ndGhdID0gdGhpcy50ZW1wbGF0ZS5sZW5ndGhNZW51O1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJlZmVyZW5jZXMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSBlcnJvci5yZXNwb25zZTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDU1NSkge1xuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRQcmVmZXJlbmNlcygpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdFByZWZlcmVuY2VzKCk7XG5cbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnByZWZlcmVuY2VzS2V5KSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0VXNlclByZWZlcmVuY2VzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXREZWZhdWx0UHJlZmVyZW5jZXMoKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLmNvbHVtbnMuZm9yRWFjaCgoeyBtZXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQobWV0YSwgJ3NvcnQnLCBudWxsKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQobWV0YSwgJ2hpZGRlbicsIGZhbHNlKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB0aGlzLiRzZXQodGhpcy50ZW1wbGF0ZSwgJ3NvcnQnLCBmYWxzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFVzZXJQcmVmZXJlbmNlcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHByZWZzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnByZWZlcmVuY2VzS2V5KSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZWZzLmdsb2JhbCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMsIGtleSwgcHJlZnMuZ2xvYmFsW2tleV0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHByZWZzLnRlbXBsYXRlKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy50ZW1wbGF0ZSwga2V5LCBwcmVmcy50ZW1wbGF0ZVtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBwcmVmcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhjb2x1bW4pLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy50ZW1wbGF0ZS5jb2x1bW5zW2luZGV4XS5tZXRhLCBrZXksIGNvbHVtbltrZXldKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzYXZlUHJlZmVyZW5jZXMoKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0aGlzLnByZWZlcmVuY2VzS2V5LCBKU09OLnN0cmluZ2lmeSh0aGlzLnByZWZlcmVuY2VzKSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0UHJlZmVyZW5jZXMoKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLnByZWZlcmVuY2VzS2V5KTtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoID0gJyc7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGF0YSgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkID0gW107XG5cbiAgICAgICAgICAgIGF4aW9zLmdldCh0aGlzLnRlbXBsYXRlLnJlYWRQYXRoLCB7IHBhcmFtczogdGhpcy5yZWFkUmVxdWVzdCgpIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5ID0gZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlYWRSZXF1ZXN0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLnJlcXVlc3RDb2x1bW5zKCksXG4gICAgICAgICAgICAgICAgbWV0YToge1xuICAgICAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy50ZW1wbGF0ZS5zb3J0LFxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogdGhpcy50ZW1wbGF0ZS50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgZW51bTogdGhpcy50ZW1wbGF0ZS5lbnVtLFxuICAgICAgICAgICAgICAgICAgICBkYXRlOiB0aGlzLnRlbXBsYXRlLmRhdGUsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuICAgICAgICAgICAgICAgIGFwcGVuZHM6IHRoaXMudGVtcGxhdGUuYXBwZW5kcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxzOiB0aGlzLmludGVydmFscyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWVzdENvbHVtbnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLnJlZHVjZSgoY29sdW1ucywgY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGNvbHVtbi5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiBjb2x1bW4ubWV0YS5zZWFyY2hhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGNvbHVtbi5tZXRhLnNvcnRhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogY29sdW1uLm1ldGEuc29ydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBjb2x1bW4ubWV0YS50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGNvbHVtbi5tZXRhLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudW06IGNvbHVtbi5lbnVtLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV4cG9ydERhdGEocGF0aCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHBhdGgsIHsgcGFyYW1zOiB0aGlzLmV4cG9ydFJlcXVlc3QoKSB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA1NTUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXhwb3J0UmVxdWVzdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy50ZW1wbGF0ZS5uYW1lLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMudGVtcGxhdGUuY29sdW1ucyxcbiAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMuYm9keS5jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy50ZW1wbGF0ZS5zb3J0LFxuICAgICAgICAgICAgICAgICAgICBlbnVtOiB0aGlzLnRlbXBsYXRlLmVudW0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMudGVtcGxhdGUuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICAgICAgICBhcHBlbmRzOiB0aGlzLnRlbXBsYXRlLmFwcGVuZHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLFxuICAgICAgICAgICAgICAgIGludGVydmFsczogdGhpcy5pbnRlcnZhbHMsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGFqYXgobWV0aG9kLCBwYXRoKSB7XG4gICAgICAgICAgICBheGlvc1ttZXRob2QudG9Mb3dlckNhc2UoKV0ocGF0aCkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJVcGRhdGUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAudGFibGUudnVlLWRhdGEtdGFibGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IC4wMSU7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgfVxuXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuXG4gICAgZGl2LnRhYmxlLWJvdHRvbS1jb250cm9scyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cblxuICAgIGRpdi5uby1yZWNvcmRzLWZvdW5kIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ub3BDb250cm9scy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTI1NWI2OGM2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVG9wQ29udHJvbHMudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjU1YjY4YzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yNTViNjhjNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEzNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW11bHRpbGluZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy1oYWxmIGlzLWhpZGRlbi1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0aXRsZSBpcy01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwidGVtcGxhdGUuaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyBpMThuKHRlbXBsYXRlLm5hbWUpIH19XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy1oYWxmIGhhcy10ZXh0LXJpZ2h0LXRhYmxldCBoYXMtdGV4dC1jZW50ZXJlZC1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiYnV0dG9uIGluIHRlbXBsYXRlLmJ1dHRvbnMuZ2xvYmFsXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYnV0dG9uLmNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImJ1dHRvbi5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIDpocmVmPVwiYnV0dG9uLmFjdGlvbiA9PT0gJ2hyZWYnID8gYnV0dG9uLnBhdGggOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZG9BY3Rpb24oYnV0dG9uKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBpMThuKGJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiYnV0dG9uLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy10d28tdGhpcmRzLWRlc2t0b3AgaGFzLXRleHQtY2VudGVyZWQtbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgPGxlbmd0aC1tZW51IDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cImxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgIHYtb249XCIkbGlzdGVuZXJzXCI+XG4gICAgICAgICAgICAgICAgPC9sZW5ndGgtbWVudT5cbiAgICAgICAgICAgICAgICA8Y29sdW1uLXZpc2liaWxpdHkgOnRlbXBsYXRlPVwidGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICB2LW9uPVwiJGxpc3RlbmVyc1wiPlxuICAgICAgICAgICAgICAgIDwvY29sdW1uLXZpc2liaWxpdHk+XG4gICAgICAgICAgICAgICAgPHN0eWxlLXNlbGVjdG9yIDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPC9zdHlsZS1zZWxlY3Rvcj5cbiAgICAgICAgICAgICAgICA8YWxpZ25tZW50IDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPC9hbGlnbm1lbnQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdyZWxvYWQnKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgncmVzZXQnKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdW5kb1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGhhcy1wYWRkaW5nLXNtYWxsIGlzLW9uZS10aGlyZC1kZXNrdG9wIGhhcy10ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0IHRhYmxlLXNlYXJjaC1pbnB1dCBoYXMtdGV4dC1jZW50ZXJlZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdpbnB1dCcsICRldmVudC50YXJnZXQudmFsdWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cImkxOG4oJ1NlYXJjaCcpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IExlbmd0aE1lbnUgZnJvbSAnLi90b3BDb250cm9scy9MZW5ndGhNZW51LnZ1ZSc7XG5pbXBvcnQgQ29sdW1uVmlzaWJpbGl0eSBmcm9tICcuL3RvcENvbnRyb2xzL0NvbHVtblZpc2liaWxpdHkudnVlJztcbmltcG9ydCBBbGlnbm1lbnQgZnJvbSAnLi90b3BDb250cm9scy9BbGlnbm1lbnQudnVlJztcbmltcG9ydCBTdHlsZVNlbGVjdG9yIGZyb20gJy4vdG9wQ29udHJvbHMvU3R5bGVTZWxlY3Rvci52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1RvcENvbnRyb2xzJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTGVuZ3RoTWVudSwgQ29sdW1uVmlzaWJpbGl0eSwgQWxpZ25tZW50LCBTdHlsZVNlbGVjdG9yLFxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IGZhbHNlLFxuICAgICAgICAgICAgY29sdW1uVmlzaWJpbGl0eTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZG9BY3Rpb24oYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KGJ1dHRvbi5ldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChidXR0b24uYWN0aW9uID09PSAnZXhwb3J0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2V4cG9ydC1kYXRhJywgYnV0dG9uLnBhdGgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5hY3Rpb24gPT09ICdyb3V0ZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiBidXR0b24ucm91dGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDc2OTBkNDdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTGVuZ3RoTWVudS52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xlbmd0aE1lbnUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00NzY5MGQ0N1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0xlbmd0aE1lbnUudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvTGVuZ3RoTWVudS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDc2OTBkNDdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NzY5MGQ0N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ3NjkwZDQ3XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0xlbmd0aE1lbnUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0OWY2Y2MwMVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NzY5MGQ0N1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MZW5ndGhNZW51LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NzY5MGQ0N1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9MZW5ndGhNZW51LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00NzY5MGQ0N1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kcm9wZG93bi1tZW51Lmxlbmd0aC1saXN0LFxcbi5kcm9wZG93bi1tZW51Lmxlbmd0aC1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xcbiAgICB3aWR0aDogNjRweDtcXG59XFxuLmRyb3Bkb3duLW1lbnUubGVuZ3RoLWxpc3QgPiAuZHJvcGRvd24tY29udGVudCB7XFxuICAgIHdpZHRoOiA2NHB4O1xcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLmRyb3Bkb3duLW1lbnUubGVuZ3RoLWxpc3QgPiAuZHJvcGRvd24tY29udGVudCA+IGEuZHJvcGRvd24taXRlbSB7XFxuICAgIHBhZGRpbmc6IC4zNzVyZW0gMXJlbTtcXG59XFxuLmljb24uYW5nbGVbYXJpYS1oaWRkZW49XFxcInRydWVcXFwiXSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4uaWNvbi5hbmdsZSB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF5RUE7O0lBRUEsaUJBQUE7SUFDQSxZQUFBO0NBQ0E7QUFFQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0NBQ0E7QUFFQTtJQUNBLHNCQUFBO0NBQ0E7QUFFQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsaURBQUE7SUFBQSx5Q0FBQTtJQUFBLGlDQUFBO0lBQUEsK0RBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTGVuZ3RoTWVudS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCJcXG4gICAgICAgIHYtY2xpY2stb3V0c2lkZT1cXFwiaGlkZVxcXCJcXG4gICAgICAgIDpjbGFzcz1cXFwieyAnaXMtYWN0aXZlJzogc2hvdyB9XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLXRyaWdnZXJcXFwiXFxuICAgICAgICAgICAgQGNsaWNrPVxcXCJzaG93PSFzaG93XFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b25cXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBsZW5ndGggfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGFuZ2xlIGlzLXNtYWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDphcmlhLWhpZGRlbj1cXFwic2hvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYW5nbGUtdXBcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IGxlbmd0aC1saXN0IGFuaW1hdGVkXFxcIlxcbiAgICAgICAgICAgIHJvbGU9XFxcIm1lbnVcXFwiXFxuICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdmYWRlSW4nOiBzaG93LCAnZmFkZU91dCc6ICFzaG93IH1cXFwiXFxuICAgICAgICAgICAgdi1pZj1cXFwic2hvd1xcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8YSB2LWZvcj1cXFwiKHZhbHVlLCBpbmRleCkgaW4gdGVtcGxhdGUubGVuZ3RoTWVudVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImluZGV4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1hY3RpdmUnOiB2YWx1ZSA9PT0gbGVuZ3RoIH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRlbWl0KCd1cGRhdGUtbGVuZ3RoJywgdmFsdWUpO3Nob3c9ZmFsc2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3sgdmFsdWUgfX1cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQgdkNsaWNrT3V0c2lkZSBmcm9tICd2LWNsaWNrLW91dHNpZGUnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0xlbmd0aE1lbnUnLFxcblxcbiAgICBkaXJlY3RpdmVzOiB7XFxuICAgICAgICBjbGlja091dHNpZGU6IHZDbGlja091dHNpZGUuZGlyZWN0aXZlLFxcbiAgICB9LFxcblxcbiAgICBwcm9wczoge1xcbiAgICAgICAgdGVtcGxhdGU6IHtcXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgbGVuZ3RoOiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBoaWRlKCkge1xcbiAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgLmRyb3Bkb3duLW1lbnUubGVuZ3RoLWxpc3QsXFxuICAgIC5kcm9wZG93bi1tZW51Lmxlbmd0aC1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcXG4gICAgICAgIHdpZHRoOiA2NHB4O1xcbiAgICB9XFxuXFxuICAgIC5kcm9wZG93bi1tZW51Lmxlbmd0aC1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgd2lkdGg6IDY0cHg7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmRyb3Bkb3duLW1lbnUubGVuZ3RoLWxpc3QgPiAuZHJvcGRvd24tY29udGVudCA+IGEuZHJvcGRvd24taXRlbSB7XFxuICAgICAgICBwYWRkaW5nOiAuMzc1cmVtIDFyZW07XFxuICAgIH1cXG5cXG4gICAgLmljb24uYW5nbGVbYXJpYS1oaWRkZW49XFxcInRydWVcXFwiXSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICB9XFxuXFxuICAgIC5pY29uLmFuZ2xlIHtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNDc2OTBkNDdcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9MZW5ndGhNZW51LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiXG4gICAgICAgIHYtY2xpY2stb3V0c2lkZT1cImhpZGVcIlxuICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBzaG93IH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLXRyaWdnZXJcIlxuICAgICAgICAgICAgQGNsaWNrPVwic2hvdz0hc2hvd1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgbGVuZ3RoIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhbmdsZSBpcy1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1oaWRkZW49XCJzaG93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBsZW5ndGgtbGlzdCBhbmltYXRlZFwiXG4gICAgICAgICAgICByb2xlPVwibWVudVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdmYWRlSW4nOiBzaG93LCAnZmFkZU91dCc6ICFzaG93IH1cIlxuICAgICAgICAgICAgdi1pZj1cInNob3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHYtZm9yPVwiKHZhbHVlLCBpbmRleCkgaW4gdGVtcGxhdGUubGVuZ3RoTWVudVwiXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiB2YWx1ZSA9PT0gbGVuZ3RoIH1cIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgndXBkYXRlLWxlbmd0aCcsIHZhbHVlKTtzaG93PWZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHZhbHVlIH19XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgdkNsaWNrT3V0c2lkZSBmcm9tICd2LWNsaWNrLW91dHNpZGUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0xlbmd0aE1lbnUnLFxuXG4gICAgZGlyZWN0aXZlczoge1xuICAgICAgICBjbGlja091dHNpZGU6IHZDbGlja091dHNpZGUuZGlyZWN0aXZlLFxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoaWRlKCkge1xuICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAuZHJvcGRvd24tbWVudS5sZW5ndGgtbGlzdCxcbiAgICAuZHJvcGRvd24tbWVudS5sZW5ndGgtbGlzdCA+IC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICAgICAgd2lkdGg6IDY0cHg7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLW1lbnUubGVuZ3RoLWxpc3QgPiAuZHJvcGRvd24tY29udGVudCB7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAyMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAuZHJvcGRvd24tbWVudS5sZW5ndGgtbGlzdCA+IC5kcm9wZG93bi1jb250ZW50ID4gYS5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogLjM3NXJlbSAxcmVtO1xuICAgIH1cblxuICAgIC5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLmljb24uYW5nbGUge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiY2xpY2stb3V0c2lkZVwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1jbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5oaWRlLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiaGlkZVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93blwiLFxuICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogX3ZtLnNob3cgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi10cmlnZ2VyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3cgPSAhX3ZtLnNob3dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJkcm9wZG93bi1tZW51XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sZW5ndGgpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGFuZ2xlIGlzLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IF92bS5zaG93IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1hbmdsZS11cFwiIH0pXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zaG93XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51IGxlbmd0aC1saXN0IGFuaW1hdGVkXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IGZhZGVJbjogX3ZtLnNob3csIGZhZGVPdXQ6ICFfdm0uc2hvdyB9LFxuICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcIm1lbnVcIiB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZFwiIH0sXG4gICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5sZW5ndGhNZW51LCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiB2YWx1ZSA9PT0gX3ZtLmxlbmd0aCB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInVwZGF0ZS1sZW5ndGhcIiwgdmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyh2YWx1ZSkgKyBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00NzY5MGQ0N1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDc2OTBkNDdcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvTGVuZ3RoTWVudS52dWVcbi8vIG1vZHVsZSBpZCA9IDExNDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRkMzQ4MWVhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NvbHVtblZpc2liaWxpdHkudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db2x1bW5WaXNpYmlsaXR5LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQzNDgxZWFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db2x1bW5WaXNpYmlsaXR5LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0NvbHVtblZpc2liaWxpdHkudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRkMzQ4MWVhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGQzNDgxZWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDM0ODFlYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Db2x1bW5WaXNpYmlsaXR5LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYzJiZmUxYjJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQzNDgxZWFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29sdW1uVmlzaWJpbGl0eS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQzNDgxZWFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ29sdW1uVmlzaWJpbGl0eS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGQzNDgxZWFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZHJvcGRvd24tbWVudS5jb2x1bW4tdmlzaWJpbGl0eS1saXN0LFxcbi5kcm9wZG93bi1tZW51LmNvbHVtbi12aXNpYmlsaXR5LWxpc3QgPiAuZHJvcGRvd24tY29udGVudFxcbiB7XFxuICAgIG1pbi13aWR0aDogdW5zZXQ7XFxuICAgIG1heC13aWR0aDogMTUwcHg7XFxufVxcbi5kcm9wZG93bi1tZW51LmNvbHVtbi12aXNpYmlsaXR5LWxpc3QgPiAuZHJvcGRvd24tY29udGVudCB7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uZHJvcGRvd24tbWVudS5jb2x1bW4tdmlzaWJpbGl0eS1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnQgPiBhLmRyb3Bkb3duLWl0ZW0ge1xcbiAgICBwYWRkaW5nOiAuMzc1cmVtIDFyZW07XFxufVxcbi5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLmljb24uYW5nbGUge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBdUVBOzs7SUFHQSxpQkFBQTtJQUNBLGlCQUFBO0NBQ0E7QUFFQTtJQUNBLGtCQUFBO0lBQ0EsaUJBQUE7Q0FDQTtBQUVBO0lBQ0Esc0JBQUE7Q0FDQTtBQUVBO0lBQ0Esa0NBQUE7WUFBQSwwQkFBQTtDQUNBO0FBRUE7SUFDQSxpREFBQTtJQUFBLHlDQUFBO0lBQUEsaUNBQUE7SUFBQSwrREFBQTtDQUNBXCIsXCJmaWxlXCI6XCJDb2x1bW5WaXNpYmlsaXR5LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duXFxcIlxcbiAgICAgICAgdi1jbGljay1vdXRzaWRlPVxcXCJoaWRlXFxcIlxcbiAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1hY3RpdmUnOiBzaG93IH1cXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tdHJpZ2dlclxcXCJcXG4gICAgICAgICAgICBAY2xpY2s9XFxcInNob3c9IXNob3dcXFwiPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvblxcXCJcXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cXFwidHJ1ZVxcXCJcXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cXFwiZHJvcGRvd24tbWVudVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1leWVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBhbmdsZSBpcy1zbWFsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1oaWRkZW49XFxcInNob3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFuZ2xlLXVwXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSBjb2x1bW4tdmlzaWJpbGl0eS1saXN0IGFuaW1hdGVkXFxcIlxcbiAgICAgICAgICAgICAgICByb2xlPVxcXCJtZW51XFxcIlxcbiAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnZmFkZUluJzogc2hvdywgJ2ZhZGVPdXQnOiAhc2hvdyB9XFxcIlxcbiAgICAgICAgICAgIHYtaWY9XFxcInNob3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSB2LWZvcj1cXFwiKGNvbHVtbiwgaW5kZXgpIGluIHRlbXBsYXRlLmNvbHVtbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpbmRleFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1hY3RpdmUnOiBjb2x1bW4ubWV0YS52aXNpYmxlIH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImNvbHVtbi5tZXRhLnZpc2libGUgPSAhY29sdW1uLm1ldGEudmlzaWJsZTskZW1pdCgndXBkYXRlLXZpc2liaWxpdHknKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7eyBjb2x1bW4ubGFiZWwgfX1cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQgdkNsaWNrT3V0c2lkZSBmcm9tICd2LWNsaWNrLW91dHNpZGUnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0NvbHVtblZpc2liaWxpdHknLFxcblxcbiAgICBkaXJlY3RpdmVzOiB7XFxuICAgICAgICBjbGlja091dHNpZGU6IHZDbGlja091dHNpZGUuZGlyZWN0aXZlLFxcbiAgICB9LFxcblxcbiAgICBwcm9wczoge1xcbiAgICAgICAgdGVtcGxhdGU6IHtcXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcXG4gICAgICAgIH07XFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGhpZGUoKSB7XFxuICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAuZHJvcGRvd24tbWVudS5jb2x1bW4tdmlzaWJpbGl0eS1saXN0LFxcbiAgICAuZHJvcGRvd24tbWVudS5jb2x1bW4tdmlzaWJpbGl0eS1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnRcXG4gICAgIHtcXG4gICAgICAgIG1pbi13aWR0aDogdW5zZXQ7XFxuICAgICAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbiAgICB9XFxuXFxuICAgIC5kcm9wZG93bi1tZW51LmNvbHVtbi12aXNpYmlsaXR5LWxpc3QgPiAuZHJvcGRvd24tY29udGVudCB7XFxuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcXG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLmRyb3Bkb3duLW1lbnUuY29sdW1uLXZpc2liaWxpdHktbGlzdCA+IC5kcm9wZG93bi1jb250ZW50ID4gYS5kcm9wZG93bi1pdGVtIHtcXG4gICAgICAgIHBhZGRpbmc6IC4zNzVyZW0gMXJlbTtcXG4gICAgfVxcblxcbiAgICAuaWNvbi5hbmdsZVthcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIH1cXG5cXG4gICAgLmljb24uYW5nbGUge1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00ZDM0ODFlYVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0NvbHVtblZpc2liaWxpdHkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duXCJcbiAgICAgICAgdi1jbGljay1vdXRzaWRlPVwiaGlkZVwiXG4gICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IHNob3cgfVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tdHJpZ2dlclwiXG4gICAgICAgICAgICBAY2xpY2s9XCJzaG93PSFzaG93XCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBhcmlhLWhhc3BvcHVwPVwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgYXJpYS1jb250cm9scz1cImRyb3Bkb3duLW1lbnVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1leWVcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhbmdsZSBpcy1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1oaWRkZW49XCJzaG93XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtdXBcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tbWVudSBjb2x1bW4tdmlzaWJpbGl0eS1saXN0IGFuaW1hdGVkXCJcbiAgICAgICAgICAgICAgICByb2xlPVwibWVudVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdmYWRlSW4nOiBzaG93LCAnZmFkZU91dCc6ICFzaG93IH1cIlxuICAgICAgICAgICAgdi1pZj1cInNob3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPGEgdi1mb3I9XCIoY29sdW1uLCBpbmRleCkgaW4gdGVtcGxhdGUuY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IGNvbHVtbi5tZXRhLnZpc2libGUgfVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNvbHVtbi5tZXRhLnZpc2libGUgPSAhY29sdW1uLm1ldGEudmlzaWJsZTskZW1pdCgndXBkYXRlLXZpc2liaWxpdHknKVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBjb2x1bW4ubGFiZWwgfX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB2Q2xpY2tPdXRzaWRlIGZyb20gJ3YtY2xpY2stb3V0c2lkZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ29sdW1uVmlzaWJpbGl0eScsXG5cbiAgICBkaXJlY3RpdmVzOiB7XG4gICAgICAgIGNsaWNrT3V0c2lkZTogdkNsaWNrT3V0c2lkZS5kaXJlY3RpdmUsXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhpZGUoKSB7XG4gICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIC5kcm9wZG93bi1tZW51LmNvbHVtbi12aXNpYmlsaXR5LWxpc3QsXG4gICAgLmRyb3Bkb3duLW1lbnUuY29sdW1uLXZpc2liaWxpdHktbGlzdCA+IC5kcm9wZG93bi1jb250ZW50XG4gICAgIHtcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICAgICAgbWF4LXdpZHRoOiAxNTBweDtcbiAgICB9XG5cbiAgICAuZHJvcGRvd24tbWVudS5jb2x1bW4tdmlzaWJpbGl0eS1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAuZHJvcGRvd24tbWVudS5jb2x1bW4tdmlzaWJpbGl0eS1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnQgPiBhLmRyb3Bkb3duLWl0ZW0ge1xuICAgICAgICBwYWRkaW5nOiAuMzc1cmVtIDFyZW07XG4gICAgfVxuXG4gICAgLmljb24uYW5nbGVbYXJpYS1oaWRkZW49XCJ0cnVlXCJdIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAuaWNvbi5hbmdsZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQ29sdW1uVmlzaWJpbGl0eS52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJjbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LWNsaWNrLW91dHNpZGVcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLmhpZGUsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJoaWRlXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duXCIsXG4gICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBfdm0uc2hvdyB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLXRyaWdnZXJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uc2hvdyA9ICFfdm0uc2hvd1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgXCJhcmlhLWhhc3BvcHVwXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImRyb3Bkb3duLW1lbnVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gYW5nbGUgaXMtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogX3ZtLnNob3cgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWFuZ2xlLXVwXCIgfSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnNob3dcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLW1lbnUgY29sdW1uLXZpc2liaWxpdHktbGlzdCBhbmltYXRlZFwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBmYWRlSW46IF92bS5zaG93LCBmYWRlT3V0OiAhX3ZtLnNob3cgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJtZW51XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcIiB9LFxuICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGVtcGxhdGUuY29sdW1ucywgZnVuY3Rpb24oY29sdW1uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IGNvbHVtbi5tZXRhLnZpc2libGUgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4ubWV0YS52aXNpYmxlID0gIWNvbHVtbi5tZXRhLnZpc2libGVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidXBkYXRlLXZpc2liaWxpdHlcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhjb2x1bW4ubGFiZWwpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1leWVcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTRkMzQ4MWVhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00ZDM0ODFlYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmY2NTU1ZjFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQWxpZ25tZW50LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQWxpZ25tZW50LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMmY2NTU1ZjFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9BbGlnbm1lbnQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yZjY1NTVmMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJmNjU1NWYxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yZjY1NTVmMVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BbGlnbm1lbnQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1MGNiMjZlY1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yZjY1NTVmMVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9BbGlnbm1lbnQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTJmNjU1NWYxXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0FsaWdubWVudC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMmY2NTU1ZjFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9BbGlnbm1lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kcm9wZG93bi1tZW51LmFsaWdubWVudC1saXN0LFxcbi5kcm9wZG93bi1tZW51LmFsaWdubWVudC1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnRcXG4ge1xcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xcbiAgICB3aWR0aDogNjRweDtcXG59XFxuLmRyb3Bkb3duLW1lbnUuYWxpZ25tZW50LWxpc3QgPiAuZHJvcGRvd24tY29udGVudCB7XFxuICAgIG1heC1oZWlnaHQ6IDMwMHB4O1xcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uZHJvcGRvd24tbWVudS5hbGlnbm1lbnQtbGlzdCA+IC5kcm9wZG93bi1jb250ZW50ID4gYS5kcm9wZG93bi1pdGVtIHtcXG4gICAgcGFkZGluZzogLjM3NXJlbSAxcmVtO1xcbn1cXG4uaWNvbi5hbmdsZVthcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5pY29uLmFuZ2xlIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBa0ZBOzs7SUFHQSxpQkFBQTtJQUNBLFlBQUE7Q0FDQTtBQUVBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtDQUNBO0FBRUE7SUFDQSxzQkFBQTtDQUNBO0FBRUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLGlEQUFBO0lBQUEseUNBQUE7SUFBQSxpQ0FBQTtJQUFBLCtEQUFBO0NBQ0FcIixcImZpbGVcIjpcIkFsaWdubWVudC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93blxcXCJcXG4gICAgICAgIHYtY2xpY2stb3V0c2lkZT1cXFwiaGlkZVxcXCJcXG4gICAgICAgIDpjbGFzcz1cXFwieyAnaXMtYWN0aXZlJzogc2hvdyB9XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLXRyaWdnZXJcXFwiXFxuICAgICAgICAgICAgQGNsaWNrPVxcXCJzaG93PSFzaG93XFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b25cXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYWxpZ24tanVzdGlmeVxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGFuZ2xlIGlzLXNtYWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDphcmlhLWhpZGRlbj1cXFwic2hvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtYW5nbGUtdXBcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgPC9kaXY+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93bi1tZW51IGFsaWdubWVudC1saXN0IGFuaW1hdGVkXFxcIlxcbiAgICAgICAgICAgICAgICByb2xlPVxcXCJtZW51XFxcIlxcbiAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnZmFkZUluJzogc2hvdywgJ2ZhZGVPdXQnOiAhc2hvdyB9XFxcIlxcbiAgICAgICAgICAgIHYtaWY9XFxcInNob3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSB2LWZvcj1cXFwiKHZhbHVlLCBrZXkpIGluIHRlbXBsYXRlLmFsaWduc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImtleVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1hY3RpdmUnOiB0ZW1wbGF0ZS5hbGlnbiA9PT0gdmFsdWUgfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwidGVtcGxhdGUuYWxpZ24gPSB2YWx1ZTtzaG93PWZhbHNlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XFxcImljb25zW2tleV1cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQgdkNsaWNrT3V0c2lkZSBmcm9tICd2LWNsaWNrLW91dHNpZGUnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0FsaWdubWVudCcsXFxuXFxuICAgIGRpcmVjdGl2ZXM6IHtcXG4gICAgICAgIGNsaWNrT3V0c2lkZTogdkNsaWNrT3V0c2lkZS5kaXJlY3RpdmUsXFxuICAgIH0sXFxuXFxuICAgIHByb3BzOiB7XFxuICAgICAgICB0ZW1wbGF0ZToge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxcbiAgICAgICAgICAgIGljb25zOiB7XFxuICAgICAgICAgICAgICAgIGNlbnRlcjogJ2ZhIGZhLWFsaWduLWNlbnRlcicsXFxuICAgICAgICAgICAgICAgIGxlZnQ6ICdmYSBmYS1hbGlnbi1sZWZ0JyxcXG4gICAgICAgICAgICAgICAgcmlnaHQ6ICdmYSBmYS1hbGlnbi1yaWdodCcsXFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH07XFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGhpZGUoKSB7XFxuICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XFxuICAgICAgICB9LFxcbiAgICAgICAgdXBkYXRlQ29sdW1uVmlzaWJpbGl0eShjb2x1bW4pIHtcXG4gICAgICAgICAgICBjb2x1bW4ubWV0YS52aXNpYmxlID0gIWNvbHVtbi5tZXRhLnZpc2libGU7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlLWNvbHVtbi12aXNpYmlsaXR5Jyk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAuZHJvcGRvd24tbWVudS5hbGlnbm1lbnQtbGlzdCxcXG4gICAgLmRyb3Bkb3duLW1lbnUuYWxpZ25tZW50LWxpc3QgPiAuZHJvcGRvd24tY29udGVudFxcbiAgICAge1xcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcXG4gICAgICAgIHdpZHRoOiA2NHB4O1xcbiAgICB9XFxuXFxuICAgIC5kcm9wZG93bi1tZW51LmFsaWdubWVudC1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICAgICAgbWF4LWhlaWdodDogMzAwcHg7XFxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC5kcm9wZG93bi1tZW51LmFsaWdubWVudC1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnQgPiBhLmRyb3Bkb3duLWl0ZW0ge1xcbiAgICAgICAgcGFkZGluZzogLjM3NXJlbSAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgfVxcblxcbiAgICAuaWNvbi5hbmdsZSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTJmNjU1NWYxXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93blwiXG4gICAgICAgIHYtY2xpY2stb3V0c2lkZT1cImhpZGVcIlxuICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBzaG93IH1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLXRyaWdnZXJcIlxuICAgICAgICAgICAgQGNsaWNrPVwic2hvdz0hc2hvd1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgYXJpYS1oYXNwb3B1cD1cInRydWVcIlxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XCJkcm9wZG93bi1tZW51XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYWxpZ24tanVzdGlmeVwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGFuZ2xlIGlzLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDphcmlhLWhpZGRlbj1cInNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1hbmdsZS11cFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGFsaWdubWVudC1saXN0IGFuaW1hdGVkXCJcbiAgICAgICAgICAgICAgICByb2xlPVwibWVudVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdmYWRlSW4nOiBzaG93LCAnZmFkZU91dCc6ICFzaG93IH1cIlxuICAgICAgICAgICAgdi1pZj1cInNob3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgPGEgdi1mb3I9XCIodmFsdWUsIGtleSkgaW4gdGVtcGxhdGUuYWxpZ25zXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImtleVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IHRlbXBsYXRlLmFsaWduID09PSB2YWx1ZSB9XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidGVtcGxhdGUuYWxpZ24gPSB2YWx1ZTtzaG93PWZhbHNlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiaWNvbnNba2V5XVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHZDbGlja091dHNpZGUgZnJvbSAndi1jbGljay1vdXRzaWRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdBbGlnbm1lbnQnLFxuXG4gICAgZGlyZWN0aXZlczoge1xuICAgICAgICBjbGlja091dHNpZGU6IHZDbGlja091dHNpZGUuZGlyZWN0aXZlLFxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiAnZmEgZmEtYWxpZ24tY2VudGVyJyxcbiAgICAgICAgICAgICAgICBsZWZ0OiAnZmEgZmEtYWxpZ24tbGVmdCcsXG4gICAgICAgICAgICAgICAgcmlnaHQ6ICdmYSBmYS1hbGlnbi1yaWdodCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGhpZGUoKSB7XG4gICAgICAgICAgICB0aGlzLnNob3cgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ29sdW1uVmlzaWJpbGl0eShjb2x1bW4pIHtcbiAgICAgICAgICAgIGNvbHVtbi5tZXRhLnZpc2libGUgPSAhY29sdW1uLm1ldGEudmlzaWJsZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZS1jb2x1bW4tdmlzaWJpbGl0eScpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgLmRyb3Bkb3duLW1lbnUuYWxpZ25tZW50LWxpc3QsXG4gICAgLmRyb3Bkb3duLW1lbnUuYWxpZ25tZW50LWxpc3QgPiAuZHJvcGRvd24tY29udGVudFxuICAgICB7XG4gICAgICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gICAgICAgIHdpZHRoOiA2NHB4O1xuICAgIH1cblxuICAgIC5kcm9wZG93bi1tZW51LmFsaWdubWVudC1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMDBweDtcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB9XG5cbiAgICAuZHJvcGRvd24tbWVudS5hbGlnbm1lbnQtbGlzdCA+IC5kcm9wZG93bi1jb250ZW50ID4gYS5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogLjM3NXJlbSAxcmVtO1xuICAgIH1cblxuICAgIC5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLmljb24uYW5nbGUge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0FsaWdubWVudC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAge1xuICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICB7XG4gICAgICAgICAgbmFtZTogXCJjbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgcmF3TmFtZTogXCJ2LWNsaWNrLW91dHNpZGVcIixcbiAgICAgICAgICB2YWx1ZTogX3ZtLmhpZGUsXG4gICAgICAgICAgZXhwcmVzc2lvbjogXCJoaWRlXCJcbiAgICAgICAgfVxuICAgICAgXSxcbiAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duXCIsXG4gICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBfdm0uc2hvdyB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLXRyaWdnZXJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uc2hvdyA9ICFfdm0uc2hvd1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgXCJhcmlhLWhhc3BvcHVwXCI6IFwidHJ1ZVwiLFxuICAgICAgICAgICAgICAgIFwiYXJpYS1jb250cm9sc1wiOiBcImRyb3Bkb3duLW1lbnVcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gYW5nbGUgaXMtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogX3ZtLnNob3cgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWFuZ2xlLXVwXCIgfSldXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnNob3dcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLW1lbnUgYWxpZ25tZW50LWxpc3QgYW5pbWF0ZWRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgZmFkZUluOiBfdm0uc2hvdywgZmFkZU91dDogIV92bS5zaG93IH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwibWVudVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLmFsaWducywgZnVuY3Rpb24odmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBfdm0udGVtcGxhdGUuYWxpZ24gPT09IHZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRlbXBsYXRlLmFsaWduID0gdmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmljb25zW2tleV0gfSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWFsaWduLWp1c3RpZnlcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJmNjU1NWYxXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yZjY1NTVmMVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9BbGlnbm1lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi04YWFiNjE4NFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TdHlsZVNlbGVjdG9yLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU3R5bGVTZWxlY3Rvci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LThhYWI2MTg0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU3R5bGVTZWxlY3Rvci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04YWFiNjE4NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LThhYWI2MTg0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvU3R5bGVTZWxlY3Rvci52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOGFhYjYxODRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU3R5bGVTZWxlY3Rvci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjMwZTdlZTVhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LThhYWI2MTg0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1N0eWxlU2VsZWN0b3IudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LThhYWI2MTg0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1N0eWxlU2VsZWN0b3IudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LThhYWI2MTg0XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvU3R5bGVTZWxlY3Rvci52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmRyb3Bkb3duLW1lbnUuc3R5bGUtbGlzdCxcXG4uZHJvcGRvd24tbWVudS5zdHlsZS1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnRcXG4ge1xcbiAgICBtaW4td2lkdGg6IHVuc2V0O1xcbiAgICBtYXgtd2lkdGg6IDE1MHB4O1xcbn1cXG4uZHJvcGRvd24tbWVudS5zdHlsZS1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnQge1xcbiAgICBtYXgtaGVpZ2h0OiAyMDBweDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLmRyb3Bkb3duLW1lbnUuc3R5bGUtbGlzdCA+IC5kcm9wZG93bi1jb250ZW50ID4gYS5kcm9wZG93bi1pdGVtIHtcXG4gICAgcGFkZGluZzogLjM3NXJlbSAxcmVtO1xcbn1cXG4uaWNvbi5hbmdsZVthcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5pY29uLmFuZ2xlIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvU3R5bGVTZWxlY3Rvci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXFGQTs7O0lBR0EsaUJBQUE7SUFDQSxpQkFBQTtDQUNBO0FBRUE7SUFDQSxrQkFBQTtJQUNBLGlCQUFBO0NBQ0E7QUFFQTtJQUNBLHNCQUFBO0NBQ0E7QUFFQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsaURBQUE7SUFBQSx5Q0FBQTtJQUFBLGlDQUFBO0lBQUEsK0RBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiU3R5bGVTZWxlY3Rvci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJkcm9wZG93biBpcy1yaWdodFxcXCJcXG4gICAgICAgIHYtY2xpY2stb3V0c2lkZT1cXFwiaGlkZVxcXCJcXG4gICAgICAgIDpjbGFzcz1cXFwieyAnaXMtYWN0aXZlJzogc2hvdyB9XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLXRyaWdnZXJcXFwiXFxuICAgICAgICAgICAgQGNsaWNrPVxcXCJzaG93PSFzaG93XFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b25cXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XFxcInRydWVcXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtY29udHJvbHM9XFxcImRyb3Bkb3duLW1lbnVcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdGFibGVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBhbmdsZSBpcy1zbWFsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICA6YXJpYS1oaWRkZW49XFxcInNob3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWFuZ2xlLXVwXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZHJvcGRvd24tbWVudSBzdHlsZS1saXN0IGFuaW1hdGVkXFxcIlxcbiAgICAgICAgICAgICAgICByb2xlPVxcXCJtZW51XFxcIlxcbiAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnZmFkZUluJzogc2hvdywgJ2ZhZGVPdXQnOiAhc2hvdyB9XFxcIlxcbiAgICAgICAgICAgIHYtaWY9XFxcInNob3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImRyb3Bkb3duLWNvbnRlbnQgaGFzLXRleHQtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSB2LWZvcj1cXFwiKHN0eWxlLCBrZXkpIGluIHRlbXBsYXRlLnN0eWxlc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImtleVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJkcm9wZG93bi1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1hY3RpdmUnOiBoYXMoc3R5bGUpIH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInRvZ2dsZShzdHlsZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3sga2V5IH19XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IHZDbGlja091dHNpZGUgZnJvbSAndi1jbGljay1vdXRzaWRlJztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdTdHlsZVNlbGVjdG9yJyxcXG5cXG4gICAgZGlyZWN0aXZlczoge1xcbiAgICAgICAgY2xpY2tPdXRzaWRlOiB2Q2xpY2tPdXRzaWRlLmRpcmVjdGl2ZSxcXG4gICAgfSxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHRlbXBsYXRlOiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIHN0eWxlcygpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5zdHlsZS5zcGxpdCgnICcpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBoaWRlKCkge1xcbiAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGhhcyhzdHlsZSkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlcy5pbmNsdWRlcyhzdHlsZSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdG9nZ2xlKHN0eWxlKSB7XFxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5zdHlsZSA9IHRoaXMuaGFzKHN0eWxlKVxcbiAgICAgICAgICAgICAgICA/IHRoaXMuc3R5bGVzLmZpbHRlcih2YWx1ZSA9PiB2YWx1ZSAhPT0gc3R5bGUpLmpvaW4oJyAnKVxcbiAgICAgICAgICAgICAgICA6IGAke3RoaXMudGVtcGxhdGUuc3R5bGV9ICR7c3R5bGV9YDtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIC5kcm9wZG93bi1tZW51LnN0eWxlLWxpc3QsXFxuICAgIC5kcm9wZG93bi1tZW51LnN0eWxlLWxpc3QgPiAuZHJvcGRvd24tY29udGVudFxcbiAgICAge1xcbiAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcXG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XFxuICAgIH1cXG5cXG4gICAgLmRyb3Bkb3duLW1lbnUuc3R5bGUtbGlzdCA+IC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgICAgIG1heC1oZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgfVxcblxcbiAgICAuZHJvcGRvd24tbWVudS5zdHlsZS1saXN0ID4gLmRyb3Bkb3duLWNvbnRlbnQgPiBhLmRyb3Bkb3duLWl0ZW0ge1xcbiAgICAgICAgcGFkZGluZzogLjM3NXJlbSAxcmVtO1xcbiAgICB9XFxuXFxuICAgIC5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgfVxcblxcbiAgICAuaWNvbi5hbmdsZSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LThhYWI2MTg0XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvU3R5bGVTZWxlY3Rvci52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24gaXMtcmlnaHRcIlxuICAgICAgICB2LWNsaWNrLW91dHNpZGU9XCJoaWRlXCJcbiAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogc2hvdyB9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi10cmlnZ2VyXCJcbiAgICAgICAgICAgIEBjbGljaz1cInNob3c9IXNob3dcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRhYmxlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gYW5nbGUgaXMtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmFyaWEtaGlkZGVuPVwic2hvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWFuZ2xlLXVwXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLW1lbnUgc3R5bGUtbGlzdCBhbmltYXRlZFwiXG4gICAgICAgICAgICAgICAgcm9sZT1cIm1lbnVcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnZmFkZUluJzogc2hvdywgJ2ZhZGVPdXQnOiAhc2hvdyB9XCJcbiAgICAgICAgICAgIHYtaWY9XCJzaG93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgIDxhIHYtZm9yPVwiKHN0eWxlLCBrZXkpIGluIHRlbXBsYXRlLnN0eWxlc1wiXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJrZXlcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBoYXMoc3R5bGUpIH1cIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGUoc3R5bGUpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGtleSB9fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHZDbGlja091dHNpZGUgZnJvbSAndi1jbGljay1vdXRzaWRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdTdHlsZVNlbGVjdG9yJyxcblxuICAgIGRpcmVjdGl2ZXM6IHtcbiAgICAgICAgY2xpY2tPdXRzaWRlOiB2Q2xpY2tPdXRzaWRlLmRpcmVjdGl2ZSxcbiAgICB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzdHlsZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5zdHlsZS5zcGxpdCgnICcpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaGlkZSgpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvdyA9IGZhbHNlO1xuICAgICAgICB9LFxuICAgICAgICBoYXMoc3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlcy5pbmNsdWRlcyhzdHlsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZShzdHlsZSkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5zdHlsZSA9IHRoaXMuaGFzKHN0eWxlKVxuICAgICAgICAgICAgICAgID8gdGhpcy5zdHlsZXMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBzdHlsZSkuam9pbignICcpXG4gICAgICAgICAgICAgICAgOiBgJHt0aGlzLnRlbXBsYXRlLnN0eWxlfSAke3N0eWxlfWA7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAuZHJvcGRvd24tbWVudS5zdHlsZS1saXN0LFxuICAgIC5kcm9wZG93bi1tZW51LnN0eWxlLWxpc3QgPiAuZHJvcGRvd24tY29udGVudFxuICAgICB7XG4gICAgICAgIG1pbi13aWR0aDogdW5zZXQ7XG4gICAgICAgIG1heC13aWR0aDogMTUwcHg7XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLW1lbnUuc3R5bGUtbGlzdCA+IC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgbWF4LWhlaWdodDogMjAwcHg7XG4gICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgfVxuXG4gICAgLmRyb3Bkb3duLW1lbnUuc3R5bGUtbGlzdCA+IC5kcm9wZG93bi1jb250ZW50ID4gYS5kcm9wZG93bi1pdGVtIHtcbiAgICAgICAgcGFkZGluZzogLjM3NXJlbSAxcmVtO1xuICAgIH1cblxuICAgIC5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLmljb24uYW5nbGUge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL1N0eWxlU2VsZWN0b3IudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHtcbiAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAge1xuICAgICAgICAgIG5hbWU6IFwiY2xpY2stb3V0c2lkZVwiLFxuICAgICAgICAgIHJhd05hbWU6IFwidi1jbGljay1vdXRzaWRlXCIsXG4gICAgICAgICAgdmFsdWU6IF92bS5oaWRlLFxuICAgICAgICAgIGV4cHJlc3Npb246IFwiaGlkZVwiXG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93biBpcy1yaWdodFwiLFxuICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogX3ZtLnNob3cgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi10cmlnZ2VyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLnNob3cgPSAhX3ZtLnNob3dcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIFwiYXJpYS1oYXNwb3B1cFwiOiBcInRydWVcIixcbiAgICAgICAgICAgICAgICBcImFyaWEtY29udHJvbHNcIjogXCJkcm9wZG93bi1tZW51XCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGFuZ2xlIGlzLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IF92bS5zaG93IH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1hbmdsZS11cFwiIH0pXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5zaG93XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1tZW51IHN0eWxlLWxpc3QgYW5pbWF0ZWRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgZmFkZUluOiBfdm0uc2hvdywgZmFkZU91dDogIV92bS5zaG93IH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHJvbGU6IFwibWVudVwiIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCIgfSxcbiAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLnN0eWxlcywgZnVuY3Rpb24oc3R5bGUsIGtleSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBfdm0uaGFzKHN0eWxlKSB9LFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGUoc3R5bGUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgKyBfdm0uX3Moa2V5KSArIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdGFibGVcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LThhYWI2MTg0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi04YWFiNjE4NFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaGFzLXBhZGRpbmctc21hbGwgaXMtaGFsZiBpcy1oaWRkZW4tbW9iaWxlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBpcy01XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgY2xhc3M6IF92bS50ZW1wbGF0ZS5pY29uIH0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaTE4bihfdm0udGVtcGxhdGUubmFtZSkpICtcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJjb2x1bW4gaGFzLXBhZGRpbmctc21hbGwgaXMtaGFsZiBoYXMtdGV4dC1yaWdodC10YWJsZXQgaGFzLXRleHQtY2VudGVyZWQtbW9iaWxlXCJcbiAgICAgICAgfSxcbiAgICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5idXR0b25zLmdsb2JhbCwgZnVuY3Rpb24oYnV0dG9uKSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBidXR0b24ubGFiZWwsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIixcbiAgICAgICAgICAgICAgY2xhc3M6IGJ1dHRvbi5jbGFzcyxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgaHJlZjogYnV0dG9uLmFjdGlvbiA9PT0gXCJocmVmXCIgPyBidXR0b24ucGF0aCA6IG51bGwgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uZG9BY3Rpb24oYnV0dG9uKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5pMThuKGJ1dHRvbi5sYWJlbCkpKV0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IGNsYXNzOiBidXR0b24uaWNvbiB9KVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiY29sdW1uIGhhcy1wYWRkaW5nLXNtYWxsIGlzLXR3by10aGlyZHMtZGVza3RvcCBoYXMtdGV4dC1jZW50ZXJlZC1tb2JpbGVcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImxlbmd0aC1tZW51XCIsXG4gICAgICAgICAgICBfdm0uX2coXG4gICAgICAgICAgICAgIHsgYXR0cnM6IHsgdGVtcGxhdGU6IF92bS50ZW1wbGF0ZSwgbGVuZ3RoOiBfdm0ubGVuZ3RoIH0gfSxcbiAgICAgICAgICAgICAgX3ZtLiRsaXN0ZW5lcnNcbiAgICAgICAgICAgIClcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImNvbHVtbi12aXNpYmlsaXR5XCIsXG4gICAgICAgICAgICBfdm0uX2coeyBhdHRyczogeyB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlIH0gfSwgX3ZtLiRsaXN0ZW5lcnMpXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwic3R5bGUtc2VsZWN0b3JcIiwgeyBhdHRyczogeyB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImFsaWdubWVudFwiLCB7IGF0dHJzOiB7IHRlbXBsYXRlOiBfdm0udGVtcGxhdGUgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwicmVsb2FkXCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fbSgwKV1cbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJyZXNldFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtfdm0uX20oMSldXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy1vbmUtdGhpcmQtZGVza3RvcCBoYXMtdGV4dC1yaWdodFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IHRhYmxlLXNlYXJjaC1pbnB1dCBoYXMtdGV4dC1jZW50ZXJlZFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInNlYXJjaFwiLCBwbGFjZWhvbGRlcjogX3ZtLmkxOG4oXCJTZWFyY2hcIikgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImlucHV0XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX20oMilcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1yZWZyZXNoXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdW5kb1wiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc2VhcmNoXCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yNTViNjhjNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMjU1YjY4YzZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVG9wQ29udHJvbHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MDZjZDcyNlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUhlYWRlci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1RhYmxlSGVhZGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzA2Y2Q3MjZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UYWJsZUhlYWRlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzA2Y2Q3MjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03MDZjZDcyNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MDZjZDcyNlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUhlYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjA1YWI0N2Q0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTcwNmNkNzI2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlSGVhZGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MDZjZDcyNlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUhlYWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzA2Y2Q3MjZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxudGgudnVlLXRhYmxlLWhlYWRlciB7XFxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcXG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50YWJsZS1oZWFkZXItY29udHJvbHMgLmZhLXNvcnQsXFxuLnRhYmxlLWhlYWRlci1jb250cm9scyAuZmEtdGltZXMge1xcbiAgICBmb250LXdlaWd0aDogMTAwO1xcbiAgICBvcGFjaXR5OiAwLjQ7XFxufVxcbi50YWJsZS1oZWFkZXItY29udHJvbHMgLmZhLXRpbWVzOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXVGQTtJQUNBLG1CQUFBO0lBQ0EsMkJBQUE7UUFBQSxzQkFBQTtDQUNBO0FBRUE7O0lBRUEsaUJBQUE7SUFDQSxhQUFBO0NBQ0E7QUFFQTtJQUNBLFdBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiVGFibGVIZWFkZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPHRoZWFkPlxcbiAgICAgICAgPHRyIDpjbGFzcz1cXFwidGVtcGxhdGUuc3R5bGVcXFwiPlxcbiAgICAgICAgICAgIDx0aCA6Y2xhc3M9XFxcInRlbXBsYXRlLmFsaWduXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJ0ZW1wbGF0ZS5jcnROb1xcXCI+XFxuICAgICAgICAgICAgICAgIHt7IGkxOG4odGVtcGxhdGUubGFiZWxzLmNydE5vKSB9fVxcbiAgICAgICAgICAgIDwvdGg+XFxuICAgICAgICAgICAgPHRoIGNsYXNzPVxcXCJ2dWUtdGFibGUtaGVhZGVyXFxcIlxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInRlbXBsYXRlLmFsaWduXFxcIlxcbiAgICAgICAgICAgICAgICB2LWZvcj1cXFwiY29sdW1uIGluIHRlbXBsYXRlLmNvbHVtbnNcXFwiXFxuICAgICAgICAgICAgICAgIDprZXk9XFxcImNvbHVtbi5sYWJlbFxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiY29sdW1uLm1ldGEudmlzaWJsZSAmJiAhY29sdW1uLm1ldGEuaGlkZGVuXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgICAgICAgICB7eyBpMThuKGNvbHVtbi5sYWJlbCkgfX1cXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWJsZS1oZWFkZXItY29udHJvbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInRvZ2dsZVNvcnQoJGV2ZW50LCBjb2x1bW4pXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJjb2x1bW4ubWV0YS5zb3J0YWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtaWY9XFxcIiFjb2x1bW4ubWV0YS5zb3J0XFxcIiBjbGFzcz1cXFwiZmEgZmEtc29ydFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWVsc2UtaWY9XFxcImNvbHVtbi5tZXRhLnNvcnQgPT09ICdBU0MnXFxcIiBjbGFzcz1cXFwiZmEgZmEtc29ydC1hc2NcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1lbHNlIGNsYXNzPVxcXCJmYSBmYS1zb3J0LWRlc2NcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRlbGV0ZSBpcy1zbWFsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiY29sdW1uLm1ldGEuc29ydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJjbGVhckNvbHVtblNvcnQoY29sdW1uKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC90aD5cXG4gICAgICAgICAgICA8dGggOmNsYXNzPVxcXCJ0ZW1wbGF0ZS5hbGlnblxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwidGVtcGxhdGUuYWN0aW9uc1xcXCI+XFxuICAgICAgICAgICAgICAgIHt7IGkxOG4odGVtcGxhdGUubGFiZWxzLmFjdGlvbnMpIH19XFxuICAgICAgICAgICAgPC90aD5cXG4gICAgICAgIDwvdHI+XFxuICAgIDwvdGhlYWQ+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0hlYWRlcicsXFxuXFxuICAgIHByb3BzOiB7XFxuICAgICAgICB0ZW1wbGF0ZToge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBpMThuOiB7XFxuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICB0b2dnbGVTb3J0KGV2ZW50LCB7IG1ldGEgfSkge1xcbiAgICAgICAgICAgIGNvbnN0IHsgc29ydCB9ID0gbWV0YTtcXG5cXG4gICAgICAgICAgICBpZiAoIWV2ZW50LnNoaWZ0S2V5KSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTb3J0KCk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIG1ldGEuc29ydCA9IHNvcnQgPT09ICdBU0MnID8gJ0RFU0MnIDogJ0FTQyc7XFxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5zb3J0ID0gdHJ1ZTtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzb3J0LXVwZGF0ZScpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNsZWFyQ29sdW1uU29ydCh7IG1ldGEgfSkge1xcbiAgICAgICAgICAgIG1ldGEuc29ydCA9IG51bGw7XFxuXFxuICAgICAgICAgICAgaWYgKCF0aGlzLnRlbXBsYXRlLmNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLm1ldGEuc29ydCAhPT0gbnVsbCkpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5zb3J0ID0gZmFsc2U7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NvcnQtdXBkYXRlJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgY2xlYXJTb3J0KCkge1xcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGUuY29sdW1ucy5mb3JFYWNoKCh7IG1ldGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICBtZXRhLnNvcnQgPSBudWxsO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgdGgudnVlLXRhYmxlLWhlYWRlciB7XFxuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICAgIH1cXG5cXG4gICAgLnRhYmxlLWhlYWRlci1jb250cm9scyAuZmEtc29ydCxcXG4gICAgLnRhYmxlLWhlYWRlci1jb250cm9scyAuZmEtdGltZXMge1xcbiAgICAgICAgZm9udC13ZWlndGg6IDEwMDtcXG4gICAgICAgIG9wYWNpdHk6IDAuNDtcXG4gICAgfVxcblxcbiAgICAudGFibGUtaGVhZGVyLWNvbnRyb2xzIC5mYS10aW1lczpob3ZlciB7XFxuICAgICAgICBvcGFjaXR5OiAxO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzA2Y2Q3MjZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8dGhlYWQ+XG4gICAgICAgIDx0ciA6Y2xhc3M9XCJ0ZW1wbGF0ZS5zdHlsZVwiPlxuICAgICAgICAgICAgPHRoIDpjbGFzcz1cInRlbXBsYXRlLmFsaWduXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwidGVtcGxhdGUuY3J0Tm9cIj5cbiAgICAgICAgICAgICAgICB7eyBpMThuKHRlbXBsYXRlLmxhYmVscy5jcnRObykgfX1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJ2dWUtdGFibGUtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ0ZW1wbGF0ZS5hbGlnblwiXG4gICAgICAgICAgICAgICAgdi1mb3I9XCJjb2x1bW4gaW4gdGVtcGxhdGUuY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgOmtleT1cImNvbHVtbi5sYWJlbFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImNvbHVtbi5tZXRhLnZpc2libGUgJiYgIWNvbHVtbi5tZXRhLmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyBpMThuKGNvbHVtbi5sYWJlbCkgfX1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWJsZS1oZWFkZXItY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlU29ydCgkZXZlbnQsIGNvbHVtbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJjb2x1bW4ubWV0YS5zb3J0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIHYtaWY9XCIhY29sdW1uLm1ldGEuc29ydFwiIGNsYXNzPVwiZmEgZmEtc29ydFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSB2LWVsc2UtaWY9XCJjb2x1bW4ubWV0YS5zb3J0ID09PSAnQVNDJ1wiIGNsYXNzPVwiZmEgZmEtc29ydC1hc2NcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgdi1lbHNlIGNsYXNzPVwiZmEgZmEtc29ydC1kZXNjXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkZWxldGUgaXMtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJjb2x1bW4ubWV0YS5zb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbGVhckNvbHVtblNvcnQoY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aCA6Y2xhc3M9XCJ0ZW1wbGF0ZS5hbGlnblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInRlbXBsYXRlLmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICB7eyBpMThuKHRlbXBsYXRlLmxhYmVscy5hY3Rpb25zKSB9fVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0hlYWRlcicsXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdG9nZ2xlU29ydChldmVudCwgeyBtZXRhIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc29ydCB9ID0gbWV0YTtcblxuICAgICAgICAgICAgaWYgKCFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTb3J0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1ldGEuc29ydCA9IHNvcnQgPT09ICdBU0MnID8gJ0RFU0MnIDogJ0FTQyc7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLnNvcnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc29ydC11cGRhdGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJDb2x1bW5Tb3J0KHsgbWV0YSB9KSB7XG4gICAgICAgICAgICBtZXRhLnNvcnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMudGVtcGxhdGUuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4ubWV0YS5zb3J0ICE9PSBudWxsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGUuc29ydCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzb3J0LXVwZGF0ZScpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclNvcnQoKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLmNvbHVtbnMuZm9yRWFjaCgoeyBtZXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICBtZXRhLnNvcnQgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICB0aC52dWUtdGFibGUtaGVhZGVyIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRhYmxlLWhlYWRlci1jb250cm9scyAuZmEtc29ydCxcbiAgICAudGFibGUtaGVhZGVyLWNvbnRyb2xzIC5mYS10aW1lcyB7XG4gICAgICAgIGZvbnQtd2VpZ3RoOiAxMDA7XG4gICAgICAgIG9wYWNpdHk6IDAuNDtcbiAgICB9XG5cbiAgICAudGFibGUtaGVhZGVyLWNvbnRyb2xzIC5mYS10aW1lczpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgIF9jKFxuICAgICAgXCJ0clwiLFxuICAgICAgeyBjbGFzczogX3ZtLnRlbXBsYXRlLnN0eWxlIH0sXG4gICAgICBbXG4gICAgICAgIF92bS50ZW1wbGF0ZS5jcnROb1xuICAgICAgICAgID8gX2MoXCJ0aFwiLCB7IGNsYXNzOiBfdm0udGVtcGxhdGUuYWxpZ24gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmkxOG4oX3ZtLnRlbXBsYXRlLmxhYmVscy5jcnRObykpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0udGVtcGxhdGUuY29sdW1ucywgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbHVtbi5tZXRhLnZpc2libGUgJiYgIWNvbHVtbi5tZXRhLmhpZGRlblxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBjb2x1bW4ubGFiZWwsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2dWUtdGFibGUtaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnRlbXBsYXRlLmFsaWduXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pMThuKGNvbHVtbi5sYWJlbCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWhlYWRlci1jb250cm9sc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4ubWV0YS5zb3J0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZVNvcnQoJGV2ZW50LCBjb2x1bW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFjb2x1bW4ubWV0YS5zb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc29ydFwiIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogY29sdW1uLm1ldGEuc29ydCA9PT0gXCJBU0NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc29ydC1hc2NcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc29ydC1kZXNjXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4ubWV0YS5zb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVsZXRlIGlzLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsZWFyQ29sdW1uU29ydChjb2x1bW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS50ZW1wbGF0ZS5hY3Rpb25zXG4gICAgICAgICAgPyBfYyhcInRoXCIsIHsgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaTE4bihfdm0udGVtcGxhdGUubGFiZWxzLmFjdGlvbnMpKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzA2Y2Q3MjZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTcwNmNkNzI2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZGJmYTlmY1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUJvZHkudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCIzMzkwNjE0YVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZGJmYTlmY1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUJvZHkudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVkYmZhOWZjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlQm9keS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWRiZmE5ZmNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbnRkLnRhYmxlLWNydC1ubyB7XFxuICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcXG4gICAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XFxuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcbi50YWJsZS1jcnQtbm8gLmZhLXBsdXMtc3F1YXJlLFxcbi50YWJsZS1jcnQtbm8gLmZhLW1pbnVzLXNxdWFyZSB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxudGQudGFibGUtYWN0aW9ucyB7XFxuICAgIHBhZGRpbmc6IC4zNWVtIC41ZW07XFxufVxcbnNwYW4udGFibGUtYWN0aW9uLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiAtd2Via2l0LWlubGluZS1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxufVxcbi5idXR0b24uaXMtc21hbGwuaXMtdGFibGUtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxLjZlbTtcXG4gICAgd2lkdGg6IDEuNmVtO1xcbiAgICBmb250LXNpemU6IC45ZW07XFxufVxcbi50YWcuaXMtdGFibGUtdGFnIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBoZWlnaHQ6IDEuNGVtO1xcbiAgICBwYWRkaW5nOiA3cHg7XFxufVxcbmxpLmNoaWxkLXJvdzpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XFxufVxcbmxpLmNoaWxkLXJvdyB7XFxuICAgIHBhZGRpbmc6IDAuNWVtIDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBd09BO0lBQ0EsbUJBQUE7SUFDQSwyQkFBQTtRQUFBLHNCQUFBO0NBQ0E7QUFFQTs7SUFFQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxvQkFBQTtDQUNBO0FBRUE7SUFDQSw0QkFBQTtJQUFBLDRCQUFBO0lBQUEscUJBQUE7Q0FDQTtBQUVBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxrQkFBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7Q0FDQTtBQUVBO0lBQ0EsaUNBQUE7Q0FDQTtBQUVBO0lBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiVGFibGVCb2R5LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDx0Ym9keT5cXG4gICAgICAgIDx0ciB2LWZvcj1cXFwiKHJvdywgaW5kZXgpIGluIGJvZHkuZGF0YVxcXCJcXG4gICAgICAgICAgICA6a2V5PVxcXCJpbmRleFxcXCI+XFxuICAgICAgICAgICAgPHRkIGNsYXNzPVxcXCJ0YWJsZS1jcnQtbm9cXFwiXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwidGVtcGxhdGUuYWxpZ25cXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcInRlbXBsYXRlLmNydE5vICYmICFpc0NoaWxkKHJvdylcXFwiPlxcbiAgICAgICAgICAgICAgICB7eyBnZXRJbmRleChyb3cpIH19XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaGlkZGVuQ291bnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInRvZ2dsZUV4cGFuZChyb3csIGluZGV4KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtbWludXMtc3F1YXJlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImlzRXhwYW5kZWQocm93KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L2k+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcGx1cy1zcXVhcmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICAgICAgPC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgICAgICA8dGQgOmNsYXNzPVxcXCJ0ZW1wbGF0ZS5hbGlnblxcXCJcXG4gICAgICAgICAgICAgICAgdi1mb3I9XFxcIihjb2x1bW4sIGluZGV4KSBpbiB0ZW1wbGF0ZS5jb2x1bW5zXFxcIlxcbiAgICAgICAgICAgICAgICA6a2V5PVxcXCJpbmRleFxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiY29sdW1uLm1ldGEudmlzaWJsZSAmJiAhY29sdW1uLm1ldGEuaGlkZGVuICYmICFpc0NoaWxkKHJvdylcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJjb2x1bW4ubWV0YS5ib29sZWFuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1odG1sPVxcXCJyb3dbY29sdW1uLm5hbWVdID8gdGVtcGxhdGUuYm9vbGVhblsxXSA6IHRlbXBsYXRlLmJvb2xlYW5bMF1cXFwiPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cXFwiY29sdW1uLm1ldGEucmVuZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1odG1sPVxcXCJjdXN0b21SZW5kZXIocm93LCBjb2x1bW4pXFxcIj5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XFxcImNvbHVtbi5tZXRhLnRyYW5zbGF0aW9uXFxcIj57eyBpMThuKHJvd1tjb2x1bW4ubmFtZV0pIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+e3sgcm93W2NvbHVtbi5uYW1lXSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cXFwidGFibGUtYWN0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ0ZW1wbGF0ZS5hbGlnblxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwidGVtcGxhdGUuYWN0aW9ucyAmJiAhaXNDaGlsZChyb3cpXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhYmxlLWFjdGlvbi1idXR0b25zXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxhIHYtZm9yPVxcXCIoYnV0dG9uLCBpbmRleCkgaW4gdGVtcGxhdGUuYnV0dG9ucy5yb3dcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaW5kZXhcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ1dHRvbiBpcy1zbWFsbCBpcy10YWJsZS1idXR0b24gaGFzLW1hcmdpbi1sZWZ0LXNtYWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiYnV0dG9uLmNsYXNzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVxcXCJidXR0b24uYWN0aW9uID09PSAnaHJlZicgPyBnZXRQYXRoKGJ1dHRvbiwgcm93LmR0Um93SWQpIDogbnVsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImJ1dHRvbi5jb25maXJtYXRpb24gPyBzaG93TW9kYWwoYnV0dG9uLCByb3cpIDogZG9BY3Rpb24oYnV0dG9uLCByb3cpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cXFwiYnV0dG9uLmljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L3RkPlxcbiAgICAgICAgICAgIDx0ZCA6Y29sc3Bhbj1cXFwiaGlkZGVuQ29sU3BhblxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ0ZW1wbGF0ZS5hbGlnblxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiaXNDaGlsZChyb3cpXFxcIj5cXG4gICAgICAgICAgICAgICAgPHVsPlxcbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJjaGlsZC1yb3dcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcImNvbHVtbiBpbiByb3dcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiY29sdW1uLmxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBjb2x1bW4ubGFiZWwgfX08L2I+OiB7eyBjb2x1bW4udmFsdWUgfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgPC90ZD5cXG4gICAgICAgIDwvdHI+XFxuICAgICAgICA8bW9kYWwgdi1pZj1cXFwibW9kYWxcXFwiXFxuICAgICAgICAgICAgOnNob3c9XFxcIm1vZGFsXFxcIlxcbiAgICAgICAgICAgIDppMThuPVxcXCJpMThuXFxcIlxcbiAgICAgICAgICAgIDptZXNzYWdlPVxcXCJidXR0b24ubWVzc2FnZVxcXCJcXG4gICAgICAgICAgICBAY2FuY2VsLWFjdGlvbj1cXFwiY2xvc2VNb2RhbCgpXFxcIlxcbiAgICAgICAgICAgIEBjb21taXQtYWN0aW9uPVxcXCJkb0FjdGlvbihidXR0b24sIHJvdylcXFwiPlxcbiAgICAgICAgPC9tb2RhbD5cXG4gICAgPC90Ym9keT5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL1RhYmxlQm9keS52dWUnO1xcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsLnZ1ZSc7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnVGFibGVCb2R5JyxcXG5cXG4gICAgY29tcG9uZW50czogeyBUYWJsZUJvZHksIE1vZGFsIH0sXFxuXFxuICAgIHByb3BzOiB7XFxuICAgICAgICB0ZW1wbGF0ZToge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBib2R5OiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGkxOG46IHtcXG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBjdXN0b21SZW5kZXI6IHtcXG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzdGFydDoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBleHBhbmRlZDoge1xcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIGhpZGRlbkNvbHVtbnMoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGUuY29sdW1uc1xcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubWV0YS5oaWRkZW4gJiYgY29sdW1uLm1ldGEudmlzaWJsZSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgaGlkZGVuQ291bnQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlkZGVuQ29sdW1ucy5sZW5ndGg7XFxuICAgICAgICB9LFxcbiAgICAgICAgaGlkZGVuQ29sU3BhbigpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLmxlbmd0aCAtIHRoaXMuaGlkZGVuQ29sdW1ucy5sZW5ndGhcXG4gICAgICAgICAgICAgICAgKyAodGhpcy50ZW1wbGF0ZS5hY3Rpb25zID8gMiA6IDEpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgbW9kYWw6IGZhbHNlLFxcbiAgICAgICAgICAgIHJvdzogbnVsbCxcXG4gICAgICAgICAgICBidXR0b246IG51bGwsXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICB3YXRjaDoge1xcbiAgICAgICAgaGlkZGVuQ291bnQ6IHtcXG4gICAgICAgICAgICBoYW5kbGVyKG5ld1ZhbCkge1xcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDaGlsZHMoKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBnZXRQYXRoKGJ1dHRvbiwgZHRSb3dJZCkge1xcbiAgICAgICAgICAgIHJldHVybiBidXR0b24ucGF0aC5yZXBsYWNlKCdkdFJvd0lkJywgZHRSb3dJZCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2hvd01vZGFsKGJ1dHRvbiwgcm93KSB7XFxuICAgICAgICAgICAgdGhpcy5yb3cgPSByb3c7XFxuICAgICAgICAgICAgdGhpcy5idXR0b24gPSBidXR0b247XFxuICAgICAgICAgICAgdGhpcy5tb2RhbCA9IHRydWU7XFxuICAgICAgICB9LFxcbiAgICAgICAgY2xvc2VNb2RhbCgpIHtcXG4gICAgICAgICAgICB0aGlzLm1vZGFsID0gZmFsc2U7XFxuICAgICAgICAgICAgdGhpcy5yb3cgPSBudWxsO1xcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uID0gbnVsbDtcXG4gICAgICAgIH0sXFxuICAgICAgICBkb0FjdGlvbihidXR0b24sIHJvdykge1xcbiAgICAgICAgICAgIGlmICh0aGlzLm1vZGFsKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwgPSBmYWxzZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5ldmVudCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KGJ1dHRvbi5ldmVudCwgcm93KTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5hY3Rpb24gPT09ICdhamF4Jykge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdhamF4JywgYnV0dG9uLm1ldGhvZCwgdGhpcy5nZXRQYXRoKGJ1dHRvbiwgcm93LmR0Um93SWQpKTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmFjdGlvbiA9PT0gJ3JvdXRlcicpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiBidXR0b24ucm91dGUsIHBhcmFtczogdGhpcy5nZXRSb3V0ZVBhcmFtcyhidXR0b24sIHJvdykgfSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGdldFJvdXRlUGFyYW1zKGJ1dHRvbiwgcm93KSB7XFxuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xcbiAgICAgICAgICAgICAgICBpZDogcm93LmR0Um93SWQsXFxuICAgICAgICAgICAgfTtcXG5cXG4gICAgICAgICAgICBpZiAoYnV0dG9uLnBhcmFtcykge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwYXJhbXMsIGJ1dHRvbi5wYXJhbXMpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGdldEluZGV4KHJvdykge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvZHkuZGF0YS5maWx0ZXIociA9PiAhdGhpcy5pc0NoaWxkKHIpKVxcbiAgICAgICAgICAgICAgICAuZmluZEluZGV4KHIgPT4gci5kdFJvd0lkID09PSByb3cuZHRSb3dJZCkgKyB0aGlzLnN0YXJ0ICsgMTtcXG4gICAgICAgIH0sXFxuICAgICAgICBpc0V4cGFuZGVkKHJvdykge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmV4cGFuZGVkLmluY2x1ZGVzKHJvdy5kdFJvd0lkKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBpc0NoaWxkKHJvdykge1xcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHJvdyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdG9nZ2xlRXhwYW5kKHJvdywgaW5kZXgpIHtcXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNFeHBhbmRlZChyb3cpKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQucHVzaChyb3cuZHRSb3dJZCk7XFxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGRSb3cocm93LCBpbmRleCk7XFxuICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgY29uc3QgaWR4ID0gdGhpcy5leHBhbmRlZC5maW5kSW5kZXgoaWQgPT4gaWQgPT09IHJvdy5kdFJvd0lkKTtcXG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkLnNwbGljZShpZHgsIDEpO1xcbiAgICAgICAgICAgIHRoaXMuYm9keS5kYXRhLnNwbGljZShpbmRleCArIDEsIDEpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGFkZENoaWxkUm93KHJvdywgaW5kZXgpIHtcXG4gICAgICAgICAgICBjb25zdCBuZXdSb3cgPSB0aGlzLmhpZGRlbkNvbHVtbnMucmVkdWNlKChjb2xsZWN0b3IsIGNvbHVtbikgPT4ge1xcbiAgICAgICAgICAgICAgICBjb2xsZWN0b3IucHVzaCh7IGxhYmVsOiBjb2x1bW4ubGFiZWwsIHZhbHVlOiByb3dbY29sdW1uLm5hbWVdIH0pO1xcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sbGVjdG9yO1xcbiAgICAgICAgICAgIH0sIFtdKTtcXG5cXG4gICAgICAgICAgICB0aGlzLmJvZHkuZGF0YS5zcGxpY2UoaW5kZXggKyAxLCAwLCBuZXdSb3cpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHJlbW92ZUNoaWxkcygpIHtcXG4gICAgICAgICAgICBjb25zdCBpbmRleGVzID0gW107XFxuXFxuICAgICAgICAgICAgdGhpcy5ib2R5LmRhdGEuZm9yRWFjaCgocm93LCBpbmRleCkgPT4ge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NoaWxkKHJvdykpIHtcXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleCk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICBpbmRleGVzLnNvcnQoKGEsIGIpID0+IGEgPCBiKS5mb3JFYWNoKGluZGV4ID0+IHRoaXMuYm9keS5kYXRhLnNwbGljZShpbmRleCwgMSkpO1xcblxcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQuc3BsaWNlKDApO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgdGQudGFibGUtY3J0LW5vIHtcXG4gICAgICAgIHdoaXRlLXNwYWNlOm5vd3JhcDtcXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgfVxcblxcbiAgICAudGFibGUtY3J0LW5vIC5mYS1wbHVzLXNxdWFyZSxcXG4gICAgLnRhYmxlLWNydC1ubyAuZmEtbWludXMtc3F1YXJlIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbiAgICB0ZC50YWJsZS1hY3Rpb25zIHtcXG4gICAgICAgIHBhZGRpbmc6IC4zNWVtIC41ZW07XFxuICAgIH1cXG5cXG4gICAgc3Bhbi50YWJsZS1hY3Rpb24tYnV0dG9ucyB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgfVxcblxcbiAgICAuYnV0dG9uLmlzLXNtYWxsLmlzLXRhYmxlLWJ1dHRvbiB7XFxuICAgICAgICBoZWlnaHQ6IDEuNmVtO1xcbiAgICAgICAgd2lkdGg6IDEuNmVtO1xcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xcbiAgICB9XFxuXFxuICAgIC50YWcuaXMtdGFibGUtdGFnIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMC44cmVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgICBoZWlnaHQ6IDEuNGVtO1xcbiAgICAgICAgcGFkZGluZzogN3B4O1xcbiAgICB9XFxuXFxuICAgIGxpLmNoaWxkLXJvdzpub3QoOmxhc3QtY2hpbGQpIHtcXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xcbiAgICB9XFxuXFxuICAgIGxpLmNoaWxkLXJvdyB7XFxuICAgICAgICBwYWRkaW5nOiAwLjVlbSAwO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWRiZmE5ZmNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPHRib2R5PlxuICAgICAgICA8dHIgdi1mb3I9XCIocm93LCBpbmRleCkgaW4gYm9keS5kYXRhXCJcbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGFibGUtY3J0LW5vXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ0ZW1wbGF0ZS5hbGlnblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInRlbXBsYXRlLmNydE5vICYmICFpc0NoaWxkKHJvdylcIj5cbiAgICAgICAgICAgICAgICB7eyBnZXRJbmRleChyb3cpIH19XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImhpZGRlbkNvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlRXhwYW5kKHJvdywgaW5kZXgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtbWludXMtc3F1YXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpc0V4cGFuZGVkKHJvdylcIj5cbiAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXBsdXMtc3F1YXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgOmNsYXNzPVwidGVtcGxhdGUuYWxpZ25cIlxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKGNvbHVtbiwgaW5kZXgpIGluIHRlbXBsYXRlLmNvbHVtbnNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImNvbHVtbi5tZXRhLnZpc2libGUgJiYgIWNvbHVtbi5tZXRhLmhpZGRlbiAmJiAhaXNDaGlsZChyb3cpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNvbHVtbi5tZXRhLmJvb2xlYW5cIlxuICAgICAgICAgICAgICAgICAgICB2LWh0bWw9XCJyb3dbY29sdW1uLm5hbWVdID8gdGVtcGxhdGUuYm9vbGVhblsxXSA6IHRlbXBsYXRlLmJvb2xlYW5bMF1cIj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVwiY29sdW1uLm1ldGEucmVuZGVyXCJcbiAgICAgICAgICAgICAgICAgICAgdi1odG1sPVwiY3VzdG9tUmVuZGVyKHJvdywgY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XCJjb2x1bW4ubWV0YS50cmFuc2xhdGlvblwiPnt7IGkxOG4ocm93W2NvbHVtbi5uYW1lXSkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPnt7IHJvd1tjb2x1bW4ubmFtZV0gfX08L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwidGFibGUtYWN0aW9uc1wiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwidGVtcGxhdGUuYWxpZ25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJ0ZW1wbGF0ZS5hY3Rpb25zICYmICFpc0NoaWxkKHJvdylcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhYmxlLWFjdGlvbi1idXR0b25zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIHYtZm9yPVwiKGJ1dHRvbiwgaW5kZXgpIGluIHRlbXBsYXRlLmJ1dHRvbnMucm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBpcy1zbWFsbCBpcy10YWJsZS1idXR0b24gaGFzLW1hcmdpbi1sZWZ0LXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cImJ1dHRvbi5jbGFzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6aHJlZj1cImJ1dHRvbi5hY3Rpb24gPT09ICdocmVmJyA/IGdldFBhdGgoYnV0dG9uLCByb3cuZHRSb3dJZCkgOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImJ1dHRvbi5jb25maXJtYXRpb24gPyBzaG93TW9kYWwoYnV0dG9uLCByb3cpIDogZG9BY3Rpb24oYnV0dG9uLCByb3cpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJidXR0b24uaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgOmNvbHNwYW49XCJoaWRkZW5Db2xTcGFuXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ0ZW1wbGF0ZS5hbGlnblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImlzQ2hpbGQocm93KVwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwiY2hpbGQtcm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiY29sdW1uIGluIHJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiY29sdW1uLmxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8Yj57eyBjb2x1bW4ubGFiZWwgfX08L2I+OiB7eyBjb2x1bW4udmFsdWUgfX1cbiAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgPC90cj5cbiAgICAgICAgPG1vZGFsIHYtaWY9XCJtb2RhbFwiXG4gICAgICAgICAgICA6c2hvdz1cIm1vZGFsXCJcbiAgICAgICAgICAgIDppMThuPVwiaTE4blwiXG4gICAgICAgICAgICA6bWVzc2FnZT1cImJ1dHRvbi5tZXNzYWdlXCJcbiAgICAgICAgICAgIEBjYW5jZWwtYWN0aW9uPVwiY2xvc2VNb2RhbCgpXCJcbiAgICAgICAgICAgIEBjb21taXQtYWN0aW9uPVwiZG9BY3Rpb24oYnV0dG9uLCByb3cpXCI+XG4gICAgICAgIDwvbW9kYWw+XG4gICAgPC90Ym9keT5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IFRhYmxlQm9keSBmcm9tICcuL1RhYmxlQm9keS52dWUnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdUYWJsZUJvZHknLFxuXG4gICAgY29tcG9uZW50czogeyBUYWJsZUJvZHksIE1vZGFsIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21SZW5kZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZXhwYW5kZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGhpZGRlbkNvbHVtbnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5jb2x1bW5zXG4gICAgICAgICAgICAgICAgLmZpbHRlcihjb2x1bW4gPT4gY29sdW1uLm1ldGEuaGlkZGVuICYmIGNvbHVtbi5tZXRhLnZpc2libGUpO1xuICAgICAgICB9LFxuICAgICAgICBoaWRkZW5Db3VudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmhpZGRlbkNvbHVtbnMubGVuZ3RoO1xuICAgICAgICB9LFxuICAgICAgICBoaWRkZW5Db2xTcGFuKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGUuY29sdW1ucy5sZW5ndGggLSB0aGlzLmhpZGRlbkNvbHVtbnMubGVuZ3RoXG4gICAgICAgICAgICAgICAgKyAodGhpcy50ZW1wbGF0ZS5hY3Rpb25zID8gMiA6IDEpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgcm93OiBudWxsLFxuICAgICAgICAgICAgYnV0dG9uOiBudWxsLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICBoaWRkZW5Db3VudDoge1xuICAgICAgICAgICAgaGFuZGxlcihuZXdWYWwpIHtcbiAgICAgICAgICAgICAgICBpZiAoIW5ld1ZhbCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNoaWxkcygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0UGF0aChidXR0b24sIGR0Um93SWQpIHtcbiAgICAgICAgICAgIHJldHVybiBidXR0b24ucGF0aC5yZXBsYWNlKCdkdFJvd0lkJywgZHRSb3dJZCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNob3dNb2RhbChidXR0b24sIHJvdykge1xuICAgICAgICAgICAgdGhpcy5yb3cgPSByb3c7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbiA9IGJ1dHRvbjtcbiAgICAgICAgICAgIHRoaXMubW9kYWwgPSB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZU1vZGFsKCkge1xuICAgICAgICAgICAgdGhpcy5tb2RhbCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5yb3cgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5idXR0b24gPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBkb0FjdGlvbihidXR0b24sIHJvdykge1xuICAgICAgICAgICAgaWYgKHRoaXMubW9kYWwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChidXR0b24uZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KGJ1dHRvbi5ldmVudCwgcm93KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5hY3Rpb24gPT09ICdhamF4Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2FqYXgnLCBidXR0b24ubWV0aG9kLCB0aGlzLmdldFBhdGgoYnV0dG9uLCByb3cuZHRSb3dJZCkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5hY3Rpb24gPT09ICdyb3V0ZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiBidXR0b24ucm91dGUsIHBhcmFtczogdGhpcy5nZXRSb3V0ZVBhcmFtcyhidXR0b24sIHJvdykgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGdldFJvdXRlUGFyYW1zKGJ1dHRvbiwgcm93KSB7XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgaWQ6IHJvdy5kdFJvd0lkLFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihwYXJhbXMsIGJ1dHRvbi5wYXJhbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcGFyYW1zO1xuICAgICAgICB9LFxuICAgICAgICBnZXRJbmRleChyb3cpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvZHkuZGF0YS5maWx0ZXIociA9PiAhdGhpcy5pc0NoaWxkKHIpKVxuICAgICAgICAgICAgICAgIC5maW5kSW5kZXgociA9PiByLmR0Um93SWQgPT09IHJvdy5kdFJvd0lkKSArIHRoaXMuc3RhcnQgKyAxO1xuICAgICAgICB9LFxuICAgICAgICBpc0V4cGFuZGVkKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZXhwYW5kZWQuaW5jbHVkZXMocm93LmR0Um93SWQpO1xuICAgICAgICB9LFxuICAgICAgICBpc0NoaWxkKHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocm93KTtcbiAgICAgICAgfSxcbiAgICAgICAgdG9nZ2xlRXhwYW5kKHJvdywgaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0V4cGFuZGVkKHJvdykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZGVkLnB1c2gocm93LmR0Um93SWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGRSb3cocm93LCBpbmRleCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpZHggPSB0aGlzLmV4cGFuZGVkLmZpbmRJbmRleChpZCA9PiBpZCA9PT0gcm93LmR0Um93SWQpO1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZC5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuYm9keS5kYXRhLnNwbGljZShpbmRleCArIDEsIDEpO1xuICAgICAgICB9LFxuICAgICAgICBhZGRDaGlsZFJvdyhyb3csIGluZGV4KSB7XG4gICAgICAgICAgICBjb25zdCBuZXdSb3cgPSB0aGlzLmhpZGRlbkNvbHVtbnMucmVkdWNlKChjb2xsZWN0b3IsIGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbGxlY3Rvci5wdXNoKHsgbGFiZWw6IGNvbHVtbi5sYWJlbCwgdmFsdWU6IHJvd1tjb2x1bW4ubmFtZV0gfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3RvcjtcbiAgICAgICAgICAgIH0sIFtdKTtcblxuICAgICAgICAgICAgdGhpcy5ib2R5LmRhdGEuc3BsaWNlKGluZGV4ICsgMSwgMCwgbmV3Um93KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlQ2hpbGRzKCkge1xuICAgICAgICAgICAgY29uc3QgaW5kZXhlcyA9IFtdO1xuXG4gICAgICAgICAgICB0aGlzLmJvZHkuZGF0YS5mb3JFYWNoKChyb3csIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDaGlsZChyb3cpKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ZXMucHVzaChpbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGluZGV4ZXMuc29ydCgoYSwgYikgPT4gYSA8IGIpLmZvckVhY2goaW5kZXggPT4gdGhpcy5ib2R5LmRhdGEuc3BsaWNlKGluZGV4LCAxKSk7XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQuc3BsaWNlKDApO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgdGQudGFibGUtY3J0LW5vIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRhYmxlLWNydC1ubyAuZmEtcGx1cy1zcXVhcmUsXG4gICAgLnRhYmxlLWNydC1ubyAuZmEtbWludXMtc3F1YXJlIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIHRkLnRhYmxlLWFjdGlvbnMge1xuICAgICAgICBwYWRkaW5nOiAuMzVlbSAuNWVtO1xuICAgIH1cblxuICAgIHNwYW4udGFibGUtYWN0aW9uLWJ1dHRvbnMge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB9XG5cbiAgICAuYnV0dG9uLmlzLXNtYWxsLmlzLXRhYmxlLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS42ZW07XG4gICAgICAgIHdpZHRoOiAxLjZlbTtcbiAgICAgICAgZm9udC1zaXplOiAuOWVtO1xuICAgIH1cblxuICAgIC50YWcuaXMtdGFibGUtdGFnIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBoZWlnaHQ6IDEuNGVtO1xuICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgfVxuXG4gICAgbGkuY2hpbGQtcm93Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcbiAgICB9XG5cbiAgICBsaS5jaGlsZC1yb3cge1xuICAgICAgICBwYWRkaW5nOiAwLjVlbSAwO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDQ2Yzc5OWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ0NmM3OTlmXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTW9kYWwudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ0NmM3OTlmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDQ2Yzc5OWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDQ2Yzc5OWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJmZjVlMjEzZVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NDZjNzk5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDQ2Yzc5OWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTQ0NmM3OTlmXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5tb2RhbC5pcy1hY3RpdmUge1xcbiAgICB6LWluZGV4OiAxMTAwO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOERBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJNb2RhbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XFxcImFuaW1hdGVkIGZhZGVJblxcXCJcXG4gICAgICAgIGxlYXZlLWFjdGl2ZS1jbGFzcz1cXFwiYW5pbWF0ZWQgZmFkZU91dFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbFxcXCJcXG4gICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWFjdGl2ZSc6IHNob3cgfVxcXCJcXG4gICAgICAgICAgICB2LWlmPVxcXCJzaG93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1tb2RhbCBtb2RhbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwic3VidGl0bGUgaXMtNVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGkxOG4obWVzc2FnZSB8fCBcXFwiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gcGVyZm9ybSB0aGlzIGFjdGlvbj9cXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XFxuICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgICAgICAgICA8aHI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtbGVmdFxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImNvbnRyb2xzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtc3VjY2Vzc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRlbWl0KCdjYW5jZWwtYWN0aW9uJylcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGkxOG4oXFxcIkNhbmNlbFxcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1kYW5nZXIgaGFzLW1hcmdpbi1sZWZ0LXNtYWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRlbWl0KCdjb21taXQtYWN0aW9uJylcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpMThuKFxcXCJZZXNcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3RyYW5zaXRpb24+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHNob3c6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG1lc3NhZ2U6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICBpMThuOiB7XFxuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAubW9kYWwuaXMtYWN0aXZlIHtcXG4gICAgICAgIHotaW5kZXg6IDExMDA7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00NDZjNzk5ZlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIGZhZGVJblwiXG4gICAgICAgIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIGZhZGVPdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IHNob3cgfVwiXG4gICAgICAgICAgICB2LWlmPVwic2hvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1tb2RhbCBtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwic3VidGl0bGUgaXMtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGkxOG4obWVzc2FnZSB8fCBcIkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24/XCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtbGVmdFwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ2NhbmNlbC1hY3Rpb24nKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaTE4bihcIkNhbmNlbFwiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1kYW5nZXIgaGFzLW1hcmdpbi1sZWZ0LXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgnY29tbWl0LWFjdGlvbicpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaTE4bihcIlllc1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAubW9kYWwuaXMtYWN0aXZlIHtcbiAgICAgICAgei1pbmRleDogMTEwMDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBmYWRlSW5cIixcbiAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBmYWRlT3V0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5zaG93XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbFwiLCBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBfdm0uc2hvdyB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYmFja2dyb3VuZFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLW1vZGFsIG1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJjb250ZW50XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VidGl0bGUgaXMtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmkxOG4oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5tZXNzYWdlIHx8XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBwZXJmb3JtIHRoaXMgYWN0aW9uP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1sZWZ0XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJjb250cm9sc1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY2FuY2VsLWFjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaTE4bihcIkNhbmNlbFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24gaXMtZGFuZ2VyIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImNvbW1pdC1hY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pMThuKFwiWWVzXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ0NmM3OTlmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NDZjNzk5ZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidGJvZHlcIixcbiAgICBbXG4gICAgICBfdm0uX2woX3ZtLmJvZHkuZGF0YSwgZnVuY3Rpb24ocm93LCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJ0clwiLFxuICAgICAgICAgIHsga2V5OiBpbmRleCB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF92bS50ZW1wbGF0ZS5jcnRObyAmJiAhX3ZtLmlzQ2hpbGQocm93KVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1jcnQtbm9cIiwgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldEluZGV4KHJvdykpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmhpZGRlbkNvdW50XG4gICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZUV4cGFuZChyb3csIGluZGV4KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5pc0V4cGFuZGVkKHJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtbWludXMtc3F1YXJlXCIgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcGx1cy1zcXVhcmVcIiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLmNvbHVtbnMsIGZ1bmN0aW9uKGNvbHVtbiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbi5tZXRhLnZpc2libGUgJiZcbiAgICAgICAgICAgICAgICAhY29sdW1uLm1ldGEuaGlkZGVuICYmXG4gICAgICAgICAgICAgICAgIV92bS5pc0NoaWxkKHJvdylcbiAgICAgICAgICAgICAgICA/IF9jKFwidGRcIiwgeyBrZXk6IGluZGV4LCBjbGFzczogX3ZtLnRlbXBsYXRlLmFsaWduIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uLm1ldGEuYm9vbGVhblxuICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd1tjb2x1bW4ubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0udGVtcGxhdGUuYm9vbGVhblsxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS50ZW1wbGF0ZS5ib29sZWFuWzBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIDogY29sdW1uLm1ldGEucmVuZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKF92bS5jdXN0b21SZW5kZXIocm93LCBjb2x1bW4pKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIDogY29sdW1uLm1ldGEudHJhbnNsYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uaTE4bihyb3dbY29sdW1uLm5hbWVdKSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3Mocm93W2NvbHVtbi5uYW1lXSkpXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLnRlbXBsYXRlLmFjdGlvbnMgJiYgIV92bS5pc0NoaWxkKHJvdylcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtYWN0aW9uc1wiLCBjbGFzczogX3ZtLnRlbXBsYXRlLmFsaWduIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtYWN0aW9uLWJ1dHRvbnNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGVtcGxhdGUuYnV0dG9ucy5yb3csIGZ1bmN0aW9uKGJ1dHRvbiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24gaXMtc21hbGwgaXMtdGFibGUtYnV0dG9uIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBidXR0b24uY2xhc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5hY3Rpb24gPT09IFwiaHJlZlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfdm0uZ2V0UGF0aChidXR0b24sIHJvdy5kdFJvd0lkKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uLmNvbmZpcm1hdGlvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnNob3dNb2RhbChidXR0b24sIHJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5kb0FjdGlvbihidXR0b24sIHJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgY2xhc3M6IGJ1dHRvbi5pY29uIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmlzQ2hpbGQocm93KVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnRlbXBsYXRlLmFsaWduLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBfdm0uaGlkZGVuQ29sU3BhbiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHJvdywgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGNvbHVtbi5sYWJlbCwgc3RhdGljQ2xhc3M6IFwiY2hpbGQtcm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhjb2x1bW4ubGFiZWwpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArIF92bS5fcyhjb2x1bW4udmFsdWUpICsgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5tb2RhbFxuICAgICAgICA/IF9jKFwibW9kYWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc2hvdzogX3ZtLm1vZGFsLFxuICAgICAgICAgICAgICBpMThuOiBfdm0uaTE4bixcbiAgICAgICAgICAgICAgbWVzc2FnZTogX3ZtLmJ1dHRvbi5tZXNzYWdlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJjYW5jZWwtYWN0aW9uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5jbG9zZU1vZGFsKClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjb21taXQtYWN0aW9uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5kb0FjdGlvbihfdm0uYnV0dG9uLCBfdm0ucm93KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVkYmZhOWZjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZGJmYTlmY1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iMmQxOWYwYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUZvb3Rlci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1RhYmxlRm9vdGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjJkMTlmMGFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UYWJsZUZvb3Rlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYjJkMTlmMGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iMmQxOWYwYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iMmQxOWYwYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUZvb3Rlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQxNGEzYTc4XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWIyZDE5ZjBhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlRm9vdGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iMmQxOWYwYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUZvb3Rlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYjJkMTlmMGFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIlRhYmxlRm9vdGVyLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWIyZDE5ZjBhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPHRmb290PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwidGVtcGxhdGUuY29sdW1uc1swXS5tZXRhLnZpc2libGUgJiYgIXRlbXBsYXRlLmNvbHVtbnNbMF0ubWV0YS5oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICB7eyBpMThuKFwiVG90YWxcIikgfX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJoYXMtdGV4dC1jZW50ZXJlZCBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICAgICAgdi1mb3I9XCJpIGluIHRlbXBsYXRlLmNvbHVtbnMubGVuZ3RoIC0gMVwiXG4gICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJ0ZW1wbGF0ZS5jb2x1bW5zW2ldLm1ldGEudmlzaWJsZSAmJiAhdGVtcGxhdGUuY29sdW1uc1tpXS5tZXRhLmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ0ZW1wbGF0ZS5jb2x1bW5zW2ldLm1ldGEudG90YWxcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbnVtYmVyRm9ybWF0KGJvZHkudG90YWxbdGVtcGxhdGUuY29sdW1uc1tpXS5uYW1lXSkgfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIHYtaWY9XCJ0ZW1wbGF0ZS5hY3Rpb25zXCI+PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3Rmb290PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1RhYmxlRm9vdGVyJyxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbnVtYmVyRm9ybWF0KHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgbGV0IHgxID0geFswXTtcbiAgICAgICAgICAgIGNvbnN0IHgyID0geC5sZW5ndGggPiAxID8gYC4ke3hbMV19YCA6ICcnO1xuICAgICAgICAgICAgY29uc3Qgcmd4ID0gLyhcXGQrKShcXGR7M30pLztcblxuICAgICAgICAgICAgd2hpbGUgKHJneC50ZXN0KHgxKSkge1xuICAgICAgICAgICAgICAgIHgxID0geDEucmVwbGFjZShyZ3gsICckMSwkMicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geDEgKyB4MjtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRmb290XCIsIFtcbiAgICBfYyhcbiAgICAgIFwidHJcIixcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ0ZFwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnRlbXBsYXRlLmNvbHVtbnNbMF0ubWV0YS52aXNpYmxlICYmXG4gICAgICAgICFfdm0udGVtcGxhdGUuY29sdW1uc1swXS5tZXRhLmhpZGRlblxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoYXMtdGV4dC1jZW50ZXJlZCBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5pMThuKFwiVG90YWxcIikpICsgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5jb2x1bW5zLmxlbmd0aCAtIDEsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICByZXR1cm4gX3ZtLnRlbXBsYXRlLmNvbHVtbnNbaV0ubWV0YS52aXNpYmxlICYmXG4gICAgICAgICAgICAhX3ZtLnRlbXBsYXRlLmNvbHVtbnNbaV0ubWV0YS5oaWRkZW5cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhcy10ZXh0LWNlbnRlcmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS50ZW1wbGF0ZS5jb2x1bW5zW2ldLm1ldGEudG90YWxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm51bWJlckZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmJvZHkudG90YWxbX3ZtLnRlbXBsYXRlLmNvbHVtbnNbaV0ubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnRlbXBsYXRlLmFjdGlvbnMgPyBfYyhcInRkXCIpIDogX3ZtLl9lKClcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1iMmQxOWYwYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYjJkMTlmMGFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01OWYyMTAwMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZWNvcmRzSW5mby52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JlY29yZHNJbmZvLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTlmMjEwMDJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9SZWNvcmRzSW5mby52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTlmMjEwMDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01OWYyMTAwMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01OWYyMTAwMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZWNvcmRzSW5mby52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjNlNTViN2RhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU5ZjIxMDAyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1JlY29yZHNJbmZvLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01OWYyMTAwMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZWNvcmRzSW5mby52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNTlmMjEwMDJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhYmxlLWVudHJpZXMtaW5mbyB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlDQTtJQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlJlY29yZHNJbmZvLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWJsZS1lbnRyaWVzLWluZm9cXFwiPlxcbiAgICAgICAge3sgYCR7aTE4bignRnJvbScpfSAke3N0YXJ0ICsgMX0gJHtpMThuKCd0bycpfSAkeyhzdGFydCArIGxlbmd0aCkgPD0gYm9keS5maWx0ZXJlZCA/IHN0YXJ0ICsgbGVuZ3RoIDogYm9keS5maWx0ZXJlZH0gXFxcXFxcbiAgICAgICAgJHtpMThuKCdvZicpfSAke2JvZHkuZmlsdGVyZWR9ICR7aTE4bignZW50cmllcycpfWAgfX1cXG4gICAgICAgIDxzcGFuIHYtaWY9XFxcImJvZHkuZmlsdGVyZWQgIT09IGJvZHkuY291bnRcXFwiPlxcbiAgICAgICAgICAgIHt7IGAoJHtpMThuKCdmaWx0ZXJlZCcpfSAke2kxOG4oJ2Zyb20nKX0gJHtib2R5LmNvdW50fSBcXFxcXFxuICAgICAgICAgICAgJHtpMThuKCd0b3RhbCcpfSAke2kxOG4oJ3JlY29yZHMnKX0pYCB9fVxcbiAgICAgICAgPC9zcGFuPlxcbiAgICA8L3NwYW4+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ1JlY29yZHNJbmZvJyxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHN0YXJ0OiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGxlbmd0aDoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBib2R5OiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGkxOG46IHtcXG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIC50YWJsZS1lbnRyaWVzLWluZm8ge1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNTlmMjEwMDJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8c3BhbiBjbGFzcz1cInRhYmxlLWVudHJpZXMtaW5mb1wiPlxuICAgICAgICB7eyBgJHtpMThuKCdGcm9tJyl9ICR7c3RhcnQgKyAxfSAke2kxOG4oJ3RvJyl9ICR7KHN0YXJ0ICsgbGVuZ3RoKSA8PSBib2R5LmZpbHRlcmVkID8gc3RhcnQgKyBsZW5ndGggOiBib2R5LmZpbHRlcmVkfSBcXFxuICAgICAgICAke2kxOG4oJ29mJyl9ICR7Ym9keS5maWx0ZXJlZH0gJHtpMThuKCdlbnRyaWVzJyl9YCB9fVxuICAgICAgICA8c3BhbiB2LWlmPVwiYm9keS5maWx0ZXJlZCAhPT0gYm9keS5jb3VudFwiPlxuICAgICAgICAgICAge3sgYCgke2kxOG4oJ2ZpbHRlcmVkJyl9ICR7aTE4bignZnJvbScpfSAke2JvZHkuY291bnR9IFxcXG4gICAgICAgICAgICAke2kxOG4oJ3RvdGFsJyl9ICR7aTE4bigncmVjb3JkcycpfSlgIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnUmVjb3Jkc0luZm8nLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsZW5ndGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIC50YWJsZS1lbnRyaWVzLWluZm8ge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWVudHJpZXMtaW5mb1wiIH0sIFtcbiAgICBfdm0uX3YoXG4gICAgICBcIlxcbiAgICBcIiArXG4gICAgICAgIF92bS5fcyhcbiAgICAgICAgICBfdm0uaTE4bihcIkZyb21cIikgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgKF92bS5zdGFydCArIDEpICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIF92bS5pMThuKFwidG9cIikgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgKF92bS5zdGFydCArIF92bS5sZW5ndGggPD0gX3ZtLmJvZHkuZmlsdGVyZWRcbiAgICAgICAgICAgICAgPyBfdm0uc3RhcnQgKyBfdm0ubGVuZ3RoXG4gICAgICAgICAgICAgIDogX3ZtLmJvZHkuZmlsdGVyZWQpICtcbiAgICAgICAgICAgIFwiICAgICBcIiArXG4gICAgICAgICAgICBfdm0uaTE4bihcIm9mXCIpICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIF92bS5ib2R5LmZpbHRlcmVkICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIF92bS5pMThuKFwiZW50cmllc1wiKVxuICAgICAgICApICtcbiAgICAgICAgXCJcXG4gICAgXCJcbiAgICApLFxuICAgIF92bS5ib2R5LmZpbHRlcmVkICE9PSBfdm0uYm9keS5jb3VudFxuICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICBcIiArXG4gICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICBcIihcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uaTE4bihcImZpbHRlcmVkXCIpICtcbiAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5pMThuKFwiZnJvbVwiKSArXG4gICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uYm9keS5jb3VudCArXG4gICAgICAgICAgICAgICAgICBcIiAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5pMThuKFwidG90YWxcIikgK1xuICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLmkxOG4oXCJyZWNvcmRzXCIpICtcbiAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICBcIlxcbiAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNTlmMjEwMDJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU5ZjIxMDAyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2Y1ZjRhZDBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGFnaW5hdGlvbi52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1BhZ2luYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03ZjVmNGFkMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1BhZ2luYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2Y1ZjRhZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZjVmNGFkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdmNWY0YWQwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BhZ2luYXRpb24udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJiMWU3MmZhMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZjVmNGFkMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZjVmNGFkMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03ZjVmNGFkMFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbm5hdi50YWJsZS1uYXZpZ2F0aW9uIHtcXG4gICAgbWF4LXdpZHRoOiA0MjVweDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK0hBO0lBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiUGFnaW5hdGlvbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8bmF2IGNsYXNzPVxcXCJ0YWJsZS1wYWdpbmF0aW9uIHBhZ2luYXRpb24gaXMtc21hbGxcXFwiXFxuICAgICAgICByb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIlxcbiAgICAgICAgYXJpYS1sYWJlbD1cXFwicGFnaW5hdGlvblxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1wcmV2aW91c1xcXCJcXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcInBhZ2UgPT09IDFcXFwiXFxuICAgICAgICAgICAgQGNsaWNrPVxcXCJqdW1wVG8ocGFnZSAtIDEpXFxcIj5cXG4gICAgICAgICAgICB7eyBpMThuKCdQcmV2aW91cycpIH19XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1uZXh0XFxcIlxcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwicGFnZSA9PT0gcGFnZXNcXFwiXFxuICAgICAgICAgICAgQGNsaWNrPVxcXCJqdW1wVG8ocGFnZSArIDEpXFxcIj5cXG4gICAgICAgICAgICB7eyBpMThuKCdOZXh0JykgfX1cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwicGFnaW5hdGlvbi1saXN0XFxcIj5cXG4gICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWN1cnJlbnQnOiBwYWdlID09PSAxIH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImp1bXBUbygxKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSB2LWlmPVxcXCJwYWdlcyA+IDUgJiYgIWF0U3RhcnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicGFnaW5hdGlvbi1lbGxpcHNpc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAmaGVsbGlwO1xcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgdi1mb3I9XFxcImkgaW4gbWlkZGxlUGFnZXNcXFwiXFxuICAgICAgICAgICAgICAgIDprZXk9XFxcImlcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1jdXJyZW50JzogcGFnZSA9PT0gaSB9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJqdW1wVG8oaSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3sgaSB9fVxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgdi1pZj1cXFwicGFnZXMgPiA1ICYmICFhdEVuZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWVsbGlwc2lzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICZoZWxsaXA7XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSB2LWlmPVxcXCJwYWdlcyA+IDFcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1jdXJyZW50JzogcGFnZSA9PT0gcGFnZXMgfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwianVtcFRvKHBhZ2VzKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7eyBwYWdlcyB9fVxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvbmF2PlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdQYWdpbmF0aW9uJyxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHJlY29yZHM6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgc3RhcnQ6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgbGVuZ3RoOiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGkxOG46IHtcXG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICBwYWdlKCkge1xcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5zdGFydCAvIHRoaXMubGVuZ3RoKSArIDE7XFxuICAgICAgICB9LFxcbiAgICAgICAgcGFnZXMoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnJlY29yZHMgLyB0aGlzLmxlbmd0aCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgYXRTdGFydCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlIDwgNDtcXG4gICAgICAgIH0sXFxuICAgICAgICBhdEVuZCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlcyAtIHRoaXMucGFnZSA8IDM7XFxuICAgICAgICB9LFxcbiAgICAgICAgbWlkZGxlUGFnZXMoKSB7XFxuICAgICAgICAgICAgY29uc3QgcGFnZXMgPSBbXTtcXG5cXG4gICAgICAgICAgICBpZiAodGhpcy5hdFN0YXJ0KSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWluKHRoaXMucGFnZXMgLSAxLCA0KTtcXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gbWF4OyBpKyspIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLnB1c2goaSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2VzO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpZiAodGhpcy5hdEVuZCkge1xcbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHRoaXMucGFnZXMgLSAzLCB0aGlzLnBhZ2VzIC0gMiwgdGhpcy5wYWdlcyAtIDEpO1xcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFnZXM7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHBhZ2VzLnB1c2godGhpcy5wYWdlIC0gMSwgdGhpcy5wYWdlLCB0aGlzLnBhZ2UgKyAxKTtcXG5cXG4gICAgICAgICAgICByZXR1cm4gcGFnZXM7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBqdW1wVG8ocGFnZSkge1xcbiAgICAgICAgICAgIGlmIChwYWdlID09PSB0aGlzLnBhZ2UgfHwgcGFnZSA8IDEgfHwgcGFnZSA+IHRoaXMucGFnZXMpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdqdW1wLXRvJywgKHBhZ2UgLSAxKSAqIHRoaXMubGVuZ3RoKTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIG5hdi50YWJsZS1uYXZpZ2F0aW9uIHtcXG4gICAgICAgIG1heC13aWR0aDogNDI1cHg7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03ZjVmNGFkMFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPG5hdiBjbGFzcz1cInRhYmxlLXBhZ2luYXRpb24gcGFnaW5hdGlvbiBpcy1zbWFsbFwiXG4gICAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLXByZXZpb3VzXCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cInBhZ2UgPT09IDFcIlxuICAgICAgICAgICAgQGNsaWNrPVwianVtcFRvKHBhZ2UgLSAxKVwiPlxuICAgICAgICAgICAge3sgaTE4bignUHJldmlvdXMnKSB9fVxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1uZXh0XCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cInBhZ2UgPT09IHBhZ2VzXCJcbiAgICAgICAgICAgIEBjbGljaz1cImp1bXBUbyhwYWdlICsgMSlcIj5cbiAgICAgICAgICAgIHt7IGkxOG4oJ05leHQnKSB9fVxuICAgICAgICA8L2E+XG4gICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb24tbGlzdFwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtY3VycmVudCc6IHBhZ2UgPT09IDEgfVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImp1bXBUbygxKVwiPlxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSB2LWlmPVwicGFnZXMgPiA1ICYmICFhdFN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWVsbGlwc2lzXCI+XG4gICAgICAgICAgICAgICAgICAgICZoZWxsaXA7XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSB2LWZvcj1cImkgaW4gbWlkZGxlUGFnZXNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJpXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1jdXJyZW50JzogcGFnZSA9PT0gaSB9XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwianVtcFRvKGkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGkgfX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHYtaWY9XCJwYWdlcyA+IDUgJiYgIWF0RW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWVsbGlwc2lzXCI+XG4gICAgICAgICAgICAgICAgICAgICZoZWxsaXA7XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSB2LWlmPVwicGFnZXMgPiAxXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1jdXJyZW50JzogcGFnZSA9PT0gcGFnZXMgfVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImp1bXBUbyhwYWdlcylcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcGFnZXMgfX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvbmF2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1BhZ2luYXRpb24nLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgcmVjb3Jkczoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgcGFnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5zdGFydCAvIHRoaXMubGVuZ3RoKSArIDE7XG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnJlY29yZHMgLyB0aGlzLmxlbmd0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIGF0U3RhcnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlIDwgNDtcbiAgICAgICAgfSxcbiAgICAgICAgYXRFbmQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlcyAtIHRoaXMucGFnZSA8IDM7XG4gICAgICAgIH0sXG4gICAgICAgIG1pZGRsZVBhZ2VzKCkge1xuICAgICAgICAgICAgY29uc3QgcGFnZXMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXRTdGFydCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWluKHRoaXMucGFnZXMgLSAxLCA0KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBtYXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwYWdlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYXRFbmQpIHtcbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHRoaXMucGFnZXMgLSAzLCB0aGlzLnBhZ2VzIC0gMiwgdGhpcy5wYWdlcyAtIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYWdlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFnZXMucHVzaCh0aGlzLnBhZ2UgLSAxLCB0aGlzLnBhZ2UsIHRoaXMucGFnZSArIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFnZXM7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAganVtcFRvKHBhZ2UpIHtcbiAgICAgICAgICAgIGlmIChwYWdlID09PSB0aGlzLnBhZ2UgfHwgcGFnZSA8IDEgfHwgcGFnZSA+IHRoaXMucGFnZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2p1bXAtdG8nLCAocGFnZSAtIDEpICogdGhpcy5sZW5ndGgpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgbmF2LnRhYmxlLW5hdmlnYXRpb24ge1xuICAgICAgICBtYXgtd2lkdGg6IDQyNXB4O1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibmF2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGFibGUtcGFnaW5hdGlvbiBwYWdpbmF0aW9uIGlzLXNtYWxsXCIsXG4gICAgICBhdHRyczogeyByb2xlOiBcIm5hdmlnYXRpb25cIiwgXCJhcmlhLWxhYmVsXCI6IFwicGFnaW5hdGlvblwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tcHJldmlvdXNcIixcbiAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLnBhZ2UgPT09IDEgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uanVtcFRvKF92bS5wYWdlIC0gMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5pMThuKFwiUHJldmlvdXNcIikpICsgXCJcXG4gICAgXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLW5leHRcIixcbiAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLnBhZ2UgPT09IF92bS5wYWdlcyB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5qdW1wVG8oX3ZtLnBhZ2UgKyAxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmkxOG4oXCJOZXh0XCIpKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpc3RcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWN1cnJlbnRcIjogX3ZtLnBhZ2UgPT09IDEgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uanVtcFRvKDEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ucGFnZXMgPiA1ICYmICFfdm0uYXRTdGFydFxuICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWVsbGlwc2lzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOKAplxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5taWRkbGVQYWdlcywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IGkgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtY3VycmVudFwiOiBfdm0ucGFnZSA9PT0gaSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5qdW1wVG8oaSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpKSArIFwiXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnBhZ2VzID4gNSAmJiAhX3ZtLmF0RW5kXG4gICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tZWxsaXBzaXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg4oCmXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ucGFnZXMgPiAxXG4gICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWN1cnJlbnRcIjogX3ZtLnBhZ2UgPT09IF92bS5wYWdlcyB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5qdW1wVG8oX3ZtLnBhZ2VzKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGFnZXMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03ZjVmNGFkMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtN2Y1ZjRhZDBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDExODVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY3NmMyOTdjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL092ZXJsYXkudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9PdmVybGF5LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjc2YzI5N2NcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9PdmVybGF5LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWY3NmMyOTdjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZjc2YzI5N2NcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNzZjMjk3Y1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9PdmVybGF5LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNzczOThiOTNcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjc2YzI5N2NcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vT3ZlcmxheS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjc2YzI5N2NcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vT3ZlcmxheS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZjc2YzI5N2NcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udmR0LW92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnZkdC1vdmVybGF5LWxvYWRlciB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Bcm91bmQgNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBhbmltYXRpb246IHNwaW5Bcm91bmQgNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyOTA0ODZweDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMmVtO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2QkE7SUFDQSxxQ0FBQTtJQUNBLHFCQUFBO0lBQUEscUJBQUE7SUFBQSxjQUFBO0NBQ0E7QUFFQTtJQUNBLGFBQUE7SUFDQSxvREFBQTtJQUNBLDRDQUFBO0lBQ0Esd0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiT3ZlcmxheS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ2ZHQtb3ZlcmxheSBpcy1vdmVybGF5XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInZkdC1vdmVybGF5LWxvYWRlclxcXCJcXG4gICAgICAgICAgICA6c3R5bGU9XFxcIm92ZXJsYXlcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdPdmVybGF5JyxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIG92ZXJsYXkoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMGQxYjInLFxcbiAgICAgICAgICAgICAgICAnYm9yZGVyLXJpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcXG4gICAgICAgICAgICAgICAgJ2JvcmRlci10b3AtY29sb3InOiAndHJhbnNwYXJlbnQnLFxcbiAgICAgICAgICAgIH07XFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAudmR0LW92ZXJsYXkge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAudmR0LW92ZXJsYXktbG9hZGVyIHtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluQXJvdW5kIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbkFyb3VuZCA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyOTA0ODZweDtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogMmVtO1xcbiAgICAgICAgaGVpZ2h0OiAyZW07XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1mNzZjMjk3Y1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cInZkdC1vdmVybGF5IGlzLW92ZXJsYXlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZkdC1vdmVybGF5LWxvYWRlclwiXG4gICAgICAgICAgICA6c3R5bGU9XCJvdmVybGF5XCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ092ZXJsYXknLFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgb3ZlcmxheSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMGQxYjInLFxuICAgICAgICAgICAgICAgICdib3JkZXItcmlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICdib3JkZXItdG9wLWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAudmR0LW92ZXJsYXkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLnZkdC1vdmVybGF5LWxvYWRlciB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Bcm91bmQgNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICBhbmltYXRpb246IHNwaW5Bcm91bmQgNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyOTA0ODZweDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2ZHQtb3ZlcmxheSBpcy1vdmVybGF5XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmR0LW92ZXJsYXktbG9hZGVyXCIsIHN0eWxlOiBfdm0ub3ZlcmxheSB9KVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1mNzZjMjk3Y1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZjc2YzI5N2NcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWVcbi8vIG1vZHVsZSBpZCA9IDExOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJpbXBvcnQgcmVzaXplRGV0ZWN0b3IgZnJvbSAnZWxlbWVudC1yZXNpemUtZGV0ZWN0b3InO1xuaW1wb3J0IFJlc3BvbnNpdmVUYWJsZSBmcm9tICcuL1Jlc3BvbnNpdmVUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbnNlcnRlZDogKGVsLCBiaW5kaW5nLCB7IGNvbnRleHQgfSkgPT4ge1xuICAgICAgICBjb25zdCB0YWJsZSA9IG5ldyBSZXNwb25zaXZlVGFibGUoZWwsIGNvbnRleHQpO1xuICAgICAgICBjb25zdCBlcmQgPSByZXNpemVEZXRlY3Rvcih7IHN0cmF0ZWd5OiAnc2Nyb2xsJyB9KTtcblxuICAgICAgICB0YWJsZS5yZXNpemUoKTtcblxuICAgICAgICBlcmQubGlzdGVuVG8oZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRhYmxlLnJlc2l6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNwb25zaXZlL3ZSZXNwb25zaXZlLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBmb3JFYWNoICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL2NvbGxlY3Rpb24tdXRpbHNcIikuZm9yRWFjaDtcbnZhciBlbGVtZW50VXRpbHNNYWtlciAgICAgICA9IHJlcXVpcmUoXCIuL2VsZW1lbnQtdXRpbHNcIik7XG52YXIgbGlzdGVuZXJIYW5kbGVyTWFrZXIgICAgPSByZXF1aXJlKFwiLi9saXN0ZW5lci1oYW5kbGVyXCIpO1xudmFyIGlkR2VuZXJhdG9yTWFrZXIgICAgICAgID0gcmVxdWlyZShcIi4vaWQtZ2VuZXJhdG9yXCIpO1xudmFyIGlkSGFuZGxlck1ha2VyICAgICAgICAgID0gcmVxdWlyZShcIi4vaWQtaGFuZGxlclwiKTtcbnZhciByZXBvcnRlck1ha2VyICAgICAgICAgICA9IHJlcXVpcmUoXCIuL3JlcG9ydGVyXCIpO1xudmFyIGJyb3dzZXJEZXRlY3RvciAgICAgICAgID0gcmVxdWlyZShcIi4vYnJvd3Nlci1kZXRlY3RvclwiKTtcbnZhciBiYXRjaFByb2Nlc3Nvck1ha2VyICAgICA9IHJlcXVpcmUoXCJiYXRjaC1wcm9jZXNzb3JcIik7XG52YXIgc3RhdGVIYW5kbGVyICAgICAgICAgICAgPSByZXF1aXJlKFwiLi9zdGF0ZS1oYW5kbGVyXCIpO1xuXG4vL0RldGVjdGlvbiBzdHJhdGVnaWVzLlxudmFyIG9iamVjdFN0cmF0ZWd5TWFrZXIgICAgID0gcmVxdWlyZShcIi4vZGV0ZWN0aW9uLXN0cmF0ZWd5L29iamVjdC5qc1wiKTtcbnZhciBzY3JvbGxTdHJhdGVneU1ha2VyICAgICA9IHJlcXVpcmUoXCIuL2RldGVjdGlvbi1zdHJhdGVneS9zY3JvbGwuanNcIik7XG5cbmZ1bmN0aW9uIGlzQ29sbGVjdGlvbihvYmopIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopIHx8IG9iai5sZW5ndGggIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShjb2xsZWN0aW9uKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3JFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2gob2JqKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiBpZEhhbmRsZXJcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXQgR2V0cyB0aGUgcmVzaXplIGRldGVjdG9yIGlkIG9mIHRoZSBlbGVtZW50LlxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc2V0IEdlbmVyYXRlIGFuZCBzZXRzIHRoZSByZXNpemUgZGV0ZWN0b3IgaWQgb2YgdGhlIGVsZW1lbnQuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQHByb3BlcnR5IHtib29sZWFufSBjYWxsT25BZGQgICAgRGV0ZXJtaW5lcyBpZiBsaXN0ZW5lcnMgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZXkgYXJlIGdldHRpbmcgYWRkZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWZhdWx0IGlzIHRydWUuIElmIHRydWUsIHRoZSBsaXN0ZW5lciBpcyBndWFyYW50ZWVkIHRvIGJlIGNhbGxlZCB3aGVuIGl0IGhhcyBiZWVuIGFkZGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgZmFsc2UsIHRoZSBsaXN0ZW5lciB3aWxsIG5vdCBiZSBndWFyZW50ZWVkIHRvIGJlIGNhbGxlZCB3aGVuIGl0IGhhcyBiZWVuIGFkZGVkIChkb2VzIG5vdCBwcmV2ZW50IGl0IGZyb20gYmVpbmcgY2FsbGVkKS5cbiAqIEBwcm9wZXJ0eSB7aWRIYW5kbGVyfSBpZEhhbmRsZXIgIEEgY3VzdG9tIGlkIGhhbmRsZXIgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgZ2VuZXJhdGluZywgc2V0dGluZyBhbmQgcmV0cmlldmluZyBpZCdzIGZvciBlbGVtZW50cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIG5vdCBwcm92aWRlZCwgYSBkZWZhdWx0IGlkIGhhbmRsZXIgd2lsbCBiZSB1c2VkLlxuICogQHByb3BlcnR5IHtyZXBvcnRlcn0gcmVwb3J0ZXIgICAgQSBjdXN0b20gcmVwb3J0ZXIgdGhhdCBoYW5kbGVzIHJlcG9ydGluZyBsb2dzLCB3YXJuaW5ncyBhbmQgZXJyb3JzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgbm90IHByb3ZpZGVkLCBhIGRlZmF1bHQgaWQgaGFuZGxlciB3aWxsIGJlIHVzZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBzZXQgdG8gZmFsc2UsIHRoZW4gbm90aGluZyB3aWxsIGJlIHJlcG9ydGVkLlxuICogQHByb3BlcnR5IHtib29sZWFufSBkZWJ1ZyAgICAgICAgSWYgc2V0IHRvIHRydWUsIHRoZSB0aGUgc3lzdGVtIHdpbGwgcmVwb3J0IGRlYnVnIG1lc3NhZ2VzIGFzIGRlZmF1bHQgZm9yIHRoZSBsaXN0ZW5UbyBtZXRob2QuXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGVsZW1lbnQgcmVzaXplIGRldGVjdG9yIGluc3RhbmNlLlxuICogQHB1YmxpY1xuICogQHBhcmFtIHtPcHRpb25zP30gb3B0aW9ucyBPcHRpb25hbCBnbG9iYWwgb3B0aW9ucyBvYmplY3QgdGhhdCB3aWxsIGRlY2lkZSBob3cgdGhpcyBpbnN0YW5jZSB3aWxsIHdvcmsuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy9pZEhhbmRsZXIgaXMgY3VycmVudGx5IG5vdCBhbiBvcHRpb24gdG8gdGhlIGxpc3RlblRvIGZ1bmN0aW9uLCBzbyBpdCBzaG91bGQgbm90IGJlIGFkZGVkIHRvIGdsb2JhbE9wdGlvbnMuXG4gICAgdmFyIGlkSGFuZGxlcjtcblxuICAgIGlmIChvcHRpb25zLmlkSGFuZGxlcikge1xuICAgICAgICAvLyBUbyBtYWludGFpbiBjb21wYXRhYmlsaXR5IHdpdGggaWRIYW5kbGVyLmdldChlbGVtZW50LCByZWFkb25seSksIG1ha2Ugc3VyZSB0byB3cmFwIHRoZSBnaXZlbiBpZEhhbmRsZXJcbiAgICAgICAgLy8gc28gdGhhdCByZWFkb25seSBmbGFnIGFsd2F5cyBpcyB0cnVlIHdoZW4gaXQncyB1c2VkIGhlcmUuIFRoaXMgbWF5IGJlIHJlbW92ZWQgbmV4dCBtYWpvciB2ZXJzaW9uIGJ1bXAuXG4gICAgICAgIGlkSGFuZGxlciA9IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIG9wdGlvbnMuaWRIYW5kbGVyLmdldChlbGVtZW50LCB0cnVlKTsgfSxcbiAgICAgICAgICAgIHNldDogb3B0aW9ucy5pZEhhbmRsZXIuc2V0XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlkR2VuZXJhdG9yID0gaWRHZW5lcmF0b3JNYWtlcigpO1xuICAgICAgICB2YXIgZGVmYXVsdElkSGFuZGxlciA9IGlkSGFuZGxlck1ha2VyKHtcbiAgICAgICAgICAgIGlkR2VuZXJhdG9yOiBpZEdlbmVyYXRvcixcbiAgICAgICAgICAgIHN0YXRlSGFuZGxlcjogc3RhdGVIYW5kbGVyXG4gICAgICAgIH0pO1xuICAgICAgICBpZEhhbmRsZXIgPSBkZWZhdWx0SWRIYW5kbGVyO1xuICAgIH1cblxuICAgIC8vcmVwb3J0ZXIgaXMgY3VycmVudGx5IG5vdCBhbiBvcHRpb24gdG8gdGhlIGxpc3RlblRvIGZ1bmN0aW9uLCBzbyBpdCBzaG91bGQgbm90IGJlIGFkZGVkIHRvIGdsb2JhbE9wdGlvbnMuXG4gICAgdmFyIHJlcG9ydGVyID0gb3B0aW9ucy5yZXBvcnRlcjtcblxuICAgIGlmKCFyZXBvcnRlcikge1xuICAgICAgICAvL0lmIG9wdGlvbnMucmVwb3J0ZXIgaXMgZmFsc2UsIHRoZW4gdGhlIHJlcG9ydGVyIHNob3VsZCBiZSBxdWlldC5cbiAgICAgICAgdmFyIHF1aWV0ID0gcmVwb3J0ZXIgPT09IGZhbHNlO1xuICAgICAgICByZXBvcnRlciA9IHJlcG9ydGVyTWFrZXIocXVpZXQpO1xuICAgIH1cblxuICAgIC8vYmF0Y2hQcm9jZXNzb3IgaXMgY3VycmVudGx5IG5vdCBhbiBvcHRpb24gdG8gdGhlIGxpc3RlblRvIGZ1bmN0aW9uLCBzbyBpdCBzaG91bGQgbm90IGJlIGFkZGVkIHRvIGdsb2JhbE9wdGlvbnMuXG4gICAgdmFyIGJhdGNoUHJvY2Vzc29yID0gZ2V0T3B0aW9uKG9wdGlvbnMsIFwiYmF0Y2hQcm9jZXNzb3JcIiwgYmF0Y2hQcm9jZXNzb3JNYWtlcih7IHJlcG9ydGVyOiByZXBvcnRlciB9KSk7XG5cbiAgICAvL09wdGlvbnMgdG8gYmUgdXNlZCBhcyBkZWZhdWx0IGZvciB0aGUgbGlzdGVuVG8gZnVuY3Rpb24uXG4gICAgdmFyIGdsb2JhbE9wdGlvbnMgPSB7fTtcbiAgICBnbG9iYWxPcHRpb25zLmNhbGxPbkFkZCAgICAgPSAhIWdldE9wdGlvbihvcHRpb25zLCBcImNhbGxPbkFkZFwiLCB0cnVlKTtcbiAgICBnbG9iYWxPcHRpb25zLmRlYnVnICAgICAgICAgPSAhIWdldE9wdGlvbihvcHRpb25zLCBcImRlYnVnXCIsIGZhbHNlKTtcblxuICAgIHZhciBldmVudExpc3RlbmVySGFuZGxlciAgICA9IGxpc3RlbmVySGFuZGxlck1ha2VyKGlkSGFuZGxlcik7XG4gICAgdmFyIGVsZW1lbnRVdGlscyAgICAgICAgICAgID0gZWxlbWVudFV0aWxzTWFrZXIoe1xuICAgICAgICBzdGF0ZUhhbmRsZXI6IHN0YXRlSGFuZGxlclxuICAgIH0pO1xuXG4gICAgLy9UaGUgZGV0ZWN0aW9uIHN0cmF0ZWd5IHRvIGJlIHVzZWQuXG4gICAgdmFyIGRldGVjdGlvblN0cmF0ZWd5O1xuICAgIHZhciBkZXNpcmVkU3RyYXRlZ3kgPSBnZXRPcHRpb24ob3B0aW9ucywgXCJzdHJhdGVneVwiLCBcIm9iamVjdFwiKTtcbiAgICB2YXIgc3RyYXRlZ3lPcHRpb25zID0ge1xuICAgICAgICByZXBvcnRlcjogcmVwb3J0ZXIsXG4gICAgICAgIGJhdGNoUHJvY2Vzc29yOiBiYXRjaFByb2Nlc3NvcixcbiAgICAgICAgc3RhdGVIYW5kbGVyOiBzdGF0ZUhhbmRsZXIsXG4gICAgICAgIGlkSGFuZGxlcjogaWRIYW5kbGVyXG4gICAgfTtcblxuICAgIGlmKGRlc2lyZWRTdHJhdGVneSA9PT0gXCJzY3JvbGxcIikge1xuICAgICAgICBpZiAoYnJvd3NlckRldGVjdG9yLmlzTGVnYWN5T3BlcmEoKSkge1xuICAgICAgICAgICAgcmVwb3J0ZXIud2FybihcIlNjcm9sbCBzdHJhdGVneSBpcyBub3Qgc3VwcG9ydGVkIG9uIGxlZ2FjeSBPcGVyYS4gQ2hhbmdpbmcgdG8gb2JqZWN0IHN0cmF0ZWd5LlwiKTtcbiAgICAgICAgICAgIGRlc2lyZWRTdHJhdGVneSA9IFwib2JqZWN0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoYnJvd3NlckRldGVjdG9yLmlzSUUoOSkpIHtcbiAgICAgICAgICAgIHJlcG9ydGVyLndhcm4oXCJTY3JvbGwgc3RyYXRlZ3kgaXMgbm90IHN1cHBvcnRlZCBvbiBJRTkuIENoYW5naW5nIHRvIG9iamVjdCBzdHJhdGVneS5cIik7XG4gICAgICAgICAgICBkZXNpcmVkU3RyYXRlZ3kgPSBcIm9iamVjdFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoZGVzaXJlZFN0cmF0ZWd5ID09PSBcInNjcm9sbFwiKSB7XG4gICAgICAgIGRldGVjdGlvblN0cmF0ZWd5ID0gc2Nyb2xsU3RyYXRlZ3lNYWtlcihzdHJhdGVneU9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZihkZXNpcmVkU3RyYXRlZ3kgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZGV0ZWN0aW9uU3RyYXRlZ3kgPSBvYmplY3RTdHJhdGVneU1ha2VyKHN0cmF0ZWd5T3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzdHJhdGVneSBuYW1lOiBcIiArIGRlc2lyZWRTdHJhdGVneSk7XG4gICAgfVxuXG4gICAgLy9DYWxscyBjYW4gYmUgbWFkZSB0byBsaXN0ZW5UbyB3aXRoIGVsZW1lbnRzIHRoYXQgYXJlIHN0aWxsIGJlaW5nIGluc3RhbGxlZC5cbiAgICAvL0Fsc28sIHNhbWUgZWxlbWVudHMgY2FuIG9jY3VyIGluIHRoZSBlbGVtZW50cyBsaXN0IGluIHRoZSBsaXN0ZW5UbyBmdW5jdGlvbi5cbiAgICAvL1dpdGggdGhpcyBtYXAsIHRoZSByZWFkeSBjYWxsYmFja3MgY2FuIGJlIHN5bmNocm9uaXplZCBiZXR3ZWVuIHRoZSBjYWxsc1xuICAgIC8vc28gdGhhdCB0aGUgcmVhZHkgY2FsbGJhY2sgY2FuIGFsd2F5cyBiZSBjYWxsZWQgd2hlbiBhbiBlbGVtZW50IGlzIHJlYWR5IC0gZXZlbiBpZlxuICAgIC8vaXQgd2Fzbid0IGluc3RhbGxlZCBmcm9tIHRoZSBmdW5jdGlvbiBpdHNlbGYuXG4gICAgdmFyIG9uUmVhZHlDYWxsYmFja3MgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBnaXZlbiBlbGVtZW50cyByZXNpemUtZGV0ZWN0YWJsZSBhbmQgc3RhcnRzIGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIG9uIHRoZSBlbGVtZW50cy4gQ2FsbHMgdGhlIGV2ZW50IGNhbGxiYWNrIGZvciBlYWNoIGV2ZW50IGZvciBlYWNoIGVsZW1lbnQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7T3B0aW9ucz99IG9wdGlvbnMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QuIFRoZXNlIG9wdGlvbnMgd2lsbCBvdmVycmlkZSB0aGUgZ2xvYmFsIG9wdGlvbnMuIFNvbWUgb3B0aW9ucyBtYXkgbm90IGJlIG92ZXJyaWRlbiwgc3VjaCBhcyBpZEhhbmRsZXIuXG4gICAgICogQHBhcmFtIHtlbGVtZW50W118ZWxlbWVudH0gZWxlbWVudHMgVGhlIGdpdmVuIGFycmF5IG9mIGVsZW1lbnRzIHRvIGRldGVjdCByZXNpemUgZXZlbnRzIG9mLiBTaW5nbGUgZWxlbWVudCBpcyBhbHNvIHZhbGlkLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIFRoZSBjYWxsYmFjayB0byBiZSBleGVjdXRlZCBmb3IgZWFjaCByZXNpemUgZXZlbnQgZm9yIGVhY2ggZWxlbWVudC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaXN0ZW5UbyhvcHRpb25zLCBlbGVtZW50cywgbGlzdGVuZXIpIHtcbiAgICAgICAgZnVuY3Rpb24gb25SZXNpemVDYWxsYmFjayhlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gZXZlbnRMaXN0ZW5lckhhbmRsZXIuZ2V0KGVsZW1lbnQpO1xuICAgICAgICAgICAgZm9yRWFjaChsaXN0ZW5lcnMsIGZ1bmN0aW9uIGNhbGxMaXN0ZW5lclByb3h5KGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNhbGxPbkFkZCwgZWxlbWVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJIYW5kbGVyLmFkZChlbGVtZW50LCBsaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIGlmKGNhbGxPbkFkZCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9PcHRpb25zIG9iamVjdCBtYXkgYmUgb21pdHRlZC5cbiAgICAgICAgaWYoIWxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IGVsZW1lbnRzO1xuICAgICAgICAgICAgZWxlbWVudHMgPSBvcHRpb25zO1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWVsZW1lbnRzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdCBsZWFzdCBvbmUgZWxlbWVudCByZXF1aXJlZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZighbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkxpc3RlbmVyIHJlcXVpcmVkLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0VsZW1lbnQoZWxlbWVudHMpKSB7XG4gICAgICAgICAgICAvLyBBIHNpbmdsZSBlbGVtZW50IGhhcyBiZWVuIHBhc3NlZCBpbi5cbiAgICAgICAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0NvbGxlY3Rpb24oZWxlbWVudHMpKSB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGNvbGxlY3Rpb24gdG8gYXJyYXkgZm9yIHBsdWdpbnMuXG4gICAgICAgICAgICAvLyBUT0RPOiBNYXkgd2FudCB0byBjaGVjayBzbyB0aGF0IGFsbCB0aGUgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb24gYXJlIHZhbGlkIGVsZW1lbnRzLlxuICAgICAgICAgICAgZWxlbWVudHMgPSB0b0FycmF5KGVsZW1lbnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXBvcnRlci5lcnJvcihcIkludmFsaWQgYXJndW1lbnRzLiBNdXN0IGJlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb2xsZWN0aW9uIG9mIERPTSBlbGVtZW50cy5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWxlbWVudHNSZWFkeSA9IDA7XG5cbiAgICAgICAgdmFyIGNhbGxPbkFkZCA9IGdldE9wdGlvbihvcHRpb25zLCBcImNhbGxPbkFkZFwiLCBnbG9iYWxPcHRpb25zLmNhbGxPbkFkZCk7XG4gICAgICAgIHZhciBvblJlYWR5Q2FsbGJhY2sgPSBnZXRPcHRpb24ob3B0aW9ucywgXCJvblJlYWR5XCIsIGZ1bmN0aW9uIG5vb3AoKSB7fSk7XG4gICAgICAgIHZhciBkZWJ1ZyA9IGdldE9wdGlvbihvcHRpb25zLCBcImRlYnVnXCIsIGdsb2JhbE9wdGlvbnMuZGVidWcpO1xuXG4gICAgICAgIGZvckVhY2goZWxlbWVudHMsIGZ1bmN0aW9uIGF0dGFjaExpc3RlbmVyVG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghc3RhdGVIYW5kbGVyLmdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVIYW5kbGVyLmluaXRTdGF0ZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZEhhbmRsZXIuc2V0KGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaWQgPSBpZEhhbmRsZXIuZ2V0KGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBkZWJ1ZyAmJiByZXBvcnRlci5sb2coXCJBdHRhY2hpbmcgbGlzdGVuZXIgdG8gZWxlbWVudFwiLCBpZCwgZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGlmKCFlbGVtZW50VXRpbHMuaXNEZXRlY3RhYmxlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgZGVidWcgJiYgcmVwb3J0ZXIubG9nKGlkLCBcIk5vdCBkZXRlY3RhYmxlLlwiKTtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50VXRpbHMuaXNCdXN5KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnICYmIHJlcG9ydGVyLmxvZyhpZCwgXCJTeXN0ZW0gYnVzeSBtYWtpbmcgaXQgZGV0ZWN0YWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvL1RoZSBlbGVtZW50IGlzIGJlaW5nIHByZXBhcmVkIHRvIGJlIGRldGVjdGFibGUuIERvIG5vdCBtYWtlIGl0IGRldGVjdGFibGUuXG4gICAgICAgICAgICAgICAgICAgIC8vSnVzdCBhZGQgdGhlIGxpc3RlbmVyLCBiZWNhdXNlIHRoZSBlbGVtZW50IHdpbGwgc29vbiBiZSBkZXRlY3RhYmxlLlxuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcihjYWxsT25BZGQsIGVsZW1lbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgb25SZWFkeUNhbGxiYWNrc1tpZF0gPSBvblJlYWR5Q2FsbGJhY2tzW2lkXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgb25SZWFkeUNhbGxiYWNrc1tpZF0ucHVzaChmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNSZWFkeSsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50c1JlYWR5ID09PSBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlYWR5Q2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWJ1ZyAmJiByZXBvcnRlci5sb2coaWQsIFwiTWFraW5nIGRldGVjdGFibGUuLi5cIik7XG4gICAgICAgICAgICAgICAgLy9UaGUgZWxlbWVudCBpcyBub3QgcHJlcGFyZWQgdG8gYmUgZGV0ZWN0YWJsZSwgc28gZG8gcHJlcGFyZSBpdCBhbmQgYWRkIGEgbGlzdGVuZXIgdG8gaXQuXG4gICAgICAgICAgICAgICAgZWxlbWVudFV0aWxzLm1hcmtCdXN5KGVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXRlY3Rpb25TdHJhdGVneS5tYWtlRGV0ZWN0YWJsZSh7IGRlYnVnOiBkZWJ1ZyB9LCBlbGVtZW50LCBmdW5jdGlvbiBvbkVsZW1lbnREZXRlY3RhYmxlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcgJiYgcmVwb3J0ZXIubG9nKGlkLCBcIm9uRWxlbWVudERldGVjdGFibGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlSGFuZGxlci5nZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFV0aWxzLm1hcmtBc0RldGVjdGFibGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VXRpbHMubWFya0J1c3koZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0aW9uU3RyYXRlZ3kuYWRkTGlzdGVuZXIoZWxlbWVudCwgb25SZXNpemVDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcihjYWxsT25BZGQsIGVsZW1lbnQsIGxpc3RlbmVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIGVsZW1lbnQgc2l6ZSBtaWdodCBoYXZlIGNoYW5nZWQgc2luY2UgdGhlIGNhbGwgdG8gXCJsaXN0ZW5Ub1wiLCB3ZSBuZWVkIHRvIGNoZWNrIGZvciB0aGlzIGNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgYSByZXNpemUgZXZlbnQgbWF5IGJlIGVtaXR0ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYXZpbmcgdGhlIHN0YXJ0U2l6ZSBvYmplY3QgaXMgb3B0aW9uYWwgKHNpbmNlIGl0IGRvZXMgbm90IG1ha2Ugc2Vuc2UgaW4gc29tZSBjYXNlcyBzdWNoIGFzIHVucmVuZGVyZWQgZWxlbWVudHMpLCBzbyBjaGVjayBmb3IgaXRzIGV4aXN0YW5jZSBiZWZvcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbHNvLCBjaGVjayB0aGUgc3RhdGUgZXhpc3RhbmNlIGJlZm9yZSBzaW5jZSB0aGUgZWxlbWVudCBtYXkgaGF2ZSBiZWVuIHVuaW5zdGFsbGVkIGluIHRoZSBpbnN0YWxsYXRpb24gcHJvY2Vzcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IHN0YXRlSGFuZGxlci5nZXRTdGF0ZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5zdGFydFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc3RhcnRTaXplLndpZHRoICE9PSB3aWR0aCB8fCBzdGF0ZS5zdGFydFNpemUuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNpemVDYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9uUmVhZHlDYWxsYmFja3NbaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yRWFjaChvblJlYWR5Q2FsbGJhY2tzW2lkXSwgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IGhhcyBiZWVuIHVuaXNudGFsbGVkIGJlZm9yZSBiZWluZyBkZXRlY3RhYmxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcgJiYgcmVwb3J0ZXIubG9nKGlkLCBcIkVsZW1lbnQgdW5pbnN0YWxsZWQgYmVmb3JlIGJlaW5nIGRldGVjdGFibGUuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9uUmVhZHlDYWxsYmFja3NbaWRdO1xuXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzUmVhZHkrKztcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudHNSZWFkeSA9PT0gZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlYWR5Q2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWJ1ZyAmJiByZXBvcnRlci5sb2coaWQsIFwiQWxyZWFkeSBkZXRlY2FibGUsIGFkZGluZyBsaXN0ZW5lci5cIik7XG5cbiAgICAgICAgICAgIC8vVGhlIGVsZW1lbnQgaGFzIGJlZW4gcHJlcGFyZWQgdG8gYmUgZGV0ZWN0YWJsZSBhbmQgaXMgcmVhZHkgdG8gYmUgbGlzdGVuZWQgdG8uXG4gICAgICAgICAgICBhZGRMaXN0ZW5lcihjYWxsT25BZGQsIGVsZW1lbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGVsZW1lbnRzUmVhZHkrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoZWxlbWVudHNSZWFkeSA9PT0gZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBvblJlYWR5Q2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuaW5zdGFsbChlbGVtZW50cykge1xuICAgICAgICBpZighZWxlbWVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBvcnRlci5lcnJvcihcIkF0IGxlYXN0IG9uZSBlbGVtZW50IGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0VsZW1lbnQoZWxlbWVudHMpKSB7XG4gICAgICAgICAgICAvLyBBIHNpbmdsZSBlbGVtZW50IGhhcyBiZWVuIHBhc3NlZCBpbi5cbiAgICAgICAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0NvbGxlY3Rpb24oZWxlbWVudHMpKSB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGNvbGxlY3Rpb24gdG8gYXJyYXkgZm9yIHBsdWdpbnMuXG4gICAgICAgICAgICAvLyBUT0RPOiBNYXkgd2FudCB0byBjaGVjayBzbyB0aGF0IGFsbCB0aGUgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb24gYXJlIHZhbGlkIGVsZW1lbnRzLlxuICAgICAgICAgICAgZWxlbWVudHMgPSB0b0FycmF5KGVsZW1lbnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXBvcnRlci5lcnJvcihcIkludmFsaWQgYXJndW1lbnRzLiBNdXN0IGJlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb2xsZWN0aW9uIG9mIERPTSBlbGVtZW50cy5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JFYWNoKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lckhhbmRsZXIucmVtb3ZlQWxsTGlzdGVuZXJzKGVsZW1lbnQpO1xuICAgICAgICAgICAgZGV0ZWN0aW9uU3RyYXRlZ3kudW5pbnN0YWxsKGVsZW1lbnQpO1xuICAgICAgICAgICAgc3RhdGVIYW5kbGVyLmNsZWFuU3RhdGUoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3RlblRvOiBsaXN0ZW5UbyxcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IGV2ZW50TGlzdGVuZXJIYW5kbGVyLnJlbW92ZUxpc3RlbmVyLFxuICAgICAgICByZW1vdmVBbGxMaXN0ZW5lcnM6IGV2ZW50TGlzdGVuZXJIYW5kbGVyLnJlbW92ZUFsbExpc3RlbmVycyxcbiAgICAgICAgdW5pbnN0YWxsOiB1bmluc3RhbGxcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0T3B0aW9uKG9wdGlvbnMsIG5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNbbmFtZV07XG5cbiAgICBpZigodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkgJiYgZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGdldFN0YXRlID0gb3B0aW9ucy5zdGF0ZUhhbmRsZXIuZ2V0U3RhdGU7XG5cbiAgICAvKipcbiAgICAgKiBUZWxscyBpZiB0aGUgZWxlbWVudCBoYXMgYmVlbiBtYWRlIGRldGVjdGFibGUgYW5kIHJlYWR5IHRvIGJlIGxpc3RlbmVkIGZvciByZXNpemUgZXZlbnRzLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IFRoZSBlbGVtZW50IHRvIGNoZWNrLlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIG9yIGZhbHNlIGRlcGVuZGluZyBvbiBpZiB0aGUgZWxlbWVudCBpcyBkZXRlY3RhYmxlIG9yIG5vdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc0RldGVjdGFibGUoZWxlbWVudCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZShlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHN0YXRlICYmICEhc3RhdGUuaXNEZXRlY3RhYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcmtzIHRoZSBlbGVtZW50IHRoYXQgaXQgaGFzIGJlZW4gbWFkZSBkZXRlY3RhYmxlIGFuZCByZWFkeSB0byBiZSBsaXN0ZW5lZCBmb3IgcmVzaXplIGV2ZW50cy5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBUaGUgZWxlbWVudCB0byBtYXJrLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1hcmtBc0RldGVjdGFibGUoZWxlbWVudCkge1xuICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5pc0RldGVjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlbGxzIGlmIHRoZSBlbGVtZW50IGlzIGJ1c3kgb3Igbm90LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IFRoZSBlbGVtZW50IHRvIGNoZWNrLlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIG9yIGZhbHNlIGRlcGVuZGluZyBvbiBpZiB0aGUgZWxlbWVudCBpcyBidXN5IG9yIG5vdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc0J1c3koZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gISFnZXRTdGF0ZShlbGVtZW50KS5idXN5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcmtzIHRoZSBvYmplY3QgaXMgYnVzeSBhbmQgc2hvdWxkIG5vdCBiZSBtYWRlIGRldGVjdGFibGUuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBtYXJrLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYnVzeSBJZiB0aGUgZWxlbWVudCBpcyBidXN5IG9yIG5vdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtYXJrQnVzeShlbGVtZW50LCBidXN5KSB7XG4gICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLmJ1c3kgPSAhIWJ1c3k7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNEZXRlY3RhYmxlOiBpc0RldGVjdGFibGUsXG4gICAgICAgIG1hcmtBc0RldGVjdGFibGU6IG1hcmtBc0RldGVjdGFibGUsXG4gICAgICAgIGlzQnVzeTogaXNCdXN5LFxuICAgICAgICBtYXJrQnVzeTogbWFya0J1c3lcbiAgICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9lbGVtZW50LXV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaWRIYW5kbGVyKSB7XG4gICAgdmFyIGV2ZW50TGlzdGVuZXJzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFsbCBsaXN0ZW5lcnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gZ2V0IGFsbCBsaXN0ZW5lcnMgZm9yLlxuICAgICAqIEByZXR1cm5zIEFsbCBsaXN0ZW5lcnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldExpc3RlbmVycyhlbGVtZW50KSB7XG4gICAgICAgIHZhciBpZCA9IGlkSGFuZGxlci5nZXQoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBldmVudExpc3RlbmVyc1tpZF0gfHwgW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcmVzIHRoZSBnaXZlbiBsaXN0ZW5lciBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuIFdpbGwgbm90IGFjdHVhbGx5IGFkZCB0aGUgbGlzdGVuZXIgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBoYXZlIHRoZSBsaXN0ZW5lciBhZGRlZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBUaGUgY2FsbGJhY2sgdGhhdCB0aGUgZWxlbWVudCBoYXMgYWRkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoZWxlbWVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGlkID0gaWRIYW5kbGVyLmdldChlbGVtZW50KTtcblxuICAgICAgICBpZighZXZlbnRMaXN0ZW5lcnNbaWRdKSB7XG4gICAgICAgICAgICBldmVudExpc3RlbmVyc1tpZF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzW2lkXS5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBsaXN0ZW5lcikge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gZ2V0TGlzdGVuZXJzKGVsZW1lbnQpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhlbGVtZW50KSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gZ2V0TGlzdGVuZXJzKGVsZW1lbnQpO1xuICAgICAgaWYgKCFsaXN0ZW5lcnMpIHsgcmV0dXJuOyB9XG4gICAgICBsaXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6IGdldExpc3RlbmVycyxcbiAgICAgICAgYWRkOiBhZGRMaXN0ZW5lcixcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IHJlbW92ZUxpc3RlbmVyLFxuICAgICAgICByZW1vdmVBbGxMaXN0ZW5lcnM6IHJlbW92ZUFsbExpc3RlbmVyc1xuICAgIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2xpc3RlbmVyLWhhbmRsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaWRDb3VudCA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBuZXcgdW5pcXVlIGlkIGluIHRoZSBjb250ZXh0LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBBIHVuaXF1ZSBpZCBpbiB0aGUgY29udGV4dC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGlkQ291bnQrKztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZW5lcmF0ZTogZ2VuZXJhdGVcbiAgICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9pZC1nZW5lcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGlkR2VuZXJhdG9yICAgICA9IG9wdGlvbnMuaWRHZW5lcmF0b3I7XG4gICAgdmFyIGdldFN0YXRlICAgICAgICA9IG9wdGlvbnMuc3RhdGVIYW5kbGVyLmdldFN0YXRlO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcmVzaXplIGRldGVjdG9yIGlkIG9mIHRoZSBlbGVtZW50LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIHRhcmdldCBlbGVtZW50IHRvIGdldCB0aGUgaWQgb2YuXG4gICAgICogQHJldHVybnMge3N0cmluZ3xudW1iZXJ8bnVsbH0gVGhlIGlkIG9mIHRoZSBlbGVtZW50LiBOdWxsIGlmIGl0IGhhcyBubyBpZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRJZChlbGVtZW50KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSByZXNpemUgZGV0ZWN0b3IgaWQgb2YgdGhlIGVsZW1lbnQuIFJlcXVpcmVzIHRoZSBlbGVtZW50IHRvIGhhdmUgYSByZXNpemUgZGV0ZWN0b3Igc3RhdGUgaW5pdGlhbGl6ZWQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgdGFyZ2V0IGVsZW1lbnQgdG8gc2V0IHRoZSBpZCBvZi5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bWJlcnxudWxsfSBUaGUgaWQgb2YgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0SWQoZWxlbWVudCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZShlbGVtZW50KTtcblxuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXRJZCByZXF1aXJlZCB0aGUgZWxlbWVudCB0byBoYXZlIGEgcmVzaXplIGRldGVjdGlvbiBzdGF0ZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaWQgPSBpZEdlbmVyYXRvci5nZW5lcmF0ZSgpO1xuXG4gICAgICAgIHN0YXRlLmlkID0gaWQ7XG5cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldDogZ2V0SWQsXG4gICAgICAgIHNldDogc2V0SWRcbiAgICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9pZC1oYW5kbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBjb25zb2xlOiBmYWxzZSAqL1xuXG4vKipcbiAqIFJlcG9ydGVyIHRoYXQgaGFuZGxlcyB0aGUgcmVwb3J0aW5nIG9mIGxvZ3MsIHdhcm5pbmdzIGFuZCBlcnJvcnMuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHF1aWV0IFRlbGxzIGlmIHRoZSByZXBvcnRlciBzaG91bGQgYmUgcXVpZXQgb3Igbm90LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHF1aWV0KSB7XG4gICAgZnVuY3Rpb24gbm9vcCgpIHtcbiAgICAgICAgLy9Eb2VzIG5vdGhpbmcuXG4gICAgfVxuXG4gICAgdmFyIHJlcG9ydGVyID0ge1xuICAgICAgICBsb2c6IG5vb3AsXG4gICAgICAgIHdhcm46IG5vb3AsXG4gICAgICAgIGVycm9yOiBub29wXG4gICAgfTtcblxuICAgIGlmKCFxdWlldCAmJiB3aW5kb3cuY29uc29sZSkge1xuICAgICAgICB2YXIgYXR0YWNoRnVuY3Rpb24gPSBmdW5jdGlvbihyZXBvcnRlciwgbmFtZSkge1xuICAgICAgICAgICAgLy9UaGUgcHJveHkgaXMgbmVlZGVkIHRvIGJlIGFibGUgdG8gY2FsbCB0aGUgbWV0aG9kIHdpdGggdGhlIGNvbnNvbGUgY29udGV4dCxcbiAgICAgICAgICAgIC8vc2luY2Ugd2UgY2Fubm90IHVzZSBiaW5kLlxuICAgICAgICAgICAgcmVwb3J0ZXJbbmFtZV0gPSBmdW5jdGlvbiByZXBvcnRlclByb3h5KCkge1xuICAgICAgICAgICAgICAgIHZhciBmID0gY29uc29sZVtuYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoZi5hcHBseSkgeyAvL0lFOSBkb2VzIG5vdCBzdXBwb3J0IGNvbnNvbGUubG9nLmFwcGx5IDopXG4gICAgICAgICAgICAgICAgICAgIGYuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZihhcmd1bWVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBhdHRhY2hGdW5jdGlvbihyZXBvcnRlciwgXCJsb2dcIik7XG4gICAgICAgIGF0dGFjaEZ1bmN0aW9uKHJlcG9ydGVyLCBcIndhcm5cIik7XG4gICAgICAgIGF0dGFjaEZ1bmN0aW9uKHJlcG9ydGVyLCBcImVycm9yXCIpO1xuICAgIH1cblxuICAgIHJldHVybiByZXBvcnRlcjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL3JlcG9ydGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhdGNoUHJvY2Vzc29yTWFrZXIob3B0aW9ucykge1xuICAgIG9wdGlvbnMgICAgICAgICAgICAgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciByZXBvcnRlciAgICAgICAgPSBvcHRpb25zLnJlcG9ydGVyO1xuICAgIHZhciBhc3luY1Byb2Nlc3MgICAgPSB1dGlscy5nZXRPcHRpb24ob3B0aW9ucywgXCJhc3luY1wiLCB0cnVlKTtcbiAgICB2YXIgYXV0b1Byb2Nlc3MgICAgID0gdXRpbHMuZ2V0T3B0aW9uKG9wdGlvbnMsIFwiYXV0b1wiLCB0cnVlKTtcblxuICAgIGlmKGF1dG9Qcm9jZXNzICYmICFhc3luY1Byb2Nlc3MpIHtcbiAgICAgICAgcmVwb3J0ZXIgJiYgcmVwb3J0ZXIud2FybihcIkludmFsaWQgb3B0aW9ucyBjb21iaW5hdGlvbi4gYXV0bz10cnVlIGFuZCBhc3luYz1mYWxzZSBpcyBpbnZhbGlkLiBTZXR0aW5nIGFzeW5jPXRydWUuXCIpO1xuICAgICAgICBhc3luY1Byb2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBiYXRjaCA9IEJhdGNoKCk7XG4gICAgdmFyIGFzeW5jRnJhbWVIYW5kbGVyO1xuICAgIHZhciBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGFkZEZ1bmN0aW9uKGxldmVsLCBmbikge1xuICAgICAgICBpZighaXNQcm9jZXNzaW5nICYmIGF1dG9Qcm9jZXNzICYmIGFzeW5jUHJvY2VzcyAmJiBiYXRjaC5zaXplKCkgPT09IDApIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIHRoaXMgaXMgYXN5bmMsIGl0IGlzIGd1YXJhbnRlZWQgdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhhdCB0aGUgZm4gaXMgYWRkZWQgdG8gdGhlIGJhdGNoLlxuICAgICAgICAgICAgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIGJlZm9yZSwgc2luY2Ugd2UncmUgY2hlY2tpbmcgdGhlIHNpemUgb2YgdGhlIGJhdGNoIHRvIGJlIDAuXG4gICAgICAgICAgICBwcm9jZXNzQmF0Y2hBc3luYygpO1xuICAgICAgICB9XG5cbiAgICAgICAgYmF0Y2guYWRkKGxldmVsLCBmbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0JhdGNoKCkge1xuICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50IGJhdGNoLCBhbmQgY3JlYXRlIGEgbmV3IGJhdGNoIHNvIHRoYXQgaW5jb21pbmcgZnVuY3Rpb25zIGFyZSBub3QgYWRkZWQgaW50byB0aGUgY3VycmVudGx5IHByb2Nlc3NpbmcgYmF0Y2guXG4gICAgICAgIC8vIENvbnRpbnVlIHByb2Nlc3NpbmcgdW50aWwgdGhlIHRvcC1sZXZlbCBiYXRjaCBpcyBlbXB0eSAoZnVuY3Rpb25zIG1heSBiZSBhZGRlZCB0byB0aGUgbmV3IGJhdGNoIHdoaWxlIHByb2Nlc3NpbmcsIGFuZCBzbyBvbikuXG4gICAgICAgIGlzUHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgIHdoaWxlIChiYXRjaC5zaXplKCkpIHtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzaW5nQmF0Y2ggPSBiYXRjaDtcbiAgICAgICAgICAgIGJhdGNoID0gQmF0Y2goKTtcbiAgICAgICAgICAgIHByb2Nlc3NpbmdCYXRjaC5wcm9jZXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9yY2VQcm9jZXNzQmF0Y2gobG9jYWxBc3luY1Byb2Nlc3MpIHtcbiAgICAgICAgaWYgKGlzUHJvY2Vzc2luZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobG9jYWxBc3luY1Byb2Nlc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbG9jYWxBc3luY1Byb2Nlc3MgPSBhc3luY1Byb2Nlc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZihhc3luY0ZyYW1lSGFuZGxlcikge1xuICAgICAgICAgICAgY2FuY2VsRnJhbWUoYXN5bmNGcmFtZUhhbmRsZXIpO1xuICAgICAgICAgICAgYXN5bmNGcmFtZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobG9jYWxBc3luY1Byb2Nlc3MpIHtcbiAgICAgICAgICAgIHByb2Nlc3NCYXRjaEFzeW5jKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9jZXNzQmF0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NCYXRjaEFzeW5jKCkge1xuICAgICAgICBhc3luY0ZyYW1lSGFuZGxlciA9IHJlcXVlc3RGcmFtZShwcm9jZXNzQmF0Y2gpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyQmF0Y2goKSB7XG4gICAgICAgIGJhdGNoICAgICAgICAgICA9IHt9O1xuICAgICAgICBiYXRjaFNpemUgICAgICAgPSAwO1xuICAgICAgICB0b3BMZXZlbCAgICAgICAgPSAwO1xuICAgICAgICBib3R0b21MZXZlbCAgICAgPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbEZyYW1lKGxpc3RlbmVyKSB7XG4gICAgICAgIC8vIHZhciBjYW5jZWwgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cuY2xlYXJUaW1lb3V0O1xuICAgICAgICB2YXIgY2FuY2VsID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2FuY2VsKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0RnJhbWUoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gdmFyIHJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKGZuKSB7IHJldHVybiB3aW5kb3cuc2V0VGltZW91dChmbiwgMjApOyB9O1xuICAgICAgICB2YXIgcmFmID0gZnVuY3Rpb24oZm4pIHsgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApOyB9O1xuICAgICAgICByZXR1cm4gcmFmKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGQ6IGFkZEZ1bmN0aW9uLFxuICAgICAgICBmb3JjZTogZm9yY2VQcm9jZXNzQmF0Y2hcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gQmF0Y2goKSB7XG4gICAgdmFyIGJhdGNoICAgICAgID0ge307XG4gICAgdmFyIHNpemUgICAgICAgID0gMDtcbiAgICB2YXIgdG9wTGV2ZWwgICAgPSAwO1xuICAgIHZhciBib3R0b21MZXZlbCA9IDA7XG5cbiAgICBmdW5jdGlvbiBhZGQobGV2ZWwsIGZuKSB7XG4gICAgICAgIGlmKCFmbikge1xuICAgICAgICAgICAgZm4gPSBsZXZlbDtcbiAgICAgICAgICAgIGxldmVsID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGxldmVsID4gdG9wTGV2ZWwpIHtcbiAgICAgICAgICAgIHRvcExldmVsID0gbGV2ZWw7XG4gICAgICAgIH0gZWxzZSBpZihsZXZlbCA8IGJvdHRvbUxldmVsKSB7XG4gICAgICAgICAgICBib3R0b21MZXZlbCA9IGxldmVsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWJhdGNoW2xldmVsXSkge1xuICAgICAgICAgICAgYmF0Y2hbbGV2ZWxdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBiYXRjaFtsZXZlbF0ucHVzaChmbik7XG4gICAgICAgIHNpemUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgICAgICBmb3IodmFyIGxldmVsID0gYm90dG9tTGV2ZWw7IGxldmVsIDw9IHRvcExldmVsOyBsZXZlbCsrKSB7XG4gICAgICAgICAgICB2YXIgZm5zID0gYmF0Y2hbbGV2ZWxdO1xuXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZuID0gZm5zW2ldO1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTaXplKCkge1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGQ6IGFkZCxcbiAgICAgICAgcHJvY2VzczogcHJvY2VzcyxcbiAgICAgICAgc2l6ZTogZ2V0U2l6ZVxuICAgIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYXRjaC1wcm9jZXNzb3Ivc3JjL2JhdGNoLXByb2Nlc3Nvci5qc1xuLy8gbW9kdWxlIGlkID0gMTE5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG51dGlscy5nZXRPcHRpb24gPSBnZXRPcHRpb247XG5cbmZ1bmN0aW9uIGdldE9wdGlvbihvcHRpb25zLCBuYW1lLCBkZWZhdWx0VmFsdWUpIHtcbiAgICB2YXIgdmFsdWUgPSBvcHRpb25zW25hbWVdO1xuXG4gICAgaWYoKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpICYmIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmF0Y2gtcHJvY2Vzc29yL3NyYy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcHJvcCA9IFwiX2VyZFwiO1xuXG5mdW5jdGlvbiBpbml0U3RhdGUoZWxlbWVudCkge1xuICAgIGVsZW1lbnRbcHJvcF0gPSB7fTtcbiAgICByZXR1cm4gZ2V0U3RhdGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXRlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudFtwcm9wXTtcbn1cblxuZnVuY3Rpb24gY2xlYW5TdGF0ZShlbGVtZW50KSB7XG4gICAgZGVsZXRlIGVsZW1lbnRbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGluaXRTdGF0ZTogaW5pdFN0YXRlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICBjbGVhblN0YXRlOiBjbGVhblN0YXRlXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL3N0YXRlLWhhbmRsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCIvKipcbiAqIFJlc2l6ZSBkZXRlY3Rpb24gc3RyYXRlZ3kgdGhhdCBpbmplY3RzIG9iamVjdHMgdG8gZWxlbWVudHMgaW4gb3JkZXIgdG8gZGV0ZWN0IHJlc2l6ZSBldmVudHMuXG4gKiBIZWF2aWx5IGluc3BpcmVkIGJ5OiBodHRwOi8vd3d3LmJhY2thbGxleWNvZGVyLmNvbS8yMDEzLzAzLzE4L2Nyb3NzLWJyb3dzZXItZXZlbnQtYmFzZWQtZWxlbWVudC1yZXNpemUtZGV0ZWN0aW9uL1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgYnJvd3NlckRldGVjdG9yID0gcmVxdWlyZShcIi4uL2Jyb3dzZXItZGV0ZWN0b3JcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgICAgICAgICAgICAgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciByZXBvcnRlciAgICAgICAgPSBvcHRpb25zLnJlcG9ydGVyO1xuICAgIHZhciBiYXRjaFByb2Nlc3NvciAgPSBvcHRpb25zLmJhdGNoUHJvY2Vzc29yO1xuICAgIHZhciBnZXRTdGF0ZSAgICAgICAgPSBvcHRpb25zLnN0YXRlSGFuZGxlci5nZXRTdGF0ZTtcblxuICAgIGlmKCFyZXBvcnRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHJlcXVpcmVkIGRlcGVuZGVuY3k6IHJlcG9ydGVyLlwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcmVzaXplIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBlbGVtZW50LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgaGF2ZSB0aGUgbGlzdGVuZXIgYWRkZWQuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCByZXNpemUgZXZlbnQgb2YgdGhlIGVsZW1lbnQuIFRoZSBlbGVtZW50IHdpbGwgYmUgZ2l2ZW4gYXMgYSBwYXJhbWV0ZXIgdG8gdGhlIGxpc3RlbmVyIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKGVsZW1lbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmKCFnZXRPYmplY3QoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgaXMgbm90IGRldGVjdGFibGUgYnkgdGhpcyBzdHJhdGVneS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBsaXN0ZW5lclByb3h5KCkge1xuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihicm93c2VyRGV0ZWN0b3IuaXNJRSg4KSkge1xuICAgICAgICAgICAgLy9JRSA4IGRvZXMgbm90IHN1cHBvcnQgb2JqZWN0LCBidXQgc3VwcG9ydHMgdGhlIHJlc2l6ZSBldmVudCBkaXJlY3RseSBvbiBlbGVtZW50cy5cbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLm9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICBwcm94eTogbGlzdGVuZXJQcm94eVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoXCJvbnJlc2l6ZVwiLCBsaXN0ZW5lclByb3h5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBnZXRPYmplY3QoZWxlbWVudCk7XG4gICAgICAgICAgICBvYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgbGlzdGVuZXJQcm94eSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhbiBlbGVtZW50IGRldGVjdGFibGUgYW5kIHJlYWR5IHRvIGJlIGxpc3RlbmVkIGZvciByZXNpemUgZXZlbnRzLiBXaWxsIGNhbGwgdGhlIGNhbGxiYWNrIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVhZHkgdG8gYmUgbGlzdGVuZWQgZm9yIHJlc2l6ZSBjaGFuZ2VzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QuXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIG1ha2UgZGV0ZWN0YWJsZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyByZWFkeSB0byBiZSBsaXN0ZW5lZCBmb3IgcmVzaXplIGNoYW5nZXMuIFdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGVsZW1lbnQgYXMgZmlyc3QgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1ha2VEZXRlY3RhYmxlKG9wdGlvbnMsIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZWxlbWVudDtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBvcHRpb25zO1xuICAgICAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdmFyIGRlYnVnID0gb3B0aW9ucy5kZWJ1ZztcblxuICAgICAgICBmdW5jdGlvbiBpbmplY3RPYmplY3QoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBPQkpFQ1RfU1RZTEUgPSBcImRpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgYm9yZGVyOiBub25lOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7IG9wYWNpdHk6IDA7IHotaW5kZXg6IC0xMDAwOyBwb2ludGVyLWV2ZW50czogbm9uZTtcIjtcblxuICAgICAgICAgICAgLy9UaGUgdGFyZ2V0IGVsZW1lbnQgbmVlZHMgdG8gYmUgcG9zaXRpb25lZCAoZXZlcnl0aGluZyBleGNlcHQgc3RhdGljKSBzbyB0aGUgYWJzb2x1dGUgcG9zaXRpb25lZCBvYmplY3Qgd2lsbCBiZSBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQgZWxlbWVudC5cblxuICAgICAgICAgICAgLy8gUG9zaXRpb24gYWx0ZXJpbmcgbWF5IGJlIHBlcmZvcm1lZCBkaXJlY3RseSBvciBvbiBvYmplY3QgbG9hZCwgZGVwZW5kaW5nIG9uIGlmIHN0eWxlIHJlc29sdXRpb24gaXMgcG9zc2libGUgZGlyZWN0bHkgb3Igbm90LlxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uQ2hlY2tQZXJmb3JtZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgbWF5IG5vdCB5ZXQgYmUgYXR0YWNoZWQgdG8gdGhlIERPTSwgYW5kIHRoZXJlZm9yZSB0aGUgc3R5bGUgb2JqZWN0IG1heSBiZSBlbXB0eSBpbiBzb21lIGJyb3dzZXJzLlxuICAgICAgICAgICAgLy8gU2luY2UgdGhlIHN0eWxlIG9iamVjdCBpcyBhIHJlZmVyZW5jZSwgaXQgd2lsbCBiZSB1cGRhdGVkIGFzIHNvb24gYXMgdGhlIGVsZW1lbnQgaXMgYXR0YWNoZWQgdG8gdGhlIERPTS5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkuc3RhcnRTaXplID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gbXV0YXRlRG9tKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFsdGVyUG9zaXRpb25TdHlsZXMoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHN0eWxlLnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlUmVsYXRpdmVTdHlsZXMgPSBmdW5jdGlvbihyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TnVtZXJpY2FsVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1teLVxcZFxcLl0vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcGVydHldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUgIT09IFwiYXV0b1wiICYmIGdldE51bWVyaWNhbFZhbHVlKHZhbHVlKSAhPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0ZXIud2FybihcIkFuIGVsZW1lbnQgdGhhdCBpcyBwb3NpdGlvbmVkIHN0YXRpYyBoYXMgc3R5bGUuXCIgKyBwcm9wZXJ0eSArIFwiPVwiICsgdmFsdWUgKyBcIiB3aGljaCBpcyBpZ25vcmVkIGR1ZSB0byB0aGUgc3RhdGljIHBvc2l0aW9uaW5nLiBUaGUgZWxlbWVudCB3aWxsIG5lZWQgdG8gYmUgcG9zaXRpb25lZCByZWxhdGl2ZSwgc28gdGhlIHN0eWxlLlwiICsgcHJvcGVydHkgKyBcIiB3aWxsIGJlIHNldCB0byAwLiBFbGVtZW50OiBcIiwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIHNvIHRoYXQgdGhlcmUgYXJlIG5vIGFjY2lkZW50YWwgc3R5bGVzIHRoYXQgd2lsbCBtYWtlIHRoZSBlbGVtZW50IHN0eWxlZCBkaWZmZXJlbnRseSBub3cgdGhhdCBpcyBpcyByZWxhdGl2ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vSWYgdGhlcmUgYXJlIGFueSwgc2V0IHRoZW0gdG8gMCAodGhpcyBzaG91bGQgYmUgb2theSB3aXRoIHRoZSB1c2VyIHNpbmNlIHRoZSBzdHlsZSBwcm9wZXJ0aWVzIGRpZCBub3RoaW5nIGJlZm9yZSBbc2luY2UgdGhlIGVsZW1lbnQgd2FzIHBvc2l0aW9uZWQgc3RhdGljXSBhbnl3YXkpLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVsYXRpdmVTdHlsZXMocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBcInRvcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlbGF0aXZlU3R5bGVzKHJlcG9ydGVyLCBlbGVtZW50LCBzdHlsZSwgXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlbGF0aXZlU3R5bGVzKHJlcG9ydGVyLCBlbGVtZW50LCBzdHlsZSwgXCJib3R0b21cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVSZWxhdGl2ZVN0eWxlcyhyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9uT2JqZWN0TG9hZCgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG9iamVjdCBoYXMgYmVlbiBsb2FkZWQsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIGVsZW1lbnQgbm93IGlzIGd1YXJhbnRlZWQgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIERPTS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwb3NpdGlvbkNoZWNrUGVyZm9ybWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlclBvc2l0aW9uU3R5bGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IHRydWUgKi9cblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXREb2N1bWVudChlbGVtZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9PcGVyYSAxMiBzZWVtIHRvIGNhbGwgdGhlIG9iamVjdC5vbmxvYWQgYmVmb3JlIHRoZSBhY3R1YWwgZG9jdW1lbnQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU28gaWYgaXQgaXMgbm90IHByZXNlbnQsIHBvbGwgaXQgd2l0aCBhbiB0aW1lb3V0IHVudGlsIGl0IGlzIHByZXNlbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE86IENvdWxkIG1heWJlIGJlIGhhbmRsZWQgYmV0dGVyIHdpdGggb2JqZWN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSBvciBzaW1pbGFyLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWVsZW1lbnQuY29udGVudERvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiBjaGVja0Zvck9iamVjdERvY3VtZW50KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXREb2N1bWVudChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudC5jb250ZW50RG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9NdXRhdGluZyB0aGUgb2JqZWN0IGVsZW1lbnQgaGVyZSBzZWVtcyB0byBmaXJlIGFub3RoZXIgbG9hZCBldmVudC5cbiAgICAgICAgICAgICAgICAgICAgLy9NdXRhdGluZyB0aGUgaW5uZXIgZG9jdW1lbnQgb2YgdGhlIG9iamVjdCBlbGVtZW50IGlzIGZpbmUgdGhvdWdoLlxuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0RWxlbWVudCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9DcmVhdGUgdGhlIHN0eWxlIGVsZW1lbnQgdG8gYmUgYWRkZWQgdG8gdGhlIG9iamVjdC5cbiAgICAgICAgICAgICAgICAgICAgZ2V0RG9jdW1lbnQob2JqZWN0RWxlbWVudCwgZnVuY3Rpb24gb25PYmplY3REb2N1bWVudFJlYWR5KG9iamVjdERvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL05vdGlmeSB0aGF0IHRoZSBlbGVtZW50IGlzIHJlYWR5IHRvIGJlIGxpc3RlbmVkIHRvLlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBiZSBkZXRhY2hlZCBmcm9tIHRoZSBET00sIGFuZCBzb21lIGJyb3dzZXJzIGRvZXMgbm90IHN1cHBvcnQgc3R5bGUgcmVzb2x2aW5nIG9mIGRldGFjaGVkIGVsZW1lbnRzLlxuICAgICAgICAgICAgICAgIC8vIFRoZSBhbHRlclBvc2l0aW9uU3R5bGVzIG5lZWRzIHRvIGJlIGRlbGF5ZWQgdW50aWwgd2Uga25vdyB0aGUgZWxlbWVudCBoYXMgYmVlbiBhdHRhY2hlZCB0byB0aGUgRE9NICh3aGljaCB3ZSBhcmUgc3VyZSBvZiB3aGVuIHRoZSBvbk9iamVjdExvYWQgaGFzIGJlZW4gZmlyZWQpLCBpZiBzdHlsZSByZXNvbHV0aW9uIGlzIG5vdCBwb3NzaWJsZS5cbiAgICAgICAgICAgICAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJQb3NpdGlvblN0eWxlcyhzdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2hlY2tQZXJmb3JtZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vQWRkIGFuIG9iamVjdCBlbGVtZW50IGFzIGEgY2hpbGQgdG8gdGhlIHRhcmdldCBlbGVtZW50IHRoYXQgd2lsbCBiZSBsaXN0ZW5lZCB0byBmb3IgcmVzaXplIGV2ZW50cy5cbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICBvYmplY3Quc3R5bGUuY3NzVGV4dCA9IE9CSkVDVF9TVFlMRTtcbiAgICAgICAgICAgICAgICBvYmplY3QudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICBvYmplY3QudHlwZSA9IFwidGV4dC9odG1sXCI7XG4gICAgICAgICAgICAgICAgb2JqZWN0Lm9ubG9hZCA9IG9uT2JqZWN0TG9hZDtcblxuICAgICAgICAgICAgICAgIC8vU2FmYXJpOiBUaGlzIG11c3Qgb2NjdXIgYmVmb3JlIGFkZGluZyB0aGUgb2JqZWN0IHRvIHRoZSBET00uXG4gICAgICAgICAgICAgICAgLy9JRTogRG9lcyBub3QgbGlrZSB0aGF0IHRoaXMgaGFwcGVucyBiZWZvcmUsIGV2ZW4gaWYgaXQgaXMgYWxzbyBhZGRlZCBhZnRlci5cbiAgICAgICAgICAgICAgICBpZighYnJvd3NlckRldGVjdG9yLmlzSUUoKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZGF0YSA9IFwiYWJvdXQ6YmxhbmtcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub2JqZWN0ID0gb2JqZWN0O1xuXG4gICAgICAgICAgICAgICAgLy9JRTogVGhpcyBtdXN0IG9jY3VyIGFmdGVyIGFkZGluZyB0aGUgb2JqZWN0IHRvIHRoZSBET00uXG4gICAgICAgICAgICAgICAgaWYoYnJvd3NlckRldGVjdG9yLmlzSUUoKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZGF0YSA9IFwiYWJvdXQ6YmxhbmtcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGJhdGNoUHJvY2Vzc29yKSB7XG4gICAgICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKG11dGF0ZURvbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG11dGF0ZURvbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoYnJvd3NlckRldGVjdG9yLmlzSUUoOCkpIHtcbiAgICAgICAgICAgIC8vSUUgOCBkb2VzIG5vdCBzdXBwb3J0IG9iamVjdHMgcHJvcGVybHkuIEx1Y2tpbHkgdGhleSBkbyBzdXBwb3J0IHRoZSByZXNpemUgZXZlbnQuXG4gICAgICAgICAgICAvL1NvIGRvIG5vdCBpbmplY3QgdGhlIG9iamVjdCBhbmQgbm90aWZ5IHRoYXQgdGhlIGVsZW1lbnQgaXMgYWxyZWFkeSByZWFkeSB0byBiZSBsaXN0ZW5lZCB0by5cbiAgICAgICAgICAgIC8vVGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSByZXNpemUgZXZlbnQgaXMgYXR0YWNoZWQgaW4gdGhlIHV0aWxzLmFkZExpc3RlbmVyIGluc3RlYWQuXG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluamVjdE9iamVjdChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjaGlsZCBvYmplY3Qgb2YgdGhlIHRhcmdldCBlbGVtZW50LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyBUaGUgb2JqZWN0IGVsZW1lbnQgb2YgdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRPYmplY3QoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZ2V0U3RhdGUoZWxlbWVudCkub2JqZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuaW5zdGFsbChlbGVtZW50KSB7XG4gICAgICAgIGlmKGJyb3dzZXJEZXRlY3Rvci5pc0lFKDgpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmRldGFjaEV2ZW50KFwib25yZXNpemVcIiwgZ2V0U3RhdGUoZWxlbWVudCkub2JqZWN0LnByb3h5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZ2V0T2JqZWN0KGVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgZ2V0U3RhdGUoZWxlbWVudCkub2JqZWN0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1ha2VEZXRlY3RhYmxlOiBtYWtlRGV0ZWN0YWJsZSxcbiAgICAgICAgYWRkTGlzdGVuZXI6IGFkZExpc3RlbmVyLFxuICAgICAgICB1bmluc3RhbGw6IHVuaW5zdGFsbFxuICAgIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2RldGVjdGlvbi1zdHJhdGVneS9vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCIvKipcbiAqIFJlc2l6ZSBkZXRlY3Rpb24gc3RyYXRlZ3kgdGhhdCBpbmplY3RzIGRpdnMgdG8gZWxlbWVudHMgaW4gb3JkZXIgdG8gZGV0ZWN0IHJlc2l6ZSBldmVudHMgb24gc2Nyb2xsIGV2ZW50cy5cbiAqIEhlYXZpbHkgaW5zcGlyZWQgYnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJjai9jc3MtZWxlbWVudC1xdWVyaWVzL2Jsb2IvbWFzdGVyL3NyYy9SZXNpemVTZW5zb3IuanNcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGZvckVhY2ggPSByZXF1aXJlKFwiLi4vY29sbGVjdGlvbi11dGlsc1wiKS5mb3JFYWNoO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zICAgICAgICAgICAgID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcmVwb3J0ZXIgICAgICAgID0gb3B0aW9ucy5yZXBvcnRlcjtcbiAgICB2YXIgYmF0Y2hQcm9jZXNzb3IgID0gb3B0aW9ucy5iYXRjaFByb2Nlc3NvcjtcbiAgICB2YXIgZ2V0U3RhdGUgICAgICAgID0gb3B0aW9ucy5zdGF0ZUhhbmRsZXIuZ2V0U3RhdGU7XG4gICAgdmFyIGhhc1N0YXRlICAgICAgICA9IG9wdGlvbnMuc3RhdGVIYW5kbGVyLmhhc1N0YXRlO1xuICAgIHZhciBpZEhhbmRsZXIgICAgICAgPSBvcHRpb25zLmlkSGFuZGxlcjtcblxuICAgIGlmICghYmF0Y2hQcm9jZXNzb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyByZXF1aXJlZCBkZXBlbmRlbmN5OiBiYXRjaFByb2Nlc3NvclwiKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlcG9ydGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgcmVxdWlyZWQgZGVwZW5kZW5jeTogcmVwb3J0ZXIuXCIpO1xuICAgIH1cblxuICAgIC8vVE9ETzogQ291bGQgdGhpcyBwZXJoYXBzIGJlIGRvbmUgYXQgaW5zdGFsbGF0aW9uIHRpbWU/XG4gICAgdmFyIHNjcm9sbGJhclNpemVzID0gZ2V0U2Nyb2xsYmFyU2l6ZXMoKTtcblxuICAgIC8vIEluamVjdCB0aGUgc2Nyb2xsYmFyIHN0eWxpbmcgdGhhdCBwcmV2ZW50cyB0aGVtIGZyb20gYXBwZWFyaW5nIHNvbWV0aW1lcyBpbiBDaHJvbWUuXG4gICAgLy8gVGhlIGluamVjdGVkIGNvbnRhaW5lciBuZWVkcyB0byBoYXZlIGEgY2xhc3MsIHNvIHRoYXQgaXQgbWF5IGJlIHN0eWxlZCB3aXRoIENTUyAocHNldWRvIGVsZW1lbnRzKS5cbiAgICB2YXIgc3R5bGVJZCA9IFwiZXJkX3Njcm9sbF9kZXRlY3Rpb25fc2Nyb2xsYmFyX3N0eWxlXCI7XG4gICAgdmFyIGRldGVjdGlvbkNvbnRhaW5lckNsYXNzID0gXCJlcmRfc2Nyb2xsX2RldGVjdGlvbl9jb250YWluZXJcIjtcbiAgICBpbmplY3RTY3JvbGxTdHlsZShzdHlsZUlkLCBkZXRlY3Rpb25Db250YWluZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxiYXJTaXplcygpIHtcbiAgICAgICAgdmFyIHdpZHRoID0gNTAwO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIHZhciBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNoaWxkLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IFwiICsgd2lkdGgqMiArIFwicHg7IGhlaWdodDogXCIgKyBoZWlnaHQqMiArIFwicHg7IHZpc2liaWxpdHk6IGhpZGRlbjsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO1wiO1xuXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogXCIgKyB3aWR0aCArIFwicHg7IGhlaWdodDogXCIgKyBoZWlnaHQgKyBcInB4OyBvdmVyZmxvdzogc2Nyb2xsOyB2aXNpYmlsaXR5OiBub25lOyB0b3A6IFwiICsgLXdpZHRoKjMgKyBcInB4OyBsZWZ0OiBcIiArIC1oZWlnaHQqMyArIFwicHg7IHZpc2liaWxpdHk6IGhpZGRlbjsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO1wiO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgIHZhciB3aWR0aFNpemUgPSB3aWR0aCAtIGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgICAgdmFyIGhlaWdodFNpemUgPSBoZWlnaHQgLSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoU2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0U2l6ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluamVjdFNjcm9sbFN0eWxlKHN0eWxlSWQsIGNvbnRhaW5lckNsYXNzKSB7XG4gICAgICAgIGZ1bmN0aW9uIGluamVjdFN0eWxlKHN0eWxlLCBtZXRob2QpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9IG1ldGhvZCB8fCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICAgICAgc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IHN0eWxlO1xuICAgICAgICAgICAgc3R5bGVFbGVtZW50LmlkID0gc3R5bGVJZDtcbiAgICAgICAgICAgIG1ldGhvZChzdHlsZUVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCkpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXJBbmltYXRpb25DbGFzcyA9IGNvbnRhaW5lckNsYXNzICsgXCJfYW5pbWF0aW9uXCI7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyQW5pbWF0aW9uQWN0aXZlQ2xhc3MgPSBjb250YWluZXJDbGFzcyArIFwiX2FuaW1hdGlvbl9hY3RpdmVcIjtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IFwiLyogQ3JlYXRlZCBieSB0aGUgZWxlbWVudC1yZXNpemUtZGV0ZWN0b3IgbGlicmFyeS4gKi9cXG5cIjtcbiAgICAgICAgICAgIHN0eWxlICs9IFwiLlwiICsgY29udGFpbmVyQ2xhc3MgKyBcIiA+IGRpdjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBkaXNwbGF5OiBub25lOyB9XFxuXFxuXCI7XG4gICAgICAgICAgICBzdHlsZSArPSBcIi5cIiArIGNvbnRhaW5lckFuaW1hdGlvbkFjdGl2ZUNsYXNzICsgXCIgeyAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4xczsgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjFzOyAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBcIiArIGNvbnRhaW5lckFuaW1hdGlvbkNsYXNzICsgXCI7IGFuaW1hdGlvbi1uYW1lOiBcIiArIGNvbnRhaW5lckFuaW1hdGlvbkNsYXNzICsgXCI7IH1cXG5cIjtcbiAgICAgICAgICAgIHN0eWxlICs9IFwiQC13ZWJraXQta2V5ZnJhbWVzIFwiICsgY29udGFpbmVyQW5pbWF0aW9uQ2xhc3MgKyAgXCIgeyAwJSB7IG9wYWNpdHk6IDE7IH0gNTAlIHsgb3BhY2l0eTogMDsgfSAxMDAlIHsgb3BhY2l0eTogMTsgfSB9XFxuXCI7XG4gICAgICAgICAgICBzdHlsZSArPSBcIkBrZXlmcmFtZXMgXCIgKyBjb250YWluZXJBbmltYXRpb25DbGFzcyArICAgICAgICAgIFwiIHsgMCUgeyBvcGFjaXR5OiAxOyB9IDUwJSB7IG9wYWNpdHk6IDA7IH0gMTAwJSB7IG9wYWNpdHk6IDE7IH0gfVwiO1xuICAgICAgICAgICAgaW5qZWN0U3R5bGUoc3R5bGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQW5pbWF0aW9uQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBcIiArIGRldGVjdGlvbkNvbnRhaW5lckNsYXNzICsgXCJfYW5pbWF0aW9uX2FjdGl2ZVwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50KGVsLCBuYW1lLCBjYikge1xuICAgICAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBjYik7XG4gICAgICAgIH0gZWxzZSBpZihlbC5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgZWwuYXR0YWNoRXZlbnQoXCJvblwiICsgbmFtZSwgY2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9ydGVyLmVycm9yKFwiW3Njcm9sbF0gRG9uJ3Qga25vdyBob3cgdG8gYWRkIGV2ZW50IGxpc3RlbmVycy5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVFdmVudChlbCwgbmFtZSwgY2IpIHtcbiAgICAgICAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgY2IpO1xuICAgICAgICB9IGVsc2UgaWYoZWwuZGV0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGVsLmRldGFjaEV2ZW50KFwib25cIiArIG5hbWUsIGNiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXBvcnRlci5lcnJvcihcIltzY3JvbGxdIERvbid0IGtub3cgaG93IHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXhwYW5kRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2hyaW5rRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHJlc2l6ZSBldmVudCBsaXN0ZW5lciB0byB0aGUgZWxlbWVudC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGhhdmUgdGhlIGxpc3RlbmVyIGFkZGVkLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciBjYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggcmVzaXplIGV2ZW50IG9mIHRoZSBlbGVtZW50LiBUaGUgZWxlbWVudCB3aWxsIGJlIGdpdmVuIGFzIGEgcGFyYW1ldGVyIHRvIHRoZSBsaXN0ZW5lciBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcihlbGVtZW50LCBsaXN0ZW5lcikge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gZ2V0U3RhdGUoZWxlbWVudCkubGlzdGVuZXJzO1xuXG4gICAgICAgIGlmICghbGlzdGVuZXJzLnB1c2gpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhZGQgbGlzdGVuZXIgdG8gYW4gZWxlbWVudCB0aGF0IGlzIG5vdCBkZXRlY3RhYmxlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhbiBlbGVtZW50IGRldGVjdGFibGUgYW5kIHJlYWR5IHRvIGJlIGxpc3RlbmVkIGZvciByZXNpemUgZXZlbnRzLiBXaWxsIGNhbGwgdGhlIGNhbGxiYWNrIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVhZHkgdG8gYmUgbGlzdGVuZWQgZm9yIHJlc2l6ZSBjaGFuZ2VzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QuXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIG1ha2UgZGV0ZWN0YWJsZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyByZWFkeSB0byBiZSBsaXN0ZW5lZCBmb3IgcmVzaXplIGNoYW5nZXMuIFdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGVsZW1lbnQgYXMgZmlyc3QgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1ha2VEZXRlY3RhYmxlKG9wdGlvbnMsIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZWxlbWVudDtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBvcHRpb25zO1xuICAgICAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIGFyZ3MudW5zaGlmdChpZEhhbmRsZXIuZ2V0KGVsZW1lbnQpLCBcIlNjcm9sbDogXCIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBvcnRlci5sb2cuYXBwbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0ZXIubG9nLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0ZXIubG9nKGFyZ3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNEZXRhY2hlZChlbGVtZW50KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBpc0luRG9jdW1lbnQoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50ID09PSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keSB8fCBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keS5jb250YWlucyhlbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc0luRG9jdW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmlyZUZveCByZXR1cm5zIG51bGwgc3R5bGUgaW4gaGlkZGVuIGlmcmFtZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vd25yL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL2lzc3Vlcy82OCBhbmQgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzk1NTIwXG4gICAgICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc1VucmVuZGVyZWQoZWxlbWVudCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIGFic29sdXRlIHBvc2l0aW9uZWQgY29udGFpbmVyIHNpbmNlIHRoZSB0b3AgbGV2ZWwgY29udGFpbmVyIGlzIGRpc3BsYXk6IGlubGluZS5cbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXIuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKTtcbiAgICAgICAgICAgIHJldHVybiAhc3R5bGUud2lkdGggfHwgc3R5bGUud2lkdGguaW5kZXhPZihcInB4XCIpID09PSAtMTsgLy9DYW4gb25seSBjb21wdXRlIHBpeGVsIHZhbHVlIHdoZW4gcmVuZGVyZWQuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRTdHlsZSgpIHtcbiAgICAgICAgICAgIC8vIFNvbWUgYnJvd3NlcnMgb25seSBmb3JjZSBsYXlvdXRzIHdoZW4gYWN0dWFsbHkgcmVhZGluZyB0aGUgc3R5bGUgcHJvcGVydGllcyBvZiB0aGUgc3R5bGUgb2JqZWN0LCBzbyBtYWtlIHN1cmUgdGhhdCB0aGV5IGFyZSBhbGwgcmVhZCBoZXJlLFxuICAgICAgICAgICAgLy8gc28gdGhhdCB0aGUgdXNlciBvZiB0aGUgZnVuY3Rpb24gY2FuIGJlIHN1cmUgdGhhdCBpdCB3aWxsIHBlcmZvcm0gdGhlIGxheW91dCBoZXJlLCBpbnN0ZWFkIG9mIGxhdGVyIChpbXBvcnRhbnQgZm9yIGJhdGNoaW5nKS5cbiAgICAgICAgICAgIHZhciBlbGVtZW50U3R5bGUgICAgICAgICAgICA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgc3R5bGUgICAgICAgICAgICAgICAgICAgPSB7fTtcbiAgICAgICAgICAgIHN0eWxlLnBvc2l0aW9uICAgICAgICAgICAgICA9IGVsZW1lbnRTdHlsZS5wb3NpdGlvbjtcbiAgICAgICAgICAgIHN0eWxlLndpZHRoICAgICAgICAgICAgICAgICA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBzdHlsZS5oZWlnaHQgICAgICAgICAgICAgICAgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHN0eWxlLnRvcCAgICAgICAgICAgICAgICAgICA9IGVsZW1lbnRTdHlsZS50b3A7XG4gICAgICAgICAgICBzdHlsZS5yaWdodCAgICAgICAgICAgICAgICAgPSBlbGVtZW50U3R5bGUucmlnaHQ7XG4gICAgICAgICAgICBzdHlsZS5ib3R0b20gICAgICAgICAgICAgICAgPSBlbGVtZW50U3R5bGUuYm90dG9tO1xuICAgICAgICAgICAgc3R5bGUubGVmdCAgICAgICAgICAgICAgICAgID0gZWxlbWVudFN0eWxlLmxlZnQ7XG4gICAgICAgICAgICBzdHlsZS53aWR0aENTUyAgICAgICAgICAgICAgPSBlbGVtZW50U3R5bGUud2lkdGg7XG4gICAgICAgICAgICBzdHlsZS5oZWlnaHRDU1MgICAgICAgICAgICAgPSBlbGVtZW50U3R5bGUuaGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RvcmVTdGFydFNpemUoKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBnZXRTdHlsZSgpO1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkuc3RhcnRTaXplID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBzdHlsZS53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHN0eWxlLmhlaWdodFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRlYnVnKFwiRWxlbWVudCBzdGFydCBzaXplXCIsIGdldFN0YXRlKGVsZW1lbnQpLnN0YXJ0U2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbml0TGlzdGVuZXJzKCkge1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkubGlzdGVuZXJzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdG9yZVN0eWxlKCkge1xuICAgICAgICAgICAgZGVidWcoXCJzdG9yZVN0eWxlIGludm9rZWQuXCIpO1xuICAgICAgICAgICAgaWYgKCFnZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGhhcyBiZWVuIHVuaW5zdGFsbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdG9yZUN1cnJlbnRTaXplKGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLmxhc3RXaWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkubGFzdEhlaWdodCAgPSBoZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRFeHBhbmRDaGlsZEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEV4cGFuZEVsZW1lbnQoZWxlbWVudCkuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFdpZHRoT2Zmc2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIDIgKiBzY3JvbGxiYXJTaXplcy53aWR0aCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRIZWlnaHRPZmZzZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gMiAqIHNjcm9sbGJhclNpemVzLmhlaWdodCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRFeHBhbmRXaWR0aCh3aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoICsgMTAgKyBnZXRXaWR0aE9mZnNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RXhwYW5kSGVpZ2h0KGhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIGhlaWdodCArIDEwICsgZ2V0SGVpZ2h0T2Zmc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRTaHJpbmtXaWR0aCh3aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoICogMiArIGdldFdpZHRoT2Zmc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRTaHJpbmtIZWlnaHQoaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gaGVpZ2h0ICogMiArIGdldEhlaWdodE9mZnNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcG9zaXRpb25TY3JvbGxiYXJzKGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIHZhciBleHBhbmQgICAgICAgICAgPSBnZXRFeHBhbmRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHNocmluayAgICAgICAgICA9IGdldFNocmlua0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kV2lkdGggICAgID0gZ2V0RXhwYW5kV2lkdGgod2lkdGgpO1xuICAgICAgICAgICAgdmFyIGV4cGFuZEhlaWdodCAgICA9IGdldEV4cGFuZEhlaWdodChoZWlnaHQpO1xuICAgICAgICAgICAgdmFyIHNocmlua1dpZHRoICAgICA9IGdldFNocmlua1dpZHRoKHdpZHRoKTtcbiAgICAgICAgICAgIHZhciBzaHJpbmtIZWlnaHQgICAgPSBnZXRTaHJpbmtIZWlnaHQoaGVpZ2h0KTtcbiAgICAgICAgICAgIGV4cGFuZC5zY3JvbGxMZWZ0ICAgPSBleHBhbmRXaWR0aDtcbiAgICAgICAgICAgIGV4cGFuZC5zY3JvbGxUb3AgICAgPSBleHBhbmRIZWlnaHQ7XG4gICAgICAgICAgICBzaHJpbmsuc2Nyb2xsTGVmdCAgID0gc2hyaW5rV2lkdGg7XG4gICAgICAgICAgICBzaHJpbmsuc2Nyb2xsVG9wICAgID0gc2hyaW5rSGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5qZWN0Q29udGFpbmVyRWxlbWVudCgpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXI7XG5cbiAgICAgICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyICAgICAgICAgICAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lICAgICAgICAgPSBkZXRlY3Rpb25Db250YWluZXJDbGFzcztcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCAgICAgPSBcInZpc2liaWxpdHk6IGhpZGRlbjsgZGlzcGxheTogaW5saW5lOyB3aWR0aDogMHB4OyBoZWlnaHQ6IDBweDsgei1pbmRleDogLTE7IG92ZXJmbG93OiBoaWRkZW47IG1hcmdpbjogMDsgcGFkZGluZzogMDtcIjtcbiAgICAgICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgICAgICAgICAgYWRkQW5pbWF0aW9uQ2xhc3MoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICB2YXIgb25BbmltYXRpb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25SZW5kZXJlZCAmJiBnZXRTdGF0ZShlbGVtZW50KS5vblJlbmRlcmVkKCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGFkZEV2ZW50KGNvbnRhaW5lciwgXCJhbmltYXRpb25zdGFydFwiLCBvbkFuaW1hdGlvblN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBldmVudCBoYW5kbGVyIGhlcmUgc28gdGhhdCB0aGV5IG1heSBiZSByZW1vdmVkIHdoZW4gdW5pbnN0YWxsIGlzIGNhbGxlZC5cbiAgICAgICAgICAgICAgICAvLyBTZWUgdW5pbnN0YWxsIGZ1bmN0aW9uIGZvciBhbiBleHBsYW5hdGlvbiB3aHkgaXQgaXMgbmVlZGVkLlxuICAgICAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLm9uQW5pbWF0aW9uU3RhcnQgPSBvbkFuaW1hdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5qZWN0U2Nyb2xsRWxlbWVudHMoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBhbHRlclBvc2l0aW9uU3R5bGVzKCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGdldFN0YXRlKGVsZW1lbnQpLnN0eWxlO1xuXG4gICAgICAgICAgICAgICAgaWYoc3R5bGUucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlUmVsYXRpdmVTdHlsZXMgPSBmdW5jdGlvbihyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXROdW1lcmljYWxWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bXi1cXGRcXC5dL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wZXJ0eV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlICE9PSBcImF1dG9cIiAmJiBnZXROdW1lcmljYWxWYWx1ZSh2YWx1ZSkgIT09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0ZXIud2FybihcIkFuIGVsZW1lbnQgdGhhdCBpcyBwb3NpdGlvbmVkIHN0YXRpYyBoYXMgc3R5bGUuXCIgKyBwcm9wZXJ0eSArIFwiPVwiICsgdmFsdWUgKyBcIiB3aGljaCBpcyBpZ25vcmVkIGR1ZSB0byB0aGUgc3RhdGljIHBvc2l0aW9uaW5nLiBUaGUgZWxlbWVudCB3aWxsIG5lZWQgdG8gYmUgcG9zaXRpb25lZCByZWxhdGl2ZSwgc28gdGhlIHN0eWxlLlwiICsgcHJvcGVydHkgKyBcIiB3aWxsIGJlIHNldCB0byAwLiBFbGVtZW50OiBcIiwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgc28gdGhhdCB0aGVyZSBhcmUgbm8gYWNjaWRlbnRhbCBzdHlsZXMgdGhhdCB3aWxsIG1ha2UgdGhlIGVsZW1lbnQgc3R5bGVkIGRpZmZlcmVudGx5IG5vdyB0aGF0IGlzIGlzIHJlbGF0aXZlLlxuICAgICAgICAgICAgICAgICAgICAvL0lmIHRoZXJlIGFyZSBhbnksIHNldCB0aGVtIHRvIDAgKHRoaXMgc2hvdWxkIGJlIG9rYXkgd2l0aCB0aGUgdXNlciBzaW5jZSB0aGUgc3R5bGUgcHJvcGVydGllcyBkaWQgbm90aGluZyBiZWZvcmUgW3NpbmNlIHRoZSBlbGVtZW50IHdhcyBwb3NpdGlvbmVkIHN0YXRpY10gYW55d2F5KS5cbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVsYXRpdmVTdHlsZXMocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBcInRvcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVsYXRpdmVTdHlsZXMocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVSZWxhdGl2ZVN0eWxlcyhyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIFwiYm90dG9tXCIpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVSZWxhdGl2ZVN0eWxlcyhyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldExlZnRUb3BCb3R0b21SaWdodENzc1RleHQobGVmdCwgdG9wLCBib3R0b20sIHJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9ICghbGVmdCA/IFwiMFwiIDogKGxlZnQgKyBcInB4XCIpKTtcbiAgICAgICAgICAgICAgICB0b3AgPSAoIXRvcCA/IFwiMFwiIDogKHRvcCArIFwicHhcIikpO1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9ICghYm90dG9tID8gXCIwXCIgOiAoYm90dG9tICsgXCJweFwiKSk7XG4gICAgICAgICAgICAgICAgcmlnaHQgPSAoIXJpZ2h0ID8gXCIwXCIgOiAocmlnaHQgKyBcInB4XCIpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnQ6IFwiICsgbGVmdCArIFwiOyB0b3A6IFwiICsgdG9wICsgXCI7IHJpZ2h0OiBcIiArIHJpZ2h0ICsgXCI7IGJvdHRvbTogXCIgKyBib3R0b20gKyBcIjtcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVidWcoXCJJbmplY3RpbmcgZWxlbWVudHNcIik7XG5cbiAgICAgICAgICAgIGlmICghZ2V0U3RhdGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBoYXMgYmVlbiB1bmluc3RhbGxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFsdGVyUG9zaXRpb25TdHlsZXMoKTtcblxuICAgICAgICAgICAgdmFyIHJvb3RDb250YWluZXIgPSBnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXI7XG5cbiAgICAgICAgICAgIGlmICghcm9vdENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHJvb3RDb250YWluZXIgPSBpbmplY3RDb250YWluZXJFbGVtZW50KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIER1ZSB0byB0aGlzIFdlYktpdCBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTgwODA4IChjdXJyZW50bHkgZml4ZWQgaW4gQmxpbmssIGJ1dCBzdGlsbCBwcmVzZW50IGluIFdlYktpdCBicm93c2VycyBzdWNoIGFzIFNhZmFyaSksXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGluamVjdCB0d28gY29udGFpbmVycywgb25lIHRoYXQgaXMgd2lkdGgvaGVpZ2h0IDEwMCUgYW5kIGFub3RoZXIgdGhhdCBpcyBsZWZ0L3RvcCAtMXB4IHNvIHRoYXQgdGhlIGZpbmFsIGNvbnRhaW5lciBhbHdheXMgaXMgMXgxIHBpeGVscyBiaWdnZXIgdGhhblxuICAgICAgICAgICAgLy8gdGhlIHRhcmdldGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAvLyBXaGVuIHRoZSBidWcgaXMgcmVzb2x2ZWQsIFwiY29udGFpbmVyQ29udGFpbmVyXCIgbWF5IGJlIHJlbW92ZWQuXG5cbiAgICAgICAgICAgIC8vIFRoZSBvdXRlciBjb250YWluZXIgY2FuIG9jY2FzaW9uYWxseSBiZSBsZXNzIHdpZGUgdGhhbiB0aGUgdGFyZ2V0ZWQgd2hlbiBpbnNpZGUgaW5saW5lIGVsZW1lbnRzIGVsZW1lbnQgaW4gV2ViS2l0IChzZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1Mjk4MCkuXG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBiZSBubyBwcm9ibGVtIHNpbmNlIHRoZSBpbm5lciBjb250YWluZXIgZWl0aGVyIHdheSBtYWtlcyBzdXJlIHRoZSBpbmplY3RlZCBzY3JvbGwgZWxlbWVudHMgYXJlIGF0IGxlYXN0IDF4MSBweC5cblxuICAgICAgICAgICAgdmFyIHNjcm9sbGJhcldpZHRoICAgICAgICAgID0gc2Nyb2xsYmFyU2l6ZXMud2lkdGg7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsYmFySGVpZ2h0ICAgICAgICAgPSBzY3JvbGxiYXJTaXplcy5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyQ29udGFpbmVyU3R5bGUgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgZmxleDogbm9uZTsgb3ZlcmZsb3c6IGhpZGRlbjsgei1pbmRleDogLTE7IHZpc2liaWxpdHk6IGhpZGRlbjsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgbGVmdDogMHB4OyB0b3A6IDBweDtcIjtcbiAgICAgICAgICAgIHZhciBjb250YWluZXJTdHlsZSAgICAgICAgICA9IFwicG9zaXRpb246IGFic29sdXRlOyBmbGV4OiBub25lOyBvdmVyZmxvdzogaGlkZGVuOyB6LWluZGV4OiAtMTsgdmlzaWJpbGl0eTogaGlkZGVuOyBcIiArIGdldExlZnRUb3BCb3R0b21SaWdodENzc1RleHQoLSgxICsgc2Nyb2xsYmFyV2lkdGgpLCAtKDEgKyBzY3JvbGxiYXJIZWlnaHQpLCAtc2Nyb2xsYmFySGVpZ2h0LCAtc2Nyb2xsYmFyV2lkdGgpO1xuICAgICAgICAgICAgdmFyIGV4cGFuZFN0eWxlICAgICAgICAgICAgID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IGZsZXg6IG5vbmU7IG92ZXJmbG93OiBzY3JvbGw7IHotaW5kZXg6IC0xOyB2aXNpYmlsaXR5OiBoaWRkZW47IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XCI7XG4gICAgICAgICAgICB2YXIgc2hyaW5rU3R5bGUgICAgICAgICAgICAgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgZmxleDogbm9uZTsgb3ZlcmZsb3c6IHNjcm9sbDsgei1pbmRleDogLTE7IHZpc2liaWxpdHk6IGhpZGRlbjsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcIjtcbiAgICAgICAgICAgIHZhciBleHBhbmRDaGlsZFN0eWxlICAgICAgICA9IFwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7XCI7XG4gICAgICAgICAgICB2YXIgc2hyaW5rQ2hpbGRTdHlsZSAgICAgICAgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDIwMCU7IGhlaWdodDogMjAwJTtcIjtcblxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lckNvbnRhaW5lciAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgICAgICAgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgZXhwYW5kICAgICAgICAgICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIGV4cGFuZENoaWxkICAgICAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBzaHJpbmsgICAgICAgICAgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgc2hyaW5rQ2hpbGQgICAgICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgICAgICAvLyBTb21lIGJyb3dzZXJzIGNob2tlIG9uIHRoZSByZXNpemUgc3lzdGVtIGJlaW5nIHJ0bCwgc28gZm9yY2UgaXQgdG8gbHRyLiBodHRwczovL2dpdGh1Yi5jb20vd25yL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL2lzc3Vlcy81NlxuICAgICAgICAgICAgLy8gSG93ZXZlciwgZGlyIHNob3VsZCBub3QgYmUgc2V0IG9uIHRoZSB0b3AgbGV2ZWwgY29udGFpbmVyIGFzIGl0IGFsdGVycyB0aGUgZGltZW5zaW9ucyBvZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaW4gc29tZSBicm93c2Vycy5cbiAgICAgICAgICAgIGNvbnRhaW5lckNvbnRhaW5lci5kaXIgICAgICAgICAgICAgID0gXCJsdHJcIjtcblxuICAgICAgICAgICAgY29udGFpbmVyQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgICAgPSBjb250YWluZXJDb250YWluZXJTdHlsZTtcbiAgICAgICAgICAgIGNvbnRhaW5lckNvbnRhaW5lci5jbGFzc05hbWUgICAgICAgID0gZGV0ZWN0aW9uQ29udGFpbmVyQ2xhc3M7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lICAgICAgICAgICAgICAgICA9IGRldGVjdGlvbkNvbnRhaW5lckNsYXNzO1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgICAgICAgICAgICAgPSBjb250YWluZXJTdHlsZTtcbiAgICAgICAgICAgIGV4cGFuZC5zdHlsZS5jc3NUZXh0ICAgICAgICAgICAgICAgID0gZXhwYW5kU3R5bGU7XG4gICAgICAgICAgICBleHBhbmRDaGlsZC5zdHlsZS5jc3NUZXh0ICAgICAgICAgICA9IGV4cGFuZENoaWxkU3R5bGU7XG4gICAgICAgICAgICBzaHJpbmsuc3R5bGUuY3NzVGV4dCAgICAgICAgICAgICAgICA9IHNocmlua1N0eWxlO1xuICAgICAgICAgICAgc2hyaW5rQ2hpbGQuc3R5bGUuY3NzVGV4dCAgICAgICAgICAgPSBzaHJpbmtDaGlsZFN0eWxlO1xuXG4gICAgICAgICAgICBleHBhbmQuYXBwZW5kQ2hpbGQoZXhwYW5kQ2hpbGQpO1xuICAgICAgICAgICAgc2hyaW5rLmFwcGVuZENoaWxkKHNocmlua0NoaWxkKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChleHBhbmQpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNocmluayk7XG4gICAgICAgICAgICBjb250YWluZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIHJvb3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gb25FeHBhbmRTY3JvbGwoKSB7XG4gICAgICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25FeHBhbmQgJiYgZ2V0U3RhdGUoZWxlbWVudCkub25FeHBhbmQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gb25TaHJpbmtTY3JvbGwoKSB7XG4gICAgICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25TaHJpbmsgJiYgZ2V0U3RhdGUoZWxlbWVudCkub25TaHJpbmsoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkRXZlbnQoZXhwYW5kLCBcInNjcm9sbFwiLCBvbkV4cGFuZFNjcm9sbCk7XG4gICAgICAgICAgICBhZGRFdmVudChzaHJpbmssIFwic2Nyb2xsXCIsIG9uU2hyaW5rU2Nyb2xsKTtcblxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGV2ZW50IGhhbmRsZXJzIGhlcmUgc28gdGhhdCB0aGV5IG1heSBiZSByZW1vdmVkIHdoZW4gdW5pbnN0YWxsIGlzIGNhbGxlZC5cbiAgICAgICAgICAgIC8vIFNlZSB1bmluc3RhbGwgZnVuY3Rpb24gZm9yIGFuIGV4cGxhbmF0aW9uIHdoeSBpdCBpcyBuZWVkZWQuXG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vbkV4cGFuZFNjcm9sbCA9IG9uRXhwYW5kU2Nyb2xsO1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25TaHJpbmtTY3JvbGwgPSBvblNocmlua1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXJzQW5kUG9zaXRpb25FbGVtZW50cygpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkU2l6ZXMoZWxlbWVudCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICAgICAgICAgIHZhciBleHBhbmRDaGlsZCAgICAgICAgICAgICA9IGdldEV4cGFuZENoaWxkRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB2YXIgZXhwYW5kV2lkdGggICAgICAgICAgICAgPSBnZXRFeHBhbmRXaWR0aCh3aWR0aCk7XG4gICAgICAgICAgICAgICAgdmFyIGV4cGFuZEhlaWdodCAgICAgICAgICAgID0gZ2V0RXhwYW5kSGVpZ2h0KGhlaWdodCk7XG4gICAgICAgICAgICAgICAgZXhwYW5kQ2hpbGQuc3R5bGUud2lkdGggICAgID0gZXhwYW5kV2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgZXhwYW5kQ2hpbGQuc3R5bGUuaGVpZ2h0ICAgID0gZXhwYW5kSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVEZXRlY3RvckVsZW1lbnRzKGRvbmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggICAgICAgICAgID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ICAgICAgICAgID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBkZWJ1ZyhcIlN0b3JpbmcgY3VycmVudCBzaXplXCIsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQgc3luYyBoZXJlLCBzbyB0aGF0IG11bHRpcGxlIHNjcm9sbCBldmVudHMgbWF5IGJlIGlnbm9yZWQgaW4gdGhlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgdGhlIGlmLWNoZWNrIGluIGhhbmRsZVNjcm9sbCBpcyB1c2VsZXNzLlxuICAgICAgICAgICAgICAgIHN0b3JlQ3VycmVudFNpemUoZWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSBkZWxheSB0aGUgcHJvY2Vzc2luZyBvZiB0aGUgYmF0Y2gsIHRoZXJlIGlzIGEgcmlzayB0aGF0IHVuaW5zdGFsbCBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlIHRoZSBiYXRjaCBnZXRzIHRvIGV4ZWN1dGUuXG4gICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlcmUgaXMgbm8gd2F5IHRvIGNhbmNlbCB0aGUgZm4gZXhlY3V0aW9ucywgd2UgbmVlZCB0byBhZGQgYW4gdW5pbnN0YWxsIGd1YXJkIHRvIGFsbCBmbnMgb2YgdGhlIGJhdGNoLlxuXG4gICAgICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKDAsIGZ1bmN0aW9uIHBlcmZvcm1VcGRhdGVDaGlsZFNpemVzKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBoYXMgYmVlbiB1bmluc3RhbGxlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYXJlRWxlbWVudHNJbmplY3RlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBjb250YWluZXIgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3ICE9PSB3aWR0aCB8fCBoICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBvcnRlci53YXJuKGlkSGFuZGxlci5nZXQoZWxlbWVudCksIFwiU2Nyb2xsOiBTaXplIGNoYW5nZWQgYmVmb3JlIHVwZGF0aW5nIGRldGVjdG9yIGVsZW1lbnRzLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNoaWxkU2l6ZXMoZWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMSwgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsYmFycygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgaGFzIGJlZW4gdW5pbnN0YWxsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFyZUVsZW1lbnRzSW5qZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgY29udGFpbmVyIGhhcyBub3QgYmVlbiBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uU2Nyb2xsYmFycyhlbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhdGNoUHJvY2Vzc29yLmFkZCgyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgaGFzIGJlZW4gdW5pbnN0YWxsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFyZUVsZW1lbnRzSW5qZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBjb250YWluZXIgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhcmVFbGVtZW50c0luamVjdGVkKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWdldFN0YXRlKGVsZW1lbnQpLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbm90aWZ5TGlzdGVuZXJzSWZOZWVkZWQoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaXNGaXJzdE5vdGlmeSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFN0YXRlKGVsZW1lbnQpLmxhc3ROb3RpZmllZFdpZHRoID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVidWcoXCJub3RpZnlMaXN0ZW5lcnNJZk5lZWRlZCBpbnZva2VkXCIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBEb24ndCBub3RpZnkgdGhlIGlmIHRoZSBjdXJyZW50IHNpemUgaXMgdGhlIHN0YXJ0IHNpemUsIGFuZCB0aGlzIGlzIHRoZSBmaXJzdCBub3RpZmljYXRpb24uXG4gICAgICAgICAgICAgICAgaWYgKGlzRmlyc3ROb3RpZnkoKSAmJiBzdGF0ZS5sYXN0V2lkdGggPT09IHN0YXRlLnN0YXJ0U2l6ZS53aWR0aCAmJiBzdGF0ZS5sYXN0SGVpZ2h0ID09PSBzdGF0ZS5zdGFydFNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWJ1ZyhcIk5vdCBub3RpZnlpbmc6IFNpemUgaXMgdGhlIHNhbWUgYXMgdGhlIHN0YXJ0IHNpemUsIGFuZCB0aGVyZSBoYXMgYmVlbiBubyBub3RpZmljYXRpb24geWV0LlwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBEb24ndCBub3RpZnkgaWYgdGhlIHNpemUgYWxyZWFkeSBoYXMgYmVlbiBub3RpZmllZC5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUubGFzdFdpZHRoID09PSBzdGF0ZS5sYXN0Tm90aWZpZWRXaWR0aCAmJiBzdGF0ZS5sYXN0SGVpZ2h0ID09PSBzdGF0ZS5sYXN0Tm90aWZpZWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlYnVnKFwiTm90IG5vdGlmeWluZzogU2l6ZSBhbHJlYWR5IG5vdGlmaWVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgZGVidWcoXCJDdXJyZW50IHNpemUgbm90IG5vdGlmaWVkLCBub3RpZnlpbmcuLi5cIik7XG4gICAgICAgICAgICAgICAgc3RhdGUubGFzdE5vdGlmaWVkV2lkdGggPSBzdGF0ZS5sYXN0V2lkdGg7XG4gICAgICAgICAgICAgICAgc3RhdGUubGFzdE5vdGlmaWVkSGVpZ2h0ID0gc3RhdGUubGFzdEhlaWdodDtcbiAgICAgICAgICAgICAgICBmb3JFYWNoKGdldFN0YXRlKGVsZW1lbnQpLmxpc3RlbmVycywgZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJzdGFydGFuaW1hdGlvbiB0cmlnZ2VyZWQuXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzVW5yZW5kZXJlZChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIklnbm9yaW5nIHNpbmNlIGVsZW1lbnQgaXMgc3RpbGwgdW5yZW5kZXJlZC4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlYnVnKFwiRWxlbWVudCByZW5kZXJlZC5cIik7XG4gICAgICAgICAgICAgICAgdmFyIGV4cGFuZCA9IGdldEV4cGFuZEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdmFyIHNocmluayA9IGdldFNocmlua0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGV4cGFuZC5zY3JvbGxMZWZ0ID09PSAwIHx8IGV4cGFuZC5zY3JvbGxUb3AgPT09IDAgfHwgc2hyaW5rLnNjcm9sbExlZnQgPT09IDAgfHwgc2hyaW5rLnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIlNjcm9sbGJhcnMgb3V0IG9mIHN5bmMuIFVwZGF0aW5nIGRldGVjdG9yIGVsZW1lbnRzLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZXRlY3RvckVsZW1lbnRzKG5vdGlmeUxpc3RlbmVyc0lmTmVlZGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcIlNjcm9sbCBkZXRlY3RlZC5cIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNVbnJlbmRlcmVkKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVsZW1lbnQgaXMgc3RpbGwgdW5yZW5kZXJlZC4gU2tpcCB0aGlzIHNjcm9sbCBldmVudC5cbiAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJTY3JvbGwgZXZlbnQgZmlyZWQgd2hpbGUgdW5yZW5kZXJlZC4gSWdub3JpbmcuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgICAgIGlmICh3aWR0aCAhPT0gZWxlbWVudC5sYXN0V2lkdGggfHwgaGVpZ2h0ICE9PSBlbGVtZW50Lmxhc3RIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJFbGVtZW50IHNpemUgY2hhbmdlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURldGVjdG9yRWxlbWVudHMobm90aWZ5TGlzdGVuZXJzSWZOZWVkZWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiRWxlbWVudCBzaXplIGhhcyBub3QgY2hhbmdlZCAoXCIgKyB3aWR0aCArIFwieFwiICsgaGVpZ2h0ICsgXCIpLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlYnVnKFwicmVnaXN0ZXJMaXN0ZW5lcnNBbmRQb3NpdGlvbkVsZW1lbnRzIGludm9rZWQuXCIpO1xuXG4gICAgICAgICAgICBpZiAoIWdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgaGFzIGJlZW4gdW5pbnN0YWxsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vblJlbmRlcmVkID0gaGFuZGxlUmVuZGVyO1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25FeHBhbmQgPSBoYW5kbGVTY3JvbGw7XG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vblNocmluayA9IGhhbmRsZVNjcm9sbDtcblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gZ2V0U3RhdGUoZWxlbWVudCkuc3R5bGU7XG4gICAgICAgICAgICB1cGRhdGVDaGlsZFNpemVzKGVsZW1lbnQsIHN0eWxlLndpZHRoLCBzdHlsZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmluYWxpemVEb21NdXRhdGlvbigpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZmluYWxpemVEb21NdXRhdGlvbiBpbnZva2VkLlwiKTtcblxuICAgICAgICAgICAgaWYgKCFnZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGhhcyBiZWVuIHVuaW5zdGFsbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gZ2V0U3RhdGUoZWxlbWVudCkuc3R5bGU7XG4gICAgICAgICAgICBzdG9yZUN1cnJlbnRTaXplKGVsZW1lbnQsIHN0eWxlLndpZHRoLCBzdHlsZS5oZWlnaHQpO1xuICAgICAgICAgICAgcG9zaXRpb25TY3JvbGxiYXJzKGVsZW1lbnQsIHN0eWxlLndpZHRoLCBzdHlsZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVhZHkoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluc3RhbGwoKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIkluc3RhbGxpbmcuLi5cIik7XG4gICAgICAgICAgICBpbml0TGlzdGVuZXJzKCk7XG4gICAgICAgICAgICBzdG9yZVN0YXJ0U2l6ZSgpO1xuXG4gICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMCwgc3RvcmVTdHlsZSk7XG4gICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMSwgaW5qZWN0U2Nyb2xsRWxlbWVudHMpO1xuICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKDIsIHJlZ2lzdGVyTGlzdGVuZXJzQW5kUG9zaXRpb25FbGVtZW50cyk7XG4gICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMywgZmluYWxpemVEb21NdXRhdGlvbik7XG4gICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoNCwgcmVhZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVidWcoXCJNYWtpbmcgZGV0ZWN0YWJsZS4uLlwiKTtcblxuICAgICAgICBpZiAoaXNEZXRhY2hlZChlbGVtZW50KSkge1xuICAgICAgICAgICAgZGVidWcoXCJFbGVtZW50IGlzIGRldGFjaGVkXCIpO1xuXG4gICAgICAgICAgICBpbmplY3RDb250YWluZXJFbGVtZW50KCk7XG5cbiAgICAgICAgICAgIGRlYnVnKFwiV2FpdGluZyB1bnRpbCBlbGVtZW50IGlzIGF0dGFjaGVkLi4uXCIpO1xuXG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vblJlbmRlcmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiRWxlbWVudCBpcyBub3cgYXR0YWNoZWRcIik7XG4gICAgICAgICAgICAgICAgaW5zdGFsbCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuaW5zdGFsbChlbGVtZW50KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIFVuaW5zdGFsbCBoYXMgYmVlbiBjYWxsZWQgb24gYSBub24tZXJkIGVsZW1lbnQuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVbmluc3RhbGwgbWF5IGhhdmUgYmVlbiBjYWxsZWQgaW4gdGhlIGZvbGxvd2luZyBzY2VuYXJpb3M6XG4gICAgICAgIC8vICgxKSBSaWdodCBiZXR3ZWVuIHRoZSBzeW5jIGNvZGUgYW5kIGFzeW5jIGJhdGNoIChoZXJlIHN0YXRlLmJ1c3kgPSB0cnVlLCBidXQgbm90aGluZyBoYXZlIGJlZW4gcmVnaXN0ZXJlZCBvciBpbmplY3RlZCkuXG4gICAgICAgIC8vICgyKSBJbiB0aGUgcmVhZHkgY2FsbGJhY2sgb2YgdGhlIGxhc3QgbGV2ZWwgb2YgdGhlIGJhdGNoIGJ5IGFub3RoZXIgZWxlbWVudCAoaGVyZSwgc3RhdGUuYnVzeSA9IHRydWUsIGJ1dCBhbGwgdGhlIHN0dWZmIGhhcyBiZWVuIGluamVjdGVkKS5cbiAgICAgICAgLy8gKDMpIEFmdGVyIHRoZSBpbnN0YWxsYXRpb24gcHJvY2VzcyAoaGVyZSwgc3RhdGUuYnVzeSA9IGZhbHNlIGFuZCBhbGwgdGhlIHN0dWZmIGhhcyBiZWVuIGluamVjdGVkKS5cbiAgICAgICAgLy8gU28gdG8gYmUgb24gdGhlIHNhZmUgc2lkZSwgbGV0J3MgY2hlY2sgZm9yIGVhY2ggdGhpbmcgYmVmb3JlIHJlbW92aW5nLlxuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lcnMsIGJlY2F1c2Ugb3RoZXJ3aXNlIHRoZSBldmVudCBtaWdodCBmaXJlIG9uIGFuIHVuaW5zdGFsbCBlbGVtZW50IHdoaWNoIHJlc3VsdHMgaW4gYW4gZXJyb3Igd2hlbiB0cnlpbmcgdG8gZ2V0IHRoZSBzdGF0ZSBvZiB0aGUgZWxlbWVudC5cbiAgICAgICAgc3RhdGUub25FeHBhbmRTY3JvbGwgJiYgcmVtb3ZlRXZlbnQoZ2V0RXhwYW5kRWxlbWVudChlbGVtZW50KSwgXCJzY3JvbGxcIiwgc3RhdGUub25FeHBhbmRTY3JvbGwpO1xuICAgICAgICBzdGF0ZS5vblNocmlua1Njcm9sbCAmJiByZW1vdmVFdmVudChnZXRTaHJpbmtFbGVtZW50KGVsZW1lbnQpLCBcInNjcm9sbFwiLCBzdGF0ZS5vblNocmlua1Njcm9sbCk7XG4gICAgICAgIHN0YXRlLm9uQW5pbWF0aW9uU3RhcnQgJiYgcmVtb3ZlRXZlbnQoc3RhdGUuY29udGFpbmVyLCBcImFuaW1hdGlvbnN0YXJ0XCIsIHN0YXRlLm9uQW5pbWF0aW9uU3RhcnQpO1xuXG4gICAgICAgIHN0YXRlLmNvbnRhaW5lciAmJiBlbGVtZW50LnJlbW92ZUNoaWxkKHN0YXRlLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZURldGVjdGFibGU6IG1ha2VEZXRlY3RhYmxlLFxuICAgICAgICBhZGRMaXN0ZW5lcjogYWRkTGlzdGVuZXIsXG4gICAgICAgIHVuaW5zdGFsbDogdW5pbnN0YWxsXG4gICAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvZGV0ZWN0aW9uLXN0cmF0ZWd5L3Njcm9sbC5qc1xuLy8gbW9kdWxlIGlkID0gMTIwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsImNsYXNzIFJlc3BvbnNpdmVUYWJsZSB7XG4gICAgY29uc3RydWN0b3IoZWwsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmhpZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIH1cblxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmVsLmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWwuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIHNob3VsZG50UmVzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aWR0aCA9PT0gdGhpcy5lbC5jbGllbnRXaWR0aCAmJiB0aGlzLmhlaWdodCAhPT0gdGhpcy5lbC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuXG4gICAgc2hvdWxkSGlkZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwuY2xpZW50V2lkdGggPCB0aGlzLmVsLnNjcm9sbFdpZHRoO1xuICAgIH1cblxuICAgIHNob3VsZFVuaGlkZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwuY2xpZW50V2lkdGggPT09IHRoaXMuZWwuc2Nyb2xsV2lkdGggJiYgIXRoaXMuaGlkaW5nO1xuICAgIH1cblxuICAgIGhpZGVDb2x1bW5zKCkge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5jb250ZXh0LnRlbXBsYXRlLmNvbHVtbnNcbiAgICAgICAgICAgIC5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5tZXRhLnZpc2libGUgJiYgIWNvbHVtbi5tZXRhLmhpZGRlbik7XG5cbiAgICAgICAgaWYgKCFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaWRpbmcgPSB0cnVlO1xuICAgICAgICBjb2x1bW5zW2NvbHVtbnMubGVuZ3RoIC0gMV0ubWV0YS5oaWRkZW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMucmV0cnlGaXQoKTtcbiAgICB9XG5cbiAgICBzaG93Q29sdW1uKCkge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5jb250ZXh0LnRlbXBsYXRlLmNvbHVtbnNcbiAgICAgICAgICAgIC5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5tZXRhLmhpZGRlbik7XG5cbiAgICAgICAgaWYgKCFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sdW1uc1swXS5tZXRhLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucmV0cnlGaXQoKTtcbiAgICB9XG5cbiAgICByZXNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZG50UmVzaXplKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZml0KCk7XG4gICAgfVxuXG4gICAgcmV0cnlGaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZml0KCkge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRIaWRlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUNvbHVtbnMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhpZGluZykge1xuICAgICAgICAgICAgdGhpcy5oaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVuaGlkZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb2x1bW4oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2l2ZVRhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc3BvbnNpdmUvUmVzcG9uc2l2ZVRhYmxlLmpzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaW5pdGlhbGlzZWRcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJveFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInRvcC1jb250cm9sc1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoYXMtcGFkZGluZy1zbWFsbCBoYXMtcGFkZGluZy1ib3R0b20tbGFyZ2VcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlOiBfdm0udGVtcGxhdGUsXG4gICAgICAgICAgICAgIGkxOG46IF92bS5pMThuLFxuICAgICAgICAgICAgICBsZW5ndGg6IF92bS5sZW5ndGhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcInVwZGF0ZS1sZW5ndGhcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmxlbmd0aCA9ICRldmVudFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImV4cG9ydC1kYXRhXCI6IF92bS5leHBvcnREYXRhLFxuICAgICAgICAgICAgICByZWxvYWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5nZXREYXRhKClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmVzZXQ6IF92bS5yZXNldFByZWZlcmVuY2VzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW3sgbmFtZTogXCJyZXNwb25zaXZlXCIsIHJhd05hbWU6IFwidi1yZXNwb25zaXZlXCIgfV0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlLXJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlIGlzLWZ1bGx3aWR0aCB2dWUtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS50ZW1wbGF0ZS5zdHlsZSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImlkXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZS1oZWFkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlLCBpMThuOiBfdm0uaTE4biB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBcInNvcnQtdXBkYXRlXCI6IF92bS5nZXREYXRhIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5oYXNDb250ZW50XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogX3ZtLmJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogX3ZtLnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLmkxOG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1c3RvbS1yZW5kZXJcIjogX3ZtLmN1c3RvbVJlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBfdm0uZXhwYW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGFqYXg6IF92bS5hamF4IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnRlbXBsYXRlLnRvdGFsICYmIF92bS5oYXNDb250ZW50XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0YWJsZS1mb290ZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IF92bS50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogX3ZtLmJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5pMThuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubG9hZGluZyA/IF9jKFwib3ZlcmxheVwiKSA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uaGFzQ29udGVudFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgdGFibGUtYm90dG9tLWNvbnRyb2xzXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJyZWNvcmRzLWluZm9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBfdm0uYm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5pMThuLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IF92bS5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogX3ZtLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW5hcnJvdyBoYXMtdGV4dC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBfdm0uc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IF92bS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiBfdm0uYm9keS5maWx0ZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5pMThuXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJqdW1wLXRvXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3RhcnQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldERhdGEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5ib2R5ICYmICFfdm0uYm9keS5jb3VudFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhcy10ZXh0LWNlbnRlcmVkIG5vLXJlY29yZHMtZm91bmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pMThuKFwiTm8gcmVjb3JkcyB3ZXJlIGZvdW5kLlwiKSkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMWU1NDE5MzRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFlNTQxOTM0XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgICAgICA8dnVlLXRhYmxlIDpwYXRoPVwicGF0aFwiXG4gICAgICAgICAgICA6aTE4bj1cIl9fXCJcbiAgICAgICAgICAgIDpjdXN0b20tcmVuZGVyPVwiY3VzdG9tUmVuZGVyXCJcbiAgICAgICAgICAgIGlkPVwibWVudXNcIj5cbiAgICAgICAgPC92dWUtdGFibGU+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCBWdWVUYWJsZSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7IFZ1ZVRhYmxlIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdsb2NhbGUnLCBbJ19fJ10pLFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGF0aDogcm91dGUoJ3N5c3RlbS5tZW51cy5pbml0VGFibGUnLCBbXSwgZmFsc2UpLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGN1c3RvbVJlbmRlcihyb3csIGNvbHVtbikge1xuICAgICAgICAgICAgc3dpdGNoIChjb2x1bW4ubmFtZSkge1xuICAgICAgICAgICAgY2FzZSAnaWNvbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8aSBjbGFzcz1cIiR7cm93W2NvbHVtbi5uYW1lXX1cIj48L2k+YDtcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoYHJlbmRlciBmb3IgY29sdW1uICR7Y29sdW1uLm5hbWV9IGlzIG5vdCBkZWZpbmVkLmApO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3dbY29sdW1uLm5hbWVdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9tZW51cy9JbmRleC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidnVlLXRhYmxlXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgcGF0aDogX3ZtLnBhdGgsXG4gICAgICBpMThuOiBfdm0uX18sXG4gICAgICBcImN1c3RvbS1yZW5kZXJcIjogX3ZtLmN1c3RvbVJlbmRlcixcbiAgICAgIGlkOiBcIm1lbnVzXCJcbiAgICB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ0MjZiYjU0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NDI2YmI1NFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL21lbnVzL0luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9