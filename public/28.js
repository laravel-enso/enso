webpackJsonp([28],{

/***/ 1086:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1535)
/* template */
var __vue_template__ = __webpack_require__(1544)
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


/***/ }),

/***/ 1206:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1208)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1210)
/* template */
var __vue_template__ = __webpack_require__(1211)
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

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1209);
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

/***/ 1209:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.icon.angle[aria-hidden=\"true\"] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.icon.angle {\n    -webkit-transition: -webkit-transform .300s ease;\n    transition: -webkit-transform .300s ease;\n    transition: transform .300s ease;\n    transition: transform .300s ease, -webkit-transform .300s ease;\n}\n.card-content {\n    padding: 0;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/bulma/resources/assets/js/components/enso/bulma/Card.vue"],"names":[],"mappings":";AAmMA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,iDAAA;IAAA,yCAAA;IAAA,iCAAA;IAAA,+DAAA;CACA;AAEA;IACA,WAAA;CACA","file":"Card.vue","sourcesContent":["<template>\n\n    <div class=\"card\">\n        <header class=\"card-header\"\n            v-if=\"header\">\n            <p class=\"card-header-title\">\n                <span class=\"icon is-small has-margin-right-small\"\n                    v-if=\"icon\">\n                    <i :class=\"icon\"></i>\n                </span>\n                <span class=\"is-clickable\"\n                    @click=\"toggle()\"\n                    v-if=\"collapsible\">\n                    {{ title }}\n                </span>\n                <span v-else>{{ title }}</span>\n            </p>\n            <div class=\"has-vertically-centered-content\"\n                v-if=\"search\">\n                <p class=\"control has-icons-left\">\n                <input type=\"search\"\n                    class=\"input is-small\"\n                    v-model=\"query\"\n                    @input=\"$emit('query-update', query)\">\n                <span class=\"icon is-small is-left\">\n                    <i class=\"fas fa-search\"></i>\n                </span>\n                </p>\n            </div>\n            <slot v-for=\"i in controls\"\n                :name=\"'control-' + i\">\n            </slot>\n            <a class=\"card-header-icon\"\n                v-if=\"badge !== null\">\n                <span class=\"tag is-link\">\n                    {{ badge }}\n                </span>\n            </a>\n            <a class=\"card-header-icon\"\n                v-if=\"refresh\">\n                <span class=\"icon is-small\"\n                    @click=\"$emit('refresh')\">\n                    <i class=\"fas fa-sync\"></i>\n                </span>\n            </a>\n            <a class=\"card-header-icon\"\n                v-if=\"collapsible\">\n                <span class=\"icon angle\"\n                    :aria-hidden=\"collapsed\"\n                    @click=\"toggle()\">\n                    <i class=\"fas fa-angle-down\"></i>\n                </span>\n            </a>\n            <span class=\"card-header-icon\"\n                v-if=\"removable\"\n                @click=\"destroy()\">\n                <a class=\"delete is-small\"></a>\n            </span>\n        </header>\n\n        <div class=\"card-content\" v-show=\"!collapsed\">\n            <slot></slot>\n        </div>\n\n        <footer class=\"card-footer\" v-if=\"footer && !collapsed\">\n            <p v-for=\"i in footerItems\"\n                class=\"card-footer-item\"\n                :key=\"i\">\n                <slot :name=\"'footer-item-' + i\"></slot>\n            </p>\n        </footer>\n        <overlay size=\"medium\" v-if=\"overlay\"></overlay>\n    </div>\n\n</template>\n\n<script>\n\nimport Overlay from './Overlay.vue';\n\nexport default {\n    name: 'Card',\n\n    components: { Overlay },\n\n    props: {\n        open: {\n            type: Boolean,\n            default: true,\n        },\n        header: {\n            type: Boolean,\n            default: true,\n        },\n        footer: {\n            type: Boolean,\n            default: false,\n        },\n        footerItems: {\n            type: Number,\n            default: 0,\n        },\n        icon: {\n            type: String,\n            default: null,\n        },\n        title: {\n            type: String,\n            default: null,\n        },\n        search: {\n            type: Boolean,\n            default: false,\n        },\n        badge: {\n            type: Number,\n            default: null,\n        },\n        refresh: {\n            type: Boolean,\n            default: false,\n        },\n        collapsible: {\n            type: Boolean,\n            default: true,\n        },\n        removable: {\n            type: Boolean,\n            default: false,\n        },\n        overlay: {\n            type: Boolean,\n            default: false,\n        },\n        controls: {\n            type: Number,\n            default: 0,\n        },\n        bodyStyle: {\n            type: Object,\n            default() {\n                return {};\n            },\n        },\n    },\n\n    computed: {\n        searchInput() {\n            return this.search\n                ? this.$el.querySelector('input[type=search]')\n                : null;\n        },\n    },\n\n    data() {\n        return {\n            query: null,\n            collapsed: !this.open,\n        };\n    },\n\n    methods: {\n        toggle() {\n            this.$emit('toggle');\n            this.collapsed = !this.collapsed;\n\n            return this.collapsed\n                ? this.$emit('collapse')\n                : this.$emit('expand');\n        },\n        expand() {\n            this.collapsed = false;\n            this.$emit('expand');\n        },\n        collapse() {\n            this.collapsed = true;\n            this.$emit('collapse');\n        },\n        focus() {\n            this.searchInput.focus();\n        },\n        clearQuery() {\n            this.query = null;\n        },\n        destroy() {\n            this.$emit('remove');\n            this.$el.parentNode.removeChild(this.$el);\n            this.$destroy();\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .icon.angle[aria-hidden=\"true\"] {\n        transform: rotate(180deg);\n    }\n\n    .icon.angle {\n        transition: transform .300s ease;\n    }\n\n    .card-content {\n        padding: 0;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1210:
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

/***/ 1211:
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
                      [_c("i", { staticClass: "fas fa-sync" })]
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
                      [_c("i", { staticClass: "fas fa-angle-down" })]
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
      _c("i", { staticClass: "fas fa-search" })
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

/***/ 1535:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_rolemanager_CheckboxManager_vue__ = __webpack_require__(1536);
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

                toastr.success(data.message);
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

/***/ 1536:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1537)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1539)
/* template */
var __vue_template__ = __webpack_require__(1543)
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

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1538);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("fd8bd584", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79e7e87f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CheckboxManager.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-79e7e87f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./CheckboxManager.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1538:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\ndiv.field.checkbox-manager {\n    width: 15px;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/rolemanager/resources/assets/js/components/enso/rolemanager/CheckboxManager.vue"],"names":[],"mappings":";AAwIA;IACA,YAAA;CACA","file":"CheckboxManager.vue","sourcesContent":["<template>\n\n    <card :title=\"title\"\n        :open=\"false\"\n        ref=\"card\"\n        :controls=\"1\">\n        <a slot=\"control-1\" class=\"card-header-icon\">\n            <div class=\"checkbox-manager field\">\n                <input type=\"checkbox\"\n                    :id=\"'checkbox-' + _uid\"\n                    :name=\"'checkbox-' + _uid\"\n                    class=\"is-checkradio is-info\"\n                    @change=\"updateBelow\">\n                    <label :for=\"'checkbox-' + _uid\"></label>\n            </div>\n        </a>\n        <div class=\"has-padding-left-medium has-padding-top-medium has-padding-bottom-medium\">\n            <checkbox-manager v-for=\"group in sortedGroups\"\n                v-if=\"groupCount\"\n                ref=\"children\"\n                :title=\"group\"\n                :key=\"group\"\n                :group-data=\"groupData[group]\"\n                :role-permissions=\"rolePermissions\"\n                @update=\"update\">\n            </checkbox-manager>\n            <manager-content v-if=\"isRoot\"\n                ref=\"content\"\n                :group-data=\"groupData\"\n                :role-permissions=\"rolePermissions\"\n                @checked=\"setChecked\"\n                @indeterminate=\"setIndeterminate\"\n                @unchecked=\"setUnchecked\">\n            </manager-content>\n        </div>\n    </card>\n\n</template>\n\n<script>\n\nimport Card from '../bulma/Card.vue';\nimport ManagerContent from './ManagerContent.vue';\n\nexport default {\n    name: 'CheckboxManager',\n\n    components: { Card, ManagerContent },\n\n    props: {\n        title: {\n            type: String,\n            required: true,\n        },\n        groupData: {\n            required: true,\n        },\n        rolePermissions: {\n            type: Array,\n            required: true,\n        },\n    },\n\n    computed: {\n        isRoot() {\n            return Array.isArray(this.groupData);\n        },\n        groupCount() {\n            return this.isRoot ? null : Object.keys(this.groupData).length;\n        },\n        sortedGroups() {\n            return this.isRoot ? null : Object.keys(this.groupData).sort();\n        },\n        checkbox() {\n            return this.$el.querySelector('input[type=checkbox]');\n        },\n    },\n\n    methods: {\n        setChecked() {\n            this.checkbox.indeterminate = false;\n            this.checkbox.checked = true;\n            this.$emit('update');\n        },\n        setIndeterminate() {\n            this.checkbox.checked = false;\n            this.checkbox.indeterminate = true;\n            this.$emit('update');\n        },\n        setUnchecked() {\n            this.checkbox.checked = false;\n            this.checkbox.indeterminate = false;\n            this.$emit('update');\n        },\n        update() {\n            const checked = this.$refs.children.filter(child => child.checkbox.checked).length;\n\n            if (checked === this.$refs.children.length) {\n                this.setChecked();\n                return;\n            }\n\n            const indeterminate = this.$refs.children\n                .filter(child => child.checkbox.indeterminate).length;\n\n            if (checked || indeterminate) {\n                this.setIndeterminate();\n                return;\n            }\n\n            this.setUnchecked();\n        },\n        updateBelow() {\n            return this.isRoot\n                ? this.updateContent()\n                : this.updateChildren();\n        },\n        updateContent() {\n            return this.checkbox.checked\n                ? this.$refs.content.setAllChecked()\n                : this.$refs.content.setAllUnchecked();\n        },\n        updateChildren() {\n            const self = this;\n\n            this.$refs.children.forEach((child) => {\n                child.checkbox.checked = self.checkbox.checked;\n                child.updateBelow();\n            });\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    div.field.checkbox-manager {\n        width: 15px;\n    }\n</style>\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1539:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bulma_Card_vue__ = __webpack_require__(1206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bulma_Card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bulma_Card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ManagerContent_vue__ = __webpack_require__(1540);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ManagerContent_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__ManagerContent_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

    components: { Card: __WEBPACK_IMPORTED_MODULE_0__bulma_Card_vue___default.a, ManagerContent: __WEBPACK_IMPORTED_MODULE_1__ManagerContent_vue___default.a },

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
        }
    },

    computed: {
        isRoot: function isRoot() {
            return Array.isArray(this.groupData);
        },
        groupCount: function groupCount() {
            return this.isRoot ? null : Object.keys(this.groupData).length;
        },
        sortedGroups: function sortedGroups() {
            return this.isRoot ? null : Object.keys(this.groupData).sort();
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

/***/ 1540:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1541)
/* template */
var __vue_template__ = __webpack_require__(1542)
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

/***/ 1541:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_v_tooltip__ = __webpack_require__(148);
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

/***/ 1542:
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
                    staticClass: "icon has-text-info"
                  },
                  [
                    _c("i", {
                      staticClass: "is-icon fas fa-exclamation-triangle"
                    })
                  ]
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

/***/ 1543:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "card",
    { ref: "card", attrs: { title: _vm.title, open: false, controls: 1 } },
    [
      _c(
        "a",
        {
          staticClass: "card-header-icon",
          attrs: { slot: "control-1" },
          slot: "control-1"
        },
        [
          _c("div", { staticClass: "checkbox-manager field" }, [
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
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "has-padding-left-medium has-padding-top-medium has-padding-bottom-medium"
        },
        [
          _vm._l(_vm.sortedGroups, function(group) {
            return _vm.groupCount
              ? _c("checkbox-manager", {
                  key: group,
                  ref: "children",
                  refInFor: true,
                  attrs: {
                    title: group,
                    "group-data": _vm.groupData[group],
                    "role-permissions": _vm.rolePermissions
                  },
                  on: { update: _vm.update }
                })
              : _vm._e()
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
    ]
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

/***/ 1544:
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9Db25maWd1cmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlPzI3YjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWU/NjczMiIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWU/MWZiMiIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vcm9sZXMvQ29uZmlndXJlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9DaGVja2JveE1hbmFnZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWU/YzJiYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9DaGVja2JveE1hbmFnZXIudnVlP2M2M2QiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvTWFuYWdlckNvbnRlbnQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9NYW5hZ2VyQ29udGVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvTWFuYWdlckNvbnRlbnQudnVlPzQ5NmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZT9hYzU0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL3JvbGVzL0NvbmZpZ3VyZS52dWU/MWY0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDZDQUFpVjtBQUNqVjtBQUNBLCtDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5TTtBQUN6TTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7QUFDQSwrQ0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDZCQUE2QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ29uZmlndXJlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzU5MDZhNzFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Db25maWd1cmUudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL3JvbGVzL0NvbmZpZ3VyZS52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzU5MDZhNzFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03NTkwNmE3MVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vcm9sZXMvQ29uZmlndXJlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDI4IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNWEwZWExNlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DYXJkLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vQ2FyZC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWY1YTBlYTE2XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2FyZC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWY1YTBlYTE2XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZjVhMGVhMTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMjggMzAiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjVhMGVhMTZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2FyZC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjNkYTg3NzUzXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY1YTBlYTE2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NhcmQudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY1YTBlYTE2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NhcmQudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWY1YTBlYTE2XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIwOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDI4IDMwIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVxcXCJ0cnVlXFxcIl0ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG59XFxuLmljb24uYW5nbGUge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG59XFxuLmNhcmQtY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFtTUE7SUFDQSxrQ0FBQTtZQUFBLDBCQUFBO0NBQ0E7QUFFQTtJQUNBLGlEQUFBO0lBQUEseUNBQUE7SUFBQSxpQ0FBQTtJQUFBLCtEQUFBO0NBQ0E7QUFFQTtJQUNBLFdBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ2FyZC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIj5cXG4gICAgICAgIDxoZWFkZXIgY2xhc3M9XFxcImNhcmQtaGVhZGVyXFxcIlxcbiAgICAgICAgICAgIHYtaWY9XFxcImhlYWRlclxcXCI+XFxuICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNhcmQtaGVhZGVyLXRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtc21hbGwgaGFzLW1hcmdpbi1yaWdodC1zbWFsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVxcXCJpY29uXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImlzLWNsaWNrYWJsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwidG9nZ2xlKClcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJjb2xsYXBzaWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICB7eyB0aXRsZSB9fVxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT57eyB0aXRsZSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGFzLXZlcnRpY2FsbHktY2VudGVyZWQtY29udGVudFxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwic2VhcmNoXFxcIj5cXG4gICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImNvbnRyb2wgaGFzLWljb25zLWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwic2VhcmNoXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0IGlzLXNtYWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwicXVlcnlcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XFxcIiRlbWl0KCdxdWVyeS11cGRhdGUnLCBxdWVyeSlcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbCBpcy1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtc2VhcmNoXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxzbG90IHYtZm9yPVxcXCJpIGluIGNvbnRyb2xzXFxcIlxcbiAgICAgICAgICAgICAgICA6bmFtZT1cXFwiJ2NvbnRyb2wtJyArIGlcXFwiPlxcbiAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiY2FyZC1oZWFkZXItaWNvblxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiYmFkZ2UgIT09IG51bGxcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFnIGlzLWxpbmtcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAge3sgYmFkZ2UgfX1cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICA8YSBjbGFzcz1cXFwiY2FyZC1oZWFkZXItaWNvblxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwicmVmcmVzaFxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgncmVmcmVzaCcpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtc3luY1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJjYXJkLWhlYWRlci1pY29uXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJjb2xsYXBzaWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGFuZ2xlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmFyaWEtaGlkZGVuPVxcXCJjb2xsYXBzZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInRvZ2dsZSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtYW5nbGUtZG93blxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJjYXJkLWhlYWRlci1pY29uXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJyZW1vdmFibGVcXFwiXFxuICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZGVzdHJveSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcImRlbGV0ZSBpcy1zbWFsbFxcXCI+PC9hPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvaGVhZGVyPlxcblxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50XFxcIiB2LXNob3c9XFxcIiFjb2xsYXBzZWRcXFwiPlxcbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cXG4gICAgICAgIDwvZGl2PlxcblxcbiAgICAgICAgPGZvb3RlciBjbGFzcz1cXFwiY2FyZC1mb290ZXJcXFwiIHYtaWY9XFxcImZvb3RlciAmJiAhY29sbGFwc2VkXFxcIj5cXG4gICAgICAgICAgICA8cCB2LWZvcj1cXFwiaSBpbiBmb290ZXJJdGVtc1xcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImNhcmQtZm9vdGVyLWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgIDprZXk9XFxcImlcXFwiPlxcbiAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cXFwiJ2Zvb3Rlci1pdGVtLScgKyBpXFxcIj48L3Nsb3Q+XFxuICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgPC9mb290ZXI+XFxuICAgICAgICA8b3ZlcmxheSBzaXplPVxcXCJtZWRpdW1cXFwiIHYtaWY9XFxcIm92ZXJsYXlcXFwiPjwvb3ZlcmxheT5cXG4gICAgPC9kaXY+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCBPdmVybGF5IGZyb20gJy4vT3ZlcmxheS52dWUnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0NhcmQnLFxcblxcbiAgICBjb21wb25lbnRzOiB7IE92ZXJsYXkgfSxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIG9wZW46IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgaGVhZGVyOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZvb3Rlcjoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgZm9vdGVySXRlbXM6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgZGVmYXVsdDogMCxcXG4gICAgICAgIH0sXFxuICAgICAgICBpY29uOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICAgICAgdGl0bGU6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICBzZWFyY2g6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGJhZGdlOiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICAgICAgcmVmcmVzaDoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgY29sbGFwc2libGU6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgcmVtb3ZhYmxlOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBvdmVybGF5OiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBjb250cm9sczoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGJvZHlTdHlsZToge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICBzZWFyY2hJbnB1dCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hcXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXNlYXJjaF0nKVxcbiAgICAgICAgICAgICAgICA6IG51bGw7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBxdWVyeTogbnVsbCxcXG4gICAgICAgICAgICBjb2xsYXBzZWQ6ICF0aGlzLm9wZW4sXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICB0b2dnbGUoKSB7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndG9nZ2xlJyk7XFxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XFxuXFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sbGFwc2VkXFxuICAgICAgICAgICAgICAgID8gdGhpcy4kZW1pdCgnY29sbGFwc2UnKVxcbiAgICAgICAgICAgICAgICA6IHRoaXMuJGVtaXQoJ2V4cGFuZCcpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGV4cGFuZCgpIHtcXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IGZhbHNlO1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2V4cGFuZCcpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbGxhcHNlKCkge1xcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkID0gdHJ1ZTtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb2xsYXBzZScpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGZvY3VzKCkge1xcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuZm9jdXMoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBjbGVhclF1ZXJ5KCkge1xcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBudWxsO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGRlc3Ryb3koKSB7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgncmVtb3ZlJyk7XFxuICAgICAgICAgICAgdGhpcy4kZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLiRlbCk7XFxuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgLmljb24uYW5nbGVbYXJpYS1oaWRkZW49XFxcInRydWVcXFwiXSB7XFxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbiAgICB9XFxuXFxuICAgIC5pY29uLmFuZ2xlIHtcXG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbiAgICB9XFxuXFxuICAgIC5jYXJkLWNvbnRlbnQge1xcbiAgICAgICAgcGFkZGluZzogMDtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LWY1YTBlYTE2XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDI4IDMwIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgICAgPGhlYWRlciBjbGFzcz1cImNhcmQtaGVhZGVyXCJcbiAgICAgICAgICAgIHYtaWY9XCJoZWFkZXJcIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC1oZWFkZXItdGl0bGVcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaGFzLW1hcmdpbi1yaWdodC1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaXMtY2xpY2thYmxlXCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidG9nZ2xlKClcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwiY29sbGFwc2libGVcIj5cbiAgICAgICAgICAgICAgICAgICAge3sgdGl0bGUgfX1cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPnt7IHRpdGxlIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhhcy12ZXJ0aWNhbGx5LWNlbnRlcmVkLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJzZWFyY2hcIj5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInNlYXJjaFwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaW5wdXQgaXMtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgncXVlcnktdXBkYXRlJywgcXVlcnkpXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc2VhcmNoXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzbG90IHYtZm9yPVwiaSBpbiBjb250cm9sc1wiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCInY29udHJvbC0nICsgaVwiPlxuICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJjYXJkLWhlYWRlci1pY29uXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiYmFkZ2UgIT09IG51bGxcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyBpcy1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IGJhZGdlIH19XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgY2xhc3M9XCJjYXJkLWhlYWRlci1pY29uXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwicmVmcmVzaFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdyZWZyZXNoJylcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtc3luY1wiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImNhcmQtaGVhZGVyLWljb25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJjb2xsYXBzaWJsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgIDphcmlhLWhpZGRlbj1cImNvbGxhcHNlZFwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWFuZ2xlLWRvd25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJjYXJkLWhlYWRlci1pY29uXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwicmVtb3ZhYmxlXCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCJkZXN0cm95KClcIj5cbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRlbGV0ZSBpcy1zbWFsbFwiPjwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9oZWFkZXI+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiIHYtc2hvdz1cIiFjb2xsYXBzZWRcIj5cbiAgICAgICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cImNhcmQtZm9vdGVyXCIgdi1pZj1cImZvb3RlciAmJiAhY29sbGFwc2VkXCI+XG4gICAgICAgICAgICA8cCB2LWZvcj1cImkgaW4gZm9vdGVySXRlbXNcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2FyZC1mb290ZXItaXRlbVwiXG4gICAgICAgICAgICAgICAgOmtleT1cImlcIj5cbiAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cIidmb290ZXItaXRlbS0nICsgaVwiPjwvc2xvdD5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIDxvdmVybGF5IHNpemU9XCJtZWRpdW1cIiB2LWlmPVwib3ZlcmxheVwiPjwvb3ZlcmxheT5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ2FyZCcsXG5cbiAgICBjb21wb25lbnRzOiB7IE92ZXJsYXkgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIG9wZW46IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBoZWFkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgZm9vdGVySXRlbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGljb246IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzZWFyY2g6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgYmFkZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHJlZnJlc2g6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgY29sbGFwc2libGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICByZW1vdmFibGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgb3ZlcmxheToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBjb250cm9sczoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgYm9keVN0eWxlOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIHNlYXJjaElucHV0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2VhcmNoXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPXNlYXJjaF0nKVxuICAgICAgICAgICAgICAgIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHF1ZXJ5OiBudWxsLFxuICAgICAgICAgICAgY29sbGFwc2VkOiAhdGhpcy5vcGVuLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3RvZ2dsZScpO1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSAhdGhpcy5jb2xsYXBzZWQ7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbGxhcHNlZFxuICAgICAgICAgICAgICAgID8gdGhpcy4kZW1pdCgnY29sbGFwc2UnKVxuICAgICAgICAgICAgICAgIDogdGhpcy4kZW1pdCgnZXhwYW5kJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGV4cGFuZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdleHBhbmQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29sbGFwc2UoKSB7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdjb2xsYXBzZScpO1xuICAgICAgICB9LFxuICAgICAgICBmb2N1cygpIHtcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoSW5wdXQuZm9jdXMoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXJRdWVyeSgpIHtcbiAgICAgICAgICAgIHRoaXMucXVlcnkgPSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgncmVtb3ZlJyk7XG4gICAgICAgICAgICB0aGlzLiRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuJGVsKTtcbiAgICAgICAgICAgIHRoaXMuJGRlc3Ryb3koKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIC5pY29uLmFuZ2xlW2FyaWEtaGlkZGVuPVwidHJ1ZVwiXSB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgfVxuXG4gICAgLmljb24uYW5nbGUge1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjMwMHMgZWFzZTtcbiAgICB9XG5cbiAgICAuY2FyZC1jb250ZW50IHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjYXJkXCIgfSxcbiAgICBbXG4gICAgICBfdm0uaGVhZGVyXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImhlYWRlclwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlclwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyLXRpdGxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF92bS5pY29uXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBoYXMtbWFyZ2luLXJpZ2h0LXNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5pY29uIH0pXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX3ZtLmNvbGxhcHNpYmxlXG4gICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlzLWNsaWNrYWJsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS50b2dnbGUoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnRpdGxlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgOiBfYyhcInNwYW5cIiwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKVxuICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnNlYXJjaFxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaGFzLXZlcnRpY2FsbHktY2VudGVyZWQtY29udGVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1pY29ucy1sZWZ0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0ucXVlcnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcInF1ZXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IGlzLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwic2VhcmNoXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5xdWVyeSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnF1ZXJ5ID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJxdWVyeS11cGRhdGVcIiwgX3ZtLnF1ZXJ5KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5fbChfdm0uY29udHJvbHMsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX3ZtLl90KFwiY29udHJvbC1cIiArIGkpXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uYmFkZ2UgIT09IG51bGxcbiAgICAgICAgICAgICAgICA/IF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyLWljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInRhZyBpcy1saW5rXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5iYWRnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ucmVmcmVzaFxuICAgICAgICAgICAgICAgID8gX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInJlZnJlc2hcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1zeW5jXCIgfSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmNvbGxhcHNpYmxlXG4gICAgICAgICAgICAgICAgPyBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlci1pY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGFuZ2xlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBcImFyaWEtaGlkZGVuXCI6IF92bS5jb2xsYXBzZWQgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0udG9nZ2xlKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1hbmdsZS1kb3duXCIgfSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnJlbW92YWJsZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJkZWxldGUgaXMtc21hbGxcIiB9KV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmNvbGxhcHNlZCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhY29sbGFwc2VkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZm9vdGVyICYmICFfdm0uY29sbGFwc2VkXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImZvb3RlclwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvb3RlclwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmZvb3Rlckl0ZW1zLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFwiY2FyZC1mb290ZXItaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdChcImZvb3Rlci1pdGVtLVwiICsgaSldLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLm92ZXJsYXkgPyBfYyhcIm92ZXJsYXlcIiwgeyBhdHRyczogeyBzaXplOiBcIm1lZGl1bVwiIH0gfSkgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtc2VhcmNoXCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1mNWEwZWExNlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZjVhMGVhMTZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAgMiAzIDI4IDMwIiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtY2VudGVyZWRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy10aHJlZS1xdWFydGVyc1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFuaW1hdGVkIGZhZGVJblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImluaXRpYWxpc2VkXCI+XG4gICAgICAgICAgICAgICAgPGNlbnRlciBjbGFzcz1cImhhcy1wYWRkaW5nLWJvdHRvbS1sYXJnZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJ0aXRsZSBpcy01XCI+e3sgcm9sZS5kaXNwbGF5X25hbWUgfX08L2g1PlxuICAgICAgICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICAgICAgICAgIDxjaGVja2JveC1tYW5hZ2VyIDp0aXRsZT1cIl9fKCdNZW51cycpXCJcbiAgICAgICAgICAgICAgICAgICAgOnJvbGUtcGVybWlzc2lvbnM9XCJyb2xlTWVudXNcIlxuICAgICAgICAgICAgICAgICAgICA6Z3JvdXAtZGF0YT1cIm1lbnVzXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIm1lbnVzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgIDwvY2hlY2tib3gtbWFuYWdlcj5cblxuICAgICAgICAgICAgICAgIDxjaGVja2JveC1tYW5hZ2VyIDp0aXRsZT1cIl9fKCdQZXJtaXNzc2lvbnMnKVwiXG4gICAgICAgICAgICAgICAgICAgIDpyb2xlLXBlcm1pc3Npb25zPVwicm9sZVBlcm1pc3Npb25zXCJcbiAgICAgICAgICAgICAgICAgICAgOmdyb3VwLWRhdGE9XCJwZXJtaXNzaW9uc1wiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJtZW51cy5sZW5ndGhcIj5cbiAgICAgICAgICAgICAgICA8L2NoZWNrYm94LW1hbmFnZXI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zdWNjZXNzIGhhcy1tYXJnaW4tdG9wLWxhcmdlIGlzLXB1bGxlZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInVwZGF0ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyBfXyhcIlVwZGF0ZVwiKSB9fVxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpcy1jbGVhcmZpeFwiPjwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCBDaGVja2JveE1hbmFnZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBDaGVja2JveE1hbmFnZXIgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByb2xlSWQ6IHRoaXMuJHJvdXRlLnBhcmFtcy5yb2xlLFxuICAgICAgICAgICAgcm9sZToge30sXG4gICAgICAgICAgICBtZW51czogW10sXG4gICAgICAgICAgICBwZXJtaXNzaW9uczoge30sXG4gICAgICAgICAgICByb2xlTWVudXM6IFtdLFxuICAgICAgICAgICAgcm9sZVBlcm1pc3Npb25zOiBbXSxcbiAgICAgICAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXQoKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXQoKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQocm91dGUoJ3N5c3RlbS5yb2xlcy5nZXRQZXJtaXNzaW9ucycsIFt0aGlzLnJvbGVJZF0sIGZhbHNlKSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNldChkYXRhKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0KGRhdGEpIHtcbiAgICAgICAgICAgIHRoaXMubWVudXMgPSBkYXRhLm1lbnVzO1xuICAgICAgICAgICAgdGhpcy5yb2xlTWVudXMgPSBkYXRhLnJvbGVNZW51cztcbiAgICAgICAgICAgIHRoaXMucm9sZVBlcm1pc3Npb25zID0gZGF0YS5yb2xlUGVybWlzc2lvbnM7XG4gICAgICAgICAgICB0aGlzLnBlcm1pc3Npb25zID0gZGF0YS5wZXJtaXNzaW9ucztcbiAgICAgICAgICAgIHRoaXMucm9sZSA9IGRhdGEucm9sZTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgYXhpb3MucG9zdChyb3V0ZSgnc3lzdGVtLnJvbGVzLnNldFBlcm1pc3Npb25zJywgW3RoaXMucm9sZUlkXSwgZmFsc2UpLCB0aGlzLnBvc3RQYXJhbXMoKSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0UGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByb2xlTWVudXM6IHRoaXMucm9sZU1lbnVzLFxuICAgICAgICAgICAgICAgIHJvbGVQZXJtaXNzaW9uczogdGhpcy5yb2xlUGVybWlzc2lvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9Db25maWd1cmUudnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03OWU3ZTg3ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DaGVja2JveE1hbmFnZXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DaGVja2JveE1hbmFnZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03OWU3ZTg3ZlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NoZWNrYm94TWFuYWdlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzllN2U4N2ZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03OWU3ZTg3ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDI4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc5ZTdlODdmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NoZWNrYm94TWFuYWdlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImZkOGJkNTg0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc5ZTdlODdmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NoZWNrYm94TWFuYWdlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzllN2U4N2ZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2hlY2tib3hNYW5hZ2VyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03OWU3ZTg3ZlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDI4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmRpdi5maWVsZC5jaGVja2JveC1tYW5hZ2VyIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdJQTtJQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ2hlY2tib3hNYW5hZ2VyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxjYXJkIDp0aXRsZT1cXFwidGl0bGVcXFwiXFxuICAgICAgICA6b3Blbj1cXFwiZmFsc2VcXFwiXFxuICAgICAgICByZWY9XFxcImNhcmRcXFwiXFxuICAgICAgICA6Y29udHJvbHM9XFxcIjFcXFwiPlxcbiAgICAgICAgPGEgc2xvdD1cXFwiY29udHJvbC0xXFxcIiBjbGFzcz1cXFwiY2FyZC1oZWFkZXItaWNvblxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3gtbWFuYWdlciBmaWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDppZD1cXFwiJ2NoZWNrYm94LScgKyBfdWlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XFxcIidjaGVja2JveC0nICsgX3VpZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpcy1jaGVja3JhZGlvIGlzLWluZm9cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJ1cGRhdGVCZWxvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cXFwiJ2NoZWNrYm94LScgKyBfdWlkXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGFzLXBhZGRpbmctbGVmdC1tZWRpdW0gaGFzLXBhZGRpbmctdG9wLW1lZGl1bSBoYXMtcGFkZGluZy1ib3R0b20tbWVkaXVtXFxcIj5cXG4gICAgICAgICAgICA8Y2hlY2tib3gtbWFuYWdlciB2LWZvcj1cXFwiZ3JvdXAgaW4gc29ydGVkR3JvdXBzXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJncm91cENvdW50XFxcIlxcbiAgICAgICAgICAgICAgICByZWY9XFxcImNoaWxkcmVuXFxcIlxcbiAgICAgICAgICAgICAgICA6dGl0bGU9XFxcImdyb3VwXFxcIlxcbiAgICAgICAgICAgICAgICA6a2V5PVxcXCJncm91cFxcXCJcXG4gICAgICAgICAgICAgICAgOmdyb3VwLWRhdGE9XFxcImdyb3VwRGF0YVtncm91cF1cXFwiXFxuICAgICAgICAgICAgICAgIDpyb2xlLXBlcm1pc3Npb25zPVxcXCJyb2xlUGVybWlzc2lvbnNcXFwiXFxuICAgICAgICAgICAgICAgIEB1cGRhdGU9XFxcInVwZGF0ZVxcXCI+XFxuICAgICAgICAgICAgPC9jaGVja2JveC1tYW5hZ2VyPlxcbiAgICAgICAgICAgIDxtYW5hZ2VyLWNvbnRlbnQgdi1pZj1cXFwiaXNSb290XFxcIlxcbiAgICAgICAgICAgICAgICByZWY9XFxcImNvbnRlbnRcXFwiXFxuICAgICAgICAgICAgICAgIDpncm91cC1kYXRhPVxcXCJncm91cERhdGFcXFwiXFxuICAgICAgICAgICAgICAgIDpyb2xlLXBlcm1pc3Npb25zPVxcXCJyb2xlUGVybWlzc2lvbnNcXFwiXFxuICAgICAgICAgICAgICAgIEBjaGVja2VkPVxcXCJzZXRDaGVja2VkXFxcIlxcbiAgICAgICAgICAgICAgICBAaW5kZXRlcm1pbmF0ZT1cXFwic2V0SW5kZXRlcm1pbmF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgQHVuY2hlY2tlZD1cXFwic2V0VW5jaGVja2VkXFxcIj5cXG4gICAgICAgICAgICA8L21hbmFnZXItY29udGVudD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2NhcmQ+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCBDYXJkIGZyb20gJy4uL2J1bG1hL0NhcmQudnVlJztcXG5pbXBvcnQgTWFuYWdlckNvbnRlbnQgZnJvbSAnLi9NYW5hZ2VyQ29udGVudC52dWUnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0NoZWNrYm94TWFuYWdlcicsXFxuXFxuICAgIGNvbXBvbmVudHM6IHsgQ2FyZCwgTWFuYWdlckNvbnRlbnQgfSxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGdyb3VwRGF0YToge1xcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHJvbGVQZXJtaXNzaW9uczoge1xcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIGlzUm9vdCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLmdyb3VwRGF0YSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZ3JvdXBDb3VudCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Jvb3QgPyBudWxsIDogT2JqZWN0LmtleXModGhpcy5ncm91cERhdGEpLmxlbmd0aDtcXG4gICAgICAgIH0sXFxuICAgICAgICBzb3J0ZWRHcm91cHMoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSb290ID8gbnVsbCA6IE9iamVjdC5rZXlzKHRoaXMuZ3JvdXBEYXRhKS5zb3J0KCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgY2hlY2tib3goKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBzZXRDaGVja2VkKCkge1xcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0SW5kZXRlcm1pbmF0ZSgpIHtcXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNldFVuY2hlY2tlZCgpIHtcXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICB1cGRhdGUoKSB7XFxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuJHJlZnMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNoZWNrYm94LmNoZWNrZWQpLmxlbmd0aDtcXG5cXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCA9PT0gdGhpcy4kcmVmcy5jaGlsZHJlbi5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDaGVja2VkKCk7XFxuICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgY29uc3QgaW5kZXRlcm1pbmF0ZSA9IHRoaXMuJHJlZnMuY2hpbGRyZW5cXG4gICAgICAgICAgICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jaGVja2JveC5pbmRldGVybWluYXRlKS5sZW5ndGg7XFxuXFxuICAgICAgICAgICAgaWYgKGNoZWNrZWQgfHwgaW5kZXRlcm1pbmF0ZSkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUoKTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLnNldFVuY2hlY2tlZCgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHVwZGF0ZUJlbG93KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUm9vdFxcbiAgICAgICAgICAgICAgICA/IHRoaXMudXBkYXRlQ29udGVudCgpXFxuICAgICAgICAgICAgICAgIDogdGhpcy51cGRhdGVDaGlsZHJlbigpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHVwZGF0ZUNvbnRlbnQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tib3guY2hlY2tlZFxcbiAgICAgICAgICAgICAgICA/IHRoaXMuJHJlZnMuY29udGVudC5zZXRBbGxDaGVja2VkKClcXG4gICAgICAgICAgICAgICAgOiB0aGlzLiRyZWZzLmNvbnRlbnQuc2V0QWxsVW5jaGVja2VkKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdXBkYXRlQ2hpbGRyZW4oKSB7XFxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XFxuXFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xcbiAgICAgICAgICAgICAgICBjaGlsZC5jaGVja2JveC5jaGVja2VkID0gc2VsZi5jaGVja2JveC5jaGVja2VkO1xcbiAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGVCZWxvdygpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgZGl2LmZpZWxkLmNoZWNrYm94LW1hbmFnZXIge1xcbiAgICAgICAgd2lkdGg6IDE1cHg7XFxuICAgIH1cXG48L3N0eWxlPlxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03OWU3ZTg3ZlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUzOFxuLy8gbW9kdWxlIGNodW5rcyA9IDI4IiwiPHRlbXBsYXRlPlxuXG4gICAgPGNhcmQgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgICA6b3Blbj1cImZhbHNlXCJcbiAgICAgICAgcmVmPVwiY2FyZFwiXG4gICAgICAgIDpjb250cm9scz1cIjFcIj5cbiAgICAgICAgPGEgc2xvdD1cImNvbnRyb2wtMVwiIGNsYXNzPVwiY2FyZC1oZWFkZXItaWNvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LW1hbmFnZXIgZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgOmlkPVwiJ2NoZWNrYm94LScgKyBfdWlkXCJcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCInY2hlY2tib3gtJyArIF91aWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlzLWNoZWNrcmFkaW8gaXMtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ1cGRhdGVCZWxvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cIidjaGVja2JveC0nICsgX3VpZFwiPjwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGFzLXBhZGRpbmctbGVmdC1tZWRpdW0gaGFzLXBhZGRpbmctdG9wLW1lZGl1bSBoYXMtcGFkZGluZy1ib3R0b20tbWVkaXVtXCI+XG4gICAgICAgICAgICA8Y2hlY2tib3gtbWFuYWdlciB2LWZvcj1cImdyb3VwIGluIHNvcnRlZEdyb3Vwc1wiXG4gICAgICAgICAgICAgICAgdi1pZj1cImdyb3VwQ291bnRcIlxuICAgICAgICAgICAgICAgIHJlZj1cImNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICA6dGl0bGU9XCJncm91cFwiXG4gICAgICAgICAgICAgICAgOmtleT1cImdyb3VwXCJcbiAgICAgICAgICAgICAgICA6Z3JvdXAtZGF0YT1cImdyb3VwRGF0YVtncm91cF1cIlxuICAgICAgICAgICAgICAgIDpyb2xlLXBlcm1pc3Npb25zPVwicm9sZVBlcm1pc3Npb25zXCJcbiAgICAgICAgICAgICAgICBAdXBkYXRlPVwidXBkYXRlXCI+XG4gICAgICAgICAgICA8L2NoZWNrYm94LW1hbmFnZXI+XG4gICAgICAgICAgICA8bWFuYWdlci1jb250ZW50IHYtaWY9XCJpc1Jvb3RcIlxuICAgICAgICAgICAgICAgIHJlZj1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIDpncm91cC1kYXRhPVwiZ3JvdXBEYXRhXCJcbiAgICAgICAgICAgICAgICA6cm9sZS1wZXJtaXNzaW9ucz1cInJvbGVQZXJtaXNzaW9uc1wiXG4gICAgICAgICAgICAgICAgQGNoZWNrZWQ9XCJzZXRDaGVja2VkXCJcbiAgICAgICAgICAgICAgICBAaW5kZXRlcm1pbmF0ZT1cInNldEluZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICAgICAgIEB1bmNoZWNrZWQ9XCJzZXRVbmNoZWNrZWRcIj5cbiAgICAgICAgICAgIDwvbWFuYWdlci1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2NhcmQ+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBDYXJkIGZyb20gJy4uL2J1bG1hL0NhcmQudnVlJztcbmltcG9ydCBNYW5hZ2VyQ29udGVudCBmcm9tICcuL01hbmFnZXJDb250ZW50LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ2hlY2tib3hNYW5hZ2VyJyxcblxuICAgIGNvbXBvbmVudHM6IHsgQ2FyZCwgTWFuYWdlckNvbnRlbnQgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdXBEYXRhOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcm9sZVBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBpc1Jvb3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLmdyb3VwRGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwQ291bnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Jvb3QgPyBudWxsIDogT2JqZWN0LmtleXModGhpcy5ncm91cERhdGEpLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgc29ydGVkR3JvdXBzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSb290ID8gbnVsbCA6IE9iamVjdC5rZXlzKHRoaXMuZ3JvdXBEYXRhKS5zb3J0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrYm94KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0Q2hlY2tlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRJbmRldGVybWluYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFVuY2hlY2tlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGVja2JveC5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuJHJlZnMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNoZWNrYm94LmNoZWNrZWQpLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGNoZWNrZWQgPT09IHRoaXMuJHJlZnMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDaGVja2VkKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbmRldGVybWluYXRlID0gdGhpcy4kcmVmcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgIC5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuY2hlY2tib3guaW5kZXRlcm1pbmF0ZSkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCB8fCBpbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFVuY2hlY2tlZCgpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVCZWxvdygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUm9vdFxuICAgICAgICAgICAgICAgID8gdGhpcy51cGRhdGVDb250ZW50KClcbiAgICAgICAgICAgICAgICA6IHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ29udGVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrYm94LmNoZWNrZWRcbiAgICAgICAgICAgICAgICA/IHRoaXMuJHJlZnMuY29udGVudC5zZXRBbGxDaGVja2VkKClcbiAgICAgICAgICAgICAgICA6IHRoaXMuJHJlZnMuY29udGVudC5zZXRBbGxVbmNoZWNrZWQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ2hpbGRyZW4oKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy4kcmVmcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLmNoZWNrYm94LmNoZWNrZWQgPSBzZWxmLmNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlQmVsb3coKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgZGl2LmZpZWxkLmNoZWNrYm94LW1hbmFnZXIge1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICB9XG48L3N0eWxlPlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NYW5hZ2VyQ29udGVudC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAzZDU1ODg3XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTWFuYWdlckNvbnRlbnQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL01hbmFnZXJDb250ZW50LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wM2Q1NTg4N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAzZDU1ODg3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9NYW5hZ2VyQ29udGVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1NDBcbi8vIG1vZHVsZSBjaHVua3MgPSAyOCIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBoYXMtcGFkZGluZy1tZWRpdW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1oYWxmXCJcbiAgICAgICAgICAgIHYtZm9yPVwiKGVudHJ5LCBpbmRleCkgaW4gZ3JvdXBEYXRhXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgICAgICAgICA6aWQ9XCInY2hlY2tib3gtJyArIGVudHJ5Lm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICA6bmFtZT1cIidjaGVja2JveC0nICsgZW50cnkubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cImVudHJ5LmlkXCJcbiAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImNoZWNrZWRJZHNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlzLWNoZWNrcmFkaW9cIj5cbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIDpmb3I9XCInY2hlY2tib3gtJyArIGVudHJ5Lm5hbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIDpjbGFzcz1cImdldENsYXNzKGVudHJ5KVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGVudHJ5LmRlc2NyaXB0aW9uIHx8IGVudHJ5Lm5hbWUgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBoYXMtdGV4dC1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiZW50cnkuZGVmYXVsdFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi10b29sdGlwPVwiX18oJ0RlZmF1bHQnKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaXMtaWNvbiBmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCB7IFZUb29sdGlwIH0gZnJvbSAndi10b29sdGlwJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdNYW5hZ2VyQ29udGVudCcsXG5cbiAgICBkaXJlY3RpdmVzOiB7IHRvb2x0aXA6IFZUb29sdGlwIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICBncm91cERhdGE6IHtcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICByb2xlUGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgICAgIHBlcm1pc3Npb25JZHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ncm91cERhdGEubWFwKGdyb3VwID0+IGdyb3VwLmlkKTtcbiAgICAgICAgfSxcbiAgICAgICAgc3RhdHVzKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZElkcy5sZW5ndGggPT09IHRoaXMucGVybWlzc2lvbklkcy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ2NoZWNrZWQnO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodGhpcy5jaGVja2VkSWRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAndW5jaGVja2VkJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuICdpbmRldGVybWluYXRlJztcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgc3RhdHVzOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQodGhpcy5zdGF0dXMpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tlZElkcygpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlR3JvdXBQZXJtaXNzaW9ucygpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGVja2VkUGVybWlzc2lvbnMoKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNoZWNrZWRJZHM6IFtdLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLnNldENoZWNrZWRJZHMoKTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBzZXRDaGVja2VkSWRzKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRJZHMgPSB0aGlzLnBlcm1pc3Npb25JZHNcbiAgICAgICAgICAgICAgICAuZmlsdGVyKGlkID0+IHNlbGYucm9sZVBlcm1pc3Npb25zLmluZGV4T2YoaWQpID4gLTEpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRBbGxDaGVja2VkKCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkSWRzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnBlcm1pc3Npb25JZHMpKTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJZkVtcHR5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldEFsbFVuY2hlY2tlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZElkcyA9IFtdO1xuICAgICAgICAgICAgdGhpcy5jaGVja0lmRW1wdHkoKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0Q2xhc3MoZW50cnkpIHtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGVudHJ5LCAndHlwZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBlbnRyeS50eXBlID09PSAxID8gJ2hhcy10ZXh0LXdhcm5pbmcnIDogJ2hhcy10ZXh0LXN1Y2Nlc3MnO1xuICAgICAgICB9LFxuICAgICAgICBjaGVja0lmRW1wdHkoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5ncm91cERhdGEubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCh0aGlzLnN0YXR1cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUdyb3VwUGVybWlzc2lvbnMoKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy5wZXJtaXNzaW9uSWRzLmZvckVhY2goKGlkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gc2VsZi5yb2xlUGVybWlzc2lvbnMuaW5kZXhPZihpZCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaWR4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnJvbGVQZXJtaXNzaW9ucy5zcGxpY2UoaWR4LCAxKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkQ2hlY2tlZFBlcm1pc3Npb25zKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZElkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgIHNlbGYucm9sZVBlcm1pc3Npb25zLnB1c2goaWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1vdW50ZWQoKSB7XG4gICAgICAgIHRoaXMuY2hlY2tJZkVtcHR5KCk7XG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL01hbmFnZXJDb250ZW50LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtbXVsdGlsaW5lIGhhcy1wYWRkaW5nLW1lZGl1bVwiIH0sXG4gICAgX3ZtLl9sKF92bS5ncm91cERhdGEsIGZ1bmN0aW9uKGVudHJ5LCBpbmRleCkge1xuICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLWhhbGZcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja2VkSWRzLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tlZElkc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpcy1jaGVja3JhZGlvXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIGlkOiBcImNoZWNrYm94LVwiICsgZW50cnkubmFtZSxcbiAgICAgICAgICAgICAgbmFtZTogXCJjaGVja2JveC1cIiArIGVudHJ5Lm5hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICB2YWx1ZTogZW50cnkuaWQsXG4gICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmNoZWNrZWRJZHMpXG4gICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmNoZWNrZWRJZHMsIGVudHJ5LmlkKSA+IC0xXG4gICAgICAgICAgICAgICAgOiBfdm0uY2hlY2tlZElkc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5jaGVja2VkSWRzLFxuICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gZW50cnkuaWQsXG4gICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLmNoZWNrZWRJZHMgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgKF92bS5jaGVja2VkSWRzID0gJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBfdm0uY2hlY2tlZElkcyA9ICQkY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJjaGVja2JveC1cIiArIGVudHJ5Lm5hbWUgfSB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBjbGFzczogX3ZtLmdldENsYXNzKGVudHJ5KSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhlbnRyeS5kZXNjcmlwdGlvbiB8fCBlbnRyeS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgZW50cnkuZGVmYXVsdFxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLl9fKFwiRGVmYXVsdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiX18oJ0RlZmF1bHQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGhhcy10ZXh0LWluZm9cIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpcy1pY29uIGZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXSlcbiAgICAgICAgXSlcbiAgICAgIF0pXG4gICAgfSlcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0wM2Q1NTg4N1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMDNkNTU4ODdcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9NYW5hZ2VyQ29udGVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1NDJcbi8vIG1vZHVsZSBjaHVua3MgPSAyOCIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJjYXJkXCIsXG4gICAgeyByZWY6IFwiY2FyZFwiLCBhdHRyczogeyB0aXRsZTogX3ZtLnRpdGxlLCBvcGVuOiBmYWxzZSwgY29udHJvbHM6IDEgfSB9LFxuICAgIFtcbiAgICAgIF9jKFxuICAgICAgICBcImFcIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyLWljb25cIixcbiAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvbnRyb2wtMVwiIH0sXG4gICAgICAgICAgc2xvdDogXCJjb250cm9sLTFcIlxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjaGVja2JveC1tYW5hZ2VyIGZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlzLWNoZWNrcmFkaW8gaXMtaW5mb1wiLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICAgICAgICBpZDogXCJjaGVja2JveC1cIiArIF92bS5fdWlkLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiY2hlY2tib3gtXCIgKyBfdm0uX3VpZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS51cGRhdGVCZWxvdyB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImxhYmVsXCIsIHsgYXR0cnM6IHsgZm9yOiBcImNoZWNrYm94LVwiICsgX3ZtLl91aWQgfSB9KVxuICAgICAgICAgIF0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXG4gICAgICAgIFwiZGl2XCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgIFwiaGFzLXBhZGRpbmctbGVmdC1tZWRpdW0gaGFzLXBhZGRpbmctdG9wLW1lZGl1bSBoYXMtcGFkZGluZy1ib3R0b20tbWVkaXVtXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF92bS5fbChfdm0uc29ydGVkR3JvdXBzLCBmdW5jdGlvbihncm91cCkge1xuICAgICAgICAgICAgcmV0dXJuIF92bS5ncm91cENvdW50XG4gICAgICAgICAgICAgID8gX2MoXCJjaGVja2JveC1tYW5hZ2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgIGtleTogZ3JvdXAsXG4gICAgICAgICAgICAgICAgICByZWY6IFwiY2hpbGRyZW5cIixcbiAgICAgICAgICAgICAgICAgIHJlZkluRm9yOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGdyb3VwLFxuICAgICAgICAgICAgICAgICAgICBcImdyb3VwLWRhdGFcIjogX3ZtLmdyb3VwRGF0YVtncm91cF0sXG4gICAgICAgICAgICAgICAgICAgIFwicm9sZS1wZXJtaXNzaW9uc1wiOiBfdm0ucm9sZVBlcm1pc3Npb25zXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgb246IHsgdXBkYXRlOiBfdm0udXBkYXRlIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgfSksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uaXNSb290XG4gICAgICAgICAgICA/IF9jKFwibWFuYWdlci1jb250ZW50XCIsIHtcbiAgICAgICAgICAgICAgICByZWY6IFwiY29udGVudFwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICBcImdyb3VwLWRhdGFcIjogX3ZtLmdyb3VwRGF0YSxcbiAgICAgICAgICAgICAgICAgIFwicm9sZS1wZXJtaXNzaW9uc1wiOiBfdm0ucm9sZVBlcm1pc3Npb25zXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgY2hlY2tlZDogX3ZtLnNldENoZWNrZWQsXG4gICAgICAgICAgICAgICAgICBpbmRldGVybWluYXRlOiBfdm0uc2V0SW5kZXRlcm1pbmF0ZSxcbiAgICAgICAgICAgICAgICAgIHVuY2hlY2tlZDogX3ZtLnNldFVuY2hlY2tlZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgXSxcbiAgICAgICAgMlxuICAgICAgKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03OWU3ZTg3ZlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzllN2U4N2ZcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9DaGVja2JveE1hbmFnZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMjgiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1jZW50ZXJlZFwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBpcy10aHJlZS1xdWFydGVyc1wiIH0sIFtcbiAgICAgIF92bS5pbml0aWFsaXNlZFxuICAgICAgICA/IF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiYW5pbWF0ZWQgZmFkZUluXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJjZW50ZXJcIiwgeyBzdGF0aWNDbGFzczogXCJoYXMtcGFkZGluZy1ib3R0b20tbGFyZ2VcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5yb2xlLmRpc3BsYXlfbmFtZSkpXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5tZW51cy5sZW5ndGhcbiAgICAgICAgICAgICAgICA/IF9jKFwiY2hlY2tib3gtbWFuYWdlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IF92bS5fXyhcIk1lbnVzXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwicm9sZS1wZXJtaXNzaW9uc1wiOiBfdm0ucm9sZU1lbnVzLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZ3JvdXAtZGF0YVwiOiBfdm0ubWVudXNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubWVudXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBfYyhcImNoZWNrYm94LW1hbmFnZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0uX18oXCJQZXJtaXNzc2lvbnNcIiksXG4gICAgICAgICAgICAgICAgICAgICAgXCJyb2xlLXBlcm1pc3Npb25zXCI6IF92bS5yb2xlUGVybWlzc2lvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgXCJncm91cC1kYXRhXCI6IF92bS5wZXJtaXNzaW9uc1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGlzLXN1Y2Nlc3MgaGFzLW1hcmdpbi10b3AtbGFyZ2UgaXMtcHVsbGVkLXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLnVwZGF0ZSB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9fKFwiVXBkYXRlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpcy1jbGVhcmZpeFwiIH0pXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTc1OTA2YTcxXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03NTkwNmE3MVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL3JvbGVzL0NvbmZpZ3VyZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE1NDRcbi8vIG1vZHVsZSBjaHVua3MgPSAyOCJdLCJzb3VyY2VSb290IjoiIn0=