<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <div class="col s12">
                <nuxt-link to="./menu" class="red white-text btn">
                    Back 
                </nuxt-link>
                <b class="grey-text btn disabled">IE FORCE</b>
            </div>
        </div>
  
        <div class="row">

            <div class="col s6">
                <nuxt-link to="/dashboard_ie_force">
                    <div class="card-panel" style="background: linear-gradient(to right, #E75309, #C60606);">
                        <span class="white-text">
                            <img src="~/assets/images/forms.svg" class="responsive-img" style="max-height: 50px;" alt="">
                            <h6 style="font-size: 12px;">Forms</h6>
                        </span>
                    </div>
                </nuxt-link>
            </div>

            <div class="col s6">
                <nuxt-link to="/esr_form_history">
                    <div class="card-panel" style="background: linear-gradient(to right, #E75309, #C60606);">
                        <span class="white-text">
                            <img src="~/assets/images/history.svg" class="responsive-img" style="max-height: 50px;" alt="">
                            <h6 style="font-size: 12px;">Form History</h6>
                        </span>
                    </div>
                </nuxt-link>
            </div>

            </div>

            <div class="row">

            <div class="col s6">
                <nuxt-link to="/dt_assigned">
                    <div class="card-panel" style="background: linear-gradient(to right, #E75309, #C60606);">
                        <span class="white-text">
                            <img src="~/assets/images/assigned_dt.svg" class="responsive-img" style="max-height: 50px;" alt="">
                            <h6 style="font-size: 12px;">DTs Assigned</h6>
                        </span>
                    </div>
                </nuxt-link>
            </div>

            <div class="col s6">
                <nuxt-link to="../e_services">
                    <div class="card-panel" style="background: linear-gradient(to right, #E75309, #C60606);">
                        <span class="white-text">
                            <img src="~/assets/images/e_service.svg" class="responsive-img" style="max-height: 50px;" alt="">
                            <h6 style="font-size: 12px;">E-Services</h6>
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
        localStorage.setItem('account_number', '')
      },

      created() {
        
        // this.getFullname()
      }
  }
  </script>
  
  
  <style scoped>
  </style>