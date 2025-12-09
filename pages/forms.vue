<template>
    <div style="padding-top: 20px;" class="container">

        <div class="row">
            <nuxt-link to="./dashboard" class="red white-text btn">
                Back
            </nuxt-link>
        </div>
    
        <div class="row">
            <div>
                <h6 class="red-text center" style="font-weight: 100; margin-bottom: 20px;">
                    Forms
                </h6>
            </div>
        </div>
  
      <div class="row">
        <div class="row">
          <div class="col s12 center">
            
            <table class="striped">

                <tbody>
                    <tr>
                        <td>
                            <nuxt-link to="./vsm-checklist">
                                VSM CHECKLIST
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <nuxt-link to="./nmd-activity-checklist">
                                NMD activity checklist
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <nuxt-link to="./payment-channel">
                                Payment channel Management checklist
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <nuxt-link to="./nmd-pre-survey-checklist">
                                NMD pre-survey checklist
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <nuxt-link to="./md-customer-ir">
                                MD Customer I & R
                            </nuxt-link>
                        </td>
                    </tr>
                </tbody>
            </table>

          </div>

        </div>

      </div>
  
      
  
    </div>
    
  </template>
  
  
  
  
  <script>
  export default {
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
  
        }
      },

      methods: {

      },

      created() {

      }
  }
  </script>
  
  
  <style scoped>
  </style>