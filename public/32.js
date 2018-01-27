webpackJsonp([32],{

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1567)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1569)
/* template */
var __vue_template__ = __webpack_require__(1570)
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

/***/ 1567:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1568);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("098f8712", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a75b618c\",\"scoped\":false,\"hasInlineConfig\":true}!./atom-one-light.css", function() {
     var newContent = require("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-a75b618c\",\"scoped\":false,\"hasInlineConfig\":true}!./atom-one-light.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1568:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "/*\n\nAtom One Light by Daniel Gamage\nOriginal One Light Syntax theme from https://github.com/atom/one-light-syntax\n\nbase:    #fafafa\nmono-1:  #383a42\nmono-2:  #686b77\nmono-3:  #a0a1a7\nhue-1:   #0184bb\nhue-2:   #4078f2\nhue-3:   #a626a4\nhue-4:   #50a14f\nhue-5:   #e45649\nhue-5-2: #c91243\nhue-6:   #986801\nhue-6-2: #c18401\n\n*/\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #383a42;\n  background: #fafafa;\n}\n.hljs-comment,\n.hljs-quote {\n  color: #a0a1a7;\n  font-style: italic;\n}\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #a626a4;\n}\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e45649;\n}\n.hljs-literal {\n  color: #0184bb;\n}\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta-string {\n  color: #50a14f;\n}\n.hljs-built_in,\n.hljs-class .hljs-title {\n  color: #c18401;\n}\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #986801;\n}\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #4078f2;\n}\n.hljs-emphasis {\n  font-style: italic;\n}\n.hljs-strong {\n  font-weight: bold;\n}\n.hljs-link {\n  text-decoration: underline;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/node_modules/highlight.js/styles/atom-one-light.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;EAkBE;AAEF;EACE,eAAe;EACf,iBAAiB;EACjB,eAAe;EACf,eAAe;EACf,oBAAoB;CACrB;AAED;;EAEE,eAAe;EACf,mBAAmB;CACpB;AAED;;;EAGE,eAAe;CAChB;AAED;;;;;EAKE,eAAe;CAChB;AAED;EACE,eAAe;CAChB;AAED;;;;;EAKE,eAAe;CAChB;AAED;;EAEE,eAAe;CAChB;AAED;;;;;;;;EAQE,eAAe;CAChB;AAED;;;;;;EAME,eAAe;CAChB;AAED;EACE,mBAAmB;CACpB;AAED;EACE,kBAAkB;CACnB;AAED;EACE,2BAA2B;CAC5B","file":"atom-one-light.css","sourcesContent":["/*\n\nAtom One Light by Daniel Gamage\nOriginal One Light Syntax theme from https://github.com/atom/one-light-syntax\n\nbase:    #fafafa\nmono-1:  #383a42\nmono-2:  #686b77\nmono-3:  #a0a1a7\nhue-1:   #0184bb\nhue-2:   #4078f2\nhue-3:   #a626a4\nhue-4:   #50a14f\nhue-5:   #e45649\nhue-5-2: #c91243\nhue-6:   #986801\nhue-6-2: #c18401\n\n*/\n\n.hljs {\n  display: block;\n  overflow-x: auto;\n  padding: 0.5em;\n  color: #383a42;\n  background: #fafafa;\n}\n\n.hljs-comment,\n.hljs-quote {\n  color: #a0a1a7;\n  font-style: italic;\n}\n\n.hljs-doctag,\n.hljs-keyword,\n.hljs-formula {\n  color: #a626a4;\n}\n\n.hljs-section,\n.hljs-name,\n.hljs-selector-tag,\n.hljs-deletion,\n.hljs-subst {\n  color: #e45649;\n}\n\n.hljs-literal {\n  color: #0184bb;\n}\n\n.hljs-string,\n.hljs-regexp,\n.hljs-addition,\n.hljs-attribute,\n.hljs-meta-string {\n  color: #50a14f;\n}\n\n.hljs-built_in,\n.hljs-class .hljs-title {\n  color: #c18401;\n}\n\n.hljs-attr,\n.hljs-variable,\n.hljs-template-variable,\n.hljs-type,\n.hljs-selector-class,\n.hljs-selector-attr,\n.hljs-selector-pseudo,\n.hljs-number {\n  color: #986801;\n}\n\n.hljs-symbol,\n.hljs-bullet,\n.hljs-link,\n.hljs-meta,\n.hljs-selector-id,\n.hljs-title {\n  color: #4078f2;\n}\n\n.hljs-emphasis {\n  font-style: italic;\n}\n\n.hljs-strong {\n  font-weight: bold;\n}\n\n.hljs-link {\n  text-decoration: underline;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1569:
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

/***/ 1570:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9sb2dzL1Nob3cudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWxpZ2h0LmNzcz8xZDc2Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWxpZ2h0LmNzcyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vbG9ncy9TaG93LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9sb2dzL1Nob3cudnVlPzgwZTkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeU07QUFDek07QUFDQTtBQUNBO0FBQ0EsNkNBQWlWO0FBQ2pWO0FBQ0EsK0NBQXNMO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxzQ0FBNkw7QUFDN0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHQUEwRyxrRkFBa0Y7QUFDNUwsbUhBQW1ILGtGQUFrRjtBQUNyTTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSxzWEFBdVgsbUJBQW1CLHFCQUFxQixtQkFBbUIsbUJBQW1CLHdCQUF3QixHQUFHLCtCQUErQixtQkFBbUIsdUJBQXVCLEdBQUcsZ0RBQWdELG1CQUFtQixHQUFHLGtGQUFrRixtQkFBbUIsR0FBRyxpQkFBaUIsbUJBQW1CLEdBQUcsc0ZBQXNGLG1CQUFtQixHQUFHLDRDQUE0QyxtQkFBbUIsR0FBRywwSkFBMEosbUJBQW1CLEdBQUcsMkZBQTJGLG1CQUFtQixHQUFHLGtCQUFrQix1QkFBdUIsR0FBRyxnQkFBZ0Isc0JBQXNCLEdBQUcsY0FBYywrQkFBK0IsR0FBRyxVQUFVLGtKQUFrSixNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLE1BQU0sTUFBTSxVQUFVLFlBQVksTUFBTSxPQUFPLFVBQVUsTUFBTSxTQUFTLFVBQVUsTUFBTSxLQUFLLFVBQVUsTUFBTSxTQUFTLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxZQUFZLFVBQVUsTUFBTSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVkscVpBQXFaLG1CQUFtQixxQkFBcUIsbUJBQW1CLG1CQUFtQix3QkFBd0IsR0FBRyxpQ0FBaUMsbUJBQW1CLHVCQUF1QixHQUFHLGtEQUFrRCxtQkFBbUIsR0FBRyxvRkFBb0YsbUJBQW1CLEdBQUcsbUJBQW1CLG1CQUFtQixHQUFHLHdGQUF3RixtQkFBbUIsR0FBRyw4Q0FBOEMsbUJBQW1CLEdBQUcsNEpBQTRKLG1CQUFtQixHQUFHLDZGQUE2RixtQkFBbUIsR0FBRyxvQkFBb0IsdUJBQXVCLEdBQUcsa0JBQWtCLHNCQUFzQixHQUFHLGdCQUFnQiwrQkFBK0IsR0FBRyxxQkFBcUI7O0FBRWx1Rzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcUJBOztBQUVBO0FBRUEsdUdBR0E7OzBCQUNBOztpQkFFQTtxQkFFQTtBQUhBO0FBS0E7O0FBQ0E7OztBQUNBOzs2QkFDQTs7cUNBQ0E7O0FBQ0E7QUFoQkEsRzs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5QkFBeUI7QUFDakQ7QUFDQSxtQkFBbUIsZ0NBQWdDO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsNEJBQTRCO0FBQzlEO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsOEJBQThCO0FBQ2pELHFCQUFxQixlQUFlLGtDQUFrQyxHQUFHO0FBQ3pFO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjMyLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1hNzViNjE4Y1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0haGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1saWdodC5jc3NcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi1hNzViNjE4Y1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9sb2dzL1Nob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWE3NWI2MThjXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtYTc1YjYxOGNcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDExMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtYTc1YjYxOGNcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4vYXRvbS1vbmUtbGlnaHQuY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjA5OGY4NzEyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi1hNzViNjE4Y1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi9hdG9tLW9uZS1saWdodC5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LWE3NWI2MThjXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuL2F0b20tb25lLWxpZ2h0LmNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi1hNzViNjE4Y1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9oaWdobGlnaHQuanMvc3R5bGVzL2F0b20tb25lLWxpZ2h0LmNzc1xuLy8gbW9kdWxlIGlkID0gMTU2N1xuLy8gbW9kdWxlIGNodW5rcyA9IDMyIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLypcXG5cXG5BdG9tIE9uZSBMaWdodCBieSBEYW5pZWwgR2FtYWdlXFxuT3JpZ2luYWwgT25lIExpZ2h0IFN5bnRheCB0aGVtZSBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9hdG9tL29uZS1saWdodC1zeW50YXhcXG5cXG5iYXNlOiAgICAjZmFmYWZhXFxubW9uby0xOiAgIzM4M2E0Mlxcbm1vbm8tMjogICM2ODZiNzdcXG5tb25vLTM6ICAjYTBhMWE3XFxuaHVlLTE6ICAgIzAxODRiYlxcbmh1ZS0yOiAgICM0MDc4ZjJcXG5odWUtMzogICAjYTYyNmE0XFxuaHVlLTQ6ICAgIzUwYTE0Zlxcbmh1ZS01OiAgICNlNDU2NDlcXG5odWUtNS0yOiAjYzkxMjQzXFxuaHVlLTY6ICAgIzk4NjgwMVxcbmh1ZS02LTI6ICNjMTg0MDFcXG5cXG4qL1xcbi5obGpzIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgb3ZlcmZsb3cteDogYXV0bztcXG4gIHBhZGRpbmc6IDAuNWVtO1xcbiAgY29sb3I6ICMzODNhNDI7XFxuICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xcbn1cXG4uaGxqcy1jb21tZW50LFxcbi5obGpzLXF1b3RlIHtcXG4gIGNvbG9yOiAjYTBhMWE3O1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG4uaGxqcy1kb2N0YWcsXFxuLmhsanMta2V5d29yZCxcXG4uaGxqcy1mb3JtdWxhIHtcXG4gIGNvbG9yOiAjYTYyNmE0O1xcbn1cXG4uaGxqcy1zZWN0aW9uLFxcbi5obGpzLW5hbWUsXFxuLmhsanMtc2VsZWN0b3ItdGFnLFxcbi5obGpzLWRlbGV0aW9uLFxcbi5obGpzLXN1YnN0IHtcXG4gIGNvbG9yOiAjZTQ1NjQ5O1xcbn1cXG4uaGxqcy1saXRlcmFsIHtcXG4gIGNvbG9yOiAjMDE4NGJiO1xcbn1cXG4uaGxqcy1zdHJpbmcsXFxuLmhsanMtcmVnZXhwLFxcbi5obGpzLWFkZGl0aW9uLFxcbi5obGpzLWF0dHJpYnV0ZSxcXG4uaGxqcy1tZXRhLXN0cmluZyB7XFxuICBjb2xvcjogIzUwYTE0ZjtcXG59XFxuLmhsanMtYnVpbHRfaW4sXFxuLmhsanMtY2xhc3MgLmhsanMtdGl0bGUge1xcbiAgY29sb3I6ICNjMTg0MDE7XFxufVxcbi5obGpzLWF0dHIsXFxuLmhsanMtdmFyaWFibGUsXFxuLmhsanMtdGVtcGxhdGUtdmFyaWFibGUsXFxuLmhsanMtdHlwZSxcXG4uaGxqcy1zZWxlY3Rvci1jbGFzcyxcXG4uaGxqcy1zZWxlY3Rvci1hdHRyLFxcbi5obGpzLXNlbGVjdG9yLXBzZXVkbyxcXG4uaGxqcy1udW1iZXIge1xcbiAgY29sb3I6ICM5ODY4MDE7XFxufVxcbi5obGpzLXN5bWJvbCxcXG4uaGxqcy1idWxsZXQsXFxuLmhsanMtbGluayxcXG4uaGxqcy1tZXRhLFxcbi5obGpzLXNlbGVjdG9yLWlkLFxcbi5obGpzLXRpdGxlIHtcXG4gIGNvbG9yOiAjNDA3OGYyO1xcbn1cXG4uaGxqcy1lbXBoYXNpcyB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcbi5obGpzLXN0cm9uZyB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmhsanMtbGluayB7XFxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvbm9kZV9tb2R1bGVzL2hpZ2hsaWdodC5qcy9zdHlsZXMvYXRvbS1vbmUtbGlnaHQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7RUFrQkU7QUFFRjtFQUNFLGVBQWU7RUFDZixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGVBQWU7RUFDZixvQkFBb0I7Q0FDckI7QUFFRDs7RUFFRSxlQUFlO0VBQ2YsbUJBQW1CO0NBQ3BCO0FBRUQ7OztFQUdFLGVBQWU7Q0FDaEI7QUFFRDs7Ozs7RUFLRSxlQUFlO0NBQ2hCO0FBRUQ7RUFDRSxlQUFlO0NBQ2hCO0FBRUQ7Ozs7O0VBS0UsZUFBZTtDQUNoQjtBQUVEOztFQUVFLGVBQWU7Q0FDaEI7QUFFRDs7Ozs7Ozs7RUFRRSxlQUFlO0NBQ2hCO0FBRUQ7Ozs7OztFQU1FLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBRUQ7RUFDRSwyQkFBMkI7Q0FDNUJcIixcImZpbGVcIjpcImF0b20tb25lLWxpZ2h0LmNzc1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKlxcblxcbkF0b20gT25lIExpZ2h0IGJ5IERhbmllbCBHYW1hZ2VcXG5PcmlnaW5hbCBPbmUgTGlnaHQgU3ludGF4IHRoZW1lIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2F0b20vb25lLWxpZ2h0LXN5bnRheFxcblxcbmJhc2U6ICAgICNmYWZhZmFcXG5tb25vLTE6ICAjMzgzYTQyXFxubW9uby0yOiAgIzY4NmI3N1xcbm1vbm8tMzogICNhMGExYTdcXG5odWUtMTogICAjMDE4NGJiXFxuaHVlLTI6ICAgIzQwNzhmMlxcbmh1ZS0zOiAgICNhNjI2YTRcXG5odWUtNDogICAjNTBhMTRmXFxuaHVlLTU6ICAgI2U0NTY0OVxcbmh1ZS01LTI6ICNjOTEyNDNcXG5odWUtNjogICAjOTg2ODAxXFxuaHVlLTYtMjogI2MxODQwMVxcblxcbiovXFxuXFxuLmhsanMge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBvdmVyZmxvdy14OiBhdXRvO1xcbiAgcGFkZGluZzogMC41ZW07XFxuICBjb2xvcjogIzM4M2E0MjtcXG4gIGJhY2tncm91bmQ6ICNmYWZhZmE7XFxufVxcblxcbi5obGpzLWNvbW1lbnQsXFxuLmhsanMtcXVvdGUge1xcbiAgY29sb3I6ICNhMGExYTc7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxufVxcblxcbi5obGpzLWRvY3RhZyxcXG4uaGxqcy1rZXl3b3JkLFxcbi5obGpzLWZvcm11bGEge1xcbiAgY29sb3I6ICNhNjI2YTQ7XFxufVxcblxcbi5obGpzLXNlY3Rpb24sXFxuLmhsanMtbmFtZSxcXG4uaGxqcy1zZWxlY3Rvci10YWcsXFxuLmhsanMtZGVsZXRpb24sXFxuLmhsanMtc3Vic3Qge1xcbiAgY29sb3I6ICNlNDU2NDk7XFxufVxcblxcbi5obGpzLWxpdGVyYWwge1xcbiAgY29sb3I6ICMwMTg0YmI7XFxufVxcblxcbi5obGpzLXN0cmluZyxcXG4uaGxqcy1yZWdleHAsXFxuLmhsanMtYWRkaXRpb24sXFxuLmhsanMtYXR0cmlidXRlLFxcbi5obGpzLW1ldGEtc3RyaW5nIHtcXG4gIGNvbG9yOiAjNTBhMTRmO1xcbn1cXG5cXG4uaGxqcy1idWlsdF9pbixcXG4uaGxqcy1jbGFzcyAuaGxqcy10aXRsZSB7XFxuICBjb2xvcjogI2MxODQwMTtcXG59XFxuXFxuLmhsanMtYXR0cixcXG4uaGxqcy12YXJpYWJsZSxcXG4uaGxqcy10ZW1wbGF0ZS12YXJpYWJsZSxcXG4uaGxqcy10eXBlLFxcbi5obGpzLXNlbGVjdG9yLWNsYXNzLFxcbi5obGpzLXNlbGVjdG9yLWF0dHIsXFxuLmhsanMtc2VsZWN0b3ItcHNldWRvLFxcbi5obGpzLW51bWJlciB7XFxuICBjb2xvcjogIzk4NjgwMTtcXG59XFxuXFxuLmhsanMtc3ltYm9sLFxcbi5obGpzLWJ1bGxldCxcXG4uaGxqcy1saW5rLFxcbi5obGpzLW1ldGEsXFxuLmhsanMtc2VsZWN0b3ItaWQsXFxuLmhsanMtdGl0bGUge1xcbiAgY29sb3I6ICM0MDc4ZjI7XFxufVxcblxcbi5obGpzLWVtcGhhc2lzIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLmhsanMtc3Ryb25nIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uaGxqcy1saW5rIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtYTc1YjYxOGNcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvaGlnaGxpZ2h0LmpzL3N0eWxlcy9hdG9tLW9uZS1saWdodC5jc3Ncbi8vIG1vZHVsZSBpZCA9IDE1Njhcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiIsIjx0ZW1wbGF0ZT5cblxuICAgIDxhcnRpY2xlIGNsYXNzPVwibWVzc2FnZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWVzc2FnZS1oZWFkZXJcIlxuICAgICAgICAgICAgdi1pZj1cImxvZ1wiPlxuICAgICAgICAgICAgPHA+e3sgX18oXCJUaGUgbG9nIGZpbGVcIikgfX1cbiAgICAgICAgICAgICAgICA8Y29kZT57eyBsb2cubmFtZSB9fTwvY29kZT5cbiAgICAgICAgICAgICAgICB7eyBfXyhcIndhcyBsYXN0IHVwZGF0ZWRcIikgfX1cbiAgICAgICAgICAgICAgICB7eyBsb2cubW9kaWZpZWQgPyBsb2cubW9kaWZpZWQuZGF0ZSA6IG51bGwgfCB0aW1lRnJvbU5vdyB9fS5cbiAgICAgICAgICAgICAgICB7eyBfXyhcIkN1cnJlbnQgZmlsZSBzaXplIGlzXCIpIH19IHt7IGxvZy5zaXplIH19IHt7IF9fKFwiTUJcIikgfX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVcIlxuICAgICAgICAgICAgICAgIEBjbGljaz1cIiRyb3V0ZXIucHVzaCh7IG5hbWU6ICdzeXN0ZW0ubG9ncy5pbmRleCcgfSlcIj5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UtYm9keVwiXG4gICAgICAgICAgICB2LWlmPVwibG9nXCI+XG4gICAgICAgICAgICA8cHJlIHYtaGxqcz5cbiAgICAgICAgICAgICAgICA8Y29kZSBjbGFzcz1cInBocFwiPlxue3sgbG9nLmNvbnRlbnQgfHwgX18oJ1RoZSBsb2cgZmlsZSBpcyBlbXB0eScpIH19XG4gICAgICAgICAgICAgICAgPC9jb2RlPlxuICAgICAgICAgICAgPC9wcmU+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvYXJ0aWNsZT5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgLi4ubWFwR2V0dGVycygnbG9jYWxlJywgWydfXyddKSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxvZzogbnVsbCxcbiAgICAgICAgICAgIGNvbnRlbnQ6IG51bGwsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGF4aW9zLmdldChyb3V0ZSgnc3lzdGVtLmxvZ3Muc2hvdycsIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCwgZmFsc2UpKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2cgPSBkYXRhLmxvZztcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNyYz1cImhpZ2hsaWdodC5qcy9zdHlsZXMvYXRvbS1vbmUtbGlnaHQuY3NzXCI+PC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9sb2dzL1Nob3cudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImFydGljbGVcIiwgeyBzdGF0aWNDbGFzczogXCJtZXNzYWdlXCIgfSwgW1xuICAgIF92bS5sb2dcbiAgICAgID8gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJtZXNzYWdlLWhlYWRlclwiIH0sIFtcbiAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX18oXCJUaGUgbG9nIGZpbGVcIikpICsgXCJcXG4gICAgICAgICAgICAgICAgXCIpLFxuICAgICAgICAgICAgX2MoXCJjb2RlXCIsIFtfdm0uX3YoX3ZtLl9zKF92bS5sb2cubmFtZSkpXSksXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9fKFwid2FzIGxhc3QgdXBkYXRlZFwiKSkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICBfdm0uX2YoXCJ0aW1lRnJvbU5vd1wiKShcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmxvZy5tb2RpZmllZCA/IF92bS5sb2cubW9kaWZpZWQuZGF0ZSA6IG51bGxcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICBcIi5cXG4gICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJDdXJyZW50IGZpbGUgc2l6ZSBpc1wiKSkgK1xuICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmxvZy5zaXplKSArXG4gICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJNQlwiKSkgK1xuICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiYnV0dG9uXCIsIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImRlbGV0ZVwiLFxuICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS4kcm91dGVyLnB1c2goeyBuYW1lOiBcInN5c3RlbS5sb2dzLmluZGV4XCIgfSlcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmxvZ1xuICAgICAgPyBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcIm1lc3NhZ2UtYm9keVwiIH0sIFtcbiAgICAgICAgICBfYyhcInByZVwiLCB7IGRpcmVjdGl2ZXM6IFt7IG5hbWU6IFwiaGxqc1wiLCByYXdOYW1lOiBcInYtaGxqc1wiIH1dIH0sIFtcbiAgICAgICAgICAgIF92bS5fdihcIiAgICAgICAgICAgICAgICBcIiksXG4gICAgICAgICAgICBfYyhcImNvZGVcIiwgeyBzdGF0aWNDbGFzczogXCJwaHBcIiB9LCBbXG4gICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICBcIlxcblwiICtcbiAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ubG9nLmNvbnRlbnQgfHwgX3ZtLl9fKFwiVGhlIGxvZyBmaWxlIGlzIGVtcHR5XCIpKSArXG4gICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIlxcbiAgICAgICAgICAgIFwiKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICA6IF92bS5fZSgpXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LWE3NWI2MThjXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi1hNzViNjE4Y1wiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL2xvZ3MvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE1NzBcbi8vIG1vZHVsZSBjaHVua3MgPSAzMiJdLCJzb3VyY2VSb290IjoiIn0=