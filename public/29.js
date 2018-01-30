webpackJsonp([29],{

/***/ 1073:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1079)
/* template */
var __vue_template__ = __webpack_require__(1080)
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

/***/ 1074:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1076)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1078)
/* template */
var __vue_template__ = __webpack_require__(1081)
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

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1077);
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

/***/ 1077:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.card-content[data-v-f5a0ea16] {\n    -webkit-transition: max-height .400s ease;\n    transition: max-height .400s ease;\n    overflow-y: hidden;\n}\n.icon.angle[aria-hidden=\"true\"][data-v-f5a0ea16] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.icon.angle[data-v-f5a0ea16] {\n    -webkit-transition: -webkit-transform .300s ease;\n    transition: -webkit-transform .300s ease;\n    transition: transform .300s ease;\n    transition: transform .300s ease, -webkit-transform .300s ease;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/bulma/resources/assets/js/components/enso/bulma/Card.vue"],"names":[],"mappings":";AA6NA;IACA,0CAAA;IAAA,kCAAA;IACA,mBAAA;CACA;AAEA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,iDAAA;IAAA,yCAAA;IAAA,iCAAA;IAAA,+DAAA;CACA","file":"Card.vue","sourcesContent":["<template>\n\n    <div class=\"card\">\n        <header class=\"card-header\"\n            v-if=\"header\">\n            <p class=\"card-header-title\">\n                <span class=\"icon is-small has-margin-right-small\"\n                    v-if=\"icon\">\n                    <fa :icon=\"icon\"></fa>\n                </span>\n                <span class=\"is-clickable\"\n                    @click=\"toggle()\"\n                    v-if=\"!fixed && title\">\n                    {{ title }}\n                </span>\n                <span v-else-if=\"title\">{{ title }}</span>\n            </p>\n            <div class=\"has-vertically-centered-content\"\n                v-if=\"search\">\n                <p class=\"control has-icons-left\">\n                    <input type=\"search\"\n                        class=\"input is-small\"\n                        v-model=\"query\"\n                        @input=\"$emit('query-update', query)\">\n                    <span class=\"icon is-small is-left\">\n                        <fa icon=\"search\"></fa>\n                    </span>\n                </p>\n            </div>\n            <slot v-for=\"i in controls\"\n                :name=\"'control-' + i\">\n            </slot>\n            <card-control\n                v-if=\"badge !== null\">\n                <span class=\"tag is-link\">\n                    {{ badge }}\n                </span>\n            </card-control>\n            <card-control\n                v-if=\"refresh\"\n                @click=\"$emit('refresh')\">\n                <span class=\"icon is-small\">\n                    <fa icon=\"sync\"></fa>\n                </span>\n            </card-control>\n            <card-control\n                v-if=\"!fixed\"\n                @click=\"toggle()\">\n                <span class=\"icon angle\"\n                    :aria-hidden=\"!expanded\">\n                    <fa icon=\"angle-down\"></fa>\n                </span>\n            </card-control>\n            <card-control\n                v-if=\"removable\"\n                @click=\"destroy()\">\n                <a class=\"delete is-small\"></a>\n            </card-control>\n        </header>\n\n        <div class=\"card-content is-paddingless\"\n            :style=\"contentStyle\">\n            <slot></slot>\n        </div>\n\n        <slot name=\"footer\"></slot>\n\n        <overlay size=\"medium\" v-if=\"overlay\"></overlay>\n    </div>\n\n</template>\n\n<script>\n\nimport fontawesome from '@fortawesome/fontawesome';\nimport { faSearch, faSync, faAngleDown } from '@fortawesome/fontawesome-free-solid/shakable.es';\nimport CardControl from './CardControl.vue';\nimport Overlay from './Overlay.vue';\n\nfontawesome.library.add(faSearch, faSync, faAngleDown);\n\nexport default {\n    name: 'Card',\n\n    components: { CardControl, Overlay },\n\n    props: {\n        nested: {\n            type: Boolean,\n            default: false,\n        },\n        collapsed: {\n            type: Boolean,\n            default: false,\n        },\n        icon: {\n            type: Object,\n            default() {\n                return null;\n            },\n        },\n        title: {\n            type: String,\n            default: null,\n        },\n        search: {\n            type: Boolean,\n            default: false,\n        },\n        badge: {\n            type: Number,\n            default: null,\n        },\n        refresh: {\n            type: Boolean,\n            default: false,\n        },\n        fixed: {\n            type: Boolean,\n            default: false,\n        },\n        removable: {\n            type: Boolean,\n            default: false,\n        },\n        controls: {\n            type: Number,\n            default: 0,\n        },\n        overlay: {\n            type: Boolean,\n            default: false,\n        },\n    },\n\n    computed: {\n        searchInput() {\n            return this.search\n                ? this.$el.querySelector('input[type=search]')\n                : null;\n        },\n        header() {\n            return this.icon || this.title || this.search\n                || this.badge || this.refresh || !this.fixed\n                || this.removable || this.controls;\n        },\n        content() {\n            return this.$el.querySelector('.card-content');\n        },\n        contentStyle() {\n            return this.collapsed\n                ? { 'max-height': 0 }\n                : null;\n        },\n    },\n\n    data() {\n        return {\n            query: null,\n            expanded: !this.collapsed,\n        };\n    },\n\n    methods: {\n        toggle() {\n            this.$emit('toggle');\n\n            if (this.expanded) {\n                this.collapse();\n                return;\n            }\n\n            this.expand();\n        },\n        expand() {\n            if (this.nested) {\n                this.$emit('extend', this.content.scrollHeight);\n            }\n\n            this.$emit('expand');\n            this.content.style['max-height'] = `${this.content.scrollHeight}px`;\n            this.expanded = true;\n        },\n        collapse() {\n            if (!this.content.style['max-height']) {\n                this.content.style['max-height'] = `${this.content.scrollHeight}px`;\n            }\n\n            if (this.nested) {\n                this.$emit('shrink', this.content.scrollHeight);\n            }\n\n            this.$emit('collapse');\n            setTimeout(() => { this.content.style['max-height'] = 0; }, 1);\n            this.expanded = false;\n        },\n        shrink(height) {\n            this.content.style['max-height'] = `${parseInt(this.content.style['max-height'], 10) - height}px`;\n            return this.$emit('shrink', height);\n        },\n        extend(height) {\n            this.content.style['max-height'] = `${parseInt(this.content.style['max-height'], 10) + height}px`;\n            return this.$emit('extend', height);\n        },\n        focus() {\n            this.searchInput.focus();\n        },\n        clearQuery() {\n            this.query = null;\n        },\n        destroy() {\n            this.$emit('remove');\n            this.$el.parentNode.removeChild(this.$el);\n            this.$destroy();\n        },\n    },\n};\n\n</script>\n\n<style scoped>\n\n    .card-content {\n        transition: max-height .400s ease;\n        overflow-y: hidden;\n    }\n\n    .icon.angle[aria-hidden=\"true\"] {\n        transform: rotate(180deg);\n    }\n\n    .icon.angle {\n        transition: transform .300s ease;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1078:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__CardControl_vue__ = __webpack_require__(1073);
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

/***/ 1079:
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

/***/ 1080:
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

/***/ 1081:
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

/***/ 1594:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_rolemanager_CheckboxManager_vue__ = __webpack_require__(1595);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_rolemanager_CheckboxManager_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_enso_rolemanager_CheckboxManager_vue__);
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





/* harmony default export */ __webpack_exports__["default"] = ({
    components: { CheckboxManager: __WEBPACK_IMPORTED_MODULE_1__components_enso_rolemanager_CheckboxManager_vue___default.a },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__'])),

    data: function data() {
        return {
            roleId: this.$route.params.role,
            role: {},
            menus: [],
            permissions: {},
            roleMenus: [],
            rolePermissions: [],
            initialised: false
        };
    },
    created: function created() {
        this.get();
    },


    methods: {
        get: function get() {
            var _this = this;

            axios.get(route('system.roles.getPermissions', [this.roleId], false)).then(function (_ref) {
                var data = _ref.data;

                _this.set(data);
                _this.initialised = true;
            }).catch(function (error) {
                return _this.handleError(error);
            });
        },
        set: function set(data) {
            this.menus = data.menus;
            this.roleMenus = data.roleMenus;
            this.rolePermissions = data.rolePermissions;
            this.permissions = data.permissions;
            this.role = data.role;
        },
        update: function update() {
            var _this2 = this;

            axios.post(route('system.roles.setPermissions', [this.roleId], false), this.postParams()).then(function (_ref2) {
                var data = _ref2.data;

                _this2.$toastr.success(data.message);
            }).catch(function (error) {
                return _this2.handleError(error);
            });
        },
        postParams: function postParams() {
            return {
                roleMenus: this.roleMenus,
                rolePermissions: this.rolePermissions
            };
        }
    }
});

/***/ }),

/***/ 1595:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1596)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1598)
/* template */
var __vue_template__ = __webpack_require__(1602)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-79e7e87f"
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
Component.options.__file = "resources/assets/js/components/enso/rolemanager/CheckboxManager.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-79e7e87f", Component.options)
  } else {
    hotAPI.reload("data-v-79e7e87f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1596:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1597);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("d5f380d6", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79e7e87f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CheckboxManager.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79e7e87f\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CheckboxManager.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1597:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.field[data-v-79e7e87f] {\n    width: 15px;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/rolemanager/resources/assets/js/components/enso/rolemanager/CheckboxManager.vue"],"names":[],"mappings":";AA+IA;IACA,YAAA;CACA","file":"CheckboxManager.vue","sourcesContent":["<template>\n\n    <card :title=\"title\"\n        collapsed\n        :nested=\"nested\"\n        ref=\"card\"\n        :controls=\"1\"\n        @shrink=\"$emit('shrink', $event)\"\n        @extend=\"$emit('extend', $event)\">\n        <card-control slot=\"control-1\">\n            <div class=\"field\">\n                <input type=\"checkbox\"\n                    :id=\"'checkbox-' + _uid\"\n                    :name=\"'checkbox-' + _uid\"\n                    class=\"is-checkradio is-info\"\n                    @change=\"updateBelow\">\n                <label :for=\"'checkbox-' + _uid\"></label>\n            </div>\n        </card-control>\n        <div class=\"has-padding-medium\">\n            <checkbox-manager v-for=\"group in sortedGroups\"\n                ref=\"children\"\n                nested\n                @shrink=\"$refs.card.shrink($event)\"\n                @extend=\"$refs.card.extend($event)\"\n                :title=\"group\"\n                :key=\"group\"\n                :group-data=\"groupData[group]\"\n                :role-permissions=\"rolePermissions\"\n                @update=\"update\">\n            </checkbox-manager>\n            <manager-content v-if=\"isRoot\"\n                ref=\"content\"\n                :group-data=\"groupData\"\n                :role-permissions=\"rolePermissions\"\n                @checked=\"setChecked\"\n                @indeterminate=\"setIndeterminate\"\n                @unchecked=\"setUnchecked\">\n            </manager-content>\n        </div>\n    </card>\n\n</template>\n\n<script>\n\nimport Card from '../bulma/Card.vue';\nimport CardControl from '../bulma/CardControl.vue';\nimport ManagerContent from './ManagerContent.vue';\n\nexport default {\n    name: 'CheckboxManager',\n\n    components: { Card, CardControl, ManagerContent },\n\n    props: {\n        title: {\n            type: String,\n            required: true,\n        },\n        groupData: {\n            required: true,\n        },\n        rolePermissions: {\n            type: Array,\n            required: true,\n        },\n        nested: {\n            type: Boolean,\n            default: false,\n        },\n    },\n\n    computed: {\n        isRoot() {\n            return Array.isArray(this.groupData);\n        },\n        sortedGroups() {\n            return this.isRoot ? [] : Object.keys(this.groupData).sort();\n        },\n        checkbox() {\n            return this.$el.querySelector('input[type=checkbox]');\n        },\n    },\n\n    methods: {\n        setChecked() {\n            this.checkbox.indeterminate = false;\n            this.checkbox.checked = true;\n            this.$emit('update');\n        },\n        setIndeterminate() {\n            this.checkbox.checked = false;\n            this.checkbox.indeterminate = true;\n            this.$emit('update');\n        },\n        setUnchecked() {\n            this.checkbox.checked = false;\n            this.checkbox.indeterminate = false;\n            this.$emit('update');\n        },\n        update() {\n            const checked = this.$refs.children.filter(child => child.checkbox.checked).length;\n\n            if (checked === this.$refs.children.length) {\n                this.setChecked();\n                return;\n            }\n\n            const indeterminate = this.$refs.children\n                .filter(child => child.checkbox.indeterminate).length;\n\n            if (checked || indeterminate) {\n                this.setIndeterminate();\n                return;\n            }\n\n            this.setUnchecked();\n        },\n        updateBelow() {\n            return this.isRoot\n                ? this.updateContent()\n                : this.updateChildren();\n        },\n        updateContent() {\n            return this.checkbox.checked\n                ? this.$refs.content.setAllChecked()\n                : this.$refs.content.setAllUnchecked();\n        },\n        updateChildren() {\n            const self = this;\n\n            this.$refs.children.forEach((child) => {\n                child.checkbox.checked = self.checkbox.checked;\n                child.updateBelow();\n            });\n        },\n    },\n};\n\n</script>\n\n<style scoped>\n\n    .field {\n        width: 15px;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1598:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bulma_Card_vue__ = __webpack_require__(1074);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bulma_Card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bulma_Card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bulma_CardControl_vue__ = __webpack_require__(1073);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__bulma_CardControl_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__bulma_CardControl_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ManagerContent_vue__ = __webpack_require__(1599);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ManagerContent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__ManagerContent_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'CheckboxManager',

    components: { Card: __WEBPACK_IMPORTED_MODULE_0__bulma_Card_vue___default.a, CardControl: __WEBPACK_IMPORTED_MODULE_1__bulma_CardControl_vue___default.a, ManagerContent: __WEBPACK_IMPORTED_MODULE_2__ManagerContent_vue___default.a },

    props: {
        title: {
            type: String,
            required: true
        },
        groupData: {
            required: true
        },
        rolePermissions: {
            type: Array,
            required: true
        },
        nested: {
            type: Boolean,
            default: false
        }
    },

    computed: {
        isRoot: function isRoot() {
            return Array.isArray(this.groupData);
        },
        sortedGroups: function sortedGroups() {
            return this.isRoot ? [] : Object.keys(this.groupData).sort();
        },
        checkbox: function checkbox() {
            return this.$el.querySelector('input[type=checkbox]');
        }
    },

    methods: {
        setChecked: function setChecked() {
            this.checkbox.indeterminate = false;
            this.checkbox.checked = true;
            this.$emit('update');
        },
        setIndeterminate: function setIndeterminate() {
            this.checkbox.checked = false;
            this.checkbox.indeterminate = true;
            this.$emit('update');
        },
        setUnchecked: function setUnchecked() {
            this.checkbox.checked = false;
            this.checkbox.indeterminate = false;
            this.$emit('update');
        },
        update: function update() {
            var checked = this.$refs.children.filter(function (child) {
                return child.checkbox.checked;
            }).length;

            if (checked === this.$refs.children.length) {
                this.setChecked();
                return;
            }

            var indeterminate = this.$refs.children.filter(function (child) {
                return child.checkbox.indeterminate;
            }).length;

            if (checked || indeterminate) {
                this.setIndeterminate();
                return;
            }

            this.setUnchecked();
        },
        updateBelow: function updateBelow() {
            return this.isRoot ? this.updateContent() : this.updateChildren();
        },
        updateContent: function updateContent() {
            return this.checkbox.checked ? this.$refs.content.setAllChecked() : this.$refs.content.setAllUnchecked();
        },
        updateChildren: function updateChildren() {
            var self = this;

            this.$refs.children.forEach(function (child) {
                child.checkbox.checked = self.checkbox.checked;
                child.updateBelow();
            });
        }
    }
});

/***/ }),

/***/ 1599:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1600)
/* template */
var __vue_template__ = __webpack_require__(1601)
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
Component.options.__file = "resources/assets/js/components/enso/rolemanager/ManagerContent.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-03d55887", Component.options)
  } else {
    hotAPI.reload("data-v-03d55887", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1600:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_v_tooltip__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(9);
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







__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_3__fortawesome_fontawesome_free_solid_shakable_es__["L" /* faExclamationTriangle */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'ManagerContent',

    directives: { tooltip: __WEBPACK_IMPORTED_MODULE_1_v_tooltip__["b" /* VTooltip */] },

    props: {
        groupData: {
            required: true
        },
        rolePermissions: {
            type: Array,
            required: true
        }
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__']), {
        permissionIds: function permissionIds() {
            return this.groupData.map(function (group) {
                return group.id;
            });
        },
        status: function status() {
            if (this.checkedIds.length === this.permissionIds.length) {
                return 'checked';
            }

            if (this.checkedIds.length === 0) {
                return 'unchecked';
            }

            return 'indeterminate';
        }
    }),

    watch: {
        status: {
            handler: function handler() {
                this.$emit(this.status);
            }
        },
        checkedIds: function checkedIds() {
            this.removeGroupPermissions();
            this.addCheckedPermissions();
        }
    },

    data: function data() {
        return {
            checkedIds: []
        };
    },
    created: function created() {
        this.setCheckedIds();
    },


    methods: {
        setCheckedIds: function setCheckedIds() {
            var self = this;
            this.checkedIds = this.permissionIds.filter(function (id) {
                return self.rolePermissions.indexOf(id) > -1;
            });
        },
        setAllChecked: function setAllChecked() {
            this.checkedIds = JSON.parse(JSON.stringify(this.permissionIds));
            this.checkIfEmpty();
        },
        setAllUnchecked: function setAllUnchecked() {
            this.checkedIds = [];
            this.checkIfEmpty();
        },
        getClass: function getClass(entry) {
            if (!Object.prototype.hasOwnProperty.call(entry, 'type')) {
                return null;
            }

            return entry.type === 1 ? 'has-text-warning' : 'has-text-success';
        },
        checkIfEmpty: function checkIfEmpty() {
            if (this.groupData.length === 0) {
                this.$emit(this.status);
            }
        },
        removeGroupPermissions: function removeGroupPermissions() {
            var self = this;

            this.permissionIds.forEach(function (id) {
                var idx = self.rolePermissions.indexOf(id);

                if (idx !== -1) {
                    self.rolePermissions.splice(idx, 1);
                }
            });
        },
        addCheckedPermissions: function addCheckedPermissions() {
            var self = this;

            this.checkedIds.forEach(function (id) {
                self.rolePermissions.push(id);
            });
        }
    },

    mounted: function mounted() {
        this.checkIfEmpty();
    }
});

/***/ }),

/***/ 1601:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columns is-multiline has-padding-medium" },
    _vm._l(_vm.groupData, function(entry, index) {
      return _c("div", { key: index, staticClass: "column is-half" }, [
        _c("div", { staticClass: "field" }, [
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.checkedIds,
                expression: "checkedIds"
              }
            ],
            staticClass: "is-checkradio",
            attrs: {
              type: "checkbox",
              id: "checkbox-" + entry.name,
              name: "checkbox-" + entry.name
            },
            domProps: {
              value: entry.id,
              checked: Array.isArray(_vm.checkedIds)
                ? _vm._i(_vm.checkedIds, entry.id) > -1
                : _vm.checkedIds
            },
            on: {
              change: function($event) {
                var $$a = _vm.checkedIds,
                  $$el = $event.target,
                  $$c = $$el.checked ? true : false
                if (Array.isArray($$a)) {
                  var $$v = entry.id,
                    $$i = _vm._i($$a, $$v)
                  if ($$el.checked) {
                    $$i < 0 && (_vm.checkedIds = $$a.concat([$$v]))
                  } else {
                    $$i > -1 &&
                      (_vm.checkedIds = $$a
                        .slice(0, $$i)
                        .concat($$a.slice($$i + 1)))
                  }
                } else {
                  _vm.checkedIds = $$c
                }
              }
            }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "checkbox-" + entry.name } }, [
            _c("span", { class: _vm.getClass(entry) }, [
              _vm._v(
                "\n                        " +
                  _vm._s(entry.description || entry.name) +
                  "\n                    "
              )
            ]),
            _vm._v(" "),
            entry.default
              ? _c(
                  "span",
                  {
                    directives: [
                      {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: _vm.__("Default"),
                        expression: "__('Default')"
                      }
                    ],
                    staticClass:
                      "icon is-small has-text-info has-margin-left-medium"
                  },
                  [_c("fa", { attrs: { icon: "exclamation-triangle" } })],
                  1
                )
              : _vm._e()
          ])
        ])
      ])
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-03d55887", module.exports)
  }
}

/***/ }),

/***/ 1602:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "card",
    {
      ref: "card",
      attrs: {
        title: _vm.title,
        collapsed: "",
        nested: _vm.nested,
        controls: 1
      },
      on: {
        shrink: function($event) {
          _vm.$emit("shrink", $event)
        },
        extend: function($event) {
          _vm.$emit("extend", $event)
        }
      }
    },
    [
      _c("card-control", { attrs: { slot: "control-1" }, slot: "control-1" }, [
        _c("div", { staticClass: "field" }, [
          _c("input", {
            staticClass: "is-checkradio is-info",
            attrs: {
              type: "checkbox",
              id: "checkbox-" + _vm._uid,
              name: "checkbox-" + _vm._uid
            },
            on: { change: _vm.updateBelow }
          }),
          _vm._v(" "),
          _c("label", { attrs: { for: "checkbox-" + _vm._uid } })
        ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "has-padding-medium" },
        [
          _vm._l(_vm.sortedGroups, function(group) {
            return _c("checkbox-manager", {
              key: group,
              ref: "children",
              refInFor: true,
              attrs: {
                nested: "",
                title: group,
                "group-data": _vm.groupData[group],
                "role-permissions": _vm.rolePermissions
              },
              on: {
                shrink: function($event) {
                  _vm.$refs.card.shrink($event)
                },
                extend: function($event) {
                  _vm.$refs.card.extend($event)
                },
                update: _vm.update
              }
            })
          }),
          _vm._v(" "),
          _vm.isRoot
            ? _c("manager-content", {
                ref: "content",
                attrs: {
                  "group-data": _vm.groupData,
                  "role-permissions": _vm.rolePermissions
                },
                on: {
                  checked: _vm.setChecked,
                  indeterminate: _vm.setIndeterminate,
                  unchecked: _vm.setUnchecked
                }
              })
            : _vm._e()
        ],
        2
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-79e7e87f", module.exports)
  }
}

/***/ }),

/***/ 1603:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns is-centered" }, [
    _c("div", { staticClass: "column is-three-quarters" }, [
      _vm.initialised
        ? _c(
            "div",
            { staticClass: "animated fadeIn" },
            [
              _c("center", { staticClass: "has-padding-bottom-large" }, [
                _c("h5", { staticClass: "title is-5" }, [
                  _vm._v(_vm._s(_vm.role.display_name))
                ])
              ]),
              _vm._v(" "),
              _vm.menus.length
                ? _c("checkbox-manager", {
                    attrs: {
                      title: _vm.__("Menus"),
                      "role-permissions": _vm.roleMenus,
                      "group-data": _vm.menus
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.menus.length
                ? _c("checkbox-manager", {
                    attrs: {
                      title: _vm.__("Permisssions"),
                      "role-permissions": _vm.rolePermissions,
                      "group-data": _vm.permissions
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass:
                    "button is-success has-margin-top-large is-pulled-right",
                  on: { click: _vm.update }
                },
                [
                  _vm._v(
                    "\n                " +
                      _vm._s(_vm.__("Update")) +
                      "\n            "
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "is-clearfix" })
            ],
            1
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-75906a71", module.exports)
  }
}

/***/ }),

/***/ 951:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1594)
/* template */
var __vue_template__ = __webpack_require__(1603)
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
Component.options.__file = "resources/assets/js/pages/system/roles/Configure.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-75906a71", Component.options)
  } else {
    hotAPI.reload("data-v-75906a71", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkQ29udHJvbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWU/YTVlOCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZT9kY2Y4Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZENvbnRyb2wudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmRDb250cm9sLnZ1ZT9iYmZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlPzRiODIiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL3JvbGVzL0NvbmZpZ3VyZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9DaGVja2JveE1hbmFnZXIudnVlP2MzYmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZT85ODg5Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9DaGVja2JveE1hbmFnZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL01hbmFnZXJDb250ZW50LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvTWFuYWdlckNvbnRlbnQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL01hbmFnZXJDb250ZW50LnZ1ZT80OTZiIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWU/MGE5NiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9Db25maWd1cmUudnVlPzFmNGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vcm9sZXMvQ29uZmlndXJlLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDZDQUFpVjtBQUNqVjtBQUNBLCtDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLDBCQUF3TTtBQUN4TTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkJBQTZCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7OztBQ3JFQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7QUFDQSwrQ0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEIiwiZmlsZSI6IjI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NhcmRDb250cm9sLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzBhNTgzNTBcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DYXJkQ29udHJvbC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZENvbnRyb2wudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTcwYTU4MzUwXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzBhNTgzNTBcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmRDb250cm9sLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA3M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDI5IDMwIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNWEwZWExNlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NhcmQudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjVhMGVhMTZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOnRydWUsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NhcmQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi1mNWEwZWExNlwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi1mNWEwZWExNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LWY1YTBlYTE2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDI5IDMwIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY1YTBlYTE2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2FyZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImM0MGYxMmU0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY1YTBlYTE2XFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2FyZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjVhMGVhMTZcXFwiLFxcXCJzY29wZWRcXFwiOnRydWUsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DYXJkLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1mNWEwZWExNlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA3NlxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDI5IDMwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5jYXJkLWNvbnRlbnRbZGF0YS12LWY1YTBlYTE2XSB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogbWF4LWhlaWdodCAuNDAwcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IC40MDBzIGVhc2U7XFxuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG59XFxuLmljb24uYW5nbGVbYXJpYS1oaWRkZW49XFxcInRydWVcXFwiXVtkYXRhLXYtZjVhMGVhMTZdIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxufVxcbi5pY29uLmFuZ2xlW2RhdGEtdi1mNWEwZWExNl0ge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZOQTtJQUNBLDBDQUFBO0lBQUEsa0NBQUE7SUFDQSxtQkFBQTtDQUNBO0FBRUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLGlEQUFBO0lBQUEseUNBQUE7SUFBQSxpQ0FBQTtJQUFBLCtEQUFBO0NBQ0FcIixcImZpbGVcIjpcIkNhcmQudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZFxcXCI+XFxuICAgICAgICA8aGVhZGVyIGNsYXNzPVxcXCJjYXJkLWhlYWRlclxcXCJcXG4gICAgICAgICAgICB2LWlmPVxcXCJoZWFkZXJcXFwiPlxcbiAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJjYXJkLWhlYWRlci10aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsIGhhcy1tYXJnaW4tcmlnaHQtc21hbGxcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cXFwiaWNvblxcXCI+PC9mYT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXMtY2xpY2thYmxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJ0b2dnbGUoKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcIiFmaXhlZCAmJiB0aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7eyB0aXRsZSB9fVxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZS1pZj1cXFwidGl0bGVcXFwiPnt7IHRpdGxlIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoYXMtdmVydGljYWxseS1jZW50ZXJlZC1jb250ZW50XFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJzZWFyY2hcXFwiPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpbnB1dCBpcy1zbWFsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJxdWVyeVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XFxcIiRlbWl0KCdxdWVyeS11cGRhdGUnLCBxdWVyeSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtc21hbGwgaXMtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XFxcInNlYXJjaFxcXCI+PC9mYT5cXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxzbG90IHYtZm9yPVxcXCJpIGluIGNvbnRyb2xzXFxcIlxcbiAgICAgICAgICAgICAgICA6bmFtZT1cXFwiJ2NvbnRyb2wtJyArIGlcXFwiPlxcbiAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgICAgICA8Y2FyZC1jb250cm9sXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImJhZGdlICE9PSBudWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhZyBpcy1saW5rXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7IGJhZGdlIH19XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2NhcmQtY29udHJvbD5cXG4gICAgICAgICAgICA8Y2FyZC1jb250cm9sXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcInJlZnJlc2hcXFwiXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ3JlZnJlc2gnKVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVxcXCJzeW5jXFxcIj48L2ZhPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9jYXJkLWNvbnRyb2w+XFxuICAgICAgICAgICAgPGNhcmQtY29udHJvbFxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCIhZml4ZWRcXFwiXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwidG9nZ2xlKClcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBhbmdsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDphcmlhLWhpZGRlbj1cXFwiIWV4cGFuZGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVxcXCJhbmdsZS1kb3duXFxcIj48L2ZhPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9jYXJkLWNvbnRyb2w+XFxuICAgICAgICAgICAgPGNhcmQtY29udHJvbFxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJyZW1vdmFibGVcXFwiXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZGVzdHJveSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRlbGV0ZSBpcy1zbWFsbFxcXCI+PC9hPlxcbiAgICAgICAgICAgIDwvY2FyZC1jb250cm9sPlxcbiAgICAgICAgPC9oZWFkZXI+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnQgaXMtcGFkZGluZ2xlc3NcXFwiXFxuICAgICAgICAgICAgOnN0eWxlPVxcXCJjb250ZW50U3R5bGVcXFwiPlxcbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPHNsb3QgbmFtZT1cXFwiZm9vdGVyXFxcIj48L3Nsb3Q+XFxuXFxuICAgICAgICA8b3ZlcmxheSBzaXplPVxcXCJtZWRpdW1cXFwiIHYtaWY9XFxcIm92ZXJsYXlcXFwiPjwvb3ZlcmxheT5cXG4gICAgPC9kaXY+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xcbmltcG9ydCB7IGZhU2VhcmNoLCBmYVN5bmMsIGZhQW5nbGVEb3duIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xcbmltcG9ydCBDYXJkQ29udHJvbCBmcm9tICcuL0NhcmRDb250cm9sLnZ1ZSc7XFxuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5LnZ1ZSc7XFxuXFxuZm9udGF3ZXNvbWUubGlicmFyeS5hZGQoZmFTZWFyY2gsIGZhU3luYywgZmFBbmdsZURvd24pO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0NhcmQnLFxcblxcbiAgICBjb21wb25lbnRzOiB7IENhcmRDb250cm9sLCBPdmVybGF5IH0sXFxuXFxuICAgIHByb3BzOiB7XFxuICAgICAgICBuZXN0ZWQ6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbGxhcHNlZDoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgaWNvbjoge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICAgICAgc2VhcmNoOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBiYWRnZToge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHJlZnJlc2g6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZpeGVkOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICByZW1vdmFibGU6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbnRyb2xzOiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXFxuICAgICAgICB9LFxcbiAgICAgICAgb3ZlcmxheToge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgc2VhcmNoSW5wdXQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoXFxuICAgICAgICAgICAgICAgID8gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1zZWFyY2hdJylcXG4gICAgICAgICAgICAgICAgOiBudWxsO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGhlYWRlcigpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pY29uIHx8IHRoaXMudGl0bGUgfHwgdGhpcy5zZWFyY2hcXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5iYWRnZSB8fCB0aGlzLnJlZnJlc2ggfHwgIXRoaXMuZml4ZWRcXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5yZW1vdmFibGUgfHwgdGhpcy5jb250cm9scztcXG4gICAgICAgIH0sXFxuICAgICAgICBjb250ZW50KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250ZW50Jyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgY29udGVudFN0eWxlKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZFxcbiAgICAgICAgICAgICAgICA/IHsgJ21heC1oZWlnaHQnOiAwIH1cXG4gICAgICAgICAgICAgICAgOiBudWxsO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgcXVlcnk6IG51bGwsXFxuICAgICAgICAgICAgZXhwYW5kZWQ6ICF0aGlzLmNvbGxhcHNlZCxcXG4gICAgICAgIH07XFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIHRvZ2dsZSgpIHtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd0b2dnbGUnKTtcXG5cXG4gICAgICAgICAgICBpZiAodGhpcy5leHBhbmRlZCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlKCk7XFxuICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgdGhpcy5leHBhbmQoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBleHBhbmQoKSB7XFxuICAgICAgICAgICAgaWYgKHRoaXMubmVzdGVkKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2V4dGVuZCcsIHRoaXMuY29udGVudC5zY3JvbGxIZWlnaHQpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdleHBhbmQnKTtcXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSA9IGAke3RoaXMuY29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSB0cnVlO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbGxhcHNlKCkge1xcbiAgICAgICAgICAgIGlmICghdGhpcy5jb250ZW50LnN0eWxlWydtYXgtaGVpZ2h0J10pIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlWydtYXgtaGVpZ2h0J10gPSBgJHt0aGlzLmNvbnRlbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgaWYgKHRoaXMubmVzdGVkKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NocmluaycsIHRoaXMuY29udGVudC5zY3JvbGxIZWlnaHQpO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb2xsYXBzZScpO1xcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyB0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSA9IDA7IH0sIDEpO1xcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kZWQgPSBmYWxzZTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzaHJpbmsoaGVpZ2h0KSB7XFxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlWydtYXgtaGVpZ2h0J10gPSBgJHtwYXJzZUludCh0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSwgMTApIC0gaGVpZ2h0fXB4YDtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZW1pdCgnc2hyaW5rJywgaGVpZ2h0KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBleHRlbmQoaGVpZ2h0KSB7XFxuICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlWydtYXgtaGVpZ2h0J10gPSBgJHtwYXJzZUludCh0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSwgMTApICsgaGVpZ2h0fXB4YDtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZW1pdCgnZXh0ZW5kJywgaGVpZ2h0KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBmb2N1cygpIHtcXG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0LmZvY3VzKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgY2xlYXJRdWVyeSgpIHtcXG4gICAgICAgICAgICB0aGlzLnF1ZXJ5ID0gbnVsbDtcXG4gICAgICAgIH0sXFxuICAgICAgICBkZXN0cm95KCkge1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3JlbW92ZScpO1xcbiAgICAgICAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4kZWwpO1xcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc2NvcGVkPlxcblxcbiAgICAuY2FyZC1jb250ZW50IHtcXG4gICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgLjQwMHMgZWFzZTtcXG4gICAgICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcXG4gICAgfVxcblxcbiAgICAuaWNvbi5hbmdsZVthcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIH1cXG5cXG4gICAgLmljb24uYW5nbGUge1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIH1cXG5cXG48L3N0eWxlPlxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1mNWEwZWExNlwiLFwic2NvcGVkXCI6dHJ1ZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDI5IDMwIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cImNhcmQtaGVhZGVyXCJcbiAgICAgICAgICAgIHYtaWY9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1oZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaGFzLW1hcmdpbi1yaWdodC1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxmYSA6aWNvbj1cImljb25cIj48L2ZhPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlzLWNsaWNrYWJsZVwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZSgpXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFmaXhlZCAmJiB0aXRsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UtaWY9XCJ0aXRsZVwiPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhcy12ZXJ0aWNhbGx5LWNlbnRlcmVkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJzZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzZWFyY2hcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dCBpcy1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ3F1ZXJ5LXVwZGF0ZScsIHF1ZXJ5KVwiPlxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJzZWFyY2hcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c2xvdCB2LWZvcj1cImkgaW4gY29udHJvbHNcIlxuICAgICAgICAgICAgICAgIDpuYW1lPVwiJ2NvbnRyb2wtJyArIGlcIj5cbiAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgIDxjYXJkLWNvbnRyb2xcbiAgICAgICAgICAgICAgICB2LWlmPVwiYmFkZ2UgIT09IG51bGxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyBpcy1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGJhZGdlIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9jYXJkLWNvbnRyb2w+XG4gICAgICAgICAgICA8Y2FyZC1jb250cm9sXG4gICAgICAgICAgICAgICAgdi1pZj1cInJlZnJlc2hcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdyZWZyZXNoJylcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJzeW5jXCI+PC9mYT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2NhcmQtY29udHJvbD5cbiAgICAgICAgICAgIDxjYXJkLWNvbnRyb2xcbiAgICAgICAgICAgICAgICB2LWlmPVwiIWZpeGVkXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGUoKVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgIDphcmlhLWhpZGRlbj1cIiFleHBhbmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cImFuZ2xlLWRvd25cIj48L2ZhPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvY2FyZC1jb250cm9sPlxuICAgICAgICAgICAgPGNhcmQtY29udHJvbFxuICAgICAgICAgICAgICAgIHYtaWY9XCJyZW1vdmFibGVcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cImRlc3Ryb3koKVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZGVsZXRlIGlzLXNtYWxsXCI+PC9hPlxuICAgICAgICAgICAgPC9jYXJkLWNvbnRyb2w+XG4gICAgICAgIDwvaGVhZGVyPlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnQgaXMtcGFkZGluZ2xlc3NcIlxuICAgICAgICAgICAgOnN0eWxlPVwiY29udGVudFN0eWxlXCI+XG4gICAgICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJmb290ZXJcIj48L3Nsb3Q+XG5cbiAgICAgICAgPG92ZXJsYXkgc2l6ZT1cIm1lZGl1bVwiIHYtaWY9XCJvdmVybGF5XCI+PC9vdmVybGF5PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lJztcbmltcG9ydCB7IGZhU2VhcmNoLCBmYVN5bmMsIGZhQW5nbGVEb3duIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xuaW1wb3J0IENhcmRDb250cm9sIGZyb20gJy4vQ2FyZENvbnRyb2wudnVlJztcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheS52dWUnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYVNlYXJjaCwgZmFTeW5jLCBmYUFuZ2xlRG93bik7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ2FyZCcsXG5cbiAgICBjb21wb25lbnRzOiB7IENhcmRDb250cm9sLCBPdmVybGF5IH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICBuZXN0ZWQ6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgY29sbGFwc2VkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgc2VhcmNoOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGJhZGdlOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICByZWZyZXNoOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGZpeGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92YWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBjb250cm9sczoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBzZWFyY2hJbnB1dCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFxuICAgICAgICAgICAgICAgID8gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1zZWFyY2hdJylcbiAgICAgICAgICAgICAgICA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcigpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmljb24gfHwgdGhpcy50aXRsZSB8fCB0aGlzLnNlYXJjaFxuICAgICAgICAgICAgICAgIHx8IHRoaXMuYmFkZ2UgfHwgdGhpcy5yZWZyZXNoIHx8ICF0aGlzLmZpeGVkXG4gICAgICAgICAgICAgICAgfHwgdGhpcy5yZW1vdmFibGUgfHwgdGhpcy5jb250cm9scztcbiAgICAgICAgfSxcbiAgICAgICAgY29udGVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCcuY2FyZC1jb250ZW50Jyk7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRlbnRTdHlsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZFxuICAgICAgICAgICAgICAgID8geyAnbWF4LWhlaWdodCc6IDAgfVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBudWxsLFxuICAgICAgICAgICAgZXhwYW5kZWQ6ICF0aGlzLmNvbGxhcHNlZCxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICB0b2dnbGUoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd0b2dnbGUnKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZXhwYW5kZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLmV4cGFuZCgpO1xuICAgICAgICB9LFxuICAgICAgICBleHBhbmQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5uZXN0ZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdleHRlbmQnLCB0aGlzLmNvbnRlbnQuc2Nyb2xsSGVpZ2h0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZXhwYW5kJyk7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSA9IGAke3RoaXMuY29udGVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgICAgICAgdGhpcy5leHBhbmRlZCA9IHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIGNvbGxhcHNlKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZVsnbWF4LWhlaWdodCddID0gYCR7dGhpcy5jb250ZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm5lc3RlZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3NocmluaycsIHRoaXMuY29udGVudC5zY3JvbGxIZWlnaHQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb2xsYXBzZScpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRoaXMuY29udGVudC5zdHlsZVsnbWF4LWhlaWdodCddID0gMDsgfSwgMSk7XG4gICAgICAgICAgICB0aGlzLmV4cGFuZGVkID0gZmFsc2U7XG4gICAgICAgIH0sXG4gICAgICAgIHNocmluayhoZWlnaHQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5zdHlsZVsnbWF4LWhlaWdodCddID0gYCR7cGFyc2VJbnQodGhpcy5jb250ZW50LnN0eWxlWydtYXgtaGVpZ2h0J10sIDEwKSAtIGhlaWdodH1weGA7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kZW1pdCgnc2hyaW5rJywgaGVpZ2h0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZXh0ZW5kKGhlaWdodCkge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LnN0eWxlWydtYXgtaGVpZ2h0J10gPSBgJHtwYXJzZUludCh0aGlzLmNvbnRlbnQuc3R5bGVbJ21heC1oZWlnaHQnXSwgMTApICsgaGVpZ2h0fXB4YDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbWl0KCdleHRlbmQnLCBoZWlnaHQpO1xuICAgICAgICB9LFxuICAgICAgICBmb2N1cygpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJRdWVyeSgpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgncmVtb3ZlJyk7XG4gICAgICAgICAgICB0aGlzLiRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuJGVsKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbiAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAuNDAwcyBlYXNlO1xuICAgICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgfVxuXG4gICAgLmljb24uYW5nbGVbYXJpYS1oaWRkZW49XCJ0cnVlXCJdIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAuaWNvbi5hbmdsZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxhIGNsYXNzPVwiY2FyZC1oZWFkZXItaWNvblwiXG4gICAgICAgIHYtb249XCIkbGlzdGVuZXJzXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2E+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ2FyZENvbnRyb2wnLFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZENvbnRyb2wudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImFcIixcbiAgICBfdm0uX2coeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlci1pY29uXCIgfSwgX3ZtLiRsaXN0ZW5lcnMpLFxuICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzBhNTgzNTBcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTcwYTU4MzUwXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZENvbnRyb2wudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDgwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAzIDQgMjkgMzAiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSxcbiAgICBbXG4gICAgICBfdm0uaGVhZGVyXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImhlYWRlclwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5pY29uXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBoYXMtbWFyZ2luLXJpZ2h0LXNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJmYVwiLCB7IGF0dHJzOiB7IGljb246IF92bS5pY29uIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICFfdm0uZml4ZWQgJiYgX3ZtLnRpdGxlXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlzLWNsaWNrYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfdm0udGl0bGVcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uc2VhcmNoXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoYXMtdmVydGljYWxseS1jZW50ZXJlZC1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgaXMtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzZWFyY2hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnF1ZXJ5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucXVlcnkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInF1ZXJ5LXVwZGF0ZVwiLCBfdm0ucXVlcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcInNlYXJjaFwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uY29udHJvbHMsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLl90KFwiY29udHJvbC1cIiArIGkpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uYmFkZ2UgIT09IG51bGxcbiAgICAgICAgICAgICAgICA/IF9jKFwiY2FyZC1jb250cm9sXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFnIGlzLWxpbmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmJhZGdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5yZWZyZXNoXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjYXJkLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInJlZnJlc2hcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJzeW5jXCIgfSB9KV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgIV92bS5maXhlZFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiY2FyZC1jb250cm9sXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGFuZ2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IFwiYXJpYS1oaWRkZW5cIjogIV92bS5leHBhbmRlZCB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcImFuZ2xlLWRvd25cIiB9IH0pXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucmVtb3ZhYmxlXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJjYXJkLWNvbnRyb2xcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJkZWxldGUgaXMtc21hbGxcIiB9KV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnQgaXMtcGFkZGluZ2xlc3NcIiwgc3R5bGU6IF92bS5jb250ZW50U3R5bGUgfSxcbiAgICAgICAgW192bS5fdChcImRlZmF1bHRcIildLFxuICAgICAgICAyXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF92bS5fdChcImZvb3RlclwiKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0ub3ZlcmxheSA/IF9jKFwib3ZlcmxheVwiLCB7IGF0dHJzOiB7IHNpemU6IFwibWVkaXVtXCIgfSB9KSA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAyXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZjVhMGVhMTZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWY1YTBlYTE2XCIsXCJoYXNTY29wZWRcIjp0cnVlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA4MVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMyA0IDI5IDMwIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtY2VudGVyZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy10aHJlZS1xdWFydGVyc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuaW1hdGVkIGZhZGVJblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImluaXRpYWxpc2VkXCI+XG4gICAgICAgICAgICAgICAgPGNlbnRlciBjbGFzcz1cImhhcy1wYWRkaW5nLWJvdHRvbS1sYXJnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0aXRsZSBpcy01XCI+e3sgcm9sZS5kaXNwbGF5X25hbWUgfX08L2g1PlxuICAgICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgICAgIDxjaGVja2JveC1tYW5hZ2VyIDp0aXRsZT1cIl9fKCdNZW51cycpXCJcbiAgICAgICAgICAgICAgICAgICAgOnJvbGUtcGVybWlzc2lvbnM9XCJyb2xlTWVudXNcIlxuICAgICAgICAgICAgICAgICAgICA6Z3JvdXAtZGF0YT1cIm1lbnVzXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIm1lbnVzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgIDwvY2hlY2tib3gtbWFuYWdlcj5cblxuICAgICAgICAgICAgICAgIDxjaGVja2JveC1tYW5hZ2VyIDp0aXRsZT1cIl9fKCdQZXJtaXNzc2lvbnMnKVwiXG4gICAgICAgICAgICAgICAgICAgIDpyb2xlLXBlcm1pc3Npb25zPVwicm9sZVBlcm1pc3Npb25zXCJcbiAgICAgICAgICAgICAgICAgICAgOmdyb3VwLWRhdGE9XCJwZXJtaXNzaW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJtZW51cy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICA8L2NoZWNrYm94LW1hbmFnZXI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zdWNjZXNzIGhhcy1tYXJnaW4tdG9wLWxhcmdlIGlzLXB1bGxlZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInVwZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBfXyhcIlVwZGF0ZVwiKSB9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpcy1jbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCBDaGVja2JveE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBDaGVja2JveE1hbmFnZXIgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb2xlSWQ6IHRoaXMuJHJvdXRlLnBhcmFtcy5yb2xlLFxuICAgICAgICAgICAgcm9sZToge30sXG4gICAgICAgICAgICBtZW51czogW10sXG4gICAgICAgICAgICBwZXJtaXNzaW9uczoge30sXG4gICAgICAgICAgICByb2xlTWVudXM6IFtdLFxuICAgICAgICAgICAgcm9sZVBlcm1pc3Npb25zOiBbXSxcbiAgICAgICAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXQoKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQocm91dGUoJ3N5c3RlbS5yb2xlcy5nZXRQZXJtaXNzaW9ucycsIFt0aGlzLnJvbGVJZF0sIGZhbHNlKSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMubWVudXMgPSBkYXRhLm1lbnVzO1xuICAgICAgICAgICAgdGhpcy5yb2xlTWVudXMgPSBkYXRhLnJvbGVNZW51cztcbiAgICAgICAgICAgIHRoaXMucm9sZVBlcm1pc3Npb25zID0gZGF0YS5yb2xlUGVybWlzc2lvbnM7XG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gZGF0YS5wZXJtaXNzaW9ucztcbiAgICAgICAgICAgIHRoaXMucm9sZSA9IGRhdGEucm9sZTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgYXhpb3MucG9zdChyb3V0ZSgnc3lzdGVtLnJvbGVzLnNldFBlcm1pc3Npb25zJywgW3RoaXMucm9sZUlkXSwgZmFsc2UpLCB0aGlzLnBvc3RQYXJhbXMoKSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiR0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0UGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByb2xlTWVudXM6IHRoaXMucm9sZU1lbnVzLFxuICAgICAgICAgICAgICAgIHJvbGVQZXJtaXNzaW9uczogdGhpcy5yb2xlUGVybWlzc2lvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9Db25maWd1cmUudnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03OWU3ZTg3ZlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NoZWNrYm94TWFuYWdlci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NoZWNrYm94TWFuYWdlci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTc5ZTdlODdmXFxcIixcXFwiaGFzU2NvcGVkXFxcIjp0cnVlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DaGVja2JveE1hbmFnZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBcImRhdGEtdi03OWU3ZTg3ZlwiXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9DaGVja2JveE1hbmFnZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc5ZTdlODdmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzllN2U4N2ZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE1OTVcbi8vIG1vZHVsZSBjaHVua3MgPSAyOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03OWU3ZTg3ZlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NoZWNrYm94TWFuYWdlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImQ1ZjM4MGQ2XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc5ZTdlODdmXFxcIixcXFwic2NvcGVkXFxcIjp0cnVlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2hlY2tib3hNYW5hZ2VyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03OWU3ZTg3ZlxcXCIsXFxcInNjb3BlZFxcXCI6dHJ1ZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NoZWNrYm94TWFuYWdlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzllN2U4N2ZcIixcInNjb3BlZFwiOnRydWUsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTU5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDI5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5maWVsZFtkYXRhLXYtNzllN2U4N2ZdIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStJQTtJQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ2hlY2tib3hNYW5hZ2VyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxjYXJkIDp0aXRsZT1cXFwidGl0bGVcXFwiXFxuICAgICAgICBjb2xsYXBzZWRcXG4gICAgICAgIDpuZXN0ZWQ9XFxcIm5lc3RlZFxcXCJcXG4gICAgICAgIHJlZj1cXFwiY2FyZFxcXCJcXG4gICAgICAgIDpjb250cm9scz1cXFwiMVxcXCJcXG4gICAgICAgIEBzaHJpbms9XFxcIiRlbWl0KCdzaHJpbmsnLCAkZXZlbnQpXFxcIlxcbiAgICAgICAgQGV4dGVuZD1cXFwiJGVtaXQoJ2V4dGVuZCcsICRldmVudClcXFwiPlxcbiAgICAgICAgPGNhcmQtY29udHJvbCBzbG90PVxcXCJjb250cm9sLTFcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImZpZWxkXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcImNoZWNrYm94XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmlkPVxcXCInY2hlY2tib3gtJyArIF91aWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cXFwiJ2NoZWNrYm94LScgKyBfdWlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlzLWNoZWNrcmFkaW8gaXMtaW5mb1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XFxcInVwZGF0ZUJlbG93XFxcIj5cXG4gICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XFxcIidjaGVja2JveC0nICsgX3VpZFxcXCI+PC9sYWJlbD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvY2FyZC1jb250cm9sPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGFzLXBhZGRpbmctbWVkaXVtXFxcIj5cXG4gICAgICAgICAgICA8Y2hlY2tib3gtbWFuYWdlciB2LWZvcj1cXFwiZ3JvdXAgaW4gc29ydGVkR3JvdXBzXFxcIlxcbiAgICAgICAgICAgICAgICByZWY9XFxcImNoaWxkcmVuXFxcIlxcbiAgICAgICAgICAgICAgICBuZXN0ZWRcXG4gICAgICAgICAgICAgICAgQHNocmluaz1cXFwiJHJlZnMuY2FyZC5zaHJpbmsoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgQGV4dGVuZD1cXFwiJHJlZnMuY2FyZC5leHRlbmQoJGV2ZW50KVxcXCJcXG4gICAgICAgICAgICAgICAgOnRpdGxlPVxcXCJncm91cFxcXCJcXG4gICAgICAgICAgICAgICAgOmtleT1cXFwiZ3JvdXBcXFwiXFxuICAgICAgICAgICAgICAgIDpncm91cC1kYXRhPVxcXCJncm91cERhdGFbZ3JvdXBdXFxcIlxcbiAgICAgICAgICAgICAgICA6cm9sZS1wZXJtaXNzaW9ucz1cXFwicm9sZVBlcm1pc3Npb25zXFxcIlxcbiAgICAgICAgICAgICAgICBAdXBkYXRlPVxcXCJ1cGRhdGVcXFwiPlxcbiAgICAgICAgICAgIDwvY2hlY2tib3gtbWFuYWdlcj5cXG4gICAgICAgICAgICA8bWFuYWdlci1jb250ZW50IHYtaWY9XFxcImlzUm9vdFxcXCJcXG4gICAgICAgICAgICAgICAgcmVmPVxcXCJjb250ZW50XFxcIlxcbiAgICAgICAgICAgICAgICA6Z3JvdXAtZGF0YT1cXFwiZ3JvdXBEYXRhXFxcIlxcbiAgICAgICAgICAgICAgICA6cm9sZS1wZXJtaXNzaW9ucz1cXFwicm9sZVBlcm1pc3Npb25zXFxcIlxcbiAgICAgICAgICAgICAgICBAY2hlY2tlZD1cXFwic2V0Q2hlY2tlZFxcXCJcXG4gICAgICAgICAgICAgICAgQGluZGV0ZXJtaW5hdGU9XFxcInNldEluZGV0ZXJtaW5hdGVcXFwiXFxuICAgICAgICAgICAgICAgIEB1bmNoZWNrZWQ9XFxcInNldFVuY2hlY2tlZFxcXCI+XFxuICAgICAgICAgICAgPC9tYW5hZ2VyLWNvbnRlbnQ+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9jYXJkPlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9idWxtYS9DYXJkLnZ1ZSc7XFxuaW1wb3J0IENhcmRDb250cm9sIGZyb20gJy4uL2J1bG1hL0NhcmRDb250cm9sLnZ1ZSc7XFxuaW1wb3J0IE1hbmFnZXJDb250ZW50IGZyb20gJy4vTWFuYWdlckNvbnRlbnQudnVlJztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIG5hbWU6ICdDaGVja2JveE1hbmFnZXInLFxcblxcbiAgICBjb21wb25lbnRzOiB7IENhcmQsIENhcmRDb250cm9sLCBNYW5hZ2VyQ29udGVudCB9LFxcblxcbiAgICBwcm9wczoge1xcbiAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgZ3JvdXBEYXRhOiB7XFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgcm9sZVBlcm1pc3Npb25zOiB7XFxuICAgICAgICAgICAgdHlwZTogQXJyYXksXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgbmVzdGVkOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICBpc1Jvb3QoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkodGhpcy5ncm91cERhdGEpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNvcnRlZEdyb3VwcygpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Jvb3QgPyBbXSA6IE9iamVjdC5rZXlzKHRoaXMuZ3JvdXBEYXRhKS5zb3J0KCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgY2hlY2tib3goKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBzZXRDaGVja2VkKCkge1xcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0SW5kZXRlcm1pbmF0ZSgpIHtcXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNldFVuY2hlY2tlZCgpIHtcXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICB1cGRhdGUoKSB7XFxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuJHJlZnMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNoZWNrYm94LmNoZWNrZWQpLmxlbmd0aDtcXG5cXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCA9PT0gdGhpcy4kcmVmcy5jaGlsZHJlbi5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDaGVja2VkKCk7XFxuICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgY29uc3QgaW5kZXRlcm1pbmF0ZSA9IHRoaXMuJHJlZnMuY2hpbGRyZW5cXG4gICAgICAgICAgICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jaGVja2JveC5pbmRldGVybWluYXRlKS5sZW5ndGg7XFxuXFxuICAgICAgICAgICAgaWYgKGNoZWNrZWQgfHwgaW5kZXRlcm1pbmF0ZSkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUoKTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLnNldFVuY2hlY2tlZCgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHVwZGF0ZUJlbG93KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUm9vdFxcbiAgICAgICAgICAgICAgICA/IHRoaXMudXBkYXRlQ29udGVudCgpXFxuICAgICAgICAgICAgICAgIDogdGhpcy51cGRhdGVDaGlsZHJlbigpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHVwZGF0ZUNvbnRlbnQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tib3guY2hlY2tlZFxcbiAgICAgICAgICAgICAgICA/IHRoaXMuJHJlZnMuY29udGVudC5zZXRBbGxDaGVja2VkKClcXG4gICAgICAgICAgICAgICAgOiB0aGlzLiRyZWZzLmNvbnRlbnQuc2V0QWxsVW5jaGVja2VkKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdXBkYXRlQ2hpbGRyZW4oKSB7XFxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XFxuXFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xcbiAgICAgICAgICAgICAgICBjaGlsZC5jaGVja2JveC5jaGVja2VkID0gc2VsZi5jaGVja2JveC5jaGVja2VkO1xcbiAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGVCZWxvdygpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZSBzY29wZWQ+XFxuXFxuICAgIC5maWVsZCB7XFxuICAgICAgICB3aWR0aDogMTVweDtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTc5ZTdlODdmXCIsXCJzY29wZWRcIjp0cnVlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE1OTdcbi8vIG1vZHVsZSBjaHVua3MgPSAyOSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxjYXJkIDp0aXRsZT1cInRpdGxlXCJcbiAgICAgICAgY29sbGFwc2VkXG4gICAgICAgIDpuZXN0ZWQ9XCJuZXN0ZWRcIlxuICAgICAgICByZWY9XCJjYXJkXCJcbiAgICAgICAgOmNvbnRyb2xzPVwiMVwiXG4gICAgICAgIEBzaHJpbms9XCIkZW1pdCgnc2hyaW5rJywgJGV2ZW50KVwiXG4gICAgICAgIEBleHRlbmQ9XCIkZW1pdCgnZXh0ZW5kJywgJGV2ZW50KVwiPlxuICAgICAgICA8Y2FyZC1jb250cm9sIHNsb3Q9XCJjb250cm9sLTFcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCInY2hlY2tib3gtJyArIF91aWRcIlxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cIidjaGVja2JveC0nICsgX3VpZFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaXMtY2hlY2tyYWRpbyBpcy1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInVwZGF0ZUJlbG93XCI+XG4gICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCInY2hlY2tib3gtJyArIF91aWRcIj48L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvY2FyZC1jb250cm9sPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGFzLXBhZGRpbmctbWVkaXVtXCI+XG4gICAgICAgICAgICA8Y2hlY2tib3gtbWFuYWdlciB2LWZvcj1cImdyb3VwIGluIHNvcnRlZEdyb3Vwc1wiXG4gICAgICAgICAgICAgICAgcmVmPVwiY2hpbGRyZW5cIlxuICAgICAgICAgICAgICAgIG5lc3RlZFxuICAgICAgICAgICAgICAgIEBzaHJpbms9XCIkcmVmcy5jYXJkLnNocmluaygkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBAZXh0ZW5kPVwiJHJlZnMuY2FyZC5leHRlbmQoJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgOnRpdGxlPVwiZ3JvdXBcIlxuICAgICAgICAgICAgICAgIDprZXk9XCJncm91cFwiXG4gICAgICAgICAgICAgICAgOmdyb3VwLWRhdGE9XCJncm91cERhdGFbZ3JvdXBdXCJcbiAgICAgICAgICAgICAgICA6cm9sZS1wZXJtaXNzaW9ucz1cInJvbGVQZXJtaXNzaW9uc1wiXG4gICAgICAgICAgICAgICAgQHVwZGF0ZT1cInVwZGF0ZVwiPlxuICAgICAgICAgICAgPC9jaGVja2JveC1tYW5hZ2VyPlxuICAgICAgICAgICAgPG1hbmFnZXItY29udGVudCB2LWlmPVwiaXNSb290XCJcbiAgICAgICAgICAgICAgICByZWY9XCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICA6Z3JvdXAtZGF0YT1cImdyb3VwRGF0YVwiXG4gICAgICAgICAgICAgICAgOnJvbGUtcGVybWlzc2lvbnM9XCJyb2xlUGVybWlzc2lvbnNcIlxuICAgICAgICAgICAgICAgIEBjaGVja2VkPVwic2V0Q2hlY2tlZFwiXG4gICAgICAgICAgICAgICAgQGluZGV0ZXJtaW5hdGU9XCJzZXRJbmRldGVybWluYXRlXCJcbiAgICAgICAgICAgICAgICBAdW5jaGVja2VkPVwic2V0VW5jaGVja2VkXCI+XG4gICAgICAgICAgICA8L21hbmFnZXItY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9jYXJkPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgQ2FyZCBmcm9tICcuLi9idWxtYS9DYXJkLnZ1ZSc7XG5pbXBvcnQgQ2FyZENvbnRyb2wgZnJvbSAnLi4vYnVsbWEvQ2FyZENvbnRyb2wudnVlJztcbmltcG9ydCBNYW5hZ2VyQ29udGVudCBmcm9tICcuL01hbmFnZXJDb250ZW50LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ2hlY2tib3hNYW5hZ2VyJyxcblxuICAgIGNvbXBvbmVudHM6IHsgQ2FyZCwgQ2FyZENvbnRyb2wsIE1hbmFnZXJDb250ZW50IH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB0aXRsZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwRGF0YToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGVQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgbmVzdGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGlzUm9vdCgpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5pc0FycmF5KHRoaXMuZ3JvdXBEYXRhKTtcbiAgICAgICAgfSxcbiAgICAgICAgc29ydGVkR3JvdXBzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSb290ID8gW10gOiBPYmplY3Qua2V5cyh0aGlzLmdyb3VwRGF0YSkuc29ydCgpO1xuICAgICAgICB9LFxuICAgICAgICBjaGVja2JveCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPWNoZWNrYm94XScpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldENoZWNrZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0SW5kZXRlcm1pbmF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGVja2JveC5pbmRldGVybWluYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRVbmNoZWNrZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoZWNrZWQgPSB0aGlzLiRyZWZzLmNoaWxkcmVuLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jaGVja2JveC5jaGVja2VkKS5sZW5ndGg7XG5cbiAgICAgICAgICAgIGlmIChjaGVja2VkID09PSB0aGlzLiRyZWZzLmNoaWxkcmVuLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2hlY2tlZCgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgaW5kZXRlcm1pbmF0ZSA9IHRoaXMuJHJlZnMuY2hpbGRyZW5cbiAgICAgICAgICAgICAgICAuZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNoZWNrYm94LmluZGV0ZXJtaW5hdGUpLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGNoZWNrZWQgfHwgaW5kZXRlcm1pbmF0ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5kZXRlcm1pbmF0ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5zZXRVbmNoZWNrZWQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQmVsb3coKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Jvb3RcbiAgICAgICAgICAgICAgICA/IHRoaXMudXBkYXRlQ29udGVudCgpXG4gICAgICAgICAgICAgICAgOiB0aGlzLnVwZGF0ZUNoaWxkcmVuKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUNvbnRlbnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja2JveC5jaGVja2VkXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRyZWZzLmNvbnRlbnQuc2V0QWxsQ2hlY2tlZCgpXG4gICAgICAgICAgICAgICAgOiB0aGlzLiRyZWZzLmNvbnRlbnQuc2V0QWxsVW5jaGVja2VkKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZUNoaWxkcmVuKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuJHJlZnMuY2hpbGRyZW4uZm9yRWFjaCgoY2hpbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjaGlsZC5jaGVja2JveC5jaGVja2VkID0gc2VsZi5jaGVja2JveC5jaGVja2VkO1xuICAgICAgICAgICAgICAgIGNoaWxkLnVwZGF0ZUJlbG93KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG5cbiAgICAuZmllbGQge1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NYW5hZ2VyQ29udGVudC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAzZDU1ODg3XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTWFuYWdlckNvbnRlbnQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL01hbmFnZXJDb250ZW50LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wM2Q1NTg4N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAzZDU1ODg3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9NYW5hZ2VyQ29udGVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1OTlcbi8vIG1vZHVsZSBjaHVua3MgPSAyOSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBoYXMtcGFkZGluZy1tZWRpdW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1oYWxmXCJcbiAgICAgICAgICAgIHYtZm9yPVwiKGVudHJ5LCBpbmRleCkgaW4gZ3JvdXBEYXRhXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCInY2hlY2tib3gtJyArIGVudHJ5Lm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cIidjaGVja2JveC0nICsgZW50cnkubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImVudHJ5LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoZWNrZWRJZHNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlzLWNoZWNrcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCInY2hlY2tib3gtJyArIGVudHJ5Lm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cImdldENsYXNzKGVudHJ5KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVudHJ5LmRlc2NyaXB0aW9uIHx8IGVudHJ5Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBoYXMtdGV4dC1pbmZvIGhhcy1tYXJnaW4tbGVmdC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJlbnRyeS5kZWZhdWx0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXRvb2x0aXA9XCJfXygnRGVmYXVsdCcpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJleGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvZmE+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCB7IFZUb29sdGlwIH0gZnJvbSAndi10b29sdGlwJztcbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFFeGNsYW1hdGlvblRyaWFuZ2xlIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xuXG5mb250YXdlc29tZS5saWJyYXJ5LmFkZChmYUV4Y2xhbWF0aW9uVHJpYW5nbGUpO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ01hbmFnZXJDb250ZW50JyxcblxuICAgIGRpcmVjdGl2ZXM6IHsgdG9vbHRpcDogVlRvb2x0aXAgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGdyb3VwRGF0YToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHJvbGVQZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgLi4ubWFwR2V0dGVycygnbG9jYWxlJywgWydfXyddKSxcbiAgICAgICAgcGVybWlzc2lvbklkcygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdyb3VwRGF0YS5tYXAoZ3JvdXAgPT4gZ3JvdXAuaWQpO1xuICAgICAgICB9LFxuICAgICAgICBzdGF0dXMoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkSWRzLmxlbmd0aCA9PT0gdGhpcy5wZXJtaXNzaW9uSWRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAnY2hlY2tlZCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWRJZHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICd1bmNoZWNrZWQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gJ2luZGV0ZXJtaW5hdGUnO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICBzdGF0dXM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCh0aGlzLnN0YXR1cyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBjaGVja2VkSWRzKCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVHcm91cFBlcm1pc3Npb25zKCk7XG4gICAgICAgICAgICB0aGlzLmFkZENoZWNrZWRQZXJtaXNzaW9ucygpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hlY2tlZElkczogW10sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIHRoaXMuc2V0Q2hlY2tlZElkcygpO1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHNldENoZWNrZWRJZHMoKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZElkcyA9IHRoaXMucGVybWlzc2lvbklkc1xuICAgICAgICAgICAgICAgIC5maWx0ZXIoaWQgPT4gc2VsZi5yb2xlUGVybWlzc2lvbnMuaW5kZXhPZihpZCkgPiAtMSk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldEFsbENoZWNrZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRJZHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMucGVybWlzc2lvbklkcykpO1xuICAgICAgICAgICAgdGhpcy5jaGVja0lmRW1wdHkoKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QWxsVW5jaGVja2VkKCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkSWRzID0gW107XG4gICAgICAgICAgICB0aGlzLmNoZWNrSWZFbXB0eSgpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRDbGFzcyhlbnRyeSkge1xuICAgICAgICAgICAgaWYgKCFPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoZW50cnksICd0eXBlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGVudHJ5LnR5cGUgPT09IDEgPyAnaGFzLXRleHQtd2FybmluZycgOiAnaGFzLXRleHQtc3VjY2Vzcyc7XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrSWZFbXB0eSgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdyb3VwRGF0YS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KHRoaXMuc3RhdHVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgcmVtb3ZlR3JvdXBQZXJtaXNzaW9ucygpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25JZHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBzZWxmLnJvbGVQZXJtaXNzaW9ucy5pbmRleE9mKGlkKTtcblxuICAgICAgICAgICAgICAgIGlmIChpZHggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucm9sZVBlcm1pc3Npb25zLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBhZGRDaGVja2VkUGVybWlzc2lvbnMoKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5jaGVja2VkSWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgc2VsZi5yb2xlUGVybWlzc2lvbnMucHVzaChpZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5jaGVja0lmRW1wdHkoKTtcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvTWFuYWdlckNvbnRlbnQudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tdWx0aWxpbmUgaGFzLXBhZGRpbmctbWVkaXVtXCIgfSxcbiAgICBfdm0uX2woX3ZtLmdyb3VwRGF0YSwgZnVuY3Rpb24oZW50cnksIGluZGV4KSB7XG4gICAgICByZXR1cm4gX2MoXCJkaXZcIiwgeyBrZXk6IGluZGV4LCBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtaGFsZlwiIH0sIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZFwiIH0sIFtcbiAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrZWRJZHMsXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJjaGVja2VkSWRzXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlzLWNoZWNrcmFkaW9cIixcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgaWQ6IFwiY2hlY2tib3gtXCIgKyBlbnRyeS5uYW1lLFxuICAgICAgICAgICAgICBuYW1lOiBcImNoZWNrYm94LVwiICsgZW50cnkubmFtZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiBlbnRyeS5pZCxcbiAgICAgICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uY2hlY2tlZElkcylcbiAgICAgICAgICAgICAgICA/IF92bS5faShfdm0uY2hlY2tlZElkcywgZW50cnkuaWQpID4gLTFcbiAgICAgICAgICAgICAgICA6IF92bS5jaGVja2VkSWRzXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2hhbmdlOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICB2YXIgJCRhID0gX3ZtLmNoZWNrZWRJZHMsXG4gICAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KCQkYSkpIHtcbiAgICAgICAgICAgICAgICAgIHZhciAkJHYgPSBlbnRyeS5pZCxcbiAgICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgICAkJGkgPCAwICYmIChfdm0uY2hlY2tlZElkcyA9ICQkYS5jb25jYXQoWyQkdl0pKVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAoX3ZtLmNoZWNrZWRJZHMgPSAkJGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zbGljZSgwLCAkJGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIF92bS5jaGVja2VkSWRzID0gJCRjXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImNoZWNrYm94LVwiICsgZW50cnkubmFtZSB9IH0sIFtcbiAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IGNsYXNzOiBfdm0uZ2V0Q2xhc3MoZW50cnkpIH0sIFtcbiAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKGVudHJ5LmRlc2NyaXB0aW9uIHx8IGVudHJ5Lm5hbWUpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBlbnRyeS5kZWZhdWx0XG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwidG9vbHRpcFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uX18oXCJEZWZhdWx0XCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJfXygnRGVmYXVsdCcpXCJcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgIFwiaWNvbiBpcy1zbWFsbCBoYXMtdGV4dC1pbmZvIGhhcy1tYXJnaW4tbGVmdC1tZWRpdW1cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcImZhXCIsIHsgYXR0cnM6IHsgaWNvbjogXCJleGNsYW1hdGlvbi10cmlhbmdsZVwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIH0pXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDNkNTU4ODdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTAzZDU1ODg3XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvTWFuYWdlckNvbnRlbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNjAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMjkiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiY2FyZFwiLFxuICAgIHtcbiAgICAgIHJlZjogXCJjYXJkXCIsXG4gICAgICBhdHRyczoge1xuICAgICAgICB0aXRsZTogX3ZtLnRpdGxlLFxuICAgICAgICBjb2xsYXBzZWQ6IFwiXCIsXG4gICAgICAgIG5lc3RlZDogX3ZtLm5lc3RlZCxcbiAgICAgICAgY29udHJvbHM6IDFcbiAgICAgIH0sXG4gICAgICBvbjoge1xuICAgICAgICBzaHJpbms6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgIF92bS4kZW1pdChcInNocmlua1wiLCAkZXZlbnQpXG4gICAgICAgIH0sXG4gICAgICAgIGV4dGVuZDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgX3ZtLiRlbWl0KFwiZXh0ZW5kXCIsICRldmVudClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJjYXJkLWNvbnRyb2xcIiwgeyBhdHRyczogeyBzbG90OiBcImNvbnRyb2wtMVwiIH0sIHNsb3Q6IFwiY29udHJvbC0xXCIgfSwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkXCIgfSwgW1xuICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXMtY2hlY2tyYWRpbyBpcy1pbmZvXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIGlkOiBcImNoZWNrYm94LVwiICsgX3ZtLl91aWQsXG4gICAgICAgICAgICAgIG5hbWU6IFwiY2hlY2tib3gtXCIgKyBfdm0uX3VpZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnVwZGF0ZUJlbG93IH1cbiAgICAgICAgICB9KSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBhdHRyczogeyBmb3I6IFwiY2hlY2tib3gtXCIgKyBfdm0uX3VpZCB9IH0pXG4gICAgICAgIF0pXG4gICAgICBdKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoYXMtcGFkZGluZy1tZWRpdW1cIiB9LFxuICAgICAgICBbXG4gICAgICAgICAgX3ZtLl9sKF92bS5zb3J0ZWRHcm91cHMsIGZ1bmN0aW9uKGdyb3VwKSB7XG4gICAgICAgICAgICByZXR1cm4gX2MoXCJjaGVja2JveC1tYW5hZ2VyXCIsIHtcbiAgICAgICAgICAgICAga2V5OiBncm91cCxcbiAgICAgICAgICAgICAgcmVmOiBcImNoaWxkcmVuXCIsXG4gICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIG5lc3RlZDogXCJcIixcbiAgICAgICAgICAgICAgICB0aXRsZTogZ3JvdXAsXG4gICAgICAgICAgICAgICAgXCJncm91cC1kYXRhXCI6IF92bS5ncm91cERhdGFbZ3JvdXBdLFxuICAgICAgICAgICAgICAgIFwicm9sZS1wZXJtaXNzaW9uc1wiOiBfdm0ucm9sZVBlcm1pc3Npb25zXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgc2hyaW5rOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kcmVmcy5jYXJkLnNocmluaygkZXZlbnQpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHRlbmQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRyZWZzLmNhcmQuZXh0ZW5kKCRldmVudClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogX3ZtLnVwZGF0ZVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmlzUm9vdFxuICAgICAgICAgICAgPyBfYyhcIm1hbmFnZXItY29udGVudFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcImNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJncm91cC1kYXRhXCI6IF92bS5ncm91cERhdGEsXG4gICAgICAgICAgICAgICAgICBcInJvbGUtcGVybWlzc2lvbnNcIjogX3ZtLnJvbGVQZXJtaXNzaW9uc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5zZXRDaGVja2VkLFxuICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZTogX3ZtLnNldEluZGV0ZXJtaW5hdGUsXG4gICAgICAgICAgICAgICAgICB1bmNoZWNrZWQ6IF92bS5zZXRVbmNoZWNrZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03OWU3ZTg3ZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzllN2U4N2ZcIixcImhhc1Njb3BlZFwiOnRydWUsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWVcbi8vIG1vZHVsZSBpZCA9IDE2MDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyOSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLWNlbnRlcmVkXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLXRocmVlLXF1YXJ0ZXJzXCIgfSwgW1xuICAgICAgX3ZtLmluaXRpYWxpc2VkXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJhbmltYXRlZCBmYWRlSW5cIiB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfYyhcImNlbnRlclwiLCB7IHN0YXRpY0NsYXNzOiBcImhhcy1wYWRkaW5nLWJvdHRvbS1sYXJnZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgaXMtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnJvbGUuZGlzcGxheV9uYW1lKSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLm1lbnVzLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gX2MoXCJjaGVja2JveC1tYW5hZ2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLl9fKFwiTWVudXNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb2xlLXBlcm1pc3Npb25zXCI6IF92bS5yb2xlTWVudXMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJncm91cC1kYXRhXCI6IF92bS5tZW51c1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5tZW51cy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IF9jKFwiY2hlY2tib3gtbWFuYWdlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS5fXyhcIlBlcm1pc3NzaW9uc1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcInJvbGUtcGVybWlzc2lvbnNcIjogX3ZtLnJvbGVQZXJtaXNzaW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICBcImdyb3VwLWRhdGFcIjogX3ZtLnBlcm1pc3Npb25zXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgXCJidXR0b24gaXMtc3VjY2VzcyBoYXMtbWFyZ2luLXRvcC1sYXJnZSBpcy1wdWxsZWQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0udXBkYXRlIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJVcGRhdGVcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlzLWNsZWFyZml4XCIgfSlcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAxXG4gICAgICAgICAgKVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzU5MDZhNzFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTc1OTA2YTcxXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vcm9sZXMvQ29uZmlndXJlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTYwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDI5IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NvbmZpZ3VyZS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTc1OTA2YTcxXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ29uZmlndXJlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9Db25maWd1cmUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTc1OTA2YTcxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNzU5MDZhNzFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL3JvbGVzL0NvbmZpZ3VyZS52dWVcbi8vIG1vZHVsZSBpZCA9IDk1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDI5Il0sInNvdXJjZVJvb3QiOiIifQ==