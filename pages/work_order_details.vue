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
        <PreLoader v-if="!hidePreLoader" />
        <!-- <div class="row">
            <div class="col s12">
                <div class="center" style="margin-top: 10px;">
                    <span v-if="isOnline" class="badge green white-text" style="border-radius: 4px;">
                        <i class="material-icons left" style="font-size: 14px; margin-top: 4px;">wifi</i>
                        Connected ({{ connectionType }}) 
                    </span>
                    <span v-else class="badge red white-text" style="border-radius: 4px;">
                        <i class="material-icons left" style="font-size: 14px; margin-top: 4px;">signal_wifi_off</i>
                        Offline - Check Connection
                    </span>
                </div>
            </div>
        </div> -->
        <div v-if="isDesktop" class="desktop-blocker">
            <div class="container center-align">
                <Logo />
                <div class="card-panel" style="margin-top: 50px; border-radius: 15px; padding: 40px;">
                    <i class="material-icons large red-text">phonelink_lock</i>
                    <h4 class="red-text" style="font-weight: bold;">Mobile Access Only</h4>
                    <p class="grey-text text-darken-2" style="font-size: 1.2rem;">
                        The Technical Workforce portal is restricted to mobile devices for field operations.
                    </p>
                    <p>Please access this site via your <b>Smartphone Browser</b> or use the <b>Official Android
                            App</b>.</p>

                    <div style="margin-top: 30px;">
                        <button class="btn-large red darken-2" style="border-radius: 8px; width: 100%;">
                            Get the mobile app from the Admininistrator
                        </button>
                    </div>
                </div>
            </div>
        </div>


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
                                <div v-if="!displayCountdown(work_order).isExpired">
                                    <p style="margin-top: -10px;">
                                        SLA countdown:
                                        <b class="black-text">
                                            {{ displayCountdown(work_order).d }}d :
                                            {{ displayCountdown(work_order).h }}h :
                                            {{ displayCountdown(work_order).m }}m :
                                            {{ displayCountdown(work_order).s }}s
                                        </b>
                                    </p>
                                </div>
                                <div v-else>
                                    <p style="margin-top: -10px;">
                                        SLA Status: <b class="black-text"
                                            style="background: white; padding: 2px 5px; border-radius: 4px;">EXPIRED</b>
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="row"
                            v-if="work_order.reassignFlag == 'N' && work_order.requisitionStatus != 'INITIATED' && work_order.requisitionStatus != 'APPROVED' && work_order.requisitionStatus != 'COMPLETED'">

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

                        <!-- <div class="row"
                            v-if="work_order.requisitionStatus == 'APPROVED' && work_order.materialAccepted != 'Y'"> -->
                        <div class="row" v-if="work_order.requisitionStatus == 'APPROVED'">

                            <div class="col s12">
                                <!-- <button class="btn green white-text btn-large col s12"
                                    style="background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;"
                                    @click="acceptMaterial()">
                                    Accept Material
                                </button> -->
                                <p class="green-text center" style="font-weight: 600; margin-top: 20px;">
                                    Material is ready for pickup
                                </p>
                            </div>
                        </div>

                        <div class="row" v-if="work_order.materialAccepted == 'Y' && work_order.reassignFlag !== 'Y'">

                            <div class="col s12">
                                <button class="btn green white-text btn-large col s12"
                                    style="background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;"
                                    @click="completeWork()">
                                    Complete Work
                                </button>
                            </div>
                        </div>

                        <div class="row">
                            <div class="col s12" v-if="work_order.reassignFlag == 'Y'">
                                <b class="red-text">
                                    This work order has been reassigned and cannot be worked on.
                                </b>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col s12" v-if="work_order.requisitionStatus == 'INITIATED'">
                                <b class="red-text">
                                    This work order has a pending material requisition.
                                </b>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>



        <!-- form for DO YOU NEED WORK TOOLS starts here -->
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
        <!-- form for DO YOU NEED WORK TOOLS ends here -->



        <div class="row" v-if="hideAcceptMaterialModal == false">
            <div class="row">

                <div class="col s12 center">
                    <div class="card-panel white black-text left-align" style="padding: 15px; border-radius: 10px;">

                        <div class="row">
                            <div class="col s12">
                                <span class="red-text center">
                                    <h6 style="font-weight: 800;">
                                        Has work material been received?
                                    </h6>
                                </span>
                            </div>
                        </div>

                        <div class="row center" style="margin-top: 20px;">
                            <div class="col s6">
                                <button class="btn green white-text btn-large" @click="yesWorkMaterialReceived()"
                                    style="background: #fff; border-radius: 7px; margin-top: -10px; margin-bottom: 0px;">
                                    Yes
                                </button>
                            </div>
                            <div class="col s6">
                                <button class="btn orange white-text btn-large" @click="noWorkMaterialsNotReceived()"
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
                <h5 class="center">
                    Proof of resolution
                </h5>
                <form @submit.prevent style="margin-top: 20px">


                    <!-- <div class="row">
                        <div class="col s12" style="margin-bottom: 15px;">
                            <CustomSelect :options="faultCategoryOptions" :default="'Fault Category *'" class=""
                                v-model="fault_category" />
                        </div>
                    </div> -->


                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                Material 1 (*)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMaterial_1()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-mat1" />
                        </div>
                    </div>


                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                Material 2 (*)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMaterial_2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-mat2" />
                        </div>
                    </div>



                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                Material 3 (*)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMaterial_3()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-mat3" />
                        </div>
                    </div>



                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                Material 4 (*)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMaterial_4()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-mat4" />
                        </div>
                    </div>




                    <div class="row center">
                        <!-- Modal Trigger -->
                        <!-- <a class="waves-effect waves-light btn white red-text center" @click="showSignatureModule()">Click here to add signature</a> -->
                    </div>

                    <div class="row center safe-area-bottom">
                        <div class="col s12">
                            <button class="btn btn-large red col s12" style="margin-top: 20px;"
                                @click="submitNoMeterialNeededForm" :disabled="disabled_bool">Completed</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
        <!-- form for NO WORK MATERIALS ends here -->




        <!-- form for YES FOR WORK MATERIALS starts here -->
        <div class="row" :class="{ 'hide': hideYesworkToolsForm }">
            <div class="col s12">
                <h5 class="center">
                    Material Requisition
                </h5>
                <div v-if="isSearching" class="card-panel grey lighten-4" style="border-radius: 10px; padding: 20px;">
                    <div class="row">
                        <div class="col s9">
                            <input type="text" v-model="searchQuery" placeholder="Search material name..."
                                @keyup.enter="searchForItems">
                        </div>
                        <div class="col s3">
                            <button class="btn red btn-large col s12" @click="searchForItems">
                                <i class="material-icons">search</i>
                            </button>
                        </div>
                    </div>

                    <div v-if="searchResults.length > 0" class="collection shadow-none">
                        <a href="#!" class="collection-item black-text" v-for="res in searchResults" :key="res.item"
                            :class="{ 'red lighten-5': selectedSearchResult?.item === res.item }"
                            @click="selectFromSearch(res)" style="padding-bottom: 40px;">
                            <b>{{ res.description }}</b>
                            <br>
                            <b class="badge red white-text left" data-badge-caption="in stock"
                                style="border-radius: 6px; padding: 8px;">In-Stock: {{ res.quantity }}</b>
                        </a>
                    </div>

                    <div class="row" v-if="selectedSearchResult" style="margin-top: 20px;">
                        <div class="col s12">
                            <p>Enter Quantity for: <b>{{ selectedSearchResult.description }}</b></p>
                            <input type="text" placeholder="Quantity" v-model="quantity"
                                onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                @input="quantity = quantity.replace(/[^0-9]/g, ''); if (quantity === '0') quantity = '';" />
                            <button class="btn green col s12" @click="addItem">Add to List</button>
                        </div>
                    </div>

                    <button class="btn-flat grey-text col s12 center" style="margin-top: 20px; margin-bottom: 40px;"
                        @click="closeSearch">
                        Close & Return to Form
                    </button>
                </div>

                <div v-if="!isSearching">
                    <div class="row">
                        <div class="col s12">
                            <button class="btn white red-text col s12 btn-large"
                                style="border: 2px dashed red; height: 60px;" @click="openSearch">
                                + Add Material Item
                            </button>
                        </div>
                    </div>

                    <div class="row" v-if="selectedList.length > 0">
                        <div class="col s12">
                            <ul class="collection">
                                <li class="collection-item" v-for="(item, index) in selectedList" :key="index">
                                    {{ item.description }} - <b>({{ item.quantity }})</b>
                                    <a href="#!" class="secondary-content" @click="removeItem(index)">
                                        <i class="material-icons red-text">close</i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <!-- <div class="row on-top" style="margin-bottom: 30px;">
                        <div class="col s12">
                            <CustomSelect :options="items" :default="'Select an item'" v-model="selectedItem" />
                        </div>
                        <div class="col s12" style="margin-top: 60px;">
                            <input type="text" placeholder="Quantity" v-model="quantity" class="input-field"
                                onkeypress="return event.charCode >= 48 && event.charCode <= 57"
                                @input="quantity = quantity.replace(/[^0-9]/g, ''); if (quantity === '0') quantity = '';" />
                        </div>
                    </div> -->



                    <!-- <div class="row" style="margin-top: 10px;">
                        <div class="col s12">]
                            <button class="btn btn-large waves-effect waves-light red col s12" @click="addItem">
                                Add
                            </button>


                        </div>
                    </div> -->


                    <!-- <div class="row" style="margin-top: 30px;">
                        <div class="col s12">

                            
                            <ul class="collection" v-if="selectedList.length > 0">
                                <li class="collection-item" v-for="(item, index) in selectedList" :key="index">
                                    {{ item.description }}
                                    - ({{ item.quantity }})

                                    
                                    <a href="#!" class="secondary-content" @click="removeItem(index)">
                                        <i class="material-icons red-text">close</i>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div> -->





                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                Material 1 (*)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMaterial_1_YES()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-mat1-yes" />
                        </div>
                    </div>


                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                Material 2 (*)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMaterial_2_YES()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-mat2-yes" />
                        </div>
                    </div>



                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                Material 3 (*)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMaterial_3_YES()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-mat3-yes" />
                        </div>
                    </div>



                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                Material 4 (*)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMaterial_4_YES()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-mat4-yes" />
                        </div>
                    </div>



                    <div class="row center">
                        <!-- Modal Trigger -->
                        <!-- <a class="waves-effect waves-light btn white red-text center" @click="showSignatureModule()">Click here to add signature</a> -->
                    </div>


                    <div class="row center safe-area-bottom">
                        <div class="col s12">
                            <button class="btn btn-large red col s12" style="margin-top: 20px;"
                                @click="submitNoMeterialRequisitionForm" :disabled="disabled_bool">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- form for YES FOR WORK MATERIALS ends here -->



        <!-- form for Work Completed starts here -->
        <div class="row" :class="{ 'hide': hideWorkCompleteForm }">
            <div class="col s12">
                <h5 class="center">
                    Proof of resolution
                </h5>
                <form @submit.prevent style="margin-top: 20px">

                    <div class="row">
                        <div class="col s12 input-field">
                            <textarea class=" materialize-textarea" name="" id="" placeholder="Work Done"
                                style="height: 70px;" v-model="further_remarks"></textarea>
                        </div>
                    </div>




                    <div class="row" v-if="requisitionData && requisitionData.length > 0">
                        <div class="col s12">
                            <h6 class="red-text"><b>Materials Consumption (*)</b></h6>
                            <p class="grey-text" style="font-size: 0.85rem; margin-top: -5px;">Record the actual
                                quantity used for this job.</p>

                            <ul class="collection"
                                style="border-radius: 8px; border: 1px solid #e0e0e0; overflow: visible;">
                                <li class="collection-item" v-for="(mat, index) in requisitionData" :key="index"
                                    style="padding: 15px;">
                                    <span class="title" style="font-weight: bold; color: #333;">{{ mat.description
                                    }}</span>

                                    <div class="row" style="margin-top: 10px; margin-bottom: 0;">
                                        <div class="col s6">
                                            <small class="grey-text">Requested: {{ mat.quantity }}</small>
                                        </div>
                                        <div class="col s6">
                                            <input type="number" placeholder="Qty Used" v-model="mat.quantityUsed"
                                                @input="validateSingleRow(mat)"
                                                style="border: 1px solid #ccc; height: 35px; border-radius: 4px; padding: 0 10px; box-sizing: border-box; display: block; width: 100%;" />
                                        </div>
                                    </div>

                                    <div v-if="Number(mat.quantityUsed) > Number(mat.quantity)" class="red-text"
                                        style="font-size: 0.75rem; margin-top: 5px;">
                                        Error: Cannot exceed received quantity ({{ mat.quantity }})
                                    </div>
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
                                Material 1 (*)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMaterial_1_complete()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-mat1-complete" />
                        </div>
                    </div>


                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                Material 2 (*)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMaterial_2_complete()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-mat2-complete" />
                        </div>
                    </div>



                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                Material 3 (*)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMaterial_3_complete()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-mat3-complete" />
                        </div>
                    </div>



                    <div class="row">
                        <!-- Pic of the service wire from pole to metering point * -->
                        <div class="col s12">

                            <h6 class="red-text">
                                <!-- Picture of the service wire from pole metering point -->
                                <!-- Fomerly Additional Pic -->
                                Material 4 (*)
                            </h6>
                            <button class="btn red btn-large" @click="imagePickerForMaterial_4_complete()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                            <!-- <input type="file" accept="image/*" capture="environment" id="pic-of-the-service-wire-from-pole-to-metering-point" /> -->
                        </div>
                    </div>

                    <!-- output for pic of the service wire from pole to metering point -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-mat4-complete" />
                        </div>
                    </div>




                    <div class="row" v-if="!displayCountdown(work_order).isExpired">
                        
                    </div>
                    <div class="row" v-else>
                        <div class="col s12 input-field">
                            <textarea class=" materialize-textarea" name="" id=""
                                placeholder="Reason for defaulting SLA (*)" v-model="sla_comments"></textarea>
                        </div>
                    </div>




                    <div class="row center">
                        <!-- Modal Trigger -->
                        <!-- <a class="waves-effect waves-light btn white red-text center" @click="showSignatureModule()">Click here to add signature</a> -->
                    </div>

                    <div class="row center safe-area-bottom">
                        <div class="col s12">
                            <button class="btn btn-large red col s12" style="margin-top: 20px;"
                                @click="submitWorkCompleteForm" :disabled="disabled_bool">Complete work</button>
                        </div>
                    </div>

                </form>
            </div>
        </div>
        <!-- form for Work Completed ends here -->



        <!-- form for REASSIGN WORK ORDER starts here -->
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
                        <CustomSelect
                            :options="['ABULE-EGBA', 'AKOWONJO', 'IKEJA', 'IKORODU', 'OSHODI', 'SHOMOLU', 'CHQ']"
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
                            style="border-radius: 7px; margin-top: -10px; margin-bottom: 0px;"
                            @click="saveReassign(work_order.id, work_order.currentUt)">
                            Submit
                        </button>
                    </div>
                </div>

            </div>

        </div>
        <!-- form for REASSIGN WORK ORDER ends here -->


        <!-- SUCCESS MESSAGE AFTER REASSIGNMENT -->
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
        <!-- success message after reassignment ends here -->



    </div>

</template>




<script>
import { getFaultTicketDetailsById, getUndertakingUnits, reasignFault, getFaultCategories, getMaterialsByBU, materialRequiredSignal, acceptMaterial, uploadImage, getCurrentPosition, getSlaHours, calculateDeadline, getTimerBreakdown } from '~/js_modules/mods.js'
import CustomSelect from '~/components/CustomSelect.vue'
import imageCompression from 'browser-image-compression';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import PreLoader from '~/components/PreLoader.vue';
export default {
    layout: 'admin_main',

    components: {
        PreLoader
    },

    data() {
        return {
            isDesktop: false,
            hidePreLoader: true,
            requisitionData: [],

            now: Date.now(),
            timer: null,
            work_order: [],


            isOnline: true,
            connectionType: 'unknown',


            isSearching: false,
            searchQuery: '',
            searchResults: [],
            selectedSearchResult: null,

            work_order: [],
            work_order_id: '',
            work_order_current_bu: '',
            fault_id: '',
            random_id: '',
            mat1: '',
            mat2: '',
            mat3: '',
            mat4: '',

            lat: '',
            long: '',
            location: '',

            fault_category: '',               // v-model (will store the 'name' string, e.g., "BROKEN_POLE")
            faultCategoryOptions: [],         // Options for CustomSelect (array of 'name' strings)
            rawFaultCategories: [],           // Stores the full API response array (objects with id, name, etc.)
            selectedFaultCategoryId: null,

            undertakingOptions: [],

            fullname: '',

            name: '',
            email: '',
            message: '',
            hideForm: true,
            disabled_bool: false,
            further_remarks: '',
            sla_comments: '',
            quantity: '',

            selectedItem: "",
            items: [],
            selectedList: [],
            materialList: [],

            hideworkOrderDetails: false,
            hideworkToolsModal: true,
            hideAcceptMaterialModal: true,
            hideNoworkToolsForm: true,
            hideYesworkToolsForm: true,
            hidereasignWorkOrder: true,
            hideSuccess: true,
            hideWorkCompleteForm: true,

            business_unit: '',
            undertaking_one: '',
            scheduleList: [],

        }
    },

    watch: {
        // Watch for changes in the Business Unit selection
        async business_unit(newBu, oldBu) {
            // Only proceed if a valid BU is selected (not empty or default string)
            if (newBu && newBu !== 'Select BU') {
                // Reset UT selection and options before loading new ones
                this.undertaking_one = '';
                this.undertakingOptions = [];

                M.toast({ html: `Fetching Undertaking Units for ${newBu}...` });

                const utList = await getUndertakingUnits(newBu);

                if (utList.length > 0) {
                    // Assuming the API returns an array of strings like: ["ABORU", "ABULE-ODU", ...]
                    this.undertakingOptions = utList;
                    M.toast({ html: 'Undertaking Units loaded successfully!', classes: 'green' });

                    // You may need to re-initialize the Materialize Select after options change
                    this.$nextTick(() => {
                        window.M.FormSelect.init(document.querySelectorAll('select'));
                    });
                } else {
                    M.toast({ html: 'No Undertaking Units found for this BU.', classes: 'orange' });
                }
            } else {
                // If BU is reset, clear UT options
                this.undertakingOptions = [];
                this.undertaking_one = '';
            }
        },


        fault_category(newCategoryName) {
            if (newCategoryName) {
                // Find the corresponding object in the full list
                const selectedCategory = this.rawFaultCategories.find(
                    cat => cat.name === newCategoryName
                );

                // Save the ID!
                this.selectedFaultCategoryId = selectedCategory ? selectedCategory.id : null;

                console.log(`Selected Fault Category ID: ${this.selectedFaultCategoryId}`);
            } else {
                this.selectedFaultCategoryId = null;
            }
        },
    },

    methods: {

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
        },

        async fetchFaultCategories() {
            // M.toast({ html: `Fetching Fault Categories...` });
            this.hidePreLoader = false;

            const categories = await getFaultCategories();

            if (categories.length > 0) {
                // Store the full objects for ID lookup later
                this.rawFaultCategories = categories;

                // Extract only the 'name' strings for the CustomSelect options
                this.faultCategoryOptions = categories.map(category => category.name);

                this.$nextTick(() => {
                    window.M.FormSelect.init(document.querySelectorAll('select'));
                });
                this.hidePreLoader = true;
            } else {
                M.toast({ html: 'No Fault Categories found.', classes: 'orange' });
                this.hidePreLoader = true;
            }
        },

        async fetchWorkOrderDetails() {
            this.hidePreLoader = false;
            // 1. Get the ID from the URL query
            const workOrderId = this.$route.query.id;

            if (!workOrderId) {
                M.toast({ html: `<b class="red-text">Error: Work Order ID not found in URL.</b>` });
                this.hidePreLoader = true;
                return;
            }

            // 2. Call the new API function
            const details = await getFaultTicketDetailsById(workOrderId);

            if (details) {
                // The API for getById usually returns a single object, 
                // but your template uses v-for="value in work_order".
                // We wrap the single object in an array for compatibility with the template.
                this.work_order = details;
                this.work_order_id = details.workOrder;
                this.work_order_current_bu = details.currentBu;
                this.fault_id = details.id;
                let requisition_data = details.requisitionData
                this.initializeRequisitionData(requisition_data);
                this.hidePreLoader = true;
            } else {
                this.work_order = [];
                this.hidePreLoader = true;
                M.toast({ html: `<b class="red-text">Error: Could not fetch Work Order details.</b>` });
            }
        },

        // async fetchMaterials(bu) {
        //     this.hidePreLoader = false;
        //     const data = await getMaterialsByBU(bu);
        //     this.materialList = data;
        //     // Format the display for the dropdown: "Description (Stock: Qty)"
        //     this.items = data.map(m => `${m.description} (Stock: ${m.quantity})`);
        //     this.hidePreLoader = true;
        // },

        openSearch() {
            this.isSearching = true;
            this.searchResults = [];
            this.searchQuery = '';
        },

        closeSearch() {
            this.isSearching = false;
            this.selectedSearchResult = null;
            this.quantity = '';
        },

        async searchForItems() {
            if (!this.searchQuery) return;

            this.hidePreLoader = false;
            // Get current BU from your work_order data
            // const bu = this.work_order[0]?.currentBu || 'ABULE-EGBA'; 
            const bu = this.work_order_current_bu;

            const data = await getMaterialsByBU(bu, this.searchQuery);
            this.searchResults = data;
            this.hidePreLoader = true;

            if (data.length === 0) {
                M.toast({ html: "No materials found", classes: "orange" });
            }
        },

        selectFromSearch(item) {
            this.selectedSearchResult = item;
            this.quantity = ''; // Reset quantity for new selection
        },

        addItem() {
            const item = this.selectedSearchResult;
            const reqQty = parseInt(this.quantity);

            if (!item || !reqQty) {
                M.toast({ html: "Please enter a valid quantity", classes: "orange" });
                return;
            }

            // Validation: Check against stock
            if (reqQty > item.quantity) {
                M.toast({ html: `Error: Only ${item.quantity} available in stock!`, classes: "red" });
                return;
            }

            // Validation: Prevent duplicates
            if (this.selectedList.some(m => m.item === item.item)) {
                M.toast({ html: "This item is already in your requisition list", classes: "orange" });
                return;
            }

            // Add to the list
            this.selectedList.push({
                item: item.item,
                description: item.description,
                quantity: reqQty,
                quantityInStock: item.quantity,
                store: item.store
            });

            M.toast({ html: "Added to list!", classes: "green" });

            // Clear selection but keep search open for more items
            this.selectedSearchResult = null;
            this.quantity = '';
        },

        removeItem(index) {
            this.selectedList.splice(index, 1);
            M.toast({ html: "Item removed", classes: "orange" });
        },

        reassign() {
            this.hideworkOrderDetails = true
            this.hidereasignWorkOrder = false
        },

        noWorkTools() {
            this.hideworkToolsModal = true
            this.hideNoworkToolsForm = false

        },

        async yesWorkTools() {
            this.hidePreLoader = false;
            const initiate = await materialRequiredSignal(this.fault_id)
            M.toast({ html: '<b class"black-text">Please wait...</b>', classes: 'black' });
            if (initiate.materialRequired === 'Y') {
                M.toast({ html: 'Material Requisition is initiated for this Work Order.', classes: 'orange' });
                this.hideworkToolsModal = true
                this.hideYesworkToolsForm = false
                this.hidePreLoader = true;
            } else {
                M.toast({ html: 'There was an error initiating Material Requisition.', classes: 'red' });
                this.hideworkToolsModal = false
                this.hideYesworkToolsForm = true
                this.hidePreLoader = true;
            }


        },

        async saveReassign(id, techLead) {
            this.hidePreLoader = false;
            // 1. Validate inputs
            if (!this.business_unit || !this.undertaking_one || this.business_unit === 'Select BU' || this.undertaking_one === 'Select UT') {
                M.toast({ html: 'Please select **BU**, **UT**, and **Technical Lead**.', classes: 'red' });
                this.hidePreLoader = true;
                return;
            }

            // const faultId = this.getCurrentFaultId();

            if (!id) {
                M.toast({ html: 'Cannot reassign: Work Order ID is missing.', classes: 'red' });
                this.hidePreLoader = true;
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
                this.hidePreLoader = true;

            } else {
                // On Failure (API returned an error or the status wasn't 'SUCCESS')
                M.toast({ html: 'Reassignment failed. Please check your network.', classes: 'red' });
                this.hidePreLoader = true;

            }
        },

        doYouNeedWorkTools() {
            this.hideworkToolsModal = false
            this.hideworkOrderDetails = true
        },

        acceptMaterial() {
            this.hideworkOrderDetails = true
            this.hideAcceptMaterialModal = false
        },

        completeWork() {
            this.hideworkOrderDetails = true
            this.hideWorkCompleteForm = false
        },

        async yesWorkMaterialReceived() {
            this.hidePreLoader = false;
            let result = await acceptMaterial(this.fault_id)
            if (result.statusMsg === 'Success') {
                M.toast({ html: 'Material Accepted Successfully!', classes: 'green' });
                this.hideworkOrderDetails = true
                this.hideAcceptMaterialModal = true
                this.hideWorkCompleteForm = false
                this.hidePreLoader = true;
            } else {
                M.toast({ html: 'There was an error accepting the material.', classes: 'red' });
                this.hidePreLoader = true;
            }
        },

        noWorkMaterialsNotReceived() {
            this.hideworkOrderDetails = false
            this.hideAcceptMaterialModal = true
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




        async imagePickerForMaterial_1() {
            console.log('this is the workorderid:', this.work_order_id);

            this.work_order_id = this.work_order_id.trim()
            if (this.work_order_id) {
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



                this.doSomethingWithFilesimagePickerForMaterial_1(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMaterial_1(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;


            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-mat1');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.mat1 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.mat1)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.work_order_id, 'Material_1', this.mat1)
                console.log(xx)
                // if (this.random_id != '') {
                //     this.account_number = ''
                // }





            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForMaterial_2() {

            this.work_order_id = this.work_order_id.trim()
            if (this.work_order_id) {
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



                this.doSomethingWithFilesimagePickerForMaterial_2(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMaterial_2(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;


            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-mat2');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.mat2 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.mat2)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.work_order_id, 'Material_2', this.mat2)
                console.log(xx)
                // if (this.random_id != '') {
                //     this.account_number = ''
                // }





            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForMaterial_3() {

            this.work_order_id = this.work_order_id.trim()
            if (this.work_order_id) {
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



                this.doSomethingWithFilesimagePickerForMaterial_3(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMaterial_3(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;


            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-mat3');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.mat3 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.mat3)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.work_order_id, 'Material_3', this.mat3)
                console.log(xx)
                // if (this.random_id != '') {
                //     this.account_number = ''
                // }





            } catch (error) {
                // // console.log(error);
            }

        },




        async imagePickerForMaterial_4() {

            this.work_order_id = this.work_order_id.trim()
            if (this.work_order_id) {
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



                this.doSomethingWithFilesimagePickerForMaterial_4(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMaterial_4(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;


            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-mat4');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.mat4 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.mat4)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.work_order_id, 'Material_4', this.mat4)
                console.log(xx)
                // if (this.random_id != '') {
                //     this.account_number = ''
                // }





            } catch (error) {
                // // console.log(error);
            }

        },




        async imagePickerForMaterial_1_YES() {
            console.log('this is the workorderid:', this.work_order_id);

            this.work_order_id = this.work_order_id.trim()
            if (this.work_order_id) {
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



                this.doSomethingWithFilesimagePickerForMaterial_1_YES(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMaterial_1_YES(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;


            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                console.log('checking to see if the id is called');
                const output = document.getElementById('output-pic-of-mat1-yes');
                console.log('here is the output', output);

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.mat1 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.mat1)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.work_order_id, 'Material_1', this.mat1)
                console.log(xx)
                // if (this.random_id != '') {
                //     this.account_number = ''
                // }





            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForMaterial_2_YES() {

            this.work_order_id = this.work_order_id.trim()
            if (this.work_order_id) {
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



                this.doSomethingWithFilesimagePickerForMaterial_2_YES(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMaterial_2_YES(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;


            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-mat2-yes');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.mat2 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.mat2)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.work_order_id, 'Material_2', this.mat2)
                console.log(xx)
                // if (this.random_id != '') {
                //     this.account_number = ''
                // }





            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForMaterial_3_YES() {

            this.work_order_id = this.work_order_id.trim()
            if (this.work_order_id) {
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



                this.doSomethingWithFilesimagePickerForMaterial_3_YES(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMaterial_3_YES(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;


            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-mat3-yes');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.mat3 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.mat3)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.work_order_id, 'Material_3', this.mat3)
                console.log(xx)
                // if (this.random_id != '') {
                //     this.account_number = ''
                // }





            } catch (error) {
                // // console.log(error);
            }

        },




        async imagePickerForMaterial_4_YES() {

            this.work_order_id = this.work_order_id.trim()
            if (this.work_order_id) {
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



                this.doSomethingWithFilesimagePickerForMaterial_4_YES(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMaterial_4_YES(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;


            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-mat4-yes');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.mat4 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.mat4)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.work_order_id, 'Material_4', this.mat4)
                console.log(xx)
                // if (this.random_id != '') {
                //     this.account_number = ''
                // }





            } catch (error) {
                // // console.log(error);
            }

        },




        async imagePickerForMaterial_1_complete() {
            console.log('this is the workorderid:', this.work_order_id);

            this.work_order_id = this.work_order_id.trim()
            if (this.work_order_id) {
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



                this.doSomethingWithFilesimagePickerForMaterial_1_complete(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMaterial_1_complete(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;


            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                console.log('checking to see if the id is called');
                const output = document.getElementById('output-pic-of-mat1-complete');
                console.log('here is the output', output);

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.mat1 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.mat1)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.work_order_id, 'Material_1', this.mat1)
                console.log(xx)
                // if (this.random_id != '') {
                //     this.account_number = ''
                // }





            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForMaterial_2_complete() {

            this.work_order_id = this.work_order_id.trim()
            if (this.work_order_id) {
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



                this.doSomethingWithFilesimagePickerForMaterial_2_complete(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMaterial_2_complete(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;


            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-mat2-complete');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.mat2 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.mat2)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.work_order_id, 'Material_2', this.mat2)
                console.log(xx)
                // if (this.random_id != '') {
                //     this.account_number = ''
                // }





            } catch (error) {
                // // console.log(error);
            }

        },



        async imagePickerForMaterial_3_complete() {

            this.work_order_id = this.work_order_id.trim()
            if (this.work_order_id) {
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



                this.doSomethingWithFilesimagePickerForMaterial_3_complete(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMaterial_3_complete(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;


            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-mat3-complete');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.mat3 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.mat3)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.work_order_id, 'Material_3', this.mat3)
                console.log(xx)
                // if (this.random_id != '') {
                //     this.account_number = ''
                // }





            } catch (error) {
                // // console.log(error);
            }

        },




        async imagePickerForMaterial_4_complete() {

            this.work_order_id = this.work_order_id.trim()
            if (this.work_order_id) {
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



                this.doSomethingWithFilesimagePickerForMaterial_4_complete(blob)
            }


        },


        async doSomethingWithFilesimagePickerForMaterial_4_complete(event) {
            let imageFileName = this.generateRandomString()

            const imageFile = event;


            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2,
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-mat4-complete');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // console.log(`${compressedFile.size / 50 / 50} MB`)

                this.mat4 = new File([compressedFile], imageFileName + `${compressedFile.type.replace('image/', '.')}`)
                console.log(this.mat4)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }

                // console.log('account number ', this.account_number)
                // console.log('pic_of_cwd ', this.pic_of_cwd)
                // hello()
                var xx = await uploadImage(this.work_order_id, 'Material_4', this.mat4)
                console.log(xx)
                // if (this.random_id != '') {
                //     this.account_number = ''
                // }





            } catch (error) {
                // // console.log(error);
            }

        },


        // get longitude and latitude
        async printCurrentPosition() {
            const { long, lat } = await getCurrentPosition();

            this.long = long
            this.lat = lat

            this.location = `${this.long}, ${this.lat}`
        },

        async submitNoMeterialNeededForm() {
            this.hidePreLoader = false;


            try {

                this.disabled_bool = true
                let userID = localStorage.getItem('userId')

                console.log(this.fault_id);
                console.log(this.location);
                console.log(this.work_order_id);
                console.log(userID);
                // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/energyTheft', {
                const rawResponse = await fetch('https://api.ikejaelectric.com/technicalwfrestapi/prod/v1/api/v1/nomaterialrequired', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.token,
                        'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6',

                    },
                    body: JSON.stringify({
                        faultId: this.fault_id,
                        location: this.location,
                        workOrderId: this.work_order_id,
                        userId: userID,
                        picMaterial1: this.mat1.name,
                        picMaterial2: this.mat2.name,
                        picMaterial3: this.mat3.name,
                        picMaterial4: this.mat4.name,
                        comment: 'Done...'
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
                    this.hidePreLoader = true;
                } else {
                    M.toast({ html: `<b class="green-text">${response.message}</b>` })
                    this.disabled_bool = false
                    this.hidePreLoader = true;
                }
            } catch (error) {
                console.log(error)
                M.toast({ html: `<b class="red-text">${error}</b>` })
                this.disabled_bool = false
                this.hidePreLoader = true;
            }



        },



        async submitNoMeterialRequisitionForm() {
            this.hidePreLoader = false;


            try {

                this.disabled_bool = true
                let userID = localStorage.getItem('userId')

                console.log(this.selectedList);
                console.log(this.fault_id);
                console.log(this.location);
                console.log(this.work_order_id);
                console.log(userID);
                // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/energyTheft', {
                const rawResponse = await fetch('https://api.ikejaelectric.com/technicalwfrestapi/prod/v1/api/v1/materialrequisition', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.token,
                        'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6',

                    },
                    body: JSON.stringify({
                        faultId: this.fault_id,
                        location: this.location,
                        workOrderId: this.work_order_id,
                        userId: userID,
                        stockData: this.selectedList,
                        picMaterial1: this.mat1.name,
                        picMaterial2: this.mat2.name,
                        picMaterial3: this.mat3.name,
                        picMaterial4: this.mat4.name,
                        comment: 'Done...'
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
                    this.hidePreLoader = true;
                } else {
                    M.toast({ html: `<b class="green-text">${response.message}</b>` })
                    this.disabled_bool = false
                    this.hidePreLoader = true;
                }
            } catch (error) {
                console.log(error)
                M.toast({ html: `<b class="red-text">${error}</b>` })
                this.disabled_bool = false
                this.hidePreLoader = true;
            }



        },






        // 1. Logic to prepare data on mount or after API fetch
        initializeRequisitionData(dataFromApi) {
            this.requisitionData = dataFromApi.map(item => ({
                ...item,
                quantityUsed: '' // Pre-fill with empty string to enable reactivity
            }));
        },

        // 2. Real-time check as user types
        validateSingleRow(mat) {
            if (mat.quantityUsed !== '' && mat.quantityUsed !== null) {
                mat.quantityUsed = Number(mat.quantityUsed);
            }

            if (Number(mat.quantityUsed) < 0) {
                mat.quantityUsed = 0;
                M.toast({ html: 'Quantity cannot be negative', classes: 'orange' });
            }

            // 2. Prevent exceeding the limit (your existing logic)
            if (Number(mat.quantityUsed) > Number(mat.quantity)) {
                M.toast({ html: `Cannot exceed ${mat.quantity}`, classes: 'red' });
            }
        },

        // Stub for your existing image logic
        handleImagePicker(n) {
            // call your imagePickerForMaterial_X_complete() methods here
            console.log("Opening Camera for Material", n);
        },

        async submitWorkCompleteForm() {

            // Step A: Check Materials
            for (let mat of this.requisitionData) {
                const used = Number(mat.quantityUsed || 0);
                const limit = Number(mat.quantity);

                if (used > limit) {
                    M.toast({ html: `FAILED: Usage for ${mat.description} exceeds limit!`, classes: 'red' });
                    return; // Stop the form from submitting
                }

                // Hard block for negative values
                if (used < 0) {
                    M.toast({ html: `Invalid quantity for ${mat.description}`, classes: 'red' });
                    return;
                }

                if (mat.quantityUsed === '') {
                    M.toast({ html: `Please enter quantity for ${mat.description}`, classes: 'orange' });
                    return;
                }
            }

            // Step B: Check Text Fields
            if (!this.further_remarks) {
                M.toast({ html: 'Please fill in Work Done', classes: 'orange' });
                return;
            }
            // if (!this.further_remarks || !this.sla_comments) {
            //     M.toast({ html: 'Please fill in remarks and SLA comments', classes: 'orange' });
            //     return;
            // }

            // Step C: Prepare stockData Payload
            const stockData = this.requisitionData.map(mat => ({
                id: mat.id.toString(),
                item: mat.item,
                quantityUsed: Number(mat.quantityUsed)
            }));







            this.hidePreLoader = false;

            try {

                this.disabled_bool = true
                let userID = localStorage.getItem('userId')

                console.log(this.fault_id);
                console.log(this.location);
                console.log(this.work_order_id);
                console.log(userID);
                // const rawResponse = await fetch('https://api.ikejaelectric.com/cwfrestapi/test/v1/api/v1/energyTheft', {
                const rawResponse = await fetch('https://api.ikejaelectric.com/technicalwfrestapi/prod/v1/api/v1/workdoneCapture', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + localStorage.token,
                        'Auth': 'Bearer c49cf8b4-56bf-3bc6-bd6f-d2ae876cc2e6',

                    },
                    body: JSON.stringify({
                        faultId: this.fault_id,
                        location: this.location,
                        workOrderId: this.work_order_id,
                        userId: userID,
                        stockData: stockData,
                        picMaterial1: this.mat1.name,
                        picMaterial2: this.mat2.name,
                        picMaterial3: this.mat3.name,
                        picMaterial4: this.mat4.name,
                        comment: this.further_remarks,
                        slaComment: this.sla_comments,
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
                    this.hidePreLoader = true;
                } else {
                    M.toast({ html: `<b class="green-text">${response.message}</b>` })
                    this.disabled_bool = false
                    this.hidePreLoader = true;
                }
            } catch (error) {
                console.log(error)
                M.toast({ html: `<b class="red-text">${error}</b>` })
                this.disabled_bool = false
                this.hidePreLoader = true;
            }



        },

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

    },

    mounted() {
        // Initialize MaterializeCSS Select
        // 3. Call the fetch function when the component is mounted
        this.fetchWorkOrderDetails();
        this.checkDevice();

        // Initialize MaterializeCSS Select
        const elems = document.querySelectorAll("select");
        window.M.FormSelect.init(elems);
        M.FormSelect.init(document.querySelectorAll('select'));

        localStorage.setItem('service_type', '')
        localStorage.setItem('meter_number', '')

        // this.fetchFaultCategories();
        this.printCurrentPosition();
        // this.fetchMaterials(this.work_order_current_bu);

        // Check initial status
        this.isOnline = navigator.onLine;

        // Listen for changes
        window.addEventListener('online', () => { this.isOnline = true; });
        window.addEventListener('offline', () => { this.isOnline = false; });

        // Get connection type if supported (Chrome/Android)
        if (navigator.connection) {
            this.connectionType = navigator.connection.effectiveType; // returns '4g', '3g', etc.
        }
    },

    created() {

        // this.getFullname()
    }
}
</script>


<style scoped>
/* Ensure inputs don't disappear on smaller mobile screens */
input[type=number] {
    border-bottom: 1px solid #9e9e9e !important;
}

input[type=number]:focus {
    border-bottom: 1px solid #d32f2f !important;
    box-shadow: 0 1px 0 0 #d32f2f !important;
}

.collection-item {
    background-color: #fff !important;
}

.safe-area-bottom {
    padding-bottom: env(safe-area-inset-bottom);
}

/* === Red Material Select Customization === */
.custom-select {
    /* border: 1px solid #f44336 !important; */
    border-radius: 6px;
    background-color: #fff;
    color: #000;
    padding: 8px;
    font-size: 12px;
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

/* Ensure the row containing the dropdown has a higher stacking order */
.on-top {
    position: relative;
    z-index: 10;
}
</style>

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
</style>