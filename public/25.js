webpackJsonp([25],{

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(986)
}
var normalizeComponent = __webpack_require__(0)
/* script */
var __vue_script__ = __webpack_require__(988)
/* template */
var __vue_template__ = __webpack_require__(989)
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
Component.options.__file = "resources/assets/js/pages/system/logs/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a75b618c", Component.options)
  } else {
    hotAPI.reload("data-v-a75b618c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 986:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(987);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("d0498a4e", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a75b618c\",\"scoped\":false,\"hasInlineConfig\":true}!./atom-one-light.css", function() {
     var newContent = require("!!../../css-loader/index.js!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a75b618c\",\"scoped\":false,\"hasInlineConfig\":true}!./atom-one-light.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 987:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(false);
// imports


// module
exports.push([module.i, "/*\n\nAtom One Light by Daniel Gamage\nOriginal One Light Syntax theme from https://github.com/atom/one-light-syntax\n\nbase:    #fafafa\nmono-1:  #383a42\nmono-2:  #686b77\nmono-3:  #a0a1a7\nhue-1:   #0184bb\nhue-2:   #4078f2\nhue-3:   #a626a4\nhue-4:   #50a14f\nhue-5:   #e45649\nhue-5-2: #c91243\nhue-6:   #986801\nhue-6-2: #c18401\n\n*/\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #383a42;\n  background: #fafafa;\n}\n.hljs-comment,\n.hljs-quote {\n  color: #a0a1a7;\n  font-style: italic;\n}\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #a626a4;\n}\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e45649;\n}\n.hljs-literal {\n  color: #0184bb;\n}\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta-string {\n  color: #50a14f;\n}\n.hljs-built_in,\n.hljs-class .hljs-title {\n  color: #c18401;\n}\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #986801;\n}\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #4078f2;\n}\n.hljs-emphasis {\n  font-style: italic;\n}\n.hljs-strong {\n  font-weight: bold;\n}\n.hljs-link {\n  text-decoration: underline;\n}\n", ""]);

// exports


/***/ }),

/***/ 988:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__modules_enso_directives_hljs__ = __webpack_require__(31);
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





/* harmony default export */ __webpack_exports__["default"] = ({
    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__'])),

    data: function data() {
        return {
            log: null,
            content: null
        };
    },
    created: function created() {
        var _this = this;

        axios.get(route('system.logs.show', this.$route.params.id, false)).then(function (_ref) {
            var data = _ref.data;

            _this.log = data.log;
        }).catch(function (error) {
            return _this.handleError(error);
        });
    }
});

/***/ }),

/***/ 989:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("article", { staticClass: "message" }, [
    _vm.log
      ? _c("div", { staticClass: "message-header" }, [
          _c("p", [
            _vm._v(_vm._s(_vm.__("The log file")) + "\n                "),
            _c("code", [_vm._v(_vm._s(_vm.log.name))]),
            _vm._v(
              "\n                " +
                _vm._s(_vm.__("was last updated")) +
                "\n                " +
                _vm._s(
                  _vm._f("timeFromNow")(
                    _vm.log.modified ? _vm.log.modified.date : null
                  )
                ) +
                ".\n                " +
                _vm._s(_vm.__("Current file size is")) +
                " " +
                _vm._s(_vm.log.size) +
                " " +
                _vm._s(_vm.__("MB")) +
                "\n            "
            )
          ]),
          _vm._v(" "),
          _c("button", {
            staticClass: "delete",
            on: {
              click: function($event) {
                _vm.$router.push({ name: "system.logs.index" })
              }
            }
          })
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.log
      ? _c("div", { staticClass: "message-body" }, [
          _c("pre", { directives: [{ name: "hljs", rawName: "v-hljs" }] }, [
            _vm._v("                "),
            _c("code", { staticClass: "php" }, [
              _vm._v(
                "\n" +
                  _vm._s(_vm.log.content || _vm.__("The log file is empty")) +
                  "\n                "
              )
            ]),
            _vm._v("\n            ")
          ])
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
    require("vue-hot-reload-api")      .rerender("data-v-a75b618c", module.exports)
  }
}

/***/ })

});