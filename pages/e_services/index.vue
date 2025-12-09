<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <div class="col s12">
                <nuxt-link to="../ie_force" class="red white-text btn">
                    Back 
                </nuxt-link>
                <b class="grey-text btn disabled">IE FORCE</b>
            </div>
        </div>
  
        <div class="row">

            <div class="col s12 center">
              <a href="https://www.ie-payments.com/pay-bill" target="_blank">
                  <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                      <span class="white-text">
                          <i class="material-icons">folder_open</i>
                          <h6>Bill Payment</h6>
                      </span>
                  </div>
              </a>
            </div>

            <div class="col s12 center">
              <nuxt-link to="/e_services/payment_history">
                  <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                      <span class="white-text">
                          <i class="material-icons">folder_open</i>
                          <h6>Payment History</h6>
                      </span>
                  </div>
              </nuxt-link>
            </div>

            <div class="col s12 center">
              <nuxt-link to="/e_services/billing_history">
                  <div class="card-panel " style="background: linear-gradient(to right, #E75309, #C60606);">
                      <span class="white-text">
                          <i class="material-icons">folder_open</i>
                          <h6>Billing History</h6>
                      </span>
                  </div>
              </nuxt-link>
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
  
          scheduleList: [],
  
        }
      },

      methods: {
        logOut() {
          if(process.client) {
            localStorage.removeItem('token')
            window.location = './'
          }
        },

        async getFullname() {
          // this.fullname = localStorage.getItem('fullname')
        }
      },

      mounted() {
        localStorage.setItem('service_type', '')
        localStorage.setItem('meter_number', '')
      },

      created() {
        
        // this.getFullname()
      }
  }
  </script>
  
  
  <style scoped>
  </style>