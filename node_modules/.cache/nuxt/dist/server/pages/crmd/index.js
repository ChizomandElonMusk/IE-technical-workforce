exports.ids = [12];
exports.modules = {

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/crmd/index.vue?vue&type=template&id=27e9cd68&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-27e9cd68>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-27e9cd68>", "</div>", [_c('nuxt-link', {
    staticClass: "red white-text btn",
    attrs: {
      "to": "../dashboard_ie_force"
    }
  }, [_vm._v("\n                Back \n            ")]), _vm._ssrNode(" <b class=\"grey-text btn disabled\" data-v-27e9cd68>CRMD</b>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-27e9cd68>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-27e9cd68>", "</div>", [_vm._ssrNode("<div class=\"col s12 center\" data-v-27e9cd68>", "</div>", [_vm._ssrNode("<table class=\"striped\" data-v-27e9cd68>", "</table>", [_vm._ssrNode("<tbody data-v-27e9cd68>", "</tbody>", [_vm.hasAccountReactivation == true ? _vm._ssrNode("<tr data-v-27e9cd68>", "</tr>", [_vm._ssrNode("<td data-v-27e9cd68>", "</td>", [_c('nuxt-link', {
    attrs: {
      "to": "../crmd/account_reactivation"
    }
  }, [_vm._v("\n                            Account Reactivation\n                        ")])], 1)]) : _vm._e(), _vm._ssrNode(" "), _vm.hasAccountSuspension == true ? _vm._ssrNode("<tr data-v-27e9cd68>", "</tr>", [_vm._ssrNode("<td data-v-27e9cd68>", "</td>", [_c('nuxt-link', {
    attrs: {
      "to": "../crmd/account_suspension"
    }
  }, [_vm._v("\n                            Account Suspension\n                        ")])], 1)]) : _vm._e(), _vm._ssrNode(" "), _vm.hasSwtichToDormant == true ? _vm._ssrNode("<tr data-v-27e9cd68>", "</tr>", [_vm._ssrNode("<td data-v-27e9cd68>", "</td>", [_c('nuxt-link', {
    attrs: {
      "to": "../crmd/switch_to_dormant"
    }
  }, [_vm._v("\n                            Switch to Dormant\n                        ")])], 1)]) : _vm._e(), _vm._ssrNode(" "), _vm.hasSwtichToQuantitative == true ? _vm._ssrNode("<tr data-v-27e9cd68>", "</tr>", [_vm._ssrNode("<td data-v-27e9cd68>", "</td>", [_c('nuxt-link', {
    attrs: {
      "to": "../crmd/switch_to_quantitative"
    }
  }, [_vm._v("\n                            Switch to Quantitative\n                        ")])], 1)]) : _vm._e(), _vm._ssrNode(" "), _vm.hasSwtichToActualRead == true ? _vm._ssrNode("<tr data-v-27e9cd68>", "</tr>", [_vm._ssrNode("<td data-v-27e9cd68>", "</td>", [_c('nuxt-link', {
    attrs: {
      "to": "../crmd/switch_to_actual_read"
    }
  }, [_vm._v("\n                            Switch to Actual Read\n                        ")])], 1)]) : _vm._e(), _vm._ssrNode(" "), _vm.hasCorrectionDials == true ? _vm._ssrNode("<tr data-v-27e9cd68>", "</tr>", [_vm._ssrNode("<td data-v-27e9cd68>", "</td>", [_c('nuxt-link', {
    attrs: {
      "to": "../crmd/correction_of_dials"
    }
  }, [_vm._v("\n                            Correction of Dials\n                        ")])], 1)]) : _vm._e(), _vm._ssrNode(" "), _vm.hasCorrectionLarPar == true ? _vm._ssrNode("<tr data-v-27e9cd68>", "</tr>", [_vm._ssrNode("<td data-v-27e9cd68>", "</td>", [_c('nuxt-link', {
    attrs: {
      "to": "../crmd/correction_of_lar_par"
    }
  }, [_vm._v("\n                            Correction of LAR & PAR\n                        ")])], 1)]) : _vm._e()], 2)])])])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/crmd/index.vue?vue&type=template&id=27e9cd68&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/crmd/index.vue?vue&type=script&lang=js
/* harmony default export */ var crmdvue_type_script_lang_js = ({
  layout: 'admin_main',
  data() {
    return {
      vfirstname: '',
      vlastname: '',
      vemail: '',
      vcompany: '',
      vphone: '',
      purposeOfVisit: '',
      meetingDate: '',
      meetingTime: '',
      user_id: '',
      host_name: '',
      currentDate: '',
      name: '',
      email: '',
      message: '',
      scheduleList: [],
      permissions: []
    };
  },
  computed: {
    hasCorrectionLarPar() {
      return this.permissions.includes('CORRECTION_OF_LAR_PAR');
    },
    hasCorrectionDials() {
      return this.permissions.includes('CORRECTION_OF_DIALS');
    },
    hasSwtichToActualRead() {
      return this.permissions.includes('SWITCH_TO_ACTUALREAD');
    },
    hasSwtichToQuantitative() {
      return this.permissions.includes('SWITCH_TO_QUANTITATIVE');
    },
    hasSwtichToDormant() {
      return this.permissions.includes('SWITCH_TO_DORMANT');
    },
    hasAccountSuspension() {
      return this.permissions.includes('ACCOUNT_SUSPENSION');
    },
    hasAccountReactivation() {
      return this.permissions.includes('ACCOUNT_REACTIVATION');
    }
  },
  methods: {},
  mounted() {
    this.permissions = localStorage.getItem('forms');
  },
  created() {}
});
// CONCATENATED MODULE: ./pages/crmd/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_crmdvue_type_script_lang_js = (crmdvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/crmd/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_crmdvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "27e9cd68",
  "9882629c"
  
)

/* harmony default export */ var crmd = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map