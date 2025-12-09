exports.ids = [36,5];
exports.modules = {

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_md_customer_ir_vue_vue_type_style_index_0_id_37c1f0f8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(92);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_md_customer_ir_vue_vue_type_style_index_0_id_37c1f0f8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_md_customer_ir_vue_vue_type_style_index_0_id_37c1f0f8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_md_customer_ir_vue_vue_type_style_index_0_id_37c1f0f8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_md_customer_ir_vue_vue_type_style_index_0_id_37c1f0f8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, "#sig-canvas[data-v-37c1f0f8]{border:2px dotted #ccc;border-radius:15px;cursor:crosshair}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/md-customer-ir.vue?vue&type=template&id=37c1f0f8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_c('nuxt-link', {
    staticClass: "red white-text btn",
    attrs: {
      "to": "./forms"
    }
  }, [_vm._v("\n            Back\n        ")])], 1), _vm._ssrNode(" <div class=\"row\" data-v-37c1f0f8><div data-v-37c1f0f8><h6 class=\"red-text center\" style=\"font-weight: 100\" data-v-37c1f0f8>\n            MD Customer I &amp; R\n        </h6></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div" + _vm._ssrClass("row", {
    'hide': _vm.hideForm
  }) + " data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<form style=\"margin-top: 20px\" data-v-37c1f0f8>", "</form>", [_vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
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
  }, [_vm._v("Shomolu")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MD KAM"
    }
  }, [_vm._v("MD KAM")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
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
  }, [_vm._v("PTC")])])])]), _vm._ssrNode(" <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Customer name\"" + _vm._ssrAttr("value", _vm.customer_name) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"DT name\"" + _vm._ssrAttr("value", _vm.dt_name) + " data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dt_capacity,
      expression: "dt_capacity"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.dt_capacity = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Dt capacity")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "25KVA"
    }
  }, [_vm._v("25KVA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "50KVA"
    }
  }, [_vm._v("50KVA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "100KVA"
    }
  }, [_vm._v("100KVA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "200KVA"
    }
  }, [_vm._v("200KVA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "300KVA"
    }
  }, [_vm._v("300KVA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "500KVA"
    }
  }, [_vm._v("500KVA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "750KVA"
    }
  }, [_vm._v("750KVA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1000KVA"
    }
  }, [_vm._v("1000KVA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2500KVA"
    }
  }, [_vm._v("2500KVA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "5000KVA"
    }
  }, [_vm._v("5000KVA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "7500KVA"
    }
  }, [_vm._v("7500KVA")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "15000KVA"
    }
  }, [_vm._v("15000KVA")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dt_type,
      expression: "dt_type"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.dt_type = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Dt Type")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Public"
    }
  }, [_vm._v("Public")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Private"
    }
  }, [_vm._v("Private")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of DT nameplate\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-dt-nameplate\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Customer address\"" + _vm._ssrAttr("value", _vm.customer_address) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"CIS account number \"" + _vm._ssrAttr("value", _vm.cis_account_number) + " data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.present_tariff_class,
      expression: "present_tariff_class"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.present_tariff_class = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Present tarrif Class")]), _vm._v(" "), _c('option', {
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
      "value": "D2"
    }
  }, [_vm._v("D2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "N/A"
    }
  }, [_vm._v("N/A")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.proposed_tariff_class,
      expression: "proposed_tariff_class"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.proposed_tariff_class = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Recommended tarrif")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A - Bilateral"
    }
  }, [_vm._v("A - Bilateral")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A - MD1"
    }
  }, [_vm._v("A - MD1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A - MD2"
    }
  }, [_vm._v("A - MD2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "A - Non-MD"
    }
  }, [_vm._v("A - Non-MD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "B - MD1"
    }
  }, [_vm._v("B - MD1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "B - MD2"
    }
  }, [_vm._v("B - MD2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "B - Non-MD"
    }
  }, [_vm._v("B - Non-MD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "C - MD1"
    }
  }, [_vm._v("C - MD1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "C - MD2"
    }
  }, [_vm._v("C - MD2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "C - Non-MD"
    }
  }, [_vm._v("C - Non-MD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "D - MD1"
    }
  }, [_vm._v("D - MD1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "D - MD2"
    }
  }, [_vm._v("D - MD2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "D - Non-MD"
    }
  }, [_vm._v("D - Non-MD")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "E - MD1"
    }
  }, [_vm._v("E - MD1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "E - MD2"
    }
  }, [_vm._v("E - MD2")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "E - Non-MD"
    }
  }, [_vm._v("E - Non-MD")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
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
  }, [_vm._v("Meter status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Metered"
    }
  }, [_vm._v("Metered")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Not Metered"
    }
  }, [_vm._v("Not Metered")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.account_status,
      expression: "account_status"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.account_status = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Account Status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Active"
    }
  }, [_vm._v("Active")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Suspended"
    }
  }, [_vm._v("Suspended")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Inactive"
    }
  }, [_vm._v("Inactive")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Bill\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-bill\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Feeder name \"" + _vm._ssrAttr("value", _vm.feeder_name) + " data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.dt_status,
      expression: "dt_status"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.dt_status = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Dt Status")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Connected"
    }
  }, [_vm._v("Connected")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "DNP"
    }
  }, [_vm._v("DNP")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Faulty"
    }
  }, [_vm._v("Faulty")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "Out of circuit"
    }
  }, [_vm._v("Out of circuit")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Nature of business \"" + _vm._ssrAttr("value", _vm.nature_of_business) + " data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
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
      "value": "LV-WHOLE CURRENT"
    }
  }, [_vm._v("LV-WHOLE CURRENT")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LV-CT OPERATED"
    }
  }, [_vm._v("LV-CT OPERATED")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "HT-POLE MOUNTED"
    }
  }, [_vm._v("HT-POLE MOUNTED")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "HT-PANEL"
    }
  }, [_vm._v("HT-PANEL")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.meter_make,
      expression: "meter_make"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.meter_make = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
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
      "value": "MOJECT & BLUESTAR"
    }
  }, [_vm._v("MOJECT & BLUESTAR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MOJEC & SHJL"
    }
  }, [_vm._v("MOJEC & SHJL")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "SHJL"
    }
  }, [_vm._v("SHJL")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MOJEC & MICROSTAR"
    }
  }, [_vm._v("MOJEC & MICROSTAR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CLOU"
    }
  }, [_vm._v("CLOU")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ITRON"
    }
  }, [_vm._v("ITRON")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "MOMAS"
    }
  }, [_vm._v("MOMMAS")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LAURSEN & TOURBO"
    }
  }, [_vm._v("LAURSEN & TOURBO")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "EDMI"
    }
  }, [_vm._v("EDMI")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LANDIS & GYR"
    }
  }, [_vm._v("LANDIS & GYR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ANALOG"
    }
  }, [_vm._v("ANALOG")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "ELSTER"
    }
  }, [_vm._v("ELSTER")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PREMIER"
    }
  }, [_vm._v("PREMIER")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PRI"
    }
  }, [_vm._v("PRI")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OTHERS"
    }
  }, [_vm._v("OTHERS")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Meter number \"" + _vm._ssrAttr("value", _vm.meter_number) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Meter constant \"" + _vm._ssrAttr("value", _vm.meter_constant) + " data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.meter_accuracy_class,
      expression: "meter_accuracy_class"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.meter_accuracy_class = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Meter Accuracy class")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0.5"
    }
  }, [_vm._v("0.5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "0.5s"
    }
  }, [_vm._v("0.5s")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1.0"
    }
  }, [_vm._v("1.0")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "2.0"
    }
  }, [_vm._v("2.0")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of meter as met\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-meter-as-met\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row center red-text\" data-v-37c1f0f8><h6 data-v-37c1f0f8>FROM METER</h6></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Present KWH \"" + _vm._ssrAttr("value", _vm.present_kwh) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of present KWH\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-present-KWH\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Present KVA \"" + _vm._ssrAttr("value", _vm.present_kva) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of present KVA\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-present-KWA\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Phase A voltage on meter \"" + _vm._ssrAttr("value", _vm.phase_A_voltage_on_meter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Phase A voltage on meter\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-phase-A-voltage-on-meter\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Phase B voltage on meter \"" + _vm._ssrAttr("value", _vm.phase_B_voltage_on_meter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Phase B voltage on meter\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-phase-B-voltage-on-meter\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Phase C voltage on meter \"" + _vm._ssrAttr("value", _vm.phase_C_voltage_on_meter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Phase C voltage on meter\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-phase-C-voltage-on-meter\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Phase A current on meter \"" + _vm._ssrAttr("value", _vm.phase_A_current_on_meter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Phase A current on meter\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-phase-A-current-on-meter\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Phase B current on meter \"" + _vm._ssrAttr("value", _vm.phase_B_current_on_meter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Phase B current on meter\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-phase-B-current-on-meter\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Phase C current on meter \"" + _vm._ssrAttr("value", _vm.phase_C_current_on_meter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Phase C current on meter\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-phase-C-current-on-meter\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Power factor \"" + _vm._ssrAttr("value", _vm.power_facter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Power factor\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-power-factor\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Meter CT ratio \"" + _vm._ssrAttr("value", _vm.meter_ct_ratio) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Meter CT ratio\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-meter-ct-ratio\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Meter VT ratio \"" + _vm._ssrAttr("value", _vm.meter_vt_ratio) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Meter VT ratio\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-meter-vt-ratio\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Multiplying Factor \"" + _vm._ssrAttr("value", _vm.multiplying_factor) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Multiplying Factor\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-multiplying-factor\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row center red-text\" data-v-37c1f0f8><h6 data-v-37c1f0f8>RECERTIFICATION</h6></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of installation\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-installation\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Old meter box seal \"" + _vm._ssrAttr("value", _vm.old_meter_box_seal) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of old meter box seal\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-old-meter-box-seal\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Old meter seal \"" + _vm._ssrAttr("value", _vm.old_meter_seal) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of old meter seal\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-old-meter-seal\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Old TTB seal \"" + _vm._ssrAttr("value", _vm.old_ttb_seal) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Old TTB seal\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-old-ttb-seal\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Old CT Box seal \"" + _vm._ssrAttr("value", _vm.old_ct_box_seal) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Old CT Box seal\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-old-ct-box-seal\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.instrument_ct_ratio,
      expression: "instrument_ct_ratio"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.instrument_ct_ratio = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Instrument CT ratio")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "1"
    }
  }, [_vm._v("1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "100/5"
    }
  }, [_vm._v("100/5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "150/5"
    }
  }, [_vm._v("150/5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "200/5"
    }
  }, [_vm._v("200/5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "300/5"
    }
  }, [_vm._v("300/5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "400/5"
    }
  }, [_vm._v("400/5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "500/5"
    }
  }, [_vm._v("500/5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "800/5"
    }
  }, [_vm._v("800/5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "10/5"
    }
  }, [_vm._v("10/5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "15/5"
    }
  }, [_vm._v("15/5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "25/5"
    }
  }, [_vm._v("25/5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "30/5"
    }
  }, [_vm._v("30/5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "50/5"
    }
  }, [_vm._v("50/5")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "10/1"
    }
  }, [_vm._v("10/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "15/1"
    }
  }, [_vm._v("15/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "20/1"
    }
  }, [_vm._v("20/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "25/1"
    }
  }, [_vm._v("25/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "30/1"
    }
  }, [_vm._v("30/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "50/1"
    }
  }, [_vm._v("50/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "75/1"
    }
  }, [_vm._v("75/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "100/1"
    }
  }, [_vm._v("100/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "150/1"
    }
  }, [_vm._v("150/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "200/1"
    }
  }, [_vm._v("200/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "300/1"
    }
  }, [_vm._v("300/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "400/1"
    }
  }, [_vm._v("400/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "450/1"
    }
  }, [_vm._v("450/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "500/1"
    }
  }, [_vm._v("500/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "600/1"
    }
  }, [_vm._v("600/1")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NA"
    }
  }, [_vm._v("NA")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.instrument_vt_ratio,
      expression: "instrument_vt_ratio"
    }],
    on: {
      "change": function ($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });
        _vm.instrument_vt_ratio = $event.target.multiple ? $$selectedVal : $$selectedVal[0];
      }
    }
  }, [_c('option', {
    attrs: {
      "value": "",
      "disabled": "",
      "selected": ""
    }
  }, [_vm._v("Instrument VT ratio")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "11000/110"
    }
  }, [_vm._v("11000/110")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "33000/110"
    }
  }, [_vm._v("33000/110")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NA"
    }
  }, [_vm._v("NA")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Phase A (P) Current with Ammeter \"" + _vm._ssrAttr("value", _vm.phase_A_P_current_with_ammeter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Phase A (S) Current with Ammeter \"" + _vm._ssrAttr("value", _vm.phase_A_S_current_with_ammeter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Phase A (P&amp;S) Comparison\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-phase-a-ps-comparison\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Phase B (P) Current with Ammeter \"" + _vm._ssrAttr("value", _vm.phase_B_P_current_with_ammeter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Phase B (S) Current with Ammeter \"" + _vm._ssrAttr("value", _vm.phase_B_S_current_with_ammeter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Phase B (P&amp;S) Comparison\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-phase-b-ps-comparison\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Phase C (P) Current with Ammeter \"" + _vm._ssrAttr("value", _vm.phase_C_P_current_with_ammeter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Phase C (S) Current with Ammeter \"" + _vm._ssrAttr("value", _vm.phase_C_S_current_with_ammeter) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Phase C (P&amp;S) Comparison\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-phase-c-ps-comparison\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Actual value measurement from zera (Before)\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-actual-value-measurement-from-zera-before\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Vector display from zera (before)\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-vector-display-from-zera-before\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Observation \"" + _vm._ssrAttr("value", _vm.observation) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Actual value measurement from zera (after)\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-actual-value-measurement-from-zera-after\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Vector display from zera (after)\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-vector-display-from-zera-after\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of Error measurement\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-error-measurement\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"Action taken \"" + _vm._ssrAttr("value", _vm.action_taken) + " data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"New meter box seal \"" + _vm._ssrAttr("value", _vm.new_meter_box_seal) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of New meter box seal\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-new-meter-box-seal\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"New meter seal \"" + _vm._ssrAttr("value", _vm.new_meter_seal) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of New meter seal\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-new-meter-seal\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"New TTB seal \"" + _vm._ssrAttr("value", _vm.new_ttb_seal) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of New TTB seal\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-new-ttb-seal\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\"New CT box seal \"" + _vm._ssrAttr("value", _vm.new_ct_box_seal) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of New CT box seal\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-new-ct-box-seal\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\" Any other observations \"" + _vm._ssrAttr("value", _vm.any_other_observations) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><h6 class=\"red-text\" data-v-37c1f0f8>\n                            Photo of any other observations\n                        </h6> <button class=\"btn red btn-large\" data-v-37c1f0f8><i class=\"material-icons white-text\" data-v-37c1f0f8>camera_alt</i></button></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><img id=\"output-pic-of-any-other-observations\" class=\"responsive-img\" data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\" Customer phone number \"" + _vm._ssrAttr("value", _vm.customer_phone_number) + " data-v-37c1f0f8></div></div> <div class=\"row\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><input type=\"text\" placeholder=\" Remarks \"" + _vm._ssrAttr("value", _vm.remarks) + " data-v-37c1f0f8></div></div> <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-37c1f0f8>", "</div>", [_c('select', {
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
  }, [_vm._v("Inspection conclustion")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "LOW POWER FACTOR"
    }
  }, [_vm._v("LOW POWER FACTOR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "BYPASS (ENERGY THEFT)"
    }
  }, [_vm._v(" BYPASS (ENERGY THEFT) ")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CT current loss"
    }
  }, [_vm._v("CT LOSS (Current Loss)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "VT LOSS (Voltage Loss)"
    }
  }, [_vm._v("VT LOSS (Voltage Loss)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PARTIAL CT LOSS (Transformation)"
    }
  }, [_vm._v("PARTIAL CT LOSS (Transformation)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PARTIAL VT LOSS (Transformation)"
    }
  }, [_vm._v("PARTIAL VT LOSS (Transformation)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "NOT CAPTURED FOR BILLING (On Grid File)"
    }
  }, [_vm._v("NOT CAPTURED FOR BILLING (On Grid File)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "METER OKAY"
    }
  }, [_vm._v("METER OKAY")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CT LOSS (Current Loss) & VT LOSS (Voltage Loss)"
    }
  }, [_vm._v("CT LOSS (Current Loss) & VT LOSS (Voltage Loss)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "CT LOSS (Current Loss) & LOW POWER FACTOR"
    }
  }, [_vm._v("CT LOSS (Current Loss) & LOW POWER FACTOR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "VT LOSS (Voltage Loss) & LOW POWER FACTOR"
    }
  }, [_vm._v("VT LOSS (Voltage Loss) & LOW POWER FACTOR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PARTIAL VT LOSS (Transformation) & PARTIAL CT LOSS (Transformation)"
    }
  }, [_vm._v("PARTIAL VT LOSS (Transformation) & PARTIAL CT LOSS (Transformation)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PARTIAL VT LOSS (Transformation) & CT LOSS (Current Loss)"
    }
  }, [_vm._v("PARTIAL VT LOSS (Transformation) & CT LOSS (Current Loss)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PARTIAL CT LOSS (Transformation) & VT LOSS (Voltage Loss)"
    }
  }, [_vm._v("PARTIAL CT LOSS (Transformation) & VT LOSS (Voltage Loss)")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PARTIAL CT LOSS (Transformation) & LOW POWER FACTOR"
    }
  }, [_vm._v("PARTIAL CT LOSS (Transformation) & LOW POWER FACTOR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "PARTIAL VT LOSS (Transformation) & LOW POWER FACTOR"
    }
  }, [_vm._v("PARTIAL VT LOSS (Transformation) & LOW POWER FACTOR")]), _vm._v(" "), _c('option', {
    attrs: {
      "value": "OTHERS"
    }
  }, [_vm._v("OTHERS")])])])]), _vm._ssrNode(" <br data-v-37c1f0f8> "), _vm._ssrNode("<div class=\"row\" data-v-37c1f0f8>", "</div>", [_c('PreLoader', {
    staticClass: "center",
    class: {
      'hide': _vm.hideLoader
    }
  })], 1), _vm._ssrNode(" <div class=\"row center\" data-v-37c1f0f8><div class=\"col s12\" data-v-37c1f0f8><button class=\"btn btn-large red\" style=\"width: 300px; margin-top: 20px; margin-bottom: 20px;\" data-v-37c1f0f8>Submit</button></div></div>")], 2)])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/md-customer-ir.vue?vue&type=template&id=37c1f0f8&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/md-customer-ir.vue?vue&type=script&lang=js
var md_customer_irvue_type_script_lang_js = __webpack_require__(62);

// CONCATENATED MODULE: ./pages/md-customer-ir.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_md_customer_irvue_type_script_lang_js = (md_customer_irvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/md-customer-ir.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(140)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_md_customer_irvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "37c1f0f8",
  "42fef42b"
  
)

/* harmony default export */ var md_customer_ir = __webpack_exports__["default"] = (component.exports);

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

/***/ 62:
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
  //   components: {
  //     VPerfectSignature,
  //   },
  data() {
    return {
      business_unit: '',
      undertaking_one: '',
      customer_name: '',
      dt_name: '',
      dt_capacity: '',
      dt_type: '',
      customer_address: '',
      cis_account_number: '',
      present_tariff_class: '',
      proposed_tariff_class: '',
      meter_status: '',
      account_status: '',
      pic_of_dt_nameplate: '',
      pic_of_bill: '',
      feeder_name: '',
      dt_status: '',
      nature_of_business: '',
      meter_type: '',
      meter_make: '',
      meter_number: '',
      meter_constant: '',
      meter_accuracy_class: '',
      pic_of_meter_as_met: '',
      present_kwh: '',
      pic_present_kwh: '',
      present_kva: '',
      pic_of_present_kva: '',
      phase_A_voltage_on_meter: '',
      pic_of_phase_A_voltage_on_meter: '',
      phase_B_voltage_on_meter: '',
      pic_of_phase_B_voltage_on_meter: '',
      phase_C_voltage_on_meter: '',
      pic_of_phase_c_volage_on_meter: '',
      phase_A_current_on_meter: '',
      pic_of_phase_A_current_on_meter: '',
      phase_B_current_on_meter: '',
      pic_of_phase_B_current_on_meter: '',
      phase_C_current_on_meter: '',
      pic_of_phase_C_current_on_meter: '',
      power_facter: '',
      pic_of_power_facter: '',
      meter_ct_ratio: '',
      pic_of_meter_ct_ratio: '',
      meter_vt_ratio: '',
      pic_of_meter_vt_ratio: '',
      multiplying_factor: '',
      pic_of_multiplying_factor: '',
      pic_of_installation: '',
      old_meter_box_seal: '',
      pic_of_old_meter_box_seal: '',
      old_meter_seal: '',
      pic_of_old_meter_seal: '',
      old_ttb_seal: '',
      pic_of_old_ttb_seal: '',
      old_ct_box_seal: '',
      pic_of_old_ct_box_seal: '',
      instrument_ct_ratio: '',
      instrument_vt_ratio: '',
      phase_A_P_current_with_ammeter: '',
      phase_A_S_current_with_ammeter: '',
      pic_of_phase_a_p_s_comparison: '',
      pic_of_phase_b_p_s_comparison: '',
      phase_B_P_current_with_ammeter: '',
      phase_B_S_current_with_ammeter: '',
      pic_of_pase_b_p_s_comparison: '',
      phase_C_P_current_with_ammeter: '',
      phase_C_S_current_with_ammeter: '',
      pic_of_phase_c_p_s_comparison: '',
      pic_of_actual_value_measurement_from_zera_before: '',
      pic_of_vector_display_from_zera_before: '',
      observation: '',
      pic_of_actual_value_measurement_from_zera_after: '',
      pic_of_vector_display_from_zera_after: '',
      pic_of_error_measurement: '',
      action_taken: '',
      new_meter_box_seal: '',
      pic_of_new_meter_box_seal: '',
      new_meter_seal: '',
      pic_of_new_meter_seal: '',
      new_ttb_seal: '',
      pic_of_new_ttb_seal: '',
      new_ct_box_seal: '',
      pic_of_new_ct_box_seal: '',
      any_other_observations: '',
      pic_of_any_other_observations: '',
      customer_phone_number: '',
      remarks: '',
      inspection_conclusion: '',
      lat: '',
      long: '',
      hideLoader: true,
      showSignature: false,
      hideModal: true,
      hideForm: false
    };
  },
  methods: {
    async imagePickerForDtNameplate() {
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
      this.doSomethingWithFilesImagePickerForDtNameplate(blob);
    },
    async doSomethingWithFilesImagePickerForDtNameplate(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-dt-nameplate');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_dt_nameplate = new File([compressedFile], `photoOfDTNameplate${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForBill() {
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
      this.doSomethingWithFilesImagePickerForBill(blob);
    },
    async doSomethingWithFilesImagePickerForBill(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-bill');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_bill = new File([compressedFile], `photoOfBill${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMeterAsMet() {
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
      this.doSomethingWithFilesImagePickerForMeterAsMet(blob);
    },
    async doSomethingWithFilesImagePickerForMeterAsMet(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-meter-as-met');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_meter_as_met = new File([compressedFile], `photoOfMeterAsMet${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForPresentKWH() {
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
      this.doSomethingWithFilesImagePickerForPresentKWH(blob);
    },
    async doSomethingWithFilesImagePickerForPresentKWH(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-present-KWH');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_present_kwh = new File([compressedFile], `presentKWH1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForPresentKWA() {
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
      this.doSomethingWithFilesImagePickerForPresentKWA(blob);
    },
    async doSomethingWithFilesImagePickerForPresentKWA(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-present-KWA');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_present_kva = new File([compressedFile], `presentKWA${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForPhaseAVoltageOnMeter() {
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
      this.doSomethingWithFilesImagePickerForPhaseAVoltageOnMeter(blob);
    },
    async doSomethingWithFilesImagePickerForPhaseAVoltageOnMeter(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-phase-A-voltage-on-meter');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_phase_A_voltage_on_meter = new File([compressedFile], `phaseAVoltageOnMeter1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForPhaseBVoltageOnMeter() {
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
      this.doSomethingWithFilesImagePickerForPhaseBVoltageOnMeter(blob);
    },
    async doSomethingWithFilesImagePickerForPhaseBVoltageOnMeter(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-phase-B-voltage-on-meter');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_phase_B_voltage_on_meter = new File([compressedFile], `phaseBVoltageOnMeter1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForPhaseCVoltageOnMeter() {
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
      this.doSomethingWithFilesImagePickerForPhaseCVoltageOnMeter(blob);
    },
    async doSomethingWithFilesImagePickerForPhaseCVoltageOnMeter(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-phase-C-voltage-on-meter');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_phase_C_volage_on_meter = new File([compressedFile], `phaseCVoltageOnMeter1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForPhaseACurrentOnMeter() {
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
      this.doSomethingWithFilesImagePickerForPhaseACurrentOnMeter(blob);
    },
    async doSomethingWithFilesImagePickerForPhaseACurrentOnMeter(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-phase-A-current-on-meter');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_phase_A_current_on_meter = new File([compressedFile], `phaseACurrentOnMeter1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForPhaseBCurrentOnMeter() {
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
      this.doSomethingWithFilesImagePickerForPhaseBCurrentOnMeter(blob);
    },
    async doSomethingWithFilesImagePickerForPhaseBCurrentOnMeter(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-phase-B-current-on-meter');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_phase_B_current_on_meter = new File([compressedFile], `phaseBCurrentOnMeter1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForPhaseCCurrentOnMeter() {
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
      this.doSomethingWithFilesImagePickerForPhaseCCurrentOnMeter(blob);
    },
    async doSomethingWithFilesImagePickerForPhaseCCurrentOnMeter(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-phase-C-current-on-meter');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_phase_C_current_on_meter = new File([compressedFile], `phaseCCurrentOnMeter1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForPowerFactor() {
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
      this.doSomethingWithFilesImagePickerForPowerFactor(blob);
    },
    async doSomethingWithFilesImagePickerForPowerFactor(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-power-factor');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_power_facter = new File([compressedFile], `powerFactor1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMeterCTRatio() {
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
      this.doSomethingWithFilesImagePickerForMeterCTRatio(blob);
    },
    async doSomethingWithFilesImagePickerForMeterCTRatio(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-meter-ct-ratio');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_meter_ct_ratio = new File([compressedFile], `meterCTRatio1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMeterVTRatio() {
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
      this.doSomethingWithFilesImagePickerForMeterVTRatio(blob);
    },
    async doSomethingWithFilesImagePickerForMeterVTRatio(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-meter-vt-ratio');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_meter_vt_ratio = new File([compressedFile], `meterVTRatio1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMultiplyingFactor() {
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
      this.doSomethingWithFilesImagePickerForMultiplyingFactor(blob);
    },
    async doSomethingWithFilesImagePickerForMultiplyingFactor(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-multiplying-factor');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_multiplying_factor = new File([compressedFile], `multiplyingFactor1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForInstallation() {
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
      this.doSomethingWithFilesImagePickerForInstallation(blob);
    },
    async doSomethingWithFilesImagePickerForInstallation(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-installation');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_installation = new File([compressedFile], `pictureOfInstallation${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForOldMeterBoxSeal() {
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
      this.doSomethingWithFilesImagePickerForOldMeterBoxSeal(blob);
    },
    async doSomethingWithFilesImagePickerForOldMeterBoxSeal(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-old-meter-box-seal');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_old_meter_box_seal = new File([compressedFile], `oldMeterBoxSeal1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForOldMeterSeal() {
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
      this.doSomethingWithFilesImagePickerForOldMeterSeal(blob);
    },
    async doSomethingWithFilesImagePickerForOldMeterSeal(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-old-meter-seal');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_old_meter_seal = new File([compressedFile], `oldMeterSeal1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForOldTTBSeal() {
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
      this.doSomethingWithFilesImagePickerForOldTTBSeal(blob);
    },
    async doSomethingWithFilesImagePickerForOldTTBSeal(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-old-ttb-seal');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_old_ttb_seal = new File([compressedFile], `oldTTBSeal1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForOldCTBoxSeal() {
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
      this.doSomethingWithFilesImagePickerForOldCTBoxSeal(blob);
    },
    async doSomethingWithFilesImagePickerForOldCTBoxSeal(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-old-ct-box-seal');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_old_ct_box_seal = new File([compressedFile], `oldCTBoxSeal1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForPhaseAPSComparison() {
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
      this.doSomethingWithFilesImagePickerForPhaseAPSComparison(blob);
    },
    async doSomethingWithFilesImagePickerForPhaseAPSComparison(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-phase-a-ps-comparison');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_phase_a_p_s_comparison = new File([compressedFile], `phaseAPSComparison${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForPhaseBPSComparison() {
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
      this.doSomethingWithFilesImagePickerForPhaseBPSComparison(blob);
    },
    async doSomethingWithFilesImagePickerForPhaseBPSComparison(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-phase-b-ps-comparison');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_phase_b_p_s_comparison = new File([compressedFile], `phaseBPSComparison${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForPhaseCPSComparison() {
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
      this.doSomethingWithFilesImagePickerForPhaseCPSComparison(blob);
    },
    async doSomethingWithFilesImagePickerForPhaseCPSComparison(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-phase-c-ps-comparison');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_phase_c_p_s_comparison = new File([compressedFile], `phaseCPSComparison${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForActualValueMeasurementFromZeraBefore() {
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
      this.doSomethingWithFilesImagePickerForActualValueMeasurementFromZeraBefore(blob);
    },
    async doSomethingWithFilesImagePickerForActualValueMeasurementFromZeraBefore(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-actual-value-measurement-from-zera-before');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_actual_value_measurement_from_zera_before = new File([compressedFile], `actualValueMeasurementBefore${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForVectorDisplayFromZeraBefore() {
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
      this.doSomethingWithFilesImagePickerForVectorDisplayFromZeraBefore(blob);
    },
    async doSomethingWithFilesImagePickerForVectorDisplayFromZeraBefore(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-vector-display-from-zera-before');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_vector_display_from_zera_before = new File([compressedFile], `vectorDisplayBefore${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForActualValueMeasurementFromZeraAfter() {
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
      this.doSomethingWithFilesImagePickerForActualValueMeasurementFromZeraAfter(blob);
    },
    async doSomethingWithFilesImagePickerForActualValueMeasurementFromZeraAfter(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-actual-value-measurement-from-zera-after');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_actual_value_measurement_from_zera_after = new File([compressedFile], `actualValueMeasurementAfter${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForVectorDisplayFromZeraAfter() {
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
      this.doSomethingWithFilesImagePickerForVectorDisplayFromZeraAfter(blob);
    },
    async doSomethingWithFilesImagePickerForVectorDisplayFromZeraAfter(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-vector-display-from-zera-after');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_vector_display_from_zera_after = new File([compressedFile], `vectorDisplayAfter${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForErrorMeasurement() {
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
      this.doSomethingWithFilesImagePickerForErrorMeasurement(blob);
    },
    async doSomethingWithFilesImagePickerForErrorMeasurement(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-error-measurement');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_error_measurement = new File([compressedFile], `errorMeasurement${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForNewMeterBoxSeal() {
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
      this.doSomethingWithFilesImagePickerForNewMeterBoxSeal(blob);
    },
    async doSomethingWithFilesImagePickerForNewMeterBoxSeal(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-new-meter-box-seal');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_new_meter_box_seal = new File([compressedFile], `newMeterBoxSeal1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForNewMeterSeal() {
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
      this.doSomethingWithFilesImagePickerForNewMeterSeal(blob);
    },
    async doSomethingWithFilesImagePickerForNewMeterSeal(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-new-meter-seal');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_new_meter_seal = new File([compressedFile], `newMeterSeal1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForNewTTBSeal() {
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
      this.doSomethingWithFilesImagePickerForNewTTBSeal(blob);
    },
    async doSomethingWithFilesImagePickerForNewTTBSeal(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-new-ttb-seal');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_new_ttb_seal = new File([compressedFile], `newTTBSeal1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForNewCTBoxSeal() {
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
      this.doSomethingWithFilesImagePickerForNewCTBoxSeal(blob);
    },
    async doSomethingWithFilesImagePickerForNewCTBoxSeal(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-new-ct-box-seal');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_new_ct_box_seal = new File([compressedFile], `newCTBoxSeal1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForAnyOtherObservations() {
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
      this.doSomethingWithFilesImagePickerForAnyOtherObservations(blob);
    },
    async doSomethingWithFilesImagePickerForAnyOtherObservations(event) {
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-any-other-observations');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_1___default()(imageFile, options);
        this.pic_of_any_other_observations = new File([compressedFile], `anyOtherObservations1${compressedFile.type.replace('image/', '.')}`);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }
      } catch (error) {
        // // console.log(error);
      }
    },
    async sumbitVSM() {
      this.hideLoader = false;
      this.business_unit = this.business_unit.trim();
      if (this.business_unit == '') {
        M.toast({
          html: '<b class="red-text">Fill all the field marked with *</b>'
        });
        this.hideLoader = true;
      } else {
        var checkList = "";
        checkList = {
          meterMake: this.meter_make,
          oldMeterSeal: this.old_meter_seal,
          anyOtherObservations16: "",
          phaseBCurrentOnMeter: this.phase_B_current_on_meter,
          anyOtherObservations17: "",
          anyOtherObservations18: "",
          anyOtherObservations19: "",
          multiplyingFactor: this.multiplying_factor,
          newTTBSeal1: "",
          newCTBoxSeal: this.new_ct_box_seal,
          phaseCPCurrentWithAmmeter: this.phase_C_P_current_with_ammeter,
          anyOtherObservations10: "",
          anyOtherObservations11: "",
          anyOtherObservations12: "",
          anyOtherObservations13: "",
          anyOtherObservations1: "",
          anyOtherObservations14: "",
          dtName: this.dt_name,
          anyOtherObservations2: "",
          anyOtherObservations15: "",
          picturesOfShuntingTTB: "",
          anyOtherObservations3: "",
          anyOtherObservations4: "",
          anyOtherObservations5: "",
          anyOtherObservations6: "",
          anyOtherObservations7: "",
          vectorDisplayAfter: "",
          anyOtherObservations8: "",
          pictureOfInstallation: "",
          anyOtherObservations9: "",
          picturesOfThePoleAndBuilding: "",
          customerAddress: this.customer_address,
          picturesOfTheBuildingShowingGate1: "",
          anyOtherObservations27: "",
          pictureOfThePointOfDiversion: "",
          anyOtherObservations28: "",
          anyOtherObservations29: "",
          phaseCVoltageOnMeter: this.phase_C_voltage_on_meter,
          customerName: this.customer_name,
          pictureOfTamperingWithVoltage: "",
          meterStatus: this.meter_status,
          newMeterBoxSeal: this.new_meter_box_seal,
          anyOtherObservations20: "",
          anyOtherObservations21: "",
          anyOtherObservations22: "",
          anyOtherObservations23: "",
          anyOtherObservations24: "",
          anyOtherObservations25: "",
          anyOtherObservations26: "",
          picturesOfThePoleBypassWire: "",
          feederName: this.feeder_name,
          instrumentVTRatio: this.instrument_vt_ratio,
          newCTBoxSeal1: "",
          customerPhoneNumber: this.customer_phone_number,
          additionalPictureFields10: "",
          meterNumber: this.meter_number,
          latitude: this.latitude,
          natureOfBusiness: this.nature_of_business,
          phaseBVoltageOnMeter: this.phase_B_voltage_on_meter,
          meterAccuracyClass: this.meter_accuracy_class,
          accountStatus: this.account_status,
          phaseAVoltageOnMeter: this.phase_A_voltage_on_meter,
          instrumentCTRatio: this.instrument_ct_ratio,
          phaseBPCurrentWithAmmeter: this.phase_B_P_current_with_ammeter,
          proposedTariffClass: this.proposed_tariff_class,
          newMeterSeal: this.new_meter_seal,
          observation: this.observation,
          cisAccountNumber: this.cis_account_number,
          createdDate: "",
          phaseCCurrentOnMeter: this.phase_C_current_on_meter,
          meterType: this.meter_type,
          newMeterSeal1: "",
          oldTTBSeal: this.old_ttb_seal,
          businessUnit: this.business_unit,
          meterVTRatio: this.meter_vt_ratio,
          actualValueMeasurementBefore: "",
          phaseBSCurrentWithAmmeter: this.phase_B_S_current_with_ammeter,
          phaseAPCurrentWithAmmeter: this.phase_A_P_current_with_ammeter,
          longitude: this.longitude,
          formId: "",
          phaseACurrentOnMeter: this.phase_A_current_on_meter,
          editEndTime: "",
          anyOtherObservations: this.any_other_observations,
          inspectionConclusion: this.inspection_conclusion,
          presentTariffClass: this.present_tariff_class,
          presentKWH: this.present_kwh,
          meterConstant: this.meter_constant,
          lastUpdateTime: "",
          powerFactor: this.power_facter,
          dtType: this.dt_type,
          meterCTRatio: this.meter_ct_ratio,
          oldMeterBoxSeal: this.old_meter_box_seal,
          picturesOfTheMeterNumbers: "",
          anyOtherObservations30: "",
          anyOtherObservations31: "",
          anyOtherObservations32: "",
          anyOtherObservations33: "",
          anyOtherObservations34: "",
          anyOtherObservations35: "",
          editStartTime: "",
          dtStatus: this.dt_status,
          errorMeasurement: "",
          newTTBSeal: this.new_ttb_seal,
          phaseCSCurrentWithAmmeter: this.phase_C_S_current_with_ammeter,
          phaseASCurrentWithAmmeter: this.phase_A_S_current_with_ammeter,
          presentKVA: this.present_kva,
          newMeterBoxSeal1: "",
          oldMeterBoxSeal1: "",
          multiplyingFactor1: "",
          dtCapacity: this.dt_capacity,
          oldCTBoxSeal1: "",
          actualValueMeasurementAfter: "",
          vectorDisplayBefore: "",
          actionTaken: this.action_taken,
          undertaking: this.undertaking_one,
          oldCTBoxSeal: this.old_ct_box_seal,
          oldTTBSeal1: "",
          user: localStorage.getItem('fullname'),
          remarks: this.remarks,
          additionalPictureFields: ""
        };
        checkList = JSON.stringify(checkList);
        // // console.log(this.last_purchase_date)
        let newDate = new Date("Nov 28, 2022 6:42:46 PM");
        // console.log(newDate)

        var formData = new FormData();
        formData.append("files", this.pic_of_dt_nameplate);
        formData.append("files", this.pic_of_bill);
        formData.append("files", this.pic_of_meter_as_met);
        formData.append("files", this.pic_present_kwh);
        formData.append("files", this.pic_of_present_kva);
        formData.append("files", this.pic_of_phase_A_voltage_on_meter);
        formData.append("files", this.pic_of_phase_B_voltage_on_meter);
        formData.append("files", this.pic_of_phase_C_volage_on_meter);
        formData.append("files", this.pic_of_phase_A_current_on_meter);
        formData.append("files", this.pic_of_phase_B_current_on_meter);
        formData.append("files", this.pic_of_phase_C_current_on_meter);
        formData.append("files", this.pic_of_power_facter);
        formData.append("files", this.pic_of_meter_ct_ratio);
        formData.append("files", this.pic_of_meter_vt_ratio);
        formData.append("files", this.pic_of_multiplying_factor);
        formData.append("files", this.pic_of_installation);
        formData.append("files", this.pic_of_old_meter_box_seal);
        formData.append("files", this.pic_of_old_meter_seal);
        formData.append("files", this.pic_of_old_ttb_seal);
        formData.append("files", this.pic_of_old_ct_box_seal);
        formData.append("files", this.pic_of_phase_a_p_s_comparison);
        formData.append("files", this.pic_of_phase_b_p_s_comparison);
        formData.append("files", this.pic_of_phase_c_p_s_comparison);
        formData.append("files", this.pic_of_actual_value_measurement_from_zera_before);
        formData.append("files", this.pic_of_vector_display_from_zera_before);
        formData.append("files", this.pic_of_actual_value_measurement_from_zera_after);
        formData.append("files", this.pic_of_vector_display_from_zera_after);
        formData.append("files", this.pic_of_error_measurement);
        formData.append("files", this.pic_of_new_meter_box_seal);
        formData.append("files", this.pic_of_new_meter_seal);
        formData.append("files", this.pic_of_new_ttb_seal);
        formData.append("files", this.pic_of_new_ct_box_seal);
        formData.append("files", this.pic_of_any_other_observations);
        formData.append("checklist", checkList);
        try {
          const rawResponse = await fetch('https://api.ikejaelectric.com/ieforms/1.0/checklist/submit', {
            method: 'POST',
            headers: {
              'Authorization': 'Bearer ' + localStorage.token,
              'Auth': 'Bearer fae96b00-8ef4-3473-bfb6-c5b1107b2c2b',
              'form_type': 'MDCUSTOMERIR'
            },
            body: formData
          });
          const response = await rawResponse.json();
          console.log(response);
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
    // get longitude and latitude
    async printCurrentPosition() {
      if (false) {}
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
  },
  created() {
    this.printCurrentPosition();
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)["URL"]))

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(141);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("0f2bc260", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=md-customer-ir.js.map