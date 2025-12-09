<template>
    <div style="padding-left: 40px; padding-right: 40px; padding-top: 20px;">
        <div class="row">
            
        </div>
        <div class="row">
        </div>
  
      
  
      <div class="row" style="margin-top: 200px">
        
        <!-- form starts here -->
        <div class="row">
            <div class="col s12 center red-text">
                <h5 @click="copyTrackingId(tracking_id)">
                    Tracking ID:
                </h5>
                <b @click="copyTrackingId(tracking_id)">
                    {{ tracking_id }}
                </b>

                <h4 @click="copyTrackingId(tracking_id)">
                    Copy
                </h4>
            </div>


            <div class="col s12 center">
                <i class="material-icons large red-text">send</i>
            </div>
            <div class="col s12 center red-text">
                <h6>
                    Form has been submited
                </h6>
            </div>

            


            <div class="col s12 center red-text">
                

                <div class="row">
                    <div class="col s12 center">
                        <a @click="goToDashboard">
                            <div class="card-panel red">
                                <span class="white-text">
                                    <h6>Back to menu</h6>
                                </span>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!-- form ends here -->
      </div>
  
      
  
    </div>
    
  </template>
  
  
  
  
  <script>
  export default {
      layout: 'admin_main',
      data() {
        return {
            tracking_id: '',

        }
      },

      methods: {
        goToDashboard() {
            localStorage.setItem('tracking_id', '');
            window.location.href = './dashboard_ie_force';
        },

        async copyTrackingId(tracking_id) {
            try {
                await navigator.clipboard.writeText(tracking_id);
                M.toast({ html: '<b class="green-text">Tracking ID copied</b>' });
            } catch (error) {
                
            }
        }
      },

      mounted() {
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems, options);
        });
        
        let tracking_id = localStorage.getItem('tracking_id');
        if (tracking_id) {
            this.tracking_id = tracking_id;
        }
      },

      created() {
       
      }
  }
  </script>
  
  
  <style scoped>
  #sig-canvas {
    border: 2px dotted #CCCCCC;
    border-radius: 15px;
    cursor: crosshair;
    }
  </style>