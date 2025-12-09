exports.ids = [46,4,6];
exports.modules = {

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup.vue?vue&type=template&id=311bdbb1
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row full-width\">", "</div>", [_vm._ssrNode("<div class=\"col s12 m6\" style=\"margin-top: 0px\">", "</div>", [_c('Logo'), _vm._ssrNode(" "), _c('SignUp')], 2), _vm._ssrNode(" <div class=\"col s12 m6 full-width hide-on-small-and-down\"" + _vm._ssrStyle(null, {
    backgroundImage: `url(${_vm.backgroundUrl})`
  }, null) + "></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/signup.vue?vue&type=template&id=311bdbb1

// EXTERNAL MODULE: ./assets/images/angled_background.jpg
var angled_background = __webpack_require__(51);
var angled_background_default = /*#__PURE__*/__webpack_require__.n(angled_background);

// EXTERNAL MODULE: ./components/SignUp.vue + 4 modules
var SignUp = __webpack_require__(81);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/signup.vue?vue&type=script&lang=js


/* harmony default export */ var signupvue_type_script_lang_js = ({
  data() {
    return {
      backgroundUrl: angled_background_default.a
    };
  },
  components: {
    SignUp: SignUp["default"]
  }
});
// CONCATENATED MODULE: ./pages/signup.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_signupvue_type_script_lang_js = (signupvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/signup.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_signupvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "34c495fe"
  
)

/* harmony default export */ var signup = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(50).default,SignUp: __webpack_require__(81).default})


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logo.d2f3c61.png";

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=template&id=ac56e43a
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row\" style=\"margin-top: 0px\"><div class=\"col s12 m3\"></div> <div class=\"col s12 m6 center\"><img" + _vm._ssrAttr("src", __webpack_require__(49)) + " alt class=\"responsive-img circle\" style=\"max-width:100px; max-height:100px\"></div> <div class=\"col s12 m3\"></div></div>")]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/Logo.vue?vue&type=template&id=ac56e43a

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Logo.vue?vue&type=script&lang=js
/* harmony default export */ var Logovue_type_script_lang_js = ({
  name: 'TinaLogo'
});
// CONCATENATED MODULE: ./components/Logo.vue?vue&type=script&lang=js
 /* harmony default export */ var components_Logovue_type_script_lang_js = (Logovue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/Logo.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_Logovue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "5baecdd6"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/angled_background.c716e15.jpg";

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SignUp.vue?vue&type=template&id=3d4e84ed
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"col s12\"></div> "), _vm._ssrNode("<div class=\"col s12\">", "</div>", [_vm._ssrNode("<div class=\"white darken-4\">", "</div>", [_vm._ssrNode("<div class=\"card-content\">", "</div>", [_vm._ssrNode("<h6 class=\"center black-text\" style=\"font-weight:500;\">\n                        Hi, Welcome\n                    </h6> <p class=\"center\" style=\"font-weight:500;\">\n                        Kindly fill out your information to get you started.\n                    </p> <h6 class=\"left black-text\" style=\"font-weight:500; margin-bottom: 20px;\">\n                        Personal, Information\n                    </h6> "), _vm._ssrNode("<form>", "</form>", [_vm._ssrNode("<div class=\"row\"><div class=\"input-field col s12\"><input type=\"text\" placeholder id=\"email\" class=\"black-text\"> <label for=\"email\">Email</label></div></div> <div class=\"row\"><div class=\"input-field col s12\"><input type=\"text\" placeholder id=\"firstname\" class=\"black-text\"> <label for=\"firstname\">First Name</label></div></div> <div class=\"row\"><div class=\"input-field col s12\"><input type=\"text\" placeholder id=\"lastname\" class=\"black-text\"> <label for=\"lastname\">Last Name</label></div></div> <div class=\"row\"><div class=\"input-field col s12\"><input type=\"text\" placeholder id=\"phonenumber\" class=\"black-text\"> <label for=\"phonenumber\">Phone Number</label></div></div> <div class=\"row\"><div class=\"input-field col s12\"><input type=\"password\" placeholder id=\"password\" class=\"black-text\"> <label for=\"password\">Password</label></div></div> <div class=\"row\"><div class=\"input-field col s12\"><input type=\"password\" placeholder id=\"confirmpassword\" class=\"black-text\"> <label for=\"confirmpassword\">Confirm Password</label></div></div> "), _vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<div class=\"input-field col s12\"><button class=\"customButtonColor btn btn-large right\">\n                                    Create Account\n                                </button></div> "), _vm._ssrNode("<div class=\"col s12 right-align\">", "</div>", [_vm._ssrNode("\n                                Have an account? "), _c('nuxt-link', {
    staticClass: "orange-text",
    staticStyle: {
      "font-size": "17px"
    },
    attrs: {
      "to": "./login"
    }
  }, [_vm._v("Login")])], 2)], 2)], 2)], 2)])])], 2)])]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./components/SignUp.vue?vue&type=template&id=3d4e84ed

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SignUp.vue?vue&type=script&lang=js
/* harmony default export */ var SignUpvue_type_script_lang_js = ({
  methods: {
    loadFocus() {
      this.$refs.email.focus();
    }
  },
  mounted() {
    this.loadFocus();
  }
});
// CONCATENATED MODULE: ./components/SignUp.vue?vue&type=script&lang=js
 /* harmony default export */ var components_SignUpvue_type_script_lang_js = (SignUpvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/SignUp.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_SignUpvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6ccc6e23"
  
)

/* harmony default export */ var SignUp = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=signup.js.map