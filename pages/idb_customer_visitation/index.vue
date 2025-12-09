<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <div class="col s12">
                <nuxt-link to="../dashboard_ie_force" class="red white-text btn">
                    Back
                </nuxt-link>
                <b class="grey-text btn disabled" style="font-size: 10px;"> IDB Customer Visitation</b>
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
                                <CustomSelect :options="['prepaid']" :default="'prepaid'" class=""
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
                        </div>

                        <div class="row">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Account type" v-model="account_type" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Account name" v-model="account_name" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Tarrif" v-model="tarrif" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Address" v-model="address" disabled>
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
                            <div class="col s12">
                                <input type="text" v-model="phone_number" placeholder="Phone number">
                            </div>
                        </div>

                        <div class="row">
                            <!-- address -->
                            <div class="col s12">
                                <input type="text" placeholder="Location" v-model="location" disabled>
                            </div>
                        </div>

                        <!-- <div class="row">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect :options="['Bungalow', 'Duplex', 'Storey building']"
                                    :default="'Type of building *'" class="" v-model="type_of_building" />
                            </div>
                        </div>


                        <p>
                            <b>
                                Shared bill or meter?
                            </b>
                            <br>
                            <label>
                                <input name="shared_bill_or_meter" type="radio" value="Yes"
                                    v-model="shared_bill_or_meter" checked />
                                <span>Yes</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="shared_bill_or_meter" type="radio" value="No"
                                    v-model="shared_bill_or_meter" />
                                <span>No</span>
                            </label>
                        </p>

                        <div class="row">
                            <div class="col s12">
                                <input type="text" v-if="shared_bill_or_meter === 'Yes'" placeholder="How many?"
                                    v-model="shared_bill_or_meter_input">
                            </div>
                        </div>
                        <br>

                        <div class="row">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect :options="['Vacant', 'Occupied']" :default="'Vacant or occupied?'"
                                    class="" v-model="vacant_status" />
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
                                <input type="text" v-if="user_of_premise === 'Others'" placeholder="How many?"
                                    v-model="other_comment">
                            </div>
                        </div>
                        <br> -->

                        <div class="row">
                            <!-- idb box number/dcu number -->
                            <div class="col s12">
                                <input type="text" placeholder="IDB Box Number" v-model="idb_box_number" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- idb box number/dcu number -->
                            <div class="col s12">
                                <input type="text" placeholder="DCU Number" v-model="idb_dcu_number" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- idb pole number -->
                            <div class="col s12">
                                <input type="text" placeholder="IDB Pole Number" v-model="idb_pole_number" >
                            </div>
                        </div>



                        <div class="row center">
                            <div class="col s12">
                                <b>
                                    Is IDB installed?
                                </b>
                            </div>
                            <form @submit.prevent>
                                <div class="col s4">
                                    <button class="btn btn-small green" @click="isIDBInstalledYes()">Yes</button>
                                </div>
                                <div class="col s4">
                                    <b class="green-text" v-if="is_idb_installed == 'Yes'">Yes</b>
                                    <b class="red-text" v-if="is_idb_installed == 'No'">No</b>
                                    <b class="red-text" v-if="is_idb_installed == ''">--</b>
                                </div>
                                <div class="col s4">
                                    <button class="btn btn-small red" @click="isIDBInstalledNo()">No</button>
                                </div>
                            </form>
                        </div>
                        <br>

                        <div class="row center">
                            <div class="col s12">
                                <b>
                                    Is IDB safely secured?
                                </b>
                            </div>
                            <form @submit.prevent>
                                <div class="col s4">
                                    <button class="btn btn-small green" @click="isIDBSafelySecuredYes()">Yes</button>
                                </div>
                                <div class="col s4">
                                    <b class="green-text" v-if="is_idb_safely_secured == 'Yes'">Yes</b>
                                    <b class="red-text" v-if="is_idb_safely_secured == 'No'">No</b>
                                    <b class="red-text" v-if="is_idb_safely_secured == ''">--</b>
                                </div>
                                <div class="col s4">
                                    <button class="btn btn-small red" @click="isIDBSafelySecuredNo()">No</button>
                                </div>
                            </form>
                        </div>
                        <br>

                        <div class="row center">
                            <div class="col s12">
                                <b>
                                    Is Supply Cable Trunked?
                                </b>
                            </div>
                            <form @submit.prevent>
                                <div class="col s4">
                                    <button class="btn btn-small green" @click="isSupplyCableTrunkedYes()">Yes</button>
                                </div>
                                <div class="col s4">
                                    <b class="green-text" v-if="is_supply_cable_trunked == 'Yes'">Yes</b>
                                    <b class="red-text" v-if="is_supply_cable_trunked == 'No'">No</b>
                                    <b class="red-text" v-if="is_supply_cable_trunked == ''">--</b>
                                </div>
                                <div class="col s4">
                                    <button class="btn btn-small red" @click="isSupplyCableTrunkedNo()">No</button>
                                </div>
                            </form>
                        </div>
                        <br>

                        <div class="row center">
                            <div class="col s12">
                                <b>
                                    Is IDB box functioning?
                                </b>
                            </div>
                            <form @submit.prevent>
                                <div class="col s4">
                                    <button class="btn btn-small green" @click="isIDBBoxFunctioningYes()">Yes</button>
                                </div>
                                <div class="col s4">
                                    <b class="green-text" v-if="is_idb_box_functioning == 'Yes'">Yes</b>
                                    <b class="red-text" v-if="is_idb_box_functioning == 'No'">No</b>
                                    <b class="red-text" v-if="is_idb_box_functioning == ''">--</b>
                                </div>
                                <div class="col s4">
                                    <button class="btn btn-small red" @click="isIDBBoxFunctioningNo()">No</button>
                                </div>
                            </form>
                        </div>
                        <br>



                        <div class="row center">
                            <div class="col s12">
                                <b>
                                    Is supply cable neat?
                                </b>
                            </div>
                            <form @submit.prevent>
                                <div class="col s4">
                                    <button class="btn btn-small green" @click="isSupplyCableNeatYes()">Yes</button>
                                </div>
                                <div class="col s4">
                                    <b class="green-text" v-if="is_supply_cable_neat == 'Yes'">Yes</b>
                                    <b class="red-text" v-if="is_supply_cable_neat == 'No'">No</b>
                                    <b class="red-text" v-if="is_supply_cable_neat == ''">--</b>
                                </div>
                                <div class="col s4">
                                    <button class="btn btn-small red" @click="isSupplyCableNeatNo()">No</button>
                                </div>
                            </form>
                        </div>
                        <br>




                        <div class="row center">
                            <div class="col s12">
                                <b>
                                    Is meter connected?
                                </b>
                            </div>
                            <form @submit.prevent>
                                <div class="col s4">
                                    <button class="btn btn-small green" @click="isMeterConnectedYes()">Yes</button>
                                </div>
                                <div class="col s4">
                                    <b class="green-text" v-if="is_meter_connected == 'Yes'">Yes</b>
                                    <b class="red-text" v-if="is_meter_connected == 'No'">No</b>
                                    <b class="red-text" v-if="is_meter_connected == ''">--</b>
                                </div>
                                <div class="col s4">
                                    <button class="btn btn-small red" @click="isMeterConnectedNo()">No</button>
                                </div>
                            </form>
                        </div>
                        <br>



                        <div class="row center">
                            <div class="col s12">
                                <b>
                                    Is meter infraction?
                                </b>
                            </div>
                            <form @submit.prevent>
                                <div class="col s4">
                                    <button class="btn btn-small green" @click="isMeterInfractionYes()">Yes</button>
                                </div>
                                <div class="col s4">
                                    <b class="green-text" v-if="is_meter_infraction == 'Yes'">Yes</b>
                                    <b class="red-text" v-if="is_meter_infraction == 'No'">No</b>
                                    <b class="red-text" v-if="is_meter_infraction == ''">--</b>
                                </div>
                                <div class="col s4">
                                    <button class="btn btn-small red" @click="isMeterInfractionNo()">No</button>
                                </div>
                            </form>
                        </div>
                        <br>







                        <div class="row">
                            <!-- address -->
                            <div class="col s12">
                                <input type="text" placeholder="Other remarks" v-model="other_remarks">
                            </div>
                        </div>
                        <br>

                        <!-- <div class="row">
                        <div class="col s12">
                            <b>
                                Is meter bypassed?
                            </b>
                        </div>
                        <form @submit.prevent>
                            <div class="col s6">
                                <button class="btn btn-small red" :class="{'green': is_meter_bypassed_green}" @click="isMeterBypassedtYes()">Yes</button>
                            </div>
                            <div class="col s6">
                                <button class="btn btn-small red" @click="isMeterBypassedtNo()">No</button>
                            </div>
                        </form>
                    </div>
                    <br> -->




                        <div class="row">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Picture of the IDB Box (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForIDBbox()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>
                        </div>

                        <!-- output for pic of the service wire from pole to metering point -->
                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-idb-box" />
                            </div>
                        </div>



                        <div class="row">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Termination Point (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForTerminationPoint()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>
                        </div>

                        <!-- output for pic of the service wire from pole to metering point -->
                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-termination-point" />
                            </div>
                        </div>







                        <div class="row">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Picture of Meter (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForMeter()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>

                            </div>
                        </div>

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
                                    Picture showing IDB meter No (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForShowingIDBMeterNo()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>

                            </div>
                        </div>

                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-showing-idb-meter-number" />
                            </div>
                        </div>


                        <!-- images end here -->










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









                        <!-- <div class="row center safe-area-bottom">
                            <div class="col s12">
                                <button class="btn btn-large green" style="width: 300px; margin-top: 20px;"
                                    @click="fakeNegativeGeo" :disabled="disabled_bool">Fake Negative Geo</button>
                            </div>
                            <div class="col s12" :class="{ 'hide': hideNewLocationBtn }">
                                <button class="btn btn-large green" style="width: 300px; margin-top: 20px;"
                                    @click="printCurrentPosition" :disabled="disabled_bool">Get Geolocation</button>
                            </div>
                            <div class="col s12">
                                <button class="btn btn-large red" style="width: 300px; margin-top: 20px;"
                                    @click="submit" :disabled="disabled_bool">Submit</button>
                            </div>
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
import { getIDBCustomerInfoApi, getCustomerInfoApi, uploadImage, logOut, getCurrentPosition } from '~/js_modules/mods'
import CustomSelect from '~/components/CustomSelect.vue'

export default {
    layout: 'admin_main',
    components: {
        CustomSelect,
    },
    data() {
        return {
            // new variables 
            current_feeder_band: '',
            location_gis: '',
            idb_box_number: '',
            idb_dcu_number: '',
            idb_pole_number: '',

            is_idb_installed: '',
            is_idb_safely_secured: '',
            is_supply_cable_trunked: '',
            is_idb_box_functioning: '',
            is_supply_cable_neat: '',
            is_meter_connected: '',
            is_meter_infraction: '',


            pic_of_idb_box: '',
            pic_of_termination_point: '',
            pic_of_meter: '',
            pic_showing_idb_meter_no: '',
            // end of new variables 



            hideNewLocationBtn: true,
            physical_customer_address: '',
            disabled_bool: false,
            service_type: null,
            account_number: '',
            // account_number: '',
            meter_number: '',
            // meter_number: '',
            account_type: '',
            account_name: '',
            account_status: '',
            dt_no: '',
            tarrif: '',
            address: '',
            business_unit: '',
            undertaking_one: '',
            dt_name: '',
            phone_number: '',
            location: '',
            type_of_building: '',
            shared_bill_or_meter: 'No',
            shared_bill_or_meter_input: '',
            vacant_status: '',
            user_of_premise: '',
            other_comment: '',
            is_account_mapped_to_correct_dt: '',
            is_customer_phone_no_correct: '',
            is_customer_address_correct: '',
            is_meter_bypassed: '',
            customer_complaint: '',
            other_remarks: '',
            userId: null,
            pic_of_premise: '',
            pic_of_payment_receipt: '',
            pic_of_meter: '',


            is_account_mapped_to_correct_dt_green: false,
            is_customer_phone_no_correct_green: false,
            is_customer_address_correct_green: false,
            is_meter_bypassed_green: false,
            customer_complaint_green: false,



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
            hidePhysicalCustomerAddress: true,



            img: "",
            scale: 100,
            quality: 50,
            originalSize: true,
            original: {},

            dataURI: '',

        }
    },

    methods: {

        isIDBInstalledYes() {
            this.is_idb_installed = 'Yes'
        },
        isIDBInstalledNo() {
            this.is_idb_installed = 'No'
        },

        isIDBSafelySecuredYes() {
            this.is_idb_safely_secured = 'Yes'
        },
        isIDBSafelySecuredNo() {
            this.is_idb_safely_secured = 'No'
        },

        isSupplyCableTrunkedYes() {
            this.is_supply_cable_trunked = 'Yes'
        },
        isSupplyCableTrunkedNo() {
            this.is_supply_cable_trunked = 'No'
        },

        isIDBBoxFunctioningYes() {
            this.is_idb_box_functioning = 'Yes'
        },
        isIDBBoxFunctioningNo() {
            this.is_idb_box_functioning = 'No'
        },

        isSupplyCableNeatYes() {
            this.is_supply_cable_neat = 'Yes'
        },
        isSupplyCableNeatNo() {
            this.is_supply_cable_neat = 'No'
        },

        isMeterConnectedYes() {
            this.is_meter_connected = 'Yes'
        },
        isMeterConnectedNo() {
            this.is_meter_connected = 'No'
        },

        isMeterInfractionYes() {
            this.is_meter_infraction = 'Yes'
        },
        isMeterInfractionNo() {
            this.is_meter_infraction = 'No'
        },



        async checkNumber() {


            if (this.service_type == 'prepaid') {

                // await getIDBCustomerInfoApi(this.meter_number)
                console.log('make postpaid call')
                try {

                    const response = await getIDBCustomerInfoApi(this.meter_number)
                    this.account_type = ''
                    this.account_name = ''
                    this.tarrif = ''
                    this.address = ''
                    this.business_unit = ''
                    this.account_status = ''
                    this.undertaking_one = ''
                    this.dt_name = ''
                    this.phone_number = ''
                    this.dt_no = ''
                    this.idb_box_number = ''
                    this.idb_dcu_number = ''
                    this.idb_pole_number = ''

                    // console.log(response)

                    // console.log(response.accountNumber)



                    this.meter_number = this.meter_number.trim()

                    if (this.meter_number == '') {
                        M.toast({ html: `<b class="red-text">Please check meter number agian</b>` })
                        this.printCurrentPosition()
                    } else {
                        console.log('this is response from mods ', response)
                        if (response.accountStatus == null) {
                            M.toast({ html: `<b class="red-text">Please check IDB Meter Number & try again</b>` })
                        } else {
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
                            this.idb_box_number = response.idbBoxNo
                            this.idb_dcu_number = response.idbDcuNo
                            this.idb_pole_number = response.idbPoleNo
                        }
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
                // console.log(response)
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
                this.idb_box_number = response.idbBoxNo
                this.idb_dcu_number = response.idbDcuNo

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



        // Image upload starts here

        async imagePickerForIDBbox() {

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



                this.doSomethingWithFilesimagePickerForIDBbox(blob)
            }


        },


        async doSomethingWithFilesimagePickerForIDBbox(event) {
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
                const output = document.getElementById('output-pic-of-idb-box');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_idb_box = new File([compressedFile], imageFileName + `picIdbBox${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_idb_box)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.meter_number, 'IdbValidation_IdbBox', this.pic_of_idb_box)
                console.log(xx)





            } catch (error) {
                // // console.log(error);
            }

        },




        async imagePickerForTerminationPoint() {

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



                this.doSomethingWithFilesimagePickerForTerminationPoint(blob)
            }


        },


        async doSomethingWithFilesimagePickerForTerminationPoint(event) {
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
                const output = document.getElementById('output-pic-of-termination-point');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_termination_point = new File([compressedFile], imageFileName + `picTerminationPoint${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_termination_point)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.meter_number, 'IdbValidation_TerminationPoint', this.pic_of_termination_point)
                console.log(xx)





            } catch (error) {
                // // console.log(error);
            }

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

                this.pic_of_meter = new File([compressedFile], imageFileName + `picMeters${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_meter)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.meter_number, 'IdbValidation_Meter', this.pic_of_meter)
                console.log(xx)





            } catch (error) {
                // // console.log(error);
            }

        },




        async imagePickerForShowingIDBMeterNo() {

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



                this.doSomethingWithFilesimagePickerForShowingIDBMeterNo(blob)
            }


        },


        async doSomethingWithFilesimagePickerForShowingIDBMeterNo(event) {
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
                const output = document.getElementById('output-pic-of-showing-idb-meter-number');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_showing_idb_meter_no = new File([compressedFile], imageFileName + `picShowingIdbMeterNo${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_showing_idb_meter_no)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.meter_number, 'IdbValidation_ShowingIdbMeterNo', this.pic_showing_idb_meter_no)
                console.log(xx)





            } catch (error) {
                // // console.log(error);
            }

        },


        // Image upload ends here










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
            this.getDataURLFromLocalStorage()

            var today = new Date(this.last_purchase_date);
            const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
            let month = months[today.getMonth()];
            var date = month + ' ' + today.getDate() + ', ' + today.getFullYear();
            var time = this.formatAMPM(new Date);
            this.last_purchase_date = date + ' ' + time


            // } else if (this.pic_of_premise == '') {
            //         M.toast({ html: '<b class="red-text">Please add pic of Premises, customer wiring *</b>' })
            //     } else if (this.pic_of_meter == '') {
            //         M.toast({ html: '<b class="red-text">Please add pic of House number, meter(s) *</b>' })


            if (this.business_unit == '') {


                M.toast({ html: '<b class="red-text">Fill all the field marked with *</b>' })
                this.hideLoader = true
            } else if (this.long < 3 || this.lat < 6) {
                M.toast({ 'html': '<b class="red-text">Incorrect Geo Location</b>' })
                this.hideNewLocationBtn = false
            } else if (this.is_idb_installed == '' || this.is_idb_safely_secured == '' || this.is_supply_cable_trunked == '' || this.is_idb_box_functioning == '' || this.is_supply_cable_neat == '' || this.is_meter_connected == '' || this.is_meter_infraction == '') {
                M.toast({ 'html': '<b class="red-text">One or more answers are not selected</b>' })
                this.hideNewLocationBtn = false
            } else {


                try {
                    this.disabled_bool = true
                    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/idbvalidation', {
                        const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/idbvalidation', {
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
                            accountStatus: this.account_status,
                            accountName: this.account_name,
                            tariff: this.tarrif,
                            address: this.address,
                            bu: this.business_unit,
                            ut: this.undertaking_one,
                            dt: this.dt_name,
                            dtNo: this.dt_no,
                            phoneNo: this.phone_number,
                            location: this.location,

                            currentFeederBand: this.current_feeder_band,
                            idbBoxNo: this.idb_box_number,
                            idbDcuNo: this.idb_dcu_number,
                            idbPoleNo: this.idb_pole_number,

                            isIdbInstalled: this.is_idb_installed,
                            isIdbBoxSafelySecured: this.is_idb_safely_secured,
                            isSupplyCableTrunked: this.is_supply_cable_trunked,
                            isIdbBoxFunctioning: this.is_idb_box_functioning,
                            isSupplyCableNeat: this.is_supply_cable_neat,
                            isMeterConnected: this.is_meter_connected,
                            isMeterInfraction: this.is_meter_infraction,

                            furtherRemark: this.other_remarks,
                            picIdbBox: this.pic_of_idb_box.name,
                            picTerminationPoint: this.pic_of_termination_point.name,
                            picMeters: this.pic_of_meter.name,
                            picShowingIdbMeterNo: this.pic_showing_idb_meter_no.name
                        }),
                    })


                    // console.log(
                    //     this.service_type,
                    //         this.account_number,
                    //         this.meter_number,
                    //         this.account_type,
                    //         this.account_status,
                    //         this.account_name,
                    //         this.tarrif,
                    //         this.address,
                    //         this.business_unit,
                    //         this.undertaking_one,
                    //         this.dt_name,
                    //         this.dt_no,
                    //         this.phone_number,
                    //         this.location,

                    //         this.current_feeder_band,
                    //         this.idb_box_number,
                    //         this.idb_dcu_number,
                    //         this.idb_pole_number,

                    //         this.is_idb_installed,
                    //         this.is_idb_safely_secured,
                    //         this.is_supply_cable_trunked,
                    //         this.is_idb_box_functioning,
                    //         this.is_supply_cable_neat,
                    //         this.is_meter_connected,
                    //         this.is_meter_infraction,

                    //         this.other_remarks,
                    //         this.pic_of_idb_box.name,
                    //         this.pic_of_termination_point.name,
                    //         this.pic_of_meter.name,
                    //         this.pic_showing_idb_meter_no.name
                    // );


                    const response = await rawResponse.json()

                    console.log(response)

                    if (response.code == '00') {
                        this.hideLoader = true
                        this.$router.push('../sent')
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
            console.log(this.long, (this.lat));
            if (this.long < 3 || this.lat < 6) {
                this.hideNewLocationBtn = false
            } else {
                this.location = `${this.long}, ${this.lat}`
            }

            let randomNumber = this.generateRandomNumber()

            console.log('Request number', randomNumber);


        },

        generateRandomNumber() {
            const date = new Date();
            const year = date.getFullYear();
            const month = date.getMonth() + 1;
            const day = date.getDate();
            const hours = date.getHours();
            const minutes = date.getMinutes();
            const seconds = date.getSeconds();
            const milliseconds = date.getMilliseconds();

            const randomNumber = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
            return Math.abs(randomNumber);
        },

        async fakeNegativeGeo() {
            const { long, lat } = await getCurrentPosition();

            let longRand = Math.random() * -1
            let latRand = Math.random() * -2
            console.log('this is the longRand: ', longRand);
            console.log('this is the latRand: ', latRand);

            this.long = longRand
            this.lat = latRand
            console.log(this.long, (this.lat));
            this.location = `${this.long}, ${this.lat}`
            M.toast({ 'html': '<b class="red-text">Incorrect Geo Location Set</b>' })


        },
        // leßßt me try to create a new signature
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