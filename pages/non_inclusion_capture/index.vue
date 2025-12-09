<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <div class="col s12">
                <nuxt-link to="../dashboard_ie_force" class="red white-text btn">
                    Back
                </nuxt-link>
                <b class="grey-text btn disabled" style="font-size: 10px;">Non-Inclusion capture</b>
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
                    <form @submit.prevent style="margin-top: 20px" @change="checkAllNo">

                        <!-- <div class="row">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect :options="['postpaid', 'prepaid']" :default="'postpaid'" class=""
                                    v-model="service_type" />
                            </div>
                        </div>

                        <div class="row" v-if="service_type == 'postpaid'">
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
                                <button class="btn btn-flat red white-text" @click="checkNumber()">Check</button>
                            </div>
                        </div> -->

                        <div class="row">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect :options="['Free Rider',
                                    'New Customer Capture',]" :default="'Capture Type'" class="" v-model="capture_type" />
                            </div>
                        </div>

                        <div class="row">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Customer type" v-model="account_type">
                            </div>
                        </div>

                        

                        <div class="row">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Account name" v-model="account_name">
                            </div>
                        </div>

                        <div class="row">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Tarrif" v-model="tarrif">
                            </div>
                        </div>

                        <div class="row">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Address" v-model="address">
                            </div>
                        </div>

                        <div class="row">
                            <!-- business unit -->
                            <div class="col s12">
                                <b>BU:</b> {{ business_unit }}
                                <select class="custom-select" v-model="business_unit">
                                    <option value="" disabled selected>Business Unit *</option>
                                    <option value="Abule Egba">Abule Egba</option>
                                    <option value="Akowonjo">Akowonjo</option>
                                    <option value="Ikeja">Ikeja</option>
                                    <option value="Ikorodu">Ikorodu</option>
                                    <option value="Oshodi">Oshodi</option>
                                    <option value="Shomolu">Shomolu</option>
                                </select>
                            </div>
                        </div>
                        <br>

                        <div class="row">
                            <!-- undertaking one -->
                            <div class="col s12">
                                <b>UT:</b> {{ undertaking_one }}
                                <select class="custom-select" v-model="undertaking_one">
                                    <option value="" disabled selected>Undertaking *</option>
                                    <option value="ABORU">ABORU</option>
                                    <option value="ABULE-ODU">ABULE-ODU</option>
                                    <option value="ABULE-TAYLOR">ABULE-TAYLOR</option>
                                    <option value="ADIYAN">ADIYAN</option>
                                    <option value="AGO">AGO</option>
                                    <option value="AIT">AIT</option>
                                    <option value="AJAO">AJAO</option>
                                    <option value="AKUTE">AKUTE</option>
                                    <option value="AMUWO">AMUWO</option>
                                    <option value="ANIFOWOSHE">ANIFOWOSHE</option>
                                    <option value="ANTHONY MEGA">ANTHONY MEGA</option>
                                    <option value="AYANGBUREN">AYANGBUREN</option>
                                    <option value="AYOBO">AYOBO</option>
                                    <option value="BARIGA">BARIGA</option>
                                    <option value="DOPEMU">DOPEMU</option>
                                    <option value="EGBEDA">EGBEDA</option>
                                    <option value="EPE">EPE</option>
                                    <option value="FAGBA">FAGBA</option>
                                    <option value="GOWON-ESTATE">GOWON-ESTATE</option>
                                    <option value="IDIMU">IDIMU</option>
                                    <option value="IFAKO">IFAKO</option>
                                    <option value="IGANDO">IGANDO</option>
                                    <option value="IGBOBI">IGBOBI</option>
                                    <option value="IGBOBI MEGA">IGBOBI MEGA</option>
                                    <option value="IGBOGBO">IGBOGBO</option>
                                    <option value="IJAIYE">IJAIYE</option>
                                    <option value="IJEDE">IJEDE</option>
                                    <option value="IJEGUN">IJEGUN</option>
                                    <option value="IJU">IJU</option>
                                    <option value="IKOSI">IKOSI</option>
                                    <option value="IKOTUN">IKOTUN</option>
                                    <option value="ILUPEJU">ILUPEJU</option>
                                    <option value="ILUPEJU MEGA">ILUPEJU MEGA</option>
                                    <option value="IPAJA">IPAJA</option>
                                    <option value="ISOLO">ISOLO</option>
                                    <option value="KETU">KETU</option>
                                    <option value="LAMBE">LAMBE</option>
                                    <option value="LASUNWON">LASUNWON</option>
                                    <option value="MAGODO">MAGODO</option>
                                    <option value="MAGODO MEGA">MAGODO MEGA</option>
                                    <option value="MENDE">MENDE</option>
                                    <option value="OBA AKRAN">OBA AKRAN</option>
                                    <option value="ODOGUNYAN">ODOGUNYAN</option>
                                    <option value="OGBA">OGBA</option>
                                    <option value="OGUDU">OGUDU</option>
                                    <option value="OJODU">OJODU</option>
                                    <option value="OKE-AFA">OKE-AFA</option>
                                    <option value="OKE-IRA">OKE-IRA</option>
                                    <option value="OKE-ODO">OKE-ODO</option>
                                    <option value="OKOTA">OKOTA</option>
                                    <option value="OLATEJU">OLATEJU</option>
                                    <option value="OLOWORA">OLOWORA</option>
                                    <option value="OREGUN">OREGUN</option>
                                    <option value="ORILE-AGEGE">ORILE-AGEGE</option>
                                    <option value="OSHODI">OSHODI</option>
                                    <option value="OWORO">OWORO</option>
                                    <option value="OWOROSHONKI MEGA">OWOROSHONKI MEGA</option>
                                    <option value="OWUTU">OWUTU</option>
                                    <option value="PTC">PTC</option>
                                </select>
                            </div>
                        </div>

                        <div class="row">
                            <!-- DT name -->
                            <div class="col s12">
                                <input type="text" placeholder="DT name" v-model="dt_name">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s12">
                                <input type="text" v-model="phone_number" placeholder="Phone number">
                            </div>
                        </div>

                        <!-- <div class="row">
                            <div class="col s12">
                                <input type="text" v-model="account_status" placeholder="Account status" >
                            </div>
                        </div> -->

                        <div class="row">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect :options="['Bungalow', 'Duplex', 'Storey building']"
                                    :default="'Type of building *'" class="" v-model="type_of_building" />
                            </div>
                        </div>

                        <div class="row">
                            <!-- address -->
                            <div class="col s12">
                                <input type="text" placeholder="Location" v-model="location" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s12">
                                <input type="text" v-model="number_of_occupants" placeholder="Number of occupants">
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect :options="['Residential',
                                    'Commercial',
                                    'Bar or lounge',
                                    'Motel',
                                    'School',
                                    'Church',
                                    'Mosque',
                                    'Agriculture',
                                    'Nylon factory',
                                    'Pure water factory',
                                    'Other']" :default="'Use of premise'" class="" v-model="user_of_premise" />
                            </div>
                        </div>

                        

                        <div class="row">
                            <div class="col s12">
                                <input type="text" v-model="other_comments" placeholder="if Others">
                            </div>
                        </div>

                        <!-- <p>
                            <b>
                                Is account mapped to correct DT?
                            </b>
                            <br>
                            <label>
                                <input name="is_account_mapped_to_correct_dt" v-model="is_account_mapped_to_correct_dt"
                                    value="Yes" type="radio" checked />
                                <span>Yes</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="is_account_mapped_to_correct_dt" v-model="is_account_mapped_to_correct_dt"
                                    value="No" type="radio" />
                                <span>No</span>
                            </label>
                        </p>


                        <p>
                            <b>
                                Is meter bypassed?
                            </b>
                            <br>
                            <label>
                                <input name="is_meter_bypassed" type="radio" v-model="is_meter_bypassed" value="Yes"
                                    checked />
                                <span>Yes</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="is_meter_bypassed" type="radio" v-model="is_meter_bypassed" value="No" />
                                <span>No</span>
                            </label>
                        </p> -->


                        <!-- <p>
                            <b>
                                Is customer free rider?
                            </b>
                            <br>
                            <label>
                                <input name="is_customer_free_rider" type="radio" value="Yes"
                                    v-model="is_customer_free_rider" checked />
                                <span>Yes</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="is_customer_free_rider" type="radio" value="No"
                                    v-model="is_customer_free_rider" />
                                <span>No</span>
                            </label>
                        </p> -->


                        <div class="row" v-if="showReasonField">
                            <div class="col s12">
                                <input type="text" v-model="reason_customer_listing"
                                    placeholder="Why is customer not in the listing">
                            </div>
                        </div>


                        <div class="row">
                            <div class="col s12">
                                <h6 class="red-text">Remarks:</h6>
                                <textarea placeholder="Other remarks" class="materialize-textarea"
                                    v-model="other_remarks"></textarea>
                            </div>
                        </div>



                        <div class="row">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Take pictures of premises, customer wiring
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForPremises()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>
                        </div>

                        <!-- output for pic of the service wire from pole to metering point -->
                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-premises" />
                            </div>
                        </div>


                        <!-- <div class="row">
                            <div class="col s12">

                                <h6 class="red-text">
                                    Vending slip/receipt, postpaid payment receipt
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForPaymentReceipt()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-payment-receipt" />
                            </div>
                        </div> -->


                        <div class="row">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    House number, meter(s)
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
// import { Geolocation } from '@capacitor/geolocation';
import imageCompression from 'browser-image-compression';
import { Camera, CameraResultType } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { checkCustomerMeterNumber, getCustomerInfoApi, uploadImage, logOut, getCurrentPosition } from '~/js_modules/mods'
import CustomSelect from '~/components/CustomSelect.vue'

export default {
    layout: 'admin_main',
    components: {
        CustomSelect,
    },
    data() {
        return {
            disabled_bool: false,
            service_type: 'postpaid',
            account_number: '',
            meter_number: '',
            account_type: '',
            account_name: '',
            tarrif: '',
            address: '',
            dt_no: '',
            business_unit: '',
            undertaking_one: '',
            dt_name: '',
            phone_number: '',
            location: '',
            type_of_building: '',
            number_of_occupants: '',
            user_of_premise: '',
            capture_type: '',
            other_comments: '',
            is_account_mapped_to_correct_dt: 'Yes',
            is_meter_bypassed: 'Yes',
            is_customer_free_rider: 'Yes',
            reason_customer_listing: '',
            other_remarks: '',
            account_status: '',
            userId: null,
            pic_of_premise: '',
            pic_of_payment_receipt: '',
            pic_of_meter: '',


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
            pic_of_bypass: '',
            pic_of_bypass2: '',
            pic_of_bypass3: '',
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

            showReasonField: false,

        }
    },

    methods: {

        checkAllNo() {
            console.log(this.is_account_mapped_to_correct_dt);

            if (this.is_account_mapped_to_correct_dt === 'No' && this.is_meter_bypassed === 'No' && this.is_customer_free_rider === 'No') {
                this.showReasonField = true
            } else {
                this.showReasonField = false
            }
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
                this.printCurrentPosition()

                this.account_type = response.accountType
                this.account_name = response.accountName
                this.tarrif = response.tariff
                this.address = response.address
                this.business_unit = response.bu
                this.account_status = response.accountStatus
                this.undertaking_one = response.ut
                this.dt_name = response.dtName
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

        async imagePickerForPremises() {

            this.meter_number = this.meter_number.trim()
            this.account_number = this.account_number.trim()

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
            const blob = new Blob([arr], { type: 'image/jpeg' });
            console.log(blob)



            this.doSomethingWithFilesimagePickerForPremises(blob)


        },


        async doSomethingWithFilesimagePickerForPremises(event) {
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
                const output = document.getElementById('output-pic-of-premises');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_premise = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_premise)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                if(this.account_name == '') {
                    this.account_name = ' '
                }

                var xx = await uploadImage(this.userId, this.account_number, 'NonInclusionCapture_Premise', this.pic_of_premise)
                console.log(xx)





            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForPaymentReceipt() {

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
                    resultType: CameraResultType.Base64
                });


                const rawData = window.atob(image.base64String);
                const bytes = new Array(rawData.length);
                for (var x = 0; x < rawData.length; x++) {
                    bytes[x] = rawData.charCodeAt(x);
                }
                const arr = new Uint8Array(bytes);
                const blob = new Blob([arr], { type: 'image/jpeg' });
                console.log(blob)



                this.doSomethingWithFilesimagePickerForPaymentReceipt(blob)
            }


        },


        async doSomethingWithFilesimagePickerForPaymentReceipt(event) {
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
                const output = document.getElementById('output-pic-of-payment-receipt');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_payment_receipt = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_payment_receipt)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.account_number, 'NonInclusionCapture_PaymentReceipt', this.pic_of_payment_receipt)
                console.log(xx)





            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForMeter() {

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
            const blob = new Blob([arr], { type: 'image/jpeg' });
            console.log(blob)



            this.doSomethingWithFilesimagePickerForMeter(blob)


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
                var xx = await uploadImage(this.userId, this.account_number, 'NonInclusionCapture_Meter', this.pic_of_meter)
                console.log(xx)





            } catch (error) {
                // // console.log(error);
            }

        },






        async submit() {
            M.toast({ html: '<b class="yellow-text">Please wait...</b>' })
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
            const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
            let month = months[today.getMonth()];
            var date = month + ' ' + today.getDate() + ', ' + today.getFullYear();
            var time = this.formatAMPM(new Date);
            this.last_purchase_date = date + ' ' + time


            if (this.business_unit == '') {


                M.toast({ html: '<b class="red-text">Fill all the field marked with *</b>' })
                this.hideLoader = true
            } else if (this.pic_of_premise == '') {
                M.toast({ html: '<b class="red-text">Please add pic of picture of premises, customer wiring *</b>' })
            } else if (this.pic_of_meter == '') {
                M.toast({ html: '<b class="red-text">Please add pic of House number, meter(s) *</b>' })
            } else {


                try {
                    this.disabled_bool = true
                    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/nonInclusionCapture', {
                    const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/nonInclusionCapture', {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json',
                            'Authorization': 'Bearer ' + localStorage.token,
                            'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6',

                        },
                        body: JSON.stringify({
                            serviceType: this.service_type,
                            accountNo: this.account_number,
                            meterNo: this.meter_number,
                            accountType: this.account_type,
                            accountName: this.account_name,
                            tariff: this.tarrif,
                            address: this.address,
                            bu: this.business_unit,
                            ut: this.undertaking_one,
                            dt: this.dt_name,
                            accountStatus: this.account_status,
                            dtNo: this.dt_no,
                            phoneNo: this.phone_number,
                            location: this.location,
                            typeOfBuilding: this.type_of_building,
                            captureType: this.capture_type,
                            isAccountMappedToCorrectDT: this.is_account_mapped_to_correct_dt,
                            isMeterByPassed: this.is_meter_bypassed,
                            isCustomerFreeRider: this.is_customer_free_rider,
                            reasonCustomerListing: this.reason_customer_listing,
                            otherRemarks: this.other_remarks,
                            picPremise: this.pic_of_premise.name,
                            picPaymentReceipt: this.pic_of_payment_receipt.name,
                            picMeters: this.pic_of_meter.name
                        }),
                    })

                    const response = await rawResponse.json()

                    console.log(response)

                    if (response.code == '00') {
                        this.hideLoader = true
                        this.$router.push('../sent')
                    } else {
                        M.toast({ html: `<b class="green-text">${response.message}</b>` })
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




        this.trySign()
        this.userId = localStorage.getItem('userId')
        this.printCurrentPosition()
    },

    created() {
        //    this.serverModuleResponse()
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