webpackJsonp([30],{

/***/ 1065:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1502)
/* template */
var __vue_template__ = __webpack_require__(1503)
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

/***/ 1198:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1201)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1203)
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

/***/ 1200:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1206)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1208)
/* template */
var __vue_template__ = __webpack_require__(1209)
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
Component.options.__file = "resources/assets/js/components/enso/bulma/Modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-995c59d0", Component.options)
  } else {
    hotAPI.reload("data-v-995c59d0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1201:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1202);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("3da87753", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f5a0ea16\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-f5a0ea16\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Card.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1202:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.icon.angle[aria-hidden=\"true\"] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.icon.angle {\n    -webkit-transition: -webkit-transform .300s ease;\n    transition: -webkit-transform .300s ease;\n    transition: transform .300s ease;\n    transition: transform .300s ease, -webkit-transform .300s ease;\n}\n.card-content {\n    padding: 0;\n}\n\n", "", {"version":3,"sources":["/home/mihai/work/_proj/spa2/resources/assets/js/components/enso/bulma/resources/assets/js/components/enso/bulma/Card.vue"],"names":[],"mappings":";AAmMA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,iDAAA;IAAA,yCAAA;IAAA,iCAAA;IAAA,+DAAA;CACA;AAEA;IACA,WAAA;CACA","file":"Card.vue","sourcesContent":["<template>\n\n    <div class=\"card\">\n        <header class=\"card-header\"\n            v-if=\"header\">\n            <p class=\"card-header-title\">\n                <span class=\"icon is-small has-margin-right-small\"\n                    v-if=\"icon\">\n                    <i :class=\"icon\"></i>\n                </span>\n                <span class=\"is-clickable\"\n                    @click=\"toggle()\"\n                    v-if=\"collapsible\">\n                    {{ title }}\n                </span>\n                <span v-else>{{ title }}</span>\n            </p>\n            <div class=\"has-vertically-centered-content\"\n                v-if=\"search\">\n                <p class=\"control has-icons-left\">\n                <input type=\"search\"\n                    class=\"input is-small\"\n                    v-model=\"query\"\n                    @input=\"$emit('query-update', query)\">\n                <span class=\"icon is-small is-left\">\n                    <i class=\"fa fa-search\"></i>\n                </span>\n                </p>\n            </div>\n            <slot v-for=\"i in controls\"\n                :name=\"'control-' + i\">\n            </slot>\n            <a class=\"card-header-icon\"\n                v-if=\"badge !== null\">\n                <span class=\"tag is-primary\">\n                    {{ badge }}\n                </span>\n            </a>\n            <a class=\"card-header-icon\"\n                v-if=\"refresh\">\n                <span class=\"icon is-small\"\n                    @click=\"$emit('refresh')\">\n                    <i class=\"fa fa-refresh\"></i>\n                </span>\n            </a>\n            <a class=\"card-header-icon\"\n                v-if=\"collapsible\">\n                <span class=\"icon angle\"\n                    :aria-hidden=\"collapsed\"\n                    @click=\"toggle()\">\n                    <i class=\"fa fa-angle-down\"></i>\n                </span>\n            </a>\n            <span class=\"card-header-icon\"\n                v-if=\"removable\"\n                @click=\"destroy()\">\n                <a class=\"delete is-small\"></a>\n            </span>\n        </header>\n\n        <div class=\"card-content\" v-show=\"!collapsed\">\n            <slot></slot>\n        </div>\n\n        <footer class=\"card-footer\" v-if=\"footer && !collapsed\">\n            <p v-for=\"i in footerItems\"\n                class=\"card-footer-item\"\n                :key=\"i\">\n                <slot :name=\"'footer-item-' + i\"></slot>\n            </p>\n        </footer>\n        <overlay size=\"medium\" v-if=\"overlay\"></overlay>\n    </div>\n\n</template>\n\n<script>\n\nimport Overlay from './Overlay.vue';\n\nexport default {\n    name: 'Card',\n\n    components: { Overlay },\n\n    props: {\n        open: {\n            type: Boolean,\n            default: true,\n        },\n        header: {\n            type: Boolean,\n            default: true,\n        },\n        footer: {\n            type: Boolean,\n            default: false,\n        },\n        footerItems: {\n            type: Number,\n            default: 0,\n        },\n        icon: {\n            type: String,\n            default: null,\n        },\n        title: {\n            type: String,\n            default: null,\n        },\n        search: {\n            type: Boolean,\n            default: false,\n        },\n        badge: {\n            type: Number,\n            default: null,\n        },\n        refresh: {\n            type: Boolean,\n            default: false,\n        },\n        collapsible: {\n            type: Boolean,\n            default: true,\n        },\n        removable: {\n            type: Boolean,\n            default: false,\n        },\n        overlay: {\n            type: Boolean,\n            default: false,\n        },\n        controls: {\n            type: Number,\n            default: 0,\n        },\n        bodyStyle: {\n            type: Object,\n            default() {\n                return {};\n            },\n        },\n    },\n\n    computed: {\n        searchInput() {\n            return this.search\n                ? this.$el.querySelector('input[type=search]')\n                : null;\n        },\n    },\n\n    data() {\n        return {\n            query: null,\n            collapsed: !this.open,\n        };\n    },\n\n    methods: {\n        toggle() {\n            this.$emit('toggle');\n            this.collapsed = !this.collapsed;\n\n            return this.collapsed\n                ? this.$emit('collapse')\n                : this.$emit('expand');\n        },\n        expand() {\n            this.collapsed = false;\n            this.$emit('expand');\n        },\n        collapse() {\n            this.collapsed = true;\n            this.$emit('collapse');\n        },\n        focus() {\n            this.searchInput.focus();\n        },\n        clearQuery() {\n            this.query = null;\n        },\n        destroy() {\n            this.$emit('remove');\n            this.$el.parentNode.removeChild(this.$el);\n            this.$destroy();\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .icon.angle[aria-hidden=\"true\"] {\n        transform: rotate(180deg);\n    }\n\n    .icon.angle {\n        transition: transform .300s ease;\n    }\n\n    .card-content {\n        padding: 0;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Overlay_vue__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Overlay_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Overlay_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'Card',

    components: { Overlay: __WEBPACK_IMPORTED_MODULE_0__Overlay_vue___default.a },

    props: {
        open: {
            type: Boolean,
            default: true
        },
        header: {
            type: Boolean,
            default: true
        },
        footer: {
            type: Boolean,
            default: false
        },
        footerItems: {
            type: Number,
            default: 0
        },
        icon: {
            type: String,
            default: null
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
        collapsible: {
            type: Boolean,
            default: true
        },
        removable: {
            type: Boolean,
            default: false
        },
        overlay: {
            type: Boolean,
            default: false
        },
        controls: {
            type: Number,
            default: 0
        },
        bodyStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },

    computed: {
        searchInput: function searchInput() {
            return this.search ? this.$el.querySelector('input[type=search]') : null;
        }
    },

    data: function data() {
        return {
            query: null,
            collapsed: !this.open
        };
    },


    methods: {
        toggle: function toggle() {
            this.$emit('toggle');
            this.collapsed = !this.collapsed;

            return this.collapsed ? this.$emit('collapse') : this.$emit('expand');
        },
        expand: function expand() {
            this.collapsed = false;
            this.$emit('expand');
        },
        collapse: function collapse() {
            this.collapsed = true;
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

/***/ 1204:
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
                      [_c("i", { class: _vm.icon })]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _vm.collapsible
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
                  : _c("span", [_vm._v(_vm._s(_vm.title))])
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
                        _vm._m(0)
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
                ? _c("a", { staticClass: "card-header-icon" }, [
                    _c("span", { staticClass: "tag is-primary" }, [
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
                ? _c("a", { staticClass: "card-header-icon" }, [
                    _c(
                      "span",
                      {
                        staticClass: "icon is-small",
                        on: {
                          click: function($event) {
                            _vm.$emit("refresh")
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-refresh" })]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.collapsible
                ? _c("a", { staticClass: "card-header-icon" }, [
                    _c(
                      "span",
                      {
                        staticClass: "icon angle",
                        attrs: { "aria-hidden": _vm.collapsed },
                        on: {
                          click: function($event) {
                            _vm.toggle()
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-angle-down" })]
                    )
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm.removable
                ? _c(
                    "span",
                    {
                      staticClass: "card-header-icon",
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
              value: !_vm.collapsed,
              expression: "!collapsed"
            }
          ],
          staticClass: "card-content"
        },
        [_vm._t("default")],
        2
      ),
      _vm._v(" "),
      _vm.footer && !_vm.collapsed
        ? _c(
            "footer",
            { staticClass: "card-footer" },
            _vm._l(_vm.footerItems, function(i) {
              return _c(
                "p",
                { key: i, staticClass: "card-footer-item" },
                [_vm._t("footer-item-" + i)],
                2
              )
            })
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.overlay ? _c("overlay", { attrs: { size: "medium" } }) : _vm._e()
    ],
    1
  )
}
var staticRenderFns = [
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
    require("vue-hot-reload-api")      .rerender("data-v-f5a0ea16", module.exports)
  }
}

/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1207);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("48b2b9a3", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-995c59d0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-995c59d0\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1207:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nfooter.modal-card-foot {\n    -webkit-box-pack: end;\n        -ms-flex-pack: end;\n            justify-content: flex-end;\n}\n.modal.is-active {\n    z-index: 1100;\n}\n\n", "", {"version":3,"sources":["/home/mihai/work/_proj/spa2/resources/assets/js/components/enso/bulma/resources/assets/js/components/enso/bulma/Modal.vue"],"names":[],"mappings":";AAoGA;IACA,sBAAA;QAAA,mBAAA;YAAA,0BAAA;CACA;AAEA;IACA,cAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n\n    <transition enter-active-class=\"animated fadeIn\"\n        leave-active-class=\"animated fadeOut\">\n        <div class=\"modal\"\n            :class=\"{ 'is-active': show }\"\n            v-if=\"show\"\n            :style=\"containerStyle\">\n            <div class=\"modal-background\"></div>\n            <div class=\"modal-card\"\n                v-if=\"card\">\n                <header class=\"modal-card-head\">\n                    <slot name=\"header\">\n                    </slot>\n                </header>\n                <section class=\"modal-card-body\">\n                    <slot name=\"body\">\n                        {{ __(\"The selected item is about to be deleted! Are you sure?\") }}\n                    </slot>\n                </section>\n                <footer class=\"modal-card-foot\">\n                    <slot name=\"footer\">\n                        <button class=\"button\"\n                              @click=\"$emit('cancel-action')\">\n                              {{ __(\"Cancel\") }}\n                          </button>\n                          <button class=\"button is-success\"\n                            @click=\"$emit('commit-action')\">\n                            {{ __(\"Yes\") }}\n                        </button>\n                    </slot>\n                </footer>\n            </div>\n            <div v-else class=\"modal-content\">\n                <div class=\"box\">\n                    <slot name=\"content\">\n                        <h5 class=\"subtitle is-5\">\n                            {{ __(\"The selected item is about to be deleted! Are you sure?\") }}\n                        </h5>\n                    </slot>\n                    <hr>\n                    <div class=\"level\">\n                        <div class=\"level-left\"></div>\n                        <div class=\"level-right\">\n                            <div class=\"level-item\">\n                                <slot name=\"controls\">\n                                    <button class=\"button is-success\"\n                                          @click=\"$emit('cancel-action')\">\n                                          {{ __(\"Cancel\") }}\n                                      </button>\n                                      <button class=\"button is-danger has-margin-left-small\"\n                                        @click=\"$emit('commit-action')\">\n                                        {{ __(\"Yes\") }}\n                                    </button>\n                                </slot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <button class=\"modal-close is-large\"\n                aria-label=\"close\"\n                @click=\"$emit('cancel-action')\"\n                v-if=\"!card\">\n            </button>\n        </div>\n    </transition>\n\n</template>\n\n<script>\n\nimport { mapGetters } from 'vuex';\n\nexport default {\n    props: {\n        show: {\n            type: Boolean,\n            required: true,\n        },\n        containerStyle: {\n            type: Object,\n            default() {\n                return {};\n            },\n        },\n        card: {\n            type: Boolean,\n            default: false,\n        },\n    },\n\n    computed: {\n        ...mapGetters('locale', ['__']),\n    },\n};\n\n</script>\n\n<style>\n\n    footer.modal-card-foot {\n        justify-content: flex-end;\n    }\n\n    .modal.is-active {\n        z-index: 1100;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
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




/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        show: {
            type: Boolean,
            required: true
        },
        containerStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        card: {
            type: Boolean,
            default: false
        }
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__']))
});

/***/ }),

/***/ 1209:
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
            {
              staticClass: "modal",
              class: { "is-active": _vm.show },
              style: _vm.containerStyle
            },
            [
              _c("div", { staticClass: "modal-background" }),
              _vm._v(" "),
              _vm.card
                ? _c("div", { staticClass: "modal-card" }, [
                    _c(
                      "header",
                      { staticClass: "modal-card-head" },
                      [_vm._t("header")],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "section",
                      { staticClass: "modal-card-body" },
                      [
                        _vm._t("body", [
                          _vm._v(
                            "\n                    " +
                              _vm._s(
                                _vm.__(
                                  "The selected item is about to be deleted! Are you sure?"
                                )
                              ) +
                              "\n                "
                          )
                        ])
                      ],
                      2
                    ),
                    _vm._v(" "),
                    _c(
                      "footer",
                      { staticClass: "modal-card-foot" },
                      [
                        _vm._t("footer", [
                          _c(
                            "button",
                            {
                              staticClass: "button",
                              on: {
                                click: function($event) {
                                  _vm.$emit("cancel-action")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                          " +
                                  _vm._s(_vm.__("Cancel")) +
                                  "\n                      "
                              )
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "button is-success",
                              on: {
                                click: function($event) {
                                  _vm.$emit("commit-action")
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                        " +
                                  _vm._s(_vm.__("Yes")) +
                                  "\n                    "
                              )
                            ]
                          )
                        ])
                      ],
                      2
                    )
                  ])
                : _c("div", { staticClass: "modal-content" }, [
                    _c(
                      "div",
                      { staticClass: "box" },
                      [
                        _vm._t("content", [
                          _c("h5", { staticClass: "subtitle is-5" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(
                                  _vm.__(
                                    "The selected item is about to be deleted! Are you sure?"
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
                                          _vm._s(_vm.__("Cancel")) +
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
                                          _vm._s(_vm.__("Yes")) +
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
                  ]),
              _vm._v(" "),
              !_vm.card
                ? _c("button", {
                    staticClass: "modal-close is-large",
                    attrs: { "aria-label": "close" },
                    on: {
                      click: function($event) {
                        _vm.$emit("cancel-action")
                      }
                    }
                  })
                : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-995c59d0", module.exports)
  }
}

/***/ }),

/***/ 1502:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_bulma_Card_vue__ = __webpack_require__(1198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_bulma_Card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_enso_bulma_Card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_enso_bulma_Modal_vue__ = __webpack_require__(1200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_enso_bulma_Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_enso_bulma_Modal_vue__);
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






/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Card: __WEBPACK_IMPORTED_MODULE_1__components_enso_bulma_Card_vue___default.a, Modal: __WEBPACK_IMPORTED_MODULE_2__components_enso_bulma_Modal_vue___default.a },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__'])),

    data: function data() {
        return {
            showModal: false,
            itemToBeDeleted: null,
            logs: []
        };
    },
    created: function created() {
        var _this = this;

        axios.get(route('system.logs.index', [], false)).then(function (response) {
            _this.logs = response.data.logs;
        }).catch(function (error) {
            return _this.handleError(error);
        });
    },


    methods: {
        empty: function empty() {
            var _this2 = this;

            axios.delete(route('system.logs.destroy', this.itemToBeDeleted, false).toString()).then(function (response) {
                _this2.showModal = false;
                var index = _this2.logs.findIndex(function (log) {
                    return _this2.itemToBeDeleted === log.name;
                });
                _this2.logs.splice(index, 1, response.data.log);
                _this2.itemToBeDeleted = null;
                toastr.success(response.data.message);
            }).catch(function (error) {
                _this2.showModal = false;
                _this2.handleError(error);
            });
        },
        getDownloadLink: function getDownloadLink(log) {
            return route('system.logs.download', log, false).toString();
        }
    }
});

/***/ }),

/***/ 1503:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columns is-multiline" },
    [
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
              {
                attrs: {
                  icon: "fa fa-terminal",
                  removable: false,
                  collapsible: false,
                  title: log.name,
                  controls: 3
                }
              },
              [
                log.canBeSeen
                  ? _c(
                      "a",
                      {
                        staticClass: "card-header-icon",
                        attrs: { slot: "control-1" },
                        slot: "control-1"
                      },
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
                          [_c("i", { staticClass: "fa fa-eye" })]
                        )
                      ]
                    )
                  : _vm._e(),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "card-header-icon",
                    attrs: { slot: "control-1" },
                    slot: "control-1"
                  },
                  [
                    _c(
                      "a",
                      {
                        staticClass: "icon is-small has-text-info",
                        attrs: { href: _vm.getDownloadLink(log.name) }
                      },
                      [_c("i", { staticClass: "fa fa-cloud-download" })]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "card-header-icon",
                    attrs: { slot: "control-1" },
                    slot: "control-1"
                  },
                  [
                    _c(
                      "span",
                      {
                        staticClass: "icon is-small has-text-danger",
                        on: {
                          click: function($event) {
                            _vm.showModal = true
                            _vm.itemToBeDeleted = log.name
                          }
                        }
                      },
                      [_c("i", { staticClass: "fa fa-trash-o" })]
                    )
                  ]
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
              ]
            )
          ],
          1
        )
      }),
      _vm._v(" "),
      _c("modal", {
        attrs: { show: _vm.showModal },
        on: {
          "cancel-action": function($event) {
            _vm.showModal = false
            _vm.itemToBeDeleted = null
          },
          "commit-action": function($event) {
            _vm.empty()
          }
        }
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
    require("vue-hot-reload-api")      .rerender("data-v-21e89ee5", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9sb2dzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9Nb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWU/MjdiMiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZT82NzMyIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZT8xZmIyIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL01vZGFsLnZ1ZT8wMmIxIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL01vZGFsLnZ1ZT9iYjA1Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9Nb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvTW9kYWwudnVlP2QwNjAiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvSW5kZXgudnVl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InNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbmRleC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTg5ZWU1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvSW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIxZTg5ZWU1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjFlODllZTVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvSW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMzAiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY1YTBlYTE2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NhcmQudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjVhMGVhMTZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZjVhMGVhMTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1mNWEwZWExNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDExOThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDEgMiAyOCAzMCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOTk1YzU5ZDBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTk5NWM1OWQwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTW9kYWwudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9Nb2RhbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtOTk1YzU5ZDBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi05OTVjNTlkMFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgMzAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjVhMGVhMTZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2FyZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjNkYTg3NzUzXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY1YTBlYTE2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NhcmQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY1YTBlYTE2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NhcmQudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWY1YTBlYTE2XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIwMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMSAyIDI4IDMwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLmljb24uYW5nbGUge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG59XFxuLmNhcmQtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWhhaS93b3JrL19wcm9qL3NwYTIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW1NQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsaURBQUE7SUFBQSx5Q0FBQTtJQUFBLGlDQUFBO0lBQUEsK0RBQUE7Q0FDQTtBQUVBO0lBQ0EsV0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJDYXJkLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiXFxuICAgICAgICAgICAgdi1pZj1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC1oZWFkZXItdGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbCBoYXMtbWFyZ2luLXJpZ2h0LXNtYWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XFxcImljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXMtY2xpY2thYmxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJ0b2dnbGUoKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImNvbGxhcHNpYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7IHRpdGxlIH19XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPnt7IHRpdGxlIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoYXMtdmVydGljYWxseS1jZW50ZXJlZC1jb250ZW50XFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJzZWFyY2hcXFwiPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQgaXMtc21hbGxcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJxdWVyeVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cXFwiJGVtaXQoJ3F1ZXJ5LXVwZGF0ZScsIHF1ZXJ5KVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXNlYXJjaFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8c2xvdCB2LWZvcj1cXFwiaSBpbiBjb250cm9sc1xcXCJcXG4gICAgICAgICAgICAgICAgOm5hbWU9XFxcIidjb250cm9sLScgKyBpXFxcIj5cXG4gICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImNhcmQtaGVhZGVyLWljb25cXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImJhZGdlICE9PSBudWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhZyBpcy1wcmltYXJ5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7IGJhZGdlIH19XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImNhcmQtaGVhZGVyLWljb25cXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcInJlZnJlc2hcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ3JlZnJlc2gnKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcmVmcmVzaFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJjYXJkLWhlYWRlci1pY29uXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJjb2xsYXBzaWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGFuZ2xlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmFyaWEtaGlkZGVuPVxcXCJjb2xsYXBzZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInRvZ2dsZSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1kb3duXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcmQtaGVhZGVyLWljb25cXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcInJlbW92YWJsZVxcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJkZXN0cm95KClcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZGVsZXRlIGlzLXNtYWxsXFxcIj48L2E+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9oZWFkZXI+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiIHYtc2hvdz1cXFwiIWNvbGxhcHNlZFxcXCI+XFxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVxcXCJjYXJkLWZvb3RlclxcXCIgdi1pZj1cXFwiZm9vdGVyICYmICFjb2xsYXBzZWRcXFwiPlxcbiAgICAgICAgICAgIDxwIHYtZm9yPVxcXCJpIGluIGZvb3Rlckl0ZW1zXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2FyZC1mb290ZXItaXRlbVxcXCJcXG4gICAgICAgICAgICAgICAgOmtleT1cXFwiaVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVxcXCInZm9vdGVyLWl0ZW0tJyArIGlcXFwiPjwvc2xvdD5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2Zvb3Rlcj5cXG4gICAgICAgIDxvdmVybGF5IHNpemU9XFxcIm1lZGl1bVxcXCIgdi1pZj1cXFwib3ZlcmxheVxcXCI+PC9vdmVybGF5PlxcbiAgICA8L2Rpdj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5LnZ1ZSc7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnQ2FyZCcsXFxuXFxuICAgIGNvbXBvbmVudHM6IHsgT3ZlcmxheSB9LFxcblxcbiAgICBwcm9wczoge1xcbiAgICAgICAgb3Blbjoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBoZWFkZXI6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgZm9vdGVyOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmb290ZXJJdGVtczoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGljb246IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgYmFkZ2U6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICByZWZyZXNoOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBjb2xsYXBzaWJsZToge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICByZW1vdmFibGU6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG92ZXJsYXk6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbnRyb2xzOiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXFxuICAgICAgICB9LFxcbiAgICAgICAgYm9keVN0eWxlOiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIHNlYXJjaElucHV0KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFxcbiAgICAgICAgICAgICAgICA/IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9c2VhcmNoXScpXFxuICAgICAgICAgICAgICAgIDogbnVsbDtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIHF1ZXJ5OiBudWxsLFxcbiAgICAgICAgICAgIGNvbGxhcHNlZDogIXRoaXMub3BlbixcXG4gICAgICAgIH07XFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIHRvZ2dsZSgpIHtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd0b2dnbGUnKTtcXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcXG5cXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWRcXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRlbWl0KCdjb2xsYXBzZScpXFxuICAgICAgICAgICAgICAgIDogdGhpcy4kZW1pdCgnZXhwYW5kJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwYW5kKCkge1xcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZXhwYW5kJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgY29sbGFwc2UoKSB7XFxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSB0cnVlO1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbGxhcHNlJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZm9jdXMoKSB7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5mb2N1cygpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNsZWFyUXVlcnkoKSB7XFxuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IG51bGw7XFxuICAgICAgICB9LFxcbiAgICAgICAgZGVzdHJveSgpIHtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdyZW1vdmUnKTtcXG4gICAgICAgICAgICB0aGlzLiRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuJGVsKTtcXG4gICAgICAgICAgICB0aGlzLiRkZXN0cm95KCk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAuaWNvbi5hbmdsZVthcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIH1cXG5cXG4gICAgLmljb24uYW5nbGUge1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgLmNhcmQtY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZjVhMGVhMTZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMjggMzAiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwiY2FyZC1oZWFkZXJcIlxuICAgICAgICAgICAgdi1pZj1cImhlYWRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBoYXMtbWFyZ2luLXJpZ2h0LXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1jbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGUoKVwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJjb2xsYXBzaWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFzLXZlcnRpY2FsbHktY2VudGVyZWQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dCBpcy1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdxdWVyeS11cGRhdGUnLCBxdWVyeSlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c2xvdCB2LWZvcj1cImkgaW4gY29udHJvbHNcIlxuICAgICAgICAgICAgICAgIDpuYW1lPVwiJ2NvbnRyb2wtJyArIGlcIj5cbiAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiY2FyZC1oZWFkZXItaWNvblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImJhZGdlICE9PSBudWxsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgaXMtcHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBiYWRnZSB9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiY2FyZC1oZWFkZXItaWNvblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInJlZnJlc2hcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgncmVmcmVzaCcpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImNhcmQtaGVhZGVyLWljb25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJjb2xsYXBzaWJsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgIDphcmlhLWhpZGRlbj1cImNvbGxhcHNlZFwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtaGVhZGVyLWljb25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJyZW1vdmFibGVcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cImRlc3Ryb3koKVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZGVsZXRlIGlzLXNtYWxsXCI+PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCIgdi1zaG93PVwiIWNvbGxhcHNlZFwiPlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiY2FyZC1mb290ZXJcIiB2LWlmPVwiZm9vdGVyICYmICFjb2xsYXBzZWRcIj5cbiAgICAgICAgICAgIDxwIHYtZm9yPVwiaSBpbiBmb290ZXJJdGVtc1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWZvb3Rlci1pdGVtXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiaVwiPlxuICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVwiJ2Zvb3Rlci1pdGVtLScgKyBpXCI+PC9zbG90PlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPG92ZXJsYXkgc2l6ZT1cIm1lZGl1bVwiIHYtaWY9XCJvdmVybGF5XCI+PC9vdmVybGF5PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL092ZXJsYXkudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdDYXJkJyxcblxuICAgIGNvbXBvbmVudHM6IHsgT3ZlcmxheSB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgb3Blbjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXJJdGVtczoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBiYWRnZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVmcmVzaDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBjb2xsYXBzaWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92YWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICB9LFxuICAgICAgICBib2R5U3R5bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc2VhcmNoSW5wdXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hcbiAgICAgICAgICAgICAgICA/IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9c2VhcmNoXScpXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVlcnk6IG51bGwsXG4gICAgICAgICAgICBjb2xsYXBzZWQ6ICF0aGlzLm9wZW4sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdG9nZ2xlKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndG9nZ2xlJyk7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sbGFwc2VkXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRlbWl0KCdjb2xsYXBzZScpXG4gICAgICAgICAgICAgICAgOiB0aGlzLiRlbWl0KCdleHBhbmQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXhwYW5kKCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2V4cGFuZCcpO1xuICAgICAgICB9LFxuICAgICAgICBjb2xsYXBzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbGxhcHNlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzKCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5mb2N1cygpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclF1ZXJ5KCkge1xuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdyZW1vdmUnKTtcbiAgICAgICAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4kZWwpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgLmljb24uYW5nbGVbYXJpYS1oaWRkZW49XCJ0cnVlXCJdIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAuaWNvbi5hbmdsZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xuICAgIH1cblxuICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LFxuICAgIFtcbiAgICAgIF92bS5oZWFkZXJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiaGVhZGVyXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLmljb25cbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGhhcy1tYXJnaW4tcmlnaHQtc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBjbGFzczogX3ZtLmljb24gfSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uY29sbGFwc2libGVcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXMtY2xpY2thYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uc2VhcmNoXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoYXMtdmVydGljYWxseS1jZW50ZXJlZC1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgaXMtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzZWFyY2hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnF1ZXJ5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucXVlcnkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInF1ZXJ5LXVwZGF0ZVwiLCBfdm0ucXVlcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb250cm9scywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uX3QoXCJjb250cm9sLVwiICsgaSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5iYWRnZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgID8gX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFnIGlzLXByaW1hcnlcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmJhZGdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5yZWZyZXNoXG4gICAgICAgICAgICAgICAgPyBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlci1pY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwicmVmcmVzaFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcmVmcmVzaFwiIH0pXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5jb2xsYXBzaWJsZVxuICAgICAgICAgICAgICAgID8gX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBhbmdsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBfdm0uY29sbGFwc2VkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1hbmdsZS1kb3duXCIgfSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnJlbW92YWJsZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJkZWxldGUgaXMtc21hbGxcIiB9KV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmNvbGxhcHNlZCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhY29sbGFwc2VkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZm9vdGVyICYmICFfdm0uY29sbGFwc2VkXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImZvb3RlclwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvb3RlclwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmZvb3Rlckl0ZW1zLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFwiY2FyZC1mb290ZXItaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdChcImZvb3Rlci1pdGVtLVwiICsgaSldLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLm92ZXJsYXkgPyBfYyhcIm92ZXJsYXlcIiwgeyBhdHRyczogeyBzaXplOiBcIm1lZGl1bVwiIH0gfSkgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1zZWFyY2hcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWY1YTBlYTE2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mNWEwZWExNlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAxIDIgMjggMzAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOTk1YzU5ZDBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI0OGIyYjlhM1wiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi05OTVjNTlkMFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtOTk1YzU5ZDBcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTk5NWM1OWQwXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDEyMDZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyAzMCIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5mb290ZXIubW9kYWwtY2FyZC1mb290IHtcXG4gICAgLXdlYmtpdC1ib3gtcGFjazogZW5kO1xcbiAgICAgICAgLW1zLWZsZXgtcGFjazogZW5kO1xcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxufVxcbi5tb2RhbC5pcy1hY3RpdmUge1xcbiAgICB6LWluZGV4OiAxMTAwO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL2hvbWUvbWloYWkvd29yay9fcHJvai9zcGEyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL01vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBb0dBO0lBQ0Esc0JBQUE7UUFBQSxtQkFBQTtZQUFBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLGNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiTW9kYWwudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVxcXCJhbmltYXRlZCBmYWRlSW5cXFwiXFxuICAgICAgICBsZWF2ZS1hY3RpdmUtY2xhc3M9XFxcImFuaW1hdGVkIGZhZGVPdXRcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwibW9kYWxcXFwiXFxuICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1hY3RpdmUnOiBzaG93IH1cXFwiXFxuICAgICAgICAgICAgdi1pZj1cXFwic2hvd1xcXCJcXG4gICAgICAgICAgICA6c3R5bGU9XFxcImNvbnRhaW5lclN0eWxlXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1jYXJkXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cXFwibW9kYWwtY2FyZC1oZWFkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgICAgIDwvaGVhZGVyPlxcbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cXFwibW9kYWwtY2FyZC1ib2R5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImJvZHlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFxcXCJUaGUgc2VsZWN0ZWQgaXRlbSBpcyBhYm91dCB0byBiZSBkZWxldGVkISBBcmUgeW91IHN1cmU/XFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxcbiAgICAgICAgICAgICAgICA8Zm9vdGVyIGNsYXNzPVxcXCJtb2RhbC1jYXJkLWZvb3RcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiZm9vdGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgnY2FuY2VsLWFjdGlvbicpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhcXFwiQ2FuY2VsXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLXN1Y2Nlc3NcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ2NvbW1pdC1hY3Rpb24nKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFxcXCJZZXNcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cXFwibW9kYWwtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJjb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XFxcInN1YnRpdGxlIGlzLTVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhcXFwiVGhlIHNlbGVjdGVkIGl0ZW0gaXMgYWJvdXQgdG8gYmUgZGVsZXRlZCEgQXJlIHlvdSBzdXJlP1xcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cXG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgICAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1sZWZ0XFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cXFwiY29udHJvbHNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1zdWNjZXNzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ2NhbmNlbC1hY3Rpb24nKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oXFxcIkNhbmNlbFxcXCIpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1kYW5nZXIgaGFzLW1hcmdpbi1sZWZ0LXNtYWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRlbWl0KCdjb21taXQtYWN0aW9uJylcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhcXFwiWWVzXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwibW9kYWwtY2xvc2UgaXMtbGFyZ2VcXFwiXFxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XFxcImNsb3NlXFxcIlxcbiAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRlbWl0KCdjYW5jZWwtYWN0aW9uJylcXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcIiFjYXJkXFxcIj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3RyYW5zaXRpb24+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIHByb3BzOiB7XFxuICAgICAgICBzaG93OiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBjb250YWluZXJTdHlsZToge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgICAgICBjYXJkOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdsb2NhbGUnLCBbJ19fJ10pLFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICBmb290ZXIubW9kYWwtY2FyZC1mb290IHtcXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICAgIH1cXG5cXG4gICAgLm1vZGFsLmlzLWFjdGl2ZSB7XFxuICAgICAgICB6LWluZGV4OiAxMTAwO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtOTk1YzU5ZDBcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIwN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDMwIiwiPHRlbXBsYXRlPlxuXG4gICAgPHRyYW5zaXRpb24gZW50ZXItYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluXCJcbiAgICAgICAgbGVhdmUtYWN0aXZlLWNsYXNzPVwiYW5pbWF0ZWQgZmFkZU91dFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWxcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtYWN0aXZlJzogc2hvdyB9XCJcbiAgICAgICAgICAgIHYtaWY9XCJzaG93XCJcbiAgICAgICAgICAgIDpzdHlsZT1cImNvbnRhaW5lclN0eWxlXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW9kYWwtYmFja2dyb3VuZFwiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNhcmRcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJjYXJkXCI+XG4gICAgICAgICAgICAgICAgPGhlYWRlciBjbGFzcz1cIm1vZGFsLWNhcmQtaGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L2hlYWRlcj5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cIm1vZGFsLWNhcmQtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiYm9keVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oXCJUaGUgc2VsZWN0ZWQgaXRlbSBpcyBhYm91dCB0byBiZSBkZWxldGVkISBBcmUgeW91IHN1cmU/XCIpIH19XG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGZvb3RlciBjbGFzcz1cIm1vZGFsLWNhcmQtZm9vdFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjYW5jZWwtYWN0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFwiQ2FuY2VsXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjb21taXQtYWN0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhcIlllc1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwic3VidGl0bGUgaXMtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFwiVGhlIHNlbGVjdGVkIGl0ZW0gaXMgYWJvdXQgdG8gYmUgZGVsZXRlZCEgQXJlIHlvdSBzdXJlP1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjYW5jZWwtYWN0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFwiQ2FuY2VsXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjb21taXQtYWN0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhcIlllc1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vZGFsLWNsb3NlIGlzLWxhcmdlXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiY2xvc2VcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjYW5jZWwtYWN0aW9uJylcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCIhY2FyZFwiPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvdHJhbnNpdGlvbj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgc2hvdzoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjb250YWluZXJTdHlsZToge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjYXJkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICBmb290ZXIubW9kYWwtY2FyZC1mb290IHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICB9XG5cbiAgICAubW9kYWwuaXMtYWN0aXZlIHtcbiAgICAgICAgei1pbmRleDogMTEwMDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvTW9kYWwudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcInRyYW5zaXRpb25cIixcbiAgICB7XG4gICAgICBhdHRyczoge1xuICAgICAgICBcImVudGVyLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIGZhZGVJblwiLFxuICAgICAgICBcImxlYXZlLWFjdGl2ZS1jbGFzc1wiOiBcImFuaW1hdGVkIGZhZGVPdXRcIlxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX3ZtLnNob3dcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm1vZGFsXCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtYWN0aXZlXCI6IF92bS5zaG93IH0sXG4gICAgICAgICAgICAgIHN0eWxlOiBfdm0uY29udGFpbmVyU3R5bGVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYmFja2dyb3VuZFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uY2FyZFxuICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jYXJkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImhlYWRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2FyZC1oZWFkXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl90KFwiaGVhZGVyXCIpXSxcbiAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic2VjdGlvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtY2FyZC1ib2R5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJib2R5XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fXyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZSBzZWxlY3RlZCBpdGVtIGlzIGFib3V0IHRvIGJlIGRlbGV0ZWQhIEFyZSB5b3Ugc3VyZT9cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZm9vdGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbC1jYXJkLWZvb3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcImZvb3RlclwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY2FuY2VsLWFjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIkNhbmNlbFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY29tbWl0LWFjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJZZXNcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChcImNvbnRlbnRcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VidGl0bGUgaXMtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fXyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlIHNlbGVjdGVkIGl0ZW0gaXMgYWJvdXQgdG8gYmUgZGVsZXRlZCEgQXJlIHlvdSBzdXJlP1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWxlZnRcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJjb250cm9sc1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImNhbmNlbC1hY3Rpb25cIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIkNhbmNlbFwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjb21taXQtYWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9fKFwiWWVzXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICFfdm0uY2FyZFxuICAgICAgICAgICAgICAgID8gX2MoXCJidXR0b25cIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtb2RhbC1jbG9zZSBpcy1sYXJnZVwiLFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtbGFiZWxcIjogXCJjbG9zZVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY2FuY2VsLWFjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTk5NWM1OWQwXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi05OTVjNTlkMFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDMwIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbXVsdGlsaW5lXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtb25lLXRoaXJkLXdpZGVzY3JlZW4gaXMtaGFsZi1kZXNrdG9wIGlzLWZ1bGwtdGFibGV0XCJcbiAgICAgICAgICAgIHYtZm9yPVwiKGxvZywgaW5kZXgpIGluIGxvZ3NcIlxuICAgICAgICAgICAgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICA8Y2FyZCBpY29uPVwiZmEgZmEtdGVybWluYWxcIlxuICAgICAgICAgICAgICAgIDpyZW1vdmFibGU9XCJmYWxzZVwiXG4gICAgICAgICAgICAgICAgOmNvbGxhcHNpYmxlPVwiZmFsc2VcIlxuICAgICAgICAgICAgICAgIDp0aXRsZT1cImxvZy5uYW1lXCJcbiAgICAgICAgICAgICAgICA6Y29udHJvbHM9XCIzXCI+XG4gICAgICAgICAgICAgICAgPGEgc2xvdD1cImNvbnRyb2wtMVwiIGNsYXNzPVwiY2FyZC1oZWFkZXItaWNvblwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJsb2cuY2FuQmVTZWVuXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBoYXMtdGV4dC1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdzeXN0ZW0ubG9ncy5zaG93JywgcGFyYW1zOiB7IGlkOiBsb2cubmFtZSB9IH0pXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWV5ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBzbG90PVwiY29udHJvbC0xXCIgY2xhc3M9XCJjYXJkLWhlYWRlci1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBoYXMtdGV4dC1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiZ2V0RG93bmxvYWRMaW5rKGxvZy5uYW1lKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1jbG91ZC1kb3dubG9hZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8YSBzbG90PVwiY29udHJvbC0xXCIgY2xhc3M9XCJjYXJkLWhlYWRlci1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBoYXMtdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2hvd01vZGFsPXRydWU7aXRlbVRvQmVEZWxldGVkPWxvZy5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXRyYXNoLW9cIj48L2k+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhcy1wYWRkaW5nLWxhcmdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oXCJMYXN0IHVwZGF0ZWRcIikgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXB1bGxlZC1yaWdodFwiPnt7IGxvZy5tb2RpZmllZC5kYXRlIHwgdGltZUZyb21Ob3cgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhcIlNpemVcIikgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLXB1bGxlZC1yaWdodFwiPnt7IGxvZy5zaXplIH19IHt7IF9fKFwiTUJcIikgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvY2FyZD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxtb2RhbCA6c2hvdz1cInNob3dNb2RhbFwiXG4gICAgICAgICAgICBAY2FuY2VsLWFjdGlvbj1cInNob3dNb2RhbD1mYWxzZTtpdGVtVG9CZURlbGV0ZWQ9bnVsbFwiXG4gICAgICAgICAgICBAY29tbWl0LWFjdGlvbj1cImVtcHR5KClcIj5cbiAgICAgICAgPC9tb2RhbD5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IENhcmQgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlJztcbmltcG9ydCBNb2RhbCBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Vuc28vYnVsbWEvTW9kYWwudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHsgQ2FyZCwgTW9kYWwgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxuICAgICAgICAgICAgaXRlbVRvQmVEZWxldGVkOiBudWxsLFxuICAgICAgICAgICAgbG9nczogW10sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGF4aW9zLmdldChyb3V0ZSgnc3lzdGVtLmxvZ3MuaW5kZXgnLCBbXSwgZmFsc2UpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2dzID0gcmVzcG9uc2UuZGF0YS5sb2dzO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZW1wdHkoKSB7XG4gICAgICAgICAgICBheGlvcy5kZWxldGUocm91dGUoJ3N5c3RlbS5sb2dzLmRlc3Ryb3knLCB0aGlzLml0ZW1Ub0JlRGVsZXRlZCwgZmFsc2UpLnRvU3RyaW5nKCkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMubG9ncy5maW5kSW5kZXgobG9nID0+IHRoaXMuaXRlbVRvQmVEZWxldGVkID09PSBsb2cubmFtZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2dzLnNwbGljZShpbmRleCwgMSwgcmVzcG9uc2UuZGF0YS5sb2cpO1xuICAgICAgICAgICAgICAgIHRoaXMuaXRlbVRvQmVEZWxldGVkID0gbnVsbDtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXREb3dubG9hZExpbmsobG9nKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGUoJ3N5c3RlbS5sb2dzLmRvd25sb2FkJywgbG9nLCBmYWxzZSkudG9TdHJpbmcoKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vbG9ncy9JbmRleC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW11bHRpbGluZVwiIH0sXG4gICAgW1xuICAgICAgX3ZtLl9sKF92bS5sb2dzLCBmdW5jdGlvbihsb2csIGluZGV4KSB7XG4gICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGtleTogaW5kZXgsXG4gICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgXCJjb2x1bW4gaXMtb25lLXRoaXJkLXdpZGVzY3JlZW4gaXMtaGFsZi1kZXNrdG9wIGlzLWZ1bGwtdGFibGV0XCJcbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICBcImNhcmRcIixcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBpY29uOiBcImZhIGZhLXRlcm1pbmFsXCIsXG4gICAgICAgICAgICAgICAgICByZW1vdmFibGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY29sbGFwc2libGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgdGl0bGU6IGxvZy5uYW1lLFxuICAgICAgICAgICAgICAgICAgY29udHJvbHM6IDNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICBsb2cuY2FuQmVTZWVuXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHNsb3Q6IFwiY29udHJvbC0xXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Q6IFwiY29udHJvbC0xXCJcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaGFzLXRleHQtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kcm91dGVyLnB1c2goe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic3lzdGVtLmxvZ3Muc2hvd1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogbG9nLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLWV5ZVwiIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb250cm9sLTFcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzbG90OiBcImNvbnRyb2wtMVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGhhcy10ZXh0LWluZm9cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5nZXREb3dubG9hZExpbmsobG9nLm5hbWUpIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1jbG91ZC1kb3dubG9hZFwiIH0pXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb250cm9sLTFcIiB9LFxuICAgICAgICAgICAgICAgICAgICBzbG90OiBcImNvbnRyb2wtMVwiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGhhcy10ZXh0LWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93TW9kYWwgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLml0ZW1Ub0JlRGVsZXRlZCA9IGxvZy5uYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaC1vXCIgfSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYXMtcGFkZGluZy1sYXJnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uX18oXCJMYXN0IHVwZGF0ZWRcIikpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpcy1wdWxsZWQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX2YoXCJ0aW1lRnJvbU5vd1wiKShsb2cubW9kaWZpZWQuZGF0ZSkpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5fXyhcIlNpemVcIikpKV0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpcy1wdWxsZWQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhsb2cuc2l6ZSkgKyBcIiBcIiArIF92bS5fcyhfdm0uX18oXCJNQlwiKSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIClcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJtb2RhbFwiLCB7XG4gICAgICAgIGF0dHJzOiB7IHNob3c6IF92bS5zaG93TW9kYWwgfSxcbiAgICAgICAgb246IHtcbiAgICAgICAgICBcImNhbmNlbC1hY3Rpb25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0uc2hvd01vZGFsID0gZmFsc2VcbiAgICAgICAgICAgIF92bS5pdGVtVG9CZURlbGV0ZWQgPSBudWxsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBcImNvbW1pdC1hY3Rpb25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICBfdm0uZW1wdHkoKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0yMWU4OWVlNVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMjFlODllZTVcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9sb2dzL0luZGV4LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDMwIl0sInNvdXJjZVJvb3QiOiIifQ==