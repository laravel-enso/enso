webpackJsonp([14],{

/***/ 1088:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1547)
/* template */
var __vue_template__ = __webpack_require__(1548)
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
Component.options.__file = "resources/assets/js/pages/system/roles/Edit.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b1a93062", Component.options)
  } else {
    hotAPI.reload("data-v-b1a93062", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1096)
  __webpack_require__(1098)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1100)
/* template */
var __vue_template__ = __webpack_require__(1102)
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
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueSelect.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73076e9f", Component.options)
  } else {
    hotAPI.reload("data-v-73076e9f", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1097);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("5079f294", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73076e9f\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css", function() {
     var newContent = require("!!../../css-loader/index.js?sourceMap!../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73076e9f\",\"scoped\":false,\"hasInlineConfig\":true}!./vue-multiselect.min.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect{pointer-events:none\n}\n.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block\n}\n.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent\n}\n.multiselect__spinner:before{-webkit-animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation:a 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__spinner:after{-webkit-animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation:a 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__loading-enter-active,.multiselect__loading-leave-active{-webkit-transition:opacity .4s ease-in-out;transition:opacity .4s ease-in-out;opacity:1\n}\n.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0\n}\n.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation\n}\n.multiselect{-webkit-box-sizing:content-box;box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e\n}\n.multiselect *{-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.multiselect:focus{outline:none\n}\n.multiselect--disabled{opacity:.6\n}\n.multiselect--active{z-index:1\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0\n}\n.multiselect--active .multiselect__select{-webkit-transform:rotate(180deg);transform:rotate(180deg)\n}\n.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0\n}\n.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;-webkit-transition:border .1s ease;transition:border .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:8px;vertical-align:top\n}\n.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto\n}\n.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf\n}\n.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none\n}\n.multiselect__single{padding-left:6px;margin-bottom:8px\n}\n.multiselect__tags-wrap{display:inline\n}\n.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff\n}\n.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis\n}\n.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px\n}\n.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px\n}\n.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e\n}\n.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff\n}\n.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8\n}\n.multiselect__current,.multiselect__select{line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer\n}\n.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease, -webkit-transform .2s ease\n}\n.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"\n}\n.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px\n}\n.multiselect--active .multiselect__placeholder{display:none\n}\n.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch\n}\n.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top\n}\n.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8\n}\n.multiselect__content::webkit-scrollbar{display:none\n}\n.multiselect__element{display:block\n}\n.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap\n}\n.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px\n}\n.multiselect__option--highlight{background:#41b883;outline:none;color:#fff\n}\n.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff\n}\n.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700\n}\n.multiselect__option--selected:after{content:attr(data-selected);color:silver\n}\n.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff\n}\n.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff\n}\n.multiselect--disabled{background:#ededed;pointer-events:none\n}\n.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6\n}\n.multiselect__option--disabled{cursor:text;pointer-events:none\n}\n.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important\n}\n.multiselect-enter-active,.multiselect-leave-active{-webkit-transition:all .15s ease;transition:all .15s ease\n}\n.multiselect-enter,.multiselect-leave-active{opacity:0\n}\n.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top\n}\n[dir=rtl] .multiselect{text-align:right\n}\n[dir=rtl] .multiselect__select{right:auto;left:1px\n}\n[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px\n}\n[dir=rtl] .multiselect__content{text-align:right\n}\n[dir=rtl] .multiselect__option:after{right:auto;left:0\n}\n[dir=rtl] .multiselect__clear{right:auto;left:12px\n}\n[dir=rtl] .multiselect__spinner{right:auto;left:1px\n}\n@-webkit-keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}\n@keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}", "", {"version":3,"sources":["/Users/adi/code/ensov2/node_modules/vue-multiselect/dist/vue-multiselect.min.css"],"names":[],"mappings":"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","file":"vue-multiselect.min.css","sourcesContent":["fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation-iteration-count:infinite}.multiselect__spinner:after{animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{opacity:.6}.multiselect--active{z-index:1}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:6px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled{background:#ededed;pointer-events:none}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{cursor:text;pointer-events:none}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@keyframes a{0%{transform:rotate(0)}to{transform:rotate(2turn)}}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1099);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("56cc0532", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73076e9f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./VueSelect.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-73076e9f\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./VueSelect.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1099:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.vue-select .multiselect {\n  min-height: 36px;\n  max-height: 36px;\n}\ndiv.vue-select .multiselect__tags {\n  min-height: 36px;\n  max-height: 36px;\n  padding: 4px 40px 0 4px;\n  border-radius: 3px;\n}\ndiv.vue-select .multiselect__tags:hover {\n    border-color: #b5b5b5;\n}\n.multiselect.has-error .multiselect__tags {\n  border: 1px solid #e50800;\n}\ndiv.vue-select .multiselect__tag {\n  border-radius: 3px;\n  margin-bottom: 4px;\n}\ndiv.vue-select .multiselect__tag-icon {\n  border-radius: 3px;\n  line-height: 24px;\n}\ndiv.vue-select input[type=text].multiselect__input {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  margin-bottom: 4px;\n  margin-top: 2px;\n  border-bottom: none;\n}\ndiv.vue-select .multiselect__content-wrapper {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\ndiv.vue-select .multiselect__option,\ndiv.vue-select .multiselect__option:after {\n  line-height: 16px;\n  padding: 10px;\n  min-height: 36px;\n}\ndiv.vue-select .multiselect__select {\n  width: 34px;\n  height: 34px;\n}\ndiv.vue-select .multiselect__select:before {\n  top: 70%;\n}\ndiv.vue-select .multiselect__spinner {\n  height: 34px;\n  width: 34px;\n}\nspan.multiselect__tag {\n  padding: 5px 26px 5px 10px;\n}\n.multiselect, .multiselect__input, .multiselect__single {\n  font-size: 16px;\n}\n.multiselect__clear {\n  position: absolute;\n  top: 7px;\n  right: 30px;\n  height: 22px;\n  width: 22px;\n  display: block;\n  cursor: pointer;\n  z-index: 1;\n}\n.multiselect__clear:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.multiselect__clear:after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.multiselect__clear:after, .multiselect__clear:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 16px;\n  background: #aaa;\n  top: 3px;\n  right: 10px;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/VueSelect.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;EACjB,iBAAiB;CAAE;AAErB;EACE,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,mBAAmB;CAAE;AACrB;IACE,sBAAsB;CAAE;AAE5B;EACE,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;EACnB,mBAAmB;CAAE;AAEvB;EACE,mBAAmB;EACnB,kBAAkB;CAAE;AAEtB;EACE,yBAAiB;UAAjB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;CAAE;AAExB;EACE,+BAA+B;EAC/B,gCAAgC;CAAE;AAEpC;;EAEE,kBAAkB;EAClB,cAAc;EACd,iBAAiB;CAAE;AAErB;EACE,YAAY;EACZ,aAAa;CAAE;AAEjB;EACE,SAAS;CAAE;AAEb;EACE,aAAa;EACb,YAAY;CAAE;AAEhB;EACE,2BAA2B;CAAE;AAE/B;EACE,gBAAgB;CAAE;AAEpB;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,WAAW;CAAE;AAEf;EACE,iCAAyB;UAAzB,yBAAyB;CAAE;AAE7B;EACE,kCAA0B;UAA1B,0BAA0B;CAAE;AAE9B;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,YAAY;CAAE","file":"VueSelect.vue","sourcesContent":[".vue-select .multiselect {\n  min-height: 36px;\n  max-height: 36px; }\n\ndiv.vue-select .multiselect__tags {\n  min-height: 36px;\n  max-height: 36px;\n  padding: 4px 40px 0 4px;\n  border-radius: 3px; }\n  div.vue-select .multiselect__tags:hover {\n    border-color: #b5b5b5; }\n\n.multiselect.has-error .multiselect__tags {\n  border: 1px solid #e50800; }\n\ndiv.vue-select .multiselect__tag {\n  border-radius: 3px;\n  margin-bottom: 4px; }\n\ndiv.vue-select .multiselect__tag-icon {\n  border-radius: 3px;\n  line-height: 24px; }\n\ndiv.vue-select input[type=text].multiselect__input {\n  box-shadow: none;\n  margin-bottom: 4px;\n  margin-top: 2px;\n  border-bottom: none; }\n\ndiv.vue-select .multiselect__content-wrapper {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\ndiv.vue-select .multiselect__option,\ndiv.vue-select .multiselect__option:after {\n  line-height: 16px;\n  padding: 10px;\n  min-height: 36px; }\n\ndiv.vue-select .multiselect__select {\n  width: 34px;\n  height: 34px; }\n\ndiv.vue-select .multiselect__select:before {\n  top: 70%; }\n\ndiv.vue-select .multiselect__spinner {\n  height: 34px;\n  width: 34px; }\n\nspan.multiselect__tag {\n  padding: 5px 26px 5px 10px; }\n\n.multiselect, .multiselect__input, .multiselect__single {\n  font-size: 16px; }\n\n.multiselect__clear {\n  position: absolute;\n  top: 7px;\n  right: 30px;\n  height: 22px;\n  width: 22px;\n  display: block;\n  cursor: pointer;\n  z-index: 1; }\n\n.multiselect__clear:before {\n  transform: rotate(45deg); }\n\n.multiselect__clear:after {\n  transform: rotate(-45deg); }\n\n.multiselect__clear:after, .multiselect__clear:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 16px;\n  background: #aaa;\n  top: 3px;\n  right: 10px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_multiselect__);
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






/* harmony default export */ __webpack_exports__["default"] = ({
    components: { Multiselect: __WEBPACK_IMPORTED_MODULE_2_vue_multiselect___default.a },

    props: {
        value: {
            default: null
        },
        source: {
            type: String,
            default: null
        },
        options: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        keyMap: {
            type: String,
            default: 'number'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        multiple: {
            type: Boolean,
            default: false
        },
        taggable: {
            type: Boolean,
            default: false
        },
        hasError: {
            type: Boolean,
            default: false
        },
        params: {
            type: Object,
            default: null
        },
        pivotParams: {
            type: Object,
            default: null
        },
        customParams: {
            type: Object,
            default: null
        },
        placeholder: {
            type: String,
            default: 'Please choose'
        },
        labels: {
            type: Object,
            default: function _default() {
                return {
                    selected: 'Selected',
                    select: 'Press enter to select',
                    deselect: 'Press enter to deselect',
                    noResult: 'No Elements Found'
                };
            }
        }
    },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])('locale', ['__']), {
        isServerSide: function isServerSide() {
            return this.source !== null;
        },
        hasSelection: function hasSelection() {
            return this.multiple && this.value.length || !this.multiple && this.value !== null;
        },
        optionKeys: function optionKeys() {
            return this.keyMap === 'number' ? Object.keys(this.optionList).map(Number) : Object.keys(this.optionList);
        }
    }),

    filters: {
        highlight: function highlight(option, query) {
            if (!option) {
                return option;
            }

            query.split(' ').filter(function (word) {
                return word.length;
            }).forEach(function (word) {
                option = option.replace(new RegExp('(' + word + ')', 'gi'), '<b>$1</b>');
            });

            return option;
        }
    },

    watch: {
        options: {
            handler: function handler() {
                this.optionList = this.options;
            },

            deep: true
        },
        params: {
            handler: function handler() {
                this.getOptions();
            },

            deep: true
        },
        pivotParams: {
            handler: function handler() {
                this.getOptions();
            },

            deep: true
        },
        customParams: {
            handler: function handler() {
                this.getOptions();
            },

            deep: true
        }
    },

    created: function created() {
        this.getOptions = Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["debounce"])(this.getOptions, 500);
    },
    data: function data() {
        return {
            optionList: this.options,
            loading: false,
            query: ''
        };
    },


    methods: {
        getOptions: function getOptions() {
            var _this = this;

            if (!this.isServerSide) {
                return;
            }

            this.loading = true;

            axios.get(route(this.source, [], null), {
                params: this.getParams()
            }).then(function (response) {
                _this.processOptions(response);
                _this.loading = false;
            }).catch(function (error) {
                _this.loading = true;
                _this.handleError(error);
            });
        },
        getParams: function getParams() {
            return {
                params: this.params,
                pivotParams: this.pivotParams,
                customParams: this.customParams,
                query: this.query,
                value: this.value
            };
        },
        processOptions: function processOptions(response) {
            this.optionList = response.data;

            if (!this.query && !this.valueIsMatched()) {
                this.clear();
            }
        },
        valueIsMatched: function valueIsMatched() {
            var self = this;

            if (!this.multiple) {
                return this.optionKeys.filter(function (option) {
                    return option === self.value;
                }).length > 0;
            }

            return this.optionKeys.filter(function (option) {
                return self.value.filter(function (val) {
                    return val === option;
                }).length > 0;
            }).length > 0;
        },
        customLabel: function customLabel(option) {
            return this.optionList[option];
        },
        update: function update() {
            var _this2 = this;

            this.$nextTick(function () {
                _this2.$emit('input', _this2.value);
            });
        },
        clear: function clear() {
            this.$emit('input', this.multiple ? [] : null);
        }
    },

    mounted: function mounted() {
        if (this.isServerSide) {
            this.getOptions();
        }
    }
});

/***/ }),

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMultiselect=t():e.VueMultiselect=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e){return 0!==e&&(!(!Array.isArray(e)||0!==e.length)||!e)}function o(e,t){return void 0===e&&(e="undefined"),null===e&&(e="null"),!1===e&&(e="false"),-1!==e.toString().toLowerCase().indexOf(t.trim())}function l(e,t,i,n){return e.filter(function(e){return o(n(e,i),t)})}function r(e){return e.filter(function(e){return!e.$isLabel})}function a(e,t){return function(i){return i.reduce(function(i,n){return n[e]&&n[e].length?(i.push({$groupLabel:n[t],$isLabel:!0}),i.concat(n[e])):i},[])}}function u(e,t,i,s,o){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=l(r[i],e,t,o);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=i(2),p=function(e){return e&&e.__esModule?e:{default:e}}(h),d=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduce(function(e,t){return t(e)},e)}};t.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(e,t){return s(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var e=this.search||"",t=e.toLowerCase().trim(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,t,this.label):l(i,t,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&t.length&&!this.isExistingOption(t)&&("bottom"===this.tagPosition?i.push({isTag:!0,label:e}):i.unshift({isTag:!0,label:e})),i.slice(0,this.optionsLimit)},valueKeys:function(){var e=this;return this.trackBy?this.internalValue.map(function(t){return t[e.trackBy]}):this.internalValue},optionKeys:function(){var e=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(t){return e.customLabel(t,e.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(e,t){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(e){this.internalValue=this.getInternalValue(e)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(e){return null===e||void 0===e?[]:this.multiple?(0,p.default)(e):(0,p.default)([e])},filterAndFlat:function(e,t,i){return d(u(t,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(e)},flatAndStrip:function(e){return d(a(this.groupValues,this.groupLabel),r)(e)},updateSearch:function(e){this.search=e},isExistingOption:function(e){return!!this.options&&this.optionKeys.indexOf(e)>-1},isSelected:function(e){var t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isNotSelected:function(e){return!this.isSelected(e)},getOptionLabel:function(e){if(s(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;var t=this.customLabel(e,this.label);return s(t)?"":t},select:function(e,t){if(!(-1!==this.blockKeys.indexOf(t)||this.disabled||e.$isLabel||e.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==t||this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e))return void("Tab"!==t&&this.removeElement(e));this.multiple?this.internalValue.push(e):this.internalValue=[e],this.$emit("select",(0,p.default)(e),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===e?"undefined":c(e))?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);this.internalValue.splice(i,1),this.$emit("input",this.getValue(),this.id),this.$emit("remove",(0,p.default)(e),this.id),this.closeOnSelect&&t&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var e=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return e.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},addPointerElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",t=e.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],t),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(e){this.pointer=e,this.pointerDirty=!0}}}},function(e,t,i){"use strict";function n(e){if(Array.isArray(e))return e.map(n);if(e&&"object"===(void 0===e?"undefined":s(e))){for(var t={},i=Object.keys(e),o=0,l=i.length;o<l;o++){var r=i[o];t[r]=n(e[r])}return t}return e}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n},function(e,t,i){"use strict";function n(e){i(6)}Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),o=i.n(s),l=i(8),r=i(7),a=n,u=r(o.a,l.a,!1,a,null,null);t.default=u.exports},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.deepClone=t.pointerMixin=t.multiselectMixin=t.Multiselect=void 0;var s=i(3),o=n(s),l=i(0),r=n(l),a=i(1),u=n(a),c=i(2),h=n(c);t.default=o.default,t.Multiselect=o.default,t.multiselectMixin=r.default,t.pointerMixin=u.default,t.deepClone=h.default},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=n(s),l=i(1),r=n(l);t.default={name:"vue-multiselect",mixins:[o.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(e){return"and "+e+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{width:"0",position:"absolute"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(e,t){},function(e,t){e.exports=function(e,t,i,n,s,o){var l,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(l=e,r=e.default);var u="function"==typeof r?r.options:r;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId=s);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var h=u.functional,p=h?u.render:u.beforeCreate;h?(u._injectStyles=c,u.render=function(e,t){return c.call(t),p(e,t)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:l,exports:r,options:u}}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"multiselect",class:{"multiselect--active":e.isOpen,"multiselect--disabled":e.disabled,"multiselect--above":e.isAbove},attrs:{tabindex:e.searchable?-1:e.tabindex},on:{focus:function(t){e.activate()},blur:function(t){!e.searchable&&e.deactivate()},keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerForward()):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerBackward()):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)||!e._k(t.keyCode,"tab",9,t.key)?(t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null}],keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()}}},[e._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}}})],{toggle:e.toggle}),e._v(" "),e._t("clear",null,{search:e.search}),e._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[e._l(e.visibleValue,function(t){return[e._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:e._s(e.getOptionLabel(t))}}),e._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key))return null;i.preventDefault(),e.removeElement(t)},mousedown:function(i){i.preventDefault(),e.removeElement(t)}}})])],{option:t,search:e.search,remove:e.removeElement})]})],2),e._v(" "),e.internalValue&&e.internalValue.length>e.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:e._s(e.limitText(e.internalValue.length-e.limit))}})]:e._e(),e._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[e._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),e._v(" "),e.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:e.inputStyle,attrs:{name:e.name,id:e.id,type:"text",autocomplete:"off",placeholder:e.placeholder,disabled:e.disabled,tabindex:e.tabindex},domProps:{value:e.isOpen?e.search:e.currentOptionLabel},on:{input:function(t){e.updateSearch(t.target.value)},focus:function(t){t.preventDefault(),e.activate()},blur:function(t){t.preventDefault(),e.deactivate()},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()},keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key))return null;t.preventDefault(),e.pointerForward()},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key))return null;t.preventDefault(),e.pointerBackward()},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)?(t.preventDefault(),t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null},function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46],t.key))return null;t.stopPropagation(),e.removeLastElement()}]}}):e._e(),e._v(" "),e.searchable?e._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:e._s(e.currentOptionLabel)},on:{mousedown:function(t){t.preventDefault(),e.toggle(t)}}})],2),e._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:e.optimizedHeight+"px"},on:{focus:e.activate,mousedown:function(e){e.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:e.contentStyle},[e._t("beforeList"),e._v(" "),e.multiple&&e.max===e.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[e._t("maxElements",[e._v("Maximum of "+e._s(e.max)+" options selected. First remove a selected option to select another.")])],2)]):e._e(),e._v(" "),!e.max||e.internalValue.length<e.max?e._l(e.filteredOptions,function(t,n){return i("li",{key:n,staticClass:"multiselect__element"},[t&&(t.$isLabel||t.$isDisabled)?e._e():i("span",{staticClass:"multiselect__option",class:e.optionHighlight(n,t),attrs:{"data-select":t&&t.isTag?e.tagPlaceholder:e.selectLabelText,"data-selected":e.selectedLabelText,"data-deselect":e.deselectLabelText},on:{click:function(i){i.stopPropagation(),e.select(t)},mouseenter:function(t){if(t.target!==t.currentTarget)return null;e.pointerSet(n)}}},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2),e._v(" "),t&&(t.$isLabel||t.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:e.optionHighlight(n,t)},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2):e._e()])}):e._e(),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.showNoResults&&0===e.filteredOptions.length&&e.search&&!e.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[e._t("noResult",[e._v("No elements found. Consider changing the search query.")])],2)]),e._v(" "),e._t("afterList")],2)])])],2)},s=[],o={render:n,staticRenderFns:s};t.a=o}])});

/***/ }),

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "vue-select" },
    [
      _c(
        "multiselect",
        {
          class: { "has-error": _vm.hasError },
          attrs: {
            value: _vm.value,
            searchable: "",
            "allow-empty": "",
            disabled: _vm.disabled,
            "internal-search": !_vm.isServerSide,
            multiple: _vm.multiple,
            taggable: _vm.taggable,
            "clear-on-select": !_vm.multiple,
            "close-on-select": !_vm.multiple,
            "select-label": _vm.__(_vm.labels.select),
            "deselect-label": _vm.__(_vm.labels.deselect),
            "selected-label": _vm.__(_vm.labels.selected),
            placeholder: _vm.__(_vm.placeholder),
            loading: _vm.loading,
            "options-limit": 100,
            options: _vm.optionKeys,
            "custom-label": _vm.customLabel
          },
          on: {
            "search-change": function($event) {
              _vm.query = $event
              _vm.getOptions()
            },
            tag: function($event) {
              _vm.$emit("tag", $event)
            },
            input: function($event) {
              _vm.$emit("input", $event)
            }
          },
          scopedSlots: _vm._u([
            {
              key: "option",
              fn: function(props) {
                return [
                  _c("span", {
                    domProps: {
                      innerHTML: _vm._s(
                        _vm.$options.filters.highlight(
                          _vm.optionList[props.option],
                          _vm.query
                        )
                      )
                    }
                  })
                ]
              }
            },
            {
              key: "clear",
              fn: function(props) {
                return !_vm.disabled
                  ? [
                      _vm.hasSelection
                        ? _c("div", {
                            staticClass: "multiselect__clear",
                            on: {
                              mousedown: function($event) {
                                $event.preventDefault()
                                $event.stopPropagation()
                                _vm.clear()
                              }
                            }
                          })
                        : _vm._e()
                    ]
                  : undefined
              }
            }
          ])
        },
        [
          _c("span", { attrs: { slot: "noResult" }, slot: "noResult" }, [
            _vm._v(
              "\n            " +
                _vm._s(_vm.__(_vm.labels.noResult)) +
                "\n        "
            )
          ])
        ]
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
    require("vue-hot-reload-api")      .rerender("data-v-73076e9f", module.exports)
  }
}

/***/ }),

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1104)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1106)
/* template */
var __vue_template__ = __webpack_require__(1129)
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
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueForm.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1b52e927", Component.options)
  } else {
    hotAPI.reload("data-v-1b52e927", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1105);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("ae969662", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b52e927\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueForm.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1b52e927\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueForm.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1105:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nform.vue-form {\n    margin-bottom: 0;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/resources/assets/js/components/enso/vueforms/VueForm.vue"],"names":[],"mappings":";AAwPA;IACA,iBAAA;CACA","file":"VueForm.vue","sourcesContent":["<template>\n\n    <div>\n        <h5 class=\"title is-5\"\n            v-if=\"data.icon || data.title\">\n            <span class=\"icon\"\n                v-if=\"data.icon\">\n                <i :class=\"data.icon\"></i>\n            </span>\n            <span\n                v-if=\"data.title\">\n                {{ data.title }}\n            </span>\n            <hr>\n        </h5>\n        <form @submit.prevent=\"submit()\"\n            class=\"vue-form\">\n            <div class=\"columns is-multiline\">\n                <div v-for=\"field in data.fields\"\n                    class=\"column\"\n                    :key=\"field.name\"\n                    :class=\"columnSize\"\n                    v-if=\"!field.meta.hidden\">\n                    <div class=\"field\">\n                        <label class=\"label\">\n                            {{ __(field.label) }}\n                            <p v-if=\"errors.has(field.name)\"\n                                class=\"help is-danger is-pulled-right\">\n                                {{ errors.get(field.name) }}\n                            </p>\n                        </label>\n                        <span v-if=\"field.meta.custom\">\n                            <slot :name=\"field.name\"\n                                :field=\"field\"\n                                :errors=\"errors\">\n                            </slot>\n                        </span>\n                        <span v-else>\n                            <vue-form-input v-if=\"field.meta.type === 'input'\"\n                                :field=\"field\"\n                                @update=\"errors.clear(field.name)\"\n                                :has-error=\"errors.has(field.name)\">\n                            </vue-form-input>\n                            <vue-select v-if=\"field.meta.type === 'select'\"\n                                :has-error=\"errors.has(field.name)\"\n                                @input=\"errors.clear(field.name);\"\n                                v-model=\"field.value\"\n                                :options=\"field.meta.options\"\n                                :key-map=\"field.meta.keyMap\"\n                                :source=\"field.meta.source\"\n                                :multiple=\"field.meta.multiple\"\n                                :disabled=\"field.meta.disabled\"\n                                :placeholder=\"field.meta.placeholder\">\n                            </vue-select>\n                            <datepicker v-if=\"field.meta.type === 'datepicker'\"\n                                @input=\"errors.clear(field.name)\"\n                                v-model=\"field.value\"\n                                :format=\"field.meta.format\"\n                                :time=\"field.meta.time\"\n                                :disabled=\"field.meta.disabled\">\n                            </datepicker>\n                            <datepicker v-if=\"field.meta.type === 'timepicker'\"\n                                @input=\"errors.clear(field.name)\"\n                                v-model=\"field.value\"\n                                :format=\"field.meta.format\"\n                                time-only\n                                :disabled=\"field.meta.disabled\">\n                            </datepicker>\n                            <div class=\"control has-icons-right\"\n                                v-if=\"field.meta.type === 'textarea'\">\n                                <textarea @input=\"errors.clear(field.name)\"\n                                    class=\"textarea\"\n                                    :class=\"{ 'is-danger': errors.has(field.name) }\"\n                                    v-model=\"field.value\"\n                                    :rows=\"field.meta.rows\"\n                                    :disabled=\"field.meta.disabled\">\n                                </textarea>\n                                <span class=\"icon is-small is-right has-text-danger\"\n                                    v-if=\"errors.has(field.name)\">\n                                    <i class=\"fas fa-exclamation-triangle\"></i>\n                                </span>\n                            </div>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <hr>\n            <button class=\"button\"\n                v-if=\"data.actions.destroy\"\n                :disabled=\"data.actions.destroy.forbidden\"\n                :class=\"data.actions.destroy.button.class\"\n                @click.prevent=\"showModal = true\">\n                <span>{{ __(data.actions.destroy.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.destroy.button.icon\"></i>\n                </span>\n            </button>\n            <button class=\"button\"\n                :class=\"data.actions.create.button.class\"\n                @click.prevent=\"create()\"\n                v-if=\"data.actions.create\"\n                :disabled=\"data.actions.create.forbidden\">\n                <span>{{ __(data.actions.create.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.create.button.icon\"></i>\n                </span>\n            </button>\n            <button type=\"submit\"\n                class=\"button is-pulled-right\"\n                :class=\"[data.actions.store.button.class, { 'is-loading': loading }]\"\n                v-if=\"data.actions.store\"\n                :disabled=\"data.actions.store.forbidden\">\n                <span>{{ __(data.actions.store.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.store.button.icon\"></i>\n                </span>\n            </button>\n            <button type=\"submit\"\n                class=\"button is-pulled-right\"\n                :class=\"[data.actions.update.button.class, { 'is-loading': loading }]\"\n                v-if=\"data.actions.update\"\n                :disabled=\"data.actions.update.forbidden\">\n                <span>{{ __(data.actions.update.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.update.button.icon\"></i>\n                </span>\n            </button>\n            <div class=\"is-clearfix\"></div>\n        </form>\n        <modal v-if=\"data.actions.destroy\"\n            :show=\"showModal\"\n            :__=\"__\"\n            :message=\"data.actions.destroy.button.message\"\n            @cancel-action=\"showModal = false\"\n            @commit-action=\"destroy()\">\n        </modal>\n    </div>\n\n</template>\n\n<script>\n\nimport { mapGetters } from 'vuex';\nimport Errors from './classes/Errors';\nimport Modal from './Modal.vue';\nimport VueSelect from './VueSelect.vue';\nimport Datepicker from './Datepicker.vue';\nimport VueFormInput from './VueFormInput.vue';\n\nexport default {\n    name: 'VueForm',\n\n    components: {\n        Modal, VueSelect, Datepicker, VueFormInput,\n    },\n\n    props: {\n        data: {\n            type: Object,\n            required: true,\n        },\n        params: {\n            type: Object,\n            default: null,\n        },\n    },\n\n    data() {\n        return {\n            loading: false,\n            showModal: false,\n            errors: new Errors(),\n        };\n    },\n\n    computed: {\n        ...mapGetters('locale', ['__']),\n        columnSize() {\n            return `is-${parseInt(12 / this.data.columns, 10)}`;\n        },\n        path() {\n            return this.data.method === 'post'\n                ? this.data.actions.store.path\n                : this.data.actions.update.path;\n        },\n    },\n\n    methods: {\n        create() {\n            this.$emit('create');\n            this.$router.push({ name: this.data.actions.create.route });\n        },\n        submit() {\n            this.loading = true;\n\n            axios[this.data.method](this.path, this.formData()).then(({ data }) => {\n                this.loading = false;\n                toastr.success(data.message);\n                this.$emit('submit');\n\n                if (data.redirect) {\n                    this.$router.push({\n                        name: data.redirect,\n                        params: { id: data.id },\n                    });\n                }\n            }).catch((error) => {\n                const { status, data } = error.response;\n                this.loading = false;\n\n                if (status === 422) {\n                    this.errors.set(data.errors);\n\n                    return;\n                }\n\n                this.handleError(error);\n            });\n        },\n        formData() {\n            return this.data.fields.reduce((object, field) => {\n                object[field.name] = field.value;\n                return object;\n            }, { _params: this.params });\n        },\n        destroy() {\n            this.showModal = false;\n            this.loading = true;\n\n            axios.delete(this.data.actions.destroy.path).then(({ data }) => {\n                this.loading = false;\n                toastr.success(data.message);\n                this.$emit('destroy');\n\n                if (data.redirect) {\n                    this.$router.push({ name: data.redirect });\n                }\n            }).catch((error) => {\n                this.loading = false;\n                this.handleError(error);\n            });\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    form.vue-form {\n        margin-bottom: 0;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Errors__ = __webpack_require__(1107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue__ = __webpack_require__(1108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VueSelect_vue__ = __webpack_require__(1095);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VueSelect_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__VueSelect_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Datepicker_vue__ = __webpack_require__(1113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Datepicker_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Datepicker_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VueFormInput_vue__ = __webpack_require__(1121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__VueFormInput_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__VueFormInput_vue__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    name: 'VueForm',

    components: {
        Modal: __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default.a, VueSelect: __WEBPACK_IMPORTED_MODULE_3__VueSelect_vue___default.a, Datepicker: __WEBPACK_IMPORTED_MODULE_4__Datepicker_vue___default.a, VueFormInput: __WEBPACK_IMPORTED_MODULE_5__VueFormInput_vue___default.a
    },

    props: {
        data: {
            type: Object,
            required: true
        },
        params: {
            type: Object,
            default: null
        }
    },

    data: function data() {
        return {
            loading: false,
            showModal: false,
            errors: new __WEBPACK_IMPORTED_MODULE_1__classes_Errors__["a" /* default */]()
        };
    },


    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', ['__']), {
        columnSize: function columnSize() {
            return 'is-' + parseInt(12 / this.data.columns, 10);
        },
        path: function path() {
            return this.data.method === 'post' ? this.data.actions.store.path : this.data.actions.update.path;
        }
    }),

    methods: {
        create: function create() {
            this.$emit('create');
            this.$router.push({ name: this.data.actions.create.route });
        },
        submit: function submit() {
            var _this = this;

            this.loading = true;

            axios[this.data.method](this.path, this.formData()).then(function (_ref) {
                var data = _ref.data;

                _this.loading = false;
                toastr.success(data.message);
                _this.$emit('submit');

                if (data.redirect) {
                    _this.$router.push({
                        name: data.redirect,
                        params: { id: data.id }
                    });
                }
            }).catch(function (error) {
                var _error$response = error.response,
                    status = _error$response.status,
                    data = _error$response.data;

                _this.loading = false;

                if (status === 422) {
                    _this.errors.set(data.errors);

                    return;
                }

                _this.handleError(error);
            });
        },
        formData: function formData() {
            return this.data.fields.reduce(function (object, field) {
                object[field.name] = field.value;
                return object;
            }, { _params: this.params });
        },
        destroy: function destroy() {
            var _this2 = this;

            this.showModal = false;
            this.loading = true;

            axios.delete(this.data.actions.destroy.path).then(function (_ref2) {
                var data = _ref2.data;

                _this2.loading = false;
                toastr.success(data.message);
                _this2.$emit('destroy');

                if (data.redirect) {
                    _this2.$router.push({ name: data.redirect });
                }
            }).catch(function (error) {
                _this2.loading = false;
                _this2.handleError(error);
            });
        }
    }
});

/***/ }),

/***/ 1107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var Errors = function () {
    function Errors() {
        _classCallCheck(this, Errors);

        this.errors = {};
    }

    _createClass(Errors, [{
        key: 'any',
        value: function any() {
            return Object.keys(this.errors).length > 0;
        }
    }, {
        key: 'has',
        value: function has(field) {
            return Object.keys(this.errors).includes(field);
        }
    }, {
        key: 'get',
        value: function get(field) {
            return this.has(field) ? this.errors[field][0] : null;
        }
    }, {
        key: 'set',
        value: function set(errors) {
            this.errors = errors;
        }
    }, {
        key: 'clear',
        value: function clear(field) {
            if (this.has(field)) {
                __WEBPACK_IMPORTED_MODULE_0_vue___default.a.delete(this.errors, field);
            }
        }
    }, {
        key: 'empty',
        value: function empty() {
            var _this = this;

            Object.keys(this.errors).forEach(function (field) {
                return _this.clear(field);
            });
        }
    }]);

    return Errors;
}();

/* harmony default export */ __webpack_exports__["a"] = (Errors);

/***/ }),

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1109)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1111)
/* template */
var __vue_template__ = __webpack_require__(1112)
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
Component.options.__file = "resources/assets/js/components/enso/vueforms/Modal.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7ddb382a", Component.options)
  } else {
    hotAPI.reload("data-v-7ddb382a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1110);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("580eee24", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ddb382a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7ddb382a\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Modal.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.modal.is-active {\n    z-index: 1100;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/resources/assets/js/components/enso/vueforms/Modal.vue"],"names":[],"mappings":";AA8DA;IACA,cAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n\n    <transition enter-active-class=\"animated fadeIn\"\n        leave-active-class=\"animated fadeOut\">\n        <div class=\"modal\"\n            :class=\"{ 'is-active': show }\"\n            v-if=\"show\">\n            <div class=\"modal-background\"></div>\n            <div class=\"table-modal modal-content\">\n                <div class=\"box\">\n                    <slot name=\"content\">\n                        <h5 class=\"subtitle is-5\">\n                            {{ __(message || \"Are you sure ?\") }}\n                        </h5>\n                    </slot>\n                    <hr>\n                    <div class=\"level\">\n                        <div class=\"level-left\"></div>\n                        <div class=\"level-right\">\n                            <div class=\"level-item\">\n                                <slot name=\"controls\">\n                                    <button class=\"button is-success\"\n                                          @click=\"$emit('cancel-action')\">\n                                          {{ __(\"Cancel\") }}\n                                      </button>\n                                      <button class=\"button is-danger has-margin-left-small\"\n                                        @click=\"$emit('commit-action')\">\n                                        {{ __(\"Yes\") }}\n                                    </button>\n                                </slot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </transition>\n\n</template>\n\n<script>\n\nexport default {\n    props: {\n        show: {\n            type: Boolean,\n            required: true,\n        },\n        message: {\n            type: String,\n            default: null,\n        },\n        __: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .modal.is-active {\n        z-index: 1100;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1111:
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        message: {
            type: String,
            default: null
        },
        __: {
            type: Function,
            required: true
        }
    }
});

/***/ }),

/***/ 1112:
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
            { staticClass: "modal", class: { "is-active": _vm.show } },
            [
              _c("div", { staticClass: "modal-background" }),
              _vm._v(" "),
              _c("div", { staticClass: "table-modal modal-content" }, [
                _c(
                  "div",
                  { staticClass: "box" },
                  [
                    _vm._t("content", [
                      _c("h5", { staticClass: "subtitle is-5" }, [
                        _vm._v(
                          "\n                        " +
                            _vm._s(_vm.__(_vm.message || "Are you sure ?")) +
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
              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-7ddb382a", module.exports)
  }
}

/***/ }),

/***/ 1113:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1114)
  __webpack_require__(1116)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1118)
/* template */
var __vue_template__ = __webpack_require__(1120)
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
Component.options.__file = "resources/assets/js/components/enso/vueforms/Datepicker.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4d443fe2", Component.options)
  } else {
    hotAPI.reload("data-v-4d443fe2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1114:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1115);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("1dbb9c30", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../css-loader/index.js?sourceMap!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d443fe2\",\"scoped\":false,\"hasInlineConfig\":true}!./material_green.css", function() {
     var newContent = require("!!../../../css-loader/index.js?sourceMap!../../../vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d443fe2\",\"scoped\":false,\"hasInlineConfig\":true}!./material_green.css");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1115:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.flatpickr-calendar {\n  background: transparent;\n  overflow: hidden;\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  text-align: center;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  visibility: visible;\n  overflow: visible;\n  max-height: 640px;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.hasWeeks {\n  width: auto;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-innerContainer {\n  border-bottom: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  border: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #1bbc9b;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #1bbc9b;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-month {\n  border-radius: 5px 5px 0 0;\n  background: #1bbc9b;\n  color: #fff;\n  fill: #fff;\n  height: 28px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.flatpickr-prev-month,\n.flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  line-height: 16px;\n  height: 28px;\n  padding: 10px calc(3.57% - 1.5px);\n  z-index: 3;\n}\n.flatpickr-prev-month i,\n.flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-next-month.flatpickr-prev-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  left: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-next-month.flatpickr-next-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  right: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month:hover,\n.flatpickr-next-month:hover {\n  color: #bbb;\n}\n.flatpickr-prev-month:hover svg,\n.flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-prev-month svg,\n.flatpickr-next-month svg {\n  width: 14px;\n}\n.flatpickr-prev-month svg path,\n.flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(72,72,72,0.05);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 33%;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(255,255,255,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 6.16px 0 0 0;\n  line-height: 1;\n  height: 28px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month.slideLeft {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideLeftNew {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRight {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRightNew {\n  -webkit-transform: translate3d(0, 0, 0px);\n          transform: translate3d(0, 0, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: #fff;\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: default;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: initial;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(255,255,255,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-weekdays {\n  background: #1bbc9b;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: #1bbc9b;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 307.875px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n  border-right: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft,\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideRight {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideRightNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #484848;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e2e2e2;\n  border-color: #e2e2e2;\n}\n.flatpickr-day.today {\n  border-color: #bbb;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #bbb;\n  background: #bbb;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #1bbc9b;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #1bbc9b;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange,\n.flatpickr-day.startRange.startRange + .endRange,\n.flatpickr-day.endRange.startRange + .endRange {\n  -webkit-box-shadow: -10px 0 0 #1bbc9b;\n          box-shadow: -10px 0 0 #1bbc9b;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n          box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover {\n  pointer-events: none;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(72,72,72,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n          box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  display: inline-block;\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day {\n  display: block;\n  width: 100%;\n  max-width: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  background: #fff;\n  border-bottom: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background: #fff;\n  border-radius: 0 0 5px 5px;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #484848;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #484848;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  cursor: pointer;\n  color: #484848;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  display: inline-block;\n  float: left;\n  line-height: inherit;\n  color: #484848;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #ececec;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\nfrom {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@keyframes fpFadeInDown {\nfrom {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n}\nto {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n}\n}\n@-webkit-keyframes fpSlideLeft {\nfrom {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n}\n}\n@keyframes fpSlideLeft {\nfrom {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n}\n}\n@-webkit-keyframes fpSlideLeftNew {\nfrom {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\n}\n@keyframes fpSlideLeftNew {\nfrom {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\nto {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n}\n}\n@-webkit-keyframes fpSlideRight {\nfrom {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\n}\n@keyframes fpSlideRight {\nfrom {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n}\n}\n@-webkit-keyframes fpSlideRightNew {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\n}\n@keyframes fpSlideRightNew {\nfrom {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n}\nto {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n}\n}\n@-webkit-keyframes fpFadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@keyframes fpFadeOut {\nfrom {\n    opacity: 1;\n}\nto {\n    opacity: 0;\n}\n}\n@-webkit-keyframes fpFadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n@keyframes fpFadeIn {\nfrom {\n    opacity: 0;\n}\nto {\n    opacity: 1;\n}\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/node_modules/flatpickr/dist/themes/material_green.css"],"names":[],"mappings":"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D;;EAEE,iBAAiB;CAClB;AACD;EACE,WAAW;EACX,UAAU;CACX;AACD;;EAEE,gBAAgB;EAChB,sBAAsB;EACtB,YAAY;EACZ,qBAAqB;EACrB,eAAe;EACf,kBAAkB;EAClB,UAAU;EACV,0BAA0B;KACvB,uBAAuB;MACtB,sBAAsB;UAClB,kBAAkB;EAC1B,2BAA2B;MACvB,4BAA4B;UACxB,mBAAmB;CAC5B;AACD;EACE,WAAW;EACX,WAAW;EACX,gBAAgB;EAChB,mBAAmB;EACnB,iBAAiB;CAClB;AACD;;EAEE,oBAAoB;CACrB;AACD;EACE,gBAAgB;CACjB;AACD;AACE;IACE,WAAW;IACX,4CAA4C;YACpC,oCAAoC;CAC7C;AACD;IACE,WAAW;IACX,wCAAwC;YAChC,gCAAgC;CACzC;CACF;AACD;AACE;IACE,WAAW;IACX,4CAA4C;YACpC,oCAAoC;CAC7C;AACD;IACE,WAAW;IACX,wCAAwC;YAChC,gCAAgC;CACzC;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,gDAAgD;YACxC,wCAAwC;CACjD;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,gDAAgD;YACxC,wCAAwC;CACjD;CACF;AACD;AACE;IACE,+CAA+C;YACvC,uCAAuC;CAChD;AACD;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;CACF;AACD;AACE;IACE,+CAA+C;YACvC,uCAAuC;CAChD;AACD;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;CACF;AACD;AACE;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;AACD;IACE,+CAA+C;YACvC,uCAAuC;CAChD;CACF;AACD;AACE;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;AACD;IACE,+CAA+C;YACvC,uCAAuC;CAChD;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;CACF;AACD;AACE;IACE,8CAA8C;YACtC,sCAAsC;CAC/C;AACD;IACE,0CAA0C;YAClC,kCAAkC;CAC3C;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF;AACD;AACE;IACE,WAAW;CACZ;AACD;IACE,WAAW;CACZ;CACF","file":"material_green.css","sourcesContent":[".flatpickr-calendar {\n  background: transparent;\n  overflow: hidden;\n  max-height: 0;\n  opacity: 0;\n  visibility: hidden;\n  text-align: center;\n  padding: 0;\n  -webkit-animation: none;\n          animation: none;\n  direction: ltr;\n  border: 0;\n  font-size: 14px;\n  line-height: 24px;\n  border-radius: 5px;\n  position: absolute;\n  width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  -webkit-box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n          box-shadow: 0 3px 13px rgba(0,0,0,0.08);\n}\n.flatpickr-calendar.open,\n.flatpickr-calendar.inline {\n  opacity: 1;\n  visibility: visible;\n  overflow: visible;\n  max-height: 640px;\n}\n.flatpickr-calendar.open {\n  display: inline-block;\n  z-index: 99999;\n}\n.flatpickr-calendar.animate.open {\n  -webkit-animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeInDown 300ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.inline {\n  display: block;\n  position: relative;\n  top: 2px;\n}\n.flatpickr-calendar.static {\n  position: absolute;\n  top: calc(100% + 2px);\n}\n.flatpickr-calendar.static.open {\n  z-index: 999;\n  display: block;\n}\n.flatpickr-calendar.hasWeeks {\n  width: auto;\n}\n.flatpickr-calendar .hasWeeks .dayContainer,\n.flatpickr-calendar .hasTime .dayContainer {\n  border-bottom: 0;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flatpickr-calendar .hasWeeks .dayContainer {\n  border-left: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  height: 40px;\n  border-top: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-innerContainer {\n  border-bottom: 0;\n}\n.flatpickr-calendar.showTimeInput.hasTime .flatpickr-time {\n  border: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.noCalendar.hasTime .flatpickr-time {\n  height: auto;\n}\n.flatpickr-calendar:before,\n.flatpickr-calendar:after {\n  position: absolute;\n  display: block;\n  pointer-events: none;\n  border: solid transparent;\n  content: '';\n  height: 0;\n  width: 0;\n  left: 22px;\n}\n.flatpickr-calendar.rightMost:before,\n.flatpickr-calendar.rightMost:after {\n  left: auto;\n  right: 22px;\n}\n.flatpickr-calendar:before {\n  border-width: 5px;\n  margin: 0 -5px;\n}\n.flatpickr-calendar:after {\n  border-width: 4px;\n  margin: 0 -4px;\n}\n.flatpickr-calendar.arrowTop:before,\n.flatpickr-calendar.arrowTop:after {\n  bottom: 100%;\n}\n.flatpickr-calendar.arrowTop:before {\n  border-bottom-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowTop:after {\n  border-bottom-color: #1bbc9b;\n}\n.flatpickr-calendar.arrowBottom:before,\n.flatpickr-calendar.arrowBottom:after {\n  top: 100%;\n}\n.flatpickr-calendar.arrowBottom:before {\n  border-top-color: rgba(72,72,72,0.2);\n}\n.flatpickr-calendar.arrowBottom:after {\n  border-top-color: #1bbc9b;\n}\n.flatpickr-calendar:focus {\n  outline: 0;\n}\n.flatpickr-wrapper {\n  position: relative;\n  display: inline-block;\n}\n.flatpickr-month {\n  border-radius: 5px 5px 0 0;\n  background: #1bbc9b;\n  color: #fff;\n  fill: #fff;\n  height: 28px;\n  line-height: 1;\n  text-align: center;\n  position: relative;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  overflow: hidden;\n}\n.flatpickr-prev-month,\n.flatpickr-next-month {\n  text-decoration: none;\n  cursor: pointer;\n  position: absolute;\n  top: 0px;\n  line-height: 16px;\n  height: 28px;\n  padding: 10px calc(3.57% - 1.5px);\n  z-index: 3;\n}\n.flatpickr-prev-month i,\n.flatpickr-next-month i {\n  position: relative;\n}\n.flatpickr-prev-month.flatpickr-prev-month,\n.flatpickr-next-month.flatpickr-prev-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  left: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month.flatpickr-next-month,\n.flatpickr-next-month.flatpickr-next-month {\n/*\n        /*rtl:begin:ignore*/\n/*\n        */\n  right: 0;\n/*\n        /*rtl:end:ignore*/\n/*\n        */\n}\n/*\n        /*rtl:begin:ignore*/\n/*\n        /*rtl:end:ignore*/\n.flatpickr-prev-month:hover,\n.flatpickr-next-month:hover {\n  color: #bbb;\n}\n.flatpickr-prev-month:hover svg,\n.flatpickr-next-month:hover svg {\n  fill: #f64747;\n}\n.flatpickr-prev-month svg,\n.flatpickr-next-month svg {\n  width: 14px;\n}\n.flatpickr-prev-month svg path,\n.flatpickr-next-month svg path {\n  -webkit-transition: fill 0.1s;\n  transition: fill 0.1s;\n  fill: inherit;\n}\n.numInputWrapper {\n  position: relative;\n  height: auto;\n}\n.numInputWrapper input,\n.numInputWrapper span {\n  display: inline-block;\n}\n.numInputWrapper input {\n  width: 100%;\n}\n.numInputWrapper span {\n  position: absolute;\n  right: 0;\n  width: 14px;\n  padding: 0 4px 0 2px;\n  height: 50%;\n  line-height: 50%;\n  opacity: 0;\n  cursor: pointer;\n  border: 1px solid rgba(72,72,72,0.05);\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.numInputWrapper span:hover {\n  background: rgba(0,0,0,0.1);\n}\n.numInputWrapper span:active {\n  background: rgba(0,0,0,0.2);\n}\n.numInputWrapper span:after {\n  display: block;\n  content: \"\";\n  position: absolute;\n  top: 33%;\n}\n.numInputWrapper span.arrowUp {\n  top: 0;\n  border-bottom: 0;\n}\n.numInputWrapper span.arrowUp:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-bottom: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span.arrowDown {\n  top: 50%;\n}\n.numInputWrapper span.arrowDown:after {\n  border-left: 4px solid transparent;\n  border-right: 4px solid transparent;\n  border-top: 4px solid rgba(72,72,72,0.6);\n}\n.numInputWrapper span svg {\n  width: inherit;\n  height: auto;\n}\n.numInputWrapper span svg path {\n  fill: rgba(255,255,255,0.5);\n}\n.numInputWrapper:hover {\n  background: rgba(0,0,0,0.05);\n}\n.numInputWrapper:hover span {\n  opacity: 1;\n}\n.flatpickr-current-month {\n  font-size: 135%;\n  line-height: inherit;\n  font-weight: 300;\n  color: inherit;\n  position: absolute;\n  width: 75%;\n  left: 12.5%;\n  padding: 6.16px 0 0 0;\n  line-height: 1;\n  height: 28px;\n  display: inline-block;\n  text-align: center;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n}\n.flatpickr-current-month.slideLeft {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideLeftNew {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideLeftNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRight {\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n  -webkit-animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms ease, fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month.slideRightNew {\n  -webkit-transform: translate3d(0, 0, 0px);\n          transform: translate3d(0, 0, 0px);\n  -webkit-animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms ease, fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-current-month span.cur-month {\n  font-family: inherit;\n  font-weight: 700;\n  color: inherit;\n  display: inline-block;\n  margin-left: 0.5ch;\n  padding: 0;\n}\n.flatpickr-current-month span.cur-month:hover {\n  background: rgba(0,0,0,0.05);\n}\n.flatpickr-current-month .numInputWrapper {\n  width: 6ch;\n  width: 7ch\\0;\n  display: inline-block;\n}\n.flatpickr-current-month .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #fff;\n}\n.flatpickr-current-month .numInputWrapper span.arrowDown:after {\n  border-top-color: #fff;\n}\n.flatpickr-current-month input.cur-year {\n  background: transparent;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: inherit;\n  cursor: default;\n  padding: 0 0 0 0.5ch;\n  margin: 0;\n  display: inline-block;\n  font-size: inherit;\n  font-family: inherit;\n  font-weight: 300;\n  line-height: inherit;\n  height: initial;\n  border: 0;\n  border-radius: 0;\n  vertical-align: initial;\n}\n.flatpickr-current-month input.cur-year:focus {\n  outline: 0;\n}\n.flatpickr-current-month input.cur-year[disabled],\n.flatpickr-current-month input.cur-year[disabled]:hover {\n  font-size: 100%;\n  color: rgba(255,255,255,0.5);\n  background: transparent;\n  pointer-events: none;\n}\n.flatpickr-weekdays {\n  background: #1bbc9b;\n  text-align: center;\n  overflow: hidden;\n  width: 100%;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: center;\n  -webkit-align-items: center;\n      -ms-flex-align: center;\n          align-items: center;\n  height: 28px;\n}\nspan.flatpickr-weekday {\n  cursor: default;\n  font-size: 90%;\n  background: #1bbc9b;\n  color: rgba(0,0,0,0.54);\n  line-height: 1;\n  margin: 0;\n  text-align: center;\n  display: block;\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  font-weight: bolder;\n}\n.dayContainer,\n.flatpickr-weeks {\n  padding: 1px 0 0 0;\n}\n.flatpickr-days {\n  position: relative;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  width: 307.875px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n  border-right: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-days:focus {\n  outline: 0;\n}\n.dayContainer {\n  padding: 0;\n  outline: 0;\n  text-align: left;\n  width: 307.875px;\n  min-width: 307.875px;\n  max-width: 307.875px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  display: inline-block;\n  display: -ms-flexbox;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: flex;\n  -webkit-flex-wrap: wrap;\n          flex-wrap: wrap;\n  -ms-flex-wrap: wrap;\n  -ms-flex-pack: justify;\n  -webkit-justify-content: space-around;\n          justify-content: space-around;\n  -webkit-transform: translate3d(0px, 0px, 0px);\n          transform: translate3d(0px, 0px, 0px);\n  opacity: 1;\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeft,\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-transform: translate3d(-100%, 0px, 0px);\n          transform: translate3d(-100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideLeftNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideLeft 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-calendar.animate .dayContainer.slideRight {\n  -webkit-animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeOut 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRight 400ms cubic-bezier(0.23, 1, 0.32, 1);\n  -webkit-transform: translate3d(100%, 0px, 0px);\n          transform: translate3d(100%, 0px, 0px);\n}\n.flatpickr-calendar.animate .dayContainer.slideRightNew {\n  -webkit-animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n          animation: fpFadeIn 400ms cubic-bezier(0.23, 1, 0.32, 1), fpSlideRightNew 400ms cubic-bezier(0.23, 1, 0.32, 1);\n}\n.flatpickr-day {\n  background: none;\n  border: 1px solid transparent;\n  border-radius: 150px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #484848;\n  cursor: pointer;\n  font-weight: 400;\n  width: 14.2857143%;\n  -webkit-flex-basis: 14.2857143%;\n      -ms-flex-preferred-size: 14.2857143%;\n          flex-basis: 14.2857143%;\n  max-width: 39px;\n  height: 39px;\n  line-height: 39px;\n  margin: 0;\n  display: inline-block;\n  position: relative;\n  -webkit-box-pack: center;\n  -webkit-justify-content: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  text-align: center;\n}\n.flatpickr-day.inRange,\n.flatpickr-day.prevMonthDay.inRange,\n.flatpickr-day.nextMonthDay.inRange,\n.flatpickr-day.today.inRange,\n.flatpickr-day.prevMonthDay.today.inRange,\n.flatpickr-day.nextMonthDay.today.inRange,\n.flatpickr-day:hover,\n.flatpickr-day.prevMonthDay:hover,\n.flatpickr-day.nextMonthDay:hover,\n.flatpickr-day:focus,\n.flatpickr-day.prevMonthDay:focus,\n.flatpickr-day.nextMonthDay:focus {\n  cursor: pointer;\n  outline: 0;\n  background: #e2e2e2;\n  border-color: #e2e2e2;\n}\n.flatpickr-day.today {\n  border-color: #bbb;\n}\n.flatpickr-day.today:hover,\n.flatpickr-day.today:focus {\n  border-color: #bbb;\n  background: #bbb;\n  color: #fff;\n}\n.flatpickr-day.selected,\n.flatpickr-day.startRange,\n.flatpickr-day.endRange,\n.flatpickr-day.selected.inRange,\n.flatpickr-day.startRange.inRange,\n.flatpickr-day.endRange.inRange,\n.flatpickr-day.selected:focus,\n.flatpickr-day.startRange:focus,\n.flatpickr-day.endRange:focus,\n.flatpickr-day.selected:hover,\n.flatpickr-day.startRange:hover,\n.flatpickr-day.endRange:hover,\n.flatpickr-day.selected.prevMonthDay,\n.flatpickr-day.startRange.prevMonthDay,\n.flatpickr-day.endRange.prevMonthDay,\n.flatpickr-day.selected.nextMonthDay,\n.flatpickr-day.startRange.nextMonthDay,\n.flatpickr-day.endRange.nextMonthDay {\n  background: #1bbc9b;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  color: #fff;\n  border-color: #1bbc9b;\n}\n.flatpickr-day.selected.startRange,\n.flatpickr-day.startRange.startRange,\n.flatpickr-day.endRange.startRange {\n  border-radius: 50px 0 0 50px;\n}\n.flatpickr-day.selected.endRange,\n.flatpickr-day.startRange.endRange,\n.flatpickr-day.endRange.endRange {\n  border-radius: 0 50px 50px 0;\n}\n.flatpickr-day.selected.startRange + .endRange,\n.flatpickr-day.startRange.startRange + .endRange,\n.flatpickr-day.endRange.startRange + .endRange {\n  -webkit-box-shadow: -10px 0 0 #1bbc9b;\n          box-shadow: -10px 0 0 #1bbc9b;\n}\n.flatpickr-day.selected.startRange.endRange,\n.flatpickr-day.startRange.startRange.endRange,\n.flatpickr-day.endRange.startRange.endRange {\n  border-radius: 50px;\n}\n.flatpickr-day.inRange {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n          box-shadow: -5px 0 0 #e2e2e2, 5px 0 0 #e2e2e2;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover {\n  pointer-events: none;\n}\n.flatpickr-day.disabled,\n.flatpickr-day.disabled:hover,\n.flatpickr-day.prevMonthDay,\n.flatpickr-day.nextMonthDay,\n.flatpickr-day.notAllowed,\n.flatpickr-day.notAllowed.prevMonthDay,\n.flatpickr-day.notAllowed.nextMonthDay {\n  color: rgba(72,72,72,0.3);\n  background: transparent;\n  border-color: transparent;\n  cursor: default;\n}\n.flatpickr-day.week.selected {\n  border-radius: 0;\n  -webkit-box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n          box-shadow: -5px 0 0 #1bbc9b, 5px 0 0 #1bbc9b;\n}\n.rangeMode .flatpickr-day {\n  margin-top: 1px;\n}\n.flatpickr-weekwrapper {\n  display: inline-block;\n  float: left;\n}\n.flatpickr-weekwrapper .flatpickr-weeks {\n  padding: 0 12px;\n  border-left: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-weekwrapper .flatpickr-weekday {\n  float: none;\n  width: 100%;\n  line-height: 28px;\n}\n.flatpickr-weekwrapper span.flatpickr-day {\n  display: block;\n  width: 100%;\n  max-width: none;\n}\n.flatpickr-innerContainer {\n  display: block;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  background: #fff;\n  border-bottom: 1px solid rgba(72,72,72,0.2);\n}\n.flatpickr-rContainer {\n  display: inline-block;\n  padding: 0;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time {\n  text-align: center;\n  outline: 0;\n  display: block;\n  height: 0;\n  line-height: 40px;\n  max-height: 40px;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  overflow: hidden;\n  display: -webkit-box;\n  display: -webkit-flex;\n  display: -ms-flexbox;\n  display: flex;\n  background: #fff;\n  border-radius: 0 0 5px 5px;\n}\n.flatpickr-time:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n.flatpickr-time .numInputWrapper {\n  -webkit-box-flex: 1;\n  -webkit-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  width: 40%;\n  height: 40px;\n  float: left;\n}\n.flatpickr-time .numInputWrapper span.arrowUp:after {\n  border-bottom-color: #484848;\n}\n.flatpickr-time .numInputWrapper span.arrowDown:after {\n  border-top-color: #484848;\n}\n.flatpickr-time.hasSeconds .numInputWrapper {\n  width: 26%;\n}\n.flatpickr-time.time24hr .numInputWrapper {\n  width: 49%;\n}\n.flatpickr-time input {\n  background: transparent;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  border: 0;\n  border-radius: 0;\n  text-align: center;\n  margin: 0;\n  padding: 0;\n  height: inherit;\n  line-height: inherit;\n  cursor: pointer;\n  color: #484848;\n  font-size: 14px;\n  position: relative;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n.flatpickr-time input.flatpickr-hour {\n  font-weight: bold;\n}\n.flatpickr-time input.flatpickr-minute,\n.flatpickr-time input.flatpickr-second {\n  font-weight: 400;\n}\n.flatpickr-time input:focus {\n  outline: 0;\n  border: 0;\n}\n.flatpickr-time .flatpickr-time-separator,\n.flatpickr-time .flatpickr-am-pm {\n  height: inherit;\n  display: inline-block;\n  float: left;\n  line-height: inherit;\n  color: #484848;\n  font-weight: bold;\n  width: 2%;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  -webkit-align-self: center;\n      -ms-flex-item-align: center;\n          align-self: center;\n}\n.flatpickr-time .flatpickr-am-pm {\n  outline: 0;\n  width: 18%;\n  cursor: pointer;\n  text-align: center;\n  font-weight: 400;\n}\n.flatpickr-time .flatpickr-am-pm:hover,\n.flatpickr-time .flatpickr-am-pm:focus {\n  background: #ececec;\n}\n.flatpickr-input[readonly] {\n  cursor: pointer;\n}\n@-webkit-keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@keyframes fpFadeInDown {\n  from {\n    opacity: 0;\n    -webkit-transform: translate3d(0, -20px, 0);\n            transform: translate3d(0, -20px, 0);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n@-webkit-keyframes fpSlideLeft {\n  from {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n  }\n}\n@keyframes fpSlideLeft {\n  from {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(-100%, 0px, 0px);\n            transform: translate3d(-100%, 0px, 0px);\n  }\n}\n@-webkit-keyframes fpSlideLeftNew {\n  from {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n}\n@keyframes fpSlideLeftNew {\n  from {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0px, 0px, 0px);\n            transform: translate3d(0px, 0px, 0px);\n  }\n}\n@-webkit-keyframes fpSlideRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n}\n@keyframes fpSlideRight {\n  from {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(100%, 0px, 0px);\n            transform: translate3d(100%, 0px, 0px);\n  }\n}\n@-webkit-keyframes fpSlideRightNew {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n}\n@keyframes fpSlideRightNew {\n  from {\n    -webkit-transform: translate3d(-100%, 0, 0px);\n            transform: translate3d(-100%, 0, 0px);\n  }\n  to {\n    -webkit-transform: translate3d(0, 0, 0px);\n            transform: translate3d(0, 0, 0px);\n  }\n}\n@-webkit-keyframes fpFadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@keyframes fpFadeOut {\n  from {\n    opacity: 1;\n  }\n  to {\n    opacity: 0;\n  }\n}\n@-webkit-keyframes fpFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n@keyframes fpFadeIn {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1117);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("798d5652", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d443fe2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Datepicker.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4d443fe2\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=1!./Datepicker.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1117:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\na.input-button {\n    cursor: pointer;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/resources/assets/js/components/enso/vueforms/Datepicker.vue"],"names":[],"mappings":";AAkHA;IACA,gBAAA;CACA","file":"Datepicker.vue","sourcesContent":["<template>\n\n    <div class=\"flatpickr\">\n        <div class=\"control has-icons-right\">\n            <input type=\"text\"\n                :placeholder=\"placeholder\"\n                :id=\"'date-input-' + _uid\"\n                :name=\"name\"\n                :value=\"value\"\n                class=\"input control\"\n                :disabled=\"disabled\">\n            <span class=\"icon is-small is-right\">\n                <i class=\"fas fa-clock\"\n                    v-if=\"timeOnly\">\n                </i>\n                <i class=\"fas fa-calendar-alt\" v-else></i>\n            </span>\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport Flatpickr from 'flatpickr';\n\n// const FlatpickrL10ns = {\n//     ro: require('flatpickr/dist/l10n/ro.js').ro,\n// };\n// Flatpickr.localize(FlatpickrL10ns[Store.user.preferences.global.lang]); //fixme\n\nexport default {\n    props: {\n        value: {\n            required: true,\n            default: null,\n            validate(value) {\n                return value === null || typeof value === 'string'\n                        || value instanceof Date || value instanceof Array;\n            },\n        },\n        name: {\n            type: String,\n            default: null,\n        },\n        time: {\n            type: Boolean,\n            default: false,\n        },\n        timeOnly: {\n            type: Boolean,\n            default: false,\n        },\n        placeholder: {\n            type: String,\n            default: 'Select Date', // fixme\n        },\n        disabled: {\n            type: Boolean,\n            default: false,\n        },\n        format: {\n            type: String,\n            default: 'd-m-Y',\n        },\n        inputClass: {\n            type: String,\n            default: 'form-control',\n        },\n    },\n\n    data() {\n        return {\n            picker: null,\n        };\n    },\n\n    computed: {\n        config(self = this) {\n            return {\n                weekNumbers: false,\n                defaultDate: this.value,\n                dateFormat: this.format,\n                allowInput: false,\n                clickOpens: true,\n                noCalendar: this.timeOnly,\n                enableTime: this.time || this.timeOnly,\n                onChange(selectedDates, dateStr) {\n                    self.$emit('input', dateStr);\n                },\n            };\n        },\n    },\n\n    watch: {\n        value(newValue) {\n            this.picker.setDate(newValue);\n        },\n    },\n\n    mounted() {\n        this.picker = new Flatpickr(this.$el.querySelector('input'), this.config);\n    },\n\n    beforeDestroy() {\n        this.picker.destroy();\n    },\n};\n\n</script>\n\n<style src=\"flatpickr/dist/themes/material_green.css\"></style>\n\n<style>\n\n    a.input-button {\n        cursor: pointer;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flatpickr__ = __webpack_require__(1119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_flatpickr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_flatpickr__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




// const FlatpickrL10ns = {
//     ro: require('flatpickr/dist/l10n/ro.js').ro,
// };
// Flatpickr.localize(FlatpickrL10ns[Store.user.preferences.global.lang]); //fixme

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        value: {
            required: true,
            default: null,
            validate: function validate(value) {
                return value === null || typeof value === 'string' || value instanceof Date || value instanceof Array;
            }
        },
        name: {
            type: String,
            default: null
        },
        time: {
            type: Boolean,
            default: false
        },
        timeOnly: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: 'Select Date' // fixme
        },
        disabled: {
            type: Boolean,
            default: false
        },
        format: {
            type: String,
            default: 'd-m-Y'
        },
        inputClass: {
            type: String,
            default: 'form-control'
        }
    },

    data: function data() {
        return {
            picker: null
        };
    },


    computed: {
        config: function config() {
            var self = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this;

            return {
                weekNumbers: false,
                defaultDate: this.value,
                dateFormat: this.format,
                allowInput: false,
                clickOpens: true,
                noCalendar: this.timeOnly,
                enableTime: this.time || this.timeOnly,
                onChange: function onChange(selectedDates, dateStr) {
                    self.$emit('input', dateStr);
                }
            };
        }
    },

    watch: {
        value: function value(newValue) {
            this.picker.setDate(newValue);
        }
    },

    mounted: function mounted() {
        this.picker = new __WEBPACK_IMPORTED_MODULE_0_flatpickr___default.a(this.$el.querySelector('input'), this.config);
    },
    beforeDestroy: function beforeDestroy() {
        this.picker.destroy();
    }
});

/***/ }),

/***/ 1119:
/***/ (function(module, exports, __webpack_require__) {

/* flatpickr v3.1.4, @license MIT */
(function (global, factory) {
	 true ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.flatpickr = factory());
}(this, (function () { 'use strict';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */



var __assign = Object.assign || function __assign(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
};

function compareDates(date1, date2, timeless) {
    if (timeless !== false) {
        return (new Date(date1.getTime()).setHours(0, 0, 0, 0) -
            new Date(date2.getTime()).setHours(0, 0, 0, 0));
    }
    return date1.getTime() - date2.getTime();
}
var monthToStr = function (monthNumber, shorthand, locale) { return locale.months[shorthand ? "shorthand" : "longhand"][monthNumber]; };
var getWeek = function (givenDate) {
    var onejan = new Date(givenDate.getFullYear(), 0, 1);
    return Math.ceil(((givenDate.getTime() - onejan.getTime()) / 86400000 +
        onejan.getDay() +
        1) /
        7);
};
var duration = {
    DAY: 86400000,
};

var defaults = {
    _disable: [],
    _enable: [],
    allowInput: false,
    altFormat: "F j, Y",
    altInput: false,
    altInputClass: "form-control input",
    animate: window && window.navigator.userAgent.indexOf("MSIE") === -1,
    ariaDateFormat: "F j, Y",
    clickOpens: true,
    closeOnSelect: true,
    conjunction: ", ",
    dateFormat: "Y-m-d",
    defaultHour: 12,
    defaultMinute: 0,
    defaultSeconds: 0,
    disable: [],
    disableMobile: false,
    enable: [],
    enableSeconds: false,
    enableTime: false,
    getWeek: getWeek,
    hourIncrement: 1,
    ignoredFocusElements: [],
    inline: false,
    locale: "default",
    minuteIncrement: 5,
    mode: "single",
    nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
    noCalendar: false,
    onChange: [],
    onClose: [],
    onDayCreate: [],
    onDestroy: [],
    onKeyDown: [],
    onMonthChange: [],
    onOpen: [],
    onParseConfig: [],
    onReady: [],
    onValueUpdate: [],
    onYearChange: [],
    plugins: [],
    position: "auto",
    positionElement: undefined,
    prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
    shorthandCurrentMonth: false,
    static: false,
    time_24hr: false,
    weekNumbers: false,
    wrap: false,
};

var english = {
    weekdays: {
        shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
        longhand: [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
        ],
    },
    months: {
        shorthand: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
        ],
        longhand: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
        ],
    },
    daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
    firstDayOfWeek: 0,
    ordinal: function (nth) {
        var s = nth % 100;
        if (s > 3 && s < 21)
            return "th";
        switch (s % 10) {
            case 1:
                return "st";
            case 2:
                return "nd";
            case 3:
                return "rd";
            default:
                return "th";
        }
    },
    rangeSeparator: " to ",
    weekAbbreviation: "Wk",
    scrollTitle: "Scroll to increment",
    toggleTitle: "Click to toggle",
    amPM: ["AM", "PM"],
};

var pad = function (number) { return ("0" + number).slice(-2); };
var int = function (bool) { return (bool === true ? 1 : 0); };
function debounce(func, wait, immediate) {
    if (immediate === void 0) { immediate = false; }
    var timeout;
    return function () {
        var context = this, args = arguments;
        timeout !== null && clearTimeout(timeout);
        timeout = setTimeout(function () {
            timeout = null;
            if (!immediate)
                func.apply(context, args);
        }, wait);
        if (immediate && !timeout)
            func.apply(context, args);
    };
}
var arrayify = function (obj) {
    return obj instanceof Array ? obj : [obj];
};
function mouseDelta(e) {
    var delta = e.wheelDelta || -e.deltaY;
    return delta >= 0 ? 1 : -1;
}

function toggleClass(elem, className, bool) {
    if (bool === true)
        return elem.classList.add(className);
    elem.classList.remove(className);
}
function createElement(tag, className, content) {
    var e = window.document.createElement(tag);
    className = className || "";
    content = content || "";
    e.className = className;
    if (content !== undefined)
        e.textContent = content;
    return e;
}
function clearNode(node) {
    while (node.firstChild)
        node.removeChild(node.firstChild);
}
function findParent(node, condition) {
    if (condition(node))
        return node;
    else if (node.parentNode)
        return findParent(node.parentNode, condition);
    return undefined;
}
function createNumberInput(inputClassName) {
    var wrapper = createElement("div", "numInputWrapper"), numInput = createElement("input", "numInput " + inputClassName), arrowUp = createElement("span", "arrowUp"), arrowDown = createElement("span", "arrowDown");
    numInput.type = "text";
    numInput.pattern = "\\d*";
    wrapper.appendChild(numInput);
    wrapper.appendChild(arrowUp);
    wrapper.appendChild(arrowDown);
    return wrapper;
}

var do_nothing = function () { return undefined; };
var revFormat = {
    D: do_nothing,
    F: function (dateObj, monthName, locale) {
        dateObj.setMonth(locale.months.longhand.indexOf(monthName));
    },
    G: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    H: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    J: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    K: function (dateObj, amPM) {
        dateObj.setHours(dateObj.getHours() % 12 + 12 * int(/pm/i.test(amPM)));
    },
    M: function (dateObj, shortMonth, locale) {
        dateObj.setMonth(locale.months.shorthand.indexOf(shortMonth));
    },
    S: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    U: function (_, unixSeconds) { return new Date(parseFloat(unixSeconds) * 1000); },
    W: function (dateObj, weekNum) {
        var weekNumber = parseInt(weekNum);
        return new Date(dateObj.getFullYear(), 0, 2 + (weekNumber - 1) * 7, 0, 0, 0, 0);
    },
    Y: function (dateObj, year) {
        dateObj.setFullYear(parseFloat(year));
    },
    Z: function (_, ISODate) { return new Date(ISODate); },
    d: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    h: function (dateObj, hour) {
        dateObj.setHours(parseFloat(hour));
    },
    i: function (dateObj, minutes) {
        dateObj.setMinutes(parseFloat(minutes));
    },
    j: function (dateObj, day) {
        dateObj.setDate(parseFloat(day));
    },
    l: do_nothing,
    m: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    n: function (dateObj, month) {
        dateObj.setMonth(parseFloat(month) - 1);
    },
    s: function (dateObj, seconds) {
        dateObj.setSeconds(parseFloat(seconds));
    },
    w: do_nothing,
    y: function (dateObj, year) {
        dateObj.setFullYear(2000 + parseFloat(year));
    },
};
var tokenRegex = {
    D: "(\\w+)",
    F: "(\\w+)",
    G: "(\\d\\d|\\d)",
    H: "(\\d\\d|\\d)",
    J: "(\\d\\d|\\d)\\w+",
    K: "(am|AM|Am|aM|pm|PM|Pm|pM)",
    M: "(\\w+)",
    S: "(\\d\\d|\\d)",
    U: "(.+)",
    W: "(\\d\\d|\\d)",
    Y: "(\\d{4})",
    Z: "(.+)",
    d: "(\\d\\d|\\d)",
    h: "(\\d\\d|\\d)",
    i: "(\\d\\d|\\d)",
    j: "(\\d\\d|\\d)",
    l: "(\\w+)",
    m: "(\\d\\d|\\d)",
    n: "(\\d\\d|\\d)",
    s: "(\\d\\d|\\d)",
    w: "(\\d\\d|\\d)",
    y: "(\\d{2})",
};
var formats = {
    Z: function (date) { return date.toISOString(); },
    D: function (date, locale, options) {
        return locale.weekdays.shorthand[formats.w(date, locale, options)];
    },
    F: function (date, locale, options) {
        return monthToStr(formats.n(date, locale, options) - 1, false, locale);
    },
    G: function (date, locale, options) {
        return pad(formats.h(date, locale, options));
    },
    H: function (date) { return pad(date.getHours()); },
    J: function (date, locale) {
        return locale.ordinal !== undefined
            ? date.getDate() + locale.ordinal(date.getDate())
            : date.getDate();
    },
    K: function (date) { return (date.getHours() > 11 ? "PM" : "AM"); },
    M: function (date, locale) {
        return monthToStr(date.getMonth(), true, locale);
    },
    S: function (date) { return pad(date.getSeconds()); },
    U: function (date) { return date.getTime() / 1000; },
    W: function (date, _, options) {
        return options.getWeek(date);
    },
    Y: function (date) { return date.getFullYear(); },
    d: function (date) { return pad(date.getDate()); },
    h: function (date) { return (date.getHours() % 12 ? date.getHours() % 12 : 12); },
    i: function (date) { return pad(date.getMinutes()); },
    j: function (date) { return date.getDate(); },
    l: function (date, locale) {
        return locale.weekdays.longhand[date.getDay()];
    },
    m: function (date) { return pad(date.getMonth() + 1); },
    n: function (date) { return date.getMonth() + 1; },
    s: function (date) { return date.getSeconds(); },
    w: function (date) { return date.getDay(); },
    y: function (date) { return String(date.getFullYear()).substring(2); },
};

function FlatpickrInstance(element, instanceConfig) {
    var self = {};
    self.parseDate = parseDate;
    self.formatDate = formatDate;
    self._animationLoop = [];
    self._handlers = [];
    self._bind = bind;
    self._setHoursFromDate = setHoursFromDate;
    self.changeMonth = changeMonth;
    self.changeYear = changeYear;
    self.clear = clear;
    self.close = close;
    self._createElement = createElement;
    self.destroy = destroy;
    self.isEnabled = isEnabled;
    self.jumpToDate = jumpToDate;
    self.open = open;
    self.redraw = redraw;
    self.set = set;
    self.setDate = setDate;
    self.toggle = toggle;
    function setupHelperFunctions() {
        self.utils = {
            getDaysInMonth: function (month, yr) {
                if (month === void 0) { month = self.currentMonth; }
                if (yr === void 0) { yr = self.currentYear; }
                if (month === 1 && ((yr % 4 === 0 && yr % 100 !== 0) || yr % 400 === 0))
                    return 29;
                return self.l10n.daysInMonth[month];
            },
        };
    }
    function init() {
        self.element = self.input = element;
        self.isOpen = false;
        parseConfig();
        setupLocale();
        setupInputs();
        setupDates();
        setupHelperFunctions();
        if (!self.isMobile)
            build();
        bindEvents();
        if (self.selectedDates.length || self.config.noCalendar) {
            if (self.config.enableTime) {
                setHoursFromDate(self.config.noCalendar
                    ? self.latestSelectedDateObj || self.config.minDate
                    : undefined);
            }
            updateValue(false);
        }
        self.showTimeInput =
            self.selectedDates.length > 0 || self.config.noCalendar;
        if (self.weekWrapper !== undefined && self.daysContainer !== undefined) {
            self.calendarContainer.style.width =
                self.daysContainer.offsetWidth + self.weekWrapper.offsetWidth + "px";
        }
        if (!self.isMobile)
            positionCalendar();
        triggerEvent("onReady");
    }
    function bindToInstance(fn) {
        return fn.bind(self);
    }
    function updateTime(e) {
        if (self.config.noCalendar && !self.selectedDates.length) {
            self.setDate(new Date().setHours(self.config.defaultHour, self.config.defaultMinute, self.config.defaultSeconds), false);
            setHoursFromInputs();
            updateValue();
        }
        timeWrapper(e);
        if (self.selectedDates.length === 0)
            return;
        if (!self.minDateHasTime ||
            e.type !== "input" ||
            e.target.value.length >= 2) {
            setHoursFromInputs();
            updateValue();
        }
        else {
            setTimeout(function () {
                setHoursFromInputs();
                updateValue();
            }, 1000);
        }
    }
    function ampm2military(hour, amPM) {
        return hour % 12 + 12 * int(amPM === "PM");
    }
    function military2ampm(hour) {
        switch (hour % 24) {
            case 0:
            case 12:
                return 12;
            default:
                return hour % 12;
        }
    }
    function setHoursFromInputs() {
        if (self.hourElement === undefined || self.minuteElement === undefined)
            return;
        var hours = (parseInt(self.hourElement.value.slice(-2), 10) || 0) % 24, minutes = (parseInt(self.minuteElement.value, 10) || 0) % 60, seconds = self.secondElement !== undefined
            ? (parseInt(self.secondElement.value, 10) || 0) % 60
            : 0;
        if (self.amPM !== undefined)
            hours = ampm2military(hours, self.amPM.textContent);
        if (self.config.minDate &&
            self.minDateHasTime &&
            self.latestSelectedDateObj &&
            compareDates(self.latestSelectedDateObj, self.config.minDate) === 0) {
            hours = Math.max(hours, self.config.minDate.getHours());
            if (hours === self.config.minDate.getHours())
                minutes = Math.max(minutes, self.config.minDate.getMinutes());
        }
        if (self.config.maxDate &&
            self.maxDateHasTime &&
            self.latestSelectedDateObj &&
            compareDates(self.latestSelectedDateObj, self.config.maxDate) === 0) {
            hours = Math.min(hours, self.config.maxDate.getHours());
            if (hours === self.config.maxDate.getHours())
                minutes = Math.min(minutes, self.config.maxDate.getMinutes());
        }
        setHours(hours, minutes, seconds);
    }
    function setHoursFromDate(dateObj) {
        var date = dateObj || self.latestSelectedDateObj;
        if (date)
            setHours(date.getHours(), date.getMinutes(), date.getSeconds());
    }
    function setHours(hours, minutes, seconds) {
        if (self.latestSelectedDateObj !== undefined) {
            self.latestSelectedDateObj.setHours(hours % 24, minutes, seconds || 0, 0);
        }
        if (!self.hourElement || !self.minuteElement || self.isMobile)
            return;
        self.hourElement.value = pad(!self.config.time_24hr
            ? (12 + hours) % 12 + 12 * int(hours % 12 === 0)
            : hours);
        self.minuteElement.value = pad(minutes);
        if (self.amPM !== undefined)
            self.amPM.textContent = hours >= 12 ? "PM" : "AM";
        if (self.secondElement !== undefined)
            self.secondElement.value = pad(seconds);
    }
    function onYearInput(event) {
        var year = parseInt(event.target.value) + (event.delta || 0);
        if (year.toString().length === 4 || event.key === "Enter") {
            self.currentYearElement.blur();
            if (!/[^\d]/.test(year.toString()))
                changeYear(year);
        }
    }
    function bind(element, event, handler) {
        if (event instanceof Array)
            return event.forEach(function (ev) { return bind(element, ev, handler); });
        if (element instanceof Array)
            return element.forEach(function (el) { return bind(el, event, handler); });
        element.addEventListener(event, handler);
        self._handlers.push({ element: element, event: event, handler: handler });
    }
    function onClick(handler) {
        return function (evt) { return evt.which === 1 && handler(evt); };
    }
    function triggerChange() {
        triggerEvent("onChange");
    }
    function bindEvents() {
        if (self.config.wrap) {
            ["open", "close", "toggle", "clear"].forEach(function (evt) {
                Array.prototype.forEach.call(self.element.querySelectorAll("[data-" + evt + "]"), function (el) {
                    return bind(el, "click", self[evt]);
                });
            });
        }
        if (self.isMobile) {
            setupMobile();
            return;
        }
        var debouncedResize = debounce(onResize, 50);
        self._debouncedChange = debounce(triggerChange, 300);
        if (self.config.mode === "range" && self.daysContainer)
            bind(self.daysContainer, "mouseover", function (e) {
                return onMouseOver(e.target);
            });
        bind(window.document.body, "keydown", onKeyDown);
        if (!self.config.static)
            bind(self._input, "keydown", onKeyDown);
        if (!self.config.inline && !self.config.static)
            bind(window, "resize", debouncedResize);
        if (window.ontouchstart !== undefined)
            bind(window.document.body, "touchstart", documentClick);
        bind(window.document.body, "mousedown", onClick(documentClick));
        bind(self._input, "blur", documentClick);
        if (self.config.clickOpens === true) {
            bind(self._input, "focus", self.open);
            bind(self._input, "mousedown", onClick(self.open));
        }
        if (self.daysContainer !== undefined) {
            self.monthNav.addEventListener("wheel", function (e) { return e.preventDefault(); });
            bind(self.monthNav, "wheel", debounce(onMonthNavScroll, 10));
            bind(self.monthNav, "mousedown", onClick(onMonthNavClick));
            bind(self.monthNav, ["keyup", "increment"], onYearInput);
            bind(self.daysContainer, "mousedown", onClick(selectDate));
            if (self.config.animate) {
                bind(self.daysContainer, ["webkitAnimationEnd", "animationend"], animateDays);
                bind(self.monthNav, ["webkitAnimationEnd", "animationend"], animateMonths);
            }
        }
        if (self.timeContainer !== undefined &&
            self.minuteElement !== undefined &&
            self.hourElement !== undefined) {
            var selText = function (e) {
                return e.target.select();
            };
            bind(self.timeContainer, ["wheel", "input", "increment"], updateTime);
            bind(self.timeContainer, "mousedown", onClick(timeIncrement));
            bind(self.timeContainer, ["wheel", "increment"], self._debouncedChange);
            bind(self.timeContainer, "input", triggerChange);
            bind([self.hourElement, self.minuteElement], ["focus", "click"], selText);
            if (self.secondElement !== undefined)
                bind(self.secondElement, "focus", function () { return self.secondElement && self.secondElement.select(); });
            if (self.amPM !== undefined) {
                bind(self.amPM, "mousedown", onClick(function (e) {
                    updateTime(e);
                    triggerChange();
                }));
            }
        }
    }
    function processPostDayAnimation() {
        self._animationLoop.forEach(function (f) { return f(); });
        self._animationLoop = [];
    }
    function animateDays(e) {
        if (self.daysContainer && self.daysContainer.childNodes.length > 1) {
            switch (e.animationName) {
                case "fpSlideLeft":
                    self.daysContainer.lastChild &&
                        self.daysContainer.lastChild.classList.remove("slideLeftNew");
                    self.daysContainer.removeChild(self.daysContainer
                        .firstChild);
                    self.days = self.daysContainer.firstChild;
                    processPostDayAnimation();
                    break;
                case "fpSlideRight":
                    self.daysContainer.firstChild &&
                        self.daysContainer.firstChild.classList.remove("slideRightNew");
                    self.daysContainer.removeChild(self.daysContainer
                        .lastChild);
                    self.days = self.daysContainer.firstChild;
                    processPostDayAnimation();
                    break;
                default:
                    break;
            }
        }
    }
    function animateMonths(e) {
        switch (e.animationName) {
            case "fpSlideLeftNew":
            case "fpSlideRightNew":
                self.navigationCurrentMonth.classList.remove("slideLeftNew");
                self.navigationCurrentMonth.classList.remove("slideRightNew");
                var nav = self.navigationCurrentMonth;
                while (nav.nextSibling &&
                    /curr/.test(nav.nextSibling.className))
                    self.monthNav.removeChild(nav.nextSibling);
                while (nav.previousSibling &&
                    /curr/.test(nav.previousSibling.className))
                    self.monthNav.removeChild(nav.previousSibling);
                self.oldCurMonth = undefined;
                break;
        }
    }
    function jumpToDate(jumpDate) {
        var jumpTo = jumpDate !== undefined
            ? parseDate(jumpDate)
            : self.latestSelectedDateObj ||
                (self.config.minDate && self.config.minDate > self.now
                    ? self.config.minDate
                    : self.config.maxDate && self.config.maxDate < self.now
                        ? self.config.maxDate
                        : self.now);
        try {
            if (jumpTo !== undefined) {
                self.currentYear = jumpTo.getFullYear();
                self.currentMonth = jumpTo.getMonth();
            }
        }
        catch (e) {
            console.error(e.stack);
            console.warn("Invalid date supplied: " + jumpTo);
        }
        self.redraw();
    }
    function timeIncrement(e) {
        if (~e.target.className.indexOf("arrow"))
            incrementNumInput(e, e.target.classList.contains("arrowUp") ? 1 : -1);
    }
    function incrementNumInput(e, delta, inputElem) {
        var target = e && e.target;
        var input = inputElem ||
            (target && target.parentNode && target.parentNode.firstChild);
        var event = createEvent("increment");
        event.delta = delta;
        input && input.dispatchEvent(event);
    }
    function build() {
        var fragment = window.document.createDocumentFragment();
        self.calendarContainer = createElement("div", "flatpickr-calendar");
        self.calendarContainer.tabIndex = -1;
        if (!self.config.noCalendar) {
            fragment.appendChild(buildMonthNav());
            self.innerContainer = createElement("div", "flatpickr-innerContainer");
            if (self.config.weekNumbers) {
                var _a = buildWeeks(), weekWrapper = _a.weekWrapper, weekNumbers = _a.weekNumbers;
                self.innerContainer.appendChild(weekWrapper);
                self.weekNumbers = weekNumbers;
                self.weekWrapper = weekWrapper;
            }
            self.rContainer = createElement("div", "flatpickr-rContainer");
            self.rContainer.appendChild(buildWeekdays());
            if (!self.daysContainer) {
                self.daysContainer = createElement("div", "flatpickr-days");
                self.daysContainer.tabIndex = -1;
            }
            buildDays();
            self.rContainer.appendChild(self.daysContainer);
            self.innerContainer.appendChild(self.rContainer);
            fragment.appendChild(self.innerContainer);
        }
        if (self.config.enableTime) {
            fragment.appendChild(buildTime());
        }
        toggleClass(self.calendarContainer, "rangeMode", self.config.mode === "range");
        toggleClass(self.calendarContainer, "animate", self.config.animate);
        self.calendarContainer.appendChild(fragment);
        var customAppend = self.config.appendTo !== undefined && self.config.appendTo.nodeType;
        if (self.config.inline || self.config.static) {
            self.calendarContainer.classList.add(self.config.inline ? "inline" : "static");
            if (self.config.inline && !customAppend && self.element.parentNode) {
                self.element.parentNode.insertBefore(self.calendarContainer, self._input.nextSibling);
            }
            if (self.config.static) {
                var wrapper = createElement("div", "flatpickr-wrapper");
                if (self.element.parentNode)
                    self.element.parentNode.insertBefore(wrapper, self.element);
                wrapper.appendChild(self.element);
                if (self.altInput)
                    wrapper.appendChild(self.altInput);
                wrapper.appendChild(self.calendarContainer);
            }
        }
        if (!self.config.static && !self.config.inline)
            (self.config.appendTo !== undefined
                ? self.config.appendTo
                : window.document.body).appendChild(self.calendarContainer);
    }
    function createDay(className, date, dayNumber, i) {
        var dateIsEnabled = isEnabled(date, true), dayElement = createElement("span", "flatpickr-day " + className, date.getDate().toString());
        dayElement.dateObj = date;
        dayElement.$i = i;
        dayElement.setAttribute("aria-label", self.formatDate(date, self.config.ariaDateFormat));
        if (compareDates(date, self.now) === 0) {
            self.todayDateElem = dayElement;
            dayElement.classList.add("today");
        }
        if (dateIsEnabled) {
            dayElement.tabIndex = -1;
            if (isDateSelected(date)) {
                dayElement.classList.add("selected");
                self.selectedDateElem = dayElement;
                if (self.config.mode === "range") {
                    toggleClass(dayElement, "startRange", self.selectedDates[0] &&
                        compareDates(date, self.selectedDates[0]) === 0);
                    toggleClass(dayElement, "endRange", self.selectedDates[1] &&
                        compareDates(date, self.selectedDates[1]) === 0);
                }
            }
        }
        else {
            dayElement.classList.add("disabled");
            if (self.selectedDates[0] &&
                self.minRangeDate &&
                date > self.minRangeDate &&
                date < self.selectedDates[0])
                self.minRangeDate = date;
            else if (self.selectedDates[0] &&
                self.maxRangeDate &&
                date < self.maxRangeDate &&
                date > self.selectedDates[0])
                self.maxRangeDate = date;
        }
        if (self.config.mode === "range") {
            if (isDateInRange(date) && !isDateSelected(date))
                dayElement.classList.add("inRange");
            if (self.selectedDates.length === 1 &&
                self.minRangeDate !== undefined &&
                self.maxRangeDate !== undefined &&
                (date < self.minRangeDate || date > self.maxRangeDate))
                dayElement.classList.add("notAllowed");
        }
        if (self.weekNumbers &&
            className !== "prevMonthDay" &&
            dayNumber % 7 === 1) {
            self.weekNumbers.insertAdjacentHTML("beforeend", "<span class='disabled flatpickr-day'>" +
                self.config.getWeek(date) +
                "</span>");
        }
        triggerEvent("onDayCreate", dayElement);
        return dayElement;
    }
    function focusOnDay(currentIndex, offset) {
        var newIndex = currentIndex + offset || 0, targetNode = (currentIndex !== undefined
            ? self.days.childNodes[newIndex]
            : self.selectedDateElem ||
                self.todayDateElem ||
                self.days.childNodes[0]);
        var focus = function () {
            targetNode = targetNode || self.days.childNodes[newIndex];
            targetNode.focus();
            if (self.config.mode === "range")
                onMouseOver(targetNode);
        };
        if (targetNode === undefined && offset !== 0) {
            if (offset > 0) {
                self.changeMonth(1, true, undefined, true);
                newIndex = newIndex % 42;
            }
            else if (offset < 0) {
                self.changeMonth(-1, true, undefined, true);
                newIndex += 42;
            }
            return afterDayAnim(focus);
        }
        focus();
    }
    function afterDayAnim(fn) {
        self.config.animate === true ? self._animationLoop.push(fn) : fn();
    }
    function buildDays(delta) {
        if (self.daysContainer === undefined) {
            return;
        }
        var firstOfMonth = (new Date(self.currentYear, self.currentMonth, 1).getDay() -
            self.l10n.firstDayOfWeek +
            7) %
            7, isRangeMode = self.config.mode === "range";
        var prevMonthDays = self.utils.getDaysInMonth((self.currentMonth - 1 + 12) % 12);
        var daysInMonth = self.utils.getDaysInMonth(), days = window.document.createDocumentFragment();
        var dayNumber = prevMonthDays + 1 - firstOfMonth, dayIndex = 0;
        if (self.weekNumbers && self.weekNumbers.firstChild)
            self.weekNumbers.textContent = "";
        if (isRangeMode) {
            self.minRangeDate = new Date(self.currentYear, self.currentMonth - 1, dayNumber);
            self.maxRangeDate = new Date(self.currentYear, self.currentMonth + 1, (42 - firstOfMonth) % daysInMonth);
        }
        for (; dayNumber <= prevMonthDays; dayNumber++, dayIndex++) {
            days.appendChild(createDay("prevMonthDay", new Date(self.currentYear, self.currentMonth - 1, dayNumber), dayNumber, dayIndex));
        }
        for (dayNumber = 1; dayNumber <= daysInMonth; dayNumber++, dayIndex++) {
            days.appendChild(createDay("", new Date(self.currentYear, self.currentMonth, dayNumber), dayNumber, dayIndex));
        }
        for (var dayNum = daysInMonth + 1; dayNum <= 42 - firstOfMonth; dayNum++, dayIndex++) {
            days.appendChild(createDay("nextMonthDay", new Date(self.currentYear, self.currentMonth + 1, dayNum % daysInMonth), dayNum, dayIndex));
        }
        if (isRangeMode && self.selectedDates.length === 1 && days.childNodes[0]) {
            self._hidePrevMonthArrow =
                self._hidePrevMonthArrow ||
                    (!!self.minRangeDate &&
                        self.minRangeDate > days.childNodes[0].dateObj);
            self._hideNextMonthArrow =
                self._hideNextMonthArrow ||
                    (!!self.maxRangeDate &&
                        self.maxRangeDate <
                            new Date(self.currentYear, self.currentMonth + 1, 1));
        }
        else
            updateNavigationCurrentMonth();
        var dayContainer = createElement("div", "dayContainer");
        dayContainer.appendChild(days);
        if (!self.config.animate || delta === undefined)
            clearNode(self.daysContainer);
        else {
            while (self.daysContainer.childNodes.length > 1)
                self.daysContainer.removeChild(self.daysContainer.firstChild);
        }
        if (delta && delta >= 0)
            self.daysContainer.appendChild(dayContainer);
        else
            self.daysContainer.insertBefore(dayContainer, self.daysContainer.firstChild);
        self.days = self.daysContainer.childNodes[0];
    }
    function buildMonthNav() {
        var monthNavFragment = window.document.createDocumentFragment();
        self.monthNav = createElement("div", "flatpickr-month");
        self.prevMonthNav = createElement("span", "flatpickr-prev-month");
        self.prevMonthNav.innerHTML = self.config.prevArrow;
        self.currentMonthElement = createElement("span", "cur-month");
        self.currentMonthElement.title = self.l10n.scrollTitle;
        var yearInput = createNumberInput("cur-year");
        self.currentYearElement = yearInput.childNodes[0];
        self.currentYearElement.title = self.l10n.scrollTitle;
        if (self.config.minDate)
            self.currentYearElement.min = self.config.minDate
                .getFullYear()
                .toString();
        if (self.config.maxDate) {
            self.currentYearElement.max = self.config.maxDate
                .getFullYear()
                .toString();
            self.currentYearElement.disabled =
                !!self.config.minDate &&
                    self.config.minDate.getFullYear() === self.config.maxDate.getFullYear();
        }
        self.nextMonthNav = createElement("span", "flatpickr-next-month");
        self.nextMonthNav.innerHTML = self.config.nextArrow;
        self.navigationCurrentMonth = createElement("span", "flatpickr-current-month");
        self.navigationCurrentMonth.appendChild(self.currentMonthElement);
        self.navigationCurrentMonth.appendChild(yearInput);
        monthNavFragment.appendChild(self.prevMonthNav);
        monthNavFragment.appendChild(self.navigationCurrentMonth);
        monthNavFragment.appendChild(self.nextMonthNav);
        self.monthNav.appendChild(monthNavFragment);
        Object.defineProperty(self, "_hidePrevMonthArrow", {
            get: function () { return self.__hidePrevMonthArrow; },
            set: function (bool) {
                if (self.__hidePrevMonthArrow !== bool)
                    self.prevMonthNav.style.display = bool ? "none" : "block";
                self.__hidePrevMonthArrow = bool;
            },
        });
        Object.defineProperty(self, "_hideNextMonthArrow", {
            get: function () { return self.__hideNextMonthArrow; },
            set: function (bool) {
                if (self.__hideNextMonthArrow !== bool)
                    self.nextMonthNav.style.display = bool ? "none" : "block";
                self.__hideNextMonthArrow = bool;
            },
        });
        updateNavigationCurrentMonth();
        return self.monthNav;
    }
    function buildTime() {
        self.calendarContainer.classList.add("hasTime");
        if (self.config.noCalendar)
            self.calendarContainer.classList.add("noCalendar");
        self.timeContainer = createElement("div", "flatpickr-time");
        self.timeContainer.tabIndex = -1;
        var separator = createElement("span", "flatpickr-time-separator", ":");
        var hourInput = createNumberInput("flatpickr-hour");
        self.hourElement = hourInput.childNodes[0];
        var minuteInput = createNumberInput("flatpickr-minute");
        self.minuteElement = minuteInput.childNodes[0];
        self.hourElement.tabIndex = self.minuteElement.tabIndex = -1;
        self.hourElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getHours()
            : self.config.time_24hr
                ? self.config.defaultHour
                : military2ampm(self.config.defaultHour));
        self.minuteElement.value = pad(self.latestSelectedDateObj
            ? self.latestSelectedDateObj.getMinutes()
            : self.config.defaultMinute);
        self.hourElement.step = self.config.hourIncrement.toString();
        self.minuteElement.step = self.config.minuteIncrement.toString();
        self.hourElement.min = self.config.time_24hr ? "0" : "1";
        self.hourElement.max = self.config.time_24hr ? "23" : "12";
        self.minuteElement.min = "0";
        self.minuteElement.max = "59";
        self.hourElement.title = self.minuteElement.title = self.l10n.scrollTitle;
        self.timeContainer.appendChild(hourInput);
        self.timeContainer.appendChild(separator);
        self.timeContainer.appendChild(minuteInput);
        if (self.config.time_24hr)
            self.timeContainer.classList.add("time24hr");
        if (self.config.enableSeconds) {
            self.timeContainer.classList.add("hasSeconds");
            var secondInput = createNumberInput("flatpickr-second");
            self.secondElement = secondInput.childNodes[0];
            self.secondElement.value = pad(self.latestSelectedDateObj
                ? self.latestSelectedDateObj.getSeconds()
                : self.config.defaultSeconds);
            self.secondElement.step = self.minuteElement.step;
            self.secondElement.min = self.minuteElement.min;
            self.secondElement.max = self.minuteElement.max;
            self.timeContainer.appendChild(createElement("span", "flatpickr-time-separator", ":"));
            self.timeContainer.appendChild(secondInput);
        }
        if (!self.config.time_24hr) {
            self.amPM = createElement("span", "flatpickr-am-pm", self.l10n.amPM[int((self.latestSelectedDateObj
                ? self.hourElement.value
                : self.config.defaultHour) > 11)]);
            self.amPM.title = self.l10n.toggleTitle;
            self.amPM.tabIndex = -1;
            self.timeContainer.appendChild(self.amPM);
        }
        return self.timeContainer;
    }
    function buildWeekdays() {
        if (!self.weekdayContainer)
            self.weekdayContainer = createElement("div", "flatpickr-weekdays");
        var firstDayOfWeek = self.l10n.firstDayOfWeek;
        var weekdays = self.l10n.weekdays.shorthand.slice();
        if (firstDayOfWeek > 0 && firstDayOfWeek < weekdays.length) {
            weekdays = weekdays.splice(firstDayOfWeek, weekdays.length).concat(weekdays.splice(0, firstDayOfWeek));
        }
        self.weekdayContainer.innerHTML = "\n    <span class=flatpickr-weekday>\n      " + weekdays.join("</span><span class=flatpickr-weekday>") + "\n    </span>\n    ";
        return self.weekdayContainer;
    }
    function buildWeeks() {
        self.calendarContainer.classList.add("hasWeeks");
        var weekWrapper = createElement("div", "flatpickr-weekwrapper");
        weekWrapper.appendChild(createElement("span", "flatpickr-weekday", self.l10n.weekAbbreviation));
        var weekNumbers = createElement("div", "flatpickr-weeks");
        weekWrapper.appendChild(weekNumbers);
        return {
            weekWrapper: weekWrapper,
            weekNumbers: weekNumbers,
        };
    }
    function changeMonth(value, is_offset, animate, from_keyboard) {
        if (is_offset === void 0) { is_offset = true; }
        if (animate === void 0) { animate = self.config.animate; }
        if (from_keyboard === void 0) { from_keyboard = false; }
        var delta = is_offset ? value : value - self.currentMonth;
        if ((delta < 0 && self._hidePrevMonthArrow) ||
            (delta > 0 && self._hideNextMonthArrow))
            return;
        self.currentMonth += delta;
        if (self.currentMonth < 0 || self.currentMonth > 11) {
            self.currentYear += self.currentMonth > 11 ? 1 : -1;
            self.currentMonth = (self.currentMonth + 12) % 12;
            triggerEvent("onYearChange");
        }
        buildDays(animate ? delta : undefined);
        if (!animate) {
            triggerEvent("onMonthChange");
            return updateNavigationCurrentMonth();
        }
        var nav = self.navigationCurrentMonth;
        if (delta < 0) {
            while (nav.nextSibling &&
                /curr/.test(nav.nextSibling.className))
                self.monthNav.removeChild(nav.nextSibling);
        }
        else if (delta > 0) {
            while (nav.previousSibling &&
                /curr/.test(nav.previousSibling.className))
                self.monthNav.removeChild(nav.previousSibling);
        }
        self.oldCurMonth = self.navigationCurrentMonth;
        self.navigationCurrentMonth = self.monthNav.insertBefore(self.oldCurMonth.cloneNode(true), delta > 0 ? self.oldCurMonth.nextSibling : self.oldCurMonth);
        var daysContainer = self.daysContainer;
        if (daysContainer.firstChild && daysContainer.lastChild) {
            if (delta > 0) {
                daysContainer.firstChild.classList.add("slideLeft");
                daysContainer.lastChild.classList.add("slideLeftNew");
                self.oldCurMonth.classList.add("slideLeft");
                self.navigationCurrentMonth.classList.add("slideLeftNew");
            }
            else if (delta < 0) {
                daysContainer.firstChild.classList.add("slideRightNew");
                daysContainer.lastChild.classList.add("slideRight");
                self.oldCurMonth.classList.add("slideRight");
                self.navigationCurrentMonth.classList.add("slideRightNew");
            }
        }
        self.currentMonthElement = self.navigationCurrentMonth
            .firstChild;
        self.currentYearElement = self.navigationCurrentMonth.lastChild
            .childNodes[0];
        updateNavigationCurrentMonth();
        if (self.oldCurMonth.firstChild)
            self.oldCurMonth.firstChild.textContent = monthToStr(self.currentMonth - delta, self.config.shorthandCurrentMonth, self.l10n);
        triggerEvent("onMonthChange");
        if (from_keyboard &&
            document.activeElement &&
            document.activeElement.$i) {
            var index_1 = document.activeElement.$i;
            afterDayAnim(function () {
                focusOnDay(index_1, 0);
            });
        }
    }
    function clear(triggerChangeEvent) {
        if (triggerChangeEvent === void 0) { triggerChangeEvent = true; }
        self.input.value = "";
        if (self.altInput)
            self.altInput.value = "";
        if (self.mobileInput)
            self.mobileInput.value = "";
        self.selectedDates = [];
        self.latestSelectedDateObj = undefined;
        self.showTimeInput = false;
        self.redraw();
        if (triggerChangeEvent === true)
            triggerEvent("onChange");
    }
    function close() {
        self.isOpen = false;
        if (!self.isMobile) {
            self.calendarContainer.classList.remove("open");
            self._input.classList.remove("active");
        }
        triggerEvent("onClose");
    }
    function destroy() {
        if (self.config !== undefined)
            triggerEvent("onDestroy");
        for (var i = self._handlers.length; i--;) {
            var h = self._handlers[i];
            h.element.removeEventListener(h.event, h.handler);
        }
        self._handlers = [];
        if (self.mobileInput) {
            if (self.mobileInput.parentNode)
                self.mobileInput.parentNode.removeChild(self.mobileInput);
            self.mobileInput = undefined;
        }
        else if (self.calendarContainer && self.calendarContainer.parentNode)
            self.calendarContainer.parentNode.removeChild(self.calendarContainer);
        if (self.altInput) {
            self.input.type = "text";
            if (self.altInput.parentNode)
                self.altInput.parentNode.removeChild(self.altInput);
            delete self.altInput;
        }
        if (self.input) {
            self.input.type = self.input._type;
            self.input.classList.remove("flatpickr-input");
            self.input.removeAttribute("readonly");
            self.input.value = "";
        }
        [
            "_showTimeInput",
            "latestSelectedDateObj",
            "_hideNextMonthArrow",
            "_hidePrevMonthArrow",
            "__hideNextMonthArrow",
            "__hidePrevMonthArrow",
            "isMobile",
            "isOpen",
            "selectedDateElem",
            "minDateHasTime",
            "maxDateHasTime",
            "days",
            "daysContainer",
            "_input",
            "_positionElement",
            "innerContainer",
            "rContainer",
            "monthNav",
            "todayDateElem",
            "calendarContainer",
            "weekdayContainer",
            "prevMonthNav",
            "nextMonthNav",
            "currentMonthElement",
            "currentYearElement",
            "navigationCurrentMonth",
            "selectedDateElem",
            "config",
        ].forEach(function (k) {
            try {
                delete self[k];
            }
            catch (_) { }
        });
    }
    function isCalendarElem(elem) {
        if (self.config.appendTo && self.config.appendTo.contains(elem))
            return true;
        return self.calendarContainer.contains(elem);
    }
    function documentClick(e) {
        if (self.isOpen && !self.config.inline) {
            var isCalendarElement = isCalendarElem(e.target);
            var isInput = e.target === self.input ||
                e.target === self.altInput ||
                self.element.contains(e.target) ||
                (e.path &&
                    e.path.indexOf &&
                    (~e.path.indexOf(self.input) ||
                        ~e.path.indexOf(self.altInput)));
            var lostFocus = e.type === "blur"
                ? isInput &&
                    e.relatedTarget &&
                    !isCalendarElem(e.relatedTarget)
                : !isInput && !isCalendarElement;
            if (lostFocus &&
                self.config.ignoredFocusElements.indexOf(e.target) === -1) {
                self.close();
                if (self.config.mode === "range" && self.selectedDates.length === 1) {
                    self.clear(false);
                    self.redraw();
                }
            }
        }
    }
    function changeYear(newYear) {
        if (!newYear ||
            (self.currentYearElement.min &&
                newYear < parseInt(self.currentYearElement.min)) ||
            (self.currentYearElement.max &&
                newYear > parseInt(self.currentYearElement.max)))
            return;
        var newYearNum = newYear, isNewYear = self.currentYear !== newYearNum;
        self.currentYear = newYearNum || self.currentYear;
        if (self.config.maxDate &&
            self.currentYear === self.config.maxDate.getFullYear()) {
            self.currentMonth = Math.min(self.config.maxDate.getMonth(), self.currentMonth);
        }
        else if (self.config.minDate &&
            self.currentYear === self.config.minDate.getFullYear()) {
            self.currentMonth = Math.max(self.config.minDate.getMonth(), self.currentMonth);
        }
        if (isNewYear) {
            self.redraw();
            triggerEvent("onYearChange");
        }
    }
    function isEnabled(date, timeless) {
        if (timeless === void 0) { timeless = true; }
        var dateToCheck = self.parseDate(date, undefined, timeless);
        if ((self.config.minDate &&
            dateToCheck &&
            compareDates(dateToCheck, self.config.minDate, timeless !== undefined ? timeless : !self.minDateHasTime) < 0) ||
            (self.config.maxDate &&
                dateToCheck &&
                compareDates(dateToCheck, self.config.maxDate, timeless !== undefined ? timeless : !self.maxDateHasTime) > 0))
            return false;
        if (!self.config.enable.length && !self.config.disable.length)
            return true;
        if (dateToCheck === undefined)
            return false;
        var bool = self.config.enable.length > 0, array = bool ? self.config.enable : self.config.disable;
        for (var i = 0, d = void 0; i < array.length; i++) {
            d = array[i];
            if (typeof d === "function" &&
                d(dateToCheck))
                return bool;
            else if (d instanceof Date &&
                dateToCheck !== undefined &&
                d.getTime() === dateToCheck.getTime())
                return bool;
            else if (typeof d === "string" && dateToCheck !== undefined) {
                var parsed = self.parseDate(d, undefined, true);
                return parsed && parsed.getTime() === dateToCheck.getTime()
                    ? bool
                    : !bool;
            }
            else if (typeof d === "object" &&
                dateToCheck !== undefined &&
                d.from &&
                d.to &&
                dateToCheck.getTime() >= d.from.getTime() &&
                dateToCheck.getTime() <= d.to.getTime())
                return bool;
        }
        return !bool;
    }
    function onKeyDown(e) {
        var isInput = e.target === self._input;
        var calendarElem = isCalendarElem(e.target);
        var allowInput = self.config.allowInput;
        var allowKeydown = self.isOpen && (!allowInput || !isInput);
        var allowInlineKeydown = self.config.inline && isInput && !allowInput;
        if (e.key === "Enter" && isInput) {
            if (allowInput) {
                self.setDate(self._input.value, true, e.target === self.altInput
                    ? self.config.altFormat
                    : self.config.dateFormat);
                return e.target.blur();
            }
            else
                self.open();
        }
        else if (calendarElem || allowKeydown || allowInlineKeydown) {
            var isTimeObj = !!self.timeContainer &&
                self.timeContainer.contains(e.target);
            switch (e.key) {
                case "Enter":
                    if (isTimeObj)
                        updateValue();
                    else
                        selectDate(e);
                    break;
                case "Escape":
                    e.preventDefault();
                    self.close();
                    break;
                case "Backspace":
                case "Delete":
                    if (isInput && !self.config.allowInput)
                        self.clear();
                    break;
                case "ArrowLeft":
                case "ArrowRight":
                    if (!isTimeObj) {
                        e.preventDefault();
                        if (self.daysContainer) {
                            var delta_1 = e.key === "ArrowRight" ? 1 : -1;
                            if (!e.ctrlKey)
                                focusOnDay(e.target.$i, delta_1);
                            else
                                changeMonth(delta_1, true, undefined, true);
                        }
                    }
                    else if (self.hourElement)
                        self.hourElement.focus();
                    break;
                case "ArrowUp":
                case "ArrowDown":
                    e.preventDefault();
                    var delta = e.key === "ArrowDown" ? 1 : -1;
                    if (self.daysContainer && e.target.$i !== undefined) {
                        if (e.ctrlKey) {
                            changeYear(self.currentYear - delta);
                            focusOnDay(e.target.$i, 0);
                        }
                        else if (!isTimeObj)
                            focusOnDay(e.target.$i, delta * 7);
                    }
                    else if (self.config.enableTime) {
                        if (!isTimeObj && self.hourElement)
                            self.hourElement.focus();
                        updateTime(e);
                        self._debouncedChange();
                    }
                    break;
                case "Tab":
                    if (e.target === self.hourElement) {
                        e.preventDefault();
                        self.minuteElement.select();
                    }
                    else if (e.target === self.minuteElement &&
                        (self.secondElement || self.amPM)) {
                        e.preventDefault();
                        if (self.secondElement !== undefined)
                            self.secondElement.focus();
                        else if (self.amPM !== undefined)
                            self.amPM.focus();
                    }
                    else if (e.target === self.secondElement && self.amPM) {
                        e.preventDefault();
                        self.amPM.focus();
                    }
                    break;
                case "a":
                    if (self.amPM !== undefined && e.target === self.amPM) {
                        self.amPM.textContent = "AM";
                        setHoursFromInputs();
                        updateValue();
                    }
                    break;
                case "p":
                    if (self.amPM !== undefined && e.target === self.amPM) {
                        self.amPM.textContent = "PM";
                        setHoursFromInputs();
                        updateValue();
                    }
                    break;
                default:
                    break;
            }
            triggerEvent("onKeyDown", e);
        }
    }
    function onMouseOver(elem) {
        if (self.selectedDates.length !== 1 ||
            !elem.classList.contains("flatpickr-day") ||
            self.minRangeDate === undefined ||
            self.maxRangeDate === undefined)
            return;
        var hoverDate = elem.dateObj, initialDate = self.parseDate(self.selectedDates[0], undefined, true), rangeStartDate = Math.min(hoverDate.getTime(), self.selectedDates[0].getTime()), rangeEndDate = Math.max(hoverDate.getTime(), self.selectedDates[0].getTime()), containsDisabled = false;
        for (var t = rangeStartDate; t < rangeEndDate; t += duration.DAY) {
            if (!isEnabled(new Date(t))) {
                containsDisabled = true;
                break;
            }
        }
        var _loop_1 = function (timestamp, i) {
            var outOfRange = timestamp < self.minRangeDate.getTime() ||
                timestamp > self.maxRangeDate.getTime(), dayElem = self.days.childNodes[i];
            if (outOfRange) {
                dayElem.classList.add("notAllowed");
                ["inRange", "startRange", "endRange"].forEach(function (c) {
                    dayElem.classList.remove(c);
                });
                return "continue";
            }
            else if (containsDisabled && !outOfRange)
                return "continue";
            ["startRange", "inRange", "endRange", "notAllowed"].forEach(function (c) {
                dayElem.classList.remove(c);
            });
            var minRangeDate = Math.max(self.minRangeDate.getTime(), rangeStartDate), maxRangeDate = Math.min(self.maxRangeDate.getTime(), rangeEndDate);
            elem.classList.add(hoverDate < self.selectedDates[0] ? "startRange" : "endRange");
            if (initialDate < hoverDate && timestamp === initialDate.getTime())
                dayElem.classList.add("startRange");
            else if (initialDate > hoverDate && timestamp === initialDate.getTime())
                dayElem.classList.add("endRange");
            if (timestamp >= minRangeDate && timestamp <= maxRangeDate)
                dayElem.classList.add("inRange");
        };
        for (var timestamp = self.days.childNodes[0].dateObj.getTime(), i = 0; i < 42; i++, timestamp += duration.DAY) {
            _loop_1(timestamp, i);
        }
    }
    function onResize() {
        if (self.isOpen && !self.config.static && !self.config.inline)
            positionCalendar();
    }
    function open(e, positionElement) {
        if (positionElement === void 0) { positionElement = self._input; }
        if (self.isMobile) {
            if (e) {
                e.preventDefault();
                e.target && e.target.blur();
            }
            setTimeout(function () {
                self.mobileInput !== undefined && self.mobileInput.click();
            }, 0);
            triggerEvent("onOpen");
            return;
        }
        if (self.isOpen || self._input.disabled || self.config.inline)
            return;
        self.isOpen = true;
        self.calendarContainer.classList.add("open");
        positionCalendar(positionElement);
        self._input.classList.add("active");
        triggerEvent("onOpen");
    }
    function minMaxDateSetter(type) {
        return function (date) {
            var dateObj = (self.config["_" + type + "Date"] = self.parseDate(date));
            var inverseDateObj = self.config["_" + (type === "min" ? "max" : "min") + "Date"];
            if (dateObj !== undefined) {
                self[type === "min" ? "minDateHasTime" : "maxDateHasTime"] =
                    dateObj.getHours() > 0 ||
                        dateObj.getMinutes() > 0 ||
                        dateObj.getSeconds() > 0;
            }
            if (self.selectedDates) {
                self.selectedDates = self.selectedDates.filter(function (d) { return isEnabled(d); });
                if (!self.selectedDates.length && type === "min")
                    setHoursFromDate(dateObj);
                updateValue();
            }
            if (self.daysContainer) {
                redraw();
                if (dateObj !== undefined)
                    self.currentYearElement[type] = dateObj.getFullYear().toString();
                else
                    self.currentYearElement.removeAttribute(type);
                self.currentYearElement.disabled =
                    !!inverseDateObj &&
                        dateObj !== undefined &&
                        inverseDateObj.getFullYear() === dateObj.getFullYear();
            }
        };
    }
    function parseConfig() {
        var boolOpts = [
            "wrap",
            "weekNumbers",
            "allowInput",
            "clickOpens",
            "time_24hr",
            "enableTime",
            "noCalendar",
            "altInput",
            "shorthandCurrentMonth",
            "inline",
            "static",
            "enableSeconds",
            "disableMobile",
        ];
        var hooks = [
            "onChange",
            "onClose",
            "onDayCreate",
            "onDestroy",
            "onKeyDown",
            "onMonthChange",
            "onOpen",
            "onParseConfig",
            "onReady",
            "onValueUpdate",
            "onYearChange",
        ];
        self.config = __assign({}, flatpickr.defaultConfig);
        var userConfig = __assign({}, instanceConfig, JSON.parse(JSON.stringify(element.dataset || {})));
        var formats$$1 = {};
        Object.defineProperty(self.config, "enable", {
            get: function () { return self.config._enable || []; },
            set: function (dates) {
                self.config._enable = parseDateRules(dates);
            },
        });
        Object.defineProperty(self.config, "disable", {
            get: function () { return self.config._disable || []; },
            set: function (dates) {
                self.config._disable = parseDateRules(dates);
            },
        });
        if (!userConfig.dateFormat && userConfig.enableTime) {
            formats$$1.dateFormat = userConfig.noCalendar
                ? "H:i" + (userConfig.enableSeconds ? ":S" : "")
                : flatpickr.defaultConfig.dateFormat +
                    " H:i" +
                    (userConfig.enableSeconds ? ":S" : "");
        }
        if (userConfig.altInput && userConfig.enableTime && !userConfig.altFormat) {
            formats$$1.altFormat = userConfig.noCalendar
                ? "h:i" + (userConfig.enableSeconds ? ":S K" : " K")
                : flatpickr.defaultConfig.altFormat +
                    (" h:i" + (userConfig.enableSeconds ? ":S" : "") + " K");
        }
        Object.defineProperty(self.config, "minDate", {
            get: function () { return self.config._minDate; },
            set: minMaxDateSetter("min"),
        });
        Object.defineProperty(self.config, "maxDate", {
            get: function () { return self.config._maxDate; },
            set: minMaxDateSetter("max"),
        });
        Object.assign(self.config, formats$$1, userConfig);
        for (var i = 0; i < boolOpts.length; i++)
            self.config[boolOpts[i]] =
                self.config[boolOpts[i]] === true ||
                    self.config[boolOpts[i]] === "true";
        for (var i = hooks.length; i--;) {
            if (self.config[hooks[i]] !== undefined) {
                self.config[hooks[i]] = arrayify(self.config[hooks[i]] || []).map(bindToInstance);
            }
        }
        for (var i = 0; i < self.config.plugins.length; i++) {
            var pluginConf = self.config.plugins[i](self) || {};
            for (var key in pluginConf) {
                if (~hooks.indexOf(key)) {
                    self.config[key] = arrayify(pluginConf[key])
                        .map(bindToInstance)
                        .concat(self.config[key]);
                }
                else if (typeof userConfig[key] === "undefined")
                    self.config[key] = pluginConf[key];
            }
        }
        self.isMobile =
            !self.config.disableMobile &&
                !self.config.inline &&
                self.config.mode === "single" &&
                !self.config.disable.length &&
                !self.config.enable.length &&
                !self.config.weekNumbers &&
                /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        triggerEvent("onParseConfig");
    }
    function setupLocale() {
        if (typeof self.config.locale !== "object" &&
            typeof flatpickr.l10ns[self.config.locale] === "undefined")
            console.warn("flatpickr: invalid locale " + self.config.locale);
        self.l10n = __assign({}, flatpickr.l10ns.default, typeof self.config.locale === "object"
            ? self.config.locale
            : self.config.locale !== "default"
                ? flatpickr.l10ns[self.config.locale]
                : undefined);
    }
    function positionCalendar(positionElement) {
        if (positionElement === void 0) { positionElement = self._positionElement; }
        if (self.calendarContainer === undefined)
            return;
        var calendarHeight = self.calendarContainer.offsetHeight, calendarWidth = self.calendarContainer.offsetWidth, configPos = self.config.position, inputBounds = positionElement.getBoundingClientRect(), distanceFromBottom = window.innerHeight - inputBounds.bottom, showOnTop = configPos === "above" ||
            (configPos !== "below" &&
                distanceFromBottom < calendarHeight &&
                inputBounds.top > calendarHeight);
        var top = window.pageYOffset +
            inputBounds.top +
            (!showOnTop ? positionElement.offsetHeight + 2 : -calendarHeight - 2);
        toggleClass(self.calendarContainer, "arrowTop", !showOnTop);
        toggleClass(self.calendarContainer, "arrowBottom", showOnTop);
        if (self.config.inline)
            return;
        var left = window.pageXOffset + inputBounds.left;
        var right = window.document.body.offsetWidth - inputBounds.right;
        var rightMost = left + calendarWidth > window.document.body.offsetWidth;
        toggleClass(self.calendarContainer, "rightMost", rightMost);
        if (self.config.static)
            return;
        self.calendarContainer.style.top = top + "px";
        if (!rightMost) {
            self.calendarContainer.style.left = left + "px";
            self.calendarContainer.style.right = "auto";
        }
        else {
            self.calendarContainer.style.left = "auto";
            self.calendarContainer.style.right = right + "px";
        }
    }
    function redraw() {
        if (self.config.noCalendar || self.isMobile)
            return;
        buildWeekdays();
        updateNavigationCurrentMonth();
        buildDays();
    }
    function selectDate(e) {
        e.preventDefault();
        e.stopPropagation();
        var isSelectable = function (day) {
            return day.classList &&
                day.classList.contains("flatpickr-day") &&
                !day.classList.contains("disabled") &&
                !day.classList.contains("notAllowed");
        };
        var t = findParent(e.target, isSelectable);
        if (t === undefined)
            return;
        var target = t;
        var selectedDate = (self.latestSelectedDateObj = new Date(target.dateObj.getTime()));
        var shouldChangeMonth = selectedDate.getMonth() !== self.currentMonth &&
            self.config.mode !== "range";
        self.selectedDateElem = target;
        if (self.config.mode === "single")
            self.selectedDates = [selectedDate];
        else if (self.config.mode === "multiple") {
            var selectedIndex = isDateSelected(selectedDate);
            if (selectedIndex)
                self.selectedDates.splice(parseInt(selectedIndex), 1);
            else
                self.selectedDates.push(selectedDate);
        }
        else if (self.config.mode === "range") {
            if (self.selectedDates.length === 2)
                self.clear();
            self.selectedDates.push(selectedDate);
            if (compareDates(selectedDate, self.selectedDates[0], true) !== 0)
                self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
        }
        setHoursFromInputs();
        if (shouldChangeMonth) {
            var isNewYear = self.currentYear !== selectedDate.getFullYear();
            self.currentYear = selectedDate.getFullYear();
            self.currentMonth = selectedDate.getMonth();
            if (isNewYear)
                triggerEvent("onYearChange");
            triggerEvent("onMonthChange");
        }
        buildDays();
        if (self.config.minDate &&
            self.minDateHasTime &&
            self.config.enableTime &&
            compareDates(selectedDate, self.config.minDate) === 0)
            setHoursFromDate(self.config.minDate);
        updateValue();
        if (self.config.enableTime)
            setTimeout(function () { return (self.showTimeInput = true); }, 50);
        if (self.config.mode === "range") {
            if (self.selectedDates.length === 1) {
                onMouseOver(target);
                self._hidePrevMonthArrow =
                    self._hidePrevMonthArrow ||
                        (self.minRangeDate !== undefined &&
                            self.minRangeDate >
                                self.days.childNodes[0].dateObj);
                self._hideNextMonthArrow =
                    self._hideNextMonthArrow ||
                        (self.maxRangeDate !== undefined &&
                            self.maxRangeDate <
                                new Date(self.currentYear, self.currentMonth + 1, 1));
            }
            else
                updateNavigationCurrentMonth();
        }
        triggerEvent("onChange");
        if (!shouldChangeMonth)
            focusOnDay(target.$i, 0);
        else
            afterDayAnim(function () { return self.selectedDateElem && self.selectedDateElem.focus(); });
        if (self.hourElement !== undefined)
            setTimeout(function () { return self.hourElement !== undefined && self.hourElement.select(); }, 451);
        if (self.config.closeOnSelect) {
            var single = self.config.mode === "single" && !self.config.enableTime;
            var range = self.config.mode === "range" &&
                self.selectedDates.length === 2 &&
                !self.config.enableTime;
            if (single || range)
                self.close();
        }
    }
    function set(option, value) {
        if (option !== null && typeof option === "object")
            Object.assign(self.config, option);
        else
            self.config[option] = value;
        self.redraw();
        jumpToDate();
    }
    function setSelectedDate(inputDate, format) {
        var dates = [];
        if (inputDate instanceof Array)
            dates = inputDate.map(function (d) { return self.parseDate(d, format); });
        else if (inputDate instanceof Date || typeof inputDate === "number")
            dates = [self.parseDate(inputDate, format)];
        else if (typeof inputDate === "string") {
            switch (self.config.mode) {
                case "single":
                    dates = [self.parseDate(inputDate, format)];
                    break;
                case "multiple":
                    dates = inputDate
                        .split("; ")
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                case "range":
                    dates = inputDate
                        .split(self.l10n.rangeSeparator)
                        .map(function (date) { return self.parseDate(date, format); });
                    break;
                default:
                    break;
            }
        }
        self.selectedDates = dates.filter(function (d) { return d instanceof Date && isEnabled(d, false); });
        self.selectedDates.sort(function (a, b) { return a.getTime() - b.getTime(); });
    }
    function setDate(date, triggerChange, format) {
        if (triggerChange === void 0) { triggerChange = false; }
        if (format === void 0) { format = undefined; }
        if (date !== 0 && !date)
            return self.clear(triggerChange);
        setSelectedDate(date, format);
        self.showTimeInput = self.selectedDates.length > 0;
        self.latestSelectedDateObj = self.selectedDates[0];
        self.redraw();
        jumpToDate();
        setHoursFromDate();
        updateValue(triggerChange);
        if (triggerChange)
            triggerEvent("onChange");
    }
    function parseDateRules(arr) {
        return arr
            .map(function (rule) {
            if (typeof rule === "string" ||
                typeof rule === "number" ||
                rule instanceof Date) {
                return self.parseDate(rule, undefined, true);
            }
            else if (rule &&
                typeof rule === "object" &&
                rule.from &&
                rule.to)
                return {
                    from: self.parseDate(rule.from, undefined),
                    to: self.parseDate(rule.to, undefined),
                };
            return rule;
        })
            .filter(function (x) { return x; });
    }
    function setupDates() {
        self.selectedDates = [];
        self.now = new Date();
        var preloadedDate = self.config.defaultDate || self.input.value;
        if (preloadedDate)
            setSelectedDate(preloadedDate, self.config.dateFormat);
        var initialDate = self.selectedDates.length
            ? self.selectedDates[0]
            : self.config.minDate &&
                self.config.minDate.getTime() > self.now.getTime()
                ? self.config.minDate
                : self.config.maxDate &&
                    self.config.maxDate.getTime() < self.now.getTime()
                    ? self.config.maxDate
                    : self.now;
        self.currentYear = initialDate.getFullYear();
        self.currentMonth = initialDate.getMonth();
        if (self.selectedDates.length)
            self.latestSelectedDateObj = self.selectedDates[0];
        self.minDateHasTime =
            !!self.config.minDate &&
                (self.config.minDate.getHours() > 0 ||
                    self.config.minDate.getMinutes() > 0 ||
                    self.config.minDate.getSeconds() > 0);
        self.maxDateHasTime =
            !!self.config.maxDate &&
                (self.config.maxDate.getHours() > 0 ||
                    self.config.maxDate.getMinutes() > 0 ||
                    self.config.maxDate.getSeconds() > 0);
        Object.defineProperty(self, "showTimeInput", {
            get: function () { return self._showTimeInput; },
            set: function (bool) {
                self._showTimeInput = bool;
                if (self.calendarContainer)
                    toggleClass(self.calendarContainer, "showTimeInput", bool);
                positionCalendar();
            },
        });
    }
    function formatDate(dateObj, frmt) {
        if (self.config !== undefined && self.config.formatDate !== undefined)
            return self.config.formatDate(dateObj, frmt);
        return frmt
            .split("")
            .map(function (c, i, arr) {
            return formats[c] && arr[i - 1] !== "\\"
                ? formats[c](dateObj, self.l10n, self.config)
                : c !== "\\" ? c : "";
        })
            .join("");
    }
    function parseDate(date, givenFormat, timeless) {
        if (date !== 0 && !date)
            return undefined;
        var parsedDate;
        var date_orig = date;
        if (date instanceof Date)
            parsedDate = new Date(date.getTime());
        else if (typeof date !== "string" &&
            date.toFixed !== undefined)
            parsedDate = new Date(date);
        else if (typeof date === "string") {
            var format = givenFormat || (self.config || flatpickr.defaultConfig).dateFormat;
            var datestr = String(date).trim();
            if (datestr === "today") {
                parsedDate = new Date();
                timeless = true;
            }
            else if (/Z$/.test(datestr) ||
                /GMT$/.test(datestr))
                parsedDate = new Date(date);
            else if (self.config && self.config.parseDate)
                parsedDate = self.config.parseDate(date, format);
            else {
                parsedDate =
                    !self.config || !self.config.noCalendar
                        ? new Date(new Date().getFullYear(), 0, 1, 0, 0, 0, 0)
                        : new Date(new Date().setHours(0, 0, 0, 0));
                var matched = void 0, ops = [];
                for (var i = 0, matchIndex = 0, regexStr = ""; i < format.length; i++) {
                    var token = format[i];
                    var isBackSlash = token === "\\";
                    var escaped = format[i - 1] === "\\" || isBackSlash;
                    if (tokenRegex[token] && !escaped) {
                        regexStr += tokenRegex[token];
                        var match = new RegExp(regexStr).exec(date);
                        if (match && (matched = true)) {
                            ops[token !== "Y" ? "push" : "unshift"]({
                                fn: revFormat[token],
                                val: match[++matchIndex],
                            });
                        }
                    }
                    else if (!isBackSlash)
                        regexStr += ".";
                    ops.forEach(function (_a) {
                        var fn = _a.fn, val = _a.val;
                        return (parsedDate =
                            fn(parsedDate, val, self.l10n) || parsedDate);
                    });
                }
                parsedDate = matched ? parsedDate : undefined;
            }
        }
        if (!(parsedDate instanceof Date)) {
            console.warn("flatpickr: invalid date " + date_orig);
            console.info(self.element);
            return undefined;
        }
        if (timeless === true)
            parsedDate.setHours(0, 0, 0, 0);
        return parsedDate;
    }
    function setupInputs() {
        self.input = self.config.wrap
            ? element.querySelector("[data-input]")
            : element;
        if (!self.input) {
            console.warn("Error: invalid input element specified", self.input);
            return;
        }
        self.input._type = self.input.type;
        self.input.type = "text";
        self.input.classList.add("flatpickr-input");
        self._input = self.input;
        if (self.config.altInput) {
            self.altInput = createElement(self.input.nodeName, self.input.className + " " + self.config.altInputClass);
            self._input = self.altInput;
            self.altInput.placeholder = self.input.placeholder;
            self.altInput.disabled = self.input.disabled;
            self.altInput.required = self.input.required;
            self.altInput.type = "text";
            self.input.type = "hidden";
            if (!self.config.static && self.input.parentNode)
                self.input.parentNode.insertBefore(self.altInput, self.input.nextSibling);
        }
        if (!self.config.allowInput)
            self._input.setAttribute("readonly", "readonly");
        self._positionElement = self.config.positionElement || self._input;
    }
    function setupMobile() {
        var inputType = self.config.enableTime
            ? self.config.noCalendar ? "time" : "datetime-local"
            : "date";
        self.mobileInput = createElement("input", self.input.className + " flatpickr-mobile");
        self.mobileInput.step = self.input.getAttribute("step") || "any";
        self.mobileInput.tabIndex = 1;
        self.mobileInput.type = inputType;
        self.mobileInput.disabled = self.input.disabled;
        self.mobileInput.placeholder = self.input.placeholder;
        self.mobileFormatStr =
            inputType === "datetime-local"
                ? "Y-m-d\\TH:i:S"
                : inputType === "date" ? "Y-m-d" : "H:i:S";
        if (self.selectedDates.length) {
            self.mobileInput.defaultValue = self.mobileInput.value = self.formatDate(self.selectedDates[0], self.mobileFormatStr);
        }
        if (self.config.minDate)
            self.mobileInput.min = self.formatDate(self.config.minDate, "Y-m-d");
        if (self.config.maxDate)
            self.mobileInput.max = self.formatDate(self.config.maxDate, "Y-m-d");
        self.input.type = "hidden";
        if (self.altInput !== undefined)
            self.altInput.type = "hidden";
        try {
            if (self.input.parentNode)
                self.input.parentNode.insertBefore(self.mobileInput, self.input.nextSibling);
        }
        catch (_a) { }
        self.mobileInput.addEventListener("change", function (e) {
            self.setDate(e.target.value, false, self.mobileFormatStr);
            triggerEvent("onChange");
            triggerEvent("onClose");
        });
    }
    function toggle() {
        if (self.isOpen)
            return self.close();
        self.open();
    }
    function triggerEvent(event, data) {
        var hooks = self.config[event];
        if (hooks !== undefined && hooks.length > 0) {
            for (var i = 0; hooks[i] && i < hooks.length; i++)
                hooks[i](self.selectedDates, self.input.value, self, data);
        }
        if (event === "onChange") {
            self.input.dispatchEvent(createEvent("change"));
            self.input.dispatchEvent(createEvent("input"));
        }
    }
    function createEvent(name) {
        var e = document.createEvent("Event");
        e.initEvent(name, true, true);
        return e;
    }
    function isDateSelected(date) {
        for (var i = 0; i < self.selectedDates.length; i++) {
            if (compareDates(self.selectedDates[i], date) === 0)
                return "" + i;
        }
        return false;
    }
    function isDateInRange(date) {
        if (self.config.mode !== "range" || self.selectedDates.length < 2)
            return false;
        return (compareDates(date, self.selectedDates[0]) >= 0 &&
            compareDates(date, self.selectedDates[1]) <= 0);
    }
    function updateNavigationCurrentMonth() {
        if (self.config.noCalendar || self.isMobile || !self.monthNav)
            return;
        self.currentMonthElement.textContent =
            monthToStr(self.currentMonth, self.config.shorthandCurrentMonth, self.l10n) + " ";
        self.currentYearElement.value = self.currentYear.toString();
        self._hidePrevMonthArrow =
            self.config.minDate !== undefined &&
                (self.currentYear === self.config.minDate.getFullYear()
                    ? self.currentMonth <= self.config.minDate.getMonth()
                    : self.currentYear < self.config.minDate.getFullYear());
        self._hideNextMonthArrow =
            self.config.maxDate !== undefined &&
                (self.currentYear === self.config.maxDate.getFullYear()
                    ? self.currentMonth + 1 > self.config.maxDate.getMonth()
                    : self.currentYear > self.config.maxDate.getFullYear());
    }
    function updateValue(triggerChange) {
        if (triggerChange === void 0) { triggerChange = true; }
        if (!self.selectedDates.length)
            return self.clear(triggerChange);
        if (self.mobileInput !== undefined && self.mobileFormatStr) {
            self.mobileInput.value =
                self.latestSelectedDateObj !== undefined
                    ? self.formatDate(self.latestSelectedDateObj, self.mobileFormatStr)
                    : "";
        }
        var joinChar = self.config.mode !== "range"
            ? self.config.conjunction
            : self.l10n.rangeSeparator;
        self.input.value = self.selectedDates
            .map(function (dObj) { return self.formatDate(dObj, self.config.dateFormat); })
            .join(joinChar);
        if (self.altInput !== undefined) {
            self.altInput.value = self.selectedDates
                .map(function (dObj) { return self.formatDate(dObj, self.config.altFormat); })
                .join(joinChar);
        }
        if (triggerChange !== false)
            triggerEvent("onValueUpdate");
    }
    function onMonthNavScroll(e) {
        e.preventDefault();
        var isYear = self.currentYearElement.parentNode &&
            self.currentYearElement.parentNode.contains(e.target);
        if (e.target === self.currentMonthElement || isYear) {
            var delta = mouseDelta(e);
            if (isYear) {
                changeYear(self.currentYear + delta);
                e.target.value = self.currentYear.toString();
            }
            else
                self.changeMonth(delta, true, false);
        }
    }
    function onMonthNavClick(e) {
        var isPrevMonth = self.prevMonthNav.contains(e.target);
        var isNextMonth = self.nextMonthNav.contains(e.target);
        if (isPrevMonth || isNextMonth)
            changeMonth(isPrevMonth ? -1 : 1);
        else if (e.target === self.currentYearElement) {
            e.preventDefault();
            self.currentYearElement.select();
        }
        else if (e.target.className === "arrowUp")
            self.changeYear(self.currentYear + 1);
        else if (e.target.className === "arrowDown")
            self.changeYear(self.currentYear - 1);
    }
    function timeWrapper(e) {
        e.preventDefault();
        var isKeyDown = e.type === "keydown", input = e.target;
        if (self.amPM !== undefined && e.target === self.amPM)
            self.amPM.textContent =
                self.l10n.amPM[self.amPM.textContent === "AM" ? 1 : 0];
        var min = Number(input.min), max = Number(input.max), step = Number(input.step), curValue = parseInt(input.value, 10), delta = e.delta ||
            (isKeyDown
                ? e.which === 38 ? 1 : -1
                : Math.max(-1, Math.min(1, e.wheelDelta || -e.deltaY)) || 0);
        var newValue = curValue + step * delta;
        if (typeof input.value !== "undefined" && input.value.length === 2) {
            var isHourElem = input === self.hourElement, isMinuteElem = input === self.minuteElement;
            if (newValue < min) {
                newValue =
                    max +
                        newValue +
                        int(!isHourElem) +
                        (int(isHourElem) && int(!self.amPM));
                if (isMinuteElem)
                    incrementNumInput(undefined, -1, self.hourElement);
            }
            else if (newValue > max) {
                newValue =
                    input === self.hourElement ? newValue - max - int(!self.amPM) : min;
                if (isMinuteElem)
                    incrementNumInput(undefined, 1, self.hourElement);
            }
            if (self.amPM &&
                isHourElem &&
                (step === 1
                    ? newValue + curValue === 23
                    : Math.abs(newValue - curValue) > step))
                self.amPM.textContent = self.amPM.textContent === "PM" ? "AM" : "PM";
            input.value = pad(newValue);
        }
    }
    init();
    return self;
}
function _flatpickr(nodeList, config) {
    var nodes = Array.prototype.slice.call(nodeList);
    var instances = [];
    for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        try {
            if (node.getAttribute("data-fp-omit") !== null)
                continue;
            if (node._flatpickr !== undefined) {
                node._flatpickr.destroy();
                node._flatpickr = undefined;
            }
            node._flatpickr = FlatpickrInstance(node, config || {});
            instances.push(node._flatpickr);
        }
        catch (e) {
            console.warn(e, e.stack);
        }
    }
    return instances.length === 1 ? instances[0] : instances;
}
if (typeof HTMLElement !== "undefined") {
    HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
    HTMLElement.prototype.flatpickr = function (config) {
        return _flatpickr([this], config);
    };
}
var flatpickr;
flatpickr = function (selector, config) {
    if (selector instanceof NodeList)
        return _flatpickr(selector, config);
    else if (typeof selector === "string")
        return _flatpickr(window.document.querySelectorAll(selector), config);
    return _flatpickr([selector], config);
};
window.flatpickr = flatpickr;
flatpickr.defaultConfig = defaults;
flatpickr.l10ns = {
    en: __assign({}, english),
    default: __assign({}, english),
};
flatpickr.localize = function (l10n) {
    flatpickr.l10ns.default = __assign({}, flatpickr.l10ns.default, l10n);
};
flatpickr.setDefaults = function (config) {
    flatpickr.defaultConfig = __assign({}, flatpickr.defaultConfig, config);
};
if (typeof jQuery !== "undefined") {
    jQuery.fn.flatpickr = function (config) {
        return _flatpickr(this, config);
    };
}
Date.prototype.fp_incr = function (days) {
    return new Date(this.getFullYear(), this.getMonth(), this.getDate() + (typeof days === "string" ? parseInt(days, 10) : days));
};
var flatpickr$1 = flatpickr;

return flatpickr$1;

})));


/***/ }),

/***/ 1120:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "flatpickr" }, [
    _c("div", { staticClass: "control has-icons-right" }, [
      _c("input", {
        staticClass: "input control",
        attrs: {
          type: "text",
          placeholder: _vm.placeholder,
          id: "date-input-" + _vm._uid,
          name: _vm.name,
          disabled: _vm.disabled
        },
        domProps: { value: _vm.value }
      }),
      _vm._v(" "),
      _c("span", { staticClass: "icon is-small is-right" }, [
        _vm.timeOnly
          ? _c("i", { staticClass: "fas fa-clock" })
          : _c("i", { staticClass: "fas fa-calendar-alt" })
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4d443fe2", module.exports)
  }
}

/***/ }),

/***/ 1121:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1122)
/* template */
var __vue_template__ = __webpack_require__(1128)
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
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueFormInput.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fdcc7fda", Component.options)
  } else {
    hotAPI.reload("data-v-fdcc7fda", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueSwitch_vue__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VueSwitch_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VueSwitch_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { VueSwitch: __WEBPACK_IMPORTED_MODULE_0__VueSwitch_vue___default.a },

    props: {
        field: {
            type: Object,
            required: true
        },
        hasError: {
            type: Boolean,
            default: false
        }
    }
});

/***/ }),

/***/ 1123:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1124)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1126)
/* template */
var __vue_template__ = __webpack_require__(1127)
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
Component.options.__file = "resources/assets/js/components/enso/vueforms/VueSwitch.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7defd652", Component.options)
  } else {
    hotAPI.reload("data-v-7defd652", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1124:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1125);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("43e441d2", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7defd652\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueSwitch.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7defd652\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/sass-loader/lib/loader.js!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./VueSwitch.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1125:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.field .vue-switch {\n  margin-top: 6px;\n  margin-bottom: 6px;\n}\n.vue-switch {\n  --height: 1rem;\n  position: relative;\n  border-radius: var(--height);\n  width: calc(1.625 * var(--height));\n  height: var(--height);\n  background-color: #dbdbdb;\n  border: 1px solid #dbdbdb;\n  cursor: pointer;\n  display: -webkit-inline-box;\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n  vertical-align: middle;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n}\n.vue-switch input {\n    opacity: 0;\n    display: -webkit-inline-box;\n    display: -ms-inline-flexbox;\n    display: inline-flex;\n    width: 100%;\n    height: 100%;\n}\n.vue-switch:before, .vue-switch:after {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: calc(var(--height) - 2px);\n    border-radius: var(--height);\n    -webkit-transition: 0.25s;\n    transition: 0.25s;\n}\n.vue-switch:before {\n    width: calc(1.625 * var(--height) - 2px);\n    background-color: #dbdbdb;\n}\n.vue-switch:after {\n    width: calc(var(--height) - 2px);\n    background-color: #fff;\n    -webkit-box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);\n            box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1);\n}\n.vue-switch.checked {\n    border-color: #4a4a4a;\n    background-color: #4a4a4a;\n}\n.vue-switch.checked:before {\n      -webkit-transform: scale(0);\n              transform: scale(0);\n}\n.vue-switch.checked:after {\n      -webkit-transform: translateX(calc(0.625 * var(--height)));\n              transform: translateX(calc(0.625 * var(--height)));\n}\n.vue-switch.is-white.checked {\n    border-color: white;\n    background-color: white;\n}\n.vue-switch.is-white.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed;\n}\n.vue-switch.is-black.checked {\n    border-color: #0a0a0a;\n    background-color: #0a0a0a;\n}\n.vue-switch.is-black.checked.disabled {\n      border-color: #4a4a4a;\n      background-color: #4a4a4a;\n      cursor: not-allowed;\n}\n.vue-switch.is-light.checked {\n    border-color: whitesmoke;\n    background-color: whitesmoke;\n}\n.vue-switch.is-light.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed;\n}\n.vue-switch.is-dark.checked {\n    border-color: #363636;\n    background-color: #363636;\n}\n.vue-switch.is-dark.checked.disabled {\n      border-color: #757575;\n      background-color: #757575;\n      cursor: not-allowed;\n}\n.vue-switch.is-primary.checked {\n    border-color: #00d1b2;\n    background-color: #00d1b2;\n}\n.vue-switch.is-primary.checked.disabled {\n      border-color: #52ffe5;\n      background-color: #52ffe5;\n      cursor: not-allowed;\n}\n.vue-switch.is-link.checked {\n    border-color: #3273dc;\n    background-color: #3273dc;\n}\n.vue-switch.is-link.checked.disabled {\n      border-color: #9fbeef;\n      background-color: #9fbeef;\n      cursor: not-allowed;\n}\n.vue-switch.is-info.checked {\n    border-color: #209cee;\n    background-color: #209cee;\n}\n.vue-switch.is-info.checked.disabled {\n      border-color: #97d1f7;\n      background-color: #97d1f7;\n      cursor: not-allowed;\n}\n.vue-switch.is-success.checked {\n    border-color: #23d160;\n    background-color: #23d160;\n}\n.vue-switch.is-success.checked.disabled {\n      border-color: #89ebab;\n      background-color: #89ebab;\n      cursor: not-allowed;\n}\n.vue-switch.is-warning.checked {\n    border-color: #ffdd57;\n    background-color: #ffdd57;\n}\n.vue-switch.is-warning.checked.disabled {\n      border-color: #fff7d6;\n      background-color: #fff7d6;\n      cursor: not-allowed;\n}\n.vue-switch.is-danger.checked {\n    border-color: #ff3860;\n    background-color: #ff3860;\n}\n.vue-switch.is-danger.checked.disabled {\n      border-color: #ffb8c6;\n      background-color: #ffb8c6;\n      cursor: not-allowed;\n}\n.vue-switch.is-small {\n    --height: 0.75rem;\n}\n.vue-switch.is-medium {\n    --height: 1.25rem;\n}\n.vue-switch.is-large {\n    --height: 1.5rem;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/VueSwitch.vue"],"names":[],"mappings":";AAAA;EACE,gBAAgB;EAChB,mBAAmB;CAAE;AAEvB;EACE,eAAe;EACf,mBAAmB;EACnB,6BAA6B;EAC7B,mCAAmC;EACnC,sBAAsB;EACtB,0BAA0B;EAC1B,0BAA0B;EAC1B,gBAAgB;EAChB,4BAAqB;EAArB,4BAAqB;EAArB,qBAAqB;EACrB,uBAAuB;EACvB,0BAAoB;MAApB,uBAAoB;UAApB,oBAAoB;EACpB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;CAAE;AAC1B;IACE,WAAW;IACX,4BAAqB;IAArB,4BAAqB;IAArB,qBAAqB;IACrB,YAAY;IACZ,aAAa;CAAE;AACjB;IACE,aAAa;IACb,mBAAmB;IACnB,OAAO;IACP,QAAQ;IACR,kCAAkC;IAClC,6BAA6B;IAC7B,0BAAkB;IAAlB,kBAAkB;CAAE;AACtB;IACE,yCAAyC;IACzC,0BAA0B;CAAE;AAC9B;IACE,iCAAiC;IACjC,uBAAuB;IACvB,oDAA4C;YAA5C,4CAA4C;CAAE;AAChD;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,4BAAoB;cAApB,oBAAoB;CAAE;AACxB;MACE,2DAAmD;cAAnD,mDAAmD;CAAE;AACzD;IACE,oBAAoB;IACpB,wBAAwB;CAAE;AAC1B;MACE,oBAAoB;MACpB,wBAAwB;MACxB,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,yBAAyB;IACzB,6BAA6B;CAAE;AAC/B;MACE,oBAAoB;MACpB,wBAAwB;MACxB,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,sBAAsB;IACtB,0BAA0B;CAAE;AAC5B;MACE,sBAAsB;MACtB,0BAA0B;MAC1B,oBAAoB;CAAE;AAC1B;IACE,kBAAkB;CAAE;AACtB;IACE,kBAAkB;CAAE;AACtB;IACE,iBAAiB;CAAE","file":"VueSwitch.vue","sourcesContent":[".field .vue-switch {\n  margin-top: 6px;\n  margin-bottom: 6px; }\n\n.vue-switch {\n  --height: 1rem;\n  position: relative;\n  border-radius: var(--height);\n  width: calc(1.625 * var(--height));\n  height: var(--height);\n  background-color: #dbdbdb;\n  border: 1px solid #dbdbdb;\n  cursor: pointer;\n  display: inline-flex;\n  vertical-align: middle;\n  align-items: center;\n  justify-content: center; }\n  .vue-switch input {\n    opacity: 0;\n    display: inline-flex;\n    width: 100%;\n    height: 100%; }\n  .vue-switch:before, .vue-switch:after {\n    content: ' ';\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: calc(var(--height) - 2px);\n    border-radius: var(--height);\n    transition: 0.25s; }\n  .vue-switch:before {\n    width: calc(1.625 * var(--height) - 2px);\n    background-color: #dbdbdb; }\n  .vue-switch:after {\n    width: calc(var(--height) - 2px);\n    background-color: #fff;\n    box-shadow: 0 2px 3px rgba(17, 17, 17, 0.1); }\n  .vue-switch.checked {\n    border-color: #4a4a4a;\n    background-color: #4a4a4a; }\n    .vue-switch.checked:before {\n      transform: scale(0); }\n    .vue-switch.checked:after {\n      transform: translateX(calc(0.625 * var(--height))); }\n  .vue-switch.is-white.checked {\n    border-color: white;\n    background-color: white; }\n    .vue-switch.is-white.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed; }\n  .vue-switch.is-black.checked {\n    border-color: #0a0a0a;\n    background-color: #0a0a0a; }\n    .vue-switch.is-black.checked.disabled {\n      border-color: #4a4a4a;\n      background-color: #4a4a4a;\n      cursor: not-allowed; }\n  .vue-switch.is-light.checked {\n    border-color: whitesmoke;\n    background-color: whitesmoke; }\n    .vue-switch.is-light.checked.disabled {\n      border-color: white;\n      background-color: white;\n      cursor: not-allowed; }\n  .vue-switch.is-dark.checked {\n    border-color: #363636;\n    background-color: #363636; }\n    .vue-switch.is-dark.checked.disabled {\n      border-color: #757575;\n      background-color: #757575;\n      cursor: not-allowed; }\n  .vue-switch.is-primary.checked {\n    border-color: #00d1b2;\n    background-color: #00d1b2; }\n    .vue-switch.is-primary.checked.disabled {\n      border-color: #52ffe5;\n      background-color: #52ffe5;\n      cursor: not-allowed; }\n  .vue-switch.is-link.checked {\n    border-color: #3273dc;\n    background-color: #3273dc; }\n    .vue-switch.is-link.checked.disabled {\n      border-color: #9fbeef;\n      background-color: #9fbeef;\n      cursor: not-allowed; }\n  .vue-switch.is-info.checked {\n    border-color: #209cee;\n    background-color: #209cee; }\n    .vue-switch.is-info.checked.disabled {\n      border-color: #97d1f7;\n      background-color: #97d1f7;\n      cursor: not-allowed; }\n  .vue-switch.is-success.checked {\n    border-color: #23d160;\n    background-color: #23d160; }\n    .vue-switch.is-success.checked.disabled {\n      border-color: #89ebab;\n      background-color: #89ebab;\n      cursor: not-allowed; }\n  .vue-switch.is-warning.checked {\n    border-color: #ffdd57;\n    background-color: #ffdd57; }\n    .vue-switch.is-warning.checked.disabled {\n      border-color: #fff7d6;\n      background-color: #fff7d6;\n      cursor: not-allowed; }\n  .vue-switch.is-danger.checked {\n    border-color: #ff3860;\n    background-color: #ff3860; }\n    .vue-switch.is-danger.checked.disabled {\n      border-color: #ffb8c6;\n      background-color: #ffb8c6;\n      cursor: not-allowed; }\n  .vue-switch.is-small {\n    --height: 0.75rem; }\n  .vue-switch.is-medium {\n    --height: 1.25rem; }\n  .vue-switch.is-large {\n    --height: 1.5rem; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1126:
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
//
//
//
//
//


var sizes = ['is-small', 'is-medium', 'is-large'];
var types = ['is-primary', 'is-warning', 'is-danger', 'is-success', 'is-info'];

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VueSwitch',

    props: {
        disabled: {
            type: Boolean,
            default: false
        },
        required: {
            type: Boolean,
            default: false
        },
        type: {
            type: String,
            default: null,
            validator: function validator(value) {
                return types.includes(value);
            }
        },
        size: {
            type: String,
            default: null,
            validator: function validator(value) {
                return sizes.includes(value);
            }
        },
        value: {
            type: Boolean,
            required: true
        }
    },

    watch: {
        value: function value(_value) {
            this.checked = _value;
        }
    },

    data: function data() {
        return {
            checked: this.value
        };
    }
});

/***/ }),

/***/ 1127:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "label",
    {
      staticClass: "vue-switch",
      class: [
        _vm.size,
        _vm.type,
        { checked: _vm.value, disabled: _vm.disabled }
      ]
    },
    [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.checked,
            expression: "checked"
          }
        ],
        staticClass: "checkbox",
        attrs: {
          type: "checkbox",
          disabled: _vm.disabled,
          required: _vm.required
        },
        domProps: {
          checked: _vm.value,
          checked: Array.isArray(_vm.checked)
            ? _vm._i(_vm.checked, null) > -1
            : _vm.checked
        },
        on: {
          change: [
            function($event) {
              var $$a = _vm.checked,
                $$el = $event.target,
                $$c = $$el.checked ? true : false
              if (Array.isArray($$a)) {
                var $$v = null,
                  $$i = _vm._i($$a, $$v)
                if ($$el.checked) {
                  $$i < 0 && (_vm.checked = $$a.concat([$$v]))
                } else {
                  $$i > -1 &&
                    (_vm.checked = $$a.slice(0, $$i).concat($$a.slice($$i + 1)))
                }
              } else {
                _vm.checked = $$c
              }
            },
            function($event) {
              _vm.$emit("input", _vm.checked)
            }
          ]
        }
      })
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-7defd652", module.exports)
  }
}

/***/ }),

/***/ 1128:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("span", [
    _vm.field.meta.content === "text"
      ? _c(
          "div",
          {
            staticClass: "control",
            class: { "has-icons-right": _vm.hasError }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "input",
              class: { "is-danger": _vm.hasError },
              attrs: {
                readonly: _vm.field.meta.readonly,
                type: "text",
                disabled: _vm.field.meta.disabled
              },
              domProps: { value: _vm.field.value },
              on: {
                keydown: function($event) {
                  _vm.$emit("update")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.field, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.hasError
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("i", { staticClass: "fas fa-exclamation-triangle" })]
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.meta.content === "email"
      ? _c(
          "div",
          {
            staticClass: "control",
            class: { "has-icons-right": _vm.hasError }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "input",
              class: { "is-danger": _vm.hasError },
              attrs: {
                readonly: _vm.field.meta.readonly,
                type: "email",
                disabled: _vm.field.meta.disabled
              },
              domProps: { value: _vm.field.value },
              on: {
                keydown: function($event) {
                  _vm.$emit("update")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.field, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.hasError
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("i", { staticClass: "fas fa-exclamation-triangle" })]
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.meta.content === "number"
      ? _c(
          "div",
          {
            staticClass: "control",
            class: { "has-icons-right": _vm.hasError }
          },
          [
            _c("input", {
              directives: [
                {
                  name: "model",
                  rawName: "v-model",
                  value: _vm.field.value,
                  expression: "field.value"
                }
              ],
              staticClass: "input",
              class: { "is-danger": _vm.hasError },
              attrs: {
                readonly: _vm.field.meta.readonly,
                type: "number",
                step: _vm.field.meta.step,
                min: _vm.field.meta.min,
                max: _vm.field.meta.max,
                disabled: _vm.field.meta.disabled
              },
              domProps: { value: _vm.field.value },
              on: {
                keydown: function($event) {
                  _vm.$emit("update")
                },
                input: function($event) {
                  if ($event.target.composing) {
                    return
                  }
                  _vm.$set(_vm.field, "value", $event.target.value)
                }
              }
            }),
            _vm._v(" "),
            _vm.hasError
              ? _c(
                  "span",
                  { staticClass: "icon is-small is-right has-text-danger" },
                  [_c("i", { staticClass: "fas fa-exclamation-triangle" })]
                )
              : _vm._e()
          ]
        )
      : _vm._e(),
    _vm._v(" "),
    _vm.field.meta.content === "checkbox"
      ? _c(
          "span",
          [
            _c("vue-switch", {
              attrs: {
                size: "is-large",
                type: "is-success",
                disabled: _vm.field.meta.disabled || _vm.field.meta.readonly
              },
              on: {
                click: function($event) {
                  _vm.$emit("update")
                }
              },
              model: {
                value: _vm.field.value,
                callback: function($$v) {
                  _vm.$set(_vm.field, "value", $$v)
                },
                expression: "field.value"
              }
            })
          ],
          1
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-fdcc7fda", module.exports)
  }
}

/***/ }),

/***/ 1129:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    [
      _vm.data.icon || _vm.data.title
        ? _c("h5", { staticClass: "title is-5" }, [
            _vm.data.icon
              ? _c("span", { staticClass: "icon" }, [
                  _c("i", { class: _vm.data.icon })
                ])
              : _vm._e(),
            _vm._v(" "),
            _vm.data.title
              ? _c("span", [
                  _vm._v(
                    "\n            " + _vm._s(_vm.data.title) + "\n        "
                  )
                ])
              : _vm._e(),
            _vm._v(" "),
            _c("hr")
          ])
        : _vm._e(),
      _vm._v(" "),
      _c(
        "form",
        {
          staticClass: "vue-form",
          on: {
            submit: function($event) {
              $event.preventDefault()
              _vm.submit()
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "columns is-multiline" },
            _vm._l(_vm.data.fields, function(field) {
              return !field.meta.hidden
                ? _c(
                    "div",
                    {
                      key: field.name,
                      staticClass: "column",
                      class: _vm.columnSize
                    },
                    [
                      _c("div", { staticClass: "field" }, [
                        _c("label", { staticClass: "label" }, [
                          _vm._v(
                            "\n                        " +
                              _vm._s(_vm.__(field.label)) +
                              "\n                        "
                          ),
                          _vm.errors.has(field.name)
                            ? _c(
                                "p",
                                {
                                  staticClass: "help is-danger is-pulled-right"
                                },
                                [
                                  _vm._v(
                                    "\n                            " +
                                      _vm._s(_vm.errors.get(field.name)) +
                                      "\n                        "
                                  )
                                ]
                              )
                            : _vm._e()
                        ]),
                        _vm._v(" "),
                        field.meta.custom
                          ? _c(
                              "span",
                              [
                                _vm._t(field.name, null, {
                                  field: field,
                                  errors: _vm.errors
                                })
                              ],
                              2
                            )
                          : _c(
                              "span",
                              [
                                field.meta.type === "input"
                                  ? _c("vue-form-input", {
                                      attrs: {
                                        field: field,
                                        "has-error": _vm.errors.has(field.name)
                                      },
                                      on: {
                                        update: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "select"
                                  ? _c("vue-select", {
                                      attrs: {
                                        "has-error": _vm.errors.has(field.name),
                                        options: field.meta.options,
                                        "key-map": field.meta.keyMap,
                                        source: field.meta.source,
                                        multiple: field.meta.multiple,
                                        disabled: field.meta.disabled,
                                        placeholder: field.meta.placeholder
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      },
                                      model: {
                                        value: field.value,
                                        callback: function($$v) {
                                          _vm.$set(field, "value", $$v)
                                        },
                                        expression: "field.value"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "datepicker"
                                  ? _c("datepicker", {
                                      attrs: {
                                        format: field.meta.format,
                                        time: field.meta.time,
                                        disabled: field.meta.disabled
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      },
                                      model: {
                                        value: field.value,
                                        callback: function($$v) {
                                          _vm.$set(field, "value", $$v)
                                        },
                                        expression: "field.value"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "timepicker"
                                  ? _c("datepicker", {
                                      attrs: {
                                        format: field.meta.format,
                                        "time-only": "",
                                        disabled: field.meta.disabled
                                      },
                                      on: {
                                        input: function($event) {
                                          _vm.errors.clear(field.name)
                                        }
                                      },
                                      model: {
                                        value: field.value,
                                        callback: function($$v) {
                                          _vm.$set(field, "value", $$v)
                                        },
                                        expression: "field.value"
                                      }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                field.meta.type === "textarea"
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "control has-icons-right"
                                      },
                                      [
                                        _c("textarea", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: field.value,
                                              expression: "field.value"
                                            }
                                          ],
                                          staticClass: "textarea",
                                          class: {
                                            "is-danger": _vm.errors.has(
                                              field.name
                                            )
                                          },
                                          attrs: {
                                            rows: field.meta.rows,
                                            disabled: field.meta.disabled
                                          },
                                          domProps: { value: field.value },
                                          on: {
                                            input: [
                                              function($event) {
                                                if ($event.target.composing) {
                                                  return
                                                }
                                                _vm.$set(
                                                  field,
                                                  "value",
                                                  $event.target.value
                                                )
                                              },
                                              function($event) {
                                                _vm.errors.clear(field.name)
                                              }
                                            ]
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.errors.has(field.name)
                                          ? _c(
                                              "span",
                                              {
                                                staticClass:
                                                  "icon is-small is-right has-text-danger"
                                              },
                                              [
                                                _c("i", {
                                                  staticClass:
                                                    "fas fa-exclamation-triangle"
                                                })
                                              ]
                                            )
                                          : _vm._e()
                                      ]
                                    )
                                  : _vm._e()
                              ],
                              1
                            )
                      ])
                    ]
                  )
                : _vm._e()
            })
          ),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _vm.data.actions.destroy
            ? _c(
                "button",
                {
                  staticClass: "button",
                  class: _vm.data.actions.destroy.button.class,
                  attrs: { disabled: _vm.data.actions.destroy.forbidden },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.showModal = true
                    }
                  }
                },
                [
                  _c("span", [
                    _vm._v(
                      _vm._s(_vm.__(_vm.data.actions.destroy.button.label))
                    )
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.data.actions.destroy.button.icon })
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.actions.create
            ? _c(
                "button",
                {
                  staticClass: "button",
                  class: _vm.data.actions.create.button.class,
                  attrs: { disabled: _vm.data.actions.create.forbidden },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      _vm.create()
                    }
                  }
                },
                [
                  _c("span", [
                    _vm._v(_vm._s(_vm.__(_vm.data.actions.create.button.label)))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.data.actions.create.button.icon })
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.actions.store
            ? _c(
                "button",
                {
                  staticClass: "button is-pulled-right",
                  class: [
                    _vm.data.actions.store.button.class,
                    { "is-loading": _vm.loading }
                  ],
                  attrs: {
                    type: "submit",
                    disabled: _vm.data.actions.store.forbidden
                  }
                },
                [
                  _c("span", [
                    _vm._v(_vm._s(_vm.__(_vm.data.actions.store.button.label)))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.data.actions.store.button.icon })
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.actions.update
            ? _c(
                "button",
                {
                  staticClass: "button is-pulled-right",
                  class: [
                    _vm.data.actions.update.button.class,
                    { "is-loading": _vm.loading }
                  ],
                  attrs: {
                    type: "submit",
                    disabled: _vm.data.actions.update.forbidden
                  }
                },
                [
                  _c("span", [
                    _vm._v(_vm._s(_vm.__(_vm.data.actions.update.button.label)))
                  ]),
                  _vm._v(" "),
                  _c("span", { staticClass: "icon" }, [
                    _c("i", { class: _vm.data.actions.update.button.icon })
                  ])
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _c("div", { staticClass: "is-clearfix" })
        ]
      ),
      _vm._v(" "),
      _vm.data.actions.destroy
        ? _c("modal", {
            attrs: {
              show: _vm.showModal,
              __: _vm.__,
              message: _vm.data.actions.destroy.button.message
            },
            on: {
              "cancel-action": function($event) {
                _vm.showModal = false
              },
              "commit-action": function($event) {
                _vm.destroy()
              }
            }
          })
        : _vm._e()
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
    require("vue-hot-reload-api")      .rerender("data-v-1b52e927", module.exports)
  }
}

/***/ }),

/***/ 1547:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue__ = __webpack_require__(1103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue__);
//
//
//
//
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
    components: { VueForm: __WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue___default.a },

    data: function data() {
        return {
            initialised: false,
            form: {},
            role: {}
        };
    },
    created: function created() {
        var _this = this;

        axios.get(route(this.$route.name, this.$route.params.id, false)).then(function (response) {
            _this.form = response.data.form;
            _this.role = response.data.role;
            _this.initialised = true;
        }).catch(function (error) {
            return _this.handleError(error);
        });
    }
});

/***/ }),

/***/ 1548:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "columns is-centered" }, [
    _c(
      "div",
      { staticClass: "column is-three-quarters" },
      [
        _vm.initialised
          ? _c("vue-form", {
              staticClass: "box animated fadeIn",
              attrs: { data: _vm.form }
            })
          : _vm._e()
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-b1a93062", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmNzcz8xYjk1Iiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmNzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlP2VjMGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZT83MzY2Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVNlbGVjdC52dWU/ZjE4ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZT83NzU2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlPzc0ZTQiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL2NsYXNzZXMvRXJyb3JzLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWU/MjE5ZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWU/Y2E2ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZT9kMDg2Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzP2RmMzYiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3MiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWU/NGFiMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZT8wOGFhIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlPzg5MWQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWU/YzQxMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlP2NmNGMiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZT85MTc0Iiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm1JbnB1dC52dWU/MTRjMyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZT81ZDBmIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9FZGl0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9FZGl0LnZ1ZT83OTY1Il0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJmaWVsZCIsImluY2x1ZGVzIiwiaGFzIiwiVnVlIiwiZGVsZXRlIiwiZm9yRWFjaCIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDZDQUFpVjtBQUNqVjtBQUNBLCtDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5TTtBQUN6TSwwQkFBeU07QUFDek07QUFDQTtBQUNBO0FBQ0EsNkNBQWlWO0FBQ2pWO0FBQ0EsK0NBQXNMO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM3Q0E7O0FBRUE7QUFDQSxzQ0FBNkw7QUFDN0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBHQUEwRyxrRkFBa0Y7QUFDNUwsbUhBQW1ILGtGQUFrRjtB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LE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sTUFBTSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsS0FBSyxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLE9BQU8sTUFBTSxLQUFLLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxPQUFPLEtBQUssT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLE9BQU8sTUFBTSxLQUFLLEtBQUssS0FBSyxPQUFPLE1BQU0sT0FBTyxPQUFPLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFVBQVUsS0FBSyxNQUFNLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLFdBQVcsS0FBSyxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksV0FBVyxLQUFLLEtBQUssVUFBVSxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsVUFBVSxVQUFVLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLGdCQUFnQixZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxZQUFZLGFBQWEsV0FBVyxLQUFLLHNCQUFzQixhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxPQUFPLFlBQVksTUFBTSxPQUFPLFlBQVksYUFBYSxNQUFNLE9BQU8sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFVBQVUsVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSywwRUFBMEUsNEJBQTRCLHFCQUFxQixrQkFBa0IsZUFBZSx1QkFBdUIsdUJBQXVCLGVBQWUsNEJBQTRCLDRCQUE0QixtQkFBbUIsY0FBYyxvQkFBb0Isc0JBQXNCLHVCQUF1Qix1QkFBdUIscUJBQXFCLG1D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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw2QkFBNkIsaUNBQWlDO0FBQzlELDJCQUEyQixnQ0FBZ0M7QUFDM0Q7QUFDQSwrQkFBK0IsbUJBQW1CO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSw4QkFBOEIsa0JBQWtCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBLDBDQUEwQyw2QkFBNkI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsa0NBQWtDLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0EsOEJBQThCLGtDQUFrQyxFQUFFO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsa0JBQWtCO0FBQ3JELGlDQUFpQywrQkFBK0I7QUFDaEUsdUNBQXVDLHVCQUF1QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNENBQTRDLDJCQUEyQjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkNBQTJDLEtBQUs7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDLGlCQUFpQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0EsOEJBQThCLHNCQUFzQjtBQUNwRCw2QkFBNkIsNENBQTRDO0FBQ3pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsc0JBQXNCO0FBQ3BELDZCQUE2Qiw2Q0FBNkM7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQiw2QkFBNkI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2WEE7O0FBRUE7a0JBR0E7OzBCQUNBOzt5QkFFQTtrQkFDQTtrQkFFQTtBQUpBO0FBTUE7O0FBQ0E7O2tHQUNBO3VDQUNBO3VDQUNBO2dDQUNBOztxQ0FDQTs7QUFDQTtBQWpCQSxHOzs7Ozs7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHFDQUFxQztBQUN6RDtBQUNBO0FBQ0EsT0FBTywwQ0FBMEM7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoiMTQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRWRpdC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWIxYTkzMDYyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRWRpdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBudWxsXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vcm9sZXMvRWRpdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtYjFhOTMwNjJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1iMWE5MzA2MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vcm9sZXMvRWRpdC52dWVcbi8vIG1vZHVsZSBpZCA9IDEwODhcbi8vIG1vZHVsZSBjaHVua3MgPSAxNCIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzMwNzZlOWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXZ1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCIpXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hc2Fzcy1sb2FkZXIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9WdWVTZWxlY3QudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9WdWVTZWxlY3QudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Z1ZVNlbGVjdC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVNlbGVjdC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtNzMwNzZlOWZcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi03MzA3NmU5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI5IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi92dWUtbXVsdGlzZWxlY3QubWluLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1MDc5ZjI5NFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzMwNzZlOWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4vdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTczMDc2ZTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuL3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTczMDc2ZTlmXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjkiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5maWVsZHNldFtkaXNhYmxlZF0gLm11bHRpc2VsZWN0e3BvaW50ZXItZXZlbnRzOm5vbmVcXG59XFxuLm11bHRpc2VsZWN0X19zcGlubmVye3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjFweDt0b3A6MXB4O3dpZHRoOjQ4cHg7aGVpZ2h0OjM1cHg7YmFja2dyb3VuZDojZmZmO2Rpc3BsYXk6YmxvY2tcXG59XFxuLm11bHRpc2VsZWN0X19zcGlubmVyOmFmdGVyLC5tdWx0aXNlbGVjdF9fc3Bpbm5lcjpiZWZvcmV7cG9zaXRpb246YWJzb2x1dGU7Y29udGVudDpcXFwiXFxcIjt0b3A6NTAlO2xlZnQ6NTAlO21hcmdpbjotOHB4IDAgMCAtOHB4O3dpZHRoOjE2cHg7aGVpZ2h0OjE2cHg7Ym9yZGVyLXJhZGl1czoxMDAlO2JvcmRlci1jb2xvcjojNDFiODgzIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6MnB4Oy13ZWJraXQtYm94LXNoYWRvdzowIDAgMCAxcHggdHJhbnNwYXJlbnQ7Ym94LXNoYWRvdzowIDAgMCAxcHggdHJhbnNwYXJlbnRcXG59XFxuLm11bHRpc2VsZWN0X19zcGlubmVyOmJlZm9yZXstd2Via2l0LWFuaW1hdGlvbjphIDIuNHMgY3ViaWMtYmV6aWVyKC40MSwuMjYsLjIsLjYyKTthbmltYXRpb246YSAyLjRzIGN1YmljLWJlemllciguNDEsLjI2LC4yLC42Mik7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGVcXG59XFxuLm11bHRpc2VsZWN0X19zcGlubmVyOmFmdGVyey13ZWJraXQtYW5pbWF0aW9uOmEgMi40cyBjdWJpYy1iZXppZXIoLjUxLC4wOSwuMjEsLjgpO2FuaW1hdGlvbjphIDIuNHMgY3ViaWMtYmV6aWVyKC41MSwuMDksLjIxLC44KTstd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGU7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZVxcbn1cXG4ubXVsdGlzZWxlY3RfX2xvYWRpbmctZW50ZXItYWN0aXZlLC5tdWx0aXNlbGVjdF9fbG9hZGluZy1sZWF2ZS1hY3RpdmV7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246b3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7b3BhY2l0eToxXFxufVxcbi5tdWx0aXNlbGVjdF9fbG9hZGluZy1lbnRlciwubXVsdGlzZWxlY3RfX2xvYWRpbmctbGVhdmUtYWN0aXZle29wYWNpdHk6MFxcbn1cXG4ubXVsdGlzZWxlY3QsLm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3RfX3NpbmdsZXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxNHB4Oy1tcy10b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uO3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb25cXG59XFxuLm11bHRpc2VsZWN0ey13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDtib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7cG9zaXRpb246cmVsYXRpdmU7d2lkdGg6MTAwJTttaW4taGVpZ2h0OjQwcHg7dGV4dC1hbGlnbjpsZWZ0O2NvbG9yOiMzNTQ5NWVcXG59XFxuLm11bHRpc2VsZWN0ICp7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94XFxufVxcbi5tdWx0aXNlbGVjdDpmb2N1c3tvdXRsaW5lOm5vbmVcXG59XFxuLm11bHRpc2VsZWN0LS1kaXNhYmxlZHtvcGFjaXR5Oi42XFxufVxcbi5tdWx0aXNlbGVjdC0tYWN0aXZle3otaW5kZXg6MVxcbn1cXG4ubXVsdGlzZWxlY3QtLWFjdGl2ZTpub3QoLm11bHRpc2VsZWN0LS1hYm92ZSkgLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdC0tYWN0aXZlOm5vdCgubXVsdGlzZWxlY3QtLWFib3ZlKSAubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdC0tYWN0aXZlOm5vdCgubXVsdGlzZWxlY3QtLWFib3ZlKSAubXVsdGlzZWxlY3RfX3RhZ3N7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjBcXG59XFxuLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19zZWxlY3R7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDE4MGRlZyk7dHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpXFxufVxcbi5tdWx0aXNlbGVjdC0tYWJvdmUubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0LS1hYm92ZS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0LS1hYm92ZS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9fdGFnc3tib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MFxcbn1cXG4ubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdF9fc2luZ2xle3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21pbi1oZWlnaHQ6MjBweDtsaW5lLWhlaWdodDoyMHB4O2JvcmRlcjpub25lO2JvcmRlci1yYWRpdXM6NXB4O2JhY2tncm91bmQ6I2ZmZjtwYWRkaW5nOjAgMCAwIDVweDt3aWR0aDoxMDAlOy13ZWJraXQtdHJhbnNpdGlvbjpib3JkZXIgLjFzIGVhc2U7dHJhbnNpdGlvbjpib3JkZXIgLjFzIGVhc2U7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbi1ib3R0b206OHB4O3ZlcnRpY2FsLWFsaWduOnRvcFxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZ34ubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdF9fdGFnfi5tdWx0aXNlbGVjdF9fc2luZ2xle3dpZHRoOmF1dG9cXG59XFxuLm11bHRpc2VsZWN0X19pbnB1dDpob3ZlciwubXVsdGlzZWxlY3RfX3NpbmdsZTpob3Zlcntib3JkZXItY29sb3I6I2NmY2ZjZlxcbn1cXG4ubXVsdGlzZWxlY3RfX2lucHV0OmZvY3VzLC5tdWx0aXNlbGVjdF9fc2luZ2xlOmZvY3Vze2JvcmRlci1jb2xvcjojYThhOGE4O291dGxpbmU6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3RfX3NpbmdsZXtwYWRkaW5nLWxlZnQ6NnB4O21hcmdpbi1ib3R0b206OHB4XFxufVxcbi5tdWx0aXNlbGVjdF9fdGFncy13cmFwe2Rpc3BsYXk6aW5saW5lXFxufVxcbi5tdWx0aXNlbGVjdF9fdGFnc3ttaW4taGVpZ2h0OjQwcHg7ZGlzcGxheTpibG9jaztwYWRkaW5nOjhweCA0MHB4IDAgOHB4O2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlcjoxcHggc29saWQgI2U4ZThlODtiYWNrZ3JvdW5kOiNmZmZcXG59XFxuLm11bHRpc2VsZWN0X190YWd7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzo0cHggMjZweCA0cHggMTBweDtib3JkZXItcmFkaXVzOjVweDttYXJnaW4tcmlnaHQ6MTBweDtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjE7YmFja2dyb3VuZDojNDFiODgzO21hcmdpbi1ib3R0b206NXB4O3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47bWF4LXdpZHRoOjEwMCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpc1xcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZy1pY29ue2N1cnNvcjpwb2ludGVyO21hcmdpbi1sZWZ0OjdweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowO2JvdHRvbTowO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXN0eWxlOm5vcm1hbDt3aWR0aDoyMnB4O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjIycHg7LXdlYmtpdC10cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTtib3JkZXItcmFkaXVzOjVweFxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxEN1xcXCI7Y29sb3I6IzI2NmQ0ZDtmb250LXNpemU6MTRweFxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmZvY3VzLC5tdWx0aXNlbGVjdF9fdGFnLWljb246aG92ZXJ7YmFja2dyb3VuZDojMzY5YTZlXFxufVxcbi5tdWx0aXNlbGVjdF9fdGFnLWljb246Zm9jdXM6YWZ0ZXIsLm11bHRpc2VsZWN0X190YWctaWNvbjpob3ZlcjphZnRlcntjb2xvcjojZmZmXFxufVxcbi5tdWx0aXNlbGVjdF9fY3VycmVudHttaW4taGVpZ2h0OjQwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6OHB4IDEycHggMDtwYWRkaW5nLXJpZ2h0OjMwcHg7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlcjoxcHggc29saWQgI2U4ZThlOFxcbn1cXG4ubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0X19zZWxlY3R7bGluZS1oZWlnaHQ6MTZweDstd2Via2l0LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlclxcbn1cXG4ubXVsdGlzZWxlY3RfX3NlbGVjdHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo0MHB4O2hlaWdodDozOHB4O3JpZ2h0OjFweDt0b3A6MXB4O3BhZGRpbmc6NHB4IDhweDt0ZXh0LWFsaWduOmNlbnRlcjstd2Via2l0LXRyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2U7dHJhbnNpdGlvbjotd2Via2l0LXRyYW5zZm9ybSAuMnMgZWFzZTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZTt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZSwgLXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2VcXG59XFxuLm11bHRpc2VsZWN0X19zZWxlY3Q6YmVmb3Jle3Bvc2l0aW9uOnJlbGF0aXZlO3JpZ2h0OjA7dG9wOjY1JTtjb2xvcjojOTk5O21hcmdpbi10b3A6NHB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDVweCAwO2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2NvbnRlbnQ6XFxcIlxcXCJcXG59XFxuLm11bHRpc2VsZWN0X19wbGFjZWhvbGRlcntjb2xvcjojYWRhZGFkO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1ib3R0b206MTBweDtwYWRkaW5nLXRvcDoycHhcXG59XFxuLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmVcXG59XFxuLm11bHRpc2VsZWN0X19jb250ZW50LXdyYXBwZXJ7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kOiNmZmY7d2lkdGg6MTAwJTttYXgtaGVpZ2h0OjI0MHB4O292ZXJmbG93OmF1dG87Ym9yZGVyOjFweCBzb2xpZCAjZThlOGU4O2JvcmRlci10b3A6bm9uZTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7ei1pbmRleDoxOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNoXFxufVxcbi5tdWx0aXNlbGVjdF9fY29udGVudHtsaXN0LXN0eWxlOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzowO21hcmdpbjowO21pbi13aWR0aDoxMDAlO3ZlcnRpY2FsLWFsaWduOnRvcFxcbn1cXG4ubXVsdGlzZWxlY3QtLWFib3ZlIC5tdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVye2JvdHRvbToxMDAlO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U4ZThlOFxcbn1cXG4ubXVsdGlzZWxlY3RfX2NvbnRlbnQ6OndlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lXFxufVxcbi5tdWx0aXNlbGVjdF9fZWxlbWVudHtkaXNwbGF5OmJsb2NrXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9ue2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxMnB4O21pbi1oZWlnaHQ6NDBweDtsaW5lLWhlaWdodDoxNnB4O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtdHJhbnNmb3JtOm5vbmU7dmVydGljYWwtYWxpZ246bWlkZGxlO3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyO3doaXRlLXNwYWNlOm5vd3JhcFxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlcnt0b3A6MDtyaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO2xpbmUtaGVpZ2h0OjQwcHg7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctbGVmdDoyMHB4XFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHR7YmFja2dyb3VuZDojNDFiODgzO291dGxpbmU6bm9uZTtjb2xvcjojZmZmXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHQ6YWZ0ZXJ7Y29udGVudDphdHRyKGRhdGEtc2VsZWN0KTtiYWNrZ3JvdW5kOiM0MWI4ODM7Y29sb3I6I2ZmZlxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWR7YmFja2dyb3VuZDojZjNmM2YzO2NvbG9yOiMzNTQ5NWU7Zm9udC13ZWlnaHQ6NzAwXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZDphZnRlcntjb250ZW50OmF0dHIoZGF0YS1zZWxlY3RlZCk7Y29sb3I6c2lsdmVyXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHR7YmFja2dyb3VuZDojZmY2YTZhO2NvbG9yOiNmZmZcXG59XFxuLm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkLm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodDphZnRlcntiYWNrZ3JvdW5kOiNmZjZhNmE7Y29udGVudDphdHRyKGRhdGEtZGVzZWxlY3QpO2NvbG9yOiNmZmZcXG59XFxuLm11bHRpc2VsZWN0LS1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNlZGVkZWQ7cG9pbnRlci1ldmVudHM6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3QtLWRpc2FibGVkIC5tdWx0aXNlbGVjdF9fY3VycmVudCwubXVsdGlzZWxlY3QtLWRpc2FibGVkIC5tdWx0aXNlbGVjdF9fc2VsZWN0LC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNlZGVkZWQ7Y29sb3I6I2E2YTZhNlxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0tZGlzYWJsZWR7Y3Vyc29yOnRleHQ7cG9pbnRlci1ldmVudHM6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0tZGlzYWJsZWQubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0e2JhY2tncm91bmQ6I2RlZGVkZSFpbXBvcnRhbnRcXG59XFxuLm11bHRpc2VsZWN0LWVudGVyLWFjdGl2ZSwubXVsdGlzZWxlY3QtbGVhdmUtYWN0aXZley13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlO3RyYW5zaXRpb246YWxsIC4xNXMgZWFzZVxcbn1cXG4ubXVsdGlzZWxlY3QtZW50ZXIsLm11bHRpc2VsZWN0LWxlYXZlLWFjdGl2ZXtvcGFjaXR5OjBcXG59XFxuLm11bHRpc2VsZWN0X19zdHJvbmd7bWFyZ2luLWJvdHRvbTo4cHg7bGluZS1oZWlnaHQ6MjBweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3BcXG59XFxuW2Rpcj1ydGxdIC5tdWx0aXNlbGVjdHt0ZXh0LWFsaWduOnJpZ2h0XFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX3NlbGVjdHtyaWdodDphdXRvO2xlZnQ6MXB4XFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX3RhZ3N7cGFkZGluZzo4cHggOHB4IDAgNDBweFxcbn1cXG5bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19jb250ZW50e3RleHQtYWxpZ246cmlnaHRcXG59XFxuW2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fb3B0aW9uOmFmdGVye3JpZ2h0OmF1dG87bGVmdDowXFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX2NsZWFye3JpZ2h0OmF1dG87bGVmdDoxMnB4XFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX3NwaW5uZXJ7cmlnaHQ6YXV0bztsZWZ0OjFweFxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgYXtcXG4wJXstd2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMCk7dHJhbnNmb3JtOnJvdGF0ZSgwKVxcbn1cXG50b3std2Via2l0LXRyYW5zZm9ybTpyb3RhdGUoMnR1cm4pO3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pXFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGF7XFxuMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMClcXG59XFxudG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDJ0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDJ0dXJuKVxcbn1cXG59XCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvbm9kZV9tb2R1bGVzL3Z1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFBQSxnQ0FBZ0MsbUJBQW1CO0NBQUM7QUFBQSxzQkFBc0Isa0JBQWtCLFVBQVUsUUFBUSxXQUFXLFlBQVksZ0JBQWdCLGFBQWE7Q0FBQztBQUFBLHlEQUF5RCxrQkFBa0IsV0FBVyxRQUFRLFNBQVMscUJBQXFCLFdBQVcsWUFBWSxtQkFBbUIsNkNBQTZDLG1CQUFtQixpQkFBaUIseUNBQUEsZ0NBQWdDO0NBQUM7QUFBQSw2QkFBNkIsc0RBQUEsOENBQThDLDJDQUFBLGtDQUFrQztDQUFDO0FBQUEsNEJBQTRCLHNEQUFBLDhDQUE4QywyQ0FBQSxrQ0FBa0M7Q0FBQztBQUFBLHNFQUFzRSwyQ0FBQSxtQ0FBbUMsU0FBUztDQUFDO0FBQUEsK0RBQStELFNBQVM7Q0FBQztBQUFBLHNEQUFzRCxvQkFBb0IsZUFBZSw4QkFBOEIseUJBQXlCO0NBQUM7QUFBQSxhQUFhLCtCQUFBLHVCQUF1QixjQUFjLGtCQUFrQixXQUFXLGdCQUFnQixnQkFBZ0IsYUFBYTtDQUFDO0FBQUEsZUFBZSw4QkFBQSxxQkFBcUI7Q0FBQztBQUFBLG1CQUFtQixZQUFZO0NBQUM7QUFBQSx1QkFBdUIsVUFB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QUEscUJBQXFCLGtCQUFrQixpQkFBaUIscUJBQXFCLGtCQUFrQjtDQUFDO0FBQUEsdUJBQXVCLGdCQUFnQjtDQUFDO0FBQUEsK0JBQStCLFdBQVcsUUFBUTtDQUFDO0FBQUEsNkJBQTZCLHNCQUFzQjtDQUFDO0FBQUEsZ0NBQWdDLGdCQUFnQjtDQUFDO0FBQUEscUNBQXFDLFdBQVcsTUFBTTtDQUFDO0FBQUEsOEJBQThCLFdBQVcsU0FBUztDQUFDO0FBQUEsZ0NBQWdDLFdBQVcsUUFBUTtDQUFDO0FBQUE7QUFBYSxHQUFHLDRCQUFBLG1CQUFtQjtDQUFDO0FBQUEsR0FBRyxnQ0FBQSx1QkFBdUI7Q0FBQztDQUFDO0FBQWhFO0FBQWEsR0FBRyw0QkFBQSxtQkFBbUI7Q0FBQztBQUFBLEdBQUcsZ0NBQUEsdUJBQXVCO0NBQUM7Q0FBQ1wiLFwiZmlsZVwiOlwidnVlLW11bHRpc2VsZWN0Lm1pbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiZmllbGRzZXRbZGlzYWJsZWRdIC5tdWx0aXNlbGVjdHtwb2ludGVyLWV2ZW50czpub25lfS5tdWx0aXNlbGVjdF9fc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxcHg7dG9wOjFweDt3aWR0aDo0OHB4O2hlaWdodDozNXB4O2JhY2tncm91bmQ6I2ZmZjtkaXNwbGF5OmJsb2NrfS5tdWx0aXNlbGVjdF9fc3Bpbm5lcjphZnRlciwubXVsdGlzZWxlY3RfX3NwaW5uZXI6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XFxcIlxcXCI7dG9wOjUwJTtsZWZ0OjUwJTttYXJnaW46LThweCAwIDAgLThweDt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci1yYWRpdXM6MTAwJTtib3JkZXItY29sb3I6IzQxYjg4MyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjJweDtib3gtc2hhZG93OjAgMCAwIDFweCB0cmFuc3BhcmVudH0ubXVsdGlzZWxlY3RfX3NwaW5uZXI6YmVmb3Jle2FuaW1hdGlvbjphIDIuNHMgY3ViaWMtYmV6aWVyKC40MSwuMjYsLjIsLjYyKTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlfS5tdWx0aXNlbGVjdF9fc3Bpbm5lcjphZnRlcnthbmltYXRpb246YSAyLjRzIGN1YmljLWJlemllciguNTEsLjA5LC4yMSwuOCk7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0ubXVsdGlzZWxlY3RfX2xvYWRpbmctZW50ZXItYWN0aXZlLC5tdWx0aXNlbGVjdF9fbG9hZGluZy1sZWF2ZS1hY3RpdmV7dHJhbnNpdGlvbjpvcGFjaXR5IC40cyBlYXNlLWluLW91dDtvcGFjaXR5OjF9Lm11bHRpc2VsZWN0X19sb2FkaW5nLWVudGVyLC5tdWx0aXNlbGVjdF9fbG9hZGluZy1sZWF2ZS1hY3RpdmV7b3BhY2l0eTowfS5tdWx0aXNlbGVjdCwubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdF9fc2luZ2xle2ZvbnQtZmFtaWx5OmluaGVyaXQ7Zm9udC1zaXplOjE0cHg7LW1zLXRvdWNoLWFjdGlvbjptYW5pcHVsYXRpb247dG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbn0ubXVsdGlzZWxlY3R7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7bWluLWhlaWdodDo0MHB4O3RleHQtYWxpZ246bGVmdDtjb2xvcjojMzU0OTVlfS5tdWx0aXNlbGVjdCAqe2JveC1zaXppbmc6Ym9yZGVyLWJveH0ubXVsdGlzZWxlY3Q6Zm9jdXN7b3V0bGluZTpub25lfS5tdWx0aXNlbGVjdC0tZGlzYWJsZWR7b3BhY2l0eTouNn0ubXVsdGlzZWxlY3QtLWFjdGl2ZXt6LWluZGV4OjF9Lm11bHRpc2VsZWN0LS1hY3RpdmU6bm90KC5tdWx0aXNlbGVjdC0tYWJvdmUpIC5tdWx0aXNlbGVjdF9fY3VycmVudCwubXVsdGlzZWxlY3QtLWFjdGl2ZTpub3QoLm11bHRpc2VsZWN0LS1hYm92ZSkgLm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3QtLWFjdGl2ZTpub3QoLm11bHRpc2VsZWN0LS1hYm92ZSkgLm11bHRpc2VsZWN0X190YWdze2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowfS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9fc2VsZWN0e3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKX0ubXVsdGlzZWxlY3QtLWFib3ZlLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdC0tYWJvdmUubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdC0tYWJvdmUubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX3RhZ3N7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjB9Lm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3RfX3NpbmdsZXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazttaW4taGVpZ2h0OjIwcHg7bGluZS1oZWlnaHQ6MjBweDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzowIDAgMCA1cHg7d2lkdGg6MTAwJTt0cmFuc2l0aW9uOmJvcmRlciAuMXMgZWFzZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7bWFyZ2luLWJvdHRvbTo4cHg7dmVydGljYWwtYWxpZ246dG9wfS5tdWx0aXNlbGVjdF9fdGFnfi5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0X190YWd+Lm11bHRpc2VsZWN0X19zaW5nbGV7d2lkdGg6YXV0b30ubXVsdGlzZWxlY3RfX2lucHV0OmhvdmVyLC5tdWx0aXNlbGVjdF9fc2luZ2xlOmhvdmVye2JvcmRlci1jb2xvcjojY2ZjZmNmfS5tdWx0aXNlbGVjdF9faW5wdXQ6Zm9jdXMsLm11bHRpc2VsZWN0X19zaW5nbGU6Zm9jdXN7Ym9yZGVyLWNvbG9yOiNhOGE4YTg7b3V0bGluZTpub25lfS5tdWx0aXNlbGVjdF9fc2luZ2xle3BhZGRpbmctbGVmdDo2cHg7bWFyZ2luLWJvdHRvbTo4cHh9Lm11bHRpc2VsZWN0X190YWdzLXdyYXB7ZGlzcGxheTppbmxpbmV9Lm11bHRpc2VsZWN0X190YWdze21pbi1oZWlnaHQ6NDBweDtkaXNwbGF5OmJsb2NrO3BhZGRpbmc6OHB4IDQwcHggMCA4cHg7Ym9yZGVyLXJhZGl1czo1cHg7Ym9yZGVyOjFweCBzb2xpZCAjZThlOGU4O2JhY2tncm91bmQ6I2ZmZn0ubXVsdGlzZWxlY3RfX3RhZ3twb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjRweCAyNnB4IDRweCAxMHB4O2JvcmRlci1yYWRpdXM6NXB4O21hcmdpbi1yaWdodDoxMHB4O2NvbG9yOiNmZmY7bGluZS1oZWlnaHQ6MTtiYWNrZ3JvdW5kOiM0MWI4ODM7bWFyZ2luLWJvdHRvbTo1cHg7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjttYXgtd2lkdGg6MTAwJTt0ZXh0LW92ZXJmbG93OmVsbGlwc2lzfS5tdWx0aXNlbGVjdF9fdGFnLWljb257Y3Vyc29yOnBvaW50ZXI7bWFyZ2luLWxlZnQ6N3B4O3Bvc2l0aW9uOmFic29sdXRlO3JpZ2h0OjA7dG9wOjA7Ym90dG9tOjA7Zm9udC13ZWlnaHQ6NzAwO2ZvbnQtc3R5bGU6bm9ybWFsO3dpZHRoOjIycHg7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MjJweDt0cmFuc2l0aW9uOmFsbCAuMnMgZWFzZTtib3JkZXItcmFkaXVzOjVweH0ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmFmdGVye2NvbnRlbnQ6XFxcIlxcXFxEN1xcXCI7Y29sb3I6IzI2NmQ0ZDtmb250LXNpemU6MTRweH0ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmZvY3VzLC5tdWx0aXNlbGVjdF9fdGFnLWljb246aG92ZXJ7YmFja2dyb3VuZDojMzY5YTZlfS5tdWx0aXNlbGVjdF9fdGFnLWljb246Zm9jdXM6YWZ0ZXIsLm11bHRpc2VsZWN0X190YWctaWNvbjpob3ZlcjphZnRlcntjb2xvcjojZmZmfS5tdWx0aXNlbGVjdF9fY3VycmVudHttaW4taGVpZ2h0OjQwcHg7b3ZlcmZsb3c6aGlkZGVuO3BhZGRpbmc6OHB4IDEycHggMDtwYWRkaW5nLXJpZ2h0OjMwcHg7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlcjoxcHggc29saWQgI2U4ZThlOH0ubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0X19zZWxlY3R7bGluZS1oZWlnaHQ6MTZweDtib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jazttYXJnaW46MDt0ZXh0LWRlY29yYXRpb246bm9uZTtjdXJzb3I6cG9pbnRlcn0ubXVsdGlzZWxlY3RfX3NlbGVjdHtwb3NpdGlvbjphYnNvbHV0ZTt3aWR0aDo0MHB4O2hlaWdodDozOHB4O3JpZ2h0OjFweDt0b3A6MXB4O3BhZGRpbmc6NHB4IDhweDt0ZXh0LWFsaWduOmNlbnRlcjt0cmFuc2l0aW9uOnRyYW5zZm9ybSAuMnMgZWFzZX0ubXVsdGlzZWxlY3RfX3NlbGVjdDpiZWZvcmV7cG9zaXRpb246cmVsYXRpdmU7cmlnaHQ6MDt0b3A6NjUlO2NvbG9yOiM5OTk7bWFyZ2luLXRvcDo0cHg7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDo1cHggNXB4IDA7Ym9yZGVyLWNvbG9yOiM5OTkgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7Y29udGVudDpcXFwiXFxcIn0ubXVsdGlzZWxlY3RfX3BsYWNlaG9sZGVye2NvbG9yOiNhZGFkYWQ7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luLWJvdHRvbToxMHB4O3BhZGRpbmctdG9wOjJweH0ubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX3BsYWNlaG9sZGVye2Rpc3BsYXk6bm9uZX0ubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlcntwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmJsb2NrO2JhY2tncm91bmQ6I2ZmZjt3aWR0aDoxMDAlO21heC1oZWlnaHQ6MjQwcHg7b3ZlcmZsb3c6YXV0bztib3JkZXI6MXB4IHNvbGlkICNlOGU4ZTg7Ym9yZGVyLXRvcDpub25lO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjVweDt6LWluZGV4OjE7LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6dG91Y2h9Lm11bHRpc2VsZWN0X19jb250ZW50e2xpc3Qtc3R5bGU6bm9uZTtkaXNwbGF5OmlubGluZS1ibG9jaztwYWRkaW5nOjA7bWFyZ2luOjA7bWluLXdpZHRoOjEwMCU7dmVydGljYWwtYWxpZ246dG9wfS5tdWx0aXNlbGVjdC0tYWJvdmUgLm11bHRpc2VsZWN0X19jb250ZW50LXdyYXBwZXJ7Ym90dG9tOjEwMCU7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo1cHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NXB4O2JvcmRlci1ib3R0b206bm9uZTtib3JkZXItdG9wOjFweCBzb2xpZCAjZThlOGU4fS5tdWx0aXNlbGVjdF9fY29udGVudDo6d2Via2l0LXNjcm9sbGJhcntkaXNwbGF5Om5vbmV9Lm11bHRpc2VsZWN0X19lbGVtZW50e2Rpc3BsYXk6YmxvY2t9Lm11bHRpc2VsZWN0X19vcHRpb257ZGlzcGxheTpibG9jaztwYWRkaW5nOjEycHg7bWluLWhlaWdodDo0MHB4O2xpbmUtaGVpZ2h0OjE2cHg7dGV4dC1kZWNvcmF0aW9uOm5vbmU7dGV4dC10cmFuc2Zvcm06bm9uZTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7cG9zaXRpb246cmVsYXRpdmU7Y3Vyc29yOnBvaW50ZXI7d2hpdGUtc3BhY2U6bm93cmFwfS5tdWx0aXNlbGVjdF9fb3B0aW9uOmFmdGVye3RvcDowO3JpZ2h0OjA7cG9zaXRpb246YWJzb2x1dGU7bGluZS1oZWlnaHQ6NDBweDtwYWRkaW5nLXJpZ2h0OjEycHg7cGFkZGluZy1sZWZ0OjIwcHh9Lm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOiM0MWI4ODM7b3V0bGluZTpub25lO2NvbG9yOiNmZmZ9Lm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodDphZnRlcntjb250ZW50OmF0dHIoZGF0YS1zZWxlY3QpO2JhY2tncm91bmQ6IzQxYjg4Mztjb2xvcjojZmZmfS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZHtiYWNrZ3JvdW5kOiNmM2YzZjM7Y29sb3I6IzM1NDk1ZTtmb250LXdlaWdodDo3MDB9Lm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkOmFmdGVye2NvbnRlbnQ6YXR0cihkYXRhLXNlbGVjdGVkKTtjb2xvcjpzaWx2ZXJ9Lm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkLm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOiNmZjZhNmE7Y29sb3I6I2ZmZn0ubXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWQubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0OmFmdGVye2JhY2tncm91bmQ6I2ZmNmE2YTtjb250ZW50OmF0dHIoZGF0YS1kZXNlbGVjdCk7Y29sb3I6I2ZmZn0ubXVsdGlzZWxlY3QtLWRpc2FibGVke2JhY2tncm91bmQ6I2VkZWRlZDtwb2ludGVyLWV2ZW50czpub25lfS5tdWx0aXNlbGVjdC0tZGlzYWJsZWQgLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdC0tZGlzYWJsZWQgLm11bHRpc2VsZWN0X19zZWxlY3QsLm11bHRpc2VsZWN0X19vcHRpb24tLWRpc2FibGVke2JhY2tncm91bmQ6I2VkZWRlZDtjb2xvcjojYTZhNmE2fS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZHtjdXJzb3I6dGV4dDtwb2ludGVyLWV2ZW50czpub25lfS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHR7YmFja2dyb3VuZDojZGVkZWRlIWltcG9ydGFudH0ubXVsdGlzZWxlY3QtZW50ZXItYWN0aXZlLC5tdWx0aXNlbGVjdC1sZWF2ZS1hY3RpdmV7dHJhbnNpdGlvbjphbGwgLjE1cyBlYXNlfS5tdWx0aXNlbGVjdC1lbnRlciwubXVsdGlzZWxlY3QtbGVhdmUtYWN0aXZle29wYWNpdHk6MH0ubXVsdGlzZWxlY3RfX3N0cm9uZ3ttYXJnaW4tYm90dG9tOjhweDtsaW5lLWhlaWdodDoyMHB4O2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcH1bZGlyPXJ0bF0gLm11bHRpc2VsZWN0e3RleHQtYWxpZ246cmlnaHR9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fc2VsZWN0e3JpZ2h0OmF1dG87bGVmdDoxcHh9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fdGFnc3twYWRkaW5nOjhweCA4cHggMCA0MHB4fVtkaXI9cnRsXSAubXVsdGlzZWxlY3RfX2NvbnRlbnR7dGV4dC1hbGlnbjpyaWdodH1bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19vcHRpb246YWZ0ZXJ7cmlnaHQ6YXV0bztsZWZ0OjB9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fY2xlYXJ7cmlnaHQ6YXV0bztsZWZ0OjEycHh9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fc3Bpbm5lcntyaWdodDphdXRvO2xlZnQ6MXB4fUBrZXlmcmFtZXMgYXswJXt0cmFuc2Zvcm06cm90YXRlKDApfXRve3RyYW5zZm9ybTpyb3RhdGUoMnR1cm4pfX1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzMwNzZlOWZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDEwOTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9WdWVTZWxlY3QudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1NmNjMDUzMlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9WdWVTZWxlY3QudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTczMDc2ZTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL1Z1ZVNlbGVjdC52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNzMwNzZlOWZcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI5IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdCB7XFxuICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgbWF4LWhlaWdodDogMzZweDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWdzIHtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICBtYXgtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogNHB4IDQwcHggMCA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnczpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogI2I1YjViNTtcXG59XFxuLm11bHRpc2VsZWN0Lmhhcy1lcnJvciAubXVsdGlzZWxlY3RfX3RhZ3Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1MDgwMDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWcge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZy1pY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCBpbnB1dFt0eXBlPXRleHRdLm11bHRpc2VsZWN0X19pbnB1dCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlciB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbixcXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlciB7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiAzNnB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdCB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19zZWxlY3Q6YmVmb3JlIHtcXG4gIHRvcDogNzAlO1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NwaW5uZXIge1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgd2lkdGg6IDM0cHg7XFxufVxcbnNwYW4ubXVsdGlzZWxlY3RfX3RhZyB7XFxuICBwYWRkaW5nOiA1cHggMjZweCA1cHggMTBweDtcXG59XFxuLm11bHRpc2VsZWN0LCAubXVsdGlzZWxlY3RfX2lucHV0LCAubXVsdGlzZWxlY3RfX3NpbmdsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tdWx0aXNlbGVjdF9fY2xlYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICByaWdodDogMzBweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ubXVsdGlzZWxlY3RfX2NsZWFyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4ubXVsdGlzZWxlY3RfX2NsZWFyOmFmdGVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLm11bHRpc2VsZWN0X19jbGVhcjphZnRlciwgLm11bHRpc2VsZWN0X19jbGVhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcbiAgdG9wOiAzcHg7XFxuICByaWdodDogMTBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0NBQUU7QUFFckI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixtQkFBbUI7Q0FBRTtBQUNyQjtJQUNFLHNCQUFzQjtDQUFFO0FBRTVCO0VBQ0UsMEJBQTBCO0NBQUU7QUFFOUI7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQUU7QUFFdkI7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQUU7QUFFdEI7RUFDRSx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQUU7QUFFeEI7RUFDRSwrQkFBK0I7RUFDL0IsZ0NBQWdDO0NBQUU7QUFFcEM7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7Q0FBRTtBQUVyQjtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQUU7QUFFakI7RUFDRSxTQUFTO0NBQUU7QUFFYjtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQUU7QUFFaEI7RUFDRSwyQkFBMkI7Q0FBRTtBQUUvQjtFQUNFLGdCQUFnQjtDQUFFO0FBRXBCO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7Q0FBRTtBQUVmO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtDQUFFO0FBRTdCO0VBQ0Usa0NBQTBCO1VBQTFCLDBCQUEwQjtDQUFFO0FBRTlCO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULFlBQVk7Q0FBRVwiLFwiZmlsZVwiOlwiVnVlU2VsZWN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudnVlLXNlbGVjdCAubXVsdGlzZWxlY3Qge1xcbiAgbWluLWhlaWdodDogMzZweDtcXG4gIG1heC1oZWlnaHQ6IDM2cHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZ3Mge1xcbiAgbWluLWhlaWdodDogMzZweDtcXG4gIG1heC1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiA0cHggNDBweCAwIDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWdzOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYjViNWI1OyB9XFxuXFxuLm11bHRpc2VsZWN0Lmhhcy1lcnJvciAubXVsdGlzZWxlY3RfX3RhZ3Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1MDgwMDsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnLWljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCBpbnB1dFt0eXBlPXRleHRdLm11bHRpc2VsZWN0X19pbnB1dCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVyIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbixcXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlciB7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiAzNnB4OyB9XFxuXFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19zZWxlY3Qge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDM0cHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdDpiZWZvcmUge1xcbiAgdG9wOiA3MCU7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NwaW5uZXIge1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgd2lkdGg6IDM0cHg7IH1cXG5cXG5zcGFuLm11bHRpc2VsZWN0X190YWcge1xcbiAgcGFkZGluZzogNXB4IDI2cHggNXB4IDEwcHg7IH1cXG5cXG4ubXVsdGlzZWxlY3QsIC5tdWx0aXNlbGVjdF9faW5wdXQsIC5tdWx0aXNlbGVjdF9fc2luZ2xlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDsgfVxcblxcbi5tdWx0aXNlbGVjdF9fY2xlYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICByaWdodDogMzBweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxOyB9XFxuXFxuLm11bHRpc2VsZWN0X19jbGVhcjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuXFxuLm11bHRpc2VsZWN0X19jbGVhcjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLm11bHRpc2VsZWN0X19jbGVhcjphZnRlciwgLm11bHRpc2VsZWN0X19jbGVhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcbiAgdG9wOiAzcHg7XFxuICByaWdodDogMTBweDsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03MzA3NmU5ZlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjkiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwidnVlLXNlbGVjdFwiPlxuICAgICAgICA8bXVsdGlzZWxlY3QgOnZhbHVlPVwidmFsdWVcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWVycm9yJzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICBzZWFyY2hhYmxlXG4gICAgICAgICAgICBhbGxvdy1lbXB0eVxuICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgOmludGVybmFsLXNlYXJjaD1cIiFpc1NlcnZlclNpZGVcIlxuICAgICAgICAgICAgOm11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgICAgICAgICAgOnRhZ2dhYmxlPVwidGFnZ2FibGVcIlxuICAgICAgICAgICAgOmNsZWFyLW9uLXNlbGVjdD1cIiFtdWx0aXBsZVwiXG4gICAgICAgICAgICA6Y2xvc2Utb24tc2VsZWN0PVwiIW11bHRpcGxlXCJcbiAgICAgICAgICAgIDpzZWxlY3QtbGFiZWw9XCJfXyhsYWJlbHMuc2VsZWN0KVwiXG4gICAgICAgICAgICA6ZGVzZWxlY3QtbGFiZWw9XCJfXyhsYWJlbHMuZGVzZWxlY3QpXCJcbiAgICAgICAgICAgIDpzZWxlY3RlZC1sYWJlbD1cIl9fKGxhYmVscy5zZWxlY3RlZClcIlxuICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiX18ocGxhY2Vob2xkZXIpXCJcbiAgICAgICAgICAgIDpsb2FkaW5nPVwibG9hZGluZ1wiXG4gICAgICAgICAgICA6b3B0aW9ucy1saW1pdD1cIjEwMFwiXG4gICAgICAgICAgICA6b3B0aW9ucz1cIm9wdGlvbktleXNcIlxuICAgICAgICAgICAgOmN1c3RvbS1sYWJlbD1cImN1c3RvbUxhYmVsXCJcbiAgICAgICAgICAgIEBzZWFyY2gtY2hhbmdlPVwicXVlcnk9JGV2ZW50O2dldE9wdGlvbnMoKVwiXG4gICAgICAgICAgICBAdGFnPVwiJGVtaXQoJ3RhZycsICRldmVudClcIlxuICAgICAgICAgICAgQGlucHV0PVwiJGVtaXQoJ2lucHV0JywgJGV2ZW50KVwiPlxuICAgICAgICAgICAgPHNwYW4gc2xvdD1cIm5vUmVzdWx0XCI+XG4gICAgICAgICAgICAgICAge3sgX18obGFiZWxzLm5vUmVzdWx0KSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJvcHRpb25cIiBzbG90LXNjb3BlPVwicHJvcHNcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiB2LWh0bWw9XCIkb3B0aW9ucy5maWx0ZXJzLmhpZ2hsaWdodChvcHRpb25MaXN0W3Byb3BzLm9wdGlvbl0sIHF1ZXJ5KVwiPjwvc3Bhbj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cImNsZWFyXCIgc2xvdC1zY29wZT1cInByb3BzXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiIWRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm11bHRpc2VsZWN0X19jbGVhclwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJoYXNTZWxlY3Rpb25cIlxuICAgICAgICAgICAgICAgICAgICBAbW91c2Vkb3duLnByZXZlbnQuc3RvcD1cImNsZWFyKClcIj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvbXVsdGlzZWxlY3Q+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IG1hcEdldHRlcnMgfSBmcm9tICd2dWV4JztcbmltcG9ydCBNdWx0aXNlbGVjdCBmcm9tICd2dWUtbXVsdGlzZWxlY3QnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBNdWx0aXNlbGVjdCB9LFxuXG4gICAgcHJvcHM6IHtcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHNvdXJjZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdCgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge307XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBrZXlNYXA6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdudW1iZXInLFxuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBtdWx0aXBsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB0YWdnYWJsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBoYXNFcnJvcjoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHBpdm90UGFyYW1zOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21QYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnUGxlYXNlIGNob29zZScsXG4gICAgICAgIH0sXG4gICAgICAgIGxhYmVsczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogKCkgPT4gKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogJ1NlbGVjdGVkJyxcbiAgICAgICAgICAgICAgICBzZWxlY3Q6ICdQcmVzcyBlbnRlciB0byBzZWxlY3QnLFxuICAgICAgICAgICAgICAgIGRlc2VsZWN0OiAnUHJlc3MgZW50ZXIgdG8gZGVzZWxlY3QnLFxuICAgICAgICAgICAgICAgIG5vUmVzdWx0OiAnTm8gRWxlbWVudHMgRm91bmQnLFxuICAgICAgICAgICAgfSksXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXG4gICAgICAgIGlzU2VydmVyU2lkZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNvdXJjZSAhPT0gbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzU2VsZWN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuICh0aGlzLm11bHRpcGxlICYmIHRoaXMudmFsdWUubGVuZ3RoKSB8fCAoIXRoaXMubXVsdGlwbGUgJiYgdGhpcy52YWx1ZSAhPT0gbnVsbCk7XG4gICAgICAgIH0sXG4gICAgICAgIG9wdGlvbktleXMoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5rZXlNYXAgPT09ICdudW1iZXInXG4gICAgICAgICAgICAgICAgPyBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbkxpc3QpLm1hcChOdW1iZXIpXG4gICAgICAgICAgICAgICAgOiBPYmplY3Qua2V5cyh0aGlzLm9wdGlvbkxpc3QpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBmaWx0ZXJzOiB7XG4gICAgICAgIGhpZ2hsaWdodChvcHRpb24sIHF1ZXJ5KSB7XG4gICAgICAgICAgICBpZiAoIW9wdGlvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHF1ZXJ5LnNwbGl0KCcgJykuZmlsdGVyKHdvcmQgPT4gd29yZC5sZW5ndGgpLmZvckVhY2goKHdvcmQpID0+IHtcbiAgICAgICAgICAgICAgICBvcHRpb24gPSBvcHRpb24ucmVwbGFjZShuZXcgUmVnRXhwKGAoJHt3b3JkfSlgLCAnZ2knKSwgJzxiPiQxPC9iPicpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBvcHRpb247XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb25MaXN0ID0gdGhpcy5vcHRpb25zO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwaXZvdFBhcmFtczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBjdXN0b21QYXJhbXM6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRPcHRpb25zKCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY3JlYXRlZCgpIHtcbiAgICAgICAgdGhpcy5nZXRPcHRpb25zID0gZGVib3VuY2UodGhpcy5nZXRPcHRpb25zLCA1MDApO1xuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgb3B0aW9uTGlzdDogdGhpcy5vcHRpb25zLFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICAgICAgICBxdWVyeTogJycsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZ2V0T3B0aW9ucygpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1NlcnZlclNpZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGF4aW9zLmdldChyb3V0ZSh0aGlzLnNvdXJjZSwgW10sIG51bGwpLCB7XG4gICAgICAgICAgICAgICAgcGFyYW1zOiB0aGlzLmdldFBhcmFtcygpLFxuICAgICAgICAgICAgfSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NPcHRpb25zKHJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UGFyYW1zKCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMucGFyYW1zLFxuICAgICAgICAgICAgICAgIHBpdm90UGFyYW1zOiB0aGlzLnBpdm90UGFyYW1zLFxuICAgICAgICAgICAgICAgIGN1c3RvbVBhcmFtczogdGhpcy5jdXN0b21QYXJhbXMsXG4gICAgICAgICAgICAgICAgcXVlcnk6IHRoaXMucXVlcnksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9LFxuICAgICAgICBwcm9jZXNzT3B0aW9ucyhyZXNwb25zZSkge1xuICAgICAgICAgICAgdGhpcy5vcHRpb25MaXN0ID0gcmVzcG9uc2UuZGF0YTtcblxuICAgICAgICAgICAgaWYgKCF0aGlzLnF1ZXJ5ICYmICF0aGlzLnZhbHVlSXNNYXRjaGVkKCkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHZhbHVlSXNNYXRjaGVkKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG5cbiAgICAgICAgICAgIGlmICghdGhpcy5tdWx0aXBsZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbktleXMuZmlsdGVyKG9wdGlvbiA9PiBvcHRpb24gPT09IHNlbGYudmFsdWUpLmxlbmd0aCA+IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbktleXMuZmlsdGVyKG9wdGlvbiA9PlxuICAgICAgICAgICAgICAgIHNlbGYudmFsdWUuZmlsdGVyKHZhbCA9PiB2YWwgPT09IG9wdGlvbikubGVuZ3RoID4gMCkubGVuZ3RoID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgY3VzdG9tTGFiZWwob3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25MaXN0W29wdGlvbl07XG4gICAgICAgIH0sXG4gICAgICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJG5leHRUaWNrKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMudmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIGNsZWFyKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgnaW5wdXQnLCB0aGlzLm11bHRpcGxlID8gW10gOiBudWxsKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNTZXJ2ZXJTaWRlKSB7XG4gICAgICAgICAgICB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNyYz1cInZ1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCI+PC9zdHlsZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cbiAgICAudnVlLXNlbGVjdCAubXVsdGlzZWxlY3Qge1xuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFncyB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweCA0MHB4IDAgNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjYjViNWI1O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm11bHRpc2VsZWN0Lmhhcy1lcnJvciAubXVsdGlzZWxlY3RfX3RhZ3Mge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZTUwODAwO1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWctaWNvbiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgaW5wdXRbdHlwZT10ZXh0XS5tdWx0aXNlbGVjdF9faW5wdXQge1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogbm9uZTtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDNweDtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbixcbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlciB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBtaW4taGVpZ2h0OiAzNnB4O1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fc2VsZWN0IHtcbiAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdDpiZWZvcmUge1xuICAgICAgICB0b3A6IDcwJTtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NwaW5uZXIge1xuICAgICAgICBoZWlnaHQ6IDM0cHg7XG4gICAgICAgIHdpZHRoOiAzNHB4O1xuICAgIH1cblxuICAgIHNwYW4ubXVsdGlzZWxlY3RfX3RhZyB7XG4gICAgICAgIHBhZGRpbmc6IDVweCAyNnB4IDVweCAxMHB4O1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdCwgLm11bHRpc2VsZWN0X19pbnB1dCwgLm11bHRpc2VsZWN0X19zaW5nbGUge1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgfVxuXG4gICAgLm11bHRpc2VsZWN0X19jbGVhciB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA3cHg7XG4gICAgICAgIHJpZ2h0OiAzMHB4O1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdF9fY2xlYXI6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdF9fY2xlYXI6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xuICAgIH1cblxuICAgIC5tdWx0aXNlbGVjdF9fY2xlYXI6YWZ0ZXIsIC5tdWx0aXNlbGVjdF9fY2xlYXI6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgd2lkdGg6IDFweDtcbiAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjYWFhO1xuICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgcmlnaHQ6IDEwcHg7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVNlbGVjdC52dWUiLCIhZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLlZ1ZU11bHRpc2VsZWN0PXQoKTplLlZ1ZU11bHRpc2VsZWN0PXQoKX0odGhpcyxmdW5jdGlvbigpe3JldHVybiBmdW5jdGlvbihlKXtmdW5jdGlvbiB0KG4pe2lmKGlbbl0pcmV0dXJuIGlbbl0uZXhwb3J0czt2YXIgcz1pW25dPXtpOm4sbDohMSxleHBvcnRzOnt9fTtyZXR1cm4gZVtuXS5jYWxsKHMuZXhwb3J0cyxzLHMuZXhwb3J0cyx0KSxzLmw9ITAscy5leHBvcnRzfXZhciBpPXt9O3JldHVybiB0Lm09ZSx0LmM9aSx0Lmk9ZnVuY3Rpb24oZSl7cmV0dXJuIGV9LHQuZD1mdW5jdGlvbihlLGksbil7dC5vKGUsaSl8fE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLGkse2NvbmZpZ3VyYWJsZTohMSxlbnVtZXJhYmxlOiEwLGdldDpufSl9LHQubj1mdW5jdGlvbihlKXt2YXIgaT1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gdC5kKGksXCJhXCIsaSksaX0sdC5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSx0LnA9XCIvXCIsdCh0LnM9NCl9KFtmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlLHQsaSl7cmV0dXJuIHQgaW4gZT9PYmplY3QuZGVmaW5lUHJvcGVydHkoZSx0LHt2YWx1ZTppLGVudW1lcmFibGU6ITAsY29uZmlndXJhYmxlOiEwLHdyaXRhYmxlOiEwfSk6ZVt0XT1pLGV9ZnVuY3Rpb24gcyhlKXtyZXR1cm4gMCE9PWUmJighKCFBcnJheS5pc0FycmF5KGUpfHwwIT09ZS5sZW5ndGgpfHwhZSl9ZnVuY3Rpb24gbyhlLHQpe3JldHVybiB2b2lkIDA9PT1lJiYoZT1cInVuZGVmaW5lZFwiKSxudWxsPT09ZSYmKGU9XCJudWxsXCIpLCExPT09ZSYmKGU9XCJmYWxzZVwiKSwtMSE9PWUudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpLmluZGV4T2YodC50cmltKCkpfWZ1bmN0aW9uIGwoZSx0LGksbil7cmV0dXJuIGUuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiBvKG4oZSxpKSx0KX0pfWZ1bmN0aW9uIHIoZSl7cmV0dXJuIGUuZmlsdGVyKGZ1bmN0aW9uKGUpe3JldHVybiFlLiRpc0xhYmVsfSl9ZnVuY3Rpb24gYShlLHQpe3JldHVybiBmdW5jdGlvbihpKXtyZXR1cm4gaS5yZWR1Y2UoZnVuY3Rpb24oaSxuKXtyZXR1cm4gbltlXSYmbltlXS5sZW5ndGg/KGkucHVzaCh7JGdyb3VwTGFiZWw6blt0XSwkaXNMYWJlbDohMH0pLGkuY29uY2F0KG5bZV0pKTppfSxbXSl9fWZ1bmN0aW9uIHUoZSx0LGkscyxvKXtyZXR1cm4gZnVuY3Rpb24ocil7cmV0dXJuIHIubWFwKGZ1bmN0aW9uKHIpe3ZhciBhO2lmKCFyW2ldKXJldHVybiBjb25zb2xlLndhcm4oXCJPcHRpb25zIHBhc3NlZCB0byB2dWUtbXVsdGlzZWxlY3QgZG8gbm90IGNvbnRhaW4gZ3JvdXBzLCBkZXNwaXRlIHRoZSBjb25maWcuXCIpLFtdO3ZhciB1PWwocltpXSxlLHQsbyk7cmV0dXJuIHUubGVuZ3RoPyhhPXt9LG4oYSxzLHJbc10pLG4oYSxpLHUpLGEpOltdfSl9fU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9LGg9aSgyKSxwPWZ1bmN0aW9uKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX0oaCksZD1mdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoLHQ9QXJyYXkoZSksaT0wO2k8ZTtpKyspdFtpXT1hcmd1bWVudHNbaV07cmV0dXJuIGZ1bmN0aW9uKGUpe3JldHVybiB0LnJlZHVjZShmdW5jdGlvbihlLHQpe3JldHVybiB0KGUpfSxlKX19O3QuZGVmYXVsdD17ZGF0YTpmdW5jdGlvbigpe3JldHVybntzZWFyY2g6XCJcIixpc09wZW46ITEscHJlZmZlcmVkT3BlbkRpcmVjdGlvbjpcImJlbG93XCIsb3B0aW1pemVkSGVpZ2h0OnRoaXMubWF4SGVpZ2h0LGludGVybmFsVmFsdWU6dGhpcy52YWx1ZXx8MD09PXRoaXMudmFsdWU/KDAscC5kZWZhdWx0KShBcnJheS5pc0FycmF5KHRoaXMudmFsdWUpP3RoaXMudmFsdWU6W3RoaXMudmFsdWVdKTpbXX19LHByb3BzOntpbnRlcm5hbFNlYXJjaDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LG9wdGlvbnM6e3R5cGU6QXJyYXkscmVxdWlyZWQ6ITB9LG11bHRpcGxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sdmFsdWU6e3R5cGU6bnVsbCxkZWZhdWx0OmZ1bmN0aW9uKCl7cmV0dXJuW119fSx0cmFja0J5Ont0eXBlOlN0cmluZ30sbGFiZWw6e3R5cGU6U3RyaW5nfSxzZWFyY2hhYmxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sY2xlYXJPblNlbGVjdDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGhpZGVTZWxlY3RlZDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LHBsYWNlaG9sZGVyOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiU2VsZWN0IG9wdGlvblwifSxhbGxvd0VtcHR5Ont0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0scmVzZXRBZnRlcjp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LGNsb3NlT25TZWxlY3Q6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxjdXN0b21MYWJlbDp7dHlwZTpGdW5jdGlvbixkZWZhdWx0OmZ1bmN0aW9uKGUsdCl7cmV0dXJuIHMoZSk/XCJcIjp0P2VbdF06ZX19LHRhZ2dhYmxlOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sdGFnUGxhY2Vob2xkZXI6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJQcmVzcyBlbnRlciB0byBjcmVhdGUgYSB0YWdcIn0sdGFnUG9zaXRpb246e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJ0b3BcIn0sbWF4Ont0eXBlOltOdW1iZXIsQm9vbGVhbl0sZGVmYXVsdDohMX0saWQ6e2RlZmF1bHQ6bnVsbH0sb3B0aW9uc0xpbWl0Ont0eXBlOk51bWJlcixkZWZhdWx0OjFlM30sZ3JvdXBWYWx1ZXM6e3R5cGU6U3RyaW5nfSxncm91cExhYmVsOnt0eXBlOlN0cmluZ30sYmxvY2tLZXlzOnt0eXBlOkFycmF5LGRlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm5bXX19LHByZXNlcnZlU2VhcmNoOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX19LG1vdW50ZWQ6ZnVuY3Rpb24oKXt0aGlzLm11bHRpcGxlfHx0aGlzLmNsZWFyT25TZWxlY3R8fGNvbnNvbGUud2FybihcIltWdWUtTXVsdGlzZWxlY3Qgd2Fybl06IENsZWFyT25TZWxlY3QgYW5kIE11bHRpcGxlIHByb3BzIGNhbuKAmXQgYmUgYm90aCBzZXQgdG8gZmFsc2UuXCIpLCF0aGlzLm11bHRpcGxlJiZ0aGlzLm1heCYmY29uc29sZS53YXJuKFwiW1Z1ZS1NdWx0aXNlbGVjdCB3YXJuXTogTWF4IHByb3Agc2hvdWxkIG5vdCBiZSB1c2VkIHdoZW4gcHJvcCBNdWx0aXBsZSBlcXVhbHMgZmFsc2UuXCIpfSxjb21wdXRlZDp7ZmlsdGVyZWRPcHRpb25zOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcy5zZWFyY2h8fFwiXCIsdD1lLnRvTG93ZXJDYXNlKCkudHJpbSgpLGk9dGhpcy5vcHRpb25zLmNvbmNhdCgpO3JldHVybiBpPXRoaXMuaW50ZXJuYWxTZWFyY2g/dGhpcy5ncm91cFZhbHVlcz90aGlzLmZpbHRlckFuZEZsYXQoaSx0LHRoaXMubGFiZWwpOmwoaSx0LHRoaXMubGFiZWwsdGhpcy5jdXN0b21MYWJlbCk6dGhpcy5ncm91cFZhbHVlcz9hKHRoaXMuZ3JvdXBWYWx1ZXMsdGhpcy5ncm91cExhYmVsKShpKTppLGk9dGhpcy5oaWRlU2VsZWN0ZWQ/aS5maWx0ZXIodGhpcy5pc05vdFNlbGVjdGVkKTppLHRoaXMudGFnZ2FibGUmJnQubGVuZ3RoJiYhdGhpcy5pc0V4aXN0aW5nT3B0aW9uKHQpJiYoXCJib3R0b21cIj09PXRoaXMudGFnUG9zaXRpb24/aS5wdXNoKHtpc1RhZzohMCxsYWJlbDplfSk6aS51bnNoaWZ0KHtpc1RhZzohMCxsYWJlbDplfSkpLGkuc2xpY2UoMCx0aGlzLm9wdGlvbnNMaW1pdCl9LHZhbHVlS2V5czpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuIHRoaXMudHJhY2tCeT90aGlzLmludGVybmFsVmFsdWUubWFwKGZ1bmN0aW9uKHQpe3JldHVybiB0W2UudHJhY2tCeV19KTp0aGlzLmludGVybmFsVmFsdWV9LG9wdGlvbktleXM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzO3JldHVybih0aGlzLmdyb3VwVmFsdWVzP3RoaXMuZmxhdEFuZFN0cmlwKHRoaXMub3B0aW9ucyk6dGhpcy5vcHRpb25zKS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIGUuY3VzdG9tTGFiZWwodCxlLmxhYmVsKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCl9KX0sY3VycmVudE9wdGlvbkxhYmVsOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubXVsdGlwbGU/dGhpcy5zZWFyY2hhYmxlP1wiXCI6dGhpcy5wbGFjZWhvbGRlcjp0aGlzLmludGVybmFsVmFsdWUubGVuZ3RoP3RoaXMuZ2V0T3B0aW9uTGFiZWwodGhpcy5pbnRlcm5hbFZhbHVlWzBdKTp0aGlzLnNlYXJjaGFibGU/XCJcIjp0aGlzLnBsYWNlaG9sZGVyfX0sd2F0Y2g6e2ludGVybmFsVmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLnJlc2V0QWZ0ZXImJnRoaXMuaW50ZXJuYWxWYWx1ZS5sZW5ndGgmJih0aGlzLnNlYXJjaD1cIlwiLHRoaXMuaW50ZXJuYWxWYWx1ZT1bXSl9LHNlYXJjaDpmdW5jdGlvbigpe3RoaXMuJGVtaXQoXCJzZWFyY2gtY2hhbmdlXCIsdGhpcy5zZWFyY2gsdGhpcy5pZCl9LHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuaW50ZXJuYWxWYWx1ZT10aGlzLmdldEludGVybmFsVmFsdWUoZSl9fSxtZXRob2RzOntnZXRWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm11bHRpcGxlPygwLHAuZGVmYXVsdCkodGhpcy5pbnRlcm5hbFZhbHVlKTowPT09dGhpcy5pbnRlcm5hbFZhbHVlLmxlbmd0aD9udWxsOigwLHAuZGVmYXVsdCkodGhpcy5pbnRlcm5hbFZhbHVlWzBdKX0sZ2V0SW50ZXJuYWxWYWx1ZTpmdW5jdGlvbihlKXtyZXR1cm4gbnVsbD09PWV8fHZvaWQgMD09PWU/W106dGhpcy5tdWx0aXBsZT8oMCxwLmRlZmF1bHQpKGUpOigwLHAuZGVmYXVsdCkoW2VdKX0sZmlsdGVyQW5kRmxhdDpmdW5jdGlvbihlLHQsaSl7cmV0dXJuIGQodSh0LGksdGhpcy5ncm91cFZhbHVlcyx0aGlzLmdyb3VwTGFiZWwsdGhpcy5jdXN0b21MYWJlbCksYSh0aGlzLmdyb3VwVmFsdWVzLHRoaXMuZ3JvdXBMYWJlbCkpKGUpfSxmbGF0QW5kU3RyaXA6ZnVuY3Rpb24oZSl7cmV0dXJuIGQoYSh0aGlzLmdyb3VwVmFsdWVzLHRoaXMuZ3JvdXBMYWJlbCkscikoZSl9LHVwZGF0ZVNlYXJjaDpmdW5jdGlvbihlKXt0aGlzLnNlYXJjaD1lfSxpc0V4aXN0aW5nT3B0aW9uOmZ1bmN0aW9uKGUpe3JldHVybiEhdGhpcy5vcHRpb25zJiZ0aGlzLm9wdGlvbktleXMuaW5kZXhPZihlKT4tMX0saXNTZWxlY3RlZDpmdW5jdGlvbihlKXt2YXIgdD10aGlzLnRyYWNrQnk/ZVt0aGlzLnRyYWNrQnldOmU7cmV0dXJuIHRoaXMudmFsdWVLZXlzLmluZGV4T2YodCk+LTF9LGlzTm90U2VsZWN0ZWQ6ZnVuY3Rpb24oZSl7cmV0dXJuIXRoaXMuaXNTZWxlY3RlZChlKX0sZ2V0T3B0aW9uTGFiZWw6ZnVuY3Rpb24oZSl7aWYocyhlKSlyZXR1cm5cIlwiO2lmKGUuaXNUYWcpcmV0dXJuIGUubGFiZWw7aWYoZS4kaXNMYWJlbClyZXR1cm4gZS4kZ3JvdXBMYWJlbDt2YXIgdD10aGlzLmN1c3RvbUxhYmVsKGUsdGhpcy5sYWJlbCk7cmV0dXJuIHModCk/XCJcIjp0fSxzZWxlY3Q6ZnVuY3Rpb24oZSx0KXtpZighKC0xIT09dGhpcy5ibG9ja0tleXMuaW5kZXhPZih0KXx8dGhpcy5kaXNhYmxlZHx8ZS4kaXNMYWJlbHx8ZS4kaXNEaXNhYmxlZCkmJighdGhpcy5tYXh8fCF0aGlzLm11bHRpcGxlfHx0aGlzLmludGVybmFsVmFsdWUubGVuZ3RoIT09dGhpcy5tYXgpJiYoXCJUYWJcIiE9PXR8fHRoaXMucG9pbnRlckRpcnR5KSl7aWYoZS5pc1RhZyl0aGlzLiRlbWl0KFwidGFnXCIsZS5sYWJlbCx0aGlzLmlkKSx0aGlzLnNlYXJjaD1cIlwiLHRoaXMuY2xvc2VPblNlbGVjdCYmIXRoaXMubXVsdGlwbGUmJnRoaXMuZGVhY3RpdmF0ZSgpO2Vsc2V7aWYodGhpcy5pc1NlbGVjdGVkKGUpKXJldHVybiB2b2lkKFwiVGFiXCIhPT10JiZ0aGlzLnJlbW92ZUVsZW1lbnQoZSkpO3RoaXMubXVsdGlwbGU/dGhpcy5pbnRlcm5hbFZhbHVlLnB1c2goZSk6dGhpcy5pbnRlcm5hbFZhbHVlPVtlXSx0aGlzLiRlbWl0KFwic2VsZWN0XCIsKDAscC5kZWZhdWx0KShlKSx0aGlzLmlkKSx0aGlzLiRlbWl0KFwiaW5wdXRcIix0aGlzLmdldFZhbHVlKCksdGhpcy5pZCksdGhpcy5jbGVhck9uU2VsZWN0JiYodGhpcy5zZWFyY2g9XCJcIil9dGhpcy5jbG9zZU9uU2VsZWN0JiZ0aGlzLmRlYWN0aXZhdGUoKX19LHJlbW92ZUVsZW1lbnQ6ZnVuY3Rpb24oZSl7dmFyIHQ9IShhcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXSl8fGFyZ3VtZW50c1sxXTtpZighdGhpcy5kaXNhYmxlZCl7aWYoIXRoaXMuYWxsb3dFbXB0eSYmdGhpcy5pbnRlcm5hbFZhbHVlLmxlbmd0aDw9MSlyZXR1cm4gdm9pZCB0aGlzLmRlYWN0aXZhdGUoKTt2YXIgaT1cIm9iamVjdFwiPT09KHZvaWQgMD09PWU/XCJ1bmRlZmluZWRcIjpjKGUpKT90aGlzLnZhbHVlS2V5cy5pbmRleE9mKGVbdGhpcy50cmFja0J5XSk6dGhpcy52YWx1ZUtleXMuaW5kZXhPZihlKTt0aGlzLmludGVybmFsVmFsdWUuc3BsaWNlKGksMSksdGhpcy4kZW1pdChcImlucHV0XCIsdGhpcy5nZXRWYWx1ZSgpLHRoaXMuaWQpLHRoaXMuJGVtaXQoXCJyZW1vdmVcIiwoMCxwLmRlZmF1bHQpKGUpLHRoaXMuaWQpLHRoaXMuY2xvc2VPblNlbGVjdCYmdCYmdGhpcy5kZWFjdGl2YXRlKCl9fSxyZW1vdmVMYXN0RWxlbWVudDpmdW5jdGlvbigpey0xPT09dGhpcy5ibG9ja0tleXMuaW5kZXhPZihcIkRlbGV0ZVwiKSYmMD09PXRoaXMuc2VhcmNoLmxlbmd0aCYmQXJyYXkuaXNBcnJheSh0aGlzLmludGVybmFsVmFsdWUpJiZ0aGlzLnJlbW92ZUVsZW1lbnQodGhpcy5pbnRlcm5hbFZhbHVlW3RoaXMuaW50ZXJuYWxWYWx1ZS5sZW5ndGgtMV0sITEpfSxhY3RpdmF0ZTpmdW5jdGlvbigpe3ZhciBlPXRoaXM7dGhpcy5pc09wZW58fHRoaXMuZGlzYWJsZWR8fCh0aGlzLmFkanVzdFBvc2l0aW9uKCksdGhpcy5ncm91cFZhbHVlcyYmMD09PXRoaXMucG9pbnRlciYmdGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoJiYodGhpcy5wb2ludGVyPTEpLHRoaXMuaXNPcGVuPSEwLHRoaXMuc2VhcmNoYWJsZT8odGhpcy5wcmVzZXJ2ZVNlYXJjaHx8KHRoaXMuc2VhcmNoPVwiXCIpLHRoaXMuJG5leHRUaWNrKGZ1bmN0aW9uKCl7cmV0dXJuIGUuJHJlZnMuc2VhcmNoLmZvY3VzKCl9KSk6dGhpcy4kZWwuZm9jdXMoKSx0aGlzLiRlbWl0KFwib3BlblwiLHRoaXMuaWQpKX0sZGVhY3RpdmF0ZTpmdW5jdGlvbigpe3RoaXMuaXNPcGVuJiYodGhpcy5pc09wZW49ITEsdGhpcy5zZWFyY2hhYmxlP3RoaXMuJHJlZnMuc2VhcmNoLmJsdXIoKTp0aGlzLiRlbC5ibHVyKCksdGhpcy5wcmVzZXJ2ZVNlYXJjaHx8KHRoaXMuc2VhcmNoPVwiXCIpLHRoaXMuJGVtaXQoXCJjbG9zZVwiLHRoaXMuZ2V0VmFsdWUoKSx0aGlzLmlkKSl9LHRvZ2dsZTpmdW5jdGlvbigpe3RoaXMuaXNPcGVuP3RoaXMuZGVhY3RpdmF0ZSgpOnRoaXMuYWN0aXZhdGUoKX0sYWRqdXN0UG9zaXRpb246ZnVuY3Rpb24oKXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93KXt2YXIgZT10aGlzLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AsdD13aW5kb3cuaW5uZXJIZWlnaHQtdGhpcy4kZWwuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuYm90dG9tO3Q+dGhpcy5tYXhIZWlnaHR8fHQ+ZXx8XCJiZWxvd1wiPT09dGhpcy5vcGVuRGlyZWN0aW9ufHxcImJvdHRvbVwiPT09dGhpcy5vcGVuRGlyZWN0aW9uPyh0aGlzLnByZWZmZXJlZE9wZW5EaXJlY3Rpb249XCJiZWxvd1wiLHRoaXMub3B0aW1pemVkSGVpZ2h0PU1hdGgubWluKHQtNDAsdGhpcy5tYXhIZWlnaHQpKToodGhpcy5wcmVmZmVyZWRPcGVuRGlyZWN0aW9uPVwiYWJvdmVcIix0aGlzLm9wdGltaXplZEhlaWdodD1NYXRoLm1pbihlLTQwLHRoaXMubWF4SGVpZ2h0KSl9fX19fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWZhdWx0PXtkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3BvaW50ZXI6MCxwb2ludGVyRGlydHk6ITF9fSxwcm9wczp7c2hvd1BvaW50ZXI6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxvcHRpb25IZWlnaHQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6NDB9fSxjb21wdXRlZDp7cG9pbnRlclBvc2l0aW9uOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMucG9pbnRlcip0aGlzLm9wdGlvbkhlaWdodH0sdmlzaWJsZUVsZW1lbnRzOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW1pemVkSGVpZ2h0L3RoaXMub3B0aW9uSGVpZ2h0fX0sd2F0Y2g6e2ZpbHRlcmVkT3B0aW9uczpmdW5jdGlvbigpe3RoaXMucG9pbnRlckFkanVzdCgpfSxpc09wZW46ZnVuY3Rpb24oKXt0aGlzLnBvaW50ZXJEaXJ0eT0hMX19LG1ldGhvZHM6e29wdGlvbkhpZ2hsaWdodDpmdW5jdGlvbihlLHQpe3JldHVybntcIm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodFwiOmU9PT10aGlzLnBvaW50ZXImJnRoaXMuc2hvd1BvaW50ZXIsXCJtdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZFwiOnRoaXMuaXNTZWxlY3RlZCh0KX19LGFkZFBvaW50ZXJFbGVtZW50OmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiRW50ZXJcIix0PWUua2V5O3RoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aD4wJiZ0aGlzLnNlbGVjdCh0aGlzLmZpbHRlcmVkT3B0aW9uc1t0aGlzLnBvaW50ZXJdLHQpLHRoaXMucG9pbnRlclJlc2V0KCl9LHBvaW50ZXJGb3J3YXJkOmZ1bmN0aW9uKCl7dGhpcy5wb2ludGVyPHRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aC0xJiYodGhpcy5wb2ludGVyKyssdGhpcy4kcmVmcy5saXN0LnNjcm9sbFRvcDw9dGhpcy5wb2ludGVyUG9zaXRpb24tKHRoaXMudmlzaWJsZUVsZW1lbnRzLTEpKnRoaXMub3B0aW9uSGVpZ2h0JiYodGhpcy4kcmVmcy5saXN0LnNjcm9sbFRvcD10aGlzLnBvaW50ZXJQb3NpdGlvbi0odGhpcy52aXNpYmxlRWxlbWVudHMtMSkqdGhpcy5vcHRpb25IZWlnaHQpLHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMucG9pbnRlcl0uJGlzTGFiZWwmJnRoaXMucG9pbnRlckZvcndhcmQoKSksdGhpcy5wb2ludGVyRGlydHk9ITB9LHBvaW50ZXJCYWNrd2FyZDpmdW5jdGlvbigpe3RoaXMucG9pbnRlcj4wPyh0aGlzLnBvaW50ZXItLSx0aGlzLiRyZWZzLmxpc3Quc2Nyb2xsVG9wPj10aGlzLnBvaW50ZXJQb3NpdGlvbiYmKHRoaXMuJHJlZnMubGlzdC5zY3JvbGxUb3A9dGhpcy5wb2ludGVyUG9zaXRpb24pLHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMucG9pbnRlcl0uJGlzTGFiZWwmJnRoaXMucG9pbnRlckJhY2t3YXJkKCkpOnRoaXMuZmlsdGVyZWRPcHRpb25zWzBdLiRpc0xhYmVsJiZ0aGlzLnBvaW50ZXJGb3J3YXJkKCksdGhpcy5wb2ludGVyRGlydHk9ITB9LHBvaW50ZXJSZXNldDpmdW5jdGlvbigpe3RoaXMuY2xvc2VPblNlbGVjdCYmKHRoaXMucG9pbnRlcj0wLHRoaXMuJHJlZnMubGlzdCYmKHRoaXMuJHJlZnMubGlzdC5zY3JvbGxUb3A9MCkpfSxwb2ludGVyQWRqdXN0OmZ1bmN0aW9uKCl7dGhpcy5wb2ludGVyPj10aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgtMSYmKHRoaXMucG9pbnRlcj10aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGg/dGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoLTE6MCl9LHBvaW50ZXJTZXQ6ZnVuY3Rpb24oZSl7dGhpcy5wb2ludGVyPWUsdGhpcy5wb2ludGVyRGlydHk9ITB9fX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe2lmKEFycmF5LmlzQXJyYXkoZSkpcmV0dXJuIGUubWFwKG4pO2lmKGUmJlwib2JqZWN0XCI9PT0odm9pZCAwPT09ZT9cInVuZGVmaW5lZFwiOnMoZSkpKXtmb3IodmFyIHQ9e30saT1PYmplY3Qua2V5cyhlKSxvPTAsbD1pLmxlbmd0aDtvPGw7bysrKXt2YXIgcj1pW29dO3Rbcl09bihlW3JdKX1yZXR1cm4gdH1yZXR1cm4gZX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1cImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJlwic3ltYm9sXCI9PXR5cGVvZiBTeW1ib2wuaXRlcmF0b3I/ZnVuY3Rpb24oZSl7cmV0dXJuIHR5cGVvZiBlfTpmdW5jdGlvbihlKXtyZXR1cm4gZSYmXCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZlLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZlIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBlfTt0LmRlZmF1bHQ9bn0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7aSg2KX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1pKDUpLG89aS5uKHMpLGw9aSg4KSxyPWkoNyksYT1uLHU9cihvLmEsbC5hLCExLGEsbnVsbCxudWxsKTt0LmRlZmF1bHQ9dS5leHBvcnRzfSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSksdC5kZWVwQ2xvbmU9dC5wb2ludGVyTWl4aW49dC5tdWx0aXNlbGVjdE1peGluPXQuTXVsdGlzZWxlY3Q9dm9pZCAwO3ZhciBzPWkoMyksbz1uKHMpLGw9aSgwKSxyPW4obCksYT1pKDEpLHU9bihhKSxjPWkoMiksaD1uKGMpO3QuZGVmYXVsdD1vLmRlZmF1bHQsdC5NdWx0aXNlbGVjdD1vLmRlZmF1bHQsdC5tdWx0aXNlbGVjdE1peGluPXIuZGVmYXVsdCx0LnBvaW50ZXJNaXhpbj11LmRlZmF1bHQsdC5kZWVwQ2xvbmU9aC5kZWZhdWx0fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtyZXR1cm4gZSYmZS5fX2VzTW9kdWxlP2U6e2RlZmF1bHQ6ZX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIHM9aSgwKSxvPW4ocyksbD1pKDEpLHI9bihsKTt0LmRlZmF1bHQ9e25hbWU6XCJ2dWUtbXVsdGlzZWxlY3RcIixtaXhpbnM6W28uZGVmYXVsdCxyLmRlZmF1bHRdLHByb3BzOntuYW1lOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiXCJ9LHNlbGVjdExhYmVsOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiUHJlc3MgZW50ZXIgdG8gc2VsZWN0XCJ9LHNlbGVjdGVkTGFiZWw6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJTZWxlY3RlZFwifSxkZXNlbGVjdExhYmVsOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiUHJlc3MgZW50ZXIgdG8gcmVtb3ZlXCJ9LHNob3dMYWJlbHM6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxsaW1pdDp7dHlwZTpOdW1iZXIsZGVmYXVsdDo5OTk5OX0sbWF4SGVpZ2h0Ont0eXBlOk51bWJlcixkZWZhdWx0OjMwMH0sbGltaXRUZXh0Ont0eXBlOkZ1bmN0aW9uLGRlZmF1bHQ6ZnVuY3Rpb24oZSl7cmV0dXJuXCJhbmQgXCIrZStcIiBtb3JlXCJ9fSxsb2FkaW5nOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sZGlzYWJsZWQ6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxvcGVuRGlyZWN0aW9uOnt0eXBlOlN0cmluZyxkZWZhdWx0OlwiXCJ9LHNob3dOb1Jlc3VsdHM6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSx0YWJpbmRleDp7dHlwZTpOdW1iZXIsZGVmYXVsdDowfX0sY29tcHV0ZWQ6e3Zpc2libGVWYWx1ZTpmdW5jdGlvbigpe3JldHVybiB0aGlzLm11bHRpcGxlP3RoaXMuaW50ZXJuYWxWYWx1ZS5zbGljZSgwLHRoaXMubGltaXQpOltdfSxkZXNlbGVjdExhYmVsVGV4dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNob3dMYWJlbHM/dGhpcy5kZXNlbGVjdExhYmVsOlwiXCJ9LHNlbGVjdExhYmVsVGV4dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNob3dMYWJlbHM/dGhpcy5zZWxlY3RMYWJlbDpcIlwifSxzZWxlY3RlZExhYmVsVGV4dDpmdW5jdGlvbigpe3JldHVybiB0aGlzLnNob3dMYWJlbHM/dGhpcy5zZWxlY3RlZExhYmVsOlwiXCJ9LGlucHV0U3R5bGU6ZnVuY3Rpb24oKXtpZih0aGlzLm11bHRpcGxlJiZ0aGlzLnZhbHVlJiZ0aGlzLnZhbHVlLmxlbmd0aClyZXR1cm4gdGhpcy5pc09wZW4/e3dpZHRoOlwiYXV0b1wifTp7d2lkdGg6XCIwXCIscG9zaXRpb246XCJhYnNvbHV0ZVwifX0sY29udGVudFN0eWxlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMub3B0aW9ucy5sZW5ndGg/e2Rpc3BsYXk6XCJpbmxpbmUtYmxvY2tcIn06e2Rpc3BsYXk6XCJibG9ja1wifX0saXNBYm92ZTpmdW5jdGlvbigpe3JldHVyblwiYWJvdmVcIj09PXRoaXMub3BlbkRpcmVjdGlvbnx8XCJ0b3BcIj09PXRoaXMub3BlbkRpcmVjdGlvbnx8XCJiZWxvd1wiIT09dGhpcy5vcGVuRGlyZWN0aW9uJiZcImJvdHRvbVwiIT09dGhpcy5vcGVuRGlyZWN0aW9uJiZcImFib3ZlXCI9PT10aGlzLnByZWZmZXJlZE9wZW5EaXJlY3Rpb259fX19LGZ1bmN0aW9uKGUsdCl7fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlLHQsaSxuLHMsbyl7dmFyIGwscj1lPWV8fHt9LGE9dHlwZW9mIGUuZGVmYXVsdDtcIm9iamVjdFwiIT09YSYmXCJmdW5jdGlvblwiIT09YXx8KGw9ZSxyPWUuZGVmYXVsdCk7dmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2Ygcj9yLm9wdGlvbnM6cjt0JiYodS5yZW5kZXI9dC5yZW5kZXIsdS5zdGF0aWNSZW5kZXJGbnM9dC5zdGF0aWNSZW5kZXJGbnMsdS5fY29tcGlsZWQ9ITApLGkmJih1LmZ1bmN0aW9uYWw9ITApLHMmJih1Ll9zY29wZUlkPXMpO3ZhciBjO2lmKG8/KGM9ZnVuY3Rpb24oZSl7ZT1lfHx0aGlzLiR2bm9kZSYmdGhpcy4kdm5vZGUuc3NyQ29udGV4dHx8dGhpcy5wYXJlbnQmJnRoaXMucGFyZW50LiR2bm9kZSYmdGhpcy5wYXJlbnQuJHZub2RlLnNzckNvbnRleHQsZXx8XCJ1bmRlZmluZWRcIj09dHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX198fChlPV9fVlVFX1NTUl9DT05URVhUX18pLG4mJm4uY2FsbCh0aGlzLGUpLGUmJmUuX3JlZ2lzdGVyZWRDb21wb25lbnRzJiZlLl9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobyl9LHUuX3NzclJlZ2lzdGVyPWMpOm4mJihjPW4pLGMpe3ZhciBoPXUuZnVuY3Rpb25hbCxwPWg/dS5yZW5kZXI6dS5iZWZvcmVDcmVhdGU7aD8odS5faW5qZWN0U3R5bGVzPWMsdS5yZW5kZXI9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gYy5jYWxsKHQpLHAoZSx0KX0pOnUuYmVmb3JlQ3JlYXRlPXA/W10uY29uY2F0KHAsYyk6W2NdfXJldHVybntlc01vZHVsZTpsLGV4cG9ydHM6cixvcHRpb25zOnV9fX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO3ZhciBuPWZ1bmN0aW9uKCl7dmFyIGU9dGhpcyx0PWUuJGNyZWF0ZUVsZW1lbnQsaT1lLl9zZWxmLl9jfHx0O3JldHVybiBpKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RcIixjbGFzczp7XCJtdWx0aXNlbGVjdC0tYWN0aXZlXCI6ZS5pc09wZW4sXCJtdWx0aXNlbGVjdC0tZGlzYWJsZWRcIjplLmRpc2FibGVkLFwibXVsdGlzZWxlY3QtLWFib3ZlXCI6ZS5pc0Fib3ZlfSxhdHRyczp7dGFiaW5kZXg6ZS5zZWFyY2hhYmxlPy0xOmUudGFiaW5kZXh9LG9uOntmb2N1czpmdW5jdGlvbih0KXtlLmFjdGl2YXRlKCl9LGJsdXI6ZnVuY3Rpb24odCl7IWUuc2VhcmNoYWJsZSYmZS5kZWFjdGl2YXRlKCl9LGtleWRvd246W2Z1bmN0aW9uKHQpe3JldHVyblwiYnV0dG9uXCJpbiB0fHwhZS5fayh0LmtleUNvZGUsXCJkb3duXCIsNDAsdC5rZXkpP3QudGFyZ2V0IT09dC5jdXJyZW50VGFyZ2V0P251bGw6KHQucHJldmVudERlZmF1bHQoKSx2b2lkIGUucG9pbnRlckZvcndhcmQoKSk6bnVsbH0sZnVuY3Rpb24odCl7cmV0dXJuXCJidXR0b25cImluIHR8fCFlLl9rKHQua2V5Q29kZSxcInVwXCIsMzgsdC5rZXkpP3QudGFyZ2V0IT09dC5jdXJyZW50VGFyZ2V0P251bGw6KHQucHJldmVudERlZmF1bHQoKSx2b2lkIGUucG9pbnRlckJhY2t3YXJkKCkpOm51bGx9LGZ1bmN0aW9uKHQpe3JldHVyblwiYnV0dG9uXCJpbiB0fHwhZS5fayh0LmtleUNvZGUsXCJlbnRlclwiLDEzLHQua2V5KXx8IWUuX2sodC5rZXlDb2RlLFwidGFiXCIsOSx0LmtleSk/KHQuc3RvcFByb3BhZ2F0aW9uKCksdC50YXJnZXQhPT10LmN1cnJlbnRUYXJnZXQ/bnVsbDp2b2lkIGUuYWRkUG9pbnRlckVsZW1lbnQodCkpOm51bGx9XSxrZXl1cDpmdW5jdGlvbih0KXtpZighKFwiYnV0dG9uXCJpbiB0KSYmZS5fayh0LmtleUNvZGUsXCJlc2NcIiwyNyx0LmtleSkpcmV0dXJuIG51bGw7ZS5kZWFjdGl2YXRlKCl9fX0sW2UuX3QoXCJjYXJldFwiLFtpKFwiZGl2XCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3NlbGVjdFwiLG9uOnttb3VzZWRvd246ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCksZS50b2dnbGUoKX19fSldLHt0b2dnbGU6ZS50b2dnbGV9KSxlLl92KFwiIFwiKSxlLl90KFwiY2xlYXJcIixudWxsLHtzZWFyY2g6ZS5zZWFyY2h9KSxlLl92KFwiIFwiKSxpKFwiZGl2XCIse3JlZjpcInRhZ3NcIixzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X190YWdzXCJ9LFtpKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTplLnZpc2libGVWYWx1ZS5sZW5ndGg+MCxleHByZXNzaW9uOlwidmlzaWJsZVZhbHVlLmxlbmd0aCA+IDBcIn1dLHN0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3RhZ3Mtd3JhcFwifSxbZS5fbChlLnZpc2libGVWYWx1ZSxmdW5jdGlvbih0KXtyZXR1cm5bZS5fdChcInRhZ1wiLFtpKFwic3BhblwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X190YWdcIn0sW2koXCJzcGFuXCIse2RvbVByb3BzOnt0ZXh0Q29udGVudDplLl9zKGUuZ2V0T3B0aW9uTGFiZWwodCkpfX0pLGUuX3YoXCIgXCIpLGkoXCJpXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3RhZy1pY29uXCIsYXR0cnM6e1wiYXJpYS1oaWRkZW5cIjpcInRydWVcIix0YWJpbmRleDpcIjFcIn0sb246e2tleWRvd246ZnVuY3Rpb24oaSl7aWYoIShcImJ1dHRvblwiaW4gaSkmJmUuX2soaS5rZXlDb2RlLFwiZW50ZXJcIiwxMyxpLmtleSkpcmV0dXJuIG51bGw7aS5wcmV2ZW50RGVmYXVsdCgpLGUucmVtb3ZlRWxlbWVudCh0KX0sbW91c2Vkb3duOmZ1bmN0aW9uKGkpe2kucHJldmVudERlZmF1bHQoKSxlLnJlbW92ZUVsZW1lbnQodCl9fX0pXSldLHtvcHRpb246dCxzZWFyY2g6ZS5zZWFyY2gscmVtb3ZlOmUucmVtb3ZlRWxlbWVudH0pXX0pXSwyKSxlLl92KFwiIFwiKSxlLmludGVybmFsVmFsdWUmJmUuaW50ZXJuYWxWYWx1ZS5sZW5ndGg+ZS5saW1pdD9baShcInN0cm9uZ1wiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19zdHJvbmdcIixkb21Qcm9wczp7dGV4dENvbnRlbnQ6ZS5fcyhlLmxpbWl0VGV4dChlLmludGVybmFsVmFsdWUubGVuZ3RoLWUubGltaXQpKX19KV06ZS5fZSgpLGUuX3YoXCIgXCIpLGkoXCJ0cmFuc2l0aW9uXCIse2F0dHJzOntuYW1lOlwibXVsdGlzZWxlY3RfX2xvYWRpbmdcIn19LFtlLl90KFwibG9hZGluZ1wiLFtpKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTplLmxvYWRpbmcsZXhwcmVzc2lvbjpcImxvYWRpbmdcIn1dLHN0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3NwaW5uZXJcIn0pXSldLDIpLGUuX3YoXCIgXCIpLGUuc2VhcmNoYWJsZT9pKFwiaW5wdXRcIix7cmVmOlwic2VhcmNoXCIsc3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9faW5wdXRcIixzdHlsZTplLmlucHV0U3R5bGUsYXR0cnM6e25hbWU6ZS5uYW1lLGlkOmUuaWQsdHlwZTpcInRleHRcIixhdXRvY29tcGxldGU6XCJvZmZcIixwbGFjZWhvbGRlcjplLnBsYWNlaG9sZGVyLGRpc2FibGVkOmUuZGlzYWJsZWQsdGFiaW5kZXg6ZS50YWJpbmRleH0sZG9tUHJvcHM6e3ZhbHVlOmUuaXNPcGVuP2Uuc2VhcmNoOmUuY3VycmVudE9wdGlvbkxhYmVsfSxvbjp7aW5wdXQ6ZnVuY3Rpb24odCl7ZS51cGRhdGVTZWFyY2godC50YXJnZXQudmFsdWUpfSxmb2N1czpmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksZS5hY3RpdmF0ZSgpfSxibHVyOmZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxlLmRlYWN0aXZhdGUoKX0sa2V5dXA6ZnVuY3Rpb24odCl7aWYoIShcImJ1dHRvblwiaW4gdCkmJmUuX2sodC5rZXlDb2RlLFwiZXNjXCIsMjcsdC5rZXkpKXJldHVybiBudWxsO2UuZGVhY3RpdmF0ZSgpfSxrZXlkb3duOltmdW5jdGlvbih0KXtpZighKFwiYnV0dG9uXCJpbiB0KSYmZS5fayh0LmtleUNvZGUsXCJkb3duXCIsNDAsdC5rZXkpKXJldHVybiBudWxsO3QucHJldmVudERlZmF1bHQoKSxlLnBvaW50ZXJGb3J3YXJkKCl9LGZ1bmN0aW9uKHQpe2lmKCEoXCJidXR0b25cImluIHQpJiZlLl9rKHQua2V5Q29kZSxcInVwXCIsMzgsdC5rZXkpKXJldHVybiBudWxsO3QucHJldmVudERlZmF1bHQoKSxlLnBvaW50ZXJCYWNrd2FyZCgpfSxmdW5jdGlvbih0KXtyZXR1cm5cImJ1dHRvblwiaW4gdHx8IWUuX2sodC5rZXlDb2RlLFwiZW50ZXJcIiwxMyx0LmtleSk/KHQucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpLHQudGFyZ2V0IT09dC5jdXJyZW50VGFyZ2V0P251bGw6dm9pZCBlLmFkZFBvaW50ZXJFbGVtZW50KHQpKTpudWxsfSxmdW5jdGlvbih0KXtpZighKFwiYnV0dG9uXCJpbiB0KSYmZS5fayh0LmtleUNvZGUsXCJkZWxldGVcIixbOCw0Nl0sdC5rZXkpKXJldHVybiBudWxsO3Quc3RvcFByb3BhZ2F0aW9uKCksZS5yZW1vdmVMYXN0RWxlbWVudCgpfV19fSk6ZS5fZSgpLGUuX3YoXCIgXCIpLGUuc2VhcmNoYWJsZT9lLl9lKCk6aShcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fc2luZ2xlXCIsZG9tUHJvcHM6e3RleHRDb250ZW50OmUuX3MoZS5jdXJyZW50T3B0aW9uTGFiZWwpfSxvbjp7bW91c2Vkb3duOmZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxlLnRvZ2dsZSh0KX19fSldLDIpLGUuX3YoXCIgXCIpLGkoXCJ0cmFuc2l0aW9uXCIse2F0dHJzOntuYW1lOlwibXVsdGlzZWxlY3RcIn19LFtpKFwiZGl2XCIse2RpcmVjdGl2ZXM6W3tuYW1lOlwic2hvd1wiLHJhd05hbWU6XCJ2LXNob3dcIix2YWx1ZTplLmlzT3BlbixleHByZXNzaW9uOlwiaXNPcGVuXCJ9XSxyZWY6XCJsaXN0XCIsc3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVyXCIsc3R5bGU6e21heEhlaWdodDplLm9wdGltaXplZEhlaWdodCtcInB4XCJ9LG9uOntmb2N1czplLmFjdGl2YXRlLG1vdXNlZG93bjpmdW5jdGlvbihlKXtlLnByZXZlbnREZWZhdWx0KCl9fX0sW2koXCJ1bFwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19jb250ZW50XCIsc3R5bGU6ZS5jb250ZW50U3R5bGV9LFtlLl90KFwiYmVmb3JlTGlzdFwiKSxlLl92KFwiIFwiKSxlLm11bHRpcGxlJiZlLm1heD09PWUuaW50ZXJuYWxWYWx1ZS5sZW5ndGg/aShcImxpXCIsW2koXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX29wdGlvblwifSxbZS5fdChcIm1heEVsZW1lbnRzXCIsW2UuX3YoXCJNYXhpbXVtIG9mIFwiK2UuX3MoZS5tYXgpK1wiIG9wdGlvbnMgc2VsZWN0ZWQuIEZpcnN0IHJlbW92ZSBhIHNlbGVjdGVkIG9wdGlvbiB0byBzZWxlY3QgYW5vdGhlci5cIildKV0sMildKTplLl9lKCksZS5fdihcIiBcIiksIWUubWF4fHxlLmludGVybmFsVmFsdWUubGVuZ3RoPGUubWF4P2UuX2woZS5maWx0ZXJlZE9wdGlvbnMsZnVuY3Rpb24odCxuKXtyZXR1cm4gaShcImxpXCIse2tleTpuLHN0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX2VsZW1lbnRcIn0sW3QmJih0LiRpc0xhYmVsfHx0LiRpc0Rpc2FibGVkKT9lLl9lKCk6aShcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fb3B0aW9uXCIsY2xhc3M6ZS5vcHRpb25IaWdobGlnaHQobix0KSxhdHRyczp7XCJkYXRhLXNlbGVjdFwiOnQmJnQuaXNUYWc/ZS50YWdQbGFjZWhvbGRlcjplLnNlbGVjdExhYmVsVGV4dCxcImRhdGEtc2VsZWN0ZWRcIjplLnNlbGVjdGVkTGFiZWxUZXh0LFwiZGF0YS1kZXNlbGVjdFwiOmUuZGVzZWxlY3RMYWJlbFRleHR9LG9uOntjbGljazpmdW5jdGlvbihpKXtpLnN0b3BQcm9wYWdhdGlvbigpLGUuc2VsZWN0KHQpfSxtb3VzZWVudGVyOmZ1bmN0aW9uKHQpe2lmKHQudGFyZ2V0IT09dC5jdXJyZW50VGFyZ2V0KXJldHVybiBudWxsO2UucG9pbnRlclNldChuKX19fSxbZS5fdChcIm9wdGlvblwiLFtpKFwic3BhblwiLFtlLl92KGUuX3MoZS5nZXRPcHRpb25MYWJlbCh0KSkpXSldLHtvcHRpb246dCxzZWFyY2g6ZS5zZWFyY2h9KV0sMiksZS5fdihcIiBcIiksdCYmKHQuJGlzTGFiZWx8fHQuJGlzRGlzYWJsZWQpP2koXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX29wdGlvbiBtdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZFwiLGNsYXNzOmUub3B0aW9uSGlnaGxpZ2h0KG4sdCl9LFtlLl90KFwib3B0aW9uXCIsW2koXCJzcGFuXCIsW2UuX3YoZS5fcyhlLmdldE9wdGlvbkxhYmVsKHQpKSldKV0se29wdGlvbjp0LHNlYXJjaDplLnNlYXJjaH0pXSwyKTplLl9lKCldKX0pOmUuX2UoKSxlLl92KFwiIFwiKSxpKFwibGlcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOmUuc2hvd05vUmVzdWx0cyYmMD09PWUuZmlsdGVyZWRPcHRpb25zLmxlbmd0aCYmZS5zZWFyY2gmJiFlLmxvYWRpbmcsZXhwcmVzc2lvbjpcInNob3dOb1Jlc3VsdHMgJiYgKGZpbHRlcmVkT3B0aW9ucy5sZW5ndGggPT09IDAgJiYgc2VhcmNoICYmICFsb2FkaW5nKVwifV19LFtpKFwic3BhblwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19vcHRpb25cIn0sW2UuX3QoXCJub1Jlc3VsdFwiLFtlLl92KFwiTm8gZWxlbWVudHMgZm91bmQuIENvbnNpZGVyIGNoYW5naW5nIHRoZSBzZWFyY2ggcXVlcnkuXCIpXSldLDIpXSksZS5fdihcIiBcIiksZS5fdChcImFmdGVyTGlzdFwiKV0sMildKV0pXSwyKX0scz1bXSxvPXtyZW5kZXI6bixzdGF0aWNSZW5kZXJGbnM6c307dC5hPW99XSl9KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjcgMjkiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ2dWUtc2VsZWN0XCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJtdWx0aXNlbGVjdFwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IHsgXCJoYXMtZXJyb3JcIjogX3ZtLmhhc0Vycm9yIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUsXG4gICAgICAgICAgICBzZWFyY2hhYmxlOiBcIlwiLFxuICAgICAgICAgICAgXCJhbGxvdy1lbXB0eVwiOiBcIlwiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZCxcbiAgICAgICAgICAgIFwiaW50ZXJuYWwtc2VhcmNoXCI6ICFfdm0uaXNTZXJ2ZXJTaWRlLFxuICAgICAgICAgICAgbXVsdGlwbGU6IF92bS5tdWx0aXBsZSxcbiAgICAgICAgICAgIHRhZ2dhYmxlOiBfdm0udGFnZ2FibGUsXG4gICAgICAgICAgICBcImNsZWFyLW9uLXNlbGVjdFwiOiAhX3ZtLm11bHRpcGxlLFxuICAgICAgICAgICAgXCJjbG9zZS1vbi1zZWxlY3RcIjogIV92bS5tdWx0aXBsZSxcbiAgICAgICAgICAgIFwic2VsZWN0LWxhYmVsXCI6IF92bS5fXyhfdm0ubGFiZWxzLnNlbGVjdCksXG4gICAgICAgICAgICBcImRlc2VsZWN0LWxhYmVsXCI6IF92bS5fXyhfdm0ubGFiZWxzLmRlc2VsZWN0KSxcbiAgICAgICAgICAgIFwic2VsZWN0ZWQtbGFiZWxcIjogX3ZtLl9fKF92bS5sYWJlbHMuc2VsZWN0ZWQpLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5fXyhfdm0ucGxhY2Vob2xkZXIpLFxuICAgICAgICAgICAgbG9hZGluZzogX3ZtLmxvYWRpbmcsXG4gICAgICAgICAgICBcIm9wdGlvbnMtbGltaXRcIjogMTAwLFxuICAgICAgICAgICAgb3B0aW9uczogX3ZtLm9wdGlvbktleXMsXG4gICAgICAgICAgICBcImN1c3RvbS1sYWJlbFwiOiBfdm0uY3VzdG9tTGFiZWxcbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcInNlYXJjaC1jaGFuZ2VcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5xdWVyeSA9ICRldmVudFxuICAgICAgICAgICAgICBfdm0uZ2V0T3B0aW9ucygpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGFnOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidGFnXCIsICRldmVudClcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS4kZW1pdChcImlucHV0XCIsICRldmVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwib3B0aW9uXCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwge1xuICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczoge1xuICAgICAgICAgICAgICAgICAgICAgIGlubmVySFRNTDogX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRvcHRpb25zLmZpbHRlcnMuaGlnaGxpZ2h0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ub3B0aW9uTGlzdFtwcm9wcy5vcHRpb25dLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucXVlcnlcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IFwiY2xlYXJcIixcbiAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFfdm0uZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgID8gW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5oYXNTZWxlY3Rpb25cbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkaXZcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIm11bHRpc2VsZWN0X19jbGVhclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb3VzZWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQuc3RvcFByb3BhZ2F0aW9uKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmNsZWFyKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdKVxuICAgICAgICB9LFxuICAgICAgICBbXG4gICAgICAgICAgX2MoXCJzcGFuXCIsIHsgYXR0cnM6IHsgc2xvdDogXCJub1Jlc3VsdFwiIH0sIHNsb3Q6IFwibm9SZXN1bHRcIiB9LCBbXG4gICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oX3ZtLmxhYmVscy5ub1Jlc3VsdCkpICtcbiAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgIClcbiAgICAgICAgICBdKVxuICAgICAgICBdXG4gICAgICApXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNzMwNzZlOWZcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTczMDc2ZTlmXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEwMlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IDI5IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVGb3JtLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVnVlRm9ybS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTFiNTJlOTI3XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVnVlRm9ybS52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTFiNTJlOTI3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMWI1MmU5MjdcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTFiNTJlOTI3XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZUZvcm0udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCJhZTk2OTY2MlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVGb3JtLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVGb3JtLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xYjUyZTkyN1wiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDExMDRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZm9ybS52dWUtZm9ybSB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF3UEE7SUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJWdWVGb3JtLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxkaXY+XFxuICAgICAgICA8aDUgY2xhc3M9XFxcInRpdGxlIGlzLTVcXFwiXFxuICAgICAgICAgICAgdi1pZj1cXFwiZGF0YS5pY29uIHx8IGRhdGEudGl0bGVcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJkYXRhLmljb25cXFwiPlxcbiAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XFxcImRhdGEuaWNvblxcXCI+PC9pPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8c3BhblxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJkYXRhLnRpdGxlXFxcIj5cXG4gICAgICAgICAgICAgICAge3sgZGF0YS50aXRsZSB9fVxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8aHI+XFxuICAgICAgICA8L2g1PlxcbiAgICAgICAgPGZvcm0gQHN1Ym1pdC5wcmV2ZW50PVxcXCJzdWJtaXQoKVxcXCJcXG4gICAgICAgICAgICBjbGFzcz1cXFwidnVlLWZvcm1cXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbnMgaXMtbXVsdGlsaW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwiZmllbGQgaW4gZGF0YS5maWVsZHNcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiY29sdW1uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiZmllbGQubmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiY29sdW1uU2l6ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcIiFmaWVsZC5tZXRhLmhpZGRlblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWVsZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJsYWJlbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKGZpZWxkLmxhYmVsKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCB2LWlmPVxcXCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImhlbHAgaXMtZGFuZ2VyIGlzLXB1bGxlZC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvcnMuZ2V0KGZpZWxkLm5hbWUpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XFxcImZpZWxkLm1ldGEuY3VzdG9tXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNsb3QgOm5hbWU9XFxcImZpZWxkLm5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XFxcImZpZWxkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9ycz1cXFwiZXJyb3JzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtZm9ybS1pbnB1dCB2LWlmPVxcXCJmaWVsZC5tZXRhLnR5cGUgPT09ICdpbnB1dCdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XFxcImZpZWxkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZT1cXFwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cXFwiZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnVlLWZvcm0taW5wdXQ+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx2dWUtc2VsZWN0IHYtaWY9XFxcImZpZWxkLm1ldGEudHlwZSA9PT0gJ3NlbGVjdCdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVxcXCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVxcXCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSk7XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZmllbGQudmFsdWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwiZmllbGQubWV0YS5vcHRpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleS1tYXA9XFxcImZpZWxkLm1ldGEua2V5TWFwXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnNvdXJjZT1cXFwiZmllbGQubWV0YS5zb3VyY2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bXVsdGlwbGU9XFxcImZpZWxkLm1ldGEubXVsdGlwbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImZpZWxkLm1ldGEuZGlzYWJsZWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XFxcImZpZWxkLm1ldGEucGxhY2Vob2xkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1zZWxlY3Q+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRlcGlja2VyIHYtaWY9XFxcImZpZWxkLm1ldGEudHlwZSA9PT0gJ2RhdGVwaWNrZXInXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVxcXCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmaWVsZC52YWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmb3JtYXQ9XFxcImZpZWxkLm1ldGEuZm9ybWF0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRpbWU9XFxcImZpZWxkLm1ldGEudGltZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZmllbGQubWV0YS5kaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0ZXBpY2tlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgdi1pZj1cXFwiZmllbGQubWV0YS50eXBlID09PSAndGltZXBpY2tlcidcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XFxcImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZpZWxkLnZhbHVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZvcm1hdD1cXFwiZmllbGQubWV0YS5mb3JtYXRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lLW9ubHlcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZmllbGQubWV0YS5kaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGF0ZXBpY2tlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJmaWVsZC5tZXRhLnR5cGUgPT09ICd0ZXh0YXJlYSdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIEBpbnB1dD1cXFwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0ZXh0YXJlYVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWRhbmdlcic6IGVycm9ycy5oYXMoZmllbGQubmFtZSkgfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmaWVsZC52YWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cm93cz1cXFwiZmllbGQubWV0YS5yb3dzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZmllbGQubWV0YS5kaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRhcmVhPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImVycm9ycy5oYXMoZmllbGQubmFtZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDxocj5cXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b25cXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImRhdGEuYWN0aW9ucy5kZXN0cm95XFxcIlxcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImRhdGEuYWN0aW9ucy5kZXN0cm95LmZvcmJpZGRlblxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24uY2xhc3NcXFwiXFxuICAgICAgICAgICAgICAgIEBjbGljay5wcmV2ZW50PVxcXCJzaG93TW9kYWwgPSB0cnVlXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVxcXCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24uaWNvblxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uXFxcIlxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcImRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmNsYXNzXFxcIlxcbiAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cXFwiY3JlYXRlKClcXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImRhdGEuYWN0aW9ucy5jcmVhdGVcXFwiXFxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZGF0YS5hY3Rpb25zLmNyZWF0ZS5mb3JiaWRkZW5cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhkYXRhLmFjdGlvbnMuY3JlYXRlLmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cXFwiZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24uaWNvblxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVxcXCJzdWJtaXRcXFwiXFxuICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJidXR0b24gaXMtcHVsbGVkLXJpZ2h0XFxcIlxcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcIltkYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmNsYXNzLCB7ICdpcy1sb2FkaW5nJzogbG9hZGluZyB9XVxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiZGF0YS5hY3Rpb25zLnN0b3JlXFxcIlxcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImRhdGEuYWN0aW9ucy5zdG9yZS5mb3JiaWRkZW5cXFwiPlxcbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhkYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVxcXCJkYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnV0dG9uIGlzLXB1bGxlZC1yaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24uY2xhc3MsIHsgJ2lzLWxvYWRpbmcnOiBsb2FkaW5nIH1dXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJkYXRhLmFjdGlvbnMudXBkYXRlXFxcIlxcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImRhdGEuYWN0aW9ucy51cGRhdGUuZm9yYmlkZGVuXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24ubGFiZWwpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XFxcImRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImlzLWNsZWFyZml4XFxcIj48L2Rpdj5cXG4gICAgICAgIDwvZm9ybT5cXG4gICAgICAgIDxtb2RhbCB2LWlmPVxcXCJkYXRhLmFjdGlvbnMuZGVzdHJveVxcXCJcXG4gICAgICAgICAgICA6c2hvdz1cXFwic2hvd01vZGFsXFxcIlxcbiAgICAgICAgICAgIDpfXz1cXFwiX19cXFwiXFxuICAgICAgICAgICAgOm1lc3NhZ2U9XFxcImRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5tZXNzYWdlXFxcIlxcbiAgICAgICAgICAgIEBjYW5jZWwtYWN0aW9uPVxcXCJzaG93TW9kYWwgPSBmYWxzZVxcXCJcXG4gICAgICAgICAgICBAY29tbWl0LWFjdGlvbj1cXFwiZGVzdHJveSgpXFxcIj5cXG4gICAgICAgIDwvbW9kYWw+XFxuICAgIDwvZGl2PlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XFxuaW1wb3J0IEVycm9ycyBmcm9tICcuL2NsYXNzZXMvRXJyb3JzJztcXG5pbXBvcnQgTW9kYWwgZnJvbSAnLi9Nb2RhbC52dWUnO1xcbmltcG9ydCBWdWVTZWxlY3QgZnJvbSAnLi9WdWVTZWxlY3QudnVlJztcXG5pbXBvcnQgRGF0ZXBpY2tlciBmcm9tICcuL0RhdGVwaWNrZXIudnVlJztcXG5pbXBvcnQgVnVlRm9ybUlucHV0IGZyb20gJy4vVnVlRm9ybUlucHV0LnZ1ZSc7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBuYW1lOiAnVnVlRm9ybScsXFxuXFxuICAgIGNvbXBvbmVudHM6IHtcXG4gICAgICAgIE1vZGFsLCBWdWVTZWxlY3QsIERhdGVwaWNrZXIsIFZ1ZUZvcm1JbnB1dCxcXG4gICAgfSxcXG5cXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIGRhdGE6IHtcXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcXG4gICAgICAgICAgICBzaG93TW9kYWw6IGZhbHNlLFxcbiAgICAgICAgICAgIGVycm9yczogbmV3IEVycm9ycygpLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIFsnX18nXSksXFxuICAgICAgICBjb2x1bW5TaXplKCkge1xcbiAgICAgICAgICAgIHJldHVybiBgaXMtJHtwYXJzZUludCgxMiAvIHRoaXMuZGF0YS5jb2x1bW5zLCAxMCl9YDtcXG4gICAgICAgIH0sXFxuICAgICAgICBwYXRoKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEubWV0aG9kID09PSAncG9zdCdcXG4gICAgICAgICAgICAgICAgPyB0aGlzLmRhdGEuYWN0aW9ucy5zdG9yZS5wYXRoXFxuICAgICAgICAgICAgICAgIDogdGhpcy5kYXRhLmFjdGlvbnMudXBkYXRlLnBhdGg7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBjcmVhdGUoKSB7XFxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnY3JlYXRlJyk7XFxuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiB0aGlzLmRhdGEuYWN0aW9ucy5jcmVhdGUucm91dGUgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc3VibWl0KCkge1xcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XFxuXFxuICAgICAgICAgICAgYXhpb3NbdGhpcy5kYXRhLm1ldGhvZF0odGhpcy5wYXRoLCB0aGlzLmZvcm1EYXRhKCkpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdzdWJtaXQnKTtcXG5cXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucmVkaXJlY3QpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLnJlZGlyZWN0LFxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBpZDogZGF0YS5pZCB9LFxcbiAgICAgICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgICAgICAgY29uc3QgeyBzdGF0dXMsIGRhdGEgfSA9IGVycm9yLnJlc3BvbnNlO1xcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcXG5cXG4gICAgICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gNDIyKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5zZXQoZGF0YS5lcnJvcnMpO1xcblxcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xcbiAgICAgICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGZvcm1EYXRhKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmllbGRzLnJlZHVjZSgob2JqZWN0LCBmaWVsZCkgPT4ge1xcbiAgICAgICAgICAgICAgICBvYmplY3RbZmllbGQubmFtZV0gPSBmaWVsZC52YWx1ZTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iamVjdDtcXG4gICAgICAgICAgICB9LCB7IF9wYXJhbXM6IHRoaXMucGFyYW1zIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGRlc3Ryb3koKSB7XFxuICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xcblxcbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSh0aGlzLmRhdGEuYWN0aW9ucy5kZXN0cm95LnBhdGgpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICB0b2FzdHIuc3VjY2VzcyhkYXRhLm1lc3NhZ2UpO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdkZXN0cm95Jyk7XFxuXFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0KSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IGRhdGEucmVkaXJlY3QgfSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgZm9ybS52dWUtZm9ybSB7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMWI1MmU5MjdcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdj5cbiAgICAgICAgPGg1IGNsYXNzPVwidGl0bGUgaXMtNVwiXG4gICAgICAgICAgICB2LWlmPVwiZGF0YS5pY29uIHx8IGRhdGEudGl0bGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImRhdGEuaWNvblwiPlxuICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImRhdGEuaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgdi1pZj1cImRhdGEudGl0bGVcIj5cbiAgICAgICAgICAgICAgICB7eyBkYXRhLnRpdGxlIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8aHI+XG4gICAgICAgIDwvaDU+XG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cInN1Ym1pdCgpXCJcbiAgICAgICAgICAgIGNsYXNzPVwidnVlLWZvcm1cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW11bHRpbGluZVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCJmaWVsZCBpbiBkYXRhLmZpZWxkc1wiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY29sdW1uXCJcbiAgICAgICAgICAgICAgICAgICAgOmtleT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJjb2x1bW5TaXplXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiFmaWVsZC5tZXRhLmhpZGRlblwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oZmllbGQubGFiZWwpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cImVycm9ycy5oYXMoZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhlbHAgaXMtZGFuZ2VyIGlzLXB1bGxlZC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBlcnJvcnMuZ2V0KGZpZWxkLm5hbWUpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCJmaWVsZC5tZXRhLmN1c3RvbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVwiZmllbGQubmFtZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZD1cImZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmVycm9ycz1cImVycm9yc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnVlLWZvcm0taW5wdXQgdi1pZj1cImZpZWxkLm1ldGEudHlwZSA9PT0gJ2lucHV0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmaWVsZD1cImZpZWxkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZT1cImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92dWUtZm9ybS1pbnB1dD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnVlLXNlbGVjdCB2LWlmPVwiZmllbGQubWV0YS50eXBlID09PSAnc2VsZWN0J1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpO1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpvcHRpb25zPVwiZmllbGQubWV0YS5vcHRpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleS1tYXA9XCJmaWVsZC5tZXRhLmtleU1hcFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzb3VyY2U9XCJmaWVsZC5tZXRhLnNvdXJjZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDptdWx0aXBsZT1cImZpZWxkLm1ldGEubXVsdGlwbGVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwiZmllbGQubWV0YS5wbGFjZWhvbGRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnVlLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXBpY2tlciB2LWlmPVwiZmllbGQubWV0YS50eXBlID09PSAnZGF0ZXBpY2tlcidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Zm9ybWF0PVwiZmllbGQubWV0YS5mb3JtYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGltZT1cImZpZWxkLm1ldGEudGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgdi1pZj1cImZpZWxkLm1ldGEudHlwZSA9PT0gJ3RpbWVwaWNrZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZvcm1hdD1cImZpZWxkLm1ldGEuZm9ybWF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZS1vbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaGFzLWljb25zLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImZpZWxkLm1ldGEudHlwZSA9PT0gJ3RleHRhcmVhJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgQGlucHV0PVwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtZGFuZ2VyJzogZXJyb3JzLmhhcyhmaWVsZC5uYW1lKSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cm93cz1cImZpZWxkLm1ldGEucm93c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVycm9ycy5oYXMoZmllbGQubmFtZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZGF0YS5hY3Rpb25zLmRlc3Ryb3lcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRhdGEuYWN0aW9ucy5kZXN0cm95LmZvcmJpZGRlblwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmNsYXNzXCJcbiAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cInNob3dNb2RhbCA9IHRydWVcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24ubGFiZWwpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24uaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cImRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmNsYXNzXCJcbiAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cImNyZWF0ZSgpXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZGF0YS5hY3Rpb25zLmNyZWF0ZVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGF0YS5hY3Rpb25zLmNyZWF0ZS5mb3JiaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhkYXRhLmFjdGlvbnMuY3JlYXRlLmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGlzLXB1bGxlZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiW2RhdGEuYWN0aW9ucy5zdG9yZS5idXR0b24uY2xhc3MsIHsgJ2lzLWxvYWRpbmcnOiBsb2FkaW5nIH1dXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZGF0YS5hY3Rpb25zLnN0b3JlXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkYXRhLmFjdGlvbnMuc3RvcmUuZm9yYmlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImRhdGEuYWN0aW9ucy5zdG9yZS5idXR0b24uaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gaXMtcHVsbGVkLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24uY2xhc3MsIHsgJ2lzLWxvYWRpbmcnOiBsb2FkaW5nIH1dXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZGF0YS5hY3Rpb25zLnVwZGF0ZVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGF0YS5hY3Rpb25zLnVwZGF0ZS5mb3JiaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhkYXRhLmFjdGlvbnMudXBkYXRlLmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXMtY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8bW9kYWwgdi1pZj1cImRhdGEuYWN0aW9ucy5kZXN0cm95XCJcbiAgICAgICAgICAgIDpzaG93PVwic2hvd01vZGFsXCJcbiAgICAgICAgICAgIDpfXz1cIl9fXCJcbiAgICAgICAgICAgIDptZXNzYWdlPVwiZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLm1lc3NhZ2VcIlxuICAgICAgICAgICAgQGNhbmNlbC1hY3Rpb249XCJzaG93TW9kYWwgPSBmYWxzZVwiXG4gICAgICAgICAgICBAY29tbWl0LWFjdGlvbj1cImRlc3Ryb3koKVwiPlxuICAgICAgICA8L21vZGFsPlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgRXJyb3JzIGZyb20gJy4vY2xhc3Nlcy9FcnJvcnMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwudnVlJztcbmltcG9ydCBWdWVTZWxlY3QgZnJvbSAnLi9WdWVTZWxlY3QudnVlJztcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlci52dWUnO1xuaW1wb3J0IFZ1ZUZvcm1JbnB1dCBmcm9tICcuL1Z1ZUZvcm1JbnB1dC52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1Z1ZUZvcm0nLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBNb2RhbCwgVnVlU2VsZWN0LCBEYXRlcGlja2VyLCBWdWVGb3JtSW5wdXQsXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcnM6IG5ldyBFcnJvcnMoKSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgLi4ubWFwR2V0dGVycygnbG9jYWxlJywgWydfXyddKSxcbiAgICAgICAgY29sdW1uU2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBgaXMtJHtwYXJzZUludCgxMiAvIHRoaXMuZGF0YS5jb2x1bW5zLCAxMCl9YDtcbiAgICAgICAgfSxcbiAgICAgICAgcGF0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEubWV0aG9kID09PSAncG9zdCdcbiAgICAgICAgICAgICAgICA/IHRoaXMuZGF0YS5hY3Rpb25zLnN0b3JlLnBhdGhcbiAgICAgICAgICAgICAgICA6IHRoaXMuZGF0YS5hY3Rpb25zLnVwZGF0ZS5wYXRoO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NyZWF0ZScpO1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiB0aGlzLmRhdGEuYWN0aW9ucy5jcmVhdGUucm91dGUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGF4aW9zW3RoaXMuZGF0YS5tZXRob2RdKHRoaXMucGF0aCwgdGhpcy5mb3JtRGF0YSgpKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLnJlZGlyZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBkYXRhLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSBlcnJvci5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5zZXQoZGF0YS5lcnJvcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBmb3JtRGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmllbGRzLnJlZHVjZSgob2JqZWN0LCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIG9iamVjdFtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICB9LCB7IF9wYXJhbXM6IHRoaXMucGFyYW1zIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSh0aGlzLmRhdGEuYWN0aW9ucy5kZXN0cm95LnBhdGgpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdkZXN0cm95Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IGRhdGEucmVkaXJlY3QgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIGZvcm0udnVlLWZvcm0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZSIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5pbmNsdWRlcyhmaWVsZCk7XG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhmaWVsZCkgPyB0aGlzLmVycm9yc1tmaWVsZF1bMF0gOiBudWxsO1xuICAgIH1cblxuICAgIHNldChlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuXG4gICAgY2xlYXIoZmllbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzKGZpZWxkKSkge1xuICAgICAgICAgICAgVnVlLmRlbGV0ZSh0aGlzLmVycm9ycywgZmllbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW1wdHkoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5mb3JFYWNoKGZpZWxkID0+IHRoaXMuY2xlYXIoZmllbGQpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ycztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL2NsYXNzZXMvRXJyb3JzLmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGRiMzgyYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RkYjM4MmFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03ZGRiMzgyYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdkZGIzODJhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RkYjM4MmFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1ODBlZWUyNFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGRiMzgyYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RkYjM4MmFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdkZGIzODJhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMDlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1vZGFsLmlzLWFjdGl2ZSB7XFxuICAgIHotaW5kZXg6IDExMDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOERBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJNb2RhbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XFxcImFuaW1hdGVkIGZhZGVJblxcXCJcXG4gICAgICAgIGxlYXZlLWFjdGl2ZS1jbGFzcz1cXFwiYW5pbWF0ZWQgZmFkZU91dFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbFxcXCJcXG4gICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWFjdGl2ZSc6IHNob3cgfVxcXCJcXG4gICAgICAgICAgICB2LWlmPVxcXCJzaG93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1tb2RhbCBtb2RhbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwic3VidGl0bGUgaXMtNVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKG1lc3NhZ2UgfHwgXFxcIkFyZSB5b3Ugc3VyZSA/XFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgPGhyPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLWxlZnRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJjb250cm9sc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLXN1Y2Nlc3NcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgnY2FuY2VsLWFjdGlvbicpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhcXFwiQ2FuY2VsXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ2NvbW1pdC1hY3Rpb24nKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFxcXCJZZXNcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3RyYW5zaXRpb24+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHNob3c6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG1lc3NhZ2U6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICBfXzoge1xcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgLm1vZGFsLmlzLWFjdGl2ZSB7XFxuICAgICAgICB6LWluZGV4OiAxMTAwO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2RkYjM4MmFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTExMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIjx0ZW1wbGF0ZT5cblxuICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIGZhZGVJblwiXG4gICAgICAgIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIGZhZGVPdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IHNob3cgfVwiXG4gICAgICAgICAgICB2LWlmPVwic2hvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1tb2RhbCBtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwic3VidGl0bGUgaXMtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKG1lc3NhZ2UgfHwgXCJBcmUgeW91IHN1cmUgP1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjYW5jZWwtYWN0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFwiQ2FuY2VsXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjb21taXQtYWN0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhcIlllc1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIF9fOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgLm1vZGFsLmlzLWFjdGl2ZSB7XG4gICAgICAgIHotaW5kZXg6IDExMDA7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBmYWRlSW5cIixcbiAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBmYWRlT3V0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5zaG93XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbFwiLCBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBfdm0uc2hvdyB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYmFja2dyb3VuZFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLW1vZGFsIG1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJjb250ZW50XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VidGl0bGUgaXMtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhfdm0ubWVzc2FnZSB8fCBcIkFyZSB5b3Ugc3VyZSA/XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1sZWZ0XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJjb250cm9sc1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY2FuY2VsLWFjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJDYW5jZWxcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjb21taXQtYWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJZZXNcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2RkYjM4MmFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdkZGIzODJhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLmNzc1wiKVxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQ0NDNmZTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0xIS4vRGF0ZXBpY2tlci52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0RhdGVwaWNrZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0RhdGVwaWNrZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00ZDQ0M2ZlMlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTRkNDQzZmUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTExM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQ0NDNmZTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4vbWF0ZXJpYWxfZ3JlZW4uY3NzXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjFkYmI5YzMwXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi9tYXRlcmlhbF9ncmVlbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRkNDQzZmUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuL21hdGVyaWFsX2dyZWVuLmNzc1wiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00ZDQ0M2ZlMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZsYXRwaWNrci1jYWxlbmRhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBub25lO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDEzcHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTNweCByZ2JhKDAsMCwwLDAuMDgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm9wZW4sXFxuLmZsYXRwaWNrci1jYWxlbmRhci5pbmxpbmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIG1heC1oZWlnaHQ6IDY0MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm9wZW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgei1pbmRleDogOTk5OTk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZS5vcGVuIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbkRvd24gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluRG93biAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaW5saW5lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYygxMDAlICsgMnB4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zdGF0aWMub3BlbiB7XFxuICB6LWluZGV4OiA5OTk7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5oYXNXZWVrcyB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzV2Vla3MgLmRheUNvbnRhaW5lcixcXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNUaW1lIC5kYXlDb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzV2Vla3MgLmRheUNvbnRhaW5lciB7XFxuICBib3JkZXItbGVmdDogMDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zaG93VGltZUlucHV0Lmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc2hvd1RpbWVJbnB1dC5oYXNUaW1lIC5mbGF0cGlja3ItaW5uZXJDb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zaG93VGltZUlucHV0Lmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5ub0NhbGVuZGFyLmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBsZWZ0OiAyMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnJpZ2h0TW9zdDpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5yaWdodE1vc3Q6YWZ0ZXIge1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiAyMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZSB7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIG1hcmdpbjogMCAtNXB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbiAgbWFyZ2luOiAwIC00cHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YWZ0ZXIge1xcbiAgYm90dG9tOiAxMDAlO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlciB7XFxuICB0b3A6IDEwMCU7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YmVmb3JlIHtcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMWJiYzliO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5mbGF0cGlja3Itd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5mbGF0cGlja3ItbW9udGgge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmaWxsOiAjZmZmO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcGFkZGluZzogMTBweCBjYWxjKDMuNTclIC0gMS41cHgpO1xcbiAgei1pbmRleDogMztcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIGksXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGguZmxhdHBpY2tyLXByZXYtbW9udGgsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoLmZsYXRwaWNrci1wcmV2LW1vbnRoIHtcXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG4gIGxlZnQ6IDA7XFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbn1cXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLmZsYXRwaWNrci1uZXh0LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aC5mbGF0cGlja3ItbmV4dC1tb250aCB7XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxuICByaWdodDogMDtcXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxufVxcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4uZmxhdHBpY2tyLXByZXYtbW9udGg6aG92ZXIsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyIHtcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGg6aG92ZXIgc3ZnLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aDpob3ZlciBzdmcge1xcbiAgZmlsbDogI2Y2NDc0NztcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIHN2ZyxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGggc3ZnIHtcXG4gIHdpZHRoOiAxNHB4O1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGggc3ZnIHBhdGgsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIHN2ZyBwYXRoIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjFzO1xcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjFzO1xcbiAgZmlsbDogaW5oZXJpdDtcXG59XFxuLm51bUlucHV0V3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgaW5wdXQsXFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLm51bUlucHV0V3JhcHBlciBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBwYWRkaW5nOiAwIDRweCAwIDJweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgbGluZS1oZWlnaHQ6IDUwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMDUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMzJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXAge1xcbiAgdG9wOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC42KTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93biB7XFxuICB0b3A6IDUwJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjYpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4gc3ZnIHtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4gc3ZnIHBhdGgge1xcbiAgZmlsbDogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XFxufVxcbi5udW1JbnB1dFdyYXBwZXI6aG92ZXIgc3BhbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGgge1xcbiAgZm9udC1zaXplOiAxMzUlO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNzUlO1xcbiAgbGVmdDogMTIuNSU7XFxuICBwYWRkaW5nOiA2LjE2cHggMCAwIDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGhlaWdodDogMjhweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlTGVmdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlTGVmdE5ldyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGguc2xpZGVSaWdodCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlUmlnaHROZXcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBzcGFuLmN1ci1tb250aCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAwLjVjaDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBzcGFuLmN1ci1tb250aDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogNmNoO1xcbiAgd2lkdGg6IDdjaFxcXFwwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAwIDAgMCAwLjVjaDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbml0aWFsO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXI6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyW2Rpc2FibGVkXSxcXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXJbZGlzYWJsZWRdOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uZmxhdHBpY2tyLXdlZWtkYXlzIHtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjhweDtcXG59XFxuc3Bhbi5mbGF0cGlja3Itd2Vla2RheSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250LXNpemU6IDkwJTtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU0KTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmRheUNvbnRhaW5lcixcXG4uZmxhdHBpY2tyLXdlZWtzIHtcXG4gIHBhZGRpbmc6IDFweCAwIDAgMDtcXG59XFxuLmZsYXRwaWNrci1kYXlzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1kYXlzOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5kYXlDb250YWluZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG91dGxpbmU6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDMwNy44NzVweDtcXG4gIG1pbi13aWR0aDogMzA3Ljg3NXB4O1xcbiAgbWF4LXdpZHRoOiAzMDcuODc1cHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZUxlZnQsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0TmV3IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdE5ldyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZVJpZ2h0TmV3IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWRheSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNTBweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHdpZHRoOiAxNC4yODU3MTQzJTtcXG4gIC13ZWJraXQtZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XFxuICAgICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE0LjI4NTcxNDMlO1xcbiAgICAgICAgICBmbGV4LWJhc2lzOiAxNC4yODU3MTQzJTtcXG4gIG1heC13aWR0aDogMzlweDtcXG4gIGhlaWdodDogMzlweDtcXG4gIGxpbmUtaGVpZ2h0OiAzOXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnRvZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LnRvZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LnRvZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheTpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXk6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5OmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xcbiAgYm9yZGVyLWNvbG9yOiAjZTJlMmUyO1xcbn1cXG4uZmxhdHBpY2tyLWRheS50b2RheSB7XFxuICBib3JkZXItY29sb3I6ICNiYmI7XFxufVxcbi5mbGF0cGlja3ItZGF5LnRvZGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnRvZGF5OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogI2JiYjtcXG4gIGJhY2tncm91bmQ6ICNiYmI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2U6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQ6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5uZXh0TW9udGhEYXkge1xcbiAgYmFja2dyb3VuZDogIzFiYmM5YjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMWJiYzliO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5zdGFydFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5zdGFydFJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuZW5kUmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSArIC5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZSB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xMHB4IDAgMCAjMWJiYzliO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAtMTBweCAwIDAgIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZS5lbmRSYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWRheS5pblJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC01cHggMCAwICNlMmUyZTIsIDVweCAwIDAgI2UyZTJlMjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTVweCAwIDAgI2UyZTJlMiwgNXB4IDAgMCAjZTJlMmUyO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZCxcXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZDpob3ZlciB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQsXFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQ6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLFxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQubmV4dE1vbnRoRGF5IHtcXG4gIGNvbG9yOiByZ2JhKDcyLDcyLDcyLDAuMyk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5mbGF0cGlja3ItZGF5LndlZWsuc2VsZWN0ZWQge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTVweCAwIDAgIzFiYmM5YiwgNXB4IDAgMCAjMWJiYzliO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAtNXB4IDAgMCAjMWJiYzliLCA1cHggMCAwICMxYmJjOWI7XFxufVxcbi5yYW5nZU1vZGUgLmZsYXRwaWNrci1kYXkge1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla3Mge1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgLmZsYXRwaWNrci13ZWVrZGF5IHtcXG4gIGZsb2F0OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciBzcGFuLmZsYXRwaWNrci1kYXkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogbm9uZTtcXG59XFxuLmZsYXRwaWNrci1pbm5lckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLXJDb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmZsYXRwaWNrci10aW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG91dGxpbmU6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG59XFxuLmZsYXRwaWNrci10aW1lOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0ODQ4NDg7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICM0ODQ4NDg7XFxufVxcbi5mbGF0cGlja3ItdGltZS5oYXNTZWNvbmRzIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDI2JTtcXG59XFxuLmZsYXRwaWNrci10aW1lLnRpbWUyNGhyIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDQ5JTtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLWhvdXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3ItbWludXRlLFxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3Itc2Vjb25kIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci10aW1lLXNlcGFyYXRvcixcXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbSB7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6ICM0ODQ4NDg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAyJTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xcbiAgb3V0bGluZTogMDtcXG4gIHdpZHRoOiAxOCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpob3ZlcixcXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xcbn1cXG4uZmxhdHBpY2tyLWlucHV0W3JlYWRvbmx5XSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcEZhZGVJbkRvd24ge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcEZhZGVJbkRvd24ge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwU2xpZGVMZWZ0IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcFNsaWRlTGVmdCB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlTGVmdE5ldyB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZwU2xpZGVMZWZ0TmV3IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlUmlnaHQge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG59XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZVJpZ2h0IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZVJpZ2h0TmV3IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcFNsaWRlUmlnaHROZXcge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlT3V0IHtcXG5mcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxudG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcEZhZGVPdXQge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlSW4ge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZwRmFkZUluIHtcXG5mcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxudG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0Usd0JBQXdCO0VBQ3hCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLHdCQUF3QjtVQUNoQixnQkFBZ0I7RUFDeEIsZUFBZTtFQUNmLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLCtCQUErQjtVQUN2Qix1QkFBdUI7RUFDL0IsK0JBQStCO01BQzNCLDJCQUEyQjtFQUMvQixnREFBZ0Q7VUFDeEMsd0NBQXdDO0NBQ2pEO0FBQ0Q7O0VBRUUsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0UscUVBQXFFO1VBQzdELDZEQUE2RDtDQUN0RTtBQUNEO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixTQUFTO0NBQ1Y7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLGFBQWE7RUFDYixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxZQUFZO0NBQ2I7QUFDRDs7RUFFRSxpQkFBaUI7RUFDakIsOEJBQThCO0VBQzlCLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsZUFBZTtDQUNoQjtBQUNEO0VBQ0UsYUFBYTtFQUNiLHlDQUF5QztDQUMxQztBQUNEO0VBQ0UsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFDRDtFQUNFLGFBQWE7Q0FDZDtBQUNEOztFQUVFLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osVUFBVTtFQUNWLFNBQVM7RUFDVCxXQUFXO0NBQ1o7QUFDRDs7RUFFRSxXQUFXO0VBQ1gsWUFBWTtDQUNiO0FBQ0Q7RUFDRSxrQkFBa0I7RUFDbEIsZUFBZTtDQUNoQjtBQUNEO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7Q0FDaEI7QUFDRDs7RUFFRSxhQUFhO0NBQ2Q7QUFDRDtFQUNFLHdDQUF3QztDQUN6QztBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBQ0Q7O0VBRUUsVUFBVTtDQUNYO0FBQ0Q7RUFDRSxxQ0FBcUM7Q0FDdEM7QUFDRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxtQkFBbUI7RUFDbkIsc0JBQXNCO0NBQ3ZCO0FBQ0Q7RUFDRSwyQkFBMkI7RUFDM0Isb0JBQW9CO0VBQ3BCLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsbUJBQW1CO0VBQ25CLDBCQUEwQjtLQUN2Qix1QkFBdUI7TUFDdEIsc0JBQXNCO1VBQ2xCLGtCQUFrQjtFQUMxQixpQkFBaUI7Q0FDbEI7QUFDRDs7RUFFRSxzQkFBc0I7RUFDdEIsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixTQUFTO0VBQ1Qsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQ0FBa0M7RUFDbEMsV0FBVztDQUNaO0FBQ0Q7O0VBRUUsbUJBQW1CO0NBQ3BCO0FBQ0Q7O0FBRUE7NEJBQzRCO0FBQzVCO1VBQ1U7RUFDUixRQUFRO0FBQ1Y7MEJBQzBCO0FBQzFCO1VBQ1U7Q0FDVDtBQUNEOzRCQUM0QjtBQUM1QjswQkFDMEI7QUFDMUI7O0FBRUE7NEJBQzRCO0FBQzVCO1VBQ1U7RUFDUixTQUFTO0FBQ1g7MEJBQzBCO0FBQzFCO1VBQ1U7Q0FDVDtBQUNEOzRCQUM0QjtBQUM1QjswQkFDMEI7QUFDMUI7O0VBRUUsWUFBWTtDQUNiO0FBQ0Q7O0VBRUUsY0FBYztDQUNmO0FBQ0Q7O0VBRUUsWUFBWTtDQUNiO0FBQ0Q7O0VBRUUsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixjQUFjO0NBQ2Y7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0NBQ2Q7QUFDRDs7RUFFRSxzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixzQ0FBc0M7RUFDdEMsK0JBQStCO1VBQ3ZCLHVCQUF1QjtDQUNoQztBQUNEO0VBQ0UsNEJBQTRCO0NBQzdCO0FBQ0Q7RUFDRSw0QkFBNEI7Q0FDN0I7QUFDRDtFQUNFLGVBQWU7RUFDZixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLFNBQVM7Q0FDVjtBQUNEO0VBQ0UsT0FBTztFQUNQLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyw0Q0FBNEM7Q0FDN0M7QUFDRDtFQUNFLFNBQVM7Q0FDVjtBQUNEO0VBQ0UsbUNBQW1DO0VBQ25DLG9DQUFvQztFQUNwQyx5Q0FBeUM7Q0FDMUM7QUFDRDtFQUNFLGVBQWU7RUFDZixhQUFhO0NBQ2Q7QUFDRDtFQUNFLDRCQUE0QjtDQUM3QjtBQUNEO0VBQ0UsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLDhDQUE4QztVQUN0QyxzQ0FBc0M7Q0FDL0M7QUFDRDtFQUNFLGdEQUFnRDtVQUN4Qyx3Q0FBd0M7RUFDaEQsMEZBQTBGO1VBQ2xGLGtGQUFrRjtDQUMzRjtBQUNEO0VBQ0UsK0NBQStDO1VBQ3ZDLHVDQUF1QztFQUMvQyw0RkFBNEY7VUFDcEYsb0ZBQW9GO0NBQzdGO0FBQ0Q7RUFDRSwrQ0FBK0M7VUFDdkMsdUNBQXVDO0VBQy9DLDJGQUEyRjtVQUNuRixtRkFBbUY7Q0FDNUY7QUFDRDtFQUNFLDBDQUEwQztVQUNsQyxrQ0FBa0M7RUFDMUMsNkZBQTZGO1VBQ3JGLHFGQUFxRjtDQUM5RjtBQUNEO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixXQUFXO0NBQ1o7QUFDRDtFQUNFLDZCQUE2QjtDQUM5QjtBQUNEO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsdUJBQXVCO0NBQ3hCO0FBQ0Q7RUFDRSx3QkFBd0I7RUFDeEIsK0JBQStCO1VBQ3ZCLHVCQUF1QjtFQUMvQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixVQUFVO0VBQ1Ysc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQix3QkFBd0I7Q0FDekI7QUFDRDtFQUNFLFdBQVc7Q0FDWjtBQUNEOztFQUVFLGdCQUFnQjtFQUNoQiw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwwQkFBMEI7RUFDMUIsNEJBQTRCO01BQ3hCLHVCQUF1QjtVQUNuQixvQkFBb0I7RUFDNUIsYUFBYTtDQUNkO0FBQ0Q7RUFDRSxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQix3QkFBd0I7RUFDeEIsZUFBZTtFQUNmLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLG9CQUFvQjtFQUNwQixnQkFBZ0I7TUFDWixZQUFZO1VBQ1IsUUFBUTtFQUNoQixvQkFBb0I7Q0FDckI7QUFDRDs7RUFFRSxtQkFBbUI7Q0FDcEI7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsY0FBYztFQUNkLGlCQUFpQjtFQUNqQiwwQ0FBMEM7RUFDMUMsMkNBQTJDO0NBQzVDO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLFdBQVc7RUFDWCxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGlCQUFpQjtFQUNqQixxQkFBcUI7RUFDckIscUJBQXFCO0VBQ3JCLCtCQUErQjtVQUN2Qix1QkFBdUI7RUFDL0Isc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCx3QkFBd0I7VUFDaEIsZ0JBQWdCO0VBQ3hCLG9CQUFvQjtFQUNwQix1QkFBdUI7RUFDdkIsc0NBQXNDO1VBQzlCLDhCQUE4QjtFQUN0Qyw4Q0FBOEM7VUFDdEMsc0NBQXNDO0VBQzlDLFdBQVc7Q0FDWjtBQUNEO0VBQ0Usb0hBQW9IO1VBQzVHLDRHQUE0RztDQUNySDtBQUNEOztFQUVFLGdEQUFnRDtVQUN4Qyx3Q0FBd0M7Q0FDakQ7QUFDRDtFQUNFLG1IQUFtSDtVQUMzRywyR0FBMkc7Q0FDcEg7QUFDRDtFQUNFLHFIQUFxSDtVQUM3Ryw2R0FBNkc7RUFDckgsK0NBQStDO1VBQ3ZDLHVDQUF1QztDQUNoRDtBQUNEO0VBQ0UsdUhBQXVIO1VBQy9HLCtHQUErRztDQUN4SDtBQUNEO0VBQ0UsaUJBQWlCO0VBQ2pCLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsK0JBQStCO1VBQ3ZCLHVCQUF1QjtFQUMvQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0NBQWdDO01BQzVCLHFDQUFxQztVQUNqQyx3QkFBd0I7RUFDaEMsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGdDQUFnQztNQUM1QixzQkFBc0I7VUFDbEIsd0JBQXdCO0VBQ2hDLG1CQUFtQjtDQUNwQjtBQUNEOzs7Ozs7Ozs7Ozs7RUFZRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLG9CQUFvQjtFQUNwQixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUNEOztFQUVFLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsWUFBWTtDQUNiO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWtCRSxvQkFBb0I7RUFDcEIseUJBQXlCO1VBQ2pCLGlCQUFpQjtFQUN6QixZQUFZO0VBQ1osc0JBQXNCO0NBQ3ZCO0FBQ0Q7OztFQUdFLDZCQUE2QjtDQUM5QjtBQUNEOzs7RUFHRSw2QkFBNkI7Q0FDOUI7QUFDRDs7O0VBR0Usc0NBQXNDO1VBQzlCLDhCQUE4QjtDQUN2QztBQUNEOzs7RUFHRSxvQkFBb0I7Q0FDckI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixzREFBc0Q7VUFDOUMsOENBQThDO0NBQ3ZEO0FBQ0Q7O0VBRUUscUJBQXFCO0NBQ3RCO0FBQ0Q7Ozs7Ozs7RUFPRSwwQkFBMEI7RUFDMUIsd0JBQXdCO0VBQ3hCLDBCQUEwQjtFQUMxQixnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLGlCQUFpQjtFQUNqQixzREFBc0Q7VUFDOUMsOENBQThDO0NBQ3ZEO0FBQ0Q7RUFDRSxnQkFBZ0I7Q0FDakI7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixZQUFZO0NBQ2I7QUFDRDtFQUNFLGdCQUFnQjtFQUNoQiwwQ0FBMEM7Q0FDM0M7QUFDRDtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osa0JBQWtCO0NBQ25CO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGdCQUFnQjtDQUNqQjtBQUNEO0VBQ0UsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCwrQkFBK0I7VUFDdkIsdUJBQXVCO0VBQy9CLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsNENBQTRDO0NBQzdDO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsV0FBVztFQUNYLCtCQUErQjtVQUN2Qix1QkFBdUI7Q0FDaEM7QUFDRDtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsZUFBZTtFQUNmLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLCtCQUErQjtVQUN2Qix1QkFBdUI7RUFDL0IsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsMkJBQTJCO0NBQzVCO0FBQ0Q7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLFlBQVk7Q0FDYjtBQUNEO0VBQ0Usb0JBQW9CO0VBQ3BCLGdCQUFnQjtNQUNaLFlBQVk7VUFDUixRQUFRO0VBQ2hCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsWUFBWTtDQUNiO0FBQ0Q7RUFDRSw2QkFBNkI7Q0FDOUI7QUFDRDtFQUNFLDBCQUEwQjtDQUMzQjtBQUNEO0VBQ0UsV0FBVztDQUNaO0FBQ0Q7RUFDRSxXQUFXO0NBQ1o7QUFDRDtFQUNFLHdCQUF3QjtFQUN4Qix5QkFBeUI7VUFDakIsaUJBQWlCO0VBQ3pCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsK0JBQStCO1VBQ3ZCLHVCQUF1QjtDQUNoQztBQUNEO0VBQ0Usa0JBQWtCO0NBQ25CO0FBQ0Q7O0VBRUUsaUJBQWlCO0NBQ2xCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsVUFBVTtDQUNYO0FBQ0Q7O0VBRUUsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLDBCQUEwQjtLQUN2Qix1QkFBdUI7TUFDdEIsc0JBQXNCO1VBQ2xCLGtCQUFrQjtFQUMxQiwyQkFBMkI7TUFDdkIsNEJBQTRCO1VBQ3hCLG1CQUFtQjtDQUM1QjtBQUNEO0VBQ0UsV0FBVztFQUNYLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtDQUNsQjtBQUNEOztFQUVFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBQ0Q7QUFDRTtJQUNFLFdBQVc7SUFDWCw0Q0FBNEM7WUFDcEMsb0NBQW9DO0NBQzdDO0FBQ0Q7SUFDRSxXQUFXO0lBQ1gsd0NBQXdDO1lBQ2hDLGdDQUFnQztDQUN6QztDQUNGO0FBQ0Q7QUFDRTtJQUNFLFdBQVc7SUFDWCw0Q0FBNEM7WUFDcEMsb0NBQW9DO0NBQzdDO0FBQ0Q7SUFDRSxXQUFXO0lBQ1gsd0NBQXdDO1lBQ2hDLGdDQUFnQztDQUN6QztDQUNGO0FBQ0Q7QUFDRTtJQUNFLDhDQUE4QztZQUN0QyxzQ0FBc0M7Q0FDL0M7QUFDRDtJQUNFLGdEQUFnRDtZQUN4Qyx3Q0FBd0M7Q0FDakQ7Q0FDRjtBQUNEO0FBQ0U7SUFDRSw4Q0FBOEM7WUFDdEMsc0NBQXNDO0NBQy9DO0FBQ0Q7SUFDRSxnREFBZ0Q7WUFDeEMsd0NBQXdDO0NBQ2pEO0NBQ0Y7QUFDRDtBQUNFO0lBQ0UsK0NBQStDO1lBQ3ZDLHVDQUF1QztDQUNoRDtBQUNEO0lBQ0UsOENBQThDO1lBQ3RDLHNDQUFzQztDQUMvQztDQUNGO0FBQ0Q7QUFDRTtJQUNFLCtDQUErQztZQUN2Qyx1Q0FBdUM7Q0FDaEQ7QUFDRDtJQUNFLDhDQUE4QztZQUN0QyxzQ0FBc0M7Q0FDL0M7Q0FDRjtBQUNEO0FBQ0U7SUFDRSwwQ0FBMEM7WUFDbEMsa0NBQWtDO0NBQzNDO0FBQ0Q7SUFDRSwrQ0FBK0M7WUFDdkMsdUNBQXVDO0NBQ2hEO0NBQ0Y7QUFDRDtBQUNFO0lBQ0UsMENBQTBDO1lBQ2xDLGtDQUFrQztDQUMzQztBQUNEO0lBQ0UsK0NBQStDO1lBQ3ZDLHVDQUF1QztDQUNoRDtDQUNGO0FBQ0Q7QUFDRTtJQUNFLDhDQUE4QztZQUN0QyxzQ0FBc0M7Q0FDL0M7QUFDRDtJQUNFLDBDQUEwQztZQUNsQyxrQ0FBa0M7Q0FDM0M7Q0FDRjtBQUNEO0FBQ0U7SUFDRSw4Q0FBOEM7WUFDdEMsc0NBQXNDO0NBQy9DO0FBQ0Q7SUFDRSwwQ0FBMEM7WUFDbEMsa0NBQWtDO0NBQzNDO0NBQ0Y7QUFDRDtBQUNFO0lBQ0UsV0FBVztDQUNaO0FBQ0Q7SUFDRSxXQUFXO0NBQ1o7Q0FDRjtBQUNEO0FBQ0U7SUFDRSxXQUFXO0NBQ1o7QUFDRDtJQUNFLFdBQVc7Q0FDWjtDQUNGO0FBQ0Q7QUFDRTtJQUNFLFdBQVc7Q0FDWjtBQUNEO0lBQ0UsV0FBVztDQUNaO0NBQ0Y7QUFDRDtBQUNFO0lBQ0UsV0FBVztDQUNaO0FBQ0Q7SUFDRSxXQUFXO0NBQ1o7Q0FDRlwiLFwiZmlsZVwiOlwibWF0ZXJpYWxfZ3JlZW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5mbGF0cGlja3ItY2FsZW5kYXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgbWF4LWhlaWdodDogMDtcXG4gIG9wYWNpdHk6IDA7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IG5vbmU7XFxuICAgICAgICAgIGFuaW1hdGlvbjogbm9uZTtcXG4gIGRpcmVjdGlvbjogbHRyO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMzA3Ljg3NXB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgICAgIHRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDNweCAxM3B4IHJnYmEoMCwwLDAsMC4wOCk7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IDAgM3B4IDEzcHggcmdiYSgwLDAsMCwwLjA4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5vcGVuLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaW5saW5lIHtcXG4gIG9wYWNpdHk6IDE7XFxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcbiAgb3ZlcmZsb3c6IHZpc2libGU7XFxuICBtYXgtaGVpZ2h0OiA2NDBweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5vcGVuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHotaW5kZXg6IDk5OTk5O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUub3BlbiB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW5Eb3duIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbkRvd24gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmlubGluZSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHRvcDogMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnN0YXRpYyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IGNhbGMoMTAwJSArIDJweCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGljLm9wZW4ge1xcbiAgei1pbmRleDogOTk5O1xcbiAgZGlzcGxheTogYmxvY2s7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaGFzV2Vla3Mge1xcbiAgd2lkdGg6IGF1dG87XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1dlZWtzIC5kYXlDb250YWluZXIsXFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzVGltZSAuZGF5Q29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1dlZWtzIC5kYXlDb250YWluZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDA7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc2hvd1RpbWVJbnB1dC5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnNob3dUaW1lSW5wdXQuaGFzVGltZSAuZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyIHtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc2hvd1RpbWVJbnB1dC5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIubm9DYWxlbmRhci5oYXNUaW1lIC5mbGF0cGlja3ItdGltZSB7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YWZ0ZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIGJvcmRlcjogc29saWQgdHJhbnNwYXJlbnQ7XFxuICBjb250ZW50OiAnJztcXG4gIGhlaWdodDogMDtcXG4gIHdpZHRoOiAwO1xcbiAgbGVmdDogMjJweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5yaWdodE1vc3Q6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmFmdGVyIHtcXG4gIGxlZnQ6IGF1dG87XFxuICByaWdodDogMjJweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmUge1xcbiAgYm9yZGVyLXdpZHRoOiA1cHg7XFxuICBtYXJnaW46IDAgLTVweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciB7XFxuICBib3JkZXItd2lkdGg6IDRweDtcXG4gIG1hcmdpbjogMCAtNHB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmFmdGVyIHtcXG4gIGJvdHRvbTogMTAwJTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmUge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICMxYmJjOWI7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXIge1xcbiAgdG9wOiAxMDAlO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmJlZm9yZSB7XFxuICBib3JkZXItdG9wLWNvbG9yOiByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uZmxhdHBpY2tyLXdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxhdHBpY2tyLW1vbnRoIHtcXG4gIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwO1xcbiAgYmFja2dyb3VuZDogIzFiYmM5YjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgZmlsbDogI2ZmZjtcXG4gIGhlaWdodDogMjhweDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGgge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwcHg7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIGhlaWdodDogMjhweDtcXG4gIHBhZGRpbmc6IDEwcHggY2FsYygzLjU3JSAtIDEuNXB4KTtcXG4gIHotaW5kZXg6IDM7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCBpLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCBpIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLmZsYXRwaWNrci1wcmV2LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aC5mbGF0cGlja3ItcHJldi1tb250aCB7XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxuICBsZWZ0OiAwO1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG59XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi5mbGF0cGlja3ItcHJldi1tb250aC5mbGF0cGlja3ItbmV4dC1tb250aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGguZmxhdHBpY2tyLW5leHQtbW9udGgge1xcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbiAgcmlnaHQ6IDA7XFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbn1cXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aDpob3ZlciB7XFxuICBjb2xvcjogI2JiYjtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoOmhvdmVyIHN2ZyxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGg6aG92ZXIgc3ZnIHtcXG4gIGZpbGw6ICNmNjQ3NDc7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCBzdmcsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIHN2ZyB7XFxuICB3aWR0aDogMTRweDtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIHN2ZyBwYXRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCBzdmcgcGF0aCB7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IGZpbGwgMC4xcztcXG4gIHRyYW5zaXRpb246IGZpbGwgMC4xcztcXG4gIGZpbGw6IGluaGVyaXQ7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0LFxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgaW5wdXQge1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIHdpZHRoOiAxNHB4O1xcbiAgcGFkZGluZzogMCA0cHggMCAycHg7XFxuICBoZWlnaHQ6IDUwJTtcXG4gIGxpbmUtaGVpZ2h0OiA1MCU7XFxuICBvcGFjaXR5OiAwO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjA1KTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4xKTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMik7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbjphZnRlciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzMyU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwIHtcXG4gIHRvcDogMDtcXG4gIGJvcmRlci1ib3R0b206IDA7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1ib3R0b206IDRweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuNik7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd24ge1xcbiAgdG9wOiA1MCU7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXRvcDogNHB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC42KTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHN2ZyB7XFxuICB3aWR0aDogaW5oZXJpdDtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHN2ZyBwYXRoIHtcXG4gIGZpbGw6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG59XFxuLm51bUlucHV0V3JhcHBlcjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyOmhvdmVyIHNwYW4ge1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHtcXG4gIGZvbnQtc2l6ZTogMTM1JTtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDc1JTtcXG4gIGxlZnQ6IDEyLjUlO1xcbiAgcGFkZGluZzogNi4xNnB4IDAgMCAwO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZUxlZnQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZUxlZnROZXcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGVhc2UsIGZwU2xpZGVMZWZ0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlUmlnaHQge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZVJpZ2h0TmV3IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggc3Bhbi5jdXItbW9udGgge1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogNzAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBtYXJnaW4tbGVmdDogMC41Y2g7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggc3Bhbi5jdXItbW9udGg6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDZjaDtcXG4gIHdpZHRoOiA3Y2hcXFxcMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMCAwIDAgMC41Y2g7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXNpemU6IGluaGVyaXQ7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGhlaWdodDogaW5pdGlhbDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB2ZXJ0aWNhbC1hbGlnbjogaW5pdGlhbDtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcltkaXNhYmxlZF0sXFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyW2Rpc2FibGVkXTpob3ZlciB7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmZsYXRwaWNrci13ZWVrZGF5cyB7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC1hbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDI4cHg7XFxufVxcbnNwYW4uZmxhdHBpY2tyLXdlZWtkYXkge1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgZm9udC1zaXplOiA5MCU7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgY29sb3I6IHJnYmEoMCwwLDAsMC41NCk7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIG1hcmdpbjogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcbi5kYXlDb250YWluZXIsXFxuLmZsYXRwaWNrci13ZWVrcyB7XFxuICBwYWRkaW5nOiAxcHggMCAwIDA7XFxufVxcbi5mbGF0cGlja3ItZGF5cyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMzA3Ljg3NXB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxuICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItZGF5czpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uZGF5Q29udGFpbmVyIHtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdXRsaW5lOiAwO1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICBtaW4td2lkdGg6IDMwNy44NzVweDtcXG4gIG1heC13aWR0aDogMzA3Ljg3NXB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWZsZXgtd3JhcDogd3JhcDtcXG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXgtd3JhcDogd3JhcDtcXG4gIC1tcy1mbGV4LXBhY2s6IGp1c3RpZnk7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0LFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdE5ldyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZUxlZnROZXcge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZVJpZ2h0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVSaWdodE5ldyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZVJpZ2h0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1kYXkge1xcbiAgYmFja2dyb3VuZDogbm9uZTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogIzQ4NDg0ODtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB3aWR0aDogMTQuMjg1NzE0MyU7XFxuICAtd2Via2l0LWZsZXgtYmFzaXM6IDE0LjI4NTcxNDMlO1xcbiAgICAgIC1tcy1mbGV4LXByZWZlcnJlZC1zaXplOiAxNC4yODU3MTQzJTtcXG4gICAgICAgICAgZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XFxuICBtYXgtd2lkdGg6IDM5cHg7XFxuICBoZWlnaHQ6IDM5cHg7XFxuICBsaW5lLWhlaWdodDogMzlweDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtcGFjazogY2VudGVyO1xcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmZsYXRwaWNrci1kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheS50b2RheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXk6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5OmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheTpmb2N1cyB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBvdXRsaW5lOiAwO1xcbiAgYmFja2dyb3VuZDogI2UyZTJlMjtcXG4gIGJvcmRlci1jb2xvcjogI2UyZTJlMjtcXG59XFxuLmZsYXRwaWNrci1kYXkudG9kYXkge1xcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xcbn1cXG4uZmxhdHBpY2tyLWRheS50b2RheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS50b2RheTpmb2N1cyB7XFxuICBib3JkZXItY29sb3I6ICNiYmI7XFxuICBiYWNrZ3JvdW5kOiAjYmJiO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZDpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2U6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UubmV4dE1vbnRoRGF5IHtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGJvcmRlci1jb2xvcjogIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4IDAgMCA1MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLmVuZFJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDAgNTBweCA1MHB4IDA7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5zdGFydFJhbmdlICsgLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2Uge1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtMTBweCAwIDAgIzFiYmM5YjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTEwcHggMCAwICMxYmJjOWI7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5zdGFydFJhbmdlLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweDtcXG59XFxuLmZsYXRwaWNrci1kYXkuaW5SYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNXB4IDAgMCAjZTJlMmUyLCA1cHggMCAwICNlMmUyZTI7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC01cHggMCAwICNlMmUyZTIsIDVweCAwIDAgI2UyZTJlMjtcXG59XFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQsXFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQ6aG92ZXIge1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkLFxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZCxcXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLm5leHRNb250aERheSB7XFxuICBjb2xvcjogcmdiYSg3Miw3Miw3MiwwLjMpO1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4uZmxhdHBpY2tyLWRheS53ZWVrLnNlbGVjdGVkIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC01cHggMCAwICMxYmJjOWIsIDVweCAwIDAgIzFiYmM5YjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTVweCAwIDAgIzFiYmM5YiwgNXB4IDAgMCAjMWJiYzliO1xcbn1cXG4ucmFuZ2VNb2RlIC5mbGF0cGlja3ItZGF5IHtcXG4gIG1hcmdpbi10b3A6IDFweDtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciAuZmxhdHBpY2tyLXdlZWtzIHtcXG4gIHBhZGRpbmc6IDAgMTJweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla2RheSB7XFxuICBmbG9hdDogbm9uZTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgc3Bhbi5mbGF0cGlja3ItZGF5IHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IG5vbmU7XFxufVxcbi5mbGF0cGlja3ItaW5uZXJDb250YWluZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1yQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5mbGF0cGlja3ItdGltZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdXRsaW5lOiAwO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBoZWlnaHQ6IDA7XFxuICBsaW5lLWhlaWdodDogNDBweDtcXG4gIG1heC1oZWlnaHQ6IDQwcHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDVweCA1cHg7XFxufVxcbi5mbGF0cGlja3ItdGltZTphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIGRpc3BsYXk6IHRhYmxlO1xcbiAgY2xlYXI6IGJvdGg7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtd2Via2l0LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICB3aWR0aDogNDAlO1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcDphZnRlciB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjNDg0ODQ4O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUuaGFzU2Vjb25kcyAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHdpZHRoOiAyNiU7XFxufVxcbi5mbGF0cGlja3ItdGltZS50aW1lMjRociAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHdpZHRoOiA0OSU7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dCB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogIzQ4NDg0ODtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0LmZsYXRwaWNrci1ob3VyIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLW1pbnV0ZSxcXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLXNlY29uZCB7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQ6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG4gIGJvcmRlcjogMDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItdGltZS1zZXBhcmF0b3IsXFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xcbiAgaGVpZ2h0OiBpbmhlcml0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB3aWR0aDogMiU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgLXdlYmtpdC1hbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtaXRlbS1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtIHtcXG4gIG91dGxpbmU6IDA7XFxuICB3aWR0aDogMTglO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG06aG92ZXIsXFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG06Zm9jdXMge1xcbiAgYmFja2dyb3VuZDogI2VjZWNlYztcXG59XFxuLmZsYXRwaWNrci1pbnB1dFtyZWFkb25seV0ge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlSW5Eb3duIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLTIwcHgsIDApO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmcEZhZGVJbkRvd24ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZUxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZUxlZnQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlTGVmdE5ldyB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZUxlZnROZXcge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZVJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZVJpZ2h0IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlUmlnaHROZXcge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZVJpZ2h0TmV3IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZwRmFkZU91dCB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwRmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZwRmFkZUluIHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGQ0NDNmZTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLmNzc1xuLy8gbW9kdWxlIGlkID0gMTExNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9EYXRlcGlja2VyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNzk4ZDU2NTJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQ0NDNmZTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vRGF0ZXBpY2tlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQ0NDNmZTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vRGF0ZXBpY2tlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGQ0NDNmZTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmEuaW5wdXQtYnV0dG9uIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBa0hBO0lBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiRGF0ZXBpY2tlci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IGNsYXNzPVxcXCJmbGF0cGlja3JcXFwiPlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIlxcbiAgICAgICAgICAgICAgICA6cGxhY2Vob2xkZXI9XFxcInBsYWNlaG9sZGVyXFxcIlxcbiAgICAgICAgICAgICAgICA6aWQ9XFxcIidkYXRlLWlucHV0LScgKyBfdWlkXFxcIlxcbiAgICAgICAgICAgICAgICA6bmFtZT1cXFwibmFtZVxcXCJcXG4gICAgICAgICAgICAgICAgOnZhbHVlPVxcXCJ2YWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImlucHV0IGNvbnRyb2xcXFwiXFxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwiZGlzYWJsZWRcXFwiPlxcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhcyBmYS1jbG9ja1xcXCJcXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcInRpbWVPbmx5XFxcIj5cXG4gICAgICAgICAgICAgICAgPC9pPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLWNhbGVuZGFyLWFsdFxcXCIgdi1lbHNlPjwvaT5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCBGbGF0cGlja3IgZnJvbSAnZmxhdHBpY2tyJztcXG5cXG4vLyBjb25zdCBGbGF0cGlja3JMMTBucyA9IHtcXG4vLyAgICAgcm86IHJlcXVpcmUoJ2ZsYXRwaWNrci9kaXN0L2wxMG4vcm8uanMnKS5ybyxcXG4vLyB9O1xcbi8vIEZsYXRwaWNrci5sb2NhbGl6ZShGbGF0cGlja3JMMTBuc1tTdG9yZS51c2VyLnByZWZlcmVuY2VzLmdsb2JhbC5sYW5nXSk7IC8vZml4bWVcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIHByb3BzOiB7XFxuICAgICAgICB2YWx1ZToge1xcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICAgICAgdmFsaWRhdGUodmFsdWUpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZydcXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgICAgIG5hbWU6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICB0aW1lOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICB0aW1lT25seToge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogJ1NlbGVjdCBEYXRlJywgLy8gZml4bWVcXG4gICAgICAgIH0sXFxuICAgICAgICBkaXNhYmxlZDoge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgZm9ybWF0OiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdkLW0tWScsXFxuICAgICAgICB9LFxcbiAgICAgICAgaW5wdXRDbGFzczoge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICBkZWZhdWx0OiAnZm9ybS1jb250cm9sJyxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIHBpY2tlcjogbnVsbCxcXG4gICAgICAgIH07XFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICBjb25maWcoc2VsZiA9IHRoaXMpIHtcXG4gICAgICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgICAgICB3ZWVrTnVtYmVyczogZmFsc2UsXFxuICAgICAgICAgICAgICAgIGRlZmF1bHREYXRlOiB0aGlzLnZhbHVlLFxcbiAgICAgICAgICAgICAgICBkYXRlRm9ybWF0OiB0aGlzLmZvcm1hdCxcXG4gICAgICAgICAgICAgICAgYWxsb3dJbnB1dDogZmFsc2UsXFxuICAgICAgICAgICAgICAgIGNsaWNrT3BlbnM6IHRydWUsXFxuICAgICAgICAgICAgICAgIG5vQ2FsZW5kYXI6IHRoaXMudGltZU9ubHksXFxuICAgICAgICAgICAgICAgIGVuYWJsZVRpbWU6IHRoaXMudGltZSB8fCB0aGlzLnRpbWVPbmx5LFxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShzZWxlY3RlZERhdGVzLCBkYXRlU3RyKSB7XFxuICAgICAgICAgICAgICAgICAgICBzZWxmLiRlbWl0KCdpbnB1dCcsIGRhdGVTdHIpO1xcbiAgICAgICAgICAgICAgICB9LFxcbiAgICAgICAgICAgIH07XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICB3YXRjaDoge1xcbiAgICAgICAgdmFsdWUobmV3VmFsdWUpIHtcXG4gICAgICAgICAgICB0aGlzLnBpY2tlci5zZXREYXRlKG5ld1ZhbHVlKTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICB0aGlzLnBpY2tlciA9IG5ldyBGbGF0cGlja3IodGhpcy4kZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKSwgdGhpcy5jb25maWcpO1xcbiAgICB9LFxcblxcbiAgICBiZWZvcmVEZXN0cm95KCkge1xcbiAgICAgICAgdGhpcy5waWNrZXIuZGVzdHJveSgpO1xcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlIHNyYz1cXFwiZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLmNzc1xcXCI+PC9zdHlsZT5cXG5cXG48c3R5bGU+XFxuXFxuICAgIGEuaW5wdXQtYnV0dG9uIHtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRkNDQzZmUyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTExN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJmbGF0cGlja3JcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaGFzLWljb25zLXJpZ2h0XCI+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cInBsYWNlaG9sZGVyXCJcbiAgICAgICAgICAgICAgICA6aWQ9XCInZGF0ZS1pbnB1dC0nICsgX3VpZFwiXG4gICAgICAgICAgICAgICAgOm5hbWU9XCJuYW1lXCJcbiAgICAgICAgICAgICAgICA6dmFsdWU9XCJ2YWx1ZVwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJpbnB1dCBjb250cm9sXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2xvY2tcIlxuICAgICAgICAgICAgICAgICAgICB2LWlmPVwidGltZU9ubHlcIj5cbiAgICAgICAgICAgICAgICA8L2k+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtY2FsZW5kYXItYWx0XCIgdi1lbHNlPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBGbGF0cGlja3IgZnJvbSAnZmxhdHBpY2tyJztcblxuLy8gY29uc3QgRmxhdHBpY2tyTDEwbnMgPSB7XG4vLyAgICAgcm86IHJlcXVpcmUoJ2ZsYXRwaWNrci9kaXN0L2wxMG4vcm8uanMnKS5ybyxcbi8vIH07XG4vLyBGbGF0cGlja3IubG9jYWxpemUoRmxhdHBpY2tyTDEwbnNbU3RvcmUudXNlci5wcmVmZXJlbmNlcy5nbG9iYWwubGFuZ10pOyAvL2ZpeG1lXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdmFsaWRhdGUodmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xuICAgICAgICAgICAgICAgICAgICAgICAgfHwgdmFsdWUgaW5zdGFuY2VvZiBEYXRlIHx8IHZhbHVlIGluc3RhbmNlb2YgQXJyYXk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBuYW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICB0aW1lOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVPbmx5OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiAnU2VsZWN0IERhdGUnLCAvLyBmaXhtZVxuICAgICAgICB9LFxuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdkLW0tWScsXG4gICAgICAgIH0sXG4gICAgICAgIGlucHV0Q2xhc3M6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdmb3JtLWNvbnRyb2wnLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcGlja2VyOiBudWxsLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICBjb25maWcoc2VsZiA9IHRoaXMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgd2Vla051bWJlcnM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRlZmF1bHREYXRlOiB0aGlzLnZhbHVlLFxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ6IHRoaXMuZm9ybWF0LFxuICAgICAgICAgICAgICAgIGFsbG93SW5wdXQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGNsaWNrT3BlbnM6IHRydWUsXG4gICAgICAgICAgICAgICAgbm9DYWxlbmRhcjogdGhpcy50aW1lT25seSxcbiAgICAgICAgICAgICAgICBlbmFibGVUaW1lOiB0aGlzLnRpbWUgfHwgdGhpcy50aW1lT25seSxcbiAgICAgICAgICAgICAgICBvbkNoYW5nZShzZWxlY3RlZERhdGVzLCBkYXRlU3RyKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXQoJ2lucHV0JywgZGF0ZVN0cik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIHZhbHVlKG5ld1ZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnBpY2tlci5zZXREYXRlKG5ld1ZhbHVlKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgdGhpcy5waWNrZXIgPSBuZXcgRmxhdHBpY2tyKHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0JyksIHRoaXMuY29uZmlnKTtcbiAgICB9LFxuXG4gICAgYmVmb3JlRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5waWNrZXIuZGVzdHJveSgpO1xuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIHNyYz1cImZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3NcIj48L3N0eWxlPlxuXG48c3R5bGU+XG5cbiAgICBhLmlucHV0LWJ1dHRvbiB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWUiLCIvKiBmbGF0cGlja3IgdjMuMS40LCBAbGljZW5zZSBNSVQgKi9cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG5cdHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpIDpcblx0dHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kID8gZGVmaW5lKGZhY3RvcnkpIDpcblx0KGdsb2JhbC5mbGF0cGlja3IgPSBmYWN0b3J5KCkpO1xufSh0aGlzLCAoZnVuY3Rpb24gKCkgeyAndXNlIHN0cmljdCc7XG5cbi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG5cclxuXHJcbnZhciBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgZm9yICh2YXIgcywgaSA9IDEsIG4gPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XHJcbiAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHQ7XHJcbn07XG5cbmZ1bmN0aW9uIGNvbXBhcmVEYXRlcyhkYXRlMSwgZGF0ZTIsIHRpbWVsZXNzKSB7XHJcbiAgICBpZiAodGltZWxlc3MgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgcmV0dXJuIChuZXcgRGF0ZShkYXRlMS5nZXRUaW1lKCkpLnNldEhvdXJzKDAsIDAsIDAsIDApIC1cclxuICAgICAgICAgICAgbmV3IERhdGUoZGF0ZTIuZ2V0VGltZSgpKS5zZXRIb3VycygwLCAwLCAwLCAwKSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0ZTEuZ2V0VGltZSgpIC0gZGF0ZTIuZ2V0VGltZSgpO1xyXG59XHJcbnZhciBtb250aFRvU3RyID0gZnVuY3Rpb24gKG1vbnRoTnVtYmVyLCBzaG9ydGhhbmQsIGxvY2FsZSkgeyByZXR1cm4gbG9jYWxlLm1vbnRoc1tzaG9ydGhhbmQgPyBcInNob3J0aGFuZFwiIDogXCJsb25naGFuZFwiXVttb250aE51bWJlcl07IH07XHJcbnZhciBnZXRXZWVrID0gZnVuY3Rpb24gKGdpdmVuRGF0ZSkge1xyXG4gICAgdmFyIG9uZWphbiA9IG5ldyBEYXRlKGdpdmVuRGF0ZS5nZXRGdWxsWWVhcigpLCAwLCAxKTtcclxuICAgIHJldHVybiBNYXRoLmNlaWwoKChnaXZlbkRhdGUuZ2V0VGltZSgpIC0gb25lamFuLmdldFRpbWUoKSkgLyA4NjQwMDAwMCArXHJcbiAgICAgICAgb25lamFuLmdldERheSgpICtcclxuICAgICAgICAxKSAvXHJcbiAgICAgICAgNyk7XHJcbn07XHJcbnZhciBkdXJhdGlvbiA9IHtcclxuICAgIERBWTogODY0MDAwMDAsXHJcbn07XG5cbnZhciBkZWZhdWx0cyA9IHtcclxuICAgIF9kaXNhYmxlOiBbXSxcclxuICAgIF9lbmFibGU6IFtdLFxyXG4gICAgYWxsb3dJbnB1dDogZmFsc2UsXHJcbiAgICBhbHRGb3JtYXQ6IFwiRiBqLCBZXCIsXHJcbiAgICBhbHRJbnB1dDogZmFsc2UsXHJcbiAgICBhbHRJbnB1dENsYXNzOiBcImZvcm0tY29udHJvbCBpbnB1dFwiLFxyXG4gICAgYW5pbWF0ZTogd2luZG93ICYmIHdpbmRvdy5uYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFXCIpID09PSAtMSxcclxuICAgIGFyaWFEYXRlRm9ybWF0OiBcIkYgaiwgWVwiLFxyXG4gICAgY2xpY2tPcGVuczogdHJ1ZSxcclxuICAgIGNsb3NlT25TZWxlY3Q6IHRydWUsXHJcbiAgICBjb25qdW5jdGlvbjogXCIsIFwiLFxyXG4gICAgZGF0ZUZvcm1hdDogXCJZLW0tZFwiLFxyXG4gICAgZGVmYXVsdEhvdXI6IDEyLFxyXG4gICAgZGVmYXVsdE1pbnV0ZTogMCxcclxuICAgIGRlZmF1bHRTZWNvbmRzOiAwLFxyXG4gICAgZGlzYWJsZTogW10sXHJcbiAgICBkaXNhYmxlTW9iaWxlOiBmYWxzZSxcclxuICAgIGVuYWJsZTogW10sXHJcbiAgICBlbmFibGVTZWNvbmRzOiBmYWxzZSxcclxuICAgIGVuYWJsZVRpbWU6IGZhbHNlLFxyXG4gICAgZ2V0V2VlazogZ2V0V2VlayxcclxuICAgIGhvdXJJbmNyZW1lbnQ6IDEsXHJcbiAgICBpZ25vcmVkRm9jdXNFbGVtZW50czogW10sXHJcbiAgICBpbmxpbmU6IGZhbHNlLFxyXG4gICAgbG9jYWxlOiBcImRlZmF1bHRcIixcclxuICAgIG1pbnV0ZUluY3JlbWVudDogNSxcclxuICAgIG1vZGU6IFwic2luZ2xlXCIsXHJcbiAgICBuZXh0QXJyb3c6IFwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J00xMy4yMDcgOC40NzJsLTcuODU0IDcuODU0LTAuNzA3LTAuNzA3IDcuMTQ2LTcuMTQ2LTcuMTQ2LTcuMTQ4IDAuNzA3LTAuNzA3IDcuODU0IDcuODU0eicgLz48L3N2Zz5cIixcclxuICAgIG5vQ2FsZW5kYXI6IGZhbHNlLFxyXG4gICAgb25DaGFuZ2U6IFtdLFxyXG4gICAgb25DbG9zZTogW10sXHJcbiAgICBvbkRheUNyZWF0ZTogW10sXHJcbiAgICBvbkRlc3Ryb3k6IFtdLFxyXG4gICAgb25LZXlEb3duOiBbXSxcclxuICAgIG9uTW9udGhDaGFuZ2U6IFtdLFxyXG4gICAgb25PcGVuOiBbXSxcclxuICAgIG9uUGFyc2VDb25maWc6IFtdLFxyXG4gICAgb25SZWFkeTogW10sXHJcbiAgICBvblZhbHVlVXBkYXRlOiBbXSxcclxuICAgIG9uWWVhckNoYW5nZTogW10sXHJcbiAgICBwbHVnaW5zOiBbXSxcclxuICAgIHBvc2l0aW9uOiBcImF1dG9cIixcclxuICAgIHBvc2l0aW9uRWxlbWVudDogdW5kZWZpbmVkLFxyXG4gICAgcHJldkFycm93OiBcIjxzdmcgdmVyc2lvbj0nMS4xJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnIHhtbG5zOnhsaW5rPSdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rJyB2aWV3Qm94PScwIDAgMTcgMTcnPjxnPjwvZz48cGF0aCBkPSdNNS4yMDcgOC40NzFsNy4xNDYgNy4xNDctMC43MDcgMC43MDctNy44NTMtNy44NTQgNy44NTQtNy44NTMgMC43MDcgMC43MDctNy4xNDcgNy4xNDZ6JyAvPjwvc3ZnPlwiLFxyXG4gICAgc2hvcnRoYW5kQ3VycmVudE1vbnRoOiBmYWxzZSxcclxuICAgIHN0YXRpYzogZmFsc2UsXHJcbiAgICB0aW1lXzI0aHI6IGZhbHNlLFxyXG4gICAgd2Vla051bWJlcnM6IGZhbHNlLFxyXG4gICAgd3JhcDogZmFsc2UsXHJcbn07XG5cbnZhciBlbmdsaXNoID0ge1xyXG4gICAgd2Vla2RheXM6IHtcclxuICAgICAgICBzaG9ydGhhbmQ6IFtcIlN1blwiLCBcIk1vblwiLCBcIlR1ZVwiLCBcIldlZFwiLCBcIlRodVwiLCBcIkZyaVwiLCBcIlNhdFwiXSxcclxuICAgICAgICBsb25naGFuZDogW1xyXG4gICAgICAgICAgICBcIlN1bmRheVwiLFxyXG4gICAgICAgICAgICBcIk1vbmRheVwiLFxyXG4gICAgICAgICAgICBcIlR1ZXNkYXlcIixcclxuICAgICAgICAgICAgXCJXZWRuZXNkYXlcIixcclxuICAgICAgICAgICAgXCJUaHVyc2RheVwiLFxyXG4gICAgICAgICAgICBcIkZyaWRheVwiLFxyXG4gICAgICAgICAgICBcIlNhdHVyZGF5XCIsXHJcbiAgICAgICAgXSxcclxuICAgIH0sXHJcbiAgICBtb250aHM6IHtcclxuICAgICAgICBzaG9ydGhhbmQ6IFtcclxuICAgICAgICAgICAgXCJKYW5cIixcclxuICAgICAgICAgICAgXCJGZWJcIixcclxuICAgICAgICAgICAgXCJNYXJcIixcclxuICAgICAgICAgICAgXCJBcHJcIixcclxuICAgICAgICAgICAgXCJNYXlcIixcclxuICAgICAgICAgICAgXCJKdW5cIixcclxuICAgICAgICAgICAgXCJKdWxcIixcclxuICAgICAgICAgICAgXCJBdWdcIixcclxuICAgICAgICAgICAgXCJTZXBcIixcclxuICAgICAgICAgICAgXCJPY3RcIixcclxuICAgICAgICAgICAgXCJOb3ZcIixcclxuICAgICAgICAgICAgXCJEZWNcIixcclxuICAgICAgICBdLFxyXG4gICAgICAgIGxvbmdoYW5kOiBbXHJcbiAgICAgICAgICAgIFwiSmFudWFyeVwiLFxyXG4gICAgICAgICAgICBcIkZlYnJ1YXJ5XCIsXHJcbiAgICAgICAgICAgIFwiTWFyY2hcIixcclxuICAgICAgICAgICAgXCJBcHJpbFwiLFxyXG4gICAgICAgICAgICBcIk1heVwiLFxyXG4gICAgICAgICAgICBcIkp1bmVcIixcclxuICAgICAgICAgICAgXCJKdWx5XCIsXHJcbiAgICAgICAgICAgIFwiQXVndXN0XCIsXHJcbiAgICAgICAgICAgIFwiU2VwdGVtYmVyXCIsXHJcbiAgICAgICAgICAgIFwiT2N0b2JlclwiLFxyXG4gICAgICAgICAgICBcIk5vdmVtYmVyXCIsXHJcbiAgICAgICAgICAgIFwiRGVjZW1iZXJcIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIGRheXNJbk1vbnRoOiBbMzEsIDI4LCAzMSwgMzAsIDMxLCAzMCwgMzEsIDMxLCAzMCwgMzEsIDMwLCAzMV0sXHJcbiAgICBmaXJzdERheU9mV2VlazogMCxcclxuICAgIG9yZGluYWw6IGZ1bmN0aW9uIChudGgpIHtcclxuICAgICAgICB2YXIgcyA9IG50aCAlIDEwMDtcclxuICAgICAgICBpZiAocyA+IDMgJiYgcyA8IDIxKVxyXG4gICAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xyXG4gICAgICAgIHN3aXRjaCAocyAlIDEwKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInN0XCI7XHJcbiAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIm5kXCI7XHJcbiAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInJkXCI7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0aFwiO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICByYW5nZVNlcGFyYXRvcjogXCIgdG8gXCIsXHJcbiAgICB3ZWVrQWJicmV2aWF0aW9uOiBcIldrXCIsXHJcbiAgICBzY3JvbGxUaXRsZTogXCJTY3JvbGwgdG8gaW5jcmVtZW50XCIsXHJcbiAgICB0b2dnbGVUaXRsZTogXCJDbGljayB0byB0b2dnbGVcIixcclxuICAgIGFtUE06IFtcIkFNXCIsIFwiUE1cIl0sXHJcbn07XG5cbnZhciBwYWQgPSBmdW5jdGlvbiAobnVtYmVyKSB7IHJldHVybiAoXCIwXCIgKyBudW1iZXIpLnNsaWNlKC0yKTsgfTtcclxudmFyIGludCA9IGZ1bmN0aW9uIChib29sKSB7IHJldHVybiAoYm9vbCA9PT0gdHJ1ZSA/IDEgOiAwKTsgfTtcclxuZnVuY3Rpb24gZGVib3VuY2UoZnVuYywgd2FpdCwgaW1tZWRpYXRlKSB7XHJcbiAgICBpZiAoaW1tZWRpYXRlID09PSB2b2lkIDApIHsgaW1tZWRpYXRlID0gZmFsc2U7IH1cclxuICAgIHZhciB0aW1lb3V0O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHRoaXMsIGFyZ3MgPSBhcmd1bWVudHM7XHJcbiAgICAgICAgdGltZW91dCAhPT0gbnVsbCAmJiBjbGVhclRpbWVvdXQodGltZW91dCk7XHJcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKCFpbW1lZGlhdGUpXHJcbiAgICAgICAgICAgICAgICBmdW5jLmFwcGx5KGNvbnRleHQsIGFyZ3MpO1xyXG4gICAgICAgIH0sIHdhaXQpO1xyXG4gICAgICAgIGlmIChpbW1lZGlhdGUgJiYgIXRpbWVvdXQpXHJcbiAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICB9O1xyXG59XHJcbnZhciBhcnJheWlmeSA9IGZ1bmN0aW9uIChvYmopIHtcclxuICAgIHJldHVybiBvYmogaW5zdGFuY2VvZiBBcnJheSA/IG9iaiA6IFtvYmpdO1xyXG59O1xyXG5mdW5jdGlvbiBtb3VzZURlbHRhKGUpIHtcclxuICAgIHZhciBkZWx0YSA9IGUud2hlZWxEZWx0YSB8fCAtZS5kZWx0YVk7XHJcbiAgICByZXR1cm4gZGVsdGEgPj0gMCA/IDEgOiAtMTtcclxufVxuXG5mdW5jdGlvbiB0b2dnbGVDbGFzcyhlbGVtLCBjbGFzc05hbWUsIGJvb2wpIHtcclxuICAgIGlmIChib29sID09PSB0cnVlKVxyXG4gICAgICAgIHJldHVybiBlbGVtLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgIGVsZW0uY2xhc3NMaXN0LnJlbW92ZShjbGFzc05hbWUpO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnLCBjbGFzc05hbWUsIGNvbnRlbnQpIHtcclxuICAgIHZhciBlID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGFnKTtcclxuICAgIGNsYXNzTmFtZSA9IGNsYXNzTmFtZSB8fCBcIlwiO1xyXG4gICAgY29udGVudCA9IGNvbnRlbnQgfHwgXCJcIjtcclxuICAgIGUuY2xhc3NOYW1lID0gY2xhc3NOYW1lO1xyXG4gICAgaWYgKGNvbnRlbnQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICBlLnRleHRDb250ZW50ID0gY29udGVudDtcclxuICAgIHJldHVybiBlO1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyTm9kZShub2RlKSB7XHJcbiAgICB3aGlsZSAobm9kZS5maXJzdENoaWxkKVxyXG4gICAgICAgIG5vZGUucmVtb3ZlQ2hpbGQobm9kZS5maXJzdENoaWxkKTtcclxufVxyXG5mdW5jdGlvbiBmaW5kUGFyZW50KG5vZGUsIGNvbmRpdGlvbikge1xyXG4gICAgaWYgKGNvbmRpdGlvbihub2RlKSlcclxuICAgICAgICByZXR1cm4gbm9kZTtcclxuICAgIGVsc2UgaWYgKG5vZGUucGFyZW50Tm9kZSlcclxuICAgICAgICByZXR1cm4gZmluZFBhcmVudChub2RlLnBhcmVudE5vZGUsIGNvbmRpdGlvbik7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG59XHJcbmZ1bmN0aW9uIGNyZWF0ZU51bWJlcklucHV0KGlucHV0Q2xhc3NOYW1lKSB7XHJcbiAgICB2YXIgd3JhcHBlciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJudW1JbnB1dFdyYXBwZXJcIiksIG51bUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIFwibnVtSW5wdXQgXCIgKyBpbnB1dENsYXNzTmFtZSksIGFycm93VXAgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImFycm93VXBcIiksIGFycm93RG93biA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiYXJyb3dEb3duXCIpO1xyXG4gICAgbnVtSW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgbnVtSW5wdXQucGF0dGVybiA9IFwiXFxcXGQqXCI7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKG51bUlucHV0KTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJyb3dVcCk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGFycm93RG93bik7XHJcbiAgICByZXR1cm4gd3JhcHBlcjtcclxufVxuXG52YXIgZG9fbm90aGluZyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHVuZGVmaW5lZDsgfTtcclxudmFyIHJldkZvcm1hdCA9IHtcclxuICAgIEQ6IGRvX25vdGhpbmcsXHJcbiAgICBGOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbW9udGhOYW1lLCBsb2NhbGUpIHtcclxuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKGxvY2FsZS5tb250aHMubG9uZ2hhbmQuaW5kZXhPZihtb250aE5hbWUpKTtcclxuICAgIH0sXHJcbiAgICBHOiBmdW5jdGlvbiAoZGF0ZU9iaiwgaG91cikge1xyXG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMocGFyc2VGbG9hdChob3VyKSk7XHJcbiAgICB9LFxyXG4gICAgSDogZnVuY3Rpb24gKGRhdGVPYmosIGhvdXIpIHtcclxuICAgICAgICBkYXRlT2JqLnNldEhvdXJzKHBhcnNlRmxvYXQoaG91cikpO1xyXG4gICAgfSxcclxuICAgIEo6IGZ1bmN0aW9uIChkYXRlT2JqLCBkYXkpIHtcclxuICAgICAgICBkYXRlT2JqLnNldERhdGUocGFyc2VGbG9hdChkYXkpKTtcclxuICAgIH0sXHJcbiAgICBLOiBmdW5jdGlvbiAoZGF0ZU9iaiwgYW1QTSkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMoZGF0ZU9iai5nZXRIb3VycygpICUgMTIgKyAxMiAqIGludCgvcG0vaS50ZXN0KGFtUE0pKSk7XHJcbiAgICB9LFxyXG4gICAgTTogZnVuY3Rpb24gKGRhdGVPYmosIHNob3J0TW9udGgsIGxvY2FsZSkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgobG9jYWxlLm1vbnRocy5zaG9ydGhhbmQuaW5kZXhPZihzaG9ydE1vbnRoKSk7XHJcbiAgICB9LFxyXG4gICAgUzogZnVuY3Rpb24gKGRhdGVPYmosIHNlY29uZHMpIHtcclxuICAgICAgICBkYXRlT2JqLnNldFNlY29uZHMocGFyc2VGbG9hdChzZWNvbmRzKSk7XHJcbiAgICB9LFxyXG4gICAgVTogZnVuY3Rpb24gKF8sIHVuaXhTZWNvbmRzKSB7IHJldHVybiBuZXcgRGF0ZShwYXJzZUZsb2F0KHVuaXhTZWNvbmRzKSAqIDEwMDApOyB9LFxyXG4gICAgVzogZnVuY3Rpb24gKGRhdGVPYmosIHdlZWtOdW0pIHtcclxuICAgICAgICB2YXIgd2Vla051bWJlciA9IHBhcnNlSW50KHdlZWtOdW0pO1xyXG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlT2JqLmdldEZ1bGxZZWFyKCksIDAsIDIgKyAod2Vla051bWJlciAtIDEpICogNywgMCwgMCwgMCwgMCk7XHJcbiAgICB9LFxyXG4gICAgWTogZnVuY3Rpb24gKGRhdGVPYmosIHllYXIpIHtcclxuICAgICAgICBkYXRlT2JqLnNldEZ1bGxZZWFyKHBhcnNlRmxvYXQoeWVhcikpO1xyXG4gICAgfSxcclxuICAgIFo6IGZ1bmN0aW9uIChfLCBJU09EYXRlKSB7IHJldHVybiBuZXcgRGF0ZShJU09EYXRlKTsgfSxcclxuICAgIGQ6IGZ1bmN0aW9uIChkYXRlT2JqLCBkYXkpIHtcclxuICAgICAgICBkYXRlT2JqLnNldERhdGUocGFyc2VGbG9hdChkYXkpKTtcclxuICAgIH0sXHJcbiAgICBoOiBmdW5jdGlvbiAoZGF0ZU9iaiwgaG91cikge1xyXG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMocGFyc2VGbG9hdChob3VyKSk7XHJcbiAgICB9LFxyXG4gICAgaTogZnVuY3Rpb24gKGRhdGVPYmosIG1pbnV0ZXMpIHtcclxuICAgICAgICBkYXRlT2JqLnNldE1pbnV0ZXMocGFyc2VGbG9hdChtaW51dGVzKSk7XHJcbiAgICB9LFxyXG4gICAgajogZnVuY3Rpb24gKGRhdGVPYmosIGRheSkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xyXG4gICAgfSxcclxuICAgIGw6IGRvX25vdGhpbmcsXHJcbiAgICBtOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbW9udGgpIHtcclxuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKHBhcnNlRmxvYXQobW9udGgpIC0gMSk7XHJcbiAgICB9LFxyXG4gICAgbjogZnVuY3Rpb24gKGRhdGVPYmosIG1vbnRoKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRNb250aChwYXJzZUZsb2F0KG1vbnRoKSAtIDEpO1xyXG4gICAgfSxcclxuICAgIHM6IGZ1bmN0aW9uIChkYXRlT2JqLCBzZWNvbmRzKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRTZWNvbmRzKHBhcnNlRmxvYXQoc2Vjb25kcykpO1xyXG4gICAgfSxcclxuICAgIHc6IGRvX25vdGhpbmcsXHJcbiAgICB5OiBmdW5jdGlvbiAoZGF0ZU9iaiwgeWVhcikge1xyXG4gICAgICAgIGRhdGVPYmouc2V0RnVsbFllYXIoMjAwMCArIHBhcnNlRmxvYXQoeWVhcikpO1xyXG4gICAgfSxcclxufTtcclxudmFyIHRva2VuUmVnZXggPSB7XHJcbiAgICBEOiBcIihcXFxcdyspXCIsXHJcbiAgICBGOiBcIihcXFxcdyspXCIsXHJcbiAgICBHOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgSDogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIEo6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXFxcXHcrXCIsXHJcbiAgICBLOiBcIihhbXxBTXxBbXxhTXxwbXxQTXxQbXxwTSlcIixcclxuICAgIE06IFwiKFxcXFx3KylcIixcclxuICAgIFM6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBVOiBcIiguKylcIixcclxuICAgIFc6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBZOiBcIihcXFxcZHs0fSlcIixcclxuICAgIFo6IFwiKC4rKVwiLFxyXG4gICAgZDogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIGg6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBpOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgajogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIGw6IFwiKFxcXFx3KylcIixcclxuICAgIG06IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBuOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgczogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIHc6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICB5OiBcIihcXFxcZHsyfSlcIixcclxufTtcclxudmFyIGZvcm1hdHMgPSB7XHJcbiAgICBaOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS50b0lTT1N0cmluZygpOyB9LFxyXG4gICAgRDogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXMuc2hvcnRoYW5kW2Zvcm1hdHMudyhkYXRlLCBsb2NhbGUsIG9wdGlvbnMpXTtcclxuICAgIH0sXHJcbiAgICBGOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIG1vbnRoVG9TdHIoZm9ybWF0cy5uKGRhdGUsIGxvY2FsZSwgb3B0aW9ucykgLSAxLCBmYWxzZSwgbG9jYWxlKTtcclxuICAgIH0sXHJcbiAgICBHOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhZChmb3JtYXRzLmgoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSk7XHJcbiAgICB9LFxyXG4gICAgSDogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldEhvdXJzKCkpOyB9LFxyXG4gICAgSjogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbGUub3JkaW5hbCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gZGF0ZS5nZXREYXRlKCkgKyBsb2NhbGUub3JkaW5hbChkYXRlLmdldERhdGUoKSlcclxuICAgICAgICAgICAgOiBkYXRlLmdldERhdGUoKTtcclxuICAgIH0sXHJcbiAgICBLOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gKGRhdGUuZ2V0SG91cnMoKSA+IDExID8gXCJQTVwiIDogXCJBTVwiKTsgfSxcclxuICAgIE06IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUpIHtcclxuICAgICAgICByZXR1cm4gbW9udGhUb1N0cihkYXRlLmdldE1vbnRoKCksIHRydWUsIGxvY2FsZSk7XHJcbiAgICB9LFxyXG4gICAgUzogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldFNlY29uZHMoKSk7IH0sXHJcbiAgICBVOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRUaW1lKCkgLyAxMDAwOyB9LFxyXG4gICAgVzogZnVuY3Rpb24gKGRhdGUsIF8sIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gb3B0aW9ucy5nZXRXZWVrKGRhdGUpO1xyXG4gICAgfSxcclxuICAgIFk6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldEZ1bGxZZWFyKCk7IH0sXHJcbiAgICBkOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0RGF0ZSgpKTsgfSxcclxuICAgIGg6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiAoZGF0ZS5nZXRIb3VycygpICUgMTIgPyBkYXRlLmdldEhvdXJzKCkgJSAxMiA6IDEyKTsgfSxcclxuICAgIGk6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXRNaW51dGVzKCkpOyB9LFxyXG4gICAgajogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0RGF0ZSgpOyB9LFxyXG4gICAgbDogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbGUud2Vla2RheXMubG9uZ2hhbmRbZGF0ZS5nZXREYXkoKV07XHJcbiAgICB9LFxyXG4gICAgbTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKTsgfSxcclxuICAgIG46IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldE1vbnRoKCkgKyAxOyB9LFxyXG4gICAgczogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0U2Vjb25kcygpOyB9LFxyXG4gICAgdzogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0RGF5KCk7IH0sXHJcbiAgICB5OiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gU3RyaW5nKGRhdGUuZ2V0RnVsbFllYXIoKSkuc3Vic3RyaW5nKDIpOyB9LFxyXG59O1xuXG5mdW5jdGlvbiBGbGF0cGlja3JJbnN0YW5jZShlbGVtZW50LCBpbnN0YW5jZUNvbmZpZykge1xyXG4gICAgdmFyIHNlbGYgPSB7fTtcclxuICAgIHNlbGYucGFyc2VEYXRlID0gcGFyc2VEYXRlO1xyXG4gICAgc2VsZi5mb3JtYXREYXRlID0gZm9ybWF0RGF0ZTtcclxuICAgIHNlbGYuX2FuaW1hdGlvbkxvb3AgPSBbXTtcclxuICAgIHNlbGYuX2hhbmRsZXJzID0gW107XHJcbiAgICBzZWxmLl9iaW5kID0gYmluZDtcclxuICAgIHNlbGYuX3NldEhvdXJzRnJvbURhdGUgPSBzZXRIb3Vyc0Zyb21EYXRlO1xyXG4gICAgc2VsZi5jaGFuZ2VNb250aCA9IGNoYW5nZU1vbnRoO1xyXG4gICAgc2VsZi5jaGFuZ2VZZWFyID0gY2hhbmdlWWVhcjtcclxuICAgIHNlbGYuY2xlYXIgPSBjbGVhcjtcclxuICAgIHNlbGYuY2xvc2UgPSBjbG9zZTtcclxuICAgIHNlbGYuX2NyZWF0ZUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50O1xyXG4gICAgc2VsZi5kZXN0cm95ID0gZGVzdHJveTtcclxuICAgIHNlbGYuaXNFbmFibGVkID0gaXNFbmFibGVkO1xyXG4gICAgc2VsZi5qdW1wVG9EYXRlID0ganVtcFRvRGF0ZTtcclxuICAgIHNlbGYub3BlbiA9IG9wZW47XHJcbiAgICBzZWxmLnJlZHJhdyA9IHJlZHJhdztcclxuICAgIHNlbGYuc2V0ID0gc2V0O1xyXG4gICAgc2VsZi5zZXREYXRlID0gc2V0RGF0ZTtcclxuICAgIHNlbGYudG9nZ2xlID0gdG9nZ2xlO1xyXG4gICAgZnVuY3Rpb24gc2V0dXBIZWxwZXJGdW5jdGlvbnMoKSB7XHJcbiAgICAgICAgc2VsZi51dGlscyA9IHtcclxuICAgICAgICAgICAgZ2V0RGF5c0luTW9udGg6IGZ1bmN0aW9uIChtb250aCwgeXIpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtb250aCA9PT0gdm9pZCAwKSB7IG1vbnRoID0gc2VsZi5jdXJyZW50TW9udGg7IH1cclxuICAgICAgICAgICAgICAgIGlmICh5ciA9PT0gdm9pZCAwKSB7IHlyID0gc2VsZi5jdXJyZW50WWVhcjsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSAxICYmICgoeXIgJSA0ID09PSAwICYmIHlyICUgMTAwICE9PSAwKSB8fCB5ciAlIDQwMCA9PT0gMCkpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDI5O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYubDEwbi5kYXlzSW5Nb250aFttb250aF07XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgc2VsZi5lbGVtZW50ID0gc2VsZi5pbnB1dCA9IGVsZW1lbnQ7XHJcbiAgICAgICAgc2VsZi5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICBwYXJzZUNvbmZpZygpO1xyXG4gICAgICAgIHNldHVwTG9jYWxlKCk7XHJcbiAgICAgICAgc2V0dXBJbnB1dHMoKTtcclxuICAgICAgICBzZXR1cERhdGVzKCk7XHJcbiAgICAgICAgc2V0dXBIZWxwZXJGdW5jdGlvbnMoKTtcclxuICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpXHJcbiAgICAgICAgICAgIGJ1aWxkKCk7XHJcbiAgICAgICAgYmluZEV2ZW50cygpO1xyXG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIHx8IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHtcclxuICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbURhdGUoc2VsZi5jb25maWcubm9DYWxlbmRhclxyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogfHwgc2VsZi5jb25maWcubWluRGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB1cGRhdGVWYWx1ZShmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuc2hvd1RpbWVJbnB1dCA9XHJcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwIHx8IHNlbGYuY29uZmlnLm5vQ2FsZW5kYXI7XHJcbiAgICAgICAgaWYgKHNlbGYud2Vla1dyYXBwZXIgIT09IHVuZGVmaW5lZCAmJiBzZWxmLmRheXNDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLndpZHRoID1cclxuICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5vZmZzZXRXaWR0aCArIHNlbGYud2Vla1dyYXBwZXIub2Zmc2V0V2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2VsZi5pc01vYmlsZSlcclxuICAgICAgICAgICAgcG9zaXRpb25DYWxlbmRhcigpO1xyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uUmVhZHlcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBiaW5kVG9JbnN0YW5jZShmbikge1xyXG4gICAgICAgIHJldHVybiBmbi5iaW5kKHNlbGYpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlVGltZShlKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgJiYgIXNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2VsZi5zZXREYXRlKG5ldyBEYXRlKCkuc2V0SG91cnMoc2VsZi5jb25maWcuZGVmYXVsdEhvdXIsIHNlbGYuY29uZmlnLmRlZmF1bHRNaW51dGUsIHNlbGYuY29uZmlnLmRlZmF1bHRTZWNvbmRzKSwgZmFsc2UpO1xyXG4gICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZVdyYXBwZXIoZSk7XHJcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBpZiAoIXNlbGYubWluRGF0ZUhhc1RpbWUgfHxcclxuICAgICAgICAgICAgZS50eXBlICE9PSBcImlucHV0XCIgfHxcclxuICAgICAgICAgICAgZS50YXJnZXQudmFsdWUubGVuZ3RoID49IDIpIHtcclxuICAgICAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XHJcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcclxuICAgICAgICAgICAgfSwgMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYW1wbTJtaWxpdGFyeShob3VyLCBhbVBNKSB7XHJcbiAgICAgICAgcmV0dXJuIGhvdXIgJSAxMiArIDEyICogaW50KGFtUE0gPT09IFwiUE1cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtaWxpdGFyeTJhbXBtKGhvdXIpIHtcclxuICAgICAgICBzd2l0Y2ggKGhvdXIgJSAyNCkge1xyXG4gICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgIGNhc2UgMTI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gMTI7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaG91ciAlIDEyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldEhvdXJzRnJvbUlucHV0cygpIHtcclxuICAgICAgICBpZiAoc2VsZi5ob3VyRWxlbWVudCA9PT0gdW5kZWZpbmVkIHx8IHNlbGYubWludXRlRWxlbWVudCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGhvdXJzID0gKHBhcnNlSW50KHNlbGYuaG91ckVsZW1lbnQudmFsdWUuc2xpY2UoLTIpLCAxMCkgfHwgMCkgJSAyNCwgbWludXRlcyA9IChwYXJzZUludChzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSAlIDYwLCBzZWNvbmRzID0gc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyAocGFyc2VJbnQoc2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlLCAxMCkgfHwgMCkgJSA2MFxyXG4gICAgICAgICAgICA6IDA7XHJcbiAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBob3VycyA9IGFtcG0ybWlsaXRhcnkoaG91cnMsIHNlbGYuYW1QTS50ZXh0Q29udGVudCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcclxuICAgICAgICAgICAgc2VsZi5taW5EYXRlSGFzVGltZSAmJlxyXG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAmJlxyXG4gICAgICAgICAgICBjb21wYXJlRGF0ZXMoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmosIHNlbGYuY29uZmlnLm1pbkRhdGUpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGhvdXJzID0gTWF0aC5tYXgoaG91cnMsIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0SG91cnMoKSk7XHJcbiAgICAgICAgICAgIGlmIChob3VycyA9PT0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRIb3VycygpKVxyXG4gICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGgubWF4KG1pbnV0ZXMsIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TWludXRlcygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUgJiZcclxuICAgICAgICAgICAgc2VsZi5tYXhEYXRlSGFzVGltZSAmJlxyXG4gICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAmJlxyXG4gICAgICAgICAgICBjb21wYXJlRGF0ZXMoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmosIHNlbGYuY29uZmlnLm1heERhdGUpID09PSAwKSB7XHJcbiAgICAgICAgICAgIGhvdXJzID0gTWF0aC5taW4oaG91cnMsIHNlbGYuY29uZmlnLm1heERhdGUuZ2V0SG91cnMoKSk7XHJcbiAgICAgICAgICAgIGlmIChob3VycyA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpKVxyXG4gICAgICAgICAgICAgICAgbWludXRlcyA9IE1hdGgubWluKG1pbnV0ZXMsIHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TWludXRlcygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SG91cnMoaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0SG91cnNGcm9tRGF0ZShkYXRlT2JqKSB7XHJcbiAgICAgICAgdmFyIGRhdGUgPSBkYXRlT2JqIHx8IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqO1xyXG4gICAgICAgIGlmIChkYXRlKVxyXG4gICAgICAgICAgICBzZXRIb3VycyhkYXRlLmdldEhvdXJzKCksIGRhdGUuZ2V0TWludXRlcygpLCBkYXRlLmdldFNlY29uZHMoKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcykge1xyXG4gICAgICAgIGlmIChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLnNldEhvdXJzKGhvdXJzICUgMjQsIG1pbnV0ZXMsIHNlY29uZHMgfHwgMCwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2VsZi5ob3VyRWxlbWVudCB8fCAhc2VsZi5taW51dGVFbGVtZW50IHx8IHNlbGYuaXNNb2JpbGUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnZhbHVlID0gcGFkKCFzZWxmLmNvbmZpZy50aW1lXzI0aHJcclxuICAgICAgICAgICAgPyAoMTIgKyBob3VycykgJSAxMiArIDEyICogaW50KGhvdXJzICUgMTIgPT09IDApXHJcbiAgICAgICAgICAgIDogaG91cnMpO1xyXG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhZChtaW51dGVzKTtcclxuICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IGhvdXJzID49IDEyID8gXCJQTVwiIDogXCJBTVwiO1xyXG4gICAgICAgIGlmIChzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlID0gcGFkKHNlY29uZHMpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25ZZWFySW5wdXQoZXZlbnQpIHtcclxuICAgICAgICB2YXIgeWVhciA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC52YWx1ZSkgKyAoZXZlbnQuZGVsdGEgfHwgMCk7XHJcbiAgICAgICAgaWYgKHllYXIudG9TdHJpbmcoKS5sZW5ndGggPT09IDQgfHwgZXZlbnQua2V5ID09PSBcIkVudGVyXCIpIHtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQuYmx1cigpO1xyXG4gICAgICAgICAgICBpZiAoIS9bXlxcZF0vLnRlc3QoeWVhci50b1N0cmluZygpKSlcclxuICAgICAgICAgICAgICAgIGNoYW5nZVllYXIoeWVhcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYmluZChlbGVtZW50LCBldmVudCwgaGFuZGxlcikge1xyXG4gICAgICAgIGlmIChldmVudCBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQuZm9yRWFjaChmdW5jdGlvbiAoZXYpIHsgcmV0dXJuIGJpbmQoZWxlbWVudCwgZXYsIGhhbmRsZXIpOyB9KTtcclxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICByZXR1cm4gZWxlbWVudC5mb3JFYWNoKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gYmluZChlbCwgZXZlbnQsIGhhbmRsZXIpOyB9KTtcclxuICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGhhbmRsZXIpO1xyXG4gICAgICAgIHNlbGYuX2hhbmRsZXJzLnB1c2goeyBlbGVtZW50OiBlbGVtZW50LCBldmVudDogZXZlbnQsIGhhbmRsZXI6IGhhbmRsZXIgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbkNsaWNrKGhhbmRsZXIpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGV2dCkgeyByZXR1cm4gZXZ0LndoaWNoID09PSAxICYmIGhhbmRsZXIoZXZ0KTsgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyaWdnZXJDaGFuZ2UoKSB7XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy53cmFwKSB7XHJcbiAgICAgICAgICAgIFtcIm9wZW5cIiwgXCJjbG9zZVwiLCBcInRvZ2dsZVwiLCBcImNsZWFyXCJdLmZvckVhY2goZnVuY3Rpb24gKGV2dCkge1xyXG4gICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLmZvckVhY2guY2FsbChzZWxmLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLVwiICsgZXZ0ICsgXCJdXCIpLCBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYmluZChlbCwgXCJjbGlja1wiLCBzZWxmW2V2dF0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5pc01vYmlsZSkge1xyXG4gICAgICAgICAgICBzZXR1cE1vYmlsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkZWJvdW5jZWRSZXNpemUgPSBkZWJvdW5jZShvblJlc2l6ZSwgNTApO1xyXG4gICAgICAgIHNlbGYuX2RlYm91bmNlZENoYW5nZSA9IGRlYm91bmNlKHRyaWdnZXJDaGFuZ2UsIDMwMCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJiBzZWxmLmRheXNDb250YWluZXIpXHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi5kYXlzQ29udGFpbmVyLCBcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9uTW91c2VPdmVyKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQuYm9keSwgXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XHJcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5zdGF0aWMpXHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwia2V5ZG93blwiLCBvbktleURvd24pO1xyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcuaW5saW5lICYmICFzZWxmLmNvbmZpZy5zdGF0aWMpXHJcbiAgICAgICAgICAgIGJpbmQod2luZG93LCBcInJlc2l6ZVwiLCBkZWJvdW5jZWRSZXNpemUpO1xyXG4gICAgICAgIGlmICh3aW5kb3cub250b3VjaHN0YXJ0ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGJpbmQod2luZG93LmRvY3VtZW50LmJvZHksIFwidG91Y2hzdGFydFwiLCBkb2N1bWVudENsaWNrKTtcclxuICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudC5ib2R5LCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKGRvY3VtZW50Q2xpY2spKTtcclxuICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImJsdXJcIiwgZG9jdW1lbnRDbGljayk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmNsaWNrT3BlbnMgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJmb2N1c1wiLCBzZWxmLm9wZW4pO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKHNlbGYub3BlbikpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2VsZi5tb250aE5hdi5hZGRFdmVudExpc3RlbmVyKFwid2hlZWxcIiwgZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUucHJldmVudERlZmF1bHQoKTsgfSk7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi5tb250aE5hdiwgXCJ3aGVlbFwiLCBkZWJvdW5jZShvbk1vbnRoTmF2U2Nyb2xsLCAxMCkpO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYubW9udGhOYXYsIFwibW91c2Vkb3duXCIsIG9uQ2xpY2sob25Nb250aE5hdkNsaWNrKSk7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi5tb250aE5hdiwgW1wia2V5dXBcIiwgXCJpbmNyZW1lbnRcIl0sIG9uWWVhcklucHV0KTtcclxuICAgICAgICAgICAgYmluZChzZWxmLmRheXNDb250YWluZXIsIFwibW91c2Vkb3duXCIsIG9uQ2xpY2soc2VsZWN0RGF0ZSkpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuYW5pbWF0ZSkge1xyXG4gICAgICAgICAgICAgICAgYmluZChzZWxmLmRheXNDb250YWluZXIsIFtcIndlYmtpdEFuaW1hdGlvbkVuZFwiLCBcImFuaW1hdGlvbmVuZFwiXSwgYW5pbWF0ZURheXMpO1xyXG4gICAgICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBbXCJ3ZWJraXRBbmltYXRpb25FbmRcIiwgXCJhbmltYXRpb25lbmRcIl0sIGFuaW1hdGVNb250aHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLnRpbWVDb250YWluZXIgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFyIHNlbFRleHQgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUudGFyZ2V0LnNlbGVjdCgpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYudGltZUNvbnRhaW5lciwgW1wid2hlZWxcIiwgXCJpbnB1dFwiLCBcImluY3JlbWVudFwiXSwgdXBkYXRlVGltZSk7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKHRpbWVJbmNyZW1lbnQpKTtcclxuICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFtcIndoZWVsXCIsIFwiaW5jcmVtZW50XCJdLCBzZWxmLl9kZWJvdW5jZWRDaGFuZ2UpO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYudGltZUNvbnRhaW5lciwgXCJpbnB1dFwiLCB0cmlnZ2VyQ2hhbmdlKTtcclxuICAgICAgICAgICAgYmluZChbc2VsZi5ob3VyRWxlbWVudCwgc2VsZi5taW51dGVFbGVtZW50XSwgW1wiZm9jdXNcIiwgXCJjbGlja1wiXSwgc2VsVGV4dCk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5zZWNvbmRFbGVtZW50LCBcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuc2Vjb25kRWxlbWVudCAmJiBzZWxmLnNlY29uZEVsZW1lbnQuc2VsZWN0KCk7IH0pO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGJpbmQoc2VsZi5hbVBNLCBcIm1vdXNlZG93blwiLCBvbkNsaWNrKGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZShlKTtcclxuICAgICAgICAgICAgICAgICAgICB0cmlnZ2VyQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwcm9jZXNzUG9zdERheUFuaW1hdGlvbigpIHtcclxuICAgICAgICBzZWxmLl9hbmltYXRpb25Mb29wLmZvckVhY2goZnVuY3Rpb24gKGYpIHsgcmV0dXJuIGYoKTsgfSk7XHJcbiAgICAgICAgc2VsZi5fYW5pbWF0aW9uTG9vcCA9IFtdO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYW5pbWF0ZURheXMoZSkge1xyXG4gICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgJiYgc2VsZi5kYXlzQ29udGFpbmVyLmNoaWxkTm9kZXMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGUuYW5pbWF0aW9uTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImZwU2xpZGVMZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmxhc3RDaGlsZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIubGFzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZUxlZnROZXdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNlbGYuZGF5c0NvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlyc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzID0gc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1Bvc3REYXlBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJmcFNsaWRlUmlnaHRcIjpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVSaWdodE5ld1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc2VsZi5kYXlzQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5sYXN0Q2hpbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5cyA9IHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2Nlc3NQb3N0RGF5QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYW5pbWF0ZU1vbnRocyhlKSB7XHJcbiAgICAgICAgc3dpdGNoIChlLmFuaW1hdGlvbk5hbWUpIHtcclxuICAgICAgICAgICAgY2FzZSBcImZwU2xpZGVMZWZ0TmV3XCI6XHJcbiAgICAgICAgICAgIGNhc2UgXCJmcFNsaWRlUmlnaHROZXdcIjpcclxuICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5jbGFzc0xpc3QucmVtb3ZlKFwic2xpZGVMZWZ0TmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZVJpZ2h0TmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG5hdiA9IHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aDtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuYXYubmV4dFNpYmxpbmcgJiZcclxuICAgICAgICAgICAgICAgICAgICAvY3Vyci8udGVzdChuYXYubmV4dFNpYmxpbmcuY2xhc3NOYW1lKSlcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnRoTmF2LnJlbW92ZUNoaWxkKG5hdi5uZXh0U2libGluZyk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAobmF2LnByZXZpb3VzU2libGluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIC9jdXJyLy50ZXN0KG5hdi5wcmV2aW91c1NpYmxpbmcuY2xhc3NOYW1lKSlcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vbnRoTmF2LnJlbW92ZUNoaWxkKG5hdi5wcmV2aW91c1NpYmxpbmcpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vbGRDdXJNb250aCA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGp1bXBUb0RhdGUoanVtcERhdGUpIHtcclxuICAgICAgICB2YXIganVtcFRvID0ganVtcERhdGUgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IHBhcnNlRGF0ZShqdW1wRGF0ZSlcclxuICAgICAgICAgICAgOiBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiB8fFxyXG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiYgc2VsZi5jb25maWcubWluRGF0ZSA+IHNlbGYubm93XHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5taW5EYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmIHNlbGYuY29uZmlnLm1heERhdGUgPCBzZWxmLm5vd1xyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1heERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBzZWxmLm5vdyk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGp1bXBUbyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0ganVtcFRvLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IGp1bXBUby5nZXRNb250aCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZS5zdGFjayk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkludmFsaWQgZGF0ZSBzdXBwbGllZDogXCIgKyBqdW1wVG8pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLnJlZHJhdygpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdGltZUluY3JlbWVudChlKSB7XHJcbiAgICAgICAgaWYgKH5lLnRhcmdldC5jbGFzc05hbWUuaW5kZXhPZihcImFycm93XCIpKVxyXG4gICAgICAgICAgICBpbmNyZW1lbnROdW1JbnB1dChlLCBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJhcnJvd1VwXCIpID8gMSA6IC0xKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGluY3JlbWVudE51bUlucHV0KGUsIGRlbHRhLCBpbnB1dEVsZW0pIHtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gZSAmJiBlLnRhcmdldDtcclxuICAgICAgICB2YXIgaW5wdXQgPSBpbnB1dEVsZW0gfHxcclxuICAgICAgICAgICAgKHRhcmdldCAmJiB0YXJnZXQucGFyZW50Tm9kZSAmJiB0YXJnZXQucGFyZW50Tm9kZS5maXJzdENoaWxkKTtcclxuICAgICAgICB2YXIgZXZlbnQgPSBjcmVhdGVFdmVudChcImluY3JlbWVudFwiKTtcclxuICAgICAgICBldmVudC5kZWx0YSA9IGRlbHRhO1xyXG4gICAgICAgIGlucHV0ICYmIGlucHV0LmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYnVpbGQoKSB7XHJcbiAgICAgICAgdmFyIGZyYWdtZW50ID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTtcclxuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1jYWxlbmRhclwiKTtcclxuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKSB7XHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGJ1aWxkTW9udGhOYXYoKSk7XHJcbiAgICAgICAgICAgIHNlbGYuaW5uZXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcud2Vla051bWJlcnMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBfYSA9IGJ1aWxkV2Vla3MoKSwgd2Vla1dyYXBwZXIgPSBfYS53ZWVrV3JhcHBlciwgd2Vla051bWJlcnMgPSBfYS53ZWVrTnVtYmVycztcclxuICAgICAgICAgICAgICAgIHNlbGYuaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQod2Vla1dyYXBwZXIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi53ZWVrTnVtYmVycyA9IHdlZWtOdW1iZXJzO1xyXG4gICAgICAgICAgICAgICAgc2VsZi53ZWVrV3JhcHBlciA9IHdlZWtXcmFwcGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHNlbGYuckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItckNvbnRhaW5lclwiKTtcclxuICAgICAgICAgICAgc2VsZi5yQ29udGFpbmVyLmFwcGVuZENoaWxkKGJ1aWxkV2Vla2RheXMoKSk7XHJcbiAgICAgICAgICAgIGlmICghc2VsZi5kYXlzQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWRheXNcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIudGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBidWlsZERheXMoKTtcclxuICAgICAgICAgICAgc2VsZi5yQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuZGF5c0NvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIHNlbGYuaW5uZXJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5yQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5pbm5lckNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKSB7XHJcbiAgICAgICAgICAgIGZyYWdtZW50LmFwcGVuZENoaWxkKGJ1aWxkVGltZSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJyYW5nZU1vZGVcIiwgc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKTtcclxuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFuaW1hdGVcIiwgc2VsZi5jb25maWcuYW5pbWF0ZSk7XHJcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5hcHBlbmRDaGlsZChmcmFnbWVudCk7XHJcbiAgICAgICAgdmFyIGN1c3RvbUFwcGVuZCA9IHNlbGYuY29uZmlnLmFwcGVuZFRvICE9PSB1bmRlZmluZWQgJiYgc2VsZi5jb25maWcuYXBwZW5kVG8ubm9kZVR5cGU7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmlubGluZSB8fCBzZWxmLmNvbmZpZy5zdGF0aWMpIHtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKHNlbGYuY29uZmlnLmlubGluZSA/IFwiaW5saW5lXCIgOiBcInN0YXRpY1wiKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLmlubGluZSAmJiAhY3VzdG9tQXBwZW5kICYmIHNlbGYuZWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmVsZW1lbnQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgc2VsZi5faW5wdXQubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5zdGF0aWMpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13cmFwcGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuZWxlbWVudC5wYXJlbnROb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh3cmFwcGVyLCBzZWxmLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQpXHJcbiAgICAgICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmFsdElucHV0KTtcclxuICAgICAgICAgICAgICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5zdGF0aWMgJiYgIXNlbGYuY29uZmlnLmlubGluZSlcclxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLmFwcGVuZFRvICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcuYXBwZW5kVG9cclxuICAgICAgICAgICAgICAgIDogd2luZG93LmRvY3VtZW50LmJvZHkpLmFwcGVuZENoaWxkKHNlbGYuY2FsZW5kYXJDb250YWluZXIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRGF5KGNsYXNzTmFtZSwgZGF0ZSwgZGF5TnVtYmVyLCBpKSB7XHJcbiAgICAgICAgdmFyIGRhdGVJc0VuYWJsZWQgPSBpc0VuYWJsZWQoZGF0ZSwgdHJ1ZSksIGRheUVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1kYXkgXCIgKyBjbGFzc05hbWUsIGRhdGUuZ2V0RGF0ZSgpLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgIGRheUVsZW1lbnQuZGF0ZU9iaiA9IGRhdGU7XHJcbiAgICAgICAgZGF5RWxlbWVudC4kaSA9IGk7XHJcbiAgICAgICAgZGF5RWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJhcmlhLWxhYmVsXCIsIHNlbGYuZm9ybWF0RGF0ZShkYXRlLCBzZWxmLmNvbmZpZy5hcmlhRGF0ZUZvcm1hdCkpO1xyXG4gICAgICAgIGlmIChjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5ub3cpID09PSAwKSB7XHJcbiAgICAgICAgICAgIHNlbGYudG9kYXlEYXRlRWxlbSA9IGRheUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcInRvZGF5XCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0ZUlzRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBkYXlFbGVtZW50LnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIGlmIChpc0RhdGVTZWxlY3RlZChkYXRlKSkge1xyXG4gICAgICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwic2VsZWN0ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gPSBkYXlFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKGRheUVsZW1lbnQsIFwic3RhcnRSYW5nZVwiLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSkgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKGRheUVsZW1lbnQsIFwiZW5kUmFuZ2VcIiwgc2VsZi5zZWxlY3RlZERhdGVzWzFdICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMV0pID09PSAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGlzYWJsZWRcIik7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXNbMF0gJiZcclxuICAgICAgICAgICAgICAgIHNlbGYubWluUmFuZ2VEYXRlICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlID4gc2VsZi5taW5SYW5nZURhdGUgJiZcclxuICAgICAgICAgICAgICAgIGRhdGUgPCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0pXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSA9IGRhdGU7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuc2VsZWN0ZWREYXRlc1swXSAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5tYXhSYW5nZURhdGUgJiZcclxuICAgICAgICAgICAgICAgIGRhdGUgPCBzZWxmLm1heFJhbmdlRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZSA+IHNlbGYuc2VsZWN0ZWREYXRlc1swXSlcclxuICAgICAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlID0gZGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIikge1xyXG4gICAgICAgICAgICBpZiAoaXNEYXRlSW5SYW5nZShkYXRlKSAmJiAhaXNEYXRlU2VsZWN0ZWQoZGF0ZSkpXHJcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJpblJhbmdlXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5tYXhSYW5nZURhdGUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgKGRhdGUgPCBzZWxmLm1pblJhbmdlRGF0ZSB8fCBkYXRlID4gc2VsZi5tYXhSYW5nZURhdGUpKVxyXG4gICAgICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwibm90QWxsb3dlZFwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYud2Vla051bWJlcnMgJiZcclxuICAgICAgICAgICAgY2xhc3NOYW1lICE9PSBcInByZXZNb250aERheVwiICYmXHJcbiAgICAgICAgICAgIGRheU51bWJlciAlIDcgPT09IDEpIHtcclxuICAgICAgICAgICAgc2VsZi53ZWVrTnVtYmVycy5pbnNlcnRBZGphY2VudEhUTUwoXCJiZWZvcmVlbmRcIiwgXCI8c3BhbiBjbGFzcz0nZGlzYWJsZWQgZmxhdHBpY2tyLWRheSc+XCIgK1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuZ2V0V2VlayhkYXRlKSArXHJcbiAgICAgICAgICAgICAgICBcIjwvc3Bhbj5cIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uRGF5Q3JlYXRlXCIsIGRheUVsZW1lbnQpO1xyXG4gICAgICAgIHJldHVybiBkYXlFbGVtZW50O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZm9jdXNPbkRheShjdXJyZW50SW5kZXgsIG9mZnNldCkge1xyXG4gICAgICAgIHZhciBuZXdJbmRleCA9IGN1cnJlbnRJbmRleCArIG9mZnNldCB8fCAwLCB0YXJnZXROb2RlID0gKGN1cnJlbnRJbmRleCAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gc2VsZi5kYXlzLmNoaWxkTm9kZXNbbmV3SW5kZXhdXHJcbiAgICAgICAgICAgIDogc2VsZi5zZWxlY3RlZERhdGVFbGVtIHx8XHJcbiAgICAgICAgICAgICAgICBzZWxmLnRvZGF5RGF0ZUVsZW0gfHxcclxuICAgICAgICAgICAgICAgIHNlbGYuZGF5cy5jaGlsZE5vZGVzWzBdKTtcclxuICAgICAgICB2YXIgZm9jdXMgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRhcmdldE5vZGUgPSB0YXJnZXROb2RlIHx8IHNlbGYuZGF5cy5jaGlsZE5vZGVzW25ld0luZGV4XTtcclxuICAgICAgICAgICAgdGFyZ2V0Tm9kZS5mb2N1cygpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKVxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZU92ZXIodGFyZ2V0Tm9kZSk7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAodGFyZ2V0Tm9kZSA9PT0gdW5kZWZpbmVkICYmIG9mZnNldCAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAob2Zmc2V0ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VNb250aCgxLCB0cnVlLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgbmV3SW5kZXggPSBuZXdJbmRleCAlIDQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG9mZnNldCA8IDApIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlTW9udGgoLTEsIHRydWUsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBuZXdJbmRleCArPSA0MjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYWZ0ZXJEYXlBbmltKGZvY3VzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFmdGVyRGF5QW5pbShmbikge1xyXG4gICAgICAgIHNlbGYuY29uZmlnLmFuaW1hdGUgPT09IHRydWUgPyBzZWxmLl9hbmltYXRpb25Mb29wLnB1c2goZm4pIDogZm4oKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJ1aWxkRGF5cyhkZWx0YSkge1xyXG4gICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmaXJzdE9mTW9udGggPSAobmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIDEpLmdldERheSgpIC1cclxuICAgICAgICAgICAgc2VsZi5sMTBuLmZpcnN0RGF5T2ZXZWVrICtcclxuICAgICAgICAgICAgNykgJVxyXG4gICAgICAgICAgICA3LCBpc1JhbmdlTW9kZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIjtcclxuICAgICAgICB2YXIgcHJldk1vbnRoRGF5cyA9IHNlbGYudXRpbHMuZ2V0RGF5c0luTW9udGgoKHNlbGYuY3VycmVudE1vbnRoIC0gMSArIDEyKSAlIDEyKTtcclxuICAgICAgICB2YXIgZGF5c0luTW9udGggPSBzZWxmLnV0aWxzLmdldERheXNJbk1vbnRoKCksIGRheXMgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIHZhciBkYXlOdW1iZXIgPSBwcmV2TW9udGhEYXlzICsgMSAtIGZpcnN0T2ZNb250aCwgZGF5SW5kZXggPSAwO1xyXG4gICAgICAgIGlmIChzZWxmLndlZWtOdW1iZXJzICYmIHNlbGYud2Vla051bWJlcnMuZmlyc3RDaGlsZClcclxuICAgICAgICAgICAgc2VsZi53ZWVrTnVtYmVycy50ZXh0Q29udGVudCA9IFwiXCI7XHJcbiAgICAgICAgaWYgKGlzUmFuZ2VNb2RlKSB7XHJcbiAgICAgICAgICAgIHNlbGYubWluUmFuZ2VEYXRlID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggLSAxLCBkYXlOdW1iZXIpO1xyXG4gICAgICAgICAgICBzZWxmLm1heFJhbmdlRGF0ZSA9IG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoICsgMSwgKDQyIC0gZmlyc3RPZk1vbnRoKSAlIGRheXNJbk1vbnRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICg7IGRheU51bWJlciA8PSBwcmV2TW9udGhEYXlzOyBkYXlOdW1iZXIrKywgZGF5SW5kZXgrKykge1xyXG4gICAgICAgICAgICBkYXlzLmFwcGVuZENoaWxkKGNyZWF0ZURheShcInByZXZNb250aERheVwiLCBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCAtIDEsIGRheU51bWJlciksIGRheU51bWJlciwgZGF5SW5kZXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChkYXlOdW1iZXIgPSAxOyBkYXlOdW1iZXIgPD0gZGF5c0luTW9udGg7IGRheU51bWJlcisrLCBkYXlJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwiXCIsIG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoLCBkYXlOdW1iZXIpLCBkYXlOdW1iZXIsIGRheUluZGV4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGRheU51bSA9IGRheXNJbk1vbnRoICsgMTsgZGF5TnVtIDw9IDQyIC0gZmlyc3RPZk1vbnRoOyBkYXlOdW0rKywgZGF5SW5kZXgrKykge1xyXG4gICAgICAgICAgICBkYXlzLmFwcGVuZENoaWxkKGNyZWF0ZURheShcIm5leHRNb250aERheVwiLCBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCArIDEsIGRheU51bSAlIGRheXNJbk1vbnRoKSwgZGF5TnVtLCBkYXlJbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNSYW5nZU1vZGUgJiYgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMSAmJiBkYXlzLmNoaWxkTm9kZXNbMF0pIHtcclxuICAgICAgICAgICAgc2VsZi5faGlkZVByZXZNb250aEFycm93ID1cclxuICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICghIXNlbGYubWluUmFuZ2VEYXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubWluUmFuZ2VEYXRlID4gZGF5cy5jaGlsZE5vZGVzWzBdLmRhdGVPYmopO1xyXG4gICAgICAgICAgICBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgPVxyXG4gICAgICAgICAgICAgICAgc2VsZi5faGlkZU5leHRNb250aEFycm93IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCEhc2VsZi5tYXhSYW5nZURhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5tYXhSYW5nZURhdGUgPFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggKyAxLCAxKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xyXG4gICAgICAgIHZhciBkYXlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZGF5Q29udGFpbmVyXCIpO1xyXG4gICAgICAgIGRheUNvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlzKTtcclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmFuaW1hdGUgfHwgZGVsdGEgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgY2xlYXJOb2RlKHNlbGYuZGF5c0NvbnRhaW5lcik7XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChzZWxmLmRheXNDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPiAxKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLnJlbW92ZUNoaWxkKHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRlbHRhICYmIGRlbHRhID49IDApXHJcbiAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5hcHBlbmRDaGlsZChkYXlDb250YWluZXIpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmluc2VydEJlZm9yZShkYXlDb250YWluZXIsIHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkKTtcclxuICAgICAgICBzZWxmLmRheXMgPSBzZWxmLmRheXNDb250YWluZXIuY2hpbGROb2Rlc1swXTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJ1aWxkTW9udGhOYXYoKSB7XHJcbiAgICAgICAgdmFyIG1vbnRoTmF2RnJhZ21lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIHNlbGYubW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLW1vbnRoXCIpO1xyXG4gICAgICAgIHNlbGYucHJldk1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItcHJldi1tb250aFwiKTtcclxuICAgICAgICBzZWxmLnByZXZNb250aE5hdi5pbm5lckhUTUwgPSBzZWxmLmNvbmZpZy5wcmV2QXJyb3c7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGhFbGVtZW50ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJjdXItbW9udGhcIik7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGhFbGVtZW50LnRpdGxlID0gc2VsZi5sMTBuLnNjcm9sbFRpdGxlO1xyXG4gICAgICAgIHZhciB5ZWFySW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImN1ci15ZWFyXCIpO1xyXG4gICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50ID0geWVhcklucHV0LmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQudGl0bGUgPSBzZWxmLmwxMG4uc2Nyb2xsVGl0bGU7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUpXHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1pbiA9IHNlbGYuY29uZmlnLm1pbkRhdGVcclxuICAgICAgICAgICAgICAgIC5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSkge1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5tYXggPSBzZWxmLmNvbmZpZy5tYXhEYXRlXHJcbiAgICAgICAgICAgICAgICAuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICAgICAgLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LmRpc2FibGVkID1cclxuICAgICAgICAgICAgICAgICEhc2VsZi5jb25maWcubWluRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLm5leHRNb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLW5leHQtbW9udGhcIik7XHJcbiAgICAgICAgc2VsZi5uZXh0TW9udGhOYXYuaW5uZXJIVE1MID0gc2VsZi5jb25maWcubmV4dEFycm93O1xyXG4gICAgICAgIHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWN1cnJlbnQtbW9udGhcIik7XHJcbiAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmFwcGVuZENoaWxkKHNlbGYuY3VycmVudE1vbnRoRWxlbWVudCk7XHJcbiAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmFwcGVuZENoaWxkKHllYXJJbnB1dCk7XHJcbiAgICAgICAgbW9udGhOYXZGcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLnByZXZNb250aE5hdik7XHJcbiAgICAgICAgbW9udGhOYXZGcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGgpO1xyXG4gICAgICAgIG1vbnRoTmF2RnJhZ21lbnQuYXBwZW5kQ2hpbGQoc2VsZi5uZXh0TW9udGhOYXYpO1xyXG4gICAgICAgIHNlbGYubW9udGhOYXYuYXBwZW5kQ2hpbGQobW9udGhOYXZGcmFnbWVudCk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsIFwiX2hpZGVQcmV2TW9udGhBcnJvd1wiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdzsgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoYm9vbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX19oaWRlUHJldk1vbnRoQXJyb3cgIT09IGJvb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wcmV2TW9udGhOYXYuc3R5bGUuZGlzcGxheSA9IGJvb2wgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIHNlbGYuX19oaWRlUHJldk1vbnRoQXJyb3cgPSBib29sO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLCBcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuX19oaWRlTmV4dE1vbnRoQXJyb3c7IH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGJvb2wpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLl9faGlkZU5leHRNb250aEFycm93ICE9PSBib29sKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubmV4dE1vbnRoTmF2LnN0eWxlLmRpc3BsYXkgPSBib29sID8gXCJub25lXCIgOiBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9faGlkZU5leHRNb250aEFycm93ID0gYm9vbDtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYubW9udGhOYXY7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBidWlsZFRpbWUoKSB7XHJcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzVGltZVwiKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhcilcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwibm9DYWxlbmRhclwiKTtcclxuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXRpbWVcIik7XHJcbiAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgdmFyIHNlcGFyYXRvciA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yXCIsIFwiOlwiKTtcclxuICAgICAgICB2YXIgaG91cklucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3ItaG91clwiKTtcclxuICAgICAgICBzZWxmLmhvdXJFbGVtZW50ID0gaG91cklucHV0LmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgdmFyIG1pbnV0ZUlucHV0ID0gY3JlYXRlTnVtYmVySW5wdXQoXCJmbGF0cGlja3ItbWludXRlXCIpO1xyXG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudCA9IG1pbnV0ZUlucHV0LmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC50YWJJbmRleCA9IHNlbGYubWludXRlRWxlbWVudC50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBwYWQoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmpcclxuICAgICAgICAgICAgPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRIb3VycygpXHJcbiAgICAgICAgICAgIDogc2VsZi5jb25maWcudGltZV8yNGhyXHJcbiAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLmRlZmF1bHRIb3VyXHJcbiAgICAgICAgICAgICAgICA6IG1pbGl0YXJ5MmFtcG0oc2VsZi5jb25maWcuZGVmYXVsdEhvdXIpKTtcclxuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQudmFsdWUgPSBwYWQoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmpcclxuICAgICAgICAgICAgPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRNaW51dGVzKClcclxuICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kZWZhdWx0TWludXRlKTtcclxuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnN0ZXAgPSBzZWxmLmNvbmZpZy5ob3VySW5jcmVtZW50LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnN0ZXAgPSBzZWxmLmNvbmZpZy5taW51dGVJbmNyZW1lbnQudG9TdHJpbmcoKTtcclxuICAgICAgICBzZWxmLmhvdXJFbGVtZW50Lm1pbiA9IHNlbGYuY29uZmlnLnRpbWVfMjRociA/IFwiMFwiIDogXCIxXCI7XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5tYXggPSBzZWxmLmNvbmZpZy50aW1lXzI0aHIgPyBcIjIzXCIgOiBcIjEyXCI7XHJcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50Lm1pbiA9IFwiMFwiO1xyXG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC5tYXggPSBcIjU5XCI7XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC50aXRsZSA9IHNlbGYubWludXRlRWxlbWVudC50aXRsZSA9IHNlbGYubDEwbi5zY3JvbGxUaXRsZTtcclxuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoaG91cklucHV0KTtcclxuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VwYXJhdG9yKTtcclxuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQobWludXRlSW5wdXQpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy50aW1lXzI0aHIpXHJcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwidGltZTI0aHJcIik7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVNlY29uZHMpIHtcclxuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNTZWNvbmRzXCIpO1xyXG4gICAgICAgICAgICB2YXIgc2Vjb25kSW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1zZWNvbmRcIik7XHJcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudCA9IHNlY29uZElucHV0LmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxyXG4gICAgICAgICAgICAgICAgPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iai5nZXRTZWNvbmRzKClcclxuICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcuZGVmYXVsdFNlY29uZHMpO1xyXG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQuc3RlcCA9IHNlbGYubWludXRlRWxlbWVudC5zdGVwO1xyXG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQubWluID0gc2VsZi5taW51dGVFbGVtZW50Lm1pbjtcclxuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50Lm1heCA9IHNlbGYubWludXRlRWxlbWVudC5tYXg7XHJcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci10aW1lLXNlcGFyYXRvclwiLCBcIjpcIikpO1xyXG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuYXBwZW5kQ2hpbGQoc2Vjb25kSW5wdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnRpbWVfMjRocikge1xyXG4gICAgICAgICAgICBzZWxmLmFtUE0gPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1hbS1wbVwiLCBzZWxmLmwxMG4uYW1QTVtpbnQoKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXHJcbiAgICAgICAgICAgICAgICA/IHNlbGYuaG91ckVsZW1lbnQudmFsdWVcclxuICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcuZGVmYXVsdEhvdXIpID4gMTEpXSk7XHJcbiAgICAgICAgICAgIHNlbGYuYW1QTS50aXRsZSA9IHNlbGYubDEwbi50b2dnbGVUaXRsZTtcclxuICAgICAgICAgICAgc2VsZi5hbVBNLnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLmFtUE0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc2VsZi50aW1lQ29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYnVpbGRXZWVrZGF5cygpIHtcclxuICAgICAgICBpZiAoIXNlbGYud2Vla2RheUNvbnRhaW5lcilcclxuICAgICAgICAgICAgc2VsZi53ZWVrZGF5Q29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrZGF5c1wiKTtcclxuICAgICAgICB2YXIgZmlyc3REYXlPZldlZWsgPSBzZWxmLmwxMG4uZmlyc3REYXlPZldlZWs7XHJcbiAgICAgICAgdmFyIHdlZWtkYXlzID0gc2VsZi5sMTBuLndlZWtkYXlzLnNob3J0aGFuZC5zbGljZSgpO1xyXG4gICAgICAgIGlmIChmaXJzdERheU9mV2VlayA+IDAgJiYgZmlyc3REYXlPZldlZWsgPCB3ZWVrZGF5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgd2Vla2RheXMgPSB3ZWVrZGF5cy5zcGxpY2UoZmlyc3REYXlPZldlZWssIHdlZWtkYXlzLmxlbmd0aCkuY29uY2F0KHdlZWtkYXlzLnNwbGljZSgwLCBmaXJzdERheU9mV2VlaykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLndlZWtkYXlDb250YWluZXIuaW5uZXJIVE1MID0gXCJcXG4gICAgPHNwYW4gY2xhc3M9ZmxhdHBpY2tyLXdlZWtkYXk+XFxuICAgICAgXCIgKyB3ZWVrZGF5cy5qb2luKFwiPC9zcGFuPjxzcGFuIGNsYXNzPWZsYXRwaWNrci13ZWVrZGF5PlwiKSArIFwiXFxuICAgIDwvc3Bhbj5cXG4gICAgXCI7XHJcbiAgICAgICAgcmV0dXJuIHNlbGYud2Vla2RheUNvbnRhaW5lcjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJ1aWxkV2Vla3MoKSB7XHJcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiaGFzV2Vla3NcIik7XHJcbiAgICAgICAgdmFyIHdlZWtXcmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrd3JhcHBlclwiKTtcclxuICAgICAgICB3ZWVrV3JhcHBlci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci13ZWVrZGF5XCIsIHNlbGYubDEwbi53ZWVrQWJicmV2aWF0aW9uKSk7XHJcbiAgICAgICAgdmFyIHdlZWtOdW1iZXJzID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci13ZWVrc1wiKTtcclxuICAgICAgICB3ZWVrV3JhcHBlci5hcHBlbmRDaGlsZCh3ZWVrTnVtYmVycyk7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgd2Vla1dyYXBwZXI6IHdlZWtXcmFwcGVyLFxyXG4gICAgICAgICAgICB3ZWVrTnVtYmVyczogd2Vla051bWJlcnMsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoYW5nZU1vbnRoKHZhbHVlLCBpc19vZmZzZXQsIGFuaW1hdGUsIGZyb21fa2V5Ym9hcmQpIHtcclxuICAgICAgICBpZiAoaXNfb2Zmc2V0ID09PSB2b2lkIDApIHsgaXNfb2Zmc2V0ID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmIChhbmltYXRlID09PSB2b2lkIDApIHsgYW5pbWF0ZSA9IHNlbGYuY29uZmlnLmFuaW1hdGU7IH1cclxuICAgICAgICBpZiAoZnJvbV9rZXlib2FyZCA9PT0gdm9pZCAwKSB7IGZyb21fa2V5Ym9hcmQgPSBmYWxzZTsgfVxyXG4gICAgICAgIHZhciBkZWx0YSA9IGlzX29mZnNldCA/IHZhbHVlIDogdmFsdWUgLSBzZWxmLmN1cnJlbnRNb250aDtcclxuICAgICAgICBpZiAoKGRlbHRhIDwgMCAmJiBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cpIHx8XHJcbiAgICAgICAgICAgIChkZWx0YSA+IDAgJiYgc2VsZi5faGlkZU5leHRNb250aEFycm93KSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoICs9IGRlbHRhO1xyXG4gICAgICAgIGlmIChzZWxmLmN1cnJlbnRNb250aCA8IDAgfHwgc2VsZi5jdXJyZW50TW9udGggPiAxMSkge1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyICs9IHNlbGYuY3VycmVudE1vbnRoID4gMTEgPyAxIDogLTE7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gKHNlbGYuY3VycmVudE1vbnRoICsgMTIpICUgMTI7XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uWWVhckNoYW5nZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnVpbGREYXlzKGFuaW1hdGUgPyBkZWx0YSA6IHVuZGVmaW5lZCk7XHJcbiAgICAgICAgaWYgKCFhbmltYXRlKSB7XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBuYXYgPSBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGg7XHJcbiAgICAgICAgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgICB3aGlsZSAobmF2Lm5leHRTaWJsaW5nICYmXHJcbiAgICAgICAgICAgICAgICAvY3Vyci8udGVzdChuYXYubmV4dFNpYmxpbmcuY2xhc3NOYW1lKSlcclxuICAgICAgICAgICAgICAgIHNlbGYubW9udGhOYXYucmVtb3ZlQ2hpbGQobmF2Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZGVsdGEgPiAwKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChuYXYucHJldmlvdXNTaWJsaW5nICYmXHJcbiAgICAgICAgICAgICAgICAvY3Vyci8udGVzdChuYXYucHJldmlvdXNTaWJsaW5nLmNsYXNzTmFtZSkpXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1vbnRoTmF2LnJlbW92ZUNoaWxkKG5hdi5wcmV2aW91c1NpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLm9sZEN1ck1vbnRoID0gc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoO1xyXG4gICAgICAgIHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aCA9IHNlbGYubW9udGhOYXYuaW5zZXJ0QmVmb3JlKHNlbGYub2xkQ3VyTW9udGguY2xvbmVOb2RlKHRydWUpLCBkZWx0YSA+IDAgPyBzZWxmLm9sZEN1ck1vbnRoLm5leHRTaWJsaW5nIDogc2VsZi5vbGRDdXJNb250aCk7XHJcbiAgICAgICAgdmFyIGRheXNDb250YWluZXIgPSBzZWxmLmRheXNDb250YWluZXI7XHJcbiAgICAgICAgaWYgKGRheXNDb250YWluZXIuZmlyc3RDaGlsZCAmJiBkYXlzQ29udGFpbmVyLmxhc3RDaGlsZCkge1xyXG4gICAgICAgICAgICBpZiAoZGVsdGEgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNsaWRlTGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIGRheXNDb250YWluZXIubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUxlZnROZXdcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9sZEN1ck1vbnRoLmNsYXNzTGlzdC5hZGQoXCJzbGlkZUxlZnRcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGguY2xhc3NMaXN0LmFkZChcInNsaWRlTGVmdE5ld1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChkZWx0YSA8IDApIHtcclxuICAgICAgICAgICAgICAgIGRheXNDb250YWluZXIuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2xpZGVSaWdodE5ld1wiKTtcclxuICAgICAgICAgICAgICAgIGRheXNDb250YWluZXIubGFzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVJpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5vbGRDdXJNb250aC5jbGFzc0xpc3QuYWRkKFwic2xpZGVSaWdodFwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5jbGFzc0xpc3QuYWRkKFwic2xpZGVSaWdodE5ld1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQgPSBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGhcclxuICAgICAgICAgICAgLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQgPSBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGgubGFzdENoaWxkXHJcbiAgICAgICAgICAgIC5jaGlsZE5vZGVzWzBdO1xyXG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuICAgICAgICBpZiAoc2VsZi5vbGRDdXJNb250aC5maXJzdENoaWxkKVxyXG4gICAgICAgICAgICBzZWxmLm9sZEN1ck1vbnRoLmZpcnN0Q2hpbGQudGV4dENvbnRlbnQgPSBtb250aFRvU3RyKHNlbGYuY3VycmVudE1vbnRoIC0gZGVsdGEsIHNlbGYuY29uZmlnLnNob3J0aGFuZEN1cnJlbnRNb250aCwgc2VsZi5sMTBuKTtcclxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk1vbnRoQ2hhbmdlXCIpO1xyXG4gICAgICAgIGlmIChmcm9tX2tleWJvYXJkICYmXHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiZcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC4kaSkge1xyXG4gICAgICAgICAgICB2YXIgaW5kZXhfMSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuJGk7XHJcbiAgICAgICAgICAgIGFmdGVyRGF5QW5pbShmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGluZGV4XzEsIDApO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjbGVhcih0cmlnZ2VyQ2hhbmdlRXZlbnQpIHtcclxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50ID09PSB2b2lkIDApIHsgdHJpZ2dlckNoYW5nZUV2ZW50ID0gdHJ1ZTsgfVxyXG4gICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGlmIChzZWxmLmFsdElucHV0KVxyXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICBpZiAoc2VsZi5tb2JpbGVJbnB1dClcclxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gW107XHJcbiAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgc2VsZi5zaG93VGltZUlucHV0ID0gZmFsc2U7XHJcbiAgICAgICAgc2VsZi5yZWRyYXcoKTtcclxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZUV2ZW50ID09PSB0cnVlKVxyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsb3NlKCkge1xyXG4gICAgICAgIHNlbGYuaXNPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcIm9wZW5cIik7XHJcbiAgICAgICAgICAgIHNlbGYuX2lucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2xvc2VcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBkZXN0cm95KCkge1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZyAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkRlc3Ryb3lcIik7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHNlbGYuX2hhbmRsZXJzLmxlbmd0aDsgaS0tOykge1xyXG4gICAgICAgICAgICB2YXIgaCA9IHNlbGYuX2hhbmRsZXJzW2ldO1xyXG4gICAgICAgICAgICBoLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihoLmV2ZW50LCBoLmhhbmRsZXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLl9oYW5kbGVycyA9IFtdO1xyXG4gICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0KSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0LnBhcmVudE5vZGUpXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5tb2JpbGVJbnB1dCk7XHJcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQgPSB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY2FsZW5kYXJDb250YWluZXIgJiYgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5wYXJlbnROb2RlKVxyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XHJcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQpIHtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmFsdElucHV0LnBhcmVudE5vZGUpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmFsdElucHV0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2VsZi5hbHRJbnB1dCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBzZWxmLmFsdElucHV0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5pbnB1dCkge1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBzZWxmLmlucHV0Ll90eXBlO1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJmbGF0cGlja3ItaW5wdXRcIik7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQucmVtb3ZlQXR0cmlidXRlKFwicmVhZG9ubHlcIik7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBbXHJcbiAgICAgICAgICAgIFwiX3Nob3dUaW1lSW5wdXRcIixcclxuICAgICAgICAgICAgXCJsYXRlc3RTZWxlY3RlZERhdGVPYmpcIixcclxuICAgICAgICAgICAgXCJfaGlkZU5leHRNb250aEFycm93XCIsXHJcbiAgICAgICAgICAgIFwiX2hpZGVQcmV2TW9udGhBcnJvd1wiLFxyXG4gICAgICAgICAgICBcIl9faGlkZU5leHRNb250aEFycm93XCIsXHJcbiAgICAgICAgICAgIFwiX19oaWRlUHJldk1vbnRoQXJyb3dcIixcclxuICAgICAgICAgICAgXCJpc01vYmlsZVwiLFxyXG4gICAgICAgICAgICBcImlzT3BlblwiLFxyXG4gICAgICAgICAgICBcInNlbGVjdGVkRGF0ZUVsZW1cIixcclxuICAgICAgICAgICAgXCJtaW5EYXRlSGFzVGltZVwiLFxyXG4gICAgICAgICAgICBcIm1heERhdGVIYXNUaW1lXCIsXHJcbiAgICAgICAgICAgIFwiZGF5c1wiLFxyXG4gICAgICAgICAgICBcImRheXNDb250YWluZXJcIixcclxuICAgICAgICAgICAgXCJfaW5wdXRcIixcclxuICAgICAgICAgICAgXCJfcG9zaXRpb25FbGVtZW50XCIsXHJcbiAgICAgICAgICAgIFwiaW5uZXJDb250YWluZXJcIixcclxuICAgICAgICAgICAgXCJyQ29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIFwibW9udGhOYXZcIixcclxuICAgICAgICAgICAgXCJ0b2RheURhdGVFbGVtXCIsXHJcbiAgICAgICAgICAgIFwiY2FsZW5kYXJDb250YWluZXJcIixcclxuICAgICAgICAgICAgXCJ3ZWVrZGF5Q29udGFpbmVyXCIsXHJcbiAgICAgICAgICAgIFwicHJldk1vbnRoTmF2XCIsXHJcbiAgICAgICAgICAgIFwibmV4dE1vbnRoTmF2XCIsXHJcbiAgICAgICAgICAgIFwiY3VycmVudE1vbnRoRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBcImN1cnJlbnRZZWFyRWxlbWVudFwiLFxyXG4gICAgICAgICAgICBcIm5hdmlnYXRpb25DdXJyZW50TW9udGhcIixcclxuICAgICAgICAgICAgXCJzZWxlY3RlZERhdGVFbGVtXCIsXHJcbiAgICAgICAgICAgIFwiY29uZmlnXCIsXHJcbiAgICAgICAgXS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgc2VsZltrXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXRjaCAoXykgeyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBpc0NhbGVuZGFyRWxlbShlbGVtKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFwcGVuZFRvICYmIHNlbGYuY29uZmlnLmFwcGVuZFRvLmNvbnRhaW5zKGVsZW0pKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICByZXR1cm4gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jb250YWlucyhlbGVtKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRvY3VtZW50Q2xpY2soZSkge1xyXG4gICAgICAgIGlmIChzZWxmLmlzT3BlbiAmJiAhc2VsZi5jb25maWcuaW5saW5lKSB7XHJcbiAgICAgICAgICAgIHZhciBpc0NhbGVuZGFyRWxlbWVudCA9IGlzQ2FsZW5kYXJFbGVtKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgdmFyIGlzSW5wdXQgPSBlLnRhcmdldCA9PT0gc2VsZi5pbnB1dCB8fFxyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQgPT09IHNlbGYuYWx0SW5wdXQgfHxcclxuICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5jb250YWlucyhlLnRhcmdldCkgfHxcclxuICAgICAgICAgICAgICAgIChlLnBhdGggJiZcclxuICAgICAgICAgICAgICAgICAgICBlLnBhdGguaW5kZXhPZiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICh+ZS5wYXRoLmluZGV4T2Yoc2VsZi5pbnB1dCkgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfmUucGF0aC5pbmRleE9mKHNlbGYuYWx0SW5wdXQpKSk7XHJcbiAgICAgICAgICAgIHZhciBsb3N0Rm9jdXMgPSBlLnR5cGUgPT09IFwiYmx1clwiXHJcbiAgICAgICAgICAgICAgICA/IGlzSW5wdXQgJiZcclxuICAgICAgICAgICAgICAgICAgICBlLnJlbGF0ZWRUYXJnZXQgJiZcclxuICAgICAgICAgICAgICAgICAgICAhaXNDYWxlbmRhckVsZW0oZS5yZWxhdGVkVGFyZ2V0KVxyXG4gICAgICAgICAgICAgICAgOiAhaXNJbnB1dCAmJiAhaXNDYWxlbmRhckVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChsb3N0Rm9jdXMgJiZcclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLmlnbm9yZWRGb2N1c0VsZW1lbnRzLmluZGV4T2YoZS50YXJnZXQpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJiBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhcihmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5yZWRyYXcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNoYW5nZVllYXIobmV3WWVhcikge1xyXG4gICAgICAgIGlmICghbmV3WWVhciB8fFxyXG4gICAgICAgICAgICAoc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWluICYmXHJcbiAgICAgICAgICAgICAgICBuZXdZZWFyIDwgcGFyc2VJbnQoc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWluKSkgfHxcclxuICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1heCAmJlxyXG4gICAgICAgICAgICAgICAgbmV3WWVhciA+IHBhcnNlSW50KHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1heCkpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIG5ld1llYXJOdW0gPSBuZXdZZWFyLCBpc05ld1llYXIgPSBzZWxmLmN1cnJlbnRZZWFyICE9PSBuZXdZZWFyTnVtO1xyXG4gICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBuZXdZZWFyTnVtIHx8IHNlbGYuY3VycmVudFllYXI7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUgJiZcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gTWF0aC5taW4oc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNb250aCgpLCBzZWxmLmN1cnJlbnRNb250aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gTWF0aC5tYXgoc2VsZi5jb25maWcubWluRGF0ZS5nZXRNb250aCgpLCBzZWxmLmN1cnJlbnRNb250aCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc05ld1llYXIpIHtcclxuICAgICAgICAgICAgc2VsZi5yZWRyYXcoKTtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzRW5hYmxlZChkYXRlLCB0aW1lbGVzcykge1xyXG4gICAgICAgIGlmICh0aW1lbGVzcyA9PT0gdm9pZCAwKSB7IHRpbWVsZXNzID0gdHJ1ZTsgfVxyXG4gICAgICAgIHZhciBkYXRlVG9DaGVjayA9IHNlbGYucGFyc2VEYXRlKGRhdGUsIHVuZGVmaW5lZCwgdGltZWxlc3MpO1xyXG4gICAgICAgIGlmICgoc2VsZi5jb25maWcubWluRGF0ZSAmJlxyXG4gICAgICAgICAgICBkYXRlVG9DaGVjayAmJlxyXG4gICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZVRvQ2hlY2ssIHNlbGYuY29uZmlnLm1pbkRhdGUsIHRpbWVsZXNzICE9PSB1bmRlZmluZWQgPyB0aW1lbGVzcyA6ICFzZWxmLm1pbkRhdGVIYXNUaW1lKSA8IDApIHx8XHJcbiAgICAgICAgICAgIChzZWxmLmNvbmZpZy5tYXhEYXRlICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjayAmJlxyXG4gICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGVUb0NoZWNrLCBzZWxmLmNvbmZpZy5tYXhEYXRlLCB0aW1lbGVzcyAhPT0gdW5kZWZpbmVkID8gdGltZWxlc3MgOiAhc2VsZi5tYXhEYXRlSGFzVGltZSkgPiAwKSlcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcuZW5hYmxlLmxlbmd0aCAmJiAhc2VsZi5jb25maWcuZGlzYWJsZS5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIGlmIChkYXRlVG9DaGVjayA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgdmFyIGJvb2wgPSBzZWxmLmNvbmZpZy5lbmFibGUubGVuZ3RoID4gMCwgYXJyYXkgPSBib29sID8gc2VsZi5jb25maWcuZW5hYmxlIDogc2VsZi5jb25maWcuZGlzYWJsZTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgZCA9IHZvaWQgMDsgaSA8IGFycmF5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGQgPSBhcnJheVtpXTtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkID09PSBcImZ1bmN0aW9uXCIgJiZcclxuICAgICAgICAgICAgICAgIGQoZGF0ZVRvQ2hlY2spKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGQgaW5zdGFuY2VvZiBEYXRlICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjayAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICBkLmdldFRpbWUoKSA9PT0gZGF0ZVRvQ2hlY2suZ2V0VGltZSgpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJvb2w7XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkID09PSBcInN0cmluZ1wiICYmIGRhdGVUb0NoZWNrICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwYXJzZWQgPSBzZWxmLnBhcnNlRGF0ZShkLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlZCAmJiBwYXJzZWQuZ2V0VGltZSgpID09PSBkYXRlVG9DaGVjay5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICA/IGJvb2xcclxuICAgICAgICAgICAgICAgICAgICA6ICFib29sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjayAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICBkLmZyb20gJiZcclxuICAgICAgICAgICAgICAgIGQudG8gJiZcclxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrLmdldFRpbWUoKSA+PSBkLmZyb20uZ2V0VGltZSgpICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlVG9DaGVjay5nZXRUaW1lKCkgPD0gZC50by5nZXRUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICFib29sO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25LZXlEb3duKGUpIHtcclxuICAgICAgICB2YXIgaXNJbnB1dCA9IGUudGFyZ2V0ID09PSBzZWxmLl9pbnB1dDtcclxuICAgICAgICB2YXIgY2FsZW5kYXJFbGVtID0gaXNDYWxlbmRhckVsZW0oZS50YXJnZXQpO1xyXG4gICAgICAgIHZhciBhbGxvd0lucHV0ID0gc2VsZi5jb25maWcuYWxsb3dJbnB1dDtcclxuICAgICAgICB2YXIgYWxsb3dLZXlkb3duID0gc2VsZi5pc09wZW4gJiYgKCFhbGxvd0lucHV0IHx8ICFpc0lucHV0KTtcclxuICAgICAgICB2YXIgYWxsb3dJbmxpbmVLZXlkb3duID0gc2VsZi5jb25maWcuaW5saW5lICYmIGlzSW5wdXQgJiYgIWFsbG93SW5wdXQ7XHJcbiAgICAgICAgaWYgKGUua2V5ID09PSBcIkVudGVyXCIgJiYgaXNJbnB1dCkge1xyXG4gICAgICAgICAgICBpZiAoYWxsb3dJbnB1dCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZXREYXRlKHNlbGYuX2lucHV0LnZhbHVlLCB0cnVlLCBlLnRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcuYWx0Rm9ybWF0XHJcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlLnRhcmdldC5ibHVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc2VsZi5vcGVuKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGNhbGVuZGFyRWxlbSB8fCBhbGxvd0tleWRvd24gfHwgYWxsb3dJbmxpbmVLZXlkb3duKSB7XHJcbiAgICAgICAgICAgIHZhciBpc1RpbWVPYmogPSAhIXNlbGYudGltZUNvbnRhaW5lciAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNvbnRhaW5zKGUudGFyZ2V0KTtcclxuICAgICAgICAgICAgc3dpdGNoIChlLmtleSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkVudGVyXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzVGltZU9iailcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdERhdGUoZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRXNjYXBlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJEZWxldGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNJbnB1dCAmJiAhc2VsZi5jb25maWcuYWxsb3dJbnB1dClcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5jbGVhcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZU9iaikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YV8xID0gZS5rZXkgPT09IFwiQXJyb3dSaWdodFwiID8gMSA6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFlLmN0cmxLZXkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheShlLnRhcmdldC4kaSwgZGVsdGFfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlTW9udGgoZGVsdGFfMSwgdHJ1ZSwgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmhvdXJFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmhvdXJFbGVtZW50LmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dVcFwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkFycm93RG93blwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBlLmtleSA9PT0gXCJBcnJvd0Rvd25cIiA/IDEgOiAtMTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5kYXlzQ29udGFpbmVyICYmIGUudGFyZ2V0LiRpICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGUuY3RybEtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyIC0gZGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheShlLnRhcmdldC4kaSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzVGltZU9iailcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvY3VzT25EYXkoZS50YXJnZXQuJGksIGRlbHRhICogNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFpc1RpbWVPYmogJiYgc2VsZi5ob3VyRWxlbWVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVGltZShlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5fZGVib3VuY2VkQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIlRhYlwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlLnRhcmdldCA9PT0gc2VsZi5ob3VyRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubWludXRlRWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQgPT09IHNlbGYubWludXRlRWxlbWVudCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsZi5zZWNvbmRFbGVtZW50IHx8IHNlbGYuYW1QTSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5zZWNvbmRFbGVtZW50ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFtUE0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQgPT09IHNlbGYuc2Vjb25kRWxlbWVudCAmJiBzZWxmLmFtUE0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFtUE0uZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCAmJiBlLnRhcmdldCA9PT0gc2VsZi5hbVBNKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IFwiQU1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInBcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQgJiYgZS50YXJnZXQgPT09IHNlbGYuYW1QTSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBcIlBNXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25LZXlEb3duXCIsIGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VPdmVyKGVsZW0pIHtcclxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCAhPT0gMSB8fFxyXG4gICAgICAgICAgICAhZWxlbS5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGF5XCIpIHx8XHJcbiAgICAgICAgICAgIHNlbGYubWluUmFuZ2VEYXRlID09PSB1bmRlZmluZWQgfHxcclxuICAgICAgICAgICAgc2VsZi5tYXhSYW5nZURhdGUgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBob3ZlckRhdGUgPSBlbGVtLmRhdGVPYmosIGluaXRpYWxEYXRlID0gc2VsZi5wYXJzZURhdGUoc2VsZi5zZWxlY3RlZERhdGVzWzBdLCB1bmRlZmluZWQsIHRydWUpLCByYW5nZVN0YXJ0RGF0ZSA9IE1hdGgubWluKGhvdmVyRGF0ZS5nZXRUaW1lKCksIHNlbGYuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkpLCByYW5nZUVuZERhdGUgPSBNYXRoLm1heChob3ZlckRhdGUuZ2V0VGltZSgpLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0uZ2V0VGltZSgpKSwgY29udGFpbnNEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAodmFyIHQgPSByYW5nZVN0YXJ0RGF0ZTsgdCA8IHJhbmdlRW5kRGF0ZTsgdCArPSBkdXJhdGlvbi5EQVkpIHtcclxuICAgICAgICAgICAgaWYgKCFpc0VuYWJsZWQobmV3IERhdGUodCkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250YWluc0Rpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBfbG9vcF8xID0gZnVuY3Rpb24gKHRpbWVzdGFtcCwgaSkge1xyXG4gICAgICAgICAgICB2YXIgb3V0T2ZSYW5nZSA9IHRpbWVzdGFtcCA8IHNlbGYubWluUmFuZ2VEYXRlLmdldFRpbWUoKSB8fFxyXG4gICAgICAgICAgICAgICAgdGltZXN0YW1wID4gc2VsZi5tYXhSYW5nZURhdGUuZ2V0VGltZSgpLCBkYXlFbGVtID0gc2VsZi5kYXlzLmNoaWxkTm9kZXNbaV07XHJcbiAgICAgICAgICAgIGlmIChvdXRPZlJhbmdlKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJub3RBbGxvd2VkXCIpO1xyXG4gICAgICAgICAgICAgICAgW1wiaW5SYW5nZVwiLCBcInN0YXJ0UmFuZ2VcIiwgXCJlbmRSYW5nZVwiXS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QucmVtb3ZlKGMpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGNvbnRhaW5zRGlzYWJsZWQgJiYgIW91dE9mUmFuZ2UpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJjb250aW51ZVwiO1xyXG4gICAgICAgICAgICBbXCJzdGFydFJhbmdlXCIsIFwiaW5SYW5nZVwiLCBcImVuZFJhbmdlXCIsIFwibm90QWxsb3dlZFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChjKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5yZW1vdmUoYyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB2YXIgbWluUmFuZ2VEYXRlID0gTWF0aC5tYXgoc2VsZi5taW5SYW5nZURhdGUuZ2V0VGltZSgpLCByYW5nZVN0YXJ0RGF0ZSksIG1heFJhbmdlRGF0ZSA9IE1hdGgubWluKHNlbGYubWF4UmFuZ2VEYXRlLmdldFRpbWUoKSwgcmFuZ2VFbmREYXRlKTtcclxuICAgICAgICAgICAgZWxlbS5jbGFzc0xpc3QuYWRkKGhvdmVyRGF0ZSA8IHNlbGYuc2VsZWN0ZWREYXRlc1swXSA/IFwic3RhcnRSYW5nZVwiIDogXCJlbmRSYW5nZVwiKTtcclxuICAgICAgICAgICAgaWYgKGluaXRpYWxEYXRlIDwgaG92ZXJEYXRlICYmIHRpbWVzdGFtcCA9PT0gaW5pdGlhbERhdGUuZ2V0VGltZSgpKVxyXG4gICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwic3RhcnRSYW5nZVwiKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoaW5pdGlhbERhdGUgPiBob3ZlckRhdGUgJiYgdGltZXN0YW1wID09PSBpbml0aWFsRGF0ZS5nZXRUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJlbmRSYW5nZVwiKTtcclxuICAgICAgICAgICAgaWYgKHRpbWVzdGFtcCA+PSBtaW5SYW5nZURhdGUgJiYgdGltZXN0YW1wIDw9IG1heFJhbmdlRGF0ZSlcclxuICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBmb3IgKHZhciB0aW1lc3RhbXAgPSBzZWxmLmRheXMuY2hpbGROb2Rlc1swXS5kYXRlT2JqLmdldFRpbWUoKSwgaSA9IDA7IGkgPCA0MjsgaSsrLCB0aW1lc3RhbXAgKz0gZHVyYXRpb24uREFZKSB7XHJcbiAgICAgICAgICAgIF9sb29wXzEodGltZXN0YW1wLCBpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblJlc2l6ZSgpIHtcclxuICAgICAgICBpZiAoc2VsZi5pc09wZW4gJiYgIXNlbGYuY29uZmlnLnN0YXRpYyAmJiAhc2VsZi5jb25maWcuaW5saW5lKVxyXG4gICAgICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvcGVuKGUsIHBvc2l0aW9uRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChwb3NpdGlvbkVsZW1lbnQgPT09IHZvaWQgMCkgeyBwb3NpdGlvbkVsZW1lbnQgPSBzZWxmLl9pbnB1dDsgfVxyXG4gICAgICAgIGlmIChzZWxmLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIGlmIChlKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldCAmJiBlLnRhcmdldC5ibHVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0ICE9PSB1bmRlZmluZWQgJiYgc2VsZi5tb2JpbGVJbnB1dC5jbGljaygpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25PcGVuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmlzT3BlbiB8fCBzZWxmLl9pbnB1dC5kaXNhYmxlZCB8fCBzZWxmLmNvbmZpZy5pbmxpbmUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzZWxmLmlzT3BlbiA9IHRydWU7XHJcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwib3BlblwiKTtcclxuICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKHBvc2l0aW9uRWxlbWVudCk7XHJcbiAgICAgICAgc2VsZi5faW5wdXQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcclxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk9wZW5cIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBtaW5NYXhEYXRlU2V0dGVyKHR5cGUpIHtcclxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKGRhdGUpIHtcclxuICAgICAgICAgICAgdmFyIGRhdGVPYmogPSAoc2VsZi5jb25maWdbXCJfXCIgKyB0eXBlICsgXCJEYXRlXCJdID0gc2VsZi5wYXJzZURhdGUoZGF0ZSkpO1xyXG4gICAgICAgICAgICB2YXIgaW52ZXJzZURhdGVPYmogPSBzZWxmLmNvbmZpZ1tcIl9cIiArICh0eXBlID09PSBcIm1pblwiID8gXCJtYXhcIiA6IFwibWluXCIpICsgXCJEYXRlXCJdO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZU9iaiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmW3R5cGUgPT09IFwibWluXCIgPyBcIm1pbkRhdGVIYXNUaW1lXCIgOiBcIm1heERhdGVIYXNUaW1lXCJdID1cclxuICAgICAgICAgICAgICAgICAgICBkYXRlT2JqLmdldEhvdXJzKCkgPiAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0TWludXRlcygpID4gMCB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRlT2JqLmdldFNlY29uZHMoKSA+IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gc2VsZi5zZWxlY3RlZERhdGVzLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gaXNFbmFibGVkKGQpOyB9KTtcclxuICAgICAgICAgICAgICAgIGlmICghc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCAmJiB0eXBlID09PSBcIm1pblwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldEhvdXJzRnJvbURhdGUoZGF0ZU9iaik7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHJlZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGVPYmogIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudFt0eXBlXSA9IGRhdGVPYmouZ2V0RnVsbFllYXIoKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSh0eXBlKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LmRpc2FibGVkID1cclxuICAgICAgICAgICAgICAgICAgICAhIWludmVyc2VEYXRlT2JqICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVPYmogIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlRGF0ZU9iai5nZXRGdWxsWWVhcigpID09PSBkYXRlT2JqLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VDb25maWcoKSB7XHJcbiAgICAgICAgdmFyIGJvb2xPcHRzID0gW1xyXG4gICAgICAgICAgICBcIndyYXBcIixcclxuICAgICAgICAgICAgXCJ3ZWVrTnVtYmVyc1wiLFxyXG4gICAgICAgICAgICBcImFsbG93SW5wdXRcIixcclxuICAgICAgICAgICAgXCJjbGlja09wZW5zXCIsXHJcbiAgICAgICAgICAgIFwidGltZV8yNGhyXCIsXHJcbiAgICAgICAgICAgIFwiZW5hYmxlVGltZVwiLFxyXG4gICAgICAgICAgICBcIm5vQ2FsZW5kYXJcIixcclxuICAgICAgICAgICAgXCJhbHRJbnB1dFwiLFxyXG4gICAgICAgICAgICBcInNob3J0aGFuZEN1cnJlbnRNb250aFwiLFxyXG4gICAgICAgICAgICBcImlubGluZVwiLFxyXG4gICAgICAgICAgICBcInN0YXRpY1wiLFxyXG4gICAgICAgICAgICBcImVuYWJsZVNlY29uZHNcIixcclxuICAgICAgICAgICAgXCJkaXNhYmxlTW9iaWxlXCIsXHJcbiAgICAgICAgXTtcclxuICAgICAgICB2YXIgaG9va3MgPSBbXHJcbiAgICAgICAgICAgIFwib25DaGFuZ2VcIixcclxuICAgICAgICAgICAgXCJvbkNsb3NlXCIsXHJcbiAgICAgICAgICAgIFwib25EYXlDcmVhdGVcIixcclxuICAgICAgICAgICAgXCJvbkRlc3Ryb3lcIixcclxuICAgICAgICAgICAgXCJvbktleURvd25cIixcclxuICAgICAgICAgICAgXCJvbk1vbnRoQ2hhbmdlXCIsXHJcbiAgICAgICAgICAgIFwib25PcGVuXCIsXHJcbiAgICAgICAgICAgIFwib25QYXJzZUNvbmZpZ1wiLFxyXG4gICAgICAgICAgICBcIm9uUmVhZHlcIixcclxuICAgICAgICAgICAgXCJvblZhbHVlVXBkYXRlXCIsXHJcbiAgICAgICAgICAgIFwib25ZZWFyQ2hhbmdlXCIsXHJcbiAgICAgICAgXTtcclxuICAgICAgICBzZWxmLmNvbmZpZyA9IF9fYXNzaWduKHt9LCBmbGF0cGlja3IuZGVmYXVsdENvbmZpZyk7XHJcbiAgICAgICAgdmFyIHVzZXJDb25maWcgPSBfX2Fzc2lnbih7fSwgaW5zdGFuY2VDb25maWcsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZWxlbWVudC5kYXRhc2V0IHx8IHt9KSkpO1xyXG4gICAgICAgIHZhciBmb3JtYXRzJCQxID0ge307XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcImVuYWJsZVwiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5jb25maWcuX2VuYWJsZSB8fCBbXTsgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoZGF0ZXMpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLl9lbmFibGUgPSBwYXJzZURhdGVSdWxlcyhkYXRlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYuY29uZmlnLCBcImRpc2FibGVcIiwge1xyXG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuY29uZmlnLl9kaXNhYmxlIHx8IFtdOyB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuX2Rpc2FibGUgPSBwYXJzZURhdGVSdWxlcyhkYXRlcyk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKCF1c2VyQ29uZmlnLmRhdGVGb3JtYXQgJiYgdXNlckNvbmZpZy5lbmFibGVUaW1lKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHMkJDEuZGF0ZUZvcm1hdCA9IHVzZXJDb25maWcubm9DYWxlbmRhclxyXG4gICAgICAgICAgICAgICAgPyBcIkg6aVwiICsgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlNcIiA6IFwiXCIpXHJcbiAgICAgICAgICAgICAgICA6IGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLmRhdGVGb3JtYXQgK1xyXG4gICAgICAgICAgICAgICAgICAgIFwiIEg6aVwiICtcclxuICAgICAgICAgICAgICAgICAgICAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh1c2VyQ29uZmlnLmFsdElucHV0ICYmIHVzZXJDb25maWcuZW5hYmxlVGltZSAmJiAhdXNlckNvbmZpZy5hbHRGb3JtYXQpIHtcclxuICAgICAgICAgICAgZm9ybWF0cyQkMS5hbHRGb3JtYXQgPSB1c2VyQ29uZmlnLm5vQ2FsZW5kYXJcclxuICAgICAgICAgICAgICAgID8gXCJoOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTIEtcIiA6IFwiIEtcIilcclxuICAgICAgICAgICAgICAgIDogZmxhdHBpY2tyLmRlZmF1bHRDb25maWcuYWx0Rm9ybWF0ICtcclxuICAgICAgICAgICAgICAgICAgICAoXCIgaDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIikgKyBcIiBLXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWluRGF0ZVwiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5jb25maWcuX21pbkRhdGU7IH0sXHJcbiAgICAgICAgICAgIHNldDogbWluTWF4RGF0ZVNldHRlcihcIm1pblwiKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwibWF4RGF0ZVwiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5jb25maWcuX21heERhdGU7IH0sXHJcbiAgICAgICAgICAgIHNldDogbWluTWF4RGF0ZVNldHRlcihcIm1heFwiKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3QuYXNzaWduKHNlbGYuY29uZmlnLCBmb3JtYXRzJCQxLCB1c2VyQ29uZmlnKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvb2xPcHRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPVxyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID09PSB0cnVlIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWdbYm9vbE9wdHNbaV1dID09PSBcInRydWVcIjtcclxuICAgICAgICBmb3IgKHZhciBpID0gaG9va3MubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZ1tob29rc1tpXV0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWdbaG9va3NbaV1dID0gYXJyYXlpZnkoc2VsZi5jb25maWdbaG9va3NbaV1dIHx8IFtdKS5tYXAoYmluZFRvSW5zdGFuY2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5jb25maWcucGx1Z2lucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB2YXIgcGx1Z2luQ29uZiA9IHNlbGYuY29uZmlnLnBsdWdpbnNbaV0oc2VsZikgfHwge307XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBwbHVnaW5Db25mKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAofmhvb2tzLmluZGV4T2Yoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2tleV0gPSBhcnJheWlmeShwbHVnaW5Db25mW2tleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoYmluZFRvSW5zdGFuY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQoc2VsZi5jb25maWdba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdXNlckNvbmZpZ1trZXldID09PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnW2tleV0gPSBwbHVnaW5Db25mW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5pc01vYmlsZSA9XHJcbiAgICAgICAgICAgICFzZWxmLmNvbmZpZy5kaXNhYmxlTW9iaWxlICYmXHJcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuaW5saW5lICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiICYmXHJcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcuZGlzYWJsZS5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy5lbmFibGUubGVuZ3RoICYmXHJcbiAgICAgICAgICAgICAgICAhc2VsZi5jb25maWcud2Vla051bWJlcnMgJiZcclxuICAgICAgICAgICAgICAgIC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTtcclxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblBhcnNlQ29uZmlnXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0dXBMb2NhbGUoKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBzZWxmLmNvbmZpZy5sb2NhbGUgIT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgdHlwZW9mIGZsYXRwaWNrci5sMTBuc1tzZWxmLmNvbmZpZy5sb2NhbGVdID09PSBcInVuZGVmaW5lZFwiKVxyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJmbGF0cGlja3I6IGludmFsaWQgbG9jYWxlIFwiICsgc2VsZi5jb25maWcubG9jYWxlKTtcclxuICAgICAgICBzZWxmLmwxMG4gPSBfX2Fzc2lnbih7fSwgZmxhdHBpY2tyLmwxMG5zLmRlZmF1bHQsIHR5cGVvZiBzZWxmLmNvbmZpZy5sb2NhbGUgPT09IFwib2JqZWN0XCJcclxuICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5sb2NhbGVcclxuICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5sb2NhbGUgIT09IFwiZGVmYXVsdFwiXHJcbiAgICAgICAgICAgICAgICA/IGZsYXRwaWNrci5sMTBuc1tzZWxmLmNvbmZpZy5sb2NhbGVdXHJcbiAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwb3NpdGlvbkNhbGVuZGFyKHBvc2l0aW9uRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChwb3NpdGlvbkVsZW1lbnQgPT09IHZvaWQgMCkgeyBwb3NpdGlvbkVsZW1lbnQgPSBzZWxmLl9wb3NpdGlvbkVsZW1lbnQ7IH1cclxuICAgICAgICBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lciA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGNhbGVuZGFySGVpZ2h0ID0gc2VsZi5jYWxlbmRhckNvbnRhaW5lci5vZmZzZXRIZWlnaHQsIGNhbGVuZGFyV2lkdGggPSBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLm9mZnNldFdpZHRoLCBjb25maWdQb3MgPSBzZWxmLmNvbmZpZy5wb3NpdGlvbiwgaW5wdXRCb3VuZHMgPSBwb3NpdGlvbkVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksIGRpc3RhbmNlRnJvbUJvdHRvbSA9IHdpbmRvdy5pbm5lckhlaWdodCAtIGlucHV0Qm91bmRzLmJvdHRvbSwgc2hvd09uVG9wID0gY29uZmlnUG9zID09PSBcImFib3ZlXCIgfHxcclxuICAgICAgICAgICAgKGNvbmZpZ1BvcyAhPT0gXCJiZWxvd1wiICYmXHJcbiAgICAgICAgICAgICAgICBkaXN0YW5jZUZyb21Cb3R0b20gPCBjYWxlbmRhckhlaWdodCAmJlxyXG4gICAgICAgICAgICAgICAgaW5wdXRCb3VuZHMudG9wID4gY2FsZW5kYXJIZWlnaHQpO1xyXG4gICAgICAgIHZhciB0b3AgPSB3aW5kb3cucGFnZVlPZmZzZXQgK1xyXG4gICAgICAgICAgICBpbnB1dEJvdW5kcy50b3AgK1xyXG4gICAgICAgICAgICAoIXNob3dPblRvcCA/IHBvc2l0aW9uRWxlbWVudC5vZmZzZXRIZWlnaHQgKyAyIDogLWNhbGVuZGFySGVpZ2h0IC0gMik7XHJcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJhcnJvd1RvcFwiLCAhc2hvd09uVG9wKTtcclxuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93Qm90dG9tXCIsIHNob3dPblRvcCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmlubGluZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciBsZWZ0ID0gd2luZG93LnBhZ2VYT2Zmc2V0ICsgaW5wdXRCb3VuZHMubGVmdDtcclxuICAgICAgICB2YXIgcmlnaHQgPSB3aW5kb3cuZG9jdW1lbnQuYm9keS5vZmZzZXRXaWR0aCAtIGlucHV0Qm91bmRzLnJpZ2h0O1xyXG4gICAgICAgIHZhciByaWdodE1vc3QgPSBsZWZ0ICsgY2FsZW5kYXJXaWR0aCA+IHdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoO1xyXG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwicmlnaHRNb3N0XCIsIHJpZ2h0TW9zdCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLnN0YXRpYylcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUudG9wID0gdG9wICsgXCJweFwiO1xyXG4gICAgICAgIGlmICghcmlnaHRNb3N0KSB7XHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUubGVmdCA9IGxlZnQgKyBcInB4XCI7XHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSBcImF1dG9cIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUubGVmdCA9IFwiYXV0b1wiO1xyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnN0eWxlLnJpZ2h0ID0gcmlnaHQgKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcmVkcmF3KCkge1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyIHx8IHNlbGYuaXNNb2JpbGUpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBidWlsZFdlZWtkYXlzKCk7XHJcbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xyXG4gICAgICAgIGJ1aWxkRGF5cygpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2VsZWN0RGF0ZShlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdmFyIGlzU2VsZWN0YWJsZSA9IGZ1bmN0aW9uIChkYXkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRheS5jbGFzc0xpc3QgJiZcclxuICAgICAgICAgICAgICAgIGRheS5jbGFzc0xpc3QuY29udGFpbnMoXCJmbGF0cGlja3ItZGF5XCIpICYmXHJcbiAgICAgICAgICAgICAgICAhZGF5LmNsYXNzTGlzdC5jb250YWlucyhcImRpc2FibGVkXCIpICYmXHJcbiAgICAgICAgICAgICAgICAhZGF5LmNsYXNzTGlzdC5jb250YWlucyhcIm5vdEFsbG93ZWRcIik7XHJcbiAgICAgICAgfTtcclxuICAgICAgICB2YXIgdCA9IGZpbmRQYXJlbnQoZS50YXJnZXQsIGlzU2VsZWN0YWJsZSk7XHJcbiAgICAgICAgaWYgKHQgPT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSB0O1xyXG4gICAgICAgIHZhciBzZWxlY3RlZERhdGUgPSAoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBuZXcgRGF0ZSh0YXJnZXQuZGF0ZU9iai5nZXRUaW1lKCkpKTtcclxuICAgICAgICB2YXIgc2hvdWxkQ2hhbmdlTW9udGggPSBzZWxlY3RlZERhdGUuZ2V0TW9udGgoKSAhPT0gc2VsZi5jdXJyZW50TW9udGggJiZcclxuICAgICAgICAgICAgc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiO1xyXG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlRWxlbSA9IHRhcmdldDtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJzaW5nbGVcIilcclxuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzID0gW3NlbGVjdGVkRGF0ZV07XHJcbiAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJtdWx0aXBsZVwiKSB7XHJcbiAgICAgICAgICAgIHZhciBzZWxlY3RlZEluZGV4ID0gaXNEYXRlU2VsZWN0ZWQoc2VsZWN0ZWREYXRlKTtcclxuICAgICAgICAgICAgaWYgKHNlbGVjdGVkSW5kZXgpXHJcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMuc3BsaWNlKHBhcnNlSW50KHNlbGVjdGVkSW5kZXgpLCAxKTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnB1c2goc2VsZWN0ZWREYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAyKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5jbGVhcigpO1xyXG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMucHVzaChzZWxlY3RlZERhdGUpO1xyXG4gICAgICAgICAgICBpZiAoY29tcGFyZURhdGVzKHNlbGVjdGVkRGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLCB0cnVlKSAhPT0gMClcclxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpOyB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XHJcbiAgICAgICAgaWYgKHNob3VsZENoYW5nZU1vbnRoKSB7XHJcbiAgICAgICAgICAgIHZhciBpc05ld1llYXIgPSBzZWxmLmN1cnJlbnRZZWFyICE9PSBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpO1xyXG4gICAgICAgICAgICBpZiAoaXNOZXdZZWFyKVxyXG4gICAgICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk1vbnRoQ2hhbmdlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZERheXMoKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSAmJlxyXG4gICAgICAgICAgICBzZWxmLm1pbkRhdGVIYXNUaW1lICYmXHJcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLmVuYWJsZVRpbWUgJiZcclxuICAgICAgICAgICAgY29tcGFyZURhdGVzKHNlbGVjdGVkRGF0ZSwgc2VsZi5jb25maWcubWluRGF0ZSkgPT09IDApXHJcbiAgICAgICAgICAgIHNldEhvdXJzRnJvbURhdGUoc2VsZi5jb25maWcubWluRGF0ZSk7XHJcbiAgICAgICAgdXBkYXRlVmFsdWUoKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSlcclxuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7IHJldHVybiAoc2VsZi5zaG93VGltZUlucHV0ID0gdHJ1ZSk7IH0sIDUwKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcih0YXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5faGlkZVByZXZNb250aEFycm93ID1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGYubWluUmFuZ2VEYXRlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubWluUmFuZ2VEYXRlID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXMuY2hpbGROb2Rlc1swXS5kYXRlT2JqKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyA9XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5faGlkZU5leHRNb250aEFycm93IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWxmLm1heFJhbmdlRGF0ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1heFJhbmdlRGF0ZSA8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggKyAxLCAxKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcclxuICAgICAgICBpZiAoIXNob3VsZENoYW5nZU1vbnRoKVxyXG4gICAgICAgICAgICBmb2N1c09uRGF5KHRhcmdldC4kaSwgMCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBhZnRlckRheUFuaW0oZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5zZWxlY3RlZERhdGVFbGVtICYmIHNlbGYuc2VsZWN0ZWREYXRlRWxlbS5mb2N1cygpOyB9KTtcclxuICAgICAgICBpZiAoc2VsZi5ob3VyRWxlbWVudCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZCAmJiBzZWxmLmhvdXJFbGVtZW50LnNlbGVjdCgpOyB9LCA0NTEpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5jbG9zZU9uU2VsZWN0KSB7XHJcbiAgICAgICAgICAgIHZhciBzaW5nbGUgPSBzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiICYmICFzZWxmLmNvbmZpZy5lbmFibGVUaW1lO1xyXG4gICAgICAgICAgICB2YXIgcmFuZ2UgPSBzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIgJiZcclxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDIgJiZcclxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy5lbmFibGVUaW1lO1xyXG4gICAgICAgICAgICBpZiAoc2luZ2xlIHx8IHJhbmdlKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldChvcHRpb24sIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKG9wdGlvbiAhPT0gbnVsbCAmJiB0eXBlb2Ygb3B0aW9uID09PSBcIm9iamVjdFwiKVxyXG4gICAgICAgICAgICBPYmplY3QuYXNzaWduKHNlbGYuY29uZmlnLCBvcHRpb24pO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgc2VsZi5jb25maWdbb3B0aW9uXSA9IHZhbHVlO1xyXG4gICAgICAgIHNlbGYucmVkcmF3KCk7XHJcbiAgICAgICAganVtcFRvRGF0ZSgpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0U2VsZWN0ZWREYXRlKGlucHV0RGF0ZSwgZm9ybWF0KSB7XHJcbiAgICAgICAgdmFyIGRhdGVzID0gW107XHJcbiAgICAgICAgaWYgKGlucHV0RGF0ZSBpbnN0YW5jZW9mIEFycmF5KVxyXG4gICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZS5tYXAoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHNlbGYucGFyc2VEYXRlKGQsIGZvcm1hdCk7IH0pO1xyXG4gICAgICAgIGVsc2UgaWYgKGlucHV0RGF0ZSBpbnN0YW5jZW9mIERhdGUgfHwgdHlwZW9mIGlucHV0RGF0ZSA9PT0gXCJudW1iZXJcIilcclxuICAgICAgICAgICAgZGF0ZXMgPSBbc2VsZi5wYXJzZURhdGUoaW5wdXREYXRlLCBmb3JtYXQpXTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgaW5wdXREYXRlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoc2VsZi5jb25maWcubW9kZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInNpbmdsZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVzID0gW3NlbGYucGFyc2VEYXRlKGlucHV0RGF0ZSwgZm9ybWF0KV07XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibXVsdGlwbGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBkYXRlcyA9IGlucHV0RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoXCI7IFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBzZWxmLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpOyB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJyYW5nZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVzID0gaW5wdXREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChzZWxmLmwxMG4ucmFuZ2VTZXBhcmF0b3IpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHNlbGYucGFyc2VEYXRlKGRhdGUsIGZvcm1hdCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBkYXRlcy5maWx0ZXIoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQgaW5zdGFuY2VvZiBEYXRlICYmIGlzRW5hYmxlZChkLCBmYWxzZSk7IH0pO1xyXG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5zb3J0KGZ1bmN0aW9uIChhLCBiKSB7IHJldHVybiBhLmdldFRpbWUoKSAtIGIuZ2V0VGltZSgpOyB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldERhdGUoZGF0ZSwgdHJpZ2dlckNoYW5nZSwgZm9ybWF0KSB7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgPT09IHZvaWQgMCkgeyB0cmlnZ2VyQ2hhbmdlID0gZmFsc2U7IH1cclxuICAgICAgICBpZiAoZm9ybWF0ID09PSB2b2lkIDApIHsgZm9ybWF0ID0gdW5kZWZpbmVkOyB9XHJcbiAgICAgICAgaWYgKGRhdGUgIT09IDAgJiYgIWRhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNsZWFyKHRyaWdnZXJDaGFuZ2UpO1xyXG4gICAgICAgIHNldFNlbGVjdGVkRGF0ZShkYXRlLCBmb3JtYXQpO1xyXG4gICAgICAgIHNlbGYuc2hvd1RpbWVJbnB1dCA9IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPiAwO1xyXG4gICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gc2VsZi5zZWxlY3RlZERhdGVzWzBdO1xyXG4gICAgICAgIHNlbGYucmVkcmF3KCk7XHJcbiAgICAgICAganVtcFRvRGF0ZSgpO1xyXG4gICAgICAgIHNldEhvdXJzRnJvbURhdGUoKTtcclxuICAgICAgICB1cGRhdGVWYWx1ZSh0cmlnZ2VyQ2hhbmdlKTtcclxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSlcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZURhdGVSdWxlcyhhcnIpIHtcclxuICAgICAgICByZXR1cm4gYXJyXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHJ1bGUpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBydWxlID09PSBcInN0cmluZ1wiIHx8XHJcbiAgICAgICAgICAgICAgICB0eXBlb2YgcnVsZSA9PT0gXCJudW1iZXJcIiB8fFxyXG4gICAgICAgICAgICAgICAgcnVsZSBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzZWxmLnBhcnNlRGF0ZShydWxlLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHJ1bGUgJiZcclxuICAgICAgICAgICAgICAgIHR5cGVvZiBydWxlID09PSBcIm9iamVjdFwiICYmXHJcbiAgICAgICAgICAgICAgICBydWxlLmZyb20gJiZcclxuICAgICAgICAgICAgICAgIHJ1bGUudG8pXHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IHNlbGYucGFyc2VEYXRlKHJ1bGUuZnJvbSwgdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgICAgICB0bzogc2VsZi5wYXJzZURhdGUocnVsZS50bywgdW5kZWZpbmVkKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHJldHVybiBydWxlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5maWx0ZXIoZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0dXBEYXRlcygpIHtcclxuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbXTtcclxuICAgICAgICBzZWxmLm5vdyA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdmFyIHByZWxvYWRlZERhdGUgPSBzZWxmLmNvbmZpZy5kZWZhdWx0RGF0ZSB8fCBzZWxmLmlucHV0LnZhbHVlO1xyXG4gICAgICAgIGlmIChwcmVsb2FkZWREYXRlKVxyXG4gICAgICAgICAgICBzZXRTZWxlY3RlZERhdGUocHJlbG9hZGVkRGF0ZSwgc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgdmFyIGluaXRpYWxEYXRlID0gc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aFxyXG4gICAgICAgICAgICA/IHNlbGYuc2VsZWN0ZWREYXRlc1swXVxyXG4gICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1pbkRhdGUgJiZcclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0VGltZSgpID4gc2VsZi5ub3cuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1pbkRhdGVcclxuICAgICAgICAgICAgICAgIDogc2VsZi5jb25maWcubWF4RGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heERhdGUuZ2V0VGltZSgpIDwgc2VsZi5ub3cuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5tYXhEYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLm5vdztcclxuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gaW5pdGlhbERhdGUuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICBzZWxmLmN1cnJlbnRNb250aCA9IGluaXRpYWxEYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqID0gc2VsZi5zZWxlY3RlZERhdGVzWzBdO1xyXG4gICAgICAgIHNlbGYubWluRGF0ZUhhc1RpbWUgPVxyXG4gICAgICAgICAgICAhIXNlbGYuY29uZmlnLm1pbkRhdGUgJiZcclxuICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCkgPiAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCkgPiAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRTZWNvbmRzKCkgPiAwKTtcclxuICAgICAgICBzZWxmLm1heERhdGVIYXNUaW1lID1cclxuICAgICAgICAgICAgISFzZWxmLmNvbmZpZy5tYXhEYXRlICYmXHJcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpID4gMCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TWludXRlcygpID4gMCB8fFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1heERhdGUuZ2V0U2Vjb25kcygpID4gMCk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsIFwic2hvd1RpbWVJbnB1dFwiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5fc2hvd1RpbWVJbnB1dDsgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoYm9vbCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fc2hvd1RpbWVJbnB1dCA9IGJvb2w7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lcilcclxuICAgICAgICAgICAgICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcInNob3dUaW1lSW5wdXRcIiwgYm9vbCk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKCk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGVPYmosIGZybXQpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcgIT09IHVuZGVmaW5lZCAmJiBzZWxmLmNvbmZpZy5mb3JtYXREYXRlICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNvbmZpZy5mb3JtYXREYXRlKGRhdGVPYmosIGZybXQpO1xyXG4gICAgICAgIHJldHVybiBmcm10XHJcbiAgICAgICAgICAgIC5zcGxpdChcIlwiKVxyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChjLCBpLCBhcnIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZvcm1hdHNbY10gJiYgYXJyW2kgLSAxXSAhPT0gXCJcXFxcXCJcclxuICAgICAgICAgICAgICAgID8gZm9ybWF0c1tjXShkYXRlT2JqLCBzZWxmLmwxMG4sIHNlbGYuY29uZmlnKVxyXG4gICAgICAgICAgICAgICAgOiBjICE9PSBcIlxcXFxcIiA/IGMgOiBcIlwiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5qb2luKFwiXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gcGFyc2VEYXRlKGRhdGUsIGdpdmVuRm9ybWF0LCB0aW1lbGVzcykge1xyXG4gICAgICAgIGlmIChkYXRlICE9PSAwICYmICFkYXRlKVxyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIHZhciBwYXJzZWREYXRlO1xyXG4gICAgICAgIHZhciBkYXRlX29yaWcgPSBkYXRlO1xyXG4gICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSlcclxuICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpKTtcclxuICAgICAgICBlbHNlIGlmICh0eXBlb2YgZGF0ZSAhPT0gXCJzdHJpbmdcIiAmJlxyXG4gICAgICAgICAgICBkYXRlLnRvRml4ZWQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRlID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgICAgICAgIHZhciBmb3JtYXQgPSBnaXZlbkZvcm1hdCB8fCAoc2VsZi5jb25maWcgfHwgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcpLmRhdGVGb3JtYXQ7XHJcbiAgICAgICAgICAgIHZhciBkYXRlc3RyID0gU3RyaW5nKGRhdGUpLnRyaW0oKTtcclxuICAgICAgICAgICAgaWYgKGRhdGVzdHIgPT09IFwidG9kYXlcIikge1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB0aW1lbGVzcyA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoL1okLy50ZXN0KGRhdGVzdHIpIHx8XHJcbiAgICAgICAgICAgICAgICAvR01UJC8udGVzdChkYXRlc3RyKSlcclxuICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBuZXcgRGF0ZShkYXRlKTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcgJiYgc2VsZi5jb25maWcucGFyc2VEYXRlKVxyXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IHNlbGYuY29uZmlnLnBhcnNlRGF0ZShkYXRlLCBmb3JtYXQpO1xyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZyB8fCAhc2VsZi5jb25maWcubm9DYWxlbmRhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA/IG5ldyBEYXRlKG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKSwgMCwgMSwgMCwgMCwgMCwgMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBuZXcgRGF0ZShuZXcgRGF0ZSgpLnNldEhvdXJzKDAsIDAsIDAsIDApKTtcclxuICAgICAgICAgICAgICAgIHZhciBtYXRjaGVkID0gdm9pZCAwLCBvcHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBtYXRjaEluZGV4ID0gMCwgcmVnZXhTdHIgPSBcIlwiOyBpIDwgZm9ybWF0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRva2VuID0gZm9ybWF0W2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0JhY2tTbGFzaCA9IHRva2VuID09PSBcIlxcXFxcIjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZXNjYXBlZCA9IGZvcm1hdFtpIC0gMV0gPT09IFwiXFxcXFwiIHx8IGlzQmFja1NsYXNoO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b2tlblJlZ2V4W3Rva2VuXSAmJiAhZXNjYXBlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdleFN0ciArPSB0b2tlblJlZ2V4W3Rva2VuXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gbmV3IFJlZ0V4cChyZWdleFN0cikuZXhlYyhkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoICYmIChtYXRjaGVkID0gdHJ1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wc1t0b2tlbiAhPT0gXCJZXCIgPyBcInB1c2hcIiA6IFwidW5zaGlmdFwiXSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IHJldkZvcm1hdFt0b2tlbl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsOiBtYXRjaFsrK21hdGNoSW5kZXhdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoIWlzQmFja1NsYXNoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWdleFN0ciArPSBcIi5cIjtcclxuICAgICAgICAgICAgICAgICAgICBvcHMuZm9yRWFjaChmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZuID0gX2EuZm4sIHZhbCA9IF9hLnZhbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChwYXJzZWREYXRlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuKHBhcnNlZERhdGUsIHZhbCwgc2VsZi5sMTBuKSB8fCBwYXJzZWREYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHBhcnNlZERhdGUgPSBtYXRjaGVkID8gcGFyc2VkRGF0ZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIShwYXJzZWREYXRlIGluc3RhbmNlb2YgRGF0ZSkpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiZmxhdHBpY2tyOiBpbnZhbGlkIGRhdGUgXCIgKyBkYXRlX29yaWcpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmluZm8oc2VsZi5lbGVtZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRpbWVsZXNzID09PSB0cnVlKVxyXG4gICAgICAgICAgICBwYXJzZWREYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xyXG4gICAgICAgIHJldHVybiBwYXJzZWREYXRlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0dXBJbnB1dHMoKSB7XHJcbiAgICAgICAgc2VsZi5pbnB1dCA9IHNlbGYuY29uZmlnLndyYXBcclxuICAgICAgICAgICAgPyBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pbnB1dF1cIilcclxuICAgICAgICAgICAgOiBlbGVtZW50O1xyXG4gICAgICAgIGlmICghc2VsZi5pbnB1dCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJFcnJvcjogaW52YWxpZCBpbnB1dCBlbGVtZW50IHNwZWNpZmllZFwiLCBzZWxmLmlucHV0KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLmlucHV0Ll90eXBlID0gc2VsZi5pbnB1dC50eXBlO1xyXG4gICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgIHNlbGYuaW5wdXQuY2xhc3NMaXN0LmFkZChcImZsYXRwaWNrci1pbnB1dFwiKTtcclxuICAgICAgICBzZWxmLl9pbnB1dCA9IHNlbGYuaW5wdXQ7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmFsdElucHV0KSB7XHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQgPSBjcmVhdGVFbGVtZW50KHNlbGYuaW5wdXQubm9kZU5hbWUsIHNlbGYuaW5wdXQuY2xhc3NOYW1lICsgXCIgXCIgKyBzZWxmLmNvbmZpZy5hbHRJbnB1dENsYXNzKTtcclxuICAgICAgICAgICAgc2VsZi5faW5wdXQgPSBzZWxmLmFsdElucHV0O1xyXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnBsYWNlaG9sZGVyID0gc2VsZi5pbnB1dC5wbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5kaXNhYmxlZCA9IHNlbGYuaW5wdXQuZGlzYWJsZWQ7XHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucmVxdWlyZWQgPSBzZWxmLmlucHV0LnJlcXVpcmVkO1xyXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5zdGF0aWMgJiYgc2VsZi5pbnB1dC5wYXJlbnROb2RlKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5pbnB1dC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLmFsdElucHV0LCBzZWxmLmlucHV0Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5hbGxvd0lucHV0KVxyXG4gICAgICAgICAgICBzZWxmLl9pbnB1dC5zZXRBdHRyaWJ1dGUoXCJyZWFkb25seVwiLCBcInJlYWRvbmx5XCIpO1xyXG4gICAgICAgIHNlbGYuX3Bvc2l0aW9uRWxlbWVudCA9IHNlbGYuY29uZmlnLnBvc2l0aW9uRWxlbWVudCB8fCBzZWxmLl9pbnB1dDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldHVwTW9iaWxlKCkge1xyXG4gICAgICAgIHZhciBpbnB1dFR5cGUgPSBzZWxmLmNvbmZpZy5lbmFibGVUaW1lXHJcbiAgICAgICAgICAgID8gc2VsZi5jb25maWcubm9DYWxlbmRhciA/IFwidGltZVwiIDogXCJkYXRldGltZS1sb2NhbFwiXHJcbiAgICAgICAgICAgIDogXCJkYXRlXCI7XHJcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiLCBzZWxmLmlucHV0LmNsYXNzTmFtZSArIFwiIGZsYXRwaWNrci1tb2JpbGVcIik7XHJcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5zdGVwID0gc2VsZi5pbnB1dC5nZXRBdHRyaWJ1dGUoXCJzdGVwXCIpIHx8IFwiYW55XCI7XHJcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC50YWJJbmRleCA9IDE7XHJcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC50eXBlID0gaW5wdXRUeXBlO1xyXG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQuZGlzYWJsZWQgPSBzZWxmLmlucHV0LmRpc2FibGVkO1xyXG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQucGxhY2Vob2xkZXIgPSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyO1xyXG4gICAgICAgIHNlbGYubW9iaWxlRm9ybWF0U3RyID1cclxuICAgICAgICAgICAgaW5wdXRUeXBlID09PSBcImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgICAgID8gXCJZLW0tZFxcXFxUSDppOlNcIlxyXG4gICAgICAgICAgICAgICAgOiBpbnB1dFR5cGUgPT09IFwiZGF0ZVwiID8gXCJZLW0tZFwiIDogXCJIOmk6U1wiO1xyXG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQuZGVmYXVsdFZhbHVlID0gc2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9IHNlbGYuZm9ybWF0RGF0ZShzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHNlbGYubW9iaWxlRm9ybWF0U3RyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1pbkRhdGUpXHJcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQubWluID0gc2VsZi5mb3JtYXREYXRlKHNlbGYuY29uZmlnLm1pbkRhdGUsIFwiWS1tLWRcIik7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1heERhdGUpXHJcbiAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQubWF4ID0gc2VsZi5mb3JtYXREYXRlKHNlbGYuY29uZmlnLm1heERhdGUsIFwiWS1tLWRcIik7XHJcbiAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJoaWRkZW5cIjtcclxuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LnR5cGUgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmlucHV0LnBhcmVudE5vZGUpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYubW9iaWxlSW5wdXQsIHNlbGYuaW5wdXQubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoX2EpIHsgfVxyXG4gICAgICAgIHNlbGYubW9iaWxlSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBzZWxmLnNldERhdGUoZS50YXJnZXQudmFsdWUsIGZhbHNlLCBzZWxmLm1vYmlsZUZvcm1hdFN0cik7XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNsb3NlXCIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlKCkge1xyXG4gICAgICAgIGlmIChzZWxmLmlzT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2xvc2UoKTtcclxuICAgICAgICBzZWxmLm9wZW4oKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHRyaWdnZXJFdmVudChldmVudCwgZGF0YSkge1xyXG4gICAgICAgIHZhciBob29rcyA9IHNlbGYuY29uZmlnW2V2ZW50XTtcclxuICAgICAgICBpZiAoaG9va3MgIT09IHVuZGVmaW5lZCAmJiBob29rcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBob29rc1tpXSAmJiBpIDwgaG9va3MubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgICAgICBob29rc1tpXShzZWxmLnNlbGVjdGVkRGF0ZXMsIHNlbGYuaW5wdXQudmFsdWUsIHNlbGYsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQgPT09IFwib25DaGFuZ2VcIikge1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoXCJjaGFuZ2VcIikpO1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LmRpc3BhdGNoRXZlbnQoY3JlYXRlRXZlbnQoXCJpbnB1dFwiKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY3JlYXRlRXZlbnQobmFtZSkge1xyXG4gICAgICAgIHZhciBlID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoXCJFdmVudFwiKTtcclxuICAgICAgICBlLmluaXRFdmVudChuYW1lLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICByZXR1cm4gZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzRGF0ZVNlbGVjdGVkKGRhdGUpIHtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoY29tcGFyZURhdGVzKHNlbGYuc2VsZWN0ZWREYXRlc1tpXSwgZGF0ZSkgPT09IDApXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJcIiArIGk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzRGF0ZUluUmFuZ2UoZGF0ZSkge1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCIgfHwgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA8IDIpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICByZXR1cm4gKGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0pID49IDAgJiZcclxuICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSkgPD0gMCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCkge1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyIHx8IHNlbGYuaXNNb2JpbGUgfHwgIXNlbGYubW9udGhOYXYpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQudGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICBtb250aFRvU3RyKHNlbGYuY3VycmVudE1vbnRoLCBzZWxmLmNvbmZpZy5zaG9ydGhhbmRDdXJyZW50TW9udGgsIHNlbGYubDEwbikgKyBcIiBcIjtcclxuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC52YWx1ZSA9IHNlbGYuY3VycmVudFllYXIudG9TdHJpbmcoKTtcclxuICAgICAgICBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgPVxyXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIChzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY3VycmVudE1vbnRoIDw9IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0TW9udGgoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jdXJyZW50WWVhciA8IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICAgICAgc2VsZi5faGlkZU5leHRNb250aEFycm93ID1cclxuICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAoc2VsZi5jdXJyZW50WWVhciA9PT0gc2VsZi5jb25maWcubWF4RGF0ZS5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmN1cnJlbnRNb250aCArIDEgPiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKClcclxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY3VycmVudFllYXIgPiBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdXBkYXRlVmFsdWUodHJpZ2dlckNoYW5nZSkge1xyXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlID09PSB2b2lkIDApIHsgdHJpZ2dlckNoYW5nZSA9IHRydWU7IH1cclxuICAgICAgICBpZiAoIXNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGgpXHJcbiAgICAgICAgICAgIHJldHVybiBzZWxmLmNsZWFyKHRyaWdnZXJDaGFuZ2UpO1xyXG4gICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0ICE9PSB1bmRlZmluZWQgJiYgc2VsZi5tb2JpbGVGb3JtYXRTdHIpIHtcclxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC52YWx1ZSA9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmZvcm1hdERhdGUoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmosIHNlbGYubW9iaWxlRm9ybWF0U3RyKVxyXG4gICAgICAgICAgICAgICAgICAgIDogXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGpvaW5DaGFyID0gc2VsZi5jb25maWcubW9kZSAhPT0gXCJyYW5nZVwiXHJcbiAgICAgICAgICAgID8gc2VsZi5jb25maWcuY29uanVuY3Rpb25cclxuICAgICAgICAgICAgOiBzZWxmLmwxMG4ucmFuZ2VTZXBhcmF0b3I7XHJcbiAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSA9IHNlbGYuc2VsZWN0ZWREYXRlc1xyXG4gICAgICAgICAgICAubWFwKGZ1bmN0aW9uIChkT2JqKSB7IHJldHVybiBzZWxmLmZvcm1hdERhdGUoZE9iaiwgc2VsZi5jb25maWcuZGF0ZUZvcm1hdCk7IH0pXHJcbiAgICAgICAgICAgIC5qb2luKGpvaW5DaGFyKTtcclxuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudmFsdWUgPSBzZWxmLnNlbGVjdGVkRGF0ZXNcclxuICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGRPYmopIHsgcmV0dXJuIHNlbGYuZm9ybWF0RGF0ZShkT2JqLCBzZWxmLmNvbmZpZy5hbHRGb3JtYXQpOyB9KVxyXG4gICAgICAgICAgICAgICAgLmpvaW4oam9pbkNoYXIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSAhPT0gZmFsc2UpXHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uVmFsdWVVcGRhdGVcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbk1vbnRoTmF2U2Nyb2xsKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgdmFyIGlzWWVhciA9IHNlbGYuY3VycmVudFllYXJFbGVtZW50LnBhcmVudE5vZGUgJiZcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQucGFyZW50Tm9kZS5jb250YWlucyhlLnRhcmdldCk7XHJcbiAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQgfHwgaXNZZWFyKSB7XHJcbiAgICAgICAgICAgIHZhciBkZWx0YSA9IG1vdXNlRGVsdGEoZSk7XHJcbiAgICAgICAgICAgIGlmIChpc1llYXIpIHtcclxuICAgICAgICAgICAgICAgIGNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciArIGRlbHRhKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0LnZhbHVlID0gc2VsZi5jdXJyZW50WWVhci50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHNlbGYuY2hhbmdlTW9udGgoZGVsdGEsIHRydWUsIGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbk1vbnRoTmF2Q2xpY2soZSkge1xyXG4gICAgICAgIHZhciBpc1ByZXZNb250aCA9IHNlbGYucHJldk1vbnRoTmF2LmNvbnRhaW5zKGUudGFyZ2V0KTtcclxuICAgICAgICB2YXIgaXNOZXh0TW9udGggPSBzZWxmLm5leHRNb250aE5hdi5jb250YWlucyhlLnRhcmdldCk7XHJcbiAgICAgICAgaWYgKGlzUHJldk1vbnRoIHx8IGlzTmV4dE1vbnRoKVxyXG4gICAgICAgICAgICBjaGFuZ2VNb250aChpc1ByZXZNb250aCA/IC0xIDogMSk7XHJcbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQgPT09IHNlbGYuY3VycmVudFllYXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQuc2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmNsYXNzTmFtZSA9PT0gXCJhcnJvd1VwXCIpXHJcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyICsgMSk7XHJcbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImFycm93RG93blwiKVxyXG4gICAgICAgICAgICBzZWxmLmNoYW5nZVllYXIoc2VsZi5jdXJyZW50WWVhciAtIDEpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdGltZVdyYXBwZXIoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaXNLZXlEb3duID0gZS50eXBlID09PSBcImtleWRvd25cIiwgaW5wdXQgPSBlLnRhcmdldDtcclxuICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQgJiYgZS50YXJnZXQgPT09IHNlbGYuYW1QTSlcclxuICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID1cclxuICAgICAgICAgICAgICAgIHNlbGYubDEwbi5hbVBNW3NlbGYuYW1QTS50ZXh0Q29udGVudCA9PT0gXCJBTVwiID8gMSA6IDBdO1xyXG4gICAgICAgIHZhciBtaW4gPSBOdW1iZXIoaW5wdXQubWluKSwgbWF4ID0gTnVtYmVyKGlucHV0Lm1heCksIHN0ZXAgPSBOdW1iZXIoaW5wdXQuc3RlcCksIGN1clZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsdWUsIDEwKSwgZGVsdGEgPSBlLmRlbHRhIHx8XHJcbiAgICAgICAgICAgIChpc0tleURvd25cclxuICAgICAgICAgICAgICAgID8gZS53aGljaCA9PT0gMzggPyAxIDogLTFcclxuICAgICAgICAgICAgICAgIDogTWF0aC5tYXgoLTEsIE1hdGgubWluKDEsIGUud2hlZWxEZWx0YSB8fCAtZS5kZWx0YVkpKSB8fCAwKTtcclxuICAgICAgICB2YXIgbmV3VmFsdWUgPSBjdXJWYWx1ZSArIHN0ZXAgKiBkZWx0YTtcclxuICAgICAgICBpZiAodHlwZW9mIGlucHV0LnZhbHVlICE9PSBcInVuZGVmaW5lZFwiICYmIGlucHV0LnZhbHVlLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICB2YXIgaXNIb3VyRWxlbSA9IGlucHV0ID09PSBzZWxmLmhvdXJFbGVtZW50LCBpc01pbnV0ZUVsZW0gPSBpbnB1dCA9PT0gc2VsZi5taW51dGVFbGVtZW50O1xyXG4gICAgICAgICAgICBpZiAobmV3VmFsdWUgPCBtaW4pIHtcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICBtYXggK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdWYWx1ZSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludCghaXNIb3VyRWxlbSkgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAoaW50KGlzSG91ckVsZW0pICYmIGludCghc2VsZi5hbVBNKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNNaW51dGVFbGVtKVxyXG4gICAgICAgICAgICAgICAgICAgIGluY3JlbWVudE51bUlucHV0KHVuZGVmaW5lZCwgLTEsIHNlbGYuaG91ckVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKG5ld1ZhbHVlID4gbWF4KSB7XHJcbiAgICAgICAgICAgICAgICBuZXdWYWx1ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQgPT09IHNlbGYuaG91ckVsZW1lbnQgPyBuZXdWYWx1ZSAtIG1heCAtIGludCghc2VsZi5hbVBNKSA6IG1pbjtcclxuICAgICAgICAgICAgICAgIGlmIChpc01pbnV0ZUVsZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50TnVtSW5wdXQodW5kZWZpbmVkLCAxLCBzZWxmLmhvdXJFbGVtZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5hbVBNICYmXHJcbiAgICAgICAgICAgICAgICBpc0hvdXJFbGVtICYmXHJcbiAgICAgICAgICAgICAgICAoc3RlcCA9PT0gMVxyXG4gICAgICAgICAgICAgICAgICAgID8gbmV3VmFsdWUgKyBjdXJWYWx1ZSA9PT0gMjNcclxuICAgICAgICAgICAgICAgICAgICA6IE1hdGguYWJzKG5ld1ZhbHVlIC0gY3VyVmFsdWUpID4gc3RlcCkpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPSBzZWxmLmFtUE0udGV4dENvbnRlbnQgPT09IFwiUE1cIiA/IFwiQU1cIiA6IFwiUE1cIjtcclxuICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBwYWQobmV3VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGluaXQoKTtcclxuICAgIHJldHVybiBzZWxmO1xyXG59XHJcbmZ1bmN0aW9uIF9mbGF0cGlja3Iobm9kZUxpc3QsIGNvbmZpZykge1xyXG4gICAgdmFyIG5vZGVzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobm9kZUxpc3QpO1xyXG4gICAgdmFyIGluc3RhbmNlcyA9IFtdO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2Rlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHZhciBub2RlID0gbm9kZXNbaV07XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKG5vZGUuZ2V0QXR0cmlidXRlKFwiZGF0YS1mcC1vbWl0XCIpICE9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChub2RlLl9mbGF0cGlja3IgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgbm9kZS5fZmxhdHBpY2tyLmRlc3Ryb3koKTtcclxuICAgICAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrciA9IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBub2RlLl9mbGF0cGlja3IgPSBGbGF0cGlja3JJbnN0YW5jZShub2RlLCBjb25maWcgfHwge30pO1xyXG4gICAgICAgICAgICBpbnN0YW5jZXMucHVzaChub2RlLl9mbGF0cGlja3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZSwgZS5zdGFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluc3RhbmNlcy5sZW5ndGggPT09IDEgPyBpbnN0YW5jZXNbMF0gOiBpbnN0YW5jZXM7XHJcbn1cclxuaWYgKHR5cGVvZiBIVE1MRWxlbWVudCAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgSFRNTENvbGxlY3Rpb24ucHJvdG90eXBlLmZsYXRwaWNrciA9IE5vZGVMaXN0LnByb3RvdHlwZS5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3IodGhpcywgY29uZmlnKTtcclxuICAgIH07XHJcbiAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKFt0aGlzXSwgY29uZmlnKTtcclxuICAgIH07XHJcbn1cclxudmFyIGZsYXRwaWNrcjtcclxuZmxhdHBpY2tyID0gZnVuY3Rpb24gKHNlbGVjdG9yLCBjb25maWcpIHtcclxuICAgIGlmIChzZWxlY3RvciBpbnN0YW5jZW9mIE5vZGVMaXN0KVxyXG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHNlbGVjdG9yLCBjb25maWcpO1xyXG4gICAgZWxzZSBpZiAodHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiKVxyXG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHdpbmRvdy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSwgY29uZmlnKTtcclxuICAgIHJldHVybiBfZmxhdHBpY2tyKFtzZWxlY3Rvcl0sIGNvbmZpZyk7XHJcbn07XHJcbndpbmRvdy5mbGF0cGlja3IgPSBmbGF0cGlja3I7XHJcbmZsYXRwaWNrci5kZWZhdWx0Q29uZmlnID0gZGVmYXVsdHM7XHJcbmZsYXRwaWNrci5sMTBucyA9IHtcclxuICAgIGVuOiBfX2Fzc2lnbih7fSwgZW5nbGlzaCksXHJcbiAgICBkZWZhdWx0OiBfX2Fzc2lnbih7fSwgZW5nbGlzaCksXHJcbn07XHJcbmZsYXRwaWNrci5sb2NhbGl6ZSA9IGZ1bmN0aW9uIChsMTBuKSB7XHJcbiAgICBmbGF0cGlja3IubDEwbnMuZGVmYXVsdCA9IF9fYXNzaWduKHt9LCBmbGF0cGlja3IubDEwbnMuZGVmYXVsdCwgbDEwbik7XHJcbn07XHJcbmZsYXRwaWNrci5zZXREZWZhdWx0cyA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnID0gX19hc3NpZ24oe30sIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnLCBjb25maWcpO1xyXG59O1xyXG5pZiAodHlwZW9mIGpRdWVyeSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgalF1ZXJ5LmZuLmZsYXRwaWNrciA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih0aGlzLCBjb25maWcpO1xyXG4gICAgfTtcclxufVxyXG5EYXRlLnByb3RvdHlwZS5mcF9pbmNyID0gZnVuY3Rpb24gKGRheXMpIHtcclxuICAgIHJldHVybiBuZXcgRGF0ZSh0aGlzLmdldEZ1bGxZZWFyKCksIHRoaXMuZ2V0TW9udGgoKSwgdGhpcy5nZXREYXRlKCkgKyAodHlwZW9mIGRheXMgPT09IFwic3RyaW5nXCIgPyBwYXJzZUludChkYXlzLCAxMCkgOiBkYXlzKSk7XHJcbn07XHJcbnZhciBmbGF0cGlja3IkMSA9IGZsYXRwaWNrcjtcblxucmV0dXJuIGZsYXRwaWNrciQxO1xuXG59KSkpO1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvZmxhdHBpY2tyLmpzXG4vLyBtb2R1bGUgaWQgPSAxMTE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZsYXRwaWNrclwiIH0sIFtcbiAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLXJpZ2h0XCIgfSwgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0IGNvbnRyb2xcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcInRleHRcIixcbiAgICAgICAgICBwbGFjZWhvbGRlcjogX3ZtLnBsYWNlaG9sZGVyLFxuICAgICAgICAgIGlkOiBcImRhdGUtaW5wdXQtXCIgKyBfdm0uX3VpZCxcbiAgICAgICAgICBuYW1lOiBfdm0ubmFtZSxcbiAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkXG4gICAgICAgIH0sXG4gICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0udmFsdWUgfVxuICAgICAgfSksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodFwiIH0sIFtcbiAgICAgICAgX3ZtLnRpbWVPbmx5XG4gICAgICAgICAgPyBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2xvY2tcIiB9KVxuICAgICAgICAgIDogX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWNhbGVuZGFyLWFsdFwiIH0pXG4gICAgICBdKVxuICAgIF0pXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTRkNDQzZmUyXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00ZDQ0M2ZlMlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Z1ZUZvcm1JbnB1dC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LWZkY2M3ZmRhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVnVlRm9ybUlucHV0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtSW5wdXQudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LWZkY2M3ZmRhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtZmRjYzdmZGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm1JbnB1dC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCI8dGVtcGxhdGU+XG5cbiAgICA8c3Bhbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWljb25zLXJpZ2h0JzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICB2LWlmPVwiZmllbGQubWV0YS5jb250ZW50ID09PSAndGV4dCdcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1kYW5nZXInOiBoYXNFcnJvciB9XCJcbiAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJmaWVsZC5tZXRhLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICBAa2V5ZG93bj1cIiRlbWl0KCd1cGRhdGUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImhhc0Vycm9yXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtaWNvbnMtcmlnaHQnOiBoYXNFcnJvciB9XCJcbiAgICAgICAgICAgIHYtaWY9XCJmaWVsZC5tZXRhLmNvbnRlbnQgPT09ICdlbWFpbCdcIj5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cImlucHV0XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1kYW5nZXInOiBoYXNFcnJvciB9XCJcbiAgICAgICAgICAgICAgICA6cmVhZG9ubHk9XCJmaWVsZC5tZXRhLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICBAa2V5ZG93bj1cIiRlbWl0KCd1cGRhdGUnKVwiXG4gICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJoYXNFcnJvclwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xcIlxuICAgICAgICAgICAgOmNsYXNzPVwieyAnaGFzLWljb25zLXJpZ2h0JzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICB2LWlmPVwiZmllbGQubWV0YS5jb250ZW50ID09PSAnbnVtYmVyJ1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWRhbmdlcic6IGhhc0Vycm9yIH1cIlxuICAgICAgICAgICAgICAgIDpyZWFkb25seT1cImZpZWxkLm1ldGEucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIEBrZXlkb3duPVwiJGVtaXQoJ3VwZGF0ZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgICAgICAgIDpzdGVwPVwiZmllbGQubWV0YS5zdGVwXCJcbiAgICAgICAgICAgICAgICA6bWluPVwiZmllbGQubWV0YS5taW5cIlxuICAgICAgICAgICAgICAgIDptYXg9XCJmaWVsZC5tZXRhLm1heFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImhhc0Vycm9yXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3BhbiB2LWlmPVwiZmllbGQubWV0YS5jb250ZW50ID09PSAnY2hlY2tib3gnXCI+XG4gICAgICAgICAgICA8dnVlLXN3aXRjaCB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIHNpemU9XCJpcy1sYXJnZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cImlzLXN1Y2Nlc3NcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWQgfHwgZmllbGQubWV0YS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJGVtaXQoJ3VwZGF0ZScpXCI+XG4gICAgICAgICAgICA8L3Z1ZS1zd2l0Y2g+XG4gICAgICAgIDwvc3Bhbj5cbiAgICA8L3NwYW4+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBWdWVTd2l0Y2ggZnJvbSAnLi9WdWVTd2l0Y2gudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHsgVnVlU3dpdGNoIH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICBmaWVsZDoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGhhc0Vycm9yOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm1JbnB1dC52dWUiLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdkZWZkNjUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZVN3aXRjaC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Z1ZVN3aXRjaC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTdkZWZkNjUyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVnVlU3dpdGNoLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03ZGVmZDY1MlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdkZWZkNjUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdkZWZkNjUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZVN3aXRjaC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjQzZTQ0MWQyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTdkZWZkNjUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Z1ZVN3aXRjaC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RlZmQ2NTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlU3dpdGNoLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03ZGVmZDY1MlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5maWVsZCAudnVlLXN3aXRjaCB7XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7XFxufVxcbi52dWUtc3dpdGNoIHtcXG4gIC0taGVpZ2h0OiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcXG4gIHdpZHRoOiBjYWxjKDEuNjI1ICogdmFyKC0taGVpZ2h0KSk7XFxuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXG4gIGRpc3BsYXk6IC1tcy1pbmxpbmUtZmxleGJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG4udnVlLXN3aXRjaCBpbnB1dCB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGRpc3BsYXk6IC13ZWJraXQtaW5saW5lLWJveDtcXG4gICAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuLnZ1ZS1zd2l0Y2g6YmVmb3JlLCAudnVlLXN3aXRjaDphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gMnB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjI1cztcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7XFxufVxcbi52dWUtc3dpdGNoOmJlZm9yZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEuNjI1ICogdmFyKC0taGVpZ2h0KSAtIDJweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XFxufVxcbi52dWUtc3dpdGNoOmFmdGVyIHtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0taGVpZ2h0KSAtIDJweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMTcsIDE3LCAxNywgMC4xKTtcXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxNywgMTcsIDE3LCAwLjEpO1xcbn1cXG4udnVlLXN3aXRjaC5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNGE0YTRhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xcbn1cXG4udnVlLXN3aXRjaC5jaGVja2VkOmJlZm9yZSB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcXG59XFxuLnZ1ZS1zd2l0Y2guY2hlY2tlZDphZnRlciB7XFxuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygwLjYyNSAqIHZhcigtLWhlaWdodCkpKTtcXG4gICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDAuNjI1ICogdmFyKC0taGVpZ2h0KSkpO1xcbn1cXG4udnVlLXN3aXRjaC5pcy13aGl0ZS5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxufVxcbi52dWUtc3dpdGNoLmlzLXdoaXRlLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtYmxhY2suY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzBhMGEwYTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzBhMGEwYTtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtYmxhY2suY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNGE0YTRhO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtbGlnaHQuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtbGlnaHQuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1kYXJrLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMzNjM2MzY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7XFxufVxcbi52dWUtc3dpdGNoLmlzLWRhcmsuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNzU3NTc1O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM3NTc1NzU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtcHJpbWFyeS5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMDBkMWIyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBkMWIyO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1wcmltYXJ5LmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzUyZmZlNTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJmZmU1O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLWxpbmsuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzMyNzNkYztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYztcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtbGluay5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM5ZmJlZWY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlmYmVlZjtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1pbmZvLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMyMDljZWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDljZWU7XFxufVxcbi52dWUtc3dpdGNoLmlzLWluZm8uY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjOTdkMWY3O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM5N2QxZjc7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtc3VjY2Vzcy5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMjNkMTYwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjNkMTYwO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1zdWNjZXNzLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzg5ZWJhYjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODllYmFiO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLXdhcm5pbmcuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZGQ1NztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQ1NztcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtd2FybmluZy5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICNmZmY3ZDY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdkNjtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1kYW5nZXIuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmMzg2MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzg2MDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtZGFuZ2VyLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZmYjhjNjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZiOGM2O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLXNtYWxsIHtcXG4gICAgLS1oZWlnaHQ6IDAuNzVyZW07XFxufVxcbi52dWUtc3dpdGNoLmlzLW1lZGl1bSB7XFxuICAgIC0taGVpZ2h0OiAxLjI1cmVtO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1sYXJnZSB7XFxuICAgIC0taGVpZ2h0OiAxLjVyZW07XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtDQUFFO0FBRXZCO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQiw2QkFBNkI7RUFDN0IsbUNBQW1DO0VBQ25DLHNCQUFzQjtFQUN0QiwwQkFBMEI7RUFDMUIsMEJBQTBCO0VBQzFCLGdCQUFnQjtFQUNoQiw0QkFBcUI7RUFBckIsNEJBQXFCO0VBQXJCLHFCQUFxQjtFQUNyQix1QkFBdUI7RUFDdkIsMEJBQW9CO01BQXBCLHVCQUFvQjtVQUFwQixvQkFBb0I7RUFDcEIseUJBQXdCO01BQXhCLHNCQUF3QjtVQUF4Qix3QkFBd0I7Q0FBRTtBQUMxQjtJQUNFLFdBQVc7SUFDWCw0QkFBcUI7SUFBckIsNEJBQXFCO0lBQXJCLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtDQUFFO0FBQ2pCO0lBQ0UsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixPQUFPO0lBQ1AsUUFBUTtJQUNSLGtDQUFrQztJQUNsQyw2QkFBNkI7SUFDN0IsMEJBQWtCO0lBQWxCLGtCQUFrQjtDQUFFO0FBQ3RCO0lBQ0UseUNBQXlDO0lBQ3pDLDBCQUEwQjtDQUFFO0FBQzlCO0lBQ0UsaUNBQWlDO0lBQ2pDLHVCQUF1QjtJQUN2QixvREFBNEM7WUFBNUMsNENBQTRDO0NBQUU7QUFDaEQ7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSw0QkFBb0I7Y0FBcEIsb0JBQW9CO0NBQUU7QUFDeEI7TUFDRSwyREFBbUQ7Y0FBbkQsbURBQW1EO0NBQUU7QUFDekQ7SUFDRSxvQkFBb0I7SUFDcEIsd0JBQXdCO0NBQUU7QUFDMUI7TUFDRSxvQkFBb0I7TUFDcEIsd0JBQXdCO01BQ3hCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHlCQUF5QjtJQUN6Qiw2QkFBNkI7Q0FBRTtBQUMvQjtNQUNFLG9CQUFvQjtNQUNwQix3QkFBd0I7TUFDeEIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usa0JBQWtCO0NBQUU7QUFDdEI7SUFDRSxrQkFBa0I7Q0FBRTtBQUN0QjtJQUNFLGlCQUFpQjtDQUFFXCIsXCJmaWxlXCI6XCJWdWVTd2l0Y2gudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5maWVsZCAudnVlLXN3aXRjaCB7XFxuICBtYXJnaW4tdG9wOiA2cHg7XFxuICBtYXJnaW4tYm90dG9tOiA2cHg7IH1cXG5cXG4udnVlLXN3aXRjaCB7XFxuICAtLWhlaWdodDogMXJlbTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XFxuICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkpO1xcbiAgaGVpZ2h0OiB2YXIoLS1oZWlnaHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkYmRiZGI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IH1cXG4gIC52dWUtc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7IH1cXG4gIC52dWUtc3dpdGNoOmJlZm9yZSwgLnZ1ZS1zd2l0Y2g6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnICc7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAtIDJweCk7XFxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XFxuICAgIHRyYW5zaXRpb246IDAuMjVzOyB9XFxuICAudnVlLXN3aXRjaDpiZWZvcmUge1xcbiAgICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkgLSAycHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiOyB9XFxuICAudnVlLXN3aXRjaDphZnRlciB7XFxuICAgIHdpZHRoOiBjYWxjKHZhcigtLWhlaWdodCkgLSAycHgpO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxNywgMTcsIDE3LCAwLjEpOyB9XFxuICAudnVlLXN3aXRjaC5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjNGE0YTRhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhOyB9XFxuICAgIC52dWUtc3dpdGNoLmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApOyB9XFxuICAgIC52dWUtc3dpdGNoLmNoZWNrZWQ6YWZ0ZXIge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDAuNjI1ICogdmFyKC0taGVpZ2h0KSkpOyB9XFxuICAudnVlLXN3aXRjaC5pcy13aGl0ZS5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guaXMtd2hpdGUuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAudnVlLXN3aXRjaC5pcy1ibGFjay5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGEwYTBhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLWJsYWNrLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzRhNGE0YTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGE0YTRhO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLWxpZ2h0LmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlc21va2U7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlc21va2U7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guaXMtbGlnaHQuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAudnVlLXN3aXRjaC5pcy1kYXJrLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMzNjM2MzY7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzNjM2MzY7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guaXMtZGFyay5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM3NTc1NzU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAudnVlLXN3aXRjaC5pcy1wcmltYXJ5LmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMwMGQxYjI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGQxYjI7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guaXMtcHJpbWFyeS5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM1MmZmZTU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzUyZmZlNTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAudnVlLXN3aXRjaC5pcy1saW5rLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMzMjczZGM7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjczZGM7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guaXMtbGluay5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM5ZmJlZWY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzlmYmVlZjtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAudnVlLXN3aXRjaC5pcy1pbmZvLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMyMDljZWU7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDljZWU7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guaXMtaW5mby5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM5N2QxZjc7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk3ZDFmNztcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAudnVlLXN3aXRjaC5pcy1zdWNjZXNzLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMyM2QxNjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2QxNjA7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guaXMtc3VjY2Vzcy5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM4OWViYWI7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzg5ZWJhYjtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAudnVlLXN3aXRjaC5pcy13YXJuaW5nLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICNmZmRkNTc7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmRkNTc7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guaXMtd2FybmluZy5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICNmZmY3ZDY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjdkNjtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAudnVlLXN3aXRjaC5pcy1kYW5nZXIuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmMzg2MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmMzg2MDsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1kYW5nZXIuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZiOGM2O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmI4YzY7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtc21hbGwge1xcbiAgICAtLWhlaWdodDogMC43NXJlbTsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtbWVkaXVtIHtcXG4gICAgLS1oZWlnaHQ6IDEuMjVyZW07IH1cXG4gIC52dWUtc3dpdGNoLmlzLWxhcmdlIHtcXG4gICAgLS1oZWlnaHQ6IDEuNXJlbTsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03ZGVmZDY1MlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiPHRlbXBsYXRlPlxuXG4gICAgPGxhYmVsIGNsYXNzPVwidnVlLXN3aXRjaFwiIDpjbGFzcz1cIltzaXplLCB0eXBlLCB7ICdjaGVja2VkJzogdmFsdWUsICdkaXNhYmxlZCc6IGRpc2FibGVkIH1dXCI+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIlxuICAgICAgICAgICAgY2xhc3M9XCJjaGVja2JveFwiXG4gICAgICAgICAgICB2LW1vZGVsPVwiY2hlY2tlZFwiXG4gICAgICAgICAgICBAY2hhbmdlPVwiJGVtaXQoJ2lucHV0JywgY2hlY2tlZClcIlxuICAgICAgICAgICAgOmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuICAgICAgICAgICAgOnJlcXVpcmVkPVwicmVxdWlyZWRcIlxuICAgICAgICAgICAgOmNoZWNrZWQ9XCJ2YWx1ZVwiPlxuICAgIDwvbGFiZWw+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmNvbnN0IHNpemVzID0gWydpcy1zbWFsbCcsICdpcy1tZWRpdW0nLCAnaXMtbGFyZ2UnXTtcbmNvbnN0IHR5cGVzID0gWydpcy1wcmltYXJ5JywgJ2lzLXdhcm5pbmcnLCAnaXMtZGFuZ2VyJywgJ2lzLXN1Y2Nlc3MnLCAnaXMtaW5mbyddO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1Z1ZVN3aXRjaCcsXG5cbiAgICBwcm9wczoge1xuICAgICAgICBkaXNhYmxlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlZDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB0eXBlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB2YWx1ZSA9PiB0eXBlcy5pbmNsdWRlcyh2YWx1ZSksXG4gICAgICAgIH0sXG4gICAgICAgIHNpemU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB2YWxpZGF0b3I6IHZhbHVlID0+IHNpemVzLmluY2x1ZGVzKHZhbHVlKSxcbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmFsdWUodmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuY2hlY2tlZCA9IHZhbHVlO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY2hlY2tlZDogdGhpcy52YWx1ZSxcbiAgICAgICAgfTtcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiPlxuXG5AaW1wb3J0ICd+YnVsbWEvc2Fzcy91dGlsaXRpZXMvaW5pdGlhbC12YXJpYWJsZXMnO1xuQGltcG9ydCAnfmJ1bG1hL3Nhc3MvdXRpbGl0aWVzL2Rlcml2ZWQtdmFyaWFibGVzLnNhc3MnO1xuXG4uZmllbGQge1xuICAgIC52dWUtc3dpdGNoIHtcbiAgICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgfVxufVxuXG4udnVlLXN3aXRjaCB7XG4gICAgLS1oZWlnaHQ6ICRzaXplLW5vcm1hbDtcblxuICAgIGlucHV0IHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XG4gICAgd2lkdGg6IGNhbGMoMS42MjUgKiB2YXIoLS1oZWlnaHQpKTtcbiAgICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJvcmRlcjtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAkYm9yZGVyO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAmOmJlZm9yZSxcbiAgICAmOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyAnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodCkgLSAycHgpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjI1cztcbiAgICB9XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiBjYWxjKDEuNjI1ICogdmFyKC0taGVpZ2h0KSAtIDJweCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRncmV5LWxpZ2h0ZXI7XG4gICAgfVxuXG4gICAgJjphZnRlciB7XG4gICAgICAgIHdpZHRoOiBjYWxjKHZhcigtLWhlaWdodCkgLSAycHgpO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICBib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxNywgMTcsIDE3LCAwLjEpO1xuICAgIH1cblxuICAgICYuY2hlY2tlZCB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogJHRleHQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR0ZXh0O1xuICAgICAgICAmOmJlZm9yZSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICB9XG4gICAgICAgICY6YWZ0ZXIge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMC42MjUgKiB2YXIoLS1oZWlnaHQpKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAZWFjaCAkbmFtZSwgJHBhaXIgaW4gJGNvbG9ycyB7XG4gICAgICAgICRjb2xvcjogbnRoKCRwYWlyLCAxKTtcbiAgICAgICAgJi5pcy0jeyRuYW1lfSB7XG4gICAgICAgICAgICAmLmNoZWNrZWQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogJGNvbG9yO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRjb2xvcjtcblxuICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLCAyNSUpO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRjb2xvciwgMjUlKTtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmlzLXNtYWxsIHtcbiAgICAgICAgLS1oZWlnaHQ6ICRzaXplLXNtYWxsO1xuICAgIH1cbiAgICAmLmlzLW1lZGl1bSB7XG4gICAgICAgIC0taGVpZ2h0OiAkc2l6ZS1tZWRpdW07XG4gICAgfVxuICAgICYuaXMtbGFyZ2Uge1xuICAgICAgICAtLWhlaWdodDogJHNpemUtbGFyZ2U7XG4gICAgfVxufVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwibGFiZWxcIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJ2dWUtc3dpdGNoXCIsXG4gICAgICBjbGFzczogW1xuICAgICAgICBfdm0uc2l6ZSxcbiAgICAgICAgX3ZtLnR5cGUsXG4gICAgICAgIHsgY2hlY2tlZDogX3ZtLnZhbHVlLCBkaXNhYmxlZDogX3ZtLmRpc2FibGVkIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmNoZWNrZWQsXG4gICAgICAgICAgICBleHByZXNzaW9uOiBcImNoZWNrZWRcIlxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiY2hlY2tib3hcIixcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICB0eXBlOiBcImNoZWNrYm94XCIsXG4gICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZCxcbiAgICAgICAgICByZXF1aXJlZDogX3ZtLnJlcXVpcmVkXG4gICAgICAgIH0sXG4gICAgICAgIGRvbVByb3BzOiB7XG4gICAgICAgICAgY2hlY2tlZDogX3ZtLnZhbHVlLFxuICAgICAgICAgIGNoZWNrZWQ6IEFycmF5LmlzQXJyYXkoX3ZtLmNoZWNrZWQpXG4gICAgICAgICAgICA/IF92bS5faShfdm0uY2hlY2tlZCwgbnVsbCkgPiAtMVxuICAgICAgICAgICAgOiBfdm0uY2hlY2tlZFxuICAgICAgICB9LFxuICAgICAgICBvbjoge1xuICAgICAgICAgIGNoYW5nZTogW1xuICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIHZhciAkJGEgPSBfdm0uY2hlY2tlZCxcbiAgICAgICAgICAgICAgICAkJGVsID0gJGV2ZW50LnRhcmdldCxcbiAgICAgICAgICAgICAgICAkJGMgPSAkJGVsLmNoZWNrZWQgPyB0cnVlIDogZmFsc2VcbiAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoJCRhKSkge1xuICAgICAgICAgICAgICAgIHZhciAkJHYgPSBudWxsLFxuICAgICAgICAgICAgICAgICAgJCRpID0gX3ZtLl9pKCQkYSwgJCR2KVxuICAgICAgICAgICAgICAgIGlmICgkJGVsLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICQkaSA8IDAgJiYgKF92bS5jaGVja2VkID0gJCRhLmNvbmNhdChbJCR2XSkpXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICQkaSA+IC0xICYmXG4gICAgICAgICAgICAgICAgICAgIChfdm0uY2hlY2tlZCA9ICQkYS5zbGljZSgwLCAkJGkpLmNvbmNhdCgkJGEuc2xpY2UoJCRpICsgMSkpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBfdm0uY2hlY2tlZCA9ICQkY1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS4kZW1pdChcImlucHV0XCIsIF92bS5jaGVja2VkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2RlZmQ2NTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdkZWZkNjUyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEyN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJzcGFuXCIsIFtcbiAgICBfdm0uZmllbGQubWV0YS5jb250ZW50ID09PSBcInRleHRcIlxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IFwiaGFzLWljb25zLXJpZ2h0XCI6IF92bS5oYXNFcnJvciB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1kYW5nZXJcIjogX3ZtLmhhc0Vycm9yIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5maWVsZC5tZXRhLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJ1cGRhdGVcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWVsZCwgXCJ2YWx1ZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmhhc0Vycm9yXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiIH0pXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5maWVsZC5tZXRhLmNvbnRlbnQgPT09IFwiZW1haWxcIlxuICAgICAgPyBfYyhcbiAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbnRyb2xcIixcbiAgICAgICAgICAgIGNsYXNzOiB7IFwiaGFzLWljb25zLXJpZ2h0XCI6IF92bS5oYXNFcnJvciB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgZGlyZWN0aXZlczogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHJhd05hbWU6IFwidi1tb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1kYW5nZXJcIjogX3ZtLmhhc0Vycm9yIH0sXG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgcmVhZG9ubHk6IF92bS5maWVsZC5tZXRhLnJlYWRvbmx5LFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiZW1haWxcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmZpZWxkLm1ldGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS5maWVsZC52YWx1ZSB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGtleWRvd246IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwidXBkYXRlXCIpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmllbGQsIFwidmFsdWVcIiwgJGV2ZW50LnRhcmdldC52YWx1ZSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5oYXNFcnJvclxuICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXCIgfSxcbiAgICAgICAgICAgICAgICAgIFtfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIiB9KV1cbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICBdXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKCksXG4gICAgX3ZtLl92KFwiIFwiKSxcbiAgICBfdm0uZmllbGQubWV0YS5jb250ZW50ID09PSBcIm51bWJlclwiXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJoYXMtaWNvbnMtcmlnaHRcIjogX3ZtLmhhc0Vycm9yIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWRhbmdlclwiOiBfdm0uaGFzRXJyb3IgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLmZpZWxkLm1ldGEucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJudW1iZXJcIixcbiAgICAgICAgICAgICAgICBzdGVwOiBfdm0uZmllbGQubWV0YS5zdGVwLFxuICAgICAgICAgICAgICAgIG1pbjogX3ZtLmZpZWxkLm1ldGEubWluLFxuICAgICAgICAgICAgICAgIG1heDogX3ZtLmZpZWxkLm1ldGEubWF4LFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJ1cGRhdGVcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWVsZCwgXCJ2YWx1ZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmhhc0Vycm9yXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiIH0pXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5maWVsZC5tZXRhLmNvbnRlbnQgPT09IFwiY2hlY2tib3hcIlxuICAgICAgPyBfYyhcbiAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcInZ1ZS1zd2l0Y2hcIiwge1xuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHNpemU6IFwiaXMtbGFyZ2VcIixcbiAgICAgICAgICAgICAgICB0eXBlOiBcImlzLXN1Y2Nlc3NcIixcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmZpZWxkLm1ldGEuZGlzYWJsZWQgfHwgX3ZtLmZpZWxkLm1ldGEucmVhZG9ubHlcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJ1cGRhdGVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF92bS5maWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJHNldChfdm0uZmllbGQsIFwidmFsdWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgXSxcbiAgICAgICAgICAxXG4gICAgICAgIClcbiAgICAgIDogX3ZtLl9lKClcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtZmRjYzdmZGFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LWZkY2M3ZmRhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJkaXZcIixcbiAgICBbXG4gICAgICBfdm0uZGF0YS5pY29uIHx8IF92bS5kYXRhLnRpdGxlXG4gICAgICAgID8gX2MoXCJoNVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTVcIiB9LCBbXG4gICAgICAgICAgICBfdm0uZGF0YS5pY29uXG4gICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IGNsYXNzOiBfdm0uZGF0YS5pY29uIH0pXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uZGF0YS50aXRsZVxuICAgICAgICAgICAgICA/IF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgXCIgKyBfdm0uX3MoX3ZtLmRhdGEudGl0bGUpICsgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImhyXCIpXG4gICAgICAgICAgXSlcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJmb3JtXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJ2dWUtZm9ybVwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICBfdm0uc3VibWl0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIFtcbiAgICAgICAgICBfYyhcbiAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtbXVsdGlsaW5lXCIgfSxcbiAgICAgICAgICAgIF92bS5fbChfdm0uZGF0YS5maWVsZHMsIGZ1bmN0aW9uKGZpZWxkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAhZmllbGQubWV0YS5oaWRkZW5cbiAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiBmaWVsZC5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImNvbHVtblwiLFxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uY29sdW1uU2l6ZVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWVsZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGFiZWxcIiwgeyBzdGF0aWNDbGFzczogXCJsYWJlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhmaWVsZC5sYWJlbCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5oYXMoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInBcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImhlbHAgaXMtZGFuZ2VyIGlzLXB1bGxlZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uZXJyb3JzLmdldChmaWVsZC5uYW1lKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YS5jdXN0b21cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoZmllbGQubmFtZSwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnM6IF92bS5lcnJvcnNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGEudHlwZSA9PT0gXCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcInZ1ZS1mb3JtLWlucHV0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZDogZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmVycm9ycy5oYXMoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGU6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhLnR5cGUgPT09IFwic2VsZWN0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidnVlLXNlbGVjdFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJoYXMtZXJyb3JcIjogX3ZtLmVycm9ycy5oYXMoZmllbGQubmFtZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogZmllbGQubWV0YS5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia2V5LW1hcFwiOiBmaWVsZC5tZXRhLmtleU1hcCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzb3VyY2U6IGZpZWxkLm1ldGEuc291cmNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG11bHRpcGxlOiBmaWVsZC5tZXRhLm11bHRpcGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmaWVsZC5tZXRhLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyOiBmaWVsZC5tZXRhLnBsYWNlaG9sZGVyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoZmllbGQsIFwidmFsdWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YS50eXBlID09PSBcImRhdGVwaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkYXRlcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGZpZWxkLm1ldGEuZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWU6IGZpZWxkLm1ldGEudGltZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KGZpZWxkLCBcInZhbHVlXCIsICQkdilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGEudHlwZSA9PT0gXCJ0aW1lcGlja2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGF0ZXBpY2tlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBmaWVsZC5tZXRhLmZvcm1hdCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRpbWUtb25seVwiOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmaWVsZC5tZXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoZmllbGQsIFwidmFsdWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YS50eXBlID09PSBcInRleHRhcmVhXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJ0ZXh0YXJlYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGV4dGFyZWFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtZGFuZ2VyXCI6IF92bS5lcnJvcnMuaGFzKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJvd3M6IGZpZWxkLm1ldGEucm93cyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZpZWxkLm1ldGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogZmllbGQudmFsdWUgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidmFsdWVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3lcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5kYXRhLmFjdGlvbnMuZGVzdHJveS5mb3JiaWRkZW4gfSxcbiAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQucHJldmVudERlZmF1bHQoKVxuICAgICAgICAgICAgICAgICAgICAgIF92bS5zaG93TW9kYWwgPSB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9fKF92bS5kYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24ubGFiZWwpKVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5pY29uIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5kYXRhLmFjdGlvbnMuY3JlYXRlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgZGlzYWJsZWQ6IF92bS5kYXRhLmFjdGlvbnMuY3JlYXRlLmZvcmJpZGRlbiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLmNyZWF0ZSgpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9fKF92bS5kYXRhLmFjdGlvbnMuY3JlYXRlLmJ1dHRvbi5sYWJlbCkpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5kYXRhLmFjdGlvbnMuY3JlYXRlLmJ1dHRvbi5pY29uIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5kYXRhLmFjdGlvbnMuc3RvcmVcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHVsbGVkLXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBfdm0uZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5jbGFzcyxcbiAgICAgICAgICAgICAgICAgICAgeyBcImlzLWxvYWRpbmdcIjogX3ZtLmxvYWRpbmcgfVxuICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IFwic3VibWl0XCIsXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGF0YS5hY3Rpb25zLnN0b3JlLmZvcmJpZGRlblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX18oX3ZtLmRhdGEuYWN0aW9ucy5zdG9yZS5idXR0b24ubGFiZWwpKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IGNsYXNzOiBfdm0uZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5pY29uIH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5kYXRhLmFjdGlvbnMudXBkYXRlXG4gICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYnV0dG9uIGlzLXB1bGxlZC1yaWdodFwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgICB7IFwiaXMtbG9hZGluZ1wiOiBfdm0ubG9hZGluZyB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kYXRhLmFjdGlvbnMudXBkYXRlLmZvcmJpZGRlblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX18oX3ZtLmRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmxhYmVsKSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmljb24gfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpcy1jbGVhcmZpeFwiIH0pXG4gICAgICAgIF1cbiAgICAgICksXG4gICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgX3ZtLmRhdGEuYWN0aW9ucy5kZXN0cm95XG4gICAgICAgID8gX2MoXCJtb2RhbFwiLCB7XG4gICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICBzaG93OiBfdm0uc2hvd01vZGFsLFxuICAgICAgICAgICAgICBfXzogX3ZtLl9fLFxuICAgICAgICAgICAgICBtZXNzYWdlOiBfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLm1lc3NhZ2VcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICBcImNhbmNlbC1hY3Rpb25cIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgX3ZtLnNob3dNb2RhbCA9IGZhbHNlXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIFwiY29tbWl0LWFjdGlvblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uZGVzdHJveSgpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICA6IF92bS5fZSgpXG4gICAgXSxcbiAgICAxXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMWI1MmU5MjdcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTFiNTJlOTI3XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1jZW50ZXJlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLXRocmVlLXF1YXJ0ZXJzXCI+XG4gICAgICAgICAgICA8dnVlLWZvcm0gOmRhdGE9XCJmb3JtXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJveCBhbmltYXRlZCBmYWRlSW5cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJpbml0aWFsaXNlZFwiPlxuICAgICAgICAgICAgPC92dWUtZm9ybT5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBWdWVGb3JtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZSc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7IFZ1ZUZvcm0gfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0aWFsaXNlZDogZmFsc2UsXG4gICAgICAgICAgICBmb3JtOiB7fSxcbiAgICAgICAgICAgIHJvbGU6IHt9LFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBjcmVhdGVkKCkge1xuICAgICAgICBheGlvcy5nZXQocm91dGUodGhpcy4kcm91dGUubmFtZSwgdGhpcy4kcm91dGUucGFyYW1zLmlkLCBmYWxzZSkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcm0gPSByZXNwb25zZS5kYXRhLmZvcm07XG4gICAgICAgICAgICB0aGlzLnJvbGUgPSByZXNwb25zZS5kYXRhLnJvbGU7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9FZGl0LnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLWNlbnRlcmVkXCIgfSwgW1xuICAgIF9jKFxuICAgICAgXCJkaXZcIixcbiAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLXRocmVlLXF1YXJ0ZXJzXCIgfSxcbiAgICAgIFtcbiAgICAgICAgX3ZtLmluaXRpYWxpc2VkXG4gICAgICAgICAgPyBfYyhcInZ1ZS1mb3JtXCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiYm94IGFuaW1hdGVkIGZhZGVJblwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBkYXRhOiBfdm0uZm9ybSB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgIF0sXG4gICAgICAxXG4gICAgKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1iMWE5MzA2MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtYjFhOTMwNjJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9yb2xlcy9FZGl0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTU0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDE0Il0sInNvdXJjZVJvb3QiOiIifQ==