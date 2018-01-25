webpackJsonp([31],{

/***/ 1072:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1433)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1435)
/* template */
var __vue_template__ = __webpack_require__(1436)
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
Component.options.__file = "resources/assets/js/pages/administration/users/Show.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-18a3cb48", Component.options)
  } else {
    hotAPI.reload("data-v-18a3cb48", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1228:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1229)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1231)
/* template */
var __vue_template__ = __webpack_require__(1232)
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
Component.options.__file = "resources/assets/js/components/enso/fileuploader/FileUploader.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-45987a88", Component.options)
  } else {
    hotAPI.reload("data-v-45987a88", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1229:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1230);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("8bc5a264", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45987a88\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FileUploader.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-45987a88\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./FileUploader.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1230:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nform.file-upload {\n    display: inline-table;\n}\nbutton.file-upload {\n    background: transparent;\n}\n.file-input.hidden {\n    display: none;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/fileuploader/resources/assets/js/components/enso/fileuploader/FileUploader.vue"],"names":[],"mappings":";AAqHA;IACA,sBAAA;CACA;AAEA;IACA,wBAAA;CACA;AAEA;IACA,cAAA;CACA","file":"FileUploader.vue","sourcesContent":["<template>\n\n    <form class=\"file-upload is-marginless\"\n        @submit.prevent>\n        <div class=\"file\">\n            <label class=\"file-label\">\n                <input :multiple=\"multiple\"\n                    class=\"file-input hidden\"\n                    type=\"file\"\n                    ref=\"input\"\n                    @change=\"upload\">\n                    <slot name=\"upload-button\"\n                        :open-file-browser=\"openFileBrowser\"\n                        @click=\"openFileBrowser\">\n                        <a class=\"icon is-small\">\n                            <fa icon=\"upload\"></fa>\n                        </a>\n                    </slot>\n            </label>\n        </div>\n    </form>\n\n</template>\n\n<script>\n\nimport fontawesome from '@fortawesome/fontawesome';\nimport { faUpload } from '@fortawesome/fontawesome-free-solid/shakable.es';\n\nfontawesome.library.add(faUpload);\n\nexport default {\n    props: {\n        multiple: {\n            type: Boolean,\n            default: false,\n        },\n        url: {\n            type: String,\n            required: true,\n        },\n        fileSizeLimit: {\n            type: Number,\n            default: 8388608,\n            validator: value => value <= 8388608,\n        },\n        params: {\n            type: Object,\n            default: null,\n        },\n    },\n\n    data() {\n        return {\n            input: null,\n            formData: new FormData(),\n        };\n    },\n\n    methods: {\n        openFileBrowser() {\n            this.$refs.input.click();\n        },\n        upload() {\n            this.$emit('upload-start');\n            this.setFormData();\n\n            axios.post(this.url, this.formData).then((response) => {\n                this.reset();\n                this.$emit('upload-successful', response.data);\n            }).catch((error) => {\n                this.reset();\n                this.$emit('upload-error');\n                this.handleError(error);\n            });\n        },\n        setFormData() {\n            const { files } = this.$refs.input;\n            this.addFiles(files);\n            this.addParams();\n        },\n        addFiles(files) {\n            for (let i = 0; i < files.length; i++) {\n                if (this.sizeCheckPasses(files[i])) {\n                    this.formData.append(`file_${i}`, files[i]);\n                }\n            }\n        },\n        addParams() {\n            if (this.params) {\n                Object.entries(this.params).forEach(([key, param]) => {\n                    const value = typeof param === 'object'\n                        ? JSON.stringify(param)\n                        : param;\n\n                    this.formData.append(key, value);\n                });\n            }\n        },\n        sizeCheckPasses(file) {\n            if (file.size > this.fileSizeLimit) {\n                this.$toastr.warning(`File size Limit of ${this.fileSizeLimit} Kb excedeed by ${file.name}`);\n                return false;\n            }\n\n            return true;\n        },\n        reset() {\n            this.$el.reset();\n            this.formData = new FormData();\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    form.file-upload {\n        display: inline-table;\n    }\n\n    button.file-upload {\n        background: transparent;\n    }\n\n    .file-input.hidden {\n        display: none;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(11);
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





__WEBPACK_IMPORTED_MODULE_0__fortawesome_fontawesome__["default"].library.add(__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome_free_solid_shakable_es__["_16" /* faUpload */]);

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        multiple: {
            type: Boolean,
            default: false
        },
        url: {
            type: String,
            required: true
        },
        fileSizeLimit: {
            type: Number,
            default: 8388608,
            validator: function validator(value) {
                return value <= 8388608;
            }
        },
        params: {
            type: Object,
            default: null
        }
    },

    data: function data() {
        return {
            input: null,
            formData: new FormData()
        };
    },


    methods: {
        openFileBrowser: function openFileBrowser() {
            this.$refs.input.click();
        },
        upload: function upload() {
            var _this = this;

            this.$emit('upload-start');
            this.setFormData();

            axios.post(this.url, this.formData).then(function (response) {
                _this.reset();
                _this.$emit('upload-successful', response.data);
            }).catch(function (error) {
                _this.reset();
                _this.$emit('upload-error');
                _this.handleError(error);
            });
        },
        setFormData: function setFormData() {
            var files = this.$refs.input.files;

            this.addFiles(files);
            this.addParams();
        },
        addFiles: function addFiles(files) {
            for (var i = 0; i < files.length; i++) {
                if (this.sizeCheckPasses(files[i])) {
                    this.formData.append('file_' + i, files[i]);
                }
            }
        },
        addParams: function addParams() {
            var _this2 = this;

            if (this.params) {
                Object.entries(this.params).forEach(function (_ref) {
                    var _ref2 = _slicedToArray(_ref, 2),
                        key = _ref2[0],
                        param = _ref2[1];

                    var value = (typeof param === 'undefined' ? 'undefined' : _typeof(param)) === 'object' ? JSON.stringify(param) : param;

                    _this2.formData.append(key, value);
                });
            }
        },
        sizeCheckPasses: function sizeCheckPasses(file) {
            if (file.size > this.fileSizeLimit) {
                this.$toastr.warning('File size Limit of ' + this.fileSizeLimit + ' Kb excedeed by ' + file.name);
                return false;
            }

            return true;
        },
        reset: function reset() {
            this.$el.reset();
            this.formData = new FormData();
        }
    }
});

/***/ }),

/***/ 1232:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "form",
    {
      staticClass: "file-upload is-marginless",
      on: {
        submit: function($event) {
          $event.preventDefault()
        }
      }
    },
    [
      _c("div", { staticClass: "file" }, [
        _c(
          "label",
          { staticClass: "file-label" },
          [
            _c("input", {
              ref: "input",
              staticClass: "file-input hidden",
              attrs: { multiple: _vm.multiple, type: "file" },
              on: { change: _vm.upload }
            }),
            _vm._v(" "),
            _vm._t(
              "upload-button",
              [
                _c(
                  "a",
                  { staticClass: "icon is-small" },
                  [_c("fa", { attrs: { icon: "upload" } })],
                  1
                )
              ],
              { openFileBrowser: _vm.openFileBrowser }
            )
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-45987a88", module.exports)
  }
}

/***/ }),

/***/ 1433:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1434);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(3)("7780d369", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18a3cb48\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue", function() {
     var newContent = require("!!../../../../../../node_modules/css-loader/index.js?sourceMap!../../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-18a3cb48\",\"scoped\":false,\"hasInlineConfig\":true}!../../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Show.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1434:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.has-lateral-borders {\n    border-left: 1px solid rgba(0,0,0,0.2);\n    border-right: 1px solid rgba(0,0,0,0.2);\n}\n.stat-value {\n    font-size: 3em;\n    padding-top: 12px;\n}\n.stat-key {\n    font-size: 1.4em;\n    font-weight: 200;\n    padding-bottom: 8px;\n}\n.level.user-controls {\n    margin-bottom: 0;\n}\n.timeline-content {\n    -webkit-transition:all 1s ease;\n    transition:all 1s ease;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/pages/administration/users/resources/assets/js/pages/administration/users/Show.vue"],"names":[],"mappings":";AA+WA;IACA,uCAAA;IACA,wCAAA;CACA;AAEA;IACA,eAAA;IACA,kBAAA;CACA;AAEA;IACA,iBAAA;IACA,iBAAA;IACA,oBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,+BAAA;IAAA,uBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n\n    <div v-if=\"initialised\">\n        <div class=\"box profile-heading\">\n            <div class=\"columns is-multiline\">\n                <div class=\"column is-half-desktop\">\n                    <div class=\"columns is-mobile\">\n                        <div class=\"column is-narrow\">\n                            <div class=\"image is-128x128\">\n                                <img :src=\"avatarLink\">\n                            </div>\n                        </div>\n                        <div class=\"column\">\n                            <div class=\"level\">\n                                <div class=\"level-item has-padding-top-small\">\n                                    <div>\n                                        <p class=\"title is-3\">{{ profileUser.fullName }}</p>\n                                        <p>{{ __('role') }}: {{ profileUser.role.name }}</p>\n                                        <p>{{ __('since') }}: {{ profileUser.created_at }}</p>\n                                        <p class=\"has-margin-top-small\">\n                                            <div class=\"level user-controls\"\n                                                v-if=\"isSelfVisiting\">\n                                                <div class=\"level-left\">\n                                                    <button class=\"button is-small is-warning\"\n                                                        v-if=\"avatarId\"\n                                                        @click=\"deleteAvatar\">\n                                                        <span class=\"icon\">\n                                                            <fa icon=\"trash-alt\"></fa>\n                                                        </span>\n                                                        <span>\n                                                            {{ __('Avatar') }}\n                                                        </span>\n                                                    </button>\n                                                    <file-uploader v-if=\"!avatarId\"\n                                                        @upload-successful=\"$store.commit('setUserAvatar', $event.id)\"\n                                                        :url=\"uploadAvatarLink\">\n                                                        <template slot=\"upload-button\"\n                                                            slot-scope=\"props\">\n                                                            <button  class=\"button is-small is-info\"\n                                                                @click=\"props.openFileBrowser\">\n                                                                <span class=\"icon\">\n                                                                    <fa icon=\"upload\"></fa>\n                                                                </span>\n                                                                <span>\n                                                                    {{ __('Avatar') }}\n                                                                </span>\n                                                            </button>\n                                                        </template>\n                                                    </file-uploader>\n                                                </div>\n                                                <div class=\"level-right\">\n                                                    <button class=\"button is-small is-danger\"\n                                                        @click=\"logout()\">\n                                                        <span class=\"icon\">\n                                                            <fa icon=\"sign-out-alt\"></fa>\n                                                        </span>\n                                                        <span>\n                                                            {{ __('Log Out') }}\n                                                        </span>\n                                                    </button>\n                                                </div>\n                                            </div>\n                                            <div v-else>\n                                                <button class=\"button is-small is-warning\"\n                                                    @click=\"$bus.$emit('start-impersonating', profileUser.id)\"\n                                                    v-if=\"!$store.state.impersonating\">\n                                                    {{ __('Impersonate') }}\n                                                </button>\n                                            </div>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"column is-half-desktop\">\n                    <div class=\"columns is-mobile\">\n                        <div class=\"column has-text-centered\">\n                          <p class=\"stat-value\">{{ profileUser.loginCount }}</p>\n                          <p class=\"stat-key\">{{ __('logins') }}</p>\n                        </div>\n                        <div class=\"column has-text-centered has-lateral-borders\">\n                          <p class=\"stat-value\">{{ profileUser.actionLogCount }}</p>\n                          <p class=\"stat-key\">{{ __('actions') }}</p>\n                        </div>\n                        <div class=\"column has-text-centered\">\n                          <p class=\"stat-value\">{{ profileUser.rating }}</p>\n                          <p class=\"stat-key\">{{ __('rating') }}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"columns is-centered\">\n            <div class=\"column is-two-thirds-tablet\">\n                <div class=\"box\">\n                    <nav class=\"pagination is-small has-margin-bottom-large\">\n                        <a class=\"pagination-previous\"\n                            @click=\"getPage(profileUser.timeline.current_page - 1)\"\n                            :disabled=\"profileUser.timeline.prev_page_url===null\">\n                            {{ __('Previous') }}\n                        </a>\n                        <a class=\"pagination-next\"\n                            @click=\"getPage(profileUser.timeline.current_page + 1)\"\n                            :disabled=\"profileUser.timeline.next_page_url===null\">\n                            {{ __('Next') }}\n                        </a>\n                        <ul class=\"pagination-list\" v-if=\"isShort\">\n                            <li v-for=\"i in profileUser.timeline.last_page\"\n                                :key=\"i\">\n                                <a class=\"pagination-link\"\n                                    :class=\"{ 'is-current': profileUser.timeline.current_page === i}\"\n                                    @click=\"getPage(i)\">\n                                    {{ i }}\n                                </a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination-list\" v-if=\"isAtStart && !isShort\">\n                            <li v-for=\"i in 3\"\n                                :key=\"i\">\n                                <a class=\"pagination-link\"\n                                    :class=\"{ 'is-current': profileUser.timeline.current_page === i}\"\n                                    @click=\"getPage(i)\">\n                                    {{ i }}\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.last_page)\">\n                                    {{ profileUser.timeline.last_page }}\n                                </a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination-list\" v-if=\"hasMiddle && !isShort\">\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(1)\">\n                                    1\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.current_page - 1)\">\n                                    {{ profileUser.timeline.current_page - 1 }}\n                                </a>\n                            </li>\n                            <li>\n                                <a class=\"pagination-link is-current\">\n                                    {{ profileUser.timeline.current_page }}\n                                </a>\n                            </li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.current_page + 1)\">\n                                    {{ profileUser.timeline.current_page + 1 }}\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.last_page)\">\n                                    {{ profileUser.timeline.last_page }}\n                                </a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination-list\" v-if=\"isAtEnd && !isShort\">\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(1)\">\n                                    1\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li v-for=\"i in 3\"\n                                :key=\"i\">\n                                <a class=\"pagination-link\"\n                                    :class=\"{ 'is-current': profileUser.timeline.current_page === profileUser.timeline.last_page - 3 + i}\"\n                                    @click=\"getPage(profileUser.timeline.last_page - 3 + i)\">\n                                    {{ profileUser.timeline.last_page - 3 + i }}\n                                </a>\n                            </li>\n                        </ul>\n                    </nav>\n                    <ul class=\"timeline has-padding-large\">\n                        <div v-for=\"(actions, day) in timeline\"\n                            class=\"timeline-content\"\n                            :key=\"day\">\n                            <li class=\"timeline-header\">\n                                <span class=\"tag is-medium is-primary\">{{ __(day) }}</span>\n                            </li>\n                            <!-- <li class=\"timeline-item\">\n                                <div class=\"timeline-marker\"></div>\n                                <div class=\"timeline-content\">\n                                    <p class=\"heading\">January 2016</p>\n                                    <p>Timeline content - Can include any HTML element</p>\n                                </div>\n                            </li> -->\n                            <li class=\"timeline-item\"\n                                v-for=\"(action, index) in actions\"\n                                :key=\"index\">\n                                <div class=\"timeline-marker is-icon\"\n                                    :class=\"getClass(action.route)\">\n                                    <fa :icon=\"getIcon(action.route)\" size=\"xs\"></fa>\n                                </div>\n                                <div class=\"timeline-content\">\n                                    <p class=\"heading\">{{ getHRDate(action.created_at) }} {{ getHRTime(action.created_at) }}</p>\n                                    <p>{{ action.permission.description }}</p>\n                                </div>\n                            </li>\n                        </div>\n                        <li class=\"timeline-header\"\n                            v-if=\"profileUser.timeline.current_page === profileUser.timeline.last_page\">\n                            <span class=\"tag is-medium is-primary\">{{ __('End') }}</span>\n                        </li>\n                        <li class=\"timeline-item\"\n                            v-else>\n                            <div class=\"timeline-marker is-icon\">\n                                <fa icon=\"ellipsis-h\" size=\"xs\"></fa>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport { mapGetters, mapState } from 'vuex';\nimport fontawesome from '@fortawesome/fontawesome';\nimport {\n    faTrashAlt, faUpload, faSignOutAlt, faEllipsisH,\n    faEye, faPlus, faPencilAlt,\n} from '@fortawesome/fontawesome-free-solid/shakable.es';\nimport FileUploader from '../../../components/enso/fileuploader/FileUploader.vue';\n\nfontawesome.library.add([\n    faTrashAlt, faUpload, faSignOutAlt, faEllipsisH,\n    faEye, faPlus, faPencilAlt,\n]);\n\nexport default {\n    components: { FileUploader },\n\n    computed: {\n        ...mapGetters('locale', {\n            __: '__',\n            locale: 'current',\n        }),\n        ...mapState(['user', 'meta']),\n        uploadAvatarLink() {\n            return route('core.avatars.store', [], false);\n        },\n        isSelfVisiting() {\n            return this.user.id === this.profileUser.id;\n        },\n        avatarId() {\n            if (this.isSelfVisiting) {\n                return this.user.avatarId;\n            }\n\n            return this.profileUser.avatar ? this.profileUser.avatar.id : null;\n        },\n        avatarLink() {\n            return route('core.avatars.show', (this.avatarId || 'null'), false);\n        },\n        timeline() {\n            const actions = this.profileUser.timeline.data;\n\n            return actions.map(action => action.created_at).reduce((days, record) => {\n                days.push(this.getDay(record));\n                return days;\n            }, []).filter((value, index, days) => days.indexOf(value) === index)\n                .reduce((timeline, day) => {\n                    timeline[day] = actions\n                        .filter(record => this.getDay(record.created_at) === day);\n                    return timeline;\n                }, {});\n        },\n        isShort() {\n            return this.profileUser.timeline.last_page <= 5;\n        },\n        isAtStart() {\n            return this.profileUser.timeline.current_page <= 2;\n        },\n        isAtEnd() {\n            return this.profileUser.timeline.last_page\n                - this.profileUser.timeline.current_page <= 2;\n        },\n        hasMiddle() {\n            return !this.isAtStart && !this.isAtEnd;\n        },\n        paginationUrl() {\n            return `${route('administration.users.show', [this.profileUser.id], false)}?page=`;\n        },\n    },\n\n    data() {\n        return {\n            initialised: false,\n            profileUser: {},\n        };\n    },\n\n    watch: {\n        locale: {\n            handler() {\n                this.getPage(this.profileUser.timeline.current_page);\n            },\n        },\n    },\n\n    methods: {\n        deleteAvatar() {\n            axios.delete(route('core.avatars.destroy', this.user.avatarId, false)).then(() => {\n                this.$store.commit('setUserAvatar', null);\n            }).catch(error => this.handleError(error));\n        },\n        logout() {\n            axios.post(route('logout', [], false).toString()).then(() => {\n                this.$store.dispatch('auth/logout');\n            }).catch(error => this.handleError(error));\n        },\n        getDay(timestamp) {\n            return moment(timestamp).calendar().split(' ')[0];\n        },\n        getHRDate(timestamp) {\n            return moment(timestamp).format(this.meta.dateFormat);\n        },\n        getHRTime(timestamp) {\n            return moment(timestamp).format('H:mm');\n        },\n        getIcon(action) {\n            if (action.indexOf('index') > 0) return faEye;\n            if (action.indexOf('create') > 0) return faPlus;\n            if (action.indexOf('edit') > 0) return faPencilAlt;\n            return faTrashAlt;\n        },\n        getClass(action) {\n            if (action.indexOf('index') > 0) return 'has-text-success';\n            if (action.indexOf('create') > 0) return 'has-text-warning';\n            if (action.indexOf('edit') > 0) return 'has-text-warning';\n            return 'has-text-danger';\n        },\n        getPage(page) {\n            axios.get(this.paginationUrl + page).then(({ data }) => {\n                this.profileUser = data.user;\n            }).catch(error => this.handleError(error));\n        },\n    },\n\n    mounted() {\n        axios.get(route(this.$route.name, this.$route.params.id, false)).then((response) => {\n            this.profileUser = response.data.user;\n            this.initialised = true;\n        }).catch(error => this.handleError(error));\n    },\n};\n\n</script>\n\n<style>\n\n    .has-lateral-borders {\n        border-left: 1px solid rgba(0,0,0,0.2);\n        border-right: 1px solid rgba(0,0,0,0.2);\n    }\n\n    .stat-value {\n        font-size: 3em;\n        padding-top: 12px;\n    }\n\n    .stat-key {\n        font-size: 1.4em;\n        font-weight: 200;\n        padding-bottom: 8px;\n    }\n\n    .level.user-controls {\n        margin-bottom: 0;\n    }\n\n    .timeline-content {\n        transition:all 1s ease;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1435:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_enso_fileuploader_FileUploader_vue__ = __webpack_require__(1228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_enso_fileuploader_FileUploader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_enso_fileuploader_FileUploader_vue__);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//







__WEBPACK_IMPORTED_MODULE_1__fortawesome_fontawesome__["default"].library.add([__WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_13" /* faTrashAlt */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_16" /* faUpload */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_2" /* faSignOutAlt */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["E" /* faEllipsisH */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["H" /* faEye */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["Y" /* faPlus */], __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["W" /* faPencilAlt */]]);

/* harmony default export */ __webpack_exports__["default"] = ({
    components: { FileUploader: __WEBPACK_IMPORTED_MODULE_3__components_enso_fileuploader_FileUploader_vue___default.a },

    computed: _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["c" /* mapGetters */])('locale', {
        __: '__',
        locale: 'current'
    }), Object(__WEBPACK_IMPORTED_MODULE_0_vuex__["e" /* mapState */])(['user', 'meta']), {
        uploadAvatarLink: function uploadAvatarLink() {
            return route('core.avatars.store', [], false);
        },
        isSelfVisiting: function isSelfVisiting() {
            return this.user.id === this.profileUser.id;
        },
        avatarId: function avatarId() {
            if (this.isSelfVisiting) {
                return this.user.avatarId;
            }

            return this.profileUser.avatar ? this.profileUser.avatar.id : null;
        },
        avatarLink: function avatarLink() {
            return route('core.avatars.show', this.avatarId || 'null', false);
        },
        timeline: function timeline() {
            var _this = this;

            var actions = this.profileUser.timeline.data;

            return actions.map(function (action) {
                return action.created_at;
            }).reduce(function (days, record) {
                days.push(_this.getDay(record));
                return days;
            }, []).filter(function (value, index, days) {
                return days.indexOf(value) === index;
            }).reduce(function (timeline, day) {
                timeline[day] = actions.filter(function (record) {
                    return _this.getDay(record.created_at) === day;
                });
                return timeline;
            }, {});
        },
        isShort: function isShort() {
            return this.profileUser.timeline.last_page <= 5;
        },
        isAtStart: function isAtStart() {
            return this.profileUser.timeline.current_page <= 2;
        },
        isAtEnd: function isAtEnd() {
            return this.profileUser.timeline.last_page - this.profileUser.timeline.current_page <= 2;
        },
        hasMiddle: function hasMiddle() {
            return !this.isAtStart && !this.isAtEnd;
        },
        paginationUrl: function paginationUrl() {
            return route('administration.users.show', [this.profileUser.id], false) + '?page=';
        }
    }),

    data: function data() {
        return {
            initialised: false,
            profileUser: {}
        };
    },


    watch: {
        locale: {
            handler: function handler() {
                this.getPage(this.profileUser.timeline.current_page);
            }
        }
    },

    methods: {
        deleteAvatar: function deleteAvatar() {
            var _this2 = this;

            axios.delete(route('core.avatars.destroy', this.user.avatarId, false)).then(function () {
                _this2.$store.commit('setUserAvatar', null);
            }).catch(function (error) {
                return _this2.handleError(error);
            });
        },
        logout: function logout() {
            var _this3 = this;

            axios.post(route('logout', [], false).toString()).then(function () {
                _this3.$store.dispatch('auth/logout');
            }).catch(function (error) {
                return _this3.handleError(error);
            });
        },
        getDay: function getDay(timestamp) {
            return moment(timestamp).calendar().split(' ')[0];
        },
        getHRDate: function getHRDate(timestamp) {
            return moment(timestamp).format(this.meta.dateFormat);
        },
        getHRTime: function getHRTime(timestamp) {
            return moment(timestamp).format('H:mm');
        },
        getIcon: function getIcon(action) {
            if (action.indexOf('index') > 0) return __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["H" /* faEye */];
            if (action.indexOf('create') > 0) return __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["Y" /* faPlus */];
            if (action.indexOf('edit') > 0) return __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["W" /* faPencilAlt */];
            return __WEBPACK_IMPORTED_MODULE_2__fortawesome_fontawesome_free_solid_shakable_es__["_13" /* faTrashAlt */];
        },
        getClass: function getClass(action) {
            if (action.indexOf('index') > 0) return 'has-text-success';
            if (action.indexOf('create') > 0) return 'has-text-warning';
            if (action.indexOf('edit') > 0) return 'has-text-warning';
            return 'has-text-danger';
        },
        getPage: function getPage(page) {
            var _this4 = this;

            axios.get(this.paginationUrl + page).then(function (_ref) {
                var data = _ref.data;

                _this4.profileUser = data.user;
            }).catch(function (error) {
                return _this4.handleError(error);
            });
        }
    },

    mounted: function mounted() {
        var _this5 = this;

        axios.get(route(this.$route.name, this.$route.params.id, false)).then(function (response) {
            _this5.profileUser = response.data.user;
            _this5.initialised = true;
        }).catch(function (error) {
            return _this5.handleError(error);
        });
    }
});

/***/ }),

/***/ 1436:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm.initialised
    ? _c("div", [
        _c("div", { staticClass: "box profile-heading" }, [
          _c("div", { staticClass: "columns is-multiline" }, [
            _c("div", { staticClass: "column is-half-desktop" }, [
              _c("div", { staticClass: "columns is-mobile" }, [
                _c("div", { staticClass: "column is-narrow" }, [
                  _c("div", { staticClass: "image is-128x128" }, [
                    _c("img", { attrs: { src: _vm.avatarLink } })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "column" }, [
                  _c("div", { staticClass: "level" }, [
                    _c(
                      "div",
                      { staticClass: "level-item has-padding-top-small" },
                      [
                        _c("div", [
                          _c("p", { staticClass: "title is-3" }, [
                            _vm._v(_vm._s(_vm.profileUser.fullName))
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.__("role")) +
                                ": " +
                                _vm._s(_vm.profileUser.role.name)
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              _vm._s(_vm.__("since")) +
                                ": " +
                                _vm._s(_vm.profileUser.created_at)
                            )
                          ]),
                          _vm._v(" "),
                          _c("p", { staticClass: "has-margin-top-small" }),
                          _vm.isSelfVisiting
                            ? _c(
                                "div",
                                { staticClass: "level user-controls" },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "level-left" },
                                    [
                                      _vm.avatarId
                                        ? _c(
                                            "button",
                                            {
                                              staticClass:
                                                "button is-small is-warning",
                                              on: { click: _vm.deleteAvatar }
                                            },
                                            [
                                              _c(
                                                "span",
                                                { staticClass: "icon" },
                                                [
                                                  _c("fa", {
                                                    attrs: { icon: "trash-alt" }
                                                  })
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("span", [
                                                _vm._v(
                                                  "\n                                                        " +
                                                    _vm._s(_vm.__("Avatar")) +
                                                    "\n                                                    "
                                                )
                                              ])
                                            ]
                                          )
                                        : _vm._e(),
                                      _vm._v(" "),
                                      !_vm.avatarId
                                        ? _c("file-uploader", {
                                            attrs: {
                                              url: _vm.uploadAvatarLink
                                            },
                                            on: {
                                              "upload-successful": function(
                                                $event
                                              ) {
                                                _vm.$store.commit(
                                                  "setUserAvatar",
                                                  $event.id
                                                )
                                              }
                                            },
                                            scopedSlots: _vm._u([
                                              {
                                                key: "upload-button",
                                                fn: function(props) {
                                                  return [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "button is-small is-info",
                                                        on: {
                                                          click:
                                                            props.openFileBrowser
                                                        }
                                                      },
                                                      [
                                                        _c(
                                                          "span",
                                                          {
                                                            staticClass: "icon"
                                                          },
                                                          [
                                                            _c("fa", {
                                                              attrs: {
                                                                icon: "upload"
                                                              }
                                                            })
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c("span", [
                                                          _vm._v(
                                                            "\n                                                                " +
                                                              _vm._s(
                                                                _vm.__("Avatar")
                                                              ) +
                                                              "\n                                                            "
                                                          )
                                                        ])
                                                      ]
                                                    )
                                                  ]
                                                }
                                              }
                                            ])
                                          })
                                        : _vm._e()
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "level-right" }, [
                                    _c(
                                      "button",
                                      {
                                        staticClass:
                                          "button is-small is-danger",
                                        on: {
                                          click: function($event) {
                                            _vm.logout()
                                          }
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          { staticClass: "icon" },
                                          [
                                            _c("fa", {
                                              attrs: { icon: "sign-out-alt" }
                                            })
                                          ],
                                          1
                                        ),
                                        _vm._v(" "),
                                        _c("span", [
                                          _vm._v(
                                            "\n                                                        " +
                                              _vm._s(_vm.__("Log Out")) +
                                              "\n                                                    "
                                          )
                                        ])
                                      ]
                                    )
                                  ])
                                ]
                              )
                            : _c("div", [
                                !_vm.$store.state.impersonating
                                  ? _c(
                                      "button",
                                      {
                                        staticClass:
                                          "button is-small is-warning",
                                        on: {
                                          click: function($event) {
                                            _vm.$bus.$emit(
                                              "start-impersonating",
                                              _vm.profileUser.id
                                            )
                                          }
                                        }
                                      },
                                      [
                                        _vm._v(
                                          "\n                                                " +
                                            _vm._s(_vm.__("Impersonate")) +
                                            "\n                                            "
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]),
                          _vm._v(" "),
                          _c("p")
                        ])
                      ]
                    )
                  ])
                ])
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "column is-half-desktop" }, [
              _c("div", { staticClass: "columns is-mobile" }, [
                _c("div", { staticClass: "column has-text-centered" }, [
                  _c("p", { staticClass: "stat-value" }, [
                    _vm._v(_vm._s(_vm.profileUser.loginCount))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "stat-key" }, [
                    _vm._v(_vm._s(_vm.__("logins")))
                  ])
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  {
                    staticClass: "column has-text-centered has-lateral-borders"
                  },
                  [
                    _c("p", { staticClass: "stat-value" }, [
                      _vm._v(_vm._s(_vm.profileUser.actionLogCount))
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "stat-key" }, [
                      _vm._v(_vm._s(_vm.__("actions")))
                    ])
                  ]
                ),
                _vm._v(" "),
                _c("div", { staticClass: "column has-text-centered" }, [
                  _c("p", { staticClass: "stat-value" }, [
                    _vm._v(_vm._s(_vm.profileUser.rating))
                  ]),
                  _vm._v(" "),
                  _c("p", { staticClass: "stat-key" }, [
                    _vm._v(_vm._s(_vm.__("rating")))
                  ])
                ])
              ])
            ])
          ])
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "columns is-centered" }, [
          _c("div", { staticClass: "column is-two-thirds-tablet" }, [
            _c("div", { staticClass: "box" }, [
              _c(
                "nav",
                { staticClass: "pagination is-small has-margin-bottom-large" },
                [
                  _c(
                    "a",
                    {
                      staticClass: "pagination-previous",
                      attrs: {
                        disabled:
                          _vm.profileUser.timeline.prev_page_url === null
                      },
                      on: {
                        click: function($event) {
                          _vm.getPage(_vm.profileUser.timeline.current_page - 1)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.__("Previous")) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "a",
                    {
                      staticClass: "pagination-next",
                      attrs: {
                        disabled:
                          _vm.profileUser.timeline.next_page_url === null
                      },
                      on: {
                        click: function($event) {
                          _vm.getPage(_vm.profileUser.timeline.current_page + 1)
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n                        " +
                          _vm._s(_vm.__("Next")) +
                          "\n                    "
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _vm.isShort
                    ? _c(
                        "ul",
                        { staticClass: "pagination-list" },
                        _vm._l(_vm.profileUser.timeline.last_page, function(i) {
                          return _c("li", { key: i }, [
                            _c(
                              "a",
                              {
                                staticClass: "pagination-link",
                                class: {
                                  "is-current":
                                    _vm.profileUser.timeline.current_page === i
                                },
                                on: {
                                  click: function($event) {
                                    _vm.getPage(i)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(i) +
                                    "\n                            "
                                )
                              ]
                            )
                          ])
                        })
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isAtStart && !_vm.isShort
                    ? _c(
                        "ul",
                        { staticClass: "pagination-list" },
                        [
                          _vm._l(3, function(i) {
                            return _c("li", { key: i }, [
                              _c(
                                "a",
                                {
                                  staticClass: "pagination-link",
                                  class: {
                                    "is-current":
                                      _vm.profileUser.timeline.current_page ===
                                      i
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.getPage(i)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(i) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ])
                          }),
                          _vm._v(" "),
                          _vm._m(0),
                          _vm._v(" "),
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "pagination-link",
                                on: {
                                  click: function($event) {
                                    _vm.getPage(
                                      _vm.profileUser.timeline.last_page
                                    )
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                " +
                                    _vm._s(_vm.profileUser.timeline.last_page) +
                                    "\n                            "
                                )
                              ]
                            )
                          ])
                        ],
                        2
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.hasMiddle && !_vm.isShort
                    ? _c("ul", { staticClass: "pagination-list" }, [
                        _c("li", [
                          _c(
                            "a",
                            {
                              staticClass: "pagination-link",
                              on: {
                                click: function($event) {
                                  _vm.getPage(1)
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                1\n                            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(1),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              staticClass: "pagination-link",
                              on: {
                                click: function($event) {
                                  _vm.getPage(
                                    _vm.profileUser.timeline.current_page - 1
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.profileUser.timeline.current_page - 1
                                  ) +
                                  "\n                            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            { staticClass: "pagination-link is-current" },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.profileUser.timeline.current_page
                                  ) +
                                  "\n                            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              staticClass: "pagination-link",
                              on: {
                                click: function($event) {
                                  _vm.getPage(
                                    _vm.profileUser.timeline.current_page + 1
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(
                                    _vm.profileUser.timeline.current_page + 1
                                  ) +
                                  "\n                            "
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._m(2),
                        _vm._v(" "),
                        _c("li", [
                          _c(
                            "a",
                            {
                              staticClass: "pagination-link",
                              on: {
                                click: function($event) {
                                  _vm.getPage(
                                    _vm.profileUser.timeline.last_page
                                  )
                                }
                              }
                            },
                            [
                              _vm._v(
                                "\n                                " +
                                  _vm._s(_vm.profileUser.timeline.last_page) +
                                  "\n                            "
                              )
                            ]
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.isAtEnd && !_vm.isShort
                    ? _c(
                        "ul",
                        { staticClass: "pagination-list" },
                        [
                          _c("li", [
                            _c(
                              "a",
                              {
                                staticClass: "pagination-link",
                                on: {
                                  click: function($event) {
                                    _vm.getPage(1)
                                  }
                                }
                              },
                              [
                                _vm._v(
                                  "\n                                1\n                            "
                                )
                              ]
                            )
                          ]),
                          _vm._v(" "),
                          _vm._m(3),
                          _vm._v(" "),
                          _vm._l(3, function(i) {
                            return _c("li", { key: i }, [
                              _c(
                                "a",
                                {
                                  staticClass: "pagination-link",
                                  class: {
                                    "is-current":
                                      _vm.profileUser.timeline.current_page ===
                                      _vm.profileUser.timeline.last_page - 3 + i
                                  },
                                  on: {
                                    click: function($event) {
                                      _vm.getPage(
                                        _vm.profileUser.timeline.last_page -
                                          3 +
                                          i
                                      )
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                " +
                                      _vm._s(
                                        _vm.profileUser.timeline.last_page -
                                          3 +
                                          i
                                      ) +
                                      "\n                            "
                                  )
                                ]
                              )
                            ])
                          })
                        ],
                        2
                      )
                    : _vm._e()
                ]
              ),
              _vm._v(" "),
              _c(
                "ul",
                { staticClass: "timeline has-padding-large" },
                [
                  _vm._l(_vm.timeline, function(actions, day) {
                    return _c(
                      "div",
                      { key: day, staticClass: "timeline-content" },
                      [
                        _c("li", { staticClass: "timeline-header" }, [
                          _c(
                            "span",
                            { staticClass: "tag is-medium is-primary" },
                            [_vm._v(_vm._s(_vm.__(day)))]
                          )
                        ]),
                        _vm._v(" "),
                        _vm._l(actions, function(action, index) {
                          return _c(
                            "li",
                            { key: index, staticClass: "timeline-item" },
                            [
                              _c(
                                "div",
                                {
                                  staticClass: "timeline-marker is-icon",
                                  class: _vm.getClass(action.route)
                                },
                                [
                                  _c("fa", {
                                    attrs: {
                                      icon: _vm.getIcon(action.route),
                                      size: "xs"
                                    }
                                  })
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "timeline-content" }, [
                                _c("p", { staticClass: "heading" }, [
                                  _vm._v(
                                    _vm._s(_vm.getHRDate(action.created_at)) +
                                      " " +
                                      _vm._s(_vm.getHRTime(action.created_at))
                                  )
                                ]),
                                _vm._v(" "),
                                _c("p", [
                                  _vm._v(_vm._s(action.permission.description))
                                ])
                              ])
                            ]
                          )
                        })
                      ],
                      2
                    )
                  }),
                  _vm._v(" "),
                  _vm.profileUser.timeline.current_page ===
                  _vm.profileUser.timeline.last_page
                    ? _c("li", { staticClass: "timeline-header" }, [
                        _c(
                          "span",
                          { staticClass: "tag is-medium is-primary" },
                          [_vm._v(_vm._s(_vm.__("End")))]
                        )
                      ])
                    : _c("li", { staticClass: "timeline-item" }, [
                        _c(
                          "div",
                          { staticClass: "timeline-marker is-icon" },
                          [
                            _c("fa", {
                              attrs: { icon: "ellipsis-h", size: "xs" }
                            })
                          ],
                          1
                        )
                      ])
                ],
                2
              )
            ])
          ])
        ])
      ])
    : _vm._e()
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c("span", { staticClass: "pagination-ellipsis" }, [_vm._v("…")])
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-18a3cb48", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlPzk0MzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWU/MmQzNCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWU/MWQzMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlPzRiOGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9TaG93LnZ1ZT9kYmY0Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWU/ODYyNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5TTtBQUN6TTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7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aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xOGEzY2I0OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTE4YTNjYjQ4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMThhM2NiNDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xOGEzY2I0OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDMxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NTk4N2E4OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9GaWxlVXBsb2FkZXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9GaWxlVXBsb2FkZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00NTk4N2E4OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0ZpbGVVcGxvYWRlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ1OTg3YTg4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDU5ODdhODhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjI4XG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDMxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ1OTg3YTg4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ZpbGVVcGxvYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjhiYzVhMjY0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ1OTg3YTg4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ZpbGVVcGxvYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDU5ODdhODhcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRmlsZVVwbG9hZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00NTk4N2E4OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDEyMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAyIDMgMzEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZm9ybS5maWxlLXVwbG9hZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXG59XFxuYnV0dG9uLmZpbGUtdXBsb2FkIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5maWxlLWlucHV0LmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvRmlsZVVwbG9hZGVyLnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBcUhBO0lBQ0Esc0JBQUE7Q0FDQTtBQUVBO0lBQ0Esd0JBQUE7Q0FDQTtBQUVBO0lBQ0EsY0FBQTtDQUNBXCIsXCJmaWxlXCI6XCJGaWxlVXBsb2FkZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPGZvcm0gY2xhc3M9XFxcImZpbGUtdXBsb2FkIGlzLW1hcmdpbmxlc3NcXFwiXFxuICAgICAgICBAc3VibWl0LnByZXZlbnQ+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJmaWxlXFxcIj5cXG4gICAgICAgICAgICA8bGFiZWwgY2xhc3M9XFxcImZpbGUtbGFiZWxcXFwiPlxcbiAgICAgICAgICAgICAgICA8aW5wdXQgOm11bHRpcGxlPVxcXCJtdWx0aXBsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJmaWxlLWlucHV0IGhpZGRlblxcXCJcXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XFxcImZpbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICByZWY9XFxcImlucHV0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cXFwidXBsb2FkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XFxcInVwbG9hZC1idXR0b25cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgOm9wZW4tZmlsZS1icm93c2VyPVxcXCJvcGVuRmlsZUJyb3dzZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJvcGVuRmlsZUJyb3dzZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJpY29uIGlzLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XFxcInVwbG9hZFxcXCI+PC9mYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Zvcm0+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xcbmltcG9ydCB7IGZhVXBsb2FkIH0gZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUtc29saWQvc2hha2FibGUuZXMnO1xcblxcbmZvbnRhd2Vzb21lLmxpYnJhcnkuYWRkKGZhVXBsb2FkKTtcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIHByb3BzOiB7XFxuICAgICAgICBtdWx0aXBsZToge1xcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXFxuICAgICAgICB9LFxcbiAgICAgICAgdXJsOiB7XFxuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxcbiAgICAgICAgfSxcXG4gICAgICAgIGZpbGVTaXplTGltaXQ6IHtcXG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXFxuICAgICAgICAgICAgZGVmYXVsdDogODM4ODYwOCxcXG4gICAgICAgICAgICB2YWxpZGF0b3I6IHZhbHVlID0+IHZhbHVlIDw9IDgzODg2MDgsXFxuICAgICAgICB9LFxcbiAgICAgICAgcGFyYW1zOiB7XFxuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBpbnB1dDogbnVsbCxcXG4gICAgICAgICAgICBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCksXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBvcGVuRmlsZUJyb3dzZXIoKSB7XFxuICAgICAgICAgICAgdGhpcy4kcmVmcy5pbnB1dC5jbGljaygpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHVwbG9hZCgpIHtcXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWQtc3RhcnQnKTtcXG4gICAgICAgICAgICB0aGlzLnNldEZvcm1EYXRhKCk7XFxuXFxuICAgICAgICAgICAgYXhpb3MucG9zdCh0aGlzLnVybCwgdGhpcy5mb3JtRGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWQtc3VjY2Vzc2Z1bCcsIHJlc3BvbnNlLmRhdGEpO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwbG9hZC1lcnJvcicpO1xcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcXG4gICAgICAgICAgICB9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBzZXRGb3JtRGF0YSgpIHtcXG4gICAgICAgICAgICBjb25zdCB7IGZpbGVzIH0gPSB0aGlzLiRyZWZzLmlucHV0O1xcbiAgICAgICAgICAgIHRoaXMuYWRkRmlsZXMoZmlsZXMpO1xcbiAgICAgICAgICAgIHRoaXMuYWRkUGFyYW1zKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgYWRkRmlsZXMoZmlsZXMpIHtcXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNpemVDaGVja1Bhc3NlcyhmaWxlc1tpXSkpIHtcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybURhdGEuYXBwZW5kKGBmaWxlXyR7aX1gLCBmaWxlc1tpXSk7XFxuICAgICAgICAgICAgICAgIH1cXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgYWRkUGFyYW1zKCkge1xcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcykge1xcbiAgICAgICAgICAgICAgICBPYmplY3QuZW50cmllcyh0aGlzLnBhcmFtcykuZm9yRWFjaCgoW2tleSwgcGFyYW1dKSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBwYXJhbSA9PT0gJ29iamVjdCdcXG4gICAgICAgICAgICAgICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHBhcmFtKVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDogcGFyYW07XFxuXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcXG4gICAgICAgICAgICAgICAgfSk7XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIHNpemVDaGVja1Bhc3NlcyhmaWxlKSB7XFxuICAgICAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IHRoaXMuZmlsZVNpemVMaW1pdCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLiR0b2FzdHIud2FybmluZyhgRmlsZSBzaXplIExpbWl0IG9mICR7dGhpcy5maWxlU2l6ZUxpbWl0fSBLYiBleGNlZGVlZCBieSAke2ZpbGUubmFtZX1gKTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcXG4gICAgICAgIH0sXFxuICAgICAgICByZXNldCgpIHtcXG4gICAgICAgICAgICB0aGlzLiRlbC5yZXNldCgpO1xcbiAgICAgICAgICAgIHRoaXMuZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIGZvcm0uZmlsZS11cGxvYWQge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbi5maWxlLXVwbG9hZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAuZmlsZS1pbnB1dC5oaWRkZW4ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTQ1OTg3YTg4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvRmlsZVVwbG9hZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIzMFxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyAzMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxmb3JtIGNsYXNzPVwiZmlsZS11cGxvYWQgaXMtbWFyZ2lubGVzc1wiXG4gICAgICAgIEBzdWJtaXQucHJldmVudD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZpbGUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgOm11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpbGUtaW5wdXQgaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICByZWY9XCJpbnB1dFwiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XCJ1cGxvYWRcIj5cbiAgICAgICAgICAgICAgICAgICAgPHNsb3QgbmFtZT1cInVwbG9hZC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgOm9wZW4tZmlsZS1icm93c2VyPVwib3BlbkZpbGVCcm93c2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9wZW5GaWxlQnJvd3NlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJpY29uIGlzLXNtYWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJ1cGxvYWRcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xuaW1wb3J0IHsgZmFVcGxvYWQgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtZnJlZS1zb2xpZC9zaGFrYWJsZS5lcyc7XG5cbmZvbnRhd2Vzb21lLmxpYnJhcnkuYWRkKGZhVXBsb2FkKTtcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIHByb3BzOiB7XG4gICAgICAgIG11bHRpcGxlOiB7XG4gICAgICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIHVybDoge1xuICAgICAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIGZpbGVTaXplTGltaXQ6IHtcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgICAgIGRlZmF1bHQ6IDgzODg2MDgsXG4gICAgICAgICAgICB2YWxpZGF0b3I6IHZhbHVlID0+IHZhbHVlIDw9IDgzODg2MDgsXG4gICAgICAgIH0sXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGlucHV0OiBudWxsLFxuICAgICAgICAgICAgZm9ybURhdGE6IG5ldyBGb3JtRGF0YSgpLFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIG9wZW5GaWxlQnJvd3NlcigpIHtcbiAgICAgICAgICAgIHRoaXMuJHJlZnMuaW5wdXQuY2xpY2soKTtcbiAgICAgICAgfSxcbiAgICAgICAgdXBsb2FkKCkge1xuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBsb2FkLXN0YXJ0Jyk7XG4gICAgICAgICAgICB0aGlzLnNldEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICAgIGF4aW9zLnBvc3QodGhpcy51cmwsIHRoaXMuZm9ybURhdGEpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwbG9hZC1zdWNjZXNzZnVsJywgcmVzcG9uc2UuZGF0YSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBsb2FkLWVycm9yJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0Rm9ybURhdGEoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZpbGVzIH0gPSB0aGlzLiRyZWZzLmlucHV0O1xuICAgICAgICAgICAgdGhpcy5hZGRGaWxlcyhmaWxlcyk7XG4gICAgICAgICAgICB0aGlzLmFkZFBhcmFtcygpO1xuICAgICAgICB9LFxuICAgICAgICBhZGRGaWxlcyhmaWxlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNpemVDaGVja1Bhc3NlcyhmaWxlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtRGF0YS5hcHBlbmQoYGZpbGVfJHtpfWAsIGZpbGVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFkZFBhcmFtcygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucGFyYW1zKS5mb3JFYWNoKChba2V5LCBwYXJhbV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgcGFyYW0gPT09ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHBhcmFtKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJhbTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZUNoZWNrUGFzc2VzKGZpbGUpIHtcbiAgICAgICAgICAgIGlmIChmaWxlLnNpemUgPiB0aGlzLmZpbGVTaXplTGltaXQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiR0b2FzdHIud2FybmluZyhgRmlsZSBzaXplIExpbWl0IG9mICR7dGhpcy5maWxlU2l6ZUxpbWl0fSBLYiBleGNlZGVlZCBieSAke2ZpbGUubmFtZX1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICByZXNldCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVsLnJlc2V0KCk7XG4gICAgICAgICAgICB0aGlzLmZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgICAgIH0sXG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICBmb3JtLmZpbGUtdXBsb2FkIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xuICAgIH1cblxuICAgIGJ1dHRvbi5maWxlLXVwbG9hZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIC5maWxlLWlucHV0LmhpZGRlbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImZvcm1cIixcbiAgICB7XG4gICAgICBzdGF0aWNDbGFzczogXCJmaWxlLXVwbG9hZCBpcy1tYXJnaW5sZXNzXCIsXG4gICAgICBvbjoge1xuICAgICAgICBzdWJtaXQ6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICRldmVudC5wcmV2ZW50RGVmYXVsdCgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuICAgIFtcbiAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiZmlsZVwiIH0sIFtcbiAgICAgICAgX2MoXG4gICAgICAgICAgXCJsYWJlbFwiLFxuICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwiZmlsZS1sYWJlbFwiIH0sXG4gICAgICAgICAgW1xuICAgICAgICAgICAgX2MoXCJpbnB1dFwiLCB7XG4gICAgICAgICAgICAgIHJlZjogXCJpbnB1dFwiLFxuICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJmaWxlLWlucHV0IGhpZGRlblwiLFxuICAgICAgICAgICAgICBhdHRyczogeyBtdWx0aXBsZTogX3ZtLm11bHRpcGxlLCB0eXBlOiBcImZpbGVcIiB9LFxuICAgICAgICAgICAgICBvbjogeyBjaGFuZ2U6IF92bS51cGxvYWQgfVxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX3ZtLl90KFxuICAgICAgICAgICAgICBcInVwbG9hZC1idXR0b25cIixcbiAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgW19jKFwiZmFcIiwgeyBhdHRyczogeyBpY29uOiBcInVwbG9hZFwiIH0gfSldLFxuICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgeyBvcGVuRmlsZUJyb3dzZXI6IF92bS5vcGVuRmlsZUJyb3dzZXIgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi00NTk4N2E4OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtNDU5ODdhODhcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvRmlsZVVwbG9hZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyAzMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xOGEzY2I0OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgdGhlIHN0eWxlcyB0byB0aGUgRE9NXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzQ2xpZW50LmpzXCIpKFwiNzc4MGQzNjlcIiwgY29udGVudCwgZmFsc2UpO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuIC8vIFdoZW4gdGhlIHN0eWxlcyBjaGFuZ2UsIHVwZGF0ZSB0aGUgPHN0eWxlPiB0YWdzXG4gaWYoIWNvbnRlbnQubG9jYWxzKSB7XG4gICBtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMThhM2NiNDhcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMThhM2NiNDhcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMThhM2NiNDhcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE0MzNcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikodHJ1ZSk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uaGFzLWxhdGVyYWwtYm9yZGVycyB7XFxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XFxufVxcbi5zdGF0LXZhbHVlIHtcXG4gICAgZm9udC1zaXplOiAzZW07XFxuICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcbn1cXG4uc3RhdC1rZXkge1xcbiAgICBmb250LXNpemU6IDEuNGVtO1xcbiAgICBmb250LXdlaWdodDogMjAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbn1cXG4ubGV2ZWwudXNlci1jb250cm9scyB7XFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcbi50aW1lbGluZS1jb250ZW50IHtcXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOmFsbCAxcyBlYXNlO1xcbiAgICB0cmFuc2l0aW9uOmFsbCAxcyBlYXNlO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQStXQTtJQUNBLHVDQUFBO0lBQ0Esd0NBQUE7Q0FDQTtBQUVBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0NBQ0E7QUFFQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtDQUNBO0FBRUE7SUFDQSxpQkFBQTtDQUNBO0FBRUE7SUFDQSwrQkFBQTtJQUFBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNob3cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPGRpdiB2LWlmPVxcXCJpbml0aWFsaXNlZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3ggcHJvZmlsZS1oZWFkaW5nXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIGlzLW11bHRpbGluZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBpcy1oYWxmLWRlc2t0b3BcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1ucyBpcy1tb2JpbGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBpcy1uYXJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZSBpcy0xMjh4MTI4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cXFwiYXZhdGFyTGlua1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLWl0ZW0gaGFzLXBhZGRpbmctdG9wLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidGl0bGUgaXMtM1xcXCI+e3sgcHJvZmlsZVVzZXIuZnVsbE5hbWUgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IF9fKCdyb2xlJykgfX06IHt7IHByb2ZpbGVVc2VyLnJvbGUubmFtZSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgX18oJ3NpbmNlJykgfX06IHt7IHByb2ZpbGVVc2VyLmNyZWF0ZWRfYXQgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJoYXMtbWFyZ2luLXRvcC1zbWFsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbCB1c2VyLWNvbnRyb2xzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImlzU2VsZlZpc2l0aW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLXNtYWxsIGlzLXdhcm5pbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJhdmF0YXJJZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZGVsZXRlQXZhdGFyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgaWNvbj1cXFwidHJhc2gtYWx0XFxcIj48L2ZhPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0F2YXRhcicpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlsZS11cGxvYWRlciB2LWlmPVxcXCIhYXZhdGFySWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBsb2FkLXN1Y2Nlc3NmdWw9XFxcIiRzdG9yZS5jb21taXQoJ3NldFVzZXJBdmF0YXInLCAkZXZlbnQuaWQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnVybD1cXFwidXBsb2FkQXZhdGFyTGlua1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwidXBsb2FkLWJ1dHRvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3M9XFxcImJ1dHRvbiBpcy1zbWFsbCBpcy1pbmZvXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInByb3BzLm9wZW5GaWxlQnJvd3NlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVxcXCJ1cGxvYWRcXFwiPjwvZmE+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnQXZhdGFyJykgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWxlLXVwbG9hZGVyPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLXJpZ2h0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLXNtYWxsIGlzLWRhbmdlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwibG9nb3V0KClcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVxcXCJzaWduLW91dC1hbHRcXFwiPjwvZmE+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnTG9nIE91dCcpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtc21hbGwgaXMtd2FybmluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkYnVzLiRlbWl0KCdzdGFydC1pbXBlcnNvbmF0aW5nJywgcHJvZmlsZVVzZXIuaWQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCIhJHN0b3JlLnN0YXRlLmltcGVyc29uYXRpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnSW1wZXJzb25hdGUnKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGlzLWhhbGYtZGVza3RvcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIGlzLW1vYmlsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJzdGF0LXZhbHVlXFxcIj57eyBwcm9maWxlVXNlci5sb2dpbkNvdW50IH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YXQta2V5XFxcIj57eyBfXygnbG9naW5zJykgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkIGhhcy1sYXRlcmFsLWJvcmRlcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YXQtdmFsdWVcXFwiPnt7IHByb2ZpbGVVc2VyLmFjdGlvbkxvZ0NvdW50IH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YXQta2V5XFxcIj57eyBfXygnYWN0aW9ucycpIH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwic3RhdC12YWx1ZVxcXCI+e3sgcHJvZmlsZVVzZXIucmF0aW5nIH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YXQta2V5XFxcIj57eyBfXygncmF0aW5nJykgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbnMgaXMtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBpcy10d28tdGhpcmRzLXRhYmxldFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVxcXCJwYWdpbmF0aW9uIGlzLXNtYWxsIGhhcy1tYXJnaW4tYm90dG9tLWxhcmdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1wcmV2aW91c1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDEpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcInByb2ZpbGVVc2VyLnRpbWVsaW5lLnByZXZfcGFnZV91cmw9PT1udWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ1ByZXZpb3VzJykgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbmV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSArIDEpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcInByb2ZpbGVVc2VyLnRpbWVsaW5lLm5leHRfcGFnZV91cmw9PT1udWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ05leHQnKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlzdFxcXCIgdi1pZj1cXFwiaXNTaG9ydFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiaSBpbiBwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2VcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1jdXJyZW50JzogcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PSBpfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UoaSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGkgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwicGFnaW5hdGlvbi1saXN0XFxcIiB2LWlmPVxcXCJpc0F0U3RhcnQgJiYgIWlzU2hvcnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcImkgaW4gM1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWN1cnJlbnQnOiBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IGl9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZShpKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XFxcInBhZ2luYXRpb24tZWxsaXBzaXNcXFwiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpc3RcXFwiIHYtaWY9XFxcImhhc01pZGRsZSAmJiAhaXNTaG9ydFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKDEpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwicGFnaW5hdGlvbi1lbGxpcHNpc1xcXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIC0gMSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDEgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGluayBpcy1jdXJyZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSArIDEgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWVsbGlwc2lzXFxcIj4maGVsbGlwOzwvc3Bhbj48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwicGFnaW5hdGlvbi1saXN0XFxcIiB2LWlmPVxcXCJpc0F0RW5kICYmICFpc1Nob3J0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UoMSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWVsbGlwc2lzXFxcIj4maGVsbGlwOzwvc3Bhbj48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XFxcImkgaW4gM1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWN1cnJlbnQnOiBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtIDMgKyBpfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIC0gMyArIGkpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgLSAzICsgaSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwidGltZWxpbmUgaGFzLXBhZGRpbmctbGFyZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XFxcIihhY3Rpb25zLCBkYXkpIGluIHRpbWVsaW5lXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwidGltZWxpbmUtY29udGVudFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiZGF5XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJ0aW1lbGluZS1oZWFkZXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhZyBpcy1tZWRpdW0gaXMtcHJpbWFyeVxcXCI+e3sgX18oZGF5KSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8bGkgY2xhc3M9XFxcInRpbWVsaW5lLWl0ZW1cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZWxpbmUtbWFya2VyXFxcIj48L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWVsaW5lLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJoZWFkaW5nXFxcIj5KYW51YXJ5IDIwMTY8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGltZWxpbmUgY29udGVudCAtIENhbiBpbmNsdWRlIGFueSBIVE1MIGVsZW1lbnQ8L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gLS0+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwidGltZWxpbmUtaXRlbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVxcXCIoYWN0aW9uLCBpbmRleCkgaW4gYWN0aW9uc1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImluZGV4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWVsaW5lLW1hcmtlciBpcy1pY29uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwiZ2V0Q2xhc3MoYWN0aW9uLnJvdXRlKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIDppY29uPVxcXCJnZXRJY29uKGFjdGlvbi5yb3V0ZSlcXFwiIHNpemU9XFxcInhzXFxcIj48L2ZhPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lbGluZS1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiaGVhZGluZ1xcXCI+e3sgZ2V0SFJEYXRlKGFjdGlvbi5jcmVhdGVkX2F0KSB9fSB7eyBnZXRIUlRpbWUoYWN0aW9uLmNyZWF0ZWRfYXQpIH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGFjdGlvbi5wZXJtaXNzaW9uLmRlc2NyaXB0aW9uIH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJ0aW1lbGluZS1oZWFkZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcInByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcInRhZyBpcy1tZWRpdW0gaXMtcHJpbWFyeVxcXCI+e3sgX18oJ0VuZCcpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJ0aW1lbGluZS1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWVsc2U+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWVsaW5lLW1hcmtlciBpcy1pY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmYSBpY29uPVxcXCJlbGxpcHNpcy1oXFxcIiBzaXplPVxcXCJ4c1xcXCI+PC9mYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xcbmltcG9ydCBmb250YXdlc29tZSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUnO1xcbmltcG9ydCB7XFxuICAgIGZhVHJhc2hBbHQsIGZhVXBsb2FkLCBmYVNpZ25PdXRBbHQsIGZhRWxsaXBzaXNILFxcbiAgICBmYUV5ZSwgZmFQbHVzLCBmYVBlbmNpbEFsdCxcXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXNvbGlkL3NoYWthYmxlLmVzJztcXG5pbXBvcnQgRmlsZVVwbG9hZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvRmlsZVVwbG9hZGVyLnZ1ZSc7XFxuXFxuZm9udGF3ZXNvbWUubGlicmFyeS5hZGQoW1xcbiAgICBmYVRyYXNoQWx0LCBmYVVwbG9hZCwgZmFTaWduT3V0QWx0LCBmYUVsbGlwc2lzSCxcXG4gICAgZmFFeWUsIGZhUGx1cywgZmFQZW5jaWxBbHQsXFxuXSk7XFxuXFxuZXhwb3J0IGRlZmF1bHQge1xcbiAgICBjb21wb25lbnRzOiB7IEZpbGVVcGxvYWRlciB9LFxcblxcbiAgICBjb21wdXRlZDoge1xcbiAgICAgICAgLi4ubWFwR2V0dGVycygnbG9jYWxlJywge1xcbiAgICAgICAgICAgIF9fOiAnX18nLFxcbiAgICAgICAgICAgIGxvY2FsZTogJ2N1cnJlbnQnLFxcbiAgICAgICAgfSksXFxuICAgICAgICAuLi5tYXBTdGF0ZShbJ3VzZXInLCAnbWV0YSddKSxcXG4gICAgICAgIHVwbG9hZEF2YXRhckxpbmsoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlKCdjb3JlLmF2YXRhcnMuc3RvcmUnLCBbXSwgZmFsc2UpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGlzU2VsZlZpc2l0aW5nKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXIuaWQgPT09IHRoaXMucHJvZmlsZVVzZXIuaWQ7XFxuICAgICAgICB9LFxcbiAgICAgICAgYXZhdGFySWQoKSB7XFxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTZWxmVmlzaXRpbmcpIHtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlci5hdmF0YXJJZDtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVVzZXIuYXZhdGFyID8gdGhpcy5wcm9maWxlVXNlci5hdmF0YXIuaWQgOiBudWxsO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGF2YXRhckxpbmsoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHJvdXRlKCdjb3JlLmF2YXRhcnMuc2hvdycsICh0aGlzLmF2YXRhcklkIHx8ICdudWxsJyksIGZhbHNlKTtcXG4gICAgICAgIH0sXFxuICAgICAgICB0aW1lbGluZSgpIHtcXG4gICAgICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5kYXRhO1xcblxcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm1hcChhY3Rpb24gPT4gYWN0aW9uLmNyZWF0ZWRfYXQpLnJlZHVjZSgoZGF5cywgcmVjb3JkKSA9PiB7XFxuICAgICAgICAgICAgICAgIGRheXMucHVzaCh0aGlzLmdldERheShyZWNvcmQpKTtcXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXM7XFxuICAgICAgICAgICAgfSwgW10pLmZpbHRlcigodmFsdWUsIGluZGV4LCBkYXlzKSA9PiBkYXlzLmluZGV4T2YodmFsdWUpID09PSBpbmRleClcXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgodGltZWxpbmUsIGRheSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVbZGF5XSA9IGFjdGlvbnNcXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHJlY29yZCA9PiB0aGlzLmdldERheShyZWNvcmQuY3JlYXRlZF9hdCkgPT09IGRheSk7XFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxpbmU7XFxuICAgICAgICAgICAgICAgIH0sIHt9KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBpc1Nob3J0KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSA8PSA1O1xcbiAgICAgICAgfSxcXG4gICAgICAgIGlzQXRTdGFydCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPD0gMjtcXG4gICAgICAgIH0sXFxuICAgICAgICBpc0F0RW5kKCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVxcbiAgICAgICAgICAgICAgICAtIHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIDw9IDI7XFxuICAgICAgICB9LFxcbiAgICAgICAgaGFzTWlkZGxlKCkge1xcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc0F0U3RhcnQgJiYgIXRoaXMuaXNBdEVuZDtcXG4gICAgICAgIH0sXFxuICAgICAgICBwYWdpbmF0aW9uVXJsKCkge1xcbiAgICAgICAgICAgIHJldHVybiBgJHtyb3V0ZSgnYWRtaW5pc3RyYXRpb24udXNlcnMuc2hvdycsIFt0aGlzLnByb2ZpbGVVc2VyLmlkXSwgZmFsc2UpfT9wYWdlPWA7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBkYXRhKCkge1xcbiAgICAgICAgcmV0dXJuIHtcXG4gICAgICAgICAgICBpbml0aWFsaXNlZDogZmFsc2UsXFxuICAgICAgICAgICAgcHJvZmlsZVVzZXI6IHt9LFxcbiAgICAgICAgfTtcXG4gICAgfSxcXG5cXG4gICAgd2F0Y2g6IHtcXG4gICAgICAgIGxvY2FsZToge1xcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XFxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSh0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSk7XFxuICAgICAgICAgICAgfSxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIGRlbGV0ZUF2YXRhcigpIHtcXG4gICAgICAgICAgICBheGlvcy5kZWxldGUocm91dGUoJ2NvcmUuYXZhdGFycy5kZXN0cm95JywgdGhpcy51c2VyLmF2YXRhcklkLCBmYWxzZSkpLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFVzZXJBdmF0YXInLCBudWxsKTtcXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgbG9nb3V0KCkge1xcbiAgICAgICAgICAgIGF4aW9zLnBvc3Qocm91dGUoJ2xvZ291dCcsIFtdLCBmYWxzZSkudG9TdHJpbmcoKSkudGhlbigoKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL2xvZ291dCcpO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBnZXREYXkodGltZXN0YW1wKSB7XFxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh0aW1lc3RhbXApLmNhbGVuZGFyKCkuc3BsaXQoJyAnKVswXTtcXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRIUkRhdGUodGltZXN0YW1wKSB7XFxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh0aW1lc3RhbXApLmZvcm1hdCh0aGlzLm1ldGEuZGF0ZUZvcm1hdCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0SFJUaW1lKHRpbWVzdGFtcCkge1xcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQodGltZXN0YW1wKS5mb3JtYXQoJ0g6bW0nKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRJY29uKGFjdGlvbikge1xcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaW5kZXhPZignaW5kZXgnKSA+IDApIHJldHVybiBmYUV5ZTtcXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2NyZWF0ZScpID4gMCkgcmV0dXJuIGZhUGx1cztcXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2VkaXQnKSA+IDApIHJldHVybiBmYVBlbmNpbEFsdDtcXG4gICAgICAgICAgICByZXR1cm4gZmFUcmFzaEFsdDtcXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRDbGFzcyhhY3Rpb24pIHtcXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2luZGV4JykgPiAwKSByZXR1cm4gJ2hhcy10ZXh0LXN1Y2Nlc3MnO1xcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaW5kZXhPZignY3JlYXRlJykgPiAwKSByZXR1cm4gJ2hhcy10ZXh0LXdhcm5pbmcnO1xcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaW5kZXhPZignZWRpdCcpID4gMCkgcmV0dXJuICdoYXMtdGV4dC13YXJuaW5nJztcXG4gICAgICAgICAgICByZXR1cm4gJ2hhcy10ZXh0LWRhbmdlcic7XFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0UGFnZShwYWdlKSB7XFxuICAgICAgICAgICAgYXhpb3MuZ2V0KHRoaXMucGFnaW5hdGlvblVybCArIHBhZ2UpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZVVzZXIgPSBkYXRhLnVzZXI7XFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgbW91bnRlZCgpIHtcXG4gICAgICAgIGF4aW9zLmdldChyb3V0ZSh0aGlzLiRyb3V0ZS5uYW1lLCB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsIGZhbHNlKSkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVVc2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAuaGFzLWxhdGVyYWwtYm9yZGVycyB7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgfVxcblxcbiAgICAuc3RhdC12YWx1ZSB7XFxuICAgICAgICBmb250LXNpemU6IDNlbTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5zdGF0LWtleSB7XFxuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICAgIH1cXG5cXG4gICAgLmxldmVsLnVzZXItY29udHJvbHMge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAudGltZWxpbmUtY29udGVudCB7XFxuICAgICAgICB0cmFuc2l0aW9uOmFsbCAxcyBlYXNlO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMThhM2NiNDhcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE0MzRcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgdi1pZj1cImluaXRpYWxpc2VkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3ggcHJvZmlsZS1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLWhhbGYtZGVza3RvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtbmFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlIGlzLTEyOHgxMjhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiYXZhdGFyTGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1pdGVtIGhhcy1wYWRkaW5nLXRvcC1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTNcIj57eyBwcm9maWxlVXNlci5mdWxsTmFtZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBfXygncm9sZScpIH19OiB7eyBwcm9maWxlVXNlci5yb2xlLm5hbWUgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgX18oJ3NpbmNlJykgfX06IHt7IHByb2ZpbGVVc2VyLmNyZWF0ZWRfYXQgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoYXMtbWFyZ2luLXRvcC1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwgdXNlci1jb250cm9sc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXNTZWxmVmlzaXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zbWFsbCBpcy13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImF2YXRhcklkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlQXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJ0cmFzaC1hbHRcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0F2YXRhcicpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlsZS11cGxvYWRlciB2LWlmPVwiIWF2YXRhcklkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwbG9hZC1zdWNjZXNzZnVsPVwiJHN0b3JlLmNvbW1pdCgnc2V0VXNlckF2YXRhcicsICRldmVudC5pZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dXJsPVwidXBsb2FkQXZhdGFyTGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInVwbG9hZC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzcz1cImJ1dHRvbiBpcy1zbWFsbCBpcy1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJwcm9wcy5vcGVuRmlsZUJyb3dzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJ1cGxvYWRcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0F2YXRhcicpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWxlLXVwbG9hZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImxvZ291dCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJzaWduLW91dC1hbHRcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0xvZyBPdXQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zbWFsbCBpcy13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkYnVzLiRlbWl0KCdzdGFydC1pbXBlcnNvbmF0aW5nJywgcHJvZmlsZVVzZXIuaWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiISRzdG9yZS5zdGF0ZS5pbXBlcnNvbmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0ltcGVyc29uYXRlJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1oYWxmLWRlc2t0b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhdC12YWx1ZVwiPnt7IHByb2ZpbGVVc2VyLmxvZ2luQ291bnQgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhdC1rZXlcIj57eyBfXygnbG9naW5zJykgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWQgaGFzLWxhdGVyYWwtYm9yZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YXQtdmFsdWVcIj57eyBwcm9maWxlVXNlci5hY3Rpb25Mb2dDb3VudCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGF0LWtleVwiPnt7IF9fKCdhY3Rpb25zJykgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGF0LXZhbHVlXCI+e3sgcHJvZmlsZVVzZXIucmF0aW5nIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YXQta2V5XCI+e3sgX18oJ3JhdGluZycpIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy10d28tdGhpcmRzLXRhYmxldFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cInBhZ2luYXRpb24gaXMtc21hbGwgaGFzLW1hcmdpbi1ib3R0b20tbGFyZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1wcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgLSAxKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwicHJvZmlsZVVzZXIudGltZWxpbmUucHJldl9wYWdlX3VybD09PW51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnUHJldmlvdXMnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLW5leHRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInByb2ZpbGVVc2VyLnRpbWVsaW5lLm5leHRfcGFnZV91cmw9PT1udWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ05leHQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbi1saXN0XCIgdi1pZj1cImlzU2hvcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJpIGluIHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWN1cnJlbnQnOiBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IGl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UoaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbi1saXN0XCIgdi1pZj1cImlzQXRTdGFydCAmJiAhaXNTaG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImkgaW4gM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWN1cnJlbnQnOiBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IGl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UoaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1lbGxpcHNpc1wiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIiB2LWlmPVwiaGFzTWlkZGxlICYmICFpc1Nob3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tZWxsaXBzaXNcIj4maGVsbGlwOzwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgLSAxKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIC0gMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rIGlzLWN1cnJlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSArIDEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1lbGxpcHNpc1wiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIiB2LWlmPVwiaXNBdEVuZCAmJiAhaXNTaG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZSgxKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWVsbGlwc2lzXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJpIGluIDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1jdXJyZW50JzogcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PSBwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgLSAzICsgaX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgLSAzICsgaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtIDMgKyBpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInRpbWVsaW5lIGhhcy1wYWRkaW5nLWxhcmdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKGFjdGlvbnMsIGRheSkgaW4gdGltZWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGltZWxpbmUtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImRheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpbWVsaW5lLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyBpcy1tZWRpdW0gaXMtcHJpbWFyeVwiPnt7IF9fKGRheSkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxsaSBjbGFzcz1cInRpbWVsaW5lLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLW1hcmtlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWFkaW5nXCI+SmFudWFyeSAyMDE2PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGltZWxpbmUgY29udGVudCAtIENhbiBpbmNsdWRlIGFueSBIVE1MIGVsZW1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpbWVsaW5lLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihhY3Rpb24sIGluZGV4KSBpbiBhY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1tYXJrZXIgaXMtaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJnZXRDbGFzcyhhY3Rpb24ucm91dGUpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmEgOmljb249XCJnZXRJY29uKGFjdGlvbi5yb3V0ZSlcIiBzaXplPVwieHNcIj48L2ZhPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVhZGluZ1wiPnt7IGdldEhSRGF0ZShhY3Rpb24uY3JlYXRlZF9hdCkgfX0ge3sgZ2V0SFJUaW1lKGFjdGlvbi5jcmVhdGVkX2F0KSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGFjdGlvbi5wZXJtaXNzaW9uLmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0aW1lbGluZS1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIGlzLW1lZGl1bSBpcy1wcmltYXJ5XCI+e3sgX18oJ0VuZCcpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpbWVsaW5lLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtbWFya2VyIGlzLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZhIGljb249XCJlbGxpcHNpcy1oXCIgc2l6ZT1cInhzXCI+PC9mYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XG5pbXBvcnQgZm9udGF3ZXNvbWUgZnJvbSAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lJztcbmltcG9ydCB7XG4gICAgZmFUcmFzaEFsdCwgZmFVcGxvYWQsIGZhU2lnbk91dEFsdCwgZmFFbGxpcHNpc0gsXG4gICAgZmFFeWUsIGZhUGx1cywgZmFQZW5jaWxBbHQsXG59IGZyb20gJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1mcmVlLXNvbGlkL3NoYWthYmxlLmVzJztcbmltcG9ydCBGaWxlVXBsb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlJztcblxuZm9udGF3ZXNvbWUubGlicmFyeS5hZGQoW1xuICAgIGZhVHJhc2hBbHQsIGZhVXBsb2FkLCBmYVNpZ25PdXRBbHQsIGZhRWxsaXBzaXNILFxuICAgIGZhRXllLCBmYVBsdXMsIGZhUGVuY2lsQWx0LFxuXSk7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBjb21wb25lbnRzOiB7IEZpbGVVcGxvYWRlciB9LFxuXG4gICAgY29tcHV0ZWQ6IHtcbiAgICAgICAgLi4ubWFwR2V0dGVycygnbG9jYWxlJywge1xuICAgICAgICAgICAgX186ICdfXycsXG4gICAgICAgICAgICBsb2NhbGU6ICdjdXJyZW50JyxcbiAgICAgICAgfSksXG4gICAgICAgIC4uLm1hcFN0YXRlKFsndXNlcicsICdtZXRhJ10pLFxuICAgICAgICB1cGxvYWRBdmF0YXJMaW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlKCdjb3JlLmF2YXRhcnMuc3RvcmUnLCBbXSwgZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICBpc1NlbGZWaXNpdGluZygpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXIuaWQgPT09IHRoaXMucHJvZmlsZVVzZXIuaWQ7XG4gICAgICAgIH0sXG4gICAgICAgIGF2YXRhcklkKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuaXNTZWxmVmlzaXRpbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyLmF2YXRhcklkO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlVXNlci5hdmF0YXIgPyB0aGlzLnByb2ZpbGVVc2VyLmF2YXRhci5pZCA6IG51bGw7XG4gICAgICAgIH0sXG4gICAgICAgIGF2YXRhckxpbmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGUoJ2NvcmUuYXZhdGFycy5zaG93JywgKHRoaXMuYXZhdGFySWQgfHwgJ251bGwnKSwgZmFsc2UpO1xuICAgICAgICB9LFxuICAgICAgICB0aW1lbGluZSgpIHtcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmRhdGE7XG5cbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25zLm1hcChhY3Rpb24gPT4gYWN0aW9uLmNyZWF0ZWRfYXQpLnJlZHVjZSgoZGF5cywgcmVjb3JkKSA9PiB7XG4gICAgICAgICAgICAgICAgZGF5cy5wdXNoKHRoaXMuZ2V0RGF5KHJlY29yZCkpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXlzO1xuICAgICAgICAgICAgfSwgW10pLmZpbHRlcigodmFsdWUsIGluZGV4LCBkYXlzKSA9PiBkYXlzLmluZGV4T2YodmFsdWUpID09PSBpbmRleClcbiAgICAgICAgICAgICAgICAucmVkdWNlKCh0aW1lbGluZSwgZGF5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lW2RheV0gPSBhY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICAuZmlsdGVyKHJlY29yZCA9PiB0aGlzLmdldERheShyZWNvcmQuY3JlYXRlZF9hdCkgPT09IGRheSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbGluZTtcbiAgICAgICAgICAgICAgICB9LCB7fSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU2hvcnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgPD0gNTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNBdFN0YXJ0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIDw9IDI7XG4gICAgICAgIH0sXG4gICAgICAgIGlzQXRFbmQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2VcbiAgICAgICAgICAgICAgICAtIHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIDw9IDI7XG4gICAgICAgIH0sXG4gICAgICAgIGhhc01pZGRsZSgpIHtcbiAgICAgICAgICAgIHJldHVybiAhdGhpcy5pc0F0U3RhcnQgJiYgIXRoaXMuaXNBdEVuZDtcbiAgICAgICAgfSxcbiAgICAgICAgcGFnaW5hdGlvblVybCgpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHtyb3V0ZSgnYWRtaW5pc3RyYXRpb24udXNlcnMuc2hvdycsIFt0aGlzLnByb2ZpbGVVc2VyLmlkXSwgZmFsc2UpfT9wYWdlPWA7XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbml0aWFsaXNlZDogZmFsc2UsXG4gICAgICAgICAgICBwcm9maWxlVXNlcjoge30sXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIHdhdGNoOiB7XG4gICAgICAgIGxvY2FsZToge1xuICAgICAgICAgICAgaGFuZGxlcigpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UodGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBkZWxldGVBdmF0YXIoKSB7XG4gICAgICAgICAgICBheGlvcy5kZWxldGUocm91dGUoJ2NvcmUuYXZhdGFycy5kZXN0cm95JywgdGhpcy51c2VyLmF2YXRhcklkLCBmYWxzZSkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0VXNlckF2YXRhcicsIG51bGwpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgICAgICBsb2dvdXQoKSB7XG4gICAgICAgICAgICBheGlvcy5wb3N0KHJvdXRlKCdsb2dvdXQnLCBbXSwgZmFsc2UpLnRvU3RyaW5nKCkpLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoL2xvZ291dCcpO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgICAgICBnZXREYXkodGltZXN0YW1wKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KHRpbWVzdGFtcCkuY2FsZW5kYXIoKS5zcGxpdCgnICcpWzBdO1xuICAgICAgICB9LFxuICAgICAgICBnZXRIUkRhdGUodGltZXN0YW1wKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KHRpbWVzdGFtcCkuZm9ybWF0KHRoaXMubWV0YS5kYXRlRm9ybWF0KTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SFJUaW1lKHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh0aW1lc3RhbXApLmZvcm1hdCgnSDptbScpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRJY29uKGFjdGlvbikge1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbmRleE9mKCdpbmRleCcpID4gMCkgcmV0dXJuIGZhRXllO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbmRleE9mKCdjcmVhdGUnKSA+IDApIHJldHVybiBmYVBsdXM7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2VkaXQnKSA+IDApIHJldHVybiBmYVBlbmNpbEFsdDtcbiAgICAgICAgICAgIHJldHVybiBmYVRyYXNoQWx0O1xuICAgICAgICB9LFxuICAgICAgICBnZXRDbGFzcyhhY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaW5kZXhPZignaW5kZXgnKSA+IDApIHJldHVybiAnaGFzLXRleHQtc3VjY2Vzcyc7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2NyZWF0ZScpID4gMCkgcmV0dXJuICdoYXMtdGV4dC13YXJuaW5nJztcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaW5kZXhPZignZWRpdCcpID4gMCkgcmV0dXJuICdoYXMtdGV4dC13YXJuaW5nJztcbiAgICAgICAgICAgIHJldHVybiAnaGFzLXRleHQtZGFuZ2VyJztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UGFnZShwYWdlKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQodGhpcy5wYWdpbmF0aW9uVXJsICsgcGFnZSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVVc2VyID0gZGF0YS51c2VyO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICBheGlvcy5nZXQocm91dGUodGhpcy4kcm91dGUubmFtZSwgdGhpcy4kcm91dGUucGFyYW1zLmlkLCBmYWxzZSkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVVc2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIC5oYXMtbGF0ZXJhbC1ib3JkZXJzIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcbiAgICB9XG5cbiAgICAuc3RhdC12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICB9XG5cbiAgICAuc3RhdC1rZXkge1xuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC5sZXZlbC51c2VyLWNvbnRyb2xzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAudGltZWxpbmUtY29udGVudCB7XG4gICAgICAgIHRyYW5zaXRpb246YWxsIDFzIGVhc2U7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pbml0aWFsaXNlZFxuICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveCBwcm9maWxlLWhlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW11bHRpbGluZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLWhhbGYtZGVza3RvcFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW1vYmlsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBpcy1uYXJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlIGlzLTEyOHgxMjhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYXZhdGFyTGluayB9IH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtaXRlbSBoYXMtcGFkZGluZy10b3Atc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgaXMtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcm9maWxlVXNlci5mdWxsTmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJyb2xlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZmlsZVVzZXIucm9sZS5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcInNpbmNlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZmlsZVVzZXIuY3JlYXRlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJoYXMtbWFyZ2luLXRvcC1zbWFsbFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNTZWxmVmlzaXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxldmVsIHVzZXItY29udHJvbHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF2YXRhcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24gaXMtc21hbGwgaXMtd2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZGVsZXRlQXZhdGFyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBpY29uOiBcInRyYXNoLWFsdFwiIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIkF2YXRhclwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uYXZhdGFySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZmlsZS11cGxvYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBfdm0udXBsb2FkQXZhdGFyTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBsb2FkLXN1Y2Nlc3NmdWxcIjogZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuY29tbWl0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldFVzZXJBdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidXBsb2FkLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbiBpcy1zbWFsbCBpcy1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vcGVuRmlsZUJyb3dzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpY29uOiBcInVwbG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9fKFwiQXZhdGFyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbiBpcy1zbWFsbCBpcy1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9nb3V0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJmYVwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgaWNvbjogXCJzaWduLW91dC1hbHRcIiB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJMb2cgT3V0XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLiRzdG9yZS5zdGF0ZS5pbXBlcnNvbmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24gaXMtc21hbGwgaXMtd2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kYnVzLiRlbWl0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnQtaW1wZXJzb25hdGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJJbXBlcnNvbmF0ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtaGFsZi1kZXNrdG9wXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtbW9iaWxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC12YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHJvZmlsZVVzZXIubG9naW5Db3VudCkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LWtleVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX18oXCJsb2dpbnNcIikpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkIGhhcy1sYXRlcmFsLWJvcmRlcnNcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC12YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcm9maWxlVXNlci5hY3Rpb25Mb2dDb3VudCkpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LWtleVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fXyhcImFjdGlvbnNcIikpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQtdmFsdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnByb2ZpbGVVc2VyLnJhdGluZykpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LWtleVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX18oXCJyYXRpbmdcIikpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLWNlbnRlcmVkXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLXR3by10aGlyZHMtdGFibGV0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3hcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibmF2XCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uIGlzLXNtYWxsIGhhcy1tYXJnaW4tYm90dG9tLWxhcmdlXCIgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLXByZXZpb3VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUucHJldl9wYWdlX3VybCA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJQcmV2aW91c1wiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1uZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubmV4dF9wYWdlX3VybCA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJOZXh0XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXNTaG9ydFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IGkgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtY3VycmVudFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmlzQXRTdGFydCAmJiAhX3ZtLmlzU2hvcnRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKDMsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IGtleTogaSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1jdXJyZW50XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5oYXNNaWRkbGUgJiYgIV92bS5pc1Nob3J0XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGFnZSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmsgaXMtY3VycmVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXNBdEVuZCAmJiAhX3ZtLmlzU2hvcnRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDMpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woMywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsga2V5OiBpIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWN1cnJlbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtIDMgKyBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUgaGFzLXBhZGRpbmctbGFyZ2VcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGltZWxpbmUsIGZ1bmN0aW9uKGFjdGlvbnMsIGRheSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogZGF5LCBzdGF0aWNDbGFzczogXCJ0aW1lbGluZS1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhZyBpcy1tZWRpdW0gaXMtcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLl9fKGRheSkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGFjdGlvbnMsIGZ1bmN0aW9uKGFjdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcInRpbWVsaW5lLWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtbWFya2VyIGlzLWljb25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogX3ZtLmdldENsYXNzKGFjdGlvbi5yb3V0ZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZmFcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogX3ZtLmdldEljb24oYWN0aW9uLnJvdXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZTogXCJ4c1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpbWVsaW5lLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRIUkRhdGUoYWN0aW9uLmNyZWF0ZWRfYXQpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRIUlRpbWUoYWN0aW9uLmNyZWF0ZWRfYXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhhY3Rpb24ucGVybWlzc2lvbi5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT1cbiAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2VcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhZyBpcy1tZWRpdW0gaXMtcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5fXyhcIkVuZFwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpbWVsaW5lLWl0ZW1cIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aW1lbGluZS1tYXJrZXIgaXMtaWNvblwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImZhXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7IGljb246IFwiZWxsaXBzaXMtaFwiLCBzaXplOiBcInhzXCIgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1lbGxpcHNpc1wiIH0sIFtfdm0uX3YoXCLigKZcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1lbGxpcHNpc1wiIH0sIFtfdm0uX3YoXCLigKZcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1lbGxpcHNpc1wiIH0sIFtfdm0uX3YoXCLigKZcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1lbGxpcHNpc1wiIH0sIFtfdm0uX3YoXCLigKZcIildKVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTE4YTNjYjQ4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi0xOGEzY2I0OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE0MzZcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSJdLCJzb3VyY2VSb290IjoiIn0=