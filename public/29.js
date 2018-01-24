webpackJsonp([29],{

/***/ 1081:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1529)
/* template */
var __vue_template__ = __webpack_require__(1530)
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
Component.options.__file = "resources/assets/js/pages/system/logs/Index.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-21e89ee5", Component.options)
  } else {
    hotAPI.reload("data-v-21e89ee5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1215:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1221)
/* template */
var __vue_template__ = __webpack_require__(1222)
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
Component.options.__file = "resources/assets/js/components/enso/bulma/CardControl.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-70a58350", Component.options)
  } else {
    hotAPI.reload("data-v-70a58350", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1216:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1218)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1220)
/* template */
var __vue_template__ = __webpack_require__(1223)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-f5a0ea16"
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
Component.options.__file = "resources/assets/js/components/enso/bulma/Card.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-f5a0ea16", Component.options)
  } else {
    hotAPI.reload("data-v-f5a0ea16", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1218:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1219);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("c40f12e4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f5a0ea16\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f5a0ea16\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1219:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.icon.angle[aria-hidden=\"true\"][data-v-f5a0ea16] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.icon.angle[data-v-f5a0ea16] {\n    -webkit-transition: -webkit-transform .300s ease;\n    transition: -webkit-transform .300s ease;\n    transition: transform .300s ease;\n    transition: transform .300s ease, -webkit-transform .300s ease;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/bulma/resources/assets/js/components/enso/bulma/Card.vue"],"names":[],"mappings":";AAwLA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,iDAAA;IAAA,yCAAA;IAAA,iCAAA;IAAA,+DAAA;CACA","file":"Card.vue","sourcesContent":["<template>\n\n    <div class=\"card\">\n        <header class=\"card-header\"\n            v-if=\"header\">\n            <p class=\"card-header-title\">\n                <span class=\"icon is-small has-margin-right-small\"\n                    v-if=\"icon\">\n                    <fa :icon=\"icon\"></fa>\n                </span>\n                <span class=\"is-clickable\"\n                    @click=\"toggle()\"\n                    v-if=\"!fixed && title\">\n                    {{ title }}\n                </span>\n                <span v-else-if=\"title\">{{ title }}</span>\n            </p>\n            <div class=\"has-vertically-centered-content\"\n                v-if=\"search\">\n                <p class=\"control has-icons-left\">\n                    <input type=\"search\"\n                        class=\"input is-small\"\n                        v-model=\"query\"\n                        @input=\"$emit('query-update', query)\">\n                    <span class=\"icon is-small is-left\">\n                        <fa icon=\"search\"></fa>\n                    </span>\n                </p>\n            </div>\n            <slot v-for=\"i in controls\"\n                :name=\"'control-' + i\">\n            </slot>\n            <card-control\n                v-if=\"badge !== null\">\n                <span class=\"tag is-link\">\n                    {{ badge }}\n                </span>\n            </card-control>\n            <card-control\n                v-if=\"refresh\"\n                @click=\"$emit('refresh')\">\n                <span class=\"icon is-small\">\n                    <fa icon=\"sync\"></fa>\n                </span>\n            </card-control>\n            <card-control\n                v-if=\"!fixed\"\n                @click=\"toggle()\">\n                <span class=\"icon angle\"\n                    :aria-hidden=\"!expanded\">\n                    <fa icon=\"angle-down\"></fa>\n                </span>\n            </card-control>\n            <card-control\n                v-if=\"removable\"\n                @click=\"destroy()\">\n                <a class=\"delete is-small\"></a>\n            </card-control>\n        </header>\n\n        <div class=\"card-content is-paddingless\" v-show=\"expanded\">\n            <slot></slot>\n        </div>\n\n        <slot name=\"footer\"></slot>\n\n        <overlay size=\"medium\" v-if=\"overlay\"></overlay>\n    </div>\n\n</template>\n\n<script>\n\nimport fontawesome from '@fortawesome/fontawesome';\nimport { faSearch, faSync, faAngleDown } from '@fortawesome/fontawesome-free-solid';\nimport CardControl from './CardControl.vue';\nimport Overlay from './Overlay.vue';\n\nfontawesome.library.add(faSearch, faSync, faAngleDown);\n\nexport default {\n    name: 'Card',\n\n    components: { CardControl, Overlay },\n\n    props: {\n        collapsed: {\n            type: Boolean,\n            default: false,\n        },\n        icon: {\n            type: Object,\n            default() {\n                return null;\n            },\n        },\n        title: {\n            type: String,\n            default: null,\n        },\n        search: {\n            type: Boolean,\n            default: false,\n        },\n        badge: {\n            type: Number,\n            default: null,\n        },\n        refresh: {\n            type: Boolean,\n            default: false,\n        },\n        fixed: {\n            type: Boolean,\n            default: false,\n        },\n        removable: {\n            type: Boolean,\n            default: false,\n        },\n        controls: {\n            type: Number,\n            default: 0,\n        },\n        overlay: {\n            type: Boolean,\n            default: false,\n        },\n    },\n\n    computed: {\n        searchInput() {\n            return this.search\n                ? this.$el.querySelector('input[type=search]')\n                : null;\n        },\n        header() {\n            return this.icon || this.title || this.search\n                || this.badge || this.refresh || !this.fixed\n                || this.removable || this.controls;\n        },\n    },\n\n    data() {\n        return {\n            query: null,\n            expanded: !this.collapsed,\n        };\n    },\n\n    methods: {\n        toggle() {\n            this.$emit('toggle');\n            this.expanded = !this.expanded;\n\n            return this.collapsed\n                ? this.$emit('collapse')\n                : this.$emit('expand');\n        },\n        expand() {\n            this.expanded = true;\n            this.$emit('expand');\n        },\n        collapse() {\n            this.expanded = false;\n            this.$emit('collapse');\n        },\n        focus() {\n            this.searchInput.focus();\n        },\n        clearQuery() {\n            this.query = null;\n        },\n        destroy() {\n            this.$emit('remove');\n            this.$el.parentNode.removeChild(this.$el);\n            this.$destroy();\n        },\n    },\n};\n\n</script>\n\n<style scoped>\n\n    .icon.angle[aria-hidden=\"true\"] {\n        transform: rotate(180deg);\n    }\n\n    .icon.angle {\n        transition: transform .300s ease;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CardControl_vue__ = __webpack_require__(1215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CardControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__CardControl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Overlay_vue__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Overlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__Overlay_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_2" /* faSearch */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["_9" /* faSync */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid__["h" /* faAngleDown */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Card',

    components: { CardControl: __WEBPACK_IMPORTED_MODULE_2__CardControl_vue___default.a, Overlay: __WEBPACK_IMPORTED_MODULE_3__Overlay_vue___default.a },

    props: {
        collapsed: {
            type: Boolean,
            default: false
        },
        icon: {
            type: Object,
            default: function _default() {
                return null;
            }
        },
        title: {
            type: String,
            default: null
        },
        search: {
            type: Boolean,
            default: false
        },
        badge: {
            type: Number,
            default: null
        },
        refresh: {
            type: Boolean,
            default: false
        },
        fixed: {
            type: Boolean,
            default: false
        },
        removable: {
            type: Boolean,
            default: false
        },
        controls: {
            type: Number,
            default: 0
        },
        overlay: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        searchInput: function searchInput() {
            return this.search ? this.$el.querySelector('input[type=search]') : null;
        },
        header: function header() {
            return this.icon || this.title || this.search || this.badge || this.refresh || !this.fixed || this.removable || this.controls;
        }
    },

    data: function data() {
        return {
            query: null,
            expanded: !this.collapsed
        };
    },


    methods: {
        toggle: function toggle() {
            this.$emit('toggle');
            this.expanded = !this.expanded;

            return this.collapsed ? this.$emit('collapse') : this.$emit('expand');
        },
        expand: function expand() {
            this.expanded = true;
            this.$emit('expand');
        },
        collapse: function collapse() {
            this.expanded = false;
            this.$emit('collapse');
        },
        focus: function focus() {
            this.searchInput.focus();
        },
        clearQuery: function clearQuery() {
            this.query = null;
        },
        destroy: function destroy() {
            this.$emit('remove');
            this.$el.parentNode.removeChild(this.$el);
            this.$destroy();
        }
    }
});

/***/ }),

/***/ 1221:
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


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'CardControl'
});

/***/ }),

/***/ 1222:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "a",
    _vm._g({ staticClass: "card-header-icon" }, _vm.$listeners),
    [_vm._t("default")],
    2
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-70a58350", module.exports)
  }
}

/***/ }),

/***/ 1223:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card" },
    [
      _vm.header
        ? _c(
            "header",
            { staticClass: "card-header" },
            [
              _c("p", { staticClass: "card-header-title" }, [
                _vm.icon
                  ? _c(
                      "span",
                      { staticClass: "icon is-small has-margin-right-small" },
                      [_c("fa", { attrs: { icon: _vm.icon } })],
                      1
                    )
                  : _vm._e(),
                _vm._v(" "),
                !_vm.fixed && _vm.title
                  ? _c(
                      "span",
                      {
                        staticClass: "is-clickable",
                        on: {
                          click: function($event) {
                            _vm.toggle()
                          }
                        }
                      },
                      [
                        _vm._v(
                          "\n                " +
                            _vm._s(_vm.title) +
                            "\n            "
                        )
                      ]
                    )
                  : _vm.title
                    ? _c("span", [_vm._v(_vm._s(_vm.title))])
                    : _vm._e()
              ]),
              _vm._v(" "),
              _vm.search
                ? _c(
                    "div",
                    { staticClass: "has-vertically-centered-content" },
                    [
                      _c("p", { staticClass: "control has-icons-left" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.query,
                              expression: "query"
                            }
                          ],
                          staticClass: "input is-small",
                          attrs: { type: "search" },
                          domProps: { value: _vm.query },
                          on: {
                            input: [
                              function($event) {
                                if ($event.target.composing) {
                                  return
                                }
                                _vm.query = $event.target.value
                              },
                              function($event) {
                                _vm.$emit("query-update", _vm.query)
                              }
                            ]
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
                : _vm._e(),
              _vm._v(" "),
              _vm._l(_vm.controls, function(i) {
                return _vm._t("control-" + i)
              }),
              _vm._v(" "),
              _vm.badge !== null
                ? _c("card-control", [
                    _c("span", { staticClass: "tag is-link" }, [
                      _vm._v(
                        "\n                " +
                          _vm._s(_vm.badge) +
                          "\n            "
                      )
                    ])
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.refresh
                ? _c(
                    "card-control",
                    {
                      on: {
                        click: function($event) {
                          _vm.$emit("refresh")
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
                  )
                : _vm._e(),
              _vm._v(" "),
              !_vm.fixed
                ? _c(
                    "card-control",
                    {
                      on: {
                        click: function($event) {
                          _vm.toggle()
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "icon angle",
                          attrs: { "aria-hidden": !_vm.expanded }
                        },
                        [_c("fa", { attrs: { icon: "angle-down" } })],
                        1
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _vm.removable
                ? _c(
                    "card-control",
                    {
                      on: {
                        click: function($event) {
                          _vm.destroy()
                        }
                      }
                    },
                    [_c("a", { staticClass: "delete is-small" })]
                  )
                : _vm._e()
            ],
            2
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.expanded,
              expression: "expanded"
            }
          ],
          staticClass: "card-content is-paddingless"
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _vm._t("footer"),
      _vm._v(" "),
      _vm.overlay ? _c("overlay", { attrs: { size: "medium" } }) : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-f5a0ea16", module.exports)
  }
}

/***/ }),

/***/ 1225:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1236)
/* template */
var __vue_template__ = __webpack_require__(1237)
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
Component.options.__file = "resources/assets/js/components/enso/bulma/Popover.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-16449b60", Component.options)
  } else {
    hotAPI.reload("data-v-16449b60", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_tooltip__ = __webpack_require__(150);
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






__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid__["t" /* faCheck */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid__["_13" /* faTimes */]);

var positions = ['top', 'top-start', 'top-end', 'right', 'right-start', 'right-end', 'bottom', 'bottom-start', 'bottom-end', 'left', 'left-start', 'left-end'];

var triggers = ['hover', 'click', 'focus', 'manual'];

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Popover',

    components: { VPopover: __WEBPACK_IMPORTED_MODULE_0_v_tooltip__["a" /* VPopover */] },

    props: {
        placement: {
            type: String,
            default: 'bottom',
            validator: function validator(value) {
                return positions.includes(value);
            }
        },
        trigger: {
            type: String,
            default: 'click',
            validator: function validator(value) {
                return value.split(' ').filter(function (val) {
                    return !triggers.includes(val);
                }).length === 0;
            }
        },
        open: {
            type: Boolean,
            default: false
        }
    }

});

/***/ }),

/***/ 1237:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "v-popover",
    {
      ref: "dialog",
      attrs: { open: _vm.open, trigger: _vm.trigger, placement: _vm.placement },
      on: {
        show: function($event) {
          _vm.$emit("show")
        },
        hide: function($event) {
          _vm.$emit("hide")
        }
      }
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c("template", { slot: "popover" }, [
        _c(
          "button",
          {
            staticClass: "button is-small is-success has-margin-right-medium",
            on: {
              click: function($event) {
                _vm.$refs.dialog.hide()
                _vm.$emit("confirm")
              }
            }
          },
          [
            _c(
              "span",
              { staticClass: "icon is-small" },
              [_c("fa", { attrs: { icon: "check" } })],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "button is-small is-danger",
            on: {
              click: function($event) {
                _vm.$refs.dialog.hide()
                _vm.$emit("cancel")
              }
            }
          },
          [
            _c(
              "span",
              { staticClass: "icon is-small" },
              [_c("fa", { attrs: { icon: "times" } })],
              1
            )
          ]
        )
      ])
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
    require("vue-hot-reload-api")      .rerender("data-v-16449b60", module.exports)
  }
}

/***/ }),

/***/ 1529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_enso_bulma_Card_vue__ = __webpack_require__(1216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_enso_bulma_Card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_enso_bulma_Card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_enso_bulma_CardControl_vue__ = __webpack_require__(1215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_enso_bulma_CardControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_enso_bulma_CardControl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_enso_bulma_Popover_vue__ = __webpack_require__(1225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_enso_bulma_Popover_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__components_enso_bulma_Popover_vue__);
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









__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid__["_12" /* faTerminal */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid__["I" /* faEye */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid__["x" /* faCloudDownloadAlt */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid__["_14" /* faTrashAlt */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Card: __WEBPACK_IMPORTED_MODULE_3__components_enso_bulma_Card_vue___default.a, CardControl: __WEBPACK_IMPORTED_MODULE_4__components_enso_bulma_CardControl_vue___default.a, Popover: __WEBPACK_IMPORTED_MODULE_5__components_enso_bulma_Popover_vue___default.a },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__']), {
        icon: function icon() {
            return __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid__["_12" /* faTerminal */];
        }
    }),

    data: function data() {
        return {
            logs: []
        };
    },
    created: function created() {
        var _this = this;

        axios.get(route('system.logs.index', [], false)).then(function (_ref) {
            var data = _ref.data;

            _this.logs = data.logs;
        }).catch(function (error) {
            return _this.handleError(error);
        });
    },


    methods: {
        empty: function empty(log) {
            var _this2 = this;

            axios.delete(route('system.logs.destroy', log.name, false).toString()).then(function (_ref2) {
                var data = _ref2.data;

                var index = _this2.logs.findIndex(function (item) {
                    return log.name === item.name;
                });
                _this2.logs.splice(index, 1, data.log);
                toastr.success(data.message);
            }).catch(function (error) {
                return _this2.handleError(error);
            });
        },
        getDownloadLink: function getDownloadLink(log) {
            return route('system.logs.download', log, false).toString();
        }
    }
});

/***/ }),

/***/ 1530:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columns is-multiline" },
    _vm._l(_vm.logs, function(log, index) {
      return _c(
        "div",
        {
          key: index,
          staticClass:
            "column is-one-third-widescreen is-half-desktop is-full-tablet"
        },
        [
          _c(
            "card",
            { attrs: { icon: _vm.icon, title: log.name, controls: 3 } },
            [
              log.canBeSeen
                ? _c(
                    "card-control",
                    { attrs: { slot: "control-1" }, slot: "control-1" },
                    [
                      _c(
                        "span",
                        {
                          staticClass: "icon is-small has-text-success",
                          on: {
                            click: function($event) {
                              _vm.$router.push({
                                name: "system.logs.show",
                                params: { id: log.name }
                              })
                            }
                          }
                        },
                        [_c("fa", { attrs: { icon: "eye" } })],
                        1
                      )
                    ]
                  )
                : _vm._e(),
              _vm._v(" "),
              _c(
                "card-control",
                { attrs: { slot: "control-2" }, slot: "control-2" },
                [
                  _c(
                    "a",
                    {
                      staticClass: "icon is-small has-text-info",
                      attrs: { href: _vm.getDownloadLink(log.name) }
                    },
                    [_c("fa", { attrs: { icon: "cloud-download-alt" } })],
                    1
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "card-control",
                { attrs: { slot: "control-3" }, slot: "control-3" },
                [
                  _c(
                    "popover",
                    {
                      attrs: { placement: "bottom" },
                      on: {
                        confirm: function($event) {
                          _vm.empty(log)
                        }
                      }
                    },
                    [
                      _c(
                        "span",
                        { staticClass: "icon is-small has-text-danger" },
                        [_c("fa", { attrs: { icon: "trash-alt" } })],
                        1
                      )
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "has-padding-large" }, [
                _c("p", [
                  _c("span", [_vm._v(_vm._s(_vm.__("Last updated")))]),
                  _vm._v(" "),
                  _c("span", { staticClass: "is-pulled-right" }, [
                    _vm._v(_vm._s(_vm._f("timeFromNow")(log.modified.date)))
                  ])
                ]),
                _vm._v(" "),
                _c("p", [
                  _c("span", [_vm._v(_vm._s(_vm.__("Size")))]),
                  _vm._v(" "),
                  _c("span", { staticClass: "is-pulled-right" }, [
                    _vm._v(_vm._s(log.size) + " " + _vm._s(_vm.__("MB")))
                  ])
                ])
              ])
            ],
            1
          )
        ],
        1
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-21e89ee5", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9sb2dzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkQ29udHJvbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWU/YTVlOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZT9kY2Y4Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZENvbnRyb2wudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmRDb250cm9sLnZ1ZT9iYmZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlPzRiODIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvUG9wb3Zlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL1BvcG92ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL1BvcG92ZXIudnVlPzhjNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvSW5kZXgudnVlPzQzZmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7QUFDQSwrQ0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7QUFDQSwrQ0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNkNBQWlWO0FBQ2pWO0FBQ0EsK0NBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxzQ0FBOE87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O0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QywrQkFBK0I7QUFDL0I7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixtQ0FBbUMsU0FBUyxjQUFjLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixTQUFTLG9CQUFvQixxQkFBcUI7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QixxQkFBcUI7QUFDckIsK0JBQStCLFNBQVMsNkJBQTZCLEVBQUU7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsU0FBUyxvQkFBb0IscUJBQXFCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLHNCQUFzQjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QiwrQ0FBK0M7QUFDeEUsbUNBQW1DLFNBQVMsb0JBQW9CLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixtQ0FBbUM7QUFDNUQ7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlDQUFpQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixpQ0FBaUM7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiMjkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vSW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0yMWU4OWVlNVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0luZGV4LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9sb2dzL0luZGV4LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0yMWU4OWVlNVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTIxZTg5ZWU1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9sb2dzL0luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDI5IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NhcmRDb250cm9sLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzBhNTgzNTBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DYXJkQ29udHJvbC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZENvbnRyb2wudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTcwYTU4MzUwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzBhNTgzNTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmRDb250cm9sLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDI4IDI5IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNWEwZWExNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NhcmQudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjVhMGVhMTZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NhcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi1mNWEwZWExNlwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1mNWEwZWExNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWY1YTBlYTE2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDI4IDI5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY1YTBlYTE2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2FyZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImM0MGYxMmU0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY1YTBlYTE2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2FyZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjVhMGVhMTZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DYXJkLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1mNWEwZWExNlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDI4IDI5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl1bZGF0YS12LWY1YTBlYTE2XSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4uaWNvbi5hbmdsZVtkYXRhLXYtZjVhMGVhMTZdIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF3TEE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLGlEQUFBO0lBQUEseUNBQUE7SUFBQSxpQ0FBQTtJQUFBLCtEQUFBO0NBQ0FcIixcImZpbGVcIjpcIkNhcmQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCJcXG4gICAgICAgICAgICB2LWlmPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLWhlYWRlci10aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsIGhhcy1tYXJnaW4tcmlnaHQtc21hbGxcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cXFwiaWNvblxcXCI+PC9mYT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXMtY2xpY2thYmxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJ0b2dnbGUoKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcIiFmaXhlZCAmJiB0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7eyB0aXRsZSB9fVxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cXFwidGl0bGVcXFwiPnt7IHRpdGxlIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoYXMtdmVydGljYWxseS1jZW50ZXJlZC1jb250ZW50XFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJzZWFyY2hcXFwiPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dCBpcy1zbWFsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJxdWVyeVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XFxcIiRlbWl0KCdxdWVyeS11cGRhdGUnLCBxdWVyeSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtc21hbGwgaXMtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XFxcInNlYXJjaFxcXCI+PC9mYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxzbG90IHYtZm9yPVxcXCJpIGluIGNvbnRyb2xzXFxcIlxcbiAgICAgICAgICAgICAgICA6bmFtZT1cXFwiJ2NvbnRyb2wtJyArIGlcXFwiPlxcbiAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgICAgICA8Y2FyZC1jb250cm9sXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImJhZGdlICE9PSBudWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhZyBpcy1saW5rXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7IGJhZGdlIH19XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2NhcmQtY29udHJvbD5cXG4gICAgICAgICAgICA8Y2FyZC1jb250cm9sXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcInJlZnJlc2hcXFwiXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ3JlZnJlc2gnKVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVxcXCJzeW5jXFxcIj48L2ZhPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9jYXJkLWNvbnRyb2w+XFxuICAgICAgICAgICAgPGNhcmQtY29udHJvbFxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCIhZml4ZWRcXFwiXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwidG9nZ2xlKClcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBhbmdsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDphcmlhLWhpZGRlbj1cXFwiIWV4cGFuZGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVxcXCJhbmdsZS1kb3duXFxcIj48L2ZhPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9jYXJkLWNvbnRyb2w+XFxuICAgICAgICAgICAgPGNhcmQtY29udHJvbFxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJyZW1vdmFibGVcXFwiXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZGVzdHJveSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRlbGV0ZSBpcy1zbWFsbFxcXCI+PC9hPlxcbiAgICAgICAgICAgIDwvY2FyZC1jb250cm9sPlxcbiAgICAgICAgPC9oZWFkZXI+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnQgaXMtcGFkZGluZ2xlc3NcXFwiIHYtc2hvdz1cXFwiZXhwYW5kZWRcXFwiPlxcbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPHNsb3QgbmFtZT1cXFwiZm9vdGVyXFxcIj48L3Nsb3Q+XFxuXFxuICAgICAgICA8b3ZlcmxheSBzaXplPVxcXCJtZWRpdW1cXFwiIHYtaWY9XFxcIm92ZXJsYXlcXFwiPjwvb3ZlcmxheT5cXG4gICAgPC9kaXY+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xcbmltcG9ydCB7IGZhU2VhcmNoLCBmYVN5bmMsIGZhQW5nbGVEb3duIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQnO1xcbmltcG9ydCBDYXJkQ29udHJvbCBmcm9tICcuL0NhcmRDb250cm9sLnZ1ZSc7XFxuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5LnZ1ZSc7XFxuXFxuZm9udGF3ZXNvbWUubGlicmFyeS5hZGQoZmFTZWFyY2gsIGZhU3luYywgZmFBbmdsZURvd24pO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0NhcmQnLFxcblxcbiAgICBjb21wb25lbnRzOiB7IENhcmRDb250cm9sLCBPdmVybGF5IH0sXFxuXFxuICAgIHByb3BzOiB7XFxuICAgICAgICBjb2xsYXBzZWQ6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGljb246IHtcXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgYmFkZ2U6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICByZWZyZXNoOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmaXhlZDoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgcmVtb3ZhYmxlOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBjb250cm9sczoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG92ZXJsYXk6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIHNlYXJjaElucHV0KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFxcbiAgICAgICAgICAgICAgICA/IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9c2VhcmNoXScpXFxuICAgICAgICAgICAgICAgIDogbnVsbDtcXG4gICAgICAgIH0sXFxuICAgICAgICBoZWFkZXIoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWNvbiB8fCB0aGlzLnRpdGxlIHx8IHRoaXMuc2VhcmNoXFxuICAgICAgICAgICAgICAgIHx8IHRoaXMuYmFkZ2UgfHwgdGhpcy5yZWZyZXNoIHx8ICF0aGlzLmZpeGVkXFxuICAgICAgICAgICAgICAgIHx8IHRoaXMucmVtb3ZhYmxlIHx8IHRoaXMuY29udHJvbHM7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBxdWVyeTogbnVsbCxcXG4gICAgICAgICAgICBleHBhbmRlZDogIXRoaXMuY29sbGFwc2VkLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG5cXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgdG9nZ2xlKCkge1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RvZ2dsZScpO1xcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSAhdGhpcy5leHBhbmRlZDtcXG5cXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWRcXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRlbWl0KCdjb2xsYXBzZScpXFxuICAgICAgICAgICAgICAgIDogdGhpcy4kZW1pdCgnZXhwYW5kJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwYW5kKCkge1xcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2V4cGFuZCcpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbGxhcHNlKCkge1xcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb2xsYXBzZScpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGZvY3VzKCkge1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuZm9jdXMoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBjbGVhclF1ZXJ5KCkge1xcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBudWxsO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGRlc3Ryb3koKSB7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgncmVtb3ZlJyk7XFxuICAgICAgICAgICAgdGhpcy4kZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLiRlbCk7XFxuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuXFxuICAgIC5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgfVxcblxcbiAgICAuaWNvbi5hbmdsZSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWY1YTBlYTE2XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMjggMjkiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwiY2FyZC1oZWFkZXJcIlxuICAgICAgICAgICAgdi1pZj1cImhlYWRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBoYXMtbWFyZ2luLXJpZ2h0LXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhIDppY29uPVwiaWNvblwiPjwvZmE+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlKClcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWZpeGVkICYmIHRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cInRpdGxlXCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFzLXZlcnRpY2FsbHktY2VudGVyZWQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0IGlzLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgncXVlcnktdXBkYXRlJywgcXVlcnkpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInNlYXJjaFwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzbG90IHYtZm9yPVwiaSBpbiBjb250cm9sc1wiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCInY29udHJvbC0nICsgaVwiPlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgPGNhcmQtY29udHJvbFxuICAgICAgICAgICAgICAgIHYtaWY9XCJiYWRnZSAhPT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIGlzLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgYmFkZ2UgfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2NhcmQtY29udHJvbD5cbiAgICAgICAgICAgIDxjYXJkLWNvbnRyb2xcbiAgICAgICAgICAgICAgICB2LWlmPVwicmVmcmVzaFwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ3JlZnJlc2gnKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInN5bmNcIj48L2ZhPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvY2FyZC1jb250cm9sPlxuICAgICAgICAgICAgPGNhcmQtY29udHJvbFxuICAgICAgICAgICAgICAgIHYtaWY9XCIhZml4ZWRcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZSgpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGFuZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgOmFyaWEtaGlkZGVuPVwiIWV4cGFuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVwiYW5nbGUtZG93blwiPjwvZmE+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9jYXJkLWNvbnRyb2w+XG4gICAgICAgICAgICA8Y2FyZC1jb250cm9sXG4gICAgICAgICAgICAgICAgdi1pZj1cInJlbW92YWJsZVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVzdHJveSgpXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkZWxldGUgaXMtc21hbGxcIj48L2E+XG4gICAgICAgICAgICA8L2NhcmQtY29udHJvbD5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudCBpcy1wYWRkaW5nbGVzc1wiIHYtc2hvdz1cImV4cGFuZGVkXCI+XG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIj48L3Nsb3Q+XG5cbiAgICAgICAgPG92ZXJsYXkgc2l6ZT1cIm1lZGl1bVwiIHYtaWY9XCJvdmVybGF5XCI+PC9vdmVybGF5PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhU2VhcmNoLCBmYVN5bmMsIGZhQW5nbGVEb3duIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQnO1xuaW1wb3J0IENhcmRDb250cm9sIGZyb20gJy4vQ2FyZENvbnRyb2wudnVlJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheS52dWUnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYVNlYXJjaCwgZmFTeW5jLCBmYUFuZ2xlRG93bik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ2FyZCcsXG5cbiAgICBjb21wb25lbnRzOiB7IENhcmRDb250cm9sLCBPdmVybGF5IH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICBjb2xsYXBzZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYmFkZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZnJlc2g6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgZml4ZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZhYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICB9LFxuICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNlYXJjaElucHV0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXNlYXJjaF0nKVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWNvbiB8fCB0aGlzLnRpdGxlIHx8IHRoaXMuc2VhcmNoXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5iYWRnZSB8fCB0aGlzLnJlZnJlc2ggfHwgIXRoaXMuZml4ZWRcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnJlbW92YWJsZSB8fCB0aGlzLmNvbnRyb2xzO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVlcnk6IG51bGwsXG4gICAgICAgICAgICBleHBhbmRlZDogIXRoaXMuY29sbGFwc2VkLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RvZ2dsZScpO1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9ICF0aGlzLmV4cGFuZGVkO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWRcbiAgICAgICAgICAgICAgICA/IHRoaXMuJGVtaXQoJ2NvbGxhcHNlJylcbiAgICAgICAgICAgICAgICA6IHRoaXMuJGVtaXQoJ2V4cGFuZCcpO1xuICAgICAgICB9LFxuICAgICAgICBleHBhbmQoKSB7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2V4cGFuZCcpO1xuICAgICAgICB9LFxuICAgICAgICBjb2xsYXBzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbGxhcHNlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzKCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5mb2N1cygpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclF1ZXJ5KCkge1xuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdyZW1vdmUnKTtcbiAgICAgICAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4kZWwpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuICAgIC5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLmljb24uYW5nbGUge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWUiLCI8dGVtcGxhdGU+XG5cbiAgICA8YSBjbGFzcz1cImNhcmQtaGVhZGVyLWljb25cIlxuICAgICAgICB2LW9uPVwiJGxpc3RlbmVyc1wiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgPC9hPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ0NhcmRDb250cm9sJyxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmRDb250cm9sLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJhXCIsXG4gICAgX3ZtLl9nKHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItaWNvblwiIH0sIF92bS4kbGlzdGVuZXJzKSxcbiAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTcwYTU4MzUwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03MGE1ODM1MFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmRDb250cm9sLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDI4IDI5IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZFwiIH0sXG4gICAgW1xuICAgICAgX3ZtLmhlYWRlclxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJoZWFkZXJcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXJcIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlci10aXRsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfdm0uaWNvblxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaGFzLW1hcmdpbi1yaWdodC1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBfdm0uaWNvbiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAhX3ZtLmZpeGVkICYmIF92bS50aXRsZVxuICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpcy1jbGlja2FibGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS50aXRsZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLnRpdGxlXG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnNlYXJjaFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGFzLXZlcnRpY2FsbHktY2VudGVyZWQtY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IGlzLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic2VhcmNoXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5xdWVyeSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnF1ZXJ5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJxdWVyeS11cGRhdGVcIiwgX3ZtLnF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtbGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJzZWFyY2hcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uX2woX3ZtLmNvbnRyb2xzLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF92bS5fdChcImNvbnRyb2wtXCIgKyBpKVxuICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmJhZGdlICE9PSBudWxsXG4gICAgICAgICAgICAgICAgPyBfYyhcImNhcmQtY29udHJvbFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRhZyBpcy1saW5rXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5iYWRnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucmVmcmVzaFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY2FyZC1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJyZWZyZXNoXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwic3luY1wiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0uZml4ZWRcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImNhcmQtY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBhbmdsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6ICFfdm0uZXhwYW5kZWQgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJhbmdsZS1kb3duXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnJlbW92YWJsZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY2FyZC1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZGVzdHJveSgpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiZGVsZXRlIGlzLXNtYWxsXCIgfSldXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmV4cGFuZGVkLFxuICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImV4cGFuZGVkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudCBpcy1wYWRkaW5nbGVzc1wiXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uX3QoXCJmb290ZXJcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLm92ZXJsYXkgPyBfYyhcIm92ZXJsYXlcIiwgeyBhdHRyczogeyBzaXplOiBcIm1lZGl1bVwiIH0gfSkgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWY1YTBlYTE2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mNWEwZWExNlwiLFwiaGFzU2NvcGVkXCI6dHJ1ZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDEyMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyAyOCAyOSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Qb3BvdmVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMTY0NDliNjBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Qb3BvdmVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9Qb3BvdmVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xNjQ0OWI2MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTE2NDQ5YjYwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9Qb3BvdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMjkiLCI8dGVtcGxhdGU+XG5cbiAgICA8di1wb3BvdmVyIDpvcGVuPVwib3BlblwiXG4gICAgICAgIDp0cmlnZ2VyPVwidHJpZ2dlclwiXG4gICAgICAgIDpwbGFjZW1lbnQ9XCJwbGFjZW1lbnRcIlxuICAgICAgICByZWY9XCJkaWFsb2dcIlxuICAgICAgICBAc2hvdz1cIiRlbWl0KCdzaG93JylcIlxuICAgICAgICBAaGlkZT1cIiRlbWl0KCdoaWRlJylcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInBvcG92ZXJcIj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtc21hbGwgaXMtc3VjY2VzcyBoYXMtbWFyZ2luLXJpZ2h0LW1lZGl1bVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHJlZnMuZGlhbG9nLmhpZGUoKTskZW1pdCgnY29uZmlybScpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVwiY2hlY2tcIj48L2ZhPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zbWFsbCBpcy1kYW5nZXJcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyZWZzLmRpYWxvZy5oaWRlKCk7JGVtaXQoJ2NhbmNlbCcpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVwidGltZXNcIj48L2ZhPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdi1wb3BvdmVyPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBWUG9wb3ZlciB9IGZyb20gJ3YtdG9vbHRpcCc7XG5pbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhQ2hlY2ssIGZhVGltZXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1zb2xpZCc7XG5cbmZvbnRhd2Vzb21lLmxpYnJhcnkuYWRkKGZhQ2hlY2ssIGZhVGltZXMpO1xuXG5jb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgJ3RvcCcsICd0b3Atc3RhcnQnLCAndG9wLWVuZCcsICdyaWdodCcsICdyaWdodC1zdGFydCcsICdyaWdodC1lbmQnLCAnYm90dG9tJywgJ2JvdHRvbS1zdGFydCcsXG4gICAgJ2JvdHRvbS1lbmQnLCAnbGVmdCcsICdsZWZ0LXN0YXJ0JywgJ2xlZnQtZW5kJyxcbl07XG5cbmNvbnN0IHRyaWdnZXJzID0gWydob3ZlcicsICdjbGljaycsICdmb2N1cycsICdtYW51YWwnXTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdQb3BvdmVyJyxcblxuICAgIGNvbXBvbmVudHM6IHsgVlBvcG92ZXIgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHBsYWNlbWVudDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2JvdHRvbScsXG4gICAgICAgICAgICB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zaXRpb25zLmluY2x1ZGVzKHZhbHVlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRyaWdnZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdjbGljaycsXG4gICAgICAgICAgICB2YWxpZGF0b3IodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUuc3BsaXQoJyAnKS5maWx0ZXIodmFsID0+ICF0cmlnZ2Vycy5pbmNsdWRlcyh2YWwpKS5sZW5ndGggPT09IDA7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvcGVuOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSxcblxuXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9Qb3BvdmVyLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ2LXBvcG92ZXJcIixcbiAgICB7XG4gICAgICByZWY6IFwiZGlhbG9nXCIsXG4gICAgICBhdHRyczogeyBvcGVuOiBfdm0ub3BlbiwgdHJpZ2dlcjogX3ZtLnRyaWdnZXIsIHBsYWNlbWVudDogX3ZtLnBsYWNlbWVudCB9LFxuICAgICAgb246IHtcbiAgICAgICAgc2hvdzogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLiRlbWl0KFwic2hvd1wiKVxuICAgICAgICB9LFxuICAgICAgICBoaWRlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICBfdm0uJGVtaXQoXCJoaWRlXCIpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5fdChcImRlZmF1bHRcIiksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJ0ZW1wbGF0ZVwiLCB7IHNsb3Q6IFwicG9wb3ZlclwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc21hbGwgaXMtc3VjY2VzcyBoYXMtbWFyZ2luLXJpZ2h0LW1lZGl1bVwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS4kcmVmcy5kaWFsb2cuaGlkZSgpXG4gICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY29uZmlybVwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJjaGVja1wiIH0gfSldLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcbiAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zbWFsbCBpcy1kYW5nZXJcIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHJlZnMuZGlhbG9nLmhpZGUoKVxuICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImNhbmNlbFwiKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sXG4gICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJ0aW1lc1wiIH0gfSldLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICApXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICBdKVxuICAgIF0sXG4gICAgMlxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTE2NDQ5YjYwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xNjQ0OWI2MFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL1BvcG92ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAyOSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW11bHRpbGluZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLW9uZS10aGlyZC13aWRlc2NyZWVuIGlzLWhhbGYtZGVza3RvcCBpcy1mdWxsLXRhYmxldFwiXG4gICAgICAgICAgICB2LWZvcj1cIihsb2csIGluZGV4KSBpbiBsb2dzXCJcbiAgICAgICAgICAgIDprZXk9XCJpbmRleFwiPlxuICAgICAgICAgICAgPGNhcmQgOmljb249XCJpY29uXCJcbiAgICAgICAgICAgICAgICA6dGl0bGU9XCJsb2cubmFtZVwiXG4gICAgICAgICAgICAgICAgOmNvbnRyb2xzPVwiM1wiPlxuICAgICAgICAgICAgICAgIDxjYXJkLWNvbnRyb2wgc2xvdD1cImNvbnRyb2wtMVwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJsb2cuY2FuQmVTZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBoYXMtdGV4dC1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdzeXN0ZW0ubG9ncy5zaG93JywgcGFyYW1zOiB7IGlkOiBsb2cubmFtZSB9IH0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cImV5ZVwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2NhcmQtY29udHJvbD5cbiAgICAgICAgICAgICAgICA8Y2FyZC1jb250cm9sIHNsb3Q9XCJjb250cm9sLTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uIGlzLXNtYWxsIGhhcy10ZXh0LWluZm9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOmhyZWY9XCJnZXREb3dubG9hZExpbmsobG9nLm5hbWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cImNsb3VkLWRvd25sb2FkLWFsdFwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2NhcmQtY29udHJvbD5cbiAgICAgICAgICAgICAgICA8Y2FyZC1jb250cm9sIHNsb3Q9XCJjb250cm9sLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgPHBvcG92ZXIgcGxhY2VtZW50PVwiYm90dG9tXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjb25maXJtPVwiZW1wdHkobG9nKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGhhcy10ZXh0LWRhbmdlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVwidHJhc2gtYWx0XCI+PC9mYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wb3BvdmVyPlxuICAgICAgICAgICAgICAgIDwvY2FyZC1jb250cm9sPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoYXMtcGFkZGluZy1sYXJnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKFwiTGFzdCB1cGRhdGVkXCIpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1wdWxsZWQtcmlnaHRcIj57eyBsb2cubW9kaWZpZWQuZGF0ZSB8IHRpbWVGcm9tTm93IH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oXCJTaXplXCIpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1wdWxsZWQtcmlnaHRcIj57eyBsb2cuc2l6ZSB9fSB7eyBfXyhcIk1CXCIpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2NhcmQ+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lJztcbmltcG9ydCB7IFxuICAgIGZhVGVybWluYWwsIGZhRXllLCBmYUNsb3VkRG93bmxvYWRBbHQsIGZhVHJhc2hBbHQgXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXNvbGlkJztcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZSc7XG5pbXBvcnQgQ2FyZENvbnRyb2wgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmRDb250cm9sLnZ1ZSc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Vuc28vYnVsbWEvUG9wb3Zlci52dWUnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYVRlcm1pbmFsLCBmYUV5ZSwgZmFDbG91ZERvd25sb2FkQWx0LCBmYVRyYXNoQWx0KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHsgQ2FyZCwgQ2FyZENvbnRyb2wsIFBvcG92ZXIgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgICAgIGljb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFUZXJtaW5hbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvZ3M6IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBheGlvcy5nZXQocm91dGUoJ3N5c3RlbS5sb2dzLmluZGV4JywgW10sIGZhbHNlKSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9ncyA9IGRhdGEubG9ncztcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGVtcHR5KGxvZykge1xuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKHJvdXRlKCdzeXN0ZW0ubG9ncy5kZXN0cm95JywgbG9nLm5hbWUsIGZhbHNlKS50b1N0cmluZygpKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sb2dzLmZpbmRJbmRleChpdGVtID0+IGxvZy5uYW1lID09PSBpdGVtLm5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9ncy5zcGxpY2UoaW5kZXgsIDEsIGRhdGEubG9nKTtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgICAgICBnZXREb3dubG9hZExpbmsobG9nKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGUoJ3N5c3RlbS5sb2dzLmRvd25sb2FkJywgbG9nLCBmYWxzZSkudG9TdHJpbmcoKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vbG9ncy9JbmRleC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW11bHRpbGluZVwiIH0sXG4gICAgX3ZtLl9sKF92bS5sb2dzLCBmdW5jdGlvbihsb2csIGluZGV4KSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJjb2x1bW4gaXMtb25lLXRoaXJkLXdpZGVzY3JlZW4gaXMtaGFsZi1kZXNrdG9wIGlzLWZ1bGwtdGFibGV0XCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJjYXJkXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGljb246IF92bS5pY29uLCB0aXRsZTogbG9nLm5hbWUsIGNvbnRyb2xzOiAzIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgbG9nLmNhbkJlU2VlblxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY2FyZC1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJjb250cm9sLTFcIiB9LCBzbG90OiBcImNvbnRyb2wtMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGhhcy10ZXh0LXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzeXN0ZW0ubG9ncy5zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogbG9nLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwiZXllXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJjYXJkLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwiY29udHJvbC0yXCIgfSwgc2xvdDogXCJjb250cm9sLTJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaGFzLXRleHQtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5nZXREb3dubG9hZExpbmsobG9nLm5hbWUpIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcImNsb3VkLWRvd25sb2FkLWFsdFwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImNhcmQtY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJjb250cm9sLTNcIiB9LCBzbG90OiBcImNvbnRyb2wtM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicG9wb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2VtZW50OiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm06IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1wdHkobG9nKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaGFzLXRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJ0cmFzaC1hbHRcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYXMtcGFkZGluZy1sYXJnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5fXyhcIkxhc3QgdXBkYXRlZFwiKSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXMtcHVsbGVkLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRpbWVGcm9tTm93XCIpKGxvZy5tb2RpZmllZC5kYXRlKSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uX18oXCJTaXplXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpcy1wdWxsZWQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MobG9nLnNpemUpICsgXCIgXCIgKyBfdm0uX3MoX3ZtLl9fKFwiTUJcIikpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9KVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTIxZTg5ZWU1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yMWU4OWVlNVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvSW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTMwXG4vLyBtb2R1bGUgY2h1bmtzID0gMjkiXSwic291cmNlUm9vdCI6IiJ9