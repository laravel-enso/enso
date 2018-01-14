webpackJsonp([28],{

/***/ 1082:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1534)
/* template */
var __vue_template__ = __webpack_require__(1543)
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

/***/ 1205:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1207)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1209)
/* template */
var __vue_template__ = __webpack_require__(1210)
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

/***/ 1207:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1208);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("3da87753", content, false);
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

/***/ 1208:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.icon.angle[aria-hidden=\"true\"] {\n    -webkit-transform: rotate(180deg);\n            transform: rotate(180deg);\n}\n.icon.angle {\n    -webkit-transition: -webkit-transform .300s ease;\n    transition: -webkit-transform .300s ease;\n    transition: transform .300s ease;\n    transition: transform .300s ease, -webkit-transform .300s ease;\n}\n.card-content {\n    padding: 0;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/bulma/resources/assets/js/components/enso/bulma/Card.vue"],"names":[],"mappings":";AAmMA;IACA,kCAAA;YAAA,0BAAA;CACA;AAEA;IACA,iDAAA;IAAA,yCAAA;IAAA,iCAAA;IAAA,+DAAA;CACA;AAEA;IACA,WAAA;CACA","file":"Card.vue","sourcesContent":["<template>\n\n    <div class=\"card\">\n        <header class=\"card-header\"\n            v-if=\"header\">\n            <p class=\"card-header-title\">\n                <span class=\"icon is-small has-margin-right-small\"\n                    v-if=\"icon\">\n                    <i :class=\"icon\"></i>\n                </span>\n                <span class=\"is-clickable\"\n                    @click=\"toggle()\"\n                    v-if=\"collapsible\">\n                    {{ title }}\n                </span>\n                <span v-else>{{ title }}</span>\n            </p>\n            <div class=\"has-vertically-centered-content\"\n                v-if=\"search\">\n                <p class=\"control has-icons-left\">\n                <input type=\"search\"\n                    class=\"input is-small\"\n                    v-model=\"query\"\n                    @input=\"$emit('query-update', query)\">\n                <span class=\"icon is-small is-left\">\n                    <i class=\"fa fa-search\"></i>\n                </span>\n                </p>\n            </div>\n            <slot v-for=\"i in controls\"\n                :name=\"'control-' + i\">\n            </slot>\n            <a class=\"card-header-icon\"\n                v-if=\"badge !== null\">\n                <span class=\"tag is-link\">\n                    {{ badge }}\n                </span>\n            </a>\n            <a class=\"card-header-icon\"\n                v-if=\"refresh\">\n                <span class=\"icon is-small\"\n                    @click=\"$emit('refresh')\">\n                    <i class=\"fa fa-refresh\"></i>\n                </span>\n            </a>\n            <a class=\"card-header-icon\"\n                v-if=\"collapsible\">\n                <span class=\"icon angle\"\n                    :aria-hidden=\"collapsed\"\n                    @click=\"toggle()\">\n                    <i class=\"fa fa-angle-down\"></i>\n                </span>\n            </a>\n            <span class=\"card-header-icon\"\n                v-if=\"removable\"\n                @click=\"destroy()\">\n                <a class=\"delete is-small\"></a>\n            </span>\n        </header>\n\n        <div class=\"card-content\" v-show=\"!collapsed\">\n            <slot></slot>\n        </div>\n\n        <footer class=\"card-footer\" v-if=\"footer && !collapsed\">\n            <p v-for=\"i in footerItems\"\n                class=\"card-footer-item\"\n                :key=\"i\">\n                <slot :name=\"'footer-item-' + i\"></slot>\n            </p>\n        </footer>\n        <overlay size=\"medium\" v-if=\"overlay\"></overlay>\n    </div>\n\n</template>\n\n<script>\n\nimport Overlay from './Overlay.vue';\n\nexport default {\n    name: 'Card',\n\n    components: { Overlay },\n\n    props: {\n        open: {\n            type: Boolean,\n            default: true,\n        },\n        header: {\n            type: Boolean,\n            default: true,\n        },\n        footer: {\n            type: Boolean,\n            default: false,\n        },\n        footerItems: {\n            type: Number,\n            default: 0,\n        },\n        icon: {\n            type: String,\n            default: null,\n        },\n        title: {\n            type: String,\n            default: null,\n        },\n        search: {\n            type: Boolean,\n            default: false,\n        },\n        badge: {\n            type: Number,\n            default: null,\n        },\n        refresh: {\n            type: Boolean,\n            default: false,\n        },\n        collapsible: {\n            type: Boolean,\n            default: true,\n        },\n        removable: {\n            type: Boolean,\n            default: false,\n        },\n        overlay: {\n            type: Boolean,\n            default: false,\n        },\n        controls: {\n            type: Number,\n            default: 0,\n        },\n        bodyStyle: {\n            type: Object,\n            default() {\n                return {};\n            },\n        },\n    },\n\n    computed: {\n        searchInput() {\n            return this.search\n                ? this.$el.querySelector('input[type=search]')\n                : null;\n        },\n    },\n\n    data() {\n        return {\n            query: null,\n            collapsed: !this.open,\n        };\n    },\n\n    methods: {\n        toggle() {\n            this.$emit('toggle');\n            this.collapsed = !this.collapsed;\n\n            return this.collapsed\n                ? this.$emit('collapse')\n                : this.$emit('expand');\n        },\n        expand() {\n            this.collapsed = false;\n            this.$emit('expand');\n        },\n        collapse() {\n            this.collapsed = true;\n            this.$emit('collapse');\n        },\n        focus() {\n            this.searchInput.focus();\n        },\n        clearQuery() {\n            this.query = null;\n        },\n        destroy() {\n            this.$emit('remove');\n            this.$el.parentNode.removeChild(this.$el);\n            this.$destroy();\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .icon.angle[aria-hidden=\"true\"] {\n        transform: rotate(180deg);\n    }\n\n    .icon.angle {\n        transition: transform .300s ease;\n    }\n\n    .card-content {\n        padding: 0;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1209:
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

/***/ 1210:
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

/***/ 1534:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_rolemanager_CheckboxManager_vue__ = __webpack_require__(1535);
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
        this.getPermissions();
    },


    methods: {
        getPermissions: function getPermissions() {
            var _this = this;

            axios.get(route('system.roles.getPermissions', this.roleId, false)).then(function (response) {
                _this.setData(response);
                _this.initialised = true;
            }).catch(function (error) {
                return _this.handleError(error);
            });
        },
        setData: function setData(response) {
            this.menus = response.data.menus;
            this.roleMenus = response.data.roleMenus;
            this.rolePermissions = response.data.rolePermissions;
            this.permissions = response.data.permissions;
            this.role = response.data.role;
        },
        update: function update() {
            var _this2 = this;

            axios.post(route('system.roles.setPermissions', [], false), this.postParams()).then(function (response) {
                toastr.success(response.data.message);
            }).catch(function (error) {
                return _this2.handleError(error);
            });
        },
        postParams: function postParams() {
            return {
                role_id: this.roleId,
                roleMenus: this.roleMenus,
                rolePermissions: this.rolePermissions
            };
        }
    }
});

/***/ }),

/***/ 1535:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1536)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1538)
/* template */
var __vue_template__ = __webpack_require__(1542)
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

/***/ 1536:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1537);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(4)("fd8bd584", content, false);
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

/***/ 1537:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\ndiv.field.checkbox-manager {\n    width: 15px;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/rolemanager/resources/assets/js/components/enso/rolemanager/CheckboxManager.vue"],"names":[],"mappings":";AAwIA;IACA,YAAA;CACA","file":"CheckboxManager.vue","sourcesContent":["<template>\n\n    <card :title=\"title\"\n        :open=\"false\"\n        ref=\"card\"\n        :controls=\"1\">\n        <a slot=\"control-1\" class=\"card-header-icon\">\n            <div class=\"checkbox-manager field\">\n                <input type=\"checkbox\"\n                    :id=\"'checkbox-' + _uid\"\n                    :name=\"'checkbox-' + _uid\"\n                    class=\"is-checkradio is-info\"\n                    @change=\"updateBelow\">\n                    <label :for=\"'checkbox-' + _uid\"></label>\n            </div>\n        </a>\n        <div class=\"has-padding-left-medium has-padding-top-medium has-padding-bottom-medium\">\n            <checkbox-manager v-for=\"group in sortedGroups\"\n                v-if=\"groupCount\"\n                ref=\"children\"\n                :title=\"group\"\n                :key=\"group\"\n                :group-data=\"groupData[group]\"\n                :role-permissions=\"rolePermissions\"\n                @update=\"update\">\n            </checkbox-manager>\n            <manager-content v-if=\"isRoot\"\n                ref=\"content\"\n                :group-data=\"groupData\"\n                :role-permissions=\"rolePermissions\"\n                @checked=\"setChecked\"\n                @indeterminate=\"setIndeterminate\"\n                @unchecked=\"setUnchecked\">\n            </manager-content>\n        </div>\n    </card>\n\n</template>\n\n<script>\n\nimport Card from '../bulma/Card.vue';\nimport ManagerContent from './ManagerContent.vue';\n\nexport default {\n    name: 'CheckboxManager',\n\n    components: { Card, ManagerContent },\n\n    props: {\n        title: {\n            type: String,\n            required: true,\n        },\n        groupData: {\n            required: true,\n        },\n        rolePermissions: {\n            type: Array,\n            required: true,\n        },\n    },\n\n    computed: {\n        isRoot() {\n            return Array.isArray(this.groupData);\n        },\n        groupCount() {\n            return this.isRoot ? null : Object.keys(this.groupData).length;\n        },\n        sortedGroups() {\n            return this.isRoot ? null : Object.keys(this.groupData).sort();\n        },\n        checkbox() {\n            return this.$el.querySelector('input[type=checkbox]');\n        },\n    },\n\n    methods: {\n        setChecked() {\n            this.checkbox.indeterminate = false;\n            this.checkbox.checked = true;\n            this.$emit('update');\n        },\n        setIndeterminate() {\n            this.checkbox.checked = false;\n            this.checkbox.indeterminate = true;\n            this.$emit('update');\n        },\n        setUnchecked() {\n            this.checkbox.checked = false;\n            this.checkbox.indeterminate = false;\n            this.$emit('update');\n        },\n        update() {\n            const checked = this.$refs.children.filter(child => child.checkbox.checked).length;\n\n            if (checked === this.$refs.children.length) {\n                this.setChecked();\n                return;\n            }\n\n            const indeterminate = this.$refs.children\n                .filter(child => child.checkbox.indeterminate).length;\n\n            if (checked || indeterminate) {\n                this.setIndeterminate();\n                return;\n            }\n\n            this.setUnchecked();\n        },\n        updateBelow() {\n            return this.isRoot\n                ? this.updateContent()\n                : this.updateChildren();\n        },\n        updateContent() {\n            return this.checkbox.checked\n                ? this.$refs.content.setAllChecked()\n                : this.$refs.content.setAllUnchecked();\n        },\n        updateChildren() {\n            const self = this;\n\n            this.$refs.children.forEach((child) => {\n                child.checkbox.checked = self.checkbox.checked;\n                child.updateBelow();\n            });\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    div.field.checkbox-manager {\n        width: 15px;\n    }\n</style>\n\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1538:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bulma_Card_vue__ = __webpack_require__(1205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__bulma_Card_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__bulma_Card_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ManagerContent_vue__ = __webpack_require__(1539);
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

/***/ 1539:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1540)
/* template */
var __vue_template__ = __webpack_require__(1541)
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

/***/ 1540:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_v_tooltip__ = __webpack_require__(147);
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

/***/ 1541:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "columns is-multiline has-padding-medium" },
    _vm._l(_vm.groupData, function(entry) {
      return _c("div", { staticClass: "column is-half" }, [
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
              ? _c("span", { staticClass: "icon has-text-info" }, [
                  _c("i", {
                    directives: [
                      {
                        name: "tooltip",
                        rawName: "v-tooltip",
                        value: _vm.__("Default"),
                        expression: "__('Default')"
                      }
                    ],
                    staticClass: "is-icon fa fa-exclamation-triangle"
                  })
                ])
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

/***/ 1542:
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

/***/ 1543:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9Db25maWd1cmUudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlPzI3YjIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWU/NjczMiIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWU/MWZiMiIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vcm9sZXMvQ29uZmlndXJlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9DaGVja2JveE1hbmFnZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWU/YzJiYyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9DaGVja2JveE1hbmFnZXIudnVlP2M2M2QiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvTWFuYWdlckNvbnRlbnQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9NYW5hZ2VyQ29udGVudC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvTWFuYWdlckNvbnRlbnQudnVlPzQ5NmIiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZT9hYzU0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL3JvbGVzL0NvbmZpZ3VyZS52dWU/MWY0YyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDZDQUFpVjtBQUNqVjtBQUNBLCtDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5TTtBQUN6TTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7QUFDQSwrQ0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTs7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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkJBQTZCO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIyOC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9Db25maWd1cmUudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03NTkwNmE3MVxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NvbmZpZ3VyZS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vcm9sZXMvQ29uZmlndXJlLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03NTkwNmE3MVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTc1OTA2YTcxXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9Db25maWd1cmUudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMjgiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWY1YTBlYTE2XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NhcmQudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjVhMGVhMTZcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DYXJkLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZjVhMGVhMTZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1mNWEwZWExNlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWVcbi8vIG1vZHVsZSBpZCA9IDEyMDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIDIgMyAyOCAzMCIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1mNWEwZWExNlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DYXJkLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiM2RhODc3NTNcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjVhMGVhMTZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2FyZC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZjVhMGVhMTZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2FyZC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZjVhMGVhMTZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMjggMzAiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmljb24uYW5nbGVbYXJpYS1oaWRkZW49XFxcInRydWVcXFwiXSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xcbn1cXG4uaWNvbi5hbmdsZSB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gLjMwMHMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlLCAtd2Via2l0LXRyYW5zZm9ybSAuMzAwcyBlYXNlO1xcbn1cXG4uY2FyZC1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMDtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vYnVsbWEvQ2FyZC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQW1NQTtJQUNBLGtDQUFBO1lBQUEsMEJBQUE7Q0FDQTtBQUVBO0lBQ0EsaURBQUE7SUFBQSx5Q0FBQTtJQUFBLGlDQUFBO0lBQUEsK0RBQUE7Q0FDQTtBQUVBO0lBQ0EsV0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJDYXJkLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmRcXFwiPlxcbiAgICAgICAgPGhlYWRlciBjbGFzcz1cXFwiY2FyZC1oZWFkZXJcXFwiXFxuICAgICAgICAgICAgdi1pZj1cXFwiaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICA8cCBjbGFzcz1cXFwiY2FyZC1oZWFkZXItdGl0bGVcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbCBoYXMtbWFyZ2luLXJpZ2h0LXNtYWxsXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XFxcImljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaXMtY2xpY2thYmxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJ0b2dnbGUoKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImNvbGxhcHNpYmxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7IHRpdGxlIH19XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPnt7IHRpdGxlIH19PC9zcGFuPlxcbiAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJoYXMtdmVydGljYWxseS1jZW50ZXJlZC1jb250ZW50XFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJzZWFyY2hcXFwiPlxcbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJzZWFyY2hcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQgaXMtc21hbGxcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJxdWVyeVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cXFwiJGVtaXQoJ3F1ZXJ5LXVwZGF0ZScsIHF1ZXJ5KVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXNlYXJjaFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8c2xvdCB2LWZvcj1cXFwiaSBpbiBjb250cm9sc1xcXCJcXG4gICAgICAgICAgICAgICAgOm5hbWU9XFxcIidjb250cm9sLScgKyBpXFxcIj5cXG4gICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImNhcmQtaGVhZGVyLWljb25cXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImJhZGdlICE9PSBudWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhZyBpcy1saW5rXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIHt7IGJhZGdlIH19XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPGEgY2xhc3M9XFxcImNhcmQtaGVhZGVyLWljb25cXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcInJlZnJlc2hcXFwiPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ3JlZnJlc2gnKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtcmVmcmVzaFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJjYXJkLWhlYWRlci1pY29uXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJjb2xsYXBzaWJsZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGFuZ2xlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmFyaWEtaGlkZGVuPVxcXCJjb2xsYXBzZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInRvZ2dsZSgpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS1hbmdsZS1kb3duXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImNhcmQtaGVhZGVyLWljb25cXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcInJlbW92YWJsZVxcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJkZXN0cm95KClcXFwiPlxcbiAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiZGVsZXRlIGlzLXNtYWxsXFxcIj48L2E+XFxuICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgPC9oZWFkZXI+XFxuXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnRcXFwiIHYtc2hvdz1cXFwiIWNvbGxhcHNlZFxcXCI+XFxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxcbiAgICAgICAgPC9kaXY+XFxuXFxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVxcXCJjYXJkLWZvb3RlclxcXCIgdi1pZj1cXFwiZm9vdGVyICYmICFjb2xsYXBzZWRcXFwiPlxcbiAgICAgICAgICAgIDxwIHYtZm9yPVxcXCJpIGluIGZvb3Rlckl0ZW1zXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY2FyZC1mb290ZXItaXRlbVxcXCJcXG4gICAgICAgICAgICAgICAgOmtleT1cXFwiaVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVxcXCInZm9vdGVyLWl0ZW0tJyArIGlcXFwiPjwvc2xvdD5cXG4gICAgICAgICAgICA8L3A+XFxuICAgICAgICA8L2Zvb3Rlcj5cXG4gICAgICAgIDxvdmVybGF5IHNpemU9XFxcIm1lZGl1bVxcXCIgdi1pZj1cXFwib3ZlcmxheVxcXCI+PC9vdmVybGF5PlxcbiAgICA8L2Rpdj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IE92ZXJsYXkgZnJvbSAnLi9PdmVybGF5LnZ1ZSc7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnQ2FyZCcsXFxuXFxuICAgIGNvbXBvbmVudHM6IHsgT3ZlcmxheSB9LFxcblxcbiAgICBwcm9wczoge1xcbiAgICAgICAgb3Blbjoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBoZWFkZXI6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgZm9vdGVyOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmb290ZXJJdGVtczoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGljb246IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICB0aXRsZToge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHNlYXJjaDoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgYmFkZ2U6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICByZWZyZXNoOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBjb2xsYXBzaWJsZToge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcXG4gICAgICAgIH0sXFxuICAgICAgICByZW1vdmFibGU6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG92ZXJsYXk6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGNvbnRyb2xzOiB7XFxuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IDAsXFxuICAgICAgICB9LFxcbiAgICAgICAgYm9keVN0eWxlOiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIHNlYXJjaElucHV0KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlYXJjaFxcbiAgICAgICAgICAgICAgICA/IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9c2VhcmNoXScpXFxuICAgICAgICAgICAgICAgIDogbnVsbDtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIHF1ZXJ5OiBudWxsLFxcbiAgICAgICAgICAgIGNvbGxhcHNlZDogIXRoaXMub3BlbixcXG4gICAgICAgIH07XFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIHRvZ2dsZSgpIHtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd0b2dnbGUnKTtcXG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcXG5cXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb2xsYXBzZWRcXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRlbWl0KCdjb2xsYXBzZScpXFxuICAgICAgICAgICAgICAgIDogdGhpcy4kZW1pdCgnZXhwYW5kJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZXhwYW5kKCkge1xcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkID0gZmFsc2U7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZXhwYW5kJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgY29sbGFwc2UoKSB7XFxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSB0cnVlO1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbGxhcHNlJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZm9jdXMoKSB7XFxuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5mb2N1cygpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGNsZWFyUXVlcnkoKSB7XFxuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IG51bGw7XFxuICAgICAgICB9LFxcbiAgICAgICAgZGVzdHJveSgpIHtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdyZW1vdmUnKTtcXG4gICAgICAgICAgICB0aGlzLiRlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMuJGVsKTtcXG4gICAgICAgICAgICB0aGlzLiRkZXN0cm95KCk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAuaWNvbi5hbmdsZVthcmlhLWhpZGRlbj1cXFwidHJ1ZVxcXCJdIHtcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XFxuICAgIH1cXG5cXG4gICAgLmljb24uYW5nbGUge1xcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4zMDBzIGVhc2U7XFxuICAgIH1cXG5cXG4gICAgLmNhcmQtY29udGVudCB7XFxuICAgICAgICBwYWRkaW5nOiAwO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtZjVhMGVhMTZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMjggMzAiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8aGVhZGVyIGNsYXNzPVwiY2FyZC1oZWFkZXJcIlxuICAgICAgICAgICAgdi1pZj1cImhlYWRlclwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJjYXJkLWhlYWRlci10aXRsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBoYXMtbWFyZ2luLXJpZ2h0LXNtYWxsXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpcy1jbGlja2FibGVcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJ0b2dnbGUoKVwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJjb2xsYXBzaWJsZVwiPlxuICAgICAgICAgICAgICAgICAgICB7eyB0aXRsZSB9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+e3sgdGl0bGUgfX08L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGFzLXZlcnRpY2FsbHktY2VudGVyZWQtY29udGVudFwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInNlYXJjaFwiPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY29udHJvbCBoYXMtaWNvbnMtbGVmdFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic2VhcmNoXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dCBpcy1zbWFsbFwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJxdWVyeVwiXG4gICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cIiRlbWl0KCdxdWVyeS11cGRhdGUnLCBxdWVyeSlcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaXMtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNlYXJjaFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c2xvdCB2LWZvcj1cImkgaW4gY29udHJvbHNcIlxuICAgICAgICAgICAgICAgIDpuYW1lPVwiJ2NvbnRyb2wtJyArIGlcIj5cbiAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiY2FyZC1oZWFkZXItaWNvblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImJhZGdlICE9PSBudWxsXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgaXMtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICB7eyBiYWRnZSB9fVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGNsYXNzPVwiY2FyZC1oZWFkZXItaWNvblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cInJlZnJlc2hcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgncmVmcmVzaCcpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtcmVmcmVzaFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImNhcmQtaGVhZGVyLWljb25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJjb2xsYXBzaWJsZVwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgIDphcmlhLWhpZGRlbj1cImNvbGxhcHNlZFwiXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInRvZ2dsZSgpXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtYW5nbGUtZG93blwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImNhcmQtaGVhZGVyLWljb25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJyZW1vdmFibGVcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cImRlc3Ryb3koKVwiPlxuICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiZGVsZXRlIGlzLXNtYWxsXCI+PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCIgdi1zaG93PVwiIWNvbGxhcHNlZFwiPlxuICAgICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiY2FyZC1mb290ZXJcIiB2LWlmPVwiZm9vdGVyICYmICFjb2xsYXBzZWRcIj5cbiAgICAgICAgICAgIDxwIHYtZm9yPVwiaSBpbiBmb290ZXJJdGVtc1wiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjYXJkLWZvb3Rlci1pdGVtXCJcbiAgICAgICAgICAgICAgICA6a2V5PVwiaVwiPlxuICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVwiJ2Zvb3Rlci1pdGVtLScgKyBpXCI+PC9zbG90PlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgPG92ZXJsYXkgc2l6ZT1cIm1lZGl1bVwiIHYtaWY9XCJvdmVybGF5XCI+PC9vdmVybGF5PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgT3ZlcmxheSBmcm9tICcuL092ZXJsYXkudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIG5hbWU6ICdDYXJkJyxcblxuICAgIGNvbXBvbmVudHM6IHsgT3ZlcmxheSB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgb3Blbjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGhlYWRlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rlcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBmb290ZXJJdGVtczoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgaWNvbjoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgdGl0bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHNlYXJjaDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBiYWRnZToge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVmcmVzaDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBjb2xsYXBzaWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92YWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBvdmVybGF5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGNvbnRyb2xzOiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiAwLFxuICAgICAgICB9LFxuICAgICAgICBib2R5U3R5bGU6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgc2VhcmNoSW5wdXQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZWFyY2hcbiAgICAgICAgICAgICAgICA/IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9c2VhcmNoXScpXG4gICAgICAgICAgICAgICAgOiBudWxsO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcXVlcnk6IG51bGwsXG4gICAgICAgICAgICBjb2xsYXBzZWQ6ICF0aGlzLm9wZW4sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgdG9nZ2xlKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndG9nZ2xlJyk7XG4gICAgICAgICAgICB0aGlzLmNvbGxhcHNlZCA9ICF0aGlzLmNvbGxhcHNlZDtcblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29sbGFwc2VkXG4gICAgICAgICAgICAgICAgPyB0aGlzLiRlbWl0KCdjb2xsYXBzZScpXG4gICAgICAgICAgICAgICAgOiB0aGlzLiRlbWl0KCdleHBhbmQnKTtcbiAgICAgICAgfSxcbiAgICAgICAgZXhwYW5kKCkge1xuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2V4cGFuZCcpO1xuICAgICAgICB9LFxuICAgICAgICBjb2xsYXBzZSgpIHtcbiAgICAgICAgICAgIHRoaXMuY29sbGFwc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NvbGxhcHNlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGZvY3VzKCkge1xuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dC5mb2N1cygpO1xuICAgICAgICB9LFxuICAgICAgICBjbGVhclF1ZXJ5KCkge1xuICAgICAgICAgICAgdGhpcy5xdWVyeSA9IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGRlc3Ryb3koKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdyZW1vdmUnKTtcbiAgICAgICAgICAgIHRoaXMuJGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy4kZWwpO1xuICAgICAgICAgICAgdGhpcy4kZGVzdHJveSgpO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgLmljb24uYW5nbGVbYXJpYS1oaWRkZW49XCJ0cnVlXCJdIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICB9XG5cbiAgICAuaWNvbi5hbmdsZSB7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAuMzAwcyBlYXNlO1xuICAgIH1cblxuICAgIC5jYXJkLWNvbnRlbnQge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9idWxtYS9DYXJkLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmRcIiB9LFxuICAgIFtcbiAgICAgIF92bS5oZWFkZXJcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiaGVhZGVyXCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNhcmQtaGVhZGVyXCIgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItdGl0bGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX3ZtLmljb25cbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGhhcy1tYXJnaW4tcmlnaHQtc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBjbGFzczogX3ZtLmljb24gfSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfdm0uY29sbGFwc2libGVcbiAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaXMtY2xpY2thYmxlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0udGl0bGUpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICA6IF9jKFwic3BhblwiLCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0uc2VhcmNoXG4gICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoYXMtdmVydGljYWxseS1jZW50ZXJlZC1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLWxlZnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5xdWVyeSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicXVlcnlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgaXMtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJzZWFyY2hcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLnF1ZXJ5IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucXVlcnkgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInF1ZXJ5LXVwZGF0ZVwiLCBfdm0ucXVlcnkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLl9sKF92bS5jb250cm9scywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdm0uX3QoXCJjb250cm9sLVwiICsgaSlcbiAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5iYWRnZSAhPT0gbnVsbFxuICAgICAgICAgICAgICAgID8gX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwidGFnIGlzLWxpbmtcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmJhZGdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5yZWZyZXNoXG4gICAgICAgICAgICAgICAgPyBfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlci1pY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwicmVmcmVzaFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtcmVmcmVzaFwiIH0pXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF92bS5jb2xsYXBzaWJsZVxuICAgICAgICAgICAgICAgID8gX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvbiBhbmdsZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgXCJhcmlhLWhpZGRlblwiOiBfdm0uY29sbGFwc2VkIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnRvZ2dsZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1hbmdsZS1kb3duXCIgfSldXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLnJlbW92YWJsZVxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1oZWFkZXItaWNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtfYyhcImFcIiwgeyBzdGF0aWNDbGFzczogXCJkZWxldGUgaXMtc21hbGxcIiB9KV1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJkaXZcIixcbiAgICAgICAge1xuICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzaG93XCIsXG4gICAgICAgICAgICAgIHJhd05hbWU6IFwidi1zaG93XCIsXG4gICAgICAgICAgICAgIHZhbHVlOiAhX3ZtLmNvbGxhcHNlZCxcbiAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCIhY29sbGFwc2VkXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiXG4gICAgICAgIH0sXG4gICAgICAgIFtfdm0uX3QoXCJkZWZhdWx0XCIpXSxcbiAgICAgICAgMlxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZm9vdGVyICYmICFfdm0uY29sbGFwc2VkXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImZvb3RlclwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJjYXJkLWZvb3RlclwiIH0sXG4gICAgICAgICAgICBfdm0uX2woX3ZtLmZvb3Rlckl0ZW1zLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICB7IGtleTogaSwgc3RhdGljQ2xhc3M6IFwiY2FyZC1mb290ZXItaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgW192bS5fdChcImZvb3Rlci1pdGVtLVwiICsgaSldLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKCksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLm92ZXJsYXkgPyBfYyhcIm92ZXJsYXlcIiwgeyBhdHRyczogeyBzaXplOiBcIm1lZGl1bVwiIH0gfSkgOiBfdm0uX2UoKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLWxlZnRcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1zZWFyY2hcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWY1YTBlYTE2XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1mNWEwZWExNlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2J1bG1hL0NhcmQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCAyIDMgMjggMzAiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1jZW50ZXJlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLXRocmVlLXF1YXJ0ZXJzXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYW5pbWF0ZWQgZmFkZUluXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiaW5pdGlhbGlzZWRcIj5cbiAgICAgICAgICAgICAgICA8Y2VudGVyIGNsYXNzPVwiaGFzLXBhZGRpbmctYm90dG9tLWxhcmdlXCI+XG4gICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cInRpdGxlIGlzLTVcIj57eyByb2xlLmRpc3BsYXlfbmFtZSB9fTwvaDU+XG4gICAgICAgICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgICAgICAgICAgPGNoZWNrYm94LW1hbmFnZXIgOnRpdGxlPVwiX18oJ01lbnVzJylcIlxuICAgICAgICAgICAgICAgICAgICA6cm9sZS1wZXJtaXNzaW9ucz1cInJvbGVNZW51c1wiXG4gICAgICAgICAgICAgICAgICAgIDpncm91cC1kYXRhPVwibWVudXNcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwibWVudXMubGVuZ3RoXCI+XG4gICAgICAgICAgICAgICAgPC9jaGVja2JveC1tYW5hZ2VyPlxuXG4gICAgICAgICAgICAgICAgPGNoZWNrYm94LW1hbmFnZXIgOnRpdGxlPVwiX18oJ1Blcm1pc3NzaW9ucycpXCJcbiAgICAgICAgICAgICAgICAgICAgOnJvbGUtcGVybWlzc2lvbnM9XCJyb2xlUGVybWlzc2lvbnNcIlxuICAgICAgICAgICAgICAgICAgICA6Z3JvdXAtZGF0YT1cInBlcm1pc3Npb25zXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIm1lbnVzLmxlbmd0aFwiPlxuICAgICAgICAgICAgICAgIDwvY2hlY2tib3gtbWFuYWdlcj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXN1Y2Nlc3MgaGFzLW1hcmdpbi10b3AtbGFyZ2UgaXMtcHVsbGVkLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwidXBkYXRlXCI+XG4gICAgICAgICAgICAgICAgICAgIHt7IF9fKFwiVXBkYXRlXCIpIH19XG4gICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlzLWNsZWFyZml4XCI+PC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IENoZWNrYm94TWFuYWdlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7IENoZWNrYm94TWFuYWdlciB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgLi4ubWFwR2V0dGVycygnbG9jYWxlJywgWydfXyddKSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJvbGVJZDogdGhpcy4kcm91dGUucGFyYW1zLnJvbGUsXG4gICAgICAgICAgICByb2xlOiB7fSxcbiAgICAgICAgICAgIG1lbnVzOiBbXSxcbiAgICAgICAgICAgIHBlcm1pc3Npb25zOiB7fSxcbiAgICAgICAgICAgIHJvbGVNZW51czogW10sXG4gICAgICAgICAgICByb2xlUGVybWlzc2lvbnM6IFtdLFxuICAgICAgICAgICAgaW5pdGlhbGlzZWQ6IGZhbHNlLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmdldFBlcm1pc3Npb25zKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0UGVybWlzc2lvbnMoKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQocm91dGUoJ3N5c3RlbS5yb2xlcy5nZXRQZXJtaXNzaW9ucycsIHRoaXMucm9sZUlkLCBmYWxzZSkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRhKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0RGF0YShyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpcy5tZW51cyA9IHJlc3BvbnNlLmRhdGEubWVudXM7XG4gICAgICAgICAgICB0aGlzLnJvbGVNZW51cyA9IHJlc3BvbnNlLmRhdGEucm9sZU1lbnVzO1xuICAgICAgICAgICAgdGhpcy5yb2xlUGVybWlzc2lvbnMgPSByZXNwb25zZS5kYXRhLnJvbGVQZXJtaXNzaW9ucztcbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbnMgPSByZXNwb25zZS5kYXRhLnBlcm1pc3Npb25zO1xuICAgICAgICAgICAgdGhpcy5yb2xlID0gcmVzcG9uc2UuZGF0YS5yb2xlO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGUoKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KHJvdXRlKCdzeXN0ZW0ucm9sZXMuc2V0UGVybWlzc2lvbnMnLCBbXSwgZmFsc2UpLCB0aGlzLnBvc3RQYXJhbXMoKSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhyZXNwb25zZS5kYXRhLm1lc3NhZ2UpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0UGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICByb2xlX2lkOiB0aGlzLnJvbGVJZCxcbiAgICAgICAgICAgICAgICByb2xlTWVudXM6IHRoaXMucm9sZU1lbnVzLFxuICAgICAgICAgICAgICAgIHJvbGVQZXJtaXNzaW9uczogdGhpcy5yb2xlUGVybWlzc2lvbnMsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9Db25maWd1cmUudnVlIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03OWU3ZTg3ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DaGVja2JveE1hbmFnZXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9DaGVja2JveE1hbmFnZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03OWU3ZTg3ZlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NoZWNrYm94TWFuYWdlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzllN2U4N2ZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03OWU3ZTg3ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUzNVxuLy8gbW9kdWxlIGNodW5rcyA9IDI4IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc5ZTdlODdmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NoZWNrYm94TWFuYWdlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcImZkOGJkNTg0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTc5ZTdlODdmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NoZWNrYm94TWFuYWdlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzllN2U4N2ZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2hlY2tib3hNYW5hZ2VyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03OWU3ZTg3ZlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUzNlxuLy8gbW9kdWxlIGNodW5rcyA9IDI4IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmRpdi5maWVsZC5jaGVja2JveC1tYW5hZ2VyIHtcXG4gICAgd2lkdGg6IDE1cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL0NoZWNrYm94TWFuYWdlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXdJQTtJQUNBLFlBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiQ2hlY2tib3hNYW5hZ2VyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxjYXJkIDp0aXRsZT1cXFwidGl0bGVcXFwiXFxuICAgICAgICA6b3Blbj1cXFwiZmFsc2VcXFwiXFxuICAgICAgICByZWY9XFxcImNhcmRcXFwiXFxuICAgICAgICA6Y29udHJvbHM9XFxcIjFcXFwiPlxcbiAgICAgICAgPGEgc2xvdD1cXFwiY29udHJvbC0xXFxcIiBjbGFzcz1cXFwiY2FyZC1oZWFkZXItaWNvblxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY2hlY2tib3gtbWFuYWdlciBmaWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJjaGVja2JveFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDppZD1cXFwiJ2NoZWNrYm94LScgKyBfdWlkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XFxcIidjaGVja2JveC0nICsgX3VpZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJpcy1jaGVja3JhZGlvIGlzLWluZm9cXFwiXFxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVxcXCJ1cGRhdGVCZWxvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cXFwiJ2NoZWNrYm94LScgKyBfdWlkXFxcIj48L2xhYmVsPlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9hPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiaGFzLXBhZGRpbmctbGVmdC1tZWRpdW0gaGFzLXBhZGRpbmctdG9wLW1lZGl1bSBoYXMtcGFkZGluZy1ib3R0b20tbWVkaXVtXFxcIj5cXG4gICAgICAgICAgICA8Y2hlY2tib3gtbWFuYWdlciB2LWZvcj1cXFwiZ3JvdXAgaW4gc29ydGVkR3JvdXBzXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJncm91cENvdW50XFxcIlxcbiAgICAgICAgICAgICAgICByZWY9XFxcImNoaWxkcmVuXFxcIlxcbiAgICAgICAgICAgICAgICA6dGl0bGU9XFxcImdyb3VwXFxcIlxcbiAgICAgICAgICAgICAgICA6a2V5PVxcXCJncm91cFxcXCJcXG4gICAgICAgICAgICAgICAgOmdyb3VwLWRhdGE9XFxcImdyb3VwRGF0YVtncm91cF1cXFwiXFxuICAgICAgICAgICAgICAgIDpyb2xlLXBlcm1pc3Npb25zPVxcXCJyb2xlUGVybWlzc2lvbnNcXFwiXFxuICAgICAgICAgICAgICAgIEB1cGRhdGU9XFxcInVwZGF0ZVxcXCI+XFxuICAgICAgICAgICAgPC9jaGVja2JveC1tYW5hZ2VyPlxcbiAgICAgICAgICAgIDxtYW5hZ2VyLWNvbnRlbnQgdi1pZj1cXFwiaXNSb290XFxcIlxcbiAgICAgICAgICAgICAgICByZWY9XFxcImNvbnRlbnRcXFwiXFxuICAgICAgICAgICAgICAgIDpncm91cC1kYXRhPVxcXCJncm91cERhdGFcXFwiXFxuICAgICAgICAgICAgICAgIDpyb2xlLXBlcm1pc3Npb25zPVxcXCJyb2xlUGVybWlzc2lvbnNcXFwiXFxuICAgICAgICAgICAgICAgIEBjaGVja2VkPVxcXCJzZXRDaGVja2VkXFxcIlxcbiAgICAgICAgICAgICAgICBAaW5kZXRlcm1pbmF0ZT1cXFwic2V0SW5kZXRlcm1pbmF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgQHVuY2hlY2tlZD1cXFwic2V0VW5jaGVja2VkXFxcIj5cXG4gICAgICAgICAgICA8L21hbmFnZXItY29udGVudD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2NhcmQ+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCBDYXJkIGZyb20gJy4uL2J1bG1hL0NhcmQudnVlJztcXG5pbXBvcnQgTWFuYWdlckNvbnRlbnQgZnJvbSAnLi9NYW5hZ2VyQ29udGVudC52dWUnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ0NoZWNrYm94TWFuYWdlcicsXFxuXFxuICAgIGNvbXBvbmVudHM6IHsgQ2FyZCwgTWFuYWdlckNvbnRlbnQgfSxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHRpdGxlOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGdyb3VwRGF0YToge1xcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHJvbGVQZXJtaXNzaW9uczoge1xcbiAgICAgICAgICAgIHR5cGU6IEFycmF5LFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIGlzUm9vdCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLmdyb3VwRGF0YSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZ3JvdXBDb3VudCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Jvb3QgPyBudWxsIDogT2JqZWN0LmtleXModGhpcy5ncm91cERhdGEpLmxlbmd0aDtcXG4gICAgICAgIH0sXFxuICAgICAgICBzb3J0ZWRHcm91cHMoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSb290ID8gbnVsbCA6IE9iamVjdC5rZXlzKHRoaXMuZ3JvdXBEYXRhKS5zb3J0KCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgY2hlY2tib3goKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBzZXRDaGVja2VkKCkge1xcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guY2hlY2tlZCA9IHRydWU7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0SW5kZXRlcm1pbmF0ZSgpIHtcXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNldFVuY2hlY2tlZCgpIHtcXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnKTtcXG4gICAgICAgIH0sXFxuICAgICAgICB1cGRhdGUoKSB7XFxuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuJHJlZnMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNoZWNrYm94LmNoZWNrZWQpLmxlbmd0aDtcXG5cXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCA9PT0gdGhpcy4kcmVmcy5jaGlsZHJlbi5sZW5ndGgpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDaGVja2VkKCk7XFxuICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgY29uc3QgaW5kZXRlcm1pbmF0ZSA9IHRoaXMuJHJlZnMuY2hpbGRyZW5cXG4gICAgICAgICAgICAgICAgLmZpbHRlcihjaGlsZCA9PiBjaGlsZC5jaGVja2JveC5pbmRldGVybWluYXRlKS5sZW5ndGg7XFxuXFxuICAgICAgICAgICAgaWYgKGNoZWNrZWQgfHwgaW5kZXRlcm1pbmF0ZSkge1xcbiAgICAgICAgICAgICAgICB0aGlzLnNldEluZGV0ZXJtaW5hdGUoKTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICB0aGlzLnNldFVuY2hlY2tlZCgpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHVwZGF0ZUJlbG93KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUm9vdFxcbiAgICAgICAgICAgICAgICA/IHRoaXMudXBkYXRlQ29udGVudCgpXFxuICAgICAgICAgICAgICAgIDogdGhpcy51cGRhdGVDaGlsZHJlbigpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHVwZGF0ZUNvbnRlbnQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tib3guY2hlY2tlZFxcbiAgICAgICAgICAgICAgICA/IHRoaXMuJHJlZnMuY29udGVudC5zZXRBbGxDaGVja2VkKClcXG4gICAgICAgICAgICAgICAgOiB0aGlzLiRyZWZzLmNvbnRlbnQuc2V0QWxsVW5jaGVja2VkKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdXBkYXRlQ2hpbGRyZW4oKSB7XFxuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XFxuXFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xcbiAgICAgICAgICAgICAgICBjaGlsZC5jaGVja2JveC5jaGVja2VkID0gc2VsZi5jaGVja2JveC5jaGVja2VkO1xcbiAgICAgICAgICAgICAgICBjaGlsZC51cGRhdGVCZWxvdygpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgZGl2LmZpZWxkLmNoZWNrYm94LW1hbmFnZXIge1xcbiAgICAgICAgd2lkdGg6IDE1cHg7XFxuICAgIH1cXG48L3N0eWxlPlxcblxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03OWU3ZTg3ZlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTUzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDI4IiwiPHRlbXBsYXRlPlxuXG4gICAgPGNhcmQgOnRpdGxlPVwidGl0bGVcIlxuICAgICAgICA6b3Blbj1cImZhbHNlXCJcbiAgICAgICAgcmVmPVwiY2FyZFwiXG4gICAgICAgIDpjb250cm9scz1cIjFcIj5cbiAgICAgICAgPGEgc2xvdD1cImNvbnRyb2wtMVwiIGNsYXNzPVwiY2FyZC1oZWFkZXItaWNvblwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNoZWNrYm94LW1hbmFnZXIgZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgOmlkPVwiJ2NoZWNrYm94LScgKyBfdWlkXCJcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCInY2hlY2tib3gtJyArIF91aWRcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImlzLWNoZWNrcmFkaW8gaXMtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ1cGRhdGVCZWxvd1wiPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgOmZvcj1cIidjaGVja2JveC0nICsgX3VpZFwiPjwvbGFiZWw+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGFzLXBhZGRpbmctbGVmdC1tZWRpdW0gaGFzLXBhZGRpbmctdG9wLW1lZGl1bSBoYXMtcGFkZGluZy1ib3R0b20tbWVkaXVtXCI+XG4gICAgICAgICAgICA8Y2hlY2tib3gtbWFuYWdlciB2LWZvcj1cImdyb3VwIGluIHNvcnRlZEdyb3Vwc1wiXG4gICAgICAgICAgICAgICAgdi1pZj1cImdyb3VwQ291bnRcIlxuICAgICAgICAgICAgICAgIHJlZj1cImNoaWxkcmVuXCJcbiAgICAgICAgICAgICAgICA6dGl0bGU9XCJncm91cFwiXG4gICAgICAgICAgICAgICAgOmtleT1cImdyb3VwXCJcbiAgICAgICAgICAgICAgICA6Z3JvdXAtZGF0YT1cImdyb3VwRGF0YVtncm91cF1cIlxuICAgICAgICAgICAgICAgIDpyb2xlLXBlcm1pc3Npb25zPVwicm9sZVBlcm1pc3Npb25zXCJcbiAgICAgICAgICAgICAgICBAdXBkYXRlPVwidXBkYXRlXCI+XG4gICAgICAgICAgICA8L2NoZWNrYm94LW1hbmFnZXI+XG4gICAgICAgICAgICA8bWFuYWdlci1jb250ZW50IHYtaWY9XCJpc1Jvb3RcIlxuICAgICAgICAgICAgICAgIHJlZj1cImNvbnRlbnRcIlxuICAgICAgICAgICAgICAgIDpncm91cC1kYXRhPVwiZ3JvdXBEYXRhXCJcbiAgICAgICAgICAgICAgICA6cm9sZS1wZXJtaXNzaW9ucz1cInJvbGVQZXJtaXNzaW9uc1wiXG4gICAgICAgICAgICAgICAgQGNoZWNrZWQ9XCJzZXRDaGVja2VkXCJcbiAgICAgICAgICAgICAgICBAaW5kZXRlcm1pbmF0ZT1cInNldEluZGV0ZXJtaW5hdGVcIlxuICAgICAgICAgICAgICAgIEB1bmNoZWNrZWQ9XCJzZXRVbmNoZWNrZWRcIj5cbiAgICAgICAgICAgIDwvbWFuYWdlci1jb250ZW50PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2NhcmQ+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBDYXJkIGZyb20gJy4uL2J1bG1hL0NhcmQudnVlJztcbmltcG9ydCBNYW5hZ2VyQ29udGVudCBmcm9tICcuL01hbmFnZXJDb250ZW50LnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnQ2hlY2tib3hNYW5hZ2VyJyxcblxuICAgIGNvbXBvbmVudHM6IHsgQ2FyZCwgTWFuYWdlckNvbnRlbnQgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIHRpdGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZ3JvdXBEYXRhOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcm9sZVBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBpc1Jvb3QoKSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuaXNBcnJheSh0aGlzLmdyb3VwRGF0YSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdyb3VwQ291bnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc1Jvb3QgPyBudWxsIDogT2JqZWN0LmtleXModGhpcy5ncm91cERhdGEpLmxlbmd0aDtcbiAgICAgICAgfSxcbiAgICAgICAgc29ydGVkR3JvdXBzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNSb290ID8gbnVsbCA6IE9iamVjdC5rZXlzKHRoaXMuZ3JvdXBEYXRhKS5zb3J0KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrYm94KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9Y2hlY2tib3hdJyk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0Q2hlY2tlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guaW5kZXRlcm1pbmF0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGVja2JveC5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZScpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRJbmRldGVybWluYXRlKCkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2JveC5jaGVja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94LmluZGV0ZXJtaW5hdGUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlJyk7XG4gICAgICAgIH0sXG4gICAgICAgIHNldFVuY2hlY2tlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tib3guY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5jaGVja2JveC5pbmRldGVybWluYXRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGUnKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgY29uc3QgY2hlY2tlZCA9IHRoaXMuJHJlZnMuY2hpbGRyZW4uZmlsdGVyKGNoaWxkID0+IGNoaWxkLmNoZWNrYm94LmNoZWNrZWQpLmxlbmd0aDtcblxuICAgICAgICAgICAgaWYgKGNoZWNrZWQgPT09IHRoaXMuJHJlZnMuY2hpbGRyZW4ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDaGVja2VkKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbmRldGVybWluYXRlID0gdGhpcy4kcmVmcy5jaGlsZHJlblxuICAgICAgICAgICAgICAgIC5maWx0ZXIoY2hpbGQgPT4gY2hpbGQuY2hlY2tib3guaW5kZXRlcm1pbmF0ZSkubGVuZ3RoO1xuXG4gICAgICAgICAgICBpZiAoY2hlY2tlZCB8fCBpbmRldGVybWluYXRlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRJbmRldGVybWluYXRlKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLnNldFVuY2hlY2tlZCgpO1xuICAgICAgICB9LFxuICAgICAgICB1cGRhdGVCZWxvdygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzUm9vdFxuICAgICAgICAgICAgICAgID8gdGhpcy51cGRhdGVDb250ZW50KClcbiAgICAgICAgICAgICAgICA6IHRoaXMudXBkYXRlQ2hpbGRyZW4oKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ29udGVudCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoZWNrYm94LmNoZWNrZWRcbiAgICAgICAgICAgICAgICA/IHRoaXMuJHJlZnMuY29udGVudC5zZXRBbGxDaGVja2VkKClcbiAgICAgICAgICAgICAgICA6IHRoaXMuJHJlZnMuY29udGVudC5zZXRBbGxVbmNoZWNrZWQoKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlQ2hpbGRyZW4oKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgdGhpcy4kcmVmcy5jaGlsZHJlbi5mb3JFYWNoKChjaGlsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNoaWxkLmNoZWNrYm94LmNoZWNrZWQgPSBzZWxmLmNoZWNrYm94LmNoZWNrZWQ7XG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlQmVsb3coKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgZGl2LmZpZWxkLmNoZWNrYm94LW1hbmFnZXIge1xuICAgICAgICB3aWR0aDogMTVweDtcbiAgICB9XG48L3N0eWxlPlxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9NYW5hZ2VyQ29udGVudC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTAzZDU1ODg3XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vTWFuYWdlckNvbnRlbnQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3JvbGVtYW5hZ2VyL01hbmFnZXJDb250ZW50LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0wM2Q1NTg4N1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTAzZDU1ODg3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9NYW5hZ2VyQ29udGVudC52dWVcbi8vIG1vZHVsZSBpZCA9IDE1Mzlcbi8vIG1vZHVsZSBjaHVua3MgPSAyOCIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW11bHRpbGluZSBoYXMtcGFkZGluZy1tZWRpdW1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1oYWxmXCJcbiAgICAgICAgICAgIHYtZm9yPVwiZW50cnkgaW4gZ3JvdXBEYXRhXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImNoZWNrYm94XCJcbiAgICAgICAgICAgICAgICAgICAgOmlkPVwiJ2NoZWNrYm94LScgKyBlbnRyeS5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgOm5hbWU9XCInY2hlY2tib3gtJyArIGVudHJ5Lm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJlbnRyeS5pZFwiXG4gICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJjaGVja2VkSWRzXCJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJpcy1jaGVja3JhZGlvXCI+XG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCA6Zm9yPVwiJ2NoZWNrYm94LScgKyBlbnRyeS5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiA6Y2xhc3M9XCJnZXRDbGFzcyhlbnRyeSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlbnRyeS5kZXNjcmlwdGlvbiB8fCBlbnRyeS5uYW1lIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaGFzLXRleHQtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVudHJ5LmRlZmF1bHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImlzLWljb24gZmEgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXRvb2x0aXA9XCJfXygnRGVmYXVsdCcpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgeyBWVG9vbHRpcCB9IGZyb20gJ3YtdG9vbHRpcCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnTWFuYWdlckNvbnRlbnQnLFxuXG4gICAgZGlyZWN0aXZlczogeyB0b29sdGlwOiBWVG9vbHRpcCB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgZ3JvdXBEYXRhOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcm9sZVBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdsb2NhbGUnLCBbJ19fJ10pLFxuICAgICAgICBwZXJtaXNzaW9uSWRzKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ3JvdXBEYXRhLm1hcChncm91cCA9PiBncm91cC5pZCk7XG4gICAgICAgIH0sXG4gICAgICAgIHN0YXR1cygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrZWRJZHMubGVuZ3RoID09PSB0aGlzLnBlcm1pc3Npb25JZHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICdjaGVja2VkJztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tlZElkcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJ3VuY2hlY2tlZCc7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiAnaW5kZXRlcm1pbmF0ZSc7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIHN0YXR1czoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KHRoaXMuc3RhdHVzKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGNoZWNrZWRJZHMoKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUdyb3VwUGVybWlzc2lvbnMoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQ2hlY2tlZFBlcm1pc3Npb25zKCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGVja2VkSWRzOiBbXSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5zZXRDaGVja2VkSWRzKCk7XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgc2V0Q2hlY2tlZElkcygpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkSWRzID0gdGhpcy5wZXJtaXNzaW9uSWRzXG4gICAgICAgICAgICAgICAgLmZpbHRlcihpZCA9PiBzZWxmLnJvbGVQZXJtaXNzaW9ucy5pbmRleE9mKGlkKSA+IC0xKTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0QWxsQ2hlY2tlZCgpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZElkcyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wZXJtaXNzaW9uSWRzKSk7XG4gICAgICAgICAgICB0aGlzLmNoZWNrSWZFbXB0eSgpO1xuICAgICAgICB9LFxuICAgICAgICBzZXRBbGxVbmNoZWNrZWQoKSB7XG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRJZHMgPSBbXTtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tJZkVtcHR5KCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldENsYXNzKGVudHJ5KSB7XG4gICAgICAgICAgICBpZiAoIU9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlbnRyeSwgJ3R5cGUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZW50cnkudHlwZSA9PT0gMSA/ICdoYXMtdGV4dC13YXJuaW5nJyA6ICdoYXMtdGV4dC1zdWNjZXNzJztcbiAgICAgICAgfSxcbiAgICAgICAgY2hlY2tJZkVtcHR5KCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ3JvdXBEYXRhLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQodGhpcy5zdGF0dXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICByZW1vdmVHcm91cFBlcm1pc3Npb25zKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIHRoaXMucGVybWlzc2lvbklkcy5mb3JFYWNoKChpZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IHNlbGYucm9sZVBlcm1pc3Npb25zLmluZGV4T2YoaWQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGlkeCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yb2xlUGVybWlzc2lvbnMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZENoZWNrZWRQZXJtaXNzaW9ucygpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuXG4gICAgICAgICAgICB0aGlzLmNoZWNrZWRJZHMuZm9yRWFjaCgoaWQpID0+IHtcbiAgICAgICAgICAgICAgICBzZWxmLnJvbGVQZXJtaXNzaW9ucy5wdXNoKGlkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmNoZWNrSWZFbXB0eSgpO1xuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9yb2xlbWFuYWdlci9NYW5hZ2VyQ29udGVudC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW11bHRpbGluZSBoYXMtcGFkZGluZy1tZWRpdW1cIiB9LFxuICAgIF92bS5fbChfdm0uZ3JvdXBEYXRhLCBmdW5jdGlvbihlbnRyeSkge1xuICAgICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLWhhbGZcIiB9LCBbXG4gICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmllbGRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5jaGVja2VkSWRzLFxuICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tlZElkc1wiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpcy1jaGVja3JhZGlvXCIsXG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgIGlkOiBcImNoZWNrYm94LVwiICsgZW50cnkubmFtZSxcbiAgICAgICAgICAgICAgbmFtZTogXCJjaGVja2JveC1cIiArIGVudHJ5Lm5hbWVcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICB2YWx1ZTogZW50cnkuaWQsXG4gICAgICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmNoZWNrZWRJZHMpXG4gICAgICAgICAgICAgICAgPyBfdm0uX2koX3ZtLmNoZWNrZWRJZHMsIGVudHJ5LmlkKSA+IC0xXG4gICAgICAgICAgICAgICAgOiBfdm0uY2hlY2tlZElkc1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIGNoYW5nZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5jaGVja2VkSWRzLFxuICAgICAgICAgICAgICAgICAgJCRlbCA9ICRldmVudC50YXJnZXQsXG4gICAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgJCR2ID0gZW50cnkuaWQsXG4gICAgICAgICAgICAgICAgICAgICQkaSA9IF92bS5faSgkJGEsICQkdilcbiAgICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLmNoZWNrZWRJZHMgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgKF92bS5jaGVja2VkSWRzID0gJCRhXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2xpY2UoMCwgJCRpKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBfdm0uY2hlY2tlZElkcyA9ICQkY1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJjaGVja2JveC1cIiArIGVudHJ5Lm5hbWUgfSB9LCBbXG4gICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBjbGFzczogX3ZtLmdldENsYXNzKGVudHJ5KSB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhlbnRyeS5kZXNjcmlwdGlvbiB8fCBlbnRyeS5uYW1lKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgZW50cnkuZGVmYXVsdFxuICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaGFzLXRleHQtaW5mb1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi10b29sdGlwXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLl9fKFwiRGVmYXVsdFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiX18oJ0RlZmF1bHQnKVwiXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpcy1pY29uIGZhIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCJcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIH0pXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMDNkNTU4ODdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTAzZDU1ODg3XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvTWFuYWdlckNvbnRlbnQudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMjgiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiY2FyZFwiLFxuICAgIHsgcmVmOiBcImNhcmRcIiwgYXR0cnM6IHsgdGl0bGU6IF92bS50aXRsZSwgb3BlbjogZmFsc2UsIGNvbnRyb2xzOiAxIH0gfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJhXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJjYXJkLWhlYWRlci1pY29uXCIsXG4gICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJjb250cm9sLTFcIiB9LFxuICAgICAgICAgIHNsb3Q6IFwiY29udHJvbC0xXCJcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3gtbWFuYWdlciBmaWVsZFwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpcy1jaGVja3JhZGlvIGlzLWluZm9cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgICAgICAgaWQ6IFwiY2hlY2tib3gtXCIgKyBfdm0uX3VpZCxcbiAgICAgICAgICAgICAgICBuYW1lOiBcImNoZWNrYm94LVwiICsgX3ZtLl91aWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0udXBkYXRlQmVsb3cgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IGF0dHJzOiB7IGZvcjogXCJjaGVja2JveC1cIiArIF92bS5fdWlkIH0gfSlcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImRpdlwiLFxuICAgICAgICB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICBcImhhcy1wYWRkaW5nLWxlZnQtbWVkaXVtIGhhcy1wYWRkaW5nLXRvcC1tZWRpdW0gaGFzLXBhZGRpbmctYm90dG9tLW1lZGl1bVwiXG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfdm0uX2woX3ZtLnNvcnRlZEdyb3VwcywgZnVuY3Rpb24oZ3JvdXApIHtcbiAgICAgICAgICAgIHJldHVybiBfdm0uZ3JvdXBDb3VudFxuICAgICAgICAgICAgICA/IF9jKFwiY2hlY2tib3gtbWFuYWdlclwiLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IGdyb3VwLFxuICAgICAgICAgICAgICAgICAgcmVmOiBcImNoaWxkcmVuXCIsXG4gICAgICAgICAgICAgICAgICByZWZJbkZvcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBncm91cCxcbiAgICAgICAgICAgICAgICAgICAgXCJncm91cC1kYXRhXCI6IF92bS5ncm91cERhdGFbZ3JvdXBdLFxuICAgICAgICAgICAgICAgICAgICBcInJvbGUtcGVybWlzc2lvbnNcIjogX3ZtLnJvbGVQZXJtaXNzaW9uc1xuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7IHVwZGF0ZTogX3ZtLnVwZGF0ZSB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIH0pLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmlzUm9vdFxuICAgICAgICAgICAgPyBfYyhcIm1hbmFnZXItY29udGVudFwiLCB7XG4gICAgICAgICAgICAgICAgcmVmOiBcImNvbnRlbnRcIixcbiAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgXCJncm91cC1kYXRhXCI6IF92bS5ncm91cERhdGEsXG4gICAgICAgICAgICAgICAgICBcInJvbGUtcGVybWlzc2lvbnNcIjogX3ZtLnJvbGVQZXJtaXNzaW9uc1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgIGNoZWNrZWQ6IF92bS5zZXRDaGVja2VkLFxuICAgICAgICAgICAgICAgICAgaW5kZXRlcm1pbmF0ZTogX3ZtLnNldEluZGV0ZXJtaW5hdGUsXG4gICAgICAgICAgICAgICAgICB1bmNoZWNrZWQ6IF92bS5zZXRVbmNoZWNrZWRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgIF0sXG4gICAgICAgIDJcbiAgICAgIClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzllN2U4N2ZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTc5ZTdlODdmXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vcm9sZW1hbmFnZXIvQ2hlY2tib3hNYW5hZ2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTU0MlxuLy8gbW9kdWxlIGNodW5rcyA9IDI4IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtY2VudGVyZWRcIiB9LCBbXG4gICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtdGhyZWUtcXVhcnRlcnNcIiB9LCBbXG4gICAgICBfdm0uaW5pdGlhbGlzZWRcbiAgICAgICAgPyBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImFuaW1hdGVkIGZhZGVJblwiIH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiY2VudGVyXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFzLXBhZGRpbmctYm90dG9tLWxhcmdlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiaDVcIiwgeyBzdGF0aWNDbGFzczogXCJ0aXRsZSBpcy01XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucm9sZS5kaXNwbGF5X25hbWUpKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfdm0ubWVudXMubGVuZ3RoXG4gICAgICAgICAgICAgICAgPyBfYyhcImNoZWNrYm94LW1hbmFnZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBfdm0uX18oXCJNZW51c1wiKSxcbiAgICAgICAgICAgICAgICAgICAgICBcInJvbGUtcGVybWlzc2lvbnNcIjogX3ZtLnJvbGVNZW51cyxcbiAgICAgICAgICAgICAgICAgICAgICBcImdyb3VwLWRhdGFcIjogX3ZtLm1lbnVzXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLm1lbnVzLmxlbmd0aFxuICAgICAgICAgICAgICAgID8gX2MoXCJjaGVja2JveC1tYW5hZ2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogX3ZtLl9fKFwiUGVybWlzc3Npb25zXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIFwicm9sZS1wZXJtaXNzaW9uc1wiOiBfdm0ucm9sZVBlcm1pc3Npb25zLFxuICAgICAgICAgICAgICAgICAgICAgIFwiZ3JvdXAtZGF0YVwiOiBfdm0ucGVybWlzc2lvbnNcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbiBpcy1zdWNjZXNzIGhhcy1tYXJnaW4tdG9wLWxhcmdlIGlzLXB1bGxlZC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgb246IHsgY2xpY2s6IF92bS51cGRhdGUgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIlVwZGF0ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiaXMtY2xlYXJmaXhcIiB9KVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIDFcbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03NTkwNmE3MVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNzU5MDZhNzFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9Db25maWd1cmUudnVlXG4vLyBtb2R1bGUgaWQgPSAxNTQzXG4vLyBtb2R1bGUgY2h1bmtzID0gMjgiXSwic291cmNlUm9vdCI6IiJ9