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
                    Payment Channel Management Checklist
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

                    <br>
                    <div class="row">
                        <!-- Activity -->
                        <div class="col s12">
                            <select class="custom-select" v-model="activity">
                                <option value="" disabled selected>Activity</option>
                                <option value="Monitoring">Monitoring</option>
                                <option value="Recruitment">Recruitment</option>
                                <option value="Agent Complian">Agent Complian</option>
                                <option value="N/A">N/A</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- specific activity -->
                        <div class="col s12">
                            <input type="text" placeholder="Specific activity " v-model="specific_activity">
                        </div>
                    </div>

                    <div class="row">
                        <!-- sAgent name -->
                        <div class="col s12">
                            <input type="text" placeholder="Agent name" v-model="agent_name">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Address -->
                        <div class="col s12">
                            <input type="text" placeholder="Address" v-model="address">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Phone number -->
                        <div class="col s12">
                            <input type="text" placeholder="Phone number" v-model="phone_number">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Payment channel type -->
                        <div class="col s12">
                            <select class="custom-select" v-model="payment_channel_type">
                                <option value="" disabled selected>Payment channel type</option>
                                <option value="Baxibox">Baxibox</option>
                                <option value="Afribeta">Afribeta</option>
                                <option value="IE Card/VTU">IE Card/VTU</option>
                                <option value="Etop">Etop</option>
                                <option value="ITEX">ITEX</option>
                                <option value="IFIS">IFIS</option>
                                <option value="Paga">Paga</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Others for payment channel -->
                        <div class="col s12">
                            <input type="text" placeholder="Others for payment channel" v-model="others_for_payment_channel">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Dealer name -->
                        <div class="col s12">
                            <input type="text" placeholder="Dealer name" v-model="dealer_name">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Terminal number -->
                        <div class="col s12">
                            <input type="text" placeholder="Terminal number" v-model="terminal_number">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Outlet type -->
                        <div class="col s12">
                            <select class="custom-select" v-model="outlet_type">
                                <option value="" disabled selected>Outlet type</option>
                                <option value="Shop">Shop</option>
                                <option value="Office">Office</option>
                                <option value="Outdoor">Outdoor</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Brand type -->
                        <div class="col s12">
                            <select class="custom-select" v-model="brand_type">
                                <option value="" disabled selected>Brand type</option>
                                <option value="Banner">Banner</option>
                                <option value="Umbrella">Umbrella</option>
                                <option value="Sticker">Sticker</option>
                                <option value="A-Board">A-Board</option>
                                <option value="None">None</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Payment terminal status -->
                        <div class="col s12">
                            <select class="custom-select" v-model="payment_terminal_status">
                                <option value="" disabled selected>Payment terminal status</option>
                                <option value="Functional">Functional</option>
                                <option value="Faulty">Faulty</option>
                                <option value="Not seen">Not seen</option>
                                <option value="N/A">N/A</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Printer Status -->
                        <div class="col s12">
                            <select class="custom-select" v-model="printer_status">
                                <option value="" disabled selected>Printer Status</option>
                                <option value="Functional">Functional</option>
                                <option value="Faulty">Faulty</option>
                                <option value="Not seen">Not seen</option>
                                <option value="N/A">N/A</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Brand collateral -->
                        <div class="col s12">
                            <select class="custom-select" v-model="brand_collateral">
                                <option value="" disabled selected>Brand collateral</option>
                                <option value="Adequate">Adequate</option>
                                <option value="Inadequate">Inadequate</option>
                                <option value="Not seen">Not seen</option>
                                <option value="N/A">N/A</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Distance to nearest agent -->
                        <div class="col s12">
                            <input type="text" placeholder="Distance to nearest agent" v-model="distance_to_nearest_agent">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Payment agent cluster -->
                        <div class="col s12">
                            <select class="custom-select" v-model="payment_agent_cluster">
                                <option value="" disabled selected>Payment agent cluster</option>
                                <option value="Adequate">Adequate</option>
                                <option value="Inadequate">Inadequate</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Saf behavior to customer-->
                        <div class="col s12">
                            <h6 class="red-text">
                                Satisfactory behavior to customer
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="satisfactory_behavior_to_customer">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Business Environment -->
                        <div class="col s12">
                            <select class="custom-select" v-model="business_env">
                                <option value="" disabled selected>Business Environment</option>
                                <option value="Adequate">Adequate</option>
                                <option value="Inadequate">Inadequate</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Receipt issuance to customer -->
                        <div class="col s12">
                            <select class="custom-select" v-model="receipt_issuance_to_customer">
                                <option value="" disabled selected>Receipt issuance to customer</option>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                                <option value="N/A">N/A</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Location okay-->
                        <div class="col s12">
                            <h6 class="red-text">
                                Location okay
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="location_okay">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Printer okay -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Printer okay
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="printer_okay">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Customer relation okay -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Customer relation okay
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="customer_relations_okay">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Close monitoring -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Close monitoring
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="close_monitoring">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Relocate -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Relocate
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="relocate">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Printer replacement -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Printer replacement
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="printer_replacement">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Training required -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Training required
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="training_required">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Brand collateral required -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Brand collateral required
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="brand_collateral_required">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Sanction -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Sanction
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="sanction">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- Further remarks * -->
                        <div class="col s12">
                            <input type="text" placeholder="Further remarks" v-model="further_remarks">
                        </div>
                    </div>





                    <div class="row">
                        <!--picture of outlet * -->
                        <div class="col s12">
                            <h6 class="red-text">picture of outlet</h6>
                            <button class="btn red btn-large" @click="imagePickerForOutletOne()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for outlet -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-outlet-one" />
                        </div>
                    </div>
                    <br>





                    <div class="row">
                        <!--picture of outlet 2 * -->
                        <div class="col s12">
                            <h6 class="red-text">picture of outlet 2 </h6>
                            <button class="btn red btn-large" @click="imagePickerForOutletOne2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for outlet 2 -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-outlet-one2" />
                        </div>
                    </div>
                    <br>








                    <div class="row">
                        <!--picture of payment terminal * -->
                        <div class="col s12">
                            <h6 class="red-text">picture of payment terminal</h6>
                            <button class="btn red btn-large" @click="imagePickerForPaymentTerminal()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for payment terminal -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-payment-terminal-one" />
                        </div>
                    </div>
                    <br>







                    <div class="row">
                        <!--picture of payment terminal 2 * -->
                        <div class="col s12">
                            <h6 class="red-text">picture of payment terminal 2</h6>
                            <button class="btn red btn-large" @click="imagePickerForPaymentTerminal2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for payment terminal -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-payment-terminal-one2" />
                        </div>
                    </div>
                    <br>



                    


                    <div class="row">
                        <!--Picture of brand collateral 1 * -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of brand collateral 1</h6>
                            <button class="btn red btn-large" @click="imagePickerForBrandCollateralOne()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for brand collateral 1 -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-brand-collateral-one" />
                        </div>
                    </div>
                    <br>



                    
                    <!-- <div class="row">
                        Picture of brand collateral 1 *
                        <div class="col s12">
                            <h6 class="red-text">Picture of brand collateral 2</h6>
                            <button class="btn red btn-large" @click="imagePickerForBrandCollateralOne2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    output for brand collateral 1
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-brand-collateral-one2" />
                        </div>
                    </div>
                    <br> -->






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

                    <div class="row">
                        <div class="col s12">
                            <input type="text" v-model="payment_channel_supervisor" placeholder="Payment channel supervisor">
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
            activity: '',
            specific_activity: '',
            agent_name: '',
            address: '',
            phone_number: '',
            payment_channel_type: '',
            others_for_payment_channel: '',
            dealer_name: '',
            terminal_number: '',
            outlet_type: '',
            brand_type: '',
            payment_terminal_status: '',
            printer_status: '',
            brand_collateral: '',
            distance_to_nearest_agent: '',
            payment_agent_cluster: '',
            satisfactory_behavior_to_customer: false,
            business_env: '',
            receipt_issuance_to_customer: '',
            location_okay: false,
            printer_okay: false,
            customer_relations_okay: false,
            close_monitoring: false,
            relocate: false,
            printer_replacement: false,
            training_required: false,
            brand_collateral_required: false,
            sanction: false,
            further_remarks: '',
            pic_of_outlet_one: '',
            pic_of_outlet_one2: '',
            pic_of_payment_terminal_one: '',
            pic_of_payment_terminal_one2: '',
            pic_of_brand_collateral_one: '',
            pic_of_brand_collateral_one2: '',
            payment_channel_supervisor: '',
            signature: '',
            lat: '',
            long: '',

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

            if(dataURI == null) {
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
                this.signature = new File([file], `signature${file.type.replace('image/', '.')}`)
            }
        },


        // Create Blob file from URL
        dataURItoBlob(dataURI) {
            // convert base64/URLEncoded data component to raw binary data held in a string
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = window.atob(dataURI.split(',')[1]);
            else
                byteString = window.unescape(dataURI.split(',')[1]);
            // separate out the mime component
            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
            // write the bytes of the string to a typed array
            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }
            return new Blob([ia], {type:mimeString});
        },


        

        // picture of outlet one
        async imagePickerForOutletOne() {
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
            this.doSomethingWithFilesImagePickerForOutletOne(blob)
        },



        async doSomethingWithFilesImagePickerForOutletOne(event) {

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
                const output = document.getElementById('output-pic-of-outlet-one');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_outlet_one = new File([compressedFile], `pictureOfOutlet${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)
                
            } catch (error) {
                console.log(error);
            }

        },








        // picture of outlet one 2
        async imagePickerForOutletOne2() {
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
            this.doSomethingWithFilesImagePickerForOutletOne2(blob)
        },



        async doSomethingWithFilesImagePickerForOutletOne2(event) {

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
                const output = document.getElementById('output-pic-of-outlet-one2');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_outlet_one2 = new File([compressedFile], `pictureOfOutlet2${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)
                
            } catch (error) {
                console.log(error);
            }

        },




        // picture of payment terminal one
        async imagePickerForPaymentTerminal() {
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
            this.doSomethingWithFilesImagePickerForPaymentTerminal(blob)
        },


        async doSomethingWithFilesImagePickerForPaymentTerminal(event) {

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
                const output = document.getElementById('output-pic-of-payment-terminal-one');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_payment_terminal_one = new File([compressedFile], `pictureOfPmtTerminal${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)
                
            } catch (error) {
                console.log(error);
            }

        },







        // picture of payment terminal one
        async imagePickerForPaymentTerminal2() {
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
            this.doSomethingWithFilesImagePickerForPaymentTerminal2(blob)
        },


        async doSomethingWithFilesImagePickerForPaymentTerminal2(event) {

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
                const output = document.getElementById('output-pic-of-payment-terminal-one2');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_payment_terminal_one2 = new File([compressedFile], `pictureOfPmtTerminal2${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)
                
            } catch (error) {
                console.log(error);
            }

        },




        // picture of brand collateral one
        async imagePickerForBrandCollateralOne() {
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
            this.doSomethingWithFilesImagePickerForBrandCollateralOne(blob)
        },

        async doSomethingWithFilesImagePickerForBrandCollateralOne(event) {

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
                const output = document.getElementById('output-pic-of-brand-collateral-one');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_brand_collateral_one = new File([compressedFile], `pictureOfBrandCollateral${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)
                
            } catch (error) {
                console.log(error);
            }

        },







        // picture of brand collateral one
        async imagePickerForBrandCollateralOne2() {
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
            this.doSomethingWithFilesImagePickerForBrandCollateralOne2(blob)
        },

        async doSomethingWithFilesImagePickerForBrandCollateralOne2(event) {

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
                const output = document.getElementById('output-pic-of-brand-collateral-one2');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_brand_collateral_one2 = new File([compressedFile], `pictureOfBrandCollateral2${compressedFile.type.replace('image/', '.')}`)
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
            this.activity = this.activity.trim()
            this.specific_activity = this.specific_activity.trim()
            this.getDataURLFromLocalStorage()

            if (this.business_unit == '') {
                M.toast({html: '<b class="red-text">Fill all the field marked with *</b>'})
                this.hideLoader = true
            } else {

                var checkList = ""
                checkList = {
                    terminalNumber: this.terminal_number,
                    paymentChannelSupervisor: this.payment_channel_supervisor,
                    businessUnit: this.business_unit,
                    activity: this.activity,
                    latitude: this.lat,
                    outletType: this.outlet_type,
                    paymentTerminalStatus: this.payment_terminal_status,
                    sanction: this.sanction,
                    editStartTime: "",
                    behaviourOfCustomer: this.satisfactory_behavior_to_customer,
                    closeMonitoring: this.close_monitoring,
                    specifyActivity: this.specific_activity,
                    longitude: this.long,
                    printerReplacement: this.printer_replacement,
                    distanceToNearestAgent: this.distance_to_nearest_agent,
                    address: this.address,
                    dealerName: this.dealer_name,
                    receiptToCustomers: this.receipt_issuance_to_customer,
                    printerOkay: this.printer_okay,
                    trainingRequired: this.training_required,
                    brandCollateralRequired: this.brand_collateral_required,
                    agentName: this.agent_name,
                    paymentChannelType: this.payment_channel_type,
                    othersForPaymentChannels: this.others_for_payment_channel,
                    locationOkay: this.location_okay,
                    editEndTime: "",
                    printerStatus: this.printer_status,
                    brandCollateral: this.brand_collateral,
                    furtherRemarks: this.further_remarks,
                    brandType: this.brand_type,
                    createdDate: "",
                    phoneNumber: this.phone_number,
                    undertaking: this.undertaking_one,
                    paymentAgentCluster: this.payment_agent_cluster,
                    relocate: this.relocate,
                    businessEnvironment: this.business_env,
                    customerRelationsOkay: this.customer_relations_okay,
                    lastUpdateTime: "",
                    user: localStorage.getItem('fullname')
                }

                checkList = JSON.stringify(checkList)
                console.log(typeof checkList)
                
                var formData = new FormData()
                formData.append("files", this.pic_of_payment_terminal_one);
                formData.append("files", this.pic_of_payment_terminal_one2);
                formData.append("files", this.pic_of_brand_collateral_one);
                formData.append("files", this.pic_of_brand_collateral_one2);
                formData.append("files", this.pic_of_outlet_one);
                formData.append("files", this.pic_of_outlet_one2);
                formData.append("files", this.signature);
                
                formData.append("checklist", checkList)
                


                const rawResponse = await fetch('https://api.ikejaelectric.com/ieforms/1.0/checklist/submit', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.token, 
                            'Auth': 'Bearer fae96b00-8ef4-3473-bfb6-c5b1107b2c2b', 
                            'form_type': 'PAYMENTCHANNEL',
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