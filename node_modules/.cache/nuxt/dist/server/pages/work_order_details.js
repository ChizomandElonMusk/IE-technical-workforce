exports.ids = [51,1];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(168);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(4).default
module.exports.__inject__ = function (context) {
  add("51ab5b27", content, true, context)
};

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/success.35342cf.svg";

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_work_order_details_vue_vue_type_style_index_0_id_a865c0b8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_work_order_details_vue_vue_type_style_index_0_id_a865c0b8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_work_order_details_vue_vue_type_style_index_0_id_a865c0b8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_work_order_details_vue_vue_type_style_index_0_id_a865c0b8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_3_oneOf_1_2_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_work_order_details_vue_vue_type_style_index_0_id_a865c0b8_prod_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 168:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(3);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".custom-select[data-v-a865c0b8]{background-color:#fff;border-radius:6px;color:#000;font-size:12px;padding:8px}.dropdown-content li>span[data-v-a865c0b8]{color:#f44336!important}.dropdown-content li.selected>span[data-v-a865c0b8]{background-color:#f44336!important;color:#fff!important}input.select-dropdown:focus+label[data-v-a865c0b8]{color:#f44336!important}input.select-dropdown[data-v-a865c0b8]:focus{border-bottom:1px solid #f44336!important;box-shadow:0 1px 0 0 #f44336!important}.on-top[data-v-a865c0b8]{position:relative;z-index:10}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/work_order_details.vue?vue&type=template&id=a865c0b8&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-a865c0b8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-a865c0b8>", "</div>", [_c('nuxt-link', {
    staticClass: "red white-text btn",
    attrs: {
      "to": "../menu"
    }
  }, [_vm._v("\n                Back\n            ")]), _vm._ssrNode(" <b class=\"grey-text btn disabled\" data-v-a865c0b8>Work Order Details</b>")], 2)]), _vm._ssrNode(" " + (_vm.hideworkOrderDetails == false ? "<div class=\"row\" data-v-a865c0b8><div class=\"row\" data-v-a865c0b8><div class=\"col s12 center\" data-v-a865c0b8><div class=\"card-panel white black-text left-align\" style=\"padding: 15px; border-radius: 10px;\" data-v-a865c0b8><div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><span class=\"red-text\" data-v-a865c0b8><h6 style=\"font-weight: 800;\" data-v-a865c0b8>" + _vm._ssrEscape("\n                                    " + _vm._s(_vm.work_order.workOrder) + " ") + "<br data-v-a865c0b8>" + _vm._ssrEscape("\n                                    " + _vm._s(_vm.work_order.faultDescription) + "\n                                ") + "</h6></span> <hr style=\"color: #fff;\" data-v-a865c0b8> <br data-v-a865c0b8> <p style=\"margin-top: -10px;\" data-v-a865c0b8><b data-v-a865c0b8>Feeder Band:</b>" + _vm._ssrEscape("\n                                " + _vm._s(_vm.work_order.feederBand) + "\n                            ") + "</p> <p style=\"margin-top: -10px;\" data-v-a865c0b8><b data-v-a865c0b8>Fault Type:</b>" + _vm._ssrEscape("\n                                " + _vm._s(_vm.work_order.faultType) + "\n                            ") + "</p> <p style=\"margin-top: -10px;\" data-v-a865c0b8><b data-v-a865c0b8>Fault Category:</b>" + _vm._ssrEscape("\n                                " + _vm._s(_vm.work_order.faultCategory) + "\n                            ") + "</p> <p style=\"margin-top: -10px;\" data-v-a865c0b8><b data-v-a865c0b8>Asset Name:</b>" + _vm._ssrEscape("\n                                " + _vm._s(_vm.work_order.assetName) + "\n                            ") + "</p> <p style=\"margin-top: -10px;\" data-v-a865c0b8><b data-v-a865c0b8>Technical Lead:</b>" + _vm._ssrEscape("\n                                " + _vm._s(_vm.work_order.currentTechnicalLead) + "\n                            ") + "</p> <p style=\"margin-top: -10px;\" data-v-a865c0b8><b data-v-a865c0b8>Current BU:</b>" + _vm._ssrEscape("\n                                " + _vm._s(_vm.work_order.currentBu) + "\n                            ") + "</p> <p style=\"margin-top: -10px;\" data-v-a865c0b8><b data-v-a865c0b8>Current UT:</b>" + _vm._ssrEscape("\n                                " + _vm._s(_vm.work_order.currentUt) + "\n                            ") + "</p> <p style=\"margin-top: -10px;\" data-v-a865c0b8><b data-v-a865c0b8>DT:</b>" + _vm._ssrEscape("\n                                " + _vm._s(_vm.work_order.dt) + "\n                            ") + "</p> <p style=\"margin-top: -10px;\" data-v-a865c0b8><b data-v-a865c0b8>DT N0:</b>" + _vm._ssrEscape("\n                                " + _vm._s(_vm.work_order.dtNo) + "\n                            ") + "</p> <p style=\"margin-top: -10px;\" data-v-a865c0b8><b data-v-a865c0b8>Fault Operations:</b>" + _vm._ssrEscape("\n                                " + _vm._s(_vm.work_order.faultOperations) + "\n                            ") + "</p> <p style=\"margin-top: -10px;\" data-v-a865c0b8><b data-v-a865c0b8>Severity:</b>" + _vm._ssrEscape("\n                                " + _vm._s(_vm.work_order.severity) + "\n                            ") + "</p> <br data-v-a865c0b8> <p style=\"margin-top: -30px;\" data-v-a865c0b8><b data-v-a865c0b8>Status:</b> <b class=\"red-text\" data-v-a865c0b8>" + _vm._ssrEscape("\n                                    " + _vm._s(_vm.work_order.status) + "\n                                ") + "</b></p></div></div> " + (_vm.work_order.reassignFlag == 'N' && _vm.work_order.requisitionStatus != 'INITIATED' && _vm.work_order.requisitionStatus != 'APPROVED' ? "<div class=\"row\" data-v-a865c0b8><div class=\"col s6\" data-v-a865c0b8><button class=\"btn green white-text btn-large\" style=\"background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;\" data-v-a865c0b8>\n                                Start Work\n                            </button></div> <div class=\"col s6\" data-v-a865c0b8><button class=\"btn orange white-text btn-large\" style=\"background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;\" data-v-a865c0b8>\n                                Reassign\n                            </button></div></div>" : "<!---->") + " " + (_vm.work_order.requisitionStatus == 'APPROVED' && _vm.work_order.materialAccepted != 'Y' ? "<div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><button class=\"btn green white-text btn-large col s12\" style=\"background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;\" data-v-a865c0b8>\n                                Accept Material\n                            </button></div></div>" : "<!---->") + " " + (_vm.work_order.materialAccepted == 'Y' && _vm.work_order.reassignFlag !== 'Y' ? "<div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><button class=\"btn green white-text btn-large col s12\" style=\"background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;\" data-v-a865c0b8>\n                                Complete Work\n                            </button></div></div>" : "<!---->") + " <div class=\"row\" data-v-a865c0b8>" + (_vm.work_order.reassignFlag == 'Y' ? "<div class=\"col s12\" data-v-a865c0b8><b class=\"red-text\" data-v-a865c0b8>\n                                This work order has been reassigned and cannot be worked on.\n                            </b></div>" : "<!---->") + "</div> <div class=\"row\" data-v-a865c0b8>" + (_vm.work_order.requisitionStatus == 'INITIATED' ? "<div class=\"col s12\" data-v-a865c0b8><b class=\"red-text\" data-v-a865c0b8>\n                                This work order has a pending material requisition.\n                            </b></div>" : "<!---->") + "</div></div></div></div></div>" : "<!---->") + " " + (_vm.hideworkToolsModal == false ? "<div class=\"row\" data-v-a865c0b8><div class=\"row\" data-v-a865c0b8><div class=\"col s12 center\" data-v-a865c0b8><div class=\"card-panel white black-text left-align\" style=\"padding: 15px; border-radius: 10px;\" data-v-a865c0b8><div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><span class=\"red-text center\" data-v-a865c0b8><h6 style=\"font-weight: 800;\" data-v-a865c0b8>\n                                    Do you need materials?\n                                </h6></span></div></div> <div class=\"row center\" style=\"margin-top: 20px;\" data-v-a865c0b8><div class=\"col s6\" data-v-a865c0b8><button class=\"btn green white-text btn-large\" style=\"background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;\" data-v-a865c0b8>\n                                Yes\n                            </button></div> <div class=\"col s6\" data-v-a865c0b8><button class=\"btn orange white-text btn-large\" style=\"background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;\" data-v-a865c0b8>\n                                No\n                            </button></div></div></div></div></div></div>" : "<!---->") + " " + (_vm.hideAcceptMaterialModal == false ? "<div class=\"row\" data-v-a865c0b8><div class=\"row\" data-v-a865c0b8><div class=\"col s12 center\" data-v-a865c0b8><div class=\"card-panel white black-text left-align\" style=\"padding: 15px; border-radius: 10px;\" data-v-a865c0b8><div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><span class=\"red-text center\" data-v-a865c0b8><h6 style=\"font-weight: 800;\" data-v-a865c0b8>\n                                    Has work material been received?\n                                </h6></span></div></div> <div class=\"row center\" style=\"margin-top: 20px;\" data-v-a865c0b8><div class=\"col s6\" data-v-a865c0b8><button class=\"btn green white-text btn-large\" style=\"background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;\" data-v-a865c0b8>\n                                Yes\n                            </button></div> <div class=\"col s6\" data-v-a865c0b8><button class=\"btn orange white-text btn-large\" style=\"background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;\" data-v-a865c0b8>\n                                No\n                            </button></div></div></div></div></div></div>" : "<!---->") + " <div" + _vm._ssrClass("row", {
    'hide': _vm.hideNoworkToolsForm
  }) + " data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h5 class=\"center\" data-v-a865c0b8>\n                Upload Materials Used\n            </h5> <form style=\"margin-top: 20px\" data-v-a865c0b8><div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h6 class=\"red-text\" data-v-a865c0b8>\n                            Material 1 (*)\n                        </h6> <button class=\"btn red btn-large\" data-v-a865c0b8><i class=\"material-icons white-text\" data-v-a865c0b8>camera_alt</i></button></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><img id=\"output-pic-of-mat1\" class=\"responsive-img\" data-v-a865c0b8></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h6 class=\"red-text\" data-v-a865c0b8>\n                            Material 2 (*)\n                        </h6> <button class=\"btn red btn-large\" data-v-a865c0b8><i class=\"material-icons white-text\" data-v-a865c0b8>camera_alt</i></button></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><img id=\"output-pic-of-mat2\" class=\"responsive-img\" data-v-a865c0b8></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h6 class=\"red-text\" data-v-a865c0b8>\n                            Material 3 (*)\n                        </h6> <button class=\"btn red btn-large\" data-v-a865c0b8><i class=\"material-icons white-text\" data-v-a865c0b8>camera_alt</i></button></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><img id=\"output-pic-of-mat3\" class=\"responsive-img\" data-v-a865c0b8></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h6 class=\"red-text\" data-v-a865c0b8>\n                            Material 4 (*)\n                        </h6> <button class=\"btn red btn-large\" data-v-a865c0b8><i class=\"material-icons white-text\" data-v-a865c0b8>camera_alt</i></button></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><img id=\"output-pic-of-mat4\" class=\"responsive-img\" data-v-a865c0b8></div></div> <div class=\"row center\" data-v-a865c0b8></div> <div class=\"row center safe-area-bottom\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><button" + _vm._ssrAttr("disabled", _vm.disabled_bool) + " class=\"btn btn-large red col s12\" style=\"margin-top: 20px;\" data-v-a865c0b8>Completed</button></div></div></form></div></div> "), _vm._ssrNode("<div" + _vm._ssrClass("row", {
    'hide': _vm.hideYesworkToolsForm
  }) + " data-v-a865c0b8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-a865c0b8>", "</div>", [_vm._ssrNode("<h5 class=\"center\" data-v-a865c0b8>\n                Material Requisition\n            </h5> "), _vm._ssrNode("<form style=\"margin-top: 20px\" data-v-a865c0b8>", "</form>", [_vm._ssrNode("<div class=\"row on-top\" style=\"margin-bottom: 30px;\" data-v-a865c0b8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-a865c0b8>", "</div>", [_c('CustomSelect', {
    attrs: {
      "options": _vm.items,
      "default": 'Select an item'
    },
    model: {
      value: _vm.selectedItem,
      callback: function ($$v) {
        _vm.selectedItem = $$v;
      },
      expression: "selectedItem"
    }
  })], 1), _vm._ssrNode(" <div class=\"col s12\" style=\"margin-top: 60px;\" data-v-a865c0b8><input type=\"text\" placeholder=\"Quantity\" onkeypress=\"return event.charCode >= 48 && event.charCode <= 57\"" + _vm._ssrAttr("value", _vm.quantity) + " class=\"input-field\" data-v-a865c0b8></div>")], 2), _vm._ssrNode(" <div class=\"row\" style=\"margin-top: 10px;\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><button class=\"btn btn-large waves-effect waves-light red col s12\" data-v-a865c0b8>\n                            Add\n                        </button></div></div> <div class=\"row\" style=\"margin-top: 30px;\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8>" + (_vm.selectedList.length > 0 ? "<ul class=\"collection\" data-v-a865c0b8>" + _vm._ssrList(_vm.selectedList, function (item, index) {
    return "<li class=\"collection-item\" data-v-a865c0b8>" + _vm._ssrEscape("\n                                " + _vm._s(item.description) + "\n                                - (" + _vm._s(item.quantity) + ")\n\n                                ") + " <a href=\"#!\" class=\"secondary-content\" data-v-a865c0b8><i class=\"material-icons red-text\" data-v-a865c0b8>close</i></a></li>";
  }) + "</ul>" : "<!---->") + "</div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h6 class=\"red-text\" data-v-a865c0b8>\n                            Material 1 (*)\n                        </h6> <button class=\"btn red btn-large\" data-v-a865c0b8><i class=\"material-icons white-text\" data-v-a865c0b8>camera_alt</i></button></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><img id=\"output-pic-of-mat1-yes\" class=\"responsive-img\" data-v-a865c0b8></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h6 class=\"red-text\" data-v-a865c0b8>\n                            Material 2 (*)\n                        </h6> <button class=\"btn red btn-large\" data-v-a865c0b8><i class=\"material-icons white-text\" data-v-a865c0b8>camera_alt</i></button></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><img id=\"output-pic-of-mat2-yes\" class=\"responsive-img\" data-v-a865c0b8></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h6 class=\"red-text\" data-v-a865c0b8>\n                            Material 3 (*)\n                        </h6> <button class=\"btn red btn-large\" data-v-a865c0b8><i class=\"material-icons white-text\" data-v-a865c0b8>camera_alt</i></button></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><img id=\"output-pic-of-mat3-yes\" class=\"responsive-img\" data-v-a865c0b8></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h6 class=\"red-text\" data-v-a865c0b8>\n                            Material 4 (*)\n                        </h6> <button class=\"btn red btn-large\" data-v-a865c0b8><i class=\"material-icons white-text\" data-v-a865c0b8>camera_alt</i></button></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><img id=\"output-pic-of-mat4-yes\" class=\"responsive-img\" data-v-a865c0b8></div></div> <div class=\"row center\" data-v-a865c0b8></div> <div class=\"row center safe-area-bottom\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><button" + _vm._ssrAttr("disabled", _vm.disabled_bool) + " class=\"btn btn-large red col s12\" style=\"margin-top: 20px;\" data-v-a865c0b8>Submit</button></div></div>")], 2)], 2)]), _vm._ssrNode(" <div" + _vm._ssrClass("row", {
    'hide': _vm.hideWorkCompleteForm
  }) + " data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h5 class=\"center\" data-v-a865c0b8>\n                Work Completed - Upload Materials Used\n            </h5> <form style=\"margin-top: 20px\" data-v-a865c0b8><div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h6 class=\"red-text\" data-v-a865c0b8>\n                            Material 1 (*)\n                        </h6> <button class=\"btn red btn-large\" data-v-a865c0b8><i class=\"material-icons white-text\" data-v-a865c0b8>camera_alt</i></button></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><img id=\"output-pic-of-mat1-complete\" class=\"responsive-img\" data-v-a865c0b8></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h6 class=\"red-text\" data-v-a865c0b8>\n                            Material 2 (*)\n                        </h6> <button class=\"btn red btn-large\" data-v-a865c0b8><i class=\"material-icons white-text\" data-v-a865c0b8>camera_alt</i></button></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><img id=\"output-pic-of-mat2-complete\" class=\"responsive-img\" data-v-a865c0b8></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h6 class=\"red-text\" data-v-a865c0b8>\n                            Material 3 (*)\n                        </h6> <button class=\"btn red btn-large\" data-v-a865c0b8><i class=\"material-icons white-text\" data-v-a865c0b8>camera_alt</i></button></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><img id=\"output-pic-of-mat3-complete\" class=\"responsive-img\" data-v-a865c0b8></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h6 class=\"red-text\" data-v-a865c0b8>\n                            Material 4 (*)\n                        </h6> <button class=\"btn red btn-large\" data-v-a865c0b8><i class=\"material-icons white-text\" data-v-a865c0b8>camera_alt</i></button></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><img id=\"output-pic-of-mat4-complete\" class=\"responsive-img\" data-v-a865c0b8></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12 input-field\" data-v-a865c0b8><textarea name id placeholder=\"Further Remarks\" class=\"materialize-textarea\" data-v-a865c0b8>" + _vm._ssrEscape(_vm._s(_vm.further_remarks)) + "</textarea></div></div> <div class=\"row\" data-v-a865c0b8><div class=\"col s12 input-field\" data-v-a865c0b8><textarea name id placeholder=\"Reason for defaulting SLA (*)\" class=\"materialize-textarea\" data-v-a865c0b8>" + _vm._ssrEscape(_vm._s(_vm.sla_comments)) + "</textarea></div></div> <div class=\"row center\" data-v-a865c0b8></div> <div class=\"row center safe-area-bottom\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><button" + _vm._ssrAttr("disabled", _vm.disabled_bool) + " class=\"btn btn-large red col s12\" style=\"margin-top: 20px;\" data-v-a865c0b8>Complete work</button></div></div></form></div></div> "), _vm.hidereasignWorkOrder == false ? _vm._ssrNode("<div class=\"row\" data-v-a865c0b8>", "</div>", [_vm._ssrNode("<div class=\"card-panel white black-text left-align\" style=\"padding: 15px; border-radius: 10px;\" data-v-a865c0b8>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><h5 data-v-a865c0b8>\n                        Reassign Work Order\n                    </h5></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-a865c0b8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-a865c0b8>", "</div>", [_c('CustomSelect', {
    attrs: {
      "options": ['ABULE-EGBA', 'AKOWONJO', 'IKEJA', 'IKORODU', 'OSHODI', 'SHOMOLU', 'CHQ'],
      "default": 'Select BU'
    },
    model: {
      value: _vm.business_unit,
      callback: function ($$v) {
        _vm.business_unit = $$v;
      },
      expression: "business_unit"
    }
  })], 1)]), _vm._ssrNode(" <br data-v-a865c0b8> "), _vm._ssrNode("<div class=\"row\" data-v-a865c0b8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-a865c0b8>", "</div>", [_c('CustomSelect', {
    attrs: {
      "options": _vm.undertakingOptions,
      "default": 'Select UT'
    },
    model: {
      value: _vm.undertaking_one,
      callback: function ($$v) {
        _vm.undertaking_one = $$v;
      },
      expression: "undertaking_one"
    }
  })], 1)]), _vm._ssrNode(" <div class=\"row\" style=\"margin-top: 30px;\" data-v-a865c0b8><div class=\"col s12\" data-v-a865c0b8><button class=\"btn red white-text col s12 btn-large\" style=\"border-radius: 7px; margin-top: -10px; margin-bottom: 0px;\" data-v-a865c0b8>\n                        Submit\n                    </button></div></div>")], 2)]) : _vm._e(), _vm._ssrNode(" "), _vm.hideSuccess == false ? _vm._ssrNode("<div class=\"row\" data-v-a865c0b8>", "</div>", [_vm._ssrNode("<div class=\"card-panel white black-text left-align\" style=\"padding: 15px; border-radius: 10px;\" data-v-a865c0b8>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-a865c0b8><div class=\"col s12 center\" data-v-a865c0b8><img" + _vm._ssrAttr("src", __webpack_require__(166)) + " alt class=\"responsive-img\" style=\"max-height: 100px;\" data-v-a865c0b8></div></div> <div class=\"row\" style=\"margin-top: 30px;\" data-v-a865c0b8><div class=\"col s12 green-text\" data-v-a865c0b8><b data-v-a865c0b8>Work Order Reassigned Successfully!</b> <br data-v-a865c0b8></div></div> "), _vm._ssrNode("<div class=\"row\" style=\"margin-top: 30px;\" data-v-a865c0b8>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-a865c0b8>", "</div>", [_c('nuxt-link', {
    staticClass: "btn green white-text col s12 btn-large",
    staticStyle: {
      "background": "#fff",
      "border-radius": "7px",
      "margin-top": "-10px",
      "margin-bottom": "0px"
    },
    attrs: {
      "to": "../menu"
    }
  }, [_vm._v("\n                        Done\n                    ")])], 1)])], 2)]) : _vm._e()], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/work_order_details.vue?vue&type=template&id=a865c0b8&scoped=true

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/work_order_details.vue?vue&type=script&lang=js
var work_order_detailsvue_type_script_lang_js = __webpack_require__(72);

// CONCATENATED MODULE: ./pages/work_order_details.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_work_order_detailsvue_type_script_lang_js = (work_order_detailsvue_type_script_lang_js["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/work_order_details.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(167)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_work_order_detailsvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "a865c0b8",
  "3b74ba4a"
  
)

/* harmony default export */ var work_order_details = __webpack_exports__["default"] = (component.exports);

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

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {/* harmony import */ var _js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var _components_CustomSelect_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(44);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(39);
/* harmony import */ var browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(browser_image_compression__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(40);
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_capacitor_camera__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var _ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__);





/* harmony default export */ __webpack_exports__["a"] = ({
  layout: 'admin_main',
  data() {
    return {
      work_order: [],
      work_order_id: '',
      work_order_current_bu: '',
      fault_id: '',
      random_id: '',
      mat1: '',
      mat2: '',
      mat3: '',
      mat4: '',
      lat: '',
      long: '',
      location: '',
      fault_category: '',
      // v-model (will store the 'name' string, e.g., "BROKEN_POLE")
      faultCategoryOptions: [],
      // Options for CustomSelect (array of 'name' strings)
      rawFaultCategories: [],
      // Stores the full API response array (objects with id, name, etc.)
      selectedFaultCategoryId: null,
      undertakingOptions: [],
      fullname: '',
      name: '',
      email: '',
      message: '',
      hideForm: true,
      disabled_bool: false,
      further_remarks: '',
      sla_comments: '',
      quantity: '',
      selectedItem: "",
      items: [],
      selectedList: [],
      materialList: [],
      hideworkOrderDetails: false,
      hideworkToolsModal: true,
      hideAcceptMaterialModal: true,
      hideNoworkToolsForm: true,
      hideYesworkToolsForm: true,
      hidereasignWorkOrder: true,
      hideSuccess: true,
      hideWorkCompleteForm: true,
      business_unit: '',
      undertaking_one: '',
      scheduleList: []
    };
  },
  watch: {
    // Watch for changes in the Business Unit selection
    async business_unit(newBu, oldBu) {
      // Only proceed if a valid BU is selected (not empty or default string)
      if (newBu && newBu !== 'Select BU') {
        // Reset UT selection and options before loading new ones
        this.undertaking_one = '';
        this.undertakingOptions = [];
        M.toast({
          html: `Fetching Undertaking Units for ${newBu}...`
        });
        const utList = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* getUndertakingUnits */ "r"])(newBu);
        if (utList.length > 0) {
          // Assuming the API returns an array of strings like: ["ABORU", "ABULE-ODU", ...]
          this.undertakingOptions = utList;
          M.toast({
            html: 'Undertaking Units loaded successfully!',
            classes: 'green'
          });

          // You may need to re-initialize the Materialize Select after options change
          this.$nextTick(() => {
            window.M.FormSelect.init(document.querySelectorAll('select'));
          });
        } else {
          M.toast({
            html: 'No Undertaking Units found for this BU.',
            classes: 'orange'
          });
        }
      } else {
        // If BU is reset, clear UT options
        this.undertakingOptions = [];
        this.undertaking_one = '';
      }
    },
    fault_category(newCategoryName) {
      if (newCategoryName) {
        // Find the corresponding object in the full list
        const selectedCategory = this.rawFaultCategories.find(cat => cat.name === newCategoryName);

        // Save the ID!
        this.selectedFaultCategoryId = selectedCategory ? selectedCategory.id : null;
        console.log(`Selected Fault Category ID: ${this.selectedFaultCategoryId}`);
      } else {
        this.selectedFaultCategoryId = null;
      }
    }
  },
  methods: {
    async fetchFaultCategories() {
      M.toast({
        html: `Fetching Fault Categories...`
      });
      const categories = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* getFaultCategories */ "l"])();
      if (categories.length > 0) {
        // Store the full objects for ID lookup later
        this.rawFaultCategories = categories;

        // Extract only the 'name' strings for the CustomSelect options
        this.faultCategoryOptions = categories.map(category => category.name);
        this.$nextTick(() => {
          window.M.FormSelect.init(document.querySelectorAll('select'));
        });
      } else {
        M.toast({
          html: 'No Fault Categories found.',
          classes: 'orange'
        });
      }
    },
    async fetchWorkOrderDetails() {
      // 1. Get the ID from the URL query
      const workOrderId = this.$route.query.id;
      if (!workOrderId) {
        M.toast({
          html: `<b class="red-text">Error: Work Order ID not found in URL.</b>`
        });
        return;
      }

      // 2. Call the new API function
      const details = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* getFaultTicketDetailsById */ "m"])(workOrderId);
      if (details) {
        // The API for getById usually returns a single object, 
        // but your template uses v-for="value in work_order".
        // We wrap the single object in an array for compatibility with the template.
        this.work_order = details;
        this.work_order_id = details.workOrder;
        this.work_order_current_bu = details.currentBu;
        this.fault_id = details.id;
      } else {
        this.work_order = [];
      }
    },
    async fetchMaterials(bu) {
      const data = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* getMaterialsByBU */ "o"])(bu);
      this.materialList = data;
      // Format the display for the dropdown: "Description (Stock: Qty)"
      this.items = data.map(m => `${m.description} (Stock: ${m.quantity})`);
    },
    addItem() {
      if (!this.selectedItem || !this.quantity) {
        M.toast({
          html: "Please select an item and enter quantity",
          classes: "orange"
        });
        return;
      }

      // 1. Find the original object from the materialList based on the selected string
      const originalMaterial = this.materialList.find(m => this.selectedItem.startsWith(m.description));
      if (!originalMaterial) return;

      // 2. Validation: Check if requested quantity > stock
      const reqQty = parseInt(this.quantity);
      if (reqQty > originalMaterial.quantity) {
        M.toast({
          html: `Error: Only ${originalMaterial.quantity} in stock!`,
          classes: "red"
        });
        return;
      }

      // 3. Validation: Prevent duplicate adds
      if (this.selectedList.some(m => m.item === originalMaterial.item)) {
        M.toast({
          html: "Item already in list!",
          classes: "orange"
        });
        return;
      }

      // 4. Construct the stockData object for the payload
      const stockItem = {
        item: originalMaterial.item,
        description: originalMaterial.description,
        quantity: reqQty,
        quantityInStock: originalMaterial.quantity,
        store: originalMaterial.store
      };
      this.selectedList.push(stockItem);

      // Reset fields
      this.selectedItem = '';
      this.quantity = '';
      M.toast({
        html: "Item added to requisition",
        classes: "green"
      });
    },
    removeItem(index) {
      this.selectedList.splice(index, 1);
      M.toast({
        html: "Item removed",
        classes: "orange"
      });
    },
    reassign() {
      this.hideworkOrderDetails = true;
      this.hidereasignWorkOrder = false;
    },
    noWorkTools() {
      this.hideworkToolsModal = true;
      this.hideNoworkToolsForm = false;
    },
    async yesWorkTools() {
      const initiate = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* materialRequiredSignal */ "s"])(this.fault_id);
      M.toast({
        html: '<b class"black-text">Please wait...</b>',
        classes: 'black'
      });
      if (initiate.materialRequired === 'Y') {
        M.toast({
          html: 'Material Requisition is initiated for this Work Order.',
          classes: 'orange'
        });
        this.hideworkToolsModal = true;
        this.hideYesworkToolsForm = false;
      } else {
        M.toast({
          html: 'There was an error initiating Material Requisition.',
          classes: 'red'
        });
        this.hideworkToolsModal = false;
        this.hideYesworkToolsForm = true;
      }
    },
    async saveReassign(id, techLead) {
      // 1. Validate inputs
      if (!this.business_unit || !this.undertaking_one || this.business_unit === 'Select BU' || this.undertaking_one === 'Select UT') {
        M.toast({
          html: 'Please select **BU**, **UT**, and **Technical Lead**.',
          classes: 'red'
        });
        return;
      }

      // const faultId = this.getCurrentFaultId();

      if (!id) {
        M.toast({
          html: 'Cannot reassign: Work Order ID is missing.',
          classes: 'red'
        });
        return;
      }

      // 2. Call the Reassign API function
      const result = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* reasignFault */ "t"])(id, this.business_unit, this.undertaking_one, techLead);

      // 3. Check the API result
      if (result && result.statusMsg === "Success") {
        // Adjust 'SUCCESS' based on actual API response structure
        // On Success
        M.toast({
          html: 'Work Order Reassigned Successfully! ✅',
          classes: 'green'
        });
        this.hidereasignWorkOrder = true;
        this.hideSuccess = false;
      } else {
        // On Failure (API returned an error or the status wasn't 'SUCCESS')
        M.toast({
          html: 'Reassignment failed. Please check your network.',
          classes: 'red'
        });
      }
    },
    doYouNeedWorkTools() {
      this.hideworkToolsModal = false;
      this.hideworkOrderDetails = true;
    },
    acceptMaterial() {
      this.hideworkOrderDetails = true;
      this.hideAcceptMaterialModal = false;
    },
    completeWork() {
      this.hideworkOrderDetails = true;
      this.hideWorkCompleteForm = false;
    },
    async yesWorkMaterialReceived() {
      let result = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* acceptMaterial */ "a"])(this.fault_id);
      if (result.statusMsg === 'Success') {
        M.toast({
          html: 'Material Accepted Successfully!',
          classes: 'green'
        });
        this.hideworkOrderDetails = true;
        this.hideAcceptMaterialModal = true;
        this.hideWorkCompleteForm = false;
      } else {
        M.toast({
          html: 'There was an error accepting the material.',
          classes: 'red'
        });
      }
    },
    noWorkMaterialsNotReceived() {
      this.hideworkOrderDetails = false;
      this.hideAcceptMaterialModal = true;
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
    async imagePickerForMaterial_1() {
      console.log('this is the workorderid:', this.work_order_id);
      this.work_order_id = this.work_order_id.trim();
      if (this.work_order_id) {
        let random_str = this.generateRandomString();
        let todays_date = new Date();
        let day = todays_date.getDay();
        let hour = todays_date.getHours();
        let mins = todays_date.getMinutes();
        let seconds = todays_date.getSeconds();
        let millisecs = todays_date.getUTCMilliseconds();
        // console.log(todays_date.getDay());
        // console.log(todays_date.getUTCMilliseconds());
        // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
        // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
        // this.account_number = String(this.account_number)
        this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`;
        this.random_id = String(this.random_id);
        console.log(this.random_id);
        console.log(this.random_id);

        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt
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
        this.doSomethingWithFilesimagePickerForMaterial_1(blob);
      }
    },
    async doSomethingWithFilesimagePickerForMaterial_1(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-mat1');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.mat1 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.mat1);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* uploadImage */ "u"])(this.work_order_id, 'Material_1', this.mat1);
        console.log(xx);
        // if (this.random_id != '') {
        //     this.account_number = ''
        // }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMaterial_2() {
      this.work_order_id = this.work_order_id.trim();
      if (this.work_order_id) {
        let random_str = this.generateRandomString();
        let todays_date = new Date();
        let day = todays_date.getDay();
        let hour = todays_date.getHours();
        let mins = todays_date.getMinutes();
        let seconds = todays_date.getSeconds();
        let millisecs = todays_date.getUTCMilliseconds();
        // console.log(todays_date.getDay());
        // console.log(todays_date.getUTCMilliseconds());
        // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
        // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
        // this.account_number = String(this.account_number)
        this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`;
        this.random_id = String(this.random_id);
        console.log(this.random_id);
        console.log(this.random_id);

        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt
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
        this.doSomethingWithFilesimagePickerForMaterial_2(blob);
      }
    },
    async doSomethingWithFilesimagePickerForMaterial_2(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-mat2');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.mat2 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.mat2);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* uploadImage */ "u"])(this.work_order_id, 'Material_2', this.mat2);
        console.log(xx);
        // if (this.random_id != '') {
        //     this.account_number = ''
        // }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMaterial_3() {
      this.work_order_id = this.work_order_id.trim();
      if (this.work_order_id) {
        let random_str = this.generateRandomString();
        let todays_date = new Date();
        let day = todays_date.getDay();
        let hour = todays_date.getHours();
        let mins = todays_date.getMinutes();
        let seconds = todays_date.getSeconds();
        let millisecs = todays_date.getUTCMilliseconds();
        // console.log(todays_date.getDay());
        // console.log(todays_date.getUTCMilliseconds());
        // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
        // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
        // this.account_number = String(this.account_number)
        this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`;
        this.random_id = String(this.random_id);
        console.log(this.random_id);
        console.log(this.random_id);

        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt
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
        this.doSomethingWithFilesimagePickerForMaterial_3(blob);
      }
    },
    async doSomethingWithFilesimagePickerForMaterial_3(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-mat3');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.mat3 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.mat3);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* uploadImage */ "u"])(this.work_order_id, 'Material_3', this.mat3);
        console.log(xx);
        // if (this.random_id != '') {
        //     this.account_number = ''
        // }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMaterial_4() {
      this.work_order_id = this.work_order_id.trim();
      if (this.work_order_id) {
        let random_str = this.generateRandomString();
        let todays_date = new Date();
        let day = todays_date.getDay();
        let hour = todays_date.getHours();
        let mins = todays_date.getMinutes();
        let seconds = todays_date.getSeconds();
        let millisecs = todays_date.getUTCMilliseconds();
        // console.log(todays_date.getDay());
        // console.log(todays_date.getUTCMilliseconds());
        // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
        // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
        // this.account_number = String(this.account_number)
        this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`;
        this.random_id = String(this.random_id);
        console.log(this.random_id);
        console.log(this.random_id);

        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt
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
        this.doSomethingWithFilesimagePickerForMaterial_4(blob);
      }
    },
    async doSomethingWithFilesimagePickerForMaterial_4(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-mat4');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.mat4 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.mat4);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* uploadImage */ "u"])(this.work_order_id, 'Material_4', this.mat4);
        console.log(xx);
        // if (this.random_id != '') {
        //     this.account_number = ''
        // }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMaterial_1_YES() {
      console.log('this is the workorderid:', this.work_order_id);
      this.work_order_id = this.work_order_id.trim();
      if (this.work_order_id) {
        let random_str = this.generateRandomString();
        let todays_date = new Date();
        let day = todays_date.getDay();
        let hour = todays_date.getHours();
        let mins = todays_date.getMinutes();
        let seconds = todays_date.getSeconds();
        let millisecs = todays_date.getUTCMilliseconds();
        // console.log(todays_date.getDay());
        // console.log(todays_date.getUTCMilliseconds());
        // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
        // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
        // this.account_number = String(this.account_number)
        this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`;
        this.random_id = String(this.random_id);
        console.log(this.random_id);
        console.log(this.random_id);

        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt
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
        this.doSomethingWithFilesimagePickerForMaterial_1_YES(blob);
      }
    },
    async doSomethingWithFilesimagePickerForMaterial_1_YES(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        console.log('checking to see if the id is called');
        const output = document.getElementById('output-pic-of-mat1-yes');
        console.log('here is the output', output);
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.mat1 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.mat1);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* uploadImage */ "u"])(this.work_order_id, 'Material_1', this.mat1);
        console.log(xx);
        // if (this.random_id != '') {
        //     this.account_number = ''
        // }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMaterial_2_YES() {
      this.work_order_id = this.work_order_id.trim();
      if (this.work_order_id) {
        let random_str = this.generateRandomString();
        let todays_date = new Date();
        let day = todays_date.getDay();
        let hour = todays_date.getHours();
        let mins = todays_date.getMinutes();
        let seconds = todays_date.getSeconds();
        let millisecs = todays_date.getUTCMilliseconds();
        // console.log(todays_date.getDay());
        // console.log(todays_date.getUTCMilliseconds());
        // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
        // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
        // this.account_number = String(this.account_number)
        this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`;
        this.random_id = String(this.random_id);
        console.log(this.random_id);
        console.log(this.random_id);

        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt
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
        this.doSomethingWithFilesimagePickerForMaterial_2_YES(blob);
      }
    },
    async doSomethingWithFilesimagePickerForMaterial_2_YES(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-mat2-yes');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.mat2 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.mat2);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* uploadImage */ "u"])(this.work_order_id, 'Material_2', this.mat2);
        console.log(xx);
        // if (this.random_id != '') {
        //     this.account_number = ''
        // }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMaterial_3_YES() {
      this.work_order_id = this.work_order_id.trim();
      if (this.work_order_id) {
        let random_str = this.generateRandomString();
        let todays_date = new Date();
        let day = todays_date.getDay();
        let hour = todays_date.getHours();
        let mins = todays_date.getMinutes();
        let seconds = todays_date.getSeconds();
        let millisecs = todays_date.getUTCMilliseconds();
        // console.log(todays_date.getDay());
        // console.log(todays_date.getUTCMilliseconds());
        // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
        // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
        // this.account_number = String(this.account_number)
        this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`;
        this.random_id = String(this.random_id);
        console.log(this.random_id);
        console.log(this.random_id);

        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt
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
        this.doSomethingWithFilesimagePickerForMaterial_3_YES(blob);
      }
    },
    async doSomethingWithFilesimagePickerForMaterial_3_YES(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-mat3-yes');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.mat3 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.mat3);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* uploadImage */ "u"])(this.work_order_id, 'Material_3', this.mat3);
        console.log(xx);
        // if (this.random_id != '') {
        //     this.account_number = ''
        // }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMaterial_4_YES() {
      this.work_order_id = this.work_order_id.trim();
      if (this.work_order_id) {
        let random_str = this.generateRandomString();
        let todays_date = new Date();
        let day = todays_date.getDay();
        let hour = todays_date.getHours();
        let mins = todays_date.getMinutes();
        let seconds = todays_date.getSeconds();
        let millisecs = todays_date.getUTCMilliseconds();
        // console.log(todays_date.getDay());
        // console.log(todays_date.getUTCMilliseconds());
        // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
        // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
        // this.account_number = String(this.account_number)
        this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`;
        this.random_id = String(this.random_id);
        console.log(this.random_id);
        console.log(this.random_id);

        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt
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
        this.doSomethingWithFilesimagePickerForMaterial_4_YES(blob);
      }
    },
    async doSomethingWithFilesimagePickerForMaterial_4_YES(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-mat4-yes');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.mat4 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.mat4);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* uploadImage */ "u"])(this.work_order_id, 'Material_4', this.mat4);
        console.log(xx);
        // if (this.random_id != '') {
        //     this.account_number = ''
        // }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMaterial_1_complete() {
      console.log('this is the workorderid:', this.work_order_id);
      this.work_order_id = this.work_order_id.trim();
      if (this.work_order_id) {
        let random_str = this.generateRandomString();
        let todays_date = new Date();
        let day = todays_date.getDay();
        let hour = todays_date.getHours();
        let mins = todays_date.getMinutes();
        let seconds = todays_date.getSeconds();
        let millisecs = todays_date.getUTCMilliseconds();
        // console.log(todays_date.getDay());
        // console.log(todays_date.getUTCMilliseconds());
        // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
        // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
        // this.account_number = String(this.account_number)
        this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`;
        this.random_id = String(this.random_id);
        console.log(this.random_id);
        console.log(this.random_id);

        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt
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
        this.doSomethingWithFilesimagePickerForMaterial_1_complete(blob);
      }
    },
    async doSomethingWithFilesimagePickerForMaterial_1_complete(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        console.log('checking to see if the id is called');
        const output = document.getElementById('output-pic-of-mat1-complete');
        console.log('here is the output', output);
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.mat1 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.mat1);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* uploadImage */ "u"])(this.work_order_id, 'Material_1', this.mat1);
        console.log(xx);
        // if (this.random_id != '') {
        //     this.account_number = ''
        // }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMaterial_2_complete() {
      this.work_order_id = this.work_order_id.trim();
      if (this.work_order_id) {
        let random_str = this.generateRandomString();
        let todays_date = new Date();
        let day = todays_date.getDay();
        let hour = todays_date.getHours();
        let mins = todays_date.getMinutes();
        let seconds = todays_date.getSeconds();
        let millisecs = todays_date.getUTCMilliseconds();
        // console.log(todays_date.getDay());
        // console.log(todays_date.getUTCMilliseconds());
        // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
        // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
        // this.account_number = String(this.account_number)
        this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`;
        this.random_id = String(this.random_id);
        console.log(this.random_id);
        console.log(this.random_id);

        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt
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
        this.doSomethingWithFilesimagePickerForMaterial_2_complete(blob);
      }
    },
    async doSomethingWithFilesimagePickerForMaterial_2_complete(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-mat2-complete');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.mat2 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.mat2);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* uploadImage */ "u"])(this.work_order_id, 'Material_2', this.mat2);
        console.log(xx);
        // if (this.random_id != '') {
        //     this.account_number = ''
        // }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMaterial_3_complete() {
      this.work_order_id = this.work_order_id.trim();
      if (this.work_order_id) {
        let random_str = this.generateRandomString();
        let todays_date = new Date();
        let day = todays_date.getDay();
        let hour = todays_date.getHours();
        let mins = todays_date.getMinutes();
        let seconds = todays_date.getSeconds();
        let millisecs = todays_date.getUTCMilliseconds();
        // console.log(todays_date.getDay());
        // console.log(todays_date.getUTCMilliseconds());
        // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
        // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
        // this.account_number = String(this.account_number)
        this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`;
        this.random_id = String(this.random_id);
        console.log(this.random_id);
        console.log(this.random_id);

        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt
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
        this.doSomethingWithFilesimagePickerForMaterial_3_complete(blob);
      }
    },
    async doSomethingWithFilesimagePickerForMaterial_3_complete(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-mat3-complete');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.mat3 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.mat3);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* uploadImage */ "u"])(this.work_order_id, 'Material_3', this.mat3);
        console.log(xx);
        // if (this.random_id != '') {
        //     this.account_number = ''
        // }
      } catch (error) {
        // // console.log(error);
      }
    },
    async imagePickerForMaterial_4_complete() {
      this.work_order_id = this.work_order_id.trim();
      if (this.work_order_id) {
        let random_str = this.generateRandomString();
        let todays_date = new Date();
        let day = todays_date.getDay();
        let hour = todays_date.getHours();
        let mins = todays_date.getMinutes();
        let seconds = todays_date.getSeconds();
        let millisecs = todays_date.getUTCMilliseconds();
        // console.log(todays_date.getDay());
        // console.log(todays_date.getUTCMilliseconds());
        // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
        // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
        // this.account_number = String(this.account_number)
        this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`;
        this.random_id = String(this.random_id);
        console.log(this.random_id);
        console.log(this.random_id);

        // Call the element loader after the app has been rendered the first time
        Object(_ionic_pwa_elements_loader__WEBPACK_IMPORTED_MODULE_4__["defineCustomElements"])(window);
        const image = await _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["Camera"].getPhoto({
          quality: 100,
          allowEditing: false,
          resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraResultType"].Base64,
          source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_3__["CameraSource"].Prompt
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
        this.doSomethingWithFilesimagePickerForMaterial_4_complete(blob);
      }
    },
    async doSomethingWithFilesimagePickerForMaterial_4_complete(event) {
      let imageFileName = this.generateRandomString();
      const imageFile = event;
      const options = {
        maxSizeMB: 0.7,
        initialQuality: 2,
        maxWidthOrHeight: 500,
        useWebWorker: true
      };
      try {
        const output = document.getElementById('output-pic-of-mat4-complete');
        const compressedFile = await browser_image_compression__WEBPACK_IMPORTED_MODULE_2___default()(imageFile, options);
        // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

        // console.log(`${compressedFile.size / 50 / 50} MB`)

        this.mat4 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`);
        console.log(this.mat4);
        if (compressedFile !== null) {
          output.src = URL.createObjectURL(compressedFile);
        }

        // console.log('account number ', this.account_number)
        // console.log('pic_of_cwd ', this.pic_of_cwd)
        // hello()
        var xx = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* uploadImage */ "u"])(this.work_order_id, 'Material_4', this.mat4);
        console.log(xx);
        // if (this.random_id != '') {
        //     this.account_number = ''
        // }
      } catch (error) {
        // // console.log(error);
      }
    },
    // get longitude and latitude
    async printCurrentPosition() {
      const {
        long,
        lat
      } = await Object(_js_modules_mods_js__WEBPACK_IMPORTED_MODULE_0__[/* getCurrentPosition */ "e"])();
      this.long = long;
      this.lat = lat;
      this.location = `${this.long}, ${this.lat}`;
    },
    async submitNoMeterialNeededForm() {
      try {
        this.disabled_bool = true;
        let userID = localStorage.getItem('userId');
        console.log(this.fault_id);
        console.log(this.location);
        console.log(this.work_order_id);
        console.log(userID);
        // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/energyTheft', {
        const rawResponse = await fetch('https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/nomaterialrequired', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.token,
            'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6'
          },
          body: JSON.stringify({
            faultId: this.fault_id,
            location: this.location,
            workOrderId: this.work_order_id,
            userId: userID,
            picMaterial1: this.mat1.name,
            picMaterial2: this.mat2.name,
            picMaterial3: this.mat3.name,
            picMaterial4: this.mat4.name,
            comment: 'Done...'
          })
        });
        const response = await rawResponse.json();
        console.log(response);
        if (response.code == '00') {
          this.hideLoader = true;
          localStorage.setItem('tracking_id', response.trackingId);
          this.$router.push('../sent_tracking');
          localStorage.setItem('service_type', '');
          localStorage.setItem('meter_number', '');
          localStorage.setItem('account_number', '');
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
    },
    async submitNoMeterialRequisitionForm() {
      try {
        this.disabled_bool = true;
        let userID = localStorage.getItem('userId');
        console.log(this.fault_id);
        console.log(this.location);
        console.log(this.work_order_id);
        console.log(userID);
        // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/energyTheft', {
        const rawResponse = await fetch('https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/materialrequisition', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.token,
            'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6'
          },
          body: JSON.stringify({
            faultId: this.fault_id,
            location: this.location,
            workOrderId: this.work_order_id,
            userId: userID,
            stockData: this.selectedList,
            picMaterial1: this.mat1.name,
            picMaterial2: this.mat2.name,
            picMaterial3: this.mat3.name,
            picMaterial4: this.mat4.name,
            comment: 'Done...'
          })
        });
        const response = await rawResponse.json();
        console.log(response);
        if (response.code == '00') {
          this.hideLoader = true;
          localStorage.setItem('tracking_id', response.trackingId);
          this.$router.push('../sent_tracking');
          localStorage.setItem('service_type', '');
          localStorage.setItem('meter_number', '');
          localStorage.setItem('account_number', '');
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
    },
    async submitWorkCompleteForm() {
      try {
        this.disabled_bool = true;
        let userID = localStorage.getItem('userId');
        console.log(this.fault_id);
        console.log(this.location);
        console.log(this.work_order_id);
        console.log(userID);
        // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/energyTheft', {
        const rawResponse = await fetch('https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/workdoneCapture', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.token,
            'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6'
          },
          body: JSON.stringify({
            faultId: this.fault_id,
            location: this.location,
            workOrderId: this.work_order_id,
            userId: userID,
            picMaterial1: this.mat1.name,
            picMaterial2: this.mat2.name,
            picMaterial3: this.mat3.name,
            picMaterial4: this.mat4.name,
            comment: this.further_remarks,
            slaComment: this.sla_comments
          })
        });
        const response = await rawResponse.json();
        console.log(response);
        if (response.code == '00') {
          this.hideLoader = true;
          localStorage.setItem('tracking_id', response.trackingId);
          this.$router.push('../sent_tracking');
          localStorage.setItem('service_type', '');
          localStorage.setItem('meter_number', '');
          localStorage.setItem('account_number', '');
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
  mounted() {
    // Initialize MaterializeCSS Select
    // 3. Call the fetch function when the component is mounted
    this.fetchWorkOrderDetails();

    // Initialize MaterializeCSS Select
    const elems = document.querySelectorAll("select");
    window.M.FormSelect.init(elems);
    M.FormSelect.init(document.querySelectorAll('select'));
    localStorage.setItem('service_type', '');
    localStorage.setItem('meter_number', '');

    // this.fetchFaultCategories();
    this.printCurrentPosition();
    this.fetchMaterials(this.work_order_current_bu);
  },
  created() {

    // this.getFullname()
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(38)["URL"]))

/***/ })

};;
//# sourceMappingURL=work_order_details.js.map