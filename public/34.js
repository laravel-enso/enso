webpackJsonp([34],{

/***/ 438:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(875)
/* template */
var __vue_template__ = __webpack_require__(876)
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
Component.options.__file = "resources/assets/js/pages/auth/password/Email.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-547547c2", Component.options)
  } else {
    hotAPI.reload("data-v-547547c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(6);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["D" /* faEnvelope */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["q" /* faCheck */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["F" /* faExclamationTriangle */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_9" /* faUser */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Email',

    props: {
        appName: {
            type: String,
            required: true
        }
    },

    data: function data() {
        return {
            loading: false,
            email: null,
            hasErrors: false,
            isSuccessful: false
        };
    },


    watch: {
        email: {
            handler: function handler() {
                this.hasErrors = false;
            }
        }
    },

    methods: {
        submit: function submit() {
            var _this = this;

            this.loading = true;
            this.isSuccessful = false;
            this.hasErrors = false;

            axios.post('/api/password/email', { email: this.email }).then(function (_ref) {
                var data = _ref.data;

                _this.loading = false;
                _this.isSuccessful = true;
                _this.$toastr.success(data.status);
            }).catch(function (error) {
                _this.loading = false;
                _this.hasErrors = true;

                var _error$response = error.response,
                    status = _error$response.status,
                    data = _error$response.data;


                if (status === 422) {
                    _this.reportLoginError(data);
                    return;
                }

                throw error;
            });
        },
        reportLoginError: function reportLoginError(data) {
            if (data.errors) {
                if (data.errors.email) {
                    this.$toastr.error(data.errors.email[0]);
                }

                return;
            }

            this.$toastr.error(data.message);
        }
    }
});

/***/ }),

/***/ 876:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "column box login" }, [
    _c(
      "h3",
      {
        staticClass:
          "title is-3 has-text-black has-text-centered has-margin-bottom-medium"
      },
      [_vm._m(0), _vm._v("\n        " + _vm._s(_vm.appName) + "\n    ")]
    ),
    _vm._v(" "),
    _c(
      "form",
      {
        staticClass: "has-margin-bottom-medium",
        on: {
          submit: function($event) {
            $event.preventDefault()
            _vm.submit()
          }
        }
      },
      [
        _c("div", { staticClass: "field" }, [
          _c("div", { staticClass: "control has-icons-left has-icons-right" }, [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.email,
                  expression: "email"
                }
              ],
              staticClass: "input",
              class: {
                "is-danger": _vm.hasErrors,
                "is-success": _vm.isSuccessful
              },
              attrs: { type: "email", placeholder: "Email" },
              domProps: { value: _vm.email },
              on: {
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.email = $event.target.value
                }
              }
            }),
            _vm._v(" "),
            _c(
              "span",
              { staticClass: "icon is-small is-left" },
              [_c("fa", { attrs: { icon: "envelope" } })],
              1
            ),
            _vm._v(" "),
            _vm.isSuccessful
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-success" },
                  [_c("fa", { attrs: { icon: "check" } })],
                  1
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.hasErrors
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("fa", { attrs: { icon: "exclamation-triangle" } })],
                  1
                )
              : _vm._e()
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "field" }, [
          _c(
            "button",
            {
              staticClass: "button is-primary is-fullwidth",
              class: { "is-loading": _vm.loading },
              attrs: { type: "submit" },
              on: {
                click: function($event) {
                  $event.preventDefault()
                  _vm.submit()
                }
              }
            },
            [
              _c(
                "span",
                { staticClass: "icon is-small" },
                [_c("fa", { attrs: { icon: "user" } })],
                1
              ),
              _vm._v(" "),
              _c("span", [_vm._v("Send a reset passworkd link")])
            ]
          )
        ])
      ]
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("figure", { staticClass: "image is-24x24 logo" }, [
      _c("img", { attrs: { src: "/images/logo.svg" } })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-547547c2", module.exports)
  }
}

/***/ })

});