<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <div class="col s12">
                <nuxt-link to="../menu" class="red white-text btn">
                    Back
                </nuxt-link>
                <b class="grey-text btn disabled">Work Order Details</b>
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

        <div class="row" v-if="hideworkOrderDetails == false">
            <div class="row">

                <div class="col s12 center">
                    <div class="card-panel white black-text left-align" style="padding: 15px; border-radius: 10px;">

                        <div class="row">
                            <div class="col s12">
                                <span class="red-text">
                                    <h6 style="font-weight: 800;">
                                        {{ work_order.workOrder }} <br>
                                        {{ work_order.faultDescription }}
                                    </h6>
                                </span>
                                <hr style="color: #fff;">
                                <br>
                                <p style="margin-top: -10px;">
                                    <b>Feeder Band:</b>
                                    {{ work_order.feederBand }}
                                </p>
                                <p style="margin-top: -10px;">
                                    <b>Fault Type:</b>
                                    {{ work_order.faultType }}
                                </p>
                                <p style="margin-top: -10px;">
                                    <b>Fault Category:</b>
                                    {{ work_order.faultCategory }}
                                </p>
                                <p style="margin-top: -10px;">
                                    <b>Asset Name:</b>
                                    {{ work_order.assetName }}
                                </p>
                                <p style="margin-top: -10px;">
                                    <b>Technical Lead:</b>
                                    {{ work_order.currentTechnicalLead }}
                                </p>
                                <p style="margin-top: -10px;">
                                    <b>Current BU:</b>
                                    {{ work_order.currentBu }}
                                </p>
                                <p style="margin-top: -10px;">
                                    <b>Current UT:</b>
                                    {{ work_order.currentUt }}
                                </p>
                                <p style="margin-top: -10px;">
                                    <b>DT:</b>
                                    {{ work_order.dt }}
                                </p>
                                <p style="margin-top: -10px;">
                                    <b>DT N0:</b>
                                    {{ work_order.dtNo }}
                                </p>
                                <p style="margin-top: -10px;">
                                    <b>Fault Operations:</b>
                                    {{ work_order.faultOperations }}
                                </p>
                                <p style="margin-top: -10px;">
                                    <b>Severity:</b>
                                    {{ work_order.severity }}
                                </p>
                                <br>
                                <p style="margin-top: -30px;">
                                    <b>Status:</b> <b class="red-text">
                                        {{ work_order.status }}
                                    </b>
                                </p>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s6">
                                <button class="btn green white-text btn-large"
                                    style="background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;"
                                    @click="doYouNeedWorkTools()">
                                    Start Work
                                </button>
                            </div>
                            <div class="col s6">
                                <button class="btn orange white-text btn-large" @click="reassign()"
                                    style="background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;">
                                    Reassign
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>



        <div class="row" v-if="hideworkToolsModal == false">
            <div class="row">

                <div class="col s12 center">
                    <div class="card-panel white black-text left-align" style="padding: 15px; border-radius: 10px;">

                        <div class="row">
                            <div class="col s12">
                                <span class="red-text center">
                                    <h6 style="font-weight: 800;">
                                        Do you need materials?
                                    </h6>
                                </span>
                            </div>
                        </div>

                        <div class="row center" style="margin-top: 20px;">
                            <div class="col s6">
                                <button class="btn green white-text btn-large" @click="yesWorkTools()"
                                    style="background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;">
                                    Yes
                                </button>
                            </div>
                            <div class="col s6">
                                <button class="btn orange white-text btn-large" @click="noWorkTools()"
                                    style="background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;">
                                    No
                                </button>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>





        <!-- form for NO WORK MATERIALS starts here -->
        <div class="row" :class="{ 'hide': hideNoworkToolsForm }">
            <div class="col s12">
                <form @submit.prevent style="margin-top: 20px">


                    <div class="row">
                        <div class="col s12" style="margin-bottom: 15px;">
                            <CustomSelect :options="['unknown', 'Wire Burn', 'Meter Burnt', 'Pole fallen', 'ETC',]"
                                :default="'Fault Category *'" class="" v-model="fault_category" />
                        </div>
                    </div>


                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                1st Image (*)
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
                                2nd Image (*)
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
                                <!-- Formerly Picture of theft -->
                                3rd Image (*)
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
                                4th Image (*)
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








                    <div class="row center">
                        <!-- Modal Trigger -->
                        <!-- <a class="waves-effect waves-light btn white red-text center" @click="showSignatureModule()">Click here to add signature</a> -->
                    </div>









                    <div class="row center safe-area-bottom">
                        <div class="col s12">
                            <button class="btn btn-large red" style="width: 300px; margin-top: 20px;" @click="submit"
                                :disabled="disabled_bool">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
        <!-- form for NO WORK MATERIALS ends here -->




        <!-- form for YES FOR WORK MATERIALS starts here -->
        <div class="row" :class="{ 'hide': hideYesworkToolsForm }">
            <div class="col s12">
                <form @submit.prevent style="margin-top: 20px">


                    <div class="row" style="margin-bottom: 30px;">
                        <div class="col s6">
                            <CustomSelect :options="items" :default="'Select an item'" v-model="selectedItem" />
                        </div>
                        <div class="col s6">
                            <input type="text" placeholder="Quantity" v-model="quantity" class="input-field" />
                        </div>
                        <!-- <div class="col s4">
                            <button class="btn waves-effect waves-light red" @click="addItem">
                                Add
                            </button>
                        </div> -->
                    </div>



                    <div class="row" style="margin-top: 30px;">
                        <div class="col s12">
                            <!-- Add Button -->
                            <button class="btn waves-effect waves-light red right" @click="addItem">
                                Add
                            </button>


                        </div>
                    </div>


                    <div class="row" style="margin-top: 30px;">
                        <div class="col s12">

                            <!-- Selected List -->
                            <ul class="collection" v-if="selectedList.length > 0">
                                <li class="collection-item" v-for="(item, index) in selectedList" :key="index">
                                    {{ item }}

                                    <!-- Optional: Remove button -->
                                    <a href="#!" class="secondary-content" @click="removeItem(index)">
                                        <i class="material-icons red-text">close</i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                1st Image (*)
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
                                2nd Image (*)
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
                                <!-- Formerly Picture of theft -->
                                3rd Image (*)
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
                                4th Image (*)
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








                    <div class="row center">
                        <!-- Modal Trigger -->
                        <!-- <a class="waves-effect waves-light btn white red-text center" @click="showSignatureModule()">Click here to add signature</a> -->
                    </div>


                    <div class="row">
                        <div class="col s12 input-field">
                            <textarea class=" materialize-textarea" name="" id="" placeholder="Further Remarks (*)"
                                v-model="further_remarks"></textarea>
                        </div>
                    </div>









                    <div class="row center safe-area-bottom">
                        <div class="col s12">
                            <button class="btn btn-large red" style="width: 300px; margin-top: 20px;" @click="submit"
                                :disabled="disabled_bool">Submit</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
        <!-- form for YES FOR WORK MATERIALS ends here -->




        <div class="row" v-if="hidereasignWorkOrder == false">
            <div class="card-panel white black-text left-align" style="padding: 15px; border-radius: 10px;">

                <div class="row">
                    <div class="col s12">
                        <h5>
                            Reassign Work Order
                        </h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col s12">
                        <CustomSelect :options="['Abule Egba', 'Akowonjo', 'Ikeja', 'Ikorodu', 'Oshodi', 'Shomolu']"
                            :default="'Select BU'" class="" v-model="business_unit" />
                    </div>
                </div>

                <br>

                <div class="row">
                    <div class="col s12">
                        <CustomSelect :options="undertakingOptions" :default="'Select UT'" class=""
                            v-model="undertaking_one" />
                    </div>
                </div>


                <div class="row" style="margin-top: 30px;">
                    <div class="col s12">
                        <button class="btn red white-text col s12 btn-large"
                            style="border-radius: 7px; margin-top: -10px; margin-bottom: 0px;" @click="saveReassign(work_order.id, work_order.currentBu, work_order.currentUt)">
                            Submit
                        </button>
                    </div>
                </div>

            </div>

        </div>



        <div class="row" v-if="hideSuccess == false">
            <div class="card-panel white black-text left-align" style="padding: 15px; border-radius: 10px;">

                <div class="row">
                    <div class="col s12 center">
                        <img src="~/assets/images/success.svg" class=" responsive-img" style="max-height: 100px;"
                            alt="">
                    </div>
                </div>

                <div class="row" style="margin-top: 30px;">
                    <!-- business unit -->
                    <div class="col s12 green-text">
                        <b>Work Order Reassigned Successfully!</b> <br>
                    </div>
                </div>


                <div class="row" style="margin-top: 30px;">
                    <div class="col s12">
                        <nuxt-link to="../menu" class="btn green white-text col s12 btn-large"
                            style="background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;">
                            Done
                        </nuxt-link>
                    </div>
                </div>

            </div>

        </div>



    </div>

</template>




<script>
import { getFaultTicketDetailsById, reasignFault } from '~/js_modules/mods.js'
import CustomSelect from '~/components/CustomSelect.vue'
export default {
    layout: 'admin_main',

    data() {
        return {
            work_order: [],

            undertakingOptions: [
                "ABORU",
                "ABULE-ODU",
                "ABULE-TAYLOR",
                "ADIYAN",
                "AGO",
                "AIT",
                "AJAO",
                "AKUTE",
                "AMUWO",
                "ANIFOWOSHE",
                "ANTHONY MEGA",
                "AYANGBUREN",
                "AYOBO",
                "BARIGA",
                "DOPEMU",
                "EGBEDA",
                "EPE",
                "FAGBA",
                "GOWON-ESTATE",
                "IDIMU",
                "IFAKO",
                "IGANDO",
                "IGBOBI",
                "IGBOBI MEGA",
                "IGBOGBO",
                "IJAIYE",
                "IJEDE",
                "IJEGUN",
                "IJU",
                "IKOSI",
                "IKOTUN",
                "ILUPEJU",
                "ILUPEJU MEGA",
                "IPAJA",
                "ISOLO",
                "KETU",
                "LAMBE",
                "LASUNWON",
                "MAGODO",
                "MAGODO MEGA",
                "MENDE",
                "OBA AKRAN",
                "ODOGUNYAN",
                "OGBA",
                "OGUDU",
                "OJODU",
                "OKE-AFA",
                "OKE-IRA",
                "OKE-ODO",
                "OKOTA",
                "OLATEJU",
                "OLOWORA",
                "OREGUN",
                "ORILE-AGEGE",
                "OSHODI",
                "OWORO",
                "OWOROSHONKI MEGA",
                "OWUTU",
                "PTC",
            ],

            fullname: '',

            name: '',
            email: '',
            message: '',
            fault_category: '',
            hideForm: true,
            disabled_bool: false,
            further_remarks: '',
            quantity: '',

            selectedItem: "",
            items: ["Wires", "Screws", "Circute breakers", "Bridge Station Cables", "200V Cables", "Insulators", "Poles"],
            selectedList: [],

            hideworkOrderDetails: false,
            hideworkToolsModal: true,
            hideNoworkToolsForm: true,
            hideYesworkToolsForm: true,
            hidereasignWorkOrder: true,
            hideSuccess: true,

            business_unit: '',
            undertaking_one: '',
            scheduleList: [],

        }
    },

    methods: {

        async fetchWorkOrderDetails() {
            // 1. Get the ID from the URL query
            const workOrderId = this.$route.query.id;

            if (!workOrderId) {
                M.toast({ html: `<b class="red-text">Error: Work Order ID not found in URL.</b>` });
                return;
            }

            // 2. Call the new API function
            const details = await getFaultTicketDetailsById(workOrderId);

            if (details) {
                // The API for getById usually returns a single object, 
                // but your template uses v-for="value in work_order".
                // We wrap the single object in an array for compatibility with the template.
                this.work_order = details;
            } else {
                this.work_order = [];
            }
        },

        addItem() {
            if (!this.selectedItem) return;

            if (this.selectedList.includes(this.selectedItem)) {
                M.toast({ html: "Item already selected!", classes: "red" });
                return;
            }

            this.selectedList.push(this.selectedItem);

            M.toast({ html: "Item added!", classes: "green" });
            this.quantity = ''
        },

        removeItem(index) {
            this.selectedList.splice(index, 1);
            M.toast({ html: "Item removed!", classes: "orange" });
        },


        submit() {
            // Handle form submission logic here
            alert('Form submitted!');
        },

        reassign() {
            this.hideworkOrderDetails = true
            this.hidereasignWorkOrder = false
        },

        noWorkTools() {
            this.hideworkToolsModal = true
            this.hideNoworkToolsForm = false

        },

        yesWorkTools() {
            this.hideworkToolsModal = true
            this.hideYesworkToolsForm = false

        },

        async saveReassign(id, techLead) {
            // 1. Validate inputs
            if (!this.business_unit || !this.undertaking_one || this.business_unit === 'Select BU' || this.undertaking_one === 'Select UT') {
                M.toast({ html: 'Please select **BU**, **UT**, and **Technical Lead**.', classes: 'red' });
                return;
            }

            // const faultId = this.getCurrentFaultId();

            if (!id) {
                M.toast({ html: 'Cannot reassign: Work Order ID is missing.', classes: 'red' });
                return;
            }

            // 2. Call the Reassign API function
            const result = await reasignFault(
                id,
                this.business_unit,
                this.undertaking_one,
                techLead
            );

            // 3. Check the API result
            if (result && result.statusMsg === "Success") { // Adjust 'SUCCESS' based on actual API response structure
                // On Success
                M.toast({ html: 'Work Order Reassigned Successfully! ✅', classes: 'green' });
                this.hidereasignWorkOrder = true; 
                this.hideSuccess = false;  

            } else {
                // On Failure (API returned an error or the status wasn't 'SUCCESS')
                M.toast({ html: 'Reassignment failed. Please check your network.', classes: 'red' });
                
            }
        },

        doYouNeedWorkTools() {
            this.hideworkToolsModal = false
            this.hideworkOrderDetails = true
        },
    },

    mounted() {
        // Initialize MaterializeCSS Select
        // 3. Call the fetch function when the component is mounted
        this.fetchWorkOrderDetails();

        // Initialize MaterializeCSS Select
        const elems = document.querySelectorAll("select");
        window.M.FormSelect.init(elems);
        M.FormSelect.init(document.querySelectorAll('select'));

        localStorage.setItem('service_type', '')
        localStorage.setItem('meter_number', '')
    },

    created() {

        // this.getFullname()
    }
}
</script>


<style scoped>
/* === Red Material Select Customization === */
.custom-select {
    /* border: 1px solid #f44336 !important; */
    border-radius: 6px;
    background-color: #fff;
    color: #000;
    padding: 8px;
}

.custom-select:focus {
    /* border-color: #d32f2f !important; */
    /* box-shadow: 0 0 0 1px #d32f2f !important; */
}

/* Dropdown text and highlight colors */
.dropdown-content li>span {
    color: #f44336 !important;
}

.dropdown-content li.selected>span {
    color: white !important;
    background-color: #f44336 !important;
}

/* Label color when active */
input.select-dropdown:focus+label {
    color: #f44336 !important;
}

/* Focus underline */
input.select-dropdown:focus {
    border-bottom: 1px solid #f44336 !important;
    box-shadow: 0 1px 0 0 #f44336 !important;
}
</style>