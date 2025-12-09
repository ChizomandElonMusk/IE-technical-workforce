<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <div class="col s12">
                <nuxt-link to="../dashboard_ie_force" class="red white-text btn">
                    Back
                </nuxt-link>
                <b class="grey-text btn disabled">Token Request</b>
            </div>
        </div>



        <div class="row">

            <!-- Signature file -->
            <div class="row">
                <div class="col s12">

                    <!-- Custom Modal Structure -->
                    <div class="row" :class="{ 'hide': hideModal }">

                        <div class="row">
                            <a href="#!" class="waves-effect waves-red btn-large white red-text right"
                                @click="hideSignatureModule()">DONE</a>
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
                                <br />
                                <div class="row">
                                    <div class="col s12">
                                        <textarea id="sig-dataUrl" class="form-control hide"
                                            rows="5">Data URL for your signature will go here!</textarea>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>


                </div>
            </div>
            <!-- signature module ends here -->


            <!-- form starts here -->
            <div class="row" :class="{ 'hide': hideForm }">
                <div class="col s12">
                    <form @submit.prevent style="margin-top: 20px">







                        <div class="row">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect :options="['Tampered Token', 'Clear Negative Token']"
                                    :default="'Tampered Token'" class="" v-model="tamper_type" />
                            </div>
                        </div>

                        <!-- tracking id -->
                        <div class="row">
                            <div class="col s9">
                                <input type="text" placeholder="Tracking ID" v-model="tracking_id">
                            </div>
                            <div class="col s3">
                                <button class="btn btn-flat red white-text" @click="getRequestDetails()">Check</button>
                            </div>
                        </div>



                        <div class="row">
                            <!-- account name -->
                            <div class="col s12">
                                <input type="text" placeholder="Account Name" v-model="account_name" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- account number -->
                            <div class="col s12">
                                <input type="text" placeholder="Account Number" v-model="account_number" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- meter number -->
                            <div class="col s12">
                                <input type="text" placeholder="Meter Number" v-model="meter_number" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- Address -->
                            <div class="col s12">
                                <input type="text" placeholder="Address" v-model="address" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- Trariff/feder band -->
                            <div class="col s12">
                                <input type="text" placeholder="Tarrif" v-model="tarrif" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- Account status -->
                            <div class="col s12">
                                <input type="text" v-model="account_status" placeholder="Account status" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- Account status -->
                            <div class="col s12">
                                <input type="text" v-model="request_type" placeholder="Request Type" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- Account status -->
                            <div class="col s12">
                                <input type="text" v-model="negative_reading_value" placeholder="Negative Reading"
                                    disabled>
                            </div>
                        </div>


                        <div class="row">
                            <!-- business unit -->
                            <div class="col s12">
                                <b>BU:</b> {{ business_unit }}
                                <!-- <select class="custom-select" v-model="business_unit">
                                <option value="" disabled selected>Business Unit *</option>
                                <option value="Abule Egba">Abule Egba</option>
                                <option value="Akowonjo">Akowonjo</option>
                                <option value="Ikeja">Ikeja</option>
                                <option value="Ikorodu">Ikorodu</option>
                                <option value="Oshodi">Oshodi</option>
                                <option value="Shomolu">Shomolu</option>
                            </select> -->
                            </div>
                        </div>
                        <br>

                        <div class="row">
                            <!-- undertaking one -->
                            <div class="col s12">
                                <b>UT:</b> {{ undertaking_one }}
                            </div>
                        </div>

                        <div class="row">
                            <!-- DT name -->
                            <div class="col s12">
                                <input type="text" placeholder="DT name" v-model="dt_name" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- Feeder -->
                            <div class="col s12">
                                <input type="text" placeholder="Feeder Name" v-model="feeder_name" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- Meter Manufacturer -->
                            <div class="col s12">
                                <input type="text" placeholder="Meter Manufacturer" v-model="meter_manufacturer"
                                    disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- Meter Type -->
                            <div class="col s12">
                                <input type="text" placeholder="Meter Type" v-model="meter_type" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- Wiring Mode -->
                            <div class="col s12">
                                <input type="text" placeholder="Wiring Mode" v-model="wiring_mode" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- Customer Email -->
                            <div class="col s12">
                                <input type="text" placeholder="Customer email" v-model="customer_email">
                            </div>
                        </div>

                        <div class="row">
                            <!-- Customer Phone -->
                            <div class="col s12">
                                <input type="text" placeholder="Customer Phone Number" v-model="phone_number">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s12">
                                <input type="text" placeholder="Location" v-model="location" disabled>
                            </div>
                        </div>









                        <!-- <div class="row">
                            <div class="col s12">
                                <input type="text" v-model="phone_number" placeholder="Phone number" disabled>
                            </div>
                        </div> -->





                        <!-- <div class="row">
                            <div class="col s12">
                                <input type="text" placeholder="Location" v-model="location" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect
                                    :options="['Meter Bypass', 'Pumping Machine On Direct', 'Meter Tampered', 'Under Billing', 'Burnt Meter or Faulty meter not on postpaid', 'Meter dispensing free', 'Free rider', 'Suspended account but connected to power', 'Negative reading', 'Others']"
                                    :default="'Type of Infraction *'" class="" v-model="type_of_infra" />
                            </div>
                        </div>

                        <div class="row" v-if="negative_reading == true">
                            <div class="col s3">
                                <b style="font-weight: 800; font-size: 30px;">
                                    -
                                </b>
                            </div>
                            <div class="col s9" style="margin-left: -70px;">
                                <input type="text" v-model="negative_reading_value"
                                    placeholder="Enter negative reading">
                            </div>
                        </div>

                        <div class="row center" v-if="pumping_maching_on_direct == true">
                            <div class="col s12" @click="addNewField()">
                                <b style="font-weight: 800; font-size: 30px;">
                                    +
                                </b>
                            </div>

                            <div v-for="field in formFields" :key="field.id">
                                <div class="col s9">
                                    <input type="text" placeholder="Meter number" v-model="field.value">
                                </div>
                                <div class="col s3">
                                    <b class="red-text" style="font-weight: 800; font-size: 30px;"
                                        @click="removeForm(field.id)">
                                        -
                                    </b>
                                </div>
                            </div>
                        </div>


                        <div class="row">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect
                                    :options="['unknown', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24',]"
                                    :default="'Duration of theft *'" class="" v-model="duration_of_theft" />
                            </div>
                        </div> -->



                        <div class="row">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Picture of the Meter (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForMeter()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>
                        </div>

                        <!-- output for pic of the service wire from pole to metering point -->
                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-meter" />
                            </div>
                        </div>




                        <div class="row">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    <!-- Formerly Picture of theft -->
                                    Picture of the Meter Installation Point (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForMeterInstallationPoint()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>
                        </div>

                        <!-- output for pic of the service wire from pole to metering point -->
                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-meter-installation-point" />
                            </div>
                        </div>




                        <div class="row">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    <!-- Formerly Picture of customer meter if any -->
                                    Picture of building (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForBuilding()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>
                        </div>

                        <!-- output for pic of the service wire from pole to metering point -->
                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-building" />
                            </div>
                        </div>





                        <div class="row">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    <!-- Fomerly Additional Pic -->
                                    Picture of the Seal (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForSeal()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>
                        </div>

                        <!-- output for pic of the service wire from pole to metering point -->
                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-seal" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s12 input-field">
                                <textarea class=" materialize-textarea" name="" id="" placeholder="Further Remarks (*)"
                                    v-model="further_remarks"></textarea>
                            </div>
                        </div>









                        <div class="row center">
                            <!-- Modal Trigger -->
                            <!-- <a class="waves-effect waves-light btn white red-text center" @click="showSignatureModule()">Click here to add signature</a> -->
                        </div>
                        <!-- signature image  -->
                        <!-- <div class="container">
                        <br/>
                        <div class="row">
                            <div class="col s12">
                                <img id="sig-image" src="" alt=""/>
                            </div>
                        </div>
                    </div> -->

                        <!-- <div class="row">
                        <PreLoader :class="{'hide': hideLoader}" class="center" />
                    </div> -->









                        <div class="row center safe-area-bottom">
                            <div class="col s12">
                                <button class="btn btn-large red" style="width: 300px; margin-top: 20px;"
                                    @click="submit" :disabled="disabled_bool">Submit</button>
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
//   import { Geolocation } from '@capacitor/geolocation';
import imageCompression from 'browser-image-compression';
import { Camera, CameraResultType } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { getRequestDetailsWithTrackingId, checkCustomerMeterNumber, getCustomerInfoApi, uploadImage, logOut, getCurrentPosition } from '~/js_modules/mods'
import CustomSelect from '~/components/CustomSelect.vue'

export default {
    layout: 'admin_main',
    components: {
        CustomSelect,
    },
    data() {
        return {
            disabled_bool: false,
            service_type: null,
            tracking_id: '',
            account_number: '',
            meter_number: '',
            account_type: '',
            account_name: '',
            dt_no: '',
            tarrif: '',
            address: '',
            business_unit: '',
            type_of_infra: '',
            undertaking_one: '',
            dt_name: '',
            wiring_mode: '',
            customer_email: '',
            phone_number: '',
            tamper_type: 'Tampered Token',

            location: '',
            duration_of_theft: '',
            account_status: '',
            request_type: '',
            negative_reading: '',
            userId: null,
            pic_of_meter: '',
            pic_of_meter_installation_point: '',
            pic_of_building: '',
            pic_of_seal: '',
            pumping_maching_on_direct: false,
            negative_reading_value: '0',
            formFields: [],
            nextId: 1,

            pic_of_the_service_wire_from_pole_to_metering_point: '',
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
            pic_of_meter_installation_point2: '',
            pic_of_meter_installation_point3: '',
            pic_of_last_bill_vending_receipt: '',
            pic_of_last_bill_vending_receipt2: '',
            pic_of_last_bill_vending_receipt3: '',
            pic_of_invitation_notice_to_customer: '',

            remarks: '',
            additional_remark: '',



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

    watch: {
        type_of_infra(newVal) {
            if (newVal === 'Negative reading') {
                this.negative_reading = true
            } else if (newVal === 'Pumping Machine On Direct') {
                this.pumping_maching_on_direct = true
            } else {
                this.negative_reading_value = '0'
                this.negative_reading = false
                this.pumping_maching_on_direct = false
            }
        }
    },

    methods: {

        addNewField() {
            this.formFields.push({
                id: this.nextId,
                value: ''
            })
            this.nextId++
        },

        removeForm(id) {
            const index = this.formFields.findIndex(field => field.id === id);
            if (index !== -1) {
                this.formFields.splice(index, 1)
            }
        },

        getAllFormValues() {
            return this.formFields.map(field => field.value)
        },

        async checkNumber() {


            if (this.service_type == 'prepaid') {

                // await checkCustomerMeterNumber(this.meter_number)
                console.log('make postpaid call')
                try {

                    const response = await checkCustomerMeterNumber(this.meter_number)

                    // console.log(response)

                    // console.log(response.accountNumber)
                    console.log('this is response from mods ', response)

                    let users_meter_number = response.meterNumber

                    if (users_meter_number == '') {
                        M.toast({ html: `<b class="red-text">Please check meter number agian</b>` })
                    } else {
                        this.account_number = response.accountNumber
                        let users_account_number = response.accountNumber
                        users_account_number = users_account_number.trim()
                        this.getCustomerInfo(users_account_number)
                    }
                } catch (error) {
                    console.log(error)
                    console.log(this.service_type)
                    M.toast({ html: `<b class="red-text">${error}</b>` })
                }
            } else if (this.service_type == 'postpaid') {
                this.getCustomerInfo(this.account_number)
            }
        },

        async getCustomerInfo(accountNumber) {

            try {
                let response = await getCustomerInfoApi(accountNumber)
                console.log(response)
                await this.printCurrentPosition()

                this.account_type = response.accountType
                this.account_name = response.accountName
                this.tarrif = response.tariff
                this.address = response.address
                this.business_unit = response.bu
                this.account_status = response.accountStatus
                this.undertaking_one = response.ut
                this.dt_name = response.dt
                this.request_type = response.dt
                this.phone_number = response.mobileNumber
                this.dt_no = response.dtNo

                // if (users_meter_number == '') {
                //     M.toast({html: `<b class="red-text">Please check account number agian</b>`})
                // } else {
                //     let users_account_number = response.accountNumber
                //     users_account_number = users_account_number.trim()
                // }
            } catch (error) {
                console.log(error)
                console.log(this.service_type)
                M.toast({ html: `<b class="red-text">${error}</b>` })
            }
        },


        async getRequestDetails() {

            try {
                let response = await getRequestDetailsWithTrackingId(this.tracking_id)
                console.log(response)
                await this.printCurrentPosition()

                // this.account_type = response.accountType
                this.account_name = response[0].accountName
                console.log(this.account_name);
                console.log(this.account_name);
                console.log(this.account_name);
                this.account_number = response[0].accountNo
                this.tarrif = response[0].tariff
                this.address = response[0].address
                this.business_unit = response[0].bu
                this.account_status = response[0].accountStatus
                this.undertaking_one = response[0].ut
                this.feeder_name = response[0].feederName
                this.meter_number = response[0].meterNo
                this.meter_type = response[0].meterType
                this.meter_manufacturer = response[0].meterManufacturer
                this.wiring_mode = response[0].wiringMode
                this.phone_number = response[0].phoneNo
                this.dt_no = response[0].dtNo
                this.dt_name = response[0].dt
                this.request_type = response[0].reqType
                this.negative_reading_value = response[0].negReading
                console.log(this.account_status);
                console.log(this.account_status);
                console.log(this.account_status);
                if (this.negative_reading_value == null) {
                    this.negative_reading_value = 0
                }


            } catch (error) {
                console.log(error)

                M.toast({ html: `<b class="red-text">${error}</b>` })
            }
        },


        trySign() {
            (function () {
                window.requestAnimFrame = (function (callback) {
                    return window.requestAnimationFrame ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame ||
                        window.oRequestAnimationFrame ||
                        window.msRequestAnimaitonFrame ||
                        function (callback) {
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

                canvas.addEventListener("mousedown", function (e) {
                    drawing = true;
                    lastPos = getMousePos(canvas, e);
                }, false);

                canvas.addEventListener("mouseup", function (e) {
                    drawing = false;
                }, false);

                canvas.addEventListener("mousemove", function (e) {
                    mousePos = getMousePos(canvas, e);
                }, false);

                // Add touch event support for mobile
                canvas.addEventListener("touchstart", function (e) {

                }, false);

                canvas.addEventListener("touchmove", function (e) {
                    var touch = e.touches[0];
                    var me = new MouseEvent("mousemove", {
                        clientX: touch.clientX,
                        clientY: touch.clientY
                    });
                    canvas.dispatchEvent(me);
                }, false);

                canvas.addEventListener("touchstart", function (e) {
                    mousePos = getTouchPos(canvas, e);
                    var touch = e.touches[0];
                    var me = new MouseEvent("mousedown", {
                        clientX: touch.clientX,
                        clientY: touch.clientY
                    });
                    canvas.dispatchEvent(me);
                }, false);

                canvas.addEventListener("touchend", function (e) {
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
                document.body.addEventListener("touchstart", function (e) {
                    if (e.target == canvas) {
                        e.preventDefault();
                    }
                }, false);
                document.body.addEventListener("touchend", function (e) {
                    if (e.target == canvas) {
                        e.preventDefault();
                    }
                }, false);
                document.body.addEventListener("touchmove", function (e) {
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
                clearBtn.addEventListener("click", function (e) {
                    clearCanvas();
                    sigText.innerHTML = "Data URL for your signature will go here!";
                    sigImage.setAttribute("src", "");
                }, false);

                submitBtn.addEventListener("click", function (e) {
                    var dataUrl = canvas.toDataURL();
                    localStorage['vsmSignatureURL'] = dataUrl

                    sigText.innerHTML = dataUrl;
                    sigImage.setAttribute("src", dataUrl);
                    M.toast({ html: '<b class="yellow-text">Signature saved</b>' })


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
                var file = new Blob([ia], { type: mimeString });
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





        async imagePickerForMeter() {

            this.meter_number = this.meter_number.trim()
            this.account_number = this.account_number.trim()
            if (this.meter_number == '' && this.account_number == '') {
                M.toast({ html: `<b class="red-text">Please enter an Account OR Meter Number</b>` })
            } else {
                // Call the element loader after the app has been rendered the first time
                defineCustomElements(window);

                const image = await Camera.getPhoto({
                    quality: 100,
                    allowEditing: false,
                    resultType: CameraResultType.Base64,
                });


                const rawData = window.atob(image.base64String);
                const bytes = new Array(rawData.length);
                for (var x = 0; x < rawData.length; x++) {
                    bytes[x] = rawData.charCodeAt(x);
                }
                const arr = new Uint8Array(bytes);
                const blob = new Blob([arr], { type: 'image/jpeg' });
                console.log(blob)



                this.doSomethingWithFilesimagePickerForMeter(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMeter(event) {
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
                const output = document.getElementById('output-pic-of-meter');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_meter = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_meter)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.account_number, 'TokenRequest_Meter', this.pic_of_meter)
                console.log(xx)





            } catch (error) {
                // // console.log(error);
            }

        },


        async imagePickerForMeterInstallationPoint() {

            this.meter_number = this.meter_number.trim()
            this.account_number = this.account_number.trim()
            if (this.meter_number == '' && this.account_number == '') {
                M.toast({ html: `<b class="red-text">Please enter an Account OR Meter Number</b>` })
            } else {
                // Call the element loader after the app has been rendered the first time
                defineCustomElements(window);

                const image = await Camera.getPhoto({
                    quality: 100,
                    allowEditing: false,
                    resultType: CameraResultType.Base64,
                });


                const rawData = window.atob(image.base64String);
                const bytes = new Array(rawData.length);
                for (var x = 0; x < rawData.length; x++) {
                    bytes[x] = rawData.charCodeAt(x);
                }
                const arr = new Uint8Array(bytes);
                const blob = new Blob([arr], { type: 'image/jpeg' });
                console.log(blob)



                this.doSomethingWithFilesimagePickerForMeterInstallationPoint(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMeterInstallationPoint(event) {
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
                const output = document.getElementById('output-pic-of-meter-installation-point');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_meter_installation_point = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.account_number, 'TokenRequest_MeterInstPoint', this.pic_of_meter_installation_point)
                console.log(xx)





            } catch (error) {
                // // console.log(error);
            }

        },









        async imagePickerForBuilding() {

            this.meter_number = this.meter_number.trim()
            this.account_number = this.account_number.trim()
            if (this.meter_number == '' && this.account_number == '') {
                M.toast({ html: `<b class="red-text">Please enter an Account OR Meter Number</b>` })
            } else {
                // Call the element loader after the app has been rendered the first time
                defineCustomElements(window);

                const image = await Camera.getPhoto({
                    quality: 100,
                    allowEditing: false,
                    resultType: CameraResultType.Base64,
                });


                const rawData = window.atob(image.base64String);
                const bytes = new Array(rawData.length);
                for (var x = 0; x < rawData.length; x++) {
                    bytes[x] = rawData.charCodeAt(x);
                }
                const arr = new Uint8Array(bytes);
                const blob = new Blob([arr], { type: 'image/jpeg' });
                console.log(blob)



                this.doSomethingWithFilesimagePickerForBuilding(blob)
            }


        },


        async doSomethingWithFilesimagePickerForBuilding(event) {
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
                const output = document.getElementById('output-pic-of-building');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_building = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.account_number, 'TokenRequest_Building', this.pic_of_building)
                console.log(xx)





            } catch (error) {
                // // console.log(error);
            }

        },


        async imagePickerForSeal() {

            this.meter_number = this.meter_number.trim()
            this.account_number = this.account_number.trim()
            if (this.meter_number == '' && this.account_number == '') {
                M.toast({ html: `<b class="red-text">Please enter an Account OR Meter Number</b>` })
            } else {
                // Call the element loader after the app has been rendered the first time
                defineCustomElements(window);

                const image = await Camera.getPhoto({
                    quality: 100,
                    allowEditing: false,
                    resultType: CameraResultType.Base64,
                });


                const rawData = window.atob(image.base64String);
                const bytes = new Array(rawData.length);
                for (var x = 0; x < rawData.length; x++) {
                    bytes[x] = rawData.charCodeAt(x);
                }
                const arr = new Uint8Array(bytes);
                const blob = new Blob([arr], { type: 'image/jpeg' });
                console.log(blob)



                this.doSomethingWithFilesimagePickerForSeal(blob)
            }


        },


        async doSomethingWithFilesimagePickerForSeal(event) {
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
                const output = document.getElementById('output-pic-of-seal');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_seal = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)

                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.account_number, 'TokenRequest_Seal', this.pic_of_seal)
                console.log(xx)





            } catch (error) {
                // // console.log(error);
            }

        },



        // all test on compression comes here








        async submit() {
            // get all the form value in the dynamic list 



            // Add null checks before calling trim()
            this.business_unit = (this.business_unit || '').trim()
            this.undertaking_one = (this.undertaking_one || '').trim()
            // this.customer_name = (this.customer_name || '').trim()
            this.address = (this.address || '').trim()
            this.feeder_name = (this.feeder_name || '').trim()
            this.dt_name = (this.dt_name || '').trim()
            this.further_remarks = (this.further_remarks || '').trim()
            this.phone_number = (this.phone_number || '').trim()


            this.getDataURLFromLocalStorage()

            var today = new Date(this.last_purchase_date);
            const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
            let month = months[today.getMonth()];
            var date = month + ' ' + today.getDate() + ', ' + today.getFullYear();
            var time = this.formatAMPM(new Date);
            this.last_purchase_date = date + ' ' + time



            // Check each condition separately
            const isBusinessUnitEmpty = this.business_unit === ''


            if (isBusinessUnitEmpty) {
                M.toast({ html: '<b class="red-text">Fill all the field marked with *</b>' })
                this.hideLoader = true
            } else if (this.pic_of_meter == '') {
                M.toast({ html: '<b class="red-text">Please add pic of Meter *</b>' })
            } else if (this.pic_of_meter_installation_point == '') {
                M.toast({ html: '<b class="red-text">Please add pic of Installation point *</b>' })
            } else if (this.pic_of_building == '') {
                M.toast({ html: '<b class="red-text">Please add pic of building *</b>' })
            } else if (this.pic_of_seal == '') {
                M.toast({ html: '<b class="red-text">Please add pic of Seal *</b>' })
            } else if (this.further_remarks == '') {
                M.toast({ html: '<b class="red-text">Please add Further remarks *</b>' })
            } else {





                try {
                    this.disabled_bool = true
                    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/tokenrequest', {
                    const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/tokenrequest', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.token,
                            'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6',

                        },
                        body: JSON.stringify({
                            accountNo: this.account_number,
                            meterNo: this.meter_number,
                            accountType: this.account_type,
                            accountName: this.account_name,
                            tariff: this.tarrif,
                            address: this.address,
                            bu: this.business_unit,
                            ut: this.undertaking_one,
                            dt: this.dt_name,
                            feederName: this.feeder_name,
                            email: this.customer_email,
                            requestType: this.request_type,
                            negReading: this.negative_reading_value,
                            accountStatus: this.account_status,
                            dtNo: this.dt_no,
                            phoneNo: this.phone_number,
                            typeOfToken: this.tamper_type,
                            wiringMode: this.wiring_mode,
                            meterManufacturer: this.meter_manufacturer,
                            // location: "3.334432, 6.322344",
                            location: this.location,
                            picOfMeter: this.pic_of_meter.name,
                            picOfMeterInstallationPoint: this.pic_of_meter_installation_point.name,
                            picOfBuilding: this.pic_of_building.name,
                            picOfSeal: this.pic_of_seal.name,
                            reqTrackingId: this.tracking_id,
                        }),
                    })

                    const response = await rawResponse.json()

                    console.log(response)

                    if (response.code == '00') {
                        this.hideLoader = true
                        this.$router.push('../sent')
                        localStorage.setItem('service_type', '')
                        localStorage.setItem('meter_number', '')
                        localStorage.setItem('account_number', '')
                    } else {
                        M.toast({ html: `<b class="green-text">${response.message}</b>` })
                        this.disabled_bool = false
                    }
                } catch (error) {
                    console.log(error)
                    M.toast({ html: `<b class="red-text">${error}</b>` })
                    this.disabled_bool = false
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
            minutes = minutes < 10 ? '0' + minutes : minutes;
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
        async printCurrentPosition() {
            const { long, lat } = await getCurrentPosition();

            this.long = long
            this.lat = lat

            this.location = `${this.long}, ${this.lat}`
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

        getMeterNumberFromStorage() {
            let service_type = localStorage.getItem('service_type')
            service_type = service_type.trim()

            let meter_number = localStorage.getItem('meter_number')
            meter_number = meter_number.trim()
            let account_number = localStorage.getItem('account_number')
            account_number = account_number.trim()

            if (service_type == '' && meter_number == '' && account_number == '') {
                console.log('it is undefined');
            } else {
                this.meter_number = meter_number
                this.account_number = account_number
                this.service_type = service_type
                this.checkNumber()
                console.log('i was called here hre hre');
            }

            console.log('service type: ', service_type, '. meter number: ', meter_number);
        },
    },

    mounted() {

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, options);
        });

        document.addEventListener('DOMContentLoaded', function () {
            var elems = document.querySelectorAll('select');
            var instances = M.FormSelect.init(elems);
        });

        this.getMeterNumberFromStorage()




        this.trySign()
        this.userId = localStorage.getItem('userId')
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