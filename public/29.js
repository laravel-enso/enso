webpackJsonp([29],{

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1567)
/* template */
var __vue_template__ = __webpack_require__(1568)
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

/***/ 1254:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1260)
/* template */
var __vue_template__ = __webpack_require__(1261)
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

/***/ 1255:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1257)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1259)
/* template */
var __vue_template__ = __webpack_require__(1262)
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

/***/ 1257:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1258);
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

/***/ 1258:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.card-content[data-v-f5a0ea16] {\n    -webkit-transition: max-height .400s ease;\n    transition: max-height .400s ease;\n    overflow-y: hidden;\n}\n.icon.angle[aria-hidden=\"true\"][data-v-f5a0ea16] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.icon.angle[data-v-f5a0ea16] {\n    -webkit-transition: -webkit-transform .300s ease;\n    transition: -webkit-transform .300s ease;\n    transition: transform .300s ease;\n    transition: transform .300s ease, -webkit-transform .300s ease;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/bulma/resources/assets/js/components/enso/bulma/Card.vue"],"names":[],"mappings":";AA6NA;IACA,0CAAA;IAAA,kCAAA;IACA,mBAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,iDAAA;IAAA,yCAAA;IAAA,iCAAA;IAAA,+DAAA;CACA","file":"Card.vue","sourcesContent":["<template>\n\n    <div class=\"card\">\n        <header class=\"card-header\"\n            v-if=\"header\">\n            <p class=\"card-header-title\">\n                <span class=\"icon is-small has-margin-right-small\"\n                    v-if=\"icon\">\n                    <fa :icon=\"icon\"></fa>\n                </span>\n                <span class=\"is-clickable\"\n                    @click=\"toggle()\"\n                    v-if=\"!fixed && title\">\n                    {{ title }}\n                </span>\n                <span v-else-if=\"title\">{{ title }}</span>\n            </p>\n            <div class=\"has-vertically-centered-content\"\n                v-if=\"search\">\n                <p class=\"control has-icons-left\">\n                    <input type=\"search\"\n                        class=\"input is-small\"\n                        v-model=\"query\"\n                        @input=\"$emit('query-update', query)\">\n                    <span class=\"icon is-small is-left\">\n                        <fa icon=\"search\"></fa>\n                    </span>\n                </p>\n            </div>\n            <slot v-for=\"i in controls\"\n                :name=\"'control-' + i\">\n            </slot>\n            <card-control\n                v-if=\"badge !== null\">\n                <span class=\"tag is-link\">\n                    {{ badge }}\n                </span>\n            </card-control>\n            <card-control\n                v-if=\"refresh\"\n                @click=\"$emit('refresh')\">\n                <span class=\"icon is-small\">\n                    <fa icon=\"sync\"></fa>\n                </span>\n            </card-control>\n            <card-control\n                v-if=\"!fixed\"\n                @click=\"toggle()\">\n                <span class=\"icon angle\"\n                    :aria-hidden=\"!expanded\">\n                    <fa icon=\"angle-down\"></fa>\n                </span>\n            </card-control>\n            <card-control\n                v-if=\"removable\"\n                @click=\"destroy()\">\n                <a class=\"delete is-small\"></a>\n            </card-control>\n        </header>\n\n        <div class=\"card-content is-paddingless\"\n            :style=\"contentStyle\">\n            <slot></slot>\n        </div>\n\n        <slot name=\"footer\"></slot>\n\n        <overlay size=\"medium\" v-if=\"overlay\"></overlay>\n    </div>\n\n</template>\n\n<script>\n\nimport fontawesome from '@fortawesome/fontawesome';\nimport { faSearch, faSync, faAngleDown } from '@fortawesome/fontawesome-free-solid/shakable.es';\nimport CardControl from './CardControl.vue';\nimport Overlay from './Overlay.vue';\n\nfontawesome.library.add(faSearch, faSync, faAngleDown);\n\nexport default {\n    name: 'Card',\n\n    components: { CardControl, Overlay },\n\n    props: {\n        nested: {\n            type: Boolean,\n            default: false,\n        },\n        collapsed: {\n            type: Boolean,\n            default: false,\n        },\n        icon: {\n            type: Object,\n            default() {\n                return null;\n            },\n        },\n        title: {\n            type: String,\n            default: null,\n        },\n        search: {\n            type: Boolean,\n            default: false,\n        },\n        badge: {\n            type: Number,\n            default: null,\n        },\n        refresh: {\n            type: Boolean,\n            default: false,\n        },\n        fixed: {\n            type: Boolean,\n            default: false,\n        },\n        removable: {\n            type: Boolean,\n            default: false,\n        },\n        controls: {\n            type: Number,\n            default: 0,\n        },\n        overlay: {\n            type: Boolean,\n            default: false,\n        },\n    },\n\n    computed: {\n        searchInput() {\n            return this.search\n                ? this.$el.querySelector('input[type=search]')\n                : null;\n        },\n        header() {\n            return this.icon || this.title || this.search\n                || this.badge || this.refresh || !this.fixed\n                || this.removable || this.controls;\n        },\n        content() {\n            return this.$el.querySelector('.card-content');\n        },\n        contentStyle() {\n            return this.collapsed\n                ? { 'max-height': 0 }\n                : null;\n        },\n    },\n\n    data() {\n        return {\n            query: null,\n            expanded: !this.collapsed,\n        };\n    },\n\n    methods: {\n        toggle() {\n            this.$emit('toggle');\n\n            if (this.expanded) {\n                this.collapse();\n                return;\n            }\n\n            this.expand();\n        },\n        expand() {\n            if (this.nested) {\n                this.$emit('extend', this.content.scrollHeight);\n            }\n\n            this.$emit('expand');\n            this.content.style['max-height'] = `${this.content.scrollHeight}px`;\n            this.expanded = true;\n        },\n        collapse() {\n            if (!this.content.style['max-height']) {\n                this.content.style['max-height'] = `${this.content.scrollHeight}px`;\n            }\n\n            if (this.nested) {\n                this.$emit('shrink', this.content.scrollHeight);\n            }\n\n            this.$emit('collapse');\n            setTimeout(() => { this.content.style['max-height'] = 0; }, 1);\n            this.expanded = false;\n        },\n        shrink(height) {\n            this.content.style['max-height'] = `${parseInt(this.content.style['max-height'], 10) - height}px`;\n            return this.$emit('shrink', height);\n        },\n        extend(height) {\n            this.content.style['max-height'] = `${parseInt(this.content.style['max-height'], 10) + height}px`;\n            return this.$emit('extend', height);\n        },\n        focus() {\n            this.searchInput.focus();\n        },\n        clearQuery() {\n            this.query = null;\n        },\n        destroy() {\n            this.$emit('remove');\n            this.$el.parentNode.removeChild(this.$el);\n            this.$destroy();\n        },\n    },\n};\n\n</script>\n\n<style scoped>\n\n    .card-content {\n        transition: max-height .400s ease;\n        overflow-y: hidden;\n    }\n\n    .icon.angle[aria-hidden=\"true\"] {\n        transform: rotate(180deg);\n    }\n\n    .icon.angle {\n        transition: transform .300s ease;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1259:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CardControl_vue__ = __webpack_require__(1254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CardControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__CardControl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Overlay_vue__ = __webpack_require__(37);
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
//







__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_6" /* faSearch */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_13" /* faSync */], __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["h" /* faAngleDown */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Card',

    components: { CardControl: __WEBPACK_IMPORTED_MODULE_2__CardControl_vue___default.a, Overlay: __WEBPACK_IMPORTED_MODULE_3__Overlay_vue___default.a },

    props: {
        nested: {
            type: Boolean,
            default: false
        },
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
        },
        content: function content() {
            return this.$el.querySelector('.card-content');
        },
        contentStyle: function contentStyle() {
            return this.collapsed ? { 'max-height': 0 } : null;
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

            if (this.expanded) {
                this.collapse();
                return;
            }

            this.expand();
        },
        expand: function expand() {
            if (this.nested) {
                this.$emit('extend', this.content.scrollHeight);
            }

            this.$emit('expand');
            this.content.style['max-height'] = this.content.scrollHeight + 'px';
            this.expanded = true;
        },
        collapse: function collapse() {
            var _this = this;

            if (!this.content.style['max-height']) {
                this.content.style['max-height'] = this.content.scrollHeight + 'px';
            }

            if (this.nested) {
                this.$emit('shrink', this.content.scrollHeight);
            }

            this.$emit('collapse');
            setTimeout(function () {
                _this.content.style['max-height'] = 0;
            }, 1);
            this.expanded = false;
        },
        shrink: function shrink(height) {
            this.content.style['max-height'] = parseInt(this.content.style['max-height'], 10) - height + 'px';
            return this.$emit('shrink', height);
        },
        extend: function extend(height) {
            this.content.style['max-height'] = parseInt(this.content.style['max-height'], 10) + height + 'px';
            return this.$emit('extend', height);
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

/***/ 1260:
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

/***/ 1261:
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

/***/ 1262:
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
        { staticClass: "card-content is-paddingless", style: _vm.contentStyle },
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

/***/ 1264:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1275)
/* template */
var __vue_template__ = __webpack_require__(1276)
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

/***/ 1275:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_v_tooltip__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(10);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["u" /* faCheck */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_17" /* faTimes */]);

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

/***/ 1276:
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

/***/ 1567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_enso_bulma_Card_vue__ = __webpack_require__(1255);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_enso_bulma_Card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_enso_bulma_Card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_enso_bulma_CardControl_vue__ = __webpack_require__(1254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_enso_bulma_CardControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_enso_bulma_CardControl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_enso_bulma_Popover_vue__ = __webpack_require__(1264);
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









__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_16" /* faTerminal */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["M" /* faEye */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["z" /* faCloudDownloadAlt */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_19" /* faTrashAlt */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Card: __WEBPACK_IMPORTED_MODULE_3__components_enso_bulma_Card_vue___default.a, CardControl: __WEBPACK_IMPORTED_MODULE_4__components_enso_bulma_CardControl_vue___default.a, Popover: __WEBPACK_IMPORTED_MODULE_5__components_enso_bulma_Popover_vue___default.a },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__']), {
        icon: function icon() {
            return __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_16" /* faTerminal */];
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
                _this2.$toastr.success(data.message);
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

/***/ 1568:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9sb2dzL0luZGV4LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkQ29udHJvbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWU/YTVlOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZT9kY2Y4Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZENvbnRyb2wudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmRDb250cm9sLnZ1ZT9iYmZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlPzRiODIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvUG9wb3Zlci52dWUiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL1BvcG92ZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL1BvcG92ZXIudnVlPzhjNTgiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvSW5kZXgudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvSW5kZXgudnVlPzQzZmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7QUFDQSwrQ0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7QUFDQSwrQ0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBd007QUFDeE07QUFDQTtBQUNBO0FBQ0EsNkNBQWlWO0FBQ2pWO0FBQ0EsK0NBQXFMO0FBQ3JMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxzQ0FBOE87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QUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLCtDQUErQztBQUN4RSxtQ0FBbUMsU0FBUyxvQkFBb0IsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG1DQUFtQztBQUM1RDtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsaUNBQWlDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGlDQUFpQztBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIyOS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9JbmRleC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTIxZTg5ZWU1XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vSW5kZXgudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvSW5kZXgudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTIxZTg5ZWU1XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMjFlODllZTVcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvSW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMjkiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ2FyZENvbnRyb2wudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MGE1ODM1MFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NhcmRDb250cm9sLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkQ29udHJvbC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzBhNTgzNTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03MGE1ODM1MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZENvbnRyb2wudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMjggMjkiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY1YTBlYTE2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2FyZC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NhcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1mNWEwZWExNlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6dHJ1ZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2FyZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IFwiZGF0YS12LWY1YTBlYTE2XCJcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWY1YTBlYTE2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZjVhMGVhMTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMjggMjkiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjVhMGVhMTZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DYXJkLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYzQwZjEyZTRcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjVhMGVhMTZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DYXJkLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNWEwZWExNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NhcmQudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWY1YTBlYTE2XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMjggMjkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmQtY29udGVudFtkYXRhLXYtZjVhMGVhMTZdIHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IC40MDBzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgLjQwMHMgZWFzZTtcXG4gICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbn1cXG4uaWNvbi5hbmdsZVthcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJdW2RhdGEtdi1mNWEwZWExNl0ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLmljb24uYW5nbGVbZGF0YS12LWY1YTBlYTE2XSB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNk5BO0lBQ0EsMENBQUE7SUFBQSxrQ0FBQTtJQUNBLG1CQUFBO0NBQ0E7QUFFQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsaURBQUE7SUFBQSx5Q0FBQTtJQUFBLGlDQUFBO0lBQUEsK0RBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ2FyZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIlxcbiAgICAgICAgICAgIHYtaWY9XFxcImhlYWRlclxcXCI+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtaGVhZGVyLXRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtc21hbGwgaGFzLW1hcmdpbi1yaWdodC1zbWFsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGZhIDppY29uPVxcXCJpY29uXFxcIj48L2ZhPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpcy1jbGlja2FibGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInRvZ2dsZSgpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiIWZpeGVkICYmIHRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7IHRpdGxlIH19XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlLWlmPVxcXCJ0aXRsZVxcXCI+e3sgdGl0bGUgfX08L3NwYW4+XFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImhhcy12ZXJ0aWNhbGx5LWNlbnRlcmVkLWNvbnRlbnRcXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcInNlYXJjaFxcXCI+XFxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0IGlzLXNtYWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcInF1ZXJ5XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cXFwiJGVtaXQoJ3F1ZXJ5LXVwZGF0ZScsIHF1ZXJ5KVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cXFwic2VhcmNoXFxcIj48L2ZhPlxcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPHNsb3Qgdi1mb3I9XFxcImkgaW4gY29udHJvbHNcXFwiXFxuICAgICAgICAgICAgICAgIDpuYW1lPVxcXCInY29udHJvbC0nICsgaVxcXCI+XFxuICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgIDxjYXJkLWNvbnRyb2xcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiYmFkZ2UgIT09IG51bGxcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFnIGlzLWxpbmtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3sgYmFkZ2UgfX1cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvY2FyZC1jb250cm9sPlxcbiAgICAgICAgICAgIDxjYXJkLWNvbnRyb2xcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwicmVmcmVzaFxcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgncmVmcmVzaCcpXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtc21hbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XFxcInN5bmNcXFwiPjwvZmE+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2NhcmQtY29udHJvbD5cXG4gICAgICAgICAgICA8Y2FyZC1jb250cm9sXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcIiFmaXhlZFxcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJ0b2dnbGUoKVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGFuZ2xlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmFyaWEtaGlkZGVuPVxcXCIhZXhwYW5kZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XFxcImFuZ2xlLWRvd25cXFwiPjwvZmE+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2NhcmQtY29udHJvbD5cXG4gICAgICAgICAgICA8Y2FyZC1jb250cm9sXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcInJlbW92YWJsZVxcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJkZXN0cm95KClcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZGVsZXRlIGlzLXNtYWxsXFxcIj48L2E+XFxuICAgICAgICAgICAgPC9jYXJkLWNvbnRyb2w+XFxuICAgICAgICA8L2hlYWRlcj5cXG5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudCBpcy1wYWRkaW5nbGVzc1xcXCJcXG4gICAgICAgICAgICA6c3R5bGU9XFxcImNvbnRlbnRTdHlsZVxcXCI+XFxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8c2xvdCBuYW1lPVxcXCJmb290ZXJcXFwiPjwvc2xvdD5cXG5cXG4gICAgICAgIDxvdmVybGF5IHNpemU9XFxcIm1lZGl1bVxcXCIgdi1pZj1cXFwib3ZlcmxheVxcXCI+PC9vdmVybGF5PlxcbiAgICA8L2Rpdj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZSc7XFxuaW1wb3J0IHsgZmFTZWFyY2gsIGZhU3luYywgZmFBbmdsZURvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1zb2xpZC9zaGFrYWJsZS5lcyc7XFxuaW1wb3J0IENhcmRDb250cm9sIGZyb20gJy4vQ2FyZENvbnRyb2wudnVlJztcXG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL092ZXJsYXkudnVlJztcXG5cXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYVNlYXJjaCwgZmFTeW5jLCBmYUFuZ2xlRG93bik7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnQ2FyZCcsXFxuXFxuICAgIGNvbXBvbmVudHM6IHsgQ2FyZENvbnRyb2wsIE92ZXJsYXkgfSxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIG5lc3RlZDoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgY29sbGFwc2VkOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBpY29uOiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICBzZWFyY2g6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGJhZGdlOiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICAgICAgcmVmcmVzaDoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgZml4ZWQ6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHJlbW92YWJsZToge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgY29udHJvbHM6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgZGVmYXVsdDogMCxcXG4gICAgICAgIH0sXFxuICAgICAgICBvdmVybGF5OiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICBzZWFyY2hJbnB1dCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hcXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXNlYXJjaF0nKVxcbiAgICAgICAgICAgICAgICA6IG51bGw7XFxuICAgICAgICB9LFxcbiAgICAgICAgaGVhZGVyKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmljb24gfHwgdGhpcy50aXRsZSB8fCB0aGlzLnNlYXJjaFxcbiAgICAgICAgICAgICAgICB8fCB0aGlzLmJhZGdlIHx8IHRoaXMucmVmcmVzaCB8fCAhdGhpcy5maXhlZFxcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnJlbW92YWJsZSB8fCB0aGlzLmNvbnRyb2xzO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbnRlbnQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRlbnQnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBjb250ZW50U3R5bGUoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sbGFwc2VkXFxuICAgICAgICAgICAgICAgID8geyAnbWF4LWhlaWdodCc6IDAgfVxcbiAgICAgICAgICAgICAgICA6IG51bGw7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBxdWVyeTogbnVsbCxcXG4gICAgICAgICAgICBleHBhbmRlZDogIXRoaXMuY29sbGFwc2VkLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG5cXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgdG9nZ2xlKCkge1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RvZ2dsZScpO1xcblxcbiAgICAgICAgICAgIGlmICh0aGlzLmV4cGFuZGVkKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2UoKTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLmV4cGFuZCgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGV4cGFuZCgpIHtcXG4gICAgICAgICAgICBpZiAodGhpcy5uZXN0ZWQpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZXh0ZW5kJywgdGhpcy5jb250ZW50LnNjcm9sbEhlaWdodCk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2V4cGFuZCcpO1xcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZVsnbWF4LWhlaWdodCddID0gYCR7dGhpcy5jb250ZW50LnNjcm9sbEhlaWdodH1weGA7XFxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XFxuICAgICAgICB9LFxcbiAgICAgICAgY29sbGFwc2UoKSB7XFxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSA9IGAke3RoaXMuY29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICBpZiAodGhpcy5uZXN0ZWQpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2hyaW5rJywgdGhpcy5jb250ZW50LnNjcm9sbEhlaWdodCk7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbGxhcHNlJyk7XFxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY29udGVudC5zdHlsZVsnbWF4LWhlaWdodCddID0gMDsgfSwgMSk7XFxuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9IGZhbHNlO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNocmluayhoZWlnaHQpIHtcXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSA9IGAke3BhcnNlSW50KHRoaXMuY29udGVudC5zdHlsZVsnbWF4LWhlaWdodCddLCAxMCkgLSBoZWlnaHR9cHhgO1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbWl0KCdzaHJpbmsnLCBoZWlnaHQpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGV4dGVuZChoZWlnaHQpIHtcXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSA9IGAke3BhcnNlSW50KHRoaXMuY29udGVudC5zdHlsZVsnbWF4LWhlaWdodCddLCAxMCkgKyBoZWlnaHR9cHhgO1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbWl0KCdleHRlbmQnLCBoZWlnaHQpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGZvY3VzKCkge1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuZm9jdXMoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBjbGVhclF1ZXJ5KCkge1xcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBudWxsO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGRlc3Ryb3koKSB7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgncmVtb3ZlJyk7XFxuICAgICAgICAgICAgdGhpcy4kZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLiRlbCk7XFxuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuXFxuICAgIC5jYXJkLWNvbnRlbnQge1xcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAuNDAwcyBlYXNlO1xcbiAgICAgICAgb3ZlcmZsb3cteTogaGlkZGVuO1xcbiAgICB9XFxuXFxuICAgIC5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgfVxcblxcbiAgICAuaWNvbi5hbmdsZSB7XFxuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWY1YTBlYTE2XCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMjggMjkiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwiY2FyZC1oZWFkZXJcIlxuICAgICAgICAgICAgdi1pZj1cImhlYWRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBoYXMtbWFyZ2luLXJpZ2h0LXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhIDppY29uPVwiaWNvblwiPjwvZmE+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlKClcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiIWZpeGVkICYmIHRpdGxlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IHRpdGxlIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cInRpdGxlXCI+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFzLXZlcnRpY2FsbHktY2VudGVyZWQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0IGlzLXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgncXVlcnktdXBkYXRlJywgcXVlcnkpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInNlYXJjaFwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzbG90IHYtZm9yPVwiaSBpbiBjb250cm9sc1wiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCInY29udHJvbC0nICsgaVwiPlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgPGNhcmQtY29udHJvbFxuICAgICAgICAgICAgICAgIHYtaWY9XCJiYWRnZSAhPT0gbnVsbFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIGlzLWxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgYmFkZ2UgfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2NhcmQtY29udHJvbD5cbiAgICAgICAgICAgIDxjYXJkLWNvbnRyb2xcbiAgICAgICAgICAgICAgICB2LWlmPVwicmVmcmVzaFwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ3JlZnJlc2gnKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInN5bmNcIj48L2ZhPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvY2FyZC1jb250cm9sPlxuICAgICAgICAgICAgPGNhcmQtY29udHJvbFxuICAgICAgICAgICAgICAgIHYtaWY9XCIhZml4ZWRcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZSgpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGFuZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgOmFyaWEtaGlkZGVuPVwiIWV4cGFuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVwiYW5nbGUtZG93blwiPjwvZmE+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9jYXJkLWNvbnRyb2w+XG4gICAgICAgICAgICA8Y2FyZC1jb250cm9sXG4gICAgICAgICAgICAgICAgdi1pZj1cInJlbW92YWJsZVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVzdHJveSgpXCI+XG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJkZWxldGUgaXMtc21hbGxcIj48L2E+XG4gICAgICAgICAgICA8L2NhcmQtY29udHJvbD5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudCBpcy1wYWRkaW5nbGVzc1wiXG4gICAgICAgICAgICA6c3R5bGU9XCJjb250ZW50U3R5bGVcIj5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cImZvb3RlclwiPjwvc2xvdD5cblxuICAgICAgICA8b3ZlcmxheSBzaXplPVwibWVkaXVtXCIgdi1pZj1cIm92ZXJsYXlcIj48L292ZXJsYXk+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFTZWFyY2gsIGZhU3luYywgZmFBbmdsZURvd24gfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1zb2xpZC9zaGFrYWJsZS5lcyc7XG5pbXBvcnQgQ2FyZENvbnRyb2wgZnJvbSAnLi9DYXJkQ29udHJvbC52dWUnO1xuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5LnZ1ZSc7XG5cbmZvbnRhd2Vzb21lLmxpYnJhcnkuYWRkKGZhU2VhcmNoLCBmYVN5bmMsIGZhQW5nbGVEb3duKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdDYXJkJyxcblxuICAgIGNvbXBvbmVudHM6IHsgQ2FyZENvbnRyb2wsIE92ZXJsYXkgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIG5lc3RlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBjb2xsYXBzZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYmFkZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZnJlc2g6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgZml4ZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZhYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICB9LFxuICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNlYXJjaElucHV0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXNlYXJjaF0nKVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgaGVhZGVyKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaWNvbiB8fCB0aGlzLnRpdGxlIHx8IHRoaXMuc2VhcmNoXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5iYWRnZSB8fCB0aGlzLnJlZnJlc2ggfHwgIXRoaXMuZml4ZWRcbiAgICAgICAgICAgICAgICB8fCB0aGlzLnJlbW92YWJsZSB8fCB0aGlzLmNvbnRyb2xzO1xuICAgICAgICB9LFxuICAgICAgICBjb250ZW50KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJy5jYXJkLWNvbnRlbnQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudFN0eWxlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sbGFwc2VkXG4gICAgICAgICAgICAgICAgPyB7ICdtYXgtaGVpZ2h0JzogMCB9XG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVlcnk6IG51bGwsXG4gICAgICAgICAgICBleHBhbmRlZDogIXRoaXMuY29sbGFwc2VkLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RvZ2dsZScpO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5leHBhbmRlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2UoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuZXhwYW5kKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGV4cGFuZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm5lc3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2V4dGVuZCcsIHRoaXMuY29udGVudC5zY3JvbGxIZWlnaHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdleHBhbmQnKTtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZVsnbWF4LWhlaWdodCddID0gYCR7dGhpcy5jb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkID0gdHJ1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgY29sbGFwc2UoKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuY29udGVudC5zdHlsZVsnbWF4LWhlaWdodCddKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlWydtYXgtaGVpZ2h0J10gPSBgJHt0aGlzLmNvbnRlbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMubmVzdGVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc2hyaW5rJywgdGhpcy5jb250ZW50LnNjcm9sbEhlaWdodCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbGxhcHNlJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5jb250ZW50LnN0eWxlWydtYXgtaGVpZ2h0J10gPSAwOyB9LCAxKTtcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2hyaW5rKGhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlWydtYXgtaGVpZ2h0J10gPSBgJHtwYXJzZUludCh0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSwgMTApIC0gaGVpZ2h0fXB4YDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbWl0KCdzaHJpbmsnLCBoZWlnaHQpO1xuICAgICAgICB9LFxuICAgICAgICBleHRlbmQoaGVpZ2h0KSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSA9IGAke3BhcnNlSW50KHRoaXMuY29udGVudC5zdHlsZVsnbWF4LWhlaWdodCddLCAxMCkgKyBoZWlnaHR9cHhgO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVtaXQoJ2V4dGVuZCcsIGhlaWdodCk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzKCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5mb2N1cygpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclF1ZXJ5KCkge1xuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdyZW1vdmUnKTtcbiAgICAgICAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4kZWwpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNjb3BlZD5cblxuICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IC40MDBzIGVhc2U7XG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAuaWNvbi5hbmdsZVthcmlhLWhpZGRlbj1cInRydWVcIl0ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgIH1cblxuICAgIC5pY29uLmFuZ2xlIHtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2U7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlIiwiPHRlbXBsYXRlPlxuXG4gICAgPGEgY2xhc3M9XCJjYXJkLWhlYWRlci1pY29uXCJcbiAgICAgICAgdi1vbj1cIiRsaXN0ZW5lcnNcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvYT5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdDYXJkQ29udHJvbCcsXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkQ29udHJvbC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiYVwiLFxuICAgIF92bS5fZyh7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyLWljb25cIiB9LCBfdm0uJGxpc3RlbmVycyksXG4gICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03MGE1ODM1MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzBhNTgzNTBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkQ29udHJvbC52dWVcbi8vIG1vZHVsZSBpZCA9IDEyNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyAyOCAyOSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LFxuICAgIFtcbiAgICAgIF92bS5oZWFkZXJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiaGVhZGVyXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLmljb25cbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGhhcy1tYXJnaW4tcmlnaHQtc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogX3ZtLmljb24gfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgIV92bS5maXhlZCAmJiBfdm0udGl0bGVcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXMtY2xpY2thYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS50aXRsZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5zZWFyY2hcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImhhcy12ZXJ0aWNhbGx5LWNlbnRlcmVkLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLnF1ZXJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dCBpcy1zbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInNlYXJjaFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0ucXVlcnkgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5xdWVyeSA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwicXVlcnktdXBkYXRlXCIsIF92bS5xdWVyeSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwic2VhcmNoXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb250cm9scywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uX3QoXCJjb250cm9sLVwiICsgaSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5iYWRnZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgID8gX2MoXCJjYXJkLWNvbnRyb2xcIiwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJ0YWcgaXMtbGlua1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uYmFkZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnJlZnJlc2hcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImNhcmQtY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwicmVmcmVzaFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcInN5bmNcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAhX3ZtLmZpeGVkXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjYXJkLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gYW5nbGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiAhX3ZtLmV4cGFuZGVkIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwiYW5nbGUtZG93blwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5yZW1vdmFibGVcbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImNhcmQtY29udHJvbFwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmRlc3Ryb3koKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImRlbGV0ZSBpcy1zbWFsbFwiIH0pXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAyXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudCBpcy1wYWRkaW5nbGVzc1wiLCBzdHlsZTogX3ZtLmNvbnRlbnRTdHlsZSB9LFxuICAgICAgICBbX3ZtLl90KFwiZGVmYXVsdFwiKV0sXG4gICAgICAgIDJcbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLl90KFwiZm9vdGVyXCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5vdmVybGF5ID8gX2MoXCJvdmVybGF5XCIsIHsgYXR0cnM6IHsgc2l6ZTogXCJtZWRpdW1cIiB9IH0pIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1mNWEwZWExNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZjVhMGVhMTZcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMjggMjkiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vUG9wb3Zlci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTE2NDQ5YjYwXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vUG9wb3Zlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvUG9wb3Zlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMTY0NDliNjBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xNjQ0OWI2MFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvUG9wb3Zlci52dWVcbi8vIG1vZHVsZSBpZCA9IDEyNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDI5IiwiPHRlbXBsYXRlPlxuXG4gICAgPHYtcG9wb3ZlciA6b3Blbj1cIm9wZW5cIlxuICAgICAgICA6dHJpZ2dlcj1cInRyaWdnZXJcIlxuICAgICAgICA6cGxhY2VtZW50PVwicGxhY2VtZW50XCJcbiAgICAgICAgcmVmPVwiZGlhbG9nXCJcbiAgICAgICAgQHNob3c9XCIkZW1pdCgnc2hvdycpXCJcbiAgICAgICAgQGhpZGU9XCIkZW1pdCgnaGlkZScpXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJwb3BvdmVyXCI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXNtYWxsIGlzLXN1Y2Nlc3MgaGFzLW1hcmdpbi1yaWdodC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyZWZzLmRpYWxvZy5oaWRlKCk7JGVtaXQoJ2NvbmZpcm0nKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cImNoZWNrXCI+PC9mYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtc21hbGwgaXMtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIkcmVmcy5kaWFsb2cuaGlkZSgpOyRlbWl0KCdjYW5jZWwnKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInRpbWVzXCI+PC9mYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICA8L3YtcG9wb3Zlcj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgVlBvcG92ZXIgfSBmcm9tICd2LXRvb2x0aXAnO1xuaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZSc7XG5pbXBvcnQgeyBmYUNoZWNrLCBmYVRpbWVzIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYUNoZWNrLCBmYVRpbWVzKTtcblxuY29uc3QgcG9zaXRpb25zID0gW1xuICAgICd0b3AnLCAndG9wLXN0YXJ0JywgJ3RvcC1lbmQnLCAncmlnaHQnLCAncmlnaHQtc3RhcnQnLCAncmlnaHQtZW5kJywgJ2JvdHRvbScsICdib3R0b20tc3RhcnQnLFxuICAgICdib3R0b20tZW5kJywgJ2xlZnQnLCAnbGVmdC1zdGFydCcsICdsZWZ0LWVuZCcsXG5dO1xuXG5jb25zdCB0cmlnZ2VycyA9IFsnaG92ZXInLCAnY2xpY2snLCAnZm9jdXMnLCAnbWFudWFsJ107XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnUG9wb3ZlcicsXG5cbiAgICBjb21wb25lbnRzOiB7IFZQb3BvdmVyIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICBwbGFjZW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdib3R0b20nLFxuICAgICAgICAgICAgdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvc2l0aW9ucy5pbmNsdWRlcyh2YWx1ZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0cmlnZ2VyOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnY2xpY2snLFxuICAgICAgICAgICAgdmFsaWRhdG9yKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlLnNwbGl0KCcgJykuZmlsdGVyKHZhbCA9PiAhdHJpZ2dlcnMuaW5jbHVkZXModmFsKSkubGVuZ3RoID09PSAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3Blbjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0sXG5cblxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvUG9wb3Zlci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwidi1wb3BvdmVyXCIsXG4gICAge1xuICAgICAgcmVmOiBcImRpYWxvZ1wiLFxuICAgICAgYXR0cnM6IHsgb3BlbjogX3ZtLm9wZW4sIHRyaWdnZXI6IF92bS50cmlnZ2VyLCBwbGFjZW1lbnQ6IF92bS5wbGFjZW1lbnQgfSxcbiAgICAgIG9uOiB7XG4gICAgICAgIHNob3c6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS4kZW1pdChcInNob3dcIilcbiAgICAgICAgfSxcbiAgICAgICAgaGlkZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLiRlbWl0KFwiaGlkZVwiKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBbXG4gICAgICBfdm0uX3QoXCJkZWZhdWx0XCIpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFwidGVtcGxhdGVcIiwgeyBzbG90OiBcInBvcG92ZXJcIiB9LCBbXG4gICAgICAgIF9jKFxuICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXNtYWxsIGlzLXN1Y2Nlc3MgaGFzLW1hcmdpbi1yaWdodC1tZWRpdW1cIixcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uJHJlZnMuZGlhbG9nLmhpZGUoKVxuICAgICAgICAgICAgICAgIF92bS4kZW1pdChcImNvbmZpcm1cIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LFxuICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwiY2hlY2tcIiB9IH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtc21hbGwgaXMtZGFuZ2VyXCIsXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLiRyZWZzLmRpYWxvZy5oaWRlKClcbiAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjYW5jZWxcIilcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LFxuICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwidGltZXNcIiB9IH0pXSxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdLFxuICAgIDJcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xNjQ0OWI2MFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMTY0NDliNjBcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9Qb3BvdmVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTI3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMjkiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1vbmUtdGhpcmQtd2lkZXNjcmVlbiBpcy1oYWxmLWRlc2t0b3AgaXMtZnVsbC10YWJsZXRcIlxuICAgICAgICAgICAgdi1mb3I9XCIobG9nLCBpbmRleCkgaW4gbG9nc1wiXG4gICAgICAgICAgICA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgIDxjYXJkIDppY29uPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgOnRpdGxlPVwibG9nLm5hbWVcIlxuICAgICAgICAgICAgICAgIDpjb250cm9scz1cIjNcIj5cbiAgICAgICAgICAgICAgICA8Y2FyZC1jb250cm9sIHNsb3Q9XCJjb250cm9sLTFcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwibG9nLmNhbkJlU2VlblwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaGFzLXRleHQtc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkcm91dGVyLnB1c2goeyBuYW1lOiAnc3lzdGVtLmxvZ3Muc2hvdycsIHBhcmFtczogeyBpZDogbG9nLm5hbWUgfSB9KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJleWVcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9jYXJkLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPGNhcmQtY29udHJvbCBzbG90PVwiY29udHJvbC0yXCI+XG4gICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBoYXMtdGV4dC1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpocmVmPVwiZ2V0RG93bmxvYWRMaW5rKGxvZy5uYW1lKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJjbG91ZC1kb3dubG9hZC1hbHRcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9jYXJkLWNvbnRyb2w+XG4gICAgICAgICAgICAgICAgPGNhcmQtY29udHJvbCBzbG90PVwiY29udHJvbC0zXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwb3BvdmVyIHBsYWNlbWVudD1cImJvdHRvbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY29uZmlybT1cImVtcHR5KGxvZylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBoYXMtdGV4dC1kYW5nZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cInRyYXNoLWFsdFwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvcG9wb3Zlcj5cbiAgICAgICAgICAgICAgICA8L2NhcmQtY29udHJvbD5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFzLXBhZGRpbmctbGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhcIkxhc3QgdXBkYXRlZFwiKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtcHVsbGVkLXJpZ2h0XCI+e3sgbG9nLm1vZGlmaWVkLmRhdGUgfCB0aW1lRnJvbU5vdyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKFwiU2l6ZVwiKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtcHVsbGVkLXJpZ2h0XCI+e3sgbG9nLnNpemUgfX0ge3sgX18oXCJNQlwiKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9jYXJkPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IGZvbnRhd2Vzb21lIGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZSc7XG5pbXBvcnQge1xuICAgIGZhVGVybWluYWwsIGZhRXllLCBmYUNsb3VkRG93bmxvYWRBbHQsIGZhVHJhc2hBbHQsXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXNvbGlkL3NoYWthYmxlLmVzJztcbmltcG9ydCBDYXJkIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZSc7XG5pbXBvcnQgQ2FyZENvbnRyb2wgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmRDb250cm9sLnZ1ZSc7XG5pbXBvcnQgUG9wb3ZlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Vuc28vYnVsbWEvUG9wb3Zlci52dWUnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYVRlcm1pbmFsLCBmYUV5ZSwgZmFDbG91ZERvd25sb2FkQWx0LCBmYVRyYXNoQWx0KTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHsgQ2FyZCwgQ2FyZENvbnRyb2wsIFBvcG92ZXIgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgICAgIGljb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFUZXJtaW5hbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvZ3M6IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBheGlvcy5nZXQocm91dGUoJ3N5c3RlbS5sb2dzLmluZGV4JywgW10sIGZhbHNlKSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9ncyA9IGRhdGEubG9ncztcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGVtcHR5KGxvZykge1xuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKHJvdXRlKCdzeXN0ZW0ubG9ncy5kZXN0cm95JywgbG9nLm5hbWUsIGZhbHNlKS50b1N0cmluZygpKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5sb2dzLmZpbmRJbmRleChpdGVtID0+IGxvZy5uYW1lID09PSBpdGVtLm5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9ncy5zcGxpY2UoaW5kZXgsIDEsIGRhdGEubG9nKTtcbiAgICAgICAgICAgICAgICB0aGlzLiR0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgICAgICBnZXREb3dubG9hZExpbmsobG9nKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGUoJ3N5c3RlbS5sb2dzLmRvd25sb2FkJywgbG9nLCBmYWxzZSkudG9TdHJpbmcoKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vbG9ncy9JbmRleC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW11bHRpbGluZVwiIH0sXG4gICAgX3ZtLl9sKF92bS5sb2dzLCBmdW5jdGlvbihsb2csIGluZGV4KSB7XG4gICAgICByZXR1cm4gX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBrZXk6IGluZGV4LFxuICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgXCJjb2x1bW4gaXMtb25lLXRoaXJkLXdpZGVzY3JlZW4gaXMtaGFsZi1kZXNrdG9wIGlzLWZ1bGwtdGFibGV0XCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJjYXJkXCIsXG4gICAgICAgICAgICB7IGF0dHJzOiB7IGljb246IF92bS5pY29uLCB0aXRsZTogbG9nLm5hbWUsIGNvbnRyb2xzOiAzIH0gfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgbG9nLmNhbkJlU2VlblxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY2FyZC1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJjb250cm9sLTFcIiB9LCBzbG90OiBcImNvbnRyb2wtMVwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGhhcy10ZXh0LXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHJvdXRlci5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJzeXN0ZW0ubG9ncy5zaG93XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogbG9nLm5hbWUgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IFwiZXllXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJjYXJkLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICB7IGF0dHJzOiB7IHNsb3Q6IFwiY29udHJvbC0yXCIgfSwgc2xvdDogXCJjb250cm9sLTJcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaGFzLXRleHQtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGhyZWY6IF92bS5nZXREb3dubG9hZExpbmsobG9nLm5hbWUpIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcImNsb3VkLWRvd25sb2FkLWFsdFwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImNhcmQtY29udHJvbFwiLFxuICAgICAgICAgICAgICAgIHsgYXR0cnM6IHsgc2xvdDogXCJjb250cm9sLTNcIiB9LCBzbG90OiBcImNvbnRyb2wtM1wiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwicG9wb3ZlclwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcGxhY2VtZW50OiBcImJvdHRvbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpcm06IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZW1wdHkobG9nKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaGFzLXRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJ0cmFzaC1hbHRcIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJoYXMtcGFkZGluZy1sYXJnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5fXyhcIkxhc3QgdXBkYXRlZFwiKSkpXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaXMtcHVsbGVkLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fZihcInRpbWVGcm9tTm93XCIpKGxvZy5tb2RpZmllZC5kYXRlKSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0uX18oXCJTaXplXCIpKSldKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpcy1wdWxsZWQtcmlnaHRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MobG9nLnNpemUpICsgXCIgXCIgKyBfdm0uX3MoX3ZtLl9fKFwiTUJcIikpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIF0sXG4gICAgICAgIDFcbiAgICAgIClcbiAgICB9KVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTIxZTg5ZWU1XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0yMWU4OWVlNVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvSW5kZXgudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMjkiXSwic291cmNlUm9vdCI6IiJ9