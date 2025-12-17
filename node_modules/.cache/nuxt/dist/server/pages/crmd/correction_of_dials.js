exports.ids = [10,1];
exports.modules = {

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("41a3f6f2", content, true, context)
};

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correction_of_dials_vue_vue_type_style_index_0_id_b82e1160_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correction_of_dials_vue_vue_type_style_index_0_id_b82e1160_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correction_of_dials_vue_vue_type_style_index_0_id_b82e1160_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correction_of_dials_vue_vue_type_style_index_0_id_b82e1160_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_correction_of_dials_vue_vue_type_style_index_0_id_b82e1160_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#sig-canvas[data-v-b82e1160]{border:2px dotted #ccc;border-radius:15px;cursor:crosshair}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/crmd/correction_of_dials.vue?vue&type=template&id=b82e1160&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-b82e1160>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-b82e1160>", "</div>", [_c('nuxt-link', {
    staticClass: "red white-text btn",
    attrs: {
      "to": "./"
    }
  }, [_vm._v("\n                Back\n            ")]), _vm._ssrNode(" <b class=\"grey-text btn disabled\" data-v-b82e1160>Correction of Dials</b>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-b82e1160>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><div" + _vm._ssrClass("row", {
    'hide': _vm.hideModal
  }) + " data-v-b82e1160><div class=\"row\" data-v-b82e1160><a href=\"#!\" class=\"waves-effect waves-red btn-large white red-text right\" data-v-b82e1160>DONE</a></div> <div class=\"row\" data-v-b82e1160><div class=\"container\" data-v-b82e1160><div class=\"row\" data-v-b82e1160><div class=\"col s12 center\" data-v-b82e1160><h6 data-v-b82e1160>Sign here!</h6></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12 center\" data-v-b82e1160><canvas id=\"sig-canvas\" width=\"250px\" data-v-b82e1160>\n                                        Your phone not supporting signature\n                                    </canvas></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12 center\" data-v-b82e1160><div class=\"col s6\" data-v-b82e1160><button id=\"sig-submitBtn\" class=\"btn btn-large red\" data-v-b82e1160>Save</button></div> <div class=\"col s6\" data-v-b82e1160><button id=\"sig-clearBtn\" class=\"btn btn-large red\" data-v-b82e1160>Clear</button></div></div></div> <br data-v-b82e1160> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><textarea id=\"sig-dataUrl\" rows=\"5\" class=\"form-control hide\" data-v-b82e1160>Data URL for your signature will go here!</textarea></div></div></div></div></div></div></div> "), _vm._ssrNode("<div" + _vm._ssrClass("row", {
    'hide': _vm.hideForm
  }) + " data-v-b82e1160>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-b82e1160>", "</div>", [_vm._ssrNode("<form style=\"margin-top: 20px\" data-v-b82e1160>", "</form>", [_vm._ssrNode("<div class=\"row\" data-v-b82e1160>", "</div>", [_vm._ssrNode("<div class=\"col s12\" style=\"margin-bottom: 15px;\" data-v-b82e1160>", "</div>", [_c('CustomSelect', {
    attrs: {
      "options": ['postpaid'],
      "default": 'postpaid'
    },
    model: {
      value: _vm.service_type,
      callback: function ($$v) {
        _vm.service_type = $$v;
      },
      expression: "service_type"
    }
  })], 1)]), _vm._ssrNode(" " + (_vm.service_type == 'postpaid' ? "<div class=\"row\" data-v-b82e1160><div class=\"col s9\" data-v-b82e1160><input type=\"text\" placeholder=\"Account number\"" + _vm._ssrAttr("value", _vm.account_number) + " data-v-b82e1160></div> <div class=\"col s3\" data-v-b82e1160><button class=\"btn btn-flat red white-text\" data-v-b82e1160>Check</button></div></div>" : "<!---->") + " " + (_vm.service_type == 'prepaid' ? "<div class=\"row\" data-v-b82e1160><div class=\"col s9\" data-v-b82e1160><input type=\"text\" placeholder=\"Meter number\"" + _vm._ssrAttr("value", _vm.meter_number) + " data-v-b82e1160></div> <div class=\"col s3\" data-v-b82e1160><button class=\"btn btn-flat red white-text\" data-v-b82e1160>Check</button></div></div>" : "<!---->") + " <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><input type=\"text\" placeholder=\"Account name\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.account_name) + " data-v-b82e1160></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><input type=\"text\" placeholder=\"Account status\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.account_status) + " data-v-b82e1160></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><input type=\"text\" placeholder=\"Tarrif\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.tarrif) + " data-v-b82e1160></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><input type=\"text\" placeholder=\"Address\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.address) + " data-v-b82e1160></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><b data-v-b82e1160>BU:</b>" + _vm._ssrEscape(" " + _vm._s(_vm.business_unit) + "\n                            ") + "</div></div> <br data-v-b82e1160> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><b data-v-b82e1160>UT:</b>" + _vm._ssrEscape(" " + _vm._s(_vm.undertaking_one) + "\n                            ") + "</div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><input type=\"text\" placeholder=\"DT name\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.dt_name) + " data-v-b82e1160></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><input type=\"text\" placeholder=\"Phone number\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.phone_number) + " data-v-b82e1160></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><input type=\"text\" placeholder=\"Location\" disabled=\"disabled\"" + _vm._ssrAttr("value", _vm.location) + " data-v-b82e1160></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><input type=\"text\" placeholder=\"Meter type\"" + _vm._ssrAttr("value", _vm.meter_type) + " data-v-b82e1160></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><input type=\"text\" placeholder=\"Old Dial\"" + _vm._ssrAttr("value", _vm.old_dial) + " data-v-b82e1160></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><input type=\"text\" placeholder=\"New Dial\"" + _vm._ssrAttr("value", _vm.new_dial) + " data-v-b82e1160></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><h6 class=\"red-text\" data-v-b82e1160>\n                                Meter Front View showing number of dials (*)\n                            </h6> <button class=\"btn red btn-large\" data-v-b82e1160><i class=\"material-icons white-text\" data-v-b82e1160>camera_alt</i></button></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><img id=\"output-pic-of-the-FVSNOD\" class=\"responsive-img\" data-v-b82e1160></div></div> <div class=\"row\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><h6 class=\"red-text\" data-v-b82e1160>Remarks:</h6> <textarea placeholder=\"Remarks\" class=\"materialize-textarea\" data-v-b82e1160>" + _vm._ssrEscape(_vm._s(_vm.remarks)) + "</textarea></div></div> <div class=\"row center\" data-v-b82e1160></div> <div class=\"row center safe-area-bottom\" data-v-b82e1160><div class=\"col s12\" data-v-b82e1160><button" + _vm._ssrAttr("disabled", _vm.disabled_bool) + " class=\"btn btn-large red\" style=\"width: 300px; margin-top: 20px;\" data-v-b82e1160>Submit</button></div></div>")], 2)])])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/crmd/correction_of_dials.vue?vue&type=template&id=b82e1160&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/crmd/correction_of_dials.vue?vue&type=script&lang=js
var correction_of_dialsvue_type_script_lang_js = __webpack_require__(78);

// CONCATENATED MODULE: ./pages/crmd/correction_of_dials.vue?vue&type=script&lang=js
 /* harmony default export */ var crmd_correction_of_dialsvue_type_script_lang_js = (correction_of_dialsvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/crmd/correction_of_dials.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(176)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  crmd_correction_of_dialsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "b82e1160",
  "2815024b"
  
)

/* harmony default export */ var correction_of_dials = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {CustomSelect: __webpack_require__(44).default})


/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("017042ee", content, true, context)
};

/***/ }),

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CustomSelect.vue?vue&type=template&id=172a9751&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "custom-select",
    attrs: {
      "tabindex": _vm.tabindex
    },
    on: {
      "blur": function ($event) {
        _vm.open = false;
      }
    }
  }, [_vm._ssrNode("<div" + _vm._ssrClass("selected", {
    open: _vm.open
  }) + " data-v-172a9751>" + _vm._ssrEscape("\n    " + _vm._s(_vm.selected) + "\n  ") + "</div> <div" + _vm._ssrClass("items", {
    selectHide: !_vm.open
  }) + " data-v-172a9751>" + _vm._ssrList(_vm.options, function (option, i) {
    return "<div data-v-172a9751>" + _vm._ssrEscape("\n      " + _vm._s(option) + "\n    ") + "</div>";
  }) + "</div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/CustomSelect.vue?vue&type=template&id=172a9751&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/CustomSelect.vue?vue&type=script&lang=js
/* harmony default export */ var CustomSelectvue_type_script_lang_js = ({
  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false,
      default: null
    },
    tabindex: {
      type: Number,
      required: false,
      default: 0
    }
  },
  data() {
    return {
      selected: this.default ? this.default : this.options.length > 0 ? this.options[0] : null,
      open: false
    };
  },
  mounted() {
    this.$emit("input", this.selected);
  }
});
// CONCATENATED MODULE: ./components/CustomSelect.vue?vue&type=script&lang=js
 /* harmony default export */ var components_CustomSelectvue_type_script_lang_js = (CustomSelectvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/CustomSelect.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_CustomSelectvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "172a9751",
  "1cfffdc9"
  
)

/* harmony default export */ var CustomSelect = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return getFaltTickets; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return getUndertakingUnits; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return getFaultCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return getFaultTicketDetailsById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "t", function() { return reasignFault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "s", function() { return materialRequiredSignal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return getMaterialsByBU; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return acceptMaterial; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return checkCustomerMeterNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return getCustomerInfoApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return getCustomerInfoApi2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return getIDBCustomerInfoApi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return getRequestDetailsWithTrackingId; });
/* unused harmony export generateRandomString */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "u", function() { return uploadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return getPaymentHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getBillingHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAllDTList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return getDTSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return getDCUSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return getEsrFormHistory; });
/* unused harmony export logOut */
/* unused harmony export getCoordinates */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return getCurrentPosition; });
// API CALLS FOR IE TECHNICAL WORKFORCE APP
// js_modules/mods.js

// get fault tickets
async function getFaltTickets() {
  try {
    // 1. COPY THE TOKEN FROM POSTMAN AND PASTE IT HERE
    // Do not use the old one.
    const validToken = localStorage.getItem("token");
    const rawResponse = await fetch("https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/fault/ticket?status=PENDING", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${validToken}`,
        "Auth": "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const response = await rawResponse.json();

    // Debugging: See exactly what the server says
    console.log("Status Code:", rawResponse.status);
    console.log("Response Body:", response);
    return response;
  } catch (error) {
    console.log("Fetch Error:", error);
    if (typeof M !== 'undefined') {
      M.toast({
        html: `<b class="red-text">Network Error: ${error.message}</b>`
      });
    }
    return [];
  }
}

// Function to fetch Undertaking Units based on the selected Business Unit (BU)
async function getUndertakingUnits(businessUnit) {
  try {
    const validToken = localStorage.getItem("token");

    // Construct the URL with the dynamic BU parameter
    const apiUrl = `https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/getUTInfo?bu=${businessUnit}`;
    const rawResponse = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${validToken}`,
        "Auth": "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const response = await rawResponse.json();
    console.log(`UT API Status for BU ${businessUnit}:`, rawResponse.status);
    console.log(`UT API Response for BU ${businessUnit}:`, response);

    // Handle non-200 responses and cases where the response might not be an array
    if (rawResponse.status !== 200 || !Array.isArray(response)) {
      if (typeof M !== 'undefined') {
        M.toast({
          html: `<b class="red-text">Error: Could not fetch UTs for ${businessUnit}.</b>`
        });
      }
      return []; // Return an empty array on failure
    }
    return response;
  } catch (error) {
    console.error("UT Fetch Error:", error);
    if (typeof M !== 'undefined') {
      M.toast({
        html: `<b class="red-text">Network Error fetching UTs.</b>`
      });
    }
    return [];
  }
}

// Function to fetch all top-level fault categories
async function getFaultCategories() {
  try {
    const validToken = localStorage.getItem("token");

    // API endpoint for fault categories
    const apiUrl = "https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/getFaultCategoryOptions";
    const rawResponse = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${validToken}`,
        "Auth": "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const response = await rawResponse.json();
    console.log(`Fault Categories API Status:`, rawResponse.status);
    console.log(`Fault Categories API Response:`, response);

    // 1. Handle non-200 responses and ensure response is an array
    if (rawResponse.status !== 200 || !Array.isArray(response)) {
      if (typeof M !== 'undefined') {
        M.toast({
          html: `<b class="red-text">Error: Could not fetch fault categories.</b>`
        });
      }
      return [];
    }

    // 2. Map the response to extract only the 'name' property
    // const categoryNames = response.map(category => category.name);

    return response; // Returns an array of strings (e.g., ["BROKEN_POLE", "DT_FAULT", ...])
  } catch (error) {
    console.error("Fault Categories Fetch Error:", error);
    if (typeof M !== 'undefined') {
      M.toast({
        html: `<b class="red-text">Network Error fetching fault categories.</b>`
      });
    }
    return [];
  }
}

// get fault ticket details by ID
async function getFaultTicketDetailsById(id) {
  try {
    const validToken = localStorage.getItem("token");

    // Construct the URL with the dynamic ID
    const apiUrl = `https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/fault/getById?id=${id}`;
    const rawResponse = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${validToken}`,
        "Auth": "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const response = await rawResponse.json();
    console.log(`Details API Status for ID ${id}:`, rawResponse.status);
    console.log(`Details API Response for ID ${id}:`, response);

    // Handle non-200 responses gracefully
    if (rawResponse.status !== 200) {
      if (typeof M !== 'undefined') {
        M.toast({
          html: `<b class="red-text">Error ${rawResponse.status}: Could not fetch details.</b>`
        });
      }
      // Return null or a predictable error structure
      return null;
    }
    return response;
  } catch (error) {
    console.error("Details Fetch Error:", error);
    if (typeof M !== 'undefined') {
      M.toast({
        html: `<b class="red-text">Network Error fetching details.</b>`
      });
    }
    return null;
  }
}

// get fault ticket details by ID
async function reasignFault(id, bu, ut, techLead) {
  try {
    const validToken = localStorage.getItem("token");

    // Construct the URL with the dynamic ID
    const apiUrl = `https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/fault/reassign?faultId=${id}&bu=${bu}&ut=${ut}&techLead=${techLead}`;
    const rawResponse = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${validToken}`,
        "Auth": "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const response = await rawResponse.json();
    console.log(`Details API Status for ID ${id}:`, rawResponse.status);
    console.log(`Details API Response for ID ${id}:`, response);

    // Handle non-200 responses gracefully
    if (rawResponse.status !== 200) {
      if (typeof M !== 'undefined') {
        M.toast({
          html: `<b class="red-text">Error ${rawResponse.status}: Could not fetch details.</b>`
        });
      }
      // Return null or a predictable error structure
      return null;
    }
    return response;
  } catch (error) {
    console.error("Details Fetch Error:", error);
    if (typeof M !== 'undefined') {
      M.toast({
        html: `<b class="red-text">Network Error fetching details.</b>`
      });
    }
    return null;
  }
}

// get material required signal by ID
async function materialRequiredSignal(id) {
  try {
    const validToken = localStorage.getItem("token");
    const apiUrl = `https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/materialRequiredById?id=${id}`;
    const rawResponse = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${validToken}`,
        "Auth": "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const response = await rawResponse.json();
    return response;
  } catch (error) {
    console.error("Material required signal Error:", error);
    return [];
  }
}

// get materials by BU
async function getMaterialsByBU(bu) {
  try {
    const validToken = localStorage.getItem("token");
    const apiUrl = `https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/getMaterialInfo?bu=${bu}`;
    const rawResponse = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${validToken}`,
        "Auth": "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const response = await rawResponse.json();
    return Array.isArray(response) ? response : [];
  } catch (error) {
    console.error("Material Fetch Error:", error);
    return [];
  }
}
async function acceptMaterial(id) {
  try {
    const validToken = localStorage.getItem("token");
    const apiUrl = `https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/materialaccepted?fault_id=${id}`;
    const rawResponse = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${validToken}`,
        "Auth": "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const response = await rawResponse.json();
    return response;
  } catch (error) {
    console.error("Network Error:", error);
    return [];
  }
}
async function checkCustomerMeterNumber(meterNumber, internal) {
  var CustomerMeterNumber = "";
  CustomerMeterNumber = {
    param1: meterNumber
  };
  CustomerMeterNumber = JSON.stringify(CustomerMeterNumber);
  try {
    const rawResponse = await fetch("https://api.ikejaelectric.com/ie/harmony/v1/customer/accountlookup", {
      method: "POST",
      headers: {
        Authorization: "Bearer 1ba5295b-3525-3a8c-9b23-69a82e45fb2d",
        "Content-Type": "application/json"
      },
      body: CustomerMeterNumber
    });
    const response = await rawResponse.json();
    // return response

    // console.log(response)

    // console.log(response.accountNumber)
    console.log(response);
    let users_meter_number = response.meterNumber;
    if (users_meter_number == "") {
      if (internal == true) {
        M.toast({
          html: `<b class="yellow-text">Please wait</b>`
        });
      } else {
        M.toast({
          html: `<b class="red-text">Please check meter number agian</b>`
        });
      }
      return response;
    } else {
      if (response.status == 500) {
        await logOut();
      } else {
        return response;
      }
      // let users_account_number = response.accountNumber
      // console.log(users_account_number)
      // users_account_number = users_account_number.trim()
      // await getCustomerInfoApi(users_account_number)
    }
  } catch (error) {
    console.log(error);
    console.log(this.service_type);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getCustomerInfoApi(accountNumber) {
  M.toast({
    html: `<b class="yellow-text">Please wait</b>`
  });
  var CustomerAccountNumber = "";
  CustomerAccountNumber = {
    accountNumber: accountNumber
  };
  CustomerAccountNumber = JSON.stringify(CustomerAccountNumber);
  try {
    const rawResponse = await fetch("https://api.ikejaelectric.com/ie/harmony/v1/customer/info", {
      method: "POST",
      headers: {
        Authorization: "Bearer 1ba5295b-3525-3a8c-9b23-69a82e45fb2d",
        "Content-Type": "application/json"
      },
      body: CustomerAccountNumber
    });
    const response = await rawResponse.json();
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getCustomerInfoApi2(meterNumber, service_type) {
  M.toast({
    html: `<b class="yellow-text">Please wait</b>`
  });
  let token = localStorage.getItem("token");
  var customer_meter_number = "";
  customer_meter_number = meterNumber;
  // "https://api.ikejaelectric.com/ie/harmony/v1/customer/info",
  // use the customer2 api here when you wake up by God's grace. Jesus is Lord

  try {
    // const rawResponse = await fetch(
    //   "https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/customerinfo2?meterNo=" +
    //     customer_meter_number + "&serviceType=" + service_type,

    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/customerinfo2?meterNo=" + customer_meter_number + "&serviceType=" + service_type, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json"
      }
    });
    const response = await rawResponse.json();
    console.log(`This is the response ${response}`);
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}

// this is DT customerInfoApi 43901910984
async function getIDBCustomerInfoApi(accountNumber) {
  console.log(`this is the meter number from the mode ${accountNumber}`);
  M.toast({
    html: `<b class="yellow-text">Please wait</b>`
  });
  let token = localStorage.getItem("token");
  console.log(token);
  var CustomerAccountNumber = "";
  // CustomerAccountNumber = {
  //   accountNumber: accountNumber,
  // };
  // CustomerAccountNumber = JSON.stringify(CustomerAccountNumber);
  try {
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/customerinfo?meterNo=" + accountNumber,
    // "https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/customerinfo?meterNo="+accountNumber,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json"
      }
    });
    // http://192.168.6.183:8087/cwfrestapi/api/v1/customerinfo?meterNo=43901910984
    const response = await rawResponse.json();
    console.log(`This is the response ${response}`);
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getRequestDetailsWithTrackingId(trackingId) {
  console.log("this is the trackingId", trackingId);
  try {
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getRequestDetails?trackingId=" + trackingId,
    // const rawResponse = await fetch(
    //   "https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/getRequestDetails?trackingId=" +
    //     trackingId,
    {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6",
        "Content-Type": "application/json"
      }
    });
    const response = await rawResponse.json();
    // return response

    // console.log(response)

    // console.log(response.accountNumber)
    console.log(response);

    // let users_meter_number = response.meterNumber;

    // if (users_meter_number == "") {
    //   if(internal == true){
    //     M.toast({
    //       html: `<b class="yellow-text">Please wait</b>`,
    //     });
    //   } else {
    //     M.toast({
    //       html: `<b class="red-text">Please check meter number agian</b>`,
    //     });
    //   }
    //   return response;
    // } else {
    //   if (response.status == 500) {
    //     await logOut();
    //   } else {
    //     return response;
    //   }
    // }

    // if (users_meter_number == "") {
    //   if(internal == true){
    //     M.toast({
    //       html: `<b class="yellow-text">Please wait</b>`,
    //     });
    //   } else {
    //     M.toast({
    //       html: `<b class="red-text">Please check meter number agian</b>`,
    //     });
    //   }
    //   return response;
    // } else {
    //   if (response.status == 500) {
    //     await logOut();
    //   } else {
    //     return response;
    //   }
    // }

    return response;
  } catch (error) {
    console.log(error);
    // console.log(this.service_type);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
function generateRandomString() {
  let result = "";
  let new_date = Date();
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < 10; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
async function uploadImage(workOrder, docType, file) {
  // run an open minded check on the accountNumber/Meternumber on next version control (11th April 11:52 2025)
  // if (accountNumber == '' || empty(accountNumber)) {
  //   accountNumber = `IE_CWA_${generateRandomString()}`
  // }

  // console.log(`this is a dummy account ${accountNumber}`);
  // console.log(`this is a dummy account ${accountNumber}`);
  // console.log(`this is a dummy account ${accountNumber}`);

  M.toast({
    html: `<b class="yellow-text">Uploading </b>`
  });
  console.log('uploading image function called');
  console.log(workOrder, docType, file);
  var formData = new FormData();
  formData.append("workOrder", workOrder);
  formData.append("docType", docType);
  formData.append("file", file);
  try {
    // 92802433505
    const rawResponse = await fetch("https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/upload/document",
    // const rawResponse = await fetch(
    //   "https://api.ikejaelectric.com/technicalwfrestapi/v1/api/v1/upload/document",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + localStorage.token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
      },
      body: formData
    });
    const response = await rawResponse.json();
    if (response.statusMsg == "Success") {
      M.toast({
        html: `<b class="green-text">Success </b>`
      });
    }
    // console.log(response)

    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
    return error;
  }
}
async function getPaymentHistory(meter_numberX, date_from, date_to) {
  // let token = localStorage.getItem('jdotwdott')
  // var passwords = ""
  // meter_number = {
  //     param: "0102327327",
  // }
  // meter_number = JSON.stringify(meter_number)
  // let meter_number = '0102111612'
  let meter_number = meter_numberX;
  let x = await checkCustomerMeterNumber(meter_number, true);
  console.log(`this is the account number ${x}`);
  if (x.meterNumber == "" || x == "undefined") {
    try {
      console.log(date_from, date_to);
      // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
      const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=" + meter_number + "&startDate=" + date_from + "&endDate=" + date_to, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.token,
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
        }
      });
      const response = await rawResponse.json();
      // console.log(response)
      if (response.status == 500) {
        await logOut();
      } else {
        return response;
      }

      // console.log(response)

      // console.log(response.passwords)
      // console.log(response)
      // return response
    } catch (error) {
      console.log(error);
      M.toast({
        html: `<b class="red-text">${error}</b>`
      });
    }
  } else if (x.accountNumber != "" && x.code == "00") {
    meter_number = x.accountNumber;
    try {
      console.log(date_from, date_to);
      // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
      const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=" + meter_number + "&startDate=" + date_from + "&endDate=" + date_to, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.token,
          Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
        }
      });
      const response = await rawResponse.json();
      // console.log(response)
      if (response.status == 500) {
        await logOut();
      } else {
        return response;
      }

      // console.log(response)

      // console.log(response.passwords)
      // console.log(response)
      // return response
    } catch (error) {
      console.log(error);
      M.toast({
        html: `<b class="red-text">${error}</b>`
      });
    }
  }
}
async function getBillingHistory(meter_number, date_from, date_to) {
  // let token = localStorage.getItem('jdotwdott')
  // var passwords = ""
  // meter_number = {
  //     param: "0102327327",
  // }
  // meter_number = JSON.stringify(meter_number)
  // let meter_number = '0102111612'

  try {
    console.log(date_from, date_to);
    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getBillingHistory?accountNumber=" + meter_number + "&startDate=" + date_from + "&endDate=" + date_to, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
      }
    });
    const response = await rawResponse.json();
    console.log(response);
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getAllDTList(username) {
  // username = 'paseeperi'
  console.log(username);
  try {
    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getESRDTLink?username=" + username, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
      }
    });
    const response = await rawResponse.json();
    // console.log(response)
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getDTSearch(searchString) {
  searchString = searchString.toLowerCase();
  try {
    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getDTSearch?searchString=" + searchString, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
      }
    });
    console.log(response);
    const response = await rawResponse.json();
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getDCUSearch(searchString) {
  searchString = searchString.toLowerCase();
  try {
    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getPaymentHistory?accountNumber=' + meter_number + '&startDate=01/15/2024&endDate=03/30/2024', {
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getidbboxinfo?dcuNo=" + searchString, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + localStorage.token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
      }
    });
    console.log(response);
    const response = await rawResponse.json();
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function getEsrFormHistory(date_from, date_to) {
  // let token = localStorage.getItem('jdotwdott')
  // var passwords = ""
  // meter_number = {
  //     param: "0102327327",
  // }
  // meter_number = JSON.stringify(meter_number)
  // let meter_number = '0102111612'

  try {
    console.log(date_from, date_to);
    const rawResponse = await fetch("https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/getFormReport?startDate=" + date_from + "&endDate=" + date_to, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.token,
        Auth: "Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6"
      }
    });
    const response = await rawResponse.json();
    console.log(response.status);
    if (response.status == 500) {
      await logOut();
    } else {
      return response;
    }

    // console.log(response)

    // console.log(response.passwords)
    // console.log(response)
    // return response
  } catch (error) {
    console.log(error);
    M.toast({
      html: `<b class="red-text">${error}</b>`
    });
  }
}
async function logOut() {
  if (false) {}
}

// export function getCoordinates() {
//   return new Promise((resolve, reject) => {
//     if (!process.client) {
//       M.toast({
//         html: `<b class="red-text">Geolocation is not available on the server side</b>`,
//       });
//       reject(new Error("Geolocation is not available on the server side"));
//       return;
//     }

//     if (!navigator.geolocation) {
//       M.toast({
//         html: `<b class="red-text">Geolocation is not supported by your browser</b>`,
//       });
//       reject(new Error("Geolocation is not supported by your browser"));
//       return;
//     }

//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         const long = position.coords.longitude;
//         const lat = position.coords.latitude;
//         resolve({ long, lat });
//       },
//       (error) => {
//         handleError(error);
//         console.log('this is geo error: ', error);
//         const long = 0;
//         const lat = 0;
//         resolve({ long, lat });

//         // resolve(error);
//       },
//       { enableHighAccuracy: true, timeout: 7000, maximumAge: 0 }
//     );
//   });
// }

// function handleError(error) {
//   switch (error.code) {
//     case error.PERMISSION_DENIED:
//       M.toast({
//         html: `<b class="red-text">User denied the request for geolocation</b>`,
//       });
//       break;
//     case error.POSITION_UNAVAILABLE:
//       M.toast({
//         html: `<b class="red-text">Location information is unavailable</b>`,
//       });
//       break;
//     case error.TIMEOUT:
//       M.toast({
//         html: `<b class="red-text">The request to get user location timed out</b>`,
//       });
//       break;
//     default:
//       M.toast({
//         html: `<b class="red-text">The request to get user location timed out</b>`,
//       });
//       break;
//   }
// }

// export function getCurrentPosition (){
//     return getCoordinates()
//       .then(({ long, lat }) => {
//         // console.log(`Longitude: ${long}, Latitude: ${lat}`)
//         // this.long = long
//         // this.lat = lat
//         // Do something with the coordinates
//         return { long, lat }
//       })
//       .catch(error => {
//         console.error('Error getting coordinates:', error)
//       })
// }

function getCoordinates() {
  return new Promise((resolve, reject) => {
    // Check if running on the client side
    if (true) {
      M.toast({
        html: `<b class="red-text">Geolocation is not available on the server side</b>`
      });
      resolve({
        long: 0,
        lat: 0
      }); // Resolve with default values
      return;
    }

    // Check if geolocation is supported by the browser
    if (!navigator.geolocation) {
      M.toast({
        html: `<b class="red-text">Geolocation is not supported by your browser</b>`
      });
      resolve({
        long: 0,
        lat: 0
      }); // Resolve with default values
      return;
    }

    // Get the current position
    navigator.geolocation.getCurrentPosition(position => {
      const long = position.coords.longitude;
      const lat = position.coords.latitude;
      resolve({
        long,
        lat
      }); // Resolve with coordinates
    }, error => {
      handleError(error); // Show error toast

      // Handle specific errors
      if (error.code === error.POSITION_UNAVAILABLE || error.message.includes("kCLErrorLocationUnknown")) {
        console.warn("Location unknown. Retrying or falling back to default values.");
        resolve({
          long: 0,
          lat: 0
        }); // Resolve with default values
      } else {
        resolve({
          long: 0,
          lat: 0
        }); // Resolve with default values for other errors
      }
    }, {
      enableHighAccuracy: true,
      timeout: 7000,
      maximumAge: 0
    });
  });
}

// Handle geolocation errors
function handleError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      M.toast({
        html: `<b class="red-text">User denied the request for geolocation</b>`
      });
      break;
    case error.POSITION_UNAVAILABLE:
      M.toast({
        html: `<b class="red-text">Location information is unavailable</b>`
      });
      break;
    case error.TIMEOUT:
      M.toast({
        html: `<b class="red-text">The request to get user location timed out</b>`
      });
      break;
    default:
      M.toast({
        html: `<b class="red-text">An unknown error occurred while fetching location</b>`
      });
      break;
  }
}

// Wrapper function to get the current position
function getCurrentPosition() {
  return getCoordinates().then(({
    long,
    lat
  }) => {
    console.log(`Longitude: ${long}, Latitude: ${lat}`);
    return {
      long,
      lat
    };
  }).catch(error => {
    console.error("Error getting coordinates:", error);
    return {
      long: 0,
      lat: 0
    }; // Fallback to default values
  });
}

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect_vue_vue_type_style_index_0_id_172a9751_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect_vue_vue_type_style_index_0_id_172a9751_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect_vue_vue_type_style_index_0_id_172a9751_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect_vue_vue_type_style_index_0_id_172a9751_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_CustomSelect_vue_vue_type_style_index_0_id_172a9751_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".custom-select[data-v-172a9751]{height:47px;line-height:47px;outline:none;position:relative;text-align:left;width:100%}.custom-select .selected[data-v-172a9751]{background-color:#f44336;border:1px solid #f44336;border-radius:6px;color:#fff;cursor:pointer;padding-left:1em;-webkit-user-select:none;-moz-user-select:none;user-select:none}.custom-select .selected.open[data-v-172a9751]{border:1px solid #ad8225;border-radius:6px 6px 0 0}.custom-select .selected[data-v-172a9751]:after{border:5px solid transparent;border-top-color:#fff;content:\"\";height:0;position:absolute;right:1em;top:22px;width:0}.custom-select .items[data-v-172a9751]{background-color:#0a0a0a;border-bottom:1px solid #ad8225;border-left:1px solid #ad8225;border-radius:0 0 6px 6px;border-right:1px solid #ad8225;color:#fff;left:0;overflow:hidden;position:absolute;right:0;z-index:1}.custom-select .items div[data-v-172a9751]{color:#fff;cursor:pointer;padding-left:1em;-webkit-user-select:none;-moz-user-select:none;user-select:none}.custom-select .items div[data-v-172a9751]:hover{background-color:#ad8225}.selectHide[data-v-172a9751]{display:none}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(39);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(browser_image_compression__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_capacitor_camera__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(41);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_modules_mods__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _components_CustomSelect_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
//   import { Geolocation } from '@capacitor/geolocation';





/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'admin_main',
  components: {
    CustomSelect: _components_CustomSelect_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data() {
    return {
      disabled_bool: false,
      service_type: null,
      account_number: '',
      meter_number: '',
      account_name: '',
      account_status: '',
      tarrif: '',
      address: '',
      business_unit: '',
      undertaking_one: '',
      dt_name: '',
      phone_number: '',
      location: '',
      meter_type: '',
      old_dial: '',
      new_dial: '',
      pic_of_frontview: '',
      dtNumber: '',
      pic_of_the_service_wire_from_pole_to_metering_point: '',
      pic_of_building: null,
      pic_of_installation_cutout_metering_point: null,
      pic_of_installation_cutout_metering_point2: '',
      pic_of_installation_cutout_metering_point3: '',
      pic_of_meter_nameplate: '',
      pic_of_meter_nameplate2: '',
      pic_of_meter_nameplate3: '',
      pic_of_seal_as_met: '',
      pic_of_internal_connection_if_seal_is_broken: '',
      pic_of_internal_connection_if_seal_is_broken2: '',
      pic_of_bypass: '',
      pic_of_bypass2: '',
      pic_of_bypass3: '',
      pic_of_last_bill_vending_receipt: '',
      pic_of_last_bill_vending_receipt2: '',
      pic_of_last_bill_vending_receipt3: '',
      pic_of_invitation_notice_to_customer: '',
      remarks: '',
      // remember to clean variables
      customer_name: '',
      customer_category: '',
      customer_type: '',
      nature_of_business: '',
      feeder_name: '',
      dt_capacity: '',
      alignment_status: '',
      current_tariff: '',
      recommended_tariff: '',
      meter_status: '',
      meter_serial_number: '',
      replacement_meter_serial_number: '',
      /*here*/
      meter_manufacturer: '',
      meter_type_by_manufacturer: '',
      meter_payment_type: '',
      meter_type: '',
      meter_type_box: '',
      tube: false,
      mcb: '',
      meter_condition: '',
      no_of_service_wires: '',
      last_purchase_date: '',
      last_purchase_amount: '',
      credit_reading_on_meter: '',
      seal_status: '',
      old_seal: '',
      new_seal: '',
      inspection_conclusion: '',
      recommendation: '',
      further_remarks: '',
      signature: '',
      lat: '',
      long: '',
      dataURL: '',
      hideLoader: true,
      showSignature: false,
      hideModal: true,
      hideForm: false,
      img: "",
      scale: 100,
      quality: 50,
      originalSize: true,
      original: {},
      dataURI: ''
    };
  },
  methods: {
    async checkNumber() {
      if (this.service_type == 'prepaid') {
        // await checkCustomerMeterNumber(this.meter_number)
        console.log('make postpaid call');
        try {
          const response = await Object(_js_modules_mods__WEBPACK_IMPORTED_MODULE_3__[/* checkCustomerMeterNumber */ "b"])(this.meter_number);

          // console.log(response)

          // console.log(response.accountNumber)
          console.log('this is response from mods ', response);
          let users_meter_number = response.meterNumber;
          if (users_meter_number == '') {
            M.toast({
              html: `<b class="red-text">Please check meter number agian</b>`
            });
          } else {
            this.account_number = response.accountNumber;
            let users_account_number = response.accountNumber;
            users_account_number = users_account_number.trim();
            this.getCustomerInfo(users_account_number);
          }
        } catch (error) {
          console.log(error);
          console.log(this.service_type);
          M.toast({
            html: `<b class="red-text">${error}</b>`
          });
        }
      } else if (this.service_type == 'postpaid') {
        this.getCustomerInfo(this.account_number);
      }
    },
    async getCustomerInfo(accountNumber) {
      try {
        let response = await Object(_js_modules_mods__WEBPACK_IMPORTED_MODULE_3__[/* getCustomerInfoApi */ "f"])(accountNumber);
        console.log(response);
        this.printCurrentPosition();

        // this.account_type = response.accountType
        this.account_name = response.accountName;
        this.tarrif = response.tariff;
        this.account_status = response.accountStatus;
        this.address = response.address;
        this.business_unit = response.bu;
        this.undertaking_one = response.ut;
        this.dt_name = response.dtName;
        this.phone_number = response.mobileNumber;
        this.dtNumber = response.dtNo;

        // if (users_meter_number == '') {
        //     M.toast({html: `<b class="red-text">Please check account number agian</b>`})
        // } else {
        //     let users_account_number = response.accountNumber
        //     users_account_number = users_account_number.trim()
        // }
      } catch (error) {
        console.log(error);
        console.log(this.service_type);
        M.toast({
          html: `<b class="red-text">${error}</b>`
        });
      }
    },
    trySign() {
      (function () {
        window.requestAnimFrame = function (callback) {
          return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimaitonFrame || function (callback) {
            window.setTimeout(callback, 1000 / 60);
          };
        }();
        var canvas = document.getElementById("sig-canvas");
        var ctx = canvas.getContext("2d");
        ctx.strokeStyle = "#222222";
        ctx.lineWidth = 4;
        var drawing = false;
        var mousePos = {
          x: 0,
          y: 0
        };
        var lastPos = mousePos;
        canvas.addEventListener("mousedown", function (e) {
          drawing = true;
          lastPos = getMousePos(canvas, e);
        }, false);
        canvas.addEventListener("mouseup", function (e) {
          drawing = false;
        }, false);
        canvas.addEventListener("mousemove", function (e) {
          mousePos = getMousePos(canvas, e);
        }, false);

        // Add touch event support for mobile
        canvas.addEventListener("touchstart", function (e) {}, false);
        canvas.addEventListener("touchmove", function (e) {
          var touch = e.touches[0];
          var me = new MouseEvent("mousemove", {
            clientX: touch.clientX,
            clientY: touch.clientY
          });
          canvas.dispatchEvent(me);
        }, false);
        canvas.addEventListener("touchstart", function (e) {
          mousePos = getTouchPos(canvas, e);
          var touch = e.touches[0];
          var me = new MouseEvent("mousedown", {
            clientX: touch.clientX,
            clientY: touch.clientY
          });
          canvas.dispatchEvent(me);
        }, false);
        canvas.addEventListener("touchend", function (e) {
          var me = new MouseEvent("mouseup", {});
          canvas.dispatchEvent(me);
        }, false);
        function getMousePos(canvasDom, mouseEvent) {
          var rect = canvasDom.getBoundingClientRect();
          return {
            x: mouseEvent.clientX - rect.left,
            y: mouseEvent.clientY - rect.top
          };
        }
        function getTouchPos(canvasDom, touchEvent) {
          var rect = canvasDom.getBoundingClientRect();
          return {
            x: touchEvent.touches[0].clientX - rect.left,
            y: touchEvent.touches[0].clientY - rect.top
          };
        }
        function renderCanvas() {
          if (drawing) {
            ctx.moveTo(lastPos.x, lastPos.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
            lastPos = mousePos;
          }
        }

        // Prevent scrolling when touching the canvas
        document.body.addEventListener("touchstart", function (e) {
          if (e.target == canvas) {
            e.preventDefault();
          }
        }, false);
        document.body.addEventListener("touchend", function (e) {
          if (e.target == canvas) {
            e.preventDefault();
          }
        }, false);
        document.body.addEventListener("touchmove", function (e) {
          if (e.target == canvas) {
            e.preventDefault();
          }
        }, false);
        (function drawLoop() {
          requestAnimFrame(drawLoop);
          renderCanvas();
        })();
        function clearCanvas() {
          canvas.width = canvas.width;
        }

        // Set up the UI
        var sigText = document.getElementById("sig-dataUrl");
        var sigImage = document.getElementById("sig-image");
        var clearBtn = document.getElementById("sig-clearBtn");
        var submitBtn = document.getElementById("sig-submitBtn");
        clearBtn.addEventListener("click", function (e) {
          clearCanvas();
          sigText.innerHTML = "Data URL for your signature will go here!";
          sigImage.setAttribute("src", "");
        }, false);
        submitBtn.addEventListener("click", function (e) {
          var dataUrl = canvas.toDataURL();
          localStorage['vsmSignatureURL'] = dataUrl;
          sigText.innerHTML = dataUrl;
          sigImage.setAttribute("src", dataUrl);
          M.toast({
            html: '<b class="yellow-text">Signature saved</b>'
          });
        }, false);
      })();
    },
    getDataURLFromLocalStorage() {
      this.dataURI = localStorage.getItem('vsmSignatureURL');
      if (this.dataURI == null) {
        this.dataURI == '';
      } else {
        var byteString;
        if (this.dataURI.split(',')[0].indexOf('base64') >= 0) byteString = window.atob(this.dataURI.split(',')[1]);else byteString = decodeURI(dataURI.split(',')[1]);
        // separate out the mime component
        var mimeString = this.dataURI.split(',')[0].split(':')[1].split(';')[0];
        // write the bytes of the string to a typed array
        var ia = new Uint8Array(byteString.length);
        for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
        }
        var file = new Blob([ia], {
          type: mimeString
        });
        this.signature = new File([file], `ieOfficerSignature${file.type.replace('image/', '.')}`);
      }
    },
    generateRandomString() {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      for (let i = 0; i < 10; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
    async imagePickerForFVSNOD() {
      this.meter_number = this.meter_number.trim();
      this.account_number = this.account_number.trim();
      if (this.meter_number == '' && this.account_number == '') {
        M.toast({
          html: `<b class="red-text">Please enter an Account OR Meter Number</b>`
        });
      } else {
        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
        });
        const rawData = window.atob(image.base64String);
        const bytes = new Array(rawData.length);
        for (var x = 0; x < rawData.length; x++) {
          bytes[x] = rawData.charCodeAt(x);
        }
        const arr = new Uint8Array(bytes);
        const blob = new Blob([arr], {
          type: 'image/jpeg'
        });
        console.log(blob);
        this.doSomethingWithFilesimagePickerForFVSNOD(blob);
      }
    },
    async doSomethingWithFilesimagePickerForFVSNOD(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      // const imageFile = event.target.files[0];

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-the-FVSNOD');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.pic_of_frontview = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.pic_of_frontview);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods__WEBPACK_IMPORTED_MODULE_3__[/* uploadImage */ "u"])(this.userId, this.account_number, 'CorrectionOfDials_FrontView', this.pic_of_frontview);
        console.log(xx);
      } catch (error) {
        // // console.log(error);
      }
    },
    // all test on compression comes here

    async imagePickerForTheServiceWireFromPoleToMeteringPoint() {
      // Call the element loader after the app has been rendered the first time
      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_2__["defineCustomElements"])(window);
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/jpeg'
      });
      console.log(blob);
      this.doSomethingWithFilesImagePickerForTheServiceWireFromPoleToMeteringPoint(blob);
    },
    async doSomethingWithFilesImagePickerForTheServiceWireFromPoleToMeteringPoint(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-the-service-wire-from-pole-to-metering-point');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.pic_of_the_service_wire_from_pole_to_metering_point = new File([compressedFile], `pictureOfTheServiceWireFromPole${compressedFile.type.replace('image/', '.')}`);
        console.log(this.pic_of_the_service_wire_from_pole_to_metering_point);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    // image picker for building
    async imagePickerBuilding() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      console.log(blob);
      const file = blob;
      this.doSomethingWithFilesImagePickerBuilding(blob);
    },
    async doSomethingWithFilesImagePickerBuilding(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-building');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB
        console.log(compressedFile);

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_building = new File([compressedFile], `pictureOfTheBuilding${compressedFile.type.replace('image/', '.')}`);
        console.log(this.pic_of_building);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // image picker for installation cut out metering point one
    async imagePickerForInstallationCutOutMeteringPointOne() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      console.log(blob);
      this.doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne(blob);
    },
    async doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-installation-cut-out-metering-point-one');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_installation_cutout_metering_point = new File([compressedFile], `pictureOfInstallation${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // image picker for installation cut out metering point one
    async imagePickerForInstallationCutOutMeteringPointOne2() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      console.log(blob);
      this.doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne2(blob);
    },
    async doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne2(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-installation-cut-out-metering-point-one2');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_installation_cutout_metering_point2 = new File([compressedFile], `pictureOfInstallation2${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // image picker for installation cut out metering point one3
    async imagePickerForInstallationCutOutMeteringPointOne3() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      console.log(blob);
      this.doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne3(blob);
    },
    async doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne3(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-installation-cut-out-metering-point-one3');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_installation_cutout_metering_point3 = new File([compressedFile], `pictureOfInstallation3${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // pic of meter nameplate one
    async imagePickerForMeteringNameplateOne() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // // console.log(blob)

      this.doSomethingWithFilesImagePickerForMeteringNameplateOne(blob);
    },
    async doSomethingWithFilesImagePickerForMeteringNameplateOne(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-meter-nameplate-one');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_meter_nameplate = new File([compressedFile], `meterNameplate${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // pic of meter nameplate one 2
    async imagePickerForMeteringNameplateOne2() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // // console.log(blob)

      this.doSomethingWithFilesImagePickerForMeteringNameplateOne2(blob);
    },
    async doSomethingWithFilesImagePickerForMeteringNameplateOne2(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-meter-nameplate-one2');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_meter_nameplate2 = new File([compressedFile], `meterNameplate2${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // pic of meter nameplate one 3
    async imagePickerForMeteringNameplateOne3() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // // console.log(blob)

      this.doSomethingWithFilesImagePickerForMeteringNameplateOne3(blob);
    },
    async doSomethingWithFilesImagePickerForMeteringNameplateOne3(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-meter-nameplate-one3');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_meter_nameplate3 = new File([compressedFile], `meterNameplate3${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // pic of seal as met
    async imagePickerForSealAsMet() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // // console.log(blob)

      this.doSomethingWithFilesImagePickerForSealAsMet(blob);
    },
    async doSomethingWithFilesImagePickerForSealAsMet(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-seal-as-met');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_seal_as_met = new File([compressedFile], `pictureOfSealAsMet${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // // console.log(error);
      }
    },
    // pic of internal connection if seal is broken
    async imagePickerForInternalConnectionIfSealIsBroken() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // // console.log(blob)

      this.doSomethingWithFilesImagePickerForInternalConnectionIfSealIsBroken(blob);
    },
    async doSomethingWithFilesImagePickerForInternalConnectionIfSealIsBroken(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-internal-connection-if-seal-is-broken');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_internal_connection_if_seal_is_broken = new File([compressedFile], `pictureOfInternalConnection${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of internal connection if seal is broken
    async imagePickerForInternalConnectionIfSealIsBroken2() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // // console.log(blob)

      this.doSomethingWithFilesImagePickerForInternalConnectionIfSealIsBroken2(blob);
    },
    async doSomethingWithFilesImagePickerForInternalConnectionIfSealIsBroken2(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-internal-connection-if-seal-is-broken2');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_internal_connection_if_seal_is_broken2 = new File([compressedFile], `pictureOfInternalConnection2${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of bypass
    async imagePickerForByPass() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)

      this.doSomethingWithFilesImagePickerForByPass(blob);
    },
    async doSomethingWithFilesImagePickerForByPass(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-bypass');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_bypass = new File([compressedFile], `pictureOfBypass${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of bypass2
    async imagePickerForByPass2() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)
      this.doSomethingWithFilesImagePickerForByPass2(blob);
    },
    async doSomethingWithFilesImagePickerForByPass2(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-bypass2');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_bypass2 = new File([compressedFile], `pictureOfBypass2${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of bypass3
    async imagePickerForByPass3() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)
      this.doSomethingWithFilesImagePickerForByPass3(blob);
    },
    async doSomethingWithFilesImagePickerForByPass3(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-bypass3');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_bypass3 = new File([compressedFile], `pictureOfBypass3${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of last bill vending receipt
    async imagePickerForLastBillVendingReceipt() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)
      this.doSomethingWithFilesImagePickerForLastBillVendingReceipt(blob);
    },
    async doSomethingWithFilesImagePickerForLastBillVendingReceipt(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-last-billing-vending-receipt');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_last_bill_vending_receipt = new File([compressedFile], `lastBillReceipt${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error); 
      }
    },
    // pic of last bill vending receipt2
    async imagePickerForLastBillVendingReceipt2() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)
      this.doSomethingWithFilesImagePickerForLastBillVendingReceipt2(blob);
    },
    async doSomethingWithFilesImagePickerForLastBillVendingReceipt2(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-last-billing-vending-receipt2');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_last_bill_vending_receipt2 = new File([compressedFile], `lastBillReceipt2${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of last bill vending receipt3
    async imagePickerForLastBillVendingReceipt3() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)
      this.doSomethingWithFilesImagePickerForLastBillVendingReceipt3(blob);
    },
    async doSomethingWithFilesImagePickerForLastBillVendingReceipt3(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-last-billing-vending-receipt3');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_last_bill_vending_receipt3 = new File([compressedFile], `lastBillReceipt3${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        // // console.log(this.pic_of_premises)
      } catch (error) {
        // console.log(error);
      }
    },
    // pic of invitation notice to customer
    async imagePickerForInvitationNoticeToCustomer() {
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"].Base64
      });
      const rawData = window.atob(image.base64String);
      const bytes = new Array(rawData.length);
      for (var x = 0; x < rawData.length; x++) {
        bytes[x] = rawData.charCodeAt(x);
      }
      const arr = new Uint8Array(bytes);
      const blob = new Blob([arr], {
        type: 'image/png'
      });
      // console.log(blob)
      this.doSomethingWithFilesImagePickerForInvitationNoticeToCustomer(blob);
    },
    async doSomethingWithFilesImagePickerForInvitationNoticeToCustomer(event) {
      const imageFile = event;
      // const imageFile = event.target.files[0];
      // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
      // console.log(`originalFile size ${imageFile.size} MB`);

      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-invitation-notice-customer');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_0___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // await uploadToServer(compressedFile); // write your own logic
        this.pic_of_invitation_notice_to_customer = new File([compressedFile], `invitationNoticeToCustomer${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
        console.log(this.pic_of_invitation_notice_to_customer);
      } catch (error) {
        // console.log(error);
      }
    },
    async submit() {
      M.toast({
        html: '<b class="yellow-text">Please wait...</b>'
      });
      this.hideLoader = false;
      this.business_unit = this.business_unit.trim();
      this.undertaking_one = this.undertaking_one.trim();
      this.customer_name = this.customer_name.trim();
      this.address = this.address.trim();
      this.feeder_name = this.feeder_name.trim();
      this.dt_name = this.dt_name.trim();
      this.alignment_status = this.alignment_status.trim();
      this.recommended_tariff = this.recommended_tariff.trim();
      this.meter_type_by_manufacturer = this.meter_type_by_manufacturer.trim();
      this.credit_reading_on_meter = this.credit_reading_on_meter.trim();
      this.further_remarks = this.further_remarks.trim();
      this.phone_number = this.phone_number.trim();
      this.inspection_conclusion = this.inspection_conclusion.trim();
      this.getDataURLFromLocalStorage();
      var today = new Date(this.last_purchase_date);
      const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
      let month = months[today.getMonth()];
      var date = month + ' ' + today.getDate() + ', ' + today.getFullYear();
      var time = this.formatAMPM(new Date());
      this.last_purchase_date = date + ' ' + time;
      if (this.business_unit == '') {
        M.toast({
          html: '<b class="red-text">Fill all the field marked with *</b>'
        });
        this.hideLoader = true;
      } else {
        try {
          this.disabled_bool = true;
          const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/crmd/correctionOfDials', {
            // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/crmd/correctionOfDials', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + localStorage.token,
              'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6'
            },
            body: JSON.stringify({
              serviceType: this.service_type,
              accountNo: this.account_number,
              meterNo: this.meter_number,
              accountType: this.account_type,
              accountName: this.account_name,
              accountStatus: this.account_status,
              tariff: this.tarrif,
              address: this.address,
              bu: this.business_unit,
              ut: this.undertaking_one,
              dt: this.dt_name,
              dtNo: this.dtNumber,
              phoneNo: this.phone_number,
              location: this.location,
              meterType: this.meter_type,
              oldDial: this.old_dial,
              newDial: this.new_dial,
              remarks: this.remarks,
              picMeterFrontView: this.pic_of_frontview.name
            })
          });
          const response = await rawResponse.json();
          console.log(response);
          if (response.code == '00') {
            this.hideLoader = true;
            this.$router.push('./sent');
          } else {
            M.toast({
              html: `<b class="green-text">${response.message}</b>`
            });
            this.disabled_bool = false;
          }
        } catch (error) {
          console.log(error);
          M.toast({
            html: `<b class="red-text">${error}</b>`
          });
          this.disabled_bool = false;
        }
      }
    },
    formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      var ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? '0' + minutes : minutes;
      var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
      return strTime;
    },
    // addOldSeal() {
    //     this.old_seal.push({
    //         oldSealValue: ''
    //     })
    // },

    // removeOldSeal(index) {
    //     this.old_seal.splice(index, 1)
    // },

    // clearOldSeal() {
    //     this.old_seal = [
    //         {
    //             oldSealValue: ''
    //         }
    // ]
    // },

    // addNewSeal() {
    //     this.new_seal.push({
    //         newSealValue: ''
    //     })
    // },

    // removeNewSeal(index) {
    //     this.new_seal.splice(index, 1)
    // },

    // clearNewSeal() {
    //     this.new_seal = [
    //         {
    //             newSealValue: ''
    //         }
    //     ]
    // },

    // get longitude and latitude
    async printCurrentPosition() {
      const {
        long,
        lat
      } = await Object(_js_modules_mods__WEBPACK_IMPORTED_MODULE_3__[/* getCurrentPosition */ "e"])();
      this.long = long;
      this.lat = lat;
      this.location = `${this.long}, ${this.lat}`;
    },
    // let me try to create a new signature
    showSignatureModule() {
      this.hideModal = false;
      this.hideForm = true;
    },
    hideSignatureModule() {
      this.hideModal = true;
      this.hideForm = false;
    }
  },
  mounted() {
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('.modal');
      var instances = M.Modal.init(elems, options);
    });
    document.addEventListener('DOMContentLoaded', function () {
      var elems = document.querySelectorAll('select');
      var instances = M.FormSelect.init(elems);
    });
    this.trySign();
    this.userId = localStorage.getItem('userId');
  },
  created() {}
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)["URL"]))

/***/ })

};;
//# sourceMappingURL=correction_of_dials.js.map