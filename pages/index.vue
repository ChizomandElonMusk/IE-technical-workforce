<template>
  <div>
    <div v-if="isDesktop" class="desktop-blocker">
      <div class="container center-align">
        <Logo />
        <div class="card-panel" style="margin-top: 50px; border-radius: 15px; padding: 40px;">
          <i class="material-icons large red-text">phonelink_lock</i>
          <h4 class="red-text" style="font-weight: bold;">Mobile Access Only</h4>
          <p class="grey-text text-darken-2" style="font-size: 1.2rem;">
            The Technical Workforce portal is restricted to mobile devices for field operations.
          </p>
          <p>Please access this site via your <b>Smartphone Browser</b> or use the <b>Official Android App</b>.</p>
          
          <div style="margin-top: 30px;">
            <button class="btn-large red darken-2" style="border-radius: 8px; width: 100%;">
               Get the mobile app from the Admininistrator
            </button>
          </div>
        </div>
      </div>
    </div>

    <div v-else class="row full-width">
      <div class="col s12 m6" style="margin-top: 130px">
        <Logo />
        <div class="container">
          <div class="row">
            <h5 class="center red-text">
              Technical Workforce <br>
              <b class="center red-text" style="font-weight: 300; font-size: 12px;">Version: {{ version_number }}</b>
            </h5>
            
            <PreLoader class="center" :class="{ 'hide': !loading }" />
          </div>
          
          <form @submit.prevent>
            <div class="row">
              <div class="input-field col s12">
                <input type="text" class="black-text" id="username" ref="username" v-model="username">
                <label for="username" class="active">Username</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <input type="password" class="black-text" id="password" v-model="password">
                <label for="password" class="active">Password</label>
              </div>
            </div>
            <div class="row">
              <div class="input-field col s12">
                <button class="red btn btn-large col s12" @click="signIn" :disabled="disabled" 
                        style="background: linear-gradient(to right, #E75309, #C60606); border-radius: 8px;">
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div class="col s12 m6 full-width hide-on-small-and-down" :style="{ backgroundImage: `url(${backgroundUrl})`, height: '100vh', backgroundSize: 'cover' }">
      </div>
    </div>
  </div>
</template>

<script>
import backgroundUrl from '~/assets/images/angled_background.jpg'
import PreLoader from '~/components/PreLoader.vue'
import { getCurrentPosition } from '~/js_modules/mods'

export default {
  head() {
    return {
      script: [
        { hid: 'cryptojs', src: 'https://cdnjs.cloudflare.com/ajax/libs/crypto-js/4.0.0/crypto-js.min.js', defer: true }
      ]
    }
  },
  data() {
    return {
      backgroundUrl,
      username: '',
      password: '',
      version_number: '1.0',
      disabled: false,
      loading: false, // Unified loader state
      lat: '',
      long: '',
      isDesktop: false,
    }
  },

  methods: {
    checkDevice() {
      if (process.client) {
        const userAgent = navigator.userAgent || navigator.vendor || window.opera;
        // Logic: Check if User Agent contains common mobile strings
        const isMobileUA = /android|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
        // Handle newer iPads that pretend to be Macs
        const isIPad = (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        
        // Block only if it is NOT a mobile user agent
        this.isDesktop = !(isMobileUA || isIPad);
      }
    },

    signIn() {
      this.username = this.username.trim();
      this.password = this.password.trim();

      if (this.username === '' || this.password === '') {
        M.toast({ html: '<b class="red-text">Username or Password is empty!</b>' });
      } else {
        M.toast({ html: '<b class="yellow-text">Authenticating...</b>' });
        this.convertEmail(this.username, this.password);
      }
    },

    async convertEmail(uname, password) {
      const encrptionKey = 'astsk@#$001!!!*&^';
      const encrytedPassword = this.encryptWithAes256(password, encrptionKey);

      try {
        this.disabled = true;
        this.loading = true;

        const rawResponse = await fetch('https://api.ikejaelectric.com/technicalwfrestapi/prod/v1/api/v1/login', {   
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6',
          },
          body: JSON.stringify({
            usernameOrEmail: uname,
            password: encrytedPassword,
            latitude: this.lat,
            longitude: this.long,
            versionNumber: this.version_number
          })
        });

        const content = await rawResponse.json();
        const responseCode = content.code;
        console.log(content);

        if (responseCode === "00") {
          M.toast({ html: `<b class="green-text">Welcome</b>` });
          if (process.client) {
            localStorage.setItem('token', content.token);
            localStorage.setItem('forms', content.forms);
            localStorage.setItem('userId', content.userId);
            localStorage.setItem('username', this.username);
          }
          this.$router.push('./menu');
        } else {
          M.toast({ html: `<b class="red-text">${content.message || 'Login Failed'}</b>` });
          this.disabled = false;
          this.loading = false;
        }
      } catch (error) {
        M.toast({ html: `<b class="red-text">Connection Error</b>` });
        this.disabled = false;
        this.loading = false;
      }
    },

    encryptWithAes256(messageToEncrypt, encryptorKey) {
      var salt = CryptoJS.lib.WordArray.random(128 / 8);
      var key = CryptoJS.PBKDF2(encryptorKey, salt, { 
        keySize: 256 / 32, 
        iterations: 1000, 
        hasher: CryptoJS.algo.SHA512 
      });
      var iv = CryptoJS.lib.WordArray.random(128 / 8);
      var cipherText = CryptoJS.AES.encrypt(messageToEncrypt, key, { iv: iv });
      var encryptedData = salt.clone().concat(iv).concat(cipherText.ciphertext);
      return encryptedData.toString(CryptoJS.enc.Base64).replace(/(.{56})/g, '$1\n');
    },

    getUsernameFromLocalStorage() {
      if (process.client) {
        this.username = localStorage.getItem('username') || '';
      }
    }
  },

  async mounted() {
    this.checkDevice();
    this.getUsernameFromLocalStorage();

    try {
      const { long, lat } = await getCurrentPosition();
      this.long = long;
      this.lat = lat;
    } catch (error) {
      console.log("Location not captured");
    }
  }
}
</script>

<style scoped>
.desktop-blocker {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.full-width {
  width: 100%;
  margin: 0;
}

/* Materialize input focus color override */
input:focus {
  border-bottom: 1px solid #C60606 !important;
  box-shadow: 0 1px 0 0 #C60606 !important;
}
</style>