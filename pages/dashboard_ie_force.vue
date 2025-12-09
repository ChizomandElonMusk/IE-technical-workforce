<template>
    <div style="padding-top: 20px;" class="container">
      <div class="row">
        <div class="col s12">
          <nuxt-link to="./ie_force" class="red white-text btn">
              Back 
          </nuxt-link>
          <b class="grey-text btn disabled">IE FORCE</b>
        </div>
      </div>
  
      <div class="row">
        <div class="row">

          <div class="col s12 center">
            <nuxt-link to="/crmd">
              <div class="card-panel" style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">CRMD</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="col s12 center">
            <nuxt-link to="/customer_categorization">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">Customer Categorization</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="col s12 center">
            <nuxt-link to="/token_request">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">Token Request</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="col s12 center" v-if="hasEnergyTheft == true">
            <nuxt-link to="/energy_theft">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">Energy Theft</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="col s12 center" v-if="hasCustomerMapping == true">
            <nuxt-link to="/customer_mapping">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">Customer Mapping</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="col s12 center" v-if="hasCustomerVisitation == true">
            <nuxt-link to="/customer_visitation">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">Customer visitation</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="col s12 center" v-if="hasCustomerIdbboxMapping == true">
            <nuxt-link to="/idb_customer_mapping">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">IDB Mapping</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          

          <div class="col s12 center" v-if="hasNewlyInstalledMeterCV == true">
            <nuxt-link to="/newly_installed_ppm">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">Newly Installed Meter CV</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <!-- customer complaint -->

          <div class="col s12 center" v-if="hasCustomerComplaint == true">
            <nuxt-link to="/customer_complaints">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">Customer Complaints</h6>
                </span>
              </div>
            </nuxt-link>
          </div>
          

          

          <div class="col s12 center" v-if="hasSuspendedCustomerValidation == true">
            <nuxt-link to="/suspended_cv">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">Suspended Customers Validation</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          

          <div class="col s12 center" v-if="hasNonVendingCustomerValidation == true">
            <nuxt-link to="/none_vending_cv">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">Non vending Customer Validation</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="col s12 center" v-if="hasNonInclusionCapture == true">
            <nuxt-link to="/non_inclusion_capture">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">Non-inclusion capture</h6>
                </span>
              </div>
            </nuxt-link>
          </div>
          

          

          <div class="col s12 center" v-if="hasIdbValidation == true">
            <nuxt-link to="/idb_customer_visitation">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">IDB Customer visitation</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <div class="col s12 center" v-if="hasCustomerDetailsValidation == true">
            <nuxt-link to="/customer_details_validation">
              <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                <span class="white-text">
                  
                  <h6 style="font-weight: 900;">Customer Details Validation</h6>
                </span>
              </div>
            </nuxt-link>
          </div>

          <!-- <div class="col s12 center">
            <nuxt-link to="./about">
              <div class="card-panel red lighten-1">
                <span class="white-text">
                  <i class="material-icons">info</i>
                  <h6 style="font-weight: 900;">About</h6>
                </span>
              </div>
            </nuxt-link>
          </div> -->

          
        </div>

      </div>
  
      
  
    </div>
    
  </template>
  
  
  
  
  <script>
  export default {
      layout: 'admin_main',

      data() {
        return {
          fullname: '',
  
          name: '',
          email: '',
          message: '',
          permissions: '',
  
          scheduleList: [],
  
        }
      },


      computed: {
        hasCustomerMapping() {
            return this.permissions.includes('CUSTOMER_MAPPING')
        },

        hasCustomerDetailsValidation() {
            return this.permissions.includes('CUSTOMER_DETAILS_VALIDATION')
        },

        hasEnergyTheft() {
            return this.permissions.includes('ENERGY_THEFT')
        },

        // not done
        hasNewlyInstalledMeterCV() {
            return this.permissions.includes('PPM_CUSTOMER_VALIDATION')
        },

        hasCustomerComplaint() {
            return this.permissions.includes('CUSTOMER_COMPLAINTS')
        },

        hasSuspendedCustomerValidation() {
            return this.permissions.includes('SUSPENDED_CUSTOMER_VISITATION')
        },

        hasNonVendingCustomerValidation() {
            return this.permissions.includes('NON_VENDING_CUSTOMER_VALIDATION')
        },
        
        hasNonInclusionCapture() {
            return this.permissions.includes('NON_INCLUSION_CAPTURE')
        },

        // not done
        hasCustomerVisitation() {
            return this.permissions.includes('SUSPENDED_CUSTOMER_VISITATION')
        },

        hasIdbValidation() {
            return this.permissions.includes('IDB_VALIDATION')
        },
        
        hasCustomerIdbboxMapping() {
            return this.permissions.includes('CUSTOMER_IDBBOX_MAPPING')
        },

      },



      methods: {

        async getFullname() {
          // this.fullname = localStorage.getItem('fullname')
        }
      },

      mounted() {
        if(typeof localStorage !== 'undefined'){
          localStorage.setItem('service_type', '')
        localStorage.setItem('meter_number', '')
        localStorage.setItem('account_number', '')
        }
      },

      created() {
        if(typeof localStorage !== 'undefined'){
          this.permissions = localStorage.getItem('forms')
        }
        // this.getFullname()
      }
  }
  </script>
  
  
  <style scoped>
  </style>