<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <div class="col s12">
                <nuxt-link to="../dashboard_ie_force" class="red white-text btn">
                    Back
                </nuxt-link>
                <b class="grey-text btn disabled">Customer Categorization</b>
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
                            <!-- business unit -->
                            <div class="col s12">
                                <b>BU:</b> {{ business_unit }}
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
                                <input type="text" v-model="account_status" placeholder="Account status" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- cutomer name -->
                            <div class="col s12">
                                <input type="text" placeholder="Address" v-model="address" disabled>
                            </div>
                        </div>

                        <!-- start of new field -->
                        <div class="row">
                            <!-- feeder name -->
                            <div class="col s12">
                                <input type="text" placeholder="Feeder Name" v-model="feeder_name" disabled>
                            </div>
                        </div>

                        <!-- start of new field -->
                        <div class="row">
                            <!-- feeder name -->
                            <div class="col s12">
                                <input type="text" placeholder="Feeder cap" v-model="feeder_cap" disabled>
                            </div>
                        </div>

                        <!-- start of new field -->
                        <div class="row">
                            <!-- feeder name -->
                            <div class="col s12">
                                <input type="text" placeholder="Feeder Availability" v-model="feeder_availability"
                                    disabled>
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
                            <!-- address -->
                            <div class="col s12">
                                <input type="text" placeholder="Location" v-model="location" disabled>
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
                            <!-- address -->
                            <div class="col s12">
                                <input type="text" v-if="user_of_premise === 'Others'" placeholder="How many?"
                                    v-model="other_comment">
                            </div>
                        </div>
                        <br>

                        <div class="row">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect :options="['Average load', 'Peak load']" :default="'Load type *'" class=""
                                    v-model="load_type" />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect :options="['Single-Phase', 'Three-Phase']" :default="'Customer Wiring *'"
                                    class="" v-model="customer_wiring" />
                            </div>
                        </div>



                        <!-- <div class="row">
                            <div class="col s12" style="margin-bottom: 15px;">
                                <CustomSelect
                                    :options="['Meter Bypass', 'Pumping Machine On Direct', 'Meter Tampered', 'Under Billing', 'Burnt Meter or Faulty meter not on postpaid', 'Meter dispensing free', 'Free rider', 'Suspended account but connected to power', 'Negative reading', 'Others']"
                                    :default="'Type of Infraction *'" class="" v-model="customer_wiring" />
                            </div>
                        </div> -->







                        <!-- Single phase logic -->
                        <div class="row" v-if="single_phase_check == true">
                            <!-- <div class="col s12">
                                <h2>
                                    Single phase
                                </h2>
                                <b>Average Load Calculation:</b> <br>
                                (R/Y/B) * 220 * 0.95 * Feeder availability /1000
                                <br>
                                {{ r_y_b }} x 220 x 0.95 x {{ feeder_availability }} / 1000
                                <br>
                                {{ avgLoadForSinglePhase }}
                            </div> -->

                            <!-- <div class="col s12">
                                <b>Peak Load Calculation:</b> <br>
                                (R/Y/B) * 220 * 0.95 * Feeder availability /1000
                                <br>
                                {{ r_y_b }} x 220 x 0.95 x 0.6 x {{ feeder_availability }} / 1000
                                <br>
                                {{ peakLoadForSinglePhase }}
                            </div> -->

                            <div class="col s12">
                                <label for="r_y_b">R/Y/B</label>
                                <input type="number" min="0" max="1000" step="0.01" v-model="r_y_b" id="r_y_b"
                                    placeholder="R/Y/B">
                            </div>

                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Picture of R/Y/B (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForRYB()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>

                            <!-- output for pic of the service wire from pole to metering point -->
                            <div class="row">
                                <div class="col s12">
                                    <img class=" responsive-img" id="output-pic-of-ryb" />
                                </div>
                            </div>


                            <div class="col s12">
                                <label for="n_n_n">N</label>
                                <input type="number" min="0" max="1000" step="0.01" v-model="n_n_n" id="n_n_n"
                                    placeholder="N">
                            </div>


                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Picture of N (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForNSinglePhase()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>

                            <!-- output for pic of the service wire from pole to metering point -->
                            <div class="row">
                                <div class="col s12">
                                    <img class=" responsive-img" id="output-pic-of-n-singlephase" />
                                </div>
                            </div>


                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Picture of Building (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForBuildingSinglePhase()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>

                            <!-- output for pic of the service wire from pole to metering point -->
                            <div class="row">
                                <div class="col s12">
                                    <img class=" responsive-img" id="output-pic-of-building-singlephase" />
                                </div>
                            </div>

                        </div>






                        <!-- Three phase logic -->
                        <div class="row" v-if="three_phase_check == true">
                            <div class="col s12">
                                <!-- <h2>
                                    Three phase
                                </h2> -->
                                <!-- <b>Average Load Calculation:</b> <br>
                                (R/Y/B) * 220 * 0.95 * Feeder availability /1000
                                <br>
                                ({{ r_box }} + {{ y_box }} + {{ b_box }}) x 220 x 0.95 x {{ feeder_availability }} /
                                1000
                                <br>
                                {{ avgLoadForThreePhase }} -->
                            </div>

                            <div class="col s12">
                                <!-- <b>Peak Load Calculation:</b> <br>
                                (R + Y + B) * 220 * 0.95 * Feeder availability /1000
                                <br>
                                ({{ r_box }} + {{ y_box }} + {{ b_box }}) x 220 x 0.95 x 0.6 x {{ feeder_availability }}
                                / 1000
                                <br>
                                {{ peakLoadForThreePhase }} -->
                            </div>

                            <div class="col s12">
                                <label for="r_box">R</label>
                                <input type="number" min="0" max="1000" step="0.01" v-model="r_box" id="r_box"
                                    placeholder="R">
                            </div>

                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Picture of R (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForRThreePhase()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>

                            <!-- output for pic of the service wire from pole to metering point -->
                            <div class="row">
                                <div class="col s12">
                                    <img class=" responsive-img" id="output-pic-of-r-threephase" />
                                </div>
                            </div>




                            <div class="col s12">
                                <label for="y_box">Y</label>
                                <input type="number" min="0" max="1000" step="0.01" v-model="y_box" id="y_box"
                                    placeholder="Y">
                            </div>

                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Picture of Y (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForYThreePhase()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>

                            <!-- output for pic of the service wire from pole to metering point -->
                            <div class="row">
                                <div class="col s12">
                                    <img class=" responsive-img" id="output-pic-of-y-threephase" />
                                </div>
                            </div>





                            <div class="col s12">
                                <label for="b_box">B</label>
                                <input type="number" min="0" max="1000" step="0.01" v-model="b_box" id="b_box"
                                    placeholder="B">
                            </div>

                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Picture of B (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForBThreePhase()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>

                            <!-- output for pic of the service wire from pole to metering point -->
                            <div class="row">
                                <div class="col s12">
                                    <img class=" responsive-img" id="output-pic-of-b-threephase" />
                                </div>
                            </div>





                            <div class="col s12">
                                <label for="n_n_n">N</label>
                                <input type="number" min="0" max="1000" step="0.01" v-model="n_n_n" id="n_n_n"
                                    placeholder="N">
                            </div>


                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Picture of N (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForNThreePhase()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>

                            <!-- output for pic of the service wire from pole to metering point -->
                            <div class="row">
                                <div class="col s12">
                                    <img class=" responsive-img" id="output-pic-of-n-threephase" />
                                </div>
                            </div>


                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Picture of Building (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForBuildingThreePhase()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>

                            <!-- output for pic of the service wire from pole to metering point -->
                            <div class="row">
                                <div class="col s12">
                                    <img class=" responsive-img" id="output-pic-of-building-threephase" />
                                </div>
                            </div>

                        </div>







                        <!-- <div class="row">
                            <div class="col s12 input-field">
                                <b style="font-weight: 600; font-size: 18px;">
                                    {{ total_kwh }}
                                </b>
                            </div>
                        </div> -->






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
                                <button class="btn btn-large red col s12" style="margin-top: 20px;" @click="submit"
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
import { checkCustomerMeterNumber, getCustomerInfoApi2, uploadImage, logOut, getCurrentPosition } from '~/js_modules/mods'
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
            account_number: '',
            account_number2: '',
            meter_number: '',
            account_type: '',
            account_name: '',
            user_of_premise: '',
            dt_no: '',
            tarrif: '',
            address: '',
            business_unit: '',
            customer_wiring: '',
            undertaking_one: '',
            dt_name: '',
            phone_number: '',
            location: '',
            duration_of_theft: '',
            account_status: '',
            userId: null,
            pic_of_theft: '',
            pic_of_bypass: '',
            pic_of_additional: '',
            pic_of_meter: '',
            single_phase_check: false,
            three_phase_check: false,
            r_y_b: 0.00,
            n_n_n: 0.00,
            r_box: 0.00,
            y_box: 0.00,
            b_box: 0.00,
            formFields: [],
            nextId: 1,

            pic_of_the_ryb: '',
            pic_of_the_n: '',
            pic_of_the_buidling: '',
            pic_of_the_r_threephase: '',
            pic_of_the_y_threephase: '',
            pic_of_the_b_threephase: '',
            pic_of_the_n: '',
            pic_of_the_buidling: '',
            pic_of_installation_cutout_metering_point: null,
            pic_of_installation_cutout_metering_point2: '',
            pic_of_installation_cutout_metering_point3: '',
            pic_of_meter_nameplate: '',
            pic_of_meter_nameplate2: '',
            pic_of_meter_nameplate3: '',
            pic_of_seal_as_met: '',
            pic_of_internal_connection_if_seal_is_broken: '',
            pic_of_internal_connection_if_seal_is_broken2: '',
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
            feeder_availability: 0.00,
            feeder_cap: '',
            feeder_no: '',

            dt_capacity: '',
            customer_email: '',
            customer_phone_number: '',

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
            wiring_mode: '',
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
            total_kwh: 0,
            load_type: '',

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
        customer_wiring(newVal) {
            if (newVal === 'Single-Phase') {
                this.single_phase_check = true
                this.three_phase_check = false
            } else if (newVal === 'Three-Phase') {
                this.single_phase_check = false
                this.three_phase_check = true
            } else {
                this.r_y_b = 0.00
                this.n_n_n = 0.00
                this.single_phase_check = false
                this.three_phase_check = false
            }
        },

    },

    computed: {
        // avgLoadForSinglePhase() {
        //     const r_y_b = parseFloat(this.r_y_b) || 0;
        //     const feeder = parseFloat(this.feeder_availability) || 0;
        //     console.log((r_y_b) * 220 * 0.95 * feeder / 1000);
        //     return (r_y_b) * 220 * 0.95 * feeder / 1000;
        // },
        // peakLoadForSinglePhase() {
        //     const r_y_b = parseFloat(this.r_y_b) || 0;
        //     const feeder = parseFloat(this.feeder_availability) || 0;
        //     return (r_y_b) * 220 * 0.95 * 0.6 * feeder / 1000;
        // },

        // avgLoadForThreePhase() {
        //     const r = parseFloat(this.r_box) || 0;
        //     const y = parseFloat(this.y_box) || 0;
        //     const b = parseFloat(this.b_box) || 0;
        //     const feeder = parseFloat(this.feeder_availability) || 0;
        //     return (r + y + b) * 220 * 0.95 * feeder / 1000;
        // },
        // peakLoadForThreePhase() {
        //     const r = parseFloat(this.r_box) || 0;
        //     const y = parseFloat(this.y_box) || 0;
        //     const b = parseFloat(this.b_box) || 0;
        //     const feeder = parseFloat(this.feeder_availability) || 0;
        //     return (r + y + b) * 220 * 0.95 * 0.6 * feeder / 1000;
        // }
    },

    methods: {

        avgLoadForSinglePhase() {
            const r_y_b = parseFloat(this.r_y_b) || 0;
            const feeder = parseFloat(this.feeder_availability) || 0;
            console.log((r_y_b) * 220 * 0.95 * feeder / 1000);
            return (r_y_b) * 220 * 0.95 * feeder / 1000;
        },
        peakLoadForSinglePhase() {
            const r_y_b = parseFloat(this.r_y_b) || 0;
            const feeder = parseFloat(this.feeder_availability) || 0;
            return (r_y_b) * 220 * 0.95 * 0.6 * feeder / 1000;
        },

        avgLoadForThreePhase() {
            const r = parseFloat(this.r_box) || 0;
            const y = parseFloat(this.y_box) || 0;
            const b = parseFloat(this.b_box) || 0;
            const feeder = parseFloat(this.feeder_availability) || 0;
            return (r + y + b) * 220 * 0.95 * feeder / 1000;
        },
        peakLoadForThreePhase() {
            const r = parseFloat(this.r_box) || 0;
            const y = parseFloat(this.y_box) || 0;
            const b = parseFloat(this.b_box) || 0;
            const feeder = parseFloat(this.feeder_availability) || 0;
            return (r + y + b) * 220 * 0.95 * 0.6 * feeder / 1000;
        },

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

                    // const response = await checkCustomerMeterNumber(this.meter_number)


                    // console.log(response)


                    // console.log(response.accountNumber)
                    // console.log('this is response from mods ', response)

                    // let users_meter_number = response.meterNumber

                    if (this.meter_number == '') {
                        M.toast({ html: `<b class="red-text">Please enter your meter number</b>` })
                    } else {
                        // instant change for customerinfo2 api (which is already doing the lookup on the server)
                        let response = await getCustomerInfoApi2(this.meter_number, 'Prepaid')
                        console.log(response)
                        if (response.meterNumber == null) {
                            // error message
                            M.toast({ html: `<b class="red-text">Please check the meter number and try again</b>` })
                        } else {
                            await this.printCurrentPosition()

                            this.account_type = response.accountType
                            this.account_name = response.accountName
                            this.account_number = response.accountNumber
                            this.tarrif = response.tariff
                            this.address = response.address
                            this.business_unit = response.bu
                            this.account_status = response.accountStatus
                            this.undertaking_one = response.ut
                            this.dt_name = response.dtName
                            this.customer_phone_number = response.mobileNumber
                            this.dt_no = response.dtNo
                            this.feeder_name = response.feederName
                            this.feeder_no = response.feederNo
                            this.feeder_availability = response.feederAvailability
                            let [firstValue, lastValue] = this.feeder_availability.split(":")
                            this.feeder_availability = `${firstValue} : ${lastValue}`
                            this.feeder_cap = response.feederCap
                            this.meter_manufacturer = response.manufacturer
                            this.wiring_mode = response.wiringMode
                            this.meter_type = response.meterModel
                            this.installation_date = response.installationDate
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
                let response = await getCustomerInfoApi2(accountNumber, 'Postpaid')
                console.log(response)
                if (response.accountNumber == null) {
                    // error message
                    M.toast({ html: `<b class="red-text">Please check the account number and try again</b>` })
                    return
                } else {
                    await this.printCurrentPosition()

                    this.account_type = response.accountType
                    this.account_name = response.accountName
                    this.tarrif = response.tariff
                    this.address = response.address
                    this.business_unit = response.bu
                    this.account_status = response.accountStatus
                    this.undertaking_one = response.ut
                    this.dt_name = response.dtName
                    this.customer_phone_number = response.mobileNumber
                    this.dt_no = response.dtNo
                    this.feeder_name = response.feederName
                    this.feeder_no = response.feederNo
                    this.feeder_availability = response.feederAvailability
                    let [firstValue, lastValue] = this.feeder_availability.split(":")
                    this.feeder_availability = `${firstValue} : ${lastValue}`
                    this.feeder_cap = response.feederCap
                    this.meter_manufacturer = response.manufacturer
                    this.wiring_mode = response.wiringMode
                    this.meter_type = response.meterModel
                    this.installation_date = response.installationDate
                }


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


        // image section

        async imagePickerForRYB() {

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



                this.doSomethingWithFilesimagePickerForRYB(blob)
            }


        },


        async doSomethingWithFilesimagePickerForRYB(event) {
            let imageFileName = this.generateRandomString()

            this.account_number = this.account_number.trim()
            this.meter_number = this.meter_number.trim()
            if (this.account_number !== '' ) {
                console.log('acc number is not empty');
                this.account_number2 = this.account_number
            } else if (this.meter_number !== '') {
                console.log('meter number is not empty');
                this.account_number2 = this.meter_number
            }

            const imageFile = event;
            // const imageFile = event.target.files[0];

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-ryb');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_the_ryb = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_the_ryb)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                var xx = await uploadImage(this.userId, this.account_number2, 'CustomerCat_RYB', this.pic_of_the_ryb)
                console.log(xx)
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForNSinglePhase() {

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



                this.doSomethingWithFilesimagePickerForNSinglePhase(blob)
            }


        },


        async doSomethingWithFilesimagePickerForNSinglePhase(event) {
            let imageFileName = this.generateRandomString()

            this.account_number = this.account_number.trim()
            this.meter_number = this.meter_number.trim()
            const imageFile = event;
            // const imageFile = event.target.files[0];
            if (this.account_number !== '' ) {
                console.log('acc number is not empty');
                this.account_number2 = this.account_number
            } else if (this.meter_number !== '') {
                console.log('meter number is not empty');
                this.account_number2 = this.meter_number
            }

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-n-singlephase');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_the_n = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_the_ryb)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                var xx = await uploadImage(this.userId, this.account_number2, 'CustomerCat_Neutral', this.pic_of_the_n)
                console.log(xx)
            } catch (error) {
                // // console.log(error);
            }

        },






        async imagePickerForBuildingSinglePhase() {

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



                this.doSomethingWithFilesimagePickerForBuildingSinglePhase(blob)
            }


        },


        async doSomethingWithFilesimagePickerForBuildingSinglePhase(event) {
            let imageFileName = this.generateRandomString()

            this.account_number = this.account_number.trim()
            this.meter_number = this.meter_number.trim()
            const imageFile = event;
            // const imageFile = event.target.files[0];
            this.account_number = this.account_number.trim()
            this.meter_number = this.meter_number.trim()
            if (this.account_number !== '' ) {
                console.log('acc number is not empty');
                this.account_number2 = this.account_number
            } else if (this.meter_number !== '') {
                console.log('meter number is not empty');
                this.account_number2 = this.meter_number
            }

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-building-singlephase');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_the_buidling = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_the_ryb)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                var xx = await uploadImage(this.userId, this.account_number2, 'CustomerCat_Building', this.pic_of_the_buidling)
                console.log(xx)
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForRThreePhase() {

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



                this.doSomethingWithFilesimagePickerForRThreePhase(blob)
            }


        },


        async doSomethingWithFilesimagePickerForRThreePhase(event) {
            let imageFileName = this.generateRandomString()

            this.account_number = this.account_number.trim()
            this.meter_number = this.meter_number.trim()
            const imageFile = event;
            // const imageFile = event.target.files[0];
            if (this.account_number !== '' ) {
                console.log('acc number is not empty');
                this.account_number2 = this.account_number
            } else if (this.meter_number !== '') {
                console.log('meter number is not empty');
                this.account_number2 = this.meter_number
            }

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-r-threephase');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_the_r_threephase = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_the_ryb)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                var xx = await uploadImage(this.userId, this.account_number2, 'CustomerCat_Red', this.pic_of_the_r_threephase)
                console.log(xx)
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForYThreePhase() {

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



                this.doSomethingWithFilesimagePickerForYThreePhase(blob)
            }


        },


        async doSomethingWithFilesimagePickerForYThreePhase(event) {
            let imageFileName = this.generateRandomString()

            this.account_number = this.account_number.trim()
            this.meter_number = this.meter_number.trim()
            const imageFile = event;
            // const imageFile = event.target.files[0];
            if (this.account_number !== '' ) {
                console.log('acc number is not empty');
                this.account_number2 = this.account_number
            } else if (this.meter_number !== '') {
                console.log('meter number is not empty');
                this.account_number2 = this.meter_number
            }

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-y-threephase');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_the_y_threephase = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_the_ryb)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                var xx = await uploadImage(this.userId, this.account_number2, 'CustomerCat_Yellow', this.pic_of_the_y_threephase)
                console.log(xx)
            } catch (error) {
                // // console.log(error);
            }

        },






        async imagePickerForBThreePhase() {

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



                this.doSomethingWithFilesimagePickerForBThreePhase(blob)
            }


        },


        async doSomethingWithFilesimagePickerForBThreePhase(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;
            // const imageFile = event.target.files[0];
            if (this.account_number !== '' ) {
                console.log('acc number is not empty');
                this.account_number2 = this.account_number
            } else if (this.meter_number !== '') {
                console.log('meter number is not empty');
                this.account_number2 = this.meter_number
            }

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-b-threephase');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_the_b_threephase = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_the_ryb)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                var xx = await uploadImage(this.userId, this.account_number2, 'CustomerCat_Blue', this.pic_of_the_b_threephase)
                console.log(xx)
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForNThreePhase() {

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



                this.doSomethingWithFilesimagePickerForNThreePhase(blob)
            }


        },


        async doSomethingWithFilesimagePickerForNThreePhase(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;
            // const imageFile = event.target.files[0];
            if (this.account_number !== '' ) {
                console.log('acc number is not empty');
                this.account_number2 = this.account_number
            } else if (this.meter_number !== '') {
                console.log('meter number is not empty');
                this.account_number2 = this.meter_number
            }

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-n-threephase');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_the_n = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_the_ryb)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                var xx = await uploadImage(this.userId, this.account_number2, 'CustomerCat_Neutral', this.pic_of_the_n)
                console.log(xx)
            } catch (error) {
                // // console.log(error);
            }

        },





        async imagePickerForBuildingThreePhase() {

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



                this.doSomethingWithFilesimagePickerForBuildingThreePhase(blob)
            }


        },


        async doSomethingWithFilesimagePickerForBuildingThreePhase(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;
            // const imageFile = event.target.files[0];
            if (this.account_number !== '' ) {
                console.log('acc number is not empty');
                this.account_number2 = this.account_number
            } else if (this.meter_number !== '') {
                console.log('meter number is not empty');
                this.account_number2 = this.meter_number
            }

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-building-threephase');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_the_buidling = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_the_ryb)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                var xx = await uploadImage(this.userId, this.account_number2, 'CustomerCat_Building', this.pic_of_the_buidling)
                console.log(xx)
            } catch (error) {
                // // console.log(error);
            }

        },






        async submit() {
            // get all the form value in the dynamic list 
            let meter_number_list = this.getAllFormValues()
            console.log(meter_number_list);

            console.log('this is feeder cap', this.feeder_cap);


            M.toast({ html: '<b class="yellow-text">Please wait...</b>' })
            this.hideLoader = false
            this.business_unit = this.business_unit.trim()
            this.customer_wiring = this.customer_wiring.trim()
            this.duration_of_theft = this.duration_of_theft.trim()
            this.undertaking_one = this.undertaking_one.trim()
            this.customer_name = this.customer_name.trim()
            this.address = this.address.trim()
            this.feeder_name = this.feeder_name.trim()
            this.dt_name = this.dt_name.trim()
            this.alignment_status = this.alignment_status.trim()
            this.recommended_tariff = this.recommended_tariff.trim()
            this.meter_type_by_manufacturer = this.meter_type_by_manufacturer.trim()
            this.credit_reading_on_meter = this.credit_reading_on_meter.trim()
            // this.total_kwh = this.total_kwh.trim()
            this.phone_number = this.phone_number.trim()
            this.inspection_conclusion = this.inspection_conclusion.trim()
            this.getDataURLFromLocalStorage()

            var today = new Date(this.last_purchase_date);
            const months = ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
            let month = months[today.getMonth()];
            var date = month + ' ' + today.getDate() + ', ' + today.getFullYear();
            var time = this.formatAMPM(new Date);
            this.last_purchase_date = date + ' ' + time


            console.log('I was called here');
            if (this.load_type == 'Average load') {
                if (this.customer_wiring == 'Single-Phase') {
                    this.total_kwh = this.avgLoadForSinglePhase()
                    console.log('this.total_kwh:', this.total_kwh);
                } else if (this.customer_wiring == 'Three-Phase') {
                    this.total_kwh = this.avgLoadForThreePhase()
                } else {
                    M.toast({ html: '<b class="red-text">Select Customer Wiring *</b>' })
                }
            } else if (this.load_type == 'Peak load') {
                if (this.customer_wiring == 'Single-Phase') {
                    this.total_kwh = this.peakLoadForSinglePhase()
                } else if (this.customer_wiring == 'Three-Phase') {
                    this.total_kwh = this.peakLoadForThreePhase()
                } else {
                    M.toast({ html: '<b class="red-text">Select Customer Wiring *</b>' })
                }
            } else {
                M.toast({ html: '<b class="red-text">Select a Load Type *</b>' })
            }

            if (this.total_kwh == 0) {
                M.toast({ html: '<b class="red-text">Total KWH cannot be 0. *</b>' })
                this.hideLoader = true
                return
            }


            console.log('I made it here as well');

            // Debug logging with explicit type and length information
            // console.log('business_unit:', `"${this.business_unit}"`, 'length:', this.business_unit.length)
            // console.log('customer_wiring:', `"${this.customer_wiring}"`, 'length:', this.customer_wiring.length)
            // console.log('duration_of_theft:', `"${this.duration_of_theft}"`, 'length:', this.duration_of_theft.length)

            // Check each condition separately
            const isBusinessUnitEmpty = this.business_unit === ''
            const useOfPremise_check = this.user_of_premise === ''

            // if (this.customer_wiring == 'Three-Phase'){

            // }

            if (isBusinessUnitEmpty || useOfPremise_check) {
                M.toast({ html: '<b class="red-text">Fill all the field marked with *</b>' })
                this.hideLoader = true
            } else {


                if (this.customer_wiring == 'Single-Phase') {
                    if (this.pic_of_the_ryb == '') {
                        M.toast({ html: '<b class="red-text">Please add pic of R/Y/B *</b>' })
                        return
                    } else if (this.pic_of_the_n == '') {
                        M.toast({ html: '<b class="red-text">Please add pic of N *</b>' })
                        return
                    } else if (this.pic_of_the_buidling == '') {
                        M.toast({ html: '<b class="red-text">Please add pic of building *</b>' })
                        return
                    }
                } else if (this.customer_wiring == 'Three-Phase') {
                    if (this.pic_of_the_r_threephase == '') {
                        M.toast({ html: '<b class="red-text">Please add pic of R *</b>' })
                        return
                    } else if (this.pic_of_the_y_threephase == '') {
                        M.toast({ html: '<b class="red-text">Please add pic of Y *</b>' })
                        return
                    } else if (this.pic_of_the_b_threephase == '') {
                        M.toast({ html: '<b class="red-text">Please add pic of B *</b>' })
                        return
                    } else if (this.pic_of_the_n == '') {
                        M.toast({ html: '<b class="red-text">Please add pic of N *</b>' })
                        return
                    } else if (this.pic_of_the_buidling == '') {
                        M.toast({ html: '<b class="red-text">Please add pic of Building *</b>' })
                        return
                    }
                }


                console.log('I got here in the sub');
                console.log('I got here in the sub');
                console.log('I got here in the sub');
                console.log('I got here in the sub');
                console.log('I got here in the sub');





                try {
                    this.disabled_bool = true
                    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/customerCategorization', {
                        const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/customerCategorization', {
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
                            location: this.location,
                            // location:  "3.334432, 6.322344",
                            loadStatus: this.load_type,
                            useOfPremise: this.user_of_premise,
                            customerWiring: this.customer_wiring,
                            feederAvailability: this.feeder_availability,
                            feederCap: this.feeder_cap,
                            feederNo: this.feeder_no,
                            feederName: this.feeder_name,
                            totalKwh: this.total_kwh,
                            rybValue: this.r_y_b,
                            neutralValue: this.n_n_n,
                            redPhaseValue: this.r_box,
                            yellowPhaseValue: this.y_box,
                            bluePhaseValue: this.b_box,
                            picRYB: this.pic_of_the_ryb.name,
                            picNeutral: this.pic_of_the_n.name,
                            picRed: this.pic_of_the_r_threephase.name,
                            picYellow: this.pic_of_the_y_threephase.name,
                            picBlue: this.pic_of_the_b_threephase.name,
                            picBuilding: this.pic_of_the_buidling.name,
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