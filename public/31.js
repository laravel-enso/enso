webpackJsonp([31],{

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1408)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1410)
/* template */
var __vue_template__ = __webpack_require__(1411)
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

/***/ 1211:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1212)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1214)
/* template */
var __vue_template__ = __webpack_require__(1215)
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

/***/ 1212:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1213);
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

/***/ 1213:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nform.file-upload {\n    display: inline-table;\n}\nbutton.file-upload {\n    background: transparent;\n}\n.file-input.hidden {\n    display: none;\n}\n\n", "", {"version":3,"sources":["/home/mihai/work/_proj/spa2/resources/assets/js/components/enso/fileuploader/resources/assets/js/components/enso/fileuploader/FileUploader.vue"],"names":[],"mappings":";AAkHA;IACA,sBAAA;CACA;AAEA;IACA,wBAAA;CACA;AAEA;IACA,cAAA;CACA","file":"FileUploader.vue","sourcesContent":["<template>\n\n    <form class=\"file-upload is-marginless\"\n        @submit.prevent>\n        <div class=\"file\">\n            <label class=\"file-label\">\n                <input :multiple=\"multiple\"\n                    class=\"file-input hidden\"\n                    type=\"file\"\n                    @change=\"upload\">\n                    <slot name=\"upload-button\"\n                        :open-file-browser=\"openFileBrowser\"\n                        @click=\"openFileBrowser\">\n                        <a class=\"icon is-small\">\n                            <i class=\"fa fa-upload\"></i>\n                        </a>\n                    </slot>\n            </label>\n        </div>\n    </form>\n\n</template>\n\n<script>\n\nexport default {\n    props: {\n        multiple: {\n            type: Boolean,\n            default: false,\n        },\n        url: {\n            type: String,\n            required: true,\n        },\n        fileSizeLimit: {\n            type: Number,\n            default: 8388608,\n            validator: value => value <= 8388608,\n        },\n        params: {\n            type: Object,\n            default: null,\n        },\n    },\n\n    data() {\n        return {\n            input: null,\n            formData: new FormData(),\n        };\n    },\n\n    methods: {\n        openFileBrowser() {\n            this.input.click();\n        },\n        upload() {\n            this.$emit('upload-start');\n            this.setFormData();\n\n            axios.post(this.url, this.formData).then((response) => {\n                this.resetForm();\n                this.$emit('upload-successful', response.data);\n            }).catch((error) => {\n                this.resetForm();\n                this.$emit('upload-error');\n                this.handleError(error);\n            });\n        },\n        setFormData() {\n            const { files } = this.input;\n            this.addFiles(files);\n            this.addParams();\n        },\n        addFiles(files) {\n            for (let i = 0; i < files.length; i++) {\n                if (this.sizeCheckPasses(files[i])) {\n                    this.formData.append(`file_${i}`, files[i]);\n                }\n            }\n        },\n        addParams() {\n            if (this.params) {\n                Object.entries(this.params).forEach(([key, param]) => {\n                    const value = typeof param === 'object'\n                        ? JSON.stringify(param)\n                        : param;\n\n                    this.formData.append(key, value);\n                });\n            }\n        },\n        sizeCheckPasses(file) {\n            if (file.size > this.fileSizeLimit) {\n                toastr.warning(`File size Limit of ${this.fileSizeLimit} Kb excedeed by ${file.name}`);\n                return false;\n            }\n\n            return true;\n        },\n        resetForm() {\n            this.$el.reset();\n        },\n    },\n\n    mounted() {\n        this.input = this.$el.querySelector('input');\n    },\n};\n\n</script>\n\n<style>\n\n    form.file-upload {\n        display: inline-table;\n    }\n\n    button.file-upload {\n        background: transparent;\n    }\n\n    .file-input.hidden {\n        display: none;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
            this.input.click();
        },
        upload: function upload() {
            var _this = this;

            this.$emit('upload-start');
            this.setFormData();

            axios.post(this.url, this.formData).then(function (response) {
                _this.resetForm();
                _this.$emit('upload-successful', response.data);
            }).catch(function (error) {
                _this.resetForm();
                _this.$emit('upload-error');
                _this.handleError(error);
            });
        },
        setFormData: function setFormData() {
            var files = this.input.files;

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
                toastr.warning('File size Limit of ' + this.fileSizeLimit + ' Kb excedeed by ' + file.name);
                return false;
            }

            return true;
        },
        resetForm: function resetForm() {
            this.$el.reset();
        }
    },

    mounted: function mounted() {
        this.input = this.$el.querySelector('input');
    }
});

/***/ }),

/***/ 1215:
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
              staticClass: "file-input hidden",
              attrs: { multiple: _vm.multiple, type: "file" },
              on: { change: _vm.upload }
            }),
            _vm._v(" "),
            _vm._t("upload-button", [_vm._m(0)], {
              openFileBrowser: _vm.openFileBrowser
            })
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("a", { staticClass: "icon is-small" }, [
      _c("i", { staticClass: "fa fa-upload" })
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-45987a88", module.exports)
  }
}

/***/ }),

/***/ 1408:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1409);
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

/***/ 1409:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.has-lateral-borders {\n    border-left: 1px solid rgba(0,0,0,0.2);\n    border-right: 1px solid rgba(0,0,0,0.2);\n}\n.stat-value {\n    font-size: 3em;\n    padding-top: 12px;\n}\n.stat-key {\n    font-size: 1.4em;\n    font-weight: 200;\n    padding-bottom: 8px;\n}\n.level.user-controls {\n    margin-bottom: 0;\n}\n.timeline-content {\n    -webkit-transition:all 1s ease;\n    transition:all 1s ease;\n}\n\n", "", {"version":3,"sources":["/home/mihai/work/_proj/spa2/resources/assets/js/pages/administration/users/resources/assets/js/pages/administration/users/Show.vue"],"names":[],"mappings":";AA6VA;IACA,uCAAA;IACA,wCAAA;CACA;AAEA;IACA,eAAA;IACA,kBAAA;CACA;AAEA;IACA,iBAAA;IACA,iBAAA;IACA,oBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,+BAAA;IAAA,uBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n\n    <div v-if=\"initialised\">\n        <div class=\"box profile-heading\">\n            <div class=\"columns is-multiline\">\n                <div class=\"column is-half-desktop\">\n                    <div class=\"columns is-mobile\">\n                        <div class=\"column is-narrow\">\n                            <div class=\"image is-128x128\">\n                                <img :src=\"avatarLink\">\n                            </div>\n                        </div>\n                        <div class=\"column\">\n                            <div class=\"level\">\n                                <div class=\"level-item has-padding-top-small\">\n                                    <div>\n                                        <p class=\"title is-3\">{{ profileUser.fullName }}</p>\n                                        <p>{{ __('role') }}: {{ profileUser.role.name }}</p>\n                                        <p>{{ __('since') }}: {{ profileUser.created_at }}</p>\n                                        <p class=\"has-margin-top-small\">\n                                            <div class=\"level user-controls\"\n                                                v-if=\"isSelfVisiting\">\n                                                <div class=\"level-left\">\n                                                    <button class=\"button is-small is-warning\"\n                                                        v-if=\"avatarId\"\n                                                        @click=\"deleteAvatar\">\n                                                        <span class=\"icon\">\n                                                            <i class=\"fa fa-trash-o\"></i>\n                                                        </span>\n                                                        <span>\n                                                            {{ __('Avatar') }}\n                                                        </span>\n                                                    </button>\n                                                    <file-uploader v-if=\"!avatarId\"\n                                                        @upload-successful=\"$store.commit('setUserAvatar', $event.id)\"\n                                                        :url=\"uploadAvatarLink\">\n                                                        <template slot=\"upload-button\"\n                                                            slot-scope=\"props\">\n                                                            <button  class=\"button is-small is-info\"\n                                                                @click=\"props.openFileBrowser\">\n                                                                <span class=\"icon\">\n                                                                    <i class=\"fa fa-upload\"></i>\n                                                                </span>\n                                                                <span>\n                                                                    {{ __('Avatar') }}\n                                                                </span>\n                                                            </button>\n                                                        </template>\n                                                    </file-uploader>\n                                                </div>\n                                                <div class=\"level-right\">\n                                                    <button class=\"button is-small is-danger\"\n                                                        @click=\"logout()\">\n                                                        <span class=\"icon\">\n                                                            <i class=\"fa fa-sign-out\"></i>\n                                                        </span>\n                                                        <span>\n                                                            {{ __('Log Out') }}\n                                                        </span>\n                                                    </button>\n                                                </div>\n                                            </div>\n                                            <div v-else>\n                                                <button class=\"button is-small is-warning\"\n                                                    @click=\"$bus.$emit('start-impersonating', profileUser.id)\"\n                                                    v-if=\"!$store.state.impersonating\">\n                                                    {{ __('Impersonate') }}\n                                                </button>\n                                            </div>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"column is-half-desktop\">\n                    <div class=\"columns is-mobile\">\n                        <div class=\"column has-text-centered\">\n                          <p class=\"stat-value\">{{ profileUser.loginCount }}</p>\n                          <p class=\"stat-key\">{{ __('logins') }}</p>\n                        </div>\n                        <div class=\"column has-text-centered has-lateral-borders\">\n                          <p class=\"stat-value\">{{ profileUser.actionLogCount }}</p>\n                          <p class=\"stat-key\">{{ __('actions') }}</p>\n                        </div>\n                        <div class=\"column has-text-centered\">\n                          <p class=\"stat-value\">{{ profileUser.rating }}</p>\n                          <p class=\"stat-key\">{{ __('rating') }}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"columns is-centered\">\n            <div class=\"column is-two-thirds-tablet\">\n                <div class=\"box\">\n                    <nav class=\"pagination is-small has-margin-bottom-large\" role=\"navigation\" aria-label=\"pagination\">\n                        <a class=\"pagination-previous\"\n                            @click=\"getPage(profileUser.timeline.current_page - 1)\"\n                            :disabled=\"profileUser.timeline.prev_page_url===null\">\n                            {{ __('Previous') }}\n                        </a>\n                        <a class=\"pagination-next\"\n                            @click=\"getPage(profileUser.timeline.current_page + 1)\"\n                            :disabled=\"profileUser.timeline.next_page_url===null\">\n                            {{ __('Next') }}\n                        </a>\n                        <ul class=\"pagination-list\" v-if=\"isShort\">\n                            <li v-for=\"i in profileUser.timeline.last_page\">\n                                <a class=\"pagination-link\"\n                                    :class=\"{ 'is-current': profileUser.timeline.current_page === i}\"\n                                    @click=\"getPage(i)\">\n                                    {{ i }}\n                                </a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination-list\" v-if=\"isAtStart && !isShort\">\n                            <li v-for=\"i in 3\"\n                                :key=\"i\">\n                                <a class=\"pagination-link\"\n                                    :class=\"{ 'is-current': profileUser.timeline.current_page === i}\"\n                                    @click=\"getPage(i)\">\n                                    {{ i }}\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.last_page)\">\n                                    {{ profileUser.timeline.last_page }}\n                                </a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination-list\" v-if=\"hasMiddle && !isShort\">\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(1)\">\n                                    1\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.current_page - 1)\">\n                                    {{ profileUser.timeline.current_page - 1 }}\n                                </a>\n                            </li>\n                            <li>\n                                <a class=\"pagination-link is-current\">\n                                    {{ profileUser.timeline.current_page }}\n                                </a>\n                            </li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.current_page + 1)\">\n                                    {{ profileUser.timeline.current_page + 1 }}\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.last_page)\">\n                                    {{ profileUser.timeline.last_page }}\n                                </a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination-list\" v-if=\"isAtEnd && !isShort\">\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(1)\">\n                                    1\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li v-for=\"i in 3\"\n                                :key=\"i\">\n                                <a class=\"pagination-link\"\n                                    :class=\"{ 'is-current': profileUser.timeline.current_page === profileUser.timeline.last_page - 3 + i}\"\n                                    @click=\"getPage(profileUser.timeline.last_page - 3 + i)\">\n                                    {{ profileUser.timeline.last_page - 3 + i }}\n                                </a>\n                            </li>\n                        </ul>\n                    </nav>\n                    <ul class=\"timeline\">\n                        <div v-for=\"(actions, day) in timeline\"\n                            class=\"timeline-content\"\n                            :key=\"day\">\n                            <li class=\"timeline-header\">\n                                <span class=\"tag is-medium is-primary\">{{ __(day) }}</span>\n                            </li>\n                            <!-- <li class=\"timeline-item\">\n                                <div class=\"timeline-marker\"></div>\n                                <div class=\"timeline-content\">\n                                    <p class=\"heading\">January 2016</p>\n                                    <p>Timeline content - Can include any HTML element</p>\n                                </div>\n                            </li> -->\n                            <li class=\"timeline-item\"\n                                v-for=\"(action, index) in actions\"\n                                :key=\"index\">\n                                <div class=\"timeline-marker is-icon\">\n                                    <i :class=\"getIcon(action.route)\"></i>\n                                </div>\n                                <div class=\"timeline-content\">\n                                    <p class=\"heading\">{{ getHRDate(action.created_at) }} {{ getHRTime(action.created_at) }}</p>\n                                    <p>{{ action.permission.description }}</p>\n                                </div>\n                            </li>\n                        </div>\n                        <li class=\"timeline-header\"\n                            v-if=\"profileUser.timeline.current_page === profileUser.timeline.last_page\">\n                            <span class=\"tag is-medium is-primary\">{{ __('End') }}</span>\n                        </li>\n                        <li class=\"timeline-item\"\n                            v-else>\n                            <div class=\"timeline-marker is-icon\">\n                                <i class=\"fa fa-fw fa-ellipsis-h\"></i>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport { mapGetters, mapState } from 'vuex';\nimport FileUploader from '../../../components/enso/fileuploader/FileUploader.vue';\n\nexport default {\n    components: { FileUploader },\n\n    computed: {\n        ...mapGetters('locale', {\n            __: '__',\n            locale: 'current',\n        }),\n        ...mapState(['user', 'meta']),\n        uploadAvatarLink() {\n            return route('core.avatars.store', [], false);\n        },\n        isSelfVisiting() {\n            return this.user.id === this.profileUser.id;\n        },\n        avatarId() {\n            if (this.isSelfVisiting) {\n                return this.user.avatarId;\n            }\n\n            return this.profileUser.avatar ? this.profileUser.avatar.id : null;\n        },\n        avatarLink() {\n            return route('core.avatars.show', (this.avatarId || 'null'), false);\n        },\n        timeline() {\n            const actions = this.profileUser.timeline.data;\n\n            return actions.map(action => action.created_at).reduce((days, record) => {\n                days.push(this.getDay(record));\n                return days;\n            }, []).filter((value, index, days) => days.indexOf(value) === index)\n                .reduce((timeline, day) => {\n                    timeline[day] = actions\n                        .filter(record => this.getDay(record.created_at) === day);\n                    return timeline;\n                }, {});\n        },\n        isShort() {\n            return this.profileUser.timeline.last_page <= 5;\n        },\n        isAtStart() {\n            return this.profileUser.timeline.current_page <= 2;\n        },\n        isAtEnd() {\n            return this.profileUser.timeline.last_page\n                - this.profileUser.timeline.current_page <= 2;\n        },\n        hasMiddle() {\n            return !this.isAtStart && !this.isAtEnd;\n        },\n        paginationUrl() {\n            return `${route('administration.users.show', [this.profileUser.id], false)}?page=`;\n        },\n    },\n\n    data() {\n        return {\n            initialised: false,\n            profileUser: {},\n        };\n    },\n\n    watch: {\n        locale: {\n            handler() {\n                this.getPage(this.profileUser.timeline.current_page);\n            },\n        },\n    },\n\n    methods: {\n        deleteAvatar() {\n            axios.delete(route('core.avatars.destroy', this.user.avatarId, false)).then(() => {\n                this.$store.commit('setUserAvatar', null);\n            }).catch(error => this.handleError(error));\n        },\n        logout() {\n            axios.post(route('logout', [], false).toString()).then(() => {\n                this.$store.dispatch('auth/logout');\n            }).catch(error => this.handleError(error));\n        },\n        getDay(timestamp) {\n            return moment(timestamp).calendar().split(' ')[0];\n        },\n        getHRDate(timestamp) {\n            return moment(timestamp).format(this.meta.dateFormat);\n        },\n        getHRTime(timestamp) {\n            return moment(timestamp).format('H:mm');\n        },\n        getIcon(action) {\n            if (action.indexOf('index') > 0) return 'fa fa-eye has-text-success';\n            if (action.indexOf('create') > 0) return 'fa fa-plus has-text-warning';\n            if (action.indexOf('edit') > 0) return 'fa fa-pencil has-text-warning';\n            return 'fa fa-trash-o has-text-danger';\n        },\n        getPage(page) {\n            axios.get(this.paginationUrl + page).then(({ data }) => {\n                this.profileUser = data.user;\n            }).catch(error => this.handleError(error));\n        },\n    },\n\n    mounted() {\n        axios.get(route(this.$route.name, this.$route.params.id, false)).then((response) => {\n            this.profileUser = response.data.user;\n            this.initialised = true;\n        }).catch(error => this.handleError(error));\n    },\n};\n\n</script>\n\n<style>\n\n    .has-lateral-borders {\n        border-left: 1px solid rgba(0,0,0,0.2);\n        border-right: 1px solid rgba(0,0,0,0.2);\n    }\n\n    .stat-value {\n        font-size: 3em;\n        padding-top: 12px;\n    }\n\n    .stat-key {\n        font-size: 1.4em;\n        font-weight: 200;\n        padding-bottom: 8px;\n    }\n\n    .level.user-controls {\n        margin-bottom: 0;\n    }\n\n    .timeline-content {\n        transition:all 1s ease;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1410:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_fileuploader_FileUploader_vue__ = __webpack_require__(1211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_fileuploader_FileUploader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_enso_fileuploader_FileUploader_vue__);
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





/* harmony default export */ __webpack_exports__["default"] = ({
    components: { FileUploader: __WEBPACK_IMPORTED_MODULE_1__components_enso_fileuploader_FileUploader_vue___default.a },

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
            if (action.indexOf('index') > 0) return 'fa fa-eye has-text-success';
            if (action.indexOf('create') > 0) return 'fa fa-plus has-text-warning';
            if (action.indexOf('edit') > 0) return 'fa fa-pencil has-text-warning';
            return 'fa fa-trash-o has-text-danger';
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

/***/ 1411:
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
                                              _vm._m(0),
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
                                                            _c("i", {
                                                              staticClass:
                                                                "fa fa-upload"
                                                            })
                                                          ]
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
                                        _vm._m(1),
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
                {
                  staticClass: "pagination is-small has-margin-bottom-large",
                  attrs: { role: "navigation", "aria-label": "pagination" }
                },
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
                          return _c("li", [
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
                        _vm._m(3),
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
                        _vm._m(4),
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
                          _vm._m(5),
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
                { staticClass: "timeline" },
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
                                { staticClass: "timeline-marker is-icon" },
                                [_c("i", { class: _vm.getIcon(action.route) })]
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
                    : _c("li", { staticClass: "timeline-item" }, [_vm._m(6)])
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
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-trash-o" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("span", { staticClass: "icon" }, [
      _c("i", { staticClass: "fa fa-sign-out" })
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
    return _c("div", { staticClass: "timeline-marker is-icon" }, [
      _c("i", { staticClass: "fa fa-fw fa-ellipsis-h" })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlPzk0MzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWU/MmQzNCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWU/MWQzMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlPzRiOGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9TaG93LnZ1ZT9kYmY0Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWU/ODYyNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5TTtBQUN6TTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RDtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkRBQTZEO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLDZCQUE2QjtBQUMxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qix3Q0FBd0M7QUFDL0QseUJBQXlCLG1DQUFtQztBQUM1RCwyQkFBMkIsMENBQTBDO0FBQ3JFLDJCQUEyQiw0QkFBNEI7QUFDdkQ7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBCQUEwQjtBQUNyRDtBQUNBO0FB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O0FBQ0EsZ0NBQWdDLCtCQUErQjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLHNCQUFzQjtBQUM3QyxlQUFlLCtCQUErQjtBQUM5QztBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0MsZUFBZSxnQ0FBZ0M7QUFDL0M7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQixxQ0FBcUM7QUFDdkQ7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IseUNBQXlDO0FBQy9ELGVBQWUsd0NBQXdDO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDIiwiZmlsZSI6IjMxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xOGEzY2I0OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlICovXG52YXIgX192dWVfdGVtcGxhdGVfXyA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci9pbmRleD97XFxcImlkXFxcIjpcXFwiZGF0YS12LTE4YTNjYjQ4XFxcIixcXFwiaGFzU2NvcGVkXFxcIjpmYWxzZSxcXFwiYnVibGVcXFwiOntcXFwidHJhbnNmb3Jtc1xcXCI6e319fSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vU2hvdy52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWVcIlxuXG4vKiBob3QgcmVsb2FkICovXG5pZiAobW9kdWxlLmhvdCkgeyhmdW5jdGlvbiAoKSB7XG4gIHZhciBob3RBUEkgPSByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpXG4gIGhvdEFQSS5pbnN0YWxsKHJlcXVpcmUoXCJ2dWVcIiksIGZhbHNlKVxuICBpZiAoIWhvdEFQSS5jb21wYXRpYmxlKSByZXR1cm5cbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAoIW1vZHVsZS5ob3QuZGF0YSkge1xuICAgIGhvdEFQSS5jcmVhdGVSZWNvcmQoXCJkYXRhLXYtMThhM2NiNDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH0gZWxzZSB7XG4gICAgaG90QVBJLnJlbG9hZChcImRhdGEtdi0xOGEzY2I0OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfVxuICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBkaXNwb3NlZCA9IHRydWVcbiAgfSlcbn0pKCl9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTA1NFxuLy8gbW9kdWxlIGNodW5rcyA9IDMxIiwidmFyIGRpc3Bvc2VkID0gZmFsc2VcbmZ1bmN0aW9uIGluamVjdFN0eWxlIChzc3JDb250ZXh0KSB7XG4gIGlmIChkaXNwb3NlZCkgcmV0dXJuXG4gIHJlcXVpcmUoXCIhIXZ1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4P3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NTk4N2E4OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9GaWxlVXBsb2FkZXIudnVlXCIpXG59XG52YXIgbm9ybWFsaXplQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIilcbi8qIHNjcmlwdCAqL1xudmFyIF9fdnVlX3NjcmlwdF9fID0gcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyP3tcXFwiY2FjaGVEaXJlY3RvcnlcXFwiOnRydWUsXFxcInByZXNldHNcXFwiOltbXFxcImVudlxcXCIse1xcXCJtb2R1bGVzXFxcIjpmYWxzZSxcXFwidGFyZ2V0c1xcXCI6e1xcXCJicm93c2Vyc1xcXCI6W1xcXCI+IDIlXFxcIl0sXFxcInVnbGlmeVxcXCI6dHJ1ZX19XV0sXFxcInBsdWdpbnNcXFwiOltcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsW1xcXCJ0cmFuc2Zvcm0tcnVudGltZVxcXCIse1xcXCJwb2x5ZmlsbFxcXCI6ZmFsc2UsXFxcImhlbHBlcnNcXFwiOmZhbHNlfV0sXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFxcXCJzeW50YXgtZHluYW1pYy1pbXBvcnRcXFwiXX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9GaWxlVXBsb2FkZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi00NTk4N2E4OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0ZpbGVVcGxvYWRlci52dWVcIilcbi8qIHRlbXBsYXRlIGZ1bmN0aW9uYWwgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9mdW5jdGlvbmFsX18gPSBmYWxzZVxuLyogc3R5bGVzICovXG52YXIgX192dWVfc3R5bGVzX18gPSBpbmplY3RTdHlsZVxuLyogc2NvcGVJZCAqL1xudmFyIF9fdnVlX3Njb3BlSWRfXyA9IG51bGxcbi8qIG1vZHVsZUlkZW50aWZpZXIgKHNlcnZlciBvbmx5KSAqL1xudmFyIF9fdnVlX21vZHVsZV9pZGVudGlmaWVyX18gPSBudWxsXG52YXIgQ29tcG9uZW50ID0gbm9ybWFsaXplQ29tcG9uZW50KFxuICBfX3Z1ZV9zY3JpcHRfXyxcbiAgX192dWVfdGVtcGxhdGVfXyxcbiAgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fLFxuICBfX3Z1ZV9zdHlsZXNfXyxcbiAgX192dWVfc2NvcGVJZF9fLFxuICBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcInJlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTQ1OTg3YTg4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtNDU5ODdhODhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMSAyIDMxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ1OTg3YTg4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ZpbGVVcGxvYWRlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjhiYzVhMjY0XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ1OTg3YTg4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ZpbGVVcGxvYWRlci52dWVcIiwgZnVuY3Rpb24oKSB7XG4gICAgIHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDU5ODdhODhcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vRmlsZVVwbG9hZGVyLnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi00NTk4N2E4OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDEyMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMzEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuZm9ybS5maWxlLXVwbG9hZCB7XFxuICAgIGRpc3BsYXk6IGlubGluZS10YWJsZTtcXG59XFxuYnV0dG9uLmZpbGUtdXBsb2FkIHtcXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XFxufVxcbi5maWxlLWlucHV0LmhpZGRlbiB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvaG9tZS9taWhhaS93b3JrL19wcm9qL3NwYTIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFrSEE7SUFDQSxzQkFBQTtDQUNBO0FBRUE7SUFDQSx3QkFBQTtDQUNBO0FBRUE7SUFDQSxjQUFBO0NBQ0FcIixcImZpbGVcIjpcIkZpbGVVcGxvYWRlci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8Zm9ybSBjbGFzcz1cXFwiZmlsZS11cGxvYWQgaXMtbWFyZ2lubGVzc1xcXCJcXG4gICAgICAgIEBzdWJtaXQucHJldmVudD5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImZpbGVcXFwiPlxcbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cXFwiZmlsZS1sYWJlbFxcXCI+XFxuICAgICAgICAgICAgICAgIDxpbnB1dCA6bXVsdGlwbGU9XFxcIm11bHRpcGxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcImZpbGUtaW5wdXQgaGlkZGVuXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cXFwiZmlsZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XFxcInVwbG9hZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJ1cGxvYWQtYnV0dG9uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpvcGVuLWZpbGUtYnJvd3Nlcj1cXFwib3BlbkZpbGVCcm93c2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwib3BlbkZpbGVCcm93c2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11cGxvYWRcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Zvcm0+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIG11bHRpcGxlOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICB1cmw6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgZmlsZVNpemVMaW1pdDoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICBkZWZhdWx0OiA4Mzg4NjA4LFxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogdmFsdWUgPT4gdmFsdWUgPD0gODM4ODYwOCxcXG4gICAgICAgIH0sXFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGlucHV0OiBudWxsLFxcbiAgICAgICAgICAgIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKSxcXG4gICAgICAgIH07XFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIG9wZW5GaWxlQnJvd3NlcigpIHtcXG4gICAgICAgICAgICB0aGlzLmlucHV0LmNsaWNrKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdXBsb2FkKCkge1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwbG9hZC1zdGFydCcpO1xcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9ybURhdGEoKTtcXG5cXG4gICAgICAgICAgICBheGlvcy5wb3N0KHRoaXMudXJsLCB0aGlzLmZvcm1EYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWQtc3VjY2Vzc2Z1bCcsIHJlc3BvbnNlLmRhdGEpO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0Rm9ybSgpO1xcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWQtZXJyb3InKTtcXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XFxuICAgICAgICAgICAgfSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgc2V0Rm9ybURhdGEoKSB7XFxuICAgICAgICAgICAgY29uc3QgeyBmaWxlcyB9ID0gdGhpcy5pbnB1dDtcXG4gICAgICAgICAgICB0aGlzLmFkZEZpbGVzKGZpbGVzKTtcXG4gICAgICAgICAgICB0aGlzLmFkZFBhcmFtcygpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGFkZEZpbGVzKGZpbGVzKSB7XFxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaXplQ2hlY2tQYXNzZXMoZmlsZXNbaV0pKSB7XFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhLmFwcGVuZChgZmlsZV8ke2l9YCwgZmlsZXNbaV0pO1xcbiAgICAgICAgICAgICAgICB9XFxuICAgICAgICAgICAgfVxcbiAgICAgICAgfSxcXG4gICAgICAgIGFkZFBhcmFtcygpIHtcXG4gICAgICAgICAgICBpZiAodGhpcy5wYXJhbXMpIHtcXG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wYXJhbXMpLmZvckVhY2goKFtrZXksIHBhcmFtXSkgPT4ge1xcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgcGFyYW0gPT09ICdvYmplY3QnXFxuICAgICAgICAgICAgICAgICAgICAgICAgPyBKU09OLnN0cmluZ2lmeShwYXJhbSlcXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhcmFtO1xcblxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtRGF0YS5hcHBlbmQoa2V5LCB2YWx1ZSk7XFxuICAgICAgICAgICAgICAgIH0pO1xcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBzaXplQ2hlY2tQYXNzZXMoZmlsZSkge1xcbiAgICAgICAgICAgIGlmIChmaWxlLnNpemUgPiB0aGlzLmZpbGVTaXplTGltaXQpIHtcXG4gICAgICAgICAgICAgICAgdG9hc3RyLndhcm5pbmcoYEZpbGUgc2l6ZSBMaW1pdCBvZiAke3RoaXMuZmlsZVNpemVMaW1pdH0gS2IgZXhjZWRlZWQgYnkgJHtmaWxlLm5hbWV9YCk7XFxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcXG4gICAgICAgICAgICB9XFxuXFxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XFxuICAgICAgICB9LFxcbiAgICAgICAgcmVzZXRGb3JtKCkge1xcbiAgICAgICAgICAgIHRoaXMuJGVsLnJlc2V0KCk7XFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtb3VudGVkKCkge1xcbiAgICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuJGVsLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0Jyk7XFxuICAgIH0sXFxufTtcXG5cXG48L3NjcmlwdD5cXG5cXG48c3R5bGU+XFxuXFxuICAgIGZvcm0uZmlsZS11cGxvYWQge1xcbiAgICAgICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xcbiAgICB9XFxuXFxuICAgIGJ1dHRvbi5maWxlLXVwbG9hZCB7XFxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcXG4gICAgfVxcblxcbiAgICAuZmlsZS1pbnB1dC5oaWRkZW4ge1xcbiAgICAgICAgZGlzcGxheTogbm9uZTtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTQ1OTg3YTg4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvRmlsZVVwbG9hZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEgMiAzMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxmb3JtIGNsYXNzPVwiZmlsZS11cGxvYWQgaXMtbWFyZ2lubGVzc1wiXG4gICAgICAgIEBzdWJtaXQucHJldmVudD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImZpbGVcIj5cbiAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImZpbGUtbGFiZWxcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgOm11bHRpcGxlPVwibXVsdGlwbGVcIlxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZpbGUtaW5wdXQgaGlkZGVuXCJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPVwidXBsb2FkXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzbG90IG5hbWU9XCJ1cGxvYWQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpvcGVuLWZpbGUtYnJvd3Nlcj1cIm9wZW5GaWxlQnJvd3NlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvcGVuRmlsZUJyb3dzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwiaWNvbiBpcy1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdXBsb2FkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XG4gICAgICAgICAgICA8L2xhYmVsPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Zvcm0+XG5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICBwcm9wczoge1xuICAgICAgICBtdWx0aXBsZToge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZhbHNlLFxuICAgICAgICB9LFxuICAgICAgICB1cmw6IHtcbiAgICAgICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgICAgIHJlcXVpcmVkOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgICBmaWxlU2l6ZUxpbWl0OiB7XG4gICAgICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgICAgICBkZWZhdWx0OiA4Mzg4NjA4LFxuICAgICAgICAgICAgdmFsaWRhdG9yOiB2YWx1ZSA9PiB2YWx1ZSA8PSA4Mzg4NjA4LFxuICAgICAgICB9LFxuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIGRhdGEoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbnB1dDogbnVsbCxcbiAgICAgICAgICAgIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgbWV0aG9kczoge1xuICAgICAgICBvcGVuRmlsZUJyb3dzZXIoKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LmNsaWNrKCk7XG4gICAgICAgIH0sXG4gICAgICAgIHVwbG9hZCgpIHtcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwbG9hZC1zdGFydCcpO1xuICAgICAgICAgICAgdGhpcy5zZXRGb3JtRGF0YSgpO1xuXG4gICAgICAgICAgICBheGlvcy5wb3N0KHRoaXMudXJsLCB0aGlzLmZvcm1EYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBsb2FkLXN1Y2Nlc3NmdWwnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRGb3JtKCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBsb2FkLWVycm9yJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFcnJvcihlcnJvcik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0Rm9ybURhdGEoKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZpbGVzIH0gPSB0aGlzLmlucHV0O1xuICAgICAgICAgICAgdGhpcy5hZGRGaWxlcyhmaWxlcyk7XG4gICAgICAgICAgICB0aGlzLmFkZFBhcmFtcygpO1xuICAgICAgICB9LFxuICAgICAgICBhZGRGaWxlcyhmaWxlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNpemVDaGVja1Bhc3NlcyhmaWxlc1tpXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtRGF0YS5hcHBlbmQoYGZpbGVfJHtpfWAsIGZpbGVzW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGFkZFBhcmFtcygpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmFtcykge1xuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucGFyYW1zKS5mb3JFYWNoKChba2V5LCBwYXJhbV0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0eXBlb2YgcGFyYW0gPT09ICdvYmplY3QnXG4gICAgICAgICAgICAgICAgICAgICAgICA/IEpTT04uc3RyaW5naWZ5KHBhcmFtKVxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJhbTtcblxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhLmFwcGVuZChrZXksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgc2l6ZUNoZWNrUGFzc2VzKGZpbGUpIHtcbiAgICAgICAgICAgIGlmIChmaWxlLnNpemUgPiB0aGlzLmZpbGVTaXplTGltaXQpIHtcbiAgICAgICAgICAgICAgICB0b2FzdHIud2FybmluZyhgRmlsZSBzaXplIExpbWl0IG9mICR7dGhpcy5maWxlU2l6ZUxpbWl0fSBLYiBleGNlZGVlZCBieSAke2ZpbGUubmFtZX1gKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9LFxuICAgICAgICByZXNldEZvcm0oKSB7XG4gICAgICAgICAgICB0aGlzLiRlbC5yZXNldCgpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICB0aGlzLmlucHV0ID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcignaW5wdXQnKTtcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIGZvcm0uZmlsZS11cGxvYWQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgfVxuXG4gICAgYnV0dG9uLmZpbGUtdXBsb2FkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLmZpbGUtaW5wdXQuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtdXBsb2FkIGlzLW1hcmdpbmxlc3NcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLWxhYmVsXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiZmlsZS1pbnB1dCBoaWRkZW5cIixcbiAgICAgICAgICAgICAgYXR0cnM6IHsgbXVsdGlwbGU6IF92bS5tdWx0aXBsZSwgdHlwZTogXCJmaWxlXCIgfSxcbiAgICAgICAgICAgICAgb246IHsgY2hhbmdlOiBfdm0udXBsb2FkIH1cbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgIF92bS5fdChcInVwbG9hZC1idXR0b25cIiwgW192bS5fbSgwKV0sIHtcbiAgICAgICAgICAgICAgb3BlbkZpbGVCcm93c2VyOiBfdm0ub3BlbkZpbGVCcm93c2VyXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIF0sXG4gICAgICAgICAgMlxuICAgICAgICApXG4gICAgICBdKVxuICAgIF1cbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJhXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvbiBpcy1zbWFsbFwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXVwbG9hZFwiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtNDU5ODdhODhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTQ1OTg3YTg4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWVcbi8vIG1vZHVsZSBpZCA9IDEyMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIDIgMzEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleC5qcz97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMThhM2NiNDhcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc0NsaWVudC5qc1wiKShcIjc3ODBkMzY5XCIsIGNvbnRlbnQsIGZhbHNlKTtcbi8vIEhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcbmlmKG1vZHVsZS5ob3QpIHtcbiAvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuIGlmKCFjb250ZW50LmxvY2Fscykge1xuICAgbW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTE4YTNjYjQ4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTE4YTNjYjQ4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpO1xuICAgICBpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcbiAgICAgdXBkYXRlKG5ld0NvbnRlbnQpO1xuICAgfSk7XG4gfVxuIC8vIFdoZW4gdGhlIG1vZHVsZSBpcyBkaXNwb3NlZCwgcmVtb3ZlIHRoZSA8c3R5bGU+IHRhZ3NcbiBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIS4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTE4YTNjYjQ4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMzEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmhhcy1sYXRlcmFsLWJvcmRlcnMge1xcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xcbn1cXG4uc3RhdC12YWx1ZSB7XFxuICAgIGZvbnQtc2l6ZTogM2VtO1xcbiAgICBwYWRkaW5nLXRvcDogMTJweDtcXG59XFxuLnN0YXQta2V5IHtcXG4gICAgZm9udC1zaXplOiAxLjRlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDhweDtcXG59XFxuLmxldmVsLnVzZXItY29udHJvbHMge1xcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG4udGltZWxpbmUtY29udGVudCB7XFxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjphbGwgMXMgZWFzZTtcXG4gICAgdHJhbnNpdGlvbjphbGwgMXMgZWFzZTtcXG59XFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi9ob21lL21paGFpL3dvcmsvX3Byb2ovc3BhMi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQTZWQTtJQUNBLHVDQUFBO0lBQ0Esd0NBQUE7Q0FDQTtBQUVBO0lBQ0EsZUFBQTtJQUNBLGtCQUFBO0NBQ0E7QUFFQTtJQUNBLGlCQUFBO0lBQ0EsaUJBQUE7SUFDQSxvQkFBQTtDQUNBO0FBRUE7SUFDQSxpQkFBQTtDQUNBO0FBRUE7SUFDQSwrQkFBQTtJQUFBLHVCQUFBO0NBQ0FcIixcImZpbGVcIjpcIlNob3cudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXG5cXG4gICAgPGRpdiB2LWlmPVxcXCJpbml0aWFsaXNlZFxcXCI+XFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJib3ggcHJvZmlsZS1oZWFkaW5nXFxcIj5cXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIGlzLW11bHRpbGluZVxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBpcy1oYWxmLWRlc2t0b3BcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1ucyBpcy1tb2JpbGVcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBpcy1uYXJyb3dcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJpbWFnZSBpcy0xMjh4MTI4XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cXFwiYXZhdGFyTGlua1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLWl0ZW0gaGFzLXBhZGRpbmctdG9wLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwidGl0bGUgaXMtM1xcXCI+e3sgcHJvZmlsZVVzZXIuZnVsbE5hbWUgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IF9fKCdyb2xlJykgfX06IHt7IHByb2ZpbGVVc2VyLnJvbGUubmFtZSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgX18oJ3NpbmNlJykgfX06IHt7IHByb2ZpbGVVc2VyLmNyZWF0ZWRfYXQgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJoYXMtbWFyZ2luLXRvcC1zbWFsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbCB1c2VyLWNvbnRyb2xzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImlzU2VsZlZpc2l0aW5nXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1sZWZ0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYnV0dG9uIGlzLXNtYWxsIGlzLXdhcm5pbmdcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJhdmF0YXJJZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZGVsZXRlQXZhdGFyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtdHJhc2gtb1xcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0F2YXRhcicpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlsZS11cGxvYWRlciB2LWlmPVxcXCIhYXZhdGFySWRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBsb2FkLXN1Y2Nlc3NmdWw9XFxcIiRzdG9yZS5jb21taXQoJ3NldFVzZXJBdmF0YXInLCAkZXZlbnQuaWQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnVybD1cXFwidXBsb2FkQXZhdGFyTGlua1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cXFwidXBsb2FkLWJ1dHRvblxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbG90LXNjb3BlPVxcXCJwcm9wc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3M9XFxcImJ1dHRvbiBpcy1zbWFsbCBpcy1pbmZvXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcInByb3BzLm9wZW5GaWxlQnJvd3NlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11cGxvYWRcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKCdBdmF0YXInKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpbGUtdXBsb2FkZXI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtcmlnaHRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtc21hbGwgaXMtZGFuZ2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJsb2dvdXQoKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwiaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXNpZ24tb3V0XFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnTG9nIE91dCcpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtc21hbGwgaXMtd2FybmluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCIkYnVzLiRlbWl0KCdzdGFydC1pbXBlcnNvbmF0aW5nJywgcHJvZmlsZVVzZXIuaWQpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCIhJHN0b3JlLnN0YXRlLmltcGVyc29uYXRpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnSW1wZXJzb25hdGUnKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGlzLWhhbGYtZGVza3RvcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIGlzLW1vYmlsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJzdGF0LXZhbHVlXFxcIj57eyBwcm9maWxlVXNlci5sb2dpbkNvdW50IH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YXQta2V5XFxcIj57eyBfXygnbG9naW5zJykgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkIGhhcy1sYXRlcmFsLWJvcmRlcnNcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YXQtdmFsdWVcXFwiPnt7IHByb2ZpbGVVc2VyLmFjdGlvbkxvZ0NvdW50IH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YXQta2V5XFxcIj57eyBfXygnYWN0aW9ucycpIH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwic3RhdC12YWx1ZVxcXCI+e3sgcHJvZmlsZVVzZXIucmF0aW5nIH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YXQta2V5XFxcIj57eyBfXygncmF0aW5nJykgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbnMgaXMtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbiBpcy10d28tdGhpcmRzLXRhYmxldFxcXCI+XFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImJveFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8bmF2IGNsYXNzPVxcXCJwYWdpbmF0aW9uIGlzLXNtYWxsIGhhcy1tYXJnaW4tYm90dG9tLWxhcmdlXFxcIiByb2xlPVxcXCJuYXZpZ2F0aW9uXFxcIiBhcmlhLWxhYmVsPVxcXCJwYWdpbmF0aW9uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1wcmV2aW91c1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDEpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcInByb2ZpbGVVc2VyLnRpbWVsaW5lLnByZXZfcGFnZV91cmw9PT1udWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ1ByZXZpb3VzJykgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbmV4dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSArIDEpXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XFxcInByb2ZpbGVVc2VyLnRpbWVsaW5lLm5leHRfcGFnZV91cmw9PT1udWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ05leHQnKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlzdFxcXCIgdi1pZj1cXFwiaXNTaG9ydFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiaSBpbiBwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XFxcInsgJ2lzLWN1cnJlbnQnOiBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IGl9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZShpKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpc3RcXFwiIHYtaWY9XFxcImlzQXRTdGFydCAmJiAhaXNTaG9ydFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiaSBpbiAzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtY3VycmVudCc6IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gaX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKGkpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwicGFnaW5hdGlvbi1lbGxpcHNpc1xcXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlzdFxcXCIgdi1pZj1cXFwiaGFzTWlkZGxlICYmICFpc1Nob3J0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UoMSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWVsbGlwc2lzXFxcIj4maGVsbGlwOzwvc3Bhbj48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgLSAxKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIC0gMSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rIGlzLWN1cnJlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgKyAxKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XFxcInBhZ2luYXRpb24tZWxsaXBzaXNcXFwiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpc3RcXFwiIHYtaWY9XFxcImlzQXRFbmQgJiYgIWlzU2hvcnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZSgxKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XFxcInBhZ2luYXRpb24tZWxsaXBzaXNcXFwiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cXFwiaSBpbiAzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtY3VycmVudCc6IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIC0gMyArIGl9XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgLSAzICsgaSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtIDMgKyBpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxcbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVxcXCJ0aW1lbGluZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiB2LWZvcj1cXFwiKGFjdGlvbnMsIGRheSkgaW4gdGltZWxpbmVcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVxcXCJ0aW1lbGluZS1jb250ZW50XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJkYXlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInRpbWVsaW5lLWhlYWRlclxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFnIGlzLW1lZGl1bSBpcy1wcmltYXJ5XFxcIj57eyBfXyhkYXkpIH19PC9zcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxsaSBjbGFzcz1cXFwidGltZWxpbmUtaXRlbVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lbGluZS1tYXJrZXJcXFwiPjwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZWxpbmUtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImhlYWRpbmdcXFwiPkphbnVhcnkgMjAxNjwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaW1lbGluZSBjb250ZW50IC0gQ2FuIGluY2x1ZGUgYW55IEhUTUwgZWxlbWVudDwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiAtLT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVxcXCJ0aW1lbGluZS1pdGVtXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1mb3I9XFxcIihhY3Rpb24sIGluZGV4KSBpbiBhY3Rpb25zXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cXFwiaW5kZXhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZWxpbmUtbWFya2VyIGlzLWljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIDpjbGFzcz1cXFwiZ2V0SWNvbihhY3Rpb24ucm91dGUpXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWVsaW5lLWNvbnRlbnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJoZWFkaW5nXFxcIj57eyBnZXRIUkRhdGUoYWN0aW9uLmNyZWF0ZWRfYXQpIH19IHt7IGdldEhSVGltZShhY3Rpb24uY3JlYXRlZF9hdCkgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgYWN0aW9uLnBlcm1pc3Npb24uZGVzY3JpcHRpb24gfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInRpbWVsaW5lLWhlYWRlclxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwicHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PSBwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2VcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cXFwidGFnIGlzLW1lZGl1bSBpcy1wcmltYXJ5XFxcIj57eyBfXygnRW5kJykgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInRpbWVsaW5lLWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZWxpbmUtbWFya2VyIGlzLWljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLWZ3IGZhLWVsbGlwc2lzLWhcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgPC9kaXY+XFxuICAgIDwvZGl2PlxcblxcbjwvdGVtcGxhdGU+XFxuXFxuPHNjcmlwdD5cXG5cXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xcbmltcG9ydCBGaWxlVXBsb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlJztcXG5cXG5leHBvcnQgZGVmYXVsdCB7XFxuICAgIGNvbXBvbmVudHM6IHsgRmlsZVVwbG9hZGVyIH0sXFxuXFxuICAgIGNvbXB1dGVkOiB7XFxuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdsb2NhbGUnLCB7XFxuICAgICAgICAgICAgX186ICdfXycsXFxuICAgICAgICAgICAgbG9jYWxlOiAnY3VycmVudCcsXFxuICAgICAgICB9KSxcXG4gICAgICAgIC4uLm1hcFN0YXRlKFsndXNlcicsICdtZXRhJ10pLFxcbiAgICAgICAgdXBsb2FkQXZhdGFyTGluaygpIHtcXG4gICAgICAgICAgICByZXR1cm4gcm91dGUoJ2NvcmUuYXZhdGFycy5zdG9yZScsIFtdLCBmYWxzZSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgaXNTZWxmVmlzaXRpbmcoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlci5pZCA9PT0gdGhpcy5wcm9maWxlVXNlci5pZDtcXG4gICAgICAgIH0sXFxuICAgICAgICBhdmF0YXJJZCgpIHtcXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NlbGZWaXNpdGluZykge1xcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyLmF2YXRhcklkO1xcbiAgICAgICAgICAgIH1cXG5cXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlVXNlci5hdmF0YXIgPyB0aGlzLnByb2ZpbGVVc2VyLmF2YXRhci5pZCA6IG51bGw7XFxuICAgICAgICB9LFxcbiAgICAgICAgYXZhdGFyTGluaygpIHtcXG4gICAgICAgICAgICByZXR1cm4gcm91dGUoJ2NvcmUuYXZhdGFycy5zaG93JywgKHRoaXMuYXZhdGFySWQgfHwgJ251bGwnKSwgZmFsc2UpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHRpbWVsaW5lKCkge1xcbiAgICAgICAgICAgIGNvbnN0IGFjdGlvbnMgPSB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmRhdGE7XFxuXFxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMubWFwKGFjdGlvbiA9PiBhY3Rpb24uY3JlYXRlZF9hdCkucmVkdWNlKChkYXlzLCByZWNvcmQpID0+IHtcXG4gICAgICAgICAgICAgICAgZGF5cy5wdXNoKHRoaXMuZ2V0RGF5KHJlY29yZCkpO1xcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF5cztcXG4gICAgICAgICAgICB9LCBbXSkuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIGRheXMpID0+IGRheXMuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4KVxcbiAgICAgICAgICAgICAgICAucmVkdWNlKCh0aW1lbGluZSwgZGF5KSA9PiB7XFxuICAgICAgICAgICAgICAgICAgICB0aW1lbGluZVtkYXldID0gYWN0aW9uc1xcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocmVjb3JkID0+IHRoaXMuZ2V0RGF5KHJlY29yZC5jcmVhdGVkX2F0KSA9PT0gZGF5KTtcXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lbGluZTtcXG4gICAgICAgICAgICAgICAgfSwge30pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGlzU2hvcnQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIDw9IDU7XFxuICAgICAgICB9LFxcbiAgICAgICAgaXNBdFN0YXJ0KCkge1xcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA8PSAyO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGlzQXRFbmQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXFxuICAgICAgICAgICAgICAgIC0gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPD0gMjtcXG4gICAgICAgIH0sXFxuICAgICAgICBoYXNNaWRkbGUoKSB7XFxuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzQXRTdGFydCAmJiAhdGhpcy5pc0F0RW5kO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHBhZ2luYXRpb25VcmwoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIGAke3JvdXRlKCdhZG1pbmlzdHJhdGlvbi51c2Vycy5zaG93JywgW3RoaXMucHJvZmlsZVVzZXIuaWRdLCBmYWxzZSl9P3BhZ2U9YDtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcXG4gICAgICAgICAgICBwcm9maWxlVXNlcjoge30sXFxuICAgICAgICB9O1xcbiAgICB9LFxcblxcbiAgICB3YXRjaDoge1xcbiAgICAgICAgbG9jYWxlOiB7XFxuICAgICAgICAgICAgaGFuZGxlcigpIHtcXG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlKTtcXG4gICAgICAgICAgICB9LFxcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgbWV0aG9kczoge1xcbiAgICAgICAgZGVsZXRlQXZhdGFyKCkge1xcbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShyb3V0ZSgnY29yZS5hdmF0YXJzLmRlc3Ryb3knLCB0aGlzLnVzZXIuYXZhdGFySWQsIGZhbHNlKSkudGhlbigoKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMuJHN0b3JlLmNvbW1pdCgnc2V0VXNlckF2YXRhcicsIG51bGwpO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBsb2dvdXQoKSB7XFxuICAgICAgICAgICAgYXhpb3MucG9zdChyb3V0ZSgnbG9nb3V0JywgW10sIGZhbHNlKS50b1N0cmluZygpKS50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvbG9nb3V0Jyk7XFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGdldERheSh0aW1lc3RhbXApIHtcXG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KHRpbWVzdGFtcCkuY2FsZW5kYXIoKS5zcGxpdCgnICcpWzBdO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGdldEhSRGF0ZSh0aW1lc3RhbXApIHtcXG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KHRpbWVzdGFtcCkuZm9ybWF0KHRoaXMubWV0YS5kYXRlRm9ybWF0KTtcXG4gICAgICAgIH0sXFxuICAgICAgICBnZXRIUlRpbWUodGltZXN0YW1wKSB7XFxuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh0aW1lc3RhbXApLmZvcm1hdCgnSDptbScpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGdldEljb24oYWN0aW9uKSB7XFxuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbmRleE9mKCdpbmRleCcpID4gMCkgcmV0dXJuICdmYSBmYS1leWUgaGFzLXRleHQtc3VjY2Vzcyc7XFxuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbmRleE9mKCdjcmVhdGUnKSA+IDApIHJldHVybiAnZmEgZmEtcGx1cyBoYXMtdGV4dC13YXJuaW5nJztcXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2VkaXQnKSA+IDApIHJldHVybiAnZmEgZmEtcGVuY2lsIGhhcy10ZXh0LXdhcm5pbmcnO1xcbiAgICAgICAgICAgIHJldHVybiAnZmEgZmEtdHJhc2gtbyBoYXMtdGV4dC1kYW5nZXInO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGdldFBhZ2UocGFnZSkge1xcbiAgICAgICAgICAgIGF4aW9zLmdldCh0aGlzLnBhZ2luYXRpb25VcmwgKyBwYWdlKS50aGVuKCh7IGRhdGEgfSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVVc2VyID0gZGF0YS51c2VyO1xcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIG1vdW50ZWQoKSB7XFxuICAgICAgICBheGlvcy5nZXQocm91dGUodGhpcy4kcm91dGUubmFtZSwgdGhpcy4kcm91dGUucGFyYW1zLmlkLCBmYWxzZSkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XFxuICAgICAgICAgICAgdGhpcy5wcm9maWxlVXNlciA9IHJlc3BvbnNlLmRhdGEudXNlcjtcXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpc2VkID0gdHJ1ZTtcXG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgLmhhcy1sYXRlcmFsLWJvcmRlcnMge1xcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XFxuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIH1cXG5cXG4gICAgLnN0YXQtdmFsdWUge1xcbiAgICAgICAgZm9udC1zaXplOiAzZW07XFxuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcXG4gICAgfVxcblxcbiAgICAuc3RhdC1rZXkge1xcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcXG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xcbiAgICB9XFxuXFxuICAgIC5sZXZlbC51c2VyLWNvbnRyb2xzIHtcXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XFxuICAgIH1cXG5cXG4gICAgLnRpbWVsaW5lLWNvbnRlbnQge1xcbiAgICAgICAgdHJhbnNpdGlvbjphbGwgMXMgZWFzZTtcXG4gICAgfVxcblxcbjwvc3R5bGU+XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyP3tcInZ1ZVwiOnRydWUsXCJpZFwiOlwiZGF0YS12LTE4YTNjYjQ4XCIsXCJzY29wZWRcIjpmYWxzZSxcImhhc0lubGluZUNvbmZpZ1wiOnRydWV9IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMzEiLCI8dGVtcGxhdGU+XG5cbiAgICA8ZGl2IHYtaWY9XCJpbml0aWFsaXNlZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiYm94IHByb2ZpbGUtaGVhZGluZ1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbXVsdGlsaW5lXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1oYWxmLWRlc2t0b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLW5hcnJvd1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZSBpcy0xMjh4MTI4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgOnNyYz1cImF2YXRhckxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtaXRlbSBoYXMtcGFkZGluZy10b3Atc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ0aXRsZSBpcy0zXCI+e3sgcHJvZmlsZVVzZXIuZnVsbE5hbWUgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgX18oJ3JvbGUnKSB9fToge3sgcHJvZmlsZVVzZXIucm9sZS5uYW1lIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IF9fKCdzaW5jZScpIH19OiB7eyBwcm9maWxlVXNlci5jcmVhdGVkX2F0IH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGFzLW1hcmdpbi10b3Atc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsIHVzZXItY29udHJvbHNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImlzU2VsZlZpc2l0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtbGVmdFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtc21hbGwgaXMtd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJhdmF0YXJJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImRlbGV0ZUF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdHJhc2gtb1wiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKCdBdmF0YXInKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGZpbGUtdXBsb2FkZXIgdi1pZj1cIiFhdmF0YXJJZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGxvYWQtc3VjY2Vzc2Z1bD1cIiRzdG9yZS5jb21taXQoJ3NldFVzZXJBdmF0YXInLCAkZXZlbnQuaWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOnVybD1cInVwbG9hZEF2YXRhckxpbmtcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJ1cGxvYWQtYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Qtc2NvcGU9XCJwcm9wc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAgY2xhc3M9XCJidXR0b24gaXMtc21hbGwgaXMtaW5mb1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwicHJvcHMub3BlbkZpbGVCcm93c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiZmEgZmEtdXBsb2FkXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0F2YXRhcicpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9maWxlLXVwbG9hZGVyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwtcmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGlzLXNtYWxsIGlzLWRhbmdlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImxvZ291dCgpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1zaWduLW91dFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKCdMb2cgT3V0JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtc21hbGwgaXMtd2FybmluZ1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiJGJ1cy4kZW1pdCgnc3RhcnQtaW1wZXJzb25hdGluZycsIHByb2ZpbGVVc2VyLmlkKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cIiEkc3RvcmUuc3RhdGUuaW1wZXJzb25hdGluZ1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKCdJbXBlcnNvbmF0ZScpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtaGFsZi1kZXNrdG9wXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW5zIGlzLW1vYmlsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YXQtdmFsdWVcIj57eyBwcm9maWxlVXNlci5sb2dpbkNvdW50IH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YXQta2V5XCI+e3sgX18oJ2xvZ2lucycpIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkIGhhcy1sYXRlcmFsLWJvcmRlcnNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGF0LXZhbHVlXCI+e3sgcHJvZmlsZVVzZXIuYWN0aW9uTG9nQ291bnQgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhdC1rZXlcIj57eyBfXygnYWN0aW9ucycpIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhdC12YWx1ZVwiPnt7IHByb2ZpbGVVc2VyLnJhdGluZyB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGF0LWtleVwiPnt7IF9fKCdyYXRpbmcnKSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtY2VudGVyZWRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtdHdvLXRoaXJkcy10YWJsZXRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm94XCI+XG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJwYWdpbmF0aW9uIGlzLXNtYWxsIGhhcy1tYXJnaW4tYm90dG9tLWxhcmdlXCIgcm9sZT1cIm5hdmlnYXRpb25cIiBhcmlhLWxhYmVsPVwicGFnaW5hdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLXByZXZpb3VzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJwcm9maWxlVXNlci50aW1lbGluZS5wcmV2X3BhZ2VfdXJsPT09bnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKCdQcmV2aW91cycpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbmV4dFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgKyAxKVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmRpc2FibGVkPVwicHJvZmlsZVVzZXIudGltZWxpbmUubmV4dF9wYWdlX3VybD09PW51bGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnTmV4dCcpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIiB2LWlmPVwiaXNTaG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImkgaW4gcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWN1cnJlbnQnOiBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IGl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UoaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwicGFnaW5hdGlvbi1saXN0XCIgdi1pZj1cImlzQXRTdGFydCAmJiAhaXNTaG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImkgaW4gM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWN1cnJlbnQnOiBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IGl9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UoaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1lbGxpcHNpc1wiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIiB2LWlmPVwiaGFzTWlkZGxlICYmICFpc1Nob3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tZWxsaXBzaXNcIj4maGVsbGlwOzwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgLSAxKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIC0gMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rIGlzLWN1cnJlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSArIDEgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1lbGxpcHNpc1wiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIiB2LWlmPVwiaXNBdEVuZCAmJiAhaXNTaG9ydFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZSgxKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWVsbGlwc2lzXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgdi1mb3I9XCJpIGluIDNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Y2xhc3M9XCJ7ICdpcy1jdXJyZW50JzogcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PSBwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgLSAzICsgaX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgLSAzICsgaSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtIDMgKyBpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInRpbWVsaW5lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKGFjdGlvbnMsIGRheSkgaW4gdGltZWxpbmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGltZWxpbmUtY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImRheVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpbWVsaW5lLWhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZyBpcy1tZWRpdW0gaXMtcHJpbWFyeVwiPnt7IF9fKGRheSkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxsaSBjbGFzcz1cInRpbWVsaW5lLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLW1hcmtlclwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWFkaW5nXCI+SmFudWFyeSAyMDE2PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+VGltZWxpbmUgY29udGVudCAtIENhbiBpbmNsdWRlIGFueSBIVE1MIGVsZW1lbnQ8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IC0tPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpbWVsaW5lLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihhY3Rpb24sIGluZGV4KSBpbiBhY3Rpb25zXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImluZGV4XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1tYXJrZXIgaXMtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVwiZ2V0SWNvbihhY3Rpb24ucm91dGUpXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaGVhZGluZ1wiPnt7IGdldEhSRGF0ZShhY3Rpb24uY3JlYXRlZF9hdCkgfX0ge3sgZ2V0SFJUaW1lKGFjdGlvbi5jcmVhdGVkX2F0KSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPnt7IGFjdGlvbi5wZXJtaXNzaW9uLmRlc2NyaXB0aW9uIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XCJ0aW1lbGluZS1oZWFkZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XCJwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIGlzLW1lZGl1bSBpcy1wcmltYXJ5XCI+e3sgX18oJ0VuZCcpIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpbWVsaW5lLWl0ZW1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZWxzZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtbWFya2VyIGlzLWljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS1mdyBmYS1lbGxpcHNpcy1oXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblxuaW1wb3J0IHsgbWFwR2V0dGVycywgbWFwU3RhdGUgfSBmcm9tICd2dWV4JztcbmltcG9ydCBGaWxlVXBsb2FkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlJztcblxuZXhwb3J0IGRlZmF1bHQge1xuICAgIGNvbXBvbmVudHM6IHsgRmlsZVVwbG9hZGVyIH0sXG5cbiAgICBjb21wdXRlZDoge1xuICAgICAgICAuLi5tYXBHZXR0ZXJzKCdsb2NhbGUnLCB7XG4gICAgICAgICAgICBfXzogJ19fJyxcbiAgICAgICAgICAgIGxvY2FsZTogJ2N1cnJlbnQnLFxuICAgICAgICB9KSxcbiAgICAgICAgLi4ubWFwU3RhdGUoWyd1c2VyJywgJ21ldGEnXSksXG4gICAgICAgIHVwbG9hZEF2YXRhckxpbmsoKSB7XG4gICAgICAgICAgICByZXR1cm4gcm91dGUoJ2NvcmUuYXZhdGFycy5zdG9yZScsIFtdLCBmYWxzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIGlzU2VsZlZpc2l0aW5nKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlci5pZCA9PT0gdGhpcy5wcm9maWxlVXNlci5pZDtcbiAgICAgICAgfSxcbiAgICAgICAgYXZhdGFySWQoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5pc1NlbGZWaXNpdGluZykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXIuYXZhdGFySWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVVc2VyLmF2YXRhciA/IHRoaXMucHJvZmlsZVVzZXIuYXZhdGFyLmlkIDogbnVsbDtcbiAgICAgICAgfSxcbiAgICAgICAgYXZhdGFyTGluaygpIHtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZSgnY29yZS5hdmF0YXJzLnNob3cnLCAodGhpcy5hdmF0YXJJZCB8fCAnbnVsbCcpLCBmYWxzZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRpbWVsaW5lKCkge1xuICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUuZGF0YTtcblxuICAgICAgICAgICAgcmV0dXJuIGFjdGlvbnMubWFwKGFjdGlvbiA9PiBhY3Rpb24uY3JlYXRlZF9hdCkucmVkdWNlKChkYXlzLCByZWNvcmQpID0+IHtcbiAgICAgICAgICAgICAgICBkYXlzLnB1c2godGhpcy5nZXREYXkocmVjb3JkKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRheXM7XG4gICAgICAgICAgICB9LCBbXSkuZmlsdGVyKCh2YWx1ZSwgaW5kZXgsIGRheXMpID0+IGRheXMuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4KVxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHRpbWVsaW5lLCBkYXkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGltZWxpbmVbZGF5XSA9IGFjdGlvbnNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5maWx0ZXIocmVjb3JkID0+IHRoaXMuZ2V0RGF5KHJlY29yZC5jcmVhdGVkX2F0KSA9PT0gZGF5KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsaW5lO1xuICAgICAgICAgICAgICAgIH0sIHt9KTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNTaG9ydCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSA8PSA1O1xuICAgICAgICB9LFxuICAgICAgICBpc0F0U3RhcnQoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPD0gMjtcbiAgICAgICAgfSxcbiAgICAgICAgaXNBdEVuZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgIC0gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPD0gMjtcbiAgICAgICAgfSxcbiAgICAgICAgaGFzTWlkZGxlKCkge1xuICAgICAgICAgICAgcmV0dXJuICF0aGlzLmlzQXRTdGFydCAmJiAhdGhpcy5pc0F0RW5kO1xuICAgICAgICB9LFxuICAgICAgICBwYWdpbmF0aW9uVXJsKCkge1xuICAgICAgICAgICAgcmV0dXJuIGAke3JvdXRlKCdhZG1pbmlzdHJhdGlvbi51c2Vycy5zaG93JywgW3RoaXMucHJvZmlsZVVzZXIuaWRdLCBmYWxzZSl9P3BhZ2U9YDtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluaXRpYWxpc2VkOiBmYWxzZSxcbiAgICAgICAgICAgIHByb2ZpbGVVc2VyOiB7fSxcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgd2F0Y2g6IHtcbiAgICAgICAgbG9jYWxlOiB7XG4gICAgICAgICAgICBoYW5kbGVyKCkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFnZSh0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSk7XG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICAgIGRlbGV0ZUF2YXRhcigpIHtcbiAgICAgICAgICAgIGF4aW9zLmRlbGV0ZShyb3V0ZSgnY29yZS5hdmF0YXJzLmRlc3Ryb3knLCB0aGlzLnVzZXIuYXZhdGFySWQsIGZhbHNlKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRVc2VyQXZhdGFyJywgbnVsbCk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvZ291dCgpIHtcbiAgICAgICAgICAgIGF4aW9zLnBvc3Qocm91dGUoJ2xvZ291dCcsIFtdLCBmYWxzZSkudG9TdHJpbmcoKSkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGgvbG9nb3V0Jyk7XG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldERheSh0aW1lc3RhbXApIHtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQodGltZXN0YW1wKS5jYWxlbmRhcigpLnNwbGl0KCcgJylbMF07XG4gICAgICAgIH0sXG4gICAgICAgIGdldEhSRGF0ZSh0aW1lc3RhbXApIHtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQodGltZXN0YW1wKS5mb3JtYXQodGhpcy5tZXRhLmRhdGVGb3JtYXQpO1xuICAgICAgICB9LFxuICAgICAgICBnZXRIUlRpbWUodGltZXN0YW1wKSB7XG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KHRpbWVzdGFtcCkuZm9ybWF0KCdIOm1tJyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEljb24oYWN0aW9uKSB7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2luZGV4JykgPiAwKSByZXR1cm4gJ2ZhIGZhLWV5ZSBoYXMtdGV4dC1zdWNjZXNzJztcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaW5kZXhPZignY3JlYXRlJykgPiAwKSByZXR1cm4gJ2ZhIGZhLXBsdXMgaGFzLXRleHQtd2FybmluZyc7XG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2VkaXQnKSA+IDApIHJldHVybiAnZmEgZmEtcGVuY2lsIGhhcy10ZXh0LXdhcm5pbmcnO1xuICAgICAgICAgICAgcmV0dXJuICdmYSBmYS10cmFzaC1vIGhhcy10ZXh0LWRhbmdlcic7XG4gICAgICAgIH0sXG4gICAgICAgIGdldFBhZ2UocGFnZSkge1xuICAgICAgICAgICAgYXhpb3MuZ2V0KHRoaXMucGFnaW5hdGlvblVybCArIHBhZ2UpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9maWxlVXNlciA9IGRhdGEudXNlcjtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgICAgYXhpb3MuZ2V0KHJvdXRlKHRoaXMuJHJvdXRlLm5hbWUsIHRoaXMuJHJvdXRlLnBhcmFtcy5pZCwgZmFsc2UpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5wcm9maWxlVXNlciA9IHJlc3BvbnNlLmRhdGEudXNlcjtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XG4gICAgfSxcbn07XG5cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cbiAgICAuaGFzLWxhdGVyYWwtYm9yZGVycyB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLDAsMCwwLjIpO1xuICAgICAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG4gICAgfVxuXG4gICAgLnN0YXQtdmFsdWUge1xuICAgICAgICBmb250LXNpemU6IDNlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XG4gICAgfVxuXG4gICAgLnN0YXQta2V5IHtcbiAgICAgICAgZm9udC1zaXplOiAxLjRlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDhweDtcbiAgICB9XG5cbiAgICAubGV2ZWwudXNlci1jb250cm9scyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgLnRpbWVsaW5lLWNvbnRlbnQge1xuICAgICAgICB0cmFuc2l0aW9uOmFsbCAxcyBlYXNlO1xuICAgIH1cblxuPC9zdHlsZT5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfdm0uaW5pdGlhbGlzZWRcbiAgICA/IF9jKFwiZGl2XCIsIFtcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3ggcHJvZmlsZS1oZWFkaW5nXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBpcy1oYWxmLWRlc2t0b3BcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tb2JpbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtbmFycm93XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJpbWFnZSBpcy0xMjh4MTI4XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcImltZ1wiLCB7IGF0dHJzOiB7IHNyYzogX3ZtLmF2YXRhckxpbmsgfSB9KVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxldmVsLWl0ZW0gaGFzLXBhZGRpbmctdG9wLXNtYWxsXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInRpdGxlIGlzLTNcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHJvZmlsZVVzZXIuZnVsbE5hbWUpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLl9fKFwicm9sZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByb2ZpbGVVc2VyLnJvbGUubmFtZSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJzaW5jZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIjogXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByb2ZpbGVVc2VyLmNyZWF0ZWRfYXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGFzLW1hcmdpbi10b3Atc21hbGxcIiB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmlzU2VsZlZpc2l0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsZXZlbCB1c2VyLWNvbnRyb2xzXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtbGVmdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5hdmF0YXJJZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGlzLXNtYWxsIGlzLXdhcm5pbmdcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjogeyBjbGljazogX3ZtLmRlbGV0ZUF2YXRhciB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJBdmF0YXJcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLmF2YXRhcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcImZpbGUtdXBsb2FkZXJcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogX3ZtLnVwbG9hZEF2YXRhckxpbmtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInVwbG9hZC1zdWNjZXNzZnVsXCI6IGZ1bmN0aW9uKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uJHN0b3JlLmNvbW1pdChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzZXRVc2VyQXZhdGFyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICRldmVudC5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBcInVwbG9hZC1idXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZuOiBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24gaXMtc21hbGwgaXMtaW5mb1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMub3BlbkZpbGVCcm93c2VyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImljb25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJpXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJmYSBmYS11cGxvYWRcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9fKFwiQXZhdGFyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1yaWdodFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbiBpcy1zbWFsbCBpcy1kYW5nZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ubG9nb3V0KClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInNwYW5cIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJMb2cgT3V0XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX2MoXCJkaXZcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAhX3ZtLiRzdG9yZS5zdGF0ZS5pbXBlcnNvbmF0aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24gaXMtc21hbGwgaXMtd2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kYnVzLiRlbWl0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3RhcnQtaW1wZXJzb25hdGluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci5pZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJJbXBlcnNvbmF0ZVwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtaGFsZi1kZXNrdG9wXCIgfSwgW1xuICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtbW9iaWxlXCIgfSwgW1xuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC12YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHJvZmlsZVVzZXIubG9naW5Db3VudCkpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LWtleVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX18oXCJsb2dpbnNcIikpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkIGhhcy1sYXRlcmFsLWJvcmRlcnNcIlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC12YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcm9maWxlVXNlci5hY3Rpb25Mb2dDb3VudCkpXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LWtleVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fXyhcImFjdGlvbnNcIikpKVxuICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBoYXMtdGV4dC1jZW50ZXJlZFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQtdmFsdWVcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnByb2ZpbGVVc2VyLnJhdGluZykpXG4gICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LWtleVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0uX18oXCJyYXRpbmdcIikpKVxuICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKSxcbiAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLWNlbnRlcmVkXCIgfSwgW1xuICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLXR3by10aGlyZHMtdGFibGV0XCIgfSwgW1xuICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJib3hcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgIFwibmF2XCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbiBpcy1zbWFsbCBoYXMtbWFyZ2luLWJvdHRvbS1sYXJnZVwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgcm9sZTogXCJuYXZpZ2F0aW9uXCIsIFwiYXJpYS1sYWJlbFwiOiBcInBhZ2luYXRpb25cIiB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLXByZXZpb3VzXCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUucHJldl9wYWdlX3VybCA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJQcmV2aW91c1wiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1uZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubmV4dF9wYWdlX3VybCA9PT0gbnVsbFxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSArIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJOZXh0XCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXNTaG9ydFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtY3VycmVudFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmlzQXRTdGFydCAmJiAhX3ZtLmlzU2hvcnRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKDMsIGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCB7IGtleTogaSB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1jdXJyZW50XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKGkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5oYXNNaWRkbGUgJiYgIV92bS5pc1Nob3J0XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXCJ1bFwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlzdFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGFnZSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMyksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmsgaXMtY3VycmVudFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSArIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNCksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXNBdEVuZCAmJiAhX3ZtLmlzU2hvcnRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgIFwidWxcIixcbiAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saXN0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9tKDUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woMywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsga2V5OiBpIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWN1cnJlbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtIDMgKyBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGFnZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIC1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDMgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGltZWxpbmVcIiB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fbChfdm0udGltZWxpbmUsIGZ1bmN0aW9uKGFjdGlvbnMsIGRheSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJkaXZcIixcbiAgICAgICAgICAgICAgICAgICAgICB7IGtleTogZGF5LCBzdGF0aWNDbGFzczogXCJ0aW1lbGluZS1jb250ZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNwYW5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhZyBpcy1tZWRpdW0gaXMtcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLl9fKGRheSkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9sKGFjdGlvbnMsIGZ1bmN0aW9uKGFjdGlvbiwgaW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwibGlcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IGtleTogaW5kZXgsIHN0YXRpY0NsYXNzOiBcInRpbWVsaW5lLWl0ZW1cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRpbWVsaW5lLW1hcmtlciBpcy1pY29uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW19jKFwiaVwiLCB7IGNsYXNzOiBfdm0uZ2V0SWNvbihhY3Rpb24ucm91dGUpIH0pXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpbWVsaW5lLWNvbnRlbnRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcImhlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRIUkRhdGUoYWN0aW9uLmNyZWF0ZWRfYXQpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5nZXRIUlRpbWUoYWN0aW9uLmNyZWF0ZWRfYXQpKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhhY3Rpb24ucGVybWlzc2lvbi5kZXNjcmlwdGlvbikpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT1cbiAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2VcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtaGVhZGVyXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInRhZyBpcy1tZWRpdW0gaXMtcHJpbWFyeVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtfdm0uX3YoX3ZtLl9zKF92bS5fXyhcIkVuZFwiKSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgIDogX2MoXCJsaVwiLCB7IHN0YXRpY0NsYXNzOiBcInRpbWVsaW5lLWl0ZW1cIiB9LCBbX3ZtLl9tKDYpXSlcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgXSlcbiAgICAgICAgICBdKVxuICAgICAgICBdKVxuICAgICAgXSlcbiAgICA6IF92bS5fZSgpXG59XG52YXIgc3RhdGljUmVuZGVyRm5zID0gW1xuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtdHJhc2gtb1wiIH0pXG4gICAgXSlcbiAgfSxcbiAgZnVuY3Rpb24oKSB7XG4gICAgdmFyIF92bSA9IHRoaXNcbiAgICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgICByZXR1cm4gX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwiaWNvblwiIH0sIFtcbiAgICAgIF9jKFwiaVwiLCB7IHN0YXRpY0NsYXNzOiBcImZhIGZhLXNpZ24tb3V0XCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tZWxsaXBzaXNcIiB9LCBbX3ZtLl92KFwi4oCmXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tZWxsaXBzaXNcIiB9LCBbX3ZtLl92KFwi4oCmXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tZWxsaXBzaXNcIiB9LCBbX3ZtLl92KFwi4oCmXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImxpXCIsIFtcbiAgICAgIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tZWxsaXBzaXNcIiB9LCBbX3ZtLl92KFwi4oCmXCIpXSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcInRpbWVsaW5lLW1hcmtlciBpcy1pY29uXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtZncgZmEtZWxsaXBzaXMtaFwiIH0pXG4gICAgXSlcbiAgfVxuXVxucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5tb2R1bGUuZXhwb3J0cyA9IHsgcmVuZGVyOiByZW5kZXIsIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zIH1cbmlmIChtb2R1bGUuaG90KSB7XG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKG1vZHVsZS5ob3QuZGF0YSkge1xuICAgIHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIikgICAgICAucmVyZW5kZXIoXCJkYXRhLXYtMThhM2NiNDhcIiwgbW9kdWxlLmV4cG9ydHMpXG4gIH1cbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj97XCJpZFwiOlwiZGF0YS12LTE4YTNjYjQ4XCIsXCJoYXNTY29wZWRcIjpmYWxzZSxcImJ1YmxlXCI6e1widHJhbnNmb3Jtc1wiOnt9fX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDMxIl0sInNvdXJjZVJvb3QiOiIifQ==