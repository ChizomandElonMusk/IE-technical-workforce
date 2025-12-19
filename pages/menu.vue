<template>
  <div style="padding-top: 20px;" class="container">
    <div class="row">
      <div class="col s12">
        <b class="red white-text btn" @click="logOut">
          <i class="material-icons">lock</i>
        </b>
        <b class="grey-text btn disabled">Work Order</b>
      </div>
    </div>

    <!-- <div class="row">
        <Logo style="margin-bottom: 50px; margin-top: 10px;"/>
      </div> -->

    <!-- <div class="row" style="padding-bottom: 10px;">
        <div class="col s12">
          <b class=" grey-text darken-4">Welcome,</b> <br>
          <b style="font-size: 20px; color: #757575;" class="">{{fullname}}</b>
        </div>
      </div> -->

    <PreLoader v-if="!hidePreLoader" />
    <div class="row">
      <div class="row">

        <div class="col s12 center">
          <div v-for="value in work_order" class="card-panel white-text left-align"
            style="background: linear-gradient(to right, #E75309, #C60606); padding: 15px; border-radius: 10px;">
            <span class="yellow-text">
              <h6 class="">
                <b class="white-text">{{ value.faultDescription }}</b>
                <br>
                {{ value.workOrder }}

              </h6>
            </span>
            <hr style="color: #fff;">
            <br>
            <p style="margin-top: -10px;">
              <b>Feeder Band: {{ value.feederBand }}</b>
            </p>
            <br>
            <p style="margin-top: -30px;">
              Status: <b class="yellow-text">
                {{ value.status }}
              </b>
            </p>
            <br>
            <p style="margin-top: -30px;">
              Status: <b class="yellow-text">
                {{ value.faultCategory }}
              </b>
            </p>
            <br>

            <div v-if="!displayCountdown(8).isExpired">
              <p style="margin-top: -10px;">
                SLA countdown:
                <b class="yellow-text">
                  {{ displayCountdown(value).d }}d :
                  {{ displayCountdown(value).h }}h :
                  {{ displayCountdown(value).m }}m :
                  {{ displayCountdown(value).s }}s
                </b>
              </p>
            </div>
            <div v-else>
              <p style="margin-top: -10px;">
                SLA Status: <b class="black-text"
                  style="background: white; padding: 2px 5px; border-radius: 4px;">EXPIRED</b>
              </p>
            </div>

            <br>
            <p style="margin-top: -30px;">
              Created on: <b class="white-text">
                {{ formatDate(value.dateEntered) }}
              </b>
            </p>

            <nuxt-link :to="`../work_order_details?id=${value.id}`" class="btn white red-text"
              style="background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;">
              view details
            </nuxt-link>
          </div>
        </div>


      </div>

    </div>



  </div>

</template>




<script>
import { getFaltTickets, getSlaHours, calculateDeadline, getTimerBreakdown } from '~/js_modules/mods.js'
import PreLoader from '~/components/PreLoader.vue';
export default {
  layout: 'admin_main',
  components: {
    PreLoader
  },

  data() {
    return {
      work_order: [], // Your API results
      now: Date.now(),
      timer: null,

      fullname: '',

      name: '',
      email: '',
      message: '',
      work_order: [],

      scheduleList: [],

      hidePreLoader: true,

    }
  },

  methods: {
    logOut() {
      if (process.client) {
        localStorage.removeItem('token')
        window.location = './'
      }
      localStorage.setItem('service_type', '')
      localStorage.setItem('meter_number', '')
      localStorage.setItem('token', '')
      localStorage.setItem('forms', '')
      localStorage.setItem('userId', '')

    },

    async getFullname() {
      // this.fullname = localStorage.getItem('fullname')
    },

    formatDate(dateString) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(dateString).toLocaleDateString(undefined, options);
    },

    async getTickets() {
      this.hidePreLoader = false
      this.work_order = await getFaltTickets()
      console.log(this.work_order)
      this.hidePreLoader = true
    },

    displayCountdown(item) {
      // 1. Determine which SLA band to use
      const hours = getSlaHours(item);

      // 2. Calculate the specific deadline for this work order
      const deadline = calculateDeadline(item.dateEntered, hours);

      // 3. Return the breakdown relative to the current time (this.now)
      return getTimerBreakdown(deadline, this.now);
    },

    formatDate(date) {
      if (!date) return "N/A";
      return new Date(date).toLocaleString();
    }

  },

  mounted() {
    localStorage.setItem('service_type', '')
    localStorage.setItem('meter_number', '')
    this.getTickets()


    // Single interval to update all items in the list every second
    this.timer = setInterval(() => {
      this.now = Date.now();
    }, 1000);

  },

  beforeDestroy() {
    if (this.timer) clearInterval(this.timer);
  },

  created() {

    // this.getFullname()
  }
}
</script>


<style scoped></style>