exports.ids = [45];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(158);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("feb6c316", content, true, context)
};

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_tracking_vue_vue_type_style_index_0_id_533ec679_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(100);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_tracking_vue_vue_type_style_index_0_id_533ec679_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_tracking_vue_vue_type_style_index_0_id_533ec679_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_tracking_vue_vue_type_style_index_0_id_533ec679_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_sent_tracking_vue_vue_type_style_index_0_id_533ec679_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#sig-canvas[data-v-533ec679]{border:2px dotted #ccc;border-radius:15px;cursor:crosshair}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sent_tracking.vue?vue&type=template&id=533ec679&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticStyle: {
      "padding-left": "40px",
      "padding-right": "40px",
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-533ec679></div> <div class=\"row\" data-v-533ec679></div> <div class=\"row\" style=\"margin-top: 200px\" data-v-533ec679><div class=\"row\" data-v-533ec679><div class=\"col s12 center red-text\" data-v-533ec679><h5 data-v-533ec679>\n                Tracking ID:\n            </h5> <b data-v-533ec679>" + _vm._ssrEscape("\n                " + _vm._s(_vm.tracking_id) + "\n            ") + "</b> <h4 data-v-533ec679>\n                Copy\n            </h4></div> <div class=\"col s12 center\" data-v-533ec679><i class=\"material-icons large red-text\" data-v-533ec679>send</i></div> <div class=\"col s12 center red-text\" data-v-533ec679><h6 data-v-533ec679>\n                Form has been submited\n            </h6></div> <div class=\"col s12 center red-text\" data-v-533ec679><div class=\"row\" data-v-533ec679><div class=\"col s12 center\" data-v-533ec679><a data-v-533ec679><div class=\"card-panel red\" data-v-533ec679><span class=\"white-text\" data-v-533ec679><h6 data-v-533ec679>Back to menu</h6></span></div></a></div></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/sent_tracking.vue?vue&type=template&id=533ec679&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/sent_tracking.vue?vue&type=script&lang=js
/* harmony default export */ var sent_trackingvue_type_script_lang_js = ({
  layout: 'admin_main',
  data() {
    return {
      tracking_id: ''
    };
  },
  methods: {
    goToDashboard() {
      localStorage.setItem('tracking_id', '');
      window.location.href = './dashboard_ie_force';
    },
    async copyTrackingId(tracking_id) {
      try {
        await navigator.clipboard.writeText(tracking_id);
        M.toast({
          html: '<b class="green-text">Tracking ID copied</b>'
        });
      } catch (error) {}
    }
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems, options);
    });
    let tracking_id = localStorage.getItem('tracking_id');
    if (tracking_id) {
      this.tracking_id = tracking_id;
    }
  },
  created() {}
});
// CONCATENATED MODULE: ./pages/sent_tracking.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_sent_trackingvue_type_script_lang_js = (sent_trackingvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/sent_tracking.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(157)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_sent_trackingvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "533ec679",
  "6ee304a5"
  
)

/* harmony default export */ var sent_tracking = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=sent_tracking.js.map