<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <div class="col s12">
                <nuxt-link to="./" class="red white-text btn">
                    Back 
                </nuxt-link>
                <b class="grey-text btn disabled">Billing history</b>
            </div>
        </div>
  
      
  
      <div class="row">

        <!-- Signature file -->
        <div class="row">
            <div class="col s12">

                <!-- Custom Modal Structure -->
                <div class="row" :class="{'hide': hideModal}">

                    <div class="row">
                        <a href="#!" class="waves-effect waves-red btn-large white red-text right" @click="hideSignatureModule()">DONE</a>
                    </div>

                    <div class="row">
                        <div class="container">
                            <div class="row">
                                <div class="col s12 center">
                                    <h6>Sign here!</h6>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12 center">
                                    <canvas id="sig-canvas" width="250px">
                                        Your phone not supporting signature
                                    </canvas>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12 center">
                                    <div class="col s6">
                                        <button class="btn btn-large red" id="sig-submitBtn">Save</button>
                                    </div>
                                    <div class="col s6">
                                        <button class="btn btn-large red" id="sig-clearBtn">Clear</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col s12">
                                    <textarea id="sig-dataUrl" class="form-control hide" rows="5">Data URL for your signature will go here!</textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>


            </div>
        </div>
        <!-- signature module ends here -->

        
        <!-- form starts here -->
        <div class="row" :class="{'hide': hideForm}">
            <div class="col s12">
                <form @submit.prevent style="margin-top: 20px">

                    <!-- <div class="row">
                        <div class="col s12" style="margin-bottom: 15px;">
                            <CustomSelect :options="['postpaid', 'prepaid']" :default="'postpaid'" class="" v-model="service_type" />
                        </div>
                    </div> -->
                    <!-- <div class="row" v-if="service_type == 'postpaid'">
                        <div class="col s9">
                            <input type="text" placeholder="Account number" v-model="account_number"> 
                        </div>
                        <div class="col s3">
                            <button class="btn btn-flat red white-text" @click="checkNumber()">Check</button>
                        </div>
                    </div>
                    <div class="row" v-if="service_type == 'prepaid'">
                        <div class="col s9">
                            <input type="text" placeholder="Meter number" v-model="meter_number"> 
                        </div>
                        <div class="col s3">
                            <button class="btn btn-flat red white-text" @click="paymentHistory()">Check</button>
                        </div>
                    </div> -->

                    <div class="row">
                        <div class="col s12">
                            <div class="flexcontainerSearch">
        
                                <div class=" input-field flexitem-datepicker">
                                <!-- <input type="date" placeholder="From" class="orange btn btn-medium btn-flat black-text" v-model="date_from" style="border-radius: 10px 0 0px 10px; margin-top: 10px;"> -->
                                    <input type="date" placeholder="From" v-model="date_from">
                                </div>
                                <div style="width: 3px;"></div>
                                <div class=" input-field flexitem-datepicker">
                                <!-- <input type="date" placeholder="To" class="orange btn btn-medium btn-flat black-text" v-model="date_to" style="border-radius: 0px 10px 10px 0px; margin-top: 10px;"> -->
                                    <input type="date" placeholder="To" v-model="date_to">
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="row">
                        <div class="col s12">
                            <input type="text" placeholder="Account number" v-model="meter_number"> 
                        </div>
                        <div class="col s12">
                            <button class="btn btn-flat red white-text col s12" @click="paymentHistory()">Check</button>
                        </div>
                    </div>


                    <div class="row" :class="{'hide': hideNoData}">

                        <div class="col s12 grey-text center">
                            <h5>
                                No data available
                            </h5>
                        </div>

                    </div>
                    

                    <div class="row" :class="{'hide': hidePaymentHistoryList}">

                        <div class="col s12">

                            <div class="card red white-text" v-for="(trans, index) in transactionList" :id="index">
                                <div class="card-content white-text">
                                    <!-- <span class="card-title" style="font-weight: 600;">Payment Details</span> -->
                                    <p><b class="yellow-text">Account Number:</b> <br> {{ trans.accountNumber }} </p>
                                    <p><b class="yellow-text">BU:</b> <br> {{ trans.bu }} </p>
                                    <p><b class="yellow-text">UT:</b> <br> {{ trans.ut }} </p>
                                    <p><b class="yellow-text">Code:</b> <br> {{ trans.code }} </p>
                                    <p><b class="yellow-text">Current Charge:</b> <br> N{{ trans.formattedCurrentCharges }} </p>
                                    <p><b class="yellow-text">Net Arrears:</b> <br> N{{ trans.formattedNetArrears }} </p>
                                    <p><b class="yellow-text">Month:</b> <br> {{ trans.periodMonth }} </p>
                                    <p><b class="yellow-text">Year:</b> <br> {{ trans.periodYear }} </p>
                                    
                                </div>
                            </div>

                            
                        </div>

                    </div>


                    <div class="row" :class="{'hide': hidePaymentHistoryDetail}">

                        <div class="col s12">

                            <div class="row" v-for="(trans, index) in transactionList" :id="trans.orderNo">
                                <div class="col s12" v-if="trans.orderNo == order_number_detail">
                                    <div class="card red white-text">
                                        <div class="card-content white-text">
                                            <span class="card-title" style="font-weight: 600;">Payment Details</span>
                                            <p><b>Account number:</b> {{ trans.accountNo }} </p>
                                            <p><b>Agency Code:</b> {{ trans.agencyCode }} </p>
                                            <p><b>Amount:</b> ₦{{ formatCurrency(trans.amount) }} </p>
                                            <p><b>Order number:</b> {{ trans.orderNo }} </p>
                                            <p><b>Transaction Date:</b> {{ trans.transactionDate }} </p>
                                            <p><b>Transaction Time:</b> {{ trans.transactionTime }} </p>
                                        </div>
                                        <div class="card-action">
                                            <button class="btn btn-flat white red-text" @click="paymentHistory">Close</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>

                    </div>
                    

                   






                   

                </form>
            </div>
        </div>
        <!-- form ends here -->
      </div>
  
      
  
    </div>
    
  </template>
  
  
  
  
  <script>
  import { Geolocation } from '@capacitor/geolocation';
  import imageCompression from 'browser-image-compression';
  import { Camera, CameraResultType } from '@capacitor/camera';
  import { defineCustomElements } from '@ionic/pwa-elements/loader';
  import { getBillingHistory} from '~/js_modules/mods'
  import CustomSelect from '~/components/CustomSelect.vue'

  export default {
      layout: 'admin_main',
      components: {
            CustomSelect,
        },
      data() {
        return {
            transactionList: [],
            transactionDetail: [],
            date_from: '',
            date_to: '',
            hidePaymentHistoryList: true,
            hidePaymentHistoryDetail: true,
            hideNoData: true,
            order_number_detail: '',


            service_type: null,
            // account_number: '0102111612',
            meter_number: '',
            account_type: '',
            account_name: '',
            account_status: '',
            tarrif: '',
            address: '',
            business_unit: '',
            undertaking_one: '',
            dt_name: '',
            phone_number: '',
            location: '',
            date_of_suspension: '',
            userId: null,
            dtNumber: '',

            pic_of_connection: '',
            pic_of_psf: '',


            pic_of_building: null,
            pic_of_installation_cutout_metering_point: null,
            pic_of_installation_cutout_metering_point2: '',
            pic_of_installation_cutout_metering_point3: '',
            pic_of_meter_nameplate: '',
            pic_of_meter_nameplate2: '',
            pic_of_meter_nameplate3: '',
            pic_of_seal_as_met: '',
            pic_of_internal_connection_if_seal_is_broken: '',
            pic_of_internal_connection_if_seal_is_broken2: '',
            pic_of_bypass: '',
            pic_of_bypass2: '',
            pic_of_bypass3: '',
            pic_of_last_bill_vending_receipt: '',
            pic_of_last_bill_vending_receipt2: '',
            pic_of_last_bill_vending_receipt3: '',
            pic_of_invitation_notice_to_customer: '',

            remarks: '',
            
            

            // remember to clean variables
            customer_name: '',
            customer_category: '',
            customer_type: '',
            nature_of_business: '',
            feeder_name: '',
            
            dt_capacity: '',
            alignment_status: '',
            current_tariff: '',
            recommended_tariff: '',
            meter_status: '',
            meter_serial_number: '', 
            replacement_meter_serial_number: '',/*here*/
            meter_manufacturer: '',
            meter_type_by_manufacturer: '',
            meter_payment_type: '',
            meter_type: '',
            meter_type_box: '',
            tube: false,
            mcb: '',
            meter_condition: '',
            no_of_service_wires: '',
            last_purchase_date: '',
            last_purchase_amount: '',
            credit_reading_on_meter: '',
            seal_status: '',
            old_seal: '',
            new_seal: '',
            inspection_conclusion: '',
            recommendation: '',
            further_remarks: '',
            
            signature: '',
            
            lat: '',
            long: '',

            dataURL: '',
            hideLoader: true,
            showSignature: false,

            hideModal: true,
            hideForm: false,



            img: "",
            scale: 100,
            quality: 50,
            originalSize: true,
            original: {},

            dataURI: '',

            

        }
      },

      methods: {


        async paymentHistory() {
            M.toast({html: '<b class="yellow-text">Please wait...</b>'})
            try {
                this.hideNoData = true

                this.date_from = this.date_from.trim()
                this.date_to = this.date_to.trim()

                if(this.date_from == '' || this.date_to == '') {
                    M.toast({html: `<b class="red-text">Please select a date</b>`})
                } else {
                    let date_from = this.formatDatePickerDate(this.date_from)
                    let date_to = this.formatDatePickerDate(this.date_to)
                    this.transactionList = await getBillingHistory(this.meter_number, date_from, date_to)
                    console.log(this.transactionList);
                    console.log(this.transactionList);
                    console.log(this.transactionList);

                    if(this.transactionList.length == 0) {
                        this.hideNoData = false
                        console.log('no data');
                    } else {
                        
                        this.hidePaymentHistoryList = false
                        this.hidePaymentHistoryDetail = true
                        this.hideNoData = true
                    }
                }

                
            } catch (error) {
                
            }
            
        },

        async getPaymentRec(order_number) {
            try {
                this.order_number_detail = order_number

                let date_from = this.formatDatePickerDate(this.date_from)
                let date_to = this.formatDatePickerDate(this.date_to)
                console.log(date_to);
                console.log('..............');
                console.log(date_from);

                this.transactionList = await getBillingHistory(this.meter_number, date_from, date_to)
                this.hidePaymentHistoryList = true
                this.hidePaymentHistoryDetail = false
            } catch (error) {
                
            }
        },

        formatDatePickerDate(dateString) {
            // Create a new Date object from the input string
            const date = new Date(dateString);
            
            // Check if the date is valid
            if (isNaN(date.getTime())) {
                throw new Error('Invalid date input');
            }

            // Get month, day, and year
            const month = String(date.getMonth() + 1).padStart(2, '0');
            const day = String(date.getDate()).padStart(2, '0');
            const year = date.getFullYear();

            // Return the formatted date string
            return `${month}/${day}/${year}`;
        },

        formatDateToString(value) {
          let stringDate = new Date(value).toDateString()
          return stringDate
        },

        formatCurrency(value) {
          if (value == undefined) {

          } else {
            return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
          }
        },

        



        

        async checkNumber () {
            

            if (this.service_type == 'prepaid') {

                // await checkCustomerMeterNumber(this.meter_number)
                console.log('make prepaid call')
                try {

                    const response = await checkCustomerMeterNumber(this.meter_number)

                    // console.log(response)

                    // console.log(response.accountNumber)
                    console.log('this is response from mods ', response)
                    
                    let users_meter_number = response.meterNumber
                    
                    if (users_meter_number == '') {
                        M.toast({html: `<b class="red-text">Please check meter number agian</b>`})
                    } else {
                        let users_account_number = response.accountNumber
                        users_account_number = users_account_number.trim()
                        this.getCustomerInfo(users_account_number)
                    }
                } catch (error) {
                    console.log(error)
                    console.log(this.service_type)
                    M.toast({html: `<b class="red-text">${error}</b>`})
                }
            } else if (this.service_type == 'postpaid') {
                this.getCustomerInfo(this.account_number)
            }
        },

        async getCustomerInfo(accountNumber) {
            
            try {
                let response = await getCustomerInfoApi(accountNumber)
                console.log(response)
                this.printCurrentPosition()
                
                this.account_type = response.accountType
                this.account_name = response.accountName
                this.account_status = response.accountStatus
                this.tarrif = response.tariff
                this.address = response.address
                this.address = response.address
                this.business_unit = response.bu
                this.undertaking_one = response.ut
                this.dt_name = response.dtName
                this.phone_number = response.mobileNumber
                this.dtNumber = response.dtNo
                
                // if (users_meter_number == '') {
                //     M.toast({html: `<b class="red-text">Please check account number agian</b>`})
                // } else {
                //     let users_account_number = response.accountNumber
                //     users_account_number = users_account_number.trim()
                // }
            } catch (error) {
                console.log(error)
                console.log(this.service_type)
                M.toast({html: `<b class="red-text">${error}</b>`})
            }
        },



        trySign() {
            (function() {
                window.requestAnimFrame = (function(callback) {
                    return window.requestAnimationFrame ||
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.oRequestAnimationFrame ||
                    window.msRequestAnimaitonFrame ||
                    function(callback) {
                        window.setTimeout(callback, 1000 / 60);
                    };
                })();

                var canvas = document.getElementById("sig-canvas");
                var ctx = canvas.getContext("2d");
                ctx.strokeStyle = "#222222";
                ctx.lineWidth = 4;

                var drawing = false;
                var mousePos = {
                    x: 0,
                    y: 0
                };
                var lastPos = mousePos;

                canvas.addEventListener("mousedown", function(e) {
                    drawing = true;
                    lastPos = getMousePos(canvas, e);
                }, false);

                canvas.addEventListener("mouseup", function(e) {
                    drawing = false;
                }, false);

                canvas.addEventListener("mousemove", function(e) {
                    mousePos = getMousePos(canvas, e);
                }, false);

                // Add touch event support for mobile
                canvas.addEventListener("touchstart", function(e) {

                }, false);

                canvas.addEventListener("touchmove", function(e) {
                    var touch = e.touches[0];
                    var me = new MouseEvent("mousemove", {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                    });
                    canvas.dispatchEvent(me);
                }, false);

                canvas.addEventListener("touchstart", function(e) {
                    mousePos = getTouchPos(canvas, e);
                    var touch = e.touches[0];
                    var me = new MouseEvent("mousedown", {
                    clientX: touch.clientX,
                    clientY: touch.clientY
                    });
                    canvas.dispatchEvent(me);
                }, false);

                canvas.addEventListener("touchend", function(e) {
                    var me = new MouseEvent("mouseup", {});
                    canvas.dispatchEvent(me);
                }, false);

                function getMousePos(canvasDom, mouseEvent) {
                    var rect = canvasDom.getBoundingClientRect();
                    return {
                    x: mouseEvent.clientX - rect.left,
                    y: mouseEvent.clientY - rect.top
                    }
                }

                function getTouchPos(canvasDom, touchEvent) {
                    var rect = canvasDom.getBoundingClientRect();
                    return {
                    x: touchEvent.touches[0].clientX - rect.left,
                    y: touchEvent.touches[0].clientY - rect.top
                    }
                }

                function renderCanvas() {
                    if (drawing) {
                    ctx.moveTo(lastPos.x, lastPos.y);
                    ctx.lineTo(mousePos.x, mousePos.y);
                    ctx.stroke();
                    lastPos = mousePos;
                    }
                }

                // Prevent scrolling when touching the canvas
                document.body.addEventListener("touchstart", function(e) {
                    if (e.target == canvas) {
                    e.preventDefault();
                    }
                }, false);
                document.body.addEventListener("touchend", function(e) {
                    if (e.target == canvas) {
                    e.preventDefault();
                    }
                }, false);
                document.body.addEventListener("touchmove", function(e) {
                    if (e.target == canvas) {
                    e.preventDefault();
                    }
                }, false);

                (function drawLoop() {
                    requestAnimFrame(drawLoop);
                    renderCanvas();
                })();

                function clearCanvas() {
                    canvas.width = canvas.width;
                }

                // Set up the UI
                var sigText = document.getElementById("sig-dataUrl");
                var sigImage = document.getElementById("sig-image");
                var clearBtn = document.getElementById("sig-clearBtn");
                var submitBtn = document.getElementById("sig-submitBtn");
                clearBtn.addEventListener("click", function(e) {
                    clearCanvas();
                    sigText.innerHTML = "Data URL for your signature will go here!";
                    sigImage.setAttribute("src", "");
                }, false);

                submitBtn.addEventListener("click", function(e) {
                    var dataUrl = canvas.toDataURL();
                    localStorage['vsmSignatureURL'] = dataUrl

                    sigText.innerHTML = dataUrl;
                    sigImage.setAttribute("src", dataUrl);
                    M.toast({html: '<b class="yellow-text">Signature saved</b>'})

                    
                }, false);

                

                })();
        },

        getDataURLFromLocalStorage() {
            this.dataURI = localStorage.getItem('vsmSignatureURL')

            if (this.dataURI == null) {
                this.dataURI == ''
            } else {
                var byteString;
                if (this.dataURI.split(',')[0].indexOf('base64') >= 0)
                    byteString = window.atob(this.dataURI.split(',')[1]);
                else
                    byteString = decodeURI(dataURI.split(',')[1]);
                // separate out the mime component
                var mimeString = this.dataURI.split(',')[0].split(':')[1].split(';')[0];
                // write the bytes of the string to a typed array
                var ia = new Uint8Array(byteString.length);
                for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                var file = new Blob([ia], {type:mimeString});
                this.signature = new File([file], `ieOfficerSignature${file.type.replace('image/', '.')}`)
            }
        },


        generateRandomString() {
            let result = '';
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            const charactersLength = characters.length;
            for (let i = 0; i < 10; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;
        },



        // all test on compression comes here

        async imagePickerForPictureOfConnection () {

            // Call the element loader after the app has been rendered the first time
            defineCustomElements(window);

            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });


            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/jpeg'});
            console.log(blob)
            

            
            this.doSomethingWithFilesimagePickerForPictureOfConnection(blob)
        },


        
        

        async doSomethingWithFilesimagePickerForPictureOfConnection(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;
            // const imageFile = event.target.files[0];

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-connection');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)
                
                this.pic_of_connection = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_connection)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_connection ', this.pic_of_connection)
                // hello()
                var xx = await uploadImage(this.userId, this.account_number, 'AccountReactivation_Connection', this.pic_of_connection)
                console.log(xx)

                
                
                
                
            } catch (error) {
                // // console.log(error);
            }

        },




        async imagePickerForPictureOfPSF () {

            // Call the element loader after the app has been rendered the first time
            defineCustomElements(window);

            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });


            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/jpeg'});
            console.log(blob)



            this.doSomethingWithFilesimagePickerForPictureOfPSF(blob)
        },





        async doSomethingWithFilesimagePickerForPictureOfPSF(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;
            // const imageFile = event.target.files[0];

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-psf');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)
                
                this.pic_of_psf = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_psf)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_connection ', this.pic_of_connection)
                // hello()
                var xx = await uploadImage(this.userId, this.account_number, 'AccountReactivation_FrontView', this.pic_of_psf)
                console.log(xx)

                
                
                
                
            } catch (error) {
                // // console.log(error);
            }

        },


 



        // image picker for building
        async imagePickerBuilding () {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            console.log(blob)

            const file = blob;
            this.doSomethingWithFilesImagePickerBuilding(blob)
        },


        async doSomethingWithFilesImagePickerBuilding(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-building');

                const compressedFile = await imageCompression(imageFile, options);
                // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB
                console.log(compressedFile)

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_building = new File([compressedFile], `pictureOfTheBuilding${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_building)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // // console.log(error);
            }

        },




        // image picker for installation cut out metering point one
        async imagePickerForInstallationCutOutMeteringPointOne() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            console.log(blob)
            this.doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne(blob)
        },


        async doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-installation-cut-out-metering-point-one');

                const compressedFile = await imageCompression(imageFile, options);
                // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_installation_cutout_metering_point = new File([compressedFile], `pictureOfInstallation${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // // console.log(error);
            }

        },








        // image picker for installation cut out metering point one
        async imagePickerForInstallationCutOutMeteringPointOne2() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            console.log(blob)
            this.doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne2(blob)
        },


        async doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne2(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-installation-cut-out-metering-point-one2');

                const compressedFile = await imageCompression(imageFile, options);
                // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_installation_cutout_metering_point2 = new File([compressedFile], `pictureOfInstallation2${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // // console.log(error);
            }

        },








        // image picker for installation cut out metering point one3
        async imagePickerForInstallationCutOutMeteringPointOne3() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            console.log(blob)
            this.doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne3(blob)
        },


        async doSomethingWithFilesImagePickerForInstallationCutOutMeteringPointOne3(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-installation-cut-out-metering-point-one3');

                const compressedFile = await imageCompression(imageFile, options);
                // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_installation_cutout_metering_point3 = new File([compressedFile], `pictureOfInstallation3${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // // console.log(error);
            }

        },






        // pic of meter nameplate one
        async imagePickerForMeteringNameplateOne() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // // console.log(blob)

            this.doSomethingWithFilesImagePickerForMeteringNameplateOne(blob)
        },


        async doSomethingWithFilesImagePickerForMeteringNameplateOne(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-meter-nameplate-one');

                const compressedFile = await imageCompression(imageFile, options);
                // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_meter_nameplate = new File([compressedFile], `meterNameplate${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // // console.log(error);
            }

        },



        // pic of meter nameplate one 2
        async imagePickerForMeteringNameplateOne2() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // // console.log(blob)

            

            this.doSomethingWithFilesImagePickerForMeteringNameplateOne2(blob)
        },


        async doSomethingWithFilesImagePickerForMeteringNameplateOne2(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-meter-nameplate-one2');

                const compressedFile = await imageCompression(imageFile, options);
                // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_meter_nameplate2 = new File([compressedFile], `meterNameplate2${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // // console.log(error);
            }

        },




        // pic of meter nameplate one 3
        async imagePickerForMeteringNameplateOne3() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // // console.log(blob)

            this.doSomethingWithFilesImagePickerForMeteringNameplateOne3(blob)
        },


        async doSomethingWithFilesImagePickerForMeteringNameplateOne3(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-meter-nameplate-one3');

                const compressedFile = await imageCompression(imageFile, options);
                // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_meter_nameplate3 = new File([compressedFile], `meterNameplate3${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // // console.log(error);
            }

        },






       



        // pic of seal as met
        async imagePickerForSealAsMet() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // // console.log(blob)


            this.doSomethingWithFilesImagePickerForSealAsMet(blob)
        },


        async doSomethingWithFilesImagePickerForSealAsMet(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-seal-as-met');

                const compressedFile = await imageCompression(imageFile, options);
                // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_seal_as_met = new File([compressedFile], `pictureOfSealAsMet${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // // console.log(error);
            }

         },
        



        // pic of internal connection if seal is broken
        async imagePickerForInternalConnectionIfSealIsBroken() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // // console.log(blob)

            this.doSomethingWithFilesImagePickerForInternalConnectionIfSealIsBroken(blob)
        },


        async doSomethingWithFilesImagePickerForInternalConnectionIfSealIsBroken(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-internal-connection-if-seal-is-broken');

                const compressedFile = await imageCompression(imageFile, options);
                // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_internal_connection_if_seal_is_broken = new File([compressedFile], `pictureOfInternalConnection${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // console.log(error);
            }

        },






        // pic of internal connection if seal is broken
        async imagePickerForInternalConnectionIfSealIsBroken2() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // // console.log(blob)

            this.doSomethingWithFilesImagePickerForInternalConnectionIfSealIsBroken2(blob)
        },


        async doSomethingWithFilesImagePickerForInternalConnectionIfSealIsBroken2(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-internal-connection-if-seal-is-broken2');

                const compressedFile = await imageCompression(imageFile, options);
                // // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_internal_connection_if_seal_is_broken2 = new File([compressedFile], `pictureOfInternalConnection2${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // console.log(error);
            }

        },




        // pic of bypass
        async imagePickerForByPass() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // console.log(blob)

            this.doSomethingWithFilesImagePickerForByPass(blob)
        },

        async doSomethingWithFilesImagePickerForByPass(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-bypass');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_bypass = new File([compressedFile], `pictureOfBypass${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // console.log(error);
            }

        },



        // pic of bypass2
        async imagePickerForByPass2() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // console.log(blob)
            this.doSomethingWithFilesImagePickerForByPass2(blob)
        },

        async doSomethingWithFilesImagePickerForByPass2(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-bypass2');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_bypass2 = new File([compressedFile], `pictureOfBypass2${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // console.log(error);
            }

        },




        // pic of bypass3
        async imagePickerForByPass3() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // console.log(blob)
            this.doSomethingWithFilesImagePickerForByPass3(blob)
        },

        async doSomethingWithFilesImagePickerForByPass3(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-bypass3');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_bypass3 = new File([compressedFile], `pictureOfBypass3${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // console.log(error);
            }

        },


















        // pic of last bill vending receipt
        async imagePickerForLastBillVendingReceipt() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // console.log(blob)
            this.doSomethingWithFilesImagePickerForLastBillVendingReceipt(blob)
        },

        async doSomethingWithFilesImagePickerForLastBillVendingReceipt(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-last-billing-vending-receipt');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_last_bill_vending_receipt = new File([compressedFile], `lastBillReceipt${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // console.log(error); 
            }

        },






        // pic of last bill vending receipt2
        async imagePickerForLastBillVendingReceipt2() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // console.log(blob)
            this.doSomethingWithFilesImagePickerForLastBillVendingReceipt2(blob)
        },

        async doSomethingWithFilesImagePickerForLastBillVendingReceipt2(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-last-billing-vending-receipt2');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_last_bill_vending_receipt2 = new File([compressedFile], `lastBillReceipt2${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // console.log(error);
            }

        },







        // pic of last bill vending receipt3
        async imagePickerForLastBillVendingReceipt3() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // console.log(blob)
            this.doSomethingWithFilesImagePickerForLastBillVendingReceipt3(blob)
        },

        async doSomethingWithFilesImagePickerForLastBillVendingReceipt3(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-last-billing-vending-receipt3');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_last_bill_vending_receipt3 = new File([compressedFile], `lastBillReceipt3${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // // console.log(this.pic_of_premises)
                
            } catch (error) {
                // console.log(error);
            }

        },
        
        


        // pic of invitation notice to customer
        async imagePickerForInvitationNoticeToCustomer() {
            const image = await Camera.getPhoto({
                quality: 100,
                allowEditing: false,
                resultType: CameraResultType.Base64
            });

            const rawData = window.atob(image.base64String);
            const bytes = new Array(rawData.length);
            for (var x = 0; x < rawData.length; x++) {
                bytes[x] = rawData.charCodeAt(x);
            }
            const arr = new Uint8Array(bytes);
            const blob = new Blob([arr], {type: 'image/png'});
            // console.log(blob)
            this.doSomethingWithFilesImagePickerForInvitationNoticeToCustomer(blob)
        },


        async doSomethingWithFilesImagePickerForInvitationNoticeToCustomer(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            // console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            // console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-invitation-notice-customer');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_invitation_notice_to_customer = new File([compressedFile], `invitationNoticeToCustomer${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                console.log(this.pic_of_invitation_notice_to_customer)
                
            } catch (error) {
                // console.log(error);
            }

        },
        





        async submit() {
            console.log('this. is dt num', this.dtNumber);
            this.hideLoader = false
            this.business_unit = this.business_unit.trim()
            this.undertaking_one = this.undertaking_one.trim()
            this.customer_name = this.customer_name.trim()
            this.address = this.address.trim()
            this.feeder_name = this.feeder_name.trim()
            this.dt_name = this.dt_name.trim()
            this.alignment_status = this.alignment_status.trim()
            this.recommended_tariff = this.recommended_tariff.trim()
            this.meter_type_by_manufacturer = this.meter_type_by_manufacturer.trim()
            this.credit_reading_on_meter = this.credit_reading_on_meter.trim()
            this.further_remarks = this.further_remarks.trim()
            this.phone_number = this.phone_number.trim()
            this.inspection_conclusion = this.inspection_conclusion.trim()
            this.getDataURLFromLocalStorage()

            var today = new Date(this.last_purchase_date);
            const months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
            let month = months[today.getMonth()];
            var date = month+' '+today.getDate()+', '+today.getFullYear();
            var time = this.formatAMPM(new Date);
            this.last_purchase_date = date + ' '+ time

            
            if (this.business_unit == '') {

            
                M.toast({html: '<b class="red-text">Fill all the field marked with *</b>'})
                this.hideLoader = true
            } else {

               

                // console.log(this.signature)
                // console.log('clicked')
                
                


                
                
                try {
                    const rawResponse = await fetch('http://192.168.6.183:8087/cwfrestapi/api/v1/crmd/accountReactivation', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.token,

                        },
                        body: JSON.stringify({
                            serviceType: this.service_type,
                            accountNo: this.account_number,
                            meterNo: this.meter_number,
                            accountType: this.account_type,
                            accountName: this.account_name,
                            accountStatus: this.account_status,
                            tariff: this.tarrif,
                            address: this.address,
                            bu: this.business_unit,
                            ut: this.undertaking_one,
                            dt: this.dt_name,
                            dtNo: this.dtNumber,
                            phoneNo: this.phone_number,
                            location: this.location,
                            dateOfSuspension: this.date_of_suspension,
                            remarks: this.remarks,
                            picOfConnection: this.pic_of_connection.name,
                            picOfFrontView: this.pic_of_psf.name
                        }),
                    })

                    const response = await rawResponse.json()

                    console.log(response)

                    if (response.statusMsg == 'Success') {
                        this.hideLoader = true
                        this.$router.push('./sent')
                    } else if (response.status == 500) {
                        console.log(response.status)
                        M.toast({html: `<b class="red-text">Session expired</b>`})
                        if(process.client) {
                            localStorage.clear()
                            window.location = './'
                        }
                    }
                } catch (error) {
                    console.log(error)
                    M.toast({html: `<b class="red-text">${error}</b>`})
                }

            }

            

        },



        formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
            return strTime;
        },

        

        // addOldSeal() {
        //     this.old_seal.push({
        //         oldSealValue: ''
        //     })
        // },

        // removeOldSeal(index) {
        //     this.old_seal.splice(index, 1)
        // },

        // clearOldSeal() {
        //     this.old_seal = [
        //         {
        //             oldSealValue: ''
        //         }
        // ]
        // },

        // addNewSeal() {
        //     this.new_seal.push({
        //         newSealValue: ''
        //     })
        // },

        // removeNewSeal(index) {
        //     this.new_seal.splice(index, 1)
        // },

        // clearNewSeal() {
        //     this.new_seal = [
        //         {
        //             newSealValue: ''
        //         }
        //     ]
        // },

        // get longitude and latitude
        async printCurrentPosition () {
            const coordinates = await Geolocation.getCurrentPosition();

            this.lat = coordinates.coords.latitude
            this.long = coordinates.coords.longitude
            this.location = `${ this.long }, ${ this.lat }`
        },

        // let me try to create a new signature
        showSignatureModule() {
            this.hideModal = false
            this.hideForm = true
        },

        hideSignatureModule() {
            this.hideModal = true
            this.hideForm = false
        },
      },

      mounted() {
        
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, options);
        });
        
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems);
        });

       


        this.trySign()
        this.userId = localStorage.getItem('userId')
        // this.paymentHistory()
      },

      created() {
        // this.printCurrentPosition()
       
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