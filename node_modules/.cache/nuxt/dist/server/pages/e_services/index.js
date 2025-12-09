exports.ids = [25];
exports.modules = {

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/e_services/index.vue?vue&type=template&id=9121e9f0&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-9121e9f0>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-9121e9f0>", "</div>", [_c('nuxt-link', {
    staticClass: "red white-text btn",
    attrs: {
      "to": "../ie_force"
    }
  }, [_vm._v("\n                Back \n            ")]), _vm._ssrNode(" <b class=\"grey-text btn disabled\" data-v-9121e9f0>IE FORCE</b>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-9121e9f0>", "</div>", [_vm._ssrNode("<div class=\"col s12 center\" data-v-9121e9f0><a href=\"https://www.ie-payments.com/pay-bill\" target=\"_blank\" data-v-9121e9f0><div class=\"card-panel\" style=\"background: linear-gradient(to right, #E75309, #C60606);\" data-v-9121e9f0><span class=\"white-text\" data-v-9121e9f0><i class=\"material-icons\" data-v-9121e9f0>folder_open</i> <h6 data-v-9121e9f0>Bill Payment</h6></span></div></a></div> "), _vm._ssrNode("<div class=\"col s12 center\" data-v-9121e9f0>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/e_services/payment_history"
    }
  }, [_c('div', {
    staticClass: "card-panel",
    staticStyle: {
      "background": "linear-gradient(to right, #E75309, #C60606)"
    }
  }, [_c('span', {
    staticClass: "white-text"
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("folder_open")]), _vm._v(" "), _c('h6', [_vm._v("Payment History")])])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col s12 center\" data-v-9121e9f0>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/e_services/billing_history"
    }
  }, [_c('div', {
    staticClass: "card-panel",
    staticStyle: {
      "background": "linear-gradient(to right, #E75309, #C60606)"
    }
  }, [_c('span', {
    staticClass: "white-text"
  }, [_c('i', {
    staticClass: "material-icons"
  }, [_vm._v("folder_open")]), _vm._v(" "), _c('h6', [_vm._v("Billing History")])])])])], 1)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/e_services/index.vue?vue&type=template&id=9121e9f0&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/e_services/index.vue?vue&type=script&lang=js
/* harmony default export */ var e_servicesvue_type_script_lang_js = ({
  layout: 'admin_main',
  data() {
    return {
      fullname: '',
      name: '',
      email: '',
      message: '',
      scheduleList: []
    };
  },
  methods: {
    logOut() {
      if (false) {}
    },
    async getFullname() {
      // this.fullname = localStorage.getItem('fullname')
    }
  },
  mounted() {
    localStorage.setItem('service_type', '');
    localStorage.setItem('meter_number', '');
  },
  created() {

    // this.getFullname()
  }
});
// CONCATENATED MODULE: ./pages/e_services/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_e_servicesvue_type_script_lang_js = (e_servicesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/e_services/index.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_e_servicesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "9121e9f0",
  "5d83a024"
  
)

/* harmony default export */ var e_services = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map