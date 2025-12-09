<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <div class="col s12">
                <nuxt-link to="../dashboard_ie_force" class="red white-text btn">
                    Back
                </nuxt-link>
                <b class="grey-text btn disabled">Customer Mapping</b>
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
            <div class="row" :class="{ 'hide': hideForm }" @change="newDTinAnotherUTStateChange()">
                <div class="col s12">
                    <form @submit.prevent style="margin-top: 20px">

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect :options="['postpaid', 'prepaid']" :default="'postpaid'" class=""
                                    v-model="service_type" />
                            </div>
                        </div>
                        <div class="row" v-if="service_type == 'postpaid'" :class="{ 'hide': hideOtherFormElements }">
                            <div class="col s9">
                                <input type="text" placeholder="Account number" v-model="account_number">
                            </div>
                            <div class="col s3">
                                <button class="btn btn-flat red white-text" @click="checkNumber()">Check</button>
                            </div>
                        </div>
                        <div class="row" v-if="service_type == 'prepaid'" :class="{ 'hide': hideOtherFormElements }">
                            <div class="col s9">
                                <input type="text" placeholder="Meter number" v-model="meter_number">
                            </div>
                            <div class="col s3">
                                <button class="btn btn-flat red white-text" @click="checkNumber()">Check</button>
                            </div>
                        </div>

                        <!-- <div class="row">

                        <div class="col s12">
                            <select v-model="service_type" style="padding: 10px !important; border: 1px solid #ccc !important; border-radius: 5px !important; width: 100% !important; box-sizing: border-box !important; background-color: #fff !important; color: #333 !important;">
                                <option value="" disabled selected>Service Type *</option>
                                <option value="postpaid">Postpaid</option>
                                <option value="prepaid">Prepaid</option>
                            </select>
                        </div>
                    </div>

                     -->

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Account type" v-model="account_type" disabled>
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Account name" v-model="account_name" disabled>
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Account status" v-model="account_status" disabled>
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Tarrif" v-model="tarrif" disabled>
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Address" v-model="address" disabled>
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <!-- business unit -->
                            <div class="col s12">
                                <b>BU:</b> {{ business_unit }}
                            </div>
                        </div>
                        <br>

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <!-- undertaking one -->
                            <div class="col s12">
                                <b>UT:</b> {{ undertaking_one }}
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <!-- DT name -->
                            <div class="col s12">
                                <b>DT:</b>
                                <input type="text" placeholder="DT" v-model="dt_name" disabled>
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <div class="col s12">
                                <b>DT number:</b>
                                <input type="text" v-model="dt_no" placeholder="DT number" disabled>
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <div class="col s12">
                                <b>Current feeder band:</b>
                                <input type="text" v-model="current_feeder_band" placeholder="Current feeder band"
                                    disabled>
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <div class="col s12">
                                <b>Phone number:</b>
                                <input type="text" v-model="phone_number" placeholder="Phone number" disabled>
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <!-- address -->
                            <div class="col s12">
                                <input type="text" placeholder="Location" v-model="location" disabled>
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <div class="col s12">
                                <p>
                                    <b>
                                        Is DT Mapping correct
                                    </b>
                                    <br>
                                    <label>
                                        <input name="is_dt_in_another_ut" type="radio" value="yes"
                                            v-model="is_dt_in_another_ut" checked />
                                        <span>Yes</span>
                                    </label>
                                </p>
                                <p>
                                    <label>
                                        <input name="is_dt_in_another_ut" type="radio" value="no"
                                            v-model="is_dt_in_another_ut" />
                                        <span>No</span>
                                    </label>
                                </p>
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideProposedData }">
                            <div class="col s12">
                                <table class="striped">
                                    <tbody>

                                        <tr>
                                            <td>Proposed DT No:</td>
                                            <td>
                                                <b class="black-text">{{ proposed_dt_number }}</b>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Current DT Name:</td>
                                            <td>
                                                <b class="black-text">{{ dt_name }}</b>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Proposed DT Name:</td>
                                            <td>
                                                <b class="black-text">{{ proposed_dt_name }}</b>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Proposed UT:</td>
                                            <td>
                                                <b class="black-text">{{ proposed_ut }}</b>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Proposed BU:</td>
                                            <td>
                                                <b class="black-text">{{ proposed_bu }}</b>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Proposed Feeder Band:</td>
                                            <td>
                                                <b class="black-text">{{ proposed_feeder_band }}</b>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>Mapping Status:</td>
                                            <td>
                                                <b class="black-text">{{ mapping_status }}</b>
                                            </td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- <div class="row center" :class="{'hide': hideSearchBtn}">
                        <div class="col s12" >
                            <button class="btn btn-large orange black-text col s12" style="margin-bottom: 20px;"  @click="showSearchScreen">Search Proposed DT</button>
                        </div>
                    </div> -->

                        <div class="row center" :class="{ 'hide': hideSearchScreen }">
                            <div class="col s12">
                                <button class="btn btn-large red col s12" style="margin-bottom: 20px;"
                                    @click="cancelSearch">Cancel Search</button>
                            </div>
                        </div>

                        <div class="row" :class="{ 'hide': hideSearchScreen }">
                            <div class="col s9">
                                <input type="text" placeholder="Enter DT" v-model="dtSearchQuery">
                            </div>
                            <div class="col s3">
                                <button class="btn btn-flat red white-text" @click="searchDT()">Search</button>
                            </div>

                            <!-- dt table list -->
                            <div class="col s12">
                                <table class="striped">
                                    <thead>
                                        <tr>
                                            <th>DT No</th>
                                            <th>DT Name</th>
                                            <th>Feeder Band</th>
                                        </tr>
                                    </thead>

                                    <tbody v-for="(dt, index) in dtList" :id="dt.dtNo">
                                        <tr>
                                            <td @click="selectedData(dt)" class="blue-text">
                                                {{ dt.dtNo }}
                                                <!-- <a href="#!" v-on:click="getPaymentRec(dt.dtNo, trans.agencyCode)">
                                                {{ index + 1 }}
                                            </a> -->
                                            </td>
                                            <td>{{ dt.dtName }}</td>
                                            <td>{{ dt.feederBand }}</td>

                                        </tr>

                                    </tbody>
                                </table>
                            </div>

                            <div class="col s12 center" :class="{ 'hide': hideLoading }">
                                <b class="grey-text">Please wait...</b>
                            </div>

                            <div class="col s12 center" :class="{ 'hide': hideNoData }">
                                <b class="grey-text">No data available</b>
                            </div>
                        </div>

                        <!-- Upgrade, downgrade or same  -->
                        <!-- Search proposed DT  -->


                        <div class="row" :class="{ 'hide': hideOtherFormElements }">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    <!-- Formerly Picture of theft -->
                                    Picture of Building (*)
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









                        <div class="row center safe-area-bottom" :class="{ 'hide': hideOtherFormElements }">
                            <div class="col s12">
                                <button class="btn btn-large red col s12" @click="submit"
                                    :disabled="disabled_bool">Submit</button>
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
import { checkCustomerMeterNumber, getCustomerInfoApi, getDTSearch, uploadImage, logOut, getCurrentPosition } from '~/js_modules/mods'
import CustomSelect from '~/components/CustomSelect.vue'

export default {
    layout: 'admin_main',
    components: {
        CustomSelect,
    },
    data() {
        return {
            disabled_bool: true,
            service_type: null,
            account_number: '',
            meter_number: '',
            account_type: '',
            account_name: '',
            dt_no: '',
            current_feeder_band: '',
            account_status: '',
            tarrif: '',
            address: '',
            business_unit: '',
            undertaking_one: '',
            dt_name: '',
            phone_number: '',
            location: '',
            new_dt_nomenclature: '',
            is_dt_in_another_ut: 'yes',
            additional_phone_number: '',
            dtList: [],
            selectedDT: '',
            userId: null,
            dtSearchQuery: '',

            proposed_dt_number: '',
            proposed_dt_name: '',
            proposed_ut: '',
            proposed_bu: '',
            proposed_feeder_band: '',
            mapping_status: '',

            feederHierarchy: {
                'A': 4,
                'Bilateral': 4,
                'B': 3,
                'C': 2,
                'D': 1
            },

            hideSearchBtn: true,
            hideOtherFormElements: false,
            hideSearchScreen: true,
            hideProposedData: true,
            hideLoading: true,
            hideNoData: true,



            // pic_of_the_service_wire_from_pole_to_metering_point: '',
            pic_of_building: '',
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
            hideLoading: true,
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

        async newDTinAnotherUTStateChange() {
            this.current_feeder_band = this.current_feeder_band.trim()
            if (this.current_feeder_band == '') {
                M.toast({ html: `<b class="red-text">Please fetch customer data!</b>` })
                this.is_dt_in_another_ut = 'yes'
            } else {
                this.is_dt_in_another_ut = this.is_dt_in_another_ut.trim()
                if (this.is_dt_in_another_ut == 'no' || this.is_dt_in_another_ut == '') {
                    // this.hideSearchBtn = false
                    this.hideOtherFormElements = true
                    this.hideSearchBtn = true
                    this.hideSearchScreen = false
                    this.dtList = []
                    this.disabled_bool = false
                    // this.hideProposedData = true
                } else if (this.is_dt_in_another_ut == 'yes') {
                    this.hideOtherFormElements = false
                    this.hideSearchScreen = true
                    this.hideProposedData = true
                    this.disabled_bool = true
                }
            }
            // this.hideOtherFormElements = true
            // this.hideSearchBtn = true
            // this.hideSearchScreen = false
            // this.hideProposedData =
        },

        async showSearchScreen() {
            this.hideOtherFormElements = true
            this.hideSearchBtn = true
            this.hideSearchScreen = false
        },

        async cancelSearch() {
            this.hideOtherFormElements = false
            this.hideSearchScreen = true
            this.is_dt_in_another_ut = 'yes'
            this.dtSearchQuery = ''
        },

        async searchDT() {
            // console.log('clicked');
            this.hideLoading = false
            this.hideNoData = true
            this.hideSearchBtn = true
            this.dtSearchQuery = this.dtSearchQuery.trim()
            if (this.dtSearchQuery == '') {
                this.hideLoading = true
                M.toast({ html: `<b class="red-text">Search field can not be empty!</b>` })
            } else {
                this.hideSearchBtn = true
                let responseSearch = await getDTSearch(this.dtSearchQuery)
                console.log('this is the response for res ', responseSearch)
                console.log('this is the response for res ', responseSearch)
                console.log('this is the response for res ', responseSearch)
                console.log('this is the response for res ', responseSearch)

                if (responseSearch.length == 0) {
                    this.hideNoData = false
                } else {
                    this.dtList = responseSearch
                    this.hideNoData = true
                }
                this.hideLoading = true
                console.log(responseSearch);
            }
        },

        async selectedData(dt) {
            this.selectedDT = dt
            console.log('this is the selected DT ', this.selectedDT);
            this.proposed_dt_number = dt.dtNo
            this.proposed_dt_name = dt.dtName
            this.proposed_feeder_band = dt.feederBand
            this.proposed_ut = dt.ut
            this.proposed_bu = dt.bu

            this.hideOtherFormElements = false
            this.hideSearchScreen = true
            this.hideProposedData = false
            // this.is_dt_in_another_ut = 'no'
            this.mapping_status = this.compareFeeder(this.current_feeder_band, this.proposed_feeder_band)
            this.dtSearchQuery = ''
        },

        compareFeeder(currentFeeder, proposedFeeder) {
            // Normalize 'Bilateral' to 'A'
            currentFeeder = currentFeeder === 'Bilateral' ? 'A' : currentFeeder;
            proposedFeeder = proposedFeeder === 'Bilateral' ? 'A' : proposedFeeder;

            // Get the hierarchy levels
            const currentLevel = this.feederHierarchy[currentFeeder];
            const proposedLevel = this.feederHierarchy[proposedFeeder];
            console.log(currentLevel);
            console.log(proposedLevel);

            // Check if the feeders are valid
            if (currentLevel === undefined || proposedLevel === undefined) {
                return "Invalid feeder type";
            }

            // Compare the levels
            if (currentLevel === proposedLevel) {
                return "Same";
            } else if (proposedLevel > currentLevel) {
                return "Upgrade";
            } else {
                return "Downgrade";
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
                await this.printCurrentPosition()

                this.account_type = response.accountType
                this.account_name = response.accountName
                this.tarrif = response.tariff
                this.address = response.address
                this.business_unit = response.bu
                this.undertaking_one = response.ut
                this.dt_name = response.dtName
                this.phone_number = response.mobileNumber
                this.dt_no = response.dtNo
                this.current_feeder_band = response.feederBand
                this.account_status = response.accountStatus

                if (this.account_status == 'Deactivated' || this.is_dt_in_another_ut == 'yes') {
                    this.disabled_bool = true
                } else {
                    this.disabled_bool = false
                }
                

                console.log('this is the ut condition', this.is_dt_in_another_ut);
                console.log('this is the ut condition', this.is_dt_in_another_ut);
                console.log('this is the ut condition', this.is_dt_in_another_ut);

                // if (this.this.is_dt_in_another_ut == 'yes') {
                //     this.disabled_bool = true
                // }
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



        // all test on compression comes here

        



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
                console.log(this.pic_of_theft)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.account_number, 'CustomerMapping_Building', this.pic_of_building)
                console.log(xx)





            } catch (error) {
                // // console.log(error);
            }

        },





        // image picker for building
        async imagePickerBuilding() {
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
            const blob = new Blob([arr], { type: 'image/png' });
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
                this.pic_of_building = new File([compressedFile], `CustomerMapping_Building${compressedFile.type.replace('image/', '.')}`)
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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
            const blob = new Blob([arr], { type: 'image/png' });
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


            if (this.business_unit == '' || this.pic_of_building == '') {


                M.toast({ html: '<b class="red-text">Fill all the field marked with *</b>' })
                this.hideLoader = true
            } else {



                try {
                    this.disabled_bool = true
                    const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/customermapping', {
                        // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/customermapping', {
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
                            accountStatus: this.account_status,
                            dtNo: this.dt_no,
                            tariff: this.tarrif,
                            address: this.address,
                            bu: this.business_unit,
                            ut: this.undertaking_one,
                            dt: this.dt_name,
                            phoneNo: this.phone_number,
                            location: this.location,
                            newDt: this.new_dt_nomenclature,
                            isDtInOtherUt: this.is_dt_in_another_ut,
                            currentFeederBand: this.current_feeder_band,
                            proposedDtNo: this.proposed_dt_number,
                            proposedDtName: this.proposed_dt_name,
                            proposedUt: this.proposed_ut,
                            proposedBu: this.proposed_bu,
                            proposedFeederBand: this.proposed_feeder_band,
                            picOfBuilding: this.pic_of_building.name,
                            mappingStatus: this.mapping_status
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