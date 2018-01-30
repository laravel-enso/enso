webpackJsonp([26],{

/***/ 445:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(978)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(980)
/* template */
var __vue_template__ = __webpack_require__(981)
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
Component.options.__file = "resources/assets/js/pages/system/localisation/EditTexts.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03916c60", Component.options)
  } else {
    hotAPI.reload("data-v-03916c60", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 978:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(979);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("78ad438c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03916c60\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EditTexts.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-03916c60\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./EditTexts.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 979:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "\n.has-shadow-bottom {\n    -webkit-box-shadow: 0px 3px 5px -4px lightgray;\n    box-shadow: 0px 3px 5px -4px lightgray;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 980:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_enso_vueforms_VueSelect_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_enso_vueforms_VueSelect_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_enso_vueforms_VueSelect_vue__);
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







__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["V" /* faSearch */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_6" /* faTrashAlt */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    components: { VueSelect: __WEBPACK_IMPORTED_MODULE_3__components_enso_vueforms_VueSelect_vue___default.a },

    data: function data() {
        return {
            langFile: {},
            locales: {},
            selectedLocale: null,
            query: null,
            boxHeight: 0,
            loading: false
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["d" /* mapState */])('layout', ['isMobile']), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__']), {
        styleObject: function styleObject() {
            return {
                'max-height': this.boxHeight,
                'overflow-y': 'auto',
                'overflow-x': 'hidden'
            };
        },
        langKeys: function langKeys() {
            return Object.keys(this.langFile);
        },
        sortedKeys: function sortedKeys() {
            return this.langKeys.sort(function (a, b) {
                if (a.toLowerCase() < b.toLowerCase()) return -1;
                if (a.toLowerCase() > b.toLowerCase()) return 1;
                return 0;
            });
        },
        filteredKeys: function filteredKeys() {
            if (!this.query) {
                return this.sortedKeys;
            }

            var self = this;

            return this.langKeys.filter(function (key) {
                return key.toLowerCase().indexOf(self.query.toLowerCase()) > -1;
            });
        },
        isNewKey: function isNewKey() {
            return this.selectedLocale && this.query && this.filteredKeys.indexOf(this.query) === -1;
        },
        keysCount: function keysCount() {
            return this.langKeys.length;
        }
    }),

    watch: {
        isMobile: {
            handler: 'setBoxHeight'
        }
    },

    created: function created() {
        this.init();
        this.setBoxHeight();
    },


    methods: {
        init: function init() {
            var _this = this;

            this.loading = true;

            axios.get(route('system.localisation.editTexts', [], false)).then(function (_ref) {
                var data = _ref.data;

                _this.loading = false;
                _this.locales = data.locales;
            }).catch(function (error) {
                _this.loading = false;
                _this.handleError(error);
            });
        },
        getLangFile: function getLangFile() {
            var _this2 = this;

            if (!this.selectedLocale) {
                this.langFile = {};
                return;
            }

            this.loading = true;

            axios.get(route('system.localisation.getLangFile', this.selectedLocale, false)).then(function (_ref2) {
                var data = _ref2.data;

                _this2.loading = false;
                _this2.langFile = data;
            }).catch(function (error) {
                _this2.loading = false;
                _this2.handleError(error);
            });
        },
        saveLangFile: function saveLangFile() {
            var _this3 = this;

            this.loading = true;

            axios.patch(route('system.localisation.saveLangFile', this.selectedLocale, false).toString(), {
                langFile: this.langFile
            }).then(function (_ref3) {
                var data = _ref3.data;

                _this3.loading = false;
                _this3.$toastr.success(data.message);
            }).catch(function (error) {
                _this3.loading = false;
                _this3.handleError(error);
            });
        },
        addKey: function addKey() {
            this.$set(this.langFile, this.query, null);
            this.focusIt();
        },
        removeKey: function removeKey(key) {
            this.$delete(this.langFile, key);
        },
        focusIt: function focusIt() {
            var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

            id = id || this.query;

            this.$nextTick(function () {
                document.getElementById(id).focus();
            });
        },
        setBoxHeight: function setBoxHeight() {
            this.boxHeight = document.body.clientHeight - (this.isMobile ? 420 : 388);
        }
    }
});

/***/ }),

/***/ 981:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "container" }, [
    _c("div", { staticClass: "box" }, [
      _c("div", { staticClass: "columns is-multiline" }, [
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "columns is-multiline" }, [
            _c(
              "div",
              { staticClass: "column is-half" },
              [
                _c("vue-select", {
                  attrs: {
                    options: _vm.locales,
                    placeholder: _vm.__("Choose language")
                  },
                  on: {
                    input: function($event) {
                      _vm.getLangFile()
                    }
                  },
                  model: {
                    value: _vm.selectedLocale,
                    callback: function($$v) {
                      _vm.selectedLocale = $$v
                    },
                    expression: "selectedLocale"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _vm.selectedLocale
              ? _c(
                  "div",
                  {
                    staticClass:
                      "column is-half has-text-right animated fadeIn is-hidden-mobile"
                  },
                  [
                    _c("p", { staticClass: "has-padding-top-small" }, [
                      _c("b", [_vm._v(_vm._s(_vm.keysCount))]),
                      _vm._v(
                        " " +
                          _vm._s(_vm.__("keys found")) +
                          "\n                        "
                      )
                    ])
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.selectedLocale
              ? _c("div", { staticClass: "column animated fadeIn" }, [
                  _c("div", { staticClass: "field" }, [
                    _c("p", { staticClass: "control has-icons-right" }, [
                      _c("input", {
                        directives: [
                          { name: "focus", rawName: "v-focus" },
                          {
                            name: "select-on-focus",
                            rawName: "v-select-on-focus"
                          },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.query,
                            expression: "query"
                          }
                        ],
                        staticClass: "input",
                        attrs: {
                          type: "search",
                          placeholder: _vm.__("Search")
                        },
                        domProps: { value: _vm.query },
                        on: {
                          keyup: function($event) {
                            if (
                              !("button" in $event) &&
                              _vm._k($event.keyCode, "enter", 13, $event.key)
                            ) {
                              return null
                            }
                            _vm.isNewKey ? _vm.addKey() : _vm.focusIt(null)
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.query = $event.target.value
                          }
                        }
                      }),
                      _vm._v(" "),
                      _c(
                        "span",
                        { staticClass: "icon is-small is-right" },
                        [_c("fa", { attrs: { icon: "search" } })],
                        1
                      )
                    ])
                  ])
                ])
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "column" }, [
          _c("div", { staticClass: "columns is-mobile has-text-centered" }, [
            _c("div", { staticClass: "column" }, [
              _vm.isNewKey
                ? _c(
                    "button",
                    {
                      staticClass: "button is-success is-fullwidth",
                      on: {
                        click: function($event) {
                          _vm.addKey()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.__("Add Key")) +
                          "\n                        "
                      )
                    ]
                  )
                : _vm._e()
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column" }, [
              _vm.selectedLocale
                ? _c(
                    "button",
                    {
                      staticClass: "button is-success is-fullwidth",
                      class: { "is-loading": _vm.loading },
                      on: {
                        click: function($event) {
                          _vm.saveLangFile()
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                            " +
                          _vm._s(_vm.__("Update")) +
                          "\n                        "
                      )
                    ]
                  )
                : _vm._e()
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _vm.selectedLocale
      ? _c("div", { staticClass: "box" }, [
          _c(
            "div",
            { staticClass: "columns is-hidden-mobile has-shadow-bottom" },
            [
              _c("div", { staticClass: "column is-half has-text-centered" }, [
                _c("h6", { staticClass: "title is-6" }, [
                  _vm._v(_vm._s(_vm.__("Key")))
                ])
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "column is-half has-text-centered" }, [
                _c("h6", { staticClass: "title is-6" }, [
                  _vm._v(_vm._s(_vm.__("Value")))
                ])
              ])
            ]
          ),
          _vm._v(" "),
          _c(
            "div",
            { style: _vm.styleObject },
            _vm._l(_vm.filteredKeys, function(key, index) {
              return _c("div", { key: index, staticClass: "columns" }, [
                _c("div", { staticClass: "column is-half" }, [
                  _c("input", {
                    staticClass: "input",
                    attrs: { type: "text", readonly: "" },
                    domProps: { value: key }
                  })
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "column is-half" }, [
                  _c("div", { staticClass: "field has-addons" }, [
                    _c("p", { staticClass: "control is-expanded" }, [
                      _c("input", {
                        directives: [
                          {
                            name: "select-on-focus",
                            rawName: "v-select-on-focus"
                          },
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.langFile[key],
                            expression: "langFile[key]"
                          }
                        ],
                        staticClass: "input",
                        attrs: { type: "text", id: key },
                        domProps: { value: _vm.langFile[key] },
                        on: {
                          keyup: function($event) {
                            if (
                              !("button" in $event) &&
                              _vm._k($event.keyCode, "enter", 13, $event.key)
                            ) {
                              return null
                            }
                            _vm.focusIt("search-input")
                          },
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.$set(_vm.langFile, key, $event.target.value)
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "control" }, [
                      _c(
                        "a",
                        {
                          staticClass: "button is-outlined is-danger",
                          on: {
                            click: function($event) {
                              _vm.removeKey(key)
                            }
                          }
                        },
                        [
                          _c(
                            "span",
                            { staticClass: "icon is-small" },
                            [_c("fa", { attrs: { icon: "trash-alt" } })],
                            1
                          )
                        ]
                      )
                    ])
                  ])
                ])
              ])
            })
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
    require("vue-hot-reload-api")      .rerender("data-v-03916c60", module.exports)
  }
}

/***/ })

});