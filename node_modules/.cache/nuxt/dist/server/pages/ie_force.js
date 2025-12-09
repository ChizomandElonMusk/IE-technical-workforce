exports.ids = [33];
exports.modules = {

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/forms.73f2596.svg";

/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/history.d57035c.svg";

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/assigned_dt.fefd155.svg";

/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/e_service.7175cd3.svg";

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ie_force.vue?vue&type=template&id=dd68f0d2&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-dd68f0d2>", "</div>", [_vm._ssrNode("<div class=\"col s12\" data-v-dd68f0d2>", "</div>", [_c('nuxt-link', {
    staticClass: "red white-text btn",
    attrs: {
      "to": "./menu"
    }
  }, [_vm._v("\n                Back \n            ")]), _vm._ssrNode(" <b class=\"grey-text btn disabled\" data-v-dd68f0d2>IE FORCE</b>")], 2)]), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-dd68f0d2>", "</div>", [_vm._ssrNode("<div class=\"col s6\" data-v-dd68f0d2>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/dashboard_ie_force"
    }
  }, [_c('div', {
    staticClass: "card-panel",
    staticStyle: {
      "background": "linear-gradient(to right, #E75309, #C60606)"
    }
  }, [_c('span', {
    staticClass: "white-text"
  }, [_c('img', {
    staticClass: "responsive-img",
    staticStyle: {
      "max-height": "50px"
    },
    attrs: {
      "src": __webpack_require__(136),
      "alt": ""
    }
  }), _vm._v(" "), _c('h6', {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("Forms")])])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col s6\" data-v-dd68f0d2>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/esr_form_history"
    }
  }, [_c('div', {
    staticClass: "card-panel",
    staticStyle: {
      "background": "linear-gradient(to right, #E75309, #C60606)"
    }
  }, [_c('span', {
    staticClass: "white-text"
  }, [_c('img', {
    staticClass: "responsive-img",
    staticStyle: {
      "max-height": "50px"
    },
    attrs: {
      "src": __webpack_require__(137),
      "alt": ""
    }
  }), _vm._v(" "), _c('h6', {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("Form History")])])])])], 1)], 2), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"row\" data-v-dd68f0d2>", "</div>", [_vm._ssrNode("<div class=\"col s6\" data-v-dd68f0d2>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "/dt_assigned"
    }
  }, [_c('div', {
    staticClass: "card-panel",
    staticStyle: {
      "background": "linear-gradient(to right, #E75309, #C60606)"
    }
  }, [_c('span', {
    staticClass: "white-text"
  }, [_c('img', {
    staticClass: "responsive-img",
    staticStyle: {
      "max-height": "50px"
    },
    attrs: {
      "src": __webpack_require__(138),
      "alt": ""
    }
  }), _vm._v(" "), _c('h6', {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("DTs Assigned")])])])])], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"col s6\" data-v-dd68f0d2>", "</div>", [_c('nuxt-link', {
    attrs: {
      "to": "../e_services"
    }
  }, [_c('div', {
    staticClass: "card-panel",
    staticStyle: {
      "background": "linear-gradient(to right, #E75309, #C60606)"
    }
  }, [_c('span', {
    staticClass: "white-text"
  }, [_c('img', {
    staticClass: "responsive-img",
    staticStyle: {
      "max-height": "50px"
    },
    attrs: {
      "src": __webpack_require__(139),
      "alt": ""
    }
  }), _vm._v(" "), _c('h6', {
    staticStyle: {
      "font-size": "12px"
    }
  }, [_vm._v("E-Services")])])])])], 1)], 2)], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/ie_force.vue?vue&type=template&id=dd68f0d2&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/ie_force.vue?vue&type=script&lang=js
/* harmony default export */ var ie_forcevue_type_script_lang_js = ({
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
    localStorage.setItem('account_number', '');
  },
  created() {

    // this.getFullname()
  }
});
// CONCATENATED MODULE: ./pages/ie_force.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_ie_forcevue_type_script_lang_js = (ie_forcevue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/ie_force.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_ie_forcevue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "dd68f0d2",
  "63f8f1b1"
  
)

/* harmony default export */ var ie_force = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=ie_force.js.map