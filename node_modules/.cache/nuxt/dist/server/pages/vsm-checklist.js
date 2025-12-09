exports.ids = [50,5];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(164);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("7d6ed1cd", content, true, context)
};

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsm_checklist_vue_vue_type_style_index_0_id_4bdc4e54_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsm_checklist_vue_vue_type_style_index_0_id_4bdc4e54_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsm_checklist_vue_vue_type_style_index_0_id_4bdc4e54_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsm_checklist_vue_vue_type_style_index_0_id_4bdc4e54_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_vsm_checklist_vue_vue_type_style_index_0_id_4bdc4e54_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#sig-canvas[data-v-4bdc4e54]{border:2px dotted #ccc;border-radius:15px;cursor:crosshair}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/vsm-checklist.vue?vue&type=template&id=4bdc4e54&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_c('nuxt-link', {
    staticClass: "red white-text btn",
    attrs: {
      "to": "./forms"
    }
  }, [_vm._v("\n            Back\n        ")])], 1), _vm._ssrNode(" <div class=\"row\" data-v-4bdc4e54><div data-v-4bdc4e54><h6 class=\"red-text center\" style=\"font-weight: 100\" data-v-4bdc4e54>\n            VSM CHECKLIST\n        </h6></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><div" + _vm._ssrClass("row", {
    'hide': _vm.hideModal
  }) + " data-v-4bdc4e54><div class=\"row\" data-v-4bdc4e54><a href=\"#!\" class=\"waves-effect waves-red btn-large white red-text right\" data-v-4bdc4e54>DONE</a></div> <div class=\"row\" data-v-4bdc4e54><div class=\"container\" data-v-4bdc4e54><div class=\"row\" data-v-4bdc4e54><div class=\"col s12 center\" data-v-4bdc4e54><h6 data-v-4bdc4e54>Sign here!</h6></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12 center\" data-v-4bdc4e54><canvas id=\"sig-canvas\" width=\"250px\" data-v-4bdc4e54>\n                                    Your phone not supporting signature\n                                </canvas></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12 center\" data-v-4bdc4e54><div class=\"col s6\" data-v-4bdc4e54><button id=\"sig-submitBtn\" class=\"btn btn-large red\" data-v-4bdc4e54>Save</button></div> <div class=\"col s6\" data-v-4bdc4e54><button id=\"sig-clearBtn\" class=\"btn btn-large red\" data-v-4bdc4e54>Clear</button></div></div></div> <br data-v-4bdc4e54> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><textarea id=\"sig-dataUrl\" rows=\"5\" class=\"form-control hide\" data-v-4bdc4e54>Data URL for your signature will go here!</textarea></div></div></div></div></div></div></div> "), _vm._ssrNode("<div" + _vm._ssrClass("row", {
    'hide': _vm.hideForm
  }) + " data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<form style=\"margin-top: 20px\" data-v-4bdc4e54>", "</form>", [_vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.business_unit,
      expression: "business_unit"
    }],
    staticClass: "custom-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.business_unit = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Business Unit *")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Abule Egba"
    }
  }, [_vm._v("Abule Egba")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Akowonjo"
    }
  }, [_vm._v("Akowonjo")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Ikeja"
    }
  }, [_vm._v("Ikeja")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Ikorodu"
    }
  }, [_vm._v("Ikorodu")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Oshodi"
    }
  }, [_vm._v("Oshodi")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Shomolu"
    }
  }, [_vm._v("Shomolu")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.undertaking_one,
      expression: "undertaking_one"
    }],
    staticClass: "custom-select",
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.undertaking_one = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Undertaking *")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ABORU"
    }
  }, [_vm._v("ABORU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ABULE-ODU"
    }
  }, [_vm._v("ABULE-ODU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ABULE-TAYLOR"
    }
  }, [_vm._v("ABULE-TAYLOR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ADIYAN"
    }
  }, [_vm._v("ADIYAN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AGO"
    }
  }, [_vm._v("AGO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AIT"
    }
  }, [_vm._v("AIT")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AJAO"
    }
  }, [_vm._v("AJAO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AKUTE"
    }
  }, [_vm._v("AKUTE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AMUWO"
    }
  }, [_vm._v("AMUWO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ANIFOWOSHE"
    }
  }, [_vm._v("ANIFOWOSHE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ANTHONY MEGA"
    }
  }, [_vm._v("ANTHONY MEGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AYANGBUREN"
    }
  }, [_vm._v("AYANGBUREN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AYOBO"
    }
  }, [_vm._v("AYOBO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BARIGA"
    }
  }, [_vm._v("BARIGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DOPEMU"
    }
  }, [_vm._v("DOPEMU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EGBEDA"
    }
  }, [_vm._v("EGBEDA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EPE"
    }
  }, [_vm._v("EPE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "FAGBA"
    }
  }, [_vm._v("FAGBA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "GOWON-ESTATE"
    }
  }, [_vm._v("GOWON-ESTATE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IDIMU"
    }
  }, [_vm._v("IDIMU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IFAKO"
    }
  }, [_vm._v("IFAKO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IGANDO"
    }
  }, [_vm._v("IGANDO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IGBOBI"
    }
  }, [_vm._v("IGBOBI")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IGBOBI MEGA"
    }
  }, [_vm._v("IGBOBI MEGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IGBOGBO"
    }
  }, [_vm._v("IGBOGBO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IJAIYE"
    }
  }, [_vm._v("IJAIYE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IJEDE"
    }
  }, [_vm._v("IJEDE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IJEGUN"
    }
  }, [_vm._v("IJEGUN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IJU"
    }
  }, [_vm._v("IJU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IKOSI"
    }
  }, [_vm._v("IKOSI")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IKOTUN"
    }
  }, [_vm._v("IKOTUN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ILUPEJU"
    }
  }, [_vm._v("ILUPEJU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ILUPEJU MEGA"
    }
  }, [_vm._v("ILUPEJU MEGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "IPAJA"
    }
  }, [_vm._v("IPAJA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ISOLO"
    }
  }, [_vm._v("ISOLO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "KETU"
    }
  }, [_vm._v("KETU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LAMBE"
    }
  }, [_vm._v("LAMBE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LASUNWON"
    }
  }, [_vm._v("LASUNWON")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MAGODO"
    }
  }, [_vm._v("MAGODO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MAGODO MEGA"
    }
  }, [_vm._v("MAGODO MEGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MENDE"
    }
  }, [_vm._v("MENDE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OBA AKRAN"
    }
  }, [_vm._v("OBA AKRAN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ODOGUNYAN"
    }
  }, [_vm._v("ODOGUNYAN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OGBA"
    }
  }, [_vm._v("OGBA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OGUDU"
    }
  }, [_vm._v("OGUDU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OJODU"
    }
  }, [_vm._v("OJODU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OKE-AFA"
    }
  }, [_vm._v("OKE-AFA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OKE-IRA"
    }
  }, [_vm._v("OKE-IRA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OKE-ODO"
    }
  }, [_vm._v("OKE-ODO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OKOTA"
    }
  }, [_vm._v("OKOTA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OLATEJU"
    }
  }, [_vm._v("OLATEJU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OLOWORA"
    }
  }, [_vm._v("OLOWORA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OREGUN"
    }
  }, [_vm._v("OREGUN")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ORILE-AGEGE"
    }
  }, [_vm._v("ORILE-AGEGE")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OSHODI"
    }
  }, [_vm._v("OSHODI")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OWORO"
    }
  }, [_vm._v("OWORO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OWOROSHONKI MEGA"
    }
  }, [_vm._v("OWOROSHONKI MEGA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OWUTU"
    }
  }, [_vm._v("OWUTU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PTC"
    }
  }, [_vm._v("PTC")])])])]), _vm._ssrNode(" <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Customer name\"" + _vm._ssrAttr("value", _vm.customer_name) + " data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Address\"" + _vm._ssrAttr("value", _vm.address) + " data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Account number\"" + _vm._ssrAttr("value", _vm.account_number) + " data-v-4bdc4e54></div></div> <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.customer_category,
      expression: "customer_category"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.customer_category = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Customer Category")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Prepaid"
    }
  }, [_vm._v("Prepaid")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Postpaid"
    }
  }, [_vm._v("Postpaid")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Freerider"
    }
  }, [_vm._v("Freerider")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.customer_type,
      expression: "customer_type"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.customer_type = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Customer Type")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Commercial"
    }
  }, [_vm._v("Commercial")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Industrial"
    }
  }, [_vm._v("Industrial")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Residential"
    }
  }, [_vm._v("Residential")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Others"
    }
  }, [_vm._v("Others")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Nature of business\"" + _vm._ssrAttr("value", _vm.nature_of_business) + " data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Feeder name\"" + _vm._ssrAttr("value", _vm.feeder_name) + " data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"DT name\"" + _vm._ssrAttr("value", _vm.dt_name) + " data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"DT capacity (KVA)\"" + _vm._ssrAttr("value", _vm.dt_capacity) + " data-v-4bdc4e54></div></div> <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.alignment_status,
      expression: "alignment_status"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.alignment_status = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Alignment status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Correct"
    }
  }, [_vm._v("Correct")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Wrong"
    }
  }, [_vm._v("Wrong")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.current_tariff,
      expression: "current_tariff"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.current_tariff = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Current tariff")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A1SP"
    }
  }, [_vm._v("A1SP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A1TP"
    }
  }, [_vm._v("A1TP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A2"
    }
  }, [_vm._v("A2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "C1SP"
    }
  }, [_vm._v("C1SP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "C1TP"
    }
  }, [_vm._v("C1TP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "C2"
    }
  }, [_vm._v("C2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "R1"
    }
  }, [_vm._v("R1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "R2SP"
    }
  }, [_vm._v("R2SP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "R2TP"
    }
  }, [_vm._v("R2TP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "R3"
    }
  }, [_vm._v("R3")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "R4"
    }
  }, [_vm._v("R4")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "D1"
    }
  }, [_vm._v("D1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "D2"
    }
  }, [_vm._v("D2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "N/A"
    }
  }, [_vm._v("N/A")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "P47"
    }
  }, [_vm._v("P47")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "P50"
    }
  }, [_vm._v("P50")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.recommended_tariff,
      expression: "recommended_tariff"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.recommended_tariff = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Recommended tariff *")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A-Bilateral"
    }
  }, [_vm._v("A-Bilateral")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A-MD1"
    }
  }, [_vm._v("A-MD1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A-MD2"
    }
  }, [_vm._v("A-MD2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A-Non-MD"
    }
  }, [_vm._v("A-Non-MD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "B-MD1"
    }
  }, [_vm._v("B-MD1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "B-MD2"
    }
  }, [_vm._v("B-MD2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "B-Non-MD"
    }
  }, [_vm._v("B-Non-MD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "C-MD1"
    }
  }, [_vm._v("C-MD1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "C-MD2"
    }
  }, [_vm._v("C-MD2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "C-Non-MD"
    }
  }, [_vm._v("C-Non-MD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "D-MD1"
    }
  }, [_vm._v("D-MD1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "D-MD2"
    }
  }, [_vm._v("D-MD2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "D-Non-MD"
    }
  }, [_vm._v("D-Non-MD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "E-MD1"
    }
  }, [_vm._v("E-MD1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "E-MD2"
    }
  }, [_vm._v("E-MD2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "E-Non-MD"
    }
  }, [_vm._v("E-Non-MD")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.meter_status,
      expression: "meter_status"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.meter_status = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Metering status ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Metered"
    }
  }, [_vm._v("Metered")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Not metered"
    }
  }, [_vm._v("Not metered")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Meter serial number\"" + _vm._ssrAttr("value", _vm.meter_serial_number) + " data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Replacement meter serial number\"" + _vm._ssrAttr("value", _vm.replacement_meter_serial_number) + " data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Meter Manufacturer\"" + _vm._ssrAttr("value", _vm.meter_manufacturer) + " data-v-4bdc4e54></div></div> <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.meter_type_by_manufacturer,
      expression: "meter_type_by_manufacturer"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.meter_type_by_manufacturer = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Meter Manufacturer")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Analog Meter (R)"
    }
  }, [_vm._v("Analog Meter (R)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Clou"
    }
  }, [_vm._v("Clou")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Clou (Whole Current)"
    }
  }, [_vm._v("Clou (Whole Current)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Conlog"
    }
  }, [_vm._v("Conlog")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EDMI"
    }
  }, [_vm._v("EDMI")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Erasco"
    }
  }, [_vm._v("Erasco")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Henan Star Hi-Tech Co., Ltd."
    }
  }, [_vm._v("Henan Star Hi-Tech Co., Ltd.")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Hexcell"
    }
  }, [_vm._v("Hexcell")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Holley"
    }
  }, [_vm._v("Holley")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Mojec"
    }
  }, [_vm._v("Mojec")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Mojec (Whole Current)"
    }
  }, [_vm._v("Mojec (Whole Current)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Momas"
    }
  }, [_vm._v("Momas")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Others"
    }
  }, [_vm._v("Others")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Postpaid Bill (C, E)"
    }
  }, [_vm._v("Postpaid Bill (C, E)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Unistar"
    }
  }, [_vm._v("Unistar")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Ziklagsis"
    }
  }, [_vm._v("Ziklagsis")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.meter_payment_type,
      expression: "meter_payment_type"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.meter_payment_type = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Meter payment type")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "AMI STS (Token)"
    }
  }, [_vm._v("AMI STS (Token)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Analogue (Postpaid)"
    }
  }, [_vm._v("Analogue (Postpaid)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Non-AMI STS (Token)"
    }
  }, [_vm._v("Non-AMI STS (Token)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Others"
    }
  }, [_vm._v("Others")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Smartcard"
    }
  }, [_vm._v("Smartcard")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Whole current (Postpaid)"
    }
  }, [_vm._v("Whole current (Postpaid)")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.meter_type,
      expression: "meter_type"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.meter_type = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Meter type")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1ph"
    }
  }, [_vm._v("1ph")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3ph"
    }
  }, [_vm._v("3ph")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.meter_type_box,
      expression: "meter_type_box"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.meter_type_box = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Meter type box")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "6-in-one"
    }
  }, [_vm._v("6-in-one")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1-in-1"
    }
  }, [_vm._v("1-in-1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NA"
    }
  }, [_vm._v("NA")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Tube\n                        </h6> <div class=\"switch\" data-v-4bdc4e54><label data-v-4bdc4e54>\n                            Off\n                            <input type=\"checkbox\"" + _vm._ssrAttr("checked", Array.isArray(_vm.tube) ? _vm._i(_vm.tube, null) > -1 : _vm.tube) + " data-v-4bdc4e54> <span class=\"lever\" data-v-4bdc4e54></span>\n                            On\n                            </label></div></div></div> <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.mcb,
      expression: "mcb"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.mcb = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("MCB")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Bad"
    }
  }, [_vm._v("Bad")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Good"
    }
  }, [_vm._v("Good")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NA"
    }
  }, [_vm._v("NA")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.meter_condition,
      expression: "meter_condition"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.meter_condition = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Meter condition")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Functional"
    }
  }, [_vm._v("Functional")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Faulty"
    }
  }, [_vm._v("Faulty")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Burnt"
    }
  }, [_vm._v("Burnt")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Not sighted"
    }
  }, [_vm._v("Not sighted")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Negative reading"
    }
  }, [_vm._v("Negative reading")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Abondoned"
    }
  }, [_vm._v("Abondoned")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.no_of_service_wires,
      expression: "no_of_service_wires"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.no_of_service_wires = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("No of service wires")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2"
    }
  }, [_vm._v("2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "3"
    }
  }, [_vm._v("3")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "4"
    }
  }, [_vm._v("4")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>Last purchase date:</h6> <input type=\"date\" id=\"startDate\"" + _vm._ssrAttr("value", _vm.last_purchase_date) + " data-v-4bdc4e54> <label for=\"startDate\" data-v-4bdc4e54>Last purchase date:</label></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Last purchase amount\"" + _vm._ssrAttr("value", _vm.last_purchase_amount) + " data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Credit/Reading on meter\"" + _vm._ssrAttr("value", _vm.credit_reading_on_meter) + " data-v-4bdc4e54></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.seal_status,
      expression: "seal_status"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.seal_status = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Seal status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Intact"
    }
  }, [_vm._v("Intact")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Tampered"
    }
  }, [_vm._v("Tampered")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NA"
    }
  }, [_vm._v("NA")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> <div class=\"row\" data-v-4bdc4e54><div class=\"col s8\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Enter old seal value\"" + _vm._ssrAttr("value", _vm.old_seal) + " data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s8\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Enter new seal value\"" + _vm._ssrAttr("value", _vm.new_seal) + " data-v-4bdc4e54></div></div> <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inspection_conclusion,
      expression: "inspection_conclusion"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.inspection_conclusion = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Inspection conclusion *")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Access denied"
    }
  }, [_vm._v("Access denied")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Broken seal"
    }
  }, [_vm._v("Broken seal")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Demolished building"
    }
  }, [_vm._v("Demolished building")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Fault meter not on pospaid acct"
    }
  }, [_vm._v("Fault meter not on pospaid acct")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Freerider"
    }
  }, [_vm._v("Freerider")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Further checks required"
    }
  }, [_vm._v("Further checks required")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Good"
    }
  }, [_vm._v("Good")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Infraction corrected"
    }
  }, [_vm._v("Infraction corrected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Meter abandoned due to huge outstanding"
    }
  }, [_vm._v("Meter abandoned due to huge outstanding")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Meter burnt not on pospaid acct"
    }
  }, [_vm._v("Meter burnt not on pospaid acct")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Meter Bypassed"
    }
  }, [_vm._v("Meter Bypassed")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Meter Bypass from installation"
    }
  }, [_vm._v("Meter Bypass from installation")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Meter dispensing free energy"
    }
  }, [_vm._v("Meter dispensing free energy")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Meter not in use"
    }
  }, [_vm._v("Meter not in use")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Meter not seen at address"
    }
  }, [_vm._v("Meter not seen at address")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Meter relocation advised"
    }
  }, [_vm._v("Meter relocation advised")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Meter tampered"
    }
  }, [_vm._v("Meter tampered")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Nagative reading"
    }
  }, [_vm._v("Nagative reading")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "No access"
    }
  }, [_vm._v("No access")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Pumping machine on direct"
    }
  }, [_vm._v("Pumping machine on direct")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Token issue"
    }
  }, [_vm._v("Token issue")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Under-billing"
    }
  }, [_vm._v("Under-billing")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Vacant apartment"
    }
  }, [_vm._v("Vacant apartment")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Vulnerable"
    }
  }, [_vm._v("Vulnerable")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-4bdc4e54>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.recommendation,
      expression: "recommendation"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.recommendation = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Recommendation")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Close monitoring"
    }
  }, [_vm._v("Close monitoring")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Disconnection"
    }
  }, [_vm._v("Disconnection")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Meter re-certification required"
    }
  }, [_vm._v("Meter re-certification required")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Meter replacement"
    }
  }, [_vm._v("Meter replacement")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "No futher action"
    }
  }, [_vm._v("No futher action")])])])]), _vm._ssrNode(" <br data-v-4bdc4e54> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Further remarks\"" + _vm._ssrAttr("value", _vm.further_remarks) + " data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><input type=\"text\" placeholder=\"Customer phone number\"" + _vm._ssrAttr("value", _vm.phone_number) + " data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>Picture of the service wire from pole metering point</h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-the-service-wire-from-pole-to-metering-point\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>Picture of building *</h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-building\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Picture of installation /Cut Out/ metering point 1 \n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-installation-cut-out-metering-point-one\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Picture of installation /Cut Out/ metering point 2 \n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-installation-cut-out-metering-point-one2\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Picture of installation /Cut Out/ metering point 3 \n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-installation-cut-out-metering-point-one3\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Picture of meter nameplate 1\n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-meter-nameplate-one\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Picture of meter nameplate 2\n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-meter-nameplate-one2\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Picture of meter nameplate 3\n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-meter-nameplate-one3\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Picture of seal as met\n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-seal-as-met\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Picture of internal connection if seal is broken\n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-internal-connection-if-seal-is-broken\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Picture of Bypass\n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-bypass\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Picture of Bypass 2\n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-bypass2\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Picture of Bypass 3\n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-bypass3\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Last bill vending receipt\n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-last-billing-vending-receipt\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Last bill vending receipt 2\n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-last-billing-vending-receipt2\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Last bill vending receipt 3\n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-last-billing-vending-receipt3\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><h6 class=\"red-text\" data-v-4bdc4e54>\n                            Invitation notice to customer\n                        </h6> <button class=\"btn red btn-large\" data-v-4bdc4e54><i class=\"material-icons white-text\" data-v-4bdc4e54>camera_alt</i></button></div></div> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"output-pic-of-invitation-notice-customer\" class=\"responsive-img\" data-v-4bdc4e54></div></div> <div class=\"row center\" data-v-4bdc4e54><a class=\"waves-effect waves-light btn white red-text center\" data-v-4bdc4e54>Click here to add signature</a></div> <div class=\"container\" data-v-4bdc4e54><br data-v-4bdc4e54> <div class=\"row\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><img id=\"sig-image\" src alt data-v-4bdc4e54></div></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-4bdc4e54>", "</div>", [_c('PreLoader', {
    staticClass: "center",
    class: {
      'hide': _vm.hideLoader
    }
  })], 1), _vm._ssrNode(" <div class=\"row center\" data-v-4bdc4e54><div class=\"col s12\" data-v-4bdc4e54><button class=\"btn btn-large red\" style=\"width: 300px; margin-top: 20px; margin-bottom: 20px;\" data-v-4bdc4e54>Submit</button></div></div>")], 2)])])], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/vsm-checklist.vue?vue&type=template&id=4bdc4e54&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/vsm-checklist.vue?vue&type=script&lang=js
var vsm_checklistvue_type_script_lang_js = __webpack_require__(71);

// CONCATENATED MODULE: ./pages/vsm-checklist.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_vsm_checklistvue_type_script_lang_js = (vsm_checklistvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/vsm-checklist.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(163)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_vsm_checklistvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4bdc4e54",
  "fb22b5e0"
  
)

/* harmony default export */ var vsm_checklist = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {PreLoader: __webpack_require__(48).default})


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PreLoader.vue?vue&type=template&id=daccfba6
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"preloader-wrapper active\"><div class=\"spinner-layer spinner-red-only\"><div class=\"circle-clipper left\"><div class=\"circle\"></div></div><div class=\"gap-patch\"><div class=\"circle\"></div></div><div class=\"circle-clipper right\"><div class=\"circle\"></div></div></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/PreLoader.vue?vue&type=template&id=daccfba6

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/PreLoader.vue?vue&type=script&lang=js
/* harmony default export */ var PreLoadervue_type_script_lang_js = ({});
// CONCATENATED MODULE: ./components/PreLoader.vue?vue&type=script&lang=js
 /* harmony default export */ var components_PreLoadervue_type_script_lang_js = (PreLoadervue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/PreLoader.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_PreLoadervue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "38035e0a"
  
)

/* harmony default export */ var PreLoader = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 71:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42);
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(39);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(browser_image_compression__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(40);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_capacitor_camera__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(41);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_3__);




/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'admin_main',
  data() {
    return {
      business_unit: '',
      undertaking_one: '',
      customer_name: '',
      address: '',
      account_number: '',
      customer_category: '',
      customer_type: '',
      nature_of_business: '',
      feeder_name: '',
      dt_name: '',
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
      signature: '',
      phone_number: '',
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
    // all test on compression comes here

    async imagePickerForTheServiceWireFromPoleToMeteringPoint() {
      // Call the element loader after the app has been rendered the first time
      Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_3__["defineCustomElements"])(window);
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
      const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
        quality: 100,
        allowEditing: false,
        resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Base64
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
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
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
    async sumbitVSM() {
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
      if (this.business_unit == '' || this.inspection_conclusion == '') {
        M.toast({
          html: '<b class="red-text">Fill all the field marked with *</b>'
        });
        this.hideLoader = true;
      } else {
        var checkList = "";
        checkList = {
          oldSealNumber: this.old_seal,
          businessUnit: this.business_unit,
          meterPaymentType: this.meter_payment_type,
          meterMake: this.meter_manufacturer,
          recommendation: this.recommendation,
          mcb: this.mcb,
          recommendedEnergyRecovery: "",
          recommendedTariff: this.recommended_tariff,
          remainingTime: "",
          customerType: this.customer_type,
          customerCategory: this.customer_category,
          dtName: this.dt_name,
          energyData: "",
          readingTime1: "",
          longitude: this.long,
          currentTariff: this.current_tariff,
          customersSignature: "",
          editEndTime: "",
          customerName: this.customer_name,
          meterBoxType: this.meter_type_box,
          meteringStatus: this.meter_status,
          tube: this.tube,
          numberOfServiceWires: this.no_of_service_wires,
          feederName: this.feeder_name,
          ieOfficersName: localStorage.getItem('fullname'),
          lastUpdateTime: "",
          meteringInitiative: '',
          customersName: this.customer_name,
          meterNumber: this.meter_serial_number,
          activity: '',
          newSealNumber: this.new_seal,
          latitude: this.lat,
          creditOnMeter: this.credit_reading_on_meter,
          simSerialNumber: "",
          readingTime: "",
          phoneNumber: this.phone_number,
          editStartTime: "",
          address: this.address,
          srNumber: this.meter_serial_number,
          meterSerialNumber: this.meter_serial_number,
          dtCapacity: this.dt_capacity,
          accountNumber: this.account_number,
          furtherRemarks: this.further_remarks,
          undertaking: this.undertaking_one,
          meterManufacturer: this.meter_manufacturer,
          meterType: this.meter_type,
          serviceWireToMeter: this.no_of_service_wires,
          inspectionConclusion: this.inspection_conclusion,
          user: localStorage.getItem('fullname'),
          natureOfBusiness: this.nature_of_business,
          alignmentStatus: this.alignment_status,
          replacementMeterSerialNumber: this.replacement_meter_serial_number,
          meterTypeByManufacturer: this.meter_type_by_manufacturer,
          meterCondition: this.meter_condition,
          lastPurchaseDate: this.last_purchase_date,
          lastPurchaseAmount: this.last_purchase_amount,
          sealStatus: this.seal_status
        };
        checkList = JSON.stringify(checkList);
        var formData = new FormData();
        formData.append("files", this.pic_of_the_service_wire_from_pole_to_metering_point);
        formData.append("files", this.pic_of_internal_connection_if_seal_is_broken);
        // formData.append("files", this.pic_of_internal_connection_if_seal_is_broken2);
        formData.append("files", this.pic_of_installation_cutout_metering_point);
        formData.append("files", this.pic_of_installation_cutout_metering_point2);
        formData.append("files", this.pic_of_installation_cutout_metering_point3);
        formData.append("files", this.pic_of_invitation_notice_to_customer);
        formData.append("files", this.pic_of_last_bill_vending_receipt);
        formData.append("files", this.pic_of_last_bill_vending_receipt2);
        formData.append("files", this.pic_of_last_bill_vending_receipt3);
        formData.append("files", this.pic_of_meter_nameplate);
        formData.append("files", this.pic_of_meter_nameplate2);
        formData.append("files", this.pic_of_meter_nameplate3);
        formData.append("files", this.pic_of_seal_as_met);
        formData.append("files", this.pic_of_building);
        formData.append("files", this.pic_of_bypass);
        formData.append("files", this.pic_of_bypass2);
        formData.append("files", this.pic_of_bypass3);
        formData.append('files', this.signature);
        formData.append("checklist", checkList);

        // console.log(this.signature)
        // console.log('clicked')

        try {
          const rawResponse = await fetch('https://api.ikejaelectric.com/ieforms/1.0/checklist/submit', {
            method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + localStorage.token,
              'Auth': 'Bearer fae96b00-8ef4-3473-bfb6-c5b1107b2c2b',
              'form_type': 'vsm'
            },
            body: formData
          });
          const response = await rawResponse.json();

          // console.log(response)

          if (response.code == '00') {
            this.hideLoader = true;
            this.$router.push('./sent');
          } else if (response.status == 500) {
            console.log(response.status);
            M.toast({
              html: `<b class="red-text">Session expired</b>`
            });
            if (false) {}
          }
        } catch (error) {
          // console.log(error)
          M.toast({
            html: `<b class="red-text">${error}</b>`
          });
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
      const coordinates = await _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_0__["Geolocation"].getCurrentPosition();
      this.lat = coordinates.coords.latitude;
      this.long = coordinates.coords.longitude;
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
  },
  created() {
    this.printCurrentPosition();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)["URL"]))

/***/ })

};;
//# sourceMappingURL=vsm-checklist.js.map