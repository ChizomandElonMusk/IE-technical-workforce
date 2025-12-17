exports.ids = [37];
exports.modules = {

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/menu.vue?vue&type=template&id=fac44e44&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', {
    staticClass: "container",
    staticStyle: {
      "padding-top": "20px"
    }
  }, [_vm._ssrNode("<div class=\"row\" data-v-fac44e44><div class=\"col s12\" data-v-fac44e44><b class=\"red white-text btn\" data-v-fac44e44><i class=\"material-icons\" data-v-fac44e44>lock</i></b> <b class=\"grey-text btn disabled\" data-v-fac44e44>Work Order</b></div></div> "), _vm._ssrNode("<div class=\"row\" data-v-fac44e44>", "</div>", [_vm._ssrNode("<div class=\"row\" data-v-fac44e44>", "</div>", [_vm._ssrNode("<div class=\"col s12 center\" data-v-fac44e44>", "</div>", _vm._l(_vm.work_order, function (value) {
    return _vm._ssrNode("<div class=\"card-panel white-text left-align\" style=\"background: linear-gradient(to right, #E75309, #C60606); padding: 15px; border-radius: 10px;\" data-v-fac44e44>", "</div>", [_vm._ssrNode("<span class=\"yellow-text\" data-v-fac44e44><h6 data-v-fac44e44><b class=\"white-text\" data-v-fac44e44>" + _vm._ssrEscape(_vm._s(value.faultDescription)) + "</b> <br data-v-fac44e44>" + _vm._ssrEscape("\n              " + _vm._s(value.workOrder) + "\n\n            ") + "</h6></span> <hr style=\"color: #fff;\" data-v-fac44e44> <br data-v-fac44e44> <p style=\"margin-top: -10px;\" data-v-fac44e44><b data-v-fac44e44>" + _vm._ssrEscape("Feeder Band: " + _vm._s(value.feederBand)) + "</b></p> <br data-v-fac44e44> <p style=\"margin-top: -30px;\" data-v-fac44e44>\n            Status: <b class=\"yellow-text\" data-v-fac44e44>" + _vm._ssrEscape("\n              " + _vm._s(value.status) + "\n            ") + "</b></p> <br data-v-fac44e44> <p style=\"margin-top: -30px;\" data-v-fac44e44>\n            Created on: <b class=\"white-text\" data-v-fac44e44>" + _vm._ssrEscape("\n              " + _vm._s(_vm.formatDate(value.dateEntered)) + "\n            ") + "</b></p> "), _c('nuxt-link', {
      staticClass: "btn white red-text",
      staticStyle: {
        "background": "#fff",
        "border-radius": "7px",
        "margin-top": "-10px",
        "margin-bottom": "0px"
      },
      attrs: {
        "to": `../work_order_details?id=${value.id}`
      }
    }, [_vm._v("\n            view details\n          ")])], 2);
  }), 0)])])], 2);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/menu.vue?vue&type=template&id=fac44e44&scoped=true

// EXTERNAL MODULE: ./js_modules/mods.js
var mods = __webpack_require__(45);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/menu.vue?vue&type=script&lang=js

/* harmony default export */ var menuvue_type_script_lang_js = ({
  layout: 'admin_main',
  data() {
    return {
      fullname: '',
      name: '',
      email: '',
      message: '',
      work_order: [],
      scheduleList: []
    };
  },
  methods: {
    logOut() {
      if (false) {}
      localStorage.setItem('service_type', '');
      localStorage.setItem('meter_number', '');
      localStorage.setItem('token', '');
      localStorage.setItem('forms', '');
      localStorage.setItem('userId', '');
    },
    async getFullname() {
      // this.fullname = localStorage.getItem('fullname')
    },
    formatDate(dateString) {
      const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },
    async getTickets() {
      this.work_order = await Object(mods["k" /* getFaltTickets */])();
      console.log(this.work_order);
    }
  },
  mounted() {
    localStorage.setItem('service_type', '');
    localStorage.setItem('meter_number', '');
    this.getTickets();
  },
  created() {

    // this.getFullname()
  }
});
// CONCATENATED MODULE: ./pages/menu.vue?vue&type=script&lang=js
 /* harmony default export */ var pages_menuvue_type_script_lang_js = (menuvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/menu.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_menuvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fac44e44",
  "7adcd897"
  
)

/* harmony default export */ var menu = __webpack_exports__["default"] = (component.exports);

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

/***/ })

};;
//# sourceMappingURL=menu.js.map