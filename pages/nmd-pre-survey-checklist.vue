<template>
    <div style="padding-top: 20px;" class="container">
        <div class="row">
            <nuxt-link to="./forms" class="red white-text btn">
                Back
            </nuxt-link>
        </div>
        <div class="row">
            <div>
                <h6 class="red-text center" style="font-weight: 100">
                    NMD Pre survey checklist
                </h6>
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

                    <div class="row">
                        <!-- business unit -->
                        <div class="col s12">
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
                        <!-- Building owner name-->
                        <div class="col s12">
                            <input type="text" placeholder="Building owner name" v-model="building_owner_name">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Customer name -->
                        <div class="col s12">
                            <input type="text" placeholder="Customer name" v-model="customer_name">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Account number -->
                        <div class="col s12">
                            <input type="text" placeholder="Account number" v-model="account_number">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Customer phone number -->
                        <div class="col s12">
                            <input type="text" placeholder="Customer phone number" v-model="phone_number">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Address -->
                        <div class="col s12">
                            <input type="text" placeholder="Address" v-model="address">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Customer type -->
                        <div class="col s12">
                            <select class="custom-select" v-model="customer_type">
                                <option value="" disabled selected>Customer type</option>
                                <option value="Commercial">Commercial</option>
                                <option value="Industrial">Industrial</option>
                                <option value="Residential">Residential</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Feeder name -->
                        <div class="col s12">
                            <input type="text" placeholder="Feeder name" v-model="feeder_name">
                        </div>
                    </div>

                    <div class="row">
                        <!-- DT name -->
                        <div class="col s12">
                            <input type="text" placeholder="DT name" v-model="dt_name">
                        </div>
                    </div>

                    <div class="row">
                        <!-- DT capacity (KVA) -->
                        <div class="col s12">
                            <input type="text" placeholder="DT capacity (KVA)" v-model="dt_capacity">
                        </div>
                    </div>

                    <div class="row">
                        <!-- GPS longitude -->
                        <div class="col s12">
                            <input type="text" placeholder="GPS longitude" v-model="gps_long" disabled>
                        </div>
                    </div>

                    <div class="row">
                        <!-- GPS latitude -->
                        <div class="col s12">
                            <input type="text" placeholder="GPS latitude" v-model="gps_lat" disabled>
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Current tarrif -->
                        <div class="col s12">
                            <select class="custom-select" v-model="current_tariff">
                                <option value="" disabled selected>Current tarrif</option>
                                <option value="A1SP">A1SP</option>
                                <option value="A1TP">A1TP</option>
                                <option value="C1SP">C1SP</option>
                                <option value="C1TP">C1TP</option>
                                <option value="R1">R1</option>
                                <option value="R2SP">R2SP</option>
                                <option value="A1SP">A1SP</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Recommended tarrif -->
                        <div class="col s12">
                            <select class="custom-select" v-model="recommended_tariff">
                                <option value="" disabled selected>Recommended tarrif</option>
                                <option value="A1SP">A1SP</option>
                                <option value="A1TP">A1TP</option>
                                <option value="C1SP">C1SP</option>
                                <option value="C1TP">C1TP</option>
                                <option value="R1">R1</option>
                                <option value="R2SP">R2SP</option>
                                <option value="A1SP">A1SP</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Meter type required -->
                        <div class="col s12">
                            <select class="custom-select" v-model="meter_type_required">
                                <option value="" disabled selected>Meter type required</option>
                                <option value="1ph">1ph</option>
                                <option value="3ph">3ph</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Condition of service -->
                        <div class="col s12">
                            <select class="custom-select" v-model="condition_of_service_wire">
                                <option value="" disabled selected>Condition of service</option>
                                <option value="Good">Good</option>
                                <option value="Fair">Fair</option>
                                <option value="bad/Needs replacement">bad/Needs replacement</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Cable distance (m) -->
                        <div class="col s12">
                            <input type="text" placeholder="Cable distance (m)" v-model="cable_distance">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Cable size (m2) -->
                        <div class="col s12">
                            <input type="text" placeholder="Cable size (m2)" v-model="cable_size">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Responsible party for wire replacement -->
                        <div class="col s12">
                            <select class="custom-select" v-model="responsible_party_for_wire_placement">
                                <option value="" disabled selected>Responsible party for wire replacement</option>
                                <option value="Ikeja Electric">Ikeja Electric</option>
                                <option value="Customer">Customer</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Number of service wires -->
                        <div class="col s12">
                            <select class="custom-select" v-model="no_of_service_wires">
                                <option value="" disabled selected>Number of service wires</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Service wire traceable to merting point-->
                        <div class="col s12">
                            <h6 class="red-text">
                                Service wire traceable to metering point
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="service_wire_traceable_to_metering_point">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Metering point wire distribution -->
                        <div class="col s12">
                            <select class="custom-select" v-model="meter_point_wire_distribution">
                                <option value="" disabled selected>Metering point wire distribution</option>
                                <option value="Tidy">Tidy</option>
                                <option value="Untidy">Untidy</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Space for installation -->
                        <div class="col s12">
                            <select class="custom-select" v-model="space_for_installation">
                                <option value="" disabled selected>Space for installation</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Recommendation -->
                        <div class="col s12">
                            <input type="text" placeholder="Recommendation" v-model="recommendation">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Type of existing metering -->
                        <div class="col s12">
                            <select class="custom-select" v-model="type_of_existing_meter">
                                <option value="" disabled selected>Type of existing metering</option>
                                <option value="Analogue">Analogue</option>
                                <option value="PPM">PPM</option>
                                <option value="N/A">N/A</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Reason for replacement -->
                        <div class="col s12">
                            <input type="text" placeholder="Reason for replacement " v-model="reason_for_replacement">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Correction required by customer -->
                        <div class="col s12">
                            <input type="text" placeholder="Correction required by customer" v-model="correction_required_by_customer">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Load rating -->
                        <div class="col s12">
                            <input type="text" placeholder="Load rating (A)" v-model="load_rating_a" >
                        </div>
                    </div>

                    <div class="row">
                        <!-- Load rating (KW) * -->
                        <div class="col s12">
                            <input type="text" placeholder="Load rating (KW)" v-model="load_rating_kw" >
                        </div>
                    </div>

                    <div class="row">
                        <!-- Justification for load rating * -->
                        <div class="col s12">
                            <input type="text" placeholder="Justification for load rating" v-model="justification_for_load_rating" >
                        </div>
                    </div>

                    <div class="row">
                        <!-- Further remarks * -->
                        <div class="col s12">
                            <input type="text" placeholder="Further remarks" v-model="further_remarks" >
                        </div>
                    </div>




                    <div class="row">
                        <!--Picture of premises * -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of premises</h6>
                            <button class="btn red btn-large" @click="imagePickerForPremises()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for premises -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-premises" />
                        </div>
                    </div>




                    <div class="row">
                        <!--Picture of premises2 -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of premises2</h6>
                            <button class="btn red btn-large" @click="imagePickerForPremises2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for premises -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-premises2" />
                        </div>
                    </div>





                    <div class="row">
                        <!--Picture of premises3 -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of premises3</h6>
                            <button class="btn red btn-large" @click="imagePickerForPremises3()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for premises -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-premises3" />
                        </div>
                    </div>
                    <br>





                    <div class="row">
                        <!--Picture of proposed meter location * -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of proposed meter location</h6>
                            <button class="btn red btn-large" @click="imagePickerForProposedMeterLocation()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for proposed meter location -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-proposed-meter-location" />
                        </div>
                    </div>
                    <br>





                    <div class="row">
                        <!--Picture of proposed meter location 2 -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of proposed meter location 2</h6>
                            <button class="btn red btn-large" @click="imagePickerForProposedMeterLocation2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for proposed meter location -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-proposed-meter-location2" />
                        </div>
                    </div>
                    <br>




                    


                    <div class="row center">
                        <!-- Modal Trigger -->
                        <a class="waves-effect waves-light btn white red-text center" @click="showSignatureModule()">Click here to add signature</a>
                    </div>
                    <!-- signature image  -->
                    <div class="container">
                        <br/>
                        <div class="row">
                            <div class="col s12">
                                <img id="sig-image" src="" alt=""/>
                            </div>
                        </div>
                    </div>


                    <!-- Load assement section -->
                    <div class="row center">
                        <h5 class="red-text"> - Load Assesment - </h5>
                    </div>

                    <div class="row">
                        <!-- Lighting Points  Number/Wattage -->
                        <div class="col s12">
                            <input type="text" placeholder="Lighting Points Number/Wattage" v-model="lighting_points_number" >
                        </div>
                    </div>
                    <div class="row">
                        <!--  Ceiling fans Number/Wattage -->
                        <div class="col s12">
                            <input type="text" placeholder="Ceiling fans Number/Wattage" v-model="ceiling_fan_number" >
                        </div>
                    </div>
                    <div class="row">
                        <!--  5 Amps socket Number/Wattage -->
                        <div class="col s12">
                            <input type="text" placeholder="5 Amps socket Number/Wattage" v-model="five_amp_socket_number" >
                        </div>
                    </div>
                    <div class="row">
                        <!--  13 Amps socket Number/Wattage -->
                        <div class="col s12">
                            <input type="text" placeholder="13 Amps socket Number/Wattage" v-model="thirteen_apm_socket_number" >
                        </div>
                    </div>
                    <div class="row">
                        <!--  15 Amps socket Number/Wattage -->
                        <div class="col s12">
                            <input type="text" placeholder="15 Amps socket Number/Wattage" v-model="fifteen_amp_socket_number" >
                        </div>
                    </div>
                    <div class="row">
                        <!--  Cooker Number/Wattage -->
                        <div class="col s12">
                            <input type="text" placeholder="Cooker Number/Wattage" v-model="cooker_number" >
                        </div>
                    </div>
                    <div class="row">
                        <!--  Water heater Number/Wattage -->
                        <div class="col s12">
                            <input type="text" placeholder="Water heater Number/Wattage" v-model="water_heater_number" >
                        </div>
                    </div>
                    <div class="row">
                        <!--  Air condition Number/Wattage -->
                        <div class="col s12">
                            <input type="text" placeholder="Air condition Number/Wattage" v-model="air_condition_number" >
                        </div>
                    </div>
                    <div class="row">
                        <!--  Freezer Number/Wattage -->
                        <div class="col s12">
                            <input type="text" placeholder="Freezer Number/Wattage" v-model="freezer_number" >
                        </div>
                    </div>
                    <div class="row">
                        <!--  Pumping machine Number/Wattage -->
                        <div class="col s12">
                            <input type="text" placeholder="Pumping machine Number/Wattage" v-model="pumping_machine_number" >
                        </div>
                    </div>
                    <div class="row">
                        <!--  Micro wake Number/Wattage -->
                        <div class="col s12">
                            <input type="text" placeholder="Micro wave Number/Wattage" v-model="micro_wave_number" >
                        </div>
                    </div>
                    <div class="row">
                        <!--  Other item Number/Wattage -->
                        <div class="col s12">
                            <input type="text" placeholder="Other item Number/Wattage" v-model="other_item" >
                        </div>
                    </div>
                    <br>
                    <br>

                    <div class="row">
                        <!-- Total installed load  -->
                        <div class="col s12">
                            <input type="text" placeholder="Total installed load" v-model="total_installed_load" >
                        </div>
                    </div>


                    <div class="row">
                        <PreLoader :class="{'hide': hideLoader}" class="center" />
                    </div>
                    







                    <div class="row center">
                        <div class="col s12">
                            <button class="btn btn-large red" style="width: 300px; margin-top: 20px; margin-bottom: 20px;" @click="sumbitVSM">Submit</button>
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
  export default {
      layout: 'admin_main',
    //   components: {
    //     VPerfectSignature,
    //   },
      data() {
        return {
            business_unit: '',
            undertaking_one: '',
            building_owner_name: '',
            customer_name: '',
            account_number: '',
            phone_number: '',
            address: '',
            customer_type: '',
            feeder_name: '',
            dt_name: '',
            dt_capacity: '',
            gps_long: '',
            gps_lat: '',
            current_tariff: '',
            recommended_tariff: '',
            meter_type_required: '',
            condition_of_service_wire: '',
            cable_distance: '',
            cable_size: '',
            responsible_party_for_wire_placement: '',
            no_of_service_wires: '',
            service_wire_traceable_to_metering_point: false,
            meter_point_wire_distribution: '',
            space_for_installation: '',
            recommendation: '',
            type_of_existing_meter: '',
            reason_for_replacement: '',
            correction_required_by_customer: '',
            load_rating_a: '',
            load_rating_kw: '',
            justification_for_load_rating: '',
            further_remarks: '',
            pic_of_premises: null,
            pic_of_premises2: '',
            pic_of_premises3: '',
            pic_of_proposed_meter_location: null,
            pic_of_proposed_meter_location2: '',
            signature: '',
            lat: '',
            long: '',

            lighting_points_number: '',
            ceiling_fan_number: '',
            five_amp_socket_number: '',
            thirteen_apm_socket_number: '',
            fifteen_amp_socket_number: '',
            cooker_number: '',
            water_heater_number: '',
            air_condition_number: '',
            freezer_number: '',
            pumping_machine_number: '',
            micro_wave_number: '',
            other_item: '',
            total_installed_load: '',

            current_date: '',

            dataURL: '',
            hideLoader: true,

            hideModal: true,
            hideForm: false,

        }
      },

      methods: {

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
            var dataURI = localStorage.getItem('vsmSignatureURL')
            if (dataURI == null) {
                dataURI = ''
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

       

        // picture of premises
        async imagePickerForPremises() {
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
            this.handleImageUploadForPremises(blob)
        },
 
        async handleImageUploadForPremises(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-premises');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_premises = new File([compressedFile], `pictureOfPremises${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)

            } catch (error) {
                console.log(error);
            }

        },



        



        // picture of premises 2
        async imagePickerForPremises2() {
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
            this.handleImageUploadForPremises2(blob)
        },
 
        async handleImageUploadForPremises2(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-premises2');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_premises2 = new File([compressedFile], `pictureOfPremises2${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)

            } catch (error) {
                console.log(error);
            }

        },








        // picture of premises 3
        async imagePickerForPremises3() {
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
            this.handleImageUploadForPremises3(blob)
        },
 
        async handleImageUploadForPremises3(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-premises3');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_premises3 = new File([compressedFile], `pictureOfPremises3${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)

            } catch (error) {
                console.log(error);
            }

        },










        // picture of proposed meter location
        async imagePickerForProposedMeterLocation() {
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
            this.handleImageUploadForProposedMeterLocation(blob)
        },
 
        async handleImageUploadForProposedMeterLocation(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-proposed-meter-location');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_proposed_meter_location = new File([compressedFile], `pictureOfProposedMeterLocation${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)
                
            } catch (error) {
                console.log(error);
            }
        
        },







        // picture of proposed meter location
        async imagePickerForProposedMeterLocation2() {
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
            this.handleImageUploadForProposedMeterLocation2(blob)
        },
 
        async handleImageUploadForProposedMeterLocation2(event) {

            const imageFile = event;
            // const imageFile = event.target.files[0];
            console.log('originalFile instanceof Blob', imageFile instanceof Blob); // true
            console.log(`originalFile size ${imageFile.size} MB`);

            const options = {
                maxSizeMB: 0.7,
                initialQuality: 2, 
                maxWidthOrHeight: 500,
                useWebWorker: true
            }
            try {
                const output = document.getElementById('output-pic-of-proposed-meter-location2');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_proposed_meter_location2 = new File([compressedFile], `pictureOfProposedMeterLocation2${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)
                
            } catch (error) {
                console.log(error);
            }
        
        },









        async sumbitVSM() {
            this.hideLoader = false

            this.business_unit = this.business_unit.trim()
            this.undertaking_one = this.undertaking_one.trim()
            this.customer_type = this.customer_type.trim()
            this.load_rating_a = this.load_rating_a.trim()
            this.load_rating_kw = this.load_rating_kw.trim()
            this.justification_for_load_rating = this.justification_for_load_rating.trim()
            this.current_date = new Date().toJSON().slice(0, 10);
            this.getDataURLFromLocalStorage()

            if (this.business_unit == '') {
                M.toast({html: '<b class="red-text">Fill all the field marked with *</b>'})
                this.hideLoader = true
            } else {

                var checkList = ""
                checkList = {
                    gpsLongitude: this.long,
                    recommendation: this.recommendation,
                    buildingOwnerName: this.building_owner_name,
                    ceilingFansNumber: this.ceiling_fan_number, 
                    dtName: this.dt_name,
                    customerName: this.customer_name,
                    cableSize: this.cable_size,
                    meterTypeRequired: this.meter_type_required,
                    feederName: this.feeder_name,
                    loadRatingKW: this.load_rating_kw,
                    customerPhoneNumber: this.phone_number,
                    othersItem: this.other_item, 
                    fifteenAmpsSocketNumber: this.fifteen_amp_socket_number, 
                    latitude: this.lat,
                    pumpingMachine: this.pumping_machine_number,
                    justificationForLoadRating: this.justification_for_load_rating,
                    address: this.address,
                    correctionRequiredByCustomer: this.correction_required_by_customer,
                    airConditionerNumber: this.air_condition_number, 
                    accountNumber: this.account_number,
                    thirteenAmpsSocketNumber: this.thirteen_apm_socket_number, 
                    loadRatingA: this.load_rating_a,
                    furtherRemarks: this.further_remarks,
                    createdDate: this.current_date,
                    typeOfExistingMeter: this.type_of_existing_meter,
                    serviceWireToMeter: this.service_wire_traceable_to_metering_point,
                    businessUnit: this.business_unit,
                    existingMeter: this.type_of_existing_meter,
                    responsibleParty: this.responsible_party_for_wire_placement,
                    waterHeater: this.water_heater_number,
                    recommendedTariff: this.recommended_tariff,
                    customerType: this.customer_type,
                    fiveAmpsSocketNumber: this.five_amp_socket_number,
                    longitude: this.long,
                    currentTariff: this.current_tariff,
                    microwaveNumber: this.micro_wave_number,
                    editEndTime: "",
                    numberOfServiceWires: this.no_of_service_wires,
                    ieOfficersName: localStorage.getItem('fullname'),
                    lastUpdateTime: "",
                    spaceForInstallation: this.space_for_installation,
                    totalInstalledLoad: this.total_installed_load,
                    conditionOfServiceWire: this.condition_of_service_wire,
                    meterPointWireDistribution: this.meter_point_wire_distribution,
                    editStartTime: "",
                    freezerNumber: this.freezer_number,
                    cableDistance: this.cable_distance,
                    gpsLatitude: this.lat,
                    reasonForReplacement: this.reason_for_replacement,
                    lightingPointNumber: this.lighting_points_number, 
                    dtCapacity: this.dt_capacity,
                    undertaking: this.undertaking_one,
                    cookerNumber: this.cooker_number,
                    user: localStorage.getItem('fullname')
                }

                checkList = JSON.stringify(checkList)
                console.log(typeof checkList)
                
                var formData = new FormData()
                formData.append("files", this.pic_of_premises);
                formData.append("files", this.pic_of_premises2);
                formData.append("files", this.pic_of_premises3);
                formData.append("files", this.pic_of_proposed_meter_location);
                formData.append("files", this.pic_of_proposed_meter_location2);
                formData.append("files", this.signature);
                
                formData.append("checklist", checkList)
                


                const rawResponse = await fetch('https://api.ikejaelectric.com/ieforms/1.0/checklist/submit', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.token, 
                            'Auth': 'Bearer fae96b00-8ef4-3473-bfb6-c5b1107b2c2b', 
                            'form_type': 'NMDPRESURVEY',
                            'login_id': ''

                        },
                        body: formData,
                    })

                    const response = await rawResponse.json()

                    console.log(response)

                    if (response.code == '00') {
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

                }

            

        },


        // === RESIZE ====

        resizeMe(img) {
        
            var canvas = document.createElement('canvas');

            var width = img.width;
            var height = img.height;

            // calculate the width and height, constraining the proportions
            if (width > height) {
                if (width > max_width) {
                //height *= max_width / width;
                height = Math.round(height *= max_width / width);
                width = max_width;
                }
            } else {
                if (height > max_height) {
                //width *= max_height / height;
                width = Math.round(width *= max_height / height);
                height = max_height;
                }
            }
            
            // resize the canvas and draw the image data into it
            canvas.width = width;
            canvas.height = height;
            var ctx = canvas.getContext("2d");
            ctx.drawImage(img, 0, 0, width, height);
            
            preview.appendChild(canvas); // do the actual resized preview
            
            return canvas.toDataURL("image/jpeg",0.7); // get the data from canvas as 70% JPG (can be also PNG, etc.)

        },

        addOldSeal() {
            this.old_seal.push({
                oldSealValue: ''
            })
        },

        removeOldSeal(index) {
            this.old_seal.splice(index, 1)
        },

        clearOldSeal() {
            this.old_seal = [
                {
                    oldSealValue: ''
                }
        ]
        },

        addNewSeal() {
            this.new_seal.push({
                newSealValue: ''
            })
        },

        removeNewSeal(index) {
            this.new_seal.splice(index, 1)
        },

        clearNewSeal() {
            this.new_seal = [
                {
                    newSealValue: ''
                }
            ]
        },

        // get longitude and latitude
        async printCurrentPosition () {
            const coordinates = await Geolocation.getCurrentPosition();

            this.lat = coordinates.coords.latitude
            this.long = coordinates.coords.longitude
        },

        
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
            var instances = M.FormSelect.init(elems, options);
        });

        this.trySign()
      },

      created() {
        this.printCurrentPosition()
       
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