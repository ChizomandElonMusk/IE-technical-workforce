exports.ids = [34,4,5];
exports.modules = {

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=61875986
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<div class=\"row full-width\">", "</div>", [_vm._ssrNode("<div class=\"col s12 m6\" style=\"margin-top: 130px\">", "</div>", [_c('Logo'), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"container\">", "</div>", [_vm._ssrNode("<div class=\"row\">", "</div>", [_vm._ssrNode("<h5 class=\"center red-text\">\n            Technical Workforce <br> <b class=\"center red-text\" style=\"font-weight: 300; font-size: 12px;\">" + _vm._ssrEscape("Version: " + _vm._s(_vm.version_number)) + "</b></h5> "), _c('PreLoader', {
    staticClass: "center",
    class: {
      'hide': _vm.hidePreLoader
    }
  })], 2), _vm._ssrNode(" <form><div class=\"row\"><div class=\"input-field col s12\"><input type=\"text\" placeholder id=\"username\" focused" + _vm._ssrAttr("value", _vm.username) + " class=\"black-text focus\"> <label for=\"username\">Username</label></div></div> <div class=\"row\"><div class=\"input-field col s12\"><input type=\"password\" placeholder id=\"password\"" + _vm._ssrAttr("value", _vm.password) + " class=\"black-text\"> <label for=\"password\">Password</label></div></div> <div class=\"row\"><div class=\"input-field col s12\"><button" + _vm._ssrAttr("disabled", _vm.disabled) + " class=\"red btn btn-large col s12\" style=\"background: linear-gradient(to right, #E75309, #C60606);\">\n                Login\n              </button></div></div></form>")], 2)], 2), _vm._ssrNode(" <div class=\"col s12 m6 full-width hide-on-small-and-down\"" + _vm._ssrStyle(null, {
    backgroundImage: `url(${_vm.backgroundUrl})`
  }, null) + "></div>")], 2)]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=61875986

// EXTERNAL MODULE: ./assets/images/angled_background.jpg
var angled_background = __webpack_require__(51);
var angled_background_default = /*#__PURE__*/__webpack_require__.n(angled_background);

// EXTERNAL MODULE: ./components/PreLoader.vue + 4 modules
var PreLoader = __webpack_require__(48);

// EXTERNAL MODULE: ./js_modules/mods.js
var mods = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js



/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  head() {
    return {
      // Other meta information
      script: [{
        hid: 'cryptojs',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js',
        defer: true
      }]
    };
  },
  data() {
    return {
      backgroundUrl: angled_background_default.a,
      user_test: '',
      password_test: '',
      username: 'aadigun',
      password: 'xxxx',
      version_number: '1.0',
      disabled: false,
      lat: '',
      long: '',
      hidePreLoader: true
    };
  },
  methods: {
    signIn() {
      M.toast({
        html: '<b class="yellow-text">Please wait...</b>'
      });
      // this.$router.push('./dashboard')
      this.username = this.username.trim();
      this.password = this.password.trim();
      this.user_test = this.user_test.trim();
      this.password_test = this.password_test.trim();
      // this.convertEmail(this.username, this.password)

      // console.log(`username -> ${this.username}     password -> ${this.password}`)
      if (this.username === '' || this.password === '') {
        M.toast({
          html: '<b class="red-text">Username or Password is empty!</b>'
        });
      } else {
        // this.$router.push('./menu') 
        this.convertEmail(this.username, this.password);
      }
    },
    // async callLoginApi () {
    //   try {

    //     const rawResponse = await fetch('http://192.168.6.183:8087/cwfrestapi/api/v1/auth/login', {
    //       method: 'POST',
    //       headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'application/json'
    //       },
    //       body: JSON.stringify({
    //         usernameOrEmail: this.username, 
    //         password: this.password,
    //       })
    //     });

    //     console.log('content is being converted to json')
    //     const content = await rawResponse.json();

    //     console.log(content)

    //     let responseCode = content.code
    //     let message = content.message

    //     console.log('if statement is being ran to check response')
    //     console.log('response code ', responseCode)
    //     console.log('response token ', content.token)
    //     if(responseCode == "09" || responseCode == null || responseCode == undefined) {

    //       M.toast({html: `<b class="red-text">${message}</b>`})
    //       this.hidePreLoader = true

    //     } else if(responseCode === '00') {

    //         M.toast({html: `<b class="green-text">Welcome</b>`})
    //         let token = content.token

    //         if (process.client) {
    //           localStorage.setItem('token', token)
    //           // localStorage.setItem('fullname', `${content.payload.first_name} ${content.payload.last_name}`)
    //         }

    //         this.hidePreLoader = true
    //         window.location = './dashboard'
    //         // this.$router.push('./dashboard')
    //     }

    //   } catch (error) {
    //     console.log(`Your error says -> ${error}`)
    //     console.log(error)
    //     M.toast({html: `<b class="red-text">${error}</b>`})
    //     this.hidePreLoader = true
    //   }

    // },

    async convertEmail(uname, password) {
      let encrptionKey = 'astsk@#$001!!!*&^';
      let username = uname;
      let pWord = password;

      // let encrytedUsername = this.encryptWithAes256(username, encrptionKey)
      let encrytedUsername = username;
      let encrytedPassword = this.encryptWithAes256(pWord, encrptionKey);

      // console.log(`username -> ${encrytedUsername}   password -> ${encrytedPassword}`)

      // console.log('trying api now........')

      try {
        this.disabled = true;
        // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/auth/login', {
        const rawResponse = await fetch('https://api.ikejaelectric.com/technicalwfrestapi/test/v1/api/v1/login', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6'
          },
          body: JSON.stringify({
            usernameOrEmail: encrytedUsername,
            password: encrytedPassword,
            latitude: this.lat,
            longitude: this.long,
            versionNumber: this.version_number
          })
        });
        // body: JSON.stringify({
        //     usernameOrEmail: encrytedUsername, 
        //     password: encrytedPassword,
        //     latitude: '6.595176845',
        //     longitude: '3.358090054'
        //   })

        // body: JSON.stringify({
        //     usernameOrEmail: encrytedUsername, 
        //     password: encrytedPassword,
        //     latitude: this.lat,
        //     longitude: this.long
        //   })
        console.log('content is being converted to json');
        const content = await rawResponse.json();
        console.log(content);
        let responseCode = content.code;
        let message = content.message;
        console.log('if statement is being ran to check response');
        if (responseCode == "09" || responseCode == null || responseCode == undefined) {
          M.toast({
            html: `<b class="red-text">${message}</b>`
          });
          this.hidePreLoader = true;
          this.disabled = false;
        } else if (responseCode === '00') {
          M.toast({
            html: `<b class="green-text">Welcome</b>`
          });
          this.disabled = false;
          let token = content.token;
          let forms = content.forms;
          let userId = content.userId;
          let username = this.username;
          if (false) {}
          this.hidePreLoader = true;
          this.$router.push('./menu');
        } else {
          M.toast({
            html: `<b class="green-text">${content.message}</b>`
          });
          this.disabled = false;
        }
      } catch (error) {
        console.log(`Your error says -> ${error}`);
        M.toast({
          html: `<b class="red-text">${error}</b>`
        });
        this.hidePreLoader = true;
        this.disabled = false;
      }
    },
    encryptWithAes256(messageToEncrypt, encryptorKey) {
      // Generate random 16 bytes salt
      var salt = CryptoJS.lib.WordArray.random(128 / 8);

      // Derive key
      var key = CryptoJS.PBKDF2(encryptorKey, salt, {
        keySize: 256 / 32,
        iterations: 1000,
        hasher: CryptoJS.algo.SHA512
      } // Apply SHA512
      );
      // console.log("derived key:\n" + key);

      // Generate random 16 bytes init vector (iv)
      var iv = CryptoJS.lib.WordArray.random(128 / 8);

      // Encrypt
      var cipherText = CryptoJS.AES.encrypt(messageToEncrypt, key, {
        iv: iv
      });

      // Concatenate
      var encryptedData = salt.clone().concat(iv).concat(cipherText.ciphertext); // Concatenate on binary level
      var encryptedDataB64 = encryptedData.toString(CryptoJS.enc.Base64); // Base64 encode the result
      // console.log("aes encrypted text:\n", encryptedDataB64.replace(/(.{56})/g,'$1\n')); 
      return encryptedDataB64.replace(/(.{56})/g, '$1\n');
    },
    getUsernameFromLocalStorage() {
      try {
        let uname = localStorage.getItem('username');
        if (uname == null || uname == undefined) {
          this.username = '';
        } else {
          this.username = uname;
        }
        // if(uname)
      } catch (error) {}
    }
  },
  async mounted() {
    try {
      const {
        long,
        lat
      } = await Object(mods["e" /* getCurrentPosition */])();
      console.log(long, lat);
      this.long = long;
      this.lat = lat;
    } catch (error) {}
    this.getUsernameFromLocalStorage();
  },
  created() {
    // this.testAPI()
    // let v = this.$store.state.token
    // console.log(v)

    // this.$store.commit('setToken', '294039480398029842i42ik3lnsdkhgosih')

    // let vv = this.$store.getters.myGetter;
    // console.log(vv)
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "0e3d4e4a"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Logo: __webpack_require__(50).default,PreLoader: __webpack_require__(48).default})


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
  "f190f66c"
  
)

/* harmony default export */ var PreLoader = __webpack_exports__["default"] = (component.exports);

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
  "544a34a7"
  
)

/* harmony default export */ var Logo = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/angled_background.c716e15.jpg";

/***/ })

};;
//# sourceMappingURL=index.js.map