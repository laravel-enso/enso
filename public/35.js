webpackJsonp([35],{

/***/ 437:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(873)
/* template */
var __vue_template__ = __webpack_require__(874)
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
Component.options.__file = "resources/assets/js/pages/auth/Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-53abf8ff", Component.options)
  } else {
    hotAPI.reload("data-v-53abf8ff", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 873:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(6);
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






__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__["default"].library.add([__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["D" /* faEnvelope */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["q" /* faCheck */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["F" /* faExclamationTriangle */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["N" /* faLock */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_9" /* faUser */]]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Login',

    props: {
        appName: {
            type: String,
            required: true
        }
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('auth', ['lastRoute'])),

    data: function data() {
        return {
            loading: false,
            email: '',
            password: '',
            remember: false,
            hasErrors: false,
            isSuccessful: false
        };
    },


    watch: {
        email: {
            handler: function handler() {
                this.hasErrors = false;
            }
        },
        password: {
            handler: function handler() {
                this.hasErrors = false;
            }
        }
    },

    methods: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["b" /* mapActions */])('auth', ['login']), {
        submit: function submit() {
            var _this = this;

            this.loading = true;
            this.isSuccessful = false;
            this.hasErrors = false;

            axios.post('/api/login', { email: this.email, password: this.password }).then(function () {
                _this.loading = false;
                _this.isSuccessful = true;
                setTimeout(function () {
                    _this.login();
                    _this.$emit('login');

                    if (!_this.lastRoute) {
                        _this.$router.replace('/');
                        return;
                    }

                    _this.$router.replace({ name: _this.lastRoute });
                    _this.$store.commit('auth/setLastRoute', null);
                }, 1000);
            }).catch(function (error) {
                _this.loading = false;
                _this.hasErrors = true;

                var _error$response = error.response,
                    status = _error$response.status,
                    data = _error$response.data;


                if (status === 401) {
                    _this.$toastr.error(data.message);
                    return;
                }

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
                    this.$toastr.error(data.errors.email);
                }

                if (data.errors && data.errors.password) {
                    this.$toastr.error(data.errors.password[0]);
                }

                return;
            }

            this.$toastr.error(data.message);
        }
    })
});

/***/ }),

/***/ 874:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "column box login" },
    [
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
            _c(
              "div",
              { staticClass: "control has-icons-left has-icons-right" },
              [
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
                    keypress: function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "down", 40, $event.key)
                      ) {
                        return null
                      }
                      _vm.hasErrors = false
                    },
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
                      {
                        staticClass: "icon is-small is-right has-text-success"
                      },
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
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "field" }, [
            _c(
              "div",
              { staticClass: "control has-icons-left has-icons-right" },
              [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.password,
                      expression: "password"
                    }
                  ],
                  staticClass: "input",
                  class: {
                    "is-danger": _vm.hasErrors,
                    "is-success": _vm.isSuccessful
                  },
                  attrs: { type: "password", placeholder: "Password" },
                  domProps: { value: _vm.password },
                  on: {
                    keypress: function($event) {
                      if (
                        !("button" in $event) &&
                        _vm._k($event.keyCode, "down", 40, $event.key)
                      ) {
                        return null
                      }
                      _vm.hasErrors = false
                    },
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.password = $event.target.value
                    }
                  }
                }),
                _vm._v(" "),
                _c(
                  "span",
                  { staticClass: "icon is-small is-left" },
                  [_c("fa", { attrs: { icon: "lock" } })],
                  1
                ),
                _vm._v(" "),
                _vm.isSuccessful
                  ? _c(
                      "span",
                      {
                        staticClass: "icon is-small is-right has-text-success"
                      },
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
              ]
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "field" }, [
            _c("div", { staticClass: "control" }, [
              _c("label", { staticClass: "checkbox" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.remember,
                      expression: "remember"
                    }
                  ],
                  attrs: { type: "checkbox" },
                  domProps: {
                    checked: Array.isArray(_vm.remember)
                      ? _vm._i(_vm.remember, null) > -1
                      : _vm.remember
                  },
                  on: {
                    change: function($event) {
                      var $$a = _vm.remember,
                        $$el = $event.target,
                        $$c = $$el.checked ? true : false
                      if (Array.isArray($$a)) {
                        var $$v = null,
                          $$i = _vm._i($$a, $$v)
                        if ($$el.checked) {
                          $$i < 0 && (_vm.remember = $$a.concat([$$v]))
                        } else {
                          $$i > -1 &&
                            (_vm.remember = $$a
                              .slice(0, $$i)
                              .concat($$a.slice($$i + 1)))
                        }
                      } else {
                        _vm.remember = $$c
                      }
                    }
                  }
                }),
                _vm._v("\n                  Remember me\n                ")
              ])
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
                _c("span", [_vm._v("Login")])
              ]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "router-link",
        {
          staticClass: "is-pulled-right",
          attrs: { to: { name: "password.email" } }
        },
        [_vm._v("\n        Forgot password\n    ")]
      )
    ],
    1
  )
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
    require("vue-hot-reload-api")      .rerender("data-v-53abf8ff", module.exports)
  }
}

/***/ })

});