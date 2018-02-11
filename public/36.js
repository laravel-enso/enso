webpackJsonp([36],{

/***/ 1497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(8);
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






__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__["default"].library.add([__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["J" /* faEnvelope */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["t" /* faCheck */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["L" /* faExclamationTriangle */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["X" /* faLock */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_24" /* faUser */]]);

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
                    this.$toastr.error(data.errors.email[0]);
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

/***/ 1498:
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

/***/ }),

/***/ 599:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1497)
/* template */
var __vue_template__ = __webpack_require__(1498)
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


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL0xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvTG9naW4udnVlPzc5OWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL0xvZ2luLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFtRkE7QUFDQTtBQUdBOztBQUVBLDhFQUNBLHlaQUNBOztBQUVBO1VBR0E7Ozs7a0JBR0E7c0JBSUE7QUFMQTtBQURBOztBQU9BLHFHQUdBOzswQkFDQTs7cUJBRUE7bUJBQ0E7c0JBQ0E7c0JBQ0E7dUJBQ0E7MEJBRUE7QUFQQTtBQVNBOzs7Ozt3Q0FHQTtpQ0FDQTtBQUVBO0FBSkE7O3dDQU1BO2lDQUNBO0FBSUE7QUFOQTtBQU5BOztBQWFBLG9HQUNBOztBQUNBOzsyQkFDQTtnQ0FDQTs2QkFFQTs7c0dBQ0E7Z0NBQ0E7cUNBQ0E7dUNBQ0E7MEJBQ0E7Z0NBRUE7OzBDQUNBOzhDQUNBO0FBQ0E7QUFFQTs7d0RBQ0E7NkRBQ0E7bUJBQ0E7O2dDQUVBO2tDQUVBOztBQUhBLDRDQUtBOzs7OztvQ0FDQTs2Q0FDQTtBQUNBO0FBRUE7O29DQUNBOzJDQUNBO0FBQ0E7QUFFQTs7c0JBQ0E7QUFDQTtBQUNBOzBEQUNBOzZCQUNBO3VDQUNBO3lEQUNBO0FBRUE7O3lEQUNBOzREQUNBO0FBRUE7O0FBQ0E7QUFFQTs7b0NBQ0E7QUFFQTs7QUE5RkEsRzs7Ozs7OztBQzlGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLLGtDQUFrQztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNB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QUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixxQ0FBcUM7QUFDOUQsaUJBQWlCLFNBQVMsMEJBQTBCLEVBQUU7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7QUNoUkE7QUFDQTtBQUNBO0FBQ0EsNkNBQWlWO0FBQ2pWO0FBQ0EsK0NBQW1MO0FBQ25MO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRCIsImZpbGUiOiIzNi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gYm94IGxvZ2luXCI+XG4gICAgICAgIDxoMyBjbGFzcz1cInRpdGxlIGlzLTMgaGFzLXRleHQtYmxhY2sgaGFzLXRleHQtY2VudGVyZWQgaGFzLW1hcmdpbi1ib3R0b20tbWVkaXVtXCI+XG4gICAgICAgICAgICA8ZmlndXJlIGNsYXNzPVwiaW1hZ2UgaXMtMjR4MjQgbG9nb1wiPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiL2ltYWdlcy9sb2dvLnN2Z1wiLz5cbiAgICAgICAgICAgIDwvZmlndXJlPlxuICAgICAgICAgICAge3sgYXBwTmFtZSB9fVxuICAgICAgICA8L2gzPlxuICAgICAgICA8Zm9ybSBjbGFzcz1cImhhcy1tYXJnaW4tYm90dG9tLW1lZGl1bVwiXG4gICAgICAgICAgICBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXQoKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaGFzLWljb25zLWxlZnQgaGFzLWljb25zLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWRhbmdlcic6IGhhc0Vycm9ycywgJ2lzLXN1Y2Nlc3MnOiBpc1N1Y2Nlc3NmdWwgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGtleXByZXNzLmRvd249XCJoYXNFcnJvcnM9ZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVwiZW52ZWxvcGVcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpc1N1Y2Nlc3NmdWxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVwiY2hlY2tcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImhhc0Vycm9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaGFzLWljb25zLWxlZnQgaGFzLWljb25zLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWRhbmdlcic6IGhhc0Vycm9ycywgJ2lzLXN1Y2Nlc3MnOiBpc1N1Y2Nlc3NmdWwgfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGtleXByZXNzLmRvd249XCJoYXNFcnJvcnM9ZmFsc2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVwibG9ja1wiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImlzU3VjY2Vzc2Z1bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJjaGVja1wiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaGFzRXJyb3JzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cImV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9mYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjaGVja2JveFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInJlbWVtYmVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgUmVtZW1iZXIgbWVcbiAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1wcmltYXJ5IGlzLWZ1bGx3aWR0aFwiXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWxvYWRpbmcnOiBsb2FkaW5nIH1cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XCJzdWJtaXQoKVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVwidXNlclwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TG9naW48L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8cm91dGVyLWxpbmsgOnRvPVwieyBuYW1lOiAncGFzc3dvcmQuZW1haWwnIH1cIlxuICAgICAgICAgICAgY2xhc3M9XCJpcy1wdWxsZWQtcmlnaHRcIj5cbiAgICAgICAgICAgIEZvcmdvdCBwYXNzd29yZFxuICAgICAgICA8L3JvdXRlci1saW5rPlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBBY3Rpb25zIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lJztcbmltcG9ydCB7XG4gICAgZmFFbnZlbG9wZSwgZmFDaGVjaywgZmFFeGNsYW1hdGlvblRyaWFuZ2xlLCBmYUxvY2ssIGZhVXNlcixcbn0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChbXG4gICAgZmFFbnZlbG9wZSwgZmFDaGVjaywgZmFFeGNsYW1hdGlvblRyaWFuZ2xlLCBmYUxvY2ssIGZhVXNlcixcbl0pO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0xvZ2luJyxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGFwcE5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdhdXRoJywgWydsYXN0Um91dGUnXSksXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIGVtYWlsOiAnJyxcbiAgICAgICAgICAgIHBhc3N3b3JkOiAnJyxcbiAgICAgICAgICAgIHJlbWVtYmVyOiBmYWxzZSxcbiAgICAgICAgICAgIGhhc0Vycm9yczogZmFsc2UsXG4gICAgICAgICAgICBpc1N1Y2Nlc3NmdWw6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICBlbWFpbDoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0Vycm9ycyA9IGZhbHNlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFzc3dvcmQ6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYXNFcnJvcnMgPSBmYWxzZTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgLi4ubWFwQWN0aW9ucygnYXV0aCcsIFsnbG9naW4nXSksXG4gICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmlzU3VjY2Vzc2Z1bCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5oYXNFcnJvcnMgPSBmYWxzZTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdCgnL2FwaS9sb2dpbicsIHsgZW1haWw6IHRoaXMuZW1haWwsIHBhc3N3b3JkOiB0aGlzLnBhc3N3b3JkIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuaXNTdWNjZXNzZnVsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2dpbigpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdsb2dpbicpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5sYXN0Um91dGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5yZXBsYWNlKCcvJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucmVwbGFjZSh7IG5hbWU6IHRoaXMubGFzdFJvdXRlIH0pO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ2F1dGgvc2V0TGFzdFJvdXRlJywgbnVsbCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhc0Vycm9ycyA9IHRydWU7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB7IHN0YXR1cywgZGF0YSB9ID0gZXJyb3IucmVzcG9uc2U7XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA0MDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdG9hc3RyLmVycm9yKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzID09PSA0MjIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBvcnRMb2dpbkVycm9yKGRhdGEpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgcmVwb3J0TG9naW5FcnJvcihkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5lcnJvcnMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcnMuZW1haWwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdG9hc3RyLmVycm9yKGRhdGEuZXJyb3JzLmVtYWlsWzBdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5lcnJvcnMgJiYgZGF0YS5lcnJvcnMucGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kdG9hc3RyLmVycm9yKGRhdGEuZXJyb3JzLnBhc3N3b3JkWzBdKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJHRvYXN0ci5lcnJvcihkYXRhLm1lc3NhZ2UpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvTG9naW4udnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGJveCBsb2dpblwiIH0sXG4gICAgW1xuICAgICAgX2MoXG4gICAgICAgIFwiaDNcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJ0aXRsZSBpcy0zIGhhcy10ZXh0LWJsYWNrIGhhcy10ZXh0LWNlbnRlcmVkIGhhcy1tYXJnaW4tYm90dG9tLW1lZGl1bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX20oMCksIF92bS5fdihcIlxcbiAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmFwcE5hbWUpICsgXCJcXG4gICAgXCIpXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJoYXMtbWFyZ2luLWJvdHRvbS1tZWRpdW1cIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgc3VibWl0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLWxlZnQgaGFzLWljb25zLXJpZ2h0XCIgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJpcy1kYW5nZXJcIjogX3ZtLmhhc0Vycm9ycyxcbiAgICAgICAgICAgICAgICAgICAgXCJpcy1zdWNjZXNzXCI6IF92bS5pc1N1Y2Nlc3NmdWxcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImVtYWlsXCIsIHBsYWNlaG9sZGVyOiBcIkVtYWlsXCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZW1haWwgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGtleXByZXNzOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAhKFwiYnV0dG9uXCIgaW4gJGV2ZW50KSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9rKCRldmVudC5rZXlDb2RlLCBcImRvd25cIiwgNDAsICRldmVudC5rZXkpXG4gICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaGFzRXJyb3JzID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJlbnZlbG9wZVwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uaXNTdWNjZXNzZnVsXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwiY2hlY2tcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uaGFzRXJyb3JzXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJleGNsYW1hdGlvbi10cmlhbmdsZVwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBoYXMtaWNvbnMtbGVmdCBoYXMtaWNvbnMtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5wYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInBhc3N3b3JkXCJcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICBcImlzLWRhbmdlclwiOiBfdm0uaGFzRXJyb3JzLFxuICAgICAgICAgICAgICAgICAgICBcImlzLXN1Y2Nlc3NcIjogX3ZtLmlzU3VjY2Vzc2Z1bFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwicGFzc3dvcmRcIiwgcGxhY2Vob2xkZXI6IFwiUGFzc3dvcmRcIiB9LFxuICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5wYXNzd29yZCB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAga2V5cHJlc3M6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAgICAgICAgICEoXCJidXR0b25cIiBpbiAkZXZlbnQpICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2soJGV2ZW50LmtleUNvZGUsIFwiZG93blwiLCA0MCwgJGV2ZW50LmtleSlcbiAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5oYXNFcnJvcnMgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnBhc3N3b3JkID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcImxvY2tcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmlzU3VjY2Vzc2Z1bFxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcImNoZWNrXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmhhc0Vycm9yc1xuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwiZXhjbGFtYXRpb24tdHJpYW5nbGVcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImNoZWNrYm94XCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucmVtZW1iZXIsXG4gICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJyZW1lbWJlclwiXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcImNoZWNrYm94XCIgfSxcbiAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLnJlbWVtYmVyKVxuICAgICAgICAgICAgICAgICAgICAgID8gX3ZtLl9pKF92bS5yZW1lbWJlciwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLnJlbWVtYmVyXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLnJlbWVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gbnVsbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0ucmVtZW1iZXIgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5yZW1lbWJlciA9ICQkYVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNsaWNlKDAsICQkaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoJCRhLnNsaWNlKCQkaSArIDEpKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnJlbWVtYmVyID0gJCRjXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiXFxuICAgICAgICAgICAgICAgICAgUmVtZW1iZXIgbWVcXG4gICAgICAgICAgICAgICAgXCIpXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXByaW1hcnkgaXMtZnVsbHdpZHRoXCIsXG4gICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1sb2FkaW5nXCI6IF92bS5sb2FkaW5nIH0sXG4gICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzdWJtaXRcIiB9LFxuICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgIF92bS5zdWJtaXQoKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcInVzZXJcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoXCJMb2dpblwiKV0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcInJvdXRlci1saW5rXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJpcy1wdWxsZWQtcmlnaHRcIixcbiAgICAgICAgICBhdHRyczogeyB0bzogeyBuYW1lOiBcInBhc3N3b3JkLmVtYWlsXCIgfSB9XG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3YoXCJcXG4gICAgICAgIEZvcmdvdCBwYXNzd29yZFxcbiAgICBcIildXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZmlndXJlXCIsIHsgc3RhdGljQ2xhc3M6IFwiaW1hZ2UgaXMtMjR4MjQgbG9nb1wiIH0sIFtcbiAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBcIi9pbWFnZXMvbG9nby5zdmdcIiB9IH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNTNhYmY4ZmZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTUzYWJmOGZmXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL0xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQ5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDM2IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0xvZ2luLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNTNhYmY4ZmZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Mb2dpbi52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hdXRoL0xvZ2luLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi01M2FiZjhmZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTUzYWJmOGZmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2F1dGgvTG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSA1OTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzNiJdLCJzb3VyY2VSb290IjoiIn0=