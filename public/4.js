webpackJsonp([4],{

/***/ 1092:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1562)
/* template */
var __vue_template__ = __webpack_require__(1563)
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
Component.options.__file = "resources/assets/js/pages/system/tutorials/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5a4cf516", Component.options)
  } else {
    hotAPI.reload("data-v-5a4cf516", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1094:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1143)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1145)
/* template */
var __vue_template__ = __webpack_require__(1146)
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

/***/ 1131:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1163)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1165)
/* template */
var __vue_template__ = __webpack_require__(1171)
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

/***/ 1132:
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

/***/ 1133:
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

/***/ 1135:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1136)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1138)
/* template */
var __vue_template__ = __webpack_require__(1205)
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

/***/ 1136:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1137);
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

/***/ 1137:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.table.vue-data-table {\n    margin-bottom: 0;\n}\n.table-responsive {\n    position: relative;\n    display: block;\n    width: 100%;\n    min-height: .01%;\n    overflow-x: auto;\n}\n.table-responsive table {\n    font-size: 15px;\n}\ndiv.table-bottom-controls {\n    margin-top: .5rem;\n}\ndiv.no-records-found {\n    margin-top: 20px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/VueTable.vue"],"names":[],"mappings":";AA4XA;IACA,iBAAA;CACA;AAEA;IACA,mBAAA;IACA,eAAA;IACA,YAAA;IACA,iBAAA;IACA,iBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,kBAAA;CACA;AAEA;IACA,iBAAA;CACA","file":"VueTable.vue","sourcesContent":["<template>\n\n    <div class=\"box\"\n        v-if=\"initialised\">\n        <top-controls :template=\"template\"\n            class=\"has-padding-small has-padding-bottom-large\"\n            :i18n=\"i18n\"\n            :length=\"length\"\n            @update-length=\"length=$event\"\n            @export-data=\"exportData\"\n            @reload=\"getData()\"\n            @reset=\"resetPreferences\"\n            v-model=\"search\">\n        </top-controls>\n        <div class=\"table-responsive\"\n            v-responsive>\n            <table class=\"table is-fullwidth vue-data-table\"\n                :class=\"template.style\"\n                id=\"id\">\n                <table-header :template=\"template\"\n                    :i18n=\"i18n\"\n                    @sort-update=\"getData\">\n                </table-header>\n                <table-body :template=\"template\"\n                    v-on=\"$listeners\"\n                    :body=\"body\"\n                    :start=\"start\"\n                    :i18n=\"i18n\"\n                    :custom-render=\"customRender\"\n                    :expanded=\"expanded\"\n                    @ajax=\"ajax\"\n                    v-if=\"hasContent\">\n                </table-body>\n                <table-footer v-if=\"template.total && hasContent\"\n                    :template=\"template\"\n                    :body=\"body\"\n                    :i18n=\"i18n\">\n                </table-footer>\n            </table>\n            <overlay v-if=\"loading\"></overlay>\n        </div>\n        <div class=\"columns table-bottom-controls\"\n            v-if=\"hasContent\">\n            <div class=\"column\">\n                <records-info :body=\"body\"\n                    :i18n=\"i18n\"\n                    :start=\"start\"\n                    :length=\"length\">\n                </records-info>\n            </div>\n            <div class=\"column is-narrow has-text-right\">\n                <pagination :start=\"start\"\n                    :length=\"length\"\n                    :records=\"body.filtered\"\n                    :i18n=\"i18n\"\n                    @jump-to=\"start = $event;getData()\">\n                </pagination>\n            </div>\n        </div>\n        <div v-if=\"body && !body.count\"\n            class=\"has-text-centered no-records-found\">\n            {{ i18n('No records were found.') }}\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport toastr from 'toastr';\nimport { debounce } from 'lodash';\nimport TopControls from './TopControls.vue';\nimport TableHeader from './TableHeader.vue';\nimport TableBody from './TableBody.vue';\nimport TableFooter from './TableFooter.vue';\nimport RecordsInfo from './RecordsInfo.vue';\nimport Pagination from './Pagination.vue';\nimport Overlay from './Overlay.vue';\nimport vResponsive from './responsive/vResponsive';\n\nexport default {\n    name: 'VueTable',\n\n    components: {\n        TopControls, TableHeader, TableBody, TableFooter, RecordsInfo, Overlay, Pagination,\n    },\n\n    directives: {\n        responsive: vResponsive,\n    },\n\n    props: {\n        id: {\n            type: String,\n            required: true,\n        },\n        path: {\n            type: String,\n            required: true,\n        },\n        filters: {\n            type: Object,\n            default: null,\n        },\n        params: {\n            type: Object,\n            default: null,\n        },\n        intervals: {\n            type: Object,\n            default: null,\n        },\n        customRender: {\n            type: Function,\n            default: (row, column) => {\n                toastr.warning(`'Custom render function is missing for column: ${column.name}'`);\n                return row[column.name];\n            },\n        },\n        i18n: {\n            type: Function,\n            default: value => value,\n        },\n    },\n\n    computed: {\n        preferencesKey() {\n            return `VueTable_${this.id}_preferences`;\n        },\n        preferences() {\n            if (!this.initialised) {\n                return null;\n            }\n\n            return {\n                global: {\n                    length: this.length,\n                    search: this.search,\n                    start: this.start,\n                },\n                template: {\n                    sort: this.template.sort,\n                    style: this.template.style,\n                    align: this.template.align,\n                },\n                columns: this.template.columns.reduce((collector, column) => {\n                    collector.push({\n                        sort: column.meta.sort,\n                        visible: column.meta.visible,\n                    });\n\n                    return collector;\n                }, []),\n            };\n        },\n        hasContent() {\n            return this.body && this.body.count;\n        },\n    },\n\n    data() {\n        return {\n            loading: false,\n            initialised: false,\n            template: null,\n            search: '',\n            start: null,\n            body: null,\n            length: null,\n            expanded: [],\n        };\n    },\n\n    watch: {\n        search: {\n            handler() {\n                this.filterUpdate();\n            },\n        },\n        filters: {\n            handler() {\n                this.filterUpdate();\n            },\n            deep: true,\n        },\n        params: {\n            handler() {\n                this.filterUpdate();\n            },\n            deep: true,\n        },\n        intervals: {\n            handler() {\n                this.filterUpdate();\n            },\n            deep: true,\n        },\n        length: {\n            handler() {\n                this.filterUpdate();\n            },\n        },\n        preferences: {\n            handler() {\n                if (this.hasContent) {\n                    this.savePreferences();\n                }\n            },\n            deep: true,\n        },\n    },\n\n    created() {\n        this.getData = debounce(this.getData, 100);\n        this.init();\n    },\n\n    methods: {\n        init() {\n            axios.get(this.path).then(({ data }) => {\n                this.template = data.template;\n                this.start = 0;\n                [this.length] = this.template.lengthMenu;\n                this.setPreferences();\n                this.getData();\n            }).catch((error) => {\n                const { status, data } = error.response;\n\n                if (status === 555) {\n                    toastr.error(data.message);\n                }\n\n                this.handleError(error);\n            });\n        },\n        setPreferences() {\n            this.setDefaultPreferences();\n\n            if (localStorage.getItem(this.preferencesKey) !== null) {\n                this.setUserPreferences();\n            }\n\n            this.$nextTick(() => {\n                this.initialised = true;\n            });\n        },\n        setDefaultPreferences() {\n            this.template.columns.forEach(({ meta }) => {\n                this.$set(meta, 'sort', null);\n                this.$set(meta, 'hidden', false);\n            });\n\n            this.$set(this.template, 'sort', false);\n        },\n        setUserPreferences() {\n            const prefs = JSON.parse(localStorage.getItem(this.preferencesKey));\n\n            Object.keys(prefs.global).forEach((key) => {\n                this.$set(this, key, prefs.global[key]);\n            });\n\n            Object.keys(prefs.template).forEach((key) => {\n                this.$set(this.template, key, prefs.template[key]);\n            });\n\n            prefs.columns.forEach((column, index) => {\n                Object.keys(column).forEach((key) => {\n                    this.$set(this.template.columns[index].meta, key, column[key]);\n                });\n            });\n        },\n        savePreferences() {\n            localStorage.setItem(this.preferencesKey, JSON.stringify(this.preferences));\n        },\n        resetPreferences() {\n            localStorage.removeItem(this.preferencesKey);\n            this.search = '';\n            this.init();\n        },\n        getData() {\n            this.loading = true;\n            this.expanded = [];\n\n            axios.get(this.template.readPath, { params: this.readRequest() }).then(({ data }) => {\n                this.body = data;\n                this.loading = false;\n            }).catch((error) => {\n                this.handleError(error);\n                this.loading = false;\n            });\n        },\n        readRequest() {\n            return {\n                columns: this.requestColumns(),\n                meta: {\n                    start: this.start,\n                    length: this.length,\n                    sort: this.template.sort,\n                    total: this.template.total,\n                    enum: this.template.enum,\n                    date: this.template.date,\n                    actions: this.template.actions,\n                },\n                search: this.search,\n                appends: this.template.appends,\n                filters: this.filters,\n                intervals: this.intervals,\n                params: this.params,\n            };\n        },\n        requestColumns() {\n            return this.template.columns.reduce((columns, column) => {\n                columns.push({\n                    name: column.name,\n                    data: column.data,\n                    meta: {\n                        searchable: column.meta.searchable,\n                        sortable: column.meta.sortable,\n                        sort: column.meta.sort,\n                        total: column.meta.total,\n                        date: column.meta.date,\n                    },\n                    enum: column.enum,\n                });\n\n                return columns;\n            }, []);\n        },\n        exportData(path) {\n            axios.get(path, { params: this.exportRequest() }).then(({ data }) => {\n                toastr.success(data.message);\n            }).catch((error) => {\n                const { status, data } = error.response;\n\n                if (status === 555) {\n                    toastr.error(data.message);\n                }\n\n                this.handleError(error);\n            });\n        },\n        exportRequest() {\n            return {\n                name: this.template.name,\n                columns: this.template.columns,\n                meta: {\n                    start: 0,\n                    length: this.body.count,\n                    sort: this.template.sort,\n                    enum: this.template.enum,\n                    date: this.template.date,\n                    total: false,\n                },\n                search: this.search,\n                appends: this.template.appends,\n                filters: this.filters,\n                intervals: this.intervals,\n                params: this.params,\n            };\n        },\n        ajax(method, path) {\n            axios[method.toLowerCase()](path).then(({ data }) => {\n                toastr.success(data.message);\n                this.getData();\n            }).catch(error => this.handleError(error));\n        },\n        filterUpdate() {\n            if (!this.initialised) {\n                return;\n            }\n\n            this.start = 0;\n            this.getData();\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .table.vue-data-table {\n        margin-bottom: 0;\n    }\n\n    .table-responsive {\n        position: relative;\n        display: block;\n        width: 100%;\n        min-height: .01%;\n        overflow-x: auto;\n    }\n\n    .table-responsive table {\n        font-size: 15px;\n    }\n\n    div.table-bottom-controls {\n        margin-top: .5rem;\n    }\n\n    div.no-records-found {\n        margin-top: 20px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_toastr__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TopControls_vue__ = __webpack_require__(1139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TopControls_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TopControls_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TableHeader_vue__ = __webpack_require__(1158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TableHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TableHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TableBody_vue__ = __webpack_require__(1131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TableBody_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TableBody_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TableFooter_vue__ = __webpack_require__(1172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TableFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__TableFooter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RecordsInfo_vue__ = __webpack_require__(1177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RecordsInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__RecordsInfo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Pagination_vue__ = __webpack_require__(1182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Overlay_vue__ = __webpack_require__(1187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Overlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Overlay_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__responsive_vResponsive__ = __webpack_require__(1192);
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

/***/ 1139:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1140)
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

/***/ 1140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topControls_LengthMenu_vue__ = __webpack_require__(1141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__topControls_LengthMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__topControls_LengthMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topControls_ColumnVisibility_vue__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__topControls_ColumnVisibility_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__topControls_ColumnVisibility_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topControls_Alignment_vue__ = __webpack_require__(1151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topControls_Alignment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__topControls_Alignment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topControls_StyleSelector_vue__ = __webpack_require__(1154);
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

/***/ 1141:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1142)
/* template */
var __vue_template__ = __webpack_require__(1147)
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

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__ = __webpack_require__(1094);
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

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1144);
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

/***/ 1144:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.dropdown-menu[data-v-313ea473] {\n  min-width: unset;\n}\n.dropdown-menu .dropdown-content[data-v-313ea473] {\n    min-width: unset;\n    overflow-y: auto;\n}\n.dropdown-menu .dropdown-content a.dropdown-item[data-v-313ea473] {\n      padding: .375rem 1rem;\n}\n.icon.angle[data-v-313ea473] {\n  -webkit-transition: -webkit-transform .300s ease;\n  transition: -webkit-transform .300s ease;\n  transition: transform .300s ease;\n  transition: transform .300s ease, -webkit-transform .300s ease;\n}\n.icon.angle[aria-hidden=\"true\"][data-v-313ea473] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/topControls/Dropdown.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;CAAE;AACnB;IACE,iBAAiB;IACjB,iBAAiB;CAAE;AACnB;MACE,sBAAsB;CAAE;AAE9B;EACE,iDAAiC;EAAjC,yCAAiC;EAAjC,iCAAiC;EAAjC,+DAAiC;CAAE;AACnC;IACE,kCAA0B;YAA1B,0BAA0B;CAAE","file":"Dropdown.vue","sourcesContent":[".dropdown-menu {\n  min-width: unset; }\n  .dropdown-menu .dropdown-content {\n    min-width: unset;\n    overflow-y: auto; }\n    .dropdown-menu .dropdown-content a.dropdown-item {\n      padding: .375rem 1rem; }\n\n.icon.angle {\n  transition: transform .300s ease; }\n  .icon.angle[aria-hidden=\"true\"] {\n    transform: rotate(180deg); }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside__ = __webpack_require__(14);
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

/***/ 1146:
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
                [_c("i", { staticClass: "fas fa-angle-down" })]
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

/***/ 1147:
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
                _vm.show = false
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

/***/ 1148:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1149)
/* template */
var __vue_template__ = __webpack_require__(1150)
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

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__ = __webpack_require__(1094);
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
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ColumnVisibility',

    components: { Dropdown: __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue___default.a },

    props: {
        template: {
            type: Object,
            required: true
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
    "dropdown",
    [
      _c(
        "span",
        {
          staticClass: "icon is-small",
          attrs: { slot: "label" },
          slot: "label"
        },
        [_c("i", { staticClass: "fas fa-eye" })]
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

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1152)
/* template */
var __vue_template__ = __webpack_require__(1153)
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

/***/ 1152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__ = __webpack_require__(1094);
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
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Alignment',

    components: { Dropdown: __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue___default.a },

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
                center: 'fas fa-align-center',
                left: 'fas fa-align-left',
                right: 'fas fa-align-right'
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

/***/ 1153:
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
        [_c("i", { staticClass: "fas fa-align-justify" })]
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

/***/ 1154:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1155)
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

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__ = __webpack_require__(1094);
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
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'StyleSelector',

    components: { Dropdown: __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue___default.a },

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

/***/ 1156:
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
        [_c("i", { staticClass: "fas fa-table" })]
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

/***/ 1157:
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
      _c("i", { staticClass: "fas fa-sync" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fas fa-undo" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon is-small is-left" }, [
      _c("i", { staticClass: "fas fa-search" })
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

/***/ 1158:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1159)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1161)
/* template */
var __vue_template__ = __webpack_require__(1162)
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

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1160);
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

/***/ 1160:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nth.vue-table-header {\n  white-space: nowrap;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.table-header-controls .sorter {\n  cursor: pointer;\n  opacity: 0.5;\n}\n.table-header-controls .sorter:hover {\n    opacity: 1;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/TableHeader.vue"],"names":[],"mappings":";AAAA;EACE,oBAAoB;EACpB,2BAAsB;MAAtB,sBAAsB;CAAE;AAE1B;EACE,gBAAgB;EAChB,aAAa;CAAE;AACf;IACE,WAAW;CAAE","file":"TableHeader.vue","sourcesContent":["th.vue-table-header {\n  white-space: nowrap;\n  align-content: center; }\n\n.table-header-controls .sorter {\n  cursor: pointer;\n  opacity: 0.5; }\n  .table-header-controls .sorter:hover {\n    opacity: 1; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1161:
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

/***/ 1162:
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
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: !column.meta.sort,
                                      expression: "!column.meta.sort"
                                    }
                                  ],
                                  staticClass: "icon is-small"
                                },
                                [_c("i", { staticClass: "fas fa-sort fa-xs" })]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: column.meta.sort === "ASC",
                                      expression: "column.meta.sort === 'ASC'"
                                    }
                                  ],
                                  staticClass: "icon is-small"
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-sort-up fa-xs"
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "span",
                                {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: column.meta.sort === "DESC",
                                      expression: "column.meta.sort === 'DESC'"
                                    }
                                  ],
                                  staticClass: "icon is-small"
                                },
                                [
                                  _c("i", {
                                    staticClass: "fas fa-sort-down fa-xs"
                                  })
                                ]
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

/***/ 1163:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1164);
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

/***/ 1164:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\ndiv.table-crt-no[data-v-5dbfa9fc] {\n  white-space: nowrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\ndiv.table-crt-no .crt-no-label[data-v-5dbfa9fc] {\n    margin: auto;\n}\ndiv.table-crt-no .hidden-controls[data-v-5dbfa9fc] {\n    cursor: pointer;\n    margin-left: auto;\n    margin-top: 0.1em;\n}\ntd.table-actions[data-v-5dbfa9fc] {\n  padding: .35em .5em;\n}\ntd.table-actions span.table-action-buttons[data-v-5dbfa9fc] {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\ntd.table-actions .button.is-small.is-table-button[data-v-5dbfa9fc] {\n    height: 1.6em;\n    width: 1.6em;\n    font-size: .9em;\n}\nli.child-row[data-v-5dbfa9fc]:not(:last-child) {\n  border-bottom: 1px solid #efefef;\n}\nli.child-row[data-v-5dbfa9fc] {\n  padding: 0.5em 0;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/TableBody.vue"],"names":[],"mappings":";AAAA;EACE,oBAAoB;EACpB,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAAE;AAChB;IACE,aAAa;CAAE;AACjB;IACE,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;CAAE;AAExB;EACE,oBAAoB;CAAE;AACtB;IACE,4BAAqB;IAArB,4BAAqB;IAArB,qBAAqB;CAAE;AACzB;IACE,cAAc;IACd,aAAa;IACb,gBAAgB;CAAE;AAEtB;EACE,iCAAiC;CAAE;AAErC;EACE,iBAAiB;CAAE","file":"TableBody.vue","sourcesContent":["div.table-crt-no {\n  white-space: nowrap;\n  display: flex; }\n  div.table-crt-no .crt-no-label {\n    margin: auto; }\n  div.table-crt-no .hidden-controls {\n    cursor: pointer;\n    margin-left: auto;\n    margin-top: 0.1em; }\n\ntd.table-actions {\n  padding: .35em .5em; }\n  td.table-actions span.table-action-buttons {\n    display: inline-flex; }\n  td.table-actions .button.is-small.is-table-button {\n    height: 1.6em;\n    width: 1.6em;\n    font-size: .9em; }\n\nli.child-row:not(:last-child) {\n  border-bottom: 1px solid #efefef; }\n\nli.child-row {\n  padding: 0.5em 0; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TableBody_vue__ = __webpack_require__(1131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__TableBody_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__TableBody_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Modal_vue__ = __webpack_require__(1166);
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

/***/ 1166:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1167)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1169)
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

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1168);
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

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.modal.is-active {\n    z-index: 1100;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/Modal.vue"],"names":[],"mappings":";AA8DA;IACA,cAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n\n    <transition enter-active-class=\"animated fadeIn\"\n        leave-active-class=\"animated fadeOut\">\n        <div class=\"modal\"\n            :class=\"{ 'is-active': show }\"\n            v-if=\"show\">\n            <div class=\"modal-background\"></div>\n            <div class=\"table-modal modal-content\">\n                <div class=\"box\">\n                    <slot name=\"content\">\n                        <h5 class=\"subtitle is-5\">\n                            {{ i18n(message || \"Are you sure that you want to perform this action?\") }}\n                        </h5>\n                    </slot>\n                    <hr>\n                    <div class=\"level\">\n                        <div class=\"level-left\"></div>\n                        <div class=\"level-right\">\n                            <div class=\"level-item\">\n                                <slot name=\"controls\">\n                                    <button class=\"button is-success\"\n                                          @click=\"$emit('cancel-action')\">\n                                          {{ i18n(\"Cancel\") }}\n                                      </button>\n                                      <button class=\"button is-danger has-margin-left-small\"\n                                        @click=\"$emit('commit-action')\">\n                                        {{ i18n(\"Yes\") }}\n                                    </button>\n                                </slot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </transition>\n\n</template>\n\n<script>\n\nexport default {\n    props: {\n        show: {\n            type: Boolean,\n            required: true,\n        },\n        message: {\n            type: String,\n            default: null,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .modal.is-active {\n        z-index: 1100;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1169:
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

/***/ 1170:
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

/***/ 1171:
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
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.isExpanded(row),
                                    expression: "isExpanded(row)"
                                  }
                                ],
                                staticClass: "icon is-small"
                              },
                              [_c("i", { staticClass: "fas fa-minus-square" })]
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: !_vm.isExpanded(row),
                                    expression: "!isExpanded(row)"
                                  }
                                ],
                                staticClass: "icon is-small"
                              },
                              [_c("i", { staticClass: "fas fa-plus-square" })]
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

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1173)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1175)
/* template */
var __vue_template__ = __webpack_require__(1176)
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

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1174);
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

/***/ 1174:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"TableFooter.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 1175:
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

/***/ 1176:
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

/***/ 1178:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1179);
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

/***/ 1179:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.table-entries-info {\n    font-size: 15px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/RecordsInfo.vue"],"names":[],"mappings":";AAyCA;IACA,gBAAA;CACA","file":"RecordsInfo.vue","sourcesContent":["<template>\n\n    <span class=\"table-entries-info\">\n        {{ `${i18n('From')} ${start + 1} ${i18n('to')} ${(start + length) <= body.filtered ? start + length : body.filtered} \\\n        ${i18n('of')} ${body.filtered} ${i18n('entries')}` }}\n        <span v-if=\"body.filtered !== body.count\">\n            {{ `(${i18n('filtered')} ${i18n('from')} ${body.count} \\\n            ${i18n('total')} ${i18n('records')})` }}\n        </span>\n    </span>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'RecordsInfo',\n\n    props: {\n        start: {\n            type: Number,\n            required: true,\n        },\n        length: {\n            type: Number,\n            required: true,\n        },\n        body: {\n            type: Object,\n            required: true,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .table-entries-info {\n        font-size: 15px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

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

/***/ 1181:
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

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1183)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1185)
/* template */
var __vue_template__ = __webpack_require__(1186)
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

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1184);
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

/***/ 1184:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nnav.table-navigation {\n    max-width: 425px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/Pagination.vue"],"names":[],"mappings":";AA+HA;IACA,iBAAA;CACA","file":"Pagination.vue","sourcesContent":["<template>\n\n    <nav class=\"table-pagination pagination is-small\"\n        role=\"navigation\"\n        aria-label=\"pagination\">\n        <a class=\"pagination-previous\"\n            :disabled=\"page === 1\"\n            @click=\"jumpTo(page - 1)\">\n            {{ i18n('Previous') }}\n        </a>\n        <a class=\"pagination-next\"\n            :disabled=\"page === pages\"\n            @click=\"jumpTo(page + 1)\">\n            {{ i18n('Next') }}\n        </a>\n        <ul class=\"pagination-list\">\n            <li>\n                <a class=\"pagination-link\"\n                    :class=\"{ 'is-current': page === 1 }\"\n                    @click=\"jumpTo(1)\">\n                    1\n                </a>\n            </li>\n            <li v-if=\"pages > 5 && !atStart\">\n                <span class=\"pagination-ellipsis\">\n                    &hellip;\n                </span>\n            </li>\n            <li v-for=\"i in middlePages\"\n                :key=\"i\">\n                <a class=\"pagination-link\"\n                    :class=\"{ 'is-current': page === i }\"\n                    @click=\"jumpTo(i)\">\n                    {{ i }}\n                </a>\n            </li>\n            <li v-if=\"pages > 5 && !atEnd\">\n                <span class=\"pagination-ellipsis\">\n                    &hellip;\n                </span>\n            </li>\n            <li v-if=\"pages > 1\">\n                <a class=\"pagination-link\"\n                    :class=\"{ 'is-current': page === pages }\"\n                    @click=\"jumpTo(pages)\">\n                    {{ pages }}\n                </a>\n            </li>\n        </ul>\n    </nav>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'Pagination',\n\n    props: {\n        records: {\n            type: Number,\n            required: true,\n        },\n        start: {\n            type: Number,\n            required: true,\n        },\n        length: {\n            type: Number,\n            required: true,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n\n    computed: {\n        page() {\n            return (this.start / this.length) + 1;\n        },\n        pages() {\n            return Math.ceil(this.records / this.length);\n        },\n        atStart() {\n            return this.page < 4;\n        },\n        atEnd() {\n            return this.pages - this.page < 3;\n        },\n        middlePages() {\n            const pages = [];\n\n            if (this.atStart) {\n                const max = Math.min(this.pages - 1, 4);\n                for (let i = 2; i <= max; i++) {\n                    pages.push(i);\n                }\n\n                return pages;\n            }\n\n            if (this.atEnd) {\n                pages.push(this.pages - 3, this.pages - 2, this.pages - 1);\n                return pages;\n            }\n\n            pages.push(this.page - 1, this.page, this.page + 1);\n\n            return pages;\n        },\n    },\n\n    methods: {\n        jumpTo(page) {\n            if (page === this.page || page < 1 || page > this.pages) {\n                return;\n            }\n\n            this.$emit('jump-to', (page - 1) * this.length);\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    nav.table-navigation {\n        max-width: 425px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1185:
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

/***/ 1186:
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

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1188)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1190)
/* template */
var __vue_template__ = __webpack_require__(1191)
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

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1189);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("77398b93", content, false);
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

/***/ 1189:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.vdt-overlay {\n    background: rgba(255, 255, 255, 0.4);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.vdt-overlay-loader {\n    margin: auto;\n    -webkit-animation: spinAround 500ms infinite linear;\n    animation: spinAround 500ms infinite linear;\n    border-radius: 290486px;\n    content: \"\";\n    display: block;\n    position: relative;\n    width: 2em;\n    height: 2em;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/Overlay.vue"],"names":[],"mappings":";AA6BA;IACA,qCAAA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;CACA;AAEA;IACA,aAAA;IACA,oDAAA;IACA,4CAAA;IACA,wBAAA;IACA,YAAA;IACA,eAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;CACA","file":"Overlay.vue","sourcesContent":["<template>\n\n    <div class=\"vdt-overlay is-overlay\">\n        <div class=\"vdt-overlay-loader\"\n            :style=\"overlay\">\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'Overlay',\n\n    computed: {\n        overlay() {\n            return {\n                border: '2px solid #00d1b2',\n                'border-right-color': 'transparent',\n                'border-top-color': 'transparent',\n            };\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .vdt-overlay {\n        background: rgba(255, 255, 255, 0.4);\n        display: flex;\n    }\n\n    .vdt-overlay-loader {\n        margin: auto;\n        -webkit-animation: spinAround 500ms infinite linear;\n        animation: spinAround 500ms infinite linear;\n        border-radius: 290486px;\n        content: \"\";\n        display: block;\n        position: relative;\n        width: 2em;\n        height: 2em;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1190:
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

/***/ 1191:
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

/***/ 1192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_resize_detector__ = __webpack_require__(1193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_resize_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_resize_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResponsiveTable__ = __webpack_require__(1204);



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

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach                 = __webpack_require__(1132).forEach;
var elementUtilsMaker       = __webpack_require__(1194);
var listenerHandlerMaker    = __webpack_require__(1195);
var idGeneratorMaker        = __webpack_require__(1196);
var idHandlerMaker          = __webpack_require__(1197);
var reporterMaker           = __webpack_require__(1198);
var browserDetector         = __webpack_require__(1133);
var batchProcessorMaker     = __webpack_require__(1199);
var stateHandler            = __webpack_require__(1201);

//Detection strategies.
var objectStrategyMaker     = __webpack_require__(1202);
var scrollStrategyMaker     = __webpack_require__(1203);

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

/***/ 1194:
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

/***/ 1195:
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

/***/ 1196:
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

/***/ 1197:
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

/***/ 1198:
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

/***/ 1199:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1200);

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

/***/ 1200:
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

/***/ 1201:
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

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */



var browserDetector = __webpack_require__(1133);

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

/***/ 1203:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */



var forEach = __webpack_require__(1132).forEach;

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

/***/ 1204:
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

/***/ 1205:
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

/***/ 1562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_vuedatatable_VueTable_vue__ = __webpack_require__(1135);
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
            path: route('system.tutorials.initTable', [], false)
        };
    },


    methods: {
        customRender: function customRender(row, _ref) {
            var name = _ref.name;

            switch (name) {
                case 'placement':
                    return '<span class="tag is-table-tag is-info">' + row[name] + '</span';
                default:
                    toastr.warning('render for column ' + name + ' is not defined.');
                    return row[name];
            }
        }
    }
});

/***/ }),

/***/ 1563:
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
      id: "tutorials"
    }
  })
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-5a4cf516", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS90dXRvcmlhbHMvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Ecm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9jb2xsZWN0aW9uLXV0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvYnJvd3Nlci1kZXRlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWU/MTkxNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlPzdjYWEiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvTGVuZ3RoTWVudS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9MZW5ndGhNZW51LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvRHJvcGRvd24udnVlP2RjNGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0Ryb3Bkb3duLnZ1ZT9hNTEwIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9Ecm9wZG93bi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0Ryb3Bkb3duLnZ1ZT8xNmE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9MZW5ndGhNZW51LnZ1ZT8zYjljIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0NvbHVtblZpc2liaWxpdHkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZT8xOTNmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9BbGlnbm1lbnQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZT9lZmEyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL1N0eWxlU2VsZWN0b3IudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZT85Nzg3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWU/ZTUxZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWU/ZGI2NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlP2E2ODciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZT80NmI0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlPzkxMTQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWU/MzZkMSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlPzg3YmQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZT83MDE2Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWU/MGQ0ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZT80NzBkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZT83MmI3Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWU/MzFjNyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlPzEyYzMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlPzAzZjEiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZT9jYWVjIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWU/OWY1NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlP2FmN2EiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlP2I1NDciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWU/MGM1ZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlPzBjNzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlPzQ2YWYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWU/Nzg4MCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvcmVzcG9uc2l2ZS92UmVzcG9uc2l2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvZWxlbWVudC11dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2xpc3RlbmVyLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9pZC1nZW5lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9pZC1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvcmVwb3J0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2JhdGNoLXByb2Nlc3Nvci9zcmMvYmF0Y2gtcHJvY2Vzc29yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYXRjaC1wcm9jZXNzb3Ivc3JjL3V0aWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvc3RhdGUtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2RldGVjdGlvbi1zdHJhdGVneS9vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9kZXRlY3Rpb24tc3RyYXRlZ3kvc2Nyb2xsLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNwb25zaXZlL1Jlc3BvbnNpdmVUYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlP2Y5MTMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL3R1dG9yaWFscy9JbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vdHV0b3JpYWxzL0luZGV4LnZ1ZT84YjFiIl0sIm5hbWVzIjpbImluc2VydGVkIiwiZWwiLCJiaW5kaW5nIiwiY29udGV4dCIsInRhYmxlIiwiZXJkIiwicmVzaXplRGV0ZWN0b3IiLCJzdHJhdGVneSIsInJlc2l6ZSIsImxpc3RlblRvIiwiUmVzcG9uc2l2ZVRhYmxlIiwiaGlkaW5nIiwid2lkdGgiLCJoZWlnaHQiLCJjbGllbnRXaWR0aCIsImNsaWVudEhlaWdodCIsInNjcm9sbFdpZHRoIiwiY29sdW1ucyIsInRlbXBsYXRlIiwiZmlsdGVyIiwiY29sdW1uIiwibWV0YSIsInZpc2libGUiLCJoaWRkZW4iLCJsZW5ndGgiLCJyZXRyeUZpdCIsInNob3VsZG50UmVzaXplIiwiZml0IiwiJG5leHRUaWNrIiwic2hvdWxkSGlkZSIsImhpZGVDb2x1bW5zIiwic2hvdWxkVW5oaWRlIiwic2hvd0NvbHVtbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7QUFDQSwrQ0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMk07QUFDM007QUFDQTtBQUNBO0FBQ0EsNkNBQWlWO0FBQ2pWO0FBQ0EsK0NBQXdMO0FBQ3hMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUErQztBQUN4RTtBQUNBO0FBQ0EsbUJBQW1CLHdCQUF3QjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixpREFBaUQ7QUFDcEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFvRDtBQUM3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xKQTtBQUNBOztBQUVBO2tCQUdBOztBQUNBLHVHQUdBOzswQkFDQTs7MERBR0E7QUFGQTtBQUlBOzs7OztBQUVBOztvQkFDQTtxQkFDQTsyRUFDQTtBQUNBOzBEQUNBOytCQUVBOztBQUVBO0FBVkE7QUFiQSxHOzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiNC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbmRleC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTVhNGNmNTE2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL3R1dG9yaWFscy9JbmRleC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWE0Y2Y1MTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01YTRjZjUxNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vdHV0b3JpYWxzL0luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA5MlxuLy8gbW9kdWxlIGNodW5rcyA9IDQiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTMxM2VhNDczXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRHJvcGRvd24udnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ecm9wZG93bi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTMxM2VhNDczXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Ecm9wZG93bi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LTMxM2VhNDczXCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Ecm9wZG93bi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMzEzZWE0NzNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0zMTNlYTQ3M1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0Ryb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWRiZmE5ZmNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUJvZHkudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9UYWJsZUJvZHkudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZGJmYTlmY1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVGFibGVCb2R5LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNWRiZmE5ZmNcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWRiZmE5ZmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZGJmYTlmY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWVcbi8vIG1vZHVsZSBpZCA9IDExMzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLyoqXG4gKiBMb29wcyB0aHJvdWdoIHRoZSBjb2xsZWN0aW9uIGFuZCBjYWxscyB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggZWxlbWVudC4gaWYgdGhlIGNhbGxiYWNrIHJldHVybnMgdHJ1dGh5LCB0aGUgbG9vcCBpcyBicm9rZW4gYW5kIHJldHVybnMgdGhlIHNhbWUgdmFsdWUuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gbG9vcCB0aHJvdWdoLiBOZWVkcyB0byBoYXZlIGEgbGVuZ3RoIHByb3BlcnR5IHNldCBhbmQgaGF2ZSBpbmRpY2VzIHNldCBmcm9tIDAgdG8gbGVuZ3RoIC0gMS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudC4gVGhlIGVsZW1lbnQgd2lsbCBiZSBnaXZlbiBhcyBhIHBhcmFtZXRlciB0byB0aGUgY2FsbGJhY2suIElmIHRoaXMgY2FsbGJhY2sgcmV0dXJucyB0cnV0aHksIHRoZSBsb29wIGlzIGJyb2tlbiBhbmQgdGhlIHNhbWUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHZhbHVlIHRoYXQgYSBjYWxsYmFjayBoYXMgcmV0dXJuZWQgKGlmIHRydXRoeSkuIE90aGVyd2lzZSBub3RoaW5nLlxuICovXG51dGlscy5mb3JFYWNoID0gZnVuY3Rpb24oY29sbGVjdGlvbiwgY2FsbGJhY2spIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soY29sbGVjdGlvbltpXSk7XG4gICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvY29sbGVjdGlvbi11dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTEzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGV0ZWN0b3IgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5kZXRlY3Rvci5pc0lFID0gZnVuY3Rpb24odmVyc2lvbikge1xuICAgIGZ1bmN0aW9uIGlzQW55SWVWZXJzaW9uKCkge1xuICAgICAgICB2YXIgYWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBhZ2VudC5pbmRleE9mKFwibXNpZVwiKSAhPT0gLTEgfHwgYWdlbnQuaW5kZXhPZihcInRyaWRlbnRcIikgIT09IC0xIHx8IGFnZW50LmluZGV4T2YoXCIgZWRnZS9cIikgIT09IC0xO1xuICAgIH1cblxuICAgIGlmKCFpc0FueUllVmVyc2lvbigpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZighdmVyc2lvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvL1NoYW1lbGVzc2x5IHN0b2xlbiBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhZG9sc2V5LzUyNzY4M1xuICAgIHZhciBpZVZlcnNpb24gPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHVuZGVmLFxuICAgICAgICAgICAgdiA9IDMsXG4gICAgICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICAgICAgYWxsID0gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaVwiKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gXCI8IS0tW2lmIGd0IElFIFwiICsgKCsrdikgKyBcIl0+PGk+PC9pPjwhW2VuZGlmXS0tPlwiO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChhbGxbMF0pO1xuXG4gICAgICAgIHJldHVybiB2ID4gNCA/IHYgOiB1bmRlZjtcbiAgICB9KCkpO1xuXG4gICAgcmV0dXJuIHZlcnNpb24gPT09IGllVmVyc2lvbjtcbn07XG5cbmRldGVjdG9yLmlzTGVnYWN5T3BlcmEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISF3aW5kb3cub3BlcmE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2Jyb3dzZXItZGV0ZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExMzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlNTQxOTM0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZVRhYmxlLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVnVlVGFibGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xZTU0MTkzNFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Z1ZVRhYmxlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xZTU0MTkzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFlNTQxOTM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTM1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlNTQxOTM0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZVRhYmxlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOTZlYzU5NDRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWU1NDE5MzRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlVGFibGUudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlNTQxOTM0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZVRhYmxlLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZTU0MTkzNFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFibGUudnVlLWRhdGEtdGFibGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4udGFibGUtcmVzcG9uc2l2ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAuMDElO1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG4udGFibGUtcmVzcG9uc2l2ZSB0YWJsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuZGl2LnRhYmxlLWJvdHRvbS1jb250cm9scyB7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5kaXYubm8tcmVjb3Jkcy1mb3VuZCB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE0WEE7SUFDQSxpQkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7SUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJWdWVUYWJsZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJib3hcXFwiXFxuICAgICAgICB2LWlmPVxcXCJpbml0aWFsaXNlZFxcXCI+XFxuICAgICAgICA8dG9wLWNvbnRyb2xzIDp0ZW1wbGF0ZT1cXFwidGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImhhcy1wYWRkaW5nLXNtYWxsIGhhcy1wYWRkaW5nLWJvdHRvbS1sYXJnZVxcXCJcXG4gICAgICAgICAgICA6aTE4bj1cXFwiaTE4blxcXCJcXG4gICAgICAgICAgICA6bGVuZ3RoPVxcXCJsZW5ndGhcXFwiXFxuICAgICAgICAgICAgQHVwZGF0ZS1sZW5ndGg9XFxcImxlbmd0aD0kZXZlbnRcXFwiXFxuICAgICAgICAgICAgQGV4cG9ydC1kYXRhPVxcXCJleHBvcnREYXRhXFxcIlxcbiAgICAgICAgICAgIEByZWxvYWQ9XFxcImdldERhdGEoKVxcXCJcXG4gICAgICAgICAgICBAcmVzZXQ9XFxcInJlc2V0UHJlZmVyZW5jZXNcXFwiXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoXFxcIj5cXG4gICAgICAgIDwvdG9wLWNvbnRyb2xzPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCJcXG4gICAgICAgICAgICB2LXJlc3BvbnNpdmU+XFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSBpcy1mdWxsd2lkdGggdnVlLWRhdGEtdGFibGVcXFwiXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwidGVtcGxhdGUuc3R5bGVcXFwiXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJpZFxcXCI+XFxuICAgICAgICAgICAgICAgIDx0YWJsZS1oZWFkZXIgOnRlbXBsYXRlPVxcXCJ0ZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDppMThuPVxcXCJpMThuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQHNvcnQtdXBkYXRlPVxcXCJnZXREYXRhXFxcIj5cXG4gICAgICAgICAgICAgICAgPC90YWJsZS1oZWFkZXI+XFxuICAgICAgICAgICAgICAgIDx0YWJsZS1ib2R5IDp0ZW1wbGF0ZT1cXFwidGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LW9uPVxcXCIkbGlzdGVuZXJzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmJvZHk9XFxcImJvZHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6c3RhcnQ9XFxcInN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XFxcImkxOG5cXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y3VzdG9tLXJlbmRlcj1cXFwiY3VzdG9tUmVuZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmV4cGFuZGVkPVxcXCJleHBhbmRlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBhamF4PVxcXCJhamF4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaGFzQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvdGFibGUtYm9keT5cXG4gICAgICAgICAgICAgICAgPHRhYmxlLWZvb3RlciB2LWlmPVxcXCJ0ZW1wbGF0ZS50b3RhbCAmJiBoYXNDb250ZW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnRlbXBsYXRlPVxcXCJ0ZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpib2R5PVxcXCJib2R5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XFxcImkxOG5cXFwiPlxcbiAgICAgICAgICAgICAgICA8L3RhYmxlLWZvb3Rlcj5cXG4gICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgIDxvdmVybGF5IHYtaWY9XFxcImxvYWRpbmdcXFwiPjwvb3ZlcmxheT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1ucyB0YWJsZS1ib3R0b20tY29udHJvbHNcXFwiXFxuICAgICAgICAgICAgdi1pZj1cXFwiaGFzQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uXFxcIj5cXG4gICAgICAgICAgICAgICAgPHJlY29yZHMtaW5mbyA6Ym9keT1cXFwiYm9keVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDppMThuPVxcXCJpMThuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnN0YXJ0PVxcXCJzdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XFxcImxlbmd0aFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvcmVjb3Jkcy1pbmZvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBpcy1uYXJyb3cgaGFzLXRleHQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6c3RhcnQ9XFxcInN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cXFwibGVuZ3RoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnJlY29yZHM9XFxcImJvZHkuZmlsdGVyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cXFwiaTE4blxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBqdW1wLXRvPVxcXCJzdGFydCA9ICRldmVudDtnZXREYXRhKClcXFwiPlxcbiAgICAgICAgICAgICAgICA8L3BhZ2luYXRpb24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgdi1pZj1cXFwiYm9keSAmJiAhYm9keS5jb3VudFxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiaGFzLXRleHQtY2VudGVyZWQgbm8tcmVjb3Jkcy1mb3VuZFxcXCI+XFxuICAgICAgICAgICAge3sgaTE4bignTm8gcmVjb3JkcyB3ZXJlIGZvdW5kLicpIH19XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB0b2FzdHIgZnJvbSAndG9hc3RyJztcXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XFxuaW1wb3J0IFRvcENvbnRyb2xzIGZyb20gJy4vVG9wQ29udHJvbHMudnVlJztcXG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi9UYWJsZUhlYWRlci52dWUnO1xcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnLi9UYWJsZUJvZHkudnVlJztcXG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnLi9UYWJsZUZvb3Rlci52dWUnO1xcbmltcG9ydCBSZWNvcmRzSW5mbyBmcm9tICcuL1JlY29yZHNJbmZvLnZ1ZSc7XFxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9QYWdpbmF0aW9uLnZ1ZSc7XFxuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5LnZ1ZSc7XFxuaW1wb3J0IHZSZXNwb25zaXZlIGZyb20gJy4vcmVzcG9uc2l2ZS92UmVzcG9uc2l2ZSc7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnVnVlVGFibGUnLFxcblxcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBUb3BDb250cm9scywgVGFibGVIZWFkZXIsIFRhYmxlQm9keSwgVGFibGVGb290ZXIsIFJlY29yZHNJbmZvLCBPdmVybGF5LCBQYWdpbmF0aW9uLFxcbiAgICB9LFxcblxcbiAgICBkaXJlY3RpdmVzOiB7XFxuICAgICAgICByZXNwb25zaXZlOiB2UmVzcG9uc2l2ZSxcXG4gICAgfSxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIGlkOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHBhdGg6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgZmlsdGVyczoge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGludGVydmFsczoge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGN1c3RvbVJlbmRlcjoge1xcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IChyb3csIGNvbHVtbikgPT4ge1xcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhgJ0N1c3RvbSByZW5kZXIgZnVuY3Rpb24gaXMgbWlzc2luZyBmb3IgY29sdW1uOiAke2NvbHVtbi5uYW1lfSdgKTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvd1tjb2x1bW4ubmFtZV07XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICBpMThuOiB7XFxuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgZGVmYXVsdDogdmFsdWUgPT4gdmFsdWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgcHJlZmVyZW5jZXNLZXkoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIGBWdWVUYWJsZV8ke3RoaXMuaWR9X3ByZWZlcmVuY2VzYDtcXG4gICAgICAgIH0sXFxuICAgICAgICBwcmVmZXJlbmNlcygpIHtcXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGdsb2JhbDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLmxlbmd0aCxcXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5zdGFydCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRoaXMudGVtcGxhdGUuc29ydCxcXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLnRlbXBsYXRlLnN0eWxlLFxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IHRoaXMudGVtcGxhdGUuYWxpZ24sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMudGVtcGxhdGUuY29sdW1ucy5yZWR1Y2UoKGNvbGxlY3RvciwgY29sdW1uKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0b3IucHVzaCh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogY29sdW1uLm1ldGEuc29ydCxcXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBjb2x1bW4ubWV0YS52aXNpYmxlLFxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sbGVjdG9yO1xcbiAgICAgICAgICAgICAgICB9LCBbXSksXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuICAgICAgICBoYXNDb250ZW50KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvZHkgJiYgdGhpcy5ib2R5LmNvdW50O1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXFxuICAgICAgICAgICAgaW5pdGlhbGlzZWQ6IGZhbHNlLFxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBudWxsLFxcbiAgICAgICAgICAgIHNlYXJjaDogJycsXFxuICAgICAgICAgICAgc3RhcnQ6IG51bGwsXFxuICAgICAgICAgICAgYm9keTogbnVsbCxcXG4gICAgICAgICAgICBsZW5ndGg6IG51bGwsXFxuICAgICAgICAgICAgZXhwYW5kZWQ6IFtdLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG5cXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmaWx0ZXJzOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgaW50ZXJ2YWxzOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgbGVuZ3RoOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIHByZWZlcmVuY2VzOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ29udGVudCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZXMoKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLmdldERhdGEgPSBkZWJvdW5jZSh0aGlzLmdldERhdGEsIDEwMCk7XFxuICAgICAgICB0aGlzLmluaXQoKTtcXG4gICAgfSxcXG5cXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgaW5pdCgpIHtcXG4gICAgICAgICAgICBheGlvcy5nZXQodGhpcy5wYXRoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gZGF0YS50ZW1wbGF0ZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCA9IDA7XFxuICAgICAgICAgICAgICAgIFt0aGlzLmxlbmd0aF0gPSB0aGlzLnRlbXBsYXRlLmxlbmd0aE1lbnU7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJlZmVyZW5jZXMoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSBlcnJvci5yZXNwb25zZTtcXG5cXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNTU1KSB7XFxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoZGF0YS5tZXNzYWdlKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRQcmVmZXJlbmNlcygpIHtcXG4gICAgICAgICAgICB0aGlzLnNldERlZmF1bHRQcmVmZXJlbmNlcygpO1xcblxcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnByZWZlcmVuY2VzS2V5KSAhPT0gbnVsbCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVzZXJQcmVmZXJlbmNlcygpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNldERlZmF1bHRQcmVmZXJlbmNlcygpIHtcXG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLmNvbHVtbnMuZm9yRWFjaCgoeyBtZXRhIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KG1ldGEsICdzb3J0JywgbnVsbCk7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHNldChtZXRhLCAnaGlkZGVuJywgZmFsc2UpO1xcbiAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnRlbXBsYXRlLCAnc29ydCcsIGZhbHNlKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVc2VyUHJlZmVyZW5jZXMoKSB7XFxuICAgICAgICAgICAgY29uc3QgcHJlZnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucHJlZmVyZW5jZXNLZXkpKTtcXG5cXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcmVmcy5nbG9iYWwpLmZvckVhY2goKGtleSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywga2V5LCBwcmVmcy5nbG9iYWxba2V5XSk7XFxuICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJlZnMudGVtcGxhdGUpLmZvckVhY2goKGtleSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy50ZW1wbGF0ZSwga2V5LCBwcmVmcy50ZW1wbGF0ZVtrZXldKTtcXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICBwcmVmcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY29sdW1uKS5mb3JFYWNoKChrZXkpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnRlbXBsYXRlLmNvbHVtbnNbaW5kZXhdLm1ldGEsIGtleSwgY29sdW1uW2tleV0pO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzYXZlUHJlZmVyZW5jZXMoKSB7XFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcmVmZXJlbmNlcykpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHJlc2V0UHJlZmVyZW5jZXMoKSB7XFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSk7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSAnJztcXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBnZXREYXRhKCkge1xcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XFxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9IFtdO1xcblxcbiAgICAgICAgICAgIGF4aW9zLmdldCh0aGlzLnRlbXBsYXRlLnJlYWRQYXRoLCB7IHBhcmFtczogdGhpcy5yZWFkUmVxdWVzdCgpIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuYm9keSA9IGRhdGE7XFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgcmVhZFJlcXVlc3QoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgY29sdW1uczogdGhpcy5yZXF1ZXN0Q29sdW1ucygpLFxcbiAgICAgICAgICAgICAgICBtZXRhOiB7XFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5zdGFydCxcXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5sZW5ndGgsXFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLnRlbXBsYXRlLnNvcnQsXFxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogdGhpcy50ZW1wbGF0ZS50b3RhbCxcXG4gICAgICAgICAgICAgICAgICAgIGVudW06IHRoaXMudGVtcGxhdGUuZW51bSxcXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMudGVtcGxhdGUuZGF0ZSxcXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMudGVtcGxhdGUuYWN0aW9ucyxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcXG4gICAgICAgICAgICAgICAgYXBwZW5kczogdGhpcy50ZW1wbGF0ZS5hcHBlbmRzLFxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMsXFxuICAgICAgICAgICAgICAgIGludGVydmFsczogdGhpcy5pbnRlcnZhbHMsXFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5wYXJhbXMsXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuICAgICAgICByZXF1ZXN0Q29sdW1ucygpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLnJlZHVjZSgoY29sdW1ucywgY29sdW1uKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjb2x1bW4ubmFtZSxcXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGNvbHVtbi5kYXRhLFxcbiAgICAgICAgICAgICAgICAgICAgbWV0YToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IGNvbHVtbi5tZXRhLnNlYXJjaGFibGUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGNvbHVtbi5tZXRhLnNvcnRhYmxlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6IGNvbHVtbi5tZXRhLnNvcnQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IGNvbHVtbi5tZXRhLnRvdGFsLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGNvbHVtbi5tZXRhLmRhdGUsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgZW51bTogY29sdW1uLmVudW0sXFxuICAgICAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1ucztcXG4gICAgICAgICAgICB9LCBbXSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwb3J0RGF0YShwYXRoKSB7XFxuICAgICAgICAgICAgYXhpb3MuZ2V0KHBhdGgsIHsgcGFyYW1zOiB0aGlzLmV4cG9ydFJlcXVlc3QoKSB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XFxuXFxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDU1NSkge1xcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKGRhdGEubWVzc2FnZSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwb3J0UmVxdWVzdCgpIHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRlbXBsYXRlLm5hbWUsXFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMudGVtcGxhdGUuY29sdW1ucyxcXG4gICAgICAgICAgICAgICAgbWV0YToge1xcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMuYm9keS5jb3VudCxcXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRoaXMudGVtcGxhdGUuc29ydCxcXG4gICAgICAgICAgICAgICAgICAgIGVudW06IHRoaXMudGVtcGxhdGUuZW51bSxcXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMudGVtcGxhdGUuZGF0ZSxcXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcXG4gICAgICAgICAgICAgICAgYXBwZW5kczogdGhpcy50ZW1wbGF0ZS5hcHBlbmRzLFxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMsXFxuICAgICAgICAgICAgICAgIGludGVydmFsczogdGhpcy5pbnRlcnZhbHMsXFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5wYXJhbXMsXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuICAgICAgICBhamF4KG1ldGhvZCwgcGF0aCkge1xcbiAgICAgICAgICAgIGF4aW9zW21ldGhvZC50b0xvd2VyQ2FzZSgpXShwYXRoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZmlsdGVyVXBkYXRlKCkge1xcbiAgICAgICAgICAgIGlmICghdGhpcy5pbml0aWFsaXNlZCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSAwO1xcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgLnRhYmxlLnZ1ZS1kYXRhLXRhYmxlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IC4wMSU7XFxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbiAgICBkaXYudGFibGUtYm90dG9tLWNvbnRyb2xzIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICB9XFxuXFxuICAgIGRpdi5uby1yZWNvcmRzLWZvdW5kIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZTU0MTkzNFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJib3hcIlxuICAgICAgICB2LWlmPVwiaW5pdGlhbGlzZWRcIj5cbiAgICAgICAgPHRvcC1jb250cm9scyA6dGVtcGxhdGU9XCJ0ZW1wbGF0ZVwiXG4gICAgICAgICAgICBjbGFzcz1cImhhcy1wYWRkaW5nLXNtYWxsIGhhcy1wYWRkaW5nLWJvdHRvbS1sYXJnZVwiXG4gICAgICAgICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgICAgICAgOmxlbmd0aD1cImxlbmd0aFwiXG4gICAgICAgICAgICBAdXBkYXRlLWxlbmd0aD1cImxlbmd0aD0kZXZlbnRcIlxuICAgICAgICAgICAgQGV4cG9ydC1kYXRhPVwiZXhwb3J0RGF0YVwiXG4gICAgICAgICAgICBAcmVsb2FkPVwiZ2V0RGF0YSgpXCJcbiAgICAgICAgICAgIEByZXNldD1cInJlc2V0UHJlZmVyZW5jZXNcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiPlxuICAgICAgICA8L3RvcC1jb250cm9scz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgdi1yZXNwb25zaXZlPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoIHZ1ZS1kYXRhLXRhYmxlXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ0ZW1wbGF0ZS5zdHlsZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJpZFwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZS1oZWFkZXIgOnRlbXBsYXRlPVwidGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgICAgICAgICAgICAgICBAc29ydC11cGRhdGU9XCJnZXREYXRhXCI+XG4gICAgICAgICAgICAgICAgPC90YWJsZS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgPHRhYmxlLWJvZHkgOnRlbXBsYXRlPVwidGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICB2LW9uPVwiJGxpc3RlbmVyc1wiXG4gICAgICAgICAgICAgICAgICAgIDpib2R5PVwiYm9keVwiXG4gICAgICAgICAgICAgICAgICAgIDpzdGFydD1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgICAgICAgICAgICAgICAgOmN1c3RvbS1yZW5kZXI9XCJjdXN0b21SZW5kZXJcIlxuICAgICAgICAgICAgICAgICAgICA6ZXhwYW5kZWQ9XCJleHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgIEBhamF4PVwiYWpheFwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJoYXNDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPC90YWJsZS1ib2R5PlxuICAgICAgICAgICAgICAgIDx0YWJsZS1mb290ZXIgdi1pZj1cInRlbXBsYXRlLnRvdGFsICYmIGhhc0NvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICA6dGVtcGxhdGU9XCJ0ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDpib2R5PVwiYm9keVwiXG4gICAgICAgICAgICAgICAgICAgIDppMThuPVwiaTE4blwiPlxuICAgICAgICAgICAgICAgIDwvdGFibGUtZm9vdGVyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDxvdmVybGF5IHYtaWY9XCJsb2FkaW5nXCI+PC9vdmVybGF5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgdGFibGUtYm90dG9tLWNvbnRyb2xzXCJcbiAgICAgICAgICAgIHYtaWY9XCJoYXNDb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPHJlY29yZHMtaW5mbyA6Ym9keT1cImJvZHlcIlxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgICAgICAgICAgICAgICA6c3RhcnQ9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsZW5ndGhcIj5cbiAgICAgICAgICAgICAgICA8L3JlY29yZHMtaW5mbz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1uYXJyb3cgaGFzLXRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6c3RhcnQ9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICA6cmVjb3Jkcz1cImJvZHkuZmlsdGVyZWRcIlxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgICAgICAgICAgICAgICBAanVtcC10bz1cInN0YXJ0ID0gJGV2ZW50O2dldERhdGEoKVwiPlxuICAgICAgICAgICAgICAgIDwvcGFnaW5hdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwiYm9keSAmJiAhYm9keS5jb3VudFwiXG4gICAgICAgICAgICBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkIG5vLXJlY29yZHMtZm91bmRcIj5cbiAgICAgICAgICAgIHt7IGkxOG4oJ05vIHJlY29yZHMgd2VyZSBmb3VuZC4nKSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHRvYXN0ciBmcm9tICd0b2FzdHInO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFRvcENvbnRyb2xzIGZyb20gJy4vVG9wQ29udHJvbHMudnVlJztcbmltcG9ydCBUYWJsZUhlYWRlciBmcm9tICcuL1RhYmxlSGVhZGVyLnZ1ZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vVGFibGVCb2R5LnZ1ZSc7XG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnLi9UYWJsZUZvb3Rlci52dWUnO1xuaW1wb3J0IFJlY29yZHNJbmZvIGZyb20gJy4vUmVjb3Jkc0luZm8udnVlJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbi52dWUnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5LnZ1ZSc7XG5pbXBvcnQgdlJlc3BvbnNpdmUgZnJvbSAnLi9yZXNwb25zaXZlL3ZSZXNwb25zaXZlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdWdWVUYWJsZScsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFRvcENvbnRyb2xzLCBUYWJsZUhlYWRlciwgVGFibGVCb2R5LCBUYWJsZUZvb3RlciwgUmVjb3Jkc0luZm8sIE92ZXJsYXksIFBhZ2luYXRpb24sXG4gICAgfSxcblxuICAgIGRpcmVjdGl2ZXM6IHtcbiAgICAgICAgcmVzcG9uc2l2ZTogdlJlc3BvbnNpdmUsXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGF0aDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJ2YWxzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21SZW5kZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgZGVmYXVsdDogKHJvdywgY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoYCdDdXN0b20gcmVuZGVyIGZ1bmN0aW9uIGlzIG1pc3NpbmcgZm9yIGNvbHVtbjogJHtjb2x1bW4ubmFtZX0nYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvd1tjb2x1bW4ubmFtZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHZhbHVlID0+IHZhbHVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBwcmVmZXJlbmNlc0tleSgpIHtcbiAgICAgICAgICAgIHJldHVybiBgVnVlVGFibGVfJHt0aGlzLmlkfV9wcmVmZXJlbmNlc2A7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZlcmVuY2VzKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy50ZW1wbGF0ZS5zb3J0LFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogdGhpcy50ZW1wbGF0ZS5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IHRoaXMudGVtcGxhdGUuYWxpZ24sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLnRlbXBsYXRlLmNvbHVtbnMucmVkdWNlKChjb2xsZWN0b3IsIGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0b3IucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiBjb2x1bW4ubWV0YS5zb3J0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogY29sdW1uLm1ldGEudmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3RvcjtcbiAgICAgICAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBoYXNDb250ZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keSAmJiB0aGlzLmJvZHkuY291bnQ7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBudWxsLFxuICAgICAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgICAgIHN0YXJ0OiBudWxsLFxuICAgICAgICAgICAgYm9keTogbnVsbCxcbiAgICAgICAgICAgIGxlbmd0aDogbnVsbCxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBbXSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJzOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJ2YWxzOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcmVmZXJlbmNlczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVByZWZlcmVuY2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuZ2V0RGF0YSA9IGRlYm91bmNlKHRoaXMuZ2V0RGF0YSwgMTAwKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaW5pdCgpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCh0aGlzLnBhdGgpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRhdGEudGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgW3RoaXMubGVuZ3RoXSA9IHRoaXMudGVtcGxhdGUubGVuZ3RoTWVudTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByZWZlcmVuY2VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA1NTUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UHJlZmVyZW5jZXMoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERlZmF1bHRQcmVmZXJlbmNlcygpO1xuXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVzZXJQcmVmZXJlbmNlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RGVmYXVsdFByZWZlcmVuY2VzKCkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLmZvckVhY2goKHsgbWV0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KG1ldGEsICdzb3J0JywgbnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KG1ldGEsICdoaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudGVtcGxhdGUsICdzb3J0JywgZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRVc2VyUHJlZmVyZW5jZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVmcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSkpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcmVmcy5nbG9iYWwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCBrZXksIHByZWZzLmdsb2JhbFtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcmVmcy50ZW1wbGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudGVtcGxhdGUsIGtleSwgcHJlZnMudGVtcGxhdGVba2V5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJlZnMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY29sdW1uKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudGVtcGxhdGUuY29sdW1uc1tpbmRleF0ubWV0YSwga2V5LCBjb2x1bW5ba2V5XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZVByZWZlcmVuY2VzKCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcmVmZXJlbmNlcykpO1xuICAgICAgICB9LFxuICAgICAgICByZXNldFByZWZlcmVuY2VzKCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldERhdGEoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9IFtdO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQodGhpcy50ZW1wbGF0ZS5yZWFkUGF0aCwgeyBwYXJhbXM6IHRoaXMucmVhZFJlcXVlc3QoKSB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICByZWFkUmVxdWVzdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29sdW1uczogdGhpcy5yZXF1ZXN0Q29sdW1ucygpLFxuICAgICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRoaXMudGVtcGxhdGUuc29ydCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHRoaXMudGVtcGxhdGUudG90YWwsXG4gICAgICAgICAgICAgICAgICAgIGVudW06IHRoaXMudGVtcGxhdGUuZW51bSxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGhpcy50ZW1wbGF0ZS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiB0aGlzLnRlbXBsYXRlLmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuICAgICAgICAgICAgICAgIGFwcGVuZHM6IHRoaXMudGVtcGxhdGUuYXBwZW5kcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxzOiB0aGlzLmludGVydmFscyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWVzdENvbHVtbnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLnJlZHVjZSgoY29sdW1ucywgY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGNvbHVtbi5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiBjb2x1bW4ubWV0YS5zZWFyY2hhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGNvbHVtbi5tZXRhLnNvcnRhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogY29sdW1uLm1ldGEuc29ydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBjb2x1bW4ubWV0YS50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGNvbHVtbi5tZXRhLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudW06IGNvbHVtbi5lbnVtLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV4cG9ydERhdGEocGF0aCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHBhdGgsIHsgcGFyYW1zOiB0aGlzLmV4cG9ydFJlcXVlc3QoKSB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA1NTUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXhwb3J0UmVxdWVzdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy50ZW1wbGF0ZS5uYW1lLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMudGVtcGxhdGUuY29sdW1ucyxcbiAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMuYm9keS5jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy50ZW1wbGF0ZS5zb3J0LFxuICAgICAgICAgICAgICAgICAgICBlbnVtOiB0aGlzLnRlbXBsYXRlLmVudW0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMudGVtcGxhdGUuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICAgICAgICBhcHBlbmRzOiB0aGlzLnRlbXBsYXRlLmFwcGVuZHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLFxuICAgICAgICAgICAgICAgIGludGVydmFsczogdGhpcy5pbnRlcnZhbHMsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGFqYXgobWV0aG9kLCBwYXRoKSB7XG4gICAgICAgICAgICBheGlvc1ttZXRob2QudG9Mb3dlckNhc2UoKV0ocGF0aCkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJVcGRhdGUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAudGFibGUudnVlLWRhdGEtdGFibGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IC4wMSU7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgfVxuXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuXG4gICAgZGl2LnRhYmxlLWJvdHRvbS1jb250cm9scyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cblxuICAgIGRpdi5uby1yZWNvcmRzLWZvdW5kIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Ub3BDb250cm9scy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTI1NWI2OGM2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVG9wQ29udHJvbHMudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMjU1YjY4YzZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yNTViNjhjNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW11bHRpbGluZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy1oYWxmIGlzLWhpZGRlbi1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0aXRsZSBpcy01XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwidGVtcGxhdGUuaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyBpMThuKHRlbXBsYXRlLm5hbWUpIH19XG4gICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy1oYWxmIGhhcy10ZXh0LXJpZ2h0LXRhYmxldCBoYXMtdGV4dC1jZW50ZXJlZC1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiYnV0dG9uIGluIHRlbXBsYXRlLmJ1dHRvbnMuZ2xvYmFsXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYnV0dG9uLmNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImJ1dHRvbi5sYWJlbFwiXG4gICAgICAgICAgICAgICAgICAgIDpocmVmPVwiYnV0dG9uLmFjdGlvbiA9PT0gJ2hyZWYnID8gYnV0dG9uLnBhdGggOiBudWxsXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZG9BY3Rpb24oYnV0dG9uKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBpMThuKGJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiYnV0dG9uLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy10d28tdGhpcmRzLWRlc2t0b3AgaGFzLXRleHQtY2VudGVyZWQtbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgPGxlbmd0aC1tZW51IDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cImxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgIHYtb249XCIkbGlzdGVuZXJzXCI+XG4gICAgICAgICAgICAgICAgPC9sZW5ndGgtbWVudT5cbiAgICAgICAgICAgICAgICA8Y29sdW1uLXZpc2liaWxpdHkgOnRlbXBsYXRlPVwidGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICB2LW9uPVwiJGxpc3RlbmVyc1wiPlxuICAgICAgICAgICAgICAgIDwvY29sdW1uLXZpc2liaWxpdHk+XG4gICAgICAgICAgICAgICAgPHN0eWxlLXNlbGVjdG9yIDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPC9zdHlsZS1zZWxlY3Rvcj5cbiAgICAgICAgICAgICAgICA8YWxpZ25tZW50IDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPC9hbGlnbm1lbnQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdyZWxvYWQnKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXN5bmNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ3Jlc2V0JylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS11bmRvXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaGFzLXBhZGRpbmctc21hbGwgaXMtb25lLXRoaXJkLWRlc2t0b3AgaGFzLXRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgdGFibGUtc2VhcmNoLWlucHV0IGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiaTE4bignU2VhcmNoJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IExlbmd0aE1lbnUgZnJvbSAnLi90b3BDb250cm9scy9MZW5ndGhNZW51LnZ1ZSc7XG5pbXBvcnQgQ29sdW1uVmlzaWJpbGl0eSBmcm9tICcuL3RvcENvbnRyb2xzL0NvbHVtblZpc2liaWxpdHkudnVlJztcbmltcG9ydCBBbGlnbm1lbnQgZnJvbSAnLi90b3BDb250cm9scy9BbGlnbm1lbnQudnVlJztcbmltcG9ydCBTdHlsZVNlbGVjdG9yIGZyb20gJy4vdG9wQ29udHJvbHMvU3R5bGVTZWxlY3Rvci52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1RvcENvbnRyb2xzJyxcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgICAgTGVuZ3RoTWVudSwgQ29sdW1uVmlzaWJpbGl0eSwgQWxpZ25tZW50LCBTdHlsZVNlbGVjdG9yLFxuICAgIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxlbmd0aE1lbnU6IGZhbHNlLFxuICAgICAgICAgICAgY29sdW1uVmlzaWJpbGl0eTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZG9BY3Rpb24oYnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KGJ1dHRvbi5ldmVudCk7XG5cbiAgICAgICAgICAgIGlmIChidXR0b24uYWN0aW9uID09PSAnZXhwb3J0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2V4cG9ydC1kYXRhJywgYnV0dG9uLnBhdGgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5hY3Rpb24gPT09ICdyb3V0ZXInKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiBidXR0b24ucm91dGUgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MZW5ndGhNZW51LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDc2OTBkNDdcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9MZW5ndGhNZW51LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvTGVuZ3RoTWVudS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDc2OTBkNDdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NzY5MGQ0N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRyb3Bkb3duPlxuICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5cbiAgICAgICAgICAgIHt7IGxlbmd0aCB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxhIHYtZm9yPVwiKHZhbHVlLCBpbmRleCkgaW4gdGVtcGxhdGUubGVuZ3RoTWVudVwiXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiB2YWx1ZSA9PT0gbGVuZ3RoIH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ3VwZGF0ZS1sZW5ndGgnLCB2YWx1ZSk7c2hvdz1mYWxzZVwiPlxuICAgICAgICAgICAge3sgdmFsdWUgfX1cbiAgICAgICAgPC9hPlxuICAgIDwvZHJvcGRvd24+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnTGVuZ3RoTWVudScsXG5cbiAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9MZW5ndGhNZW51LnZ1ZSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zMTNlYTQ3M1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Ryb3Bkb3duLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjA3Njc5YWVcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzEzZWE0NzNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ecm9wZG93bi52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzEzZWE0NzNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ecm9wZG93bi52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMzEzZWE0NzNcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kcm9wZG93bi1tZW51W2RhdGEtdi0zMTNlYTQ3M10ge1xcbiAgbWluLXdpZHRoOiB1bnNldDtcXG59XFxuLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWNvbnRlbnRbZGF0YS12LTMxM2VhNDczXSB7XFxuICAgIG1pbi13aWR0aDogdW5zZXQ7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1jb250ZW50IGEuZHJvcGRvd24taXRlbVtkYXRhLXYtMzEzZWE0NzNdIHtcXG4gICAgICBwYWRkaW5nOiAuMzc1cmVtIDFyZW07XFxufVxcbi5pY29uLmFuZ2xlW2RhdGEtdi0zMTNlYTQ3M10ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxufVxcbi5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl1bZGF0YS12LTMxM2VhNDczXSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvRHJvcGRvd24udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGlCQUFpQjtDQUFFO0FBQ25CO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUFFO0FBQ25CO01BQ0Usc0JBQXNCO0NBQUU7QUFFOUI7RUFDRSxpREFBaUM7RUFBakMseUNBQWlDO0VBQWpDLGlDQUFpQztFQUFqQywrREFBaUM7Q0FBRTtBQUNuQztJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7Q0FBRVwiLFwiZmlsZVwiOlwiRHJvcGRvd24udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kcm9wZG93bi1tZW51IHtcXG4gIG1pbi13aWR0aDogdW5zZXQ7IH1cXG4gIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgbWluLXdpZHRoOiB1bnNldDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxcbiAgICAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tY29udGVudCBhLmRyb3Bkb3duLWl0ZW0ge1xcbiAgICAgIHBhZGRpbmc6IC4zNzVyZW0gMXJlbTsgfVxcblxcbi5pY29uLmFuZ2xlIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlOyB9XFxuICAuaWNvbi5hbmdsZVthcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0zMTNlYTQ3M1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Ecm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDExNDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIlxuICAgICAgICB2LWNsaWNrLW91dHNpZGU9XCJoaWRlXCJcbiAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogc2hvdyB9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi10cmlnZ2VyXCJcbiAgICAgICAgICAgIEBjbGljaz1cInNob3c9IXNob3dcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPjwvc2xvdD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgYW5nbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmFyaWEtaGlkZGVuPVwiIXNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYW5nbGUtZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGFuaW1hdGVkXCJcbiAgICAgICAgICAgIHJvbGU9XCJtZW51XCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2ZhZGVJbic6IHNob3csICdmYWRlT3V0JzogIXNob3cgfVwiXG4gICAgICAgICAgICB2LWlmPVwic2hvd1wiXG4gICAgICAgICAgICA6c3R5bGU9XCJ3aWR0aFN0eWxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZFwiXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwiW3dpZHRoU3R5bGUsIGhlaWdodFN0eWxlXVwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHZDbGlja091dHNpZGUgZnJvbSAndi1jbGljay1vdXRzaWRlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdEcm9wZG93bicsXG5cbiAgICBkaXJlY3RpdmVzOiB7XG4gICAgICAgIGNsaWNrT3V0c2lkZTogdkNsaWNrT3V0c2lkZS5kaXJlY3RpdmUsXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiA2NCxcbiAgICAgICAgfSxcbiAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAyMDAsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHdpZHRoU3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdtaW4td2lkdGgnOiBgJHt0aGlzLndpZHRofXB4YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGhlaWdodFN0eWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAnbWF4LWhlaWdodCc6IGAke3RoaXMuaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoaWRlKCkge1xuICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cbiAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIG1pbi13aWR0aDogdW5zZXQ7XG5cbiAgICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgICAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAgICAgICAgIGEuZHJvcGRvd24taXRlbSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogLjM3NXJlbSAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmljb24uYW5nbGUge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcblxuICAgICAgICAmW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICB9XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0Ryb3Bkb3duLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImNsaWNrLW91dHNpZGVcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtY2xpY2stb3V0c2lkZVwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0uaGlkZSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImhpZGVcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd25cIixcbiAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IF92bS5zaG93IH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tdHJpZ2dlclwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5zaG93ID0gIV92bS5zaG93XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiZHJvcGRvd24tbWVudVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdChcImxhYmVsXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGFuZ2xlXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6ICFfdm0uc2hvdyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWFuZ2xlLWRvd25cIiB9KV1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnNob3dcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLW1lbnUgYW5pbWF0ZWRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgZmFkZUluOiBfdm0uc2hvdywgZmFkZU91dDogIV92bS5zaG93IH0sXG4gICAgICAgICAgICAgIHN0eWxlOiBfdm0ud2lkdGhTdHlsZSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJtZW51XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogW192bS53aWR0aFN0eWxlLCBfdm0uaGVpZ2h0U3R5bGVdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTMxM2VhNDczXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zMTNlYTQ3M1wiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0Ryb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkcm9wZG93blwiLFxuICAgIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5sZW5ndGgpICsgXCJcXG4gICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLmxlbmd0aE1lbnUsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IHZhbHVlID09PSBfdm0ubGVuZ3RoIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidXBkYXRlLWxlbmd0aFwiLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKHZhbHVlKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00NzY5MGQ0N1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDc2OTBkNDdcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvTGVuZ3RoTWVudS52dWVcbi8vIG1vZHVsZSBpZCA9IDExNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29sdW1uVmlzaWJpbGl0eS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRkMzQ4MWVhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ29sdW1uVmlzaWJpbGl0eS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0NvbHVtblZpc2liaWxpdHkudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRkMzQ4MWVhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGQzNDgxZWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkcm9wZG93bj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImxhYmVsXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXllXCI+PC9pPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxhIHYtZm9yPVwiKGNvbHVtbiwgaW5kZXgpIGluIHRlbXBsYXRlLmNvbHVtbnNcIlxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBjb2x1bW4ubWV0YS52aXNpYmxlIH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwiY29sdW1uLm1ldGEudmlzaWJsZSA9ICFjb2x1bW4ubWV0YS52aXNpYmxlOyRlbWl0KCd1cGRhdGUtdmlzaWJpbGl0eScpXCI+XG4gICAgICAgICAgICB7eyBjb2x1bW4ubGFiZWwgfX1cbiAgICAgICAgPC9hPlxuICAgIDwvZHJvcGRvd24+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ29sdW1uVmlzaWJpbGl0eScsXG5cbiAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkcm9wZG93blwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIixcbiAgICAgICAgICBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICBzbG90OiBcImxhYmVsXCJcbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leWVcIiB9KV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5jb2x1bW5zLCBmdW5jdGlvbihjb2x1bW4sIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImFcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogY29sdW1uLm1ldGEudmlzaWJsZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGNvbHVtbi5tZXRhLnZpc2libGUgPSAhY29sdW1uLm1ldGEudmlzaWJsZVxuICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInVwZGF0ZS12aXNpYmlsaXR5XCIpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKGNvbHVtbi5sYWJlbCkgKyBcIlxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNGQzNDgxZWFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRkMzQ4MWVhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0NvbHVtblZpc2liaWxpdHkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTUwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0FsaWdubWVudC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTJmNjU1NWYxXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQWxpZ25tZW50LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yZjY1NTVmMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTJmNjU1NWYxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkcm9wZG93bj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImxhYmVsXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtYWxpZ24tanVzdGlmeVwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YSB2LWZvcj1cIih2YWx1ZSwga2V5KSBpbiB0ZW1wbGF0ZS5hbGlnbnNcIlxuICAgICAgICAgICAgOmtleT1cImtleVwiXG4gICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogdGVtcGxhdGUuYWxpZ24gPT09IHZhbHVlIH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwidGVtcGxhdGUuYWxpZ24gPSB2YWx1ZTtzaG93PWZhbHNlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJpY29uc1trZXldXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2E+XG4gICAgPC9kcm9wZG93bj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24udnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdBbGlnbm1lbnQnLFxuXG4gICAgY29tcG9uZW50czogeyBEcm9wZG93biB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hvdzogZmFsc2UsXG4gICAgICAgICAgICBpY29uczoge1xuICAgICAgICAgICAgICAgIGNlbnRlcjogJ2ZhcyBmYS1hbGlnbi1jZW50ZXInLFxuICAgICAgICAgICAgICAgIGxlZnQ6ICdmYXMgZmEtYWxpZ24tbGVmdCcsXG4gICAgICAgICAgICAgICAgcmlnaHQ6ICdmYXMgZmEtYWxpZ24tcmlnaHQnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICB1cGRhdGVDb2x1bW5WaXNpYmlsaXR5KGNvbHVtbikge1xuICAgICAgICAgICAgY29sdW1uLm1ldGEudmlzaWJsZSA9ICFjb2x1bW4ubWV0YS52aXNpYmxlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlLWNvbHVtbi12aXNpYmlsaXR5Jyk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9BbGlnbm1lbnQudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRyb3Bkb3duXCIsXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwic3BhblwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiLFxuICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LFxuICAgICAgICAgIHNsb3Q6IFwibGFiZWxcIlxuICAgICAgICB9LFxuICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWFsaWduLWp1c3RpZnlcIiB9KV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5hbGlnbnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogX3ZtLnRlbXBsYXRlLmFsaWduID09PSB2YWx1ZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS50ZW1wbGF0ZS5hbGlnbiA9IHZhbHVlXG4gICAgICAgICAgICAgICAgX3ZtLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmljb25zW2tleV0gfSlcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTJmNjU1NWYxXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yZjY1NTVmMVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9BbGlnbm1lbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTUzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1N0eWxlU2VsZWN0b3IudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi04YWFiNjE4NFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1N0eWxlU2VsZWN0b3IudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi04YWFiNjE4NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LThhYWI2MTg0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvU3R5bGVTZWxlY3Rvci52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZHJvcGRvd24gY2xhc3M9XCJpcy1yaWdodFwiPlxuICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIlxuICAgICAgICAgICAgY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS10YWJsZVwiPjwvaT5cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8YSB2LWZvcj1cIihzdHlsZSwga2V5KSBpbiB0ZW1wbGF0ZS5zdHlsZXNcIlxuICAgICAgICAgICAgOmtleT1cImtleVwiXG4gICAgICAgICAgICBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogaGFzKHN0eWxlKSB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZShzdHlsZSlcIj5cbiAgICAgICAgICAgIHt7IGtleSB9fVxuICAgICAgICA8L2E+XG4gICAgPC9kcm9wZG93bj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24udnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdTdHlsZVNlbGVjdG9yJyxcblxuICAgIGNvbXBvbmVudHM6IHsgRHJvcGRvd24gfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc3R5bGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGUuc3R5bGUuc3BsaXQoJyAnKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYXMoc3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlcy5pbmNsdWRlcyhzdHlsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZShzdHlsZSkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5zdHlsZSA9IHRoaXMuaGFzKHN0eWxlKVxuICAgICAgICAgICAgICAgID8gdGhpcy5zdHlsZXMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBzdHlsZSkuam9pbignICcpXG4gICAgICAgICAgICAgICAgOiBgJHt0aGlzLnRlbXBsYXRlLnN0eWxlfSAke3N0eWxlfWA7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkcm9wZG93blwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiaXMtcmlnaHRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIixcbiAgICAgICAgICBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICBzbG90OiBcImxhYmVsXCJcbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS10YWJsZVwiIH0pXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLnN0eWxlcywgZnVuY3Rpb24oc3R5bGUsIGtleSkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBrZXksXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1pdGVtXCIsXG4gICAgICAgICAgICBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBfdm0uaGFzKHN0eWxlKSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS50b2dnbGUoc3R5bGUpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKGtleSkgKyBcIlxcbiAgICBcIildXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtOGFhYjYxODRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LThhYWI2MTg0XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL1N0eWxlU2VsZWN0b3IudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW11bHRpbGluZVwiIH0sIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy1oYWxmIGlzLWhpZGRlbi1tb2JpbGVcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImlcIiwgeyBjbGFzczogX3ZtLnRlbXBsYXRlLmljb24gfSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pMThuKF92bS50ZW1wbGF0ZS5uYW1lKSkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy1oYWxmIGhhcy10ZXh0LXJpZ2h0LXRhYmxldCBoYXMtdGV4dC1jZW50ZXJlZC1tb2JpbGVcIlxuICAgICAgICB9LFxuICAgICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLmJ1dHRvbnMuZ2xvYmFsLCBmdW5jdGlvbihidXR0b24pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGJ1dHRvbi5sYWJlbCxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFwiLFxuICAgICAgICAgICAgICBjbGFzczogYnV0dG9uLmNsYXNzLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBidXR0b24uYWN0aW9uID09PSBcImhyZWZcIiA/IGJ1dHRvbi5wYXRoIDogbnVsbCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5kb0FjdGlvbihidXR0b24pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmkxOG4oYnV0dG9uLmxhYmVsKSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgY2xhc3M6IGJ1dHRvbi5pY29uIH0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJjb2x1bW4gaGFzLXBhZGRpbmctc21hbGwgaXMtdHdvLXRoaXJkcy1kZXNrdG9wIGhhcy10ZXh0LWNlbnRlcmVkLW1vYmlsZVwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwibGVuZ3RoLW1lbnVcIixcbiAgICAgICAgICAgIF92bS5fZyhcbiAgICAgICAgICAgICAgeyBhdHRyczogeyB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlLCBsZW5ndGg6IF92bS5sZW5ndGggfSB9LFxuICAgICAgICAgICAgICBfdm0uJGxpc3RlbmVyc1xuICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiY29sdW1uLXZpc2liaWxpdHlcIixcbiAgICAgICAgICAgIF92bS5fZyh7IGF0dHJzOiB7IHRlbXBsYXRlOiBfdm0udGVtcGxhdGUgfSB9LCBfdm0uJGxpc3RlbmVycylcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJzdHlsZS1zZWxlY3RvclwiLCB7IGF0dHJzOiB7IHRlbXBsYXRlOiBfdm0udGVtcGxhdGUgfSB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYWxpZ25tZW50XCIsIHsgYXR0cnM6IHsgdGVtcGxhdGU6IF92bS50ZW1wbGF0ZSB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJyZWxvYWRcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbX3ZtLl9tKDApXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInJlc2V0XCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW192bS5fbSgxKV1cbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiY29sdW1uIGhhcy1wYWRkaW5nLXNtYWxsIGlzLW9uZS10aGlyZC1kZXNrdG9wIGhhcy10ZXh0LXJpZ2h0XCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgdGFibGUtc2VhcmNoLWlucHV0IGhhcy10ZXh0LWNlbnRlcmVkXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic2VhcmNoXCIsIHBsYWNlaG9sZGVyOiBfdm0uaTE4bihcIlNlYXJjaFwiKSB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnZhbHVlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiaW5wdXRcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fbSgyKVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgIClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zeW5jXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLXVuZG9cIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtbGVmdFwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zZWFyY2hcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTI1NWI2OGM2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yNTViNjhjNlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTcwNmNkNzI2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlSGVhZGVyLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGFibGVIZWFkZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MDZjZDcyNlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1RhYmxlSGVhZGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03MDZjZDcyNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTcwNmNkNzI2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTcwNmNkNzI2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlSGVhZGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiZDBiYmYwNWVcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzA2Y2Q3MjZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVIZWFkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTcwNmNkNzI2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlSGVhZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03MDZjZDcyNlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTU5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbnRoLnZ1ZS10YWJsZS1oZWFkZXIge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIC1tcy1mbGV4LWxpbmUtcGFjazogY2VudGVyO1xcbiAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLnRhYmxlLWhlYWRlci1jb250cm9scyAuc29ydGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuNTtcXG59XFxuLnRhYmxlLWhlYWRlci1jb250cm9scyAuc29ydGVyOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxvQkFBb0I7RUFDcEIsMkJBQXNCO01BQXRCLHNCQUFzQjtDQUFFO0FBRTFCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7Q0FBRTtBQUNmO0lBQ0UsV0FBVztDQUFFXCIsXCJmaWxlXCI6XCJUYWJsZUhlYWRlci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1widGgudnVlLXRhYmxlLWhlYWRlciB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgYWxpZ24tY29udGVudDogY2VudGVyOyB9XFxuXFxuLnRhYmxlLWhlYWRlci1jb250cm9scyAuc29ydGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG9wYWNpdHk6IDAuNTsgfVxcbiAgLnRhYmxlLWhlYWRlci1jb250cm9scyAuc29ydGVyOmhvdmVyIHtcXG4gICAgb3BhY2l0eTogMTsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03MDZjZDcyNlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTYwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPHRoZWFkPlxuICAgICAgICA8dHIgOmNsYXNzPVwidGVtcGxhdGUuc3R5bGVcIj5cbiAgICAgICAgICAgIDx0aCA6Y2xhc3M9XCJ0ZW1wbGF0ZS5hbGlnblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInRlbXBsYXRlLmNydE5vXCI+XG4gICAgICAgICAgICAgICAge3sgaTE4bih0ZW1wbGF0ZS5sYWJlbHMuY3J0Tm8pIH19XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIGNsYXNzPVwidnVlLXRhYmxlLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwidGVtcGxhdGUuYWxpZ25cIlxuICAgICAgICAgICAgICAgIHYtZm9yPVwiY29sdW1uIGluIHRlbXBsYXRlLmNvbHVtbnNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJjb2x1bW4ubGFiZWxcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJjb2x1bW4ubWV0YS52aXNpYmxlICYmICFjb2x1bW4ubWV0YS5oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge3sgaTE4bihjb2x1bW4ubGFiZWwpIH19XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFibGUtaGVhZGVyLWNvbnRyb2xzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNvcnRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlU29ydCgkZXZlbnQsIGNvbHVtbilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJjb2x1bW4ubWV0YS5zb3J0YWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cIiFjb2x1bW4ubWV0YS5zb3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNvcnQgZmEteHNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImNvbHVtbi5tZXRhLnNvcnQgPT09ICdBU0MnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLXNvcnQtdXAgZmEteHNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cImNvbHVtbi5tZXRhLnNvcnQgPT09ICdERVNDJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1zb3J0LWRvd24gZmEteHNcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkZWxldGUgaXMtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJjb2x1bW4ubWV0YS5zb3J0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJjbGVhckNvbHVtblNvcnQoY29sdW1uKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICAgIDx0aCA6Y2xhc3M9XCJ0ZW1wbGF0ZS5hbGlnblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInRlbXBsYXRlLmFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICB7eyBpMThuKHRlbXBsYXRlLmxhYmVscy5hY3Rpb25zKSB9fVxuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgPC90cj5cbiAgICA8L3RoZWFkPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0hlYWRlcicsXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdG9nZ2xlU29ydChldmVudCwgeyBtZXRhIH0pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgc29ydCB9ID0gbWV0YTtcblxuICAgICAgICAgICAgaWYgKCFldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJTb3J0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1ldGEuc29ydCA9IHNvcnQgPT09ICdBU0MnID8gJ0RFU0MnIDogJ0FTQyc7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLnNvcnQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc29ydC11cGRhdGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJDb2x1bW5Tb3J0KHsgbWV0YSB9KSB7XG4gICAgICAgICAgICBtZXRhLnNvcnQgPSBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMudGVtcGxhdGUuY29sdW1ucy5maW5kKGNvbHVtbiA9PiBjb2x1bW4ubWV0YS5zb3J0ICE9PSBudWxsKSkge1xuICAgICAgICAgICAgICAgIHRoaXMudGVtcGxhdGUuc29ydCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzb3J0LXVwZGF0ZScpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclNvcnQoKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLmNvbHVtbnMuZm9yRWFjaCgoeyBtZXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICBtZXRhLnNvcnQgPSBudWxsO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblxuICAgIHRoLnZ1ZS10YWJsZS1oZWFkZXIge1xuICAgICAgICB3aGl0ZS1zcGFjZTpub3dyYXA7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAudGFibGUtaGVhZGVyLWNvbnRyb2xzIHtcbiAgICAgICAgLnNvcnRlciB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBvcGFjaXR5OiAwLjU7XG5cbiAgICAgICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJ0aGVhZFwiLCBbXG4gICAgX2MoXG4gICAgICBcInRyXCIsXG4gICAgICB7IGNsYXNzOiBfdm0udGVtcGxhdGUuc3R5bGUgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLnRlbXBsYXRlLmNydE5vXG4gICAgICAgICAgPyBfYyhcInRoXCIsIHsgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaTE4bihfdm0udGVtcGxhdGUubGFiZWxzLmNydE5vKSkgK1xuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5jb2x1bW5zLCBmdW5jdGlvbihjb2x1bW4pIHtcbiAgICAgICAgICByZXR1cm4gY29sdW1uLm1ldGEudmlzaWJsZSAmJiAhY29sdW1uLm1ldGEuaGlkZGVuXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwidGhcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGNvbHVtbi5sYWJlbCxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZ1ZS10YWJsZS1oZWFkZXJcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0udGVtcGxhdGUuYWxpZ25cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmkxOG4oY29sdW1uLmxhYmVsKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtaGVhZGVyLWNvbnRyb2xzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbi5tZXRhLnNvcnRhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInNvcnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVTb3J0KCRldmVudCwgY29sdW1uKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogIWNvbHVtbi5tZXRhLnNvcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWNvbHVtbi5tZXRhLnNvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc29ydCBmYS14c1wiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29sdW1uLm1ldGEuc29ydCA9PT0gXCJBU0NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjb2x1bW4ubWV0YS5zb3J0ID09PSAnQVNDJ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmYXMgZmEtc29ydC11cCBmYS14c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY29sdW1uLm1ldGEuc29ydCA9PT0gXCJERVNDXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY29sdW1uLm1ldGEuc29ydCA9PT0gJ0RFU0MnXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zb3J0LWRvd24gZmEteHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4ubWV0YS5zb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVsZXRlIGlzLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsZWFyQ29sdW1uU29ydChjb2x1bW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS50ZW1wbGF0ZS5hY3Rpb25zXG4gICAgICAgICAgPyBfYyhcInRoXCIsIHsgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaTE4bihfdm0udGVtcGxhdGUubGFiZWxzLmFjdGlvbnMpKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzA2Y2Q3MjZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTcwNmNkNzI2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZGJmYTlmY1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlQm9keS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImE2MDU2ZDA0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTVkYmZhOWZjXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVCb2R5LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZGJmYTlmY1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlQm9keS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWRiZmE5ZmNcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5kaXYudGFibGUtY3J0LW5vW2RhdGEtdi01ZGJmYTlmY10ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5kaXYudGFibGUtY3J0LW5vIC5jcnQtbm8tbGFiZWxbZGF0YS12LTVkYmZhOWZjXSB7XFxuICAgIG1hcmdpbjogYXV0bztcXG59XFxuZGl2LnRhYmxlLWNydC1ubyAuaGlkZGVuLWNvbnRyb2xzW2RhdGEtdi01ZGJmYTlmY10ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAwLjFlbTtcXG59XFxudGQudGFibGUtYWN0aW9uc1tkYXRhLXYtNWRiZmE5ZmNdIHtcXG4gIHBhZGRpbmc6IC4zNWVtIC41ZW07XFxufVxcbnRkLnRhYmxlLWFjdGlvbnMgc3Bhbi50YWJsZS1hY3Rpb24tYnV0dG9uc1tkYXRhLXYtNWRiZmE5ZmNdIHtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbn1cXG50ZC50YWJsZS1hY3Rpb25zIC5idXR0b24uaXMtc21hbGwuaXMtdGFibGUtYnV0dG9uW2RhdGEtdi01ZGJmYTlmY10ge1xcbiAgICBoZWlnaHQ6IDEuNmVtO1xcbiAgICB3aWR0aDogMS42ZW07XFxuICAgIGZvbnQtc2l6ZTogLjllbTtcXG59XFxubGkuY2hpbGQtcm93W2RhdGEtdi01ZGJmYTlmY106bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjtcXG59XFxubGkuY2hpbGQtcm93W2RhdGEtdi01ZGJmYTlmY10ge1xcbiAgcGFkZGluZzogMC41ZW0gMDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLHFCQUFjO0VBQWQscUJBQWM7RUFBZCxjQUFjO0NBQUU7QUFDaEI7SUFDRSxhQUFhO0NBQUU7QUFDakI7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtDQUFFO0FBRXhCO0VBQ0Usb0JBQW9CO0NBQUU7QUFDdEI7SUFDRSw0QkFBcUI7SUFBckIsNEJBQXFCO0lBQXJCLHFCQUFxQjtDQUFFO0FBQ3pCO0lBQ0UsY0FBYztJQUNkLGFBQWE7SUFDYixnQkFBZ0I7Q0FBRTtBQUV0QjtFQUNFLGlDQUFpQztDQUFFO0FBRXJDO0VBQ0UsaUJBQWlCO0NBQUVcIixcImZpbGVcIjpcIlRhYmxlQm9keS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZGl2LnRhYmxlLWNydC1ubyB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgZGlzcGxheTogZmxleDsgfVxcbiAgZGl2LnRhYmxlLWNydC1ubyAuY3J0LW5vLWxhYmVsIHtcXG4gICAgbWFyZ2luOiBhdXRvOyB9XFxuICBkaXYudGFibGUtY3J0LW5vIC5oaWRkZW4tY29udHJvbHMge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tdG9wOiAwLjFlbTsgfVxcblxcbnRkLnRhYmxlLWFjdGlvbnMge1xcbiAgcGFkZGluZzogLjM1ZW0gLjVlbTsgfVxcbiAgdGQudGFibGUtYWN0aW9ucyBzcGFuLnRhYmxlLWFjdGlvbi1idXR0b25zIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7IH1cXG4gIHRkLnRhYmxlLWFjdGlvbnMgLmJ1dHRvbi5pcy1zbWFsbC5pcy10YWJsZS1idXR0b24ge1xcbiAgICBoZWlnaHQ6IDEuNmVtO1xcbiAgICB3aWR0aDogMS42ZW07XFxuICAgIGZvbnQtc2l6ZTogLjllbTsgfVxcblxcbmxpLmNoaWxkLXJvdzpub3QoOmxhc3QtY2hpbGQpIHtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmOyB9XFxuXFxubGkuY2hpbGQtcm93IHtcXG4gIHBhZGRpbmc6IDAuNWVtIDA7IH1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNWRiZmE5ZmNcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDx0Ym9keT5cbiAgICAgICAgPHRyIHYtZm9yPVwiKHJvdywgaW5kZXgpIGluIGJvZHkuZGF0YVwiXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgIDx0ZCA6Y2xhc3M9XCJ0ZW1wbGF0ZS5hbGlnblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInRlbXBsYXRlLmNydE5vICYmICFpc0NoaWxkKHJvdylcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFibGUtY3J0LW5vXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3J0LW5vLWxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICB7eyBnZXRJbmRleChyb3cpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJoaWRkZW4tY29udHJvbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImhpZGRlbkNvdW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZUV4cGFuZChyb3csIGluZGV4KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXNob3c9XCJpc0V4cGFuZGVkKHJvdylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1taW51cy1zcXVhcmVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtc2hvdz1cIiFpc0V4cGFuZGVkKHJvdylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1wbHVzLXNxdWFyZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCA6Y2xhc3M9XCJ0ZW1wbGF0ZS5hbGlnblwiXG4gICAgICAgICAgICAgICAgdi1mb3I9XCIoY29sdW1uLCBpbmRleCkgaW4gdGVtcGxhdGUuY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiY29sdW1uLm1ldGEudmlzaWJsZSAmJiAhY29sdW1uLm1ldGEuaGlkZGVuICYmICFpc0NoaWxkKHJvdylcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiY29sdW1uLm1ldGEuYm9vbGVhblwiXG4gICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cInJvd1tjb2x1bW4ubmFtZV0gPyB0ZW1wbGF0ZS5ib29sZWFuWzFdIDogdGVtcGxhdGUuYm9vbGVhblswXVwiPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XCJjb2x1bW4ubWV0YS5yZW5kZXJcIlxuICAgICAgICAgICAgICAgICAgICB2LWh0bWw9XCJjdXN0b21SZW5kZXIocm93LCBjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cImNvbHVtbi5tZXRhLnRyYW5zbGF0aW9uXCI+e3sgaTE4bihyb3dbY29sdW1uLm5hbWVdKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+e3sgcm93W2NvbHVtbi5uYW1lXSB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJ0YWJsZS1hY3Rpb25zXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ0ZW1wbGF0ZS5hbGlnblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInRlbXBsYXRlLmFjdGlvbnMgJiYgIWlzQ2hpbGQocm93KVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFibGUtYWN0aW9uLWJ1dHRvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgdi1mb3I9XCIoYnV0dG9uLCBpbmRleCkgaW4gdGVtcGxhdGUuYnV0dG9ucy5yb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGlzLXNtYWxsIGlzLXRhYmxlLWJ1dHRvbiBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiYnV0dG9uLmNsYXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiYnV0dG9uLmFjdGlvbiA9PT0gJ2hyZWYnID8gZ2V0UGF0aChidXR0b24sIHJvdy5kdFJvd0lkKSA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiYnV0dG9uLmNvbmZpcm1hdGlvbiA/IHNob3dNb2RhbChidXR0b24sIHJvdykgOiBkb0FjdGlvbihidXR0b24sIHJvdylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImJ1dHRvbi5pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCA6Y29sc3Bhbj1cImhpZGRlbkNvbFNwYW5cIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInRlbXBsYXRlLmFsaWduXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiaXNDaGlsZChyb3cpXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjaGlsZC1yb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJjb2x1bW4gaW4gcm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJjb2x1bW4ubGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGNvbHVtbi5sYWJlbCB9fTwvYj46IHt7IGNvbHVtbi52YWx1ZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8bW9kYWwgdi1pZj1cIm1vZGFsXCJcbiAgICAgICAgICAgIDpzaG93PVwibW9kYWxcIlxuICAgICAgICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgICAgICAgIDptZXNzYWdlPVwiYnV0dG9uLm1lc3NhZ2VcIlxuICAgICAgICAgICAgQGNhbmNlbC1hY3Rpb249XCJjbG9zZU1vZGFsKClcIlxuICAgICAgICAgICAgQGNvbW1pdC1hY3Rpb249XCJkb0FjdGlvbihidXR0b24sIHJvdylcIj5cbiAgICAgICAgPC9tb2RhbD5cbiAgICA8L3Rib2R5PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vVGFibGVCb2R5LnZ1ZSc7XG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbC52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1RhYmxlQm9keScsXG5cbiAgICBjb21wb25lbnRzOiB7IFRhYmxlQm9keSwgTW9kYWwgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbVJlbmRlcjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBleHBhbmRlZDoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaGlkZGVuQ29sdW1ucygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlLmNvbHVtbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubWV0YS5oaWRkZW4gJiYgY29sdW1uLm1ldGEudmlzaWJsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGRlbkNvdW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlkZGVuQ29sdW1ucy5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGRlbkNvbFNwYW4oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLmxlbmd0aCAtIHRoaXMuaGlkZGVuQ29sdW1ucy5sZW5ndGhcbiAgICAgICAgICAgICAgICArICh0aGlzLnRlbXBsYXRlLmFjdGlvbnMgPyAyIDogMSk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2RhbDogZmFsc2UsXG4gICAgICAgICAgICByb3c6IG51bGwsXG4gICAgICAgICAgICBidXR0b246IG51bGwsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIGhpZGRlbkNvdW50OiB7XG4gICAgICAgICAgICBoYW5kbGVyKG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGlmICghbmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGRzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRQYXRoKGJ1dHRvbiwgZHRSb3dJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbi5wYXRoLnJlcGxhY2UoJ2R0Um93SWQnLCBkdFJvd0lkKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd01vZGFsKGJ1dHRvbiwgcm93KSB7XG4gICAgICAgICAgICB0aGlzLnJvdyA9IHJvdztcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uID0gYnV0dG9uO1xuICAgICAgICAgICAgdGhpcy5tb2RhbCA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJvdyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbiA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGRvQWN0aW9uKGJ1dHRvbiwgcm93KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5ldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoYnV0dG9uLmV2ZW50LCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmFjdGlvbiA9PT0gJ2FqYXgnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWpheCcsIGJ1dHRvbi5tZXRob2QsIHRoaXMuZ2V0UGF0aChidXR0b24sIHJvdy5kdFJvd0lkKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmFjdGlvbiA9PT0gJ3JvdXRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IGJ1dHRvbi5yb3V0ZSwgcGFyYW1zOiB0aGlzLmdldFJvdXRlUGFyYW1zKGJ1dHRvbiwgcm93KSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Um91dGVQYXJhbXMoYnV0dG9uLCByb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBpZDogcm93LmR0Um93SWQsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoYnV0dG9uLnBhcmFtcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHBhcmFtcywgYnV0dG9uLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEluZGV4KHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keS5kYXRhLmZpbHRlcihyID0+ICF0aGlzLmlzQ2hpbGQocikpXG4gICAgICAgICAgICAgICAgLmZpbmRJbmRleChyID0+IHIuZHRSb3dJZCA9PT0gcm93LmR0Um93SWQpICsgdGhpcy5zdGFydCArIDE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzRXhwYW5kZWQocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHBhbmRlZC5pbmNsdWRlcyhyb3cuZHRSb3dJZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzQ2hpbGQocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyb3cpO1xuICAgICAgICB9LFxuICAgICAgICB0b2dnbGVFeHBhbmQocm93LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQocm93KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQucHVzaChyb3cuZHRSb3dJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZFJvdyhyb3csIGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuZXhwYW5kZWQuZmluZEluZGV4KGlkID0+IGlkID09PSByb3cuZHRSb3dJZCk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgdGhpcy5ib2R5LmRhdGEuc3BsaWNlKGluZGV4ICsgMSwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZENoaWxkUm93KHJvdywgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9IHRoaXMuaGlkZGVuQ29sdW1ucy5yZWR1Y2UoKGNvbGxlY3RvciwgY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sbGVjdG9yLnB1c2goeyBsYWJlbDogY29sdW1uLmxhYmVsLCB2YWx1ZTogcm93W2NvbHVtbi5uYW1lXSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sbGVjdG9yO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICB0aGlzLmJvZHkuZGF0YS5zcGxpY2UoaW5kZXggKyAxLCAwLCBuZXdSb3cpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVDaGlsZHMoKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleGVzID0gW107XG5cbiAgICAgICAgICAgIHRoaXMuYm9keS5kYXRhLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NoaWxkKHJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW5kZXhlcy5zb3J0KChhLCBiKSA9PiBhIDwgYikuZm9yRWFjaChpbmRleCA9PiB0aGlzLmJvZHkuZGF0YS5zcGxpY2UoaW5kZXgsIDEpKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZC5zcGxpY2UoMCk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cbiAgICBkaXYudGFibGUtY3J0LW5vIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5jcnQtbm8tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhpZGRlbi1jb250cm9scyB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMWVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGQudGFibGUtYWN0aW9ucyB7XG4gICAgICAgIHBhZGRpbmc6IC4zNWVtIC41ZW07XG5cbiAgICAgICAgc3Bhbi50YWJsZS1hY3Rpb24tYnV0dG9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24uaXMtc21hbGwuaXMtdGFibGUtYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMS42ZW07XG4gICAgICAgICAgICB3aWR0aDogMS42ZW07XG4gICAgICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaS5jaGlsZC1yb3c6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xuICAgIH1cblxuICAgIGxpLmNoaWxkLXJvdyB7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NDZjNzk5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDQ2Yzc5OWZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDQ2Yzc5OWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NDZjNzk5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NDZjNzk5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImZmNWUyMTNlXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ0NmM3OTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NDZjNzk5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNDQ2Yzc5OWZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1vZGFsLmlzLWFjdGl2ZSB7XFxuICAgIHotaW5kZXg6IDExMDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4REE7SUFDQSxjQUFBO0NBQ0FcIixcImZpbGVcIjpcIk1vZGFsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cXFwiYW5pbWF0ZWQgZmFkZUluXFxcIlxcbiAgICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVxcXCJhbmltYXRlZCBmYWRlT3V0XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIlxcbiAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtYWN0aXZlJzogc2hvdyB9XFxcIlxcbiAgICAgICAgICAgIHYtaWY9XFxcInNob3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLW1vZGFsIG1vZGFsLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJzdWJ0aXRsZSBpcy01XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaTE4bihtZXNzYWdlIHx8IFxcXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBwZXJmb3JtIHRoaXMgYWN0aW9uP1xcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cXG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgICAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1sZWZ0XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiY29udHJvbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1zdWNjZXNzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ2NhbmNlbC1hY3Rpb24nKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaTE4bihcXFwiQ2FuY2VsXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ2NvbW1pdC1hY3Rpb24nKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGkxOG4oXFxcIlllc1xcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvdHJhbnNpdGlvbj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBwcm9wczoge1xcbiAgICAgICAgc2hvdzoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgbWVzc2FnZToge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGkxOG46IHtcXG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIC5tb2RhbC5pcy1hY3RpdmUge1xcbiAgICAgICAgei1pbmRleDogMTEwMDtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTQ0NmM3OTlmXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluXCJcbiAgICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZU91dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogc2hvdyB9XCJcbiAgICAgICAgICAgIHYtaWY9XCJzaG93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLW1vZGFsIG1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJzdWJ0aXRsZSBpcy01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaTE4bihtZXNzYWdlIHx8IFwiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gcGVyZm9ybSB0aGlzIGFjdGlvbj9cIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgnY2FuY2VsLWFjdGlvbicpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpMThuKFwiQ2FuY2VsXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjb21taXQtYWN0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpMThuKFwiWWVzXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIC5tb2RhbC5pcy1hY3RpdmUge1xuICAgICAgICB6LWluZGV4OiAxMTAwO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInRyYW5zaXRpb25cIixcbiAgICB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIGZhZGVJblwiLFxuICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIGZhZGVPdXRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLnNob3dcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsXCIsIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IF92bS5zaG93IH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1iYWNrZ3JvdW5kXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtbW9kYWwgbW9kYWwtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJveFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdChcImNvbnRlbnRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJzdWJ0aXRsZSBpcy01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaTE4bihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lc3NhZ2UgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWxlZnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcImNvbnRyb2xzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjYW5jZWwtYWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pMThuKFwiQ2FuY2VsXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbiBpcy1kYW5nZXIgaGFzLW1hcmdpbi1sZWZ0LXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY29tbWl0LWFjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmkxOG4oXCJZZXNcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNDQ2Yzc5OWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ0NmM3OTlmXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0Ym9keVwiLFxuICAgIFtcbiAgICAgIF92bS5fbChfdm0uYm9keS5kYXRhLCBmdW5jdGlvbihyb3csIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgeyBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLnRlbXBsYXRlLmNydE5vICYmICFfdm0uaXNDaGlsZChyb3cpXG4gICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IGNsYXNzOiBfdm0udGVtcGxhdGUuYWxpZ24gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1jcnQtbm9cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNydC1uby1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldEluZGV4KHJvdykpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaGlkZGVuQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhpZGRlbi1jb250cm9sc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVFeHBhbmQocm93LCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5pc0V4cGFuZGVkKHJvdyksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImlzRXhwYW5kZWQocm93KVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLW1pbnVzLXNxdWFyZVwiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICFfdm0uaXNFeHBhbmRlZChyb3cpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhaXNFeHBhbmRlZChyb3cpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtcGx1cy1zcXVhcmVcIiB9KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5jb2x1bW5zLCBmdW5jdGlvbihjb2x1bW4sIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW4ubWV0YS52aXNpYmxlICYmXG4gICAgICAgICAgICAgICAgIWNvbHVtbi5tZXRhLmhpZGRlbiAmJlxuICAgICAgICAgICAgICAgICFfdm0uaXNDaGlsZChyb3cpXG4gICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsga2V5OiBpbmRleCwgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5tZXRhLmJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByb3dbY29sdW1uLm5hbWVdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLnRlbXBsYXRlLmJvb2xlYW5bMV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0udGVtcGxhdGUuYm9vbGVhblswXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGNvbHVtbi5tZXRhLnJlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0uY3VzdG9tUmVuZGVyKHJvdywgY29sdW1uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvbHVtbi5tZXRhLnRyYW5zbGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmkxOG4ocm93W2NvbHVtbi5uYW1lXSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHJvd1tjb2x1bW4ubmFtZV0pKV0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS50ZW1wbGF0ZS5hY3Rpb25zICYmICFfdm0uaXNDaGlsZChyb3cpXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWFjdGlvbnNcIiwgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWFjdGlvbi1idXR0b25zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLmJ1dHRvbnMucm93LCBmdW5jdGlvbihidXR0b24sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGlzLXNtYWxsIGlzLXRhYmxlLWJ1dHRvbiBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogYnV0dG9uLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWN0aW9uID09PSBcImhyZWZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLmdldFBhdGgoYnV0dG9uLCByb3cuZHRSb3dJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jb25maXJtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5zaG93TW9kYWwoYnV0dG9uLCByb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uZG9BY3Rpb24oYnV0dG9uLCByb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IGNsYXNzOiBidXR0b24uaWNvbiB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5pc0NoaWxkKHJvdylcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgY29sc3BhbjogX3ZtLmhpZGRlbkNvbFNwYW4gfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChyb3csIGZ1bmN0aW9uKGNvbHVtbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImxpXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBjb2x1bW4ubGFiZWwsIHN0YXRpY0NsYXNzOiBcImNoaWxkLXJvd1wiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImJcIiwgW192bS5fdihfdm0uX3MoY29sdW1uLmxhYmVsKSldKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjogXCIgKyBfdm0uX3MoY29sdW1uLnZhbHVlKSArIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ubW9kYWxcbiAgICAgICAgPyBfYyhcIm1vZGFsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNob3c6IF92bS5tb2RhbCxcbiAgICAgICAgICAgICAgaTE4bjogX3ZtLmkxOG4sXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IF92bS5idXR0b24ubWVzc2FnZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwiY2FuY2VsLWFjdGlvblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uY2xvc2VNb2RhbCgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY29tbWl0LWFjdGlvblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZG9BY3Rpb24oX3ZtLmJ1dHRvbiwgX3ZtLnJvdylcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01ZGJmYTlmY1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWRiZmE5ZmNcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iMmQxOWYwYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUZvb3Rlci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1RhYmxlRm9vdGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjJkMTlmMGFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9UYWJsZUZvb3Rlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYjJkMTlmMGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iMmQxOWYwYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iMmQxOWYwYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUZvb3Rlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQxNGEzYTc4XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWIyZDE5ZjBhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlRm9vdGVyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1iMmQxOWYwYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUZvb3Rlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYjJkMTlmMGFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcIlRhYmxlRm9vdGVyLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWIyZDE5ZjBhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPHRmb290PlxuICAgICAgICA8dHI+XG4gICAgICAgICAgICA8dGQ+PC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwidGVtcGxhdGUuY29sdW1uc1swXS5tZXRhLnZpc2libGUgJiYgIXRlbXBsYXRlLmNvbHVtbnNbMF0ubWV0YS5oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICB7eyBpMThuKFwiVG90YWxcIikgfX1cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3M9XCJoYXMtdGV4dC1jZW50ZXJlZCBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiXG4gICAgICAgICAgICAgICAgdi1mb3I9XCJpIGluIHRlbXBsYXRlLmNvbHVtbnMubGVuZ3RoIC0gMVwiXG4gICAgICAgICAgICAgICAgOmtleT1cImlcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJ0ZW1wbGF0ZS5jb2x1bW5zW2ldLm1ldGEudmlzaWJsZSAmJiAhdGVtcGxhdGUuY29sdW1uc1tpXS5tZXRhLmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJ0ZW1wbGF0ZS5jb2x1bW5zW2ldLm1ldGEudG90YWxcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgbnVtYmVyRm9ybWF0KGJvZHkudG90YWxbdGVtcGxhdGUuY29sdW1uc1tpXS5uYW1lXSkgfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICAgICAgPHRkIHYtaWY9XCJ0ZW1wbGF0ZS5hY3Rpb25zXCI+PC90ZD5cbiAgICAgICAgPC90cj5cbiAgICA8L3Rmb290PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1RhYmxlRm9vdGVyJyxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgbnVtYmVyRm9ybWF0KHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCB4ID0gdmFsdWUudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgbGV0IHgxID0geFswXTtcbiAgICAgICAgICAgIGNvbnN0IHgyID0geC5sZW5ndGggPiAxID8gYC4ke3hbMV19YCA6ICcnO1xuICAgICAgICAgICAgY29uc3Qgcmd4ID0gLyhcXGQrKShcXGR7M30pLztcblxuICAgICAgICAgICAgd2hpbGUgKHJneC50ZXN0KHgxKSkge1xuICAgICAgICAgICAgICAgIHgxID0geDEucmVwbGFjZShyZ3gsICckMSwkMicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4geDEgKyB4MjtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInRmb290XCIsIFtcbiAgICBfYyhcbiAgICAgIFwidHJcIixcbiAgICAgIFtcbiAgICAgICAgX2MoXCJ0ZFwiKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnRlbXBsYXRlLmNvbHVtbnNbMF0ubWV0YS52aXNpYmxlICYmXG4gICAgICAgICFfdm0udGVtcGxhdGUuY29sdW1uc1swXS5tZXRhLmhpZGRlblxuICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgIFwidGRcIixcbiAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoYXMtdGV4dC1jZW50ZXJlZCBoYXMtdGV4dC13ZWlnaHQtYm9sZFwiIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICsgX3ZtLl9zKF92bS5pMThuKFwiVG90YWxcIikpICsgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5jb2x1bW5zLmxlbmd0aCAtIDEsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICByZXR1cm4gX3ZtLnRlbXBsYXRlLmNvbHVtbnNbaV0ubWV0YS52aXNpYmxlICYmXG4gICAgICAgICAgICAhX3ZtLnRlbXBsYXRlLmNvbHVtbnNbaV0ubWV0YS5oaWRkZW5cbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogaSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhhcy10ZXh0LWNlbnRlcmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS50ZW1wbGF0ZS5jb2x1bW5zW2ldLm1ldGEudG90YWxcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm51bWJlckZvcm1hdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmJvZHkudG90YWxbX3ZtLnRlbXBsYXRlLmNvbHVtbnNbaV0ubmFtZV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICB9KSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX3ZtLnRlbXBsYXRlLmFjdGlvbnMgPyBfYyhcInRkXCIpIDogX3ZtLl9lKClcbiAgICAgIF0sXG4gICAgICAyXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1iMmQxOWYwYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYjJkMTlmMGFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTc2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01OWYyMTAwMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZWNvcmRzSW5mby52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1JlY29yZHNJbmZvLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTlmMjEwMDJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9SZWNvcmRzSW5mby52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNTlmMjEwMDJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01OWYyMTAwMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01OWYyMTAwMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZWNvcmRzSW5mby52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjNlNTViN2RhXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU5ZjIxMDAyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1JlY29yZHNJbmZvLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01OWYyMTAwMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9SZWNvcmRzSW5mby52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNTlmMjEwMDJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRhYmxlLWVudHJpZXMtaW5mbyB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlDQTtJQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlJlY29yZHNJbmZvLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWJsZS1lbnRyaWVzLWluZm9cXFwiPlxcbiAgICAgICAge3sgYCR7aTE4bignRnJvbScpfSAke3N0YXJ0ICsgMX0gJHtpMThuKCd0bycpfSAkeyhzdGFydCArIGxlbmd0aCkgPD0gYm9keS5maWx0ZXJlZCA/IHN0YXJ0ICsgbGVuZ3RoIDogYm9keS5maWx0ZXJlZH0gXFxcXFxcbiAgICAgICAgJHtpMThuKCdvZicpfSAke2JvZHkuZmlsdGVyZWR9ICR7aTE4bignZW50cmllcycpfWAgfX1cXG4gICAgICAgIDxzcGFuIHYtaWY9XFxcImJvZHkuZmlsdGVyZWQgIT09IGJvZHkuY291bnRcXFwiPlxcbiAgICAgICAgICAgIHt7IGAoJHtpMThuKCdmaWx0ZXJlZCcpfSAke2kxOG4oJ2Zyb20nKX0gJHtib2R5LmNvdW50fSBcXFxcXFxuICAgICAgICAgICAgJHtpMThuKCd0b3RhbCcpfSAke2kxOG4oJ3JlY29yZHMnKX0pYCB9fVxcbiAgICAgICAgPC9zcGFuPlxcbiAgICA8L3NwYW4+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ1JlY29yZHNJbmZvJyxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHN0YXJ0OiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGxlbmd0aDoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBib2R5OiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGkxOG46IHtcXG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIC50YWJsZS1lbnRyaWVzLWluZm8ge1xcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNTlmMjEwMDJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8c3BhbiBjbGFzcz1cInRhYmxlLWVudHJpZXMtaW5mb1wiPlxuICAgICAgICB7eyBgJHtpMThuKCdGcm9tJyl9ICR7c3RhcnQgKyAxfSAke2kxOG4oJ3RvJyl9ICR7KHN0YXJ0ICsgbGVuZ3RoKSA8PSBib2R5LmZpbHRlcmVkID8gc3RhcnQgKyBsZW5ndGggOiBib2R5LmZpbHRlcmVkfSBcXFxuICAgICAgICAke2kxOG4oJ29mJyl9ICR7Ym9keS5maWx0ZXJlZH0gJHtpMThuKCdlbnRyaWVzJyl9YCB9fVxuICAgICAgICA8c3BhbiB2LWlmPVwiYm9keS5maWx0ZXJlZCAhPT0gYm9keS5jb3VudFwiPlxuICAgICAgICAgICAge3sgYCgke2kxOG4oJ2ZpbHRlcmVkJyl9ICR7aTE4bignZnJvbScpfSAke2JvZHkuY291bnR9IFxcXG4gICAgICAgICAgICAke2kxOG4oJ3RvdGFsJyl9ICR7aTE4bigncmVjb3JkcycpfSlgIH19XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnUmVjb3Jkc0luZm8nLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsZW5ndGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIC50YWJsZS1lbnRyaWVzLWluZm8ge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWVudHJpZXMtaW5mb1wiIH0sIFtcbiAgICBfdm0uX3YoXG4gICAgICBcIlxcbiAgICBcIiArXG4gICAgICAgIF92bS5fcyhcbiAgICAgICAgICBfdm0uaTE4bihcIkZyb21cIikgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgKF92bS5zdGFydCArIDEpICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIF92bS5pMThuKFwidG9cIikgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgKF92bS5zdGFydCArIF92bS5sZW5ndGggPD0gX3ZtLmJvZHkuZmlsdGVyZWRcbiAgICAgICAgICAgICAgPyBfdm0uc3RhcnQgKyBfdm0ubGVuZ3RoXG4gICAgICAgICAgICAgIDogX3ZtLmJvZHkuZmlsdGVyZWQpICtcbiAgICAgICAgICAgIFwiICAgICBcIiArXG4gICAgICAgICAgICBfdm0uaTE4bihcIm9mXCIpICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIF92bS5ib2R5LmZpbHRlcmVkICtcbiAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgIF92bS5pMThuKFwiZW50cmllc1wiKVxuICAgICAgICApICtcbiAgICAgICAgXCJcXG4gICAgXCJcbiAgICApLFxuICAgIF92bS5ib2R5LmZpbHRlcmVkICE9PSBfdm0uYm9keS5jb3VudFxuICAgICAgPyBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgIFwiXFxuICAgICAgICBcIiArXG4gICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICBcIihcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uaTE4bihcImZpbHRlcmVkXCIpICtcbiAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5pMThuKFwiZnJvbVwiKSArXG4gICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uYm9keS5jb3VudCArXG4gICAgICAgICAgICAgICAgICBcIiAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5pMThuKFwidG90YWxcIikgK1xuICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLmkxOG4oXCJyZWNvcmRzXCIpICtcbiAgICAgICAgICAgICAgICAgIFwiKVwiXG4gICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICBcIlxcbiAgICBcIlxuICAgICAgICAgIClcbiAgICAgICAgXSlcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNTlmMjEwMDJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTU5ZjIxMDAyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2Y1ZjRhZDBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGFnaW5hdGlvbi52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1BhZ2luYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03ZjVmNGFkMFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1BhZ2luYXRpb24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtN2Y1ZjRhZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03ZjVmNGFkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdmNWY0YWQwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BhZ2luYXRpb24udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJiMWU3MmZhMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZjVmNGFkMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZjVmNGFkMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03ZjVmNGFkMFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTgzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbm5hdi50YWJsZS1uYXZpZ2F0aW9uIHtcXG4gICAgbWF4LXdpZHRoOiA0MjVweDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBK0hBO0lBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiUGFnaW5hdGlvbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8bmF2IGNsYXNzPVxcXCJ0YWJsZS1wYWdpbmF0aW9uIHBhZ2luYXRpb24gaXMtc21hbGxcXFwiXFxuICAgICAgICByb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIlxcbiAgICAgICAgYXJpYS1sYWJlbD1cXFwicGFnaW5hdGlvblxcXCI+XFxuICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1wcmV2aW91c1xcXCJcXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcInBhZ2UgPT09IDFcXFwiXFxuICAgICAgICAgICAgQGNsaWNrPVxcXCJqdW1wVG8ocGFnZSAtIDEpXFxcIj5cXG4gICAgICAgICAgICB7eyBpMThuKCdQcmV2aW91cycpIH19XFxuICAgICAgICA8L2E+XFxuICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1uZXh0XFxcIlxcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwicGFnZSA9PT0gcGFnZXNcXFwiXFxuICAgICAgICAgICAgQGNsaWNrPVxcXCJqdW1wVG8ocGFnZSArIDEpXFxcIj5cXG4gICAgICAgICAgICB7eyBpMThuKCdOZXh0JykgfX1cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDx1bCBjbGFzcz1cXFwicGFnaW5hdGlvbi1saXN0XFxcIj5cXG4gICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWN1cnJlbnQnOiBwYWdlID09PSAxIH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImp1bXBUbygxKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSB2LWlmPVxcXCJwYWdlcyA+IDUgJiYgIWF0U3RhcnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwicGFnaW5hdGlvbi1lbGxpcHNpc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAmaGVsbGlwO1xcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgdi1mb3I9XFxcImkgaW4gbWlkZGxlUGFnZXNcXFwiXFxuICAgICAgICAgICAgICAgIDprZXk9XFxcImlcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1jdXJyZW50JzogcGFnZSA9PT0gaSB9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJqdW1wVG8oaSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3sgaSB9fVxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICA8bGkgdi1pZj1cXFwicGFnZXMgPiA1ICYmICFhdEVuZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWVsbGlwc2lzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICZoZWxsaXA7XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSB2LWlmPVxcXCJwYWdlcyA+IDFcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1jdXJyZW50JzogcGFnZSA9PT0gcGFnZXMgfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwianVtcFRvKHBhZ2VzKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7eyBwYWdlcyB9fVxcbiAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPC9saT5cXG4gICAgICAgIDwvdWw+XFxuICAgIDwvbmF2PlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdQYWdpbmF0aW9uJyxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHJlY29yZHM6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgc3RhcnQ6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgbGVuZ3RoOiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGkxOG46IHtcXG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICBwYWdlKCkge1xcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5zdGFydCAvIHRoaXMubGVuZ3RoKSArIDE7XFxuICAgICAgICB9LFxcbiAgICAgICAgcGFnZXMoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnJlY29yZHMgLyB0aGlzLmxlbmd0aCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgYXRTdGFydCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlIDwgNDtcXG4gICAgICAgIH0sXFxuICAgICAgICBhdEVuZCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlcyAtIHRoaXMucGFnZSA8IDM7XFxuICAgICAgICB9LFxcbiAgICAgICAgbWlkZGxlUGFnZXMoKSB7XFxuICAgICAgICAgICAgY29uc3QgcGFnZXMgPSBbXTtcXG5cXG4gICAgICAgICAgICBpZiAodGhpcy5hdFN0YXJ0KSB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWluKHRoaXMucGFnZXMgLSAxLCA0KTtcXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDI7IGkgPD0gbWF4OyBpKyspIHtcXG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLnB1c2goaSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2VzO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpZiAodGhpcy5hdEVuZCkge1xcbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHRoaXMucGFnZXMgLSAzLCB0aGlzLnBhZ2VzIC0gMiwgdGhpcy5wYWdlcyAtIDEpO1xcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFnZXM7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHBhZ2VzLnB1c2godGhpcy5wYWdlIC0gMSwgdGhpcy5wYWdlLCB0aGlzLnBhZ2UgKyAxKTtcXG5cXG4gICAgICAgICAgICByZXR1cm4gcGFnZXM7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBqdW1wVG8ocGFnZSkge1xcbiAgICAgICAgICAgIGlmIChwYWdlID09PSB0aGlzLnBhZ2UgfHwgcGFnZSA8IDEgfHwgcGFnZSA+IHRoaXMucGFnZXMpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdqdW1wLXRvJywgKHBhZ2UgLSAxKSAqIHRoaXMubGVuZ3RoKTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIG5hdi50YWJsZS1uYXZpZ2F0aW9uIHtcXG4gICAgICAgIG1heC13aWR0aDogNDI1cHg7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03ZjVmNGFkMFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPG5hdiBjbGFzcz1cInRhYmxlLXBhZ2luYXRpb24gcGFnaW5hdGlvbiBpcy1zbWFsbFwiXG4gICAgICAgIHJvbGU9XCJuYXZpZ2F0aW9uXCJcbiAgICAgICAgYXJpYS1sYWJlbD1cInBhZ2luYXRpb25cIj5cbiAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLXByZXZpb3VzXCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cInBhZ2UgPT09IDFcIlxuICAgICAgICAgICAgQGNsaWNrPVwianVtcFRvKHBhZ2UgLSAxKVwiPlxuICAgICAgICAgICAge3sgaTE4bignUHJldmlvdXMnKSB9fVxuICAgICAgICA8L2E+XG4gICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1uZXh0XCJcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cInBhZ2UgPT09IHBhZ2VzXCJcbiAgICAgICAgICAgIEBjbGljaz1cImp1bXBUbyhwYWdlICsgMSlcIj5cbiAgICAgICAgICAgIHt7IGkxOG4oJ05leHQnKSB9fVxuICAgICAgICA8L2E+XG4gICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb24tbGlzdFwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtY3VycmVudCc6IHBhZ2UgPT09IDEgfVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImp1bXBUbygxKVwiPlxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSB2LWlmPVwicGFnZXMgPiA1ICYmICFhdFN0YXJ0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWVsbGlwc2lzXCI+XG4gICAgICAgICAgICAgICAgICAgICZoZWxsaXA7XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSB2LWZvcj1cImkgaW4gbWlkZGxlUGFnZXNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJpXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1jdXJyZW50JzogcGFnZSA9PT0gaSB9XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwianVtcFRvKGkpXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGkgfX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHYtaWY9XCJwYWdlcyA+IDUgJiYgIWF0RW5kXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWVsbGlwc2lzXCI+XG4gICAgICAgICAgICAgICAgICAgICZoZWxsaXA7XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaSB2LWlmPVwicGFnZXMgPiAxXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1jdXJyZW50JzogcGFnZSA9PT0gcGFnZXMgfVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImp1bXBUbyhwYWdlcylcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgcGFnZXMgfX1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICA8L3VsPlxuICAgIDwvbmF2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1BhZ2luYXRpb24nLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgcmVjb3Jkczoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHN0YXJ0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgcGFnZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5zdGFydCAvIHRoaXMubGVuZ3RoKSArIDE7XG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2VzKCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguY2VpbCh0aGlzLnJlY29yZHMgLyB0aGlzLmxlbmd0aCk7XG4gICAgICAgIH0sXG4gICAgICAgIGF0U3RhcnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlIDwgNDtcbiAgICAgICAgfSxcbiAgICAgICAgYXRFbmQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wYWdlcyAtIHRoaXMucGFnZSA8IDM7XG4gICAgICAgIH0sXG4gICAgICAgIG1pZGRsZVBhZ2VzKCkge1xuICAgICAgICAgICAgY29uc3QgcGFnZXMgPSBbXTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuYXRTdGFydCkge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1heCA9IE1hdGgubWluKHRoaXMucGFnZXMgLSAxLCA0KTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBtYXg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBwYWdlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuYXRFbmQpIHtcbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHRoaXMucGFnZXMgLSAzLCB0aGlzLnBhZ2VzIC0gMiwgdGhpcy5wYWdlcyAtIDEpO1xuICAgICAgICAgICAgICAgIHJldHVybiBwYWdlcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcGFnZXMucHVzaCh0aGlzLnBhZ2UgLSAxLCB0aGlzLnBhZ2UsIHRoaXMucGFnZSArIDEpO1xuXG4gICAgICAgICAgICByZXR1cm4gcGFnZXM7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAganVtcFRvKHBhZ2UpIHtcbiAgICAgICAgICAgIGlmIChwYWdlID09PSB0aGlzLnBhZ2UgfHwgcGFnZSA8IDEgfHwgcGFnZSA+IHRoaXMucGFnZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2p1bXAtdG8nLCAocGFnZSAtIDEpICogdGhpcy5sZW5ndGgpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgbmF2LnRhYmxlLW5hdmlnYXRpb24ge1xuICAgICAgICBtYXgtd2lkdGg6IDQyNXB4O1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibmF2XCIsXG4gICAge1xuICAgICAgc3RhdGljQ2xhc3M6IFwidGFibGUtcGFnaW5hdGlvbiBwYWdpbmF0aW9uIGlzLXNtYWxsXCIsXG4gICAgICBhdHRyczogeyByb2xlOiBcIm5hdmlnYXRpb25cIiwgXCJhcmlhLWxhYmVsXCI6IFwicGFnaW5hdGlvblwiIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tcHJldmlvdXNcIixcbiAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLnBhZ2UgPT09IDEgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uanVtcFRvKF92bS5wYWdlIC0gMSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5pMThuKFwiUHJldmlvdXNcIikpICsgXCJcXG4gICAgXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLW5leHRcIixcbiAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLnBhZ2UgPT09IF92bS5wYWdlcyB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5qdW1wVG8oX3ZtLnBhZ2UgKyAxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmkxOG4oXCJOZXh0XCIpKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwidWxcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpc3RcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWN1cnJlbnRcIjogX3ZtLnBhZ2UgPT09IDEgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBfdm0uanVtcFRvKDEpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ucGFnZXMgPiA1ICYmICFfdm0uYXRTdGFydFxuICAgICAgICAgICAgPyBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWVsbGlwc2lzXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIOKAplxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLl9sKF92bS5taWRkbGVQYWdlcywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IGkgfSwgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtY3VycmVudFwiOiBfdm0ucGFnZSA9PT0gaSB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5qdW1wVG8oaSlcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgICAgICAgICBcIiArIF92bS5fcyhpKSArIFwiXFxuICAgICAgICAgICAgXCIpXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLnBhZ2VzID4gNSAmJiAhX3ZtLmF0RW5kXG4gICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tZWxsaXBzaXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg4oCmXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ucGFnZXMgPiAxXG4gICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWN1cnJlbnRcIjogX3ZtLnBhZ2UgPT09IF92bS5wYWdlcyB9LFxuICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5qdW1wVG8oX3ZtLnBhZ2VzKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucGFnZXMpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03ZjVmNGFkMFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtN2Y1ZjRhZDBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDExODZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY3NmMyOTdjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL092ZXJsYXkudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9PdmVybGF5LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjc2YzI5N2NcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9PdmVybGF5LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWY3NmMyOTdjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZjc2YzI5N2NcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNzZjMjk3Y1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9PdmVybGF5LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNzczOThiOTNcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjc2YzI5N2NcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vT3ZlcmxheS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjc2YzI5N2NcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vT3ZlcmxheS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZjc2YzI5N2NcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udmR0LW92ZXJsYXkge1xcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gICAgZGlzcGxheTogZmxleDtcXG59XFxuLnZkdC1vdmVybGF5LWxvYWRlciB7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Bcm91bmQgNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBhbmltYXRpb246IHNwaW5Bcm91bmQgNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICBib3JkZXItcmFkaXVzOiAyOTA0ODZweDtcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIHdpZHRoOiAyZW07XFxuICAgIGhlaWdodDogMmVtO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE2QkE7SUFDQSxxQ0FBQTtJQUNBLHFCQUFBO0lBQUEscUJBQUE7SUFBQSxjQUFBO0NBQ0E7QUFFQTtJQUNBLGFBQUE7SUFDQSxvREFBQTtJQUNBLDRDQUFBO0lBQ0Esd0JBQUE7SUFDQSxZQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiT3ZlcmxheS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJ2ZHQtb3ZlcmxheSBpcy1vdmVybGF5XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcInZkdC1vdmVybGF5LWxvYWRlclxcXCJcXG4gICAgICAgICAgICA6c3R5bGU9XFxcIm92ZXJsYXlcXFwiPlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdPdmVybGF5JyxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIG92ZXJsYXkoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMGQxYjInLFxcbiAgICAgICAgICAgICAgICAnYm9yZGVyLXJpZ2h0LWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcXG4gICAgICAgICAgICAgICAgJ2JvcmRlci10b3AtY29sb3InOiAndHJhbnNwYXJlbnQnLFxcbiAgICAgICAgICAgIH07XFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAudmR0LW92ZXJsYXkge1xcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgfVxcblxcbiAgICAudmR0LW92ZXJsYXktbG9hZGVyIHtcXG4gICAgICAgIG1hcmdpbjogYXV0bztcXG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzcGluQXJvdW5kIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgIGFuaW1hdGlvbjogc3BpbkFyb3VuZCA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgICAgICBib3JkZXItcmFkaXVzOiAyOTA0ODZweDtcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgICAgICB3aWR0aDogMmVtO1xcbiAgICAgICAgaGVpZ2h0OiAyZW07XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1mNzZjMjk3Y1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cInZkdC1vdmVybGF5IGlzLW92ZXJsYXlcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInZkdC1vdmVybGF5LWxvYWRlclwiXG4gICAgICAgICAgICA6c3R5bGU9XCJvdmVybGF5XCI+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ092ZXJsYXknLFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgb3ZlcmxheSgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAnMnB4IHNvbGlkICMwMGQxYjInLFxuICAgICAgICAgICAgICAgICdib3JkZXItcmlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgICAgICdib3JkZXItdG9wLWNvbG9yJzogJ3RyYW5zcGFyZW50JyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAudmR0LW92ZXJsYXkge1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxuXG4gICAgLnZkdC1vdmVybGF5LWxvYWRlciB7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Bcm91bmQgNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICBhbmltYXRpb246IHNwaW5Bcm91bmQgNTAwbXMgaW5maW5pdGUgbGluZWFyO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyOTA0ODZweDtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDJlbTtcbiAgICAgICAgaGVpZ2h0OiAyZW07XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2ZHQtb3ZlcmxheSBpcy1vdmVybGF5XCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidmR0LW92ZXJsYXktbG9hZGVyXCIsIHN0eWxlOiBfdm0ub3ZlcmxheSB9KVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1mNzZjMjk3Y1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZjc2YzI5N2NcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWVcbi8vIG1vZHVsZSBpZCA9IDExOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJpbXBvcnQgcmVzaXplRGV0ZWN0b3IgZnJvbSAnZWxlbWVudC1yZXNpemUtZGV0ZWN0b3InO1xuaW1wb3J0IFJlc3BvbnNpdmVUYWJsZSBmcm9tICcuL1Jlc3BvbnNpdmVUYWJsZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBpbnNlcnRlZDogKGVsLCBiaW5kaW5nLCB7IGNvbnRleHQgfSkgPT4ge1xuICAgICAgICBjb25zdCB0YWJsZSA9IG5ldyBSZXNwb25zaXZlVGFibGUoZWwsIGNvbnRleHQpO1xuICAgICAgICBjb25zdCBlcmQgPSByZXNpemVEZXRlY3Rvcih7IHN0cmF0ZWd5OiAnc2Nyb2xsJyB9KTtcblxuICAgICAgICB0YWJsZS5yZXNpemUoKTtcblxuICAgICAgICBlcmQubGlzdGVuVG8oZWwsICgpID0+IHtcbiAgICAgICAgICAgIHRhYmxlLnJlc2l6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9LFxufTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNwb25zaXZlL3ZSZXNwb25zaXZlLmpzIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBmb3JFYWNoICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL2NvbGxlY3Rpb24tdXRpbHNcIikuZm9yRWFjaDtcbnZhciBlbGVtZW50VXRpbHNNYWtlciAgICAgICA9IHJlcXVpcmUoXCIuL2VsZW1lbnQtdXRpbHNcIik7XG52YXIgbGlzdGVuZXJIYW5kbGVyTWFrZXIgICAgPSByZXF1aXJlKFwiLi9saXN0ZW5lci1oYW5kbGVyXCIpO1xudmFyIGlkR2VuZXJhdG9yTWFrZXIgICAgICAgID0gcmVxdWlyZShcIi4vaWQtZ2VuZXJhdG9yXCIpO1xudmFyIGlkSGFuZGxlck1ha2VyICAgICAgICAgID0gcmVxdWlyZShcIi4vaWQtaGFuZGxlclwiKTtcbnZhciByZXBvcnRlck1ha2VyICAgICAgICAgICA9IHJlcXVpcmUoXCIuL3JlcG9ydGVyXCIpO1xudmFyIGJyb3dzZXJEZXRlY3RvciAgICAgICAgID0gcmVxdWlyZShcIi4vYnJvd3Nlci1kZXRlY3RvclwiKTtcbnZhciBiYXRjaFByb2Nlc3Nvck1ha2VyICAgICA9IHJlcXVpcmUoXCJiYXRjaC1wcm9jZXNzb3JcIik7XG52YXIgc3RhdGVIYW5kbGVyICAgICAgICAgICAgPSByZXF1aXJlKFwiLi9zdGF0ZS1oYW5kbGVyXCIpO1xuXG4vL0RldGVjdGlvbiBzdHJhdGVnaWVzLlxudmFyIG9iamVjdFN0cmF0ZWd5TWFrZXIgICAgID0gcmVxdWlyZShcIi4vZGV0ZWN0aW9uLXN0cmF0ZWd5L29iamVjdC5qc1wiKTtcbnZhciBzY3JvbGxTdHJhdGVneU1ha2VyICAgICA9IHJlcXVpcmUoXCIuL2RldGVjdGlvbi1zdHJhdGVneS9zY3JvbGwuanNcIik7XG5cbmZ1bmN0aW9uIGlzQ29sbGVjdGlvbihvYmopIHtcbiAgICByZXR1cm4gQXJyYXkuaXNBcnJheShvYmopIHx8IG9iai5sZW5ndGggIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShjb2xsZWN0aW9uKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KGNvbGxlY3Rpb24pKSB7XG4gICAgICAgIHZhciBhcnJheSA9IFtdO1xuICAgICAgICBmb3JFYWNoKGNvbGxlY3Rpb24sIGZ1bmN0aW9uIChvYmopIHtcbiAgICAgICAgICAgIGFycmF5LnB1c2gob2JqKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29sbGVjdGlvbjtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGlzRWxlbWVudChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5ub2RlVHlwZSA9PT0gMTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiBpZEhhbmRsZXJcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBnZXQgR2V0cyB0aGUgcmVzaXplIGRldGVjdG9yIGlkIG9mIHRoZSBlbGVtZW50LlxuICogQHByb3BlcnR5IHtmdW5jdGlvbn0gc2V0IEdlbmVyYXRlIGFuZCBzZXRzIHRoZSByZXNpemUgZGV0ZWN0b3IgaWQgb2YgdGhlIGVsZW1lbnQuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiBPcHRpb25zXG4gKiBAdHlwZSB7b2JqZWN0fVxuICogQHByb3BlcnR5IHtib29sZWFufSBjYWxsT25BZGQgICAgRGV0ZXJtaW5lcyBpZiBsaXN0ZW5lcnMgc2hvdWxkIGJlIGNhbGxlZCB3aGVuIHRoZXkgYXJlIGdldHRpbmcgYWRkZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBEZWZhdWx0IGlzIHRydWUuIElmIHRydWUsIHRoZSBsaXN0ZW5lciBpcyBndWFyYW50ZWVkIHRvIGJlIGNhbGxlZCB3aGVuIGl0IGhhcyBiZWVuIGFkZGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgZmFsc2UsIHRoZSBsaXN0ZW5lciB3aWxsIG5vdCBiZSBndWFyZW50ZWVkIHRvIGJlIGNhbGxlZCB3aGVuIGl0IGhhcyBiZWVuIGFkZGVkIChkb2VzIG5vdCBwcmV2ZW50IGl0IGZyb20gYmVpbmcgY2FsbGVkKS5cbiAqIEBwcm9wZXJ0eSB7aWRIYW5kbGVyfSBpZEhhbmRsZXIgIEEgY3VzdG9tIGlkIGhhbmRsZXIgdGhhdCBpcyByZXNwb25zaWJsZSBmb3IgZ2VuZXJhdGluZywgc2V0dGluZyBhbmQgcmV0cmlldmluZyBpZCdzIGZvciBlbGVtZW50cy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIG5vdCBwcm92aWRlZCwgYSBkZWZhdWx0IGlkIGhhbmRsZXIgd2lsbCBiZSB1c2VkLlxuICogQHByb3BlcnR5IHtyZXBvcnRlcn0gcmVwb3J0ZXIgICAgQSBjdXN0b20gcmVwb3J0ZXIgdGhhdCBoYW5kbGVzIHJlcG9ydGluZyBsb2dzLCB3YXJuaW5ncyBhbmQgZXJyb3JzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgbm90IHByb3ZpZGVkLCBhIGRlZmF1bHQgaWQgaGFuZGxlciB3aWxsIGJlIHVzZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBzZXQgdG8gZmFsc2UsIHRoZW4gbm90aGluZyB3aWxsIGJlIHJlcG9ydGVkLlxuICogQHByb3BlcnR5IHtib29sZWFufSBkZWJ1ZyAgICAgICAgSWYgc2V0IHRvIHRydWUsIHRoZSB0aGUgc3lzdGVtIHdpbGwgcmVwb3J0IGRlYnVnIG1lc3NhZ2VzIGFzIGRlZmF1bHQgZm9yIHRoZSBsaXN0ZW5UbyBtZXRob2QuXG4gKi9cblxuLyoqXG4gKiBDcmVhdGVzIGFuIGVsZW1lbnQgcmVzaXplIGRldGVjdG9yIGluc3RhbmNlLlxuICogQHB1YmxpY1xuICogQHBhcmFtIHtPcHRpb25zP30gb3B0aW9ucyBPcHRpb25hbCBnbG9iYWwgb3B0aW9ucyBvYmplY3QgdGhhdCB3aWxsIGRlY2lkZSBob3cgdGhpcyBpbnN0YW5jZSB3aWxsIHdvcmsuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgLy9pZEhhbmRsZXIgaXMgY3VycmVudGx5IG5vdCBhbiBvcHRpb24gdG8gdGhlIGxpc3RlblRvIGZ1bmN0aW9uLCBzbyBpdCBzaG91bGQgbm90IGJlIGFkZGVkIHRvIGdsb2JhbE9wdGlvbnMuXG4gICAgdmFyIGlkSGFuZGxlcjtcblxuICAgIGlmIChvcHRpb25zLmlkSGFuZGxlcikge1xuICAgICAgICAvLyBUbyBtYWludGFpbiBjb21wYXRhYmlsaXR5IHdpdGggaWRIYW5kbGVyLmdldChlbGVtZW50LCByZWFkb25seSksIG1ha2Ugc3VyZSB0byB3cmFwIHRoZSBnaXZlbiBpZEhhbmRsZXJcbiAgICAgICAgLy8gc28gdGhhdCByZWFkb25seSBmbGFnIGFsd2F5cyBpcyB0cnVlIHdoZW4gaXQncyB1c2VkIGhlcmUuIFRoaXMgbWF5IGJlIHJlbW92ZWQgbmV4dCBtYWpvciB2ZXJzaW9uIGJ1bXAuXG4gICAgICAgIGlkSGFuZGxlciA9IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKGVsZW1lbnQpIHsgcmV0dXJuIG9wdGlvbnMuaWRIYW5kbGVyLmdldChlbGVtZW50LCB0cnVlKTsgfSxcbiAgICAgICAgICAgIHNldDogb3B0aW9ucy5pZEhhbmRsZXIuc2V0XG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIGlkR2VuZXJhdG9yID0gaWRHZW5lcmF0b3JNYWtlcigpO1xuICAgICAgICB2YXIgZGVmYXVsdElkSGFuZGxlciA9IGlkSGFuZGxlck1ha2VyKHtcbiAgICAgICAgICAgIGlkR2VuZXJhdG9yOiBpZEdlbmVyYXRvcixcbiAgICAgICAgICAgIHN0YXRlSGFuZGxlcjogc3RhdGVIYW5kbGVyXG4gICAgICAgIH0pO1xuICAgICAgICBpZEhhbmRsZXIgPSBkZWZhdWx0SWRIYW5kbGVyO1xuICAgIH1cblxuICAgIC8vcmVwb3J0ZXIgaXMgY3VycmVudGx5IG5vdCBhbiBvcHRpb24gdG8gdGhlIGxpc3RlblRvIGZ1bmN0aW9uLCBzbyBpdCBzaG91bGQgbm90IGJlIGFkZGVkIHRvIGdsb2JhbE9wdGlvbnMuXG4gICAgdmFyIHJlcG9ydGVyID0gb3B0aW9ucy5yZXBvcnRlcjtcblxuICAgIGlmKCFyZXBvcnRlcikge1xuICAgICAgICAvL0lmIG9wdGlvbnMucmVwb3J0ZXIgaXMgZmFsc2UsIHRoZW4gdGhlIHJlcG9ydGVyIHNob3VsZCBiZSBxdWlldC5cbiAgICAgICAgdmFyIHF1aWV0ID0gcmVwb3J0ZXIgPT09IGZhbHNlO1xuICAgICAgICByZXBvcnRlciA9IHJlcG9ydGVyTWFrZXIocXVpZXQpO1xuICAgIH1cblxuICAgIC8vYmF0Y2hQcm9jZXNzb3IgaXMgY3VycmVudGx5IG5vdCBhbiBvcHRpb24gdG8gdGhlIGxpc3RlblRvIGZ1bmN0aW9uLCBzbyBpdCBzaG91bGQgbm90IGJlIGFkZGVkIHRvIGdsb2JhbE9wdGlvbnMuXG4gICAgdmFyIGJhdGNoUHJvY2Vzc29yID0gZ2V0T3B0aW9uKG9wdGlvbnMsIFwiYmF0Y2hQcm9jZXNzb3JcIiwgYmF0Y2hQcm9jZXNzb3JNYWtlcih7IHJlcG9ydGVyOiByZXBvcnRlciB9KSk7XG5cbiAgICAvL09wdGlvbnMgdG8gYmUgdXNlZCBhcyBkZWZhdWx0IGZvciB0aGUgbGlzdGVuVG8gZnVuY3Rpb24uXG4gICAgdmFyIGdsb2JhbE9wdGlvbnMgPSB7fTtcbiAgICBnbG9iYWxPcHRpb25zLmNhbGxPbkFkZCAgICAgPSAhIWdldE9wdGlvbihvcHRpb25zLCBcImNhbGxPbkFkZFwiLCB0cnVlKTtcbiAgICBnbG9iYWxPcHRpb25zLmRlYnVnICAgICAgICAgPSAhIWdldE9wdGlvbihvcHRpb25zLCBcImRlYnVnXCIsIGZhbHNlKTtcblxuICAgIHZhciBldmVudExpc3RlbmVySGFuZGxlciAgICA9IGxpc3RlbmVySGFuZGxlck1ha2VyKGlkSGFuZGxlcik7XG4gICAgdmFyIGVsZW1lbnRVdGlscyAgICAgICAgICAgID0gZWxlbWVudFV0aWxzTWFrZXIoe1xuICAgICAgICBzdGF0ZUhhbmRsZXI6IHN0YXRlSGFuZGxlclxuICAgIH0pO1xuXG4gICAgLy9UaGUgZGV0ZWN0aW9uIHN0cmF0ZWd5IHRvIGJlIHVzZWQuXG4gICAgdmFyIGRldGVjdGlvblN0cmF0ZWd5O1xuICAgIHZhciBkZXNpcmVkU3RyYXRlZ3kgPSBnZXRPcHRpb24ob3B0aW9ucywgXCJzdHJhdGVneVwiLCBcIm9iamVjdFwiKTtcbiAgICB2YXIgc3RyYXRlZ3lPcHRpb25zID0ge1xuICAgICAgICByZXBvcnRlcjogcmVwb3J0ZXIsXG4gICAgICAgIGJhdGNoUHJvY2Vzc29yOiBiYXRjaFByb2Nlc3NvcixcbiAgICAgICAgc3RhdGVIYW5kbGVyOiBzdGF0ZUhhbmRsZXIsXG4gICAgICAgIGlkSGFuZGxlcjogaWRIYW5kbGVyXG4gICAgfTtcblxuICAgIGlmKGRlc2lyZWRTdHJhdGVneSA9PT0gXCJzY3JvbGxcIikge1xuICAgICAgICBpZiAoYnJvd3NlckRldGVjdG9yLmlzTGVnYWN5T3BlcmEoKSkge1xuICAgICAgICAgICAgcmVwb3J0ZXIud2FybihcIlNjcm9sbCBzdHJhdGVneSBpcyBub3Qgc3VwcG9ydGVkIG9uIGxlZ2FjeSBPcGVyYS4gQ2hhbmdpbmcgdG8gb2JqZWN0IHN0cmF0ZWd5LlwiKTtcbiAgICAgICAgICAgIGRlc2lyZWRTdHJhdGVneSA9IFwib2JqZWN0XCI7XG4gICAgICAgIH0gZWxzZSBpZiAoYnJvd3NlckRldGVjdG9yLmlzSUUoOSkpIHtcbiAgICAgICAgICAgIHJlcG9ydGVyLndhcm4oXCJTY3JvbGwgc3RyYXRlZ3kgaXMgbm90IHN1cHBvcnRlZCBvbiBJRTkuIENoYW5naW5nIHRvIG9iamVjdCBzdHJhdGVneS5cIik7XG4gICAgICAgICAgICBkZXNpcmVkU3RyYXRlZ3kgPSBcIm9iamVjdFwiO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYoZGVzaXJlZFN0cmF0ZWd5ID09PSBcInNjcm9sbFwiKSB7XG4gICAgICAgIGRldGVjdGlvblN0cmF0ZWd5ID0gc2Nyb2xsU3RyYXRlZ3lNYWtlcihzdHJhdGVneU9wdGlvbnMpO1xuICAgIH0gZWxzZSBpZihkZXNpcmVkU3RyYXRlZ3kgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgZGV0ZWN0aW9uU3RyYXRlZ3kgPSBvYmplY3RTdHJhdGVneU1ha2VyKHN0cmF0ZWd5T3B0aW9ucyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBzdHJhdGVneSBuYW1lOiBcIiArIGRlc2lyZWRTdHJhdGVneSk7XG4gICAgfVxuXG4gICAgLy9DYWxscyBjYW4gYmUgbWFkZSB0byBsaXN0ZW5UbyB3aXRoIGVsZW1lbnRzIHRoYXQgYXJlIHN0aWxsIGJlaW5nIGluc3RhbGxlZC5cbiAgICAvL0Fsc28sIHNhbWUgZWxlbWVudHMgY2FuIG9jY3VyIGluIHRoZSBlbGVtZW50cyBsaXN0IGluIHRoZSBsaXN0ZW5UbyBmdW5jdGlvbi5cbiAgICAvL1dpdGggdGhpcyBtYXAsIHRoZSByZWFkeSBjYWxsYmFja3MgY2FuIGJlIHN5bmNocm9uaXplZCBiZXR3ZWVuIHRoZSBjYWxsc1xuICAgIC8vc28gdGhhdCB0aGUgcmVhZHkgY2FsbGJhY2sgY2FuIGFsd2F5cyBiZSBjYWxsZWQgd2hlbiBhbiBlbGVtZW50IGlzIHJlYWR5IC0gZXZlbiBpZlxuICAgIC8vaXQgd2Fzbid0IGluc3RhbGxlZCBmcm9tIHRoZSBmdW5jdGlvbiBpdHNlbGYuXG4gICAgdmFyIG9uUmVhZHlDYWxsYmFja3MgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIE1ha2VzIHRoZSBnaXZlbiBlbGVtZW50cyByZXNpemUtZGV0ZWN0YWJsZSBhbmQgc3RhcnRzIGxpc3RlbmluZyB0byByZXNpemUgZXZlbnRzIG9uIHRoZSBlbGVtZW50cy4gQ2FsbHMgdGhlIGV2ZW50IGNhbGxiYWNrIGZvciBlYWNoIGV2ZW50IGZvciBlYWNoIGVsZW1lbnQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7T3B0aW9ucz99IG9wdGlvbnMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QuIFRoZXNlIG9wdGlvbnMgd2lsbCBvdmVycmlkZSB0aGUgZ2xvYmFsIG9wdGlvbnMuIFNvbWUgb3B0aW9ucyBtYXkgbm90IGJlIG92ZXJyaWRlbiwgc3VjaCBhcyBpZEhhbmRsZXIuXG4gICAgICogQHBhcmFtIHtlbGVtZW50W118ZWxlbWVudH0gZWxlbWVudHMgVGhlIGdpdmVuIGFycmF5IG9mIGVsZW1lbnRzIHRvIGRldGVjdCByZXNpemUgZXZlbnRzIG9mLiBTaW5nbGUgZWxlbWVudCBpcyBhbHNvIHZhbGlkLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIFRoZSBjYWxsYmFjayB0byBiZSBleGVjdXRlZCBmb3IgZWFjaCByZXNpemUgZXZlbnQgZm9yIGVhY2ggZWxlbWVudC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBsaXN0ZW5UbyhvcHRpb25zLCBlbGVtZW50cywgbGlzdGVuZXIpIHtcbiAgICAgICAgZnVuY3Rpb24gb25SZXNpemVDYWxsYmFjayhlbGVtZW50KSB7XG4gICAgICAgICAgICB2YXIgbGlzdGVuZXJzID0gZXZlbnRMaXN0ZW5lckhhbmRsZXIuZ2V0KGVsZW1lbnQpO1xuICAgICAgICAgICAgZm9yRWFjaChsaXN0ZW5lcnMsIGZ1bmN0aW9uIGNhbGxMaXN0ZW5lclByb3h5KGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKGNhbGxPbkFkZCwgZWxlbWVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJIYW5kbGVyLmFkZChlbGVtZW50LCBsaXN0ZW5lcik7XG5cbiAgICAgICAgICAgIGlmKGNhbGxPbkFkZCkge1xuICAgICAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy9PcHRpb25zIG9iamVjdCBtYXkgYmUgb21pdHRlZC5cbiAgICAgICAgaWYoIWxpc3RlbmVyKSB7XG4gICAgICAgICAgICBsaXN0ZW5lciA9IGVsZW1lbnRzO1xuICAgICAgICAgICAgZWxlbWVudHMgPSBvcHRpb25zO1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWVsZW1lbnRzKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBdCBsZWFzdCBvbmUgZWxlbWVudCByZXF1aXJlZC5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZighbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkxpc3RlbmVyIHJlcXVpcmVkLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0VsZW1lbnQoZWxlbWVudHMpKSB7XG4gICAgICAgICAgICAvLyBBIHNpbmdsZSBlbGVtZW50IGhhcyBiZWVuIHBhc3NlZCBpbi5cbiAgICAgICAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0NvbGxlY3Rpb24oZWxlbWVudHMpKSB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGNvbGxlY3Rpb24gdG8gYXJyYXkgZm9yIHBsdWdpbnMuXG4gICAgICAgICAgICAvLyBUT0RPOiBNYXkgd2FudCB0byBjaGVjayBzbyB0aGF0IGFsbCB0aGUgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb24gYXJlIHZhbGlkIGVsZW1lbnRzLlxuICAgICAgICAgICAgZWxlbWVudHMgPSB0b0FycmF5KGVsZW1lbnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXBvcnRlci5lcnJvcihcIkludmFsaWQgYXJndW1lbnRzLiBNdXN0IGJlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb2xsZWN0aW9uIG9mIERPTSBlbGVtZW50cy5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZWxlbWVudHNSZWFkeSA9IDA7XG5cbiAgICAgICAgdmFyIGNhbGxPbkFkZCA9IGdldE9wdGlvbihvcHRpb25zLCBcImNhbGxPbkFkZFwiLCBnbG9iYWxPcHRpb25zLmNhbGxPbkFkZCk7XG4gICAgICAgIHZhciBvblJlYWR5Q2FsbGJhY2sgPSBnZXRPcHRpb24ob3B0aW9ucywgXCJvblJlYWR5XCIsIGZ1bmN0aW9uIG5vb3AoKSB7fSk7XG4gICAgICAgIHZhciBkZWJ1ZyA9IGdldE9wdGlvbihvcHRpb25zLCBcImRlYnVnXCIsIGdsb2JhbE9wdGlvbnMuZGVidWcpO1xuXG4gICAgICAgIGZvckVhY2goZWxlbWVudHMsIGZ1bmN0aW9uIGF0dGFjaExpc3RlbmVyVG9FbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmICghc3RhdGVIYW5kbGVyLmdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgc3RhdGVIYW5kbGVyLmluaXRTdGF0ZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZEhhbmRsZXIuc2V0KGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgaWQgPSBpZEhhbmRsZXIuZ2V0KGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBkZWJ1ZyAmJiByZXBvcnRlci5sb2coXCJBdHRhY2hpbmcgbGlzdGVuZXIgdG8gZWxlbWVudFwiLCBpZCwgZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGlmKCFlbGVtZW50VXRpbHMuaXNEZXRlY3RhYmxlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgZGVidWcgJiYgcmVwb3J0ZXIubG9nKGlkLCBcIk5vdCBkZXRlY3RhYmxlLlwiKTtcbiAgICAgICAgICAgICAgICBpZihlbGVtZW50VXRpbHMuaXNCdXN5KGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnICYmIHJlcG9ydGVyLmxvZyhpZCwgXCJTeXN0ZW0gYnVzeSBtYWtpbmcgaXQgZGV0ZWN0YWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICAvL1RoZSBlbGVtZW50IGlzIGJlaW5nIHByZXBhcmVkIHRvIGJlIGRldGVjdGFibGUuIERvIG5vdCBtYWtlIGl0IGRldGVjdGFibGUuXG4gICAgICAgICAgICAgICAgICAgIC8vSnVzdCBhZGQgdGhlIGxpc3RlbmVyLCBiZWNhdXNlIHRoZSBlbGVtZW50IHdpbGwgc29vbiBiZSBkZXRlY3RhYmxlLlxuICAgICAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcihjYWxsT25BZGQsIGVsZW1lbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgICAgICAgICAgb25SZWFkeUNhbGxiYWNrc1tpZF0gPSBvblJlYWR5Q2FsbGJhY2tzW2lkXSB8fCBbXTtcbiAgICAgICAgICAgICAgICAgICAgb25SZWFkeUNhbGxiYWNrc1tpZF0ucHVzaChmdW5jdGlvbiBvblJlYWR5KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNSZWFkeSsrO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50c1JlYWR5ID09PSBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlYWR5Q2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWJ1ZyAmJiByZXBvcnRlci5sb2coaWQsIFwiTWFraW5nIGRldGVjdGFibGUuLi5cIik7XG4gICAgICAgICAgICAgICAgLy9UaGUgZWxlbWVudCBpcyBub3QgcHJlcGFyZWQgdG8gYmUgZGV0ZWN0YWJsZSwgc28gZG8gcHJlcGFyZSBpdCBhbmQgYWRkIGEgbGlzdGVuZXIgdG8gaXQuXG4gICAgICAgICAgICAgICAgZWxlbWVudFV0aWxzLm1hcmtCdXN5KGVsZW1lbnQsIHRydWUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkZXRlY3Rpb25TdHJhdGVneS5tYWtlRGV0ZWN0YWJsZSh7IGRlYnVnOiBkZWJ1ZyB9LCBlbGVtZW50LCBmdW5jdGlvbiBvbkVsZW1lbnREZXRlY3RhYmxlKGVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcgJiYgcmVwb3J0ZXIubG9nKGlkLCBcIm9uRWxlbWVudERldGVjdGFibGVcIik7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlSGFuZGxlci5nZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudFV0aWxzLm1hcmtBc0RldGVjdGFibGUoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VXRpbHMubWFya0J1c3koZWxlbWVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZGV0ZWN0aW9uU3RyYXRlZ3kuYWRkTGlzdGVuZXIoZWxlbWVudCwgb25SZXNpemVDYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICBhZGRMaXN0ZW5lcihjYWxsT25BZGQsIGVsZW1lbnQsIGxpc3RlbmVyKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlIGVsZW1lbnQgc2l6ZSBtaWdodCBoYXZlIGNoYW5nZWQgc2luY2UgdGhlIGNhbGwgdG8gXCJsaXN0ZW5Ub1wiLCB3ZSBuZWVkIHRvIGNoZWNrIGZvciB0aGlzIGNoYW5nZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNvIHRoYXQgYSByZXNpemUgZXZlbnQgbWF5IGJlIGVtaXR0ZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBIYXZpbmcgdGhlIHN0YXJ0U2l6ZSBvYmplY3QgaXMgb3B0aW9uYWwgKHNpbmNlIGl0IGRvZXMgbm90IG1ha2Ugc2Vuc2UgaW4gc29tZSBjYXNlcyBzdWNoIGFzIHVucmVuZGVyZWQgZWxlbWVudHMpLCBzbyBjaGVjayBmb3IgaXRzIGV4aXN0YW5jZSBiZWZvcmUuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBBbHNvLCBjaGVjayB0aGUgc3RhdGUgZXhpc3RhbmNlIGJlZm9yZSBzaW5jZSB0aGUgZWxlbWVudCBtYXkgaGF2ZSBiZWVuIHVuaW5zdGFsbGVkIGluIHRoZSBpbnN0YWxsYXRpb24gcHJvY2Vzcy5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZSA9IHN0YXRlSGFuZGxlci5nZXRTdGF0ZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5zdGFydFNpemUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUuc3RhcnRTaXplLndpZHRoICE9PSB3aWR0aCB8fCBzdGF0ZS5zdGFydFNpemUuaGVpZ2h0ICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25SZXNpemVDYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9uUmVhZHlDYWxsYmFja3NbaWRdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yRWFjaChvblJlYWR5Q2FsbGJhY2tzW2lkXSwgZnVuY3Rpb24oY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IGhhcyBiZWVuIHVuaXNudGFsbGVkIGJlZm9yZSBiZWluZyBkZXRlY3RhYmxlLlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcgJiYgcmVwb3J0ZXIubG9nKGlkLCBcIkVsZW1lbnQgdW5pbnN0YWxsZWQgYmVmb3JlIGJlaW5nIGRldGVjdGFibGUuXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9uUmVhZHlDYWxsYmFja3NbaWRdO1xuXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRzUmVhZHkrKztcbiAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudHNSZWFkeSA9PT0gZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvblJlYWR5Q2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWJ1ZyAmJiByZXBvcnRlci5sb2coaWQsIFwiQWxyZWFkeSBkZXRlY2FibGUsIGFkZGluZyBsaXN0ZW5lci5cIik7XG5cbiAgICAgICAgICAgIC8vVGhlIGVsZW1lbnQgaGFzIGJlZW4gcHJlcGFyZWQgdG8gYmUgZGV0ZWN0YWJsZSBhbmQgaXMgcmVhZHkgdG8gYmUgbGlzdGVuZWQgdG8uXG4gICAgICAgICAgICBhZGRMaXN0ZW5lcihjYWxsT25BZGQsIGVsZW1lbnQsIGxpc3RlbmVyKTtcbiAgICAgICAgICAgIGVsZW1lbnRzUmVhZHkrKztcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoZWxlbWVudHNSZWFkeSA9PT0gZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICBvblJlYWR5Q2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuaW5zdGFsbChlbGVtZW50cykge1xuICAgICAgICBpZighZWxlbWVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiByZXBvcnRlci5lcnJvcihcIkF0IGxlYXN0IG9uZSBlbGVtZW50IGlzIHJlcXVpcmVkLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChpc0VsZW1lbnQoZWxlbWVudHMpKSB7XG4gICAgICAgICAgICAvLyBBIHNpbmdsZSBlbGVtZW50IGhhcyBiZWVuIHBhc3NlZCBpbi5cbiAgICAgICAgICAgIGVsZW1lbnRzID0gW2VsZW1lbnRzXTtcbiAgICAgICAgfSBlbHNlIGlmIChpc0NvbGxlY3Rpb24oZWxlbWVudHMpKSB7XG4gICAgICAgICAgICAvLyBDb252ZXJ0IGNvbGxlY3Rpb24gdG8gYXJyYXkgZm9yIHBsdWdpbnMuXG4gICAgICAgICAgICAvLyBUT0RPOiBNYXkgd2FudCB0byBjaGVjayBzbyB0aGF0IGFsbCB0aGUgZWxlbWVudHMgaW4gdGhlIGNvbGxlY3Rpb24gYXJlIHZhbGlkIGVsZW1lbnRzLlxuICAgICAgICAgICAgZWxlbWVudHMgPSB0b0FycmF5KGVsZW1lbnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXBvcnRlci5lcnJvcihcIkludmFsaWQgYXJndW1lbnRzLiBNdXN0IGJlIGEgRE9NIGVsZW1lbnQgb3IgYSBjb2xsZWN0aW9uIG9mIERPTSBlbGVtZW50cy5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBmb3JFYWNoKGVsZW1lbnRzLCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lckhhbmRsZXIucmVtb3ZlQWxsTGlzdGVuZXJzKGVsZW1lbnQpO1xuICAgICAgICAgICAgZGV0ZWN0aW9uU3RyYXRlZ3kudW5pbnN0YWxsKGVsZW1lbnQpO1xuICAgICAgICAgICAgc3RhdGVIYW5kbGVyLmNsZWFuU3RhdGUoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGxpc3RlblRvOiBsaXN0ZW5UbyxcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IGV2ZW50TGlzdGVuZXJIYW5kbGVyLnJlbW92ZUxpc3RlbmVyLFxuICAgICAgICByZW1vdmVBbGxMaXN0ZW5lcnM6IGV2ZW50TGlzdGVuZXJIYW5kbGVyLnJlbW92ZUFsbExpc3RlbmVycyxcbiAgICAgICAgdW5pbnN0YWxsOiB1bmluc3RhbGxcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0T3B0aW9uKG9wdGlvbnMsIG5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNbbmFtZV07XG5cbiAgICBpZigodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkgJiYgZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGdldFN0YXRlID0gb3B0aW9ucy5zdGF0ZUhhbmRsZXIuZ2V0U3RhdGU7XG5cbiAgICAvKipcbiAgICAgKiBUZWxscyBpZiB0aGUgZWxlbWVudCBoYXMgYmVlbiBtYWRlIGRldGVjdGFibGUgYW5kIHJlYWR5IHRvIGJlIGxpc3RlbmVkIGZvciByZXNpemUgZXZlbnRzLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IFRoZSBlbGVtZW50IHRvIGNoZWNrLlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIG9yIGZhbHNlIGRlcGVuZGluZyBvbiBpZiB0aGUgZWxlbWVudCBpcyBkZXRlY3RhYmxlIG9yIG5vdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc0RldGVjdGFibGUoZWxlbWVudCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZShlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIHN0YXRlICYmICEhc3RhdGUuaXNEZXRlY3RhYmxlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcmtzIHRoZSBlbGVtZW50IHRoYXQgaXQgaGFzIGJlZW4gbWFkZSBkZXRlY3RhYmxlIGFuZCByZWFkeSB0byBiZSBsaXN0ZW5lZCBmb3IgcmVzaXplIGV2ZW50cy5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBUaGUgZWxlbWVudCB0byBtYXJrLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1hcmtBc0RldGVjdGFibGUoZWxlbWVudCkge1xuICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5pc0RldGVjdGFibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFRlbGxzIGlmIHRoZSBlbGVtZW50IGlzIGJ1c3kgb3Igbm90LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IFRoZSBlbGVtZW50IHRvIGNoZWNrLlxuICAgICAqIEByZXR1cm5zIHtib29sZWFufSBUcnVlIG9yIGZhbHNlIGRlcGVuZGluZyBvbiBpZiB0aGUgZWxlbWVudCBpcyBidXN5IG9yIG5vdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBpc0J1c3koZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gISFnZXRTdGF0ZShlbGVtZW50KS5idXN5O1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1hcmtzIHRoZSBvYmplY3QgaXMgYnVzeSBhbmQgc2hvdWxkIG5vdCBiZSBtYWRlIGRldGVjdGFibGUuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBtYXJrLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gYnVzeSBJZiB0aGUgZWxlbWVudCBpcyBidXN5IG9yIG5vdC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBtYXJrQnVzeShlbGVtZW50LCBidXN5KSB7XG4gICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLmJ1c3kgPSAhIWJ1c3k7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNEZXRlY3RhYmxlOiBpc0RldGVjdGFibGUsXG4gICAgICAgIG1hcmtBc0RldGVjdGFibGU6IG1hcmtBc0RldGVjdGFibGUsXG4gICAgICAgIGlzQnVzeTogaXNCdXN5LFxuICAgICAgICBtYXJrQnVzeTogbWFya0J1c3lcbiAgICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9lbGVtZW50LXV0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaWRIYW5kbGVyKSB7XG4gICAgdmFyIGV2ZW50TGlzdGVuZXJzID0ge307XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGFsbCBsaXN0ZW5lcnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gZ2V0IGFsbCBsaXN0ZW5lcnMgZm9yLlxuICAgICAqIEByZXR1cm5zIEFsbCBsaXN0ZW5lcnMgZm9yIHRoZSBnaXZlbiBlbGVtZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldExpc3RlbmVycyhlbGVtZW50KSB7XG4gICAgICAgIHZhciBpZCA9IGlkSGFuZGxlci5nZXQoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBldmVudExpc3RlbmVyc1tpZF0gfHwgW107XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogU3RvcmVzIHRoZSBnaXZlbiBsaXN0ZW5lciBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuIFdpbGwgbm90IGFjdHVhbGx5IGFkZCB0aGUgbGlzdGVuZXIgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBoYXZlIHRoZSBsaXN0ZW5lciBhZGRlZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBUaGUgY2FsbGJhY2sgdGhhdCB0aGUgZWxlbWVudCBoYXMgYWRkZWQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoZWxlbWVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgdmFyIGlkID0gaWRIYW5kbGVyLmdldChlbGVtZW50KTtcblxuICAgICAgICBpZighZXZlbnRMaXN0ZW5lcnNbaWRdKSB7XG4gICAgICAgICAgICBldmVudExpc3RlbmVyc1tpZF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGV2ZW50TGlzdGVuZXJzW2lkXS5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVMaXN0ZW5lcihlbGVtZW50LCBsaXN0ZW5lcikge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gZ2V0TGlzdGVuZXJzKGVsZW1lbnQpO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbGVuID0gbGlzdGVuZXJzLmxlbmd0aDsgaSA8IGxlbjsgKytpKSB7XG4gICAgICAgICAgICBpZiAobGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgICBsaXN0ZW5lcnMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUFsbExpc3RlbmVycyhlbGVtZW50KSB7XG4gICAgICB2YXIgbGlzdGVuZXJzID0gZ2V0TGlzdGVuZXJzKGVsZW1lbnQpO1xuICAgICAgaWYgKCFsaXN0ZW5lcnMpIHsgcmV0dXJuOyB9XG4gICAgICBsaXN0ZW5lcnMubGVuZ3RoID0gMDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZXQ6IGdldExpc3RlbmVycyxcbiAgICAgICAgYWRkOiBhZGRMaXN0ZW5lcixcbiAgICAgICAgcmVtb3ZlTGlzdGVuZXI6IHJlbW92ZUxpc3RlbmVyLFxuICAgICAgICByZW1vdmVBbGxMaXN0ZW5lcnM6IHJlbW92ZUFsbExpc3RlbmVyc1xuICAgIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2xpc3RlbmVyLWhhbmRsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDExOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgaWRDb3VudCA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBuZXcgdW5pcXVlIGlkIGluIHRoZSBjb250ZXh0LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcmV0dXJucyB7bnVtYmVyfSBBIHVuaXF1ZSBpZCBpbiB0aGUgY29udGV4dC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIGlkQ291bnQrKztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBnZW5lcmF0ZTogZ2VuZXJhdGVcbiAgICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9pZC1nZW5lcmF0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgdmFyIGlkR2VuZXJhdG9yICAgICA9IG9wdGlvbnMuaWRHZW5lcmF0b3I7XG4gICAgdmFyIGdldFN0YXRlICAgICAgICA9IG9wdGlvbnMuc3RhdGVIYW5kbGVyLmdldFN0YXRlO1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcmVzaXplIGRldGVjdG9yIGlkIG9mIHRoZSBlbGVtZW50LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIHRhcmdldCBlbGVtZW50IHRvIGdldCB0aGUgaWQgb2YuXG4gICAgICogQHJldHVybnMge3N0cmluZ3xudW1iZXJ8bnVsbH0gVGhlIGlkIG9mIHRoZSBlbGVtZW50LiBOdWxsIGlmIGl0IGhhcyBubyBpZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRJZChlbGVtZW50KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmIChzdGF0ZSAmJiBzdGF0ZS5pZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGUuaWQ7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSByZXNpemUgZGV0ZWN0b3IgaWQgb2YgdGhlIGVsZW1lbnQuIFJlcXVpcmVzIHRoZSBlbGVtZW50IHRvIGhhdmUgYSByZXNpemUgZGV0ZWN0b3Igc3RhdGUgaW5pdGlhbGl6ZWQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgdGFyZ2V0IGVsZW1lbnQgdG8gc2V0IHRoZSBpZCBvZi5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bWJlcnxudWxsfSBUaGUgaWQgb2YgdGhlIGVsZW1lbnQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gc2V0SWQoZWxlbWVudCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZShlbGVtZW50KTtcblxuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJzZXRJZCByZXF1aXJlZCB0aGUgZWxlbWVudCB0byBoYXZlIGEgcmVzaXplIGRldGVjdGlvbiBzdGF0ZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgaWQgPSBpZEdlbmVyYXRvci5nZW5lcmF0ZSgpO1xuXG4gICAgICAgIHN0YXRlLmlkID0gaWQ7XG5cbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldDogZ2V0SWQsXG4gICAgICAgIHNldDogc2V0SWRcbiAgICB9O1xufTtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9pZC1oYW5kbGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGdsb2JhbCBjb25zb2xlOiBmYWxzZSAqL1xuXG4vKipcbiAqIFJlcG9ydGVyIHRoYXQgaGFuZGxlcyB0aGUgcmVwb3J0aW5nIG9mIGxvZ3MsIHdhcm5pbmdzIGFuZCBlcnJvcnMuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHF1aWV0IFRlbGxzIGlmIHRoZSByZXBvcnRlciBzaG91bGQgYmUgcXVpZXQgb3Igbm90LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHF1aWV0KSB7XG4gICAgZnVuY3Rpb24gbm9vcCgpIHtcbiAgICAgICAgLy9Eb2VzIG5vdGhpbmcuXG4gICAgfVxuXG4gICAgdmFyIHJlcG9ydGVyID0ge1xuICAgICAgICBsb2c6IG5vb3AsXG4gICAgICAgIHdhcm46IG5vb3AsXG4gICAgICAgIGVycm9yOiBub29wXG4gICAgfTtcblxuICAgIGlmKCFxdWlldCAmJiB3aW5kb3cuY29uc29sZSkge1xuICAgICAgICB2YXIgYXR0YWNoRnVuY3Rpb24gPSBmdW5jdGlvbihyZXBvcnRlciwgbmFtZSkge1xuICAgICAgICAgICAgLy9UaGUgcHJveHkgaXMgbmVlZGVkIHRvIGJlIGFibGUgdG8gY2FsbCB0aGUgbWV0aG9kIHdpdGggdGhlIGNvbnNvbGUgY29udGV4dCxcbiAgICAgICAgICAgIC8vc2luY2Ugd2UgY2Fubm90IHVzZSBiaW5kLlxuICAgICAgICAgICAgcmVwb3J0ZXJbbmFtZV0gPSBmdW5jdGlvbiByZXBvcnRlclByb3h5KCkge1xuICAgICAgICAgICAgICAgIHZhciBmID0gY29uc29sZVtuYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAoZi5hcHBseSkgeyAvL0lFOSBkb2VzIG5vdCBzdXBwb3J0IGNvbnNvbGUubG9nLmFwcGx5IDopXG4gICAgICAgICAgICAgICAgICAgIGYuYXBwbHkoY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZihhcmd1bWVudHNbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfTtcblxuICAgICAgICBhdHRhY2hGdW5jdGlvbihyZXBvcnRlciwgXCJsb2dcIik7XG4gICAgICAgIGF0dGFjaEZ1bmN0aW9uKHJlcG9ydGVyLCBcIndhcm5cIik7XG4gICAgICAgIGF0dGFjaEZ1bmN0aW9uKHJlcG9ydGVyLCBcImVycm9yXCIpO1xuICAgIH1cblxuICAgIHJldHVybiByZXBvcnRlcjtcbn07XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL3JlcG9ydGVyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IHJlcXVpcmUoXCIuL3V0aWxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGJhdGNoUHJvY2Vzc29yTWFrZXIob3B0aW9ucykge1xuICAgIG9wdGlvbnMgICAgICAgICAgICAgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciByZXBvcnRlciAgICAgICAgPSBvcHRpb25zLnJlcG9ydGVyO1xuICAgIHZhciBhc3luY1Byb2Nlc3MgICAgPSB1dGlscy5nZXRPcHRpb24ob3B0aW9ucywgXCJhc3luY1wiLCB0cnVlKTtcbiAgICB2YXIgYXV0b1Byb2Nlc3MgICAgID0gdXRpbHMuZ2V0T3B0aW9uKG9wdGlvbnMsIFwiYXV0b1wiLCB0cnVlKTtcblxuICAgIGlmKGF1dG9Qcm9jZXNzICYmICFhc3luY1Byb2Nlc3MpIHtcbiAgICAgICAgcmVwb3J0ZXIgJiYgcmVwb3J0ZXIud2FybihcIkludmFsaWQgb3B0aW9ucyBjb21iaW5hdGlvbi4gYXV0bz10cnVlIGFuZCBhc3luYz1mYWxzZSBpcyBpbnZhbGlkLiBTZXR0aW5nIGFzeW5jPXRydWUuXCIpO1xuICAgICAgICBhc3luY1Byb2Nlc3MgPSB0cnVlO1xuICAgIH1cblxuICAgIHZhciBiYXRjaCA9IEJhdGNoKCk7XG4gICAgdmFyIGFzeW5jRnJhbWVIYW5kbGVyO1xuICAgIHZhciBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcblxuICAgIGZ1bmN0aW9uIGFkZEZ1bmN0aW9uKGxldmVsLCBmbikge1xuICAgICAgICBpZighaXNQcm9jZXNzaW5nICYmIGF1dG9Qcm9jZXNzICYmIGFzeW5jUHJvY2VzcyAmJiBiYXRjaC5zaXplKCkgPT09IDApIHtcbiAgICAgICAgICAgIC8vIFNpbmNlIHRoaXMgaXMgYXN5bmMsIGl0IGlzIGd1YXJhbnRlZWQgdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgdGhhdCB0aGUgZm4gaXMgYWRkZWQgdG8gdGhlIGJhdGNoLlxuICAgICAgICAgICAgLy8gVGhpcyBuZWVkcyB0byBiZSBkb25lIGJlZm9yZSwgc2luY2Ugd2UncmUgY2hlY2tpbmcgdGhlIHNpemUgb2YgdGhlIGJhdGNoIHRvIGJlIDAuXG4gICAgICAgICAgICBwcm9jZXNzQmF0Y2hBc3luYygpO1xuICAgICAgICB9XG5cbiAgICAgICAgYmF0Y2guYWRkKGxldmVsLCBmbik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0JhdGNoKCkge1xuICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50IGJhdGNoLCBhbmQgY3JlYXRlIGEgbmV3IGJhdGNoIHNvIHRoYXQgaW5jb21pbmcgZnVuY3Rpb25zIGFyZSBub3QgYWRkZWQgaW50byB0aGUgY3VycmVudGx5IHByb2Nlc3NpbmcgYmF0Y2guXG4gICAgICAgIC8vIENvbnRpbnVlIHByb2Nlc3NpbmcgdW50aWwgdGhlIHRvcC1sZXZlbCBiYXRjaCBpcyBlbXB0eSAoZnVuY3Rpb25zIG1heSBiZSBhZGRlZCB0byB0aGUgbmV3IGJhdGNoIHdoaWxlIHByb2Nlc3NpbmcsIGFuZCBzbyBvbikuXG4gICAgICAgIGlzUHJvY2Vzc2luZyA9IHRydWU7XG4gICAgICAgIHdoaWxlIChiYXRjaC5zaXplKCkpIHtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzaW5nQmF0Y2ggPSBiYXRjaDtcbiAgICAgICAgICAgIGJhdGNoID0gQmF0Y2goKTtcbiAgICAgICAgICAgIHByb2Nlc3NpbmdCYXRjaC5wcm9jZXNzKCk7XG4gICAgICAgIH1cbiAgICAgICAgaXNQcm9jZXNzaW5nID0gZmFsc2U7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZm9yY2VQcm9jZXNzQmF0Y2gobG9jYWxBc3luY1Byb2Nlc3MpIHtcbiAgICAgICAgaWYgKGlzUHJvY2Vzc2luZykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobG9jYWxBc3luY1Byb2Nlc3MgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgbG9jYWxBc3luY1Byb2Nlc3MgPSBhc3luY1Byb2Nlc3M7XG4gICAgICAgIH1cblxuICAgICAgICBpZihhc3luY0ZyYW1lSGFuZGxlcikge1xuICAgICAgICAgICAgY2FuY2VsRnJhbWUoYXN5bmNGcmFtZUhhbmRsZXIpO1xuICAgICAgICAgICAgYXN5bmNGcmFtZUhhbmRsZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobG9jYWxBc3luY1Byb2Nlc3MpIHtcbiAgICAgICAgICAgIHByb2Nlc3NCYXRjaEFzeW5jKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwcm9jZXNzQmF0Y2goKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NCYXRjaEFzeW5jKCkge1xuICAgICAgICBhc3luY0ZyYW1lSGFuZGxlciA9IHJlcXVlc3RGcmFtZShwcm9jZXNzQmF0Y2gpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyQmF0Y2goKSB7XG4gICAgICAgIGJhdGNoICAgICAgICAgICA9IHt9O1xuICAgICAgICBiYXRjaFNpemUgICAgICAgPSAwO1xuICAgICAgICB0b3BMZXZlbCAgICAgICAgPSAwO1xuICAgICAgICBib3R0b21MZXZlbCAgICAgPSAwO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNhbmNlbEZyYW1lKGxpc3RlbmVyKSB7XG4gICAgICAgIC8vIHZhciBjYW5jZWwgPSB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cuY2xlYXJUaW1lb3V0O1xuICAgICAgICB2YXIgY2FuY2VsID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICByZXR1cm4gY2FuY2VsKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZXF1ZXN0RnJhbWUoY2FsbGJhY2spIHtcbiAgICAgICAgLy8gdmFyIHJhZiA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IGZ1bmN0aW9uKGZuKSB7IHJldHVybiB3aW5kb3cuc2V0VGltZW91dChmbiwgMjApOyB9O1xuICAgICAgICB2YXIgcmFmID0gZnVuY3Rpb24oZm4pIHsgcmV0dXJuIHNldFRpbWVvdXQoZm4sIDApOyB9O1xuICAgICAgICByZXR1cm4gcmFmKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGQ6IGFkZEZ1bmN0aW9uLFxuICAgICAgICBmb3JjZTogZm9yY2VQcm9jZXNzQmF0Y2hcbiAgICB9O1xufTtcblxuZnVuY3Rpb24gQmF0Y2goKSB7XG4gICAgdmFyIGJhdGNoICAgICAgID0ge307XG4gICAgdmFyIHNpemUgICAgICAgID0gMDtcbiAgICB2YXIgdG9wTGV2ZWwgICAgPSAwO1xuICAgIHZhciBib3R0b21MZXZlbCA9IDA7XG5cbiAgICBmdW5jdGlvbiBhZGQobGV2ZWwsIGZuKSB7XG4gICAgICAgIGlmKCFmbikge1xuICAgICAgICAgICAgZm4gPSBsZXZlbDtcbiAgICAgICAgICAgIGxldmVsID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGxldmVsID4gdG9wTGV2ZWwpIHtcbiAgICAgICAgICAgIHRvcExldmVsID0gbGV2ZWw7XG4gICAgICAgIH0gZWxzZSBpZihsZXZlbCA8IGJvdHRvbUxldmVsKSB7XG4gICAgICAgICAgICBib3R0b21MZXZlbCA9IGxldmVsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoIWJhdGNoW2xldmVsXSkge1xuICAgICAgICAgICAgYmF0Y2hbbGV2ZWxdID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBiYXRjaFtsZXZlbF0ucHVzaChmbik7XG4gICAgICAgIHNpemUrKztcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzKCkge1xuICAgICAgICBmb3IodmFyIGxldmVsID0gYm90dG9tTGV2ZWw7IGxldmVsIDw9IHRvcExldmVsOyBsZXZlbCsrKSB7XG4gICAgICAgICAgICB2YXIgZm5zID0gYmF0Y2hbbGV2ZWxdO1xuXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgZm5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGZuID0gZm5zW2ldO1xuICAgICAgICAgICAgICAgIGZuKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTaXplKCkge1xuICAgICAgICByZXR1cm4gc2l6ZTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBhZGQ6IGFkZCxcbiAgICAgICAgcHJvY2VzczogcHJvY2VzcyxcbiAgICAgICAgc2l6ZTogZ2V0U2l6ZVxuICAgIH07XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYXRjaC1wcm9jZXNzb3Ivc3JjL2JhdGNoLXByb2Nlc3Nvci5qc1xuLy8gbW9kdWxlIGlkID0gMTE5OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgdXRpbHMgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG51dGlscy5nZXRPcHRpb24gPSBnZXRPcHRpb247XG5cbmZ1bmN0aW9uIGdldE9wdGlvbihvcHRpb25zLCBuYW1lLCBkZWZhdWx0VmFsdWUpIHtcbiAgICB2YXIgdmFsdWUgPSBvcHRpb25zW25hbWVdO1xuXG4gICAgaWYoKHZhbHVlID09PSB1bmRlZmluZWQgfHwgdmFsdWUgPT09IG51bGwpICYmIGRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvYmF0Y2gtcHJvY2Vzc29yL3NyYy91dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgcHJvcCA9IFwiX2VyZFwiO1xuXG5mdW5jdGlvbiBpbml0U3RhdGUoZWxlbWVudCkge1xuICAgIGVsZW1lbnRbcHJvcF0gPSB7fTtcbiAgICByZXR1cm4gZ2V0U3RhdGUoZWxlbWVudCk7XG59XG5cbmZ1bmN0aW9uIGdldFN0YXRlKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudFtwcm9wXTtcbn1cblxuZnVuY3Rpb24gY2xlYW5TdGF0ZShlbGVtZW50KSB7XG4gICAgZGVsZXRlIGVsZW1lbnRbcHJvcF07XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICAgIGluaXRTdGF0ZTogaW5pdFN0YXRlLFxuICAgIGdldFN0YXRlOiBnZXRTdGF0ZSxcbiAgICBjbGVhblN0YXRlOiBjbGVhblN0YXRlXG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL3N0YXRlLWhhbmRsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCIvKipcbiAqIFJlc2l6ZSBkZXRlY3Rpb24gc3RyYXRlZ3kgdGhhdCBpbmplY3RzIG9iamVjdHMgdG8gZWxlbWVudHMgaW4gb3JkZXIgdG8gZGV0ZWN0IHJlc2l6ZSBldmVudHMuXG4gKiBIZWF2aWx5IGluc3BpcmVkIGJ5OiBodHRwOi8vd3d3LmJhY2thbGxleWNvZGVyLmNvbS8yMDEzLzAzLzE4L2Nyb3NzLWJyb3dzZXItZXZlbnQtYmFzZWQtZWxlbWVudC1yZXNpemUtZGV0ZWN0aW9uL1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgYnJvd3NlckRldGVjdG9yID0gcmVxdWlyZShcIi4uL2Jyb3dzZXItZGV0ZWN0b3JcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgICAgICAgICAgICAgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciByZXBvcnRlciAgICAgICAgPSBvcHRpb25zLnJlcG9ydGVyO1xuICAgIHZhciBiYXRjaFByb2Nlc3NvciAgPSBvcHRpb25zLmJhdGNoUHJvY2Vzc29yO1xuICAgIHZhciBnZXRTdGF0ZSAgICAgICAgPSBvcHRpb25zLnN0YXRlSGFuZGxlci5nZXRTdGF0ZTtcblxuICAgIGlmKCFyZXBvcnRlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHJlcXVpcmVkIGRlcGVuZGVuY3k6IHJlcG9ydGVyLlwiKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcmVzaXplIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBlbGVtZW50LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgaGF2ZSB0aGUgbGlzdGVuZXIgYWRkZWQuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCByZXNpemUgZXZlbnQgb2YgdGhlIGVsZW1lbnQuIFRoZSBlbGVtZW50IHdpbGwgYmUgZ2l2ZW4gYXMgYSBwYXJhbWV0ZXIgdG8gdGhlIGxpc3RlbmVyIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKGVsZW1lbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmKCFnZXRPYmplY3QoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVsZW1lbnQgaXMgbm90IGRldGVjdGFibGUgYnkgdGhpcyBzdHJhdGVneS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBsaXN0ZW5lclByb3h5KCkge1xuICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihicm93c2VyRGV0ZWN0b3IuaXNJRSg4KSkge1xuICAgICAgICAgICAgLy9JRSA4IGRvZXMgbm90IHN1cHBvcnQgb2JqZWN0LCBidXQgc3VwcG9ydHMgdGhlIHJlc2l6ZSBldmVudCBkaXJlY3RseSBvbiBlbGVtZW50cy5cbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLm9iamVjdCA9IHtcbiAgICAgICAgICAgICAgICBwcm94eTogbGlzdGVuZXJQcm94eVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGVsZW1lbnQuYXR0YWNoRXZlbnQoXCJvbnJlc2l6ZVwiLCBsaXN0ZW5lclByb3h5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSBnZXRPYmplY3QoZWxlbWVudCk7XG4gICAgICAgICAgICBvYmplY3QuY29udGVudERvY3VtZW50LmRlZmF1bHRWaWV3LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgbGlzdGVuZXJQcm94eSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhbiBlbGVtZW50IGRldGVjdGFibGUgYW5kIHJlYWR5IHRvIGJlIGxpc3RlbmVkIGZvciByZXNpemUgZXZlbnRzLiBXaWxsIGNhbGwgdGhlIGNhbGxiYWNrIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVhZHkgdG8gYmUgbGlzdGVuZWQgZm9yIHJlc2l6ZSBjaGFuZ2VzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QuXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIG1ha2UgZGV0ZWN0YWJsZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyByZWFkeSB0byBiZSBsaXN0ZW5lZCBmb3IgcmVzaXplIGNoYW5nZXMuIFdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGVsZW1lbnQgYXMgZmlyc3QgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1ha2VEZXRlY3RhYmxlKG9wdGlvbnMsIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZWxlbWVudDtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBvcHRpb25zO1xuICAgICAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgdmFyIGRlYnVnID0gb3B0aW9ucy5kZWJ1ZztcblxuICAgICAgICBmdW5jdGlvbiBpbmplY3RPYmplY3QoZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIHZhciBPQkpFQ1RfU1RZTEUgPSBcImRpc3BsYXk6IGJsb2NrOyBwb3NpdGlvbjogYWJzb2x1dGU7IHRvcDogMDsgbGVmdDogMDsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgYm9yZGVyOiBub25lOyBwYWRkaW5nOiAwOyBtYXJnaW46IDA7IG9wYWNpdHk6IDA7IHotaW5kZXg6IC0xMDAwOyBwb2ludGVyLWV2ZW50czogbm9uZTtcIjtcblxuICAgICAgICAgICAgLy9UaGUgdGFyZ2V0IGVsZW1lbnQgbmVlZHMgdG8gYmUgcG9zaXRpb25lZCAoZXZlcnl0aGluZyBleGNlcHQgc3RhdGljKSBzbyB0aGUgYWJzb2x1dGUgcG9zaXRpb25lZCBvYmplY3Qgd2lsbCBiZSBwb3NpdGlvbmVkIHJlbGF0aXZlIHRvIHRoZSB0YXJnZXQgZWxlbWVudC5cblxuICAgICAgICAgICAgLy8gUG9zaXRpb24gYWx0ZXJpbmcgbWF5IGJlIHBlcmZvcm1lZCBkaXJlY3RseSBvciBvbiBvYmplY3QgbG9hZCwgZGVwZW5kaW5nIG9uIGlmIHN0eWxlIHJlc29sdXRpb24gaXMgcG9zc2libGUgZGlyZWN0bHkgb3Igbm90LlxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uQ2hlY2tQZXJmb3JtZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgbWF5IG5vdCB5ZXQgYmUgYXR0YWNoZWQgdG8gdGhlIERPTSwgYW5kIHRoZXJlZm9yZSB0aGUgc3R5bGUgb2JqZWN0IG1heSBiZSBlbXB0eSBpbiBzb21lIGJyb3dzZXJzLlxuICAgICAgICAgICAgLy8gU2luY2UgdGhlIHN0eWxlIG9iamVjdCBpcyBhIHJlZmVyZW5jZSwgaXQgd2lsbCBiZSB1cGRhdGVkIGFzIHNvb24gYXMgdGhlIGVsZW1lbnQgaXMgYXR0YWNoZWQgdG8gdGhlIERPTS5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHdpZHRoID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkuc3RhcnRTaXplID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiB3aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGhlaWdodFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gbXV0YXRlRG9tKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGFsdGVyUG9zaXRpb25TdHlsZXMoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKHN0eWxlLnBvc2l0aW9uID09PSBcInN0YXRpY1wiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlUmVsYXRpdmVTdHlsZXMgPSBmdW5jdGlvbihyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TnVtZXJpY2FsVmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1teLVxcZFxcLl0vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gc3R5bGVbcHJvcGVydHldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUgIT09IFwiYXV0b1wiICYmIGdldE51bWVyaWNhbFZhbHVlKHZhbHVlKSAhPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0ZXIud2FybihcIkFuIGVsZW1lbnQgdGhhdCBpcyBwb3NpdGlvbmVkIHN0YXRpYyBoYXMgc3R5bGUuXCIgKyBwcm9wZXJ0eSArIFwiPVwiICsgdmFsdWUgKyBcIiB3aGljaCBpcyBpZ25vcmVkIGR1ZSB0byB0aGUgc3RhdGljIHBvc2l0aW9uaW5nLiBUaGUgZWxlbWVudCB3aWxsIG5lZWQgdG8gYmUgcG9zaXRpb25lZCByZWxhdGl2ZSwgc28gdGhlIHN0eWxlLlwiICsgcHJvcGVydHkgKyBcIiB3aWxsIGJlIHNldCB0byAwLiBFbGVtZW50OiBcIiwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcGVydHldID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0NoZWNrIHNvIHRoYXQgdGhlcmUgYXJlIG5vIGFjY2lkZW50YWwgc3R5bGVzIHRoYXQgd2lsbCBtYWtlIHRoZSBlbGVtZW50IHN0eWxlZCBkaWZmZXJlbnRseSBub3cgdGhhdCBpcyBpcyByZWxhdGl2ZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vSWYgdGhlcmUgYXJlIGFueSwgc2V0IHRoZW0gdG8gMCAodGhpcyBzaG91bGQgYmUgb2theSB3aXRoIHRoZSB1c2VyIHNpbmNlIHRoZSBzdHlsZSBwcm9wZXJ0aWVzIGRpZCBub3RoaW5nIGJlZm9yZSBbc2luY2UgdGhlIGVsZW1lbnQgd2FzIHBvc2l0aW9uZWQgc3RhdGljXSBhbnl3YXkpLlxuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVsYXRpdmVTdHlsZXMocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBcInRvcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlbGF0aXZlU3R5bGVzKHJlcG9ydGVyLCBlbGVtZW50LCBzdHlsZSwgXCJyaWdodFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlbGF0aXZlU3R5bGVzKHJlcG9ydGVyLCBlbGVtZW50LCBzdHlsZSwgXCJib3R0b21cIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVSZWxhdGl2ZVN0eWxlcyhyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG9uT2JqZWN0TG9hZCgpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIG9iamVjdCBoYXMgYmVlbiBsb2FkZWQsIHdoaWNoIG1lYW5zIHRoYXQgdGhlIGVsZW1lbnQgbm93IGlzIGd1YXJhbnRlZWQgdG8gYmUgYXR0YWNoZWQgdG8gdGhlIERPTS5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwb3NpdGlvbkNoZWNrUGVyZm9ybWVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRlclBvc2l0aW9uU3R5bGVzKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvKmpzaGludCB2YWxpZHRoaXM6IHRydWUgKi9cblxuICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXREb2N1bWVudChlbGVtZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9PcGVyYSAxMiBzZWVtIHRvIGNhbGwgdGhlIG9iamVjdC5vbmxvYWQgYmVmb3JlIHRoZSBhY3R1YWwgZG9jdW1lbnQgaGFzIGJlZW4gY3JlYXRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vU28gaWYgaXQgaXMgbm90IHByZXNlbnQsIHBvbGwgaXQgd2l0aCBhbiB0aW1lb3V0IHVudGlsIGl0IGlzIHByZXNlbnQuXG4gICAgICAgICAgICAgICAgICAgICAgICAvL1RPRE86IENvdWxkIG1heWJlIGJlIGhhbmRsZWQgYmV0dGVyIHdpdGggb2JqZWN0Lm9ucmVhZHlzdGF0ZWNoYW5nZSBvciBzaW1pbGFyLlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWVsZW1lbnQuY29udGVudERvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiBjaGVja0Zvck9iamVjdERvY3VtZW50KCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnZXREb2N1bWVudChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudC5jb250ZW50RG9jdW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgLy9NdXRhdGluZyB0aGUgb2JqZWN0IGVsZW1lbnQgaGVyZSBzZWVtcyB0byBmaXJlIGFub3RoZXIgbG9hZCBldmVudC5cbiAgICAgICAgICAgICAgICAgICAgLy9NdXRhdGluZyB0aGUgaW5uZXIgZG9jdW1lbnQgb2YgdGhlIG9iamVjdCBlbGVtZW50IGlzIGZpbmUgdGhvdWdoLlxuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqZWN0RWxlbWVudCA9IHRoaXM7XG5cbiAgICAgICAgICAgICAgICAgICAgLy9DcmVhdGUgdGhlIHN0eWxlIGVsZW1lbnQgdG8gYmUgYWRkZWQgdG8gdGhlIG9iamVjdC5cbiAgICAgICAgICAgICAgICAgICAgZ2V0RG9jdW1lbnQob2JqZWN0RWxlbWVudCwgZnVuY3Rpb24gb25PYmplY3REb2N1bWVudFJlYWR5KG9iamVjdERvY3VtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL05vdGlmeSB0aGF0IHRoZSBlbGVtZW50IGlzIHJlYWR5IHRvIGJlIGxpc3RlbmVkIHRvLlxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIFRoZSBlbGVtZW50IG1heSBiZSBkZXRhY2hlZCBmcm9tIHRoZSBET00sIGFuZCBzb21lIGJyb3dzZXJzIGRvZXMgbm90IHN1cHBvcnQgc3R5bGUgcmVzb2x2aW5nIG9mIGRldGFjaGVkIGVsZW1lbnRzLlxuICAgICAgICAgICAgICAgIC8vIFRoZSBhbHRlclBvc2l0aW9uU3R5bGVzIG5lZWRzIHRvIGJlIGRlbGF5ZWQgdW50aWwgd2Uga25vdyB0aGUgZWxlbWVudCBoYXMgYmVlbiBhdHRhY2hlZCB0byB0aGUgRE9NICh3aGljaCB3ZSBhcmUgc3VyZSBvZiB3aGVuIHRoZSBvbk9iamVjdExvYWQgaGFzIGJlZW4gZmlyZWQpLCBpZiBzdHlsZSByZXNvbHV0aW9uIGlzIG5vdCBwb3NzaWJsZS5cbiAgICAgICAgICAgICAgICBpZiAoc3R5bGUucG9zaXRpb24gIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgYWx0ZXJQb3NpdGlvblN0eWxlcyhzdHlsZSk7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2hlY2tQZXJmb3JtZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vQWRkIGFuIG9iamVjdCBlbGVtZW50IGFzIGEgY2hpbGQgdG8gdGhlIHRhcmdldCBlbGVtZW50IHRoYXQgd2lsbCBiZSBsaXN0ZW5lZCB0byBmb3IgcmVzaXplIGV2ZW50cy5cbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9iamVjdFwiKTtcbiAgICAgICAgICAgICAgICBvYmplY3Quc3R5bGUuY3NzVGV4dCA9IE9CSkVDVF9TVFlMRTtcbiAgICAgICAgICAgICAgICBvYmplY3QudGFiSW5kZXggPSAtMTtcbiAgICAgICAgICAgICAgICBvYmplY3QudHlwZSA9IFwidGV4dC9odG1sXCI7XG4gICAgICAgICAgICAgICAgb2JqZWN0Lm9ubG9hZCA9IG9uT2JqZWN0TG9hZDtcblxuICAgICAgICAgICAgICAgIC8vU2FmYXJpOiBUaGlzIG11c3Qgb2NjdXIgYmVmb3JlIGFkZGluZyB0aGUgb2JqZWN0IHRvIHRoZSBET00uXG4gICAgICAgICAgICAgICAgLy9JRTogRG9lcyBub3QgbGlrZSB0aGF0IHRoaXMgaGFwcGVucyBiZWZvcmUsIGV2ZW4gaWYgaXQgaXMgYWxzbyBhZGRlZCBhZnRlci5cbiAgICAgICAgICAgICAgICBpZighYnJvd3NlckRldGVjdG9yLmlzSUUoKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZGF0YSA9IFwiYWJvdXQ6YmxhbmtcIjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKG9iamVjdCk7XG4gICAgICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub2JqZWN0ID0gb2JqZWN0O1xuXG4gICAgICAgICAgICAgICAgLy9JRTogVGhpcyBtdXN0IG9jY3VyIGFmdGVyIGFkZGluZyB0aGUgb2JqZWN0IHRvIHRoZSBET00uXG4gICAgICAgICAgICAgICAgaWYoYnJvd3NlckRldGVjdG9yLmlzSUUoKSkge1xuICAgICAgICAgICAgICAgICAgICBvYmplY3QuZGF0YSA9IFwiYWJvdXQ6YmxhbmtcIjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGJhdGNoUHJvY2Vzc29yKSB7XG4gICAgICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKG11dGF0ZURvbSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG11dGF0ZURvbSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoYnJvd3NlckRldGVjdG9yLmlzSUUoOCkpIHtcbiAgICAgICAgICAgIC8vSUUgOCBkb2VzIG5vdCBzdXBwb3J0IG9iamVjdHMgcHJvcGVybHkuIEx1Y2tpbHkgdGhleSBkbyBzdXBwb3J0IHRoZSByZXNpemUgZXZlbnQuXG4gICAgICAgICAgICAvL1NvIGRvIG5vdCBpbmplY3QgdGhlIG9iamVjdCBhbmQgbm90aWZ5IHRoYXQgdGhlIGVsZW1lbnQgaXMgYWxyZWFkeSByZWFkeSB0byBiZSBsaXN0ZW5lZCB0by5cbiAgICAgICAgICAgIC8vVGhlIGV2ZW50IGhhbmRsZXIgZm9yIHRoZSByZXNpemUgZXZlbnQgaXMgYXR0YWNoZWQgaW4gdGhlIHV0aWxzLmFkZExpc3RlbmVyIGluc3RlYWQuXG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluamVjdE9iamVjdChlbGVtZW50LCBjYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjaGlsZCBvYmplY3Qgb2YgdGhlIHRhcmdldCBlbGVtZW50LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSB0YXJnZXQgZWxlbWVudC5cbiAgICAgKiBAcmV0dXJucyBUaGUgb2JqZWN0IGVsZW1lbnQgb2YgdGhlIHRhcmdldC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBnZXRPYmplY3QoZWxlbWVudCkge1xuICAgICAgICByZXR1cm4gZ2V0U3RhdGUoZWxlbWVudCkub2JqZWN0O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuaW5zdGFsbChlbGVtZW50KSB7XG4gICAgICAgIGlmKGJyb3dzZXJEZXRlY3Rvci5pc0lFKDgpKSB7XG4gICAgICAgICAgICBlbGVtZW50LmRldGFjaEV2ZW50KFwib25yZXNpemVcIiwgZ2V0U3RhdGUoZWxlbWVudCkub2JqZWN0LnByb3h5KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQ2hpbGQoZ2V0T2JqZWN0KGVsZW1lbnQpKTtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgZ2V0U3RhdGUoZWxlbWVudCkub2JqZWN0O1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1ha2VEZXRlY3RhYmxlOiBtYWtlRGV0ZWN0YWJsZSxcbiAgICAgICAgYWRkTGlzdGVuZXI6IGFkZExpc3RlbmVyLFxuICAgICAgICB1bmluc3RhbGw6IHVuaW5zdGFsbFxuICAgIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2RldGVjdGlvbi1zdHJhdGVneS9vYmplY3QuanNcbi8vIG1vZHVsZSBpZCA9IDEyMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgNCA1IDYgNyA4IDkgMTAgMTEiLCIvKipcbiAqIFJlc2l6ZSBkZXRlY3Rpb24gc3RyYXRlZ3kgdGhhdCBpbmplY3RzIGRpdnMgdG8gZWxlbWVudHMgaW4gb3JkZXIgdG8gZGV0ZWN0IHJlc2l6ZSBldmVudHMgb24gc2Nyb2xsIGV2ZW50cy5cbiAqIEhlYXZpbHkgaW5zcGlyZWQgYnk6IGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJjai9jc3MtZWxlbWVudC1xdWVyaWVzL2Jsb2IvbWFzdGVyL3NyYy9SZXNpemVTZW5zb3IuanNcbiAqL1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGZvckVhY2ggPSByZXF1aXJlKFwiLi4vY29sbGVjdGlvbi11dGlsc1wiKS5mb3JFYWNoO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICBvcHRpb25zICAgICAgICAgICAgID0gb3B0aW9ucyB8fCB7fTtcbiAgICB2YXIgcmVwb3J0ZXIgICAgICAgID0gb3B0aW9ucy5yZXBvcnRlcjtcbiAgICB2YXIgYmF0Y2hQcm9jZXNzb3IgID0gb3B0aW9ucy5iYXRjaFByb2Nlc3NvcjtcbiAgICB2YXIgZ2V0U3RhdGUgICAgICAgID0gb3B0aW9ucy5zdGF0ZUhhbmRsZXIuZ2V0U3RhdGU7XG4gICAgdmFyIGhhc1N0YXRlICAgICAgICA9IG9wdGlvbnMuc3RhdGVIYW5kbGVyLmhhc1N0YXRlO1xuICAgIHZhciBpZEhhbmRsZXIgICAgICAgPSBvcHRpb25zLmlkSGFuZGxlcjtcblxuICAgIGlmICghYmF0Y2hQcm9jZXNzb3IpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyByZXF1aXJlZCBkZXBlbmRlbmN5OiBiYXRjaFByb2Nlc3NvclwiKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlcG9ydGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgcmVxdWlyZWQgZGVwZW5kZW5jeTogcmVwb3J0ZXIuXCIpO1xuICAgIH1cblxuICAgIC8vVE9ETzogQ291bGQgdGhpcyBwZXJoYXBzIGJlIGRvbmUgYXQgaW5zdGFsbGF0aW9uIHRpbWU/XG4gICAgdmFyIHNjcm9sbGJhclNpemVzID0gZ2V0U2Nyb2xsYmFyU2l6ZXMoKTtcblxuICAgIC8vIEluamVjdCB0aGUgc2Nyb2xsYmFyIHN0eWxpbmcgdGhhdCBwcmV2ZW50cyB0aGVtIGZyb20gYXBwZWFyaW5nIHNvbWV0aW1lcyBpbiBDaHJvbWUuXG4gICAgLy8gVGhlIGluamVjdGVkIGNvbnRhaW5lciBuZWVkcyB0byBoYXZlIGEgY2xhc3MsIHNvIHRoYXQgaXQgbWF5IGJlIHN0eWxlZCB3aXRoIENTUyAocHNldWRvIGVsZW1lbnRzKS5cbiAgICB2YXIgc3R5bGVJZCA9IFwiZXJkX3Njcm9sbF9kZXRlY3Rpb25fc2Nyb2xsYmFyX3N0eWxlXCI7XG4gICAgdmFyIGRldGVjdGlvbkNvbnRhaW5lckNsYXNzID0gXCJlcmRfc2Nyb2xsX2RldGVjdGlvbl9jb250YWluZXJcIjtcbiAgICBpbmplY3RTY3JvbGxTdHlsZShzdHlsZUlkLCBkZXRlY3Rpb25Db250YWluZXJDbGFzcyk7XG5cbiAgICBmdW5jdGlvbiBnZXRTY3JvbGxiYXJTaXplcygpIHtcbiAgICAgICAgdmFyIHdpZHRoID0gNTAwO1xuICAgICAgICB2YXIgaGVpZ2h0ID0gNTAwO1xuXG4gICAgICAgIHZhciBjaGlsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNoaWxkLnN0eWxlLmNzc1RleHQgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IFwiICsgd2lkdGgqMiArIFwicHg7IGhlaWdodDogXCIgKyBoZWlnaHQqMiArIFwicHg7IHZpc2liaWxpdHk6IGhpZGRlbjsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO1wiO1xuXG4gICAgICAgIHZhciBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogXCIgKyB3aWR0aCArIFwicHg7IGhlaWdodDogXCIgKyBoZWlnaHQgKyBcInB4OyBvdmVyZmxvdzogc2Nyb2xsOyB2aXNpYmlsaXR5OiBub25lOyB0b3A6IFwiICsgLXdpZHRoKjMgKyBcInB4OyBsZWZ0OiBcIiArIC1oZWlnaHQqMyArIFwicHg7IHZpc2liaWxpdHk6IGhpZGRlbjsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO1wiO1xuXG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjaGlsZCk7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY29udGFpbmVyLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xuXG4gICAgICAgIHZhciB3aWR0aFNpemUgPSB3aWR0aCAtIGNvbnRhaW5lci5jbGllbnRXaWR0aDtcbiAgICAgICAgdmFyIGhlaWdodFNpemUgPSBoZWlnaHQgLSBjb250YWluZXIuY2xpZW50SGVpZ2h0O1xuXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgd2lkdGg6IHdpZHRoU2l6ZSxcbiAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0U2l6ZVxuICAgICAgICB9O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluamVjdFNjcm9sbFN0eWxlKHN0eWxlSWQsIGNvbnRhaW5lckNsYXNzKSB7XG4gICAgICAgIGZ1bmN0aW9uIGluamVjdFN0eWxlKHN0eWxlLCBtZXRob2QpIHtcbiAgICAgICAgICAgIG1ldGhvZCA9IG1ldGhvZCB8fCBmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgc3R5bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICAgICAgICAgICAgc3R5bGVFbGVtZW50LmlubmVySFRNTCA9IHN0eWxlO1xuICAgICAgICAgICAgc3R5bGVFbGVtZW50LmlkID0gc3R5bGVJZDtcbiAgICAgICAgICAgIG1ldGhvZChzdHlsZUVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlRWxlbWVudDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoc3R5bGVJZCkpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXJBbmltYXRpb25DbGFzcyA9IGNvbnRhaW5lckNsYXNzICsgXCJfYW5pbWF0aW9uXCI7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyQW5pbWF0aW9uQWN0aXZlQ2xhc3MgPSBjb250YWluZXJDbGFzcyArIFwiX2FuaW1hdGlvbl9hY3RpdmVcIjtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IFwiLyogQ3JlYXRlZCBieSB0aGUgZWxlbWVudC1yZXNpemUtZGV0ZWN0b3IgbGlicmFyeS4gKi9cXG5cIjtcbiAgICAgICAgICAgIHN0eWxlICs9IFwiLlwiICsgY29udGFpbmVyQ2xhc3MgKyBcIiA+IGRpdjo6LXdlYmtpdC1zY3JvbGxiYXIgeyBkaXNwbGF5OiBub25lOyB9XFxuXFxuXCI7XG4gICAgICAgICAgICBzdHlsZSArPSBcIi5cIiArIGNvbnRhaW5lckFuaW1hdGlvbkFjdGl2ZUNsYXNzICsgXCIgeyAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogMC4xczsgYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjFzOyAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBcIiArIGNvbnRhaW5lckFuaW1hdGlvbkNsYXNzICsgXCI7IGFuaW1hdGlvbi1uYW1lOiBcIiArIGNvbnRhaW5lckFuaW1hdGlvbkNsYXNzICsgXCI7IH1cXG5cIjtcbiAgICAgICAgICAgIHN0eWxlICs9IFwiQC13ZWJraXQta2V5ZnJhbWVzIFwiICsgY29udGFpbmVyQW5pbWF0aW9uQ2xhc3MgKyAgXCIgeyAwJSB7IG9wYWNpdHk6IDE7IH0gNTAlIHsgb3BhY2l0eTogMDsgfSAxMDAlIHsgb3BhY2l0eTogMTsgfSB9XFxuXCI7XG4gICAgICAgICAgICBzdHlsZSArPSBcIkBrZXlmcmFtZXMgXCIgKyBjb250YWluZXJBbmltYXRpb25DbGFzcyArICAgICAgICAgIFwiIHsgMCUgeyBvcGFjaXR5OiAxOyB9IDUwJSB7IG9wYWNpdHk6IDA7IH0gMTAwJSB7IG9wYWNpdHk6IDE7IH0gfVwiO1xuICAgICAgICAgICAgaW5qZWN0U3R5bGUoc3R5bGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkQW5pbWF0aW9uQ2xhc3MoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTmFtZSArPSBcIiBcIiArIGRldGVjdGlvbkNvbnRhaW5lckNsYXNzICsgXCJfYW5pbWF0aW9uX2FjdGl2ZVwiO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGFkZEV2ZW50KGVsLCBuYW1lLCBjYikge1xuICAgICAgICBpZiAoZWwuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBjYik7XG4gICAgICAgIH0gZWxzZSBpZihlbC5hdHRhY2hFdmVudCkge1xuICAgICAgICAgICAgZWwuYXR0YWNoRXZlbnQoXCJvblwiICsgbmFtZSwgY2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9ydGVyLmVycm9yKFwiW3Njcm9sbF0gRG9uJ3Qga25vdyBob3cgdG8gYWRkIGV2ZW50IGxpc3RlbmVycy5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiByZW1vdmVFdmVudChlbCwgbmFtZSwgY2IpIHtcbiAgICAgICAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIobmFtZSwgY2IpO1xuICAgICAgICB9IGVsc2UgaWYoZWwuZGV0YWNoRXZlbnQpIHtcbiAgICAgICAgICAgIGVsLmRldGFjaEV2ZW50KFwib25cIiArIG5hbWUsIGNiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiByZXBvcnRlci5lcnJvcihcIltzY3JvbGxdIERvbid0IGtub3cgaG93IHRvIHJlbW92ZSBldmVudCBsaXN0ZW5lcnMuXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0RXhwYW5kRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0U2hyaW5rRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXIuY2hpbGROb2Rlc1swXS5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMV07XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIHJlc2l6ZSBldmVudCBsaXN0ZW5lciB0byB0aGUgZWxlbWVudC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGhhdmUgdGhlIGxpc3RlbmVyIGFkZGVkLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIFRoZSBsaXN0ZW5lciBjYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggcmVzaXplIGV2ZW50IG9mIHRoZSBlbGVtZW50LiBUaGUgZWxlbWVudCB3aWxsIGJlIGdpdmVuIGFzIGEgcGFyYW1ldGVyIHRvIHRoZSBsaXN0ZW5lciBjYWxsYmFjay5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcihlbGVtZW50LCBsaXN0ZW5lcikge1xuICAgICAgICB2YXIgbGlzdGVuZXJzID0gZ2V0U3RhdGUoZWxlbWVudCkubGlzdGVuZXJzO1xuXG4gICAgICAgIGlmICghbGlzdGVuZXJzLnB1c2gpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBhZGQgbGlzdGVuZXIgdG8gYW4gZWxlbWVudCB0aGF0IGlzIG5vdCBkZXRlY3RhYmxlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLmxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBNYWtlcyBhbiBlbGVtZW50IGRldGVjdGFibGUgYW5kIHJlYWR5IHRvIGJlIGxpc3RlbmVkIGZvciByZXNpemUgZXZlbnRzLiBXaWxsIGNhbGwgdGhlIGNhbGxiYWNrIHdoZW4gdGhlIGVsZW1lbnQgaXMgcmVhZHkgdG8gYmUgbGlzdGVuZWQgZm9yIHJlc2l6ZSBjaGFuZ2VzLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnMgT3B0aW9uYWwgb3B0aW9ucyBvYmplY3QuXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIG1ha2UgZGV0ZWN0YWJsZVxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiB0aGUgZWxlbWVudCBpcyByZWFkeSB0byBiZSBsaXN0ZW5lZCBmb3IgcmVzaXplIGNoYW5nZXMuIFdpbGwgYmUgY2FsbGVkIHdpdGggdGhlIGVsZW1lbnQgYXMgZmlyc3QgcGFyYW1ldGVyLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1ha2VEZXRlY3RhYmxlKG9wdGlvbnMsIGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrID0gZWxlbWVudDtcbiAgICAgICAgICAgIGVsZW1lbnQgPSBvcHRpb25zO1xuICAgICAgICAgICAgb3B0aW9ucyA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuICAgICAgICBmdW5jdGlvbiBkZWJ1ZygpIHtcbiAgICAgICAgICAgIGlmIChvcHRpb25zLmRlYnVnKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIGFyZ3MudW5zaGlmdChpZEhhbmRsZXIuZ2V0KGVsZW1lbnQpLCBcIlNjcm9sbDogXCIpO1xuICAgICAgICAgICAgICAgIGlmIChyZXBvcnRlci5sb2cuYXBwbHkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVwb3J0ZXIubG9nLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJncy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0ZXIubG9nKGFyZ3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNEZXRhY2hlZChlbGVtZW50KSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBpc0luRG9jdW1lbnQoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50ID09PSBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keSB8fCBlbGVtZW50Lm93bmVyRG9jdW1lbnQuYm9keS5jb250YWlucyhlbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCFpc0luRG9jdW1lbnQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmlyZUZveCByZXR1cm5zIG51bGwgc3R5bGUgaW4gaGlkZGVuIGlmcmFtZXMuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vd25yL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL2lzc3Vlcy82OCBhbmQgaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzk1NTIwXG4gICAgICAgICAgICBpZiAoZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc1VucmVuZGVyZWQoZWxlbWVudCkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgdGhlIGFic29sdXRlIHBvc2l0aW9uZWQgY29udGFpbmVyIHNpbmNlIHRoZSB0b3AgbGV2ZWwgY29udGFpbmVyIGlzIGRpc3BsYXk6IGlubGluZS5cbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXIuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGdldENvbXB1dGVkU3R5bGUoY29udGFpbmVyKTtcbiAgICAgICAgICAgIHJldHVybiAhc3R5bGUud2lkdGggfHwgc3R5bGUud2lkdGguaW5kZXhPZihcInB4XCIpID09PSAtMTsgLy9DYW4gb25seSBjb21wdXRlIHBpeGVsIHZhbHVlIHdoZW4gcmVuZGVyZWQuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRTdHlsZSgpIHtcbiAgICAgICAgICAgIC8vIFNvbWUgYnJvd3NlcnMgb25seSBmb3JjZSBsYXlvdXRzIHdoZW4gYWN0dWFsbHkgcmVhZGluZyB0aGUgc3R5bGUgcHJvcGVydGllcyBvZiB0aGUgc3R5bGUgb2JqZWN0LCBzbyBtYWtlIHN1cmUgdGhhdCB0aGV5IGFyZSBhbGwgcmVhZCBoZXJlLFxuICAgICAgICAgICAgLy8gc28gdGhhdCB0aGUgdXNlciBvZiB0aGUgZnVuY3Rpb24gY2FuIGJlIHN1cmUgdGhhdCBpdCB3aWxsIHBlcmZvcm0gdGhlIGxheW91dCBoZXJlLCBpbnN0ZWFkIG9mIGxhdGVyIChpbXBvcnRhbnQgZm9yIGJhdGNoaW5nKS5cbiAgICAgICAgICAgIHZhciBlbGVtZW50U3R5bGUgICAgICAgICAgICA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgc3R5bGUgICAgICAgICAgICAgICAgICAgPSB7fTtcbiAgICAgICAgICAgIHN0eWxlLnBvc2l0aW9uICAgICAgICAgICAgICA9IGVsZW1lbnRTdHlsZS5wb3NpdGlvbjtcbiAgICAgICAgICAgIHN0eWxlLndpZHRoICAgICAgICAgICAgICAgICA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICBzdHlsZS5oZWlnaHQgICAgICAgICAgICAgICAgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcbiAgICAgICAgICAgIHN0eWxlLnRvcCAgICAgICAgICAgICAgICAgICA9IGVsZW1lbnRTdHlsZS50b3A7XG4gICAgICAgICAgICBzdHlsZS5yaWdodCAgICAgICAgICAgICAgICAgPSBlbGVtZW50U3R5bGUucmlnaHQ7XG4gICAgICAgICAgICBzdHlsZS5ib3R0b20gICAgICAgICAgICAgICAgPSBlbGVtZW50U3R5bGUuYm90dG9tO1xuICAgICAgICAgICAgc3R5bGUubGVmdCAgICAgICAgICAgICAgICAgID0gZWxlbWVudFN0eWxlLmxlZnQ7XG4gICAgICAgICAgICBzdHlsZS53aWR0aENTUyAgICAgICAgICAgICAgPSBlbGVtZW50U3R5bGUud2lkdGg7XG4gICAgICAgICAgICBzdHlsZS5oZWlnaHRDU1MgICAgICAgICAgICAgPSBlbGVtZW50U3R5bGUuaGVpZ2h0O1xuICAgICAgICAgICAgcmV0dXJuIHN0eWxlO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gc3RvcmVTdGFydFNpemUoKSB7XG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBnZXRTdHlsZSgpO1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkuc3RhcnRTaXplID0ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiBzdHlsZS53aWR0aCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHN0eWxlLmhlaWdodFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGRlYnVnKFwiRWxlbWVudCBzdGFydCBzaXplXCIsIGdldFN0YXRlKGVsZW1lbnQpLnN0YXJ0U2l6ZSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbml0TGlzdGVuZXJzKCkge1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkubGlzdGVuZXJzID0gW107XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdG9yZVN0eWxlKCkge1xuICAgICAgICAgICAgZGVidWcoXCJzdG9yZVN0eWxlIGludm9rZWQuXCIpO1xuICAgICAgICAgICAgaWYgKCFnZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGhhcyBiZWVuIHVuaW5zdGFsbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gZ2V0U3R5bGUoKTtcbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLnN0eWxlID0gc3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdG9yZUN1cnJlbnRTaXplKGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLmxhc3RXaWR0aCA9IHdpZHRoO1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkubGFzdEhlaWdodCAgPSBoZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRFeHBhbmRDaGlsZEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGdldEV4cGFuZEVsZW1lbnQoZWxlbWVudCkuY2hpbGROb2Rlc1swXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFdpZHRoT2Zmc2V0KCkge1xuICAgICAgICAgICAgcmV0dXJuIDIgKiBzY3JvbGxiYXJTaXplcy53aWR0aCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRIZWlnaHRPZmZzZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gMiAqIHNjcm9sbGJhclNpemVzLmhlaWdodCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRFeHBhbmRXaWR0aCh3aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoICsgMTAgKyBnZXRXaWR0aE9mZnNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RXhwYW5kSGVpZ2h0KGhlaWdodCkge1xuICAgICAgICAgICAgcmV0dXJuIGhlaWdodCArIDEwICsgZ2V0SGVpZ2h0T2Zmc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRTaHJpbmtXaWR0aCh3aWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuIHdpZHRoICogMiArIGdldFdpZHRoT2Zmc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRTaHJpbmtIZWlnaHQoaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gaGVpZ2h0ICogMiArIGdldEhlaWdodE9mZnNldCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcG9zaXRpb25TY3JvbGxiYXJzKGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICAgIHZhciBleHBhbmQgICAgICAgICAgPSBnZXRFeHBhbmRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgdmFyIHNocmluayAgICAgICAgICA9IGdldFNocmlua0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kV2lkdGggICAgID0gZ2V0RXhwYW5kV2lkdGgod2lkdGgpO1xuICAgICAgICAgICAgdmFyIGV4cGFuZEhlaWdodCAgICA9IGdldEV4cGFuZEhlaWdodChoZWlnaHQpO1xuICAgICAgICAgICAgdmFyIHNocmlua1dpZHRoICAgICA9IGdldFNocmlua1dpZHRoKHdpZHRoKTtcbiAgICAgICAgICAgIHZhciBzaHJpbmtIZWlnaHQgICAgPSBnZXRTaHJpbmtIZWlnaHQoaGVpZ2h0KTtcbiAgICAgICAgICAgIGV4cGFuZC5zY3JvbGxMZWZ0ICAgPSBleHBhbmRXaWR0aDtcbiAgICAgICAgICAgIGV4cGFuZC5zY3JvbGxUb3AgICAgPSBleHBhbmRIZWlnaHQ7XG4gICAgICAgICAgICBzaHJpbmsuc2Nyb2xsTGVmdCAgID0gc2hyaW5rV2lkdGg7XG4gICAgICAgICAgICBzaHJpbmsuc2Nyb2xsVG9wICAgID0gc2hyaW5rSGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5qZWN0Q29udGFpbmVyRWxlbWVudCgpIHtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXI7XG5cbiAgICAgICAgICAgIGlmICghY29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgY29udGFpbmVyICAgICAgICAgICAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lICAgICAgICAgPSBkZXRlY3Rpb25Db250YWluZXJDbGFzcztcbiAgICAgICAgICAgICAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCAgICAgPSBcInZpc2liaWxpdHk6IGhpZGRlbjsgZGlzcGxheTogaW5saW5lOyB3aWR0aDogMHB4OyBoZWlnaHQ6IDBweDsgei1pbmRleDogLTE7IG92ZXJmbG93OiBoaWRkZW47IG1hcmdpbjogMDsgcGFkZGluZzogMDtcIjtcbiAgICAgICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXIgPSBjb250YWluZXI7XG4gICAgICAgICAgICAgICAgYWRkQW5pbWF0aW9uQ2xhc3MoY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBlbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG5cbiAgICAgICAgICAgICAgICB2YXIgb25BbmltYXRpb25TdGFydCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25SZW5kZXJlZCAmJiBnZXRTdGF0ZShlbGVtZW50KS5vblJlbmRlcmVkKCk7XG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGFkZEV2ZW50KGNvbnRhaW5lciwgXCJhbmltYXRpb25zdGFydFwiLCBvbkFuaW1hdGlvblN0YXJ0KTtcblxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBldmVudCBoYW5kbGVyIGhlcmUgc28gdGhhdCB0aGV5IG1heSBiZSByZW1vdmVkIHdoZW4gdW5pbnN0YWxsIGlzIGNhbGxlZC5cbiAgICAgICAgICAgICAgICAvLyBTZWUgdW5pbnN0YWxsIGZ1bmN0aW9uIGZvciBhbiBleHBsYW5hdGlvbiB3aHkgaXQgaXMgbmVlZGVkLlxuICAgICAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLm9uQW5pbWF0aW9uU3RhcnQgPSBvbkFuaW1hdGlvblN0YXJ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gY29udGFpbmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5qZWN0U2Nyb2xsRWxlbWVudHMoKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBhbHRlclBvc2l0aW9uU3R5bGVzKCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHlsZSA9IGdldFN0YXRlKGVsZW1lbnQpLnN0eWxlO1xuXG4gICAgICAgICAgICAgICAgaWYoc3R5bGUucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVtb3ZlUmVsYXRpdmVTdHlsZXMgPSBmdW5jdGlvbihyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIHByb3BlcnR5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXROdW1lcmljYWxWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZS5yZXBsYWNlKC9bXi1cXGRcXC5dL2csIFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wZXJ0eV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHZhbHVlICE9PSBcImF1dG9cIiAmJiBnZXROdW1lcmljYWxWYWx1ZSh2YWx1ZSkgIT09IFwiMFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwb3J0ZXIud2FybihcIkFuIGVsZW1lbnQgdGhhdCBpcyBwb3NpdGlvbmVkIHN0YXRpYyBoYXMgc3R5bGUuXCIgKyBwcm9wZXJ0eSArIFwiPVwiICsgdmFsdWUgKyBcIiB3aGljaCBpcyBpZ25vcmVkIGR1ZSB0byB0aGUgc3RhdGljIHBvc2l0aW9uaW5nLiBUaGUgZWxlbWVudCB3aWxsIG5lZWQgdG8gYmUgcG9zaXRpb25lZCByZWxhdGl2ZSwgc28gdGhlIHN0eWxlLlwiICsgcHJvcGVydHkgKyBcIiB3aWxsIGJlIHNldCB0byAwLiBFbGVtZW50OiBcIiwgZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgc28gdGhhdCB0aGVyZSBhcmUgbm8gYWNjaWRlbnRhbCBzdHlsZXMgdGhhdCB3aWxsIG1ha2UgdGhlIGVsZW1lbnQgc3R5bGVkIGRpZmZlcmVudGx5IG5vdyB0aGF0IGlzIGlzIHJlbGF0aXZlLlxuICAgICAgICAgICAgICAgICAgICAvL0lmIHRoZXJlIGFyZSBhbnksIHNldCB0aGVtIHRvIDAgKHRoaXMgc2hvdWxkIGJlIG9rYXkgd2l0aCB0aGUgdXNlciBzaW5jZSB0aGUgc3R5bGUgcHJvcGVydGllcyBkaWQgbm90aGluZyBiZWZvcmUgW3NpbmNlIHRoZSBlbGVtZW50IHdhcyBwb3NpdGlvbmVkIHN0YXRpY10gYW55d2F5KS5cbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVsYXRpdmVTdHlsZXMocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBcInRvcFwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVsYXRpdmVTdHlsZXMocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVSZWxhdGl2ZVN0eWxlcyhyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIFwiYm90dG9tXCIpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVSZWxhdGl2ZVN0eWxlcyhyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldExlZnRUb3BCb3R0b21SaWdodENzc1RleHQobGVmdCwgdG9wLCBib3R0b20sIHJpZ2h0KSB7XG4gICAgICAgICAgICAgICAgbGVmdCA9ICghbGVmdCA/IFwiMFwiIDogKGxlZnQgKyBcInB4XCIpKTtcbiAgICAgICAgICAgICAgICB0b3AgPSAoIXRvcCA/IFwiMFwiIDogKHRvcCArIFwicHhcIikpO1xuICAgICAgICAgICAgICAgIGJvdHRvbSA9ICghYm90dG9tID8gXCIwXCIgOiAoYm90dG9tICsgXCJweFwiKSk7XG4gICAgICAgICAgICAgICAgcmlnaHQgPSAoIXJpZ2h0ID8gXCIwXCIgOiAocmlnaHQgKyBcInB4XCIpKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiBcImxlZnQ6IFwiICsgbGVmdCArIFwiOyB0b3A6IFwiICsgdG9wICsgXCI7IHJpZ2h0OiBcIiArIHJpZ2h0ICsgXCI7IGJvdHRvbTogXCIgKyBib3R0b20gKyBcIjtcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZGVidWcoXCJJbmplY3RpbmcgZWxlbWVudHNcIik7XG5cbiAgICAgICAgICAgIGlmICghZ2V0U3RhdGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBoYXMgYmVlbiB1bmluc3RhbGxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFsdGVyUG9zaXRpb25TdHlsZXMoKTtcblxuICAgICAgICAgICAgdmFyIHJvb3RDb250YWluZXIgPSBnZXRTdGF0ZShlbGVtZW50KS5jb250YWluZXI7XG5cbiAgICAgICAgICAgIGlmICghcm9vdENvbnRhaW5lcikge1xuICAgICAgICAgICAgICAgIHJvb3RDb250YWluZXIgPSBpbmplY3RDb250YWluZXJFbGVtZW50KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIER1ZSB0byB0aGlzIFdlYktpdCBidWcgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTgwODA4IChjdXJyZW50bHkgZml4ZWQgaW4gQmxpbmssIGJ1dCBzdGlsbCBwcmVzZW50IGluIFdlYktpdCBicm93c2VycyBzdWNoIGFzIFNhZmFyaSksXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIGluamVjdCB0d28gY29udGFpbmVycywgb25lIHRoYXQgaXMgd2lkdGgvaGVpZ2h0IDEwMCUgYW5kIGFub3RoZXIgdGhhdCBpcyBsZWZ0L3RvcCAtMXB4IHNvIHRoYXQgdGhlIGZpbmFsIGNvbnRhaW5lciBhbHdheXMgaXMgMXgxIHBpeGVscyBiaWdnZXIgdGhhblxuICAgICAgICAgICAgLy8gdGhlIHRhcmdldGVkIGVsZW1lbnQuXG4gICAgICAgICAgICAvLyBXaGVuIHRoZSBidWcgaXMgcmVzb2x2ZWQsIFwiY29udGFpbmVyQ29udGFpbmVyXCIgbWF5IGJlIHJlbW92ZWQuXG5cbiAgICAgICAgICAgIC8vIFRoZSBvdXRlciBjb250YWluZXIgY2FuIG9jY2FzaW9uYWxseSBiZSBsZXNzIHdpZGUgdGhhbiB0aGUgdGFyZ2V0ZWQgd2hlbiBpbnNpZGUgaW5saW5lIGVsZW1lbnRzIGVsZW1lbnQgaW4gV2ViS2l0IChzZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE1Mjk4MCkuXG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBiZSBubyBwcm9ibGVtIHNpbmNlIHRoZSBpbm5lciBjb250YWluZXIgZWl0aGVyIHdheSBtYWtlcyBzdXJlIHRoZSBpbmplY3RlZCBzY3JvbGwgZWxlbWVudHMgYXJlIGF0IGxlYXN0IDF4MSBweC5cblxuICAgICAgICAgICAgdmFyIHNjcm9sbGJhcldpZHRoICAgICAgICAgID0gc2Nyb2xsYmFyU2l6ZXMud2lkdGg7XG4gICAgICAgICAgICB2YXIgc2Nyb2xsYmFySGVpZ2h0ICAgICAgICAgPSBzY3JvbGxiYXJTaXplcy5oZWlnaHQ7XG4gICAgICAgICAgICB2YXIgY29udGFpbmVyQ29udGFpbmVyU3R5bGUgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgZmxleDogbm9uZTsgb3ZlcmZsb3c6IGhpZGRlbjsgei1pbmRleDogLTE7IHZpc2liaWxpdHk6IGhpZGRlbjsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTsgbGVmdDogMHB4OyB0b3A6IDBweDtcIjtcbiAgICAgICAgICAgIHZhciBjb250YWluZXJTdHlsZSAgICAgICAgICA9IFwicG9zaXRpb246IGFic29sdXRlOyBmbGV4OiBub25lOyBvdmVyZmxvdzogaGlkZGVuOyB6LWluZGV4OiAtMTsgdmlzaWJpbGl0eTogaGlkZGVuOyBcIiArIGdldExlZnRUb3BCb3R0b21SaWdodENzc1RleHQoLSgxICsgc2Nyb2xsYmFyV2lkdGgpLCAtKDEgKyBzY3JvbGxiYXJIZWlnaHQpLCAtc2Nyb2xsYmFySGVpZ2h0LCAtc2Nyb2xsYmFyV2lkdGgpO1xuICAgICAgICAgICAgdmFyIGV4cGFuZFN0eWxlICAgICAgICAgICAgID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IGZsZXg6IG5vbmU7IG92ZXJmbG93OiBzY3JvbGw7IHotaW5kZXg6IC0xOyB2aXNpYmlsaXR5OiBoaWRkZW47IHdpZHRoOiAxMDAlOyBoZWlnaHQ6IDEwMCU7XCI7XG4gICAgICAgICAgICB2YXIgc2hyaW5rU3R5bGUgICAgICAgICAgICAgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgZmxleDogbm9uZTsgb3ZlcmZsb3c6IHNjcm9sbDsgei1pbmRleDogLTE7IHZpc2liaWxpdHk6IGhpZGRlbjsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcIjtcbiAgICAgICAgICAgIHZhciBleHBhbmRDaGlsZFN0eWxlICAgICAgICA9IFwicG9zaXRpb246IGFic29sdXRlOyBsZWZ0OiAwOyB0b3A6IDA7XCI7XG4gICAgICAgICAgICB2YXIgc2hyaW5rQ2hpbGRTdHlsZSAgICAgICAgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgd2lkdGg6IDIwMCU7IGhlaWdodDogMjAwJTtcIjtcblxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lckNvbnRhaW5lciAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBjb250YWluZXIgICAgICAgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgZXhwYW5kICAgICAgICAgICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIGV4cGFuZENoaWxkICAgICAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBzaHJpbmsgICAgICAgICAgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgc2hyaW5rQ2hpbGQgICAgICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG4gICAgICAgICAgICAvLyBTb21lIGJyb3dzZXJzIGNob2tlIG9uIHRoZSByZXNpemUgc3lzdGVtIGJlaW5nIHJ0bCwgc28gZm9yY2UgaXQgdG8gbHRyLiBodHRwczovL2dpdGh1Yi5jb20vd25yL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL2lzc3Vlcy81NlxuICAgICAgICAgICAgLy8gSG93ZXZlciwgZGlyIHNob3VsZCBub3QgYmUgc2V0IG9uIHRoZSB0b3AgbGV2ZWwgY29udGFpbmVyIGFzIGl0IGFsdGVycyB0aGUgZGltZW5zaW9ucyBvZiB0aGUgdGFyZ2V0IGVsZW1lbnQgaW4gc29tZSBicm93c2Vycy5cbiAgICAgICAgICAgIGNvbnRhaW5lckNvbnRhaW5lci5kaXIgICAgICAgICAgICAgID0gXCJsdHJcIjtcblxuICAgICAgICAgICAgY29udGFpbmVyQ29udGFpbmVyLnN0eWxlLmNzc1RleHQgICAgPSBjb250YWluZXJDb250YWluZXJTdHlsZTtcbiAgICAgICAgICAgIGNvbnRhaW5lckNvbnRhaW5lci5jbGFzc05hbWUgICAgICAgID0gZGV0ZWN0aW9uQ29udGFpbmVyQ2xhc3M7XG4gICAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lICAgICAgICAgICAgICAgICA9IGRldGVjdGlvbkNvbnRhaW5lckNsYXNzO1xuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmNzc1RleHQgICAgICAgICAgICAgPSBjb250YWluZXJTdHlsZTtcbiAgICAgICAgICAgIGV4cGFuZC5zdHlsZS5jc3NUZXh0ICAgICAgICAgICAgICAgID0gZXhwYW5kU3R5bGU7XG4gICAgICAgICAgICBleHBhbmRDaGlsZC5zdHlsZS5jc3NUZXh0ICAgICAgICAgICA9IGV4cGFuZENoaWxkU3R5bGU7XG4gICAgICAgICAgICBzaHJpbmsuc3R5bGUuY3NzVGV4dCAgICAgICAgICAgICAgICA9IHNocmlua1N0eWxlO1xuICAgICAgICAgICAgc2hyaW5rQ2hpbGQuc3R5bGUuY3NzVGV4dCAgICAgICAgICAgPSBzaHJpbmtDaGlsZFN0eWxlO1xuXG4gICAgICAgICAgICBleHBhbmQuYXBwZW5kQ2hpbGQoZXhwYW5kQ2hpbGQpO1xuICAgICAgICAgICAgc2hyaW5rLmFwcGVuZENoaWxkKHNocmlua0NoaWxkKTtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChleHBhbmQpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHNocmluayk7XG4gICAgICAgICAgICBjb250YWluZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgICAgIHJvb3RDb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFpbmVyQ29udGFpbmVyKTtcblxuICAgICAgICAgICAgZnVuY3Rpb24gb25FeHBhbmRTY3JvbGwoKSB7XG4gICAgICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25FeHBhbmQgJiYgZ2V0U3RhdGUoZWxlbWVudCkub25FeHBhbmQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gb25TaHJpbmtTY3JvbGwoKSB7XG4gICAgICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25TaHJpbmsgJiYgZ2V0U3RhdGUoZWxlbWVudCkub25TaHJpbmsoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWRkRXZlbnQoZXhwYW5kLCBcInNjcm9sbFwiLCBvbkV4cGFuZFNjcm9sbCk7XG4gICAgICAgICAgICBhZGRFdmVudChzaHJpbmssIFwic2Nyb2xsXCIsIG9uU2hyaW5rU2Nyb2xsKTtcblxuICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGV2ZW50IGhhbmRsZXJzIGhlcmUgc28gdGhhdCB0aGV5IG1heSBiZSByZW1vdmVkIHdoZW4gdW5pbnN0YWxsIGlzIGNhbGxlZC5cbiAgICAgICAgICAgIC8vIFNlZSB1bmluc3RhbGwgZnVuY3Rpb24gZm9yIGFuIGV4cGxhbmF0aW9uIHdoeSBpdCBpcyBuZWVkZWQuXG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vbkV4cGFuZFNjcm9sbCA9IG9uRXhwYW5kU2Nyb2xsO1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25TaHJpbmtTY3JvbGwgPSBvblNocmlua1Njcm9sbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlZ2lzdGVyTGlzdGVuZXJzQW5kUG9zaXRpb25FbGVtZW50cygpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUNoaWxkU2l6ZXMoZWxlbWVudCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICAgICAgICAgIHZhciBleHBhbmRDaGlsZCAgICAgICAgICAgICA9IGdldEV4cGFuZENoaWxkRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB2YXIgZXhwYW5kV2lkdGggICAgICAgICAgICAgPSBnZXRFeHBhbmRXaWR0aCh3aWR0aCk7XG4gICAgICAgICAgICAgICAgdmFyIGV4cGFuZEhlaWdodCAgICAgICAgICAgID0gZ2V0RXhwYW5kSGVpZ2h0KGhlaWdodCk7XG4gICAgICAgICAgICAgICAgZXhwYW5kQ2hpbGQuc3R5bGUud2lkdGggICAgID0gZXhwYW5kV2lkdGggKyBcInB4XCI7XG4gICAgICAgICAgICAgICAgZXhwYW5kQ2hpbGQuc3R5bGUuaGVpZ2h0ICAgID0gZXhwYW5kSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiB1cGRhdGVEZXRlY3RvckVsZW1lbnRzKGRvbmUpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggICAgICAgICAgID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ICAgICAgICAgID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICBkZWJ1ZyhcIlN0b3JpbmcgY3VycmVudCBzaXplXCIsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIHNpemUgb2YgdGhlIGVsZW1lbnQgc3luYyBoZXJlLCBzbyB0aGF0IG11bHRpcGxlIHNjcm9sbCBldmVudHMgbWF5IGJlIGlnbm9yZWQgaW4gdGhlIGV2ZW50IGxpc3RlbmVycy5cbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgdGhlIGlmLWNoZWNrIGluIGhhbmRsZVNjcm9sbCBpcyB1c2VsZXNzLlxuICAgICAgICAgICAgICAgIHN0b3JlQ3VycmVudFNpemUoZWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTaW5jZSB3ZSBkZWxheSB0aGUgcHJvY2Vzc2luZyBvZiB0aGUgYmF0Y2gsIHRoZXJlIGlzIGEgcmlzayB0aGF0IHVuaW5zdGFsbCBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlIHRoZSBiYXRjaCBnZXRzIHRvIGV4ZWN1dGUuXG4gICAgICAgICAgICAgICAgLy8gU2luY2UgdGhlcmUgaXMgbm8gd2F5IHRvIGNhbmNlbCB0aGUgZm4gZXhlY3V0aW9ucywgd2UgbmVlZCB0byBhZGQgYW4gdW5pbnN0YWxsIGd1YXJkIHRvIGFsbCBmbnMgb2YgdGhlIGJhdGNoLlxuXG4gICAgICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKDAsIGZ1bmN0aW9uIHBlcmZvcm1VcGRhdGVDaGlsZFNpemVzKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBoYXMgYmVlbiB1bmluc3RhbGxlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYXJlRWxlbWVudHNJbmplY3RlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBjb250YWluZXIgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3ID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoID0gZWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3ICE9PSB3aWR0aCB8fCBoICE9PSBoZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBvcnRlci53YXJuKGlkSGFuZGxlci5nZXQoZWxlbWVudCksIFwiU2Nyb2xsOiBTaXplIGNoYW5nZWQgYmVmb3JlIHVwZGF0aW5nIGRldGVjdG9yIGVsZW1lbnRzLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUNoaWxkU2l6ZXMoZWxlbWVudCwgd2lkdGgsIGhlaWdodCk7XG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMSwgZnVuY3Rpb24gdXBkYXRlU2Nyb2xsYmFycygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFnZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgaGFzIGJlZW4gdW5pbnN0YWxsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWFyZUVsZW1lbnRzSW5qZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgY29udGFpbmVyIGhhcyBub3QgYmVlbiBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uU2Nyb2xsYmFycyhlbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGlmIChkb25lKSB7XG4gICAgICAgICAgICAgICAgICAgIGJhdGNoUHJvY2Vzc29yLmFkZCgyLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgaGFzIGJlZW4gdW5pbnN0YWxsZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWFyZUVsZW1lbnRzSW5qZWN0ZWQoKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBjb250YWluZXIgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbmUoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBhcmVFbGVtZW50c0luamVjdGVkKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAhIWdldFN0YXRlKGVsZW1lbnQpLmNvbnRhaW5lcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gbm90aWZ5TGlzdGVuZXJzSWZOZWVkZWQoKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gaXNGaXJzdE5vdGlmeSgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldFN0YXRlKGVsZW1lbnQpLmxhc3ROb3RpZmllZFdpZHRoID09PSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVidWcoXCJub3RpZnlMaXN0ZW5lcnNJZk5lZWRlZCBpbnZva2VkXCIpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoZWxlbWVudCk7XG5cbiAgICAgICAgICAgICAgICAvLyBEb24ndCBub3RpZnkgdGhlIGlmIHRoZSBjdXJyZW50IHNpemUgaXMgdGhlIHN0YXJ0IHNpemUsIGFuZCB0aGlzIGlzIHRoZSBmaXJzdCBub3RpZmljYXRpb24uXG4gICAgICAgICAgICAgICAgaWYgKGlzRmlyc3ROb3RpZnkoKSAmJiBzdGF0ZS5sYXN0V2lkdGggPT09IHN0YXRlLnN0YXJ0U2l6ZS53aWR0aCAmJiBzdGF0ZS5sYXN0SGVpZ2h0ID09PSBzdGF0ZS5zdGFydFNpemUuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkZWJ1ZyhcIk5vdCBub3RpZnlpbmc6IFNpemUgaXMgdGhlIHNhbWUgYXMgdGhlIHN0YXJ0IHNpemUsIGFuZCB0aGVyZSBoYXMgYmVlbiBubyBub3RpZmljYXRpb24geWV0LlwiKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyBEb24ndCBub3RpZnkgaWYgdGhlIHNpemUgYWxyZWFkeSBoYXMgYmVlbiBub3RpZmllZC5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUubGFzdFdpZHRoID09PSBzdGF0ZS5sYXN0Tm90aWZpZWRXaWR0aCAmJiBzdGF0ZS5sYXN0SGVpZ2h0ID09PSBzdGF0ZS5sYXN0Tm90aWZpZWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlYnVnKFwiTm90IG5vdGlmeWluZzogU2l6ZSBhbHJlYWR5IG5vdGlmaWVkXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgZGVidWcoXCJDdXJyZW50IHNpemUgbm90IG5vdGlmaWVkLCBub3RpZnlpbmcuLi5cIik7XG4gICAgICAgICAgICAgICAgc3RhdGUubGFzdE5vdGlmaWVkV2lkdGggPSBzdGF0ZS5sYXN0V2lkdGg7XG4gICAgICAgICAgICAgICAgc3RhdGUubGFzdE5vdGlmaWVkSGVpZ2h0ID0gc3RhdGUubGFzdEhlaWdodDtcbiAgICAgICAgICAgICAgICBmb3JFYWNoKGdldFN0YXRlKGVsZW1lbnQpLmxpc3RlbmVycywgZnVuY3Rpb24gKGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RlbmVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBoYW5kbGVSZW5kZXIoKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJzdGFydGFuaW1hdGlvbiB0cmlnZ2VyZWQuXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlzVW5yZW5kZXJlZChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIklnbm9yaW5nIHNpbmNlIGVsZW1lbnQgaXMgc3RpbGwgdW5yZW5kZXJlZC4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlYnVnKFwiRWxlbWVudCByZW5kZXJlZC5cIik7XG4gICAgICAgICAgICAgICAgdmFyIGV4cGFuZCA9IGdldEV4cGFuZEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdmFyIHNocmluayA9IGdldFNocmlua0VsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKGV4cGFuZC5zY3JvbGxMZWZ0ID09PSAwIHx8IGV4cGFuZC5zY3JvbGxUb3AgPT09IDAgfHwgc2hyaW5rLnNjcm9sbExlZnQgPT09IDAgfHwgc2hyaW5rLnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIlNjcm9sbGJhcnMgb3V0IG9mIHN5bmMuIFVwZGF0aW5nIGRldGVjdG9yIGVsZW1lbnRzLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZXRlY3RvckVsZW1lbnRzKG5vdGlmeUxpc3RlbmVyc0lmTmVlZGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVNjcm9sbCgpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcIlNjcm9sbCBkZXRlY3RlZC5cIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNVbnJlbmRlcmVkKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIEVsZW1lbnQgaXMgc3RpbGwgdW5yZW5kZXJlZC4gU2tpcCB0aGlzIHNjcm9sbCBldmVudC5cbiAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJTY3JvbGwgZXZlbnQgZmlyZWQgd2hpbGUgdW5yZW5kZXJlZC4gSWdub3JpbmcuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgICAgIGlmICh3aWR0aCAhPT0gZWxlbWVudC5sYXN0V2lkdGggfHwgaGVpZ2h0ICE9PSBlbGVtZW50Lmxhc3RIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcoXCJFbGVtZW50IHNpemUgY2hhbmdlZC5cIik7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURldGVjdG9yRWxlbWVudHMobm90aWZ5TGlzdGVuZXJzSWZOZWVkZWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiRWxlbWVudCBzaXplIGhhcyBub3QgY2hhbmdlZCAoXCIgKyB3aWR0aCArIFwieFwiICsgaGVpZ2h0ICsgXCIpLlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlYnVnKFwicmVnaXN0ZXJMaXN0ZW5lcnNBbmRQb3NpdGlvbkVsZW1lbnRzIGludm9rZWQuXCIpO1xuXG4gICAgICAgICAgICBpZiAoIWdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgaGFzIGJlZW4gdW5pbnN0YWxsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vblJlbmRlcmVkID0gaGFuZGxlUmVuZGVyO1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25FeHBhbmQgPSBoYW5kbGVTY3JvbGw7XG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vblNocmluayA9IGhhbmRsZVNjcm9sbDtcblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gZ2V0U3RhdGUoZWxlbWVudCkuc3R5bGU7XG4gICAgICAgICAgICB1cGRhdGVDaGlsZFNpemVzKGVsZW1lbnQsIHN0eWxlLndpZHRoLCBzdHlsZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZmluYWxpemVEb21NdXRhdGlvbigpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiZmluYWxpemVEb21NdXRhdGlvbiBpbnZva2VkLlwiKTtcblxuICAgICAgICAgICAgaWYgKCFnZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGhhcyBiZWVuIHVuaW5zdGFsbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHN0eWxlID0gZ2V0U3RhdGUoZWxlbWVudCkuc3R5bGU7XG4gICAgICAgICAgICBzdG9yZUN1cnJlbnRTaXplKGVsZW1lbnQsIHN0eWxlLndpZHRoLCBzdHlsZS5oZWlnaHQpO1xuICAgICAgICAgICAgcG9zaXRpb25TY3JvbGxiYXJzKGVsZW1lbnQsIHN0eWxlLndpZHRoLCBzdHlsZS5oZWlnaHQpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVhZHkoKSB7XG4gICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluc3RhbGwoKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcIkluc3RhbGxpbmcuLi5cIik7XG4gICAgICAgICAgICBpbml0TGlzdGVuZXJzKCk7XG4gICAgICAgICAgICBzdG9yZVN0YXJ0U2l6ZSgpO1xuXG4gICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMCwgc3RvcmVTdHlsZSk7XG4gICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMSwgaW5qZWN0U2Nyb2xsRWxlbWVudHMpO1xuICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKDIsIHJlZ2lzdGVyTGlzdGVuZXJzQW5kUG9zaXRpb25FbGVtZW50cyk7XG4gICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMywgZmluYWxpemVEb21NdXRhdGlvbik7XG4gICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoNCwgcmVhZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVidWcoXCJNYWtpbmcgZGV0ZWN0YWJsZS4uLlwiKTtcblxuICAgICAgICBpZiAoaXNEZXRhY2hlZChlbGVtZW50KSkge1xuICAgICAgICAgICAgZGVidWcoXCJFbGVtZW50IGlzIGRldGFjaGVkXCIpO1xuXG4gICAgICAgICAgICBpbmplY3RDb250YWluZXJFbGVtZW50KCk7XG5cbiAgICAgICAgICAgIGRlYnVnKFwiV2FpdGluZyB1bnRpbCBlbGVtZW50IGlzIGF0dGFjaGVkLi4uXCIpO1xuXG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vblJlbmRlcmVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiRWxlbWVudCBpcyBub3cgYXR0YWNoZWRcIik7XG4gICAgICAgICAgICAgICAgaW5zdGFsbCgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbGwoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVuaW5zdGFsbChlbGVtZW50KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIC8vIFVuaW5zdGFsbCBoYXMgYmVlbiBjYWxsZWQgb24gYSBub24tZXJkIGVsZW1lbnQuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVbmluc3RhbGwgbWF5IGhhdmUgYmVlbiBjYWxsZWQgaW4gdGhlIGZvbGxvd2luZyBzY2VuYXJpb3M6XG4gICAgICAgIC8vICgxKSBSaWdodCBiZXR3ZWVuIHRoZSBzeW5jIGNvZGUgYW5kIGFzeW5jIGJhdGNoIChoZXJlIHN0YXRlLmJ1c3kgPSB0cnVlLCBidXQgbm90aGluZyBoYXZlIGJlZW4gcmVnaXN0ZXJlZCBvciBpbmplY3RlZCkuXG4gICAgICAgIC8vICgyKSBJbiB0aGUgcmVhZHkgY2FsbGJhY2sgb2YgdGhlIGxhc3QgbGV2ZWwgb2YgdGhlIGJhdGNoIGJ5IGFub3RoZXIgZWxlbWVudCAoaGVyZSwgc3RhdGUuYnVzeSA9IHRydWUsIGJ1dCBhbGwgdGhlIHN0dWZmIGhhcyBiZWVuIGluamVjdGVkKS5cbiAgICAgICAgLy8gKDMpIEFmdGVyIHRoZSBpbnN0YWxsYXRpb24gcHJvY2VzcyAoaGVyZSwgc3RhdGUuYnVzeSA9IGZhbHNlIGFuZCBhbGwgdGhlIHN0dWZmIGhhcyBiZWVuIGluamVjdGVkKS5cbiAgICAgICAgLy8gU28gdG8gYmUgb24gdGhlIHNhZmUgc2lkZSwgbGV0J3MgY2hlY2sgZm9yIGVhY2ggdGhpbmcgYmVmb3JlIHJlbW92aW5nLlxuXG4gICAgICAgIC8vIFdlIG5lZWQgdG8gcmVtb3ZlIHRoZSBldmVudCBsaXN0ZW5lcnMsIGJlY2F1c2Ugb3RoZXJ3aXNlIHRoZSBldmVudCBtaWdodCBmaXJlIG9uIGFuIHVuaW5zdGFsbCBlbGVtZW50IHdoaWNoIHJlc3VsdHMgaW4gYW4gZXJyb3Igd2hlbiB0cnlpbmcgdG8gZ2V0IHRoZSBzdGF0ZSBvZiB0aGUgZWxlbWVudC5cbiAgICAgICAgc3RhdGUub25FeHBhbmRTY3JvbGwgJiYgcmVtb3ZlRXZlbnQoZ2V0RXhwYW5kRWxlbWVudChlbGVtZW50KSwgXCJzY3JvbGxcIiwgc3RhdGUub25FeHBhbmRTY3JvbGwpO1xuICAgICAgICBzdGF0ZS5vblNocmlua1Njcm9sbCAmJiByZW1vdmVFdmVudChnZXRTaHJpbmtFbGVtZW50KGVsZW1lbnQpLCBcInNjcm9sbFwiLCBzdGF0ZS5vblNocmlua1Njcm9sbCk7XG4gICAgICAgIHN0YXRlLm9uQW5pbWF0aW9uU3RhcnQgJiYgcmVtb3ZlRXZlbnQoc3RhdGUuY29udGFpbmVyLCBcImFuaW1hdGlvbnN0YXJ0XCIsIHN0YXRlLm9uQW5pbWF0aW9uU3RhcnQpO1xuXG4gICAgICAgIHN0YXRlLmNvbnRhaW5lciAmJiBlbGVtZW50LnJlbW92ZUNoaWxkKHN0YXRlLmNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZURldGVjdGFibGU6IG1ha2VEZXRlY3RhYmxlLFxuICAgICAgICBhZGRMaXN0ZW5lcjogYWRkTGlzdGVuZXIsXG4gICAgICAgIHVuaW5zdGFsbDogdW5pbnN0YWxsXG4gICAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvZGV0ZWN0aW9uLXN0cmF0ZWd5L3Njcm9sbC5qc1xuLy8gbW9kdWxlIGlkID0gMTIwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsImNsYXNzIFJlc3BvbnNpdmVUYWJsZSB7XG4gICAgY29uc3RydWN0b3IoZWwsIGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5lbCA9IGVsO1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmhpZGluZyA9IGZhbHNlO1xuICAgICAgICB0aGlzLndpZHRoID0gbnVsbDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBudWxsO1xuICAgIH1cblxuICAgIHVwZGF0ZVNpemUoKSB7XG4gICAgICAgIHRoaXMud2lkdGggPSB0aGlzLmVsLmNsaWVudFdpZHRoO1xuICAgICAgICB0aGlzLmhlaWdodCA9IHRoaXMuZWwuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIHNob3VsZG50UmVzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy53aWR0aCA9PT0gdGhpcy5lbC5jbGllbnRXaWR0aCAmJiB0aGlzLmhlaWdodCAhPT0gdGhpcy5lbC5jbGllbnRIZWlnaHQ7XG4gICAgfVxuXG4gICAgc2hvdWxkSGlkZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwuY2xpZW50V2lkdGggPCB0aGlzLmVsLnNjcm9sbFdpZHRoO1xuICAgIH1cblxuICAgIHNob3VsZFVuaGlkZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWwuY2xpZW50V2lkdGggPT09IHRoaXMuZWwuc2Nyb2xsV2lkdGggJiYgIXRoaXMuaGlkaW5nO1xuICAgIH1cblxuICAgIGhpZGVDb2x1bW5zKCkge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5jb250ZXh0LnRlbXBsYXRlLmNvbHVtbnNcbiAgICAgICAgICAgIC5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5tZXRhLnZpc2libGUgJiYgIWNvbHVtbi5tZXRhLmhpZGRlbik7XG5cbiAgICAgICAgaWYgKCFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5oaWRpbmcgPSB0cnVlO1xuICAgICAgICBjb2x1bW5zW2NvbHVtbnMubGVuZ3RoIC0gMV0ubWV0YS5oaWRkZW4gPSB0cnVlO1xuXG4gICAgICAgIHRoaXMucmV0cnlGaXQoKTtcbiAgICB9XG5cbiAgICBzaG93Q29sdW1uKCkge1xuICAgICAgICBjb25zdCBjb2x1bW5zID0gdGhpcy5jb250ZXh0LnRlbXBsYXRlLmNvbHVtbnNcbiAgICAgICAgICAgIC5maWx0ZXIoY29sdW1uID0+IGNvbHVtbi5tZXRhLmhpZGRlbik7XG5cbiAgICAgICAgaWYgKCFjb2x1bW5zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29sdW1uc1swXS5tZXRhLmhpZGRlbiA9IGZhbHNlO1xuXG4gICAgICAgIHRoaXMucmV0cnlGaXQoKTtcbiAgICB9XG5cbiAgICByZXNpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLnNob3VsZG50UmVzaXplKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuZml0KCk7XG4gICAgfVxuXG4gICAgcmV0cnlGaXQoKSB7XG4gICAgICAgIHRoaXMuY29udGV4dC4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5maXQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZml0KCkge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRIaWRlKCkpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkZUNvbHVtbnMoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmhpZGluZykge1xuICAgICAgICAgICAgdGhpcy5oaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLnNob3VsZFVuaGlkZSgpKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dDb2x1bW4oKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVzcG9uc2l2ZVRhYmxlO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc3BvbnNpdmUvUmVzcG9uc2l2ZVRhYmxlLmpzIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaW5pdGlhbGlzZWRcbiAgICA/IF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJveFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInRvcC1jb250cm9sc1wiLCB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJoYXMtcGFkZGluZy1zbWFsbCBoYXMtcGFkZGluZy1ib3R0b20tbGFyZ2VcIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHRlbXBsYXRlOiBfdm0udGVtcGxhdGUsXG4gICAgICAgICAgICAgIGkxOG46IF92bS5pMThuLFxuICAgICAgICAgICAgICBsZW5ndGg6IF92bS5sZW5ndGhcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcInVwZGF0ZS1sZW5ndGhcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLmxlbmd0aCA9ICRldmVudFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBcImV4cG9ydC1kYXRhXCI6IF92bS5leHBvcnREYXRhLFxuICAgICAgICAgICAgICByZWxvYWQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5nZXREYXRhKClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcmVzZXQ6IF92bS5yZXNldFByZWZlcmVuY2VzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IF92bS5zZWFyY2gsXG4gICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2VhcmNoID0gJCR2XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwic2VhcmNoXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW3sgbmFtZTogXCJyZXNwb25zaXZlXCIsIHJhd05hbWU6IFwidi1yZXNwb25zaXZlXCIgfV0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlLXJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ0YWJsZVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhYmxlIGlzLWZ1bGx3aWR0aCB2dWUtZGF0YS10YWJsZVwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS50ZW1wbGF0ZS5zdHlsZSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGlkOiBcImlkXCIgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJ0YWJsZS1oZWFkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlLCBpMThuOiBfdm0uaTE4biB9LFxuICAgICAgICAgICAgICAgICAgICBvbjogeyBcInNvcnQtdXBkYXRlXCI6IF92bS5nZXREYXRhIH1cbiAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5oYXNDb250ZW50XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInRhYmxlLWJvZHlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fZyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogX3ZtLmJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogX3ZtLnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaTE4bjogX3ZtLmkxOG4sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImN1c3RvbS1yZW5kZXJcIjogX3ZtLmN1c3RvbVJlbmRlcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cGFuZGVkOiBfdm0uZXhwYW5kZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGFqYXg6IF92bS5hamF4IH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRsaXN0ZW5lcnNcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnRlbXBsYXRlLnRvdGFsICYmIF92bS5oYXNDb250ZW50XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJ0YWJsZS1mb290ZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IF92bS50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogX3ZtLmJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5pMThuXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubG9hZGluZyA/IF9jKFwib3ZlcmxheVwiKSA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uaGFzQ29udGVudFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgdGFibGUtYm90dG9tLWNvbnRyb2xzXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJyZWNvcmRzLWluZm9cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5OiBfdm0uYm9keSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5pMThuLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IF92bS5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlbmd0aDogX3ZtLmxlbmd0aFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLW5hcnJvdyBoYXMtdGV4dC1yaWdodFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicGFnaW5hdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBfdm0uc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IF92bS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWNvcmRzOiBfdm0uYm9keS5maWx0ZXJlZCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5pMThuXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJqdW1wLXRvXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uc3RhcnQgPSAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldERhdGEoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5ib2R5ICYmICFfdm0uYm9keS5jb3VudFxuICAgICAgICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImhhcy10ZXh0LWNlbnRlcmVkIG5vLXJlY29yZHMtZm91bmRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pMThuKFwiTm8gcmVjb3JkcyB3ZXJlIGZvdW5kLlwiKSkgK1xuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICBcIlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMVxuICAgICAgKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMWU1NDE5MzRcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFlNTQxOTM0XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDx2dWUtdGFibGUgOnBhdGg9XCJwYXRoXCJcbiAgICAgICAgOmkxOG49XCJfX1wiXG4gICAgICAgIDpjdXN0b20tcmVuZGVyPVwiY3VzdG9tUmVuZGVyXCJcbiAgICAgICAgaWQ9XCJ0dXRvcmlhbHNcIj5cbiAgICA8L3Z1ZS10YWJsZT5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IFZ1ZVRhYmxlIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHsgVnVlVGFibGUgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwYXRoOiByb3V0ZSgnc3lzdGVtLnR1dG9yaWFscy5pbml0VGFibGUnLCBbXSwgZmFsc2UpLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGN1c3RvbVJlbmRlcihyb3csIHsgbmFtZSB9KSB7XG4gICAgICAgICAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3BsYWNlbWVudCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA8c3BhbiBjbGFzcz1cInRhZyBpcy10YWJsZS10YWcgaXMtaW5mb1wiPiR7cm93W25hbWVdfTwvc3BhbmA7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGByZW5kZXIgZm9yIGNvbHVtbiAke25hbWV9IGlzIG5vdCBkZWZpbmVkLmApO1xuICAgICAgICAgICAgICAgIHJldHVybiByb3dbbmFtZV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL3R1dG9yaWFscy9JbmRleC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidnVlLXRhYmxlXCIsIHtcbiAgICBhdHRyczoge1xuICAgICAgcGF0aDogX3ZtLnBhdGgsXG4gICAgICBpMThuOiBfdm0uX18sXG4gICAgICBcImN1c3RvbS1yZW5kZXJcIjogX3ZtLmN1c3RvbVJlbmRlcixcbiAgICAgIGlkOiBcInR1dG9yaWFsc1wiXG4gICAgfVxuICB9KVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01YTRjZjUxNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNWE0Y2Y1MTZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS90dXRvcmlhbHMvSW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTYzXG4vLyBtb2R1bGUgY2h1bmtzID0gNCJdLCJzb3VyY2VSb290IjoiIn0=