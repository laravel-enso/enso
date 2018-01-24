webpackJsonp([8],{

/***/ 1085:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1539)
/* template */
var __vue_template__ = __webpack_require__(1540)
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

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1151)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1153)
/* template */
var __vue_template__ = __webpack_require__(1154)
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

/***/ 1138:
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

/***/ 1139:
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
var __vue_template__ = __webpack_require__(1214)
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

/***/ 1142:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1143);
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

/***/ 1143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.table.vue-data-table {\n    margin-bottom: 0;\n}\n.table-responsive {\n    position: relative;\n    display: block;\n    width: 100%;\n    min-height: .01%;\n    overflow-x: auto;\n}\n.table-responsive table {\n    font-size: 15px;\n}\ndiv.table-bottom-controls {\n    margin-top: .5rem;\n}\ndiv.no-records-found {\n    margin-top: 20px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/VueTable.vue"],"names":[],"mappings":";AA4XA;IACA,iBAAA;CACA;AAEA;IACA,mBAAA;IACA,eAAA;IACA,YAAA;IACA,iBAAA;IACA,iBAAA;CACA;AAEA;IACA,gBAAA;CACA;AAEA;IACA,kBAAA;CACA;AAEA;IACA,iBAAA;CACA","file":"VueTable.vue","sourcesContent":["<template>\n\n    <div class=\"box\"\n        v-if=\"initialised\">\n        <top-controls :template=\"template\"\n            class=\"has-padding-small has-padding-bottom-large\"\n            :i18n=\"i18n\"\n            :length=\"length\"\n            @update-length=\"length=$event\"\n            @export-data=\"exportData\"\n            @reload=\"getData()\"\n            @reset=\"resetPreferences\"\n            v-model=\"search\">\n        </top-controls>\n        <div class=\"table-responsive\"\n            v-responsive>\n            <table class=\"table is-fullwidth vue-data-table\"\n                :class=\"template.style\"\n                id=\"id\">\n                <table-header :template=\"template\"\n                    :i18n=\"i18n\"\n                    @sort-update=\"getData\">\n                </table-header>\n                <table-body :template=\"template\"\n                    v-on=\"$listeners\"\n                    :body=\"body\"\n                    :start=\"start\"\n                    :i18n=\"i18n\"\n                    :custom-render=\"customRender\"\n                    :expanded=\"expanded\"\n                    @ajax=\"ajax\"\n                    v-if=\"hasContent\">\n                </table-body>\n                <table-footer v-if=\"template.total && hasContent\"\n                    :template=\"template\"\n                    :body=\"body\"\n                    :i18n=\"i18n\">\n                </table-footer>\n            </table>\n            <overlay v-if=\"loading\"></overlay>\n        </div>\n        <div class=\"columns table-bottom-controls\"\n            v-if=\"hasContent\">\n            <div class=\"column\">\n                <records-info :body=\"body\"\n                    :i18n=\"i18n\"\n                    :start=\"start\"\n                    :length=\"length\">\n                </records-info>\n            </div>\n            <div class=\"column is-narrow has-text-right\">\n                <pagination :start=\"start\"\n                    :length=\"length\"\n                    :records=\"body.filtered\"\n                    :i18n=\"i18n\"\n                    @jump-to=\"start = $event;getData()\">\n                </pagination>\n            </div>\n        </div>\n        <div v-if=\"body && !body.count\"\n            class=\"has-text-centered no-records-found\">\n            {{ i18n('No records were found.') }}\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport toastr from 'toastr';\nimport { debounce } from 'lodash';\nimport TopControls from './TopControls.vue';\nimport TableHeader from './TableHeader.vue';\nimport TableBody from './TableBody.vue';\nimport TableFooter from './TableFooter.vue';\nimport RecordsInfo from './RecordsInfo.vue';\nimport Pagination from './Pagination.vue';\nimport Overlay from './Overlay.vue';\nimport vResponsive from './responsive/vResponsive';\n\nexport default {\n    name: 'VueTable',\n\n    components: {\n        TopControls, TableHeader, TableBody, TableFooter, RecordsInfo, Overlay, Pagination,\n    },\n\n    directives: {\n        responsive: vResponsive,\n    },\n\n    props: {\n        id: {\n            type: String,\n            required: true,\n        },\n        path: {\n            type: String,\n            required: true,\n        },\n        filters: {\n            type: Object,\n            default: null,\n        },\n        params: {\n            type: Object,\n            default: null,\n        },\n        intervals: {\n            type: Object,\n            default: null,\n        },\n        customRender: {\n            type: Function,\n            default: (row, column) => {\n                toastr.warning(`'Custom render function is missing for column: ${column.name}'`);\n                return row[column.name];\n            },\n        },\n        i18n: {\n            type: Function,\n            default: value => value,\n        },\n    },\n\n    computed: {\n        preferencesKey() {\n            return `VueTable_${this.id}_preferences`;\n        },\n        preferences() {\n            if (!this.initialised) {\n                return null;\n            }\n\n            return {\n                global: {\n                    length: this.length,\n                    search: this.search,\n                    start: this.start,\n                },\n                template: {\n                    sort: this.template.sort,\n                    style: this.template.style,\n                    align: this.template.align,\n                },\n                columns: this.template.columns.reduce((collector, column) => {\n                    collector.push({\n                        sort: column.meta.sort,\n                        visible: column.meta.visible,\n                    });\n\n                    return collector;\n                }, []),\n            };\n        },\n        hasContent() {\n            return this.body && this.body.count;\n        },\n    },\n\n    data() {\n        return {\n            loading: false,\n            initialised: false,\n            template: null,\n            search: '',\n            start: null,\n            body: null,\n            length: null,\n            expanded: [],\n        };\n    },\n\n    watch: {\n        search: {\n            handler() {\n                this.filterUpdate();\n            },\n        },\n        filters: {\n            handler() {\n                this.filterUpdate();\n            },\n            deep: true,\n        },\n        params: {\n            handler() {\n                this.filterUpdate();\n            },\n            deep: true,\n        },\n        intervals: {\n            handler() {\n                this.filterUpdate();\n            },\n            deep: true,\n        },\n        length: {\n            handler() {\n                this.filterUpdate();\n            },\n        },\n        preferences: {\n            handler() {\n                if (this.hasContent) {\n                    this.savePreferences();\n                }\n            },\n            deep: true,\n        },\n    },\n\n    created() {\n        this.getData = debounce(this.getData, 100);\n        this.init();\n    },\n\n    methods: {\n        init() {\n            axios.get(this.path).then(({ data }) => {\n                this.template = data.template;\n                this.start = 0;\n                [this.length] = this.template.lengthMenu;\n                this.setPreferences();\n                this.getData();\n            }).catch((error) => {\n                const { status, data } = error.response;\n\n                if (status === 555) {\n                    toastr.error(data.message);\n                }\n\n                this.handleError(error);\n            });\n        },\n        setPreferences() {\n            this.setDefaultPreferences();\n\n            if (localStorage.getItem(this.preferencesKey) !== null) {\n                this.setUserPreferences();\n            }\n\n            this.$nextTick(() => {\n                this.initialised = true;\n            });\n        },\n        setDefaultPreferences() {\n            this.template.columns.forEach(({ meta }) => {\n                this.$set(meta, 'sort', null);\n                this.$set(meta, 'hidden', false);\n            });\n\n            this.$set(this.template, 'sort', false);\n        },\n        setUserPreferences() {\n            const prefs = JSON.parse(localStorage.getItem(this.preferencesKey));\n\n            Object.keys(prefs.global).forEach((key) => {\n                this.$set(this, key, prefs.global[key]);\n            });\n\n            Object.keys(prefs.template).forEach((key) => {\n                this.$set(this.template, key, prefs.template[key]);\n            });\n\n            prefs.columns.forEach((column, index) => {\n                Object.keys(column).forEach((key) => {\n                    this.$set(this.template.columns[index].meta, key, column[key]);\n                });\n            });\n        },\n        savePreferences() {\n            localStorage.setItem(this.preferencesKey, JSON.stringify(this.preferences));\n        },\n        resetPreferences() {\n            localStorage.removeItem(this.preferencesKey);\n            this.search = '';\n            this.init();\n        },\n        getData() {\n            this.loading = true;\n            this.expanded = [];\n\n            axios.get(this.template.readPath, { params: this.readRequest() }).then(({ data }) => {\n                this.body = data;\n                this.loading = false;\n            }).catch((error) => {\n                this.handleError(error);\n                this.loading = false;\n            });\n        },\n        readRequest() {\n            return {\n                columns: this.requestColumns(),\n                meta: {\n                    start: this.start,\n                    length: this.length,\n                    sort: this.template.sort,\n                    total: this.template.total,\n                    enum: this.template.enum,\n                    date: this.template.date,\n                    actions: this.template.actions,\n                },\n                search: this.search,\n                appends: this.template.appends,\n                filters: this.filters,\n                intervals: this.intervals,\n                params: this.params,\n            };\n        },\n        requestColumns() {\n            return this.template.columns.reduce((columns, column) => {\n                columns.push({\n                    name: column.name,\n                    data: column.data,\n                    meta: {\n                        searchable: column.meta.searchable,\n                        sortable: column.meta.sortable,\n                        sort: column.meta.sort,\n                        total: column.meta.total,\n                        date: column.meta.date,\n                    },\n                    enum: column.enum,\n                });\n\n                return columns;\n            }, []);\n        },\n        exportData(path) {\n            axios.get(path, { params: this.exportRequest() }).then(({ data }) => {\n                toastr.success(data.message);\n            }).catch((error) => {\n                const { status, data } = error.response;\n\n                if (status === 555) {\n                    toastr.error(data.message);\n                }\n\n                this.handleError(error);\n            });\n        },\n        exportRequest() {\n            return {\n                name: this.template.name,\n                columns: this.template.columns,\n                meta: {\n                    start: 0,\n                    length: this.body.count,\n                    sort: this.template.sort,\n                    enum: this.template.enum,\n                    date: this.template.date,\n                    total: false,\n                },\n                search: this.search,\n                appends: this.template.appends,\n                filters: this.filters,\n                intervals: this.intervals,\n                params: this.params,\n            };\n        },\n        ajax(method, path) {\n            axios[method.toLowerCase()](path).then(({ data }) => {\n                toastr.success(data.message);\n                this.getData();\n            }).catch(error => this.handleError(error));\n        },\n        filterUpdate() {\n            if (!this.initialised) {\n                return;\n            }\n\n            this.start = 0;\n            this.getData();\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .table.vue-data-table {\n        margin-bottom: 0;\n    }\n\n    .table-responsive {\n        position: relative;\n        display: block;\n        width: 100%;\n        min-height: .01%;\n        overflow-x: auto;\n    }\n\n    .table-responsive table {\n        font-size: 15px;\n    }\n\n    div.table-bottom-controls {\n        margin-top: .5rem;\n    }\n\n    div.no-records-found {\n        margin-top: 20px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_toastr__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TopControls_vue__ = __webpack_require__(1145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TopControls_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__TopControls_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TableHeader_vue__ = __webpack_require__(1166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TableHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__TableHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TableBody_vue__ = __webpack_require__(1171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TableBody_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__TableBody_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TableFooter_vue__ = __webpack_require__(1181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TableFooter_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__TableFooter_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RecordsInfo_vue__ = __webpack_require__(1186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__RecordsInfo_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__RecordsInfo_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Pagination_vue__ = __webpack_require__(1191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__Pagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Overlay_vue__ = __webpack_require__(1196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Overlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__Overlay_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__responsive_vResponsive__ = __webpack_require__(1201);
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

/***/ 1145:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1146)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1148)
/* template */
var __vue_template__ = __webpack_require__(1165)
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

/***/ 1146:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1147);
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

/***/ 1147:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.title .icon[data-v-255b68c6] {\n  vertical-align: text-bottom;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/TopControls.vue"],"names":[],"mappings":";AAAA;EACE,4BAA4B;CAAE","file":"TopControls.vue","sourcesContent":[".title .icon {\n  vertical-align: text-bottom; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topControls_LengthMenu_vue__ = __webpack_require__(1149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__topControls_LengthMenu_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__topControls_LengthMenu_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topControls_ColumnVisibility_vue__ = __webpack_require__(1156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__topControls_ColumnVisibility_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__topControls_ColumnVisibility_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topControls_Alignment_vue__ = __webpack_require__(1159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__topControls_Alignment_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__topControls_Alignment_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__topControls_StyleSelector_vue__ = __webpack_require__(1162);
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









__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_9" /* faSync */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_15" /* faUndo */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_2" /* faSearch */]);

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

/***/ 1149:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1150)
/* template */
var __vue_template__ = __webpack_require__(1155)
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

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Dropdown_vue__ = __webpack_require__(1101);
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

/***/ 1151:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1152);
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

/***/ 1152:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.dropdown-menu[data-v-313ea473] {\n  min-width: unset;\n}\n.dropdown-menu .dropdown-content[data-v-313ea473] {\n    min-width: unset;\n    overflow-y: auto;\n}\n.dropdown-menu .dropdown-content a.dropdown-item[data-v-313ea473] {\n      padding: .375rem 1rem;\n}\n.icon.angle[data-v-313ea473] {\n  -webkit-transition: -webkit-transform .300s ease;\n  transition: -webkit-transform .300s ease;\n  transition: transform .300s ease;\n  transition: transform .300s ease, -webkit-transform .300s ease;\n}\n.icon.angle[aria-hidden=\"true\"][data-v-313ea473] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/topControls/Dropdown.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;CAAE;AACnB;IACE,iBAAiB;IACjB,iBAAiB;CAAE;AACnB;MACE,sBAAsB;CAAE;AAE9B;EACE,iDAAiC;EAAjC,yCAAiC;EAAjC,iCAAiC;EAAjC,+DAAiC;CAAE;AACnC;IACE,kCAA0B;YAA1B,0BAA0B;CAAE","file":"Dropdown.vue","sourcesContent":[".dropdown-menu {\n  min-width: unset; }\n  .dropdown-menu .dropdown-content {\n    min-width: unset;\n    overflow-y: auto; }\n    .dropdown-menu .dropdown-content a.dropdown-item {\n      padding: .375rem 1rem; }\n\n.icon.angle {\n  transition: transform .300s ease; }\n  .icon.angle[aria-hidden=\"true\"] {\n    transform: rotate(180deg); }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_click_outside___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_v_click_outside__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid__ = __webpack_require__(11);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid__["h" /* faAngleDown */]);

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

/***/ 1154:
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

/***/ 1155:
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

/***/ 1156:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1157)
/* template */
var __vue_template__ = __webpack_require__(1158)
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

/***/ 1157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dropdown_vue__ = __webpack_require__(1101);
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






__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["I" /* faEye */]);

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

/***/ 1158:
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

/***/ 1159:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1160)
/* template */
var __vue_template__ = __webpack_require__(1161)
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

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dropdown_vue__ = __webpack_require__(1101);
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






__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["d" /* faAlignJustify */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["c" /* faAlignCenter */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["e" /* faAlignLeft */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["f" /* faAlignRight */]);

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
            show: false,
            icons: {
                center: __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["c" /* faAlignCenter */],
                left: __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["e" /* faAlignLeft */],
                right: __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["f" /* faAlignRight */]
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

/***/ 1161:
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
                _vm.show = false
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

/***/ 1162:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1163)
/* template */
var __vue_template__ = __webpack_require__(1164)
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

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Dropdown_vue__ = __webpack_require__(1101);
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






__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_10" /* faTable */]);

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

/***/ 1164:
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

/***/ 1165:
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

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1168);
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

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nth.vue-table-header {\n  white-space: nowrap;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.table-header-controls .sorter {\n  cursor: pointer;\n  opacity: 0.5;\n}\n.table-header-controls .sorter:hover {\n    opacity: 1;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/TableHeader.vue"],"names":[],"mappings":";AAAA;EACE,oBAAoB;EACpB,2BAAsB;MAAtB,sBAAsB;CAAE;AAE1B;EACE,gBAAgB;EAChB,aAAa;CAAE;AACf;IACE,WAAW;CAAE","file":"TableHeader.vue","sourcesContent":["th.vue-table-header {\n  white-space: nowrap;\n  align-content: center; }\n\n.table-header-controls .sorter {\n  cursor: pointer;\n  opacity: 0.5; }\n  .table-header-controls .sorter:hover {\n    opacity: 1; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__ = __webpack_require__(11);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_5" /* faSort */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_7" /* faSortUp */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_6" /* faSortDown */]);

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
            if (!sort) return __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_5" /* faSort */];

            return sort === 'ASC' ? __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_7" /* faSortUp */] : __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_6" /* faSortDown */];
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

/***/ 1170:
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
var __vue_template__ = __webpack_require__(1180)
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

/***/ 1172:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1173);
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

/***/ 1173:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\ndiv.table-crt-no[data-v-5dbfa9fc] {\n  white-space: nowrap;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\ndiv.table-crt-no .crt-no-label[data-v-5dbfa9fc] {\n    margin: auto;\n}\ndiv.table-crt-no .hidden-controls[data-v-5dbfa9fc] {\n    cursor: pointer;\n    margin-left: auto;\n    margin-top: 0.1em;\n}\ntd.table-actions[data-v-5dbfa9fc] {\n  padding: .35em .5em;\n}\ntd.table-actions span.table-action-buttons[data-v-5dbfa9fc] {\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n}\ntd.table-actions .button.is-small.is-table-button[data-v-5dbfa9fc] {\n    height: 1.6em;\n    width: 1.6em;\n    font-size: .9em;\n}\nli.child-row[data-v-5dbfa9fc]:not(:last-child) {\n  border-bottom: 1px solid #efefef;\n}\nli.child-row[data-v-5dbfa9fc] {\n  padding: 0.5em 0;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/TableBody.vue"],"names":[],"mappings":";AAAA;EACE,oBAAoB;EACpB,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAAE;AAChB;IACE,aAAa;CAAE;AACjB;IACE,gBAAgB;IAChB,kBAAkB;IAClB,kBAAkB;CAAE;AAExB;EACE,oBAAoB;CAAE;AACtB;IACE,4BAAqB;IAArB,4BAAqB;IAArB,qBAAqB;CAAE;AACzB;IACE,cAAc;IACd,aAAa;IACb,gBAAgB;CAAE;AAEtB;EACE,iCAAiC;CAAE;AAErC;EACE,iBAAiB;CAAE","file":"TableBody.vue","sourcesContent":["div.table-crt-no {\n  white-space: nowrap;\n  display: flex; }\n  div.table-crt-no .crt-no-label {\n    margin: auto; }\n  div.table-crt-no .hidden-controls {\n    cursor: pointer;\n    margin-left: auto;\n    margin-top: 0.1em; }\n\ntd.table-actions {\n  padding: .35em .5em; }\n  td.table-actions span.table-action-buttons {\n    display: inline-flex; }\n  td.table-actions .button.is-small.is-table-button {\n    height: 1.6em;\n    width: 1.6em;\n    font-size: .9em; }\n\nli.child-row:not(:last-child) {\n  border-bottom: 1px solid #efefef; }\n\nli.child-row {\n  padding: 0.5em 0; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue__ = __webpack_require__(1175);
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






__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["V" /* faMinusSquare */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_0" /* faPlusSquare */]);

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

/***/ 1175:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1176)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1178)
/* template */
var __vue_template__ = __webpack_require__(1179)
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

/***/ 1176:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1177);
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

/***/ 1177:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.modal.is-active {\n    z-index: 1100;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/Modal.vue"],"names":[],"mappings":";AA8DA;IACA,cAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n\n    <transition enter-active-class=\"animated fadeIn\"\n        leave-active-class=\"animated fadeOut\">\n        <div class=\"modal\"\n            :class=\"{ 'is-active': show }\"\n            v-if=\"show\">\n            <div class=\"modal-background\"></div>\n            <div class=\"table-modal modal-content\">\n                <div class=\"box\">\n                    <slot name=\"content\">\n                        <h5 class=\"subtitle is-5\">\n                            {{ i18n(message || \"Are you sure that you want to perform this action?\") }}\n                        </h5>\n                    </slot>\n                    <hr>\n                    <div class=\"level\">\n                        <div class=\"level-left\"></div>\n                        <div class=\"level-right\">\n                            <div class=\"level-item\">\n                                <slot name=\"controls\">\n                                    <button class=\"button is-success\"\n                                          @click=\"$emit('cancel-action')\">\n                                          {{ i18n(\"Cancel\") }}\n                                      </button>\n                                      <button class=\"button is-danger has-margin-left-small\"\n                                        @click=\"$emit('commit-action')\">\n                                        {{ i18n(\"Yes\") }}\n                                    </button>\n                                </slot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </transition>\n\n</template>\n\n<script>\n\nexport default {\n    props: {\n        show: {\n            type: Boolean,\n            required: true,\n        },\n        message: {\n            type: String,\n            default: null,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .modal.is-active {\n        z-index: 1100;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1178:
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

/***/ 1179:
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

/***/ 1180:
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

/***/ 1182:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1183);
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

/***/ 1183:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"TableFooter.vue","sourceRoot":""}]);

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

/***/ 1185:
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

/***/ 1187:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1188);
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

/***/ 1188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.table-entries-info {\n    font-size: 15px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/RecordsInfo.vue"],"names":[],"mappings":";AAyCA;IACA,gBAAA;CACA","file":"RecordsInfo.vue","sourcesContent":["<template>\n\n    <span class=\"table-entries-info\">\n        {{ `${i18n('From')} ${start + 1} ${i18n('to')} ${(start + length) <= body.filtered ? start + length : body.filtered} \\\n        ${i18n('of')} ${body.filtered} ${i18n('entries')}` }}\n        <span v-if=\"body.filtered !== body.count\">\n            {{ `(${i18n('filtered')} ${i18n('from')} ${body.count} \\\n            ${i18n('total')} ${i18n('records')})` }}\n        </span>\n    </span>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'RecordsInfo',\n\n    props: {\n        start: {\n            type: Number,\n            required: true,\n        },\n        length: {\n            type: Number,\n            required: true,\n        },\n        body: {\n            type: Object,\n            required: true,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .table-entries-info {\n        font-size: 15px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

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

/***/ 1190:
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

/***/ 1191:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1192)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1194)
/* template */
var __vue_template__ = __webpack_require__(1195)
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

/***/ 1192:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1193);
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

/***/ 1193:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nnav.table-navigation {\n    max-width: 425px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/Pagination.vue"],"names":[],"mappings":";AA+HA;IACA,iBAAA;CACA","file":"Pagination.vue","sourcesContent":["<template>\n\n    <nav class=\"table-pagination pagination is-small\"\n        role=\"navigation\"\n        aria-label=\"pagination\">\n        <a class=\"pagination-previous\"\n            :disabled=\"page === 1\"\n            @click=\"jumpTo(page - 1)\">\n            {{ i18n('Previous') }}\n        </a>\n        <a class=\"pagination-next\"\n            :disabled=\"page === pages\"\n            @click=\"jumpTo(page + 1)\">\n            {{ i18n('Next') }}\n        </a>\n        <ul class=\"pagination-list\">\n            <li>\n                <a class=\"pagination-link\"\n                    :class=\"{ 'is-current': page === 1 }\"\n                    @click=\"jumpTo(1)\">\n                    1\n                </a>\n            </li>\n            <li v-if=\"pages > 5 && !atStart\">\n                <span class=\"pagination-ellipsis\">\n                    &hellip;\n                </span>\n            </li>\n            <li v-for=\"i in middlePages\"\n                :key=\"i\">\n                <a class=\"pagination-link\"\n                    :class=\"{ 'is-current': page === i }\"\n                    @click=\"jumpTo(i)\">\n                    {{ i }}\n                </a>\n            </li>\n            <li v-if=\"pages > 5 && !atEnd\">\n                <span class=\"pagination-ellipsis\">\n                    &hellip;\n                </span>\n            </li>\n            <li v-if=\"pages > 1\">\n                <a class=\"pagination-link\"\n                    :class=\"{ 'is-current': page === pages }\"\n                    @click=\"jumpTo(pages)\">\n                    {{ pages }}\n                </a>\n            </li>\n        </ul>\n    </nav>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'Pagination',\n\n    props: {\n        records: {\n            type: Number,\n            required: true,\n        },\n        start: {\n            type: Number,\n            required: true,\n        },\n        length: {\n            type: Number,\n            required: true,\n        },\n        i18n: {\n            type: Function,\n            required: true,\n        },\n    },\n\n    computed: {\n        page() {\n            return (this.start / this.length) + 1;\n        },\n        pages() {\n            return Math.ceil(this.records / this.length);\n        },\n        atStart() {\n            return this.page < 4;\n        },\n        atEnd() {\n            return this.pages - this.page < 3;\n        },\n        middlePages() {\n            const pages = [];\n\n            if (this.atStart) {\n                const max = Math.min(this.pages - 1, 4);\n                for (let i = 2; i <= max; i++) {\n                    pages.push(i);\n                }\n\n                return pages;\n            }\n\n            if (this.atEnd) {\n                pages.push(this.pages - 3, this.pages - 2, this.pages - 1);\n                return pages;\n            }\n\n            pages.push(this.page - 1, this.page, this.page + 1);\n\n            return pages;\n        },\n    },\n\n    methods: {\n        jumpTo(page) {\n            if (page === this.page || page < 1 || page > this.pages) {\n                return;\n            }\n\n            this.$emit('jump-to', (page - 1) * this.length);\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    nav.table-navigation {\n        max-width: 425px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1194:
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

/***/ 1195:
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

/***/ 1196:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1197)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1199)
/* template */
var __vue_template__ = __webpack_require__(1200)
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

/***/ 1197:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1198);
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

/***/ 1198:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.vdt-overlay {\n    background: rgba(255, 255, 255, 0.4);\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.vdt-overlay-loader {\n    margin: auto;\n    -webkit-animation: spinAround 500ms infinite linear;\n    animation: spinAround 500ms infinite linear;\n    border-radius: 290486px;\n    content: \"\";\n    display: block;\n    position: relative;\n    width: 2em;\n    height: 2em;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vuedatatable/resources/assets/js/components/enso/vuedatatable/Overlay.vue"],"names":[],"mappings":";AA6BA;IACA,qCAAA;IACA,qBAAA;IAAA,qBAAA;IAAA,cAAA;CACA;AAEA;IACA,aAAA;IACA,oDAAA;IACA,4CAAA;IACA,wBAAA;IACA,YAAA;IACA,eAAA;IACA,mBAAA;IACA,WAAA;IACA,YAAA;CACA","file":"Overlay.vue","sourcesContent":["<template>\n\n    <div class=\"vdt-overlay is-overlay\">\n        <div class=\"vdt-overlay-loader\"\n            :style=\"overlay\">\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nexport default {\n    name: 'Overlay',\n\n    computed: {\n        overlay() {\n            return {\n                border: '2px solid #00d1b2',\n                'border-right-color': 'transparent',\n                'border-top-color': 'transparent',\n            };\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .vdt-overlay {\n        background: rgba(255, 255, 255, 0.4);\n        display: flex;\n    }\n\n    .vdt-overlay-loader {\n        margin: auto;\n        -webkit-animation: spinAround 500ms infinite linear;\n        animation: spinAround 500ms infinite linear;\n        border-radius: 290486px;\n        content: \"\";\n        display: block;\n        position: relative;\n        width: 2em;\n        height: 2em;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1199:
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

/***/ 1200:
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

/***/ 1201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_resize_detector__ = __webpack_require__(1202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_element_resize_detector___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_element_resize_detector__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ResponsiveTable__ = __webpack_require__(1213);



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

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var forEach                 = __webpack_require__(1138).forEach;
var elementUtilsMaker       = __webpack_require__(1203);
var listenerHandlerMaker    = __webpack_require__(1204);
var idGeneratorMaker        = __webpack_require__(1205);
var idHandlerMaker          = __webpack_require__(1206);
var reporterMaker           = __webpack_require__(1207);
var browserDetector         = __webpack_require__(1139);
var batchProcessorMaker     = __webpack_require__(1208);
var stateHandler            = __webpack_require__(1210);

//Detection strategies.
var objectStrategyMaker     = __webpack_require__(1211);
var scrollStrategyMaker     = __webpack_require__(1212);

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

/***/ 1203:
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

/***/ 1204:
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

/***/ 1205:
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

/***/ 1206:
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

/***/ 1207:
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

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(1209);

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

/***/ 1209:
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

/***/ 1210:
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

/***/ 1211:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects objects to elements in order to detect resize events.
 * Heavily inspired by: http://www.backalleycoder.com/2013/03/18/cross-browser-event-based-element-resize-detection/
 */



var browserDetector = __webpack_require__(1139);

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

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Resize detection strategy that injects divs to elements in order to detect resize events on scroll events.
 * Heavily inspired by: https://github.com/marcj/css-element-queries/blob/master/src/ResizeSensor.js
 */



var forEach = __webpack_require__(1138).forEach;

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

/***/ 1213:
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

/***/ 1214:
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

/***/ 1539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_vuedatatable_VueTable_vue__ = __webpack_require__(1141);
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
            path: route('system.menus.initTable', [], false)
        };
    }
});

/***/ }),

/***/ 1540:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("vue-table", {
    attrs: { path: _vm.path, i18n: _vm.__, id: "menus" }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9tZW51cy9JbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0Ryb3Bkb3duLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2NvbGxlY3Rpb24tdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9icm93c2VyLWRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZT8xOTE1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWU/N2NhYSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVG9wQ29udHJvbHMudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWU/MjI1OCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVG9wQ29udHJvbHMudnVlP2EyMWYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvTGVuZ3RoTWVudS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0Ryb3Bkb3duLnZ1ZT9kYzRkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Ecm9wZG93bi52dWU/YTUxMCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvRHJvcGRvd24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Ecm9wZG93bi52dWU/MTZhNSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvTGVuZ3RoTWVudS52dWU/M2I5YyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQ29sdW1uVmlzaWJpbGl0eS52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQ29sdW1uVmlzaWJpbGl0eS52dWU/MTkzZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvQWxpZ25tZW50LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0FsaWdubWVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0FsaWdubWVudC52dWU/ZWZhMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvU3R5bGVTZWxlY3Rvci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvU3R5bGVTZWxlY3Rvci52dWU/OTc4NyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVG9wQ29udHJvbHMudnVlPzliYzciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlP2RiNjYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZT9hNjg3Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWU/NDZiNCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVCb2R5LnZ1ZT85MTE0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlPzM2ZDEiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZT84N2JkIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWU/NzAxNiIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlPzBkNGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWU/NDcwZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWU/NzJiNyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlPzMxYzciLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZT8xMmMzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZT8wM2YxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9SZWNvcmRzSW5mby52dWU/Y2FlYyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlPzlmNTciLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZT9hZjdhIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZT9iNTQ3Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlPzBjNWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZT8wYzc1Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZT80NmFmIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlPzc4ODAiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc3BvbnNpdmUvdlJlc3BvbnNpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2VsZW1lbnQtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9saXN0ZW5lci1oYW5kbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvaWQtZ2VuZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvaWQtaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL3JlcG9ydGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9iYXRjaC1wcm9jZXNzb3Ivc3JjL2JhdGNoLXByb2Nlc3Nvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvYmF0Y2gtcHJvY2Vzc29yL3NyYy91dGlscy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL3N0YXRlLWhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9kZXRlY3Rpb24tc3RyYXRlZ3kvb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvZGV0ZWN0aW9uLXN0cmF0ZWd5L3Njcm9sbC5qcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvcmVzcG9uc2l2ZS9SZXNwb25zaXZlVGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZT9mOTEzIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9tZW51cy9JbmRleC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vbWVudXMvSW5kZXgudnVlPzc4MzIiXSwibmFtZXMiOlsiaW5zZXJ0ZWQiLCJlbCIsImJpbmRpbmciLCJjb250ZXh0IiwidGFibGUiLCJlcmQiLCJyZXNpemVEZXRlY3RvciIsInN0cmF0ZWd5IiwicmVzaXplIiwibGlzdGVuVG8iLCJSZXNwb25zaXZlVGFibGUiLCJoaWRpbmciLCJ3aWR0aCIsImhlaWdodCIsImNsaWVudFdpZHRoIiwiY2xpZW50SGVpZ2h0Iiwic2Nyb2xsV2lkdGgiLCJjb2x1bW5zIiwidGVtcGxhdGUiLCJmaWx0ZXIiLCJjb2x1bW4iLCJtZXRhIiwidmlzaWJsZSIsImhpZGRlbiIsImxlbmd0aCIsInJldHJ5Rml0Iiwic2hvdWxkbnRSZXNpemUiLCJmaXQiLCIkbmV4dFRpY2siLCJzaG91bGRIaWRlIiwiaGlkZUNvbHVtbnMiLCJzaG91bGRVbmhpZGUiLCJzaG93Q29sdW1uIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDZDQUFpVjtBQUNqVjtBQUNBLCtDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FD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O0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBOztBQUVBO0FBQ0EsOEVBQThFO0FBQzlFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCxlQUFlO0FBQ3hFOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7O0FDaFVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQixRQUFRO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtB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RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSkE7QUFDQTs7QUFFQTtrQkFHQTs7QUFDQSx1R0FHQTs7MEJBQ0E7O3NEQUdBO0FBRkE7QUFHQTtBQVhBLEc7Ozs7Ozs7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiOC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbmRleC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTQ0MjZiYjU0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL21lbnVzL0luZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NDI2YmI1NFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ0MjZiYjU0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9tZW51cy9JbmRleC52dWVcbi8vIG1vZHVsZSBpZCA9IDEwODVcbi8vIG1vZHVsZSBjaHVua3MgPSA4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zMTNlYTQ3M1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Ryb3Bkb3duLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRHJvcGRvd24udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0zMTNlYTQ3M1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRHJvcGRvd24udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi0zMTNlYTQ3M1wiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvRHJvcGRvd24udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTMxM2VhNDczXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMzEzZWE0NzNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Ecm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDExMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gbW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuLyoqXG4gKiBMb29wcyB0aHJvdWdoIHRoZSBjb2xsZWN0aW9uIGFuZCBjYWxscyB0aGUgY2FsbGJhY2sgZm9yIGVhY2ggZWxlbWVudC4gaWYgdGhlIGNhbGxiYWNrIHJldHVybnMgdHJ1dGh5LCB0aGUgbG9vcCBpcyBicm9rZW4gYW5kIHJldHVybnMgdGhlIHNhbWUgdmFsdWUuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0geyp9IGNvbGxlY3Rpb24gVGhlIGNvbGxlY3Rpb24gdG8gbG9vcCB0aHJvdWdoLiBOZWVkcyB0byBoYXZlIGEgbGVuZ3RoIHByb3BlcnR5IHNldCBhbmQgaGF2ZSBpbmRpY2VzIHNldCBmcm9tIDAgdG8gbGVuZ3RoIC0gMS5cbiAqIEBwYXJhbSB7ZnVuY3Rpb259IGNhbGxiYWNrIFRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgZm9yIGVhY2ggZWxlbWVudC4gVGhlIGVsZW1lbnQgd2lsbCBiZSBnaXZlbiBhcyBhIHBhcmFtZXRlciB0byB0aGUgY2FsbGJhY2suIElmIHRoaXMgY2FsbGJhY2sgcmV0dXJucyB0cnV0aHksIHRoZSBsb29wIGlzIGJyb2tlbiBhbmQgdGhlIHNhbWUgdmFsdWUgaXMgcmV0dXJuZWQuXG4gKiBAcmV0dXJucyB7Kn0gVGhlIHZhbHVlIHRoYXQgYSBjYWxsYmFjayBoYXMgcmV0dXJuZWQgKGlmIHRydXRoeSkuIE90aGVyd2lzZSBub3RoaW5nLlxuICovXG51dGlscy5mb3JFYWNoID0gZnVuY3Rpb24oY29sbGVjdGlvbiwgY2FsbGJhY2spIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgY29sbGVjdGlvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gY2FsbGJhY2soY29sbGVjdGlvbltpXSk7XG4gICAgICAgIGlmKHJlc3VsdCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgIH1cbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvY29sbGVjdGlvbi11dGlscy5qc1xuLy8gbW9kdWxlIGlkID0gMTEzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGV0ZWN0b3IgPSBtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5kZXRlY3Rvci5pc0lFID0gZnVuY3Rpb24odmVyc2lvbikge1xuICAgIGZ1bmN0aW9uIGlzQW55SWVWZXJzaW9uKCkge1xuICAgICAgICB2YXIgYWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIHJldHVybiBhZ2VudC5pbmRleE9mKFwibXNpZVwiKSAhPT0gLTEgfHwgYWdlbnQuaW5kZXhPZihcInRyaWRlbnRcIikgIT09IC0xIHx8IGFnZW50LmluZGV4T2YoXCIgZWRnZS9cIikgIT09IC0xO1xuICAgIH1cblxuICAgIGlmKCFpc0FueUllVmVyc2lvbigpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZighdmVyc2lvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvL1NoYW1lbGVzc2x5IHN0b2xlbiBmcm9tIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL3BhZG9sc2V5LzUyNzY4M1xuICAgIHZhciBpZVZlcnNpb24gPSAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHVuZGVmLFxuICAgICAgICAgICAgdiA9IDMsXG4gICAgICAgICAgICBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLFxuICAgICAgICAgICAgYWxsID0gZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaVwiKTtcblxuICAgICAgICBkbyB7XG4gICAgICAgICAgICBkaXYuaW5uZXJIVE1MID0gXCI8IS0tW2lmIGd0IElFIFwiICsgKCsrdikgKyBcIl0+PGk+PC9pPjwhW2VuZGlmXS0tPlwiO1xuICAgICAgICB9XG4gICAgICAgIHdoaWxlIChhbGxbMF0pO1xuXG4gICAgICAgIHJldHVybiB2ID4gNCA/IHYgOiB1bmRlZjtcbiAgICB9KCkpO1xuXG4gICAgcmV0dXJuIHZlcnNpb24gPT09IGllVmVyc2lvbjtcbn07XG5cbmRldGVjdG9yLmlzTGVnYWN5T3BlcmEgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISF3aW5kb3cub3BlcmE7XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2Jyb3dzZXItZGV0ZWN0b3IuanNcbi8vIG1vZHVsZSBpZCA9IDExMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlNTQxOTM0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZVRhYmxlLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVnVlVGFibGUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xZTU0MTkzNFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Z1ZVRhYmxlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xZTU0MTkzNFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFlNTQxOTM0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlNTQxOTM0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZVRhYmxlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiOTZlYzU5NDRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWU1NDE5MzRcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlVGFibGUudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFlNTQxOTM0XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZVRhYmxlLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZTU0MTkzNFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFibGUudnVlLWRhdGEtdGFibGUge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4udGFibGUtcmVzcG9uc2l2ZSB7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAuMDElO1xcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xcbn1cXG4udGFibGUtcmVzcG9uc2l2ZSB0YWJsZSB7XFxuICAgIGZvbnQtc2l6ZTogMTVweDtcXG59XFxuZGl2LnRhYmxlLWJvdHRvbS1jb250cm9scyB7XFxuICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbn1cXG5kaXYubm8tcmVjb3Jkcy1mb3VuZCB7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVnVlVGFibGUudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE0WEE7SUFDQSxpQkFBQTtDQUNBO0FBRUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7SUFDQSxZQUFBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtDQUNBO0FBRUE7SUFDQSxnQkFBQTtDQUNBO0FBRUE7SUFDQSxrQkFBQTtDQUNBO0FBRUE7SUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJWdWVUYWJsZS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJib3hcXFwiXFxuICAgICAgICB2LWlmPVxcXCJpbml0aWFsaXNlZFxcXCI+XFxuICAgICAgICA8dG9wLWNvbnRyb2xzIDp0ZW1wbGF0ZT1cXFwidGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcImhhcy1wYWRkaW5nLXNtYWxsIGhhcy1wYWRkaW5nLWJvdHRvbS1sYXJnZVxcXCJcXG4gICAgICAgICAgICA6aTE4bj1cXFwiaTE4blxcXCJcXG4gICAgICAgICAgICA6bGVuZ3RoPVxcXCJsZW5ndGhcXFwiXFxuICAgICAgICAgICAgQHVwZGF0ZS1sZW5ndGg9XFxcImxlbmd0aD0kZXZlbnRcXFwiXFxuICAgICAgICAgICAgQGV4cG9ydC1kYXRhPVxcXCJleHBvcnREYXRhXFxcIlxcbiAgICAgICAgICAgIEByZWxvYWQ9XFxcImdldERhdGEoKVxcXCJcXG4gICAgICAgICAgICBAcmVzZXQ9XFxcInJlc2V0UHJlZmVyZW5jZXNcXFwiXFxuICAgICAgICAgICAgdi1tb2RlbD1cXFwic2VhcmNoXFxcIj5cXG4gICAgICAgIDwvdG9wLWNvbnRyb2xzPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidGFibGUtcmVzcG9uc2l2ZVxcXCJcXG4gICAgICAgICAgICB2LXJlc3BvbnNpdmU+XFxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVxcXCJ0YWJsZSBpcy1mdWxsd2lkdGggdnVlLWRhdGEtdGFibGVcXFwiXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwidGVtcGxhdGUuc3R5bGVcXFwiXFxuICAgICAgICAgICAgICAgIGlkPVxcXCJpZFxcXCI+XFxuICAgICAgICAgICAgICAgIDx0YWJsZS1oZWFkZXIgOnRlbXBsYXRlPVxcXCJ0ZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDppMThuPVxcXCJpMThuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQHNvcnQtdXBkYXRlPVxcXCJnZXREYXRhXFxcIj5cXG4gICAgICAgICAgICAgICAgPC90YWJsZS1oZWFkZXI+XFxuICAgICAgICAgICAgICAgIDx0YWJsZS1ib2R5IDp0ZW1wbGF0ZT1cXFwidGVtcGxhdGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LW9uPVxcXCIkbGlzdGVuZXJzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmJvZHk9XFxcImJvZHlcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6c3RhcnQ9XFxcInN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XFxcImkxOG5cXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y3VzdG9tLXJlbmRlcj1cXFwiY3VzdG9tUmVuZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmV4cGFuZGVkPVxcXCJleHBhbmRlZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBhamF4PVxcXCJhamF4XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaGFzQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvdGFibGUtYm9keT5cXG4gICAgICAgICAgICAgICAgPHRhYmxlLWZvb3RlciB2LWlmPVxcXCJ0ZW1wbGF0ZS50b3RhbCAmJiBoYXNDb250ZW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnRlbXBsYXRlPVxcXCJ0ZW1wbGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpib2R5PVxcXCJib2R5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XFxcImkxOG5cXFwiPlxcbiAgICAgICAgICAgICAgICA8L3RhYmxlLWZvb3Rlcj5cXG4gICAgICAgICAgICA8L3RhYmxlPlxcbiAgICAgICAgICAgIDxvdmVybGF5IHYtaWY9XFxcImxvYWRpbmdcXFwiPjwvb3ZlcmxheT5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1ucyB0YWJsZS1ib3R0b20tY29udHJvbHNcXFwiXFxuICAgICAgICAgICAgdi1pZj1cXFwiaGFzQ29udGVudFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uXFxcIj5cXG4gICAgICAgICAgICAgICAgPHJlY29yZHMtaW5mbyA6Ym9keT1cXFwiYm9keVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDppMThuPVxcXCJpMThuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnN0YXJ0PVxcXCJzdGFydFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XFxcImxlbmd0aFxcXCI+XFxuICAgICAgICAgICAgICAgIDwvcmVjb3Jkcy1pbmZvPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBpcy1uYXJyb3cgaGFzLXRleHQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6c3RhcnQ9XFxcInN0YXJ0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cXFwibGVuZ3RoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOnJlY29yZHM9XFxcImJvZHkuZmlsdGVyZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cXFwiaTE4blxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBqdW1wLXRvPVxcXCJzdGFydCA9ICRldmVudDtnZXREYXRhKClcXFwiPlxcbiAgICAgICAgICAgICAgICA8L3BhZ2luYXRpb24+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgdi1pZj1cXFwiYm9keSAmJiAhYm9keS5jb3VudFxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwiaGFzLXRleHQtY2VudGVyZWQgbm8tcmVjb3Jkcy1mb3VuZFxcXCI+XFxuICAgICAgICAgICAge3sgaTE4bignTm8gcmVjb3JkcyB3ZXJlIGZvdW5kLicpIH19XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB0b2FzdHIgZnJvbSAndG9hc3RyJztcXG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gJ2xvZGFzaCc7XFxuaW1wb3J0IFRvcENvbnRyb2xzIGZyb20gJy4vVG9wQ29udHJvbHMudnVlJztcXG5pbXBvcnQgVGFibGVIZWFkZXIgZnJvbSAnLi9UYWJsZUhlYWRlci52dWUnO1xcbmltcG9ydCBUYWJsZUJvZHkgZnJvbSAnLi9UYWJsZUJvZHkudnVlJztcXG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnLi9UYWJsZUZvb3Rlci52dWUnO1xcbmltcG9ydCBSZWNvcmRzSW5mbyBmcm9tICcuL1JlY29yZHNJbmZvLnZ1ZSc7XFxuaW1wb3J0IFBhZ2luYXRpb24gZnJvbSAnLi9QYWdpbmF0aW9uLnZ1ZSc7XFxuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5LnZ1ZSc7XFxuaW1wb3J0IHZSZXNwb25zaXZlIGZyb20gJy4vcmVzcG9uc2l2ZS92UmVzcG9uc2l2ZSc7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnVnVlVGFibGUnLFxcblxcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBUb3BDb250cm9scywgVGFibGVIZWFkZXIsIFRhYmxlQm9keSwgVGFibGVGb290ZXIsIFJlY29yZHNJbmZvLCBPdmVybGF5LCBQYWdpbmF0aW9uLFxcbiAgICB9LFxcblxcbiAgICBkaXJlY3RpdmVzOiB7XFxuICAgICAgICByZXNwb25zaXZlOiB2UmVzcG9uc2l2ZSxcXG4gICAgfSxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIGlkOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHBhdGg6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgZmlsdGVyczoge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGludGVydmFsczoge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGN1c3RvbVJlbmRlcjoge1xcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IChyb3csIGNvbHVtbikgPT4ge1xcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhgJ0N1c3RvbSByZW5kZXIgZnVuY3Rpb24gaXMgbWlzc2luZyBmb3IgY29sdW1uOiAke2NvbHVtbi5uYW1lfSdgKTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvd1tjb2x1bW4ubmFtZV07XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICBpMThuOiB7XFxuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXFxuICAgICAgICAgICAgZGVmYXVsdDogdmFsdWUgPT4gdmFsdWUsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgcHJlZmVyZW5jZXNLZXkoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIGBWdWVUYWJsZV8ke3RoaXMuaWR9X3ByZWZlcmVuY2VzYDtcXG4gICAgICAgIH0sXFxuICAgICAgICBwcmVmZXJlbmNlcygpIHtcXG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIGdsb2JhbDoge1xcbiAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiB0aGlzLmxlbmd0aCxcXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5zdGFydCxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRoaXMudGVtcGxhdGUuc29ydCxcXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlOiB0aGlzLnRlbXBsYXRlLnN0eWxlLFxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IHRoaXMudGVtcGxhdGUuYWxpZ24sXFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMudGVtcGxhdGUuY29sdW1ucy5yZWR1Y2UoKGNvbGxlY3RvciwgY29sdW1uKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0b3IucHVzaCh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogY29sdW1uLm1ldGEuc29ydCxcXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBjb2x1bW4ubWV0YS52aXNpYmxlLFxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY29sbGVjdG9yO1xcbiAgICAgICAgICAgICAgICB9LCBbXSksXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuICAgICAgICBoYXNDb250ZW50KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmJvZHkgJiYgdGhpcy5ib2R5LmNvdW50O1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXFxuICAgICAgICAgICAgaW5pdGlhbGlzZWQ6IGZhbHNlLFxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBudWxsLFxcbiAgICAgICAgICAgIHNlYXJjaDogJycsXFxuICAgICAgICAgICAgc3RhcnQ6IG51bGwsXFxuICAgICAgICAgICAgYm9keTogbnVsbCxcXG4gICAgICAgICAgICBsZW5ndGg6IG51bGwsXFxuICAgICAgICAgICAgZXhwYW5kZWQ6IFtdLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG5cXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmaWx0ZXJzOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgaW50ZXJ2YWxzOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgbGVuZ3RoOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJVcGRhdGUoKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIHByZWZlcmVuY2VzOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzQ29udGVudCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlUHJlZmVyZW5jZXMoKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGNyZWF0ZWQoKSB7XFxuICAgICAgICB0aGlzLmdldERhdGEgPSBkZWJvdW5jZSh0aGlzLmdldERhdGEsIDEwMCk7XFxuICAgICAgICB0aGlzLmluaXQoKTtcXG4gICAgfSxcXG5cXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgaW5pdCgpIHtcXG4gICAgICAgICAgICBheGlvcy5nZXQodGhpcy5wYXRoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlID0gZGF0YS50ZW1wbGF0ZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCA9IDA7XFxuICAgICAgICAgICAgICAgIFt0aGlzLmxlbmd0aF0gPSB0aGlzLnRlbXBsYXRlLmxlbmd0aE1lbnU7XFxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJlZmVyZW5jZXMoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSBlcnJvci5yZXNwb25zZTtcXG5cXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNTU1KSB7XFxuICAgICAgICAgICAgICAgICAgICB0b2FzdHIuZXJyb3IoZGF0YS5tZXNzYWdlKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRQcmVmZXJlbmNlcygpIHtcXG4gICAgICAgICAgICB0aGlzLnNldERlZmF1bHRQcmVmZXJlbmNlcygpO1xcblxcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLnByZWZlcmVuY2VzS2V5KSAhPT0gbnVsbCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVzZXJQcmVmZXJlbmNlcygpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNldERlZmF1bHRQcmVmZXJlbmNlcygpIHtcXG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlLmNvbHVtbnMuZm9yRWFjaCgoeyBtZXRhIH0pID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KG1ldGEsICdzb3J0JywgbnVsbCk7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHNldChtZXRhLCAnaGlkZGVuJywgZmFsc2UpO1xcbiAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnRlbXBsYXRlLCAnc29ydCcsIGZhbHNlKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRVc2VyUHJlZmVyZW5jZXMoKSB7XFxuICAgICAgICAgICAgY29uc3QgcHJlZnMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMucHJlZmVyZW5jZXNLZXkpKTtcXG5cXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcmVmcy5nbG9iYWwpLmZvckVhY2goKGtleSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcywga2V5LCBwcmVmcy5nbG9iYWxba2V5XSk7XFxuICAgICAgICAgICAgfSk7XFxuXFxuICAgICAgICAgICAgT2JqZWN0LmtleXMocHJlZnMudGVtcGxhdGUpLmZvckVhY2goKGtleSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRzZXQodGhpcy50ZW1wbGF0ZSwga2V5LCBwcmVmcy50ZW1wbGF0ZVtrZXldKTtcXG4gICAgICAgICAgICB9KTtcXG5cXG4gICAgICAgICAgICBwcmVmcy5jb2x1bW5zLmZvckVhY2goKGNvbHVtbiwgaW5kZXgpID0+IHtcXG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY29sdW1uKS5mb3JFYWNoKChrZXkpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLnRlbXBsYXRlLmNvbHVtbnNbaW5kZXhdLm1ldGEsIGtleSwgY29sdW1uW2tleV0pO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzYXZlUHJlZmVyZW5jZXMoKSB7XFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcmVmZXJlbmNlcykpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHJlc2V0UHJlZmVyZW5jZXMoKSB7XFxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSk7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2ggPSAnJztcXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBnZXREYXRhKCkge1xcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XFxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9IFtdO1xcblxcbiAgICAgICAgICAgIGF4aW9zLmdldCh0aGlzLnRlbXBsYXRlLnJlYWRQYXRoLCB7IHBhcmFtczogdGhpcy5yZWFkUmVxdWVzdCgpIH0pLnRoZW4oKHsgZGF0YSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuYm9keSA9IGRhdGE7XFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgcmVhZFJlcXVlc3QoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICAgICAgY29sdW1uczogdGhpcy5yZXF1ZXN0Q29sdW1ucygpLFxcbiAgICAgICAgICAgICAgICBtZXRhOiB7XFxuICAgICAgICAgICAgICAgICAgICBzdGFydDogdGhpcy5zdGFydCxcXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5sZW5ndGgsXFxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0aGlzLnRlbXBsYXRlLnNvcnQsXFxuICAgICAgICAgICAgICAgICAgICB0b3RhbDogdGhpcy50ZW1wbGF0ZS50b3RhbCxcXG4gICAgICAgICAgICAgICAgICAgIGVudW06IHRoaXMudGVtcGxhdGUuZW51bSxcXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMudGVtcGxhdGUuZGF0ZSxcXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbnM6IHRoaXMudGVtcGxhdGUuYWN0aW9ucyxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcXG4gICAgICAgICAgICAgICAgYXBwZW5kczogdGhpcy50ZW1wbGF0ZS5hcHBlbmRzLFxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMsXFxuICAgICAgICAgICAgICAgIGludGVydmFsczogdGhpcy5pbnRlcnZhbHMsXFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5wYXJhbXMsXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuICAgICAgICByZXF1ZXN0Q29sdW1ucygpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLnJlZHVjZSgoY29sdW1ucywgY29sdW1uKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNvbHVtbnMucHVzaCh7XFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjb2x1bW4ubmFtZSxcXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGNvbHVtbi5kYXRhLFxcbiAgICAgICAgICAgICAgICAgICAgbWV0YToge1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaGFibGU6IGNvbHVtbi5tZXRhLnNlYXJjaGFibGUsXFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGNvbHVtbi5tZXRhLnNvcnRhYmxlLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnQ6IGNvbHVtbi5tZXRhLnNvcnQsXFxuICAgICAgICAgICAgICAgICAgICAgICAgdG90YWw6IGNvbHVtbi5tZXRhLnRvdGFsLFxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGNvbHVtbi5tZXRhLmRhdGUsXFxuICAgICAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgICAgICAgICAgZW51bTogY29sdW1uLmVudW0sXFxuICAgICAgICAgICAgICAgIH0pO1xcblxcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sdW1ucztcXG4gICAgICAgICAgICB9LCBbXSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwb3J0RGF0YShwYXRoKSB7XFxuICAgICAgICAgICAgYXhpb3MuZ2V0KHBhdGgsIHsgcGFyYW1zOiB0aGlzLmV4cG9ydFJlcXVlc3QoKSB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XFxuXFxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDU1NSkge1xcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKGRhdGEubWVzc2FnZSk7XFxuICAgICAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwb3J0UmVxdWVzdCgpIHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnRlbXBsYXRlLm5hbWUsXFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMudGVtcGxhdGUuY29sdW1ucyxcXG4gICAgICAgICAgICAgICAgbWV0YToge1xcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IDAsXFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMuYm9keS5jb3VudCxcXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRoaXMudGVtcGxhdGUuc29ydCxcXG4gICAgICAgICAgICAgICAgICAgIGVudW06IHRoaXMudGVtcGxhdGUuZW51bSxcXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMudGVtcGxhdGUuZGF0ZSxcXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgfSxcXG4gICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcXG4gICAgICAgICAgICAgICAgYXBwZW5kczogdGhpcy50ZW1wbGF0ZS5hcHBlbmRzLFxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMsXFxuICAgICAgICAgICAgICAgIGludGVydmFsczogdGhpcy5pbnRlcnZhbHMsXFxuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5wYXJhbXMsXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuICAgICAgICBhamF4KG1ldGhvZCwgcGF0aCkge1xcbiAgICAgICAgICAgIGF4aW9zW21ldGhvZC50b0xvd2VyQ2FzZSgpXShwYXRoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldERhdGEoKTtcXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZmlsdGVyVXBkYXRlKCkge1xcbiAgICAgICAgICAgIGlmICghdGhpcy5pbml0aWFsaXNlZCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSAwO1xcbiAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgLnRhYmxlLnZ1ZS1kYXRhLXRhYmxlIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUge1xcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICB3aWR0aDogMTAwJTtcXG4gICAgICAgIG1pbi1oZWlnaHQ6IC4wMSU7XFxuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgICB9XFxuXFxuICAgIC50YWJsZS1yZXNwb25zaXZlIHRhYmxlIHtcXG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcXG4gICAgfVxcblxcbiAgICBkaXYudGFibGUtYm90dG9tLWNvbnRyb2xzIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xcbiAgICB9XFxuXFxuICAgIGRpdi5uby1yZWNvcmRzLWZvdW5kIHtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xZTU0MTkzNFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJib3hcIlxuICAgICAgICB2LWlmPVwiaW5pdGlhbGlzZWRcIj5cbiAgICAgICAgPHRvcC1jb250cm9scyA6dGVtcGxhdGU9XCJ0ZW1wbGF0ZVwiXG4gICAgICAgICAgICBjbGFzcz1cImhhcy1wYWRkaW5nLXNtYWxsIGhhcy1wYWRkaW5nLWJvdHRvbS1sYXJnZVwiXG4gICAgICAgICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgICAgICAgOmxlbmd0aD1cImxlbmd0aFwiXG4gICAgICAgICAgICBAdXBkYXRlLWxlbmd0aD1cImxlbmd0aD0kZXZlbnRcIlxuICAgICAgICAgICAgQGV4cG9ydC1kYXRhPVwiZXhwb3J0RGF0YVwiXG4gICAgICAgICAgICBAcmVsb2FkPVwiZ2V0RGF0YSgpXCJcbiAgICAgICAgICAgIEByZXNldD1cInJlc2V0UHJlZmVyZW5jZXNcIlxuICAgICAgICAgICAgdi1tb2RlbD1cInNlYXJjaFwiPlxuICAgICAgICA8L3RvcC1jb250cm9scz5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLXJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgdi1yZXNwb25zaXZlPlxuICAgICAgICAgICAgPHRhYmxlIGNsYXNzPVwidGFibGUgaXMtZnVsbHdpZHRoIHZ1ZS1kYXRhLXRhYmxlXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ0ZW1wbGF0ZS5zdHlsZVwiXG4gICAgICAgICAgICAgICAgaWQ9XCJpZFwiPlxuICAgICAgICAgICAgICAgIDx0YWJsZS1oZWFkZXIgOnRlbXBsYXRlPVwidGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgICAgICAgICAgICAgICBAc29ydC11cGRhdGU9XCJnZXREYXRhXCI+XG4gICAgICAgICAgICAgICAgPC90YWJsZS1oZWFkZXI+XG4gICAgICAgICAgICAgICAgPHRhYmxlLWJvZHkgOnRlbXBsYXRlPVwidGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICB2LW9uPVwiJGxpc3RlbmVyc1wiXG4gICAgICAgICAgICAgICAgICAgIDpib2R5PVwiYm9keVwiXG4gICAgICAgICAgICAgICAgICAgIDpzdGFydD1cInN0YXJ0XCJcbiAgICAgICAgICAgICAgICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgICAgICAgICAgICAgICAgOmN1c3RvbS1yZW5kZXI9XCJjdXN0b21SZW5kZXJcIlxuICAgICAgICAgICAgICAgICAgICA6ZXhwYW5kZWQ9XCJleHBhbmRlZFwiXG4gICAgICAgICAgICAgICAgICAgIEBhamF4PVwiYWpheFwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJoYXNDb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPC90YWJsZS1ib2R5PlxuICAgICAgICAgICAgICAgIDx0YWJsZS1mb290ZXIgdi1pZj1cInRlbXBsYXRlLnRvdGFsICYmIGhhc0NvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICA6dGVtcGxhdGU9XCJ0ZW1wbGF0ZVwiXG4gICAgICAgICAgICAgICAgICAgIDpib2R5PVwiYm9keVwiXG4gICAgICAgICAgICAgICAgICAgIDppMThuPVwiaTE4blwiPlxuICAgICAgICAgICAgICAgIDwvdGFibGUtZm9vdGVyPlxuICAgICAgICAgICAgPC90YWJsZT5cbiAgICAgICAgICAgIDxvdmVybGF5IHYtaWY9XCJsb2FkaW5nXCI+PC9vdmVybGF5PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgdGFibGUtYm90dG9tLWNvbnRyb2xzXCJcbiAgICAgICAgICAgIHYtaWY9XCJoYXNDb250ZW50XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgPHJlY29yZHMtaW5mbyA6Ym9keT1cImJvZHlcIlxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgICAgICAgICAgICAgICA6c3RhcnQ9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsZW5ndGhcIj5cbiAgICAgICAgICAgICAgICA8L3JlY29yZHMtaW5mbz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1uYXJyb3cgaGFzLXRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8cGFnaW5hdGlvbiA6c3RhcnQ9XCJzdGFydFwiXG4gICAgICAgICAgICAgICAgICAgIDpsZW5ndGg9XCJsZW5ndGhcIlxuICAgICAgICAgICAgICAgICAgICA6cmVjb3Jkcz1cImJvZHkuZmlsdGVyZWRcIlxuICAgICAgICAgICAgICAgICAgICA6aTE4bj1cImkxOG5cIlxuICAgICAgICAgICAgICAgICAgICBAanVtcC10bz1cInN0YXJ0ID0gJGV2ZW50O2dldERhdGEoKVwiPlxuICAgICAgICAgICAgICAgIDwvcGFnaW5hdGlvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiB2LWlmPVwiYm9keSAmJiAhYm9keS5jb3VudFwiXG4gICAgICAgICAgICBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkIG5vLXJlY29yZHMtZm91bmRcIj5cbiAgICAgICAgICAgIHt7IGkxOG4oJ05vIHJlY29yZHMgd2VyZSBmb3VuZC4nKSB9fVxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHRvYXN0ciBmcm9tICd0b2FzdHInO1xuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IFRvcENvbnRyb2xzIGZyb20gJy4vVG9wQ29udHJvbHMudnVlJztcbmltcG9ydCBUYWJsZUhlYWRlciBmcm9tICcuL1RhYmxlSGVhZGVyLnZ1ZSc7XG5pbXBvcnQgVGFibGVCb2R5IGZyb20gJy4vVGFibGVCb2R5LnZ1ZSc7XG5pbXBvcnQgVGFibGVGb290ZXIgZnJvbSAnLi9UYWJsZUZvb3Rlci52dWUnO1xuaW1wb3J0IFJlY29yZHNJbmZvIGZyb20gJy4vUmVjb3Jkc0luZm8udnVlJztcbmltcG9ydCBQYWdpbmF0aW9uIGZyb20gJy4vUGFnaW5hdGlvbi52dWUnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5LnZ1ZSc7XG5pbXBvcnQgdlJlc3BvbnNpdmUgZnJvbSAnLi9yZXNwb25zaXZlL3ZSZXNwb25zaXZlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdWdWVUYWJsZScsXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICAgIFRvcENvbnRyb2xzLCBUYWJsZUhlYWRlciwgVGFibGVCb2R5LCBUYWJsZUZvb3RlciwgUmVjb3Jkc0luZm8sIE92ZXJsYXksIFBhZ2luYXRpb24sXG4gICAgfSxcblxuICAgIGRpcmVjdGl2ZXM6IHtcbiAgICAgICAgcmVzcG9uc2l2ZTogdlJlc3BvbnNpdmUsXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGlkOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGF0aDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGZpbHRlcnM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJ2YWxzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21SZW5kZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgZGVmYXVsdDogKHJvdywgY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoYCdDdXN0b20gcmVuZGVyIGZ1bmN0aW9uIGlzIG1pc3NpbmcgZm9yIGNvbHVtbjogJHtjb2x1bW4ubmFtZX0nYCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJvd1tjb2x1bW4ubmFtZV07XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHZhbHVlID0+IHZhbHVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBwcmVmZXJlbmNlc0tleSgpIHtcbiAgICAgICAgICAgIHJldHVybiBgVnVlVGFibGVfJHt0aGlzLmlkfV9wcmVmZXJlbmNlc2A7XG4gICAgICAgIH0sXG4gICAgICAgIHByZWZlcmVuY2VzKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmluaXRpYWxpc2VkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsOiB7XG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHNlYXJjaDogdGhpcy5zZWFyY2gsXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiB0aGlzLnN0YXJ0LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy50ZW1wbGF0ZS5zb3J0LFxuICAgICAgICAgICAgICAgICAgICBzdHlsZTogdGhpcy50ZW1wbGF0ZS5zdHlsZSxcbiAgICAgICAgICAgICAgICAgICAgYWxpZ246IHRoaXMudGVtcGxhdGUuYWxpZ24sXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb2x1bW5zOiB0aGlzLnRlbXBsYXRlLmNvbHVtbnMucmVkdWNlKChjb2xsZWN0b3IsIGNvbHVtbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb2xsZWN0b3IucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzb3J0OiBjb2x1bW4ubWV0YS5zb3J0LFxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogY29sdW1uLm1ldGEudmlzaWJsZSxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNvbGxlY3RvcjtcbiAgICAgICAgICAgICAgICB9LCBbXSksXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBoYXNDb250ZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keSAmJiB0aGlzLmJvZHkuY291bnQ7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHRlbXBsYXRlOiBudWxsLFxuICAgICAgICAgICAgc2VhcmNoOiAnJyxcbiAgICAgICAgICAgIHN0YXJ0OiBudWxsLFxuICAgICAgICAgICAgYm9keTogbnVsbCxcbiAgICAgICAgICAgIGxlbmd0aDogbnVsbCxcbiAgICAgICAgICAgIGV4cGFuZGVkOiBbXSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJzOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaW50ZXJ2YWxzOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVXBkYXRlKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBwcmVmZXJlbmNlczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYXNDb250ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2F2ZVByZWZlcmVuY2VzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuZ2V0RGF0YSA9IGRlYm91bmNlKHRoaXMuZ2V0RGF0YSwgMTAwKTtcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgaW5pdCgpIHtcbiAgICAgICAgICAgIGF4aW9zLmdldCh0aGlzLnBhdGgpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRhdGEudGVtcGxhdGU7XG4gICAgICAgICAgICAgICAgdGhpcy5zdGFydCA9IDA7XG4gICAgICAgICAgICAgICAgW3RoaXMubGVuZ3RoXSA9IHRoaXMudGVtcGxhdGUubGVuZ3RoTWVudTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFByZWZlcmVuY2VzKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA1NTUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0UHJlZmVyZW5jZXMoKSB7XG4gICAgICAgICAgICB0aGlzLnNldERlZmF1bHRQcmVmZXJlbmNlcygpO1xuXG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFVzZXJQcmVmZXJlbmNlcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRuZXh0VGljaygoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RGVmYXVsdFByZWZlcmVuY2VzKCkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLmZvckVhY2goKHsgbWV0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KG1ldGEsICdzb3J0JywgbnVsbCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KG1ldGEsICdoaWRkZW4nLCBmYWxzZSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudGVtcGxhdGUsICdzb3J0JywgZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRVc2VyUHJlZmVyZW5jZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBwcmVmcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSkpO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcmVmcy5nbG9iYWwpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHNldCh0aGlzLCBrZXksIHByZWZzLmdsb2JhbFtrZXldKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhwcmVmcy50ZW1wbGF0ZSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudGVtcGxhdGUsIGtleSwgcHJlZnMudGVtcGxhdGVba2V5XSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcHJlZnMuY29sdW1ucy5mb3JFYWNoKChjb2x1bW4sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmtleXMoY29sdW1uKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kc2V0KHRoaXMudGVtcGxhdGUuY29sdW1uc1tpbmRleF0ubWV0YSwga2V5LCBjb2x1bW5ba2V5XSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2F2ZVByZWZlcmVuY2VzKCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSwgSlNPTi5zdHJpbmdpZnkodGhpcy5wcmVmZXJlbmNlcykpO1xuICAgICAgICB9LFxuICAgICAgICByZXNldFByZWZlcmVuY2VzKCkge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5wcmVmZXJlbmNlc0tleSk7XG4gICAgICAgICAgICB0aGlzLnNlYXJjaCA9ICcnO1xuICAgICAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldERhdGEoKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9IFtdO1xuXG4gICAgICAgICAgICBheGlvcy5nZXQodGhpcy50ZW1wbGF0ZS5yZWFkUGF0aCwgeyBwYXJhbXM6IHRoaXMucmVhZFJlcXVlc3QoKSB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYm9keSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICByZWFkUmVxdWVzdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgY29sdW1uczogdGhpcy5yZXF1ZXN0Q29sdW1ucygpLFxuICAgICAgICAgICAgICAgIG1ldGE6IHtcbiAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IHRoaXMuc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgIGxlbmd0aDogdGhpcy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRoaXMudGVtcGxhdGUuc29ydCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IHRoaXMudGVtcGxhdGUudG90YWwsXG4gICAgICAgICAgICAgICAgICAgIGVudW06IHRoaXMudGVtcGxhdGUuZW51bSxcbiAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGhpcy50ZW1wbGF0ZS5kYXRlLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiB0aGlzLnRlbXBsYXRlLmFjdGlvbnMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBzZWFyY2g6IHRoaXMuc2VhcmNoLFxuICAgICAgICAgICAgICAgIGFwcGVuZHM6IHRoaXMudGVtcGxhdGUuYXBwZW5kcyxcbiAgICAgICAgICAgICAgICBmaWx0ZXJzOiB0aGlzLmZpbHRlcnMsXG4gICAgICAgICAgICAgICAgaW50ZXJ2YWxzOiB0aGlzLmludGVydmFscyxcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWVzdENvbHVtbnMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLnJlZHVjZSgoY29sdW1ucywgY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sdW1ucy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogY29sdW1uLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGRhdGE6IGNvbHVtbi5kYXRhLFxuICAgICAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hhYmxlOiBjb2x1bW4ubWV0YS5zZWFyY2hhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydGFibGU6IGNvbHVtbi5tZXRhLnNvcnRhYmxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydDogY29sdW1uLm1ldGEuc29ydCxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvdGFsOiBjb2x1bW4ubWV0YS50b3RhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IGNvbHVtbi5tZXRhLmRhdGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGVudW06IGNvbHVtbi5lbnVtLFxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbHVtbnM7XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIH0sXG4gICAgICAgIGV4cG9ydERhdGEocGF0aCkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHBhdGgsIHsgcGFyYW1zOiB0aGlzLmV4cG9ydFJlcXVlc3QoKSB9KS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA1NTUpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RyLmVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXhwb3J0UmVxdWVzdCgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy50ZW1wbGF0ZS5uYW1lLFxuICAgICAgICAgICAgICAgIGNvbHVtbnM6IHRoaXMudGVtcGxhdGUuY29sdW1ucyxcbiAgICAgICAgICAgICAgICBtZXRhOiB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0OiAwLFxuICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IHRoaXMuYm9keS5jb3VudCxcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdGhpcy50ZW1wbGF0ZS5zb3J0LFxuICAgICAgICAgICAgICAgICAgICBlbnVtOiB0aGlzLnRlbXBsYXRlLmVudW0sXG4gICAgICAgICAgICAgICAgICAgIGRhdGU6IHRoaXMudGVtcGxhdGUuZGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgdG90YWw6IGZhbHNlLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc2VhcmNoOiB0aGlzLnNlYXJjaCxcbiAgICAgICAgICAgICAgICBhcHBlbmRzOiB0aGlzLnRlbXBsYXRlLmFwcGVuZHMsXG4gICAgICAgICAgICAgICAgZmlsdGVyczogdGhpcy5maWx0ZXJzLFxuICAgICAgICAgICAgICAgIGludGVydmFsczogdGhpcy5pbnRlcnZhbHMsXG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLnBhcmFtcyxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGFqYXgobWV0aG9kLCBwYXRoKSB7XG4gICAgICAgICAgICBheGlvc1ttZXRob2QudG9Mb3dlckNhc2UoKV0ocGF0aCkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgICAgICBmaWx0ZXJVcGRhdGUoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5pdGlhbGlzZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuc3RhcnQgPSAwO1xuICAgICAgICAgICAgdGhpcy5nZXREYXRhKCk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAudGFibGUudnVlLWRhdGEtdGFibGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC50YWJsZS1yZXNwb25zaXZlIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IC4wMSU7XG4gICAgICAgIG92ZXJmbG93LXg6IGF1dG87XG4gICAgfVxuXG4gICAgLnRhYmxlLXJlc3BvbnNpdmUgdGFibGUge1xuICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgfVxuXG4gICAgZGl2LnRhYmxlLWJvdHRvbS1jb250cm9scyB7XG4gICAgICAgIG1hcmdpbi10b3A6IC41cmVtO1xuICAgIH1cblxuICAgIGRpdi5uby1yZWNvcmRzLWZvdW5kIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1Z1ZVRhYmxlLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjU1YjY4YzZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ub3BDb250cm9scy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1RvcENvbnRyb2xzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMjU1YjY4YzZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1RvcENvbnRyb2xzLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtMjU1YjY4YzZcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yNTViNjhjNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTI1NWI2OGM2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVG9wQ29udHJvbHMudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQ1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTI1NWI2OGM2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVG9wQ29udHJvbHMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJiY2VlYWQ4MFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yNTViNjhjNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RvcENvbnRyb2xzLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0yNTViNjhjNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RvcENvbnRyb2xzLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yNTViNjhjNlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWVcbi8vIG1vZHVsZSBpZCA9IDExNDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRpdGxlIC5pY29uW2RhdGEtdi0yNTViNjhjNl0ge1xcbiAgdmVydGljYWwtYWxpZ246IHRleHQtYm90dG9tO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVG9wQ29udHJvbHMudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLDRCQUE0QjtDQUFFXCIsXCJmaWxlXCI6XCJUb3BDb250cm9scy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLnRpdGxlIC5pY29uIHtcXG4gIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0yNTViNjhjNlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Ub3BDb250cm9scy52dWVcbi8vIG1vZHVsZSBpZCA9IDExNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaGFzLXBhZGRpbmctc21hbGwgaXMtaGFsZiBpcy1oaWRkZW4tbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwidGl0bGUgaXMtNVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cInRlbXBsYXRlLmljb25cIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIHt7IGkxOG4odGVtcGxhdGUubmFtZSkgfX1cbiAgICAgICAgICAgICAgICA8L2g1PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGhhcy1wYWRkaW5nLXNtYWxsIGlzLWhhbGYgaGFzLXRleHQtcmlnaHQtdGFibGV0IGhhcy10ZXh0LWNlbnRlcmVkLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaGFzLW1hcmdpbi1sZWZ0LXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJidXR0b24gaW4gdGVtcGxhdGUuYnV0dG9ucy5nbG9iYWxcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJidXR0b24uY2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICA6a2V5PVwiYnV0dG9uLmxhYmVsXCJcbiAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJidXR0b24uYWN0aW9uID09PSAnaHJlZicgPyBidXR0b24ucGF0aCA6IG51bGxcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJkb0FjdGlvbihidXR0b24pXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGkxOG4oYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgOmljb249XCJidXR0b24uaWNvblwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy10d28tdGhpcmRzLWRlc2t0b3AgaGFzLXRleHQtY2VudGVyZWQtbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgPGxlbmd0aC1tZW51IDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCJcbiAgICAgICAgICAgICAgICAgICAgOmxlbmd0aD1cImxlbmd0aFwiXG4gICAgICAgICAgICAgICAgICAgIHYtb249XCIkbGlzdGVuZXJzXCI+XG4gICAgICAgICAgICAgICAgPC9sZW5ndGgtbWVudT5cbiAgICAgICAgICAgICAgICA8Y29sdW1uLXZpc2liaWxpdHkgOnRlbXBsYXRlPVwidGVtcGxhdGVcIlxuICAgICAgICAgICAgICAgICAgICB2LW9uPVwiJGxpc3RlbmVyc1wiPlxuICAgICAgICAgICAgICAgIDwvY29sdW1uLXZpc2liaWxpdHk+XG4gICAgICAgICAgICAgICAgPHN0eWxlLXNlbGVjdG9yIDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPC9zdHlsZS1zZWxlY3Rvcj5cbiAgICAgICAgICAgICAgICA8YWxpZ25tZW50IDp0ZW1wbGF0ZT1cInRlbXBsYXRlXCI+XG4gICAgICAgICAgICAgICAgPC9hbGlnbm1lbnQ+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdyZWxvYWQnKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVwic3luY1wiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ3Jlc2V0JylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInVuZG9cIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaGFzLXBhZGRpbmctc21hbGwgaXMtb25lLXRoaXJkLWRlc2t0b3AgaGFzLXRleHQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXQgdGFibGUtc2VhcmNoLWlucHV0IGhhcy10ZXh0LWNlbnRlcmVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50LnRhcmdldC52YWx1ZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiaTE4bignU2VhcmNoJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVwic2VhcmNoXCI+PC9mYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYVN5bmMsIGZhVW5kbywgZmFTZWFyY2ggfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1zb2xpZCc7XG5pbXBvcnQgTGVuZ3RoTWVudSBmcm9tICcuL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlJztcbmltcG9ydCBDb2x1bW5WaXNpYmlsaXR5IGZyb20gJy4vdG9wQ29udHJvbHMvQ29sdW1uVmlzaWJpbGl0eS52dWUnO1xuaW1wb3J0IEFsaWdubWVudCBmcm9tICcuL3RvcENvbnRyb2xzL0FsaWdubWVudC52dWUnO1xuaW1wb3J0IFN0eWxlU2VsZWN0b3IgZnJvbSAnLi90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZSc7XG5cbmZvbnRhd2Vzb21lLmxpYnJhcnkuYWRkKGZhU3luYywgZmFVbmRvLCBmYVNlYXJjaCk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnVG9wQ29udHJvbHMnLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBMZW5ndGhNZW51LCBDb2x1bW5WaXNpYmlsaXR5LCBBbGlnbm1lbnQsIFN0eWxlU2VsZWN0b3IsXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbGVuZ3RoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGVuZ3RoTWVudTogZmFsc2UsXG4gICAgICAgICAgICBjb2x1bW5WaXNpYmlsaXR5OiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBkb0FjdGlvbihidXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoYnV0dG9uLmV2ZW50KTtcblxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5hY3Rpb24gPT09ICdleHBvcnQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZXhwb3J0LWRhdGEnLCBidXR0b24ucGF0aCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmFjdGlvbiA9PT0gJ3JvdXRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IGJ1dHRvbi5yb3V0ZSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cblxuICAgIC50aXRsZSB7XG4gICAgICAgIC5pY29uIHtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiB0ZXh0LWJvdHRvbTtcbiAgICAgICAgfVxuICAgIH1cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9MZW5ndGhNZW51LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDc2OTBkNDdcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9MZW5ndGhNZW51LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvTGVuZ3RoTWVudS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDc2OTBkNDdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NzY5MGQ0N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0xlbmd0aE1lbnUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRyb3Bkb3duPlxuICAgICAgICA8c3BhbiBzbG90PVwibGFiZWxcIj5cbiAgICAgICAgICAgIHt7IGxlbmd0aCB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxhIHYtZm9yPVwiKHZhbHVlLCBpbmRleCkgaW4gdGVtcGxhdGUubGVuZ3RoTWVudVwiXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiB2YWx1ZSA9PT0gbGVuZ3RoIH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ3VwZGF0ZS1sZW5ndGgnLCB2YWx1ZSk7c2hvdz1mYWxzZVwiPlxuICAgICAgICAgICAge3sgdmFsdWUgfX1cbiAgICAgICAgPC9hPlxuICAgIDwvZHJvcGRvd24+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBEcm9wZG93biBmcm9tICcuL0Ryb3Bkb3duLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnTGVuZ3RoTWVudScsXG5cbiAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9MZW5ndGhNZW51LnZ1ZSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0zMTNlYTQ3M1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0Ryb3Bkb3duLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMjA3Njc5YWVcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzEzZWE0NzNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ecm9wZG93bi52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMzEzZWE0NzNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Ecm9wZG93bi52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMzEzZWE0NzNcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvRHJvcGRvd24udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTUxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5kcm9wZG93bi1tZW51W2RhdGEtdi0zMTNlYTQ3M10ge1xcbiAgbWluLXdpZHRoOiB1bnNldDtcXG59XFxuLmRyb3Bkb3duLW1lbnUgLmRyb3Bkb3duLWNvbnRlbnRbZGF0YS12LTMxM2VhNDczXSB7XFxuICAgIG1pbi13aWR0aDogdW5zZXQ7XFxuICAgIG92ZXJmbG93LXk6IGF1dG87XFxufVxcbi5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1jb250ZW50IGEuZHJvcGRvd24taXRlbVtkYXRhLXYtMzEzZWE0NzNdIHtcXG4gICAgICBwYWRkaW5nOiAuMzc1cmVtIDFyZW07XFxufVxcbi5pY29uLmFuZ2xlW2RhdGEtdi0zMTNlYTQ3M10ge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxufVxcbi5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl1bZGF0YS12LTMxM2VhNDczXSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvRHJvcGRvd24udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLGlCQUFpQjtDQUFFO0FBQ25CO0lBQ0UsaUJBQWlCO0lBQ2pCLGlCQUFpQjtDQUFFO0FBQ25CO01BQ0Usc0JBQXNCO0NBQUU7QUFFOUI7RUFDRSxpREFBaUM7RUFBakMseUNBQWlDO0VBQWpDLGlDQUFpQztFQUFqQywrREFBaUM7Q0FBRTtBQUNuQztJQUNFLGtDQUEwQjtZQUExQiwwQkFBMEI7Q0FBRVwiLFwiZmlsZVwiOlwiRHJvcGRvd24udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5kcm9wZG93bi1tZW51IHtcXG4gIG1pbi13aWR0aDogdW5zZXQ7IH1cXG4gIC5kcm9wZG93bi1tZW51IC5kcm9wZG93bi1jb250ZW50IHtcXG4gICAgbWluLXdpZHRoOiB1bnNldDtcXG4gICAgb3ZlcmZsb3cteTogYXV0bzsgfVxcbiAgICAuZHJvcGRvd24tbWVudSAuZHJvcGRvd24tY29udGVudCBhLmRyb3Bkb3duLWl0ZW0ge1xcbiAgICAgIHBhZGRpbmc6IC4zNzVyZW0gMXJlbTsgfVxcblxcbi5pY29uLmFuZ2xlIHtcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlOyB9XFxuICAuaWNvbi5hbmdsZVthcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0zMTNlYTQ3M1wiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Ecm9wZG93bi52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd25cIlxuICAgICAgICB2LWNsaWNrLW91dHNpZGU9XCJoaWRlXCJcbiAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogc2hvdyB9XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi10cmlnZ2VyXCJcbiAgICAgICAgICAgIEBjbGljaz1cInNob3c9IXNob3dcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIGFyaWEtaGFzcG9wdXA9XCJ0cnVlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWNvbnRyb2xzPVwiZHJvcGRvd24tbWVudVwiPlxuICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJsYWJlbFwiPjwvc2xvdD5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgYW5nbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmFyaWEtaGlkZGVuPVwiIXNob3dcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJhbmdsZS1kb3duXCI+PC9mYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJkcm9wZG93bi1tZW51IGFuaW1hdGVkXCJcbiAgICAgICAgICAgIHJvbGU9XCJtZW51XCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2ZhZGVJbic6IHNob3csICdmYWRlT3V0JzogIXNob3cgfVwiXG4gICAgICAgICAgICB2LWlmPVwic2hvd1wiXG4gICAgICAgICAgICA6c3R5bGU9XCJ3aWR0aFN0eWxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tY29udGVudCBoYXMtdGV4dC1jZW50ZXJlZFwiXG4gICAgICAgICAgICAgICAgOnN0eWxlPVwiW3dpZHRoU3R5bGUsIGhlaWdodFN0eWxlXVwiPlxuICAgICAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHZDbGlja091dHNpZGUgZnJvbSAndi1jbGljay1vdXRzaWRlJztcbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFBbmdsZURvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1zb2xpZCc7XG5cbmZvbnRhd2Vzb21lLmxpYnJhcnkuYWRkKGZhQW5nbGVEb3duKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdEcm9wZG93bicsXG5cbiAgICBkaXJlY3RpdmVzOiB7XG4gICAgICAgIGNsaWNrT3V0c2lkZTogdkNsaWNrT3V0c2lkZS5kaXJlY3RpdmUsXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHdpZHRoOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiA2NCxcbiAgICAgICAgfSxcbiAgICAgICAgaGVpZ2h0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAyMDAsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHdpZHRoU3R5bGUoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICdtaW4td2lkdGgnOiBgJHt0aGlzLndpZHRofXB4YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIGhlaWdodFN0eWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAnbWF4LWhlaWdodCc6IGAke3RoaXMuaGVpZ2h0fXB4YCxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoaWRlKCkge1xuICAgICAgICAgICAgdGhpcy5zaG93ID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cbiAgICAuZHJvcGRvd24tbWVudSB7XG4gICAgICAgIG1pbi13aWR0aDogdW5zZXQ7XG5cbiAgICAgICAgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgICAgICAgICAgbWluLXdpZHRoOiB1bnNldDtcbiAgICAgICAgICAgIG92ZXJmbG93LXk6IGF1dG87XG5cbiAgICAgICAgICAgIGEuZHJvcGRvd24taXRlbSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogLjM3NXJlbSAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmljb24uYW5nbGUge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcblxuICAgICAgICAmW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICB9XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0Ryb3Bkb3duLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7XG4gICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiBcImNsaWNrLW91dHNpZGVcIixcbiAgICAgICAgICByYXdOYW1lOiBcInYtY2xpY2stb3V0c2lkZVwiLFxuICAgICAgICAgIHZhbHVlOiBfdm0uaGlkZSxcbiAgICAgICAgICBleHByZXNzaW9uOiBcImhpZGVcIlxuICAgICAgICB9XG4gICAgICBdLFxuICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd25cIixcbiAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IF92bS5zaG93IH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24tdHJpZ2dlclwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5zaG93ID0gIV92bS5zaG93XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICBcImFyaWEtaGFzcG9wdXBcIjogXCJ0cnVlXCIsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWNvbnRyb2xzXCI6IFwiZHJvcGRvd24tbWVudVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF92bS5fdChcImxhYmVsXCIpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGFuZ2xlXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6ICFfdm0uc2hvdyB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwiYW5nbGUtZG93blwiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLnNob3dcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLW1lbnUgYW5pbWF0ZWRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgZmFkZUluOiBfdm0uc2hvdywgZmFkZU91dDogIV92bS5zaG93IH0sXG4gICAgICAgICAgICAgIHN0eWxlOiBfdm0ud2lkdGhTdHlsZSxcbiAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJtZW51XCIgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJkcm9wZG93bi1jb250ZW50IGhhcy10ZXh0LWNlbnRlcmVkXCIsXG4gICAgICAgICAgICAgICAgICBzdHlsZTogW192bS53aWR0aFN0eWxlLCBfdm0uaGVpZ2h0U3R5bGVdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTMxM2VhNDczXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0zMTNlYTQ3M1wiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0Ryb3Bkb3duLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkcm9wZG93blwiLFxuICAgIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IHNsb3Q6IFwibGFiZWxcIiB9LCBzbG90OiBcImxhYmVsXCIgfSwgW1xuICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKF92bS5sZW5ndGgpICsgXCJcXG4gICAgXCIpXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLmxlbmd0aE1lbnUsIGZ1bmN0aW9uKHZhbHVlLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IHZhbHVlID09PSBfdm0ubGVuZ3RoIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidXBkYXRlLWxlbmd0aFwiLCB2YWx1ZSlcbiAgICAgICAgICAgICAgICBfdm0uc2hvdyA9IGZhbHNlXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIFwiICsgX3ZtLl9zKHZhbHVlKSArIFwiXFxuICAgIFwiKV1cbiAgICAgICAgKVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00NzY5MGQ0N1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDc2OTBkNDdcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvdG9wQ29udHJvbHMvTGVuZ3RoTWVudS52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29sdW1uVmlzaWJpbGl0eS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRkMzQ4MWVhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ29sdW1uVmlzaWJpbGl0eS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0NvbHVtblZpc2liaWxpdHkudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRkMzQ4MWVhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGQzNDgxZWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkcm9wZG93bj5cbiAgICAgICAgPHNwYW4gc2xvdD1cImxhYmVsXCJcbiAgICAgICAgICAgIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgPGZhIGljb249XCJleWVcIj48L2ZhPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxhIHYtZm9yPVwiKGNvbHVtbiwgaW5kZXgpIGluIHRlbXBsYXRlLmNvbHVtbnNcIlxuICAgICAgICAgICAgOmtleT1cImluZGV4XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBjb2x1bW4ubWV0YS52aXNpYmxlIH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwiY29sdW1uLm1ldGEudmlzaWJsZSA9ICFjb2x1bW4ubWV0YS52aXNpYmxlOyRlbWl0KCd1cGRhdGUtdmlzaWJpbGl0eScpXCI+XG4gICAgICAgICAgICB7eyBjb2x1bW4ubGFiZWwgfX1cbiAgICAgICAgPC9hPlxuICAgIDwvZHJvcGRvd24+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFFeWUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1zb2xpZCc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bi52dWUnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYUV5ZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ29sdW1uVmlzaWJpbGl0eScsXG5cbiAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkcm9wZG93blwiLFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIixcbiAgICAgICAgICBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICBzbG90OiBcImxhYmVsXCJcbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcImV5ZVwiIH0gfSldLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fbChfdm0udGVtcGxhdGUuY29sdW1ucywgZnVuY3Rpb24oY29sdW1uLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgXCJhXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRyb3Bkb3duLWl0ZW1cIixcbiAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IGNvbHVtbi5tZXRhLnZpc2libGUgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBjb2x1bW4ubWV0YS52aXNpYmxlID0gIWNvbHVtbi5tZXRhLnZpc2libGVcbiAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJ1cGRhdGUtdmlzaWJpbGl0eVwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhjb2x1bW4ubGFiZWwpICsgXCJcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTRkMzQ4MWVhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00ZDM0ODFlYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9Db2x1bW5WaXNpYmlsaXR5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9BbGlnbm1lbnQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yZjY1NTVmMVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0FsaWdubWVudC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0FsaWdubWVudC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMmY2NTU1ZjFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0yZjY1NTVmMVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0FsaWdubWVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZHJvcGRvd24+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiXG4gICAgICAgICAgICBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgIDxmYSBpY29uPVwiYWxpZ24tanVzdGlmeVwiPjwvZmE+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGEgdi1mb3I9XCIodmFsdWUsIGtleSkgaW4gdGVtcGxhdGUuYWxpZ25zXCJcbiAgICAgICAgICAgIDprZXk9XCJrZXlcIlxuICAgICAgICAgICAgY2xhc3M9XCJkcm9wZG93bi1pdGVtXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IHRlbXBsYXRlLmFsaWduID09PSB2YWx1ZSB9XCJcbiAgICAgICAgICAgIEBjbGljaz1cInRlbXBsYXRlLmFsaWduID0gdmFsdWU7c2hvdz1mYWxzZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgPGZhIDppY29uPVwiaWNvbnNba2V5XVwiPjwvZmE+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvYT5cbiAgICA8L2Ryb3Bkb3duPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQWxpZ25KdXN0aWZ5LCBmYUFsaWduQ2VudGVyLCBmYUFsaWduTGVmdCwgZmFBbGlnblJpZ2h0IH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQnO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gJy4vRHJvcGRvd24udnVlJztcblxuZm9udGF3ZXNvbWUubGlicmFyeS5hZGQoZmFBbGlnbkp1c3RpZnksIGZhQWxpZ25DZW50ZXIsIGZhQWxpZ25MZWZ0LCBmYUFsaWduUmlnaHQpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0FsaWdubWVudCcsXG5cbiAgICBjb21wb25lbnRzOiB7IERyb3Bkb3duIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93OiBmYWxzZSxcbiAgICAgICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICAgICAgY2VudGVyOiBmYUFsaWduQ2VudGVyLFxuICAgICAgICAgICAgICAgIGxlZnQ6IGZhQWxpZ25MZWZ0LFxuICAgICAgICAgICAgICAgIHJpZ2h0OiBmYUFsaWduUmlnaHQsXG4gICAgICAgICAgICB9LFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHVwZGF0ZUNvbHVtblZpc2liaWxpdHkoY29sdW1uKSB7XG4gICAgICAgICAgICBjb2x1bW4ubWV0YS52aXNpYmxlID0gIWNvbHVtbi5tZXRhLnZpc2libGU7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUtY29sdW1uLXZpc2liaWxpdHknKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0FsaWdubWVudC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZHJvcGRvd25cIixcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIsXG4gICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgc2xvdDogXCJsYWJlbFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJhbGlnbi1qdXN0aWZ5XCIgfSB9KV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5hbGlnbnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogX3ZtLnRlbXBsYXRlLmFsaWduID09PSB2YWx1ZSB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS50ZW1wbGF0ZS5hbGlnbiA9IHZhbHVlXG4gICAgICAgICAgICAgICAgX3ZtLnNob3cgPSBmYWxzZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogX3ZtLmljb25zW2tleV0gfSB9KV0sXG4gICAgICAgICAgICAgIDFcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIH0pXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMmY2NTU1ZjFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTJmNjU1NWYxXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL0FsaWdubWVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU3R5bGVTZWxlY3Rvci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LThhYWI2MTg0XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU3R5bGVTZWxlY3Rvci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3RvcENvbnRyb2xzL1N0eWxlU2VsZWN0b3IudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LThhYWI2MTg0XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtOGFhYjYxODRcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkcm9wZG93biBjbGFzcz1cImlzLXJpZ2h0XCI+XG4gICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiXG4gICAgICAgICAgICBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgIDxmYSBpY29uPVwidGFibGVcIj48L2ZhPlxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxhIHYtZm9yPVwiKHN0eWxlLCBrZXkpIGluIHRlbXBsYXRlLnN0eWxlc1wiXG4gICAgICAgICAgICA6a2V5PVwia2V5XCJcbiAgICAgICAgICAgIGNsYXNzPVwiZHJvcGRvd24taXRlbVwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1hY3RpdmUnOiBoYXMoc3R5bGUpIH1cIlxuICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlKHN0eWxlKVwiPlxuICAgICAgICAgICAge3sga2V5IH19XG4gICAgICAgIDwvYT5cbiAgICA8L2Ryb3Bkb3duPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhVGFibGUgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1zb2xpZCc7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSAnLi9Ecm9wZG93bi52dWUnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYVRhYmxlKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdTdHlsZVNlbGVjdG9yJyxcblxuICAgIGNvbXBvbmVudHM6IHsgRHJvcGRvd24gfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc3R5bGVzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudGVtcGxhdGUuc3R5bGUuc3BsaXQoJyAnKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBoYXMoc3R5bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnN0eWxlcy5pbmNsdWRlcyhzdHlsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZShzdHlsZSkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5zdHlsZSA9IHRoaXMuaGFzKHN0eWxlKVxuICAgICAgICAgICAgICAgID8gdGhpcy5zdHlsZXMuZmlsdGVyKHZhbHVlID0+IHZhbHVlICE9PSBzdHlsZSkuam9pbignICcpXG4gICAgICAgICAgICAgICAgOiBgJHt0aGlzLnRlbXBsYXRlLnN0eWxlfSAke3N0eWxlfWA7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkcm9wZG93blwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiaXMtcmlnaHRcIiB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcInNwYW5cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIixcbiAgICAgICAgICBhdHRyczogeyBzbG90OiBcImxhYmVsXCIgfSxcbiAgICAgICAgICBzbG90OiBcImxhYmVsXCJcbiAgICAgICAgfSxcbiAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcInRhYmxlXCIgfSB9KV0sXG4gICAgICAgIDFcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5zdHlsZXMsIGZ1bmN0aW9uKHN0eWxlLCBrZXkpIHtcbiAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleToga2V5LFxuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZHJvcGRvd24taXRlbVwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1hY3RpdmVcIjogX3ZtLmhhcyhzdHlsZSkgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0udG9nZ2xlKHN0eWxlKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhrZXkpICsgXCJcXG4gICAgXCIpXVxuICAgICAgICApXG4gICAgICB9KVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LThhYWI2MTg0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi04YWFiNjE4NFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS90b3BDb250cm9scy9TdHlsZVNlbGVjdG9yLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIiB9LCBbXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaGFzLXBhZGRpbmctc21hbGwgaXMtaGFsZiBpcy1oaWRkZW4tbW9iaWxlXCIgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBpcy01XCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LFxuICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IF92bS50ZW1wbGF0ZS5pY29uIH0gfSldLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApLFxuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pMThuKF92bS50ZW1wbGF0ZS5uYW1lKSkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy1oYWxmIGhhcy10ZXh0LXJpZ2h0LXRhYmxldCBoYXMtdGV4dC1jZW50ZXJlZC1tb2JpbGVcIlxuICAgICAgICB9LFxuICAgICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLmJ1dHRvbnMuZ2xvYmFsLCBmdW5jdGlvbihidXR0b24pIHtcbiAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGJ1dHRvbi5sYWJlbCxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFwiLFxuICAgICAgICAgICAgICBjbGFzczogYnV0dG9uLmNsYXNzLFxuICAgICAgICAgICAgICBhdHRyczogeyBocmVmOiBidXR0b24uYWN0aW9uID09PSBcImhyZWZcIiA/IGJ1dHRvbi5wYXRoIDogbnVsbCB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5kb0FjdGlvbihidXR0b24pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLmkxOG4oYnV0dG9uLmxhYmVsKSkpXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBidXR0b24uaWNvbiB9IH0pXSxcbiAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIH0pXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy10d28tdGhpcmRzLWRlc2t0b3AgaGFzLXRleHQtY2VudGVyZWQtbW9iaWxlXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJsZW5ndGgtbWVudVwiLFxuICAgICAgICAgICAgX3ZtLl9nKFxuICAgICAgICAgICAgICB7IGF0dHJzOiB7IHRlbXBsYXRlOiBfdm0udGVtcGxhdGUsIGxlbmd0aDogX3ZtLmxlbmd0aCB9IH0sXG4gICAgICAgICAgICAgIF92bS4kbGlzdGVuZXJzXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJjb2x1bW4tdmlzaWJpbGl0eVwiLFxuICAgICAgICAgICAgX3ZtLl9nKHsgYXR0cnM6IHsgdGVtcGxhdGU6IF92bS50ZW1wbGF0ZSB9IH0sIF92bS4kbGlzdGVuZXJzKVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcInN0eWxlLXNlbGVjdG9yXCIsIHsgYXR0cnM6IHsgdGVtcGxhdGU6IF92bS50ZW1wbGF0ZSB9IH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJhbGlnbm1lbnRcIiwgeyBhdHRyczogeyB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlIH0gfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInJlbG9hZFwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwic3luY1wiIH0gfSldLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXVxuICAgICAgICAgICksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInJlc2V0XCIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJ1bmRvXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICBdLFxuICAgICAgICAxXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImNvbHVtbiBoYXMtcGFkZGluZy1zbWFsbCBpcy1vbmUtdGhpcmQtZGVza3RvcCBoYXMtdGV4dC1yaWdodFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IHRhYmxlLXNlYXJjaC1pbnB1dCBoYXMtdGV4dC1jZW50ZXJlZFwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInNlYXJjaFwiLCBwbGFjZWhvbGRlcjogX3ZtLmkxOG4oXCJTZWFyY2hcIikgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImlucHV0XCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcInNlYXJjaFwiIH0gfSldLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTI1NWI2OGM2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yNTViNjhjNlwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RvcENvbnRyb2xzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzA2Y2Q3MjZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVIZWFkZXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9UYWJsZUhlYWRlci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTcwNmNkNzI2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVGFibGVIZWFkZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTcwNmNkNzI2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzA2Y2Q3MjZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzA2Y2Q3MjZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVIZWFkZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJkMGJiZjA1ZVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MDZjZDcyNlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUhlYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzA2Y2Q3MjZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVIZWFkZXIudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTcwNmNkNzI2XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxudGgudnVlLXRhYmxlLWhlYWRlciB7XFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBjZW50ZXI7XFxuICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xcbn1cXG4udGFibGUtaGVhZGVyLWNvbnRyb2xzIC5zb3J0ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC41O1xcbn1cXG4udGFibGUtaGVhZGVyLWNvbnRyb2xzIC5zb3J0ZXI6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVIZWFkZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLG9CQUFvQjtFQUNwQiwyQkFBc0I7TUFBdEIsc0JBQXNCO0NBQUU7QUFFMUI7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtDQUFFO0FBQ2Y7SUFDRSxXQUFXO0NBQUVcIixcImZpbGVcIjpcIlRhYmxlSGVhZGVyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJ0aC52dWUtdGFibGUtaGVhZGVyIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7IH1cXG5cXG4udGFibGUtaGVhZGVyLWNvbnRyb2xzIC5zb3J0ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3BhY2l0eTogMC41OyB9XFxuICAudGFibGUtaGVhZGVyLWNvbnRyb2xzIC5zb3J0ZXI6aG92ZXIge1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTcwNmNkNzI2XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8dGhlYWQ+XG4gICAgICAgIDx0ciA6Y2xhc3M9XCJ0ZW1wbGF0ZS5zdHlsZVwiPlxuICAgICAgICAgICAgPHRoIDpjbGFzcz1cInRlbXBsYXRlLmFsaWduXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwidGVtcGxhdGUuY3J0Tm9cIj5cbiAgICAgICAgICAgICAgICB7eyBpMThuKHRlbXBsYXRlLmxhYmVscy5jcnRObykgfX1cbiAgICAgICAgICAgIDwvdGg+XG4gICAgICAgICAgICA8dGggY2xhc3M9XCJ2dWUtdGFibGUtaGVhZGVyXCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ0ZW1wbGF0ZS5hbGlnblwiXG4gICAgICAgICAgICAgICAgdi1mb3I9XCJjb2x1bW4gaW4gdGVtcGxhdGUuY29sdW1uc1wiXG4gICAgICAgICAgICAgICAgOmtleT1cImNvbHVtbi5sYWJlbFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImNvbHVtbi5tZXRhLnZpc2libGUgJiYgIWNvbHVtbi5tZXRhLmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICB7eyBpMThuKGNvbHVtbi5sYWJlbCkgfX1cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWJsZS1oZWFkZXItY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic29ydGVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVTb3J0KCRldmVudCwgY29sdW1uKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImNvbHVtbi5tZXRhLnNvcnRhYmxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cInNvcnRJY29uKGNvbHVtbi5tZXRhLnNvcnQpXCIgc2l6ZT1cInhzXCI+PC9mYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRlbGV0ZSBpcy1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImNvbHVtbi5tZXRhLnNvcnRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImNsZWFyQ29sdW1uU29ydChjb2x1bW4pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICAgICAgPHRoIDpjbGFzcz1cInRlbXBsYXRlLmFsaWduXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwidGVtcGxhdGUuYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgIHt7IGkxOG4odGVtcGxhdGUubGFiZWxzLmFjdGlvbnMpIH19XG4gICAgICAgICAgICA8L3RoPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGhlYWQ+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFTb3J0LCBmYVNvcnRVcCwgZmFTb3J0RG93biB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXNvbGlkJztcblxuZm9udGF3ZXNvbWUubGlicmFyeS5hZGQoZmFTb3J0LCBmYVNvcnRVcCwgZmFTb3J0RG93bik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnSGVhZGVyJyxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzb3J0SWNvbihzb3J0KSB7XG4gICAgICAgICAgICBpZiAoIXNvcnQpIHJldHVybiBmYVNvcnQ7XG5cbiAgICAgICAgICAgIHJldHVybiBzb3J0ID09PSAnQVNDJ1xuICAgICAgICAgICAgICAgID8gZmFTb3J0VXBcbiAgICAgICAgICAgICAgICA6IGZhU29ydERvd247XG4gICAgICAgIH0sXG4gICAgICAgIHRvZ2dsZVNvcnQoZXZlbnQsIHsgbWV0YSB9KSB7XG4gICAgICAgICAgICBjb25zdCB7IHNvcnQgfSA9IG1ldGE7XG5cbiAgICAgICAgICAgIGlmICghZXZlbnQuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyU29ydCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtZXRhLnNvcnQgPSBzb3J0ID09PSAnQVNDJyA/ICdERVNDJyA6ICdBU0MnO1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5zb3J0ID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NvcnQtdXBkYXRlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyQ29sdW1uU29ydCh7IG1ldGEgfSkge1xuICAgICAgICAgICAgbWV0YS5zb3J0ID0gbnVsbDtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnRlbXBsYXRlLmNvbHVtbnMuZmluZChjb2x1bW4gPT4gY29sdW1uLm1ldGEuc29ydCAhPT0gbnVsbCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnRlbXBsYXRlLnNvcnQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnc29ydC11cGRhdGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJTb3J0KCkge1xuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLmZvckVhY2goKHsgbWV0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgbWV0YS5zb3J0ID0gbnVsbDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cbiAgICB0aC52dWUtdGFibGUtaGVhZGVyIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgICAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLnRhYmxlLWhlYWRlci1jb250cm9scyB7XG4gICAgICAgIC5zb3J0ZXIge1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgb3BhY2l0eTogMC41O1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUhlYWRlci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidGhlYWRcIiwgW1xuICAgIF9jKFxuICAgICAgXCJ0clwiLFxuICAgICAgeyBjbGFzczogX3ZtLnRlbXBsYXRlLnN0eWxlIH0sXG4gICAgICBbXG4gICAgICAgIF92bS50ZW1wbGF0ZS5jcnROb1xuICAgICAgICAgID8gX2MoXCJ0aFwiLCB7IGNsYXNzOiBfdm0udGVtcGxhdGUuYWxpZ24gfSwgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmkxOG4oX3ZtLnRlbXBsYXRlLmxhYmVscy5jcnRObykpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS5fbChfdm0udGVtcGxhdGUuY29sdW1ucywgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICAgICAgcmV0dXJuIGNvbHVtbi5tZXRhLnZpc2libGUgJiYgIWNvbHVtbi5tZXRhLmhpZGRlblxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInRoXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBjb2x1bW4ubGFiZWwsXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2dWUtdGFibGUtaGVhZGVyXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnRlbXBsYXRlLmFsaWduXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pMThuKGNvbHVtbi5sYWJlbCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWhlYWRlci1jb250cm9sc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4ubWV0YS5zb3J0YWJsZVxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJzb3J0ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlU29ydCgkZXZlbnQsIGNvbHVtbilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBfdm0uc29ydEljb24oY29sdW1uLm1ldGEuc29ydCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IFwieHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBjb2x1bW4ubWV0YS5zb3J0XG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZGVsZXRlIGlzLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsZWFyQ29sdW1uU29ydChjb2x1bW4pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgfSksXG4gICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgIF92bS50ZW1wbGF0ZS5hY3Rpb25zXG4gICAgICAgICAgPyBfYyhcInRoXCIsIHsgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaTE4bihfdm0udGVtcGxhdGUubGFiZWxzLmFjdGlvbnMpKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICBdLFxuICAgICAgMlxuICAgIClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzA2Y2Q3MjZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTcwNmNkNzI2XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlSGVhZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWRiZmE5ZmNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUJvZHkudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9UYWJsZUJvZHkudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01ZGJmYTlmY1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVGFibGVCb2R5LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gXCJkYXRhLXYtNWRiZmE5ZmNcIlxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNWRiZmE5ZmNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi01ZGJmYTlmY1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWRiZmE5ZmNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUJvZHkudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJhNjA1NmQwNFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi01ZGJmYTlmY1xcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlQm9keS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNWRiZmE5ZmNcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9UYWJsZUJvZHkudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVkYmZhOWZjXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZGl2LnRhYmxlLWNydC1ub1tkYXRhLXYtNWRiZmE5ZmNdIHtcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuZGl2LnRhYmxlLWNydC1ubyAuY3J0LW5vLWxhYmVsW2RhdGEtdi01ZGJmYTlmY10ge1xcbiAgICBtYXJnaW46IGF1dG87XFxufVxcbmRpdi50YWJsZS1jcnQtbm8gLmhpZGRlbi1jb250cm9sc1tkYXRhLXYtNWRiZmE5ZmNdIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMC4xZW07XFxufVxcbnRkLnRhYmxlLWFjdGlvbnNbZGF0YS12LTVkYmZhOWZjXSB7XFxuICBwYWRkaW5nOiAuMzVlbSAuNWVtO1xcbn1cXG50ZC50YWJsZS1hY3Rpb25zIHNwYW4udGFibGUtYWN0aW9uLWJ1dHRvbnNbZGF0YS12LTVkYmZhOWZjXSB7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXG4gICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG59XFxudGQudGFibGUtYWN0aW9ucyAuYnV0dG9uLmlzLXNtYWxsLmlzLXRhYmxlLWJ1dHRvbltkYXRhLXYtNWRiZmE5ZmNdIHtcXG4gICAgaGVpZ2h0OiAxLjZlbTtcXG4gICAgd2lkdGg6IDEuNmVtO1xcbiAgICBmb250LXNpemU6IC45ZW07XFxufVxcbmxpLmNoaWxkLXJvd1tkYXRhLXYtNWRiZmE5ZmNdOm5vdCg6bGFzdC1jaGlsZCkge1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlZmVmZWY7XFxufVxcbmxpLmNoaWxkLXJvd1tkYXRhLXYtNWRiZmE5ZmNdIHtcXG4gIHBhZGRpbmc6IDAuNWVtIDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQTtFQUNFLG9CQUFvQjtFQUNwQixxQkFBYztFQUFkLHFCQUFjO0VBQWQsY0FBYztDQUFFO0FBQ2hCO0lBQ0UsYUFBYTtDQUFFO0FBQ2pCO0lBQ0UsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FBRTtBQUV4QjtFQUNFLG9CQUFvQjtDQUFFO0FBQ3RCO0lBQ0UsNEJBQXFCO0lBQXJCLDRCQUFxQjtJQUFyQixxQkFBcUI7Q0FBRTtBQUN6QjtJQUNFLGNBQWM7SUFDZCxhQUFhO0lBQ2IsZ0JBQWdCO0NBQUU7QUFFdEI7RUFDRSxpQ0FBaUM7Q0FBRTtBQUVyQztFQUNFLGlCQUFpQjtDQUFFXCIsXCJmaWxlXCI6XCJUYWJsZUJvZHkudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImRpdi50YWJsZS1jcnQtbm8ge1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG4gIGRpdi50YWJsZS1jcnQtbm8gLmNydC1uby1sYWJlbCB7XFxuICAgIG1hcmdpbjogYXV0bzsgfVxcbiAgZGl2LnRhYmxlLWNydC1ubyAuaGlkZGVuLWNvbnRyb2xzIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXRvcDogMC4xZW07IH1cXG5cXG50ZC50YWJsZS1hY3Rpb25zIHtcXG4gIHBhZGRpbmc6IC4zNWVtIC41ZW07IH1cXG4gIHRkLnRhYmxlLWFjdGlvbnMgc3Bhbi50YWJsZS1hY3Rpb24tYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4OyB9XFxuICB0ZC50YWJsZS1hY3Rpb25zIC5idXR0b24uaXMtc21hbGwuaXMtdGFibGUtYnV0dG9uIHtcXG4gICAgaGVpZ2h0OiAxLjZlbTtcXG4gICAgd2lkdGg6IDEuNmVtO1xcbiAgICBmb250LXNpemU6IC45ZW07IH1cXG5cXG5saS5jaGlsZC1yb3c6bm90KDpsYXN0LWNoaWxkKSB7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VmZWZlZjsgfVxcblxcbmxpLmNoaWxkLXJvdyB7XFxuICBwYWRkaW5nOiAwLjVlbSAwOyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTVkYmZhOWZjXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8dGJvZHk+XG4gICAgICAgIDx0ciB2LWZvcj1cIihyb3csIGluZGV4KSBpbiBib2R5LmRhdGFcIlxuICAgICAgICAgICAgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICA8dGQgOmNsYXNzPVwidGVtcGxhdGUuYWxpZ25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJ0ZW1wbGF0ZS5jcnRObyAmJiAhaXNDaGlsZChyb3cpXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLWNydC1ub1wiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNydC1uby1sYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgZ2V0SW5kZXgocm93KSB9fVxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaGlkZGVuLWNvbnRyb2xzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJoaWRkZW5Db3VudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGVFeHBhbmQocm93LCBpbmRleClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cImlzRXhwYW5kZWQocm93KSA/ICdtaW51cy1zcXVhcmUnIDogJ3BsdXMtc3F1YXJlJ1wiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgOmNsYXNzPVwidGVtcGxhdGUuYWxpZ25cIlxuICAgICAgICAgICAgICAgIHYtZm9yPVwiKGNvbHVtbiwgaW5kZXgpIGluIHRlbXBsYXRlLmNvbHVtbnNcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJpbmRleFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImNvbHVtbi5tZXRhLnZpc2libGUgJiYgIWNvbHVtbi5tZXRhLmhpZGRlbiAmJiAhaXNDaGlsZChyb3cpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNvbHVtbi5tZXRhLmJvb2xlYW5cIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRhZyBpcy10YWJsZS10YWdcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJyb3dbY29sdW1uLm5hbWVdID8gJ2lzLXN1Y2Nlc3MnIDogJ2lzLWRhbmdlcidcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgOmljb249XCJyb3dbY29sdW1uLm5hbWVdID8gJ2NoZWNrJyA6ICd0aW1lcydcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cImNvbHVtbi5tZXRhLnJlbmRlclwiXG4gICAgICAgICAgICAgICAgICAgIHYtaHRtbD1cImN1c3RvbVJlbmRlcihyb3csIGNvbHVtbilcIj5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVwiY29sdW1uLm1ldGEudHJhbnNsYXRpb25cIj57eyBpMThuKHJvd1tjb2x1bW4ubmFtZV0pIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT57eyByb3dbY29sdW1uLm5hbWVdIH19PC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cInRhYmxlLWFjdGlvbnNcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInRlbXBsYXRlLmFsaWduXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwidGVtcGxhdGUuYWN0aW9ucyAmJiAhaXNDaGlsZChyb3cpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWJsZS1hY3Rpb24tYnV0dG9uc1wiPlxuICAgICAgICAgICAgICAgICAgICA8YSB2LWZvcj1cIihidXR0b24sIGluZGV4KSBpbiB0ZW1wbGF0ZS5idXR0b25zLnJvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gaXMtc21hbGwgaXMtdGFibGUtYnV0dG9uIGhhcy1tYXJnaW4tbGVmdC1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJidXR0b24uY2xhc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJidXR0b24uYWN0aW9uID09PSAnaHJlZicgPyBnZXRQYXRoKGJ1dHRvbiwgcm93LmR0Um93SWQpIDogbnVsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJidXR0b24uY29uZmlybWF0aW9uID8gc2hvd01vZGFsKGJ1dHRvbiwgcm93KSA6IGRvQWN0aW9uKGJ1dHRvbiwgcm93KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIDppY29uPVwiYnV0dG9uLmljb25cIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCA6Y29sc3Bhbj1cImhpZGRlbkNvbFNwYW5cIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInRlbXBsYXRlLmFsaWduXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiaXNDaGlsZChyb3cpXCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJjaGlsZC1yb3dcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCJjb2x1bW4gaW4gcm93XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJjb2x1bW4ubGFiZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxiPnt7IGNvbHVtbi5sYWJlbCB9fTwvYj46IHt7IGNvbHVtbi52YWx1ZSB9fVxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICA8L3RkPlxuICAgICAgICA8L3RyPlxuICAgICAgICA8bW9kYWwgdi1pZj1cIm1vZGFsXCJcbiAgICAgICAgICAgIDpzaG93PVwibW9kYWxcIlxuICAgICAgICAgICAgOmkxOG49XCJpMThuXCJcbiAgICAgICAgICAgIDptZXNzYWdlPVwiYnV0dG9uLm1lc3NhZ2VcIlxuICAgICAgICAgICAgQGNhbmNlbC1hY3Rpb249XCJjbG9zZU1vZGFsKClcIlxuICAgICAgICAgICAgQGNvbW1pdC1hY3Rpb249XCJkb0FjdGlvbihidXR0b24sIHJvdylcIj5cbiAgICAgICAgPC9tb2RhbD5cbiAgICA8L3Rib2R5PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhTWludXNTcXVhcmUsIGZhUGx1c1NxdWFyZSB9IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXNvbGlkJztcbmltcG9ydCBNb2RhbCBmcm9tICcuL01vZGFsLnZ1ZSc7XG5cbmZvbnRhd2Vzb21lLmxpYnJhcnkuYWRkKGZhTWludXNTcXVhcmUsIGZhUGx1c1NxdWFyZSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnVGFibGVCb2R5JyxcblxuICAgIGNvbXBvbmVudHM6IHsgTW9kYWwgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGkxOG46IHtcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbVJlbmRlcjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBleHBhbmRlZDoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgaGlkZGVuQ29sdW1ucygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnRlbXBsYXRlLmNvbHVtbnNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubWV0YS5oaWRkZW4gJiYgY29sdW1uLm1ldGEudmlzaWJsZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGRlbkNvdW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaGlkZGVuQ29sdW1ucy5sZW5ndGg7XG4gICAgICAgIH0sXG4gICAgICAgIGhpZGRlbkNvbFNwYW4oKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy50ZW1wbGF0ZS5jb2x1bW5zLmxlbmd0aCAtIHRoaXMuaGlkZGVuQ29sdW1ucy5sZW5ndGhcbiAgICAgICAgICAgICAgICArICh0aGlzLnRlbXBsYXRlLmFjdGlvbnMgPyAyIDogMSk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2RhbDogZmFsc2UsXG4gICAgICAgICAgICByb3c6IG51bGwsXG4gICAgICAgICAgICBidXR0b246IG51bGwsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIGhpZGRlbkNvdW50OiB7XG4gICAgICAgICAgICBoYW5kbGVyKG5ld1ZhbCkge1xuICAgICAgICAgICAgICAgIGlmICghbmV3VmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2hpbGRzKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRQYXRoKGJ1dHRvbiwgZHRSb3dJZCkge1xuICAgICAgICAgICAgcmV0dXJuIGJ1dHRvbi5wYXRoLnJlcGxhY2UoJ2R0Um93SWQnLCBkdFJvd0lkKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hvd01vZGFsKGJ1dHRvbiwgcm93KSB7XG4gICAgICAgICAgICB0aGlzLnJvdyA9IHJvdztcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uID0gYnV0dG9uO1xuICAgICAgICAgICAgdGhpcy5tb2RhbCA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGNsb3NlTW9kYWwoKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGFsID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnJvdyA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbiA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGRvQWN0aW9uKGJ1dHRvbiwgcm93KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5tb2RhbCkge1xuICAgICAgICAgICAgICAgIHRoaXMubW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJ1dHRvbi5ldmVudCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoYnV0dG9uLmV2ZW50LCByb3cpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmFjdGlvbiA9PT0gJ2FqYXgnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnYWpheCcsIGJ1dHRvbi5tZXRob2QsIHRoaXMuZ2V0UGF0aChidXR0b24sIHJvdy5kdFJvd0lkKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoYnV0dG9uLmFjdGlvbiA9PT0gJ3JvdXRlcicpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IGJ1dHRvbi5yb3V0ZSwgcGFyYW1zOiB0aGlzLmdldFJvdXRlUGFyYW1zKGJ1dHRvbiwgcm93KSB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Um91dGVQYXJhbXMoYnV0dG9uLCByb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBpZDogcm93LmR0Um93SWQsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBpZiAoYnV0dG9uLnBhcmFtcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKHBhcmFtcywgYnV0dG9uLnBhcmFtcyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBwYXJhbXM7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEluZGV4KHJvdykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYm9keS5kYXRhLmZpbHRlcihyID0+ICF0aGlzLmlzQ2hpbGQocikpXG4gICAgICAgICAgICAgICAgLmZpbmRJbmRleChyID0+IHIuZHRSb3dJZCA9PT0gcm93LmR0Um93SWQpICsgdGhpcy5zdGFydCArIDE7XG4gICAgICAgIH0sXG4gICAgICAgIGlzRXhwYW5kZWQocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5leHBhbmRlZC5pbmNsdWRlcyhyb3cuZHRSb3dJZCk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzQ2hpbGQocm93KSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheShyb3cpO1xuICAgICAgICB9LFxuICAgICAgICB0b2dnbGVFeHBhbmQocm93LCBpbmRleCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzRXhwYW5kZWQocm93KSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQucHVzaChyb3cuZHRSb3dJZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZFJvdyhyb3csIGluZGV4KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGlkeCA9IHRoaXMuZXhwYW5kZWQuZmluZEluZGV4KGlkID0+IGlkID09PSByb3cuZHRSb3dJZCk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgdGhpcy5ib2R5LmRhdGEuc3BsaWNlKGluZGV4ICsgMSwgMSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZENoaWxkUm93KHJvdywgaW5kZXgpIHtcbiAgICAgICAgICAgIGNvbnN0IG5ld1JvdyA9IHRoaXMuaGlkZGVuQ29sdW1ucy5yZWR1Y2UoKGNvbGxlY3RvciwgY29sdW1uKSA9PiB7XG4gICAgICAgICAgICAgICAgY29sbGVjdG9yLnB1c2goeyBsYWJlbDogY29sdW1uLmxhYmVsLCB2YWx1ZTogcm93W2NvbHVtbi5uYW1lXSB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gY29sbGVjdG9yO1xuICAgICAgICAgICAgfSwgW10pO1xuXG4gICAgICAgICAgICB0aGlzLmJvZHkuZGF0YS5zcGxpY2UoaW5kZXggKyAxLCAwLCBuZXdSb3cpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVDaGlsZHMoKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleGVzID0gW107XG5cbiAgICAgICAgICAgIHRoaXMuYm9keS5kYXRhLmZvckVhY2goKHJvdywgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NoaWxkKHJvdykpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXhlcy5wdXNoKGluZGV4KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaW5kZXhlcy5zb3J0KChhLCBiKSA9PiBhIDwgYikuZm9yRWFjaChpbmRleCA9PiB0aGlzLmJvZHkuZGF0YS5zcGxpY2UoaW5kZXgsIDEpKTtcblxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZC5zcGxpY2UoMCk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG5cbiAgICBkaXYudGFibGUtY3J0LW5vIHtcbiAgICAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5jcnQtbm8tbGFiZWwge1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhpZGRlbi1jb250cm9scyB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMWVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGQudGFibGUtYWN0aW9ucyB7XG4gICAgICAgIHBhZGRpbmc6IC4zNWVtIC41ZW07XG5cbiAgICAgICAgc3Bhbi50YWJsZS1hY3Rpb24tYnV0dG9ucyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idXR0b24uaXMtc21hbGwuaXMtdGFibGUtYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogMS42ZW07XG4gICAgICAgICAgICB3aWR0aDogMS42ZW07XG4gICAgICAgICAgICBmb250LXNpemU6IC45ZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBsaS5jaGlsZC1yb3c6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWZlZmVmO1xuICAgIH1cblxuICAgIGxpLmNoaWxkLXJvdyB7XG4gICAgICAgIHBhZGRpbmc6IDAuNWVtIDA7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUJvZHkudnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NDZjNzk5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDQ2Yzc5OWZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNDQ2Yzc5OWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi00NDZjNzk5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NDZjNzk5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImZmNWUyMTNlXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ0NmM3OTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NDZjNzk5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNDQ2Yzc5OWZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1vZGFsLmlzLWFjdGl2ZSB7XFxuICAgIHotaW5kZXg6IDExMDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUE4REE7SUFDQSxjQUFBO0NBQ0FcIixcImZpbGVcIjpcIk1vZGFsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cXFwiYW5pbWF0ZWQgZmFkZUluXFxcIlxcbiAgICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVxcXCJhbmltYXRlZCBmYWRlT3V0XFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsXFxcIlxcbiAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtYWN0aXZlJzogc2hvdyB9XFxcIlxcbiAgICAgICAgICAgIHYtaWY9XFxcInNob3dcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcIm1vZGFsLWJhY2tncm91bmRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRhYmxlLW1vZGFsIG1vZGFsLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3hcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVxcXCJzdWJ0aXRsZSBpcy01XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaTE4bihtZXNzYWdlIHx8IFxcXCJBcmUgeW91IHN1cmUgdGhhdCB5b3Ugd2FudCB0byBwZXJmb3JtIHRoaXMgYWN0aW9uP1xcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cXG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgICAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1sZWZ0XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiY29udHJvbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1zdWNjZXNzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ2NhbmNlbC1hY3Rpb24nKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaTE4bihcXFwiQ2FuY2VsXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ2NvbW1pdC1hY3Rpb24nKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGkxOG4oXFxcIlllc1xcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvdHJhbnNpdGlvbj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBwcm9wczoge1xcbiAgICAgICAgc2hvdzoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgbWVzc2FnZToge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGkxOG46IHtcXG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIC5tb2RhbC5pcy1hY3RpdmUge1xcbiAgICAgICAgei1pbmRleDogMTEwMDtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTQ0NmM3OTlmXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTc3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiPHRlbXBsYXRlPlxuXG4gICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluXCJcbiAgICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZU91dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogc2hvdyB9XCJcbiAgICAgICAgICAgIHYtaWY9XCJzaG93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhYmxlLW1vZGFsIG1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJzdWJ0aXRsZSBpcy01XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaTE4bihtZXNzYWdlIHx8IFwiQXJlIHlvdSBzdXJlIHRoYXQgeW91IHdhbnQgdG8gcGVyZm9ybSB0aGlzIGFjdGlvbj9cIikgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgPGhyPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1sZWZ0XCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29udHJvbHNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgnY2FuY2VsLWFjdGlvbicpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpMThuKFwiQ2FuY2VsXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjb21taXQtYWN0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpMThuKFwiWWVzXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIHNob3c6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIC5tb2RhbC5pcy1hY3RpdmUge1xuICAgICAgICB6LWluZGV4OiAxMTAwO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvTW9kYWwudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInRyYW5zaXRpb25cIixcbiAgICB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIGZhZGVJblwiLFxuICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIGZhZGVPdXRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLnNob3dcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsXCIsIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IF92bS5zaG93IH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1iYWNrZ3JvdW5kXCIgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtbW9kYWwgbW9kYWwtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImJveFwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdChcImNvbnRlbnRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJzdWJ0aXRsZSBpcy01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaTE4bihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm1lc3NhZ2UgfHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkFyZSB5b3Ugc3VyZSB0aGF0IHlvdSB3YW50IHRvIHBlcmZvcm0gdGhpcyBhY3Rpb24/XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWxlZnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1pdGVtXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcImNvbnRyb2xzXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjYW5jZWwtYWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5pMThuKFwiQ2FuY2VsXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbiBpcy1kYW5nZXIgaGFzLW1hcmdpbi1sZWZ0LXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY29tbWl0LWFjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmkxOG4oXCJZZXNcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNDQ2Yzc5OWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ0NmM3OTlmXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE3OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0Ym9keVwiLFxuICAgIFtcbiAgICAgIF92bS5fbChfdm0uYm9keS5kYXRhLCBmdW5jdGlvbihyb3csIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcInRyXCIsXG4gICAgICAgICAgeyBrZXk6IGluZGV4IH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX3ZtLnRlbXBsYXRlLmNydE5vICYmICFfdm0uaXNDaGlsZChyb3cpXG4gICAgICAgICAgICAgID8gX2MoXCJ0ZFwiLCB7IGNsYXNzOiBfdm0udGVtcGxhdGUuYWxpZ24gfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ0YWJsZS1jcnQtbm9cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImNydC1uby1sYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldEluZGV4KHJvdykpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfdm0uaGlkZGVuQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhpZGRlbi1jb250cm9sc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGVFeHBhbmQocm93LCBpbmRleClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGljb246IF92bS5pc0V4cGFuZGVkKHJvdylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBcIm1pbnVzLXNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogXCJwbHVzLXNxdWFyZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl9sKF92bS50ZW1wbGF0ZS5jb2x1bW5zLCBmdW5jdGlvbihjb2x1bW4sIGluZGV4KSB7XG4gICAgICAgICAgICAgIHJldHVybiBjb2x1bW4ubWV0YS52aXNpYmxlICYmXG4gICAgICAgICAgICAgICAgIWNvbHVtbi5tZXRhLmhpZGRlbiAmJlxuICAgICAgICAgICAgICAgICFfdm0uaXNDaGlsZChyb3cpXG4gICAgICAgICAgICAgICAgPyBfYyhcInRkXCIsIHsga2V5OiBpbmRleCwgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbi5tZXRhLmJvb2xlYW5cbiAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInRhZyBpcy10YWJsZS10YWdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogcm93W2NvbHVtbi5uYW1lXSA/IFwiaXMtc3VjY2Vzc1wiIDogXCJpcy1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiByb3dbY29sdW1uLm5hbWVdID8gXCJjaGVja1wiIDogXCJ0aW1lc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICA6IGNvbHVtbi5tZXRhLnJlbmRlclxuICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhfdm0uY3VzdG9tUmVuZGVyKHJvdywgY29sdW1uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IGNvbHVtbi5tZXRhLnRyYW5zbGF0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLmkxOG4ocm93W2NvbHVtbi5uYW1lXSkpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKHJvd1tjb2x1bW4ubmFtZV0pKV0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS50ZW1wbGF0ZS5hY3Rpb25zICYmICFfdm0uaXNDaGlsZChyb3cpXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWFjdGlvbnNcIiwgY2xhc3M6IF92bS50ZW1wbGF0ZS5hbGlnbiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLWFjdGlvbi1idXR0b25zXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLmJ1dHRvbnMucm93LCBmdW5jdGlvbihidXR0b24sIGluZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGlzLXNtYWxsIGlzLXRhYmxlLWJ1dHRvbiBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogYnV0dG9uLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b24uYWN0aW9uID09PSBcImhyZWZcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLmdldFBhdGgoYnV0dG9uLCByb3cuZHRSb3dJZClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbi5jb25maXJtYXRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF92bS5zaG93TW9kYWwoYnV0dG9uLCByb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uZG9BY3Rpb24oYnV0dG9uLCByb3cpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IGJ1dHRvbi5pY29uIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmlzQ2hpbGQocm93KVxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLnRlbXBsYXRlLmFsaWduLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBjb2xzcGFuOiBfdm0uaGlkZGVuQ29sU3BhbiB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKHJvdywgZnVuY3Rpb24oY29sdW1uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBrZXk6IGNvbHVtbi5sYWJlbCwgc3RhdGljQ2xhc3M6IFwiY2hpbGQtcm93XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiYlwiLCBbX3ZtLl92KF92bS5fcyhjb2x1bW4ubGFiZWwpKV0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArIF92bS5fcyhjb2x1bW4udmFsdWUpICsgXCJcXG4gICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSxcbiAgICAgICAgICAyXG4gICAgICAgIClcbiAgICAgIH0pLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5tb2RhbFxuICAgICAgICA/IF9jKFwibW9kYWxcIiwge1xuICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgc2hvdzogX3ZtLm1vZGFsLFxuICAgICAgICAgICAgICBpMThuOiBfdm0uaTE4bixcbiAgICAgICAgICAgICAgbWVzc2FnZTogX3ZtLmJ1dHRvbi5tZXNzYWdlXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJjYW5jZWwtYWN0aW9uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5jbG9zZU1vZGFsKClcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjb21taXQtYWN0aW9uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5kb0FjdGlvbihfdm0uYnV0dG9uLCBfdm0ucm93KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSlcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTVkYmZhOWZjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi01ZGJmYTlmY1wiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlQm9keS52dWVcbi8vIG1vZHVsZSBpZCA9IDExODBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWIyZDE5ZjBhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlRm9vdGVyLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVGFibGVGb290ZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1iMmQxOWYwYVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1RhYmxlRm9vdGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1iMmQxOWYwYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWIyZDE5ZjBhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvVGFibGVGb290ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWIyZDE5ZjBhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlRm9vdGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDE0YTNhNzhcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYjJkMTlmMGFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVGFibGVGb290ZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWIyZDE5ZjBhXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1RhYmxlRm9vdGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1iMmQxOWYwYVwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1RhYmxlRm9vdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiVGFibGVGb290ZXIudnVlXCIsXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYjJkMTlmMGFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExODNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8dGZvb3Q+XG4gICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0ZD48L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzPVwiaGFzLXRleHQtY2VudGVyZWQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJ0ZW1wbGF0ZS5jb2x1bW5zWzBdLm1ldGEudmlzaWJsZSAmJiAhdGVtcGxhdGUuY29sdW1uc1swXS5tZXRhLmhpZGRlblwiPlxuICAgICAgICAgICAgICAgIHt7IGkxOG4oXCJUb3RhbFwiKSB9fVxuICAgICAgICAgICAgPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzcz1cImhhcy10ZXh0LWNlbnRlcmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkXCJcbiAgICAgICAgICAgICAgICB2LWZvcj1cImkgaW4gdGVtcGxhdGUuY29sdW1ucy5sZW5ndGggLSAxXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiaVwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInRlbXBsYXRlLmNvbHVtbnNbaV0ubWV0YS52aXNpYmxlICYmICF0ZW1wbGF0ZS5jb2x1bW5zW2ldLm1ldGEuaGlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cInRlbXBsYXRlLmNvbHVtbnNbaV0ubWV0YS50b3RhbFwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBudW1iZXJGb3JtYXQoYm9keS50b3RhbFt0ZW1wbGF0ZS5jb2x1bW5zW2ldLm5hbWVdKSB9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGQ+XG4gICAgICAgICAgICA8dGQgdi1pZj1cInRlbXBsYXRlLmFjdGlvbnNcIj48L3RkPlxuICAgICAgICA8L3RyPlxuICAgIDwvdGZvb3Q+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnVGFibGVGb290ZXInLFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaTE4bjoge1xuICAgICAgICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBudW1iZXJGb3JtYXQodmFsdWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHggPSB2YWx1ZS50b1N0cmluZygpLnNwbGl0KCcuJyk7XG4gICAgICAgICAgICBsZXQgeDEgPSB4WzBdO1xuICAgICAgICAgICAgY29uc3QgeDIgPSB4Lmxlbmd0aCA+IDEgPyBgLiR7eFsxXX1gIDogJyc7XG4gICAgICAgICAgICBjb25zdCByZ3ggPSAvKFxcZCspKFxcZHszfSkvO1xuXG4gICAgICAgICAgICB3aGlsZSAocmd4LnRlc3QoeDEpKSB7XG4gICAgICAgICAgICAgICAgeDEgPSB4MS5yZXBsYWNlKHJneCwgJyQxLCQyJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB4MSArIHgyO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwidGZvb3RcIiwgW1xuICAgIF9jKFxuICAgICAgXCJ0clwiLFxuICAgICAgW1xuICAgICAgICBfYyhcInRkXCIpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0udGVtcGxhdGUuY29sdW1uc1swXS5tZXRhLnZpc2libGUgJiZcbiAgICAgICAgIV92bS50ZW1wbGF0ZS5jb2x1bW5zWzBdLm1ldGEuaGlkZGVuXG4gICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgXCJ0ZFwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhhcy10ZXh0LWNlbnRlcmVkIGhhcy10ZXh0LXdlaWdodC1ib2xkXCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmkxOG4oXCJUb3RhbFwiKSkgKyBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0uX2woX3ZtLnRlbXBsYXRlLmNvbHVtbnMubGVuZ3RoIC0gMSwgZnVuY3Rpb24oaSkge1xuICAgICAgICAgIHJldHVybiBfdm0udGVtcGxhdGUuY29sdW1uc1tpXS5tZXRhLnZpc2libGUgJiZcbiAgICAgICAgICAgICFfdm0udGVtcGxhdGUuY29sdW1uc1tpXS5tZXRhLmhpZGRlblxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcInRkXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAga2V5OiBpLFxuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGFzLXRleHQtY2VudGVyZWQgaGFzLXRleHQtd2VpZ2h0LWJvbGRcIlxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLnRlbXBsYXRlLmNvbHVtbnNbaV0ubWV0YS50b3RhbFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubnVtYmVyRm9ybWF0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uYm9keS50b3RhbFtfdm0udGVtcGxhdGUuY29sdW1uc1tpXS5uYW1lXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIH0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfdm0udGVtcGxhdGUuYWN0aW9ucyA/IF9jKFwidGRcIikgOiBfdm0uX2UoKVxuICAgICAgXSxcbiAgICAgIDJcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWIyZDE5ZjBhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1iMmQxOWYwYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9UYWJsZUZvb3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExODVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU5ZjIxMDAyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1JlY29yZHNJbmZvLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUmVjb3Jkc0luZm8udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi01OWYyMTAwMlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1JlY29yZHNJbmZvLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01OWYyMTAwMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTU5ZjIxMDAyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU5ZjIxMDAyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1JlY29yZHNJbmZvLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiM2U1NWI3ZGFcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTlmMjEwMDJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUmVjb3Jkc0luZm8udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTU5ZjIxMDAyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1JlY29yZHNJbmZvLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01OWYyMTAwMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4udGFibGUtZW50cmllcy1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAxNXB4O1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBeUNBO0lBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiUmVjb3Jkc0luZm8udnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPHNwYW4gY2xhc3M9XFxcInRhYmxlLWVudHJpZXMtaW5mb1xcXCI+XFxuICAgICAgICB7eyBgJHtpMThuKCdGcm9tJyl9ICR7c3RhcnQgKyAxfSAke2kxOG4oJ3RvJyl9ICR7KHN0YXJ0ICsgbGVuZ3RoKSA8PSBib2R5LmZpbHRlcmVkID8gc3RhcnQgKyBsZW5ndGggOiBib2R5LmZpbHRlcmVkfSBcXFxcXFxuICAgICAgICAke2kxOG4oJ29mJyl9ICR7Ym9keS5maWx0ZXJlZH0gJHtpMThuKCdlbnRyaWVzJyl9YCB9fVxcbiAgICAgICAgPHNwYW4gdi1pZj1cXFwiYm9keS5maWx0ZXJlZCAhPT0gYm9keS5jb3VudFxcXCI+XFxuICAgICAgICAgICAge3sgYCgke2kxOG4oJ2ZpbHRlcmVkJyl9ICR7aTE4bignZnJvbScpfSAke2JvZHkuY291bnR9IFxcXFxcXG4gICAgICAgICAgICAke2kxOG4oJ3RvdGFsJyl9ICR7aTE4bigncmVjb3JkcycpfSlgIH19XFxuICAgICAgICA8L3NwYW4+XFxuICAgIDwvc3Bhbj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnUmVjb3Jkc0luZm8nLFxcblxcbiAgICBwcm9wczoge1xcbiAgICAgICAgc3RhcnQ6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgbGVuZ3RoOiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGJvZHk6IHtcXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgaTE4bjoge1xcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgLnRhYmxlLWVudHJpZXMtaW5mbyB7XFxuICAgICAgICBmb250LXNpemU6IDE1cHg7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi01OWYyMTAwMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxzcGFuIGNsYXNzPVwidGFibGUtZW50cmllcy1pbmZvXCI+XG4gICAgICAgIHt7IGAke2kxOG4oJ0Zyb20nKX0gJHtzdGFydCArIDF9ICR7aTE4bigndG8nKX0gJHsoc3RhcnQgKyBsZW5ndGgpIDw9IGJvZHkuZmlsdGVyZWQgPyBzdGFydCArIGxlbmd0aCA6IGJvZHkuZmlsdGVyZWR9IFxcXG4gICAgICAgICR7aTE4bignb2YnKX0gJHtib2R5LmZpbHRlcmVkfSAke2kxOG4oJ2VudHJpZXMnKX1gIH19XG4gICAgICAgIDxzcGFuIHYtaWY9XCJib2R5LmZpbHRlcmVkICE9PSBib2R5LmNvdW50XCI+XG4gICAgICAgICAgICB7eyBgKCR7aTE4bignZmlsdGVyZWQnKX0gJHtpMThuKCdmcm9tJyl9ICR7Ym9keS5jb3VudH0gXFxcbiAgICAgICAgICAgICR7aTE4bigndG90YWwnKX0gJHtpMThuKCdyZWNvcmRzJyl9KWAgfX1cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdSZWNvcmRzSW5mbycsXG5cbiAgICBwcm9wczoge1xuICAgICAgICBzdGFydDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGxlbmd0aDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgLnRhYmxlLWVudHJpZXMtaW5mbyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1JlY29yZHNJbmZvLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFibGUtZW50cmllcy1pbmZvXCIgfSwgW1xuICAgIF92bS5fdihcbiAgICAgIFwiXFxuICAgIFwiICtcbiAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgIF92bS5pMThuKFwiRnJvbVwiKSArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAoX3ZtLnN0YXJ0ICsgMSkgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgX3ZtLmkxOG4oXCJ0b1wiKSArXG4gICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAoX3ZtLnN0YXJ0ICsgX3ZtLmxlbmd0aCA8PSBfdm0uYm9keS5maWx0ZXJlZFxuICAgICAgICAgICAgICA/IF92bS5zdGFydCArIF92bS5sZW5ndGhcbiAgICAgICAgICAgICAgOiBfdm0uYm9keS5maWx0ZXJlZCkgK1xuICAgICAgICAgICAgXCIgICAgIFwiICtcbiAgICAgICAgICAgIF92bS5pMThuKFwib2ZcIikgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgX3ZtLmJvZHkuZmlsdGVyZWQgK1xuICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgX3ZtLmkxOG4oXCJlbnRyaWVzXCIpXG4gICAgICAgICkgK1xuICAgICAgICBcIlxcbiAgICBcIlxuICAgICksXG4gICAgX3ZtLmJvZHkuZmlsdGVyZWQgIT09IF92bS5ib2R5LmNvdW50XG4gICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgIFwiKFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5pMThuKFwiZmlsdGVyZWRcIikgK1xuICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLmkxOG4oXCJmcm9tXCIpICtcbiAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5ib2R5LmNvdW50ICtcbiAgICAgICAgICAgICAgICAgIFwiICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLmkxOG4oXCJ0b3RhbFwiKSArXG4gICAgICAgICAgICAgICAgICBcIiBcIiArXG4gICAgICAgICAgICAgICAgICBfdm0uaTE4bihcInJlY29yZHNcIikgK1xuICAgICAgICAgICAgICAgICAgXCIpXCJcbiAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgIFwiXFxuICAgIFwiXG4gICAgICAgICAgKVxuICAgICAgICBdKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi01OWYyMTAwMlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNTlmMjEwMDJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUmVjb3Jkc0luZm8udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZjVmNGFkMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9QYWdpbmF0aW9uLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUGFnaW5hdGlvbi52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTdmNWY0YWQwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUGFnaW5hdGlvbi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03ZjVmNGFkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdmNWY0YWQwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDExOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2Y1ZjRhZDBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vUGFnaW5hdGlvbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImIxZTcyZmEyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdmNWY0YWQwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BhZ2luYXRpb24udnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdmNWY0YWQwXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1BhZ2luYXRpb24udnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdmNWY0YWQwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDExOTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxubmF2LnRhYmxlLW5hdmlnYXRpb24ge1xcbiAgICBtYXgtd2lkdGg6IDQyNXB4O1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL1BhZ2luYXRpb24udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUErSEE7SUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJQYWdpbmF0aW9uLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxuYXYgY2xhc3M9XFxcInRhYmxlLXBhZ2luYXRpb24gcGFnaW5hdGlvbiBpcy1zbWFsbFxcXCJcXG4gICAgICAgIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiXFxuICAgICAgICBhcmlhLWxhYmVsPVxcXCJwYWdpbmF0aW9uXFxcIj5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLXByZXZpb3VzXFxcIlxcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwicGFnZSA9PT0gMVxcXCJcXG4gICAgICAgICAgICBAY2xpY2s9XFxcImp1bXBUbyhwYWdlIC0gMSlcXFwiPlxcbiAgICAgICAgICAgIHt7IGkxOG4oJ1ByZXZpb3VzJykgfX1cXG4gICAgICAgIDwvYT5cXG4gICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLW5leHRcXFwiXFxuICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJwYWdlID09PSBwYWdlc1xcXCJcXG4gICAgICAgICAgICBAY2xpY2s9XFxcImp1bXBUbyhwYWdlICsgMSlcXFwiPlxcbiAgICAgICAgICAgIHt7IGkxOG4oJ05leHQnKSB9fVxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPHVsIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpc3RcXFwiPlxcbiAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtY3VycmVudCc6IHBhZ2UgPT09IDEgfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwianVtcFRvKDEpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIHYtaWY9XFxcInBhZ2VzID4gNSAmJiAhYXRTdGFydFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWVsbGlwc2lzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICZoZWxsaXA7XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiaSBpbiBtaWRkbGVQYWdlc1xcXCJcXG4gICAgICAgICAgICAgICAgOmtleT1cXFwiaVxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWN1cnJlbnQnOiBwYWdlID09PSBpIH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImp1bXBUbyhpKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7eyBpIH19XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgIDxsaSB2LWlmPVxcXCJwYWdlcyA+IDUgJiYgIWF0RW5kXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInBhZ2luYXRpb24tZWxsaXBzaXNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgJmhlbGxpcDtcXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgPGxpIHYtaWY9XFxcInBhZ2VzID4gMVxcXCI+XFxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWN1cnJlbnQnOiBwYWdlID09PSBwYWdlcyB9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJqdW1wVG8ocGFnZXMpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7IHBhZ2VzIH19XFxuICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgPC91bD5cXG4gICAgPC9uYXY+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ1BhZ2luYXRpb24nLFxcblxcbiAgICBwcm9wczoge1xcbiAgICAgICAgcmVjb3Jkczoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBzdGFydDoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBsZW5ndGg6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgaTE4bjoge1xcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIHBhZ2UoKSB7XFxuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnN0YXJ0IC8gdGhpcy5sZW5ndGgpICsgMTtcXG4gICAgICAgIH0sXFxuICAgICAgICBwYWdlcygpIHtcXG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMucmVjb3JkcyAvIHRoaXMubGVuZ3RoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBhdFN0YXJ0KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2UgPCA0O1xcbiAgICAgICAgfSxcXG4gICAgICAgIGF0RW5kKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2VzIC0gdGhpcy5wYWdlIDwgMztcXG4gICAgICAgIH0sXFxuICAgICAgICBtaWRkbGVQYWdlcygpIHtcXG4gICAgICAgICAgICBjb25zdCBwYWdlcyA9IFtdO1xcblxcbiAgICAgICAgICAgIGlmICh0aGlzLmF0U3RhcnQpIHtcXG4gICAgICAgICAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5taW4odGhpcy5wYWdlcyAtIDEsIDQpO1xcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8PSBtYXg7IGkrKykge1xcbiAgICAgICAgICAgICAgICAgICAgcGFnZXMucHVzaChpKTtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFnZXM7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIGlmICh0aGlzLmF0RW5kKSB7XFxuICAgICAgICAgICAgICAgIHBhZ2VzLnB1c2godGhpcy5wYWdlcyAtIDMsIHRoaXMucGFnZXMgLSAyLCB0aGlzLnBhZ2VzIC0gMSk7XFxuICAgICAgICAgICAgICAgIHJldHVybiBwYWdlcztcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcGFnZXMucHVzaCh0aGlzLnBhZ2UgLSAxLCB0aGlzLnBhZ2UsIHRoaXMucGFnZSArIDEpO1xcblxcbiAgICAgICAgICAgIHJldHVybiBwYWdlcztcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGp1bXBUbyhwYWdlKSB7XFxuICAgICAgICAgICAgaWYgKHBhZ2UgPT09IHRoaXMucGFnZSB8fCBwYWdlIDwgMSB8fCBwYWdlID4gdGhpcy5wYWdlcykge1xcbiAgICAgICAgICAgICAgICByZXR1cm47XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2p1bXAtdG8nLCAocGFnZSAtIDEpICogdGhpcy5sZW5ndGgpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgbmF2LnRhYmxlLW5hdmlnYXRpb24ge1xcbiAgICAgICAgbWF4LXdpZHRoOiA0MjVweDtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdmNWY0YWQwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvUGFnaW5hdGlvbi52dWVcbi8vIG1vZHVsZSBpZCA9IDExOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8bmF2IGNsYXNzPVwidGFibGUtcGFnaW5hdGlvbiBwYWdpbmF0aW9uIGlzLXNtYWxsXCJcbiAgICAgICAgcm9sZT1cIm5hdmlnYXRpb25cIlxuICAgICAgICBhcmlhLWxhYmVsPVwicGFnaW5hdGlvblwiPlxuICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tcHJldmlvdXNcIlxuICAgICAgICAgICAgOmRpc2FibGVkPVwicGFnZSA9PT0gMVwiXG4gICAgICAgICAgICBAY2xpY2s9XCJqdW1wVG8ocGFnZSAtIDEpXCI+XG4gICAgICAgICAgICB7eyBpMThuKCdQcmV2aW91cycpIH19XG4gICAgICAgIDwvYT5cbiAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLW5leHRcIlxuICAgICAgICAgICAgOmRpc2FibGVkPVwicGFnZSA9PT0gcGFnZXNcIlxuICAgICAgICAgICAgQGNsaWNrPVwianVtcFRvKHBhZ2UgKyAxKVwiPlxuICAgICAgICAgICAge3sgaTE4bignTmV4dCcpIH19XG4gICAgICAgIDwvYT5cbiAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbi1saXN0XCI+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1jdXJyZW50JzogcGFnZSA9PT0gMSB9XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwianVtcFRvKDEpXCI+XG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHYtaWY9XCJwYWdlcyA+IDUgJiYgIWF0U3RhcnRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tZWxsaXBzaXNcIj5cbiAgICAgICAgICAgICAgICAgICAgJmhlbGxpcDtcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHYtZm9yPVwiaSBpbiBtaWRkbGVQYWdlc1wiXG4gICAgICAgICAgICAgICAgOmtleT1cImlcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWN1cnJlbnQnOiBwYWdlID09PSBpIH1cIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJqdW1wVG8oaSlcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgaSB9fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGkgdi1pZj1cInBhZ2VzID4gNSAmJiAhYXRFbmRcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tZWxsaXBzaXNcIj5cbiAgICAgICAgICAgICAgICAgICAgJmhlbGxpcDtcbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpIHYtaWY9XCJwYWdlcyA+IDFcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWN1cnJlbnQnOiBwYWdlID09PSBwYWdlcyB9XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwianVtcFRvKHBhZ2VzKVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBwYWdlcyB9fVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgPC9uYXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnUGFnaW5hdGlvbicsXG5cbiAgICBwcm9wczoge1xuICAgICAgICByZWNvcmRzOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgc3RhcnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBsZW5ndGg6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBpMThuOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBwYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLnN0YXJ0IC8gdGhpcy5sZW5ndGgpICsgMTtcbiAgICAgICAgfSxcbiAgICAgICAgcGFnZXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMucmVjb3JkcyAvIHRoaXMubGVuZ3RoKTtcbiAgICAgICAgfSxcbiAgICAgICAgYXRTdGFydCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2UgPCA0O1xuICAgICAgICB9LFxuICAgICAgICBhdEVuZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhZ2VzIC0gdGhpcy5wYWdlIDwgMztcbiAgICAgICAgfSxcbiAgICAgICAgbWlkZGxlUGFnZXMoKSB7XG4gICAgICAgICAgICBjb25zdCBwYWdlcyA9IFtdO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5hdFN0YXJ0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF4ID0gTWF0aC5taW4odGhpcy5wYWdlcyAtIDEsIDQpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAyOyBpIDw9IG1heDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhZ2VzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2VzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5hdEVuZCkge1xuICAgICAgICAgICAgICAgIHBhZ2VzLnB1c2godGhpcy5wYWdlcyAtIDMsIHRoaXMucGFnZXMgLSAyLCB0aGlzLnBhZ2VzIC0gMSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhZ2VzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBwYWdlcy5wdXNoKHRoaXMucGFnZSAtIDEsIHRoaXMucGFnZSwgdGhpcy5wYWdlICsgMSk7XG5cbiAgICAgICAgICAgIHJldHVybiBwYWdlcztcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBqdW1wVG8ocGFnZSkge1xuICAgICAgICAgICAgaWYgKHBhZ2UgPT09IHRoaXMucGFnZSB8fCBwYWdlIDwgMSB8fCBwYWdlID4gdGhpcy5wYWdlcykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnanVtcC10bycsIChwYWdlIC0gMSkgKiB0aGlzLmxlbmd0aCk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICBuYXYudGFibGUtbmF2aWdhdGlvbiB7XG4gICAgICAgIG1heC13aWR0aDogNDI1cHg7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJuYXZcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ0YWJsZS1wYWdpbmF0aW9uIHBhZ2luYXRpb24gaXMtc21hbGxcIixcbiAgICAgIGF0dHJzOiB7IHJvbGU6IFwibmF2aWdhdGlvblwiLCBcImFyaWEtbGFiZWxcIjogXCJwYWdpbmF0aW9uXCIgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiYVwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1wcmV2aW91c1wiLFxuICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0ucGFnZSA9PT0gMSB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5qdW1wVG8oX3ZtLnBhZ2UgLSAxKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW192bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmkxOG4oXCJQcmV2aW91c1wiKSkgKyBcIlxcbiAgICBcIildXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbmV4dFwiLFxuICAgICAgICAgIGF0dHJzOiB7IGRpc2FibGVkOiBfdm0ucGFnZSA9PT0gX3ZtLnBhZ2VzIH0sXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmp1bXBUbyhfdm0ucGFnZSArIDEpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICBcIiArIF92bS5fcyhfdm0uaTE4bihcIk5leHRcIikpICsgXCJcXG4gICAgXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJ1bFwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlzdFwiIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtY3VycmVudFwiOiBfdm0ucGFnZSA9PT0gMSB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIF92bS5qdW1wVG8oMSlcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgIFwiKV1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5wYWdlcyA+IDUgJiYgIV92bS5hdFN0YXJ0XG4gICAgICAgICAgICA/IF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tZWxsaXBzaXNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCJcXG4gICAgICAgICAgICAgICAg4oCmXFxuICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uX2woX3ZtLm1pZGRsZVBhZ2VzLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IGtleTogaSB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1jdXJyZW50XCI6IF92bS5wYWdlID09PSBpIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmp1bXBUbyhpKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgIFwiICsgX3ZtLl9zKGkpICsgXCJcXG4gICAgICAgICAgICBcIildXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0ucGFnZXMgPiA1ICYmICFfdm0uYXRFbmRcbiAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1lbGxpcHNpc1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgICAgICDigKZcXG4gICAgICAgICAgICBcIilcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5wYWdlcyA+IDFcbiAgICAgICAgICAgID8gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtY3VycmVudFwiOiBfdm0ucGFnZSA9PT0gX3ZtLnBhZ2VzIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmp1bXBUbyhfdm0ucGFnZXMpXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wYWdlcykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICBdLFxuICAgICAgICAyXG4gICAgICApXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTdmNWY0YWQwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03ZjVmNGFkMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9QYWdpbmF0aW9uLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTE5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjc2YzI5N2NcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vT3ZlcmxheS52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL092ZXJsYXkudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1mNzZjMjk3Y1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL092ZXJsYXkudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZjc2YzI5N2NcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1mNzZjMjk3Y1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY3NmMyOTdjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL092ZXJsYXkudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3NzM5OGI5M1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNzZjMjk3Y1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9PdmVybGF5LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNzZjMjk3Y1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9PdmVybGF5LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1mNzZjMjk3Y1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52ZHQtb3ZlcmxheSB7XFxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICAgIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbn1cXG4udmR0LW92ZXJsYXktbG9hZGVyIHtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbkFyb3VuZCA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIGFuaW1hdGlvbjogc3BpbkFyb3VuZCA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XFxuICAgIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xcbiAgICBjb250ZW50OiBcXFwiXFxcIjtcXG4gICAgZGlzcGxheTogYmxvY2s7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgd2lkdGg6IDJlbTtcXG4gICAgaGVpZ2h0OiAyZW07XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZCQTtJQUNBLHFDQUFBO0lBQ0EscUJBQUE7SUFBQSxxQkFBQTtJQUFBLGNBQUE7Q0FDQTtBQUVBO0lBQ0EsYUFBQTtJQUNBLG9EQUFBO0lBQ0EsNENBQUE7SUFDQSx3QkFBQTtJQUNBLFlBQUE7SUFDQSxlQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtDQUNBXCIsXCJmaWxlXCI6XCJPdmVybGF5LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcInZkdC1vdmVybGF5IGlzLW92ZXJsYXlcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwidmR0LW92ZXJsYXktbG9hZGVyXFxcIlxcbiAgICAgICAgICAgIDpzdHlsZT1cXFwib3ZlcmxheVxcXCI+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ092ZXJsYXknLFxcblxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgb3ZlcmxheSgpIHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgIzAwZDFiMicsXFxuICAgICAgICAgICAgICAgICdib3JkZXItcmlnaHQtY29sb3InOiAndHJhbnNwYXJlbnQnLFxcbiAgICAgICAgICAgICAgICAnYm9yZGVyLXRvcC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIC52ZHQtb3ZlcmxheSB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XFxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB9XFxuXFxuICAgIC52ZHQtb3ZlcmxheS1sb2FkZXIge1xcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IHNwaW5Bcm91bmQgNTAwbXMgaW5maW5pdGUgbGluZWFyO1xcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluQXJvdW5kIDUwMG1zIGluZmluaXRlIGxpbmVhcjtcXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICAgIHdpZHRoOiAyZW07XFxuICAgICAgICBoZWlnaHQ6IDJlbTtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWY3NmMyOTdjXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVkYXRhdGFibGUvT3ZlcmxheS52dWVcbi8vIG1vZHVsZSBpZCA9IDExOThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwidmR0LW92ZXJsYXkgaXMtb3ZlcmxheVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmR0LW92ZXJsYXktbG9hZGVyXCJcbiAgICAgICAgICAgIDpzdHlsZT1cIm92ZXJsYXlcIj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnT3ZlcmxheScsXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBvdmVybGF5KCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6ICcycHggc29saWQgIzAwZDFiMicsXG4gICAgICAgICAgICAgICAgJ2JvcmRlci1yaWdodC1jb2xvcic6ICd0cmFuc3BhcmVudCcsXG4gICAgICAgICAgICAgICAgJ2JvcmRlci10b3AtY29sb3InOiAndHJhbnNwYXJlbnQnLFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIC52ZHQtb3ZlcmxheSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAudmR0LW92ZXJsYXktbG9hZGVyIHtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogc3BpbkFyb3VuZCA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIGFuaW1hdGlvbjogc3BpbkFyb3VuZCA1MDBtcyBpbmZpbml0ZSBsaW5lYXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDI5MDQ4NnB4O1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMmVtO1xuICAgICAgICBoZWlnaHQ6IDJlbTtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL092ZXJsYXkudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInZkdC1vdmVybGF5IGlzLW92ZXJsYXlcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJ2ZHQtb3ZlcmxheS1sb2FkZXJcIiwgc3R5bGU6IF92bS5vdmVybGF5IH0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWY3NmMyOTdjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mNzZjMjk3Y1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9PdmVybGF5LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsImltcG9ydCByZXNpemVEZXRlY3RvciBmcm9tICdlbGVtZW50LXJlc2l6ZS1kZXRlY3Rvcic7XG5pbXBvcnQgUmVzcG9uc2l2ZVRhYmxlIGZyb20gJy4vUmVzcG9uc2l2ZVRhYmxlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGluc2VydGVkOiAoZWwsIGJpbmRpbmcsIHsgY29udGV4dCB9KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhYmxlID0gbmV3IFJlc3BvbnNpdmVUYWJsZShlbCwgY29udGV4dCk7XG4gICAgICAgIGNvbnN0IGVyZCA9IHJlc2l6ZURldGVjdG9yKHsgc3RyYXRlZ3k6ICdzY3JvbGwnIH0pO1xuXG4gICAgICAgIHRhYmxlLnJlc2l6ZSgpO1xuXG4gICAgICAgIGVyZC5saXN0ZW5UbyhlbCwgKCkgPT4ge1xuICAgICAgICAgICAgdGFibGUucmVzaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG59O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZGF0YXRhYmxlL3Jlc3BvbnNpdmUvdlJlc3BvbnNpdmUuanMiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGZvckVhY2ggICAgICAgICAgICAgICAgID0gcmVxdWlyZShcIi4vY29sbGVjdGlvbi11dGlsc1wiKS5mb3JFYWNoO1xudmFyIGVsZW1lbnRVdGlsc01ha2VyICAgICAgID0gcmVxdWlyZShcIi4vZWxlbWVudC11dGlsc1wiKTtcbnZhciBsaXN0ZW5lckhhbmRsZXJNYWtlciAgICA9IHJlcXVpcmUoXCIuL2xpc3RlbmVyLWhhbmRsZXJcIik7XG52YXIgaWRHZW5lcmF0b3JNYWtlciAgICAgICAgPSByZXF1aXJlKFwiLi9pZC1nZW5lcmF0b3JcIik7XG52YXIgaWRIYW5kbGVyTWFrZXIgICAgICAgICAgPSByZXF1aXJlKFwiLi9pZC1oYW5kbGVyXCIpO1xudmFyIHJlcG9ydGVyTWFrZXIgICAgICAgICAgID0gcmVxdWlyZShcIi4vcmVwb3J0ZXJcIik7XG52YXIgYnJvd3NlckRldGVjdG9yICAgICAgICAgPSByZXF1aXJlKFwiLi9icm93c2VyLWRldGVjdG9yXCIpO1xudmFyIGJhdGNoUHJvY2Vzc29yTWFrZXIgICAgID0gcmVxdWlyZShcImJhdGNoLXByb2Nlc3NvclwiKTtcbnZhciBzdGF0ZUhhbmRsZXIgICAgICAgICAgICA9IHJlcXVpcmUoXCIuL3N0YXRlLWhhbmRsZXJcIik7XG5cbi8vRGV0ZWN0aW9uIHN0cmF0ZWdpZXMuXG52YXIgb2JqZWN0U3RyYXRlZ3lNYWtlciAgICAgPSByZXF1aXJlKFwiLi9kZXRlY3Rpb24tc3RyYXRlZ3kvb2JqZWN0LmpzXCIpO1xudmFyIHNjcm9sbFN0cmF0ZWd5TWFrZXIgICAgID0gcmVxdWlyZShcIi4vZGV0ZWN0aW9uLXN0cmF0ZWd5L3Njcm9sbC5qc1wiKTtcblxuZnVuY3Rpb24gaXNDb2xsZWN0aW9uKG9iaikge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9iaikgfHwgb2JqLmxlbmd0aCAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KGNvbGxlY3Rpb24pIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoY29sbGVjdGlvbikpIHtcbiAgICAgICAgdmFyIGFycmF5ID0gW107XG4gICAgICAgIGZvckVhY2goY29sbGVjdGlvbiwgZnVuY3Rpb24gKG9iaikge1xuICAgICAgICAgICAgYXJyYXkucHVzaChvYmopO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIGFycmF5O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb2xsZWN0aW9uO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaXNFbGVtZW50KG9iaikge1xuICAgIHJldHVybiBvYmogJiYgb2JqLm5vZGVUeXBlID09PSAxO1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIGlkSGFuZGxlclxuICogQHR5cGUge29iamVjdH1cbiAqIEBwcm9wZXJ0eSB7ZnVuY3Rpb259IGdldCBHZXRzIHRoZSByZXNpemUgZGV0ZWN0b3IgaWQgb2YgdGhlIGVsZW1lbnQuXG4gKiBAcHJvcGVydHkge2Z1bmN0aW9ufSBzZXQgR2VuZXJhdGUgYW5kIHNldHMgdGhlIHJlc2l6ZSBkZXRlY3RvciBpZCBvZiB0aGUgZWxlbWVudC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIE9wdGlvbnNcbiAqIEB0eXBlIHtvYmplY3R9XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGNhbGxPbkFkZCAgICBEZXRlcm1pbmVzIGlmIGxpc3RlbmVycyBzaG91bGQgYmUgY2FsbGVkIHdoZW4gdGhleSBhcmUgZ2V0dGluZyBhZGRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIERlZmF1bHQgaXMgdHJ1ZS4gSWYgdHJ1ZSwgdGhlIGxpc3RlbmVyIGlzIGd1YXJhbnRlZWQgdG8gYmUgY2FsbGVkIHdoZW4gaXQgaGFzIGJlZW4gYWRkZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBmYWxzZSwgdGhlIGxpc3RlbmVyIHdpbGwgbm90IGJlIGd1YXJlbnRlZWQgdG8gYmUgY2FsbGVkIHdoZW4gaXQgaGFzIGJlZW4gYWRkZWQgKGRvZXMgbm90IHByZXZlbnQgaXQgZnJvbSBiZWluZyBjYWxsZWQpLlxuICogQHByb3BlcnR5IHtpZEhhbmRsZXJ9IGlkSGFuZGxlciAgQSBjdXN0b20gaWQgaGFuZGxlciB0aGF0IGlzIHJlc3BvbnNpYmxlIGZvciBnZW5lcmF0aW5nLCBzZXR0aW5nIGFuZCByZXRyaWV2aW5nIGlkJ3MgZm9yIGVsZW1lbnRzLlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgSWYgbm90IHByb3ZpZGVkLCBhIGRlZmF1bHQgaWQgaGFuZGxlciB3aWxsIGJlIHVzZWQuXG4gKiBAcHJvcGVydHkge3JlcG9ydGVyfSByZXBvcnRlciAgICBBIGN1c3RvbSByZXBvcnRlciB0aGF0IGhhbmRsZXMgcmVwb3J0aW5nIGxvZ3MsIHdhcm5pbmdzIGFuZCBlcnJvcnMuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBub3QgcHJvdmlkZWQsIGEgZGVmYXVsdCBpZCBoYW5kbGVyIHdpbGwgYmUgdXNlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIElmIHNldCB0byBmYWxzZSwgdGhlbiBub3RoaW5nIHdpbGwgYmUgcmVwb3J0ZWQuXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGRlYnVnICAgICAgICBJZiBzZXQgdG8gdHJ1ZSwgdGhlIHRoZSBzeXN0ZW0gd2lsbCByZXBvcnQgZGVidWcgbWVzc2FnZXMgYXMgZGVmYXVsdCBmb3IgdGhlIGxpc3RlblRvIG1ldGhvZC5cbiAqL1xuXG4vKipcbiAqIENyZWF0ZXMgYW4gZWxlbWVudCByZXNpemUgZGV0ZWN0b3IgaW5zdGFuY2UuXG4gKiBAcHVibGljXG4gKiBAcGFyYW0ge09wdGlvbnM/fSBvcHRpb25zIE9wdGlvbmFsIGdsb2JhbCBvcHRpb25zIG9iamVjdCB0aGF0IHdpbGwgZGVjaWRlIGhvdyB0aGlzIGluc3RhbmNlIHdpbGwgd29yay5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAvL2lkSGFuZGxlciBpcyBjdXJyZW50bHkgbm90IGFuIG9wdGlvbiB0byB0aGUgbGlzdGVuVG8gZnVuY3Rpb24sIHNvIGl0IHNob3VsZCBub3QgYmUgYWRkZWQgdG8gZ2xvYmFsT3B0aW9ucy5cbiAgICB2YXIgaWRIYW5kbGVyO1xuXG4gICAgaWYgKG9wdGlvbnMuaWRIYW5kbGVyKSB7XG4gICAgICAgIC8vIFRvIG1haW50YWluIGNvbXBhdGFiaWxpdHkgd2l0aCBpZEhhbmRsZXIuZ2V0KGVsZW1lbnQsIHJlYWRvbmx5KSwgbWFrZSBzdXJlIHRvIHdyYXAgdGhlIGdpdmVuIGlkSGFuZGxlclxuICAgICAgICAvLyBzbyB0aGF0IHJlYWRvbmx5IGZsYWcgYWx3YXlzIGlzIHRydWUgd2hlbiBpdCdzIHVzZWQgaGVyZS4gVGhpcyBtYXkgYmUgcmVtb3ZlZCBuZXh0IG1ham9yIHZlcnNpb24gYnVtcC5cbiAgICAgICAgaWRIYW5kbGVyID0ge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoZWxlbWVudCkgeyByZXR1cm4gb3B0aW9ucy5pZEhhbmRsZXIuZ2V0KGVsZW1lbnQsIHRydWUpOyB9LFxuICAgICAgICAgICAgc2V0OiBvcHRpb25zLmlkSGFuZGxlci5zZXRcbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgaWRHZW5lcmF0b3IgPSBpZEdlbmVyYXRvck1ha2VyKCk7XG4gICAgICAgIHZhciBkZWZhdWx0SWRIYW5kbGVyID0gaWRIYW5kbGVyTWFrZXIoe1xuICAgICAgICAgICAgaWRHZW5lcmF0b3I6IGlkR2VuZXJhdG9yLFxuICAgICAgICAgICAgc3RhdGVIYW5kbGVyOiBzdGF0ZUhhbmRsZXJcbiAgICAgICAgfSk7XG4gICAgICAgIGlkSGFuZGxlciA9IGRlZmF1bHRJZEhhbmRsZXI7XG4gICAgfVxuXG4gICAgLy9yZXBvcnRlciBpcyBjdXJyZW50bHkgbm90IGFuIG9wdGlvbiB0byB0aGUgbGlzdGVuVG8gZnVuY3Rpb24sIHNvIGl0IHNob3VsZCBub3QgYmUgYWRkZWQgdG8gZ2xvYmFsT3B0aW9ucy5cbiAgICB2YXIgcmVwb3J0ZXIgPSBvcHRpb25zLnJlcG9ydGVyO1xuXG4gICAgaWYoIXJlcG9ydGVyKSB7XG4gICAgICAgIC8vSWYgb3B0aW9ucy5yZXBvcnRlciBpcyBmYWxzZSwgdGhlbiB0aGUgcmVwb3J0ZXIgc2hvdWxkIGJlIHF1aWV0LlxuICAgICAgICB2YXIgcXVpZXQgPSByZXBvcnRlciA9PT0gZmFsc2U7XG4gICAgICAgIHJlcG9ydGVyID0gcmVwb3J0ZXJNYWtlcihxdWlldCk7XG4gICAgfVxuXG4gICAgLy9iYXRjaFByb2Nlc3NvciBpcyBjdXJyZW50bHkgbm90IGFuIG9wdGlvbiB0byB0aGUgbGlzdGVuVG8gZnVuY3Rpb24sIHNvIGl0IHNob3VsZCBub3QgYmUgYWRkZWQgdG8gZ2xvYmFsT3B0aW9ucy5cbiAgICB2YXIgYmF0Y2hQcm9jZXNzb3IgPSBnZXRPcHRpb24ob3B0aW9ucywgXCJiYXRjaFByb2Nlc3NvclwiLCBiYXRjaFByb2Nlc3Nvck1ha2VyKHsgcmVwb3J0ZXI6IHJlcG9ydGVyIH0pKTtcblxuICAgIC8vT3B0aW9ucyB0byBiZSB1c2VkIGFzIGRlZmF1bHQgZm9yIHRoZSBsaXN0ZW5UbyBmdW5jdGlvbi5cbiAgICB2YXIgZ2xvYmFsT3B0aW9ucyA9IHt9O1xuICAgIGdsb2JhbE9wdGlvbnMuY2FsbE9uQWRkICAgICA9ICEhZ2V0T3B0aW9uKG9wdGlvbnMsIFwiY2FsbE9uQWRkXCIsIHRydWUpO1xuICAgIGdsb2JhbE9wdGlvbnMuZGVidWcgICAgICAgICA9ICEhZ2V0T3B0aW9uKG9wdGlvbnMsIFwiZGVidWdcIiwgZmFsc2UpO1xuXG4gICAgdmFyIGV2ZW50TGlzdGVuZXJIYW5kbGVyICAgID0gbGlzdGVuZXJIYW5kbGVyTWFrZXIoaWRIYW5kbGVyKTtcbiAgICB2YXIgZWxlbWVudFV0aWxzICAgICAgICAgICAgPSBlbGVtZW50VXRpbHNNYWtlcih7XG4gICAgICAgIHN0YXRlSGFuZGxlcjogc3RhdGVIYW5kbGVyXG4gICAgfSk7XG5cbiAgICAvL1RoZSBkZXRlY3Rpb24gc3RyYXRlZ3kgdG8gYmUgdXNlZC5cbiAgICB2YXIgZGV0ZWN0aW9uU3RyYXRlZ3k7XG4gICAgdmFyIGRlc2lyZWRTdHJhdGVneSA9IGdldE9wdGlvbihvcHRpb25zLCBcInN0cmF0ZWd5XCIsIFwib2JqZWN0XCIpO1xuICAgIHZhciBzdHJhdGVneU9wdGlvbnMgPSB7XG4gICAgICAgIHJlcG9ydGVyOiByZXBvcnRlcixcbiAgICAgICAgYmF0Y2hQcm9jZXNzb3I6IGJhdGNoUHJvY2Vzc29yLFxuICAgICAgICBzdGF0ZUhhbmRsZXI6IHN0YXRlSGFuZGxlcixcbiAgICAgICAgaWRIYW5kbGVyOiBpZEhhbmRsZXJcbiAgICB9O1xuXG4gICAgaWYoZGVzaXJlZFN0cmF0ZWd5ID09PSBcInNjcm9sbFwiKSB7XG4gICAgICAgIGlmIChicm93c2VyRGV0ZWN0b3IuaXNMZWdhY3lPcGVyYSgpKSB7XG4gICAgICAgICAgICByZXBvcnRlci53YXJuKFwiU2Nyb2xsIHN0cmF0ZWd5IGlzIG5vdCBzdXBwb3J0ZWQgb24gbGVnYWN5IE9wZXJhLiBDaGFuZ2luZyB0byBvYmplY3Qgc3RyYXRlZ3kuXCIpO1xuICAgICAgICAgICAgZGVzaXJlZFN0cmF0ZWd5ID0gXCJvYmplY3RcIjtcbiAgICAgICAgfSBlbHNlIGlmIChicm93c2VyRGV0ZWN0b3IuaXNJRSg5KSkge1xuICAgICAgICAgICAgcmVwb3J0ZXIud2FybihcIlNjcm9sbCBzdHJhdGVneSBpcyBub3Qgc3VwcG9ydGVkIG9uIElFOS4gQ2hhbmdpbmcgdG8gb2JqZWN0IHN0cmF0ZWd5LlwiKTtcbiAgICAgICAgICAgIGRlc2lyZWRTdHJhdGVneSA9IFwib2JqZWN0XCI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpZihkZXNpcmVkU3RyYXRlZ3kgPT09IFwic2Nyb2xsXCIpIHtcbiAgICAgICAgZGV0ZWN0aW9uU3RyYXRlZ3kgPSBzY3JvbGxTdHJhdGVneU1ha2VyKHN0cmF0ZWd5T3B0aW9ucyk7XG4gICAgfSBlbHNlIGlmKGRlc2lyZWRTdHJhdGVneSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICBkZXRlY3Rpb25TdHJhdGVneSA9IG9iamVjdFN0cmF0ZWd5TWFrZXIoc3RyYXRlZ3lPcHRpb25zKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnZhbGlkIHN0cmF0ZWd5IG5hbWU6IFwiICsgZGVzaXJlZFN0cmF0ZWd5KTtcbiAgICB9XG5cbiAgICAvL0NhbGxzIGNhbiBiZSBtYWRlIHRvIGxpc3RlblRvIHdpdGggZWxlbWVudHMgdGhhdCBhcmUgc3RpbGwgYmVpbmcgaW5zdGFsbGVkLlxuICAgIC8vQWxzbywgc2FtZSBlbGVtZW50cyBjYW4gb2NjdXIgaW4gdGhlIGVsZW1lbnRzIGxpc3QgaW4gdGhlIGxpc3RlblRvIGZ1bmN0aW9uLlxuICAgIC8vV2l0aCB0aGlzIG1hcCwgdGhlIHJlYWR5IGNhbGxiYWNrcyBjYW4gYmUgc3luY2hyb25pemVkIGJldHdlZW4gdGhlIGNhbGxzXG4gICAgLy9zbyB0aGF0IHRoZSByZWFkeSBjYWxsYmFjayBjYW4gYWx3YXlzIGJlIGNhbGxlZCB3aGVuIGFuIGVsZW1lbnQgaXMgcmVhZHkgLSBldmVuIGlmXG4gICAgLy9pdCB3YXNuJ3QgaW5zdGFsbGVkIGZyb20gdGhlIGZ1bmN0aW9uIGl0c2VsZi5cbiAgICB2YXIgb25SZWFkeUNhbGxiYWNrcyA9IHt9O1xuXG4gICAgLyoqXG4gICAgICogTWFrZXMgdGhlIGdpdmVuIGVsZW1lbnRzIHJlc2l6ZS1kZXRlY3RhYmxlIGFuZCBzdGFydHMgbGlzdGVuaW5nIHRvIHJlc2l6ZSBldmVudHMgb24gdGhlIGVsZW1lbnRzLiBDYWxscyB0aGUgZXZlbnQgY2FsbGJhY2sgZm9yIGVhY2ggZXZlbnQgZm9yIGVhY2ggZWxlbWVudC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtPcHRpb25zP30gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIG9iamVjdC4gVGhlc2Ugb3B0aW9ucyB3aWxsIG92ZXJyaWRlIHRoZSBnbG9iYWwgb3B0aW9ucy4gU29tZSBvcHRpb25zIG1heSBub3QgYmUgb3ZlcnJpZGVuLCBzdWNoIGFzIGlkSGFuZGxlci5cbiAgICAgKiBAcGFyYW0ge2VsZW1lbnRbXXxlbGVtZW50fSBlbGVtZW50cyBUaGUgZ2l2ZW4gYXJyYXkgb2YgZWxlbWVudHMgdG8gZGV0ZWN0IHJlc2l6ZSBldmVudHMgb2YuIFNpbmdsZSBlbGVtZW50IGlzIGFsc28gdmFsaWQuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkIGZvciBlYWNoIHJlc2l6ZSBldmVudCBmb3IgZWFjaCBlbGVtZW50LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGxpc3RlblRvKG9wdGlvbnMsIGVsZW1lbnRzLCBsaXN0ZW5lcikge1xuICAgICAgICBmdW5jdGlvbiBvblJlc2l6ZUNhbGxiYWNrKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhciBsaXN0ZW5lcnMgPSBldmVudExpc3RlbmVySGFuZGxlci5nZXQoZWxlbWVudCk7XG4gICAgICAgICAgICBmb3JFYWNoKGxpc3RlbmVycywgZnVuY3Rpb24gY2FsbExpc3RlbmVyUHJveHkobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoY2FsbE9uQWRkLCBlbGVtZW50LCBsaXN0ZW5lcikge1xuICAgICAgICAgICAgZXZlbnRMaXN0ZW5lckhhbmRsZXIuYWRkKGVsZW1lbnQsIGxpc3RlbmVyKTtcblxuICAgICAgICAgICAgaWYoY2FsbE9uQWRkKSB7XG4gICAgICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvL09wdGlvbnMgb2JqZWN0IG1heSBiZSBvbWl0dGVkLlxuICAgICAgICBpZighbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGxpc3RlbmVyID0gZWxlbWVudHM7XG4gICAgICAgICAgICBlbGVtZW50cyA9IG9wdGlvbnM7XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cblxuICAgICAgICBpZighZWxlbWVudHMpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkF0IGxlYXN0IG9uZSBlbGVtZW50IHJlcXVpcmVkLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKCFsaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTGlzdGVuZXIgcmVxdWlyZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRWxlbWVudChlbGVtZW50cykpIHtcbiAgICAgICAgICAgIC8vIEEgc2luZ2xlIGVsZW1lbnQgaGFzIGJlZW4gcGFzc2VkIGluLlxuICAgICAgICAgICAgZWxlbWVudHMgPSBbZWxlbWVudHNdO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQ29sbGVjdGlvbihlbGVtZW50cykpIHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgY29sbGVjdGlvbiB0byBhcnJheSBmb3IgcGx1Z2lucy5cbiAgICAgICAgICAgIC8vIFRPRE86IE1heSB3YW50IHRvIGNoZWNrIHNvIHRoYXQgYWxsIHRoZSBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbiBhcmUgdmFsaWQgZWxlbWVudHMuXG4gICAgICAgICAgICBlbGVtZW50cyA9IHRvQXJyYXkoZWxlbWVudHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9ydGVyLmVycm9yKFwiSW52YWxpZCBhcmd1bWVudHMuIE11c3QgYmUgYSBET00gZWxlbWVudCBvciBhIGNvbGxlY3Rpb24gb2YgRE9NIGVsZW1lbnRzLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBlbGVtZW50c1JlYWR5ID0gMDtcblxuICAgICAgICB2YXIgY2FsbE9uQWRkID0gZ2V0T3B0aW9uKG9wdGlvbnMsIFwiY2FsbE9uQWRkXCIsIGdsb2JhbE9wdGlvbnMuY2FsbE9uQWRkKTtcbiAgICAgICAgdmFyIG9uUmVhZHlDYWxsYmFjayA9IGdldE9wdGlvbihvcHRpb25zLCBcIm9uUmVhZHlcIiwgZnVuY3Rpb24gbm9vcCgpIHt9KTtcbiAgICAgICAgdmFyIGRlYnVnID0gZ2V0T3B0aW9uKG9wdGlvbnMsIFwiZGVidWdcIiwgZ2xvYmFsT3B0aW9ucy5kZWJ1Zyk7XG5cbiAgICAgICAgZm9yRWFjaChlbGVtZW50cywgZnVuY3Rpb24gYXR0YWNoTGlzdGVuZXJUb0VsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKCFzdGF0ZUhhbmRsZXIuZ2V0U3RhdGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBzdGF0ZUhhbmRsZXIuaW5pdFN0YXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIGlkSGFuZGxlci5zZXQoZWxlbWVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBpZCA9IGlkSGFuZGxlci5nZXQoZWxlbWVudCk7XG5cbiAgICAgICAgICAgIGRlYnVnICYmIHJlcG9ydGVyLmxvZyhcIkF0dGFjaGluZyBsaXN0ZW5lciB0byBlbGVtZW50XCIsIGlkLCBlbGVtZW50KTtcblxuICAgICAgICAgICAgaWYoIWVsZW1lbnRVdGlscy5pc0RldGVjdGFibGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyAmJiByZXBvcnRlci5sb2coaWQsIFwiTm90IGRldGVjdGFibGUuXCIpO1xuICAgICAgICAgICAgICAgIGlmKGVsZW1lbnRVdGlscy5pc0J1c3koZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGVidWcgJiYgcmVwb3J0ZXIubG9nKGlkLCBcIlN5c3RlbSBidXN5IG1ha2luZyBpdCBkZXRlY3RhYmxlXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vVGhlIGVsZW1lbnQgaXMgYmVpbmcgcHJlcGFyZWQgdG8gYmUgZGV0ZWN0YWJsZS4gRG8gbm90IG1ha2UgaXQgZGV0ZWN0YWJsZS5cbiAgICAgICAgICAgICAgICAgICAgLy9KdXN0IGFkZCB0aGUgbGlzdGVuZXIsIGJlY2F1c2UgdGhlIGVsZW1lbnQgd2lsbCBzb29uIGJlIGRldGVjdGFibGUuXG4gICAgICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyKGNhbGxPbkFkZCwgZWxlbWVudCwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgICAgICAgICBvblJlYWR5Q2FsbGJhY2tzW2lkXSA9IG9uUmVhZHlDYWxsYmFja3NbaWRdIHx8IFtdO1xuICAgICAgICAgICAgICAgICAgICBvblJlYWR5Q2FsbGJhY2tzW2lkXS5wdXNoKGZ1bmN0aW9uIG9uUmVhZHkoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50c1JlYWR5Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGVsZW1lbnRzUmVhZHkgPT09IGVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVhZHlDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGRlYnVnICYmIHJlcG9ydGVyLmxvZyhpZCwgXCJNYWtpbmcgZGV0ZWN0YWJsZS4uLlwiKTtcbiAgICAgICAgICAgICAgICAvL1RoZSBlbGVtZW50IGlzIG5vdCBwcmVwYXJlZCB0byBiZSBkZXRlY3RhYmxlLCBzbyBkbyBwcmVwYXJlIGl0IGFuZCBhZGQgYSBsaXN0ZW5lciB0byBpdC5cbiAgICAgICAgICAgICAgICBlbGVtZW50VXRpbHMubWFya0J1c3koZWxlbWVudCwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRldGVjdGlvblN0cmF0ZWd5Lm1ha2VEZXRlY3RhYmxlKHsgZGVidWc6IGRlYnVnIH0sIGVsZW1lbnQsIGZ1bmN0aW9uIG9uRWxlbWVudERldGVjdGFibGUoZWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1ZyAmJiByZXBvcnRlci5sb2coaWQsIFwib25FbGVtZW50RGV0ZWN0YWJsZVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGVIYW5kbGVyLmdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50VXRpbHMubWFya0FzRGV0ZWN0YWJsZShlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRVdGlscy5tYXJrQnVzeShlbGVtZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZXRlY3Rpb25TdHJhdGVneS5hZGRMaXN0ZW5lcihlbGVtZW50LCBvblJlc2l6ZUNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFkZExpc3RlbmVyKGNhbGxPbkFkZCwgZWxlbWVudCwgbGlzdGVuZXIpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGUgZWxlbWVudCBzaXplIG1pZ2h0IGhhdmUgY2hhbmdlZCBzaW5jZSB0aGUgY2FsbCB0byBcImxpc3RlblRvXCIsIHdlIG5lZWQgdG8gY2hlY2sgZm9yIHRoaXMgY2hhbmdlLFxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gc28gdGhhdCBhIHJlc2l6ZSBldmVudCBtYXkgYmUgZW1pdHRlZC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEhhdmluZyB0aGUgc3RhcnRTaXplIG9iamVjdCBpcyBvcHRpb25hbCAoc2luY2UgaXQgZG9lcyBub3QgbWFrZSBzZW5zZSBpbiBzb21lIGNhc2VzIHN1Y2ggYXMgdW5yZW5kZXJlZCBlbGVtZW50cyksIHNvIGNoZWNrIGZvciBpdHMgZXhpc3RhbmNlIGJlZm9yZS5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFsc28sIGNoZWNrIHRoZSBzdGF0ZSBleGlzdGFuY2UgYmVmb3JlIHNpbmNlIHRoZSBlbGVtZW50IG1heSBoYXZlIGJlZW4gdW5pbnN0YWxsZWQgaW4gdGhlIGluc3RhbGxhdGlvbiBwcm9jZXNzLlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHN0YXRlID0gc3RhdGVIYW5kbGVyLmdldFN0YXRlKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLnN0YXJ0U2l6ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5zdGFydFNpemUud2lkdGggIT09IHdpZHRoIHx8IHN0YXRlLnN0YXJ0U2l6ZS5oZWlnaHQgIT09IGhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvblJlc2l6ZUNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYob25SZWFkeUNhbGxiYWNrc1tpZF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JFYWNoKG9uUmVhZHlDYWxsYmFja3NbaWRdLCBmdW5jdGlvbihjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgaGFzIGJlZW4gdW5pc250YWxsZWQgYmVmb3JlIGJlaW5nIGRldGVjdGFibGUuXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyAmJiByZXBvcnRlci5sb2coaWQsIFwiRWxlbWVudCB1bmluc3RhbGxlZCBiZWZvcmUgYmVpbmcgZGV0ZWN0YWJsZS5cIik7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb25SZWFkeUNhbGxiYWNrc1tpZF07XG5cbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudHNSZWFkeSsrO1xuICAgICAgICAgICAgICAgICAgICBpZihlbGVtZW50c1JlYWR5ID09PSBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uUmVhZHlDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGRlYnVnICYmIHJlcG9ydGVyLmxvZyhpZCwgXCJBbHJlYWR5IGRldGVjYWJsZSwgYWRkaW5nIGxpc3RlbmVyLlwiKTtcblxuICAgICAgICAgICAgLy9UaGUgZWxlbWVudCBoYXMgYmVlbiBwcmVwYXJlZCB0byBiZSBkZXRlY3RhYmxlIGFuZCBpcyByZWFkeSB0byBiZSBsaXN0ZW5lZCB0by5cbiAgICAgICAgICAgIGFkZExpc3RlbmVyKGNhbGxPbkFkZCwgZWxlbWVudCwgbGlzdGVuZXIpO1xuICAgICAgICAgICAgZWxlbWVudHNSZWFkeSsrO1xuICAgICAgICB9KTtcblxuICAgICAgICBpZihlbGVtZW50c1JlYWR5ID09PSBlbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIG9uUmVhZHlDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5pbnN0YWxsKGVsZW1lbnRzKSB7XG4gICAgICAgIGlmKCFlbGVtZW50cykge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9ydGVyLmVycm9yKFwiQXQgbGVhc3Qgb25lIGVsZW1lbnQgaXMgcmVxdWlyZWQuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGlzRWxlbWVudChlbGVtZW50cykpIHtcbiAgICAgICAgICAgIC8vIEEgc2luZ2xlIGVsZW1lbnQgaGFzIGJlZW4gcGFzc2VkIGluLlxuICAgICAgICAgICAgZWxlbWVudHMgPSBbZWxlbWVudHNdO1xuICAgICAgICB9IGVsc2UgaWYgKGlzQ29sbGVjdGlvbihlbGVtZW50cykpIHtcbiAgICAgICAgICAgIC8vIENvbnZlcnQgY29sbGVjdGlvbiB0byBhcnJheSBmb3IgcGx1Z2lucy5cbiAgICAgICAgICAgIC8vIFRPRE86IE1heSB3YW50IHRvIGNoZWNrIHNvIHRoYXQgYWxsIHRoZSBlbGVtZW50cyBpbiB0aGUgY29sbGVjdGlvbiBhcmUgdmFsaWQgZWxlbWVudHMuXG4gICAgICAgICAgICBlbGVtZW50cyA9IHRvQXJyYXkoZWxlbWVudHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9ydGVyLmVycm9yKFwiSW52YWxpZCBhcmd1bWVudHMuIE11c3QgYmUgYSBET00gZWxlbWVudCBvciBhIGNvbGxlY3Rpb24gb2YgRE9NIGVsZW1lbnRzLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvckVhY2goZWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICBldmVudExpc3RlbmVySGFuZGxlci5yZW1vdmVBbGxMaXN0ZW5lcnMoZWxlbWVudCk7XG4gICAgICAgICAgICBkZXRlY3Rpb25TdHJhdGVneS51bmluc3RhbGwoZWxlbWVudCk7XG4gICAgICAgICAgICBzdGF0ZUhhbmRsZXIuY2xlYW5TdGF0ZShlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbGlzdGVuVG86IGxpc3RlblRvLFxuICAgICAgICByZW1vdmVMaXN0ZW5lcjogZXZlbnRMaXN0ZW5lckhhbmRsZXIucmVtb3ZlTGlzdGVuZXIsXG4gICAgICAgIHJlbW92ZUFsbExpc3RlbmVyczogZXZlbnRMaXN0ZW5lckhhbmRsZXIucmVtb3ZlQWxsTGlzdGVuZXJzLFxuICAgICAgICB1bmluc3RhbGw6IHVuaW5zdGFsbFxuICAgIH07XG59O1xuXG5mdW5jdGlvbiBnZXRPcHRpb24ob3B0aW9ucywgbmFtZSwgZGVmYXVsdFZhbHVlKSB7XG4gICAgdmFyIHZhbHVlID0gb3B0aW9uc1tuYW1lXTtcblxuICAgIGlmKCh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsKSAmJiBkZWZhdWx0VmFsdWUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgIH1cblxuICAgIHJldHVybiB2YWx1ZTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2VsZW1lbnQtcmVzaXplLWRldGVjdG9yL3NyYy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci5qc1xuLy8gbW9kdWxlIGlkID0gMTIwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgZ2V0U3RhdGUgPSBvcHRpb25zLnN0YXRlSGFuZGxlci5nZXRTdGF0ZTtcblxuICAgIC8qKlxuICAgICAqIFRlbGxzIGlmIHRoZSBlbGVtZW50IGhhcyBiZWVuIG1hZGUgZGV0ZWN0YWJsZSBhbmQgcmVhZHkgdG8gYmUgbGlzdGVuZWQgZm9yIHJlc2l6ZSBldmVudHMuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gVGhlIGVsZW1lbnQgdG8gY2hlY2suXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgb3IgZmFsc2UgZGVwZW5kaW5nIG9uIGlmIHRoZSBlbGVtZW50IGlzIGRldGVjdGFibGUgb3Igbm90LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzRGV0ZWN0YWJsZShlbGVtZW50KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKGVsZW1lbnQpO1xuICAgICAgICByZXR1cm4gc3RhdGUgJiYgISFzdGF0ZS5pc0RldGVjdGFibGU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFya3MgdGhlIGVsZW1lbnQgdGhhdCBpdCBoYXMgYmVlbiBtYWRlIGRldGVjdGFibGUgYW5kIHJlYWR5IHRvIGJlIGxpc3RlbmVkIGZvciByZXNpemUgZXZlbnRzLlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IFRoZSBlbGVtZW50IHRvIG1hcmsuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWFya0FzRGV0ZWN0YWJsZShlbGVtZW50KSB7XG4gICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLmlzRGV0ZWN0YWJsZSA9IHRydWU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVGVsbHMgaWYgdGhlIGVsZW1lbnQgaXMgYnVzeSBvciBub3QuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gVGhlIGVsZW1lbnQgdG8gY2hlY2suXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59IFRydWUgb3IgZmFsc2UgZGVwZW5kaW5nIG9uIGlmIHRoZSBlbGVtZW50IGlzIGJ1c3kgb3Igbm90LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGlzQnVzeShlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiAhIWdldFN0YXRlKGVsZW1lbnQpLmJ1c3k7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTWFya3MgdGhlIG9iamVjdCBpcyBidXN5IGFuZCBzaG91bGQgbm90IGJlIG1hZGUgZGV0ZWN0YWJsZS5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRvIG1hcmsuXG4gICAgICogQHBhcmFtIHtib29sZWFufSBidXN5IElmIHRoZSBlbGVtZW50IGlzIGJ1c3kgb3Igbm90LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIG1hcmtCdXN5KGVsZW1lbnQsIGJ1c3kpIHtcbiAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkuYnVzeSA9ICEhYnVzeTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBpc0RldGVjdGFibGU6IGlzRGV0ZWN0YWJsZSxcbiAgICAgICAgbWFya0FzRGV0ZWN0YWJsZTogbWFya0FzRGV0ZWN0YWJsZSxcbiAgICAgICAgaXNCdXN5OiBpc0J1c3ksXG4gICAgICAgIG1hcmtCdXN5OiBtYXJrQnVzeVxuICAgIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2VsZW1lbnQtdXRpbHMuanNcbi8vIG1vZHVsZSBpZCA9IDEyMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpZEhhbmRsZXIpIHtcbiAgICB2YXIgZXZlbnRMaXN0ZW5lcnMgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgYWxsIGxpc3RlbmVycyBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0byBnZXQgYWxsIGxpc3RlbmVycyBmb3IuXG4gICAgICogQHJldHVybnMgQWxsIGxpc3RlbmVycyBmb3IgdGhlIGdpdmVuIGVsZW1lbnQuXG4gICAgICovXG4gICAgZnVuY3Rpb24gZ2V0TGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIGlkID0gaWRIYW5kbGVyLmdldChlbGVtZW50KTtcblxuICAgICAgICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGV2ZW50TGlzdGVuZXJzW2lkXSB8fCBbXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBTdG9yZXMgdGhlIGdpdmVuIGxpc3RlbmVyIGZvciB0aGUgZ2l2ZW4gZWxlbWVudC4gV2lsbCBub3QgYWN0dWFsbHkgYWRkIHRoZSBsaXN0ZW5lciB0byB0aGUgZWxlbWVudC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSBlbGVtZW50IHRoYXQgc2hvdWxkIGhhdmUgdGhlIGxpc3RlbmVyIGFkZGVkLlxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGxpc3RlbmVyIFRoZSBjYWxsYmFjayB0aGF0IHRoZSBlbGVtZW50IGhhcyBhZGRlZC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBhZGRMaXN0ZW5lcihlbGVtZW50LCBsaXN0ZW5lcikge1xuICAgICAgICB2YXIgaWQgPSBpZEhhbmRsZXIuZ2V0KGVsZW1lbnQpO1xuXG4gICAgICAgIGlmKCFldmVudExpc3RlbmVyc1tpZF0pIHtcbiAgICAgICAgICAgIGV2ZW50TGlzdGVuZXJzW2lkXSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnRMaXN0ZW5lcnNbaWRdLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKGVsZW1lbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBnZXRMaXN0ZW5lcnMoZWxlbWVudCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsaXN0ZW5lcnMubGVuZ3RoOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIGlmIChsaXN0ZW5lcnNbaV0gPT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgIGxpc3RlbmVycy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKGVsZW1lbnQpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMgPSBnZXRMaXN0ZW5lcnMoZWxlbWVudCk7XG4gICAgICBpZiAoIWxpc3RlbmVycykgeyByZXR1cm47IH1cbiAgICAgIGxpc3RlbmVycy5sZW5ndGggPSAwO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdldDogZ2V0TGlzdGVuZXJzLFxuICAgICAgICBhZGQ6IGFkZExpc3RlbmVyLFxuICAgICAgICByZW1vdmVMaXN0ZW5lcjogcmVtb3ZlTGlzdGVuZXIsXG4gICAgICAgIHJlbW92ZUFsbExpc3RlbmVyczogcmVtb3ZlQWxsTGlzdGVuZXJzXG4gICAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvbGlzdGVuZXItaGFuZGxlci5qc1xuLy8gbW9kdWxlIGlkID0gMTIwNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpZENvdW50ID0gMTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyYXRlcyBhIG5ldyB1bmlxdWUgaWQgaW4gdGhlIGNvbnRleHQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IEEgdW5pcXVlIGlkIGluIHRoZSBjb250ZXh0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdlbmVyYXRlKCkge1xuICAgICAgICByZXR1cm4gaWRDb3VudCsrO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGdlbmVyYXRlOiBnZW5lcmF0ZVxuICAgIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2lkLWdlbmVyYXRvci5qc1xuLy8gbW9kdWxlIGlkID0gMTIwNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICB2YXIgaWRHZW5lcmF0b3IgICAgID0gb3B0aW9ucy5pZEdlbmVyYXRvcjtcbiAgICB2YXIgZ2V0U3RhdGUgICAgICAgID0gb3B0aW9ucy5zdGF0ZUhhbmRsZXIuZ2V0U3RhdGU7XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSByZXNpemUgZGV0ZWN0b3IgaWQgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgdGFyZ2V0IGVsZW1lbnQgdG8gZ2V0IHRoZSBpZCBvZi5cbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nfG51bWJlcnxudWxsfSBUaGUgaWQgb2YgdGhlIGVsZW1lbnQuIE51bGwgaWYgaXQgaGFzIG5vIGlkLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldElkKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHN0YXRlID0gZ2V0U3RhdGUoZWxlbWVudCk7XG5cbiAgICAgICAgaWYgKHN0YXRlICYmIHN0YXRlLmlkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZS5pZDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHJlc2l6ZSBkZXRlY3RvciBpZCBvZiB0aGUgZWxlbWVudC4gUmVxdWlyZXMgdGhlIGVsZW1lbnQgdG8gaGF2ZSBhIHJlc2l6ZSBkZXRlY3RvciBzdGF0ZSBpbml0aWFsaXplZC5cbiAgICAgKiBAcHVibGljXG4gICAgICogQHBhcmFtIHtlbGVtZW50fSBlbGVtZW50IFRoZSB0YXJnZXQgZWxlbWVudCB0byBzZXQgdGhlIGlkIG9mLlxuICAgICAqIEByZXR1cm5zIHtzdHJpbmd8bnVtYmVyfG51bGx9IFRoZSBpZCBvZiB0aGUgZWxlbWVudC5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBzZXRJZChlbGVtZW50KSB7XG4gICAgICAgIHZhciBzdGF0ZSA9IGdldFN0YXRlKGVsZW1lbnQpO1xuXG4gICAgICAgIGlmICghc3RhdGUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInNldElkIHJlcXVpcmVkIHRoZSBlbGVtZW50IHRvIGhhdmUgYSByZXNpemUgZGV0ZWN0aW9uIHN0YXRlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBpZCA9IGlkR2VuZXJhdG9yLmdlbmVyYXRlKCk7XG5cbiAgICAgICAgc3RhdGUuaWQgPSBpZDtcblxuICAgICAgICByZXR1cm4gaWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZ2V0OiBnZXRJZCxcbiAgICAgICAgc2V0OiBzZXRJZFxuICAgIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2lkLWhhbmRsZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogZ2xvYmFsIGNvbnNvbGU6IGZhbHNlICovXG5cbi8qKlxuICogUmVwb3J0ZXIgdGhhdCBoYW5kbGVzIHRoZSByZXBvcnRpbmcgb2YgbG9ncywgd2FybmluZ3MgYW5kIGVycm9ycy5cbiAqIEBwdWJsaWNcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gcXVpZXQgVGVsbHMgaWYgdGhlIHJlcG9ydGVyIHNob3VsZCBiZSBxdWlldCBvciBub3QuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXVpZXQpIHtcbiAgICBmdW5jdGlvbiBub29wKCkge1xuICAgICAgICAvL0RvZXMgbm90aGluZy5cbiAgICB9XG5cbiAgICB2YXIgcmVwb3J0ZXIgPSB7XG4gICAgICAgIGxvZzogbm9vcCxcbiAgICAgICAgd2Fybjogbm9vcCxcbiAgICAgICAgZXJyb3I6IG5vb3BcbiAgICB9O1xuXG4gICAgaWYoIXF1aWV0ICYmIHdpbmRvdy5jb25zb2xlKSB7XG4gICAgICAgIHZhciBhdHRhY2hGdW5jdGlvbiA9IGZ1bmN0aW9uKHJlcG9ydGVyLCBuYW1lKSB7XG4gICAgICAgICAgICAvL1RoZSBwcm94eSBpcyBuZWVkZWQgdG8gYmUgYWJsZSB0byBjYWxsIHRoZSBtZXRob2Qgd2l0aCB0aGUgY29uc29sZSBjb250ZXh0LFxuICAgICAgICAgICAgLy9zaW5jZSB3ZSBjYW5ub3QgdXNlIGJpbmQuXG4gICAgICAgICAgICByZXBvcnRlcltuYW1lXSA9IGZ1bmN0aW9uIHJlcG9ydGVyUHJveHkoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGYgPSBjb25zb2xlW25hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChmLmFwcGx5KSB7IC8vSUU5IGRvZXMgbm90IHN1cHBvcnQgY29uc29sZS5sb2cuYXBwbHkgOilcbiAgICAgICAgICAgICAgICAgICAgZi5hcHBseShjb25zb2xlLCBhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIGF0dGFjaEZ1bmN0aW9uKHJlcG9ydGVyLCBcImxvZ1wiKTtcbiAgICAgICAgYXR0YWNoRnVuY3Rpb24ocmVwb3J0ZXIsIFwid2FyblwiKTtcbiAgICAgICAgYXR0YWNoRnVuY3Rpb24ocmVwb3J0ZXIsIFwiZXJyb3JcIik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcG9ydGVyO1xufTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvcmVwb3J0ZXIuanNcbi8vIG1vZHVsZSBpZCA9IDEyMDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHV0aWxzID0gcmVxdWlyZShcIi4vdXRpbHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYmF0Y2hQcm9jZXNzb3JNYWtlcihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyAgICAgICAgICAgICA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHJlcG9ydGVyICAgICAgICA9IG9wdGlvbnMucmVwb3J0ZXI7XG4gICAgdmFyIGFzeW5jUHJvY2VzcyAgICA9IHV0aWxzLmdldE9wdGlvbihvcHRpb25zLCBcImFzeW5jXCIsIHRydWUpO1xuICAgIHZhciBhdXRvUHJvY2VzcyAgICAgPSB1dGlscy5nZXRPcHRpb24ob3B0aW9ucywgXCJhdXRvXCIsIHRydWUpO1xuXG4gICAgaWYoYXV0b1Byb2Nlc3MgJiYgIWFzeW5jUHJvY2Vzcykge1xuICAgICAgICByZXBvcnRlciAmJiByZXBvcnRlci53YXJuKFwiSW52YWxpZCBvcHRpb25zIGNvbWJpbmF0aW9uLiBhdXRvPXRydWUgYW5kIGFzeW5jPWZhbHNlIGlzIGludmFsaWQuIFNldHRpbmcgYXN5bmM9dHJ1ZS5cIik7XG4gICAgICAgIGFzeW5jUHJvY2VzcyA9IHRydWU7XG4gICAgfVxuXG4gICAgdmFyIGJhdGNoID0gQmF0Y2goKTtcbiAgICB2YXIgYXN5bmNGcmFtZUhhbmRsZXI7XG4gICAgdmFyIGlzUHJvY2Vzc2luZyA9IGZhbHNlO1xuXG4gICAgZnVuY3Rpb24gYWRkRnVuY3Rpb24obGV2ZWwsIGZuKSB7XG4gICAgICAgIGlmKCFpc1Byb2Nlc3NpbmcgJiYgYXV0b1Byb2Nlc3MgJiYgYXN5bmNQcm9jZXNzICYmIGJhdGNoLnNpemUoKSA9PT0gMCkge1xuICAgICAgICAgICAgLy8gU2luY2UgdGhpcyBpcyBhc3luYywgaXQgaXMgZ3VhcmFudGVlZCB0byBiZSBleGVjdXRlZCBhZnRlciB0aGF0IHRoZSBmbiBpcyBhZGRlZCB0byB0aGUgYmF0Y2guXG4gICAgICAgICAgICAvLyBUaGlzIG5lZWRzIHRvIGJlIGRvbmUgYmVmb3JlLCBzaW5jZSB3ZSdyZSBjaGVja2luZyB0aGUgc2l6ZSBvZiB0aGUgYmF0Y2ggdG8gYmUgMC5cbiAgICAgICAgICAgIHByb2Nlc3NCYXRjaEFzeW5jKCk7XG4gICAgICAgIH1cblxuICAgICAgICBiYXRjaC5hZGQobGV2ZWwsIGZuKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzQmF0Y2goKSB7XG4gICAgICAgIC8vIFNhdmUgdGhlIGN1cnJlbnQgYmF0Y2gsIGFuZCBjcmVhdGUgYSBuZXcgYmF0Y2ggc28gdGhhdCBpbmNvbWluZyBmdW5jdGlvbnMgYXJlIG5vdCBhZGRlZCBpbnRvIHRoZSBjdXJyZW50bHkgcHJvY2Vzc2luZyBiYXRjaC5cbiAgICAgICAgLy8gQ29udGludWUgcHJvY2Vzc2luZyB1bnRpbCB0aGUgdG9wLWxldmVsIGJhdGNoIGlzIGVtcHR5IChmdW5jdGlvbnMgbWF5IGJlIGFkZGVkIHRvIHRoZSBuZXcgYmF0Y2ggd2hpbGUgcHJvY2Vzc2luZywgYW5kIHNvIG9uKS5cbiAgICAgICAgaXNQcm9jZXNzaW5nID0gdHJ1ZTtcbiAgICAgICAgd2hpbGUgKGJhdGNoLnNpemUoKSkge1xuICAgICAgICAgICAgdmFyIHByb2Nlc3NpbmdCYXRjaCA9IGJhdGNoO1xuICAgICAgICAgICAgYmF0Y2ggPSBCYXRjaCgpO1xuICAgICAgICAgICAgcHJvY2Vzc2luZ0JhdGNoLnByb2Nlc3MoKTtcbiAgICAgICAgfVxuICAgICAgICBpc1Byb2Nlc3NpbmcgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmb3JjZVByb2Nlc3NCYXRjaChsb2NhbEFzeW5jUHJvY2Vzcykge1xuICAgICAgICBpZiAoaXNQcm9jZXNzaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZihsb2NhbEFzeW5jUHJvY2VzcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBsb2NhbEFzeW5jUHJvY2VzcyA9IGFzeW5jUHJvY2VzcztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGFzeW5jRnJhbWVIYW5kbGVyKSB7XG4gICAgICAgICAgICBjYW5jZWxGcmFtZShhc3luY0ZyYW1lSGFuZGxlcik7XG4gICAgICAgICAgICBhc3luY0ZyYW1lSGFuZGxlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZihsb2NhbEFzeW5jUHJvY2Vzcykge1xuICAgICAgICAgICAgcHJvY2Vzc0JhdGNoQXN5bmMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHByb2Nlc3NCYXRjaCgpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcHJvY2Vzc0JhdGNoQXN5bmMoKSB7XG4gICAgICAgIGFzeW5jRnJhbWVIYW5kbGVyID0gcmVxdWVzdEZyYW1lKHByb2Nlc3NCYXRjaCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2xlYXJCYXRjaCgpIHtcbiAgICAgICAgYmF0Y2ggICAgICAgICAgID0ge307XG4gICAgICAgIGJhdGNoU2l6ZSAgICAgICA9IDA7XG4gICAgICAgIHRvcExldmVsICAgICAgICA9IDA7XG4gICAgICAgIGJvdHRvbUxldmVsICAgICA9IDA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gY2FuY2VsRnJhbWUobGlzdGVuZXIpIHtcbiAgICAgICAgLy8gdmFyIGNhbmNlbCA9IHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5jbGVhclRpbWVvdXQ7XG4gICAgICAgIHZhciBjYW5jZWwgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjYW5jZWwobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlcXVlc3RGcmFtZShjYWxsYmFjaykge1xuICAgICAgICAvLyB2YXIgcmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cubW96UmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgZnVuY3Rpb24oZm4pIHsgcmV0dXJuIHdpbmRvdy5zZXRUaW1lb3V0KGZuLCAyMCk7IH07XG4gICAgICAgIHZhciByYWYgPSBmdW5jdGlvbihmbikgeyByZXR1cm4gc2V0VGltZW91dChmbiwgMCk7IH07XG4gICAgICAgIHJldHVybiByYWYoY2FsbGJhY2spO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZDogYWRkRnVuY3Rpb24sXG4gICAgICAgIGZvcmNlOiBmb3JjZVByb2Nlc3NCYXRjaFxuICAgIH07XG59O1xuXG5mdW5jdGlvbiBCYXRjaCgpIHtcbiAgICB2YXIgYmF0Y2ggICAgICAgPSB7fTtcbiAgICB2YXIgc2l6ZSAgICAgICAgPSAwO1xuICAgIHZhciB0b3BMZXZlbCAgICA9IDA7XG4gICAgdmFyIGJvdHRvbUxldmVsID0gMDtcblxuICAgIGZ1bmN0aW9uIGFkZChsZXZlbCwgZm4pIHtcbiAgICAgICAgaWYoIWZuKSB7XG4gICAgICAgICAgICBmbiA9IGxldmVsO1xuICAgICAgICAgICAgbGV2ZWwgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYobGV2ZWwgPiB0b3BMZXZlbCkge1xuICAgICAgICAgICAgdG9wTGV2ZWwgPSBsZXZlbDtcbiAgICAgICAgfSBlbHNlIGlmKGxldmVsIDwgYm90dG9tTGV2ZWwpIHtcbiAgICAgICAgICAgIGJvdHRvbUxldmVsID0gbGV2ZWw7XG4gICAgICAgIH1cblxuICAgICAgICBpZighYmF0Y2hbbGV2ZWxdKSB7XG4gICAgICAgICAgICBiYXRjaFtsZXZlbF0gPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJhdGNoW2xldmVsXS5wdXNoKGZuKTtcbiAgICAgICAgc2l6ZSsrO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3MoKSB7XG4gICAgICAgIGZvcih2YXIgbGV2ZWwgPSBib3R0b21MZXZlbDsgbGV2ZWwgPD0gdG9wTGV2ZWw7IGxldmVsKyspIHtcbiAgICAgICAgICAgIHZhciBmbnMgPSBiYXRjaFtsZXZlbF07XG5cbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBmbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgZm4gPSBmbnNbaV07XG4gICAgICAgICAgICAgICAgZm4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFNpemUoKSB7XG4gICAgICAgIHJldHVybiBzaXplO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIGFkZDogYWRkLFxuICAgICAgICBwcm9jZXNzOiBwcm9jZXNzLFxuICAgICAgICBzaXplOiBnZXRTaXplXG4gICAgfTtcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2JhdGNoLXByb2Nlc3Nvci9zcmMvYmF0Y2gtcHJvY2Vzc29yLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciB1dGlscyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbnV0aWxzLmdldE9wdGlvbiA9IGdldE9wdGlvbjtcblxuZnVuY3Rpb24gZ2V0T3B0aW9uKG9wdGlvbnMsIG5hbWUsIGRlZmF1bHRWYWx1ZSkge1xuICAgIHZhciB2YWx1ZSA9IG9wdGlvbnNbbmFtZV07XG5cbiAgICBpZigodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCkgJiYgZGVmYXVsdFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWU7XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9iYXRjaC1wcm9jZXNzb3Ivc3JjL3V0aWxzLmpzXG4vLyBtb2R1bGUgaWQgPSAxMjA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDQgNSA2IDcgOCA5IDEwIDExIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBwcm9wID0gXCJfZXJkXCI7XG5cbmZ1bmN0aW9uIGluaXRTdGF0ZShlbGVtZW50KSB7XG4gICAgZWxlbWVudFtwcm9wXSA9IHt9O1xuICAgIHJldHVybiBnZXRTdGF0ZShlbGVtZW50KTtcbn1cblxuZnVuY3Rpb24gZ2V0U3RhdGUoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50W3Byb3BdO1xufVxuXG5mdW5jdGlvbiBjbGVhblN0YXRlKGVsZW1lbnQpIHtcbiAgICBkZWxldGUgZWxlbWVudFtwcm9wXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgaW5pdFN0YXRlOiBpbml0U3RhdGUsXG4gICAgZ2V0U3RhdGU6IGdldFN0YXRlLFxuICAgIGNsZWFuU3RhdGU6IGNsZWFuU3RhdGVcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvc3RhdGUtaGFuZGxlci5qc1xuLy8gbW9kdWxlIGlkID0gMTIxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIi8qKlxuICogUmVzaXplIGRldGVjdGlvbiBzdHJhdGVneSB0aGF0IGluamVjdHMgb2JqZWN0cyB0byBlbGVtZW50cyBpbiBvcmRlciB0byBkZXRlY3QgcmVzaXplIGV2ZW50cy5cbiAqIEhlYXZpbHkgaW5zcGlyZWQgYnk6IGh0dHA6Ly93d3cuYmFja2FsbGV5Y29kZXIuY29tLzIwMTMvMDMvMTgvY3Jvc3MtYnJvd3Nlci1ldmVudC1iYXNlZC1lbGVtZW50LXJlc2l6ZS1kZXRlY3Rpb24vXG4gKi9cblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBicm93c2VyRGV0ZWN0b3IgPSByZXF1aXJlKFwiLi4vYnJvd3Nlci1kZXRlY3RvclwiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgb3B0aW9ucyAgICAgICAgICAgICA9IG9wdGlvbnMgfHwge307XG4gICAgdmFyIHJlcG9ydGVyICAgICAgICA9IG9wdGlvbnMucmVwb3J0ZXI7XG4gICAgdmFyIGJhdGNoUHJvY2Vzc29yICA9IG9wdGlvbnMuYmF0Y2hQcm9jZXNzb3I7XG4gICAgdmFyIGdldFN0YXRlICAgICAgICA9IG9wdGlvbnMuc3RhdGVIYW5kbGVyLmdldFN0YXRlO1xuXG4gICAgaWYoIXJlcG9ydGVyKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1pc3NpbmcgcmVxdWlyZWQgZGVwZW5kZW5jeTogcmVwb3J0ZXIuXCIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSByZXNpemUgZXZlbnQgbGlzdGVuZXIgdG8gdGhlIGVsZW1lbnQuXG4gICAgICogQHB1YmxpY1xuICAgICAqIEBwYXJhbSB7ZWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBoYXZlIHRoZSBsaXN0ZW5lciBhZGRlZC5cbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBsaXN0ZW5lciBUaGUgbGlzdGVuZXIgY2FsbGJhY2sgdG8gYmUgY2FsbGVkIGZvciBlYWNoIHJlc2l6ZSBldmVudCBvZiB0aGUgZWxlbWVudC4gVGhlIGVsZW1lbnQgd2lsbCBiZSBnaXZlbiBhcyBhIHBhcmFtZXRlciB0byB0aGUgbGlzdGVuZXIgY2FsbGJhY2suXG4gICAgICovXG4gICAgZnVuY3Rpb24gYWRkTGlzdGVuZXIoZWxlbWVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYoIWdldE9iamVjdChlbGVtZW50KSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRWxlbWVudCBpcyBub3QgZGV0ZWN0YWJsZSBieSB0aGlzIHN0cmF0ZWd5LlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGxpc3RlbmVyUHJveHkoKSB7XG4gICAgICAgICAgICBsaXN0ZW5lcihlbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGJyb3dzZXJEZXRlY3Rvci5pc0lFKDgpKSB7XG4gICAgICAgICAgICAvL0lFIDggZG9lcyBub3Qgc3VwcG9ydCBvYmplY3QsIGJ1dCBzdXBwb3J0cyB0aGUgcmVzaXplIGV2ZW50IGRpcmVjdGx5IG9uIGVsZW1lbnRzLlxuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub2JqZWN0ID0ge1xuICAgICAgICAgICAgICAgIHByb3h5OiBsaXN0ZW5lclByb3h5XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZWxlbWVudC5hdHRhY2hFdmVudChcIm9ucmVzaXplXCIsIGxpc3RlbmVyUHJveHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9iamVjdCA9IGdldE9iamVjdChlbGVtZW50KTtcbiAgICAgICAgICAgIG9iamVjdC5jb250ZW50RG9jdW1lbnQuZGVmYXVsdFZpZXcuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBsaXN0ZW5lclByb3h5KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGFuIGVsZW1lbnQgZGV0ZWN0YWJsZSBhbmQgcmVhZHkgdG8gYmUgbGlzdGVuZWQgZm9yIHJlc2l6ZSBldmVudHMuIFdpbGwgY2FsbCB0aGUgY2FsbGJhY2sgd2hlbiB0aGUgZWxlbWVudCBpcyByZWFkeSB0byBiZSBsaXN0ZW5lZCBmb3IgcmVzaXplIGNoYW5nZXMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gbWFrZSBkZXRlY3RhYmxlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzIHJlYWR5IHRvIGJlIGxpc3RlbmVkIGZvciByZXNpemUgY2hhbmdlcy4gV2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgZWxlbWVudCBhcyBmaXJzdCBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWFrZURldGVjdGFibGUob3B0aW9ucywgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBlbGVtZW50O1xuICAgICAgICAgICAgZWxlbWVudCA9IG9wdGlvbnM7XG4gICAgICAgICAgICBvcHRpb25zID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB2YXIgZGVidWcgPSBvcHRpb25zLmRlYnVnO1xuXG4gICAgICAgIGZ1bmN0aW9uIGluamVjdE9iamVjdChlbGVtZW50LCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIE9CSkVDVF9TVFlMRSA9IFwiZGlzcGxheTogYmxvY2s7IHBvc2l0aW9uOiBhYnNvbHV0ZTsgdG9wOiAwOyBsZWZ0OiAwOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBib3JkZXI6IG5vbmU7IHBhZGRpbmc6IDA7IG1hcmdpbjogMDsgb3BhY2l0eTogMDsgei1pbmRleDogLTEwMDA7IHBvaW50ZXItZXZlbnRzOiBub25lO1wiO1xuXG4gICAgICAgICAgICAvL1RoZSB0YXJnZXQgZWxlbWVudCBuZWVkcyB0byBiZSBwb3NpdGlvbmVkIChldmVyeXRoaW5nIGV4Y2VwdCBzdGF0aWMpIHNvIHRoZSBhYnNvbHV0ZSBwb3NpdGlvbmVkIG9iamVjdCB3aWxsIGJlIHBvc2l0aW9uZWQgcmVsYXRpdmUgdG8gdGhlIHRhcmdldCBlbGVtZW50LlxuXG4gICAgICAgICAgICAvLyBQb3NpdGlvbiBhbHRlcmluZyBtYXkgYmUgcGVyZm9ybWVkIGRpcmVjdGx5IG9yIG9uIG9iamVjdCBsb2FkLCBkZXBlbmRpbmcgb24gaWYgc3R5bGUgcmVzb2x1dGlvbiBpcyBwb3NzaWJsZSBkaXJlY3RseSBvciBub3QuXG4gICAgICAgICAgICB2YXIgcG9zaXRpb25DaGVja1BlcmZvcm1lZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICAvLyBUaGUgZWxlbWVudCBtYXkgbm90IHlldCBiZSBhdHRhY2hlZCB0byB0aGUgRE9NLCBhbmQgdGhlcmVmb3JlIHRoZSBzdHlsZSBvYmplY3QgbWF5IGJlIGVtcHR5IGluIHNvbWUgYnJvd3NlcnMuXG4gICAgICAgICAgICAvLyBTaW5jZSB0aGUgc3R5bGUgb2JqZWN0IGlzIGEgcmVmZXJlbmNlLCBpdCB3aWxsIGJlIHVwZGF0ZWQgYXMgc29vbiBhcyB0aGUgZWxlbWVudCBpcyBhdHRhY2hlZCB0byB0aGUgRE9NLlxuICAgICAgICAgICAgdmFyIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgd2lkdGggPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5zdGFydFNpemUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogaGVpZ2h0XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBtdXRhdGVEb20oKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gYWx0ZXJQb3NpdGlvblN0eWxlcygpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoc3R5bGUucG9zaXRpb24gPT09IFwic3RhdGljXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZW1vdmVSZWxhdGl2ZVN0eWxlcyA9IGZ1bmN0aW9uKHJlcG9ydGVyLCBlbGVtZW50LCBzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBnZXROdW1lcmljYWxWYWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUucmVwbGFjZSgvW14tXFxkXFwuXS9nLCBcIlwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBzdHlsZVtwcm9wZXJ0eV07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZSAhPT0gXCJhdXRvXCIgJiYgZ2V0TnVtZXJpY2FsVmFsdWUodmFsdWUpICE9PSBcIjBcIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBvcnRlci53YXJuKFwiQW4gZWxlbWVudCB0aGF0IGlzIHBvc2l0aW9uZWQgc3RhdGljIGhhcyBzdHlsZS5cIiArIHByb3BlcnR5ICsgXCI9XCIgKyB2YWx1ZSArIFwiIHdoaWNoIGlzIGlnbm9yZWQgZHVlIHRvIHRoZSBzdGF0aWMgcG9zaXRpb25pbmcuIFRoZSBlbGVtZW50IHdpbGwgbmVlZCB0byBiZSBwb3NpdGlvbmVkIHJlbGF0aXZlLCBzbyB0aGUgc3R5bGUuXCIgKyBwcm9wZXJ0eSArIFwiIHdpbGwgYmUgc2V0IHRvIDAuIEVsZW1lbnQ6IFwiLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5zdHlsZVtwcm9wZXJ0eV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vQ2hlY2sgc28gdGhhdCB0aGVyZSBhcmUgbm8gYWNjaWRlbnRhbCBzdHlsZXMgdGhhdCB3aWxsIG1ha2UgdGhlIGVsZW1lbnQgc3R5bGVkIGRpZmZlcmVudGx5IG5vdyB0aGF0IGlzIGlzIHJlbGF0aXZlLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy9JZiB0aGVyZSBhcmUgYW55LCBzZXQgdGhlbSB0byAwICh0aGlzIHNob3VsZCBiZSBva2F5IHdpdGggdGhlIHVzZXIgc2luY2UgdGhlIHN0eWxlIHByb3BlcnRpZXMgZGlkIG5vdGhpbmcgYmVmb3JlIFtzaW5jZSB0aGUgZWxlbWVudCB3YXMgcG9zaXRpb25lZCBzdGF0aWNdIGFueXdheSkuXG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdmVSZWxhdGl2ZVN0eWxlcyhyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIFwidG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVsYXRpdmVTdHlsZXMocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBcInJpZ2h0XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3ZlUmVsYXRpdmVTdHlsZXMocmVwb3J0ZXIsIGVsZW1lbnQsIHN0eWxlLCBcImJvdHRvbVwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlbGF0aXZlU3R5bGVzKHJlcG9ydGVyLCBlbGVtZW50LCBzdHlsZSwgXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gb25PYmplY3RMb2FkKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgb2JqZWN0IGhhcyBiZWVuIGxvYWRlZCwgd2hpY2ggbWVhbnMgdGhhdCB0aGUgZWxlbWVudCBub3cgaXMgZ3VhcmFudGVlZCB0byBiZSBhdHRhY2hlZCB0byB0aGUgRE9NLlxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBvc2l0aW9uQ2hlY2tQZXJmb3JtZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdGVyUG9zaXRpb25TdHlsZXMoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC8qanNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuXG4gICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldERvY3VtZW50KGVsZW1lbnQsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL09wZXJhIDEyIHNlZW0gdG8gY2FsbCB0aGUgb2JqZWN0Lm9ubG9hZCBiZWZvcmUgdGhlIGFjdHVhbCBkb2N1bWVudCBoYXMgYmVlbiBjcmVhdGVkLlxuICAgICAgICAgICAgICAgICAgICAgICAgLy9TbyBpZiBpdCBpcyBub3QgcHJlc2VudCwgcG9sbCBpdCB3aXRoIGFuIHRpbWVvdXQgdW50aWwgaXQgaXMgcHJlc2VudC5cbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVE9ETzogQ291bGQgbWF5YmUgYmUgaGFuZGxlZCBiZXR0ZXIgd2l0aCBvYmplY3Qub25yZWFkeXN0YXRlY2hhbmdlIG9yIHNpbWlsYXIuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighZWxlbWVudC5jb250ZW50RG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uIGNoZWNrRm9yT2JqZWN0RG9jdW1lbnQoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldERvY3VtZW50KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50LmNvbnRlbnREb2N1bWVudCk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAvL011dGF0aW5nIHRoZSBvYmplY3QgZWxlbWVudCBoZXJlIHNlZW1zIHRvIGZpcmUgYW5vdGhlciBsb2FkIGV2ZW50LlxuICAgICAgICAgICAgICAgICAgICAvL011dGF0aW5nIHRoZSBpbm5lciBkb2N1bWVudCBvZiB0aGUgb2JqZWN0IGVsZW1lbnQgaXMgZmluZSB0aG91Z2guXG4gICAgICAgICAgICAgICAgICAgIHZhciBvYmplY3RFbGVtZW50ID0gdGhpcztcblxuICAgICAgICAgICAgICAgICAgICAvL0NyZWF0ZSB0aGUgc3R5bGUgZWxlbWVudCB0byBiZSBhZGRlZCB0byB0aGUgb2JqZWN0LlxuICAgICAgICAgICAgICAgICAgICBnZXREb2N1bWVudChvYmplY3RFbGVtZW50LCBmdW5jdGlvbiBvbk9iamVjdERvY3VtZW50UmVhZHkob2JqZWN0RG9jdW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vTm90aWZ5IHRoYXQgdGhlIGVsZW1lbnQgaXMgcmVhZHkgdG8gYmUgbGlzdGVuZWQgdG8uXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGVsZW1lbnQgbWF5IGJlIGRldGFjaGVkIGZyb20gdGhlIERPTSwgYW5kIHNvbWUgYnJvd3NlcnMgZG9lcyBub3Qgc3VwcG9ydCBzdHlsZSByZXNvbHZpbmcgb2YgZGV0YWNoZWQgZWxlbWVudHMuXG4gICAgICAgICAgICAgICAgLy8gVGhlIGFsdGVyUG9zaXRpb25TdHlsZXMgbmVlZHMgdG8gYmUgZGVsYXllZCB1bnRpbCB3ZSBrbm93IHRoZSBlbGVtZW50IGhhcyBiZWVuIGF0dGFjaGVkIHRvIHRoZSBET00gKHdoaWNoIHdlIGFyZSBzdXJlIG9mIHdoZW4gdGhlIG9uT2JqZWN0TG9hZCBoYXMgYmVlbiBmaXJlZCksIGlmIHN0eWxlIHJlc29sdXRpb24gaXMgbm90IHBvc3NpYmxlLlxuICAgICAgICAgICAgICAgIGlmIChzdHlsZS5wb3NpdGlvbiAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgICAgICBhbHRlclBvc2l0aW9uU3R5bGVzKHN0eWxlKTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25DaGVja1BlcmZvcm1lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy9BZGQgYW4gb2JqZWN0IGVsZW1lbnQgYXMgYSBjaGlsZCB0byB0aGUgdGFyZ2V0IGVsZW1lbnQgdGhhdCB3aWxsIGJlIGxpc3RlbmVkIHRvIGZvciByZXNpemUgZXZlbnRzLlxuICAgICAgICAgICAgICAgIHZhciBvYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib2JqZWN0XCIpO1xuICAgICAgICAgICAgICAgIG9iamVjdC5zdHlsZS5jc3NUZXh0ID0gT0JKRUNUX1NUWUxFO1xuICAgICAgICAgICAgICAgIG9iamVjdC50YWJJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIG9iamVjdC50eXBlID0gXCJ0ZXh0L2h0bWxcIjtcbiAgICAgICAgICAgICAgICBvYmplY3Qub25sb2FkID0gb25PYmplY3RMb2FkO1xuXG4gICAgICAgICAgICAgICAgLy9TYWZhcmk6IFRoaXMgbXVzdCBvY2N1ciBiZWZvcmUgYWRkaW5nIHRoZSBvYmplY3QgdG8gdGhlIERPTS5cbiAgICAgICAgICAgICAgICAvL0lFOiBEb2VzIG5vdCBsaWtlIHRoYXQgdGhpcyBoYXBwZW5zIGJlZm9yZSwgZXZlbiBpZiBpdCBpcyBhbHNvIGFkZGVkIGFmdGVyLlxuICAgICAgICAgICAgICAgIGlmKCFicm93c2VyRGV0ZWN0b3IuaXNJRSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5kYXRhID0gXCJhYm91dDpibGFua1wiO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQob2JqZWN0KTtcbiAgICAgICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vYmplY3QgPSBvYmplY3Q7XG5cbiAgICAgICAgICAgICAgICAvL0lFOiBUaGlzIG11c3Qgb2NjdXIgYWZ0ZXIgYWRkaW5nIHRoZSBvYmplY3QgdG8gdGhlIERPTS5cbiAgICAgICAgICAgICAgICBpZihicm93c2VyRGV0ZWN0b3IuaXNJRSgpKSB7XG4gICAgICAgICAgICAgICAgICAgIG9iamVjdC5kYXRhID0gXCJhYm91dDpibGFua1wiO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYoYmF0Y2hQcm9jZXNzb3IpIHtcbiAgICAgICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQobXV0YXRlRG9tKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgbXV0YXRlRG9tKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihicm93c2VyRGV0ZWN0b3IuaXNJRSg4KSkge1xuICAgICAgICAgICAgLy9JRSA4IGRvZXMgbm90IHN1cHBvcnQgb2JqZWN0cyBwcm9wZXJseS4gTHVja2lseSB0aGV5IGRvIHN1cHBvcnQgdGhlIHJlc2l6ZSBldmVudC5cbiAgICAgICAgICAgIC8vU28gZG8gbm90IGluamVjdCB0aGUgb2JqZWN0IGFuZCBub3RpZnkgdGhhdCB0aGUgZWxlbWVudCBpcyBhbHJlYWR5IHJlYWR5IHRvIGJlIGxpc3RlbmVkIHRvLlxuICAgICAgICAgICAgLy9UaGUgZXZlbnQgaGFuZGxlciBmb3IgdGhlIHJlc2l6ZSBldmVudCBpcyBhdHRhY2hlZCBpbiB0aGUgdXRpbHMuYWRkTGlzdGVuZXIgaW5zdGVhZC5cbiAgICAgICAgICAgIGNhbGxiYWNrKGVsZW1lbnQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5qZWN0T2JqZWN0KGVsZW1lbnQsIGNhbGxiYWNrKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNoaWxkIG9iamVjdCBvZiB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIHRhcmdldCBlbGVtZW50LlxuICAgICAqIEByZXR1cm5zIFRoZSBvYmplY3QgZWxlbWVudCBvZiB0aGUgdGFyZ2V0LlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGdldE9iamVjdChlbGVtZW50KSB7XG4gICAgICAgIHJldHVybiBnZXRTdGF0ZShlbGVtZW50KS5vYmplY3Q7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdW5pbnN0YWxsKGVsZW1lbnQpIHtcbiAgICAgICAgaWYoYnJvd3NlckRldGVjdG9yLmlzSUUoOCkpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuZGV0YWNoRXZlbnQoXCJvbnJlc2l6ZVwiLCBnZXRTdGF0ZShlbGVtZW50KS5vYmplY3QucHJveHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVDaGlsZChnZXRPYmplY3QoZWxlbWVudCkpO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSBnZXRTdGF0ZShlbGVtZW50KS5vYmplY3Q7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgbWFrZURldGVjdGFibGU6IG1ha2VEZXRlY3RhYmxlLFxuICAgICAgICBhZGRMaXN0ZW5lcjogYWRkTGlzdGVuZXIsXG4gICAgICAgIHVuaW5zdGFsbDogdW5pbnN0YWxsXG4gICAgfTtcbn07XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9lbGVtZW50LXJlc2l6ZS1kZXRlY3Rvci9zcmMvZGV0ZWN0aW9uLXN0cmF0ZWd5L29iamVjdC5qc1xuLy8gbW9kdWxlIGlkID0gMTIxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyA0IDUgNiA3IDggOSAxMCAxMSIsIi8qKlxuICogUmVzaXplIGRldGVjdGlvbiBzdHJhdGVneSB0aGF0IGluamVjdHMgZGl2cyB0byBlbGVtZW50cyBpbiBvcmRlciB0byBkZXRlY3QgcmVzaXplIGV2ZW50cyBvbiBzY3JvbGwgZXZlbnRzLlxuICogSGVhdmlseSBpbnNwaXJlZCBieTogaHR0cHM6Ly9naXRodWIuY29tL21hcmNqL2Nzcy1lbGVtZW50LXF1ZXJpZXMvYmxvYi9tYXN0ZXIvc3JjL1Jlc2l6ZVNlbnNvci5qc1xuICovXG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgZm9yRWFjaCA9IHJlcXVpcmUoXCIuLi9jb2xsZWN0aW9uLXV0aWxzXCIpLmZvckVhY2g7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgIG9wdGlvbnMgICAgICAgICAgICAgPSBvcHRpb25zIHx8IHt9O1xuICAgIHZhciByZXBvcnRlciAgICAgICAgPSBvcHRpb25zLnJlcG9ydGVyO1xuICAgIHZhciBiYXRjaFByb2Nlc3NvciAgPSBvcHRpb25zLmJhdGNoUHJvY2Vzc29yO1xuICAgIHZhciBnZXRTdGF0ZSAgICAgICAgPSBvcHRpb25zLnN0YXRlSGFuZGxlci5nZXRTdGF0ZTtcbiAgICB2YXIgaGFzU3RhdGUgICAgICAgID0gb3B0aW9ucy5zdGF0ZUhhbmRsZXIuaGFzU3RhdGU7XG4gICAgdmFyIGlkSGFuZGxlciAgICAgICA9IG9wdGlvbnMuaWRIYW5kbGVyO1xuXG4gICAgaWYgKCFiYXRjaFByb2Nlc3Nvcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNaXNzaW5nIHJlcXVpcmVkIGRlcGVuZGVuY3k6IGJhdGNoUHJvY2Vzc29yXCIpO1xuICAgIH1cblxuICAgIGlmICghcmVwb3J0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWlzc2luZyByZXF1aXJlZCBkZXBlbmRlbmN5OiByZXBvcnRlci5cIik7XG4gICAgfVxuXG4gICAgLy9UT0RPOiBDb3VsZCB0aGlzIHBlcmhhcHMgYmUgZG9uZSBhdCBpbnN0YWxsYXRpb24gdGltZT9cbiAgICB2YXIgc2Nyb2xsYmFyU2l6ZXMgPSBnZXRTY3JvbGxiYXJTaXplcygpO1xuXG4gICAgLy8gSW5qZWN0IHRoZSBzY3JvbGxiYXIgc3R5bGluZyB0aGF0IHByZXZlbnRzIHRoZW0gZnJvbSBhcHBlYXJpbmcgc29tZXRpbWVzIGluIENocm9tZS5cbiAgICAvLyBUaGUgaW5qZWN0ZWQgY29udGFpbmVyIG5lZWRzIHRvIGhhdmUgYSBjbGFzcywgc28gdGhhdCBpdCBtYXkgYmUgc3R5bGVkIHdpdGggQ1NTIChwc2V1ZG8gZWxlbWVudHMpLlxuICAgIHZhciBzdHlsZUlkID0gXCJlcmRfc2Nyb2xsX2RldGVjdGlvbl9zY3JvbGxiYXJfc3R5bGVcIjtcbiAgICB2YXIgZGV0ZWN0aW9uQ29udGFpbmVyQ2xhc3MgPSBcImVyZF9zY3JvbGxfZGV0ZWN0aW9uX2NvbnRhaW5lclwiO1xuICAgIGluamVjdFNjcm9sbFN0eWxlKHN0eWxlSWQsIGRldGVjdGlvbkNvbnRhaW5lckNsYXNzKTtcblxuICAgIGZ1bmN0aW9uIGdldFNjcm9sbGJhclNpemVzKCkge1xuICAgICAgICB2YXIgd2lkdGggPSA1MDA7XG4gICAgICAgIHZhciBoZWlnaHQgPSA1MDA7XG5cbiAgICAgICAgdmFyIGNoaWxkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgY2hpbGQuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogXCIgKyB3aWR0aCoyICsgXCJweDsgaGVpZ2h0OiBcIiArIGhlaWdodCoyICsgXCJweDsgdmlzaWJpbGl0eTogaGlkZGVuOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XCI7XG5cbiAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IHdpZHRoOiBcIiArIHdpZHRoICsgXCJweDsgaGVpZ2h0OiBcIiArIGhlaWdodCArIFwicHg7IG92ZXJmbG93OiBzY3JvbGw7IHZpc2liaWxpdHk6IG5vbmU7IHRvcDogXCIgKyAtd2lkdGgqMyArIFwicHg7IGxlZnQ6IFwiICsgLWhlaWdodCozICsgXCJweDsgdmlzaWJpbGl0eTogaGlkZGVuOyBtYXJnaW46IDA7IHBhZGRpbmc6IDA7XCI7XG5cbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNoaWxkKTtcblxuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjb250YWluZXIsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XG5cbiAgICAgICAgdmFyIHdpZHRoU2l6ZSA9IHdpZHRoIC0gY29udGFpbmVyLmNsaWVudFdpZHRoO1xuICAgICAgICB2YXIgaGVpZ2h0U2l6ZSA9IGhlaWdodCAtIGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChjb250YWluZXIpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB3aWR0aDogd2lkdGhTaXplLFxuICAgICAgICAgICAgaGVpZ2h0OiBoZWlnaHRTaXplXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5qZWN0U2Nyb2xsU3R5bGUoc3R5bGVJZCwgY29udGFpbmVyQ2xhc3MpIHtcbiAgICAgICAgZnVuY3Rpb24gaW5qZWN0U3R5bGUoc3R5bGUsIG1ldGhvZCkge1xuICAgICAgICAgICAgbWV0aG9kID0gbWV0aG9kIHx8IGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChlbGVtZW50KTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIHZhciBzdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gICAgICAgICAgICBzdHlsZUVsZW1lbnQuaW5uZXJIVE1MID0gc3R5bGU7XG4gICAgICAgICAgICBzdHlsZUVsZW1lbnQuaWQgPSBzdHlsZUlkO1xuICAgICAgICAgICAgbWV0aG9kKHN0eWxlRWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm4gc3R5bGVFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzdHlsZUlkKSkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lckFuaW1hdGlvbkNsYXNzID0gY29udGFpbmVyQ2xhc3MgKyBcIl9hbmltYXRpb25cIjtcbiAgICAgICAgICAgIHZhciBjb250YWluZXJBbmltYXRpb25BY3RpdmVDbGFzcyA9IGNvbnRhaW5lckNsYXNzICsgXCJfYW5pbWF0aW9uX2FjdGl2ZVwiO1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gXCIvKiBDcmVhdGVkIGJ5IHRoZSBlbGVtZW50LXJlc2l6ZS1kZXRlY3RvciBsaWJyYXJ5LiAqL1xcblwiO1xuICAgICAgICAgICAgc3R5bGUgKz0gXCIuXCIgKyBjb250YWluZXJDbGFzcyArIFwiID4gZGl2Ojotd2Via2l0LXNjcm9sbGJhciB7IGRpc3BsYXk6IG5vbmU7IH1cXG5cXG5cIjtcbiAgICAgICAgICAgIHN0eWxlICs9IFwiLlwiICsgY29udGFpbmVyQW5pbWF0aW9uQWN0aXZlQ2xhc3MgKyBcIiB7IC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAwLjFzOyBhbmltYXRpb24tZHVyYXRpb246IDAuMXM7IC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IFwiICsgY29udGFpbmVyQW5pbWF0aW9uQ2xhc3MgKyBcIjsgYW5pbWF0aW9uLW5hbWU6IFwiICsgY29udGFpbmVyQW5pbWF0aW9uQ2xhc3MgKyBcIjsgfVxcblwiO1xuICAgICAgICAgICAgc3R5bGUgKz0gXCJALXdlYmtpdC1rZXlmcmFtZXMgXCIgKyBjb250YWluZXJBbmltYXRpb25DbGFzcyArICBcIiB7IDAlIHsgb3BhY2l0eTogMTsgfSA1MCUgeyBvcGFjaXR5OiAwOyB9IDEwMCUgeyBvcGFjaXR5OiAxOyB9IH1cXG5cIjtcbiAgICAgICAgICAgIHN0eWxlICs9IFwiQGtleWZyYW1lcyBcIiArIGNvbnRhaW5lckFuaW1hdGlvbkNsYXNzICsgICAgICAgICAgXCIgeyAwJSB7IG9wYWNpdHk6IDE7IH0gNTAlIHsgb3BhY2l0eTogMDsgfSAxMDAlIHsgb3BhY2l0eTogMTsgfSB9XCI7XG4gICAgICAgICAgICBpbmplY3RTdHlsZShzdHlsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhZGRBbmltYXRpb25DbGFzcyhlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NOYW1lICs9IFwiIFwiICsgZGV0ZWN0aW9uQ29udGFpbmVyQ2xhc3MgKyBcIl9hbmltYXRpb25fYWN0aXZlXCI7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkRXZlbnQoZWwsIG5hbWUsIGNiKSB7XG4gICAgICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICBlbC5hZGRFdmVudExpc3RlbmVyKG5hbWUsIGNiKTtcbiAgICAgICAgfSBlbHNlIGlmKGVsLmF0dGFjaEV2ZW50KSB7XG4gICAgICAgICAgICBlbC5hdHRhY2hFdmVudChcIm9uXCIgKyBuYW1lLCBjYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcmVwb3J0ZXIuZXJyb3IoXCJbc2Nyb2xsXSBEb24ndCBrbm93IGhvdyB0byBhZGQgZXZlbnQgbGlzdGVuZXJzLlwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlbW92ZUV2ZW50KGVsLCBuYW1lLCBjYikge1xuICAgICAgICBpZiAoZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgZWwucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCBjYik7XG4gICAgICAgIH0gZWxzZSBpZihlbC5kZXRhY2hFdmVudCkge1xuICAgICAgICAgICAgZWwuZGV0YWNoRXZlbnQoXCJvblwiICsgbmFtZSwgY2IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHJlcG9ydGVyLmVycm9yKFwiW3Njcm9sbF0gRG9uJ3Qga25vdyBob3cgdG8gcmVtb3ZlIGV2ZW50IGxpc3RlbmVycy5cIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRFeHBhbmRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGdldFN0YXRlKGVsZW1lbnQpLmNvbnRhaW5lci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1swXTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRTaHJpbmtFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIGdldFN0YXRlKGVsZW1lbnQpLmNvbnRhaW5lci5jaGlsZE5vZGVzWzBdLmNoaWxkTm9kZXNbMF0uY2hpbGROb2Rlc1sxXTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgcmVzaXplIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBlbGVtZW50LlxuICAgICAqIEBwdWJsaWNcbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgaGF2ZSB0aGUgbGlzdGVuZXIgYWRkZWQuXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gbGlzdGVuZXIgVGhlIGxpc3RlbmVyIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCBmb3IgZWFjaCByZXNpemUgZXZlbnQgb2YgdGhlIGVsZW1lbnQuIFRoZSBlbGVtZW50IHdpbGwgYmUgZ2l2ZW4gYXMgYSBwYXJhbWV0ZXIgdG8gdGhlIGxpc3RlbmVyIGNhbGxiYWNrLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIGFkZExpc3RlbmVyKGVsZW1lbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIHZhciBsaXN0ZW5lcnMgPSBnZXRTdGF0ZShlbGVtZW50KS5saXN0ZW5lcnM7XG5cbiAgICAgICAgaWYgKCFsaXN0ZW5lcnMucHVzaCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGFkZCBsaXN0ZW5lciB0byBhbiBlbGVtZW50IHRoYXQgaXMgbm90IGRldGVjdGFibGUuXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkubGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1ha2VzIGFuIGVsZW1lbnQgZGV0ZWN0YWJsZSBhbmQgcmVhZHkgdG8gYmUgbGlzdGVuZWQgZm9yIHJlc2l6ZSBldmVudHMuIFdpbGwgY2FsbCB0aGUgY2FsbGJhY2sgd2hlbiB0aGUgZWxlbWVudCBpcyByZWFkeSB0byBiZSBsaXN0ZW5lZCBmb3IgcmVzaXplIGNoYW5nZXMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9ucyBPcHRpb25hbCBvcHRpb25zIG9iamVjdC5cbiAgICAgKiBAcGFyYW0ge2VsZW1lbnR9IGVsZW1lbnQgVGhlIGVsZW1lbnQgdG8gbWFrZSBkZXRlY3RhYmxlXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2sgVGhlIGNhbGxiYWNrIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBlbGVtZW50IGlzIHJlYWR5IHRvIGJlIGxpc3RlbmVkIGZvciByZXNpemUgY2hhbmdlcy4gV2lsbCBiZSBjYWxsZWQgd2l0aCB0aGUgZWxlbWVudCBhcyBmaXJzdCBwYXJhbWV0ZXIuXG4gICAgICovXG4gICAgZnVuY3Rpb24gbWFrZURldGVjdGFibGUob3B0aW9ucywgZWxlbWVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2sgPSBlbGVtZW50O1xuICAgICAgICAgICAgZWxlbWVudCA9IG9wdGlvbnM7XG4gICAgICAgICAgICBvcHRpb25zID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuZGVidWcpIHtcbiAgICAgICAgICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgYXJncy51bnNoaWZ0KGlkSGFuZGxlci5nZXQoZWxlbWVudCksIFwiU2Nyb2xsOiBcIik7XG4gICAgICAgICAgICAgICAgaWYgKHJlcG9ydGVyLmxvZy5hcHBseSkge1xuICAgICAgICAgICAgICAgICAgICByZXBvcnRlci5sb2cuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcmdzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXBvcnRlci5sb2coYXJnc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpc0RldGFjaGVkKGVsZW1lbnQpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGlzSW5Eb2N1bWVudChlbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGVsZW1lbnQgPT09IGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5IHx8IGVsZW1lbnQub3duZXJEb2N1bWVudC5ib2R5LmNvbnRhaW5zKGVsZW1lbnQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIWlzSW5Eb2N1bWVudChlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBGaXJlRm94IHJldHVybnMgbnVsbCBzdHlsZSBpbiBoaWRkZW4gaWZyYW1lcy4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93bnIvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3IvaXNzdWVzLzY4IGFuZCBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03OTU1MjBcbiAgICAgICAgICAgIGlmIChnZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGlzVW5yZW5kZXJlZChlbGVtZW50KSB7XG4gICAgICAgICAgICAvLyBDaGVjayB0aGUgYWJzb2x1dGUgcG9zaXRpb25lZCBjb250YWluZXIgc2luY2UgdGhlIHRvcCBsZXZlbCBjb250YWluZXIgaXMgZGlzcGxheTogaW5saW5lLlxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdldFN0YXRlKGVsZW1lbnQpLmNvbnRhaW5lci5jaGlsZE5vZGVzWzBdO1xuICAgICAgICAgICAgdmFyIHN0eWxlID0gZ2V0Q29tcHV0ZWRTdHlsZShjb250YWluZXIpO1xuICAgICAgICAgICAgcmV0dXJuICFzdHlsZS53aWR0aCB8fCBzdHlsZS53aWR0aC5pbmRleE9mKFwicHhcIikgPT09IC0xOyAvL0NhbiBvbmx5IGNvbXB1dGUgcGl4ZWwgdmFsdWUgd2hlbiByZW5kZXJlZC5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFN0eWxlKCkge1xuICAgICAgICAgICAgLy8gU29tZSBicm93c2VycyBvbmx5IGZvcmNlIGxheW91dHMgd2hlbiBhY3R1YWxseSByZWFkaW5nIHRoZSBzdHlsZSBwcm9wZXJ0aWVzIG9mIHRoZSBzdHlsZSBvYmplY3QsIHNvIG1ha2Ugc3VyZSB0aGF0IHRoZXkgYXJlIGFsbCByZWFkIGhlcmUsXG4gICAgICAgICAgICAvLyBzbyB0aGF0IHRoZSB1c2VyIG9mIHRoZSBmdW5jdGlvbiBjYW4gYmUgc3VyZSB0aGF0IGl0IHdpbGwgcGVyZm9ybSB0aGUgbGF5b3V0IGhlcmUsIGluc3RlYWQgb2YgbGF0ZXIgKGltcG9ydGFudCBmb3IgYmF0Y2hpbmcpLlxuICAgICAgICAgICAgdmFyIGVsZW1lbnRTdHlsZSAgICAgICAgICAgID0gZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICAgICAgICAgIHZhciBzdHlsZSAgICAgICAgICAgICAgICAgICA9IHt9O1xuICAgICAgICAgICAgc3R5bGUucG9zaXRpb24gICAgICAgICAgICAgID0gZWxlbWVudFN0eWxlLnBvc2l0aW9uO1xuICAgICAgICAgICAgc3R5bGUud2lkdGggICAgICAgICAgICAgICAgID0gZWxlbWVudC5vZmZzZXRXaWR0aDtcbiAgICAgICAgICAgIHN0eWxlLmhlaWdodCAgICAgICAgICAgICAgICA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuICAgICAgICAgICAgc3R5bGUudG9wICAgICAgICAgICAgICAgICAgID0gZWxlbWVudFN0eWxlLnRvcDtcbiAgICAgICAgICAgIHN0eWxlLnJpZ2h0ICAgICAgICAgICAgICAgICA9IGVsZW1lbnRTdHlsZS5yaWdodDtcbiAgICAgICAgICAgIHN0eWxlLmJvdHRvbSAgICAgICAgICAgICAgICA9IGVsZW1lbnRTdHlsZS5ib3R0b207XG4gICAgICAgICAgICBzdHlsZS5sZWZ0ICAgICAgICAgICAgICAgICAgPSBlbGVtZW50U3R5bGUubGVmdDtcbiAgICAgICAgICAgIHN0eWxlLndpZHRoQ1NTICAgICAgICAgICAgICA9IGVsZW1lbnRTdHlsZS53aWR0aDtcbiAgICAgICAgICAgIHN0eWxlLmhlaWdodENTUyAgICAgICAgICAgICA9IGVsZW1lbnRTdHlsZS5oZWlnaHQ7XG4gICAgICAgICAgICByZXR1cm4gc3R5bGU7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzdG9yZVN0YXJ0U2l6ZSgpIHtcbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGdldFN0eWxlKCk7XG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5zdGFydFNpemUgPSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IHN0eWxlLndpZHRoLFxuICAgICAgICAgICAgICAgIGhlaWdodDogc3R5bGUuaGVpZ2h0XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgZGVidWcoXCJFbGVtZW50IHN0YXJ0IHNpemVcIiwgZ2V0U3RhdGUoZWxlbWVudCkuc3RhcnRTaXplKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXRMaXN0ZW5lcnMoKSB7XG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5saXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0b3JlU3R5bGUoKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcInN0b3JlU3R5bGUgaW52b2tlZC5cIik7XG4gICAgICAgICAgICBpZiAoIWdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgZGVidWcoXCJBYm9ydGluZyBiZWNhdXNlIGVsZW1lbnQgaGFzIGJlZW4gdW5pbnN0YWxsZWRcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBnZXRTdHlsZSgpO1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkuc3R5bGUgPSBzdHlsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHN0b3JlQ3VycmVudFNpemUoZWxlbWVudCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkubGFzdFdpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5sYXN0SGVpZ2h0ICA9IGhlaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEV4cGFuZENoaWxkRWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0RXhwYW5kRWxlbWVudChlbGVtZW50KS5jaGlsZE5vZGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0V2lkdGhPZmZzZXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gMiAqIHNjcm9sbGJhclNpemVzLndpZHRoICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEhlaWdodE9mZnNldCgpIHtcbiAgICAgICAgICAgIHJldHVybiAyICogc2Nyb2xsYmFyU2l6ZXMuaGVpZ2h0ICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEV4cGFuZFdpZHRoKHdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkdGggKyAxMCArIGdldFdpZHRoT2Zmc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRFeHBhbmRIZWlnaHQoaGVpZ2h0KSB7XG4gICAgICAgICAgICByZXR1cm4gaGVpZ2h0ICsgMTAgKyBnZXRIZWlnaHRPZmZzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFNocmlua1dpZHRoKHdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkdGggKiAyICsgZ2V0V2lkdGhPZmZzZXQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFNocmlua0hlaWdodChoZWlnaHQpIHtcbiAgICAgICAgICAgIHJldHVybiBoZWlnaHQgKiAyICsgZ2V0SGVpZ2h0T2Zmc2V0KCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwb3NpdGlvblNjcm9sbGJhcnMoZWxlbWVudCwgd2lkdGgsIGhlaWdodCkge1xuICAgICAgICAgICAgdmFyIGV4cGFuZCAgICAgICAgICA9IGdldEV4cGFuZEVsZW1lbnQoZWxlbWVudCk7XG4gICAgICAgICAgICB2YXIgc2hyaW5rICAgICAgICAgID0gZ2V0U2hyaW5rRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgIHZhciBleHBhbmRXaWR0aCAgICAgPSBnZXRFeHBhbmRXaWR0aCh3aWR0aCk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kSGVpZ2h0ICAgID0gZ2V0RXhwYW5kSGVpZ2h0KGhlaWdodCk7XG4gICAgICAgICAgICB2YXIgc2hyaW5rV2lkdGggICAgID0gZ2V0U2hyaW5rV2lkdGgod2lkdGgpO1xuICAgICAgICAgICAgdmFyIHNocmlua0hlaWdodCAgICA9IGdldFNocmlua0hlaWdodChoZWlnaHQpO1xuICAgICAgICAgICAgZXhwYW5kLnNjcm9sbExlZnQgICA9IGV4cGFuZFdpZHRoO1xuICAgICAgICAgICAgZXhwYW5kLnNjcm9sbFRvcCAgICA9IGV4cGFuZEhlaWdodDtcbiAgICAgICAgICAgIHNocmluay5zY3JvbGxMZWZ0ICAgPSBzaHJpbmtXaWR0aDtcbiAgICAgICAgICAgIHNocmluay5zY3JvbGxUb3AgICAgPSBzaHJpbmtIZWlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbmplY3RDb250YWluZXJFbGVtZW50KCkge1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGdldFN0YXRlKGVsZW1lbnQpLmNvbnRhaW5lcjtcblxuICAgICAgICAgICAgaWYgKCFjb250YWluZXIpIHtcbiAgICAgICAgICAgICAgICBjb250YWluZXIgICAgICAgICAgICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgICAgICAgICA9IGRldGVjdGlvbkNvbnRhaW5lckNsYXNzO1xuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ICAgICA9IFwidmlzaWJpbGl0eTogaGlkZGVuOyBkaXNwbGF5OiBpbmxpbmU7IHdpZHRoOiAwcHg7IGhlaWdodDogMHB4OyB6LWluZGV4OiAtMTsgb3ZlcmZsb3c6IGhpZGRlbjsgbWFyZ2luOiAwOyBwYWRkaW5nOiAwO1wiO1xuICAgICAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLmNvbnRhaW5lciA9IGNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICBhZGRBbmltYXRpb25DbGFzcyhjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIGVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcblxuICAgICAgICAgICAgICAgIHZhciBvbkFuaW1hdGlvblN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vblJlbmRlcmVkICYmIGdldFN0YXRlKGVsZW1lbnQpLm9uUmVuZGVyZWQoKTtcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgYWRkRXZlbnQoY29udGFpbmVyLCBcImFuaW1hdGlvbnN0YXJ0XCIsIG9uQW5pbWF0aW9uU3RhcnQpO1xuXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgdGhlIGV2ZW50IGhhbmRsZXIgaGVyZSBzbyB0aGF0IHRoZXkgbWF5IGJlIHJlbW92ZWQgd2hlbiB1bmluc3RhbGwgaXMgY2FsbGVkLlxuICAgICAgICAgICAgICAgIC8vIFNlZSB1bmluc3RhbGwgZnVuY3Rpb24gZm9yIGFuIGV4cGxhbmF0aW9uIHdoeSBpdCBpcyBuZWVkZWQuXG4gICAgICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25BbmltYXRpb25TdGFydCA9IG9uQW5pbWF0aW9uU3RhcnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBjb250YWluZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbmplY3RTY3JvbGxFbGVtZW50cygpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIGFsdGVyUG9zaXRpb25TdHlsZXMoKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0eWxlID0gZ2V0U3RhdGUoZWxlbWVudCkuc3R5bGU7XG5cbiAgICAgICAgICAgICAgICBpZihzdHlsZS5wb3NpdGlvbiA9PT0gXCJzdGF0aWNcIikge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXG4gICAgICAgICAgICAgICAgICAgIHZhciByZW1vdmVSZWxhdGl2ZVN0eWxlcyA9IGZ1bmN0aW9uKHJlcG9ydGVyLCBlbGVtZW50LCBzdHlsZSwgcHJvcGVydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uIGdldE51bWVyaWNhbFZhbHVlKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL1teLVxcZFxcLl0vZywgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IHN0eWxlW3Byb3BlcnR5XTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUgIT09IFwiYXV0b1wiICYmIGdldE51bWVyaWNhbFZhbHVlKHZhbHVlKSAhPT0gXCIwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXBvcnRlci53YXJuKFwiQW4gZWxlbWVudCB0aGF0IGlzIHBvc2l0aW9uZWQgc3RhdGljIGhhcyBzdHlsZS5cIiArIHByb3BlcnR5ICsgXCI9XCIgKyB2YWx1ZSArIFwiIHdoaWNoIGlzIGlnbm9yZWQgZHVlIHRvIHRoZSBzdGF0aWMgcG9zaXRpb25pbmcuIFRoZSBlbGVtZW50IHdpbGwgbmVlZCB0byBiZSBwb3NpdGlvbmVkIHJlbGF0aXZlLCBzbyB0aGUgc3R5bGUuXCIgKyBwcm9wZXJ0eSArIFwiIHdpbGwgYmUgc2V0IHRvIDAuIEVsZW1lbnQ6IFwiLCBlbGVtZW50KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50LnN0eWxlW3Byb3BlcnR5XSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBzbyB0aGF0IHRoZXJlIGFyZSBubyBhY2NpZGVudGFsIHN0eWxlcyB0aGF0IHdpbGwgbWFrZSB0aGUgZWxlbWVudCBzdHlsZWQgZGlmZmVyZW50bHkgbm93IHRoYXQgaXMgaXMgcmVsYXRpdmUuXG4gICAgICAgICAgICAgICAgICAgIC8vSWYgdGhlcmUgYXJlIGFueSwgc2V0IHRoZW0gdG8gMCAodGhpcyBzaG91bGQgYmUgb2theSB3aXRoIHRoZSB1c2VyIHNpbmNlIHRoZSBzdHlsZSBwcm9wZXJ0aWVzIGRpZCBub3RoaW5nIGJlZm9yZSBbc2luY2UgdGhlIGVsZW1lbnQgd2FzIHBvc2l0aW9uZWQgc3RhdGljXSBhbnl3YXkpLlxuICAgICAgICAgICAgICAgICAgICByZW1vdmVSZWxhdGl2ZVN0eWxlcyhyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIFwidG9wXCIpO1xuICAgICAgICAgICAgICAgICAgICByZW1vdmVSZWxhdGl2ZVN0eWxlcyhyZXBvcnRlciwgZWxlbWVudCwgc3R5bGUsIFwicmlnaHRcIik7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlbGF0aXZlU3R5bGVzKHJlcG9ydGVyLCBlbGVtZW50LCBzdHlsZSwgXCJib3R0b21cIik7XG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZVJlbGF0aXZlU3R5bGVzKHJlcG9ydGVyLCBlbGVtZW50LCBzdHlsZSwgXCJsZWZ0XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TGVmdFRvcEJvdHRvbVJpZ2h0Q3NzVGV4dChsZWZ0LCB0b3AsIGJvdHRvbSwgcmlnaHQpIHtcbiAgICAgICAgICAgICAgICBsZWZ0ID0gKCFsZWZ0ID8gXCIwXCIgOiAobGVmdCArIFwicHhcIikpO1xuICAgICAgICAgICAgICAgIHRvcCA9ICghdG9wID8gXCIwXCIgOiAodG9wICsgXCJweFwiKSk7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gKCFib3R0b20gPyBcIjBcIiA6IChib3R0b20gKyBcInB4XCIpKTtcbiAgICAgICAgICAgICAgICByaWdodCA9ICghcmlnaHQgPyBcIjBcIiA6IChyaWdodCArIFwicHhcIikpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGVmdDogXCIgKyBsZWZ0ICsgXCI7IHRvcDogXCIgKyB0b3AgKyBcIjsgcmlnaHQ6IFwiICsgcmlnaHQgKyBcIjsgYm90dG9tOiBcIiArIGJvdHRvbSArIFwiO1wiO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWJ1ZyhcIkluamVjdGluZyBlbGVtZW50c1wiKTtcblxuICAgICAgICAgICAgaWYgKCFnZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGhhcyBiZWVuIHVuaW5zdGFsbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYWx0ZXJQb3NpdGlvblN0eWxlcygpO1xuXG4gICAgICAgICAgICB2YXIgcm9vdENvbnRhaW5lciA9IGdldFN0YXRlKGVsZW1lbnQpLmNvbnRhaW5lcjtcblxuICAgICAgICAgICAgaWYgKCFyb290Q29udGFpbmVyKSB7XG4gICAgICAgICAgICAgICAgcm9vdENvbnRhaW5lciA9IGluamVjdENvbnRhaW5lckVsZW1lbnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRHVlIHRvIHRoaXMgV2ViS2l0IGJ1ZyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9ODA4MDggKGN1cnJlbnRseSBmaXhlZCBpbiBCbGluaywgYnV0IHN0aWxsIHByZXNlbnQgaW4gV2ViS2l0IGJyb3dzZXJzIHN1Y2ggYXMgU2FmYXJpKSxcbiAgICAgICAgICAgIC8vIHdlIG5lZWQgdG8gaW5qZWN0IHR3byBjb250YWluZXJzLCBvbmUgdGhhdCBpcyB3aWR0aC9oZWlnaHQgMTAwJSBhbmQgYW5vdGhlciB0aGF0IGlzIGxlZnQvdG9wIC0xcHggc28gdGhhdCB0aGUgZmluYWwgY29udGFpbmVyIGFsd2F5cyBpcyAxeDEgcGl4ZWxzIGJpZ2dlciB0aGFuXG4gICAgICAgICAgICAvLyB0aGUgdGFyZ2V0ZWQgZWxlbWVudC5cbiAgICAgICAgICAgIC8vIFdoZW4gdGhlIGJ1ZyBpcyByZXNvbHZlZCwgXCJjb250YWluZXJDb250YWluZXJcIiBtYXkgYmUgcmVtb3ZlZC5cblxuICAgICAgICAgICAgLy8gVGhlIG91dGVyIGNvbnRhaW5lciBjYW4gb2NjYXNpb25hbGx5IGJlIGxlc3Mgd2lkZSB0aGFuIHRoZSB0YXJnZXRlZCB3aGVuIGluc2lkZSBpbmxpbmUgZWxlbWVudHMgZWxlbWVudCBpbiBXZWJLaXQgKHNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTUyOTgwKS5cbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIGJlIG5vIHByb2JsZW0gc2luY2UgdGhlIGlubmVyIGNvbnRhaW5lciBlaXRoZXIgd2F5IG1ha2VzIHN1cmUgdGhlIGluamVjdGVkIHNjcm9sbCBlbGVtZW50cyBhcmUgYXQgbGVhc3QgMXgxIHB4LlxuXG4gICAgICAgICAgICB2YXIgc2Nyb2xsYmFyV2lkdGggICAgICAgICAgPSBzY3JvbGxiYXJTaXplcy53aWR0aDtcbiAgICAgICAgICAgIHZhciBzY3JvbGxiYXJIZWlnaHQgICAgICAgICA9IHNjcm9sbGJhclNpemVzLmhlaWdodDtcbiAgICAgICAgICAgIHZhciBjb250YWluZXJDb250YWluZXJTdHlsZSA9IFwicG9zaXRpb246IGFic29sdXRlOyBmbGV4OiBub25lOyBvdmVyZmxvdzogaGlkZGVuOyB6LWluZGV4OiAtMTsgdmlzaWJpbGl0eTogaGlkZGVuOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlOyBsZWZ0OiAwcHg7IHRvcDogMHB4O1wiO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lclN0eWxlICAgICAgICAgID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IGZsZXg6IG5vbmU7IG92ZXJmbG93OiBoaWRkZW47IHotaW5kZXg6IC0xOyB2aXNpYmlsaXR5OiBoaWRkZW47IFwiICsgZ2V0TGVmdFRvcEJvdHRvbVJpZ2h0Q3NzVGV4dCgtKDEgKyBzY3JvbGxiYXJXaWR0aCksIC0oMSArIHNjcm9sbGJhckhlaWdodCksIC1zY3JvbGxiYXJIZWlnaHQsIC1zY3JvbGxiYXJXaWR0aCk7XG4gICAgICAgICAgICB2YXIgZXhwYW5kU3R5bGUgICAgICAgICAgICAgPSBcInBvc2l0aW9uOiBhYnNvbHV0ZTsgZmxleDogbm9uZTsgb3ZlcmZsb3c6IHNjcm9sbDsgei1pbmRleDogLTE7IHZpc2liaWxpdHk6IGhpZGRlbjsgd2lkdGg6IDEwMCU7IGhlaWdodDogMTAwJTtcIjtcbiAgICAgICAgICAgIHZhciBzaHJpbmtTdHlsZSAgICAgICAgICAgICA9IFwicG9zaXRpb246IGFic29sdXRlOyBmbGV4OiBub25lOyBvdmVyZmxvdzogc2Nyb2xsOyB6LWluZGV4OiAtMTsgdmlzaWJpbGl0eTogaGlkZGVuOyB3aWR0aDogMTAwJTsgaGVpZ2h0OiAxMDAlO1wiO1xuICAgICAgICAgICAgdmFyIGV4cGFuZENoaWxkU3R5bGUgICAgICAgID0gXCJwb3NpdGlvbjogYWJzb2x1dGU7IGxlZnQ6IDA7IHRvcDogMDtcIjtcbiAgICAgICAgICAgIHZhciBzaHJpbmtDaGlsZFN0eWxlICAgICAgICA9IFwicG9zaXRpb246IGFic29sdXRlOyB3aWR0aDogMjAwJTsgaGVpZ2h0OiAyMDAlO1wiO1xuXG4gICAgICAgICAgICB2YXIgY29udGFpbmVyQ29udGFpbmVyICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciAgICAgICAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBleHBhbmQgICAgICAgICAgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgICAgICB2YXIgZXhwYW5kQ2hpbGQgICAgICAgICAgICAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICAgICAgdmFyIHNocmluayAgICAgICAgICAgICAgICAgID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgICAgIHZhciBzaHJpbmtDaGlsZCAgICAgICAgICAgICA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgICAgICAgIC8vIFNvbWUgYnJvd3NlcnMgY2hva2Ugb24gdGhlIHJlc2l6ZSBzeXN0ZW0gYmVpbmcgcnRsLCBzbyBmb3JjZSBpdCB0byBsdHIuIGh0dHBzOi8vZ2l0aHViLmNvbS93bnIvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3IvaXNzdWVzLzU2XG4gICAgICAgICAgICAvLyBIb3dldmVyLCBkaXIgc2hvdWxkIG5vdCBiZSBzZXQgb24gdGhlIHRvcCBsZXZlbCBjb250YWluZXIgYXMgaXQgYWx0ZXJzIHRoZSBkaW1lbnNpb25zIG9mIHRoZSB0YXJnZXQgZWxlbWVudCBpbiBzb21lIGJyb3dzZXJzLlxuICAgICAgICAgICAgY29udGFpbmVyQ29udGFpbmVyLmRpciAgICAgICAgICAgICAgPSBcImx0clwiO1xuXG4gICAgICAgICAgICBjb250YWluZXJDb250YWluZXIuc3R5bGUuY3NzVGV4dCAgICA9IGNvbnRhaW5lckNvbnRhaW5lclN0eWxlO1xuICAgICAgICAgICAgY29udGFpbmVyQ29udGFpbmVyLmNsYXNzTmFtZSAgICAgICAgPSBkZXRlY3Rpb25Db250YWluZXJDbGFzcztcbiAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgICAgICAgICAgICAgICAgID0gZGV0ZWN0aW9uQ29udGFpbmVyQ2xhc3M7XG4gICAgICAgICAgICBjb250YWluZXIuc3R5bGUuY3NzVGV4dCAgICAgICAgICAgICA9IGNvbnRhaW5lclN0eWxlO1xuICAgICAgICAgICAgZXhwYW5kLnN0eWxlLmNzc1RleHQgICAgICAgICAgICAgICAgPSBleHBhbmRTdHlsZTtcbiAgICAgICAgICAgIGV4cGFuZENoaWxkLnN0eWxlLmNzc1RleHQgICAgICAgICAgID0gZXhwYW5kQ2hpbGRTdHlsZTtcbiAgICAgICAgICAgIHNocmluay5zdHlsZS5jc3NUZXh0ICAgICAgICAgICAgICAgID0gc2hyaW5rU3R5bGU7XG4gICAgICAgICAgICBzaHJpbmtDaGlsZC5zdHlsZS5jc3NUZXh0ICAgICAgICAgICA9IHNocmlua0NoaWxkU3R5bGU7XG5cbiAgICAgICAgICAgIGV4cGFuZC5hcHBlbmRDaGlsZChleHBhbmRDaGlsZCk7XG4gICAgICAgICAgICBzaHJpbmsuYXBwZW5kQ2hpbGQoc2hyaW5rQ2hpbGQpO1xuICAgICAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGV4cGFuZCk7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2hyaW5rKTtcbiAgICAgICAgICAgIGNvbnRhaW5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICAgICAgcm9vdENvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWluZXJDb250YWluZXIpO1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBvbkV4cGFuZFNjcm9sbCgpIHtcbiAgICAgICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vbkV4cGFuZCAmJiBnZXRTdGF0ZShlbGVtZW50KS5vbkV4cGFuZCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBvblNocmlua1Njcm9sbCgpIHtcbiAgICAgICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vblNocmluayAmJiBnZXRTdGF0ZShlbGVtZW50KS5vblNocmluaygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBhZGRFdmVudChleHBhbmQsIFwic2Nyb2xsXCIsIG9uRXhwYW5kU2Nyb2xsKTtcbiAgICAgICAgICAgIGFkZEV2ZW50KHNocmluaywgXCJzY3JvbGxcIiwgb25TaHJpbmtTY3JvbGwpO1xuXG4gICAgICAgICAgICAvLyBTdG9yZSB0aGUgZXZlbnQgaGFuZGxlcnMgaGVyZSBzbyB0aGF0IHRoZXkgbWF5IGJlIHJlbW92ZWQgd2hlbiB1bmluc3RhbGwgaXMgY2FsbGVkLlxuICAgICAgICAgICAgLy8gU2VlIHVuaW5zdGFsbCBmdW5jdGlvbiBmb3IgYW4gZXhwbGFuYXRpb24gd2h5IGl0IGlzIG5lZWRlZC5cbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLm9uRXhwYW5kU2Nyb2xsID0gb25FeHBhbmRTY3JvbGw7XG4gICAgICAgICAgICBnZXRTdGF0ZShlbGVtZW50KS5vblNocmlua1Njcm9sbCA9IG9uU2hyaW5rU2Nyb2xsO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcmVnaXN0ZXJMaXN0ZW5lcnNBbmRQb3NpdGlvbkVsZW1lbnRzKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ2hpbGRTaXplcyhlbGVtZW50LCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgdmFyIGV4cGFuZENoaWxkICAgICAgICAgICAgID0gZ2V0RXhwYW5kQ2hpbGRFbGVtZW50KGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHZhciBleHBhbmRXaWR0aCAgICAgICAgICAgICA9IGdldEV4cGFuZFdpZHRoKHdpZHRoKTtcbiAgICAgICAgICAgICAgICB2YXIgZXhwYW5kSGVpZ2h0ICAgICAgICAgICAgPSBnZXRFeHBhbmRIZWlnaHQoaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICBleHBhbmRDaGlsZC5zdHlsZS53aWR0aCAgICAgPSBleHBhbmRXaWR0aCArIFwicHhcIjtcbiAgICAgICAgICAgICAgICBleHBhbmRDaGlsZC5zdHlsZS5oZWlnaHQgICAgPSBleHBhbmRIZWlnaHQgKyBcInB4XCI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIHVwZGF0ZURldGVjdG9yRWxlbWVudHMoZG9uZSkge1xuICAgICAgICAgICAgICAgIHZhciB3aWR0aCAgICAgICAgICAgPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgIHZhciBoZWlnaHQgICAgICAgICAgPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgICAgIGRlYnVnKFwiU3RvcmluZyBjdXJyZW50IHNpemVcIiwgd2lkdGgsIGhlaWdodCk7XG5cbiAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgc2l6ZSBvZiB0aGUgZWxlbWVudCBzeW5jIGhlcmUsIHNvIHRoYXQgbXVsdGlwbGUgc2Nyb2xsIGV2ZW50cyBtYXkgYmUgaWdub3JlZCBpbiB0aGUgZXZlbnQgbGlzdGVuZXJzLlxuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSB0aGUgaWYtY2hlY2sgaW4gaGFuZGxlU2Nyb2xsIGlzIHVzZWxlc3MuXG4gICAgICAgICAgICAgICAgc3RvcmVDdXJyZW50U2l6ZShlbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcblxuICAgICAgICAgICAgICAgIC8vIFNpbmNlIHdlIGRlbGF5IHRoZSBwcm9jZXNzaW5nIG9mIHRoZSBiYXRjaCwgdGhlcmUgaXMgYSByaXNrIHRoYXQgdW5pbnN0YWxsIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUgdGhlIGJhdGNoIGdldHMgdG8gZXhlY3V0ZS5cbiAgICAgICAgICAgICAgICAvLyBTaW5jZSB0aGVyZSBpcyBubyB3YXkgdG8gY2FuY2VsIHRoZSBmbiBleGVjdXRpb25zLCB3ZSBuZWVkIHRvIGFkZCBhbiB1bmluc3RhbGwgZ3VhcmQgdG8gYWxsIGZucyBvZiB0aGUgYmF0Y2guXG5cbiAgICAgICAgICAgICAgICBiYXRjaFByb2Nlc3Nvci5hZGQoMCwgZnVuY3Rpb24gcGVyZm9ybVVwZGF0ZUNoaWxkU2l6ZXMoKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghZ2V0U3RhdGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGhhcyBiZWVuIHVuaW5zdGFsbGVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhcmVFbGVtZW50c0luamVjdGVkKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGNvbnRhaW5lciBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5kZWJ1Zykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHcgPSBlbGVtZW50Lm9mZnNldFdpZHRoO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGggPSBlbGVtZW50Lm9mZnNldEhlaWdodDtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHcgIT09IHdpZHRoIHx8IGggIT09IGhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcG9ydGVyLndhcm4oaWRIYW5kbGVyLmdldChlbGVtZW50KSwgXCJTY3JvbGw6IFNpemUgY2hhbmdlZCBiZWZvcmUgdXBkYXRpbmcgZGV0ZWN0b3IgZWxlbWVudHMuXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlQ2hpbGRTaXplcyhlbGVtZW50LCB3aWR0aCwgaGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIGJhdGNoUHJvY2Vzc29yLmFkZCgxLCBmdW5jdGlvbiB1cGRhdGVTY3JvbGxiYXJzKCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWdldFN0YXRlKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBoYXMgYmVlbiB1bmluc3RhbGxlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICghYXJlRWxlbWVudHNJbmplY3RlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBjb250YWluZXIgaGFzIG5vdCBiZWVuIGluaXRpYWxpemVkXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25TY3JvbGxiYXJzKGVsZW1lbnQsIHdpZHRoLCBoZWlnaHQpO1xuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRvbmUpIHtcbiAgICAgICAgICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKDIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZ2V0U3RhdGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBoYXMgYmVlbiB1bmluc3RhbGxlZFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYXJlRWxlbWVudHNJbmplY3RlZCgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGNvbnRhaW5lciBoYXMgbm90IGJlZW4gaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgZG9uZSgpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGFyZUVsZW1lbnRzSW5qZWN0ZWQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICEhZ2V0U3RhdGUoZWxlbWVudCkuY29udGFpbmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBub3RpZnlMaXN0ZW5lcnNJZk5lZWRlZCgpIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBpc0ZpcnN0Tm90aWZ5KCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZ2V0U3RhdGUoZWxlbWVudCkubGFzdE5vdGlmaWVkV2lkdGggPT09IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBkZWJ1ZyhcIm5vdGlmeUxpc3RlbmVyc0lmTmVlZGVkIGludm9rZWRcIik7XG5cbiAgICAgICAgICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZShlbGVtZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIERvbid0IG5vdGlmeSB0aGUgaWYgdGhlIGN1cnJlbnQgc2l6ZSBpcyB0aGUgc3RhcnQgc2l6ZSwgYW5kIHRoaXMgaXMgdGhlIGZpcnN0IG5vdGlmaWNhdGlvbi5cbiAgICAgICAgICAgICAgICBpZiAoaXNGaXJzdE5vdGlmeSgpICYmIHN0YXRlLmxhc3RXaWR0aCA9PT0gc3RhdGUuc3RhcnRTaXplLndpZHRoICYmIHN0YXRlLmxhc3RIZWlnaHQgPT09IHN0YXRlLnN0YXJ0U2l6ZS5oZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlYnVnKFwiTm90IG5vdGlmeWluZzogU2l6ZSBpcyB0aGUgc2FtZSBhcyB0aGUgc3RhcnQgc2l6ZSwgYW5kIHRoZXJlIGhhcyBiZWVuIG5vIG5vdGlmaWNhdGlvbiB5ZXQuXCIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIERvbid0IG5vdGlmeSBpZiB0aGUgc2l6ZSBhbHJlYWR5IGhhcyBiZWVuIG5vdGlmaWVkLlxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS5sYXN0V2lkdGggPT09IHN0YXRlLmxhc3ROb3RpZmllZFdpZHRoICYmIHN0YXRlLmxhc3RIZWlnaHQgPT09IHN0YXRlLmxhc3ROb3RpZmllZEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVidWcoXCJOb3Qgbm90aWZ5aW5nOiBTaXplIGFscmVhZHkgbm90aWZpZWRcIik7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICBkZWJ1ZyhcIkN1cnJlbnQgc2l6ZSBub3Qgbm90aWZpZWQsIG5vdGlmeWluZy4uLlwiKTtcbiAgICAgICAgICAgICAgICBzdGF0ZS5sYXN0Tm90aWZpZWRXaWR0aCA9IHN0YXRlLmxhc3RXaWR0aDtcbiAgICAgICAgICAgICAgICBzdGF0ZS5sYXN0Tm90aWZpZWRIZWlnaHQgPSBzdGF0ZS5sYXN0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIGZvckVhY2goZ2V0U3RhdGUoZWxlbWVudCkubGlzdGVuZXJzLCBmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGhhbmRsZVJlbmRlcigpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcInN0YXJ0YW5pbWF0aW9uIHRyaWdnZXJlZC5cIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoaXNVbnJlbmRlcmVkKGVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiSWdub3Jpbmcgc2luY2UgZWxlbWVudCBpcyBzdGlsbCB1bnJlbmRlcmVkLi4uXCIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZGVidWcoXCJFbGVtZW50IHJlbmRlcmVkLlwiKTtcbiAgICAgICAgICAgICAgICB2YXIgZXhwYW5kID0gZ2V0RXhwYW5kRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB2YXIgc2hyaW5rID0gZ2V0U2hyaW5rRWxlbWVudChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICBpZiAoZXhwYW5kLnNjcm9sbExlZnQgPT09IDAgfHwgZXhwYW5kLnNjcm9sbFRvcCA9PT0gMCB8fCBzaHJpbmsuc2Nyb2xsTGVmdCA9PT0gMCB8fCBzaHJpbmsuc2Nyb2xsVG9wID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiU2Nyb2xsYmFycyBvdXQgb2Ygc3luYy4gVXBkYXRpbmcgZGV0ZWN0b3IgZWxlbWVudHMuLi5cIik7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZURldGVjdG9yRWxlbWVudHMobm90aWZ5TGlzdGVuZXJzSWZOZWVkZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZnVuY3Rpb24gaGFuZGxlU2Nyb2xsKCkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiU2Nyb2xsIGRldGVjdGVkLlwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChpc1VucmVuZGVyZWQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gRWxlbWVudCBpcyBzdGlsbCB1bnJlbmRlcmVkLiBTa2lwIHRoaXMgc2Nyb2xsIGV2ZW50LlxuICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIlNjcm9sbCBldmVudCBmaXJlZCB3aGlsZSB1bnJlbmRlcmVkLiBJZ25vcmluZy4uLlwiKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciB3aWR0aCA9IGVsZW1lbnQub2Zmc2V0V2lkdGg7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IGVsZW1lbnQub2Zmc2V0SGVpZ2h0O1xuXG4gICAgICAgICAgICAgICAgaWYgKHdpZHRoICE9PSBnZXRTdGF0ZShlbGVtZW50KS5sYXN0V2lkdGggfHwgaGVpZ2h0ICE9PSBnZXRTdGF0ZShlbGVtZW50KS5sYXN0SGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgIGRlYnVnKFwiRWxlbWVudCBzaXplIGNoYW5nZWQuXCIpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVEZXRlY3RvckVsZW1lbnRzKG5vdGlmeUxpc3RlbmVyc0lmTmVlZGVkKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkZWJ1ZyhcIkVsZW1lbnQgc2l6ZSBoYXMgbm90IGNoYW5nZWQgKFwiICsgd2lkdGggKyBcInhcIiArIGhlaWdodCArIFwiKS5cIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBkZWJ1ZyhcInJlZ2lzdGVyTGlzdGVuZXJzQW5kUG9zaXRpb25FbGVtZW50cyBpbnZva2VkLlwiKTtcblxuICAgICAgICAgICAgaWYgKCFnZXRTdGF0ZShlbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIGRlYnVnKFwiQWJvcnRpbmcgYmVjYXVzZSBlbGVtZW50IGhhcyBiZWVuIHVuaW5zdGFsbGVkXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25SZW5kZXJlZCA9IGhhbmRsZVJlbmRlcjtcbiAgICAgICAgICAgIGdldFN0YXRlKGVsZW1lbnQpLm9uRXhwYW5kID0gaGFuZGxlU2Nyb2xsO1xuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25TaHJpbmsgPSBoYW5kbGVTY3JvbGw7XG5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGdldFN0YXRlKGVsZW1lbnQpLnN0eWxlO1xuICAgICAgICAgICAgdXBkYXRlQ2hpbGRTaXplcyhlbGVtZW50LCBzdHlsZS53aWR0aCwgc3R5bGUuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZpbmFsaXplRG9tTXV0YXRpb24oKSB7XG4gICAgICAgICAgICBkZWJ1ZyhcImZpbmFsaXplRG9tTXV0YXRpb24gaW52b2tlZC5cIik7XG5cbiAgICAgICAgICAgIGlmICghZ2V0U3RhdGUoZWxlbWVudCkpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcIkFib3J0aW5nIGJlY2F1c2UgZWxlbWVudCBoYXMgYmVlbiB1bmluc3RhbGxlZFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBzdHlsZSA9IGdldFN0YXRlKGVsZW1lbnQpLnN0eWxlO1xuICAgICAgICAgICAgc3RvcmVDdXJyZW50U2l6ZShlbGVtZW50LCBzdHlsZS53aWR0aCwgc3R5bGUuaGVpZ2h0KTtcbiAgICAgICAgICAgIHBvc2l0aW9uU2Nyb2xsYmFycyhlbGVtZW50LCBzdHlsZS53aWR0aCwgc3R5bGUuaGVpZ2h0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlYWR5KCkge1xuICAgICAgICAgICAgY2FsbGJhY2soZWxlbWVudCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBpbnN0YWxsKCkge1xuICAgICAgICAgICAgZGVidWcoXCJJbnN0YWxsaW5nLi4uXCIpO1xuICAgICAgICAgICAgaW5pdExpc3RlbmVycygpO1xuICAgICAgICAgICAgc3RvcmVTdGFydFNpemUoKTtcblxuICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKDAsIHN0b3JlU3R5bGUpO1xuICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKDEsIGluamVjdFNjcm9sbEVsZW1lbnRzKTtcbiAgICAgICAgICAgIGJhdGNoUHJvY2Vzc29yLmFkZCgyLCByZWdpc3Rlckxpc3RlbmVyc0FuZFBvc2l0aW9uRWxlbWVudHMpO1xuICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKDMsIGZpbmFsaXplRG9tTXV0YXRpb24pO1xuICAgICAgICAgICAgYmF0Y2hQcm9jZXNzb3IuYWRkKDQsIHJlYWR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlYnVnKFwiTWFraW5nIGRldGVjdGFibGUuLi5cIik7XG5cbiAgICAgICAgaWYgKGlzRGV0YWNoZWQoZWxlbWVudCkpIHtcbiAgICAgICAgICAgIGRlYnVnKFwiRWxlbWVudCBpcyBkZXRhY2hlZFwiKTtcblxuICAgICAgICAgICAgaW5qZWN0Q29udGFpbmVyRWxlbWVudCgpO1xuXG4gICAgICAgICAgICBkZWJ1ZyhcIldhaXRpbmcgdW50aWwgZWxlbWVudCBpcyBhdHRhY2hlZC4uLlwiKTtcblxuICAgICAgICAgICAgZ2V0U3RhdGUoZWxlbWVudCkub25SZW5kZXJlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBkZWJ1ZyhcIkVsZW1lbnQgaXMgbm93IGF0dGFjaGVkXCIpO1xuICAgICAgICAgICAgICAgIGluc3RhbGwoKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpbnN0YWxsKCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1bmluc3RhbGwoZWxlbWVudCkge1xuICAgICAgICB2YXIgc3RhdGUgPSBnZXRTdGF0ZShlbGVtZW50KTtcblxuICAgICAgICBpZiAoIXN0YXRlKSB7XG4gICAgICAgICAgICAvLyBVbmluc3RhbGwgaGFzIGJlZW4gY2FsbGVkIG9uIGEgbm9uLWVyZCBlbGVtZW50LlxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVW5pbnN0YWxsIG1heSBoYXZlIGJlZW4gY2FsbGVkIGluIHRoZSBmb2xsb3dpbmcgc2NlbmFyaW9zOlxuICAgICAgICAvLyAoMSkgUmlnaHQgYmV0d2VlbiB0aGUgc3luYyBjb2RlIGFuZCBhc3luYyBiYXRjaCAoaGVyZSBzdGF0ZS5idXN5ID0gdHJ1ZSwgYnV0IG5vdGhpbmcgaGF2ZSBiZWVuIHJlZ2lzdGVyZWQgb3IgaW5qZWN0ZWQpLlxuICAgICAgICAvLyAoMikgSW4gdGhlIHJlYWR5IGNhbGxiYWNrIG9mIHRoZSBsYXN0IGxldmVsIG9mIHRoZSBiYXRjaCBieSBhbm90aGVyIGVsZW1lbnQgKGhlcmUsIHN0YXRlLmJ1c3kgPSB0cnVlLCBidXQgYWxsIHRoZSBzdHVmZiBoYXMgYmVlbiBpbmplY3RlZCkuXG4gICAgICAgIC8vICgzKSBBZnRlciB0aGUgaW5zdGFsbGF0aW9uIHByb2Nlc3MgKGhlcmUsIHN0YXRlLmJ1c3kgPSBmYWxzZSBhbmQgYWxsIHRoZSBzdHVmZiBoYXMgYmVlbiBpbmplY3RlZCkuXG4gICAgICAgIC8vIFNvIHRvIGJlIG9uIHRoZSBzYWZlIHNpZGUsIGxldCdzIGNoZWNrIGZvciBlYWNoIHRoaW5nIGJlZm9yZSByZW1vdmluZy5cblxuICAgICAgICAvLyBXZSBuZWVkIHRvIHJlbW92ZSB0aGUgZXZlbnQgbGlzdGVuZXJzLCBiZWNhdXNlIG90aGVyd2lzZSB0aGUgZXZlbnQgbWlnaHQgZmlyZSBvbiBhbiB1bmluc3RhbGwgZWxlbWVudCB3aGljaCByZXN1bHRzIGluIGFuIGVycm9yIHdoZW4gdHJ5aW5nIHRvIGdldCB0aGUgc3RhdGUgb2YgdGhlIGVsZW1lbnQuXG4gICAgICAgIHN0YXRlLm9uRXhwYW5kU2Nyb2xsICYmIHJlbW92ZUV2ZW50KGdldEV4cGFuZEVsZW1lbnQoZWxlbWVudCksIFwic2Nyb2xsXCIsIHN0YXRlLm9uRXhwYW5kU2Nyb2xsKTtcbiAgICAgICAgc3RhdGUub25TaHJpbmtTY3JvbGwgJiYgcmVtb3ZlRXZlbnQoZ2V0U2hyaW5rRWxlbWVudChlbGVtZW50KSwgXCJzY3JvbGxcIiwgc3RhdGUub25TaHJpbmtTY3JvbGwpO1xuICAgICAgICBzdGF0ZS5vbkFuaW1hdGlvblN0YXJ0ICYmIHJlbW92ZUV2ZW50KHN0YXRlLmNvbnRhaW5lciwgXCJhbmltYXRpb25zdGFydFwiLCBzdGF0ZS5vbkFuaW1hdGlvblN0YXJ0KTtcblxuICAgICAgICBzdGF0ZS5jb250YWluZXIgJiYgZWxlbWVudC5yZW1vdmVDaGlsZChzdGF0ZS5jb250YWluZXIpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIG1ha2VEZXRlY3RhYmxlOiBtYWtlRGV0ZWN0YWJsZSxcbiAgICAgICAgYWRkTGlzdGVuZXI6IGFkZExpc3RlbmVyLFxuICAgICAgICB1bmluc3RhbGw6IHVuaW5zdGFsbFxuICAgIH07XG59O1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZWxlbWVudC1yZXNpemUtZGV0ZWN0b3Ivc3JjL2RldGVjdGlvbi1zdHJhdGVneS9zY3JvbGwuanNcbi8vIG1vZHVsZSBpZCA9IDEyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCJjbGFzcyBSZXNwb25zaXZlVGFibGUge1xuICAgIGNvbnN0cnVjdG9yKGVsLCBjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuZWwgPSBlbDtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5oaWRpbmcgPSBmYWxzZTtcbiAgICAgICAgdGhpcy53aWR0aCA9IG51bGw7XG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gbnVsbDtcbiAgICB9XG5cbiAgICB1cGRhdGVTaXplKCkge1xuICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5lbC5jbGllbnRXaWR0aDtcbiAgICAgICAgdGhpcy5oZWlnaHQgPSB0aGlzLmVsLmNsaWVudEhlaWdodDtcbiAgICB9XG5cbiAgICBzaG91bGRudFJlc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggPT09IHRoaXMuZWwuY2xpZW50V2lkdGggJiYgdGhpcy5oZWlnaHQgIT09IHRoaXMuZWwuY2xpZW50SGVpZ2h0O1xuICAgIH1cblxuICAgIHNob3VsZEhpZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLmNsaWVudFdpZHRoIDwgdGhpcy5lbC5zY3JvbGxXaWR0aDtcbiAgICB9XG5cbiAgICBzaG91bGRVbmhpZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVsLmNsaWVudFdpZHRoID09PSB0aGlzLmVsLnNjcm9sbFdpZHRoICYmICF0aGlzLmhpZGluZztcbiAgICB9XG5cbiAgICBoaWRlQ29sdW1ucygpIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMuY29udGV4dC50ZW1wbGF0ZS5jb2x1bW5zXG4gICAgICAgICAgICAuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubWV0YS52aXNpYmxlICYmICFjb2x1bW4ubWV0YS5oaWRkZW4pO1xuXG4gICAgICAgIGlmICghY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuaGlkaW5nID0gdHJ1ZTtcbiAgICAgICAgY29sdW1uc1tjb2x1bW5zLmxlbmd0aCAtIDFdLm1ldGEuaGlkZGVuID0gdHJ1ZTtcblxuICAgICAgICB0aGlzLnJldHJ5Rml0KCk7XG4gICAgfVxuXG4gICAgc2hvd0NvbHVtbigpIHtcbiAgICAgICAgY29uc3QgY29sdW1ucyA9IHRoaXMuY29udGV4dC50ZW1wbGF0ZS5jb2x1bW5zXG4gICAgICAgICAgICAuZmlsdGVyKGNvbHVtbiA9PiBjb2x1bW4ubWV0YS5oaWRkZW4pO1xuXG4gICAgICAgIGlmICghY29sdW1ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbHVtbnNbMF0ubWV0YS5oaWRkZW4gPSBmYWxzZTtcblxuICAgICAgICB0aGlzLnJldHJ5Rml0KCk7XG4gICAgfVxuXG4gICAgcmVzaXplKCkge1xuICAgICAgICBpZiAodGhpcy5zaG91bGRudFJlc2l6ZSgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmZpdCgpO1xuICAgIH1cblxuICAgIHJldHJ5Rml0KCkge1xuICAgICAgICB0aGlzLmNvbnRleHQuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZml0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZpdCgpIHtcbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkSGlkZSgpKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGVDb2x1bW5zKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5oaWRpbmcpIHtcbiAgICAgICAgICAgIHRoaXMuaGlkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaG91bGRVbmhpZGUoKSkge1xuICAgICAgICAgICAgdGhpcy5zaG93Q29sdW1uKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNpdmVUYWJsZTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9yZXNwb25zaXZlL1Jlc3BvbnNpdmVUYWJsZS5qcyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX3ZtLmluaXRpYWxpc2VkXG4gICAgPyBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJib3hcIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJ0b3AtY29udHJvbHNcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGFzLXBhZGRpbmctc21hbGwgaGFzLXBhZGRpbmctYm90dG9tLWxhcmdlXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0ZW1wbGF0ZTogX3ZtLnRlbXBsYXRlLFxuICAgICAgICAgICAgICBpMThuOiBfdm0uaTE4bixcbiAgICAgICAgICAgICAgbGVuZ3RoOiBfdm0ubGVuZ3RoXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgXCJ1cGRhdGUtbGVuZ3RoXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5sZW5ndGggPSAkZXZlbnRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJleHBvcnQtZGF0YVwiOiBfdm0uZXhwb3J0RGF0YSxcbiAgICAgICAgICAgICAgcmVsb2FkOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZ2V0RGF0YSgpXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHJlc2V0OiBfdm0ucmVzZXRQcmVmZXJlbmNlc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBfdm0uc2VhcmNoLFxuICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNlYXJjaCA9ICQkdlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInNlYXJjaFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFt7IG5hbWU6IFwicmVzcG9uc2l2ZVwiLCByYXdOYW1lOiBcInYtcmVzcG9uc2l2ZVwiIH1dLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJsZS1yZXNwb25zaXZlXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwidGFibGVcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0YWJsZSBpcy1mdWxsd2lkdGggdnVlLWRhdGEtdGFibGVcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0udGVtcGxhdGUuc3R5bGUsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBpZDogXCJpZFwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwidGFibGUtaGVhZGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdGVtcGxhdGU6IF92bS50ZW1wbGF0ZSwgaTE4bjogX3ZtLmkxOG4gfSxcbiAgICAgICAgICAgICAgICAgICAgb246IHsgXCJzb3J0LXVwZGF0ZVwiOiBfdm0uZ2V0RGF0YSB9XG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaGFzQ29udGVudFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ0YWJsZS1ib2R5XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2coXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGU6IF92bS50ZW1wbGF0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IF92bS5ib2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQ6IF92bS5zdGFydCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGkxOG46IF92bS5pMThuLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJjdXN0b20tcmVuZGVyXCI6IF92bS5jdXN0b21SZW5kZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHBhbmRlZDogX3ZtLmV4cGFuZGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBhamF4OiBfdm0uYWpheCB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kbGlzdGVuZXJzXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS50ZW1wbGF0ZS50b3RhbCAmJiBfdm0uaGFzQ29udGVudFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwidGFibGUtZm9vdGVyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlOiBfdm0udGVtcGxhdGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJvZHk6IF92bS5ib2R5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpMThuOiBfdm0uaTE4blxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmxvYWRpbmcgPyBfYyhcIm92ZXJsYXlcIikgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmhhc0NvbnRlbnRcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIHRhYmxlLWJvdHRvbS1jb250cm9sc1wiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbHVtblwiIH0sXG4gICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicmVjb3Jkcy1pbmZvXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keTogX3ZtLmJvZHksXG4gICAgICAgICAgICAgICAgICAgICAgICBpMThuOiBfdm0uaTE4bixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXJ0OiBfdm0uc3RhcnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsZW5ndGg6IF92bS5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBpcy1uYXJyb3cgaGFzLXRleHQtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBhZ2luYXRpb25cIiwge1xuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGFydDogX3ZtLnN0YXJ0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGVuZ3RoOiBfdm0ubGVuZ3RoLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjb3JkczogX3ZtLmJvZHkuZmlsdGVyZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBpMThuOiBfdm0uaTE4blxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwianVtcC10b1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnN0YXJ0ID0gJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXREYXRhKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uYm9keSAmJiAhX3ZtLmJvZHkuY291bnRcbiAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYXMtdGV4dC1jZW50ZXJlZCBuby1yZWNvcmRzLWZvdW5kXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uaTE4bihcIk5vIHJlY29yZHMgd2VyZSBmb3VuZC5cIikpICtcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgXCJcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTFlNTQxOTM0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xZTU0MTkzNFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWVcbi8vIG1vZHVsZSBpZCA9IDEyMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgNCA1IDYgNyA4IDkgMTAgMTEiLCI8dGVtcGxhdGU+XG5cbiAgICAgICAgPHZ1ZS10YWJsZSA6cGF0aD1cInBhdGhcIlxuICAgICAgICAgICAgOmkxOG49XCJfX1wiXG4gICAgICAgICAgICBpZD1cIm1lbnVzXCI+XG4gICAgICAgIDwvdnVlLXRhYmxlPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgVnVlVGFibGUgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9lbnNvL3Z1ZWRhdGF0YWJsZS9WdWVUYWJsZS52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBWdWVUYWJsZSB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgLi4ubWFwR2V0dGVycygnbG9jYWxlJywgWydfXyddKSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHBhdGg6IHJvdXRlKCdzeXN0ZW0ubWVudXMuaW5pdFRhYmxlJywgW10sIGZhbHNlKSxcbiAgICAgICAgfTtcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vbWVudXMvSW5kZXgudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInZ1ZS10YWJsZVwiLCB7XG4gICAgYXR0cnM6IHsgcGF0aDogX3ZtLnBhdGgsIGkxOG46IF92bS5fXywgaWQ6IFwibWVudXNcIiB9XG4gIH0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ0MjZiYjU0XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NDI2YmI1NFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL21lbnVzL0luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTU0MFxuLy8gbW9kdWxlIGNodW5rcyA9IDgiXSwic291cmNlUm9vdCI6IiJ9