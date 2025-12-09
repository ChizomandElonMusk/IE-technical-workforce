<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <div class="col s12">
                <nuxt-link to="../dashboard_ie_force" class="red white-text btn">
                    Back 
                </nuxt-link>
                <b class="grey-text btn disabled">CRMD</b>
            </div>
        </div>
  
      <div class="row">
        <div class="row">
          <div class="col s12 center">
            
            <table class="striped">

                <tbody>
                    <tr v-if="hasAccountReactivation == true">
                        <td>
                            <nuxt-link to="../crmd/account_reactivation">
                                Account Reactivation
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr v-if="hasAccountSuspension == true">
                        <td>
                            <nuxt-link to="../crmd/account_suspension">
                                Account Suspension
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr v-if="hasSwtichToDormant == true">
                        <td>
                            <nuxt-link to="../crmd/switch_to_dormant">
                                Switch to Dormant
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr v-if="hasSwtichToQuantitative == true">
                        <td>
                            <nuxt-link to="../crmd/switch_to_quantitative">
                                Switch to Quantitative
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr v-if="hasSwtichToActualRead == true">
                        <td>
                            <nuxt-link to="../crmd/switch_to_actual_read">
                                Switch to Actual Read
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr v-if="hasCorrectionDials == true">
                        <td>
                            <nuxt-link to="../crmd/correction_of_dials">
                                Correction of Dials
                            </nuxt-link>
                        </td>
                    </tr>
                    <tr v-if="hasCorrectionLarPar == true">
                        <td>
                            <nuxt-link to="../crmd/correction_of_lar_par">
                                Correction of LAR & PAR
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
          permissions: [],
  
        }
      },

      computed: {
        hasCorrectionLarPar() {
            return this.permissions.includes('CORRECTION_OF_LAR_PAR')
        },

        hasCorrectionDials() {
            return this.permissions.includes('CORRECTION_OF_DIALS')
        },

        hasSwtichToActualRead() {
            return this.permissions.includes('SWITCH_TO_ACTUALREAD')
        },

        hasSwtichToQuantitative() {
            return this.permissions.includes('SWITCH_TO_QUANTITATIVE')
        },

        hasSwtichToDormant() {
            return this.permissions.includes('SWITCH_TO_DORMANT')
        },

        hasAccountSuspension() {
            return this.permissions.includes('ACCOUNT_SUSPENSION')
        },

        hasAccountReactivation() {
            return this.permissions.includes('ACCOUNT_REACTIVATION')
        },

      },

      methods: {
        
      },

      mounted() {
        this.permissions = localStorage.getItem('forms')
      },

      created() {
        
      }
  }
  </script>
  
  
  <style scoped>
  </style>