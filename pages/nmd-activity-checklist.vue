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
                NMD ACTIVITY CHECKLIST
            </h6>
            </div>
        </div>
  
      
  
      <div class="row">
        <!-- Signature file for Employee  -->
        <div class="row">
            <div class="col s12">

                <!-- Custom Modal employee Structure -->
                <div class="row" :class="{'hide': hideEmployeeModal}">

                    <div class="row">
                        <a href="#!" class="waves-effect waves-red btn-large white red-text right" @click="hideEmployeeSignatureModule()">DONE</a>
                    </div>

                    <div class="row">
                        <div class="container">
                            <div class="row">
                                <div class="col s12 center">
                                    <h6>Employee Sign here!</h6>
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
        <!-- signature module for employee ends here -->



        <!-- Signature file for customer  -->
        <div class="row">
            <div class="col s12">

                <!-- Custom Modal customer Structure -->
                <div class="row" :class="{'hide': hideCustomerModal}">

                    <div class="row">
                        <a href="#!" class="waves-effect waves-red btn-large white red-text right" @click="hideCustomerSignatureModule()">DONE</a>
                    </div>

                    <div class="row">
                        <div class="container">
                            <div class="row">
                                <div class="col s12 center">
                                    <h6>Customer Sign here!</h6>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12 center">
                                    <canvas id="sig-canvas-cus" width="250px" style="border-style:dashed">
                                        Your phone not supporting signature
                                    </canvas>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col s12 center">
                                    <div class="col s6">
                                        <button class="btn btn-large red" id="sig-submitBtn-cus">Save</button>
                                    </div>
                                    <div class="col s6">
                                        <button class="btn btn-large red" id="sig-clearBtn-cus">Clear</button>
                                    </div>
                                    
                                </div>
                            </div>
                            <br/>
                            <div class="row">
                                <div class="col s12">
                                    <textarea id="sig-dataUrl-cus" class="form-control hide" rows="5">Data URL for your signature will go here!</textarea>
                                </div>
                            </div>
                        </div>
                    </div>

                    
                </div>


            </div>
        </div>
        <!-- signature module for customer ends here -->
        
        <!-- form starts here -->
        <div class="row" :class="{'hide': hideForm}">
            <div class="col s12">
                <form @submit.prevent style="margin-top: 20px">

                    <div class="row">
                        <!-- business unit -->
                        <div class="col s12">
                            <select v-model="business_unit">
                                <option value="" disabled selected>Business Unit  *</option>
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
                        <!-- activity -->
                        <div class="col s12">
                            <select v-model="activity">
                                <option value="" disabled selected>Activity  </option>
                                <option value="Meter Installation<">Meter Installation</option>
                                <option value="Recertification">Recertification</option>
                                <option value="Fault resulution">Fault resulution</option>
                                <option value="Investigation">Investigation</option>
                                <option value="Commission">Commission</option>
                                <option value="Meter upgrade">Meter upgrade</option>
                                <option value="Meter re-installed">Meter re-installed</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- SR number -->
                        <div class="col s12">
                            <input type="text" placeholder="SR number  " v-model="sr_number">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Customer name -->
                        <div class="col s12">
                            <input type="text" placeholder="Customer name  " v-model="customer_name">
                        </div>
                    </div>

                    <div class="row">
                        <!-- account number -->
                        <div class="col s12">
                            <input type="text" placeholder="Account number  " v-model="account_number">
                        </div>
                    </div>

                    <div class="row">
                        <!-- address -->
                        <div class="col s12">
                            <input type="text" placeholder="Address  " v-model="address">
                        </div>
                    </div>

                    <div class="row">
                        <div class="col s12">
                            <input type="text" v-model="phone_number" placeholder="Customer phone number">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Customer type -->
                        <div class="col s12">
                            <select v-model="customer_type">
                                <option value="" disabled selected>Customer type  </option>
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
                            <input type="text" placeholder="Feeder name  " v-model="feeder_name">
                        </div>
                    </div>

                    <div class="row">
                        <!-- DT name -->
                        <div class="col s12">
                            <input type="text" placeholder="DT name  " v-model="dt_name">
                        </div>
                    </div>

                    <div class="row">
                        <!-- DT capacity -->
                        <div class="col s12">
                            <input type="text" placeholder="DT capacity (KVA)" v-model="dt_capacity">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Current tariff -->
                        <div class="col s12">
                            <select v-model="current_tariff">
                                <option value="" disabled selected>Current tariff  </option>
                                <option value="A1SP">A1SP</option>
                                <option value="A1TP">A1TP</option>
                                <option value="C1SP">C1SP</option>
                                <option value="C1TP">C1TP</option>
                                <option value="R2SP">R2SP</option>
                                <option value="R2TP">R2TP</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Recommended tariff -->
                        <div class="col s12">
                            <select v-model="recommended_tariff">
                                <option value="" disabled selected>Recommended tariff  </option>
                                <option value="A1SP">A1SP</option>
                                <option value="A1TP">A1TP</option>
                                <option value="C1SP">C1SP</option>
                                <option value="C1TP">C1TP</option>
                                <option value="R1">R1</option>
                                <option value="R2SP">R2SP</option>
                                <option value="R2TP">R2TP</option>
                                <option value="D1SP">D1SP</option>
                                <option value="D2TP">D2TP</option>
                                <option value="P19">P19</option>
                                <option value="P20">P20</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Meter serial number -->
                        <div class="col s12">
                            <input type="text" placeholder="Meter serial number  " v-model="meter_serial_number">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Meter Manufacturer -->
                        <div class="col s12">
                            <input type="text" placeholder="Meter Manufacturer  " v-model="meter_manufacturer">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Meter type -->
                        <div class="col s12">
                            <select v-model="meter_payment_type">
                                <option value="" disabled selected>Meter payment type  </option>
                                <option value="Postpaid">Postpaid</option>
                                <option value="Smartcard">Smartcard</option>
                                <option value="Non-AMI STS">Non-AMI STS</option>
                                <option value="AMI STS">AMI STS</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Meter payment type -->
                        <div class="col s12">
                            <select v-model="meter_type">
                                <option value="" disabled selected>Meter type</option>
                                <option value="1ph">1ph</option>
                                <option value="3ph">3ph</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Meter box type -->
                        <div class="col s12">
                            <select v-model="meter_box_type">
                                <option value="" disabled selected>Meter box type</option>
                                <option value="6-in-one">6-in-one</option>
                                <option value="1-in-1">1-in-1</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Meter payment type -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Tube
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="tube">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- MCB -->
                        <div class="col s12">
                            <select v-model="mcb">
                                <option value="" disabled selected>MCB  </option>
                                <option value="Bad">Bad</option>
                                <option value="Good">Good</option>
                                <option value="NA">NA</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- Metering status -->
                        <div class="col s12">
                            <select v-model="meter_status">
                                <option value="" disabled selected>Metering status  </option>
                                <option value="Functional">Functional</option>
                                <option value="Faulty">Faulty</option>
                                <option value="Burnt">Burnt</option>
                                <option value="Not sighted">Not sighted</option>
                                <option value="Bypassed">Bypassed</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- No of service wires -->
                        <div class="col s12">
                            <select v-model="no_of_service_wires">
                                <option value="" disabled selected>No of service wires</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!-- service wire traceable to meter -->
                        <div class="col s12">
                            <h6 class="red-text">
                                Service wire traceable to meter  
                            </h6>
                            <div class="switch">
                                <label>
                                Off
                                <input type="checkbox" v-model="service_wire_traceable_to_meter">
                                <span class="lever"></span>
                                On
                                </label>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        <!-- old seal -->
                        <div class="col s12">
                            <input type="text" placeholder="Old seal  " v-model="old_seal">
                        </div>
                    </div>

                    <div class="row">
                        <!-- new seal -->
                        <div class="col s12">
                            <input type="text" placeholder="New seal" v-model="new_seal">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Recommended energy recovery -->
                        <div class="col s12">
                            <input type="text" placeholder="Recommended energy recovery" v-model="recommended_energy_recovery">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Further remarks   -->
                        <div class="col s12">
                            <input type="text" placeholder="Further remarks  " v-model="further_remarks">
                        </div>
                    </div>

                    <div class="row">
                        <!-- Recommendation   -->
                        <div class="col s12">
                            <input type="text" placeholder="Recommendation  " v-model="recommendation">
                        </div>
                    </div>

                    <br>
                    <div class="row">
                        <!-- Metering initiative -->
                        <div class="col s12">
                            <select v-model="metering_initiative">
                                <option value="" disabled selected>Metering initiative  </option>
                                <option value="Premium power">Premium power</option>
                                <option value="Concession">Concession</option>
                                <option value="Prime customer metering">Prime customer metering</option>
                                <option value="Map">Map</option>
                                <option value="Non Map">Non Map</option>
                            </select>
                        </div>
                    </div>
                    <br>

                    <!-- Pictorial Evidence -->
                    <div class="row center">
                        <h5 class="red-text"> - Pictorial Evidence - </h5>
                    </div>

                    <div class="row">
                        <!--Picture of meter card   -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of meter card</h6>
                            <button class="btn red btn-large" @click="imagePickerForPictureOfMeterCard()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for meter card -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-meter-card" />
                        </div>
                    </div>
                    <br>

                    <div class="row">
                        <!--Picture of installation   -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of installation</h6>
                            <button class="btn red btn-large" @click="imagePickerForPictureOfInstallation()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for installation -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-installation" />
                        </div>
                    </div>
                    <br>


                    

                    <div class="row">
                        <!--Picture of installation 2  -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of installation 2</h6>
                            <button class="btn red btn-large" @click="imagePickerForPictureOfInstallation2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for installation 2-->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-installation2" />
                        </div>
                    </div>
                    <br>




                    <div class="row">
                        <!--Picture of meter NamePlate 1   -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of meter NamePlate 1</h6>
                            <button class="btn red btn-large" @click="imagePickerForPictureOfMeterNamePlateOne()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for meter NamePlate 1 -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-meter-name-plate-one" />
                        </div>
                    </div>
                    <br>





                    <div class="row">
                        <!--Picture of meter NamePlate 2   -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of meter NamePlate 2</h6>
                            <button class="btn red btn-large" @click="imagePickerForPictureOfMeterNamePlateOne2()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for meter NamePlate 1 -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-meter-name-plate-one2" />
                        </div>
                    </div>
                    <br>







                    <div class="row">
                        <!--Picture of meter NamePlate 3   -->
                        <div class="col s12">
                            <h6 class="red-text">Picture of meter NamePlate 3</h6>
                            <button class="btn red btn-large" @click="imagePickerForPictureOfMeterNamePlateOne3()">
                                <i class="material-icons white-text">camera_alt</i>
                            </button>
                        </div>
                    </div>

                    <!-- output for meter NamePlate 1 -->
                    <div class="row">
                        <div class="col s12">
                            <img class=" responsive-img" id="output-pic-of-meter-name-plate-one3" />
                        </div>
                    </div>
                    <br>







                    <div class="row center">
                        <!-- Modal Trigger -->
                        <a class="waves-effect waves-light btn white red-text center" @click="showCustomerSignatureModule()">Customer's signature</a>
                    </div>
                    <!-- Customer signature image  -->
                    <div class="container">
                        <br/>
                        <div class="row">
                            <div class="col s12">
                                <img id="sig-image-cus" src="" alt=""/>
                            </div>
                        </div>
                    </div>
                    <br>

                    <div class="row center">
                        <!-- Modal Trigger -->
                        <a class="waves-effect waves-light btn white red-text center" @click="showEmployeeSignatureModule()">Employee's signature</a>
                    </div>
                    <div class="container">
                        <br/>
                        <div class="row">
                            <div class="col s12">
                                <img id="sig-image" src="" alt=""/>
                            </div>
                        </div>
                    </div>
                    <br>
                    <br>


                    <!-- New meter information -->
                    <div class="row center">
                        <h5 class="red-text"> - New meter information - </h5>
                    </div>
                    <div class="row">
                        <!-- Meter number -->
                        <div class="col s12">
                            <input type="text" placeholder="Meter number" v-model="meter_number" >
                        </div>
                    </div>
                    <div class="row">
                        <!-- Energy data -->
                        <div class="col s12">
                            <input type="text" placeholder="Energy data" v-model="energy_data" >
                        </div>
                    </div>
                    <div class="row">
                        <!-- Reading time -->
                        <div class="col s12">
                            <input type="date" v-model="reading_time" id="readingTime">
                            <label for="readingTime">Reading time:</label>
                        </div>
                    </div>
                    <div class="row">
                        <!-- Remaining energy -->
                        <div class="col s12">
                            <input type="text" placeholder="Remaining energy" v-model="remaining_energy" >
                        </div>
                    </div>
                    <div class="row">
                        <!-- Reading time -->
                        <div class="col s12">
                            <input type="date" v-model="reading_time_two" id="readingTime2">
                            <label for="readingTime2">Reading time:</label>
                        </div>
                    </div>
                    <div class="row">
                        <!-- Meter make -->
                        <div class="col s12">
                            <input type="text" placeholder="Meter make" v-model="meter_make" >
                        </div>
                    </div>
                    <div class="row">
                        <!-- Sim serial no -->
                        <div class="col s12">
                            <input type="text" placeholder="Sim serial no" v-model="sim_serial_number" >
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
            sr_number: '',
            customer_name: '',
            account_number: '',
            address: '',
            phone_number: '',
            customer_type: '',
            feeder_name: '',
            dt_name: '',
            dt_capacity: '',
            current_tariff: '',
            recommended_tariff: '',
            meter_serial_number: '', 
            meter_manufacturer: '',
            meter_payment_type: '',
            meter_type: '',
            meter_box_type: '',
            tube: false,
            mcb: '',
            meter_status: '',
            no_of_service_wires: '',
            service_wire_traceable_to_meter: '',
            old_seal: '',
            new_seal: '',
            recommended_energy_recovery: '',
            further_remarks: '',
            recommendation: '',
            metering_initiative: '',

            // pictorial evidence
            pic_of_meter_card: '',
            pic_of_installation: '',
            pic_of_installation2: '',
            pic_of_meter_name_plate_one: '',
            pic_of_meter_name_plate_one2: '',
            pic_of_meter_name_plate_one3: '',
            customer_signature: '',
            ie_office_signature: '',
            
            // new meter information
            meter_number: '',
            energy_data: '',
            reading_time: '',
            remaining_energy: '',
            reading_time_two: '',
            meter_make: '',
            sim_serial_number: '',

            current_date: '',
            

            lat: '',
            long: '',

            dataURL: '',
            hideLoader: true,

            hideCustomerModal: true,
            hideEmployeeModal: true,
            hideForm: false,

            dataURI_e: '',
            dataURI_c: '',

        }
      },

      methods: {

        // signature of IE employee
        trySignEmployee() {
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
                    localStorage['vsmSignatureURLOfficer'] = dataUrl

                    sigText.innerHTML = dataUrl;
                    sigImage.setAttribute("src", dataUrl);
                    M.toast({html: '<b class="yellow-text">Signature saved</b>'})
                    
                }, false);

                })();
        },


        getDataURLFromLocalStorageIEOfficer() {
            var dataURI = localStorage.getItem('vsmSignatureURLOfficer')

            if (dataURI == null) {
                dataURI = ''
            } else {
                var byteString;
                if (dataURI.split(',')[0].indexOf('base64') >= 0)
                    byteString = window.atob(dataURI.split(',')[1]);
                else
                    byteString = decodeURI(dataURI.split(',')[1]);
                // separate out the mime component
                var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
                // write the bytes of the string to a typed array
                var ia = new Uint8Array(byteString.length);
                for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                var file = new Blob([ia], {type:mimeString});
                this.ie_office_signature = new File([file], `ieOfficerSignature${file.type.replace('image/', '.')}`)
                console.log(this.ie_office_signature)
            }

            
        },



        trySignCustomer() {
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

                var canvas = document.getElementById("sig-canvas-cus");
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
                var sigText = document.getElementById("sig-dataUrl-cus");
                var sigImage = document.getElementById("sig-image-cus");
                var clearBtn = document.getElementById("sig-clearBtn-cus");
                var submitBtn = document.getElementById("sig-submitBtn-cus");
                clearBtn.addEventListener("click", function(e) {
                    clearCanvas();
                    sigText.innerHTML = "Data URL for your signature will go here!";
                    sigImage.setAttribute("src", "");
                }, false);
                submitBtn.addEventListener("click", function(e) {
                    var dataUrl = canvas.toDataURL();
                    sigImage.setAttribute("src", dataUrl);
                    localStorage['vsmSignatureURLCustomer'] = dataUrl
                    M.toast({html: '<b class="yellow-text">Signature saved</b>'})
                }, false);

                })();
        },

        getDataURLFromLocalStorageCustomer() {
            var dataURI = localStorage.getItem('vsmSignatureURLCustomer')

            if (dataURI == null) {

            } else {
                var byteString;
                if (dataURI.split(',')[0].indexOf('base64') >= 0)
                    byteString = window.atob(dataURI.split(',')[1]);
                else
                    byteString = decodeURI(dataURI.split(',')[1]);
                // separate out the mime component
                var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
                // write the bytes of the string to a typed array
                var ia = new Uint8Array(byteString.length);
                for (var i = 0; i < byteString.length; i++) {
                    ia[i] = byteString.charCodeAt(i);
                }
                var file = new Blob([ia], {type:mimeString});
                this.customer_signature = new File([file], `customersSignature${file.type.replace('image/', '.')}`)
                console.log(this.customer_signature)
            }

            
        },




        // picture of meter card
        async imagePickerForPictureOfMeterCard() {
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
            this.handleImageUploadForPictureOfMeterCard(blob)
        },
 
        async handleImageUploadForPictureOfMeterCard(event) {

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
                const output = document.getElementById('output-pic-of-meter-card');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_meter_card = new File([compressedFile], `pictureOfMeterCard${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)

            } catch (error) {
                console.log(error);
            }

        },


        // picture of installation
        async imagePickerForPictureOfInstallation() {
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
            this.handleImageUploadForPictureOfInstallation(blob)
        },
 
        async handleImageUploadForPictureOfInstallation(event) {

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
                const output = document.getElementById('output-pic-of-installation');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_installation = new File([compressedFile], `pictureOfInstallation${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)

            } catch (error) {
                console.log(error);
            }

        },





        // picture of installation
        async imagePickerForPictureOfInstallation2() {
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
            this.handleImageUploadForPictureOfInstallation2(blob)
        },
 
        async handleImageUploadForPictureOfInstallation2(event) {

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
                const output = document.getElementById('output-pic-of-installation2');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_installation2 = new File([compressedFile], `pictureOfInstallation2${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)

            } catch (error) {
                console.log(error);
            }

        },







        // picture of meter name plate one
        async imagePickerForPictureOfMeterNamePlateOne() {
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
            this.handleImageUploadForPictureOfMeterNamePlateOne(blob)
        },
 
        async handleImageUploadForPictureOfMeterNamePlateOne(event) {

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
                const output = document.getElementById('output-pic-of-meter-name-plate-one');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_meter_name_plate_one = new File([compressedFile], `meterNameplate${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)

            } catch (error) {
                console.log(error);
            }

        },





        // picture of meter name plate one
        async imagePickerForPictureOfMeterNamePlateOne2() {
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
            this.handleImageUploadForPictureOfMeterNamePlateOne2(blob)
        },
 
        async handleImageUploadForPictureOfMeterNamePlateOne2(event) {

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
                const output = document.getElementById('output-pic-of-meter-name-plate-one2');

                const compressedFile = await imageCompression(imageFile, options);
                // console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                // console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_meter_name_plate_one2 = new File([compressedFile], `meterNameplate2${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)

            } catch (error) {
                console.log(error);
            }

        },







        // picture of meter name plate one
        async imagePickerForPictureOfMeterNamePlateOne3() {
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
            this.handleImageUploadForPictureOfMeterNamePlateOne3(blob)
        },
 
        async handleImageUploadForPictureOfMeterNamePlateOne3(event) {

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
                const output = document.getElementById('output-pic-of-meter-name-plate-one3');

                const compressedFile = await imageCompression(imageFile, options);
                console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
                console.log(`compressedFile size ${compressedFile.size / 50 / 50} MB`); // smaller than maxSizeMB

                // await uploadToServer(compressedFile); // write your own logic
                this.pic_of_meter_name_plate_one3 = new File([compressedFile], `meterNameplate3${compressedFile.type.replace('image/', '.')}`)
                if (compressedFile !== null) {
                    output.src = URL.createObjectURL(compressedFile);
                }
                // console.log(this.pic_of_premises)

            } catch (error) {
                console.log(error);
            }

        },


        formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
            return strTime;
        },




        async sumbitVSM() {
            this.hideLoader = false
            this.business_unit = this.business_unit.trim()
            this.undertaking_one = this.undertaking_one.trim()
            this.customer_name = this.customer_name.trim()
            this.activity = this.activity.trim()
            this.sr_number = this.sr_number.trim()
            this.address = this.address.trim()
            this.phone_number = this.phone_number.trim()
            this.customer_type = this.customer_type.trim()
            this.feeder_name = this.feeder_name.trim()
            this.dt_name = this.dt_name.trim()
            this.current_tariff = this.current_tariff.trim()
            this.recommended_tariff = this.recommended_tariff.trim()
            this.meter_serial_number = this.meter_serial_number.trim()
            this.meter_manufacturer = this.meter_manufacturer.trim()
            this.meter_payment_type = this.meter_payment_type.trim()
            this.mcb = this.mcb.trim()
            this.meter_status = this.meter_status.trim()
            this.old_seal = this.old_seal.trim()
            this.further_remarks = this.further_remarks.trim()
            this.recommendation = this.recommendation.trim()
            this.metering_initiative = this.metering_initiative.trim()
            this.current_date = new Date().toLocaleString();
            this.getDataURLFromLocalStorageCustomer()
            this.getDataURLFromLocalStorageIEOfficer()


            var today1 = new Date(this.reading_time);
            var today2 = new Date(this.reading_time_two);
            const months1 = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
            const months2 = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];

            let month1 = months1[today1.getMonth()];
            let month2 = months2[today2.getMonth()];
            
            var date1 = month1+' '+today1.getDate()+', '+today1.getFullYear();
            var date2 = month2+' '+today2.getDate()+', '+today2.getFullYear();

            var time1 = this.formatAMPM(new Date);
            var time2 = this.formatAMPM(new Date);

            this.reading_time = date1 + ' '+ time1
            this.reading_time_two = date2 + ' '+ time2

            console.log(this.reading_time)
            console.log(this.reading_time_two)


            


            if (this.business_unit == '') {
                M.toast({html: '<b class="red-text">Fill all the field marked with  *</b>'})
                this.hideLoader = true
            } else {

                var checkList = ""
                checkList = {
                    oldSeal: this.old_seal,
                    businessUnit: this.business_unit,
                    meterPaymentType: this.meter_payment_type,
                    meterMake: this.meter_make,
                    recommendation: this.recommendation,
                    pictureOfInstallation10: "",
                    mcb: this.mcb,
                    recommendedEnergyRecovery: this.recommended_energy_recovery,
                    recommendedTariff: this.recommended_tariff,
                    remainingTime: "",
                    customerType: this.customer_type,
                    dtName: this.dt_name,
                    energyData: this.energy_data,
                    readingTime1: this.reading_time_two,
                    longitude: this.long,
                    currentTariff: this.current_tariff,
                    editEndTime: "",
                    customerName: this.customer_name,
                    meterBoxType: this.meter_box_type,
                    meterStatus: this.meter_status,
                    tube: this.tube,
                    numberOfServiceWires: this.no_of_service_wires,
                    feederName: this.feeder_name,
                    ieOfficersName: localStorage.getItem('fullname'),
                    lastUpdateTime: "",
                    meteringInitiative: this.metering_initiative,
                    customersName: this.customer_name,
                    activity: this.activity,
                    meterNumber: this.meter_number,
                    newSeal: this.new_seal,
                    latitude: this.lat,
                    creditOnMeter: this.remaining_energy,
                    simSerialNumber: this.sim_serial_number,
                    readingTime: this.reading_time,
                    customersPhoneNumber: this.phone_number,
                    editStartTime: "",
                    address: this.address,
                    srNumber: this.sr_number,
                    meterSerialNumber: this.meter_serial_number,
                    dtCapacity: this.dt_capacity,
                    accountNumber: this.account_number,
                    furtherRemarks: this.further_remarks,
                    createdDate: "",
                    undertaking: this.undertaking_one,
                    meterManufacturer: this.meter_manufacturer,
                    meterType: this.meter_type,
                    serviceWireToMeter: this.service_wire_traceable_to_meter,

                    user: localStorage.getItem('fullname')
                }

                checkList = JSON.stringify(checkList)
                
                var formData = new FormData()

                formData.append("checklist", checkList)
                formData.append("files", this.pic_of_meter_card)
                formData.append("files", this.pic_of_installation)
                formData.append("files", this.pic_of_installation2)
                formData.append("files", this.pic_of_meter_name_plate_one)
                formData.append("files", this.pic_of_meter_name_plate_one2)
                formData.append("files", this.pic_of_meter_name_plate_one3)
                formData.append("files", this.ie_office_signature)
                formData.append("files", this.customer_signature)
                


                const rawResponse = await fetch('https://api.ikejaelectric.com/ieforms/1.0/checklist/submit', {
                        method: 'POST',
                        headers: {
                            'Authorization': 'Bearer ' + localStorage.token, 
                            'Auth': 'Bearer fae96b00-8ef4-3473-bfb6-c5b1107b2c2b', 
                            'form_type': 'NMDACTIVITY',
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

        getFormatedDate(data) {
            var today = new Date(data);
            const months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
            let month = months[today.getMonth()];
            var date = month+' '+today.getDate()+', '+today.getFullYear();
            var time = this.formatAMPM(new Date);
            return date + ' '+ time
        },

        formatAMPM(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var seconds = date.getSeconds();
            var ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ':' + seconds + ' ' + ampm;
            return strTime;
        },


        // get longitude and latitude
        async printCurrentPosition () {
            const coordinates = await Geolocation.getCurrentPosition();

            this.lat = coordinates.coords.latitude
            this.long = coordinates.coords.longitude
        },


        showCustomerSignatureModule() {
            this.hideCustomerModal = false
            this.hideForm = true
        },

        hideCustomerSignatureModule() {
            this.hideCustomerModal = true
            this.hideForm = false
        },


        showEmployeeSignatureModule() {
            this.hideEmployeeModal = false
            this.hideForm = true
        },

        hideEmployeeSignatureModule() {
            this.hideEmployeeModal = true
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

        this.trySignCustomer()
        this.trySignEmployee()
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