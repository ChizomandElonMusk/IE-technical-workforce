<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <div class="col s12">
                <nuxt-link to="../dashboard_ie_force" class="red white-text btn">
                    Back
                </nuxt-link>
                <b class="grey-text btn disabled">Energy Theft</b>
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
                            <div class="col s12">
                                <input type="text" v-model="installation_date" placeholder="Installation Date" disabled>
                            </div>
                        </div>

                        <div class="row">
                            <!-- Customer Email -->
                            <div class="col s12">
                                <input type="text" placeholder="Customer Email" v-model="customer_email">
                            </div>
                        </div>

                        <div class="row">
                            <!-- Customer Phone Number -->
                            <div class="col s12">
                                <input type="text" placeholder="Customer Phone Number *"
                                    v-model="customer_phone_number">
                            </div>
                        </div>
                        <!-- end of new field -->



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
                                <!-- <select class="custom-select" v-model="undertaking_one">
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
                            </select> -->
                            </div>
                        </div>

                        <div class="row">
                            <!-- DT name -->
                            <div class="col s12">
                                <input type="text" placeholder="DT name" v-model="dt_name" disabled>
                            </div>
                        </div>

                        <!-- <div class="row">
                            <div class="col s12">
                                <input type="text" v-model="phone_number" placeholder="Phone number" disabled>
                            </div>
                        </div>  -->

                        <div class="row">
                            <div class="col s12">
                                <input type="text" v-model="account_status" placeholder="Account status" disabled>
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
                        </div>


                        <div class="row">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    <!-- Fomerly Additional Pic -->
                                    Seal as met (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForTheft()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>
                        </div>

                        <!-- output for pic of the service wire from pole to metering point -->
                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-theft" />
                            </div>
                        </div>



                        <div class="row">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    Picture of Bypass (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForBypass()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>
                        </div>

                        <!-- output for pic of the service wire from pole to metering point -->
                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-bypass" />
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
                                    Additional Picture 1 (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForAdditional()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>
                        </div>

                        <!-- output for pic of the service wire from pole to metering point -->
                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-additional" />
                            </div>
                        </div>


                        <div class="row">
                            <!-- Pic of the service wire from pole to metering point * -->
                            <div class="col s12">

                                <h6 class="red-text">
                                    <!-- Picture of the service wire from pole metering point -->
                                    <!-- Formerly Picture of theft -->
                                    Additional Picture 2 (*)
                                </h6>
                                <button class="btn red btn-large" @click="imagePickerForAdditionalPic2()">
                                    <i class="material-icons white-text">camera_alt</i>
                                </button>
                                <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                            </div>
                        </div>

                        <!-- output for pic of the service wire from pole to metering point -->
                        <div class="row">
                            <div class="col s12">
                                <img class=" responsive-img" id="output-pic-of-additional-pic2" />
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
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
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
            dt_no: '',
            tarrif: '',
            address: '',
            business_unit: '',
            type_of_infra: '',
            undertaking_one: '',
            dt_name: '',
            installation_date: '',
            phone_number: '',
            location: '',
            duration_of_theft: '',
            account_status: '',
            random_id: '',
            account_number_psudo: '',
            userId: null,
            pic_of_theft: '',
            pic_of_bypass: '',
            pic_of_additional: '',
            pic_of_additional_pic2: '',
            pic_of_meter: '',
            negative_reading: false,
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
            feed_availability: '',
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
                this.pumping_maching_on_direct = false
            } else if (newVal === 'Pumping Machine On Direct') {
                this.pumping_maching_on_direct = true
                this.negative_reading = false
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



            console.log(this.pic_of_theft.name);
            if (this.pic_of_theft.name == undefined) {
                M.toast({ html: `<b class="red-text">Please upload Seal as Met* first</b>` })
                this.account_number = ''
                this.meter_number = ''
                return
            }


            if (this.service_type == 'prepaid') {

                // await checkCustomerMeterNumber(this.meter_number)
                console.log('make postpaid call')
                try {

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
                            this.account_number = response.accountNumber
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
                            this.feed_availability = response.feederAvailability
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
                    this.feed_availability = response.feederAvailability
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





        async imagePickerForAdditionalPic2() {

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



                this.doSomethingWithFilesimagePickerForAdditionalPic2(blob)
            }


        },


        async doSomethingWithFilesimagePickerForAdditionalPic2(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;
            // const imageFile = event.target.files[0];
            if (this.account_number !== '') {
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
                const output = document.getElementById('output-pic-of-additional-pic2');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_additional_pic2 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_additional_pic2)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.account_number2, 'EnergyTheft_Additional1', this.pic_of_additional_pic2)
                console.log(xx)
                console.log('account number on Additional2 ', this.account_number)





            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForTheft() {

            this.meter_number = this.meter_number.trim()
            this.account_number = this.account_number.trim()
            if (this.meter_number == '' && this.account_number == '') {
                let random_str = this.generateRandomString()
                let todays_date = new Date()
                let day = todays_date.getDay()
                let hour = todays_date.getHours()
                let mins = todays_date.getMinutes()
                let seconds = todays_date.getSeconds()
                let millisecs = todays_date.getUTCMilliseconds()
                // console.log(todays_date.getDay());
                // console.log(todays_date.getUTCMilliseconds());
                // M.toast({ html: `<b class="red-text">Random string: ${random_str}${day}${hour}${mins}${seconds}${millisecs}</b>` })
                // this.account_number = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
                // this.account_number = String(this.account_number)
                this.random_id = `${random_str}${day}${hour}${mins}${seconds}${millisecs}`
                this.random_id = String(this.random_id)
                console.log(this.random_id);
                console.log(this.random_id);

                // Call the element loader after the app has been rendered the first time
                defineCustomElements(window);

                const image = await Camera.getPhoto({
                    quality: 100,
                    allowEditing: false,
                    resultType: CameraResultType.Base64,
                    source: CameraSource.Prompt
                });


                const rawData = window.atob(image.base64String);
                const bytes = new Array(rawData.length);
                for (var x = 0; x < rawData.length; x++) {
                    bytes[x] = rawData.charCodeAt(x);
                }
                const arr = new Uint8Array(bytes);
                const blob = new Blob([arr], { type: 'image/jpeg' });
                console.log(blob)



                this.doSomethingWithFilesimagePickerForTheft(blob)
            }


        },


        async doSomethingWithFilesimagePickerForTheft(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;
            // const imageFile = event.target.files[0];

            if (this.random_id !== '') {
                console.log('acc number is not empty');
                this.account_number2 = this.random_id
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
                const output = document.getElementById('output-pic-of-theft');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_theft = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_theft)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.account_number2, 'EnergyTheft_Theft', this.pic_of_theft)
                console.log(xx)
                if (this.random_id != '') {
                    this.account_number = ''
                }





            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForBypass() {

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



                this.doSomethingWithFilesimagePickerForBypass(blob)
            }


        },


        async doSomethingWithFilesimagePickerForBypass(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;
            // const imageFile = event.target.files[0];

            if (this.account_number !== '') {
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
                const output = document.getElementById('output-pic-of-bypass');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_bypass = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_bypass)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.account_number2, 'EnergyTheft_ByPass', this.pic_of_bypass)
                console.log(xx)

                console.log('account number on Bypass ', this.account_number)





            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForAdditional() {

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



                this.doSomethingWithFilesimagePickerForAdditional(blob)
            }


        },


        async doSomethingWithFilesimagePickerForAdditional(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;
            // const imageFile = event.target.files[0];

            if (this.account_number !== '') {
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
                const output = document.getElementById('output-pic-of-additional');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_additional = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_additional)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.userId, this.account_number2, 'EnergyTheft_Additional', this.pic_of_additional)
                console.log(xx)
                console.log('account number on Additional ', this.account_number)





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

            if (this.account_number !== '') {
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
                var xx = await uploadImage(this.userId, this.account_number2, 'EnergyTheft_Meter', this.pic_of_meter)
                console.log(xx)
                console.log('account number on Building ', this.account_number)





            } catch (error) {
                // // console.log(error);
            }

        },



        // all test on compression comes here

        async imagePickerForTheServiceWireFromPoleToMeteringPoint() {

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



            this.doSomethingWithFilesImagePickerForTheServiceWireFromPoleToMeteringPoint(blob)
        },





        async doSomethingWithFilesImagePickerForTheServiceWireFromPoleToMeteringPoint(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-the-service-wire-from-pole-to-metering-point');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.pic_of_the_service_wire_from_pole_to_metering_point = new File([compressedFile], `pictureOfTheServiceWireFromPole${compressedFile.type.replace('image/', '.')}`)
                console.log(this.pic_of_the_service_wire_from_pole_to_metering_point)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

            } catch (error) {
                // // console.log(error);
            }

        },





        // image picker for building
        async imagePickerBuilding() {
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
                resultType: CameraResultType.Base64,
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
                resultType: CameraResultType.Base64,
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
                resultType: CameraResultType.Base64,
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
                resultType: CameraResultType.Base64,
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
                resultType: CameraResultType.Base64,
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
                resultType: CameraResultType.Base64,
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
                resultType: CameraResultType.Base64,
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
                resultType: CameraResultType.Base64,
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
                resultType: CameraResultType.Base64,
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





















        // pic of last bill vending receipt
        async imagePickerForLastBillVendingReceipt() {
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
                resultType: CameraResultType.Base64,
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
                resultType: CameraResultType.Base64,
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
                resultType: CameraResultType.Base64,
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
            console.log('account number in SUBMIT ', this.account_number)
            this.negative_reading_value = `-${this.negative_reading_value}`
            console.log('Negative reading ', this.negative_reading_value);
            // get all the form value in the dynamic list 
            let meter_number_list = this.getAllFormValues()
            console.log(meter_number_list);


            M.toast({ html: '<b class="yellow-text">Please wait...</b>' })
            this.hideLoader = false
            this.business_unit = this.business_unit.trim()
            this.type_of_infra = this.type_of_infra.trim()
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




            // Debug logging with explicit type and length information
            console.log('business_unit:', `"${this.business_unit}"`, 'length:', this.business_unit.length)
            console.log('type_of_infra:', `"${this.type_of_infra}"`, 'length:', this.type_of_infra.length)
            console.log('duration_of_theft:', `"${this.duration_of_theft}"`, 'length:', this.duration_of_theft.length)

            // Check each condition separately

            const isCustomerPhone = this.customer_phone_number === ''
            const isBusinessUnitEmpty = this.business_unit === ''
            const isTypeOfInfraDefault = this.type_of_infra === 'Type of Infraction *'
            const isDurationDefault = this.duration_of_theft === 'Duration of theft *'

            console.log('Conditions:', {
                isBusinessUnitEmpty,
                isTypeOfInfraDefault,
                isDurationDefault
            })

            if (isBusinessUnitEmpty || isTypeOfInfraDefault || isDurationDefault) {
                M.toast({ html: '<b class="red-text">Fill all the field marked with *</b>' })
                this.hideLoader = true
            } else if (isCustomerPhone) {
                M.toast({ html: '<b class="red-text">Please fill the phone number *</b>' })
            } else if (this.pic_of_bypass == '') {
                M.toast({ html: '<b class="red-text">Please add pic of Bypass *</b>' })
            } else if (this.pic_of_theft == '') {
                M.toast({ html: '<b class="red-text">Please add pic of notification *</b>' })
            } else if (this.pic_of_meter == '') {
                M.toast({ html: '<b class="red-text">Please add pic of building *</b>' })
            } else if (this.pic_of_additional == '') {
                M.toast({ html: '<b class="red-text">Please add pic of Seal as met *</b>' })
            } else if (this.further_remarks == '') {
                M.toast({ html: '<b class="red-text">Please add Further remarks *</b>' })
            } else {





                try {

                    this.disabled_bool = true
                    // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/energyTheft', {
                    const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/v1/api/v1/energyTheft', {
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
                            phoneNo: this.customer_phone_number,
                            customerEmail: this.customer_email,
                            customerPhoneNo: this.customer_phone_number,
                            dtCapacity: this.feed_availability,
                            feederCap: this.feeder_cap,
                            feederNo: this.feeder_no,
                            feederName: this.feeder_name,
                            wiringMode: this.wiring_mode,
                            meterManufacturer: this.meter_manufacturer,
                            meterType: this.meter_type,
                            location: this.location,
                            // location:  "3.334432, 6.322344",
                            typeOfInfraction: this.type_of_infra,
                            durationOfTheft: this.duration_of_theft,
                            negReading: this.negative_reading_value,
                            affectedMeters: meter_number_list,
                            requestId: this.random_id,
                            picTheft: this.pic_of_theft.name,
                            picBypass: this.pic_of_bypass.name,
                            picAdditional: this.pic_of_additional.name,
                            picAdditional1: this.pic_of_additional_pic2.name,
                            picMeter: this.pic_of_meter.name,
                            furtherRemark: this.further_remarks,
                        }),
                    })

                    const response = await rawResponse.json()

                    console.log(response)

                    if (response.code == '00') {
                        this.hideLoader = true
                        localStorage.setItem('tracking_id', response.trackingId)
                        this.$router.push('../sent_tracking')
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