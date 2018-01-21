webpackJsonp([24],{

/***/ 1076:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1522)
/* template */
var __vue_template__ = __webpack_require__(1523)
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
Component.options.__file = "resources/assets/js/pages/system/menus/Create.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6864f9ea", Component.options)
  } else {
    hotAPI.reload("data-v-6864f9ea", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1095:
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMultiselect=t():e.VueMultiselect=t()}(this,function(){return function(e){function t(n){if(i[n])return i[n].exports;var s=i[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,t),s.l=!0,s.exports}var i={};return t.m=e,t.c=i,t.i=function(e){return e},t.d=function(e,i,n){t.o(e,i)||Object.defineProperty(e,i,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var i=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(i,"a",i),i},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(e,t,i){"use strict";function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e){return 0!==e&&(!(!Array.isArray(e)||0!==e.length)||!e)}function o(e,t){return void 0===e&&(e="undefined"),null===e&&(e="null"),!1===e&&(e="false"),-1!==e.toString().toLowerCase().indexOf(t.trim())}function l(e,t,i,n){return e.filter(function(e){return o(n(e,i),t)})}function r(e){return e.filter(function(e){return!e.$isLabel})}function a(e,t){return function(i){return i.reduce(function(i,n){return n[e]&&n[e].length?(i.push({$groupLabel:n[t],$isLabel:!0}),i.concat(n[e])):i},[])}}function u(e,t,i,s,o){return function(r){return r.map(function(r){var a;if(!r[i])return console.warn("Options passed to vue-multiselect do not contain groups, despite the config."),[];var u=l(r[i],e,t,o);return u.length?(a={},n(a,s,r[s]),n(a,i,u),a):[]})}}Object.defineProperty(t,"__esModule",{value:!0});var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h=i(2),p=function(e){return e&&e.__esModule?e:{default:e}}(h),d=function(){for(var e=arguments.length,t=Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(e){return t.reduce(function(e,t){return t(e)},e)}};t.default={data:function(){return{search:"",isOpen:!1,prefferedOpenDirection:"below",optimizedHeight:this.maxHeight,internalValue:this.value||0===this.value?(0,p.default)(Array.isArray(this.value)?this.value:[this.value]):[]}},props:{internalSearch:{type:Boolean,default:!0},options:{type:Array,required:!0},multiple:{type:Boolean,default:!1},value:{type:null,default:function(){return[]}},trackBy:{type:String},label:{type:String},searchable:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!0},hideSelected:{type:Boolean,default:!1},placeholder:{type:String,default:"Select option"},allowEmpty:{type:Boolean,default:!0},resetAfter:{type:Boolean,default:!1},closeOnSelect:{type:Boolean,default:!0},customLabel:{type:Function,default:function(e,t){return s(e)?"":t?e[t]:e}},taggable:{type:Boolean,default:!1},tagPlaceholder:{type:String,default:"Press enter to create a tag"},tagPosition:{type:String,default:"top"},max:{type:[Number,Boolean],default:!1},id:{default:null},optionsLimit:{type:Number,default:1e3},groupValues:{type:String},groupLabel:{type:String},blockKeys:{type:Array,default:function(){return[]}},preserveSearch:{type:Boolean,default:!1}},mounted:function(){this.multiple||this.clearOnSelect||console.warn("[Vue-Multiselect warn]: ClearOnSelect and Multiple props can’t be both set to false."),!this.multiple&&this.max&&console.warn("[Vue-Multiselect warn]: Max prop should not be used when prop Multiple equals false.")},computed:{filteredOptions:function(){var e=this.search||"",t=e.toLowerCase().trim(),i=this.options.concat();return i=this.internalSearch?this.groupValues?this.filterAndFlat(i,t,this.label):l(i,t,this.label,this.customLabel):this.groupValues?a(this.groupValues,this.groupLabel)(i):i,i=this.hideSelected?i.filter(this.isNotSelected):i,this.taggable&&t.length&&!this.isExistingOption(t)&&("bottom"===this.tagPosition?i.push({isTag:!0,label:e}):i.unshift({isTag:!0,label:e})),i.slice(0,this.optionsLimit)},valueKeys:function(){var e=this;return this.trackBy?this.internalValue.map(function(t){return t[e.trackBy]}):this.internalValue},optionKeys:function(){var e=this;return(this.groupValues?this.flatAndStrip(this.options):this.options).map(function(t){return e.customLabel(t,e.label).toString().toLowerCase()})},currentOptionLabel:function(){return this.multiple?this.searchable?"":this.placeholder:this.internalValue.length?this.getOptionLabel(this.internalValue[0]):this.searchable?"":this.placeholder}},watch:{internalValue:function(e,t){this.resetAfter&&this.internalValue.length&&(this.search="",this.internalValue=[])},search:function(){this.$emit("search-change",this.search,this.id)},value:function(e){this.internalValue=this.getInternalValue(e)}},methods:{getValue:function(){return this.multiple?(0,p.default)(this.internalValue):0===this.internalValue.length?null:(0,p.default)(this.internalValue[0])},getInternalValue:function(e){return null===e||void 0===e?[]:this.multiple?(0,p.default)(e):(0,p.default)([e])},filterAndFlat:function(e,t,i){return d(u(t,i,this.groupValues,this.groupLabel,this.customLabel),a(this.groupValues,this.groupLabel))(e)},flatAndStrip:function(e){return d(a(this.groupValues,this.groupLabel),r)(e)},updateSearch:function(e){this.search=e},isExistingOption:function(e){return!!this.options&&this.optionKeys.indexOf(e)>-1},isSelected:function(e){var t=this.trackBy?e[this.trackBy]:e;return this.valueKeys.indexOf(t)>-1},isNotSelected:function(e){return!this.isSelected(e)},getOptionLabel:function(e){if(s(e))return"";if(e.isTag)return e.label;if(e.$isLabel)return e.$groupLabel;var t=this.customLabel(e,this.label);return s(t)?"":t},select:function(e,t){if(!(-1!==this.blockKeys.indexOf(t)||this.disabled||e.$isLabel||e.$isDisabled)&&(!this.max||!this.multiple||this.internalValue.length!==this.max)&&("Tab"!==t||this.pointerDirty)){if(e.isTag)this.$emit("tag",e.label,this.id),this.search="",this.closeOnSelect&&!this.multiple&&this.deactivate();else{if(this.isSelected(e))return void("Tab"!==t&&this.removeElement(e));this.multiple?this.internalValue.push(e):this.internalValue=[e],this.$emit("select",(0,p.default)(e),this.id),this.$emit("input",this.getValue(),this.id),this.clearOnSelect&&(this.search="")}this.closeOnSelect&&this.deactivate()}},removeElement:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(!this.disabled){if(!this.allowEmpty&&this.internalValue.length<=1)return void this.deactivate();var i="object"===(void 0===e?"undefined":c(e))?this.valueKeys.indexOf(e[this.trackBy]):this.valueKeys.indexOf(e);this.internalValue.splice(i,1),this.$emit("input",this.getValue(),this.id),this.$emit("remove",(0,p.default)(e),this.id),this.closeOnSelect&&t&&this.deactivate()}},removeLastElement:function(){-1===this.blockKeys.indexOf("Delete")&&0===this.search.length&&Array.isArray(this.internalValue)&&this.removeElement(this.internalValue[this.internalValue.length-1],!1)},activate:function(){var e=this;this.isOpen||this.disabled||(this.adjustPosition(),this.groupValues&&0===this.pointer&&this.filteredOptions.length&&(this.pointer=1),this.isOpen=!0,this.searchable?(this.preserveSearch||(this.search=""),this.$nextTick(function(){return e.$refs.search.focus()})):this.$el.focus(),this.$emit("open",this.id))},deactivate:function(){this.isOpen&&(this.isOpen=!1,this.searchable?this.$refs.search.blur():this.$el.blur(),this.preserveSearch||(this.search=""),this.$emit("close",this.getValue(),this.id))},toggle:function(){this.isOpen?this.deactivate():this.activate()},adjustPosition:function(){if("undefined"!=typeof window){var e=this.$el.getBoundingClientRect().top,t=window.innerHeight-this.$el.getBoundingClientRect().bottom;t>this.maxHeight||t>e||"below"===this.openDirection||"bottom"===this.openDirection?(this.prefferedOpenDirection="below",this.optimizedHeight=Math.min(t-40,this.maxHeight)):(this.prefferedOpenDirection="above",this.optimizedHeight=Math.min(e-40,this.maxHeight))}}}}},function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{pointer:0,pointerDirty:!1}},props:{showPointer:{type:Boolean,default:!0},optionHeight:{type:Number,default:40}},computed:{pointerPosition:function(){return this.pointer*this.optionHeight},visibleElements:function(){return this.optimizedHeight/this.optionHeight}},watch:{filteredOptions:function(){this.pointerAdjust()},isOpen:function(){this.pointerDirty=!1}},methods:{optionHighlight:function(e,t){return{"multiselect__option--highlight":e===this.pointer&&this.showPointer,"multiselect__option--selected":this.isSelected(t)}},addPointerElement:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Enter",t=e.key;this.filteredOptions.length>0&&this.select(this.filteredOptions[this.pointer],t),this.pointerReset()},pointerForward:function(){this.pointer<this.filteredOptions.length-1&&(this.pointer++,this.$refs.list.scrollTop<=this.pointerPosition-(this.visibleElements-1)*this.optionHeight&&(this.$refs.list.scrollTop=this.pointerPosition-(this.visibleElements-1)*this.optionHeight),this.filteredOptions[this.pointer].$isLabel&&this.pointerForward()),this.pointerDirty=!0},pointerBackward:function(){this.pointer>0?(this.pointer--,this.$refs.list.scrollTop>=this.pointerPosition&&(this.$refs.list.scrollTop=this.pointerPosition),this.filteredOptions[this.pointer].$isLabel&&this.pointerBackward()):this.filteredOptions[0].$isLabel&&this.pointerForward(),this.pointerDirty=!0},pointerReset:function(){this.closeOnSelect&&(this.pointer=0,this.$refs.list&&(this.$refs.list.scrollTop=0))},pointerAdjust:function(){this.pointer>=this.filteredOptions.length-1&&(this.pointer=this.filteredOptions.length?this.filteredOptions.length-1:0)},pointerSet:function(e){this.pointer=e,this.pointerDirty=!0}}}},function(e,t,i){"use strict";function n(e){if(Array.isArray(e))return e.map(n);if(e&&"object"===(void 0===e?"undefined":s(e))){for(var t={},i=Object.keys(e),o=0,l=i.length;o<l;o++){var r=i[o];t[r]=n(e[r])}return t}return e}Object.defineProperty(t,"__esModule",{value:!0});var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};t.default=n},function(e,t,i){"use strict";function n(e){i(6)}Object.defineProperty(t,"__esModule",{value:!0});var s=i(5),o=i.n(s),l=i(8),r=i(7),a=n,u=r(o.a,l.a,!1,a,null,null);t.default=u.exports},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.deepClone=t.pointerMixin=t.multiselectMixin=t.Multiselect=void 0;var s=i(3),o=n(s),l=i(0),r=n(l),a=i(1),u=n(a),c=i(2),h=n(c);t.default=o.default,t.Multiselect=o.default,t.multiselectMixin=r.default,t.pointerMixin=u.default,t.deepClone=h.default},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=i(0),o=n(s),l=i(1),r=n(l);t.default={name:"vue-multiselect",mixins:[o.default,r.default],props:{name:{type:String,default:""},selectLabel:{type:String,default:"Press enter to select"},selectedLabel:{type:String,default:"Selected"},deselectLabel:{type:String,default:"Press enter to remove"},showLabels:{type:Boolean,default:!0},limit:{type:Number,default:99999},maxHeight:{type:Number,default:300},limitText:{type:Function,default:function(e){return"and "+e+" more"}},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},openDirection:{type:String,default:""},showNoResults:{type:Boolean,default:!0},tabindex:{type:Number,default:0}},computed:{visibleValue:function(){return this.multiple?this.internalValue.slice(0,this.limit):[]},deselectLabelText:function(){return this.showLabels?this.deselectLabel:""},selectLabelText:function(){return this.showLabels?this.selectLabel:""},selectedLabelText:function(){return this.showLabels?this.selectedLabel:""},inputStyle:function(){if(this.multiple&&this.value&&this.value.length)return this.isOpen?{width:"auto"}:{width:"0",position:"absolute"}},contentStyle:function(){return this.options.length?{display:"inline-block"}:{display:"block"}},isAbove:function(){return"above"===this.openDirection||"top"===this.openDirection||"below"!==this.openDirection&&"bottom"!==this.openDirection&&"above"===this.prefferedOpenDirection}}}},function(e,t){},function(e,t){e.exports=function(e,t,i,n,s,o){var l,r=e=e||{},a=typeof e.default;"object"!==a&&"function"!==a||(l=e,r=e.default);var u="function"==typeof r?r.options:r;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId=s);var c;if(o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),n&&n.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):n&&(c=n),c){var h=u.functional,p=h?u.render:u.beforeCreate;h?(u._injectStyles=c,u.render=function(e,t){return c.call(t),p(e,t)}):u.beforeCreate=p?[].concat(p,c):[c]}return{esModule:l,exports:r,options:u}}},function(e,t,i){"use strict";var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"multiselect",class:{"multiselect--active":e.isOpen,"multiselect--disabled":e.disabled,"multiselect--above":e.isAbove},attrs:{tabindex:e.searchable?-1:e.tabindex},on:{focus:function(t){e.activate()},blur:function(t){!e.searchable&&e.deactivate()},keydown:[function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerForward()):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key)?t.target!==t.currentTarget?null:(t.preventDefault(),void e.pointerBackward()):null},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)||!e._k(t.keyCode,"tab",9,t.key)?(t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null}],keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()}}},[e._t("caret",[i("div",{staticClass:"multiselect__select",on:{mousedown:function(t){t.preventDefault(),t.stopPropagation(),e.toggle()}}})],{toggle:e.toggle}),e._v(" "),e._t("clear",null,{search:e.search}),e._v(" "),i("div",{ref:"tags",staticClass:"multiselect__tags"},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.visibleValue.length>0,expression:"visibleValue.length > 0"}],staticClass:"multiselect__tags-wrap"},[e._l(e.visibleValue,function(t){return[e._t("tag",[i("span",{staticClass:"multiselect__tag"},[i("span",{domProps:{textContent:e._s(e.getOptionLabel(t))}}),e._v(" "),i("i",{staticClass:"multiselect__tag-icon",attrs:{"aria-hidden":"true",tabindex:"1"},on:{keydown:function(i){if(!("button"in i)&&e._k(i.keyCode,"enter",13,i.key))return null;i.preventDefault(),e.removeElement(t)},mousedown:function(i){i.preventDefault(),e.removeElement(t)}}})])],{option:t,search:e.search,remove:e.removeElement})]})],2),e._v(" "),e.internalValue&&e.internalValue.length>e.limit?[i("strong",{staticClass:"multiselect__strong",domProps:{textContent:e._s(e.limitText(e.internalValue.length-e.limit))}})]:e._e(),e._v(" "),i("transition",{attrs:{name:"multiselect__loading"}},[e._t("loading",[i("div",{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],staticClass:"multiselect__spinner"})])],2),e._v(" "),e.searchable?i("input",{ref:"search",staticClass:"multiselect__input",style:e.inputStyle,attrs:{name:e.name,id:e.id,type:"text",autocomplete:"off",placeholder:e.placeholder,disabled:e.disabled,tabindex:e.tabindex},domProps:{value:e.isOpen?e.search:e.currentOptionLabel},on:{input:function(t){e.updateSearch(t.target.value)},focus:function(t){t.preventDefault(),e.activate()},blur:function(t){t.preventDefault(),e.deactivate()},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"esc",27,t.key))return null;e.deactivate()},keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"down",40,t.key))return null;t.preventDefault(),e.pointerForward()},function(t){if(!("button"in t)&&e._k(t.keyCode,"up",38,t.key))return null;t.preventDefault(),e.pointerBackward()},function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key)?(t.preventDefault(),t.stopPropagation(),t.target!==t.currentTarget?null:void e.addPointerElement(t)):null},function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46],t.key))return null;t.stopPropagation(),e.removeLastElement()}]}}):e._e(),e._v(" "),e.searchable?e._e():i("span",{staticClass:"multiselect__single",domProps:{textContent:e._s(e.currentOptionLabel)},on:{mousedown:function(t){t.preventDefault(),e.toggle(t)}}})],2),e._v(" "),i("transition",{attrs:{name:"multiselect"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],ref:"list",staticClass:"multiselect__content-wrapper",style:{maxHeight:e.optimizedHeight+"px"},on:{focus:e.activate,mousedown:function(e){e.preventDefault()}}},[i("ul",{staticClass:"multiselect__content",style:e.contentStyle},[e._t("beforeList"),e._v(" "),e.multiple&&e.max===e.internalValue.length?i("li",[i("span",{staticClass:"multiselect__option"},[e._t("maxElements",[e._v("Maximum of "+e._s(e.max)+" options selected. First remove a selected option to select another.")])],2)]):e._e(),e._v(" "),!e.max||e.internalValue.length<e.max?e._l(e.filteredOptions,function(t,n){return i("li",{key:n,staticClass:"multiselect__element"},[t&&(t.$isLabel||t.$isDisabled)?e._e():i("span",{staticClass:"multiselect__option",class:e.optionHighlight(n,t),attrs:{"data-select":t&&t.isTag?e.tagPlaceholder:e.selectLabelText,"data-selected":e.selectedLabelText,"data-deselect":e.deselectLabelText},on:{click:function(i){i.stopPropagation(),e.select(t)},mouseenter:function(t){if(t.target!==t.currentTarget)return null;e.pointerSet(n)}}},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2),e._v(" "),t&&(t.$isLabel||t.$isDisabled)?i("span",{staticClass:"multiselect__option multiselect__option--disabled",class:e.optionHighlight(n,t)},[e._t("option",[i("span",[e._v(e._s(e.getOptionLabel(t)))])],{option:t,search:e.search})],2):e._e()])}):e._e(),e._v(" "),i("li",{directives:[{name:"show",rawName:"v-show",value:e.showNoResults&&0===e.filteredOptions.length&&e.search&&!e.loading,expression:"showNoResults && (filteredOptions.length === 0 && search && !loading)"}]},[i("span",{staticClass:"multiselect__option"},[e._t("noResult",[e._v("No elements found. Consider changing the search query.")])],2)]),e._v(" "),e._t("afterList")],2)])])],2)},s=[],o={render:n,staticRenderFns:s};t.a=o}])});

/***/ }),

/***/ 1096:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1097)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1099)
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

/***/ 1097:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1098);
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

/***/ 1098:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nform.vue-form {\n    margin-bottom: 0;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/resources/assets/js/components/enso/vueforms/VueForm.vue"],"names":[],"mappings":";AAuPA;IACA,iBAAA;CACA","file":"VueForm.vue","sourcesContent":["<template>\n\n    <div>\n        <h5 class=\"title is-5\"\n            v-if=\"data.icon || data.title\">\n            <span class=\"icon\"\n                v-if=\"data.icon\">\n                <i :class=\"data.icon\"></i>\n            </span>\n            <span\n                v-if=\"data.title\">\n                {{ data.title }}\n            </span>\n            <hr>\n        </h5>\n        <form @submit.prevent=\"submit()\"\n            class=\"vue-form\">\n            <div class=\"columns is-multiline\">\n                <div v-for=\"field in data.fields\"\n                    class=\"column\"\n                    :key=\"field.name\"\n                    :class=\"columnSize\"\n                    v-if=\"!field.meta.hidden\">\n                    <div class=\"field\">\n                        <label class=\"label\">\n                            {{ __(field.label) }}\n                            <p v-if=\"errors.has(field.name)\"\n                                class=\"help is-danger is-pulled-right\">\n                                {{ errors.get(field.name) }}\n                            </p>\n                        </label>\n                        <span v-if=\"field.meta.custom\">\n                            <slot :name=\"field.name\"\n                                :field=\"field\"\n                                :errors=\"errors\">\n                            </slot>\n                        </span>\n                        <span v-else>\n                            <vue-form-input v-if=\"field.meta.type === 'input'\"\n                                :field=\"field\"\n                                @update=\"errors.clear(field.name)\"\n                                :has-error=\"errors.has(field.name)\">\n                            </vue-form-input>\n                            <vue-select v-if=\"field.meta.type === 'select'\"\n                                :has-error=\"errors.has(field.name)\"\n                                @input=\"errors.clear(field.name);\"\n                                v-model=\"field.value\"\n                                :options=\"field.meta.options\"\n                                :key-map=\"field.meta.keyMap\"\n                                :source=\"field.meta.source\"\n                                :multiple=\"field.meta.multiple\"\n                                :disabled=\"field.meta.disabled\">\n                            </vue-select>\n                            <datepicker v-if=\"field.meta.type === 'datepicker'\"\n                                @input=\"errors.clear(field.name)\"\n                                v-model=\"field.value\"\n                                :format=\"field.meta.format\"\n                                :time=\"field.meta.time\"\n                                :disabled=\"field.meta.disabled\">\n                            </datepicker>\n                            <datepicker v-if=\"field.meta.type === 'timepicker'\"\n                                @input=\"errors.clear(field.name)\"\n                                v-model=\"field.value\"\n                                :format=\"field.meta.format\"\n                                time-only\n                                :disabled=\"field.meta.disabled\">\n                            </datepicker>\n                            <div class=\"control has-icons-right\"\n                                v-if=\"field.meta.type === 'textarea'\">\n                                <textarea @input=\"errors.clear(field.name)\"\n                                    class=\"textarea\"\n                                    :class=\"{ 'is-danger': errors.has(field.name) }\"\n                                    v-model=\"field.value\"\n                                    :rows=\"field.meta.rows\"\n                                    :disabled=\"field.meta.disabled\">\n                                </textarea>\n                                <span class=\"icon is-small is-right has-text-danger\"\n                                    v-if=\"errors.has(field.name)\">\n                                    <i class=\"fas fa-exclamation-triangle\"></i>\n                                </span>\n                            </div>\n                        </span>\n                    </div>\n                </div>\n            </div>\n            <hr>\n            <button class=\"button\"\n                v-if=\"data.actions.destroy\"\n                :disabled=\"data.actions.destroy.forbidden\"\n                :class=\"data.actions.destroy.button.class\"\n                @click.prevent=\"showModal = true\">\n                <span>{{ __(data.actions.destroy.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.destroy.button.icon\"></i>\n                </span>\n            </button>\n            <button class=\"button\"\n                :class=\"data.actions.create.button.class\"\n                @click.prevent=\"create()\"\n                v-if=\"data.actions.create\"\n                :disabled=\"data.actions.create.forbidden\">\n                <span>{{ __(data.actions.create.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.create.button.icon\"></i>\n                </span>\n            </button>\n            <button type=\"submit\"\n                class=\"button is-pulled-right\"\n                :class=\"[data.actions.store.button.class, { 'is-loading': loading }]\"\n                v-if=\"data.actions.store\"\n                :disabled=\"data.actions.store.forbidden\">\n                <span>{{ __(data.actions.store.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.store.button.icon\"></i>\n                </span>\n            </button>\n            <button type=\"submit\"\n                class=\"button is-pulled-right\"\n                :class=\"[data.actions.update.button.class, { 'is-loading': loading }]\"\n                v-if=\"data.actions.update\"\n                :disabled=\"data.actions.update.forbidden\">\n                <span>{{ __(data.actions.update.button.label) }}</span>\n                <span class=\"icon\">\n                    <i :class=\"data.actions.update.button.icon\"></i>\n                </span>\n            </button>\n            <div class=\"is-clearfix\"></div>\n        </form>\n        <modal v-if=\"data.actions.destroy\"\n            :show=\"showModal\"\n            :__=\"__\"\n            :message=\"data.actions.destroy.button.message\"\n            @cancel-action=\"showModal = false\"\n            @commit-action=\"destroy()\">\n        </modal>\n    </div>\n\n</template>\n\n<script>\n\nimport { mapGetters } from 'vuex';\nimport Errors from './classes/Errors';\nimport Modal from './Modal.vue';\nimport VueSelect from './VueSelect.vue';\nimport Datepicker from './Datepicker.vue';\nimport VueFormInput from './VueFormInput.vue';\n\nexport default {\n    name: 'VueForm',\n\n    components: {\n        Modal, VueSelect, Datepicker, VueFormInput,\n    },\n\n    props: {\n        data: {\n            type: Object,\n            required: true,\n        },\n        params: {\n            type: Object,\n            default: null,\n        },\n    },\n\n    data() {\n        return {\n            loading: false,\n            showModal: false,\n            errors: new Errors(),\n        };\n    },\n\n    computed: {\n        ...mapGetters('locale', ['__']),\n        columnSize() {\n            return `is-${parseInt(12 / this.data.columns, 10)}`;\n        },\n        path() {\n            return this.data.method === 'post'\n                ? this.data.actions.store.path\n                : this.data.actions.update.path;\n        },\n    },\n\n    methods: {\n        create() {\n            this.$emit('create');\n            this.$router.push({ name: this.data.actions.create.route });\n        },\n        submit() {\n            this.loading = true;\n\n            axios[this.data.method](this.path, this.formData()).then(({ data }) => {\n                this.loading = false;\n                toastr.success(data.message);\n                this.$emit('submit');\n\n                if (data.redirect) {\n                    this.$router.push({\n                        name: data.redirect,\n                        params: { id: data.id },\n                    });\n                }\n            }).catch((error) => {\n                const { status, data } = error.response;\n                this.loading = false;\n\n                if (status === 422) {\n                    this.errors.set(data.errors);\n\n                    return;\n                }\n\n                this.handleError(error);\n            });\n        },\n        formData() {\n            return this.data.fields.reduce((object, field) => {\n                object[field.name] = field.value;\n                return object;\n            }, { _params: this.params });\n        },\n        destroy() {\n            this.showModal = false;\n            this.loading = true;\n\n            axios.delete(this.data.actions.destroy.path).then(({ data }) => {\n                this.loading = false;\n                toastr.success(data.message);\n                this.$emit('destroy');\n\n                if (data.redirect) {\n                    this.$router.push({ name: data.redirect });\n                }\n            }).catch((error) => {\n                this.loading = false;\n                this.handleError(error);\n            });\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    form.vue-form {\n        margin-bottom: 0;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1099:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__classes_Errors__ = __webpack_require__(1100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue__ = __webpack_require__(1101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Modal_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Modal_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__VueSelect_vue__ = __webpack_require__(1106);
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

/***/ 1100:
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

/***/ 1101:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1102)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1104)
/* template */
var __vue_template__ = __webpack_require__(1105)
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

/***/ 1102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1103);
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

/***/ 1103:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.modal.is-active {\n    z-index: 1100;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/resources/assets/js/components/enso/vueforms/Modal.vue"],"names":[],"mappings":";AA8DA;IACA,cAAA;CACA","file":"Modal.vue","sourcesContent":["<template>\n\n    <transition enter-active-class=\"animated fadeIn\"\n        leave-active-class=\"animated fadeOut\">\n        <div class=\"modal\"\n            :class=\"{ 'is-active': show }\"\n            v-if=\"show\">\n            <div class=\"modal-background\"></div>\n            <div class=\"table-modal modal-content\">\n                <div class=\"box\">\n                    <slot name=\"content\">\n                        <h5 class=\"subtitle is-5\">\n                            {{ __(message || \"Are you sure ?\") }}\n                        </h5>\n                    </slot>\n                    <hr>\n                    <div class=\"level\">\n                        <div class=\"level-left\"></div>\n                        <div class=\"level-right\">\n                            <div class=\"level-item\">\n                                <slot name=\"controls\">\n                                    <button class=\"button is-success\"\n                                          @click=\"$emit('cancel-action')\">\n                                          {{ __(\"Cancel\") }}\n                                      </button>\n                                      <button class=\"button is-danger has-margin-left-small\"\n                                        @click=\"$emit('commit-action')\">\n                                        {{ __(\"Yes\") }}\n                                    </button>\n                                </slot>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </transition>\n\n</template>\n\n<script>\n\nexport default {\n    props: {\n        show: {\n            type: Boolean,\n            required: true,\n        },\n        message: {\n            type: String,\n            default: null,\n        },\n        __: {\n            type: Function,\n            required: true,\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    .modal.is-active {\n        z-index: 1100;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1104:
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

/***/ 1105:
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

/***/ 1106:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1107)
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

/***/ 1107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1108);
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

/***/ 1108:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nfieldset[disabled] .multiselect{pointer-events:none\n}\n.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block\n}\n.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;-webkit-box-shadow:0 0 0 1px transparent;box-shadow:0 0 0 1px transparent\n}\n.multiselect__spinner:before{-webkit-animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation:a 2.4s cubic-bezier(.41,.26,.2,.62);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__spinner:after{-webkit-animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation:a 2.4s cubic-bezier(.51,.09,.21,.8);-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite\n}\n.multiselect__loading-enter-active,.multiselect__loading-leave-active{-webkit-transition:opacity .4s ease-in-out;transition:opacity .4s ease-in-out;opacity:1\n}\n.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0\n}\n.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation\n}\n.multiselect{-webkit-box-sizing:content-box;box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e\n}\n.multiselect *{-webkit-box-sizing:border-box;box-sizing:border-box\n}\n.multiselect:focus{outline:none\n}\n.multiselect--disabled{opacity:.6\n}\n.multiselect--active{z-index:1\n}\n.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0\n}\n.multiselect--active .multiselect__select{-webkit-transform:rotate(180deg);transform:rotate(180deg)\n}\n.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0\n}\n.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;-webkit-transition:border .1s ease;transition:border .1s ease;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:8px;vertical-align:top\n}\n.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto\n}\n.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf\n}\n.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none\n}\n.multiselect__single{padding-left:6px;margin-bottom:8px\n}\n.multiselect__tags-wrap{display:inline\n}\n.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff\n}\n.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis\n}\n.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;-webkit-transition:all .2s ease;transition:all .2s ease;border-radius:5px\n}\n.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px\n}\n.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e\n}\n.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff\n}\n.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8\n}\n.multiselect__current,.multiselect__select{line-height:16px;-webkit-box-sizing:border-box;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer\n}\n.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease, -webkit-transform .2s ease\n}\n.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"\n}\n.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px\n}\n.multiselect--active .multiselect__placeholder{display:none\n}\n.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch\n}\n.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top\n}\n.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8\n}\n.multiselect__content::webkit-scrollbar{display:none\n}\n.multiselect__element{display:block\n}\n.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap\n}\n.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px\n}\n.multiselect__option--highlight{background:#41b883;outline:none;color:#fff\n}\n.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff\n}\n.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700\n}\n.multiselect__option--selected:after{content:attr(data-selected);color:silver\n}\n.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff\n}\n.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff\n}\n.multiselect--disabled{background:#ededed;pointer-events:none\n}\n.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6\n}\n.multiselect__option--disabled{cursor:text;pointer-events:none\n}\n.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important\n}\n.multiselect-enter-active,.multiselect-leave-active{-webkit-transition:all .15s ease;transition:all .15s ease\n}\n.multiselect-enter,.multiselect-leave-active{opacity:0\n}\n.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top\n}\n[dir=rtl] .multiselect{text-align:right\n}\n[dir=rtl] .multiselect__select{right:auto;left:1px\n}\n[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px\n}\n[dir=rtl] .multiselect__content{text-align:right\n}\n[dir=rtl] .multiselect__option:after{right:auto;left:0\n}\n[dir=rtl] .multiselect__clear{right:auto;left:12px\n}\n[dir=rtl] .multiselect__spinner{right:auto;left:1px\n}\n@-webkit-keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}\n@keyframes a{\n0%{-webkit-transform:rotate(0);transform:rotate(0)\n}\nto{-webkit-transform:rotate(2turn);transform:rotate(2turn)\n}\n}", "", {"version":3,"sources":["/Users/adi/code/ensov2/node_modules/vue-multiselect/dist/vue-multiselect.min.css"],"names":[],"mappings":"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","file":"vue-multiselect.min.css","sourcesContent":["fieldset[disabled] .multiselect{pointer-events:none}.multiselect__spinner{position:absolute;right:1px;top:1px;width:48px;height:35px;background:#fff;display:block}.multiselect__spinner:after,.multiselect__spinner:before{position:absolute;content:\"\";top:50%;left:50%;margin:-8px 0 0 -8px;width:16px;height:16px;border-radius:100%;border-color:#41b883 transparent transparent;border-style:solid;border-width:2px;box-shadow:0 0 0 1px transparent}.multiselect__spinner:before{animation:a 2.4s cubic-bezier(.41,.26,.2,.62);animation-iteration-count:infinite}.multiselect__spinner:after{animation:a 2.4s cubic-bezier(.51,.09,.21,.8);animation-iteration-count:infinite}.multiselect__loading-enter-active,.multiselect__loading-leave-active{transition:opacity .4s ease-in-out;opacity:1}.multiselect__loading-enter,.multiselect__loading-leave-active{opacity:0}.multiselect,.multiselect__input,.multiselect__single{font-family:inherit;font-size:14px;-ms-touch-action:manipulation;touch-action:manipulation}.multiselect{box-sizing:content-box;display:block;position:relative;width:100%;min-height:40px;text-align:left;color:#35495e}.multiselect *{box-sizing:border-box}.multiselect:focus{outline:none}.multiselect--disabled{opacity:.6}.multiselect--active{z-index:1}.multiselect--active:not(.multiselect--above) .multiselect__current,.multiselect--active:not(.multiselect--above) .multiselect__input,.multiselect--active:not(.multiselect--above) .multiselect__tags{border-bottom-left-radius:0;border-bottom-right-radius:0}.multiselect--active .multiselect__select{transform:rotate(180deg)}.multiselect--above.multiselect--active .multiselect__current,.multiselect--above.multiselect--active .multiselect__input,.multiselect--above.multiselect--active .multiselect__tags{border-top-left-radius:0;border-top-right-radius:0}.multiselect__input,.multiselect__single{position:relative;display:inline-block;min-height:20px;line-height:20px;border:none;border-radius:5px;background:#fff;padding:0 0 0 5px;width:100%;transition:border .1s ease;box-sizing:border-box;margin-bottom:8px;vertical-align:top}.multiselect__tag~.multiselect__input,.multiselect__tag~.multiselect__single{width:auto}.multiselect__input:hover,.multiselect__single:hover{border-color:#cfcfcf}.multiselect__input:focus,.multiselect__single:focus{border-color:#a8a8a8;outline:none}.multiselect__single{padding-left:6px;margin-bottom:8px}.multiselect__tags-wrap{display:inline}.multiselect__tags{min-height:40px;display:block;padding:8px 40px 0 8px;border-radius:5px;border:1px solid #e8e8e8;background:#fff}.multiselect__tag{position:relative;display:inline-block;padding:4px 26px 4px 10px;border-radius:5px;margin-right:10px;color:#fff;line-height:1;background:#41b883;margin-bottom:5px;white-space:nowrap;overflow:hidden;max-width:100%;text-overflow:ellipsis}.multiselect__tag-icon{cursor:pointer;margin-left:7px;position:absolute;right:0;top:0;bottom:0;font-weight:700;font-style:normal;width:22px;text-align:center;line-height:22px;transition:all .2s ease;border-radius:5px}.multiselect__tag-icon:after{content:\"\\D7\";color:#266d4d;font-size:14px}.multiselect__tag-icon:focus,.multiselect__tag-icon:hover{background:#369a6e}.multiselect__tag-icon:focus:after,.multiselect__tag-icon:hover:after{color:#fff}.multiselect__current{min-height:40px;overflow:hidden;padding:8px 12px 0;padding-right:30px;white-space:nowrap;border-radius:5px;border:1px solid #e8e8e8}.multiselect__current,.multiselect__select{line-height:16px;box-sizing:border-box;display:block;margin:0;text-decoration:none;cursor:pointer}.multiselect__select{position:absolute;width:40px;height:38px;right:1px;top:1px;padding:4px 8px;text-align:center;transition:transform .2s ease}.multiselect__select:before{position:relative;right:0;top:65%;color:#999;margin-top:4px;border-style:solid;border-width:5px 5px 0;border-color:#999 transparent transparent;content:\"\"}.multiselect__placeholder{color:#adadad;display:inline-block;margin-bottom:10px;padding-top:2px}.multiselect--active .multiselect__placeholder{display:none}.multiselect__content-wrapper{position:absolute;display:block;background:#fff;width:100%;max-height:240px;overflow:auto;border:1px solid #e8e8e8;border-top:none;border-bottom-left-radius:5px;border-bottom-right-radius:5px;z-index:1;-webkit-overflow-scrolling:touch}.multiselect__content{list-style:none;display:inline-block;padding:0;margin:0;min-width:100%;vertical-align:top}.multiselect--above .multiselect__content-wrapper{bottom:100%;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:5px;border-top-right-radius:5px;border-bottom:none;border-top:1px solid #e8e8e8}.multiselect__content::webkit-scrollbar{display:none}.multiselect__element{display:block}.multiselect__option{display:block;padding:12px;min-height:40px;line-height:16px;text-decoration:none;text-transform:none;vertical-align:middle;position:relative;cursor:pointer;white-space:nowrap}.multiselect__option:after{top:0;right:0;position:absolute;line-height:40px;padding-right:12px;padding-left:20px}.multiselect__option--highlight{background:#41b883;outline:none;color:#fff}.multiselect__option--highlight:after{content:attr(data-select);background:#41b883;color:#fff}.multiselect__option--selected{background:#f3f3f3;color:#35495e;font-weight:700}.multiselect__option--selected:after{content:attr(data-selected);color:silver}.multiselect__option--selected.multiselect__option--highlight{background:#ff6a6a;color:#fff}.multiselect__option--selected.multiselect__option--highlight:after{background:#ff6a6a;content:attr(data-deselect);color:#fff}.multiselect--disabled{background:#ededed;pointer-events:none}.multiselect--disabled .multiselect__current,.multiselect--disabled .multiselect__select,.multiselect__option--disabled{background:#ededed;color:#a6a6a6}.multiselect__option--disabled{cursor:text;pointer-events:none}.multiselect__option--disabled.multiselect__option--highlight{background:#dedede!important}.multiselect-enter-active,.multiselect-leave-active{transition:all .15s ease}.multiselect-enter,.multiselect-leave-active{opacity:0}.multiselect__strong{margin-bottom:8px;line-height:20px;display:inline-block;vertical-align:top}[dir=rtl] .multiselect{text-align:right}[dir=rtl] .multiselect__select{right:auto;left:1px}[dir=rtl] .multiselect__tags{padding:8px 8px 0 40px}[dir=rtl] .multiselect__content{text-align:right}[dir=rtl] .multiselect__option:after{right:auto;left:0}[dir=rtl] .multiselect__clear{right:auto;left:12px}[dir=rtl] .multiselect__spinner{right:auto;left:1px}@keyframes a{0%{transform:rotate(0)}to{transform:rotate(2turn)}}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1110);
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

/***/ 1110:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.vue-select .multiselect {\n  min-height: 36px;\n  max-height: 36px;\n}\ndiv.vue-select .multiselect__tags {\n  min-height: 36px;\n  max-height: 36px;\n  padding: 4px 40px 0 4px;\n  border-radius: 3px;\n}\ndiv.vue-select .multiselect__tags:hover {\n    border-color: #b5b5b5;\n}\n.multiselect.has-error .multiselect__tags {\n  border: 1px solid #e50800;\n}\ndiv.vue-select .multiselect__tag {\n  border-radius: 3px;\n  margin-bottom: 4px;\n}\ndiv.vue-select .multiselect__tag-icon {\n  border-radius: 3px;\n  line-height: 24px;\n}\ndiv.vue-select input[type=text].multiselect__input {\n  -webkit-box-shadow: none;\n          box-shadow: none;\n  margin-bottom: 4px;\n  margin-top: 2px;\n  border-bottom: none;\n}\ndiv.vue-select .multiselect__content-wrapper {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\ndiv.vue-select .multiselect__option,\ndiv.vue-select .multiselect__option:after {\n  line-height: 16px;\n  padding: 10px;\n  min-height: 36px;\n}\ndiv.vue-select .multiselect__select {\n  width: 34px;\n  height: 34px;\n}\ndiv.vue-select .multiselect__select:before {\n  top: 70%;\n}\ndiv.vue-select .multiselect__spinner {\n  height: 34px;\n  width: 34px;\n}\nspan.multiselect__tag {\n  padding: 5px 26px 5px 10px;\n}\n.multiselect, .multiselect__input, .multiselect__single {\n  font-size: 16px;\n}\n.multiselect__clear {\n  position: absolute;\n  top: 7px;\n  right: 30px;\n  height: 22px;\n  width: 22px;\n  display: block;\n  cursor: pointer;\n  z-index: 1;\n}\n.multiselect__clear:before {\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n}\n.multiselect__clear:after {\n  -webkit-transform: rotate(-45deg);\n          transform: rotate(-45deg);\n}\n.multiselect__clear:after, .multiselect__clear:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 16px;\n  background: #aaa;\n  top: 3px;\n  right: 10px;\n}\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/vueforms/VueSelect.vue"],"names":[],"mappings":";AAAA;EACE,iBAAiB;EACjB,iBAAiB;CAAE;AAErB;EACE,iBAAiB;EACjB,iBAAiB;EACjB,wBAAwB;EACxB,mBAAmB;CAAE;AACrB;IACE,sBAAsB;CAAE;AAE5B;EACE,0BAA0B;CAAE;AAE9B;EACE,mBAAmB;EACnB,mBAAmB;CAAE;AAEvB;EACE,mBAAmB;EACnB,kBAAkB;CAAE;AAEtB;EACE,yBAAiB;UAAjB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,oBAAoB;CAAE;AAExB;EACE,+BAA+B;EAC/B,gCAAgC;CAAE;AAEpC;;EAEE,kBAAkB;EAClB,cAAc;EACd,iBAAiB;CAAE;AAErB;EACE,YAAY;EACZ,aAAa;CAAE;AAEjB;EACE,SAAS;CAAE;AAEb;EACE,aAAa;EACb,YAAY;CAAE;AAEhB;EACE,2BAA2B;CAAE;AAE/B;EACE,gBAAgB;CAAE;AAEpB;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,WAAW;CAAE;AAEf;EACE,iCAAyB;UAAzB,yBAAyB;CAAE;AAE7B;EACE,kCAA0B;UAA1B,0BAA0B;CAAE;AAE9B;EACE,YAAY;EACZ,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,aAAa;EACb,iBAAiB;EACjB,SAAS;EACT,YAAY;CAAE","file":"VueSelect.vue","sourcesContent":[".vue-select .multiselect {\n  min-height: 36px;\n  max-height: 36px; }\n\ndiv.vue-select .multiselect__tags {\n  min-height: 36px;\n  max-height: 36px;\n  padding: 4px 40px 0 4px;\n  border-radius: 3px; }\n  div.vue-select .multiselect__tags:hover {\n    border-color: #b5b5b5; }\n\n.multiselect.has-error .multiselect__tags {\n  border: 1px solid #e50800; }\n\ndiv.vue-select .multiselect__tag {\n  border-radius: 3px;\n  margin-bottom: 4px; }\n\ndiv.vue-select .multiselect__tag-icon {\n  border-radius: 3px;\n  line-height: 24px; }\n\ndiv.vue-select input[type=text].multiselect__input {\n  box-shadow: none;\n  margin-bottom: 4px;\n  margin-top: 2px;\n  border-bottom: none; }\n\ndiv.vue-select .multiselect__content-wrapper {\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px; }\n\ndiv.vue-select .multiselect__option,\ndiv.vue-select .multiselect__option:after {\n  line-height: 16px;\n  padding: 10px;\n  min-height: 36px; }\n\ndiv.vue-select .multiselect__select {\n  width: 34px;\n  height: 34px; }\n\ndiv.vue-select .multiselect__select:before {\n  top: 70%; }\n\ndiv.vue-select .multiselect__spinner {\n  height: 34px;\n  width: 34px; }\n\nspan.multiselect__tag {\n  padding: 5px 26px 5px 10px; }\n\n.multiselect, .multiselect__input, .multiselect__single {\n  font-size: 16px; }\n\n.multiselect__clear {\n  position: absolute;\n  top: 7px;\n  right: 30px;\n  height: 22px;\n  width: 22px;\n  display: block;\n  cursor: pointer;\n  z-index: 1; }\n\n.multiselect__clear:before {\n  transform: rotate(45deg); }\n\n.multiselect__clear:after {\n  transform: rotate(-45deg); }\n\n.multiselect__clear:after, .multiselect__clear:before {\n  content: \"\";\n  display: block;\n  position: absolute;\n  width: 1px;\n  height: 16px;\n  background: #aaa;\n  top: 3px;\n  right: 10px; }\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_multiselect__ = __webpack_require__(1095);
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

/***/ 1112:
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
            placeholder: _vm.__(_vm.labels.placeholder),
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

/***/ 1522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_enso_vueforms_VueForm_vue__ = __webpack_require__(1096);
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
//
//
//
//
//
//
//
//
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
            form: {}
        };
    },
    created: function created() {
        var _this = this;

        axios.get(route(this.$route.name, null, false)).then(function (response) {
            _this.form = response.data.form;
            _this.initialised = true;
        }).catch(function (error) {
            return _this.handleError(error);
        });
    }
});

/***/ }),

/***/ 1523:
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
              attrs: { data: _vm.form },
              scopedSlots: _vm._u([
                {
                  key: "icon",
                  fn: function(props) {
                    return [
                      _c("div", { staticClass: "control has-icons-right" }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: props.field.value,
                              expression: "props.field.value"
                            }
                          ],
                          staticClass: "input",
                          class: { "is-danger": props.errors.has("icon") },
                          attrs: { type: "text" },
                          domProps: { value: props.field.value },
                          on: {
                            keydown: function($event) {
                              props.errors.clear(props.field.name)
                            },
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                props.field,
                                "value",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        props.errors.has("icon")
                          ? _c(
                              "span",
                              { staticClass: "icon is-small is-right" },
                              [
                                _c("i", {
                                  staticClass: "fas fa-exclamation-triangle"
                                })
                              ]
                            )
                          : _c(
                              "span",
                              { staticClass: "icon is-small is-right" },
                              [_c("i", { class: props.field.value })]
                            )
                      ])
                    ]
                  }
                }
              ])
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
    require("vue-hot-reload-api")      .rerender("data-v-6864f9ea", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9tZW51cy9DcmVhdGUudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy92dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmpzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlPzc3NTYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWU/NzRlNCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvY2xhc3Nlcy9FcnJvcnMuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZT8yMTlmIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZT9jYTZlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlP2QwODYiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3M/MWI5NSIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3M/ODgxZiIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlP2VjMGQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZT83MzY2Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9zZWxlY3QvVnVlU2VsZWN0LnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlP2YxOGUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWUiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3M/ZGYzNiIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLmNzcyIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZT80YWIzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlPzA4YWEiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9mbGF0cGlja3IuanMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWU/ODkxZCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtSW5wdXQudnVlIiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtSW5wdXQudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZT9jNDEzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWU/Y2Y0YyIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZSIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlPzkxNzQiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZT8xNGMzIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlPzVkMGYiLCJ3ZWJwYWNrOi8vL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL21lbnVzL0NyZWF0ZS52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9zeXN0ZW0vbWVudXMvQ3JlYXRlLnZ1ZT9jNGE3Il0sIm5hbWVzIjpbIkVycm9ycyIsImVycm9ycyIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJmaWVsZCIsImluY2x1ZGVzIiwiaGFzIiwiVnVlIiwiZGVsZXRlIiwiZm9yRWFjaCIsImNsZWFyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDZDQUFpVjtBQUNqVjtBQUNBLCtDQUFzTDtBQUN0TDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILENBQUM7O0FBRUQ7Ozs7Ozs7O0FDeENBLGVBQWUscUpBQWlNLGlCQUFpQixtQkFBbUIsY0FBYyw0QkFBNEIsWUFBWSxxQkFBcUIsMkRBQTJELFNBQVMsbUNBQW1DLFNBQVMscUJBQXFCLHFDQUFxQyxvQ0FBb0MsRUFBRSxpQkFBaUIsaUNBQWlDLGlCQUFpQixZQUFZLFVBQVUsc0JBQXNCLG1CQUFtQixpREFBaUQsa0JBQWtCLGtCQUFrQixhQUFhLGtCQUFrQix5Q0FBeUMsa0RBQWtELFdBQVcsY0FBYyx1REFBdUQsZ0JBQWdCLDhIQUE4SCxvQkFBb0IsNEJBQTRCLG1CQUFtQixFQUFFLGNBQWMsNEJBQTRCLGtCQUFrQixFQUFFLGdCQUFnQixtQkFBbUIsOEJBQThCLGtDQUFrQyw2QkFBNkIsb0JBQW9CLE1BQU0sc0JBQXNCLG1CQUFtQix5QkFBeUIsTUFBTSxnSEFBZ0gsb0JBQW9CLHFCQUFxQiw0QkFBNEIs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QUFXLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sTUFBTSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxNQUFNLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLE1BQU0sS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLEtBQUssS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLE9BQU8sS0FBSyxPQUFPLE1BQU0sS0FBSyxVQUFVLEtBQUssT0FBTyxNQUFNLEtBQUssS0FBSyxLQUFLLE9BQU8sTUFBTSxPQUFPLE9BQU8sVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksV0FBVyxLQUFLLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLEtBQUssS0FBSyxVQUFVLFlBQVksTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLEtBQUssS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLEtBQUssS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxLQUFLLE1BQU0sWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxLQUFLLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxVQUFVLFVBQVUsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLE1BQU0sWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLE1BQU0sZ0JBQWdCLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksYUFBYSxXQUFXLEtBQUssc0JBQXNCLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxNQUFNLE9BQU8sWUFBWSxhQUFhLE1BQU0sT0FBTyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksTUFBTSxLQUFLLFlBQVksV0FBVyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssVUFBVSxVQUFVLEtBQUssTUFBTSxZQUFZLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLEtBQUssS0FBSyxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssS0FBSyxLQUFLLFlBQVksYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLFVBQVUsS0FBSyxLQUFLLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxVQUFVLEtBQUssS0FBSyxLQUFLLEtBQUssVUFBVSxLQUFLLEtBQUssVUFBVSxLQUFLLDBFQUEwRSw0QkFBNEIscUJBQXFCLGtCQUFrQixlQUFlLHVCQUF1Qix1QkFBdUIsZUFBZSw0QkFBNEIsNEJBQTRCLG1CQUFtQixjQUFjLG9CQUFvQixzQkFBc0IsdUJBQXVCLHVCQUF1Qixx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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCQUE2QixpQ0FBaUM7QUFDOUQsMkJBQTJCLGdDQUFnQztBQUMzRDtBQUNBLCtCQUErQixtQkFBbUI7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDhCQUE4QixrQkFBa0I7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDRCQUE0QjtBQUMxQztBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FBQ0EsMENBQTBDLDZCQUE2QjtBQUN2RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixrQ0FBa0MsRUFBRTtBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSw4QkFBOEIsa0NBQWtDLEVBQUU7QUFDbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxrQkFBa0I7QUFDckQsaUNBQWlDLCtCQUErQjtBQUNoRSx1Q0FBdUMsdUJBQXVCO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMkJBQTJCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkMsS0FBSztBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsaUJBQWlCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLGtCQUFrQjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQix3Q0FBd0M7QUFDdkU7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdDQUF3QztBQUN2RSx3Q0FBd0MsMkJBQTJCO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjI0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0NyZWF0ZS52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTY4NjRmOWVhXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ3JlYXRlLnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IG51bGxcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9tZW51cy9DcmVhdGUudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTY4NjRmOWVhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNjg2NGY5ZWFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL21lbnVzL0NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDEwNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAyNCIsIiFmdW5jdGlvbihlLHQpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcIm9iamVjdFwiPT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPXQoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtdLHQpOlwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzP2V4cG9ydHMuVnVlTXVsdGlzZWxlY3Q9dCgpOmUuVnVlTXVsdGlzZWxlY3Q9dCgpfSh0aGlzLGZ1bmN0aW9uKCl7cmV0dXJuIGZ1bmN0aW9uKGUpe2Z1bmN0aW9uIHQobil7aWYoaVtuXSlyZXR1cm4gaVtuXS5leHBvcnRzO3ZhciBzPWlbbl09e2k6bixsOiExLGV4cG9ydHM6e319O3JldHVybiBlW25dLmNhbGwocy5leHBvcnRzLHMscy5leHBvcnRzLHQpLHMubD0hMCxzLmV4cG9ydHN9dmFyIGk9e307cmV0dXJuIHQubT1lLHQuYz1pLHQuaT1mdW5jdGlvbihlKXtyZXR1cm4gZX0sdC5kPWZ1bmN0aW9uKGUsaSxuKXt0Lm8oZSxpKXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsaSx7Y29uZmlndXJhYmxlOiExLGVudW1lcmFibGU6ITAsZ2V0Om59KX0sdC5uPWZ1bmN0aW9uKGUpe3ZhciBpPWUmJmUuX19lc01vZHVsZT9mdW5jdGlvbigpe3JldHVybiBlLmRlZmF1bHR9OmZ1bmN0aW9uKCl7cmV0dXJuIGV9O3JldHVybiB0LmQoaSxcImFcIixpKSxpfSx0Lm89ZnVuY3Rpb24oZSx0KXtyZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGUsdCl9LHQucD1cIi9cIix0KHQucz00KX0oW2Z1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUsdCxpKXtyZXR1cm4gdCBpbiBlP09iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHQse3ZhbHVlOmksZW51bWVyYWJsZTohMCxjb25maWd1cmFibGU6ITAsd3JpdGFibGU6ITB9KTplW3RdPWksZX1mdW5jdGlvbiBzKGUpe3JldHVybiAwIT09ZSYmKCEoIUFycmF5LmlzQXJyYXkoZSl8fDAhPT1lLmxlbmd0aCl8fCFlKX1mdW5jdGlvbiBvKGUsdCl7cmV0dXJuIHZvaWQgMD09PWUmJihlPVwidW5kZWZpbmVkXCIpLG51bGw9PT1lJiYoZT1cIm51bGxcIiksITE9PT1lJiYoZT1cImZhbHNlXCIpLC0xIT09ZS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZih0LnRyaW0oKSl9ZnVuY3Rpb24gbChlLHQsaSxuKXtyZXR1cm4gZS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIG8obihlLGkpLHQpfSl9ZnVuY3Rpb24gcihlKXtyZXR1cm4gZS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIWUuJGlzTGFiZWx9KX1mdW5jdGlvbiBhKGUsdCl7cmV0dXJuIGZ1bmN0aW9uKGkpe3JldHVybiBpLnJlZHVjZShmdW5jdGlvbihpLG4pe3JldHVybiBuW2VdJiZuW2VdLmxlbmd0aD8oaS5wdXNoKHskZ3JvdXBMYWJlbDpuW3RdLCRpc0xhYmVsOiEwfSksaS5jb25jYXQobltlXSkpOml9LFtdKX19ZnVuY3Rpb24gdShlLHQsaSxzLG8pe3JldHVybiBmdW5jdGlvbihyKXtyZXR1cm4gci5tYXAoZnVuY3Rpb24ocil7dmFyIGE7aWYoIXJbaV0pcmV0dXJuIGNvbnNvbGUud2FybihcIk9wdGlvbnMgcGFzc2VkIHRvIHZ1ZS1tdWx0aXNlbGVjdCBkbyBub3QgY29udGFpbiBncm91cHMsIGRlc3BpdGUgdGhlIGNvbmZpZy5cIiksW107dmFyIHU9bChyW2ldLGUsdCxvKTtyZXR1cm4gdS5sZW5ndGg/KGE9e30sbihhLHMscltzXSksbihhLGksdSksYSk6W119KX19T2JqZWN0LmRlZmluZVByb3BlcnR5KHQsXCJfX2VzTW9kdWxlXCIse3ZhbHVlOiEwfSk7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0saD1pKDIpLHA9ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJmUuX19lc01vZHVsZT9lOntkZWZhdWx0OmV9fShoKSxkPWZ1bmN0aW9uKCl7Zm9yKHZhciBlPWFyZ3VtZW50cy5sZW5ndGgsdD1BcnJheShlKSxpPTA7aTxlO2krKyl0W2ldPWFyZ3VtZW50c1tpXTtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIHQucmVkdWNlKGZ1bmN0aW9uKGUsdCl7cmV0dXJuIHQoZSl9LGUpfX07dC5kZWZhdWx0PXtkYXRhOmZ1bmN0aW9uKCl7cmV0dXJue3NlYXJjaDpcIlwiLGlzT3BlbjohMSxwcmVmZmVyZWRPcGVuRGlyZWN0aW9uOlwiYmVsb3dcIixvcHRpbWl6ZWRIZWlnaHQ6dGhpcy5tYXhIZWlnaHQsaW50ZXJuYWxWYWx1ZTp0aGlzLnZhbHVlfHwwPT09dGhpcy52YWx1ZT8oMCxwLmRlZmF1bHQpKEFycmF5LmlzQXJyYXkodGhpcy52YWx1ZSk/dGhpcy52YWx1ZTpbdGhpcy52YWx1ZV0pOltdfX0scHJvcHM6e2ludGVybmFsU2VhcmNoOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0sb3B0aW9uczp7dHlwZTpBcnJheSxyZXF1aXJlZDohMH0sbXVsdGlwbGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSx2YWx1ZTp7dHlwZTpudWxsLGRlZmF1bHQ6ZnVuY3Rpb24oKXtyZXR1cm5bXX19LHRyYWNrQnk6e3R5cGU6U3RyaW5nfSxsYWJlbDp7dHlwZTpTdHJpbmd9LHNlYXJjaGFibGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxjbGVhck9uU2VsZWN0Ont0eXBlOkJvb2xlYW4sZGVmYXVsdDohMH0saGlkZVNlbGVjdGVkOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0scGxhY2Vob2xkZXI6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJTZWxlY3Qgb3B0aW9uXCJ9LGFsbG93RW1wdHk6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiEwfSxyZXNldEFmdGVyOnt0eXBlOkJvb2xlYW4sZGVmYXVsdDohMX0sY2xvc2VPblNlbGVjdDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGN1c3RvbUxhYmVsOnt0eXBlOkZ1bmN0aW9uLGRlZmF1bHQ6ZnVuY3Rpb24oZSx0KXtyZXR1cm4gcyhlKT9cIlwiOnQ/ZVt0XTplfX0sdGFnZ2FibGU6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSx0YWdQbGFjZWhvbGRlcjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlByZXNzIGVudGVyIHRvIGNyZWF0ZSBhIHRhZ1wifSx0YWdQb3NpdGlvbjp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcInRvcFwifSxtYXg6e3R5cGU6W051bWJlcixCb29sZWFuXSxkZWZhdWx0OiExfSxpZDp7ZGVmYXVsdDpudWxsfSxvcHRpb25zTGltaXQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MWUzfSxncm91cFZhbHVlczp7dHlwZTpTdHJpbmd9LGdyb3VwTGFiZWw6e3R5cGU6U3RyaW5nfSxibG9ja0tleXM6e3R5cGU6QXJyYXksZGVmYXVsdDpmdW5jdGlvbigpe3JldHVybltdfX0scHJlc2VydmVTZWFyY2g6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfX0sbW91bnRlZDpmdW5jdGlvbigpe3RoaXMubXVsdGlwbGV8fHRoaXMuY2xlYXJPblNlbGVjdHx8Y29uc29sZS53YXJuKFwiW1Z1ZS1NdWx0aXNlbGVjdCB3YXJuXTogQ2xlYXJPblNlbGVjdCBhbmQgTXVsdGlwbGUgcHJvcHMgY2Fu4oCZdCBiZSBib3RoIHNldCB0byBmYWxzZS5cIiksIXRoaXMubXVsdGlwbGUmJnRoaXMubWF4JiZjb25zb2xlLndhcm4oXCJbVnVlLU11bHRpc2VsZWN0IHdhcm5dOiBNYXggcHJvcCBzaG91bGQgbm90IGJlIHVzZWQgd2hlbiBwcm9wIE11bHRpcGxlIGVxdWFscyBmYWxzZS5cIil9LGNvbXB1dGVkOntmaWx0ZXJlZE9wdGlvbnM6ZnVuY3Rpb24oKXt2YXIgZT10aGlzLnNlYXJjaHx8XCJcIix0PWUudG9Mb3dlckNhc2UoKS50cmltKCksaT10aGlzLm9wdGlvbnMuY29uY2F0KCk7cmV0dXJuIGk9dGhpcy5pbnRlcm5hbFNlYXJjaD90aGlzLmdyb3VwVmFsdWVzP3RoaXMuZmlsdGVyQW5kRmxhdChpLHQsdGhpcy5sYWJlbCk6bChpLHQsdGhpcy5sYWJlbCx0aGlzLmN1c3RvbUxhYmVsKTp0aGlzLmdyb3VwVmFsdWVzP2EodGhpcy5ncm91cFZhbHVlcyx0aGlzLmdyb3VwTGFiZWwpKGkpOmksaT10aGlzLmhpZGVTZWxlY3RlZD9pLmZpbHRlcih0aGlzLmlzTm90U2VsZWN0ZWQpOmksdGhpcy50YWdnYWJsZSYmdC5sZW5ndGgmJiF0aGlzLmlzRXhpc3RpbmdPcHRpb24odCkmJihcImJvdHRvbVwiPT09dGhpcy50YWdQb3NpdGlvbj9pLnB1c2goe2lzVGFnOiEwLGxhYmVsOmV9KTppLnVuc2hpZnQoe2lzVGFnOiEwLGxhYmVsOmV9KSksaS5zbGljZSgwLHRoaXMub3B0aW9uc0xpbWl0KX0sdmFsdWVLZXlzOmZ1bmN0aW9uKCl7dmFyIGU9dGhpcztyZXR1cm4gdGhpcy50cmFja0J5P3RoaXMuaW50ZXJuYWxWYWx1ZS5tYXAoZnVuY3Rpb24odCl7cmV0dXJuIHRbZS50cmFja0J5XX0pOnRoaXMuaW50ZXJuYWxWYWx1ZX0sb3B0aW9uS2V5czpmdW5jdGlvbigpe3ZhciBlPXRoaXM7cmV0dXJuKHRoaXMuZ3JvdXBWYWx1ZXM/dGhpcy5mbGF0QW5kU3RyaXAodGhpcy5vcHRpb25zKTp0aGlzLm9wdGlvbnMpLm1hcChmdW5jdGlvbih0KXtyZXR1cm4gZS5jdXN0b21MYWJlbCh0LGUubGFiZWwpLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKX0pfSxjdXJyZW50T3B0aW9uTGFiZWw6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5tdWx0aXBsZT90aGlzLnNlYXJjaGFibGU/XCJcIjp0aGlzLnBsYWNlaG9sZGVyOnRoaXMuaW50ZXJuYWxWYWx1ZS5sZW5ndGg/dGhpcy5nZXRPcHRpb25MYWJlbCh0aGlzLmludGVybmFsVmFsdWVbMF0pOnRoaXMuc2VhcmNoYWJsZT9cIlwiOnRoaXMucGxhY2Vob2xkZXJ9fSx3YXRjaDp7aW50ZXJuYWxWYWx1ZTpmdW5jdGlvbihlLHQpe3RoaXMucmVzZXRBZnRlciYmdGhpcy5pbnRlcm5hbFZhbHVlLmxlbmd0aCYmKHRoaXMuc2VhcmNoPVwiXCIsdGhpcy5pbnRlcm5hbFZhbHVlPVtdKX0sc2VhcmNoOmZ1bmN0aW9uKCl7dGhpcy4kZW1pdChcInNlYXJjaC1jaGFuZ2VcIix0aGlzLnNlYXJjaCx0aGlzLmlkKX0sdmFsdWU6ZnVuY3Rpb24oZSl7dGhpcy5pbnRlcm5hbFZhbHVlPXRoaXMuZ2V0SW50ZXJuYWxWYWx1ZShlKX19LG1ldGhvZHM6e2dldFZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubXVsdGlwbGU/KDAscC5kZWZhdWx0KSh0aGlzLmludGVybmFsVmFsdWUpOjA9PT10aGlzLmludGVybmFsVmFsdWUubGVuZ3RoP251bGw6KDAscC5kZWZhdWx0KSh0aGlzLmludGVybmFsVmFsdWVbMF0pfSxnZXRJbnRlcm5hbFZhbHVlOmZ1bmN0aW9uKGUpe3JldHVybiBudWxsPT09ZXx8dm9pZCAwPT09ZT9bXTp0aGlzLm11bHRpcGxlPygwLHAuZGVmYXVsdCkoZSk6KDAscC5kZWZhdWx0KShbZV0pfSxmaWx0ZXJBbmRGbGF0OmZ1bmN0aW9uKGUsdCxpKXtyZXR1cm4gZCh1KHQsaSx0aGlzLmdyb3VwVmFsdWVzLHRoaXMuZ3JvdXBMYWJlbCx0aGlzLmN1c3RvbUxhYmVsKSxhKHRoaXMuZ3JvdXBWYWx1ZXMsdGhpcy5ncm91cExhYmVsKSkoZSl9LGZsYXRBbmRTdHJpcDpmdW5jdGlvbihlKXtyZXR1cm4gZChhKHRoaXMuZ3JvdXBWYWx1ZXMsdGhpcy5ncm91cExhYmVsKSxyKShlKX0sdXBkYXRlU2VhcmNoOmZ1bmN0aW9uKGUpe3RoaXMuc2VhcmNoPWV9LGlzRXhpc3RpbmdPcHRpb246ZnVuY3Rpb24oZSl7cmV0dXJuISF0aGlzLm9wdGlvbnMmJnRoaXMub3B0aW9uS2V5cy5pbmRleE9mKGUpPi0xfSxpc1NlbGVjdGVkOmZ1bmN0aW9uKGUpe3ZhciB0PXRoaXMudHJhY2tCeT9lW3RoaXMudHJhY2tCeV06ZTtyZXR1cm4gdGhpcy52YWx1ZUtleXMuaW5kZXhPZih0KT4tMX0saXNOb3RTZWxlY3RlZDpmdW5jdGlvbihlKXtyZXR1cm4hdGhpcy5pc1NlbGVjdGVkKGUpfSxnZXRPcHRpb25MYWJlbDpmdW5jdGlvbihlKXtpZihzKGUpKXJldHVyblwiXCI7aWYoZS5pc1RhZylyZXR1cm4gZS5sYWJlbDtpZihlLiRpc0xhYmVsKXJldHVybiBlLiRncm91cExhYmVsO3ZhciB0PXRoaXMuY3VzdG9tTGFiZWwoZSx0aGlzLmxhYmVsKTtyZXR1cm4gcyh0KT9cIlwiOnR9LHNlbGVjdDpmdW5jdGlvbihlLHQpe2lmKCEoLTEhPT10aGlzLmJsb2NrS2V5cy5pbmRleE9mKHQpfHx0aGlzLmRpc2FibGVkfHxlLiRpc0xhYmVsfHxlLiRpc0Rpc2FibGVkKSYmKCF0aGlzLm1heHx8IXRoaXMubXVsdGlwbGV8fHRoaXMuaW50ZXJuYWxWYWx1ZS5sZW5ndGghPT10aGlzLm1heCkmJihcIlRhYlwiIT09dHx8dGhpcy5wb2ludGVyRGlydHkpKXtpZihlLmlzVGFnKXRoaXMuJGVtaXQoXCJ0YWdcIixlLmxhYmVsLHRoaXMuaWQpLHRoaXMuc2VhcmNoPVwiXCIsdGhpcy5jbG9zZU9uU2VsZWN0JiYhdGhpcy5tdWx0aXBsZSYmdGhpcy5kZWFjdGl2YXRlKCk7ZWxzZXtpZih0aGlzLmlzU2VsZWN0ZWQoZSkpcmV0dXJuIHZvaWQoXCJUYWJcIiE9PXQmJnRoaXMucmVtb3ZlRWxlbWVudChlKSk7dGhpcy5tdWx0aXBsZT90aGlzLmludGVybmFsVmFsdWUucHVzaChlKTp0aGlzLmludGVybmFsVmFsdWU9W2VdLHRoaXMuJGVtaXQoXCJzZWxlY3RcIiwoMCxwLmRlZmF1bHQpKGUpLHRoaXMuaWQpLHRoaXMuJGVtaXQoXCJpbnB1dFwiLHRoaXMuZ2V0VmFsdWUoKSx0aGlzLmlkKSx0aGlzLmNsZWFyT25TZWxlY3QmJih0aGlzLnNlYXJjaD1cIlwiKX10aGlzLmNsb3NlT25TZWxlY3QmJnRoaXMuZGVhY3RpdmF0ZSgpfX0scmVtb3ZlRWxlbWVudDpmdW5jdGlvbihlKXt2YXIgdD0hKGFyZ3VtZW50cy5sZW5ndGg+MSYmdm9pZCAwIT09YXJndW1lbnRzWzFdKXx8YXJndW1lbnRzWzFdO2lmKCF0aGlzLmRpc2FibGVkKXtpZighdGhpcy5hbGxvd0VtcHR5JiZ0aGlzLmludGVybmFsVmFsdWUubGVuZ3RoPD0xKXJldHVybiB2b2lkIHRoaXMuZGVhY3RpdmF0ZSgpO3ZhciBpPVwib2JqZWN0XCI9PT0odm9pZCAwPT09ZT9cInVuZGVmaW5lZFwiOmMoZSkpP3RoaXMudmFsdWVLZXlzLmluZGV4T2YoZVt0aGlzLnRyYWNrQnldKTp0aGlzLnZhbHVlS2V5cy5pbmRleE9mKGUpO3RoaXMuaW50ZXJuYWxWYWx1ZS5zcGxpY2UoaSwxKSx0aGlzLiRlbWl0KFwiaW5wdXRcIix0aGlzLmdldFZhbHVlKCksdGhpcy5pZCksdGhpcy4kZW1pdChcInJlbW92ZVwiLCgwLHAuZGVmYXVsdCkoZSksdGhpcy5pZCksdGhpcy5jbG9zZU9uU2VsZWN0JiZ0JiZ0aGlzLmRlYWN0aXZhdGUoKX19LHJlbW92ZUxhc3RFbGVtZW50OmZ1bmN0aW9uKCl7LTE9PT10aGlzLmJsb2NrS2V5cy5pbmRleE9mKFwiRGVsZXRlXCIpJiYwPT09dGhpcy5zZWFyY2gubGVuZ3RoJiZBcnJheS5pc0FycmF5KHRoaXMuaW50ZXJuYWxWYWx1ZSkmJnRoaXMucmVtb3ZlRWxlbWVudCh0aGlzLmludGVybmFsVmFsdWVbdGhpcy5pbnRlcm5hbFZhbHVlLmxlbmd0aC0xXSwhMSl9LGFjdGl2YXRlOmZ1bmN0aW9uKCl7dmFyIGU9dGhpczt0aGlzLmlzT3Blbnx8dGhpcy5kaXNhYmxlZHx8KHRoaXMuYWRqdXN0UG9zaXRpb24oKSx0aGlzLmdyb3VwVmFsdWVzJiYwPT09dGhpcy5wb2ludGVyJiZ0aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgmJih0aGlzLnBvaW50ZXI9MSksdGhpcy5pc09wZW49ITAsdGhpcy5zZWFyY2hhYmxlPyh0aGlzLnByZXNlcnZlU2VhcmNofHwodGhpcy5zZWFyY2g9XCJcIiksdGhpcy4kbmV4dFRpY2soZnVuY3Rpb24oKXtyZXR1cm4gZS4kcmVmcy5zZWFyY2guZm9jdXMoKX0pKTp0aGlzLiRlbC5mb2N1cygpLHRoaXMuJGVtaXQoXCJvcGVuXCIsdGhpcy5pZCkpfSxkZWFjdGl2YXRlOmZ1bmN0aW9uKCl7dGhpcy5pc09wZW4mJih0aGlzLmlzT3Blbj0hMSx0aGlzLnNlYXJjaGFibGU/dGhpcy4kcmVmcy5zZWFyY2guYmx1cigpOnRoaXMuJGVsLmJsdXIoKSx0aGlzLnByZXNlcnZlU2VhcmNofHwodGhpcy5zZWFyY2g9XCJcIiksdGhpcy4kZW1pdChcImNsb3NlXCIsdGhpcy5nZXRWYWx1ZSgpLHRoaXMuaWQpKX0sdG9nZ2xlOmZ1bmN0aW9uKCl7dGhpcy5pc09wZW4/dGhpcy5kZWFjdGl2YXRlKCk6dGhpcy5hY3RpdmF0ZSgpfSxhZGp1c3RQb3NpdGlvbjpmdW5jdGlvbigpe2lmKFwidW5kZWZpbmVkXCIhPXR5cGVvZiB3aW5kb3cpe3ZhciBlPXRoaXMuJGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCx0PXdpbmRvdy5pbm5lckhlaWdodC10aGlzLiRlbC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5ib3R0b207dD50aGlzLm1heEhlaWdodHx8dD5lfHxcImJlbG93XCI9PT10aGlzLm9wZW5EaXJlY3Rpb258fFwiYm90dG9tXCI9PT10aGlzLm9wZW5EaXJlY3Rpb24/KHRoaXMucHJlZmZlcmVkT3BlbkRpcmVjdGlvbj1cImJlbG93XCIsdGhpcy5vcHRpbWl6ZWRIZWlnaHQ9TWF0aC5taW4odC00MCx0aGlzLm1heEhlaWdodCkpOih0aGlzLnByZWZmZXJlZE9wZW5EaXJlY3Rpb249XCJhYm92ZVwiLHRoaXMub3B0aW1pemVkSGVpZ2h0PU1hdGgubWluKGUtNDAsdGhpcy5tYXhIZWlnaHQpKX19fX19LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtPYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZmF1bHQ9e2RhdGE6ZnVuY3Rpb24oKXtyZXR1cm57cG9pbnRlcjowLHBvaW50ZXJEaXJ0eTohMX19LHByb3BzOntzaG93UG9pbnRlcjp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LG9wdGlvbkhlaWdodDp7dHlwZTpOdW1iZXIsZGVmYXVsdDo0MH19LGNvbXB1dGVkOntwb2ludGVyUG9zaXRpb246ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5wb2ludGVyKnRoaXMub3B0aW9uSGVpZ2h0fSx2aXNpYmxlRWxlbWVudHM6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vcHRpbWl6ZWRIZWlnaHQvdGhpcy5vcHRpb25IZWlnaHR9fSx3YXRjaDp7ZmlsdGVyZWRPcHRpb25zOmZ1bmN0aW9uKCl7dGhpcy5wb2ludGVyQWRqdXN0KCl9LGlzT3BlbjpmdW5jdGlvbigpe3RoaXMucG9pbnRlckRpcnR5PSExfX0sbWV0aG9kczp7b3B0aW9uSGlnaGxpZ2h0OmZ1bmN0aW9uKGUsdCl7cmV0dXJue1wibXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0XCI6ZT09PXRoaXMucG9pbnRlciYmdGhpcy5zaG93UG9pbnRlcixcIm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkXCI6dGhpcy5pc1NlbGVjdGVkKHQpfX0sYWRkUG9pbnRlckVsZW1lbnQ6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06XCJFbnRlclwiLHQ9ZS5rZXk7dGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoPjAmJnRoaXMuc2VsZWN0KHRoaXMuZmlsdGVyZWRPcHRpb25zW3RoaXMucG9pbnRlcl0sdCksdGhpcy5wb2ludGVyUmVzZXQoKX0scG9pbnRlckZvcndhcmQ6ZnVuY3Rpb24oKXt0aGlzLnBvaW50ZXI8dGhpcy5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoLTEmJih0aGlzLnBvaW50ZXIrKyx0aGlzLiRyZWZzLmxpc3Quc2Nyb2xsVG9wPD10aGlzLnBvaW50ZXJQb3NpdGlvbi0odGhpcy52aXNpYmxlRWxlbWVudHMtMSkqdGhpcy5vcHRpb25IZWlnaHQmJih0aGlzLiRyZWZzLmxpc3Quc2Nyb2xsVG9wPXRoaXMucG9pbnRlclBvc2l0aW9uLSh0aGlzLnZpc2libGVFbGVtZW50cy0xKSp0aGlzLm9wdGlvbkhlaWdodCksdGhpcy5maWx0ZXJlZE9wdGlvbnNbdGhpcy5wb2ludGVyXS4kaXNMYWJlbCYmdGhpcy5wb2ludGVyRm9yd2FyZCgpKSx0aGlzLnBvaW50ZXJEaXJ0eT0hMH0scG9pbnRlckJhY2t3YXJkOmZ1bmN0aW9uKCl7dGhpcy5wb2ludGVyPjA/KHRoaXMucG9pbnRlci0tLHRoaXMuJHJlZnMubGlzdC5zY3JvbGxUb3A+PXRoaXMucG9pbnRlclBvc2l0aW9uJiYodGhpcy4kcmVmcy5saXN0LnNjcm9sbFRvcD10aGlzLnBvaW50ZXJQb3NpdGlvbiksdGhpcy5maWx0ZXJlZE9wdGlvbnNbdGhpcy5wb2ludGVyXS4kaXNMYWJlbCYmdGhpcy5wb2ludGVyQmFja3dhcmQoKSk6dGhpcy5maWx0ZXJlZE9wdGlvbnNbMF0uJGlzTGFiZWwmJnRoaXMucG9pbnRlckZvcndhcmQoKSx0aGlzLnBvaW50ZXJEaXJ0eT0hMH0scG9pbnRlclJlc2V0OmZ1bmN0aW9uKCl7dGhpcy5jbG9zZU9uU2VsZWN0JiYodGhpcy5wb2ludGVyPTAsdGhpcy4kcmVmcy5saXN0JiYodGhpcy4kcmVmcy5saXN0LnNjcm9sbFRvcD0wKSl9LHBvaW50ZXJBZGp1c3Q6ZnVuY3Rpb24oKXt0aGlzLnBvaW50ZXI+PXRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aC0xJiYodGhpcy5wb2ludGVyPXRoaXMuZmlsdGVyZWRPcHRpb25zLmxlbmd0aD90aGlzLmZpbHRlcmVkT3B0aW9ucy5sZW5ndGgtMTowKX0scG9pbnRlclNldDpmdW5jdGlvbihlKXt0aGlzLnBvaW50ZXI9ZSx0aGlzLnBvaW50ZXJEaXJ0eT0hMH19fX0sZnVuY3Rpb24oZSx0LGkpe1widXNlIHN0cmljdFwiO2Z1bmN0aW9uIG4oZSl7aWYoQXJyYXkuaXNBcnJheShlKSlyZXR1cm4gZS5tYXAobik7aWYoZSYmXCJvYmplY3RcIj09PSh2b2lkIDA9PT1lP1widW5kZWZpbmVkXCI6cyhlKSkpe2Zvcih2YXIgdD17fSxpPU9iamVjdC5rZXlzKGUpLG89MCxsPWkubGVuZ3RoO288bDtvKyspe3ZhciByPWlbb107dFtyXT1uKGVbcl0pfXJldHVybiB0fXJldHVybiBlfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPVwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmXCJzeW1ib2xcIj09dHlwZW9mIFN5bWJvbC5pdGVyYXRvcj9mdW5jdGlvbihlKXtyZXR1cm4gdHlwZW9mIGV9OmZ1bmN0aW9uKGUpe3JldHVybiBlJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBTeW1ib2wmJmUuY29uc3RydWN0b3I9PT1TeW1ib2wmJmUhPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIGV9O3QuZGVmYXVsdD1ufSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7ZnVuY3Rpb24gbihlKXtpKDYpfU9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0LFwiX19lc01vZHVsZVwiLHt2YWx1ZTohMH0pO3ZhciBzPWkoNSksbz1pLm4ocyksbD1pKDgpLHI9aSg3KSxhPW4sdT1yKG8uYSxsLmEsITEsYSxudWxsLG51bGwpO3QuZGVmYXVsdD11LmV4cG9ydHN9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KSx0LmRlZXBDbG9uZT10LnBvaW50ZXJNaXhpbj10Lm11bHRpc2VsZWN0TWl4aW49dC5NdWx0aXNlbGVjdD12b2lkIDA7dmFyIHM9aSgzKSxvPW4ocyksbD1pKDApLHI9bihsKSxhPWkoMSksdT1uKGEpLGM9aSgyKSxoPW4oYyk7dC5kZWZhdWx0PW8uZGVmYXVsdCx0Lk11bHRpc2VsZWN0PW8uZGVmYXVsdCx0Lm11bHRpc2VsZWN0TWl4aW49ci5kZWZhdWx0LHQucG9pbnRlck1peGluPXUuZGVmYXVsdCx0LmRlZXBDbG9uZT1oLmRlZmF1bHR9LGZ1bmN0aW9uKGUsdCxpKXtcInVzZSBzdHJpY3RcIjtmdW5jdGlvbiBuKGUpe3JldHVybiBlJiZlLl9fZXNNb2R1bGU/ZTp7ZGVmYXVsdDplfX1PYmplY3QuZGVmaW5lUHJvcGVydHkodCxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KTt2YXIgcz1pKDApLG89bihzKSxsPWkoMSkscj1uKGwpO3QuZGVmYXVsdD17bmFtZTpcInZ1ZS1tdWx0aXNlbGVjdFwiLG1peGluczpbby5kZWZhdWx0LHIuZGVmYXVsdF0scHJvcHM6e25hbWU6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJcIn0sc2VsZWN0TGFiZWw6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJQcmVzcyBlbnRlciB0byBzZWxlY3RcIn0sc2VsZWN0ZWRMYWJlbDp7dHlwZTpTdHJpbmcsZGVmYXVsdDpcIlNlbGVjdGVkXCJ9LGRlc2VsZWN0TGFiZWw6e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJQcmVzcyBlbnRlciB0byByZW1vdmVcIn0sc2hvd0xhYmVsczp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LGxpbWl0Ont0eXBlOk51bWJlcixkZWZhdWx0Ojk5OTk5fSxtYXhIZWlnaHQ6e3R5cGU6TnVtYmVyLGRlZmF1bHQ6MzAwfSxsaW1pdFRleHQ6e3R5cGU6RnVuY3Rpb24sZGVmYXVsdDpmdW5jdGlvbihlKXtyZXR1cm5cImFuZCBcIitlK1wiIG1vcmVcIn19LGxvYWRpbmc6e3R5cGU6Qm9vbGVhbixkZWZhdWx0OiExfSxkaXNhYmxlZDp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITF9LG9wZW5EaXJlY3Rpb246e3R5cGU6U3RyaW5nLGRlZmF1bHQ6XCJcIn0sc2hvd05vUmVzdWx0czp7dHlwZTpCb29sZWFuLGRlZmF1bHQ6ITB9LHRhYmluZGV4Ont0eXBlOk51bWJlcixkZWZhdWx0OjB9fSxjb21wdXRlZDp7dmlzaWJsZVZhbHVlOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMubXVsdGlwbGU/dGhpcy5pbnRlcm5hbFZhbHVlLnNsaWNlKDAsdGhpcy5saW1pdCk6W119LGRlc2VsZWN0TGFiZWxUZXh0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2hvd0xhYmVscz90aGlzLmRlc2VsZWN0TGFiZWw6XCJcIn0sc2VsZWN0TGFiZWxUZXh0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2hvd0xhYmVscz90aGlzLnNlbGVjdExhYmVsOlwiXCJ9LHNlbGVjdGVkTGFiZWxUZXh0OmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuc2hvd0xhYmVscz90aGlzLnNlbGVjdGVkTGFiZWw6XCJcIn0saW5wdXRTdHlsZTpmdW5jdGlvbigpe2lmKHRoaXMubXVsdGlwbGUmJnRoaXMudmFsdWUmJnRoaXMudmFsdWUubGVuZ3RoKXJldHVybiB0aGlzLmlzT3Blbj97d2lkdGg6XCJhdXRvXCJ9Ont3aWR0aDpcIjBcIixwb3NpdGlvbjpcImFic29sdXRlXCJ9fSxjb250ZW50U3R5bGU6ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5vcHRpb25zLmxlbmd0aD97ZGlzcGxheTpcImlubGluZS1ibG9ja1wifTp7ZGlzcGxheTpcImJsb2NrXCJ9fSxpc0Fib3ZlOmZ1bmN0aW9uKCl7cmV0dXJuXCJhYm92ZVwiPT09dGhpcy5vcGVuRGlyZWN0aW9ufHxcInRvcFwiPT09dGhpcy5vcGVuRGlyZWN0aW9ufHxcImJlbG93XCIhPT10aGlzLm9wZW5EaXJlY3Rpb24mJlwiYm90dG9tXCIhPT10aGlzLm9wZW5EaXJlY3Rpb24mJlwiYWJvdmVcIj09PXRoaXMucHJlZmZlcmVkT3BlbkRpcmVjdGlvbn19fX0sZnVuY3Rpb24oZSx0KXt9LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCxpLG4scyxvKXt2YXIgbCxyPWU9ZXx8e30sYT10eXBlb2YgZS5kZWZhdWx0O1wib2JqZWN0XCIhPT1hJiZcImZ1bmN0aW9uXCIhPT1hfHwobD1lLHI9ZS5kZWZhdWx0KTt2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByP3Iub3B0aW9uczpyO3QmJih1LnJlbmRlcj10LnJlbmRlcix1LnN0YXRpY1JlbmRlckZucz10LnN0YXRpY1JlbmRlckZucyx1Ll9jb21waWxlZD0hMCksaSYmKHUuZnVuY3Rpb25hbD0hMCkscyYmKHUuX3Njb3BlSWQ9cyk7dmFyIGM7aWYobz8oYz1mdW5jdGlvbihlKXtlPWV8fHRoaXMuJHZub2RlJiZ0aGlzLiR2bm9kZS5zc3JDb250ZXh0fHx0aGlzLnBhcmVudCYmdGhpcy5wYXJlbnQuJHZub2RlJiZ0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCxlfHxcInVuZGVmaW5lZFwiPT10eXBlb2YgX19WVUVfU1NSX0NPTlRFWFRfX3x8KGU9X19WVUVfU1NSX0NPTlRFWFRfXyksbiYmbi5jYWxsKHRoaXMsZSksZSYmZS5fcmVnaXN0ZXJlZENvbXBvbmVudHMmJmUuX3JlZ2lzdGVyZWRDb21wb25lbnRzLmFkZChvKX0sdS5fc3NyUmVnaXN0ZXI9Yyk6biYmKGM9biksYyl7dmFyIGg9dS5mdW5jdGlvbmFsLHA9aD91LnJlbmRlcjp1LmJlZm9yZUNyZWF0ZTtoPyh1Ll9pbmplY3RTdHlsZXM9Yyx1LnJlbmRlcj1mdW5jdGlvbihlLHQpe3JldHVybiBjLmNhbGwodCkscChlLHQpfSk6dS5iZWZvcmVDcmVhdGU9cD9bXS5jb25jYXQocCxjKTpbY119cmV0dXJue2VzTW9kdWxlOmwsZXhwb3J0czpyLG9wdGlvbnM6dX19fSxmdW5jdGlvbihlLHQsaSl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG49ZnVuY3Rpb24oKXt2YXIgZT10aGlzLHQ9ZS4kY3JlYXRlRWxlbWVudCxpPWUuX3NlbGYuX2N8fHQ7cmV0dXJuIGkoXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdFwiLGNsYXNzOntcIm11bHRpc2VsZWN0LS1hY3RpdmVcIjplLmlzT3BlbixcIm11bHRpc2VsZWN0LS1kaXNhYmxlZFwiOmUuZGlzYWJsZWQsXCJtdWx0aXNlbGVjdC0tYWJvdmVcIjplLmlzQWJvdmV9LGF0dHJzOnt0YWJpbmRleDplLnNlYXJjaGFibGU/LTE6ZS50YWJpbmRleH0sb246e2ZvY3VzOmZ1bmN0aW9uKHQpe2UuYWN0aXZhdGUoKX0sYmx1cjpmdW5jdGlvbih0KXshZS5zZWFyY2hhYmxlJiZlLmRlYWN0aXZhdGUoKX0sa2V5ZG93bjpbZnVuY3Rpb24odCl7cmV0dXJuXCJidXR0b25cImluIHR8fCFlLl9rKHQua2V5Q29kZSxcImRvd25cIiw0MCx0LmtleSk/dC50YXJnZXQhPT10LmN1cnJlbnRUYXJnZXQ/bnVsbDoodC5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgZS5wb2ludGVyRm9yd2FyZCgpKTpudWxsfSxmdW5jdGlvbih0KXtyZXR1cm5cImJ1dHRvblwiaW4gdHx8IWUuX2sodC5rZXlDb2RlLFwidXBcIiwzOCx0LmtleSk/dC50YXJnZXQhPT10LmN1cnJlbnRUYXJnZXQ/bnVsbDoodC5wcmV2ZW50RGVmYXVsdCgpLHZvaWQgZS5wb2ludGVyQmFja3dhcmQoKSk6bnVsbH0sZnVuY3Rpb24odCl7cmV0dXJuXCJidXR0b25cImluIHR8fCFlLl9rKHQua2V5Q29kZSxcImVudGVyXCIsMTMsdC5rZXkpfHwhZS5fayh0LmtleUNvZGUsXCJ0YWJcIiw5LHQua2V5KT8odC5zdG9wUHJvcGFnYXRpb24oKSx0LnRhcmdldCE9PXQuY3VycmVudFRhcmdldD9udWxsOnZvaWQgZS5hZGRQb2ludGVyRWxlbWVudCh0KSk6bnVsbH1dLGtleXVwOmZ1bmN0aW9uKHQpe2lmKCEoXCJidXR0b25cImluIHQpJiZlLl9rKHQua2V5Q29kZSxcImVzY1wiLDI3LHQua2V5KSlyZXR1cm4gbnVsbDtlLmRlYWN0aXZhdGUoKX19fSxbZS5fdChcImNhcmV0XCIsW2koXCJkaXZcIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fc2VsZWN0XCIsb246e21vdXNlZG93bjpmdW5jdGlvbih0KXt0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSxlLnRvZ2dsZSgpfX19KV0se3RvZ2dsZTplLnRvZ2dsZX0pLGUuX3YoXCIgXCIpLGUuX3QoXCJjbGVhclwiLG51bGwse3NlYXJjaDplLnNlYXJjaH0pLGUuX3YoXCIgXCIpLGkoXCJkaXZcIix7cmVmOlwidGFnc1wiLHN0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3RhZ3NcIn0sW2koXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOmUudmlzaWJsZVZhbHVlLmxlbmd0aD4wLGV4cHJlc3Npb246XCJ2aXNpYmxlVmFsdWUubGVuZ3RoID4gMFwifV0sc3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fdGFncy13cmFwXCJ9LFtlLl9sKGUudmlzaWJsZVZhbHVlLGZ1bmN0aW9uKHQpe3JldHVybltlLl90KFwidGFnXCIsW2koXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3RhZ1wifSxbaShcInNwYW5cIix7ZG9tUHJvcHM6e3RleHRDb250ZW50OmUuX3MoZS5nZXRPcHRpb25MYWJlbCh0KSl9fSksZS5fdihcIiBcIiksaShcImlcIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fdGFnLWljb25cIixhdHRyczp7XCJhcmlhLWhpZGRlblwiOlwidHJ1ZVwiLHRhYmluZGV4OlwiMVwifSxvbjp7a2V5ZG93bjpmdW5jdGlvbihpKXtpZighKFwiYnV0dG9uXCJpbiBpKSYmZS5fayhpLmtleUNvZGUsXCJlbnRlclwiLDEzLGkua2V5KSlyZXR1cm4gbnVsbDtpLnByZXZlbnREZWZhdWx0KCksZS5yZW1vdmVFbGVtZW50KHQpfSxtb3VzZWRvd246ZnVuY3Rpb24oaSl7aS5wcmV2ZW50RGVmYXVsdCgpLGUucmVtb3ZlRWxlbWVudCh0KX19fSldKV0se29wdGlvbjp0LHNlYXJjaDplLnNlYXJjaCxyZW1vdmU6ZS5yZW1vdmVFbGVtZW50fSldfSldLDIpLGUuX3YoXCIgXCIpLGUuaW50ZXJuYWxWYWx1ZSYmZS5pbnRlcm5hbFZhbHVlLmxlbmd0aD5lLmxpbWl0P1tpKFwic3Ryb25nXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX3N0cm9uZ1wiLGRvbVByb3BzOnt0ZXh0Q29udGVudDplLl9zKGUubGltaXRUZXh0KGUuaW50ZXJuYWxWYWx1ZS5sZW5ndGgtZS5saW1pdCkpfX0pXTplLl9lKCksZS5fdihcIiBcIiksaShcInRyYW5zaXRpb25cIix7YXR0cnM6e25hbWU6XCJtdWx0aXNlbGVjdF9fbG9hZGluZ1wifX0sW2UuX3QoXCJsb2FkaW5nXCIsW2koXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOmUubG9hZGluZyxleHByZXNzaW9uOlwibG9hZGluZ1wifV0sc3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fc3Bpbm5lclwifSldKV0sMiksZS5fdihcIiBcIiksZS5zZWFyY2hhYmxlP2koXCJpbnB1dFwiLHtyZWY6XCJzZWFyY2hcIixzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19pbnB1dFwiLHN0eWxlOmUuaW5wdXRTdHlsZSxhdHRyczp7bmFtZTplLm5hbWUsaWQ6ZS5pZCx0eXBlOlwidGV4dFwiLGF1dG9jb21wbGV0ZTpcIm9mZlwiLHBsYWNlaG9sZGVyOmUucGxhY2Vob2xkZXIsZGlzYWJsZWQ6ZS5kaXNhYmxlZCx0YWJpbmRleDplLnRhYmluZGV4fSxkb21Qcm9wczp7dmFsdWU6ZS5pc09wZW4/ZS5zZWFyY2g6ZS5jdXJyZW50T3B0aW9uTGFiZWx9LG9uOntpbnB1dDpmdW5jdGlvbih0KXtlLnVwZGF0ZVNlYXJjaCh0LnRhcmdldC52YWx1ZSl9LGZvY3VzOmZ1bmN0aW9uKHQpe3QucHJldmVudERlZmF1bHQoKSxlLmFjdGl2YXRlKCl9LGJsdXI6ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLGUuZGVhY3RpdmF0ZSgpfSxrZXl1cDpmdW5jdGlvbih0KXtpZighKFwiYnV0dG9uXCJpbiB0KSYmZS5fayh0LmtleUNvZGUsXCJlc2NcIiwyNyx0LmtleSkpcmV0dXJuIG51bGw7ZS5kZWFjdGl2YXRlKCl9LGtleWRvd246W2Z1bmN0aW9uKHQpe2lmKCEoXCJidXR0b25cImluIHQpJiZlLl9rKHQua2V5Q29kZSxcImRvd25cIiw0MCx0LmtleSkpcmV0dXJuIG51bGw7dC5wcmV2ZW50RGVmYXVsdCgpLGUucG9pbnRlckZvcndhcmQoKX0sZnVuY3Rpb24odCl7aWYoIShcImJ1dHRvblwiaW4gdCkmJmUuX2sodC5rZXlDb2RlLFwidXBcIiwzOCx0LmtleSkpcmV0dXJuIG51bGw7dC5wcmV2ZW50RGVmYXVsdCgpLGUucG9pbnRlckJhY2t3YXJkKCl9LGZ1bmN0aW9uKHQpe3JldHVyblwiYnV0dG9uXCJpbiB0fHwhZS5fayh0LmtleUNvZGUsXCJlbnRlclwiLDEzLHQua2V5KT8odC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCksdC50YXJnZXQhPT10LmN1cnJlbnRUYXJnZXQ/bnVsbDp2b2lkIGUuYWRkUG9pbnRlckVsZW1lbnQodCkpOm51bGx9LGZ1bmN0aW9uKHQpe2lmKCEoXCJidXR0b25cImluIHQpJiZlLl9rKHQua2V5Q29kZSxcImRlbGV0ZVwiLFs4LDQ2XSx0LmtleSkpcmV0dXJuIG51bGw7dC5zdG9wUHJvcGFnYXRpb24oKSxlLnJlbW92ZUxhc3RFbGVtZW50KCl9XX19KTplLl9lKCksZS5fdihcIiBcIiksZS5zZWFyY2hhYmxlP2UuX2UoKTppKFwic3BhblwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19zaW5nbGVcIixkb21Qcm9wczp7dGV4dENvbnRlbnQ6ZS5fcyhlLmN1cnJlbnRPcHRpb25MYWJlbCl9LG9uOnttb3VzZWRvd246ZnVuY3Rpb24odCl7dC5wcmV2ZW50RGVmYXVsdCgpLGUudG9nZ2xlKHQpfX19KV0sMiksZS5fdihcIiBcIiksaShcInRyYW5zaXRpb25cIix7YXR0cnM6e25hbWU6XCJtdWx0aXNlbGVjdFwifX0sW2koXCJkaXZcIix7ZGlyZWN0aXZlczpbe25hbWU6XCJzaG93XCIscmF3TmFtZTpcInYtc2hvd1wiLHZhbHVlOmUuaXNPcGVuLGV4cHJlc3Npb246XCJpc09wZW5cIn1dLHJlZjpcImxpc3RcIixzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19jb250ZW50LXdyYXBwZXJcIixzdHlsZTp7bWF4SGVpZ2h0OmUub3B0aW1pemVkSGVpZ2h0K1wicHhcIn0sb246e2ZvY3VzOmUuYWN0aXZhdGUsbW91c2Vkb3duOmZ1bmN0aW9uKGUpe2UucHJldmVudERlZmF1bHQoKX19fSxbaShcInVsXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX2NvbnRlbnRcIixzdHlsZTplLmNvbnRlbnRTdHlsZX0sW2UuX3QoXCJiZWZvcmVMaXN0XCIpLGUuX3YoXCIgXCIpLGUubXVsdGlwbGUmJmUubWF4PT09ZS5pbnRlcm5hbFZhbHVlLmxlbmd0aD9pKFwibGlcIixbaShcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fb3B0aW9uXCJ9LFtlLl90KFwibWF4RWxlbWVudHNcIixbZS5fdihcIk1heGltdW0gb2YgXCIrZS5fcyhlLm1heCkrXCIgb3B0aW9ucyBzZWxlY3RlZC4gRmlyc3QgcmVtb3ZlIGEgc2VsZWN0ZWQgb3B0aW9uIHRvIHNlbGVjdCBhbm90aGVyLlwiKV0pXSwyKV0pOmUuX2UoKSxlLl92KFwiIFwiKSwhZS5tYXh8fGUuaW50ZXJuYWxWYWx1ZS5sZW5ndGg8ZS5tYXg/ZS5fbChlLmZpbHRlcmVkT3B0aW9ucyxmdW5jdGlvbih0LG4pe3JldHVybiBpKFwibGlcIix7a2V5Om4sc3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fZWxlbWVudFwifSxbdCYmKHQuJGlzTGFiZWx8fHQuJGlzRGlzYWJsZWQpP2UuX2UoKTppKFwic3BhblwiLHtzdGF0aWNDbGFzczpcIm11bHRpc2VsZWN0X19vcHRpb25cIixjbGFzczplLm9wdGlvbkhpZ2hsaWdodChuLHQpLGF0dHJzOntcImRhdGEtc2VsZWN0XCI6dCYmdC5pc1RhZz9lLnRhZ1BsYWNlaG9sZGVyOmUuc2VsZWN0TGFiZWxUZXh0LFwiZGF0YS1zZWxlY3RlZFwiOmUuc2VsZWN0ZWRMYWJlbFRleHQsXCJkYXRhLWRlc2VsZWN0XCI6ZS5kZXNlbGVjdExhYmVsVGV4dH0sb246e2NsaWNrOmZ1bmN0aW9uKGkpe2kuc3RvcFByb3BhZ2F0aW9uKCksZS5zZWxlY3QodCl9LG1vdXNlZW50ZXI6ZnVuY3Rpb24odCl7aWYodC50YXJnZXQhPT10LmN1cnJlbnRUYXJnZXQpcmV0dXJuIG51bGw7ZS5wb2ludGVyU2V0KG4pfX19LFtlLl90KFwib3B0aW9uXCIsW2koXCJzcGFuXCIsW2UuX3YoZS5fcyhlLmdldE9wdGlvbkxhYmVsKHQpKSldKV0se29wdGlvbjp0LHNlYXJjaDplLnNlYXJjaH0pXSwyKSxlLl92KFwiIFwiKSx0JiYodC4kaXNMYWJlbHx8dC4kaXNEaXNhYmxlZCk/aShcInNwYW5cIix7c3RhdGljQ2xhc3M6XCJtdWx0aXNlbGVjdF9fb3B0aW9uIG11bHRpc2VsZWN0X19vcHRpb24tLWRpc2FibGVkXCIsY2xhc3M6ZS5vcHRpb25IaWdobGlnaHQobix0KX0sW2UuX3QoXCJvcHRpb25cIixbaShcInNwYW5cIixbZS5fdihlLl9zKGUuZ2V0T3B0aW9uTGFiZWwodCkpKV0pXSx7b3B0aW9uOnQsc2VhcmNoOmUuc2VhcmNofSldLDIpOmUuX2UoKV0pfSk6ZS5fZSgpLGUuX3YoXCIgXCIpLGkoXCJsaVwiLHtkaXJlY3RpdmVzOlt7bmFtZTpcInNob3dcIixyYXdOYW1lOlwidi1zaG93XCIsdmFsdWU6ZS5zaG93Tm9SZXN1bHRzJiYwPT09ZS5maWx0ZXJlZE9wdGlvbnMubGVuZ3RoJiZlLnNlYXJjaCYmIWUubG9hZGluZyxleHByZXNzaW9uOlwic2hvd05vUmVzdWx0cyAmJiAoZmlsdGVyZWRPcHRpb25zLmxlbmd0aCA9PT0gMCAmJiBzZWFyY2ggJiYgIWxvYWRpbmcpXCJ9XX0sW2koXCJzcGFuXCIse3N0YXRpY0NsYXNzOlwibXVsdGlzZWxlY3RfX29wdGlvblwifSxbZS5fdChcIm5vUmVzdWx0XCIsW2UuX3YoXCJObyBlbGVtZW50cyBmb3VuZC4gQ29uc2lkZXIgY2hhbmdpbmcgdGhlIHNlYXJjaCBxdWVyeS5cIildKV0sMildKSxlLl92KFwiIFwiKSxlLl90KFwiYWZ0ZXJMaXN0XCIpXSwyKV0pXSldLDIpfSxzPVtdLG89e3JlbmRlcjpuLHN0YXRpY1JlbmRlckZuczpzfTt0LmE9b31dKX0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uanNcbi8vIG1vZHVsZSBpZCA9IDEwOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyAyOSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWI1MmU5MjdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlRm9ybS52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Z1ZUZvcm0udnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Z1ZUZvcm0udnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi0xYjUyZTkyN1wiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTFiNTJlOTI3XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xYjUyZTkyN1xcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVGb3JtLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiYWU5Njk2NjJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWI1MmU5MjdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlRm9ybS52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMWI1MmU5MjdcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlRm9ybS52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMWI1MmU5MjdcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm0udnVlXG4vLyBtb2R1bGUgaWQgPSAxMDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmZvcm0udnVlLWZvcm0ge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBdVBBO0lBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiVnVlRm9ybS52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2PlxcbiAgICAgICAgPGg1IGNsYXNzPVxcXCJ0aXRsZSBpcy01XFxcIlxcbiAgICAgICAgICAgIHYtaWY9XFxcImRhdGEuaWNvbiB8fCBkYXRhLnRpdGxlXFxcIj5cXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiZGF0YS5pY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgPGkgOmNsYXNzPVxcXCJkYXRhLmljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPHNwYW5cXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiZGF0YS50aXRsZVxcXCI+XFxuICAgICAgICAgICAgICAgIHt7IGRhdGEudGl0bGUgfX1cXG4gICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgPGhyPlxcbiAgICAgICAgPC9oNT5cXG4gICAgICAgIDxmb3JtIEBzdWJtaXQucHJldmVudD1cXFwic3VibWl0KClcXFwiXFxuICAgICAgICAgICAgY2xhc3M9XFxcInZ1ZS1mb3JtXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIGlzLW11bHRpbGluZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XFxcImZpZWxkIGluIGRhdGEuZmllbGRzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImNvbHVtblxcXCJcXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImZpZWxkLm5hbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcImNvbHVtblNpemVcXFwiXFxuICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCIhZmllbGQubWV0YS5oaWRkZW5cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmllbGRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwibGFiZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhmaWVsZC5sYWJlbCkgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgdi1pZj1cXFwiZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJoZWxwIGlzLWRhbmdlciBpcy1wdWxsZWQtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZXJyb3JzLmdldChmaWVsZC5uYW1lKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVxcXCJmaWVsZC5tZXRhLmN1c3RvbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IDpuYW1lPVxcXCJmaWVsZC5uYW1lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkPVxcXCJmaWVsZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvcnM9XFxcImVycm9yc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1lbHNlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnVlLWZvcm0taW5wdXQgdi1pZj1cXFwiZmllbGQubWV0YS50eXBlID09PSAnaW5wdXQnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZpZWxkPVxcXCJmaWVsZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU9XFxcImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpoYXMtZXJyb3I9XFxcImVycm9ycy5oYXMoZmllbGQubmFtZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Z1ZS1mb3JtLWlucHV0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dnVlLXNlbGVjdCB2LWlmPVxcXCJmaWVsZC5tZXRhLnR5cGUgPT09ICdzZWxlY3QnXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmhhcy1lcnJvcj1cXFwiZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cXFwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpO1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XFxcImZpZWxkLnZhbHVlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcImZpZWxkLm1ldGEub3B0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXktbWFwPVxcXCJmaWVsZC5tZXRhLmtleU1hcFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpzb3VyY2U9XFxcImZpZWxkLm1ldGEuc291cmNlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOm11bHRpcGxlPVxcXCJmaWVsZC5tZXRhLm11bHRpcGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJmaWVsZC5tZXRhLmRpc2FibGVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC92dWUtc2VsZWN0PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXBpY2tlciB2LWlmPVxcXCJmaWVsZC5tZXRhLnR5cGUgPT09ICdkYXRlcGlja2VyJ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cXFwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZmllbGQudmFsdWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Zm9ybWF0PVxcXCJmaWVsZC5tZXRhLmZvcm1hdFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0aW1lPVxcXCJmaWVsZC5tZXRhLnRpbWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImZpZWxkLm1ldGEuZGlzYWJsZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RhdGVwaWNrZXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkYXRlcGlja2VyIHYtaWY9XFxcImZpZWxkLm1ldGEudHlwZSA9PT0gJ3RpbWVwaWNrZXInXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVxcXCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVxcXCJmaWVsZC52YWx1ZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpmb3JtYXQ9XFxcImZpZWxkLm1ldGEuZm9ybWF0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZS1vbmx5XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImZpZWxkLm1ldGEuZGlzYWJsZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RhdGVwaWNrZXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbnRyb2wgaGFzLWljb25zLXJpZ2h0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiZmllbGQubWV0YS50eXBlID09PSAndGV4dGFyZWEnXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBAaW5wdXQ9XFxcImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGV4dGFyZWFcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1kYW5nZXInOiBlcnJvcnMuaGFzKGZpZWxkLm5hbWUpIH1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cXFwiZmllbGQudmFsdWVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnJvd3M9XFxcImZpZWxkLm1ldGEucm93c1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImZpZWxkLm1ldGEuZGlzYWJsZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0YXJlYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8aHI+XFxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJkYXRhLmFjdGlvbnMuZGVzdHJveVxcXCJcXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJkYXRhLmFjdGlvbnMuZGVzdHJveS5mb3JiaWRkZW5cXFwiXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmNsYXNzXFxcIlxcbiAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cXFwic2hvd01vZGFsID0gdHJ1ZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKGRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cXFwiZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvblxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJkYXRhLmFjdGlvbnMuY3JlYXRlLmJ1dHRvbi5jbGFzc1xcXCJcXG4gICAgICAgICAgICAgICAgQGNsaWNrLnByZXZlbnQ9XFxcImNyZWF0ZSgpXFxcIlxcbiAgICAgICAgICAgICAgICB2LWlmPVxcXCJkYXRhLmFjdGlvbnMuY3JlYXRlXFxcIlxcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcImRhdGEuYWN0aW9ucy5jcmVhdGUuZm9yYmlkZGVuXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24ubGFiZWwpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XFxcImRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmljb25cXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cXFwic3VibWl0XFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiYnV0dG9uIGlzLXB1bGxlZC1yaWdodFxcXCJcXG4gICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJbZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5jbGFzcywgeyAnaXMtbG9hZGluZyc6IGxvYWRpbmcgfV1cXFwiXFxuICAgICAgICAgICAgICAgIHYtaWY9XFxcImRhdGEuYWN0aW9ucy5zdG9yZVxcXCJcXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJkYXRhLmFjdGlvbnMuc3RvcmUuZm9yYmlkZGVuXFxcIj5cXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cXFwiZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5pY29uXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XFxcInN1Ym1pdFxcXCJcXG4gICAgICAgICAgICAgICAgY2xhc3M9XFxcImJ1dHRvbiBpcy1wdWxsZWQtcmlnaHRcXFwiXFxuICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiW2RhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmNsYXNzLCB7ICdpcy1sb2FkaW5nJzogbG9hZGluZyB9XVxcXCJcXG4gICAgICAgICAgICAgICAgdi1pZj1cXFwiZGF0YS5hY3Rpb25zLnVwZGF0ZVxcXCJcXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJkYXRhLmFjdGlvbnMudXBkYXRlLmZvcmJpZGRlblxcXCI+XFxuICAgICAgICAgICAgICAgIDxzcGFuPnt7IF9fKGRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmxhYmVsKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVxcXCJkYXRhLmFjdGlvbnMudXBkYXRlLmJ1dHRvbi5pY29uXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpcy1jbGVhcmZpeFxcXCI+PC9kaXY+XFxuICAgICAgICA8L2Zvcm0+XFxuICAgICAgICA8bW9kYWwgdi1pZj1cXFwiZGF0YS5hY3Rpb25zLmRlc3Ryb3lcXFwiXFxuICAgICAgICAgICAgOnNob3c9XFxcInNob3dNb2RhbFxcXCJcXG4gICAgICAgICAgICA6X189XFxcIl9fXFxcIlxcbiAgICAgICAgICAgIDptZXNzYWdlPVxcXCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24ubWVzc2FnZVxcXCJcXG4gICAgICAgICAgICBAY2FuY2VsLWFjdGlvbj1cXFwic2hvd01vZGFsID0gZmFsc2VcXFwiXFxuICAgICAgICAgICAgQGNvbW1pdC1hY3Rpb249XFxcImRlc3Ryb3koKVxcXCI+XFxuICAgICAgICA8L21vZGFsPlxcbiAgICA8L2Rpdj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xcbmltcG9ydCBFcnJvcnMgZnJvbSAnLi9jbGFzc2VzL0Vycm9ycyc7XFxuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwudnVlJztcXG5pbXBvcnQgVnVlU2VsZWN0IGZyb20gJy4vVnVlU2VsZWN0LnZ1ZSc7XFxuaW1wb3J0IERhdGVwaWNrZXIgZnJvbSAnLi9EYXRlcGlja2VyLnZ1ZSc7XFxuaW1wb3J0IFZ1ZUZvcm1JbnB1dCBmcm9tICcuL1Z1ZUZvcm1JbnB1dC52dWUnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgbmFtZTogJ1Z1ZUZvcm0nLFxcblxcbiAgICBjb21wb25lbnRzOiB7XFxuICAgICAgICBNb2RhbCwgVnVlU2VsZWN0LCBEYXRlcGlja2VyLCBWdWVGb3JtSW5wdXQsXFxuICAgIH0sXFxuXFxuICAgIHByb3BzOiB7XFxuICAgICAgICBkYXRhOiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHBhcmFtczoge1xcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgbG9hZGluZzogZmFsc2UsXFxuICAgICAgICAgICAgc2hvd01vZGFsOiBmYWxzZSxcXG4gICAgICAgICAgICBlcnJvcnM6IG5ldyBFcnJvcnMoKSxcXG4gICAgICAgIH07XFxuICAgIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdsb2NhbGUnLCBbJ19fJ10pLFxcbiAgICAgICAgY29sdW1uU2l6ZSgpIHtcXG4gICAgICAgICAgICByZXR1cm4gYGlzLSR7cGFyc2VJbnQoMTIgLyB0aGlzLmRhdGEuY29sdW1ucywgMTApfWA7XFxuICAgICAgICB9LFxcbiAgICAgICAgcGF0aCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLm1ldGhvZCA9PT0gJ3Bvc3QnXFxuICAgICAgICAgICAgICAgID8gdGhpcy5kYXRhLmFjdGlvbnMuc3RvcmUucGF0aFxcbiAgICAgICAgICAgICAgICA6IHRoaXMuZGF0YS5hY3Rpb25zLnVwZGF0ZS5wYXRoO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgY3JlYXRlKCkge1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NyZWF0ZScpO1xcbiAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHsgbmFtZTogdGhpcy5kYXRhLmFjdGlvbnMuY3JlYXRlLnJvdXRlIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHN1Ym1pdCgpIHtcXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xcblxcbiAgICAgICAgICAgIGF4aW9zW3RoaXMuZGF0YS5tZXRob2RdKHRoaXMucGF0aCwgdGhpcy5mb3JtRGF0YSgpKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0Jyk7XFxuXFxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnJlZGlyZWN0KSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogZGF0YS5yZWRpcmVjdCxcXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHsgaWQ6IGRhdGEuaWQgfSxcXG4gICAgICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSBlcnJvci5yZXNwb25zZTtcXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XFxuXFxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDQyMikge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMuc2V0KGRhdGEuZXJyb3JzKTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcXG4gICAgICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBmb3JtRGF0YSgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLmZpZWxkcy5yZWR1Y2UoKG9iamVjdCwgZmllbGQpID0+IHtcXG4gICAgICAgICAgICAgICAgb2JqZWN0W2ZpZWxkLm5hbWVdID0gZmllbGQudmFsdWU7XFxuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XFxuICAgICAgICAgICAgfSwgeyBfcGFyYW1zOiB0aGlzLnBhcmFtcyB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBkZXN0cm95KCkge1xcbiAgICAgICAgICAgIHRoaXMuc2hvd01vZGFsID0gZmFsc2U7XFxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcXG5cXG4gICAgICAgICAgICBheGlvcy5kZWxldGUodGhpcy5kYXRhLmFjdGlvbnMuZGVzdHJveS5wYXRoKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcXG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnZGVzdHJveScpO1xcblxcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZWRpcmVjdCkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiBkYXRhLnJlZGlyZWN0IH0pO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIGZvcm0udnVlLWZvcm0ge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTFiNTJlOTI3XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXY+XG4gICAgICAgIDxoNSBjbGFzcz1cInRpdGxlIGlzLTVcIlxuICAgICAgICAgICAgdi1pZj1cImRhdGEuaWNvbiB8fCBkYXRhLnRpdGxlXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIlxuICAgICAgICAgICAgICAgIHYtaWY9XCJkYXRhLmljb25cIj5cbiAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJkYXRhLmljb25cIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIHYtaWY9XCJkYXRhLnRpdGxlXCI+XG4gICAgICAgICAgICAgICAge3sgZGF0YS50aXRsZSB9fVxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPGhyPlxuICAgICAgICA8L2g1PlxuICAgICAgICA8Zm9ybSBAc3VibWl0LnByZXZlbnQ9XCJzdWJtaXQoKVwiXG4gICAgICAgICAgICBjbGFzcz1cInZ1ZS1mb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiZmllbGQgaW4gZGF0YS5maWVsZHNcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNvbHVtblwiXG4gICAgICAgICAgICAgICAgICAgIDprZXk9XCJmaWVsZC5uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwiY29sdW1uU2l6ZVwiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCIhZmllbGQubWV0YS5oaWRkZW5cIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJsYWJlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKGZpZWxkLmxhYmVsKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIHYtaWY9XCJlcnJvcnMuaGFzKGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJoZWxwIGlzLWRhbmdlciBpcy1wdWxsZWQtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgZXJyb3JzLmdldChmaWVsZC5uYW1lKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiZmllbGQubWV0YS5jdXN0b21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCA6bmFtZT1cImZpZWxkLm5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDplcnJvcnM9XCJlcnJvcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2U+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1mb3JtLWlucHV0IHYtaWY9XCJmaWVsZC5tZXRhLnR5cGUgPT09ICdpbnB1dCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZmllbGQ9XCJmaWVsZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU9XCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnVlLWZvcm0taW5wdXQ+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHZ1ZS1zZWxlY3Qgdi1pZj1cImZpZWxkLm1ldGEudHlwZSA9PT0gJ3NlbGVjdCdcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6aGFzLWVycm9yPVwiZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBpbnB1dD1cImVycm9ycy5jbGVhcihmaWVsZC5uYW1lKTtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6b3B0aW9ucz1cImZpZWxkLm1ldGEub3B0aW9uc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXktbWFwPVwiZmllbGQubWV0YS5rZXlNYXBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6c291cmNlPVwiZmllbGQubWV0YS5zb3VyY2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6bXVsdGlwbGU9XCJmaWVsZC5tZXRhLm11bHRpcGxlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdnVlLXNlbGVjdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGF0ZXBpY2tlciB2LWlmPVwiZmllbGQubWV0YS50eXBlID09PSAnZGF0ZXBpY2tlcidcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAaW5wdXQ9XCJlcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Zm9ybWF0PVwiZmllbGQubWV0YS5mb3JtYXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGltZT1cImZpZWxkLm1ldGEudGltZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRhdGVwaWNrZXIgdi1pZj1cImZpZWxkLm1ldGEudHlwZSA9PT0gJ3RpbWVwaWNrZXInXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGlucHV0PVwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmZvcm1hdD1cImZpZWxkLm1ldGEuZm9ybWF0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZS1vbmx5XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImZpZWxkLm1ldGEuZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2RhdGVwaWNrZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgaGFzLWljb25zLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImZpZWxkLm1ldGEudHlwZSA9PT0gJ3RleHRhcmVhJ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGV4dGFyZWEgQGlucHV0PVwiZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtZGFuZ2VyJzogZXJyb3JzLmhhcyhmaWVsZC5uYW1lKSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6cm93cz1cImZpZWxkLm1ldGEucm93c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dGFyZWE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImVycm9ycy5oYXMoZmllbGQubmFtZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZGF0YS5hY3Rpb25zLmRlc3Ryb3lcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRhdGEuYWN0aW9ucy5kZXN0cm95LmZvcmJpZGRlblwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmNsYXNzXCJcbiAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cInNob3dNb2RhbCA9IHRydWVcIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24ubGFiZWwpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJkYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24uaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b25cIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cImRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmNsYXNzXCJcbiAgICAgICAgICAgICAgICBAY2xpY2sucHJldmVudD1cImNyZWF0ZSgpXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZGF0YS5hY3Rpb25zLmNyZWF0ZVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGF0YS5hY3Rpb25zLmNyZWF0ZS5mb3JiaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhkYXRhLmFjdGlvbnMuY3JlYXRlLmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uIGlzLXB1bGxlZC1yaWdodFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwiW2RhdGEuYWN0aW9ucy5zdG9yZS5idXR0b24uY2xhc3MsIHsgJ2lzLWxvYWRpbmcnOiBsb2FkaW5nIH1dXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZGF0YS5hY3Rpb25zLnN0b3JlXCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkYXRhLmFjdGlvbnMuc3RvcmUuZm9yYmlkZGVuXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgX18oZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImRhdGEuYWN0aW9ucy5zdG9yZS5idXR0b24uaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidXR0b24gaXMtcHVsbGVkLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICA6Y2xhc3M9XCJbZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24uY2xhc3MsIHsgJ2lzLWxvYWRpbmcnOiBsb2FkaW5nIH1dXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiZGF0YS5hY3Rpb25zLnVwZGF0ZVwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZGF0YS5hY3Rpb25zLnVwZGF0ZS5mb3JiaWRkZW5cIj5cbiAgICAgICAgICAgICAgICA8c3Bhbj57eyBfXyhkYXRhLmFjdGlvbnMudXBkYXRlLmJ1dHRvbi5sYWJlbCkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cImRhdGEuYWN0aW9ucy51cGRhdGUuYnV0dG9uLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXMtY2xlYXJmaXhcIj48L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgICA8bW9kYWwgdi1pZj1cImRhdGEuYWN0aW9ucy5kZXN0cm95XCJcbiAgICAgICAgICAgIDpzaG93PVwic2hvd01vZGFsXCJcbiAgICAgICAgICAgIDpfXz1cIl9fXCJcbiAgICAgICAgICAgIDptZXNzYWdlPVwiZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLm1lc3NhZ2VcIlxuICAgICAgICAgICAgQGNhbmNlbC1hY3Rpb249XCJzaG93TW9kYWwgPSBmYWxzZVwiXG4gICAgICAgICAgICBAY29tbWl0LWFjdGlvbj1cImRlc3Ryb3koKVwiPlxuICAgICAgICA8L21vZGFsPlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBHZXR0ZXJzIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgRXJyb3JzIGZyb20gJy4vY2xhc3Nlcy9FcnJvcnMnO1xuaW1wb3J0IE1vZGFsIGZyb20gJy4vTW9kYWwudnVlJztcbmltcG9ydCBWdWVTZWxlY3QgZnJvbSAnLi9WdWVTZWxlY3QudnVlJztcbmltcG9ydCBEYXRlcGlja2VyIGZyb20gJy4vRGF0ZXBpY2tlci52dWUnO1xuaW1wb3J0IFZ1ZUZvcm1JbnB1dCBmcm9tICcuL1Z1ZUZvcm1JbnB1dC52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgbmFtZTogJ1Z1ZUZvcm0nLFxuXG4gICAgY29tcG9uZW50czoge1xuICAgICAgICBNb2RhbCwgVnVlU2VsZWN0LCBEYXRlcGlja2VyLCBWdWVGb3JtSW5wdXQsXG4gICAgfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHNob3dNb2RhbDogZmFsc2UsXG4gICAgICAgICAgICBlcnJvcnM6IG5ldyBFcnJvcnMoKSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgLi4ubWFwR2V0dGVycygnbG9jYWxlJywgWydfXyddKSxcbiAgICAgICAgY29sdW1uU2l6ZSgpIHtcbiAgICAgICAgICAgIHJldHVybiBgaXMtJHtwYXJzZUludCgxMiAvIHRoaXMuZGF0YS5jb2x1bW5zLCAxMCl9YDtcbiAgICAgICAgfSxcbiAgICAgICAgcGF0aCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEubWV0aG9kID09PSAncG9zdCdcbiAgICAgICAgICAgICAgICA/IHRoaXMuZGF0YS5hY3Rpb25zLnN0b3JlLnBhdGhcbiAgICAgICAgICAgICAgICA6IHRoaXMuZGF0YS5hY3Rpb25zLnVwZGF0ZS5wYXRoO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGNyZWF0ZSgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2NyZWF0ZScpO1xuICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goeyBuYW1lOiB0aGlzLmRhdGEuYWN0aW9ucy5jcmVhdGUucm91dGUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHN1Ym1pdCgpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGF4aW9zW3RoaXMuZGF0YS5tZXRob2RdKHRoaXMucGF0aCwgdGhpcy5mb3JtRGF0YSgpKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRvYXN0ci5zdWNjZXNzKGRhdGEubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgnc3VibWl0Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBkYXRhLnJlZGlyZWN0LFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7IGlkOiBkYXRhLmlkIH0sXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc3RhdHVzLCBkYXRhIH0gPSBlcnJvci5yZXNwb25zZTtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDQyMikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycy5zZXQoZGF0YS5lcnJvcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBmb3JtRGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGEuZmllbGRzLnJlZHVjZSgob2JqZWN0LCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIG9iamVjdFtmaWVsZC5uYW1lXSA9IGZpZWxkLnZhbHVlO1xuICAgICAgICAgICAgICAgIHJldHVybiBvYmplY3Q7XG4gICAgICAgICAgICB9LCB7IF9wYXJhbXM6IHRoaXMucGFyYW1zIH0pO1xuICAgICAgICB9LFxuICAgICAgICBkZXN0cm95KCkge1xuICAgICAgICAgICAgdGhpcy5zaG93TW9kYWwgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG5cbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZSh0aGlzLmRhdGEuYWN0aW9ucy5kZXN0cm95LnBhdGgpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdG9hc3RyLnN1Y2Nlc3MoZGF0YS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCdkZXN0cm95Jyk7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5yZWRpcmVjdCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7IG5hbWU6IGRhdGEucmVkaXJlY3QgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIGZvcm0udnVlLWZvcm0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZSIsImltcG9ydCBWdWUgZnJvbSAndnVlJztcblxuY2xhc3MgRXJyb3JzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSB7fTtcbiAgICB9XG5cbiAgICBhbnkoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmVycm9ycykubGVuZ3RoID4gMDtcbiAgICB9XG5cbiAgICBoYXMoZmllbGQpIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5pbmNsdWRlcyhmaWVsZCk7XG4gICAgfVxuXG4gICAgZ2V0KGZpZWxkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhcyhmaWVsZCkgPyB0aGlzLmVycm9yc1tmaWVsZF1bMF0gOiBudWxsO1xuICAgIH1cblxuICAgIHNldChlcnJvcnMpIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSBlcnJvcnM7XG4gICAgfVxuXG4gICAgY2xlYXIoZmllbGQpIHtcbiAgICAgICAgaWYgKHRoaXMuaGFzKGZpZWxkKSkge1xuICAgICAgICAgICAgVnVlLmRlbGV0ZSh0aGlzLmVycm9ycywgZmllbGQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZW1wdHkoKSB7XG4gICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZXJyb3JzKS5mb3JFYWNoKGZpZWxkID0+IHRoaXMuY2xlYXIoZmllbGQpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVycm9ycztcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL2NsYXNzZXMvRXJyb3JzLmpzIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGRiMzgyYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL01vZGFsLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RkYjM4MmFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9Nb2RhbC52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03ZGRiMzgyYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTdkZGIzODJhXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RkYjM4MmFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1ODBlZWUyNFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGRiMzgyYVxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9Nb2RhbC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RkYjM4MmFcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vTW9kYWwudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdkZGIzODJhXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9Nb2RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMDJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLm1vZGFsLmlzLWFjdGl2ZSB7XFxuICAgIHotaW5kZXg6IDExMDA7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBOERBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJNb2RhbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8dHJhbnNpdGlvbiBlbnRlci1hY3RpdmUtY2xhc3M9XFxcImFuaW1hdGVkIGZhZGVJblxcXCJcXG4gICAgICAgIGxlYXZlLWFjdGl2ZS1jbGFzcz1cXFwiYW5pbWF0ZWQgZmFkZU91dFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbFxcXCJcXG4gICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWFjdGl2ZSc6IHNob3cgfVxcXCJcXG4gICAgICAgICAgICB2LWlmPVxcXCJzaG93XFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJtb2RhbC1iYWNrZ3JvdW5kXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0YWJsZS1tb2RhbCBtb2RhbC1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcImNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz1cXFwic3VidGl0bGUgaXMtNVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKG1lc3NhZ2UgfHwgXFxcIkFyZSB5b3Ugc3VyZSA/XFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g1PlxcbiAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgPGhyPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLWxlZnRcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJjb250cm9sc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLXN1Y2Nlc3NcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkZW1pdCgnY2FuY2VsLWFjdGlvbicpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhcXFwiQ2FuY2VsXFxcIikgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiJGVtaXQoJ2NvbW1pdC1hY3Rpb24nKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFxcXCJZZXNcXFwiKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L3RyYW5zaXRpb24+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHNob3c6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIG1lc3NhZ2U6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgICAgICBfXzoge1xcbiAgICAgICAgICAgIHR5cGU6IEZ1bmN0aW9uLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgLm1vZGFsLmlzLWFjdGl2ZSB7XFxuICAgICAgICB6LWluZGV4OiAxMTAwO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtN2RkYjM4MmFcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIjx0ZW1wbGF0ZT5cblxuICAgIDx0cmFuc2l0aW9uIGVudGVyLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIGZhZGVJblwiXG4gICAgICAgIGxlYXZlLWFjdGl2ZS1jbGFzcz1cImFuaW1hdGVkIGZhZGVPdXRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWFjdGl2ZSc6IHNob3cgfVwiXG4gICAgICAgICAgICB2LWlmPVwic2hvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWJhY2tncm91bmRcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1tb2RhbCBtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJveFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwiY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwic3VidGl0bGUgaXMtNVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKG1lc3NhZ2UgfHwgXCJBcmUgeW91IHN1cmUgP1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsLWxlZnRcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1pdGVtXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zdWNjZXNzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjYW5jZWwtYWN0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKFwiQ2FuY2VsXCIpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIiRlbWl0KCdjb21taXQtYWN0aW9uJylcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXyhcIlllc1wiKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2xvdD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L3RyYW5zaXRpb24+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBzaG93OiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIG1lc3NhZ2U6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIF9fOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXG4gICAgLm1vZGFsLmlzLWFjdGl2ZSB7XG4gICAgICAgIHotaW5kZXg6IDExMDA7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL01vZGFsLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJ0cmFuc2l0aW9uXCIsXG4gICAge1xuICAgICAgYXR0cnM6IHtcbiAgICAgICAgXCJlbnRlci1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBmYWRlSW5cIixcbiAgICAgICAgXCJsZWF2ZS1hY3RpdmUtY2xhc3NcIjogXCJhbmltYXRlZCBmYWRlT3V0XCJcbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF92bS5zaG93XG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJtb2RhbFwiLCBjbGFzczogeyBcImlzLWFjdGl2ZVwiOiBfdm0uc2hvdyB9IH0sXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibW9kYWwtYmFja2dyb3VuZFwiIH0pLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRhYmxlLW1vZGFsIG1vZGFsLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJib3hcIiB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJjb250ZW50XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwic3VidGl0bGUgaXMtNVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhfdm0ubWVzc2FnZSB8fCBcIkFyZSB5b3Ugc3VyZSA/XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaHJcIiksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWxcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1sZWZ0XCIgfSksXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJjb250cm9sc1wiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1zdWNjZXNzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiY2FuY2VsLWFjdGlvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJDYW5jZWxcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGlzLWRhbmdlciBoYXMtbWFyZ2luLWxlZnQtc21hbGxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJjb21taXQtYWN0aW9uXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJZZXNcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIF1cbiAgICAgICAgICApXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtN2RkYjM4MmFcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTdkZGIzODJhXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvTW9kYWwudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hdnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3NcIilcbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTczMDc2ZTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFzYXNzLWxvYWRlciEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL1Z1ZVNlbGVjdC52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Z1ZVNlbGVjdC52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTczMDc2ZTlmXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vVnVlU2VsZWN0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgZnVuY3Rpb25hbCAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyA9IGZhbHNlXG4vKiBzdHlsZXMgKi9cbnZhciBfX3Z1ZV9zdHlsZXNfXyA9IGluamVjdFN0eWxlXG4vKiBzY29wZUlkICovXG52YXIgX192dWVfc2NvcGVJZF9fID0gbnVsbFxuLyogbW9kdWxlSWRlbnRpZmllciAoc2VydmVyIG9ubHkpICovXG52YXIgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfXyA9IG51bGxcbnZhciBDb21wb25lbnQgPSBub3JtYWxpemVDb21wb25lbnQoXG4gIF9fdnVlX3NjcmlwdF9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9fLFxuICBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18sXG4gIF9fdnVlX3N0eWxlc19fLFxuICBfX3Z1ZV9zY29wZUlkX18sXG4gIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX19cbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi03MzA3NmU5ZlwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTczMDc2ZTlmXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03MzA3NmU5ZlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi92dWUtbXVsdGlzZWxlY3QubWluLmNzc1wiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI1MDc5ZjI5NFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzMwNzZlOWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4vdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3NcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTczMDc2ZTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuL3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTczMDc2ZTlmXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZmllbGRzZXRbZGlzYWJsZWRdIC5tdWx0aXNlbGVjdHtwb2ludGVyLWV2ZW50czpub25lXFxufVxcbi5tdWx0aXNlbGVjdF9fc3Bpbm5lcntwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDoxcHg7dG9wOjFweDt3aWR0aDo0OHB4O2hlaWdodDozNXB4O2JhY2tncm91bmQ6I2ZmZjtkaXNwbGF5OmJsb2NrXFxufVxcbi5tdWx0aXNlbGVjdF9fc3Bpbm5lcjphZnRlciwubXVsdGlzZWxlY3RfX3NwaW5uZXI6YmVmb3Jle3Bvc2l0aW9uOmFic29sdXRlO2NvbnRlbnQ6XFxcIlxcXCI7dG9wOjUwJTtsZWZ0OjUwJTttYXJnaW46LThweCAwIDAgLThweDt3aWR0aDoxNnB4O2hlaWdodDoxNnB4O2JvcmRlci1yYWRpdXM6MTAwJTtib3JkZXItY29sb3I6IzQxYjg4MyB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjJweDstd2Via2l0LWJveC1zaGFkb3c6MCAwIDAgMXB4IHRyYW5zcGFyZW50O2JveC1zaGFkb3c6MCAwIDAgMXB4IHRyYW5zcGFyZW50XFxufVxcbi5tdWx0aXNlbGVjdF9fc3Bpbm5lcjpiZWZvcmV7LXdlYmtpdC1hbmltYXRpb246YSAyLjRzIGN1YmljLWJlemllciguNDEsLjI2LC4yLC42Mik7YW5pbWF0aW9uOmEgMi40cyBjdWJpYy1iZXppZXIoLjQxLC4yNiwuMiwuNjIpOy13ZWJraXQtYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZTthbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlXFxufVxcbi5tdWx0aXNlbGVjdF9fc3Bpbm5lcjphZnRlcnstd2Via2l0LWFuaW1hdGlvbjphIDIuNHMgY3ViaWMtYmV6aWVyKC41MSwuMDksLjIxLC44KTthbmltYXRpb246YSAyLjRzIGN1YmljLWJlemllciguNTEsLjA5LC4yMSwuOCk7LXdlYmtpdC1hbmltYXRpb24taXRlcmF0aW9uLWNvdW50OmluZmluaXRlO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGVcXG59XFxuLm11bHRpc2VsZWN0X19sb2FkaW5nLWVudGVyLWFjdGl2ZSwubXVsdGlzZWxlY3RfX2xvYWRpbmctbGVhdmUtYWN0aXZley13ZWJraXQtdHJhbnNpdGlvbjpvcGFjaXR5IC40cyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOm9wYWNpdHkgLjRzIGVhc2UtaW4tb3V0O29wYWNpdHk6MVxcbn1cXG4ubXVsdGlzZWxlY3RfX2xvYWRpbmctZW50ZXIsLm11bHRpc2VsZWN0X19sb2FkaW5nLWxlYXZlLWFjdGl2ZXtvcGFjaXR5OjBcXG59XFxuLm11bHRpc2VsZWN0LC5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0X19zaW5nbGV7Zm9udC1mYW1pbHk6aW5oZXJpdDtmb250LXNpemU6MTRweDstbXMtdG91Y2gtYWN0aW9uOm1hbmlwdWxhdGlvbjt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uXFxufVxcbi5tdWx0aXNlbGVjdHstd2Via2l0LWJveC1zaXppbmc6Y29udGVudC1ib3g7Ym94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7bWluLWhlaWdodDo0MHB4O3RleHQtYWxpZ246bGVmdDtjb2xvcjojMzU0OTVlXFxufVxcbi5tdWx0aXNlbGVjdCAqey13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveFxcbn1cXG4ubXVsdGlzZWxlY3Q6Zm9jdXN7b3V0bGluZTpub25lXFxufVxcbi5tdWx0aXNlbGVjdC0tZGlzYWJsZWR7b3BhY2l0eTouNlxcbn1cXG4ubXVsdGlzZWxlY3QtLWFjdGl2ZXt6LWluZGV4OjFcXG59XFxuLm11bHRpc2VsZWN0LS1hY3RpdmU6bm90KC5tdWx0aXNlbGVjdC0tYWJvdmUpIC5tdWx0aXNlbGVjdF9fY3VycmVudCwubXVsdGlzZWxlY3QtLWFjdGl2ZTpub3QoLm11bHRpc2VsZWN0LS1hYm92ZSkgLm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3QtLWFjdGl2ZTpub3QoLm11bHRpc2VsZWN0LS1hYm92ZSkgLm11bHRpc2VsZWN0X190YWdze2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowXFxufVxcbi5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9fc2VsZWN0ey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgxODBkZWcpO3RyYW5zZm9ybTpyb3RhdGUoMTgwZGVnKVxcbn1cXG4ubXVsdGlzZWxlY3QtLWFib3ZlLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdC0tYWJvdmUubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdC0tYWJvdmUubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX3RhZ3N7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjBcXG59XFxuLm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3RfX3NpbmdsZXtwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmlubGluZS1ibG9jazttaW4taGVpZ2h0OjIwcHg7bGluZS1oZWlnaHQ6MjBweDtib3JkZXI6bm9uZTtib3JkZXItcmFkaXVzOjVweDtiYWNrZ3JvdW5kOiNmZmY7cGFkZGluZzowIDAgMCA1cHg7d2lkdGg6MTAwJTstd2Via2l0LXRyYW5zaXRpb246Ym9yZGVyIC4xcyBlYXNlO3RyYW5zaXRpb246Ym9yZGVyIC4xcyBlYXNlOy13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94O2JveC1zaXppbmc6Ym9yZGVyLWJveDttYXJnaW4tYm90dG9tOjhweDt2ZXJ0aWNhbC1hbGlnbjp0b3BcXG59XFxuLm11bHRpc2VsZWN0X190YWd+Lm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3RfX3RhZ34ubXVsdGlzZWxlY3RfX3NpbmdsZXt3aWR0aDphdXRvXFxufVxcbi5tdWx0aXNlbGVjdF9faW5wdXQ6aG92ZXIsLm11bHRpc2VsZWN0X19zaW5nbGU6aG92ZXJ7Ym9yZGVyLWNvbG9yOiNjZmNmY2ZcXG59XFxuLm11bHRpc2VsZWN0X19pbnB1dDpmb2N1cywubXVsdGlzZWxlY3RfX3NpbmdsZTpmb2N1c3tib3JkZXItY29sb3I6I2E4YThhODtvdXRsaW5lOm5vbmVcXG59XFxuLm11bHRpc2VsZWN0X19zaW5nbGV7cGFkZGluZy1sZWZ0OjZweDttYXJnaW4tYm90dG9tOjhweFxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZ3Mtd3JhcHtkaXNwbGF5OmlubGluZVxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZ3N7bWluLWhlaWdodDo0MHB4O2Rpc3BsYXk6YmxvY2s7cGFkZGluZzo4cHggNDBweCAwIDhweDtib3JkZXItcmFkaXVzOjVweDtib3JkZXI6MXB4IHNvbGlkICNlOGU4ZTg7YmFja2dyb3VuZDojZmZmXFxufVxcbi5tdWx0aXNlbGVjdF9fdGFne3Bvc2l0aW9uOnJlbGF0aXZlO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6NHB4IDI2cHggNHB4IDEwcHg7Ym9yZGVyLXJhZGl1czo1cHg7bWFyZ2luLXJpZ2h0OjEwcHg7Y29sb3I6I2ZmZjtsaW5lLWhlaWdodDoxO2JhY2tncm91bmQ6IzQxYjg4MzttYXJnaW4tYm90dG9tOjVweDt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3c6aGlkZGVuO21heC13aWR0aDoxMDAlO3RleHQtb3ZlcmZsb3c6ZWxsaXBzaXNcXG59XFxuLm11bHRpc2VsZWN0X190YWctaWNvbntjdXJzb3I6cG9pbnRlcjttYXJnaW4tbGVmdDo3cHg7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt0b3A6MDtib3R0b206MDtmb250LXdlaWdodDo3MDA7Zm9udC1zdHlsZTpub3JtYWw7d2lkdGg6MjJweDt0ZXh0LWFsaWduOmNlbnRlcjtsaW5lLWhlaWdodDoyMnB4Oy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7Ym9yZGVyLXJhZGl1czo1cHhcXG59XFxuLm11bHRpc2VsZWN0X190YWctaWNvbjphZnRlcntjb250ZW50OlxcXCJcXFxcRDdcXFwiO2NvbG9yOiMyNjZkNGQ7Zm9udC1zaXplOjE0cHhcXG59XFxuLm11bHRpc2VsZWN0X190YWctaWNvbjpmb2N1cywubXVsdGlzZWxlY3RfX3RhZy1pY29uOmhvdmVye2JhY2tncm91bmQ6IzM2OWE2ZVxcbn1cXG4ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmZvY3VzOmFmdGVyLC5tdWx0aXNlbGVjdF9fdGFnLWljb246aG92ZXI6YWZ0ZXJ7Y29sb3I6I2ZmZlxcbn1cXG4ubXVsdGlzZWxlY3RfX2N1cnJlbnR7bWluLWhlaWdodDo0MHB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjhweCAxMnB4IDA7cGFkZGluZy1yaWdodDozMHB4O3doaXRlLXNwYWNlOm5vd3JhcDtib3JkZXItcmFkaXVzOjVweDtib3JkZXI6MXB4IHNvbGlkICNlOGU4ZThcXG59XFxuLm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdF9fc2VsZWN0e2xpbmUtaGVpZ2h0OjE2cHg7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y3Vyc29yOnBvaW50ZXJcXG59XFxuLm11bHRpc2VsZWN0X19zZWxlY3R7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NDBweDtoZWlnaHQ6MzhweDtyaWdodDoxcHg7dG9wOjFweDtwYWRkaW5nOjRweCA4cHg7dGV4dC1hbGlnbjpjZW50ZXI7LXdlYmtpdC10cmFuc2l0aW9uOi13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlO3RyYW5zaXRpb246LXdlYmtpdC10cmFuc2Zvcm0gLjJzIGVhc2U7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2U7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2UsIC13ZWJraXQtdHJhbnNmb3JtIC4ycyBlYXNlXFxufVxcbi5tdWx0aXNlbGVjdF9fc2VsZWN0OmJlZm9yZXtwb3NpdGlvbjpyZWxhdGl2ZTtyaWdodDowO3RvcDo2NSU7Y29sb3I6Izk5OTttYXJnaW4tdG9wOjRweDtib3JkZXItc3R5bGU6c29saWQ7Ym9yZGVyLXdpZHRoOjVweCA1cHggMDtib3JkZXItY29sb3I6Izk5OSB0cmFuc3BhcmVudCB0cmFuc3BhcmVudDtjb250ZW50OlxcXCJcXFwiXFxufVxcbi5tdWx0aXNlbGVjdF9fcGxhY2Vob2xkZXJ7Y29sb3I6I2FkYWRhZDtkaXNwbGF5OmlubGluZS1ibG9jazttYXJnaW4tYm90dG9tOjEwcHg7cGFkZGluZy10b3A6MnB4XFxufVxcbi5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9fcGxhY2Vob2xkZXJ7ZGlzcGxheTpub25lXFxufVxcbi5tdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVye3Bvc2l0aW9uOmFic29sdXRlO2Rpc3BsYXk6YmxvY2s7YmFja2dyb3VuZDojZmZmO3dpZHRoOjEwMCU7bWF4LWhlaWdodDoyNDBweDtvdmVyZmxvdzphdXRvO2JvcmRlcjoxcHggc29saWQgI2U4ZThlODtib3JkZXItdG9wOm5vbmU7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo1cHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NXB4O3otaW5kZXg6MTstd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzp0b3VjaFxcbn1cXG4ubXVsdGlzZWxlY3RfX2NvbnRlbnR7bGlzdC1zdHlsZTpub25lO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3BhZGRpbmc6MDttYXJnaW46MDttaW4td2lkdGg6MTAwJTt2ZXJ0aWNhbC1hbGlnbjp0b3BcXG59XFxuLm11bHRpc2VsZWN0LS1hYm92ZSAubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlcntib3R0b206MTAwJTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjVweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo1cHg7Ym9yZGVyLWJvdHRvbTpub25lO2JvcmRlci10b3A6MXB4IHNvbGlkICNlOGU4ZThcXG59XFxuLm11bHRpc2VsZWN0X19jb250ZW50Ojp3ZWJraXQtc2Nyb2xsYmFye2Rpc3BsYXk6bm9uZVxcbn1cXG4ubXVsdGlzZWxlY3RfX2VsZW1lbnR7ZGlzcGxheTpibG9ja1xcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbntkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTJweDttaW4taGVpZ2h0OjQwcHg7bGluZS1oZWlnaHQ6MTZweDt0ZXh0LWRlY29yYXRpb246bm9uZTt0ZXh0LXRyYW5zZm9ybTpub25lO3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6cG9pbnRlcjt3aGl0ZS1zcGFjZTpub3dyYXBcXG59XFxuLm11bHRpc2VsZWN0X19vcHRpb246YWZ0ZXJ7dG9wOjA7cmlnaHQ6MDtwb3NpdGlvbjphYnNvbHV0ZTtsaW5lLWhlaWdodDo0MHB4O3BhZGRpbmctcmlnaHQ6MTJweDtwYWRkaW5nLWxlZnQ6MjBweFxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0e2JhY2tncm91bmQ6IzQxYjg4MztvdXRsaW5lOm5vbmU7Y29sb3I6I2ZmZlxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0OmFmdGVye2NvbnRlbnQ6YXR0cihkYXRhLXNlbGVjdCk7YmFja2dyb3VuZDojNDFiODgzO2NvbG9yOiNmZmZcXG59XFxuLm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVke2JhY2tncm91bmQ6I2YzZjNmMztjb2xvcjojMzU0OTVlO2ZvbnQtd2VpZ2h0OjcwMFxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWQ6YWZ0ZXJ7Y29udGVudDphdHRyKGRhdGEtc2VsZWN0ZWQpO2NvbG9yOnNpbHZlclxcbn1cXG4ubXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWQubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0e2JhY2tncm91bmQ6I2ZmNmE2YTtjb2xvcjojZmZmXFxufVxcbi5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHQ6YWZ0ZXJ7YmFja2dyb3VuZDojZmY2YTZhO2NvbnRlbnQ6YXR0cihkYXRhLWRlc2VsZWN0KTtjb2xvcjojZmZmXFxufVxcbi5tdWx0aXNlbGVjdC0tZGlzYWJsZWR7YmFja2dyb3VuZDojZWRlZGVkO3BvaW50ZXItZXZlbnRzOm5vbmVcXG59XFxuLm11bHRpc2VsZWN0LS1kaXNhYmxlZCAubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0LS1kaXNhYmxlZCAubXVsdGlzZWxlY3RfX3NlbGVjdCwubXVsdGlzZWxlY3RfX29wdGlvbi0tZGlzYWJsZWR7YmFja2dyb3VuZDojZWRlZGVkO2NvbG9yOiNhNmE2YTZcXG59XFxuLm11bHRpc2VsZWN0X19vcHRpb24tLWRpc2FibGVke2N1cnNvcjp0ZXh0O3BvaW50ZXItZXZlbnRzOm5vbmVcXG59XFxuLm11bHRpc2VsZWN0X19vcHRpb24tLWRpc2FibGVkLm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodHtiYWNrZ3JvdW5kOiNkZWRlZGUhaW1wb3J0YW50XFxufVxcbi5tdWx0aXNlbGVjdC1lbnRlci1hY3RpdmUsLm11bHRpc2VsZWN0LWxlYXZlLWFjdGl2ZXstd2Via2l0LXRyYW5zaXRpb246YWxsIC4xNXMgZWFzZTt0cmFuc2l0aW9uOmFsbCAuMTVzIGVhc2VcXG59XFxuLm11bHRpc2VsZWN0LWVudGVyLC5tdWx0aXNlbGVjdC1sZWF2ZS1hY3RpdmV7b3BhY2l0eTowXFxufVxcbi5tdWx0aXNlbGVjdF9fc3Ryb25ne21hcmdpbi1ib3R0b206OHB4O2xpbmUtaGVpZ2h0OjIwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wXFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3R7dGV4dC1hbGlnbjpyaWdodFxcbn1cXG5bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19zZWxlY3R7cmlnaHQ6YXV0bztsZWZ0OjFweFxcbn1cXG5bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X190YWdze3BhZGRpbmc6OHB4IDhweCAwIDQwcHhcXG59XFxuW2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fY29udGVudHt0ZXh0LWFsaWduOnJpZ2h0XFxufVxcbltkaXI9cnRsXSAubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlcntyaWdodDphdXRvO2xlZnQ6MFxcbn1cXG5bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19jbGVhcntyaWdodDphdXRvO2xlZnQ6MTJweFxcbn1cXG5bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19zcGlubmVye3JpZ2h0OmF1dG87bGVmdDoxcHhcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGF7XFxuMCV7LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDApO3RyYW5zZm9ybTpyb3RhdGUoMClcXG59XFxudG97LXdlYmtpdC10cmFuc2Zvcm06cm90YXRlKDJ0dXJuKTt0cmFuc2Zvcm06cm90YXRlKDJ0dXJuKVxcbn1cXG59XFxuQGtleWZyYW1lcyBhe1xcbjAley13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgwKTt0cmFuc2Zvcm06cm90YXRlKDApXFxufVxcbnRvey13ZWJraXQtdHJhbnNmb3JtOnJvdGF0ZSgydHVybik7dHJhbnNmb3JtOnJvdGF0ZSgydHVybilcXG59XFxufVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL25vZGVfbW9kdWxlcy92dWUtbXVsdGlzZWxlY3QvZGlzdC92dWUtbXVsdGlzZWxlY3QubWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUEsZ0NBQWdDLG1CQUFtQjtDQUFDO0FBQUEsc0JBQXNCLGtCQUFrQixVQUFVLFFBQVEsV0FBVyxZQUFZLGdCQUFnQixhQUFhO0NBQUM7QUFBQSx5REFBeUQsa0JBQWtCLFdBQVcsUUFBUSxTQUFTLHFCQUFxQixXQUFXLFlBQVksbUJBQW1CLDZDQUE2QyxtQkFBbUIsaUJBQWlCLHlDQUFBLGdDQUFnQztDQUFDO0FBQUEsNkJBQTZCLHNEQUFBLDhDQUE4QywyQ0FBQSxrQ0FBa0M7Q0FBQztBQUFBLDRCQUE0QixzREFBQSw4Q0FBOEMsMkNBQUEsa0NBQWtDO0NBQUM7QUFBQSxzRUFBc0UsMkNBQUEsbUNBQW1DLFNBQVM7Q0FBQztBQUFBLCtEQUErRCxTQUFTO0NBQUM7QUFBQSxzREFBc0Qsb0JBQW9CLGVBQWUsOEJBQThCLHlCQUF5QjtDQUFDO0FBQUEsYUFBYSwrQkFBQSx1QkFBdUIsY0FBYyxrQkFBa0IsV0FBVyxnQkFBZ0IsZ0JBQWdCLGFBQWE7Q0FBQztBQUFBLGVBQWUsOEJBQUEscUJBQXFCO0NBQUM7QUFBQSxtQkFBbUIsWUFBWTtDQUFDO0FBQUEsdUJBQXVCLFVBQVU7Q0FBQztBQUFBLHFCQUFxQixTQUFTO0NBQUM7QUFBQSx1TUFBdU0sNEJBQTRCLDRCQUE0QjtDQUFDO0FBQUEsMENBQTBDLGlDQUFBLHdCQUF3QjtDQUFDO0FBQUEscUxBQXFMLHlC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QixzQkFBc0I7Q0FBQztBQUFBLGdDQUFnQyxnQkFBZ0I7Q0FBQztBQUFBLHFDQUFxQyxXQUFXLE1BQU07Q0FBQztBQUFBLDhCQUE4QixXQUFXLFNBQVM7Q0FBQztBQUFBLGdDQUFnQyxXQUFXLFFBQVE7Q0FBQztBQUFBO0FBQWEsR0FBRyw0QkFBQSxtQkFBbUI7Q0FBQztBQUFBLEdBQUcsZ0NBQUEsdUJBQXVCO0NBQUM7Q0FBQztBQUFoRTtBQUFhLEdBQUcsNEJBQUEsbUJBQW1CO0NBQUM7QUFBQSxHQUFHLGdDQUFBLHVCQUF1QjtDQUFDO0NBQUNcIixcImZpbGVcIjpcInZ1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImZpZWxkc2V0W2Rpc2FibGVkXSAubXVsdGlzZWxlY3R7cG9pbnRlci1ldmVudHM6bm9uZX0ubXVsdGlzZWxlY3RfX3NwaW5uZXJ7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MXB4O3RvcDoxcHg7d2lkdGg6NDhweDtoZWlnaHQ6MzVweDtiYWNrZ3JvdW5kOiNmZmY7ZGlzcGxheTpibG9ja30ubXVsdGlzZWxlY3RfX3NwaW5uZXI6YWZ0ZXIsLm11bHRpc2VsZWN0X19zcGlubmVyOmJlZm9yZXtwb3NpdGlvbjphYnNvbHV0ZTtjb250ZW50OlxcXCJcXFwiO3RvcDo1MCU7bGVmdDo1MCU7bWFyZ2luOi04cHggMCAwIC04cHg7d2lkdGg6MTZweDtoZWlnaHQ6MTZweDtib3JkZXItcmFkaXVzOjEwMCU7Ym9yZGVyLWNvbG9yOiM0MWI4ODMgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7Ym9yZGVyLXN0eWxlOnNvbGlkO2JvcmRlci13aWR0aDoycHg7Ym94LXNoYWRvdzowIDAgMCAxcHggdHJhbnNwYXJlbnR9Lm11bHRpc2VsZWN0X19zcGlubmVyOmJlZm9yZXthbmltYXRpb246YSAyLjRzIGN1YmljLWJlemllciguNDEsLjI2LC4yLC42Mik7YW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDppbmZpbml0ZX0ubXVsdGlzZWxlY3RfX3NwaW5uZXI6YWZ0ZXJ7YW5pbWF0aW9uOmEgMi40cyBjdWJpYy1iZXppZXIoLjUxLC4wOSwuMjEsLjgpO2FuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6aW5maW5pdGV9Lm11bHRpc2VsZWN0X19sb2FkaW5nLWVudGVyLWFjdGl2ZSwubXVsdGlzZWxlY3RfX2xvYWRpbmctbGVhdmUtYWN0aXZle3RyYW5zaXRpb246b3BhY2l0eSAuNHMgZWFzZS1pbi1vdXQ7b3BhY2l0eToxfS5tdWx0aXNlbGVjdF9fbG9hZGluZy1lbnRlciwubXVsdGlzZWxlY3RfX2xvYWRpbmctbGVhdmUtYWN0aXZle29wYWNpdHk6MH0ubXVsdGlzZWxlY3QsLm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3RfX3NpbmdsZXtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxNHB4Oy1tcy10b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9uO3RvdWNoLWFjdGlvbjptYW5pcHVsYXRpb259Lm11bHRpc2VsZWN0e2JveC1zaXppbmc6Y29udGVudC1ib3g7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt3aWR0aDoxMDAlO21pbi1oZWlnaHQ6NDBweDt0ZXh0LWFsaWduOmxlZnQ7Y29sb3I6IzM1NDk1ZX0ubXVsdGlzZWxlY3QgKntib3gtc2l6aW5nOmJvcmRlci1ib3h9Lm11bHRpc2VsZWN0OmZvY3Vze291dGxpbmU6bm9uZX0ubXVsdGlzZWxlY3QtLWRpc2FibGVke29wYWNpdHk6LjZ9Lm11bHRpc2VsZWN0LS1hY3RpdmV7ei1pbmRleDoxfS5tdWx0aXNlbGVjdC0tYWN0aXZlOm5vdCgubXVsdGlzZWxlY3QtLWFib3ZlKSAubXVsdGlzZWxlY3RfX2N1cnJlbnQsLm11bHRpc2VsZWN0LS1hY3RpdmU6bm90KC5tdWx0aXNlbGVjdC0tYWJvdmUpIC5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0LS1hY3RpdmU6bm90KC5tdWx0aXNlbGVjdC0tYWJvdmUpIC5tdWx0aXNlbGVjdF9fdGFnc3tib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0ubXVsdGlzZWxlY3QtLWFjdGl2ZSAubXVsdGlzZWxlY3RfX3NlbGVjdHt0cmFuc2Zvcm06cm90YXRlKDE4MGRlZyl9Lm11bHRpc2VsZWN0LS1hYm92ZS5tdWx0aXNlbGVjdC0tYWN0aXZlIC5tdWx0aXNlbGVjdF9fY3VycmVudCwubXVsdGlzZWxlY3QtLWFib3ZlLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19pbnB1dCwubXVsdGlzZWxlY3QtLWFib3ZlLm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X190YWdze2JvcmRlci10b3AtbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czowfS5tdWx0aXNlbGVjdF9faW5wdXQsLm11bHRpc2VsZWN0X19zaW5nbGV7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWluLWhlaWdodDoyMHB4O2xpbmUtaGVpZ2h0OjIwcHg7Ym9yZGVyOm5vbmU7Ym9yZGVyLXJhZGl1czo1cHg7YmFja2dyb3VuZDojZmZmO3BhZGRpbmc6MCAwIDAgNXB4O3dpZHRoOjEwMCU7dHJhbnNpdGlvbjpib3JkZXIgLjFzIGVhc2U7Ym94LXNpemluZzpib3JkZXItYm94O21hcmdpbi1ib3R0b206OHB4O3ZlcnRpY2FsLWFsaWduOnRvcH0ubXVsdGlzZWxlY3RfX3RhZ34ubXVsdGlzZWxlY3RfX2lucHV0LC5tdWx0aXNlbGVjdF9fdGFnfi5tdWx0aXNlbGVjdF9fc2luZ2xle3dpZHRoOmF1dG99Lm11bHRpc2VsZWN0X19pbnB1dDpob3ZlciwubXVsdGlzZWxlY3RfX3NpbmdsZTpob3Zlcntib3JkZXItY29sb3I6I2NmY2ZjZn0ubXVsdGlzZWxlY3RfX2lucHV0OmZvY3VzLC5tdWx0aXNlbGVjdF9fc2luZ2xlOmZvY3Vze2JvcmRlci1jb2xvcjojYThhOGE4O291dGxpbmU6bm9uZX0ubXVsdGlzZWxlY3RfX3NpbmdsZXtwYWRkaW5nLWxlZnQ6NnB4O21hcmdpbi1ib3R0b206OHB4fS5tdWx0aXNlbGVjdF9fdGFncy13cmFwe2Rpc3BsYXk6aW5saW5lfS5tdWx0aXNlbGVjdF9fdGFnc3ttaW4taGVpZ2h0OjQwcHg7ZGlzcGxheTpibG9jaztwYWRkaW5nOjhweCA0MHB4IDAgOHB4O2JvcmRlci1yYWRpdXM6NXB4O2JvcmRlcjoxcHggc29saWQgI2U4ZThlODtiYWNrZ3JvdW5kOiNmZmZ9Lm11bHRpc2VsZWN0X190YWd7cG9zaXRpb246cmVsYXRpdmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzo0cHggMjZweCA0cHggMTBweDtib3JkZXItcmFkaXVzOjVweDttYXJnaW4tcmlnaHQ6MTBweDtjb2xvcjojZmZmO2xpbmUtaGVpZ2h0OjE7YmFja2dyb3VuZDojNDFiODgzO21hcmdpbi1ib3R0b206NXB4O3doaXRlLXNwYWNlOm5vd3JhcDtvdmVyZmxvdzpoaWRkZW47bWF4LXdpZHRoOjEwMCU7dGV4dC1vdmVyZmxvdzplbGxpcHNpc30ubXVsdGlzZWxlY3RfX3RhZy1pY29ue2N1cnNvcjpwb2ludGVyO21hcmdpbi1sZWZ0OjdweDtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO3RvcDowO2JvdHRvbTowO2ZvbnQtd2VpZ2h0OjcwMDtmb250LXN0eWxlOm5vcm1hbDt3aWR0aDoyMnB4O3RleHQtYWxpZ246Y2VudGVyO2xpbmUtaGVpZ2h0OjIycHg7dHJhbnNpdGlvbjphbGwgLjJzIGVhc2U7Ym9yZGVyLXJhZGl1czo1cHh9Lm11bHRpc2VsZWN0X190YWctaWNvbjphZnRlcntjb250ZW50OlxcXCJcXFxcRDdcXFwiO2NvbG9yOiMyNjZkNGQ7Zm9udC1zaXplOjE0cHh9Lm11bHRpc2VsZWN0X190YWctaWNvbjpmb2N1cywubXVsdGlzZWxlY3RfX3RhZy1pY29uOmhvdmVye2JhY2tncm91bmQ6IzM2OWE2ZX0ubXVsdGlzZWxlY3RfX3RhZy1pY29uOmZvY3VzOmFmdGVyLC5tdWx0aXNlbGVjdF9fdGFnLWljb246aG92ZXI6YWZ0ZXJ7Y29sb3I6I2ZmZn0ubXVsdGlzZWxlY3RfX2N1cnJlbnR7bWluLWhlaWdodDo0MHB4O292ZXJmbG93OmhpZGRlbjtwYWRkaW5nOjhweCAxMnB4IDA7cGFkZGluZy1yaWdodDozMHB4O3doaXRlLXNwYWNlOm5vd3JhcDtib3JkZXItcmFkaXVzOjVweDtib3JkZXI6MXB4IHNvbGlkICNlOGU4ZTh9Lm11bHRpc2VsZWN0X19jdXJyZW50LC5tdWx0aXNlbGVjdF9fc2VsZWN0e2xpbmUtaGVpZ2h0OjE2cHg7Ym94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Y3Vyc29yOnBvaW50ZXJ9Lm11bHRpc2VsZWN0X19zZWxlY3R7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6NDBweDtoZWlnaHQ6MzhweDtyaWdodDoxcHg7dG9wOjFweDtwYWRkaW5nOjRweCA4cHg7dGV4dC1hbGlnbjpjZW50ZXI7dHJhbnNpdGlvbjp0cmFuc2Zvcm0gLjJzIGVhc2V9Lm11bHRpc2VsZWN0X19zZWxlY3Q6YmVmb3Jle3Bvc2l0aW9uOnJlbGF0aXZlO3JpZ2h0OjA7dG9wOjY1JTtjb2xvcjojOTk5O21hcmdpbi10b3A6NHB4O2JvcmRlci1zdHlsZTpzb2xpZDtib3JkZXItd2lkdGg6NXB4IDVweCAwO2JvcmRlci1jb2xvcjojOTk5IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O2NvbnRlbnQ6XFxcIlxcXCJ9Lm11bHRpc2VsZWN0X19wbGFjZWhvbGRlcntjb2xvcjojYWRhZGFkO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21hcmdpbi1ib3R0b206MTBweDtwYWRkaW5nLXRvcDoycHh9Lm11bHRpc2VsZWN0LS1hY3RpdmUgLm11bHRpc2VsZWN0X19wbGFjZWhvbGRlcntkaXNwbGF5Om5vbmV9Lm11bHRpc2VsZWN0X19jb250ZW50LXdyYXBwZXJ7cG9zaXRpb246YWJzb2x1dGU7ZGlzcGxheTpibG9jaztiYWNrZ3JvdW5kOiNmZmY7d2lkdGg6MTAwJTttYXgtaGVpZ2h0OjI0MHB4O292ZXJmbG93OmF1dG87Ym9yZGVyOjFweCBzb2xpZCAjZThlOGU4O2JvcmRlci10b3A6bm9uZTtib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo1cHg7ei1pbmRleDoxOy13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOnRvdWNofS5tdWx0aXNlbGVjdF9fY29udGVudHtsaXN0LXN0eWxlOm5vbmU7ZGlzcGxheTppbmxpbmUtYmxvY2s7cGFkZGluZzowO21hcmdpbjowO21pbi13aWR0aDoxMDAlO3ZlcnRpY2FsLWFsaWduOnRvcH0ubXVsdGlzZWxlY3QtLWFib3ZlIC5tdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVye2JvdHRvbToxMDAlO2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NXB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjVweDtib3JkZXItYm90dG9tOm5vbmU7Ym9yZGVyLXRvcDoxcHggc29saWQgI2U4ZThlOH0ubXVsdGlzZWxlY3RfX2NvbnRlbnQ6OndlYmtpdC1zY3JvbGxiYXJ7ZGlzcGxheTpub25lfS5tdWx0aXNlbGVjdF9fZWxlbWVudHtkaXNwbGF5OmJsb2NrfS5tdWx0aXNlbGVjdF9fb3B0aW9ue2Rpc3BsYXk6YmxvY2s7cGFkZGluZzoxMnB4O21pbi1oZWlnaHQ6NDBweDtsaW5lLWhlaWdodDoxNnB4O3RleHQtZGVjb3JhdGlvbjpub25lO3RleHQtdHJhbnNmb3JtOm5vbmU7dmVydGljYWwtYWxpZ246bWlkZGxlO3Bvc2l0aW9uOnJlbGF0aXZlO2N1cnNvcjpwb2ludGVyO3doaXRlLXNwYWNlOm5vd3JhcH0ubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlcnt0b3A6MDtyaWdodDowO3Bvc2l0aW9uOmFic29sdXRlO2xpbmUtaGVpZ2h0OjQwcHg7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctbGVmdDoyMHB4fS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHR7YmFja2dyb3VuZDojNDFiODgzO291dGxpbmU6bm9uZTtjb2xvcjojZmZmfS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHQ6YWZ0ZXJ7Y29udGVudDphdHRyKGRhdGEtc2VsZWN0KTtiYWNrZ3JvdW5kOiM0MWI4ODM7Y29sb3I6I2ZmZn0ubXVsdGlzZWxlY3RfX29wdGlvbi0tc2VsZWN0ZWR7YmFja2dyb3VuZDojZjNmM2YzO2NvbG9yOiMzNTQ5NWU7Zm9udC13ZWlnaHQ6NzAwfS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZDphZnRlcntjb250ZW50OmF0dHIoZGF0YS1zZWxlY3RlZCk7Y29sb3I6c2lsdmVyfS5tdWx0aXNlbGVjdF9fb3B0aW9uLS1zZWxlY3RlZC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1oaWdobGlnaHR7YmFja2dyb3VuZDojZmY2YTZhO2NvbG9yOiNmZmZ9Lm11bHRpc2VsZWN0X19vcHRpb24tLXNlbGVjdGVkLm11bHRpc2VsZWN0X19vcHRpb24tLWhpZ2hsaWdodDphZnRlcntiYWNrZ3JvdW5kOiNmZjZhNmE7Y29udGVudDphdHRyKGRhdGEtZGVzZWxlY3QpO2NvbG9yOiNmZmZ9Lm11bHRpc2VsZWN0LS1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNlZGVkZWQ7cG9pbnRlci1ldmVudHM6bm9uZX0ubXVsdGlzZWxlY3QtLWRpc2FibGVkIC5tdWx0aXNlbGVjdF9fY3VycmVudCwubXVsdGlzZWxlY3QtLWRpc2FibGVkIC5tdWx0aXNlbGVjdF9fc2VsZWN0LC5tdWx0aXNlbGVjdF9fb3B0aW9uLS1kaXNhYmxlZHtiYWNrZ3JvdW5kOiNlZGVkZWQ7Y29sb3I6I2E2YTZhNn0ubXVsdGlzZWxlY3RfX29wdGlvbi0tZGlzYWJsZWR7Y3Vyc29yOnRleHQ7cG9pbnRlci1ldmVudHM6bm9uZX0ubXVsdGlzZWxlY3RfX29wdGlvbi0tZGlzYWJsZWQubXVsdGlzZWxlY3RfX29wdGlvbi0taGlnaGxpZ2h0e2JhY2tncm91bmQ6I2RlZGVkZSFpbXBvcnRhbnR9Lm11bHRpc2VsZWN0LWVudGVyLWFjdGl2ZSwubXVsdGlzZWxlY3QtbGVhdmUtYWN0aXZle3RyYW5zaXRpb246YWxsIC4xNXMgZWFzZX0ubXVsdGlzZWxlY3QtZW50ZXIsLm11bHRpc2VsZWN0LWxlYXZlLWFjdGl2ZXtvcGFjaXR5OjB9Lm11bHRpc2VsZWN0X19zdHJvbmd7bWFyZ2luLWJvdHRvbTo4cHg7bGluZS1oZWlnaHQ6MjBweDtkaXNwbGF5OmlubGluZS1ibG9jazt2ZXJ0aWNhbC1hbGlnbjp0b3B9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdHt0ZXh0LWFsaWduOnJpZ2h0fVtkaXI9cnRsXSAubXVsdGlzZWxlY3RfX3NlbGVjdHtyaWdodDphdXRvO2xlZnQ6MXB4fVtkaXI9cnRsXSAubXVsdGlzZWxlY3RfX3RhZ3N7cGFkZGluZzo4cHggOHB4IDAgNDBweH1bZGlyPXJ0bF0gLm11bHRpc2VsZWN0X19jb250ZW50e3RleHQtYWxpZ246cmlnaHR9W2Rpcj1ydGxdIC5tdWx0aXNlbGVjdF9fb3B0aW9uOmFmdGVye3JpZ2h0OmF1dG87bGVmdDowfVtkaXI9cnRsXSAubXVsdGlzZWxlY3RfX2NsZWFye3JpZ2h0OmF1dG87bGVmdDoxMnB4fVtkaXI9cnRsXSAubXVsdGlzZWxlY3RfX3NwaW5uZXJ7cmlnaHQ6YXV0bztsZWZ0OjFweH1Aa2V5ZnJhbWVzIGF7MCV7dHJhbnNmb3JtOnJvdGF0ZSgwKX10b3t0cmFuc2Zvcm06cm90YXRlKDJ0dXJuKX19XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTczMDc2ZTlmXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1tdWx0aXNlbGVjdC9kaXN0L3Z1ZS1tdWx0aXNlbGVjdC5taW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTczMDc2ZTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL1Z1ZVNlbGVjdC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjU2Y2MwNTMyXCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTczMDc2ZTlmXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL1Z1ZVNlbGVjdC52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNzMwNzZlOWZcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vVnVlU2VsZWN0LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03MzA3NmU5ZlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdCB7XFxuICBtaW4taGVpZ2h0OiAzNnB4O1xcbiAgbWF4LWhlaWdodDogMzZweDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWdzIHtcXG4gIG1pbi1oZWlnaHQ6IDM2cHg7XFxuICBtYXgtaGVpZ2h0OiAzNnB4O1xcbiAgcGFkZGluZzogNHB4IDQwcHggMCA0cHg7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxufVxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnczpob3ZlciB7XFxuICAgIGJvcmRlci1jb2xvcjogI2I1YjViNTtcXG59XFxuLm11bHRpc2VsZWN0Lmhhcy1lcnJvciAubXVsdGlzZWxlY3RfX3RhZ3Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1MDgwMDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWcge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZy1pY29uIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCBpbnB1dFt0eXBlPXRleHRdLm11bHRpc2VsZWN0X19pbnB1dCB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBtYXJnaW4tdG9wOiAycHg7XFxuICBib3JkZXItYm90dG9tOiBub25lO1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX2NvbnRlbnQtd3JhcHBlciB7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzcHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbixcXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlciB7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiAzNnB4O1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdCB7XFxuICB3aWR0aDogMzRweDtcXG4gIGhlaWdodDogMzRweDtcXG59XFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19zZWxlY3Q6YmVmb3JlIHtcXG4gIHRvcDogNzAlO1xcbn1cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NwaW5uZXIge1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgd2lkdGg6IDM0cHg7XFxufVxcbnNwYW4ubXVsdGlzZWxlY3RfX3RhZyB7XFxuICBwYWRkaW5nOiA1cHggMjZweCA1cHggMTBweDtcXG59XFxuLm11bHRpc2VsZWN0LCAubXVsdGlzZWxlY3RfX2lucHV0LCAubXVsdGlzZWxlY3RfX3NpbmdsZSB7XFxuICBmb250LXNpemU6IDE2cHg7XFxufVxcbi5tdWx0aXNlbGVjdF9fY2xlYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICByaWdodDogMzBweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxO1xcbn1cXG4ubXVsdGlzZWxlY3RfX2NsZWFyOmJlZm9yZSB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xcbn1cXG4ubXVsdGlzZWxlY3RfX2NsZWFyOmFmdGVyIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKTtcXG59XFxuLm11bHRpc2VsZWN0X19jbGVhcjphZnRlciwgLm11bHRpc2VsZWN0X19jbGVhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcbiAgdG9wOiAzcHg7XFxuICByaWdodDogMTBweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU2VsZWN0LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0NBQUU7QUFFckI7RUFDRSxpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLHdCQUF3QjtFQUN4QixtQkFBbUI7Q0FBRTtBQUNyQjtJQUNFLHNCQUFzQjtDQUFFO0FBRTVCO0VBQ0UsMEJBQTBCO0NBQUU7QUFFOUI7RUFDRSxtQkFBbUI7RUFDbkIsbUJBQW1CO0NBQUU7QUFFdkI7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0NBQUU7QUFFdEI7RUFDRSx5QkFBaUI7VUFBakIsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsb0JBQW9CO0NBQUU7QUFFeEI7RUFDRSwrQkFBK0I7RUFDL0IsZ0NBQWdDO0NBQUU7QUFFcEM7O0VBRUUsa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxpQkFBaUI7Q0FBRTtBQUVyQjtFQUNFLFlBQVk7RUFDWixhQUFhO0NBQUU7QUFFakI7RUFDRSxTQUFTO0NBQUU7QUFFYjtFQUNFLGFBQWE7RUFDYixZQUFZO0NBQUU7QUFFaEI7RUFDRSwyQkFBMkI7Q0FBRTtBQUUvQjtFQUNFLGdCQUFnQjtDQUFFO0FBRXBCO0VBQ0UsbUJBQW1CO0VBQ25CLFNBQVM7RUFDVCxZQUFZO0VBQ1osYUFBYTtFQUNiLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLFdBQVc7Q0FBRTtBQUVmO0VBQ0UsaUNBQXlCO1VBQXpCLHlCQUF5QjtDQUFFO0FBRTdCO0VBQ0Usa0NBQTBCO1VBQTFCLDBCQUEwQjtDQUFFO0FBRTlCO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixtQkFBbUI7RUFDbkIsV0FBVztFQUNYLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULFlBQVk7Q0FBRVwiLFwiZmlsZVwiOlwiVnVlU2VsZWN0LnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIudnVlLXNlbGVjdCAubXVsdGlzZWxlY3Qge1xcbiAgbWluLWhlaWdodDogMzZweDtcXG4gIG1heC1oZWlnaHQ6IDM2cHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZ3Mge1xcbiAgbWluLWhlaWdodDogMzZweDtcXG4gIG1heC1oZWlnaHQ6IDM2cHg7XFxuICBwYWRkaW5nOiA0cHggNDBweCAwIDRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDsgfVxcbiAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWdzOmhvdmVyIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjYjViNWI1OyB9XFxuXFxuLm11bHRpc2VsZWN0Lmhhcy1lcnJvciAubXVsdGlzZWxlY3RfX3RhZ3Mge1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2U1MDgwMDsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnIHtcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fdGFnLWljb24ge1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgbGluZS1oZWlnaHQ6IDI0cHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCBpbnB1dFt0eXBlPXRleHRdLm11bHRpc2VsZWN0X19pbnB1dCB7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgbWFyZ2luLXRvcDogMnB4O1xcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTsgfVxcblxcbmRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVyIHtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDNweDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAzcHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbixcXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX29wdGlvbjphZnRlciB7XFxuICBsaW5lLWhlaWdodDogMTZweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtaW4taGVpZ2h0OiAzNnB4OyB9XFxuXFxuZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19zZWxlY3Qge1xcbiAgd2lkdGg6IDM0cHg7XFxuICBoZWlnaHQ6IDM0cHg7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NlbGVjdDpiZWZvcmUge1xcbiAgdG9wOiA3MCU7IH1cXG5cXG5kaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3NwaW5uZXIge1xcbiAgaGVpZ2h0OiAzNHB4O1xcbiAgd2lkdGg6IDM0cHg7IH1cXG5cXG5zcGFuLm11bHRpc2VsZWN0X190YWcge1xcbiAgcGFkZGluZzogNXB4IDI2cHggNXB4IDEwcHg7IH1cXG5cXG4ubXVsdGlzZWxlY3QsIC5tdWx0aXNlbGVjdF9faW5wdXQsIC5tdWx0aXNlbGVjdF9fc2luZ2xlIHtcXG4gIGZvbnQtc2l6ZTogMTZweDsgfVxcblxcbi5tdWx0aXNlbGVjdF9fY2xlYXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiA3cHg7XFxuICByaWdodDogMzBweDtcXG4gIGhlaWdodDogMjJweDtcXG4gIHdpZHRoOiAyMnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB6LWluZGV4OiAxOyB9XFxuXFxuLm11bHRpc2VsZWN0X19jbGVhcjpiZWZvcmUge1xcbiAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpOyB9XFxuXFxuLm11bHRpc2VsZWN0X19jbGVhcjphZnRlciB7XFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpOyB9XFxuXFxuLm11bHRpc2VsZWN0X19jbGVhcjphZnRlciwgLm11bHRpc2VsZWN0X19jbGVhcjpiZWZvcmUge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxcHg7XFxuICBoZWlnaHQ6IDE2cHg7XFxuICBiYWNrZ3JvdW5kOiAjYWFhO1xcbiAgdG9wOiAzcHg7XFxuICByaWdodDogMTBweDsgfVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi03MzA3NmU5ZlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTZWxlY3QudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cInZ1ZS1zZWxlY3RcIj5cbiAgICAgICAgPG11bHRpc2VsZWN0IDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1lcnJvcic6IGhhc0Vycm9yIH1cIlxuICAgICAgICAgICAgc2VhcmNoYWJsZVxuICAgICAgICAgICAgYWxsb3ctZW1wdHlcbiAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCJcbiAgICAgICAgICAgIDppbnRlcm5hbC1zZWFyY2g9XCIhaXNTZXJ2ZXJTaWRlXCJcbiAgICAgICAgICAgIDptdWx0aXBsZT1cIm11bHRpcGxlXCJcbiAgICAgICAgICAgIDp0YWdnYWJsZT1cInRhZ2dhYmxlXCJcbiAgICAgICAgICAgIDpjbGVhci1vbi1zZWxlY3Q9XCIhbXVsdGlwbGVcIlxuICAgICAgICAgICAgOmNsb3NlLW9uLXNlbGVjdD1cIiFtdWx0aXBsZVwiXG4gICAgICAgICAgICA6c2VsZWN0LWxhYmVsPVwiX18obGFiZWxzLnNlbGVjdClcIlxuICAgICAgICAgICAgOmRlc2VsZWN0LWxhYmVsPVwiX18obGFiZWxzLmRlc2VsZWN0KVwiXG4gICAgICAgICAgICA6c2VsZWN0ZWQtbGFiZWw9XCJfXyhsYWJlbHMuc2VsZWN0ZWQpXCJcbiAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cIl9fKGxhYmVscy5wbGFjZWhvbGRlcilcIlxuICAgICAgICAgICAgOmxvYWRpbmc9XCJsb2FkaW5nXCJcbiAgICAgICAgICAgIDpvcHRpb25zLWxpbWl0PVwiMTAwXCJcbiAgICAgICAgICAgIDpvcHRpb25zPVwib3B0aW9uS2V5c1wiXG4gICAgICAgICAgICA6Y3VzdG9tLWxhYmVsPVwiY3VzdG9tTGFiZWxcIlxuICAgICAgICAgICAgQHNlYXJjaC1jaGFuZ2U9XCJxdWVyeT0kZXZlbnQ7Z2V0T3B0aW9ucygpXCJcbiAgICAgICAgICAgIEB0YWc9XCIkZW1pdCgndGFnJywgJGV2ZW50KVwiXG4gICAgICAgICAgICBAaW5wdXQ9XCIkZW1pdCgnaW5wdXQnLCAkZXZlbnQpXCI+XG4gICAgICAgICAgICA8c3BhbiBzbG90PVwibm9SZXN1bHRcIj5cbiAgICAgICAgICAgICAgICB7eyBfXyhsYWJlbHMubm9SZXN1bHQpIH19XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cIm9wdGlvblwiIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHYtaHRtbD1cIiRvcHRpb25zLmZpbHRlcnMuaGlnaGxpZ2h0KG9wdGlvbkxpc3RbcHJvcHMub3B0aW9uXSwgcXVlcnkpXCI+PC9zcGFuPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiY2xlYXJcIiBzbG90LXNjb3BlPVwicHJvcHNcIlxuICAgICAgICAgICAgICAgIHYtaWY9XCIhZGlzYWJsZWRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXVsdGlzZWxlY3RfX2NsZWFyXCJcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cImhhc1NlbGVjdGlvblwiXG4gICAgICAgICAgICAgICAgICAgIEBtb3VzZWRvd24ucHJldmVudC5zdG9wPVwiY2xlYXIoKVwiPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9tdWx0aXNlbGVjdD5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgZGVib3VuY2UgfSBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IHsgbWFwR2V0dGVycyB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IE11bHRpc2VsZWN0IGZyb20gJ3Z1ZS1tdWx0aXNlbGVjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7IE11bHRpc2VsZWN0IH0sXG5cbiAgICBwcm9wczoge1xuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgc291cmNlOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0KCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGtleU1hcDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ251bWJlcicsXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIG11bHRpcGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHRhZ2dhYmxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGhhc0Vycm9yOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgcGl2b3RQYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbVBhcmFtczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdQbGVhc2UgY2hvb3NlJyxcbiAgICAgICAgfSxcbiAgICAgICAgbGFiZWxzOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiAoKSA9PiAoe1xuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAnU2VsZWN0ZWQnLFxuICAgICAgICAgICAgICAgIHNlbGVjdDogJ1ByZXNzIGVudGVyIHRvIHNlbGVjdCcsXG4gICAgICAgICAgICAgICAgZGVzZWxlY3Q6ICdQcmVzcyBlbnRlciB0byBkZXNlbGVjdCcsXG4gICAgICAgICAgICAgICAgbm9SZXN1bHQ6ICdObyBFbGVtZW50cyBGb3VuZCcsXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgLi4ubWFwR2V0dGVycygnbG9jYWxlJywgWydfXyddKSxcbiAgICAgICAgaXNTZXJ2ZXJTaWRlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc291cmNlICE9PSBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBoYXNTZWxlY3Rpb24oKSB7XG4gICAgICAgICAgICByZXR1cm4gKHRoaXMubXVsdGlwbGUgJiYgdGhpcy52YWx1ZS5sZW5ndGgpIHx8ICghdGhpcy5tdWx0aXBsZSAmJiB0aGlzLnZhbHVlICE9PSBudWxsKTtcbiAgICAgICAgfSxcbiAgICAgICAgb3B0aW9uS2V5cygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmtleU1hcCA9PT0gJ251bWJlcidcbiAgICAgICAgICAgICAgICA/IE9iamVjdC5rZXlzKHRoaXMub3B0aW9uTGlzdCkubWFwKE51bWJlcilcbiAgICAgICAgICAgICAgICA6IE9iamVjdC5rZXlzKHRoaXMub3B0aW9uTGlzdCk7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGZpbHRlcnM6IHtcbiAgICAgICAgaGlnaGxpZ2h0KG9wdGlvbiwgcXVlcnkpIHtcbiAgICAgICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcXVlcnkuc3BsaXQoJyAnKS5maWx0ZXIod29yZCA9PiB3b3JkLmxlbmd0aCkuZm9yRWFjaCgod29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIG9wdGlvbiA9IG9wdGlvbi5yZXBsYWNlKG5ldyBSZWdFeHAoYCgke3dvcmR9KWAsICdnaScpLCAnPGI+JDE8L2I+Jyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIG9wdGlvbjtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbkxpc3QgPSB0aGlzLm9wdGlvbnM7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGVlcDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHBpdm90UGFyYW1zOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGRlZXA6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGN1c3RvbVBhcmFtczoge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldE9wdGlvbnMoKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkZWVwOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBjcmVhdGVkKCkge1xuICAgICAgICB0aGlzLmdldE9wdGlvbnMgPSBkZWJvdW5jZSh0aGlzLmdldE9wdGlvbnMsIDUwMCk7XG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBvcHRpb25MaXN0OiB0aGlzLm9wdGlvbnMsXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIHF1ZXJ5OiAnJyxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBnZXRPcHRpb25zKCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2VydmVyU2lkZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAgICAgYXhpb3MuZ2V0KHJvdXRlKHRoaXMuc291cmNlLCBbXSwgbnVsbCksIHtcbiAgICAgICAgICAgICAgICBwYXJhbXM6IHRoaXMuZ2V0UGFyYW1zKCksXG4gICAgICAgICAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc09wdGlvbnMocmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQYXJhbXMoKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHBhcmFtczogdGhpcy5wYXJhbXMsXG4gICAgICAgICAgICAgICAgcGl2b3RQYXJhbXM6IHRoaXMucGl2b3RQYXJhbXMsXG4gICAgICAgICAgICAgICAgY3VzdG9tUGFyYW1zOiB0aGlzLmN1c3RvbVBhcmFtcyxcbiAgICAgICAgICAgICAgICBxdWVyeTogdGhpcy5xdWVyeSxcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICAgIHByb2Nlc3NPcHRpb25zKHJlc3BvbnNlKSB7XG4gICAgICAgICAgICB0aGlzLm9wdGlvbkxpc3QgPSByZXNwb25zZS5kYXRhO1xuXG4gICAgICAgICAgICBpZiAoIXRoaXMucXVlcnkgJiYgIXRoaXMudmFsdWVJc01hdGNoZWQoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdmFsdWVJc01hdGNoZWQoKSB7XG4gICAgICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcblxuICAgICAgICAgICAgaWYgKCF0aGlzLm11bHRpcGxlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uS2V5cy5maWx0ZXIob3B0aW9uID0+IG9wdGlvbiA9PT0gc2VsZi52YWx1ZSkubGVuZ3RoID4gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMub3B0aW9uS2V5cy5maWx0ZXIob3B0aW9uID0+XG4gICAgICAgICAgICAgICAgc2VsZi52YWx1ZS5maWx0ZXIodmFsID0+IHZhbCA9PT0gb3B0aW9uKS5sZW5ndGggPiAwKS5sZW5ndGggPiAwO1xuICAgICAgICB9LFxuICAgICAgICBjdXN0b21MYWJlbChvcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbkxpc3Rbb3B0aW9uXTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBkYXRlKCkge1xuICAgICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ2lucHV0JywgdGhpcy52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xlYXIoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdpbnB1dCcsIHRoaXMubXVsdGlwbGUgPyBbXSA6IG51bGwpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICBpZiAodGhpcy5pc1NlcnZlclNpZGUpIHtcbiAgICAgICAgICAgIHRoaXMuZ2V0T3B0aW9ucygpO1xuICAgICAgICB9XG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc3JjPVwidnVlLW11bHRpc2VsZWN0L2Rpc3QvdnVlLW11bHRpc2VsZWN0Lm1pbi5jc3NcIj48L3N0eWxlPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIj5cblxuICAgIC52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdCB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDM2cHg7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWdzIHtcbiAgICAgICAgbWluLWhlaWdodDogMzZweDtcbiAgICAgICAgbWF4LWhlaWdodDogMzZweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDQwcHggMCA0cHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcblxuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6ICNiNWI1YjU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubXVsdGlzZWxlY3QuaGFzLWVycm9yIC5tdWx0aXNlbGVjdF9fdGFncyB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNlNTA4MDA7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X190YWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCAubXVsdGlzZWxlY3RfX3RhZy1pY29uIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICB9XG5cbiAgICBkaXYudnVlLXNlbGVjdCBpbnB1dFt0eXBlPXRleHRdLm11bHRpc2VsZWN0X19pbnB1dCB7XG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMnB4O1xuICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fY29udGVudC13cmFwcGVyIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogM3B4O1xuICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogM3B4O1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fb3B0aW9uLFxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fb3B0aW9uOmFmdGVyIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDM2cHg7XG4gICAgfVxuXG4gICAgZGl2LnZ1ZS1zZWxlY3QgLm11bHRpc2VsZWN0X19zZWxlY3Qge1xuICAgICAgICB3aWR0aDogMzRweDtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fc2VsZWN0OmJlZm9yZSB7XG4gICAgICAgIHRvcDogNzAlO1xuICAgIH1cblxuICAgIGRpdi52dWUtc2VsZWN0IC5tdWx0aXNlbGVjdF9fc3Bpbm5lciB7XG4gICAgICAgIGhlaWdodDogMzRweDtcbiAgICAgICAgd2lkdGg6IDM0cHg7XG4gICAgfVxuXG4gICAgc3Bhbi5tdWx0aXNlbGVjdF9fdGFnIHtcbiAgICAgICAgcGFkZGluZzogNXB4IDI2cHggNXB4IDEwcHg7XG4gICAgfVxuXG4gICAgLm11bHRpc2VsZWN0LCAubXVsdGlzZWxlY3RfX2lucHV0LCAubXVsdGlzZWxlY3RfX3NpbmdsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICB9XG5cbiAgICAubXVsdGlzZWxlY3RfX2NsZWFyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgcmlnaHQ6IDMwcHg7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLm11bHRpc2VsZWN0X19jbGVhcjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuXG4gICAgLm11bHRpc2VsZWN0X19jbGVhcjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgfVxuXG4gICAgLm11bHRpc2VsZWN0X19jbGVhcjphZnRlciwgLm11bHRpc2VsZWN0X19jbGVhcjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgIGJhY2tncm91bmQ6ICNhYWE7XG4gICAgICAgIHRvcDogM3B4O1xuICAgICAgICByaWdodDogMTBweDtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vc2VsZWN0L1Z1ZVNlbGVjdC52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZGl2XCIsXG4gICAgeyBzdGF0aWNDbGFzczogXCJ2dWUtc2VsZWN0XCIgfSxcbiAgICBbXG4gICAgICBfYyhcbiAgICAgICAgXCJtdWx0aXNlbGVjdFwiLFxuICAgICAgICB7XG4gICAgICAgICAgY2xhc3M6IHsgXCJoYXMtZXJyb3JcIjogX3ZtLmhhc0Vycm9yIH0sXG4gICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIHZhbHVlOiBfdm0udmFsdWUsXG4gICAgICAgICAgICBzZWFyY2hhYmxlOiBcIlwiLFxuICAgICAgICAgICAgXCJhbGxvdy1lbXB0eVwiOiBcIlwiLFxuICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kaXNhYmxlZCxcbiAgICAgICAgICAgIFwiaW50ZXJuYWwtc2VhcmNoXCI6ICFfdm0uaXNTZXJ2ZXJTaWRlLFxuICAgICAgICAgICAgbXVsdGlwbGU6IF92bS5tdWx0aXBsZSxcbiAgICAgICAgICAgIHRhZ2dhYmxlOiBfdm0udGFnZ2FibGUsXG4gICAgICAgICAgICBcImNsZWFyLW9uLXNlbGVjdFwiOiAhX3ZtLm11bHRpcGxlLFxuICAgICAgICAgICAgXCJjbG9zZS1vbi1zZWxlY3RcIjogIV92bS5tdWx0aXBsZSxcbiAgICAgICAgICAgIFwic2VsZWN0LWxhYmVsXCI6IF92bS5fXyhfdm0ubGFiZWxzLnNlbGVjdCksXG4gICAgICAgICAgICBcImRlc2VsZWN0LWxhYmVsXCI6IF92bS5fXyhfdm0ubGFiZWxzLmRlc2VsZWN0KSxcbiAgICAgICAgICAgIFwic2VsZWN0ZWQtbGFiZWxcIjogX3ZtLl9fKF92bS5sYWJlbHMuc2VsZWN0ZWQpLFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI6IF92bS5fXyhfdm0ubGFiZWxzLnBsYWNlaG9sZGVyKSxcbiAgICAgICAgICAgIGxvYWRpbmc6IF92bS5sb2FkaW5nLFxuICAgICAgICAgICAgXCJvcHRpb25zLWxpbWl0XCI6IDEwMCxcbiAgICAgICAgICAgIG9wdGlvbnM6IF92bS5vcHRpb25LZXlzLFxuICAgICAgICAgICAgXCJjdXN0b20tbGFiZWxcIjogX3ZtLmN1c3RvbUxhYmVsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJzZWFyY2gtY2hhbmdlXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0ucXVlcnkgPSAkZXZlbnRcbiAgICAgICAgICAgICAgX3ZtLmdldE9wdGlvbnMoKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHRhZzogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS4kZW1pdChcInRhZ1wiLCAkZXZlbnQpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJpbnB1dFwiLCAkZXZlbnQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcIm9wdGlvblwiLFxuICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICBpbm5lckhUTUw6IF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kb3B0aW9ucy5maWx0ZXJzLmhpZ2hsaWdodChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLm9wdGlvbkxpc3RbcHJvcHMub3B0aW9uXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnF1ZXJ5XG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAga2V5OiBcImNsZWFyXCIsXG4gICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgIHJldHVybiAhX3ZtLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uaGFzU2VsZWN0aW9uXG4gICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZGl2XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJtdWx0aXNlbGVjdF9fY2xlYXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW91c2Vkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5jbGVhcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSlcbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFwic3BhblwiLCB7IGF0dHJzOiB7IHNsb3Q6IFwibm9SZXN1bHRcIiB9LCBzbG90OiBcIm5vUmVzdWx0XCIgfSwgW1xuICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9fKF92bS5sYWJlbHMubm9SZXN1bHQpKSArXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICApXG4gICAgICAgICAgXSlcbiAgICAgICAgXVxuICAgICAgKVxuICAgIF0sXG4gICAgMVxuICApXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTczMDc2ZTlmXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi03MzA3NmU5ZlwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVNlbGVjdC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxuZnVuY3Rpb24gaW5qZWN0U3R5bGUgKHNzckNvbnRleHQpIHtcbiAgaWYgKGRpc3Bvc2VkKSByZXR1cm5cbiAgcmVxdWlyZShcIiEhdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXg/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRkNDQzZmUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSFmbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzXCIpXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9EYXRlcGlja2VyLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRGF0ZXBpY2tlci52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTRkNDQzZmUyXFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRGF0ZXBpY2tlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTRkNDQzZmUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNGQ0NDNmZTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi9tYXRlcmlhbF9ncmVlbi5jc3NcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiMWRiYjljMzBcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRkNDQzZmUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuL21hdGVyaWFsX2dyZWVuLmNzc1wiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNGQ0NDNmZTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4vbWF0ZXJpYWxfZ3JlZW4uY3NzXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTRkNDQzZmUyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL2ZsYXRwaWNrci9kaXN0L3RoZW1lcy9tYXRlcmlhbF9ncmVlbi5jc3Ncbi8vIG1vZHVsZSBpZCA9IDExMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uZmxhdHBpY2tyLWNhbGVuZGFyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG1heC1oZWlnaHQ6IDA7XFxuICBvcGFjaXR5OiAwO1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBub25lO1xcbiAgICAgICAgICBhbmltYXRpb246IG5vbmU7XFxuICBkaXJlY3Rpb246IGx0cjtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwNy44NzVweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tcy10b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gICAgICB0b3VjaC1hY3Rpb246IG1hbmlwdWxhdGlvbjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAzcHggMTNweCByZ2JhKDAsMCwwLDAuMDgpO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAwIDNweCAxM3B4IHJnYmEoMCwwLDAsMC4wOCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIub3BlbixcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmlubGluZSB7XFxuICBvcGFjaXR5OiAxO1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIG92ZXJmbG93OiB2aXNpYmxlO1xcbiAgbWF4LWhlaWdodDogNjQwcHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIub3BlbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB6LWluZGV4OiA5OTk5OTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlLm9wZW4ge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluRG93biAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW5Eb3duIDMwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5pbmxpbmUge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB0b3A6IDJweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zdGF0aWMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiBjYWxjKDEwMCUgKyAycHgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnN0YXRpYy5vcGVuIHtcXG4gIHotaW5kZXg6IDk5OTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmhhc1dlZWtzIHtcXG4gIHdpZHRoOiBhdXRvO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNXZWVrcyAuZGF5Q29udGFpbmVyLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIgLmhhc1RpbWUgLmRheUNvbnRhaW5lciB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XFxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNXZWVrcyAuZGF5Q29udGFpbmVyIHtcXG4gIGJvcmRlci1sZWZ0OiAwO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnNob3dUaW1lSW5wdXQuaGFzVGltZSAuZmxhdHBpY2tyLXRpbWUge1xcbiAgaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zaG93VGltZUlucHV0Lmhhc1RpbWUgLmZsYXRwaWNrci1pbm5lckNvbnRhaW5lciB7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnNob3dUaW1lSW5wdXQuaGFzVGltZSAuZmxhdHBpY2tyLXRpbWUge1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm5vQ2FsZW5kYXIuaGFzVGltZSAuZmxhdHBpY2tyLXRpbWUge1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmFmdGVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBib3JkZXI6IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgY29udGVudDogJyc7XFxuICBoZWlnaHQ6IDA7XFxuICB3aWR0aDogMDtcXG4gIGxlZnQ6IDIycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIucmlnaHRNb3N0OmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnJpZ2h0TW9zdDphZnRlciB7XFxuICBsZWZ0OiBhdXRvO1xcbiAgcmlnaHQ6IDIycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YmVmb3JlIHtcXG4gIGJvcmRlci13aWR0aDogNXB4O1xcbiAgbWFyZ2luOiAwIC01cHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXI6YWZ0ZXIge1xcbiAgYm9yZGVyLXdpZHRoOiA0cHg7XFxuICBtYXJnaW46IDAgLTRweDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDphZnRlciB7XFxuICBib3R0b206IDEwMCU7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YmVmb3JlIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6IHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd1RvcDphZnRlciB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjMWJiYzliO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmJlZm9yZSxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmFmdGVyIHtcXG4gIHRvcDogMTAwJTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTpiZWZvcmUge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93Qm90dG9tOmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICMxYmJjOWI7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXI6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmZsYXRwaWNrci13cmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLmZsYXRwaWNrci1tb250aCB7XFxuICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZpbGw6ICNmZmY7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGgsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxuICBoZWlnaHQ6IDI4cHg7XFxuICBwYWRkaW5nOiAxMHB4IGNhbGMoMy41NyUgLSAxLjVweCk7XFxuICB6LWluZGV4OiAzO1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGggaSxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGggaSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aC5mbGF0cGlja3ItcHJldi1tb250aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGguZmxhdHBpY2tyLXByZXYtbW9udGgge1xcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbiAgbGVmdDogMDtcXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxufVxcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4uZmxhdHBpY2tyLXByZXYtbW9udGguZmxhdHBpY2tyLW5leHQtbW9udGgsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoLmZsYXRwaWNrci1uZXh0LW1vbnRoIHtcXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG4gIHJpZ2h0OiAwO1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG59XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi5mbGF0cGlja3ItcHJldi1tb250aDpob3ZlcixcXG4uZmxhdHBpY2tyLW5leHQtbW9udGg6aG92ZXIge1xcbiAgY29sb3I6ICNiYmI7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aDpob3ZlciBzdmcsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyIHN2ZyB7XFxuICBmaWxsOiAjZjY0NzQ3O1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGggc3ZnLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCBzdmcge1xcbiAgd2lkdGg6IDE0cHg7XFxufVxcbi5mbGF0cGlja3ItcHJldi1tb250aCBzdmcgcGF0aCxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGggc3ZnIHBhdGgge1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBmaWxsIDAuMXM7XFxuICB0cmFuc2l0aW9uOiBmaWxsIDAuMXM7XFxuICBmaWxsOiBpbmhlcml0O1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLm51bUlucHV0V3JhcHBlciBpbnB1dCxcXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIGlucHV0IHtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMTRweDtcXG4gIHBhZGRpbmc6IDAgNHB4IDAgMnB4O1xcbiAgaGVpZ2h0OiA1MCU7XFxuICBsaW5lLWhlaWdodDogNTAlO1xcbiAgb3BhY2l0eTogMDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4wNSk7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3Bhbjpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMSk7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbjphY3RpdmUge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjIpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46YWZ0ZXIge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzMlO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcCB7XFxuICB0b3A6IDA7XFxuICBib3JkZXItYm90dG9tOiAwO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcDphZnRlciB7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItYm90dG9tOiA0cHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjYpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duIHtcXG4gIHRvcDogNTAlO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcXG4gIGJvcmRlci1sZWZ0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmlnaHQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci10b3A6IDRweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuNik7XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiBzdmcge1xcbiAgd2lkdGg6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgc3BhbiBzdmcgcGF0aCB7XFxuICBmaWxsOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxufVxcbi5udW1JbnB1dFdyYXBwZXI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjA1KTtcXG59XFxuLm51bUlucHV0V3JhcHBlcjpob3ZlciBzcGFuIHtcXG4gIG9wYWNpdHk6IDE7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCB7XFxuICBmb250LXNpemU6IDEzNSU7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiA3NSU7XFxuICBsZWZ0OiAxMi41JTtcXG4gIHBhZGRpbmc6IDYuMTZweCAwIDAgMDtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGguc2xpZGVMZWZ0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGguc2xpZGVMZWZ0TmV3IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGVhc2UsIGZwU2xpZGVMZWZ0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aC5zbGlkZVJpZ2h0IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBlYXNlLCBmcFNsaWRlUmlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBlYXNlLCBmcFNsaWRlUmlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGguc2xpZGVSaWdodE5ldyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHNwYW4uY3VyLW1vbnRoIHtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIGNvbG9yOiBpbmhlcml0O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDAuNWNoO1xcbiAgcGFkZGluZzogMDtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIHNwYW4uY3VyLW1vbnRoOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHtcXG4gIHdpZHRoOiA2Y2g7XFxuICB3aWR0aDogN2NoXFxcXDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dVcDphZnRlciB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiAjZmZmO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjZmZmO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXIge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDAgMCAwIDAuNWNoO1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcbiAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBoZWlnaHQ6IGluaXRpYWw7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgdmVydGljYWwtYWxpZ246IGluaXRpYWw7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcjpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXJbZGlzYWJsZWRdLFxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBpbnB1dC5jdXIteWVhcltkaXNhYmxlZF06aG92ZXIge1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC41KTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxufVxcbi5mbGF0cGlja3Itd2Vla2RheXMge1xcbiAgYmFja2dyb3VuZDogIzFiYmM5YjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbn1cXG5zcGFuLmZsYXRwaWNrci13ZWVrZGF5IHtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIGZvbnQtc2l6ZTogOTAlO1xcbiAgYmFja2dyb3VuZDogIzFiYmM5YjtcXG4gIGNvbG9yOiByZ2JhKDAsMCwwLDAuNTQpO1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBtYXJnaW46IDA7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIC13ZWJraXQtYm94LWZsZXg6IDE7XFxuICAtd2Via2l0LWZsZXg6IDE7XFxuICAgICAgLW1zLWZsZXg6IDE7XFxuICAgICAgICAgIGZsZXg6IDE7XFxuICBmb250LXdlaWdodDogYm9sZGVyO1xcbn1cXG4uZGF5Q29udGFpbmVyLFxcbi5mbGF0cGlja3Itd2Vla3Mge1xcbiAgcGFkZGluZzogMXB4IDAgMCAwO1xcbn1cXG4uZmxhdHBpY2tyLWRheXMge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDMwNy44NzVweDtcXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLWRheXM6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmRheUNvbnRhaW5lciB7XFxuICBwYWRkaW5nOiAwO1xcbiAgb3V0bGluZTogMDtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICB3aWR0aDogMzA3Ljg3NXB4O1xcbiAgbWluLXdpZHRoOiAzMDcuODc1cHg7XFxuICBtYXgtd2lkdGg6IDMwNy44NzVweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1mbGV4LXdyYXA6IHdyYXA7XFxuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcXG4gIC1tcy1mbGV4LXdyYXA6IHdyYXA7XFxuICAtbXMtZmxleC1wYWNrOiBqdXN0aWZ5O1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZUxlZnQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdCxcXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZUxlZnROZXcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0TmV3IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVSaWdodCB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlUmlnaHROZXcge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZVJpZ2h0TmV3IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItZGF5IHtcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxuICBib3JkZXI6IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1MHB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6ICM0ODQ4NDg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbiAgd2lkdGg6IDE0LjI4NTcxNDMlO1xcbiAgLXdlYmtpdC1mbGV4LWJhc2lzOiAxNC4yODU3MTQzJTtcXG4gICAgICAtbXMtZmxleC1wcmVmZXJyZWQtc2l6ZTogMTQuMjg1NzE0MyU7XFxuICAgICAgICAgIGZsZXgtYmFzaXM6IDE0LjI4NTcxNDMlO1xcbiAgbWF4LXdpZHRoOiAzOXB4O1xcbiAgaGVpZ2h0OiAzOXB4O1xcbiAgbGluZS1oZWlnaHQ6IDM5cHg7XFxuICBtYXJnaW46IDA7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWJveC1wYWNrOiBjZW50ZXI7XFxuICAtd2Via2l0LWp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbi5mbGF0cGlja3ItZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkudG9kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXkudG9kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXkudG9kYXkuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5OmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheTpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5uZXh0TW9udGhEYXk6Zm9jdXMge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgb3V0bGluZTogMDtcXG4gIGJhY2tncm91bmQ6ICNlMmUyZTI7XFxuICBib3JkZXItY29sb3I6ICNlMmUyZTI7XFxufVxcbi5mbGF0cGlja3ItZGF5LnRvZGF5IHtcXG4gIGJvcmRlci1jb2xvcjogI2JiYjtcXG59XFxuLmZsYXRwaWNrci1kYXkudG9kYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkudG9kYXk6Zm9jdXMge1xcbiAgYm9yZGVyLWNvbG9yOiAjYmJiO1xcbiAgYmFja2dyb3VuZDogI2JiYjtcXG4gIGNvbG9yOiAjZmZmO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZCxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQ6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZTpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZTpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZDpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlOmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnByZXZNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQubmV4dE1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UubmV4dE1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLm5leHRNb250aERheSB7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgY29sb3I6ICNmZmY7XFxuICBib3JkZXItY29sb3I6ICMxYmJjOWI7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLnN0YXJ0UmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5zdGFydFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LmVuZFJhbmdlLnN0YXJ0UmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogNTBweCAwIDAgNTBweDtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5lbmRSYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiAwIDUwcHggNTBweCAwO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5zdGFydFJhbmdlICsgLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5zdGFydFJhbmdlICsgLmVuZFJhbmdlIHtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTEwcHggMCAwICMxYmJjOWI7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC0xMHB4IDAgMCAjMWJiYzliO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5zdGFydFJhbmdlLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5zdGFydFJhbmdlLmVuZFJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHg7XFxufVxcbi5mbGF0cGlja3ItZGF5LmluUmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTVweCAwIDAgI2UyZTJlMiwgNXB4IDAgMCAjZTJlMmUyO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAtNXB4IDAgMCAjZTJlMmUyLCA1cHggMCAwICNlMmUyZTI7XFxufVxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkLFxcbi5mbGF0cGlja3ItZGF5LmRpc2FibGVkOmhvdmVyIHtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZCxcXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZDpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQsXFxuLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZC5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkubm90QWxsb3dlZC5uZXh0TW9udGhEYXkge1xcbiAgY29sb3I6IHJnYmEoNzIsNzIsNzIsMC4zKTtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuLmZsYXRwaWNrci1kYXkud2Vlay5zZWxlY3RlZCB7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAtNXB4IDAgMCAjMWJiYzliLCA1cHggMCAwICMxYmJjOWI7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IC01cHggMCAwICMxYmJjOWIsIDVweCAwIDAgIzFiYmM5YjtcXG59XFxuLnJhbmdlTW9kZSAuZmxhdHBpY2tyLWRheSB7XFxuICBtYXJnaW4tdG9wOiAxcHg7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgLmZsYXRwaWNrci13ZWVrcyB7XFxuICBwYWRkaW5nOiAwIDEycHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciAuZmxhdHBpY2tyLXdlZWtkYXkge1xcbiAgZmxvYXQ6IG5vbmU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIHNwYW4uZmxhdHBpY2tyLWRheSB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LXdpZHRoOiBub25lO1xcbn1cXG4uZmxhdHBpY2tyLWlubmVyQ29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwYWRkaW5nOiAwO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3V0bGluZTogMDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgaGVpZ2h0OiAwO1xcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XFxuICBtYXgtaGVpZ2h0OiA0MHB4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgYmFja2dyb3VuZDogI2ZmZjtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCA1cHggNXB4O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWU6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBkaXNwbGF5OiB0YWJsZTtcXG4gIGNsZWFyOiBib3RoO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciB7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGhlaWdodDogNDBweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzQ4NDg0ODtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogIzQ4NDg0ODtcXG59XFxuLmZsYXRwaWNrci10aW1lLmhhc1NlY29uZHMgLm51bUlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogMjYlO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUudGltZTI0aHIgLm51bUlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogNDklO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQge1xcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IG5vbmU7XFxuICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICM0ODQ4NDg7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3ItaG91ciB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0LmZsYXRwaWNrci1taW51dGUsXFxuLmZsYXRwaWNrci10aW1lIGlucHV0LmZsYXRwaWNrci1zZWNvbmQge1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0OmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxuICBib3JkZXI6IDA7XFxufVxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yLFxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtIHtcXG4gIGhlaWdodDogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBjb2xvcjogIzQ4NDg0ODtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgd2lkdGg6IDIlO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIC13ZWJraXQtYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LWl0ZW0tYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbSB7XFxuICBvdXRsaW5lOiAwO1xcbiAgd2lkdGg6IDE4JTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtOmhvdmVyLFxcbi5mbGF0cGlja3ItdGltZSAuZmxhdHBpY2tyLWFtLXBtOmZvY3VzIHtcXG4gIGJhY2tncm91bmQ6ICNlY2VjZWM7XFxufVxcbi5mbGF0cGlja3ItaW5wdXRbcmVhZG9ubHldIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwRmFkZUluRG93biB7XFxuZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxufVxcbnRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZwRmFkZUluRG93biB7XFxuZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxufVxcbnRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxufVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBTbGlkZUxlZnQge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZwU2xpZGVMZWZ0IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwU2xpZGVMZWZ0TmV3IHtcXG5mcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG59XFxufVxcbkBrZXlmcmFtZXMgZnBTbGlkZUxlZnROZXcge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbn1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwU2xpZGVSaWdodCB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG59XFxuQGtleWZyYW1lcyBmcFNsaWRlUmlnaHQge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxufVxcbnRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlUmlnaHROZXcge1xcbmZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG59XFxudG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZwU2xpZGVSaWdodE5ldyB7XFxuZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwcHgpO1xcbn1cXG50byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcEZhZGVPdXQge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbn1cXG5Aa2V5ZnJhbWVzIGZwRmFkZU91dCB7XFxuZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbnRvIHtcXG4gICAgb3BhY2l0eTogMDtcXG59XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcEZhZGVJbiB7XFxuZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxufVxcbnRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxufVxcbkBrZXlmcmFtZXMgZnBGYWRlSW4ge1xcbmZyb20ge1xcbiAgICBvcGFjaXR5OiAwO1xcbn1cXG50byB7XFxuICAgIG9wYWNpdHk6IDE7XFxufVxcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9ub2RlX21vZHVsZXMvZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSx3QkFBd0I7RUFDeEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsd0JBQXdCO1VBQ2hCLGdCQUFnQjtFQUN4QixlQUFlO0VBQ2YsVUFBVTtFQUNWLGdCQUFnQjtFQUNoQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsK0JBQStCO1VBQ3ZCLHVCQUF1QjtFQUMvQiwrQkFBK0I7TUFDM0IsMkJBQTJCO0VBQy9CLGdEQUFnRDtVQUN4Qyx3Q0FBd0M7Q0FDakQ7QUFDRDs7RUFFRSxXQUFXO0VBQ1gsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQkFBa0I7Q0FDbkI7QUFDRDtFQUNFLHNCQUFzQjtFQUN0QixlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxxRUFBcUU7VUFDN0QsNkRBQTZEO0NBQ3RFO0FBQ0Q7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFNBQVM7Q0FDVjtBQUNEO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtDQUN2QjtBQUNEO0VBQ0UsYUFBYTtFQUNiLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLFlBQVk7Q0FDYjtBQUNEOztFQUVFLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0NBQzlCO0FBQ0Q7RUFDRSxlQUFlO0NBQ2hCO0FBQ0Q7RUFDRSxhQUFhO0VBQ2IseUNBQXlDO0NBQzFDO0FBQ0Q7RUFDRSxpQkFBaUI7Q0FDbEI7QUFDRDtFQUNFLHFDQUFxQztDQUN0QztBQUNEO0VBQ0UsYUFBYTtDQUNkO0FBQ0Q7O0VBRUUsbUJBQW1CO0VBQ25C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O0NBQ2hEO0NBQ0Y7QUFDRDtBQUNFO0lBQ0UsOENBQThDO1lBQ3RDLHNDQUFzQztDQUMvQztBQUNEO0lBQ0UsMENBQTBDO1lBQ2xDLGtDQUFrQztDQUMzQztDQUNGO0FBQ0Q7QUFDRTtJQUNFLDhDQUE4QztZQUN0QyxzQ0FBc0M7Q0FDL0M7QUFDRDtJQUNFLDBDQUEwQztZQUNsQyxrQ0FBa0M7Q0FDM0M7Q0FDRjtBQUNEO0FBQ0U7SUFDRSxXQUFXO0NBQ1o7QUFDRDtJQUNFLFdBQVc7Q0FDWjtDQUNGO0FBQ0Q7QUFDRTtJQUNFLFdBQVc7Q0FDWjtBQUNEO0lBQ0UsV0FBVztDQUNaO0NBQ0Y7QUFDRDtBQUNFO0lBQ0UsV0FBVztDQUNaO0FBQ0Q7SUFDRSxXQUFXO0NBQ1o7Q0FDRjtBQUNEO0FBQ0U7SUFDRSxXQUFXO0NBQ1o7QUFDRDtJQUNFLFdBQVc7Q0FDWjtDQUNGXCIsXCJmaWxlXCI6XCJtYXRlcmlhbF9ncmVlbi5jc3NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZsYXRwaWNrci1jYWxlbmRhciB7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBtYXgtaGVpZ2h0OiAwO1xcbiAgb3BhY2l0eTogMDtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDA7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogbm9uZTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBub25lO1xcbiAgZGlyZWN0aW9uOiBsdHI7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBsaW5lLWhlaWdodDogMjRweDtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbXMtdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAgICAgdG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgM3B4IDEzcHggcmdiYSgwLDAsMCwwLjA4KTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogMCAzcHggMTNweCByZ2JhKDAsMCwwLDAuMDgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm9wZW4sXFxuLmZsYXRwaWNrci1jYWxlbmRhci5pbmxpbmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XFxuICBvdmVyZmxvdzogdmlzaWJsZTtcXG4gIG1heC1oZWlnaHQ6IDY0MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLm9wZW4ge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgei1pbmRleDogOTk5OTk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZS5vcGVuIHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbkRvd24gMzAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluRG93biAzMDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuaW5saW5lIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgdG9wOiAycHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc3RhdGljIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYygxMDAlICsgMnB4KTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zdGF0aWMub3BlbiB7XFxuICB6LWluZGV4OiA5OTk7XFxuICBkaXNwbGF5OiBibG9jaztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5oYXNXZWVrcyB7XFxuICB3aWR0aDogYXV0bztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzV2Vla3MgLmRheUNvbnRhaW5lcixcXG4uZmxhdHBpY2tyLWNhbGVuZGFyIC5oYXNUaW1lIC5kYXlDb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhciAuaGFzV2Vla3MgLmRheUNvbnRhaW5lciB7XFxuICBib3JkZXItbGVmdDogMDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zaG93VGltZUlucHV0Lmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGhlaWdodDogNDBweDtcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuc2hvd1RpbWVJbnB1dC5oYXNUaW1lIC5mbGF0cGlja3ItaW5uZXJDb250YWluZXIge1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5zaG93VGltZUlucHV0Lmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5ub0NhbGVuZGFyLmhhc1RpbWUgLmZsYXRwaWNrci10aW1lIHtcXG4gIGhlaWdodDogYXV0bztcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhcjpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhcjphZnRlciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgYm9yZGVyOiBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgaGVpZ2h0OiAwO1xcbiAgd2lkdGg6IDA7XFxuICBsZWZ0OiAyMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLnJpZ2h0TW9zdDpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5yaWdodE1vc3Q6YWZ0ZXIge1xcbiAgbGVmdDogYXV0bztcXG4gIHJpZ2h0OiAyMnB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmJlZm9yZSB7XFxuICBib3JkZXItd2lkdGg6IDVweDtcXG4gIG1hcmdpbjogMCAtNXB4O1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmFmdGVyIHtcXG4gIGJvcmRlci13aWR0aDogNHB4O1xcbiAgbWFyZ2luOiAwIC00cHg7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YmVmb3JlLFxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YWZ0ZXIge1xcbiAgYm90dG9tOiAxMDAlO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFycm93VG9wOmJlZm9yZSB7XFxuICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dUb3A6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTpiZWZvcmUsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlciB7XFxuICB0b3A6IDEwMCU7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYXJyb3dCb3R0b206YmVmb3JlIHtcXG4gIGJvcmRlci10b3AtY29sb3I6IHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hcnJvd0JvdHRvbTphZnRlciB7XFxuICBib3JkZXItdG9wLWNvbG9yOiAjMWJiYzliO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5mbGF0cGlja3Itd3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcbi5mbGF0cGlja3ItbW9udGgge1xcbiAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XFxuICBiYWNrZ3JvdW5kOiAjMWJiYzliO1xcbiAgY29sb3I6ICNmZmY7XFxuICBmaWxsOiAjZmZmO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aCB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDBweDtcXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgcGFkZGluZzogMTBweCBjYWxjKDMuNTclIC0gMS41cHgpO1xcbiAgei1pbmRleDogMztcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIGksXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIGkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGguZmxhdHBpY2tyLXByZXYtbW9udGgsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoLmZsYXRwaWNrci1wcmV2LW1vbnRoIHtcXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgKi9cXG4gIGxlZnQ6IDA7XFxuLypcXG4gICAgICAgIC8qcnRsOmVuZDppZ25vcmUqL1xcbi8qXFxuICAgICAgICAqL1xcbn1cXG4vKlxcbiAgICAgICAgLypydGw6YmVnaW46aWdub3JlKi9cXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoLmZsYXRwaWNrci1uZXh0LW1vbnRoLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aC5mbGF0cGlja3ItbmV4dC1tb250aCB7XFxuLypcXG4gICAgICAgIC8qcnRsOmJlZ2luOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxuICByaWdodDogMDtcXG4vKlxcbiAgICAgICAgLypydGw6ZW5kOmlnbm9yZSovXFxuLypcXG4gICAgICAgICovXFxufVxcbi8qXFxuICAgICAgICAvKnJ0bDpiZWdpbjppZ25vcmUqL1xcbi8qXFxuICAgICAgICAvKnJ0bDplbmQ6aWdub3JlKi9cXG4uZmxhdHBpY2tyLXByZXYtbW9udGg6aG92ZXIsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoOmhvdmVyIHtcXG4gIGNvbG9yOiAjYmJiO1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGg6aG92ZXIgc3ZnLFxcbi5mbGF0cGlja3ItbmV4dC1tb250aDpob3ZlciBzdmcge1xcbiAgZmlsbDogI2Y2NDc0NztcXG59XFxuLmZsYXRwaWNrci1wcmV2LW1vbnRoIHN2ZyxcXG4uZmxhdHBpY2tyLW5leHQtbW9udGggc3ZnIHtcXG4gIHdpZHRoOiAxNHB4O1xcbn1cXG4uZmxhdHBpY2tyLXByZXYtbW9udGggc3ZnIHBhdGgsXFxuLmZsYXRwaWNrci1uZXh0LW1vbnRoIHN2ZyBwYXRoIHtcXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogZmlsbCAwLjFzO1xcbiAgdHJhbnNpdGlvbjogZmlsbCAwLjFzO1xcbiAgZmlsbDogaW5oZXJpdDtcXG59XFxuLm51bUlucHV0V3JhcHBlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IGF1dG87XFxufVxcbi5udW1JbnB1dFdyYXBwZXIgaW5wdXQsXFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG59XFxuLm51bUlucHV0V3JhcHBlciBpbnB1dCB7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDE0cHg7XFxuICBwYWRkaW5nOiAwIDRweCAwIDJweDtcXG4gIGhlaWdodDogNTAlO1xcbiAgbGluZS1oZWlnaHQ6IDUwJTtcXG4gIG9wYWNpdHk6IDA7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMDUpO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46aG92ZXIge1xcbiAgYmFja2dyb3VuZDogcmdiYSgwLDAsMCwwLjEpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW46YWN0aXZlIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4yKTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuOmFmdGVyIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDMzJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXAge1xcbiAgdG9wOiAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMDtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWxlZnQ6IDRweCBzb2xpZCB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1yaWdodDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC42KTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93biB7XFxuICB0b3A6IDUwJTtcXG59XFxuLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93RG93bjphZnRlciB7XFxuICBib3JkZXItbGVmdDogNHB4IHNvbGlkIHRyYW5zcGFyZW50O1xcbiAgYm9yZGVyLXJpZ2h0OiA0cHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItdG9wOiA0cHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjYpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4gc3ZnIHtcXG4gIHdpZHRoOiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBhdXRvO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyIHNwYW4gc3ZnIHBhdGgge1xcbiAgZmlsbDogcmdiYSgyNTUsMjU1LDI1NSwwLjUpO1xcbn1cXG4ubnVtSW5wdXRXcmFwcGVyOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwwLDAsMC4wNSk7XFxufVxcbi5udW1JbnB1dFdyYXBwZXI6aG92ZXIgc3BhbiB7XFxuICBvcGFjaXR5OiAxO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGgge1xcbiAgZm9udC1zaXplOiAxMzUlO1xcbiAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogNzUlO1xcbiAgbGVmdDogMTIuNSU7XFxuICBwYWRkaW5nOiA2LjE2cHggMCAwIDA7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGhlaWdodDogMjhweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlTGVmdCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGVhc2UsIGZwU2xpZGVMZWZ0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlTGVmdE5ldyB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlTGVmdE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgZWFzZSwgZnBTbGlkZUxlZnROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGguc2xpZGVSaWdodCB7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gICAgICAgICAgYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgZWFzZSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoLnNsaWRlUmlnaHROZXcge1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBlYXNlLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbiAgICAgICAgICBhbmltYXRpb246IGZwRmFkZUluIDQwMG1zIGVhc2UsIGZwU2xpZGVSaWdodE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBzcGFuLmN1ci1tb250aCB7XFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiAwLjVjaDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcbi5mbGF0cGlja3ItY3VycmVudC1tb250aCBzcGFuLmN1ci1tb250aDpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuMDUpO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciB7XFxuICB3aWR0aDogNmNoO1xcbiAgd2lkdGg6IDdjaFxcXFwwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggLm51bUlucHV0V3JhcHBlciBzcGFuLmFycm93VXA6YWZ0ZXIge1xcbiAgYm9yZGVyLWJvdHRvbS1jb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd0Rvd246YWZ0ZXIge1xcbiAgYm9yZGVyLXRvcC1jb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyIHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAwIDAgMCAwLjVjaDtcXG4gIG1hcmdpbjogMDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgaGVpZ2h0OiBpbml0aWFsO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xcbn1cXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXI6Zm9jdXMge1xcbiAgb3V0bGluZTogMDtcXG59XFxuLmZsYXRwaWNrci1jdXJyZW50LW1vbnRoIGlucHV0LmN1ci15ZWFyW2Rpc2FibGVkXSxcXG4uZmxhdHBpY2tyLWN1cnJlbnQtbW9udGggaW5wdXQuY3VyLXllYXJbZGlzYWJsZWRdOmhvdmVyIHtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNSk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbn1cXG4uZmxhdHBpY2tyLXdlZWtkYXlzIHtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtYm94LWFsaWduOiBjZW50ZXI7XFxuICAtd2Via2l0LWFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgLW1zLWZsZXgtYWxpZ246IGNlbnRlcjtcXG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGhlaWdodDogMjhweDtcXG59XFxuc3Bhbi5mbGF0cGlja3Itd2Vla2RheSB7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBmb250LXNpemU6IDkwJTtcXG4gIGJhY2tncm91bmQ6ICMxYmJjOWI7XFxuICBjb2xvcjogcmdiYSgwLDAsMCwwLjU0KTtcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgbWFyZ2luOiAwO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICAtd2Via2l0LWJveC1mbGV4OiAxO1xcbiAgLXdlYmtpdC1mbGV4OiAxO1xcbiAgICAgIC1tcy1mbGV4OiAxO1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcXG59XFxuLmRheUNvbnRhaW5lcixcXG4uZmxhdHBpY2tyLXdlZWtzIHtcXG4gIHBhZGRpbmc6IDFweCAwIDAgMDtcXG59XFxuLmZsYXRwaWNrci1kYXlzIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAzMDcuODc1cHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoNzIsNzIsNzIsMC4yKTtcXG59XFxuLmZsYXRwaWNrci1kYXlzOmZvY3VzIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcbi5kYXlDb250YWluZXIge1xcbiAgcGFkZGluZzogMDtcXG4gIG91dGxpbmU6IDA7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAgd2lkdGg6IDMwNy44NzVweDtcXG4gIG1pbi13aWR0aDogMzA3Ljg3NXB4O1xcbiAgbWF4LXdpZHRoOiAzMDcuODc1cHg7XFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBkaXNwbGF5OiAtbXMtZmxleGJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIC13ZWJraXQtZmxleC13cmFwOiB3cmFwO1xcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XFxuICAtbXMtZmxleC13cmFwOiB3cmFwO1xcbiAgLW1zLWZsZXgtcGFjazoganVzdGlmeTtcXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgb3BhY2l0eTogMTtcXG59XFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVPdXQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZUxlZnQgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZUxlZnQsXFxuLmZsYXRwaWNrci1jYWxlbmRhci5hbmltYXRlIC5kYXlDb250YWluZXIuc2xpZGVMZWZ0TmV3IHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwcHgsIDBweCk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlTGVmdE5ldyB7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlTGVmdCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxufVxcbi5mbGF0cGlja3ItY2FsZW5kYXIuYW5pbWF0ZSAuZGF5Q29udGFpbmVyLnNsaWRlUmlnaHQge1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZwRmFkZU91dCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodCA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlT3V0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKSwgZnBTbGlkZVJpZ2h0IDQwMG1zIGN1YmljLWJlemllcigwLjIzLCAxLCAwLjMyLCAxKTtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMDAlLCAwcHgsIDBweCk7XFxuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbn1cXG4uZmxhdHBpY2tyLWNhbGVuZGFyLmFuaW1hdGUgLmRheUNvbnRhaW5lci5zbGlkZVJpZ2h0TmV3IHtcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmcEZhZGVJbiA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSksIGZwU2xpZGVSaWdodE5ldyA0MDBtcyBjdWJpYy1iZXppZXIoMC4yMywgMSwgMC4zMiwgMSk7XFxuICAgICAgICAgIGFuaW1hdGlvbjogZnBGYWRlSW4gNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpLCBmcFNsaWRlUmlnaHROZXcgNDAwbXMgY3ViaWMtYmV6aWVyKDAuMjMsIDEsIDAuMzIsIDEpO1xcbn1cXG4uZmxhdHBpY2tyLWRheSB7XFxuICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgYm9yZGVyOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XFxuICBib3JkZXItcmFkaXVzOiAxNTBweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIHdpZHRoOiAxNC4yODU3MTQzJTtcXG4gIC13ZWJraXQtZmxleC1iYXNpczogMTQuMjg1NzE0MyU7XFxuICAgICAgLW1zLWZsZXgtcHJlZmVycmVkLXNpemU6IDE0LjI4NTcxNDMlO1xcbiAgICAgICAgICBmbGV4LWJhc2lzOiAxNC4yODU3MTQzJTtcXG4gIG1heC13aWR0aDogMzlweDtcXG4gIGhlaWdodDogMzlweDtcXG4gIGxpbmUtaGVpZ2h0OiAzOXB4O1xcbiAgbWFyZ2luOiAwO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgLXdlYmtpdC1qdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1wYWNrOiBjZW50ZXI7XFxuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnByZXZNb250aERheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnRvZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LnRvZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5LnRvZGF5LmluUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXk6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheTpmb2N1cyxcXG4uZmxhdHBpY2tyLWRheS5wcmV2TW9udGhEYXk6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkubmV4dE1vbnRoRGF5OmZvY3VzIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG91dGxpbmU6IDA7XFxuICBiYWNrZ3JvdW5kOiAjZTJlMmUyO1xcbiAgYm9yZGVyLWNvbG9yOiAjZTJlMmUyO1xcbn1cXG4uZmxhdHBpY2tyLWRheS50b2RheSB7XFxuICBib3JkZXItY29sb3I6ICNiYmI7XFxufVxcbi5mbGF0cGlja3ItZGF5LnRvZGF5OmhvdmVyLFxcbi5mbGF0cGlja3ItZGF5LnRvZGF5OmZvY3VzIHtcXG4gIGJvcmRlci1jb2xvcjogI2JiYjtcXG4gIGJhY2tncm91bmQ6ICNiYmI7XFxuICBjb2xvcjogI2ZmZjtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuaW5SYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5pblJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkOmZvY3VzLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2U6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2U6Zm9jdXMsXFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQ6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZTpob3ZlcixcXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuc3RhcnRSYW5nZS5wcmV2TW9udGhEYXksXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5uZXh0TW9udGhEYXkge1xcbiAgYmFja2dyb3VuZDogIzFiYmM5YjtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogbm9uZTtcXG4gICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyLWNvbG9yOiAjMWJiYzliO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5zZWxlY3RlZC5zdGFydFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2Uuc3RhcnRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5lbmRSYW5nZS5zdGFydFJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDUwcHggMCAwIDUwcHg7XFxufVxcbi5mbGF0cGlja3ItZGF5LnNlbGVjdGVkLmVuZFJhbmdlLFxcbi5mbGF0cGlja3ItZGF5LnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2UuZW5kUmFuZ2Uge1xcbiAgYm9yZGVyLXJhZGl1czogMCA1MHB4IDUwcHggMDtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZSArIC5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UgKyAuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZSArIC5lbmRSYW5nZSB7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC0xMHB4IDAgMCAjMWJiYzliO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAtMTBweCAwIDAgIzFiYmM5YjtcXG59XFxuLmZsYXRwaWNrci1kYXkuc2VsZWN0ZWQuc3RhcnRSYW5nZS5lbmRSYW5nZSxcXG4uZmxhdHBpY2tyLWRheS5zdGFydFJhbmdlLnN0YXJ0UmFuZ2UuZW5kUmFuZ2UsXFxuLmZsYXRwaWNrci1kYXkuZW5kUmFuZ2Uuc3RhcnRSYW5nZS5lbmRSYW5nZSB7XFxuICBib3JkZXItcmFkaXVzOiA1MHB4O1xcbn1cXG4uZmxhdHBpY2tyLWRheS5pblJhbmdlIHtcXG4gIGJvcmRlci1yYWRpdXM6IDA7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IC01cHggMCAwICNlMmUyZTIsIDVweCAwIDAgI2UyZTJlMjtcXG4gICAgICAgICAgYm94LXNoYWRvdzogLTVweCAwIDAgI2UyZTJlMiwgNXB4IDAgMCAjZTJlMmUyO1xcbn1cXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZCxcXG4uZmxhdHBpY2tyLWRheS5kaXNhYmxlZDpob3ZlciB7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG59XFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQsXFxuLmZsYXRwaWNrci1kYXkuZGlzYWJsZWQ6aG92ZXIsXFxuLmZsYXRwaWNrci1kYXkucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5Lm5leHRNb250aERheSxcXG4uZmxhdHBpY2tyLWRheS5ub3RBbGxvd2VkLFxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQucHJldk1vbnRoRGF5LFxcbi5mbGF0cGlja3ItZGF5Lm5vdEFsbG93ZWQubmV4dE1vbnRoRGF5IHtcXG4gIGNvbG9yOiByZ2JhKDcyLDcyLDcyLDAuMyk7XFxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbi5mbGF0cGlja3ItZGF5LndlZWsuc2VsZWN0ZWQge1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogLTVweCAwIDAgIzFiYmM5YiwgNXB4IDAgMCAjMWJiYzliO1xcbiAgICAgICAgICBib3gtc2hhZG93OiAtNXB4IDAgMCAjMWJiYzliLCA1cHggMCAwICMxYmJjOWI7XFxufVxcbi5yYW5nZU1vZGUgLmZsYXRwaWNrci1kYXkge1xcbiAgbWFyZ2luLXRvcDogMXB4O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG4uZmxhdHBpY2tyLXdlZWt3cmFwcGVyIC5mbGF0cGlja3Itd2Vla3Mge1xcbiAgcGFkZGluZzogMCAxMnB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDcyLDcyLDcyLDAuMik7XFxufVxcbi5mbGF0cGlja3Itd2Vla3dyYXBwZXIgLmZsYXRwaWNrci13ZWVrZGF5IHtcXG4gIGZsb2F0OiBub25lO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBsaW5lLWhlaWdodDogMjhweDtcXG59XFxuLmZsYXRwaWNrci13ZWVrd3JhcHBlciBzcGFuLmZsYXRwaWNrci1kYXkge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1heC13aWR0aDogbm9uZTtcXG59XFxuLmZsYXRwaWNrci1pbm5lckNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xcbiAgZGlzcGxheTogLXdlYmtpdC1mbGV4O1xcbiAgZGlzcGxheTogLW1zLWZsZXhib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiYSg3Miw3Miw3MiwwLjIpO1xcbn1cXG4uZmxhdHBpY2tyLXJDb250YWluZXIge1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgcGFkZGluZzogMDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuLmZsYXRwaWNrci10aW1lIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG91dGxpbmU6IDA7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGhlaWdodDogMDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgbWF4LWhlaWdodDogNDBweDtcXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGJhY2tncm91bmQ6ICNmZmY7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgNXB4IDVweDtcXG59XFxuLmZsYXRwaWNrci10aW1lOmFmdGVyIHtcXG4gIGNvbnRlbnQ6IFxcXCJcXFwiO1xcbiAgZGlzcGxheTogdGFibGU7XFxuICBjbGVhcjogYm90aDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgLXdlYmtpdC1ib3gtZmxleDogMTtcXG4gIC13ZWJraXQtZmxleDogMTtcXG4gICAgICAtbXMtZmxleDogMTtcXG4gICAgICAgICAgZmxleDogMTtcXG4gIHdpZHRoOiA0MCU7XFxuICBoZWlnaHQ6IDQwcHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5udW1JbnB1dFdyYXBwZXIgc3Bhbi5hcnJvd1VwOmFmdGVyIHtcXG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM0ODQ4NDg7XFxufVxcbi5mbGF0cGlja3ItdGltZSAubnVtSW5wdXRXcmFwcGVyIHNwYW4uYXJyb3dEb3duOmFmdGVyIHtcXG4gIGJvcmRlci10b3AtY29sb3I6ICM0ODQ4NDg7XFxufVxcbi5mbGF0cGlja3ItdGltZS5oYXNTZWNvbmRzIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDI2JTtcXG59XFxuLmZsYXRwaWNrci10aW1lLnRpbWUyNGhyIC5udW1JbnB1dFdyYXBwZXIge1xcbiAgd2lkdGg6IDQ5JTtcXG59XFxuLmZsYXRwaWNrci10aW1lIGlucHV0IHtcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiBub25lO1xcbiAgICAgICAgICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBsaW5lLWhlaWdodDogaW5oZXJpdDtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjNDg0ODQ4O1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgaW5wdXQuZmxhdHBpY2tyLWhvdXIge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3ItbWludXRlLFxcbi5mbGF0cGlja3ItdGltZSBpbnB1dC5mbGF0cGlja3Itc2Vjb25kIHtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbi5mbGF0cGlja3ItdGltZSBpbnB1dDpmb2N1cyB7XFxuICBvdXRsaW5lOiAwO1xcbiAgYm9yZGVyOiAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci10aW1lLXNlcGFyYXRvcixcXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbSB7XFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDogbGVmdDtcXG4gIGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbiAgY29sb3I6ICM0ODQ4NDg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHdpZHRoOiAyJTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtd2Via2l0LWFsaWduLXNlbGY6IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1pdGVtLWFsaWduOiBjZW50ZXI7XFxuICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXG59XFxuLmZsYXRwaWNrci10aW1lIC5mbGF0cGlja3ItYW0tcG0ge1xcbiAgb3V0bGluZTogMDtcXG4gIHdpZHRoOiAxOCU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpob3ZlcixcXG4uZmxhdHBpY2tyLXRpbWUgLmZsYXRwaWNrci1hbS1wbTpmb2N1cyB7XFxuICBiYWNrZ3JvdW5kOiAjZWNlY2VjO1xcbn1cXG4uZmxhdHBpY2tyLWlucHV0W3JlYWRvbmx5XSB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcEZhZGVJbkRvd24ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAtMjBweCwgMCk7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgfVxcbn1cXG5Aa2V5ZnJhbWVzIGZwRmFkZUluRG93biB7XFxuICBmcm9tIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIC0yMHB4LCAwKTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmcFNsaWRlTGVmdCB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDBweCwgMHB4KTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwU2xpZGVMZWZ0TmV3IHtcXG4gIGZyb20ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMTAwJSwgMHB4LCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmcFNsaWRlTGVmdE5ldyB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDBweCwgMHB4LCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcFNsaWRlUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmcFNsaWRlUmlnaHQge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gIH1cXG4gIHRvIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDBweCwgMHB4KTtcXG4gIH1cXG59XFxuQC13ZWJraXQta2V5ZnJhbWVzIGZwU2xpZGVSaWdodE5ldyB7XFxuICBmcm9tIHtcXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDBweCk7XFxuICB9XFxuICB0byB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwcHgpO1xcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gIH1cXG59XFxuQGtleWZyYW1lcyBmcFNsaWRlUmlnaHROZXcge1xcbiAgZnJvbSB7XFxuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwcHgpO1xcbiAgfVxcbiAgdG8ge1xcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMHB4KTtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDBweCk7XFxuICB9XFxufVxcbkAtd2Via2l0LWtleWZyYW1lcyBmcEZhZGVPdXQge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBGYWRlT3V0IHtcXG4gIGZyb20ge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgfVxcbiAgdG8ge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgfVxcbn1cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZnBGYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcbkBrZXlmcmFtZXMgZnBGYWRlSW4ge1xcbiAgZnJvbSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICB9XFxuICB0byB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00ZDQ0M2ZlMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzXG4vLyBtb2R1bGUgaWQgPSAxMTE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTRkNDQzZmUyXFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL0RhdGVwaWNrZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3OThkNTY1MlwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9EYXRlcGlja2VyLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00ZDQ0M2ZlMlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTEhLi9EYXRlcGlja2VyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00ZDQ0M2ZlMlwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0xIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuYS5pbnB1dC1idXR0b24ge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFrSEE7SUFDQSxnQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJEYXRlcGlja2VyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxkaXYgY2xhc3M9XFxcImZsYXRwaWNrclxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb250cm9sIGhhcy1pY29ucy1yaWdodFxcXCI+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiXFxuICAgICAgICAgICAgICAgIDpwbGFjZWhvbGRlcj1cXFwicGxhY2Vob2xkZXJcXFwiXFxuICAgICAgICAgICAgICAgIDppZD1cXFwiJ2RhdGUtaW5wdXQtJyArIF91aWRcXFwiXFxuICAgICAgICAgICAgICAgIDpuYW1lPVxcXCJuYW1lXFxcIlxcbiAgICAgICAgICAgICAgICA6dmFsdWU9XFxcInZhbHVlXFxcIlxcbiAgICAgICAgICAgICAgICBjbGFzcz1cXFwiaW5wdXQgY29udHJvbFxcXCJcXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVxcXCJkaXNhYmxlZFxcXCI+XFxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb24gaXMtc21hbGwgaXMtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmFzIGZhLWNsb2NrXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwidGltZU9ubHlcXFwiPlxcbiAgICAgICAgICAgICAgICA8L2k+XFxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYXMgZmEtY2FsZW5kYXItYWx0XFxcIiB2LWVsc2U+PC9pPlxcbiAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Rpdj5cXG5cXG48L3RlbXBsYXRlPlxcblxcbjxzY3JpcHQ+XFxuXFxuaW1wb3J0IEZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InO1xcblxcbi8vIGNvbnN0IEZsYXRwaWNrckwxMG5zID0ge1xcbi8vICAgICBybzogcmVxdWlyZSgnZmxhdHBpY2tyL2Rpc3QvbDEwbi9yby5qcycpLnJvLFxcbi8vIH07XFxuLy8gRmxhdHBpY2tyLmxvY2FsaXplKEZsYXRwaWNrckwxMG5zW1N0b3JlLnVzZXIucHJlZmVyZW5jZXMuZ2xvYmFsLmxhbmddKTsgLy9maXhtZVxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIHZhbHVlOiB7XFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgICAgICB2YWxpZGF0ZSh2YWx1ZSkge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJ1xcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IHZhbHVlIGluc3RhbmNlb2YgRGF0ZSB8fCB2YWx1ZSBpbnN0YW5jZW9mIEFycmF5O1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICAgICAgbmFtZToge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHRpbWU6IHtcXG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIHRpbWVPbmx5OiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBwbGFjZWhvbGRlcjoge1xcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcXG4gICAgICAgICAgICBkZWZhdWx0OiAnU2VsZWN0IERhdGUnLCAvLyBmaXhtZVxcbiAgICAgICAgfSxcXG4gICAgICAgIGRpc2FibGVkOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICBmb3JtYXQ6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgZGVmYXVsdDogJ2QtbS1ZJyxcXG4gICAgICAgIH0sXFxuICAgICAgICBpbnB1dENsYXNzOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdmb3JtLWNvbnRyb2wnLFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgcGlja2VyOiBudWxsLFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIGNvbmZpZyhzZWxmID0gdGhpcykge1xcbiAgICAgICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgICAgIHdlZWtOdW1iZXJzOiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgZGVmYXVsdERhdGU6IHRoaXMudmFsdWUsXFxuICAgICAgICAgICAgICAgIGRhdGVGb3JtYXQ6IHRoaXMuZm9ybWF0LFxcbiAgICAgICAgICAgICAgICBhbGxvd0lucHV0OiBmYWxzZSxcXG4gICAgICAgICAgICAgICAgY2xpY2tPcGVuczogdHJ1ZSxcXG4gICAgICAgICAgICAgICAgbm9DYWxlbmRhcjogdGhpcy50aW1lT25seSxcXG4gICAgICAgICAgICAgICAgZW5hYmxlVGltZTogdGhpcy50aW1lIHx8IHRoaXMudGltZU9ubHksXFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIpIHtcXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuJGVtaXQoJ2lucHV0JywgZGF0ZVN0cik7XFxuICAgICAgICAgICAgICAgIH0sXFxuICAgICAgICAgICAgfTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIHdhdGNoOiB7XFxuICAgICAgICB2YWx1ZShuZXdWYWx1ZSkge1xcbiAgICAgICAgICAgIHRoaXMucGlja2VyLnNldERhdGUobmV3VmFsdWUpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgbW91bnRlZCgpIHtcXG4gICAgICAgIHRoaXMucGlja2VyID0gbmV3IEZsYXRwaWNrcih0aGlzLiRlbC5xdWVyeVNlbGVjdG9yKCdpbnB1dCcpLCB0aGlzLmNvbmZpZyk7XFxuICAgIH0sXFxuXFxuICAgIGJlZm9yZURlc3Ryb3koKSB7XFxuICAgICAgICB0aGlzLnBpY2tlci5kZXN0cm95KCk7XFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGUgc3JjPVxcXCJmbGF0cGlja3IvZGlzdC90aGVtZXMvbWF0ZXJpYWxfZ3JlZW4uY3NzXFxcIj48L3N0eWxlPlxcblxcbjxzdHlsZT5cXG5cXG4gICAgYS5pbnB1dC1idXR0b24ge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNGQ0NDNmZTJcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MSEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL0RhdGVwaWNrZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwiPHRlbXBsYXRlPlxuXG4gICAgPGRpdiBjbGFzcz1cImZsYXRwaWNrclwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcIj5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiXG4gICAgICAgICAgICAgICAgOnBsYWNlaG9sZGVyPVwicGxhY2Vob2xkZXJcIlxuICAgICAgICAgICAgICAgIDppZD1cIidkYXRlLWlucHV0LScgKyBfdWlkXCJcbiAgICAgICAgICAgICAgICA6bmFtZT1cIm5hbWVcIlxuICAgICAgICAgICAgICAgIDp2YWx1ZT1cInZhbHVlXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImlucHV0IGNvbnRyb2xcIlxuICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cImRpc2FibGVkXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaXMtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jbG9ja1wiXG4gICAgICAgICAgICAgICAgICAgIHYtaWY9XCJ0aW1lT25seVwiPlxuICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1jYWxlbmRhci1hbHRcIiB2LWVsc2U+PC9pPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IEZsYXRwaWNrciBmcm9tICdmbGF0cGlja3InO1xuXG4vLyBjb25zdCBGbGF0cGlja3JMMTBucyA9IHtcbi8vICAgICBybzogcmVxdWlyZSgnZmxhdHBpY2tyL2Rpc3QvbDEwbi9yby5qcycpLnJvLFxuLy8gfTtcbi8vIEZsYXRwaWNrci5sb2NhbGl6ZShGbGF0cGlja3JMMTBuc1tTdG9yZS51c2VyLnByZWZlcmVuY2VzLmdsb2JhbC5sYW5nXSk7IC8vZml4bWVcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PT0gbnVsbCB8fCB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB2YWx1ZSBpbnN0YW5jZW9mIERhdGUgfHwgdmFsdWUgaW5zdGFuY2VvZiBBcnJheTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIG5hbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIHRpbWU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdGltZU9ubHk6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6ICdTZWxlY3QgRGF0ZScsIC8vIGZpeG1lXG4gICAgICAgIH0sXG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2QtbS1ZJyxcbiAgICAgICAgfSxcbiAgICAgICAgaW5wdXRDbGFzczoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogJ2Zvcm0tY29udHJvbCcsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBwaWNrZXI6IG51bGwsXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIGNvbmZpZyhzZWxmID0gdGhpcykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB3ZWVrTnVtYmVyczogZmFsc2UsXG4gICAgICAgICAgICAgICAgZGVmYXVsdERhdGU6IHRoaXMudmFsdWUsXG4gICAgICAgICAgICAgICAgZGF0ZUZvcm1hdDogdGhpcy5mb3JtYXQsXG4gICAgICAgICAgICAgICAgYWxsb3dJbnB1dDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY2xpY2tPcGVuczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBub0NhbGVuZGFyOiB0aGlzLnRpbWVPbmx5LFxuICAgICAgICAgICAgICAgIGVuYWJsZVRpbWU6IHRoaXMudGltZSB8fCB0aGlzLnRpbWVPbmx5LFxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlKHNlbGVjdGVkRGF0ZXMsIGRhdGVTdHIpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi4kZW1pdCgnaW5wdXQnLCBkYXRlU3RyKTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgdmFsdWUobmV3VmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMucGlja2VyLnNldERhdGUobmV3VmFsdWUpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLnBpY2tlciA9IG5ldyBGbGF0cGlja3IodGhpcy4kZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKSwgdGhpcy5jb25maWcpO1xuICAgIH0sXG5cbiAgICBiZWZvcmVEZXN0cm95KCkge1xuICAgICAgICB0aGlzLnBpY2tlci5kZXN0cm95KCk7XG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGUgc3JjPVwiZmxhdHBpY2tyL2Rpc3QvdGhlbWVzL21hdGVyaWFsX2dyZWVuLmNzc1wiPjwvc3R5bGU+XG5cbjxzdHlsZT5cblxuICAgIGEuaW5wdXQtYnV0dG9uIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9EYXRlcGlja2VyLnZ1ZSIsIi8qIGZsYXRwaWNrciB2My4xLjQsIEBsaWNlbnNlIE1JVCAqL1xuKGZ1bmN0aW9uIChnbG9iYWwsIGZhY3RvcnkpIHtcblx0dHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnID8gbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCkgOlxuXHR0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoZmFjdG9yeSkgOlxuXHQoZ2xvYmFsLmZsYXRwaWNrciA9IGZhY3RvcnkoKSk7XG59KHRoaXMsIChmdW5jdGlvbiAoKSB7ICd1c2Ugc3RyaWN0JztcblxuLyohICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbkNvcHlyaWdodCAoYykgTWljcm9zb2Z0IENvcnBvcmF0aW9uLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxyXG5MaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpOyB5b3UgbWF5IG5vdCB1c2VcclxudGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGVcclxuTGljZW5zZSBhdCBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcclxuXHJcblRISVMgQ09ERSBJUyBQUk9WSURFRCBPTiBBTiAqQVMgSVMqIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTllcclxuS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIFdJVEhPVVQgTElNSVRBVElPTiBBTlkgSU1QTElFRFxyXG5XQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgVElUTEUsIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLFxyXG5NRVJDSEFOVEFCTElUWSBPUiBOT04tSU5GUklOR0VNRU5ULlxyXG5cclxuU2VlIHRoZSBBcGFjaGUgVmVyc2lvbiAyLjAgTGljZW5zZSBmb3Igc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zXHJcbmFuZCBsaW1pdGF0aW9ucyB1bmRlciB0aGUgTGljZW5zZS5cclxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cclxuLyogZ2xvYmFsIFJlZmxlY3QsIFByb21pc2UgKi9cclxuXHJcblxyXG5cclxudmFyIF9fYXNzaWduID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBfX2Fzc2lnbih0KSB7XHJcbiAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gcykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzLCBwKSkgdFtwXSA9IHNbcF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufTtcblxuZnVuY3Rpb24gY29tcGFyZURhdGVzKGRhdGUxLCBkYXRlMiwgdGltZWxlc3MpIHtcclxuICAgIGlmICh0aW1lbGVzcyAhPT0gZmFsc2UpIHtcclxuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKGRhdGUxLmdldFRpbWUoKSkuc2V0SG91cnMoMCwgMCwgMCwgMCkgLVxyXG4gICAgICAgICAgICBuZXcgRGF0ZShkYXRlMi5nZXRUaW1lKCkpLnNldEhvdXJzKDAsIDAsIDAsIDApKTtcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRlMS5nZXRUaW1lKCkgLSBkYXRlMi5nZXRUaW1lKCk7XHJcbn1cclxudmFyIG1vbnRoVG9TdHIgPSBmdW5jdGlvbiAobW9udGhOdW1iZXIsIHNob3J0aGFuZCwgbG9jYWxlKSB7IHJldHVybiBsb2NhbGUubW9udGhzW3Nob3J0aGFuZCA/IFwic2hvcnRoYW5kXCIgOiBcImxvbmdoYW5kXCJdW21vbnRoTnVtYmVyXTsgfTtcclxudmFyIGdldFdlZWsgPSBmdW5jdGlvbiAoZ2l2ZW5EYXRlKSB7XHJcbiAgICB2YXIgb25lamFuID0gbmV3IERhdGUoZ2l2ZW5EYXRlLmdldEZ1bGxZZWFyKCksIDAsIDEpO1xyXG4gICAgcmV0dXJuIE1hdGguY2VpbCgoKGdpdmVuRGF0ZS5nZXRUaW1lKCkgLSBvbmVqYW4uZ2V0VGltZSgpKSAvIDg2NDAwMDAwICtcclxuICAgICAgICBvbmVqYW4uZ2V0RGF5KCkgK1xyXG4gICAgICAgIDEpIC9cclxuICAgICAgICA3KTtcclxufTtcclxudmFyIGR1cmF0aW9uID0ge1xyXG4gICAgREFZOiA4NjQwMDAwMCxcclxufTtcblxudmFyIGRlZmF1bHRzID0ge1xyXG4gICAgX2Rpc2FibGU6IFtdLFxyXG4gICAgX2VuYWJsZTogW10sXHJcbiAgICBhbGxvd0lucHV0OiBmYWxzZSxcclxuICAgIGFsdEZvcm1hdDogXCJGIGosIFlcIixcclxuICAgIGFsdElucHV0OiBmYWxzZSxcclxuICAgIGFsdElucHV0Q2xhc3M6IFwiZm9ybS1jb250cm9sIGlucHV0XCIsXHJcbiAgICBhbmltYXRlOiB3aW5kb3cgJiYgd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUVcIikgPT09IC0xLFxyXG4gICAgYXJpYURhdGVGb3JtYXQ6IFwiRiBqLCBZXCIsXHJcbiAgICBjbGlja09wZW5zOiB0cnVlLFxyXG4gICAgY2xvc2VPblNlbGVjdDogdHJ1ZSxcclxuICAgIGNvbmp1bmN0aW9uOiBcIiwgXCIsXHJcbiAgICBkYXRlRm9ybWF0OiBcIlktbS1kXCIsXHJcbiAgICBkZWZhdWx0SG91cjogMTIsXHJcbiAgICBkZWZhdWx0TWludXRlOiAwLFxyXG4gICAgZGVmYXVsdFNlY29uZHM6IDAsXHJcbiAgICBkaXNhYmxlOiBbXSxcclxuICAgIGRpc2FibGVNb2JpbGU6IGZhbHNlLFxyXG4gICAgZW5hYmxlOiBbXSxcclxuICAgIGVuYWJsZVNlY29uZHM6IGZhbHNlLFxyXG4gICAgZW5hYmxlVGltZTogZmFsc2UsXHJcbiAgICBnZXRXZWVrOiBnZXRXZWVrLFxyXG4gICAgaG91ckluY3JlbWVudDogMSxcclxuICAgIGlnbm9yZWRGb2N1c0VsZW1lbnRzOiBbXSxcclxuICAgIGlubGluZTogZmFsc2UsXHJcbiAgICBsb2NhbGU6IFwiZGVmYXVsdFwiLFxyXG4gICAgbWludXRlSW5jcmVtZW50OiA1LFxyXG4gICAgbW9kZTogXCJzaW5nbGVcIixcclxuICAgIG5leHRBcnJvdzogXCI8c3ZnIHZlcnNpb249JzEuMScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJyB4bWxuczp4bGluaz0naHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluaycgdmlld0JveD0nMCAwIDE3IDE3Jz48Zz48L2c+PHBhdGggZD0nTTEzLjIwNyA4LjQ3MmwtNy44NTQgNy44NTQtMC43MDctMC43MDcgNy4xNDYtNy4xNDYtNy4xNDYtNy4xNDggMC43MDctMC43MDcgNy44NTQgNy44NTR6JyAvPjwvc3ZnPlwiLFxyXG4gICAgbm9DYWxlbmRhcjogZmFsc2UsXHJcbiAgICBvbkNoYW5nZTogW10sXHJcbiAgICBvbkNsb3NlOiBbXSxcclxuICAgIG9uRGF5Q3JlYXRlOiBbXSxcclxuICAgIG9uRGVzdHJveTogW10sXHJcbiAgICBvbktleURvd246IFtdLFxyXG4gICAgb25Nb250aENoYW5nZTogW10sXHJcbiAgICBvbk9wZW46IFtdLFxyXG4gICAgb25QYXJzZUNvbmZpZzogW10sXHJcbiAgICBvblJlYWR5OiBbXSxcclxuICAgIG9uVmFsdWVVcGRhdGU6IFtdLFxyXG4gICAgb25ZZWFyQ2hhbmdlOiBbXSxcclxuICAgIHBsdWdpbnM6IFtdLFxyXG4gICAgcG9zaXRpb246IFwiYXV0b1wiLFxyXG4gICAgcG9zaXRpb25FbGVtZW50OiB1bmRlZmluZWQsXHJcbiAgICBwcmV2QXJyb3c6IFwiPHN2ZyB2ZXJzaW9uPScxLjEnIHhtbG5zPSdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycgeG1sbnM6eGxpbms9J2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsnIHZpZXdCb3g9JzAgMCAxNyAxNyc+PGc+PC9nPjxwYXRoIGQ9J001LjIwNyA4LjQ3MWw3LjE0NiA3LjE0Ny0wLjcwNyAwLjcwNy03Ljg1My03Ljg1NCA3Ljg1NC03Ljg1MyAwLjcwNyAwLjcwNy03LjE0NyA3LjE0NnonIC8+PC9zdmc+XCIsXHJcbiAgICBzaG9ydGhhbmRDdXJyZW50TW9udGg6IGZhbHNlLFxyXG4gICAgc3RhdGljOiBmYWxzZSxcclxuICAgIHRpbWVfMjRocjogZmFsc2UsXHJcbiAgICB3ZWVrTnVtYmVyczogZmFsc2UsXHJcbiAgICB3cmFwOiBmYWxzZSxcclxufTtcblxudmFyIGVuZ2xpc2ggPSB7XHJcbiAgICB3ZWVrZGF5czoge1xyXG4gICAgICAgIHNob3J0aGFuZDogW1wiU3VuXCIsIFwiTW9uXCIsIFwiVHVlXCIsIFwiV2VkXCIsIFwiVGh1XCIsIFwiRnJpXCIsIFwiU2F0XCJdLFxyXG4gICAgICAgIGxvbmdoYW5kOiBbXHJcbiAgICAgICAgICAgIFwiU3VuZGF5XCIsXHJcbiAgICAgICAgICAgIFwiTW9uZGF5XCIsXHJcbiAgICAgICAgICAgIFwiVHVlc2RheVwiLFxyXG4gICAgICAgICAgICBcIldlZG5lc2RheVwiLFxyXG4gICAgICAgICAgICBcIlRodXJzZGF5XCIsXHJcbiAgICAgICAgICAgIFwiRnJpZGF5XCIsXHJcbiAgICAgICAgICAgIFwiU2F0dXJkYXlcIixcclxuICAgICAgICBdLFxyXG4gICAgfSxcclxuICAgIG1vbnRoczoge1xyXG4gICAgICAgIHNob3J0aGFuZDogW1xyXG4gICAgICAgICAgICBcIkphblwiLFxyXG4gICAgICAgICAgICBcIkZlYlwiLFxyXG4gICAgICAgICAgICBcIk1hclwiLFxyXG4gICAgICAgICAgICBcIkFwclwiLFxyXG4gICAgICAgICAgICBcIk1heVwiLFxyXG4gICAgICAgICAgICBcIkp1blwiLFxyXG4gICAgICAgICAgICBcIkp1bFwiLFxyXG4gICAgICAgICAgICBcIkF1Z1wiLFxyXG4gICAgICAgICAgICBcIlNlcFwiLFxyXG4gICAgICAgICAgICBcIk9jdFwiLFxyXG4gICAgICAgICAgICBcIk5vdlwiLFxyXG4gICAgICAgICAgICBcIkRlY1wiLFxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgbG9uZ2hhbmQ6IFtcclxuICAgICAgICAgICAgXCJKYW51YXJ5XCIsXHJcbiAgICAgICAgICAgIFwiRmVicnVhcnlcIixcclxuICAgICAgICAgICAgXCJNYXJjaFwiLFxyXG4gICAgICAgICAgICBcIkFwcmlsXCIsXHJcbiAgICAgICAgICAgIFwiTWF5XCIsXHJcbiAgICAgICAgICAgIFwiSnVuZVwiLFxyXG4gICAgICAgICAgICBcIkp1bHlcIixcclxuICAgICAgICAgICAgXCJBdWd1c3RcIixcclxuICAgICAgICAgICAgXCJTZXB0ZW1iZXJcIixcclxuICAgICAgICAgICAgXCJPY3RvYmVyXCIsXHJcbiAgICAgICAgICAgIFwiTm92ZW1iZXJcIixcclxuICAgICAgICAgICAgXCJEZWNlbWJlclwiLFxyXG4gICAgICAgIF0sXHJcbiAgICB9LFxyXG4gICAgZGF5c0luTW9udGg6IFszMSwgMjgsIDMxLCAzMCwgMzEsIDMwLCAzMSwgMzEsIDMwLCAzMSwgMzAsIDMxXSxcclxuICAgIGZpcnN0RGF5T2ZXZWVrOiAwLFxyXG4gICAgb3JkaW5hbDogZnVuY3Rpb24gKG50aCkge1xyXG4gICAgICAgIHZhciBzID0gbnRoICUgMTAwO1xyXG4gICAgICAgIGlmIChzID4gMyAmJiBzIDwgMjEpXHJcbiAgICAgICAgICAgIHJldHVybiBcInRoXCI7XHJcbiAgICAgICAgc3dpdGNoIChzICUgMTApIHtcclxuICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwic3RcIjtcclxuICAgICAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibmRcIjtcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwicmRcIjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBcInRoXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHJhbmdlU2VwYXJhdG9yOiBcIiB0byBcIixcclxuICAgIHdlZWtBYmJyZXZpYXRpb246IFwiV2tcIixcclxuICAgIHNjcm9sbFRpdGxlOiBcIlNjcm9sbCB0byBpbmNyZW1lbnRcIixcclxuICAgIHRvZ2dsZVRpdGxlOiBcIkNsaWNrIHRvIHRvZ2dsZVwiLFxyXG4gICAgYW1QTTogW1wiQU1cIiwgXCJQTVwiXSxcclxufTtcblxudmFyIHBhZCA9IGZ1bmN0aW9uIChudW1iZXIpIHsgcmV0dXJuIChcIjBcIiArIG51bWJlcikuc2xpY2UoLTIpOyB9O1xyXG52YXIgaW50ID0gZnVuY3Rpb24gKGJvb2wpIHsgcmV0dXJuIChib29sID09PSB0cnVlID8gMSA6IDApOyB9O1xyXG5mdW5jdGlvbiBkZWJvdW5jZShmdW5jLCB3YWl0LCBpbW1lZGlhdGUpIHtcclxuICAgIGlmIChpbW1lZGlhdGUgPT09IHZvaWQgMCkgeyBpbW1lZGlhdGUgPSBmYWxzZTsgfVxyXG4gICAgdmFyIHRpbWVvdXQ7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIHZhciBjb250ZXh0ID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcclxuICAgICAgICB0aW1lb3V0ICE9PSBudWxsICYmIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcclxuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoIWltbWVkaWF0ZSlcclxuICAgICAgICAgICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XHJcbiAgICAgICAgfSwgd2FpdCk7XHJcbiAgICAgICAgaWYgKGltbWVkaWF0ZSAmJiAhdGltZW91dClcclxuICAgICAgICAgICAgZnVuYy5hcHBseShjb250ZXh0LCBhcmdzKTtcclxuICAgIH07XHJcbn1cclxudmFyIGFycmF5aWZ5ID0gZnVuY3Rpb24gKG9iaikge1xyXG4gICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEFycmF5ID8gb2JqIDogW29ial07XHJcbn07XHJcbmZ1bmN0aW9uIG1vdXNlRGVsdGEoZSkge1xyXG4gICAgdmFyIGRlbHRhID0gZS53aGVlbERlbHRhIHx8IC1lLmRlbHRhWTtcclxuICAgIHJldHVybiBkZWx0YSA+PSAwID8gMSA6IC0xO1xyXG59XG5cbmZ1bmN0aW9uIHRvZ2dsZUNsYXNzKGVsZW0sIGNsYXNzTmFtZSwgYm9vbCkge1xyXG4gICAgaWYgKGJvb2wgPT09IHRydWUpXHJcbiAgICAgICAgcmV0dXJuIGVsZW0uY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgZWxlbS5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlRWxlbWVudCh0YWcsIGNsYXNzTmFtZSwgY29udGVudCkge1xyXG4gICAgdmFyIGUgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpO1xyXG4gICAgY2xhc3NOYW1lID0gY2xhc3NOYW1lIHx8IFwiXCI7XHJcbiAgICBjb250ZW50ID0gY29udGVudCB8fCBcIlwiO1xyXG4gICAgZS5jbGFzc05hbWUgPSBjbGFzc05hbWU7XHJcbiAgICBpZiAoY29udGVudCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgIGUudGV4dENvbnRlbnQgPSBjb250ZW50O1xyXG4gICAgcmV0dXJuIGU7XHJcbn1cclxuZnVuY3Rpb24gY2xlYXJOb2RlKG5vZGUpIHtcclxuICAgIHdoaWxlIChub2RlLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgbm9kZS5yZW1vdmVDaGlsZChub2RlLmZpcnN0Q2hpbGQpO1xyXG59XHJcbmZ1bmN0aW9uIGZpbmRQYXJlbnQobm9kZSwgY29uZGl0aW9uKSB7XHJcbiAgICBpZiAoY29uZGl0aW9uKG5vZGUpKVxyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgZWxzZSBpZiAobm9kZS5wYXJlbnROb2RlKVxyXG4gICAgICAgIHJldHVybiBmaW5kUGFyZW50KG5vZGUucGFyZW50Tm9kZSwgY29uZGl0aW9uKTtcclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuZnVuY3Rpb24gY3JlYXRlTnVtYmVySW5wdXQoaW5wdXRDbGFzc05hbWUpIHtcclxuICAgIHZhciB3cmFwcGVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcIm51bUlucHV0V3JhcHBlclwiKSwgbnVtSW5wdXQgPSBjcmVhdGVFbGVtZW50KFwiaW5wdXRcIiwgXCJudW1JbnB1dCBcIiArIGlucHV0Q2xhc3NOYW1lKSwgYXJyb3dVcCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiYXJyb3dVcFwiKSwgYXJyb3dEb3duID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJhcnJvd0Rvd25cIik7XHJcbiAgICBudW1JbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICBudW1JbnB1dC5wYXR0ZXJuID0gXCJcXFxcZCpcIjtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQobnVtSW5wdXQpO1xyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChhcnJvd1VwKTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoYXJyb3dEb3duKTtcclxuICAgIHJldHVybiB3cmFwcGVyO1xyXG59XG5cbnZhciBkb19ub3RoaW5nID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdW5kZWZpbmVkOyB9O1xyXG52YXIgcmV2Rm9ybWF0ID0ge1xyXG4gICAgRDogZG9fbm90aGluZyxcclxuICAgIEY6IGZ1bmN0aW9uIChkYXRlT2JqLCBtb250aE5hbWUsIGxvY2FsZSkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgobG9jYWxlLm1vbnRocy5sb25naGFuZC5pbmRleE9mKG1vbnRoTmFtZSkpO1xyXG4gICAgfSxcclxuICAgIEc6IGZ1bmN0aW9uIChkYXRlT2JqLCBob3VyKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhwYXJzZUZsb2F0KGhvdXIpKTtcclxuICAgIH0sXHJcbiAgICBIOiBmdW5jdGlvbiAoZGF0ZU9iaiwgaG91cikge1xyXG4gICAgICAgIGRhdGVPYmouc2V0SG91cnMocGFyc2VGbG9hdChob3VyKSk7XHJcbiAgICB9LFxyXG4gICAgSjogZnVuY3Rpb24gKGRhdGVPYmosIGRheSkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xyXG4gICAgfSxcclxuICAgIEs6IGZ1bmN0aW9uIChkYXRlT2JqLCBhbVBNKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhkYXRlT2JqLmdldEhvdXJzKCkgJSAxMiArIDEyICogaW50KC9wbS9pLnRlc3QoYW1QTSkpKTtcclxuICAgIH0sXHJcbiAgICBNOiBmdW5jdGlvbiAoZGF0ZU9iaiwgc2hvcnRNb250aCwgbG9jYWxlKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRNb250aChsb2NhbGUubW9udGhzLnNob3J0aGFuZC5pbmRleE9mKHNob3J0TW9udGgpKTtcclxuICAgIH0sXHJcbiAgICBTOiBmdW5jdGlvbiAoZGF0ZU9iaiwgc2Vjb25kcykge1xyXG4gICAgICAgIGRhdGVPYmouc2V0U2Vjb25kcyhwYXJzZUZsb2F0KHNlY29uZHMpKTtcclxuICAgIH0sXHJcbiAgICBVOiBmdW5jdGlvbiAoXywgdW5peFNlY29uZHMpIHsgcmV0dXJuIG5ldyBEYXRlKHBhcnNlRmxvYXQodW5peFNlY29uZHMpICogMTAwMCk7IH0sXHJcbiAgICBXOiBmdW5jdGlvbiAoZGF0ZU9iaiwgd2Vla051bSkge1xyXG4gICAgICAgIHZhciB3ZWVrTnVtYmVyID0gcGFyc2VJbnQod2Vla051bSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGVPYmouZ2V0RnVsbFllYXIoKSwgMCwgMiArICh3ZWVrTnVtYmVyIC0gMSkgKiA3LCAwLCAwLCAwLCAwKTtcclxuICAgIH0sXHJcbiAgICBZOiBmdW5jdGlvbiAoZGF0ZU9iaiwgeWVhcikge1xyXG4gICAgICAgIGRhdGVPYmouc2V0RnVsbFllYXIocGFyc2VGbG9hdCh5ZWFyKSk7XHJcbiAgICB9LFxyXG4gICAgWjogZnVuY3Rpb24gKF8sIElTT0RhdGUpIHsgcmV0dXJuIG5ldyBEYXRlKElTT0RhdGUpOyB9LFxyXG4gICAgZDogZnVuY3Rpb24gKGRhdGVPYmosIGRheSkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0RGF0ZShwYXJzZUZsb2F0KGRheSkpO1xyXG4gICAgfSxcclxuICAgIGg6IGZ1bmN0aW9uIChkYXRlT2JqLCBob3VyKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRIb3VycyhwYXJzZUZsb2F0KGhvdXIpKTtcclxuICAgIH0sXHJcbiAgICBpOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbWludXRlcykge1xyXG4gICAgICAgIGRhdGVPYmouc2V0TWludXRlcyhwYXJzZUZsb2F0KG1pbnV0ZXMpKTtcclxuICAgIH0sXHJcbiAgICBqOiBmdW5jdGlvbiAoZGF0ZU9iaiwgZGF5KSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXREYXRlKHBhcnNlRmxvYXQoZGF5KSk7XHJcbiAgICB9LFxyXG4gICAgbDogZG9fbm90aGluZyxcclxuICAgIG06IGZ1bmN0aW9uIChkYXRlT2JqLCBtb250aCkge1xyXG4gICAgICAgIGRhdGVPYmouc2V0TW9udGgocGFyc2VGbG9hdChtb250aCkgLSAxKTtcclxuICAgIH0sXHJcbiAgICBuOiBmdW5jdGlvbiAoZGF0ZU9iaiwgbW9udGgpIHtcclxuICAgICAgICBkYXRlT2JqLnNldE1vbnRoKHBhcnNlRmxvYXQobW9udGgpIC0gMSk7XHJcbiAgICB9LFxyXG4gICAgczogZnVuY3Rpb24gKGRhdGVPYmosIHNlY29uZHMpIHtcclxuICAgICAgICBkYXRlT2JqLnNldFNlY29uZHMocGFyc2VGbG9hdChzZWNvbmRzKSk7XHJcbiAgICB9LFxyXG4gICAgdzogZG9fbm90aGluZyxcclxuICAgIHk6IGZ1bmN0aW9uIChkYXRlT2JqLCB5ZWFyKSB7XHJcbiAgICAgICAgZGF0ZU9iai5zZXRGdWxsWWVhcigyMDAwICsgcGFyc2VGbG9hdCh5ZWFyKSk7XHJcbiAgICB9LFxyXG59O1xyXG52YXIgdG9rZW5SZWdleCA9IHtcclxuICAgIEQ6IFwiKFxcXFx3KylcIixcclxuICAgIEY6IFwiKFxcXFx3KylcIixcclxuICAgIEc6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBIOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgSjogXCIoXFxcXGRcXFxcZHxcXFxcZClcXFxcdytcIixcclxuICAgIEs6IFwiKGFtfEFNfEFtfGFNfHBtfFBNfFBtfHBNKVwiLFxyXG4gICAgTTogXCIoXFxcXHcrKVwiLFxyXG4gICAgUzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIFU6IFwiKC4rKVwiLFxyXG4gICAgVzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIFk6IFwiKFxcXFxkezR9KVwiLFxyXG4gICAgWjogXCIoLispXCIsXHJcbiAgICBkOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgaDogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIGk6IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBqOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgbDogXCIoXFxcXHcrKVwiLFxyXG4gICAgbTogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIG46IFwiKFxcXFxkXFxcXGR8XFxcXGQpXCIsXHJcbiAgICBzOiBcIihcXFxcZFxcXFxkfFxcXFxkKVwiLFxyXG4gICAgdzogXCIoXFxcXGRcXFxcZHxcXFxcZClcIixcclxuICAgIHk6IFwiKFxcXFxkezJ9KVwiLFxyXG59O1xyXG52YXIgZm9ybWF0cyA9IHtcclxuICAgIFo6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLnRvSVNPU3RyaW5nKCk7IH0sXHJcbiAgICBEOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5cy5zaG9ydGhhbmRbZm9ybWF0cy53KGRhdGUsIGxvY2FsZSwgb3B0aW9ucyldO1xyXG4gICAgfSxcclxuICAgIEY6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gbW9udGhUb1N0cihmb3JtYXRzLm4oZGF0ZSwgbG9jYWxlLCBvcHRpb25zKSAtIDEsIGZhbHNlLCBsb2NhbGUpO1xyXG4gICAgfSxcclxuICAgIEc6IGZ1bmN0aW9uIChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpIHtcclxuICAgICAgICByZXR1cm4gcGFkKGZvcm1hdHMuaChkYXRlLCBsb2NhbGUsIG9wdGlvbnMpKTtcclxuICAgIH0sXHJcbiAgICBIOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0SG91cnMoKSk7IH0sXHJcbiAgICBKOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZS5vcmRpbmFsICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBkYXRlLmdldERhdGUoKSArIGxvY2FsZS5vcmRpbmFsKGRhdGUuZ2V0RGF0ZSgpKVxyXG4gICAgICAgICAgICA6IGRhdGUuZ2V0RGF0ZSgpO1xyXG4gICAgfSxcclxuICAgIEs6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiAoZGF0ZS5nZXRIb3VycygpID4gMTEgPyBcIlBNXCIgOiBcIkFNXCIpOyB9LFxyXG4gICAgTTogZnVuY3Rpb24gKGRhdGUsIGxvY2FsZSkge1xyXG4gICAgICAgIHJldHVybiBtb250aFRvU3RyKGRhdGUuZ2V0TW9udGgoKSwgdHJ1ZSwgbG9jYWxlKTtcclxuICAgIH0sXHJcbiAgICBTOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0U2Vjb25kcygpKTsgfSxcclxuICAgIFU6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBkYXRlLmdldFRpbWUoKSAvIDEwMDA7IH0sXHJcbiAgICBXOiBmdW5jdGlvbiAoZGF0ZSwgXywgb3B0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBvcHRpb25zLmdldFdlZWsoZGF0ZSk7XHJcbiAgICB9LFxyXG4gICAgWTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0RnVsbFllYXIoKTsgfSxcclxuICAgIGQ6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBwYWQoZGF0ZS5nZXREYXRlKCkpOyB9LFxyXG4gICAgaDogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIChkYXRlLmdldEhvdXJzKCkgJSAxMiA/IGRhdGUuZ2V0SG91cnMoKSAlIDEyIDogMTIpOyB9LFxyXG4gICAgaTogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHBhZChkYXRlLmdldE1pbnV0ZXMoKSk7IH0sXHJcbiAgICBqOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXREYXRlKCk7IH0sXHJcbiAgICBsOiBmdW5jdGlvbiAoZGF0ZSwgbG9jYWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsZS53ZWVrZGF5cy5sb25naGFuZFtkYXRlLmdldERheSgpXTtcclxuICAgIH0sXHJcbiAgICBtOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpOyB9LFxyXG4gICAgbjogZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIGRhdGUuZ2V0TW9udGgoKSArIDE7IH0sXHJcbiAgICBzOiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXRTZWNvbmRzKCk7IH0sXHJcbiAgICB3OiBmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gZGF0ZS5nZXREYXkoKTsgfSxcclxuICAgIHk6IGZ1bmN0aW9uIChkYXRlKSB7IHJldHVybiBTdHJpbmcoZGF0ZS5nZXRGdWxsWWVhcigpKS5zdWJzdHJpbmcoMik7IH0sXHJcbn07XG5cbmZ1bmN0aW9uIEZsYXRwaWNrckluc3RhbmNlKGVsZW1lbnQsIGluc3RhbmNlQ29uZmlnKSB7XHJcbiAgICB2YXIgc2VsZiA9IHt9O1xyXG4gICAgc2VsZi5wYXJzZURhdGUgPSBwYXJzZURhdGU7XHJcbiAgICBzZWxmLmZvcm1hdERhdGUgPSBmb3JtYXREYXRlO1xyXG4gICAgc2VsZi5fYW5pbWF0aW9uTG9vcCA9IFtdO1xyXG4gICAgc2VsZi5faGFuZGxlcnMgPSBbXTtcclxuICAgIHNlbGYuX2JpbmQgPSBiaW5kO1xyXG4gICAgc2VsZi5fc2V0SG91cnNGcm9tRGF0ZSA9IHNldEhvdXJzRnJvbURhdGU7XHJcbiAgICBzZWxmLmNoYW5nZU1vbnRoID0gY2hhbmdlTW9udGg7XHJcbiAgICBzZWxmLmNoYW5nZVllYXIgPSBjaGFuZ2VZZWFyO1xyXG4gICAgc2VsZi5jbGVhciA9IGNsZWFyO1xyXG4gICAgc2VsZi5jbG9zZSA9IGNsb3NlO1xyXG4gICAgc2VsZi5fY3JlYXRlRWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQ7XHJcbiAgICBzZWxmLmRlc3Ryb3kgPSBkZXN0cm95O1xyXG4gICAgc2VsZi5pc0VuYWJsZWQgPSBpc0VuYWJsZWQ7XHJcbiAgICBzZWxmLmp1bXBUb0RhdGUgPSBqdW1wVG9EYXRlO1xyXG4gICAgc2VsZi5vcGVuID0gb3BlbjtcclxuICAgIHNlbGYucmVkcmF3ID0gcmVkcmF3O1xyXG4gICAgc2VsZi5zZXQgPSBzZXQ7XHJcbiAgICBzZWxmLnNldERhdGUgPSBzZXREYXRlO1xyXG4gICAgc2VsZi50b2dnbGUgPSB0b2dnbGU7XHJcbiAgICBmdW5jdGlvbiBzZXR1cEhlbHBlckZ1bmN0aW9ucygpIHtcclxuICAgICAgICBzZWxmLnV0aWxzID0ge1xyXG4gICAgICAgICAgICBnZXREYXlzSW5Nb250aDogZnVuY3Rpb24gKG1vbnRoLCB5cikge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vbnRoID09PSB2b2lkIDApIHsgbW9udGggPSBzZWxmLmN1cnJlbnRNb250aDsgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHlyID09PSB2b2lkIDApIHsgeXIgPSBzZWxmLmN1cnJlbnRZZWFyOyB9XHJcbiAgICAgICAgICAgICAgICBpZiAobW9udGggPT09IDEgJiYgKCh5ciAlIDQgPT09IDAgJiYgeXIgJSAxMDAgIT09IDApIHx8IHlyICUgNDAwID09PSAwKSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gMjk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc2VsZi5sMTBuLmRheXNJbk1vbnRoW21vbnRoXTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBzZWxmLmVsZW1lbnQgPSBzZWxmLmlucHV0ID0gZWxlbWVudDtcclxuICAgICAgICBzZWxmLmlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgIHBhcnNlQ29uZmlnKCk7XHJcbiAgICAgICAgc2V0dXBMb2NhbGUoKTtcclxuICAgICAgICBzZXR1cElucHV0cygpO1xyXG4gICAgICAgIHNldHVwRGF0ZXMoKTtcclxuICAgICAgICBzZXR1cEhlbHBlckZ1bmN0aW9ucygpO1xyXG4gICAgICAgIGlmICghc2VsZi5pc01vYmlsZSlcclxuICAgICAgICAgICAgYnVpbGQoKTtcclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggfHwgc2VsZi5jb25maWcubm9DYWxlbmRhcikge1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xyXG4gICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tRGF0ZShzZWxmLmNvbmZpZy5ub0NhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiB8fCBzZWxmLmNvbmZpZy5taW5EYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgOiB1bmRlZmluZWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHVwZGF0ZVZhbHVlKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc2VsZi5zaG93VGltZUlucHV0ID1cclxuICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDAgfHwgc2VsZi5jb25maWcubm9DYWxlbmRhcjtcclxuICAgICAgICBpZiAoc2VsZi53ZWVrV3JhcHBlciAhPT0gdW5kZWZpbmVkICYmIHNlbGYuZGF5c0NvbnRhaW5lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUud2lkdGggPVxyXG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLm9mZnNldFdpZHRoICsgc2VsZi53ZWVrV3JhcHBlci5vZmZzZXRXaWR0aCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzZWxmLmlzTW9iaWxlKVxyXG4gICAgICAgICAgICBwb3NpdGlvbkNhbGVuZGFyKCk7XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25SZWFkeVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJpbmRUb0luc3RhbmNlKGZuKSB7XHJcbiAgICAgICAgcmV0dXJuIGZuLmJpbmQoc2VsZik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lKGUpIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubm9DYWxlbmRhciAmJiAhc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBzZWxmLnNldERhdGUobmV3IERhdGUoKS5zZXRIb3VycyhzZWxmLmNvbmZpZy5kZWZhdWx0SG91ciwgc2VsZi5jb25maWcuZGVmYXVsdE1pbnV0ZSwgc2VsZi5jb25maWcuZGVmYXVsdFNlY29uZHMpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHNldEhvdXJzRnJvbUlucHV0cygpO1xyXG4gICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aW1lV3JhcHBlcihlKTtcclxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGlmICghc2VsZi5taW5EYXRlSGFzVGltZSB8fFxyXG4gICAgICAgICAgICBlLnR5cGUgIT09IFwiaW5wdXRcIiB8fFxyXG4gICAgICAgICAgICBlLnRhcmdldC52YWx1ZS5sZW5ndGggPj0gMikge1xyXG4gICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XHJcbiAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhbXBtMm1pbGl0YXJ5KGhvdXIsIGFtUE0pIHtcclxuICAgICAgICByZXR1cm4gaG91ciAlIDEyICsgMTIgKiBpbnQoYW1QTSA9PT0gXCJQTVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1pbGl0YXJ5MmFtcG0oaG91cikge1xyXG4gICAgICAgIHN3aXRjaCAoaG91ciAlIDI0KSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgY2FzZSAxMjpcclxuICAgICAgICAgICAgICAgIHJldHVybiAxMjtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiBob3VyICUgMTI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0SG91cnNGcm9tSW5wdXRzKCkge1xyXG4gICAgICAgIGlmIChzZWxmLmhvdXJFbGVtZW50ID09PSB1bmRlZmluZWQgfHwgc2VsZi5taW51dGVFbGVtZW50ID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgaG91cnMgPSAocGFyc2VJbnQoc2VsZi5ob3VyRWxlbWVudC52YWx1ZS5zbGljZSgtMiksIDEwKSB8fCAwKSAlIDI0LCBtaW51dGVzID0gKHBhcnNlSW50KHNlbGYubWludXRlRWxlbWVudC52YWx1ZSwgMTApIHx8IDApICUgNjAsIHNlY29uZHMgPSBzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICA/IChwYXJzZUludChzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUsIDEwKSB8fCAwKSAlIDYwXHJcbiAgICAgICAgICAgIDogMDtcclxuICAgICAgICBpZiAoc2VsZi5hbVBNICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIGhvdXJzID0gYW1wbTJtaWxpdGFyeShob3Vycywgc2VsZi5hbVBNLnRleHRDb250ZW50KTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSAmJlxyXG4gICAgICAgICAgICBzZWxmLm1pbkRhdGVIYXNUaW1lICYmXHJcbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICYmXHJcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5jb25maWcubWluRGF0ZSkgPT09IDApIHtcclxuICAgICAgICAgICAgaG91cnMgPSBNYXRoLm1heChob3Vycywgc2VsZi5jb25maWcubWluRGF0ZS5nZXRIb3VycygpKTtcclxuICAgICAgICAgICAgaWYgKGhvdXJzID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEhvdXJzKCkpXHJcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5tYXgobWludXRlcywgc2VsZi5jb25maWcubWluRGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSAmJlxyXG4gICAgICAgICAgICBzZWxmLm1heERhdGVIYXNUaW1lICYmXHJcbiAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICYmXHJcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5jb25maWcubWF4RGF0ZSkgPT09IDApIHtcclxuICAgICAgICAgICAgaG91cnMgPSBNYXRoLm1pbihob3Vycywgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRIb3VycygpKTtcclxuICAgICAgICAgICAgaWYgKGhvdXJzID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCkpXHJcbiAgICAgICAgICAgICAgICBtaW51dGVzID0gTWF0aC5taW4obWludXRlcywgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRIb3Vycyhob3VycywgbWludXRlcywgc2Vjb25kcyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRIb3Vyc0Zyb21EYXRlKGRhdGVPYmopIHtcclxuICAgICAgICB2YXIgZGF0ZSA9IGRhdGVPYmogfHwgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmo7XHJcbiAgICAgICAgaWYgKGRhdGUpXHJcbiAgICAgICAgICAgIHNldEhvdXJzKGRhdGUuZ2V0SG91cnMoKSwgZGF0ZS5nZXRNaW51dGVzKCksIGRhdGUuZ2V0U2Vjb25kcygpKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHNldEhvdXJzKGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzKSB7XHJcbiAgICAgICAgaWYgKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmouc2V0SG91cnMoaG91cnMgJSAyNCwgbWludXRlcywgc2Vjb25kcyB8fCAwLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFzZWxmLmhvdXJFbGVtZW50IHx8ICFzZWxmLm1pbnV0ZUVsZW1lbnQgfHwgc2VsZi5pc01vYmlsZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQudmFsdWUgPSBwYWQoIXNlbGYuY29uZmlnLnRpbWVfMjRoclxyXG4gICAgICAgICAgICA/ICgxMiArIGhvdXJzKSAlIDEyICsgMTIgKiBpbnQoaG91cnMgJSAxMiA9PT0gMClcclxuICAgICAgICAgICAgOiBob3Vycyk7XHJcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnZhbHVlID0gcGFkKG1pbnV0ZXMpO1xyXG4gICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gaG91cnMgPj0gMTIgPyBcIlBNXCIgOiBcIkFNXCI7XHJcbiAgICAgICAgaWYgKHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQudmFsdWUgPSBwYWQoc2Vjb25kcyk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblllYXJJbnB1dChldmVudCkge1xyXG4gICAgICAgIHZhciB5ZWFyID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnZhbHVlKSArIChldmVudC5kZWx0YSB8fCAwKTtcclxuICAgICAgICBpZiAoeWVhci50b1N0cmluZygpLmxlbmd0aCA9PT0gNCB8fCBldmVudC5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5ibHVyKCk7XHJcbiAgICAgICAgICAgIGlmICghL1teXFxkXS8udGVzdCh5ZWFyLnRvU3RyaW5nKCkpKVxyXG4gICAgICAgICAgICAgICAgY2hhbmdlWWVhcih5ZWFyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBiaW5kKGVsZW1lbnQsIGV2ZW50LCBoYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50IGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgIHJldHVybiBldmVudC5mb3JFYWNoKGZ1bmN0aW9uIChldikgeyByZXR1cm4gYmluZChlbGVtZW50LCBldiwgaGFuZGxlcik7IH0pO1xyXG4gICAgICAgIGlmIChlbGVtZW50IGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgIHJldHVybiBlbGVtZW50LmZvckVhY2goZnVuY3Rpb24gKGVsKSB7IHJldHVybiBiaW5kKGVsLCBldmVudCwgaGFuZGxlcik7IH0pO1xyXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgaGFuZGxlcik7XHJcbiAgICAgICAgc2VsZi5faGFuZGxlcnMucHVzaCh7IGVsZW1lbnQ6IGVsZW1lbnQsIGV2ZW50OiBldmVudCwgaGFuZGxlcjogaGFuZGxlciB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uQ2xpY2soaGFuZGxlcikge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZXZ0KSB7IHJldHVybiBldnQud2hpY2ggPT09IDEgJiYgaGFuZGxlcihldnQpOyB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlckNoYW5nZSgpIHtcclxuICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLndyYXApIHtcclxuICAgICAgICAgICAgW1wib3BlblwiLCBcImNsb3NlXCIsIFwidG9nZ2xlXCIsIFwiY2xlYXJcIl0uZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XHJcbiAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHNlbGYuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtXCIgKyBldnQgKyBcIl1cIiksIGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5kKGVsLCBcImNsaWNrXCIsIHNlbGZbZXZ0XSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgIHNldHVwTW9iaWxlKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGRlYm91bmNlZFJlc2l6ZSA9IGRlYm91bmNlKG9uUmVzaXplLCA1MCk7XHJcbiAgICAgICAgc2VsZi5fZGVib3VuY2VkQ2hhbmdlID0gZGVib3VuY2UodHJpZ2dlckNoYW5nZSwgMzAwKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmIHNlbGYuZGF5c0NvbnRhaW5lcilcclxuICAgICAgICAgICAgYmluZChzZWxmLmRheXNDb250YWluZXIsIFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb25Nb3VzZU92ZXIoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBiaW5kKHdpbmRvdy5kb2N1bWVudC5ib2R5LCBcImtleWRvd25cIiwgb25LZXlEb3duKTtcclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYylcclxuICAgICAgICAgICAgYmluZChzZWxmLl9pbnB1dCwgXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XHJcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5pbmxpbmUgJiYgIXNlbGYuY29uZmlnLnN0YXRpYylcclxuICAgICAgICAgICAgYmluZCh3aW5kb3csIFwicmVzaXplXCIsIGRlYm91bmNlZFJlc2l6ZSk7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5vbnRvdWNoc3RhcnQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgYmluZCh3aW5kb3cuZG9jdW1lbnQuYm9keSwgXCJ0b3VjaHN0YXJ0XCIsIGRvY3VtZW50Q2xpY2spO1xyXG4gICAgICAgIGJpbmQod2luZG93LmRvY3VtZW50LmJvZHksIFwibW91c2Vkb3duXCIsIG9uQ2xpY2soZG9jdW1lbnRDbGljaykpO1xyXG4gICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwiYmx1clwiLCBkb2N1bWVudENsaWNrKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuY2xpY2tPcGVucyA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYuX2lucHV0LCBcImZvY3VzXCIsIHNlbGYub3Blbik7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi5faW5wdXQsIFwibW91c2Vkb3duXCIsIG9uQ2xpY2soc2VsZi5vcGVuKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBzZWxmLm1vbnRoTmF2LmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS5wcmV2ZW50RGVmYXVsdCgpOyB9KTtcclxuICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBcIndoZWVsXCIsIGRlYm91bmNlKG9uTW9udGhOYXZTY3JvbGwsIDEwKSk7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi5tb250aE5hdiwgXCJtb3VzZWRvd25cIiwgb25DbGljayhvbk1vbnRoTmF2Q2xpY2spKTtcclxuICAgICAgICAgICAgYmluZChzZWxmLm1vbnRoTmF2LCBbXCJrZXl1cFwiLCBcImluY3JlbWVudFwiXSwgb25ZZWFySW5wdXQpO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgXCJtb3VzZWRvd25cIiwgb25DbGljayhzZWxlY3REYXRlKSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5hbmltYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYuZGF5c0NvbnRhaW5lciwgW1wid2Via2l0QW5pbWF0aW9uRW5kXCIsIFwiYW5pbWF0aW9uZW5kXCJdLCBhbmltYXRlRGF5cyk7XHJcbiAgICAgICAgICAgICAgICBiaW5kKHNlbGYubW9udGhOYXYsIFtcIndlYmtpdEFuaW1hdGlvbkVuZFwiLCBcImFuaW1hdGlvbmVuZFwiXSwgYW5pbWF0ZU1vbnRocyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYudGltZUNvbnRhaW5lciAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIHNlbGYubWludXRlRWxlbWVudCAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICB2YXIgc2VsVGV4dCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZS50YXJnZXQuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBbXCJ3aGVlbFwiLCBcImlucHV0XCIsIFwiaW5jcmVtZW50XCJdLCB1cGRhdGVUaW1lKTtcclxuICAgICAgICAgICAgYmluZChzZWxmLnRpbWVDb250YWluZXIsIFwibW91c2Vkb3duXCIsIG9uQ2xpY2sodGltZUluY3JlbWVudCkpO1xyXG4gICAgICAgICAgICBiaW5kKHNlbGYudGltZUNvbnRhaW5lciwgW1wid2hlZWxcIiwgXCJpbmNyZW1lbnRcIl0sIHNlbGYuX2RlYm91bmNlZENoYW5nZSk7XHJcbiAgICAgICAgICAgIGJpbmQoc2VsZi50aW1lQ29udGFpbmVyLCBcImlucHV0XCIsIHRyaWdnZXJDaGFuZ2UpO1xyXG4gICAgICAgICAgICBiaW5kKFtzZWxmLmhvdXJFbGVtZW50LCBzZWxmLm1pbnV0ZUVsZW1lbnRdLCBbXCJmb2N1c1wiLCBcImNsaWNrXCJdLCBzZWxUZXh0KTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc2Vjb25kRWxlbWVudCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgYmluZChzZWxmLnNlY29uZEVsZW1lbnQsIFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5zZWNvbmRFbGVtZW50ICYmIHNlbGYuc2Vjb25kRWxlbWVudC5zZWxlY3QoKTsgfSk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgYmluZChzZWxmLmFtUE0sIFwibW91c2Vkb3duXCIsIG9uQ2xpY2soZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaWdnZXJDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHByb2Nlc3NQb3N0RGF5QW5pbWF0aW9uKCkge1xyXG4gICAgICAgIHNlbGYuX2FuaW1hdGlvbkxvb3AuZm9yRWFjaChmdW5jdGlvbiAoZikgeyByZXR1cm4gZigpOyB9KTtcclxuICAgICAgICBzZWxmLl9hbmltYXRpb25Mb29wID0gW107XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhbmltYXRlRGF5cyhlKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciAmJiBzZWxmLmRheXNDb250YWluZXIuY2hpbGROb2Rlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZS5hbmltYXRpb25OYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZnBTbGlkZUxlZnRcIjpcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIubGFzdENoaWxkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlTGVmdE5ld1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc2VsZi5kYXlzQ29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maXJzdENoaWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmRheXMgPSBzZWxmLmRheXNDb250YWluZXIuZmlyc3RDaGlsZDtcclxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzUG9zdERheUFuaW1hdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcImZwU2xpZGVSaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5maXJzdENoaWxkLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZVJpZ2h0TmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci5yZW1vdmVDaGlsZChzZWxmLmRheXNDb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmxhc3RDaGlsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5kYXlzID0gc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvY2Vzc1Bvc3REYXlBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhbmltYXRlTW9udGhzKGUpIHtcclxuICAgICAgICBzd2l0Y2ggKGUuYW5pbWF0aW9uTmFtZSkge1xyXG4gICAgICAgICAgICBjYXNlIFwiZnBTbGlkZUxlZnROZXdcIjpcclxuICAgICAgICAgICAgY2FzZSBcImZwU2xpZGVSaWdodE5ld1wiOlxyXG4gICAgICAgICAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmNsYXNzTGlzdC5yZW1vdmUoXCJzbGlkZUxlZnROZXdcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGguY2xhc3NMaXN0LnJlbW92ZShcInNsaWRlUmlnaHROZXdcIik7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmF2ID0gc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoO1xyXG4gICAgICAgICAgICAgICAgd2hpbGUgKG5hdi5uZXh0U2libGluZyAmJlxyXG4gICAgICAgICAgICAgICAgICAgIC9jdXJyLy50ZXN0KG5hdi5uZXh0U2libGluZy5jbGFzc05hbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9udGhOYXYucmVtb3ZlQ2hpbGQobmF2Lm5leHRTaWJsaW5nKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChuYXYucHJldmlvdXNTaWJsaW5nICYmXHJcbiAgICAgICAgICAgICAgICAgICAgL2N1cnIvLnRlc3QobmF2LnByZXZpb3VzU2libGluZy5jbGFzc05hbWUpKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYubW9udGhOYXYucmVtb3ZlQ2hpbGQobmF2LnByZXZpb3VzU2libGluZyk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9sZEN1ck1vbnRoID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24ganVtcFRvRGF0ZShqdW1wRGF0ZSkge1xyXG4gICAgICAgIHZhciBqdW1wVG8gPSBqdW1wRGF0ZSAhPT0gdW5kZWZpbmVkXHJcbiAgICAgICAgICAgID8gcGFyc2VEYXRlKGp1bXBEYXRlKVxyXG4gICAgICAgICAgICA6IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqIHx8XHJcbiAgICAgICAgICAgICAgICAoc2VsZi5jb25maWcubWluRGF0ZSAmJiBzZWxmLmNvbmZpZy5taW5EYXRlID4gc2VsZi5ub3dcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1pbkRhdGVcclxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLm1heERhdGUgJiYgc2VsZi5jb25maWcubWF4RGF0ZSA8IHNlbGYubm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWF4RGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHNlbGYubm93KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoanVtcFRvICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBqdW1wVG8uZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0ganVtcFRvLmdldE1vbnRoKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlLnN0YWNrKTtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiSW52YWxpZCBkYXRlIHN1cHBsaWVkOiBcIiArIGp1bXBUbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYucmVkcmF3KCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0aW1lSW5jcmVtZW50KGUpIHtcclxuICAgICAgICBpZiAofmUudGFyZ2V0LmNsYXNzTmFtZS5pbmRleE9mKFwiYXJyb3dcIikpXHJcbiAgICAgICAgICAgIGluY3JlbWVudE51bUlucHV0KGUsIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImFycm93VXBcIikgPyAxIDogLTEpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaW5jcmVtZW50TnVtSW5wdXQoZSwgZGVsdGEsIGlucHV0RWxlbSkge1xyXG4gICAgICAgIHZhciB0YXJnZXQgPSBlICYmIGUudGFyZ2V0O1xyXG4gICAgICAgIHZhciBpbnB1dCA9IGlucHV0RWxlbSB8fFxyXG4gICAgICAgICAgICAodGFyZ2V0ICYmIHRhcmdldC5wYXJlbnROb2RlICYmIHRhcmdldC5wYXJlbnROb2RlLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIHZhciBldmVudCA9IGNyZWF0ZUV2ZW50KFwiaW5jcmVtZW50XCIpO1xyXG4gICAgICAgIGV2ZW50LmRlbHRhID0gZGVsdGE7XHJcbiAgICAgICAgaW5wdXQgJiYgaW5wdXQuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBidWlsZCgpIHtcclxuICAgICAgICB2YXIgZnJhZ21lbnQgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLWNhbGVuZGFyXCIpO1xyXG4gICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIudGFiSW5kZXggPSAtMTtcclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLm5vQ2FsZW5kYXIpIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRNb250aE5hdigpKTtcclxuICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItaW5uZXJDb250YWluZXJcIik7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy53ZWVrTnVtYmVycykge1xyXG4gICAgICAgICAgICAgICAgdmFyIF9hID0gYnVpbGRXZWVrcygpLCB3ZWVrV3JhcHBlciA9IF9hLndlZWtXcmFwcGVyLCB3ZWVrTnVtYmVycyA9IF9hLndlZWtOdW1iZXJzO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZCh3ZWVrV3JhcHBlcik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLndlZWtOdW1iZXJzID0gd2Vla051bWJlcnM7XHJcbiAgICAgICAgICAgICAgICBzZWxmLndlZWtXcmFwcGVyID0gd2Vla1dyYXBwZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc2VsZi5yQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudChcImRpdlwiLCBcImZsYXRwaWNrci1yQ29udGFpbmVyXCIpO1xyXG4gICAgICAgICAgICBzZWxmLnJDb250YWluZXIuYXBwZW5kQ2hpbGQoYnVpbGRXZWVrZGF5cygpKTtcclxuICAgICAgICAgICAgaWYgKCFzZWxmLmRheXNDb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItZGF5c1wiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuZGF5c0NvbnRhaW5lci50YWJJbmRleCA9IC0xO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJ1aWxkRGF5cygpO1xyXG4gICAgICAgICAgICBzZWxmLnJDb250YWluZXIuYXBwZW5kQ2hpbGQoc2VsZi5kYXlzQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgc2VsZi5pbm5lckNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWxmLnJDb250YWluZXIpO1xyXG4gICAgICAgICAgICBmcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLmlubmVyQ29udGFpbmVyKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmVuYWJsZVRpbWUpIHtcclxuICAgICAgICAgICAgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoYnVpbGRUaW1lKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcInJhbmdlTW9kZVwiLCBzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpO1xyXG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYW5pbWF0ZVwiLCBzZWxmLmNvbmZpZy5hbmltYXRlKTtcclxuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmFwcGVuZENoaWxkKGZyYWdtZW50KTtcclxuICAgICAgICB2YXIgY3VzdG9tQXBwZW5kID0gc2VsZi5jb25maWcuYXBwZW5kVG8gIT09IHVuZGVmaW5lZCAmJiBzZWxmLmNvbmZpZy5hcHBlbmRUby5ub2RlVHlwZTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lIHx8IHNlbGYuY29uZmlnLnN0YXRpYykge1xyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoc2VsZi5jb25maWcuaW5saW5lID8gXCJpbmxpbmVcIiA6IFwic3RhdGljXCIpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lICYmICFjdXN0b21BcHBlbmQgJiYgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYuZWxlbWVudC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBzZWxmLl9pbnB1dC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnLnN0YXRpYykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHdyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdyYXBwZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5lbGVtZW50LnBhcmVudE5vZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHdyYXBwZXIsIHNlbGYuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dClcclxuICAgICAgICAgICAgICAgICAgICB3cmFwcGVyLmFwcGVuZENoaWxkKHNlbGYuYWx0SW5wdXQpO1xyXG4gICAgICAgICAgICAgICAgd3JhcHBlci5hcHBlbmRDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiAhc2VsZi5jb25maWcuaW5saW5lKVxyXG4gICAgICAgICAgICAoc2VsZi5jb25maWcuYXBwZW5kVG8gIT09IHVuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hcHBlbmRUb1xyXG4gICAgICAgICAgICAgICAgOiB3aW5kb3cuZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQoc2VsZi5jYWxlbmRhckNvbnRhaW5lcik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVEYXkoY2xhc3NOYW1lLCBkYXRlLCBkYXlOdW1iZXIsIGkpIHtcclxuICAgICAgICB2YXIgZGF0ZUlzRW5hYmxlZCA9IGlzRW5hYmxlZChkYXRlLCB0cnVlKSwgZGF5RWxlbWVudCA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWRheSBcIiArIGNsYXNzTmFtZSwgZGF0ZS5nZXREYXRlKCkudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgZGF5RWxlbWVudC5kYXRlT2JqID0gZGF0ZTtcclxuICAgICAgICBkYXlFbGVtZW50LiRpID0gaTtcclxuICAgICAgICBkYXlFbGVtZW50LnNldEF0dHJpYnV0ZShcImFyaWEtbGFiZWxcIiwgc2VsZi5mb3JtYXREYXRlKGRhdGUsIHNlbGYuY29uZmlnLmFyaWFEYXRlRm9ybWF0KSk7XHJcbiAgICAgICAgaWYgKGNvbXBhcmVEYXRlcyhkYXRlLCBzZWxmLm5vdykgPT09IDApIHtcclxuICAgICAgICAgICAgc2VsZi50b2RheURhdGVFbGVtID0gZGF5RWxlbWVudDtcclxuICAgICAgICAgICAgZGF5RWxlbWVudC5jbGFzc0xpc3QuYWRkKFwidG9kYXlcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRlSXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGRheUVsZW1lbnQudGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgaWYgKGlzRGF0ZVNlbGVjdGVkKGRhdGUpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZFwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlRWxlbSA9IGRheUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoZGF5RWxlbWVudCwgXCJzdGFydFJhbmdlXCIsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdKSA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlQ2xhc3MoZGF5RWxlbWVudCwgXCJlbmRSYW5nZVwiLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMV0gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1sxXSkgPT09IDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNhYmxlZFwiKTtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlc1swXSAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgJiZcclxuICAgICAgICAgICAgICAgIGRhdGUgPiBzZWxmLm1pblJhbmdlRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZSA8IHNlbGYuc2VsZWN0ZWREYXRlc1swXSlcclxuICAgICAgICAgICAgICAgIHNlbGYubWluUmFuZ2VEYXRlID0gZGF0ZTtcclxuICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5zZWxlY3RlZERhdGVzWzBdICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1heFJhbmdlRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZSA8IHNlbGYubWF4UmFuZ2VEYXRlICYmXHJcbiAgICAgICAgICAgICAgICBkYXRlID4gc2VsZi5zZWxlY3RlZERhdGVzWzBdKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5tYXhSYW5nZURhdGUgPSBkYXRlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiKSB7XHJcbiAgICAgICAgICAgIGlmIChpc0RhdGVJblJhbmdlKGRhdGUpICYmICFpc0RhdGVTZWxlY3RlZChkYXRlKSlcclxuICAgICAgICAgICAgICAgIGRheUVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImluUmFuZ2VcIik7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1pblJhbmdlRGF0ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLm1heFJhbmdlRGF0ZSAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAoZGF0ZSA8IHNlbGYubWluUmFuZ2VEYXRlIHx8IGRhdGUgPiBzZWxmLm1heFJhbmdlRGF0ZSkpXHJcbiAgICAgICAgICAgICAgICBkYXlFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJub3RBbGxvd2VkXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi53ZWVrTnVtYmVycyAmJlxyXG4gICAgICAgICAgICBjbGFzc05hbWUgIT09IFwicHJldk1vbnRoRGF5XCIgJiZcclxuICAgICAgICAgICAgZGF5TnVtYmVyICUgNyA9PT0gMSkge1xyXG4gICAgICAgICAgICBzZWxmLndlZWtOdW1iZXJzLmluc2VydEFkamFjZW50SFRNTChcImJlZm9yZWVuZFwiLCBcIjxzcGFuIGNsYXNzPSdkaXNhYmxlZCBmbGF0cGlja3ItZGF5Jz5cIiArXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5nZXRXZWVrKGRhdGUpICtcclxuICAgICAgICAgICAgICAgIFwiPC9zcGFuPlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25EYXlDcmVhdGVcIiwgZGF5RWxlbWVudCk7XHJcbiAgICAgICAgcmV0dXJuIGRheUVsZW1lbnQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBmb2N1c09uRGF5KGN1cnJlbnRJbmRleCwgb2Zmc2V0KSB7XHJcbiAgICAgICAgdmFyIG5ld0luZGV4ID0gY3VycmVudEluZGV4ICsgb2Zmc2V0IHx8IDAsIHRhcmdldE5vZGUgPSAoY3VycmVudEluZGV4ICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgPyBzZWxmLmRheXMuY2hpbGROb2Rlc1tuZXdJbmRleF1cclxuICAgICAgICAgICAgOiBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gfHxcclxuICAgICAgICAgICAgICAgIHNlbGYudG9kYXlEYXRlRWxlbSB8fFxyXG4gICAgICAgICAgICAgICAgc2VsZi5kYXlzLmNoaWxkTm9kZXNbMF0pO1xyXG4gICAgICAgIHZhciBmb2N1cyA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGFyZ2V0Tm9kZSA9IHRhcmdldE5vZGUgfHwgc2VsZi5kYXlzLmNoaWxkTm9kZXNbbmV3SW5kZXhdO1xyXG4gICAgICAgICAgICB0YXJnZXROb2RlLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpXHJcbiAgICAgICAgICAgICAgICBvbk1vdXNlT3Zlcih0YXJnZXROb2RlKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICh0YXJnZXROb2RlID09PSB1bmRlZmluZWQgJiYgb2Zmc2V0ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChvZmZzZXQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNoYW5nZU1vbnRoKDEsIHRydWUsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICUgNDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAob2Zmc2V0IDwgMCkge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VNb250aCgtMSwgdHJ1ZSwgdW5kZWZpbmVkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIG5ld0luZGV4ICs9IDQyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhZnRlckRheUFuaW0oZm9jdXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb2N1cygpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWZ0ZXJEYXlBbmltKGZuKSB7XHJcbiAgICAgICAgc2VsZi5jb25maWcuYW5pbWF0ZSA9PT0gdHJ1ZSA/IHNlbGYuX2FuaW1hdGlvbkxvb3AucHVzaChmbikgOiBmbigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYnVpbGREYXlzKGRlbHRhKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lciA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGZpcnN0T2ZNb250aCA9IChuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCwgMSkuZ2V0RGF5KCkgLVxyXG4gICAgICAgICAgICBzZWxmLmwxMG4uZmlyc3REYXlPZldlZWsgK1xyXG4gICAgICAgICAgICA3KSAlXHJcbiAgICAgICAgICAgIDcsIGlzUmFuZ2VNb2RlID0gc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiO1xyXG4gICAgICAgIHZhciBwcmV2TW9udGhEYXlzID0gc2VsZi51dGlscy5nZXREYXlzSW5Nb250aCgoc2VsZi5jdXJyZW50TW9udGggLSAxICsgMTIpICUgMTIpO1xyXG4gICAgICAgIHZhciBkYXlzSW5Nb250aCA9IHNlbGYudXRpbHMuZ2V0RGF5c0luTW9udGgoKSwgZGF5cyA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgdmFyIGRheU51bWJlciA9IHByZXZNb250aERheXMgKyAxIC0gZmlyc3RPZk1vbnRoLCBkYXlJbmRleCA9IDA7XHJcbiAgICAgICAgaWYgKHNlbGYud2Vla051bWJlcnMgJiYgc2VsZi53ZWVrTnVtYmVycy5maXJzdENoaWxkKVxyXG4gICAgICAgICAgICBzZWxmLndlZWtOdW1iZXJzLnRleHRDb250ZW50ID0gXCJcIjtcclxuICAgICAgICBpZiAoaXNSYW5nZU1vZGUpIHtcclxuICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgPSBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCAtIDEsIGRheU51bWJlcik7XHJcbiAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlID0gbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGggKyAxLCAoNDIgLSBmaXJzdE9mTW9udGgpICUgZGF5c0luTW9udGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKDsgZGF5TnVtYmVyIDw9IHByZXZNb250aERheXM7IGRheU51bWJlcisrLCBkYXlJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwicHJldk1vbnRoRGF5XCIsIG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoIC0gMSwgZGF5TnVtYmVyKSwgZGF5TnVtYmVyLCBkYXlJbmRleCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGRheU51bWJlciA9IDE7IGRheU51bWJlciA8PSBkYXlzSW5Nb250aDsgZGF5TnVtYmVyKyssIGRheUluZGV4KyspIHtcclxuICAgICAgICAgICAgZGF5cy5hcHBlbmRDaGlsZChjcmVhdGVEYXkoXCJcIiwgbmV3IERhdGUoc2VsZi5jdXJyZW50WWVhciwgc2VsZi5jdXJyZW50TW9udGgsIGRheU51bWJlciksIGRheU51bWJlciwgZGF5SW5kZXgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgZGF5TnVtID0gZGF5c0luTW9udGggKyAxOyBkYXlOdW0gPD0gNDIgLSBmaXJzdE9mTW9udGg7IGRheU51bSsrLCBkYXlJbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGRheXMuYXBwZW5kQ2hpbGQoY3JlYXRlRGF5KFwibmV4dE1vbnRoRGF5XCIsIG5ldyBEYXRlKHNlbGYuY3VycmVudFllYXIsIHNlbGYuY3VycmVudE1vbnRoICsgMSwgZGF5TnVtICUgZGF5c0luTW9udGgpLCBkYXlOdW0sIGRheUluZGV4KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpc1JhbmdlTW9kZSAmJiBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID09PSAxICYmIGRheXMuY2hpbGROb2Rlc1swXSkge1xyXG4gICAgICAgICAgICBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgPVxyXG4gICAgICAgICAgICAgICAgc2VsZi5faGlkZVByZXZNb250aEFycm93IHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKCEhc2VsZi5taW5SYW5nZURhdGUgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgPiBkYXlzLmNoaWxkTm9kZXNbMF0uZGF0ZU9iaik7XHJcbiAgICAgICAgICAgIHNlbGYuX2hpZGVOZXh0TW9udGhBcnJvdyA9XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgfHxcclxuICAgICAgICAgICAgICAgICAgICAoISFzZWxmLm1heFJhbmdlRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLm1heFJhbmdlRGF0ZSA8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCArIDEsIDEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcbiAgICAgICAgdmFyIGRheUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJkYXlDb250YWluZXJcIik7XHJcbiAgICAgICAgZGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKGRheXMpO1xyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcuYW5pbWF0ZSB8fCBkZWx0YSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBjbGVhck5vZGUoc2VsZi5kYXlzQ29udGFpbmVyKTtcclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgd2hpbGUgKHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZE5vZGVzLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIucmVtb3ZlQ2hpbGQoc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGVsdGEgJiYgZGVsdGEgPj0gMClcclxuICAgICAgICAgICAgc2VsZi5kYXlzQ29udGFpbmVyLmFwcGVuZENoaWxkKGRheUNvbnRhaW5lcik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzZWxmLmRheXNDb250YWluZXIuaW5zZXJ0QmVmb3JlKGRheUNvbnRhaW5lciwgc2VsZi5kYXlzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIHNlbGYuZGF5cyA9IHNlbGYuZGF5c0NvbnRhaW5lci5jaGlsZE5vZGVzWzBdO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYnVpbGRNb250aE5hdigpIHtcclxuICAgICAgICB2YXIgbW9udGhOYXZGcmFnbWVudCA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcbiAgICAgICAgc2VsZi5tb250aE5hdiA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItbW9udGhcIik7XHJcbiAgICAgICAgc2VsZi5wcmV2TW9udGhOYXYgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImZsYXRwaWNrci1wcmV2LW1vbnRoXCIpO1xyXG4gICAgICAgIHNlbGYucHJldk1vbnRoTmF2LmlubmVySFRNTCA9IHNlbGYuY29uZmlnLnByZXZBcnJvdztcclxuICAgICAgICBzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQgPSBjcmVhdGVFbGVtZW50KFwic3BhblwiLCBcImN1ci1tb250aFwiKTtcclxuICAgICAgICBzZWxmLmN1cnJlbnRNb250aEVsZW1lbnQudGl0bGUgPSBzZWxmLmwxMG4uc2Nyb2xsVGl0bGU7XHJcbiAgICAgICAgdmFyIHllYXJJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiY3VyLXllYXJcIik7XHJcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQgPSB5ZWFySW5wdXQuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC50aXRsZSA9IHNlbGYubDEwbi5zY3JvbGxUaXRsZTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSlcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWluID0gc2VsZi5jb25maWcubWluRGF0ZVxyXG4gICAgICAgICAgICAgICAgLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAgICAgICAgIC50b1N0cmluZygpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tYXhEYXRlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50Lm1heCA9IHNlbGYuY29uZmlnLm1heERhdGVcclxuICAgICAgICAgICAgICAgIC5nZXRGdWxsWWVhcigpXHJcbiAgICAgICAgICAgICAgICAudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQuZGlzYWJsZWQgPVxyXG4gICAgICAgICAgICAgICAgISFzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYubmV4dE1vbnRoTmF2ID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItbmV4dC1tb250aFwiKTtcclxuICAgICAgICBzZWxmLm5leHRNb250aE5hdi5pbm5lckhUTUwgPSBzZWxmLmNvbmZpZy5uZXh0QXJyb3c7XHJcbiAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItY3VycmVudC1tb250aFwiKTtcclxuICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGguYXBwZW5kQ2hpbGQoc2VsZi5jdXJyZW50TW9udGhFbGVtZW50KTtcclxuICAgICAgICBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGguYXBwZW5kQ2hpbGQoeWVhcklucHV0KTtcclxuICAgICAgICBtb250aE5hdkZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYucHJldk1vbnRoTmF2KTtcclxuICAgICAgICBtb250aE5hdkZyYWdtZW50LmFwcGVuZENoaWxkKHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aCk7XHJcbiAgICAgICAgbW9udGhOYXZGcmFnbWVudC5hcHBlbmRDaGlsZChzZWxmLm5leHRNb250aE5hdik7XHJcbiAgICAgICAgc2VsZi5tb250aE5hdi5hcHBlbmRDaGlsZChtb250aE5hdkZyYWdtZW50KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJfaGlkZVByZXZNb250aEFycm93XCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLl9faGlkZVByZXZNb250aEFycm93OyB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChib29sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdyAhPT0gYm9vbClcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnByZXZNb250aE5hdi5zdHlsZS5kaXNwbGF5ID0gYm9vbCA/IFwibm9uZVwiIDogXCJibG9ja1wiO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5fX2hpZGVQcmV2TW9udGhBcnJvdyA9IGJvb2w7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHNlbGYsIFwiX2hpZGVOZXh0TW9udGhBcnJvd1wiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5fX2hpZGVOZXh0TW9udGhBcnJvdzsgfSxcclxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoYm9vbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlbGYuX19oaWRlTmV4dE1vbnRoQXJyb3cgIT09IGJvb2wpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5uZXh0TW9udGhOYXYuc3R5bGUuZGlzcGxheSA9IGJvb2wgPyBcIm5vbmVcIiA6IFwiYmxvY2tcIjtcclxuICAgICAgICAgICAgICAgIHNlbGYuX19oaWRlTmV4dE1vbnRoQXJyb3cgPSBib29sO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuICAgICAgICByZXR1cm4gc2VsZi5tb250aE5hdjtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGJ1aWxkVGltZSgpIHtcclxuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNUaW1lXCIpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5ub0NhbGVuZGFyKVxyXG4gICAgICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJub0NhbGVuZGFyXCIpO1xyXG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lciA9IGNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgXCJmbGF0cGlja3ItdGltZVwiKTtcclxuICAgICAgICBzZWxmLnRpbWVDb250YWluZXIudGFiSW5kZXggPSAtMTtcclxuICAgICAgICB2YXIgc2VwYXJhdG9yID0gY3JlYXRlRWxlbWVudChcInNwYW5cIiwgXCJmbGF0cGlja3ItdGltZS1zZXBhcmF0b3JcIiwgXCI6XCIpO1xyXG4gICAgICAgIHZhciBob3VySW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1ob3VyXCIpO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQgPSBob3VySW5wdXQuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICB2YXIgbWludXRlSW5wdXQgPSBjcmVhdGVOdW1iZXJJbnB1dChcImZsYXRwaWNrci1taW51dGVcIik7XHJcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50ID0gbWludXRlSW5wdXQuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnRhYkluZGV4ID0gc2VsZi5taW51dGVFbGVtZW50LnRhYkluZGV4ID0gLTE7XHJcbiAgICAgICAgc2VsZi5ob3VyRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxyXG4gICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldEhvdXJzKClcclxuICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy50aW1lXzI0aHJcclxuICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcuZGVmYXVsdEhvdXJcclxuICAgICAgICAgICAgICAgIDogbWlsaXRhcnkyYW1wbShzZWxmLmNvbmZpZy5kZWZhdWx0SG91cikpO1xyXG4gICAgICAgIHNlbGYubWludXRlRWxlbWVudC52YWx1ZSA9IHBhZChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9ialxyXG4gICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldE1pbnV0ZXMoKVxyXG4gICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRlZmF1bHRNaW51dGUpO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQuc3RlcCA9IHNlbGYuY29uZmlnLmhvdXJJbmNyZW1lbnQudG9TdHJpbmcoKTtcclxuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQuc3RlcCA9IHNlbGYuY29uZmlnLm1pbnV0ZUluY3JlbWVudC50b1N0cmluZygpO1xyXG4gICAgICAgIHNlbGYuaG91ckVsZW1lbnQubWluID0gc2VsZi5jb25maWcudGltZV8yNGhyID8gXCIwXCIgOiBcIjFcIjtcclxuICAgICAgICBzZWxmLmhvdXJFbGVtZW50Lm1heCA9IHNlbGYuY29uZmlnLnRpbWVfMjRociA/IFwiMjNcIiA6IFwiMTJcIjtcclxuICAgICAgICBzZWxmLm1pbnV0ZUVsZW1lbnQubWluID0gXCIwXCI7XHJcbiAgICAgICAgc2VsZi5taW51dGVFbGVtZW50Lm1heCA9IFwiNTlcIjtcclxuICAgICAgICBzZWxmLmhvdXJFbGVtZW50LnRpdGxlID0gc2VsZi5taW51dGVFbGVtZW50LnRpdGxlID0gc2VsZi5sMTBuLnNjcm9sbFRpdGxlO1xyXG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChob3VySW5wdXQpO1xyXG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZXBhcmF0b3IpO1xyXG4gICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChtaW51dGVJbnB1dCk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLnRpbWVfMjRocilcclxuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJ0aW1lMjRoclwiKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuZW5hYmxlU2Vjb25kcykge1xyXG4gICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuY2xhc3NMaXN0LmFkZChcImhhc1NlY29uZHNcIik7XHJcbiAgICAgICAgICAgIHZhciBzZWNvbmRJbnB1dCA9IGNyZWF0ZU51bWJlcklucHV0KFwiZmxhdHBpY2tyLXNlY29uZFwiKTtcclxuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50ID0gc2Vjb25kSW5wdXQuY2hpbGROb2Rlc1swXTtcclxuICAgICAgICAgICAgc2VsZi5zZWNvbmRFbGVtZW50LnZhbHVlID0gcGFkKHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqXHJcbiAgICAgICAgICAgICAgICA/IHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqLmdldFNlY29uZHMoKVxyXG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kZWZhdWx0U2Vjb25kcyk7XHJcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5zdGVwID0gc2VsZi5taW51dGVFbGVtZW50LnN0ZXA7XHJcbiAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5taW4gPSBzZWxmLm1pbnV0ZUVsZW1lbnQubWluO1xyXG4gICAgICAgICAgICBzZWxmLnNlY29uZEVsZW1lbnQubWF4ID0gc2VsZi5taW51dGVFbGVtZW50Lm1heDtcclxuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXRpbWUtc2VwYXJhdG9yXCIsIFwiOlwiKSk7XHJcbiAgICAgICAgICAgIHNlbGYudGltZUNvbnRhaW5lci5hcHBlbmRDaGlsZChzZWNvbmRJbnB1dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghc2VsZi5jb25maWcudGltZV8yNGhyKSB7XHJcbiAgICAgICAgICAgIHNlbGYuYW1QTSA9IGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLWFtLXBtXCIsIHNlbGYubDEwbi5hbVBNW2ludCgoc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmpcclxuICAgICAgICAgICAgICAgID8gc2VsZi5ob3VyRWxlbWVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5kZWZhdWx0SG91cikgPiAxMSldKTtcclxuICAgICAgICAgICAgc2VsZi5hbVBNLnRpdGxlID0gc2VsZi5sMTBuLnRvZ2dsZVRpdGxlO1xyXG4gICAgICAgICAgICBzZWxmLmFtUE0udGFiSW5kZXggPSAtMTtcclxuICAgICAgICAgICAgc2VsZi50aW1lQ29udGFpbmVyLmFwcGVuZENoaWxkKHNlbGYuYW1QTSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzZWxmLnRpbWVDb250YWluZXI7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBidWlsZFdlZWtkYXlzKCkge1xyXG4gICAgICAgIGlmICghc2VsZi53ZWVrZGF5Q29udGFpbmVyKVxyXG4gICAgICAgICAgICBzZWxmLndlZWtkYXlDb250YWluZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtkYXlzXCIpO1xyXG4gICAgICAgIHZhciBmaXJzdERheU9mV2VlayA9IHNlbGYubDEwbi5maXJzdERheU9mV2VlaztcclxuICAgICAgICB2YXIgd2Vla2RheXMgPSBzZWxmLmwxMG4ud2Vla2RheXMuc2hvcnRoYW5kLnNsaWNlKCk7XHJcbiAgICAgICAgaWYgKGZpcnN0RGF5T2ZXZWVrID4gMCAmJiBmaXJzdERheU9mV2VlayA8IHdlZWtkYXlzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB3ZWVrZGF5cyA9IHdlZWtkYXlzLnNwbGljZShmaXJzdERheU9mV2Vlaywgd2Vla2RheXMubGVuZ3RoKS5jb25jYXQod2Vla2RheXMuc3BsaWNlKDAsIGZpcnN0RGF5T2ZXZWVrKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYud2Vla2RheUNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlxcbiAgICA8c3BhbiBjbGFzcz1mbGF0cGlja3Itd2Vla2RheT5cXG4gICAgICBcIiArIHdlZWtkYXlzLmpvaW4oXCI8L3NwYW4+PHNwYW4gY2xhc3M9ZmxhdHBpY2tyLXdlZWtkYXk+XCIpICsgXCJcXG4gICAgPC9zcGFuPlxcbiAgICBcIjtcclxuICAgICAgICByZXR1cm4gc2VsZi53ZWVrZGF5Q29udGFpbmVyO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYnVpbGRXZWVrcygpIHtcclxuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJoYXNXZWVrc1wiKTtcclxuICAgICAgICB2YXIgd2Vla1dyYXBwZXIgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWt3cmFwcGVyXCIpO1xyXG4gICAgICAgIHdlZWtXcmFwcGVyLmFwcGVuZENoaWxkKGNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIFwiZmxhdHBpY2tyLXdlZWtkYXlcIiwgc2VsZi5sMTBuLndlZWtBYmJyZXZpYXRpb24pKTtcclxuICAgICAgICB2YXIgd2Vla051bWJlcnMgPSBjcmVhdGVFbGVtZW50KFwiZGl2XCIsIFwiZmxhdHBpY2tyLXdlZWtzXCIpO1xyXG4gICAgICAgIHdlZWtXcmFwcGVyLmFwcGVuZENoaWxkKHdlZWtOdW1iZXJzKTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3ZWVrV3JhcHBlcjogd2Vla1dyYXBwZXIsXHJcbiAgICAgICAgICAgIHdlZWtOdW1iZXJzOiB3ZWVrTnVtYmVycyxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2hhbmdlTW9udGgodmFsdWUsIGlzX29mZnNldCwgYW5pbWF0ZSwgZnJvbV9rZXlib2FyZCkge1xyXG4gICAgICAgIGlmIChpc19vZmZzZXQgPT09IHZvaWQgMCkgeyBpc19vZmZzZXQgPSB0cnVlOyB9XHJcbiAgICAgICAgaWYgKGFuaW1hdGUgPT09IHZvaWQgMCkgeyBhbmltYXRlID0gc2VsZi5jb25maWcuYW5pbWF0ZTsgfVxyXG4gICAgICAgIGlmIChmcm9tX2tleWJvYXJkID09PSB2b2lkIDApIHsgZnJvbV9rZXlib2FyZCA9IGZhbHNlOyB9XHJcbiAgICAgICAgdmFyIGRlbHRhID0gaXNfb2Zmc2V0ID8gdmFsdWUgOiB2YWx1ZSAtIHNlbGYuY3VycmVudE1vbnRoO1xyXG4gICAgICAgIGlmICgoZGVsdGEgPCAwICYmIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdykgfHxcclxuICAgICAgICAgICAgKGRlbHRhID4gMCAmJiBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cpKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2VsZi5jdXJyZW50TW9udGggKz0gZGVsdGE7XHJcbiAgICAgICAgaWYgKHNlbGYuY3VycmVudE1vbnRoIDwgMCB8fCBzZWxmLmN1cnJlbnRNb250aCA+IDExKSB7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXIgKz0gc2VsZi5jdXJyZW50TW9udGggPiAxMSA/IDEgOiAtMTtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSAoc2VsZi5jdXJyZW50TW9udGggKyAxMikgJSAxMjtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25ZZWFyQ2hhbmdlXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBidWlsZERheXMoYW5pbWF0ZSA/IGRlbHRhIDogdW5kZWZpbmVkKTtcclxuICAgICAgICBpZiAoIWFuaW1hdGUpIHtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25Nb250aENoYW5nZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5hdiA9IHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aDtcclxuICAgICAgICBpZiAoZGVsdGEgPCAwKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChuYXYubmV4dFNpYmxpbmcgJiZcclxuICAgICAgICAgICAgICAgIC9jdXJyLy50ZXN0KG5hdi5uZXh0U2libGluZy5jbGFzc05hbWUpKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5tb250aE5hdi5yZW1vdmVDaGlsZChuYXYubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChkZWx0YSA+IDApIHtcclxuICAgICAgICAgICAgd2hpbGUgKG5hdi5wcmV2aW91c1NpYmxpbmcgJiZcclxuICAgICAgICAgICAgICAgIC9jdXJyLy50ZXN0KG5hdi5wcmV2aW91c1NpYmxpbmcuY2xhc3NOYW1lKSlcclxuICAgICAgICAgICAgICAgIHNlbGYubW9udGhOYXYucmVtb3ZlQ2hpbGQobmF2LnByZXZpb3VzU2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYub2xkQ3VyTW9udGggPSBzZWxmLm5hdmlnYXRpb25DdXJyZW50TW9udGg7XHJcbiAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoID0gc2VsZi5tb250aE5hdi5pbnNlcnRCZWZvcmUoc2VsZi5vbGRDdXJNb250aC5jbG9uZU5vZGUodHJ1ZSksIGRlbHRhID4gMCA/IHNlbGYub2xkQ3VyTW9udGgubmV4dFNpYmxpbmcgOiBzZWxmLm9sZEN1ck1vbnRoKTtcclxuICAgICAgICB2YXIgZGF5c0NvbnRhaW5lciA9IHNlbGYuZGF5c0NvbnRhaW5lcjtcclxuICAgICAgICBpZiAoZGF5c0NvbnRhaW5lci5maXJzdENoaWxkICYmIGRheXNDb250YWluZXIubGFzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIGlmIChkZWx0YSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRheXNDb250YWluZXIuZmlyc3RDaGlsZC5jbGFzc0xpc3QuYWRkKFwic2xpZGVMZWZ0XCIpO1xyXG4gICAgICAgICAgICAgICAgZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNsaWRlTGVmdE5ld1wiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYub2xkQ3VyTW9udGguY2xhc3NMaXN0LmFkZChcInNsaWRlTGVmdFwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5jbGFzc0xpc3QuYWRkKFwic2xpZGVMZWZ0TmV3XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2UgaWYgKGRlbHRhIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgZGF5c0NvbnRhaW5lci5maXJzdENoaWxkLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVJpZ2h0TmV3XCIpO1xyXG4gICAgICAgICAgICAgICAgZGF5c0NvbnRhaW5lci5sYXN0Q2hpbGQuY2xhc3NMaXN0LmFkZChcInNsaWRlUmlnaHRcIik7XHJcbiAgICAgICAgICAgICAgICBzZWxmLm9sZEN1ck1vbnRoLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVJpZ2h0XCIpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5uYXZpZ2F0aW9uQ3VycmVudE1vbnRoLmNsYXNzTGlzdC5hZGQoXCJzbGlkZVJpZ2h0TmV3XCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoRWxlbWVudCA9IHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aFxyXG4gICAgICAgICAgICAuZmlyc3RDaGlsZDtcclxuICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudCA9IHNlbGYubmF2aWdhdGlvbkN1cnJlbnRNb250aC5sYXN0Q2hpbGRcclxuICAgICAgICAgICAgLmNoaWxkTm9kZXNbMF07XHJcbiAgICAgICAgdXBkYXRlTmF2aWdhdGlvbkN1cnJlbnRNb250aCgpO1xyXG4gICAgICAgIGlmIChzZWxmLm9sZEN1ck1vbnRoLmZpcnN0Q2hpbGQpXHJcbiAgICAgICAgICAgIHNlbGYub2xkQ3VyTW9udGguZmlyc3RDaGlsZC50ZXh0Q29udGVudCA9IG1vbnRoVG9TdHIoc2VsZi5jdXJyZW50TW9udGggLSBkZWx0YSwgc2VsZi5jb25maWcuc2hvcnRoYW5kQ3VycmVudE1vbnRoLCBzZWxmLmwxMG4pO1xyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XHJcbiAgICAgICAgaWYgKGZyb21fa2V5Ym9hcmQgJiZcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCAmJlxyXG4gICAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LiRpKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleF8xID0gZG9jdW1lbnQuYWN0aXZlRWxlbWVudC4kaTtcclxuICAgICAgICAgICAgYWZ0ZXJEYXlBbmltKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGZvY3VzT25EYXkoaW5kZXhfMSwgMCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGNsZWFyKHRyaWdnZXJDaGFuZ2VFdmVudCkge1xyXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQgPT09IHZvaWQgMCkgeyB0cmlnZ2VyQ2hhbmdlRXZlbnQgPSB0cnVlOyB9XHJcbiAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQpXHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIGlmIChzZWxmLm1vYmlsZUlucHV0KVxyXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID0gXCJcIjtcclxuICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbXTtcclxuICAgICAgICBzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IHVuZGVmaW5lZDtcclxuICAgICAgICBzZWxmLnNob3dUaW1lSW5wdXQgPSBmYWxzZTtcclxuICAgICAgICBzZWxmLnJlZHJhdygpO1xyXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlRXZlbnQgPT09IHRydWUpXHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2xvc2UoKSB7XHJcbiAgICAgICAgc2VsZi5pc09wZW4gPSBmYWxzZTtcclxuICAgICAgICBpZiAoIXNlbGYuaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKFwib3BlblwiKTtcclxuICAgICAgICAgICAgc2VsZi5faW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImFjdGl2ZVwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DbG9zZVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uRGVzdHJveVwiKTtcclxuICAgICAgICBmb3IgKHZhciBpID0gc2VsZi5faGFuZGxlcnMubGVuZ3RoOyBpLS07KSB7XHJcbiAgICAgICAgICAgIHZhciBoID0gc2VsZi5faGFuZGxlcnNbaV07XHJcbiAgICAgICAgICAgIGguZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKGguZXZlbnQsIGguaGFuZGxlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuX2hhbmRsZXJzID0gW107XHJcbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLm1vYmlsZUlucHV0KTtcclxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dCA9IHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2VsZi5jYWxlbmRhckNvbnRhaW5lciAmJiBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLnBhcmVudE5vZGUpXHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKTtcclxuICAgICAgICBpZiAoc2VsZi5hbHRJbnB1dCkge1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBcInRleHRcIjtcclxuICAgICAgICAgICAgaWYgKHNlbGYuYWx0SW5wdXQucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzZWxmLmFsdElucHV0KTtcclxuICAgICAgICAgICAgZGVsZXRlIHNlbGYuYWx0SW5wdXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzZWxmLmlucHV0KSB7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQudHlwZSA9IHNlbGYuaW5wdXQuX3R5cGU7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImZsYXRwaWNrci1pbnB1dFwiKTtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC5yZW1vdmVBdHRyaWJ1dGUoXCJyZWFkb25seVwiKTtcclxuICAgICAgICAgICAgc2VsZi5pbnB1dC52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFtcclxuICAgICAgICAgICAgXCJfc2hvd1RpbWVJbnB1dFwiLFxyXG4gICAgICAgICAgICBcImxhdGVzdFNlbGVjdGVkRGF0ZU9ialwiLFxyXG4gICAgICAgICAgICBcIl9oaWRlTmV4dE1vbnRoQXJyb3dcIixcclxuICAgICAgICAgICAgXCJfaGlkZVByZXZNb250aEFycm93XCIsXHJcbiAgICAgICAgICAgIFwiX19oaWRlTmV4dE1vbnRoQXJyb3dcIixcclxuICAgICAgICAgICAgXCJfX2hpZGVQcmV2TW9udGhBcnJvd1wiLFxyXG4gICAgICAgICAgICBcImlzTW9iaWxlXCIsXHJcbiAgICAgICAgICAgIFwiaXNPcGVuXCIsXHJcbiAgICAgICAgICAgIFwic2VsZWN0ZWREYXRlRWxlbVwiLFxyXG4gICAgICAgICAgICBcIm1pbkRhdGVIYXNUaW1lXCIsXHJcbiAgICAgICAgICAgIFwibWF4RGF0ZUhhc1RpbWVcIixcclxuICAgICAgICAgICAgXCJkYXlzXCIsXHJcbiAgICAgICAgICAgIFwiZGF5c0NvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcIl9pbnB1dFwiLFxyXG4gICAgICAgICAgICBcIl9wb3NpdGlvbkVsZW1lbnRcIixcclxuICAgICAgICAgICAgXCJpbm5lckNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcInJDb250YWluZXJcIixcclxuICAgICAgICAgICAgXCJtb250aE5hdlwiLFxyXG4gICAgICAgICAgICBcInRvZGF5RGF0ZUVsZW1cIixcclxuICAgICAgICAgICAgXCJjYWxlbmRhckNvbnRhaW5lclwiLFxyXG4gICAgICAgICAgICBcIndlZWtkYXlDb250YWluZXJcIixcclxuICAgICAgICAgICAgXCJwcmV2TW9udGhOYXZcIixcclxuICAgICAgICAgICAgXCJuZXh0TW9udGhOYXZcIixcclxuICAgICAgICAgICAgXCJjdXJyZW50TW9udGhFbGVtZW50XCIsXHJcbiAgICAgICAgICAgIFwiY3VycmVudFllYXJFbGVtZW50XCIsXHJcbiAgICAgICAgICAgIFwibmF2aWdhdGlvbkN1cnJlbnRNb250aFwiLFxyXG4gICAgICAgICAgICBcInNlbGVjdGVkRGF0ZUVsZW1cIixcclxuICAgICAgICAgICAgXCJjb25maWdcIixcclxuICAgICAgICBdLmZvckVhY2goZnVuY3Rpb24gKGspIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBzZWxmW2tdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChfKSB7IH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGlzQ2FsZW5kYXJFbGVtKGVsZW0pIHtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuYXBwZW5kVG8gJiYgc2VsZi5jb25maWcuYXBwZW5kVG8uY29udGFpbnMoZWxlbSkpXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIHJldHVybiBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNvbnRhaW5zKGVsZW0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gZG9jdW1lbnRDbGljayhlKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuICYmICFzZWxmLmNvbmZpZy5pbmxpbmUpIHtcclxuICAgICAgICAgICAgdmFyIGlzQ2FsZW5kYXJFbGVtZW50ID0gaXNDYWxlbmRhckVsZW0oZS50YXJnZXQpO1xyXG4gICAgICAgICAgICB2YXIgaXNJbnB1dCA9IGUudGFyZ2V0ID09PSBzZWxmLmlucHV0IHx8XHJcbiAgICAgICAgICAgICAgICBlLnRhcmdldCA9PT0gc2VsZi5hbHRJbnB1dCB8fFxyXG4gICAgICAgICAgICAgICAgc2VsZi5lbGVtZW50LmNvbnRhaW5zKGUudGFyZ2V0KSB8fFxyXG4gICAgICAgICAgICAgICAgKGUucGF0aCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGUucGF0aC5pbmRleE9mICYmXHJcbiAgICAgICAgICAgICAgICAgICAgKH5lLnBhdGguaW5kZXhPZihzZWxmLmlucHV0KSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB+ZS5wYXRoLmluZGV4T2Yoc2VsZi5hbHRJbnB1dCkpKTtcclxuICAgICAgICAgICAgdmFyIGxvc3RGb2N1cyA9IGUudHlwZSA9PT0gXCJibHVyXCJcclxuICAgICAgICAgICAgICAgID8gaXNJbnB1dCAmJlxyXG4gICAgICAgICAgICAgICAgICAgIGUucmVsYXRlZFRhcmdldCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICFpc0NhbGVuZGFyRWxlbShlLnJlbGF0ZWRUYXJnZXQpXHJcbiAgICAgICAgICAgICAgICA6ICFpc0lucHV0ICYmICFpc0NhbGVuZGFyRWxlbWVudDtcclxuICAgICAgICAgICAgaWYgKGxvc3RGb2N1cyAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuaWdub3JlZEZvY3VzRWxlbWVudHMuaW5kZXhPZihlLnRhcmdldCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VsZi5jb25maWcubW9kZSA9PT0gXCJyYW5nZVwiICYmIHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLnJlZHJhdygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gY2hhbmdlWWVhcihuZXdZZWFyKSB7XHJcbiAgICAgICAgaWYgKCFuZXdZZWFyIHx8XHJcbiAgICAgICAgICAgIChzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5taW4gJiZcclxuICAgICAgICAgICAgICAgIG5ld1llYXIgPCBwYXJzZUludChzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5taW4pKSB8fFxyXG4gICAgICAgICAgICAoc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWF4ICYmXHJcbiAgICAgICAgICAgICAgICBuZXdZZWFyID4gcGFyc2VJbnQoc2VsZi5jdXJyZW50WWVhckVsZW1lbnQubWF4KSkpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgbmV3WWVhck51bSA9IG5ld1llYXIsIGlzTmV3WWVhciA9IHNlbGYuY3VycmVudFllYXIgIT09IG5ld1llYXJOdW07XHJcbiAgICAgICAgc2VsZi5jdXJyZW50WWVhciA9IG5ld1llYXJOdW0gfHwgc2VsZi5jdXJyZW50WWVhcjtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSAmJlxyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKCkpIHtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBNYXRoLm1pbihzZWxmLmNvbmZpZy5tYXhEYXRlLmdldE1vbnRoKCksIHNlbGYuY3VycmVudE1vbnRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcubWluRGF0ZSAmJlxyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5taW5EYXRlLmdldEZ1bGxZZWFyKCkpIHtcclxuICAgICAgICAgICAgc2VsZi5jdXJyZW50TW9udGggPSBNYXRoLm1heChzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1vbnRoKCksIHNlbGYuY3VycmVudE1vbnRoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlzTmV3WWVhcikge1xyXG4gICAgICAgICAgICBzZWxmLnJlZHJhdygpO1xyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNFbmFibGVkKGRhdGUsIHRpbWVsZXNzKSB7XHJcbiAgICAgICAgaWYgKHRpbWVsZXNzID09PSB2b2lkIDApIHsgdGltZWxlc3MgPSB0cnVlOyB9XHJcbiAgICAgICAgdmFyIGRhdGVUb0NoZWNrID0gc2VsZi5wYXJzZURhdGUoZGF0ZSwgdW5kZWZpbmVkLCB0aW1lbGVzcyk7XHJcbiAgICAgICAgaWYgKChzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgIGRhdGVUb0NoZWNrICYmXHJcbiAgICAgICAgICAgIGNvbXBhcmVEYXRlcyhkYXRlVG9DaGVjaywgc2VsZi5jb25maWcubWluRGF0ZSwgdGltZWxlc3MgIT09IHVuZGVmaW5lZCA/IHRpbWVsZXNzIDogIXNlbGYubWluRGF0ZUhhc1RpbWUpIDwgMCkgfHxcclxuICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1heERhdGUgJiZcclxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICYmXHJcbiAgICAgICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZVRvQ2hlY2ssIHNlbGYuY29uZmlnLm1heERhdGUsIHRpbWVsZXNzICE9PSB1bmRlZmluZWQgPyB0aW1lbGVzcyA6ICFzZWxmLm1heERhdGVIYXNUaW1lKSA+IDApKVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKCFzZWxmLmNvbmZpZy5lbmFibGUubGVuZ3RoICYmICFzZWxmLmNvbmZpZy5kaXNhYmxlLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKGRhdGVUb0NoZWNrID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB2YXIgYm9vbCA9IHNlbGYuY29uZmlnLmVuYWJsZS5sZW5ndGggPiAwLCBhcnJheSA9IGJvb2wgPyBzZWxmLmNvbmZpZy5lbmFibGUgOiBzZWxmLmNvbmZpZy5kaXNhYmxlO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBkID0gdm9pZCAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZCA9IGFycmF5W2ldO1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGQgPT09IFwiZnVuY3Rpb25cIiAmJlxyXG4gICAgICAgICAgICAgICAgZChkYXRlVG9DaGVjaykpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcclxuICAgICAgICAgICAgZWxzZSBpZiAoZCBpbnN0YW5jZW9mIERhdGUgJiZcclxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIGQuZ2V0VGltZSgpID09PSBkYXRlVG9DaGVjay5nZXRUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYm9vbDtcclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGQgPT09IFwic3RyaW5nXCIgJiYgZGF0ZVRvQ2hlY2sgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcnNlZCA9IHNlbGYucGFyc2VEYXRlKGQsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkICYmIHBhcnNlZC5nZXRUaW1lKCkgPT09IGRhdGVUb0NoZWNrLmdldFRpbWUoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gYm9vbFxyXG4gICAgICAgICAgICAgICAgICAgIDogIWJvb2w7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIGQgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIGQuZnJvbSAmJlxyXG4gICAgICAgICAgICAgICAgZC50byAmJlxyXG4gICAgICAgICAgICAgICAgZGF0ZVRvQ2hlY2suZ2V0VGltZSgpID49IGQuZnJvbS5nZXRUaW1lKCkgJiZcclxuICAgICAgICAgICAgICAgIGRhdGVUb0NoZWNrLmdldFRpbWUoKSA8PSBkLnRvLmdldFRpbWUoKSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBib29sO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gIWJvb2w7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbktleURvd24oZSkge1xyXG4gICAgICAgIHZhciBpc0lucHV0ID0gZS50YXJnZXQgPT09IHNlbGYuX2lucHV0O1xyXG4gICAgICAgIHZhciBjYWxlbmRhckVsZW0gPSBpc0NhbGVuZGFyRWxlbShlLnRhcmdldCk7XHJcbiAgICAgICAgdmFyIGFsbG93SW5wdXQgPSBzZWxmLmNvbmZpZy5hbGxvd0lucHV0O1xyXG4gICAgICAgIHZhciBhbGxvd0tleWRvd24gPSBzZWxmLmlzT3BlbiAmJiAoIWFsbG93SW5wdXQgfHwgIWlzSW5wdXQpO1xyXG4gICAgICAgIHZhciBhbGxvd0lubGluZUtleWRvd24gPSBzZWxmLmNvbmZpZy5pbmxpbmUgJiYgaXNJbnB1dCAmJiAhYWxsb3dJbnB1dDtcclxuICAgICAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIiAmJiBpc0lucHV0KSB7XHJcbiAgICAgICAgICAgIGlmIChhbGxvd0lucHV0KSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNldERhdGUoc2VsZi5faW5wdXQudmFsdWUsIHRydWUsIGUudGFyZ2V0ID09PSBzZWxmLmFsdElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5hbHRGb3JtYXRcclxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYuY29uZmlnLmRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGUudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZWxmLm9wZW4oKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2FsZW5kYXJFbGVtIHx8IGFsbG93S2V5ZG93biB8fCBhbGxvd0lubGluZUtleWRvd24pIHtcclxuICAgICAgICAgICAgdmFyIGlzVGltZU9iaiA9ICEhc2VsZi50aW1lQ29udGFpbmVyICYmXHJcbiAgICAgICAgICAgICAgICBzZWxmLnRpbWVDb250YWluZXIuY29udGFpbnMoZS50YXJnZXQpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGUua2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiRW50ZXJcIjpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNUaW1lT2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0RGF0ZShlKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJFc2NhcGVcIjpcclxuICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jbG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOlxyXG4gICAgICAgICAgICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0lucHV0ICYmICFzZWxmLmNvbmZpZy5hbGxvd0lucHV0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNUaW1lT2JqKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRlbHRhXzEgPSBlLmtleSA9PT0gXCJBcnJvd1JpZ2h0XCIgPyAxIDogLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWUuY3RybEtleSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGUudGFyZ2V0LiRpLCBkZWx0YV8xKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VNb250aChkZWx0YV8xLCB0cnVlLCB1bmRlZmluZWQsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHNlbGYuaG91ckVsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuaG91ckVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWx0YSA9IGUua2V5ID09PSBcIkFycm93RG93blwiID8gMSA6IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmRheXNDb250YWluZXIgJiYgZS50YXJnZXQuJGkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZS5jdHJsS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgLSBkZWx0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb2N1c09uRGF5KGUudGFyZ2V0LiRpLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNUaW1lT2JqKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9jdXNPbkRheShlLnRhcmdldC4kaSwgZGVsdGEgKiA3KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoc2VsZi5jb25maWcuZW5hYmxlVGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzVGltZU9iaiAmJiBzZWxmLmhvdXJFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5ob3VyRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVUaW1lKGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxmLl9kZWJvdW5jZWRDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiVGFiXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGUudGFyZ2V0ID09PSBzZWxmLmhvdXJFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5taW51dGVFbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldCA9PT0gc2VsZi5taW51dGVFbGVtZW50ICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChzZWxmLnNlY29uZEVsZW1lbnQgfHwgc2VsZi5hbVBNKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLnNlY29uZEVsZW1lbnQgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuc2Vjb25kRWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChlLnRhcmdldCA9PT0gc2VsZi5zZWNvbmRFbGVtZW50ICYmIHNlbGYuYW1QTSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJhXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGYuYW1QTSAhPT0gdW5kZWZpbmVkICYmIGUudGFyZ2V0ID09PSBzZWxmLmFtUE0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5hbVBNLnRleHRDb250ZW50ID0gXCJBTVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlVmFsdWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwicFwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCAmJiBlLnRhcmdldCA9PT0gc2VsZi5hbVBNKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IFwiUE1cIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tSW5wdXRzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbktleURvd25cIiwgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU92ZXIoZWxlbSkge1xyXG4gICAgICAgIGlmIChzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICE9PSAxIHx8XHJcbiAgICAgICAgICAgICFlbGVtLmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgfHxcclxuICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgPT09IHVuZGVmaW5lZCB8fFxyXG4gICAgICAgICAgICBzZWxmLm1heFJhbmdlRGF0ZSA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGhvdmVyRGF0ZSA9IGVsZW0uZGF0ZU9iaiwgaW5pdGlhbERhdGUgPSBzZWxmLnBhcnNlRGF0ZShzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHVuZGVmaW5lZCwgdHJ1ZSksIHJhbmdlU3RhcnREYXRlID0gTWF0aC5taW4oaG92ZXJEYXRlLmdldFRpbWUoKSwgc2VsZi5zZWxlY3RlZERhdGVzWzBdLmdldFRpbWUoKSksIHJhbmdlRW5kRGF0ZSA9IE1hdGgubWF4KGhvdmVyRGF0ZS5nZXRUaW1lKCksIHNlbGYuc2VsZWN0ZWREYXRlc1swXS5nZXRUaW1lKCkpLCBjb250YWluc0Rpc2FibGVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yICh2YXIgdCA9IHJhbmdlU3RhcnREYXRlOyB0IDwgcmFuZ2VFbmREYXRlOyB0ICs9IGR1cmF0aW9uLkRBWSkge1xyXG4gICAgICAgICAgICBpZiAoIWlzRW5hYmxlZChuZXcgRGF0ZSh0KSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5zRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIF9sb29wXzEgPSBmdW5jdGlvbiAodGltZXN0YW1wLCBpKSB7XHJcbiAgICAgICAgICAgIHZhciBvdXRPZlJhbmdlID0gdGltZXN0YW1wIDwgc2VsZi5taW5SYW5nZURhdGUuZ2V0VGltZSgpIHx8XHJcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXAgPiBzZWxmLm1heFJhbmdlRGF0ZS5nZXRUaW1lKCksIGRheUVsZW0gPSBzZWxmLmRheXMuY2hpbGROb2Rlc1tpXTtcclxuICAgICAgICAgICAgaWYgKG91dE9mUmFuZ2UpIHtcclxuICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcIm5vdEFsbG93ZWRcIik7XHJcbiAgICAgICAgICAgICAgICBbXCJpblJhbmdlXCIsIFwic3RhcnRSYW5nZVwiLCBcImVuZFJhbmdlXCJdLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5yZW1vdmUoYyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoY29udGFpbnNEaXNhYmxlZCAmJiAhb3V0T2ZSYW5nZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiBcImNvbnRpbnVlXCI7XHJcbiAgICAgICAgICAgIFtcInN0YXJ0UmFuZ2VcIiwgXCJpblJhbmdlXCIsIFwiZW5kUmFuZ2VcIiwgXCJub3RBbGxvd2VkXCJdLmZvckVhY2goZnVuY3Rpb24gKGMpIHtcclxuICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LnJlbW92ZShjKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBtaW5SYW5nZURhdGUgPSBNYXRoLm1heChzZWxmLm1pblJhbmdlRGF0ZS5nZXRUaW1lKCksIHJhbmdlU3RhcnREYXRlKSwgbWF4UmFuZ2VEYXRlID0gTWF0aC5taW4oc2VsZi5tYXhSYW5nZURhdGUuZ2V0VGltZSgpLCByYW5nZUVuZERhdGUpO1xyXG4gICAgICAgICAgICBlbGVtLmNsYXNzTGlzdC5hZGQoaG92ZXJEYXRlIDwgc2VsZi5zZWxlY3RlZERhdGVzWzBdID8gXCJzdGFydFJhbmdlXCIgOiBcImVuZFJhbmdlXCIpO1xyXG4gICAgICAgICAgICBpZiAoaW5pdGlhbERhdGUgPCBob3ZlckRhdGUgJiYgdGltZXN0YW1wID09PSBpbml0aWFsRGF0ZS5nZXRUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICBkYXlFbGVtLmNsYXNzTGlzdC5hZGQoXCJzdGFydFJhbmdlXCIpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChpbml0aWFsRGF0ZSA+IGhvdmVyRGF0ZSAmJiB0aW1lc3RhbXAgPT09IGluaXRpYWxEYXRlLmdldFRpbWUoKSlcclxuICAgICAgICAgICAgICAgIGRheUVsZW0uY2xhc3NMaXN0LmFkZChcImVuZFJhbmdlXCIpO1xyXG4gICAgICAgICAgICBpZiAodGltZXN0YW1wID49IG1pblJhbmdlRGF0ZSAmJiB0aW1lc3RhbXAgPD0gbWF4UmFuZ2VEYXRlKVxyXG4gICAgICAgICAgICAgICAgZGF5RWxlbS5jbGFzc0xpc3QuYWRkKFwiaW5SYW5nZVwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIHRpbWVzdGFtcCA9IHNlbGYuZGF5cy5jaGlsZE5vZGVzWzBdLmRhdGVPYmouZ2V0VGltZSgpLCBpID0gMDsgaSA8IDQyOyBpKyssIHRpbWVzdGFtcCArPSBkdXJhdGlvbi5EQVkpIHtcclxuICAgICAgICAgICAgX2xvb3BfMSh0aW1lc3RhbXAsIGkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplKCkge1xyXG4gICAgICAgIGlmIChzZWxmLmlzT3BlbiAmJiAhc2VsZi5jb25maWcuc3RhdGljICYmICFzZWxmLmNvbmZpZy5pbmxpbmUpXHJcbiAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIoKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9wZW4oZSwgcG9zaXRpb25FbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uRWxlbWVudCA9PT0gdm9pZCAwKSB7IHBvc2l0aW9uRWxlbWVudCA9IHNlbGYuX2lucHV0OyB9XHJcbiAgICAgICAgaWYgKHNlbGYuaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgaWYgKGUpIHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGUudGFyZ2V0ICYmIGUudGFyZ2V0LmJsdXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHNlbGYubW9iaWxlSW5wdXQgIT09IHVuZGVmaW5lZCAmJiBzZWxmLm1vYmlsZUlucHV0LmNsaWNrKCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbk9wZW5cIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuIHx8IHNlbGYuX2lucHV0LmRpc2FibGVkIHx8IHNlbGYuY29uZmlnLmlubGluZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHNlbGYuaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJvcGVuXCIpO1xyXG4gICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIocG9zaXRpb25FbGVtZW50KTtcclxuICAgICAgICBzZWxmLl9pbnB1dC5jbGFzc0xpc3QuYWRkKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uT3BlblwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG1pbk1heERhdGVTZXR0ZXIodHlwZSkge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoZGF0ZSkge1xyXG4gICAgICAgICAgICB2YXIgZGF0ZU9iaiA9IChzZWxmLmNvbmZpZ1tcIl9cIiArIHR5cGUgKyBcIkRhdGVcIl0gPSBzZWxmLnBhcnNlRGF0ZShkYXRlKSk7XHJcbiAgICAgICAgICAgIHZhciBpbnZlcnNlRGF0ZU9iaiA9IHNlbGYuY29uZmlnW1wiX1wiICsgKHR5cGUgPT09IFwibWluXCIgPyBcIm1heFwiIDogXCJtaW5cIikgKyBcIkRhdGVcIl07XHJcbiAgICAgICAgICAgIGlmIChkYXRlT2JqICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHNlbGZbdHlwZSA9PT0gXCJtaW5cIiA/IFwibWluRGF0ZUhhc1RpbWVcIiA6IFwibWF4RGF0ZUhhc1RpbWVcIl0gPVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0SG91cnMoKSA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iai5nZXRNaW51dGVzKCkgPiAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGVPYmouZ2V0U2Vjb25kcygpID4gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBzZWxmLnNlbGVjdGVkRGF0ZXMuZmlsdGVyKGZ1bmN0aW9uIChkKSB7IHJldHVybiBpc0VuYWJsZWQoZCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoICYmIHR5cGUgPT09IFwibWluXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0SG91cnNGcm9tRGF0ZShkYXRlT2JqKTtcclxuICAgICAgICAgICAgICAgIHVwZGF0ZVZhbHVlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHNlbGYuZGF5c0NvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgcmVkcmF3KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0ZU9iaiAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50W3R5cGVdID0gZGF0ZU9iai5nZXRGdWxsWWVhcigpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jdXJyZW50WWVhckVsZW1lbnQuZGlzYWJsZWQgPVxyXG4gICAgICAgICAgICAgICAgICAgICEhaW52ZXJzZURhdGVPYmogJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZU9iaiAhPT0gdW5kZWZpbmVkICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2VEYXRlT2JqLmdldEZ1bGxZZWFyKCkgPT09IGRhdGVPYmouZ2V0RnVsbFllYXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZUNvbmZpZygpIHtcclxuICAgICAgICB2YXIgYm9vbE9wdHMgPSBbXHJcbiAgICAgICAgICAgIFwid3JhcFwiLFxyXG4gICAgICAgICAgICBcIndlZWtOdW1iZXJzXCIsXHJcbiAgICAgICAgICAgIFwiYWxsb3dJbnB1dFwiLFxyXG4gICAgICAgICAgICBcImNsaWNrT3BlbnNcIixcclxuICAgICAgICAgICAgXCJ0aW1lXzI0aHJcIixcclxuICAgICAgICAgICAgXCJlbmFibGVUaW1lXCIsXHJcbiAgICAgICAgICAgIFwibm9DYWxlbmRhclwiLFxyXG4gICAgICAgICAgICBcImFsdElucHV0XCIsXHJcbiAgICAgICAgICAgIFwic2hvcnRoYW5kQ3VycmVudE1vbnRoXCIsXHJcbiAgICAgICAgICAgIFwiaW5saW5lXCIsXHJcbiAgICAgICAgICAgIFwic3RhdGljXCIsXHJcbiAgICAgICAgICAgIFwiZW5hYmxlU2Vjb25kc1wiLFxyXG4gICAgICAgICAgICBcImRpc2FibGVNb2JpbGVcIixcclxuICAgICAgICBdO1xyXG4gICAgICAgIHZhciBob29rcyA9IFtcclxuICAgICAgICAgICAgXCJvbkNoYW5nZVwiLFxyXG4gICAgICAgICAgICBcIm9uQ2xvc2VcIixcclxuICAgICAgICAgICAgXCJvbkRheUNyZWF0ZVwiLFxyXG4gICAgICAgICAgICBcIm9uRGVzdHJveVwiLFxyXG4gICAgICAgICAgICBcIm9uS2V5RG93blwiLFxyXG4gICAgICAgICAgICBcIm9uTW9udGhDaGFuZ2VcIixcclxuICAgICAgICAgICAgXCJvbk9wZW5cIixcclxuICAgICAgICAgICAgXCJvblBhcnNlQ29uZmlnXCIsXHJcbiAgICAgICAgICAgIFwib25SZWFkeVwiLFxyXG4gICAgICAgICAgICBcIm9uVmFsdWVVcGRhdGVcIixcclxuICAgICAgICAgICAgXCJvblllYXJDaGFuZ2VcIixcclxuICAgICAgICBdO1xyXG4gICAgICAgIHNlbGYuY29uZmlnID0gX19hc3NpZ24oe30sIGZsYXRwaWNrci5kZWZhdWx0Q29uZmlnKTtcclxuICAgICAgICB2YXIgdXNlckNvbmZpZyA9IF9fYXNzaWduKHt9LCBpbnN0YW5jZUNvbmZpZywgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShlbGVtZW50LmRhdGFzZXQgfHwge30pKSk7XHJcbiAgICAgICAgdmFyIGZvcm1hdHMkJDEgPSB7fTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwiZW5hYmxlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fZW5hYmxlIHx8IFtdOyB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChkYXRlcykge1xyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcuX2VuYWJsZSA9IHBhcnNlRGF0ZVJ1bGVzKGRhdGVzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZi5jb25maWcsIFwiZGlzYWJsZVwiLCB7XHJcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5jb25maWcuX2Rpc2FibGUgfHwgW107IH0sXHJcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKGRhdGVzKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5fZGlzYWJsZSA9IHBhcnNlRGF0ZVJ1bGVzKGRhdGVzKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXVzZXJDb25maWcuZGF0ZUZvcm1hdCAmJiB1c2VyQ29uZmlnLmVuYWJsZVRpbWUpIHtcclxuICAgICAgICAgICAgZm9ybWF0cyQkMS5kYXRlRm9ybWF0ID0gdXNlckNvbmZpZy5ub0NhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICA/IFwiSDppXCIgKyAodXNlckNvbmZpZy5lbmFibGVTZWNvbmRzID8gXCI6U1wiIDogXCJcIilcclxuICAgICAgICAgICAgICAgIDogZmxhdHBpY2tyLmRlZmF1bHRDb25maWcuZGF0ZUZvcm1hdCArXHJcbiAgICAgICAgICAgICAgICAgICAgXCIgSDppXCIgK1xyXG4gICAgICAgICAgICAgICAgICAgICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHVzZXJDb25maWcuYWx0SW5wdXQgJiYgdXNlckNvbmZpZy5lbmFibGVUaW1lICYmICF1c2VyQ29uZmlnLmFsdEZvcm1hdCkge1xyXG4gICAgICAgICAgICBmb3JtYXRzJCQxLmFsdEZvcm1hdCA9IHVzZXJDb25maWcubm9DYWxlbmRhclxyXG4gICAgICAgICAgICAgICAgPyBcImg6aVwiICsgKHVzZXJDb25maWcuZW5hYmxlU2Vjb25kcyA/IFwiOlMgS1wiIDogXCIgS1wiKVxyXG4gICAgICAgICAgICAgICAgOiBmbGF0cGlja3IuZGVmYXVsdENvbmZpZy5hbHRGb3JtYXQgK1xyXG4gICAgICAgICAgICAgICAgICAgIChcIiBoOmlcIiArICh1c2VyQ29uZmlnLmVuYWJsZVNlY29uZHMgPyBcIjpTXCIgOiBcIlwiKSArIFwiIEtcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtaW5EYXRlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fbWluRGF0ZTsgfSxcclxuICAgICAgICAgICAgc2V0OiBtaW5NYXhEYXRlU2V0dGVyKFwibWluXCIpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzZWxmLmNvbmZpZywgXCJtYXhEYXRlXCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLmNvbmZpZy5fbWF4RGF0ZTsgfSxcclxuICAgICAgICAgICAgc2V0OiBtaW5NYXhEYXRlU2V0dGVyKFwibWF4XCIpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5jb25maWcsIGZvcm1hdHMkJDEsIHVzZXJDb25maWcpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9vbE9wdHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHNlbGYuY29uZmlnW2Jvb2xPcHRzW2ldXSA9XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPT09IHRydWUgfHxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tib29sT3B0c1tpXV0gPT09IFwidHJ1ZVwiO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSBob29rcy5sZW5ndGg7IGktLTspIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuY29uZmlnW2hvb2tzW2ldXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZ1tob29rc1tpXV0gPSBhcnJheWlmeShzZWxmLmNvbmZpZ1tob29rc1tpXV0gfHwgW10pLm1hcChiaW5kVG9JbnN0YW5jZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWxmLmNvbmZpZy5wbHVnaW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBwbHVnaW5Db25mID0gc2VsZi5jb25maWcucGx1Z2luc1tpXShzZWxmKSB8fCB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIHBsdWdpbkNvbmYpIHtcclxuICAgICAgICAgICAgICAgIGlmICh+aG9va3MuaW5kZXhPZihrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWdba2V5XSA9IGFycmF5aWZ5KHBsdWdpbkNvbmZba2V5XSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChiaW5kVG9JbnN0YW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNvbmNhdChzZWxmLmNvbmZpZ1trZXldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB1c2VyQ29uZmlnW2tleV0gPT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWdba2V5XSA9IHBsdWdpbkNvbmZba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZWxmLmlzTW9iaWxlID1cclxuICAgICAgICAgICAgIXNlbGYuY29uZmlnLmRpc2FibGVNb2JpbGUgJiZcclxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy5pbmxpbmUgJiZcclxuICAgICAgICAgICAgICAgIHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiZcclxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy5kaXNhYmxlLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmVuYWJsZS5sZW5ndGggJiZcclxuICAgICAgICAgICAgICAgICFzZWxmLmNvbmZpZy53ZWVrTnVtYmVycyAmJlxyXG4gICAgICAgICAgICAgICAgL0FuZHJvaWR8d2ViT1N8aVBob25lfGlQYWR8aVBvZHxCbGFja0JlcnJ5fElFTW9iaWxlfE9wZXJhIE1pbmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uUGFyc2VDb25maWdcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXR1cExvY2FsZSgpIHtcclxuICAgICAgICBpZiAodHlwZW9mIHNlbGYuY29uZmlnLmxvY2FsZSAhPT0gXCJvYmplY3RcIiAmJlxyXG4gICAgICAgICAgICB0eXBlb2YgZmxhdHBpY2tyLmwxMG5zW3NlbGYuY29uZmlnLmxvY2FsZV0gPT09IFwidW5kZWZpbmVkXCIpXHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcImZsYXRwaWNrcjogaW52YWxpZCBsb2NhbGUgXCIgKyBzZWxmLmNvbmZpZy5sb2NhbGUpO1xyXG4gICAgICAgIHNlbGYubDEwbiA9IF9fYXNzaWduKHt9LCBmbGF0cGlja3IubDEwbnMuZGVmYXVsdCwgdHlwZW9mIHNlbGYuY29uZmlnLmxvY2FsZSA9PT0gXCJvYmplY3RcIlxyXG4gICAgICAgICAgICA/IHNlbGYuY29uZmlnLmxvY2FsZVxyXG4gICAgICAgICAgICA6IHNlbGYuY29uZmlnLmxvY2FsZSAhPT0gXCJkZWZhdWx0XCJcclxuICAgICAgICAgICAgICAgID8gZmxhdHBpY2tyLmwxMG5zW3NlbGYuY29uZmlnLmxvY2FsZV1cclxuICAgICAgICAgICAgICAgIDogdW5kZWZpbmVkKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBvc2l0aW9uQ2FsZW5kYXIocG9zaXRpb25FbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uRWxlbWVudCA9PT0gdm9pZCAwKSB7IHBvc2l0aW9uRWxlbWVudCA9IHNlbGYuX3Bvc2l0aW9uRWxlbWVudDsgfVxyXG4gICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyID09PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB2YXIgY2FsZW5kYXJIZWlnaHQgPSBzZWxmLmNhbGVuZGFyQ29udGFpbmVyLm9mZnNldEhlaWdodCwgY2FsZW5kYXJXaWR0aCA9IHNlbGYuY2FsZW5kYXJDb250YWluZXIub2Zmc2V0V2lkdGgsIGNvbmZpZ1BvcyA9IHNlbGYuY29uZmlnLnBvc2l0aW9uLCBpbnB1dEJvdW5kcyA9IHBvc2l0aW9uRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSwgZGlzdGFuY2VGcm9tQm90dG9tID0gd2luZG93LmlubmVySGVpZ2h0IC0gaW5wdXRCb3VuZHMuYm90dG9tLCBzaG93T25Ub3AgPSBjb25maWdQb3MgPT09IFwiYWJvdmVcIiB8fFxyXG4gICAgICAgICAgICAoY29uZmlnUG9zICE9PSBcImJlbG93XCIgJiZcclxuICAgICAgICAgICAgICAgIGRpc3RhbmNlRnJvbUJvdHRvbSA8IGNhbGVuZGFySGVpZ2h0ICYmXHJcbiAgICAgICAgICAgICAgICBpbnB1dEJvdW5kcy50b3AgPiBjYWxlbmRhckhlaWdodCk7XHJcbiAgICAgICAgdmFyIHRvcCA9IHdpbmRvdy5wYWdlWU9mZnNldCArXHJcbiAgICAgICAgICAgIGlucHV0Qm91bmRzLnRvcCArXHJcbiAgICAgICAgICAgICghc2hvd09uVG9wID8gcG9zaXRpb25FbGVtZW50Lm9mZnNldEhlaWdodCArIDIgOiAtY2FsZW5kYXJIZWlnaHQgLSAyKTtcclxuICAgICAgICB0b2dnbGVDbGFzcyhzZWxmLmNhbGVuZGFyQ29udGFpbmVyLCBcImFycm93VG9wXCIsICFzaG93T25Ub3ApO1xyXG4gICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwiYXJyb3dCb3R0b21cIiwgc2hvd09uVG9wKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuaW5saW5lKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIGxlZnQgPSB3aW5kb3cucGFnZVhPZmZzZXQgKyBpbnB1dEJvdW5kcy5sZWZ0O1xyXG4gICAgICAgIHZhciByaWdodCA9IHdpbmRvdy5kb2N1bWVudC5ib2R5Lm9mZnNldFdpZHRoIC0gaW5wdXRCb3VuZHMucmlnaHQ7XHJcbiAgICAgICAgdmFyIHJpZ2h0TW9zdCA9IGxlZnQgKyBjYWxlbmRhcldpZHRoID4gd2luZG93LmRvY3VtZW50LmJvZHkub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgdG9nZ2xlQ2xhc3Moc2VsZi5jYWxlbmRhckNvbnRhaW5lciwgXCJyaWdodE1vc3RcIiwgcmlnaHRNb3N0KTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuc3RhdGljKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS50b3AgPSB0b3AgKyBcInB4XCI7XHJcbiAgICAgICAgaWYgKCFyaWdodE1vc3QpIHtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gbGVmdCArIFwicHhcIjtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5yaWdodCA9IFwiYXV0b1wiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgc2VsZi5jYWxlbmRhckNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gXCJhdXRvXCI7XHJcbiAgICAgICAgICAgIHNlbGYuY2FsZW5kYXJDb250YWluZXIuc3R5bGUucmlnaHQgPSByaWdodCArIFwicHhcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiByZWRyYXcoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgfHwgc2VsZi5pc01vYmlsZSlcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIGJ1aWxkV2Vla2RheXMoKTtcclxuICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcbiAgICAgICAgYnVpbGREYXlzKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZWxlY3REYXRlKGUpIHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICB2YXIgaXNTZWxlY3RhYmxlID0gZnVuY3Rpb24gKGRheSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF5LmNsYXNzTGlzdCAmJlxyXG4gICAgICAgICAgICAgICAgZGF5LmNsYXNzTGlzdC5jb250YWlucyhcImZsYXRwaWNrci1kYXlcIikgJiZcclxuICAgICAgICAgICAgICAgICFkYXkuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZGlzYWJsZWRcIikgJiZcclxuICAgICAgICAgICAgICAgICFkYXkuY2xhc3NMaXN0LmNvbnRhaW5zKFwibm90QWxsb3dlZFwiKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHZhciB0ID0gZmluZFBhcmVudChlLnRhcmdldCwgaXNTZWxlY3RhYmxlKTtcclxuICAgICAgICBpZiAodCA9PT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgdmFyIHRhcmdldCA9IHQ7XHJcbiAgICAgICAgdmFyIHNlbGVjdGVkRGF0ZSA9IChzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiA9IG5ldyBEYXRlKHRhcmdldC5kYXRlT2JqLmdldFRpbWUoKSkpO1xyXG4gICAgICAgIHZhciBzaG91bGRDaGFuZ2VNb250aCA9IHNlbGVjdGVkRGF0ZS5nZXRNb250aCgpICE9PSBzZWxmLmN1cnJlbnRNb250aCAmJlxyXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCI7XHJcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVFbGVtID0gdGFyZ2V0O1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInNpbmdsZVwiKVxyXG4gICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMgPSBbc2VsZWN0ZWREYXRlXTtcclxuICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcIm11bHRpcGxlXCIpIHtcclxuICAgICAgICAgICAgdmFyIHNlbGVjdGVkSW5kZXggPSBpc0RhdGVTZWxlY3RlZChzZWxlY3RlZERhdGUpO1xyXG4gICAgICAgICAgICBpZiAoc2VsZWN0ZWRJbmRleClcclxuICAgICAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5zcGxpY2UocGFyc2VJbnQoc2VsZWN0ZWRJbmRleCksIDEpO1xyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICBzZWxmLnNlbGVjdGVkRGF0ZXMucHVzaChzZWxlY3RlZERhdGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDIpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcy5wdXNoKHNlbGVjdGVkRGF0ZSk7XHJcbiAgICAgICAgICAgIGlmIChjb21wYXJlRGF0ZXMoc2VsZWN0ZWREYXRlLCBzZWxmLnNlbGVjdGVkRGF0ZXNbMF0sIHRydWUpICE9PSAwKVxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCk7IH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRIb3Vyc0Zyb21JbnB1dHMoKTtcclxuICAgICAgICBpZiAoc2hvdWxkQ2hhbmdlTW9udGgpIHtcclxuICAgICAgICAgICAgdmFyIGlzTmV3WWVhciA9IHNlbGYuY3VycmVudFllYXIgIT09IHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyID0gc2VsZWN0ZWREYXRlLmdldEZ1bGxZZWFyKCk7XHJcbiAgICAgICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gc2VsZWN0ZWREYXRlLmdldE1vbnRoKCk7XHJcbiAgICAgICAgICAgIGlmIChpc05ld1llYXIpXHJcbiAgICAgICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvblllYXJDaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uTW9udGhDaGFuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJ1aWxkRGF5cygpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5taW5EYXRlICYmXHJcbiAgICAgICAgICAgIHNlbGYubWluRGF0ZUhhc1RpbWUgJiZcclxuICAgICAgICAgICAgc2VsZi5jb25maWcuZW5hYmxlVGltZSAmJlxyXG4gICAgICAgICAgICBjb21wYXJlRGF0ZXMoc2VsZWN0ZWREYXRlLCBzZWxmLmNvbmZpZy5taW5EYXRlKSA9PT0gMClcclxuICAgICAgICAgICAgc2V0SG91cnNGcm9tRGF0ZShzZWxmLmNvbmZpZy5taW5EYXRlKTtcclxuICAgICAgICB1cGRhdGVWYWx1ZSgpO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5lbmFibGVUaW1lKVxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHsgcmV0dXJuIChzZWxmLnNob3dUaW1lSW5wdXQgPSB0cnVlKTsgfSwgNTApO1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZy5tb2RlID09PSBcInJhbmdlXCIpIHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIG9uTW91c2VPdmVyKHRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9oaWRlUHJldk1vbnRoQXJyb3cgPVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoc2VsZi5taW5SYW5nZURhdGUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VsZi5taW5SYW5nZURhdGUgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuZGF5cy5jaGlsZE5vZGVzWzBdLmRhdGVPYmopO1xyXG4gICAgICAgICAgICAgICAgc2VsZi5faGlkZU5leHRNb250aEFycm93ID1cclxuICAgICAgICAgICAgICAgICAgICBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKHNlbGYubWF4UmFuZ2VEYXRlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYubWF4UmFuZ2VEYXRlIDxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgRGF0ZShzZWxmLmN1cnJlbnRZZWFyLCBzZWxmLmN1cnJlbnRNb250aCArIDEsIDEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICB1cGRhdGVOYXZpZ2F0aW9uQ3VycmVudE1vbnRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2hhbmdlXCIpO1xyXG4gICAgICAgIGlmICghc2hvdWxkQ2hhbmdlTW9udGgpXHJcbiAgICAgICAgICAgIGZvY3VzT25EYXkodGFyZ2V0LiRpLCAwKTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIGFmdGVyRGF5QW5pbShmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLnNlbGVjdGVkRGF0ZUVsZW0gJiYgc2VsZi5zZWxlY3RlZERhdGVFbGVtLmZvY3VzKCk7IH0pO1xyXG4gICAgICAgIGlmIChzZWxmLmhvdXJFbGVtZW50ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VsZi5ob3VyRWxlbWVudCAhPT0gdW5kZWZpbmVkICYmIHNlbGYuaG91ckVsZW1lbnQuc2VsZWN0KCk7IH0sIDQ1MSk7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLmNsb3NlT25TZWxlY3QpIHtcclxuICAgICAgICAgICAgdmFyIHNpbmdsZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwic2luZ2xlXCIgJiYgIXNlbGYuY29uZmlnLmVuYWJsZVRpbWU7XHJcbiAgICAgICAgICAgIHZhciByYW5nZSA9IHNlbGYuY29uZmlnLm1vZGUgPT09IFwicmFuZ2VcIiAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA9PT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnLmVuYWJsZVRpbWU7XHJcbiAgICAgICAgICAgIGlmIChzaW5nbGUgfHwgcmFuZ2UpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmNsb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0KG9wdGlvbiwgdmFsdWUpIHtcclxuICAgICAgICBpZiAob3B0aW9uICE9PSBudWxsICYmIHR5cGVvZiBvcHRpb24gPT09IFwib2JqZWN0XCIpXHJcbiAgICAgICAgICAgIE9iamVjdC5hc3NpZ24oc2VsZi5jb25maWcsIG9wdGlvbik7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICBzZWxmLmNvbmZpZ1tvcHRpb25dID0gdmFsdWU7XHJcbiAgICAgICAgc2VsZi5yZWRyYXcoKTtcclxuICAgICAgICBqdW1wVG9EYXRlKCk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXRTZWxlY3RlZERhdGUoaW5wdXREYXRlLCBmb3JtYXQpIHtcclxuICAgICAgICB2YXIgZGF0ZXMgPSBbXTtcclxuICAgICAgICBpZiAoaW5wdXREYXRlIGluc3RhbmNlb2YgQXJyYXkpXHJcbiAgICAgICAgICAgIGRhdGVzID0gaW5wdXREYXRlLm1hcChmdW5jdGlvbiAoZCkgeyByZXR1cm4gc2VsZi5wYXJzZURhdGUoZCwgZm9ybWF0KTsgfSk7XHJcbiAgICAgICAgZWxzZSBpZiAoaW5wdXREYXRlIGluc3RhbmNlb2YgRGF0ZSB8fCB0eXBlb2YgaW5wdXREYXRlID09PSBcIm51bWJlclwiKVxyXG4gICAgICAgICAgICBkYXRlcyA9IFtzZWxmLnBhcnNlRGF0ZShpbnB1dERhdGUsIGZvcm1hdCldO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBpbnB1dERhdGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChzZWxmLmNvbmZpZy5tb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic2luZ2xlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXMgPSBbc2VsZi5wYXJzZURhdGUoaW5wdXREYXRlLCBmb3JtYXQpXTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJtdWx0aXBsZVwiOlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGVzID0gaW5wdXREYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdChcIjsgXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGRhdGUpIHsgcmV0dXJuIHNlbGYucGFyc2VEYXRlKGRhdGUsIGZvcm1hdCk7IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInJhbmdlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0ZXMgPSBpbnB1dERhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KHNlbGYubDEwbi5yYW5nZVNlcGFyYXRvcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZGF0ZSkgeyByZXR1cm4gc2VsZi5wYXJzZURhdGUoZGF0ZSwgZm9ybWF0KTsgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IGRhdGVzLmZpbHRlcihmdW5jdGlvbiAoZCkgeyByZXR1cm4gZCBpbnN0YW5jZW9mIERhdGUgJiYgaXNFbmFibGVkKGQsIGZhbHNlKTsgfSk7XHJcbiAgICAgICAgc2VsZi5zZWxlY3RlZERhdGVzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHsgcmV0dXJuIGEuZ2V0VGltZSgpIC0gYi5nZXRUaW1lKCk7IH0pO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0RGF0ZShkYXRlLCB0cmlnZ2VyQ2hhbmdlLCBmb3JtYXQpIHtcclxuICAgICAgICBpZiAodHJpZ2dlckNoYW5nZSA9PT0gdm9pZCAwKSB7IHRyaWdnZXJDaGFuZ2UgPSBmYWxzZTsgfVxyXG4gICAgICAgIGlmIChmb3JtYXQgPT09IHZvaWQgMCkgeyBmb3JtYXQgPSB1bmRlZmluZWQ7IH1cclxuICAgICAgICBpZiAoZGF0ZSAhPT0gMCAmJiAhZGF0ZSlcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2xlYXIodHJpZ2dlckNoYW5nZSk7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWREYXRlKGRhdGUsIGZvcm1hdCk7XHJcbiAgICAgICAgc2VsZi5zaG93VGltZUlucHV0ID0gc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBzZWxmLnNlbGVjdGVkRGF0ZXNbMF07XHJcbiAgICAgICAgc2VsZi5yZWRyYXcoKTtcclxuICAgICAgICBqdW1wVG9EYXRlKCk7XHJcbiAgICAgICAgc2V0SG91cnNGcm9tRGF0ZSgpO1xyXG4gICAgICAgIHVwZGF0ZVZhbHVlKHRyaWdnZXJDaGFuZ2UpO1xyXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlKVxyXG4gICAgICAgICAgICB0cmlnZ2VyRXZlbnQoXCJvbkNoYW5nZVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHBhcnNlRGF0ZVJ1bGVzKGFycikge1xyXG4gICAgICAgIHJldHVybiBhcnJcclxuICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAocnVsZSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJ1bGUgPT09IFwic3RyaW5nXCIgfHxcclxuICAgICAgICAgICAgICAgIHR5cGVvZiBydWxlID09PSBcIm51bWJlclwiIHx8XHJcbiAgICAgICAgICAgICAgICBydWxlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNlbGYucGFyc2VEYXRlKHJ1bGUsIHVuZGVmaW5lZCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAocnVsZSAmJlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIHJ1bGUgPT09IFwib2JqZWN0XCIgJiZcclxuICAgICAgICAgICAgICAgIHJ1bGUuZnJvbSAmJlxyXG4gICAgICAgICAgICAgICAgcnVsZS50bylcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogc2VsZi5wYXJzZURhdGUocnVsZS5mcm9tLCB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvOiBzZWxmLnBhcnNlRGF0ZShydWxlLnRvLCB1bmRlZmluZWQpLFxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgcmV0dXJuIHJ1bGU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbiAoeCkgeyByZXR1cm4geDsgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXR1cERhdGVzKCkge1xyXG4gICAgICAgIHNlbGYuc2VsZWN0ZWREYXRlcyA9IFtdO1xyXG4gICAgICAgIHNlbGYubm93ID0gbmV3IERhdGUoKTtcclxuICAgICAgICB2YXIgcHJlbG9hZGVkRGF0ZSA9IHNlbGYuY29uZmlnLmRlZmF1bHREYXRlIHx8IHNlbGYuaW5wdXQudmFsdWU7XHJcbiAgICAgICAgaWYgKHByZWxvYWRlZERhdGUpXHJcbiAgICAgICAgICAgIHNldFNlbGVjdGVkRGF0ZShwcmVsb2FkZWREYXRlLCBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTtcclxuICAgICAgICB2YXIgaW5pdGlhbERhdGUgPSBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgID8gc2VsZi5zZWxlY3RlZERhdGVzWzBdXHJcbiAgICAgICAgICAgIDogc2VsZi5jb25maWcubWluRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWluRGF0ZS5nZXRUaW1lKCkgPiBzZWxmLm5vdy5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgID8gc2VsZi5jb25maWcubWluRGF0ZVxyXG4gICAgICAgICAgICAgICAgOiBzZWxmLmNvbmZpZy5tYXhEYXRlICYmXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRUaW1lKCkgPCBzZWxmLm5vdy5nZXRUaW1lKClcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY29uZmlnLm1heERhdGVcclxuICAgICAgICAgICAgICAgICAgICA6IHNlbGYubm93O1xyXG4gICAgICAgIHNlbGYuY3VycmVudFllYXIgPSBpbml0aWFsRGF0ZS5nZXRGdWxsWWVhcigpO1xyXG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoID0gaW5pdGlhbERhdGUuZ2V0TW9udGgoKTtcclxuICAgICAgICBpZiAoc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aClcclxuICAgICAgICAgICAgc2VsZi5sYXRlc3RTZWxlY3RlZERhdGVPYmogPSBzZWxmLnNlbGVjdGVkRGF0ZXNbMF07XHJcbiAgICAgICAgc2VsZi5taW5EYXRlSGFzVGltZSA9XHJcbiAgICAgICAgICAgICEhc2VsZi5jb25maWcubWluRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICAgKHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0SG91cnMoKSA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldE1pbnV0ZXMoKSA+IDAgfHxcclxuICAgICAgICAgICAgICAgICAgICBzZWxmLmNvbmZpZy5taW5EYXRlLmdldFNlY29uZHMoKSA+IDApO1xyXG4gICAgICAgIHNlbGYubWF4RGF0ZUhhc1RpbWUgPVxyXG4gICAgICAgICAgICAhIXNlbGYuY29uZmlnLm1heERhdGUgJiZcclxuICAgICAgICAgICAgICAgIChzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEhvdXJzKCkgPiAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRNaW51dGVzKCkgPiAwIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5jb25maWcubWF4RGF0ZS5nZXRTZWNvbmRzKCkgPiAwKTtcclxuICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoc2VsZiwgXCJzaG93VGltZUlucHV0XCIsIHtcclxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZWxmLl9zaG93VGltZUlucHV0OyB9LFxyXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uIChib29sKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxmLl9zaG93VGltZUlucHV0ID0gYm9vbDtcclxuICAgICAgICAgICAgICAgIGlmIChzZWxmLmNhbGVuZGFyQ29udGFpbmVyKVxyXG4gICAgICAgICAgICAgICAgICAgIHRvZ2dsZUNsYXNzKHNlbGYuY2FsZW5kYXJDb250YWluZXIsIFwic2hvd1RpbWVJbnB1dFwiLCBib29sKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uQ2FsZW5kYXIoKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZU9iaiwgZnJtdCkge1xyXG4gICAgICAgIGlmIChzZWxmLmNvbmZpZyAhPT0gdW5kZWZpbmVkICYmIHNlbGYuY29uZmlnLmZvcm1hdERhdGUgIT09IHVuZGVmaW5lZClcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY29uZmlnLmZvcm1hdERhdGUoZGF0ZU9iaiwgZnJtdCk7XHJcbiAgICAgICAgcmV0dXJuIGZybXRcclxuICAgICAgICAgICAgLnNwbGl0KFwiXCIpXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGMsIGksIGFycikge1xyXG4gICAgICAgICAgICByZXR1cm4gZm9ybWF0c1tjXSAmJiBhcnJbaSAtIDFdICE9PSBcIlxcXFxcIlxyXG4gICAgICAgICAgICAgICAgPyBmb3JtYXRzW2NdKGRhdGVPYmosIHNlbGYubDEwbiwgc2VsZi5jb25maWcpXHJcbiAgICAgICAgICAgICAgICA6IGMgIT09IFwiXFxcXFwiID8gYyA6IFwiXCI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAgICAgLmpvaW4oXCJcIik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBwYXJzZURhdGUoZGF0ZSwgZ2l2ZW5Gb3JtYXQsIHRpbWVsZXNzKSB7XHJcbiAgICAgICAgaWYgKGRhdGUgIT09IDAgJiYgIWRhdGUpXHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgdmFyIHBhcnNlZERhdGU7XHJcbiAgICAgICAgdmFyIGRhdGVfb3JpZyA9IGRhdGU7XHJcbiAgICAgICAgaWYgKGRhdGUgaW5zdGFuY2VvZiBEYXRlKVxyXG4gICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpO1xyXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBkYXRlICE9PSBcInN0cmluZ1wiICYmXHJcbiAgICAgICAgICAgIGRhdGUudG9GaXhlZCAhPT0gdW5kZWZpbmVkKVxyXG4gICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoZGF0ZSk7XHJcbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIGRhdGUgPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgdmFyIGZvcm1hdCA9IGdpdmVuRm9ybWF0IHx8IChzZWxmLmNvbmZpZyB8fCBmbGF0cGlja3IuZGVmYXVsdENvbmZpZykuZGF0ZUZvcm1hdDtcclxuICAgICAgICAgICAgdmFyIGRhdGVzdHIgPSBTdHJpbmcoZGF0ZSkudHJpbSgpO1xyXG4gICAgICAgICAgICBpZiAoZGF0ZXN0ciA9PT0gXCJ0b2RheVwiKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgICAgICAgICAgIHRpbWVsZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICgvWiQvLnRlc3QoZGF0ZXN0cikgfHxcclxuICAgICAgICAgICAgICAgIC9HTVQkLy50ZXN0KGRhdGVzdHIpKVxyXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG5ldyBEYXRlKGRhdGUpO1xyXG4gICAgICAgICAgICBlbHNlIGlmIChzZWxmLmNvbmZpZyAmJiBzZWxmLmNvbmZpZy5wYXJzZURhdGUpXHJcbiAgICAgICAgICAgICAgICBwYXJzZWREYXRlID0gc2VsZi5jb25maWcucGFyc2VEYXRlKGRhdGUsIGZvcm1hdCk7XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9XHJcbiAgICAgICAgICAgICAgICAgICAgIXNlbGYuY29uZmlnIHx8ICFzZWxmLmNvbmZpZy5ub0NhbGVuZGFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gbmV3IERhdGUobmV3IERhdGUoKS5nZXRGdWxsWWVhcigpLCAwLCAxLCAwLCAwLCAwLCAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBEYXRlKG5ldyBEYXRlKCkuc2V0SG91cnMoMCwgMCwgMCwgMCkpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoZWQgPSB2b2lkIDAsIG9wcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIG1hdGNoSW5kZXggPSAwLCByZWdleFN0ciA9IFwiXCI7IGkgPCBmb3JtYXQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG9rZW4gPSBmb3JtYXRbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzQmFja1NsYXNoID0gdG9rZW4gPT09IFwiXFxcXFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlc2NhcGVkID0gZm9ybWF0W2kgLSAxXSA9PT0gXCJcXFxcXCIgfHwgaXNCYWNrU2xhc2g7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuUmVnZXhbdG9rZW5dICYmICFlc2NhcGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4U3RyICs9IHRva2VuUmVnZXhbdG9rZW5dO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBuZXcgUmVnRXhwKHJlZ2V4U3RyKS5leGVjKGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2ggJiYgKG1hdGNoZWQgPSB0cnVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb3BzW3Rva2VuICE9PSBcIllcIiA/IFwicHVzaFwiIDogXCJ1bnNoaWZ0XCJdKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbjogcmV2Rm9ybWF0W3Rva2VuXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWw6IG1hdGNoWysrbWF0Y2hJbmRleF0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICghaXNCYWNrU2xhc2gpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZ2V4U3RyICs9IFwiLlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIG9wcy5mb3JFYWNoKGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm4gPSBfYS5mbiwgdmFsID0gX2EudmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKHBhcnNlZERhdGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm4ocGFyc2VkRGF0ZSwgdmFsLCBzZWxmLmwxMG4pIHx8IHBhcnNlZERhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcGFyc2VkRGF0ZSA9IG1hdGNoZWQgPyBwYXJzZWREYXRlIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghKHBhcnNlZERhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJmbGF0cGlja3I6IGludmFsaWQgZGF0ZSBcIiArIGRhdGVfb3JpZyk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuaW5mbyhzZWxmLmVsZW1lbnQpO1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGltZWxlc3MgPT09IHRydWUpXHJcbiAgICAgICAgICAgIHBhcnNlZERhdGUuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZERhdGU7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBzZXR1cElucHV0cygpIHtcclxuICAgICAgICBzZWxmLmlucHV0ID0gc2VsZi5jb25maWcud3JhcFxyXG4gICAgICAgICAgICA/IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWlucHV0XVwiKVxyXG4gICAgICAgICAgICA6IGVsZW1lbnQ7XHJcbiAgICAgICAgaWYgKCFzZWxmLmlucHV0KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkVycm9yOiBpbnZhbGlkIGlucHV0IGVsZW1lbnQgc3BlY2lmaWVkXCIsIHNlbGYuaW5wdXQpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNlbGYuaW5wdXQuX3R5cGUgPSBzZWxmLmlucHV0LnR5cGU7XHJcbiAgICAgICAgc2VsZi5pbnB1dC50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgc2VsZi5pbnB1dC5jbGFzc0xpc3QuYWRkKFwiZmxhdHBpY2tyLWlucHV0XCIpO1xyXG4gICAgICAgIHNlbGYuX2lucHV0ID0gc2VsZi5pbnB1dDtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcuYWx0SW5wdXQpIHtcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dCA9IGNyZWF0ZUVsZW1lbnQoc2VsZi5pbnB1dC5ub2RlTmFtZSwgc2VsZi5pbnB1dC5jbGFzc05hbWUgKyBcIiBcIiArIHNlbGYuY29uZmlnLmFsdElucHV0Q2xhc3MpO1xyXG4gICAgICAgICAgICBzZWxmLl9pbnB1dCA9IHNlbGYuYWx0SW5wdXQ7XHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQucGxhY2Vob2xkZXIgPSBzZWxmLmlucHV0LnBsYWNlaG9sZGVyO1xyXG4gICAgICAgICAgICBzZWxmLmFsdElucHV0LmRpc2FibGVkID0gc2VsZi5pbnB1dC5kaXNhYmxlZDtcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC5yZXF1aXJlZCA9IHNlbGYuaW5wdXQucmVxdWlyZWQ7XHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudHlwZSA9IFwidGV4dFwiO1xyXG4gICAgICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBcImhpZGRlblwiO1xyXG4gICAgICAgICAgICBpZiAoIXNlbGYuY29uZmlnLnN0YXRpYyAmJiBzZWxmLmlucHV0LnBhcmVudE5vZGUpXHJcbiAgICAgICAgICAgICAgICBzZWxmLmlucHV0LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHNlbGYuYWx0SW5wdXQsIHNlbGYuaW5wdXQubmV4dFNpYmxpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXNlbGYuY29uZmlnLmFsbG93SW5wdXQpXHJcbiAgICAgICAgICAgIHNlbGYuX2lucHV0LnNldEF0dHJpYnV0ZShcInJlYWRvbmx5XCIsIFwicmVhZG9ubHlcIik7XHJcbiAgICAgICAgc2VsZi5fcG9zaXRpb25FbGVtZW50ID0gc2VsZi5jb25maWcucG9zaXRpb25FbGVtZW50IHx8IHNlbGYuX2lucHV0O1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gc2V0dXBNb2JpbGUoKSB7XHJcbiAgICAgICAgdmFyIGlucHV0VHlwZSA9IHNlbGYuY29uZmlnLmVuYWJsZVRpbWVcclxuICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5ub0NhbGVuZGFyID8gXCJ0aW1lXCIgOiBcImRhdGV0aW1lLWxvY2FsXCJcclxuICAgICAgICAgICAgOiBcImRhdGVcIjtcclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0ID0gY3JlYXRlRWxlbWVudChcImlucHV0XCIsIHNlbGYuaW5wdXQuY2xhc3NOYW1lICsgXCIgZmxhdHBpY2tyLW1vYmlsZVwiKTtcclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnN0ZXAgPSBzZWxmLmlucHV0LmdldEF0dHJpYnV0ZShcInN0ZXBcIikgfHwgXCJhbnlcIjtcclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnRhYkluZGV4ID0gMTtcclxuICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnR5cGUgPSBpbnB1dFR5cGU7XHJcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5kaXNhYmxlZCA9IHNlbGYuaW5wdXQuZGlzYWJsZWQ7XHJcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5wbGFjZWhvbGRlciA9IHNlbGYuaW5wdXQucGxhY2Vob2xkZXI7XHJcbiAgICAgICAgc2VsZi5tb2JpbGVGb3JtYXRTdHIgPVxyXG4gICAgICAgICAgICBpbnB1dFR5cGUgPT09IFwiZGF0ZXRpbWUtbG9jYWxcIlxyXG4gICAgICAgICAgICAgICAgPyBcIlktbS1kXFxcXFRIOmk6U1wiXHJcbiAgICAgICAgICAgICAgICA6IGlucHV0VHlwZSA9PT0gXCJkYXRlXCIgPyBcIlktbS1kXCIgOiBcIkg6aTpTXCI7XHJcbiAgICAgICAgaWYgKHNlbGYuc2VsZWN0ZWREYXRlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5kZWZhdWx0VmFsdWUgPSBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID0gc2VsZi5mb3JtYXREYXRlKHNlbGYuc2VsZWN0ZWREYXRlc1swXSwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWluRGF0ZSlcclxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5taW4gPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5jb25maWcubWluRGF0ZSwgXCJZLW0tZFwiKTtcclxuICAgICAgICBpZiAoc2VsZi5jb25maWcubWF4RGF0ZSlcclxuICAgICAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5tYXggPSBzZWxmLmZvcm1hdERhdGUoc2VsZi5jb25maWcubWF4RGF0ZSwgXCJZLW0tZFwiKTtcclxuICAgICAgICBzZWxmLmlucHV0LnR5cGUgPSBcImhpZGRlblwiO1xyXG4gICAgICAgIGlmIChzZWxmLmFsdElucHV0ICE9PSB1bmRlZmluZWQpXHJcbiAgICAgICAgICAgIHNlbGYuYWx0SW5wdXQudHlwZSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHNlbGYuaW5wdXQucGFyZW50Tm9kZSlcclxuICAgICAgICAgICAgICAgIHNlbGYuaW5wdXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoc2VsZi5tb2JpbGVJbnB1dCwgc2VsZi5pbnB1dC5uZXh0U2libGluZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChfYSkgeyB9XHJcbiAgICAgICAgc2VsZi5tb2JpbGVJbnB1dC5hZGRFdmVudExpc3RlbmVyKFwiY2hhbmdlXCIsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHNlbGYuc2V0RGF0ZShlLnRhcmdldC52YWx1ZSwgZmFsc2UsIHNlbGYubW9iaWxlRm9ybWF0U3RyKTtcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25DaGFuZ2VcIik7XHJcbiAgICAgICAgICAgIHRyaWdnZXJFdmVudChcIm9uQ2xvc2VcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0b2dnbGUoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuaXNPcGVuKVxyXG4gICAgICAgICAgICByZXR1cm4gc2VsZi5jbG9zZSgpO1xyXG4gICAgICAgIHNlbGYub3BlbigpO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gdHJpZ2dlckV2ZW50KGV2ZW50LCBkYXRhKSB7XHJcbiAgICAgICAgdmFyIGhvb2tzID0gc2VsZi5jb25maWdbZXZlbnRdO1xyXG4gICAgICAgIGlmIChob29rcyAhPT0gdW5kZWZpbmVkICYmIGhvb2tzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGhvb2tzW2ldICYmIGkgPCBob29rcy5sZW5ndGg7IGkrKylcclxuICAgICAgICAgICAgICAgIGhvb2tzW2ldKHNlbGYuc2VsZWN0ZWREYXRlcywgc2VsZi5pbnB1dC52YWx1ZSwgc2VsZiwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudCA9PT0gXCJvbkNoYW5nZVwiKSB7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudChcImNoYW5nZVwiKSk7XHJcbiAgICAgICAgICAgIHNlbGYuaW5wdXQuZGlzcGF0Y2hFdmVudChjcmVhdGVFdmVudChcImlucHV0XCIpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFdmVudChuYW1lKSB7XHJcbiAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkV2ZW50XCIpO1xyXG4gICAgICAgIGUuaW5pdEV2ZW50KG5hbWUsIHRydWUsIHRydWUpO1xyXG4gICAgICAgIHJldHVybiBlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNEYXRlU2VsZWN0ZWQoZGF0ZSkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChjb21wYXJlRGF0ZXMoc2VsZi5zZWxlY3RlZERhdGVzW2ldLCBkYXRlKSA9PT0gMClcclxuICAgICAgICAgICAgICAgIHJldHVybiBcIlwiICsgaTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gaXNEYXRlSW5SYW5nZShkYXRlKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm1vZGUgIT09IFwicmFuZ2VcIiB8fCBzZWxmLnNlbGVjdGVkRGF0ZXMubGVuZ3RoIDwgMilcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIHJldHVybiAoY29tcGFyZURhdGVzKGRhdGUsIHNlbGYuc2VsZWN0ZWREYXRlc1swXSkgPj0gMCAmJlxyXG4gICAgICAgICAgICBjb21wYXJlRGF0ZXMoZGF0ZSwgc2VsZi5zZWxlY3RlZERhdGVzWzFdKSA8PSAwKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIHVwZGF0ZU5hdmlnYXRpb25DdXJyZW50TW9udGgoKSB7XHJcbiAgICAgICAgaWYgKHNlbGYuY29uZmlnLm5vQ2FsZW5kYXIgfHwgc2VsZi5pc01vYmlsZSB8fCAhc2VsZi5tb250aE5hdilcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIHNlbGYuY3VycmVudE1vbnRoRWxlbWVudC50ZXh0Q29udGVudCA9XHJcbiAgICAgICAgICAgIG1vbnRoVG9TdHIoc2VsZi5jdXJyZW50TW9udGgsIHNlbGYuY29uZmlnLnNob3J0aGFuZEN1cnJlbnRNb250aCwgc2VsZi5sMTBuKSArIFwiIFwiO1xyXG4gICAgICAgIHNlbGYuY3VycmVudFllYXJFbGVtZW50LnZhbHVlID0gc2VsZi5jdXJyZW50WWVhci50b1N0cmluZygpO1xyXG4gICAgICAgIHNlbGYuX2hpZGVQcmV2TW9udGhBcnJvdyA9XHJcbiAgICAgICAgICAgIHNlbGYuY29uZmlnLm1pbkRhdGUgIT09IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgKHNlbGYuY3VycmVudFllYXIgPT09IHNlbGYuY29uZmlnLm1pbkRhdGUuZ2V0RnVsbFllYXIoKVxyXG4gICAgICAgICAgICAgICAgICAgID8gc2VsZi5jdXJyZW50TW9udGggPD0gc2VsZi5jb25maWcubWluRGF0ZS5nZXRNb250aCgpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBzZWxmLmN1cnJlbnRZZWFyIDwgc2VsZi5jb25maWcubWluRGF0ZS5nZXRGdWxsWWVhcigpKTtcclxuICAgICAgICBzZWxmLl9oaWRlTmV4dE1vbnRoQXJyb3cgPVxyXG4gICAgICAgICAgICBzZWxmLmNvbmZpZy5tYXhEYXRlICE9PSB1bmRlZmluZWQgJiZcclxuICAgICAgICAgICAgICAgIChzZWxmLmN1cnJlbnRZZWFyID09PSBzZWxmLmNvbmZpZy5tYXhEYXRlLmdldEZ1bGxZZWFyKClcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuY3VycmVudE1vbnRoICsgMSA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0TW9udGgoKVxyXG4gICAgICAgICAgICAgICAgICAgIDogc2VsZi5jdXJyZW50WWVhciA+IHNlbGYuY29uZmlnLm1heERhdGUuZ2V0RnVsbFllYXIoKSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB1cGRhdGVWYWx1ZSh0cmlnZ2VyQ2hhbmdlKSB7XHJcbiAgICAgICAgaWYgKHRyaWdnZXJDaGFuZ2UgPT09IHZvaWQgMCkgeyB0cmlnZ2VyQ2hhbmdlID0gdHJ1ZTsgfVxyXG4gICAgICAgIGlmICghc2VsZi5zZWxlY3RlZERhdGVzLmxlbmd0aClcclxuICAgICAgICAgICAgcmV0dXJuIHNlbGYuY2xlYXIodHJpZ2dlckNoYW5nZSk7XHJcbiAgICAgICAgaWYgKHNlbGYubW9iaWxlSW5wdXQgIT09IHVuZGVmaW5lZCAmJiBzZWxmLm1vYmlsZUZvcm1hdFN0cikge1xyXG4gICAgICAgICAgICBzZWxmLm1vYmlsZUlucHV0LnZhbHVlID1cclxuICAgICAgICAgICAgICAgIHNlbGYubGF0ZXN0U2VsZWN0ZWREYXRlT2JqICE9PSB1bmRlZmluZWRcclxuICAgICAgICAgICAgICAgICAgICA/IHNlbGYuZm9ybWF0RGF0ZShzZWxmLmxhdGVzdFNlbGVjdGVkRGF0ZU9iaiwgc2VsZi5tb2JpbGVGb3JtYXRTdHIpXHJcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgam9pbkNoYXIgPSBzZWxmLmNvbmZpZy5tb2RlICE9PSBcInJhbmdlXCJcclxuICAgICAgICAgICAgPyBzZWxmLmNvbmZpZy5jb25qdW5jdGlvblxyXG4gICAgICAgICAgICA6IHNlbGYubDEwbi5yYW5nZVNlcGFyYXRvcjtcclxuICAgICAgICBzZWxmLmlucHV0LnZhbHVlID0gc2VsZi5zZWxlY3RlZERhdGVzXHJcbiAgICAgICAgICAgIC5tYXAoZnVuY3Rpb24gKGRPYmopIHsgcmV0dXJuIHNlbGYuZm9ybWF0RGF0ZShkT2JqLCBzZWxmLmNvbmZpZy5kYXRlRm9ybWF0KTsgfSlcclxuICAgICAgICAgICAgLmpvaW4oam9pbkNoYXIpO1xyXG4gICAgICAgIGlmIChzZWxmLmFsdElucHV0ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgc2VsZi5hbHRJbnB1dC52YWx1ZSA9IHNlbGYuc2VsZWN0ZWREYXRlc1xyXG4gICAgICAgICAgICAgICAgLm1hcChmdW5jdGlvbiAoZE9iaikgeyByZXR1cm4gc2VsZi5mb3JtYXREYXRlKGRPYmosIHNlbGYuY29uZmlnLmFsdEZvcm1hdCk7IH0pXHJcbiAgICAgICAgICAgICAgICAuam9pbihqb2luQ2hhcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0cmlnZ2VyQ2hhbmdlICE9PSBmYWxzZSlcclxuICAgICAgICAgICAgdHJpZ2dlckV2ZW50KFwib25WYWx1ZVVwZGF0ZVwiKTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW9udGhOYXZTY3JvbGwoZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB2YXIgaXNZZWFyID0gc2VsZi5jdXJyZW50WWVhckVsZW1lbnQucGFyZW50Tm9kZSAmJlxyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5wYXJlbnROb2RlLmNvbnRhaW5zKGUudGFyZ2V0KTtcclxuICAgICAgICBpZiAoZS50YXJnZXQgPT09IHNlbGYuY3VycmVudE1vbnRoRWxlbWVudCB8fCBpc1llYXIpIHtcclxuICAgICAgICAgICAgdmFyIGRlbHRhID0gbW91c2VEZWx0YShlKTtcclxuICAgICAgICAgICAgaWYgKGlzWWVhcikge1xyXG4gICAgICAgICAgICAgICAgY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyICsgZGVsdGEpO1xyXG4gICAgICAgICAgICAgICAgZS50YXJnZXQudmFsdWUgPSBzZWxmLmN1cnJlbnRZZWFyLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgc2VsZi5jaGFuZ2VNb250aChkZWx0YSwgdHJ1ZSwgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW9udGhOYXZDbGljayhlKSB7XHJcbiAgICAgICAgdmFyIGlzUHJldk1vbnRoID0gc2VsZi5wcmV2TW9udGhOYXYuY29udGFpbnMoZS50YXJnZXQpO1xyXG4gICAgICAgIHZhciBpc05leHRNb250aCA9IHNlbGYubmV4dE1vbnRoTmF2LmNvbnRhaW5zKGUudGFyZ2V0KTtcclxuICAgICAgICBpZiAoaXNQcmV2TW9udGggfHwgaXNOZXh0TW9udGgpXHJcbiAgICAgICAgICAgIGNoYW5nZU1vbnRoKGlzUHJldk1vbnRoID8gLTEgOiAxKTtcclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldCA9PT0gc2VsZi5jdXJyZW50WWVhckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBzZWxmLmN1cnJlbnRZZWFyRWxlbWVudC5zZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuY2xhc3NOYW1lID09PSBcImFycm93VXBcIilcclxuICAgICAgICAgICAgc2VsZi5jaGFuZ2VZZWFyKHNlbGYuY3VycmVudFllYXIgKyAxKTtcclxuICAgICAgICBlbHNlIGlmIChlLnRhcmdldC5jbGFzc05hbWUgPT09IFwiYXJyb3dEb3duXCIpXHJcbiAgICAgICAgICAgIHNlbGYuY2hhbmdlWWVhcihzZWxmLmN1cnJlbnRZZWFyIC0gMSk7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiB0aW1lV3JhcHBlcihlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHZhciBpc0tleURvd24gPSBlLnR5cGUgPT09IFwia2V5ZG93blwiLCBpbnB1dCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIGlmIChzZWxmLmFtUE0gIT09IHVuZGVmaW5lZCAmJiBlLnRhcmdldCA9PT0gc2VsZi5hbVBNKVxyXG4gICAgICAgICAgICBzZWxmLmFtUE0udGV4dENvbnRlbnQgPVxyXG4gICAgICAgICAgICAgICAgc2VsZi5sMTBuLmFtUE1bc2VsZi5hbVBNLnRleHRDb250ZW50ID09PSBcIkFNXCIgPyAxIDogMF07XHJcbiAgICAgICAgdmFyIG1pbiA9IE51bWJlcihpbnB1dC5taW4pLCBtYXggPSBOdW1iZXIoaW5wdXQubWF4KSwgc3RlcCA9IE51bWJlcihpbnB1dC5zdGVwKSwgY3VyVmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSwgMTApLCBkZWx0YSA9IGUuZGVsdGEgfHxcclxuICAgICAgICAgICAgKGlzS2V5RG93blxyXG4gICAgICAgICAgICAgICAgPyBlLndoaWNoID09PSAzOCA/IDEgOiAtMVxyXG4gICAgICAgICAgICAgICAgOiBNYXRoLm1heCgtMSwgTWF0aC5taW4oMSwgZS53aGVlbERlbHRhIHx8IC1lLmRlbHRhWSkpIHx8IDApO1xyXG4gICAgICAgIHZhciBuZXdWYWx1ZSA9IGN1clZhbHVlICsgc3RlcCAqIGRlbHRhO1xyXG4gICAgICAgIGlmICh0eXBlb2YgaW5wdXQudmFsdWUgIT09IFwidW5kZWZpbmVkXCIgJiYgaW5wdXQudmFsdWUubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIHZhciBpc0hvdXJFbGVtID0gaW5wdXQgPT09IHNlbGYuaG91ckVsZW1lbnQsIGlzTWludXRlRWxlbSA9IGlucHV0ID09PSBzZWxmLm1pbnV0ZUVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChuZXdWYWx1ZSA8IG1pbikge1xyXG4gICAgICAgICAgICAgICAgbmV3VmFsdWUgPVxyXG4gICAgICAgICAgICAgICAgICAgIG1heCArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld1ZhbHVlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50KCFpc0hvdXJFbGVtKSArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpbnQoaXNIb3VyRWxlbSkgJiYgaW50KCFzZWxmLmFtUE0pKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc01pbnV0ZUVsZW0pXHJcbiAgICAgICAgICAgICAgICAgICAgaW5jcmVtZW50TnVtSW5wdXQodW5kZWZpbmVkLCAtMSwgc2VsZi5ob3VyRWxlbWVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobmV3VmFsdWUgPiBtYXgpIHtcclxuICAgICAgICAgICAgICAgIG5ld1ZhbHVlID1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dCA9PT0gc2VsZi5ob3VyRWxlbWVudCA/IG5ld1ZhbHVlIC0gbWF4IC0gaW50KCFzZWxmLmFtUE0pIDogbWluO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzTWludXRlRWxlbSlcclxuICAgICAgICAgICAgICAgICAgICBpbmNyZW1lbnROdW1JbnB1dCh1bmRlZmluZWQsIDEsIHNlbGYuaG91ckVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzZWxmLmFtUE0gJiZcclxuICAgICAgICAgICAgICAgIGlzSG91ckVsZW0gJiZcclxuICAgICAgICAgICAgICAgIChzdGVwID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgPyBuZXdWYWx1ZSArIGN1clZhbHVlID09PSAyM1xyXG4gICAgICAgICAgICAgICAgICAgIDogTWF0aC5hYnMobmV3VmFsdWUgLSBjdXJWYWx1ZSkgPiBzdGVwKSlcclxuICAgICAgICAgICAgICAgIHNlbGYuYW1QTS50ZXh0Q29udGVudCA9IHNlbGYuYW1QTS50ZXh0Q29udGVudCA9PT0gXCJQTVwiID8gXCJBTVwiIDogXCJQTVwiO1xyXG4gICAgICAgICAgICBpbnB1dC52YWx1ZSA9IHBhZChuZXdWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5pdCgpO1xyXG4gICAgcmV0dXJuIHNlbGY7XHJcbn1cclxuZnVuY3Rpb24gX2ZsYXRwaWNrcihub2RlTGlzdCwgY29uZmlnKSB7XHJcbiAgICB2YXIgbm9kZXMgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChub2RlTGlzdCk7XHJcbiAgICB2YXIgaW5zdGFuY2VzID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5vZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIG5vZGUgPSBub2Rlc1tpXTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAobm9kZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWZwLW9taXRcIikgIT09IG51bGwpXHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgaWYgKG5vZGUuX2ZsYXRwaWNrciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBub2RlLl9mbGF0cGlja3IuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5fZmxhdHBpY2tyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG5vZGUuX2ZsYXRwaWNrciA9IEZsYXRwaWNrckluc3RhbmNlKG5vZGUsIGNvbmZpZyB8fCB7fSk7XHJcbiAgICAgICAgICAgIGluc3RhbmNlcy5wdXNoKG5vZGUuX2ZsYXRwaWNrcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihlLCBlLnN0YWNrKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5zdGFuY2VzLmxlbmd0aCA9PT0gMSA/IGluc3RhbmNlc1swXSA6IGluc3RhbmNlcztcclxufVxyXG5pZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBIVE1MQ29sbGVjdGlvbi5wcm90b3R5cGUuZmxhdHBpY2tyID0gTm9kZUxpc3QucHJvdG90eXBlLmZsYXRwaWNrciA9IGZ1bmN0aW9uIChjb25maWcpIHtcclxuICAgICAgICByZXR1cm4gX2ZsYXRwaWNrcih0aGlzLCBjb25maWcpO1xyXG4gICAgfTtcclxuICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5mbGF0cGlja3IgPSBmdW5jdGlvbiAoY29uZmlnKSB7XHJcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3IoW3RoaXNdLCBjb25maWcpO1xyXG4gICAgfTtcclxufVxyXG52YXIgZmxhdHBpY2tyO1xyXG5mbGF0cGlja3IgPSBmdW5jdGlvbiAoc2VsZWN0b3IsIGNvbmZpZykge1xyXG4gICAgaWYgKHNlbGVjdG9yIGluc3RhbmNlb2YgTm9kZUxpc3QpXHJcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3Ioc2VsZWN0b3IsIGNvbmZpZyk7XHJcbiAgICBlbHNlIGlmICh0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIpXHJcbiAgICAgICAgcmV0dXJuIF9mbGF0cGlja3Iod2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpLCBjb25maWcpO1xyXG4gICAgcmV0dXJuIF9mbGF0cGlja3IoW3NlbGVjdG9yXSwgY29uZmlnKTtcclxufTtcclxud2luZG93LmZsYXRwaWNrciA9IGZsYXRwaWNrcjtcclxuZmxhdHBpY2tyLmRlZmF1bHRDb25maWcgPSBkZWZhdWx0cztcclxuZmxhdHBpY2tyLmwxMG5zID0ge1xyXG4gICAgZW46IF9fYXNzaWduKHt9LCBlbmdsaXNoKSxcclxuICAgIGRlZmF1bHQ6IF9fYXNzaWduKHt9LCBlbmdsaXNoKSxcclxufTtcclxuZmxhdHBpY2tyLmxvY2FsaXplID0gZnVuY3Rpb24gKGwxMG4pIHtcclxuICAgIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0ID0gX19hc3NpZ24oe30sIGZsYXRwaWNrci5sMTBucy5kZWZhdWx0LCBsMTBuKTtcclxufTtcclxuZmxhdHBpY2tyLnNldERlZmF1bHRzID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcgPSBfX2Fzc2lnbih7fSwgZmxhdHBpY2tyLmRlZmF1bHRDb25maWcsIGNvbmZpZyk7XHJcbn07XHJcbmlmICh0eXBlb2YgalF1ZXJ5ICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICBqUXVlcnkuZm4uZmxhdHBpY2tyID0gZnVuY3Rpb24gKGNvbmZpZykge1xyXG4gICAgICAgIHJldHVybiBfZmxhdHBpY2tyKHRoaXMsIGNvbmZpZyk7XHJcbiAgICB9O1xyXG59XHJcbkRhdGUucHJvdG90eXBlLmZwX2luY3IgPSBmdW5jdGlvbiAoZGF5cykge1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuZ2V0RnVsbFllYXIoKSwgdGhpcy5nZXRNb250aCgpLCB0aGlzLmdldERhdGUoKSArICh0eXBlb2YgZGF5cyA9PT0gXCJzdHJpbmdcIiA/IHBhcnNlSW50KGRheXMsIDEwKSA6IGRheXMpKTtcclxufTtcclxudmFyIGZsYXRwaWNrciQxID0gZmxhdHBpY2tyO1xuXG5yZXR1cm4gZmxhdHBpY2tyJDE7XG5cbn0pKSk7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy9mbGF0cGlja3IvZGlzdC9mbGF0cGlja3IuanNcbi8vIG1vZHVsZSBpZCA9IDExMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmxhdHBpY2tyXCIgfSwgW1xuICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29udHJvbCBoYXMtaWNvbnMtcmlnaHRcIiB9LCBbXG4gICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXQgY29udHJvbFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwidGV4dFwiLFxuICAgICAgICAgIHBsYWNlaG9sZGVyOiBfdm0ucGxhY2Vob2xkZXIsXG4gICAgICAgICAgaWQ6IFwiZGF0ZS1pbnB1dC1cIiArIF92bS5fdWlkLFxuICAgICAgICAgIG5hbWU6IF92bS5uYW1lLFxuICAgICAgICAgIGRpc2FibGVkOiBfdm0uZGlzYWJsZWRcbiAgICAgICAgfSxcbiAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IF92bS52YWx1ZSB9XG4gICAgICB9KSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XCIgfSwgW1xuICAgICAgICBfdm0udGltZU9ubHlcbiAgICAgICAgICA/IF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1jbG9ja1wiIH0pXG4gICAgICAgICAgOiBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYXMgZmEtY2FsZW5kYXItYWx0XCIgfSlcbiAgICAgIF0pXG4gICAgXSlcbiAgXSlcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNGQ0NDNmZTJcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTRkNDQzZmUyXCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvRGF0ZXBpY2tlci52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJ2YXIgZGlzcG9zZWQgPSBmYWxzZVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVnVlRm9ybUlucHV0LnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtZmRjYzdmZGFcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WdWVGb3JtSW5wdXQudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gbnVsbFxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZUZvcm1JbnB1dC52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtZmRjYzdmZGFcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi1mZGNjN2ZkYVwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIjx0ZW1wbGF0ZT5cblxuICAgIDxzcGFuPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtaWNvbnMtcmlnaHQnOiBoYXNFcnJvciB9XCJcbiAgICAgICAgICAgIHYtaWY9XCJmaWVsZC5tZXRhLmNvbnRlbnQgPT09ICd0ZXh0J1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWRhbmdlcic6IGhhc0Vycm9yIH1cIlxuICAgICAgICAgICAgICAgIDpyZWFkb25seT1cImZpZWxkLm1ldGEucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIEBrZXlkb3duPVwiJGVtaXQoJ3VwZGF0ZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiaGFzRXJyb3JcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sXCJcbiAgICAgICAgICAgIDpjbGFzcz1cInsgJ2hhcy1pY29ucy1yaWdodCc6IGhhc0Vycm9yIH1cIlxuICAgICAgICAgICAgdi1pZj1cImZpZWxkLm1ldGEuY29udGVudCA9PT0gJ2VtYWlsJ1wiPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWRhbmdlcic6IGhhc0Vycm9yIH1cIlxuICAgICAgICAgICAgICAgIDpyZWFkb25seT1cImZpZWxkLm1ldGEucmVhZG9ubHlcIlxuICAgICAgICAgICAgICAgIEBrZXlkb3duPVwiJGVtaXQoJ3VwZGF0ZScpXCJcbiAgICAgICAgICAgICAgICB2LW1vZGVsPVwiZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZFwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImhhc0Vycm9yXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L2k+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbFwiXG4gICAgICAgICAgICA6Y2xhc3M9XCJ7ICdoYXMtaWNvbnMtcmlnaHQnOiBoYXNFcnJvciB9XCJcbiAgICAgICAgICAgIHYtaWY9XCJmaWVsZC5tZXRhLmNvbnRlbnQgPT09ICdudW1iZXInXCI+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtZGFuZ2VyJzogaGFzRXJyb3IgfVwiXG4gICAgICAgICAgICAgICAgOnJlYWRvbmx5PVwiZmllbGQubWV0YS5yZWFkb25seVwiXG4gICAgICAgICAgICAgICAgQGtleWRvd249XCIkZW1pdCgndXBkYXRlJylcIlxuICAgICAgICAgICAgICAgIHYtbW9kZWw9XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICAgICAgOnN0ZXA9XCJmaWVsZC5tZXRhLnN0ZXBcIlxuICAgICAgICAgICAgICAgIDptaW49XCJmaWVsZC5tZXRhLm1pblwiXG4gICAgICAgICAgICAgICAgOm1heD1cImZpZWxkLm1ldGEubWF4XCJcbiAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJmaWVsZC5tZXRhLmRpc2FibGVkXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICB2LWlmPVwiaGFzRXJyb3JcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiPjwvaT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzcGFuIHYtaWY9XCJmaWVsZC5tZXRhLmNvbnRlbnQgPT09ICdjaGVja2JveCdcIj5cbiAgICAgICAgICAgIDx2dWUtc3dpdGNoIHYtbW9kZWw9XCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgc2l6ZT1cImlzLWxhcmdlXCJcbiAgICAgICAgICAgICAgICB0eXBlPVwiaXMtc3VjY2Vzc1wiXG4gICAgICAgICAgICAgICAgOmRpc2FibGVkPVwiZmllbGQubWV0YS5kaXNhYmxlZCB8fCBmaWVsZC5tZXRhLnJlYWRvbmx5XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIkZW1pdCgndXBkYXRlJylcIj5cbiAgICAgICAgICAgIDwvdnVlLXN3aXRjaD5cbiAgICAgICAgPC9zcGFuPlxuICAgIDwvc3Bhbj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IFZ1ZVN3aXRjaCBmcm9tICcuL1Z1ZVN3aXRjaC52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBWdWVTd2l0Y2ggfSxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGZpZWxkOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgaGFzRXJyb3I6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybUlucHV0LnZ1ZSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RlZmQ2NTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IXNhc3MtbG9hZGVyIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlU3dpdGNoLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vVnVlU3dpdGNoLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RlZmQ2NTJcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9WdWVTd2l0Y2gudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTdkZWZkNjUyXCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtN2RlZmQ2NTJcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RlZmQ2NTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlU3dpdGNoLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNDNlNDQxZDJcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtN2RlZmQ2NTJcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vVnVlU3dpdGNoLnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi03ZGVmZDY1MlxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9WdWVTd2l0Y2gudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdkZWZkNjUyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmZpZWxkIC52dWUtc3dpdGNoIHtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDtcXG59XFxuLnZ1ZS1zd2l0Y2gge1xcbiAgLS1oZWlnaHQ6IDFyZW07XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgd2lkdGg6IGNhbGMoMS42MjUgKiB2YXIoLS1oZWlnaHQpKTtcXG4gIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjZGJkYmRiO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcbiAgZGlzcGxheTogLW1zLWlubGluZS1mbGV4Ym94O1xcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXG4gICAgICAtbXMtZmxleC1hbGlnbjogY2VudGVyO1xcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcbiAgICAgIC1tcy1mbGV4LXBhY2s6IGNlbnRlcjtcXG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcbi52dWUtc3dpdGNoIGlucHV0IHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZGlzcGxheTogLXdlYmtpdC1pbmxpbmUtYm94O1xcbiAgICBkaXNwbGF5OiAtbXMtaW5saW5lLWZsZXhib3g7XFxuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbn1cXG4udnVlLXN3aXRjaDpiZWZvcmUsIC52dWUtc3dpdGNoOmFmdGVyIHtcXG4gICAgY29udGVudDogJyAnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgaGVpZ2h0OiBjYWxjKHZhcigtLWhlaWdodCkgLSAycHgpO1xcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1oZWlnaHQpO1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IDAuMjVzO1xcbiAgICB0cmFuc2l0aW9uOiAwLjI1cztcXG59XFxuLnZ1ZS1zd2l0Y2g6YmVmb3JlIHtcXG4gICAgd2lkdGg6IGNhbGMoMS42MjUgKiB2YXIoLS1oZWlnaHQpIC0gMnB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2RiZGJkYjtcXG59XFxuLnZ1ZS1zd2l0Y2g6YWZ0ZXIge1xcbiAgICB3aWR0aDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gMnB4KTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDJweCAzcHggcmdiYSgxNywgMTcsIDE3LCAwLjEpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDE3LCAxNywgMTcsIDAuMSk7XFxufVxcbi52dWUtc3dpdGNoLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM0YTRhNGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XFxufVxcbi52dWUtc3dpdGNoLmNoZWNrZWQ6YmVmb3JlIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XFxuICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xcbn1cXG4udnVlLXN3aXRjaC5jaGVja2VkOmFmdGVyIHtcXG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWChjYWxjKDAuNjI1ICogdmFyKC0taGVpZ2h0KSkpO1xcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMC42MjUgKiB2YXIoLS1oZWlnaHQpKSk7XFxufVxcbi52dWUtc3dpdGNoLmlzLXdoaXRlLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtd2hpdGUuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1ibGFjay5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMGEwYTBhO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGEwYTBhO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1ibGFjay5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM0YTRhNGE7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzRhNGE0YTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1saWdodC5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZXNtb2tlO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1saWdodC5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLWRhcmsuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzM2MzYzNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtZGFyay5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM3NTc1NzU7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzc1NzU3NTtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1wcmltYXJ5LmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMwMGQxYjI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGQxYjI7XFxufVxcbi52dWUtc3dpdGNoLmlzLXByaW1hcnkuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNTJmZmU1O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1MmZmZTU7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtbGluay5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjMzI3M2RjO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3M2RjO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1saW5rLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzlmYmVlZjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZiZWVmO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLWluZm8uY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzIwOWNlZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwOWNlZTtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtaW5mby5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICM5N2QxZjc7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzk3ZDFmNztcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1zdWNjZXNzLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMyM2QxNjA7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyM2QxNjA7XFxufVxcbi52dWUtc3dpdGNoLmlzLXN1Y2Nlc3MuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjODllYmFiO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM4OWViYWI7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtd2FybmluZy5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmZkZDU3O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZkZDU3O1xcbn1cXG4udnVlLXN3aXRjaC5pcy13YXJuaW5nLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjdkNjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2Q2O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XFxufVxcbi52dWUtc3dpdGNoLmlzLWRhbmdlci5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmYzODYwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODYwO1xcbn1cXG4udnVlLXN3aXRjaC5pcy1kYW5nZXIuY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjZmZiOGM2O1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmI4YzY7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtc21hbGwge1xcbiAgICAtLWhlaWdodDogMC43NXJlbTtcXG59XFxuLnZ1ZS1zd2l0Y2guaXMtbWVkaXVtIHtcXG4gICAgLS1oZWlnaHQ6IDEuMjVyZW07XFxufVxcbi52dWUtc3dpdGNoLmlzLWxhcmdlIHtcXG4gICAgLS1oZWlnaHQ6IDEuNXJlbTtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9Vc2Vycy9hZGkvY29kZS9lbnNvdjIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0NBQUU7QUFFdkI7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZCQUE2QjtFQUM3QixtQ0FBbUM7RUFDbkMsc0JBQXNCO0VBQ3RCLDBCQUEwQjtFQUMxQiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLDRCQUFxQjtFQUFyQiw0QkFBcUI7RUFBckIscUJBQXFCO0VBQ3JCLHVCQUF1QjtFQUN2QiwwQkFBb0I7TUFBcEIsdUJBQW9CO1VBQXBCLG9CQUFvQjtFQUNwQix5QkFBd0I7TUFBeEIsc0JBQXdCO1VBQXhCLHdCQUF3QjtDQUFFO0FBQzFCO0lBQ0UsV0FBVztJQUNYLDRCQUFxQjtJQUFyQiw0QkFBcUI7SUFBckIscUJBQXFCO0lBQ3JCLFlBQVk7SUFDWixhQUFhO0NBQUU7QUFDakI7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLE9BQU87SUFDUCxRQUFRO0lBQ1Isa0NBQWtDO0lBQ2xDLDZCQUE2QjtJQUM3QiwwQkFBa0I7SUFBbEIsa0JBQWtCO0NBQUU7QUFDdEI7SUFDRSx5Q0FBeUM7SUFDekMsMEJBQTBCO0NBQUU7QUFDOUI7SUFDRSxpQ0FBaUM7SUFDakMsdUJBQXVCO0lBQ3ZCLG9EQUE0QztZQUE1Qyw0Q0FBNEM7Q0FBRTtBQUNoRDtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLDRCQUFvQjtjQUFwQixvQkFBb0I7Q0FBRTtBQUN4QjtNQUNFLDJEQUFtRDtjQUFuRCxtREFBbUQ7Q0FBRTtBQUN6RDtJQUNFLG9CQUFvQjtJQUNwQix3QkFBd0I7Q0FBRTtBQUMxQjtNQUNFLG9CQUFvQjtNQUNwQix3QkFBd0I7TUFDeEIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0UseUJBQXlCO0lBQ3pCLDZCQUE2QjtDQUFFO0FBQy9CO01BQ0Usb0JBQW9CO01BQ3BCLHdCQUF3QjtNQUN4QixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxzQkFBc0I7SUFDdEIsMEJBQTBCO0NBQUU7QUFDNUI7TUFDRSxzQkFBc0I7TUFDdEIsMEJBQTBCO01BQzFCLG9CQUFvQjtDQUFFO0FBQzFCO0lBQ0Usc0JBQXNCO0lBQ3RCLDBCQUEwQjtDQUFFO0FBQzVCO01BQ0Usc0JBQXNCO01BQ3RCLDBCQUEwQjtNQUMxQixvQkFBb0I7Q0FBRTtBQUMxQjtJQUNFLHNCQUFzQjtJQUN0QiwwQkFBMEI7Q0FBRTtBQUM1QjtNQUNFLHNCQUFzQjtNQUN0QiwwQkFBMEI7TUFDMUIsb0JBQW9CO0NBQUU7QUFDMUI7SUFDRSxrQkFBa0I7Q0FBRTtBQUN0QjtJQUNFLGtCQUFrQjtDQUFFO0FBQ3RCO0lBQ0UsaUJBQWlCO0NBQUVcIixcImZpbGVcIjpcIlZ1ZVN3aXRjaC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmZpZWxkIC52dWUtc3dpdGNoIHtcXG4gIG1hcmdpbi10b3A6IDZweDtcXG4gIG1hcmdpbi1ib3R0b206IDZweDsgfVxcblxcbi52dWUtc3dpdGNoIHtcXG4gIC0taGVpZ2h0OiAxcmVtO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcXG4gIHdpZHRoOiBjYWxjKDEuNjI1ICogdmFyKC0taGVpZ2h0KSk7XFxuICBoZWlnaHQ6IHZhcigtLWhlaWdodCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGJkYmRiO1xcbiAgYm9yZGVyOiAxcHggc29saWQgI2RiZGJkYjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxcbiAgLnZ1ZS1zd2l0Y2ggaW5wdXQge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTsgfVxcbiAgLnZ1ZS1zd2l0Y2g6YmVmb3JlLCAudnVlLXN3aXRjaDphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcgJztcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGhlaWdodDogY2FsYyh2YXIoLS1oZWlnaHQpIC0gMnB4KTtcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcXG4gICAgdHJhbnNpdGlvbjogMC4yNXM7IH1cXG4gIC52dWUtc3dpdGNoOmJlZm9yZSB7XFxuICAgIHdpZHRoOiBjYWxjKDEuNjI1ICogdmFyKC0taGVpZ2h0KSAtIDJweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7IH1cXG4gIC52dWUtc3dpdGNoOmFmdGVyIHtcXG4gICAgd2lkdGg6IGNhbGModmFyKC0taGVpZ2h0KSAtIDJweCk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDE3LCAxNywgMTcsIDAuMSk7IH1cXG4gIC52dWUtc3dpdGNoLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICM0YTRhNGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guY2hlY2tlZDpiZWZvcmUge1xcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guY2hlY2tlZDphZnRlciB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKGNhbGMoMC42MjUgKiB2YXIoLS1oZWlnaHQpKSk7IH1cXG4gIC52dWUtc3dpdGNoLmlzLXdoaXRlLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy13aGl0ZS5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLWJsYWNrLmNoZWNrZWQge1xcbiAgICBib3JkZXItY29sb3I6ICMwYTBhMGE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwYTBhMGE7IH1cXG4gICAgLnZ1ZS1zd2l0Y2guaXMtYmxhY2suY2hlY2tlZC5kaXNhYmxlZCB7XFxuICAgICAgYm9yZGVyLWNvbG9yOiAjNGE0YTRhO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM0YTRhNGE7XFxuICAgICAgY3Vyc29yOiBub3QtYWxsb3dlZDsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtbGlnaHQuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGVzbW9rZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGVzbW9rZTsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1saWdodC5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLWRhcmsuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzM2MzYzNjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzM2MzYzNjsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1kYXJrLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzc1NzU3NTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzU3NTc1O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLXByaW1hcnkuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzAwZDFiMjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZDFiMjsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1wcmltYXJ5LmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzUyZmZlNTtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTJmZmU1O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLWxpbmsuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzMyNzNkYztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzMyNzNkYzsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1saW5rLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzlmYmVlZjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOWZiZWVmO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLWluZm8uY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzIwOWNlZTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIwOWNlZTsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1pbmZvLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzk3ZDFmNztcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOTdkMWY3O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLXN1Y2Nlc3MuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogIzIzZDE2MDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzZDE2MDsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy1zdWNjZXNzLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogIzg5ZWJhYjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODllYmFiO1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLXdhcm5pbmcuY2hlY2tlZCB7XFxuICAgIGJvcmRlci1jb2xvcjogI2ZmZGQ1NztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZGQ1NzsgfVxcbiAgICAudnVlLXN3aXRjaC5pcy13YXJuaW5nLmNoZWNrZWQuZGlzYWJsZWQge1xcbiAgICAgIGJvcmRlci1jb2xvcjogI2ZmZjdkNjtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmN2Q2O1xcbiAgICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7IH1cXG4gIC52dWUtc3dpdGNoLmlzLWRhbmdlci5jaGVja2VkIHtcXG4gICAgYm9yZGVyLWNvbG9yOiAjZmYzODYwO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmYzODYwOyB9XFxuICAgIC52dWUtc3dpdGNoLmlzLWRhbmdlci5jaGVja2VkLmRpc2FibGVkIHtcXG4gICAgICBib3JkZXItY29sb3I6ICNmZmI4YzY7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmYjhjNjtcXG4gICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkOyB9XFxuICAudnVlLXN3aXRjaC5pcy1zbWFsbCB7XFxuICAgIC0taGVpZ2h0OiAwLjc1cmVtOyB9XFxuICAudnVlLXN3aXRjaC5pcy1tZWRpdW0ge1xcbiAgICAtLWhlaWdodDogMS4yNXJlbTsgfVxcbiAgLnZ1ZS1zd2l0Y2guaXMtbGFyZ2Uge1xcbiAgICAtLWhlaWdodDogMS41cmVtOyB9XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTdkZWZkNjUyXCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL3Z1ZWZvcm1zL1Z1ZVN3aXRjaC52dWVcbi8vIG1vZHVsZSBpZCA9IDExMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDMgMTIgMTMgMTQgMTUgMTYgMTcgMTggMTkgMjAgMjEgMjIgMjMgMjQgMjUgMjYgMjciLCI8dGVtcGxhdGU+XG5cbiAgICA8bGFiZWwgY2xhc3M9XCJ2dWUtc3dpdGNoXCIgOmNsYXNzPVwiW3NpemUsIHR5cGUsIHsgJ2NoZWNrZWQnOiB2YWx1ZSwgJ2Rpc2FibGVkJzogZGlzYWJsZWQgfV1cIj5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiXG4gICAgICAgICAgICBjbGFzcz1cImNoZWNrYm94XCJcbiAgICAgICAgICAgIHYtbW9kZWw9XCJjaGVja2VkXCJcbiAgICAgICAgICAgIEBjaGFuZ2U9XCIkZW1pdCgnaW5wdXQnLCBjaGVja2VkKVwiXG4gICAgICAgICAgICA6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG4gICAgICAgICAgICA6cmVxdWlyZWQ9XCJyZXF1aXJlZFwiXG4gICAgICAgICAgICA6Y2hlY2tlZD1cInZhbHVlXCI+XG4gICAgPC9sYWJlbD5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuY29uc3Qgc2l6ZXMgPSBbJ2lzLXNtYWxsJywgJ2lzLW1lZGl1bScsICdpcy1sYXJnZSddO1xuY29uc3QgdHlwZXMgPSBbJ2lzLXByaW1hcnknLCAnaXMtd2FybmluZycsICdpcy1kYW5nZXInLCAnaXMtc3VjY2VzcycsICdpcy1pbmZvJ107XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBuYW1lOiAnVnVlU3dpdGNoJyxcblxuICAgIHByb3BzOiB7XG4gICAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHR5cGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB2YWxpZGF0b3I6IHZhbHVlID0+IHR5cGVzLmluY2x1ZGVzKHZhbHVlKSxcbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZToge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogdmFsdWUgPT4gc2l6ZXMuaW5jbHVkZXModmFsdWUpLFxuICAgICAgICB9LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICB2YWx1ZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5jaGVja2VkID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjaGVja2VkOiB0aGlzLnZhbHVlLFxuICAgICAgICB9O1xuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG5cbkBpbXBvcnQgJ35idWxtYS9zYXNzL3V0aWxpdGllcy9pbml0aWFsLXZhcmlhYmxlcyc7XG5AaW1wb3J0ICd+YnVsbWEvc2Fzcy91dGlsaXRpZXMvZGVyaXZlZC12YXJpYWJsZXMuc2Fzcyc7XG5cbi5maWVsZCB7XG4gICAgLnZ1ZS1zd2l0Y2gge1xuICAgICAgICBtYXJnaW4tdG9wOiA2cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDZweDtcbiAgICB9XG59XG5cbi52dWUtc3dpdGNoIHtcbiAgICAtLWhlaWdodDogJHNpemUtbm9ybWFsO1xuXG4gICAgaW5wdXQge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0taGVpZ2h0KTtcbiAgICB3aWR0aDogY2FsYygxLjYyNSAqIHZhcigtLWhlaWdodCkpO1xuICAgIGhlaWdodDogdmFyKC0taGVpZ2h0KTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYm9yZGVyO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICRib3JkZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblxuICAgICY6YmVmb3JlLFxuICAgICY6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnICc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBoZWlnaHQ6IGNhbGModmFyKC0taGVpZ2h0KSAtIDJweCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLWhlaWdodCk7XG4gICAgICAgIHRyYW5zaXRpb246IDAuMjVzO1xuICAgIH1cblxuICAgICY6YmVmb3JlIHtcbiAgICAgICAgd2lkdGg6IGNhbGMoMS42MjUgKiB2YXIoLS1oZWlnaHQpIC0gMnB4KTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGdyZXktbGlnaHRlcjtcbiAgICB9XG5cbiAgICAmOmFmdGVyIHtcbiAgICAgICAgd2lkdGg6IGNhbGModmFyKC0taGVpZ2h0KSAtIDJweCk7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDNweCByZ2JhKDE3LCAxNywgMTcsIDAuMSk7XG4gICAgfVxuXG4gICAgJi5jaGVja2VkIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAkdGV4dDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHRleHQ7XG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIH1cbiAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoY2FsYygwLjYyNSAqIHZhcigtLWhlaWdodCkpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBlYWNoICRuYW1lLCAkcGFpciBpbiAkY29sb3JzIHtcbiAgICAgICAgJGNvbG9yOiBudGgoJHBhaXIsIDEpO1xuICAgICAgICAmLmlzLSN7JG5hbWV9IHtcbiAgICAgICAgICAgICYuY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAkY29sb3I7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yO1xuXG4gICAgICAgICAgICAgICAgJi5kaXNhYmxlZCB7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogbGlnaHRlbigkY29sb3IsIDI1JSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJGNvbG9yLCAyNSUpO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IG5vdC1hbGxvd2VkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYuaXMtc21hbGwge1xuICAgICAgICAtLWhlaWdodDogJHNpemUtc21hbGw7XG4gICAgfVxuICAgICYuaXMtbWVkaXVtIHtcbiAgICAgICAgLS1oZWlnaHQ6ICRzaXplLW1lZGl1bTtcbiAgICB9XG4gICAgJi5pcy1sYXJnZSB7XG4gICAgICAgIC0taGVpZ2h0OiAkc2l6ZS1sYXJnZTtcbiAgICB9XG59XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlU3dpdGNoLnZ1ZSIsInZhciByZW5kZXIgPSBmdW5jdGlvbigpIHtcbiAgdmFyIF92bSA9IHRoaXNcbiAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICByZXR1cm4gX2MoXG4gICAgXCJsYWJlbFwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcInZ1ZS1zd2l0Y2hcIixcbiAgICAgIGNsYXNzOiBbXG4gICAgICAgIF92bS5zaXplLFxuICAgICAgICBfdm0udHlwZSxcbiAgICAgICAgeyBjaGVja2VkOiBfdm0udmFsdWUsIGRpc2FibGVkOiBfdm0uZGlzYWJsZWQgfVxuICAgICAgXVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgIHZhbHVlOiBfdm0uY2hlY2tlZCxcbiAgICAgICAgICAgIGV4cHJlc3Npb246IFwiY2hlY2tlZFwiXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBzdGF0aWNDbGFzczogXCJjaGVja2JveFwiLFxuICAgICAgICBhdHRyczoge1xuICAgICAgICAgIHR5cGU6IFwiY2hlY2tib3hcIixcbiAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRpc2FibGVkLFxuICAgICAgICAgIHJlcXVpcmVkOiBfdm0ucmVxdWlyZWRcbiAgICAgICAgfSxcbiAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICBjaGVja2VkOiBfdm0udmFsdWUsXG4gICAgICAgICAgY2hlY2tlZDogQXJyYXkuaXNBcnJheShfdm0uY2hlY2tlZClcbiAgICAgICAgICAgID8gX3ZtLl9pKF92bS5jaGVja2VkLCBudWxsKSA+IC0xXG4gICAgICAgICAgICA6IF92bS5jaGVja2VkXG4gICAgICAgIH0sXG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgY2hhbmdlOiBbXG4gICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgdmFyICQkYSA9IF92bS5jaGVja2VkLFxuICAgICAgICAgICAgICAgICQkZWwgPSAkZXZlbnQudGFyZ2V0LFxuICAgICAgICAgICAgICAgICQkYyA9ICQkZWwuY2hlY2tlZCA/IHRydWUgOiBmYWxzZVxuICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSgkJGEpKSB7XG4gICAgICAgICAgICAgICAgdmFyICQkdiA9IG51bGwsXG4gICAgICAgICAgICAgICAgICAkJGkgPSBfdm0uX2koJCRhLCAkJHYpXG4gICAgICAgICAgICAgICAgaWYgKCQkZWwuY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgICAgJCRpIDwgMCAmJiAoX3ZtLmNoZWNrZWQgPSAkJGEuY29uY2F0KFskJHZdKSlcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgJCRpID4gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgKF92bS5jaGVja2VkID0gJCRhLnNsaWNlKDAsICQkaSkuY29uY2F0KCQkYS5zbGljZSgkJGkgKyAxKSkpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIF92bS5jaGVja2VkID0gJCRjXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLiRlbWl0KFwiaW5wdXRcIiwgX3ZtLmNoZWNrZWQpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi03ZGVmZDY1MlwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtN2RlZmQ2NTJcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVTd2l0Y2gudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTI3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcInNwYW5cIiwgW1xuICAgIF92bS5maWVsZC5tZXRhLmNvbnRlbnQgPT09IFwidGV4dFwiXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJoYXMtaWNvbnMtcmlnaHRcIjogX3ZtLmhhc0Vycm9yIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWRhbmdlclwiOiBfdm0uaGFzRXJyb3IgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLmZpZWxkLm1ldGEucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJ0ZXh0XCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5maWVsZC5tZXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmllbGQudmFsdWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInVwZGF0ZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkLCBcInZhbHVlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uaGFzRXJyb3JcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIgfSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmZpZWxkLm1ldGEuY29udGVudCA9PT0gXCJlbWFpbFwiXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAge1xuICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29udHJvbFwiLFxuICAgICAgICAgICAgY2xhc3M6IHsgXCJoYXMtaWNvbnMtcmlnaHRcIjogX3ZtLmhhc0Vycm9yIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwiaW5wdXRcIiwge1xuICAgICAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgICAgICAgICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBjbGFzczogeyBcImlzLWRhbmdlclwiOiBfdm0uaGFzRXJyb3IgfSxcbiAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICByZWFkb25seTogX3ZtLmZpZWxkLm1ldGEucmVhZG9ubHksXG4gICAgICAgICAgICAgICAgdHlwZTogXCJlbWFpbFwiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkb21Qcm9wczogeyB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlIH0sXG4gICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICBfdm0uJGVtaXQoXCJ1cGRhdGVcIilcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWVsZCwgXCJ2YWx1ZVwiLCAkZXZlbnQudGFyZ2V0LnZhbHVlKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLmhhc0Vycm9yXG4gICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbCBpcy1yaWdodCBoYXMtdGV4dC1kYW5nZXJcIiB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiIH0pXVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgIF1cbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKSxcbiAgICBfdm0uX3YoXCIgXCIpLFxuICAgIF92bS5maWVsZC5tZXRhLmNvbnRlbnQgPT09IFwibnVtYmVyXCJcbiAgICAgID8gX2MoXG4gICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250cm9sXCIsXG4gICAgICAgICAgICBjbGFzczogeyBcImhhcy1pY29ucy1yaWdodFwiOiBfdm0uaGFzRXJyb3IgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgIHZhbHVlOiBfdm0uZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIGNsYXNzOiB7IFwiaXMtZGFuZ2VyXCI6IF92bS5oYXNFcnJvciB9LFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIHJlYWRvbmx5OiBfdm0uZmllbGQubWV0YS5yZWFkb25seSxcbiAgICAgICAgICAgICAgICB0eXBlOiBcIm51bWJlclwiLFxuICAgICAgICAgICAgICAgIHN0ZXA6IF92bS5maWVsZC5tZXRhLnN0ZXAsXG4gICAgICAgICAgICAgICAgbWluOiBfdm0uZmllbGQubWV0YS5taW4sXG4gICAgICAgICAgICAgICAgbWF4OiBfdm0uZmllbGQubWV0YS5tYXgsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5maWVsZC5tZXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBfdm0uZmllbGQudmFsdWUgfSxcbiAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICBrZXlkb3duOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInVwZGF0ZVwiKVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoX3ZtLmZpZWxkLCBcInZhbHVlXCIsICRldmVudC50YXJnZXQudmFsdWUpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uaGFzRXJyb3JcbiAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0IGhhcy10ZXh0LWRhbmdlclwiIH0sXG4gICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCIgfSldXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgXVxuICAgICAgICApXG4gICAgICA6IF92bS5fZSgpLFxuICAgIF92bS5fdihcIiBcIiksXG4gICAgX3ZtLmZpZWxkLm1ldGEuY29udGVudCA9PT0gXCJjaGVja2JveFwiXG4gICAgICA/IF9jKFxuICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgIFtcbiAgICAgICAgICAgIF9jKFwidnVlLXN3aXRjaFwiLCB7XG4gICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgc2l6ZTogXCJpcy1sYXJnZVwiLFxuICAgICAgICAgICAgICAgIHR5cGU6IFwiaXMtc3VjY2Vzc1wiLFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiBfdm0uZmllbGQubWV0YS5kaXNhYmxlZCB8fCBfdm0uZmllbGQubWV0YS5yZWFkb25seVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kZW1pdChcInVwZGF0ZVwiKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogX3ZtLmZpZWxkLnZhbHVlLFxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbigkJHYpIHtcbiAgICAgICAgICAgICAgICAgIF92bS4kc2V0KF92bS5maWVsZCwgXCJ2YWx1ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDFcbiAgICAgICAgKVxuICAgICAgOiBfdm0uX2UoKVxuICBdKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi1mZGNjN2ZkYVwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtZmRjYzdmZGFcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtSW5wdXQudnVlXG4vLyBtb2R1bGUgaWQgPSAxMTI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSAzIDEyIDEzIDE0IDE1IDE2IDE3IDE4IDE5IDIwIDIxIDIyIDIzIDI0IDI1IDI2IDI3IiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIFtcbiAgICAgIF92bS5kYXRhLmljb24gfHwgX3ZtLmRhdGEudGl0bGVcbiAgICAgICAgPyBfYyhcImg1XCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgaXMtNVwiIH0sIFtcbiAgICAgICAgICAgIF92bS5kYXRhLmljb25cbiAgICAgICAgICAgICAgPyBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5kYXRhLmljb24gfSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5kYXRhLnRpdGxlXG4gICAgICAgICAgICAgID8gX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICBcIiArIF92bS5fcyhfdm0uZGF0YS50aXRsZSkgKyBcIlxcbiAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF9jKFwiaHJcIilcbiAgICAgICAgICBdKVxuICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgIF9jKFxuICAgICAgICBcImZvcm1cIixcbiAgICAgICAge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInZ1ZS1mb3JtXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgIF92bS5zdWJtaXQoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgW1xuICAgICAgICAgIF9jKFxuICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIiB9LFxuICAgICAgICAgICAgX3ZtLl9sKF92bS5kYXRhLmZpZWxkcywgZnVuY3Rpb24oZmllbGQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuICFmaWVsZC5tZXRhLmhpZGRlblxuICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBrZXk6IGZpZWxkLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5jb2x1bW5TaXplXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImZpZWxkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsYWJlbFwiLCB7IHN0YXRpY0NsYXNzOiBcImxhYmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9fKGZpZWxkLmxhYmVsKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwicFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaGVscCBpcy1kYW5nZXIgaXMtcHVsbGVkLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5lcnJvcnMuZ2V0KGZpZWxkLm5hbWUpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhLmN1c3RvbVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdChmaWVsZC5uYW1lLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGZpZWxkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yczogX3ZtLmVycm9yc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YS50eXBlID09PSBcImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwidnVlLWZvcm0taW5wdXRcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZTogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLm1ldGEudHlwZSA9PT0gXCJzZWxlY3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJ2dWUtc2VsZWN0XCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImhhcy1lcnJvclwiOiBfdm0uZXJyb3JzLmhhcyhmaWVsZC5uYW1lKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBmaWVsZC5tZXRhLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrZXktbWFwXCI6IGZpZWxkLm1ldGEua2V5TWFwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvdXJjZTogZmllbGQubWV0YS5zb3VyY2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbXVsdGlwbGU6IGZpZWxkLm1ldGEubXVsdGlwbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZpZWxkLm1ldGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChmaWVsZCwgXCJ2YWx1ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhLnR5cGUgPT09IFwiZGF0ZXBpY2tlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImRhdGVwaWNrZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogZmllbGQubWV0YS5mb3JtYXQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZTogZmllbGQubWV0YS50aW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiBmaWVsZC5tZXRhLmRpc2FibGVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmVycm9ycy5jbGVhcihmaWVsZC5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZWw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKCQkdikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRzZXQoZmllbGQsIFwidmFsdWVcIiwgJCR2KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubWV0YS50eXBlID09PSBcInRpbWVwaWNrZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXCJkYXRlcGlja2VyXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IGZpZWxkLm1ldGEuZm9ybWF0LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidGltZS1vbmx5XCI6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IGZpZWxkLm1ldGEuZGlzYWJsZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZXJyb3JzLmNsZWFyKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtb2RlbDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBmaWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHNldChmaWVsZCwgXCJ2YWx1ZVwiLCAkJHYpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHByZXNzaW9uOiBcImZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5tZXRhLnR5cGUgPT09IFwidGV4dGFyZWFcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb250cm9sIGhhcy1pY29ucy1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInRleHRhcmVhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwibW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZmllbGQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJmaWVsZC52YWx1ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJ0ZXh0YXJlYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1kYW5nZXJcIjogX3ZtLmVycm9ycy5oYXMoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcm93czogZmllbGQubWV0YS5yb3dzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogZmllbGQubWV0YS5kaXNhYmxlZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvbVByb3BzOiB7IHZhbHVlOiBmaWVsZC52YWx1ZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXQ6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuY2xlYXIoZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5lcnJvcnMuaGFzKGZpZWxkLm5hbWUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImljb24gaXMtc21hbGwgaXMtcmlnaHQgaGFzLXRleHQtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZmFzIGZhLWV4Y2xhbWF0aW9uLXRyaWFuZ2xlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICApLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX2MoXCJoclwiKSxcbiAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgIF92bS5kYXRhLmFjdGlvbnMuZGVzdHJveVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgY2xhc3M6IF92bS5kYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24uY2xhc3MsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLmRhdGEuYWN0aW9ucy5kZXN0cm95LmZvcmJpZGRlbiB9LFxuICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLnNob3dNb2RhbCA9IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oX3ZtLmRhdGEuYWN0aW9ucy5kZXN0cm95LmJ1dHRvbi5sYWJlbCkpXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IGNsYXNzOiBfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3kuYnV0dG9uLmljb24gfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmRhdGEuYWN0aW9ucy5jcmVhdGVcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBfdm0uZGF0YS5hY3Rpb25zLmNyZWF0ZS5idXR0b24uY2xhc3MsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyBkaXNhYmxlZDogX3ZtLmRhdGEuYWN0aW9ucy5jcmVhdGUuZm9yYmlkZGVuIH0sXG4gICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uY3JlYXRlKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX18oX3ZtLmRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmxhYmVsKSkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwgeyBjbGFzczogX3ZtLmRhdGEuYWN0aW9ucy5jcmVhdGUuYnV0dG9uLmljb24gfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmRhdGEuYWN0aW9ucy5zdG9yZVxuICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImJ1dHRvbiBpcy1wdWxsZWQtcmlnaHRcIixcbiAgICAgICAgICAgICAgICAgIGNsYXNzOiBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5kYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgICB7IFwiaXMtbG9hZGluZ1wiOiBfdm0ubG9hZGluZyB9XG4gICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJzdWJtaXRcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6IF92bS5kYXRhLmFjdGlvbnMuc3RvcmUuZm9yYmlkZGVuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fXyhfdm0uZGF0YS5hY3Rpb25zLnN0b3JlLmJ1dHRvbi5sYWJlbCkpKVxuICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5kYXRhLmFjdGlvbnMuc3RvcmUuYnV0dG9uLmljb24gfSlcbiAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgX3ZtLmRhdGEuYWN0aW9ucy51cGRhdGVcbiAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJidXR0b24gaXMtcHVsbGVkLXJpZ2h0XCIsXG4gICAgICAgICAgICAgICAgICBjbGFzczogW1xuICAgICAgICAgICAgICAgICAgICBfdm0uZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24uY2xhc3MsXG4gICAgICAgICAgICAgICAgICAgIHsgXCJpcy1sb2FkaW5nXCI6IF92bS5sb2FkaW5nIH1cbiAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICB0eXBlOiBcInN1Ym1pdFwiLFxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZDogX3ZtLmRhdGEuYWN0aW9ucy51cGRhdGUuZm9yYmlkZGVuXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fXyhfdm0uZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24ubGFiZWwpKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaVwiLCB7IGNsYXNzOiBfdm0uZGF0YS5hY3Rpb25zLnVwZGF0ZS5idXR0b24uaWNvbiB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgIClcbiAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImlzLWNsZWFyZml4XCIgfSlcbiAgICAgICAgXVxuICAgICAgKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfdm0uZGF0YS5hY3Rpb25zLmRlc3Ryb3lcbiAgICAgICAgPyBfYyhcIm1vZGFsXCIsIHtcbiAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgIHNob3c6IF92bS5zaG93TW9kYWwsXG4gICAgICAgICAgICAgIF9fOiBfdm0uX18sXG4gICAgICAgICAgICAgIG1lc3NhZ2U6IF92bS5kYXRhLmFjdGlvbnMuZGVzdHJveS5idXR0b24ubWVzc2FnZVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgIFwiY2FuY2VsLWFjdGlvblwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBfdm0uc2hvd01vZGFsID0gZmFsc2VcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXCJjb21taXQtYWN0aW9uXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgIF92bS5kZXN0cm95KClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pXG4gICAgICAgIDogX3ZtLl9lKClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xYjUyZTkyN1wiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMWI1MmU5MjdcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby92dWVmb3Jtcy9WdWVGb3JtLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTEyOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEgMyAxMiAxMyAxNCAxNSAxNiAxNyAxOCAxOSAyMCAyMSAyMiAyMyAyNCAyNSAyNiAyNyIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLWNlbnRlcmVkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtdGhyZWUtcXVhcnRlcnNcIj5cbiAgICAgICAgICAgIDx2dWUtZm9ybSA6ZGF0YT1cImZvcm1cIlxuICAgICAgICAgICAgICAgIGNsYXNzPVwiYm94IGFuaW1hdGVkIGZhZGVJblwiXG4gICAgICAgICAgICAgICAgdi1pZj1cImluaXRpYWxpc2VkXCI+XG4gICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJpY29uXCIgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGhhcy1pY29ucy1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiaW5wdXRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWRhbmdlcic6IHByb3BzLmVycm9ycy5oYXMoJ2ljb24nKSB9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAa2V5ZG93bj1cInByb3BzLmVycm9ycy5jbGVhcihwcm9wcy5maWVsZC5uYW1lKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1tb2RlbD1cInByb3BzLmZpZWxkLnZhbHVlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uIGlzLXNtYWxsIGlzLXJpZ2h0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwicHJvcHMuZXJyb3JzLmhhcygnaWNvbicpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYXMgZmEtZXhjbGFtYXRpb24tdHJpYW5nbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb24gaXMtc21hbGwgaXMtcmlnaHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJwcm9wcy5maWVsZC52YWx1ZVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvdnVlLWZvcm0+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgVnVlRm9ybSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Vuc28vdnVlZm9ybXMvVnVlRm9ybS52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBWdWVGb3JtIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdGlhbGlzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgZm9ybToge30sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIGNyZWF0ZWQoKSB7XG4gICAgICAgIGF4aW9zLmdldChyb3V0ZSh0aGlzLiRyb3V0ZS5uYW1lLCBudWxsLCBmYWxzZSkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmZvcm0gPSByZXNwb25zZS5kYXRhLmZvcm07XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgIH0sXG59O1xuXG48L3NjcmlwdD5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL3N5c3RlbS9tZW51cy9DcmVhdGUudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtY2VudGVyZWRcIiB9LCBbXG4gICAgX2MoXG4gICAgICBcImRpdlwiLFxuICAgICAgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtdGhyZWUtcXVhcnRlcnNcIiB9LFxuICAgICAgW1xuICAgICAgICBfdm0uaW5pdGlhbGlzZWRcbiAgICAgICAgICA/IF9jKFwidnVlLWZvcm1cIiwge1xuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJib3ggYW5pbWF0ZWQgZmFkZUluXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IGRhdGE6IF92bS5mb3JtIH0sXG4gICAgICAgICAgICAgIHNjb3BlZFNsb3RzOiBfdm0uX3UoW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIGtleTogXCJpY29uXCIsXG4gICAgICAgICAgICAgICAgICBmbjogZnVuY3Rpb24ocHJvcHMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbnRyb2wgaGFzLWljb25zLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRpcmVjdGl2ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcm9wcy5maWVsZC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHJlc3Npb246IFwicHJvcHMuZmllbGQudmFsdWVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaW5wdXRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHsgXCJpcy1kYW5nZXJcIjogcHJvcHMuZXJyb3JzLmhhcyhcImljb25cIikgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgdHlwZTogXCJ0ZXh0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHsgdmFsdWU6IHByb3BzLmZpZWxkLnZhbHVlIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5ZG93bjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5lcnJvcnMuY2xlYXIocHJvcHMuZmllbGQubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0OiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5maWVsZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJ2YWx1ZVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5lcnJvcnMuaGFzKFwiaWNvblwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZhcyBmYS1leGNsYW1hdGlvbi10cmlhbmdsZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA6IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGwgaXMtcmlnaHRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IGNsYXNzOiBwcm9wcy5maWVsZC52YWx1ZSB9KV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgXSxcbiAgICAgIDFcbiAgICApXG4gIF0pXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW11cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTY4NjRmOWVhXCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi02ODY0ZjllYVwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvc3lzdGVtL21lbnVzL0NyZWF0ZS52dWVcbi8vIG1vZHVsZSBpZCA9IDE1MjNcbi8vIG1vZHVsZSBjaHVua3MgPSAyNCJdLCJzb3VyY2VSb290IjoiIn0=