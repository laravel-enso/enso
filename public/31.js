webpackJsonp([31],{

/***/ 1054:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1409)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1411)
/* template */
var __vue_template__ = __webpack_require__(1412)
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

/***/ 1209:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1210)
}
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(1212)
/* template */
var __vue_template__ = __webpack_require__(1213)
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

/***/ 1210:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1211);
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

/***/ 1211:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\nform.file-upload {\n    display: inline-table;\n}\nbutton.file-upload {\n    background: transparent;\n}\n.file-input.hidden {\n    display: none;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/components/enso/fileuploader/resources/assets/js/components/enso/fileuploader/FileUploader.vue"],"names":[],"mappings":";AAgHA;IACA,sBAAA;CACA;AAEA;IACA,wBAAA;CACA;AAEA;IACA,cAAA;CACA","file":"FileUploader.vue","sourcesContent":["<template>\n\n    <form class=\"file-upload is-marginless\"\n        @submit.prevent>\n        <div class=\"file\">\n            <label class=\"file-label\">\n                <input :multiple=\"multiple\"\n                    class=\"file-input hidden\"\n                    type=\"file\"\n                    ref=\"input\"\n                    @change=\"upload\">\n                    <slot name=\"upload-button\"\n                        :open-file-browser=\"openFileBrowser\"\n                        @click=\"openFileBrowser\">\n                        <a class=\"icon is-small\">\n                            <i class=\"fa fa-upload\"></i>\n                        </a>\n                    </slot>\n            </label>\n        </div>\n    </form>\n\n</template>\n\n<script>\n\nexport default {\n    props: {\n        multiple: {\n            type: Boolean,\n            default: false,\n        },\n        url: {\n            type: String,\n            required: true,\n        },\n        fileSizeLimit: {\n            type: Number,\n            default: 8388608,\n            validator: value => value <= 8388608,\n        },\n        params: {\n            type: Object,\n            default: null,\n        },\n    },\n\n    data() {\n        return {\n            input: null,\n            formData: new FormData(),\n        };\n    },\n\n    methods: {\n        openFileBrowser() {\n            this.$refs.input.click();\n        },\n        upload() {\n            this.$emit('upload-start');\n            this.setFormData();\n\n            axios.post(this.url, this.formData).then((response) => {\n                this.reset();\n                this.$emit('upload-successful', response.data);\n            }).catch((error) => {\n                this.reset();\n                this.$emit('upload-error');\n                this.handleError(error);\n            });\n        },\n        setFormData() {\n            const { files } = this.$refs.input;\n            this.addFiles(files);\n            this.addParams();\n        },\n        addFiles(files) {\n            for (let i = 0; i < files.length; i++) {\n                if (this.sizeCheckPasses(files[i])) {\n                    this.formData.append(`file_${i}`, files[i]);\n                }\n            }\n        },\n        addParams() {\n            if (this.params) {\n                Object.entries(this.params).forEach(([key, param]) => {\n                    const value = typeof param === 'object'\n                        ? JSON.stringify(param)\n                        : param;\n\n                    this.formData.append(key, value);\n                });\n            }\n        },\n        sizeCheckPasses(file) {\n            if (file.size > this.fileSizeLimit) {\n                toastr.warning(`File size Limit of ${this.fileSizeLimit} Kb excedeed by ${file.name}`);\n                return false;\n            }\n\n            return true;\n        },\n        reset() {\n            this.$el.reset();\n            this.formData = new FormData();\n        },\n    },\n};\n\n</script>\n\n<style>\n\n    form.file-upload {\n        display: inline-table;\n    }\n\n    button.file-upload {\n        background: transparent;\n    }\n\n    .file-input.hidden {\n        display: none;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1212:
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
                toastr.warning('File size Limit of ' + this.fileSizeLimit + ' Kb excedeed by ' + file.name);
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

/***/ 1213:
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

/***/ 1409:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1410);
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

/***/ 1410:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(2)(true);
// imports


// module
exports.push([module.i, "\n.has-lateral-borders {\n    border-left: 1px solid rgba(0,0,0,0.2);\n    border-right: 1px solid rgba(0,0,0,0.2);\n}\n.stat-value {\n    font-size: 3em;\n    padding-top: 12px;\n}\n.stat-key {\n    font-size: 1.4em;\n    font-weight: 200;\n    padding-bottom: 8px;\n}\n.level.user-controls {\n    margin-bottom: 0;\n}\n.timeline-content {\n    -webkit-transition:all 1s ease;\n    transition:all 1s ease;\n}\n\n", "", {"version":3,"sources":["/Users/adi/code/ensov2/resources/assets/js/pages/administration/users/resources/assets/js/pages/administration/users/Show.vue"],"names":[],"mappings":";AA6VA;IACA,uCAAA;IACA,wCAAA;CACA;AAEA;IACA,eAAA;IACA,kBAAA;CACA;AAEA;IACA,iBAAA;IACA,iBAAA;IACA,oBAAA;CACA;AAEA;IACA,iBAAA;CACA;AAEA;IACA,+BAAA;IAAA,uBAAA;CACA","file":"Show.vue","sourcesContent":["<template>\n\n    <div v-if=\"initialised\">\n        <div class=\"box profile-heading\">\n            <div class=\"columns is-multiline\">\n                <div class=\"column is-half-desktop\">\n                    <div class=\"columns is-mobile\">\n                        <div class=\"column is-narrow\">\n                            <div class=\"image is-128x128\">\n                                <img :src=\"avatarLink\">\n                            </div>\n                        </div>\n                        <div class=\"column\">\n                            <div class=\"level\">\n                                <div class=\"level-item has-padding-top-small\">\n                                    <div>\n                                        <p class=\"title is-3\">{{ profileUser.fullName }}</p>\n                                        <p>{{ __('role') }}: {{ profileUser.role.name }}</p>\n                                        <p>{{ __('since') }}: {{ profileUser.created_at }}</p>\n                                        <p class=\"has-margin-top-small\">\n                                            <div class=\"level user-controls\"\n                                                v-if=\"isSelfVisiting\">\n                                                <div class=\"level-left\">\n                                                    <button class=\"button is-small is-warning\"\n                                                        v-if=\"avatarId\"\n                                                        @click=\"deleteAvatar\">\n                                                        <span class=\"icon\">\n                                                            <i class=\"fa fa-trash-o\"></i>\n                                                        </span>\n                                                        <span>\n                                                            {{ __('Avatar') }}\n                                                        </span>\n                                                    </button>\n                                                    <file-uploader v-if=\"!avatarId\"\n                                                        @upload-successful=\"$store.commit('setUserAvatar', $event.id)\"\n                                                        :url=\"uploadAvatarLink\">\n                                                        <template slot=\"upload-button\"\n                                                            slot-scope=\"props\">\n                                                            <button  class=\"button is-small is-info\"\n                                                                @click=\"props.openFileBrowser\">\n                                                                <span class=\"icon\">\n                                                                    <i class=\"fa fa-upload\"></i>\n                                                                </span>\n                                                                <span>\n                                                                    {{ __('Avatar') }}\n                                                                </span>\n                                                            </button>\n                                                        </template>\n                                                    </file-uploader>\n                                                </div>\n                                                <div class=\"level-right\">\n                                                    <button class=\"button is-small is-danger\"\n                                                        @click=\"logout()\">\n                                                        <span class=\"icon\">\n                                                            <i class=\"fa fa-sign-out\"></i>\n                                                        </span>\n                                                        <span>\n                                                            {{ __('Log Out') }}\n                                                        </span>\n                                                    </button>\n                                                </div>\n                                            </div>\n                                            <div v-else>\n                                                <button class=\"button is-small is-warning\"\n                                                    @click=\"$bus.$emit('start-impersonating', profileUser.id)\"\n                                                    v-if=\"!$store.state.impersonating\">\n                                                    {{ __('Impersonate') }}\n                                                </button>\n                                            </div>\n                                        </p>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"column is-half-desktop\">\n                    <div class=\"columns is-mobile\">\n                        <div class=\"column has-text-centered\">\n                          <p class=\"stat-value\">{{ profileUser.loginCount }}</p>\n                          <p class=\"stat-key\">{{ __('logins') }}</p>\n                        </div>\n                        <div class=\"column has-text-centered has-lateral-borders\">\n                          <p class=\"stat-value\">{{ profileUser.actionLogCount }}</p>\n                          <p class=\"stat-key\">{{ __('actions') }}</p>\n                        </div>\n                        <div class=\"column has-text-centered\">\n                          <p class=\"stat-value\">{{ profileUser.rating }}</p>\n                          <p class=\"stat-key\">{{ __('rating') }}</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"columns is-centered\">\n            <div class=\"column is-two-thirds-tablet\">\n                <div class=\"box\">\n                    <nav class=\"pagination is-small has-margin-bottom-large\" role=\"navigation\" aria-label=\"pagination\">\n                        <a class=\"pagination-previous\"\n                            @click=\"getPage(profileUser.timeline.current_page - 1)\"\n                            :disabled=\"profileUser.timeline.prev_page_url===null\">\n                            {{ __('Previous') }}\n                        </a>\n                        <a class=\"pagination-next\"\n                            @click=\"getPage(profileUser.timeline.current_page + 1)\"\n                            :disabled=\"profileUser.timeline.next_page_url===null\">\n                            {{ __('Next') }}\n                        </a>\n                        <ul class=\"pagination-list\" v-if=\"isShort\">\n                            <li v-for=\"i in profileUser.timeline.last_page\">\n                                <a class=\"pagination-link\"\n                                    :class=\"{ 'is-current': profileUser.timeline.current_page === i}\"\n                                    @click=\"getPage(i)\">\n                                    {{ i }}\n                                </a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination-list\" v-if=\"isAtStart && !isShort\">\n                            <li v-for=\"i in 3\"\n                                :key=\"i\">\n                                <a class=\"pagination-link\"\n                                    :class=\"{ 'is-current': profileUser.timeline.current_page === i}\"\n                                    @click=\"getPage(i)\">\n                                    {{ i }}\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.last_page)\">\n                                    {{ profileUser.timeline.last_page }}\n                                </a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination-list\" v-if=\"hasMiddle && !isShort\">\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(1)\">\n                                    1\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.current_page - 1)\">\n                                    {{ profileUser.timeline.current_page - 1 }}\n                                </a>\n                            </li>\n                            <li>\n                                <a class=\"pagination-link is-current\">\n                                    {{ profileUser.timeline.current_page }}\n                                </a>\n                            </li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.current_page + 1)\">\n                                    {{ profileUser.timeline.current_page + 1 }}\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(profileUser.timeline.last_page)\">\n                                    {{ profileUser.timeline.last_page }}\n                                </a>\n                            </li>\n                        </ul>\n                        <ul class=\"pagination-list\" v-if=\"isAtEnd && !isShort\">\n                            <li>\n                                <a class=\"pagination-link\"\n                                    @click=\"getPage(1)\">\n                                    1\n                                </a>\n                            </li>\n                            <li><span class=\"pagination-ellipsis\">&hellip;</span></li>\n                            <li v-for=\"i in 3\"\n                                :key=\"i\">\n                                <a class=\"pagination-link\"\n                                    :class=\"{ 'is-current': profileUser.timeline.current_page === profileUser.timeline.last_page - 3 + i}\"\n                                    @click=\"getPage(profileUser.timeline.last_page - 3 + i)\">\n                                    {{ profileUser.timeline.last_page - 3 + i }}\n                                </a>\n                            </li>\n                        </ul>\n                    </nav>\n                    <ul class=\"timeline\">\n                        <div v-for=\"(actions, day) in timeline\"\n                            class=\"timeline-content\"\n                            :key=\"day\">\n                            <li class=\"timeline-header\">\n                                <span class=\"tag is-medium is-primary\">{{ __(day) }}</span>\n                            </li>\n                            <!-- <li class=\"timeline-item\">\n                                <div class=\"timeline-marker\"></div>\n                                <div class=\"timeline-content\">\n                                    <p class=\"heading\">January 2016</p>\n                                    <p>Timeline content - Can include any HTML element</p>\n                                </div>\n                            </li> -->\n                            <li class=\"timeline-item\"\n                                v-for=\"(action, index) in actions\"\n                                :key=\"index\">\n                                <div class=\"timeline-marker is-icon\">\n                                    <i :class=\"getIcon(action.route)\"></i>\n                                </div>\n                                <div class=\"timeline-content\">\n                                    <p class=\"heading\">{{ getHRDate(action.created_at) }} {{ getHRTime(action.created_at) }}</p>\n                                    <p>{{ action.permission.description }}</p>\n                                </div>\n                            </li>\n                        </div>\n                        <li class=\"timeline-header\"\n                            v-if=\"profileUser.timeline.current_page === profileUser.timeline.last_page\">\n                            <span class=\"tag is-medium is-primary\">{{ __('End') }}</span>\n                        </li>\n                        <li class=\"timeline-item\"\n                            v-else>\n                            <div class=\"timeline-marker is-icon\">\n                                <i class=\"fa fa-fw fa-ellipsis-h\"></i>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</template>\n\n<script>\n\nimport { mapGetters, mapState } from 'vuex';\nimport FileUploader from '../../../components/enso/fileuploader/FileUploader.vue';\n\nexport default {\n    components: { FileUploader },\n\n    computed: {\n        ...mapGetters('locale', {\n            __: '__',\n            locale: 'current',\n        }),\n        ...mapState(['user', 'meta']),\n        uploadAvatarLink() {\n            return route('core.avatars.store', [], false);\n        },\n        isSelfVisiting() {\n            return this.user.id === this.profileUser.id;\n        },\n        avatarId() {\n            if (this.isSelfVisiting) {\n                return this.user.avatarId;\n            }\n\n            return this.profileUser.avatar ? this.profileUser.avatar.id : null;\n        },\n        avatarLink() {\n            return route('core.avatars.show', (this.avatarId || 'null'), false);\n        },\n        timeline() {\n            const actions = this.profileUser.timeline.data;\n\n            return actions.map(action => action.created_at).reduce((days, record) => {\n                days.push(this.getDay(record));\n                return days;\n            }, []).filter((value, index, days) => days.indexOf(value) === index)\n                .reduce((timeline, day) => {\n                    timeline[day] = actions\n                        .filter(record => this.getDay(record.created_at) === day);\n                    return timeline;\n                }, {});\n        },\n        isShort() {\n            return this.profileUser.timeline.last_page <= 5;\n        },\n        isAtStart() {\n            return this.profileUser.timeline.current_page <= 2;\n        },\n        isAtEnd() {\n            return this.profileUser.timeline.last_page\n                - this.profileUser.timeline.current_page <= 2;\n        },\n        hasMiddle() {\n            return !this.isAtStart && !this.isAtEnd;\n        },\n        paginationUrl() {\n            return `${route('administration.users.show', [this.profileUser.id], false)}?page=`;\n        },\n    },\n\n    data() {\n        return {\n            initialised: false,\n            profileUser: {},\n        };\n    },\n\n    watch: {\n        locale: {\n            handler() {\n                this.getPage(this.profileUser.timeline.current_page);\n            },\n        },\n    },\n\n    methods: {\n        deleteAvatar() {\n            axios.delete(route('core.avatars.destroy', this.user.avatarId, false)).then(() => {\n                this.$store.commit('setUserAvatar', null);\n            }).catch(error => this.handleError(error));\n        },\n        logout() {\n            axios.post(route('logout', [], false).toString()).then(() => {\n                this.$store.dispatch('auth/logout');\n            }).catch(error => this.handleError(error));\n        },\n        getDay(timestamp) {\n            return moment(timestamp).calendar().split(' ')[0];\n        },\n        getHRDate(timestamp) {\n            return moment(timestamp).format(this.meta.dateFormat);\n        },\n        getHRTime(timestamp) {\n            return moment(timestamp).format('H:mm');\n        },\n        getIcon(action) {\n            if (action.indexOf('index') > 0) return 'fa fa-eye has-text-success';\n            if (action.indexOf('create') > 0) return 'fa fa-plus has-text-warning';\n            if (action.indexOf('edit') > 0) return 'fa fa-pencil has-text-warning';\n            return 'fa fa-trash-o has-text-danger';\n        },\n        getPage(page) {\n            axios.get(this.paginationUrl + page).then(({ data }) => {\n                this.profileUser = data.user;\n            }).catch(error => this.handleError(error));\n        },\n    },\n\n    mounted() {\n        axios.get(route(this.$route.name, this.$route.params.id, false)).then((response) => {\n            this.profileUser = response.data.user;\n            this.initialised = true;\n        }).catch(error => this.handleError(error));\n    },\n};\n\n</script>\n\n<style>\n\n    .has-lateral-borders {\n        border-left: 1px solid rgba(0,0,0,0.2);\n        border-right: 1px solid rgba(0,0,0,0.2);\n    }\n\n    .stat-value {\n        font-size: 3em;\n        padding-top: 12px;\n    }\n\n    .stat-key {\n        font-size: 1.4em;\n        font-weight: 200;\n        padding-bottom: 8px;\n    }\n\n    .level.user-controls {\n        margin-bottom: 0;\n    }\n\n    .timeline-content {\n        transition:all 1s ease;\n    }\n\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 1411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vuex__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_enso_fileuploader_FileUploader_vue__ = __webpack_require__(1209);
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

/***/ 1412:
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlPzk0MzUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWU/MmQzNCIsIndlYnBhY2s6Ly8vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWUiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWU/MWQzMCIsIndlYnBhY2s6Ly8vLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlPzRiOGMiLCJ3ZWJwYWNrOi8vLy4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9TaG93LnZ1ZT9kYmY0Iiwid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlIiwid2VicGFjazovLy8uL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWU/ODYyNyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBLDBCQUF5TTtBQUN6TTtBQUNBO0FBQ0E7QUFDQSw2Q0FBaVY7QUFDalY7QUFDQSwrQ0FBc0w7QUFDdEw7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxDQUFDOztBQUVEOzs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBeU07QUFDek07QUFDQTtBQUNBO0FBQ0EsNkNBQWlWO0FBQ2pWO0FBQ0EsK0NBQXNMO0FBQ3RMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxZQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsQ0FBQzs7QUFFRDs7Ozs7Ozs7QUM1Q0E7O0FBRUE7QUFDQSxzQ0FBK087QUFDL087QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRKQUE0SixrRkFBa0Y7QUFDOU8scUtBQXFLLGtGQUFrRjtBQUN2UDtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQSxnQ0FBZ0MsVUFBVSxFQUFFO0FBQzVDLEM7Ozs7Ozs7QUNwQkE7QUFDQTs7O0FBR0E7QUFDQSw2Q0FBOEMsNEJBQTRCLEdBQUcsc0JBQXNCLDhCQUE4QixHQUFHLHNCQUFzQixvQkFBb0IsR0FBRyxZQUFZLDRMQUE0TCxNQUFNLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFVBQVUsbzFCQUFvMUIsY0FBYyxxQkFBcUIsb0VBQW9FLGlCQUFpQixtRUFBbUUsMkJBQTJCLHdIQUF3SCxvQkFBb0Isa0VBQWtFLFFBQVEsaUJBQWlCLGtCQUFrQiw2RUFBNkUsT0FBTyxtQkFBbUIsNkJBQTZCLHVDQUF1QyxXQUFXLHFCQUFxQix5Q0FBeUMsaUNBQWlDLHdFQUF3RSwrQkFBK0IsaUVBQWlFLGVBQWUsb0JBQW9CLCtCQUErQiw2Q0FBNkMsMENBQTBDLGVBQWUsRUFBRSxXQUFXLDBCQUEwQixxQkFBcUIsUUFBUSxvQkFBb0IsbUNBQW1DLCtCQUErQixXQUFXLDRCQUE0Qiw2QkFBNkIsa0JBQWtCLE9BQU8sdURBQXVELG1EQUFtRCxFQUFFLGFBQWEsbUJBQW1CLGVBQWUsV0FBVyx3QkFBd0IsZ0NBQWdDLHlFQUF5RSxnSkFBZ0oseURBQXlELG1CQUFtQixFQUFFLGVBQWUsV0FBVyxrQ0FBa0MsbURBQW1ELHVEQUF1RCxtQkFBbUIsa0JBQWtCLFVBQVUsR0FBRywrQkFBK0IsZUFBZSw0QkFBNEIsV0FBVyxvQkFBb0IsK0JBQStCLDZDQUE2QyxXQUFXLFFBQVEsS0FBSyxrREFBa0QsZ0NBQWdDLE9BQU8sNEJBQTRCLGtDQUFrQyxPQUFPLDRCQUE0Qix3QkFBd0IsT0FBTyxpQ0FBaUM7O0FBRXR0SDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2tCQTs7O2tCQUlBO3FCQUVBO0FBSEE7O2tCQUtBO3NCQUVBO0FBSEE7O2tCQUtBO3FCQUNBOztnQ0FFQTs7QUFKQTs7a0JBTUE7cUJBSUE7QUFMQTtBQWRBOzswQkFvQkE7O21CQUVBOzBCQUVBO0FBSEE7QUFLQTs7OztvREFFQTs2QkFDQTtBQUNBOztBQUNBOzt1QkFDQTtpQkFFQTs7eUVBQ0E7c0JBQ0E7MERBQ0E7c0NBQ0E7c0JBQ0E7NEJBQ0E7a0NBQ0E7QUFDQTtBQUNBOztBQUNBLG1DQUNBOzswQkFDQTtpQkFDQTtBQUNBOzJDQUNBO21EQUNBO29EQUNBOzREQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBOzs2QkFDQTs7QUFDQTs7OztrR0FDQSwwQkFDQSxTQUVBOztnREFDQTtBQUNBO0FBQ0E7QUFDQTt3REFDQTtnREFDQTtzR0FDQTt1QkFDQTtBQUVBOzttQkFDQTtBQUNBO2dDQUNBO3FCQUNBO2dDQUNBO0FBRUE7QUFwREE7QUE1QkEsRzs7Ozs7OztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLGlCQUFpQixzQkFBc0I7QUFDdkM7QUFDQTtBQUNBLFdBQVcsNEJBQTRCO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHVDQUF1QztBQUM3RCxtQkFBbUI7QUFDbkIsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsK0JBQStCO0FBQ25ELGVBQWUsOEJBQThCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7O0FDdERBOztBQUVBO0FBQ0Esc0NBQStPO0FBQy9PO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0SkFBNEosa0ZBQWtGO0FBQzlPLHFLQUFxSyxrRkFBa0Y7QUFDdlA7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0NBQWdDLFVBQVUsRUFBRTtBQUM1QyxDOzs7Ozs7O0FDcEJBO0FBQ0E7OztBQUdBO0FBQ0EsaURBQWtELDZDQUE2Qyw4Q0FBOEMsR0FBRyxlQUFlLHFCQUFxQix3QkFBd0IsR0FBRyxhQUFhLHVCQUF1Qix1QkFBdUIsMEJBQTBCLEdBQUcsd0JBQXdCLHVCQUF1QixHQUFHLHFCQUFxQixxQ0FBcUMsNkJBQTZCLEdBQUcsWUFBWSxnTEFBZ0wsTUFBTSxXQUFXLFdBQVcsS0FBSyxLQUFLLFVBQVUsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxnMEJBQWcwQix3QkFBd0IsbURBQW1ELGNBQWMsSUFBSSx5QkFBeUIsbURBQW1ELGVBQWUsSUFBSSwwQkFBMEIsazZCQUFrNkIsZ0JBQWdCLGlyQ0FBaXJDLGdCQUFnQiw2N0JBQTY3QixpQkFBaUIseW9CQUF5b0IscUJBQXFCLGdsQkFBZ2xCLDBCQUEwQix3REFBd0QsZ0JBQWdCLGdMQUFnTCw4QkFBOEIsd0RBQXdELGlCQUFpQiw0SkFBNEosc0JBQXNCLHdEQUF3RCxnQkFBZ0IsNm9CQUE2b0Isa0JBQWtCLGlTQUFpUyxjQUFjLHFTQUFxUyx1REFBdUQsc0dBQXNHLEtBQUssNFlBQTRZLHVEQUF1RCxzR0FBc0csS0FBSyx1SkFBdUosNk9BQTZPLGtDQUFrQyx5aEJBQXloQixvUEFBb1AseUNBQXlDLDZOQUE2TixxQ0FBcUMsaVRBQWlULHlDQUF5Qyx1SkFBdUosNk9BQTZPLGtDQUFrQyx1aEJBQXVoQix5TkFBeU4sNEZBQTRGLDJJQUEySSwwQ0FBMEMsZ2VBQWdlLFdBQVcsczlCQUFzOUIsZ0NBQWdDLEdBQUcsZ0NBQWdDLCtDQUErQyxpQ0FBaUMsMlZBQTJWLGFBQWEsNGRBQTRkLHVCQUF1QixhQUFhLG9GQUFvRixvQkFBb0IsbUJBQW1CLGVBQWUsb0JBQW9CLG1DQUFtQyxrRUFBa0Usd0VBQXdFLDREQUE0RCxXQUFXLDZCQUE2QiwwREFBMEQsV0FBVyx1QkFBdUIsd0NBQXdDLDRDQUE0QyxlQUFlLG1GQUFtRixXQUFXLHlCQUF5QixrRkFBa0YsV0FBVyx1QkFBdUIsNkRBQTZELDBGQUEwRixpREFBaUQsOEJBQThCLGVBQWUsaUhBQWlILGlJQUFpSSxzQ0FBc0MsbUJBQW1CLElBQUksRUFBRSxXQUFXLHNCQUFzQiw4REFBOEQsV0FBVyx3QkFBd0IsaUVBQWlFLFdBQVcsc0JBQXNCLHdIQUF3SCxXQUFXLHdCQUF3QixzREFBc0QsV0FBVyw0QkFBNEIsd0JBQXdCLGlFQUFpRSxRQUFRLFdBQVcsUUFBUSxpQkFBaUIsa0JBQWtCLDhEQUE4RCxhQUFhLE9BQU8saUJBQWlCLG1CQUFtQix5QkFBeUIsdUVBQXVFLGVBQWUsWUFBWSxRQUFRLG1CQUFtQiwwQkFBMEIsaUdBQWlHLDREQUE0RCxlQUFlLDBDQUEwQyxXQUFXLHFCQUFxQiw0RUFBNEUsc0RBQXNELGVBQWUsMENBQTBDLFdBQVcsOEJBQThCLGdFQUFnRSxXQUFXLGlDQUFpQyxvRUFBb0UsV0FBVyxpQ0FBaUMsc0RBQXNELFdBQVcsNEJBQTRCLG1GQUFtRixxRkFBcUYscUZBQXFGLHFEQUFxRCxXQUFXLDBCQUEwQiwwREFBMEQsT0FBTyxNQUFNLCtDQUErQyxlQUFlLDBDQUEwQyxXQUFXLFFBQVEsb0JBQW9CLCtGQUErRixvREFBb0Qsc0NBQXNDLFdBQVcsMENBQTBDLE9BQU8sS0FBSyxzREFBc0QsaURBQWlELGtEQUFrRCxPQUFPLHFCQUFxQix5QkFBeUIsNEJBQTRCLE9BQU8sbUJBQW1CLDJCQUEyQiwyQkFBMkIsOEJBQThCLE9BQU8sOEJBQThCLDJCQUEyQixPQUFPLDJCQUEyQixpQ0FBaUMsT0FBTyxpQ0FBaUM7O0FBRXJubEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQytOQTtBQUNBOztBQUVBO2tCQUdBOztBQUNBO1lBRUE7Z0JBRUE7QUFIQSxnRkFJQTtzREFDQTttREFDQTtBQUNBO2tEQUNBO3FEQUNBO0FBQ0E7c0NBQ0E7cUNBQ0E7aUNBQ0E7QUFFQTs7MEVBQ0E7QUFDQTswQ0FDQTt1RUFDQTtBQUNBOztBQUNBOztvREFFQTs7Ozs4Q0FDQTt1Q0FDQTt1QkFDQTs7K0NBQ0E7K0NBQ0E7OytEQUVBO2lCQURBO3VCQUVBO2VBQ0E7QUFDQTtvQ0FDQTswREFDQTtBQUNBO3dDQUNBOzZEQUNBO0FBQ0E7b0NBQ0E7NkNBQ0Esc0RBQ0E7QUFDQTt3Q0FDQTs0Q0FDQTtBQUNBO2dEQUNBOzZFQUNBO0FBR0E7OzswQkFDQTs7eUJBRUE7eUJBRUE7QUFIQTtBQUtBOzs7Ozt3Q0FHQTt1REFDQTtBQUlBO0FBTkE7QUFEQTs7OztBQVNBOztvR0FDQTtzREFDQTs7MENBQ0E7O0FBQ0E7O0FBQ0E7OytFQUNBO3VDQUNBOzswQ0FDQTs7QUFDQTsyQ0FDQTsyREFDQTtBQUNBO2lEQUNBO3NEQUNBO0FBQ0E7aURBQ0E7NENBQ0E7QUFDQTswQ0FDQTtvREFDQTtxREFDQTttREFDQTttQkFDQTtBQUNBOztBQUNBOzs7QUFDQTs7MENBQ0E7OzBDQUNBOztBQUdBO0FBaENBOzs7QUFpQ0E7O2tHQUNBOytDQUNBO2lDQUNBOztzQ0FDQTs7QUFDQTtBQTdHQSxHOzs7Ozs7O0FDMU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQ0FBcUM7QUFDeEQscUJBQXFCLHNDQUFzQztBQUMzRCx1QkFBdUIsd0NBQXdDO0FBQy9ELHlCQUF5QixtQ0FBbUM7QUFDNUQsMkJBQTJCLGtDQUFrQztBQUM3RCw2QkFBNkIsa0NBQWtDO0FBQy9ELCtCQUErQixTQUFTLHNCQUFzQixFQUFFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQix3QkFBd0I7QUFDbkQsNkJBQTZCLHVCQUF1QjtBQUNwRDtBQUNBO0FBQ0EsdUJBQXVCLGtEQUFrRDtBQUN6RTtBQUNBO0FBQ0EsbUNBQW1DLDRCQUE0QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxzQ0FBc0M7QUFDekU7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHFDQUFxQztBQUN0RTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsNEJBQTRCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25ELDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRDtBQUMzRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2Qyw2QkFBNkI7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsd0NBQXdDO0FBQy9ELHlCQUF5QixtQ0FBbUM7QUFDNUQsMkJBQTJCLDBDQUEwQztBQUNyRSwyQkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLDZCQUE2Qiw0QkFBNEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLDBCQUEwQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDBDQUEwQztBQUNyRSwyQkFBMkIsNEJBQTRCO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiwwQkFBMEI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixxQ0FBcUM7QUFDeEQscUJBQXFCLDZDQUE2QztBQUNsRSx1QkFBdUIscUJBQXFCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUNBQWlDO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaUNBQWlDO0FBQzFEO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUNBQWlDO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qiw0Q0FBNEM7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGlDQUFpQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkMsU0FBUztBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMEJBQTBCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDRDQUE0QztBQUNuRTtBQUNBLGtDQUFrQyxpQ0FBaUM7QUFDbkU7QUFDQTtBQUNBLDZCQUE2QiwwQ0FBMEM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsMkNBQTJDO0FBQ3hFO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx5Q0FBeUM7QUFDMUUsMENBQTBDLG1DQUFtQztBQUM3RTtBQUNBO0FBQ0EseUNBQXlDLGtDQUFrQztBQUMzRSx5Q0FBeUMseUJBQXlCO0FBQ2xFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaUNBQWlDO0FBQ2pFO0FBQ0E7QUFDQSwyQkFBMkIsMENBQTBDO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQywrQkFBK0I7QUFDL0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixzQkFBc0I7QUFDN0MsZUFBZSwrQkFBK0I7QUFDOUM7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsc0JBQXNCO0FBQzdDLGVBQWUsZ0NBQWdDO0FBQy9DO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscUNBQXFDO0FBQ3ZEO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLHlDQUF5QztBQUMvRCxlQUFlLHdDQUF3QztBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtMThhM2NiNDhcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vU2hvdy52dWVcIilcbn1cbnZhciBub3JtYWxpemVDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKVxuLyogc2NyaXB0ICovXG52YXIgX192dWVfc2NyaXB0X18gPSByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXI/e1xcXCJjYWNoZURpcmVjdG9yeVxcXCI6dHJ1ZSxcXFwicHJlc2V0c1xcXCI6W1tcXFwiZW52XFxcIix7XFxcIm1vZHVsZXNcXFwiOmZhbHNlLFxcXCJ0YXJnZXRzXFxcIjp7XFxcImJyb3dzZXJzXFxcIjpbXFxcIj4gMiVcXFwiXSxcXFwidWdsaWZ5XFxcIjp0cnVlfX1dXSxcXFwicGx1Z2luc1xcXCI6W1xcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixbXFxcInRyYW5zZm9ybS1ydW50aW1lXFxcIix7XFxcInBvbHlmaWxsXFxcIjpmYWxzZSxcXFwiaGVscGVyc1xcXCI6ZmFsc2V9XSxcXFwidHJhbnNmb3JtLW9iamVjdC1yZXN0LXNwcmVhZFxcXCIsXFxcInN5bnRheC1keW5hbWljLWltcG9ydFxcXCJdfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSAqL1xudmFyIF9fdnVlX3RlbXBsYXRlX18gPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIvaW5kZXg/e1xcXCJpZFxcXCI6XFxcImRhdGEtdi0xOGEzY2I0OFxcXCIsXFxcImhhc1Njb3BlZFxcXCI6ZmFsc2UsXFxcImJ1YmxlXFxcIjp7XFxcInRyYW5zZm9ybXNcXFwiOnt9fX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL1Nob3cudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlXCJcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHsoZnVuY3Rpb24gKCkge1xuICB2YXIgaG90QVBJID0gcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKVxuICBob3RBUEkuaW5zdGFsbChyZXF1aXJlKFwidnVlXCIpLCBmYWxzZSlcbiAgaWYgKCFob3RBUEkuY29tcGF0aWJsZSkgcmV0dXJuXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICBob3RBUEkuY3JlYXRlUmVjb3JkKFwiZGF0YS12LTE4YTNjYjQ4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIGhvdEFQSS5yZWxvYWQoXCJkYXRhLXYtMThhM2NiNDhcIiwgQ29tcG9uZW50Lm9wdGlvbnMpXG4gIH1cbiAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgZGlzcG9zZWQgPSB0cnVlXG4gIH0pXG59KSgpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDEwNTRcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSIsInZhciBkaXNwb3NlZCA9IGZhbHNlXG5mdW5jdGlvbiBpbmplY3RTdHlsZSAoc3NyQ29udGV4dCkge1xuICBpZiAoZGlzcG9zZWQpIHJldHVyblxuICByZXF1aXJlKFwiISF2dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlci9pbmRleD97XFxcInZ1ZVxcXCI6dHJ1ZSxcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDU5ODdhODhcXFwiLFxcXCJzY29wZWRcXFwiOmZhbHNlLFxcXCJoYXNJbmxpbmVDb25maWdcXFwiOnRydWV9IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vRmlsZVVwbG9hZGVyLnZ1ZVwiKVxufVxudmFyIG5vcm1hbGl6ZUNvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpXG4vKiBzY3JpcHQgKi9cbnZhciBfX3Z1ZV9zY3JpcHRfXyA9IHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlcj97XFxcImNhY2hlRGlyZWN0b3J5XFxcIjp0cnVlLFxcXCJwcmVzZXRzXFxcIjpbW1xcXCJlbnZcXFwiLHtcXFwibW9kdWxlc1xcXCI6ZmFsc2UsXFxcInRhcmdldHNcXFwiOntcXFwiYnJvd3NlcnNcXFwiOltcXFwiPiAyJVxcXCJdLFxcXCJ1Z2xpZnlcXFwiOnRydWV9fV1dLFxcXCJwbHVnaW5zXFxcIjpbXFxcInRyYW5zZm9ybS1vYmplY3QtcmVzdC1zcHJlYWRcXFwiLFtcXFwidHJhbnNmb3JtLXJ1bnRpbWVcXFwiLHtcXFwicG9seWZpbGxcXFwiOmZhbHNlLFxcXCJoZWxwZXJzXFxcIjpmYWxzZX1dLFxcXCJ0cmFuc2Zvcm0tb2JqZWN0LXJlc3Qtc3ByZWFkXFxcIixcXFwic3ludGF4LWR5bmFtaWMtaW1wb3J0XFxcIl19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRmlsZVVwbG9hZGVyLnZ1ZVwiKVxuLyogdGVtcGxhdGUgKi9cbnZhciBfX3Z1ZV90ZW1wbGF0ZV9fID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyL2luZGV4P3tcXFwiaWRcXFwiOlxcXCJkYXRhLXYtNDU5ODdhODhcXFwiLFxcXCJoYXNTY29wZWRcXFwiOmZhbHNlLFxcXCJidWJsZVxcXCI6e1xcXCJ0cmFuc2Zvcm1zXFxcIjp7fX19IS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9GaWxlVXBsb2FkZXIudnVlXCIpXG4vKiB0ZW1wbGF0ZSBmdW5jdGlvbmFsICovXG52YXIgX192dWVfdGVtcGxhdGVfZnVuY3Rpb25hbF9fID0gZmFsc2Vcbi8qIHN0eWxlcyAqL1xudmFyIF9fdnVlX3N0eWxlc19fID0gaW5qZWN0U3R5bGVcbi8qIHNjb3BlSWQgKi9cbnZhciBfX3Z1ZV9zY29wZUlkX18gPSBudWxsXG4vKiBtb2R1bGVJZGVudGlmaWVyIChzZXJ2ZXIgb25seSkgKi9cbnZhciBfX3Z1ZV9tb2R1bGVfaWRlbnRpZmllcl9fID0gbnVsbFxudmFyIENvbXBvbmVudCA9IG5vcm1hbGl6ZUNvbXBvbmVudChcbiAgX192dWVfc2NyaXB0X18sXG4gIF9fdnVlX3RlbXBsYXRlX18sXG4gIF9fdnVlX3RlbXBsYXRlX2Z1bmN0aW9uYWxfXyxcbiAgX192dWVfc3R5bGVzX18sXG4gIF9fdnVlX3Njb3BlSWRfXyxcbiAgX192dWVfbW9kdWxlX2lkZW50aWZpZXJfX1xuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJyZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvRmlsZVVwbG9hZGVyLnZ1ZVwiXG5cbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7KGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhvdEFQSSA9IHJlcXVpcmUoXCJ2dWUtaG90LXJlbG9hZC1hcGlcIilcbiAgaG90QVBJLmluc3RhbGwocmVxdWlyZShcInZ1ZVwiKSwgZmFsc2UpXG4gIGlmICghaG90QVBJLmNvbXBhdGlibGUpIHJldHVyblxuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghbW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgaG90QVBJLmNyZWF0ZVJlY29yZChcImRhdGEtdi00NTk4N2E4OFwiLCBDb21wb25lbnQub3B0aW9ucylcbiAgfSBlbHNlIHtcbiAgICBob3RBUEkucmVsb2FkKFwiZGF0YS12LTQ1OTg3YTg4XCIsIENvbXBvbmVudC5vcHRpb25zKVxuICB9XG4gIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbiAoZGF0YSkge1xuICAgIGRpc3Bvc2VkID0gdHJ1ZVxuICB9KVxufSkoKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvRmlsZVVwbG9hZGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTIwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDIgMyAzMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NTk4N2E4OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9GaWxlVXBsb2FkZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI4YmM1YTI2NFwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi00NTk4N2E4OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9GaWxlVXBsb2FkZXIudnVlXCIsIGZ1bmN0aW9uKCkge1xuICAgICB2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTQ1OTg3YTg4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0ZpbGVVcGxvYWRlci52dWVcIik7XG4gICAgIGlmKHR5cGVvZiBuZXdDb250ZW50ID09PSAnc3RyaW5nJykgbmV3Q29udGVudCA9IFtbbW9kdWxlLmlkLCBuZXdDb250ZW50LCAnJ11dO1xuICAgICB1cGRhdGUobmV3Q29udGVudCk7XG4gICB9KTtcbiB9XG4gLy8gV2hlbiB0aGUgbW9kdWxlIGlzIGRpc3Bvc2VkLCByZW1vdmUgdGhlIDxzdHlsZT4gdGFnc1xuIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNDU5ODdhODhcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDMxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmZvcm0uZmlsZS11cGxvYWQge1xcbiAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxufVxcbmJ1dHRvbi5maWxlLXVwbG9hZCB7XFxuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbn1cXG4uZmlsZS1pbnB1dC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiL1VzZXJzL2FkaS9jb2RlL2Vuc292Mi9yZXNvdXJjZXMvYXNzZXRzL2pzL2NvbXBvbmVudHMvZW5zby9maWxldXBsb2FkZXIvcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWVcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQWdIQTtJQUNBLHNCQUFBO0NBQ0E7QUFFQTtJQUNBLHdCQUFBO0NBQ0E7QUFFQTtJQUNBLGNBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiRmlsZVVwbG9hZGVyLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxuXFxuICAgIDxmb3JtIGNsYXNzPVxcXCJmaWxlLXVwbG9hZCBpcy1tYXJnaW5sZXNzXFxcIlxcbiAgICAgICAgQHN1Ym1pdC5wcmV2ZW50PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiZmlsZVxcXCI+XFxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVxcXCJmaWxlLWxhYmVsXFxcIj5cXG4gICAgICAgICAgICAgICAgPGlucHV0IDptdWx0aXBsZT1cXFwibXVsdGlwbGVcXFwiXFxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cXFwiZmlsZS1pbnB1dCBoaWRkZW5cXFwiXFxuICAgICAgICAgICAgICAgICAgICB0eXBlPVxcXCJmaWxlXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgcmVmPVxcXCJpbnB1dFxcXCJcXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9XFxcInVwbG9hZFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVxcXCJ1cGxvYWQtYnV0dG9uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDpvcGVuLWZpbGUtYnJvd3Nlcj1cXFwib3BlbkZpbGVCcm93c2VyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwib3BlbkZpbGVCcm93c2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwiaWNvbiBpcy1zbWFsbFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS11cGxvYWRcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICA8L3Nsb3Q+XFxuICAgICAgICAgICAgPC9sYWJlbD5cXG4gICAgICAgIDwvZGl2PlxcbiAgICA8L2Zvcm0+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgcHJvcHM6IHtcXG4gICAgICAgIG11bHRpcGxlOiB7XFxuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcXG4gICAgICAgIH0sXFxuICAgICAgICB1cmw6IHtcXG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXFxuICAgICAgICAgICAgcmVxdWlyZWQ6IHRydWUsXFxuICAgICAgICB9LFxcbiAgICAgICAgZmlsZVNpemVMaW1pdDoge1xcbiAgICAgICAgICAgIHR5cGU6IE51bWJlcixcXG4gICAgICAgICAgICBkZWZhdWx0OiA4Mzg4NjA4LFxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogdmFsdWUgPT4gdmFsdWUgPD0gODM4ODYwOCxcXG4gICAgICAgIH0sXFxuICAgICAgICBwYXJhbXM6IHtcXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcXG4gICAgICAgIH0sXFxuICAgIH0sXFxuXFxuICAgIGRhdGEoKSB7XFxuICAgICAgICByZXR1cm4ge1xcbiAgICAgICAgICAgIGlucHV0OiBudWxsLFxcbiAgICAgICAgICAgIGZvcm1EYXRhOiBuZXcgRm9ybURhdGEoKSxcXG4gICAgICAgIH07XFxuICAgIH0sXFxuXFxuICAgIG1ldGhvZHM6IHtcXG4gICAgICAgIG9wZW5GaWxlQnJvd3NlcigpIHtcXG4gICAgICAgICAgICB0aGlzLiRyZWZzLmlucHV0LmNsaWNrKCk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdXBsb2FkKCkge1xcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwbG9hZC1zdGFydCcpO1xcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9ybURhdGEoKTtcXG5cXG4gICAgICAgICAgICBheGlvcy5wb3N0KHRoaXMudXJsLCB0aGlzLmZvcm1EYXRhKS50aGVuKChyZXNwb25zZSkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XFxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwbG9hZC1zdWNjZXNzZnVsJywgcmVzcG9uc2UuZGF0YSk7XFxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBsb2FkLWVycm9yJyk7XFxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpO1xcbiAgICAgICAgICAgIH0pO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHNldEZvcm1EYXRhKCkge1xcbiAgICAgICAgICAgIGNvbnN0IHsgZmlsZXMgfSA9IHRoaXMuJHJlZnMuaW5wdXQ7XFxuICAgICAgICAgICAgdGhpcy5hZGRGaWxlcyhmaWxlcyk7XFxuICAgICAgICAgICAgdGhpcy5hZGRQYXJhbXMoKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBhZGRGaWxlcyhmaWxlcykge1xcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmlsZXMubGVuZ3RoOyBpKyspIHtcXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2l6ZUNoZWNrUGFzc2VzKGZpbGVzW2ldKSkge1xcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5mb3JtRGF0YS5hcHBlbmQoYGZpbGVfJHtpfWAsIGZpbGVzW2ldKTtcXG4gICAgICAgICAgICAgICAgfVxcbiAgICAgICAgICAgIH1cXG4gICAgICAgIH0sXFxuICAgICAgICBhZGRQYXJhbXMoKSB7XFxuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zKSB7XFxuICAgICAgICAgICAgICAgIE9iamVjdC5lbnRyaWVzKHRoaXMucGFyYW1zKS5mb3JFYWNoKChba2V5LCBwYXJhbV0pID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdHlwZW9mIHBhcmFtID09PSAnb2JqZWN0J1xcbiAgICAgICAgICAgICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocGFyYW0pXFxuICAgICAgICAgICAgICAgICAgICAgICAgOiBwYXJhbTtcXG5cXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xcbiAgICAgICAgICAgICAgICB9KTtcXG4gICAgICAgICAgICB9XFxuICAgICAgICB9LFxcbiAgICAgICAgc2l6ZUNoZWNrUGFzc2VzKGZpbGUpIHtcXG4gICAgICAgICAgICBpZiAoZmlsZS5zaXplID4gdGhpcy5maWxlU2l6ZUxpbWl0KSB7XFxuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGBGaWxlIHNpemUgTGltaXQgb2YgJHt0aGlzLmZpbGVTaXplTGltaXR9IEtiIGV4Y2VkZWVkIGJ5ICR7ZmlsZS5uYW1lfWApO1xcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xcbiAgICAgICAgfSxcXG4gICAgICAgIHJlc2V0KCkge1xcbiAgICAgICAgICAgIHRoaXMuJGVsLnJlc2V0KCk7XFxuICAgICAgICAgICAgdGhpcy5mb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG59O1xcblxcbjwvc2NyaXB0PlxcblxcbjxzdHlsZT5cXG5cXG4gICAgZm9ybS5maWxlLXVwbG9hZCB7XFxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XFxuICAgIH1cXG5cXG4gICAgYnV0dG9uLmZpbGUtdXBsb2FkIHtcXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcbiAgICB9XFxuXFxuICAgIC5maWxlLWlucHV0LmhpZGRlbiB7XFxuICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtNDU5ODdhODhcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjExXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDMxIiwiPHRlbXBsYXRlPlxuXG4gICAgPGZvcm0gY2xhc3M9XCJmaWxlLXVwbG9hZCBpcy1tYXJnaW5sZXNzXCJcbiAgICAgICAgQHN1Ym1pdC5wcmV2ZW50PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZVwiPlxuICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiZmlsZS1sYWJlbFwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCA6bXVsdGlwbGU9XCJtdWx0aXBsZVwiXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmlsZS1pbnB1dCBoaWRkZW5cIlxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwiZmlsZVwiXG4gICAgICAgICAgICAgICAgICAgIHJlZj1cImlucHV0XCJcbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT1cInVwbG9hZFwiPlxuICAgICAgICAgICAgICAgICAgICA8c2xvdCBuYW1lPVwidXBsb2FkLWJ1dHRvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICA6b3Blbi1maWxlLWJyb3dzZXI9XCJvcGVuRmlsZUJyb3dzZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib3BlbkZpbGVCcm93c2VyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImljb24gaXMtc21hbGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXVwbG9hZFwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9zbG90PlxuICAgICAgICAgICAgPC9sYWJlbD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9mb3JtPlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgcHJvcHM6IHtcbiAgICAgICAgbXVsdGlwbGU6IHtcbiAgICAgICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgICAgICBkZWZhdWx0OiBmYWxzZSxcbiAgICAgICAgfSxcbiAgICAgICAgdXJsOiB7XG4gICAgICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgICAgICByZXF1aXJlZDogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZmlsZVNpemVMaW1pdDoge1xuICAgICAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICAgICAgZGVmYXVsdDogODM4ODYwOCxcbiAgICAgICAgICAgIHZhbGlkYXRvcjogdmFsdWUgPT4gdmFsdWUgPD0gODM4ODYwOCxcbiAgICAgICAgfSxcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5wdXQ6IG51bGwsXG4gICAgICAgICAgICBmb3JtRGF0YTogbmV3IEZvcm1EYXRhKCksXG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgb3BlbkZpbGVCcm93c2VyKCkge1xuICAgICAgICAgICAgdGhpcy4kcmVmcy5pbnB1dC5jbGljaygpO1xuICAgICAgICB9LFxuICAgICAgICB1cGxvYWQoKSB7XG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWQtc3RhcnQnKTtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9ybURhdGEoKTtcblxuICAgICAgICAgICAgYXhpb3MucG9zdCh0aGlzLnVybCwgdGhpcy5mb3JtRGF0YSkudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBsb2FkLXN1Y2Nlc3NmdWwnLCByZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMucmVzZXQoKTtcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGxvYWQtZXJyb3InKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVycm9yKGVycm9yKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBzZXRGb3JtRGF0YSgpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZmlsZXMgfSA9IHRoaXMuJHJlZnMuaW5wdXQ7XG4gICAgICAgICAgICB0aGlzLmFkZEZpbGVzKGZpbGVzKTtcbiAgICAgICAgICAgIHRoaXMuYWRkUGFyYW1zKCk7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEZpbGVzKGZpbGVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZpbGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2l6ZUNoZWNrUGFzc2VzKGZpbGVzW2ldKSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcm1EYXRhLmFwcGVuZChgZmlsZV8ke2l9YCwgZmlsZXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgYWRkUGFyYW1zKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmVudHJpZXModGhpcy5wYXJhbXMpLmZvckVhY2goKFtrZXksIHBhcmFtXSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHR5cGVvZiBwYXJhbSA9PT0gJ29iamVjdCdcbiAgICAgICAgICAgICAgICAgICAgICAgID8gSlNPTi5zdHJpbmdpZnkocGFyYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICA6IHBhcmFtO1xuXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9ybURhdGEuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzaXplQ2hlY2tQYXNzZXMoZmlsZSkge1xuICAgICAgICAgICAgaWYgKGZpbGUuc2l6ZSA+IHRoaXMuZmlsZVNpemVMaW1pdCkge1xuICAgICAgICAgICAgICAgIHRvYXN0ci53YXJuaW5nKGBGaWxlIHNpemUgTGltaXQgb2YgJHt0aGlzLmZpbGVTaXplTGltaXR9IEtiIGV4Y2VkZWVkIGJ5ICR7ZmlsZS5uYW1lfWApO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHJlc2V0KCkge1xuICAgICAgICAgICAgdGhpcy4kZWwucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgfSxcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIGZvcm0uZmlsZS11cGxvYWQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtdGFibGU7XG4gICAgfVxuXG4gICAgYnV0dG9uLmZpbGUtdXBsb2FkIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgLmZpbGUtaW5wdXQuaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbjwvc3R5bGU+XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF9jKFxuICAgIFwiZm9ybVwiLFxuICAgIHtcbiAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtdXBsb2FkIGlzLW1hcmdpbmxlc3NcIixcbiAgICAgIG9uOiB7XG4gICAgICAgIHN1Ym1pdDogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgJGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW1xuICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJmaWxlXCIgfSwgW1xuICAgICAgICBfYyhcbiAgICAgICAgICBcImxhYmVsXCIsXG4gICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJmaWxlLWxhYmVsXCIgfSxcbiAgICAgICAgICBbXG4gICAgICAgICAgICBfYyhcImlucHV0XCIsIHtcbiAgICAgICAgICAgICAgcmVmOiBcImlucHV0XCIsXG4gICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImZpbGUtaW5wdXQgaGlkZGVuXCIsXG4gICAgICAgICAgICAgIGF0dHJzOiB7IG11bHRpcGxlOiBfdm0ubXVsdGlwbGUsIHR5cGU6IFwiZmlsZVwiIH0sXG4gICAgICAgICAgICAgIG9uOiB7IGNoYW5nZTogX3ZtLnVwbG9hZCB9XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfdm0uX3QoXCJ1cGxvYWQtYnV0dG9uXCIsIFtfdm0uX20oMCldLCB7XG4gICAgICAgICAgICAgIG9wZW5GaWxlQnJvd3NlcjogX3ZtLm9wZW5GaWxlQnJvd3NlclxuICAgICAgICAgICAgfSlcbiAgICAgICAgICBdLFxuICAgICAgICAgIDJcbiAgICAgICAgKVxuICAgICAgXSlcbiAgICBdXG4gIClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiYVwiLCB7IHN0YXRpY0NsYXNzOiBcImljb24gaXMtc21hbGxcIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS11cGxvYWRcIiB9KVxuICAgIF0pXG4gIH1cbl1cbnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxubW9kdWxlLmV4cG9ydHMgPSB7IHJlbmRlcjogcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnM6IHN0YXRpY1JlbmRlckZucyB9XG5pZiAobW9kdWxlLmhvdCkge1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmIChtb2R1bGUuaG90LmRhdGEpIHtcbiAgICByZXF1aXJlKFwidnVlLWhvdC1yZWxvYWQtYXBpXCIpICAgICAgLnJlcmVuZGVyKFwiZGF0YS12LTQ1OTg3YTg4XCIsIG1vZHVsZS5leHBvcnRzKVxuICB9XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/e1wiaWRcIjpcImRhdGEtdi00NTk4N2E4OFwiLFwiaGFzU2NvcGVkXCI6ZmFsc2UsXCJidWJsZVwiOntcInRyYW5zZm9ybXNcIjp7fX19IS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvY29tcG9uZW50cy9lbnNvL2ZpbGV1cGxvYWRlci9GaWxlVXBsb2FkZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMjEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMiAzIDMxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXIvaW5kZXguanM/e1xcXCJ2dWVcXFwiOnRydWUsXFxcImlkXFxcIjpcXFwiZGF0YS12LTE4YTNjYjQ4XFxcIixcXFwic2NvcGVkXFxcIjpmYWxzZSxcXFwiaGFzSW5saW5lQ29uZmlnXFxcIjp0cnVlfSEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL1Nob3cudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCB0aGUgc3R5bGVzIHRvIHRoZSBET01cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNDbGllbnQuanNcIikoXCI3NzgwZDM2OVwiLCBjb250ZW50LCBmYWxzZSk7XG4vLyBIb3QgTW9kdWxlIFJlcGxhY2VtZW50XG5pZihtb2R1bGUuaG90KSB7XG4gLy8gV2hlbiB0aGUgc3R5bGVzIGNoYW5nZSwgdXBkYXRlIHRoZSA8c3R5bGU+IHRhZ3NcbiBpZighY29udGVudC5sb2NhbHMpIHtcbiAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xOGEzY2I0OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgdmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLWNvbXBpbGVyL2luZGV4LmpzP3tcXFwidnVlXFxcIjp0cnVlLFxcXCJpZFxcXCI6XFxcImRhdGEtdi0xOGEzY2I0OFxcXCIsXFxcInNjb3BlZFxcXCI6ZmFsc2UsXFxcImhhc0lubGluZUNvbmZpZ1xcXCI6dHJ1ZX0hLi4vLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9TaG93LnZ1ZVwiKTtcbiAgICAgaWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG4gICAgIHVwZGF0ZShuZXdDb250ZW50KTtcbiAgIH0pO1xuIH1cbiAvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG4gbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciEuL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1jb21waWxlcj97XCJ2dWVcIjp0cnVlLFwiaWRcIjpcImRhdGEtdi0xOGEzY2I0OFwiLFwic2NvcGVkXCI6ZmFsc2UsXCJoYXNJbmxpbmVDb25maWdcIjp0cnVlfSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9TaG93LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTQwOVxuLy8gbW9kdWxlIGNodW5rcyA9IDMxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi5oYXMtbGF0ZXJhbC1ib3JkZXJzIHtcXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcXG59XFxuLnN0YXQtdmFsdWUge1xcbiAgICBmb250LXNpemU6IDNlbTtcXG4gICAgcGFkZGluZy10b3A6IDEycHg7XFxufVxcbi5zdGF0LWtleSB7XFxuICAgIGZvbnQtc2l6ZTogMS40ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxufVxcbi5sZXZlbC51c2VyLWNvbnRyb2xzIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuLnRpbWVsaW5lLWNvbnRlbnQge1xcbiAgICAtd2Via2l0LXRyYW5zaXRpb246YWxsIDFzIGVhc2U7XFxuICAgIHRyYW5zaXRpb246YWxsIDFzIGVhc2U7XFxufVxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvYWRpL2NvZGUvZW5zb3YyL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvcmVzb3VyY2VzL2Fzc2V0cy9qcy9wYWdlcy9hZG1pbmlzdHJhdGlvbi91c2Vycy9TaG93LnZ1ZVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBNlZBO0lBQ0EsdUNBQUE7SUFDQSx3Q0FBQTtDQUNBO0FBRUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7Q0FDQTtBQUVBO0lBQ0EsaUJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0NBQ0E7QUFFQTtJQUNBLGlCQUFBO0NBQ0E7QUFFQTtJQUNBLCtCQUFBO0lBQUEsdUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiU2hvdy52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcblxcbiAgICA8ZGl2IHYtaWY9XFxcImluaXRpYWxpc2VkXFxcIj5cXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcImJveCBwcm9maWxlLWhlYWRpbmdcXFwiPlxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbnMgaXMtbXVsdGlsaW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGlzLWhhbGYtZGVza3RvcFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW5zIGlzLW1vYmlsZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGlzLW5hcnJvd1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImltYWdlIGlzLTEyOHgxMjhcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVxcXCJhdmF0YXJMaW5rXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwibGV2ZWwtaXRlbSBoYXMtcGFkZGluZy10b3Atc21hbGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0aXRsZSBpcy0zXFxcIj57eyBwcm9maWxlVXNlci5mdWxsTmFtZSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgX18oJ3JvbGUnKSB9fToge3sgcHJvZmlsZVVzZXIucm9sZS5uYW1lIH19PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBfXygnc2luY2UnKSB9fToge3sgcHJvZmlsZVVzZXIuY3JlYXRlZF9hdCB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImhhcy1tYXJnaW4tdG9wLXNtYWxsXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsIHVzZXItY29udHJvbHNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cXFwiaXNTZWxmVmlzaXRpbmdcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImxldmVsLWxlZnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJidXR0b24gaXMtc21hbGwgaXMtd2FybmluZ1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcImF2YXRhcklkXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJkZWxldGVBdmF0YXJcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVxcXCJmYSBmYS10cmFzaC1vXFxcIj48L2k+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnQXZhdGFyJykgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxmaWxlLXVwbG9hZGVyIHYtaWY9XFxcIiFhdmF0YXJJZFxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGxvYWQtc3VjY2Vzc2Z1bD1cXFwiJHN0b3JlLmNvbW1pdCgnc2V0VXNlckF2YXRhcicsICRldmVudC5pZClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dXJsPVxcXCJ1cGxvYWRBdmF0YXJMaW5rXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVxcXCJ1cGxvYWQtYnV0dG9uXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsb3Qtc2NvcGU9XFxcInByb3BzXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzcz1cXFwiYnV0dG9uIGlzLXNtYWxsIGlzLWluZm9cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwicHJvcHMub3BlbkZpbGVCcm93c2VyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XFxcImljb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XFxcImZhIGZhLXVwbG9hZFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0F2YXRhcicpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZmlsZS11cGxvYWRlcj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJsZXZlbC1yaWdodFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1zbWFsbCBpcy1kYW5nZXJcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImxvZ291dCgpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJpY29uXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtc2lnbi1vdXRcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKCdMb2cgT3V0JykgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XFxcImJ1dHRvbiBpcy1zbWFsbCBpcy13YXJuaW5nXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcIiRidXMuJGVtaXQoJ3N0YXJ0LWltcGVyc29uYXRpbmcnLCBwcm9maWxlVXNlci5pZClcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtaWY9XFxcIiEkc3RvcmUuc3RhdGUuaW1wZXJzb25hdGluZ1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKCdJbXBlcnNvbmF0ZScpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW4gaXMtaGFsZi1kZXNrdG9wXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcImNvbHVtbnMgaXMtbW9iaWxlXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcInN0YXQtdmFsdWVcXFwiPnt7IHByb2ZpbGVVc2VyLmxvZ2luQ291bnQgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwic3RhdC1rZXlcXFwiPnt7IF9fKCdsb2dpbnMnKSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWQgaGFzLWxhdGVyYWwtYm9yZGVyc1xcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwic3RhdC12YWx1ZVxcXCI+e3sgcHJvZmlsZVVzZXIuYWN0aW9uTG9nQ291bnQgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwic3RhdC1rZXlcXFwiPnt7IF9fKCdhY3Rpb25zJykgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVxcXCJzdGF0LXZhbHVlXFxcIj57eyBwcm9maWxlVXNlci5yYXRpbmcgfX08L3A+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwic3RhdC1rZXlcXFwiPnt7IF9fKCdyYXRpbmcnKSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgIDwvZGl2PlxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1ucyBpcy1jZW50ZXJlZFxcXCI+XFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiY29sdW1uIGlzLXR3by10aGlyZHMtdGFibGV0XFxcIj5cXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwiYm94XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XFxcInBhZ2luYXRpb24gaXMtc21hbGwgaGFzLW1hcmdpbi1ib3R0b20tbGFyZ2VcXFwiIHJvbGU9XFxcIm5hdmlnYXRpb25cXFwiIGFyaWEtbGFiZWw9XFxcInBhZ2luYXRpb25cXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLXByZXZpb3VzXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIC0gMSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwicHJvZmlsZVVzZXIudGltZWxpbmUucHJldl9wYWdlX3VybD09PW51bGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnUHJldmlvdXMnKSB9fVxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1uZXh0XFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMSlcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cXFwicHJvZmlsZVVzZXIudGltZWxpbmUubmV4dF9wYWdlX3VybD09PW51bGxcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnTmV4dCcpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwicGFnaW5hdGlvbi1saXN0XFxcIiB2LWlmPVxcXCJpc1Nob3J0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCJpIGluIHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cXFwieyAnaXMtY3VycmVudCc6IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gaX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKGkpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBpIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlzdFxcXCIgdi1pZj1cXFwiaXNBdFN0YXJ0ICYmICFpc1Nob3J0XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCJpIGluIDNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1jdXJyZW50JzogcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PSBpfVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UoaSlcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IGkgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWVsbGlwc2lzXFxcIj4maGVsbGlwOzwvc3Bhbj48L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cXFwicGFnaW5hdGlvbi1saXN0XFxcIiB2LWlmPVxcXCJoYXNNaWRkbGUgJiYgIWlzU2hvcnRcXFwiPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cXFwicGFnaW5hdGlvbi1saW5rXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cXFwiZ2V0UGFnZSgxKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XFxcInBhZ2luYXRpb24tZWxsaXBzaXNcXFwiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDEpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgLSAxIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmsgaXMtY3VycmVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSArIDEpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgKyAxIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwicGFnaW5hdGlvbi1lbGxpcHNpc1xcXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlua1xcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XFxcImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIH19XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInBhZ2luYXRpb24tbGlzdFxcXCIgdi1pZj1cXFwiaXNBdEVuZCAmJiAhaXNTaG9ydFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKDEpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cXFwicGFnaW5hdGlvbi1lbGxpcHNpc1xcXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVxcXCJpIGluIDNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVxcXCJwYWdpbmF0aW9uLWxpbmtcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVxcXCJ7ICdpcy1jdXJyZW50JzogcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PSBwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgLSAzICsgaX1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVxcXCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtIDMgKyBpKVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIC0gMyArIGkgfX1cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxcbiAgICAgICAgICAgICAgICAgICAgPC9uYXY+XFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XFxcInRpbWVsaW5lXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVxcXCIoYWN0aW9ucywgZGF5KSBpbiB0aW1lbGluZVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XFxcInRpbWVsaW5lLWNvbnRlbnRcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XFxcImRheVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwidGltZWxpbmUtaGVhZGVyXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWcgaXMtbWVkaXVtIGlzLXByaW1hcnlcXFwiPnt7IF9fKGRheSkgfX08L3NwYW4+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGxpIGNsYXNzPVxcXCJ0aW1lbGluZS1pdGVtXFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInRpbWVsaW5lLW1hcmtlclxcXCI+PC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lbGluZS1jb250ZW50XFxcIj5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cXFwiaGVhZGluZ1xcXCI+SmFudWFyeSAyMDE2PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPlRpbWVsaW5lIGNvbnRlbnQgLSBDYW4gaW5jbHVkZSBhbnkgSFRNTCBlbGVtZW50PC9wPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+IC0tPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9XFxcInRpbWVsaW5lLWl0ZW1cXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWZvcj1cXFwiKGFjdGlvbiwgaW5kZXgpIGluIGFjdGlvbnNcXFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVxcXCJpbmRleFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lbGluZS1tYXJrZXIgaXMtaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgOmNsYXNzPVxcXCJnZXRJY29uKGFjdGlvbi5yb3V0ZSlcXFwiPjwvaT5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwidGltZWxpbmUtY29udGVudFxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XFxcImhlYWRpbmdcXFwiPnt7IGdldEhSRGF0ZShhY3Rpb24uY3JlYXRlZF9hdCkgfX0ge3sgZ2V0SFJUaW1lKGFjdGlvbi5jcmVhdGVkX2F0KSB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBhY3Rpb24ucGVybWlzc2lvbi5kZXNjcmlwdGlvbiB9fTwvcD5cXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwidGltZWxpbmUtaGVhZGVyXFxcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVxcXCJwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVxcXCJ0YWcgaXMtbWVkaXVtIGlzLXByaW1hcnlcXFwiPnt7IF9fKCdFbmQnKSB9fTwvc3Bhbj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cXFwidGltZWxpbmUtaXRlbVxcXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ0aW1lbGluZS1tYXJrZXIgaXMtaWNvblxcXCI+XFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cXFwiZmEgZmEtZncgZmEtZWxsaXBzaXMtaFxcXCI+PC9pPlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxcbiAgICAgICAgICAgICAgICAgICAgPC91bD5cXG4gICAgICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICAgICAgPC9kaXY+XFxuICAgICAgICA8L2Rpdj5cXG4gICAgPC9kaXY+XFxuXFxuPC90ZW1wbGF0ZT5cXG5cXG48c2NyaXB0PlxcblxcbmltcG9ydCB7IG1hcEdldHRlcnMsIG1hcFN0YXRlIH0gZnJvbSAndnVleCc7XFxuaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWUnO1xcblxcbmV4cG9ydCBkZWZhdWx0IHtcXG4gICAgY29tcG9uZW50czogeyBGaWxlVXBsb2FkZXIgfSxcXG5cXG4gICAgY29tcHV0ZWQ6IHtcXG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIHtcXG4gICAgICAgICAgICBfXzogJ19fJyxcXG4gICAgICAgICAgICBsb2NhbGU6ICdjdXJyZW50JyxcXG4gICAgICAgIH0pLFxcbiAgICAgICAgLi4ubWFwU3RhdGUoWyd1c2VyJywgJ21ldGEnXSksXFxuICAgICAgICB1cGxvYWRBdmF0YXJMaW5rKCkge1xcbiAgICAgICAgICAgIHJldHVybiByb3V0ZSgnY29yZS5hdmF0YXJzLnN0b3JlJywgW10sIGZhbHNlKTtcXG4gICAgICAgIH0sXFxuICAgICAgICBpc1NlbGZWaXNpdGluZygpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyLmlkID09PSB0aGlzLnByb2ZpbGVVc2VyLmlkO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGF2YXRhcklkKCkge1xcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2VsZlZpc2l0aW5nKSB7XFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnVzZXIuYXZhdGFySWQ7XFxuICAgICAgICAgICAgfVxcblxcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVVc2VyLmF2YXRhciA/IHRoaXMucHJvZmlsZVVzZXIuYXZhdGFyLmlkIDogbnVsbDtcXG4gICAgICAgIH0sXFxuICAgICAgICBhdmF0YXJMaW5rKCkge1xcbiAgICAgICAgICAgIHJldHVybiByb3V0ZSgnY29yZS5hdmF0YXJzLnNob3cnLCAodGhpcy5hdmF0YXJJZCB8fCAnbnVsbCcpLCBmYWxzZSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgdGltZWxpbmUoKSB7XFxuICAgICAgICAgICAgY29uc3QgYWN0aW9ucyA9IHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUuZGF0YTtcXG5cXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9ucy5tYXAoYWN0aW9uID0+IGFjdGlvbi5jcmVhdGVkX2F0KS5yZWR1Y2UoKGRheXMsIHJlY29yZCkgPT4ge1xcbiAgICAgICAgICAgICAgICBkYXlzLnB1c2godGhpcy5nZXREYXkocmVjb3JkKSk7XFxuICAgICAgICAgICAgICAgIHJldHVybiBkYXlzO1xcbiAgICAgICAgICAgIH0sIFtdKS5maWx0ZXIoKHZhbHVlLCBpbmRleCwgZGF5cykgPT4gZGF5cy5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpXFxuICAgICAgICAgICAgICAgIC5yZWR1Y2UoKHRpbWVsaW5lLCBkYXkpID0+IHtcXG4gICAgICAgICAgICAgICAgICAgIHRpbWVsaW5lW2RheV0gPSBhY3Rpb25zXFxuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihyZWNvcmQgPT4gdGhpcy5nZXREYXkocmVjb3JkLmNyZWF0ZWRfYXQpID09PSBkYXkpO1xcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVsaW5lO1xcbiAgICAgICAgICAgICAgICB9LCB7fSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgaXNTaG9ydCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgPD0gNTtcXG4gICAgICAgIH0sXFxuICAgICAgICBpc0F0U3RhcnQoKSB7XFxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIDw9IDI7XFxuICAgICAgICB9LFxcbiAgICAgICAgaXNBdEVuZCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2VcXG4gICAgICAgICAgICAgICAgLSB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA8PSAyO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGhhc01pZGRsZSgpIHtcXG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNBdFN0YXJ0ICYmICF0aGlzLmlzQXRFbmQ7XFxuICAgICAgICB9LFxcbiAgICAgICAgcGFnaW5hdGlvblVybCgpIHtcXG4gICAgICAgICAgICByZXR1cm4gYCR7cm91dGUoJ2FkbWluaXN0cmF0aW9uLnVzZXJzLnNob3cnLCBbdGhpcy5wcm9maWxlVXNlci5pZF0sIGZhbHNlKX0/cGFnZT1gO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgZGF0YSgpIHtcXG4gICAgICAgIHJldHVybiB7XFxuICAgICAgICAgICAgaW5pdGlhbGlzZWQ6IGZhbHNlLFxcbiAgICAgICAgICAgIHByb2ZpbGVVc2VyOiB7fSxcXG4gICAgICAgIH07XFxuICAgIH0sXFxuXFxuICAgIHdhdGNoOiB7XFxuICAgICAgICBsb2NhbGU6IHtcXG4gICAgICAgICAgICBoYW5kbGVyKCkge1xcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhZ2UodGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UpO1xcbiAgICAgICAgICAgIH0sXFxuICAgICAgICB9LFxcbiAgICB9LFxcblxcbiAgICBtZXRob2RzOiB7XFxuICAgICAgICBkZWxldGVBdmF0YXIoKSB7XFxuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKHJvdXRlKCdjb3JlLmF2YXRhcnMuZGVzdHJveScsIHRoaXMudXNlci5hdmF0YXJJZCwgZmFsc2UpKS50aGVuKCgpID0+IHtcXG4gICAgICAgICAgICAgICAgdGhpcy4kc3RvcmUuY29tbWl0KCdzZXRVc2VyQXZhdGFyJywgbnVsbCk7XFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGxvZ291dCgpIHtcXG4gICAgICAgICAgICBheGlvcy5wb3N0KHJvdXRlKCdsb2dvdXQnLCBbXSwgZmFsc2UpLnRvU3RyaW5nKCkpLnRoZW4oKCkgPT4ge1xcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9sb2dvdXQnKTtcXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB0aGlzLmhhbmRsZUVycm9yKGVycm9yKSk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0RGF5KHRpbWVzdGFtcCkge1xcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQodGltZXN0YW1wKS5jYWxlbmRhcigpLnNwbGl0KCcgJylbMF07XFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0SFJEYXRlKHRpbWVzdGFtcCkge1xcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQodGltZXN0YW1wKS5mb3JtYXQodGhpcy5tZXRhLmRhdGVGb3JtYXQpO1xcbiAgICAgICAgfSxcXG4gICAgICAgIGdldEhSVGltZSh0aW1lc3RhbXApIHtcXG4gICAgICAgICAgICByZXR1cm4gbW9tZW50KHRpbWVzdGFtcCkuZm9ybWF0KCdIOm1tJyk7XFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0SWNvbihhY3Rpb24pIHtcXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2luZGV4JykgPiAwKSByZXR1cm4gJ2ZhIGZhLWV5ZSBoYXMtdGV4dC1zdWNjZXNzJztcXG4gICAgICAgICAgICBpZiAoYWN0aW9uLmluZGV4T2YoJ2NyZWF0ZScpID4gMCkgcmV0dXJuICdmYSBmYS1wbHVzIGhhcy10ZXh0LXdhcm5pbmcnO1xcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaW5kZXhPZignZWRpdCcpID4gMCkgcmV0dXJuICdmYSBmYS1wZW5jaWwgaGFzLXRleHQtd2FybmluZyc7XFxuICAgICAgICAgICAgcmV0dXJuICdmYSBmYS10cmFzaC1vIGhhcy10ZXh0LWRhbmdlcic7XFxuICAgICAgICB9LFxcbiAgICAgICAgZ2V0UGFnZShwYWdlKSB7XFxuICAgICAgICAgICAgYXhpb3MuZ2V0KHRoaXMucGFnaW5hdGlvblVybCArIHBhZ2UpLnRoZW4oKHsgZGF0YSB9KSA9PiB7XFxuICAgICAgICAgICAgICAgIHRoaXMucHJvZmlsZVVzZXIgPSBkYXRhLnVzZXI7XFxuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xcbiAgICAgICAgfSxcXG4gICAgfSxcXG5cXG4gICAgbW91bnRlZCgpIHtcXG4gICAgICAgIGF4aW9zLmdldChyb3V0ZSh0aGlzLiRyb3V0ZS5uYW1lLCB0aGlzLiRyb3V0ZS5wYXJhbXMuaWQsIGZhbHNlKSkudGhlbigocmVzcG9uc2UpID0+IHtcXG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVVc2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGlzZWQgPSB0cnVlO1xcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xcbiAgICB9LFxcbn07XFxuXFxuPC9zY3JpcHQ+XFxuXFxuPHN0eWxlPlxcblxcbiAgICAuaGFzLWxhdGVyYWwtYm9yZGVycyB7XFxuICAgICAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcXG4gICAgfVxcblxcbiAgICAuc3RhdC12YWx1ZSB7XFxuICAgICAgICBmb250LXNpemU6IDNlbTtcXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMnB4O1xcbiAgICB9XFxuXFxuICAgIC5zdGF0LWtleSB7XFxuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XFxuICAgIH1cXG5cXG4gICAgLmxldmVsLnVzZXItY29udHJvbHMge1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcXG4gICAgfVxcblxcbiAgICAudGltZWxpbmUtY29udGVudCB7XFxuICAgICAgICB0cmFuc2l0aW9uOmFsbCAxcyBlYXNlO1xcbiAgICB9XFxuXFxuPC9zdHlsZT5cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtY29tcGlsZXI/e1widnVlXCI6dHJ1ZSxcImlkXCI6XCJkYXRhLXYtMThhM2NiNDhcIixcInNjb3BlZFwiOmZhbHNlLFwiaGFzSW5saW5lQ29uZmlnXCI6dHJ1ZX0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3Jlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWVcbi8vIG1vZHVsZSBpZCA9IDE0MTBcbi8vIG1vZHVsZSBjaHVua3MgPSAzMSIsIjx0ZW1wbGF0ZT5cblxuICAgIDxkaXYgdi1pZj1cImluaXRpYWxpc2VkXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJib3ggcHJvZmlsZS1oZWFkaW5nXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tdWx0aWxpbmVcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGlzLWhhbGYtZGVza3RvcFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1tb2JpbGVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaXMtbmFycm93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlIGlzLTEyOHgxMjhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyA6c3JjPVwiYXZhdGFyTGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxldmVsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1pdGVtIGhhcy1wYWRkaW5nLXRvcC1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInRpdGxlIGlzLTNcIj57eyBwcm9maWxlVXNlci5mdWxsTmFtZSB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD57eyBfXygncm9sZScpIH19OiB7eyBwcm9maWxlVXNlci5yb2xlLm5hbWUgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgX18oJ3NpbmNlJykgfX06IHt7IHByb2ZpbGVVc2VyLmNyZWF0ZWRfYXQgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoYXMtbWFyZ2luLXRvcC1zbWFsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGV2ZWwgdXNlci1jb250cm9sc1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiaXNTZWxmVmlzaXRpbmdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1sZWZ0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zbWFsbCBpcy13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cImF2YXRhcklkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZGVsZXRlQXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS10cmFzaC1vXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0F2YXRhcicpIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZmlsZS11cGxvYWRlciB2LWlmPVwiIWF2YXRhcklkXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwbG9hZC1zdWNjZXNzZnVsPVwiJHN0b3JlLmNvbW1pdCgnc2V0VXNlckF2YXRhcicsICRldmVudC5pZClcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dXJsPVwidXBsb2FkQXZhdGFyTGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInVwbG9hZC1idXR0b25cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xvdC1zY29wZT1cInByb3BzXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBjbGFzcz1cImJ1dHRvbiBpcy1zbWFsbCBpcy1pbmZvXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJwcm9wcy5vcGVuRmlsZUJyb3dzZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImljb25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJmYSBmYS11cGxvYWRcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBfXygnQXZhdGFyJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2ZpbGUtdXBsb2FkZXI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsZXZlbC1yaWdodFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gaXMtc21hbGwgaXMtZGFuZ2VyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwibG9nb3V0KClcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLXNpZ24tb3V0XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0xvZyBPdXQnKSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ1dHRvbiBpcy1zbWFsbCBpcy13YXJuaW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCIkYnVzLiRlbWl0KCdzdGFydC1pbXBlcnNvbmF0aW5nJywgcHJvZmlsZVVzZXIuaWQpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LWlmPVwiISRzdG9yZS5zdGF0ZS5pbXBlcnNvbmF0aW5nXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ0ltcGVyc29uYXRlJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy1oYWxmLWRlc2t0b3BcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbnMgaXMtbW9iaWxlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhdC12YWx1ZVwiPnt7IHByb2ZpbGVVc2VyLmxvZ2luQ291bnQgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwic3RhdC1rZXlcIj57eyBfXygnbG9naW5zJykgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWQgaGFzLWxhdGVyYWwtYm9yZGVyc1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YXQtdmFsdWVcIj57eyBwcm9maWxlVXNlci5hY3Rpb25Mb2dDb3VudCB9fTwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGF0LWtleVwiPnt7IF9fKCdhY3Rpb25zJykgfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJzdGF0LXZhbHVlXCI+e3sgcHJvZmlsZVVzZXIucmF0aW5nIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cInN0YXQta2V5XCI+e3sgX18oJ3JhdGluZycpIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29sdW1ucyBpcy1jZW50ZXJlZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbHVtbiBpcy10d28tdGhpcmRzLXRhYmxldFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJib3hcIj5cbiAgICAgICAgICAgICAgICAgICAgPG5hdiBjbGFzcz1cInBhZ2luYXRpb24gaXMtc21hbGwgaGFzLW1hcmdpbi1ib3R0b20tbGFyZ2VcIiByb2xlPVwibmF2aWdhdGlvblwiIGFyaWEtbGFiZWw9XCJwYWdpbmF0aW9uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tcHJldmlvdXNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIC0gMSlcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpkaXNhYmxlZD1cInByb2ZpbGVVc2VyLnRpbWVsaW5lLnByZXZfcGFnZV91cmw9PT1udWxsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgX18oJ1ByZXZpb3VzJykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1uZXh0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSArIDEpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6ZGlzYWJsZWQ9XCJwcm9maWxlVXNlci50aW1lbGluZS5uZXh0X3BhZ2VfdXJsPT09bnVsbFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7IF9fKCdOZXh0JykgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb24tbGlzdFwiIHYtaWY9XCJpc1Nob3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiaSBpbiBwcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2VcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtY3VycmVudCc6IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gaX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJwYWdpbmF0aW9uLWxpc3RcIiB2LWlmPVwiaXNBdFN0YXJ0ICYmICFpc1Nob3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIHYtZm9yPVwiaSBpbiAzXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmtleT1cImlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOmNsYXNzPVwieyAnaXMtY3VycmVudCc6IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gaX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgaSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWVsbGlwc2lzXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb24tbGlzdFwiIHYtaWY9XCJoYXNNaWRkbGUgJiYgIWlzU2hvcnRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UoMSlcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxzcGFuIGNsYXNzPVwicGFnaW5hdGlvbi1lbGxpcHNpc1wiPiZoZWxsaXA7PC9zcGFuPjwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSAtIDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgLSAxIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmsgaXMtY3VycmVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJwYWdpbmF0aW9uLWxpbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwiZ2V0UGFnZShwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgKyAxKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMSB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PHNwYW4gY2xhc3M9XCJwYWdpbmF0aW9uLWVsbGlwc2lzXCI+JmhlbGxpcDs8L3NwYW4+PC9saT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cImdldFBhZ2UocHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cInBhZ2luYXRpb24tbGlzdFwiIHYtaWY9XCJpc0F0RW5kICYmICFpc1Nob3J0XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cInBhZ2luYXRpb24tbGlua1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKDEpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48c3BhbiBjbGFzcz1cInBhZ2luYXRpb24tZWxsaXBzaXNcIj4maGVsbGlwOzwvc3Bhbj48L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaSB2LWZvcj1cImkgaW4gM1wiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDprZXk9XCJpXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzPVwicGFnaW5hdGlvbi1saW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpjbGFzcz1cInsgJ2lzLWN1cnJlbnQnOiBwcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgPT09IHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtIDMgKyBpfVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJnZXRQYWdlKHByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtIDMgKyBpKVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIC0gMyArIGkgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzPVwidGltZWxpbmVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoYWN0aW9ucywgZGF5KSBpbiB0aW1lbGluZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ0aW1lbGluZS1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiZGF5XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGltZWxpbmUtaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIGlzLW1lZGl1bSBpcy1wcmltYXJ5XCI+e3sgX18oZGF5KSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGxpIGNsYXNzPVwidGltZWxpbmUtaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtbWFya2VyXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImhlYWRpbmdcIj5KYW51YXJ5IDIwMTY8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5UaW1lbGluZSBjb250ZW50IC0gQ2FuIGluY2x1ZGUgYW55IEhUTUwgZWxlbWVudDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT4gLS0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGltZWxpbmUtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGFjdGlvbiwgaW5kZXgpIGluIGFjdGlvbnNcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6a2V5PVwiaW5kZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLW1hcmtlciBpcy1pY29uXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSA6Y2xhc3M9XCJnZXRJY29uKGFjdGlvbi5yb3V0ZSlcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtY29udGVudFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoZWFkaW5nXCI+e3sgZ2V0SFJEYXRlKGFjdGlvbi5jcmVhdGVkX2F0KSB9fSB7eyBnZXRIUlRpbWUoYWN0aW9uLmNyZWF0ZWRfYXQpIH19PC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+e3sgYWN0aW9uLnBlcm1pc3Npb24uZGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz1cInRpbWVsaW5lLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1pZj1cInByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT0gcHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgaXMtbWVkaXVtIGlzLXByaW1hcnlcIj57eyBfXygnRW5kJykgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwidGltZWxpbmUtaXRlbVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1lbHNlPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1tYXJrZXIgaXMtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImZhIGZhLWZ3IGZhLWVsbGlwc2lzLWhcIj48L2k+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG48L3RlbXBsYXRlPlxuXG48c2NyaXB0PlxuXG5pbXBvcnQgeyBtYXBHZXR0ZXJzLCBtYXBTdGF0ZSB9IGZyb20gJ3Z1ZXgnO1xuaW1wb3J0IEZpbGVVcGxvYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2Vuc28vZmlsZXVwbG9hZGVyL0ZpbGVVcGxvYWRlci52dWUnO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgY29tcG9uZW50czogeyBGaWxlVXBsb2FkZXIgfSxcblxuICAgIGNvbXB1dGVkOiB7XG4gICAgICAgIC4uLm1hcEdldHRlcnMoJ2xvY2FsZScsIHtcbiAgICAgICAgICAgIF9fOiAnX18nLFxuICAgICAgICAgICAgbG9jYWxlOiAnY3VycmVudCcsXG4gICAgICAgIH0pLFxuICAgICAgICAuLi5tYXBTdGF0ZShbJ3VzZXInLCAnbWV0YSddKSxcbiAgICAgICAgdXBsb2FkQXZhdGFyTGluaygpIHtcbiAgICAgICAgICAgIHJldHVybiByb3V0ZSgnY29yZS5hdmF0YXJzLnN0b3JlJywgW10sIGZhbHNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgaXNTZWxmVmlzaXRpbmcoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy51c2VyLmlkID09PSB0aGlzLnByb2ZpbGVVc2VyLmlkO1xuICAgICAgICB9LFxuICAgICAgICBhdmF0YXJJZCgpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2VsZlZpc2l0aW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMudXNlci5hdmF0YXJJZDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVVzZXIuYXZhdGFyID8gdGhpcy5wcm9maWxlVXNlci5hdmF0YXIuaWQgOiBudWxsO1xuICAgICAgICB9LFxuICAgICAgICBhdmF0YXJMaW5rKCkge1xuICAgICAgICAgICAgcmV0dXJuIHJvdXRlKCdjb3JlLmF2YXRhcnMuc2hvdycsICh0aGlzLmF2YXRhcklkIHx8ICdudWxsJyksIGZhbHNlKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGltZWxpbmUoKSB7XG4gICAgICAgICAgICBjb25zdCBhY3Rpb25zID0gdGhpcy5wcm9maWxlVXNlci50aW1lbGluZS5kYXRhO1xuXG4gICAgICAgICAgICByZXR1cm4gYWN0aW9ucy5tYXAoYWN0aW9uID0+IGFjdGlvbi5jcmVhdGVkX2F0KS5yZWR1Y2UoKGRheXMsIHJlY29yZCkgPT4ge1xuICAgICAgICAgICAgICAgIGRheXMucHVzaCh0aGlzLmdldERheShyZWNvcmQpKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF5cztcbiAgICAgICAgICAgIH0sIFtdKS5maWx0ZXIoKHZhbHVlLCBpbmRleCwgZGF5cykgPT4gZGF5cy5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXgpXG4gICAgICAgICAgICAgICAgLnJlZHVjZSgodGltZWxpbmUsIGRheSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aW1lbGluZVtkYXldID0gYWN0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgLmZpbHRlcihyZWNvcmQgPT4gdGhpcy5nZXREYXkocmVjb3JkLmNyZWF0ZWRfYXQpID09PSBkYXkpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZWxpbmU7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuICAgICAgICB9LFxuICAgICAgICBpc1Nob3J0KCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIDw9IDU7XG4gICAgICAgIH0sXG4gICAgICAgIGlzQXRTdGFydCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA8PSAyO1xuICAgICAgICB9LFxuICAgICAgICBpc0F0RW5kKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXG4gICAgICAgICAgICAgICAgLSB0aGlzLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA8PSAyO1xuICAgICAgICB9LFxuICAgICAgICBoYXNNaWRkbGUoKSB7XG4gICAgICAgICAgICByZXR1cm4gIXRoaXMuaXNBdFN0YXJ0ICYmICF0aGlzLmlzQXRFbmQ7XG4gICAgICAgIH0sXG4gICAgICAgIHBhZ2luYXRpb25VcmwoKSB7XG4gICAgICAgICAgICByZXR1cm4gYCR7cm91dGUoJ2FkbWluaXN0cmF0aW9uLnVzZXJzLnNob3cnLCBbdGhpcy5wcm9maWxlVXNlci5pZF0sIGZhbHNlKX0/cGFnZT1gO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBkYXRhKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5pdGlhbGlzZWQ6IGZhbHNlLFxuICAgICAgICAgICAgcHJvZmlsZVVzZXI6IHt9LFxuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICB3YXRjaDoge1xuICAgICAgICBsb2NhbGU6IHtcbiAgICAgICAgICAgIGhhbmRsZXIoKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYWdlKHRoaXMucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIG1ldGhvZHM6IHtcbiAgICAgICAgZGVsZXRlQXZhdGFyKCkge1xuICAgICAgICAgICAgYXhpb3MuZGVsZXRlKHJvdXRlKCdjb3JlLmF2YXRhcnMuZGVzdHJveScsIHRoaXMudXNlci5hdmF0YXJJZCwgZmFsc2UpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5jb21taXQoJ3NldFVzZXJBdmF0YXInLCBudWxsKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfSxcbiAgICAgICAgbG9nb3V0KCkge1xuICAgICAgICAgICAgYXhpb3MucG9zdChyb3V0ZSgnbG9nb3V0JywgW10sIGZhbHNlKS50b1N0cmluZygpKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aC9sb2dvdXQnKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0RGF5KHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh0aW1lc3RhbXApLmNhbGVuZGFyKCkuc3BsaXQoJyAnKVswXTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SFJEYXRlKHRpbWVzdGFtcCkge1xuICAgICAgICAgICAgcmV0dXJuIG1vbWVudCh0aW1lc3RhbXApLmZvcm1hdCh0aGlzLm1ldGEuZGF0ZUZvcm1hdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldEhSVGltZSh0aW1lc3RhbXApIHtcbiAgICAgICAgICAgIHJldHVybiBtb21lbnQodGltZXN0YW1wKS5mb3JtYXQoJ0g6bW0nKTtcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0SWNvbihhY3Rpb24pIHtcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaW5kZXhPZignaW5kZXgnKSA+IDApIHJldHVybiAnZmEgZmEtZXllIGhhcy10ZXh0LXN1Y2Nlc3MnO1xuICAgICAgICAgICAgaWYgKGFjdGlvbi5pbmRleE9mKCdjcmVhdGUnKSA+IDApIHJldHVybiAnZmEgZmEtcGx1cyBoYXMtdGV4dC13YXJuaW5nJztcbiAgICAgICAgICAgIGlmIChhY3Rpb24uaW5kZXhPZignZWRpdCcpID4gMCkgcmV0dXJuICdmYSBmYS1wZW5jaWwgaGFzLXRleHQtd2FybmluZyc7XG4gICAgICAgICAgICByZXR1cm4gJ2ZhIGZhLXRyYXNoLW8gaGFzLXRleHQtZGFuZ2VyJztcbiAgICAgICAgfSxcbiAgICAgICAgZ2V0UGFnZShwYWdlKSB7XG4gICAgICAgICAgICBheGlvcy5nZXQodGhpcy5wYWdpbmF0aW9uVXJsICsgcGFnZSkudGhlbigoeyBkYXRhIH0pID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb2ZpbGVVc2VyID0gZGF0YS51c2VyO1xuICAgICAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gdGhpcy5oYW5kbGVFcnJvcihlcnJvcikpO1xuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICBtb3VudGVkKCkge1xuICAgICAgICBheGlvcy5nZXQocm91dGUodGhpcy4kcm91dGUubmFtZSwgdGhpcy4kcm91dGUucGFyYW1zLmlkLCBmYWxzZSkpLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnByb2ZpbGVVc2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXNlZCA9IHRydWU7XG4gICAgICAgIH0pLmNhdGNoKGVycm9yID0+IHRoaXMuaGFuZGxlRXJyb3IoZXJyb3IpKTtcbiAgICB9LFxufTtcblxuPC9zY3JpcHQ+XG5cbjxzdHlsZT5cblxuICAgIC5oYXMtbGF0ZXJhbC1ib3JkZXJzIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsMCwwLDAuMik7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYmEoMCwwLDAsMC4yKTtcbiAgICB9XG5cbiAgICAuc3RhdC12YWx1ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMTJweDtcbiAgICB9XG5cbiAgICAuc3RhdC1rZXkge1xuICAgICAgICBmb250LXNpemU6IDEuNGVtO1xuICAgICAgICBmb250LXdlaWdodDogMjAwO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgIH1cblxuICAgIC5sZXZlbC51c2VyLWNvbnRyb2xzIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAudGltZWxpbmUtY29udGVudCB7XG4gICAgICAgIHRyYW5zaXRpb246YWxsIDFzIGVhc2U7XG4gICAgfVxuXG48L3N0eWxlPlxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvcGFnZXMvYWRtaW5pc3RyYXRpb24vdXNlcnMvU2hvdy52dWUiLCJ2YXIgcmVuZGVyID0gZnVuY3Rpb24oKSB7XG4gIHZhciBfdm0gPSB0aGlzXG4gIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICB2YXIgX2MgPSBfdm0uX3NlbGYuX2MgfHwgX2hcbiAgcmV0dXJuIF92bS5pbml0aWFsaXNlZFxuICAgID8gX2MoXCJkaXZcIiwgW1xuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveCBwcm9maWxlLWhlYWRpbmdcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW11bHRpbGluZVwiIH0sIFtcbiAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGlzLWhhbGYtZGVza3RvcFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5zIGlzLW1vYmlsZVwiIH0sIFtcbiAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBpcy1uYXJyb3dcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImltYWdlIGlzLTEyOHgxMjhcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgIF9jKFwiaW1nXCIsIHsgYXR0cnM6IHsgc3JjOiBfdm0uYXZhdGFyTGluayB9IH0pXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW5cIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwibGV2ZWwtaXRlbSBoYXMtcGFkZGluZy10b3Atc21hbGxcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwidGl0bGUgaXMtM1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcm9maWxlVXNlci5mdWxsTmFtZSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0uX18oXCJyb2xlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZmlsZVVzZXIucm9sZS5uYW1lKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcInNpbmNlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiOiBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZmlsZVVzZXIuY3JlYXRlZF9hdClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJoYXMtbWFyZ2luLXRvcC1zbWFsbFwiIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uaXNTZWxmVmlzaXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcImxldmVsIHVzZXItY29udHJvbHNcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJsZXZlbC1sZWZ0XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmF2YXRhcklkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b25cIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJidXR0b24gaXMtc21hbGwgaXMtd2FybmluZ1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7IGNsaWNrOiBfdm0uZGVsZXRlQXZhdGFyIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgwKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIkF2YXRhclwiKSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uYXZhdGFySWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFwiZmlsZS11cGxvYWRlclwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBfdm0udXBsb2FkQXZhdGFyTGlua1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwidXBsb2FkLXN1Y2Nlc3NmdWxcIjogZnVuY3Rpb24oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAkZXZlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS4kc3RvcmUuY29tbWl0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInNldFVzZXJBdmF0YXJcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJGV2ZW50LmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IFwidXBsb2FkLWJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm46IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbiBpcy1zbWFsbCBpcy1pbmZvXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5vcGVuRmlsZUJyb3dzZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiaWNvblwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImZhIGZhLXVwbG9hZFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJzcGFuXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX18oXCJBdmF0YXJcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImxldmVsLXJpZ2h0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYnV0dG9uIGlzLXNtYWxsIGlzLWRhbmdlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5sb2dvdXQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgxKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwic3BhblwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIkxvZyBPdXRcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBfYyhcImRpdlwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICFfdm0uJHN0b3JlLnN0YXRlLmltcGVyc29uYXRpbmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImJ1dHRvbiBpcy1zbWFsbCBpcy13YXJuaW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLiRidXMuJGVtaXQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzdGFydC1pbXBlcnNvbmF0aW5nXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLmlkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIkltcGVyc29uYXRlXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcInBcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbiBpcy1oYWxmLWRlc2t0b3BcIiB9LCBbXG4gICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1ucyBpcy1tb2JpbGVcIiB9LCBbXG4gICAgICAgICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWRcIiB9LCBbXG4gICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LXZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5wcm9maWxlVXNlci5sb2dpbkNvdW50KSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQta2V5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fXyhcImxvZ2luc1wiKSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJjb2x1bW4gaGFzLXRleHQtY2VudGVyZWQgaGFzLWxhdGVyYWwtYm9yZGVyc1wiXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICBfYyhcInBcIiwgeyBzdGF0aWNDbGFzczogXCJzdGF0LXZhbHVlXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLnByb2ZpbGVVc2VyLmFjdGlvbkxvZ0NvdW50KSlcbiAgICAgICAgICAgICAgICAgICAgXSksXG4gICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQta2V5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihfdm0uX3MoX3ZtLl9fKFwiYWN0aW9uc1wiKSkpXG4gICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwiY29sdW1uIGhhcy10ZXh0LWNlbnRlcmVkXCIgfSwgW1xuICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwic3RhdC12YWx1ZVwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgX3ZtLl92KF92bS5fcyhfdm0ucHJvZmlsZVVzZXIucmF0aW5nKSlcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFwicFwiLCB7IHN0YXRpY0NsYXNzOiBcInN0YXQta2V5XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKF92bS5fXyhcInJhdGluZ1wiKSkpXG4gICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pLFxuICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImNvbHVtbnMgaXMtY2VudGVyZWRcIiB9LCBbXG4gICAgICAgICAgX2MoXCJkaXZcIiwgeyBzdGF0aWNDbGFzczogXCJjb2x1bW4gaXMtdHdvLXRoaXJkcy10YWJsZXRcIiB9LCBbXG4gICAgICAgICAgICBfYyhcImRpdlwiLCB7IHN0YXRpY0NsYXNzOiBcImJveFwiIH0sIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJuYXZcIixcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uIGlzLXNtYWxsIGhhcy1tYXJnaW4tYm90dG9tLWxhcmdlXCIsXG4gICAgICAgICAgICAgICAgICBhdHRyczogeyByb2xlOiBcIm5hdmlnYXRpb25cIiwgXCJhcmlhLWxhYmVsXCI6IFwicGFnaW5hdGlvblwiIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tcHJldmlvdXNcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5wcmV2X3BhZ2VfdXJsID09PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGFnZShfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIlByZXZpb3VzXCIpKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLW5leHRcIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5uZXh0X3BhZ2VfdXJsID09PSBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGFnZShfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fXyhcIk5leHRcIikpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pc1Nob3J0XG4gICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlzdFwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSwgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpcy1jdXJyZW50XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PSBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0uaXNBdFN0YXJ0ICYmICFfdm0uaXNTaG9ydFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woMywgZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcImxpXCIsIHsga2V5OiBpIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlzLWN1cnJlbnRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZSA9PT1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoaSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoaSkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oMiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgIDogX3ZtLl9lKCksXG4gICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgX3ZtLmhhc01pZGRsZSAmJiAhX3ZtLmlzU2hvcnRcbiAgICAgICAgICAgICAgICAgICAgPyBfYyhcInVsXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saXN0XCIgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJsaVwiLCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGlua1wiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xpY2s6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDFcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSgzKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImFcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHN0YXRpY0NsYXNzOiBcInBhZ2luYXRpb24tbGluayBpcy1jdXJyZW50XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmN1cnJlbnRfcGFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlICsgMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fcyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5jdXJyZW50X3BhZ2UgKyAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbSg0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLmdldFBhZ2UoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICBdKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF92bS5pc0F0RW5kICYmICFfdm0uaXNTaG9ydFxuICAgICAgICAgICAgICAgICAgICA/IF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ1bFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpc3RcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcImxpXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJwYWdpbmF0aW9uLWxpbmtcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb246IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uZ2V0UGFnZSgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAxXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX20oNSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbCgzLCBmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF9jKFwibGlcIiwgeyBrZXk6IGkgfSwgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiYVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1saW5rXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaXMtY3VycmVudFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUubGFzdF9wYWdlIC0gMyArIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGljazogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5nZXRQYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF92bS5wcm9maWxlVXNlci50aW1lbGluZS5sYXN0X3BhZ2UgLVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZSAtXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAzICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICBcInVsXCIsXG4gICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJ0aW1lbGluZVwiIH0sXG4gICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgX3ZtLl9sKF92bS50aW1lbGluZSwgZnVuY3Rpb24oYWN0aW9ucywgZGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBfYyhcbiAgICAgICAgICAgICAgICAgICAgICBcImRpdlwiLFxuICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBkYXksIHN0YXRpY0NsYXNzOiBcInRpbWVsaW5lLWNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJ0aW1lbGluZS1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwic3BhblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFnIGlzLW1lZGl1bSBpcy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX3ZtLl92KF92bS5fcyhfdm0uX18oZGF5KSkpXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2woYWN0aW9ucywgZnVuY3Rpb24oYWN0aW9uLCBpbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJsaVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsga2V5OiBpbmRleCwgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtaXRlbVwiIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiZGl2XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtbWFya2VyIGlzLWljb25cIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbX2MoXCJpXCIsIHsgY2xhc3M6IF92bS5nZXRJY29uKGFjdGlvbi5yb3V0ZSkgfSldXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtY29udGVudFwiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIHsgc3RhdGljQ2xhc3M6IFwiaGVhZGluZ1wiIH0sIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldEhSRGF0ZShhY3Rpb24uY3JlYXRlZF9hdCkpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIgXCIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoX3ZtLmdldEhSVGltZShhY3Rpb24uY3JlYXRlZF9hdCkpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX2MoXCJwXCIsIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoX3ZtLl9zKGFjdGlvbi5wZXJtaXNzaW9uLmRlc2NyaXB0aW9uKSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICAgICAgICAgICAgICBfdm0ucHJvZmlsZVVzZXIudGltZWxpbmUuY3VycmVudF9wYWdlID09PVxuICAgICAgICAgICAgICAgICAgX3ZtLnByb2ZpbGVVc2VyLnRpbWVsaW5lLmxhc3RfcGFnZVxuICAgICAgICAgICAgICAgICAgICA/IF9jKFwibGlcIiwgeyBzdGF0aWNDbGFzczogXCJ0aW1lbGluZS1oZWFkZXJcIiB9LCBbXG4gICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHsgc3RhdGljQ2xhc3M6IFwidGFnIGlzLW1lZGl1bSBpcy1wcmltYXJ5XCIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW192bS5fdihfdm0uX3MoX3ZtLl9fKFwiRW5kXCIpKSldXG4gICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgXSlcbiAgICAgICAgICAgICAgICAgICAgOiBfYyhcImxpXCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtaXRlbVwiIH0sIFtfdm0uX20oNildKVxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0pXG4gICAgICAgIF0pXG4gICAgICBdKVxuICAgIDogX3ZtLl9lKClcbn1cbnZhciBzdGF0aWNSZW5kZXJGbnMgPSBbXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwic3BhblwiLCB7IHN0YXRpY0NsYXNzOiBcImljb25cIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS10cmFzaC1vXCIgfSlcbiAgICBdKVxuICB9LFxuICBmdW5jdGlvbigpIHtcbiAgICB2YXIgX3ZtID0gdGhpc1xuICAgIHZhciBfaCA9IF92bS4kY3JlYXRlRWxlbWVudFxuICAgIHZhciBfYyA9IF92bS5fc2VsZi5fYyB8fCBfaFxuICAgIHJldHVybiBfYyhcInNwYW5cIiwgeyBzdGF0aWNDbGFzczogXCJpY29uXCIgfSwgW1xuICAgICAgX2MoXCJpXCIsIHsgc3RhdGljQ2xhc3M6IFwiZmEgZmEtc2lnbi1vdXRcIiB9KVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1lbGxpcHNpc1wiIH0sIFtfdm0uX3YoXCLigKZcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1lbGxpcHNpc1wiIH0sIFtfdm0uX3YoXCLigKZcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1lbGxpcHNpc1wiIH0sIFtfdm0uX3YoXCLigKZcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwibGlcIiwgW1xuICAgICAgX2MoXCJzcGFuXCIsIHsgc3RhdGljQ2xhc3M6IFwicGFnaW5hdGlvbi1lbGxpcHNpc1wiIH0sIFtfdm0uX3YoXCLigKZcIildKVxuICAgIF0pXG4gIH0sXG4gIGZ1bmN0aW9uKCkge1xuICAgIHZhciBfdm0gPSB0aGlzXG4gICAgdmFyIF9oID0gX3ZtLiRjcmVhdGVFbGVtZW50XG4gICAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gICAgcmV0dXJuIF9jKFwiZGl2XCIsIHsgc3RhdGljQ2xhc3M6IFwidGltZWxpbmUtbWFya2VyIGlzLWljb25cIiB9LCBbXG4gICAgICBfYyhcImlcIiwgeyBzdGF0aWNDbGFzczogXCJmYSBmYS1mdyBmYS1lbGxpcHNpcy1oXCIgfSlcbiAgICBdKVxuICB9XG5dXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcbm1vZHVsZS5leHBvcnRzID0geyByZW5kZXI6IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zOiBzdGF0aWNSZW5kZXJGbnMgfVxuaWYgKG1vZHVsZS5ob3QpIHtcbiAgbW9kdWxlLmhvdC5hY2NlcHQoKVxuICBpZiAobW9kdWxlLmhvdC5kYXRhKSB7XG4gICAgcmVxdWlyZShcInZ1ZS1ob3QtcmVsb2FkLWFwaVwiKSAgICAgIC5yZXJlbmRlcihcImRhdGEtdi0xOGEzY2I0OFwiLCBtb2R1bGUuZXhwb3J0cylcbiAgfVxufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP3tcImlkXCI6XCJkYXRhLXYtMThhM2NiNDhcIixcImhhc1Njb3BlZFwiOmZhbHNlLFwiYnVibGVcIjp7XCJ0cmFuc2Zvcm1zXCI6e319fSEuL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9yZXNvdXJjZXMvYXNzZXRzL2pzL3BhZ2VzL2FkbWluaXN0cmF0aW9uL3VzZXJzL1Nob3cudnVlXG4vLyBtb2R1bGUgaWQgPSAxNDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMzEiXSwic291cmNlUm9vdCI6IiJ9